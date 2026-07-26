import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'eth1', num: '01', title: 'Fundamentos de Ética em IA', subtitle: 'Stakeholders, frameworks éticos, casos históricos e dilemas de design', topics: ['Stakeholders', 'Frameworks Éticos', 'Casos Históricos', 'Dilemas de Design'], path: '/ai-ethics/lecture1', color: '#4a9eed' },
  { id: 'eth2', num: '02', title: 'Bias & Fairness', subtitle: 'Tipos de bias, métricas de fairness, impossibilidade e mitigação', topics: ['Bias Tipos', 'Fairness Métricas', 'Impossibilidade', 'Mitigação'], path: '/ai-ethics/lecture2', color: '#4a9eed' },
  { id: 'eth3', num: '03', title: 'Regulamentação — EU AI Act', subtitle: 'Risk tiers, prohibited AI, conformidade e certificação', topics: ['EU AI Act', 'Risk Tiers', 'Compliance', 'Certificação'], path: '/ai-ethics/lecture3', color: '#4a9eed' },
  { id: 'eth4', num: '04', title: 'Privacidade & Vigilância', subtitle: 'GDPR, privacidade diferencial, surveillance capitalism e anonimização', topics: ['GDPR', 'Privacidade Diferencial', 'Vigilância', 'Anonimização'], path: '/ai-ethics/lecture4', color: '#4a9eed' },
  { id: 'eth5', num: '05', title: 'Responsible AI em Prática', subtitle: 'Governance frameworks, auditing, red teaming e model cards', topics: ['Governance', 'Auditing', 'Red Teaming', 'Model Cards'], path: '/ai-ethics/lecture5', color: '#4a9eed' },
  { id: 'eth6', num: '06', title: 'Impacto Social & Futuro do Trabalho', subtitle: 'Automação, desigualdade, mercado de trabalho, UBI e transição justa', topics: ['Automação', 'Desigualdade', 'Futuro Trabalho', 'UBI'], path: '/ai-ethics/lecture6', color: '#4a9eed' },
  { id: 'eth7', num: '07', title: 'AI Safety & Alignment', subtitle: 'RLHF, Constitutional AI, interpretabilidade para safety e existential risk', topics: ['RLHF', 'Constitutional AI', 'Alignment', 'Existential Risk'], path: '/ai-ethics/lecture7', color: '#4a9eed' },
  { id: 'eth8', num: '08', title: 'Desinformação & IA Generativa', subtitle: 'Deepfakes, manipulação de conteúdo, regulação e watermarking', topics: ['Deepfakes', 'Desinformação', 'Watermarking', 'Regulação'], path: '/ai-ethics/lecture8', color: '#4a9eed' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function AIEthics() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>AI ETHICS &amp; GOVERNANCE</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>AI Ethics &amp; Governance</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Fundamentos de ética em inteligência artificial, fairness, regulamentação europeia, privacidade de dados e frameworks de IA responsável.</p>
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
