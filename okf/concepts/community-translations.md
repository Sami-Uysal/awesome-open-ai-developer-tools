---
type: concept
title: Translations
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/community/translations/"
path: /community/translations/
updated: 2026-08-20
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-08-20T14:29:47.412Z"
---
# Translations

The list is maintained in several languages. **English is canonical** — when a translation and the English version disagree, English wins.

## Available

| Language | File | Status |
|---|---|---|
| English | [docs/index.md](../index.md) | Canonical |
| Türkçe | [docs/languages/tr.md](../languages/tr.md) | Complete |
| 简体中文 | [docs/languages/zh.md](../languages/zh.md) | Complete |
| Español | [docs/languages/es.md](../languages/es.md) | Complete |

## Wanted

Highest-impact languages still missing, roughly by developer population:

- 日本語 (`docs/languages/ja.md`)
- Português - Brasil (`docs/languages/pt-BR.md`)
- Deutsch (`docs/languages/de.md`)
- Русский (`docs/languages/ru.md`)
- Français (`docs/languages/fr.md`)
- हिन्दी (`docs/languages/hi.md`)
- 한국어 (`docs/languages/ko.md`)
- Bahasa Indonesia (`docs/languages/id.md`)

Claim one by opening an issue titled `Translation: <language>` so two people don't duplicate the work.

## How to add a language

1. Copy `docs/index.md` to `docs/languages/<code>.md`, using the BCP-47 code (`ja`, `pt-BR`, `zh`).
2. Translate the prose. **Do not translate:**
   - Project names (`Ollama`, `LlamaIndex`, `pgvector`)
   - Technical terms with no settled local equivalent (`embedding`, `quantization`, `prompt`, `token`, `RAG`) — use the English term, optionally glossed once on first use
   - Code blocks, licenses, and URLs
3. Keep the language bar at the top and mark your language as the active one (bold, not a link).
4. Add a line to the "Available" table above.
5. Add your language to the language bar in `docs/index.md` and every existing file in `docs/languages/`, so the pages stay cross-linked.

## Structural rule

Every translation carries the **same categories, same entries, in the same order** as the English file. A translation is a translation, not a fork with local opinions. If you think an entry should be added or removed, open that PR against `README.md` first — once it lands there, it propagates to every language.

## Staying in sync

Translations drift. That's expected and acceptable — a slightly stale translation beats no translation.

- When you change `docs/index.md`, you are **not** required to update every translation. Open an issue tagged `translation-sync` listing what changed, and translators pick it up.
- To check whether a translation has drifted, compare its `###` entry headings against `docs/index.md` — tool names are identical across languages by design, so diffing those lines shows exactly what's missing.
- Translations more than 6 months behind get a banner asking for a maintainer. They don't get deleted.

## Machine translation

Allowed as a starting point, not as a submission. A native or fluent speaker must read the whole file before the PR is opened — the "Edge" lines carry technical nuance that machine translation routinely flattens into marketing copy.
