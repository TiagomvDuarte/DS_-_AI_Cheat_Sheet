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
  math: {
    background: 'var(--bg-secondary)',
    borderRadius: 10,
    padding: '1.25rem',
    textAlign: 'center',
    margin: '1.5rem 0',
    overflowX: 'auto',
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
    background: `rgba(74,158,237,0.10)`,
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
};

/* ── code examples ─────────────────────────────────────────────────────────── */

const zeroShotEx = `# Zero-shot — apenas instrução, sem exemplos
Classifica o sentimento como Positivo ou Negativo:
"O produto chegou rápido e funciona perfeitamente."

→ Positivo`;

const fewShotEx = `# Few-shot (3-shot)
Texto: "A bateria dura muito pouco." → Negativo
Texto: "Excelente relação qualidade-preço!" → Positivo
Texto: "Entrega demorou 3 semanas." → Negativo

Texto: "O suporte técnico respondeu em minutos." → ?`;

const reactEx = `Thought 1: Preciso de saber a população de Lisboa em 2024.
Action 1: web_search("população Lisboa 2024 INE")
Obs 1: Resultados: ~545 000 hab. (cidade), ~2.9M (AML)

Thought 2: Preciso confirmar o ano dos dados.
Action 2: web_search("INE Lisboa população estimativa 2024")
Obs 2: INE: estimativa provisória 2024 — 547 733 hab.

Thought 3: Tenho dados suficientes para responder.
Answer: Segundo o INE, Lisboa tinha cerca de 547 733
 habitantes em 2024 (estimativa provisória).`;

const palEx = `# PAL — Program-Aided Language Model
Q: Maria tem 3× mais livros que João. João tem 8. Total?

# Código gerado pelo LLM:
joao = 8
maria = 3 * joao # 24
total = joao + maria # 32
print(total) # → 32 ✓`;

const jsonModeEx = `# Structured output / JSON mode
System: Responds ONLY with valid JSON. Schema:
 { "sentimento": "positivo"|"negativo"|"neutro",
 "confianca": 0.0-1.0,
 "motivo": string }

User: "A entrega demorou mas a embalagem estava perfeita."

→ {
 "sentimento": "neutro",
 "confianca": 0.72,
 "motivo": "aspecto negativo (entrega) e positivo (embalagem)"
 }`;

/* ── SVG components ─────────────────────────────────────────────────────────── */

function ShotDiagram() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 740 210" width="100%" style={{ display: 'block' }}>
        {/* Zero-shot box */}
        <rect
          x="10"
          y="10"
          width="330"
          height="190"
          rx="10"
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <text
          x="175"
          y="34"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={color}
        >
          Zero-shot
        </text>

        {/* zero-shot instruction block */}
        <rect
          x="28"
          y="45"
          width="294"
          height="42"
          rx="6"
          fill={`rgba(74,158,237,0.10)`}
          stroke={`rgba(74,158,237,0.10)`}
          strokeWidth="1"
        />
        <text
          x="175"
          y="61"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
          fontWeight="600"
        >
          Instrução
        </text>
        <text
          x="175"
          y="77"
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          "Classifica o sentimento:"
        </text>

        {/* arrow */}
        <line
          x1="175"
          y1="87"
          x2="175"
          y2="108"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          markerEnd="url(#arr)"
        />
        <text
          x="175"
          y="100"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          query
        </text>

        {/* zero-shot input */}
        <rect
          x="28"
          y="110"
          width="294"
          height="36"
          rx="6"
          fill="var(--bg-secondary)"
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />
        <text
          x="175"
          y="132"
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          "O produto funciona perfeitamente."
        </text>

        {/* arrow */}
        <line
          x1="175"
          y1="146"
          x2="175"
          y2="163"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          markerEnd="url(#arr)"
        />

        {/* output */}
        <rect
          x="80"
          y="165"
          width="190"
          height="28"
          rx="6"
          fill={`rgba(74,158,237,0.10)`}
          stroke={color}
          strokeWidth="1"
        />
        <text
          x="175"
          y="183"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={color}
        >
          → Positivo
        </text>

        {/* Few-shot box */}
        <rect
          x="400"
          y="10"
          width="330"
          height="190"
          rx="10"
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <text
          x="565"
          y="34"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={color}
        >
          Few-shot (3-shot)
        </text>

        {/* examples */}
        {[
          { y: 45, label: 'Exemplo 1', val: '"Bateria fraca" → Neg.' },
          { y: 85, label: 'Exemplo 2', val: '"Boa relação" → Pos.' },
          { y: 125, label: 'Exemplo 3', val: '"Entregou tarde" → Neg.' },
        ].map(({ y, label, val }) => (
          <g key={y}>
            <rect
              x="418"
              y={y}
              width="294"
              height="34"
              rx="6"
              fill={`rgba(74,158,237,0.10)`}
              stroke={`rgba(74,158,237,0.10)`}
              strokeWidth="1"
            />
            <text
              x="565"
              y={y + 13}
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill={color}
            >
              {label}
            </text>
            <text
              x="565"
              y={y + 25}
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              {val}
            </text>
          </g>
        ))}

        {/* arrow */}
        <line
          x1="565"
          y1="159"
          x2="565"
          y2="167"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          markerEnd="url(#arr)"
        />

        {/* output */}
        <rect
          x="470"
          y="168"
          width="190"
          height="25"
          rx="6"
          fill={`rgba(74,158,237,0.10)`}
          stroke={color}
          strokeWidth="1"
        />
        <text
          x="565"
          y="184"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={color}
        >
          → Positivo (alta confiança)
        </text>

        <defs>
          <marker
            id="arr"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="var(--text-secondary)" />
          </marker>
        </defs>
      </svg>
      <p
        style={{
          textAlign: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        Zero-shot vs. few-shot: os exemplos no contexto guiam o modelo sobre
        formato e tom.
      </p>
    </div>
  );
}

function FewShotCurve() {
  /* performance (illustrative) vs. n_shots: 0,1,2,3,4,6,8 */
  const pts = [
    { x: 0, acc: 62 },
    { x: 1, acc: 71 },
    { x: 2, acc: 78 },
    { x: 3, acc: 83 },
    { x: 4, acc: 86 },
    { x: 6, acc: 88 },
    { x: 8, acc: 89 },
  ];
  const W = 600,
    H = 160,
    PAD = 50;
  const xScale = (v) => PAD + (v / 8) * (W - PAD - 20);
  const yScale = (v) => H - PAD + (50 - v) * 2.2;

  const polyline = pts
    .map(({ x, acc }) => `${xScale(x)},${yScale(acc)}`)
    .join(' ');

  return (
    <div style={S.diagram}>
      <svg
        viewBox={`0 0 ${W} ${H + 10}`}
        width="100%"
        style={{ display: 'block' }}
      >
        {/* axes */}
        <line
          x1={PAD}
          y1={H - PAD}
          x2={W - 20}
          y2={H - PAD}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <line
          x1={PAD}
          y1={20}
          x2={PAD}
          y2={H - PAD}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />

        {/* y labels */}
        {[62, 70, 78, 86].map((v) => (
          <g key={v}>
            <line
              x1={PAD - 4}
              y1={yScale(v)}
              x2={PAD}
              y2={yScale(v)}
              stroke="var(--text-secondary)"
              strokeWidth="1"
            />
            <text
              x={PAD - 7}
              y={yScale(v) + 4}
              textAnchor="end"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              {v}%
            </text>
          </g>
        ))}

        {/* x labels */}
        {[0, 1, 2, 3, 4, 6, 8].map((v) => (
          <text
            key={v}
            x={xScale(v)}
            y={H - PAD + 16}
            textAnchor="middle"
            fontSize="10"
            fill="var(--text-secondary)"
          >
            {v}
          </text>
        ))}

        {/* axis titles */}
        <text
          x={(W - 20 + PAD) / 2}
          y={H + 8}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-secondary)"
        >
          Número de exemplos (k)
        </text>
        <text
          x={12}
          y={(H - PAD + 20) / 2}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-secondary)"
          transform={`rotate(-90,12,${(H - PAD + 20) / 2})`}
        >
          Accuracy (%)
        </text>

        {/* curve */}
        <polyline
          points={polyline}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* dots */}
        {pts.map(({ x, acc }) => (
          <circle key={x} cx={xScale(x)} cy={yScale(acc)} r="4" fill={color} />
        ))}

        {/* diminishing returns annotation */}
        <line
          x1={xScale(4)}
          y1={yScale(86)}
          x2={xScale(4)}
          y2={yScale(86) - 22}
          stroke="var(--text-secondary)"
          strokeWidth="1"
          strokeDasharray="3,2"
        />
        <text
          x={xScale(4) + 5}
          y={yScale(86) - 24}
          fontSize="9"
          fill="var(--text-secondary)"
        >
          rendimentos decrescentes
        </text>
      </svg>
      <p
        style={{
          textAlign: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        Performance vs. k-shot (ilustrativo). Os ganhos marginais diminuem após
        ~4 exemplos.
      </p>
    </div>
  );
}

function ReActDiagram() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 740 230" width="100%" style={{ display: 'block' }}>
        <defs>
          <marker
            id="arrowR"
            markerWidth="7"
            markerHeight="7"
            refX="4"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L0,7 L7,3.5 z" fill={color} />
          </marker>
          <marker
            id="arrowGray"
            markerWidth="7"
            markerHeight="7"
            refX="4"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L0,7 L7,3.5 z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* boxes */}
        {[
          {
            x: 10,
            label: 'Thought',
            sub: 'raciocínio interno',
            col: `rgba(74,158,237,0.12)`,
          },
          {
            x: 200,
            label: 'Action',
            sub: 'tool call / API',
            col: `rgba(74,158,237,0.08)`,
          },
          {
            x: 390,
            label: 'Observation',
            sub: 'resultado da tool',
            col: `rgba(7,89,133,0.12)`,
          },
          {
            x: 575,
            label: 'Thought',
            sub: 'actualiza plano',
            col: `rgba(74,158,237,0.12)`,
          },
        ].map(({ x, label, sub, col }, i) => (
          <g key={i}>
            <rect
              x={x}
              y={60}
              width={155}
              height={60}
              rx="8"
              fill={col}
              stroke={color}
              strokeWidth="1.2"
            />
            <text
              x={x + 77}
              y={85}
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="var(--text-primary)"
            >
              {label}
            </text>
            <text
              x={x + 77}
              y={103}
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              {sub}
            </text>
          </g>
        ))}

        {/* arrows between boxes */}
        <line
          x1="165"
          y1="90"
          x2="198"
          y2="90"
          stroke={color}
          strokeWidth="1.8"
          markerEnd="url(#arrowR)"
        />
        <line
          x1="355"
          y1="90"
          x2="388"
          y2="90"
          stroke={color}
          strokeWidth="1.8"
          markerEnd="url(#arrowR)"
        />
        <line
          x1="545"
          y1="90"
          x2="573"
          y2="90"
          stroke={color}
          strokeWidth="1.8"
          markerEnd="url(#arrowR)"
        />

        {/* loop-back arc */}
        <path
          d="M 652 120 C 652 170, 87 170, 87 120"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeDasharray="5,3"
          markerEnd="url(#arrowR)"
        />
        <text
          x="357"
          y="192"
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          loop até resposta final
        </text>

        {/* tool cloud */}
        <ellipse
          cx="280"
          cy="28"
          rx="65"
          ry="20"
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1"
          strokeDasharray="4,2"
        />
        <text
          x="280"
          y="23"
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          Tools externas
        </text>
        <text
          x="280"
          y="37"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          search · calc · API
        </text>
        <line
          x1="267"
          y1="48"
          x2="267"
          y2="60"
          stroke="var(--text-secondary)"
          strokeWidth="1"
          strokeDasharray="3,2"
          markerEnd="url(#arrowGray)"
        />
        <line
          x1="267"
          y1="60"
          x2="267"
          y2="48"
          stroke="var(--text-secondary)"
          strokeWidth="1"
          strokeDasharray="3,2"
        />

        {/* final answer */}
        <rect
          x="270"
          y="160"
          width="160"
          height="42"
          rx="8"
          fill={`rgba(74,158,237,0.10)`}
          stroke={color}
          strokeWidth="1.2"
        />
        <text
          x="350"
          y="180"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={color}
        >
          Answer
        </text>
      </svg>
      <p
        style={{
          textAlign: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        Loop ReAct: o modelo alterna entre raciocínio e chamadas a ferramentas
        externas.
      </p>
    </div>
  );
}

function ToTDiagram() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 680 220" width="100%" style={{ display: 'block' }}>
        <defs>
          <marker
            id="arrTot"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="var(--text-secondary)" />
          </marker>
          <marker
            id="arrTotG"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 z" fill={color} />
          </marker>
        </defs>

        {/* root */}
        <rect
          x="290"
          y="10"
          width="100"
          height="34"
          rx="7"
          fill={`rgba(74,158,237,0.10)`}
          stroke={color}
          strokeWidth="1.5"
        />
        <text
          x="340"
          y="31"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={color}
        >
          Problema
        </text>

        {/* level 1 nodes */}
        {[
          { x: 80, label: 'Abordagem A', ok: true },
          { x: 290, label: 'Abordagem B', ok: false },
          { x: 500, label: 'Abordagem C', ok: true },
        ].map(({ x, label, ok }) => (
          <g key={label}>
            <line
              x1="340"
              y1="44"
              x2={x + 55}
              y2="85"
              stroke="var(--text-secondary)"
              strokeWidth="1.2"
              markerEnd="url(#arrTot)"
            />
            <rect
              x={x}
              y="87"
              width="110"
              height="32"
              rx="7"
              fill={ok ? `rgba(74,158,237,0.10)` : `rgba(74,158,237,0.10)`}
              stroke={ok ? color : '#4a9eed'}
              strokeWidth="1.2"
            />
            <text
              x={x + 55}
              y="107"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill={ok ? color : '#4a9eed'}
            >
              {label}
            </text>
          </g>
        ))}

        {/* level 2 — from A */}
        {[
          { x: 10, label: 'A.1', ok: false },
          { x: 120, label: 'A.2 ', ok: true },
        ].map(({ x, label, ok }) => (
          <g key={label}>
            <line
              x1="135"
              y1="119"
              x2={x + 45}
              y2="155"
              stroke="var(--text-secondary)"
              strokeWidth="1.2"
              markerEnd="url(#arrTot)"
            />
            <rect
              x={x}
              y="157"
              width="90"
              height="30"
              rx="6"
              fill={ok ? `rgba(74,158,237,0.10)` : `rgba(74,158,237,0.10)`}
              stroke={ok ? color : '#4a9eed'}
              strokeWidth="1.2"
            />
            <text
              x={x + 45}
              y="176"
              textAnchor="middle"
              fontSize="10"
              fontWeight={ok ? '700' : '400'}
              fill={ok ? color : '#4a9eed'}
            >
              {label}
            </text>
          </g>
        ))}

        {/* pruned B */}
        <line
          x1="345"
          y1="119"
          x2="345"
          y2="150"
          stroke="#4a9eed"
          strokeWidth="1.2"
          strokeDasharray="4,2"
        />
        <text x="345" y="162" textAnchor="middle" fontSize="10" fill="#4a9eed">
          {' '}
          podado
        </text>

        {/* level 2 — from C */}
        {[
          { x: 470, label: 'C.1', ok: false },
          { x: 570, label: 'C.2', ok: false },
        ].map(({ x, label }) => (
          <g key={label}>
            <line
              x1="555"
              y1="119"
              x2={x + 40}
              y2="155"
              stroke="var(--text-secondary)"
              strokeWidth="1.2"
              markerEnd="url(#arrTot)"
            />
            <rect
              x={x}
              y="157"
              width="80"
              height="30"
              rx="6"
              fill={`rgba(74,158,237,0.10)`}
              stroke="#4a9eed"
              strokeWidth="1.2"
            />
            <text
              x={x + 40}
              y="176"
              textAnchor="middle"
              fontSize="10"
              fill="#4a9eed"
            >
              {label}
            </text>
          </g>
        ))}

        {/* best path highlight */}
        <rect
          x="120"
          y="157"
          width="90"
          height="30"
          rx="6"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        />
        <text x="165" y="203" textAnchor="middle" fontSize="10" fill={color}>
          melhor caminho
        </text>
      </svg>
      <p
        style={{
          textAlign: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        Tree-of-Thought: exploração BFS/DFS com avaliação e poda de caminhos de
        raciocínio.
      </p>
    </div>
  );
}

/* ── main component ─────────────────────────────────────────────────────────── */

export default function LLM3() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}>
        <ArrowLeft size={16} /> Voltar a LLMs &amp; Agents
      </Link>

      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Prompt Engineering</h1>

      {/* ── Section 1 ─────────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O que é Prompt Engineering</h2>

        <p style={S.p}>
          Um LLM é fundamentalmente um <strong>next-token predictor</strong>:
          dado um contexto de tokens, estima a distribuição de probabilidade
          sobre o próximo token. A geração de um texto completo é o processo de
          amostrar desta distribuição repetidamente:
        </p>

        <div style={S.math}>
          <BlockMath
            math={
              'P(y_1, y_2, \\ldots, y_T \\mid x) = \\prod_{t=1}^{T} P(y_t \\mid x, y_1, \\ldots, y_{t-1})'
            }
          />
        </div>

        <p style={S.p}>
          O <strong>prompt</strong> é tudo o que entra na{' '}
          <em>context window</em> antes da geração: mensagens de sistema,
          histórico de conversa, exemplos, documentos recuperados e a pergunta
          actual. Mudar as palavras do prompt altera o espaço de probabilidade
          sobre as respostas — e portanto qual resposta o modelo produz.
        </p>

        <h3 style={S.h3}>Componentes de um prompt moderno</h3>

        <div style={S.diagram}>
          <svg viewBox="0 0 660 180" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker
                id="arrComp"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 z" fill="var(--text-secondary)" />
              </marker>
            </defs>

            {[
              {
                x: 10,
                w: 130,
                label: 'System',
                sub: 'persona, restrições,\nformato',
                col: `rgba(74,158,237,0.10)`,
              },
              {
                x: 160,
                w: 130,
                label: 'Examples',
                sub: 'pares input/output\n(few-shot)',
                col: `rgba(74,158,237,0.08)`,
              },
              {
                x: 310,
                w: 130,
                label: 'User',
                sub: 'pergunta / tarefa\nactual',
                col: `rgba(74,158,237,0.13)`,
              },
              {
                x: 460,
                w: 130,
                label: 'Assistant',
                sub: 'prefill opcional\npara steering',
                col: `rgba(7,89,133,0.12)`,
              },
            ].map(({ x, w, label, sub, col }) => (
              <g key={label}>
                <rect
                  x={x}
                  y="30"
                  width={w}
                  height="110"
                  rx="8"
                  fill={col}
                  stroke="var(--text-secondary)"
                  strokeWidth="1.2"
                />
                <text
                  x={x + w / 2}
                  y="55"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="var(--text-primary)"
                >
                  {label}
                </text>
                {sub.split('\n').map((line, i) => (
                  <text
                    key={i}
                    x={x + w / 2}
                    y={75 + i * 16}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--text-secondary)"
                  >
                    {line}
                  </text>
                ))}
              </g>
            ))}

            {/* arrows */}
            <line
              x1="140"
              y1="85"
              x2="158"
              y2="85"
              stroke="var(--text-secondary)"
              strokeWidth="1.5"
              markerEnd="url(#arrComp)"
            />
            <line
              x1="290"
              y1="85"
              x2="308"
              y2="85"
              stroke="var(--text-secondary)"
              strokeWidth="1.5"
              markerEnd="url(#arrComp)"
            />
            <line
              x1="440"
              y1="85"
              x2="458"
              y2="85"
              stroke="var(--text-secondary)"
              strokeWidth="1.5"
              markerEnd="url(#arrComp)"
            />

            {/* output */}
            <rect
              x="600"
              y="58"
              width="50"
              height="54"
              rx="8"
              fill={`rgba(74,158,237,0.10)`}
              stroke={color}
              strokeWidth="1.5"
            />
            <text
              x="625"
              y="82"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={color}
            >
              LLM
            </text>
            <text x="625" y="98" textAnchor="middle" fontSize="9" fill={color}>
              output
            </text>
            <line
              x1="590"
              y1="85"
              x2="598"
              y2="85"
              stroke={color}
              strokeWidth="1.5"
              markerEnd="url(#arrComp)"
            />

            <text
              x="330"
              y="165"
              textAnchor="middle"
              fontSize="10"
              fill="var(--text-secondary)"
            >
              Context window → tokens concatenados antes da geração
            </text>
          </svg>
        </div>

        <div style={S.note}>
          <strong>Nota:</strong> em APIs modernas (OpenAI, Anthropic), System e
          User são papéis separados — mas internamente o modelo vê tudo como uma
          sequência de tokens com marcadores de papel. O "truque" do prompting é
          perceber como esses tokens alteram as probabilidades condicionais.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ─────────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Zero-shot vs. Few-shot</h2>

        <p style={S.p}>
          <strong>Zero-shot prompting</strong> envia apenas a instrução, sem
          exemplos. Funciona bem para tarefas simples ou em modelos com
          instruction-tuning extenso (e.g., GPT-4, Claude 3). O modelo
          generaliza a partir do seu pré-treino.
        </p>
        <div style={S.code}>{zeroShotEx}</div>

        <p style={S.p}>
          <strong>Few-shot prompting</strong> (Brown et al., 2020) inclui{' '}
          <InlineMath math={'k'} /> exemplos de pares (input, output) antes da
          pergunta real. Guia o modelo sobre formato, tom, nível de detalhe e
          edge cases sem actualizar os pesos — é <em>in-context learning</em>.
        </p>
        <div style={S.code}>{fewShotEx}</div>

        <ShotDiagram />
        <FewShotCurve />

        <div style={S.highlight}>
          <strong>Boas práticas de template design:</strong>
          <ul
            style={{
              marginTop: '0.5rem',
              marginBottom: 0,
              paddingLeft: '1.2rem',
              lineHeight: 1.8,
              color: 'var(--text-primary)',
            }}
          >
            <li>
              Usar delimitadores claros: <code>"""</code>, <code>###</code>,
              tags XML
            </li>
            <li>Ordenar exemplos do mais simples ao mais complexo</li>
            <li>Incluir exemplos de edge cases e casos negativos</li>
            <li>Especificar explicitamente o formato de output esperado</li>
            <li>
              Equilibrar as classes nos exemplos (evitar viés de amostragem)
            </li>
          </ul>
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Custo de tokens</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Zero-shot</td>
              <td style={S.td}>Mínimo</td>
              <td style={S.td}>
                Tarefas simples; modelos grandes com instruction-tuning
              </td>
            </tr>
            <tr>
              <td style={S.td}>1-shot</td>
              <td style={S.td}>Baixo</td>
              <td style={S.td}>Quando o formato de output é não-trivial</td>
            </tr>
            <tr>
              <td style={S.td}>Few-shot (3-8)</td>
              <td style={S.td}>Médio</td>
              <td style={S.td}>
                Tarefas complexas, formatos específicos, domínios especializados
              </td>
            </tr>
            <tr>
              <td style={S.td}>Many-shot (&gt;8)</td>
              <td style={S.td}>Alto</td>
              <td style={S.td}>
                Rendimentos decrescentes; considerar fine-tuning em alternativa
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ─────────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. ReAct — Reasoning + Acting</h2>

        <p style={S.p}>
          Yao et al. (2022) introduziram o paradigma <strong>ReAct</strong>, que
          combina raciocínio verbal com acções concretas (chamadas a ferramentas
          externas). O modelo alterna entre passos de <em>Thought</em>,{' '}
          <em>Action</em>e <em>Observation</em> até produzir uma resposta final:
        </p>

        <ReActDiagram />

        <p style={S.p}>
          As <strong>acções</strong> podem ser chamadas a motores de busca,
          calculadoras, APIs, bases de dados, ou qualquer ferramenta definida
          pelo programador. A <em>Observation</em> é o resultado devolvido pela
          ferramenta, que é injectado no contexto para o próximo passo de
          raciocínio.
        </p>

        <h3 style={S.h3}>Exemplo de trace ReAct</h3>
        <div style={S.code}>{reactEx}</div>

        <div style={S.highlight}>
          <strong>Porque o ReAct supera CoT puro em tarefas factuais:</strong> o
          modelo acede a informação actualizada através das ferramentas em vez
          de depender apenas do conhecimento do pré-treino, reduzindo
          alucinações em perguntas que requerem dados recentes ou precisos.
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Função</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Thought</td>
              <td style={S.td}>
                Raciocínio interno; planeamento do próximo passo
              </td>
              <td style={S.td}>"Preciso de verificar a data do evento."</td>
            </tr>
            <tr>
              <td style={S.td}>Action</td>
              <td style={S.td}>Chamada a ferramenta com parâmetros</td>
              <td style={S.td}>
                <code>web_search("data conferência NeurIPS 2025")</code>
              </td>
            </tr>
            <tr>
              <td style={S.td}>Observation</td>
              <td style={S.td}>Resultado devolvido pela ferramenta</td>
              <td style={S.td}>"NeurIPS 2025: 2–7 Dezembro, San Diego."</td>
            </tr>
            <tr>
              <td style={S.td}>Answer</td>
              <td style={S.td}>Resposta final ao utilizador</td>
              <td style={S.td}>
                "A NeurIPS 2025 decorre de 2 a 7 de Dezembro."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ─────────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Técnicas Avançadas</h2>

        <h3 style={S.h3}>Tree-of-Thought (ToT)</h3>
        <p style={S.p}>
          Yao et al. (2023) generalizaram CoT para uma{' '}
          <strong>árvore de raciocínio</strong>, onde o modelo explora múltiplos
          caminhos (BFS ou DFS), avalia cada nó e faz backtracking quando
          necessário. Ideal para problemas de planeamento onde uma escolha
          prematura pode invalidar toda a solução.
        </p>

        <ToTDiagram />

        <h3 style={S.h3}>Program-Aided Language Models (PAL)</h3>
        <p style={S.p}>
          Gao et al. (2022) propuseram que o LLM gere{' '}
          <strong>código Python</strong> como raciocínio intermédio, que é
          depois executado por um interpretador. Elimina erros de cálculo e
          raciocínio simbólico, delegando a aritmética exacta à máquina.
        </p>
        <div style={S.code}>{palEx}</div>

        <h3 style={S.h3}>Structured Output / JSON Mode</h3>
        <p style={S.p}>
          Forçar o modelo a produzir output estruturado (JSON, XML, CSV)
          facilita a integração em pipelines de software. A maioria dos
          providers modernos oferece <em>constrained decoding</em> — o modelo
          apenas pode gerar tokens compatíveis com um schema pré-definido.
        </p>
        <div style={S.code}>{jsonModeEx}</div>
        <div style={S.note}>
          Constrained decoding garante validade sintáctica, mas não garante
          validade semântica. Validar sempre o conteúdo dos campos com lógica de
          aplicação.
        </div>

        <h3 style={S.h3}>Prompt Injection e Prompt Leaking</h3>
        <p style={S.p}>
          À medida que os LLMs são integrados em sistemas de produção, o prompt deixa de ser só uma
          ferramenta de engenharia — torna-se também uma superfície de ataque. Um utilizador pode tentar
          substituir o system prompt com instruções próprias (<strong>prompt injection directa</strong>),
          extrair o conteúdo confidencial do system prompt (<strong>prompt leaking</strong>), ou — em
          agentes com acesso a ferramentas — esconder instruções maliciosas em conteúdo externo que o
          modelo processa, como uma página web ou um documento (<strong>prompt injection indirecta</strong>).
        </p>
        <div style={S.note}>
          A taxonomia completa de ataques (jailbreaks, injection directa/indirecta, many-shot, bypass
          multilingual), as suas mitigações e os benchmarks de safety usados para os medir estão
          aprofundados no módulo "Alinhamento &amp; Safety".
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ─────────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Parâmetros de Geração</h2>

        <p style={S.p}>
          O comportamento do modelo não depende apenas do prompt — os parâmetros
          de <strong>sampling</strong> controlam como se amostra da distribuição
          de probabilidade em cada passo de geração.
        </p>

        <h3 style={S.h3}>Temperature</h3>
        <p style={S.p}>
          A temperatura <InlineMath math={'T'} /> escala os logits antes do
          softmax, controlando a "criatividade" da geração:
        </p>

        <div style={S.math}>
          <BlockMath
            math={"P'(x_i) = \\frac{\\exp(z_i / T)}{\\sum_j \\exp(z_j / T)}"}
          />
        </div>

        <p style={S.p}>
          Quando <InlineMath math={'T \\to 0'} />, o modelo torna-se{' '}
          <strong>greedy</strong> — escolhe sempre o token mais provável. Quando{' '}
          <InlineMath math={'T \\to \\infty'} />, a distribuição torna-se{' '}
          <strong>uniforme</strong> — todas as escolhas são equiprováveis. Na
          prática usa-se <InlineMath math={'T \\in [0, 2]'} />.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 640 150" width="100%" style={{ display: 'block' }}>
            {/* axis */}
            <line
              x1="40"
              y1="110"
              x2="600"
              y2="110"
              stroke="var(--text-secondary)"
              strokeWidth="1.5"
            />

            {/* T labels */}
            {[
              { x: 60, label: 'T=0', desc: 'greedy\n(determinista)' },
              { x: 200, label: 'T=0.3', desc: 'factual\n(conservador)' },
              { x: 340, label: 'T=0.7–1.0', desc: 'equilibrado\n(padrão)' },
              {
                x: 490,
                label: 'T=1.5–2.0',
                desc: 'criativo\n(mais aleatoriedade)',
              },
            ].map(({ x, label, desc }) => (
              <g key={label}>
                <circle cx={x} cy={110} r="5" fill={color} />
                <text
                  x={x}
                  y={100}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill={color}
                >
                  {label}
                </text>
                {desc.split('\n').map((line, i) => (
                  <text
                    key={i}
                    x={x}
                    y={125 + i * 14}
                    textAnchor="middle"
                    fontSize="9"
                    fill="var(--text-secondary)"
                  >
                    {line}
                  </text>
                ))}
              </g>
            ))}

            <text
              x="40"
              y="108"
              textAnchor="start"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              ←
            </text>
            <text
              x="600"
              y="108"
              textAnchor="end"
              fontSize="9"
              fill="var(--text-secondary)"
            >
              →
            </text>
            <text
              x="320"
              y="20"
              textAnchor="middle"
              fontSize="11"
              fill="var(--text-secondary)"
            >
              Temperatura (T)
            </text>
          </svg>
        </div>

        <h3 style={S.h3}>Top-k e Top-p (Nucleus Sampling)</h3>
        <p style={S.p}>
          <strong>Top-k</strong> restringe a amostragem aos{' '}
          <InlineMath math={'k'} /> tokens mais prováveis em cada passo.{' '}
          <strong>Top-p</strong> (nucleus sampling) selecciona o menor conjunto
          de tokens cuja probabilidade acumulada excede{' '}
          <InlineMath math={'p'} />:
        </p>

        <div style={S.math}>
          <BlockMath
            math={
              "V_{top\\text{-}p} = \\arg\\min_{V \\subseteq V_{\\text{vocab}}} \\left\\{ |V| : \\sum_{x_i \\in V} P'(x_i) \\geq p \\right\\}"
            }
          />
        </div>

        <p style={S.p}>
          Top-p adapta-se dinamicamente à distribuição: quando o modelo está
          confiante (distribuição concentrada), o conjunto nucleus é pequeno;
          quando está incerto, é maior. Valores típicos:{' '}
          <InlineMath math={'p = 0.9'} /> a <InlineMath math={'p = 0.95'} />.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso de uso</th>
              <th style={S.th}>Temperature</th>
              <th style={S.th}>Top-p</th>
              <th style={S.th}>Top-k</th>
              <th style={S.th}>Justificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>QA factual / RAG</td>
              <td style={S.td}>0.0–0.3</td>
              <td style={S.td}>0.85</td>
              <td style={S.td}>—</td>
              <td style={S.td}>Precisão máxima; evitar alucinações</td>
            </tr>
            <tr>
              <td style={S.td}>Geração de código</td>
              <td style={S.td}>0.2–0.4</td>
              <td style={S.td}>0.90</td>
              <td style={S.td}>50</td>
              <td style={S.td}>Sintaxe correcta; alguma variação</td>
            </tr>
            <tr>
              <td style={S.td}>Resumo / tradução</td>
              <td style={S.td}>0.5–0.7</td>
              <td style={S.td}>0.92</td>
              <td style={S.td}>—</td>
              <td style={S.td}>Equilíbrio fidelidade / fluência</td>
            </tr>
            <tr>
              <td style={S.td}>Escrita criativa</td>
              <td style={S.td}>0.8–1.2</td>
              <td style={S.td}>0.95</td>
              <td style={S.td}>—</td>
              <td style={S.td}>Diversidade e originalidade</td>
            </tr>
            <tr>
              <td style={S.td}>Brainstorming</td>
              <td style={S.td}>1.0–1.5</td>
              <td style={S.td}>0.98</td>
              <td style={S.td}>—</td>
              <td style={S.td}>Máxima diversidade de ideias</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ─────────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Boas Práticas e Anti-padrões</h2>

        <h3 style={S.h3}>Boas práticas</h3>

        <div style={S.highlight}>
          <strong>1. Ser específico e claro</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Definir explicitamente: persona ("És um especialista em fiscalidade
            portuguesa"), formato ("Responde em JSON com campos X, Y, Z"), e
            restrições ("Não incluas referências a legislação anterior a 2020").
          </p>
        </div>

        <div style={S.highlight}>
          <strong>2. Incluir exemplos negativos</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Mostrar explicitamente o que <em>não</em> fazer é tão útil quanto
            exemplos positivos — especialmente para edge cases e comportamentos
            que o modelo tende a exibir por defeito.
          </p>
        </div>

        <div style={S.highlight}>
          <strong>3. Pedir verificação da própria resposta</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Adicionar "Verifica se a resposta está correcta antes de a
            apresentar." ou usar um segundo turno de reflexão reduz erros
            factuais e de raciocínio, especialmente em tarefas de cálculo.
          </p>
        </div>

        <div style={S.highlight}>
          <strong>4. Usar delimitadores e estrutura</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Separar claramente secções do prompt com delimitadores (
            <code>"""</code>, <code>---</code>, tags XML) reduz confusão entre
            instrução, contexto e query. Evita que o modelo trate dados de
            utilizador como instruções.
          </p>
        </div>

        <div style={S.highlight}>
          <strong>5. Iterar e avaliar sistematicamente</strong>
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Prompt engineering é empírica. Manter um conjunto de test cases
            representativos, medir métricas (accuracy, BLEU, ROUGE,
            LLM-as-judge) e versionar os prompts como se fossem código.
          </p>
        </div>

        <h3 style={S.h3}>Anti-padrões a evitar</h3>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Anti-padrão</th>
              <th style={S.th}>Problema</th>
              <th style={S.th}>Solução</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Prompt ambíguo</td>
              <td style={S.td}>O modelo inventa detalhes não especificados</td>
              <td style={S.td}>
                Especificar formato, extensão e tom explicitamente
              </td>
            </tr>
            <tr>
              <td style={S.td}>Instruções contraditórias</td>
              <td style={S.td}>
                Comportamento imprevisível; o modelo "resolve" o conflito
                arbitrariamente
              </td>
              <td style={S.td}>
                Ordenar instruções por prioridade; remover redundâncias
              </td>
            </tr>
            <tr>
              <td style={S.td}>Prompt excessivamente longo</td>
              <td style={S.td}>
                "Lost in the middle" — o modelo ignora informação no centro do
                contexto
              </td>
              <td style={S.td}>
                Colocar informação crítica no início ou no fim
              </td>
            </tr>
            <tr>
              <td style={S.td}>
                Ausência de exemplos para formato não-trivial
              </td>
              <td style={S.td}>
                Output em formato inesperado; difícil de parsear
              </td>
              <td style={S.td}>
                Pelo menos 1 exemplo de output no formato desejado
              </td>
            </tr>
            <tr>
              <td style={S.td}>Temperatura alta para tarefas factuais</td>
              <td style={S.td}>Alucinações e variações desnecessárias</td>
              <td style={S.td}>Usar T≤0.3 para QA e extracção de dados</td>
            </tr>
            <tr>
              <td style={S.td}>Confiar no modelo como árbitro de factos</td>
              <td style={S.td}>Conhecimento desactualizado ou incorrecto</td>
              <td style={S.td}>
                RAG + ferramentas de busca; verificação externa
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Synthesis ─────────────────────────────────────────────────────────── */}
    </div>
  );
}
