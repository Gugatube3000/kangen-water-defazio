/**
 * Dr. David De Fazio — Electrolyzed Reduced Water lecture deck
 * Built from his lecture-slide photographs, his text-message directives,
 * and the live water-lake.vercel.app site.
 *
 * Run: node scripts/build_deck.js
 * Output: Dr_DeFazio_ERW_Lecture.pptx in project root
 */
const PptxGenJS = require("pptxgenjs");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 in
pptx.title = "Electrolyzed Reduced Water — Dr. David De Fazio";
pptx.author = "Dr. David De Fazio";
pptx.company = "Doctor of Regenerative Wellness";

// ---- Palette (matches the live site) ----
const C = {
  navy: "0B1228",
  navy2: "1A2554",
  navy3: "243370",
  aqua: "48C7DC",
  aquaLight: "A4E7F0",
  aquaDeep: "6FD7E6",
  silver: "F4F6FB",
  silver2: "D7DEEA",
  silver3: "8E97B0",
  amber: "F4A05A",
  amberDeep: "B57D2E",
  green: "7CC97E",
  rust: "8B4513",
};

// ---- Fonts ----
const F = {
  display: "Georgia",
  body: "Calibri",
};

// ---- Reusable helpers ----
function setDarkBg(slide) {
  slide.background = { color: C.navy };
  // Subtle radial accent
  slide.addShape("ellipse", {
    x: -2,
    y: -2,
    w: 8,
    h: 8,
    fill: { color: C.navy3, transparency: 80 },
    line: { type: "none" },
  });
  slide.addShape("ellipse", {
    x: 9,
    y: 4,
    w: 6,
    h: 5,
    fill: { color: C.aqua, transparency: 90 },
    line: { type: "none" },
  });
}

function setLightBg(slide) {
  slide.background = { color: C.silver };
  // Header accent bar
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: 13.33,
    h: 0.08,
    fill: { color: C.aqua },
    line: { type: "none" },
  });
}

function addFooter(slide, num, total) {
  slide.addText("DR. DAVID DE FAZIO  ·  REGENERATIVE WELLNESS", {
    x: 0.5,
    y: 7.05,
    w: 8,
    h: 0.3,
    fontFace: F.body,
    fontSize: 9,
    color: C.silver3,
    charSpacing: 4,
  });
  slide.addText(`${num} / ${total}`, {
    x: 11.83,
    y: 7.05,
    w: 1,
    h: 0.3,
    fontFace: F.body,
    fontSize: 9,
    color: C.silver3,
    align: "right",
  });
}

function addDarkFooter(slide, num, total) {
  slide.addText("DR. DAVID DE FAZIO  ·  REGENERATIVE WELLNESS", {
    x: 0.5,
    y: 7.05,
    w: 8,
    h: 0.3,
    fontFace: F.body,
    fontSize: 9,
    color: C.silver3,
    charSpacing: 4,
  });
  slide.addText(`${num} / ${total}`, {
    x: 11.83,
    y: 7.05,
    w: 1,
    h: 0.3,
    fontFace: F.body,
    fontSize: 9,
    color: C.silver3,
    align: "right",
  });
}

function kicker(slide, text, x, y, color = C.aqua) {
  slide.addText(text.toUpperCase(), {
    x,
    y,
    w: 12,
    h: 0.3,
    fontFace: F.body,
    fontSize: 11,
    color,
    bold: true,
    charSpacing: 6,
  });
}

function waterDrop(slide, cx, cy, size, color = C.aqua) {
  // Diamond-ish water drop using shape
  slide.addShape("triangle", {
    x: cx - size / 2,
    y: cy - size * 0.7,
    w: size,
    h: size * 0.9,
    fill: { color },
    line: { type: "none" },
  });
  slide.addShape("ellipse", {
    x: cx - size / 2,
    y: cy - size * 0.2,
    w: size,
    h: size * 0.9,
    fill: { color },
    line: { type: "none" },
  });
}

const TOTAL = 19;
let i = 0;

// ============================================================
// SLIDE 1 — TITLE
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setDarkBg(s);

  // Big water drop graphic
  s.addShape("ellipse", {
    x: 9.5,
    y: 1.5,
    w: 3.2,
    h: 3.2,
    fill: { color: C.aqua, transparency: 70 },
    line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 10,
    y: 2,
    w: 2.2,
    h: 2.2,
    fill: { color: C.aquaLight, transparency: 60 },
    line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 10.6,
    y: 2.6,
    w: 1,
    h: 1,
    fill: { color: C.silver },
    line: { type: "none" },
  });

  s.addText("A WORKING LECTURE", {
    x: 0.7,
    y: 1.2,
    w: 8,
    h: 0.4,
    fontFace: F.body,
    fontSize: 12,
    color: C.aqua,
    bold: true,
    charSpacing: 8,
  });

  s.addText("Electrolyzed", {
    x: 0.7,
    y: 1.8,
    w: 9,
    h: 1.1,
    fontFace: F.display,
    fontSize: 64,
    color: C.silver,
    italic: false,
  });
  s.addText("Reduced Water.", {
    x: 0.7,
    y: 2.9,
    w: 9,
    h: 1.1,
    fontFace: F.display,
    fontSize: 64,
    color: C.aquaLight,
    italic: true,
  });

  s.addText(
    "Cells, electrons, and free radicals — what every glass of water is actually doing inside the body.",
    {
      x: 0.7,
      y: 4.3,
      w: 8.5,
      h: 1.2,
      fontFace: F.body,
      fontSize: 18,
      color: C.silver2,
      italic: false,
    }
  );

  s.addShape("rect", {
    x: 0.7,
    y: 5.8,
    w: 0.5,
    h: 0.04,
    fill: { color: C.aqua },
    line: { type: "none" },
  });
  s.addText("DR. DAVID DE FAZIO, MD", {
    x: 0.7,
    y: 5.9,
    w: 6,
    h: 0.35,
    fontFace: F.body,
    fontSize: 14,
    color: C.silver,
    bold: true,
    charSpacing: 4,
  });
  s.addText(
    "Cardiothoracic anesthesiologist · Doctor of Regenerative Wellness",
    {
      x: 0.7,
      y: 6.25,
      w: 8,
      h: 0.35,
      fontFace: F.body,
      fontSize: 12,
      color: C.silver3,
      italic: true,
    }
  );

  addDarkFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 2 — EDISON QUOTE
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setDarkBg(s);

  kicker(s, "Opening", 0.7, 0.8);
  s.addText('"', {
    x: 0.7,
    y: 1,
    w: 1.5,
    h: 1.5,
    fontFace: F.display,
    fontSize: 140,
    color: C.aqua,
    italic: true,
  });

  s.addText(
    [
      {
        text: "The doctor of the future will give no medicine, but will involve the patient in the proper use of food, fresh air, ",
        options: { color: C.silver },
      },
      {
        text: "Electrolyzed Reduced Water,",
        options: { color: C.aquaLight, italic: true, bold: true },
      },
      { text: " and exercise.", options: { color: C.silver } },
    ],
    {
      x: 1.5,
      y: 2.6,
      w: 11,
      h: 2.6,
      fontFace: F.display,
      fontSize: 34,
      italic: true,
      valign: "top",
      paraSpaceAfter: 4,
    }
  );

  s.addShape("rect", {
    x: 1.5,
    y: 5.4,
    w: 0.4,
    h: 0.03,
    fill: { color: C.aqua },
    line: { type: "none" },
  });
  s.addText("THOMAS A. EDISON  ·  WITH DR. DE FAZIO'S EDIT", {
    x: 1.5,
    y: 5.5,
    w: 10,
    h: 0.35,
    fontFace: F.body,
    fontSize: 11,
    color: C.aqua,
    bold: true,
    charSpacing: 6,
  });

  addDarkFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 3 — WHY WATER (72/28)
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Why Water", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "Muscles, ligaments, bones, organs — ", options: {} },
      {
        text: "that's just 28%",
        options: { color: C.aqua, italic: true },
      },
      { text: " of you.", options: {} },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 8,
      h: 1.6,
      fontFace: F.display,
      fontSize: 42,
      color: C.navy,
      paraSpaceAfter: 6,
    }
  );
  s.addText(
    'The other 72% of every human is water. The question is not "do you drink enough?" — it\'s "what kind of water is filling 72% of your body?"',
    {
      x: 0.7,
      y: 2.9,
      w: 7.5,
      h: 1.5,
      fontFace: F.body,
      fontSize: 16,
      color: C.navy2,
      italic: true,
    }
  );

  // Big 72% donut on the right
  s.addShape("ellipse", {
    x: 9,
    y: 1.5,
    w: 3.8,
    h: 3.8,
    fill: { color: C.aqua },
    line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 9.55,
    y: 2.05,
    w: 2.7,
    h: 2.7,
    fill: { color: C.silver },
    line: { type: "none" },
  });
  s.addText("72%", {
    x: 9.55,
    y: 2.4,
    w: 2.7,
    h: 1,
    fontFace: F.display,
    fontSize: 56,
    color: C.navy,
    align: "center",
    bold: true,
  });
  s.addText("WATER", {
    x: 9.55,
    y: 3.5,
    w: 2.7,
    h: 0.4,
    fontFace: F.body,
    fontSize: 12,
    color: C.navy3,
    align: "center",
    charSpacing: 8,
    bold: true,
  });

  // Bottom stat strip
  s.addShape("rect", {
    x: 0.7,
    y: 5.6,
    w: 12,
    h: 0.04,
    fill: { color: C.aqua, transparency: 50 },
    line: { type: "none" },
  });

  const stats = [
    { num: "30T", label: "cells in the human body" },
    { num: "60%", label: "of body mass is water" },
    { num: "85%", label: "of the brain is water" },
    { num: "90%", label: "of blood plasma is water" },
  ];
  stats.forEach((stat, idx) => {
    const x = 0.7 + idx * 3.05;
    s.addText(stat.num, {
      x,
      y: 5.8,
      w: 2.8,
      h: 0.6,
      fontFace: F.display,
      fontSize: 36,
      color: C.navy,
      bold: true,
    });
    s.addText(stat.label, {
      x,
      y: 6.4,
      w: 2.8,
      h: 0.4,
      fontFace: F.body,
      fontSize: 11,
      color: C.silver3,
    });
  });

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 4 — 5 FUNCTIONS OF WATER
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "What water does inside you", 0.7, 0.6, C.navy3);
  s.addText("Five jobs. Every second. Every cell.", {
    x: 0.7,
    y: 1.05,
    w: 12,
    h: 1,
    fontFace: F.display,
    fontSize: 36,
    color: C.navy,
  });

  const fns = [
    {
      title: "Regulation of cellular volume",
      body: "Every cell — except red blood cells — relies on water to hold its shape and maintain pressure.",
    },
    {
      title: "Transport of nutrients",
      body: "Oxygen and nutrition can only reach the cell through water. Aquaporins — the cell's hi-speed plumbing — depend on it.",
    },
    {
      title: "Elimination of waste",
      body: "CO₂, toxins, and metabolic byproducts leave the cell the same way they came in: through water.",
    },
    {
      title: "Energy production",
      body: "Cellular respiration produces 34–36 ATP per glucose molecule — but only when the cell is properly hydrated.",
    },
    {
      title: "Body temperature",
      body: "Water is the body's thermal regulator. Every biochemical reaction depends on it.",
    },
  ];

  fns.forEach((fn, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = 0.7 + col * 4.15;
    const y = 2.4 + row * 2.15;

    // Card
    s.addShape("roundRect", {
      x,
      y,
      w: 4,
      h: 1.95,
      fill: { color: "FFFFFF" },
      line: { color: C.silver2, width: 0.5 },
      rectRadius: 0.12,
    });
    // Number circle
    s.addShape("ellipse", {
      x: x + 0.25,
      y: y + 0.25,
      w: 0.6,
      h: 0.6,
      fill: { color: C.aqua },
      line: { type: "none" },
    });
    s.addText(String(idx + 1), {
      x: x + 0.25,
      y: y + 0.27,
      w: 0.6,
      h: 0.6,
      fontFace: F.display,
      fontSize: 22,
      color: C.silver,
      align: "center",
      bold: true,
    });
    s.addText(fn.title, {
      x: x + 1,
      y: y + 0.22,
      w: 2.8,
      h: 0.7,
      fontFace: F.display,
      fontSize: 15,
      color: C.navy,
      bold: true,
    });
    s.addText(fn.body, {
      x: x + 0.25,
      y: y + 1,
      w: 3.5,
      h: 0.9,
      fontFace: F.body,
      fontSize: 11,
      color: C.navy2,
    });
  });

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 5 — TAP WATER REALITY
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "What's actually in your tap", 0.7, 0.6, C.amberDeep);
  s.addText(
    [
      { text: "The pipe bringing water to your house —\n", options: {} },
      {
        text: "doesn't look the way you think.",
        options: { color: C.rust, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 8.5,
      h: 1.7,
      fontFace: F.display,
      fontSize: 36,
      color: C.navy,
    }
  );

  // Pipe cross-section visual (rusty interior)
  s.addShape("ellipse", {
    x: 9,
    y: 1.2,
    w: 3.6,
    h: 3.6,
    fill: { color: "1F1410" },
    line: { color: C.rust, width: 2 },
  });
  s.addShape("ellipse", {
    x: 9.4,
    y: 1.6,
    w: 2.8,
    h: 2.8,
    fill: { color: "4A2E18" },
    line: { type: "none" },
  });
  // Rust patches
  s.addShape("ellipse", {
    x: 9.7,
    y: 1.9,
    w: 0.8,
    h: 0.6,
    fill: { color: C.rust },
    line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 10.9,
    y: 2.4,
    w: 0.7,
    h: 0.5,
    fill: { color: C.rust },
    line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 9.8,
    y: 3.3,
    w: 0.6,
    h: 0.6,
    fill: { color: C.rust },
    line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 11,
    y: 3.5,
    w: 0.5,
    h: 0.4,
    fill: { color: C.rust },
    line: { type: "none" },
  });
  s.addText("Cross-section · municipal tap", {
    x: 9,
    y: 4.9,
    w: 3.6,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.amberDeep,
    align: "center",
    italic: true,
  });

  // Contaminant chips
  const contaminants = [
    "Chlorine",
    "Fluoride",
    "Heavy metals",
    "Pesticides",
    "Pharmaceuticals",
    "Microplastics",
  ];
  s.addText("Routinely found in U.S. municipal supplies:", {
    x: 0.7,
    y: 3.2,
    w: 8,
    h: 0.3,
    fontFace: F.body,
    fontSize: 12,
    color: C.navy3,
    bold: true,
    charSpacing: 2,
  });
  contaminants.forEach((c, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = 0.7 + col * 2.6;
    const y = 3.6 + row * 0.55;
    s.addShape("roundRect", {
      x,
      y,
      w: 2.4,
      h: 0.45,
      fill: { color: "FFF6E5" },
      line: { color: C.amberDeep, width: 0.5 },
      rectRadius: 0.22,
    });
    s.addText(c, {
      x,
      y,
      w: 2.4,
      h: 0.45,
      fontFace: F.body,
      fontSize: 12,
      color: C.amberDeep,
      align: "center",
      bold: true,
    });
  });

  // EWG callout box
  s.addShape("roundRect", {
    x: 0.7,
    y: 5.4,
    w: 12,
    h: 1.4,
    fill: { color: C.navy },
    line: { type: "none" },
    rectRadius: 0.15,
  });
  s.addText("STEP 1 · VERIFY BEFORE YOU TRUST", {
    x: 0.95,
    y: 5.55,
    w: 6,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.aqua,
    bold: true,
    charSpacing: 6,
  });
  s.addText("Look up your tap water at EWG.org/tapwater", {
    x: 0.95,
    y: 5.85,
    w: 11,
    h: 0.45,
    fontFace: F.display,
    fontSize: 22,
    color: C.silver,
    bold: true,
  });
  s.addText(
    'Dr. De Fazio: "This is the website I used to check the water content from my municipal city. EWG is an environmental nonprofit dedicated to protecting the environment and the public."',
    {
      x: 0.95,
      y: 6.3,
      w: 11.5,
      h: 0.5,
      fontFace: F.body,
      fontSize: 11,
      color: C.silver2,
      italic: true,
    }
  );

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 6 — FISH TANK ANALOGY
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Dr. De Fazio's favorite analogy", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "Your body is a fish tank.\n", options: {} },
      {
        text: "Your cells are the fish.",
        options: { color: C.aqua, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12,
      h: 1.7,
      fontFace: F.display,
      fontSize: 36,
      color: C.navy,
    }
  );

  // Two aquarium "tanks"
  const tankY = 3;
  const tankH = 2.7;

  // Left tank — dirty
  s.addShape("roundRect", {
    x: 0.7,
    y: tankY,
    w: 5.8,
    h: tankH,
    fill: { color: "6B6B3E" },
    line: { color: "4A4A2A", width: 1.5 },
    rectRadius: 0.18,
  });
  // Dirty particles
  for (let p = 0; p < 8; p++) {
    s.addShape("ellipse", {
      x: 1.2 + (p % 4) * 1.3 + (p > 3 ? 0.3 : 0),
      y: tankY + 0.5 + Math.floor(p / 4) * 1.3,
      w: 0.18,
      h: 0.18,
      fill: { color: "3A3A14" },
      line: { type: "none" },
    });
  }
  // Dead fish on left
  s.addShape("ellipse", {
    x: 2,
    y: tankY + 1.2,
    w: 0.9,
    h: 0.5,
    fill: { color: "5A4A1E" },
    line: { type: "none" },
  });
  s.addShape("triangle", {
    x: 1.7,
    y: tankY + 1.25,
    w: 0.3,
    h: 0.4,
    fill: { color: "5A4A1E" },
    line: { type: "none" },
    rotate: 270,
  });
  // Tank label badge
  s.addShape("roundRect", {
    x: 1,
    y: tankY + 0.2,
    w: 2.4,
    h: 0.35,
    fill: { color: "3A3A14", transparency: 30 },
    line: { color: C.amber, width: 0.5 },
    rectRadius: 0.16,
  });
  s.addText("DIRTY WATER", {
    x: 1,
    y: tankY + 0.2,
    w: 2.4,
    h: 0.35,
    fontFace: F.body,
    fontSize: 9,
    color: "FFE680",
    align: "center",
    bold: true,
    charSpacing: 6,
  });
  // Label under
  s.addText("Toxin Buildup", {
    x: 0.7,
    y: tankY + tankH + 0.15,
    w: 5.8,
    h: 0.4,
    fontFace: F.display,
    fontSize: 20,
    color: C.navy,
    align: "center",
    bold: true,
  });
  s.addText(
    "Polluted water, sluggish fish. Toxins, free radicals, and acidity inside the cell lead to fatigue, disease, and aging.",
    {
      x: 0.7,
      y: tankY + tankH + 0.55,
      w: 5.8,
      h: 0.8,
      fontFace: F.body,
      fontSize: 12,
      color: C.navy2,
      align: "center",
      italic: true,
    }
  );

  // Right tank — clean
  s.addShape("roundRect", {
    x: 6.85,
    y: tankY,
    w: 5.8,
    h: tankH,
    fill: { color: C.aqua },
    line: { color: C.navy3, width: 1.5 },
    rectRadius: 0.18,
  });
  // Bubbles
  for (let p = 0; p < 10; p++) {
    s.addShape("ellipse", {
      x: 7.3 + (p % 5) * 1.05,
      y: tankY + 0.4 + Math.floor(p / 5) * 1.4,
      w: 0.12 + (p % 3) * 0.04,
      h: 0.12 + (p % 3) * 0.04,
      fill: { color: C.silver },
      line: { type: "none" },
    });
  }
  // Vibrant fish on right
  s.addShape("ellipse", {
    x: 8.6,
    y: tankY + 1.05,
    w: 0.95,
    h: 0.55,
    fill: { color: C.amber },
    line: { type: "none" },
  });
  s.addShape("triangle", {
    x: 8.3,
    y: tankY + 1.1,
    w: 0.4,
    h: 0.45,
    fill: { color: C.amber },
    line: { type: "none" },
    rotate: 270,
  });
  // Tank label badge
  s.addShape("roundRect", {
    x: 7.15,
    y: tankY + 0.2,
    w: 3.4,
    h: 0.35,
    fill: { color: C.navy3 },
    line: { color: C.aquaLight, width: 0.5 },
    rectRadius: 0.16,
  });
  s.addText("ELECTROLYZED REDUCED WATER", {
    x: 7.15,
    y: tankY + 0.2,
    w: 3.4,
    h: 0.35,
    fontFace: F.body,
    fontSize: 8,
    color: C.aquaLight,
    align: "center",
    bold: true,
    charSpacing: 4,
  });
  s.addText("Optimal Function", {
    x: 6.85,
    y: tankY + tankH + 0.15,
    w: 5.8,
    h: 0.4,
    fontFace: F.display,
    fontSize: 20,
    color: C.navy,
    align: "center",
    bold: true,
  });
  s.addText(
    "Charged, oxygenated water keeps fish active and full of life. ERW gives your cells the same conditions to function optimally.",
    {
      x: 6.85,
      y: tankY + tankH + 0.55,
      w: 5.8,
      h: 0.8,
      fontFace: F.body,
      fontSize: 12,
      color: C.navy2,
      align: "center",
      italic: true,
    }
  );

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 7 — CELLULAR RESPIRATION
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Cellular Respiration 101", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "How cells produce ATP — ", options: {} },
      {
        text: "and where free radicals come from.",
        options: { color: C.aqua, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12,
      h: 1.5,
      fontFace: F.display,
      fontSize: 32,
      color: C.navy,
    }
  );

  // 4-stage horizontal flow
  const stages = [
    {
      n: "01",
      name: "Glycolysis",
      where: "Cytoplasm",
      atp: "+2 ATP",
      body: "Glucose broken down to pyruvate.",
    },
    {
      n: "02",
      name: "Krebs Cycle",
      where: "Mitochondria",
      atp: "+2 ATP",
      body: "Pyruvate enters mitochondria — CO₂ and electron carriers released.",
    },
    {
      n: "03",
      name: "Electron Transport",
      where: "Mitochondria",
      atp: "+30 ATP",
      body: "Electrons drive ATP synthesis. Most energy is made here.",
    },
    {
      n: "04",
      name: "Net Output",
      where: "Per glucose",
      atp: "34–36 ATP",
      body: "Total energy yield — when the cell is properly hydrated.",
    },
  ];

  stages.forEach((st, idx) => {
    const x = 0.5 + idx * 3.15;
    const y = 2.8;

    // Connecting arrow (between cards)
    if (idx < stages.length - 1) {
      s.addShape("rightArrow", {
        x: x + 2.9,
        y: y + 1.6,
        w: 0.35,
        h: 0.5,
        fill: { color: C.aqua },
        line: { type: "none" },
      });
    }

    // Card
    s.addShape("roundRect", {
      x,
      y,
      w: 2.95,
      h: 3.7,
      fill: { color: idx === 3 ? C.navy : "FFFFFF" },
      line: { color: idx === 3 ? C.aqua : C.silver2, width: 1 },
      rectRadius: 0.14,
    });

    const txtColor = idx === 3 ? C.silver : C.navy;
    const subColor = idx === 3 ? C.aquaLight : C.silver3;
    const bodyColor = idx === 3 ? C.silver2 : C.navy2;

    s.addText(st.n, {
      x: x + 0.25,
      y: y + 0.2,
      w: 1,
      h: 0.5,
      fontFace: F.display,
      fontSize: 28,
      color: idx === 3 ? C.aqua : C.aqua,
      bold: true,
    });
    s.addText(st.name, {
      x: x + 0.25,
      y: y + 0.75,
      w: 2.5,
      h: 0.5,
      fontFace: F.display,
      fontSize: 17,
      color: txtColor,
      bold: true,
    });
    s.addText(st.where.toUpperCase(), {
      x: x + 0.25,
      y: y + 1.25,
      w: 2.5,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9,
      color: subColor,
      bold: true,
      charSpacing: 4,
    });
    s.addText(st.atp, {
      x: x + 0.25,
      y: y + 1.7,
      w: 2.5,
      h: 0.55,
      fontFace: F.display,
      fontSize: 22,
      color: idx === 3 ? C.aquaLight : C.aqua,
      bold: true,
    });
    s.addText(st.body, {
      x: x + 0.25,
      y: y + 2.4,
      w: 2.5,
      h: 1.2,
      fontFace: F.body,
      fontSize: 11,
      color: bodyColor,
    });
  });

  s.addText(
    'This process is highly sensitive to oxidative stress. If too many free radicals build up — primarily hydroxyl radicals — energy production is disrupted.',
    {
      x: 0.7,
      y: 6.55,
      w: 12,
      h: 0.45,
      fontFace: F.body,
      fontSize: 12,
      color: C.navy3,
      italic: true,
      align: "center",
    }
  );

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 8 — DIS-ASSOCIATION OF THE WATER MOLECULE
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "The Dis-association of the Water Molecule", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "2 H₂O    →    2 H⁺ + 2 OH⁻ + 2 e⁻", options: {} },
    ],
    {
      x: 0.7,
      y: 1.1,
      w: 12,
      h: 0.9,
      fontFace: F.display,
      fontSize: 38,
      color: C.navy,
      bold: true,
    }
  );

  // Visual: electrodes + atoms
  // Cathode (left) and anode (right) plates
  s.addShape("rect", {
    x: 0.7,
    y: 2.6,
    w: 0.18,
    h: 2.5,
    fill: { color: C.aqua },
    line: { type: "none" },
  });
  s.addText("CATHODE (−)", {
    x: 0.5,
    y: 5.2,
    w: 1.6,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.aqua,
    bold: true,
    charSpacing: 3,
  });

  s.addShape("rect", {
    x: 12.45,
    y: 2.6,
    w: 0.18,
    h: 2.5,
    fill: { color: C.amber },
    line: { type: "none" },
  });
  s.addText("ANODE (+)", {
    x: 11.4,
    y: 5.2,
    w: 1.6,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.amberDeep,
    bold: true,
    charSpacing: 3,
    align: "right",
  });

  // Two H2O molecules in center
  const drawWater = (cx, cy) => {
    // O atom
    s.addShape("ellipse", {
      x: cx - 0.3,
      y: cy - 0.3,
      w: 0.6,
      h: 0.6,
      fill: { color: C.navy3 },
      line: { type: "none" },
    });
    s.addText("O", {
      x: cx - 0.3,
      y: cy - 0.28,
      w: 0.6,
      h: 0.6,
      fontFace: F.body,
      fontSize: 16,
      color: C.silver,
      bold: true,
      align: "center",
    });
    // Two H atoms
    s.addShape("ellipse", {
      x: cx - 0.75,
      y: cy - 0.7,
      w: 0.35,
      h: 0.35,
      fill: { color: C.aquaLight },
      line: { type: "none" },
    });
    s.addText("H", {
      x: cx - 0.75,
      y: cy - 0.7,
      w: 0.35,
      h: 0.35,
      fontFace: F.body,
      fontSize: 10,
      color: C.navy,
      bold: true,
      align: "center",
    });
    s.addShape("ellipse", {
      x: cx + 0.4,
      y: cy - 0.7,
      w: 0.35,
      h: 0.35,
      fill: { color: C.aquaLight },
      line: { type: "none" },
    });
    s.addText("H", {
      x: cx + 0.4,
      y: cy - 0.7,
      w: 0.35,
      h: 0.35,
      fontFace: F.body,
      fontSize: 10,
      color: C.navy,
      bold: true,
      align: "center",
    });
  };

  drawWater(5, 3.5);
  drawWater(8, 4.4);

  // Free electron
  s.addShape("ellipse", {
    x: 6.5 - 0.15,
    y: 4 - 0.15,
    w: 0.3,
    h: 0.3,
    fill: { color: C.amber },
    line: { type: "none" },
  });
  s.addText("e⁻", {
    x: 6.5 - 0.15,
    y: 4 - 0.13,
    w: 0.3,
    h: 0.3,
    fontFace: F.body,
    fontSize: 9,
    color: C.navy,
    bold: true,
    align: "center",
  });

  // Lightning arc between plates
  s.addText("⚡", {
    x: 6.3,
    y: 2.5,
    w: 0.8,
    h: 0.6,
    fontFace: F.body,
    fontSize: 36,
    color: C.aqua,
    align: "center",
  });

  // Two side panels — products
  s.addShape("roundRect", {
    x: 0.7,
    y: 5.7,
    w: 5.85,
    h: 1.2,
    fill: { color: "E8F8FB" },
    line: { color: C.aqua, width: 0.75 },
    rectRadius: 0.12,
  });
  s.addText("CATHODE SIDE  ·  REDUCING · ALKALINE", {
    x: 0.95,
    y: 5.82,
    w: 5.5,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.aqua,
    bold: true,
    charSpacing: 4,
  });
  s.addText("H₂ + OH⁻ + e⁻", {
    x: 0.95,
    y: 6.15,
    w: 5.5,
    h: 0.4,
    fontFace: F.display,
    fontSize: 22,
    color: C.navy,
    bold: true,
  });
  s.addText(
    "molecular hydrogen, hydroxyl ion, free electrons — what pours out for drinking. ORP ≈ −400 mV.",
    {
      x: 0.95,
      y: 6.55,
      w: 5.5,
      h: 0.3,
      fontFace: F.body,
      fontSize: 11,
      color: C.navy2,
    }
  );

  s.addShape("roundRect", {
    x: 6.75,
    y: 5.7,
    w: 5.85,
    h: 1.2,
    fill: { color: "FFF6E5" },
    line: { color: C.amber, width: 0.75 },
    rectRadius: 0.12,
  });
  s.addText("ANODE SIDE  ·  OXIDIZING · ACIDIC", {
    x: 7,
    y: 5.82,
    w: 5.5,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.amberDeep,
    bold: true,
    charSpacing: 4,
  });
  s.addText("O₂ + H⁺", {
    x: 7,
    y: 6.15,
    w: 5.5,
    h: 0.4,
    fontFace: F.display,
    fontSize: 22,
    color: C.navy,
    bold: true,
  });
  s.addText(
    "active oxygen and protons — Strong Acidic Water at pH ≤ 2.7. For sterilization, not drinking.",
    {
      x: 7,
      y: 6.55,
      w: 5.5,
      h: 0.3,
      fontFace: F.body,
      fontSize: 11,
      color: C.navy2,
    }
  );

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 9 — LIGHTNING STRIKE IN A BOX
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setDarkBg(s);

  kicker(s, "What Kangen actually does", 0.7, 0.6);
  s.addText(
    [
      { text: "A ", options: {} },
      {
        text: "lightning strike",
        options: { color: C.aquaLight, italic: true },
      },
      { text: " in a box.", options: {} },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12,
      h: 1.7,
      fontFace: F.display,
      fontSize: 52,
      color: C.silver,
    }
  );

  s.addText(
    'Kangen means "return to origin" in Japanese. The Japanese Ministry of Health adopted these ionizers in 1965 for hospital use. The technology mimics how nature makes her best water — using electricity, against medical-grade platinum-coated titanium plates, to split H₂O.',
    {
      x: 0.7,
      y: 2.8,
      w: 12,
      h: 1.6,
      fontFace: F.body,
      fontSize: 15,
      color: C.silver2,
      italic: true,
    }
  );

  // 4-step horizontal flow
  const steps = [
    {
      n: "01",
      title: "Filtered tap enters",
      body: "An internal filter reduces common impurities.",
    },
    {
      n: "02",
      title: "Electrical current",
      body: "Voltage applied across platinum-coated titanium plates.",
    },
    {
      n: "03",
      title: "Water dis-associates",
      body: "2H₂O splits into H⁺, OH⁻, and free electrons.",
    },
    {
      n: "04",
      title: "ERW pours out",
      body: "H₂-rich, pH 8.5–9.5, micro-clustered, ORP ≈ −400 mV.",
    },
  ];
  steps.forEach((st, idx) => {
    const x = 0.7 + idx * 3.05;
    const y = 4.6;
    s.addShape("roundRect", {
      x,
      y,
      w: 2.85,
      h: 2.1,
      fill: { color: C.navy3, transparency: 30 },
      line: { color: C.aqua, width: 0.5 },
      rectRadius: 0.12,
    });
    s.addText(st.n, {
      x: x + 0.2,
      y: y + 0.15,
      w: 1,
      h: 0.4,
      fontFace: F.display,
      fontSize: 22,
      color: C.aqua,
      bold: true,
    });
    s.addText(st.title, {
      x: x + 0.2,
      y: y + 0.6,
      w: 2.5,
      h: 0.5,
      fontFace: F.display,
      fontSize: 14,
      color: C.silver,
      bold: true,
    });
    s.addText(st.body, {
      x: x + 0.2,
      y: y + 1.15,
      w: 2.5,
      h: 0.85,
      fontFace: F.body,
      fontSize: 10.5,
      color: C.silver2,
    });
  });

  addDarkFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 10 — THREE PROPERTIES OF ERW
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Three properties that define ERW", 0.7, 0.6, C.navy3);
  s.addText("Anti-Oxidation. Micro-Clustering. High Alkalinity.", {
    x: 0.7,
    y: 1.05,
    w: 12,
    h: 1,
    fontFace: F.display,
    fontSize: 32,
    color: C.navy,
  });

  const props = [
    {
      label: "Anti-Oxidation",
      stat: "−400 mV",
      sub: "ORP",
      body: "Molecular hydrogen and free electrons neutralize free radicals without becoming new ones. 1,500+ peer-reviewed articles on PubMed reference H₂.",
      shape: "ellipse",
    },
    {
      label: "Micro-Clustering",
      stat: "5–6",
      sub: "molecules per cluster",
      body: "Regular tap water travels in clusters of 16–25 molecules. Electrolysis breaks them into 5–6 — fast through the aquaporins.",
      shape: "pentagon",
    },
    {
      label: "High Alkalinity",
      stat: "8.5–9.5",
      sub: "pH for drinking",
      body: "Restores balance against the acidic load of modern diets. Selectively stimulates beneficial gut microflora.",
      shape: "donut",
    },
  ];

  props.forEach((p, idx) => {
    const x = 0.7 + idx * 4.15;
    const y = 2.4;
    s.addShape("roundRect", {
      x,
      y,
      w: 3.95,
      h: 4.5,
      fill: { color: "FFFFFF" },
      line: { color: C.silver2, width: 0.5 },
      rectRadius: 0.14,
    });
    // Icon
    if (p.shape === "ellipse") {
      s.addShape("ellipse", {
        x: x + 1.3,
        y: y + 0.3,
        w: 1.35,
        h: 1.35,
        fill: { color: C.aqua },
        line: { type: "none" },
      });
    } else if (p.shape === "pentagon") {
      s.addShape("pentagon", {
        x: x + 1.3,
        y: y + 0.3,
        w: 1.35,
        h: 1.35,
        fill: { color: C.aqua },
        line: { type: "none" },
      });
    } else if (p.shape === "donut") {
      s.addShape("donut", {
        x: x + 1.3,
        y: y + 0.3,
        w: 1.35,
        h: 1.35,
        fill: { color: C.aqua },
        line: { type: "none" },
      });
    }
    s.addText(`0${idx + 1}`, {
      x,
      y: y + 0.3,
      w: 0.8,
      h: 0.6,
      fontFace: F.display,
      fontSize: 28,
      color: C.silver2,
      bold: true,
      align: "left",
    });
    s.addText(p.label, {
      x: x + 0.25,
      y: y + 1.85,
      w: 3.5,
      h: 0.45,
      fontFace: F.display,
      fontSize: 20,
      color: C.navy,
      bold: true,
      align: "center",
    });
    s.addText(p.stat, {
      x: x + 0.25,
      y: y + 2.3,
      w: 3.5,
      h: 0.65,
      fontFace: F.display,
      fontSize: 30,
      color: C.aqua,
      bold: true,
      align: "center",
    });
    s.addText(p.sub.toUpperCase(), {
      x: x + 0.25,
      y: y + 2.95,
      w: 3.5,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9,
      color: C.silver3,
      align: "center",
      charSpacing: 4,
      bold: true,
    });
    s.addText(p.body, {
      x: x + 0.3,
      y: y + 3.3,
      w: 3.4,
      h: 1.1,
      fontFace: F.body,
      fontSize: 11,
      color: C.navy2,
      align: "center",
    });
  });

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 11 — ORP SCALE
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Oxidation–Reduction Potential", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "Same chart. ", options: {} },
      {
        text: "Kangen at one end. Soda at the other.",
        options: { color: C.aqua, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12.2,
      h: 1.4,
      fontFace: F.display,
      fontSize: 32,
      color: C.navy,
    }
  );
  s.addText(
    "Negative ORP = the water carries spare electrons (antioxidant potential). Positive ORP = it pulls electrons away (oxidizing). Tap, RO, and soda are all on the wrong side.",
    {
      x: 0.7,
      y: 2.45,
      w: 12,
      h: 0.7,
      fontFace: F.body,
      fontSize: 14,
      color: C.navy2,
      italic: true,
    }
  );

  // Horizontal ORP bar
  const barY = 4.2;
  const barX = 1.0;
  const barW = 11.3;
  const barH = 0.35;

  // Gradient via two halves
  s.addShape("rect", {
    x: barX,
    y: barY,
    w: barW / 2,
    h: barH,
    fill: { color: C.aqua },
    line: { type: "none" },
  });
  s.addShape("rect", {
    x: barX + barW / 2,
    y: barY,
    w: barW / 2,
    h: barH,
    fill: { color: C.amber },
    line: { type: "none" },
  });
  // Center 0 mV tick
  s.addShape("line", {
    x: barX + barW / 2,
    y: barY - 0.1,
    w: 0,
    h: barH + 0.2,
    line: { color: C.navy, width: 1.5 },
  });

  // Tick labels under
  const ticks = [-400, -300, -200, -100, 0, 100, 200, 300, 400];
  ticks.forEach((mv) => {
    const tx = barX + ((mv + 450) / 900) * barW;
    s.addShape("line", {
      x: tx,
      y: barY + barH,
      w: 0,
      h: 0.1,
      line: { color: C.silver3, width: 0.5 },
    });
    s.addText(mv > 0 ? `+${mv}` : `${mv}`, {
      x: tx - 0.35,
      y: barY + barH + 0.1,
      w: 0.7,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9,
      color: C.silver3,
      align: "center",
    });
  });

  // Markers above the bar
  const markers = [
    { label: "Kangen ERW", mv: -400, good: true, sub: "what Dr. De Fazio drinks" },
    { label: "Green Tea / Vit C", mv: -100, good: false, sub: "≈ −100 mV" },
    { label: "RO Water", mv: 200, good: false, sub: "stripped of minerals" },
    { label: "Tap Water", mv: 300, good: false, sub: "+300 mV oxidizing" },
    { label: "Soda", mv: 400, good: false, sub: "the worst" },
  ];
  markers.forEach((m, idx) => {
    const mx = barX + ((m.mv + 450) / 900) * barW;
    const above = idx % 2 === 0;
    const ny = above ? 2.95 : 4.85;
    // tick connector
    s.addShape("line", {
      x: mx,
      y: above ? ny + 0.7 : barY + barH,
      w: 0,
      h: above ? barY - (ny + 0.7) : ny - (barY + barH),
      line: { color: C.silver3, width: 0.5 },
    });
    // dot on bar
    s.addShape("ellipse", {
      x: mx - 0.1,
      y: barY + barH / 2 - 0.1,
      w: 0.2,
      h: 0.2,
      fill: { color: m.good ? C.aqua : C.navy3 },
      line: { color: C.silver, width: 1 },
    });
    s.addText(m.label, {
      x: mx - 1.1,
      y: above ? ny : ny + 0.05,
      w: 2.2,
      h: 0.35,
      fontFace: F.display,
      fontSize: 12,
      color: m.good ? C.aqua : C.navy,
      bold: true,
      align: "center",
    });
    s.addText(m.sub, {
      x: mx - 1.1,
      y: above ? ny + 0.35 : ny + 0.4,
      w: 2.2,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9,
      color: C.silver3,
      align: "center",
      italic: true,
    });
  });

  s.addText(
    '"One glass of Kangen Water has the antioxidant equivalent of 30 glasses of green tea — and Dr. De Fazio drinks it instead of popping vitamin C."',
    {
      x: 1,
      y: 6.3,
      w: 11.3,
      h: 0.7,
      fontFace: F.display,
      fontSize: 14,
      color: C.navy,
      italic: true,
      align: "center",
    }
  );

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 12 — CLUSTER OF GRAPES
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "The Cluster of Grapes", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "16–25 molecules vs ", options: {} },
      {
        text: "5–6 molecules.",
        options: { color: C.aqua, italic: true },
      },
      { text: " That's the whole story.", options: {} },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12.2,
      h: 1.3,
      fontFace: F.display,
      fontSize: 30,
      color: C.navy,
    }
  );

  // Left big cluster (tap)
  s.addText("TAP / RO / BOTTLED", {
    x: 0.7,
    y: 2.6,
    w: 6,
    h: 0.3,
    fontFace: F.body,
    fontSize: 11,
    color: C.amberDeep,
    bold: true,
    charSpacing: 4,
    align: "center",
  });
  s.addText("16–25 molecule cluster", {
    x: 0.7,
    y: 2.9,
    w: 6,
    h: 0.35,
    fontFace: F.display,
    fontSize: 18,
    color: C.navy,
    align: "center",
    bold: true,
  });
  // Many molecules clustered
  const bigPositions = [
    [0, 0],
    [0.5, -0.2],
    [1.0, 0],
    [1.5, -0.15],
    [-0.25, 0.4],
    [0.3, 0.45],
    [0.85, 0.5],
    [1.35, 0.45],
    [1.85, 0.4],
    [0, 0.85],
    [0.55, 0.9],
    [1.1, 0.85],
    [1.65, 0.9],
    [0.3, 1.25],
    [0.85, 1.3],
    [1.4, 1.25],
    [0.55, 1.65],
    [1.1, 1.7],
  ];
  const bigCx = 3.0;
  const bigCy = 4.5;
  bigPositions.forEach(([dx, dy]) => {
    s.addShape("ellipse", {
      x: bigCx + dx - 0.18,
      y: bigCy + dy - 0.18,
      w: 0.36,
      h: 0.36,
      fill: { color: "7A7A57" },
      line: { color: "5A5A3E", width: 0.5 },
    });
  });
  s.addText(
    "Too large to slip through the aquaporins easily. Most of it just passes through you.",
    {
      x: 0.7,
      y: 6.4,
      w: 6,
      h: 0.5,
      fontFace: F.body,
      fontSize: 12,
      color: C.navy2,
      align: "center",
      italic: true,
    }
  );

  // Center arrow + VS
  s.addText("→", {
    x: 6.65,
    y: 4.3,
    w: 0.8,
    h: 0.6,
    fontFace: F.body,
    fontSize: 36,
    color: C.aqua,
    align: "center",
    bold: true,
  });

  // Right small cluster (ERW)
  s.addText("ELECTROLYZED REDUCED WATER", {
    x: 7.5,
    y: 2.6,
    w: 5.2,
    h: 0.3,
    fontFace: F.body,
    fontSize: 11,
    color: C.aqua,
    bold: true,
    charSpacing: 4,
    align: "center",
  });
  s.addText("5–6 molecule cluster", {
    x: 7.5,
    y: 2.9,
    w: 5.2,
    h: 0.35,
    fontFace: F.display,
    fontSize: 18,
    color: C.navy,
    align: "center",
    bold: true,
  });
  // Small cluster
  const smallPositions = [
    [0, 0],
    [0.7, -0.2],
    [-0.35, 0.6],
    [0.35, 0.65],
    [1.0, 0.55],
    [0.35, 1.2],
  ];
  const smallCx = 10.1;
  const smallCy = 4.6;
  smallPositions.forEach(([dx, dy]) => {
    s.addShape("ellipse", {
      x: smallCx + dx - 0.22,
      y: smallCy + dy - 0.22,
      w: 0.44,
      h: 0.44,
      fill: { color: C.aqua },
      line: { color: C.aquaLight, width: 0.5 },
    });
  });
  s.addText(
    "Slips through aquaporins easily. Hydration reaches the cell interior in seconds, not minutes.",
    {
      x: 7.5,
      y: 6.4,
      w: 5.2,
      h: 0.5,
      fontFace: F.body,
      fontSize: 12,
      color: C.navy2,
      align: "center",
      italic: true,
    }
  );

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 13 — AQUAPORINS
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Aquaporins — the cell's hi-speed plumbing", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "Peter Agre won the ", options: {} },
      {
        text: "2003 Nobel Prize",
        options: { color: C.aqua, italic: true },
      },
      { text: " for discovering them.", options: {} },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12,
      h: 1.4,
      fontFace: F.display,
      fontSize: 30,
      color: C.navy,
    }
  );

  // Left explanation
  s.addText(
    "Aquaporins are protein channels embedded in every cell membrane. They are the only way water enters or leaves the cell at the speed life requires — orders of magnitude faster than passive diffusion across the bilayer.",
    {
      x: 0.7,
      y: 2.7,
      w: 5.8,
      h: 2,
      fontFace: F.body,
      fontSize: 14,
      color: C.navy2,
    }
  );

  // Bullet stats
  const bullets = [
    "Found in every cell — kidney, brain, lens of the eye, every membrane that has to move water.",
    "Pass roughly 3 billion water molecules per second per channel.",
    "Size-selective: only small clusters of water fit through. Big clusters get rejected.",
    "Why micro-clustered ERW absorbs so much faster than tap.",
  ];
  bullets.forEach((b, idx) => {
    const y = 4.6 + idx * 0.5;
    s.addShape("ellipse", {
      x: 0.7,
      y: y + 0.12,
      w: 0.18,
      h: 0.18,
      fill: { color: C.aqua },
      line: { type: "none" },
    });
    s.addText(b, {
      x: 1,
      y,
      w: 5.5,
      h: 0.45,
      fontFace: F.body,
      fontSize: 12,
      color: C.navy2,
    });
  });

  // Right: cell membrane diagram
  const memX = 7.3;
  const memY = 2.7;
  const memW = 5.3;
  const memH = 4;
  // Background
  s.addShape("roundRect", {
    x: memX,
    y: memY,
    w: memW,
    h: memH,
    fill: { color: "F0F4F8" },
    line: { color: C.silver2, width: 0.5 },
    rectRadius: 0.16,
  });
  // Top label
  s.addText("OUTSIDE CELL", {
    x: memX + 0.2,
    y: memY + 0.15,
    w: 3,
    h: 0.3,
    fontFace: F.body,
    fontSize: 9,
    color: C.silver3,
    bold: true,
    charSpacing: 4,
  });
  s.addText("INSIDE CELL", {
    x: memX + 0.2,
    y: memY + memH - 0.4,
    w: 3,
    h: 0.3,
    fontFace: F.body,
    fontSize: 9,
    color: C.aqua,
    bold: true,
    charSpacing: 4,
  });
  // Lipid bilayer (two horizontal bands)
  s.addShape("rect", {
    x: memX,
    y: memY + memH * 0.4,
    w: memW,
    h: 0.18,
    fill: { color: C.aqua, transparency: 30 },
    line: { type: "none" },
  });
  s.addShape("rect", {
    x: memX,
    y: memY + memH * 0.55,
    w: memW,
    h: 0.18,
    fill: { color: C.aqua, transparency: 30 },
    line: { type: "none" },
  });
  // Channel opening
  s.addShape("roundRect", {
    x: memX + memW / 2 - 0.35,
    y: memY + memH * 0.4 - 0.05,
    w: 0.7,
    h: 0.4,
    fill: { color: "F0F4F8" },
    line: { color: C.aqua, width: 1.5 },
    rectRadius: 0.2,
  });
  // Small clusters passing through
  for (let p = 0; p < 5; p++) {
    s.addShape("ellipse", {
      x: memX + memW / 2 - 0.1,
      y: memY + 0.6 + p * 0.5,
      w: 0.2,
      h: 0.2,
      fill: { color: C.aquaLight },
      line: { type: "none" },
    });
  }
  s.addText("Aquaporin channel", {
    x: memX + memW / 2 + 0.5,
    y: memY + memH / 2 - 0.2,
    w: 2,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.aqua,
    bold: true,
    italic: true,
  });

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 14 — ELECTRICAL VS CHEMICAL
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Electrical vs Chemical Antioxidants", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "Donating an electron ", options: {} },
      {
        text: "vs. binding a molecule.",
        options: { color: C.aqua, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12.2,
      h: 1.3,
      fontFace: F.display,
      fontSize: 30,
      color: C.navy,
    }
  );

  // Two cards
  const cards = [
    {
      x: 0.7,
      title: "Chemical",
      titleColor: C.amberDeep,
      titleBg: "FFF6E5",
      sub: "Vitamin C · polyphenols · glutathione",
      points: [
        "Affected by stomach acid",
        "Self-eliminating within 3–4 days",
        "Does build up in the system if oversupplied",
        "Bound byproduct still needs elimination",
      ],
      mark: "×",
      markColor: C.amberDeep,
    },
    {
      x: 6.85,
      title: "Electrical · ERW",
      titleColor: C.aqua,
      titleBg: "E8F8FB",
      sub: "Molecular hydrogen · free electrons",
      points: [
        "NOT affected by stomach acid",
        "Self-eliminating within 3–4 days",
        "Does NOT build up in the system",
        "No byproduct — donor stays neutral",
      ],
      mark: "✓",
      markColor: C.aqua,
    },
  ];
  cards.forEach((c) => {
    s.addShape("roundRect", {
      x: c.x,
      y: 2.5,
      w: 5.8,
      h: 4.2,
      fill: { color: "FFFFFF" },
      line: { color: C.silver2, width: 0.5 },
      rectRadius: 0.14,
    });
    s.addShape("roundRect", {
      x: c.x + 0.3,
      y: 2.75,
      w: 2,
      h: 0.4,
      fill: { color: c.titleBg },
      line: { color: c.titleColor, width: 0.75 },
      rectRadius: 0.2,
    });
    s.addText(c.title.toUpperCase(), {
      x: c.x + 0.3,
      y: 2.75,
      w: 2,
      h: 0.4,
      fontFace: F.body,
      fontSize: 10,
      color: c.titleColor,
      bold: true,
      charSpacing: 4,
      align: "center",
    });
    s.addText(c.sub, {
      x: c.x + 0.3,
      y: 3.25,
      w: 5.2,
      h: 0.4,
      fontFace: F.display,
      fontSize: 16,
      color: C.navy,
      bold: true,
    });
    c.points.forEach((p, pi) => {
      const py = 3.85 + pi * 0.6;
      s.addText(c.mark, {
        x: c.x + 0.3,
        y: py,
        w: 0.4,
        h: 0.5,
        fontFace: F.display,
        fontSize: 22,
        color: c.markColor,
        bold: true,
        align: "center",
      });
      s.addText(p, {
        x: c.x + 0.8,
        y: py + 0.1,
        w: 4.8,
        h: 0.5,
        fontFace: F.body,
        fontSize: 12.5,
        color: C.navy2,
      });
    });
  });

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 15 — NO COMPETITION
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Why no competition", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "One machine. Five reasons ", options: {} },
      {
        text: "Enagic stands alone.",
        options: { color: C.aqua, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12.2,
      h: 1.3,
      fontFace: F.display,
      fontSize: 30,
      color: C.navy,
    }
  );

  const reasons = [
    {
      n: "01",
      title: "Medical-grade plates",
      body: "Platinum-coated, dipped titanium — the same metallurgy used in hospital-grade equipment.",
    },
    {
      n: "02",
      title: "Solid plates, not mesh",
      body: "Solid plate construction means longevity and consistent electrolysis. Cheap competitors use mesh plates that degrade.",
    },
    {
      n: "03",
      title: "Self-cleaning system",
      body: "Each unit auto-flushes calcium and mineral buildup so the plates stay efficient for years.",
    },
    {
      n: "04",
      title: "Five waters from one tap",
      body: "Drinking ERW, Beauty Water, Strong Acidic Water, Strong Kangen Water, Clean Water — only Enagic produces all five.",
    },
    {
      n: "05",
      title: "Japanese MoH-certified",
      body: "Class 1 medical device for hospital use in Japan since 1965. Decades of clinical use, not a startup claim.",
    },
    {
      n: "+",
      title: "And 10 more reasons",
      body: "Full breakdown at de-fazio.com/competition — 15 distinct ways the K8 and Super 501 outperform the field.",
      highlight: true,
    },
  ];
  reasons.forEach((r, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = 0.7 + col * 4.15;
    const y = 2.4 + row * 2.25;
    s.addShape("roundRect", {
      x,
      y,
      w: 4,
      h: 2.1,
      fill: { color: r.highlight ? C.navy : "FFFFFF" },
      line: { color: r.highlight ? C.aqua : C.silver2, width: r.highlight ? 1 : 0.5 },
      rectRadius: 0.14,
    });
    s.addText(r.n, {
      x: x + 0.3,
      y: y + 0.25,
      w: 1,
      h: 0.5,
      fontFace: F.display,
      fontSize: 24,
      color: r.highlight ? C.aqua : C.aqua,
      bold: true,
    });
    s.addText(r.title, {
      x: x + 1.15,
      y: y + 0.25,
      w: 2.7,
      h: 0.6,
      fontFace: F.display,
      fontSize: 14,
      color: r.highlight ? C.silver : C.navy,
      bold: true,
    });
    s.addText(r.body, {
      x: x + 0.3,
      y: y + 0.95,
      w: 3.55,
      h: 1.1,
      fontFace: F.body,
      fontSize: 11,
      color: r.highlight ? C.silver2 : C.navy2,
    });
  });

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 16 — REAL OUTCOMES
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "Real-world outcomes", 0.7, 0.6, C.navy3);
  s.addText(
    [
      {
        text: "Stories Dr. De Fazio's family and patients ",
        options: {},
      },
      {
        text: "actually tell.",
        options: { color: C.aqua, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12.2,
      h: 1.3,
      fontFace: F.display,
      fontSize: 28,
      color: C.navy,
    }
  );

  // Big quote box
  s.addShape("roundRect", {
    x: 0.7,
    y: 2.55,
    w: 12,
    h: 3.4,
    fill: { color: "FFFFFF" },
    line: { color: C.aqua, width: 1 },
    rectRadius: 0.16,
  });

  s.addText('"', {
    x: 0.9,
    y: 2.4,
    w: 1,
    h: 1.2,
    fontFace: F.display,
    fontSize: 120,
    color: C.aqua,
    italic: true,
  });

  s.addText(
    [
      {
        text: "My sister-in-law's dog had a mass on her ear. ",
        options: {},
      },
      {
        text: "The vet told her he could surgically excise it for $2,000.",
        options: { bold: true },
      },
      {
        text:
          " I told her to spray 2.5 Kangen Water as often as she could. The mass on her ear burst after a few days and ",
        options: {},
      },
      {
        text:
          "completely healed in 6 weeks.",
        options: { color: C.aqua, bold: true },
      },
      {
        text:
          " She said buying a Kangen machine was the best investment she ever made — ",
        options: {},
      },
      {
        text: "and it paid for itself.",
        options: { italic: true, bold: true },
      },
    ],
    {
      x: 1.8,
      y: 3.05,
      w: 10.5,
      h: 2.4,
      fontFace: F.display,
      fontSize: 17,
      color: C.navy,
      italic: true,
      valign: "top",
      paraSpaceAfter: 6,
    }
  );

  // Outcome chips strip
  const outcomes = [
    { num: "6 wks", label: "to full healing" },
    { num: "$2,000", label: "vet surgery avoided" },
    { num: "2.5 pH", label: "Acidic spray (topical)" },
    { num: "8.5–9.5", label: "ERW for drinking" },
  ];
  outcomes.forEach((o, idx) => {
    const x = 0.7 + idx * 3.05;
    s.addShape("roundRect", {
      x,
      y: 6.15,
      w: 2.95,
      h: 0.75,
      fill: { color: C.aqua, transparency: 90 },
      line: { color: C.aqua, width: 0.5 },
      rectRadius: 0.12,
    });
    s.addText(o.num, {
      x,
      y: 6.18,
      w: 2.95,
      h: 0.45,
      fontFace: F.display,
      fontSize: 18,
      color: C.navy,
      bold: true,
      align: "center",
    });
    s.addText(o.label, {
      x,
      y: 6.6,
      w: 2.95,
      h: 0.3,
      fontFace: F.body,
      fontSize: 10,
      color: C.silver3,
      align: "center",
    });
  });

  addFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 17 — THE SIMPLE TAKEAWAY
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setDarkBg(s);

  kicker(s, "The simple takeaway", 0.7, 0.8);
  s.addText("Clean water =", {
    x: 0.7,
    y: 1.7,
    w: 12,
    h: 1.3,
    fontFace: F.display,
    fontSize: 62,
    color: C.silver,
  });
  s.addText(
    [
      {
        text: "More energy. ",
        options: { color: C.aquaLight, italic: true },
      },
      {
        text: "Healthier cells. ",
        options: { color: C.aquaLight, italic: true },
      },
      {
        text: "Longer life.",
        options: { color: C.aquaLight, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 2.95,
      w: 12,
      h: 1.3,
      fontFace: F.display,
      fontSize: 62,
    }
  );

  // Three takeaway pillars
  const pillars = [
    {
      title: "Hydrate properly",
      body: "Small clusters, fast aquaporin transit. The cell gets the water — not just the gut.",
    },
    {
      title: "Neutralize free radicals",
      body: "Molecular hydrogen donates electrons without becoming a new radical itself.",
    },
    {
      title: "Restore balance",
      body: "Alkaline support against the acid load of modern food, stress, and metabolism.",
    },
  ];
  pillars.forEach((p, idx) => {
    const x = 0.7 + idx * 4.15;
    const y = 4.7;
    s.addShape("roundRect", {
      x,
      y,
      w: 3.95,
      h: 1.95,
      fill: { color: C.navy3, transparency: 30 },
      line: { color: C.aqua, width: 0.5 },
      rectRadius: 0.14,
    });
    s.addShape("ellipse", {
      x: x + 0.25,
      y: y + 0.25,
      w: 0.45,
      h: 0.45,
      fill: { color: C.aqua },
      line: { type: "none" },
    });
    s.addText(String(idx + 1), {
      x: x + 0.25,
      y: y + 0.28,
      w: 0.45,
      h: 0.45,
      fontFace: F.display,
      fontSize: 18,
      color: C.navy,
      align: "center",
      bold: true,
    });
    s.addText(p.title, {
      x: x + 0.85,
      y: y + 0.22,
      w: 3,
      h: 0.5,
      fontFace: F.display,
      fontSize: 16,
      color: C.silver,
      bold: true,
    });
    s.addText(p.body, {
      x: x + 0.25,
      y: y + 0.85,
      w: 3.55,
      h: 1.1,
      fontFace: F.body,
      fontSize: 11.5,
      color: C.silver2,
    });
  });

  addDarkFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 18 — SZENT-GYÖRGYI CLOSING QUOTE
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setDarkBg(s);

  // Big drop visual
  s.addShape("ellipse", {
    x: 5.3,
    y: 1,
    w: 2.7,
    h: 2.7,
    fill: { color: C.aqua, transparency: 70 },
    line: { type: "none" },
  });
  s.addShape("ellipse", {
    x: 5.75,
    y: 1.4,
    w: 1.8,
    h: 1.8,
    fill: { color: C.aquaLight, transparency: 50 },
    line: { type: "none" },
  });

  s.addText('"', {
    x: 0.7,
    y: 3.3,
    w: 2,
    h: 1.5,
    fontFace: F.display,
    fontSize: 140,
    color: C.aqua,
    italic: true,
  });

  s.addText(
    "Water is life's matter and matrix, mother and medium. There is no life without water.",
    {
      x: 1.6,
      y: 4.4,
      w: 11,
      h: 1.6,
      fontFace: F.display,
      fontSize: 36,
      color: C.silver,
      italic: true,
      align: "left",
    }
  );

  s.addShape("rect", {
    x: 1.6,
    y: 6.1,
    w: 0.4,
    h: 0.03,
    fill: { color: C.aqua },
    line: { type: "none" },
  });
  s.addText("ALBERT SZENT-GYÖRGYI  ·  NOBEL LAUREATE IN MEDICINE, 1937", {
    x: 1.6,
    y: 6.2,
    w: 10,
    h: 0.35,
    fontFace: F.body,
    fontSize: 11,
    color: C.aqua,
    bold: true,
    charSpacing: 6,
  });

  addDarkFooter(s, i, TOTAL);
}

// ============================================================
// SLIDE 19 — REFERENCES
// ============================================================
i++;
{
  const s = pptx.addSlide();
  setLightBg(s);

  kicker(s, "References", 0.7, 0.6, C.navy3);
  s.addText(
    [
      { text: "Every claim, ", options: {} },
      {
        text: "sourced.",
        options: { color: C.aqua, italic: true },
      },
    ],
    {
      x: 0.7,
      y: 1.05,
      w: 12,
      h: 1.3,
      fontFace: F.display,
      fontSize: 32,
      color: C.navy,
    }
  );

  const refs = [
    {
      n: "1",
      author: "Ohsawa I, et al.",
      title:
        "Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals",
      source: "Nature Medicine. 2007;13(6):688–694.",
    },
    {
      n: "2",
      author: "Shirahata S, et al.",
      title:
        "Electrolyzed–reduced water scavenges active oxygen species and protects DNA from oxidative damage",
      source: "Biochem Biophys Res Commun. 1997;234(1):269–274.",
    },
    {
      n: "3",
      author: "Nakao A, et al.",
      title:
        "Effectiveness of hydrogen-rich water on antioxidant status of subjects with potential metabolic syndrome",
      source: "J Clin Biochem Nutr. 2010;46(2):140–149.  ·  +39% SOD, −43% TBARS",
    },
    {
      n: "4",
      author: "Ichihara M, et al.",
      title:
        "Beneficial biological effects of molecular hydrogen — comprehensive review",
      source:
        "Medical Gas Research. 2015;5:12.  ·  1,500+ PubMed articles on H₂",
    },
    {
      n: "5",
      author: "Univ. of Ljubljana",
      title: "Effect of ions on the structure of water",
      source: "PubMed: 12371874  ·  microclustering basis",
    },
    {
      n: "6",
      author: "Agre P. (Nobel Lecture)",
      title: "Aquaporin water channels",
      source: "Angew Chem Int Ed. 2004;43(33):4278–4290.",
    },
    {
      n: "7",
      author: "Vorobjeva NV.",
      title:
        "Selective stimulation of anaerobic microflora by electrolyzed reducing water",
      source: "Medical Hypotheses. 2005;64(3):543–546.",
    },
    {
      n: "8",
      author: "Parker P, ND.",
      title:
        "If Bodies Heal Themselves, Why Am I Still Sick? — The Simple Truth about Oxidation",
      source: "Healing Quest Press.",
    },
    {
      n: "9",
      author: "Environmental Working Group",
      title: "Tap Water Database",
      source: "EWG.org/tapwater  ·  ZIP-code contaminant lookup",
    },
    {
      n: "10",
      author: "doctorsonkangen.com",
      title:
        "Allied research index — referenced with permission",
      source: "doctorsonkangen.com/studies",
    },
  ];

  refs.forEach((r, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 0.7 + col * 6.15;
    const y = 2.4 + row * 0.9;

    s.addText(`[${r.n}]`, {
      x,
      y,
      w: 0.85,
      h: 0.4,
      fontFace: F.display,
      fontSize: 14,
      color: C.aqua,
      bold: true,
    });
    s.addText(r.author, {
      x: x + 0.7,
      y,
      w: 5.3,
      h: 0.3,
      fontFace: F.body,
      fontSize: 11,
      color: C.navy,
      bold: true,
    });
    s.addText(r.title, {
      x: x + 0.7,
      y: y + 0.28,
      w: 5.3,
      h: 0.3,
      fontFace: F.body,
      fontSize: 10,
      color: C.navy2,
      italic: true,
    });
    s.addText(r.source, {
      x: x + 0.7,
      y: y + 0.55,
      w: 5.3,
      h: 0.25,
      fontFace: F.body,
      fontSize: 9,
      color: C.silver3,
    });
  });

  s.addText(
    "Full bibliography & links — visit /references on the live site",
    {
      x: 0.7,
      y: 6.7,
      w: 12,
      h: 0.35,
      fontFace: F.body,
      fontSize: 11,
      color: C.aqua,
      italic: true,
      align: "center",
    }
  );

  addFooter(s, i, TOTAL);
}

// ---- Save ----
pptx
  .writeFile({ fileName: "Dr_DeFazio_ERW_Lecture.pptx" })
  .then((name) => console.log(`Saved: ${name}`));
