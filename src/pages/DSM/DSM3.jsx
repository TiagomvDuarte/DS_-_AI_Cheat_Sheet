import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
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
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '0.5rem', margin: '1.2rem 0', overflowX: 'auto' },
  svgLabel: { fontSize: 12, fontFamily: 'sans-serif', fill: 'var(--text-primary)' },
};

/* ── SVG: Taxonomia 2×2 ── */
function TaxonomiaMatrix() {
  const cellW = 190;
  const cellH = 90;
  const offX = 155;
  const offY = 50;
  const cells = [
    { col: 0, row: 0, methods: ['DDM', 'EDDM', 'PHT'], label: 'Supervisionado × Erro' },
    { col: 1, row: 0, methods: ['CUSUM', 'STEPD'], label: 'Supervisionado × Distribuição' },
    { col: 0, row: 1, methods: ['—'], label: 'Não-sup. × Erro' },
    { col: 1, row: 1, methods: ['ADWIN', 'KS-test', 'MMD', 'HDDDM'], label: 'Não-sup. × Distribuição' },
  ];
  const w = offX + cellW * 2 + 20;
  const h = offY + cellH * 2 + 20;
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ display: 'block' }}>
        {/* Column headers */}
        <text x={offX + cellW * 0.5} y={22} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>Baseado em Erro</text>
        <text x={offX + cellW * 1.5} y={22} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>Baseado em Distribuição</text>
        {/* Row headers */}
        <text x={offX - 8} y={offY + cellH * 0.5 + 4} textAnchor="end" fontSize={12} fontWeight={700} fill={color}>Supervisionado</text>
        <text x={offX - 8} y={offY + cellH * 1.5 + 4} textAnchor="end" fontSize={12} fontWeight={700} fill={color}>Não-supervisionado</text>
        {/* Cells */}
        {cells.map(({ col, row, methods }) => {
          const x = offX + col * cellW;
          const y = offY + row * cellH;
          return (
            <g key={`${col}-${row}`}>
              <rect x={x + 2} y={y + 2} width={cellW - 4} height={cellH - 4}
                fill={`rgba(${rgb},0.08)`} stroke={`rgba(${rgb},0.35)`} strokeWidth={1.2} rx={6} />
              {methods.map((m, i) => (
                <text key={m} x={x + cellW / 2} y={y + 28 + i * 20}
                  textAnchor="middle" fontSize={12} fontWeight={600}
                  fill={m === '—' ? '#999' : 'var(--text-primary)'}>{m}</text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ── SVG: DDM Timeline ── */
function DDMTimeline() {
  const W = 700; const H = 160;
  const lx = 40; const rx = W - 20; const by = H - 30; const ty = 20;
  // Simulated error curve points
  const pts = [
    [0, 0.08], [60, 0.09], [120, 0.10], [180, 0.09], [240, 0.11],
    [300, 0.12], [360, 0.15], [420, 0.20], [480, 0.28], [540, 0.35],
    [600, 0.40],
  ];
  const minErr = 0.09; const warn = minErr + 0.10; const drift = minErr + 0.18;
  const scaleY = (v) => ty + (H - ty - 30) * (0.45 - v) / 0.45;
  const scaleX = (v) => lx + (rx - lx) * v / 600;
  const pathD = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${scaleX(x).toFixed(1)},${scaleY(y).toFixed(1)}`).join(' ');
  const warnY = scaleY(warn); const driftY = scaleY(drift);
  const warnX = scaleX(300); const driftX = scaleX(420);
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        {/* Warning zone */}
        <rect x={warnX} y={ty} width={driftX - warnX} height={by - ty}
          fill="rgba(234,179,8,0.12)" />
        {/* Drift zone */}
        <rect x={driftX} y={ty} width={rx - driftX} height={by - ty}
          fill="rgba(249,115,22,0.10)" />
        {/* Warning threshold */}
        <line x1={lx} y1={warnY} x2={rx} y2={warnY}
          stroke="#CA8A04" strokeWidth={1.4} strokeDasharray="5,3" />
        <text x={rx + 2} y={warnY + 4} fontSize={10} fill="#CA8A04">warning</text>
        {/* Drift threshold */}
        <line x1={lx} y1={driftY} x2={rx} y2={driftY}
          stroke="#DC2626" strokeWidth={1.4} strokeDasharray="5,3" />
        <text x={rx + 2} y={driftY + 4} fontSize={10} fill="#DC2626">drift</text>
        {/* Error curve */}
        <path d={pathD} fill="none" stroke={color} strokeWidth={2.2} />
        {/* Axes */}
        <line x1={lx} y1={ty} x2={lx} y2={by} stroke="var(--text-secondary)" strokeWidth={1} />
        <line x1={lx} y1={by} x2={rx} y2={by} stroke="var(--text-secondary)" strokeWidth={1} />
        <text x={lx - 5} y={scaleY(0.09)} textAnchor="end" fontSize={10} fill="var(--text-secondary)">p_min</text>
        <text x={W / 2} y={H - 4} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">instâncias</text>
        <text x={lx - 5} y={ty - 4} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">p_n + s_n</text>
        <text x={warnX + 10} y={ty + 14} fontSize={10} fill="#CA8A04">zona de aviso</text>
        <text x={driftX + 6} y={ty + 14} fontSize={10} fill="#DC2626">drift!</text>
      </svg>
    </div>
  );
}

/* ── SVG: DDM vs EDDM side-by-side ── */
function DDMvsEDDM() {
  const W = 680; const H = 150; const half = W / 2 - 10;
  const drawPanel = (label, detectX, color2, offsetX) => {
    const pts = [[0,0.1],[40,0.11],[80,0.12],[120,0.13],[160,0.14],[200,0.16],[240,0.19],[280,0.23],[300,0.28]];
    const sx = (v) => offsetX + 10 + (half - 20) * v / 300;
    const sy = (v) => 20 + (H - 40) * (0.35 - v) / 0.35;
    const d = pts.map(([x,y],i) => `${i===0?'M':'L'}${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(' ');
    return (
      <g>
        <rect x={offsetX + 2} y={2} width={half - 4} height={H - 4} rx={6}
          fill={`rgba(${rgb},0.04)`} stroke={`rgba(${rgb},0.2)`} strokeWidth={1} />
        <path d={d} fill="none" stroke="#f97316" strokeWidth={2} />
        <line x1={sx(detectX)} y1={20} x2={sx(detectX)} y2={H - 20}
          stroke={color2} strokeWidth={2} strokeDasharray="4,3" />
        <text x={offsetX + half / 2} y={H - 5} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-primary)">{label}</text>
        <text x={sx(detectX) -50} y={32} fontSize={10} fill={color2}>deteção</text>
      </g>
    );
  };
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        {drawPanel('DDM — deteção tardia', 280, '#DC2626', 0)}
        {drawPanel('EDDM — deteção precoce', 200, color, W / 2 + 10)}
      </svg>
    </div>
  );
}

/* ── SVG: Page-Hinkley Cumsum ── */
function PHTChart() {
  const W = 680; const H = 170;
  const lx = 50; const rx = W - 30; const by = H - 30; const ty = 20;
  // m_t curve: grows, hits min around x=180, then diverges
  const raw = [
    [0,0],[40,-2],[80,-5],[120,-7],[160,-8],[180,-9],[220,-6],[260,0],[300,8],[340,18],[380,30],[420,40],
  ];
  const sy = (v) => ty + (by - ty) * (45 - v) / 70;
  const sx = (v) => lx + (rx - lx) * v / 420;
  const mt = raw.map(([x,y]) => [sx(x), sy(y)]);
  const minY = sy(-9);
  const lambdaY = sy(-9 + 22); // drift threshold M_t + lambda = -9 + 22 = 13
  const driftX = sx(340);
  const pathMt = mt.map(([x,y],i) => `${i===0?'M':'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        {/* Drift region */}
        <rect x={driftX} y={ty} width={rx - driftX} height={by - ty} fill="rgba(249,115,22,0.10)" />
        {/* M_t line */}
        <line x1={lx} y1={minY} x2={rx} y2={minY} stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="4,3" />
        <text x={lx - 4} y={minY + 4} textAnchor="end" fontSize={10} fill="#94a3b8">M_t</text>
        {/* Lambda threshold */}
        <line x1={lx} y1={lambdaY} x2={rx} y2={lambdaY} stroke="#DC2626" strokeWidth={1.3} strokeDasharray="5,3" />
        <text x={rx - 20} y={lambdaY - 8} fontSize={10} fill="#DC2626">M_t + λ</text>
        {/* m_t curve */}
        <path d={pathMt} fill="none" stroke={color} strokeWidth={2.2} />
        {/* Drift point */}
        <line x1={driftX} y1={ty} x2={driftX} y2={by} stroke="#DC2626" strokeWidth={1.8} strokeDasharray="5,3" />
        <text x={driftX + 4} y={ty + 14} fontSize={10} fill="#DC2626">drift!</text>
        {/* Axes */}
        <line x1={lx} y1={ty} x2={lx} y2={by} stroke="var(--text-secondary)" strokeWidth={1} />
        <line x1={lx} y1={by} x2={rx} y2={by} stroke="var(--text-secondary)" strokeWidth={1} />
        <text x={W / 2} y={H - 4} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">t</text>
        <text x={lx - 4} y={ty - 4} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">m_t</text>
      </svg>
    </div>
  );
}

/* ── SVG: ADWIN sliding window ── */
function ADWINWindow() {
  const W = 680; const H = 160;
  const barH = 36; const barY = 60;
  // Draw timeline bar + cuts
  const cuts = [160, 310, 490];
  const colors = [`rgba(${rgb},0.18)`, `rgba(${rgb},0.28)`, `rgba(${rgb},0.38)`, `rgba(${rgb},0.50)`];
  const segs = [0, ...cuts, W - 20];
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        <text x={W / 2} y={22} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-primary)">
          Janela ADWIN — crescimento e cortes ao longo do tempo
        </text>
        {segs.slice(0,-1).map((x, i) => (
          <g key={i}>
            <rect x={x + 2} y={barY} width={segs[i+1] - x - 4} height={barH}
              fill={colors[i]} rx={4} />
            <text x={(x + segs[i+1]) / 2} y={barY + barH / 2 + 5}
              textAnchor="middle" fontSize={11} fill="var(--text-primary)">
              W{i}
            </text>
          </g>
        ))}
        {cuts.map((cx, i) => (
          <g key={i}>
            <line x1={cx} y1={barY - 10} x2={cx} y2={barY + barH + 10}
              stroke="#DC2626" strokeWidth={2} strokeDasharray="4,3" />
            <text x={cx} y={barY - 14} textAnchor="middle" fontSize={10} fill="#DC2626">corte</text>
          </g>
        ))}
        {/* Arrow showing window grows right */}
        <line x1={20} y1={H - 18} x2={W - 25} y2={H - 18}
          stroke="var(--text-secondary)" strokeWidth={1.2} markerEnd="url(#arr)" />
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        <text x={W / 2} y={H - 4} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
          tempo (stream)
        </text>
        <text x={18} y={H - 20} fontSize={10} fill="var(--text-secondary)">início</text>
      </svg>
    </div>
  );
}

/* ── SVG: KS-test / distribuições ── */
function KSDistributions() {
  const W = 680; const H = 190;
  // Draw two CDFs
  const pts1 = [[0,0],[60,0.05],[120,0.20],[180,0.50],[240,0.80],[300,0.95],[360,1.0]];
  const pts2 = [[0,0],[60,0.01],[120,0.08],[180,0.28],[240,0.60],[300,0.88],[360,1.0]];
  const sx = (v) => 50 + (W - 80) * v / 360;
  const sy = (v) => 170 - 140 * v;
  const path1 = pts1.map(([x,y],i) => `${i===0?'M':'L'}${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(' ');
  const path2 = pts2.map(([x,y],i) => `${i===0?'M':'L'}${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(' ');
  // Max KS distance at x=240
  const ksX = sx(240); const ksY1 = sy(0.80); const ksY2 = sy(0.60);
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        <text x={W / 2} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-primary)">
          Estatística KS — distância máxima entre CDFs
        </text>
        <path d={path1} fill="none" stroke={color} strokeWidth={2.2} />
        <path d={path2} fill="none" stroke="#f97316" strokeWidth={2.2} strokeDasharray="6,3" />
        {/* KS line */}
        <line x1={ksX} y1={ksY1} x2={ksX} y2={ksY2}
          stroke="#DC2626" strokeWidth={2.5} />
        <text x={ksX + 6} y={(ksY1 + ksY2) / 2 + 4} fontSize={11} fill="#DC2626" fontWeight={700}>D_n</text>
        {/* Legend — bottom right */}
        <line x1={W - 160} y1={H - 42} x2={W - 140} y2={H - 42} stroke={color} strokeWidth={2} />
        <text x={W - 134} y={H - 38} fontSize={11} fill="var(--text-primary)">F_t1(x)</text>
        <line x1={W - 160} y1={H - 24} x2={W - 140} y2={H - 24} stroke="#f97316" strokeWidth={2} strokeDasharray="5,3" />
        <text x={W - 134} y={H - 20} fontSize={11} fill="var(--text-primary)">F_t2(x)</text>
        {/* Axes */}
        <line x1={48} y1={175} x2={W - 20} y2={175} stroke="var(--text-secondary)" strokeWidth={1} />
        <line x1={48} y1={30} x2={48} y2={175} stroke="var(--text-secondary)" strokeWidth={1} />
        <text x={W / 2} y={H - 2} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">x</text>
        <text x={42} y={28} textAnchor="end" fontSize={11} fill="var(--text-secondary)">F(x)</text>
      </svg>
    </div>
  );
}

/* ── SVG: Flowchart de decisão ── */
function DecisionFlowchart() {
  const W = 780; const H = 340;
  const box = (x, y, w, h, bg, label, sub) => (
    <g>
      <rect x={x - w/2} y={y - h/2} width={w} height={h} rx={8} fill="var(--bg-secondary)" stroke="none" />
      <rect x={x - w/2} y={y - h/2} width={w} height={h} rx={8}
        fill={bg} stroke={`rgba(${rgb},0.4)`} strokeWidth={1.4} />
      <text x={x} y={y + (sub ? -6 : 4)} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-primary)">{label}</text>
      {sub && <text x={x} y={y + 12} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{sub}</text>}
    </g>
  );
  const diamond = (x, y, w, h, label) => {
    const pts = `${x},${y-h/2} ${x+w/2},${y} ${x},${y+h/2} ${x-w/2},${y}`;
    return (
      <g>
        <polygon points={pts} fill="var(--bg-secondary)" stroke="none" />
        <polygon points={pts} fill={`rgba(${rgb},0.12)`} stroke={color} strokeWidth={1.5} />
        <text x={x} y={y + 5} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>{label}</text>
      </g>
    );
  };
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        {/* ── all lines first so diamonds render on top ── */}

        {/* Start → Q1 */}
        <line x1={W/2} y1={44} x2={W/2} y2={76} stroke="var(--text-secondary)" strokeWidth={1.3} />

        {/* Q1 → left (Sim) */}
        <line x1={W/2 - 140} y1={100} x2={160} y2={100} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <line x1={160} y1={100} x2={160} y2={152} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <text x={W/2 - 150} y={94} fontSize={10} fill="var(--text-secondary)">Sim</text>

        {/* Q1 → right (Não) */}
        <line x1={W/2 + 140} y1={100} x2={570} y2={100} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <line x1={570} y1={100} x2={570} y2={152} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <text x={W/2 + 130} y={94} fontSize={10} fill="var(--text-secondary)">Não</text>

        {/* Q2 left — Sim → EDDM (down-left) */}
        <line x1={60} y1={176} x2={60} y2={270} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <line x1={60} y1={176} x2={160} y2={176} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <text x={82} y={210} fontSize={10} fill="var(--text-secondary)">Sim</text>
        {box(60, 286, 90, 30, `rgba(${rgb},0.15)`, 'EDDM', '')}

        {/* Q2 left — Não → DDM/PHT (down-right) */}
        <line x1={260} y1={176} x2={260} y2={270} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <line x1={160} y1={176} x2={260} y2={176} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <text x={238} y={210} fontSize={10} fill="var(--text-secondary)">Não</text>
        {box(260, 286, 90, 30, `rgba(${rgb},0.15)`, 'DDM/PHT', '')}

        {/* Q3 right — Sim → ADWIN (down-left) */}
        <line x1={460} y1={176} x2={460} y2={270} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <line x1={460} y1={176} x2={570} y2={176} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <text x={472} y={210} fontSize={10} fill="var(--text-secondary)">Sim</text>
        {box(460, 286, 90, 30, `rgba(${rgb},0.15)`, 'ADWIN', '')}

        {/* Q3 right — Não → KS/MMD (down-right) */}
        <line x1={680} y1={176} x2={680} y2={270} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <line x1={570} y1={176} x2={680} y2={176} stroke="var(--text-secondary)" strokeWidth={1.3} />
        <text x={658} y={210} fontSize={10} fill="var(--text-secondary)">Não</text>
        {box(680, 286, 90, 30, `rgba(${rgb},0.15)`, 'KS/MMD', '')}

        {/* ── diamonds and boxes on top ── */}
        {box(W/2, 28, 200, 32, `rgba(${rgb},0.18)`, 'Novo problema de drift', '')}
        {diamond(W/2, 100, 280, 46, 'Tens labels em tempo real?')}
        {diamond(160, 176, 200, 44, 'Drift gradual?')}
        {diamond(570, 176, 220, 44, 'Precisas adaptar janela?')}
      </svg>
    </div>
  );
}

export default function DSM3() {
  return (
    <div style={S.page}>
      <Link to="/dsm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Stream Mining</Link>

      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Deteção de Concept Drift</h1>
      <p style={S.lead}>
        Detetar concept drift de forma fiável é um dos problemas mais exigentes em stream mining. Um detector
        ideal minimiza o tempo de reação após a mudança, mantendo uma baixa taxa de falsos positivos.
        Este módulo apresenta a taxonomia dos métodos, os quatro detectores mais utilizados — DDM, EDDM,
        Page-Hinkley e ADWIN — e os métodos baseados em distribuição, comparando as suas propriedades
        teóricas e empíricas.
      </p>

      {/* ── SECÇÃO 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Taxonomia da Deteção de Drift</h2>
        <p style={S.p}>
          Os métodos de deteção de drift organizam-se segundo duas dimensões independentes: a necessidade
          de <strong>labels</strong> (supervisionado vs. não-supervisionado) e o tipo de sinal monitorizado
          (<strong>baseado em erro</strong> vs. <strong>baseado em distribuição</strong>).
        </p>
        <div style={S.highlight}>
          <strong>Tipos de drift:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><strong>Concept drift</strong> — a relação P(y|x) muda; o mesmo x passa a ter um y diferente</li>
            <li><strong>Virtual drift</strong> — P(x) muda mas P(y|x) permanece estável; não afecta o desempenho</li>
            <li><strong>Feature drift</strong> — estatísticas de features individuais mudam (média, variância)</li>
          </ul>
        </div>
        <p style={S.p}>
          Os métodos <strong>supervisionados</strong> monitorizam métricas derivadas da comparação entre
          previsão e label real (taxa de erro, perda). Requerem labels disponíveis imediatamente ou com
          atraso limitado. Os métodos <strong>não-supervisionados</strong> monitorizam a distribuição dos
          dados de entrada X, sem precisar de y — adequados a cenários onde labels chegam muito tarde
          ou não existem.
        </p>
        <TaxonomiaMatrix />
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '-0.5rem' }}>
          Matriz 2×2: as quatro combinações possíveis com exemplos de métodos em cada célula.
        </p>
        <div style={S.note}>
          A distinção virtual vs. concept drift é crucial: reagir a virtual drift (onde o desempenho
          não se degrada) desperdiça capacidade computacional e pode até piorar o modelo ao descartar
          dados ainda válidos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. DDM — Drift Detection Method</h2>
        <p style={S.p}>
          O <strong>DDM</strong> (Gama et al., 2004) monitoriza a taxa de erro online de um classificador.
          Assume que, num conceito estacionário, o erro p_n segue uma distribuição binomial e o seu
          desvio padrão s_n decresce com n. Um aumento estatisticamente significativo de p_n + s_n
          indica que o conceito mudou.
        </p>
        <div style={S.math}>
          <BlockMath math={"s_n = \\sqrt{\\frac{p_n(1-p_n)}{n}}"} />
        </div>
        <div style={S.highlight}>
          <strong>Zonas de decisão do DDM:</strong><br /><br />
          Guarda o mínimo histórico p_min e s_min ao longo do tempo.<br /><br />
          <strong>Zona de aviso:</strong> p_n + s_n &gt; p_min + 2·s_min → guardar instâncias em janela de warning<br />
          <strong>Zona de drift:</strong> p_n + s_n &gt; p_min + 3·s_min → reiniciar modelo com a janela de warning
        </div>
        <DDMTimeline />
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '-0.5rem' }}>
          Curva de p_n + s_n ao longo do tempo. A zona amarela marca o warning; a vermelha marca drift confirmado.
        </p>
        <p style={S.p}>
          Quando o nível de aviso é atingido, o DDM começa a acumular instâncias recentes. Se o nível
          de drift for atingido, o modelo é reiniciado usando apenas essas instâncias. Se o erro
          baixar antes disso, a janela é descartada. O processo tem custo O(1) em memória e tempo.
        </p>
        <div style={S.note}>
          <strong>Limitações:</strong> o DDM requer labels em tempo real, reage lentamente a drift
          gradual, e pode gerar falsos positivos em streams com ruído elevado ou dados desbalanceados.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. EDDM — Early Drift Detection Method</h2>
        <p style={S.p}>
          O <strong>EDDM</strong> (Baena-García et al., 2006) surgiu para colmatar a lentidão do DDM
          face a drift gradual. Em vez de monitorizar a taxa de erro, monitoriza a
          <strong> distância entre erros consecutivos</strong>. Num conceito estável, os erros estão
          distribuídos uniformemente — a distância média entre eles é relativamente constante.
          Quando ocorre drift gradual, o classificador começa a errar mais frequentemente em determinadas
          regiões, aproximando temporalmente os erros.
        </p>
        <p style={S.p}>
          Seja p'_n a média e s'_n o desvio padrão das distâncias entre erros consecutivos observados
          até ao instante n. O EDDM mantém o máximo histórico de p'_max e s'_max.
        </p>
        <div style={S.math}>
          <BlockMath math={"p'_n + 2s'_n > p'_{\\max} + 2s'_{\\max} \\Rightarrow \\text{drift}"} />
        </div>
        <p style={S.p}>
          Na prática usa-se um rácio: se (p'_n + 2·s'_n) / (p'_max + 2·s'_max) cair abaixo de 0.95
          entra em zona de aviso; abaixo de 0.90 confirma-se drift e reinicia-se o modelo. Quando o
          rácio é superior a 0.95, actualiza-se o máximo.
        </p>
        <DDMvsEDDM />
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '-0.5rem' }}>
          À esquerda: DDM deteta o drift tarde (linha tracejada vermelha). À direita: EDDM deteta mais
          cedo o mesmo drift gradual (linha tracejada verde).
        </p>
        <div style={S.note}>
          O EDDM é especialmente eficaz em drift gradual mas pode ser mais lento em drift súbito.
          A melhor estratégia em produção é correr DDM e EDDM em paralelo — cada um especializado
          num tipo de mudança.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Page-Hinkley Test</h2>
        <p style={S.p}>
          O <strong>Page-Hinkley Test (PHT)</strong> é um teste sequencial de hipóteses originalmente
          desenvolvido para controlo de qualidade industrial (Page, 1954). Detecta mudanças na média
          de uma série temporal acumulando um score de desvio em relação à média corrente. É
          assimétrico: na forma standard deteta aumentos; para detectar diminuições corre-se uma
          versão espelhada em paralelo.
        </p>
        <div style={S.math}>
          <BlockMath math={"m_t = \\sum_{i=1}^{t}(x_i - \\bar{x}_t - \\delta), \\quad M_t = \\min_{1\\leq i \\leq t} m_i"} />
        </div>
        <div style={S.math}>
          <BlockMath math={"\\text{drift se } m_t - M_t > \\lambda"} />
        </div>
        <p style={S.p}>
          O parâmetro δ define a magnitude mínima de drift a ignorar (evita falsos positivos por
          flutuação). O threshold λ controla o equilíbrio entre tempo de deteção e taxa de falsos
          positivos: λ baixo → deteção mais rápida mas mais alarmes falsos.
        </p>
        <PHTChart />
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '-0.5rem' }}>
          Evolução de m_t (verde). Quando m_t supera M_t + λ (linha tracejada vermelha) o drift
          é sinalizado.
        </p>
        <div style={S.note}>
          O PHT é leve — O(1) em tempo e memória — e adequado a séries com ruído gaussiano.
          Requer ajuste cuidadoso de δ e λ para cada domínio, o que pode ser feito por validação
          em dados históricos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. ADWIN — Adaptive Windowing</h2>
        <p style={S.p}>
          O <strong>ADWIN</strong> (Bifet &amp; Gavalda, 2007) é o detector com as garantias teóricas
          mais sólidas. Mantém uma janela deslizante de tamanho variável e aplica o
          <strong> Hoeffding Bound</strong> para determinar se duas sub-janelas têm médias
          estatisticamente diferentes — sinal de drift. A janela cresce enquanto os dados são
          estáveis e encolhe ao detectar mudança, descartando os dados pré-drift.
        </p>
        <div style={S.math}>
          <BlockMath math={"\\left|\\hat{\\mu}_0 - \\hat{\\mu}_1\\right| \\geq \\varepsilon_{\\text{cut}} = \\sqrt{\\frac{1}{2m} \\ln\\frac{4n}{\\delta}}"} />
        </div>
        <p style={S.p}>
          onde m = (1/|W₀| + 1/|W₁|)⁻¹ é a média harmónica dos tamanhos das duas sub-janelas,
          n é o tamanho total da janela, e δ é o parâmetro de confiança. O corte é feito no ponto
          de maior diferença entre médias de sub-janelas.
        </p>
        <ADWINWindow />
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '-0.5rem' }}>
          A janela cresce ao receber dados estáveis. Nos pontos de corte (linhas vermelhas), os dados
          anteriores são descartados — a janela ativa comprime-se.
        </p>
        <p style={S.p}>
          A estrutura interna usa <strong>buckets exponenciais</strong> (exponential histogram): os dados
          são agrupados em buckets de tamanho 2^k. Cada nível k tem no máximo M buckets; quando há M+1
          dois são fundidos num bucket do nível k+1. Isto garante:
        </p>
        <div style={S.highlight}>
          <strong>Complexidade do ADWIN:</strong><br /><br />
          Memória: O(log n) — onde n é o número de instâncias processadas<br />
          Tempo por instância: O(log W) amortizado — onde W é o tamanho actual da janela<br /><br />
          <strong>Garantias teóricas:</strong> taxa de falsos positivos ≤ δ e taxa de falsos negativos
          limitada em função do tamanho do drift e da janela.
        </div>
        <div style={S.note}>
          O ADWIN é o detector padrão em MOA para algoritmos como HAT (Hoeffding Adaptive Trees) e ARF
          (Adaptive Random Forests). A sua robustez teórica e empírica faz dele a escolha por omissão
          quando não há restrições computacionais severas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Métodos Baseados em Distribuição</h2>
        <p style={S.p}>
          Os métodos baseados em distribuição são <strong>não-supervisionados</strong>: monitorizam a
          distribuição dos dados de entrada X sem precisar de labels. São indicados quando y chega com
          atraso significativo ou não existe. O preço é que detectam virtual drift (mudança em P(x))
          que pode não afectar o desempenho do modelo.
        </p>
        <p style={S.p}>
          <strong>Kolmogorov-Smirnov (KS) test</strong> — compara as funções de distribuição acumulada
          (CDF) de duas janelas de dados. A estatística D_n mede a distância máxima entre as duas CDFs.
        </p>
        <KSDistributions />
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '-0.5rem' }}>
          Verde: CDF da janela t1. Roxo: CDF da janela t2. D_n (linha vermelha) é a distância máxima
          entre as duas — a estatística de teste.
        </p>
        <p style={S.p}>
          <strong>Maximum Mean Discrepancy (MMD)</strong> — mede a distância entre distribuições num
          espaço de Hilbert reprodutor (RKHS). Mais expressivo que KS para distribuições multivariadas.
        </p>
        <div style={S.math}>
          <BlockMath math={"\\text{MMD}^2(P,Q) = \\|\\mu_P - \\mu_Q\\|^2_{\\mathcal{H}}"} />
        </div>
        <p style={S.p}>
          <strong>HDDDM — Hellinger Distance Drift Detection Method</strong> — usa a distância de
          Hellinger entre histogramas normalizados de features consecutivas. É computacionalmente leve
          e interpretável: cada feature tem o seu score de drift.
        </p>
        <div style={S.highlight}>
          <strong>Quando usar métodos de distribuição:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li>Labels não disponíveis ou chegam com atraso superior a horas/dias</li>
            <li>O objectivo é monitorizar data quality pipelines (não apenas modelos)</li>
            <li>Pretende-se detectar feature drift antes de treinar ou antes de servir</li>
            <li>Sistemas de alerting em produção (data observability)</li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Comparação e Escolha do Método</h2>
        <p style={S.p}>
          A escolha do detector depende de: disponibilidade de labels, tipo esperado de drift,
          restrições de memória/tempo e tolerância a falsos positivos.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Labels necessários</th>
              <th style={S.th}>Tipo de drift detectado</th>
              <th style={S.th}>Velocidade</th>
              <th style={S.th}>False alarm rate</th>
              <th style={S.th}>Biblioteca (Python)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>DDM</strong></td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Súbito</td>
              <td style={S.td}>Rápido (súbito)</td>
              <td style={S.td}>Moderado</td>
              <td style={S.td}>river, MOA</td>
            </tr>
            <tr>
              <td style={S.td}><strong>EDDM</strong></td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Gradual</td>
              <td style={S.td}>Mais rápido (gradual)</td>
              <td style={S.td}>Baixo-moderado</td>
              <td style={S.td}>river, MOA</td>
            </tr>
            <tr>
              <td style={S.td}><strong>PHT</strong></td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Mudança de média</td>
              <td style={S.td}>Muito rápido</td>
              <td style={S.td}>Depende de λ</td>
              <td style={S.td}>river, skmultiflow</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ADWIN</strong></td>
              <td style={S.td}>Não (usa qualquer métrica)</td>
              <td style={S.td}>Qualquer tipo</td>
              <td style={S.td}>Variável</td>
              <td style={S.td}>Baixo (controlado por δ)</td>
              <td style={S.td}>river, MOA</td>
            </tr>
            <tr>
              <td style={S.td}><strong>KS-test</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Virtual / feature</td>
              <td style={S.td}>Moderado</td>
              <td style={S.td}>Controlado por α</td>
              <td style={S.td}>scipy, evidently</td>
            </tr>
            <tr>
              <td style={S.td}><strong>MMD</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Virtual (multivariado)</td>
              <td style={S.td}>Lento (O(n²))</td>
              <td style={S.td}>Controlado por α</td>
              <td style={S.td}>alibi-detect</td>
            </tr>
            <tr>
              <td style={S.td}><strong>HDDDM</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Feature drift</td>
              <td style={S.td}>Rápido</td>
              <td style={S.td}>Moderado</td>
              <td style={S.td}>river</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          O fluxograma seguinte orienta a escolha do método a partir das condições do problema:
        </p>
        <DecisionFlowchart />
        <div style={S.highlight}>
          <strong>Recomendações práticas:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li>ADWIN: escolha por omissão quando não há restrições severas de memória; default em ARF e HAT</li>
            <li>DDM + EDDM em paralelo: cobre drift súbito e gradual sem custo adicional significativo</li>
            <li>PHT: streams numéricos com mudança de média, domínios industriais e de monitorização</li>
            <li>KS / MMD: monitorização de qualidade de dados sem labels, data observability</li>
            <li>Ensemble de detectores (votar por maioria) reduz falsos negativos e aumenta robustez</li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 8 ── */}
              <h2 style={{ ...S.h2, marginBottom: '1rem' }}>8. Síntese do Módulo</h2>
<div style={{ ...S.highlight, borderRadius: 12, padding: '1.5rem' }}>
        <p style={{ ...S.p, marginBottom: '0.75rem' }}>
          Pontos-chave da deteção de concept drift em data streams:
        </p>
        <ul style={{ margin: '0 0 0 1.2rem', lineHeight: 2.1, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
          <li>A taxonomia organiza os métodos em supervisionado/não-supervisionado × erro/distribuição</li>
          <li><strong>DDM</strong> monitoriza p_n ± 2s_n / 3s_n — eficaz para drift súbito, O(1)</li>
          <li><strong>EDDM</strong> monitoriza a distância entre erros consecutivos — detecta drift gradual mais cedo</li>
          <li><strong>PHT</strong> acumula desvios da média num score — O(1) em tempo e memória, muito rápido</li>
          <li><strong>ADWIN</strong> usa Hoeffding Bound em janelas adaptativas com O(log n) espaço — detector padrão em MOA</li>
          <li>Métodos de distribuição (KS, MMD, HDDDM) não precisam de labels — monitorizam P(x) directamente</li>
          <li>A escolha depende da disponibilidade de labels, tipo de drift esperado e restrições de recurso</li>
          <li>Em produção, combinar dois detectores complementares reduz o risco de falsos negativos</li>
        </ul>
      </div>
    </div>
  );
}
