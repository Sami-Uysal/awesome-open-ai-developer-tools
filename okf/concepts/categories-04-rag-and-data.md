---
type: concept
title: "RAG and Data"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/categories/04-rag-and-data/"
path: /categories/04-rag-and-data/
updated: 2026-07-29
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-29T02:28:45.705Z"
---
# RAG and Data

Vector databases, embedding tools, rerankers, and RAG application frameworks.

## Vector Databases
### [Qdrant](https://github.com/qdrant/qdrant)
`Rust` · `Apache-2.0`

Vector search engine with rich payload filtering, built for production.

- **Replaces:** Pinecone
- **Edge:** Written in Rust — predictable latency under load. Scalar/product/binary quantization cuts RAM dramatically. Filtered search stays accurate instead of degrading like naive pre/post-filtering.

### [Milvus](https://github.com/milvus-io/milvus)
`Go + C++` · `Apache-2.0`

Distributed vector database built for billion-scale workloads.

- **Edge:** Separated storage and compute, GPU indexing — the heaviest-duty option when the corpus genuinely is enormous. Milvus Lite covers local dev.

### [Weaviate](https://github.com/weaviate/weaviate)
`Go` · `BSD-3-Clause`

Vector database with built-in vectorization modules and a GraphQL API.

- **Edge:** Module system embeds data for you at ingest. Native hybrid (BM25 + vector) search and multi-tenancy.

### [Chroma](https://github.com/chroma-core/chroma)
`Rust + Python` · `Apache-2.0`

The batteries-included embedding database for AI applications.

- **Edge:** `pip install chromadb` and you have a working vector store in four lines. The right default for prototypes; scale out later if you must.

### [pgvector](https://github.com/pgvector/pgvector)
`C` · `PostgreSQL License`

Vector similarity search inside PostgreSQL.

- **Edge:** No new infrastructure. Your embeddings live next to your relational data with real transactions, joins, and backups. Start here unless you've measured a reason not to.

---

## Embeddings & Rerankers
The retrieval quality layer. Swapping your embedding model usually beats swapping your vector database.

### [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding)
`Python` · `MIT`

The BGE family — BGE-M3 embeddings and the BGE reranker models.

- **Replaces:** OpenAI text-embedding-3, Cohere Embed, Cohere Rerank
- **Edge:** BGE-M3 does dense, sparse (lexical), and multi-vector retrieval from one model across 100+ languages, so you get hybrid search without running two systems. Pairing BGE-M3 with a BGE reranker is the default open retrieval stack, and it runs on your own hardware with no per-query cost.

### [Sentence Transformers](https://github.com/UKPLab/sentence-transformers)
`Python` · `Apache-2.0`

The library for computing, training, and fine-tuning text embeddings.

- **Edge:** the interface almost every open embedding model ships against — learn it once and every model on Hugging Face is available. Fine-tuning an embedding model on your own domain is usually the single highest-leverage RAG improvement, and this is how you do it.

---

## RAG Frameworks
### [LlamaIndex](https://github.com/run-llama/llama_index)
`Python + TypeScript` · `MIT`

The data framework for LLM applications — ingestion, indexing, retrieval, and agentic workflows over your data.

- **Edge:** Hundreds of data connectors (LlamaHub) and the deepest library of retrieval strategies — hierarchical, recursive, hybrid, auto-merging. When naive top-k retrieval isn't good enough, the fix is usually already implemented here.

### [RAGFlow](https://github.com/infiniflow/ragflow)
`Python` · `Apache-2.0`

RAG engine built on deep document understanding — layout-aware parsing of PDFs, tables, and scans.

- **Edge:** Document parsing is where most RAG systems actually fail. RAGFlow treats it as the core problem and shows you citation-grounded chunks so you can debug retrieval visually.

### [Dify](https://github.com/langgenius/dify)
`Python + TypeScript` · `Apache-2.0` (with conditions)

Production-ready platform for agentic workflows — visual builder, RAG pipeline, model management, and observability in one.

- **Replaces:** OpenAI GPTs platform, Vertex AI Agent Builder
- **Edge:** Non-engineers can build and ship an internal AI tool without touching code, while engineers keep API access to everything. Self-hosted, so your data stays put.

### [Docling](https://github.com/docling-project/docling)
`Python` · `MIT`

Parse PDF, DOCX, PPTX, HTML, and images into structured, LLM-ready formats.

- **Edge:** Layout and table-structure models that handle real-world documents. Plugs directly into LlamaIndex and LangChain.

### [Unstructured](https://github.com/Unstructured-IO/unstructured)
`Python` · `Apache-2.0`

Preprocessing library for ingesting unstructured documents into ML pipelines.

- **Edge:** Broadest format coverage. The workhorse behind many production ingestion pipelines.

---
