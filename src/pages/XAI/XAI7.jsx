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
  p: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    lineHeight: 1.8,
    marginBottom: '1rem',
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
    verticalAlign: 'top',
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
  mathBlock: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 10,
    padding: '1.25rem',
    margin: '1.5rem 0',
    textAlign: 'center',
    overflowX: 'auto',
  },
  svgWrap: { margin: '1.5rem 0', overflowX: 'auto' },
  pill: {
    display: 'inline-block',
    padding: '0.2rem 0.6rem',
    borderRadius: 12,
    fontSize: '0.78rem',
    fontWeight: 600,
    marginRight: '0.4rem',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 10,
    padding: '1rem',
    margin: '1rem 0',
  },
  math: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 10,
    padding: '1.25rem',
    margin: '1.5rem 0',
    textAlign: 'center',
    overflowX: 'auto',
  },
};

/* ─── SVG 1: Decision Boundary + Counterfactual ──────────────────────── */
function DecisionBoundary() {
  return (
    <div style={S.svgWrap}>
      <svg
        viewBox="0 0 560 320"
        width="100%"
        style={{ maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        <defs>
          <marker
            id="arrTeal"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>
        {/* Axes */}
        <line
          x1={50}
          y1={280}
          x2={510}
          y2={280}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <line
          x1={50}
          y1={280}
          x2={50}
          y2={30}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <text
          x={280}
          y={305}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-secondary)"
        >
          Feature 1 (rendimento)
        </text>
        <text
          x={20}
          y={160}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-secondary)"
          transform="rotate(-90,20,160)"
        >
          Feature 2 (histórico crédito)
        </text>

        {/* Rejected region (light red) */}
        <rect
          x={51}
          y={31}
          width={280}
          height={248}
          fill="rgba(74,158,237,0.04)"
        />
        {/* Approved region (light green) */}
        <rect
          x={331}
          y={31}
          width={178}
          height={248}
          fill="rgba(74,158,237,0.08)"
        />

        {/* Decision boundary */}
        <line
          x1={330}
          y1={30}
          x2={330}
          y2={280}
          stroke="var(--text-secondary)"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
        <text
          x={330}
          y={22}
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
          fontWeight="600"
        >
          Fronteira de Decisão
        </text>

        {/* Scatter points — rejected side */}
        {[
          [110, 230],
          [140, 180],
          [160, 240],
          [200, 210],
          [90, 190],
          [170, 260],
          [120, 150],
          [200, 170],
          [250, 230],
          [280, 210],
          [240, 180],
          [300, 250],
        ].map(([x, y], i) => (
          <circle
            key={`r${i}`}
            cx={x}
            cy={y}
            r={5}
            fill="rgba(74,158,237,0.10)"
            stroke="#4a9eed"
            strokeWidth="1"
          />
        ))}
        {/* Scatter points — approved side */}
        {[
          [370, 180],
          [400, 130],
          [430, 200],
          [460, 160],
          [380, 240],
          [420, 110],
          [450, 230],
          [480, 150],
          [350, 150],
        ].map(([x, y], i) => (
          <circle
            key={`a${i}`}
            cx={x}
            cy={y}
            r={5}
            fill="rgba(74,158,237,0.5)"
            stroke="#4a9eed"
            strokeWidth="1"
          />
        ))}

        {/* Original instance (red X) */}
        <g transform="translate(260,195)">
          <line
            x1={-8}
            y1={-8}
            x2={8}
            y2={8}
            stroke="#4a9eed"
            strokeWidth="3"
          />
          <line
            x1={8}
            y1={-8}
            x2={-8}
            y2={8}
            stroke="#4a9eed"
            strokeWidth="3"
          />
        </g>
        <text
          x={240}
          y={173}
          textAnchor="middle"
          fontSize="10"
          fill="#4a9eed"
          fontWeight="700"
        >
          x (original)
        </text>

        {/* Counterfactual (green check) */}
        <circle
          cx={360}
          cy={195}
          r={9}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />
        <text
          x={360}
          y={200}
          textAnchor="middle"
          fontSize="13"
          fill="#4a9eed"
          fontWeight="700"
        >
          ✓
        </text>
        <text
          x={360}
          y={183}
          textAnchor="middle"
          fontSize="10"
          fill="#4a9eed"
          fontWeight="700"
        >
          x' (contrafactual)
        </text>

        {/* Arrow from original to counterfactual */}
        <line
          x1={272}
          y1={195}
          x2={345}
          y2={195}
          stroke={color}
          strokeWidth="2"
          markerEnd="url(#arrTeal)"
          fill="none"
        />
        <text
          x={308}
          y={210}
          textAnchor="middle"
          fontSize="9"
          fill={color}
          fontWeight="600"
        >
          distância mínima
        </text>

        {/* Labels */}
        <text
          x={190}
          y={55}
          textAnchor="middle"
          fontSize="11"
          fill="#4a9eed"
          fontWeight="600"
        >
          Negado
        </text>
        <text
          x={420}
          y={55}
          textAnchor="middle"
          fontSize="11"
          fill="#4a9eed"
          fontWeight="600"
        >
          Aprovado
        </text>
      </svg>
    </div>
  );
}

/* ─── SVG 2: 2×2 Good vs Bad Counterfactual Properties ─────────────── */
function PropertyGrid() {
  const cw = 250,
    ch = 170,
    gap = 10,
    pad = 10;
  const x2 = pad + cw + gap,
    y2 = pad + ch + gap;
  return (
    <div style={S.svgWrap}>
      <svg
        viewBox="0 0 540 380"
        width="100%"
        style={{ maxWidth: 540, display: 'block', margin: '0 auto' }}
      >
        <defs>
          <marker
            id="arrTeal2"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>

        {/* Grid dividers */}
        <line
          x1={pad + cw + gap / 2}
          y1={0}
          x2={pad + cw + gap / 2}
          y2={380}
          stroke="var(--card-border)"
          strokeWidth="1.5"
        />
        <line
          x1={0}
          y1={pad + ch + gap / 2}
          x2={540}
          y2={pad + ch + gap / 2}
          stroke="var(--card-border)"
          strokeWidth="1.5"
        />

        {/* Cell 1 — top-left: Validade + Proximidade */}
        <rect
          x={pad}
          y={pad}
          width={cw}
          height={ch}
          rx={8}
          fill="var(--bg-secondary)"
          stroke="rgba(74,158,237,0.4)"
          strokeWidth="1.5"
        />
        <text
          x={pad + cw / 2}
          y={pad + 18}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#4a9eed"
        >
          Validade + Proximidade
        </text>
        <line
          x1={pad + 90}
          y1={pad + 26}
          x2={pad + 90}
          y2={pad + ch - 10}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          strokeDasharray="5 3"
        />
        <g transform={`translate(${pad + 72},${pad + 90})`}>
          <line
            x1={-6}
            y1={-6}
            x2={6}
            y2={6}
            stroke="#4a9eed"
            strokeWidth="2.5"
          />
          <line
            x1={6}
            y1={-6}
            x2={-6}
            y2={6}
            stroke="#4a9eed"
            strokeWidth="2.5"
          />
        </g>
        <circle
          cx={pad + 110}
          cy={pad + 90}
          r={7}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2"
        />
        <text
          x={pad + 110}
          y={pad + 94}
          textAnchor="middle"
          fontSize="11"
          fill="#4a9eed"
        >
          ✓
        </text>
        <line
          x1={pad + 80}
          y1={pad + 90}
          x2={pad + 101}
          y2={pad + 90}
          stroke={color}
          strokeWidth="1.8"
          markerEnd="url(#arrTeal2)"
          fill="none"
        />
        <text
          x={pad + cw / 2}
          y={pad + ch - 10}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
        >
          Próximo e válido ✓
        </text>

        {/* Cell 2 — top-right: Esparsidade + Accionabilidade */}
        <rect
          x={x2}
          y={pad}
          width={cw}
          height={ch}
          rx={8}
          fill="var(--bg-secondary)"
          stroke="rgba(74,158,237,0.4)"
          strokeWidth="1.5"
        />
        <text
          x={x2 + cw / 2}
          y={pad + 18}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#4a9eed"
        >
          Esparsidade + Accionabilidade
        </text>
        <text
          x={x2 + 14}
          y={pad + 44}
          fontSize="9"
          fill="var(--text-secondary)"
        >
          Antes: rendimento=1500, dívida=8000
        </text>
        <text
          x={x2 + 14}
          y={pad + 58}
          fontSize="9"
          fill="var(--text-secondary)"
        >
          idade=25, contratos=1
        </text>
        <text
          x={x2 + 14}
          y={pad + 78}
          fontSize="9"
          fill={color}
          fontWeight="600"
        >
          Depois: rendimento=2100
        </text>
        <text
          x={x2 + 14}
          y={pad + 92}
          fontSize="9"
          fill={color}
          fontWeight="600"
        >
          ← só 1 feature mudou
        </text>
        <text
          x={x2 + 14}
          y={pad + 110}
          fontSize="9"
          fill="var(--text-secondary)"
        >
          dívida ✓ idade ✓ contratos ✓
        </text>
        <text
          x={x2 + cw / 2}
          y={pad + ch - 10}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
        >
          Esparsidade máxima: 1/4 features ✓
        </text>

        {/* Cell 3 — bottom-left: Sem Validade */}
        <rect
          x={pad}
          y={y2}
          width={cw}
          height={ch}
          rx={8}
          fill="var(--bg-secondary)"
          stroke="rgba(74,158,237,0.2)"
          strokeWidth="1.5"
        />
        <text
          x={pad + cw / 2}
          y={y2 + 18}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#4a9eed"
        >
          Sem Validade
        </text>
        <line
          x1={pad + 90}
          y1={y2 + 26}
          x2={pad + 90}
          y2={y2 + ch - 10}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          strokeDasharray="5 3"
        />
        <g transform={`translate(${pad + 72},${y2 + 90})`}>
          <line
            x1={-6}
            y1={-6}
            x2={6}
            y2={6}
            stroke="#4a9eed"
            strokeWidth="2.5"
          />
          <line
            x1={6}
            y1={-6}
            x2={-6}
            y2={6}
            stroke="#4a9eed"
            strokeWidth="2.5"
          />
        </g>
        <circle
          cx={pad + 56}
          cy={y2 + 90}
          r={7}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2"
        />
        <text
          x={pad + 56}
          y={y2 + 94}
          textAnchor="middle"
          fontSize="11"
          fill="#4a9eed"
        >
          ?
        </text>
        <text
          x={pad + cw / 2}
          y={y2 + ch - 10}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
        >
          Não cruza a fronteira ✗
        </text>

        {/* Cell 4 — bottom-right: Não Accionável */}
        <rect
          x={x2}
          y={y2}
          width={cw}
          height={ch}
          rx={8}
          fill="var(--bg-secondary)"
          stroke="rgba(74,158,237,0.2)"
          strokeWidth="1.5"
        />
        <text
          x={x2 + cw / 2}
          y={y2 + 18}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#4a9eed"
        >
          Não Accionável
        </text>
        <text x={x2 + 14} y={y2 + 44} fontSize="9" fill="var(--text-secondary)">
          Antes: rendimento=1500, idade=25, raça=X
        </text>
        <text
          x={x2 + 14}
          y={y2 + 64}
          fontSize="9"
          fill="#4a9eed"
          fontWeight="600"
        >
          Depois: idade=18 ✗ raça=Y ✗
        </text>
        <text x={x2 + 14} y={y2 + 82} fontSize="9" fill="var(--text-secondary)">
          rendimento=1500 (sem mudança)
        </text>
        <text
          x={x2 + cw / 2}
          y={y2 + ch - 10}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
        >
          Features imutáveis alteradas ✗
        </text>
      </svg>
    </div>
  );
}

/* ─── SVG 3: DiCE — 3 Diverse Counterfactuals ───────────────────────── */
function DiceSVG() {
  return (
    <div style={S.svgWrap}>
      <svg
        viewBox="0 0 560 300"
        width="100%"
        style={{ maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        <defs>
          <marker
            id="arrBlue"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
          <marker
            id="arrOrange"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
          <marker
            id="arrPurple"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1={50}
          y1={260}
          x2={510}
          y2={260}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <line
          x1={50}
          y1={260}
          x2={50}
          y2={30}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <text
          x={280}
          y={283}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-secondary)"
        >
          Feature A
        </text>
        <text
          x={22}
          y={150}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-secondary)"
          transform="rotate(-90,22,150)"
        >
          Feature B
        </text>

        {/* Regions */}
        <rect
          x={51}
          y={31}
          width={200}
          height={228}
          fill="rgba(74,158,237,0.04)"
        />
        <rect
          x={251}
          y={31}
          width={258}
          height={228}
          fill="rgba(74,158,237,0.08)"
        />
        <line
          x1={250}
          y1={31}
          x2={250}
          y2={260}
          stroke="var(--text-secondary)"
          strokeWidth="2"
          strokeDasharray="7 4"
        />
        <text
          x={150}
          y={50}
          textAnchor="middle"
          fontSize="10"
          fill="#4a9eed"
          fontWeight="600"
        >
          Negado
        </text>
        <text
          x={380}
          y={50}
          textAnchor="middle"
          fontSize="10"
          fill="#4a9eed"
          fontWeight="600"
        >
          Aprovado
        </text>

        {/* Original instance */}
        <g transform="translate(170,160)">
          <line
            x1={-9}
            y1={-9}
            x2={9}
            y2={9}
            stroke="#4a9eed"
            strokeWidth="3"
          />
          <line
            x1={9}
            y1={-9}
            x2={-9}
            y2={9}
            stroke="#4a9eed"
            strokeWidth="3"
          />
        </g>
        <text
          x={170}
          y={147}
          textAnchor="middle"
          fontSize="10"
          fill="#4a9eed"
          fontWeight="700"
        >
          x (original)
        </text>

        {/* Counterfactual 1 (blue) — top path */}
        <path
          d="M 179,155 Q 240,100 290,110"
          stroke="#4a9eed"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 3"
          markerEnd="url(#arrBlue)"
        />
        <circle
          cx={295}
          cy={110}
          r={8}
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="2"
        />
        <text x={295} y={114} textAnchor="middle" fontSize="11" fill="#4a9eed">
          ✓
        </text>
        <text x={320} y={98} fontSize="9" fill="#4a9eed" fontWeight="600">
          CF₁: A↑ muito, B↑
        </text>

        {/* Counterfactual 2 (orange) — middle path */}
        <path
          d="M 182,160 L 270,160"
          stroke="#4a9eed"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 3"
          markerEnd="url(#arrOrange)"
        />
        <circle
          cx={275}
          cy={160}
          r={8}
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="2"
        />
        <text x={275} y={164} textAnchor="middle" fontSize="11" fill="#4a9eed">
          ✓
        </text>
        <text x={310} y={155} fontSize="9" fill="#4a9eed" fontWeight="600">
          CF₂: só A↑
        </text>

        {/* Counterfactual 3 (purple) — bottom path */}
        <path
          d="M 176,168 Q 230,215 285,210"
          stroke="#4a9eed"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 3"
          markerEnd="url(#arrPurple)"
        />
        <circle
          cx={290}
          cy={210}
          r={8}
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="2"
        />
        <text x={290} y={214} textAnchor="middle" fontSize="11" fill="#4a9eed">
          ✓
        </text>
        <text x={322} y={225} fontSize="9" fill="#4a9eed" fontWeight="600">
          CF₃: A↑ pouco, B↓
        </text>

        {/* Diversity brace */}
        <text
          x={400}
          y={165}
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          ← 3 contrafactuais
        </text>
        <text
          x={400}
          y={178}
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          diversos entre si
        </text>
      </svg>
    </div>
  );
}

/* ─── SVG 4: FACE — Data Manifold Path ──────────────────────────────── */
function FaceSVG() {
  return (
    <div style={S.svgWrap}>
      <svg
        viewBox="0 0 560 300"
        width="100%"
        style={{ maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        <defs>
          <marker
            id="arrRed2"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
          <marker
            id="arrTeal3"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>

        {/* Background */}
        <rect
          x={30}
          y={20}
          width={500}
          height={260}
          rx={10}
          fill="var(--bg-secondary)"
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />

        {/* Data cluster — left side (rejected) */}
        {[
          [100, 200],
          [115, 180],
          [130, 210],
          [90, 185],
          [145, 195],
          [108, 165],
          [135, 175],
        ].map(([x, y], i) => (
          <circle
            key={`cl${i}`}
            cx={x}
            cy={y}
            r={6}
            fill="rgba(74,158,237,0.10)"
            stroke="#4a9eed"
            strokeWidth="1"
          />
        ))}

        {/* Data cluster — bridge/middle */}
        {[
          [200, 175],
          [215, 160],
          [230, 170],
          [245, 155],
          [260, 165],
          [275, 155],
          [290, 160],
        ].map(([x, y], i) => (
          <circle
            key={`cm${i}`}
            cx={x}
            cy={y}
            r={6}
            fill="rgba(74,158,237,0.10)"
            stroke={color}
            strokeWidth="1"
          />
        ))}

        {/* Data cluster — right side (approved) */}
        {[
          [360, 140],
          [375, 120],
          [390, 145],
          [405, 130],
          [420, 140],
          [410, 160],
          [380, 165],
        ].map(([x, y], i) => (
          <circle
            key={`cr${i}`}
            cx={x}
            cy={y}
            r={6}
            fill="rgba(74,158,237,0.35)"
            stroke="#4a9eed"
            strokeWidth="1"
          />
        ))}

        {/* FACE path — follows data density */}
        <path
          d="M 115,190 Q 160,180 215,165 Q 250,155 280,158 Q 320,155 365,138"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="6 3"
          markerEnd="url(#arrTeal3)"
        />

        {/* Wachter direct line — crosses empty space */}
        <line
          x1={115}
          y1={190}
          x2={365}
          y2={138}
          stroke="#075985"
          strokeWidth="2"
          strokeDasharray="4 4"
          markerEnd="url(#arrRed2)"
        />

        {/* Empty space region */}
        <ellipse
          cx={240}
          cy={240}
          rx={60}
          ry={30}
          fill="rgba(0,0,0,0.04)"
          stroke="var(--card-border)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <text
          x={240}
          y={244}
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          região vazia (sem dados)
        </text>

        {/* Labels */}
        <g transform="translate(115,190)">
          <line
            x1={-7}
            y1={-7}
            x2={7}
            y2={7}
            stroke="#4a9eed"
            strokeWidth="2.5"
          />
          <line
            x1={7}
            y1={-7}
            x2={-7}
            y2={7}
            stroke="#4a9eed"
            strokeWidth="2.5"
          />
        </g>
        <text
          x={115}
          y={150}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
          fontWeight="700"
        >
          original
        </text>

        <circle
          cx={365}
          cy={138}
          r={8}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />
        <text x={365} y={142} textAnchor="middle" fontSize="11" fill="#4a9eed">
          ✓
        </text>
        <text
          x={365}
          y={105}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
          fontWeight="700"
        >
          alvo
        </text>

        {/* Legend */}
        <line
          x1={40}
          y1={270}
          x2={65}
          y2={270}
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="6 3"
        />
        <text x={70} y={274} fontSize="9" fill={color} fontWeight="600">
          FACE (manifold)
        </text>
        <line
          x1={175}
          y1={270}
          x2={200}
          y2={270}
          stroke="#075985"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <text x={205} y={274} fontSize="9" fill="#075985" fontWeight="600">
          Wachter (directo)
        </text>
      </svg>
    </div>
  );
}

/* ─── SVG 5: Influence Functions — Training Data ────────────────────── */
function InfluenceSVG() {
  const trainPoints = [
    [90, 80],
    [130, 110],
    [110, 160],
    [150, 70],
    [80, 200],
    [170, 140],
    [200, 90],
    [220, 170],
    [240, 80],
    [180, 200],
    [260, 140],
    [300, 90],
    [320, 170],
    [280, 200],
    [340, 110],
    [360, 70],
    [380, 150],
    [400, 90],
    [420, 200],
    [440, 120],
  ];
  const influential = [
    { idx: 2, score: '+0.82', color: '#4a9eed' },
    { idx: 7, score: '+0.61', color: '#4a9eed' },
    { idx: 14, score: '-0.44', color: '#4a9eed' },
  ];
  const testPoint = { x: 290, y: 240 };

  return (
    <div style={S.svgWrap}>
      <svg
        viewBox="0 0 560 290"
        width="100%"
        style={{ maxWidth: 560, display: 'block', margin: '0 auto' }}
      >
        <defs>
          <marker
            id="arrInf1"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
          <marker
            id="arrInf2"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
          <marker
            id="arrInf3"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed" />
          </marker>
        </defs>

        {/* Training points */}
        {trainPoints.map(([x, y], i) => {
          const inf = influential.find((f) => f.idx === i);
          if (inf) return null;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={5}
              fill="rgba(74,158,237,0.12)"
              stroke="var(--text-secondary)"
              strokeWidth="1"
            />
          );
        })}

        {/* Influential points */}
        <circle
          cx={trainPoints[2][0]}
          cy={trainPoints[2][1]}
          r={10}
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />
        <text
          x={trainPoints[2][0]}
          y={trainPoints[2][1] + 4}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
          fontWeight="700"
        ></text>
        <text
          x={trainPoints[2][0] - 14}
          y={trainPoints[2][1] - 14}
          fontSize="8"
          fill="#4a9eed"
          fontWeight="600"
        >
          +0.82
        </text>

        <circle
          cx={trainPoints[7][0]}
          cy={trainPoints[7][1]}
          r={10}
          fill="rgba(74,158,237,0.2)"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />
        <text
          x={trainPoints[7][0]}
          y={trainPoints[7][1] + 4}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
          fontWeight="700"
        ></text>
        <text
          x={trainPoints[7][0] + 12}
          y={trainPoints[7][1] - 14}
          fontSize="8"
          fill="#4a9eed"
          fontWeight="600"
        >
          +0.61
        </text>

        <circle
          cx={trainPoints[14][0]}
          cy={trainPoints[14][1]}
          r={10}
          fill="rgba(7,89,133,0.20)"
          stroke="#075985"
          strokeWidth="2.5"
        />
        <text
          x={trainPoints[14][0]}
          y={trainPoints[14][1] + 4}
          textAnchor="middle"
          fontSize="9"
          fill="#075985"
          fontWeight="700"
        ></text>
        <text
          x={trainPoints[14][0] + 12}
          y={trainPoints[14][1] - 14}
          fontSize="8"
          fill="#075985"
          fontWeight="600"
        >
          -0.44
        </text>

        {/* Test point */}
        <circle
          cx={testPoint.x}
          cy={testPoint.y}
          r={12}
          fill="rgba(74,158,237,0.10)"
          stroke={color}
          strokeWidth="2.5"
        />
        <text
          x={testPoint.x}
          y={testPoint.y + 5}
          textAnchor="middle"
          fontSize="12"
          fill={color}
          fontWeight="700"
        >
          T
        </text>
        <text
          x={testPoint.x}
          y={testPoint.y + 26}
          textAnchor="middle"
          fontSize="9"
          fill={color}
          fontWeight="600"
        >
          ponto de teste
        </text>

        {/* Influence lines */}
        <line
          x1={trainPoints[2][0]}
          y1={trainPoints[2][1] + 10}
          x2={testPoint.x}
          y2={testPoint.y - 12}
          stroke="#4a9eed"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          markerEnd="url(#arrInf1)"
        />
        <line
          x1={trainPoints[7][0]}
          y1={trainPoints[7][1] + 10}
          x2={testPoint.x}
          y2={testPoint.y - 12}
          stroke="#4a9eed"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          markerEnd="url(#arrInf2)"
        />
        <line
          x1={trainPoints[14][0]}
          y1={trainPoints[14][1] + 10}
          x2={testPoint.x}
          y2={testPoint.y - 12}
          stroke="#4a9eed"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          markerEnd="url(#arrInf3)"
        />

        {/* Legend */}
        <text
          x={280}
          y={14}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-secondary)"
          fontWeight="600"
        >
          Top-3 exemplos de treino mais influentes para a predição de T
        </text>
        <circle
          cx={40}
          cy={278}
          r={6}
          fill="rgba(74,158,237,0.12)"
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />
        <text x={50} y={282} fontSize="9" fill="var(--text-secondary)">
          treino (neutro)
        </text>
        <circle
          cx={140}
          cy={278}
          r={6}
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="1.5"
        />
        <text x={150} y={282} fontSize="9" fill="#4a9eed">
          influência positiva
        </text>
        <circle
          cx={260}
          cy={278}
          r={6}
          fill="rgba(7,89,133,0.20)"
          stroke="#075985"
          strokeWidth="1.5"
        />
        <text x={270} y={282} fontSize="9" fill="#075985">
          influência negativa
        </text>
      </svg>
    </div>
  );
}

/* ─── SVG 6: Algorithmic Recourse Pipeline ───────────────────────────── */
function RecoursePipeline() {
  const steps = [
    {
      label: 'Estado Actual',
      sub: 'Rendimento: 1.500€\nDívida: 8.000€\nHistórico: 2 anos',
      x: 20,
      color: 'var(--text-secondary)',
      fill: 'var(--bg-secondary)',
      stroke: 'var(--card-border)',
    },
    {
      label: 'Passo 1',
      sub: 'Aumentar rendimento\nem 500€/mês',
      x: 163,
      color: '#4a9eed',
      fill: 'var(--bg-secondary)',
      stroke: '#4a9eed',
    },
    {
      label: 'Passo 2',
      sub: 'Após 3 meses:\nPagar 3.000€ dívida',
      x: 306,
      color: '#4a9eed',
      fill: 'var(--bg-secondary)',
      stroke: '#4a9eed',
    },
    {
      label: 'Estado Alvo',
      sub: 'Rendimento: 2.000€\nDívida: 5.000€\nDecisão: APROVADO',
      x: 449,
      color: '#4a9eed',
      fill: 'rgba(74,158,237,0.20)',
      stroke: '#4a9eed',
    },
  ];

  return (
    <div style={S.svgWrap}>
      <svg
        viewBox="0 0 580 220"
        width="100%"
        style={{ maxWidth: 580, display: 'block', margin: '0 auto' }}
      >
        <defs>
          <marker
            id="arrRecourse"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {steps.map((s, i) => (
          <g key={i}>
            {/* Box */}
            <rect
              x={s.x}
              y={30}
              width={110}
              height={100}
              rx={8}
              fill={s.fill}
              stroke={s.stroke}
              strokeWidth="2"
            />
            <text
              x={s.x + 55}
              y={50}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={s.color}
            >
              {s.label}
            </text>
            {s.sub.split('\n').map((line, j) => (
              <text
                key={j}
                x={s.x + 55}
                y={68 + j * 15}
                textAnchor="middle"
                fontSize="9"
                fill="var(--text-primary)"
              >
                {line}
              </text>
            ))}

            {/* Arrow to next */}
            {i < steps.length - 1 && (
              <line
                x1={s.x + 112}
                y1={80}
                x2={steps[i + 1].x - 2}
                y2={80}
                stroke="var(--text-secondary)"
                strokeWidth="1.8"
                markerEnd="url(#arrRecourse)"
              />
            )}
          </g>
        ))}

        {/* Cost annotation */}
        <text
          x={290}
          y={155}
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
          fontWeight="600"
        >
          Custo total do recourse: esforço × viabilidade
        </text>

        {/* Causal arrows below */}
        <text x={290} y={175} textAnchor="middle" fontSize="9" fill={color}>
          ← Sequência causal: cada acção desencadeia mudanças no SCM →
        </text>

        {/* Checkmark at end */}
        <text x={504} y={148} textAnchor="middle" fontSize="20" fill="#4a9eed">
          ✓
        </text>
        <text
          x={504}
          y={165}
          textAnchor="middle"
          fontSize="9"
          fill="#4a9eed"
          fontWeight="600"
        >
          Aprovado!
        </text>
      </svg>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────── */
export default function XAI7() {
  return (
    <div style={S.page}>
      <Link to="/xai" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Explainable AI
      </Link>

      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Counterfactual Explanations & Algorithmic Recourse</h1>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O que são Counterfactuals?</h2>
        <p style={S.p}>
          Uma <strong>explicação contrafactual</strong> responde à pergunta:{' '}
          <em>
            "Qual é a mudança mínima nas features de entrada que inverteria a
            predição do modelo?"
          </em>{' '}
          Em vez de decompor a contribuição de cada feature para a predição
          actual (como o SHAP), um contrafactual encontra um ponto alternativo
          no espaço de features — tão próximo quanto possível do original — que
          recebe uma predição diferente.
        </p>
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.6rem', fontWeight: 700 }}>
            SHAP vs. Contrafactuais — Perspectivas Complementares
          </p>
          <table style={{ ...S.table, marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={S.th}>Abordagem</th>
                <th style={S.th}>Pergunta respondida</th>
                <th style={S.th}>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>
                  <strong>SHAP</strong>
                </td>
                <td style={S.td}>"Porque foi negado o crédito?"</td>
                <td style={S.td}>
                  "O rendimento baixo contribuiu −0.42 para a decisão."
                </td>
              </tr>
              <tr>
                <td style={S.td}>
                  <strong>Contrafactual</strong>
                </td>
                <td style={S.td}>"O que mudar para ser aprovado?"</td>
                <td style={S.td}>
                  "Se o rendimento fosse 2.100€/mês, seria aprovado."
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Wachter, Mittelstadt e Russell (2017) formalizaram os contrafactuais
          para ML no paper
          <em> "Counterfactual Explanations Without Opening the Black Box"</em>.
          A formulação de optimização encontra um ponto{' '}
          <InlineMath math={"x'"} /> que: (1) recebe a predição-alvo{' '}
          <InlineMath math={"y'"} />; e (2) está o mais próximo possível do
          input original <InlineMath math={'x'} />, controlando o trade-off com
          o parâmetro <InlineMath math={'\\lambda'} />:
        </p>
        <div style={S.mathBlock}>
          <BlockMath
            math={
              "\\arg\\min_{x'} \\; \\lambda \\cdot (\\hat{f}(x') - y')^2 + d(x, x')"
            }
          />
        </div>
        <p style={S.p}>
          O primeiro termo força <InlineMath math={"x'"} /> a receber a predição
          desejada <InlineMath math={"y'"} />; o segundo termo{' '}
          <InlineMath math={"d(x, x')"} /> é uma métrica de distância
          (frequentemente a distância de Gower, que lida com features mistas
          numéricas e categóricas) que penaliza desvios grandes do original. O
          parâmetro <InlineMath math={'\\lambda'} /> controla o trade-off:
          <InlineMath math={'\\lambda'} /> alto força mais a validade;{' '}
          <InlineMath math={'\\lambda'} /> baixo força mais a proximidade.
        </p>
        <DecisionBoundary />
        <div style={S.note}>
          A distância de Gower generaliza a noção de distância para features
          mistas: para features numéricas usa a diferença absoluta normalizada;
          para categóricas usa 0 (igual) ou 1 (diferente). Isto é essencial em
          aplicações reais onde o espaço de features inclui idade, rendimento,
          estado civil, etc.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>
          2. Propriedades de uma Boa Explicação Contrafactual
        </h2>
        <p style={S.p}>
          Não basta que um contrafactual mude a predição — uma explicação
          contrafactual de qualidade satisfaz cinco propriedades fundamentais.
          Na prática, existe tensão entre estas propriedades e os métodos
          modernos tentam equilibrá-las explicitamente.
        </p>

        <ul style={{ margin: 0, paddingLeft: '1.4rem', lineHeight: 2.2 }}>
          <li>
            <strong style={{ color }}>Validade:</strong> O contrafactual{' '}
            <InlineMath math={"x'"} /> deve efectivamente obter a predição-alvo{' '}
            <InlineMath math={"\\hat{f}(x') = y'"} />. Um contrafactual inválido
            é inútil — sugere uma acção que não produziria o resultado desejado.
          </li>
          <li>
            <strong style={{ color }}>Proximidade:</strong>{' '}
            <InlineMath math={"x'"} /> deve estar próximo de{' '}
            <InlineMath math={'x'} /> — idealmente tão próximo quanto possível.
            Um contrafactual que requer mudanças radicais pode ser válido mas
            impraticável.
          </li>
          <li>
            <strong style={{ color }}>Esparsidade:</strong> Idealmente, apenas
            um pequeno número de features deve ser alterado. Mudar 20 features
            em simultâneo não fornece uma explicação útil — o utilizador não
            sabe por onde começar.
          </li>
          <li>
            <strong style={{ color }}>Diversidade:</strong> Devem existir
            múltiplos contrafactuais alternativos, que exploram diferentes
            combinações de mudanças. Um único caminho pode ser impraticável para
            alguns utilizadores mas outros caminhos podem ser acessíveis.
          </li>
          <li>
            <strong style={{ color }}>Accionabilidade:</strong> As features
            alteradas devem ser <em>mutáveis</em>
            pelo utilizador. Sugerir "mudar a idade" ou "mudar a raça" é
            não-accionável — essas features são imutáveis. As constraints de
            accionabilidade devem ser especificadas pelo domínio.
          </li>
        </ul>

        <PropertyGrid />
        <div style={S.note}>
          Existe uma tensão fundamental entre proximidade e esparsidade: o
          contrafactual mais próximo pode requerer mudanças pequenas em muitas
          features; um contrafactual esparso altera poucas features mas pode ter
          de ir mais longe. O método DiCE (secção seguinte) trata esta tensão
          explicitamente ao gerar múltiplos contrafactuais com diferentes
          trade-offs.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. DiCE — Diverse Counterfactual Explanations</h2>
        <p style={S.p}>
          <strong>DiCE</strong> (Mothilal et al., 2020) resolve o problema de
          gerar <InlineMath math={'k'} /> contrafactuais simultaneamente,
          garantindo que são válidos, próximos <em>e</em> diversos entre si. A
          diversidade é essencial: se todos os contrafactuais sugerem "aumentar
          o rendimento", o utilizador sem essa possibilidade fica sem
          alternativas. O DiCE encontra um conjunto de <InlineMath math={'k'} />{' '}
          contrafactuais
          <InlineMath math={"\\{x'_1, \\ldots, x'_k\\}"} /> que minimiza:
        </p>
        <div style={S.mathBlock}>
          <BlockMath
            math={
              "\\text{DiCE} = \\arg\\min_{\\{x'_1,\\ldots,x'_k\\}} \\sum_i \\text{yloss}(f(x'_i), c) + \\frac{1}{k^2}\\sum_i\\sum_j \\frac{1}{1+d(x'_i, x'_j)}"
            }
          />
        </div>
        <p style={S.p}>
          O primeiro termo (<InlineMath math={'\\text{yloss}'} />) penaliza
          contrafactuais que não obtêm a classe-alvo <InlineMath math={'c'} />.
          O segundo termo penaliza contrafactuais que estão muito próximos uns
          dos outros: quanto menor a distância{' '}
          <InlineMath math={"d(x'_i, x'_j)"} />, maior a penalização — forçando
          assim a diversidade. Este segundo termo tem a estrutura de um
          <strong> determinantal point process (DPP)</strong>, um mecanismo
          probabilístico que favorece conjuntos de pontos bem dispersos.
        </p>
        <DiceSVG />
        <p style={S.p}>
          A <strong>accionabilidade</strong> é implementada através de
          constraints explícitas: o utilizador especifica quais features são
          imutáveis (e.g., <code>age</code>, <code>race</code>, <code>sex</code>
          ) e quais têm limites de variação (e.g., rendimento só pode aumentar,
          não diminuir). O DiCE garante que nenhum contrafactual viola estas
          constraints.
        </p>
        <div style={S.note}>
          O DiCE suporta três backends: <code>random</code> (amostragem
          aleatória com filtragem), <code>genetic</code>
          (algoritmo genético) e <code>gradient</code> (optimização por
          gradiente, requer modelo diferenciável). Para modelos sklearn em
          produção, o método <code>random</code> ou <code>genetic</code> é o
          mais robusto.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>
          4. FACE — Feasible and Actionable Counterfactual Explanations
        </h2>
        <p style={S.p}>
          O método de Wachter et al. tem uma limitação crítica: o contrafactual
          encontrado pode existir numa região do espaço de features sem dados
          reais — uma combinação de valores que é matematicamente possível mas
          empiricamente impossível ou altamente improvável. Por exemplo, sugere
          um rendimento de 4.500€ para alguém com apenas o 9.º ano, num mercado
          onde isso raramente acontece.
        </p>
        <p style={S.p}>
          <strong>FACE</strong> (Poyiadzi et al., 2020) resolve este problema
          construindo um <strong>grafo de densidade</strong> sobre os dados de
          treino e encontrando o caminho mais curto que segue regiões de alta
          densidade — o <em>manifold</em> dos dados. Em vez de um caminho
          directo que pode atravessar o "vazio" entre clusters de dados, o FACE
          segue arestas que ligam pontos com alta densidade conjunta, garantindo
          que cada passo intermédio é plausível.
        </p>
        <FaceSVG />

        <p style={{ margin: '0 0 0.6rem', fontWeight: 700 }}>
          Algoritmo FACE em 3 Passos
        </p>
        <ol
          style={{
            margin: 0,
            paddingLeft: '1.4rem',
            lineHeight: 2.1,
            fontSize: '0.95rem',
            color: 'var(--text-primary)',
          }}
        >
          <li>
            <strong>Construir o grafo:</strong> Para cada par de pontos de
            treino, calcular a densidade conjunta ao longo do segmento que os
            liga. Criar uma aresta se a densidade mínima exceder um limiar{' '}
            <InlineMath math={'\\epsilon'} />.
          </li>
          <li>
            <strong>Pesquisa do caminho mínimo:</strong> Usar Dijkstra ou A*
            para encontrar o caminho de custo mínimo no grafo desde o ponto
            original <InlineMath math={'x'} /> até qualquer ponto com
            predição-alvo <InlineMath math={"y'"} />.
          </li>
          <li>
            <strong>Retornar o contrafactual:</strong> O primeiro ponto no
            caminho com predição <InlineMath math={"y'"} />é o contrafactual
            FACE — garantidamente alcançável por um caminho de passos
            plausíveis.
          </li>
        </ol>

        <div style={S.note}>
          FACE é particularmente importante em domínios onde os dados vivem em
          manifolds de baixa dimensão embedidos em espaços de alta dimensão —
          por exemplo, imagens médicas ou dados financeiros com muitas
          correlações entre features. Um contrafactual que sai do manifold pode
          ser matematicamente válido mas clinicamente impossível.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>
          5. Influence Functions — Atribuição aos Dados de Treino
        </h2>
        <p style={S.p}>
          As <strong>funções de influência</strong> (Koh & Liang, 2017)
          respondem a uma pergunta diferente:
          <em>
            "Quais exemplos do conjunto de treino mais influenciaram esta
            predição específica?"
          </em>{' '}
          Em vez de explicar o modelo pelo espaço de features (como SHAP) ou por
          perturbações do input (como contrafactuais), as funções de influência
          rastreiam a predição até aos dados de treino que a causaram.
        </p>
        <p style={S.p}>
          A influência do exemplo de treino <InlineMath math={'z'} /> sobre a
          perda num ponto de teste
          <InlineMath math={'z_{\\text{test}}'} /> é definida como a mudança na
          perda de teste que ocorreria se <InlineMath math={'z'} /> fosse
          removido do conjunto de treino e o modelo fosse re-treinado. Usando a
          teoria de perturbações de primeira ordem (sem re-treinar de facto):
        </p>
        <div style={S.mathBlock}>
          <BlockMath
            math={
              '\\mathcal{I}_{\\text{up,loss}}(z, z_{\\text{test}}) = -\\nabla_{\\theta} L(z_{\\text{test}}, \\hat{\\theta})^\\top H_{\\hat{\\theta}}^{-1} \\nabla_{\\theta} L(z, \\hat{\\theta})'
            }
          />
        </div>
        <p style={S.p}>
          Onde <InlineMath math={'H_{\\hat{\\theta}}'} /> é a Hessiana da perda
          de treino nos parâmetros óptimos{' '}
          <InlineMath math={'\\hat{\\theta}'} />. O produto de gradientes
          captura a direcção em que o exemplo de treino{' '}
          <InlineMath math={'z'} /> "empurra" os parâmetros, e o inverso da
          Hessiana quantifica como essa mudança nos parâmetros afecta a perda no
          ponto de teste.
        </p>
        <InfluenceSVG />
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>
            Aplicações das Funções de Influência
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.4rem', lineHeight: 2.1 }}>
            <li>
              <strong>Detecção de data poisoning:</strong> Exemplos de treino
              com influência muito alta e negativa podem indicar ataques
              adversariais ao conjunto de treino — dados maliciosamente
              inseridos para degradar o desempenho em casos específicos.
            </li>
            <li>
              <strong>Identificação de dados mal-rotulados:</strong> Se um
              exemplo de treino tem influência muito alta sobre a sua própria
              perda, pode ser um outlier ou ter um label incorrecto.
            </li>
            <li>
              <strong>Atribuição de copyright e proveniência:</strong> Dado um
              output gerado por um modelo de linguagem, as funções de influência
              podem identificar quais documentos do corpus de treino mais
              contribuíram — relevante para questões de copyright e direitos de
              autor.
            </li>
            <li>
              <strong>Data debugging:</strong> Quando um modelo erra
              sistematicamente num subconjunto de inputs, as funções de
              influência ajudam a identificar que dados de treino são
              responsáveis pelo comportamento errático.
            </li>
          </ul>
        </div>
        <div style={S.note}>
          O cálculo de <InlineMath math={'H_{\\hat{\\theta}}^{-1}'} /> é
          computacionalmente caro (<InlineMath math={'O(p^3)'} /> em parâmetros)
          para redes neuronais profundas. Na prática, usam-se aproximações como
          o método de Pearlmutter (produto Hessiana-vector sem materializar a
          Hessiana) ou decomposições de baixo rank. A biblioteca{' '}
          <code>TracIn</code> (Pruthi et al., 2020) oferece uma alternativa mais
          eficiente baseada em gradientes ao longo do treino.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Algorithmic Recourse</h2>
        <p style={S.p}>
          O <strong>algorithmic recourse</strong> vai além da explicação
          contrafactual: não basta identificar
          <em>"o que teria de mudar"</em> — é necessário especificar{' '}
          <em>como chegar lá</em>. O recourse é uma sequência ordenada e
          accionável de mudanças que uma pessoa pode implementar no mundo real
          para obter o resultado desejado de um sistema automatizado (Karimi et
          al., 2020).
        </p>
        <p style={S.p}>
          Um contrafactual pode dizer "se o teu rendimento fosse 2.100€ e a tua
          dívida fosse 5.000€, serias aprovado". O recourse transforma isto numa
          sequência: "primeiro, aumenta o rendimento em 500€/mês; depois de 3
          meses, usa as poupanças para pagar 3.000€ da dívida; nesse momento,
          re-candidata-te."
        </p>
        <RecoursePipeline />

        <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>
          Modelos Causais Estruturais (SCM) para Recourse Causal
        </p>
        <p
          style={{
            margin: '0 0 0.75rem',
            fontSize: '0.95rem',
            color: 'var(--text-primary)',
          }}
        >
          Um problema fundamental do recourse associacional é que as correlações
          nos dados não implicam relações causais. Se "ter mais cartões de
          crédito" está correlacionado com aprovação (porque pessoas com boa
          saúde financeira têm mais crédito), sugerir "abrir mais cartões de
          crédito" é um recourse enganoso — pode melhorar o score sem melhorar a
          solvabilidade real.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: '0.95rem',
            color: 'var(--text-primary)',
          }}
        >
          Os <strong>Structural Causal Models (SCMs)</strong> (Pearl, 2000)
          codificam as relações causais entre variáveis explicitamente. Um
          recourse causal encontra intervenções
          <InlineMath math={'do(X_i = x_i)'} /> que, <em>causalmente</em>,
          produzem o resultado desejado, respeitando a estrutura causal do
          domínio. Por exemplo, num SCM de crédito: rendimento → capacidade de
          poupança → dívida; uma intervenção no rendimento propaga-se
          causalmente para a dívida ao longo do tempo.
        </p>

        <p style={S.p}>
          O <strong>custo do recourse</strong> é uma métrica crítica de
          equidade: se o custo médio de recourse é sistematicamente mais alto
          para determinados grupos demográficos, o sistema cria barreiras
          desiguais — mesmo que as decisões individuais sejam "justas" no
          sentido técnico. Por exemplo, se o recourse para aprovação de crédito
          requer mobilidade geográfica, pode ser proporcionalmente mais difícil
          para famílias monoparentais ou pessoas com deficiência.
        </p>
        <div style={S.note}>
          O framework CARLA (Counterfactual And Recourse LibrAry) de Pawelczyk
          et al. (2021) implementa 11 métodos de contrafactuais e recourse num
          benchmark unificado, permitindo comparar métodos em termos de
          validade, proximidade, esparsidade, tempo de execução e custo de
          recourse. Disponível em <code>github.com/carla-recourse/CARLA</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Limitações e Considerações Éticas</h2>
        <p style={S.p}>
          Os métodos contrafactuais e de recourse têm limitações importantes que
          devem ser compreendidas antes da implementação em sistemas que afectam
          pessoas reais.
        </p>
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>
            Efeito Rashomon — Multiplicidade de Contrafactuais
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
            }}
          >
            Para qualquer instância, existem tipicamente <em>muitos</em>{' '}
            contrafactuais válidos — diferentes combinações de mudanças que
            produzem a predição-alvo. O "efeito Rashomon" (Breiman, 2001)
            aplica-se aqui: a escolha de <em>qual</em> contrafactual apresentar
            ao utilizador é uma decisão editorial com implicações éticas.
            Apresentar sempre o contrafactual mais "fácil" pode privilegiar
            utilizadores já avantajados.
          </p>
        </div>
        <div style={S.highlight}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>
            Gaming das Explicações
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
            }}
          >
            Se os utilizadores têm acesso às explicações contrafactuais, podem
            optimizar as suas submissões para satisfazer as condições da
            explicação sem melhorar efectivamente a sua situação. Um candidato a
            crédito pode "manufacturar" os valores que o modelo usa sem que a
            sua situação financeira real melhore — análogo ao Goodhart's Law.
            Isto é especialmente problemático quando as explicações são
            padronizadas e previsíveis.
          </p>
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Limitação</th>
              <th style={S.th}>Exemplo Concreto</th>
              <th style={S.th}>Mitigação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>Efeito Rashomon</strong>
              </td>
              <td style={S.td}>
                1.000 contrafactuais válidos para a mesma instância; qual
                apresentar?
              </td>
              <td style={S.td}>
                DiCE com diversidade explícita; apresentar múltiplos caminhos
                ordenados por custo e viabilidade
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Gaming adversarial</strong>
              </td>
              <td style={S.td}>
                Candidato abre 5 cartões de crédito para melhorar o score sem
                melhorar solvabilidade
              </td>
              <td style={S.td}>
                Recourse causal (SCM); monitorização de padrões anómalos de
                pedidos pós-explicação
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Custo disparate</strong>
              </td>
              <td style={S.td}>
                Recourse requer mobilidade geográfica, impossível para certas
                famílias
              </td>
              <td style={S.td}>
                Auditar custos médios de recourse por grupo demográfico;
                diversificar opções de recourse
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Causal vs. associacional</strong>
              </td>
              <td style={S.td}>
                "Mudar o código postal" melhora o score mas não a situação real
              </td>
              <td style={S.td}>
                Usar SCMs; validar que features de recourse têm relação causal
                com o outcome
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Infeasibility do manifold</strong>
              </td>
              <td style={S.td}>
                Contrafactual requer rendimento de 8.000€ com habilitações ao
                6.º ano
              </td>
              <td style={S.td}>
                FACE (caminhos no manifold); constraints de plausibilidade
                baseadas em dados reais
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Instabilidade</strong>
              </td>
              <td style={S.td}>
                Pequenas mudanças no input produzem contrafactuais completamente
                diferentes
              </td>
              <td style={S.td}>
                Regularização de estabilidade; clustering de contrafactuais para
                identificar regiões estáveis
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            background: 'rgba(74,158,237,0.10)',
            border: '1px solid rgba(74,158,237,0.10)',
            borderRadius: 8,
            padding: '1rem 1.25rem',
            marginBottom: '1.2rem',
          }}
        >
          <strong style={{ color: '#4a9eed' }}>
            Consideração Ética Central:
          </strong>
          <p
            style={{
              margin: '0.5rem 0 0',
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
            }}
          >
            Fornecer recourse é eticamente distinto de apenas fornecer uma
            explicação. O recourse implica que o sistema automatizado pode ser
            "satisfeito" através de acções específicas — o que cria uma
            responsabilidade adicional para os desenvolvedores de garantir que
            essas acções são genuinamente acessíveis, realistas e equitativas.
            Um sistema que fornece recourse impossível ou desproporcionalmente
            custoso para grupos vulneráveis pode ser mais prejudicial do que um
            sistema sem qualquer explicação.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 8 ── */}
    </div>
  );
}
