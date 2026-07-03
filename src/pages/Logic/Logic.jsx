import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'log1', num: '01', title: 'Lógica Proposicional & de Predicados', subtitle: 'Sintaxe, semântica, tabelas de verdade, quantificadores e formas normais', topics: ['Proposicional', 'Predicados', 'Quantificadores', 'Formas Normais'], path: '/logic/lecture1', color: '#f97316' },
  { id: 'log2', num: '02', title: 'Resolução & Prova Automática', subtitle: 'Método de resolução, cláusulas de Horn, unificação e theorem proving', topics: ['Resolução', 'Cláusulas de Horn', 'Unificação', 'Theorem Proving'], path: '/logic/lecture2', color: '#f97316' },
  { id: 'log3', num: '03', title: 'Programação Lógica & Prolog', subtitle: 'Factos, regras, backtracking, cut, listas e meta-predicados', topics: ['Prolog', 'Backtracking', 'Cut', 'Meta-predicados'], path: '/logic/lecture3', color: '#f97316' },
  { id: 'log4', num: '04', title: 'Knowledge Representation & Ontologias', subtitle: 'RDF, OWL, SPARQL, Description Logic, Web Semântica e knowledge graphs', topics: ['RDF / OWL', 'SPARQL', 'Description Logic', 'Knowledge Graphs'], path: '/logic/lecture4', color: '#f97316' },
  { id: 'log5', num: '05', title: 'Constraint Satisfaction & Planeamento', subtitle: 'CSPs, backtracking, arc consistency, STRIPS, PDDL e A*', topics: ['CSP', 'Arc Consistency', 'STRIPS / PDDL', 'A*'], path: '/logic/lecture5', color: '#f97316' },
  { id: 'log6', num: '06', title: 'Raciocínio Probabilístico', subtitle: 'Redes Bayesianas, Markov Logic Networks, inferência e aprendizagem', topics: ['Redes Bayesianas', 'MLN', 'Inferência', 'Aprendizagem'], path: '/logic/lecture6', color: '#f97316' },
  { id: 'log7', num: '07', title: 'Neuro-Simbólico', subtitle: 'LNN, DeepProbLog, NeSy, verificação formal de redes neuronais e AI híbrida', topics: ['LNN', 'DeepProbLog', 'NeSy', 'Verificação Formal'], path: '/logic/lecture7', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function Logic() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>LÓGICA & RACIOCÍNIO</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Lógica & Raciocínio</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Fundamentos de raciocínio formal — lógica proposicional e de predicados, programação lógica, ontologias, constraint satisfaction, raciocínio probabilístico e IA neuro-simbólica.</p>
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
