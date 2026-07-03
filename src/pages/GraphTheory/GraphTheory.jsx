import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const modules = [
  { id: 'gth1', num: '01', title: 'Fundamentos de Grafos', subtitle: 'Definições, tipos de grafos, representações, grau, caminhos e conectividade', topics: ['Definições', 'Representações', 'Grau', 'Conectividade'], path: '/graph-theory/lecture1', color: '#f97316' },
  { id: 'gth2', num: '02', title: 'Algoritmos Clássicos', subtitle: 'BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall e ordenação topológica', topics: ['BFS / DFS', 'Dijkstra', 'Bellman-Ford', 'Topológica'], path: '/graph-theory/lecture2', color: '#f97316' },
  { id: 'gth3', num: '03', title: 'Árvores e Spanning Trees', subtitle: 'Propriedades de árvores, MST, Kruskal, Prim e árvores de decisão', topics: ['MST', 'Kruskal', 'Prim', 'Árvores'], path: '/graph-theory/lecture3', color: '#f97316' },
  { id: 'gth4', num: '04', title: 'Fluxo em Redes', subtitle: 'Max-flow min-cut, Ford-Fulkerson, Edmonds-Karp e matching bipartido', topics: ['Max-Flow', 'Min-Cut', 'Ford-Fulkerson', 'Matching'], path: '/graph-theory/lecture4', color: '#f97316' },
  { id: 'gth5', num: '05', title: 'Deteção de Comunidades', subtitle: 'Modularidade, Louvain, Girvan-Newman, overlapping communities e benchmarks', topics: ['Modularidade', 'Louvain', 'Girvan-Newman', 'Overlapping'], path: '/graph-theory/lecture5', color: '#f97316' },
  { id: 'gth6', num: '06', title: 'Métricas de Redes', subtitle: 'Centralidade, PageRank, HITS, small-world, scale-free e robustez', topics: ['Centralidade', 'PageRank', 'Small-World', 'Scale-Free'], path: '/graph-theory/lecture6', color: '#f97316' },
  { id: 'gth7', num: '07', title: 'Graph Neural Networks', subtitle: 'GCN, GraphSAGE, GAT, message passing, expressividade e WL test', topics: ['GCN', 'GraphSAGE', 'GAT', 'WL Test'], path: '/graph-theory/lecture7', color: '#f97316' },
  { id: 'gth8', num: '08', title: 'Aplicações de Network Science', subtitle: 'Redes sociais, biológicas, financeiras, epidemiologia e infraestruturas críticas', topics: ['Redes Sociais', 'Biológicas', 'Epidemiologia', 'Infraestruturas'], path: '/graph-theory/lecture8', color: '#f97316' },
];

const topicStyle = (c) => ({ background: `${c}12`, border: `1px solid ${c}30`, color: c, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 });

export default function GraphTheory() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>← Dashboard</Link>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>GRAPH THEORY & NETWORK SCIENCE</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Graph Theory & Network Science</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>Fundamentos de grafos, algoritmos clássicos, fluxo em redes, deteção de comunidades, métricas de redes complexas e Graph Neural Networks — teoria e aplicações em redes sociais, biológicas e de infraestrutura.</p>
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
