import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'lecture1',
    num: '01',
    title: 'Introdução ao NLP',
    subtitle: 'Pipeline & Desafios da Linguagem Natural',
    topics: ['Text Mining vs NLP', 'Variabilidade & Ambiguidade', 'OOD & OOV', 'Pipeline: Corpus → Features → Task'],
    path: '/nlp/lecture1',
    color: '#4a9eed',
  },
  {
    id: 'lecture2',
    num: '02',
    title: 'Pré-processamento de Texto',
    subtitle: 'Limpeza, Normalização & Bag-of-Words',
    topics: ['Tokenização & Lowercasing', 'Stop Words & Normalização (Regex)', 'Stemming vs Lemmatização & PoS Filtering', 'Bag-of-Words & Distância Euclidiana'],
    path: '/nlp/lecture2',
    color: '#4a9eed',
  },
  {
    id: 'lecture3',
    num: '03',
    title: 'Word Representations',
    subtitle: 'Embeddings & Word2Vec (Skip-gram)',
    topics: ['4 Problemas do BoW', 'Matriz Termo-Termo & PPMI', 'Word2Vec — 5 passos', 'Negative Sampling & Arquitectura'],
    path: '/nlp/lecture3',
    color: '#4a9eed',
  },
  {
    id: 'lecture4',
    num: '04',
    title: 'Tokenização Subword & Embeddings Avançados',
    subtitle: 'BPE, WordPiece, SentencePiece, GloVe & FastText',
    topics: ['Byte-Pair Encoding passo a passo', 'WordPiece vs SentencePiece', 'GloVe — co-ocorrência global', 'FastText & subwords para OOV'],
    path: '/nlp/lecture4',
    color: '#4a9eed',
  },
  {
    id: 'lecture5',
    num: '05',
    title: 'RNN, LSTM & Seq2Seq',
    subtitle: 'Modelos Sequenciais',
    topics: ['RNN — equações & exemplos numéricos', 'Vanishing Gradients', '3 Portas da LSTM (forget, input, output)', 'Encoder–Decoder & Bottleneck'],
    path: '/nlp/lecture5',
    color: '#4a9eed',
  },
  {
    id: 'lecture6',
    num: '06',
    title: 'Atenção & Transformers',
    subtitle: 'Bahdanau/Luong Attention + Arquitectura Transformer',
    topics: ['Bottleneck do Seq2Seq + Atenção de Bahdanau', 'Self-Attention matricial: Q, K, V e softmax(QKᵀ/√dₖ)V', 'Multi-Head Attention, Positional Encoding & Add/Norm', 'Encoder vs Decoder + Feed-Forward Network'],
    path: '/nlp/lecture6',
    color: '#4a9eed',
  },
  {
    id: 'lecture7',
    num: '07',
    title: 'BERT vs GPT',
    subtitle: 'Encoder-only e Decoder-only',
    topics: ['BERT — Embeddings, MLM, NSP & Fine-tuning', 'Variantes de BERT & Pooling Strategies', 'GPT — Geração Auto-Regressiva & Máscara Causal', 'Treino, Decoding & KV-Cache'],
    path: '/nlp/lecture7',
    color: '#4a9eed',
  },
  {
    id: 'lecture8',
    num: '08',
    title: 'LLMs & Agentic AI',
    subtitle: 'Geração, RAG & Agentes',
    topics: ['GPT Evolution & Quantização', 'Temperature, top_p, top_k', 'Prompt Engineering & Few-shot', 'RAG Pipeline & AI Agents (ReAct, MAS)'],
    path: '/nlp/lecture8',
    color: '#4a9eed',
  },
  {
    id: 'lecture9',
    num: '09',
    title: 'Hugging Face: Do Modelo ao Deploy',
    subtitle: 'Transformers, Tokenizers, Hub & Fine-tuning',
    topics: ['pipeline() & AutoModel/AutoTokenizer', 'Tokenizers & Model Hub', 'Fine-tuning com Trainer & Datasets', 'push_to_hub & Model Cards'],
    path: '/nlp/lecture9',
    color: '#4a9eed',
  },
];

export default function NLP() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Voltar ao Dashboard
        </Link>

        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Natural Language Processing</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Do Bag-of-Words à tokenização subword, do Word2Vec às RNNs/LSTMs, do Transformer ao BERT e GPT, até aos agentes autónomos com RAG — terminando com avaliação rigorosa e NLP multilingue.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {modules.map((lecture) => (
            <div
              key={lecture.id}
              onClick={() => navigate(lecture.path)}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--card-border)',
                borderLeft: `4px solid ${lecture.color}`,
                borderRadius: 12,
                padding: '1.25rem 1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: '1rem',
                alignItems: 'center',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${lecture.color}10`; e.currentTarget.style.borderColor = `var(--card-border)`; e.currentTarget.style.borderLeftColor = lecture.color; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: lecture.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: lecture.color, lineHeight: 1 }}>{lecture.num}</div>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{lecture.title}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{lecture.subtitle}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {lecture.topics.map(topic => (
                    <span key={topic} style={{
                      background: `${lecture.color}12`,
                      border: `1px solid ${lecture.color}30`,
                      color: lecture.color,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.55rem',
                      borderRadius: 12,
                    }}>{topic}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: lecture.color, fontWeight: 700, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                Abrir <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
