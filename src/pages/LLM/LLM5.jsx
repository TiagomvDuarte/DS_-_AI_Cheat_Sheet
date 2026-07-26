import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const color = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// ── Code snippets ────────────────────────────────────────────────────────────

const lcelBasicCode = `# LCEL — composição com o operador pipe
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

prompt = ChatPromptTemplate.from_template(
    "Responde em português europeu: {question}"
)
llm    = ChatOpenAI(model="gpt-4o-mini")
parser = StrOutputParser()

# Cada componente é um Runnable — compostos com |
chain = prompt | llm | parser

# Invocação síncrona
result = chain.invoke({"question": "O que é o RAG?"})

# Streaming nativo — sem código extra
for chunk in chain.stream({"question": "Explica embeddings"}):
    print(chunk, end="", flush=True)

# Execução em batch (paralela internamente)
results = chain.batch([
    {"question": "O que é um token?"},
    {"question": "O que é um vector store?"},
])`;

const lcelParallelCode = `# RunnableParallel — executar múltiplos runnables em simultâneo
from langchain_core.runnables import RunnableParallel, RunnablePassthrough

# Combinar dois sub-chains em paralelo
parallel = RunnableParallel(
    resumo    = prompt_resumo | llm | parser,
    keywords  = prompt_keywords | llm | parser,
)

# Passar o input original adiante sem modificar
chain_com_input = RunnableParallel(
    context  = retriever,
    question = RunnablePassthrough(),
) | prompt_rag | llm | parser`;

const promptTemplateCode = `# PromptTemplate — variáveis com type-safe formatting
from langchain_core.prompts import PromptTemplate, ChatPromptTemplate
from langchain_core.messages import SystemMessage, HumanMessage

# Template simples
tmpl = PromptTemplate.from_template(
    "Classifica o sentimento deste texto: {texto}\\n"
    "Resposta (positivo/negativo/neutro):"
)

# ChatPromptTemplate com roles
chat_tmpl = ChatPromptTemplate.from_messages([
    ("system", "És um assistente especializado em {dominio}. "
               "Responde sempre em português europeu."),
    ("human",  "{pergunta}"),
])

filled = chat_tmpl.invoke({
    "dominio":   "medicina",
    "pergunta":  "Quais os sintomas de diabetes tipo 2?",
})

# FewShotChatMessagePromptTemplate — exemplos dinâmicos
from langchain_core.prompts import FewShotChatMessagePromptTemplate

examples = [
    {"input": "feliz",  "output": "positivo"},
    {"input": "triste", "output": "negativo"},
]
few_shot = FewShotChatMessagePromptTemplate(
    example_prompt = ChatPromptTemplate.from_messages([
        ("human", "{input}"), ("ai", "{output}")
    ]),
    examples = examples,
)`;

const memoryCode = `# Tipos de memória em LangChain
from langchain.memory import (
    ConversationBufferMemory,       # histórico completo
    ConversationBufferWindowMemory, # últimas k trocas
    ConversationSummaryMemory,      # LLM resume periodicamente
    VectorStoreRetrieverMemory,     # busca semântica no histórico
)

# Buffer simples — cresce com a conversa
buf = ConversationBufferMemory(return_messages=True)

# Window — mantém apenas as últimas 5 trocas
win = ConversationBufferWindowMemory(k=5, return_messages=True)

# Summary — resume o histórico quando fica longo
summ = ConversationSummaryMemory(llm=llm, return_messages=True)

# Integração numa chain LCEL
from langchain_core.runnables.history import RunnableWithMessageHistory

chain_com_memoria = RunnableWithMessageHistory(
    chain,
    get_session_history,   # função que devolve o histórico por sessão
    input_messages_key  = "question",
    history_messages_key= "history",
)`;

const toolCode = `# Definição de Tool com o decorator @tool
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI

@tool
def calcular(expressao: str) -> str:
    """Avalia uma expressão matemática Python. Ex: '2 ** 10' -> '1024'"""
    try:
        return str(eval(expressao, {"__builtins__": {}}))
    except Exception as e:
        return f"Erro: {e}"

@tool
def pesquisar_web(query: str) -> str:
    """Pesquisa informação actualizada na web. Usa para factos recentes."""
    # implementação com DuckDuckGo, Tavily, etc.
    ...

# Bind tools ao modelo — o LLM decide quando e qual usar
llm   = ChatOpenAI(model="gpt-4o")
tools = [calcular, pesquisar_web]
llm_com_tools = llm.bind_tools(tools)

# O modelo devolve tool_calls no response
response = llm_com_tools.invoke("Quanto é 2^20?")
print(response.tool_calls)
# [{'name': 'calcular', 'args': {'expressao': '2**20'}, 'id': '...'}]`;

const toolLoopCode = `# Loop de execução de tools (simplificado)
from langchain_core.messages import HumanMessage, ToolMessage

messages = [HumanMessage("Qual é o PIB de Portugal em 2024?")]

while True:
    response = llm_com_tools.invoke(messages)
    messages.append(response)

    if not response.tool_calls:
        break  # resposta final sem tool call

    for tc in response.tool_calls:
        tool_fn = tools_map[tc["name"]]
        result  = tool_fn.invoke(tc["args"])
        messages.append(ToolMessage(result, tool_call_id=tc["id"]))

print(messages[-1].content)`;

const routerCode = `# Router Chain — classificar intent e encaminhar
from langchain_core.runnables import RunnableLambda

def router(input: dict):
    intent = intent_classifier.invoke(input["question"])
    if intent == "tecnico":
        return chain_tecnico
    elif intent == "juridico":
        return chain_juridico
    else:
        return chain_geral

chain_router = RunnableLambda(router)

# Uso
resultado = chain_router.invoke({"question": "Como funciona o RGPD?"})`;

const mapReduceCode = `# Map-Reduce — processar documentos em paralelo e sumarizar
from langchain_core.runnables import RunnableParallel

# Map: sumarizar cada documento individualmente
chain_map = prompt_resumo_doc | llm | parser

# Processar em batch (paralelo)
resumos = chain_map.batch([{"doc": d} for d in documentos])

# Reduce: combinar os resumos num só
resumo_final = (prompt_combinar | llm | parser).invoke(
    {"resumos": "\\n\\n".join(resumos)}
)`;

const cacheCode = `# Caching — exact match e semantic cache
from langchain.cache import InMemoryCache, SQLiteCache
from langchain_community.cache import GPTCache
import langchain

# Exact match cache (em memória)
langchain.llm_cache = InMemoryCache()

# SQLite para persistência entre runs
langchain.llm_cache = SQLiteCache(database_path=".langchain.db")

# Fallback chain — alternativa automática em caso de falha
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic

primary  = ChatOpenAI(model="gpt-4o")
backup   = ChatAnthropic(model="claude-3-5-sonnet-20241022")

chain_robusta = (prompt | primary | parser).with_fallbacks(
    [(prompt | backup | parser)]
)

# Rate limiting com tenacity
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3),
       wait=wait_exponential(multiplier=1, min=2, max=10))
def chamar_llm(mensagem):
    return llm.invoke(mensagem)`;

// ── SVG Diagrams ─────────────────────────────────────────────────────────────

function DiagramaApiVsFramework() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 760 260" style={{ width: '100%', height: 'auto' }}>
        {/* LLM API only column */}
        <rect x="20" y="20" width="330" height="220" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="6,3" />
        <text x="185" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-secondary)">LLM API sozinha</text>

        <rect x="90" y="60" width="160" height="36" rx="8" fill={`${color}22`} stroke={color} strokeWidth="1.5" />
        <text x="170" y="83" textAnchor="middle" fontSize="12" fontWeight="600" fill={color}>Prompt</text>

        <line x1="170" y1="96" x2="170" y2="116" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)" />

        <rect x="90" y="116" width="160" height="36" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="170" y="139" textAnchor="middle" fontSize="12" fill="var(--text-primary)">LLM API</text>

        <line x1="170" y1="152" x2="170" y2="172" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)" />

        <rect x="90" y="172" width="160" height="36" rx="8" fill={`${color}22`} stroke={color} strokeWidth="1.5" />
        <text x="170" y="195" textAnchor="middle" fontSize="12" fontWeight="600" fill={color}>Resposta</text>

        <text x="170" y="230" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">sem memória · sem tools · sem routing</text>

        {/* Framework column */}
        <rect x="410" y="20" width="330" height="220" rx="10" fill="none" stroke={color} strokeWidth="1.5" />
        <text x="575" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Com Framework (LangChain…)</text>

        {/* Framework boxes */}
        <rect x="430" y="55" width="88" height="28" rx="6" fill={`${color}18`} stroke={color} strokeWidth="1" />
        <text x="474" y="73" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>Memory</text>

        <rect x="530" y="55" width="88" height="28" rx="6" fill={`${color}18`} stroke={color} strokeWidth="1" />
        <text x="574" y="73" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>Tools</text>

        <rect x="630" y="55" width="88" height="28" rx="6" fill={`${color}18`} stroke={color} strokeWidth="1" />
        <text x="674" y="73" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>Retrieval</text>

        <rect x="480" y="103" width="180" height="30" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="570" y="123" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Orchestration Layer</text>

        <line x1="570" y1="133" x2="570" y2="153" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)" />

        <rect x="480" y="153" width="180" height="30" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="570" y="173" textAnchor="middle" fontSize="11" fill="var(--text-primary)">LLM API</text>

        <line x1="570" y1="183" x2="570" y2="203" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)" />

        <rect x="480" y="203" width="180" height="28" rx="8" fill={`${color}22`} stroke={color} strokeWidth="1.5" />
        <text x="570" y="222" textAnchor="middle" fontSize="11" fontWeight="600" fill={color}>Resposta estruturada</text>

        {/* Connector lines from top boxes to orchestration */}
        <line x1="474" y1="83" x2="510" y2="103" stroke={color} strokeWidth="1" strokeDasharray="4,2" />
        <line x1="574" y1="83" x2="570" y2="103" stroke={color} strokeWidth="1" strokeDasharray="4,2" />
        <line x1="674" y1="83" x2="630" y2="103" stroke={color} strokeWidth="1" strokeDasharray="4,2" />

        <defs>
          <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

function DiagramaLCEL() {
  const boxes = [
    { x: 30,  label: 'PromptTemplate', sub: 'formata input' },
    { x: 210, label: 'ChatModel',      sub: 'gera tokens'   },
    { x: 390, label: 'OutputParser',   sub: 'extrai texto'  },
    { x: 570, label: 'Resultado',      sub: 'string / obj'  },
  ];
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 740 110" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrlcel" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>
        {boxes.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y="28" width="150" height="52" rx="10"
              fill="rgba(74,158,237,0.10)"
              stroke={color} strokeWidth={i === 3 ? 2 : 1.5} />
            <text x={b.x + 75} y="52" textAnchor="middle" fontSize="11" fontWeight="700"
              fill={i === 3 ? color : 'var(--text-primary)'}>{b.label}</text>
            <text x={b.x + 75} y="68" textAnchor="middle" fontSize="10"
              fill="var(--text-secondary)">{b.sub}</text>
          </g>
        ))}
        {/* Pipe arrows */}
        {[0, 1, 2].map(i => (
          <g key={i}>
            <line x1={boxes[i].x + 150} y1="54" x2={boxes[i + 1].x - 2} y2="54"
              stroke={color} strokeWidth="2" markerEnd="url(#arrlcel)" />
            <text x={boxes[i].x + 155 + (boxes[i + 1].x - boxes[i].x - 155) / 2}
              y="47" textAnchor="middle" fontSize="13" fontWeight="800" fill={color}>|</text>
          </g>
        ))}
        <text x="370" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>
          chain = prompt | llm | parser
        </text>
      </svg>
    </div>
  );
}

function DiagramaMemoria() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 700 220" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrmem" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
          </marker>
          <marker id="arrmemcolor" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>

        {/* User turn */}
        <rect x="20" y="80" width="110" height="40" rx="8" fill={`${color}22`} stroke={color} strokeWidth="1.5" />
        <text x="75" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Utilizador</text>

        {/* Memory store */}
        <rect x="270" y="20" width="160" height="180" rx="10" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="6,3" />
        <text x="350" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">Memory Store</text>
        <rect x="290" y="52" width="120" height="28" rx="6" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="350" y="70" textAnchor="middle" fontSize="10" fill={color}>turno 1 (H+A)</text>
        <rect x="290" y="86" width="120" height="28" rx="6" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="350" y="104" textAnchor="middle" fontSize="10" fill={color}>turno 2 (H+A)</text>
        <rect x="290" y="120" width="120" height="28" rx="6" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="350" y="138" textAnchor="middle" fontSize="10" fill={color}>turno N (H+A)</text>
        <text x="350" y="172" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Buffer / Window / Summary</text>
        <text x="350" y="188" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">/ VectorStore</text>

        {/* LLM */}
        <rect x="540" y="80" width="110" height="40" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="595" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">LLM API</text>

        {/* Arrows */}
        {/* user -> memory */}
        <line x1="130" y1="100" x2="268" y2="100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrmem)" />
        <text x="199" y="93" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">nova mensagem</text>

        {/* memory -> LLM */}
        <line x1="430" y1="100" x2="538" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#arrmemcolor)" />
        <text x="484" y="93" textAnchor="middle" fontSize="9" fill={color}>histórico + query</text>

        {/* LLM -> memory (store response) */}
        <path d="M595,120 Q595,200 430,200" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrmem)" />
        <text x="530" y="210" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">armazenar resposta</text>

        {/* LLM -> user */}
        <path d="M595,80 Q595,10 130,10 Q20,10 20,80" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrmemcolor)" />
        <text x="310" y="8" textAnchor="middle" fontSize="9" fill={color}>resposta ao utilizador</text>
      </svg>
    </div>
  );
}

function DiagramaToolCalling() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 700 200" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrtool" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
          <marker id="arrtoolg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* Nodes */}
        <rect x="20"  y="80" width="110" height="40" rx="8" fill={`${color}22`} stroke={color} strokeWidth="1.5" />
        <text x="75"  y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Utilizador</text>

        <rect x="200" y="80" width="120" height="40" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="260" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">LLM</text>

        <rect x="400" y="30" width="120" height="40" rx="8" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="460" y="55" textAnchor="middle" fontSize="11" fill={color}>Tool Executor</text>

        <rect x="400" y="130" width="120" height="40" rx="8" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="460" y="155" textAnchor="middle" fontSize="11" fill={color}>Inject resultado</text>

        <rect x="580" y="80" width="100" height="40" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="630" y="100" textAnchor="middle" fontSize="10" fill="var(--text-primary)">API externa</text>
        <text x="630" y="114" textAnchor="middle" fontSize="10" fill="var(--text-primary)">/ função Python</text>

        {/* Arrows */}
        <line x1="130" y1="100" x2="198" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#arrtool)" />
        <text x="164" y="93" textAnchor="middle" fontSize="9" fill={color}>query</text>

        <path d="M320,90 Q360,90 398,50" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrtool)" />
        <text x="358" y="60" textAnchor="middle" fontSize="9" fill={color}>tool_call</text>

        <line x1="520" y1="50" x2="578" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrtoolg)" />
        <text x="564" y="66" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">exec</text>

        <line x1="578" y1="110" x2="522" y2="140" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrtoolg)" />
        <text x="566" y="136" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">resultado</text>

        <path d="M400,150 Q360,150 320,110" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrtool)" />
        <text x="340" y="150" textAnchor="middle" fontSize="9" fill={color}>ToolMessage</text>

        <path d="M200,100 Q160,130 75,120" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrtoolg)" />
        <text x="130" y="132" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">resposta final</text>

        <text x="350" y="195" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
          loop: parse tool_calls → executar → injectar resultado → regenerar
        </text>
      </svg>
    </div>
  );
}

function DiagramaRouterChain() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 700 240" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrrouter" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
          <marker id="arrrouterg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* Input */}
        <rect x="20" y="100" width="110" height="40" rx="8" fill={`${color}22`} stroke={color} strokeWidth="1.5" />
        <text x="75" y="125" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Input</text>

        {/* Classifier */}
        <rect x="180" y="100" width="130" height="40" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="245" y="120" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Classifier</text>
        <text x="245" y="134" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">intent detection</text>

        {/* Branches */}
        <rect x="390" y="30" width="130" height="40" rx="8" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="455" y="50" textAnchor="middle" fontSize="11" fill={color}>Chain Técnico</text>
        <text x="455" y="64" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">prompt técnico + llm</text>

        <rect x="390" y="100" width="130" height="40" rx="8" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="455" y="120" textAnchor="middle" fontSize="11" fill={color}>Chain Jurídico</text>
        <text x="455" y="134" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">prompt jurídico + llm</text>

        <rect x="390" y="170" width="130" height="40" rx="8" fill={`${color}12`} stroke={color} strokeWidth="1" />
        <text x="455" y="190" textAnchor="middle" fontSize="11" fill={color}>Chain Geral</text>
        <text x="455" y="204" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">prompt geral + llm</text>

        {/* Output */}
        <rect x="590" y="100" width="90" height="40" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="635" y="125" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Output</text>

        {/* Arrows */}
        <line x1="130" y1="120" x2="178" y2="120" stroke={color} strokeWidth="1.5" markerEnd="url(#arrrouter)" />

        <path d="M310,110 Q350,110 388,50" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrrouter)" />
        <path d="M310,120 L388,120"          fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrrouter)" />
        <path d="M310,130 Q350,130 388,190"  fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arrrouter)" />

        <path d="M520,50  Q555,50  590,110" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrrouterg)" />
        <line x1="520" y1="120" x2="588" y2="120" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrrouterg)" />
        <path d="M520,190 Q555,190 590,130" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrrouterg)" />

        <text x="245" y="230" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
          RunnableLambda decide a branch com base no intent classificado
        </text>
      </svg>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function LLM5() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}><ArrowLeft size={16} /> Voltar a LLMs &amp; Agents</Link>

      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>LangChain e Frameworks de Orquestração</h1>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Porquê Frameworks de Orquestração?</h2>
        <p style={S.p}>
          Uma chamada directa à API de um LLM é completamente stateless: enviamos um prompt, recebemos tokens, fim. Não existe memória da conversa anterior, não existe acesso a ferramentas externas, não existe routing para comportamentos especializados. Para construir aplicações reais — chatbots, assistentes de pesquisa, agentes autónomos — precisamos de uma camada de orquestração que gerencie esse estado e essa complexidade.
        </p>
        <p style={S.p}>
          Um framework de orquestração adiciona:
        </p>
        <div style={S.highlight}>
          <strong>State:</strong> guardar e injectar o histórico de conversa em cada chamada.<br />
          <strong>Routing:</strong> encaminhar diferentes tipos de pedido para cadeias ou modelos especializados.<br />
          <strong>Tools:</strong> permitir ao LLM invocar funções Python, APIs externas ou bases de dados.<br />
          <strong>Memory:</strong> armazenar contexto de longo prazo (buffer, janela deslizante, sumário, vector store).<br />
          <strong>Retrieval:</strong> recuperar documentos relevantes e injectá-los no prompt (RAG).<br />
          <strong>Observabilidade:</strong> rastrear cada passo da execução para debug e monitorização.
        </div>

        <h3 style={S.h3}>Panorama actual de frameworks</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Framework</th>
              <th style={S.th}>Foco principal</th>
              <th style={S.th}>Linguagem</th>
              <th style={S.th}>Maturidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>LangChain</strong></td>
              <td style={S.td}>Orquestração geral, agents, chains</td>
              <td style={S.td}>Python + JS/TS</td>
              <td style={S.td}>Alta (ecossistema enorme)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LlamaIndex</strong></td>
              <td style={S.td}>RAG e indexação de documentos</td>
              <td style={S.td}>Python + TS</td>
              <td style={S.td}>Alta (RAG-first)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Haystack</strong></td>
              <td style={S.td}>Pipelines declarativos, search</td>
              <td style={S.td}>Python</td>
              <td style={S.td}>Alta (produção robusta)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>DSPy</strong></td>
              <td style={S.td}>Optimização automática de prompts</td>
              <td style={S.td}>Python</td>
              <td style={S.td}>Crescente (research)</td>
            </tr>
          </tbody>
        </table>

        <DiagramaApiVsFramework />
        <div style={S.note}>
          À esquerda, a chamada directa à API produz apenas uma resposta sem contexto. À direita, o framework interpõe uma camada de orquestração que agrega memória, tools e retrieval antes de cada chamada ao modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. LangChain — Arquitectura LCEL</h2>
        <p style={S.p}>
          A <strong>LangChain Expression Language (LCEL)</strong> é a forma moderna de compor cadeias em LangChain. Baseia-se no operador pipe (<code>|</code>) do Unix: cada componente recebe input, transforma-o e passa o resultado ao seguinte. Todos os componentes implementam a interface <strong>Runnable</strong>, garantindo uma API uniforme independentemente do tipo.
        </p>

        <DiagramaLCEL />

        <div style={S.code}>{lcelBasicCode}</div>

        <h3 style={S.h3}>Interface Runnable</h3>
        <p style={S.p}>
          Qualquer Runnable expõe os mesmos métodos, o que permite substituir um componente por outro sem alterar o resto da chain:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Comportamento</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><code>.invoke(input)</code></td>
              <td style={S.td}>Execução síncrona, devolve resultado</td>
              <td style={S.td}>Scripts, testes, uso pontual</td>
            </tr>
            <tr>
              <td style={S.td}><code>.stream(input)</code></td>
              <td style={S.td}>Streaming token a token</td>
              <td style={S.td}>UIs interactivas, chatbots</td>
            </tr>
            <tr>
              <td style={S.td}><code>.batch(inputs)</code></td>
              <td style={S.td}>Processa lista em paralelo</td>
              <td style={S.td}>Pipeline de documentos em bulk</td>
            </tr>
            <tr>
              <td style={S.td}><code>.ainvoke(input)</code></td>
              <td style={S.td}>Versão assíncrona (asyncio)</td>
              <td style={S.td}>Servidores web (FastAPI, etc.)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>RunnableParallel — execução em paralelo</h3>
        <p style={S.p}>
          <code>RunnableParallel</code> executa múltiplas sub-chains em simultâneo e combina os resultados num dicionário. É ideal para enriquecer um input com informação de várias fontes ao mesmo tempo:
        </p>
        <div style={S.code}>{lcelParallelCode}</div>

        <div style={S.note}>
          O LCEL garante streaming automático: mesmo numa chain de 5 passos, o primeiro token é transmitido ao cliente mal seja gerado, sem necessidade de código extra de buffering.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Prompts e Templates</h2>
        <p style={S.p}>
          Os templates de prompt são a camada de abstracção entre o input do utilizador e o texto enviado ao modelo. LangChain oferece três variantes principais, adequadas a diferentes níveis de complexidade:
        </p>

        <h3 style={S.h3}>PromptTemplate — texto simples com variáveis</h3>
        <p style={S.p}>
          O template mais básico: uma string com placeholders <code>{"{var}"}</code> preenchidos em runtime. Adequado para prompts de completion ou tarefas de classificação simples.
        </p>

        <h3 style={S.h3}>ChatPromptTemplate — mensagens por role</h3>
        <p style={S.p}>
          Para modelos de chat (GPT-4, Claude, Gemini), o prompt é composto por uma sequência de mensagens com role: <code>system</code> define o comportamento e persona do assistente, <code>human</code> representa o utilizador, <code>ai</code> representa respostas anteriores do modelo.
        </p>

        <h3 style={S.h3}>FewShotChatMessagePromptTemplate — exemplos dinâmicos</h3>
        <p style={S.p}>
          Inclui automaticamente exemplos de input/output no prompt. Os exemplos podem ser seleccionados dinamicamente (e.g., por similaridade semântica com o input actual) para maximizar a relevância sem exceder o context window.
        </p>

        <div style={S.code}>{promptTemplateCode}</div>

        <div style={S.highlight}>
          <strong>Type-safe formatting:</strong> ao contrário de f-strings manuais, os PromptTemplates validam que todas as variáveis obrigatórias foram fornecidas antes de fazer a chamada ao modelo, evitando erros silenciosos em produção.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Memory — Tipos e Trade-offs</h2>
        <p style={S.p}>
          LLMs são stateless por definição: cada chamada à API começa do zero. Memória é a camada que simula continuidade, injectando o histórico relevante no prompt de cada novo turno. A escolha do tipo de memória é um trade-off entre fidelidade do contexto, custo em tokens e latência.
        </p>

        <DiagramaMemoria />

        <div style={S.code}>{memoryCode}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Mecanismo</th>
              <th style={S.th}>Vantagem</th>
              <th style={S.th}>Desvantagem</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>ConversationBuffer</strong></td>
              <td style={S.td}>Histórico completo injectado</td>
              <td style={S.td}>Contexto perfeito</td>
              <td style={S.td}>Cresce indefinidamente; caro</td>
              <td style={S.td}>Conversas curtas (&lt; 20 turnos)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ConversationWindowBuffer</strong></td>
              <td style={S.td}>Últimas k trocas</td>
              <td style={S.td}>Custo controlado</td>
              <td style={S.td}>Perde contexto antigo</td>
              <td style={S.td}>Chats de suporte em tempo real</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ConversationSummary</strong></td>
              <td style={S.td}>LLM resume historico periodicamente</td>
              <td style={S.td}>Mantém essência; custo estável</td>
              <td style={S.td}>Latência extra para sumarização</td>
              <td style={S.td}>Sessões longas (horas)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>VectorStoreRetriever</strong></td>
              <td style={S.td}>Busca semântica no histórico</td>
              <td style={S.td}>Selectivo; recupera o mais relevante</td>
              <td style={S.td}>Requer vector store; mais complexo</td>
              <td style={S.td}>Histórico muito longo ou multi-sessão</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Em produção, <code>RunnableWithMessageHistory</code> é a forma recomendada de integrar memória em LCEL: separa a lógica da chain da gestão do estado, e suporta múltiplas sessões paralelas com IDs de sessão distintos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Tools e Tool Calling</h2>
        <p style={S.p}>
          Uma <strong>Tool</strong> é uma função Python com três elementos que o LLM usa para decidir quando e como invocá-la: <strong>nome</strong> (identificador único), <strong>descrição</strong> (o que faz e quando usar) e <strong>schema</strong> (tipos e nomes dos argumentos). O modelo escolhe chamar a tool, o framework executa-a e injeta o resultado de volta no contexto.
        </p>

        <h3 style={S.h3}>Definição com o decorator <code>@tool</code></h3>
        <div style={S.code}>{toolCode}</div>

        <h3 style={S.h3}>Loop de execução de tools</h3>
        <p style={S.p}>
          Quando o modelo decide usar uma tool, o processo segue sempre o mesmo ciclo: o modelo gera um <code>tool_call</code> (em vez de texto livre), o framework parseia e executa a função correspondente, o resultado é injectado como <code>ToolMessage</code>, e o modelo é invocado novamente com o contexto actualizado.
        </p>

        <DiagramaToolCalling />

        <div style={S.code}>{toolLoopCode}</div>

        <div style={S.highlight}>
          <strong>Function calling nativo:</strong> OpenAI, Anthropic (Claude) e Google (Gemini) suportam tool calling de forma nativa no protocolo de API — o modelo gera JSON estruturado em vez de texto livre, eliminando a necessidade de parsear respostas frágeis. O <code>llm.bind_tools()</code> do LangChain normaliza esta interface entre providers.
        </div>

        <div style={S.note}>
          A qualidade das descrições das tools é o factor mais crítico para a correcta selecção pelo modelo. Descrições vagas ou que se sobrepõem levam a escolhas erradas. Regra de ouro: a descrição deve responder a "quando DEVO usar esta tool e quando NÃO devo".
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Chains Compostas</h2>
        <p style={S.p}>
          Para além das chains lineares simples (<code>prompt | llm | parser</code>), LangChain suporta padrões de composição mais complexos que permitem construir pipelines sofisticados.
        </p>

        <h3 style={S.h3}>Sequential Chain — pipeline linear</h3>
        <p style={S.p}>
          O output de cada step é o input do seguinte. Útil para refinamento progressivo: por exemplo, gerar um rascunho → revisar o tom → traduzir → validar o formato.
        </p>

        <h3 style={S.h3}>Router Chain — branching condicional</h3>
        <p style={S.p}>
          Um classificador determina o intent do input e encaminha para a sub-chain mais adequada. Cada branch pode ter um prompt, um modelo ou até uma chain inteiramente diferente.
        </p>

        <DiagramaRouterChain />

        <div style={S.code}>{routerCode}</div>

        <h3 style={S.h3}>Parallel Chain — execução simultânea</h3>
        <p style={S.p}>
          <code>RunnableParallel</code> executa múltiplas chains em simultâneo e agrega os resultados. Reduz a latência total quando as branches são independentes entre si.
        </p>

        <h3 style={S.h3}>Map-Reduce Chain — processar colecções</h3>
        <p style={S.p}>
          Padrão clássico para processar grandes colecções de documentos: a fase <em>map</em> processa cada documento individualmente (em paralelo via <code>.batch()</code>), e a fase <em>reduce</em> combina os resultados parciais num output final.
        </p>

        <div style={S.code}>{mapReduceCode}</div>

        <div style={S.note}>
          O Map-Reduce é a base dos sistemas de sumarização de documentos longos (livros, contratos, relatórios). A limitação é o custo: processar N documentos implica N + 1 chamadas ao modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. LlamaIndex vs. LangChain vs. Haystack vs. DSPy</h2>
        <p style={S.p}>
          Cada framework emergiu para resolver um problema específico, e as suas filosofias de design reflectem isso. Conhecer as diferenças é essencial para escolher a ferramenta certa.
        </p>

        <h3 style={S.h3}>LlamaIndex — RAG-first</h3>
        <p style={S.p}>
          Nasceu especificamente para resolver o problema de conectar LLMs a dados privados. Os seus <strong>Data Connectors</strong> (loaders para PDF, Notion, Confluence, SQL, APIs REST, etc.) e <strong>Index Types</strong> (VectorStore, Knowledge Graph, Summary Index) são mais ricos e especializados do que os equivalentes em LangChain. Para RAG de produção com múltiplas fontes heterogéneas, LlamaIndex é tipicamente a escolha mais produtiva.
        </p>

        <h3 style={S.h3}>LangChain — orquestração geral</h3>
        <p style={S.p}>
          O framework mais abrangente e com maior ecossistema. Cobre RAG, agents, chains complexas, memory, e o LangGraph para agentes stateful com grafos. A contrapartida é uma API historicamente instável e abstracções por vezes excessivas. Indicado quando o caso de uso vai além do RAG puro.
        </p>

        <h3 style={S.h3}>Haystack — pipelines declarativos</h3>
        <p style={S.p}>
          A Haystack 2.0 adoptou uma arquitectura de componentes e pipelines declarativos, mais próxima de ferramentas de MLOps. Forte em ambientes enterprise onde a robustez, a testabilidade e a integração com sistemas de search existentes (Elasticsearch, OpenSearch) são prioritárias.
        </p>

        <h3 style={S.h3}>DSPy — optimização automática de prompts</h3>
        <p style={S.p}>
          Paradigma radicalmente diferente: em vez de escrever prompts manualmente, define-se o comportamento desejado com <strong>Signatures</strong> (tipos de input/output) e <strong>Metrics</strong> (função de avaliação). O DSPy optimiza automaticamente os prompts e os few-shot examples através de algoritmos de optimização (MIPRO, BootstrapFewShot). Ideal para research e para sistemas onde a qualidade dos prompts é o bottleneck principal.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Framework</th>
              <th style={S.th}>Foco</th>
              <th style={S.th}>Pontos fortes</th>
              <th style={S.th}>Pontos fracos</th>
              <th style={S.th}>Ecossistema</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>LangChain</strong></td>
              <td style={S.td}>Orquestração geral</td>
              <td style={S.td}>Ecossistema enorme; agents; LCEL elegante</td>
              <td style={S.td}>API muda frequentemente; verboso</td>
              <td style={S.td}>Muito grande (600+ integrações)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>LlamaIndex</strong></td>
              <td style={S.td}>RAG e indexação</td>
              <td style={S.td}>Data loaders; query engines; multi-modal RAG</td>
              <td style={S.td}>Menos flexível para agents complexos</td>
              <td style={S.td}>Grande (RAG-centric)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Haystack</strong></td>
              <td style={S.td}>Pipelines de produção</td>
              <td style={S.td}>Robustez; integração com Elastic/OpenSearch</td>
              <td style={S.td}>Curva de aprendizagem; menos agents</td>
              <td style={S.td}>Médio (enterprise-focused)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>DSPy</strong></td>
              <td style={S.td}>Optimização de prompts</td>
              <td style={S.td}>Auto-optimização; sem prompt manual</td>
              <td style={S.td}>Paradigma diferente; debug difícil</td>
              <td style={S.td}>Pequeno mas crescente</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Guideline prático: prototipagem rápida → LangChain; RAG com múltiplas fontes de dados → LlamaIndex; pipeline enterprise com Elasticsearch → Haystack; optimização automática de qualidade de prompts → DSPy. LangChain e LlamaIndex são frequentemente usados em conjunto no mesmo projecto.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Padrões de Produção</h2>
        <p style={S.p}>
          Levar um sistema LLM de protótipo a produção exige lidar com custo, latência, fiabilidade e observabilidade. LangChain oferece primitivas para cada um destes problemas.
        </p>

        <h3 style={S.h3}>Caching de respostas</h3>
        <p style={S.p}>
          <strong>Exact match cache:</strong> se o mesmo prompt exact for enviado duas vezes, a resposta em cache é devolvida sem chamar o modelo. Ideal para prompts estáticos (classificadores, extractores). <strong>Semantic cache:</strong> usa embeddings para encontrar respostas cacheadas a prompts semanticamente equivalentes, mesmo que o texto seja ligeiramente diferente.
        </p>

        <h3 style={S.h3}>Rate limiting e retry logic</h3>
        <p style={S.p}>
          APIs de LLM têm rate limits (tokens/minuto, requests/minuto). Em batch processing, é necessário implementar retry com backoff exponencial. A biblioteca <code>tenacity</code> é o padrão de facto em Python para este propósito.
        </p>

        <h3 style={S.h3}>Observabilidade — LangSmith e Langfuse</h3>
        <p style={S.p}>
          Sistemas de orquestração com múltiplos steps são difíceis de debugar sem tracing adequado. <strong>LangSmith</strong> (da própria Equipa LangChain) e <strong>Langfuse</strong> (open-source) registam cada passo de cada chain: input/output de cada node, latência, tokens consumidos, custo estimado. Indispensáveis em produção para identificar onde um pipeline falha ou degrada.
        </p>

        <h3 style={S.h3}>Fallback chains</h3>
        <p style={S.p}>
          O método <code>.with_fallbacks()</code> permite definir uma chain alternativa que é invocada automaticamente quando a chain principal falha (timeout, rate limit, erro de API). Permite, por exemplo, tentar GPT-4o e fazer fallback para Claude se o OpenAI estiver indisponível.
        </p>

        <div style={S.code}>{cacheCode}</div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão</th>
              <th style={S.th}>Problema que resolve</th>
              <th style={S.th}>Implementação LangChain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Exact cache</td>
              <td style={S.td}>Custo e latência em prompts repetidos</td>
              <td style={S.td}><code>langchain.llm_cache = InMemoryCache()</code></td>
            </tr>
            <tr>
              <td style={S.td}>Semantic cache</td>
              <td style={S.td}>Prompts semanticamente equivalentes mas não idênticos</td>
              <td style={S.td}><code>GPTCache</code> / Redis com embeddings</td>
            </tr>
            <tr>
              <td style={S.td}>Retry + backoff</td>
              <td style={S.td}>Rate limits e erros transitórios de API</td>
              <td style={S.td}><code>tenacity</code> ou <code>chain.with_retry()</code></td>
            </tr>
            <tr>
              <td style={S.td}>Fallback chain</td>
              <td style={S.td}>Indisponibilidade do provider principal</td>
              <td style={S.td}><code>chain.with_fallbacks([backup])</code></td>
            </tr>
            <tr>
              <td style={S.td}>Tracing</td>
              <td style={S.td}>Debug, auditoria, monitorização de custo</td>
              <td style={S.td}>LangSmith / Langfuse (env var ou callback)</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>LangSmith em 2 linhas:</strong> basta definir as variáveis de ambiente <code>LANGCHAIN_TRACING_V2=true</code> e <code>LANGCHAIN_API_KEY=...</code> — todas as chains passam a ser registadas automaticamente sem alterar o código da aplicação.
        </div>
      </div>
    </div>
  );
}
