---
type: concept
title: "AI IDEs and CLI"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/01-ai-ides-and-cli/"
path: /categories/01-ai-ides-and-cli/
updated: 2026-08-13
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-08-13T10:24:44.918Z"
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
- **Edge:** Orkas runs the orchestration layer on the user's machine: conversations, files, agent configuration, and model keys stay local, while the Commander can dispatch Claude Code, Codex, OpenCode, and Cline as local subprocesses alongside built-in agents.

### [ordewell](https://github.com/ordewell/ordewell)
`Rust` · `Apache-2.0` · CLI / TUI · 🟡 active

Plan-first CLI/TUI orchestrator that converts a single goal into an ordered, editable plan of coding-agent tasks.

- **Replaces:** Manual task decomposition and multi-agent CLI scripting
- **Backends:** Claude Code, Codex, OpenCode
- **Edge:** Features a read-only planner that generates explicit step-by-step agent plans before execution, with per-task runner, model, and mode assignment.

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
