---
type: concept
title: "Training, Evals, and Ops"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/05-training-evals-and-ops/"
path: /categories/05-training-evals-and-ops/
updated: 2026-11-12
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-11-12T10:58:58.989Z"
---
# Training, Evals, and Ops

Fine-tuning, evaluation, guardrails, observability, and LLMOps tooling.

## Fine-Tuning & Training

### [Unsloth](https://github.com/unslothai/unsloth)
`Python` · `Apache-2.0` · 🟢 stable

Fine-tune LLMs roughly 2x faster with far less VRAM, without accuracy loss.

- **Edge:** Hand-written Triton kernels and a manual backprop engine. Makes fine-tuning a mid-size model on a single free Colab GPU realistic instead of aspirational.

### [Axolotl](https://github.com/axolotl-ai-cloud/axolotl)
`Python` · `Apache-2.0` · 🟢 stable

Post-training framework configured entirely through YAML — full fine-tune, LoRA, QLoRA, DPO, ORPO, and more.

- **Edge:** One config file describes the entire run, which makes experiments reproducible and diffable in git.

### [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
`Python` · `Apache-2.0` · 🟢 stable

Unified fine-tuning for 100+ models, with a web UI.

- **Edge:** Zero-code training via LlamaBoard. The widest model coverage of any tuning toolkit.

### [PEFT](https://github.com/huggingface/peft)
`Python` · `Apache-2.0` · 🟢 stable

Hugging Face's parameter-efficient fine-tuning library — LoRA, QLoRA, adapters, prompt tuning.

- **Edge:** The reference implementation everything else builds on. Integrates directly with Transformers, Accelerate, and TRL.

### [Distilabel](https://github.com/argilla-io/distilabel)
`Python` · `Apache-2.0` · 🟢 stable

Synthetic data pipelines for SFT and preference tuning, from the Argilla team.

- **Edge:** treats dataset generation as a reproducible pipeline rather than a pile of one-off scripts, and loops through Argilla so a human can curate what the model generated. The bottleneck in fine-tuning is almost always data, not compute.

### [TRL](https://github.com/huggingface/trl)
`Python` · `Apache-2.0` · 🟢 stable

Train transformer models with reinforcement learning — SFT, DPO, GRPO, reward modeling.

- **Edge:** The standard path from a base model to an aligned, instruction-following one.

### [Fuuga](https://bitbucket.org/thorium/fuuga)
`F#` · `Unlicense` · `Library + CLI` · 🟡 active

Builds, pre-trains, fine-tunes and serves LLMs in F#/.NET on TorchSharp, with no Python.

- **Edge:** One typed .NET codebase covers the whole pipeline (BPE tokenizer, ingestion, pre-training, LoRA/QLoRA/DPO/GRPO, donor-weight import from Hugging Face safetensors and GGUF, RAG, GGUF export for llama.cpp/Ollama) on CPU or CUDA, so a .NET shop can train and run models offline without a Python stack.

---

## Evals, Testing & Guardrails

### [promptfoo](https://github.com/promptfoo/promptfoo)
`TypeScript` · `MIT` · 🟢 stable

Test and evaluate prompts, agents, and RAG systems — plus LLM red teaming and vulnerability scanning.

- **Edge:** Declarative test cases in YAML that run in CI. Side-by-side model comparison plus adversarial red-teaming in one tool. Local-first — your prompts never leave your machine.

### [Cage](https://github.com/vitalik1921/cage)
`TypeScript` · `MIT` · CLI + agent hooks · 🟡 active

Deterministic contract harness that links Markdown specs to TypeScript implementations, invariant-linked tests, and review freshness.

- **Replaces:** Manual spec-to-code and test-traceability checklists
- **Backends:** Claude Code, Codex
- **Edge:** Parses `*.cage.mdx` specs into TypeScript contract checks, tracks `@invariant`/`@covers` links, and fingerprints spec, code, test, and import material to detect stale reviews. It does not run tests or prove semantic correctness.

### [agent-qa](https://github.com/vostride/agent-qa)
`TypeScript` · `FSL-1.1-ALv2` (fair-code; converts to `Apache-2.0`) · CLI, dashboard, MCP · 🟠 experimental

The self-improving QA agent for software teams, with natural-language web and mobile tests that adapt when user interfaces change.

- **Backends:** OpenAI- and Anthropic-compatible endpoints, Gemini, and local models
- **Edge:** Stores product, suite, test, and healed-step observations as versioned execution memory, then reuses that context on later runs. Ships a dashboard, CLI, MCP server, and three agent skills in one repository.

### [ClawBench](https://github.com/reacher-z/ClawBench)
`Python` · `Apache-2.0` · Docker/browser harness · 🟡 active

Evaluate web agents on 153 everyday tasks across 144 live websites, with the final submission request intercepted to keep runs side-effect-free.

- **Edge:** Captures session replay, screenshots, HTTP traffic, browser actions, and agent messages in one reproducible run, making failures diagnosable beyond a final pass/fail score.

### [WebsiteBench](https://github.com/TIGER-AI-Lab/WebsiteBench)
`Python` · `Apache-2.0` (code) · Harbor/Docker benchmark · 🟠 experimental

Evaluate coding agents reconstructing full-stack websites through browser exploration.

- **Edge:** Uses native Harbor task directories, an explicit candidate compile/runtime contract and a separate no-network verifier; complete task artifacts follow the linked HF access process.

### [DeepEval](https://github.com/confident-ai/deepeval)
`Python` · `Apache-2.0` · 🟢 stable

"Pytest for LLMs" — unit-test LLM outputs with research-backed metrics.

- **Edge:** Feels like a normal test suite. G-Eval, faithfulness, answer relevancy, hallucination, and RAG-specific metrics run locally on the model of your choice.

### [Ragas](https://github.com/explodinggradients/ragas)
`Python` · `Apache-2.0` · 🟢 stable

Evaluation toolkit for RAG pipelines.

- **Edge:** Splits retrieval quality from generation quality, so you know which half to fix. Can synthesize a test set from your own documents.

### [Guardrails](https://github.com/guardrails-ai/guardrails)
`Python` · `Apache-2.0` · 🟢 stable

Add input/output validators to LLM applications — structure, safety, PII, and custom rules.

- **Edge:** Validators are composable and re-ask the model on failure rather than just erroring out.

### [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)
`Python` · `Apache-2.0` · 🟢 stable

Programmable rails for conversational systems, defined in the Colang modeling language.

- **Edge:** Dialogue-level control — keep a bot on topic, block jailbreaks, enforce a conversation flow.

### [Garak](https://github.com/NVIDIA/garak)
`Python` · `Apache-2.0` · 🟢 stable

LLM vulnerability scanner — probes for prompt injection, jailbreaks, data leakage, and toxicity.

- **Edge:** `nmap` for language models. Run it before you ship, not after the incident.

### [YYLO Benchmark](https://github.com/yylo-dev/yylo-benchmark)
`TypeScript` · `MIT` · CLI · 🟡 active

Thin trusted-host experiment runner for historical Ledger tasks, supplied coding prompts, and workflows — compare models, harnesses and configurations, then evaluate retained outputs with different checks or judges later.

- **Replaces:** Ad-hoc multi-model coding-agent experiment scripts
- **Backends:** Runs selected coding-agent harnesses locally; tests require no paid provider calls
- **Edge:** Reviewed cases fan out to independent attempts whose retained outputs are re-evaluated later with new checks or judges — comparison rows stay separate from judge opinions, and the runner never chooses a winner.

### [Ponder](https://github.com/Quinnod345/ponder)
`JavaScript` · `MIT` · CLI + Agent skill · 🟡 active

Zero-dependency cognitive verification CLI and agent skill that enforces an 8-stage deliberation protocol and a mathematical convergence gate before an AI agent finishes a review or code change.

- **Replaces:** Ad-hoc single-pass LLM self-review prompts and manual review checklists
- **Backends:** Claude Code, Cursor, Codex, OpenClaw, and any terminal-capable coding agent
- **Edge:** Tracks explicit work units, predictions, adversarial lens evaluations (`skeptic`, `builder`, `dreamer`, `empath`), and per-pass deltas in `.ponder/sessions/`, requiring 100% unit coverage and bounded novelty and churn before `ponder verify` exits 0. It verifies coverage and convergence of the agent's deliberation state rather than executing application test suites.

---

## Observability & LLMOps

### [Langfuse](https://github.com/langfuse/langfuse)
`TypeScript` · `MIT` (core) · 🟢 stable

Open-source LLM engineering platform — tracing, evals, prompt management, and cost tracking.

- **Replaces:** LangSmith
- **Edge:** MIT-licensed core that you can genuinely self-host. Framework-agnostic via OpenTelemetry. Nested traces make multi-agent debugging tractable, and prompt versioning decouples prompt changes from deploys.

### [Phoenix](https://github.com/Arize-ai/phoenix)
`Python + TypeScript` · `Elastic-2.0` · 🟢 stable

AI observability and evaluation, built on OpenTelemetry and OpenInference.

- **Edge:** Runs in a notebook for local debugging or as a server for production. Strong embedding-drift and retrieval-quality visualizations.

### [OpenLLMetry](https://github.com/traceloop/openllmetry)
`Python + TypeScript` · `Apache-2.0` · 🟢 stable

OpenTelemetry instrumentation for LLM applications.

- **Edge:** Standards-based — ship traces to Datadog, Honeycomb, Grafana, or whatever you already run. No new observability vendor.

### [agent-watch](https://github.com/soul-sol/agent-watch)
`POSIX shell` · `MIT` · CLI · 🟠 experimental

Monitors background Claude Code and Codex jobs as RUNNING, DONE, FAILED, or STALL from process, exit-code, and log-tail signals.

- **Edge:** Separates transport failures from credential failures before workers start by probing without credentials in the child process, then runs the optional auth probe only after reachability succeeds.

### [Helicone](https://github.com/Helicone/helicone)
`TypeScript` · `Apache-2.0` · 🟢 stable

Observability platform for LLM apps — one-line proxy integration, caching, and rate limiting.

- **Edge:** Change your base URL and you have logging. Lowest-friction start of any tool in this section.

### [Mydentify AI Model Cost Calculator](https://github.com/mitdralla/mydentify-ai-model-cost-calculator)
`JavaScript` · `MIT` · Browser app · 🟠 experimental

Dependency-free browser calculator for estimating AI model API costs from request volume, input and output tokens, cached input, and fixed per-request charges.

- **Edge:** Runs locally without API keys, accounts, cookies, analytics, or server-side processing. The tested formula separates cached from uncached input and keeps provider-specific pricing assumptions visible so estimates can be reviewed before a real bill is incurred.

### [OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay)
`TypeScript` · `Apache-2.0` · 🟢 stable

Records a coding agent's exchange with its model provider and replays the run offline with no model called.

- **Edge:** The other tools here tell you what happened; this one runs it again. Replay serves the recorded turns with no provider contacted and nothing spent, and `--from N --model M` replays a prefix then continues on a different model, so the model is the only variable. Captures at the HTTP boundary rather than through instrumentation — aider, OpenHands and goose from the sections above are covered, along with Claude Code and the Vercel AI SDK. The trace format is specified separately under CC BY 4.0, so a recording outlives the CLI.

---
