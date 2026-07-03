import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'dsm1', num: '01', title: 'Introdução aos Data Streams',           subtitle: 'Concept Drift, Online Learning e Desafios de Streams',              topics: ['Data streams vs. batch learning', 'Concept drift — tipos e causas', 'Restrições: memória, tempo e single pass', 'Prequential evaluation (interleaved test-then-train)'], path: '/dsm/lecture1', color: '#f97316' },
  { id: 'dsm2', num: '02', title: 'Árvores de Hoeffding',                  subtitle: 'VFDT, Hoeffding Bound e Adaptive Hoeffding Tree',                   topics: ['Hoeffding bound — garantias estatísticas', 'VFDT (Very Fast Decision Tree)', 'Tie-breaking e grace period', 'Adaptive Hoeffding Tree (ADWIN + VFDT)'], path: '/dsm/lecture2', color: '#f97316' },
  { id: 'dsm3', num: '03', title: 'Deteção de Concept Drift',              subtitle: 'ADWIN, DDM, Page-Hinkley e EDDM',                                   topics: ['DDM — Drift Detection Method', 'ADWIN — Adaptive Windowing', 'Page-Hinkley Test', 'EDDM — Early Drift Detection Method'], path: '/dsm/lecture3', color: '#f97316' },
  { id: 'dsm4', num: '04', title: 'Ensembles para Streams',                subtitle: 'OzaBagging, OzaBoosting e Adaptive Random Forest',                   topics: ['OzaBagging — bagging online com Poisson(1)', 'OzaBoosting — boosting online', 'Leveraging Bagging — diversidade via λ', 'Adaptive Random Forest (ARF)'], path: '/dsm/lecture4', color: '#f97316' },
  { id: 'dsm5', num: '05', title: 'Clustering e Avaliação em Streams',     subtitle: 'CluStream, DenStream e Métricas Prequenciais',                       topics: ['CluStream — micro e macro clustering', 'DenStream — density-based em streams', 'Prequential accuracy e kappa statistic', 'MOA framework para data stream mining'], path: '/dsm/lecture5', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function DSM() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DATA STREAM MINING</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Data Stream Mining</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Algoritmos online para dados em fluxo contínuo — Hoeffding Trees, deteção de concept drift (ADWIN, DDM), ensembles adaptativos e clustering em streams. Aprendizagem em ambientes não-estacionários.</p>
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
