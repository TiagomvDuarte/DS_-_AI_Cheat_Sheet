import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'lor1', num: '01', title: 'Introdução a Operations Research', subtitle: 'Programação linear, simplex, dualidade, análise de sensibilidade e modelação', topics: ['Prog. Linear', 'Simplex', 'Dualidade', 'Modelação'], path: '/logistics-or/lecture1', color: '#f97316' },
  { id: 'lor2', num: '02', title: 'Programação Inteira & Combinatória', subtitle: 'ILP, branch-and-bound, cutting planes, TSP e problemas de cobertura', topics: ['ILP', 'Branch & Bound', 'TSP', 'Cobertura'], path: '/logistics-or/lecture2', color: '#f97316' },
  { id: 'lor3', num: '03', title: 'Otimização de Rotas', subtitle: 'VRP, CVRP, VRPTW, heurísticas, metaheurísticas e solvers modernos', topics: ['VRP', 'CVRP', 'VRPTW', 'OR-Tools'], path: '/logistics-or/lecture3', color: '#f97316' },
  { id: 'lor4', num: '04', title: 'Gestão de Inventário & Supply Chain', subtitle: 'EOQ, modelos estocásticos, bullwhip effect, S&OP e digital twins', topics: ['EOQ', 'Inventário', 'Bullwhip', 'S&OP'], path: '/logistics-or/lecture4', color: '#f97316' },
  { id: 'lor5', num: '05', title: 'Scheduling & Planeamento', subtitle: 'Job-shop, flow-shop, RCPSP, makespan, constraint programming e MIP', topics: ['Job-shop', 'Flow-shop', 'RCPSP', 'CP-SAT'], path: '/logistics-or/lecture5', color: '#f97316' },
  { id: 'lor6', num: '06', title: 'ML & RL para Logística', subtitle: 'Previsão de procura, RL para routing, pointer networks e aprendizagem combinatorial', topics: ['Previsão', 'RL para VRP', 'Pointer Networks', 'L2O'], path: '/logistics-or/lecture6', color: '#f97316' },
  { id: 'lor7', num: '07', title: 'Last-Mile & Urban Logistics', subtitle: 'Crowdsourcing, drones, locker networks, micro-fulfillment e mobilidade urbana', topics: ['Last-Mile', 'Drones', 'Crowdsourcing', 'Urban'], path: '/logistics-or/lecture7', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function LogisticsOR() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>AI IN LOGISTICS & OPERATIONS RESEARCH</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>AI in Logistics & Operations Research</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Programação linear e inteira, otimização de rotas, gestão de inventário, scheduling, ML e RL aplicados a problemas combinatoriais — da teoria OR clássica ao deployment de IA em supply chains modernas.</p>
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
