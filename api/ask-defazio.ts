import { DEFAZIO_SYSTEM_PROMPT } from "./defazioKnowledge.js";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

function polishAnswer(answer: string) {
  return answer
    .replace(/\belectrically changed water\b/gi, "electrically charged water")
    .replace(/\belectrically changed\b/gi, "electrically charged")
    .replace(/\belectrical changed water\b/gi, "electrically charged water");
}

function cleanMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];

  return input
    .filter((m): m is ChatMessage => {
      return (
        m &&
        typeof m === "object" &&
        (m as ChatMessage).role !== "system" &&
        ((m as ChatMessage).role === "user" ||
          (m as ChatMessage).role === "assistant") &&
        typeof (m as ChatMessage).content === "string"
      );
    })
    .slice(-10)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, 2200),
    }));
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error:
        "Ask DeFazio AI is not configured yet. Missing OPENROUTER_API_KEY.",
    });
  }

  let body: any;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid request body." });
  }
  const messages = cleanMessages(body?.messages);

  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return res.status(400).json({ error: "Please send a question." });
  }

  try {
    const upstream = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://water-lake.vercel.app",
        "X-Title": "Ask DeFazio AI",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini",
        temperature: 0.62,
        max_tokens: 850,
        messages: [
          { role: "system", content: DEFAZIO_SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error:
          data?.error?.message ||
          "The AI service is unavailable right now. Please try again shortly.",
      });
    }

    const answer = data?.choices?.[0]?.message?.content;
    if (!answer) {
      return res.status(502).json({
        error: "The AI service returned an empty answer.",
      });
    }

    return res.status(200).json({ answer: polishAnswer(answer) });
  } catch (error) {
    console.error("Ask DeFazio AI error", error);
    return res.status(500).json({
      error: "Ask DeFazio AI had trouble answering. Please try again.",
    });
  }
}
