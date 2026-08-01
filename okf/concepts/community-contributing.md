---
type: concept
title: Contributing
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/community/contributing/"
path: /community/contributing/
updated: 2026-08-01
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-08-01T21:46:23.448Z"
---
# Contributing

Thanks for helping keep this list useful.

## Inclusion criteria

A tool gets in if it meets **all** of these:

1. **Open source.** OSI-approved license preferred. Source-available or fair-code tools (n8n, AutoGPT platform, Phoenix) may be included but **must be labeled as such** in the entry.
2. **Actively maintained.** Commits within the last 6 months. Archived repos get removed.
3. **Real developer utility.** It solves a problem someone actually has. Demos, toys, and thin wrappers around one API call do not qualify.
4. **Not a duplicate.** If three tools in a category already do the same thing, the new one needs a clear reason to exist.

## Maturity level

Every entry carries one badge. Pick it yourself when you open the PR — reviewers just sanity-check it against the criteria below. A 30-second look at the repo's releases page, commit history, and README is usually enough.

- 🟢 **stable** — `v1.0.0`+ released **or** a battle-tested industry standard that never bothered bumping to 1.0 (Ollama, vLLM, LlamaIndex, Chroma — years of production use, `v0.x.x` forever). Real doc site with install guides and API reference, CI running tests, usually backed by a company, VC funding, or an established maintainer team. Staying on `0.x` alone isn't disqualifying if everything else says "this is infrastructure people depend on."
- 🟡 **active** — still on `v0.x.x`, but shipping fast: regular commits, PRs merging, healthy issue traffic. Solid for personal and local use; expect the API to move if you wire it into something you can't easily unwind.
- 🟠 **experimental** — no release tag (or an `-alpha`/`-beta` one), young repo, low commit count, and/or the maintainer says so directly ("PoC", "WIP", "don't use in production"). Thin docs, no tests, breaking changes are the norm.

Quick decision order: release tag → commit cadence/age → does the README warn you itself.

## Entry format

Match the existing style exactly:

```markdown
### [Tool Name](https://github.com/owner/repo)
`Language` · `License` · `Form factor` · 🟢 stable / 🟡 active / 🟠 experimental

One sentence: what it does, in plain language.

- **Replaces:** the proprietary product(s) it substitutes for
- **Backends:** which models/providers it supports (only if relevant)
- **Edge:** 1–3 sentences on *why you'd pick this over the alternatives*. Be specific and technical. No marketing adjectives.
```

The maturity badge (see [Maturity level](#maturity-level)) goes at the end of the language/license/form-factor line.

### Rules for the "Edge" line

This is the whole value of the list. Get it right.

- Bad: "Powerful, flexible, and easy to use."
- Good: "PagedAttention plus continuous batching gives order-of-magnitude throughput gains over naive serving."

Say what is technically true and load-bearing. If you can't name a concrete reason to choose it, the tool probably doesn't belong here.

### No star counts

Star counts go stale within weeks and turn every PR into a maintenance chore. Don't add them.

## PR checklist

- [ ] Link goes to the canonical repo (not a fork, not a marketing site)
- [ ] License is accurate — check the `LICENSE` file in the repo, not the README claim
- [ ] Placed in the correct category
- [ ] Entries within a category are ordered roughly by relevance
- [ ] "Edge" line is specific and technical
- [ ] Maturity badge (🟢/🟡/🟠) set and matches the [criteria above](#maturity-level)
- [ ] Updated the cheat sheet table in the README if the tool replaces a well-known paid product
- [ ] One tool per PR (makes review and revert clean)

## Removing entries

Removals are as welcome as additions. Open a PR if a project is:

- Archived or unmaintained (>12 months without commits)
- Relicensed away from open source
- Superseded by something clearly better in the same category

Say why in the PR description.

## Reporting errors

Wrong license, dead link, inaccurate claim — open an issue. Corrections are the highest-value contribution to a list like this.
