---
type: concept
title: "Training, Evals, and Ops"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/05-training-evals-and-ops/"
path: /categories/05-training-evals-and-ops/
updated: 2026-08-20
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-08-20T14:29:39.096Z"
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

---

## Evals, Testing & Guardrails

### [promptfoo](https://github.com/promptfoo/promptfoo)
`TypeScript` · `MIT` · 🟢 stable

Test and evaluate prompts, agents, and RAG systems — plus LLM red teaming and vulnerability scanning.

- **Edge:** Declarative test cases in YAML that run in CI. Side-by-side model comparison plus adversarial red-teaming in one tool. Local-first — your prompts never leave your machine.

### [agent-qa](https://github.com/vostride/agent-qa)
`TypeScript` · `FSL-1.1-ALv2` (fair-code; converts to `Apache-2.0`) · CLI, dashboard, MCP · 🟠 experimental

The self-improving QA agent for software teams, with natural-language web and mobile tests that adapt when user interfaces change.

- **Backends:** OpenAI- and Anthropic-compatible endpoints, Gemini, and local models
- **Edge:** Stores product, suite, test, and healed-step observations as versioned execution memory, then reuses that context on later runs. Ships a dashboard, CLI, MCP server, and three agent skills in one repository.

### [ClawBench](https://github.com/reacher-z/ClawBench)
`Python` · `Apache-2.0` · Docker/browser harness · 🟡 active

Evaluate web agents on 153 everyday tasks across 144 live websites, with the final submission request intercepted to keep runs side-effect-free.

- **Edge:** Captures session replay, screenshots, HTTP traffic, browser actions, and agent messages in one reproducible run, making failures diagnosable beyond a final pass/fail score.

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

### [Helicone](https://github.com/Helicone/helicone)
`TypeScript` · `Apache-2.0` · 🟢 stable

Observability platform for LLM apps — one-line proxy integration, caching, and rate limiting.

- **Edge:** Change your base URL and you have logging. Lowest-friction start of any tool in this section.

### [Mydentify AI Model Cost Calculator](https://github.com/mitdralla/mydentify-ai-model-cost-calculator)
`JavaScript` · `MIT` · Browser app · 🟠 experimental

Dependency-free browser calculator for estimating AI model API costs from request volume, input and output tokens, cached input, and fixed per-request charges.

- **Edge:** Runs locally without API keys, accounts, cookies, analytics, or server-side processing. The tested formula separates cached from uncached input and keeps provider-specific pricing assumptions visible so estimates can be reviewed before a real bill is incurred.

---
