import React, { useState } from 'react';
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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
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
    { label: 'Tendência', data: trend, min: Math.min(...trend) - 1, max: Math.max(...trend) + 1, col: '#4a9eed' },
    { label: 'Sazonal', data: seasonal, min: Math.min(...seasonal) - 1, max: Math.max(...seasonal) + 1, col: '#4a9eed' },
    { label: 'Resíduos', data: residuals, min: -1.2, max: 1.2, col: '#4a9eed' },
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
      <text x={ox1 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#4a9eed">Estacionária</text>
      <text x={ox2 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#4a9eed">Não Estacionária</text>
      {/* mean line stationary */}
      <line x1={ox1} x2={ox1 + panelW} y1={padT + H2 / 2} y2={padT + H2 / 2}
        stroke="#4a9eed" strokeWidth={1} strokeDasharray="5,3" opacity={0.5} />
      {/* series */}
      <polyline points={pts(stat, statMin, statMax, ox1)} fill="none" stroke="#4a9eed" strokeWidth={1.8} strokeLinejoin="round" />
      <polyline points={pts(nonstat, nsMin, nsMax, ox2)} fill="none" stroke="#4a9eed" strokeWidth={1.8} strokeLinejoin="round" />
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
        stroke="#4a9eed" strokeWidth={1} strokeDasharray="6,3" opacity={0.7} />
      <line x1={padL} x2={W - padR} y1={yConfN} y2={yConfN}
        stroke="#4a9eed" strokeWidth={1} strokeDasharray="6,3" opacity={0.7} />
      {/* zero line */}
      <line x1={padL} x2={W - padR} y1={y0} y2={y0} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* bars */}
      {acf.map((v, k) => {
        const outside = k > 0 && Math.abs(v) > confBand;
        const barColor = k === 0 ? color : outside ? '#7dd3fc' : 'var(--text-secondary)';
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
      <text x={W - padR} y={yConf - 4} textAnchor="end" fontSize={9} fill="#4a9eed">+1.96/sqrt(n)</text>
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
      <text x={ox1 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#4a9eed">Passeio Aleatório (yₜ)</text>
      <text x={ox2 + panelW / 2} y={padT - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill="#4a9eed">1ª Diferença (Δyₜ)</text>
      <polyline points={pts(walk, minW, maxW, ox1)} fill="none" stroke="#4a9eed" strokeWidth={2} strokeLinejoin="round" />
      <polyline points={pts(diffs, minD, maxD, ox2)} fill="none" stroke="#4a9eed" strokeWidth={2} strokeLinejoin="round" />
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
// --- SVG: AR(1) phi=0.8 vs phi=-0.6 ---
const arPhi08 = [0, 0.8, 0.64, 0.512, 0.41, 0.328, 0.262, 0.21, 0.168, 0.134, 0.107, 0.086, 0.069, 0.055, 0.044, 0.035, 0.028, 0.022, 0.018, 0.014, 0.011, 0.009, 0.007, 0.006, 0.005, 0.004, 0.003, 0.002];
const arPhiN06 = [0, -0.6, 0.36, -0.216, 0.13, -0.078, 0.047, -0.028, 0.017, -0.01, 0.006, -0.004, 0.002, -0.001, 0.001, -0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function ARSeriesChart() {
  const W = 760, H = 120, pad = 30, n = 28;
  const xs = (i) => pad + (i / (n - 1)) * (W - 2 * pad);
  const ys08 = (v) => H / 2 - v * 50;
  const ysN06 = (v) => H / 2 - v * 50;

  const path08 = arPhi08.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i)},${ys08(v)}`).join(' ');
  const pathN06 = arPhiN06.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i)},${ysN06(v)}`).join(' ');

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        AR(1): resposta ao impulso — phi=0.8 (cima) vs phi=-0.6 (baixo)
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H * 2 + 20}`} style={{ display: 'block' }}>
        {/* Panel 1: phi=0.8 */}
        <line x1={pad} y1={H / 2} x2={W - pad} y2={H / 2} stroke="var(--text-secondary)" strokeWidth="1" />
        <path d={path08} fill="none" stroke={color} strokeWidth="2" />
        <text x={pad} y={14} fontSize="11" fill="var(--text-secondary)">phi=0.8 (persistente)</text>
        {/* Panel 2: phi=-0.6 */}
        <g transform={`translate(0,${H + 20})`}>
          <line x1={pad} y1={H / 2} x2={W - pad} y2={H / 2} stroke="var(--text-secondary)" strokeWidth="1" />
          <path d={pathN06} fill="none" stroke="#4a9eed" strokeWidth="2" />
          <text x={pad} y={14} fontSize="11" fill="var(--text-secondary)">phi=-0.6 (oscilante)</text>
        </g>
      </svg>
    </div>
  );
}

// --- SVG: MA(1) theta=0.7 ---
const maTheta07 = [1, 0.7, 0, 0, 0, 0.05, -0.03, 0.02, -0.01, 0.01, 0, 0, 0.02, -0.01, 0, 0.01, 0, 0, -0.01, 0, 0.01, 0, 0, 0, 0.01, 0, 0, 0];

function MASeriesChart() {
  const W = 760, H = 120, pad = 30, n = 28;
  const xs = (i) => pad + (i / (n - 1)) * (W - 2 * pad);
  const ys = (v) => H / 2 - v * 55;
  const pathMA = maTheta07.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i)},${ys(v)}`).join(' ');

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        MA(1) com theta=0.7: resposta ao impulso (trunca após lag 1)
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
        <line x1={pad} y1={H / 2} x2={W - pad} y2={H / 2} stroke="var(--text-secondary)" strokeWidth="1" />
        <path d={pathMA} fill="none" stroke={color} strokeWidth="2" />
      </svg>
    </div>
  );
}

// --- SVG: Correlograma grid (ACF + PACF para AR, MA, ARMA) ---
const acfAR = [1, 0.8, 0.64, 0.51, 0.41, 0.33, 0.26, 0.21, 0.17];
const pacfAR = [1, 0.8, 0.03, -0.02, 0.01, 0, 0.01, -0.01, 0];
const acfMA = [1, 0.47, 0.0, 0.0, 0.01, -0.01, 0.01, 0, 0];
const pacfMA = [1, 0.47, -0.28, 0.18, -0.12, 0.08, -0.05, 0.03, -0.02];
const acfARMA = [1, 0.75, 0.55, 0.40, 0.29, 0.21, 0.15, 0.11, 0.08];
const pacfARMA = [1, 0.75, 0.22, 0.08, 0.03, 0.01, -0.01, 0, 0.01];

function CorrelogramGrid() {
  const bW = 110, bH = 80, pad = 10, barW = 8, n = 9;
  const band = 1.96 / Math.sqrt(50);
  const xs = (i) => pad + i * ((bW - 2 * pad) / (n - 1));
  const ys = (v) => bH / 2 - v * (bH / 2 - pad);

  function Bars({ data, label, xOff, yOff }) {
    return (
      <g transform={`translate(${xOff},${yOff})`}>
        <rect x={0} y={0} width={bW} height={bH} fill="var(--bg-secondary)" rx="4" />
        <text x={bW / 2} y={10} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{label}</text>
        <line x1={pad} y1={bH / 2} x2={bW - pad} y2={bH / 2} stroke="var(--text-secondary)" strokeWidth="0.8" />
        <line x1={pad} y1={ys(band)} x2={bW - pad} y2={ys(band)} stroke="var(--text-secondary)" strokeWidth="0.6" strokeDasharray="2,2" />
        <line x1={pad} y1={ys(-band)} x2={bW - pad} y2={ys(-band)} stroke="var(--text-secondary)" strokeWidth="0.6" strokeDasharray="2,2" />
        {data.map((v, i) => {
          const x = xs(i);
          const cy = bH / 2;
          const barH = Math.abs(ys(v) - cy);
          return (
            <rect
              key={i}
              x={x - barW / 2}
              y={v >= 0 ? ys(v) : cy}
              width={barW}
              height={barH}
              fill={color}
              opacity={i === 0 ? 0.3 : 0.75}
            />
          );
        })}
      </g>
    );
  }

  const gap = 18;
  const colW = bW + gap;
  const rowH = bH + gap;

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Correlograma teórico: ACF e PACF para AR(1), MA(1) e ARMA(1,1)
      </div>
      <svg width="100%" viewBox={`0 0 ${colW * 3 + 60} ${rowH * 2 + 20}`} style={{ display: 'block' }}>
        <text x={colW * 0 + bW / 2 + 60} y={12} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>AR(1)</text>
        <text x={colW * 1 + bW / 2 + 60} y={12} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>MA(1)</text>
        <text x={colW * 2 + bW / 2 + 60} y={12} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>ARMA(1,1)</text>
        <text x={14} y={rowH * 0 + bH / 2 + 20} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform={`rotate(-90,14,${rowH * 0 + bH / 2 + 20})`}>ACF</text>
        <text x={14} y={rowH * 1 + bH / 2 + 20} textAnchor="middle" fontSize="9" fill="var(--text-secondary)" transform={`rotate(-90,14,${rowH * 1 + bH / 2 + 20})`}>PACF</text>
        <Bars data={acfAR} label="ACF — AR(1)" xOff={60} yOff={18} />
        <Bars data={acfMA} label="ACF — MA(1)" xOff={60 + colW} yOff={18} />
        <Bars data={acfARMA} label="ACF — ARMA(1,1)" xOff={60 + colW * 2} yOff={18} />
        <Bars data={pacfAR} label="PACF — AR(1)" xOff={60} yOff={18 + rowH} />
        <Bars data={pacfMA} label="PACF — MA(1)" xOff={60 + colW} yOff={18 + rowH} />
        <Bars data={pacfARMA} label="PACF — ARMA(1,1)" xOff={60 + colW * 2} yOff={18 + rowH} />
      </svg>
    </div>
  );
}

// --- SVG: ACF dos resíduos (todos dentro das bandas) ---
const residAcf = [0.04, -0.06, 0.03, -0.02, 0.05, -0.03, 0.01, 0.04, -0.02, 0.03, -0.04, 0.02];

function ResidualACFChart() {
  const W = 600, H = 140, pad = 30, barW = 18, n = residAcf.length;
  const band = 1.96 / Math.sqrt(80);
  const maxAbs = 0.25;
  const xs = (i) => pad + 20 + i * ((W - 2 * pad - 20) / (n - 1));
  const mid = H / 2;
  const ys = (v) => mid - (v / maxAbs) * (mid - pad);

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        ACF dos resíduos: barras dentro das bandas ±1.96/√n — ruído branco
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
        <line x1={pad} y1={mid} x2={W - pad} y2={mid} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={ys(band)} x2={W - pad} y2={ys(band)} stroke={color} strokeWidth="1" strokeDasharray="4,3" />
        <line x1={pad} y1={ys(-band)} x2={W - pad} y2={ys(-band)} stroke={color} strokeWidth="1" strokeDasharray="4,3" />
        <text x={W - pad + 2} y={ys(band) + 4} fontSize="9" fill={color}>+1.96/√n</text>
        <text x={W - pad + 2} y={ys(-band) + 4} fontSize="9" fill={color}>-1.96/√n</text>
        {residAcf.map((v, i) => {
          const x = xs(i);
          const barH = Math.abs(ys(v) - mid);
          return (
            <g key={i}>
              <rect
                x={x - barW / 2}
                y={v >= 0 ? ys(v) : mid}
                width={barW}
                height={Math.max(barH, 2)}
                fill={color}
                opacity={0.75}
              />
              <text x={x} y={H - 4} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">{i + 1}</text>
            </g>
          );
        })}
        <text x={pad - 5} y={mid + 4} fontSize="9" fill="var(--text-secondary)" textAnchor="end">0</text>
        <text x={2} y={mid - 5} fontSize="9" fill="var(--text-secondary)" textAnchor="start" transform={`rotate(-90,10,${mid})`}>ACF</text>
      </svg>
    </div>
  );
}

// --- SVG: I(0), I(1), I(2) ---
const noiseI0 = [0.1, -0.3, 0.5, -0.2, 0.4, -0.1, 0.3, -0.4, 0.2, -0.3, 0.5, 0.1, -0.4, 0.3, -0.2, 0.4, -0.1, 0.2, -0.3, 0.5, -0.1, 0.3, -0.4, 0.2, -0.1, 0.4, -0.3, 0.1];
const rwI1 = (() => { let s = 0; return noiseI0.map(v => { s += v; return s; }); })();
const rwI2 = (() => { let s = 0; return rwI1.map(v => { s += v; return s; }); })();

function IntegrationChart() {
  const W = 720, H = 90, pad = 28, n = 28;
  const xs = (i) => pad + (i / (n - 1)) * (W - 2 * pad);

  function Panel({ data, label, yOff, clr }) {
    const mn = Math.min(...data), mx = Math.max(...data);
    const rng = mx - mn || 1;
    const ys = (v) => H - pad - ((v - mn) / rng) * (H - 2 * pad);
    const pts = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i)},${ys(v)}`).join(' ');
    return (
      <g transform={`translate(0,${yOff})`}>
        <text x={pad} y={12} fontSize="10" fill="var(--text-secondary)">{label}</text>
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <path d={pts} fill="none" stroke={clr} strokeWidth="1.8" />
      </g>
    );
  }

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        Comparacao de I(0), I(1) e I(2): estacionaridade vs passeio aleatorio
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H * 3 + 10}`} style={{ display: 'block' }}>
        <Panel data={noiseI0} label="I(0) — ruido branco (estacionario)" yOff={0} clr={color} />
        <Panel data={rwI1} label="I(1) — passeio aleatorio (nao estacionario)" yOff={H} clr="#4a9eed" />
        <Panel data={rwI2} label="I(2) — dupla integracao" yOff={H * 2} clr="#4a9eed" />
      </svg>
    </div>
  );
}
// ── Main component ──
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
      <h1 style={S.h1}>Séries Temporais — Fundamentos & ARMA</h1>

<section style={S.section}>
        <h2 style={S.h2}>1. O que é uma Série Temporal</h2>
        <p style={S.p}>
          Uma <strong>série temporal</strong> é um conjunto de observações <InlineMath math="\{y_1, y_2, \ldots, y_T\}" /> recolhidas
          sequencialmente ao longo do tempo, em intervalos regulares (hora, dia, mês, ano). A característica
          fundamental que a distingue de dados seccionais é a <strong>dependência temporal</strong>: o valor
          em <InlineMath math="t" /> tende a estar correlacionado com os valores em <InlineMath math="t-1, t-2" />, etc.
        </p>
        <div style={S.note}>
          <strong>ARMA</strong> (AutoRegressive Moving Average) é a família de modelos central deste módulo:
          combina uma componente <strong>AR</strong> (o valor atual depende dos valores passados da própria série)
          com uma componente <strong>MA</strong> (o valor atual depende de erros passados). É a base para modelar
          e prever séries temporais estacionárias, e será desenvolvida em detalhe nas secções seguintes.
        </div>

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
        <div style={S.diagram}>
          <BlockMath math="r_k = \frac{\sum_{t=k+1}^{T} (y_t - \bar{y})(y_{t-k} - \bar{y})}{\sum_{t=1}^{T} (y_t - \bar{y})^2}" />
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
          As barras em destaque ultrapassam as bandas de confiança (linhas tracejadas a azul), indicando
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
        <div style={S.diagram}>
          <BlockMath math="Q(m) = T(T+2) \sum_{k=1}^{m} \frac{r_k^2}{T-k}" />
        </div>
        <p style={S.p}>
          <InlineMath math="H_0: \rho_1 = \rho_2 = \ldots = \rho_m = 0" /> (série é ruído branco) &nbsp;|&nbsp; <InlineMath math="H_1" />: existe algum <InlineMath math="\rho_k \neq 0" />
          <br />
          Distribuição assimptótica: <InlineMath math="Q(m) \sim \chi^2(m)" /> sob <InlineMath math="H_0" />
        </p>
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
        <div style={S.diagram}>
          <BlockMath math="\Delta y_t = y_t - y_{t-1} \quad \text{(1ª diferença)}" />
          <BlockMath math="\Delta^2 y_t = \Delta y_t - \Delta y_{t-1} \quad \text{(2ª diferença, remove tendência quadrática)}" />
          <BlockMath math="\Delta^d y_t \quad \text{(d-ésima diferença para processo } I(d)\text{)}" />
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
        <div style={S.diagram}>
          <BlockMath math="w_t = \log(y_t)" />
        </div>
        <p style={S.p}>
          Nota: <InlineMath math="\Delta \log(y_t) \approx \frac{y_t - y_{t-1}}{y_{t-1}}" /> = taxa de crescimento percentual — muito útil em finanças e macroeconomia.
        </p>

        <h3 style={S.h3}>Diferenciação Sazonal</h3>
        <p style={S.p}>
          Para séries com sazonalidade (período m), a diferença sazonal remove padrões sazonais:
        </p>
        <div style={S.diagram}>
          <BlockMath math="\Delta_m y_t = y_t - y_{t-m}" />
        </div>
        <p style={S.p}>
          Exemplo (dados mensais, <InlineMath math="m=12" />): <InlineMath math="\Delta_{12} y_t = y_t - y_{t-12}" /> = "igual mês do ano anterior".
        </p>

        <h3 style={S.h3}>Transformação Box-Cox</h3>
        <p style={S.p}>
          A família Box-Cox generaliza o logaritmo com um parâmetro λ estimado dos dados:
        </p>
        <div style={S.diagram}>
          <BlockMath math="y_t^{(\lambda)} = \begin{cases} \dfrac{y_t^\lambda - 1}{\lambda} & \text{se } \lambda \neq 0 \\ \log(y_t) & \text{se } \lambda = 0 \end{cases}" />
        </div>
        <p style={S.p}>
          Casos especiais: <InlineMath math="\lambda = 1" /> → sem transformação; <InlineMath math="\lambda = 0" /> → logaritmo natural; <InlineMath math="\lambda = 0.5" /> → raiz quadrada; <InlineMath math="\lambda = -1" /> → recíproco.
        </p>

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
        <p style={S.p}>Para m=4 (par), usa-se média móvel de ordem 2×4:</p>
        <div style={S.diagram}>
          <BlockMath math="\hat{T}_3 = \frac{0.5 y_1 + y_2 + y_3 + y_4 + 0.5 y_5}{4} = \frac{0.5(45) + 58 + 62 + 41 + 0.5(49)}{4} = \frac{208}{4} = 52.0" />
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
        <div style={S.diagram}>
          <BlockMath math="d_t = y_t - \hat{S}_t \quad \text{(série dessazonalizada)}" />
          <BlockMath math="I_t = y_t - \hat{T}_t - \hat{S}_t \quad \text{(resíduos)}" />
        </div>
        <p style={S.p}>
          Exemplo para t=3 (Q3): <InlineMath math="d_3 = 62 - 9.9 = 52.1" />, <InlineMath math="I_3 = 62 - 52.0 - 9.9 = 0.1" />.
        </p>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>10. Processo AR(p)</h2>
        <p style={S.p}>
          Um processo autoregressivo de ordem <em>p</em> expressa o valor actual como combinação linear
          dos <em>p</em> valores passados mais um choque aleatório:
        </p>
        <BlockMath math="y_t = \phi_1 y_{t-1} + \phi_2 y_{t-2} + \cdots + \phi_p y_{t-p} + \varepsilon_t, \quad \varepsilon_t \sim \text{RB}(0, \sigma^2)" />
        <p style={S.p}>
          A <strong>condição de estacionaridade</strong> exige que todas as raízes do polinómio característico
          Φ(z) = 1 − φ₁z − … − φ<sub>p</sub>z<sup>p</sup> estejam <em>fora</em> do círculo unitário (|z| &gt; 1).
          No caso AR(1), isso reduz-se a |φ₁| &lt; 1.
        </p>
        <h3 style={S.h3}>AR(1): caso especial</h3>
        <p style={S.p}>
          Com <em>p</em> = 1 temos y<sub>t</sub> = φy<sub>t-1</sub> + ε<sub>t</sub>.
          A ACF decai geometricamente: ρ<sub>k</sub> = φ<sup>k</sup>.
          Para φ &gt; 0 o decaimento é monotónico; para φ &lt; 0 é alternado (oscilante).
        </p>
        <ARSeriesChart />
        <div style={S.note}>
          A persistência aumenta com |φ|. Quando φ → 1 o processo aproxima-se de um passeio aleatório (raiz unitária).
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>11. Operador Lag (L)</h2>
        <p style={S.p}>
          O operador atraso <strong>L</strong> é definido por Ly<sub>t</sub> = y<sub>t-1</sub>, e mais genericamente
          L<sup>k</sup>y<sub>t</sub> = y<sub>t-k</sub>. Permite escrever o modelo AR(p) de forma compacta:
        </p>
        <BlockMath math="\Phi(L)y_t = \varepsilon_t \quad \text{onde} \quad \Phi(L) = 1 - \phi_1 L - \phi_2 L^2 - \cdots - \phi_p L^p" />
        <p style={S.p}>
          A notação em operadores de atraso simplifica muito a álgebra de séries temporais:
          inverter Φ(L) dá a representação MA(∞), e fatorizar os polinómios facilita a análise de raízes.
          A condição de estacionaridade equivale a todas as raízes de Φ(z) = 0 satisfazerem |z| &gt; 1.
        </p>
        <div style={S.note}>
          Em termos computacionais, R e Python representam os modelos ARMA exactamente através dos coeficientes de Φ(L) e Θ(L).
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>12. Processo MA(q)</h2>
        <p style={S.p}>
          Um processo de médias móveis de ordem <em>q</em> é uma combinação linear do choque actual e dos
          <em>q</em> choques anteriores:
        </p>
        <BlockMath math="y_t = \varepsilon_t + \theta_1\varepsilon_{t-1} + \theta_2\varepsilon_{t-2} + \cdots + \theta_q\varepsilon_{t-q}" />
        <p style={S.p}>
          Um processo MA(q) é <strong>sempre estacionário</strong> (tem média e variância finitas independentes do tempo),
          pois é uma soma finita de variáveis de ruído branco. A ACF é exactamente zero para lags superiores a <em>q</em> —
          propriedade de corte que identifica a ordem.
        </p>
        <h3 style={S.h3}>Invertibilidade</h3>
        <p style={S.p}>
          Para que o processo MA(q) admita uma representação AR(∞) é necessário que as raízes de{' '}
          <InlineMath math="\Theta(z) = 1 + \theta_1 z + \ldots + \theta_q z^q" /> estejam fora do círculo unitário.
          Esta condição de <strong>invertibilidade</strong> é o análogo da estacionaridade no caso AR.
        </p>
        <h3 style={S.h3}>MA(1): ACF analítica</h3>
        <BlockMath math="\rho_1 = \frac{\theta}{1 + \theta^2}, \quad \rho_k = 0 \text{ para } k > 1" />
        <p style={S.p}>
          Note que θ e 1/θ produzem o mesmo ρ₁, pelo que a condição de invertibilidade (|θ| &lt; 1) selecciona
          a solução canónica única.
        </p>
        <MASeriesChart />
      </section>

<section style={S.section}>
        <h2 style={S.h2}>13. Processo ARMA(p,q)</h2>
        <p style={S.p}>
          O modelo ARMA(p,q) combina os dois componentes numa única equação:
        </p>
        <BlockMath math="\Phi(L)y_t = \Theta(L)\varepsilon_t" />
          <BlockMath math="y_t - \phi_1 y_{t-1} - \cdots - \phi_p y_{t-p} = \varepsilon_t + \theta_1\varepsilon_{t-1} + \cdots + \theta_q\varepsilon_{t-q}" />
        <h3 style={S.h3}>Parcimónia</h3>
        <p style={S.p}>
          O principal argumento a favor do ARMA é a <strong>parcimónia</strong>: muitas séries que exigiriam
          um AR(15) ou MA(20) podem ser bem aproximadas por um ARMA(2,1) ou ARMA(1,2), reduzindo
          drasticamente o número de parâmetros a estimar e o risco de sobreajustamento.
        </p>
        <h3 style={S.h3}>Teorema de Wold</h3>
        <p style={S.p}>
          O teorema de decomposição de Wold garante que qualquer processo estacionário de covariância pode
          ser representado como um MA(∞). O ARMA fornece uma aproximação paramétrica finita e eficiente dessa
          representação infinita.
        </p>
        <h3 style={S.h3}>Condições</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Condição</th>
              <th style={S.th}>Polinómio envolvido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Estacionaridade</td>
              <td style={S.td}>Raízes de Φ(z)=0 fora do círculo unitário</td>
              <td style={S.td}>Componente AR</td>
            </tr>
            <tr>
              <td style={S.td}>Invertibilidade</td>
              <td style={S.td}>Raízes de Θ(z)=0 fora do círculo unitário</td>
              <td style={S.td}>Componente MA</td>
            </tr>
            <tr>
              <td style={S.td}>Identificabilidade</td>
              <td style={S.td}>Φ(z) e Θ(z) sem raízes comuns</td>
              <td style={S.td}>Ambos</td>
            </tr>
          </tbody>
        </table>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>14. ACF e PACF — Identificação da Ordem</h2>
        <p style={S.p}>
          A Função de Autocorrelação (ACF) e a Função de Autocorrelação Parcial (PACF) são as ferramentas
          clássicas para identificar a estrutura ARMA. Os padrões teóricos são:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Processo</th>
              <th style={S.th}>ACF</th>
              <th style={S.th}>PACF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>AR(p)</strong></td>
              <td style={S.td}>Decai (exponencial ou oscilante) — cauda</td>
              <td style={S.td}>Corta a zero após lag p</td>
            </tr>
            <tr>
              <td style={S.td}><strong>MA(q)</strong></td>
              <td style={S.td}>Corta a zero após lag q</td>
              <td style={S.td}>Decai (exponencial ou oscilante) — cauda</td>
            </tr>
            <tr>
              <td style={S.td}><strong>ARMA(p,q)</strong></td>
              <td style={S.td}>Decai após lag q — cauda</td>
              <td style={S.td}>Decai após lag p — cauda</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Ruído branco</strong></td>
              <td style={S.td}>Todos os lags ≈ 0</td>
              <td style={S.td}>Todos os lags ≈ 0</td>
            </tr>
          </tbody>
        </table>
        <CorrelogramGrid />
        <div style={S.note}>
          Na prática, "corta" significa que os valores saem das bandas de confiança ±1.96/√n para lags até à ordem e ficam dentro depois. "Cauda" significa que decaem gradualmente mas nunca são exactamente zero.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>15. Estimação de Modelos ARMA</h2>
        <h3 style={S.h3}>Máxima Verosimilhança Condicional</h3>
        <p style={S.p}>
          O método padrão é a <strong>Máxima Verosimilhança (MV)</strong>, tipicamente condicional aos primeiros
          valores observados. Sob normalidade, minimiza a soma dos quadrados dos resíduos de previsão de um passo.
          Para o componente AR puro, as equações de <strong>Yule-Walker</strong> fornecem estimadores de momentos
          consistentes e computacionalmente mais simples.
        </p>
        <h3 style={S.h3}>Critérios de Selecção de Ordem</h3>
        
          <BlockMath math="\text{AIC} = -2\log\hat{L} + 2k" />
          <BlockMath math="\text{BIC} = -2\log\hat{L} + k\cdot\log(n)" />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            k = número de parâmetros estimados &nbsp;|&nbsp; n = dimensão da amostra
          </div>
        
        <p style={S.p}>
          O BIC penaliza mais fortemente a complexidade do modelo, pelo que tende a seleccionar ordens
          mais baixas que o AIC, especialmente em amostras grandes. A estratégia habitual consiste em
          ajustar vários modelos ARMA(p,q) numa grelha de p e q, seleccionando o que minimiza AIC ou BIC.
        </p>
        <h3 style={S.h3}>auto.arima</h3>
        <p style={S.p}>
          A função <code>auto.arima()</code> do pacote <em>forecast</em> em R implementa um algoritmo de pesquisa
          stepwise que combina testes de raiz unitária (para determinar d), análise de ACF/PACF e minimização
          de AIC corrigido (AICc). É o ponto de partida prático para a maioria das aplicações.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Penalização</th>
              <th style={S.th}>Tendência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>AIC</td>
              <td style={S.td}>2k</td>
              <td style={S.td}>Mais parâmetros (pode sobreajustar)</td>
            </tr>
            <tr>
              <td style={S.td}>AICc</td>
              <td style={S.td}>2k·n/(n−k−1)</td>
              <td style={S.td}>Correcção para amostras pequenas</td>
            </tr>
            <tr>
              <td style={S.td}>BIC</td>
              <td style={S.td}>k·log(n)</td>
              <td style={S.td}>Mais parcimonioso em amostras grandes</td>
            </tr>
          </tbody>
        </table>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>16. Diagnóstico de Resíduos</h2>
        <p style={S.p}>
          Após a estimação, os resíduos do modelo devem comportar-se como <strong>ruído branco</strong>.
          O diagnóstico padrão inclui:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Diagnóstico</th>
              <th style={S.th}>Método</th>
              <th style={S.th}>Resultado esperado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Autocorrelação</td>
              <td style={S.td}>ACF dos resíduos</td>
              <td style={S.td}>Todos os lags dentro de ±1.96/√n</td>
            </tr>
            <tr>
              <td style={S.td}>Teste de Ljung-Box</td>
              <td style={S.td}>Q ~ χ²(m−p−q)</td>
              <td style={S.td}>p-valor &gt; 0.05 (não rejeitar H₀)</td>
            </tr>
            <tr>
              <td style={S.td}>Normalidade</td>
              <td style={S.td}>Shapiro-Wilk, QQ-plot</td>
              <td style={S.td}>Distribuição aproximadamente normal</td>
            </tr>
            <tr>
              <td style={S.td}>Heterocedasticidade</td>
              <td style={S.td}>ARCH-LM, resíduos ao quadrado</td>
              <td style={S.td}>Ausência de padrão</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Teste de Ljung-Box</h3>
        
          <BlockMath math="Q(m) = n(n+2)\sum_{k=1}^{m} \frac{\hat{\rho}_k^2}{n-k}" />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            H₀: ausência de autocorrelação até ao lag m &nbsp;|&nbsp; <InlineMath math="Q \sim \chi^2(m-p-q)" /> sob H₀
          </div>
        
        <p style={S.p}>
          Recomenda-se usar m = min(10, n/5) para séries não sazonais. A rejeição de H₀ indica que
          o modelo não capturou toda a estrutura de dependência — aumentar p ou q ou reconsiderar a especificação.
        </p>
        <ResidualACFChart />
      </section>

<section style={S.section}>
        <h2 style={S.h2}>17. Raiz Unitária e Integração</h2>
        <p style={S.p}>
          Um processo diz-se <strong>integrado de ordem d</strong>, denotado I(d), se é não estacionário
          mas a sua d-ésima diferença é estacionária I(0). Os modelos ARMA assumem estacionaridade;
          é portanto crucial diagnosticar e remover raízes unitárias antes de ajustar.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Classe</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Transformação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>I(0)</strong></td>
              <td style={S.td}>Processo estacionário (média e variância finitas)</td>
              <td style={S.td}>Nenhuma</td>
            </tr>
            <tr>
              <td style={S.td}><strong>I(1)</strong></td>
              <td style={S.td}>Passeio aleatório; Δy<sub>t</sub> ~ I(0)</td>
              <td style={S.td}>Primeira diferença</td>
            </tr>
            <tr>
              <td style={S.td}><strong>I(2)</strong></td>
              <td style={S.td}>Δy<sub>t</sub> ~ I(1); Δ²y<sub>t</sub> ~ I(0)</td>
              <td style={S.td}>Segunda diferença</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          O <strong>passeio aleatório</strong> y<sub>t</sub> = y<sub>t-1</sub> + ε<sub>t</sub> é o exemplo
          paradigmático de I(1). A sua variância cresce linearmente com t (→ ∞), as autocorrelações amostrais
          decaem muito lentamente, e regressões entre passeios aleatórios independentes produzem resultados
          espúrios (correlações artificialmente elevadas).
        </p>
        <IntegrationChart />
        <div style={S.note}>
          Diferenciar um processo I(1) elimina a raiz unitária mas introduz um componente MA(1) nos resíduos.
          Diferenciar em excesso é também problemático — daí a importância dos testes formais.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>18. Teste Dickey-Fuller Aumentado (ADF)</h2>
        <p style={S.p}>
          O teste ADF testa formalmente a presença de uma raiz unitária. A equação de regressão auxiliar é:
        </p>
        
          <BlockMath math="\Delta y_t = \alpha + \beta t + \gamma y_{t-1} + \sum_j \delta_j \Delta y_{t-j} + \varepsilon_t" />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            H₀: <InlineMath math="\gamma = 0" /> (existe raiz unitária) &nbsp;|&nbsp; H₁: <InlineMath math="\gamma < 0" /> (processo estacionário)
          </div>
        
        <p style={S.p}>
          Os lags de Δy<sub>t</sub> são incluídos para eliminar autocorrelação serial nos resíduos.
          A estatística de teste <em>t</em> sobre γ̂ não segue a distribuição t de Student — segue
          a <strong>distribuição de MacKinnon</strong>, com valores críticos tabelados mais negativos.
        </p>
        <h3 style={S.h3}>Variantes do modelo ADF</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Especificação</th>
              <th style={S.th}>Regressores</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Sem constante, sem tendência</strong></td>
              <td style={S.td}>γy<sub>t-1</sub> + lags</td>
              <td style={S.td}>Séries com média zero (raro)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Com constante (drift)</strong></td>
              <td style={S.td}>α + γy<sub>t-1</sub> + lags</td>
              <td style={S.td}>Séries com média não nula</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Com constante e tendência</strong></td>
              <td style={S.td}>α + βt + γy<sub>t-1</sub> + lags</td>
              <td style={S.td}>Séries com tendência determinística</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Valores críticos de MacKinnon (aproximados)</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Especificação</th>
              <th style={S.th}>1%</th>
              <th style={S.th}>5%</th>
              <th style={S.th}>10%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Sem constante</td>
              <td style={S.td}>-2.56</td>
              <td style={S.td}>-1.94</td>
              <td style={S.td}>-1.62</td>
            </tr>
            <tr>
              <td style={S.td}>Com constante</td>
              <td style={S.td}>-3.43</td>
              <td style={S.td}>-2.86</td>
              <td style={S.td}>-2.57</td>
            </tr>
            <tr>
              <td style={S.td}>Constante e tendência</td>
              <td style={S.td}>-3.96</td>
              <td style={S.td}>-3.41</td>
              <td style={S.td}>-3.13</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Rejeita-se H₀ (raiz unitária) se a estatística t for mais negativa que o valor crítico. A escolha
          da especificação deve reflectir o comportamento observado da série (com ou sem tendência visível).
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>19. Teste KPSS</h2>
        <p style={S.p}>
          O teste de Kwiatkowski-Phillips-Schmidt-Shin (KPSS) inverte as hipóteses do ADF:
        </p>
        <BlockMath math="H_0: \text{processo estacionário} \quad | \quad H_1: \text{raiz unitária}" />
        <p style={S.p}>
          O KPSS baseia-se na estatística LM que quantifica o quanto os resíduos de uma regressão em tendência
          se afastam de um processo estacionário. Rejeitar H₀ é evidência de não estacionaridade; não rejeitar
          é evidência a favor da estacionaridade.
        </p>
        <h3 style={S.h3}>Estratégia complementar ADF + KPSS</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>ADF</th>
              <th style={S.th}>KPSS</th>
              <th style={S.th}>Conclusão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Não rejeita H₀ (raiz unit.)</td>
              <td style={S.td}>Rejeita H₀ (estac.)</td>
              <td style={S.td}>Forte evidência de I(1)</td>
            </tr>
            <tr>
              <td style={S.td}>Rejeita H₀</td>
              <td style={S.td}>Não rejeita H₀</td>
              <td style={S.td}>Forte evidência de I(0)</td>
            </tr>
            <tr>
              <td style={S.td}>Não rejeita H₀</td>
              <td style={S.td}>Não rejeita H₀</td>
              <td style={S.td}>Inconclusivo — série pode ser fracamente I(1)</td>
            </tr>
            <tr>
              <td style={S.td}>Rejeita H₀</td>
              <td style={S.td}>Rejeita H₀</td>
              <td style={S.td}>Contradição — possível quebra estrutural ou série fraccionada</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Usar os dois testes em conjunto reduz significativamente a probabilidade de erro de diagnóstico.
          Em caso de contradição, investigar a presença de quebras estruturais (teste Zivot-Andrews).
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>20. Cointegração — Introdução</h2>
        <p style={S.p}>
          Quando duas ou mais séries são individualmente I(1) mas existe uma combinação linear entre elas que
          é I(0), diz-se que as séries são <strong>cointegradas</strong>. Isso implica uma relação de equilíbrio
          de longo prazo entre elas.
        </p>
        <BlockMath math="\text{Se } x_t \sim I(1) \text{ e } y_t \sim I(1), \text{ e } \exists\,\beta \text{ tal que } y_t - \beta x_t \sim I(0)," />
          <BlockMath math="\text{então } x_t \text{ e } y_t \text{ são cointegradas com vector } (1,\,-\beta)." />
        <h3 style={S.h3}>Teste de Engle-Granger</h3>
        <p style={S.p}>
          O procedimento de dois passos de Engle-Granger consiste em: (1) estimar por OLS a regressão de
          equilíbrio y<sub>t</sub> = α + βx<sub>t</sub> + u<sub>t</sub>; (2) testar os resíduos û<sub>t</sub>
          para raiz unitária com ADF. Se û<sub>t</sub> ~ I(0), as séries são cointegradas.
        </p>
        <h3 style={S.h3}>Modelo de Correcção de Erros (VECM)</h3>
        <p style={S.p}>
          Na presença de cointegração, a dinâmica de curto prazo é correctamente modelada por um
          <strong> Vector Error Correction Model (VECM)</strong>: Δy<sub>t</sub> = α(y<sub>t-1</sub> − βx<sub>t-1</sub>) + lags + ε<sub>t</sub>.
          O termo de correcção de erro captura o ajustamento de volta ao equilíbrio de longo prazo.
        </p>
        <div style={S.note}>
          A cointegração é tratada em detalhe no módulo ST14 (Vectores Autoregressivos e VECM).
          O teste de Johansen permite múltiplos vectores de cointegração em sistemas de maior dimensão.
        </div>
      </section>
    </div>
  );
}
