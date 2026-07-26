import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'nel2', num: '01',
    title: 'GA, GP e GSGP',
    subtitle: 'A diferença fundamental entre GA e GP, e o espaço semântico',
    topics: ['GA vs GP — o indivíduo é tudo', 'Representação em árvore e operadores GP', 'GSGP — superfície unimodal no espaço semântico', 'GSM: T\' = T + ms × (T_R₁ − T_R₂)'],
    path: '/nel/lecture2', color: '#4a9eed',
  },
  {
    id: 'nel3', num: '02',
    title: 'Regressão Simbólica Aplicada',
    subtitle: 'Descoberta automática de equações matemáticas a partir de dados',
    topics: ['SR vs regressão clássica vs redes neuronais', 'Benchmarks Nguyen, Koza, Pagie, Vladislavleva', 'Aplicações: bioinformática, química, finanças, física', 'Implementação com SLIM_GSGP em Python'],
    path: '/nel/lecture3', color: '#4a9eed',
  },
  {
    id: 'nel4', num: '03',
    title: 'SLIM_GSGP',
    subtitle: 'Controlar o tamanho dos modelos sem perder qualidade',
    topics: ['Problema do bloat no GSGP', 'Inflate e Deflate mutations', 'Cancelamento algébrico de termos', 'Trade-off tamanho vs erro'],
    path: '/nel/lecture4', color: '#4a9eed',
  },
  {
    id: 'nel5', num: '04',
    title: 'Neuroevolução — Evoluir Pesos e Topologia',
    subtitle: 'Do Perceptron à evolução de arquitecturas neurais',
    topics: ['Perceptron e funções de activação (contexto)', 'Evoluir pesos com GA e PSO/GIL', 'Codificação binária de topologia', 'Limitações — escalabilidade e representação'],
    path: '/nel/lecture5', color: '#4a9eed',
  },
  {
    id: 'nel6', num: '05',
    title: 'NEAT',
    subtitle: 'NeuroEvolution of Augmenting Topologies',
    topics: ['Innovation numbers — competing conventions problem', 'Especiação: δ = c₁·E/N + c₂·D/N + c₃·W̄', 'Fitness sharing: f\'ᵢ = fᵢ / |Sₖ|', 'Add node (pesos 1 e w) + XOR benchmark'],
    path: '/nel/lecture6', color: '#4a9eed',
  },
  {
    id: 'nel7', num: '06',
    title: 'Evoluções do NEAT',
    subtitle: 'HyperNEAT, ES-HyperNEAT, CoDeepNEAT, Novelty Search e OpenAI ES',
    topics: ['HyperNEAT — CPPNs e regularidade geométrica', 'ES-HyperNEAT — substrato evoluível', 'CoDeepNEAT — co-evolução de módulos', 'MAP-Elites, Novelty Search, OpenAI ES'],
    path: '/nel/lecture7', color: '#4a9eed',
  },
  {
    id: 'nel8', num: '07',
    title: 'Aprendizagem por Reforço Evolutiva',
    subtitle: 'Populações de políticas, OpenAI ES e ERL híbrido',
    topics: ['EvoRL vs RL por gradiente (PPO, A3C)', 'OpenAI ES: θ ← θ + α/(Nσ)·ΣFᵢεᵢ', 'ERL: exploração evolutiva + eficiência de gradiente', 'Casos de uso: robótica, jogos, NAS, trading'],
    path: '/nel/lecture8', color: '#4a9eed',
  },
  {
    id: 'nel9', num: '08',
    title: 'Programação Evolutiva',
    subtitle: 'Mutação auto-adaptativa, torneio estocástico e a filosofia de Fogel',
    topics: ['Sem crossover — mutação como único operador', 'Auto-adaptação: σ\' = σ·exp(τ·N(0,1))', 'Fast EP — distribuição de Cauchy vs Gaussiana', 'Torneio estocástico sobre pool de 2μ'],
    path: '/nel/lecture9', color: '#4a9eed',
  },
  {
    id: 'nel10', num: '09',
    title: 'Quality-Diversity',
    subtitle: 'Novelty Search e MAP-Elites — explorar em vez de optimizar',
    topics: ['Fitness deceptivo — quando o gradiente engana', 'Novelty Search: ρ(x) = média das distâncias aos k vizinhos', 'MAP-Elites: grelha de nichos comportamentais', 'Quality-Diversity como paradigma'],
    path: '/nel/lecture10', color: '#4a9eed',
  },
];

export default function NEL() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem', width: 'fit-content' }}>
          <ArrowLeft size={16} /> Voltar ao Dashboard
        </Link>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Neural & Evolutionary Learning
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Neural & Evolutionary Learning</h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 660 }}>
            GA vs GP, GSGP, Regressão Simbólica, SLIM, Neuroevolução, NEAT, EvoRL, Programação Evolutiva e Quality-Diversity. 9 módulos da representação em árvore ao MAP-Elites.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {modules.map((lecture) => (
            <div key={lecture.id} onClick={() => navigate(lecture.path)}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderLeft: `4px solid ${lecture.color}`, borderRadius: 12, padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', alignItems: 'center' }}
              onMouseEnter={e => { e.currentTarget.style.background = `${lecture.color}10`; e.currentTarget.style.transform = 'translateX(4px)'; }}
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
                    <span key={topic} style={{ background: `${lecture.color}12`, border: `1px solid ${lecture.color}30`, color: lecture.color, fontSize: '0.75rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: 12 }}>{topic}</span>
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
