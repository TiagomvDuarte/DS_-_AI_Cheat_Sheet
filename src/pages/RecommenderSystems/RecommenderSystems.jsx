import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'rec1', num: '01', title: 'Collaborative Filtering', subtitle: 'User-based, item-based, matrix factorization, ALS e SVD++', topics: ['User-Based CF', 'Item-Based CF', 'Matrix Factorization', 'ALS'], path: '/recommender/lecture1', color: '#f97316' },
  { id: 'rec2', num: '02', title: 'Content-Based Filtering', subtitle: 'TF-IDF, embeddings, cosine similarity, feature engineering e perfis de utilizador', topics: ['TF-IDF', 'Embeddings', 'Cosine Similarity', 'Perfis'], path: '/recommender/lecture2', color: '#f97316' },
  { id: 'rec3', num: '03', title: 'Sistemas Híbridos', subtitle: 'Combinação de abordagens, Netflix Prize, ensemble e contextual bandits', topics: ['Hybrid Models', 'Netflix Prize', 'Ensemble', 'Bandits'], path: '/recommender/lecture3', color: '#f97316' },
  { id: 'rec4', num: '04', title: 'Deep Learning para RecSys', subtitle: 'Two-tower models, NCF, modelos sequenciais, BERT4Rec e autoencoders', topics: ['Two-Tower', 'NCF', 'BERT4Rec', 'Sequential'], path: '/recommender/lecture4', color: '#f97316' },
  { id: 'rec5', num: '05', title: 'Avaliação & Produção', subtitle: 'NDCG, MRR, cold start, A/B testing, fairness e serving em larga escala', topics: ['NDCG / MRR', 'Cold Start', 'A/B Testing', 'Serving'], path: '/recommender/lecture5', color: '#f97316' },
  { id: 'rec6', num: '06', title: 'Graph-Based & Knowledge-Aware RecSys', subtitle: 'PinSage, GraphSAGE, knowledge graphs, KGCN e recomendação explicável', topics: ['PinSage', 'GraphSAGE', 'Knowledge Graphs', 'KGCN'], path: '/recommender/lecture6', color: '#f97316' },
  { id: 'rec7', num: '07', title: 'Reinforcement Learning para RecSys', subtitle: 'Bandits, DQN, actor-critic, exploração/exploração e feedback implícito', topics: ['Bandits', 'DQN', 'Actor-Critic', 'Exploração'], path: '/recommender/lecture7', color: '#f97316' },
  { id: 'rec8', num: '08', title: 'LLMs para Recomendação', subtitle: 'P5, TALLRec, RecSys com prompting, conversational recommendation e RAG', topics: ['P5 / TALLRec', 'Prompting', 'Conversational', 'RAG'], path: '/recommender/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function RecommenderSystems() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>RECOMMENDER SYSTEMS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Recommender Systems</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Collaborative filtering, content-based, sistemas híbridos, deep learning, graph networks, reinforcement learning e LLMs para recomendação — da teoria ao deployment em larga escala.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {modules.map(m => (
          <div key={m.id} onClick={() => navigate(m.path)}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${m.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Módulo</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.num}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{m.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{m.subtitle}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>{m.topics.map(t => <span key={t} style={topicStyle(m.color)}>{t}</span>)}</div>
            </div>
            <ArrowRight size={18} color={m.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
