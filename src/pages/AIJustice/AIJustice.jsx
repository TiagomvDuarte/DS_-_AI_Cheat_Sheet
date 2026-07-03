import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'jus1', num: '01', title: 'IA no Sistema de Justiça', subtitle: 'Decisão algorítmica em tribunais, accountability, due process e casos históricos', topics: ['Decisão Algorítmica', 'Due Process', 'Accountability', 'Casos Reais'], path: '/ai-justice/lecture1', color: '#f97316' },
  { id: 'jus2', num: '02', title: 'Policiamento Preditivo', subtitle: 'PredPol, ShotSpotter, hot-spots, bias racial e direitos civis', topics: ['PredPol', 'ShotSpotter', 'Hot-spots', 'Bias Racial'], path: '/ai-justice/lecture2', color: '#f97316' },
  { id: 'jus3', num: '03', title: 'Avaliação de Risco & Recidivismo', subtitle: 'COMPAS, PSA, fairness impossibility, impacto em sentenças e liberdade condicional', topics: ['COMPAS', 'PSA', 'Fairness', 'Sentenças'], path: '/ai-justice/lecture3', color: '#f97316' },
  { id: 'jus4', num: '04', title: 'Reconhecimento Facial na Justiça', subtitle: 'Bias em FR, erros de identificação, casos de prisão errada e regulação', topics: ['Facial Recognition', 'Bias', 'Erros', 'Regulação'], path: '/ai-justice/lecture4', color: '#f97316' },
  { id: 'jus5', num: '05', title: 'IA na Prática Jurídica', subtitle: 'Legal research, contract analysis, previsão de decisões judiciais e acesso à justiça', topics: ['Legal Research', 'NLP Jurídico', 'Previsão', 'Acesso'], path: '/ai-justice/lecture5', color: '#f97316' },
  { id: 'jus6', num: '06', title: 'Regulação & Accountability', subtitle: 'EU AI Act na justiça, auditoria de algoritmos, direito à explicação e transparência', topics: ['EU AI Act', 'Auditoria', 'Explicação', 'Transparência'], path: '/ai-justice/lecture6', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function AIJustice() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>AI & JUSTICE</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>AI & Justice</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Decisão algorítmica em tribunais, policiamento preditivo, avaliação de risco de recidivismo, reconhecimento facial, IA na prática jurídica e frameworks de accountability — IA no cruzamento com direitos fundamentais.</p>
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
