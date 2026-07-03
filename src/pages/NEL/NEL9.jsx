import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page:    { padding: '2rem 1rem', maxWidth: 860, margin: '0 auto' },
  tag:     { display: 'inline-block', background: '#f97316', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: 20, marginBottom: '0.6rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1:      { fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub:     { fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 },
  section: { marginBottom: '2.5rem' },
  h2:      { fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.9rem', paddingBottom: '0.4rem', borderBottom: '2px solid #f9731630' },
  h3:      { fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' },
  p:       { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.9rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.25rem' },
  table:   { width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' },
  th:      { background: 'rgba(249,115,22,0.12)', color: '#f97316', fontWeight: 700, padding: '0.55rem 0.75rem', textAlign: 'left', borderBottom: '2px solid rgba(249,115,22,0.2)' },
  td:      { padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)', verticalAlign: 'top' },
  code:    { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '0.83rem', color: '#f97316', overflowX: 'auto', marginBottom: '1rem', whiteSpace: 'pre' },
};

/* ── Timeline ── */
const timeline = [
  { year: '1966', label: 'Fogel, Owens & Walsh', desc: 'EP original — evolução de FSMs para prever sequências de símbolos. Sem crossover, só mutação.' },
  { year: '1992', label: 'Meta-EP (Bäck & Schwefel)', desc: 'Auto-adaptação dos parâmetros de mutação σᵢ: cada indivíduo carrega a sua própria taxa de mutação.' },
  { year: '1994', label: 'Fast EP (Yao & Liu)', desc: 'Substitui distribuição gaussiana por Cauchy — caudas pesadas permitem saltos maiores, melhor em funções multimodais.' },
  { year: '1999', label: 'EP em optimização contínua', desc: 'EP torna-se framework geral para optimização de vectores reais, competindo directamente com ES e GA real.' },
  { year: '2000s', label: 'EP + redes neuronais', desc: 'Uso de EP para evoluir pesos e arquitecturas de redes, precursor directo da neuroevolução moderna.' },
];

const TimelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Linha Temporal — Programação Evolutiva</p>
    <div style={{ position: 'relative', paddingLeft: '2rem' }}>
      <div style={{ position: 'absolute', left: '0.6rem', top: 0, bottom: 0, width: 2, background: 'rgba(249,115,22,0.25)' }} />
      {timeline.map((e, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: '1.1rem', paddingLeft: '1.2rem' }}>
          <div style={{ position: 'absolute', left: '-1.45rem', top: '0.3rem', width: 10, height: 10, borderRadius: '50%', background: '#f97316', border: '2px solid var(--bg-primary)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', display: 'block' }}>{e.year} — {e.label}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{e.desc}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Algorithm cycle explorer ── */
const steps = [
  {
    title: '1. Inicialização',
    color: '#f97316',
    content: 'Criar população P de μ indivíduos. Cada indivíduo é um par (xᵢ, σᵢ) — vector de solução + vector de passos de mutação. σᵢ é inicializado com um valor heurístico (ex: 3).',
  },
  {
    title: '2. Avaliação',
    color: '#f97316',
    content: 'Calcular f(xᵢ) para cada indivíduo. Em EP não há selecção de pais — todos os μ indivíduos são pais.',
  },
  {
    title: '3. Mutação (Auto-adaptativa)',
    color: '#f97316',
    content: "Primeiro mutar σ, depois x:\n  σ'ᵢ = σᵢ · exp(τ' · N(0,1) + τ · Nᵢ(0,1))\n  x'ᵢ = xᵢ + σ'ᵢ · N(0,1)\nonde τ = 1/√(2n) e τ' = 1/√(2√n) são taxas de aprendizagem.",
  },
  {
    title: '4. Torneio Estocástico',
    color: '#f97316',
    content: 'Selecção por torneio probabilístico: cada indivíduo (original ou mutado) compete contra q oponentes aleatórios. O score é o número de vitórias. Os μ com maior score sobrevivem para a próxima geração.',
  },
  {
    title: '5. Critério de Paragem',
    color: '#f97316',
    content: 'Parar quando número máximo de avaliações é atingido, σᵢ converge para zero (sem variação), ou o fitness estagna durante k gerações.',
  },
];

const AlgorithmExplorer = () => {
  const [sel, setSel] = useState(0);
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ciclo do Algoritmo — Programação Evolutiva</p>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {steps.map((s, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{ padding: '0.3rem 0.7rem', borderRadius: 8, border: `2px solid ${sel === i ? s.color : 'var(--card-border)'}`, background: sel === i ? `${s.color}15` : 'transparent', color: sel === i ? s.color : 'var(--text-secondary)', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}>
            {s.title}
          </button>
        ))}
      </div>
      <div style={{ background: `${steps[sel].color}10`, border: `1px solid ${steps[sel].color}30`, borderRadius: 10, padding: '1rem 1.25rem' }}>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, whiteSpace: 'pre-wrap', margin: 0, fontSize: '0.9rem' }}>{steps[sel].content}</p>
      </div>
    </div>
  );
};

/* ── Mutation SVG ── */
const MutationDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
      Mutação Auto-adaptativa — σ muta antes de x
    </p>
    <svg viewBox="0 0 660 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ep" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#f97316"/>
        </marker>
        <marker id="arr-ep-gr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#f97316"/>
        </marker>
      </defs>

      {/* Individual box */}
      <rect x="20" y="55" width="140" height="70" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="90" y="82" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Indivíduo</text>
      <text x="90" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">x = (x₁,…,xₙ)</text>
      <text x="90" y="116" textAnchor="middle" fill="#f97316" fontSize="10">σ = (σ₁,…,σₙ)</text>

      {/* Arrow 1: mutate σ */}
      <line x1="160" y1="90" x2="250" y2="90" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr-ep)"/>
      <text x="205" y="80" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">① mutar σ</text>
      <text x="205" y="106" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">σ' = σ·exp(τ·N(0,1))</text>

      {/* σ' box */}
      <rect x="252" y="65" width="120" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="312" y="88" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">σ' actualizado</text>
      <text x="312" y="104" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">passos adaptativos</text>

      {/* Arrow 2: mutate x */}
      <line x1="372" y1="90" x2="460" y2="90" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr-ep-gr)"/>
      <text x="416" y="80" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">② mutar x</text>
      <text x="416" y="106" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">x' = x + σ'·N(0,1)</text>

      {/* x' box */}
      <rect x="462" y="55" width="140" height="70" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="532" y="82" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Filho</text>
      <text x="532" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">x' = (x'₁,…,x'ₙ)</text>
      <text x="532" y="116" textAnchor="middle" fill="#f97316" fontSize="10">σ' = (σ'₁,…,σ'ₙ)</text>

      {/* Note */}
      <text x="330" y="158" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Sem crossover — cada pai gera exactamente um filho por mutação</text>
    </svg>
  </div>
);

/* ── Comparison explorer ── */
const comparisons = [
  {
    name: 'EP vs ES', color: '#f97316',
    rows: [
      ['Crossover', 'Nunca (EP) — opcional (ES)', 'ES usa crossover; EP rejeita-o por princípio'],
      ['Representação', 'Qualquer (EP) — vectores reais (ES)', 'EP foi concebido para FSMs e estruturas discretas'],
      ['Selecção', 'Torneio estocástico (EP) — determinística (ES)', 'EP usa q-tournament probabilístico; ES usa (μ,λ) ou (μ+λ)'],
      ['Auto-adaptação', 'σᵢ por indivíduo (EP) — σ global ou por coordenada (ES)', 'Ambos adaptam parâmetros, mas com mecanismos distintos'],
    ],
  },
  {
    name: 'EP vs GA', color: '#f97316',
    rows: [
      ['Representação', 'Vectores reais / estruturas (EP) — binário / permutação (GA)', 'GA foi concebido para cadeias de bits'],
      ['Crossover', 'Ausente (EP) — central (GA)', 'Inversão de papéis: EP valoriza mutação, GA valoriza crossover'],
      ['Selecção de pais', 'Todos são pais (EP) — selecção explícita (GA)', 'EP não selecciona pais: todos geram descendência'],
      ['Parâmetros', 'Auto-adaptativos (EP) — fixos ou manuais (GA)', 'EP elimina necessidade de afinar σ manualmente'],
    ],
  },
  {
    name: 'EP vs GP', color: '#f97316',
    rows: [
      ['Indivíduo', 'Vector numérico ou FSM (EP) — árvore sintáctica (GP)', 'Representações fundamentalmente distintas'],
      ['Crossover', 'Nenhum (EP) — subtree crossover (GP)', 'GP depende fortemente de crossover; EP não'],
      ['Objectivo típico', 'Optimização numérica / controlo (EP) — descoberta de expressões (GP)', 'Domínios de aplicação diferentes'],
      ['Bloat', 'Não aplicável (EP) — problema central (GP)', 'EP com vectores não tem o problema de crescimento de árvores'],
    ],
  },
];

const ComparisonExplorer = () => {
  const [sel, setSel] = useState(0);
  const c = comparisons[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Comparação com outros paradigmas evolutivos</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        {comparisons.map((c, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{ padding: '0.35rem 0.9rem', borderRadius: 8, border: `2px solid ${sel === i ? c.color : 'var(--card-border)'}`, background: sel === i ? `${c.color}15` : 'transparent', color: sel === i ? c.color : 'var(--text-secondary)', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}>
            {c.name}
          </button>
        ))}
      </div>
      <table style={S.table}>
        <thead>
          <tr>
            {['Dimensão', 'Diferença', 'Nota'].map(h => <th key={h} style={{ ...S.th, color: c.color, background: `${c.color}12`, borderBottomColor: `${c.color}30` }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {c.rows.map(([dim, diff, note], i) => (
            <tr key={i}>
              <td style={{ ...S.td, fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{dim}</td>
              <td style={S.td}>{diff}</td>
              <td style={{ ...S.td, fontSize: '0.82rem' }}>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ── Gaussian vs Cauchy ── */
const DistributionDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
      Gaussiana vs Cauchy — distribuições de mutação
    </p>
    <svg viewBox="0 0 580 160" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Axes */}
      <line x1="40" y1="130" x2="390" y2="130" stroke="var(--text-secondary)" strokeWidth="1"/>
      <line x1="215" y1="20" x2="215" y2="135" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="395" y="134" fill="var(--text-secondary)" fontSize="9">Δx</text>
      <text x="218" y="18" fill="var(--text-secondary)" fontSize="9">p(Δx)</text>

      {/* Gaussian bell */}
      <path d="M 50,128 Q 100,128 130,100 Q 160,72 175,45 Q 190,25 215,20 Q 240,25 255,45 Q 270,72 300,100 Q 330,128 380,128"
        fill="rgba(249,115,22,0.1)" stroke="#f97316" strokeWidth="2" fillRule="evenodd"/>
      <text x="310" y="95" fill="#f97316" fontSize="9.5" fontWeight="700">Gaussiana</text>
      <text x="310" y="108" fill="var(--text-secondary)" fontSize="8">saltos pequenos, previsíveis</text>

      {/* Cauchy — wider tails */}
      <path d="M 50,126 Q 90,124 120,115 Q 150,105 175,80 Q 195,58 215,42 Q 235,58 255,80 Q 280,105 310,115 Q 340,124 380,126"
        fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,3"/>
      <text x="310" y="68" fill="#f97316" fontSize="9.5" fontWeight="700">Cauchy (Fast EP)</text>
      <text x="310" y="81" fill="var(--text-secondary)" fontSize="8">caudas pesadas → saltos grandes</text>

      {/* Legend */}
      <text x="215" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">
        Cauchy tem maior probabilidade de saltos grandes → melhor escape de ótimos locais
      </text>
    </svg>
  </div>
);

export default function NEL9() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> NEL — Neural and Evolutionary Learning
        </Link>

        <div style={S.section}>
          <div style={S.tag}>MÓDULO 08</div>
          <h1 style={S.h1}>Programação Evolutiva</h1>
          <p style={S.sub}>O paradigma evolutivo sem crossover — mutação auto-adaptativa, torneio estocástico e a filosofia de Fogel</p>
        </div>

        {/* Motivação */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Motivação e Filosofia</h2>
          <p style={S.p}>A Programação Evolutiva (EP) foi criada por Lawrence Fogel em 1966 com um objectivo radicalmente diferente dos Algoritmos Genéticos: evoluir <strong>inteligência</strong>, não apenas optimizar funções. O ponto de partida era a ideia de que inteligência se manifesta na capacidade de predizer o ambiente e agir de acordo — daí a escolha de <strong>máquinas de estados finitas (FSMs)</strong> como representação, pois uma FSM é um modelo compacto de comportamento sequencial.</p>
          <p style={S.p}>A grande ruptura filosófica com o GA de Holland: <strong>crossover é desnecessário ou prejudicial</strong>. Fogel argumentava que combinar dois progenitores era biologicamente análogo à reprodução sexuada, mas que a evolução ao nível da espécie (e não do gene) é melhor modelada apenas por mutação. Esta posição mantém-se controversa, mas levou a um algoritmo com propriedades teóricas distintas.</p>
          <p style={S.p}>Na prática moderna, EP tornou-se um framework geral para optimização de vectores reais, com auto-adaptação dos parâmetros de mutação — uma ideia que influenciou directamente as Evolution Strategies e toda a neuroevolução baseada em perturbação de parâmetros.</p>
        </div>

        <TimelineDiagram />

        {/* Algoritmo */}
        <div style={S.section}>
          <h2 style={S.h2}>2. O Algoritmo</h2>
          <p style={S.p}>O ciclo de EP difere de GA e ES em dois aspectos fundamentais: <strong>não há selecção de pais</strong> (todos os μ indivíduos geram descendência) e <strong>a selecção de sobreviventes é por torneio estocástico</strong> sobre o conjunto combinado de pais e filhos (tamanho 2μ).</p>

          <AlgorithmExplorer />

          <p style={S.p}>O torneio estocástico com q oponentes é chave: ao contrário do torneio determinístico do GA, aqui o número de vitórias é probabilístico — indivíduos fracos podem sobreviver ocasionalmente, mantendo diversidade. Tipicamente usa-se q = 10 (cada indivíduo compete contra 10 oponentes aleatórios do pool de 2μ).</p>

          <div style={S.code}>{`# Pseudocódigo EP com auto-adaptação
P = [(x_i, σ_i) for i in range(μ)]     # inicialização
evaluate(P)

while not termination():
    Q = []
    for (x, σ) in P:
        σ' = σ * exp(τ' * N(0,1) + τ * N_i(0,1))  # mutar passos
        x' = x + σ' * N(0,1)                        # mutar solução
        Q.append((x', σ'))

    evaluate(Q)
    pool = P + Q                         # 2μ candidatos
    wins = [q_tournament(i, pool, q=10) for i in range(2μ)]
    P = select_top_μ(pool, wins)         # μ sobreviventes`}</div>
        </div>

        {/* Mutação */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Mutação Auto-Adaptativa</h2>
          <p style={S.p}>O mecanismo de auto-adaptação é o coração de EP moderno. Cada indivíduo carrega não só a solução xᵢ mas também um vector σᵢ de <strong>passos de mutação</strong> — um por dimensão. Ao longo das gerações, σ adapta-se automaticamente: em regiões de fitness plano, σ cresce para explorar mais; perto do óptimo, σ reduz para exploitar finamente.</p>

          <MutationDiagram />

          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Parâmetro</th>
                <th style={S.th}>Fórmula</th>
                <th style={S.th}>Significado</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['τ  (taxa global)', '1 / √(2n)', 'Escala de adaptação global dos passos σ'],
                ["τ' (taxa local)", '1 / √(2√n)', 'Escala de adaptação por coordenada'],
                ['σᵢ mínimo', 'ε₀ (ex: 10⁻⁵)', 'Evita convergência total — σ nunca chega a 0'],
                ['q (torneio)', '10 (típico)', 'Nº de oponentes no torneio estocástico'],
                ['μ (população)', '100–200', 'Tamanho da população — igual ao nº de filhos'],
              ].map(([p, f, d], i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace' }}>{p}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316' }}>{f}</td>
                  <td style={S.td}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fast EP */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Fast EP — Distribuição de Cauchy</h2>
          <p style={S.p}>Em 1994, Yao e Liu propuseram substituir a distribuição gaussiana pela <strong>distribuição de Cauchy</strong> na mutação. A Cauchy tem caudas muito mais pesadas: a probabilidade de um salto grande é muito superior à da gaussiana. Isto permite escapar de óptimos locais mais facilmente, especialmente em problemas multimodais com muitas bacias de atracção.</p>

          <DistributionDiagram />

          <p style={S.p}>A mutação Cauchy é: x'ᵢ = xᵢ + σᵢ · Cauchy(0,1). Empiricamente, Fast EP supera EP gaussiano em funções de teste clássicas (Ackley, Rastrigin, Schwefel) onde existem muitos ótimos locais. A desvantagem é que pode ser demasiado perturbador perto do óptimo global — tipicamente usa-se uma combinação adaptativa das duas distribuições.</p>
        </div>

        {/* Comparações */}
        <div style={S.section}>
          <h2 style={S.h2}>5. EP vs Outros Paradigmas</h2>
          <ComparisonExplorer />
        </div>

        {/* Aplicações */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Aplicações e Quando Usar EP</h2>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Domínio</th>
                <th style={S.th}>Aplicação concreta</th>
                <th style={S.th}>Porquê EP</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Optimização contínua', 'Funções benchmark, engenharia de estruturas', 'Auto-adaptação de σ sem afinar manualmente'],
                ['Controlo e robótica', 'Evolução de controladores de FSM', 'EP original foi desenhado para este domínio'],
                ['Previsão de séries temporais', 'Evoluir FSMs para reconhecimento de padrões', 'Representação natural como máquina de estados'],
                ['Treino de redes neuronais', 'Optimização de pesos sem gradiente', 'Resistente a gradientes ruidosos ou descontínuos'],
                ['Problemas com derivada inacessível', 'Simulações, caixas negras, funções não-diferenciáveis', 'Não requer derivadas — só avaliações de fitness'],
              ].map(([d, a, p], i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontWeight: 700, color: 'var(--text-primary)' }}>{d}</td>
                  <td style={S.td}>{a}</td>
                  <td style={S.td}>{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Síntese */}
        <div style={{ ...S.diagram, borderLeft: '4px solid #f97316' }}>
          <h3 style={{ ...S.h3, color: '#f97316' }}>Síntese — o que distingue EP</h3>
          <table style={S.table}>
            <tbody>
              {[
                ['Sem crossover', 'Mutação é o único operador de variação — princípio filosófico, não limitação técnica'],
                ['Auto-adaptação', 'σ evolui junto com x — o algoritmo aprende o seu próprio passo de mutação'],
                ['Torneio estocástico', 'Selecção probabilística sobre pool de 2μ — mantém diversidade, evita convergência prematura'],
                ['Generalidade', 'Funciona com qualquer representação onde se possa definir uma mutação razoável'],
                ['Ligação à neuroevolução', 'EP foi precursor directo de OpenAI ES e outros métodos de perturbação de pesos de redes'],
              ].map(([k, v], i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontWeight: 700, color: '#f97316', whiteSpace: 'nowrap', width: '30%' }}>{k}</td>
                  <td style={S.td}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Motivação e Filosofia</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>O Algoritmo</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Mutação Auto-Adaptativa</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Fast EP — Distribuição de Cauchy</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>EP vs Outros Paradigmas</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Aplicações e Quando Usar EP</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
