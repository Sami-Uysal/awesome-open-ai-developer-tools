---
type: concept
title: "Training, Evals, and Ops"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/05-training-evals-and-ops/"
path: /categories/05-training-evals-and-ops/
updated: 2026-07-29
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-29T08:07:53.180Z"
---
# Training, Evals, and Ops

Fine-tuning, evaluation, guardrails, observability, and LLMOps tooling.

## Fine-Tuning & Training
### [Unsloth](https://github.com/unslothai/unsloth)
`Python` · `Apache-2.0`

Fine-tune LLMs roughly 2x faster with far less VRAM, without accuracy loss.

- **Edge:** Hand-written Triton kernels and a manual backprop engine. Makes fine-tuning a mid-size model on a single free Colab GPU realistic instead of aspirational.

### [Axolotl](https://github.com/axolotl-ai-cloud/axolotl)
`Python` · `Apache-2.0`

Post-training framework configured entirely through YAML — full fine-tune, LoRA, QLoRA, DPO, ORPO, and more.

- **Edge:** One config file describes the entire run, which makes experiments reproducible and diffable in git.

### [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
`Python` · `Apache-2.0`

Unified fine-tuning for 100+ models, with a web UI.

- **Edge:** Zero-code training via LlamaBoard. The widest model coverage of any tuning toolkit.

### [PEFT](https://github.com/huggingface/peft)
`Python` · `Apache-2.0`

Hugging Face's parameter-efficient fine-tuning library — LoRA, QLoRA, adapters, prompt tuning.

- **Edge:** The reference implementation everything else builds on. Integrates directly with Transformers, Accelerate, and TRL.

### [Distilabel](https://github.com/argilla-io/distilabel)
`Python` · `Apache-2.0`

Synthetic data pipelines for SFT and preference tuning, from the Argilla team.

- **Edge:** treats dataset generation as a reproducible pipeline rather than a pile of one-off scripts, and loops through Argilla so a human can curate what the model generated. The bottleneck in fine-tuning is almost always data, not compute.

### [TRL](https://github.com/huggingface/trl)
`Python` · `Apache-2.0`

Train transformer models with reinforcement learning — SFT, DPO, GRPO, reward modeling.

- **Edge:** The standard path from a base model to an aligned, instruction-following one.

---

## Evals, Testing & Guardrails
### [promptfoo](https://github.com/promptfoo/promptfoo)
`TypeScript` · `MIT`

Test and evaluate prompts, agents, and RAG systems — plus LLM red teaming and vulnerability scanning.

- **Edge:** Declarative test cases in YAML that run in CI. Side-by-side model comparison plus adversarial red-teaming in one tool. Local-first — your prompts never leave your machine.

### [DeepEval](https://github.com/confident-ai/deepeval)
`Python` · `Apache-2.0`

"Pytest for LLMs" — unit-test LLM outputs with research-backed metrics.

- **Edge:** Feels like a normal test suite. G-Eval, faithfulness, answer relevancy, hallucination, and RAG-specific metrics run locally on the model of your choice.

### [Ragas](https://github.com/explodinggradients/ragas)
`Python` · `Apache-2.0`

Evaluation toolkit for RAG pipelines.

- **Edge:** Splits retrieval quality from generation quality, so you know which half to fix. Can synthesize a test set from your own documents.

### [Guardrails](https://github.com/guardrails-ai/guardrails)
`Python` · `Apache-2.0`

Add input/output validators to LLM applications — structure, safety, PII, and custom rules.

- **Edge:** Validators are composable and re-ask the model on failure rather than just erroring out.

### [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)
`Python` · `Apache-2.0`

Programmable rails for conversational systems, defined in the Colang modeling language.

- **Edge:** Dialogue-level control — keep a bot on topic, block jailbreaks, enforce a conversation flow.

### [Garak](https://github.com/NVIDIA/garak)
`Python` · `Apache-2.0`

LLM vulnerability scanner — probes for prompt injection, jailbreaks, data leakage, and toxicity.

- **Edge:** `nmap` for language models. Run it before you ship, not after the incident.

---

## Observability & LLMOps
### [Langfuse](https://github.com/langfuse/langfuse)
`TypeScript` · `MIT` (core)

Open-source LLM engineering platform — tracing, evals, prompt management, and cost tracking.

- **Replaces:** LangSmith
- **Edge:** MIT-licensed core that you can genuinely self-host. Framework-agnostic via OpenTelemetry. Nested traces make multi-agent debugging tractable, and prompt versioning decouples prompt changes from deploys.

### [Phoenix](https://github.com/Arize-ai/phoenix)
`Python + TypeScript` · `Elastic-2.0`

AI observability and evaluation, built on OpenTelemetry and OpenInference.

- **Edge:** Runs in a notebook for local debugging or as a server for production. Strong embedding-drift and retrieval-quality visualizations.

### [OpenLLMetry](https://github.com/traceloop/openllmetry)
`Python + TypeScript` · `Apache-2.0`

OpenTelemetry instrumentation for LLM applications.

- **Edge:** Standards-based — ship traces to Datadog, Honeycomb, Grafana, or whatever you already run. No new observability vendor.

### [Helicone](https://github.com/Helicone/helicone)
`TypeScript` · `Apache-2.0`

Observability platform for LLM apps — one-line proxy integration, caching, and rate limiting.

- **Edge:** Change your base URL and you have logging. Lowest-friction start of any tool in this section.

---
