import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ── SVG: Matriz de Confusão 2×2 ── */
function ConfusionMatrix2x2() {
  const cOk = '#f97316', cErr = '#64748b';
  const cells = [
    { x: 60,  y: 40,  w: 90, h: 70, col: cOk,  label: 'TN', value: 92 },
    { x: 150, y: 40,  w: 90, h: 70, col: cErr, label: 'FP', value: 13 },
    { x: 60,  y: 110, w: 90, h: 70, col: cErr, label: 'FN', value: 10 },
    { x: 150, y: 110, w: 90, h: 70, col: cOk,  label: 'TP', value: 85 },
  ];
  return (
    <svg viewBox="0 0 300 240" style={{ width: '100%', maxWidth: 300 }}>
      <text x="105" y="20" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Predito Negativo</text>
      <text x="195" y="20" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Predito Positivo</text>
      <text x="28" y="80" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform="rotate(-90,28,80)">Real Neg.</text>
      <text x="28" y="150" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform="rotate(-90,28,150)">Real Pos.</text>
      {cells.map(c => (
        <g key={c.label}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.col} fillOpacity={0.15} rx={4} stroke={c.col} strokeOpacity={0.6} strokeWidth={1.5} />
          <text x={c.x + c.w / 2} y={c.y + c.h / 2 - 8} textAnchor="middle" fontSize="22" fontWeight="700" fill={c.col}>{c.value}</text>
          <text x={c.x + c.w / 2} y={c.y + c.h / 2 + 14} textAnchor="middle" fontSize="11" fill={c.col} fontWeight="600">{c.label}</text>
        </g>
      ))}
      <rect x={60} y={198} width={10} height={10} fill={cOk} fillOpacity={0.7} rx={2} />
      <text x={75} y={208} fontSize="10" fill="var(--text-secondary)">Correcto (TN, TP)</text>
      <rect x={175} y={198} width={10} height={10} fill={cErr} fillOpacity={0.7} rx={2} />
      <text x={190} y={208} fontSize="10" fill="var(--text-secondary)">Erro (FP, FN)</text>
    </svg>
  );
}

/* ── SVG: Matriz de Confusão 4×4 ── */
function ConfusionMatrix4x4() {
  const classes = ['Gato', 'Cão', 'Ave', 'Peixe'];
  const data = [
    [78, 8, 3, 1],
    [6, 82, 2, 4],
    [4, 3, 71, 2],
    [2, 5, 4, 85],
  ];
  const maxVal = 85;
  const cellW = 52, cellH = 40, offX = 60, offY = 50;
  return (
    <svg viewBox="0 0 320 280" style={{ width: '100%', maxWidth: 320 }}>
      <text x={offX + (cellW * 4) / 2} y={18} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)">Classe Predita</text>
      {classes.map((c, i) => (
        <text key={c} x={offX + i * cellW + cellW / 2} y={38} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{c}</text>
      ))}
      {data.map((row, r) => (
        <g key={r}>
          <text x={offX - 6} y={offY + r * cellH + cellH / 2 + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{classes[r]}</text>
          {row.map((val, c) => {
            const intensity = val / maxVal;
            const fill = r === c ? `rgba(249,115,22,0.10)` : `rgba(249,115,22,0.10)`;
            return (
              <g key={c}>
                <rect x={offX + c * cellW} y={offY + r * cellH} width={cellW - 2} height={cellH - 2} fill={fill} rx={3} />
                <text x={offX + c * cellW + cellW / 2 - 1} y={offY + r * cellH + cellH / 2 + 5} textAnchor="middle" fontSize="12" fontWeight={r === c ? '700' : '400'} fill={r === c ? color : '#f97316'}>{val}</text>
              </g>
            );
          })}
        </g>
      ))}
      <text x={14} y={offY + (cellH * 4) / 2} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)" transform={`rotate(-90,14,${offY + (cellH * 4) / 2})`}>Classe Real</text>
    </svg>
  );
}

/* ── SVG: Curva ROC ── */
function ROCCurve() {
  const w = 360, h = 320, pad = 50;
  const aw = w - pad * 2, ah = h - pad * 2;
  const toX = v => pad + v * aw;
  const toY = v => pad + (1 - v) * ah;

  const modelA = [[0,0],[0.02,0.45],[0.05,0.72],[0.1,0.84],[0.2,0.91],[0.35,0.95],[0.55,0.97],[0.75,0.99],[1,1]];
  const modelB = [[0,0],[0.05,0.28],[0.12,0.52],[0.22,0.68],[0.38,0.78],[0.55,0.85],[0.72,0.91],[0.88,0.96],[1,1]];
  const rand = [[0,0],[1,1]];

  const pts = arr => arr.map(([x, y]) => `${toX(x)},${toY(y)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {/* grid */}
      {[0, 0.25, 0.5, 0.75, 1].map(v => (
        <g key={v}>
          <line x1={toX(0)} y1={toY(v)} x2={toX(1)} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth={0.8} />
          <line x1={toX(v)} y1={toY(0)} x2={toX(v)} y2={toY(1)} stroke="var(--text-secondary)" strokeWidth={0.8} />
          <text x={pad - 8} y={toY(v) + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{v.toFixed(2)}</text>
          <text x={toX(v)} y={toY(0) + 18} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{v.toFixed(2)}</text>
        </g>
      ))}
      {/* diagonal random */}
      <polyline points={pts(rand)} fill="none" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="6 4" />
      {/* model B */}
      <polyline points={pts(modelB)} fill="none" stroke="#f59e0b" strokeWidth={2} />
      {/* model A */}
      <polyline points={pts(modelA)} fill="none" stroke={color} strokeWidth={2.5} />
      {/* labels */}
      <circle cx={toX(0.1)} cy={toY(0.84)} r={4} fill={color} />
      <text x={toX(0.1) + 25} y={toY(0.84) - 6} fontSize="10" fill={color} fontWeight="600">Modelo A — AUC=0.92</text>
      <circle cx={toX(0.38)} cy={toY(0.78)} r={4} fill="#f59e0b" />
      <text x={toX(0.38) + 25} y={toY(0.78) + 6} fontSize="10" fill="#f59e0b" fontWeight="600">Modelo B — AUC=0.78</text>
      <text x={toX(0.65)} cy={toY(0.6)} y={toY(0.52)} fontSize="10" fill="#94a3b8">Aleatório — AUC=0.50</text>
      {/* axis labels */}
      <text x={pad + aw / 2} y={h - 6} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">FPR (Taxa Falso Positivo)</text>
      <text x={14} y={pad + ah / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90,14,${pad + ah / 2})`}>TPR (Recall)</text>
    </svg>
  );
}

/* ── SVG: Curvas de Aprendizagem ── */
function LearningCurves() {
  const w = 480, h = 240, padL = 50, padB = 36, padT = 20, padR = 20;
  const aw = w - padL - padR, ah = h - padB - padT;
  const epochs = 20;
  const trainLoss = [0.92,0.78,0.64,0.53,0.44,0.38,0.32,0.27,0.23,0.20,0.17,0.15,0.13,0.12,0.11,0.10,0.09,0.085,0.08,0.075];
  const valLoss   = [0.95,0.80,0.67,0.56,0.48,0.43,0.39,0.37,0.36,0.355,0.354,0.356,0.363,0.372,0.383,0.396,0.41,0.425,0.44,0.456];
  const minLoss = 0.06, maxLoss = 1.0;
  const toX = i => padL + (i / (epochs - 1)) * aw;
  const toY = v => padT + (1 - (v - minLoss) / (maxLoss - minLoss)) * ah;

  const trainPts = trainLoss.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');
  const valPts   = valLoss.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');

  // overfitting zone from epoch 11 (index 11) onward
  const zoneX = toX(11);
  const zoneW = toX(epochs - 1) - zoneX;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {/* overfitting shade */}
      <rect x={zoneX} y={padT} width={zoneW} height={ah} fill="rgba(249,115,22,0.10)" />
      <text x={zoneX + zoneW / 2} y={padT + 14} textAnchor="middle" fontSize="10" fill="#f97316">Zona de Overfitting</text>
      {/* grid */}
      {[0.2,0.4,0.6,0.8,1.0].map(v => (
        <g key={v}>
          <line x1={padL} y1={toY(v)} x2={padL + aw} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth={0.7} />
          <text x={padL - 6} y={toY(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v.toFixed(1)}</text>
        </g>
      ))}
      {[0,4,8,12,16,19].map(i => (
        <text key={i} x={toX(i)} y={h - padB + 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{i + 1}</text>
      ))}
      {/* curves */}
      <polyline points={trainPts} fill="none" stroke={color} strokeWidth={2} />
      <polyline points={valPts} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5,3" />
      {/* legend */}
      <line x1={padL + 10} y1={padT + 6} x2={padL + 28} y2={padT + 6} stroke={color} strokeWidth={2} />
      <text x={padL + 32} y={padT + 10} fontSize="10" fill={color}>Train Loss</text>
      <line x1={padL + 100} y1={padT + 6} x2={padL + 118} y2={padT + 6} stroke="#94a3b8" strokeWidth={2} strokeDasharray="5,3" />
      <text x={padL + 122} y={padT + 10} fontSize="10" fill="#94a3b8">Val Loss</text>
      {/* axis labels */}
      <text x={padL + aw / 2} y={h - 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Época</text>
      <text x={12} y={padT + ah / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90,12,${padT + ah / 2})`}>Loss</text>
    </svg>
  );
}

/* ── SVG: Feature Importance Bar Chart ── */
function FeatureImportance() {
  const features = [
    { name: 'idade', val: 0.28 },
    { name: 'rendimento', val: 0.22 },
    { name: 'n_compras', val: 0.18 },
    { name: 'antiguidade', val: 0.14 },
    { name: 'regiao', val: 0.08 },
    { name: 'canal', val: 0.04 },
    { name: 'dispositivo', val: 0.03 },
    { name: 'hora_dia', val: 0.025 },
    { name: 'genero', val: 0.015 },
    { name: 'lingua', val: 0.01 },
  ];
  const w = 460, h = 240, padL = 95, padR = 20, padT = 16, padB = 24;
  const aw = w - padL - padR, ah = h - padT - padB;
  const maxVal = 0.28;
  const rowH = ah / features.length;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {[0, 0.1, 0.2, 0.28].map(v => {
        const x = padL + (v / maxVal) * aw;
        return (
          <g key={v}>
            <line x1={x} y1={padT} x2={x} y2={padT + ah} stroke="var(--text-secondary)" strokeWidth={0.8} />
            <text x={x} y={padT + ah + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v.toFixed(2)}</text>
          </g>
        );
      })}
      {features.map((f, i) => {
        const barW = (f.val / maxVal) * aw;
        const y = padT + i * rowH + rowH * 0.15;
        const bh = rowH * 0.7;
        const intensity = 0.3 + (f.val / maxVal) * 0.7;
        return (
          <g key={f.name}>
            <text x={padL - 6} y={y + bh / 2 + 4} textAnchor="end" fontSize="10" fill="var(--text-primary)">{f.name}</text>
            <rect x={padL} y={y} width={barW} height={bh} fill={color} fillOpacity={intensity} rx={3} />
            <text x={padL + barW + 4} y={y + bh / 2 + 4} fontSize="9" fill="var(--text-secondary)">{f.val.toFixed(3)}</text>
          </g>
        );
      })}
      <text x={padL + aw / 2} y={h - 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Importância</text>
    </svg>
  );
}

/* ── SVG: SHAP Beeswarm ── */
function SHAPBeeswarm() {
  const features = ['rendimento','idade','n_compras','antiguidade','regiao','canal','dispositivo','hora_dia'];
  const w = 460, h = 260, padL = 95, padR = 40, padT = 24, padB = 28;
  const aw = w - padL - padR, ah = h - padT - padB;
  const rowH = ah / features.length;
  const mid = padL + aw / 2;

  // deterministic pseudo-random points per feature
  const seed = (s) => { let x = Math.sin(s) * 10000; return x - Math.floor(x); };
  const spread = [0.38, 0.32, 0.28, 0.22, 0.14, 0.10, 0.08, 0.06];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {/* center line */}
      <line x1={mid} y1={padT} x2={mid} y2={padT + ah} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4 3" />
      <text x={mid} y={padT - 8} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">SHAP = 0</text>
      {/* axis ticks */}
      {[-0.3,-0.15,0,0.15,0.3].map(v => {
        const x = mid + v * aw * 1.1;
        return (
          <g key={v}>
            <line x1={x} y1={padT + ah} x2={x} y2={padT + ah + 5} stroke="var(--text-secondary)" strokeWidth={0.8} />
            <text x={x} y={padT + ah + 17} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v > 0 ? '+' : ''}{v.toFixed(2)}</text>
          </g>
        );
      })}
      {features.map((f, fi) => {
        const cy = padT + fi * rowH + rowH / 2;
        const sp = spread[fi];
        const pts = Array.from({ length: 18 }, (_, k) => {
          const s1 = seed(fi * 100 + k * 7 + 1);
          const s2 = seed(fi * 100 + k * 7 + 2);
          const shap = (s1 - 0.5) * 2 * sp;
          const jitter = (s2 - 0.5) * rowH * 0.55;
          const featureVal = seed(fi * 50 + k * 3);
          return { x: mid + shap * aw * 1.1, y: cy + jitter, high: featureVal > 0.5 };
        });
        return (
          <g key={f}>
            <text x={padL - 6} y={cy + 4} textAnchor="end" fontSize="10" fill="var(--text-primary)">{f}</text>
            {pts.map((p, k) => (
              <circle key={k} cx={p.x} cy={p.y} r={3.5} fill={p.high ? '#f97316' : '#64748b'} fillOpacity={0.75} />
            ))}
          </g>
        );
      })}
      <text x={padL + aw / 2} y={h - 4} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Valor SHAP</text>
    </svg>
  );
}

/* ── SVG: Curva de Validação ── */
function ValidationCurve() {
  const w = 440, h = 220, padL = 44, padR = 20, padT = 20, padB = 30;
  const aw = w - padL - padR, ah = h - padT - padB;
  const depths = [1,2,3,4,5,6,7,8,9,10];
  const trainAcc = [0.62,0.71,0.79,0.86,0.91,0.94,0.96,0.97,0.98,0.99];
  const valAcc   = [0.60,0.69,0.76,0.83,0.84,0.82,0.79,0.75,0.71,0.67];
  const minV = 0.55, maxV = 1.0;
  const toX = i => padL + (i / (depths.length - 1)) * aw;
  const toY = v => padT + (1 - (v - minV) / (maxV - minV)) * ah;
  const trainPts = trainAcc.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');
  const valPts   = valAcc.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {[0.6,0.7,0.8,0.9,1.0].map(v => (
        <g key={v}>
          <line x1={padL} y1={toY(v)} x2={padL + aw} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth={0.7} />
          <text x={padL - 4} y={toY(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v.toFixed(1)}</text>
        </g>
      ))}
      {depths.map((d, i) => (
        <text key={d} x={toX(i)} y={padT + ah + 18} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{d}</text>
      ))}
      {/* optimal marker */}
      <line x1={toX(3)} y1={padT} x2={toX(3)} y2={padT + ah} stroke="#f97316" strokeWidth={1.5} strokeDasharray="5 3" />
      <text x={toX(3) + 4} y={padT + 22} fontSize="9" fill="#f97316">Óptimo</text>
      <polyline points={trainPts} fill="none" stroke={color} strokeWidth={2} />
      <polyline points={valPts} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5,3" />
      {/* legend */}
      <line x1={padL + 8} y1={padT + 6} x2={padL + 24} y2={padT + 6} stroke={color} strokeWidth={2} />
      <text x={padL + 28} y={padT + 10} fontSize="10" fill={color}>Train</text>
      <line x1={padL + 70} y1={padT + 6} x2={padL + 86} y2={padT + 6} stroke="#94a3b8" strokeWidth={2} strokeDasharray="5,3" />
      <text x={padL + 90} y={padT + 10} fontSize="10" fill="#94a3b8">Validação</text>
      <text x={padL + aw / 2} y={h - 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Profundidade da Árvore</text>
      <text x={12} y={padT + ah / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90,12,${padT + ah / 2})`}>Accuracy</text>
    </svg>
  );
}

/* ── SVG: Grid Search Heatmap ── */
function GridSearchHeatmap() {
  const lrs = ['0.001','0.01','0.1','0.3'];
  const estimators = ['50','100','200','400'];
  const scores = [
    [0.71,0.74,0.76,0.77],
    [0.75,0.81,0.85,0.86],
    [0.78,0.84,0.88,0.87],
    [0.72,0.79,0.83,0.82],
  ];
  const minS = 0.71, maxS = 0.88;
  const cellW = 56, cellH = 40, offX = 68, offY = 52;
  const w = 300, h = 260;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      <text x={offX + (cellW * 4) / 2} y={16} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)">n_estimators</text>
      {estimators.map((e, i) => (
        <text key={e} x={offX + i * cellW + cellW / 2} y={34} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{e}</text>
      ))}
      {scores.map((row, r) => (
        <g key={r}>
          <text x={offX - 6} y={offY + r * cellH + cellH / 2 + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{lrs[r]}</text>
          {row.map((val, c) => {
            const t = (val - minS) / (maxS - minS);
            const fill = `rgba(249,115,22,${(0.12 + t * 0.85).toFixed(2)})`;
            const textCol = t > 0.6 ? '#fff' : 'var(--text-primary)';
            return (
              <g key={c}>
                <rect x={offX + c * cellW} y={offY + r * cellH} width={cellW - 2} height={cellH - 2} fill={fill} rx={3} />
                <text x={offX + c * cellW + cellW / 2 - 1} y={offY + r * cellH + cellH / 2 + 5} textAnchor="middle" fontSize="11" fontWeight="600" fill={textCol}>{val.toFixed(2)}</text>
              </g>
            );
          })}
        </g>
      ))}
      <text x={14} y={offY + (cellH * 4) / 2} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)" transform={`rotate(-90,14,${offY + (cellH * 4) / 2})`}>learning_rate</text>
    </svg>
  );
}

/* ── SVG: Clustering Scatter ── */
function ClusterScatter() {
  const w = 400, h = 340, padL = 36, padR = 20, padT = 20, padB = 30;
  const aw = w - padL - padR, ah = h - padT - padB;
  const clusterColors = ['#f97316', '#fbbf24', '#fb923c', '#e2e8f0'];
  // 4 clusters with centres and spread
  const clusters = [
    { cx: 0.22, cy: 0.72, sx: 0.10, sy: 0.09, n: 13 },
    { cx: 0.65, cy: 0.75, sx: 0.09, sy: 0.08, n: 12 },
    { cx: 0.25, cy: 0.28, sx: 0.10, sy: 0.09, n: 13 },
    { cx: 0.70, cy: 0.28, sx: 0.09, sy: 0.09, n: 12 },
  ];
  const seed = (s) => { let x = Math.sin(s) * 10000; return x - Math.floor(x); };
  const toX = v => padL + v * aw;
  const toY = v => padT + (1 - v) * ah;

  return (
    <svg viewBox={`0 0 ${w} ${h + 15}`} style={{ width: '100%', maxWidth: w }}>
      {/* grid */}
      {[0,0.25,0.5,0.75,1].map(v => (
        <g key={v}>
          <line x1={toX(0)} y1={toY(v)} x2={toX(1)} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth={0.6} />
          <line x1={toX(v)} y1={toY(0)} x2={toX(v)} y2={toY(1)} stroke="var(--text-secondary)" strokeWidth={0.6} />
        </g>
      ))}
      {clusters.map((cl, ci) => {
        const col = clusterColors[ci];
        const pts = Array.from({ length: cl.n }, (_, k) => {
          const s1 = seed(ci * 200 + k * 13 + 1);
          const s2 = seed(ci * 200 + k * 13 + 2);
          const gx = cl.cx + (s1 - 0.5) * 2 * cl.sx;
          const gy = cl.cy + (s2 - 0.5) * 2 * cl.sy;
          return { x: toX(gx), y: toY(gy) };
        });
        return (
          <g key={ci}>
            {pts.map((p, k) => <circle key={k} cx={p.x} cy={p.y} r={5} fill={col} fillOpacity={0.65} />)}
            {/* centroid X */}
            <line x1={toX(cl.cx) - 7} y1={toY(cl.cy) - 7} x2={toX(cl.cx) + 7} y2={toY(cl.cy) + 7} stroke={col} strokeWidth={2.5} />
            <line x1={toX(cl.cx) + 7} y1={toY(cl.cy) - 7} x2={toX(cl.cx) - 7} y2={toY(cl.cy) + 7} stroke={col} strokeWidth={2.5} />
          </g>
        );
      })}
      {/* legend */}
      {clusterColors.map((col, i) => (
        <g key={i}>
          <circle cx={padL + 10 + i * 82} cy={h - 10} r={5} fill={col} fillOpacity={0.85} />
          <text x={padL + 20 + i * 82} y={h - 6} fontSize="10" fill="var(--text-secondary)">Cluster {i + 1}</text>
        </g>
      ))}
      <text x={padL + aw / 2} y={h - padB + 40} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Componente Principal 1</text>
      <text x={12} y={padT + ah / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90,12,${padT + ah / 2})`}>Componente Principal 2</text>
    </svg>
  );
}

/* ── SVG: Dendrograma ── */
function Dendrogram() {
  const w = 400, h = 200;
  const leaves = 8;
  const xs = Array.from({ length: leaves }, (_, i) => 30 + i * 48);
  const leafY = 180;
  // merge heights (bottom-up)
  const merges = [
    { left: 0, right: 1, height: 140 },
    { left: 2, right: 3, height: 140 },
    { left: 4, right: 5, height: 130 },
    { left: 6, right: 7, height: 130 },
    { left: 0.5, right: 2.5, height: 90, resolved: [xs[0],xs[1],xs[2],xs[3]] },
    { left: 4.5, right: 6.5, height: 80, resolved: [xs[4],xs[5],xs[6],xs[7]] },
  ];
  const midOf = (...idxs) => idxs.reduce((a, b) => a + xs[b], 0) / idxs.length;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {/* leaf labels */}
      {xs.map((x, i) => (
        <g key={i}>
          <line x1={x} y1={leafY} x2={x} y2={leafY - 12} stroke={color} strokeWidth={1.5} />
          <text x={x} y={leafY + 14} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">L{i + 1}</text>
        </g>
      ))}
      {/* pair merges */}
      {[[0,1,140],[2,3,140],[4,5,130],[6,7,130]].map(([a,b,y]) => (
        <g key={`${a}-${b}`}>
          <line x1={xs[a]} y1={leafY - 12} x2={xs[a]} y2={y} stroke={color} strokeWidth={1.5} fill="none" />
          <line x1={xs[b]} y1={leafY - 12} x2={xs[b]} y2={y} stroke={color} strokeWidth={1.5} fill="none" />
          <line x1={xs[a]} y1={y} x2={xs[b]} y2={y} stroke={color} strokeWidth={1.5} fill="none" />
        </g>
      ))}
      {/* group merges */}
      <g>
        <line x1={midOf(0,1)} y1={140} x2={midOf(0,1)} y2={90} stroke={color} strokeWidth={1.5} fill="none" />
        <line x1={midOf(2,3)} y1={140} x2={midOf(2,3)} y2={90} stroke={color} strokeWidth={1.5} fill="none" />
        <line x1={midOf(0,1)} y1={90} x2={midOf(2,3)} y2={90} stroke={color} strokeWidth={1.5} fill="none" />
      </g>
      <g>
        <line x1={midOf(4,5)} y1={130} x2={midOf(4,5)} y2={80} stroke={color} strokeWidth={1.5} fill="none" />
        <line x1={midOf(6,7)} y1={130} x2={midOf(6,7)} y2={80} stroke={color} strokeWidth={1.5} fill="none" />
        <line x1={midOf(4,5)} y1={80} x2={midOf(6,7)} y2={80} stroke={color} strokeWidth={1.5} fill="none" />
      </g>
      {/* root merge */}
      <g>
        <line x1={midOf(0,1,2,3)} y1={90} x2={midOf(0,1,2,3)} y2={40} stroke={color} strokeWidth={1.5} fill="none" />
        <line x1={midOf(4,5,6,7)} y1={80} x2={midOf(4,5,6,7)} y2={40} stroke={color} strokeWidth={1.5} fill="none" />
        <line x1={midOf(0,1,2,3)} y1={40} x2={midOf(4,5,6,7)} y2={40} stroke={color} strokeWidth={1.5} fill="none" />
      </g>
      <text x={w / 2} y={20} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Distância de Fusão</text>
    </svg>
  );
}

/* ── SVG: Rede Neuronal Feedforward ── */
function NeuralNetwork() {
  const w = 480, h = 260;
  const layers = [
    { n: 3, label: 'Input', x: 70 },
    { n: 4, label: 'Hidden 1', x: 190 },
    { n: 4, label: 'Hidden 2', x: 310 },
    { n: 2, label: 'Output', x: 410 },
  ];
  const nodeR = 14;
  const getY = (n, i) => h / 2 + (i - (n - 1) / 2) * 48;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      {/* connections */}
      {layers.slice(0, -1).map((layerA, li) => {
        const layerB = layers[li + 1];
        return Array.from({ length: layerA.n }, (_, a) =>
          Array.from({ length: layerB.n }, (_, b) => (
            <line
              key={`${li}-${a}-${b}`}
              x1={layerA.x} y1={getY(layerA.n, a)}
              x2={layerB.x} y2={getY(layerB.n, b)}
              stroke={color} strokeWidth={0.8} strokeOpacity={0.25}
              fill="none"
            />
          ))
        );
      })}
      {/* nodes */}
      {layers.map((layer) =>
        Array.from({ length: layer.n }, (_, i) => (
          <circle
            key={`${layer.label}-${i}`}
            cx={layer.x} cy={getY(layer.n, i)} r={nodeR}
            fill="var(--bg-secondary)" stroke={color} strokeWidth={2}
          />
        ))
      )}
      {/* labels */}
      {layers.map((layer) => (
        <text key={layer.label} x={layer.x} y={h - 8} textAnchor="middle" fontSize="10" fill="var(--text-secondary)" fontWeight="600">{layer.label}</text>
      ))}
    </svg>
  );
}

/* ── SVG: Attention Heatmap ── */
function AttentionHeatmap() {
  const tokens = ['eu','vi','o','gato','preto','ontem'];
  const n = tokens.length;
  const attn = [
    [0.88,0.05,0.02,0.03,0.01,0.01],
    [0.12,0.72,0.06,0.05,0.03,0.02],
    [0.04,0.08,0.78,0.06,0.02,0.02],
    [0.03,0.05,0.08,0.70,0.10,0.04],
    [0.02,0.03,0.04,0.14,0.72,0.05],
    [0.05,0.04,0.06,0.10,0.08,0.67],
  ];
  const cellSize = 36, offX = 60, offY = 50;
  const w = 300, h = 280;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
      <text x={offX + (cellSize * n) / 2} y={16} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)">Token Chave (Key)</text>
      {tokens.map((t, i) => (
        <text key={t + 'c'} x={offX + i * cellSize + cellSize / 2} y={36} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{t}</text>
      ))}
      {attn.map((row, r) => (
        <g key={r}>
          <text x={offX - 6} y={offY + r * cellSize + cellSize / 2 + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{tokens[r]}</text>
          {row.map((val, c) => {
            const alpha = 0.08 + val * 0.85;
            return (
              <g key={c}>
                <rect x={offX + c * cellSize} y={offY + r * cellSize} width={cellSize - 1} height={cellSize - 1} fill={color} fillOpacity={alpha} rx={3} />
                <text x={offX + c * cellSize + cellSize / 2} y={offY + r * cellSize + cellSize / 2 + 4} textAnchor="middle" fontSize="9" fill={val > 0.4 ? '#fff' : 'var(--text-secondary)'}>{val.toFixed(2)}</text>
              </g>
            );
          })}
        </g>
      ))}
      <text x={14} y={offY + (cellSize * n) / 2} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)" transform={`rotate(-90,14,${offY + (cellSize * n) / 2})`}>Token Query</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════ */

export default function DV7() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/dv" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 07</div>
        <h1 style={S.h1}>Visualização de ML</h1>
        <p style={S.lead}>
          Visualizar um modelo de Machine Learning vai muito além de reportar a accuracy final.
          As visualizações de diagnóstico revelam onde o modelo erra, que features são mais relevantes,
          como as representações internas se organizam no espaço, e se o modelo está genuinamente a aprender
          ou apenas a memorizar os dados de treino. Este módulo percorre os principais tipos de gráficos
          usados em todo o ciclo de vida de um projecto de ML — da avaliação à explicabilidade.
        </p>

        {/* ── Secção 1: Matriz de Confusão ── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. Matriz de Confusão</h2>
          <p style={S.p}>
            A matriz de confusão é a ferramenta fundamental para avaliar classificadores. Cada linha representa
            a classe real e cada coluna a classe predita pelo modelo. A diagonal principal contém as predições
            correctas; os valores fora da diagonal são erros. Visualizar como heatmap com anotações torna
            imediatamente evidente onde o modelo falha e quais as classes mais confundidas entre si.
          </p>

          <h3 style={S.h3}>Células da matriz binária</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Célula</th>
                  <th style={S.th}>Significado</th>
                  <th style={S.th}>Impacto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['TP — Verdadeiro Positivo', 'Modelo previu Positivo e a classe real é Positiva', 'Acerto pretendido'],
                  ['TN — Verdadeiro Negativo', 'Modelo previu Negativo e a classe real é Negativa', 'Acerto pretendido'],
                  ['FP — Falso Positivo (Erro Tipo I)', 'Modelo previu Positivo mas a classe real é Negativa', 'Alarme falso'],
                  ['FN — Falso Negativo (Erro Tipo II)', 'Modelo previu Negativo mas a classe real é Positiva', 'Perigo em diagnósticos'],
                ].map(([c, m, i]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{c}</td>
                    <td style={S.td}>{m}</td>
                    <td style={S.td}>{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Heatmap 2×2 — TP=85, TN=92, FP=13, FN=10
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ConfusionMatrix2x2 />
            </div>
          </div>

          <h3 style={S.h3}>Métricas derivadas</h3>
          <div style={S.highlight}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
              <div><strong style={{ color }}>Accuracy</strong> = (TP+TN)/(TP+TN+FP+FN) = (85+92)/200 = <strong>0.885</strong></div>
              <div><strong style={{ color }}>Precision</strong> = TP/(TP+FP) = 85/98 = <strong>0.867</strong></div>
              <div><strong style={{ color }}>Recall (TPR)</strong> = TP/(TP+FN) = 85/95 = <strong>0.895</strong></div>
              <div><strong style={{ color }}>F1-Score</strong> = 2×P×R/(P+R) = <strong>0.881</strong></div>
            </div>
          </div>

          <h3 style={S.h3}>Matriz multi-classe (4 classes)</h3>
          <p style={S.p}>
            Para problemas com múltiplas classes, a matriz expande-se para N×N. Cada célula fora da diagonal
            indica em que classe o modelo confunde. Normalizar por linha dá a taxa de recall por classe,
            útil quando as classes têm frequências muito diferentes.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Matriz 4×4 — Gato / Cão / Ave / Peixe
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ConfusionMatrix4x4 />
            </div>
          </div>
          <div style={S.note}>
            A diagonal bem preenchida indica bom desempenho geral. Erros concentrados entre "Gato" e "Cão"
            sugerem que o modelo beneficiaria de mais exemplos que distinguem essas duas classes.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 2: ROC e AUC ── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Curva ROC e AUC</h2>
          <p style={S.p}>
            A curva ROC (Receiver Operating Characteristic) plota a <strong>Taxa de Verdadeiros Positivos
            (TPR / Recall)</strong> contra a <strong>Taxa de Falsos Positivos (FPR)</strong> para todos os
            thresholds de probabilidade possíveis. Permite comparar modelos independentemente do threshold
            escolhido e entender o trade-off entre sensibilidade e especificidade.
          </p>
          <p style={S.p}>
            O <strong>AUC</strong> (Área Sob a Curva) resume a curva num único número: AUC = 0.5 é
            equivalente a um classificador aleatório; AUC = 1.0 é um classificador perfeito. Em termos
            probabilísticos, o AUC é a probabilidade de o modelo ordenar correctamente um par
            (positivo, negativo) aleatório.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Curvas ROC — 3 modelos sobrepostos
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ROCCurve />
            </div>
          </div>

          <h3 style={S.h3}>Curva Precision-Recall</h3>
          <p style={S.p}>
            Quando os dados são muito desbalanceados (ex: detecção de fraude com 1% de positivos),
            a curva ROC pode ser enganosamente optimista porque o FPR fica artificialmente baixo.
            A curva Precision-Recall é mais informativa nesses cenários: mostra directamente o
            trade-off entre não gerar alarmes falsos (Precision) e não perder casos reais (Recall).
            O <strong>Average Precision (AP)</strong> é o AUC equivalente para esta curva.
          </p>
          <div style={S.note}>
            Regra prática: dados balanceados → ROC. Dados desbalanceados (fraud, doenças raras) → Precision-Recall curve.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 3: Curvas de Aprendizagem ── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Curvas de Aprendizagem</h2>
          <p style={S.p}>
            As curvas de aprendizagem mostram como a loss (ou outra métrica) evolui ao longo das epochs
            de treino, tanto para o conjunto de treino como para o de validação. São o principal instrumento
            de diagnóstico para detectar <strong>overfitting</strong> e <strong>underfitting</strong>
            em modelos de deep learning.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Train loss vs. Validation loss — 20 epochs (overfitting a partir da epoch 12)
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LearningCurves />
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Padrão observado</th>
                  <th style={S.th}>Diagnóstico</th>
                  <th style={S.th}>Acção recomendada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Val loss sobe, train loss desce', 'Overfitting', 'Regularização (L2, dropout), early stopping, mais dados'],
                  ['Ambas as losses altas e estagnadas', 'Underfitting', 'Modelo mais complexo, mais features, mais epochs'],
                  ['Val loss oscila muito', 'Learning rate demasiado alto', 'Reduzir LR ou usar scheduler (cosine, step decay)'],
                  ['Val loss estagna sem overfitting', 'Convergência atingida', 'Ajustar LR scheduler, warm restarts'],
                ].map(([p, d, a]) => (
                  <tr key={p}>
                    <td style={S.td}>{p}</td>
                    <td style={{ ...S.td, fontWeight: 600, color }}>{d}</td>
                    <td style={{ ...S.td, fontSize: '0.88rem' }}>{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Learning Rate Scheduler</h3>
          <p style={S.p}>
            O learning rate é o hiperparâmetro com maior impacto nas curvas de aprendizagem. Um LR fixo
            raramente é óptimo: começa demasiado lento ou explode no início. Os schedulers mais comuns
            são o <em>step decay</em> (reduz o LR por um factor fixo a cada N epochs),
            o <em>cosine annealing</em> (diminuição suave até zero) e o <em>one-cycle policy</em>
            (sobe e depois desce, permite LRs mais altos). Em transformers, o <em>warmup linear</em>
            é praticamente universal.
          </p>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 4: Feature Importance ── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Feature Importance e SHAP</h2>
          <p style={S.p}>
            Compreender quais as variáveis que o modelo utiliza — e como — é essencial para garantir
            que o modelo aprende padrões genuínos e não artefactos dos dados (data leakage).
            Existem duas abordagens principais: importâncias baseadas no modelo (internas ao algoritmo)
            e valores SHAP (explicações aditivas agnósticas ao modelo).
          </p>

          <h3 style={S.h3}>Bar Chart de Importâncias (Tree-based)</h3>
          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Feature Importance — ordenada decrescente
            </p>
            <FeatureImportance />
          </div>

          <h3 style={S.h3}>SHAP Beeswarm Plot</h3>
          <p style={S.p}>
            O SHAP (SHapley Additive exPlanations) assenta na teoria dos jogos: cada feature recebe
            o crédito proporcional à sua contribuição marginal para cada predição individual.
            O <em>beeswarm plot</em> mostra, para cada feature, a distribuição dos valores SHAP
            em todas as observações do conjunto de teste. A cor indica o valor da feature
            (vermelho = alto, azul = baixo), o eixo horizontal indica o impacto na predição.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              SHAP Beeswarm — distribuição de impactos por feature
            </p>
            <SHAPBeeswarm />
          </div>
          <div style={S.note}>
            Diferença chave: a importância interna de uma árvore de decisão é global e não indica
            a direcção do efeito. O SHAP dá o valor e a direcção para cada instância individual,
            tornando possível explicar predições específicas ao utilizador final.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 5: Curva de Validação e Grid Search ── */}
        <div style={S.section}>
          <h2 style={S.h2}>5. Curva de Validação e Grid Search</h2>
          <p style={S.p}>
            A curva de validação mostra como o desempenho do modelo varia com um hiperparâmetro específico,
            permitindo identificar o valor óptimo e detectar regiões de overfitting ou underfitting
            causadas directamente pelo hiperparâmetro.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Curva de Validação — Accuracy vs. Profundidade da Árvore
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ValidationCurve />
            </div>
          </div>

          <p style={S.p}>
            Quando há dois ou mais hiperparâmetros a optimizar simultaneamente, o <strong>Grid Search</strong>
            explora todas as combinações e o resultado pode ser visualizado como um heatmap bidimensional.
            As células mais escuras (maior score) indicam as melhores combinações.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Heatmap Grid Search — learning_rate × n_estimators
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GridSearchHeatmap />
            </div>
          </div>
          <div style={S.note}>
            Para espaços de hiperparâmetros grandes, o <em>Random Search</em> e o <em>Bayesian Optimization</em>
            (ex: Optuna, Hyperopt) são mais eficientes do que o Grid Search exaustivo. A visualização do
            heatmap continua a ser útil para os 2 hiperparâmetros mais importantes identificados por análise
            de sensibilidade.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 6: Clustering ── */}
        <div style={S.section}>
          <h2 style={S.h2}>6. Visualização de Clustering</h2>
          <p style={S.p}>
            Algoritmos de clustering como K-Means, DBSCAN ou Agglomerative Clustering produzem grupos
            sem supervisão. Para visualizar os resultados em dados de alta dimensão, reduz-se primeiro
            para 2D com PCA, t-SNE ou UMAP, e depois representa-se cada ponto colorido pelo cluster
            atribuído.
          </p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Scatter 2D pós-PCA — 4 clusters com centróides marcados (×)
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ClusterScatter />
            </div>
          </div>

          <h3 style={S.h3}>Dendrograma (Hierarchical Clustering)</h3>
          <p style={S.p}>
            O clustering hierárquico não produz um número fixo de clusters: constrói uma árvore de fusões
            (dendrograma) que pode ser cortada a qualquer altura. A altura de cada fusão reflecte a
            distância (ou dissimilaridade) entre os grupos que se unem. Cortar a uma altura maior
            resulta em menos clusters; cortar mais baixo dá mais clusters.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Dendrograma — 8 folhas, fusão hierárquica
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Dendrogram />
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Secção 7: Redes Neuronais ── */}
        <div style={S.section}>
          <h2 style={S.h2}>7. Visualização de Redes Neuronais</h2>
          <p style={S.p}>
            Visualizar a arquitectura de uma rede neuronal ajuda a comunicar o design do modelo,
            verificar o número de parâmetros por camada e detectar gargalos. Para redes de atenção
            (Transformers), os mapas de atenção revelam em que partes do input o modelo se foca
            para produzir cada output.
          </p>

          <h3 style={S.h3}>Arquitectura Feedforward (3→4→4→2)</h3>
          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Rede neuronal com camadas Input, Hidden 1, Hidden 2 e Output
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NeuralNetwork />
            </div>
          </div>
          <p style={S.p}>
            Cada círculo representa um neurónio; as linhas representam os pesos (conexões). Numa rede
            densa (fully connected), cada neurónio de uma camada está ligado a todos os neurónios da
            camada seguinte. A opacidade das conexões pode ser proporcional ao valor absoluto do peso,
            tornando visíveis quais as conexões mais activas após o treino.
          </p>

          <h3 style={S.h3}>Attention Map (Transformer)</h3>
          <p style={S.p}>
            Nos Transformers, o mecanismo de atenção calcula para cada token (Query) o peso que atribui
            a cada outro token (Key) no contexto. O resultado é uma matriz N×N de scores de atenção
            por cabeça de atenção. Visualizar como heatmap permite perceber que relações o modelo
            aprendeu a privilegiar — por exemplo, pronomes a atender ao seu antecedente.
          </p>
          <div style={S.diagram}>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Attention Heatmap 6×6 — "eu vi o gato preto ontem"
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AttentionHeatmap />
            </div>
          </div>
          <div style={S.note}>
            A diagonal dominante indica atenção ao próprio token (self-attention forte). Células fora da
            diagonal com valores elevados revelam dependências entre palavras aprendidas pelo modelo.
          </div>
        </div>

        <hr style={S.divider} />

        {/* ── Síntese ── */}
        <div style={S.section}>
          <h2 style={S.h2}>8. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <strong>Pontos essenciais a reter:</strong>
            <ul style={{ margin: '0.6rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 2.0 }}>
              <li><strong>Matriz de Confusão:</strong> heatmap com anotações. Diagonal = correcto; off-diagonal = erros. Normalizar por linha para obter recall por classe.</li>
              <li><strong>ROC/AUC:</strong> TPR vs. FPR. AUC 0.5 = aleatório, 1.0 = perfeito. Usar Precision-Recall curve em dados desbalanceados.</li>
              <li><strong>Curvas de Aprendizagem:</strong> diagnosticar overfitting (val loss sobe) ou underfitting (ambas altas). Orientam decisões de arquitectura e regularização.</li>
              <li><strong>Feature Importance / SHAP:</strong> importâncias internas são globais e sem direcção; SHAP dá o impacto individual e a direcção por instância.</li>
              <li><strong>Curva de Validação / Grid Search:</strong> identificar o valor óptimo de hiperparâmetros e visualizar interacções entre dois deles num heatmap 2D.</li>
              <li><strong>Clustering:</strong> scatter 2D pós-redução de dimensão (PCA/t-SNE) colorido por cluster. Dendrograma para clustering hierárquico.</li>
              <li><strong>Redes Neuronais:</strong> diagrama de arquitectura para comunicação; attention maps para interpretabilidade em Transformers.</li>
            </ul>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Problema de diagnóstico</th>
                  <th style={S.th}>Visualização indicada</th>
                  <th style={S.th}>Acção</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Overfitting', 'Curva de aprendizagem (loss vs. epoch)', 'Regularização, dropout, early stopping, mais dados'],
                  ['Underfitting', 'Curva de aprendizagem (ambas as losses altas)', 'Modelo mais complexo, mais features, mais epochs'],
                  ['Confusão entre classes', 'Matriz de confusão (heatmap)', 'Mais dados para as classes confundidas'],
                  ['Threshold mal calibrado', 'Curva ROC ou Precision-Recall', 'Ajustar threshold de classificação'],
                  ['Feature suspeita', 'SHAP beeswarm + waterfall', 'Verificar data leakage, reengenharia de features'],
                  ['Clusters mal separados', 'Scatter 2D pós-PCA/UMAP', 'Melhores features, modelo mais expressivo'],
                  ['Hiperparâmetro óptimo desconhecido', 'Curva de validação', 'Grid/Random Search ou Bayesian Optimization'],
                ].map(([p, v, a]) => (
                  <tr key={p}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td>
                    <td style={{ ...S.td, color }}>{v}</td>
                    <td style={{ ...S.td, fontSize: '0.88rem' }}>{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
