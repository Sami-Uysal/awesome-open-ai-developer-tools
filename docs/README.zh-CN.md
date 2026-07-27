<div align="center" markdown="1">

# Awesome 开源 AI 开发者工具 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**开源 AI 技术栈的每一层，以及它们各自能替代的闭源产品。**

编码智能体 · 本地推理 · 智能体框架 · 向量数据库 · RAG · 评测 · 可观测性

[English](README.md) · [Türkçe](README.tr.md) · **简体中文** · [Español](README.es.md) · [*添加你的语言*](TRANSLATIONS.md) · [🌐 网站](https://sami-uysal.github.io/awesome-open-ai-developer-tools/)

</div>

---

每个条目都回答三个问题：

1. **它做什么？**
2. **它替代哪个闭源产品？**
3. **相比同类，为什么选它？**

没有联盟营销链接，没有付费排位。只收录 OSI 认可的开源许可证——source-available 工具可以入选，但必须明确标注。

> **关于许可证：** 条目上标注的许可证只是指引，不是保证——项目会改换许可证，而这份列表会滞后。在商业上依赖某个工具之前，请阅读它仓库里的 `LICENSE` 文件。没有标注许可证的条目，是我们尚未确认的。

---

## 目录

- [编码智能体与结对编程](#编码智能体与结对编程)
- [Prompt 到应用生成器](#prompt-到应用生成器)
- [自主与持久化智能体](#自主与持久化智能体)
- [智能体沙箱与浏览器控制](#智能体沙箱与浏览器控制)
- [智能体框架与编排](#智能体框架与编排)
- [Model Context Protocol (MCP)](#model-context-protocol-mcp)
- [本地推理引擎](#本地推理引擎)
- [推理服务与网关](#推理服务与网关)
- [聊天前端](#聊天前端)
- [向量数据库](#向量数据库)
- [Embedding 与重排序器](#embedding-与重排序器)
- [RAG 框架](#rag-框架)
- [微调与训练](#微调与训练)
- [评测、测试与护栏](#评测测试与护栏)
- [可观测性与 LLMOps](#可观测性与-llmops)
- [语音、视觉与多模态](#语音视觉与多模态)
- [低代码 / 可视化搭建](#低代码--可视化搭建)
- [开源替代速查表](#开源替代速查表)
- [如何选择你的技术栈](#如何选择你的技术栈)
- [参与贡献](#参与贡献)

---

## 编码智能体与结对编程

能读、写、重构你仓库代码的智能体。

### [aider](https://github.com/Aider-AI/aider)
`Python` · `Apache-2.0` · CLI

终端里的 AI 结对编程。它会绘制整个仓库的地图，直接修改文件，并自己写 git commit。

- **替代：** GitHub Copilot、Cursor
- **后端：** 通过 LiteLLM 支持 100+ 模型——Claude、GPT、Gemini，以及经 Ollama 或任意 OpenAI 兼容端点接入的本地模型
- **优势：** 仓库地图让它拥有全代码库上下文，却不必把每个文件塞进 prompt。自动提交意味着每次 AI 修改都是可回滚的检查点。与编辑器无关——配合 VS Code、Neovim、Emacs 都行，不配合也行。

### [OpenCode](https://github.com/sst/opencode)
`TypeScript` · `MIT` · TUI

终端原生的编码智能体，集成 LSP——它会加载对应的语言服务器，让模型看到真实的类型信息而不是猜测。

- **替代：** Claude Code、Cursor
- **后端：** Anthropic、OpenAI、Google、本地模型；设计上与供应商无关
- **优势：** 基于 LSP 的建议大幅减少虚构 API。客户端/服务端分离让你能用多个客户端驱动同一个会话。

### [Cline](https://github.com/cline/cline)
`TypeScript` · `Apache-2.0` · VS Code 扩展

VS Code 内的自主编码智能体。会规划、改文件、执行终端命令、使用浏览器——每一步都请求许可。

- **替代：** Cursor Composer、Devin
- **后端：** Anthropic、OpenAI、Google、AWS Bedrock、Azure、OpenRouter、Ollama、LM Studio
- **优势：** 默认人在回路——每个文件 diff 和 shell 命令都需要确认。Plan/Act 模式分离能防止智能体把代码库推平。

### [Continue](https://github.com/continuedev/continue)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains

搭建属于你自己的 AI 编码助手——自动补全、对话、编辑，全部用你自己的模型和上下文来源。

- **替代：** GitHub Copilot
- **后端：** 任意——本地（Ollama、llama.cpp）或云端
- **优势：** 上下文来源完全可配置（文档、终端、git diff、代码库）。Tab 补全用小的本地模型也够用，所以你能真正离线工作。

### [OpenHands](https://github.com/All-Hands-AI/OpenHands)
`Python` · `MIT` · Web + 无头

做开发者会做的事的智能体——改代码、跑命令、浏览网页、调 API——全部在沙箱运行时内完成。

- **替代：** Devin
- **后端：** LiteLLM 支持的一切
- **优势：** 真正的沙箱执行（Docker），不是假装在跑命令的聊天框。无头和 CLI 模式让它可以在 CI 里脚本化。

### [SWE-agent](https://github.com/SWE-agent/SWE-agent)
`Python` · `MIT` · CLI

研究级智能体，把一个 GitHub issue 变成一个 pull request。

- **替代：** Devin、issue 转 PR 的机器人
- **优势：** 重点在于智能体-计算机接口（ACI）——精心设计的工具胜过更大的模型。如果你要自己造智能体，先读这份代码。

### [Goose](https://github.com/block/goose)
`Rust` · `Apache-2.0` · CLI + 桌面端

来自 Block、现由 Linux Foundation 托管的可扩展自主智能体。会安装、执行、编辑、测试——而不只是给建议。

- **替代：** Devin、Cursor 智能体模式
- **后端：** 任意供应商，并原生支持 MCP 扩展
- **优势：** 比 aider 更自主——更少人工干预就能规划和迭代。Linux Foundation 下的中立治理意味着没有许可证反悔的风险，这对一个要在团队里标准化的工具很关键。

### [Kilo Code](https://github.com/Kilo-Org/kilocode)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains

把 Roo Code 与 Cline 各自最好的部分合并进一个扩展的开源 IDE 智能体。

- **替代：** Cursor、Windsurf
- **优势：** Orchestrator 模式把大任务拆成由专门模式承担的子任务。它同时吸收两个上游项目的特性，所以推进速度比任何一方单独更快。

### [Tabby](https://github.com/TabbyML/tabby)
`Rust` · `Apache-2.0` · 自托管服务

自带推理服务、不向外部发起任何 API 调用的自托管编码助手。

- **替代：** GitHub Copilot（企业版）
- **优势：** 消费级 GPU 就能跑，提供 OpenAPI 接口，并把"我们的代码去了哪里？"这个合规问题回答成"哪儿也没去"。

### [gpt-engineer](https://github.com/gpt-engineer-org/gpt-engineer)
`Python` · `MIT` · CLI

用自然语言描述一个项目，它写出并迭代整个代码库。

- **优势：** 适合从零搭骨架，而不是在既有仓库里做精细修改。

---

## Prompt 到应用生成器

输入 prompt，输出可部署的全栈应用。

### [bolt.diy](https://github.com/stackblitz-labs/bolt.diy)
`TypeScript` · `MIT`

Bolt.new 的官方开源分支。在浏览器里 prompt、运行、编辑并部署全栈 Web 应用——用你选择的 LLM。

- **替代：** Bolt.new、v0、Replit Agent
- **后端：** OpenAI、Anthropic、Google、Groq、Mistral、DeepSeek、xAI、Ollama、LM Studio、OpenRouter，以及任意 OpenAI 兼容端点
- **优势：** 可自托管且零遥测。项目做到一半还能换供应商，意味着你可以先用便宜模型，只在真正需要的地方升级。

### [Open Design](https://github.com/nexu-io/open-design)
`TypeScript` · `Apache-2.0` · 桌面端 + Web

把你已经在用的编码智能体变成设计引擎——原型、落地页、仪表盘、幻灯片、图像和视频，可导出为 HTML/PDF/PPTX/MP4。

- **替代：** Claude Design、Figma Make
- **后端：** BYOK，用你 PATH 里已有的智能体——Claude Code、Codex、Cursor、Gemini、OpenCode、Qwen 等 20+ CLI
- **优势：** 自带大量品牌级设计系统包，且每次渲染都读取 `DESIGN.md` 品牌契约，所以输出是一致的而不是随机风格。本地优先：品牌资产不出本机。

### [OpenUI](https://github.com/wandb/openui)
`Python + TypeScript` · `Apache-2.0`

描述一个界面，实时看它渲染出来，再转成 React/Svelte/Vue。

- **替代：** v0.dev
- **优势：** 实时迭代闭环——描述修改，立刻看到结果。可通过 Ollama 使用本地模型。

### [Dyad](https://github.com/dyad-sh/dyad)
`TypeScript` · `Apache-2.0` · 桌面端

本地运行的开源 AI 应用生成器。跑在你自己的机器上，用你自己的 API key。

- **替代：** Lovable、v0、Bolt
- **优势：** 无供应商锁定，源代码也不必往云端跑一圈。

---

## 自主与持久化智能体

拥有记忆、目标和自主性的长时运行智能体。

### [OpenClaw](https://github.com/openclaw/openclaw)
`TypeScript` · `MIT`

可在任何操作系统上运行、并从任何平台联系到你的自托管个人 AI 助手。史上增长最快的开源项目之一。

- **替代：** ChatGPT 桌面版、Claude Desktop、Microsoft Copilot
- **后端：** 任意 OpenAI 兼容 API、Ollama、LocalAI
- **优势：** 接入 Telegram、Discord、Slack、WhatsApp、Signal、邮件和 CLI 网关，让智能体在你本来就在的地方找到你——而且能主动给*你*发消息。技能/插件生态庞大。**安全提示：** 它持有你消息账号的凭据并自主运行；在把它对准任何敏感内容之前，先做隔离并读懂其权限模型。

### [Hermes Agent](https://github.com/NousResearch/hermes-agent)
`Python` · `MIT`

Nous Research 的自我改进智能体——持久记忆、可复用技能、定时任务，以及 20+ 消息渠道。

- **替代：** OpenAI Operator、Claude Desktop
- **优势：** 闭环学习：从经验中生成技能、在使用中打磨技能，并把记忆与会话历史持久化在 SQLite 中跨重启保留。可在廉价 VPS 或 Serverless 上运行，空闲不产生成本。

### [DeerFlow](https://github.com/bytedance/deer-flow)
`Python` · `MIT`

字节跳动的长时程 "SuperAgent" 运行框架——为耗时数分钟到数小时的任务提供沙箱、记忆、技能、子智能体和消息网关。

- **优势：** 基于 LangGraph，但直接给齐了智能体真正需要的整套运行时（文件系统、记忆、沙箱执行、子智能体派生），不用你自己拼装。2.0 发布时登上 GitHub Trending 榜首。

### [Open-Sable](https://github.com/IdeoaLabs/Open-Sable)
`Python` · 本地优先智能体框架

具备类 AGI 认知子系统的自主智能体——目标、工作/情景/长期记忆、元认知与工具使用。

- **优势：** Ollama 优先、云端兜底，并有低显存模式，因此真的能在你自己的硬件上跑。记忆衰减与整合，加上 watchdog/热重载守护，让 7×24 运行成为现实而非愿景。

### [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
`Python + TypeScript` · MIT（经典 agent）/ Polyform Shield（平台）

掀起自主智能体浪潮的项目，如今是一个用于构建长期运行智能体的低代码平台。

- **优势：** 基于积木的可视化编排器，加上现成智能体库。注意许可证分裂——经典 agent 是 MIT，新平台是 source-available，并非 OSI 开源。

### [Letta](https://github.com/letta-ai/letta)
`Python` · `Apache-2.0`

原名 MemGPT。具备真正长期记忆的有状态智能体——智能体自己管理上下文窗口，按需把记忆换入换出。

- **替代：** OpenAI Assistants API
- **优势：** 记忆是由数据库支撑的一等公民，而不是外挂在向量检索上的补丁。智能体跨会话存活，并可在模型之间迁移。

### [Mem0](https://github.com/mem0ai/mem0)
`Python + TypeScript` · `Apache-2.0`

可插入任意智能体的记忆层——跨会话抽取、存储并召回关于用户的事实。

- **优势：** 与框架无关。向量 + 图的混合存储，效果远好于把聊天记录一股脑塞进向量库。

### [Khoj](https://github.com/khoj-ai/khoj)
`Python` · `AGPL-3.0`

自托管的个人 AI，可检索你的笔记、文档和网络；支持浏览器、Obsidian 和 Emacs 访问。

- **替代：** 带记忆的 ChatGPT、Notion AI
- **优势：** 在本地索引*你自己的*资料库。配合本地模型可完全离线运行。

---

## 智能体沙箱与浏览器控制

智能体生成的代码到底跑在哪里，以及智能体如何触达网页。

### [E2B](https://github.com/e2b-dev/E2B)
`TypeScript + Go` · `Apache-2.0` · SDK + 可自托管基础设施

基于 Firecracker microVM 的安全云沙箱，用于运行 AI 生成的代码。

- **替代：** 闭源的 code-interpreter 后端
- **优势：** microVM 隔离让每个沙箱拥有独立内核——这是真正的安全边界，而不只是容器命名空间。当你要执行模型写出来的代码时，这个区别立刻变得重要。提供 Python 与 JS SDK；若想自己跑整套平台，见 [e2b-dev/infra](https://github.com/e2b-dev/infra)。

### [Daytona](https://github.com/daytonaio/daytona)
`Go + TypeScript` · `Apache-2.0` · 服务端 + SDK

面向 AI 智能体的沙箱运行时，热池启动快，且文件系统跨会话保留。

- **替代：** E2B（当你更需要持久化而非最强隔离时）
- **优势：** 沙箱可以暂停、恢复，并且活得比单次会话更久——这正是长时程智能体真正需要的。它基于容器而非 microVM，所以隔离强度要按低于 E2B 来对待：跑自己的代码没问题，面对真正不可信的输入则要三思。

### [browser-use](https://github.com/browser-use/browser-use)
`Python` · `MIT` · 库

把 LLM 接到真实浏览器上，让它导航、填表单、抽取数据。

- **替代：** Stagehand、MultiOn
- **优势：** 使用最广的开源浏览器智能体，支持多标签页，DOM 不够用时还能回退到视觉。**已知弱点：** 非确定性——同一个目标在不同运行里走不同路径，导致失败难以复现；复杂页面上的视觉调用很烧钱。请预留重试余量并给花费设上限。

### [Skyvern](https://github.com/Skyvern-AI/skyvern)
`Python` · `AGPL-3.0` · 库 + 服务端

用计算机视觉而非 DOM 选择器驱动的浏览器自动化。

- **替代：** Stagehand、脆弱的 Playwright 爬取脚本
- **优势：** 因为它靠视觉导航，网站改版不会打断你的选择器——而这正是爬取流水线腐化的常见原因。**注意许可证：** AGPL-3.0，且反爬对抗部分被留在了付费云端。这个组合会直接排除掉一部分商业用途。

---

## 智能体框架与编排

构建多智能体与工具调用系统的库。

### [LangGraph](https://github.com/langchain-ai/langgraph)
`Python + JS` · `MIT`

把智能体建成有状态的图——节点、边与显式控制流，并支持检查点和人工介入中断。

- **优势：** 持久化执行：智能体可以为等待人工审批暂停数小时，再带着完整状态继续。当你需要的是*可靠*的智能体而不是 demo 时，选它。

### [CrewAI](https://github.com/crewAIInc/crewAI)
`Python` · `MIT`

会协作的角色扮演型自主智能体——由明确角色、目标和任务组成的"团队"。

- **替代：** AutoGen、OpenAI Swarm
- **优势：** 不依赖 LangChain，运行时精简。角色/任务抽象是进入多智能体设计最直观的入口。当团队协作太松散时，Flows 提供事件驱动的控制。

### [AutoGen](https://github.com/microsoft/autogen)
`Python + .NET` · `MIT`

微软的多智能体对话框架——智能体彼此交谈、执行代码，并把人类纳入流程。

- **优势：** 异步事件驱动内核，具备分布式运行时和跨语言支持。AutoGen Studio 提供免代码原型界面。

### [smolagents](https://github.com/huggingface/smolagents)
`Python` · `Apache-2.0`

Hugging Face 的极简智能体库——核心逻辑约一千行。

- **优势：** 跑通单智能体循环的最短路径。Code agent 直接写 Python 动作而不是吐 JSON 工具调用，在多步任务上可测量地更可靠。一个下午就能通读完。

### [Google ADK](https://github.com/google/adk-python)
`Python + Java` · `Apache-2.0`

用于构建、评测和部署多智能体系统的代码优先工具包。

- **优势：** 尽管挂着 Google 的名字，它与模型和部署环境都无关。内置评测和本地开发界面，补上了大多数框架忽视的那个缺口——"我怎么知道我的智能体变差了？"

### [Pydantic AI](https://github.com/pydantic/pydantic-ai)
`Python` · `MIT`

来自 Pydantic 团队的智能体框架——类型安全、结构化输出、依赖注入。

- **优势：** 如果你本来就信任 Pydantic 做校验，它把同样的严谨带到 LLM 的输入输出上。用起来像"智能体版的 FastAPI"。

### [DSPy](https://github.com/stanfordnlp/dspy)
`Python` · `MIT`

不要写 prompt，去编程 LLM——声明模块，让优化器把 prompt 编译出来。

- **优势：** 用针对指标的系统化优化，取代手工调 prompt。换模型、重新编译、质量照旧。

### [LiteLLM](https://github.com/BerriAI/litellm)
`Python` · `MIT`

面向 100+ LLM 供应商的统一 OpenAI 兼容接口，外加一个带密钥、预算、限流和故障转移的代理。

- **替代：** OpenRouter（托管版）
- **优势：** 整个技术栈里最实用的一段管道。供应商挂了 → 自动切换到备用。按团队的预算与开销统计是白送的。

### [Haystack](https://github.com/deepset-ai/haystack)
`Python` · `Apache-2.0`

面向生产的可组合 RAG 与智能体流水线框架。

- **优势：** 显式、可检查的流水线图。检索器/重排器生态强大——当难点本身就是搜索质量时首选它。

---

## Model Context Protocol (MCP)

把模型接入工具和数据的新兴标准。

### [MCP 规范](https://github.com/modelcontextprotocol/modelcontextprotocol)
`MIT`

协议本身——向任意 LLM 客户端暴露工具、资源和 prompt 的开放标准。

- **优势：** 集成写一次，所有支持 MCP 的客户端（Claude Code、OpenCode、Cline、Continue 等）都能用。

### [MCP Servers](https://github.com/modelcontextprotocol/servers)
`MIT`

参考实现——文件系统、git、fetch、memory，以及数十个社区服务器。

- **优势：** 学这个协议最快的方式，是去读一个已经跑得起来的 200 行服务器。

### [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
`TypeScript` · `MIT`

用于测试和调试 MCP 服务器的官方开发者工具。

- **优势：** 它把真实的协议流量摊开给你看——工具调用、资源、错误——而不是让你猜客户端为什么加载不了你的服务器。当一个 MCP 集成悄无声息地什么也没做时，先拿它。

### [FastMCP](https://github.com/jlowin/fastmcp)
`Python` · `Apache-2.0`

编写 MCP 服务端与客户端的舒适方式——基于装饰器，像 FastAPI 一样。

- **优势：** 约 10 行就能跑起一个服务器。认证、部署、代理和服务器组合都替你处理好了。

---

## 本地推理引擎

在自己的硬件上跑模型。

### [Ollama](https://github.com/ollama/ollama)
`Go` · `MIT`

一条命令下载并运行开源模型。进入本地 LLM 世界的默认入口。

- **替代：** OpenAI API（就本地工作负载而言）
- **优势：** `ollama run <model>` 就完事了——下载、量化、GPU 卸载和提供 OpenAI 兼容 API 全由它处理。在所有本地运行时中，它的模型库最大、工具支持面最广。

### [llama.cpp](https://github.com/ggml-org/llama.cpp)
`C/C++` · `MIT`

大多数本地工具赖以构建的推理引擎。可在 CPU、CUDA、Metal、ROCm、Vulkan 等平台运行 LLM。

- **优势：** 极致可移植——笔记本、树莓派、Mac Studio、服务器集群。大模型能塞进消费级硬件，靠的就是 GGUF 量化。

### [Jan](https://github.com/menloresearch/jan)
`TypeScript` · `AGPL-3.0` · 桌面端

完全在你机器上运行的离线 ChatGPT 替代品。

- **替代：** ChatGPT 桌面版、LM Studio（后者只是部分开源）
- **优势：** 完全开源的桌面体验，本地优先的数据存储，外加可选的 OpenAI 兼容本地服务。

### [MLC LLM](https://github.com/mlc-ai/mlc-llm)
`Python + C++` · `Apache-2.0`

通用 LLM 部署引擎——在 iOS、Android、桌面和浏览器上做原生 GPU 加速。

- **替代：** Ollama（移动端）、面向端上应用的云推理
- **优势：** 想让 LLM 真正跑在手机 GPU 上，这是唯一像样的路径。**已知弱点：** 模型支持仅限于已为目标平台编译过的那些；一旦编译或推理失败，报错非常晦涩。

### [WebLLM](https://github.com/mlc-ai/web-llm)
`TypeScript` · `Apache-2.0`

借助 WebGPU 完全在浏览器内完成 LLM 推理。

- **优势：** 没有服务器、没有 API key、数据不出标签页——这让一整类隐私敏感应用成为可能。**已知弱点：** 依赖 WebGPU，因此 Safari 与 Firefox 的支持是硬约束；在中低端 GPU 上，显存不足导致的 device lost 错误很常见。

### [llamafile](https://github.com/Mozilla-Ocho/llamafile)
`C/C++` · `Apache-2.0`

把整个 LLM 打包成一个可执行文件，在多个操作系统上免安装运行。

- **优势：** 要把模型交付给非技术用户时无可匹敌。一个文件。双击。搞定。

---

## 推理服务与网关

规模化地提供模型服务。

### [vLLM](https://github.com/vllm-project/vllm)
`Python + CUDA` · `Apache-2.0`

高吞吐、显存高效的推理与服务引擎——自托管生产级 LLM 服务的事实标准。

- **替代：** OpenAI API、Together AI
- **优势：** PagedAttention 加持续批处理（continuous batching），相比朴素服务方式带来数量级的吞吐提升。张量/流水线并行可跨 GPU 扩展；OpenAI 兼容 API 意味着客户端一行都不用改。

### [SGLang](https://github.com/sgl-project/sglang)
`Python` · `Apache-2.0`

带 RadixAttention 前缀缓存和结构化生成语言的高速服务框架。

- **优势：** 在共享前缀占主导的负载（智能体、few-shot、多轮对话）上优势明显，因为前缀缓存复用起了决定性作用。受限解码支持出色。

### [LocalAI](https://github.com/mudler/LocalAI)
`Go` · `MIT`

OpenAI API 的本地直接替代品，跨多种后端和模态运行——文本、图像、音频、embedding。

- **替代：** OpenAI API、ElevenLabs API
- **优势：** 一个服务，多种后端（llama.cpp、vLLM、transformers、whisper、diffusers）。不需要 GPU。把现有 OpenAI SDK 指过去，其他什么都不用改。

### [Text Generation Inference](https://github.com/huggingface/text-generation-inference)
`Rust + Python` · `Apache-2.0`

Hugging Face 的生产级服务栈——其推理端点背后的引擎。

- **优势：** 久经考验的 Rust Web 服务、token 流式输出，以及与 HF 生态的紧密集成。

### [Ray](https://github.com/ray-project/ray)
`Python` · `Apache-2.0`

扩展 AI 工作负载的分布式计算框架——训练、调参，以及通过 Ray Serve 做多模型服务。

- **优势：** 当"一台机器一个模型"不再是问题所在时用它。跨集群的模型组合与自动扩缩容。

---

## 聊天前端

### [Open WebUI](https://github.com/open-webui/open-webui)
`Python + Svelte` · `BSD-3-Clause`（含品牌条款）

功能齐全的自托管 AI 界面——Ollama 与 OpenAI 兼容后端的默认 UI。

- **替代：** ChatGPT Plus、Claude Pro
- **优势：** 带 RBAC 的多用户、对上传文档的内置 RAG、网页搜索、图像生成、语音，以及 Python 函数/流水线插件体系。可完全离线运行。

### [LibreChat](https://github.com/danny-avila/LibreChat)
`TypeScript` · `MIT`

把所有 AI 供应商装进一个精致的 ChatGPT 式界面。

- **替代：** ChatGPT Plus、Poe
- **优势：** 单个对话内多供应商切换、智能体、代码解释器、artifacts、MCP 支持，以及真正好用的多用户认证。MIT 许可，没有品牌限制。

### [Lobe Chat](https://github.com/lobehub/lobe-chat)
`TypeScript` · `Apache-2.0`（附条件）

拥有插件与"智能体市场"生态的现代聊天框架。

- **优势：** 观感最好的一个，支持 PWA 与移动端，还能一键部署到 Vercel。

### [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)
`JavaScript` · `MIT`

一体化桌面与 Docker 应用：与你的文档对话，内置智能体和多用户工作区。

- **优势：** 开箱即用的 RAG——embedder、向量库和界面一起交付。从"我有一堆 PDF"到"我能对它们提问"的最短路径。

---

## 向量数据库

### [Qdrant](https://github.com/qdrant/qdrant)
`Rust` · `Apache-2.0`

支持丰富 payload 过滤、面向生产打造的向量搜索引擎。

- **替代：** Pinecone
- **优势：** 用 Rust 写成——高负载下延迟可预测。标量/乘积/二值量化能大幅削减内存占用。带过滤的检索仍保持准确，不会像朴素的前置/后置过滤那样劣化。

### [Milvus](https://github.com/milvus-io/milvus)
`Go + C++` · `Apache-2.0`

面向十亿级规模负载的分布式向量数据库。

- **优势：** 存储与计算分离、GPU 索引——当语料确实巨大时，它是最重型的选择。本地开发可用 Milvus Lite。

### [Weaviate](https://github.com/weaviate/weaviate)
`Go` · `BSD-3-Clause`

内置向量化模块并提供 GraphQL API 的向量数据库。

- **优势：** 模块体系在写入时替你完成 embedding。原生支持混合检索（BM25 + 向量）与多租户。

### [Chroma](https://github.com/chroma-core/chroma)
`Rust + Python` · `Apache-2.0`

面向 AI 应用、开箱即用的 embedding 数据库。

- **优势：** `pip install chromadb`，四行代码就有了可用的向量存储。原型阶段的正确默认值；真需要时再往外扩。

### [pgvector](https://github.com/pgvector/pgvector)
`C` · `PostgreSQL License`

在 PostgreSQL 内部做向量相似度检索。

- **优势：** 不引入新基础设施。embedding 与关系数据同处一库，拥有真正的事务、join 和备份。除非你已经量化出了不这么做的理由，否则从这里起步。

---

## Embedding 与重排序器

检索质量所在的那一层。换 embedding 模型的收益，通常大于换向量数据库。

### [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding)
`Python` · `MIT`

BGE 系列——BGE-M3 embedding 与 BGE 重排序模型。

- **替代：** OpenAI text-embedding-3、Cohere Embed、Cohere Rerank
- **优势：** BGE-M3 用一个模型就能在 100+ 语言上做稠密、稀疏（词法）和多向量检索，因此你无需维护两套系统就能拿到混合检索。BGE-M3 配 BGE 重排序器是默认的开源检索组合，跑在自己的硬件上，没有按次计费。

### [Sentence Transformers](https://github.com/UKPLab/sentence-transformers)
`Python` · `Apache-2.0`

计算、训练和微调文本 embedding 的库。

- **优势：** 几乎所有开源 embedding 模型都按它的接口发布——学一次，Hugging Face 上的模型就都能用。在自己的领域数据上微调 embedding 模型，通常是 RAG 中单项收益最高的改进，而这就是做这件事的工具。

---

## RAG 框架

### [LlamaIndex](https://github.com/run-llama/llama_index)
`Python + TypeScript` · `MIT`

面向 LLM 应用的数据框架——数据接入、索引、检索，以及基于你的数据的智能体工作流。

- **优势：** 数百个数据连接器（LlamaHub），以及最深的检索策略库——层级式、递归式、混合式、自动合并式。当朴素的 top-k 检索不够用时，解决方案多半这里已经实现好了。

### [RAGFlow](https://github.com/infiniflow/ragflow)
`Python` · `Apache-2.0`

建立在深度文档理解之上的 RAG 引擎——对 PDF、表格和扫描件做版面感知解析。

- **优势：** 大多数 RAG 系统其实是折在文档解析上的。RAGFlow 把它当作核心问题，并展示带引用锚定的分块，让你能可视化地排查检索问题。

### [Dify](https://github.com/langgenius/dify)
`Python + TypeScript` · `Apache-2.0`（附条件）

面向智能体工作流的生产级平台——可视化编排、RAG 流水线、模型管理与可观测性一体化。

- **替代：** OpenAI GPTs 平台、Vertex AI Agent Builder
- **优势：** 非工程师不写代码就能做出并上线内部 AI 工具，同时工程师保留对一切的 API 访问。自托管，数据留在原地。

### [Docling](https://github.com/docling-project/docling)
`Python` · `MIT`

把 PDF、DOCX、PPTX、HTML 和图像解析成结构化、可直接喂给 LLM 的格式。

- **优势：** 能应付真实世界文档的版面与表格结构模型。可直接接入 LlamaIndex 和 LangChain。

### [Unstructured](https://github.com/Unstructured-IO/unstructured)
`Python` · `Apache-2.0`

把非结构化文档送进 ML 流水线的预处理库。

- **优势：** 格式覆盖面最广。许多生产接入流水线背后的主力。

---

## 微调与训练

### [Unsloth](https://github.com/unslothai/unsloth)
`Python` · `Apache-2.0`

以大约两倍速度、显著更低的显存微调 LLM，且不损失精度。

- **优势：** 手写 Triton kernel 与手工反向传播引擎。让"在一块免费 Colab GPU 上微调中等规模模型"从愿望变成现实。

### [Axolotl](https://github.com/axolotl-ai-cloud/axolotl)
`Python` · `Apache-2.0`

完全通过 YAML 配置的后训练框架——全量微调、LoRA、QLoRA、DPO、ORPO 等。

- **优势：** 一个配置文件描述整次训练，实验因此可复现、可在 git 里 diff。

### [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
`Python` · `Apache-2.0`

覆盖 100+ 模型的统一微调，附带 Web 界面。

- **优势：** 通过 LlamaBoard 实现零代码训练。在所有微调工具包中模型覆盖面最广。

### [PEFT](https://github.com/huggingface/peft)
`Python` · `Apache-2.0`

Hugging Face 的参数高效微调库——LoRA、QLoRA、adapter、prompt tuning。

- **优势：** 其他一切都在其上构建的参考实现。与 Transformers、Accelerate、TRL 直接集成。

### [Distilabel](https://github.com/argilla-io/distilabel)
`Python` · `Apache-2.0`

来自 Argilla 团队的合成数据流水线，面向 SFT 与偏好训练。

- **优势：** 把数据生成当作可复现的流水线来做，而不是一堆一次性脚本；并且串联 Argilla，让人可以对模型生成的内容做筛选。微调的瓶颈几乎总是数据，而不是算力。

### [TRL](https://github.com/huggingface/trl)
`Python` · `Apache-2.0`

用强化学习训练 Transformer 模型——SFT、DPO、GRPO、奖励建模。

- **优势：** 从基座模型走向对齐的、能遵循指令的模型的标准路径。

---

## 评测、测试与护栏

### [promptfoo](https://github.com/promptfoo/promptfoo)
`TypeScript` · `MIT`

测试与评估 prompt、智能体和 RAG 系统——同时提供 LLM 红队与漏洞扫描。

- **优势：** 用 YAML 写的声明式测试用例，可在 CI 中运行。模型并排对比与对抗性红队在同一个工具里完成。本地优先——你的 prompt 不出本机。

### [DeepEval](https://github.com/confident-ai/deepeval)
`Python` · `Apache-2.0`

"LLM 版的 pytest"——用有研究依据的指标对 LLM 输出做单元测试。

- **优势：** 用起来就像普通测试套件。G-Eval、忠实度、答案相关性、幻觉以及 RAG 专项指标，都能用你选的模型在本地跑。

### [Ragas](https://github.com/explodinggradients/ragas)
`Python` · `Apache-2.0`

面向 RAG 流水线的评测工具包。

- **优势：** 把检索质量和生成质量拆开，你才知道该修哪一半。还能从你自己的文档合成测试集。

### [Guardrails](https://github.com/guardrails-ai/guardrails)
`Python` · `Apache-2.0`

给 LLM 应用加上输入/输出校验器——结构、安全、PII 和自定义规则。

- **优势：** 校验器可组合，且失败时会让模型重答，而不是直接抛错。

### [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)
`Python` · `Apache-2.0`

用 Colang 建模语言定义的、面向对话系统的可编程护栏。

- **优势：** 对话级别的控制——让机器人不跑题、挡住越狱、强制既定对话流程。

### [Garak](https://github.com/NVIDIA/garak)
`Python` · `Apache-2.0`

LLM 漏洞扫描器——探测 prompt 注入、越狱、数据泄露与有害内容。

- **优势：** 语言模型版的 `nmap`。在上线前跑，而不是出事后跑。

---

## 可观测性与 LLMOps

### [Langfuse](https://github.com/langfuse/langfuse)
`TypeScript` · `MIT`（核心）

开源 LLM 工程平台——追踪、评测、prompt 管理与成本核算。

- **替代：** LangSmith
- **优势：** 核心是真正可自托管的 MIT 许可代码。通过 OpenTelemetry 与框架无关。嵌套 trace 让多智能体调试变得可行，prompt 版本管理把 prompt 变更和发版解耦。

### [Phoenix](https://github.com/Arize-ai/phoenix)
`Python + TypeScript` · `Elastic-2.0`

构建在 OpenTelemetry 与 OpenInference 之上的 AI 可观测性与评测工具。

- **优势：** 既能在 notebook 里做本地调试，也能作为服务跑在生产。embedding 漂移与检索质量的可视化很强。

### [OpenLLMetry](https://github.com/traceloop/openllmetry)
`Python + TypeScript` · `Apache-2.0`

面向 LLM 应用的 OpenTelemetry 埋点。

- **优势：** 基于标准——把 trace 发到 Datadog、Honeycomb、Grafana 或任何你已经在用的系统。不必再引入一个可观测性供应商。

### [Helicone](https://github.com/Helicone/helicone)
`TypeScript` · `Apache-2.0`

面向 LLM 应用的可观测性平台——一行代理集成、缓存与限流。

- **优势：** 改一下 base URL 就有了日志。本节中启动摩擦最低的一个。

---

## 语音、视觉与多模态

### [Whisper](https://github.com/openai/whisper) / [faster-whisper](https://github.com/SYSTRAN/faster-whisper) / [whisper.cpp](https://github.com/ggml-org/whisper.cpp)
`MIT`

语音转文字：原始模型、CTranslate2 移植版（显著更快），以及 C++ 移植版（哪都能跑）。

- **替代：** Google Speech-to-Text、AssemblyAI
- **优势：** 在自己硬件上免费运行的顶尖多语种 ASR。`whisper.cpp` 能在笔记本 CPU 上做实时转写。

### [WhisperX](https://github.com/m-bain/whisperX)
`Python` · `BSD-2-Clause`

在 Whisper 基础上加上词级时间戳与说话人分离。

- **优势：** 如果你需要知道*谁*在*什么时候*说了*什么*——字幕、会议记录——选它。

### [Kokoro](https://github.com/hexgrad/kokoro) / [Piper](https://github.com/OHF-Voice/piper1-gpl)
`Apache-2.0` / `GPL-3.0`

文字转语音。Kokoro 是一个小模型（约 82M 参数），质量远超其体量；Piper 则针对树莓派这类小设备做了优化。

- **替代：** ElevenLabs
- **优势：** CPU 上的实时 TTS。Kokoro 体积极小，因此可以直接打包进应用内部。

### [Pipecat](https://github.com/pipecat-ai/pipecat)
`Python` · 库

用于实时语音与多模态对话智能体的框架。

- **替代：** Vapi、Retell
- **优势：** 在 WebRTC 之上提供可插拔的 STT/TTS/LLM 环节，并支持语音到语音模型，让你用开源组件拼出语音智能体，而不是去租一个平台。**已知弱点：** 项目自己的 issue 列表就记录了流水线卡死、超时后仍在运行的"僵尸"函数调用处理器，以及生产环境里数秒级的延迟。线性流水线模型也不适合多方对话。请准备好投入真实的工程量。

### [LiveKit Agents](https://github.com/livekit/agents)
`Python + Node` · `Apache-2.0` · 框架

构建在 LiveKit WebRTC 基础设施之上的实时智能体框架。

- **替代：** Vapi、Retell
- **优势：** 房间/参与者模型天然处理多方通话与打断，而线性流水线只能勉强模拟。如果你的语音智能体需要不止一个人在场，就从这里开始，而不是从流水线框架开始。

### [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
`Python` · `GPL-3.0`

面向扩散模型的节点式界面——图像、视频与音频生成流水线。

- **替代：** Midjourney、DALL·E
- **优势：** 图本身就是程序——每一步都可检查、可复现，工作流以 JSON 形式分享。几乎每个新出的开源图像/视频模型，几天内就能支持。

### [Surya](https://github.com/datalab-to/surya)
`Python` · `GPL-3.0`（有商业例外条款）

支持 90+ 语言的文档 OCR、版面分析与阅读顺序检测。

- **优势：** 不只是识别字符，还给出版面、阅读顺序和表格结构。任何文档类 RAG 的必备上游。

---

## 低代码 / 可视化搭建

### [n8n](https://github.com/n8n-io/n8n)
`TypeScript` · `Sustainable Use License`（fair-code，source-available）

带原生 AI 智能体节点的工作流自动化——数百个集成，可自托管。

- **替代：** Zapier、Make
- **优势：** 可视化编排不够用时，可以在任意节点里落到 JavaScript。AI 智能体节点让它成为真正的智能体运行时，而不只是"触发-动作"工具。**注意：** fair-code，非 OSI 开源——商用前请先读许可证。

### [Flowise](https://github.com/FlowiseAI/Flowise)
`TypeScript` · `Apache-2.0`（附条件）

面向 LLM 流程与智能体的拖拽式搭建器。

- **优势：** 把一个 RAG 聊天机器人可视化地原型出来、并作为 API 或可嵌入组件发布，这是最快的路径。

### [Langflow](https://github.com/langflow-ai/langflow)
`Python` · `MIT`

构建多智能体与 RAG 应用的可视化框架。

- **优势：** 每个可视化组件都对应真实的 Python 代码，可导出并完全掌控。是原型与生产代码之间的一座好桥。

---

## 开源替代速查表

| 你在为什么付费 | 改用 |
|---|---|
| GitHub Copilot | [Continue](https://github.com/continuedev/continue)、[Tabby](https://github.com/TabbyML/tabby)、[aider](https://github.com/Aider-AI/aider) |
| Cursor / Windsurf | [Cline](https://github.com/cline/cline)、[OpenCode](https://github.com/sst/opencode)、[Kilo Code](https://github.com/Kilo-Org/kilocode) |
| Devin | [OpenHands](https://github.com/All-Hands-AI/OpenHands)、[Goose](https://github.com/block/goose)、[SWE-agent](https://github.com/SWE-agent/SWE-agent) |
| Claude Design / Figma Make | [Open Design](https://github.com/nexu-io/open-design) |
| ChatGPT 桌面版 / Copilot 助手 | [OpenClaw](https://github.com/openclaw/openclaw)、[Hermes Agent](https://github.com/NousResearch/hermes-agent) |
| Bolt.new / v0 / Lovable | [bolt.diy](https://github.com/stackblitz-labs/bolt.diy)、[OpenUI](https://github.com/wandb/openui)、[Dyad](https://github.com/dyad-sh/dyad) |
| ChatGPT Plus / Claude Pro | [Open WebUI](https://github.com/open-webui/open-webui)、[LibreChat](https://github.com/danny-avila/LibreChat)、[Jan](https://github.com/menloresearch/jan) |
| OpenAI API（推理） | [vLLM](https://github.com/vllm-project/vllm)、[Ollama](https://github.com/ollama/ollama)、[LocalAI](https://github.com/mudler/LocalAI)、[SGLang](https://github.com/sgl-project/sglang) |
| OpenAI Assistants API | [Letta](https://github.com/letta-ai/letta)、[Dify](https://github.com/langgenius/dify) |
| Pinecone | [Qdrant](https://github.com/qdrant/qdrant)、[pgvector](https://github.com/pgvector/pgvector)、[Chroma](https://github.com/chroma-core/chroma) |
| LangSmith | [Langfuse](https://github.com/langfuse/langfuse)、[Phoenix](https://github.com/Arize-ai/phoenix) |
| OpenRouter | [LiteLLM](https://github.com/BerriAI/litellm) 代理 |
| ElevenLabs | [Kokoro](https://github.com/hexgrad/kokoro)、[Piper](https://github.com/OHF-Voice/piper1-gpl) |
| AssemblyAI / Deepgram | [faster-whisper](https://github.com/SYSTRAN/faster-whisper)、[WhisperX](https://github.com/m-bain/whisperX) |
| Midjourney / DALL·E | [ComfyUI](https://github.com/comfyanonymous/ComfyUI) |
| Zapier / Make | [n8n](https://github.com/n8n-io/n8n) |
| Vapi / Retell | [LiveKit Agents](https://github.com/livekit/agents)、[Pipecat](https://github.com/pipecat-ai/pipecat) |
| Cohere Embed / Rerank | [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding) |
| Browserbase / Stagehand | [browser-use](https://github.com/browser-use/browser-use)、[Skyvern](https://github.com/Skyvern-AI/skyvern) |
| OpenAI GPTs 平台 | [Dify](https://github.com/langgenius/dify)、[Flowise](https://github.com/FlowiseAI/Flowise) |

---

## 如何选择你的技术栈

从小处起步。下面每一层，在真正需要之前都是可选的。

**独立开发者，本地优先，零 API 成本**
```
Ollama → Continue（编辑器）+ aider（终端）→ Open WebUI（对话）
```

**做产品的小团队**
```
LiteLLM 代理 → LangGraph 或 CrewAI → pgvector → Langfuse → CI 里的 promptfoo
```

**企业、自托管、合规刚性要求**
```
vLLM（自有 GPU）→ LiteLLM（密钥/预算）→ Qdrant → Dify 或 LangGraph
  → Langfuse（追踪）→ Garak + NeMo Guardrails（安全）
```

**文档密集型 RAG**
```
Docling 或 RAGFlow（解析）→ LlamaIndex（检索）→ Qdrant → Ragas（评测）
```

最省时间的三条规则：

1. **第一天就在模型前面放一个网关。** LiteLLM 只花你一个下午，却永久换来供应商切换、预算和故障转移能力。
2. **在你量化出理由之前，就用 Postgres + pgvector。** 大多数"我们需要向量数据库"的问题，本质上是检索质量问题。
3. **先加追踪，再加功能。** 在没有 trace 的多智能体系统里调试，等于靠猜。

---

## 参与贡献

欢迎提 PR，详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

收录门槛：

- OSI 认可的许可证（source-available 工具可以收录，但必须标注）
- 有实质维护——最近 6 个月内有提交
- 解决开发者真实存在的问题
- 条目要说明*为什么选它*，而不只是它做什么

> **说明：** 英文版为准。本译文若与英文版冲突，以英文版为准。参见 [TRANSLATIONS.md](TRANSLATIONS.md)。

## 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](LICENSE)

在法律允许的范围内，贡献者已放弃对本作品的一切著作权及相关权利。
