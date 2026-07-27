# Launch Playbook (internal)

Not part of the list. Growth notes for this repo. Delete before making the repo public if you'd rather not show your work.

---

## Why an awesome list

Fastest route to stars with no code. People don't clone a curated list — they star it as a bookmark. That converts far better than a library, which requires someone to install it, learn it, and keep it.

Rough split: **20% content quality, 80% distribution.** A great list nobody sees gets 40 stars.

## Pre-launch checklist

- [ ] Every link verified live (dead links are the #1 credibility killer)
- [ ] Every license checked against the repo's actual `LICENSE` file, not its README claim
- [ ] Repo description + topics set: `awesome`, `awesome-list`, `ai`, `llm`, `open-source`, `ai-agents`, `developer-tools`
- [ ] Social preview image set (Settings → General → Social preview) — this is what renders on X/HN/Reddit
- [ ] `CONTRIBUTING.md` present, so the first PR isn't a mess
- [ ] Pinned to your GitHub profile

## Launch sequence

Order matters. Don't fire everything at once — stagger it so each wave feeds the next.

### Day 1 — Hacker News
Post as **"Show HN: Awesome Open-Source AI Developer Tools"**. Best window is roughly 08:00–10:00 ET on a weekday. First comment should be yours: why you built it, what's opinionated about it, what feedback you want. Answer every reply for the first 4 hours — engagement drives ranking harder than upvotes.

### Day 1–2 — Reddit
Different framing per subreddit; identical cross-posts get filtered and get you flagged.

- `r/LocalLLaMA` — lead with the local inference + self-hosting angle. Highest-signal audience for this list.
- `r/opensource` — lead with the "replace paid SaaS" cheat sheet.
- `r/selfhosted` — lead with the self-hosting stack recipes.
- `r/programming` — lead with the tooling angle; strictest mod rules, post last.
- `r/SideProject`, `r/devtools` — general.

Read each subreddit's self-promo rules first. Some require a minimum karma/history ratio.

### Day 2–3 — X / Twitter
Thread, not a single link post. Structure: hook ("You're paying for 6 AI tools that have free open-source replacements") → 5–8 concrete swaps, one line each → link last. Tag maintainers of listed projects; many will retweet, which is your real distribution.

### Day 3–5 — Product Hunt
Free open-source listing. Launch Tue–Thu. Prepare gallery images in advance. Pushes a second traffic wave once the HN spike decays.

### Ongoing
- **GitHub Trending** is the compounding effect. Enough same-day stars puts you on the daily trending page, and that's where the snowball happens organically.
- Submit a PR to [sindresorhus/awesome](https://github.com/sindresorhus/awesome) once the list is mature and meets its formatting rules. Being listed there is a permanent traffic source.
- Post to awesome-list aggregators and dev newsletters (TLDR, Console.dev, Changelog).

## Sustaining it

A list that stops updating stops getting stars. Cheap maintenance loop:

- Monthly: run a link checker, prune archived repos.
- Add each notable new tool within a week of its own launch — you catch its traffic wave.
- Merge PRs fast. Contributors merged in <48h come back and bring others.

---

## Verification log

Four entries from the initial research pass were held back pending verification. All four checked out and are now in the README:

| Entry | Verified | Notes |
|---|---|---|
| [`nexu-io/open-design`](https://github.com/nexu-io/open-design) | ✅ | Apache-2.0, real project with its own site |
| [`NousResearch/hermes-agent`](https://github.com/NousResearch/hermes-agent) | ✅ | MIT, official Nous Research repo |
| [`IdeoaLabs/Open-Sable`](https://github.com/IdeoaLabs/Open-Sable) | ✅ | Real; confirm license on the repo before quoting one |
| [`openclaw/openclaw`](https://github.com/openclaw/openclaw) | ✅ | Real and enormous; the "175k stars" figure in the original research was stale/low, but note a `microsoft/openclaw` repo also exists — confirm which is canonical before linking |

The star counts in the original research were unreliable in both directions. That's the general lesson, not a one-off.

**Standing rule for this repo:** if you can't open the repo and read its `LICENSE` and recent commits, it doesn't go in the README. Never quote a star count in the list itself.

Still unverified against primary sources and deliberately excluded: any tool whose only evidence is an SEO listicle. If the project's own repo or docs don't say it, it isn't a fact.
