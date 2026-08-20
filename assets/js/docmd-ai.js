var DocmdAIAssistant = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/client/index.ts
  var index_exports = {};
  __export(index_exports, {
    DocmdAIAssistantUI: () => DocmdAIAssistantUI
  });

  // ../../../node_modules/.pnpm/docmd-assistant@0.1.14/node_modules/docmd-assistant/dist/index.js
  function parseAssistantOutput(raw, knownToolNames) {
    if (!raw || typeof raw !== "string") {
      return { cleanText: "", extractedToolCalls: [] };
    }
    let text = raw;
    const thinkingParts = [];
    const extractedToolCalls = [];
    const thinkingRegex = /<(?:[a-zA-Z0-9_\-]+:)?(think|thought|reasoning|reflection|plan)\b[^>]*>([\s\S]*?)<\/(?:[a-zA-Z0-9_\-]+:)?\1>/gi;
    text = text.replace(thinkingRegex, (_match, _tag, content) => {
      if (content.trim()) thinkingParts.push(content.trim());
      return "";
    });
    const mdThinkingRegex = /```(?:thought|thinking|reasoning|reflection)\s*\n([\s\S]*?)```/gi;
    text = text.replace(mdThinkingRegex, (_match, content) => {
      if (content.trim()) thinkingParts.push(content.trim());
      return "";
    });
    const bracketThinkingRegex = /\[(?:thought|thinking|reasoning):\s*([\s\S]*?)\]/gi;
    text = text.replace(bracketThinkingRegex, (_match, content) => {
      if (content.trim()) thinkingParts.push(content.trim());
      return "";
    });
    text = text.replace(/\]<\][a-zA-Z0-9_\-]+\[>\[[\s\S]*?(?:<\/(?:request|tool_call|action)>|\]<\][a-zA-Z0-9_\-]+\[>\[|$)/gi, "");
    text = text.replace(/\]<\][a-zA-Z0-9_\-]+\[>\[/gi, "");
    text = text.replace(/<\/?(?:[a-zA-Z0-9_\-]+:)?(?:think|thought|reasoning|reflection|plan)\b[^>]*>/gi, "");
    const toolTagRegex = /<(?:[a-zA-Z0-9_\-]+:)?(tool_call|function_call|tool|action|request|invoke)\b([^>]*)>([\s\S]*?)<\/(?:[a-zA-Z0-9_\-]+:)?\1>/gi;
    text = text.replace(toolTagRegex, (_match, _tag, attrs, body) => {
      const nameMatch = attrs.match(/name=["']([^"']+)["']/i);
      if (nameMatch) {
        const toolName = nameMatch[1].trim();
        let args = {};
        try {
          args = JSON.parse(body.trim());
        } catch {
          args = { query: body.trim() };
        }
        extractedToolCalls.push({ name: toolName, args });
      } else {
        tryParseToolJson(body, extractedToolCalls);
      }
      return "";
    });
    const inlineFunctionTagRegex = /<function\s*=\s*["']?([a-zA-Z0-9_\-]+)["']?>([\s\S]*?)<\/function>/gi;
    text = text.replace(inlineFunctionTagRegex, (_match, toolName, body) => {
      let args = {};
      try {
        args = JSON.parse(body.trim());
      } catch {
        args = { query: body.trim() };
      }
      extractedToolCalls.push({ name: toolName.trim(), args });
      return "";
    });
    const mdToolRegex = /```(?:tool_call|function_call|tool|action|json:tool|json)?\s*\n([\s\S]*?)```/gi;
    text = text.replace(mdToolRegex, (_match, body) => {
      const initialCount = extractedToolCalls.length;
      tryParseToolJson(body, extractedToolCalls, knownToolNames);
      if (extractedToolCalls.length > initialCount) {
        return "";
      }
      return _match;
    });
    const bracketToolRegex = /\[?(?:TOOL[_\s]?CALL|FUNCTION[_\s]?CALL|TOOL|CALL|ACTION):\s*([a-zA-Z0-9_\-]+)\s*(?:\(([\s\S]*?)\)|(\{[\s\S]*?\})|([\s\S]*?))\]?/gi;
    text = text.replace(bracketToolRegex, (_match, toolName, parenArgs, braceArgs, plainArgs) => {
      const rawArgs = parenArgs !== void 0 ? parenArgs : braceArgs || plainArgs || "";
      const args = parseFunctionalArgs(rawArgs);
      extractedToolCalls.push({ name: toolName.trim(), args });
      return "";
    });
    if (knownToolNames && knownToolNames.length > 0) {
      for (const toolName of knownToolNames) {
        const funcRegex = new RegExp(`(?:call:)?\\b${toolName}\\s*\\(([\\s\\S]*?)\\)`, "g");
        text = text.replace(funcRegex, (_match, innerArgs) => {
          let args = {};
          const trimmed = innerArgs.trim();
          if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
            try {
              args = JSON.parse(trimmed);
            } catch {
              args = parseFunctionalArgs(trimmed);
            }
          } else {
            args = parseFunctionalArgs(trimmed);
          }
          extractedToolCalls.push({ name: toolName, args });
          return "";
        });
      }
    }
    text = extractAndStripJsonObjects(text, extractedToolCalls, knownToolNames);
    text = text.replace(/<\/?(?:[a-zA-Z0-9_\-]+:)?(?:tool_call|function_call|tool|action|request|invoke)\b[^>]*>/gi, "");
    text = text.replace(/```(\w+)(?:[ \t]+|\r?\n)?([\s\S]*?)```/g, (_match, lang, code) => {
      const trimmedCode = code.replace(/^\s*\n?/, "");
      return "```" + lang + "\n" + trimmedCode + "```";
    });
    let cleanText = text.trim();
    const thinking = thinkingParts.length > 0 ? thinkingParts.join("\n\n") : void 0;
    if (!cleanText && thinking) {
      cleanText = thinking;
    }
    return {
      cleanText,
      thinking,
      extractedToolCalls
    };
  }
  function parseFunctionalArgs(argStr) {
    const trimmed = argStr.trim();
    if (!trimmed) return {};
    if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
      try {
        return JSON.parse(trimmed);
      } catch {
      }
    }
    const result = {};
    const paramRegex = /([a-zA-Z0-9_\-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\{[^}]*\})|([a-zA-Z0-9_\-\.]+))/g;
    let match;
    let matchedAny = false;
    while ((match = paramRegex.exec(trimmed)) !== null) {
      matchedAny = true;
      const key = match[1];
      const val = match[2] ?? match[3] ?? match[4] ?? match[5];
      if (val !== void 0) {
        if (val.startsWith("{") && val.endsWith("}")) {
          try {
            result[key] = JSON.parse(val);
          } catch {
            result[key] = val;
          }
        } else if (!isNaN(Number(val))) {
          result[key] = Number(val);
        } else if (val === "true") {
          result[key] = true;
        } else if (val === "false") {
          result[key] = false;
        } else {
          result[key] = val;
        }
      }
    }
    if (!matchedAny && trimmed) {
      result.query = trimmed.replace(/^["']|["']$/g, "");
    }
    return result;
  }
  function tryParseToolJson(rawJson, targetArray, knownToolNames) {
    const trimmed = rawJson.trim();
    if (!trimmed) return false;
    try {
      const parsed = JSON.parse(trimmed);
      return processParsedToolObject(parsed, targetArray, knownToolNames);
    } catch {
      let found = false;
      const matches = findBalancedJsonObjects(trimmed);
      for (const jsonStr of matches) {
        try {
          const parsed = JSON.parse(jsonStr);
          if (processParsedToolObject(parsed, targetArray, knownToolNames)) {
            found = true;
          }
        } catch {
        }
      }
      return found;
    }
  }
  function processParsedToolObject(parsed, targetArray, knownToolNames) {
    if (!parsed || typeof parsed !== "object") return false;
    if (Array.isArray(parsed)) {
      let matched = false;
      for (const item of parsed) {
        if (processParsedToolObject(item, targetArray, knownToolNames)) {
          matched = true;
        }
      }
      return matched;
    }
    if (Array.isArray(parsed.tool_calls) && parsed.tool_calls.length > 0) {
      let matched = false;
      for (const tc of parsed.tool_calls) {
        if (processParsedToolObject(tc, targetArray, knownToolNames)) {
          matched = true;
        }
      }
      return matched;
    }
    if (parsed.function && typeof parsed.function === "object") {
      return processParsedToolObject(parsed.function, targetArray, knownToolNames);
    }
    const name = parsed.name || parsed.tool || parsed.action || parsed.function_name;
    let args = parsed.parameters || parsed.arguments || parsed.args || parsed.input || parsed.action_input;
    if (name && typeof name === "string") {
      const toolName = name.trim();
      if (typeof args === "string") {
        try {
          args = JSON.parse(args);
        } catch {
          args = { query: args };
        }
      } else if (!args || typeof args !== "object") {
        args = {};
      }
      targetArray.push({ name: toolName, args });
      return true;
    }
    if (knownToolNames && knownToolNames.length > 0) {
      for (const toolName of knownToolNames) {
        if (parsed[toolName] !== void 0) {
          let toolArgs = parsed[toolName];
          if (typeof toolArgs === "string") {
            try {
              toolArgs = JSON.parse(toolArgs);
            } catch {
              toolArgs = { query: toolArgs };
            }
          } else if (!toolArgs || typeof toolArgs !== "object") {
            toolArgs = {};
          }
          targetArray.push({ name: toolName, args: toolArgs });
          return true;
        }
      }
    }
    return false;
  }
  function extractAndStripJsonObjects(text, targetArray, knownToolNames) {
    let result = text;
    const jsonBlocks = findBalancedJsonObjects(text);
    for (const block of jsonBlocks) {
      try {
        const parsed = JSON.parse(block);
        const initialCount = targetArray.length;
        if (processParsedToolObject(parsed, targetArray, knownToolNames)) {
          if (targetArray.length > initialCount) {
            result = result.replace(block, "");
          }
        }
      } catch {
      }
    }
    return result;
  }
  function findBalancedJsonObjects(str) {
    const results = [];
    let depth = 0;
    let startIndex = -1;
    let inString = false;
    let escapeNext = false;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (escapeNext) {
        escapeNext = false;
        continue;
      }
      if (char === "\\") {
        escapeNext = true;
        continue;
      }
      if (char === '"') {
        inString = !inString;
        continue;
      }
      if (!inString) {
        if (char === "{") {
          if (depth === 0) {
            startIndex = i;
          }
          depth++;
        } else if (char === "}") {
          depth--;
          if (depth === 0 && startIndex !== -1) {
            results.push(str.slice(startIndex, i + 1));
            startIndex = -1;
          }
        }
      }
    }
    return results;
  }
  var ENGINE_VERSION = typeof process !== "undefined" && "0.1.14" ? "0.1.14" : "0.1.14";
  var DEFAULT_SYSTEM_PROMPT = `You are docmd assistant \u2014 a professional, precise, and concise technical AI assistant for this documentation site.

CRITICAL CONSTRAINTS & BEHAVIORAL RULES:
1. IDENTITY: Your name is "docmd assistant". You are an expert AI guide specifically for this documentation site.
2. STRICT SCOPE & BOUNDARIES: Answer strictly about the software, APIs, tools, installation, configuration, and topics documented on this site. Politely decline off-topic queries.
3. STRICT FACTUALITY & ZERO FABRICATION:
   - Ground all answers, configuration snippets, and code examples STRICTLY in facts, keys, properties, and evidence explicitly retrieved from documentation search results or site tools.
   - NEVER invent, guess, or fabricate non-existent configurations, non-existent API parameters, or unverified settings.
   - If documentation results do not evidence a specific setting, state what is verified and do not invent hypothetical JSON shapes.
4. PROFESSIONAL & CONCISE: Provide direct, succinct, and professional answers. Do NOT use excessive emojis. Avoid conversational filler or boilerplate apologies. Get straight to the point.
5. AUTONOMOUS & PROACTIVE TOOL EXECUTION:
   - Always use your tools proactively. Directly execute the appropriate tool (\`search_documentation\` or \`get_site_structure\`) to retrieve accurate facts before answering.
   - Use \`get_site_structure\` to inspect site topology, available documentation branches, and navigation trees.
   - Use \`search_documentation\` to search release notes, API guides, configuration options, and concepts across all projects.
6. SEARCH STRATEGY \u2014 THIS IS CRITICAL:
   - The search index is KEYWORD-BASED ONLY. It matches individual keywords against page titles and content.
   - ALWAYS search with a SINGLE keyword per search call. Never pass full sentences or multi-word phrases.
   - To answer a question, identify 2-3 important keywords and call search_documentation SEPARATELY for each one.
   - Example: For "how to deploy a docmd site locally", make separate calls: search("deploy"), search("local"), search("install").
   - Example: For "what changed in the latest release", call: search("release"), search("changelog").
   - Analyze the combined search results from all calls, then synthesize your answer.
7. VERSION & RELEASE NOTES INTELLIGENCE:
   - Patch releases and changelog updates are documented in the release notes.
   - When asked what the latest release or version is, search with query: "release" or "changelog".
8. HYPERLINKS & CITATIONS: Always include clickable Markdown hyperlinks \`[Page Title](path)\` in your response for referenced documentation pages.
9. CONCISE & CLEAN OUTPUT: Keep your response clean, structured, and concise (under 1500 tokens). Use valid Markdown formatting without raw unescaped HTML or script tags.`;
  function truncateContextCleanly(text, maxLen = 15e3) {
    if (!text || text.length <= maxLen) return text;
    let sliced = text.slice(0, maxLen);
    const lastDoubleNL = sliced.lastIndexOf("\n\n");
    if (lastDoubleNL > maxLen * 0.5) {
      sliced = sliced.slice(0, lastDoubleNL);
    } else {
      const lastNL = sliced.lastIndexOf("\n");
      if (lastNL > maxLen * 0.5) {
        sliced = sliced.slice(0, lastNL);
      }
    }
    const codeFenceCount = (sliced.match(/```/g) || []).length;
    if (codeFenceCount % 2 !== 0) {
      sliced += "\n```";
    }
    return sliced + "\n...[context truncated]";
  }
  function getToolStatusInfo(toolName, args) {
    if (toolName === "search_documentation") {
      const query = args?.query || args?.q || "";
      return {
        text: query ? `Searching documentation for "${query}"...` : "Searching documentation...",
        icon: "search"
      };
    }
    if (toolName === "get_site_structure") {
      return {
        text: "Inspecting site navigation & structure...",
        icon: "folder-tree"
      };
    }
    return {
      text: `Running ${toolName}...`,
      icon: "cog"
    };
  }
  var DocmdAssistantEngine = class _DocmdAssistantEngine {
    options;
    history = [];
    tools = /* @__PURE__ */ new Map();
    systemPrompt;
    listeners = /* @__PURE__ */ new Map();
    isExecuting = false;
    constructor(options = {}) {
      this.options = { ...options };
      this.systemPrompt = options.systemPrompt || DEFAULT_SYSTEM_PROMPT;
      if (options.history) {
        this.history = [...options.history];
      }
      if (options.tools) {
        for (const tool of options.tools) {
          this.registerTool(tool);
        }
      }
    }
    // --- Tool Registration Surface ---
    registerTool(tool) {
      if (!tool.name) {
        throw new Error('Tool must have a valid "name" property.');
      }
      this.tools.set(tool.name, tool);
      return this;
    }
    unregisterTool(name) {
      return this.tools.delete(name);
    }
    getTools() {
      return Array.from(this.tools.values());
    }
    getTool(name) {
      return this.tools.get(name);
    }
    // --- System Prompt & Configuration Surface ---
    setSystemPrompt(prompt) {
      this.systemPrompt = prompt;
      return this;
    }
    appendSystemPrompt(additionalPrompt) {
      this.systemPrompt += `

${additionalPrompt}`;
      return this;
    }
    getSystemPrompt() {
      return this.systemPrompt;
    }
    updateOptions(newOptions) {
      this.options = { ...this.options, ...newOptions };
      if (newOptions.systemPrompt) {
        this.systemPrompt = newOptions.systemPrompt;
      }
      return this;
    }
    // --- State & History Surface ---
    getHistory() {
      return [...this.history];
    }
    setHistory(history) {
      this.history = [...history];
      return this;
    }
    clearHistory() {
      this.history = [];
      this.emit("clear", null);
      return this;
    }
    addMessage(message) {
      this.history.push({
        ...message,
        timestamp: message.timestamp || Date.now()
      });
      return this;
    }
    // --- Event Emitter Surface ---
    on(event, listener) {
      if (!this.listeners.has(event)) {
        this.listeners.set(event, /* @__PURE__ */ new Set());
      }
      this.listeners.get(event).add(listener);
      return this;
    }
    off(event, listener) {
      const set = this.listeners.get(event);
      if (set) {
        set.delete(listener);
      }
      return this;
    }
    emit(type, data) {
      const set = this.listeners.get(type);
      if (set) {
        const event = { type, data };
        for (const listener of set) {
          try {
            listener(event);
          } catch (err) {
            console.error(`[docmd-assistant] Event listener error (${type}):`, err);
          }
        }
      }
    }
    // --- Synchronous Messaging Surface ---
    async sendMessage(content, overrideOptions) {
      if (this.isExecuting) {
        throw new Error("Assistant is currently processing a response. Please wait for the current query to complete.");
      }
      this.isExecuting = true;
      try {
        const userMsg = {
          role: "user",
          content,
          sender: "user",
          timestamp: Date.now()
        };
        this.addMessage(userMsg);
        this.emit("message", userMsg);
        const opts = { ...this.options, ...overrideOptions };
        const endpoint = opts.relayUrl || opts.endpoint;
        if (opts.apiKey || opts.provider === "ollama") {
          return await this.runAiplugLoop(opts);
        }
        return await this.runRelayLoop(endpoint || "https://api.docmd.io/v1/ai/chat", opts);
      } finally {
        this.isExecuting = false;
      }
    }
    // --- Live Streaming Surface ---
    async sendMessageStream(content, callbacks = {}, overrideOptions) {
      if (this.isExecuting) {
        throw new Error("Assistant is currently processing a response. Please wait for the current query to complete.");
      }
      this.isExecuting = true;
      try {
        const userMsg = {
          role: "user",
          content,
          sender: "user",
          timestamp: Date.now()
        };
        this.addMessage(userMsg);
        this.emit("message", userMsg);
        const opts = { ...this.options, ...overrideOptions };
        const endpoint = opts.relayUrl || opts.endpoint;
        callbacks.onStatus?.({ text: "Thinking...", icon: "brain" });
        this.emit("status", { text: "Thinking...", icon: "brain" });
        let response;
        if (opts.apiKey || opts.provider === "ollama") {
          response = await this.runAiplugStreamLoop(opts, callbacks);
        } else {
          response = await this.runRelayStreamLoop(endpoint || "https://api.docmd.io/v1/ai/chat", opts, callbacks);
        }
        callbacks.onFinish?.(response);
        return response;
      } catch (err) {
        callbacks.onError?.(err);
        this.emit("error", err);
        throw err;
      } finally {
        this.isExecuting = false;
      }
    }
    // --- Multi-Turn Autonomous Tool Execution Loop (Direct aiplug Mode) ---
    async runAiplugLoop(opts) {
      const { createLLMAdapter } = await import("aiplug");
      const reasoningVal = opts.reasoning ?? false;
      const adapterOptions = {
        apiKey: opts.apiKey || "",
        baseURL: opts.baseURL,
        ...reasoningVal ? { options: { providerOptions: { reasoning: reasoningVal } } } : {}
      };
      if (opts.provider) adapterOptions.provider = opts.provider;
      if (opts.model) adapterOptions.model = opts.model;
      const adapter = createLLMAdapter(adapterOptions);
      const toolsDef = this.getTools().map((t) => ({
        name: t.name,
        description: t.description,
        parameters: t.parameters || t.schema || { type: "object", properties: {} }
      }));
      const conversationMessages = [
        { role: "system", content: this.systemPrompt }
      ];
      for (const msg of this.history) {
        const role = msg.sender || msg.role;
        conversationMessages.push({
          role: role === "system" ? "system" : role === "assistant" ? "assistant" : "user",
          content: msg.content
        });
      }
      const maxTurns = 5;
      let turnCount = 0;
      let finalReplyText = "";
      while (turnCount < maxTurns) {
        turnCount++;
        const res = await adapter.converse(conversationMessages, toolsDef.length > 0 ? toolsDef : void 0);
        const rawContent = res.message?.content || "";
        const parsed = parseAssistantOutput(rawContent, this.getTools().map((t) => t.name));
        const toolCallsToExecute = [];
        if (res.message?.toolCalls && res.message.toolCalls.length > 0) {
          for (const tc of res.message.toolCalls) {
            toolCallsToExecute.push({
              id: tc.id || `call_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
              name: tc.name,
              args: tc.input || {}
            });
          }
        } else if (parsed.extractedToolCalls.length > 0) {
          for (const tc of parsed.extractedToolCalls) {
            toolCallsToExecute.push({
              id: `call_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
              name: tc.name,
              args: tc.args || {}
            });
          }
        }
        if (toolCallsToExecute.length === 0) {
          finalReplyText = parsed.cleanText || rawContent;
          break;
        }
        conversationMessages.push({
          role: "assistant",
          content: parsed.cleanText || "",
          toolCalls: toolCallsToExecute.map((tc) => ({ id: tc.id, name: tc.name, input: tc.args }))
        });
        const toolResults = [];
        for (const tc of toolCallsToExecute) {
          this.emit("tool_call", { name: tc.name, args: tc.args, callId: tc.id });
          try {
            const result = await this.executeTool(tc.name, tc.args);
            this.emit("tool_result", { name: tc.name, args: tc.args, result, callId: tc.id });
            toolResults.push({
              toolCallId: tc.id,
              name: tc.name,
              content: typeof result === "string" ? result : JSON.stringify(result)
            });
          } catch (err) {
            toolResults.push({
              toolCallId: tc.id,
              name: tc.name,
              content: `Error: ${err.message || String(err)}`,
              isError: true
            });
          }
        }
        conversationMessages.push({
          role: "tool",
          toolResults
        });
      }
      const assistantMsg = {
        role: "assistant",
        content: finalReplyText || "No response generated.",
        sender: "assistant",
        timestamp: Date.now()
      };
      this.addMessage(assistantMsg);
      this.emit("message", assistantMsg);
      return {
        message: assistantMsg.content,
        role: "assistant",
        history: this.getHistory()
      };
    }
    // --- Multi-Turn Autonomous Tool Execution Loop (Direct aiplug Streaming Mode) ---
    async runAiplugStreamLoop(opts, callbacks) {
      const { createLLMAdapter } = await import("aiplug");
      const reasoningVal = opts.reasoning ?? false;
      const adapterOptions = {
        apiKey: opts.apiKey || "",
        baseURL: opts.baseURL,
        ...reasoningVal ? { options: { providerOptions: { reasoning: reasoningVal } } } : {}
      };
      if (opts.provider) adapterOptions.provider = opts.provider;
      if (opts.model) adapterOptions.model = opts.model;
      const adapter = createLLMAdapter(adapterOptions);
      const toolsDef = this.getTools().map((t) => ({
        name: t.name,
        description: t.description,
        parameters: t.parameters || t.schema || { type: "object", properties: {} }
      }));
      const conversationMessages = [
        { role: "system", content: this.systemPrompt }
      ];
      for (const msg of this.history) {
        const role = msg.sender || msg.role;
        conversationMessages.push({
          role: role === "system" ? "system" : role === "assistant" ? "assistant" : "user",
          content: msg.content
        });
      }
      const maxTurns = 5;
      let turnCount = 0;
      let finalAccumulatedText = "";
      while (turnCount < maxTurns) {
        turnCount++;
        let streamBuffer = "";
        const res = await adapter.converseStream(
          conversationMessages,
          toolsDef.length > 0 ? toolsDef : void 0,
          (delta) => {
            streamBuffer += delta;
          }
        );
        const parsed = parseAssistantOutput(streamBuffer, this.getTools().map((t) => t.name));
        const toolCallsToExecute = [];
        if (res.message?.toolCalls && res.message.toolCalls.length > 0) {
          for (const tc of res.message.toolCalls) {
            toolCallsToExecute.push({
              id: tc.id || `call_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
              name: tc.name,
              args: tc.input || {}
            });
          }
        } else if (parsed.extractedToolCalls.length > 0) {
          for (const tc of parsed.extractedToolCalls) {
            toolCallsToExecute.push({
              id: `call_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
              name: tc.name,
              args: tc.args || {}
            });
          }
        }
        if (toolCallsToExecute.length === 0) {
          finalAccumulatedText = parsed.cleanText || streamBuffer;
          callbacks.onChunk?.(finalAccumulatedText);
          this.emit("chunk", finalAccumulatedText);
          break;
        }
        conversationMessages.push({
          role: "assistant",
          content: parsed.cleanText || "",
          toolCalls: toolCallsToExecute.map((tc) => ({ id: tc.id, name: tc.name, input: tc.args }))
        });
        const toolResults = [];
        for (const tc of toolCallsToExecute) {
          const statusInfo = getToolStatusInfo(tc.name, tc.args);
          callbacks.onStatus?.(statusInfo);
          this.emit("status", statusInfo);
          callbacks.onToolCall?.({ name: tc.name, args: tc.args, callId: tc.id });
          this.emit("tool_call", { name: tc.name, args: tc.args, callId: tc.id });
          try {
            const result = await this.executeTool(tc.name, tc.args);
            callbacks.onToolResult?.({ name: tc.name, args: tc.args, result, callId: tc.id });
            this.emit("tool_result", { name: tc.name, args: tc.args, result, callId: tc.id });
            toolResults.push({
              toolCallId: tc.id,
              name: tc.name,
              content: typeof result === "string" ? result : JSON.stringify(result)
            });
          } catch (err) {
            toolResults.push({
              toolCallId: tc.id,
              name: tc.name,
              content: `Error: ${err.message || String(err)}`,
              isError: true
            });
          }
        }
        callbacks.onStatus?.({ text: "Thinking...", icon: "brain" });
        this.emit("status", { text: "Thinking...", icon: "brain" });
        conversationMessages.push({
          role: "tool",
          toolResults
        });
      }
      const assistantMsg = {
        role: "assistant",
        content: finalAccumulatedText || "No response generated.",
        sender: "assistant",
        timestamp: Date.now()
      };
      this.addMessage(assistantMsg);
      this.emit("message", assistantMsg);
      return {
        message: assistantMsg.content,
        role: "assistant",
        history: this.getHistory()
      };
    }
    // --- Multi-Turn Autonomous Tool Execution Loop (Relay Mode) ---
    async runRelayLoop(endpoint, opts) {
      const reasoningVal = opts.reasoning ?? false;
      const registeredTools = this.getTools().map((t) => ({
        name: t.name,
        description: t.description,
        parameters: t.parameters || t.schema
      }));
      const originalUserQuery = this.history[this.history.length - 1]?.content || "";
      let currentHistory = this.history.slice(0, -1).map((m) => ({
        sender: m.sender || m.role,
        text: m.content
      }));
      if (currentHistory.length > 12) {
        currentHistory = currentHistory.slice(-12);
      }
      let userMessage = originalUserQuery;
      let allowTools = true;
      const maxTurns = 5;
      let turnCount = 0;
      let finalReply = "";
      while (turnCount < maxTurns) {
        turnCount++;
        const payload = {
          projectId: opts.projectId,
          siteId: opts.projectId,
          message: userMessage,
          pageUrl: typeof location !== "undefined" ? location.href : void 0,
          pageTitle: typeof document !== "undefined" ? document.title : void 0,
          history: currentHistory,
          systemPrompt: this.systemPrompt,
          reasoning: reasoningVal,
          tools: allowTools && registeredTools.length > 0 ? registeredTools : void 0
        };
        if (opts.provider) payload.provider = opts.provider;
        if (opts.model) payload.model = opts.model;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Docmd-Plugin": `docmd-assistant/${ENGINE_VERSION}`,
            ...opts.headers || {}
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.unconfigured) {
          return {
            message: data.message || "Configuration incomplete.",
            role: "assistant",
            unconfigured: true,
            unconfiguredData: data,
            history: this.getHistory()
          };
        }
        if (!res.ok || data.error) {
          throw new Error(data.error || `Relay error (${res.status})`);
        }
        const rawReply = data.text || data.reply || data.response || data.message || "";
        const parsed = parseAssistantOutput(rawReply, registeredTools.map((t) => t.name));
        const toolCallsToExecute = [];
        if (data.tool_calls && Array.isArray(data.tool_calls) && data.tool_calls.length > 0) {
          for (const tc of data.tool_calls) {
            const toolName = tc.name || tc.function?.name;
            const toolArgs = typeof tc.arguments === "string" ? JSON.parse(tc.arguments) : tc.arguments || tc.args || {};
            toolCallsToExecute.push({
              id: tc.id || `call_${Date.now()}`,
              name: toolName,
              args: toolArgs
            });
          }
        } else if (parsed.extractedToolCalls.length > 0) {
          for (const tc of parsed.extractedToolCalls) {
            toolCallsToExecute.push({
              id: `call_${Date.now()}`,
              name: tc.name,
              args: tc.args || {}
            });
          }
        }
        if (toolCallsToExecute.length === 0) {
          finalReply = parsed.cleanText || rawReply || "No response returned.";
          break;
        }
        if (currentHistory.length === 0 || currentHistory[currentHistory.length - 1]?.text !== originalUserQuery) {
          currentHistory.push({
            sender: "user",
            text: originalUserQuery
          });
        }
        const toolSummaries = [];
        for (const tc of toolCallsToExecute) {
          this.emit("tool_call", { name: tc.name, args: tc.args, callId: tc.id });
          const result = await this.executeTool(tc.name, tc.args);
          this.emit("tool_result", { name: tc.name, args: tc.args, result, callId: tc.id });
          const resultStr = typeof result === "string" ? result : JSON.stringify(result, null, 2);
          toolSummaries.push(`[Search Result for ${tc.name}]:
${resultStr}`);
          currentHistory.push({
            sender: "assistant",
            text: `[Tool Call: ${tc.name}(${JSON.stringify(tc.args)})]`
          });
          currentHistory.push({
            sender: "user",
            text: `[Tool Result for ${tc.name}]: ${resultStr.length > 2e3 ? resultStr.slice(0, 2e3) + "..." : resultStr}`
          });
        }
        const contextStr = truncateContextCleanly(toolSummaries.join("\n\n"), 15e3);
        userMessage = `User Question: "${originalUserQuery}"

Retrieved Documentation Context:
${contextStr}

Based strictly on the documentation search results above, answer the user's question directly with concise explanations, exact commands, and clickable Markdown links. Do not repeat introductory greetings.`;
        allowTools = false;
      }
      const assistantMsg = {
        role: "assistant",
        content: finalReply,
        sender: "assistant",
        timestamp: Date.now()
      };
      this.addMessage(assistantMsg);
      this.emit("message", assistantMsg);
      return {
        message: finalReply,
        role: "assistant",
        history: this.getHistory()
      };
    }
    // --- Multi-Turn Autonomous Tool Execution Loop (Relay Streaming Mode) ---
    async runRelayStreamLoop(endpoint, opts, callbacks) {
      const reasoningVal = opts.reasoning ?? false;
      const registeredTools = this.getTools().map((t) => ({
        name: t.name,
        description: t.description,
        parameters: t.parameters || t.schema
      }));
      const originalUserQuery = this.history[this.history.length - 1]?.content || "";
      let currentHistory = this.history.slice(0, -1).map((m) => ({
        sender: m.sender || m.role,
        text: m.content
      }));
      if (currentHistory.length > 12) {
        currentHistory = currentHistory.slice(-12);
      }
      let userMessage = originalUserQuery;
      let allowTools = true;
      const maxTurns = 5;
      let turnCount = 0;
      let finalReply = "";
      while (turnCount < maxTurns) {
        turnCount++;
        const payload = {
          projectId: opts.projectId,
          siteId: opts.projectId,
          message: userMessage,
          pageUrl: typeof location !== "undefined" ? location.href : void 0,
          pageTitle: typeof document !== "undefined" ? document.title : void 0,
          history: currentHistory,
          systemPrompt: this.systemPrompt,
          reasoning: reasoningVal,
          tools: allowTools && registeredTools.length > 0 ? registeredTools : void 0,
          stream: true
        };
        if (opts.provider) payload.provider = opts.provider;
        if (opts.model) payload.model = opts.model;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "text/event-stream, application/json",
            "X-Docmd-Plugin": `docmd-assistant/${ENGINE_VERSION}`,
            ...opts.headers || {}
          },
          body: JSON.stringify(payload)
        });
        const contentType = res.headers.get("content-type") || "";
        const isEventStream = contentType.toLowerCase().includes("text/event-stream");
        if (!isEventStream || !res.body) {
          const textData = await res.text();
          let data;
          try {
            data = JSON.parse(textData);
          } catch {
            data = { text: textData };
          }
          if (data.unconfigured) {
            return {
              message: data.message || "Configuration incomplete.",
              role: "assistant",
              unconfigured: true,
              unconfiguredData: data,
              history: this.getHistory()
            };
          }
          if (!res.ok || data.error) {
            throw new Error(data.error || `Relay error (${res.status})`);
          }
          const rawReply = data.text || data.reply || data.response || data.message || "";
          const parsed2 = parseAssistantOutput(rawReply, registeredTools.map((t) => t.name));
          const toolCallsToExecute2 = [];
          if (data.tool_calls && Array.isArray(data.tool_calls) && data.tool_calls.length > 0) {
            for (const tc of data.tool_calls) {
              toolCallsToExecute2.push({
                id: tc.id || `call_${Date.now()}`,
                name: tc.name || tc.function?.name,
                args: typeof tc.arguments === "string" ? JSON.parse(tc.arguments) : tc.arguments || tc.args || {}
              });
            }
          } else if (parsed2.extractedToolCalls.length > 0) {
            for (const tc of parsed2.extractedToolCalls) {
              toolCallsToExecute2.push({
                id: `call_${Date.now()}`,
                name: tc.name,
                args: tc.args || {}
              });
            }
          }
          if (toolCallsToExecute2.length === 0) {
            finalReply = parsed2.cleanText || rawReply || "No response returned.";
            callbacks.onChunk?.(finalReply);
            this.emit("chunk", finalReply);
            break;
          }
          if (currentHistory.length === 0 || currentHistory[currentHistory.length - 1]?.text !== originalUserQuery) {
            currentHistory.push({
              sender: "user",
              text: originalUserQuery
            });
          }
          const toolSummaries2 = [];
          for (const tc of toolCallsToExecute2) {
            const statusInfo = getToolStatusInfo(tc.name, tc.args);
            callbacks.onStatus?.(statusInfo);
            this.emit("status", statusInfo);
            callbacks.onToolCall?.({ name: tc.name, args: tc.args, callId: tc.id });
            this.emit("tool_call", { name: tc.name, args: tc.args, callId: tc.id });
            const result = await this.executeTool(tc.name, tc.args);
            callbacks.onToolResult?.({ name: tc.name, args: tc.args, result, callId: tc.id });
            this.emit("tool_result", { name: tc.name, args: tc.args, result, callId: tc.id });
            const resultStr = typeof result === "string" ? result : JSON.stringify(result, null, 2);
            toolSummaries2.push(`[Search Result for ${tc.name}]:
${resultStr}`);
            currentHistory.push({
              sender: "assistant",
              text: `[Tool Call: ${tc.name}(${JSON.stringify(tc.args)})]`
            });
            currentHistory.push({
              sender: "user",
              text: `[Tool Result for ${tc.name}]: ${resultStr.length > 2e3 ? resultStr.slice(0, 2e3) + "..." : resultStr}`
            });
          }
          const contextStr2 = truncateContextCleanly(toolSummaries2.join("\n\n"), 15e3);
          userMessage = `User Question: "${originalUserQuery}"

Retrieved Documentation Context:
${contextStr2}

Based strictly on the documentation search results above, answer the user's question directly with concise explanations, exact commands, and clickable Markdown links. Do not repeat introductory greetings.`;
          allowTools = false;
          continue;
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";
        let streamReplyText = "";
        const sseToolCalls = [];
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split(/\r?\n/);
          buffer = lines.pop() || "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith(":")) continue;
            if (trimmed.startsWith("data:")) {
              const dataStr = trimmed.slice(5).trim();
              if (dataStr === "[DONE]") continue;
              try {
                const dataObj = JSON.parse(dataStr);
                if (dataObj.status) {
                  callbacks.onStatus?.(dataObj.status);
                  this.emit("status", dataObj.status);
                }
                if (dataObj.tool_calls && Array.isArray(dataObj.tool_calls)) {
                  sseToolCalls.push(...dataObj.tool_calls);
                }
                if (dataObj.delta) {
                  streamReplyText += dataObj.delta;
                  if (!allowTools) {
                    callbacks.onChunk?.(dataObj.delta);
                    this.emit("chunk", dataObj.delta);
                  }
                }
                if (dataObj.text) {
                  streamReplyText = dataObj.text;
                  if (!allowTools) {
                    callbacks.onChunk?.(dataObj.text);
                    this.emit("chunk", dataObj.text);
                  }
                }
              } catch {
                streamReplyText += dataStr;
                if (!allowTools) {
                  callbacks.onChunk?.(dataStr);
                  this.emit("chunk", dataStr);
                }
              }
            }
          }
        }
        if (!streamReplyText && buffer.trim()) {
          try {
            const parsedBuf = JSON.parse(buffer.trim());
            streamReplyText = parsedBuf.text || parsedBuf.reply || parsedBuf.message || buffer.trim();
            if (parsedBuf.tool_calls && Array.isArray(parsedBuf.tool_calls)) {
              sseToolCalls.push(...parsedBuf.tool_calls);
            }
          } catch {
            streamReplyText = buffer.trim();
          }
        }
        const parsed = parseAssistantOutput(streamReplyText, registeredTools.map((t) => t.name));
        const toolCallsToExecute = [];
        if (sseToolCalls.length > 0) {
          for (const tc of sseToolCalls) {
            toolCallsToExecute.push({
              id: tc.id || `call_${Date.now()}`,
              name: tc.name || tc.function?.name,
              args: typeof tc.arguments === "string" ? JSON.parse(tc.arguments) : tc.arguments || tc.args || {}
            });
          }
        } else if (parsed.extractedToolCalls.length > 0) {
          for (const tc of parsed.extractedToolCalls) {
            toolCallsToExecute.push({
              id: `call_${Date.now()}`,
              name: tc.name,
              args: tc.args || {}
            });
          }
        }
        if (toolCallsToExecute.length === 0) {
          finalReply = parsed.cleanText || streamReplyText || "No response returned.";
          if (allowTools) {
            callbacks.onChunk?.(finalReply);
            this.emit("chunk", finalReply);
          }
          break;
        }
        if (currentHistory.length === 0 || currentHistory[currentHistory.length - 1]?.text !== originalUserQuery) {
          currentHistory.push({
            sender: "user",
            text: originalUserQuery
          });
        }
        const toolSummaries = [];
        for (const tc of toolCallsToExecute) {
          const statusInfo = getToolStatusInfo(tc.name, tc.args);
          callbacks.onStatus?.(statusInfo);
          this.emit("status", statusInfo);
          callbacks.onToolCall?.({ name: tc.name, args: tc.args, callId: tc.id });
          this.emit("tool_call", { name: tc.name, args: tc.args, callId: tc.id });
          const result = await this.executeTool(tc.name, tc.args);
          callbacks.onToolResult?.({ name: tc.name, args: tc.args, result, callId: tc.id });
          this.emit("tool_result", { name: tc.name, args: tc.args, result, callId: tc.id });
          const resultStr = typeof result === "string" ? result : JSON.stringify(result, null, 2);
          toolSummaries.push(`[Search Result for ${tc.name}]:
${resultStr}`);
          currentHistory.push({
            sender: "assistant",
            text: `[Tool Call: ${tc.name}(${JSON.stringify(tc.args)})]`
          });
          currentHistory.push({
            sender: "user",
            text: `[Tool Result for ${tc.name}]: ${resultStr.length > 2e3 ? resultStr.slice(0, 2e3) + "..." : resultStr}`
          });
        }
        const contextStr = truncateContextCleanly(toolSummaries.join("\n\n"), 15e3);
        userMessage = `User Question: "${originalUserQuery}"

Retrieved Documentation Context:
${contextStr}

Based strictly on the documentation search results above, answer the user's question directly with concise explanations, exact commands, and clickable Markdown links. Do not repeat introductory greetings.`;
        allowTools = false;
        continue;
      }
      const assistantMsg = {
        role: "assistant",
        content: finalReply || "No response returned.",
        sender: "assistant",
        timestamp: Date.now()
      };
      this.addMessage(assistantMsg);
      this.emit("message", assistantMsg);
      return {
        message: finalReply,
        role: "assistant",
        history: this.getHistory()
      };
    }
    // --- Tool Execution Pipeline ---
    // Stopwords to strip from multi-word search queries before splitting into individual keywords
    static SEARCH_STOPWORDS = /* @__PURE__ */ new Set([
      "a",
      "an",
      "the",
      "is",
      "are",
      "was",
      "were",
      "be",
      "been",
      "being",
      "have",
      "has",
      "had",
      "do",
      "does",
      "did",
      "will",
      "would",
      "shall",
      "should",
      "may",
      "might",
      "must",
      "can",
      "could",
      "to",
      "of",
      "in",
      "for",
      "on",
      "with",
      "at",
      "by",
      "from",
      "as",
      "into",
      "through",
      "during",
      "before",
      "after",
      "above",
      "below",
      "between",
      "out",
      "up",
      "down",
      "off",
      "over",
      "under",
      "again",
      "further",
      "then",
      "once",
      "here",
      "there",
      "when",
      "where",
      "why",
      "how",
      "all",
      "each",
      "every",
      "both",
      "few",
      "more",
      "most",
      "other",
      "some",
      "such",
      "no",
      "nor",
      "not",
      "only",
      "own",
      "same",
      "so",
      "than",
      "too",
      "very",
      "just",
      "because",
      "but",
      "and",
      "or",
      "if",
      "while",
      "about",
      "what",
      "which",
      "who",
      "whom",
      "this",
      "that",
      "these",
      "those",
      "am",
      "it",
      "its",
      "i",
      "me",
      "my",
      "we",
      "our",
      "you",
      "your",
      "he",
      "she",
      "they",
      "them",
      "his",
      "her",
      "their"
    ]);
    async executeTool(name, rawArgs) {
      const tool = this.tools.get(name);
      if (!tool) {
        return { error: `Tool "${name}" is not registered on this assistant engine.` };
      }
      const handler = tool.handler || tool.execute;
      if (!handler) {
        return { error: `Tool "${name}" has no valid execution handler.` };
      }
      let args = rawArgs;
      if (typeof rawArgs === "string") {
        try {
          args = JSON.parse(rawArgs);
        } catch {
          args = { query: rawArgs, path: rawArgs, code: rawArgs };
        }
      }
      if (!args || typeof args !== "object") {
        args = {};
      }
      if (!args.query && (args.q || args.search_query || args.text || args.input || args.keyword || args.keywords)) {
        args.query = args.q || args.search_query || args.text || args.input || args.keyword || args.keywords;
      }
      if (name === "search_documentation" && args.query && typeof args.query === "string") {
        const rawQuery = args.query.trim();
        const words = rawQuery.toLowerCase().replace(/[^\w\s-]/g, "").split(/\s+/).filter(Boolean);
        const keywords = words.filter((w) => w.length > 2 && !_DocmdAssistantEngine.SEARCH_STOPWORDS.has(w));
        if (keywords.length >= 3) {
          const allResults = [];
          const seenPaths = /* @__PURE__ */ new Set();
          for (const keyword of keywords.slice(0, 5)) {
            try {
              const result = await handler({ ...args, query: keyword }, { engine: this });
              if (Array.isArray(result)) {
                for (const item of result) {
                  const key = item.path || item.url || item.title || JSON.stringify(item);
                  if (!seenPaths.has(key)) {
                    seenPaths.add(key);
                    allResults.push(item);
                  }
                }
              }
            } catch {
            }
          }
          return allResults.length > 0 ? allResults.slice(0, 8) : [];
        }
      }
      try {
        const result = await handler(args, { engine: this });
        return result;
      } catch (err) {
        console.warn(`[docmd-assistant] Tool execution failed for "${name}":`, err);
        this.emit("error", { tool: name, error: err });
        return { error: `Tool execution failed: ${err.message || String(err)}` };
      }
    }
  };

  // src/client/index.ts
  var DocmdAIAssistantUI = class {
    constructor() {
      this.container = null;
      this.isDrawerOpened = false;
      this.isPending = false;
      const cfg = window.__docmd_ai_config || window.__DOCMD_AI_CONFIG__ || {};
      this.projectId = cfg.projectId || cfg.siteId || cfg.cloud?.projectId || cfg.cloud?.siteId || "default";
      this.isUnconfigured = (!cfg.projectId || cfg.projectId === "default") && !cfg.apiKey && !cfg.baseURL;
      const initialSystemPrompt = this.buildSystemPrompt();
      this.engine = new DocmdAssistantEngine({
        projectId: this.projectId,
        endpoint: cfg.endpoint || (this.projectId ? "https://api.docmd.io/v1/ai/chat" : void 0),
        provider: cfg.provider,
        model: cfg.model,
        systemPrompt: initialSystemPrompt,
        reasoning: cfg.reasoning ?? false
      });
      const isSemanticUsable = cfg.searchCapabilities?.semantic === true;
      this.engine.registerTool({
        name: "get_site_structure",
        description: "Get the complete documentation site structure, including available versions (current and historical), supported languages/locales, workspace projects, search capabilities, and page navigation hierarchy with titles and URLs.",
        execute: async () => {
          return this.getSiteStructure();
        }
      });
      this.engine.registerTool({
        name: "search_documentation",
        description: `Search documentation pages across all projects in this workspace using full-text keyword matching ${isSemanticUsable ? "and semantic vector search" : "(keyword search active; semantic search disabled)"}. Always supply concise, targeted search terms for highest accuracy.`,
        execute: async (rawArgs) => {
          const query = typeof rawArgs === "string" ? rawArgs : rawArgs?.query || rawArgs?.q || rawArgs?.search_query || rawArgs?.text || rawArgs?.input || "";
          const project = typeof rawArgs === "object" ? rawArgs?.project : void 0;
          return await this.searchAllWorkspaceIndexes(query, project);
        }
      });
      if (typeof document !== "undefined") {
        this.mount();
      }
    }
    renderSuggestionsHtml() {
      const cfg = window.__docmd_ai_config || {};
      const rawSuggestions = cfg.suggestions;
      const genericOptions = [
        { label: "How do I get started?", prompt: "How do I get started with this project?" },
        { label: "Key Features", prompt: "What are the main features documented here?" },
        { label: "Installation & Setup", prompt: "How do I install and set up this project?" },
        { label: "Configuration Options", prompt: "What configuration options are available?" },
        { label: "Quick Example", prompt: "Can you show me a quick usage example from the docs?" }
      ];
      let items = [];
      if (Array.isArray(rawSuggestions) && rawSuggestions.length > 0) {
        items = rawSuggestions.map((item) => {
          if (typeof item === "string") {
            return { label: item, prompt: item };
          }
          return {
            label: item.label || item.prompt || item.title || "Question",
            prompt: item.prompt || item.label || item.title || item
          };
        });
      } else {
        const shuffled = [...genericOptions].sort(() => Math.random() - 0.5);
        items = shuffled.slice(0, 2);
      }
      const buttons = items.map((item) => `<button class="docmd-ai-pill-btn" data-prompt="${this.escapeHtml(item.prompt)}">${this.escapeHtml(item.label)}</button>`).join("");
      return `<div class="docmd-ai-suggestions-row">${buttons}</div>`;
    }
    mount() {
      if (document.getElementById("docmd-ai-plugin-root")) return;
      const cfg = window.__docmd_ai_config || {};
      const i18n = window.__DOCMD_AI_I18N__ || {};
      const pos = cfg.position || "bottom-center";
      const placeholder = cfg.placeholder || i18n["ai.inputPlaceholder"] || "Ask AI Assistant...";
      const greeting = cfg.greeting || i18n["ai.greeting"] || "Hello! Ask me anything about this documentation.";
      const chatTitle = i18n["ai.chatTitle"] || "AI Assistant";
      const clearTitle = i18n["ai.clearChat"] || "Clear History";
      const closeTitle = i18n["ai.close"] || "Close AI Assistant";
      this.container = document.createElement("div");
      this.container.id = "docmd-ai-plugin-root";
      this.container.className = `pos-${pos}`;
      this.container.innerHTML = `
      <!-- Floating Bottom Prompt Bar -->
      <div class="docmd-ai-bar-wrap" id="docmd-ai-bar-wrap">
        <form class="docmd-ai-prompt-bar" id="docmd-ai-bar-form">
          <span class="docmd-ai-sparkle-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          </span>
          <input type="text" class="docmd-ai-bar-input" id="docmd-ai-bar-input" placeholder="${placeholder}" autocomplete="off" />
          <span class="docmd-ai-shortcut-badge">\u2318I</span>
          <button type="submit" class="docmd-ai-submit-btn" title="Send (Enter)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>
          </button>
        </form>
      </div>

      <!-- Floating Sidebar Drawer -->
      <div class="docmd-ai-drawer" id="docmd-ai-drawer">
        <div class="docmd-ai-drawer-header">
          <div class="docmd-ai-header-left">
            <span class="docmd-ai-status-dot"></span>
            <span class="docmd-ai-title-text">${chatTitle}</span>
            <!--<span class="docmd-ai-badge-tag">docmd</span>-->
          </div>
          <div class="docmd-ai-header-right">
            <button class="docmd-ai-icon-action" id="docmd-ai-clear-btn" title="${clearTitle}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
            <button class="docmd-ai-icon-action" id="docmd-ai-close-btn" title="${closeTitle}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <div class="docmd-ai-messages-list" id="docmd-ai-messages">
          <div class="docmd-ai-chat-bubble assistant">
            ${greeting}
            ${this.renderSuggestionsHtml()}
          </div>
        </div>

        <div class="docmd-ai-drawer-footer">
          <form class="docmd-ai-drawer-form" id="docmd-ai-drawer-form">
            <input type="text" class="docmd-ai-drawer-input" id="docmd-ai-drawer-input" placeholder="${placeholder}" autocomplete="off" />
            <button type="submit" class="docmd-ai-drawer-send-btn" title="Send (Enter)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>
            </button>
          </form>
          <div class="docmd-ai-footer-branding">
            <a href="https://docmd.io/assistant/" target="_blank" rel="noopener" class="docmd-ai-footer-link">${i18n["ai.poweredBy"] || "Powered by docmd assistant"}</a>
          </div>
        </div>
      </div>
    `;
      document.body.appendChild(this.container);
      this.bindEvents();
    }
    bindEvents() {
      const barWrap = document.getElementById("docmd-ai-bar-wrap");
      const barForm = document.getElementById("docmd-ai-bar-form");
      const barInput = document.getElementById("docmd-ai-bar-input");
      const drawer = document.getElementById("docmd-ai-drawer");
      const closeBtn = document.getElementById("docmd-ai-close-btn");
      const clearBtn = document.getElementById("docmd-ai-clear-btn");
      const drawerForm = document.getElementById("docmd-ai-drawer-form");
      const drawerInput = document.getElementById("docmd-ai-drawer-input");
      barForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        if (this.isPending) return;
        const query = barInput.value.trim();
        if (!query) return;
        barInput.value = "";
        this.openDrawer();
        this.submitQuery(query);
      });
      closeBtn?.addEventListener("click", () => this.closeDrawer());
      clearBtn?.addEventListener("click", () => this.clearChat());
      drawerForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        if (this.isPending) return;
        const query = drawerInput.value.trim();
        if (!query) return;
        drawerInput.value = "";
        this.submitQuery(query);
      });
      document.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
          e.preventDefault();
          if (this.isDrawerOpened) {
            this.closeDrawer();
          } else {
            this.openDrawer();
            drawerInput?.focus();
          }
        } else if (e.key === "Escape" && this.isDrawerOpened) {
          this.closeDrawer();
        }
      });
      const msgsContainer = document.getElementById("docmd-ai-messages");
      msgsContainer?.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.classList.contains("docmd-ai-pill-btn")) {
          if (this.isPending) return;
          const prompt = target.getAttribute("data-prompt");
          if (prompt) {
            this.openDrawer();
            this.submitQuery(prompt);
          }
        }
      });
    }
    setPendingState(pending) {
      this.isPending = pending;
      const barInput = document.getElementById("docmd-ai-bar-input");
      const barSubmitBtn = document.querySelector('#docmd-ai-bar-form button[type="submit"]');
      const drawerInput = document.getElementById("docmd-ai-drawer-input");
      const drawerSubmitBtn = document.querySelector('#docmd-ai-drawer-form button[type="submit"]');
      const pillBtns = document.querySelectorAll(".docmd-ai-pill-btn");
      if (barInput) barInput.disabled = pending;
      if (barSubmitBtn) barSubmitBtn.disabled = pending;
      if (drawerInput) drawerInput.disabled = pending;
      if (drawerSubmitBtn) drawerSubmitBtn.disabled = pending;
      pillBtns.forEach((btn) => {
        btn.disabled = pending;
        if (pending) btn.classList.add("disabled");
        else btn.classList.remove("disabled");
      });
      const barForm = document.getElementById("docmd-ai-bar-form");
      const drawerForm = document.getElementById("docmd-ai-drawer-form");
      if (pending) {
        barForm?.classList.add("pending");
        drawerForm?.classList.add("pending");
      } else {
        barForm?.classList.remove("pending");
        drawerForm?.classList.remove("pending");
      }
    }
    openDrawer() {
      this.isDrawerOpened = true;
      const barWrap = document.getElementById("docmd-ai-bar-wrap");
      const drawer = document.getElementById("docmd-ai-drawer");
      barWrap?.classList.add("hidden");
      drawer?.classList.add("open");
    }
    closeDrawer() {
      this.isDrawerOpened = false;
      const barWrap = document.getElementById("docmd-ai-bar-wrap");
      const drawer = document.getElementById("docmd-ai-drawer");
      drawer?.classList.remove("open");
      barWrap?.classList.remove("hidden");
    }
    buildSystemPrompt() {
      const cfg = window.__docmd_ai_config || {};
      const currentUrl = typeof location !== "undefined" ? location.href : "";
      const siteTitle = cfg.siteTitle || (typeof document !== "undefined" ? document.title : "Documentation");
      const isWorkspace = !!(cfg.isWorkspace && Array.isArray(cfg.workspaceProjects) && cfg.workspaceProjects.length > 0);
      const getSiteBaseUrl = () => {
        const cfg2 = window.__docmd_ai_config || {};
        let base = cfg2.siteBase || "/";
        if (typeof location !== "undefined") {
          const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
          if (isLocal && base !== "/" && !location.pathname.startsWith(base)) {
            base = "/";
          }
          return new URL(base.startsWith("/") ? base : "/" + base, location.origin).href;
        }
        return base;
      };
      const siteBaseUrl = getSiteBaseUrl();
      const versionsObj = cfg.versions || {};
      const hasVersions = !!(versionsObj && (Array.isArray(versionsObj.all) || versionsObj.current));
      const allVersions = Array.isArray(versionsObj.all) ? versionsObj.all : versionsObj.current ? [{ id: versionsObj.current, label: versionsObj.current, dir: `v${versionsObj.current}` }] : [];
      const defaultVer = allVersions.find((v) => v.id === versionsObj.current) || allVersions[0] || null;
      let activeVersion = defaultVer;
      if (typeof location !== "undefined" && allVersions.length > 0) {
        for (const v of allVersions) {
          const vDir = v.dir || v.id;
          if (location.pathname.includes(`/${vDir}/`)) {
            activeVersion = v;
            break;
          }
        }
      }
      const i18nObj = cfg.i18n || {};
      const hasLocales = !!(i18nObj && (Array.isArray(i18nObj.locales) || i18nObj.default));
      const defaultLocaleId = i18nObj.default || "en";
      const allLocales = Array.isArray(i18nObj.locales) ? i18nObj.locales : [{ id: defaultLocaleId, label: "Default" }];
      const defaultLocale = allLocales.find((l) => l.id === defaultLocaleId) || allLocales[0];
      let activeLocale = defaultLocale;
      if (typeof location !== "undefined" && allLocales.length > 0) {
        const pathParts = location.pathname.split("/");
        const foundLoc = allLocales.find((l) => pathParts.includes(l.id));
        if (foundLoc) activeLocale = foundLoc;
      }
      let currentProjectName = "Main Documentation";
      let currentProjectPrefix = "/";
      if (isWorkspace && Array.isArray(cfg.workspaceProjects)) {
        const matchProj = cfg.workspaceProjects.find((p) => {
          const pPrefix = (p.prefix || "/").replace(/^\/|\/$/g, "");
          return pPrefix && typeof location !== "undefined" && location.pathname.includes(`/${pPrefix}`);
        });
        if (matchProj) {
          currentProjectName = matchProj.name || matchProj.prefix;
          currentProjectPrefix = matchProj.prefix || "/";
        } else {
          const rootProj = cfg.workspaceProjects.find((p) => p.prefix === "/");
          if (rootProj) currentProjectName = rootProj.name || "Main Documentation";
        }
      }
      let workspaceContext = `
SITE & ENVIRONMENT CONTEXT:
- Site Title: "${siteTitle}"
- Site Base URL: ${siteBaseUrl}
- Current Page URL: ${currentUrl}
- Current Active Project: "${currentProjectName}" (Prefix: "${currentProjectPrefix}")`;
      if (hasVersions && defaultVer && activeVersion) {
        const versionsListStr = allVersions.map((v) => `${v.label}${v.id === defaultVer.id ? " (latest/default)" : ""}`).join(", ");
        workspaceContext += `
- Active Version: ${activeVersion.label} (Directory: "${activeVersion.dir || activeVersion.id}")
- Default / Latest Version: ${defaultVer.label}
- Available Versions: ${versionsListStr}`;
      }
      if (hasLocales && activeLocale) {
        const localesListStr = allLocales.map((l) => `${l.label} ("${l.id}")${l.id === defaultLocaleId ? " (default)" : ""}`).join(", ");
        workspaceContext += `
- Active Locale: ${activeLocale.label} ("${activeLocale.id}")
- Available Locales: ${localesListStr}`;
      }
      if (isWorkspace && Array.isArray(cfg.workspaceProjects)) {
        const projectsList = cfg.workspaceProjects.map((p, idx) => {
          const pName = p.name || p.prefix;
          const pPrefix = p.prefix || "/";
          const pAbsUrl = typeof location !== "undefined" ? new URL(pPrefix.replace(/^\//, ""), siteBaseUrl).href : pPrefix;
          const isCurrent = pName === currentProjectName ? " [CURRENT PAGE PROJECT]" : "";
          return `  ${idx + 1}. Project "${pName}" (Prefix: "${pPrefix}", URL: ${pAbsUrl})${isCurrent}`;
        }).join("\n");
        workspaceContext += `
- Multi-Project Workspace Setup: Active (${cfg.workspaceProjects.length} Projects)
- Available Workspace Projects:
${projectsList}`;
      }
      workspaceContext += `

CRITICAL SCOPE & NAVIGATION RULES:
1. SCOPE PRIORITIZATION: Prioritize answers using content from the Current Active Project ("${currentProjectName}")${hasVersions && activeVersion ? `, active version branch (${activeVersion.label})` : ""}${hasLocales && activeLocale ? `, and active language (${activeLocale.label})` : ""}.
2. STRICT ACTIVE / LATEST VERSION ONLY: ONLY cite, explain, recommend, and link to pages from the active version (${activeVersion?.label || defaultVer?.label}) or latest branch (${defaultVer?.label}). Never suggest, cite, or list deprecated historical versions unless the user explicitly asks for an older version.
3. AUTONOMOUS & PROACTIVE TOOL EXECUTION:
   - Always use your tools proactively. NEVER ask the user "Would you like me to search?" or "Should I check?". Directly invoke \`search_documentation\` or \`get_site_structure\` to retrieve facts before answering.
   - For any question about version numbers, latest releases, recent updates, or changelogs, you MUST search the release notes with \`search_documentation\` (query: "release notes" or specific version like "0.9.1") to find the newest release note before giving the final answer. Never state that a release does not exist without searching.
4. ACCURATE HYPERLINKS: ALWAYS ground page hyperlinks strictly in real search results or valid project URLs (${siteBaseUrl}). Never invent or hallucinate invalid subpaths.`;
      const defaultBasePrompt = `You are docmd assistant \u2014 a professional, precise, and concise technical AI assistant for this documentation site.

CRITICAL CONSTRAINTS & BEHAVIORAL RULES:
1. IDENTITY: Your name is "docmd assistant". You are an expert AI guide specifically for this documentation site. Never identify yourself simply as "docmd" or "I am docmd".
2. STRICT SCOPE & BOUNDARIES: Answer ONLY questions related to the software, APIs, tools, installation, configuration, and documentation provided on this site. Politely decline off-topic queries.
3. PROFESSIONAL & CONCISE: Provide direct, succinct, and professional answers. Do NOT use excessive emojis (keep emojis to a minimum or none). Avoid conversational fluff, boilerplate apologies, or asking for permission. Get straight to the answer.
4. TOOL SELECTION & EXECUTION:
   - Use \`get_site_structure\` whenever you need extended structural inspection of available documentation versions, supported locales, or navigation trees.
   - Use \`search_documentation\` to search documentation content for specific technical terms, API parameters, error messages, or release notes. Keyword search is always active; pass clean, focused search terms (e.g. "0.9.1 release notes" or "cards container") for highest accuracy.
5. HYPERLINKS & CITATIONS: Always include clickable Markdown hyperlinks \`[Page Title](path)\` in your response for referenced pages.`;
      const basePrompt = cfg.systemPrompt || defaultBasePrompt;
      return `${basePrompt}

${workspaceContext}`;
    }
    getSiteStructure() {
      const cfg = window.__docmd_ai_config || {};
      return {
        siteTitle: cfg.siteTitle || "Documentation",
        siteBaseUrl: cfg.siteUrl || cfg.siteBase || "/",
        currentUrl: typeof location !== "undefined" ? location.href : "",
        versions: cfg.versions || null,
        locales: cfg.i18n || null,
        searchCapabilities: cfg.searchCapabilities || { keyword: true, semantic: false },
        isWorkspace: !!cfg.isWorkspace,
        workspaceProjects: cfg.workspaceProjects || [],
        navigation: cfg.navigation || []
      };
    }
    async searchAllWorkspaceIndexes(rawQuery, projectFilter) {
      const hits = [];
      const query = typeof rawQuery === "string" ? rawQuery : rawQuery?.query || rawQuery?.q || rawQuery?.search_query || rawQuery?.text || rawQuery?.input || "";
      const cleanQuery = (query || "").trim();
      if (!cleanQuery) return [];
      const cleanQueryLower = cleanQuery.toLowerCase();
      const cfg = window.__docmd_ai_config || {};
      const getSiteBaseUrl = () => {
        const cfg2 = window.__docmd_ai_config || {};
        let base = cfg2.siteBase || "/";
        if (typeof location !== "undefined") {
          const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
          if (isLocal && base !== "/" && !location.pathname.startsWith(base)) {
            base = "/";
          }
          return new URL(base.startsWith("/") ? base : "/" + base, location.origin).href;
        }
        return base;
      };
      const siteBaseUrl = getSiteBaseUrl();
      const versionsObj = cfg.versions || {};
      const allVerList = Array.isArray(versionsObj.all) ? versionsObj.all : [];
      const currentVerId = String(versionsObj.current || "");
      const currentVerDir = versionsObj.current ? allVerList.find((v) => v.id === versionsObj.current)?.dir || `v${versionsObj.current}` : "";
      const olderVerTokens = [];
      for (const v of allVerList) {
        if (String(v.id) !== currentVerId) {
          if (v.id) olderVerTokens.push(String(v.id).toLowerCase());
          if (v.dir) olderVerTokens.push(String(v.dir).toLowerCase());
          if (v.label) {
            olderVerTokens.push(String(v.label).toLowerCase());
            olderVerTokens.push(String(v.label).replace(/^v/i, "").toLowerCase());
          }
        }
      }
      const isExplicitOlderVerRequest = olderVerTokens.some((tok) => cleanQueryLower.includes(tok));
      const i18nObj = cfg.i18n || {};
      const allLocales = Array.isArray(i18nObj.locales) ? i18nObj.locales : [];
      let activeLocaleId = i18nObj.default || "en";
      if (typeof location !== "undefined") {
        const pathParts = location.pathname.split("/");
        const foundLoc = allLocales.find((l) => pathParts.includes(l.id));
        if (foundLoc) activeLocaleId = foundLoc.id;
      }
      const nonActiveLocaleIds = allLocales.filter((l) => l.id !== activeLocaleId).map((l) => l.id.toLowerCase());
      const isExplicitLocaleRequest = nonActiveLocaleIds.some((locId) => cleanQueryLower.includes(locId));
      const isPathExcluded = (rawId) => {
        const norm = String(rawId || "").replace(/^\//, "").toLowerCase();
        if (!isExplicitOlderVerRequest) {
          for (const tok of olderVerTokens) {
            if (norm === tok || norm.startsWith(`${tok}/`) || norm.includes(`/${tok}/`)) {
              return true;
            }
          }
        }
        if (!isExplicitLocaleRequest) {
          for (const loc of nonActiveLocaleIds) {
            if (norm === loc || norm.startsWith(`${loc}/`) || norm.includes(`/${loc}/`)) {
              return true;
            }
          }
        }
        return false;
      };
      const queryTokens = cleanQueryLower.replace(/[\-_.]/g, " ").split(/\s+/).filter((t) => t.length > 0);
      const versionMatches = cleanQuery.match(/\d+[\.\-_]\d+[\.\-_]\d+/g);
      try {
        if (window.docmdSearch && typeof window.docmdSearch.search === "function") {
          const localHits = await window.docmdSearch.search(query);
          if (Array.isArray(localHits)) {
            const filteredAndScored = localHits.filter((item) => !isPathExcluded(item.id || item.url || "")).map((item) => {
              const rawId = String(item.id || item.url || "");
              const cleanId = rawId.startsWith("/") ? rawId.slice(1) : rawId;
              const titleLower = String(item.title || cleanId).toLowerCase();
              const textLower = String(item.text || item.snippet || "").toLowerCase();
              const idLower = cleanId.toLowerCase();
              let score = typeof item.score === "number" ? item.score : 1;
              for (const tok of queryTokens) {
                if (titleLower.includes(tok)) score += 15;
                if (idLower.includes(tok)) score += 10;
                if (textLower.includes(tok)) score += 2;
              }
              if (versionMatches) {
                for (const vm of versionMatches) {
                  const normV = vm.replace(/[\-_]/g, ".");
                  const dashV = vm.replace(/[\.]/g, "-");
                  if (titleLower.includes(normV) || titleLower.includes(dashV) || idLower.includes(dashV) || idLower.includes(normV)) {
                    score += 60;
                  }
                }
              }
              return { item, score, cleanId };
            }).sort((a, b) => b.score - a.score);
            for (const entry of filteredAndScored) {
              const { item, cleanId } = entry;
              const fullUrl = cleanId.startsWith("http") ? cleanId : new URL(cleanId, siteBaseUrl).href;
              if (!hits.some((existing) => existing.url === fullUrl)) {
                hits.push({
                  project: "Current Project",
                  title: item.title || cleanId,
                  url: fullUrl,
                  snippet: item.snippet || item.text || "",
                  searchType: "keyword"
                });
              }
              if (hits.length >= 6) break;
            }
          }
        }
      } catch {
      }
      if (cfg.isWorkspace && Array.isArray(cfg.workspaceProjects)) {
        for (const p of cfg.workspaceProjects) {
          if (projectFilter && p.prefix !== projectFilter && p.name !== projectFilter) continue;
          try {
            const pPrefix = p.prefix || "/";
            const pBaseUrl = new URL(pPrefix.replace(/^\//, ""), siteBaseUrl).href;
            const searchIndexPath = `${pBaseUrl}_docmd-search/search-index.json`;
            const res = await fetch(searchIndexPath);
            if (res.ok) {
              const indexData = await res.json();
              const docs = indexData.storedFields ? Object.values(indexData.storedFields) : Array.isArray(indexData) ? indexData : [];
              const filteredDocs = docs.filter((doc) => {
                const rawId = String(doc.id || doc.url || "");
                return !isPathExcluded(rawId);
              });
              const scored = filteredDocs.map((doc) => {
                const titleStr = String(doc.title || doc.id || "").toLowerCase();
                const textStr = String(doc.text || "").toLowerCase();
                const rawId = String(doc.id || "");
                let score = 0;
                for (const term of queryTokens) {
                  if (titleStr.includes(term)) score += 15;
                  if (rawId.toLowerCase().includes(term)) score += 10;
                  if (textStr.includes(term)) score += 2;
                }
                if (versionMatches) {
                  for (const vm of versionMatches) {
                    const normV = vm.replace(/[\-_]/g, ".");
                    const dashV = vm.replace(/[\.]/g, "-");
                    if (titleStr.includes(normV) || titleStr.includes(dashV) || rawId.toLowerCase().includes(dashV)) {
                      score += 60;
                    }
                  }
                }
                if (currentVerDir && rawId.includes(`/${currentVerDir}/`)) score += 10;
                if (activeLocaleId && rawId.includes(`/${activeLocaleId}/`)) score += 5;
                return { doc, score };
              }).filter((h) => h.score > 0).sort((a, b) => b.score - a.score);
              for (const hit of scored.slice(0, 3)) {
                const doc = hit.doc;
                const rawId = doc.id || "";
                const cleanId = rawId.startsWith("/") ? rawId.slice(1) : rawId;
                const fullUrl = rawId.startsWith("http") ? rawId : new URL(cleanId, pBaseUrl).href;
                if (!hits.some((existing) => existing.url === fullUrl)) {
                  hits.push({
                    project: p.name || p.prefix,
                    title: doc.title || rawId,
                    url: fullUrl,
                    snippet: (doc.text || "").slice(0, 150) + "...",
                    searchType: "keyword"
                  });
                }
              }
            }
          } catch {
          }
        }
      }
      return hits;
    }
    async fetchLocalSearchContext(query) {
      const trimmed = query.trim().toLowerCase();
      const isGreetingOrCasual = /^(hi|hello|hey|howdy|greetings|good\s+(morning|afternoon|evening|day)|who\s+are\s+you|what\s+can\s+you\s+do|help|thanks|thank\s+you|bye|goodbye)[!?. ]*$/i.test(trimmed) || trimmed.length <= 2;
      if (isGreetingOrCasual) {
        return "";
      }
      try {
        const hits = await this.searchAllWorkspaceIndexes(query);
        if (Array.isArray(hits) && hits.length > 0) {
          const formattedHits = hits.slice(0, 5).map((hit) => {
            return `- [${hit.project}] ${hit.title} (${hit.searchType}): ${hit.url}
  Snippet: ${hit.snippet}`;
          }).join("\n");
          return `

[Documentation Search Context (Multi-Project Workspace)]:
${formattedHits}`;
        }
      } catch {
      }
      return "";
    }
    renderUnconfiguredNotice(data) {
      const title = data?.title || "Connect Your AI Assistant";
      const message = data?.message || "Add your free AI relay or BYOK API key on docmd Cloud to enable the assistant for your visitors.";
      const configUrl = data?.configUrl || "https://cloud.docmd.io";
      const features = Array.isArray(data?.features) ? data.features : [
        "**Free AI relay** \u2014 bring your own API key for OpenAI, Anthropic, Gemini, DeepSeek, or Ollama.",
        "**Query analytics** \u2014 see what your visitors are asking in real time.",
        "**Setup takes under a minute** \u2014 just add your `projectId` to `docmd.config.json`."
      ];
      const featureItemsHtml = features.map((f) => `<li>${this.formatMarkdown(f)}</li>`).join("");
      const msgs = document.getElementById("docmd-ai-messages");
      const div = document.createElement("div");
      div.className = "docmd-ai-chat-bubble assistant";
      div.innerHTML = `
      <div class="docmd-ai-unconfigured-card">
        <div class="docmd-ai-unconfigured-title">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
          ${this.escapeHtml(title)}
        </div>
        <p>${this.escapeHtml(message)}</p>
        <ul class="docmd-ai-unconfigured-list">
          ${featureItemsHtml}
        </ul>
        <a href="${this.escapeHtml(configUrl)}" target="_blank" rel="noopener" class="docmd-ai-unconfigured-btn">
          Connect on docmd Cloud \u2192
        </a>
      </div>
    `;
      if (msgs) {
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
      }
    }
    getStatusSvgIcon(iconName) {
      switch (iconName) {
        case "search":
          return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
        case "folder-tree":
          return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`;
        case "cog":
          return `<svg class="docmd-ai-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;
        case "brain":
        case "sparkles":
        default:
          return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`;
      }
    }
    async submitQuery(text) {
      if (this.isPending) return;
      this.setPendingState(true);
      this.appendMsg("user", text, true);
      const msgs = document.getElementById("docmd-ai-messages");
      const bubble = document.createElement("div");
      bubble.className = "docmd-ai-chat-bubble assistant";
      const statusWrap = document.createElement("div");
      statusWrap.className = "docmd-ai-status-badge";
      statusWrap.innerHTML = `${this.getStatusSvgIcon("brain")} <span>Thinking...</span>`;
      bubble.appendChild(statusWrap);
      const contentDiv = document.createElement("div");
      contentDiv.className = "docmd-ai-content";
      bubble.appendChild(contentDiv);
      if (msgs) {
        msgs.appendChild(bubble);
        msgs.scrollTop = msgs.scrollHeight;
      }
      let accumulatedText = "";
      try {
        const docContext = await this.fetchLocalSearchContext(text);
        const queryWithContext = docContext ? `${text}${docContext}` : text;
        let res;
        if (typeof this.engine.sendMessageStream === "function") {
          res = await this.engine.sendMessageStream(queryWithContext, {
            onStatus: (status) => {
              if (statusWrap && status) {
                statusWrap.style.display = "inline-flex";
                statusWrap.innerHTML = `${this.getStatusSvgIcon(status.icon)} <span>${this.escapeHtml(status.text || "Thinking...")}</span>`;
                if (msgs) msgs.scrollTop = msgs.scrollHeight;
              }
            },
            onChunk: (delta) => {
              accumulatedText = delta;
              if (statusWrap) {
                statusWrap.style.display = "none";
              }
              contentDiv.innerHTML = this.formatMarkdown(accumulatedText);
              if (msgs) msgs.scrollTop = msgs.scrollHeight;
            }
          });
        } else {
          res = await this.engine.sendMessage(queryWithContext);
        }
        if (res && res.unconfigured) {
          bubble.remove();
          this.renderUnconfiguredNotice(res.unconfiguredData || res);
          return;
        }
        if (statusWrap) {
          statusWrap.style.display = "none";
        }
        contentDiv.innerHTML = this.formatMarkdown(res.message || accumulatedText || "No response generated.");
      } catch (err) {
        const errMsg = err?.message || String(err || "");
        const isAuthOrConfigError = errMsg.includes("Domain Not Authorized") || errMsg.includes("Origin is not authorized") || errMsg.includes("403") || errMsg.includes("401") || err?.unconfigured;
        if (isAuthOrConfigError) {
          bubble.remove();
          this.renderUnconfiguredNotice({
            title: "Domain Not Authorized",
            message: errMsg || "Origin is not authorized for the selected docmd Cloud project.",
            features: [
              "**Free AI relay** \u2014 bring your own API key for OpenAI, Anthropic, Gemini, DeepSeek, or Ollama.",
              "**Query analytics** \u2014 see what your visitors are asking in real time.",
              "**Setup takes under a minute** \u2014 just add your `projectId` to `docmd.config.json`."
            ]
          });
        } else {
          if (statusWrap) statusWrap.style.display = "none";
          contentDiv.innerHTML = `<span style="color: var(--ai-text-muted);">Sorry, I encountered an issue processing your request: ${this.escapeHtml(errMsg)}</span>`;
        }
      } finally {
        this.setPendingState(false);
      }
    }
    clearChat() {
      this.engine.clearHistory();
      const msgs = document.getElementById("docmd-ai-messages");
      if (msgs) {
        msgs.innerHTML = `
        <div class="docmd-ai-chat-bubble assistant">
          Conversation cleared. How else can I help you?
          ${this.renderSuggestionsHtml()}
        </div>
      `;
      }
    }
    appendMsg(sender, text, save = true) {
      const msgs = document.getElementById("docmd-ai-messages");
      const div = document.createElement("div");
      div.className = `docmd-ai-chat-bubble ${sender}`;
      div.innerHTML = sender === "assistant" ? this.formatMarkdown(text) : this.escapeHtml(text);
      if (msgs) {
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
      }
      return div;
    }
    escapeHtml(raw) {
      return (raw || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    formatMarkdown(raw) {
      if (!raw) return "";
      let cleaned = raw.replace(/<(?:[a-zA-Z0-9_\-]+:)?(think|thought|reasoning|reflection|plan)\b[^>]*>[\s\S]*?<\/(?:[a-zA-Z0-9_\-]+:)?\1>/gi, "").replace(/```(?:thought|thinking|reasoning|reflection)\s*\n[\s\S]*?```/gi, "").replace(/\[(?:thought|thinking|reasoning):\s*[\s\S]*?\]/gi, "").replace(/\]<\][a-zA-Z0-9_\-]+\[>\[[\s\S]*?(?:<\/(?:request|tool_call|action)>|\]<\][a-zA-Z0-9_\-]+\[>\[|$)/gi, "").replace(/\]<\][a-zA-Z0-9_\-]+\[>\[/gi, "").replace(/<\/?(?:[a-zA-Z0-9_\-]+:)?(?:think|thought|reasoning|reflection|plan)\b[^>]*>/gi, "").replace(/<(?:[a-zA-Z0-9_\-]+:)?(tool_call|function_call|tool|action|request)\b[^>]*>[\s\S]*?<\/(?:[a-zA-Z0-9_\-]+:)?\1>/gi, "").replace(/```(?:tool_call|function_call|tool|action|json:tool)\s*\n[\s\S]*?```/gi, "").replace(/\{\s*"(?:name|tool|action|function)"\s*:\s*"[^"]+"\s*,\s*"(?:parameters|arguments|args|input)"\s*:\s*\{[\s\S]*?\}\s*\}/g, "").replace(/<\/?(?:[a-zA-Z0-9_\-]+:)?(?:tool_call|function_call|tool|action|request)\b[^>]*>/gi, "").trim();
      if (!cleaned) cleaned = raw;
      let text = this.escapeHtml(cleaned);
      const cfg = window.__docmd_ai_config || {};
      const getSiteBaseUrl = () => {
        const cfg2 = window.__docmd_ai_config || {};
        let base = cfg2.siteBase || "/";
        if (typeof location !== "undefined") {
          const isLocal2 = location.hostname === "localhost" || location.hostname === "127.0.0.1";
          if (isLocal2 && base !== "/" && !location.pathname.startsWith(base)) {
            base = "/";
          }
          return new URL(base.startsWith("/") ? base : "/" + base, location.origin).href;
        }
        return base;
      };
      const siteBaseUrl = getSiteBaseUrl();
      const resolveCanonicalUrl = (href) => {
        if (!href) return "#";
        let targetUrl = href.trim();
        const subpathBase2 = (cfg.siteBase || "").replace(/^\/|\/$/g, "");
        const isLocal2 = typeof location !== "undefined" && (location.hostname === "localhost" || location.hostname === "127.0.0.1");
        if (isLocal2 && subpathBase2 && !location.pathname.startsWith("/" + subpathBase2)) {
          targetUrl = targetUrl.replace(new RegExp(`/${subpathBase2}(/|$)`, "g"), "/");
        }
        if (/^(?:https?:|mailto:|tel:)/i.test(targetUrl)) return targetUrl;
        if (targetUrl.startsWith("#")) return `${siteBaseUrl}${targetUrl}`;
        try {
          const cleanHref = targetUrl.startsWith("/") ? targetUrl.slice(1) : targetUrl;
          return new URL(cleanHref, siteBaseUrl).href;
        } catch {
          return targetUrl;
        }
      };
      const codeBlocks = [];
      text = text.replace(/```(\w+)?[ \t]*\r?\n([\s\S]*?)```/g, (_match, lang, code) => {
        const languageStr = lang ? `<div class="docmd-ai-code-header"><span class="docmd-ai-code-lang">${lang.toLowerCase()}</span></div>` : "";
        const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
        codeBlocks.push(`<div class="docmd-ai-code-wrap">${languageStr}<pre><code>${code.trim()}</code></pre></div>`);
        return placeholder;
      });
      text = text.replace(/```(\w+)([ \t]+[^\n][\s\S]*?)```/g, (_match, lang, code) => {
        const languageStr = `<div class="docmd-ai-code-header"><span class="docmd-ai-code-lang">${lang.toLowerCase()}</span></div>`;
        const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
        codeBlocks.push(`<div class="docmd-ai-code-wrap">${languageStr}<pre><code>${code.trim()}</code></pre></div>`);
        return placeholder;
      });
      text = text.replace(/```\r?\n?([\s\S]*?)```/g, (_match, code) => {
        const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
        codeBlocks.push(`<div class="docmd-ai-code-wrap"><pre><code>${code.trim()}</code></pre></div>`);
        return placeholder;
      });
      text = text.replace(/^#### (.*$)/gim, "<h5>$1</h5>");
      text = text.replace(/^### (.*$)/gim, "<h4>$1</h4>");
      text = text.replace(/^## (.*$)/gim, "<h3>$1</h3>");
      text = text.replace(/^# (.*$)/gim, "<h3>$1</h3>");
      text = text.replace(/(?:^\s*[-*]\s+.*(?:\r?\n|$))+/gm, (match) => {
        const items = match.trim().split("\n").map((line) => `<li>${line.replace(/^\s*[-*]\s+/, "")}</li>`).join("");
        return `<ul>${items}</ul>`;
      });
      text = text.replace(/(?:^\s*\d+\.\s+.*(?:\r?\n|$))+/gm, (match) => {
        const items = match.trim().split("\n").map((line) => `<li>${line.replace(/^\s*\d+\.\s+/, "")}</li>`).join("");
        return `<ol>${items}</ol>`;
      });
      text = text.replace(/(?:^\s*&gt;\s+.*(?:\r?\n|$))+/gm, (match) => {
        const content = match.replace(/^\s*&gt;\s+/gm, "").trim();
        return `<blockquote>${content}</blockquote>`;
      });
      text = text.replace(/(?:^\s*\|.*\|\s*(?:\r?\n|$))+/gm, (match) => {
        const lines = match.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
        if (lines.length < 2) return match;
        let html2 = '<div class="docmd-ai-table-wrap"><table>';
        let inBody = false;
        lines.forEach((line, idx) => {
          if (/^\|(?:\s*:?-+:?\s*\|)+$/.test(line)) return;
          const cells = line.split("|").slice(1, -1).map((c) => c.trim());
          if (cells.length === 0) return;
          if (idx === 0) {
            html2 += "<thead><tr>";
            cells.forEach((c) => {
              html2 += `<th>${c}</th>`;
            });
            html2 += "</tr></thead>";
          } else {
            if (!inBody) {
              html2 += "<tbody>";
              inBody = true;
            }
            html2 += "<tr>";
            cells.forEach((c) => {
              html2 += `<td>${c}</td>`;
            });
            html2 += "</tr>";
          }
        });
        if (inBody) html2 += "</tbody>";
        html2 += "</table></div>";
        return html2;
      });
      text = text.replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm, "<hr />");
      text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
      text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, link) => {
        const finalUrl = resolveCanonicalUrl(link.trim());
        return `<a href="${finalUrl}" target="_blank" rel="noopener">${label}</a>`;
      });
      const blocks = text.split(/\n{2,}/);
      const html = blocks.map((block) => {
        const trimmed = block.trim();
        if (!trimmed) return "";
        if (/^<(?:h3|h4|h5|ul|ol|pre|blockquote|div|table|hr)|__CODE_BLOCK_/i.test(trimmed)) {
          return trimmed.replace(/\n/g, " ");
        }
        return `<p>${trimmed.replace(/\n/g, "<br/>")}</p>`;
      }).join("");
      let finalHtml = html;
      codeBlocks.forEach((cb, i) => {
        finalHtml = finalHtml.replace(`__CODE_BLOCK_${i}__`, cb);
      });
      const isLocal = typeof location !== "undefined" && (location.hostname === "localhost" || location.hostname === "127.0.0.1");
      const subpathBase = (cfg.siteBase || "").replace(/^\/|\/$/g, "");
      if (isLocal && subpathBase && !location.pathname.startsWith("/" + subpathBase)) {
        finalHtml = finalHtml.replace(new RegExp(`(https?://[^/\\s]+)?/${subpathBase}(/|\\b)`, "g"), (_m, origin) => {
          return (origin || "") + "/";
        });
      }
      return finalHtml;
    }
  };
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => new DocmdAIAssistantUI());
    } else {
      new DocmdAIAssistantUI();
    }
  }
  return __toCommonJS(index_exports);
})();