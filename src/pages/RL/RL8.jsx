import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2.5rem',
  },
  tag: {
    display: 'inline-block',
    background: 'transparent',
    color: color,
    border: `1.5px solid ${color}`,
    fontSize: '0.75rem',
    fontWeight: 700,
    padding: '0.25rem 0.75rem',
    borderRadius: 20,
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '2.1rem',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  lead: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: 1.7,
  },
  section: { marginBottom: '3.5rem' },
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color,
    borderLeft: `3px solid ${color}`,
    paddingLeft: '0.85rem',
    marginBottom: '1.2rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.8rem',
    marginTop: '1.6rem',
  },
  p: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 12,
    padding: '1.5rem',
    margin: '1.5rem 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  th: {
    background: 'var(--bg-secondary)',
    padding: '0.6rem 0.8rem',
    textAlign: 'left',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    borderBottom: '2px solid var(--card-border)',
  },
  td: {
    padding: '0.55rem 0.8rem',
    borderBottom: '1px solid var(--card-border)',
    color: 'var(--text-primary)',
  },
  highlight: {
    background: 'rgba(74,158,237,0.10)',
    border: '1px solid #4a9eed',
    borderRadius: 8,
    padding: '1rem 1.25rem',
    marginBottom: '1.2rem',
  },
  note: {
    background: 'rgba(74,158,237,0.10)',
    borderLeft: `3px solid ${color}`,
    borderRadius: '0 8px 8px 0',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: '1rem 0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2.5rem 0',
  },
  math: {
    background: 'var(--bg-secondary)',
    borderRadius: 10,
    padding: '1.25rem',
    textAlign: 'center',
    margin: '1.5rem 0',
    overflowX: 'auto',
  },
  code: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 8,
    padding: '1rem',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    overflowX: 'auto',
    margin: '1rem 0',
    whiteSpace: 'pre',
  },
  ul: {
    paddingLeft: '1.4rem',
    color: 'var(--text-primary)',
    lineHeight: 1.9,
    fontSize: '1rem',
  },
  li: { marginBottom: '0.4rem' },
};

/* ── SVG 1: Model-Based vs Model-Free ── */
const ModelBasedVsFreeDiagram = () => (
  <svg
    viewBox="0 0 600 240"
    style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }}
  >
    <defs>
      <marker
        id="mb-arr"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill={color} />
      </marker>
      <marker
        id="mb-arr2"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#4a9eed" />
      </marker>
    </defs>

    {/* Divider */}
    <line
      x1="300"
      y1="10"
      x2="300"
      y2="230"
      stroke="var(--text-secondary)"
      strokeWidth="1.5"
      strokeDasharray="6,3"
    />

    {/* Left: Model-Free */}
    <text
      x="150"
      y="28"
      textAnchor="middle"
      fontSize="13"
      fontWeight="700"
      fill="#4a9eed"
    >
      Model-Free
    </text>

    <rect
      x="20"
      y="45"
      width="100"
      height="44"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="70"
      y="65"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#4a9eed"
    >
      Agente
    </text>
    <text
      x="70"
      y="81"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      π(a|s)
    </text>

    <rect
      x="155"
      y="45"
      width="110"
      height="44"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="210"
      y="65"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#4a9eed"
    >
      Ambiente Real
    </text>
    <text
      x="210"
      y="81"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      caixa negra
    </text>

    <line
      x1="120"
      y1="67"
      x2="153"
      y2="67"
      stroke="#4a9eed"
      strokeWidth="1.5"
      markerEnd="url(#mb-arr2)"
    />
    <text
      x="136"
      y="60"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      ação
    </text>
    <path
      d="M210,89 Q210,115 70,115 L70,91"
      fill="none"
      stroke="#4a9eed"
      strokeWidth="1.3"
      strokeDasharray="4,3"
      markerEnd="url(#mb-arr2)"
    />
    <text x="140" y="128" textAnchor="middle" fontSize="9" fill="#4a9eed">
      r, s' (direto do ambiente)
    </text>

    <text
      x="150"
      y="155"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Milhões de interacções
    </text>
    <text
      x="150"
      y="170"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      necessárias (ineficiente)
    </text>

    {/* Right: Model-Based */}
    <text
      x="450"
      y="28"
      textAnchor="middle"
      fontSize="13"
      fontWeight="700"
      fill={color}
    >
      Model-Based
    </text>

    <rect
      x="315"
      y="45"
      width="90"
      height="46"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1.5"
    />
    <text
      x="360"
      y="65"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill={color}
    >
      Agente
    </text>
    <text
      x="360"
      y="81"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      π(a|s)
    </text>

    <rect
      x="440"
      y="45"
      width="110"
      height="46"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1.5"
    />
    <text
      x="485"
      y="62"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill={color}
    >
      Modelo P̂
    </text>
    <text
      x="485"
      y="76"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      P(s'|s,a), R(s,a)
    </text>
    <text
      x="485"
      y="88"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      (aprendido)
    </text>

    <line
      x1="405"
      y1="67"
      x2="440"
      y2="67"
      stroke={color}
      strokeWidth="1.5"
      markerEnd="url(#mb-arr)"
    />
    <text
      x="422"
      y="60"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      ação
    </text>
    <path
      d="M485,89 Q485,120 360,120 L360,91"
      fill="none"
      stroke={color}
      strokeWidth="1.3"
      strokeDasharray="4,3"
      markerEnd="url(#mb-arr)"
    />
    <text x="420" y="133" textAnchor="middle" fontSize="9" fill={color}>
      simulação interna (barato)
    </text>

    <text
      x="450"
      y="155"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Muito menos interacções
    </text>
    <text
      x="450"
      y="170"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      reais (eficiente)
    </text>

    {/* Bottom comparison */}
    <rect
      x="20"
      y="188"
      width="260"
      height="36"
      rx="6"
      fill="rgba(74,158,237,0.10)"
      stroke="rgba(74,158,237,0.10)"
      strokeWidth="1"
    />
    <text
      x="150"
      y="204"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Risco: nenhum bias de modelo
    </text>
    <text
      x="150"
      y="218"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Custo: muitas amostras reais
    </text>

    <rect
      x="315"
      y="188"
      width="265"
      height="36"
      rx="6"
      fill="rgba(74,158,237,0.10)"
      stroke="rgba(74,158,237,0.10)"
      strokeWidth="1"
    />
    <text
      x="448"
      y="204"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Risco: erros do modelo acumulam
    </text>
    <text
      x="448"
      y="218"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Ganho: eficiência amostral alta
    </text>
  </svg>
);

/* ── SVG 2: Dyna-Q Architecture ── */
const DynaQDiagram = () => (
  <svg
    viewBox="0 0 640 294"
    style={{ width: '100%', maxWidth: 640, display: 'block', margin: '0 auto' }}
  >
    <defs>
      <marker
        id="dq-arr-real"
        markerWidth="8"
        markerHeight="6"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#4a9eed" />
      </marker>
      <marker
        id="dq-arr-sim"
        markerWidth="8"
        markerHeight="6"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#0284c7" />
      </marker>
      <marker
        id="dq-arr-blue"
        markerWidth="8"
        markerHeight="6"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill={color} />
      </marker>
    </defs>

    {/* Agente — centro */}
    <rect
      x="240"
      y="110"
      width="160"
      height="60"
      rx="10"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="2"
    />
    <text
      x="320"
      y="136"
      textAnchor="middle"
      fontSize="13"
      fontWeight="700"
      fill={color}
    >
      Agente
    </text>
    <text
      x="320"
      y="154"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Q(s,a)
    </text>

    {/* Ambiente Real — topo */}
    <rect
      x="240"
      y="18"
      width="160"
      height="54"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="320"
      y="41"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#4a9eed"
    >
      Ambiente Real
    </text>
    <text
      x="320"
      y="58"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      P(s'|s,a), R real
    </text>

    {/* Modelo Aprendido — base */}
    <rect
      x="240"
      y="202"
      width="160"
      height="54"
      rx="8"
      fill="rgba(2,132,199,0.10)"
      stroke="#0284c7"
      strokeWidth="1.5"
    />
    <text
      x="320"
      y="225"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#0284c7"
    >
      Modelo Aprendido
    </text>
    <text
      x="320"
      y="243"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      P̂(s'|s,a), R̂(s,a)
    </text>

    {/* Agente → Ambiente Real: ação (seta esquerda, a subir) */}
    <line
      x1="268"
      y1="110"
      x2="268"
      y2="74"
      stroke="#4a9eed"
      strokeWidth="1.8"
      markerEnd="url(#dq-arr-real)"
    />
    <text x="230" y="94" textAnchor="middle" fontSize="10" fill="#4a9eed">
      ação
    </text>

    {/* Ambiente Real → Agente: r, s' (seta direita, a descer) */}
    <line
      x1="372"
      y1="72"
      x2="372"
      y2="108"
      stroke="#4a9eed"
      strokeWidth="1.8"
      markerEnd="url(#dq-arr-real)"
    />
    <text x="410" y="94" textAnchor="middle" fontSize="10" fill="#4a9eed">
      r, s'
    </text>

    {/* Ambiente Real → Modelo: actualiza (seta lateral direita) */}
    <line
      x1="400"
      y1="45"
      x2="560"
      y2="45"
      stroke={color}
      strokeWidth="1.3"
      strokeDasharray="5,3"
    />
    <line
      x1="560"
      y1="45"
      x2="560"
      y2="229"
      stroke={color}
      strokeWidth="1.3"
      strokeDasharray="5,3"
    />
    <line
      x1="560"
      y1="229"
      x2="402"
      y2="229"
      stroke={color}
      strokeWidth="1.3"
      strokeDasharray="5,3"
      markerEnd="url(#dq-arr-blue)"
    />
    <text
      x="590"
      y="140"
      textAnchor="middle"
      fontSize="10"
      fill={color}
      transform="rotate(90,590,140)"
    >
      actualiza modelo
    </text>

    {/* Agente → Modelo: consulta simulada (seta esquerda, a descer) */}
    <line
      x1="268"
      y1="170"
      x2="268"
      y2="200"
      stroke="#0284c7"
      strokeWidth="1.8"
      strokeDasharray="5,3"
      markerEnd="url(#dq-arr-sim)"
    />
    <text x="218" y="188" textAnchor="middle" fontSize="10" fill="#0284c7">
      consulta
    </text>

    {/* Modelo → Agente: s',r simulados (seta direita, a subir) */}
    <line
      x1="372"
      y1="200"
      x2="372"
      y2="172"
      stroke="#0284c7"
      strokeWidth="1.8"
      strokeDasharray="5,3"
      markerEnd="url(#dq-arr-sim)"
    />
    <text x="420" y="188" textAnchor="middle" fontSize="10" fill="#0284c7">
      s',r sim.
    </text>

    {/* Loop de Planeamento — caixa esquerda */}
    <rect
      x="18"
      y="90"
      width="150"
      height="100"
      rx="8"
      fill="rgba(2,132,199,0.06)"
      stroke="rgba(2,132,199,0.3)"
      strokeWidth="1"
    />
    <text
      x="93"
      y="112"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#0284c7"
    >
      Loop de
    </text>
    <text
      x="93"
      y="127"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#0284c7"
    >
      Planeamento
    </text>
    <text
      x="93"
      y="148"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      n=5 passos
    </text>
    <text x="93" y="163" textAnchor="middle" fontSize="10" fill="#0284c7">
      ~5× mais eficiente
    </text>
    <text
      x="93"
      y="178"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      (amostras reais)
    </text>

    {/* Legenda */}
    <line x1="30" y1="276" x2="58" y2="276" stroke="#4a9eed" strokeWidth="2" />
    <text x="63" y="280" fontSize="10" fill="var(--text-secondary)">
      Experiência real
    </text>
    <line
      x1="200"
      y1="276"
      x2="228"
      y2="276"
      stroke="#0284c7"
      strokeWidth="2"
      strokeDasharray="5,3"
    />
    <text x="233" y="280" fontSize="10" fill="var(--text-secondary)">
      Simulação
    </text>
    <line
      x1="350"
      y1="276"
      x2="378"
      y2="276"
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="5,3"
    />
    <text x="383" y="280" fontSize="10" fill="var(--text-secondary)">
      Actualização do modelo
    </text>
  </svg>
);

/* ── SVG 3: Continuous Action Space Problem ── */
const ContinuousActionSpaceDiagram = () => (
  <svg
    viewBox="0 0 600 230"
    style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }}
  >
    <defs>
      <marker
        id="ca-arr"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill={color} />
      </marker>
      <marker
        id="ca-arr-red"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#4a9eed" />
      </marker>
    </defs>

    <line
      x1="300"
      y1="10"
      x2="300"
      y2="220"
      stroke="var(--text-secondary)"
      strokeWidth="1.5"
      strokeDasharray="6,3"
    />

    {/* LEFT: Discrete — Easy argmax */}
    <text
      x="150"
      y="28"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#4a9eed"
    >
      Discreto (DQN funciona)
    </text>

    <rect
      x="20"
      y="42"
      width="70"
      height="40"
      rx="6"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="55"
      y="60"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill="#4a9eed"
    >
      Esquerda
    </text>
    <text
      x="55"
      y="74"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Q=3.2
    </text>

    <rect
      x="105"
      y="42"
      width="70"
      height="40"
      rx="6"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="2"
    />
    <text
      x="140"
      y="60"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill="#4a9eed"
    >
      Frente
    </text>
    <text x="140" y="74" textAnchor="middle" fontSize="10" fill="#4a9eed">
      Q=7.1{' '}
    </text>

    <rect
      x="190"
      y="42"
      width="70"
      height="40"
      rx="6"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="225"
      y="60"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill="#4a9eed"
    >
      Direita
    </text>
    <text
      x="225"
      y="74"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Q=2.8
    </text>

    <text x="150" y="105" textAnchor="middle" fontSize="10" fill="#4a9eed">
      argmax trivial — 3 valores
    </text>

    {/* continuous number line */}
    <line
      x1="20"
      y1="140"
      x2="268"
      y2="140"
      stroke="var(--text-secondary)"
      strokeWidth="1.5"
    />
    <text x="20" y="132" fontSize="9" fill="var(--text-secondary)">
      -1
    </text>
    <text x="260" y="132" fontSize="9" fill="var(--text-secondary)">
      +1
    </text>
    <text x="144" y="132" fontSize="9" fill="var(--text-secondary)">
      0
    </text>
    <line
      x1="144"
      y1="135"
      x2="144"
      y2="146"
      stroke="var(--text-secondary)"
      strokeWidth="1"
    />

    {/* many Q(s,a) values along line — just dots */}
    {[
      30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255,
    ].map((x, i) => (
      <circle key={i} cx={x} cy={140} r="2.5" fill="#4a9eed" opacity="0.6" />
    ))}
    <text x="150" y="160" textAnchor="middle" fontSize="10" fill="#4a9eed">
      Infinitos Q(s,a) — argmax intratável!
    </text>

    <rect
      x="10"
      y="168"
      width="270"
      height="40"
      rx="6"
      fill="rgba(74,158,237,0.10)"
      stroke="rgba(74,158,237,0.10)"
      strokeWidth="1"
    />
    <text x="145" y="185" textAnchor="middle" fontSize="10" fill="#4a9eed">
      Problema: não se pode enumerar
    </text>
    <text x="145" y="200" textAnchor="middle" fontSize="10" fill="#4a9eed">
      acções para calcular o argmax
    </text>

    {/* RIGHT: Continuous — Policy output */}
    <text
      x="450"
      y="28"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill={color}
    >
      Contínuo (política directa)
    </text>

    <rect
      x="315"
      y="42"
      width="120"
      height="50"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1.5"
    />
    <text
      x="375"
      y="64"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill={color}
    >
      Rede Neuronal
    </text>
    <text
      x="375"
      y="80"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      π_θ(a|s)
    </text>

    <line
      x1="435"
      y1="67"
      x2="475"
      y2="67"
      stroke={color}
      strokeWidth="1.5"
      markerEnd="url(#ca-arr)"
    />

    <rect
      x="475"
      y="42"
      width="100"
      height="50"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1.5"
    />
    <text
      x="525"
      y="63"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill={color}
    >
      Saída
    </text>
    <text
      x="525"
      y="77"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      μ=0.32, σ=0.1
    </text>

    <text x="450" y="113" textAnchor="middle" fontSize="10" fill={color}>
      Amostra directa: a ~ N(μ, σ²)
    </text>
    <text x="450" y="128" textAnchor="middle" fontSize="10" fill={color}>
      Sem argmax necessário!
    </text>

    {/* Gaussian curve */}
    <polyline
      points="375,195 390,192 405,183 420,162 435,140 450,130 465,140 480,162 495,183 510,192 525,195"
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
    <line
      x1="450"
      y1="130"
      x2="450"
      y2="200"
      stroke={color}
      strokeWidth="1"
      strokeDasharray="3,2"
      opacity="0.5"
    />
    <text x="400" y="213" textAnchor="middle" fontSize="9" fill={color}>
      μ
    </text>
    <text
      x="370"
      y="213"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      N(μ,σ²)
    </text>
  </svg>
);

/* ── SVG 4: DDPG Architecture ── */
const DDPGArchitectureDiagram = () => (
  <svg
    viewBox="0 0 620 280"
    style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}
  >
    <defs>
      <marker
        id="ddpg-arr"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill={color} />
      </marker>
      <marker
        id="ddpg-arr2"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#0284c7" />
      </marker>
      <marker
        id="ddpg-arr3"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#4a9eed" />
      </marker>
      <marker
        id="ddpg-arr4"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#4a9eed" />
      </marker>
    </defs>

    {/* Actor (online) */}
    <rect
      x="10"
      y="50"
      width="130"
      height="55"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="2"
    />
    <text
      x="75"
      y="74"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill={color}
    >
      Actor μ(s;θᵘ)
    </text>
    <text
      x="75"
      y="90"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      política determinística
    </text>

    {/* Environment */}
    <rect
      x="220"
      y="50"
      width="120"
      height="55"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="280"
      y="74"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#4a9eed"
    >
      Ambiente
    </text>
    <text
      x="280"
      y="90"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      s, r, s'
    </text>

    {/* Critic (online) */}
    <rect
      x="430"
      y="50"
      width="170"
      height="55"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="515"
      y="72"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#4a9eed"
    >
      Critic Q(s,a;θQ)
    </text>
    <text
      x="515"
      y="88"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      avalia (s,a) → valor
    </text>

    {/* Target Actor */}
    <rect
      x="10"
      y="185"
      width="130"
      height="55"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1"
      strokeDasharray="5,3"
    />
    <text
      x="75"
      y="206"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill={color}
    >
      Actor Alvo
    </text>
    <text
      x="75"
      y="222"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      μ'(s;θᵘ')
    </text>

    {/* Target Critic */}
    <rect
      x="430"
      y="185"
      width="170"
      height="55"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1"
      strokeDasharray="5,3"
    />
    <text
      x="515"
      y="206"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#4a9eed"
    >
      Critic Alvo
    </text>
    <text
      x="515"
      y="222"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Q'(s,a;θQ')
    </text>

    {/* Arrows: Actor -> Env */}
    <line
      x1="140"
      y1="77"
      x2="218"
      y2="77"
      stroke={color}
      strokeWidth="1.8"
      markerEnd="url(#ddpg-arr)"
    />
    <text x="179" y="70" textAnchor="middle" fontSize="9" fill={color}>
      acção a=μ(s)
    </text>

    {/* Env -> Critic */}
    <line
      x1="340"
      y1="77"
      x2="428"
      y2="77"
      stroke="#4a9eed"
      strokeWidth="1.8"
      markerEnd="url(#ddpg-arr4)"
    />
    <text x="384" y="70" textAnchor="middle" fontSize="9" fill="#4a9eed">
      (s,a) → Q
    </text>

    {/* TD error back to Actor */}
    <path
      d="M430,90 Q300,125 140,90"
      fill="none"
      stroke="#0284c7"
      strokeWidth="1.5"
      strokeDasharray="5,3"
      markerEnd="url(#ddpg-arr2)"
    />
    <text x="285" y="130" textAnchor="middle" fontSize="9" fill="#0284c7">
      erro TD → actualiza actor via ∇_a Q
    </text>

    {/* Soft update arrows */}
    <line
      x1="75"
      y1="105"
      x2="75"
      y2="183"
      stroke={color}
      strokeWidth="1.2"
      strokeDasharray="4,3"
      markerEnd="url(#ddpg-arr)"
    />
    <text x="35" y="148" textAnchor="middle" fontSize="8" fill={color}>
      soft update
    </text>
    <text x="35" y="159" textAnchor="middle" fontSize="8" fill={color}>
      τθ+(1-τ)θ'
    </text>

    <line
      x1="515"
      y1="105"
      x2="515"
      y2="183"
      stroke="#4a9eed"
      strokeWidth="1.2"
      strokeDasharray="4,3"
      markerEnd="url(#ddpg-arr3)"
    />
    <text x="570" y="148" textAnchor="middle" fontSize="8" fill="#4a9eed">
      soft update
    </text>
    <text x="570" y="159" textAnchor="middle" fontSize="8" fill="#4a9eed">
      τ=0.005
    </text>

    {/* Labels */}
    <text
      x="310"
      y="220"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Redes alvo (dashed) → alvos estáveis
    </text>
    <text
      x="310"
      y="230"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      para o cálculo de y = r + γQ'(s',μ'(s'))
    </text>

    {/* Noise label */}
    <rect
      x="160"
      y="160"
      width="130"
      height="30"
      rx="5"
      fill="rgba(2,132,199,0.10)"
      stroke="#0284c7"
      strokeWidth="1"
    />
    <text x="225" y="173" textAnchor="middle" fontSize="10" fill="#0284c7">
      + ruído OU para
    </text>
    <text x="225" y="184" textAnchor="middle" fontSize="10" fill="#0284c7">
      exploração
    </text>
  </svg>
);

/* ── SVG 5: TD3 Improvements ── */
const TD3ImprovementsDiagram = () => (
  <svg
    viewBox="0 0 620 270"
    style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}
  >
    <defs>
      <marker
        id="td3-arr"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill={color} />
      </marker>
    </defs>

    {/* Fix 1: Twin Critics */}
    <rect
      x="10"
      y="10"
      width="180"
      height="120"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1.5"
    />
    <text
      x="100"
      y="30"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill={color}
    >
      1. Twin Critics
    </text>
    <text
      x="100"
      y="45"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      Reduz sobreestimação de Q
    </text>

    <rect
      x="20"
      y="55"
      width="60"
      height="30"
      rx="5"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1"
    />
    <text
      x="50"
      y="68"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill={color}
    >
      Q₁
    </text>
    <text
      x="50"
      y="80"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      critic 1
    </text>

    <rect
      x="98"
      y="55"
      width="60"
      height="30"
      rx="5"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1"
    />
    <text
      x="128"
      y="68"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill={color}
    >
      Q₂
    </text>
    <text
      x="128"
      y="80"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      critic 2
    </text>

    <line x1="80" y1="70" x2="96" y2="70" stroke={color} strokeWidth="1" />
    <line x1="80" y1="70" x2="80" y2="100" stroke={color} strokeWidth="1" />
    <line x1="128" y1="85" x2="128" y2="100" stroke={color} strokeWidth="1" />
    <line x1="80" y1="100" x2="128" y2="100" stroke={color} strokeWidth="1" />

    <rect
      x="78"
      y="100"
      width="65"
      height="22"
      rx="4"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1"
    />
    <text
      x="111"
      y="115"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill={color}
    >
      min(Q₁,Q₂)
    </text>

    {/* Fix 2: Delayed Policy Updates */}
    <rect
      x="215"
      y="10"
      width="185"
      height="120"
      rx="8"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="307"
      y="30"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#4a9eed"
    >
      2. Delayed Policy Updates
    </text>
    <text
      x="307"
      y="45"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      Actor actualiza menos vezes
    </text>

    {[0, 1, 2, 3, 4, 5].map((i) => (
      <g key={i}>
        <rect
          x={220 + i * 28}
          y="58"
          width="22"
          height="18"
          rx="3"
          fill="rgba(74,158,237,0.10)"
          stroke={color}
          strokeWidth="1"
        />
        <text
          x={231 + i * 28}
          y="71"
          textAnchor="middle"
          fontSize="8"
          fill={color}
        >
          C
        </text>
      </g>
    ))}
    <text
      x="307"
      y="90"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      Critic: cada passo
    </text>

    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect
          x={234 + i * 56}
          y="98"
          width="22"
          height="18"
          rx="3"
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="1"
        />
        <text
          x={245 + i * 56}
          y="111"
          textAnchor="middle"
          fontSize="8"
          fill="#4a9eed"
        >
          A
        </text>
      </g>
    ))}
    <text x="307" y="125" textAnchor="middle" fontSize="9" fill="#4a9eed">
      Actor: cada 2 passos
    </text>

    {/* Fix 3: Target Policy Smoothing */}
    <rect
      x="425"
      y="10"
      width="185"
      height="120"
      rx="8"
      fill="rgba(2,132,199,0.06)"
      stroke="#0284c7"
      strokeWidth="1.5"
    />
    <text
      x="517"
      y="30"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#0284c7"
    >
      3. Target Policy Smoothing
    </text>
    <text
      x="517"
      y="45"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      Evita exploração de picos em Q
    </text>

    <rect
      x="432"
      y="56"
      width="80"
      height="30"
      rx="5"
      fill="rgba(2,132,199,0.12)"
      stroke="#0284c7"
      strokeWidth="1"
    />
    <text
      x="472"
      y="72"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill="#0284c7"
    >
      μ'(s')
    </text>
    <text
      x="472"
      y="84"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      actor alvo
    </text>

    <rect
      x="520"
      y="56"
      width="80"
      height="30"
      rx="5"
      fill="rgba(2,132,199,0.12)"
      stroke="#0284c7"
      strokeWidth="1"
    />
    <text x="560" y="70" textAnchor="middle" fontSize="10" fill="#0284c7">
      + clip(ε,-c,c)
    </text>
    <text
      x="560"
      y="82"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      ruído clipped
    </text>

    <line
      x1="512"
      y1="71"
      x2="518"
      y2="71"
      stroke="#0284c7"
      strokeWidth="1.5"
      markerEnd="url(#td3-arr)"
    />
    <text x="520" y="103" textAnchor="middle" fontSize="9" fill="#0284c7">
      ã = clip(μ'+ε, a_low, a_high)
    </text>
    <text
      x="517"
      y="118"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      acção suavizada para alvo
    </text>

    {/* Summary table */}
    <rect
      x="10"
      y="145"
      width="600"
      height="110"
      rx="8"
      fill="var(--bg-secondary)"
      stroke="var(--text-secondary)"
      strokeWidth="1"
    />
    <text
      x="310"
      y="163"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="var(--text-primary)"
    >
      TD3 vs DDPG — Resumo
    </text>

    <text
      x="20"
      y="182"
      fontSize="10"
      fontWeight="700"
      fill="var(--text-secondary)"
    >
      Problema DDPG
    </text>
    <text
      x="220"
      y="182"
      fontSize="10"
      fontWeight="700"
      fill="var(--text-secondary)"
    >
      Fix TD3
    </text>
    <text
      x="440"
      y="182"
      fontSize="10"
      fontWeight="700"
      fill="var(--text-secondary)"
    >
      Efeito
    </text>
    <line
      x1="10"
      y1="187"
      x2="610"
      y2="187"
      stroke="var(--text-secondary)"
      strokeWidth="1"
    />

    <text x="20" y="203" fontSize="9" fill="var(--text-primary)">
      Q sobreestimado → política enviesada
    </text>
    <text x="220" y="203" fontSize="9" fill={color}>
      Twin Critics + min(Q1,Q2)
    </text>
    <text x="440" y="203" fontSize="9" fill="#4a9eed">
      Menos bias na estimativa de valor
    </text>

    <text x="20" y="220" fontSize="9" fill="var(--text-primary)">
      Actor actualiza com critic ruidoso
    </text>
    <text x="220" y="220" fontSize="9" fill={color}>
      Delayed updates (d=2)
    </text>
    <text x="440" y="220" fontSize="9" fill="#4a9eed">
      Critic mais estável antes de guiar actor
    </text>

    <text x="20" y="237" fontSize="9" fill="var(--text-primary)">
      Overfitting a picos estreitos de Q
    </text>
    <text x="220" y="237" fontSize="9" fill={color}>
      Target policy smoothing (ε~N)
    </text>
    <text x="440" y="237" fontSize="9" fill="#4a9eed">
      Políticas alvo mais robustas
    </text>
  </svg>
);

/* ── SVG 6: SAC Entropy Diagram ── */
const SACEntropyDiagram = () => (
  <svg
    viewBox="0 0 650 250"
    style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }}
  >
    <defs>
      <marker
        id="sac-arr"
        markerWidth="8"
        markerHeight="8"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill={color} />
      </marker>
    </defs>

    {/* Axes */}
    <line
      x1="50"
      y1="200"
      x2="280"
      y2="200"
      stroke="var(--text-secondary)"
      strokeWidth="1.5"
      markerEnd="url(#sac-arr)"
    />
    <line
      x1="50"
      y1="200"
      x2="50"
      y2="30"
      stroke="var(--text-secondary)"
      strokeWidth="1.5"
      markerEnd="url(#sac-arr)"
    />
    <text
      x="165"
      y="220"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      Iterações de treino
    </text>
    <text
      x="12"
      y="120"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
      transform="rotate(-90,12,120)"
    >
      Recompensa
    </text>

    {/* Reward curve — SAC */}
    <polyline
      points="50,190 80,175 110,155 140,130 170,110 200,95 230,88 260,85"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
    />
    <text x="262" y="83" fontSize="10" fill={color} fontWeight="700">
      SAC
    </text>

    {/* Reward curve — pure exploitation (no entropy) */}
    <polyline
      points="50,190 80,185 110,175 140,155 170,140 200,135 230,133 260,132"
      fill="none"
      stroke="#4a9eed"
      strokeWidth="1.8"
      strokeDasharray="6,3"
    />
    <text x="262" y="130" fontSize="10" fill="#4a9eed">
      Sem entropia
    </text>

    {/* Right panel: Temperature α tradeoff */}
    <rect
      x="350"
      y="20"
      width="275"
      height="210"
      rx="10"
      fill="rgba(74,158,237,0.10)"
      stroke="var(--text-secondary)"
      strokeWidth="1"
    />
    <text
      x="490"
      y="42"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill={color}
    >
      Temperatura α
    </text>
    <text
      x="490"
      y="57"
      textAnchor="middle"
      fontSize="10"
      fill="var(--text-secondary)"
    >
      controla exploração vs exploração
    </text>

    {/* High α */}
    <rect
      x="360"
      y="68"
      width="120"
      height="55"
      rx="7"
      fill="rgba(74,158,237,0.10)"
      stroke={color}
      strokeWidth="1.5"
    />
    <text
      x="425"
      y="87"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill={color}
    >
      α grande
    </text>
    <text
      x="425"
      y="102"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      H(π) pesa mais
    </text>
    <text x="420" y="116" textAnchor="middle" fontSize="9" fill={color}>
      → Exploração máxima
    </text>

    {/* Low α */}
    <rect
      x="495"
      y="68"
      width="120"
      height="55"
      rx="7"
      fill="rgba(2,132,199,0.10)"
      stroke="#0284c7"
      strokeWidth="1.5"
    />
    <text
      x="550"
      y="87"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill="#0284c7"
    >
      α pequeno
    </text>
    <text
      x="555"
      y="102"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      Recompensa pesa mais
    </text>
    <text x="555" y="116" textAnchor="middle" fontSize="9" fill="#0284c7">
      → Exploração diminuída
    </text>

    {/* Auto-tune */}
    <rect
      x="360"
      y="140"
      width="255"
      height="75"
      rx="7"
      fill="rgba(74,158,237,0.10)"
      stroke="#4a9eed"
      strokeWidth="1.5"
    />
    <text
      x="490"
      y="160"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#4a9eed"
    >
      Auto-tuning de α
    </text>
    <text
      x="490"
      y="177"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      α ajustado para atingir
    </text>
    <text
      x="490"
      y="191"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      entropia alvo: H̄ = -dim(A)
    </text>
    <text x="490" y="205" textAnchor="middle" fontSize="9" fill="#4a9eed">
      Sem tunagem manual de α!
    </text>

    {/* Entropy formula label */}
    <text x="190" y="165" textAnchor="middle" fontSize="9" fill={color}>
      J(π) = E[r + α·H(π(·|s))]
    </text>
    <text
      x="165"
      y="178"
      textAnchor="middle"
      fontSize="9"
      fill="var(--text-secondary)"
    >
      H(π) = −E[log π(a|s)]
    </text>
  </svg>
);

export default function RL8() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}>
        <ArrowLeft size={16} /> Voltar a RL
      </Link>

      <div style={S.tag}>MÓDULO 8</div>
      <h1 style={S.h1}>Model-Based RL e Algoritmos para Ações Contínuas</h1>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Model-Based RL — Motivação e Conceito</h2>
        <p style={S.p}>
          Os algoritmos model-free que estudámos (DQN, SARSA, Q-Learning)
          aprendem diretamente a partir de interacções reais com o ambiente —
          sem construir qualquer representação interna de como o ambiente
          funciona. Esta abordagem é simples e robusta, mas tem um custo alto: a{' '}
          <strong>ineficiência amostral</strong>. O DQN original precisou de 50
          milhões de frames do Atari para atingir desempenho humano —
          equivalente a semanas de jogo humano contínuo. Para robótica física ou
          condução autónoma, onde cada interacção tem custo real (tempo,
          desgaste, risco), isto é proibitivo.
        </p>
        <p style={S.p}>
          A solução dos métodos <strong>model-based</strong> é aprender
          explicitamente um modelo do ambiente: a função de transição{' '}
          <InlineMath math="\hat{P}(s'|s,a)" /> e a função de recompensa{' '}
          <InlineMath math="\hat{R}(s,a)" />. Com este modelo aprendido, o
          agente pode
          <em> planear</em> — simular interacções hipotéticas internamente, sem
          precisar de interagir com o ambiente real. Um único episódio real pode
          gerar dezenas de episódios simulados para actualizar a política.
        </p>
        <div style={S.diagram}>
          <ModelBasedVsFreeDiagram />
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            Model-free requer muitas interacções reais; model-based aprende um
            modelo e planeia internamente
          </p>
        </div>
        <h3 style={S.h3}>Tradeoff Principal</h3>
        <p style={S.p}>
          Model-based não é uma bala de prata. O modelo aprendido{' '}
          <InlineMath math="\hat{P}" /> é sempre uma aproximação — contém erros.
          Durante o planeamento, esses erros <strong>acumulam-se</strong>: um
          pequeno erro em cada passo simulado pode tornar-se grande ao longo de
          trajectórias longas (compounding model errors). Métodos model-based
          tendem a:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>
            Convergir muito mais rapidamente em número de amostras reais
            (eficiência amostral alta)
          </li>
          <li style={S.li}>
            Ter pior desempenho assimptótico se o modelo for impreciso (model
            bias)
          </li>
          <li style={S.li}>
            Ser mais complexos de implementar e ajustar (duas fontes de erro:
            modelo + política)
          </li>
        </ul>
        <div style={S.note}>
          Ambientes onde model-based brilha: robótica, veículos autónomos,
          biologia computacional — qualquer domínio onde interacções reais são
          caras, lentas, ou perigosas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Dyna-Q — Integrando Planeamento e Aprendizagem</h2>
        <p style={S.p}>
          Dyna-Q (Sutton, 1990) foi uma das primeiras propostas para combinar
          aprendizagem model-free com planeamento. A ideia é elegante: usar
          Q-Learning normal para interacções reais, mas também usar o modelo
          aprendido para gerar experiências simuladas adicionais a cada passo —
          multiplicando a eficiência sem alterar o algoritmo base.
        </p>
        <div style={S.diagram}>
          <DynaQDiagram />
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            Dyna-Q: cada interacção real gera n passos de planeamento via o
            modelo aprendido
          </p>
        </div>

        <h3 style={S.h3}>Algoritmo Dyna-Q</h3>
        <div style={S.code}>{`Inicializar Q(s,a), Modelo M(s,a) = vazio

Repetir para cada episódio:
 Observar estado s

 Repetir para cada passo:
 1. Escolher acção a ← ε-greedy(Q, s)
 2. Executar a; observar r, s' ← interacção REAL

 3. Actualizar Q (Q-Learning normal):
 Q(s,a) ← Q(s,a) + α[r + γ max_a' Q(s',a') − Q(s,a)]

 4. Actualizar modelo:
 M(s,a) ← r, s' (memoriza transição real)

 5. Planeamento — repetir n vezes:
 Amostrar (ŝ, â) aleatoriamente das transições vistas
 r̂, ŝ' ← M(ŝ, â) ← experiência SIMULADA
 Q(ŝ,â) ← Q(ŝ,â) + α[r̂ + γ max_a' Q(ŝ',a') − Q(ŝ,â)]

 6. s ← s'`}</div>

        <h3 style={S.h3}>Actualização de Q</h3>
        <div style={S.math}>
          <BlockMath math="Q(s,a) \leftarrow Q(s,a) + \alpha\bigl[r + \gamma \max_{a'} Q(s',a') - Q(s,a)\bigr]" />
        </div>
        <p style={S.p}>
          A mesma equação é aplicada tanto às transições reais (passo 3) como às
          transições simuladas (passo 5). A diferença está apenas na origem de{' '}
          <InlineMath math="(s, a, r, s')" /> — real ou gerada pelo modelo.
        </p>

        <h3 style={S.h3}>Impacto do Parâmetro n</h3>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Passos de planeamento n</th>
                <th style={S.th}>Episódios reais até convergência</th>
                <th style={S.th}>Custo computacional por passo</th>
                <th style={S.th}>Risco de model bias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>n=0 (Q-Learning puro)</td>
                <td style={S.td}>~1000</td>
                <td style={S.td}>Baixo</td>
                <td style={S.td}>Nenhum</td>
              </tr>
              <tr>
                <td style={S.td}>n=5</td>
                <td style={S.td}>~200</td>
                <td style={S.td}>Moderado</td>
                <td style={S.td}>Baixo</td>
              </tr>
              <tr>
                <td style={S.td}>n=50</td>
                <td style={S.td}>~40</td>
                <td style={S.td}>Alto</td>
                <td style={S.td}>Moderado</td>
              </tr>
              <tr>
                <td style={S.td}>n=∞ (planeamento puro)</td>
                <td style={S.td}>Poucos (se modelo perfeito)</td>
                <td style={S.td}>Muito alto</td>
                <td style={S.td}>Alto — erros acumulam</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Na prática, n=5 a n=20 oferece um bom balanço. Com n demasiado alto,
          os erros do modelo dominam e podem degradar a política aprendida —
          especialmente no início do treino quando o modelo ainda é impreciso.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. World Models e Planeamento Avançado</h2>
        <p style={S.p}>
          Dyna-Q usa um modelo tabular simples — armazena transições observadas.
          A investigação moderna expande esta ideia com modelos neuronais
          expressivos que aprendem representações latentes do estado e dinâmicas
          complexas.
        </p>

        <h3 style={S.h3}>World Models (Ha & Schmidhuber, 2018)</h3>
        <p style={S.p}>
          A arquitectura World Models separa a percepção do mundo em três
          componentes: um encoder visual (VAE) que comprime observações em
          representações latentes <InlineMath math="z_t" />, um modelo de
          dinâmicas (MDN-RNN) que prediz <InlineMath math="z_{t+1}" /> dado{' '}
          <InlineMath math="z_t, a_t" />, e um controlador pequeno que aprende a
          política no espaço latente. O agente pode <em>sonhar</em> — treinar o
          controlador inteiramente dentro da imaginação do modelo de dinâmicas,
          sem interagir com o ambiente real. Em Car Racing, o agente aprendeu a
          conduzir quase inteiramente em sonhos.
        </p>

        <h3 style={S.h3}>MuZero (DeepMind, 2019)</h3>
        <p style={S.p}>
          MuZero (Schrittwieser et al., 2019) levou o planeamento model-based a
          um novo nível: aprende um modelo útil para planeamento{' '}
          <em>sem modelar explicitamente o ambiente</em>. Em vez de aprender{' '}
          <InlineMath math="\hat{P}(s'|s,a)" /> interpretável, aprende três
          funções em espaço latente: uma representação{' '}
          <InlineMath math="h(o_1,...,o_t) \to s_t" />, uma função de dinâmicas{' '}
          <InlineMath math="g(s_t, a_t) \to (r_t, s_{t+1})" />, e uma função de
          predição <InlineMath math="f(s_t) \to (p_t, v_t)" /> (política +
          valor). MuZero dominou Chess, Go, Shogi e todos os 57 jogos Atari com
          o mesmo algoritmo.
        </p>

        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Abordagem</th>
                <th style={S.th}>Modelo aprendido</th>
                <th style={S.th}>Planeamento</th>
                <th style={S.th}>Eficiência amostral</th>
                <th style={S.th}>Escalabilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>
                  <strong>Dyna-Q</strong>
                </td>
                <td style={S.td}>Tabela de transições</td>
                <td style={S.td}>Q-updates simulados</td>
                <td style={S.td}>Alta (ambientes pequenos)</td>
                <td style={S.td}>Baixa (tabular)</td>
              </tr>
              <tr>
                <td style={S.td}>
                  <strong>World Models</strong>
                </td>
                <td style={S.td}>VAE + MDN-RNN latente</td>
                <td style={S.td}>Treino em imaginação</td>
                <td style={S.td}>Muito alta</td>
                <td style={S.td}>Média (imagens)</td>
              </tr>
              <tr>
                <td style={S.td}>
                  <strong>MuZero</strong>
                </td>
                <td style={S.td}>Modelo latente end-to-end</td>
                <td style={S.td}>MCTS em espaço latente</td>
                <td style={S.td}>Muito alta</td>
                <td style={S.td}>Alta (Chess, Go, Atari)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          MuZero representa o estado da arte em planeamento model-based: elimina
          a necessidade de regras do jogo (ao contrário do AlphaZero),
          aprendendo tudo a partir de interacções — e mesmo assim supera humanos
          em múltiplos domínios.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. O Problema das Ações Contínuas</h2>
        <p style={S.p}>
          Todos os algoritmos que estudámos até RL7 assumem espaços de ação
          discretos e finitos. O DQN calcula{' '}
          <InlineMath math="\arg\max_a Q(s,a)" /> sobre todas as acções para
          obter a política greedy — com 18 acções no Atari, isto é trivial. Mas
          em controlo de robôs (torque de cada motor), veículos autónomos
          (ângulo de direcção, aceleração, travagem), negociação financeira
          (percentagem de portfolio), ou física de jogos, as acções são valores
          reais num espaço contínuo — <em>infinitas acções possíveis</em>. A
          operação <InlineMath math="\arg\max" /> sobre um espaço infinito é
          intratável.
        </p>
        <div style={S.diagram}>
          <ContinuousActionSpaceDiagram />
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            Discreto: argmax trivial sobre k acções. Contínuo: infinitas acções
            — precisamos de uma política paramétrica directa
          </p>
        </div>
        <h3 style={S.h3}>Aplicações que Exigem Controlo Contínuo</h3>
        <ul style={S.ul}>
          <li style={S.li}>
            <strong>Robótica:</strong> torque de cada junta (
            <InlineMath math="\in [-1,1]" />
            ), velocidade, força de preensão
          </li>
          <li style={S.li}>
            <strong>Veículos autónomos:</strong> ângulo de direcção, pressão no
            acelerador/travão
          </li>
          <li style={S.li}>
            <strong>Gestão de energia:</strong> potência alocada a cada
            subsistema
          </li>
          <li style={S.li}>
            <strong>Videojogos de física:</strong> locomotion em MuJoCo
            (HalfCheetah, Ant, Humanoid)
          </li>
          <li style={S.li}>
            <strong>Negociação quantitativa:</strong> fracção de capital a
            alocar a cada activo
          </li>
        </ul>
        <p style={S.p}>
          A solução é abandonar a abordagem value-based com argmax e
          parametrizar directamente a política com saída contínua — um actor
          neuronal que emite <InlineMath math="\mu(s) \in \mathbb{R}^d" />{' '}
          (acção determinística) ou uma distribuição Gaussiana{' '}
          <InlineMath math="\mathcal{N}(\mu(s), \sigma(s)^2)" />.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. DDPG — Deep Deterministic Policy Gradient</h2>
        <p style={S.p}>
          DDPG (Lillicrap et al., 2015) combina o DPG (Deterministic Policy
          Gradient, Silver et al., 2014) com as técnicas de estabilização do DQN
          (replay buffer, target networks) para criar o primeiro algoritmo
          actor-critic deep learning robusto para controlo contínuo.
        </p>
        <div style={S.diagram}>
          <DDPGArchitectureDiagram />
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            DDPG: 4 redes neurais — actor online, actor alvo, critic online,
            critic alvo. Soft updates para estabilidade.
          </p>
        </div>

        <h3 style={S.h3}>Deterministic Policy Gradient Theorem</h3>
        <p style={S.p}>
          O DPG theorem mostra que o gradiente do objectivo em relação à
          política determinística <InlineMath math="\mu_\theta(s)" /> é:
        </p>
        <div style={S.math}>
          <BlockMath math="\nabla_\theta J \approx \mathbb{E}_{s \sim \mathcal{D}}\!\left[\nabla_a Q(s,a;\theta^Q)\big|_{a=\mu(s)} \cdot \nabla_\theta \mu(s;\theta^\mu)\right]" />
        </div>
        <p style={S.p}>
          A intuição: em vez de explorar todas as acções (como REINFORCE),
          calculamos como a acção determinística <InlineMath math="\mu(s)" />{' '}
          deveria mudar para aumentar o valor <InlineMath math="Q(s,a)" />, e
          depois backpropagamos isso para os pesos do actor.
        </p>

        <h3 style={S.h3}>Alvo TD e Actualização do Critic</h3>
        <div style={S.math}>
          <BlockMath math="y_i = r_i + \gamma Q'\!\bigl(s_i', \mu'(s_i'; \theta^{\mu'});\, \theta^{Q'}\bigr)" />
        </div>
        <div style={S.math}>
          <BlockMath math="\mathcal{L}(\theta^Q) = \frac{1}{N} \sum_i \bigl(y_i - Q(s_i, a_i; \theta^Q)\bigr)^2" />
        </div>

        <h3 style={S.h3}>Soft Updates das Redes Alvo</h3>
        <div style={S.math}>
          <BlockMath math="\theta^{Q'} \leftarrow \tau \theta^Q + (1-\tau)\theta^{Q'}, \quad \theta^{\mu'} \leftarrow \tau \theta^\mu + (1-\tau)\theta^{\mu'}" />
        </div>
        <p style={S.p}>
          Com <InlineMath math="\tau = 0.005" /> (muito pequeno), as redes alvo
          actualizam lentamente — isto garante alvos <InlineMath math="y_i" />{' '}
          estáveis durante o treino do critic, evitando a instabilidade das
          "moving targets" do DQN original.
        </p>

        <h3 style={S.h3}>Exploração — Ruído de Ornstein-Uhlenbeck</h3>
        <p style={S.p}>
          Como a política é determinística, precisamos de adicionar ruído
          explícito para exploração. O papel original usa o processo de
          Ornstein-Uhlenbeck (OU), que gera ruído temporalmente correlacionado —
          útil para sistemas físicos inerciais (robôs) onde acções consecutivas
          devem ser suaves:
        </p>
        <div style={S.math}>
          <BlockMath math="a_t = \mu(s_t;\theta^\mu) + \mathcal{N}_t, \quad d\mathcal{N}_t = \theta_{OU}(\mu_{OU} - \mathcal{N}_t)dt + \sigma_{OU}\,dW_t" />
        </div>
        <p style={S.p}>
          Na prática moderna, ruído Gaussiano normal (
          <InlineMath math="\mathcal{N}(0,\sigma^2)" />) funciona igualmente bem
          e é mais simples.
        </p>

        <h3 style={S.h3}>Pseudocódigo DDPG</h3>
        <div
          style={S.code}
        >{`Inicializar Actor μ(s;θᵘ), Critic Q(s,a;θQ) com pesos aleatórios
Inicializar redes alvo: θᵘ' ← θᵘ, θQ' ← θQ
Inicializar replay buffer D

Repetir para cada episódio:
 Inicializar ruído OU N para exploração
 Observar estado inicial s₁

 Para t = 1 até T:
 1. Seleccionar acção: aₜ = μ(sₜ;θᵘ) + Nₜ
 2. Executar aₜ; observar rₜ, sₜ₊₁
 3. Armazenar (sₜ, aₜ, rₜ, sₜ₊₁) em D

 4. Amostrar mini-batch de N transições de D
 5. Calcular alvo: yᵢ = rᵢ + γQ'(sᵢ', μ'(sᵢ';θᵘ');θQ')
 6. Actualizar Critic: min L = (1/N) Σ(yᵢ − Q(sᵢ,aᵢ;θQ))²
 7. Actualizar Actor: ∇θᵘ J ≈ (1/N) Σ ∇ₐQ(s,a)|ₐ₌μ(s) · ∇θᵘμ(s;θᵘ)
 8. Soft update: θQ' ← τθQ + (1-τ)θQ'
 θᵘ' ← τθᵘ + (1-τ)θᵘ'`}</div>

        <div style={S.note}>
          DDPG foi o estado da arte para controlo contínuo até 2018, mas é
          conhecido por ser frágil: muito sensível a hiperparâmetros e propenso
          a sobreestimar valores Q. TD3 corrige estes problemas
          sistematicamente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>
          6. TD3 — Twin Delayed Deep Deterministic Policy Gradient
        </h2>
        <p style={S.p}>
          TD3 (Fujimoto et al., 2018) introduz três melhorias cirúrgicas sobre o
          DDPG que atacam as suas fraquezas conhecidas. Cada melhoria é simples
          mas tem um impacto significativo na estabilidade e desempenho.
        </p>
        <div style={S.diagram}>
          <TD3ImprovementsDiagram />
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            TD3: três fixes ortogonais sobre DDPG — twin critics, delayed actor
            updates, target policy smoothing
          </p>
        </div>

        <h3 style={S.h3}>Fix 1: Twin Critics — Reduzir Sobreestimação</h3>
        <p style={S.p}>
          O DDPG herda do DQN o problema de sobreestimação do valor Q: o
          operador max no alvo TD tende a seleccionar ruído positivo, resultando
          em estimativas optimistas que enviesam a política. TD3 treina dois
          critics independentes e usa o mínimo:
        </p>
        <div style={S.math}>
          <BlockMath math="y = r + \gamma \min_{i=1,2} Q_{\theta_i'}\!\bigl(s', \tilde{a}\bigr)" />
        </div>
        <p style={S.p}>
          O mínimo de dois estimadores independentes é um estimador mais
          conservador e menos enviesado do valor real. Mesmo que um critic
          sobreestime, o outro compensa.
        </p>

        <h3 style={S.h3}>Fix 2: Delayed Policy Updates</h3>
        <p style={S.p}>
          Se actualizarmos o actor com um critic ainda impreciso, a política
          diverge numa direcção errada que é difícil de corrigir. TD3 actualiza
          o actor apenas uma vez por cada
          <InlineMath math=" d=2" /> actualizações do critic (por defeito):
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Actor actualiza no passo } t \text{ somente se } t \bmod d = 0" />
        </div>

        <h3 style={S.h3}>Fix 3: Target Policy Smoothing</h3>
        <p style={S.p}>
          O DDPG pode aprender políticas que exploram picos estreitos e
          irrealistas na função Q do critic. TD3 regulariza o alvo adicionando
          ruído clipped à acção do actor alvo:
        </p>
        <div style={S.math}>
          <BlockMath math="\tilde{a} = \text{clip}\!\bigl(\mu_{\theta'}(s') + \text{clip}(\varepsilon, -c, c),\; a_{\text{low}},\; a_{\text{high}}\bigr), \quad \varepsilon \sim \mathcal{N}(0, \sigma)" />
        </div>
        <p style={S.p}>
          Isto obriga o critic a ser suave em torno das acções do actor alvo,
          eliminando a possibilidade de explorar picos espúrios. Tipicamente{' '}
          <InlineMath math="c=0.5" />, <InlineMath math="\sigma=0.2" />.
        </p>

        <div style={S.highlight}>
          <strong>Resultado prático do TD3:</strong>
          <ul style={{ ...S.ul, marginTop: '0.5rem' }}>
            <li style={S.li}>
              Muito mais estável do que DDPG em benchmarks MuJoCo (HalfCheetah,
              Ant, Walker2d, Hopper)
            </li>
            <li style={S.li}>
              Menos sensível a hiperparâmetros — funciona com os defaults em
              maioria dos problemas
            </li>
            <li style={S.li}>
              Ainda usa política determinística — exploração por ruído externo,
              não intrínseca
            </li>
            <li style={S.li}>
              Off-policy: usa replay buffer → eficiente em amostras
            </li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. SAC — Soft Actor-Critic</h2>
        <p style={S.p}>
          SAC (Haarnoja et al., 2018) representa uma mudança conceptual em
          relação ao DDPG e TD3: em vez de adicionar ruído externo para
          exploração, SAC{' '}
          <em>maximiza explicitamente a entropia da política</em> como parte do
          objectivo. Isto resulta numa exploração intrínseca, superior
          estabilidade, e desempenho state-of-the-art em controlo contínuo.
        </p>
        <div style={S.diagram}>
          <SACEntropyDiagram />
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            SAC equilibra recompensa e entropia; α auto-ajustado elimina a
            necessidade de tunagem manual
          </p>
        </div>

        <h3 style={S.h3}>Objectivo de Maximum Entropy RL</h3>
        <div style={S.math}>
          <BlockMath math="J(\pi) = \sum_{t=0}^{T} \mathbb{E}_{(s_t,a_t)\sim\rho_\pi}\!\bigl[r(s_t, a_t) + \alpha\, \mathcal{H}(\pi(\cdot|s_t))\bigr]" />
        </div>
        <p style={S.p}>
          onde{' '}
          <InlineMath math="\mathcal{H}(\pi(\cdot|s)) = -\mathbb{E}_{a\sim\pi}[\log\pi(a|s)]" />{' '}
          é a entropia da política no estado <InlineMath math="s" />, e{' '}
          <InlineMath math="\alpha > 0" /> é a temperatura que controla o
          balanço recompensa/entropia. Maximizar entropia incentiva a política a
          explorar acções diversas — a não colapsar numa única acção
          determinística.
        </p>

        <h3 style={S.h3}>Reparametrização para Políticas Estocásticas</h3>
        <p style={S.p}>
          Para políticas contínuas, SAC usa o reparametrization trick: em vez de
          amostrar
          <InlineMath math=" a \sim \pi_\theta(\cdot|s)" /> directamente (o que
          não é diferenciável), escreve-se a acção como função determinística de
          ruído externo:
        </p>
        <div style={S.math}>
          <BlockMath math="a_t = f_\theta(\varepsilon_t; s_t), \quad \varepsilon_t \sim \mathcal{N}(0, I)" />
        </div>
        <p style={S.p}>
          Tipicamente{' '}
          <InlineMath math="f_\theta(\varepsilon, s) = \tanh(\mu_\theta(s) + \sigma_\theta(s) \odot \varepsilon)" />
          , que garante que a acção fica no intervalo{' '}
          <InlineMath math="[-1, 1]" />. O log-prob da política é então:
        </p>
        <div style={S.math}>
          <BlockMath math="\log \pi_\theta(a|s) = \log \mathcal{N}(f_\theta^{-1}(a);0,I) - \sum_i \log(1 - a_i^2)" />
        </div>

        <h3 style={S.h3}>Automatic Entropy Tuning</h3>
        <p style={S.p}>
          O parâmetro <InlineMath math="\alpha" /> é crítico mas difícil de
          tunar manualmente. SAC resolve isto aprendendo{' '}
          <InlineMath math="\alpha" /> automaticamente, ajustando-o para manter
          uma entropia alvo <InlineMath math="\bar{\mathcal{H}}" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\min_\alpha\; \mathbb{E}_{a_t\sim\pi_t}\!\bigl[-\alpha \log\pi_t(a_t|s_t) - \alpha\bar{\mathcal{H}}\bigr]" />
        </div>
        <p style={S.p}>
          Por defeito,{' '}
          <InlineMath math="\bar{\mathcal{H}} = -\dim(\mathcal{A})" /> (negativo
          da dimensão do espaço de acção). Isto elimina completamente a
          necessidade de tunagem manual de <InlineMath math="\alpha" />.
        </p>

        <h3 style={S.h3}>
          Porquê SAC é o Algoritmo de Referência para Controlo Contínuo
        </h3>
        <div style={S.highlight}>
          <ul style={{ ...S.ul, marginTop: '0.4rem' }}>
            <li style={S.li}>
              <strong>Off-policy com replay buffer:</strong> usa todas as
              experiências passadas — muito eficiente em amostras
            </li>
            <li style={S.li}>
              <strong>Exploração intrínseca:</strong> a entropia é parte do
              objectivo — sem ruído externo necessário
            </li>
            <li style={S.li}>
              <strong>Estável:</strong> twin critics (herdados de TD3) +
              actualização suave de targets
            </li>
            <li style={S.li}>
              <strong>Auto-tuning de α:</strong> apenas um hiperparâmetro menos
              para tunar
            </li>
            <li style={S.li}>
              <strong>Política estocástica:</strong> naturalmente evita colapso
              em modos sub-óptimos
            </li>
            <li style={S.li}>
              <strong>Desempenho:</strong> supera DDPG e TD3 na maioria dos
              benchmarks MuJoCo
            </li>
          </ul>
        </div>
        <div style={S.note}>
          SAC é hoje o ponto de partida recomendado para qualquer problema de
          controlo contínuo. SAC + HER (Hindsight Experience Replay) é o par
          standard para robótica de manipulação.
        </div>
      </div>

    </div>
  );
}
