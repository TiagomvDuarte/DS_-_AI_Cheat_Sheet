import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'llm2', num: '01', title: 'Pré-treino de LLMs',
    subtitle: 'Transfer Learning, GPT, Dados, Scaling Laws e Codificação de Posição',
    topics: ['GPT — causal LM e geração auto-regressiva', 'Dados de pré-treino — corpus, limpeza e deduplicação (MinHash/LSH)', 'Leis de escala — Kaplan vs. Chinchilla e compute-óptimo', 'Context window — porque é limitado (O(n²))', 'RoPE e ALiBi — codificação de posição para contextos longos'],
    path: '/llm/lecture2', color: '#4a9eed',
  },
  {
    id: 'llm11', num: '02', title: 'Pós-treino: SFT, RLHF e Chain of Thought',
    subtitle: 'Pipeline de pós-treino, Instruction Tuning, RLHF/PPO/DPO (com variantes) e Chain of Thought',
    topics: ['Pipeline de pós-treino moderno e data flywheel', 'Instruction Tuning e Supervised Fine-Tuning (SFT)', 'RLHF — reward model, PPO, reward hacking', 'DPO e variantes — IPO, KTO, ORPO, SimPO', 'Chain of Thought — STaR, SPIN e Scaling Laws'],
    path: '/llm/lecture11', color: '#4a9eed',
  },
  {
    id: 'llm3', num: '03', title: 'Prompt Engineering',
    subtitle: 'Zero-shot, Few-shot, ReAct e técnicas avançadas',
    topics: ['Zero-shot e Few-shot prompting', 'ReAct — Reasoning + Acting em ciclo', 'Tree-of-Thought, PAL e Structured Output', 'Parâmetros de geração e boas práticas'],
    path: '/llm/lecture3', color: '#4a9eed',
  },
  {
    id: 'llm4', num: '04', title: 'RAG — Retrieval-Augmented Generation',
    subtitle: 'Embeddings, Vector Stores, Chunking, Reranking e Hybrid Search',
    topics: ['Motivação: hallucination e knowledge cutoff', 'Embeddings semânticos e similaridade cosine', 'Chunking, indexação e Vector Stores (FAISS, Pinecone)', 'Reranking, Hybrid Search e avaliação RAGAS'],
    path: '/llm/lecture4', color: '#4a9eed',
  },
  {
    id: 'llm5', num: '05', title: 'LangChain e Frameworks de Orquestração',
    subtitle: 'Chains, Memory, Tools, Agents e integrações com LLMs',
    topics: ['LangChain — LCEL, chains compostas, runnables', 'Memory: ConversationBuffer, Summary, VectorStore-backed', 'Tools e Tool Calling — function calling nativo', 'LlamaIndex, Haystack e comparação de frameworks'],
    path: '/llm/lecture5', color: '#4a9eed',
  },
  {
    id: 'llm6', num: '06', title: 'Sistemas Multi-Agente',
    subtitle: 'Agentes autónomos, AutoGen, CrewAI, protocolos MCP & Agent2Agent',
    topics: ['Agente LLM: percepção, memória, planeamento, acção', 'Padrões: ReAct, Plan-and-Execute, Reflexion', 'AutoGen e CrewAI — agentes colaborativos', 'MCP e Agent2Agent — protocolos modernos de interoperabilidade'],
    path: '/llm/lecture6', color: '#4a9eed',
  },
  {
    id: 'llm7', num: '07', title: 'Alinhamento & Safety',
    subtitle: 'Red-Teaming, Jailbreaks & Prompt Injection, Constitutional AI, Scalable Oversight e Interpretabilidade',
    topics: ['Outer/inner alignment — Goodhart\'s Law', 'Constitutional AI (Anthropic) — RLAIF e HHH', 'Red-teaming, jailbreaks e prompt injection', 'Scalable Oversight, Interpretabilidade mecanística e governance'],
    path: '/llm/lecture7', color: '#4a9eed',
  },
  {
    id: 'llm8', num: '08', title: 'Dados Sintéticos & Inferência em Escala',
    subtitle: 'Self-Instruct, Paralelismo, KV Cache e Speculative Decoding',
    topics: ['Dados sintéticos — Self-Instruct e destilação de conhecimento', 'Paralelismo 3D e infraestrutura de treino (ZeRO)', 'KV Cache, MHA/MQA/GQA', 'Speculative Decoding'],
    path: '/llm/lecture8', color: '#4a9eed',
  },
  {
    id: 'llm9', num: '09', title: 'Avaliação de LLMs',
    subtitle: 'Benchmarks, LLM-as-Judge, RAGAS, Safety Eval e Avaliação em Produção',
    topics: ['MMLU, HumanEval, GSM8K, HellaSwag — benchmarks de capacidade', 'LLM-as-Judge — MT-Bench, Chatbot Arena e ELO', 'RAGAS — Faithfulness, Answer Relevancy, Context Precision', 'Safety eval, red-team metrics e avaliação em produção'],
    path: '/llm/lecture9', color: '#4a9eed',
  },
  {
    id: 'llm10', num: '10', title: 'LLMs Multimodais',
    subtitle: 'CLIP, LLaVA, GPT-4V, Gemini e Fusão Visão-Linguagem',
    topics: ['CLIP — contrastive pretraining e zero-shot classification', 'LLaVA — ViT + projecção linear + LLM', 'GPT-4V e Gemini — multimodalidade nativa', 'Patch embeddings, dynamic resolution e casos de uso'],
    path: '/llm/lecture10', color: '#4a9eed',
  },
];

const topicStyle = (c) => ({
  background: `${c}12`, border: `1px solid ${c}30`, color: c,
  fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12,
});

export default function LLM() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
        ← Dashboard
      </Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>LLMs & AGENTS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>LLMs & Agents</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Da arquitectura Transformer ao pré-treino, fine-tuning, prompt engineering, RAG, frameworks de orquestração e sistemas multi-agente — os fundamentos e a engenharia dos grandes modelos de linguagem modernos.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {modules.map(m => (
          <div
            key={m.id}
            onClick={() => navigate(m.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${m.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{m.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{m.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {m.topics.map(t => <span key={t} style={topicStyle(m.color)}>{t}</span>)}
              </div>
            </div>
            <ArrowRight size={18} color={m.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
