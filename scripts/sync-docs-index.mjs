import { readFileSync, writeFileSync } from "node:fs";

const README_PATH = "README.md";
const INDEX_PATH = "docs/index.md";

const normalize = (s) => s.replace(/\r\n/g, "\n");
const toDocmd = (readme) => normalize(readme).replace(/\]\(docs\//g, "](./");

const readme = readFileSync(README_PATH, "utf8");
const currentIndex = readFileSync(INDEX_PATH, "utf8");
const expectedIndex = toDocmd(readme);

if (normalize(currentIndex) === expectedIndex) {
  console.log("docs/index.md already in sync with README.md — no changes.");
  process.exit(0);
}

writeFileSync(INDEX_PATH, expectedIndex);
console.log("docs/index.md updated from README.md.");
