---
type: concept
title: "Multimodal and Builders"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/06-multimodal-and-builders/"
path: /categories/06-multimodal-and-builders/
updated: 2026-07-29
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-29T07:44:48.569Z"
---
# Multimodal and Builders

Speech, vision, multimodal tools, low-code builders, and stack selection guidance.

## Speech, Vision & Multimodal
### [Whisper](https://github.com/openai/whisper) / [faster-whisper](https://github.com/SYSTRAN/faster-whisper) / [whisper.cpp](https://github.com/ggml-org/whisper.cpp)
`MIT`

Speech-to-text: the original model, the CTranslate2 port (substantially faster), and the C++ port (runs anywhere).

- **Replaces:** Google Speech-to-Text, AssemblyAI
- **Edge:** State-of-the-art multilingual ASR for free, on your own hardware. `whisper.cpp` runs real-time transcription on a laptop CPU.

### [WhisperX](https://github.com/m-bain/whisperX)
`Python` · `BSD-2-Clause`

Whisper plus word-level timestamps and speaker diarization.

- **Edge:** If you need to know *who* said *what, when* — subtitles, meeting notes — this is the one.

### [Kokoro](https://github.com/hexgrad/kokoro) / [Piper](https://github.com/OHF-Voice/piper1-gpl)
`Apache-2.0` / `GPL-3.0`

Text-to-speech. Kokoro is a tiny (~82M parameter) model with quality far above its weight class; Piper is optimized for devices as small as a Raspberry Pi.

- **Replaces:** ElevenLabs
- **Edge:** Real-time TTS on CPU. Kokoro's small footprint makes it viable to bundle inside an app.

### [Pipecat](https://github.com/pipecat-ai/pipecat)
`Python` · Library

Framework for real-time voice and multimodal conversational agents.

- **Replaces:** Vapi, Retell
- **Edge:** pluggable STT/TTS/LLM stages over WebRTC, plus speech-to-speech model support, so you can assemble a voice agent from open parts instead of renting a platform. **Known weakness:** maintainers' own issue tracker documents pipeline freezes, zombie function-call handlers after timeout, and multi-second latency in production. The linear pipeline model also fits multi-party conversation badly. Expect real engineering effort.

### [LiveKit Agents](https://github.com/livekit/agents)
`Python + Node` · `Apache-2.0` · Framework

Realtime agent framework built on LiveKit's WebRTC infrastructure.

- **Replaces:** Vapi, Retell
- **Edge:** the room/participant model handles multi-party and interruption natively, where a linear pipeline has to fake it. If your voice agent needs more than one human in the call, start here rather than with a pipeline framework.

### [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
`Python` · `GPL-3.0`

Node-based interface for diffusion models — image, video, and audio generation pipelines.

- **Replaces:** Midjourney, DALL·E
- **Edge:** The graph *is* the program — every step is inspectable and reproducible, and workflows are shareable as JSON. Supports essentially every open image/video model within days of release.

### [Surya](https://github.com/datalab-to/surya)
`Python` · `GPL-3.0` (commercial exceptions)

Document OCR, layout analysis, and reading-order detection in 90+ languages.

- **Edge:** Layout, reading order, and table structure — not just raw character recognition. Essential upstream of any document RAG.

---

## Low-Code / Visual Builders
### [n8n](https://github.com/n8n-io/n8n)
`TypeScript` · `Sustainable Use License` (fair-code, source-available)

Workflow automation with native AI agent nodes — hundreds of integrations, self-hostable.

- **Replaces:** Zapier, Make
- **Edge:** Drop to JavaScript in any node when the visual builder runs out. AI agent nodes make it a legitimate agent runtime, not just a trigger-action tool. **Note:** fair-code, not OSI-approved — read the license before commercial use.

### [Flowise](https://github.com/FlowiseAI/Flowise)
`TypeScript` · `Apache-2.0` (with conditions)

Drag-and-drop builder for LLM flows and agents.

- **Edge:** Fastest way to prototype a RAG chatbot visually and expose it as an API or embeddable widget.

### [Langflow](https://github.com/langflow-ai/langflow)
`Python` · `MIT`

Visual framework for building multi-agent and RAG applications.

- **Edge:** Every visual component maps to real Python you can export and own. A good bridge between prototype and production code.

---

## Open-Source Alternatives Cheat Sheet
| You're paying for | Use instead |
|---|---|
| GitHub Copilot | [Continue](https://github.com/continuedev/continue), [Tabby](https://github.com/TabbyML/tabby), [aider](https://github.com/Aider-AI/aider) |
| Cursor / Windsurf | [Cline](https://github.com/cline/cline), [OpenCode](https://github.com/sst/opencode), [Continue](https://github.com/continuedev/continue) |
| Devin | [OpenHands](https://github.com/All-Hands-AI/OpenHands), [Goose](https://github.com/block/goose), [SWE-agent](https://github.com/SWE-agent/SWE-agent) |
| Claude Design / Figma Make | [Open Design](https://github.com/nexu-io/open-design) |
| ChatGPT desktop / Copilot assistant | [OpenClaw](https://github.com/openclaw/openclaw), [Hermes Agent](https://github.com/NousResearch/hermes-agent) |
| Bolt.new / v0 / Lovable | [bolt.diy](https://github.com/stackblitz-labs/bolt.diy), [OpenUI](https://github.com/wandb/openui), [Dyad](https://github.com/dyad-sh/dyad) |
| ChatGPT Plus / Claude Pro | [Open WebUI](https://github.com/open-webui/open-webui), [LibreChat](https://github.com/danny-avila/LibreChat), [Jan](https://github.com/menloresearch/jan) |
| OpenAI API (inference) | [vLLM](https://github.com/vllm-project/vllm), [Ollama](https://github.com/ollama/ollama), [LocalAI](https://github.com/mudler/LocalAI), [SGLang](https://github.com/sgl-project/sglang) |
| OpenAI Assistants API | [Letta](https://github.com/letta-ai/letta), [Dify](https://github.com/langgenius/dify) |
| Pinecone | [Qdrant](https://github.com/qdrant/qdrant), [pgvector](https://github.com/pgvector/pgvector), [Chroma](https://github.com/chroma-core/chroma) |
| LangSmith | [Langfuse](https://github.com/langfuse/langfuse), [Phoenix](https://github.com/Arize-ai/phoenix) |
| OpenRouter | [LiteLLM](https://github.com/BerriAI/litellm) proxy |
| ElevenLabs | [Kokoro](https://github.com/hexgrad/kokoro), [Piper](https://github.com/OHF-Voice/piper1-gpl) |
| AssemblyAI / Deepgram | [faster-whisper](https://github.com/SYSTRAN/faster-whisper), [WhisperX](https://github.com/m-bain/whisperX) |
| Midjourney / DALL·E | [ComfyUI](https://github.com/comfyanonymous/ComfyUI) |
| Zapier / Make | [n8n](https://github.com/n8n-io/n8n) |
| Vapi / Retell | [LiveKit Agents](https://github.com/livekit/agents), [Pipecat](https://github.com/pipecat-ai/pipecat) |
| Cohere Embed / Rerank | [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding) |
| Browserbase / Stagehand | [browser-use](https://github.com/browser-use/browser-use), [Skyvern](https://github.com/Skyvern-AI/skyvern) |
| OpenAI GPTs platform | [Dify](https://github.com/langgenius/dify), [Flowise](https://github.com/FlowiseAI/Flowise) |

---

## Choosing Your Stack
Start small. Every layer below is optional until it isn't.

**Solo developer, local-first, zero API cost**
```
Ollama → Continue (editor) + aider (terminal) → Open WebUI (chat)
```

**Small team shipping an AI product**
```
LiteLLM proxy → LangGraph or CrewAI → pgvector → Langfuse → promptfoo in CI
```

**Enterprise, self-hosted, compliance-bound**
```
vLLM (own GPUs) → LiteLLM (keys/budgets) → Qdrant → Dify or LangGraph
  → Langfuse (tracing) → Garak + NeMo Guardrails (safety)
```

**Document-heavy RAG**
```
Docling or RAGFlow (parsing) → LlamaIndex (retrieval) → Qdrant → Ragas (eval)
```

Three rules that save the most time:

1. **Put a gateway in front of your models from day one.** LiteLLM costs an afternoon and buys you provider switching, budgets, and fallbacks forever.
2. **Use Postgres + pgvector until you have measured a reason not to.** Most "we need a vector database" problems are actually retrieval-quality problems.
3. **Add tracing before you add features.** Debugging an untraced multi-agent system is guesswork.

---
