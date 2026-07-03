import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'llm1', num: '01', title: 'Arquitectura Transformer',
    subtitle: 'Self-Attention, Positional Encoding, Encoder, Decoder e Scaled Dot-Product',
    topics: ['Limitações das RNNs — vanishing gradient e sequencialidade', 'Self-Attention e Scaled Dot-Product Attention', 'Multi-Head Attention e projeções Q, K, V', 'Positional Encoding, Feed-Forward e Layer Norm'],
    path: '/llm/lecture1', color: '#f97316',
  },
  {
    id: 'llm2', num: '02', title: 'Pré-treino e Fine-tuning',
    subtitle: 'GPT, BERT, LoRA, PEFT e RLHF — do pré-treino à especialização',
    topics: ['Pré-treino: masked LM (BERT) vs. causal LM (GPT)', 'Fine-tuning supervisionado — task-specific heads', 'PEFT: LoRA, Adapter Layers, Prefix Tuning', 'RLHF — reward model, PPO e alinhamento'],
    path: '/llm/lecture2', color: '#f97316',
  },
  {
    id: 'llm3', num: '03', title: 'Prompt Engineering',
    subtitle: 'Zero-shot, Few-shot, Chain-of-Thought, ReAct e técnicas avançadas',
    topics: ['Zero-shot e Few-shot prompting', 'Chain-of-Thought (CoT) — raciocínio passo a passo', 'ReAct — Reasoning + Acting em ciclo', 'Self-Consistency, Tree-of-Thought e Structured Output'],
    path: '/llm/lecture3', color: '#f97316',
  },
  {
    id: 'llm4', num: '04', title: 'RAG — Retrieval-Augmented Generation',
    subtitle: 'Embeddings, Vector Stores, Chunking, Reranking e Hybrid Search',
    topics: ['Motivação: hallucination e knowledge cutoff', 'Embeddings semânticos e similaridade cosine', 'Chunking, indexação e Vector Stores (FAISS, Pinecone)', 'Reranking, Hybrid Search e avaliação RAGAS'],
    path: '/llm/lecture4', color: '#f97316',
  },
  {
    id: 'llm5', num: '05', title: 'LangChain e Frameworks de Orquestração',
    subtitle: 'Chains, Memory, Tools, Agents e integrações com LLMs',
    topics: ['LangChain — LCEL, chains compostas, runnables', 'Memory: ConversationBuffer, Summary, VectorStore-backed', 'Tools e Tool Calling — function calling nativo', 'LlamaIndex, Haystack e comparação de frameworks'],
    path: '/llm/lecture5', color: '#f97316',
  },
  {
    id: 'llm6', num: '06', title: 'Sistemas Multi-Agente',
    subtitle: 'Agentes autónomos, AutoGen, CrewAI e padrões de orquestração',
    topics: ['Agente LLM: percepção, memória, planeamento, acção', 'Padrões: ReAct, Plan-and-Execute, Reflexion', 'AutoGen e CrewAI — agentes colaborativos', 'Avaliação, guardrails e segurança em agentes'],
    path: '/llm/lecture6', color: '#f97316',
  },
  {
    id: 'llm7', num: '07', title: 'Alinhamento & Safety',
    subtitle: 'RLHF aprofundado, DPO, Constitutional AI, Red-Teaming e Scalable Oversight',
    topics: ['Outer/inner alignment — Goodhart\'s Law', 'DPO — Direct Preference Optimization', 'Constitutional AI (Anthropic) — RLAIF e HHH', 'Red-teaming, interpretabilidade e EU AI Act'],
    path: '/llm/lecture7', color: '#f97316',
  },
  {
    id: 'llm8', num: '08', title: 'Pós-treino, Dados Sintéticos & Inferência em Escala',
    subtitle: 'Self-Instruct, Scaling Laws, KV Cache, Quantização e Speculative Decoding',
    topics: ['Data flywheel e pipeline de pós-treino iterativo', 'Dados sintéticos — Self-Instruct, STaR, SPIN', 'Scaling Laws (Kaplan, Chinchilla) e 3D parallelism', 'KV Cache, quantização GPTQ/AWQ e speculative decoding'],
    path: '/llm/lecture8', color: '#f97316',
  },
  {
    id: 'llm9', num: '09', title: 'Avaliação de LLMs',
    subtitle: 'Benchmarks, LLM-as-Judge, RAGAS, Safety Eval e Avaliação em Produção',
    topics: ['MMLU, HumanEval, GSM8K, HellaSwag — benchmarks de capacidade', 'LLM-as-Judge — MT-Bench, Chatbot Arena e ELO', 'RAGAS — Faithfulness, Answer Relevancy, Context Precision', 'Safety eval, red-team metrics e avaliação em produção'],
    path: '/llm/lecture9', color: '#f97316',
  },
  {
    id: 'llm10', num: '10', title: 'LLMs Multimodais',
    subtitle: 'CLIP, LLaVA, GPT-4V, Gemini e Fusão Visão-Linguagem',
    topics: ['CLIP — contrastive pretraining e zero-shot classification', 'LLaVA — ViT + projecção linear + LLM', 'GPT-4V e Gemini — multimodalidade nativa', 'Patch embeddings, dynamic resolution e casos de uso'],
    path: '/llm/lecture10', color: '#f97316',
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
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>LLMs & AGENTS</div>
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
