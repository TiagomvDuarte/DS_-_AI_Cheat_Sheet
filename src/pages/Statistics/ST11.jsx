import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';

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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ── SVG 1: Série Temporal com tendência e oscilação ── */
function SVGSerieTemporal() {
  const W = 760, H = 200;
  const padL = 48, padR = 16, padT = 16, padB = 36;
  const n = 35;
  // fixed data: trend + oscillation
  const rawY = [12,15,13,18,16,20,19,23,21,25,24,27,26,29,28,31,30,33,32,35,
                34,37,36,39,38,41,40,43,42,45,44,47,46,49,48];
  const minY = 10, maxY = 52;
  const W2 = W - padL - padR;
  const H2 = H - padT - padB;
  const px = i => padL + (i / (n - 1)) * W2;
  const py = v => padT + H2 - ((v - minY) / (maxY - minY)) * H2;
  const pts = rawY.map((v, i) => `${px(i)},${py(v)}`).join(' ');
  const labels = [1, 5, 10, 15, 20, 25, 30, 35];
  const yTicks = [10, 20, 30, 40, 50];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* grid */}
      {yTicks.map(v => (
        <line key={v} x1={padL} x2={W - padR} y1={py(v)} y2={py(v)}
          stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      ))}
      {/* axes */}
      <line x1={padL} x2={padL} y1={padT} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1.5} />
      {/* y ticks */}
      {yTicks.map(v => (
        <text key={v} x={padL - 6} y={py(v) + 4} textAnchor="end" fontSize={10} fill="var(--text-secondary)">{v}</text>
      ))}
      {/* x ticks */}
      {labels.map(i => (
        <text key={i} x={px(i - 1)} y={H - padB + 14} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">t={i}</text>
      ))}
      {/* line */}
      <polyline points={pts} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" />
      {/* dots */}
      {rawY.map((v, i) => (
        <circle key={i} cx={px(i)} cy={py(v)} r={2.5} fill={color} />
      ))}
      {/* axis labels */}
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">Tempo (t)</text>
      <text x={12} y={H / 2} textAnchor="middle" fontSize={11} fill="var(--text-secondary)"
        transform={`rotate(-90,12,${H / 2})`}>y</text>
    </svg>
  );
}

/* ── SVG 2: 4 painéis decomposição ── */
function SVGDecomposicao() {
  const W = 760, panelH = 65, gap = 18, padL = 60, padR = 16, padT = 12, padB = 8;
  const n = 36;
  const total = 4 * panelH + 3 * gap + padT + padB + 60;
  const H2 = panelH - 8;
  const W2 = W - padL - padR;
  const px = i => padL + (i / (n - 1)) * W2;

  // trend component (smooth)
  const trend = Array.from({ length: n }, (_, i) => 10 + i * 0.9);
  // seasonal (period 6)
  const seasonal = Array.from({ length: n }, (_, i) => 5 * Math.sin((2 * Math.PI * i) / 6));
  // original = trend + seasonal
  const original = trend.map((t, i) => t + seasonal[i]);
  // residual (small)
  const residuals = [0.2,-0.3,0.4,-0.1,0.3,-0.2,0.1,0.4,-0.3,0.2,-0.1,0.3,
                     0.2,-0.4,0.1,-0.2,0.3,0.1,-0.1,0.2,-0.3,0.4,0.1,-0.2,
                     0.3,-0.1,0.2,-0.3,0.1,0.4,-0.2,0.3,-0.1,0.2,-0.3,0.1];

  function normPts(arr, minV, maxV, baseY) {
    return arr.map((v, i) => `${px(i)},${baseY + H2 - ((v - minV) / (maxV - minV)) * H2}`).join(' ');
  }

  const panels = [
    { label: 'Original', data: original, min: Math.min(...original) - 1, max: Math.max(...original) + 1, col: color },
    { label: 'Tendência', data: trend, min: Math.min(...trend) - 1, max: Math.max(...trend) + 1, col: '#f97316' },
    { label: 'Sazonal', data: seasonal, min: Math.min(...seasonal) - 1, max: Math.max(...seasonal) + 1, col: '#f97316' },
    { label: 'Resíduos', data: residuals, min: -1.2, max: 1.2, col: '#f97316' },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${total}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {panels.map((p, pi) => {
        const baseY = padT + pi * (panelH + gap);
        return (
          <g key={pi}>
            <text x={padL - 8} y={baseY + panelH / 2 + 4} textAnchor="end" fontSize={10} fill="var(--text-secondary)">{p.label}</text>
            <line x1={padL} x2={padL} y1={baseY} y2={baseY + panelH} stroke="var(--text-secondary)" strokeWidth={1} />
            <line x1={padL} x2={W - padR} y1={baseY + panelH} y2={baseY + panelH} stroke="var(--text-secondary)" strokeWidth={1} />
            <polyline points={normPts(p.data, p.min, p.max, baseY)} fill="none" stroke={p.col} strokeWidth={1.8} strokeLinejoin="round" />
          </g>
        );
      })}
      <text x={W / 2} y={total - 4} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">Tempo (t)</text>
    </svg>
  );
}

/* ── SVG 3: Estacionariedade — 2 painéis ── */
function SVGEstacionariedade() {
  const W = 760, H = 180, padL = 16, padR = 16, padT = 30, padB = 30;
  const panelW = (W - padL - padR - 20) / 2;
  const H2 = H - padT - padB;
  const n = 50;

  // stationary: noise around 20
  const stat = [20,21,19,22,20,18,21,20,22,19,21,20,18,22,20,21,19,20,22,18,
                21,20,19,22,21,18,20,21,19,22,20,18,21,22,19,20,21,18,22,20,
                19,21,20,22,18,21,20,19,22,20];
  // non-stationary: upward drift
  const nonstat = Array.from({ length: n }, (_, i) => 5 + i * 0.7 + (i % 5 === 0 ? 2 : i % 3 === 0 ? -1.5 : 0.5));

  function pts(arr, minV, maxV, offsetX) {
    return arr.map((v, i) =>
      `${offsetX + (i / (n - 1)) * panelW},${padT + H2 - ((v - minV) / (maxV - minV)) * H2}`
    ).join(' ');
  }

  const statMin = 15, statMax = 25;
  const nsMin = 0, nsMax = 45;
  const ox1 = padL, ox2 = padL + panelW + 20;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* labels */}
      <text x={ox1 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#f97316">Estacionária</text>
      <text x={ox2 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#f97316">Não Estacionária</text>
      {/* mean line stationary */}
      <line x1={ox1} x2={ox1 + panelW} y1={padT + H2 / 2} y2={padT + H2 / 2}
        stroke="#f97316" strokeWidth={1} strokeDasharray="5,3" opacity={0.5} />
      {/* series */}
      <polyline points={pts(stat, statMin, statMax, ox1)} fill="none" stroke="#f97316" strokeWidth={1.8} strokeLinejoin="round" />
      <polyline points={pts(nonstat, nsMin, nsMax, ox2)} fill="none" stroke="#f97316" strokeWidth={1.8} strokeLinejoin="round" />
      {/* axes */}
      <line x1={ox1} x2={ox1 + panelW} y1={H - padB} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox2} x2={ox2 + panelW} y1={H - padB} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={ox1 + panelW / 2} y={H - 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">t</text>
      <text x={ox2 + panelW / 2} y={H - 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">t</text>
    </svg>
  );
}

/* ── SVG 4: ACF Correlogram ── */
function SVGAcf() {
  const W = 760, H = 200, padL = 48, padR = 16, padT = 16, padB = 36;
  const W2 = W - padL - padR, H2 = H - padT - padB;
  const lags = 13;
  // ACF values: k=0 is 1.0, decaying AR-like
  const acf = [1.0, 0.72, 0.53, 0.38, 0.27, 0.19, 0.13, 0.09, 0.06, 0.04, 0.03, 0.02, 0.01];
  const confBand = 1.96 / Math.sqrt(80); // n=80
  const barW = (W2 / lags) * 0.5;
  const cx = k => padL + (k + 0.5) * (W2 / lags);
  const zero = padT + H2 * 0.05; // y=0 line at top area since max is 1
  const minY = -0.3, maxY = 1.05;
  const py = v => padT + H2 - ((v - minY) / (maxY - minY)) * H2;
  const y0 = py(0);
  const yConf = py(confBand);
  const yConfN = py(-confBand);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* grid */}
      {[0, 0.25, 0.5, 0.75, 1.0].map(v => (
        <line key={v} x1={padL} x2={W - padR} y1={py(v)} y2={py(v)}
          stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      ))}
      {/* confidence bands */}
      <line x1={padL} x2={W - padR} y1={yConf} y2={yConf}
        stroke="#f97316" strokeWidth={1} strokeDasharray="6,3" opacity={0.7} />
      <line x1={padL} x2={W - padR} y1={yConfN} y2={yConfN}
        stroke="#f97316" strokeWidth={1} strokeDasharray="6,3" opacity={0.7} />
      {/* zero line */}
      <line x1={padL} x2={W - padR} y1={y0} y2={y0} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* bars */}
      {acf.map((v, k) => {
        const outside = k > 0 && Math.abs(v) > confBand;
        const barColor = k === 0 ? color : outside ? '#f97316' : color;
        const barY = v >= 0 ? py(v) : y0;
        const barH = Math.abs(py(v) - y0);
        return (
          <rect key={k} x={cx(k) - barW / 2} y={barY} width={barW} height={barH}
            fill={barColor} opacity={0.8} rx={2} />
        );
      })}
      {/* x ticks */}
      {acf.map((_, k) => (
        <text key={k} x={cx(k)} y={H - padB + 14} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">{k}</text>
      ))}
      {/* y ticks */}
      {[0, 0.25, 0.5, 0.75, 1.0].map(v => (
        <text key={v} x={padL - 6} y={py(v) + 4} textAnchor="end" fontSize={10} fill="var(--text-secondary)">{v.toFixed(2)}</text>
      ))}
      {/* axes */}
      <line x1={padL} x2={padL} y1={padT} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1.5} />
      {/* labels */}
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">Desfasamento (k)</text>
      <text x={12} y={H / 2} textAnchor="middle" fontSize={11} fill="var(--text-secondary)"
        transform={`rotate(-90,12,${H / 2})`}>ACF</text>
      <text x={W - padR} y={yConf - 4} textAnchor="end" fontSize={9} fill="#f97316">+1.96/sqrt(n)</text>
    </svg>
  );
}

/* ── SVG 5: PACF — 4 pequenos correlograms ── */
function SVGPacf() {
  const W = 760, H = 220;
  const smallW = (W - 40) / 2, smallH = 90;
  const padL = 30, padR = 8, padT = 24, padB = 20;
  const lags = 8;
  const conf = 0.22;

  // AR(1): ACF decays, PACF cuts off at lag 1
  const ar1Acf  = [1, 0.7, 0.49, 0.34, 0.24, 0.17, 0.12, 0.08];
  const ar1Pacf = [1, 0.7, 0.05, 0.03, -0.02, 0.01, 0.02, -0.01];
  // MA(1): ACF cuts off at lag 1, PACF decays
  const ma1Acf  = [1, 0.5, 0.05, 0.02, -0.01, 0.02, 0.01, -0.01];
  const ma1Pacf = [1, 0.5, -0.25, 0.13, -0.06, 0.03, -0.02, 0.01];

  const panels = [
    { label: 'ACF — AR(1)', data: ar1Acf,  ox: 10,          oy: 10 },
    { label: 'PACF — AR(1)', data: ar1Pacf, ox: 10 + smallW + 20, oy: 10 },
    { label: 'ACF — MA(1)', data: ma1Acf,  ox: 10,          oy: 10 + smallH + 30 },
    { label: 'PACF — MA(1)', data: ma1Pacf, ox: 10 + smallW + 20, oy: 10 + smallH + 30 },
  ];

  const minY = -0.4, maxY = 1.1;
  const plotW = smallW - padL - padR;
  const plotH = smallH - padT - padB;
  const py = (v, oy) => oy + padT + plotH - ((v - minY) / (maxY - minY)) * plotH;
  const cx = (k, ox) => ox + padL + (k + 0.5) * (plotW / lags);
  const barW = (plotW / lags) * 0.45;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {panels.map((p, pi) => {
        const y0 = py(0, p.oy);
        const yConf = py(conf, p.oy);
        const yConfN = py(-conf, p.oy);
        return (
          <g key={pi}>
            <text x={p.ox + smallW / 2} y={p.oy + 14} textAnchor="middle" fontSize={11} fontWeight={600} fill={color}>{p.label}</text>
            <line x1={p.ox + padL} x2={p.ox + smallW - padR} y1={y0} y2={y0} stroke="var(--text-secondary)" strokeWidth={1} />
            <line x1={p.ox + padL} x2={p.ox + smallW - padR} y1={yConf} y2={yConf}
              stroke="#f97316" strokeWidth={1} strokeDasharray="4,2" opacity={0.6} />
            <line x1={p.ox + padL} x2={p.ox + smallW - padR} y1={yConfN} y2={yConfN}
              stroke="#f97316" strokeWidth={1} strokeDasharray="4,2" opacity={0.6} />
            {p.data.map((v, k) => {
              const outside = k > 0 && Math.abs(v) > conf;
              const bColor = k === 0 ? color : outside ? '#f97316' : color;
              const bY = v >= 0 ? py(v, p.oy) : y0;
              const bH = Math.abs(py(v, p.oy) - y0);
              return (
                <rect key={k} x={cx(k, p.ox) - barW / 2} y={bY} width={barW} height={bH}
                  fill={bColor} opacity={0.8} rx={1} />
              );
            })}
            {p.data.map((_, k) => (
              <text key={k} x={cx(k, p.ox)} y={p.oy + smallH - 4} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">{k}</text>
            ))}
            <rect x={p.ox} y={p.oy} width={smallW} height={smallH} fill="none" stroke="var(--text-secondary)" strokeWidth={1} rx={4} />
          </g>
        );
      })}
    </svg>
  );
}

/* ── SVG 6: Passeio Aleatório — 2 painéis ── */
function SVGPasseioAleatorio() {
  const W = 760, H = 200, padL = 48, padR = 16, padT = 30, padB = 30;
  const panelW = (W - padL - padR - 24) / 2;
  const H2 = H - padT - padB;
  const n = 50;
  // fixed random walk path
  const walk = [0,1.2,-0.3,2.1,1.5,3.0,2.4,4.1,3.5,5.2,4.8,6.3,5.9,7.1,6.8,
                8.2,7.5,9.0,8.4,10.1,9.3,11.0,10.2,12.1,11.5,13.2,12.4,14.0,
                13.1,14.8,14.0,15.6,14.8,16.4,15.5,17.2,16.3,18.0,17.1,18.9,
                17.8,19.5,18.6,20.4,19.2,21.0,20.1,21.8,20.9,22.5];
  const diffs = walk.slice(1).map((v, i) => v - walk[i]);

  const minW = Math.min(...walk) - 1, maxW = Math.max(...walk) + 1;
  const minD = Math.min(...diffs) - 0.5, maxD = Math.max(...diffs) + 0.5;

  const ox1 = padL, ox2 = padL + panelW + 24;

  function pts(arr, minV, maxV, ox) {
    return arr.map((v, i) =>
      `${ox + (i / (arr.length - 1)) * panelW},${padT + H2 - ((v - minV) / (maxV - minV)) * H2}`
    ).join(' ');
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      <text x={ox1 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#f97316">Passeio Aleatório (yₜ)</text>
      <text x={ox2 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#f97316">1ª Diferença (Δyₜ)</text>
      <polyline points={pts(walk, minW, maxW, ox1)} fill="none" stroke="#f97316" strokeWidth={2} strokeLinejoin="round" />
      <polyline points={pts(diffs, minD, maxD, ox2)} fill="none" stroke="#f97316" strokeWidth={2} strokeLinejoin="round" />
      {/* zero line for diffs */}
      <line x1={ox2} x2={ox2 + panelW}
        y1={padT + H2 - ((0 - minD) / (maxD - minD)) * H2}
        y2={padT + H2 - ((0 - minD) / (maxD - minD)) * H2}
        stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4,3" opacity={0.5} />
      <line x1={ox1} x2={ox1 + panelW} y1={H - padB} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox2} x2={ox2 + panelW} y1={H - padB} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={ox1 + panelW / 2} y={H - 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">t</text>
      <text x={ox2 + panelW / 2} y={H - 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">t</text>
    </svg>
  );
}

/* ── Main Component ── */
export default function ST11() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 11</div>
      <h1 style={S.h1}>Fundamentos de Séries Temporais</h1>
      <p style={S.lead}>
        Uma série temporal é uma sequência de observações ordenadas no tempo. Este módulo apresenta
        os conceitos essenciais — componentes, estacionariedade, autocorrelação, transformações e
        decomposição — que constituem a base de toda a modelação temporal em estatística e econometria.
      </p>

      {/* ── 1. O que é uma Série Temporal ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O que é uma Série Temporal</h2>
        <p style={S.p}>
          Uma <strong>série temporal</strong> é um conjunto de observações <InlineMath math="\{y_1, y_2, \ldots, y_T\}" /> recolhidas
          sequencialmente ao longo do tempo, em intervalos regulares (hora, dia, mês, ano). A característica
          fundamental que a distingue de dados seccionais é a <strong>dependência temporal</strong>: o valor
          em <InlineMath math="t" /> tende a estar correlacionado com os valores em <InlineMath math="t-1, t-2" />, etc.
        </p>
        
          <strong>Notação:</strong> <InlineMath math="\{y_t\}_{t=1}^{T}" />, onde <InlineMath math="T" /> é o comprimento da série. Cada <InlineMath math="y_t" /> é uma
          realização do processo estocástico <InlineMath math="Y(t)" />.
        
        <p style={S.p}>
          <strong>Aplicações típicas:</strong>
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Finanças:</strong> preços de ações, taxas de câmbio, yields obrigacionistas.</li>
          <li><strong>Macroeconómica:</strong> PIB trimestral, inflação mensal, desemprego.</li>
          <li><strong>Clima:</strong> temperatura diária, precipitação, anomalias de gelo marinho.</li>
          <li><strong>Vendas:</strong> facturação mensal, tráfego web, consumo de energia.</li>
          <li><strong>Saúde:</strong> casos de doenças infecciosas, ocupação hospitalar.</li>
        </ul>
        <p style={S.p}>
          Ao contrário dos dados seccionais, onde a ordem das observações é irrelevante, nas séries
          temporais a <strong>ordenação importa</strong>. A análise ignora essa ordem a risco de
          inferências completamente erradas.
        </p>
        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Figura 1 — Série temporal com tendência crescente e oscilação
          </div>
          <SVGSerieTemporal />
        </div>
        <div style={S.note}>
          A série acima ilustra a coexistência de uma <em>tendência de longo prazo</em> (crescimento) com
          flutuações de curto prazo. Identificar e modelar estas camadas é o objectivo central da análise
          de séries temporais.
        </div>

        <h3 style={S.h3}>Diferença face a dados seccionais</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Característica</th>
                <th style={S.th}>Dados Seccionais</th>
                <th style={S.th}>Série Temporal</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ordenação', 'Irrelevante', 'Essencial'],
                ['Dependência', 'Observações independentes', 'Autocorrelação temporal'],
                ['Inferência', 'Lei dos grandes números clássica', 'Requer condições de mistura/ergodicidade'],
                ['Previsão', 'Interpolação', 'Extrapolação no tempo'],
                ['Estacionariedade', 'Não aplicável', 'Pressuposto central'],
              ].map(([a, b, c], i) => (
                <tr key={i}>
                  <td style={S.td}>{a}</td>
                  <td style={S.td}>{b}</td>
                  <td style={S.td}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Componentes ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Componentes de uma Série Temporal</h2>
        <p style={S.p}>
          A decomposição clássica decompõe a série em quatro componentes distintas, cada uma capturando
          um padrão específico de variação:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Componente</th>
                <th style={S.th}>Símbolo</th>
                <th style={S.th}>Descrição</th>
                <th style={S.th}>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tendência', 'T', 'Movimento de longo prazo, crescente ou decrescente', 'PIB a subir ao longo de décadas'],
                ['Sazonalidade', 'S', 'Padrão repetitivo de período fixo (≤ 1 ano)', 'Pico de vendas em Dezembro'],
                ['Ciclo', 'C', 'Flutuações de longo prazo sem período fixo', 'Ciclos económicos de 7-11 anos'],
                ['Irregular/Resíduo', 'I', 'Variação aleatória inexplicada', 'Choques inesperados, erros de medida'],
              ].map(([a, b, c, d], i) => (
                <tr key={i}>
                  <td style={S.td}><strong>{a}</strong></td>
                  <td style={S.td}><code>{b}</code></td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Modelos de Decomposição</h3>
        
          <p style={{ margin: 0, marginBottom: '0.5rem' }}><strong>Aditivo:</strong> <InlineMath math="Y = T + S + C + I" /></p>
          <p style={{ margin: 0 }}><strong>Multiplicativo:</strong> <InlineMath math="Y = T \times S \times C \times I" /></p>
        
        <p style={S.p}>
          O modelo <strong>aditivo</strong> é adequado quando a amplitude das flutuações sazonais é
          aproximadamente constante ao longo do tempo. O modelo <strong>multiplicativo</strong> é preferível
          quando a amplitude cresce proporcionalmente com o nível da série — situação comum em dados
          económicos e financeiros. O logaritmo transforma um modelo multiplicativo num aditivo:
          <InlineMath math="\log(Y) = \log(T) + \log(S) + \log(C) + \log(I)" />.
        </p>

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Figura 2 — Decomposição da série em quatro componentes
          </div>
          <SVGDecomposicao />
        </div>

        <div style={S.note}>
          Na prática, os ciclos de longo prazo (C) são difíceis de distinguir da tendência (T) com séries
          curtas, pelo que muitas decomposições empíricas combinam T e C numa única componente de tendência-ciclo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Estacionariedade ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Estacionariedade</h2>
        <p style={S.p}>
          A estacionariedade é o pressuposto mais importante em análise de séries temporais. Sem ela,
          as propriedades estatísticas variam com o tempo, tornando impossível a estimação consistente
          de modelos e a previsão fiável.
        </p>

        <h3 style={S.h3}>Estacionariedade Fraca (em covariância)</h3>
        
          <p style={{ margin: 0, marginBottom: '0.4rem' }}>Um processo <InlineMath math="\{y_t\}" /> é <strong>fracamente estacionário</strong> se:</p>
          <ol style={{ margin: 0, paddingLeft: '1.2rem' }}>
            <li><InlineMath math="E[y_t] = \mu" /> (média constante)</li>
            <li><InlineMath math="\text{Var}(y_t) = \sigma^2" /> (variância constante e finita)</li>
            <li><InlineMath math="\text{Cov}(y_t, y_{t-k}) = \gamma_k" /> (autocovariância depende apenas do desfasamento <InlineMath math="k" />, não de <InlineMath math="t" />)</li>
          </ol>
        
        <p style={S.p}>
          Estas três condições implicam que a distribuição conjunta de qualquer subconjunto da série
          não muda com deslocamentos no tempo — a série "parece igual" independentemente de onde
          olhamos para ela.
        </p>

        <h3 style={S.h3}>Estacionariedade Estrita</h3>
        <p style={S.p}>
          A estacionariedade estrita exige que a distribuição conjunta completa de <InlineMath math="(y_{t_1}, \ldots, y_{t_n})" />
          seja igual à de <InlineMath math="(y_{t_1+k}, \ldots, y_{t_n+k})" /> para qualquer <InlineMath math="n, k" /> e qualquer conjunto de índices.
          É uma condição mais forte: a estacionariedade estrita com variância finita implica a fraca,
          mas o inverso não é verdade em geral.
        </p>

        <h3 style={S.h3}>Porque importa a estacionariedade?</h3>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>Os estimadores de MQO são inconsistentes em regressões espúrias entre séries não estacionárias.</li>
          <li>Os testes t e F perdem as suas distribuições assimptóticas habituais.</li>
          <li>A autocovariância de amostra converge para a populacional apenas sob estacionariedade.</li>
          <li>Os modelos ARMA estão definidos apenas para processos estacionários.</li>
          <li>Previsões fora da amostra são não fiáveis sem estacionariedade.</li>
        </ul>

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Figura 3 — Série estacionária vs. não estacionária
          </div>
          <SVGEstacionariedade />
        </div>

        <h3 style={S.h3}>Testes de Raiz Unitária</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Teste</th>
                <th style={S.th}>H₀</th>
                <th style={S.th}>H₁</th>
                <th style={S.th}>Observações</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Dickey-Fuller (DF)', 'Raiz unitária (não estac.)', 'Estacionária', 'Versão simples, sem autocorrelação residual'],
                ['ADF', 'Raiz unitária', 'Estacionária', 'Inclui desfasamentos para corrigir autocorrelação'],
                ['PP (Phillips-Perron)', 'Raiz unitária', 'Estacionária', 'Correcção não paramétrica da autocorrelação'],
                ['KPSS', 'Estacionária', 'Raiz unitária', 'H₀ oposta ao ADF; complementar'],
              ].map(([a, b, c, d], i) => (
                <tr key={i}>
                  <td style={S.td}>{a}</td>
                  <td style={S.td}>{b}</td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Recomenda-se utilizar conjuntamente ADF e KPSS: se ADF não rejeita H₀ e KPSS rejeita H₀,
          há evidência consistente de não estacionariedade.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. ACF ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Função de Autocorrelação (ACF)</h2>
        <p style={S.p}>
          A <strong>função de autocorrelação</strong> mede a correlação linear entre <InlineMath math="y_t" /> e <InlineMath math="y_{t-k}" />
          (o valor <InlineMath math="k" /> períodos antes), para cada desfasamento <InlineMath math="k" />. É o instrumento visual primário
          para identificar a estrutura de dependência temporal de uma série.
        </p>
        
          <p style={{ margin: 0, marginBottom: '0.5rem' }}>
            <strong>Autocovariância de desfasamento <InlineMath math="k" />:</strong> <InlineMath math="\gamma_k = \text{Cov}(y_t, y_{t-k}) = E[(y_t - \mu)(y_{t-k} - \mu)]" />
          </p>
          <p style={{ margin: 0 }}>
            <strong>Autocorrelação de desfasamento <InlineMath math="k" />:</strong> <InlineMath math="\rho_k = \gamma_k / \gamma_0 = \text{Cov}(y_t, y_{t-k}) / \text{Var}(y_t)" />
          </p>
        
        <p style={S.p}>
          Note que <InlineMath math="\rho_0 = 1" /> sempre, e <InlineMath math="-1 \leq \rho_k \leq 1" />. O <strong>correlograma</strong> é o gráfico
          de <InlineMath math="\rho_k" /> contra <InlineMath math="k" /> e é a ferramenta de diagnóstico mais usada em análise de séries temporais.
        </p>

        <h3 style={S.h3}>Estimador de Amostra</h3>
        <div style={S.code}>
          {`r_k = [ Σₜ₌ₖ₊₁ᵀ (yₜ − ȳ)(yₜ₋ₖ − ȳ) ] / [ Σₜ₌₁ᵀ (yₜ − ȳ)² ]`}
        </div>
        <p style={S.p}>
          Sob a hipótese nula de que <InlineMath math="\{y_t\}" /> é ruído branco, <InlineMath math="r_k" /> tem distribuição assimptótica
          <InlineMath math="N(0, 1/T)" />, pelo que bandas de confiança de 95% são <InlineMath math="\pm 1.96/\sqrt{T}" />.
        </p>

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Figura 4 — Correlograma (ACF) com bandas de confiança a 95%
          </div>
          <SVGAcf />
        </div>
        <div style={S.note}>
          As barras a vermelho ultrapassam as bandas de confiança (linhas tracejadas a vermelho), indicando
          autocorrelação estatisticamente significativa nesses desfasamentos — padrão típico de um processo AR.
        </div>

        <h3 style={S.h3}>Padrões típicos no correlograma</h3>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Decaimento exponencial:</strong> característico de processos AR estacionários.</li>
          <li><strong>Corte abrupto após lag q:</strong> característico de processos MA(q).</li>
          <li><strong>Padrão sinusoidal amortecido:</strong> AR com raízes complexas (sazonalidade).</li>
          <li><strong>Decaimento muito lento:</strong> indica não estacionariedade ou memória longa.</li>
          <li><strong>Picos em lags múltiplos de m:</strong> sazonalidade de período m.</li>
        </ul>
      </section>

      <hr style={S.divider} />

      {/* ── 5. PACF ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Função de Autocorrelação Parcial (PACF)</h2>
        <p style={S.p}>
          A <strong>autocorrelação parcial</strong> ao desfasamento <InlineMath math="k" /> mede a correlação entre <InlineMath math="y_t" /> e <InlineMath math="y_{t-k}" />
          depois de remover o efeito linear dos valores intermediários <InlineMath math="y_{t-1}, \ldots, y_{t-k+1}" />. É complementar
          à ACF na identificação da ordem dos modelos ARMA.
        </p>
        
          <p style={{ margin: 0 }}>
            <strong>Definição formal:</strong> <InlineMath math="\phi_{kk} = \text{Corr}(y_t - \hat{Y}_t,\, y_{t-k} - \hat{Y}_{t-k})" />, onde <InlineMath math="\hat{Y}_t" /> é a
            projecção ortogonal de <InlineMath math="y_t" /> sobre <InlineMath math="\{y_{t-1}, \ldots, y_{t-k+1}\}" />.
          </p>
        
        <p style={S.p}>
          Computacionalmente, <InlineMath math="\phi_{kk}" /> é obtida como o último coeficiente de uma regressão AR(<InlineMath math="k" />):
          <InlineMath math="y_t = \phi_{k1} y_{t-1} + \cdots + \phi_{kk} y_{t-k} + \varepsilon_t" />. Os algoritmos de Levinson-Durbin calculam de forma
          recursiva toda a sequência <InlineMath math="\phi_{11}, \phi_{22}, \ldots" /> de forma eficiente.
        </p>

        <h3 style={S.h3}>Tabela de Identificação AR vs. MA</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Processo</th>
                <th style={S.th}>ACF</th>
                <th style={S.th}>PACF</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AR(p)', 'Decaimento gradual (exponencial ou sinusoidal)', 'Corte após desfasamento p'],
                ['MA(q)', 'Corte após desfasamento q', 'Decaimento gradual'],
                ['ARMA(p,q)', 'Decaimento gradual após q', 'Decaimento gradual após p'],
                ['Ruído Branco', 'Nulo para k ≥ 1', 'Nulo para k ≥ 1'],
                ['Passeio Aleatório', 'Decaimento muito lento', 'Corte após k=1 (φ₁₁ ≈ 1)'],
              ].map(([a, b, c], i) => (
                <tr key={i}>
                  <td style={S.td}><strong>{a}</strong></td>
                  <td style={S.td}>{b}</td>
                  <td style={S.td}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Figura 5 — ACF e PACF para AR(1) e MA(1)
          </div>
          <SVGPacf />
        </div>
        <div style={S.note}>
          No AR(1): a ACF decai exponencialmente e a PACF corta após o lag 1.
          No MA(1): a ACF corta após o lag 1 e a PACF decai gradualmente — padrão oposto.
        </div>

        <h3 style={S.h3}>Procedimento de Box-Jenkins</h3>
        <p style={S.p}>
          A metodologia clássica de Box-Jenkins (1970) identifica modelos ARIMA em três etapas:
        </p>
        <ol style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Identificação:</strong> inspecção de ACF/PACF para seleccionar p, d, q.</li>
          <li><strong>Estimação:</strong> máxima verosimilhança ou mínimos quadrados condicionais.</li>
          <li><strong>Diagnóstico:</strong> análise dos resíduos (ACF dos resíduos, teste de Ljung-Box).</li>
        </ol>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Ruído Branco ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Ruído Branco</h2>
        <p style={S.p}>
          O <strong>ruído branco</strong> é o processo mais simples de série temporal e serve como
          bloco fundamental de construção de todos os modelos ARMA. Uma série <InlineMath math="\{\varepsilon_t\}" /> é ruído branco
          se satisfaz:
        </p>
        
          <ol style={{ margin: 0, paddingLeft: '1.2rem' }}>
            <li><InlineMath math="E[\varepsilon_t] = 0" /> para todo <InlineMath math="t" /> (média zero)</li>
            <li><InlineMath math="\text{Var}(\varepsilon_t) = \sigma^2" /> para todo <InlineMath math="t" /> (variância constante e finita)</li>
            <li><InlineMath math="\text{Cov}(\varepsilon_t, \varepsilon_s) = 0" /> para <InlineMath math="t \neq s" /> (ausência de autocorrelação)</li>
          </ol>
        
        <p style={S.p}>
          Esta definição corresponde ao <strong>ruído branco fraco</strong>. O <strong>ruído branco estrito</strong>
          exige adicionalmente que os <InlineMath math="\varepsilon_t" /> sejam independentes e identicamente distribuídos (i.i.d.),
          o que é mais forte: implica o fraco, mas não vice-versa.
        </p>

        <h3 style={S.h3}>Propriedades do Correlograma</h3>
        <p style={S.p}>
          Para ruído branco, <InlineMath math="\rho_k = 0" /> para todo <InlineMath math="k \neq 0" /> (apenas <InlineMath math="\rho_0 = 1" />). Na prática, os <InlineMath math="r_k" /> estimados
          nunca serão exactamente zero, mas devem estar dentro das bandas <InlineMath math="\pm 1.96/\sqrt{T}" /> com probabilidade
          aproximada de 95%.
        </p>

        <h3 style={S.h3}>Teste de Ljung-Box</h3>
        <p style={S.p}>
          O teste de <strong>Ljung-Box</strong> testa conjuntamente se as primeiras <InlineMath math="m" /> autocorrelações
          são nulas. A estatística é:
        </p>
        <div style={S.code}>
          {`Q(m) = T(T+2) Σₖ₌₁ᵐ [ rₖ² / (T−k) ]

H₀: ρ₁ = ρ₂ = … = ρₘ = 0  (série é ruído branco)
H₁: existe algum ρₖ ≠ 0

Distribuição assimptótica: Q(m) ~ χ²(m) sob H₀`}
        </div>
        <p style={S.p}>
          O teste é frequentemente aplicado aos <em>resíduos</em> de um modelo ajustado para verificar
          se o modelo capturou toda a dependência temporal da série. Nesse caso, os graus de liberdade
          devem ser ajustados para <InlineMath math="m - p - q" />.
        </p>

        <div style={S.note}>
          Em R: <code>Box.test(resid, lag = 20, type = "Ljung-Box")</code>. O argumento <code>fitdf</code>
          permite especificar os parâmetros estimados para ajustar os graus de liberdade.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Passeio Aleatório ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Passeio Aleatório</h2>
        <p style={S.p}>
          O <strong>passeio aleatório</strong> (random walk) é o exemplo canónico de série não estacionária
          e o modelo mais simples com raiz unitária. É definido pela equação de recorrência:
        </p>
        
          <p style={{ margin: 0, marginBottom: '0.4rem' }}><InlineMath math="y_t = y_{t-1} + \varepsilon_t" />, onde <InlineMath math="\varepsilon_t \sim RB(0, \sigma^2)" /></p>
          <p style={{ margin: 0 }}>Expandindo: <InlineMath math="y_t = y_0 + \sum_{j=1}^{t} \varepsilon_j" /></p>
        
        <p style={S.p}>
          As propriedades da variância revelam a não estacionariedade: <InlineMath math="\text{Var}(y_t) = t\sigma^2" />, o que cresce
          indefinidamente com <InlineMath math="t" />. Isto viola a condição de variância constante da estacionariedade fraca.
        </p>

        <h3 style={S.h3}>Propriedades</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Propriedade</th>
                <th style={S.th}>Valor</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['E[yₜ] (com y₀=0)', '0 (média constante)'],
                ['Var(yₜ)', 'tσ² (cresce com t)'],
                ['Cov(yₜ, yₜ₋ₖ)', '(t−k)σ² (depende de t, não apenas de k)'],
                ['Autocorrelação ρₖ(t)', '√((t−k)/t) → 1 quando t → ∞'],
                ['Estacionariedade', 'Não (variância não é constante)'],
                ['1ª diferença Δyₜ', 'Ruído branco — é estacionário'],
              ].map(([a, b], i) => (
                <tr key={i}>
                  <td style={S.td}>{a}</td>
                  <td style={S.td}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          O passeio aleatório tem a propriedade de <strong>memória infinita</strong>: um choque em
          qualquer período persiste para sempre. Contrariamente a um processo AR(1) estacionário,
          onde o efeito de um choque se dissipa geometricamente, no passeio aleatório o choque é
          permanente.
        </p>

        <h3 style={S.h3}>Passeio Aleatório com Deriva</h3>
        <p style={S.p}>
          Uma extensão natural inclui uma constante δ (deriva):
          yₜ = δ + yₜ₋₁ + εₜ, o que resulta numa tendência determinística crescente (se δ &gt; 0)
          combinada com tendência estocástica — padrão comum em preços de activos.
        </p>

        <div style={S.diagram}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Figura 6 — Passeio aleatório e respectivas primeiras diferenças
          </div>
          <SVGPasseioAleatorio />
        </div>
        <div style={S.note}>
          As primeiras diferenças (Δyₜ = yₜ − yₜ₋₁) de um passeio aleatório são ruído branco —
          flutuam aleatoriamente em torno de zero sem tendência, confirmando que a diferenciação
          torna a série estacionária.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Transformações ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Transformações para Estacionariedade</h2>
        <p style={S.p}>
          Quando uma série apresenta não estacionariedade, existem várias transformações que podem
          induzir estacionariedade antes de aplicar modelos ARMA.
        </p>

        <h3 style={S.h3}>Diferenciação</h3>
        <p style={S.p}>
          A <strong>primeira diferença</strong> remove tendências lineares estocásticas:
        </p>
        <div style={S.code}>
          {`Δyₜ = yₜ − yₜ₋₁       (1ª diferença)
Δ²yₜ = Δyₜ − Δyₜ₋₁   (2ª diferença, remove tendência quadrática)
Δᵈyₜ                   (d-ésima diferença para processo I(d))`}
        </div>
        <p style={S.p}>
          Um processo integrado de ordem d, denotado I(d), torna-se estacionário após d diferenciações.
          A maioria das séries económicas é I(1). Raramente se necessita d &gt; 2.
        </p>

        <h3 style={S.h3}>Transformação Logarítmica</h3>
        <p style={S.p}>
          Quando a variância da série cresce proporcionalmente com o nível (heteroscedasticidade
          multiplicativa), o logaritmo estabiliza a variância:
        </p>
        <div style={S.code}>
          {`wₜ = log(yₜ)

Nota: Δlog(yₜ) ≈ (yₜ − yₜ₋₁)/yₜ₋₁ = taxa de crescimento percentual
      → muito útil em finanças e macroeconomia`}
        </div>

        <h3 style={S.h3}>Diferenciação Sazonal</h3>
        <p style={S.p}>
          Para séries com sazonalidade (período m), a diferença sazonal remove padrões sazonais:
        </p>
        <div style={S.code}>
          {`Δₘyₜ = yₜ − yₜ₋ₘ

Exemplo (dados mensais, m=12):
  Δ₁₂yₜ = yₜ − yₜ₋₁₂ = "igual mês do ano anterior"`}
        </div>

        <h3 style={S.h3}>Transformação Box-Cox</h3>
        <p style={S.p}>
          A família Box-Cox generaliza o logaritmo com um parâmetro λ estimado dos dados:
        </p>
        <div style={S.code}>
          {`yₜ(λ) = (yₜᵏ − 1) / λ    se λ ≠ 0
yₜ(λ) = log(yₜ)           se λ = 0

Casos especiais:
  λ = 1  → sem transformação
  λ = 0  → logaritmo natural
  λ = 0.5 → raiz quadrada
  λ = −1 → recíproco`}
        </div>

        <h3 style={S.h3}>Quando aplicar cada transformação</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Problema</th>
                <th style={S.th}>Transformação</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tendência estocástica (raiz unitária)', 'Primeira diferença Δyₜ'],
                ['Tendência sazonal', 'Diferença sazonal Δₘyₜ'],
                ['Variância crescente com nível', 'Logaritmo log(yₜ)'],
                ['Assimetria forte', 'Box-Cox com λ estimado'],
                ['Tendência + sazonalidade', 'Δ₁Δ₁₂yₜ (diferença regular e sazonal)'],
              ].map(([a, b], i) => (
                <tr key={i}>
                  <td style={S.td}>{a}</td>
                  <td style={S.td}><code>{b}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Atenção à sobrediferenciação: aplicar mais diferenças do que o necessário introduz
          autocorrelação negativa artificial e pode dificultar a estimação. O critério de informação
          (AIC, BIC) ajuda a escolher d correctamente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Decomposição Aditiva ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Decomposição Aditiva — Exemplo Numérico</h2>
        <p style={S.p}>
          A decomposição clássica aditiva estima cada componente sequencialmente. Ilustramos com
          uma série de 8 observações trimestrais (m=4):
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>t</th>
                <th style={S.th}>Trimestre</th>
                <th style={S.th}>yₜ</th>
                <th style={S.th}>Média Móvel (T̂ₜ)</th>
                <th style={S.th}>yₜ − T̂ₜ</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, 'Q1 Ano 1', 45, '—', '—'],
                [2, 'Q2 Ano 1', 58, '—', '—'],
                [3, 'Q3 Ano 1', 62, '52.1', '9.9'],
                [4, 'Q4 Ano 1', 41, '54.4', '-13.4'],
                [5, 'Q1 Ano 2', 49, '55.9', '-6.9'],
                [6, 'Q2 Ano 2', 63, '57.0', '6.0'],
                [7, 'Q3 Ano 2', 67, '—', '—'],
                [8, 'Q4 Ano 2', 45, '—', '—'],
              ].map(([t, q, y, mm, diff], i) => (
                <tr key={i}>
                  <td style={S.td}>{t}</td>
                  <td style={S.td}>{q}</td>
                  <td style={S.td}><strong>{y}</strong></td>
                  <td style={S.td}>{mm}</td>
                  <td style={S.td}>{diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Passo 1 — Estimar a Tendência (Média Móvel Centrada)</h3>
        <div style={S.code}>
          {`Para m=4 (par), usa-se média móvel de ordem 2×4:
T̂₃ = (0.5×y₁ + y₂ + y₃ + y₄ + 0.5×y₅) / 4
    = (0.5×45 + 58 + 62 + 41 + 0.5×49) / 4
    = (22.5 + 58 + 62 + 41 + 24.5) / 4
    = 208 / 4 = 52.0`}
        </div>

        <h3 style={S.h3}>Passo 2 — Calcular Índices Sazonais</h3>
        <p style={S.p}>
          Para cada trimestre, calcula-se a média de (yₜ − T̂ₜ) nos anos disponíveis:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Trimestre</th>
                <th style={S.th}>Ano 1: yₜ − T̂ₜ</th>
                <th style={S.th}>Ano 2: yₜ − T̂ₜ</th>
                <th style={S.th}>Índice Sazonal (Ŝ)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Q1', '—', '-6.9', '-6.9'],
                ['Q2', '—', '6.0', '6.0'],
                ['Q3', '9.9', '—', '9.9'],
                ['Q4', '-13.4', '—', '-13.4'],
              ].map(([q, a1, a2, s], i) => (
                <tr key={i}>
                  <td style={S.td}>{q}</td>
                  <td style={S.td}>{a1}</td>
                  <td style={S.td}>{a2}</td>
                  <td style={S.td}><strong>{s}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Verificação: a soma dos índices sazonais deve ser próxima de zero.
          (−6.9) + 6.0 + 9.9 + (−13.4) = −4.4. Em geral normaliza-se dividindo pelo ajuste
          necessário: −4.4/4 = −1.1 subtrai-se de cada índice.
        </div>

        <h3 style={S.h3}>Passo 3 — Dessazonalizar e Obter Resíduos</h3>
        <div style={S.code}>
          {`Série dessazonalizada: dₜ = yₜ − Ŝₜ
Resíduos:             Iₜ = yₜ − T̂ₜ − Ŝₜ

Exemplo para t=3 (Q3):
  d₃ = 62 − 9.9 = 52.1
  I₃ = 62 − 52.0 − 9.9 = 0.1`}
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <p style={S.p}>
          Este módulo estabeleceu os alicerces conceptuais e práticos necessários para analisar
          séries temporais. Os conceitos-chave a reter são:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Conceito</th>
                <th style={S.th}>Definição Essencial</th>
                <th style={S.th}>Relevância Prática</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Série Temporal', 'Sequência ordenada de observações no tempo', 'Base de toda a modelação temporal'],
                ['Componentes', 'Tendência, Sazonalidade, Ciclo, Irregular', 'Decomposição e interpretação da variação'],
                ['Estacionariedade', 'Média, variância e autocovariância constantes', 'Pressuposto dos modelos ARMA'],
                ['ACF', 'Correlação entre yₜ e yₜ₋ₖ', 'Identifica MA(q): corte após lag q'],
                ['PACF', 'Correlação parcial entre yₜ e yₜ₋ₖ', 'Identifica AR(p): corte após lag p'],
                ['Ruído Branco', 'εₜ iid(0,σ²), sem dependência temporal', 'Bloco fundamental; alvo dos resíduos'],
                ['Passeio Aleatório', 'yₜ = yₜ₋₁ + εₜ, raiz unitária', 'Modelo de preços financeiros (hipótese eficiente)'],
                ['Diferenciação', 'Δyₜ = yₜ − yₜ₋₁', 'Induz estacionariedade em I(1)'],
                ['Transformação Log', 'log(yₜ)', 'Estabiliza variância; crescimento relativo'],
                ['Decomposição', 'Separar T, S, I por médias móveis', 'Análise descritiva e dessazonalização'],
              ].map(([a, b, c], i) => (
                <tr key={i}>
                  <td style={S.td}><strong>{a}</strong></td>
                  <td style={S.td}>{b}</td>
                  <td style={S.td}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Fluxo de Análise Recomendado</h3>
        <div style={S.highlight}>
          <ol style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li>Visualizar a série (plot.ts) — identificar tendência, sazonalidade, outliers</li>
            <li>Testar estacionariedade (ADF + KPSS) e visualizar ACF/PACF</li>
            <li>Transformar se necessário (log, diferenciação, diferenciação sazonal)</li>
            <li>Re-testar estacionariedade da série transformada</li>
            <li>Identificar modelo ARIMA pela ACF/PACF e critérios de informação</li>
            <li>Estimar o modelo e analisar diagnósticos dos resíduos</li>
            <li>Validar com Ljung-Box e inspecção visual dos resíduos</li>
            <li>Produzir previsões e intervalos de confiança</li>
          </ol>
        </div>

        <h3 style={S.h3}>Ligações para Módulos Seguintes</h3>
        <p style={S.p}>
          Os fundamentos deste módulo são o ponto de partida directo para:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>ST12 — Processos AR e MA:</strong> modelos paramétricos para séries estacionárias.</li>
          <li><strong>ST13 — Modelos ARIMA:</strong> extensão para séries integradas com identificação formal.</li>
          <li><strong>ST14 — Modelos SARIMA:</strong> componente sazonal explícita no modelo ARIMA.</li>
          <li><strong>ST15 — Modelos ARCH/GARCH:</strong> volatilidade condicional para dados financeiros.</li>
          <li><strong>ST16 — Vectores Autoregressivos (VAR):</strong> sistemas de séries temporais multivariadas.</li>
        </ul>

        <div style={S.note}>
          A análise de séries temporais é iterativa: raramente o primeiro modelo identificado é o
          definitivo. A prática sistemática com dados reais — usando as ferramentas R apresentadas
          neste módulo — é indispensável para desenvolver intuição sobre padrões temporais.
        </div>
      </section>
    </div>
  );
}
