import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";

const ROOT = process.cwd();
const TRANSCRIPT_DIR = path.join(ROOT, "materials", "transcripts");
const AUDIO_CACHE_DIR = path.join(TRANSCRIPT_DIR, "audio");
const OPENAI_URL = "https://api.openai.com/v1/audio/transcriptions";
const MODEL = process.env.OPENAI_TRANSCRIBE_MODEL || "gpt-4o-mini-transcribe";
const MAX_BYTES =
  Number(process.env.TRANSCRIBE_MAX_MB || "24") * 1024 * 1024;

const MEDIA_EXTENSIONS = new Set([
  ".mp3",
  ".m4a",
  ".wav",
  ".webm",
  ".mp4",
  ".mov",
]);

const VIDEO_EXTENSIONS = new Set([".mp4", ".mov"]);

const SOURCE_DIRS = [
  path.join(ROOT, "materials"),
  path.resolve(ROOT, "..", "daviddefazio", "video_files"),
];

function loadDotEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!existsSync(envPath)) return;
  const text = readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!match || process.env[match[1]]) continue;
    process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
}

function argValue(name, fallback) {
  const index = process.argv.indexOf(name);
  if (index >= 0 && process.argv[index + 1]) return process.argv[index + 1];
  const inline = process.argv.find((arg) => arg.startsWith(`${name}=`));
  return inline ? inline.slice(name.length + 1) : fallback;
}

function slugFor(filePath) {
  const base = path
    .basename(filePath, path.extname(filePath))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  const hash = createHash("sha1").update(filePath).digest("hex").slice(0, 8);
  return `${base || "media"}-${hash}`;
}

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".mp3") return "audio/mpeg";
  if (ext === ".m4a") return "audio/mp4";
  if (ext === ".wav") return "audio/wav";
  if (ext === ".webm") return "audio/webm";
  if (ext === ".mov") return "video/quicktime";
  return "video/mp4";
}

function isVideo(filePath) {
  return VIDEO_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

async function runFfmpeg(args) {
  if (!ffmpegPath) {
    throw new Error("ffmpeg-static is not available.");
  }

  await new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(stderr.trim() || `ffmpeg exited with code ${code}`));
    });
  });
}

async function extractAudio(filePath) {
  await mkdir(AUDIO_CACHE_DIR, { recursive: true });
  const outPath = path.join(AUDIO_CACHE_DIR, `${slugFor(filePath)}.mp3`);
  if (existsSync(outPath)) return outPath;

  await runFfmpeg([
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    filePath,
    "-vn",
    "-ac",
    "1",
    "-ar",
    "16000",
    "-b:a",
    "32k",
    outPath,
  ]);

  return outPath;
}

async function walk(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "transcripts") continue;
      files.push(...(await walk(fullPath)));
    } else if (MEDIA_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function transcribe(filePath, apiKey) {
  const bytes = await readFile(filePath);
  const file = new File([bytes], path.basename(filePath), {
    type: mimeFor(filePath),
  });

  const form = new FormData();
  form.set("model", MODEL);
  form.set("file", file);
  form.set("response_format", "text");
  form.set(
    "prompt",
    "Context: Dr. David De Fazio, Electrolyzed Reduced Water, Kangen Water, Enagic, ORP, molecular hydrogen, Dr. Michael Donaldson, Dr. Pinky, regenerative wellness."
  );

  const response = await fetch(OPENAI_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${response.status} ${text}`);
  }
  return text.trim();
}

async function main() {
  loadDotEnv();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Set it in the shell or .env.local.");
  }

  const limit = Number(argValue("--limit", "6"));
  await mkdir(TRANSCRIPT_DIR, { recursive: true });

  const allFiles = [];
  for (const sourceDir of SOURCE_DIRS) {
    allFiles.push(...(await walk(sourceDir)).sort((a, b) => a.localeCompare(b)));
  }

  let processed = 0;
  const report = [];

  for (const filePath of allFiles) {
    if (processed >= limit) break;
    const fileStat = await stat(filePath);
    const outPath = path.join(TRANSCRIPT_DIR, `${slugFor(filePath)}.md`);

    if (existsSync(outPath)) {
      report.push({ filePath, status: "exists" });
      continue;
    }

    let uploadPath = filePath;
    let uploadStat = fileStat;
    let extractedAudio = false;

    if (isVideo(filePath)) {
      try {
        uploadPath = await extractAudio(filePath);
        uploadStat = await stat(uploadPath);
        extractedAudio = true;
      } catch (error) {
        report.push({
          filePath,
          status: "audio-extract-error",
          error: error instanceof Error ? error.message.slice(0, 600) : String(error),
        });
        continue;
      }
    }

    if (uploadStat.size > MAX_BYTES) {
      report.push({
        filePath,
        status: "skipped-large",
        megabytes: Number((uploadStat.size / 1024 / 1024).toFixed(1)),
      });
      continue;
    }

    try {
      const relativeSource = path.relative(ROOT, filePath);
      const relativeUpload = path.relative(ROOT, uploadPath);
      console.log(
        `Transcribing ${relativeSource}${
          extractedAudio ? ` via ${relativeUpload}` : ""
        }`
      );
      const transcript = await transcribe(uploadPath, apiKey);
      await writeFile(
        outPath,
        [
          "---",
          `source: "${filePath.replaceAll("\\", "\\\\")}"`,
          extractedAudio
            ? `upload_source: "${uploadPath.replaceAll("\\", "\\\\")}"`
            : `upload_source: "${filePath.replaceAll("\\", "\\\\")}"`,
          `model: "${MODEL}"`,
          `bytes: ${fileStat.size}`,
          `upload_bytes: ${uploadStat.size}`,
          "---",
          "",
          transcript,
          "",
        ].join("\n"),
        "utf8"
      );
      report.push({
        filePath,
        status: "transcribed",
        outPath,
        extractedAudio,
      });
      processed += 1;
    } catch (error) {
      report.push({
        filePath,
        status: "error",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  const reportPath = path.join(TRANSCRIPT_DIR, "transcription-run.json");
  await writeFile(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.log(`Wrote ${reportPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
