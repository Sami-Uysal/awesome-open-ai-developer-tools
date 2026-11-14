---
type: concept
title: "AI IDEs and CLI"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/01-ai-ides-and-cli/"
path: /categories/01-ai-ides-and-cli/
updated: 2026-11-14
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-11-14T10:21:54.748Z"
---
# AI IDEs and CLI

Coding agents, pair programmers, and prompt-to-app builders for developer workflows.

## Coding Agents & Pair Programmers

Agents that read, write, and refactor code in your repo.

### [aider](https://github.com/Aider-AI/aider)
`Python` · `Apache-2.0` · CLI · 🟡 active

AI pair programming in your terminal. Maps your whole repository, edits files directly, and writes its own git commits.

- **Replaces:** GitHub Copilot, Cursor
- **Backends:** 100+ models via LiteLLM — Claude, GPT, Gemini, plus local models through Ollama or any OpenAI-compatible endpoint
- **Edge:** The repo map gives it whole-codebase context without dumping every file into the prompt. Auto-commits mean every AI edit is a revertable checkpoint. Editor-agnostic — works alongside VS Code, Neovim, Emacs, or nothing at all.

### [OpenCode](https://github.com/sst/opencode)
`TypeScript` · `MIT` · TUI · 🟢 stable

Terminal-native coding agent with LSP integration — it loads the right language server so the model sees real type information, not guesses.

- **Replaces:** Claude Code, Cursor
- **Backends:** Anthropic, OpenAI, Google, local models; provider-agnostic by design
- **Edge:** LSP-grounded suggestions cut hallucinated APIs. Client/server split means you can drive one session from multiple clients.

### [Cline](https://github.com/cline/cline)
`TypeScript` · `Apache-2.0` · VS Code extension · 🟢 stable

Autonomous coding agent inside VS Code. Plans, edits files, runs terminal commands, and uses the browser — asking permission at each step.

- **Replaces:** Cursor Composer, Devin
- **Backends:** Anthropic, OpenAI, Google, AWS Bedrock, Azure, OpenRouter, Ollama, LM Studio
- **Edge:** Human-in-the-loop by default — every file diff and shell command needs approval. Plan/Act mode separation stops the agent from bulldozing a codebase.

### [Continue](https://github.com/continuedev/continue)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains · 🟢 stable

Build your own AI code assistant — autocomplete, chat, and edit, configured with your own models and context providers.

- **Replaces:** GitHub Copilot
- **Backends:** Any — local (Ollama, llama.cpp) or hosted
- **Edge:** Fully configurable context providers (docs, terminal, git diff, codebase). Tab-autocomplete works well with small local models, so you can run genuinely offline.

### [OpenHands](https://github.com/All-Hands-AI/OpenHands)
`Python` · `MIT` · Web + headless · 🟢 stable

Agents that do what a developer does — modify code, run commands, browse the web, call APIs — inside a sandboxed runtime.

- **Replaces:** Devin
- **Backends:** Anything LiteLLM supports
- **Edge:** Real sandboxed execution (Docker) rather than a chat that pretends to run things. Headless and CLI modes make it scriptable in CI.

### [PatchPilot](https://github.com/harshitethic/PatchPilot)
`Python` · `MIT` · Local web UI · 🟠 experimental

Local-first coding agent that plans changes, applies guarded edits, runs approved tests in disposable Docker containers, and produces reviewable Git diffs.

- **Replaces:** Hosted coding-agent experiments for basic local edit-and-review workflows; not a feature-for-feature replacement for mature agents
- **Backends:** Local Ollama, OpenAI-compatible endpoints, OpenRouter
- **Edge:** Test execution fails closed without an approved offline Docker image instead of running project scripts on the host. It also bounds Git output, checks staged changes for recognizable secrets, and documents the remaining host-side isolation risks.

### [SWE-agent](https://github.com/SWE-agent/SWE-agent)
`Python` · `MIT` · CLI · 🟡 active

Research-grade agent that turns a GitHub issue into a pull request.

- **Replaces:** Devin, issue-to-PR bots
- **Edge:** The agent-computer interface (ACI) is the point — carefully designed tools beat a bigger model. If you're building your own agent, read this codebase first.

### [Goose](https://github.com/block/goose)
`Rust` · `Apache-2.0` · CLI + desktop · 🟢 stable

Extensible autonomous agent from Block, now governed by the Linux Foundation. Installs, executes, edits, and tests — not just suggests.

- **Replaces:** Devin, Cursor agent mode
- **Backends:** Any provider, plus first-class MCP extension support
- **Edge:** More autonomous than aider — plans and iterates with less hand-holding. Vendor-neutral governance under the Linux Foundation means no rug-pull risk, which matters for tooling you standardize a team on.

### [molt](https://github.com/solvyxtech/molt)
`TypeScript` · `Apache-2.0` · CLI + desktop · 🟡 active

Coding agent that won't say done on a false claim — verification on disk, receipts for accepts and refusals.

- **Replaces:** Cursor agent mode, Claude Code for teams that need a done-bar outside the model
- **Backends:** OpenAI-compatible endpoints (Ollama, vLLM, etc.) or Anthropic
- **Edge:** Acceptance lives in `.molt/done.yml` against real files; accepts and refusals both write hash-chained receipts (`molt verify`). Install from the [GitHub releases](https://github.com/solvyxtech/molt/releases/latest) or build from source.

### [BitFun](https://github.com/GCWing/BitFun)
`Rust + TypeScript` · `MIT` · Desktop + CLI · 🟡 active

Cross-platform coding and desktop agent that plans, edits, tests, and commits inside real Git repositories.

- **Replaces:** Cursor, Claude Desktop
- **Backends:** User-configured model providers; model-agnostic by design
- **Edge:** A Rust runtime binds each conversation to task-specific Mini Apps while retaining filesystem, terminal, Git, browser, desktop, and remote-workspace execution. A self-hostable zero-knowledge relay supports cross-device session control without routing workspace data through a vendor cloud.

### [Orkas](https://github.com/Orkas-AI/Orkas)
`TypeScript` · `MIT` · Desktop · 🟡 active

Local-first desktop AI workforce where a Commander plans work and coordinates built-in specialists and external coding agents through one chat.

- **Replaces:** Cursor agent mode, cloud-hosted agent orchestrators
- **Backends:** Claude, OpenAI, Gemini, DeepSeek, Kimi, GLM, Qwen, MiniMax, Doubao, and compatible local model endpoints
- **Edge:** Orkas runs the orchestration layer on the user's machine: conversations, files, agent configuration, and model keys stay local, while the Commander can dispatch Claude Code, Codex, OpenCode, OpenClaw, and Hermes as local subprocesses alongside built-in agents.

### [MulmoTerminal](https://github.com/receptron/mulmoterminal)
`TypeScript` · `MIT` · Browser / CLI · 🟢 active

Browser grid of live Claude Code and Codex sessions, one real PTY per cell, started with a single `npx` command. Each cell is colour-coded working / needs-you / done, so a session blocked on a permission prompt is distinguishable from one still thinking without opening it.

- **Replaces:** tmux panes plus a notifier script, hand-rolled session dashboards
- **Backends:** the `claude` and `codex` CLIs you already installed and pay for; Grok and Antigravity also supported
- **Edge:** session state comes from the agent CLI's own hooks (`PreToolUse` / `Stop` / `Notification`), not from parsing scrollback, so "working" and "waiting on you" are different states rather than both being "output stopped". tmux backs the sessions, so they survive a server restart or a reboot; each cell can hold its own git worktree with commit, push and PR from the grid.

### [ordewell](https://github.com/ordewell/ordewell)
`Rust` · `Apache-2.0` · CLI / TUI · 🟡 active

Plan-first CLI/TUI orchestrator that converts a single goal into an ordered, editable plan of coding-agent tasks.

- **Replaces:** Manual task decomposition and multi-agent CLI scripting
- **Backends:** Claude Code, Codex, OpenCode
- **Edge:** Features a read-only planner that generates explicit step-by-step agent plans before execution, with per-task runner, model, and mode assignment.

### [LoopTroop](https://github.com/looptroop-ai/LoopTroop)
`TypeScript` · `MIT` · Desktop + CLI · 🟡 active

Local orchestrator that turns complex coding tickets into verified pull requests using multi-model planning councils and isolated git worktrees.

- **Replaces:** Devin, Cursor agent mode, cloud-hosted agent orchestrators
- **Backends:** Anthropic, OpenAI, Google Gemini, DeepSeek, OpenRouter, and local models via OpenCode
- **Edge:** LoopTroop runs an LLM council where distinct models draft and vote on task plans before implementation starts. Each task executes inside an isolated git worktree with bounded retry loops, so failed runs roll back without touching the primary checkout. Human approval gates pause execution before irreversible terminal commands or branch updates run.

### [Atomic Agent](https://github.com/AtomicBot-ai/atomic-agent)
`TypeScript` · `MIT` · CLI + TUI · 🟠 experimental

Local-first coding and desktop agent that runs open-weight models on your machine, with no account or API key needed to install and run it.

- **Replaces:** Claude Code, Cursor, GitHub Copilot
- **Backends:** Bundled `llama.cpp` fork for local quantized models, plus any OpenAI-compatible endpoint, with presets for OpenRouter, LM Studio, and Ollama Cloud
- **Edge:** Ships its own `llama.cpp` fork and manages the backend process itself, so a quantized local model stays usable across long multi-step runs without a separate server setup. The control loop and all state, including a five-layer memory store, stay on the machine, and 56 built-in tools cover browser, filesystem, git, and vision alongside external MCP servers. The README labels it a developer preview: APIs, commands, and config still move between releases.

### [Kilo Code](https://github.com/Kilo-Org/kilocode)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains · 🟢 stable

Open-source IDE agent that merged the best of Roo Code and Cline into one extension.

- **Replaces:** Cursor, Windsurf
- **Edge:** Orchestrator mode splits a large task into subtasks handled by specialized modes. Absorbs upstream features from both parents, so it moves faster than either did alone.

### [Tabby](https://github.com/TabbyML/tabby)
`Rust` · `Apache-2.0` · Self-hosted server · 🟢 stable

Self-hosted AI coding assistant with its own inference server, no external API calls.

- **Replaces:** GitHub Copilot (enterprise)
- **Edge:** Runs on consumer GPUs, OpenAPI interface, and answers the compliance question ("where does our code go?") with "nowhere."

### [gpt-engineer](https://github.com/gpt-engineer-org/gpt-engineer)
`Python` · `MIT` · CLI · 🟠 experimental

Describe a project in natural language; it writes and iterates on the whole codebase.

- **Edge:** Best for greenfield scaffolding rather than surgical edits on an existing repo.

### [Orbi](https://github.com/orbi-build/orbi)
`Python` · `AGPL-3.0` · Self-hosted runner + GitHub · 🟢 stable

Works from GitHub issues: label one `ai-ready` and it implements the change in an isolated worktree, opens a PR, and a separate review session checks the diff against the issue's acceptance criteria before anything merges.

- **Replaces:** Devin, GitHub Copilot coding agent
- **Backends:** Any OpenAI-compatible model, or a Codex subscription
- **Edge:** Review is a gate, not a suggestion: only the exact head the reviewer approved is merged, and Orbi then cuts the tagged release. Ops tickets (deploys, investigations) post their real commands and output on the issue.

### [Ivy Tendril](https://github.com/Ivy-Interactive/Ivy-Tendril)
`TypeScript` · `MIT` · Desktop + Web · 🟡 active

Agentic software factory that manages parallel Git worktrees with programmatic verifications and interactive review loops.

- **Replaces:** Manual git worktree management, multi-agent branch orchestration
- **Backends:** Anthropic, OpenAI, local models
- **Edge:** Automates parallel Git worktree isolation with built-in programmatic verification gates and interactive human-in-the-loop review loops before merging.

### [md²](https://github.com/jan-bogaerts/md2)
`TypeScript + JavaScript` · `AGPL-3.0` · Desktop app · 🟡 active

Local desktop workspace that organizes Codex and Claude Code work around Markdown feature cards and isolated Git worktrees.

- **Replaces:** Conductor, manual task-board and terminal/worktree orchestration
- **Backends:** Codex CLI and Claude Code CLI, with multiple accounts and agent switching
- **Edge:** Keeps feature definitions as local, versionable Markdown while connecting each card to its agent conversations, worktree, commits, diagrams, and merge workflow. Built-in statistics provide insight into agent usage, performance, and cost. Turn code into editable diagrams and diagram changes back into code.

### [YYLO](https://github.com/yylo-dev/yylo)
`Python + TypeScript` · `MIT` · CLI · 🟡 active

Command-line orchestrator for coding agents, repeatable workflows, and receipt-backed repository changes.

- **Replaces:** Manual multi-agent workflow scripting, cloud-hosted agent orchestration
- **Backends:** Drives Pi and Codex subagents through per-subagent aliases
- **Edge:** `task start` freezes the protected target SHA and creates a dedicated branch/worktree per task; a merge queue then owns risk-based review — low risk merges with no semantic reviewer,

### [CodeOtter](https://github.com/dharmeshgurnani/CodeOtter)
`JavaScript + TypeScript` · `AGPL-3.0` · Self-hosted server + CLI · 🟡 active

Self-hosted AI pull request reviewer for GitHub, Forgejo and Gitea that scores each PR, enforces merge gates as status checks and posts committable inline fixes.

- **Replaces:** CodeRabbit, GitHub Copilot code review
- **Backends:** Local GGUF models via a managed llama.cpp runtime, Anthropic, OpenAI, OpenRouter, MiniMax
- **Edge:** Scores and pass/fail gates can come from a separate typed-answer model rather than parsed prose, so merge gates don't depend on LLM formatting. Runs fully offline, reads the repo's `AGENTS.md`/`CLAUDE.md`, and works with self-hosted Forgejo and Gitea, not only GitHub.

### [workkit](https://github.com/ITW-Creative-Works/workkit)
`JavaScript + Shell` · `FSL-1.1-MIT` (source-available, not OSI) · Claude Code plugin + CLI · 🟡 active

Claude Code plugin that runs GitHub Issues as the work pipeline: each issue moves through labeled stages from spec to build, QA and ship.

- **Replaces:** Ad-hoc chat-driven coding sessions and hand-kept task lists
- **Backends:** Claude Code (Anthropic)
- **Edge:** The chat acts as a manager that dispatches worker subagents for code and tests plus a verifier that reviews both without seeing how they were made. Hooks block a code commit until the full test suite has passed on exactly what is being committed, and finished work waits uncommitted for the human to try it.

### [Sqwakie](https://github.com/alexcarney460-hue/walkie)
`TypeScript` · `FSL-1.1-ALv2` (source-available, not OSI; converts to `Apache-2.0`) · Background daemon + CLI + MCP + web dashboard · 🟠 experimental

Puts a small team's people and their Claude Code and Codex agents on one team: agents message and ask each other peer to peer, and one dashboard shows what every agent across everyone's machines is doing.

- **Replaces:** Relaying questions between teammates' agents through Slack, email or copy-paste
- **Backends:** Claude Code, Codex
- **Edge:** Agents call `post`, `get`, `reply`, `subscribe` and `ask` from the CLI or as MCP tools, so one agent's question reaches a teammate's agent directly. Daemons connect peer to peer (QUIC with NAT hole-punching, built on iroh) and replicate a signed, append-only team log; when there is no direct path, a relay forwards encrypted traffic it can't read. Project kanban cards can be started, reviewed and finished by agents.

### [Volt](https://github.com/LeulAria/volt)
`TypeScript` · `MIT` · Desktop IDE (VS Code core) · 🟠 experimental

Open-source agentic workspace on the VS Code core that puts agent chats, code, Git, a browser and a terminal in one window.

- **Replaces:** Cursor
- **Backends:** Claude Code and Codex agent CLIs over the Agent Client Protocol (ACP), plus local models through Ollama and tools through MCP
- **Edge:** Agent edits land as hunk-level diffs you keep or revert, with Git checkpoints and worktrees so parallel agents don't collide. Because it runs on the real VS Code core, existing extensions, themes, keybindings and debuggers keep working.


### [Sno Station](https://github.com/sno-ai/sno-station)
`TypeScript` · `Apache-2.0` · CLI + skills added to the agents you already run (no daemon) · 🟡 active

Turns Codex, Claude Code, Cursor, Hermes Agent and OpenClaw into one squad on your own computer: they share one memory, hand work to each other, and review each other's work when you ask.

- **Replaces:** Pasting context between two agent sessions when one hits its usage limit; asking an agent to review its own work
- **Backends:** Codex, Claude Code, Cursor, Hermes Agent, OpenClaw
- **Edge:** When one agent hits a rate limit mid-task, another agent picks the task up from the same memory, so nothing is pasted. A review request always goes to a different agent than the author, so the reviewer has no habit of agreeing with it. A nightly pass consolidates memory across all sessions and proposes edits to the agents' own skills, which you approve or reject in the morning.

### [DevIntern](https://github.com/getdevintern/devintern)
`TypeScript` · `FSL-1.1-ALv2 (source-available)` · CLI daemon (self-hosted worker) · 🟢 stable

One self-hosted worker that routes tracker tickets across many repositories and turns them into pull requests with the coding agent you already have.

- **Replaces:** Devin, GitHub Copilot coding agent, Factory
- **Backends:** Claude Code, Codex, Cursor, OpenCode
- **Edge:** Routing rules in one `workspace.toml` send Jira, Linear or GitHub Issues tickets to the right repo, each run in a disposable git worktree. An optional auto-review step has the agent critique and fix its own diff before the PR opens. The same daemon runs cron-scheduled prompts and Sentry-to-PR fixes, and turns review comments, failing CI and merge conflicts into follow-up commits without force-pushing.

---
## Prompt-to-App Builders

Prompt in, deployed full-stack app out.

### [bolt.diy](https://github.com/stackblitz-labs/bolt.diy)
`TypeScript` · `MIT` · 🟢 stable

Official open-source fork of Bolt.new. Prompt, run, edit, and deploy full-stack web apps in the browser — with the LLM of your choice.

- **Replaces:** Bolt.new, v0, Replit Agent
- **Backends:** OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek, xAI, Ollama, LM Studio, OpenRouter, any OpenAI-compatible endpoint
- **Edge:** Self-hostable with zero telemetry. Multi-provider switching mid-project means you can start on a cheap model and escalate only where it matters.

### [Open Design](https://github.com/nexu-io/open-design)
`TypeScript` · `Apache-2.0` · Desktop + web · 🟠 experimental

Turns the coding agent you already have into a design engine — prototypes, landing pages, dashboards, slides, images, and video, exported as HTML/PDF/PPTX/MP4.

- **Replaces:** Claude Design, Figma Make
- **Backends:** BYOK through whatever agent is on your PATH — Claude Code, Codex, Cursor, Gemini, OpenCode, Qwen, and 20+ others
- **Edge:** Ships with a large library of brand-grade design-system packages, and every render reads a `DESIGN.md` brand contract, so output is consistent instead of randomly styled. Local-first: your brand assets never leave the machine.

### [OpenUI](https://github.com/wandb/openui)
`Python + TypeScript` · `Apache-2.0` · 🟡 active

Describe a UI, watch it render live, convert it to React/Svelte/Vue.

- **Replaces:** v0.dev
- **Edge:** Live iteration loop — describe the change, see it immediately. Works with local models via Ollama.

### [Dyad](https://github.com/dyad-sh/dyad)
`TypeScript` · `Apache-2.0` · Desktop · 🟢 stable

Local, open-source AI app builder. Runs on your machine, bring your own API keys.

- **Replaces:** Lovable, v0, Bolt
- **Edge:** No vendor lock-in and no cloud round-trip for your source code.

---
