import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const modules = [
  {
    id: 'cio1', num: '01',
    title: 'Fundamentos da Inteligência Computacional',
    subtitle: 'Problema, Algoritmo, CI e o método computacional',
    topics: ['Problema vs Algoritmo vs Programa', 'Método clássico e as suas limitações', 'O que é Inteligência Computacional', 'Geração vs Avaliação de soluções'],
    path: '/cio/lecture1', color: '#f97316',
  },
  {
    id: 'cio2', num: '02',
    title: 'Espaço de Pesquisa & Fitness Landscape',
    subtitle: 'O.P. formal, No Free Lunch e topografia do problema',
    topics: ['Problema de Optimização (S, f)', 'Teorema No Free Lunch', 'Fitness Landscape — ler a topografia', 'Ótimo local vs global — bacias de atracção'],
    path: '/cio/lecture2', color: '#f97316',
  },
  {
    id: 'cio3', num: '03',
    title: 'Hill Climbing & Simulated Annealing',
    subtitle: 'Pesquisa local e escape de ótimos locais por aceitação probabilística',
    topics: ['Hill Climbing — variantes e limitações', 'Random Restart e plateaux', 'Simulated Annealing — P = e^(−Δf/T)', 'Cooling schedule e convergência'],
    path: '/cio/lecture3', color: '#f97316',
  },
  {
    id: 'cio4', num: '04',
    title: 'Tabu Search & Iterated Local Search',
    subtitle: 'Pesquisa local com memória e perturbação estruturada',
    topics: ['Lista Tabu e tenure τ', 'Critério de Aspiração', 'ILS — perturbação e critério de aceitação', 'Double-Bridge move para TSP'],
    path: '/cio/lecture9', color: '#f97316',
  },
  {
    id: 'cio5', num: '05',
    title: 'Modelação de Problemas: Knapsack & TSP',
    subtitle: 'As 4 perguntas, a Regra de Ouro e representação',
    topics: ['As 4 perguntas de design (S, repr., f, N)', 'Regra de Ouro — não resolver no fitness', 'Knapsack Problem — (S, f, N)', 'Travelling Salesman Problem — (S, f, N)'],
    path: '/cio/lecture4', color: '#f97316',
  },
  {
    id: 'cio6', num: '06',
    title: 'Algoritmos Genéticos — Fundamentos',
    subtitle: 'População, selecção, crossover e mutação',
    topics: ['De soluções únicas a populações', 'Selecção: roleta, torneio, rank', 'Crossover: 1-ponto, 2-pontos, uniforme', 'Mutação: bit-flip e exploração'],
    path: '/cio/lecture5', color: '#f97316',
  },
  {
    id: 'cio7', num: '07',
    title: 'AGs — Schema Theory & Parâmetros',
    subtitle: 'Porquê os AGs funcionam e como afinar',
    topics: ['Pseudocódigo completo e elitismo', 'Teoria dos Esquemas — esquemas e templates', 'Teorema dos Esquemas — crescimento exponencial', 'Building Blocks Hypothesis'],
    path: '/cio/lecture6', color: '#f97316',
  },
  {
    id: 'cio8', num: '08',
    title: 'Diversidade & Operadores para Permutações',
    subtitle: 'Fitness sharing, restricted mating, CX, PMX e multi-objectivo',
    topics: ['Convergência prematura e diversidade', 'Fitness Sharing e Restricted Mating', 'Cycle Crossover (CX) e PMX para TSP', 'Dominância de Pareto e multi-objectivo'],
    path: '/cio/lecture7', color: '#f97316',
  },
  {
    id: 'cio9', num: '09',
    title: 'Optimização Contínua & PSO',
    subtitle: 'Cromossomas reais e enxames de partículas',
    topics: ['Representação real — vectores em Rᵐ', 'Crossover aritmético e mutação gaussiana', 'Particle Swarm Optimization (PSO)', 'Velocidade, memória individual e colectiva'],
    path: '/cio/lecture8', color: '#f97316',
  },
  {
    id: 'cio10', num: '10',
    title: 'Ant Colony Optimization (ACO)',
    subtitle: 'Estigmergia, feromonas e inteligência de enxames',
    topics: ['Probabilidade de transição τ^α · η^β', 'Evaporação e depósito de feromonas', 'Ant System, ACS e MMAS', 'Aplicação ao TSP e VRP'],
    path: '/cio/lecture10', color: '#f97316',
  },
  {
    id: 'cio13', num: '11',
    title: 'Bee Algorithm',
    subtitle: 'Forrageio de abelhas, dança waggle e pesquisa local adaptativa',
    topics: ['Scout bees e exploração global', 'Dança waggle — ângulo e duração', 'Elite sites vs non-elite sites', 'Artificial Bee Colony (ABC) — variante popular'],
    path: '/cio/lecture13', color: '#f97316',
  },
  {
    id: 'cio14', num: '12',
    title: 'Fish School Search',
    subtitle: 'Cardume auto-organizado com pesos como memória de qualidade',
    topics: ['Individual movement — hill-climbing local', 'Feeding operator — peso ∝ Δfitness', 'Instinctive e Volitive collective movement', 'Equilíbrio automático exploração/exploitação'],
    path: '/cio/lecture14', color: '#f97316',
  },
  {
    id: 'cio11', num: '13',
    title: 'Estimation of Distribution Algorithms',
    subtitle: 'Estimation of Distribution Algorithms e o estado da arte contínuo',
    topics: ['UMDA, PBIL, BOA — família EDA', 'Problema do crossover disruptivo', 'CMA-ES — adaptação de σ e matriz C', 'Quando usar EDAs vs AG vs SA'],
    path: '/cio/lecture11', color: '#f97316',
  },
  {
    id: 'cio12', num: '14',
    title: 'Differential Evolution',
    subtitle: 'Perturbações dirigidas pela diferença entre vectores da população',
    topics: ['Mutação: v = xₐ + F·(x_b − x_c)', 'Crossover binomial com taxa CR', 'Selecção greedy — nunca piora', 'Estratégias: rand/1, best/1, self-adaptive'],
    path: '/cio/lecture12', color: '#f97316',
  },
  {
    id: 'cio15', num: '15',
    title: 'Sistemas Fuzzy',
    subtitle: 'Lógica fuzzy, inferência e controlo com incerteza linguística',
    topics: ['Conjuntos fuzzy — μ_A(x) ∈ [0,1]', 'Base de regras SE-ENTÃO linguísticas', 'Pipeline Mamdani: fuzzificação → inferência → defuzzificação', 'Mamdani vs Takagi-Sugeno'],
    path: '/cio/lecture15', color: '#f97316',
  },
];

export default function CIO() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Voltar ao Dashboard
        </Link>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Optimização
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Computational Intelligence for Optimization</h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 660 }}>
            Hill Climbing, SA, Tabu Search, AGs, Schema Theory, PSO, ACO, DE, Bee Algorithm, Fish School Search e Fuzzy. 15 módulos do problema à solução, da teoria à prática.
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
