---
type: concept
title: "Local LLM Inference"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/03-local-llm-inference/"
path: /categories/03-local-llm-inference/
updated: 2026-08-09
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-08-09T08:33:30.564Z"
---
# Local LLM Inference

Local inference engines, model gateways, and open-source chat frontends.

## Local Inference Engines

Run models on your own hardware.

### [Ollama](https://github.com/ollama/ollama)
`Go` · `MIT` · 🟢 stable

Download and run open models with one command. The default entry point to local LLMs.

- **Replaces:** OpenAI API (for local workloads)
- **Edge:** `ollama run <model>` and you're done — it handles fetching, quantization, GPU offload, and serving an OpenAI-compatible API. The largest model library and the widest tool support of any local runtime.

### [llama.cpp](https://github.com/ggml-org/llama.cpp)
`C/C++` · `MIT` · 🟢 stable

The inference engine most local tooling is built on. Runs LLMs on CPU, CUDA, Metal, ROCm, Vulkan, and more.

- **Edge:** Extreme portability — a laptop, a Raspberry Pi, a Mac Studio, a server farm. GGUF quantization is the reason a large model fits on consumer hardware.

### [Jan](https://github.com/menloresearch/jan)
`TypeScript` · `AGPL-3.0` · Desktop · 🟢 stable

Offline ChatGPT alternative that runs entirely on your machine.

- **Replaces:** ChatGPT desktop, LM Studio (which is only partially open)
- **Edge:** Fully open desktop UX with local-first data storage, plus an optional OpenAI-compatible local server.

### [MLC LLM](https://github.com/mlc-ai/mlc-llm)
`Python + C++` · `Apache-2.0` · 🟢 stable

Universal LLM deployment engine — native GPU acceleration on iOS, Android, desktop, and the browser.

- **Replaces:** Ollama (on mobile), cloud inference for on-device apps
- **Edge:** the only serious path to running an LLM on a phone's GPU. **Known weakness:** model support is limited to what's been compiled for the target, and when compilation or inference fails the errors are opaque.

### [WebLLM](https://github.com/mlc-ai/web-llm)
`TypeScript` · `Apache-2.0` · 🟢 stable

LLM inference entirely in the browser via WebGPU.

- **Edge:** no server, no API key, no data leaving the tab — which makes a whole class of privacy-sensitive apps possible. **Known weakness:** requires WebGPU, so Safari and Firefox support is the limiting factor, and out-of-memory device-lost errors are common on modest GPUs.

### [llamafile](https://github.com/Mozilla-Ocho/llamafile)
`C/C++` · `Apache-2.0` · 🟢 stable

Distribute an entire LLM as one executable file that runs on multiple OSes without installation.

- **Edge:** Unbeatable for shipping a model to a non-technical user. One file. Double-click. Done.

---

## Inference Servers & Gateways

Serving models at scale.

### [vLLM](https://github.com/vllm-project/vllm)
`Python + CUDA` · `Apache-2.0` · 🟢 stable

High-throughput, memory-efficient inference and serving engine — the de facto standard for self-hosted production LLM serving.

- **Replaces:** OpenAI API, Together AI
- **Edge:** PagedAttention plus continuous batching gives order-of-magnitude throughput gains over naive serving. Tensor/pipeline parallelism scales across GPUs; the OpenAI-compatible API means clients need no changes.

### [SGLang](https://github.com/sgl-project/sglang)
`Python` · `Apache-2.0` · 🟢 stable

Fast serving framework with RadixAttention prefix caching and a structured generation language.

- **Edge:** Wins on workloads with heavy shared prefixes (agents, few-shot, multi-turn) where prefix-cache reuse dominates. Excellent constrained-decoding support.

### [LocalAI](https://github.com/mudler/LocalAI)
`Go` · `MIT` · 🟢 stable

Drop-in replacement for the OpenAI API that runs locally across many backends and modalities — text, image, audio, embeddings.

- **Replaces:** OpenAI API, ElevenLabs API
- **Edge:** One server, many backends (llama.cpp, vLLM, transformers, whisper, diffusers). No GPU required. Point your existing OpenAI SDK at it and change nothing else.

### [Text Generation Inference](https://github.com/huggingface/text-generation-inference)
`Rust + Python` · `Apache-2.0` · 🟢 stable

Hugging Face's production serving stack — the engine behind their inference endpoints.

- **Edge:** Battle-tested Rust web server, token streaming, and tight integration with the HF ecosystem.

### [Ray](https://github.com/ray-project/ray)
`Python` · `Apache-2.0` · 🟢 stable

Distributed compute framework for scaling AI workloads — training, tuning, and multi-model serving via Ray Serve.

- **Edge:** For when one model on one box is no longer the problem. Model composition and autoscaling across a cluster.

### [Unified AI System](https://github.com/happy520ai/unified-ai-system)
`TypeScript + JavaScript` · `Apache-2.0` · `Self-hosted gateway + CLI` · 🟡 active

Terminal-first AI gateway that puts provider routing, governed agent and knowledge contracts, an HTTP API, and Codex MCP tools behind one self-hosted service.

- **Replaces:** ad hoc provider-specific proxy scripts when evaluating a local AI gateway control plane
- **Backends:** deterministic local fake provider by default; configurable adapters for NVIDIA and OpenAI-compatible upstream providers
- **Edge:** A fresh clone can prove the complete chat and MCP paths without credentials, while the CLI refuses to send when a real provider may be active unless the operator supplies `--allow-real-provider` for that command. Public-clone and container smoke checks keep the credential-free path under CI.

---

## Chat UIs & Frontends

### [Open WebUI](https://github.com/open-webui/open-webui)
`Python + Svelte` · `BSD-3-Clause` (with branding clause) · 🟢 stable

Feature-rich, self-hosted AI interface — the default UI for Ollama and OpenAI-compatible backends.

- **Replaces:** ChatGPT Plus, Claude Pro
- **Edge:** Multi-user with RBAC, built-in RAG over uploaded documents, web search, image generation, voice, and a Python function/pipeline plugin system. Runs fully offline.

### [LibreChat](https://github.com/danny-avila/LibreChat)
`TypeScript` · `MIT` · 🟢 stable

Every AI provider in one polished ChatGPT-style interface.

- **Replaces:** ChatGPT Plus, Poe
- **Edge:** Multi-provider in a single conversation, agents, code interpreter, artifacts, MCP support, and genuinely good multi-user auth. MIT with no branding restrictions.

### [Lobe Chat](https://github.com/lobehub/lobe-chat)
`TypeScript` · `Apache-2.0` (with conditions) · 🟢 stable

Modern chat framework with a plugin and agent-market ecosystem.

- **Edge:** The best-looking option, with PWA and mobile support plus one-click Vercel deploy.

### [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)
`JavaScript` · `MIT` · 🟢 stable

All-in-one desktop and Docker app: chat with your documents, with agents and multi-user workspaces built in.

- **Edge:** Batteries-included RAG — embedder, vector DB, and UI ship together. Fastest path from "I have PDFs" to "I can ask them questions."

---
