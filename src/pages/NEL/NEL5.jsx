import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
};

const PerceptronDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Neurónio Artificial — O Perceptrão</p>
    <svg viewBox="0 0 440 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-p" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker>
      </defs>
      {[
        { y: 25, label: 'x₁', w: 'w₁' },
        { y: 55, label: 'x₂', w: 'w₂' },
        { y: 85, label: 'x₃', w: 'w₃' },
        { y: 115, label: '1', w: 'θ (bias)' },
      ].map(({ y, label, w }) => (
        <g key={y}>
          <circle cx={30} cy={y} r={14} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
          <text x={30} y={y + 4} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">{label}</text>
          <line x1={44} y1={y} x2={168} y2={70} stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arr-p)"/>
          <text x={90} y={(y + 70) / 2 - 5} fill="var(--text-secondary)" fontSize="8" textAnchor="middle">{w}</text>
        </g>
      ))}
      <circle cx={190} cy={70} r={24} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x={190} y={65} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Σ wᵢxᵢ</text>
      <text x={190} y={78} textAnchor="middle" fill="#f97316" fontSize="8">+ θ</text>
      <line x1={214} y1={70} x2={258} y2={70} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-p)"/>
      <rect x={262} y={52} width={60} height={36} rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x={292} y={68} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">f(s)</text>
      <text x={292} y={80} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">activação</text>
      <line x1={322} y1={70} x2={368} y2={70} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-p)"/>
      <circle cx={390} cy={70} r={18} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x={390} y={67} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">y</text>
      <text x={390} y={80} textAnchor="middle" fill="#f97316" fontSize="8">saída</text>
    </svg>
    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'flex-start', marginTop: '0.75rem', flexWrap: 'wrap' }}>
      <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', alignSelf: 'center' }}>y = f(Σ wᵢxᵢ + θ)</p>
      <div style={{ background: 'var(--bg-primary)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '0.6rem 1rem', fontSize: '0.82rem', textAlign: 'left' }}>
        <p style={{ fontWeight: 700, color: '#f97316', margin: '0 0 0.35rem' }}>FUNÇÕES f(s)</p>
        <p style={{ margin: '0.15rem 0', color: 'var(--text-primary)' }}>Threshold: f(s) = 1 se s &gt; 0</p>
        <p style={{ margin: '0.15rem 0', color: 'var(--text-primary)' }}>Sigmoid: 1/(1+e⁻ˢ)</p>
        <p style={{ margin: '0.15rem 0', color: 'var(--text-primary)' }}>Tanh: (eˢ−e⁻ˢ)/(eˢ+e⁻ˢ)</p>
      </div>
    </div>
  </div>
);

const NeuroEvoDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Neuroevolução — O que se evolui</p>
    <svg viewBox="0 0 620 175" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Evolve weights only */}
      <text x="110" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">EVOLUIR APENAS OS PESOS</text>
      <text x="110" y="27" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">topologia fixada antes da evolução</text>
      {/* connections first */}
      {[70,100,130].flatMap(iy => [60,90,120].map(hy => (
        <line key={`${iy}-${hy}`} x1={42} y1={iy} x2={92} y2={hy} stroke="#f97316" strokeWidth="0.8" opacity="0.4"/>
      )))}
      {[60,90,120].map(hy => (
        <line key={hy} x1={108} y1={hy} x2={158} y2={90} stroke="#f97316" strokeWidth="0.8" opacity="0.4"/>
      ))}
      {/* nodes on top */}
      {[[30,70],[30,100],[30,130],[100,60],[100,90],[100,120],[170,90]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={12} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      ))}
      <text x="100" y="158" textAnchor="middle" fill="#f97316" fontSize="9">cromossoma = vector de pesos [w₁, w₂, ..., wₙ]</text>

      {/* Separator */}
      <line x1="220" y1="10" x2="220" y2="165" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Evolve topology */}
      <text x="420" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">EVOLUIR TOPOLOGIA + PESOS</text>
      <text x="420" y="27" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">estrutura evolui ao longo das gerações</text>
      {/* gen 0 */}
      <line x1={258} y1={75} x2={308} y2={89} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      <line x1={258} y1={101} x2={308} y2={93} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      {[[248,72],[248,102],[318,92]].map(([nx,ny],j) => (
        <circle key={j} cx={nx} cy={ny} r={10} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
      ))}
      <text x={280} y={158} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">gen 0: simples</text>
      {/* gen 10 */}
      <line x1={368} y1={67} x2={418} y2={78} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      <line x1={368} y1={90} x2={418} y2={82} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      <line x1={368} y1={94} x2={418} y2={108} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      <line x1={368} y1={119} x2={418} y2={111} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      {[[358,65],[358,92],[358,120],[428,80],[428,110]].map(([nx,ny],j) => (
        <circle key={j} cx={nx} cy={ny} r={10} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
      ))}
      <text x={393} y={158} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">gen 10: cresce</text>
      {/* gen 50 */}
      <line x1={478} y1={61} x2={528} y2={67} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      <line x1={478} y1={89} x2={528} y2={95} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      <line x1={478} y1={117} x2={528} y2={123} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      <line x1={477} y1={65} x2={529} y2={91} stroke="#f97316" strokeWidth="1" opacity="0.5"/>
      {[[468,60],[468,88],[468,116],[538,68],[538,96],[538,124]].map(([nx,ny],j) => (
        <circle key={j} cx={nx} cy={ny} r={10} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
      ))}
      <text x={505} y={158} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">gen 50: complexo</text>
    </svg>
  </div>
);

export default function NEL5() {
  const [sel, setSel] = useState(0);
  const approaches = [
    {
      name: 'GA para Pesos', color: '#f97316',
      what: 'Topologia da rede é definida pelo utilizador e mantida fixa. Os pesos de todas as conexões são codificados num cromossoma de comprimento fixo (um número real por peso). A evolução optimiza o vector de pesos.',
      fitness: 'A rede com os pesos do cromossoma é executada nos dados de treino (ou numa tarefa como um jogo). O fitness é o desempenho: erro de classificação, pontuação no jogo, etc.',
      pros: 'Simples — qualquer GA padrão é aplicável directamente. Não requer cálculo de gradientes — funciona em ambientes não-diferenciáveis.',
      cons: 'Espaço de pesquisa cresce com o número de pesos. Para redes grandes (milhões de pesos), o cromossoma é enorme e a convergência é lenta.',
    },
    {
      name: 'PSO / GIL para Pesos', color: '#f97316',
      what: 'Alternativa ao GA para optimizar pesos. O PSO trata cada vector de pesos como uma partícula. O GIL (Greedy Iterative Layered) é uma melhoria: evolui camada a camada em vez de todos os pesos em simultâneo.',
      fitness: 'Idêntico ao GA: desempenho da rede com os pesos da partícula. pbest = melhor configuração de pesos desta partícula. gbest = melhor configuração global.',
      pros: 'GIL é muito mais rápido que PSO clássico e que backpropagation em alguns problemas. A abordagem camada-a-camada reduz a dimensionalidade do problema em cada passo.',
      cons: 'PSO clássico sofre com espaços de alta dimensão (muitos pesos). GIL pressupõe que optimizar camadas independentemente é uma boa aproximação — nem sempre é válido.',
    },
    {
      name: 'Codificação Binária de Topologia', color: '#f97316',
      what: 'A topologia da rede é codificada como uma matriz de adjacência binária: 1 se a ligação existe, 0 se não existe. Os pesos podem ser determinados separadamente (por backprop). Um GA evolui a topologia.',
      fitness: 'Treinar a rede com a topologia do cromossoma (usando backprop para os pesos) e medir o desempenho.',
      pros: 'Conceptualmente simples — qualquer GA padrão é usado directamente na string binária.',
      cons: 'O tamanho da matriz é o quadrado do número de nós — escala muito mal. O número máximo de nós tem de ser fixado. O crossover de strings raramente produz topologias coerentes.',
    },
  ];
  const a = approaches[sel];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 5</div>
        <h1 style={S.h1}>Neuroevolução — Evoluir Pesos e Topologia</h1>
        <p style={S.lead}>A neuroevolução combina redes neuronais com algoritmos evolutivos: em vez de treinar os pesos por backpropagation, usa-se evolução. Isto abre uma possibilidade que o gradiente não permite — evoluir não só os pesos mas também a topologia da rede. Este módulo cobre o contexto essencial de redes neuronais e as abordagens de neuroevolução que precedem o NEAT.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Neurónio Artificial — Contexto para Neuroevolução</h2>
          <p style={S.p}>Para entender o que a neuroevolução evolui, é necessário compreender a unidade básica: o neurónio artificial (Perceptrão). Cada neurónio recebe n entradas, multiplica cada uma pelo seu peso correspondente, soma tudo (incluindo um bias θ), e aplica uma função de activação ao resultado. A saída é então passada para os neurónios da camada seguinte.</p>
          <p style={S.p}>Os pesos wᵢ são os parâmetros aprendíveis — é exactamente estes pesos que a backpropagation ajusta por gradiente descendente, e que a neuroevolução optimiza por evolução. A topologia (quais neurónios estão ligados a quais) determina a arquitectura da rede — é o parâmetro estrutural que abordagens mais sofisticadas como o NEAT também evoluem.</p>

          <PerceptronDiagram />

          <div style={S.note}>As funções de activação contínuas (sigmoid, tanh) são necessárias para backpropagation (requerem derivadas). Para neuroevolução, qualquer função de activação funciona — incluindo a threshold binária, que não é diferenciável.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. O que a Neuroevolução Evolui</h2>
          <p style={S.p}>A neuroevolução (NE) é a evolução artificial de redes neuronais usando algoritmos evolutivos. Existem dois níveis de evolução com complexidade muito diferente:</p>

          <NeuroEvoDiagram />

          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>O que se evolui</th><th style={S.th}>Representação</th><th style={S.th}>Complexidade</th><th style={S.th}>Algoritmos</th></tr></thead>
              <tbody>
                {[
                  ['Apenas os pesos', 'Vector de reais de comprimento fixo', 'Baixa — dimensão = número de pesos', 'GA, PSO, GIL-PSO, Evolution Strategies'],
                  ['Pesos + topologia', 'Grafo (nós e arestas variáveis)', 'Alta — espaço de grafos é enorme', 'NEAT, HyperNEAT, CoDeepNEAT'],
                ].map(([w, r, c, a]) => (
                  <tr key={w}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{w}</td><td style={S.td}>{r}</td><td style={S.td}>{c}</td><td style={{ ...S.td, color: '#f97316' }}>{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Abordagens de Neuroevolução de Pesos</h2>
          <div style={S.diagram}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {approaches.map((ap, i) => (
                <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? ap.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? ap.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{ap.name}</button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${a.color}30` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div><strong style={{ color: a.color }}>Como funciona:</strong><p style={{ marginTop: '0.35rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>{a.what}</p></div>
                <div><strong style={{ color: '#f97316' }}>Fitness:</strong><p style={{ marginTop: '0.35rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>{a.fitness}</p></div>
                <div><strong style={{ color: '#f97316' }}>Vantagem:</strong><p style={{ marginTop: '0.35rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>{a.pros}</p></div>
                <div><strong style={{ color: '#f97316' }}>Limitação:</strong><p style={{ marginTop: '0.35rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>{a.cons}</p></div>
              </div>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Limitações da Neuroevolução de Pesos</h2>
          <p style={S.p}>Evoluir apenas os pesos com topologia fixa tem uma limitação fundamental: a topologia é um hiperparâmetro que o humano tem de escolher antes da evolução. Se o humano escolher uma rede demasiado pequena (poucos neurónios, poucas camadas), a expressividade é insuficiente para o problema. Se escolher demasiado grande, o espaço de pesos é enorme e a evolução é lenta.</p>
          <p style={S.p}>A codificação binária de topologia tenta resolver isto mas escala muito mal: uma rede com 100 neurónios tem uma matriz de adjacência 100×100 = 10.000 bits. E o crossover de strings raramente produz topologias coerentes — cortar no meio da representação de um grafo mistura arestas sem respeitar a estrutura de grafos.</p>
          <p style={S.p}>A solução correcta é uma representação que preserve a estrutura de grafos durante o crossover — que permita recombinar sub-redes de forma significativa. Esta é exactamente a motivação para o NEAT (módulo seguinte).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Problema</th><th style={S.th}>Abordagem de pesos fixos</th><th style={S.th}>Motivação para o NEAT</th></tr></thead>
              <tbody>
                {[
                  ['Escolha de topologia', 'Definida pelo humano antes da evolução', 'NEAT começa simples e cresce automaticamente'],
                  ['Crossover de grafos', 'Strings binárias cortadas aleatoriam. — incoerente', 'NEAT usa innovation numbers para crossover estrutural'],
                  ['Comparação de topologias', 'Impossível comparar redes de tamanhos diferentes', 'NEAT usa especiação para proteger inovações estruturais'],
                  ['Escalabilidade', 'Matriz O(n²) — impraticável para redes grandes', 'NEAT começa com topologias mínimas e cresce'],
                ].map(([prob, old, neat]) => (
                  <tr key={prob}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{prob}</td><td style={{ ...S.td, color: '#f97316' }}>{old}</td><td style={{ ...S.td, color: '#f97316' }}>{neat}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={S.ul}>
            <li>Neurónio: y = f(Σ wᵢxᵢ + θ). Os pesos wᵢ são o que se aprende. A topologia define a arquitectura.</li>
            <li>Neuroevolução: usar AEs em vez de backpropagation para ajustar pesos. Funciona em ambientes não-diferenciáveis.</li>
            <li>GA/PSO de pesos: topologia fixa, cromossoma = vector de reais. GIL evolui camada a camada — mais eficiente.</li>
            <li>Codificação binária de topologia: simples mas escala O(n²) e crossover de strings é incoerente para grafos.</li>
            <li>A motivação para o NEAT: precisamos de uma representação que permita evoluir topologia de forma estruturada e com crossover significativo.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
