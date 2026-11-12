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

### [Tale](https://github.com/tale-project/tale)
`TypeScript` · `MIT` · Web app · 🟡 active

Self-hostable project workspace for people and AI agents to delegate tasks and review reports and delivered files together.

- **Replaces:** Hosted agent workspaces for team task delegation and review
- **Backends:** Supported coding runtimes including Claude Code, Codex, and OpenCode, with separately configured compatible provider credentials
- **Edge:** Each project agent reuses a persistent sandbox workspace across tasks, while task attachments and collected deliverables stay attached to the work. Task context and acceptance criteria guide execution, and completed work goes to a designated reviewer.

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

### [kgai](https://github.com/kgaidev/kgai)
`Go` · `MIT` · Claude Code plugin + CLI · 🟡 active

Local-first shared decision memory for engineering teams using Claude Code. An append-only log of architectural decisions and the alternatives that were rejected, projected into a knowledge graph the agent queries before it makes a change.

- **Edge:** The log is append-only and decisions are superseded, never edited or deleted, so a rejected approach stays in history with the reason it died. Teams sync the store over an S3 bucket they own, with no central server and no daemon. Capture rules live in a committed, per-repo config you approve before it runs.
### [Mnemoverse](https://github.com/mnemoverse/mcp-memory-server)
`TypeScript + Python` · `MIT` (client) · 🟢 stable

Hosted memory reached over MCP: one key gives Claude Code, Cursor, VS Code and ChatGPT the same store, so what an agent learns in one is there in the next.

- **Edge:** Recall ranking moves with outcomes, not similarity alone. A memory that helped is promoted, one that misled is demoted, so ranking is a function of consequences.

### [Khoj](https://github.com/khoj-ai/khoj)
`Python` · `AGPL-3.0` · 🟢 stable

Self-hosted personal AI that searches your notes, documents, and the web; reachable from browser, Obsidian, and Emacs.

- **Replaces:** ChatGPT with memory, Notion AI
- **Edge:** Indexes *your* corpus locally. Runs fully offline with local models.

### [5dive](https://github.com/5dive-ai/5dive)
`Shell` · `MIT` · Self-hosted / CLI · 🟡 active

Runs a team of AI agents on a server you own; you message them like coworkers on Telegram or Discord.

- **Replaces:** Devin, Lindy
- **Backends:** Claude Code, Codex and other official agent CLIs with your own subscription or API key, any model through OpenRouter, or a local server (vLLM, llama.cpp, an Ollama shim)
- **Edge:** No framework or broker: the orchestrator is bash, and each agent is a Linux user running a systemd service with SQLite for state and journald for logs, so a single-agent setup fits on a 1 GB VM. Agents hand each other work through an org chart and a shared backlog.

### [aiFetchly](https://github.com/robertzengcn/aiFetchly)
`TypeScript` · `Apache-2.0` · Desktop app · 🟡 active

Open-source desktop AI agent for business automation — lead generation, knowledge library RAG, outreach, and scheduled workflows. Runs on Windows, macOS, Linux.

- **Replaces:** Cloud-hosted business automation and lead-generation agents
- **Edge:** Local-first: SQLite + sqlite-vec storage, permission-gated tools, skills/plugins/MCP servers. Cron scheduling, subagents, Puppeteer browser automation for lead-gen/outreach loops.

### [kwant](https://github.com/alexsergivan/kwant)
`Rust` · `AGPL-3.0` · Self-hosted binary, Mac app, Linux .deb/AppImage · 🟡 active

Self-hosted team of AI bots in one binary that share chats, hand work to each other with an @mention, and run routines on a schedule.

- **Replaces:** Hosted agent teams such as Grok Bot, Claude Duet and OpenAI dots
- **Backends:** Claude, Codex and Grok CLI logins; Anthropic, OpenAI and xAI keys; any OpenAI- or Anthropic-compatible server, including local models
- **Edge:** Spaces keep separate bots, accounts, routines and approval rules for work and home, and when one account runs out of usage the turn moves to the next one. Risky steps such as `git push` or network calls show an approval card with the exact command. One Rust binary with SQLite and the web app embedded, no telemetry.

---

### [OpenAmer](https://github.com/openamer/openamer)
`Python` · `Apache-2.0` · 🟡 active

Windows-native agent runtime that operates the real desktop (filesystem, terminal, GUI, browser over the Chrome DevTools Protocol) and runs entirely locally, with persistent memory, reusable skills, and a self-improvement loop.

- **Replaces:** Operator-style cloud computer-use, Claude Desktop
- **Backends:** Any OpenAI-compatible API, Ollama, local models
- **Edge:** Cognition tools (`think`/`learn`/`remember`/`trigger`/`heartbeat`) run in-process rather than as subprocess hops; a single 10-subsystem heartbeat replaces a pile of individual cron jobs; instances route work to each other peer-to-peer over an A2A mesh, with every action recorded in an outcome ledger so claims are checkable.


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

### [Jet Browser](https://github.com/masakaai/jet-browser)
`JavaScript + Rust` · `Apache-2.0` · Self-hosted runtime · 🟡 active

Gives repository-aware coding agents one isolated WPE WebKit session for deterministic browser verification.

- **Replaces:** Browserbase when the requirement is a self-hosted, single-session verification runtime rather than a managed browser service.
- **Edge:** uses WPE WebKit instead of Chromium/CDP and keeps one ordered JSONL command loop alive across native pointer and keyboard input, DOM checks, and PNG capture. The standalone smoke flow can run against an offline fixture with container networking disabled, and the repository publishes its benchmark method, raw samples, and limitations.

### [Skyvern](https://github.com/Skyvern-AI/skyvern)
`Python` · `AGPL-3.0` · Library + server · 🟢 stable

Browser automation driven by computer vision instead of DOM selectors.

- **Replaces:** Stagehand, brittle Playwright scraping suites
- **Edge:** because it navigates visually, a site redesign doesn't break your selectors — the usual reason scraping pipelines rot. **Check the license:** AGPL-3.0, and the anti-bot pieces are held back for the paid cloud. That combination rules it out for some commercial use.

### [Open Interpreter](https://github.com/openinterpreter/openinterpreter)
`Python` · `MIT` · CLI + Desktop · 🟢 stable

Lets Language Models run code locally on your computer to edit videos, analyze data, and control browsers.

- **Replaces:** OpenAI Code Interpreter (Advanced Data Analysis)
- **Backends:** Local models (Ollama, LM Studio) or hosted APIs (OpenAI, Anthropic)
- **Edge:** Runs directly in your local terminal environment with full access to system utilities, internet, and python packages without cloud execution limits.

### [Superagent](https://github.com/pungme/superagent-desktop)
`TypeScript + Swift` · `MIT` · Desktop app · 🟡 active

macOS desktop app that gives Claude Code and Codex a real browser to drive, an iOS Simulator to install and screenshot apps in, and a phone companion app for remote monitoring.

- **Replaces:** cloud sandbox services for agents that specifically need a real, controllable macOS browser/iOS Simulator rather than a headless container
- **Backends:** Claude Code, Codex
- **Edge:** unlike headless sandboxes, the browser and Simulator are visible and drivable on the user's own Mac, so the agent can screenshot real rendered UI and iOS app behavior instead of a DOM approximation.

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

### [System One API](https://github.com/ziyu/system-one-sdk)
`TypeScript` · `OSS` · 🟡 early (≈2 GitHub stars as of 2026-10)

Multi-provider API and TypeScript SDK (`@system-one-ai/core`) for building AI agents and LLM workflows with swappable model backends.

- **Docs:** https://system-one.dev/en/api
- **Edge:** Provider-swappable agent/LLM API surface without locking to a single vendor. Early-stage — stars≈2; listing for discoverability, not as a mature peer of LangGraph/CrewAI yet.


---

## Agent Skills & Package Management

Tools for publishing, versioning, discovering, and installing reusable instructions and configuration across AI coding assistants.

### [AIPM](https://github.com/abhisri2090/aipm)
`TypeScript` · `Apache-2.0` · CLI + registry · 🟡 active

Package manager and public registry for reusable AI skills, prompts, rules, MCP setup, and tool files.

- **Edge:** One versioned package can target Codex, Claude Code, and Cursor through adapters, while the lockfile records exact installed versions for repeatable team setup.

### [drevon](https://github.com/csakash/drevon)
`TypeScript` · `MIT` · CLI · 🟡 active

`npx drevon init` turns any directory into an AI workspace with one shared config, persistent cross-session memory, prompts and skills.

- **Backends:** Claude Code, Codex, Copilot, Cursor, Windsurf, Cline, Aider and Continue
- **Edge:** One shared config plus persistent cross-session memory, prompts and skills serve all of these assistants from a single directory, instead of maintaining each tool's setup separately.

### [aident-skill](https://github.com/Aident-AI/aident-skill)
`Shell` · `MIT` · Agent skill + CLI · 🟡 active

Installable agent skill and CLI (`@aident-ai/cli`) that teach coding agents to use [Aident Loadout](https://aident.ai) for connected work apps and 400+ ready-made Skills. The skill and CLI are MIT; the Loadout service they call is proprietary (freemium, pay-as-you-go).

- **Replaces:** Manual MCP credentials configuration, fragmented per-agent tool setups
- **Backends:** Codex, Claude Code, Cursor, OpenCode, OpenClaw and other MCP clients
- **Edge:** One CLI command installs a single canonical skill copy and repairs every detected filesystem-backed agent host, so all assistants on a machine share the same connected accounts. Credentials stay in a vault (agents receive results, not raw keys), and every action call lands in an audit log.

### [Archcore](https://github.com/archcore-ai/archcore)
`Go` · `Apache-2.0` · CLI + MCP server + agent plugin · 🟡 active

Git-native context engineering and spec-driven development for AI coding agents.

- **Replaces:** Manual prompt engineering, scattered context docs, unversioned rule files
- **Backends:** Claude Code, Codex, Cursor and GitHub Copilot
- **Edge:** The CLI keeps specs, architecture decisions, rules, plans, and project knowledge in `.archcore/`, versioned with your code, and serves the relevant context to coding agents through MCP and integrations.

### [looot-skills](https://github.com/loootai/looot-skills)
`Shell` · `MIT` · Agent skills · 🟡 active

Agent skills (SKILL.md) that teach coding agents to run looot data jobs such as work email lookup, company enrichment, Google SERP and web page to markdown. The skills are MIT; the looot service they call is proprietary and prepaid, with no free tier.

- **Replaces:** Per-vendor API integrations and a separate key for each data provider
- **Backends:** Claude Code, Codex, Cursor and other MCP clients
- **Edge:** One API key and one prepaid balance cover 300+ data providers. The agent sees the price before each run, and a failed call costs $0.

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

### [Kilobat CLI](https://github.com/seifip/kilobat-cli)
`Swift` · `GPL-3.0-only` · macOS CLI / TUI / MCP · 🟠 experimental

Network diagnostics and per-app traffic monitoring for a Mac, with JSON output and a local stdio MCP server for coding agents.

- **Edge:** `kilobat why <host> --json` separates network, proxy, DNS, IP and server checks before an agent starts changing application code. The same native executable serves MCP tools with `kilobat mcp`, without a separate Node or Python server.
- **Known limits:** macOS 14+ only; Homebrew builds from source and requires Xcode 16+. Wi-Fi names need the companion's Location permission, and traffic history needs recorded data. Network blocking requires the separately proprietary desktop app; diagnostics contact the targets being checked.

### [Mac Developer Bridge](https://github.com/alexanderradahl/mac-developer-bridge)
`JavaScript` · `MIT` · macOS / MCP · 🟠 experimental

Local MCP bridge that lets an existing ChatGPT conversation operate the Mac where the developer is already working: shell, unrestricted files, real PTY sessions, background jobs, and read-only Codex history.

- **Edge:** ChatGPT stays the reasoning layer and the bridge makes no model calls. Unlike a narrow filesystem or shell MCP, it is deliberately built for developer-machine parity and real interactive terminals. **Security tradeoff:** it is intentionally not sandboxed and runs with the macOS user's effective permissions, so it is only appropriate when that level of machine access is explicitly wanted.

### [Oh My Android](https://github.com/ateymoori/oh-my-android)
`Swift` · `MIT` · macOS app / MCP · 🟡 active

Native macOS control panel for the Android Emulator and adb devices, with a built-in stdio MCP server that lets coding agents see and drive the device.

- **Edge:** `screenshot` is scaled to 1 px = 1 dp and `get_ui` returns a compact UI tree with refs (about 10× smaller than raw `uiautomator` XML), so positions match layout code and the agent can tap by ref. The same 18 tools switch dark mode, font scale, locale/RTL, TalkBack and network, and read logcat, SharedPreferences and SQLite, on emulators and USB or Wi-Fi phones; the server is one native binary with no runtime dependencies and no network access. **Known limit:** macOS 26+ on Apple silicon only.

### [Screenpipe](https://github.com/screenpipe/screenpipe)
`Rust + TypeScript` · `Screenpipe Commercial License` (source-available, not OSI) · Desktop + MCP + local API · 🟡 active

Captures screen text and audio history so agents can retrieve context from past debugging sessions, documentation, and meetings.

- **Edge:** Searches captured activity across apps with time and app filters, rather than relying on manually pasted context. MCP requires a running Screenpipe recorder and local API key; desktop Settings > Connections configures the connection. Raw history stays local by default, while configured cloud AI, transcription, sync, and integrations can send context off-device.

### [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
`TypeScript` · `MIT` · 🟡 active

Official developer tool for testing and debugging MCP servers.

- **Edge:** shows you the actual protocol traffic — tool calls, resources, errors — instead of leaving you guessing why a client won't load your server. First thing to reach for when an MCP integration silently does nothing.

### [FastMCP](https://github.com/jlowin/fastmcp)
`Python` · `Apache-2.0` · 🟡 active

The ergonomic way to build MCP servers and clients — decorator-based, like FastAPI.

- **Edge:** A working server in ~10 lines. Handles auth, deployment, proxying, and server composition.

### [SandBase CLI](https://github.com/sandbaseai/cli)
`TypeScript` · `Apache-2.0` · CLI + local MCP · 🟡 active

Open-source AI CLI and local MCP server that connects coding clients—Claude Code, Cursor, Codex, ChatGPT, Hermes, OpenClaw, and more—to 2,000+ models and APIs, with OAuth and config rollback.

- **Replaces:** per-client provider wiring and one-off OpenAI-compatible proxies when you need MCP-native setup across many coding agents
- **Backends:** 2,000+ models/APIs through SandBase routing
- **Edge:** One local MCP/CLI configures ~25 clients against a shared model catalog; OAuth plus rollback lets you switch providers without hand-editing each client's config.

### [octocode](https://github.com/Muvon/octocode)
`Rust` · `Apache-2.0` · 🟠 experimental

Local semantic code index with an MCP server on top — search and navigate a codebase by meaning, not grep.

- **Replaces:** the codebase indexing inside Cursor or Sourcegraph Cody
- **Backends:** local embeddings via fastembed, or a hosted provider if you'd rather offload it
- **Edge:** runs entirely locally, and embeddings are your choice. **Known weakness:** first index on a large repo is slow, and semantic search is genuinely bad at structural questions — "find every implementation of this trait" wants a structural index, not embeddings, so you need separate structural tools and have to know which kind of question you're asking before you search. Early-stage; treat it accordingly.


### [ContextStream](https://github.com/contextstream/mcp-server)
`Rust` · `MIT` · MCP · 🟡 active

Shared project context and semantic code search over MCP for AI coding agents.

- **Replaces:** single-editor indexes and lost per-session context
- **Backends:** local OSS server (`@contextstream/mcp-server`) or hosted remote MCP (`https://mcp.contextstream.io/mcp`)
- **Edge:** shared project context across MCP clients not locked to one editor

### [mcpreflight](https://github.com/xka0085-byte/mcpreflight)
`JavaScript` · `MIT` · CLI · 🟠 experimental

Read-only preflight inspector and linter for MCP tool schemas and x402 HTTP payment-required endpoints with GitHub Actions CI support.

- **Replaces:** Manual curl inspection, ad-hoc JSON schema validation for MCP endpoints
- **Edge:** Runs zero-dependency preflight checks without credentials, verifying discovery manifests (`/.well-known/mcp/server.json`) and SHA-256 body digests before clients or payment buyers connect.

### [Folio Wiki](https://github.com/evergreen-it-dev/folio)
`TypeScript` · `MIT` · Self-hosted / Docker + MCP · 🟡 active

Team wiki whose pages are Markdown files in a Git repository, with a built-in MCP server that lets coding agents search, read and edit pages, data tables and whiteboards.

- **Replaces:** Confluence and Notion as the place where an agent finds team conventions, runbooks and decisions
- **Edge:** The MCP server ships inside the app (Streamable HTTP, OAuth 2.1 or a personal access token) and acts with the signed-in user's rights. Agent edits land in Git history under that user's name, so they can be reviewed and reverted like any commit.

### [sqlite-graph-memory](https://github.com/tonydzi/sqlite-graph-memory)
`Python` · `MIT` · MCP server + CLI · 🟡 active

Persistent memory for MCP clients over any folder of markdown notes, Obsidian vaults included, stored in one local SQLite file.

- **Replaces:** Hosted agent-memory services, when the memory should stay in your own notes
- **Edge:** Vector search finds the entry points, then the `[[wikilinks]]` already in the notes act as the graph, so no graph database or ETL pass is needed. In the project's 202-note bench vault, a note the vector pass misses in its top 12 comes in second through one graph hop.

### [BrewPage MCP](https://github.com/kochetkov-ma/brewpage-openapi)
`TypeScript` · `MIT` · MCP server (stdio + remote) · 🟡 active

MCP server that lets an agent publish HTML pages, Markdown, multi-file static sites, files, JSON documents and key-value entries and get back a shareable HTTPS link. Source-available note: the server is MIT, the hosting service it talks to (brewpage.app) is proprietary and free.

- **Replaces:** Pasting agent output into a Gist, pastebin or a manual Netlify Drop upload when a human needs to open it in a browser
- **Edge:** 20 tools cover publish, update, read and delete per resource type with an owner token, so an agent can hand over a rendered report as a link without an account or API key. The same tools are served as a remote Streamable HTTP endpoint at `https://brewpage.app/mcp`. **Known limits:** publications expire (default 15 days, up to 30, 90 with a free profile) and size caps apply (5 MB per page or file, 20 MB per site).

---
