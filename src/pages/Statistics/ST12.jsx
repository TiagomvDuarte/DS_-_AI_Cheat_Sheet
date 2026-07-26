import React, { useState } from 'react';
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
    background: 'rgba(74,158,237,0.06)',
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
  },
};

/* ── Diagrama: fluxo ARIMA ── */
function FlowchartARIMA() {
  const nodes = [
    { id: 'orig', x: 60, y: 20, label: 'Série original' },
    { id: 'adf', x: 60, y: 90, label: 'Testar raiz unitária (ADF)' },
    { id: 'i1', x: 60, y: 160, label: 'I(1)? → Diferenciar' },
    { id: 'dy', x: 60, y: 230, label: 'Série Δyₜ estacionária' },
    { id: 'arma', x: 60, y: 300, label: 'Ajustar ARMA(p,q) a Δyₜ' },
    { id: 'res', x: 60, y: 370, label: 'ARIMA(p,1,q)' },
  ];
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 340 420" style={{ width: '100%', maxHeight: 420 }}>
        {nodes.map((n, i) => (
          <g key={n.id}>
            <rect
              x={10}
              y={n.y}
              width={320}
              height={38}
              rx={8}
              fill={i === nodes.length - 1 ? color : 'var(--bg-secondary)'}
              stroke={color}
              strokeWidth={1.5}
            />
            <text
              x={170}
              y={n.y + 23}
              textAnchor="middle"
              fontSize={13}
              fill={i === nodes.length - 1 ? '#fff' : 'var(--text-primary)'}
              fontWeight={i === nodes.length - 1 ? 700 : 400}
            >
              {n.label}
            </text>
            {i < nodes.length - 1 && (
              <line
                x1={170}
                y1={n.y + 38}
                x2={170}
                y2={n.y + 60}
                stroke={color}
                strokeWidth={1.5}
                markerEnd="url(#arr)"
              />
            )}
          </g>
        ))}
        <defs>
          <marker
            id="arr"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L0,8 L8,4 Z" fill={color} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

/* ── Diagrama: Diferenciação – 3 painéis ── */
const origData = [
  12, 14, 13, 16, 18, 17, 20, 22, 21, 24, 26, 25, 28, 30, 29, 32, 34, 33, 36,
  38, 37, 40, 42, 41, 44,
];
const diff1 = origData.slice(1).map((v, i) => v - origData[i]);
const diff2 = diff1.slice(1).map((v, i) => v - diff1[i]);

function miniPath(data, xScale, yScale, yMid) {
  return data
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xScale(i)},${yMid - v * yScale}`)
    .join(' ');
}

function DiffPanels() {
  const W = 700,
    panH = 80,
    gap = 30,
    pad = 40;
  const xS = (i) => pad + i * ((W - pad * 2) / (origData.length - 1));
  const xS1 = (i) => pad + i * ((W - pad * 2) / (diff1.length - 1));
  const xS2 = (i) => pad + i * ((W - pad * 2) / (diff2.length - 1));

  const totalH = panH * 3 + gap * 2 + 60;
  const y0 = 30,
    y1 = y0 + panH + gap,
    y2 = y1 + panH + gap;

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${totalH}`} style={{ width: '100%' }}>
        {/* Panel 0: original */}
        <text x={pad} y={y0 - 8} fontSize={11} fill={color} fontWeight={700}>
          Série original (tendência)
        </text>
        <line
          x1={pad}
          y1={y0 + panH}
          x2={W - pad}
          y2={y0 + panH}
          stroke="var(--text-secondary)"
          strokeWidth={1}
        />
        <path
          d={miniPath(origData, xS, 1.5, y0 + panH - 10)}
          fill="none"
          stroke={color}
          strokeWidth={1.8}
        />

        {/* Panel 1: 1st diff */}
        <text x={pad} y={y1 - 8} fontSize={11} fill={color} fontWeight={700}>
          1ª diferença Δyₜ (aprox. estacionária)
        </text>
        <line
          x1={pad}
          y1={y1 + panH / 2}
          x2={W - pad}
          y2={y1 + panH / 2}
          stroke="var(--text-secondary)"
          strokeWidth={1}
          strokeDasharray="4,3"
        />
        <path
          d={miniPath(diff1, xS1, 8, y1 + panH / 2)}
          fill="none"
          stroke="#4a9eed"
          strokeWidth={1.8}
        />

        {/* Panel 2: 2nd diff */}
        <text x={pad} y={y2 - 8} fontSize={11} fill={color} fontWeight={700}>
          2ª diferença Δ²yₜ (estacionária, mais ruidosa)
        </text>
        <line
          x1={pad}
          y1={y2 + panH / 2}
          x2={W - pad}
          y2={y2 + panH / 2}
          stroke="var(--text-secondary)"
          strokeWidth={1}
          strokeDasharray="4,3"
        />
        <path
          d={miniPath(diff2, xS2, 12, y2 + panH / 2)}
          fill="none"
          stroke="#4a9eed"
          strokeWidth={1.8}
        />
      </svg>
    </div>
  );
}

/* ── Box-Jenkins: diagrama circular ── */
function BoxJenkinsDiagram() {
  const W = 500,
    H = 320;
  const cx = W / 2,
    cy = H / 2,
    R = 110;
  const steps = [
    { label: 'Identificação', sub: 'ACF/PACF', angle: -Math.PI / 2 },
    { label: 'Estimação', sub: 'MLE', angle: 0 },
    { label: 'Diagnóstico', sub: 'Resíduos', angle: Math.PI / 2 },
    { label: 'Previsão', sub: 'h-passos', angle: Math.PI },
  ];
  const nx = (a) => cx + R * Math.cos(a);
  const ny = (a) => cy + R * Math.sin(a);

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxHeight: H }}>
        <defs>
          <marker
            id="arr2"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L0,8 L8,4 Z" fill={color} />
          </marker>
          <marker
            id="arrRed"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L0,8 L8,4 Z" fill="#4a9eed" />
          </marker>
        </defs>
        {/* arcs between nodes */}
        {steps.map((s, i) => {
          const next = steps[(i + 1) % steps.length];
          const x1 = nx(s.angle),
            y1 = ny(s.angle);
          const x2 = nx(next.angle),
            y2 = ny(next.angle);
          const mx = cx + (R + 28) * Math.cos((s.angle + next.angle) / 2);
          const my = cy + (R + 28) * Math.sin((s.angle + next.angle) / 2);
          return (
            <path
              key={i}
              d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
              fill="none"
              stroke={color}
              strokeWidth={1.6}
              markerEnd="url(#arr2)"
            />
          );
        })}
        {/* feedback arrow: Diagnóstico → Identificação */}
        <path
          d={`M${nx(Math.PI / 2)},${ny(Math.PI / 2)} C${cx - 20},${cy + 150} ${cx - 160},${cy + 80} ${nx(-Math.PI / 2) - 2},${ny(-Math.PI / 2) + 2}`}
          fill="none"
          stroke="#4a9eed"
          strokeWidth={1.4}
          strokeDasharray="5,3"
          markerEnd="url(#arrRed)"
        />
        <text
          x={cx - 105}
          y={cy + 165}
          fontSize={10}
          fill="#4a9eed"
          textAnchor="middle"
        >
          Reformular
        </text>
        {/* nodes */}
        {steps.map((s, i) => (
          <g key={i}>
            <circle
              cx={nx(s.angle)}
              cy={ny(s.angle)}
              r={36}
              fill={color}
              opacity={0.92}
            />
            <text
              x={nx(s.angle)}
              y={ny(s.angle) - 4}
              textAnchor="middle"
              fontSize={11}
              fill="#fff"
              fontWeight={700}
            >
              {s.label}
            </text>
            <text
              x={nx(s.angle)}
              y={ny(s.angle) + 12}
              textAnchor="middle"
              fontSize={10}
              fill="rgba(255,255,255,0.8)"
            >
              {s.sub}
            </text>
            <text
              x={nx(s.angle)}
              y={ny(s.angle) + 24}
              textAnchor="middle"
              fontSize={11}
              fill="#fff"
              fontWeight={400}
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Previsão: fan chart ── */
function ForecastFan() {
  const W = 680,
    H = 220,
    padL = 40,
    padR = 20,
    padT = 20,
    padB = 30;
  const histLen = 18;
  const hist = Array.from(
    { length: histLen },
    (_, i) => 50 + i * 1.4 + Math.sin(i * 0.8) * 6,
  );
  const forecasts = [67, 69, 71, 72.5, 74, 75.5];
  const ci95 = [3, 5.5, 8, 10, 12, 14];
  const ci80 = [1.8, 3.2, 4.8, 6, 7.2, 8.4];

  const allN = histLen + forecasts.length;
  const xScale = (i) => padL + (i / (allN - 1)) * (W - padL - padR);
  const allVals = [
    ...hist,
    ...forecasts.map((v, i) => v + ci95[i]),
    ...forecasts.map((v, i) => v - ci95[i]),
  ];
  const minV = Math.min(...allVals) - 2;
  const maxV = Math.max(...allVals) + 2;
  const yScale = (v) =>
    padT + (1 - (v - minV) / (maxV - minV)) * (H - padT - padB);

  const histPath = hist
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xScale(i)},${yScale(v)}`)
    .join(' ');
  const fcastPath = forecasts
    .map(
      (v, i) =>
        `${i === 0 ? `M${xScale(histLen - 1)},${yScale(hist[histLen - 1])} L` : 'L'}${xScale(histLen + i)},${yScale(v)}`,
    )
    .join(' ');

  const upper95 = forecasts
    .map(
      (v, i) =>
        `${i === 0 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v + ci95[i])}`,
    )
    .join(' ');
  const lower95 = forecasts
    .map(
      (v, i) =>
        `${i === forecasts.length - 1 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v - ci95[i])}`,
    )
    .join(' ');
  const fanArea95 = `${upper95} ${lower95.replace('M', 'L')} Z`;

  const upper80 = forecasts
    .map(
      (v, i) =>
        `${i === 0 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v + ci80[i])}`,
    )
    .join(' ');
  const lower80 = forecasts
    .map(
      (v, i) =>
        `${i === forecasts.length - 1 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v - ci80[i])}`,
    )
    .join(' ');
  const fanArea80 = `${upper80} ${lower80.replace('M', 'L')} Z`;

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%' }}>
        {/* axes */}
        <line
          x1={padL}
          y1={padT}
          x2={padL}
          y2={H - padB}
          stroke="var(--text-secondary)"
          strokeWidth={1}
        />
        <line
          x1={padL}
          y1={H - padB}
          x2={W - padR}
          y2={H - padB}
          stroke="var(--text-secondary)"
          strokeWidth={1}
        />
        {/* fan areas */}
        <path d={fanArea95} fill={color} opacity={0.12} />
        <path d={fanArea80} fill={color} opacity={0.2} />
        {/* history */}
        <path d={histPath} fill="none" stroke={color} strokeWidth={2} />
        {/* forecast */}
        <path
          d={fcastPath}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeDasharray="6,4"
        />
        {/* vertical divider */}
        <line
          x1={xScale(histLen - 1)}
          y1={padT}
          x2={xScale(histLen - 1)}
          y2={H - padB}
          stroke="var(--text-secondary)"
          strokeWidth={1}
          strokeDasharray="4,3"
        />
        {/* h labels */}
        {forecasts.map((_, i) => (
          <text
            key={i}
            x={xScale(histLen + i)}
            y={H - padB + 14}
            textAnchor="middle"
            fontSize={10}
            fill="var(--text-secondary)"
          >
            h={i + 1}
          </text>
        ))}
        <text
          x={xScale(histLen / 2)}
          y={padT - 4}
          textAnchor="middle"
          fontSize={11}
          fill="var(--text-secondary)"
        >
          Histórico
        </text>
        <text
          x={xScale(histLen + 2.5)}
          y={padT - 4}
          textAnchor="middle"
          fontSize={11}
          fill={color}
          fontWeight={700}
        >
          Previsão
        </text>
        {/* legend */}
        <rect
          x={W - 160}
          y={padT}
          width={12}
          height={10}
          fill={color}
          opacity={0.35}
        />
        <text
          x={W - 144}
          y={padT + 9}
          fontSize={10}
          fill="var(--text-secondary)"
        >
          IC 95%
        </text>
        <rect
          x={W - 160}
          y={padT + 16}
          width={12}
          height={10}
          fill={color}
          opacity={0.5}
        />
        <text
          x={W - 144}
          y={padT + 25}
          fontSize={10}
          fill="var(--text-secondary)"
        >
          IC 80%
        </text>
      </svg>
    </div>
  );
}

/* ── Sazonalidade: 2 painéis ── */
const seasonalRaw = Array.from(
  { length: 48 },
  (_, i) => 50 + 20 * Math.sin((2 * Math.PI * i) / 12) + i * 0.5,
);
const seasonalDiff = seasonalRaw.slice(12).map((v, i) => v - seasonalRaw[i]);

function SeasonalPanels() {
  const W = 680,
    panH = 90,
    padL = 36,
    padR = 16,
    gap = 40;
  const totalH = panH * 2 + gap + 60;

  const minR = Math.min(...seasonalRaw),
    maxR = Math.max(...seasonalRaw);
  const minD = Math.min(...seasonalDiff),
    maxD = Math.max(...seasonalDiff);

  const xR = (i) => padL + (i / (seasonalRaw.length - 1)) * (W - padL - padR);
  const yR = (v) => 30 + panH - ((v - minR) / (maxR - minR)) * (panH - 4);

  const xD = (i) => padL + (i / (seasonalDiff.length - 1)) * (W - padL - padR);
  const yD = (v) =>
    30 +
    panH +
    gap +
    panH / 2 -
    ((v - (minD + maxD) / 2) / ((maxD - minD) / 2)) * (panH / 2 - 4);

  const pathR = seasonalRaw
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xR(i)},${yR(v)}`)
    .join(' ');
  const pathD = seasonalDiff
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xD(i)},${yD(v)}`)
    .join(' ');

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${totalH}`} style={{ width: '100%' }}>
        <text x={padL} y={20} fontSize={11} fill={color} fontWeight={700}>
          Série original com sazonalidade
        </text>
        <path d={pathR} fill="none" stroke={color} strokeWidth={1.8} />

        <text
          x={padL}
          y={30 + panH + gap - 6}
          fontSize={11}
          fill="#4a9eed"
          fontWeight={700}
        >
          Diferença sazonal (1-L¹²)yₜ = yₜ - yₜ₋₁₂
        </text>
        <line
          x1={padL}
          y1={30 + panH + gap + panH / 2}
          x2={W - padR}
          y2={30 + panH + gap + panH / 2}
          stroke="var(--text-secondary)"
          strokeWidth={1}
          strokeDasharray="4,3"
        />
        <path d={pathD} fill="none" stroke="#4a9eed" strokeWidth={1.8} />
      </svg>
    </div>
  );
}

/* ── ACF/PACF Sazonal interactivo ── */
function SeasonalACFPlot({ type }) {
  const lags = Array.from({ length: 30 }, (_, i) => i + 1);
  const getHeight = (lag) => {
    if (type === 'AR') {
      if (lag % 12 === 0)
        return Math.max(0.1, 0.85 - Math.floor(lag / 12) * 0.28);
      return Math.random() * 0.12 - 0.06;
    } else {
      if (lag === 12) return 0.82;
      if (lag % 12 === 0 && lag > 12) return 0.06;
      return Math.random() * 0.1 - 0.05;
    }
  };
  // deterministic values
  const arValues = lags.map((lag) => {
    if (lag % 12 === 0) return 0.85 - Math.floor(lag / 12) * 0.28;
    const seed = (lag * 137) % 100;
    return ((seed < 50 ? 1 : -1) * (seed % 15)) / 100;
  });
  const maValues = lags.map((lag) => {
    if (lag === 12) return 0.82;
    if (lag % 12 === 0) return 0.07;
    const seed = (lag * 97) % 100;
    return ((seed < 50 ? 1 : -1) * (seed % 10)) / 100;
  });
  const values = type === 'AR' ? arValues : maValues;

  const W = 600,
    H = 160,
    padL = 36,
    padR = 10,
    padT = 10,
    padB = 30;
  const xScale = (i) => padL + (i / (lags.length - 1)) * (W - padL - padR);
  const yMid = padT + (H - padT - padB) / 2;
  const yScale = (v) => yMid - v * ((H - padT - padB) / 2 - 4);
  const ci = 0.2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%' }}>
      {/* CI bands */}
      <rect
        x={padL}
        y={yScale(ci)}
        width={W - padL - padR}
        height={yScale(-ci) - yScale(ci)}
        fill={color}
        opacity={0.08}
      />
      <line
        x1={padL}
        y1={yScale(ci)}
        x2={W - padR}
        y2={yScale(ci)}
        stroke={color}
        strokeWidth={1}
        strokeDasharray="4,2"
        opacity={0.4}
      />
      <line
        x1={padL}
        y1={yScale(-ci)}
        x2={W - padR}
        y2={yScale(-ci)}
        stroke={color}
        strokeWidth={1}
        strokeDasharray="4,2"
        opacity={0.4}
      />
      {/* zero line */}
      <line
        x1={padL}
        y1={yMid}
        x2={W - padR}
        y2={yMid}
        stroke="var(--text-secondary)"
        strokeWidth={1}
      />
      {/* bars */}
      {values.map((v, i) => (
        <rect
          key={i}
          x={xScale(i) - 5}
          y={v >= 0 ? yScale(v) : yMid}
          width={10}
          height={Math.abs(yScale(v) - yMid)}
          fill={lags[i] % 12 === 0 ? color : 'var(--text-secondary)'}
          opacity={lags[i] % 12 === 0 ? 0.9 : 0.4}
        />
      ))}
      {/* lag labels */}
      {[12, 24].map((l) => (
        <text
          key={l}
          x={xScale(l - 1)}
          y={H - padB + 16}
          textAnchor="middle"
          fontSize={10}
          fill={color}
          fontWeight={700}
        >
          {l}
        </text>
      ))}
      {[6, 18].map((l) => (
        <text
          key={l}
          x={xScale(l - 1)}
          y={H - padB + 16}
          textAnchor="middle"
          fontSize={9}
          fill="var(--text-secondary)"
        >
          {l}
        </text>
      ))}
      <text
        x={padL - 4}
        y={yMid + 4}
        textAnchor="end"
        fontSize={9}
        fill="var(--text-secondary)"
      >
        0
      </text>
      <text
        x={padL - 4}
        y={yScale(0.8) + 4}
        textAnchor="end"
        fontSize={9}
        fill="var(--text-secondary)"
      >
        0.8
      </text>
      <text
        x={W / 2}
        y={H - 2}
        textAnchor="middle"
        fontSize={10}
        fill="var(--text-secondary)"
      >
        Desfasamento (lag)
      </text>
    </svg>
  );
}

function ACFTabs() {
  const [tab, setTab] = useState('AR');
  const tabStyle = (t) => ({
    padding: '0.45rem 1.2rem',
    borderRadius: 20,
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.88rem',
    background: tab === t ? color : 'var(--bg-secondary)',
    color: tab === t ? '#fff' : 'var(--text-secondary)',
    transition: 'all 0.2s',
  });
  return (
    <div style={S.diagram}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button style={tabStyle('AR')} onClick={() => setTab('AR')}>
          Sazonal AR
        </button>
        <button style={tabStyle('MA')} onClick={() => setTab('MA')}>
          Sazonal MA
        </button>
      </div>
      <div
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginBottom: '0.75rem',
        }}
      >
        {tab === 'AR'
          ? 'ACF do processo SAR(1)₁₂: spikes decrescentes nos múltiplos de 12 (lags 12, 24, …)'
          : 'ACF do processo SMA(1)₁₂: spike significativo apenas no lag 12, corte abrupto'}
      </div>
      <SeasonalACFPlot type={tab} />
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* ── helpers ─────────────────────────────────────────────────────────── */
function toPath(pts, yMin, yMax, w, h) {
  const sx = (i) => 10 + (i / (pts.length - 1)) * (w - 20);
  const sy = (v) => h - 6 - ((v - yMin) / (yMax - yMin + 0.001)) * (h - 12);
  return pts
    .map(
      (v, i) => `${i === 0 ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)}`,
    )
    .join(' ');
}

/* raw series: trend + seasonal + noise (fixed) */
const RAW24 = [
  12, 15, 11, 18, 14, 19, 13, 22, 17, 24, 19, 28, 21, 26, 20, 30, 25, 32, 27,
  35, 29, 37, 31, 40,
];
const TREND24 = RAW24.map((_, i) => 10 + i * 1.25);
const SEASONAL24 = RAW24.map((_, i) => 4 * Math.sin((2 * Math.PI * i) / 4));
const RESID24 = RAW24.map((v, i) => v - TREND24[i] - SEASONAL24[i]);

/* MA helper */
function computeMA(series, k) {
  const half = Math.floor(k / 2);
  return series.map((_, i) => {
    if (i < half || i > series.length - 1 - half) return null;
    let s = 0;
    for (let j = -half; j <= half; j++) s += series[i + j];
    return s / (2 * half + 1);
  });
}

/* SES helper */
function computeSES(series, alpha) {
  const out = [series[0]];
  for (let i = 1; i < series.length; i++) {
    out.push(alpha * series[i] + (1 - alpha) * out[i - 1]);
  }
  return out;
}

/* Holt helper */
function computeHolt(series, alpha, beta) {
  let l = series[0];
  let b = series[1] - series[0];
  const fitted = [l + b];
  for (let i = 1; i < series.length; i++) {
    const lPrev = l;
    l = alpha * series[i] + (1 - alpha) * (l + b);
    b = beta * (l - lPrev) + (1 - beta) * b;
    fitted.push(l + b);
  }
  const forecast = [];
  for (let h = 1; h <= 6; h++) forecast.push(l + h * b);
  return { fitted, l, b, forecast };
}

/* ── SVG panel component ─────────────────────────────────────────────── */
function PanelChart({
  series,
  label,
  strokeColor,
  yMin,
  yMax,
  w = 560,
  h = 60,
}) {
  const path = toPath(series, yMin, yMax, w, h);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.25rem',
      }}
    >
      <span
        style={{
          fontSize: '0.72rem',
          color: 'var(--text-secondary)',
          width: 80,
          textAlign: 'right',
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        style={{ maxWidth: w, height: h, display: 'block' }}
      >
        <path
          d={path}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Decomposition chart ─────────────────────────────────────────────── */
function DecompositionChart() {
  const w = 560;
  return (
    <div style={S.diagram}>
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginBottom: '0.75rem',
        }}
      >
        Decomposição classica — serie original e componentes
      </div>
      <PanelChart
        series={RAW24}
        label="Original"
        strokeColor="var(--text-secondary)"
        yMin={8}
        yMax={44}
        w={w}
        h={60}
      />
      <PanelChart
        series={TREND24}
        label="Tendência"
        strokeColor={color}
        yMin={8}
        yMax={44}
        w={w}
        h={60}
      />
      <PanelChart
        series={SEASONAL24}
        label="Sazonalidade"
        strokeColor="#4a9eed"
        yMin={-6}
        yMax={6}
        w={w}
        h={60}
      />
      <PanelChart
        series={RESID24}
        label="Resíduo"
        strokeColor="#4a9eed"
        yMin={-6}
        yMax={6}
        w={w}
        h={60}
      />
    </div>
  );
}

/* ── MA chart ────────────────────────────────────────────────────────── */
function MAChart() {
  const ma3 = computeMA(RAW24, 3);
  const ma5 = computeMA(RAW24, 5);
  const w = 560;
  const h = 160;
  const yMin = 8;
  const yMax = 44;
  const rawPath = toPath(RAW24, yMin, yMax, w, h);

  const sx = (i) => 10 + (i / (RAW24.length - 1)) * (w - 20);
  const sy = (v) => h - 6 - ((v - yMin) / (yMax - yMin)) * (h - 12);

  let ma3Path = '';
  let ma5Path = '';
  ma3.forEach((v, i) => {
    if (v === null) return;
    const prev = ma3[i - 1];
    ma3Path += `${prev === null || prev === undefined ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)} `;
  });
  ma5.forEach((v, i) => {
    if (v === null) return;
    const prev = ma5[i - 1];
    ma5Path += `${prev === null || prev === undefined ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)} `;
  });

  return (
    <div style={S.diagram}>
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginBottom: '0.75rem',
        }}
      >
        Medias móveis MA(3) e MA(5) sobre a serie original
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        style={{ maxWidth: w, height: h, display: 'block' }}
      >
        <path
          d={rawPath}
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <path
          d={ma3Path.trim()}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />
        <path
          d={ma5Path.trim()}
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.5"
          strokeDasharray="8,4"
        />
      </svg>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: 'var(--text-secondary)',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          Original
        </span>
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: '#4a9eed',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          MA(3)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <svg width="24" height="3">
            <line
              x1="0"
              y1="1.5"
              x2="24"
              y2="1.5"
              stroke="#0284c7"
              strokeWidth="3"
              strokeDasharray="6,3"
            />
          </svg>
          MA(5)
        </span>
      </div>
    </div>
  );
}

/* ── STL chart ───────────────────────────────────────────────────────── */
function STLChart() {
  const bw = 5;
  const loessTrend = RAW24.map((_, i) => {
    const lo = Math.max(0, i - bw);
    const hi = Math.min(RAW24.length - 1, i + bw);
    let s = 0;
    let cnt = 0;
    for (let j = lo; j <= hi; j++) {
      s += RAW24[j];
      cnt++;
    }
    return s / cnt;
  });
  const stlSeasonal = RAW24.map((v, i) => v - loessTrend[i]);
  const stlResid = stlSeasonal.map(
    (s, i) => s - (stlSeasonal[i % 4] + stlSeasonal[(i % 4) + 4]) / 2,
  );
  const w = 560;
  return (
    <div style={S.diagram}>
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginBottom: '0.75rem',
        }}
      >
        Decomposição STL — tendência suavizada via LOESS
      </div>
      <PanelChart
        series={RAW24}
        label="Original"
        strokeColor="var(--text-secondary)"
        yMin={8}
        yMax={44}
        w={w}
        h={60}
      />
      <PanelChart
        series={loessTrend}
        label="LOESS trend"
        strokeColor={color}
        yMin={8}
        yMax={44}
        w={w}
        h={60}
      />
      <PanelChart
        series={stlSeasonal}
        label="Sazonalidade"
        strokeColor="#4a9eed"
        yMin={-10}
        yMax={10}
        w={w}
        h={60}
      />
      <PanelChart
        series={stlResid}
        label="Resíduo"
        strokeColor="#4a9eed"
        yMin={-4}
        yMax={4}
        w={w}
        h={60}
      />
    </div>
  );
}

/* ── SES chart ───────────────────────────────────────────────────────── */
function SESChart() {
  const ses02 = computeSES(RAW24, 0.2);
  const ses08 = computeSES(RAW24, 0.8);
  const w = 560;
  const h = 160;
  const yMin = 8;
  const yMax = 44;
  const rawPath = toPath(RAW24, yMin, yMax, w, h);
  const ses02Path = toPath(ses02, yMin, yMax, w, h);
  const ses08Path = toPath(ses08, yMin, yMax, w, h);

  const lastFitted02 = ses02[ses02.length - 1];
  const sx = (i) => 10 + (i / (RAW24.length - 1)) * (w - 20);
  const sy = (v) => h - 6 - ((v - yMin) / (yMax - yMin)) * (h - 12);
  const forecastX1 = sx(RAW24.length - 1);
  const forecastX2 = w - 2;
  const forecastY = sy(lastFitted02);

  return (
    <div style={S.diagram}>
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginBottom: '0.75rem',
        }}
      >
        Suavização Exponencial Simples — efeito do parâmetro alfa
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        style={{ maxWidth: w, height: h, display: 'block' }}
      >
        <path
          d={rawPath}
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <path d={ses02Path} fill="none" stroke="#4a9eed" strokeWidth="2.5" />
        <path
          d={ses08Path}
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.5"
          strokeDasharray="8,4"
        />
        <line
          x1={forecastX1}
          y1={forecastY}
          x2={forecastX2}
          y2={forecastY}
          stroke="#0284c7"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <text
          x={forecastX2 - 4}
          y={forecastY - 5}
          textAnchor="end"
          fontSize="9"
          fill="#0284c7"
        >
          previsão
        </text>
      </svg>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: 'var(--text-secondary)',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          Original
        </span>
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: '#4a9eed',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          SES alfa=0.2 (suave)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <svg width="24" height="3">
            <line
              x1="0"
              y1="1.5"
              x2="24"
              y2="1.5"
              stroke="#0284c7"
              strokeWidth="3"
              strokeDasharray="6,3"
            />
          </svg>
          SES alfa=0.8 (reativo)
        </span>
      </div>
    </div>
  );
}

/* ── Holt chart ──────────────────────────────────────────────────────── */
function HoltChart() {
  const { fitted, forecast } = computeHolt(RAW24, 0.3, 0.1);
  const w = 560;
  const h = 160;
  const n = RAW24.length;
  const totalPts = n + forecast.length;
  const yMin = 8;
  const yMax = 58;

  const sx = (i) => 10 + (i / (totalPts - 1)) * (w - 20);
  const sy = (v) => h - 6 - ((v - yMin) / (yMax - yMin)) * (h - 12);

  const rawPath = RAW24.map(
    (v, i) => `${i === 0 ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)}`,
  ).join(' ');
  const fittedPath = fitted
    .map(
      (v, i) => `${i === 0 ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)}`,
    )
    .join(' ');
  const forecastPath = [
    `M${sx(n - 1).toFixed(1)},${sy(fitted[n - 1]).toFixed(1)}`,
  ]
    .concat(
      forecast.map((v, i) => `L${sx(n + i).toFixed(1)},${sy(v).toFixed(1)}`),
    )
    .join(' ');

  const ciUpper = forecast.map((v, i) => v + 1.2 * (i + 1));
  const ciLower = forecast.map((v, i) => v - 1.2 * (i + 1));
  const fanPts = [
    `M${sx(n - 1).toFixed(1)},${sy(fitted[n - 1]).toFixed(1)}`,
    ...ciUpper.map((v, i) => `L${sx(n + i).toFixed(1)},${sy(v).toFixed(1)}`),
    ...ciLower
      .slice()
      .reverse()
      .map(
        (v, i) =>
          `L${sx(n + forecast.length - 1 - i).toFixed(1)},${sy(v).toFixed(1)}`,
      ),
    'Z',
  ].join(' ');

  return (
    <div style={S.diagram}>
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginBottom: '0.75rem',
        }}
      >
        Suavização de Holt — previsão com tendência e intervalo de confianca
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        style={{ maxWidth: w, height: h, display: 'block' }}
      >
        <path d={fanPts} fill="rgba(2,132,199,0.15)" stroke="none" />
        <path
          d={rawPath}
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <path d={fittedPath} fill="none" stroke="#4a9eed" strokeWidth="2.5" />
        <path
          d={forecastPath}
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.5"
          strokeDasharray="8,4"
        />
        <line
          x1={sx(n - 1)}
          y1={4}
          x2={sx(n - 1)}
          y2={h - 4}
          stroke="var(--text-secondary)"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <text
          x={sx(n - 1) + 4}
          y={14}
          fontSize="9"
          fill="var(--text-secondary)"
        >
          previsão
        </text>
      </svg>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: 'var(--text-secondary)',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          Original
        </span>
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: '#4a9eed',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          Holt ajustado
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <svg width="24" height="3">
            <line
              x1="0"
              y1="1.5"
              x2="24"
              y2="1.5"
              stroke="#0284c7"
              strokeWidth="3"
              strokeDasharray="6,3"
            />
          </svg>
          Previsão
        </span>
      </div>
    </div>
  );
}

/* ── Holt-Winters chart ──────────────────────────────────────────────── */
function HWChart() {
  const period = 4;
  const alpha = 0.3;
  const beta = 0.1;
  const gamma = 0.2;
  let l = RAW24.slice(0, period).reduce((a, b) => a + b, 0) / period;
  let b =
    (RAW24.slice(period, 2 * period).reduce((a, b) => a + b, 0) / period -
      RAW24.slice(0, period).reduce((a, b) => a + b, 0) / period) /
    period;
  const sArr = RAW24.slice(0, period).map((v) => v - l);
  const fitted = [];
  for (let t = 0; t < RAW24.length; t++) {
    const si = sArr[t % period];
    const lPrev = l;
    l = alpha * (RAW24[t] - si) + (1 - alpha) * (l + b);
    b = beta * (l - lPrev) + (1 - beta) * b;
    sArr[t % period] = gamma * (RAW24[t] - lPrev - b) + (1 - gamma) * si;
    fitted.push(l + b + sArr[t % period]);
  }

  const w = 560;
  const h = 160;
  const yMin = 8;
  const yMax = 44;
  const rawPath = toPath(RAW24, yMin, yMax, w, h);
  const fittedPath = toPath(fitted, yMin, yMax, w, h);

  return (
    <div style={S.diagram}>
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginBottom: '0.75rem',
        }}
      >
        Holt-Winters aditivo — ajuste sobre serie com sazonalidade
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        style={{ maxWidth: w, height: h, display: 'block' }}
      >
        <path
          d={rawPath}
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
        />
        <path d={fittedPath} fill="none" stroke={color} strokeWidth="2" />
      </svg>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: 'var(--text-secondary)',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          Original
        </span>
        <span>
          <span
            style={{
              display: 'inline-block',
              width: 24,
              height: 3,
              background: color,
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          />
          Holt-Winters ajustado
        </span>
      </div>
    </div>
  );
}

/* ── main component ──────────────────────────────────────────────────── */ // ── Main component ──
export default function ST12() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 12</div>
      <h1 style={S.h1}>Modelos ARIMA, SARIMA & Suavização</h1>

      <section style={S.section}>
        <h2 style={S.h2}>1. De ARMA a ARIMA</h2>
        <p style={S.p}>
          Um processo ARMA(p,q) exige estacionariedade. Quando a série apresenta
          raiz unitária — tendência estocástica — é necessário diferenciar{' '}
          <em>d</em> vezes antes de ajustar um ARMA. O resultado é um modelo
          ARIMA(<em>p</em>,<em>d</em>,<em>q</em>).
        </p>

        <strong>Representação polinomial:</strong>
        <BlockMath math="\Phi(L)(1-L)^d y_t = \Theta(L)\varepsilon_t" />
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          onde{' '}
          <InlineMath math="\Phi(L) = 1 - \phi_1 L - \cdots - \phi_p L^p" /> e{' '}
          <InlineMath math="\Theta(L) = 1 + \theta_1 L + \cdots + \theta_q L^q" />
          ,
          <InlineMath math="L" /> é o operador de retardo (
          <InlineMath math="Ly_t = y_{t-1}" />) e <InlineMath math="d" /> é a
          ordem de integração.
        </div>

        <p style={S.p}>Casos especiais importantes:</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Notação ARIMA</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Passeio aleatório', 'ARIMA(0,1,0)', 'yₜ = yₜ₋₁ + εₜ'],
              ['AR(1)', 'ARIMA(1,0,0)', 'φ(L)yₜ = εₜ'],
              ['MA(1)', 'ARIMA(0,0,1)', 'yₜ = θ(L)εₜ'],
              ['ARIMA com tendência', 'ARIMA(1,1,1)', 'Série I(1) com AR e MA'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>
                  <code>{b}</code>
                </td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          A ordem <em>d</em> é determinada por testes de raiz unitária como o
          teste ADF (Augmented Dickey-Fuller) ou o teste KPSS. O fluxo de
          trabalho típico:
        </p>
        <FlowchartARIMA />
        <div style={S.note}>
          Convenção: ARIMA(p,0,q) equivale a ARMA(p,q). Uma série I(2) requer d
          = 2 diferenciações, mas na prática d = 1 é o mais comum em dados
          económicos e financeiros.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>2. Diferenciação</h2>
        <p style={S.p}>
          A primeira diferença remove tendência linear estocástica:
        </p>
        <BlockMath math="\Delta y_t = y_t - y_{t-1} = (1-L)y_t" />
        <p style={S.p}>A segunda diferença remove tendência quadrática:</p>
        <BlockMath math="\Delta^2 y_t = \Delta y_t - \Delta y_{t-1} = (1-L)^2 y_t" />
        <p style={S.p}>
          Cada diferenciação reduz a amostra em uma observação. Diferenciar em
          excesso (over-differencing) aumenta a variância e introduz raízes MA
          no limite unitário — sinal de modelo sobrediferenciado. O gráfico
          abaixo ilustra o efeito visual das diferenciações sucessivas.
        </p>
        <DiffPanels />
        <div style={S.note}>
          Regra prática: se a série original tem autocorrelações muito
          persistentes (ACF decai lentamente), d = 1 é provavelmente necessário.
          Se após d = 1 a ACF continua persistente, considere d = 2 — mas
          raramente se ultrapassa d = 2.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>3. Metodologia Box-Jenkins</h2>
        <p style={S.p}>
          George Box e Gwilym Jenkins sistematizaram em 1970 um processo
          iterativo de quatro etapas para identificar, estimar, diagnosticar e
          utilizar modelos ARIMA. O método permanece relevante e é a base dos
          algoritmos automáticos modernos.
        </p>
        <BoxJenkinsDiagram />
        <h3 style={S.h3}>Etapa 1 — Identificação</h3>
        <p style={S.p}>
          Analisar a ACF e a PACF da série diferenciada. A ACF corta após q
          desfasamentos (processo MA). A PACF corta após p desfasamentos
          (processo AR). Padrões mistos sugerem um ARMA(p,q).
        </p>
        <h3 style={S.h3}>Etapa 2 — Estimação</h3>
        <p style={S.p}>
          Os parâmetros <InlineMath math="\varphi_1, \ldots, \varphi_p" /> e{' '}
          <InlineMath math="\theta_1, \ldots, \theta_q" /> são estimados por
          máxima verossimilhança (MLE), maximizando{' '}
          <InlineMath math="L(\varphi, \theta \mid y_1, \ldots, y_n)" />. Para
          modelos com <InlineMath math="d > 0" /> utiliza-se a verossimilhança
          condicional ou a exact MLE via filtro de Kalman.
        </p>
        <h3 style={S.h3}>Etapa 3 — Diagnóstico</h3>
        <p style={S.p}>
          Os resíduos do modelo ajustado devem comportar-se como ruído branco:
          média zero, variância constante, sem autocorrelação. O teste de
          Ljung-Box testa formalmente H₀: ρ₁=⋯=ρₘ=0. Q-Q plots e histogramas
          avaliam a normalidade.
        </p>
        <h3 style={S.h3}>Etapa 4 — Previsão</h3>
        <p style={S.p}>
          Com o modelo validado, calculam-se previsões h-passos à frente com os
          respetivos intervalos de confiança. Se o diagnóstico reprovar o
          modelo, regressa-se à etapa 1 (seta "Reformular" no diagrama).
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>4. Selecção de p, d, q</h2>
        <p style={S.p}>
          Dois critérios de informação dominam a seleção de modelos ARIMA. Ambos
          penalizam a complexidade mas de forma diferente:
        </p>

        <BlockMath math="\text{AIC} = -2\log L + 2k" />
        <BlockMath math="\text{BIC} = -2\log L + k\cdot\log(n)" />
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <em>k</em> = número de parâmetros, <em>n</em> = dimensão amostral.
          Valores mais baixos indicam melhor modelo.
        </div>

        <p style={S.p}>
          O BIC penaliza mais a complexidade do que o AIC (log(n) {'>'} 2 para n{' '}
          {'>'} 7) e tende a selecionar modelos mais parcimoniosos. Na prática,
          quando AIC e BIC discordam, privilegia-se o BIC se a previsão for o
          objetivo principal.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>k</th>
              <th style={S.th}>AIC</th>
              <th style={S.th}>BIC</th>
              <th style={S.th}>Ljung-Box p</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ARIMA(0,1,1)', 1, '1842.3', '1847.1', '0.41'],
              ['ARIMA(1,1,0)', 1, '1849.7', '1854.5', '0.38'],
              ['ARIMA(1,1,1)', 2, '1841.1', '1850.6', '0.55'],
              ['ARIMA(2,1,1)', 3, '1842.8', '1857.0', '0.52'],
            ].map(([m, k, aic, bic, lb], i) => (
              <tr
                key={i}
                style={i === 2 ? { background: 'rgba(74,158,237,0.06)' } : {}}
              >
                <td style={S.td}>
                  <code>{m}</code>
                </td>
                <td style={S.td}>{k}</td>
                <td style={S.td}>
                  {aic}
                  {i === 2 ? ' ' : ''}
                </td>
                <td style={S.td}>{bic}</td>
                <td style={S.td}>{lb}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A linha destacada () indica o modelo selecionado pelo AIC. O
          ARIMA(1,1,1) tem AIC mínimo, mas o ARIMA(0,1,1) tem BIC mínimo — o
          princípio da parcimónia favorece este último.
        </div>
        <h3 style={S.h3}>auto.arima() — pesquisa em grelha</h3>
        <p style={S.p}>
          A função <code>auto.arima()</code> do pacote <code>forecast</code> (R)
          automatiza o processo: testa múltiplas combinações de (p, d, q) dentro
          de limites pré-definidos (por defeito p,q ≤ 5, d ≤ 2), calcula o AIC
          de cada modelo e seleciona o melhor. A pesquisa usa uma heurística
          stepwise para evitar avaliar todos os modelos possíveis.
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>5. Previsão com ARIMA</h2>
        <p style={S.p}>
          A previsão h-passos à frente, ŷₜ₊ₕ|ₜ, é calculada iterativamente: a
          previsão de um passo alimenta a do passo seguinte. Para um
          ARIMA(p,d,q), a previsão converge para a média a longo prazo (se d =
          0) ou para uma tendência determinística (se d ≥ 1).
        </p>

        <BlockMath math="\hat{y}_{t+h|t} = E[y_{t+h} \mid \mathcal{I}_t]" />
        <BlockMath math="\text{Intervalo de 95\%: } \hat{y}_{t+h|t} \pm 1.96\,\sigma_h" />
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          onde <InlineMath math="\sigma_h" /> aumenta com{' '}
          <InlineMath math="h" /> (incerteza cumulativa).
        </div>

        <p style={S.p}>
          Uma propriedade fundamental: os intervalos de previsão alargam-se com
          o horizonte h. Para o passeio aleatório ARIMA(0,1,0), σₕ = σ√h —
          cresce com a raiz quadrada do horizonte. O "leque" de incerteza é
          visível no gráfico abaixo.
        </p>
        <ForecastFan />
        <div style={S.note}>
          A zona mais escura representa o IC de 80%, a zona mais clara o IC de
          95%. O intervalo de 95% cobre aproximadamente ±1.96 erros padrão.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>6. Sazonalidade</h2>
        <p style={S.p}>
          Muitas séries exibem padrões que se repetem a cada <em>m</em>{' '}
          períodos: vendas mensais (m = 12), dados trimestrais (m = 4), horários
          (m = 24). Um ARIMA simples não consegue capturar estes padrões
          adequadamente.
        </p>
        <p style={S.p}>
          A diferenciação sazonal remove padrões sazonais estocásticos:
        </p>

        <BlockMath math="(1 - L^m)y_t = y_t - y_{t-m}" />
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Análogo à diferenciação regular, mas comparando com o período
          homólogo.
        </div>

        <p style={S.p}>
          Abaixo, uma série com sazonalidade clara (amplitude de ~40 unidades
          por ciclo) e o resultado após diferenciação sazonal com m = 12:
        </p>
        <SeasonalPanels />
        <div style={S.note}>
          Após a diferenciação sazonal a série fica aproximadamente estacionária
          em torno de zero. A variância residual resulta da componente irregular
          da série original.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>7. SARIMA(p,d,q)(P,D,Q)m</h2>
        <p style={S.p}>
          O modelo SARIMA (Seasonal ARIMA) combina a estrutura ARIMA regular com
          componentes autorregressivos e de médias móveis sazonais. A notação
          completa é:
        </p>
        <BlockMath math="\Phi(L)\cdot\Phi_s(L^m)\cdot(1-L)^d\cdot(1-L^m)^D\cdot y_t = \Theta(L)\cdot\Theta_s(L^m)\cdot\varepsilon_t" />
        <BlockMath math="\Phi_s(L^m) = 1 - \Phi_1 L^m - \cdots - \Phi_P L^{Pm} \quad \text{(AR sazonal de ordem }P\text{)}" />
        <BlockMath math="\Theta_s(L^m) = 1 + \Theta_1 L^m + \cdots + \Theta_Q L^{Qm} \quad \text{(MA sazonal de ordem }Q\text{)}" />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'p',
                'AR regular',
                'Nº de desfasamentos autorregressivos não sazonais',
              ],
              ['d', 'I regular', 'Ordem de diferenciação regular'],
              [
                'q',
                'MA regular',
                'Nº de desfasamentos de médias móveis não sazonais',
              ],
              [
                'P',
                'AR sazonal',
                'Nº de termos AR sazonais (desfasamentos em múltiplos de m)',
              ],
              ['D', 'I sazonal', 'Nº de diferenciações sazonais'],
              ['Q', 'MA sazonal', 'Nº de termos MA sazonais'],
              [
                'm',
                'Período',
                'Comprimento do ciclo sazonal (ex.: 12 para mensal)',
              ],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>
                  <code>{a}</code>
                </td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Exemplo: SARIMA(1,1,1)(1,1,1)₁₂</h3>
        <p style={S.p}>
          O modelo mais popular para dados mensais com tendência e sazonalidade.
          Aplicado ao clássico dataset <code>AirPassengers</code> (passageiros
          aéreos 1949-1960):
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>d=1 elimina a tendência crescente.</li>
          <li>
            D=1 elimina o padrão sazonal multiplicativo (após
            log-transformação).
          </li>
          <li>P=Q=1 captura a autocorrelação sazonal residual.</li>
          <li>p=q=1 captura autocorrelação de curto prazo.</li>
        </ul>
        <div style={S.note}>
          Para dados com sazonalidade multiplicativa (amplitude aumenta com o
          nível), aplicar log antes de ajustar o SARIMA: log(yₜ) transforma
          sazonalidade multiplicativa em aditiva.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>8. ACF/PACF Sazonal</h2>
        <p style={S.p}>
          A identificação dos termos sazonais P e Q baseia-se nos mesmos
          princípios da identificação ARMA regular, mas observando os
          desfasamentos que são múltiplos de m. A ACF e PACF revelam a estrutura
          sazonal:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão na ACF sazonal</th>
              <th style={S.th}>Padrão na PACF sazonal</th>
              <th style={S.th}>Conclusão</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Decaimento nos lag 12, 24, …',
                'Corte após lag 12',
                'SAR(1) → P=1',
              ],
              [
                'Corte após lag 12',
                'Decaimento nos lag 12, 24, …',
                'SMA(1) → Q=1',
              ],
              ['Decaimento em ambos', 'Decaimento em ambos', 'SARMA(P,Q)'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>
                  <strong>{c}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          O painel interativo abaixo mostra a ACF típica para cada tipo de
          processo sazonal. Os spikes destacados a azul correspondem aos
          desfasamentos múltiplos de 12.
        </p>
        <ACFTabs />
        <div style={S.note}>
          As linhas tracejadas representam os limites de significância
          aproximados ±1.96/√n (IC de 95% sob H₀: autocorrelação nula).
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>9. Avaliação do Modelo</h2>
        <h3 style={S.h3}>Métricas in-sample</h3>
        <p style={S.p}>
          As métricas in-sample avaliam o ajustamento do modelo aos dados de
          treino:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>
            <strong>AIC / BIC</strong> — equilíbrio entre ajustamento e
            complexidade.
          </li>
          <li>
            <strong>Teste de Ljung-Box</strong> — testa autocorrelação residual.
            Rejeitar H₀ indica má especificação.
          </li>
          <li>
            <strong>Teste ARCH</strong> — testa heteroscedasticidade condicional
            nos resíduos.
          </li>
        </ul>
        <h3 style={S.h3}>Métricas out-of-sample</h3>
        <p style={S.p}>
          Separar os dados em treino (ex.: 80%) e teste (20%). Avaliar as
          previsões no conjunto de teste com:
        </p>
        <BlockMath math="\text{MAE} = \frac{1}{n}\sum|y_t - \hat{y}_t|" />
        <BlockMath math="\text{RMSE} = \sqrt{\frac{1}{n}\sum(y_t - \hat{y}_t)^2}" />
        <BlockMath math="\text{MAPE} = \frac{100}{n}\sum\frac{|y_t - \hat{y}_t|}{|y_t|}" />
        <p style={S.p}>
          Comparar sempre com benchmarks ingénuos — se o ARIMA não bate o Naïve,
          algo está mal.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>MAE</th>
              <th style={S.th}>RMSE</th>
              <th style={S.th}>MAPE (%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['SARIMA(1,1,1)(1,1,1)₁₂', '8.4', '11.2', '3.1', true],
              ['Naïve (último valor)', '24.6', '31.7', '8.9', false],
              ['Naïve Sazonal (yₜ₋₁₂)', '12.1', '15.8', '4.4', false],
              ['Média histórica', '38.2', '47.5', '13.6', false],
            ].map(([m, mae, rmse, mape, best], i) => (
              <tr
                key={i}
                style={best ? { background: 'rgba(74,158,237,0.06)' } : {}}
              >
                <td style={S.td}>
                  <strong>{best ? ' ' : ''}</strong>
                  <code>{m}</code>
                </td>
                <td style={S.td}>{mae}</td>
                <td style={S.td}>{rmse}</td>
                <td style={S.td}>{mape}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          O MAPE é inadequado quando yₜ pode ser zero ou próximo de zero
          (divisão por valores pequenos explode a métrica). Nesse caso prefira
          MAE ou RMSE.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>10. Decomposição Classica</h2>
        <p style={S.p}>
          A decomposição classica parte do principio de que uma serie temporal{' '}
          <em>Y</em> pode ser expressa como a combinacao de quatro componentes:
        </p>
        <BlockMath math="\text{Modelo Aditivo: } Y_t = T_t + S_t + C_t + I_t" />
        <BlockMath math="\text{Modelo Multiplicativo: } Y_t = T_t \times S_t \times C_t \times I_t" />
        <p style={S.p}>
          Onde <strong>T</strong> e a tendência (movimento de longo prazo),{' '}
          <strong>S</strong> a sazonalidade (variacao periodica regular),{' '}
          <strong>C</strong> o ciclo (oscilacoes de medio prazo, tipicamente
          superiores a 1 ano) e <strong>I</strong> o componente irregular ou
          residual (ruido aleatorio não explicado pelos outros).
        </p>
        <p style={S.p}>
          O modelo aditivo e adequado quando a amplitude das flutuacoes sazonais
          e aproximadamente constante ao longo do tempo. O modelo multiplicativo
          e preferido quando essa amplitude cresce proporcionalmente ao nível da
          serie — situação frequente em dados economicos e de trafego.
        </p>

        <h3 style={S.h3}>Algoritmo clássico de decomposição</h3>
        <p style={S.p}>
          O procedimento padrão para o modelo aditivo segue tres passos
          principais:
        </p>
        <ol style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>
            Estimar a <strong>tendência T&#x0302;</strong> através de uma média
            móvel centrada de ordem igual ao período sazonal.
          </li>
          <li>
            Calcular os <strong>índices sazonais</strong> como a média das
            diferencas (y - T&#x0302;) para cada período j.
          </li>
          <li>
            Obter o <strong>resíduo</strong> subtraindo a tendência e a
            sazonalidade estimadas: I = y - T&#x0302; - S&#x0302;.
          </li>
        </ol>

        <DecompositionChart />

        <div style={S.note}>
          Para dados com sazonalidade multiplicativa, aplica-se logaritmo antes
          de decompor aditivamente, transformando o problema num equivalente
          aditivo na escala logaritmica.
        </div>

        <h3 style={S.h3}>Escolha do modelo</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Criterio</th>
              <th style={S.th}>Aditivo</th>
              <th style={S.th}>Multiplicativo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Amplitude sazonal', 'Constante', 'Cresce com o nível'],
              ['Variância', 'Estavel', 'Proporcional ao nível'],
              ['Transformação', 'Nenhuma', 'Logaritmo ou ratio'],
              [
                'Interpretacao',
                'Unidades originais',
                'Proporcoes / percentagens',
              ],
              ['Exemplo tipico', 'Temperatura mensal', 'Vendas ao retalho'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>11. Medias Móveis</h2>
        <p style={S.p}>
          A média móvel de ordem k substitui cada observação pela média
          aritmética das k observacoes vizinhas, suavizando as flutuacoes de
          curto prazo e revelando a tendência subjacente:
        </p>
        <BlockMath math="\hat{T}_t = \frac{1}{k}\sum_{j=0}^{k-1} y_{t-j}" />
        <p style={S.p}>
          Para valores de k pares (e.g. k=4 para sazonalidade trimestral),
          usa-se uma média móvel
          <strong> centrada</strong>: calcula-se primeiro MA(k) e depois MA(2)
          sobre o resultado, de modo a que o centro da janela coincida com uma
          observação real e a média não seja desfasada no tempo.
        </p>

        <h3 style={S.h3}>Comparação de ordens</h3>
        <MAChart />

        <p style={S.p}>
          Valores maiores de k produzem linhas de tendência mais suaves mas
          perdem mais observacoes nas extremidades e reagem mais lentamente a
          mudanças de nível. A escolha ideal de k e tipicamente igual ao período
          sazonal (e.g. 4 para dados trimestrais, 12 para mensais).
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>12. Índices Sazonais</h2>
        <p style={S.p}>
          Após estimar a tendência T&#x0302;<sub>t</sub>, calculam-se os índices
          sazonais como a média das diferencas desajustadas para cada período j
          (no caso aditivo):
        </p>
        <BlockMath math="\bar{S}_j = \text{média de } (y_t - \hat{T}_t) \text{ para todo } t \text{ tal que } t \equiv j \pmod{m}" />
        <p style={S.p}>
          Para o modelo aditivo, os índices sazonais devem somar zero ao longo
          de um período completo. Caso contrario, normalizam-se subtraindo a
          média dos proprios índices:
        </p>
        <BlockMath math="S^*_j = \bar{S}_j - \frac{1}{m}\sum_j \bar{S}_j" />

        <h3 style={S.h3}>Exemplo — 4 trimestres</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Trimestre</th>
              <th style={S.th}>Índice bruto</th>
              <th style={S.th}>Índice normalizado</th>
              <th style={S.th}>Interpretacao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Q1', '-3.2', '-3.4', 'Abaixo da tendência (3.4 unidades)'],
              ['Q2', '+1.8', '+1.6', 'Ligeiramente acima'],
              ['Q3', '+4.1', '+3.9', 'Pico sazonal'],
              ['Q4', '-2.5', '-2.7', 'Baixa sazonal'],
            ].map(([q, raw, norm, interp], i) => (
              <tr key={i}>
                <td style={S.td}>
                  <strong>{q}</strong>
                </td>
                <td style={S.td}>{raw}</td>
                <td style={S.td}>
                  <strong>{norm}</strong>
                </td>
                <td style={S.td}>{interp}</td>
              </tr>
            ))}
            <tr>
              <td style={{ ...S.td, fontWeight: 600 }}>Soma</td>
              <td style={S.td}>+0.2</td>
              <td style={{ ...S.td, fontWeight: 600 }}>0.0</td>
              <td style={S.td}>Normalizado corretamente</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          No modelo multiplicativo, a condição e que a média dos índices
          sazonais seja igual a 1 (não a 0). Normaliza-se dividindo cada índice
          pela média dos índices brutos.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>13. STL — Decomposição via LOESS</h2>
        <p style={S.p}>
          O método STL (<em>Seasonal and Trend decomposition using Loess</em>)
          supera as limitacoes da decomposição classica. Em vez de medias
          móveis, usa regressão localmente ponderada (LOESS) para estimar tanto
          a tendência como o componente sazonal, iterando ate convergencia.
        </p>
        <strong>LOESS:</strong> Num ponto <InlineMath math="t" />, ajusta-se um
        polinómio de grau <InlineMath math="d" /> usando apenas as observações
        vizinhas, ponderadas por uma função tricúbica que atribui pesos maiores
        às observações mais próximas.
        <h3 style={S.h3}>Vantagens do STL face a decomposição classica</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caracteristica</th>
              <th style={S.th}>Decomposição Classica</th>
              <th style={S.th}>STL</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Periodicidade', 'Inteira', 'Qualquer (inclui não inteira)'],
              ['Sazonalidade variavel', 'Não', 'Sim (parâmetro s.window)'],
              ['Robustez a outliers', 'Não', 'Sim (opcao robust=TRUE)'],
              [
                'Valores em falta',
                'Problematico',
                'Mais robusto com interpolacao',
              ],
              ['Computacao', 'Simples e rapida', 'Iterativa mas eficiente'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, color }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <STLChart />
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>14. Suavização Exponencial Simples (SES)</h2>
        <p style={S.p}>
          A suavização exponencial simples e o método de previsão de curto prazo
          mais amplamente utilizado. Atribui pesos exponencialmente decrescentes
          as observacoes passadas, dando maior importancia ao passado recente:
        </p>
        <BlockMath math="\ell_t = \alpha\, y_t + (1-\alpha)\,\ell_{t-1}, \quad 0 < \alpha \leq 1" />
        <p style={S.p}>
          A previsão h passos a frente e simplesmente o último nível estimado:
          y&#x0302;<sub>t+h|t</sub> = l<sub>t</sub>. Expandindo a recursao, os
          pesos das observacoes passadas formam uma serie geometrica:
        </p>

        <h3 style={S.h3}>Pesos das observacoes com alfa = 0.3</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Observação</th>
              <th style={S.th}>Formula do peso</th>
              <th style={S.th}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4].map((j) => {
              const wVal = (0.3 * Math.pow(0.7, j)).toFixed(4);
              return (
                <tr key={j}>
                  <td style={S.td}>
                    y<sub>t-{j}</sub>
                  </td>
                  <td style={S.td}>
                    &alpha;(1-&alpha;)<sup>{j}</sup> = 0.3 x 0.7<sup>{j}</sup>
                  </td>
                  <td style={{ ...S.td, fontWeight: j === 0 ? 700 : 400 }}>
                    {wVal}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <SESChart />

        <p style={S.p}>
          Um valor alto de &alpha; (próximo de 1) torna o modelo muito reativo —
          segue de perto os dados mas amplifica o ruido. Um valor baixo (próximo
          de 0) produz previsões mais suaves, adequadas quando o nível da serie
          e relativamente estavel. O valor otimo e encontrado minimizando a soma
          dos erros quadraticos (SSE) através de otimizacao numérica.
        </p>

        <div style={S.note}>
          A SES assume que a serie não tem tendência nem sazonalidade
          significativas. Em presenca destes padrões, os residuos da SES
          apresentarao autocorrelacao sistematica — sinal de que e necessario um
          modelo mais complexo como Holt ou Holt-Winters.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>15. Suavização de Holt (Dupla)</h2>
        <p style={S.p}>
          O método de Holt estende a SES adicionando um componente de tendência.
          O estado do modelo e descrito por dois vetores — nível l<sub>t</sub> e
          declive b<sub>t</sub> — atualizados recursivamente:
        </p>
        <BlockMath math="\ell_t = \alpha\, y_t + (1-\alpha)(\ell_{t-1} + b_{t-1})" />
        <BlockMath math="b_t = \beta(\ell_t - \ell_{t-1}) + (1-\beta)\,b_{t-1}" />
        <BlockMath math="\hat{y}_{t+h|t} = \ell_t + h\,b_t" />
        <p style={S.p}>
          O parâmetro &alpha; controla a suavização do nível e &beta; controla a
          suavização da tendência. A previsão h passos a frente segue uma linha
          reta a partir do último nível estimado, com declive b<sub>t</sub>.
        </p>

        <h3 style={S.h3}>Variante com tendência amortecida (Damped Trend)</h3>
        <p style={S.p}>
          Para horizontes de previsão longos, a extrapolacao linear pode ser
          excessivamente otimista. O modelo de tendência amortecida (Gardner e
          McKenzie, 1985) introduz um parâmetro de amortecimento &phi;
          (tipicamente 0.8 a 0.98), tornando as previsões mais conservadoras a
          longa distancia:
        </p>
        <BlockMath math="\hat{y}_{t+h|t} = \ell_t + (\phi + \phi^2 + \cdots + \phi^h)\,b_t" />

        <HoltChart />

        <p style={S.p}>
          O intervalo de confianca representado e construido assumindo erros
          normalmente distribuidos. A incerteza cresce com o horizonte de
          previsão h, refletindo a acumulacao de erros ao longo do tempo.
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>16. Holt-Winters (Tripla)</h2>
        <p style={S.p}>
          O método de Holt-Winters acrescenta ao modelo de Holt um terceiro
          componente para capturar a sazonalidade. Existem duas variantes:
          aditiva (amplitude sazonal constante) e multiplicativa (amplitude
          crescente com o nível).
        </p>

        <h3 style={S.h3}>Equações — Variante Aditiva</h3>
        <BlockMath math="\ell_t = \alpha(y_t - s_{t-m}) + (1-\alpha)(\ell_{t-1} + b_{t-1})" />
        <BlockMath math="b_t = \beta(\ell_t - \ell_{t-1}) + (1-\beta)\,b_{t-1}" />
        <BlockMath math="s_t = \gamma(y_t - \ell_{t-1} - b_{t-1}) + (1-\gamma)\,s_{t-m}" />
        <BlockMath math="\hat{y}_{t+h|t} = \ell_t + h\,b_t + s_{t+h-m(k+1)}" />

        <h3 style={S.h3}>Equações — Variante Multiplicativa</h3>
        <BlockMath math="\ell_t = \alpha\left(\frac{y_t}{s_{t-m}}\right) + (1-\alpha)(\ell_{t-1} + b_{t-1})" />
        <BlockMath math="s_t = \gamma\left(\frac{y_t}{\ell_{t-1} + b_{t-1}}\right) + (1-\gamma)\,s_{t-m}" />
        <BlockMath math="\hat{y}_{t+h|t} = (\ell_t + h\,b_t)\times s_{t+h-m(k+1)}" />

        <HWChart />

        <h3 style={S.h3}>Parâmetros e inicializacao</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Papel</th>
              <th style={S.th}>Intervalo tipico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['alfa', 'Suavização do nível', '0.1 – 0.5'],
              ['beta', 'Suavização da tendência', '0.01 – 0.3'],
              ['gamma', 'Suavização da sazonalidade', '0.05 – 0.5'],
              ['m', 'Período sazonal', '4 (trimestral), 12 (mensal)'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          Os parâmetros otimos são estimados minimizando o SSE através de
          otimizacao numérica (tipicamente L-BFGS-B). A inicializacao do nível e
          tendência e feita com as primeiras m observacoes por regressão.
        </div>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>17. Framework ETS — Estado em Espaco</h2>
        <p style={S.p}>
          O framework ETS (Error, Trend, Seasonal) unifica todos os modelos de
          suavização exponencial numa representacao de espaco de estados,
          permitindo calcular intervalos de predicao formalmente e selecionar
          automaticamente o modelo otimo por AIC.
        </p>

        <div style={S.highlight}>
          <strong>ETS(Error, Trend, Seasonal)</strong>
          <br />
          Error: A (aditivo) ou M (multiplicativo)
          <br />
          Trend: N (nenhuma), A (aditiva), Ad (aditiva amortecida), M
          (multiplicativa)
          <br />
          Seasonal: N (nenhuma), A (aditiva), M (multiplicativa)
        </div>

        <h3 style={S.h3}>Modelos ETS comuns e equivalencias</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo ETS</th>
              <th style={S.th}>Equivalente clássico</th>
              <th style={S.th}>Componentes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ETS(A,N,N)', 'SES', 'Nível, sem tendência, sem sazonalidade'],
              ['ETS(A,A,N)', 'Holt linear', 'Nível + tendência aditiva'],
              ['ETS(A,Ad,N)', 'Damped Holt', 'Nível + tendência amortecida'],
              [
                'ETS(A,A,A)',
                'Holt-Winters aditivo',
                'Nível + tendência + sazonalidade aditiva',
              ],
              [
                'ETS(M,A,M)',
                'Holt-Winters multiplicativo',
                'Nível + tendência + sazonalidade mult.',
              ],
              [
                'ETS(M,Ad,M)',
                'Damped HW mult.',
                'Variante mais robusta para previsão longa',
              ],
            ].map(([a, b, c], i) => (
              <tr
                key={i}
                style={i < 2 ? { background: 'rgba(74,158,237,0.10)' } : {}}
              >
                <td
                  style={{ ...S.td, fontFamily: 'monospace', fontWeight: 600 }}
                >
                  {a}
                </td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Selecao automática por AIC</h3>
        <p style={S.p}>
          A função <code>ets()</code> do pacote <em>forecast</em> ajusta e
          compara automaticamente todos os modelos ETS validos (ate 30
          combinacoes possiveis), selecionando o de menor AIC:
        </p>
        <BlockMath math="\text{AIC} = -2\log(L) + 2k" />
        <p style={S.p}>
          Onde L e a verossimilhanca maximizada e k o número de parâmetros
          estimados. O AICc (corrigido para amostras pequenas) e preferido
          quando T / k e inferior a 40.
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>18. Avaliacao e Previsão</h2>
        <p style={S.p}>
          A avaliacao da qualidade preditiva deve ser feita sempre num conjunto
          de teste não visto durante o ajuste do modelo. Para séries temporais
          usa-se uma divisao temporal (não aleatoria), reservando os ultimos h
          períodos para avaliacao.
        </p>

        <h3 style={S.h3}>Metricas de erro de previsão</h3>
        <BlockMath math="\text{MAE} = \frac{1}{n}\sum|e_t|, \quad \text{RMSE} = \sqrt{\frac{1}{n}\sum e_t^2}" />
        <BlockMath math="\text{MAPE} = \frac{100}{n}\sum\left|\frac{e_t}{y_t}\right|, \quad \text{MASE} = \frac{\text{MAE}}{\text{MAE}_{\text{naive}}}" />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Metrica</th>
              <th style={S.th}>Escala</th>
              <th style={S.th}>Vantagem</th>
              <th style={S.th}>Limitacao</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'MAE',
                'Original',
                'Interpretavel, robusto a outliers',
                'Escala dependente',
              ],
              [
                'RMSE',
                'Original',
                'Penaliza erros grandes',
                'Sensivel a outliers',
              ],
              [
                'MAPE',
                'Percentagem',
                'Comparável entre séries',
                'Indefinido quando y=0',
              ],
              [
                'MASE',
                'Adimensional',
                'Comparável, escala livre',
                'Requer naive sazonal como referência',
              ],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Comparação de modelos — benchmark</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>RMSE</th>
              <th style={S.th}>MAE</th>
              <th style={S.th}>MASE</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Naive (benchmark)', '14.2', '11.8', '1.00'],
              ['Seasonal Naive', '9.7', '8.1', '0.69'],
              ['SES', '11.3', '9.4', '0.80'],
              ['Holt', '8.9', '7.3', '0.62'],
              ['Holt-Winters', '5.4', '4.2', '0.36'],
              ['ETS (auto)', '5.1', '4.0', '0.34'],
              ['ARIMA (auto)', '5.3', '4.1', '0.35'],
            ].map(([a, b, c, d], i) => (
              <tr
                key={i}
                style={
                  i === 5
                    ? { background: 'rgba(74,158,237,0.10)', fontWeight: 600 }
                    : {}
                }
              >
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Intervalos de predicao</h3>
        <p style={S.p}>
          No framework ETS, os intervalos de predicao são calculados
          analiticamente a partir da variância do processo de estado. Para um
          intervalo de 95%:
        </p>
        <BlockMath math="\left[\hat{y}_{t+h} - 1.96\,\sigma_h,\; \hat{y}_{t+h} + 1.96\,\sigma_h\right]" />
        <p style={S.p}>
          A variância de previsão &sigma;<sub>h</sub>
          <sup>2</sup> cresce com o horizonte h. Em alternativa, podem usar-se
          intervalos bootstrap não parametricos, especialmente quando os
          residuos não são normalmente distribuidos.
        </p>

        <div style={S.note}>
          A função <code>accuracy()</code> do pacote forecast calcula
          automaticamente MAE, RMSE, MAPE e MASE para os conjuntos de treino e
          de teste, facilitando a comparação sistematica de modelos.
        </div>
      </section>
    </div>
  );
}
