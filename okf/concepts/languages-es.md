---
type: concept
title: "Awesome Open AI Developer Tools"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/languages/es/"
path: /languages/es/
updated: 2026-08-09
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-08-09T08:33:30.568Z"
---
# Awesome Open AI Developer Tools

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**Guía curada del stack de IA de código abierto — capa por capa, y qué producto de pago reemplaza cada pieza.**

Agentes de código · inferencia local · frameworks de agentes · bases de datos vectoriales · RAG · evaluación · observabilidad

[English](../index.md) · [Türkçe](./tr.md) · [简体中文](./zh.md) · **Español** · [añade tu idioma](../community/translations.md) · [🌐 Sitio web](https://sami-uysal.github.io/awesome-open-ai-developer-tools/)


---

Cada entrada responde tres preguntas:

1. **¿Qué hace?**
2. **¿Qué producto propietario reemplaza?**
3. **¿Por qué elegirla frente a las alternativas?**

Cada entrada también lleva una insignia de madurez: 🟢 stable (lista para producción) · 🟡 active (funciona genial, cambia rápido) · 🟠 experimental (etapa temprana, espera asperezas).

Sin enlaces de afiliado. Sin puestos patrocinados. Solo licencias aprobadas por la OSI — las herramientas *source-available* pueden aparecer, pero se etiquetan como tales.

> **Sobre las licencias:** la licencia que aparece en una entrada es una orientación, no una garantía — los proyectos cambian de licencia y esta lista va por detrás. Lee el archivo `LICENSE` del repositorio antes de depender de una herramienta comercialmente. Las entradas sin licencia indicada son las que no hemos confirmado.

---

## Contenido

- [Agentes de código y programación en pareja](#agentes-de-código-y-programación-en-pareja)
- [Generadores de prompt a aplicación](#generadores-de-prompt-a-aplicación)
- [Agentes autónomos y persistentes](#agentes-autónomos-y-persistentes)
- [Sandboxes de agentes y control del navegador](#sandboxes-de-agentes-y-control-del-navegador)
- [Frameworks de agentes y orquestación](#frameworks-de-agentes-y-orquestación)
- [Model Context Protocol (MCP)](#model-context-protocol-mcp)
- [Motores de inferencia local](#motores-de-inferencia-local)
- [Servidores de inferencia y pasarelas](#servidores-de-inferencia-y-pasarelas)
- [Interfaces de chat](#interfaces-de-chat)
- [Bases de datos vectoriales](#bases-de-datos-vectoriales)
- [Embeddings y rerankers](#embeddings-y-rerankers)
- [Frameworks de RAG](#frameworks-de-rag)
- [Fine-tuning y entrenamiento](#fine-tuning-y-entrenamiento)
- [Evaluación, pruebas y guardarraíles](#evaluación-pruebas-y-guardarraíles)
- [Observabilidad y LLMOps](#observabilidad-y-llmops)
- [Voz, visión y multimodal](#voz-visión-y-multimodal)
- [Low-code / constructores visuales](#low-code--constructores-visuales)
- [Tabla de alternativas de código abierto](#tabla-de-alternativas-de-código-abierto)
- [Cómo elegir tu stack](#cómo-elegir-tu-stack)
- [Contribuir](#contribuir)

---

## Agentes de código y programación en pareja

Agentes que leen, escriben y refactorizan el código de tu repositorio.

### [aider](https://github.com/Aider-AI/aider)
`Python` · `Apache-2.0` · CLI · 🟡 active

Programación en pareja con IA desde la terminal. Mapea todo el repositorio, edita archivos directamente y escribe sus propios commits de git.

- **Reemplaza:** GitHub Copilot, Cursor
- **Backends:** más de 100 modelos vía LiteLLM — Claude, GPT, Gemini, además de modelos locales a través de Ollama o cualquier endpoint compatible con OpenAI
- **Ventaja:** el mapa del repositorio le da contexto de todo el código sin meter cada archivo en el prompt. Los commits automáticos convierten cada edición de la IA en un punto de control reversible. Es agnóstico al editor: funciona junto a VS Code, Neovim, Emacs o nada en absoluto.

### [OpenCode](https://github.com/sst/opencode)
`TypeScript` · `MIT` · TUI · 🟢 stable

Agente de código nativo de terminal con integración LSP: carga el servidor de lenguaje adecuado para que el modelo vea información de tipos real, no suposiciones.

- **Reemplaza:** Claude Code, Cursor
- **Backends:** Anthropic, OpenAI, Google, modelos locales; agnóstico al proveedor por diseño
- **Ventaja:** las sugerencias apoyadas en LSP reducen las APIs inventadas. La separación cliente/servidor permite conducir una misma sesión desde varios clientes.

### [Cline](https://github.com/cline/cline)
`TypeScript` · `Apache-2.0` · Extensión de VS Code · 🟢 stable

Agente de código autónomo dentro de VS Code. Planifica, edita archivos, ejecuta comandos de terminal y usa el navegador — pidiendo permiso en cada paso.

- **Reemplaza:** Cursor Composer, Devin
- **Backends:** Anthropic, OpenAI, Google, AWS Bedrock, Azure, OpenRouter, Ollama, LM Studio
- **Ventaja:** humano en el bucle por defecto — cada diff y cada comando de shell requieren aprobación. La separación de modos Plan/Act evita que el agente arrase con el código.

### [Continue](https://github.com/continuedev/continue)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains · 🟢 stable

Construye tu propio asistente de código con IA — autocompletado, chat y edición, configurados con tus modelos y tus fuentes de contexto.

- **Reemplaza:** GitHub Copilot
- **Backends:** cualquiera — local (Ollama, llama.cpp) o en la nube
- **Ventaja:** fuentes de contexto totalmente configurables (documentación, terminal, git diff, código). El autocompletado funciona bien con modelos locales pequeños, así que puedes trabajar realmente sin conexión.

### [OpenHands](https://github.com/All-Hands-AI/OpenHands)
`Python` · `MIT` · Web + headless · 🟢 stable

Agentes que hacen lo que hace un desarrollador — modificar código, ejecutar comandos, navegar por la web, llamar APIs — dentro de un runtime aislado.

- **Reemplaza:** Devin
- **Backends:** todo lo que soporte LiteLLM
- **Ventaja:** ejecución realmente aislada (Docker), no un chat que finge ejecutar cosas. Los modos headless y CLI lo hacen scriptable en CI.

### [SWE-agent](https://github.com/SWE-agent/SWE-agent)
`Python` · `MIT` · CLI · 🟡 active

Agente de nivel investigación que convierte un issue de GitHub en un pull request.

- **Reemplaza:** Devin, bots de issue a PR
- **Ventaja:** lo importante es la interfaz agente-computadora (ACI): unas herramientas bien diseñadas superan a un modelo más grande. Si vas a construir tu propio agente, lee este código primero.

### [Goose](https://github.com/block/goose)
`Rust` · `Apache-2.0` · CLI + escritorio · 🟢 stable

Agente autónomo y extensible creado por Block, ahora bajo gobernanza de la Linux Foundation. Instala, ejecuta, edita y prueba — no solo sugiere.

- **Reemplaza:** Devin, el modo agente de Cursor
- **Backends:** cualquier proveedor, además de soporte nativo de extensiones MCP
- **Ventaja:** más autónomo que aider: planifica e itera con menos supervisión. La gobernanza neutral bajo la Linux Foundation elimina el riesgo de cambio de licencia, algo que importa en una herramienta que vas a estandarizar en un equipo.

### [Kilo Code](https://github.com/Kilo-Org/kilocode)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains · 🟢 stable

Agente de IDE de código abierto que fusionó lo mejor de Roo Code y Cline en una sola extensión.

- **Reemplaza:** Cursor, Windsurf
- **Ventaja:** el modo Orchestrator divide una tarea grande en subtareas atendidas por modos especializados. Absorbe funcionalidades de ambos proyectos de origen, así que avanza más rápido de lo que avanzaba cada uno por separado.

### [Tabby](https://github.com/TabbyML/tabby)
`Rust` · `Apache-2.0` · Autoalojado · 🟢 stable

Asistente de código autoalojado con su propio servidor de inferencia, sin llamadas a APIs externas.

- **Reemplaza:** GitHub Copilot (empresarial)
- **Ventaja:** funciona con GPUs de consumo, ofrece interfaz OpenAPI y responde a la pregunta de cumplimiento ("¿a dónde va nuestro código?") con "a ninguna parte".

### [gpt-engineer](https://github.com/gpt-engineer-org/gpt-engineer)
`Python` · `MIT` · CLI · 🟠 experimental

Describe un proyecto en lenguaje natural; escribe e itera todo el código.

- **Ventaja:** mejor para levantar un esqueleto desde cero que para ediciones quirúrgicas en un repositorio existente.

---

## Generadores de prompt a aplicación

Entra un prompt, sale una aplicación full-stack desplegable.

### [bolt.diy](https://github.com/stackblitz-labs/bolt.diy)
`TypeScript` · `MIT` · 🟢 stable

Fork oficial de código abierto de Bolt.new. Escribe el prompt, ejecuta, edita y despliega aplicaciones web full-stack desde el navegador — con el LLM que elijas.

- **Reemplaza:** Bolt.new, v0, Replit Agent
- **Backends:** OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek, xAI, Ollama, LM Studio, OpenRouter y cualquier endpoint compatible con OpenAI
- **Ventaja:** autoalojable y con cero telemetría. Cambiar de proveedor a mitad de proyecto te permite empezar con un modelo barato y subir de nivel solo donde hace falta.

### [Open Design](https://github.com/nexu-io/open-design)
`TypeScript` · `Apache-2.0` · Escritorio + web · 🟠 experimental

Convierte el agente de código que ya usas en un motor de diseño — prototipos, landing pages, dashboards, presentaciones, imágenes y vídeo, exportables a HTML/PDF/PPTX/MP4.

- **Reemplaza:** Claude Design, Figma Make
- **Backends:** BYOK con el agente que tengas en el PATH — Claude Code, Codex, Cursor, Gemini, OpenCode, Qwen y más de 20 CLIs
- **Ventaja:** incluye una amplia biblioteca de sistemas de diseño de calidad de marca, y cada render lee un contrato de marca `DESIGN.md`, así que el resultado es coherente y no de estilo aleatorio. Local-first: tus activos de marca no salen de la máquina.

### [OpenUI](https://github.com/wandb/openui)
`Python + TypeScript` · `Apache-2.0` · 🟡 active

Describe una interfaz, mírala renderizarse en vivo y conviértela a React/Svelte/Vue.

- **Reemplaza:** v0.dev
- **Ventaja:** bucle de iteración en vivo — describe el cambio y lo ves al instante. Funciona con modelos locales vía Ollama.

### [Dyad](https://github.com/dyad-sh/dyad)
`TypeScript` · `Apache-2.0` · Escritorio · 🟢 stable

Constructor de aplicaciones con IA, local y de código abierto. Se ejecuta en tu máquina con tus propias claves de API.

- **Reemplaza:** Lovable, v0, Bolt
- **Ventaja:** sin dependencia de un proveedor y sin que tu código dé una vuelta por la nube.

---

## Agentes autónomos y persistentes

Agentes de larga duración con memoria, objetivos y autonomía.

### [OpenClaw](https://github.com/openclaw/openclaw)
`TypeScript` · `MIT` · 🟡 active

Asistente personal de IA autoalojado que corre en cualquier sistema operativo y te alcanza en cualquier plataforma. Uno de los proyectos de código abierto de crecimiento más rápido de la historia.

- **Reemplaza:** ChatGPT de escritorio, Claude Desktop, Microsoft Copilot
- **Backends:** cualquier API compatible con OpenAI, Ollama, LocalAI
- **Ventaja:** pasarelas a Telegram, Discord, Slack, WhatsApp, Signal, email y CLI, de modo que el agente te encuentra donde ya estás — y puede escribirte *él* a ti. Gran ecosistema de habilidades y plugins. **Nota de seguridad:** guarda credenciales de tus cuentas de mensajería y opera de forma autónoma; aíslalo y estudia su modelo de permisos antes de apuntarlo a algo sensible.

### [Hermes Agent](https://github.com/NousResearch/hermes-agent)
`Python` · `MIT` · 🟡 active

El agente que se automejora de Nous Research — memoria persistente, habilidades reutilizables, tareas programadas y más de 20 superficies de mensajería.

- **Reemplaza:** OpenAI Operator, Claude Desktop
- **Ventaja:** bucle de aprendizaje cerrado: crea habilidades a partir de la experiencia, las refina al usarlas y conserva memoria e historial de sesión en SQLite entre reinicios. Corre en un VPS barato o en serverless sin coste en reposo.

### [DeerFlow](https://github.com/bytedance/deer-flow)
`Python` · `MIT` · 🟡 active

El harness de "SuperAgent" de largo horizonte de ByteDance — sandboxes, memoria, habilidades, subagentes y pasarela de mensajes para tareas que duran de minutos a horas.

- **Ventaja:** está construido sobre LangGraph, pero entrega el runtime completo que un agente realmente necesita (sistema de archivos, memoria, ejecución aislada, creación de subagentes) en lugar de dejarte ensamblarlo. Llegó al número 1 de GitHub Trending con la versión 2.0.

### [Open-Sable](https://github.com/IdeoaLabs/Open-Sable)
`Python` · Framework de agentes local-first · 🟡 active

Agente autónomo con subsistemas cognitivos de inspiración AGI — objetivos, memoria de trabajo/episódica/a largo plazo, metacognición y uso de herramientas.

- **Ventaja:** funciona con Ollama primero y respaldo en la nube, con modo de baja VRAM, así que corre de verdad en tu propio hardware. El decaimiento y la consolidación de memoria, más un supervisor watchdog con recarga en caliente, hacen que la operación 24/7 sea realista y no una aspiración.

### [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
`Python + TypeScript` · MIT (agente clásico) / Polyform Shield (plataforma) · 🟢 stable

El proyecto que inició la ola de agentes autónomos, hoy una plataforma low-code para construir agentes de ejecución continua.

- **Ventaja:** constructor visual por bloques y una biblioteca de agentes ya hechos. Ojo con la división de licencias: el agente clásico es MIT, la plataforma nueva es source-available, no OSI.

### [Letta](https://github.com/letta-ai/letta)
`Python` · `Apache-2.0` · 🟢 stable

Antes conocido como MemGPT. Agentes con estado y memoria real a largo plazo — el agente gestiona su propia ventana de contexto, paginando recuerdos dentro y fuera.

- **Reemplaza:** OpenAI Assistants API
- **Ventaja:** la memoria es un concepto de primera clase respaldado por una base de datos, no un parche encima de una búsqueda vectorial. Los agentes sobreviven entre sesiones y son portables entre modelos.

### [Mem0](https://github.com/mem0ai/mem0)
`Python + TypeScript` · `Apache-2.0` · 🟢 stable

Capa de memoria que puedes enchufar a cualquier agente: extrae, guarda y recupera hechos sobre el usuario a lo largo de las sesiones.

- **Ventaja:** agnóstica al framework. El almacén híbrido vectorial + grafo funciona mucho mejor que volcar el historial de chat en una base vectorial.

### [Khoj](https://github.com/khoj-ai/khoj)
`Python` · `AGPL-3.0` · 🟢 stable

IA personal autoalojada que busca en tus notas, documentos y la web; accesible desde el navegador, Obsidian y Emacs.

- **Reemplaza:** ChatGPT con memoria, Notion AI
- **Ventaja:** indexa *tu* archivo en local. Funciona completamente sin conexión con modelos locales.

---

## Sandboxes de agentes y control del navegador

Dónde se ejecuta realmente el código que genera un agente, y cómo los agentes tocan la web.

### [E2B](https://github.com/e2b-dev/E2B)
`TypeScript + Go` · `Apache-2.0` · SDK + infraestructura autoalojable · 🟢 stable

Sandboxes seguros en la nube para ejecutar código generado por IA, construidos sobre microVMs de Firecracker.

- **Reemplaza:** backends propietarios de intérprete de código
- **Ventaja:** el aislamiento por microVM da a cada sandbox su propio kernel — una frontera de seguridad real, no solo un namespace de contenedor. Esa distinción importa en cuanto ejecutas código escrito por un modelo. SDKs de Python y JS, y [e2b-dev/infra](https://github.com/e2b-dev/infra) si necesitas levantar la plataforma entera por tu cuenta.

### [Daytona](https://github.com/daytonaio/daytona)
`Go + TypeScript` · `Apache-2.0` · Servidor + SDK · 🟠 experimental

Runtime de sandboxes para agentes con arranques rápidos desde pool caliente y sistemas de archivos que persisten entre sesiones.

- **Reemplaza:** E2B (cuando necesitas persistencia más que aislamiento fuerte)
- **Ventaja:** los sandboxes pueden pausarse, reanudarse y sobrevivir a una sola sesión, que es justo lo que necesitan los agentes de largo horizonte. Está basado en contenedores, no en microVMs, así que trata su aislamiento como más débil que el de E2B: bien para tu propio código, piénsalo dos veces con entrada realmente no confiable.

### [browser-use](https://github.com/browser-use/browser-use)
`Python` · `MIT` · Librería · 🟡 active

Conecta un LLM a un navegador real para que navegue, rellene formularios y extraiga datos.

- **Reemplaza:** Stagehand, MultiOn
- **Ventaja:** el agente de navegador abierto más usado, con manejo de múltiples pestañas y respaldo visual cuando el DOM no basta. **Debilidad conocida:** no es determinista — el mismo objetivo toma caminos distintos en ejecuciones distintas, lo que hace difícil reproducir los fallos, y las llamadas de visión en páginas complejas salen caras. Presupuesta reintentos y pon un tope de gasto.

### [Skyvern](https://github.com/Skyvern-AI/skyvern)
`Python` · `AGPL-3.0` · Librería + servidor · 🟢 stable

Automatización de navegador guiada por visión por computador en lugar de selectores del DOM.

- **Reemplaza:** Stagehand, suites frágiles de scraping con Playwright
- **Ventaja:** como navega visualmente, un rediseño del sitio no rompe tus selectores — el motivo habitual por el que se pudren los pipelines de scraping. **Revisa la licencia:** AGPL-3.0, y las piezas anti-bot quedan reservadas para la nube de pago. Esa combinación descarta algunos usos comerciales.

---

## Frameworks de agentes y orquestación

Librerías para construir sistemas multiagente y de uso de herramientas.

### [LangGraph](https://github.com/langchain-ai/langgraph)
`Python + JS` · `MIT` · 🟢 stable

Construye agentes como grafos con estado — nodos, aristas y control de flujo explícito, con checkpoints e interrupciones para intervención humana.

- **Ventaja:** ejecución duradera: un agente puede pausarse durante horas esperando una aprobación humana y retomar con todo su estado. La elección correcta cuando necesitas un agente *fiable*, no una demo.

### [CrewAI](https://github.com/crewAIInc/crewAI)
`Python` · `MIT` · 🟢 stable

Agentes autónomos con roles que colaboran — un "equipo" con roles, objetivos y tareas definidos.

- **Reemplaza:** AutoGen, OpenAI Swarm
- **Ventaja:** independiente de LangChain y con un runtime ligero. La abstracción rol/tarea es la puerta de entrada más intuitiva al diseño multiagente. Cuando los equipos quedan demasiado sueltos, Flows aporta control por eventos.

### [AutoGen](https://github.com/microsoft/autogen)
`Python + .NET` · `MIT` · 🟢 stable

El framework de conversación multiagente de Microsoft — los agentes hablan entre sí, ejecutan código e incorporan a personas.

- **Ventaja:** núcleo asíncrono orientado a eventos, con runtime distribuido y soporte multilenguaje. AutoGen Studio ofrece una interfaz de prototipado sin código.

### [smolagents](https://github.com/huggingface/smolagents)
`Python` · `Apache-2.0` · 🟢 stable

La librería de agentes minimalista de Hugging Face — la lógica central ronda las mil líneas.

- **Ventaja:** el camino más corto a un bucle de agente funcionando. Los code agents escriben acciones en Python en vez de emitir llamadas de herramienta en JSON, lo que resulta mediblemente más fiable en tareas de varios pasos. Se lee entero en una tarde.

### [Google ADK](https://github.com/google/adk-python)
`Python + Java` · `Apache-2.0` · 🟢 stable

Kit *code-first* para construir, evaluar y desplegar sistemas multiagente.

- **Ventaja:** pese al nombre de Google, es agnóstico al modelo y al entorno de despliegue. La evaluación integrada y la UI de desarrollo local cierran el hueco que casi todos los frameworks ignoran: "¿cómo sé si mi agente ha empeorado?".

### [Pydantic AI](https://github.com/pydantic/pydantic-ai)
`Python` · `MIT` · 🟢 stable

Framework de agentes del equipo de Pydantic — seguro en tipos, salidas estructuradas, inyección de dependencias.

- **Ventaja:** si ya confías en Pydantic para validar, esto lleva el mismo rigor a la entrada y salida del LLM. Se siente como FastAPI para agentes.

### [DSPy](https://github.com/stanfordnlp/dspy)
`Python` · `MIT` · 🟢 stable

Programa los LLM en lugar de escribirles prompts — declara módulos y deja que los optimizadores compilen los prompts.

- **Ventaja:** sustituye el retoque manual de prompts por optimización sistemática contra una métrica. Cambias de modelo, recompilas y mantienes la calidad.

### [LiteLLM](https://github.com/BerriAI/litellm)
`Python` · `MIT` · 🟢 stable

Una única interfaz compatible con OpenAI para más de 100 proveedores de LLM, más un proxy con claves, presupuestos, límites de tasa y failover.

- **Reemplaza:** OpenRouter (versión gestionada)
- **Ventaja:** la pieza de fontanería más útil de todo el stack. ¿Se cae un proveedor? Failover automático. Los presupuestos por equipo y el seguimiento de gasto vienen de regalo.

### [Haystack](https://github.com/deepset-ai/haystack)
`Python` · `Apache-2.0` · 🟢 stable

Framework orientado a producción para pipelines componibles de RAG y agentes.

- **Ventaja:** grafos de pipeline explícitos e inspeccionables. Ecosistema fuerte de retrievers y rankers — el favorito cuando lo difícil es la calidad de la búsqueda.

---

## Model Context Protocol (MCP)

El estándar emergente para conectar modelos con herramientas y datos.

### [Especificación MCP](https://github.com/modelcontextprotocol/modelcontextprotocol)
`MIT` · 🟢 stable

El protocolo en sí — estándar abierto para exponer herramientas, recursos y prompts a cualquier cliente de LLM.

- **Ventaja:** escribes la integración una vez y la usa cualquier cliente compatible con MCP (Claude Code, OpenCode, Cline, Continue y más).

### [Servidores MCP](https://github.com/modelcontextprotocol/servers)
`MIT` · 🟡 active

Implementaciones de referencia — sistema de archivos, git, fetch, memoria y decenas de servidores de la comunidad.

- **Ventaja:** la forma más rápida de aprender el protocolo es leer un servidor de 200 líneas que ya funciona.

### [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
`TypeScript` · `MIT` · 🟡 active

Herramienta oficial para probar y depurar servidores MCP.

- **Ventaja:** te muestra el tráfico real del protocolo — llamadas a herramientas, recursos, errores — en lugar de dejarte adivinando por qué un cliente no carga tu servidor. Lo primero a lo que recurrir cuando una integración MCP no hace nada en silencio.

### [FastMCP](https://github.com/jlowin/fastmcp)
`Python` · `Apache-2.0` · 🟡 active

La manera cómoda de escribir servidores y clientes MCP — basada en decoradores, al estilo de FastAPI.

- **Ventaja:** un servidor funcionando en unas 10 líneas. Se encarga de la autenticación, el despliegue, el proxying y la composición de servidores.

---

## Motores de inferencia local

Ejecuta modelos en tu propio hardware.

### [Ollama](https://github.com/ollama/ollama)
`Go` · `MIT` · 🟢 stable

Descarga y ejecuta modelos abiertos con un solo comando. La puerta de entrada por defecto a los LLM locales.

- **Reemplaza:** OpenAI API (para cargas locales)
- **Ventaja:** `ollama run <modelo>` y listo — se ocupa de la descarga, la cuantización, la descarga a GPU y de servir una API compatible con OpenAI. Tiene la mayor biblioteca de modelos y el soporte de herramientas más amplio de todos los runtimes locales.

### [llama.cpp](https://github.com/ggml-org/llama.cpp)
`C/C++` · `MIT` · 🟢 stable

El motor de inferencia sobre el que está construida la mayoría del tooling local. Ejecuta LLMs en CPU, CUDA, Metal, ROCm, Vulkan y más.

- **Ventaja:** portabilidad extrema — un portátil, una Raspberry Pi, un Mac Studio, una granja de servidores. La cuantización GGUF es la razón por la que un modelo grande cabe en hardware de consumo.

### [Jan](https://github.com/menloresearch/jan)
`TypeScript` · `AGPL-3.0` · Escritorio · 🟢 stable

Alternativa offline a ChatGPT que se ejecuta enteramente en tu máquina.

- **Reemplaza:** ChatGPT de escritorio, LM Studio (que solo es parcialmente abierto)
- **Ventaja:** experiencia de escritorio totalmente abierta, almacenamiento de datos local-first y un servidor local compatible con OpenAI opcional.

### [MLC LLM](https://github.com/mlc-ai/mlc-llm)
`Python + C++` · `Apache-2.0` · 🟢 stable

Motor universal de despliegue de LLMs — aceleración GPU nativa en iOS, Android, escritorio y navegador.

- **Reemplaza:** Ollama (en móvil), inferencia en la nube para apps en dispositivo
- **Ventaja:** la única vía seria para ejecutar un LLM sobre la GPU de un teléfono. **Debilidad conocida:** el soporte de modelos se limita a lo que se haya compilado para ese destino, y cuando falla la compilación o la inferencia los errores son opacos.

### [WebLLM](https://github.com/mlc-ai/web-llm)
`TypeScript` · `Apache-2.0` · 🟢 stable

Inferencia de LLM enteramente en el navegador mediante WebGPU.

- **Ventaja:** sin servidor, sin API key y sin que los datos salgan de la pestaña — lo que hace posible toda una categoría de aplicaciones sensibles a la privacidad. **Debilidad conocida:** requiere WebGPU, así que el soporte en Safari y Firefox es el factor limitante, y los errores de "device lost" por falta de memoria son comunes en GPUs modestas.

### [llamafile](https://github.com/Mozilla-Ocho/llamafile)
`C/C++` · `Apache-2.0` · 🟢 stable

Distribuye un LLM entero como un único ejecutable que corre en varios sistemas operativos sin instalación.

- **Ventaja:** insuperable para entregar un modelo a alguien sin perfil técnico. Un archivo. Doble clic. Ya está.

---

## Servidores de inferencia y pasarelas

Servir modelos a escala.

### [vLLM](https://github.com/vllm-project/vllm)
`Python + CUDA` · `Apache-2.0` · 🟢 stable

Motor de inferencia y servicio de alto rendimiento y eficiente en memoria — el estándar de facto para servir LLMs en producción de forma autoalojada.

- **Reemplaza:** OpenAI API, Together AI
- **Ventaja:** PagedAttention más batching continuo dan mejoras de rendimiento de un orden de magnitud frente al servicio ingenuo. El paralelismo de tensores y de pipeline escala entre GPUs, y la API compatible con OpenAI hace que los clientes no cambien ni una línea.

### [SGLang](https://github.com/sgl-project/sglang)
`Python` · `Apache-2.0` · 🟢 stable

Framework de servicio rápido con caché de prefijos RadixAttention y un lenguaje de generación estructurada.

- **Ventaja:** gana en cargas con muchos prefijos compartidos (agentes, few-shot, conversaciones de varios turnos), donde la reutilización de la caché de prefijos manda. Excelente soporte de decodificación restringida.

### [LocalAI](https://github.com/mudler/LocalAI)
`Go` · `MIT` · 🟢 stable

Sustituto directo de la API de OpenAI que corre en local sobre muchos backends y modalidades — texto, imagen, audio, embeddings.

- **Reemplaza:** OpenAI API, ElevenLabs API
- **Ventaja:** un solo servidor, muchos backends (llama.cpp, vLLM, transformers, whisper, diffusers). No requiere GPU. Apunta tu SDK de OpenAI existente hacia él y no cambies nada más.

### [Text Generation Inference](https://github.com/huggingface/text-generation-inference)
`Rust + Python` · `Apache-2.0` · 🟢 stable

El stack de servicio en producción de Hugging Face — el motor detrás de sus inference endpoints.

- **Ventaja:** servidor web en Rust probado en batalla, streaming de tokens e integración estrecha con el ecosistema HF.

### [Ray](https://github.com/ray-project/ray)
`Python` · `Apache-2.0` · 🟢 stable

Framework de computación distribuida para escalar cargas de IA — entrenamiento, tuning y servicio multimodelo con Ray Serve.

- **Ventaja:** entra en juego cuando "un modelo en una máquina" ya no es el problema. Composición de modelos y autoescalado en todo un clúster.

---

## Interfaces de chat

### [Open WebUI](https://github.com/open-webui/open-webui)
`Python + Svelte` · `BSD-3-Clause` (con cláusula de marca) · 🟢 stable

Interfaz de IA autoalojada y muy completa — la UI por defecto para Ollama y backends compatibles con OpenAI.

- **Reemplaza:** ChatGPT Plus, Claude Pro
- **Ventaja:** multiusuario con RBAC, RAG integrado sobre documentos subidos, búsqueda web, generación de imágenes, voz y un sistema de plugins de funciones/pipelines en Python. Funciona totalmente sin conexión.

### [LibreChat](https://github.com/danny-avila/LibreChat)
`TypeScript` · `MIT` · 🟢 stable

Todos los proveedores de IA en una sola interfaz pulida al estilo de ChatGPT.

- **Reemplaza:** ChatGPT Plus, Poe
- **Ventaja:** varios proveedores en una misma conversación, agentes, intérprete de código, artifacts, soporte de MCP y una autenticación multiusuario realmente buena. Licencia MIT sin restricciones de marca.

### [Lobe Chat](https://github.com/lobehub/lobe-chat)
`TypeScript` · `Apache-2.0` (con condiciones) · 🟢 stable

Framework de chat moderno con ecosistema de plugins y "mercado de agentes".

- **Ventaja:** la opción visualmente más cuidada, con soporte PWA y móvil, y despliegue en Vercel con un clic.

### [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)
`JavaScript` · `MIT` · 🟢 stable

Aplicación todo en uno para escritorio y Docker: chatea con tus documentos, con agentes y espacios de trabajo multiusuario incluidos.

- **Ventaja:** RAG con todo incluido — embedder, base vectorial e interfaz vienen juntos. El camino más corto de "tengo PDFs" a "puedo preguntarles cosas".

---

## Bases de datos vectoriales

### [Qdrant](https://github.com/qdrant/qdrant)
`Rust` · `Apache-2.0` · 🟢 stable

Motor de búsqueda vectorial con filtrado rico por payload, pensado para producción.

- **Reemplaza:** Pinecone
- **Ventaja:** escrito en Rust — latencia predecible bajo carga. La cuantización escalar/producto/binaria reduce drásticamente la RAM. La búsqueda con filtros mantiene la precisión en lugar de degradarse como el pre/post-filtrado ingenuo.

### [Milvus](https://github.com/milvus-io/milvus)
`Go + C++` · `Apache-2.0` · 🟢 stable

Base de datos vectorial distribuida pensada para cargas de miles de millones de vectores.

- **Ventaja:** almacenamiento y cómputo separados, indexación por GPU — la opción más pesada cuando el corpus es realmente enorme. Milvus Lite cubre el desarrollo local.

### [Weaviate](https://github.com/weaviate/weaviate)
`Go` · `BSD-3-Clause` · 🟢 stable

Base vectorial con módulos de vectorización integrados y API GraphQL.

- **Ventaja:** el sistema de módulos genera los embeddings por ti en el momento de la ingesta. Búsqueda híbrida nativa (BM25 + vectorial) y multi-tenancy.

### [Chroma](https://github.com/chroma-core/chroma)
`Rust + Python` · `Apache-2.0` · 🟢 stable

Base de datos de embeddings con todo incluido para aplicaciones de IA.

- **Ventaja:** `pip install chromadb` y tienes un almacén vectorial funcionando en cuatro líneas. El valor por defecto correcto para prototipos; ya escalarás después si hace falta.

### [pgvector](https://github.com/pgvector/pgvector)
`C` · `Licencia PostgreSQL` · 🟢 stable

Búsqueda por similitud vectorial dentro de PostgreSQL.

- **Ventaja:** ninguna infraestructura nueva. Tus embeddings viven junto a los datos relacionales, con transacciones, joins y copias de seguridad de verdad. Empieza aquí salvo que hayas medido una razón para no hacerlo.

### [MongrelDB](https://github.com/visorcraft/MongrelDB)
`Rust` · `MIT OR Apache-2.0` · Embebida + servidor · 🟠 experimental

Base de datos columnar con recuperación nativa de IA — ANN denso, vectores dispersos, texto completo y filtros de metadatos en un único motor transaccional.

- **Reemplaza:** Pinecone + una base de datos operativa separada para RAG/memoria de agentes
- **Ventaja:** no es un almacén vectorial puro — los índices de ANN denso, dispersos y de texto completo comparten un único almacén de filas transaccional, así que la búsqueda híbrida con fusión RRF funciona sin un servicio vectorial aparte, conservando SQL, cifrado en reposo y acceso multiusuario. Complementado por [MongrelDB Viewer](https://github.com/visorcraft/MongrelDB-Viewer) para explorar el esquema, SQL y ANN.

---

## Embeddings y rerankers

La capa donde vive la calidad de recuperación. Cambiar de modelo de embeddings suele rendir más que cambiar de base vectorial.

### [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding)
`Python` · `MIT` · 🟢 stable

La familia BGE — embeddings BGE-M3 y los modelos reranker de BGE.

- **Reemplaza:** OpenAI text-embedding-3, Cohere Embed, Cohere Rerank
- **Ventaja:** BGE-M3 hace recuperación densa, dispersa (léxica) y multivector desde un solo modelo en más de 100 idiomas, así que obtienes búsqueda híbrida sin mantener dos sistemas. BGE-M3 junto a un reranker BGE es el stack abierto de recuperación por defecto, y corre en tu propio hardware sin coste por consulta.

### [Sentence Transformers](https://github.com/UKPLab/sentence-transformers)
`Python` · `Apache-2.0` · 🟢 stable

La librería para calcular, entrenar y hacer fine-tuning de embeddings de texto.

- **Ventaja:** es la interfaz contra la que publica casi todo modelo de embeddings abierto — apréndela una vez y tendrás disponible cualquier modelo de Hugging Face. Hacer fine-tuning de un modelo de embeddings sobre tu propio dominio suele ser la mejora de RAG con mayor retorno, y esto es con lo que se hace.

---

## Frameworks de RAG

### [LlamaIndex](https://github.com/run-llama/llama_index)
`Python + TypeScript` · `MIT` · 🟢 stable

El framework de datos para aplicaciones con LLM — ingesta, indexación, recuperación y flujos de agentes sobre tus datos.

- **Ventaja:** cientos de conectores de datos (LlamaHub) y la biblioteca más profunda de estrategias de recuperación — jerárquica, recursiva, híbrida, auto-merging. Cuando el top-k ingenuo no basta, la solución suele estar ya implementada aquí.

### [RAGFlow](https://github.com/infiniflow/ragflow)
`Python` · `Apache-2.0` · 🟢 stable

Motor de RAG construido sobre comprensión profunda de documentos — parseo consciente del layout en PDFs, tablas y escaneos.

- **Ventaja:** donde de verdad fallan la mayoría de los sistemas RAG es en el parseo de documentos. RAGFlow lo trata como el problema central y te muestra los fragmentos anclados a la cita, para que puedas depurar la recuperación visualmente.

### [Dify](https://github.com/langgenius/dify)
`Python + TypeScript` · `Apache-2.0` (con condiciones) · 🟢 stable

Plataforma lista para producción para flujos con agentes — constructor visual, pipeline de RAG, gestión de modelos y observabilidad en una sola pieza.

- **Reemplaza:** la plataforma de GPTs de OpenAI, Vertex AI Agent Builder
- **Ventaja:** quien no es ingeniero puede construir y publicar una herramienta interna de IA sin tocar código, mientras el equipo técnico conserva acceso por API a todo. Autoalojado, así que los datos se quedan donde están.

### [Docling](https://github.com/docling-project/docling)
`Python` · `MIT` · 🟢 stable

Convierte PDF, DOCX, PPTX, HTML e imágenes en formatos estructurados y listos para el LLM.

- **Ventaja:** modelos de layout y estructura de tablas que aguantan documentos del mundo real. Se enchufa directamente a LlamaIndex y LangChain.

### [Unstructured](https://github.com/Unstructured-IO/unstructured)
`Python` · `Apache-2.0` · 🟢 stable

Librería de preprocesado para meter documentos no estructurados en pipelines de ML.

- **Ventaja:** la cobertura de formatos más amplia. El caballo de batalla detrás de muchos pipelines de ingesta en producción.

---

## Fine-tuning y entrenamiento

### [Unsloth](https://github.com/unslothai/unsloth)
`Python` · `Apache-2.0` · 🟢 stable

Haz fine-tuning de LLMs aproximadamente el doble de rápido y con mucha menos VRAM, sin perder precisión.

- **Ventaja:** kernels de Triton escritos a mano y un motor de backprop manual. Convierte en realista, y no en aspiracional, ajustar un modelo mediano en una sola GPU gratuita de Colab.

### [Axolotl](https://github.com/axolotl-ai-cloud/axolotl)
`Python` · `Apache-2.0` · 🟢 stable

Framework de post-entrenamiento configurado enteramente por YAML — fine-tuning completo, LoRA, QLoRA, DPO, ORPO y más.

- **Ventaja:** un único archivo de configuración describe toda la ejecución, lo que hace los experimentos reproducibles y comparables en git.

### [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
`Python` · `Apache-2.0` · 🟢 stable

Fine-tuning unificado para más de 100 modelos, con interfaz web.

- **Ventaja:** entrenamiento sin código vía LlamaBoard. La cobertura de modelos más amplia de cualquier kit de ajuste.

### [PEFT](https://github.com/huggingface/peft)
`Python` · `Apache-2.0` · 🟢 stable

La librería de fine-tuning eficiente en parámetros de Hugging Face — LoRA, QLoRA, adaptadores, prompt tuning.

- **Ventaja:** la implementación de referencia sobre la que se construye todo lo demás. Se integra directamente con Transformers, Accelerate y TRL.

### [Distilabel](https://github.com/argilla-io/distilabel)
`Python` · `Apache-2.0` · 🟢 stable

Pipelines de datos sintéticos para SFT y entrenamiento por preferencias, del equipo de Argilla.

- **Ventaja:** trata la generación de datos como un pipeline reproducible en vez de un montón de scripts de un solo uso, y pasa por Argilla para que una persona pueda curar lo que generó el modelo. El cuello de botella del fine-tuning casi siempre son los datos, no el cómputo.

### [TRL](https://github.com/huggingface/trl)
`Python` · `Apache-2.0` · 🟢 stable

Entrena modelos transformer con aprendizaje por refuerzo — SFT, DPO, GRPO, modelado de recompensa.

- **Ventaja:** el camino estándar desde un modelo base hasta uno alineado y capaz de seguir instrucciones.

---

## Evaluación, pruebas y guardarraíles

### [promptfoo](https://github.com/promptfoo/promptfoo)
`TypeScript` · `MIT` · 🟢 stable

Prueba y evalúa prompts, agentes y sistemas RAG — además de red teaming y escaneo de vulnerabilidades de LLM.

- **Ventaja:** casos de prueba declarativos en YAML que corren en CI. Comparación de modelos lado a lado y red teaming adversario en la misma herramienta. Local-first: tus prompts no salen de tu máquina.

### [DeepEval](https://github.com/confident-ai/deepeval)
`Python` · `Apache-2.0` · 🟢 stable

"pytest para LLMs" — somete las salidas del modelo a pruebas unitarias con métricas respaldadas por investigación.

- **Ventaja:** se siente como una suite de tests normal. G-Eval, fidelidad, relevancia de la respuesta, alucinación y métricas específicas de RAG corren en local con el modelo que elijas.

### [Ragas](https://github.com/explodinggradients/ragas)
`Python` · `Apache-2.0` · 🟢 stable

Kit de evaluación para pipelines de RAG.

- **Ventaja:** separa la calidad de la recuperación de la calidad de la generación, así sabes qué mitad arreglar. Puede sintetizar un conjunto de prueba a partir de tus propios documentos.

### [Guardrails](https://github.com/guardrails-ai/guardrails)
`Python` · `Apache-2.0` · 🟢 stable

Añade validadores de entrada/salida a aplicaciones con LLM — estructura, seguridad, PII y reglas propias.

- **Ventaja:** los validadores son componibles y, ante un fallo, vuelven a preguntar al modelo en lugar de limitarse a lanzar un error.

### [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)
`Python` · `Apache-2.0` · 🟢 stable

Guardarraíles programables para sistemas conversacionales, definidos en el lenguaje de modelado Colang.

- **Ventaja:** control a nivel de diálogo — mantener el bot en tema, bloquear jailbreaks, imponer un flujo de conversación.

### [Garak](https://github.com/NVIDIA/garak)
`Python` · `Apache-2.0` · 🟢 stable

Escáner de vulnerabilidades de LLM — sondea inyección de prompts, jailbreaks, fuga de datos y toxicidad.

- **Ventaja:** el `nmap` de los modelos de lenguaje. Pásalo antes de publicar, no después del incidente.

---

## Observabilidad y LLMOps

### [Langfuse](https://github.com/langfuse/langfuse)
`TypeScript` · `MIT` (núcleo) · 🟢 stable

Plataforma de ingeniería de LLM de código abierto — trazado, evaluaciones, gestión de prompts y control de costes.

- **Reemplaza:** LangSmith
- **Ventaja:** un núcleo con licencia MIT que puedes autoalojar de verdad. Agnóstico al framework vía OpenTelemetry. Las trazas anidadas hacen abordable la depuración multiagente, y el versionado de prompts desacopla los cambios de prompt de los despliegues.

### [Phoenix](https://github.com/Arize-ai/phoenix)
`Python + TypeScript` · `Elastic-2.0` · 🟢 stable

Observabilidad y evaluación de IA, construidas sobre OpenTelemetry y OpenInference.

- **Ventaja:** corre en un notebook para depurar en local o como servidor en producción. Buenas visualizaciones de deriva de embeddings y calidad de recuperación.

### [OpenLLMetry](https://github.com/traceloop/openllmetry)
`Python + TypeScript` · `Apache-2.0` · 🟢 stable

Instrumentación OpenTelemetry para aplicaciones con LLM.

- **Ventaja:** basado en estándares — manda las trazas a Datadog, Honeycomb, Grafana o lo que ya uses. Sin añadir otro proveedor de observabilidad.

### [Helicone](https://github.com/Helicone/helicone)
`TypeScript` · `Apache-2.0` · 🟢 stable

Plataforma de observabilidad para aplicaciones con LLM — integración por proxy en una línea, caché y limitación de tasa.

- **Ventaja:** cambias la base URL y ya tienes logging. El arranque con menos fricción de esta sección.

---

## Voz, visión y multimodal

### [Whisper](https://github.com/openai/whisper) / [faster-whisper](https://github.com/SYSTRAN/faster-whisper) / [whisper.cpp](https://github.com/ggml-org/whisper.cpp)
`MIT` · 🟢 stable

Voz a texto: el modelo original, el port a CTranslate2 (bastante más rápido) y el port a C++ (corre en cualquier sitio).

- **Reemplaza:** Google Speech-to-Text, AssemblyAI
- **Ventaja:** ASR multilingüe de primer nivel, gratis y en tu propio hardware. `whisper.cpp` transcribe en tiempo real con la CPU de un portátil.

### [WhisperX](https://github.com/m-bain/whisperX)
`Python` · `BSD-2-Clause` · 🟢 stable

Whisper más marcas de tiempo a nivel de palabra y diarización de hablantes.

- **Ventaja:** si necesitas saber *quién* dijo *qué* y *cuándo* — subtítulos, actas de reunión — esta es la herramienta.

### [Kokoro](https://github.com/hexgrad/kokoro) / [Piper](https://github.com/OHF-Voice/piper1-gpl)
`Apache-2.0` / `GPL-3.0` · 🟢 stable

Texto a voz. Kokoro es un modelo diminuto (~82M de parámetros) con una calidad muy por encima de su tamaño; Piper está optimizado para dispositivos tan pequeños como una Raspberry Pi.

- **Reemplaza:** ElevenLabs
- **Ventaja:** TTS en tiempo real sobre CPU. La huella mínima de Kokoro hace viable empaquetarlo dentro de una aplicación.

### [Pipecat](https://github.com/pipecat-ai/pipecat)
`Python` · Librería · 🟢 stable

Framework para agentes conversacionales de voz y multimodales en tiempo real.

- **Reemplaza:** Vapi, Retell
- **Ventaja:** etapas STT/TTS/LLM intercambiables sobre WebRTC, más soporte de modelos de voz a voz, así que ensamblas un agente de voz con piezas abiertas en vez de alquilar una plataforma. **Debilidad conocida:** el propio issue tracker del proyecto documenta bloqueos del pipeline, manejadores de function call que quedan como zombis tras un timeout y latencias de varios segundos en producción. El modelo de pipeline lineal además encaja mal con conversaciones de varias personas. Cuenta con dedicarle ingeniería real.

### [LiveKit Agents](https://github.com/livekit/agents)
`Python + Node` · `Apache-2.0` · Framework · 🟢 stable

Framework de agentes en tiempo real construido sobre la infraestructura WebRTC de LiveKit.

- **Reemplaza:** Vapi, Retell
- **Ventaja:** el modelo de sala/participantes maneja de forma nativa las conversaciones de varias personas y las interrupciones, algo que un pipeline lineal solo puede simular. Si tu agente de voz necesita más de un humano en la llamada, empieza aquí y no por un framework de pipeline.

### [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
`Python` · `GPL-3.0` · 🟢 stable

Interfaz basada en nodos para modelos de difusión — pipelines de generación de imagen, vídeo y audio.

- **Reemplaza:** Midjourney, DALL·E
- **Ventaja:** el grafo *es* el programa — cada paso es inspeccionable y reproducible, y los flujos se comparten como JSON. Soporta prácticamente cualquier modelo abierto de imagen o vídeo a los pocos días de su lanzamiento.

### [Surya](https://github.com/datalab-to/surya)
`Python` · `GPL-3.0` (con excepciones comerciales) · 🟡 active

OCR de documentos, análisis de layout y detección del orden de lectura en más de 90 idiomas.

- **Ventaja:** no solo reconocimiento de caracteres, sino layout, orden de lectura y estructura de tablas. Imprescindible aguas arriba de cualquier RAG documental.

---

## Low-code / constructores visuales

### [n8n](https://github.com/n8n-io/n8n)
`TypeScript` · `Sustainable Use License` (fair-code, source-available) · 🟢 stable

Automatización de flujos de trabajo con nodos de agente de IA nativos — cientos de integraciones, autoalojable.

- **Reemplaza:** Zapier, Make
- **Ventaja:** puedes bajar a JavaScript en cualquier nodo cuando el constructor visual se queda corto. Los nodos de agente lo convierten en un runtime de agentes legítimo, no en un simple disparador-acción. **Nota:** fair-code, no aprobada por la OSI — lee la licencia antes de usarlo comercialmente.

### [Flowise](https://github.com/FlowiseAI/Flowise)
`TypeScript` · `Apache-2.0` (con condiciones) · 🟢 stable

Constructor de arrastrar y soltar para flujos de LLM y agentes.

- **Ventaja:** la vía más rápida para prototipar visualmente un chatbot RAG y exponerlo como API o como widget embebible.

### [Langflow](https://github.com/langflow-ai/langflow)
`Python` · `MIT` · 🟢 stable

Framework visual para construir aplicaciones multiagente y de RAG.

- **Ventaja:** cada componente visual corresponde a código Python real que puedes exportar y hacer tuyo. Buen puente entre el prototipo y el código de producción.

---

## Tabla de alternativas de código abierto

| Lo que estás pagando | Usa esto |
|---|---|
| GitHub Copilot | [Continue](https://github.com/continuedev/continue), [Tabby](https://github.com/TabbyML/tabby), [aider](https://github.com/Aider-AI/aider) |
| Cursor / Windsurf | [Cline](https://github.com/cline/cline), [OpenCode](https://github.com/sst/opencode), [Kilo Code](https://github.com/Kilo-Org/kilocode) |
| Devin | [OpenHands](https://github.com/All-Hands-AI/OpenHands), [Goose](https://github.com/block/goose), [SWE-agent](https://github.com/SWE-agent/SWE-agent) |
| Claude Design / Figma Make | [Open Design](https://github.com/nexu-io/open-design) |
| ChatGPT escritorio / asistente Copilot | [OpenClaw](https://github.com/openclaw/openclaw), [Hermes Agent](https://github.com/NousResearch/hermes-agent) |
| Bolt.new / v0 / Lovable | [bolt.diy](https://github.com/stackblitz-labs/bolt.diy), [OpenUI](https://github.com/wandb/openui), [Dyad](https://github.com/dyad-sh/dyad) |
| ChatGPT Plus / Claude Pro | [Open WebUI](https://github.com/open-webui/open-webui), [LibreChat](https://github.com/danny-avila/LibreChat), [Jan](https://github.com/menloresearch/jan) |
| OpenAI API (inferencia) | [vLLM](https://github.com/vllm-project/vllm), [Ollama](https://github.com/ollama/ollama), [LocalAI](https://github.com/mudler/LocalAI), [SGLang](https://github.com/sgl-project/sglang) |
| OpenAI Assistants API | [Letta](https://github.com/letta-ai/letta), [Dify](https://github.com/langgenius/dify) |
| Pinecone | [Qdrant](https://github.com/qdrant/qdrant), [pgvector](https://github.com/pgvector/pgvector), [Chroma](https://github.com/chroma-core/chroma), [MongrelDB](https://github.com/visorcraft/MongrelDB) |
| LangSmith | [Langfuse](https://github.com/langfuse/langfuse), [Phoenix](https://github.com/Arize-ai/phoenix) |
| OpenRouter | proxy de [LiteLLM](https://github.com/BerriAI/litellm) |
| ElevenLabs | [Kokoro](https://github.com/hexgrad/kokoro), [Piper](https://github.com/OHF-Voice/piper1-gpl) |
| AssemblyAI / Deepgram | [faster-whisper](https://github.com/SYSTRAN/faster-whisper), [WhisperX](https://github.com/m-bain/whisperX) |
| Midjourney / DALL·E | [ComfyUI](https://github.com/comfyanonymous/ComfyUI) |
| Zapier / Make | [n8n](https://github.com/n8n-io/n8n) |
| Vapi / Retell | [LiveKit Agents](https://github.com/livekit/agents), [Pipecat](https://github.com/pipecat-ai/pipecat) |
| Cohere Embed / Rerank | [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding) |
| Browserbase / Stagehand | [browser-use](https://github.com/browser-use/browser-use), [Skyvern](https://github.com/Skyvern-AI/skyvern) |
| Plataforma de GPTs de OpenAI | [Dify](https://github.com/langgenius/dify), [Flowise](https://github.com/FlowiseAI/Flowise) |

---

## Cómo elegir tu stack

Empieza pequeño. Cada capa de abajo es opcional hasta que deja de serlo.

**Desarrollador en solitario, local-first, coste de API cero**
```
Ollama → Continue (editor) + aider (terminal) → Open WebUI (chat)
```

**Equipo pequeño lanzando un producto de IA**
```
proxy LiteLLM → LangGraph o CrewAI → pgvector → Langfuse → promptfoo en CI
```

**Empresa, autoalojado, con requisitos de cumplimiento**
```
vLLM (GPUs propias) → LiteLLM (claves/presupuestos) → Qdrant → Dify o LangGraph
  → Langfuse (trazado) → Garak + NeMo Guardrails (seguridad)
```

**RAG con mucha documentación**
```
Docling o RAGFlow (parseo) → LlamaIndex (recuperación) → Qdrant → Ragas (evaluación)
```

Las tres reglas que más tiempo ahorran:

1. **Pon una pasarela delante de tus modelos desde el primer día.** LiteLLM te cuesta una tarde y te compra para siempre cambio de proveedor, presupuestos y failover.
2. **Usa Postgres + pgvector hasta que hayas medido una razón para no hacerlo.** La mayoría de los problemas de "necesitamos una base vectorial" son en realidad problemas de calidad de recuperación.
3. **Añade trazado antes que funcionalidades.** Depurar un sistema multiagente sin trazas es adivinar.

---

## Contribuir

Los PRs son bienvenidos. Consulta [contributing guide](../community/contributing.md).

El listón para entrar:

- Licencia aprobada por la OSI (las herramientas source-available se admiten, pero deben etiquetarse)
- Mantenimiento real — commits en los últimos 6 meses
- Resuelve un problema que un desarrollador tiene de verdad
- La entrada explica *por qué elegirla*, no solo qué hace

> **Nota:** la versión en inglés es la canónica. Si esta traducción contradice al inglés, manda el inglés. Véase [translations guide](../community/translations.md).

## Licencia

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](LICENSE)

En la medida en que lo permite la ley, quienes contribuyen han renunciado a todos los derechos de autor y derechos conexos sobre esta obra.

