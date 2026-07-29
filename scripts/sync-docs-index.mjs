// Regenerates docs/index.md and docs/categories/*.md from README.md so the
// docmd site mirrors the GitHub-facing README. README.md is the source of
// truth (that's where PRs land) — this only rewrites repo-relative
// "docs/x" links to site-relative "./x" links, since docmd serves docs/ as
// the site root, and splits README's ## sections across the category
// pages docmd's nav points to.
import { readFileSync, writeFileSync } from "node:fs";

const README_PATH = "README.md";
const INDEX_PATH = "docs/index.md";

// Which README "## " sections belong on which category page, in order.
// Static on purpose: a new README section with no entry here fails the
// build below instead of silently vanishing from the site.
const CATEGORY_MAP = {
  "docs/categories/01-ai-ides-and-cli.md": [
    "Coding Agents & Pair Programmers",
    "Prompt-to-App Builders",
  ],
  "docs/categories/02-open-source-agents.md": [
    "Autonomous & Persistent Agents",
    "Agent Sandboxes & Browser Control",
    "Agent Frameworks & Orchestration",
    "Model Context Protocol (MCP)",
  ],
  "docs/categories/03-local-llm-inference.md": [
    "Local Inference Engines",
    "Inference Servers & Gateways",
    "Chat UIs & Frontends",
  ],
  "docs/categories/04-rag-and-data.md": [
    "Vector Databases",
    "Embeddings & Rerankers",
    "RAG Frameworks",
  ],
  "docs/categories/05-training-evals-and-ops.md": [
    "Fine-Tuning & Training",
    "Evals, Testing & Guardrails",
    "Observability & LLMOps",
  ],
  "docs/categories/06-multimodal-and-builders.md": [
    "Speech, Vision & Multimodal",
    "Low-Code / Visual Builders",
    "Open-Source Alternatives Cheat Sheet",
    "Choosing Your Stack",
  ],
};

// README sections that intentionally live only in README/index.md, never
// on a category page.
const UNMAPPED_SECTIONS = new Set([
  "Contents",
  "Contributing",
  "Contributors",
  "License",
]);

const normalize = (s) => s.replace(/\r\n/g, "\n");
const toDocmd = (text) => text.replace(/\]\(docs\//g, "](./");

function splitSections(readme) {
  const headerRe = /^## (.+)$/gm;
  const matches = [...readme.matchAll(headerRe)];
  const sections = new Map();
  for (let i = 0; i < matches.length; i++) {
    const title = matches[i][1].trim();
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : readme.length;
    sections.set(title, readme.slice(start, end));
  }
  return sections;
}

function writeIfChanged(path, expected) {
  const current = normalize(readFileSync(path, "utf8"));
  if (current === expected) return false;
  writeFileSync(path, expected);
  console.log(`updated ${path}`);
  return true;
}

const readme = normalize(readFileSync(README_PATH, "utf8"));
const sections = splitSections(readme);

let changed = false;

changed = writeIfChanged(INDEX_PATH, toDocmd(readme)) || changed;

for (const [path, titles] of Object.entries(CATEGORY_MAP)) {
  const current = normalize(readFileSync(path, "utf8"));
  const firstHeaderIdx = current.search(/^## /m);
  if (firstHeaderIdx === -1) {
    throw new Error(
      `${path}: no "## " section header found — can't locate the H1/intro prefix to preserve`,
    );
  }
  const prefix = current.slice(0, firstHeaderIdx);

  const body = titles
    .map((title) => {
      const section = sections.get(title);
      if (!section) {
        throw new Error(
          `${path}: README has no "## ${title}" section (check heading text matches exactly)`,
        );
      }
      return toDocmd(section);
    })
    .join("");

  // Trim the trailing blank line inherited from README (there it separates
  // this section from the next one; here it's just the end of the file).
  const expected = (prefix + body).replace(/\n+$/, "\n");
  changed = writeIfChanged(path, expected) || changed;
}

const mappedTitles = new Set(Object.values(CATEGORY_MAP).flat());
for (const title of sections.keys()) {
  if (!mappedTitles.has(title) && !UNMAPPED_SECTIONS.has(title)) {
    throw new Error(
      `README has a "## ${title}" section not mapped to any docs/categories file and not in UNMAPPED_SECTIONS — add it to scripts/sync-docs-index.mjs`,
    );
  }
}

if (!changed) {
  console.log(
    "docs/index.md and docs/categories/*.md already in sync with README.md — no changes.",
  );
}
