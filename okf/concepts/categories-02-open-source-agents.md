---
type: concept
title: "Open-Source Agents"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/02-open-source-agents/"
path: /categories/02-open-source-agents/
updated: 2026-07-31
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-31T06:53:04.911Z"
---
# Open-Source Agents

Autonomous agents, browser control, sandboxes, orchestration frameworks, and MCP tooling.

## Autonomous & Persistent Agents

Long-running agents with memory, goals, and self-direction.

### [OpenClaw](https://github.com/openclaw/openclaw)
`TypeScript` · `MIT` · 🟡 active

Self-hosted personal AI assistant that runs on any OS and reaches you on any platform. One of the fastest-growing open-source projects ever.

- **Replaces:** ChatGPT desktop, Claude Desktop, Microsoft Copilot
- **Backends:** Any OpenAI-compatible API, Ollama, LocalAI
- **Edge:** Gateways into Telegram, Discord, Slack, WhatsApp, Signal, email, and CLI, so the agent reaches you where you already are — and can proactively message *you*. Large skill/plugin ecosystem. **Security note:** it holds credentials for your messaging accounts and runs autonomously; sandbox it and read the permission model before pointing it at anything sensitive.

### [Hivekeep](https://github.com/MarlBurroW/hivekeep)
`TypeScript` · `MIT` · 🟡 active

Self-hosted platform to run a *team* of specialized AI agents that collaborate, keep persistent memory, and build their own tools, mini-apps, and plugins.

- **Replaces:** ChatGPT Team, Claude Desktop, hosted agent platforms
- **Backends:** Any OpenAI-compatible API, Ollama
- **Edge:** Multiple agents delegate to each other and share memory across months; a built-in web UI plus Telegram, Slack, Discord, and Matrix channels. Ships as a single container (Bun + SQLite), so the whole platform runs on modest hardware.

### [Hermes Agent](https://github.com/NousResearch/hermes-agent)
`Python` · `MIT` · 🟡 active

Nous Research's self-improving agent — persistent memory, reusable skills, cron jobs, and 20+ messaging surfaces.

- **Replaces:** OpenAI Operator, Claude Desktop
- **Edge:** Closed learning loop: it creates skills from experience, refines them in use, and persists memory and session history in SQLite across restarts. Runs on a cheap VPS or serverless with no idle cost.

### [DeerFlow](https://github.com/bytedance/deer-flow)
`Python` · `MIT` · 🟡 active

ByteDance's long-horizon "SuperAgent" harness — sandboxes, memory, skills, subagents, and a message gateway for tasks that run for minutes to hours.

- **Edge:** Built on LangGraph, but ships the whole runtime an agent actually needs (filesystem, memory, sandboxed execution, subagent spawning) instead of leaving you to assemble it. Hit #1 on GitHub Trending on the 2.0 release.

### [Open-Sable](https://github.com/IdeoaLabs/Open-Sable)
`Python` · Local-first agent framework · 🟡 active

Autonomous agent with AGI-inspired cognitive subsystems — goals, working/episodic/long-term memory, metacognition, and tool use.

- **Edge:** Ollama-first with cloud fallback and a low-VRAM mode, so it genuinely runs on your own hardware. Memory decay and consolidation plus a watchdog/hot-reload supervisor make 24/7 operation realistic rather than aspirational.

### [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
`Python + TypeScript` · MIT (classic agent) / Polyform Shield (platform) · 🟢 stable

The project that started the autonomous-agent wave, now a low-code platform for building and running continuous agents.

- **Edge:** Visual block-based builder plus a library of pre-built agents. Note the license split — the classic agent is MIT, the newer platform is source-available, not OSI.

### [Letta](https://github.com/letta-ai/letta) (formerly MemGPT)
`Python` · `Apache-2.0` · 🟢 stable

Stateful agents with real long-term memory — the agent manages its own context window, paging memories in and out.

- **Replaces:** OpenAI Assistants API
- **Edge:** Memory is a first-class primitive backed by a database, not a vector-search bolt-on. Agents persist across sessions and are portable between models.

### [Mem0](https://github.com/mem0ai/mem0)
`Python + TypeScript` · `Apache-2.0` · 🟢 stable

Memory layer you drop into any agent — extracts, stores, and retrieves facts about users across sessions.

- **Edge:** Framework-agnostic. Hybrid vector + graph store beats naively stuffing the chat log into a vector DB.

### [Khoj](https://github.com/khoj-ai/khoj)
`Python` · `AGPL-3.0` · 🟢 stable

Self-hosted personal AI that searches your notes, documents, and the web; reachable from browser, Obsidian, and Emacs.

- **Replaces:** ChatGPT with memory, Notion AI
- **Edge:** Indexes *your* corpus locally. Runs fully offline with local models.

---

## Agent Sandboxes & Browser Control

Where agent-generated code actually runs, and how agents touch the web.

### [E2B](https://github.com/e2b-dev/E2B)
`TypeScript + Go` · `Apache-2.0` · SDK + self-hostable infra · 🟢 stable

Secure cloud sandboxes for running AI-generated code, built on Firecracker microVMs.

- **Replaces:** proprietary code-interpreter backends
- **Edge:** microVM isolation gives each sandbox its own kernel — a genuine security boundary, not just a container namespace. That distinction matters the moment you execute code a model wrote. Python and JS SDKs, plus [e2b-dev/infra](https://github.com/e2b-dev/infra) if you need to run the whole platform yourself.

### [Daytona](https://github.com/daytonaio/daytona)
`Go + TypeScript` · `Apache-2.0` · Server + SDK · 🟠 experimental

Sandbox runtime for AI agents with fast warm-pool starts and filesystems that persist across sessions.

- **Replaces:** E2B (when you need persistence over isolation strength)
- **Edge:** sandboxes can pause, resume, and outlive a single session, which is what long-horizon agents actually need. Container-based rather than microVM, so treat the isolation as weaker than E2B's — fine for your own code, think twice for genuinely untrusted input.

### [browser-use](https://github.com/browser-use/browser-use)
`Python` · `MIT` · Library · 🟡 active

Connects an LLM to a real browser so it can navigate, fill forms, and extract data.

- **Replaces:** Stagehand, MultiOn
- **Edge:** the most widely used open browser agent, with multi-tab handling and vision fallback when the DOM isn't enough. **Known weakness:** non-deterministic — the same goal takes different paths on different runs, which makes failures hard to reproduce, and vision calls on complex pages get expensive. Budget for retries and cap your spend.

### [Skyvern](https://github.com/Skyvern-AI/skyvern)
`Python` · `AGPL-3.0` · Library + server · 🟢 stable

Browser automation driven by computer vision instead of DOM selectors.

- **Replaces:** Stagehand, brittle Playwright scraping suites
- **Edge:** because it navigates visually, a site redesign doesn't break your selectors — the usual reason scraping pipelines rot. **Check the license:** AGPL-3.0, and the anti-bot pieces are held back for the paid cloud. That combination rules it out for some commercial use.

---

## Agent Frameworks & Orchestration

Libraries for building multi-agent and tool-using systems.

### [LangGraph](https://github.com/langchain-ai/langgraph)
`Python + JS` · `MIT` · 🟢 stable

Build agents as stateful graphs — nodes, edges, and explicit control flow, with checkpointing and human-in-the-loop interrupts.

- **Edge:** Durable execution: an agent can pause for hours awaiting human approval and resume with full state. The right choice when you need a *reliable* agent, not a demo.

### [CrewAI](https://github.com/crewAIInc/crewAI)
`Python` · `MIT` · 🟢 stable

Role-playing autonomous agents that collaborate — a "crew" with defined roles, goals, and tasks.

- **Replaces:** AutoGen, OpenAI Swarm
- **Edge:** Independent of LangChain, lean runtime. The role/task abstraction is the most intuitive on-ramp to multi-agent design. Flows give you event-driven control when crews are too loose.

### [AutoGen](https://github.com/microsoft/autogen)
`Python + .NET` · `MIT` · 🟢 stable

Microsoft's framework for multi-agent conversation — agents talk to each other, execute code, and involve humans.

- **Edge:** Async event-driven core with a distributed runtime and cross-language support. AutoGen Studio gives a no-code prototyping UI.

### [smolagents](https://github.com/huggingface/smolagents)
`Python` · `Apache-2.0` · 🟢 stable

Hugging Face's minimal agent library — the core logic is about a thousand lines.

- **Edge:** The fastest path to a working single-agent loop. Code agents write Python actions instead of emitting JSON tool calls, which is measurably more reliable for multi-step tasks. Read it end-to-end in an afternoon.

### [Google ADK](https://github.com/google/adk-python)
`Python + Java` · `Apache-2.0` · 🟢 stable

Code-first toolkit for building, evaluating, and deploying multi-agent systems.

- **Edge:** Model-agnostic and deployment-agnostic despite the Google name. Built-in evaluation and a local dev UI close the "how do I know my agent got worse?" gap that most frameworks ignore.

### [Pydantic AI](https://github.com/pydantic/pydantic-ai)
`Python` · `MIT` · 🟢 stable

Agent framework from the Pydantic team — type-safe, structured outputs, dependency injection.

- **Edge:** If you already trust Pydantic for validation, this brings the same rigor to LLM I/O. Feels like FastAPI for agents.

### [DSPy](https://github.com/stanfordnlp/dspy)
`Python` · `MIT` · 🟢 stable

Program LLMs instead of prompting them — declare modules and let optimizers compile the prompts.

- **Edge:** Replaces manual prompt-tweaking with systematic optimization against a metric. Swap the model, recompile, keep the quality.

### [LiteLLM](https://github.com/BerriAI/litellm)
`Python` · `MIT` · 🟢 stable

One OpenAI-compatible interface for 100+ LLM providers, plus a proxy with keys, budgets, rate limits, and fallbacks.

- **Replaces:** OpenRouter (hosted)
- **Edge:** The single most useful piece of plumbing in the stack. Provider outage → automatic fallback. Per-team budgets and spend tracking come free.

### [Haystack](https://github.com/deepset-ai/haystack)
`Python` · `Apache-2.0` · 🟢 stable

Production-oriented framework for composable RAG and agent pipelines.

- **Edge:** Explicit, inspectable pipeline graphs. Strong retriever/ranker ecosystem — favored when search quality is the hard part.

---

## Model Context Protocol (MCP)

The emerging standard for connecting models to tools and data.

### [MCP Specification](https://github.com/modelcontextprotocol/modelcontextprotocol)
`MIT` · 🟢 stable

The protocol itself — open standard for exposing tools, resources, and prompts to any LLM client.

- **Edge:** Write an integration once; every MCP-capable client (Claude Code, OpenCode, Cline, Continue, and more) can use it.

### [MCP Servers](https://github.com/modelcontextprotocol/servers)
`MIT` · 🟡 active

Reference implementations — filesystem, git, fetch, memory, and dozens of community servers.

- **Edge:** The fastest way to learn the protocol is to read a 200-line server that already works.

### [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
`TypeScript` · `MIT` · 🟡 active

Official developer tool for testing and debugging MCP servers.

- **Edge:** shows you the actual protocol traffic — tool calls, resources, errors — instead of leaving you guessing why a client won't load your server. First thing to reach for when an MCP integration silently does nothing.

### [FastMCP](https://github.com/jlowin/fastmcp)
`Python` · `Apache-2.0` · 🟡 active

The ergonomic way to build MCP servers and clients — decorator-based, like FastAPI.

- **Edge:** A working server in ~10 lines. Handles auth, deployment, proxying, and server composition.

### [octocode](https://github.com/Muvon/octocode)
`Rust` · `Apache-2.0` · 🟠 experimental

Local semantic code index with an MCP server on top — search and navigate a codebase by meaning, not grep.

- **Replaces:** the codebase indexing inside Cursor or Sourcegraph Cody
- **Backends:** local embeddings via fastembed, or a hosted provider if you'd rather offload it
- **Edge:** runs entirely locally, and embeddings are your choice. **Known weakness:** first index on a large repo is slow, and semantic search is genuinely bad at structural questions — "find every implementation of this trait" wants a structural index, not embeddings, so you need separate structural tools and have to know which kind of question you're asking before you search. Early-stage; treat it accordingly.

---
