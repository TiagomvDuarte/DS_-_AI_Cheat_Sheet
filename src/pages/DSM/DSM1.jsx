import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
const rgb = '249,115,22';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(${rgb},0.06)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1rem', margin: '1.25rem 0', display: 'flex', justifyContent: 'center', overflowX: 'auto' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ─────────────────────────── SVG Components ─────────────────────────── */

function BatchVsStreamSVG() {
  return (
    <svg viewBox="0 0 720 220" width="100%" style={{ maxWidth: 720 }}>
      {/* Batch side */}
      <rect x="10" y="10" width="330" height="200" rx="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,3" />
      <text x="175" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">BATCH LEARNING</text>

      {/* Data store */}
      <rect x="30" y="50" width="90" height="40" rx="6" fill={`rgba(${rgb},0.15)`} stroke={color} strokeWidth="1.5" />
      <text x="75" y="73" textAnchor="middle" fontSize="11" fill={color} fontWeight="600">Dataset</text>
      <text x="75" y="85" textAnchor="middle" fontSize="9" fill={color} >armazenado</text>

      {/* Arrow right */}
      <path d="M122 70 L165 70" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
      <text x="143" y="63" textAnchor="middle" fontSize="9" fill="#94a3b8">N passes</text>

      {/* Process box */}
      <rect x="167" y="50" width="90" height="40" rx="6" fill="rgba(148,163,184,0.15)" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="212" y="73" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="600">Treino</text>
      <text x="212" y="85" textAnchor="middle" fontSize="9" fill="#94a3b8">offline</text>

      {/* Arrow right */}
      <path d="M259 70 L300 70" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />

      {/* Model */}
      <rect x="302" y="50" width="28" height="40" rx="6" fill={`rgba(${rgb},0.2)`} stroke={color} strokeWidth="1.5" />
      <text x="316" y="73" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">M</text>

      {/* Re-train cycle */}
      <path d="M212 92 Q212 140 143 140 Q75 140 75 92" stroke="#94a3b8" strokeWidth="1.2" fill="none" strokeDasharray="4,3" markerEnd="url(#arr2)" />
      <text x="143" y="155" textAnchor="middle" fontSize="9" fill="#94a3b8">re-treino periódico</text>

      {/* Static label */}
      <text x="175" y="195" textAnchor="middle" fontSize="10" fill="#64748b">modelo estático entre re-treinos</text>

      {/* Stream side */}
      <rect x="380" y="10" width="330" height="200" rx="10" fill="none" stroke={color} strokeWidth="1.5" />
      <text x="545" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>STREAM LEARNING</text>

      {/* Flowing data */}
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <circle cx={400 + i * 22} cy="72" r="10" fill={`rgba(${rgb},${0.15 + i * 0.04})`} stroke={color} strokeWidth="1.2" />
          <text x={400 + i * 22} cy="72" textAnchor="middle" dominantBaseline="central" fontSize="9" fill={color} y="72">x{i+1}</text>
        </g>
      ))}
      <path d="M510 72 L535 72" stroke={color} strokeWidth="1.5" fill="none" markerEnd="url(#arr3)" />

      {/* Single pass model */}
      <rect x="537" y="52" width="80" height="40" rx="6" fill={`rgba(${rgb},0.15)`} stroke={color} strokeWidth="1.5" />
      <text x="577" y="70" textAnchor="middle" fontSize="11" fill={color} fontWeight="600">Modelo</text>
      <text x="577" y="82" textAnchor="middle" fontSize="9" fill={color}>atualiza sempre</text>

      {/* Output */}
      <path d="M617 72 L650 72" stroke={color} strokeWidth="1.5" fill="none" markerEnd="url(#arr3)" />
      <rect x="652" y="57" width="50" height="30" rx="5" fill={`rgba(${rgb},0.1)`} stroke={color} strokeWidth="1" />
      <text x="677" y="75" textAnchor="middle" fontSize="9" fill={color} fontWeight="600">ŷ</text>

      {/* discard */}
      <text x="455" y="95" textAnchor="middle" fontSize="9" fill="#94a3b8">descartado</text>
      <path d="M420 82 L420 108" stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="3,2" />
      <text x="420" y="120" textAnchor="middle" fontSize="8" fill="#94a3b8">×</text>

      <text x="545" y="145" textAnchor="middle" fontSize="10" fill="#64748b">memória constante · adaptação contínua</text>
      <text x="545" y="160" textAnchor="middle" fontSize="10" fill="#64748b">single pass · previsão a qualquer momento</text>

      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
        <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
        <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
    </svg>
  );
}

function StreamPipelineSVG() {
  const boxW = 100, boxH = 36, gap = 28, startX = 20, y = 55;
  const boxes = [
    { label: 'Dados chegam', sub: 'instância xₜ' },
    { label: 'Sliding Window', sub: 'W instâncias' },
    { label: 'Modelo Online', sub: 'atualiza' },
    { label: 'Previsão ŷₜ', sub: 'anytime' },
    { label: 'Descarta xₜ', sub: 'liberta mem.' },
  ];
  const totalW = boxes.length * boxW + (boxes.length - 1) * gap + startX * 2;

  return (
    <svg viewBox={`0 0 ${totalW} 120`} width="100%" style={{ maxWidth: totalW }}>
      {boxes.map((b, i) => {
        const x = startX + i * (boxW + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={boxW} height={boxH} rx="7"
              fill={i === 4 ? 'rgba(249,115,22,0.10)' : `rgba(${rgb},0.1)`}
              stroke={i === 4 ? '#f97316' : color} strokeWidth="1.5" />
            <text x={x + boxW / 2} y={y + 14} textAnchor="middle" fontSize="10" fontWeight="600"
              fill={i === 4 ? '#f97316' : color}>{b.label}</text>
            <text x={x + boxW / 2} y={y + 27} textAnchor="middle" fontSize="9" fill="#f97316">{b.sub}</text>
            {i < boxes.length - 1 && (
              <path d={`M${x + boxW} ${y + boxH / 2} L${x + boxW + gap - 2} ${y + boxH / 2}`}
                stroke={i === 3 ? '#f97316' : color} strokeWidth="1.5" fill="none"
                markerEnd={i === 3 ? 'url(#arrRed)' : 'url(#arrBlue)'} />
            )}
          </g>
        );
      })}
      {/* memory constraint label */}
      <text x={totalW / 2} y="108" textAnchor="middle" fontSize="10" fill="#64748b">
        Restrição de memória: apenas a janela W permanece em memória
      </text>
      <defs>
        <marker id="arrBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
        <marker id="arrRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
    </svg>
  );
}

function DriftTypesSVG() {
  const w = 160, h = 80, padX = 12, padY = 14, gap = 20;
  const totalW = 4 * w + 3 * gap + 2 * padX;
  const types = [
    {
      label: 'Súbito (Sudden)', color: '#f97316',
      path: `M${padX} ${h - 10} L${padX + 60} ${h - 10} L${padX + 61} ${padY + 5} L${padX + w - 5} ${padY + 5}`,
    },
    {
      label: 'Gradual', color: '#f97316',
      path: (() => {
        const pts = [];
        for (let i = 0; i <= 80; i += 2) {
          const sig = 1 / (1 + Math.exp(-0.12 * (i - 40)));
          const yv = (h - 10) - sig * (h - 10 - padY - 5);
          pts.push(`${padX + i},${yv}`);
        }
        return 'M' + pts.join(' L');
      })(),
    },
    {
      label: 'Incremental', color: '#f97316',
      path: `M${padX} ${h - 10} L${padX + w - 5} ${padY + 5}`,
    },
    {
      label: 'Recorrente', color: '#f97316',
      path: (() => {
        const pts = [];
        for (let i = 0; i <= 80; i += 2) {
          const yv = (h - 10) - ((Math.sin(i * 0.12) + 1) / 2) * (h - 10 - padY - 5);
          pts.push(`${padX + i},${yv}`);
        }
        return 'M' + pts.join(' L');
      })(),
    },
  ];

  return (
    <svg viewBox={`0 0 ${totalW} ${h + 36}`} width="100%" style={{ maxWidth: totalW }}>
      <defs>
        {types.map((_, i) => (
          <clipPath key={i} id={`driftClip${i}`}>
            <rect x="4" y="4" width={w - 8} height={h + 6} rx="6" />
          </clipPath>
        ))}
      </defs>
      {types.map((t, i) => {
        const ox = i * (w + gap);
        return (
          <g key={i} transform={`translate(${ox}, 0)`}>
            <rect x="0" y="0" width={w} height={h + 14} rx="8" fill="none" stroke="#e2e8f0" strokeWidth="1.2" />
            {/* axes */}
            <line x1={padX} y1={padY} x2={padX} y2={h - 4} stroke="#cbd5e1" strokeWidth="1" />
            <line x1={padX} y1={h - 4} x2={w - padX + 8} y2={h - 4} stroke="#cbd5e1" strokeWidth="1" />
            <text x={padX + 2} y={padY - 2} fontSize="7" fill="#94a3b8">P(y|x)</text>
            <text x={w - padX + 6} y={h - 1} fontSize="7" fill="#94a3b8" textAnchor="end">t</text>
            <path d={t.path} stroke={t.color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" clipPath={`url(#driftClip${i})`} />
            <text x={w / 2} y={h + 26} textAnchor="middle" fontSize="10" fontWeight="600" fill={t.color}>{t.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function PrequentialSVG() {
  const items = ['x₁', 'x₂', 'x₃', 'x₄', 'x₅'];
  const startX = 30, y = 40, stepW = 130;
  const totalW = items.length * stepW + startX * 2;

  return (
    <svg viewBox={`0 0 ${totalW} 130`} width="100%" style={{ maxWidth: totalW }}>
      {items.map((label, i) => {
        const x = startX + i * stepW;
        return (
          <g key={i}>
            {/* instance */}
            <circle cx={x + 20} cy={y} r="16" fill={`rgba(${rgb},0.12)`} stroke={color} strokeWidth="1.5" />
            <text x={x + 20} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>{label}</text>

            {/* test box */}
            <rect x={x + 42} y={y - 16} width="38" height="22" rx="5"
              fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
            <text x={x + 61} y={y - 2} textAnchor="middle" fontSize="9" fontWeight="600" fill="#f97316">TEST</text>

            {/* arrow down to train */}
            <path d={`M${x + 61} ${y + 6} L${x + 61} ${y + 30}`} stroke="#94a3b8" strokeWidth="1.2"
              fill="none" markerEnd="url(#arrG)" />

            {/* train box */}
            <rect x={x + 42} y={y + 32} width="38" height="22" rx="5"
              fill={`rgba(${rgb},0.1)`} stroke={color} strokeWidth="1.2" />
            <text x={x + 61} y={y + 46} textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>TRAIN</text>

            {/* connector to next */}
            {i < items.length - 1 && (
              <path d={`M${x + 80} ${y} L${x + stepW + 3} ${y}`} stroke="#cbd5e1"
                strokeWidth="1.2" fill="none" markerEnd="url(#arrG)" />
            )}

            {/* result label */}
            <text x={x + 61} y="110" textAnchor="middle" fontSize="8" fill="#64748b">
              {i === 0 ? 'avalia → aprende' : i === 1 ? 'avalia → aprende' : '...'}
            </text>
          </g>
        );
      })}
      <text x={totalW / 2} y="125" textAnchor="middle" fontSize="10" fill="#64748b">
        Cada instância serve simultaneamente para avaliação e para treino
      </text>
      <defs>
        <marker id="arrG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
      </defs>
    </svg>
  );
}

function SlidingWindowSVG() {
  const items = ['x₁','x₂','x₃','x₄','x₅','x₆','x₇','x₈','x₉','x₁₀'];
  const cellW = 52, cellH = 36, startX = 20, y = 40;
  const windowStart = 3, windowSize = 4;

  return (
    <svg viewBox={`0 0 ${items.length * cellW + startX * 2} 120`} width="100%"
      style={{ maxWidth: items.length * cellW + startX * 2 }}>
      {/* stream label */}
      <text x={startX} y="20" fontSize="10" fontWeight="600" fill="#64748b">Stream de dados (tempo →)</text>

      {items.map((label, i) => {
        const x = startX + i * cellW;
        const inWindow = i >= windowStart && i < windowStart + windowSize;
        const past = i < windowStart;
        return (
          <g key={i}>
            <rect x={x + 2} y={y} width={cellW - 4} height={cellH} rx="6"
              fill={past ? 'rgba(148,163,184,0.1)' : inWindow ? `rgba(${rgb},0.18)` : 'rgba(148,163,184,0.06)'}
              stroke={inWindow ? color : '#cbd5e1'}
              strokeWidth={inWindow ? 2 : 1}
              opacity={past ? 0.5 : 1} />
            <text x={x + cellW / 2} y={y + 22} textAnchor="middle" fontSize="10"
              fontWeight={inWindow ? '700' : '400'}
              fill={past ? '#94a3b8' : inWindow ? color : '#64748b'}>{label}</text>
          </g>
        );
      })}

      {/* Window bracket */}
      <rect x={startX + windowStart * cellW + 2} y={y - 6} width={windowSize * cellW - 4} height={cellH + 12}
        rx="8" fill="none" stroke={color} strokeWidth="2" strokeDasharray="5,3" />
      <text x={startX + (windowStart + windowSize / 2) * cellW} y={y - 12}
        textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Janela W=4</text>

      {/* Labels */}
      <text x={startX + windowStart / 2 * cellW} y="100" textAnchor="middle" fontSize="9" fill="#94a3b8">descartados</text>
      <text x={startX + (windowStart + windowSize + (items.length - windowStart - windowSize) / 2) * cellW}
        y="100" textAnchor="middle" fontSize="9" fill="#94a3b8">ainda não vistos</text>
      <text x={startX + (windowStart + windowSize / 2) * cellW} y="110"
        textAnchor="middle" fontSize="9" fill={color}>em memória · usados para treino</text>
    </svg>
  );
}

function UseCasesSVG() {
  const quadrants = [
    { label: 'Deteção de Intrusões', sub: 'Drift adversarial', x: 60, y: 40, c: '#f97316' },
    { label: 'Manutenção Preditiva', sub: 'Drift incremental (desgaste)', x: 400, y: 40, c: '#f97316' },
    { label: 'Recomendações RT', sub: 'Drift sazonal/recorrente', x: 60, y: 160, c: '#f97316' },
    { label: 'Fraude Financeira', sub: 'Drift súbito/gradual', x: 400, y: 160, c: '#f97316' },
  ];

  return (
    <svg viewBox="0 0 660 280" width="100%" style={{ maxWidth: 660 }}>
      {/* Axes */}
      <line x1="330" y1="10" x2="330" y2="270" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="5,4" />
      <line x1="10" y1="140" x2="650" y2="140" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="5,4" />
      <text x="335" y="20" fontSize="9" fill="#94a3b8">Alta frequência →</text>
      <text x="335" y="270" fontSize="9" fill="#94a3b8">Baixa frequência →</text>
      <text x="15" y="135" fontSize="9" fill="#94a3b8">Drift rápido</text>
      <text x="15" y="148" fontSize="9" fill="#94a3b8">↓</text>
      <text x="15" y="260" fontSize="9" fill="#94a3b8">Drift lento</text>

      {quadrants.map((q, i) => (
        <g key={i}>
          <rect x={q.x} y={q.y} width={220} height={80} rx="10"
            fill={`${q.c}12`} stroke={q.c} strokeWidth="1.8" />
          <text x={q.x + 110} y={q.y + 30} textAnchor="middle" fontSize="12" fontWeight="700" fill={q.c}>{q.label}</text>
          <text x={q.x + 110} y={q.y + 50} textAnchor="middle" fontSize="10" fill="#64748b">{q.sub}</text>
          <text x={q.x + 110} y={q.y + 66} textAnchor="middle" fontSize="9" fill="#94a3b8">
            {i === 0 ? 'tráfego de rede · logs' :
             i === 1 ? 'sensores IoT · vibrações' :
             i === 2 ? 'e-commerce · streaming' :
             'transações bancárias'}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export default function DSM1() {
  return (
    <div style={S.page}>
      <Link to="/dsm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Stream Mining</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Introdução aos Data Streams</h1>
      <p style={S.lead}>
        Os Data Streams representam um paradigma de aprendizagem radicalmente diferente do batch learning tradicional.
        Os dados chegam continuamente, em volumes potencialmente ilimitados, e as distribuições subjacentes podem mudar ao longo
        do tempo — fenómeno designado por <strong>concept drift</strong>. Este módulo estabelece os fundamentos teóricos e práticos
        do processamento de streams: restrições formais, tipos de drift, protocolos de avaliação, estruturas de dados especializadas
        e as principais ferramentas do ecossistema.
      </p>

      {/* ═══════════════════════════════════════════════════════ SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Data Streams vs. Batch Learning</h2>
        <p style={S.p}>
          No paradigma <strong>batch</strong>, o conjunto de dados está disponível na totalidade antes do treino. O modelo
          pode iterar múltiplas vezes sobre os dados, recorrer a algoritmos iterativos (e.g., gradient descent com épocas),
          e pressupor que a distribuição é estacionária. Esta abordagem torna-se impraticável quando os dados chegam de forma
          contínua e em volumes que excedem a capacidade de armazenamento.
        </p>
        <p style={S.p}>
          Nos <strong>Data Streams</strong>, as instâncias chegam sequencialmente — potencialmente a milhares por segundo —
          e é impossível armazenar todo o histórico. Aplicações típicas incluem:
        </p>
        <div style={S.highlight}>
          <strong>Exemplos de fontes de Data Streams:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><strong>Redes de sensores:</strong> estações meteorológicas, sensores sísmicos, redes elétricas inteligentes</li>
            <li><strong>Redes sociais:</strong> tweets, publicações, reações — milhões de eventos por minuto</li>
            <li><strong>Ticks financeiros:</strong> cotações de ações, ordens de bolsa, transações de alta frequência</li>
            <li><strong>Tráfego de rede:</strong> pacotes IP, logs de firewall, fluxos de DNS</li>
            <li><strong>IoT industrial:</strong> telemetria de motores, sensores de pressão/temperatura em tempo real</li>
          </ul>
        </div>

        <div style={S.diagram}>
          <BatchVsStreamSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Batch Learning</th>
              <th style={S.th}>Stream Learning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Disponibilidade dos dados</td><td style={S.td}>Todos de uma vez</td><td style={S.td}>Um (ou mini-batch) de cada vez</td></tr>
            <tr><td style={S.td}>Passagens sobre os dados</td><td style={S.td}>Múltiplas (épocas)</td><td style={S.td}>Uma — single pass</td></tr>
            <tr><td style={S.td}>Memória necessária</td><td style={S.td}>O(n) — proporcional ao dataset</td><td style={S.td}>O(1) ou O(log n)</td></tr>
            <tr><td style={S.td}>Adaptação a mudanças</td><td style={S.td}>Re-treino periódico</td><td style={S.td}>Contínua e automática</td></tr>
            <tr><td style={S.td}>Latência de previsão</td><td style={S.td}>Após re-treino</td><td style={S.td}>A qualquer momento (anytime)</td></tr>
            <tr><td style={S.td}>Escalabilidade</td><td style={S.td}>Limitada pelo armazenamento</td><td style={S.td}>Teóricamente ilimitada</td></tr>
          </tbody>
        </table>
        <p style={S.note}>
          O processamento em tempo real não é apenas uma vantagem de desempenho — em cenários como deteção de fraude ou
          monitorização de infraestruturas críticas, a latência de horas ou dias tornaria o sistema inútil.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════ SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Desafios Fundamentais</h2>
        <p style={S.p}>
          Os algoritmos de stream mining operam sob quatro restrições formais que guiam o seu design. Estas não são
          meramente limitações práticas — são requisitos que definem a validade do algoritmo enquanto solução de stream.
        </p>

        <div style={S.highlight}>
          <strong>Restrição 1 — Single Pass:</strong> Cada instância é processada exatamente uma vez. É impossível
          rever instâncias passadas, o que elimina validação cruzada tradicional, algoritmos iterativos e qualquer
          técnica que requeira múltiplas iterações sobre os dados históricos.
        </div>
        
          <strong>Restrição 2 — Memória limitada O(1) ou O(log n):</strong> O espaço em memória deve ser constante
          ou crescer logaritmicamente com o número de instâncias processadas. Algoritmos que crescem linearmente
          com <InlineMath math={"n"} /> são inaceitáveis em streams de longa duração.
        
        <div style={S.highlight}>
          <strong>Restrição 3 — Tempo de processamento limitado por instância:</strong> O tempo de processamento
          amortizado por instância deve ser O(1). O algoritmo não pode ficar mais lento à medida que o stream cresce —
          caso contrário, acumula um backlog de instâncias não processadas.
        </div>
        <div style={S.highlight}>
          <strong>Restrição 4 — Previsão a qualquer momento (Anytime Prediction):</strong> O modelo deve ser capaz de
          produzir uma previsão válida em qualquer instante, mesmo que o stream seja interrompido inesperadamente.
          Não há uma fase de "treino completo" antes de poder prever.
        </div>

        <p style={S.p}>
          Estas restrições diferem profundamente do batch ML. Em batch, é aceitável que o treino demore horas;
          em stream, cada instância tem uma janela de processamento de microssegundos. A pipeline típica de
          processamento de um stream segue a sequência:
        </p>

        <div style={S.diagram}>
          <StreamPipelineSVG />
        </div>

        <p style={S.note}>
          As restrições de memória e tempo levam ao desenvolvimento de estruturas de dados especializadas: sketches
          probabilísticos (Count-Min Sketch, HyperLogLog), reservatórios de amostragem e janelas deslizantes.
          Nenhuma destas estruturas existia no contexto batch — são invenções do paradigma stream.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════ SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Concept Drift</h2>
        <p style={S.p}>
          <strong>Concept Drift</strong> ocorre quando a distribuição conjunta dos dados muda ao longo do tempo, tornando
          os modelos anteriormente treinados progressivamente inadequados. Formalmente, existe drift quando:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\exists\\, t_0, t_1 : P_{t_0}(X, y) \\neq P_{t_1}(X, y)"} />
        </div>
        <p style={S.p}>
          É importante distinguir dois tipos de drift segundo a sua causa:
        </p>
        <ul style={{ margin: '0 0 1rem 1.2rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '1rem' }}>
          <li><strong>Real drift (conceptual drift):</strong> a relação <InlineMath math={"P(y \\mid X)"} /> muda — o mesmo padrão de entrada
            passa a ter uma classificação diferente. Exemplo: uma técnica de spam que era nova passa a ser conhecida.</li>
          <li><strong>Virtual drift (feature drift / covariate shift):</strong> apenas <InlineMath math={"P(X)"} /> muda,
            mas <InlineMath math={"P(y \\mid X)"} /> mantém-se. Exemplo: novos tópicos surgem no Twitter, mas as regras de
            relevância não mudam.</li>
        </ul>

        <p style={S.p}>Os quatro padrões temporais de concept drift, visualizados abaixo em termos de mudança de <InlineMath math={"P(y|x)"} /> ao longo do tempo:</p>

        <div style={S.diagram}>
          <DriftTypesSVG />
        </div>

        <p style={S.p}>
          Exemplos reais de cada tipo:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Exemplo</th>
              <th style={S.th}>Implicação para o modelo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Súbito</strong></td>
              <td style={S.td}>Fraude bancária após nova regulação; ataque de zero-day</td>
              <td style={S.td}>O modelo falha imediatamente; requer deteção rápida</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Gradual</strong></td>
              <td style={S.td}>Filtros anti-spam (spammers adaptam-se progressivamente)</td>
              <td style={S.td}>Degradação lenta; difícil distinguir de ruído</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Incremental</strong></td>
              <td style={S.td}>Modelos climáticos; envelhecimento de equipamentos industriais</td>
              <td style={S.td}>Requer atualização contínua; janelas de tempo ajudam</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Recorrente</strong></td>
              <td style={S.td}>Sazonalidade no retalho; padrões de tráfego dia/noite</td>
              <td style={S.td}>Manter memória de conceitos anteriores é vantajoso</td>
            </tr>
          </tbody>
        </table>
        <p style={S.note}>
          Distinguir drift real de ruído estatístico é um dos maiores desafios em stream mining.
          Um falso positivo de drift leva a descartar um modelo válido e a re-treinar desnecessariamente —
          o que tem um custo computacional e de performance significativo.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════ SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Avaliação Prequencial</h2>
        <p style={S.p}>
          A avaliação de modelos de stream não pode recorrer a holdout tradicional, pois os dados chegam continuamente
          e não existe um conjunto de teste fixo. O método padrão é a <strong>avaliação prequencial</strong>
          (<em>interleaved test-then-train</em>): para cada nova instância <InlineMath math={"(\\mathbf{x}_t, y_t)"} />,
          o modelo faz primeiro uma <strong>previsão</strong> (teste), e só depois usa a instância para
          <strong> atualizar</strong> o modelo (treino).
        </p>

        <div style={S.diagram}>
          <PrequentialSVG />
        </div>

        <p style={S.p}>
          A <strong>acurácia prequencial com fator de esquecimento</strong> (fading window) pondera
          instâncias mais recentes com maior peso:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\text{Acc}_{\\text{preq}}(t) = \\frac{\\sum_{i=1}^{t} w^{t-i} \\cdot \\mathbf{1}[\\hat{y}_i = y_i]}{\\sum_{i=1}^{t} w^{t-i}}"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"w \\in (0, 1]"} /> é o fator de desconto. Com <InlineMath math={"w = 1"} /> obtemos
          a acurácia cumulativa; com <InlineMath math={"w < 1"} /> as instâncias mais antigas têm peso exponencialmente menor,
          tornando a métrica mais sensível a mudanças recentes de performance.
        </p>

        <p style={S.p}>
          A <strong>Kappa Statistic</strong> corrige a acurácia pelo desempenho de um classificador aleatório baseado
          nas frequências de classe observadas — essencial em datasets com classes desequilibradas:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\kappa = \\frac{p_0 - p_e}{1 - p_e}"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"p_0"} /> é a acurácia observada e <InlineMath math={"p_e"} /> é a acurácia esperada
          por acaso. Valores de interpretação:
        </p>
        

        <p style={S.note}>
          A kappa statistic é especialmente crítica em deteção de intrusões ou fraude, onde 99% das instâncias
          são benignas. Um classificador que preveja sempre "benigno" obtém 99% de acurácia mas κ ≈ 0.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════ SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Sliding Windows e Reservatórios</h2>
        <p style={S.p}>
          Como os streams são potencialmente infinitos, é necessário recorrer a estruturas que permitam manter
          um resumo compacto dos dados. As principais abordagens são:
        </p>

        
          <strong>Janela de tamanho fixo (Sliding Window):</strong> mantém as últimas <InlineMath math={"W"} /> instâncias
          em memória. Quando chega uma nova instância, a mais antiga é descartada (FIFO). Simples e eficaz para
          capturar comportamento recente; sensível à escolha de <InlineMath math={"W"} />.
        
        <div style={S.highlight}>
          <strong>Landmark Window:</strong> mantém todas as instâncias desde um ponto de referência fixo (o "landmark").
          Útil quando o ponto de início do stream é relevante, mas cresce linearmente com o tempo.
        </div>
        <div style={S.highlight}>
          <strong>Janela com decaimento temporal (Time-Decayed Window):</strong> aplica um peso exponencialmente
          decrescente a instâncias mais antigas, sem as descartar abruptamente. Versão contínua do fator
          de esquecimento da acurácia prequencial.
        </div>

        <div style={S.diagram}>
          <SlidingWindowSVG />
        </div>

        <p style={S.p}>
          Para obter uma <strong>amostra aleatória uniforme</strong> de um stream sem o armazenar na totalidade,
          usa-se o algoritmo de <strong>Reservoir Sampling</strong> (Vitter, 1985). Mantém um reservatório de
          tamanho <InlineMath math={"k"} /> com a garantia de que cada instância tem igual probabilidade de estar
          no reservatório:
        </p>
        <div style={S.math}>
          <BlockMath math={"P(\\text{instância } i \\text{ está no reservatório após } n \\text{ instâncias}) = \\frac{k}{n}"} />
        </div>
        

        <p style={S.p}>
          A elegância do reservoir sampling está na sua prova: no passo <InlineMath math={"n"} />, a instância
          atual é incluída com probabilidade <InlineMath math={"k/n"} />; todas as instâncias previamente no
          reservatório têm probabilidade <InlineMath math={"k/n"} /> de sobreviver — o que garante uniformidade
          por indução.
        </p>
        <p style={S.note}>
          Reservoir sampling é usado internamente por vários classificadores de stream para manter amostras de treino
          representativas sem viés temporal, por exemplo em ensembles baseados em bagging online.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════ SECTION 6 */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Frameworks: MOA e River</h2>
        <p style={S.p}>
          Dois frameworks dominam o ecossistema de data stream mining: o <strong>MOA</strong> (Massive Online Analysis),
          padrão académico implementado em Java, e o <strong>River</strong>, a alternativa Python moderna orientada
          para produção.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Framework</th>
              <th style={S.th}>Linguagem</th>
              <th style={S.th}>Algoritmos Principais</th>
              <th style={S.th}>Melhor Para</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>MOA</strong></td>
              <td style={S.td}>Java</td>
              <td style={S.td}>HoeffdingTree, ADWIN, OzaBag, OzaBoost, SAMkNN</td>
              <td style={S.td}>Investigação académica, benchmarking, datasets sintéticos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>River</strong></td>
              <td style={S.td}>Python</td>
              <td style={S.td}>HoeffdingTree, ADWIN, KSWIN, ARF, SGD online</td>
              <td style={S.td}>Produção, integração com ecossistema Python (scikit-learn API)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>scikit-multiflow</strong></td>
              <td style={S.td}>Python</td>
              <td style={S.td}>(descontinuado — substituído pelo River)</td>
              <td style={S.td}>Projetos legados; não recomendado para novos projetos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Flink ML</strong></td>
              <td style={S.td}>Java/Python</td>
              <td style={S.td}>Regressão online, clustering incremental</td>
              <td style={S.td}>Sistemas distribuídos de larga escala</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          O River adopta uma <strong>API de pipelines</strong> muito próxima do scikit-learn, onde os componentes são
          encadeados com o operador <code>|</code>. Cada componente implementa os métodos <code>learn_one(x, y)</code> e
          <code> predict_one(x)</code>, garantindo a semântica de single pass:
        </p>
        

        <p style={S.p}>
          No MOA, o protocolo equivalente é configurado via linha de comandos ou GUI, com o gerador de stream
          e o classificador como parâmetros:
        </p>
        

        <p style={S.note}>
          River é o sucessor direto do scikit-multiflow. Para novos projetos em Python, recomenda-se sempre River.
          MOA permanece o standard de benchmarking em publicações académicas — a maioria dos papers de stream mining
          reporta resultados com MOA.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════ SECTION 7 */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Casos de Uso Reais</h2>
        <p style={S.p}>
          Os data streams surgem em domínios muito diversos. A escolha do algoritmo de stream e da estratégia
          de gestão de drift depende das características do domínio — frequência do stream, tipo de drift esperado
          e requisitos de latência. O diagrama seguinte classifica quatro casos de uso num espaço
          frequência × velocidade de drift:
        </p>

        <div style={S.diagram}>
          <UseCasesSVG />
        </div>

        <div style={S.highlight}>
          <strong>Deteção de Intrusões em Redes:</strong> O tráfego de rede gera milhões de pacotes por segundo.
          Os atacantes adaptam as suas técnicas deliberadamente para evadir deteção — drift adversarial.
          Algoritmos como o Adaptive Random Forest (ARF) com deteção de drift integrada são preferidos.
          A acurácia prequencial com janela deslizante é crítica para detetar degradação em tempo real.
        </div>

        <div style={S.highlight}>
          <strong>Manutenção Preditiva (IoT):</strong> Sensores industriais monitorizam vibração, temperatura
          e pressão continuamente. O desgaste dos equipamentos produz drift incremental — os padrões de falha
          mudam gradualmente. Os modelos devem atualizar-se continuamente para acompanhar o envelhecimento.
          Latência de segundos é aceitável; aqui a interpretabilidade também importa.
        </div>

        <div style={S.highlight}>
          <strong>Recomendações em Tempo Real (E-commerce):</strong> As preferências dos utilizadores mudam
          com tendências, sazonalidade e novos produtos (drift recorrente e gradual). Sistemas como o
          Netflix Prize ou streams de clickstream do Amazon requerem atualização de modelos de recomendação
          com cada interação do utilizador — sem poder re-treinar offline.
        </div>

        <div style={S.highlight}>
          <strong>Deteção de Fraude Financeira:</strong> As transações fraudulentas mudam de padrão rapidamente
          (drift súbito após novos esquemas) e gradualmente (adaptação à deteção existente). Os modelos de stream
          devem equilibrar a sensibilidade a novo drift com a estabilidade para evitar falsos positivos
          — o custo de um falso negativo (fraude não detetada) é alto, mas o custo de um falso positivo
          (transação legítima bloqueada) também é significativo.
        </div>

        <p style={S.note}>
          Em todos estes domínios, a chave não é apenas o algoritmo de classificação — é o sistema completo:
          deteção de drift, política de adaptação (reset vs. atualização incremental), e protocolo de avaliação
          que reflita o desempenho real no stream.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════ SYNTHESIS */}
      <h2 style={S.h2}>8. Síntese do Módulo</h2>
      <div style={{ ...S.highlight, borderRadius: 12, padding: '1.5rem' }}>
        <p style={{ ...S.p, marginBottom: '0.75rem' }}>
          Este módulo estabeleceu os fundamentos do paradigma de Data Stream Mining. Os conceitos-chave a reter:
        </p>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2.2, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
          <li>
            Data Streams são fluxos contínuos, potencialmente ilimitados, de dados que chegam sequencialmente —
            o oposto do paradigma batch onde todos os dados estão disponíveis a priori.
          </li>
          <li>
            As <strong>quatro restrições formais</strong> (single pass, memória O(1)/O(log n), tempo O(1) por instância,
            anytime prediction) definem o que conta como algoritmo válido de stream mining.
          </li>
          <li>
            <strong>Concept Drift</strong> — mudança de <InlineMath math={"P(y|x)"} /> ou <InlineMath math={"P(x)"} /> ao longo
            do tempo — é inevitável em streams reais e exige que os modelos se adaptem continuamente.
            Os quatro tipos (súbito, gradual, incremental, recorrente) requerem estratégias distintas.
          </li>
          <li>
            A <strong>avaliação prequencial</strong> (interleaved test-then-train) é o protocolo padrão para streams:
            cada instância é usada primeiro para teste, depois para treino, sem viés de lookahead.
          </li>
          <li>
            A <strong>Kappa Statistic</strong> complementa a acurácia prequencial em cenários com desequilíbrio
            de classes, corrigindo o baseline de um classificador aleatório.
          </li>
          <li>
            <strong>Sliding windows</strong> e <strong>reservoir sampling</strong> são as estruturas de dados
            fundamentais para gerir a restrição de memória: as primeiras mantêm as instâncias mais recentes,
            os segundos garantem amostras uniformes do stream inteiro.
          </li>
          <li>
            <strong>MOA</strong> (Java, padrão académico) e <strong>River</strong> (Python, produção) são os
            frameworks de referência — MOA para benchmarking e investigação, River para integração com o
            ecossistema Python moderno.
          </li>
          <li>
            Casos de uso como deteção de intrusões, manutenção preditiva, recomendações em tempo real e
            fraude financeira ilustram a amplitude e a relevância prática do stream mining em diferentes
            combinações de frequência de dados e velocidade de drift.
          </li>
        </ul>
      </div>
    </div>
  );
}
