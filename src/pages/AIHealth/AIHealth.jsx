import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'AH1', num: '01', title: 'Introdução à IA em Saúde', subtitle: 'EHR, imaging, genómica e regulamentação FDA/CE', topics: ['EHR', 'Medical Imaging', 'Drug Discovery', 'FDA / CE'], path: '/ai-health/lecture1', color: '#f97316' },
  { id: 'AH2', num: '02', title: 'Medical Imaging', subtitle: 'CNNs para radiologia, segmentação e detecção de tumores', topics: ['CNNs', 'Segmentação', 'Detecção Tumores', 'Radiologia'], path: '/ai-health/lecture2', color: '#f97316' },
  { id: 'AH3', num: '03', title: 'EHR & Clinical NLP', subtitle: 'Extracção de entidades, BERT clínico e ICD coding', topics: ['NER Clínico', 'BERT Clínico', 'ICD Coding', 'Extracção de Dados'], path: '/ai-health/lecture3', color: '#f97316' },
  { id: 'AH4', num: '04', title: 'Drug Discovery & Genomics', subtitle: 'ML molecular, GNNs e AlphaFold para descoberta de fármacos', topics: ['ML Molecular', 'GNNs', 'AlphaFold', 'Genómica'], path: '/ai-health/lecture4', color: '#f97316' },
  { id: 'AH5', num: '05', title: 'IA Clínica Responsável', subtitle: 'Bias, fairness, explicabilidade e GDPR em saúde', topics: ['Bias & Fairness', 'Explicabilidade', 'GDPR Saúde', 'Ética Clínica'], path: '/ai-health/lecture5', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function AIHealth() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>AI IN HEALTH</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>AI in Health</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Descobre como a inteligência artificial está a revolucionar a medicina, desde o diagnóstico por imagem até à descoberta de fármacos. Aprende a aplicar modelos de ML em contextos clínicos com responsabilidade e conformidade regulatória.</p>
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
