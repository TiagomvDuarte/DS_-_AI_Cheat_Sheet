import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    color: 'var(--text-secondary)', textDecoration: 'none',
    fontSize: '0.9rem', marginBottom: '2.5rem',
  },
  tag: {
    display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`,
    fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem',
    borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: {
    background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)',
    borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem',
  },
  note: {
    background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`,
    borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem',
    fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0',
  },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: {
    background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
    borderRadius: 8, padding: '1rem', fontFamily: 'monospace',
    fontSize: '0.85rem', color: 'var(--text-primary)',
    overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre',
  },
  diagram: {
    background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
    borderRadius: 10, padding: '1.25rem', margin: '1.25rem 0',
    display: 'flex', justifyContent: 'center', overflowX: 'auto',
  },
  math: {
    background: 'var(--bg-secondary)', border: '1px solid var(--card-border)',
    borderRadius: 8, padding: '1rem 1.25rem', margin: '1rem 0',
    overflowX: 'auto',
  },
};

/* ─── SVG: Pirâmide de Hierarquia de Memória ─── */
function PyramidSVG() {
  const layers = [
    { label: 'Registos',   lat: '1 ciclo',    bw: '~TB/s',    cap: '<1 KB',  fill: '#4a9eed' },
    { label: 'Cache L1',   lat: '4 ciclos',   bw: '1 TB/s',   cap: '32 KB',  fill: '#0369a1' },
    { label: 'Cache L2',   lat: '12 ciclos',  bw: '400 GB/s', cap: '256 KB', fill: '#38bdf8' },
    { label: 'Cache L3',   lat: '40 ciclos',  bw: '100 GB/s', cap: '8 MB',   fill: '#0284c7' },
    { label: 'RAM (DRAM)', lat: '200 ciclos', bw: '50 GB/s',  cap: '32 GB',  fill: '#7dd3fc' },
    { label: 'NVMe SSD',   lat: '~100 µs',    bw: '7 GB/s',   cap: '2 TB',   fill: '#94a3b8' },
  ];
  const W = 700, H = 340;
  const baseW = 600, topW = 60, rowH = 48;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H - 10}`} style={{ maxWidth: '100%' }}>
      {layers.map((l, i) => {
        const n = layers.length;
        const wFrac = topW + (baseW - topW) * (i + 1) / n;
        const wFracPrev = topW + (baseW - topW) * i / n;
        const x0 = (W - wFracPrev) / 2;
        const x1 = (W - wFracPrev) / 2 + wFracPrev;
        const x2 = (W - wFrac) / 2 + wFrac;
        const x3 = (W - wFrac) / 2;
        const y = i * rowH + 10;
        const cy = y + rowH / 2;
        return (
          <g key={i}>
            <polygon
              points={`${x0},${y} ${x1},${y} ${x2},${y + rowH} ${x3},${y + rowH}`}
              fill={l.fill} stroke="#fff" strokeWidth="1.5" opacity="0.9"
            />
            <text x={W / 2} y={cy - 6} textAnchor="middle" fill="#fff" fontWeight="700" fontSize="13">
              {l.label}
            </text>
            <text x={W / 2} y={cy + 9} textAnchor="middle" fill="#fff" fontSize="10" opacity="0.92">
              {l.lat} · {l.bw} · {l.cap}
            </text>
          </g>
        );
      })}
      <text x="6" y="20" fill="#4a9eed" fontSize="10" fontWeight="600">↑ Rápido</text>
      <text x="6" y={H - 8} fill="#6b7280" fontSize="10" fontWeight="600">↓ Lento</text>
    </svg>
  );
}

/* ─── SVG: Row-major vs Column-major ─── */
function LocalitySVG() {
  const COLS = 5, ROWS = 4, CS = 44;
  const pad = 14;
  // Row-major: access (0,0),(0,1),(0,2)... — contiguous
  // Column-major: access (0,0),(1,0),(2,0)... — stride COLS
  const rowMajorAccess = [0, 1, 2, 3, 4]; // first row
  const colMajorAccess = [0, 5, 10, 15];  // first column (stride COLS)

  function Grid({ offsetX, label, highlight, hlColor, missIndices }) {
    return (
      <g transform={`translate(${offsetX},0)`}>
        <text x={COLS * CS / 2} y="14" textAnchor="middle" fill="var(--text-primary)" fontWeight="700" fontSize="12">{label}</text>
        {Array.from({ length: ROWS }).map((_, r) =>
          Array.from({ length: COLS }).map((_, c) => {
            const idx = r * COLS + c;
            const isHit = highlight.includes(idx);
            const isMiss = missIndices && missIndices.includes(idx);
            return (
              <rect
                key={idx}
                x={c * CS} y={r * CS + 20}
                width={CS - 3} height={CS - 3} rx="4"
                fill={isHit ? hlColor : isMiss ? 'rgba(74,158,237,0.15)' : 'var(--bg-secondary)'}
                stroke={isHit ? hlColor : 'var(--card-border)'}
                strokeWidth={isHit ? 2 : 1}
                opacity={isHit ? 1 : 0.7}
              />
            );
          })
        )}
        {/* cache line bracket */}
        <rect x={0} y={20} width={COLS * CS - 3} height={CS - 3}
          fill="none" stroke={hlColor} strokeWidth="2" strokeDasharray="4 2" rx="4" opacity="0.5" />
        <text x={COLS * CS / 2} y={ROWS * CS + 36} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
          {highlight.length > 1 ? '1 cache miss — todos na mesma linha' : 'miss por cada acesso (stride)'}
        </text>
      </g>
    );
  }

  const W = 560, H = 230;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
      {/* Row-major */}
      <Grid offsetX={pad} label="Row-major (amigo da cache)" highlight={rowMajorAccess} hlColor="#4a9eed" />
      {/* Column-major */}
      <Grid offsetX={pad + COLS * CS + 40} label="Column-major (inimigo da cache)" highlight={colMajorAccess} hlColor="#94a3b8" missIndices={colMajorAccess} />
      {/* Labels */}
      <text x={pad + COLS * CS / 2} y={H - 4} textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="600">✓ Sequencial — prefetch eficiente</text>
      <text x={pad + COLS * CS + 40 + COLS * CS / 2} y={H - 4} textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="600">✗ Salto de {COLS} elementos — cache miss</text>
    </svg>
  );
}

/* ─── SVG: MESI FSM ─── */
function MesiSVG() {
  const W = 600, H = 320;
  const states = [
    { id: 'M', label: 'Modified', x: 120, y: 80, fill: '#4a9eed' },
    { id: 'E', label: 'Exclusive', x: 480, y: 80, fill: '#4a9eed' },
    { id: 'S', label: 'Shared', x: 480, y: 240, fill: '#4a9eed' },
    { id: 'I', label: 'Invalid', x: 120, y: 240, fill: '#94a3b8' },
  ];
  const R = 38;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
        </marker>
      </defs>
      {/* Edges */}
      {/* M → I: another core reads → flush+share → actually M→S */}
      <line x1={120} y1={80} x2={480} y2={240} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" strokeDasharray="5 3" />
      <text x={310} y={155} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">outro núcleo lê (flush→S)</text>
      {/* E → M: local write */}
      <path d="M480,60 Q300,10 120,60" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" />
      <text x={300} y={22} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">escrita local</text>
      {/* E → S: outro núcleo lê */}
      <line x1={480} y1={118} x2={480} y2={202} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" />
      <text x={510} y={162} fontSize="9.5" fill="var(--text-secondary)">outro lê</text>
      {/* S → I: invalidate */}
      <line x1={442} y1={240} x2={158} y2={240} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" />
      <text x={300} y={255} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">invalidação (escrita remota)</text>
      {/* I → E: cache miss exclusivo */}
      <path d="M120,202 Q120,140 442,80" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" strokeDasharray="5 3" />
      <text x={220} y={118} fontSize="9.5" fill="var(--text-secondary)">miss — carga exclusiva</text>
      {/* I → S: miss partilhado */}
      <path d="M158,255 Q300,300 442,255" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" strokeDasharray="5 3" />
      <text x={300} y={300} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">miss — cópia partilhada</text>
      {/* M → I via write-back */}
      <line x1={120} y1={118} x2={120} y2={202} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" />
      <text x={50} y={162} fontSize="9.5" fill="var(--text-secondary)">evicção</text>
      {/* State circles */}
      {states.map(s => (
        <g key={s.id}>
          <circle cx={s.x} cy={s.y} r={R} fill={s.fill} opacity="0.85" />
          <text x={s.x} y={s.y - 6} textAnchor="middle" fill="#fff" fontWeight="800" fontSize="18">{s.id}</text>
          <text x={s.x} y={s.y + 12} textAnchor="middle" fill="#fff" fontSize="10">{s.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ─── SVG: False Sharing ─── */
function FalseSharingSVG() {
  const W = 560, H = 220;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
      {/* Cache line box */}
      <rect x={80} y={90} width={400} height={60} rx="8"
        fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x={280} y={78} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="600">
        Linha de cache — 64 bytes
      </text>
      {/* Variable a */}
      <rect x={90} y={100} width={180} height={40} rx="5"
        fill="rgba(74,158,237,0.25)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x={180} y={124} textAnchor="middle" fontSize="13" fontWeight="700" fill="#4a9eed">a (8 bytes)</text>
      {/* Variable b */}
      <rect x={290} y={100} width={180} height={40} rx="5"
        fill="rgba(125,211,252,0.25)" stroke="#7dd3fc" strokeWidth="1.5" />
      <text x={380} y={124} textAnchor="middle" fontSize="13" fontWeight="700" fill="#7dd3fc">b (8 bytes)</text>
      {/* Thread arrows */}
      <path d="M180,90 L180,50" fill="none" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arr2)" />
      <text x={180} y={40} textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="600">Thread 0 escreve a</text>
      <path d="M380,90 L380,50" fill="none" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arr2)" />
      <text x={380} y={40} textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="600">Thread 1 escreve b</text>
      {/* Invalidation arrows */}
      <path d="M80,160 Q40,180 40,200" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M480,160 Q520,180 520,200" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="4 2" />
      <text x={280} y={195} textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="600">
        Toda a linha invalidada em ambos os núcleos a cada escrita
      </text>
      <defs>
        <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── SVG: NUMA ─── */
function NumaSVG() {
  const W = 620, H = 270;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
      {/* Socket 0 */}
      <rect x={10} y={10} width={250} height={240} rx="12"
        fill="rgba(74,158,237,0.2)" stroke="#4a9eed" strokeWidth="2" />
      <text x={135} y={32} textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Socket 0</text>
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x={20 + (i % 2) * 110} y={45 + Math.floor(i / 2) * 65} width={90} height={50} rx="8"
            fill="#4a9eed" opacity="0.8" />
          <text x={65 + (i % 2) * 110} y={74 + Math.floor(i / 2) * 65} textAnchor="middle"
            fontSize="11" fontWeight="700" fill="#fff">Core {i}</text>
        </g>
      ))}
      <rect x={30} y={190} width={200} height={40} rx="8" fill="#4a9eed" opacity="0.7" />
      <text x={130} y={214} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="600">RAM Local — 32 GB</text>

      {/* Socket 1 */}
      <rect x={360} y={10} width={250} height={240} rx="12"
        fill="rgba(125,211,252,0.08)" stroke="#7dd3fc" strokeWidth="2" />
      <text x={485} y={32} textAnchor="middle" fontSize="12" fontWeight="700" fill="#7dd3fc">Socket 1</text>
      {[4, 5, 6, 7].map((c, i) => (
        <g key={c}>
          <rect x={370 + (i % 2) * 110} y={45 + Math.floor(i / 2) * 65} width={90} height={50} rx="8"
            fill="#7dd3fc" opacity="0.8" />
          <text x={415 + (i % 2) * 110} y={74 + Math.floor(i / 2) * 65} textAnchor="middle"
            fontSize="11" fontWeight="700" fill="#fff">Core {c}</text>
        </g>
      ))}
      <rect x={380} y={190} width={200} height={40} rx="8" fill="#7dd3fc" opacity="0.7" />
      <text x={480} y={214} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="600">RAM Local — 32 GB</text>

      {/* QPI/UPI link */}
      <line x1={260} y1={135} x2={360} y2={135} stroke="#4a9eed" strokeWidth="3" strokeDasharray="8 4" />
      <text x={310} y={125} textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="700">QPI/UPI</text>
      <text x={310} y={155} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">~2-3× latência remota</text>

      {/* Local access label */}
      <text x={135} y={270} textAnchor="middle" fontSize="9.5" fill="#4a9eed" fontWeight="600">acesso local: 1× latência</text>
      <text x={485} y={270} textAnchor="middle" fontSize="9.5" fill="#7dd3fc" fontWeight="600">acesso local: 1× latência</text>
    </svg>
  );
}

/* ─── SVG: Prefetch Pipeline ─── */
function PrefetchSVG() {
  const W = 680, H = 160;
  const items = ['N-1', 'N', 'N+1', 'N+2', 'N+3'];
  const CW = 88, CH = 50;
  const startX = 28;
  const y = 60;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
      <text x={300} y={22} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
        Pipeline de Prefetch de Hardware
      </text>
      {items.map((label, i) => {
        const x = startX + i * (CW + 24);
        const fills   = ['var(--bg-secondary)', '#4a9eed', 'rgba(74,158,237,0.35)', 'rgba(74,158,237,0.22)', 'rgba(74,158,237,0.12)'];
        const strokes = ['var(--card-border)',   '#4a9eed', '#4a9eed',               '#38bdf8',               '#0284c7'];
        const textC   = ['var(--text-secondary)','#fff',    '#4a9eed',               '#38bdf8',               '#0284c7'];
        return (
          <g key={i}>
            <rect x={x} y={y} width={CW} height={CH} rx="8"
              fill={fills[i]} stroke={strokes[i]} strokeWidth={i === 1 ? 2.5 : 1.5} />
            <text x={x + CW / 2} y={y + CH / 2 + 5} textAnchor="middle"
              fill={textC[i]} fontSize="13" fontWeight={i === 1 ? '800' : '600'}>{label}</text>
            {i < items.length - 1 && (
              <path d={`M${x + CW + 3},${y + CH / 2} L${x + CW + 21},${y + CH / 2}`}
                fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr3)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arr3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#4a9eed" />
        </marker>
      </defs>
      <text x={startX + CW / 2} y={y + CH + 18} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">em L1</text>
      <text x={startX + CW / 2 + 90} y={y + CH + 18} textAnchor="middle" fontSize="9.5" fill={color} fontWeight="600">CPU usa N</text>
      <text x={startX + 280} y={y + CH + 18} textAnchor="middle" fontSize="9.5" fill={color}>↑ prefetch automático para L1</text>
    </svg>
  );
}

/* ─── SVG: Tiling/Blocking ─── */
function TilingSVG() {
  const W = 580, H = 220;
  const N = 6, CS = 26;
  function NaiveGrid({ ox, oy }) {
    return (
      <g transform={`translate(${ox},${oy})`}>
        <text x={N * CS / 2} y={-6} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Naïve (sem tiling)</text>
        {Array.from({ length: N }).map((_, r) =>
          Array.from({ length: N }).map((_, c) => (
            <rect key={`${r}-${c}`} x={c * CS} y={r * CS} width={CS - 2} height={CS - 2} rx="3"
              fill={r === 0 ? 'rgba(74,158,237,0.45)' : c === 0 ? 'rgba(74,158,237,0.25)' : 'var(--bg-secondary)'}
              stroke="var(--text-secondary)" strokeWidth="1" />
          ))
        )}
        <text x={N * CS / 2} y={N * CS + 16} textAnchor="middle" fontSize="9" fill="#4a9eed">acesso por coluna → cache miss</text>
      </g>
    );
  }
  function TiledGrid({ ox, oy, T = 2 }) {
    return (
      <g transform={`translate(${ox},${oy})`}>
        <text x={N * CS / 2} y={-6} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-primary)">Blocked (tile {T}×{T})</text>
        {Array.from({ length: N }).map((_, r) =>
          Array.from({ length: N }).map((_, c) => {
            const tr = Math.floor(r / T), tc = Math.floor(c / T);
            const colors = ['rgba(74,158,237,0.35)', 'rgba(125,211,252,0.30)', 'rgba(3,105,161,0.30)', 'rgba(2,132,199,0.35)', 'rgba(74,158,237,0.20)', 'rgba(125,211,252,0.20)', 'rgba(3,105,161,0.20)', 'rgba(74,158,237,0.15)', 'rgba(2,132,199,0.15)', 'rgba(125,211,252,0.15)'];
            return (
              <rect key={`${r}-${c}`} x={c * CS} y={r * CS} width={CS - 2} height={CS - 2} rx="3"
                fill={colors[(tr * 3 + tc) % colors.length]}
                stroke={color} strokeWidth="0.5" />
            );
          })
        )}
        {/* Tile borders */}
        {Array.from({ length: N / T }).map((_, tr) =>
          Array.from({ length: N / T }).map((_, tc) => (
            <rect key={`t${tr}-${tc}`} x={tc * T * CS} y={tr * T * CS}
              width={T * CS - 2} height={T * CS - 2}
              fill="none" stroke={color} strokeWidth="2" rx="3" />
          ))
        )}
        <text x={N * CS / 2} y={N * CS + 16} textAnchor="middle" fontSize="9" fill={color}>bloco cabe em cache — reutilização</text>
      </g>
    );
  }
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
      <NaiveGrid ox={40} oy={30} />
      <TiledGrid ox={300} oy={30} T={2} />
    </svg>
  );
}

/* ─────────────────────── COMPONENTE PRINCIPAL ─────────────────────── */
export default function PAR2() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>
      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Arquitectura de Memória e Cache</h1>
      <p style={S.lead}>
        O desempenho de programas paralelos é, em grande medida, limitado não pelo processador mas pela
        hierarquia de memória. Compreender cache lines, coerência MESI, false sharing e NUMA é
        indispensável para escrever código HPC eficiente.
      </p>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Hierarquia de Memória</h2>
        <p style={S.p}>
          Os sistemas modernos organizam a memória em múltiplos níveis: quanto mais rápido o nível,
          menor a capacidade e mais elevado o custo por bit. O processador procura sempre no nível
          mais rápido primeiro (registo) e sobe a hierarquia em caso de <em>miss</em>.
        </p>
        <div style={S.diagram}>
          <PyramidSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível</th>
              <th style={S.th}>Latência típica</th>
              <th style={S.th}>Largura de banda</th>
              <th style={S.th}>Capacidade típica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Registos', '1 ciclo', '~TB/s', '< 1 KB'],
              ['Cache L1', '4 ciclos', '1 TB/s', '32 KB por núcleo'],
              ['Cache L2', '12 ciclos', '400 GB/s', '256 KB por núcleo'],
              ['Cache L3', '40 ciclos', '100 GB/s', '8–32 MB (partilhada)'],
              ['RAM (DRAM)', '200 ciclos', '50 GB/s', '16–512 GB'],
              ['NVMe SSD', '~100 µs', '7 GB/s', '500 GB – 8 TB'],
            ].map(([n, l, b, c]) => (
              <tr key={n}>
                <td style={S.td}><strong>{n}</strong></td>
                <td style={S.td}>{l}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Princípio da localidade:</strong> os programas tendem a aceder repetidamente às
            mesmas zonas de memória (localidade temporal) e a posições adjacentes (localidade espacial).
            A hierarquia de cache explora exactamente estes padrões.
          </p>
        </div>
        <div style={S.note}>
          A latência da RAM (200 ciclos) corresponde a cerca de 60–80 ns num processador a 3 GHz.
          Num ciclo de leitura ausente de cache, o processador fica bloqueado durante esse tempo —
          justificando toda a complexidade da hierarquia.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Cache Lines e Localidade</h2>
        <p style={S.p}>
          A cache não opera byte a byte: quando um dado não está em cache (<em>cache miss</em>), o
          controlador carrega um bloco contíguo de <strong>64 bytes</strong> (<em>cache line</em>).
          Isto explora dois padrões — <strong>localidade espacial</strong> (acesso a elementos
          próximos, e.g. percorrer um array sequencialmente) e <strong>localidade temporal</strong>{' '}
          (reutilização do mesmo dado num curto intervalo, e.g. variável de controlo de um ciclo).
        </p>
        <div style={S.diagram}>
          <LocalitySVG />
        </div>
        <div style={S.note}>
          Em NumPy, os arrays são row-major por defeito (ordem C). Usar <code>order='F'</code> cria
          layout column-major (Fortran). Ao operações sobre colunas em arrays C, há
          sempre penalização de cache.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Protocolo MESI — Coerência de Cache</h2>
        <p style={S.p}>
          Num sistema multi-núcleo, cada núcleo tem a sua própria L1 e L2. Quando dois núcleos
          carregam o mesmo endereço de memória, existem <strong>duas cópias</strong> do mesmo dado.
          Se um núcleo escrever, a outra cópia torna-se obsoleta (<em>stale</em>). O protocolo
          MESI garante coerência através de quatro estados por linha de cache.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estado</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Cópias noutros núcleos?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Modified (M)', 'Linha modificada; memória principal desactualizada', 'Não'],
              ['Exclusive (E)', 'Linha limpa; apenas este núcleo a tem em cache', 'Não'],
              ['Shared (S)', 'Linha limpa; pode existir noutros núcleos', 'Sim (leitura)'],
              ['Invalid (I)', 'Linha não válida — próximo acesso é cache miss', '—'],
            ].map(([s, d, c]) => (
              <tr key={s}>
                <td style={S.td}><strong>{s}</strong></td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.diagram}>
          <MesiSVG />
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Exemplo concreto:</strong></p>
          <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 2, margin: 0 }}>
            <li>Core 0 e Core 1 lêem variável <code>x</code> → ambos em estado <strong>S</strong>.</li>
            <li>Core 0 escreve em <code>x</code> → envia sinal de <em>invalidação</em> no bus.</li>
            <li>Linha de Core 1 transita para <strong>I</strong>; linha de Core 0 para <strong>M</strong>.</li>
            <li>Core 1 tenta ler <code>x</code> → cache miss; Core 0 faz flush para memória/bus → Core 1 obtém valor actualizado.</li>
          </ol>
        </div>
        <div style={S.note}>
          O mecanismo de <em>snooping</em> implica que cada controlador de cache "escuta" o bus.
          Em sistemas com muitos núcleos, evolui-se para protocolos baseados em directório.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. False Sharing</h2>
        <p style={S.p}>
          <em>False sharing</em> ocorre quando dois threads modificam <strong>variáveis distintas</strong>
          que residem na <strong>mesma cache line de 64 bytes</strong>. Embora os dados lógicos sejam
          independentes, o protocolo MESI invalida toda a linha sempre que qualquer thread escreve,
          forçando a outra a ir buscar a linha actualizada — um bouncing contínuo entre caches.
        </p>
        <div style={S.diagram}>
          <FalseSharingSVG />
        </div>
        <div style={S.math}>
          <BlockMath math={"\\text{line\\_addr} = \\left\\lfloor \\frac{\\text{addr}}{64} \\right\\rfloor \\times 64"} />
        </div>
        <p style={S.p}>
          Se <code>a</code> estiver no offset 0 e <code>b</code> no offset 8 da mesma struct,
          ambos partilham a mesma linha de cache. A solução é alinhar cada variável a 64 bytes:
        </p>
        <div style={S.note}>
          Em C++17 pode usar <code>std::hardware_destructive_interference_size</code> (tipicamente 64)
          em vez de codificar 64 directamente, garantindo portabilidade.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. NUMA — Non-Uniform Memory Access</h2>
        <p style={S.p}>
          Em servidores com vários sockets, cada socket tem RAM local ligada por um bus dedicado
          (QPI/UPI). Um núcleo pode aceder à RAM do outro socket, mas com latência{' '}
          <strong>2 a 3 vezes superior</strong> — esta assimetria denomina-se NUMA.
        </p>
        <div style={S.diagram}>
          <NumaSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de acesso</th>
              <th style={S.th}>Latência relativa</th>
              <th style={S.th}>Largura de banda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Local (mesmo socket)</td>
              <td style={S.td}>1× (base)</td>
              <td style={S.td}>~50 GB/s por canal</td>
            </tr>
            <tr>
              <td style={S.td}>Remoto (outro socket, 1 hop)</td>
              <td style={S.td}>~2–3×</td>
              <td style={S.td}>~20–30 GB/s</td>
            </tr>
            <tr>
              <td style={S.td}>Remoto (2 hops)</td>
              <td style={S.td}>~3–4×</td>
              <td style={S.td}>~10 GB/s</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          A <strong>política first-touch</strong> do Linux aloca páginas de memória no nó NUMA do
          primeiro thread a tocá-las. Se o thread principal inicializar arrays antes de distribuir
          trabalho, toda a memória fica no nó 0 — threads nos outros nós sofrem acesso remoto.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Thread pinning:</strong> fixar threads a núcleos específicos (<em>CPU affinity</em>)
            garante que permanecem no mesmo nó NUMA e evita migrações de processo com custo de
            invalidação de cache. Em OpenMP: <code>OMP_PROC_BIND=close OMP_PLACES=cores</code>.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Prefetching e Políticas de Escrita</h2>
        <p style={S.p}>
          O <strong>hardware prefetcher</strong> detecta padrões de acesso regular (strides fixos)
          e carrega dados antecipadamente para L1/L2. Quando o padrão é irregular, o prefetcher
          falha e o processador bloqueia à espera de dados.
        </p>
        <div style={S.diagram}>
          <PrefetchSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Política de escrita</th>
              <th style={S.th}>Comportamento</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Write-through</strong></td>
              <td style={S.td}>Escrita simultânea em cache e memória principal</td>
              <td style={S.td}>I/O mapeado, simplicidade de coerência</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Write-back</strong></td>
              <td style={S.td}>Escrita apenas em cache; flush adiado até evicção</td>
              <td style={S.td}>CPU modernas — melhor desempenho</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Write-combining</strong></td>
              <td style={S.td}>Agrupa várias escritas antes de enviar ao bus</td>
              <td style={S.td}>Framebuffers, PCIe DMA</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Os <em>store buffers</em> permitem que o processador continue a executar instruções
          enquanto as escritas são drenadas para cache.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Implicações para HPC</h2>
        <p style={S.p}>
          Em computação de alto desempenho, a largura de banda de memória é frequentemente o
          <strong> bottleneck</strong>, não a capacidade de cálculo do processador. O modelo de
          <em> arithmetic intensity</em> (operações / bytes transferidos) quantifica este limite.
        </p>
        <p style={S.p}>
          <strong>Multiplicação de matrizes ingénua</strong> (N×N) executa <InlineMath math={"2N^3"} /> operações
          sobre <InlineMath math={"3N^2"} /> bytes de dados → intensidade aritmética de <InlineMath math={"O(N)"} />.
          Com <em>blocking/tiling</em>, reutiliza-se o bloco em cache repetidamente, aumentando a
          intensidade aritmética por bloco.
        </p>
        <div style={S.diagram}>
          <TilingSVG />
        </div>
        <div style={S.math}>
          <BlockMath math={"I = \\frac{\\text{FLOP}}{\\text{Bytes}} = \\frac{2 \\cdot B^3}{3 \\cdot B^2 \\cdot 8} = \\frac{B}{12} \\quad \\text{(tile } B \\times B \\text{, doubles)}"} />
        </div>
        <p style={S.p}>
          Com um tile de tamanho <InlineMath math={"B"} />, a intensidade cresce linearmente com <InlineMath math={"B"} />.
          O objectivo é escolher <InlineMath math={"B"} /> tal que <InlineMath math={"3B^2 \\cdot 8"} /> bytes
          (três tiles A, B, C) caibam na cache L2 ou L3.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Algoritmos cache-oblivious</strong> (Frigo et al., 1999) dividem o problema
            recursivamente a metade até caber em cache, sem saber a priori o seu tamanho — óptimos
            para qualquer nível da hierarquia.
          </p>
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>Benefício</th>
              <th style={S.th}>Complexidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Loop tiling / blocking', 'Reutilização de dados em cache', 'Média — parâmetro de tile'],
              ['Cache-oblivious', 'Óptimo para todos os níveis', 'Alta — recursão dividir-e-conquistar'],
              ['Data layout (SoA vs AoS)', 'SIMD + acesso sequencial', 'Baixa — refactor de struct'],
              ['Thread pinning + NUMA-aware alloc', 'Elimina acessos remotos', 'Média — numactl / hwloc'],
              ['Prefetch explícito', 'Oculta latência de miss', 'Baixa — __builtin_prefetch'],
            ].map(([t, b, c]) => (
              <tr key={t}>
                <td style={S.td}><strong>{t}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
