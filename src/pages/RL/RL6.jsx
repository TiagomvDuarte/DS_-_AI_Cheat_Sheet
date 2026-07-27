import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ── SVG: CNN Architecture ── */
const CNNDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitetura DQN (Atari) — 4 Frames Empilhados → Q-Values por Ação</p>
    <svg viewBox="0 0 720 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cnn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* Input */}
      <rect x="10" y="40" width="80" height="80" rx="8" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
      <text x="50" y="70" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Input</text>
      <text x="50" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">84×84×4</text>
      <text x="50" y="98" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">frames</text>
      {/* Arrow */}
      <line x1="90" y1="80" x2="115" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-cnn)" />
      {/* Conv 1 */}
      <rect x="115" y="30" width="85" height="100" rx="8" fill={`${color}14`} stroke={color} strokeWidth="1.5" />
      <text x="157" y="58" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Conv1</text>
      <text x="157" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">32 filtros</text>
      <text x="157" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">8×8, stride 4</text>
      <text x="157" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ReLU</text>
      <text x="157" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">20×20×32</text>
      {/* Arrow */}
      <line x1="200" y1="80" x2="225" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-cnn)" />
      {/* Conv 2 */}
      <rect x="225" y="30" width="85" height="100" rx="8" fill={`${color}14`} stroke={color} strokeWidth="1.5" />
      <text x="267" y="58" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Conv2</text>
      <text x="267" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">64 filtros</text>
      <text x="267" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">4×4, stride 2</text>
      <text x="267" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ReLU</text>
      <text x="267" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">9×9×64</text>
      {/* Arrow */}
      <line x1="310" y1="80" x2="335" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-cnn)" />
      {/* Conv 3 */}
      <rect x="335" y="30" width="85" height="100" rx="8" fill={`${color}14`} stroke={color} strokeWidth="1.5" />
      <text x="377" y="58" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Conv3</text>
      <text x="377" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">64 filtros</text>
      <text x="377" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">3×3, stride 1</text>
      <text x="377" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ReLU</text>
      <text x="377" y="110" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">7×7×64</text>
      {/* Arrow */}
      <line x1="420" y1="80" x2="445" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-cnn)" />
      {/* FC */}
      <rect x="445" y="40" width="80" height="80" rx="8" fill={`${color}14`} stroke={color} strokeWidth="1.5" />
      <text x="485" y="68" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">FC</text>
      <text x="485" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">512 neurónios</text>
      <text x="485" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ReLU</text>
      {/* Arrow */}
      <line x1="525" y1="80" x2="550" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-cnn)" />
      {/* Output */}
      <rect x="550" y="30" width="100" height="100" rx="8" fill={`${color}18`} stroke={color} strokeWidth="2" />
      <text x="600" y="58" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Output</text>
      <text x="600" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Q(s, a₁)</text>
      <text x="600" y="84" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Q(s, a₂)</text>
      <text x="600" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">...</text>
      <text x="600" y="108" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Q(s, aₙ)</text>
      <text x="600" y="120" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">N ações</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
      Uma passagem forward produz Q-values para todas as ações simultaneamente — muito mais eficiente do que N passagens separadas.
    </p>
  </div>
);

/* ── SVG: Replay Buffer Loop ── */
const ReplayBufferDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ciclo de Experience Replay</p>
    <svg viewBox="0 0 680 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-rb" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* Agent */}
      <rect x="10" y="55" width="110" height="50" rx="10" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
      <text x="65" y="77" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Agente</text>
      <text x="65" y="93" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">executa ação</text>
      {/* Arrow agent → buffer */}
      <line x1="120" y1="80" x2="175" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-rb)" />
      <text x="147" y="70" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">(s,a,r,s')</text>
      {/* Buffer */}
      <rect x="175" y="45" width="130" height="70" rx="10" fill={`${color}14`} stroke={color} strokeWidth="1.5" />
      <text x="240" y="72" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Replay Buffer D</text>
      <text x="240" y="88" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">|D| = 100 000</text>
      <text x="240" y="102" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">FIFO circular</text>
      {/* Arrow buffer → sample */}
      <line x1="305" y1="80" x2="360" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-rb)" />
      <text x="332" y="70" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">sample</text>
      <text x="332" y="94" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">aleatório</text>
      {/* Minibatch */}
      <rect x="360" y="50" width="120" height="60" rx="10" fill={`${color}14`} stroke={color} strokeWidth="1.5" />
      <text x="420" y="75" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Minibatch</text>
      <text x="420" y="91" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">B = 32 transições</text>
      {/* Arrow minibatch → gradient */}
      <line x1="480" y1="80" x2="535" y2="80" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-rb)" />
      <text x="507" y="70" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">SGD</text>
      {/* Gradient update */}
      <rect x="535" y="50" width="120" height="60" rx="10" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
      <text x="595" y="75" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Update θ</text>
      <text x="595" y="91" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">θ ← θ - α∇L</text>
      {/* Feedback arrow bottom */}
      <path d="M595,110 Q595,140 65,140 Q65,110 65,105" stroke={color} strokeWidth="1.5" fill="none" markerEnd="url(#arr-rb)" strokeDasharray="5,3" />
      <text x="330" y="152" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">repete a cada step</text>
    </svg>
  </div>
);

/* ── SVG: Target Network Stability ── */
const TargetNetDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Sem vs. Com Target Network — Estabilidade do Treino</p>
    <svg viewBox="0 0 660 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-tn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* Left: Without target network */}
      <text x="160" y="18" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Sem Target Network</text>
      <rect x="20" y="25" width="280" height="140" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Axes */}
      <line x1="40" y1="145" x2="280" y2="145" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="40" y1="145" x2="40" y2="35" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="160" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Steps</text>
      <text x="28" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" transform="rotate(-90,28,95)">Loss</text>
      {/* Oscillating loss curve */}
      <polyline
        points="40,120 55,60 70,130 85,50 100,125 115,55 130,110 145,45 160,115 175,52 190,120 205,58 220,100 235,50 250,110 265,65 280,115"
        fill="none" stroke="#4a9eed" strokeWidth="2"
      />
      <text x="160" y="175" textAnchor="middle" fill="#4a9eed" fontSize="9">Oscilação / Divergência</text>

      {/* Right: With target network */}
      <text x="490" y="18" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">Com Target Network</text>
      <rect x="350" y="25" width="280" height="140" rx="10" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Axes */}
      <line x1="370" y1="145" x2="610" y2="145" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="370" y1="145" x2="370" y2="35" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="490" y="160" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Steps</text>
      <text x="358" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" transform="rotate(-90,358,95)">Loss</text>
      {/* Stable decreasing curve */}
      <polyline
        points="370,125 390,118 415,110 445,100 475,88 510,75 545,64 575,56 605,50"
        fill="none" stroke="#4a9eed" strokeWidth="2"
      />
      {/* Target update markers */}
      <line x1="430" y1="35" x2="430" y2="145" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="510" y1="35" x2="510" y2="145" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="570" y1="35" x2="570" y2="145" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <text x="430" y="44" textAnchor="middle" fill={color} fontSize="7">θ⁻←θ</text>
      <text x="510" y="44" textAnchor="middle" fill={color} fontSize="7">θ⁻←θ</text>
      <text x="570" y="44" textAnchor="middle" fill={color} fontSize="7">θ⁻←θ</text>
      <text x="490" y="175" textAnchor="middle" fill="#4a9eed" fontSize="9">Convergência Estável</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
      As linhas verticais representam os momentos em que a target network é sincronizada com a rede online (a cada C steps).
    </p>
  </div>
);

/* ── SVG: Dueling Network Architecture ── */
const DuelingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Dueling DQN — Streams Separados V(s) e A(s,a)</p>
    <svg viewBox="0 0 620 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-duel" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      {/* Input */}
      <rect x="10" y="65" width="90" height="50" rx="8" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
      <text x="55" y="88" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">CNN Features</text>
      <text x="55" y="103" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">representação</text>
      {/* Split arrow up */}
      <line x1="100" y1="80" x2="145" y2="55" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-duel)" />
      {/* Split arrow down */}
      <line x1="100" y1="100" x2="145" y2="125" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-duel)" />
      {/* Value stream */}
      <rect x="145" y="35" width="120" height="45" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="205" y="55" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Value Stream</text>
      <text x="205" y="69" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">V(s; θ, β) ∈ ℝ</text>
      {/* Advantage stream */}
      <rect x="145" y="105" width="120" height="45" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="205" y="125" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Advantage Stream</text>
      <text x="205" y="139" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">A(s,a; θ, α) ∈ ℝ|A|</text>
      {/* Arrows to aggregation */}
      <line x1="265" y1="57" x2="340" y2="85" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-duel)" />
      <line x1="265" y1="127" x2="340" y2="100" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-duel)" />
      {/* Aggregation */}
      <rect x="340" y="65" width="120" height="50" rx="8" fill={`${color}14`} stroke={color} strokeWidth="1.5" />
      <text x="400" y="85" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Agregação</text>
      <text x="400" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Q=V+A-mean(A)</text>
      {/* Arrow to output */}
      <line x1="460" y1="90" x2="510" y2="90" stroke={color} strokeWidth="1.5" markerEnd="url(#arr-duel)" />
      {/* Output */}
      <rect x="510" y="55" width="95" height="70" rx="8" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
      <text x="557" y="79" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Q(s,a; θ)</text>
      <text x="557" y="94" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Q para cada</text>
      <text x="557" y="107" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">ação</text>
    </svg>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
      Separar V(s) e A(s,a) permite aprender o valor do estado independentemente das ações — especialmente útil quando muitas ações são equivalentes.
    </p>
  </div>
);

export default function RL6() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>Módulo 6</div>
      <h1 style={S.h1}>Value Function Approximation e Deep RL</h1>

      {/* ───────────────────────── SECTION 1 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. De Tabular a Aproximação de Funções</h2>
        <p style={S.p}>
          Os métodos tabulares — Q-tables, tabelas de valor de estado — armazenam explicitamente
          um valor para cada par (s, a). Funcionam perfeitamente para MDPs pequenos, mas falham
          catastroficamente em domínios realistas:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>
            <strong>Atari (pixels brutos):</strong> 210 x 160 x 3 canais de cor, cada pixel com 256
            níveis → aprox. <InlineMath math="10^{500}" /> estados distintos possíveis.
            Uma tabela Q com 18 ações ocuparia mais átomos do que existem no universo observável.
          </li>
          <li style={S.li}>
            <strong>Robótica continua:</strong> posição e velocidade de cada junta em <InlineMath math="\mathbb{R}^n" /> —
            espaço de estados infinito não discretizável de forma eficiente.
          </li>
          <li style={S.li}>
            <strong>Sem generalização:</strong> aprender <InlineMath math="Q(s,a)" /> não transmite informação
            sobre <InlineMath math="Q(s', a)" /> mesmo que <InlineMath math="s \approx s'" />.
          </li>
          <li style={S.li}>
            <strong>Estados não visitados:</strong> a maioria dos estados nunca é visitada durante o treino — a tabela fica vazia.
          </li>
        </ul>
        
          <strong>Solução — Aproximação de Funções:</strong> em vez de uma tabela, aprendemos uma função parametrizada:
          <div style={S.math}>
            <BlockMath math="Q(s, a;\, \theta) \approx Q^*(s, a)" />
          </div>
          onde <InlineMath math="\theta" /> são parâmetros aprendidos (pesos de uma rede neuronal).
          A função generaliza automaticamente entre estados similares.
        
        <h3 style={S.h3}>Aproximação Linear</h3>
        <p style={S.p}>
          A forma mais simples usa uma combinação linear de features extraidas do estado:
        </p>
        <div style={S.math}>
          <BlockMath math="Q(s, a;\, \theta) = \theta^\top \phi(s, a) = \sum_i \theta_i \phi_i(s, a)" />
        </div>
        <p style={S.p}>
          <InlineMath math="\phi(s,a)" /> e o vetor de features — uma representação manual do estado e da ação
          (e.g., posição, velocidade, distância ao objetivo). A aproximação linear tem garantias teóricas fortes:
          convergência garantida com as features corretas, estabilidade numérica, e solução única (mínimo global).
          A limitação é que as features <InlineMath math="\phi(s,a)" /> têm de ser definidas manualmente.
        </p>
        <h3 style={S.h3}>Redes Neuronais como Aproximadores Universais</h3>
        <p style={S.p}>
          O Universal Approximation Theorem garante que uma rede neuronal com pelo menos uma camada
          oculta suficientemente larga pode aproximar qualquer função continua com precisão arbitrária.
          Na prática, redes profundas (com múltiplas camadas) aprendem representações hierárquicas
          automaticamente — de pixels a bordas, a formas, a objetos, a conceitos de jogo.
        </p>
        <div style={S.note}>
          Generalização é a chave: se o agente aprende que "bola perto do bordo direito a alta velocidade"
          e um estado mau, deve também reconhecer que "bola ligeiramente mais longe do bordo, velocidade semelhante"
          e igualmente mau — sem precisar de visitar esse estado especifico.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 2 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Gradient Descent para Q</h2>
        <p style={S.p}>
          Para treinar <InlineMath math="Q(s,a;\theta)" /> queremos minimizar o erro quadrático entre
          a previsão atual é o target de Bellman. A função de perda e:
        </p>
        <div style={S.math}>
          <BlockMath math="L(\theta) = \mathbb{E}_{\,(s,a,r,s') \sim \mathcal{D}}\!\left[\left(r + \gamma \max_{a'} Q(s', a';\, \theta) - Q(s, a;\, \theta)\right)^2\right]" />
        </div>
        <p style={S.p}>
          A regra de update por gradient descent e:
        </p>
        <div style={S.math}>
          <BlockMath math="\theta \leftarrow \theta - \alpha \, \nabla_\theta L(\theta)" />
        </div>
        <p style={S.p}>
          onde o gradiente é calculado apenas em relação a <InlineMath math="\theta" /> na previsão
          (o target é tratado como constante durante cada update):
        </p>
        <div style={S.math}>
          <BlockMath math="\nabla_\theta L(\theta) = -2\,\underbrace{\left(r + \gamma \max_{a'} Q(s',a';\theta) - Q(s,a;\theta)\right)}_{\delta \text{ (TD error)}} \nabla_\theta Q(s,a;\theta)" />
        </div>
        <h3 style={S.h3}>A "Deadly Triad" — Tríade Mortal</h3>
        <p style={S.p}>
          Tsitsiklis e Van Roy (1997) identificaram que a combinação de três elementos pode causar
          instabilidade grave ou divergência:
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Elemento</th>
                <th style={S.th}>Descrição</th>
                <th style={S.th}>Problema que cria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Aproximação de Funções</strong></td>
                <td style={S.td}>Rede neuronal para Q(s,a;θ)</td>
                <td style={S.td}>Erros de generalização, gradientes instáveis</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Bootstrapping</strong></td>
                <td style={S.td}>Target usa Q atual: <InlineMath math="y = r + \gamma \max Q" /></td>
                <td style={S.td}>O target muda a cada update → ciclo vicioso</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Off-Policy Learning</strong></td>
                <td style={S.td}>Dados gerados por política diferente da alvo</td>
                <td style={S.td}>Distribuição dos dados muda durante o treino</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          DQN usa todos os três elementos — e só consegue convergir graças as inovações de Experience Replay
          e Target Network que estabilizam o processo de treino.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 3 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. DQN — Deep Q-Network (DeepMind, 2015)</h2>
        <p style={S.p}>
          O artigo "Human-level control through deep reinforcement learning" (Mnih et al., 2015) foi
          um marco histórico: um único algoritmo, com a mesma arquitetura e os mesmos hiperparâmetros,
          aprendeu a jogar 49 jogos Atari ao nível humano ou superior, a partir de pixels brutos.
          As contribuições chave foram duas inovações que tornaram o treino com redes profundas estável.
        </p>
        <h3 style={S.h3}>Arquitetura CNN para Atari</h3>
        <p style={S.p}>
          A rede recebe como input <strong>4 frames consecutivos</strong> em escala de cinzentos (84x84 pixels
          cada), produzindo um tensor de entrada 84x84x4. A escolha de 4 frames permite ao agente inferir
          velocidade e direção dos objetos — informação ausente num único frame.
        </p>
        <CNNDiagram />
        <div style={S.highlight}>
          <strong>Vantagem de output multi-ação:</strong> ao produzir Q(s,aᵢ) para todas as ações i numa
          única passagem forward, o DQN é muito mais eficiente do que calcular Q para cada ação separadamente.
          Para Atari com 18 ações possíveis, isto representa um speedup de 18x por step.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 4 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Experience Replay</h2>
        <p style={S.p}>
          A primeira inovação chave do DQN é o <strong>Experience Replay</strong>: em vez de atualizar
          a rede imediatamente após cada transição, armazenamos as transições num buffer e amostramos
          minibatches aleatorios para treino.
        </p>
        <h3 style={S.h3}>Mecanismo</h3>
        <ul style={S.ul}>
          <li style={S.li}>Manter um replay buffer <InlineMath math="\mathcal{D}" /> de capacidade fixa (tipicamente 100 000 transições)</li>
          <li style={S.li}>Cada transição <InlineMath math="(s, a, r, s', \text{done})" /> é armazenada em <InlineMath math="\mathcal{D}" /></li>
          <li style={S.li}>Quando <InlineMath math="|\mathcal{D}|" /> excede a capacidade, as transições mais antigas são removidas (FIFO)</li>
          <li style={S.li}>A cada step, amostrar um minibatch aleatório de tamanho <InlineMath math="B" /> (tipicamente 32)</li>
        </ul>
        <ReplayBufferDiagram />
        <h3 style={S.h3}>Função de Perda sobre o Minibatch</h3>
        <div style={S.math}>
          <BlockMath math="L(\theta) = \frac{1}{B} \sum_{i=1}^{B} \left( y_i - Q(s_i, a_i;\, \theta) \right)^2" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="y_i = r_i + \gamma \max_{a'} Q(s'_i, a';\, \theta^-) \cdot (1 - \text{done}_i)" />.
        </p>
        <h3 style={S.h3}>Benefícios do Experience Replay</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong>Quebra de correlação temporal:</strong> amostras consecutivas do ambiente são altamente correlacionadas (frames vizinhos são quase idênticos). A amostragem aleatória garante independência aproximada entre amostras do minibatch.</li>
          <li style={S.li}><strong>Eficiência amostral:</strong> cada transição pode ser usada múltiplas vezes para treino antes de ser descartada.</li>
          <li style={S.li}><strong>Distribuição estável:</strong> o buffer suaviza mudanças rápidas na distribuição de dados.</li>
        </ul>
        <div style={S.note}>
          Experience Replay foi originalmente proposto por Lin (1992) mas só se tornou prático com a
          capacidade computacional e de memória disponivel na era moderna.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 5 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Target Network</h2>
        <p style={S.p}>
          A segunda inovação chave é a <strong>Target Network</strong>: uma copia separada da rede Q,
          com parâmetros <InlineMath math="\theta^-" />, usada exclusivamente para calcular os targets TD.
          Os seus pesos são mantidos fixos durante vários steps e sincronizados periodicamente:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{A cada } C \text{ steps:} \quad \theta^- \leftarrow \theta" />
        </div>
        <h3 style={S.h3}>Target com a Rede Frozen</h3>
        <div style={S.math}>
          <BlockMath math="y_i = r_i + \gamma \max_{a'} Q(s'_i, a';\, \theta^-)" />
        </div>
        <p style={S.p}>
          Sem a target network, o problema é que ao atualizar <InlineMath math="\theta" />, o próprio
          target <InlineMath math="y" /> muda simultaneamente — como tentar acertar num alvo em movimento.
          A target network "fixa" o alvo durante <InlineMath math="C" /> steps, tornando o problema
          localmente supervisionado e muito mais estável.
        </p>
        <TargetNetDiagram />
        <h3 style={S.h3}>Escolha de C</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong>C muito pequeno:</strong> target network quase idêntica a rede online — instabilidade persiste</li>
          <li style={S.li}><strong>C muito grande:</strong> targets desatualizados — aprendizagem muito lenta</li>
          <li style={S.li}><strong>Tipicamente C = 1 000 a 10 000 steps</strong> — equilíbrio empiricamente validado</li>
        </ul>
        <div style={S.note}>
          Alternativa moderna: <strong>soft updates</strong> — em vez de copiar completamente,
          misturar gradualmente: <InlineMath math="\theta^- \leftarrow \tau\theta + (1-\tau)\theta^-" />
          com <InlineMath math="\tau = 0.005" />. Mais suave e frequentemente mais estável.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 6 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. DQN Training Loop Completo</h2>
        <p style={S.p}>
          O loop de treino integra todas as componentes — inicialização, coleta de experiências,
          replay buffer, gradient updates e sincronização da target network:
        </p>
        <div style={S.code}>{`# DQN Training Loop (pseudocódigo)
# ─────────────────────────────────────────────────────────

# 1. Inicialização
Inicializar rede online Q(s, a; θ) com pesos aleatórios θ
Inicializar target network Q(s, a; θ⁻) com θ⁻ = θ
Inicializar replay buffer D com capacidade N = 100 000
ε = 1.0  (exploração máxima no início)

# 2. Loop de episódios
para cada episódio:
    s = stack de 4 frames iniciais (preprocessados: cinzento, 84×84)

    # 3. Loop de steps
    para t = 1, 2, ..., T:

        # Seleção de ação (ε-greedy)
        se random() < ε:
            a = ação aleatória           # exploração
        senão:
            a = argmax_a Q(s, a; θ)     # exploitação

        # Executar ação no ambiente
        r, s_next, done = env.step(a)
        s_next = stack novos 4 frames

        # Armazenar transição no replay buffer
        D.add((s, a, r, s_next, done))
        s = s_next

        # Amostrar minibatch e atualizar rede online
        se |D| >= batch_size:
            batch = D.sample(B=32)
            para cada (sᵢ, aᵢ, rᵢ, s'ᵢ, doneᵢ) em batch:
                se doneᵢ:
                    yᵢ = rᵢ
                senão:
                    yᵢ = rᵢ + γ · max_{a'} Q(s'ᵢ, a'; θ⁻)

            # Gradient step
            L(θ) = (1/B) Σᵢ (yᵢ - Q(sᵢ, aᵢ; θ))²
            θ ← θ - α ∇_θ L(θ)

        # Sincronizar target network a cada C steps
        se t % C == 0:
            θ⁻ ← θ

        # Decay de epsilon
        ε = max(ε_min, ε · ε_decay)

        se done: break`}</div>
        <div style={S.highlight}>
          <strong>Detalhes de implementação importantes:</strong>
          <ul style={{ ...S.ul, marginTop: '0.5rem' }}>
            <li style={S.li}>Recompensas são <strong>clipped</strong> para [-1, +1] para estabilidade entre jogos</li>
            <li style={S.li}>Frames são preprocessados: conversao para cinzento + resize para 84x84 + normalização [0,1]</li>
            <li style={S.li}>Epsilon decai de 1.0 para 0.1 ao longo de 1 milhão de frames</li>
            <li style={S.li}>Treino inicia apenas após 50 000 transições no buffer (warm-up)</li>
            <li style={S.li}>Gradient clipping: norma do gradiente limitada a 10 para evitar explosao</li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 7 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. DQN — Resultados e Impacto</h2>
        <p style={S.p}>
          DQN foi avaliado em 49 jogos Atari 2600 usando exatamente a mesma arquitetura,
          os mesmos hiperparâmetros e o mesmo algoritmo de treino — sem qualquer conhecimento
          especifico de cada jogo. O resultado foi notável:
        </p>
        <div style={S.highlight}>
          <strong>DQN superou performance humana em 29 dos 49 jogos</strong>, e superou todos
          os métodos anteriores de RL em 43 dos 49 jogos. Uma conquista especialmente notável
          dado que o input é apenas pixels brutos — sem acesso ao estado interno do jogo.
        </div>
        <h3 style={S.h3}>Pontuações Selecionadas (DQN vs Humano)</h3>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Jogo</th>
                <th style={S.th}>DQN</th>
                <th style={S.th}>Humano</th>
                <th style={S.th}>% de Performance Humana</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>Pong</td>
                <td style={S.td}>18.9</td>
                <td style={S.td}>9.3</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>203%</td>
              </tr>
              <tr>
                <td style={S.td}>Breakout</td>
                <td style={S.td}>401.2</td>
                <td style={S.td}>31.8</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>1262%</td>
              </tr>
              <tr>
                <td style={S.td}>Space Invaders</td>
                <td style={S.td}>1976</td>
                <td style={S.td}>1652</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>120%</td>
              </tr>
              <tr>
                <td style={S.td}>Q*bert</td>
                <td style={S.td}>10596</td>
                <td style={S.td}>13455</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>79%</td>
              </tr>
              <tr>
                <td style={S.td}>Montezuma's Revenge</td>
                <td style={S.td}>0</td>
                <td style={S.td}>4753</td>
                <td style={{ ...S.td, color: '#4a9eed', fontWeight: 700 }}>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Os insucessos do DQN (como Montezuma's Revenge) revelaram limitações importantes:
          jogos que exigem exploração a longo prazo, planeamento profundo, ou memória de longa
          duração continuaram a ser dificeis. Estes desafios motivaram investigação futura em
          exploração intrínseca, memória e planeamento hierárquico.
        </p>
        <div style={S.note}>
          O impacto histórico do DQN vai além dos resultados: demonstrou que e possível aprender
          políticas complexas de ponta-a-ponta a partir de inputs brutos, abrindo a era do Deep RL
          e inspirando centenas de trabalhos subsequentes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 8 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Extensoes do DQN</h2>
        <p style={S.p}>
          Após o DQN original, vários trabalhos identificaram e resolveram limitações especificas.
          Cada extensão é um contributo independente que pode ser combinado com as outras.
        </p>

        <h3 style={S.h3}>Double DQN (Van Hasselt et al., 2016)</h3>
        <p style={S.p}>
          O DQN original sofre de <strong>overestimation</strong> dos valores Q: ao usar
          <InlineMath math="\max_{a'} Q(s',a';\theta^-)" />, a rede tende a selecionar ações
          com valores Q sobrestimados. Double DQN desacopla a seleção de ação da avaliação:
        </p>
        <div style={S.math}>
          <BlockMath math="y_i^{\text{DDQN}} = r + \gamma \, Q\!\left(s',\, \underbrace{\arg\max_{a'} Q(s',a';\theta)}_{\text{rede online seleciona}}\,;\, \underbrace{\theta^-}_{\text{target avalia}}\right)" />
        </div>
        <p style={S.p}>
          A rede online seleciona qual a melhor ação, mas a avaliação do seu valor e feita pela
          target network — reduzindo o viés positivo sistemático.
        </p>

        <h3 style={S.h3}>Dueling Networks (Wang et al., 2016)</h3>
        <p style={S.p}>
          Em muitos estados, o valor das ações individuais é muito semelhante — o que importa e o
          valor do estado em si. Dueling DQN decompõe Q em dois streams separados:
        </p>
        <div style={S.math}>
          <BlockMath math="Q(s, a;\, \theta, \alpha, \beta) = \underbrace{V(s;\, \theta, \beta)}_{\text{valor do estado}} + \underbrace{A(s, a;\, \theta, \alpha)}_{\text{vantagem da ação}} - \underbrace{\frac{1}{|\mathcal{A}|} \sum_{a'} A(s, a';\, \theta, \alpha)}_{\text{normalização}}" />
        </div>
        <DuelingDiagram />

        <h3 style={S.h3}>Prioritized Experience Replay — PER (Schaul et al., 2016)</h3>
        <p style={S.p}>
          O replay buffer padrão amostras uniformemente — mas nem todas as transições são
          igualmente informativas. PER amostras com probabilidade proporcional ao TD error:
        </p>
        <div style={S.math}>
          <BlockMath math="P(i) = \frac{|\delta_i|^\alpha + \epsilon}{\sum_k (|\delta_k|^\alpha + \epsilon)}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="|\delta_i|" /> é o TD error absoluto da transição <InlineMath math="i" />,
          <InlineMath math="\alpha" /> controla o grau de priorização (0 = uniforme, 1 = totalmente priorizado),
          e <InlineMath math="\epsilon" /> garante que todas as transições têm probabilidade positiva.
          Para corrigir o viés introduzido pela amostragem não uniforme, usa-se importance sampling weights
          <InlineMath math="w_i = (N \cdot P(i))^{-\beta}" />.
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Extensao</th>
                <th style={S.th}>Problema resolvido</th>
                <th style={S.th}>Mecanismo chave</th>
                <th style={S.th}>Melhoria típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Double DQN</strong></td>
                <td style={S.td}>Overestimation dos Q-values</td>
                <td style={S.td}>Desacoplar seleção e avaliação</td>
                <td style={S.td}>+15% em média</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Dueling DQN</strong></td>
                <td style={S.td}>Aprendizagem ineficiente de V(s)</td>
                <td style={S.td}>Streams separados V e A</td>
                <td style={S.td}>+20% em jogos com ações equivalentes</td>
              </tr>
              <tr>
                <td style={S.td}><strong>PER</strong></td>
                <td style={S.td}>Amostragem uniforme desperdiçada</td>
                <td style={S.td}>Prioridade proporcional a |δ|</td>
                <td style={S.td}>+50% eficiência amostral</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Noisy Networks</strong></td>
                <td style={S.td}>Exploração ε-greedy ineficiente</td>
                <td style={S.td}>Ruído nos pesos para exploração</td>
                <td style={S.td}>Melhor em jogos esparsos</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Rainbow</strong></td>
                <td style={S.td}>Todas as limitações acima</td>
                <td style={S.td}>Combina todas as extensoes</td>
                <td style={S.td}>SOTA com 7x menos dados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ───────────────────────── SECTION 9 ───────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Comparação — Tabular Q vs DQN</h2>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Criterio</th>
                <th style={S.th}>Tabular Q-Learning</th>
                <th style={S.th}>DQN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Espaço de estados</strong></td>
                <td style={S.td}>Pequeno e discreto (|S| &lt; milhões)</td>
                <td style={S.td}>Enorme ou continuo (pixels, sensores)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Garantias de convergência</strong></td>
                <td style={S.td}>Convergência teórica garantida</td>
                <td style={S.td}>Sem garantias formais; estável na prática</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Eficiência amostral</strong></td>
                <td style={S.td}>Alta para espaços pequenos</td>
                <td style={S.td}>Requer milhões de interações</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Generalização</strong></td>
                <td style={S.td}>Nenhuma — cada estado independente</td>
                <td style={S.td}>Automatica — estados similares → Q similares</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Custo computacional</strong></td>
                <td style={S.td}>Baixo — operações de tabela O(1)</td>
                <td style={S.td}>Alto — forward/backward pass de CNN</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Feature engineering</strong></td>
                <td style={S.td}>Requer estado ja processado</td>
                <td style={S.td}>Aprende features automaticamente</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Aplicável a Atari</strong></td>
                <td style={S.td}>Não — inviável (10^500 estados)</td>
                <td style={S.td}>Sim — demonstrado em 49 jogos</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Aplicável a espaço continuo</strong></td>
                <td style={S.td}>Não sem discretização grosseira</td>
                <td style={S.td}>Sim (com discretização de ações)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          A escolha entre métodos tabulares e DQN depende do problema: para MDPs pequenos com
          espaço de estados discreto, métodos tabulares são mais simples, mais eficientes e
          tem garantias teóricas. DQN é necessário quando o espaço de estados e demasiado grande
          ou quando o input é bruto (pixels, sons, texto).
        </div>
      </div>

    </div>
  );
}
