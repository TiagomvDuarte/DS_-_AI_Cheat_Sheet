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

// Helper: generate normal PDF y-value
function normalPDF(x, mu, sigma) {
  return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mu) / sigma) ** 2);
}

// Helper: map (x, y) to SVG coords
function toSVG(x, y, xMin, xMax, yMin, yMax, W, H, pad) {
  const px = pad + ((x - xMin) / (xMax - xMin)) * (W - 2 * pad);
  const py = H - pad - ((y - yMin) / (yMax - yMin)) * (H - 2 * pad);
  return [px, py];
}

function buildNormalPath(mu, sigma, xMin, xMax, W, H, pad, steps = 200) {
  const yMax = normalPDF(mu, mu, sigma) * 1.15;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const y = normalPDF(x, mu, sigma);
    pts.push(toSVG(x, y, xMin, xMax, 0, yMax, W, H, pad));
  }
  return { pts, yMax };
}

function pathD(pts) {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
}

// SVG: PDF with shaded area
function PDFShaded() {
  const W = 500, H = 160, pad = 30;
  const mu = 0, sigma = 1, xMin = -3.5, xMax = 3.5;
  const { pts, yMax } = buildNormalPath(mu, sigma, xMin, xMax, W, H, pad);
  const a = -1, b = 1;
  const shadePts = [];
  const [ax] = toSVG(a, 0, xMin, xMax, 0, yMax, W, H, pad);
  const [bx] = toSVG(b, 0, xMin, xMax, 0, yMax, W, H, pad);
  const baseY = H - pad;
  shadePts.push([ax, baseY]);
  for (let i = 0; i <= 100; i++) {
    const x = a + (i / 100) * (b - a);
    const y = normalPDF(x, mu, sigma);
    shadePts.push(toSVG(x, y, xMin, xMax, 0, yMax, W, H, pad));
  }
  shadePts.push([bx, baseY]);
  const shadeD = shadePts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';
  const [muX] = toSVG(0, 0, xMin, xMax, 0, yMax, W, H, pad);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      <path d={shadeD} fill="rgba(74,158,237,0.10)" />
      <path d={pathD(pts)} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={ax} y1={baseY - 4} x2={ax} y2={baseY + 4} stroke={color} strokeWidth="1.5" />
      <line x1={bx} y1={baseY - 4} x2={bx} y2={baseY + 4} stroke={color} strokeWidth="1.5" />
      <text x={ax - 2} y={baseY + 16} fontSize="11" fill="var(--text-secondary)" textAnchor="middle">a</text>
      <text x={bx + 2} y={baseY + 16} fontSize="11" fill="var(--text-secondary)" textAnchor="middle">b</text>
      <text x={muX} y={baseY + 16} fontSize="11" fill={color} textAnchor="middle">f(x)</text>
      <text x={(ax + bx) / 2} y={H / 2 - 10} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">P(a≤X≤b)</text>
      <text x={W - pad} y={baseY + 16} fontSize="10" fill="var(--text-secondary)" textAnchor="end">x</text>
    </svg>
  );
}

// SVG: CDF S-curve
function CDFCurve() {
  const W = 500, H = 130, pad = 30;
  const mu = 0, sigma = 1, xMin = -3.5, xMax = 3.5;
  // Approximate CDF via erf-like numerical integration
  function normalCDF(x) {
    let sum = 0, prev = -4, steps = 200;
    for (let i = 0; i <= steps; i++) {
      const xi = -4 + (i / steps) * (x + 4);
      sum += normalPDF(xi, 0, 1) * ((xi - prev));
      prev = xi;
    }
    return Math.min(1, Math.max(0, sum));
  }
  const pts = [];
  for (let i = 0; i <= 200; i++) {
    const x = xMin + (i / 200) * (xMax - xMin);
    const y = normalCDF(x);
    const px = pad + ((x - xMin) / (xMax - xMin)) * (W - 2 * pad);
    const py = H - pad - y * (H - 2 * pad);
    pts.push([px, py]);
  }
  const baseY = H - pad;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={pad} y1={pad} x2={pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <path d={pathD(pts)} fill="none" stroke={color} strokeWidth="2.5" />
      <text x={pad - 4} y={pad + 4} fontSize="10" fill="var(--text-secondary)" textAnchor="end">1</text>
      <text x={pad - 4} y={baseY} fontSize="10" fill="var(--text-secondary)" textAnchor="end">0</text>
      <text x={W - pad} y={baseY + 14} fontSize="10" fill="var(--text-secondary)" textAnchor="end">x</text>
      <text x={W / 2} y={pad - 4} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">F(x) = P(X ≤ x)</text>
    </svg>
  );
}

// SVG: Bell curve with mu and sigma labeled
function NormalBellLabeled() {
  const W = 500, H = 160, pad = 35;
  const mu = 0, sigma = 1, xMin = -3.5, xMax = 3.5;
  const { pts, yMax } = buildNormalPath(mu, sigma, xMin, xMax, W, H, pad);
  const baseY = H - pad;
  const [muX, peakY] = toSVG(mu, normalPDF(mu, mu, sigma), xMin, xMax, 0, yMax, W, H, pad);
  const [inflX] = toSVG(mu + sigma, normalPDF(mu + sigma, mu, sigma), xMin, xMax, 0, yMax, W, H, pad);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      <path d={pathD(pts)} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={muX} y1={peakY} x2={muX} y2={baseY} stroke={color} strokeWidth="1" strokeDasharray="4,3" />
      <text x={muX} y={baseY + 14} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">μ</text>
      <line x1={muX} y1={(peakY + baseY) / 2} x2={inflX} y2={(peakY + baseY) / 2} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
      <text x={(muX + inflX) / 2} y={(peakY + baseY) / 2 - 5} fontSize="10" fill="var(--text-secondary)" textAnchor="middle">σ</text>
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={W / 2} y={14} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">Distribuição Normal N(μ, σ²)</text>
    </svg>
  );
}

// SVG: 68-95-99.7 rule
function EmpiricalRule() {
  const W = 520, H = 170, pad = 20;
  const mu = 0, sigma = 1, xMin = -3.8, xMax = 3.8;
  const { pts, yMax } = buildNormalPath(mu, sigma, xMin, xMax, W, H, pad);
  const baseY = H - pad - 20;

  function shadeArea(a, b, fill) {
    const shadePts = [];
    const [ax] = toSVG(a, 0, xMin, xMax, 0, yMax, W, H - 20, pad);
    const [bx] = toSVG(b, 0, xMin, xMax, 0, yMax, W, H - 20, pad);
    shadePts.push([ax, baseY]);
    for (let i = 0; i <= 80; i++) {
      const x = a + (i / 80) * (b - a);
      const y = normalPDF(x, mu, sigma);
      shadePts.push(toSVG(x, y, xMin, xMax, 0, yMax, W, H - 20, pad));
    }
    shadePts.push([bx, baseY]);
    const d = shadePts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';
    return <path key={`${a}-${b}`} d={d} fill={fill} />;
  }

  const curveD = pts.map((p, i) => {
    const x = xMin + (i / pts.length) * (xMax - xMin);
    const y = normalPDF(x, mu, sigma);
    const [px, py] = toSVG(x, y, xMin, xMax, 0, yMax, W, H - 20, pad);
    return `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      {shadeArea(-3, 3, 'rgba(74,158,237,0.10)')}
      {shadeArea(-2, 2, 'rgba(74,158,237,0.10)')}
      {shadeArea(-1, 1, 'rgba(74,158,237,0.10)')}
      <path d={curveD} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={W / 2} y={baseY + 14} fontSize="10" fill="#1c5cab" textAnchor="middle" fontWeight="700">68%</text>
      <text x={W / 2} y={baseY + 26} fontSize="10" fill="#3987e5" textAnchor="middle" fontWeight="700">95%</text>
      <text x={W / 2} y={baseY + 38} fontSize="10" fill="#86b6ef" textAnchor="middle" fontWeight="700">99,7%</text>
      <text x={W / 2} y={12} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">Regra 68-95-99,7</text>
      {[-3, -2, -1, 0, 1, 2, 3].map(v => {
        const [px] = toSVG(v, 0, xMin, xMax, 0, yMax, W, H - 20, pad);
        return (
          <g key={v}>
            <line x1={px} y1={baseY - 3} x2={px} y2={baseY + 3} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={px} y={baseY + 52} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">{v === 0 ? 'μ' : `${v > 0 ? '+' : ''}${v}σ`}</text>
          </g>
        );
      })}
    </svg>
  );
}

// SVG: Standard normal with tail shading
function StandardNormalTail({ alpha }) {
  const criticalValues = { 0.10: 1.282, 0.05: 1.645, 0.01: 2.326 };
  const z = criticalValues[alpha] || 1.645;
  const W = 500, H = 150, pad = 30;
  const mu = 0, sigma = 1, xMin = -3.5, xMax = 3.5;
  const { pts, yMax } = buildNormalPath(mu, sigma, xMin, xMax, W, H, pad);
  const baseY = H - pad;
  const shadePts = [];
  const [zx] = toSVG(z, 0, xMin, xMax, 0, yMax, W, H, pad);
  shadePts.push([zx, baseY]);
  for (let i = 0; i <= 60; i++) {
    const x = z + (i / 60) * (3.5 - z);
    const y = normalPDF(x, mu, sigma);
    shadePts.push(toSVG(x, y, xMin, xMax, 0, yMax, W, H, pad));
  }
  shadePts.push([W - pad, baseY]);
  const shadeD = shadePts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      <path d={shadeD} fill="rgba(74,158,237,0.10)" />
      <path d={pathD(pts)} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={zx} y1={baseY} x2={zx} y2={pad + 20} stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={zx} y={baseY + 14} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">z = {z.toFixed(3)}</text>
      <text x={(zx + W - pad) / 2} y={H / 2} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">α = {alpha}</text>
    </svg>
  );
}

// Interactive: critical value selector
function CriticalValueSelector() {
  const [alpha, setAlpha] = useState(0.05);
  const criticalValues = { 0.10: 1.282, 0.05: 1.645, 0.01: 2.326 };
  const z = criticalValues[alpha];
  return (
    <div>
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[0.10, 0.05, 0.01].map(a => (
          <button
            key={a}
            onClick={() => setAlpha(a)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: 20,
              border: `2px solid ${alpha === a ? color : 'var(--card-border)'}`,
              background: alpha === a ? color : 'transparent',
              color: alpha === a ? '#fff' : 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            α = {a}
          </button>
        ))}
      </div>
      <div style={S.highlight}>
        <p style={{ ...S.p, marginBottom: 0 }}>
          Para α = {alpha}: valor crítico z = <strong style={{ color }}>{z.toFixed(3)}</strong>.
          Área na cauda direita = {(alpha * 100).toFixed(0)}%.
          Intervalo de confiança bilateral: z = ±{(criticalValues[alpha / 2] || z).toFixed(3)}.
        </p>
      </div>
      <StandardNormalTail alpha={alpha} />
    </div>
  );
}

// SVG: TLC panels
function TLCPanels() {
  const W = 520, H = 220, pad = 12;
  const panelW = (W - pad * 5) / 4;
  const panelH = H - 50;

  function uniformBell(cx, panelX, label, bellness) {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const x = panelX + pad + t * (panelW - 2 * pad);
      let y;
      if (bellness === 0) {
        y = panelH * 0.3;
      } else if (bellness === 0.3) {
        const v = t - 0.5;
        y = panelH * 0.6 * (1 - 0.8 * v * v);
      } else if (bellness === 0.7) {
        const v = t - 0.5;
        y = panelH * 0.72 * Math.exp(-8 * v * v);
      } else {
        const v = t - 0.5;
        y = panelH * 0.8 * Math.exp(-18 * v * v);
      }
      pts.push([x, pad + panelH - y]);
    }
    const baseY = pad + panelH;
    const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    const fillPts = [[panelX + pad, baseY], ...pts, [panelX + panelW - pad, baseY]];
    const fillD = fillPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';
    return (
      <g key={label}>
        <rect x={panelX} y={pad - 4} width={panelW} height={panelH + 8} rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
        <path d={fillD} fill="rgba(74,158,237,0.10)" />
        <path d={d} fill="none" stroke={color} strokeWidth="1.8" />
        <line x1={panelX + pad} y1={baseY} x2={panelX + panelW - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={panelX + panelW / 2} y={pad + panelH + 16} fontSize="10" fill={color} textAnchor="middle" fontWeight="700">{label}</text>
        <text x={panelX + panelW / 2} y={pad + panelH + 28} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">{cx}</text>
      </g>
    );
  }

  const panels = [
    { label: 'População', sub: '(uniforme)', bellness: 0 },
    { label: 'n = 1', sub: 'sem mudança', bellness: 0.3 },
    { label: 'n = 5', sub: 'mais centrado', bellness: 0.7 },
    { label: 'n = 30', sub: '≈ Normal', bellness: 1 },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H + 7}`} style={{ width: '100%', maxWidth: '100%' }}>
      {panels.map((p, i) => uniformBell(p.sub, pad + i * (panelW + pad), p.label, p.bellness))}
      <text x={W / 2} y={H + 5} fontSize="10" fill="var(--text-secondary)" textAnchor="middle">Convergência para Normal pelo TLC</text>
    </svg>
  );
}

// SVG: Normal vs t-Student
function NormalVsT() {
  const W = 500, H = 155, pad = 30;
  const xMin = -4, xMax = 4;
  const df = 3;

  function tPDF(x, df) {
    const num = Math.pow(1 + (x * x) / df, -(df + 1) / 2);
    return num * 0.38;
  }

  const normPts = [], tPts = [];
  const yMax = normalPDF(0, 0, 1) * 1.15;
  for (let i = 0; i <= 200; i++) {
    const x = xMin + (i / 200) * (xMax - xMin);
    normPts.push(toSVG(x, normalPDF(x, 0, 1), xMin, xMax, 0, yMax, W, H, pad));
    tPts.push(toSVG(x, tPDF(x, df), xMin, xMax, 0, yMax, W, H, pad));
  }
  const baseY = H - pad;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      <path d={pathD(tPts)} fill="none" stroke="#86b6ef" strokeWidth="2" strokeDasharray="6,3" />
      <path d={pathD(normPts)} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={W - pad - 5} y={40} fontSize="10" fill={color} textAnchor="end">Normal</text>
      <text x={W - pad - 5} y={56} fontSize="10" fill="#86b6ef" textAnchor="end">t(df=3) - - -</text>
      <text x={W / 2} y={12} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">Normal vs t-Student (caudas mais pesadas)</text>
    </svg>
  );
}

// SVG: Chi-squared curves
function ChiSquaredCurves() {
  const W = 500, H = 160, pad = 30;
  const xMin = 0, xMax = 20;

  function chiPDF(x, k) {
    if (x <= 0) return 0;
    const halfK = k / 2;
    const logVal = (halfK - 1) * Math.log(x) - x / 2 - halfK * Math.log(2) - logGamma(halfK);
    return Math.exp(logVal);
  }

  function logGamma(n) {
    if (n === 0.5) return Math.log(Math.sqrt(Math.PI));
    if (n === 1) return 0;
    if (n === 1.5) return Math.log(Math.sqrt(Math.PI) / 2);
    if (n === 2) return 0;
    if (n === 2.5) return Math.log(3 * Math.sqrt(Math.PI) / 4);
    if (n === 3) return Math.log(2);
    if (n === 4) return Math.log(6);
    if (n === 5) return Math.log(24);
    return (n - 0.5) * Math.log(n) - n + 0.5 * Math.log(2 * Math.PI);
  }

  const configs = [
    { k: 1, stroke: color, dash: 'none' },
    { k: 5, stroke: 'rgba(74,158,237,0.60)', dash: '5,3' },
    { k: 10, stroke: 'rgba(74,158,237,0.35)', dash: '3,2' },
  ];

  const yMax = 0.35;
  const baseY = H - pad;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      {configs.map(({ k, stroke, dash }) => {
        const pts = [];
        for (let i = 1; i <= 200; i++) {
          const x = xMin + (i / 200) * (xMax - xMin);
          const y = chiPDF(x, k);
          pts.push(toSVG(x, Math.min(y, yMax), xMin, xMax, 0, yMax, W, H, pad));
        }
        return (
          <path key={k} d={pathD(pts)} fill="none" stroke={stroke} strokeWidth="2"
            strokeDasharray={dash === 'none' ? undefined : dash} />
        );
      })}
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={W - pad - 55} y1={30} x2={W - pad - 35} y2={30} stroke={color} strokeWidth="2" />
      <text x={W - pad - 30} y={34} fontSize="10" fill={color}>k=1</text>
      <line x1={W - pad - 55} y1={46} x2={W - pad - 35} y2={46} stroke="rgba(74,158,237,0.60)" strokeWidth="2" strokeDasharray="5,3" />
      <text x={W - pad - 30} y={50} fontSize="10" fill="rgba(74,158,237,0.60)">k=5</text>
      <line x1={W - pad - 55} y1={62} x2={W - pad - 35} y2={62} stroke="rgba(74,158,237,0.35)" strokeWidth="2" strokeDasharray="3,2" />
      <text x={W - pad - 30} y={66} fontSize="10" fill="rgba(74,158,237,0.35)">k=10</text>
      <text x={W / 2} y={12} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">Distribuição Chi-Quadrado χ²(k)</text>
    </svg>
  );
}

// SVG: F distribution curve
function FDistCurve() {
  const W = 500, H = 150, pad = 30;
  const xMin = 0, xMax = 6;
  const d1 = 5, d2 = 10;

  function fPDF(x) {
    if (x <= 0) return 0;
    const a = d1 / 2, b = d2 / 2;
    const lnNum = (a - 1) * Math.log(x) + a * Math.log(d1) + b * Math.log(d2);
    const lnDen = (a + b) * Math.log(d1 * x + d2);
    // log-beta approximation via Stirling: logB(a,b) ≈ logGamma(a)+logGamma(b)-logGamma(a+b)
    function lgamma(z) {
      return (z - 0.5) * Math.log(z + 4.5) - (z + 4.5) + 0.5 * Math.log(2 * Math.PI) +
        Math.log(1 + 76.18009173 / z - 86.50532033 / (z+1) + 24.01409824 / (z+2));
    }
    const logB = lgamma(a) + lgamma(b) - lgamma(a + b);
    return Math.exp(lnNum - lnDen - logB);
  }

  const rawPts = [];
  for (let i = 1; i <= 200; i++) {
    const x = 0.01 + (i / 200) * (xMax - 0.01);
    rawPts.push([x, fPDF(x)]);
  }
  const yMax = Math.max(...rawPts.map(p => p[1])) * 1.15;

  const pts = rawPts.map(([x, y]) => toSVG(x, Math.min(y, yMax), xMin, xMax, 0, yMax, W, H, pad));

  const baseY = H - pad;
  const fillPts = [[pts[0][0], baseY], ...pts, [pts[pts.length-1][0], baseY]];
  const fillD = fillPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
      <path d={fillD} fill="rgba(74,158,237,0.10)" />
      <path d={pathD(pts)} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad} y1={baseY} x2={W - pad} y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={W / 2} y={12} fontSize="11" fill={color} textAnchor="middle" fontWeight="700">Distribuição F(5, 10)</text>
      <text x={W - pad} y={baseY + 14} fontSize="10" fill="var(--text-secondary)" textAnchor="end">x</text>
    </svg>
  );
}

export default function ST3() {
  return (
    <div style={S.page}>
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      <div>
        <span style={S.tag}>MÓDULO 03</span>
        <h1 style={S.h1}>Distribuições Contínuas</h1>
      </div>

      {/* 1. PDF e CDF */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Função de Densidade (PDF) e Função de Distribuição (CDF)</h2>
        <p style={S.p}>
          Para uma variável aleatória contínua X, a probabilidade de assumir exatamente um valor
          específico é zero: P(X = x) = 0. Em vez disso, trabalhamos com a <strong>função de
          densidade de probabilidade</strong> f(x), onde a probabilidade de X estar num intervalo
          [a, b] é a área sob f(x):
        </p>
        <BlockMath math="P(a \leq X \leq b) = \int_a^b f(x)\, dx" />
        <p style={S.p}>
          A PDF f(x) deve satisfazer: <InlineMath math="f(x) \geq 0" /> para todo x, e <InlineMath math="\int_{-\infty}^{+\infty} f(x)\, dx = 1" />.
        </p>
        <div style={S.diagram}>
          <p style={{ ...S.p, fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>
            Área sombreada = P(a ≤ X ≤ b)
          </p>
          <PDFShaded />
        </div>
        <p style={S.p}>
          A <strong>Função de Distribuição Cumulativa</strong> (CDF) é definida como
          <InlineMath math="F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t)\, dt" />. É sempre crescente de 0 para 1.
        </p>
        <div style={S.diagram}>
          <CDFCurve />
        </div>
        <div style={S.note}>
          Contraste com variáveis discretas: nestas, P(X = k) pode ser positivo e a CDF é uma
          função em escada. Nas contínuas, a CDF é sempre contínua e diferenciável (com PDF = F'(x)).
        </div>
      </section>

      <hr style={S.divider} />

      {/* 2. Distribuição Normal */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Distribuição Normal</h2>
        <p style={S.p}>
          A distribuição Normal (ou Gaussiana) N(μ, σ²) é a distribuição contínua mais importante
          em estatística. A sua PDF tem a forma de sino simétrico em torno da média μ, com σ a
          controlar a dispersão:
        </p>
        <div style={S.highlight}>
          <BlockMath math="f(x) = \frac{1}{\sigma\sqrt{2\pi}} \, \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)" />
        </div>
        <div style={S.diagram}>
          <NormalBellLabeled />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Efeito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>μ (média)</td>
              <td style={S.td}>Centro da distribuição</td>
              <td style={S.td}>Desloca o sino horizontalmente</td>
            </tr>
            <tr>
              <td style={S.td}>σ² (variância)</td>
              <td style={S.td}>Dispersão ao redor de μ</td>
              <td style={S.td}>σ grande → sino mais achatado e largo</td>
            </tr>
            <tr>
              <td style={S.td}>σ (desvio-padrão)</td>
              <td style={S.td}>Distância ao ponto de inflexão</td>
              <td style={S.td}>Mesma unidade que X</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Regra Empírica (68-95-99,7)</h3>
        <p style={S.p}>
          Uma propriedade notável da Normal é que percentagens fixas da distribuição ficam dentro
          de múltiplos inteiros do desvio-padrão em torno da média:
        </p>
        <div style={S.diagram}>
          <EmpiricalRule />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Intervalo</th>
              <th style={S.th}>Probabilidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>μ ± 1σ</td>
              <td style={S.td}>≈ 68,27%</td>
            </tr>
            <tr>
              <td style={S.td}>μ ± 2σ</td>
              <td style={S.td}>≈ 95,45%</td>
            </tr>
            <tr>
              <td style={S.td}>μ ± 3σ</td>
              <td style={S.td}>≈ 99,73%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* 3. Normal Padrão */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Distribuição Normal Padrão e Valores Críticos</h2>
        <p style={S.p}>
          Qualquer Normal X ~ N(μ, σ²) pode ser estandardizada mediante a transformação linear:
        </p>
        <div style={S.highlight}>
          <BlockMath math="Z = \frac{X - \mu}{\sigma} \;\rightarrow\; Z \sim N(0, 1)" />
        </div>
        <p style={S.p}>
          A Normal Padrão Z tem média 0 e desvio-padrão 1. A sua CDF, Φ(z) = P(Z ≤ z),
          é tabelada (tabela-Z) ou calculada por software. A estandardização permite consultar
          uma única tabela para qualquer Normal.
        </p>
        <h3 style={S.h3}>Valores Críticos Interativos</h3>
        <p style={S.p}>
          Em testes de hipóteses, o <strong>valor crítico</strong> <InlineMath math="z_\alpha" /> é o limiar acima do qual
          se rejeita H₀ com nível de significância α. Selecione α:
        </p>
        <CriticalValueSelector />
        <div style={S.note}>
          Para testes bilaterais, usa-se <InlineMath math="z_{\alpha/2}" /> em cada cauda. Por exemplo, com α=0,05,
          rejeita-se H₀ se |z| {'>'} 1,96.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 4. TLC */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Teorema do Limite Central (TLC)</h2>
        <p style={S.p}>
          O Teorema do Limite Central é um dos resultados mais poderosos da teoria da probabilidade.
          Afirma que, independentemente da distribuição da população, a distribuição amostral
          da média converge para uma Normal à medida que o tamanho amostral n aumenta:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\bar{X}_n = \frac{X_1 + X_2 + \cdots + X_n}{n} \;\rightarrow\; N\!\left(\mu, \frac{\sigma^2}{n}\right) \quad \text{quando } n \to \infty" />
        </div>
        <p style={S.p}>
          Condições: X₁, ..., Xₙ independentes e identicamente distribuídas (i.i.d.) com
          E[Xᵢ] = μ e Var[Xᵢ] = σ² finita. Na prática, n ≥ 30 costuma ser suficiente.
        </p>
        <div style={S.diagram}>
          <TLCPanels />
        </div>
        <p style={S.p}>
          O painel acima ilustra como a distribuição amostral da média se aproxima de uma Normal,
          mesmo partindo de uma população uniforme (completamente plana). Com n = 30, a
          aproximação normal é geralmente excelente.
        </p>
        <div style={S.note}>
          O TLC justifica a ubiquidade da Normal em estatística aplicada: muitos fenómenos
          naturais resultam da soma de muitos efeitos independentes, e por isso seguem
          aproximadamente uma Normal.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 5. t-Student */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Distribuição t-Student</h2>
        <p style={S.p}>
          Quando a variância populacional σ² é desconhecida e é estimada pela variância amostral
          s², a estatística de teste deixa de seguir uma Normal e passa a seguir uma distribuição
          t-Student com ν = n − 1 graus de liberdade:
        </p>
        <div style={S.highlight}>
          <BlockMath math="t = \frac{\bar{X} - \mu}{s / \sqrt{n}} \;\sim\; t(\nu = n - 1)" />
        </div>
        <p style={S.p}>
          A t-Student tem caudas mais pesadas do que a Normal padrão, refletindo a incerteza
          adicional associada à estimação de σ. À medida que ν → ∞, a t converge para Z ~ N(0,1).
        </p>
        <div style={S.diagram}>
          <NormalVsT />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Graus de liberdade (ν)</th>
              <th style={S.th}>Comparação com Normal</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>ν = 1 (Cauchy)</td>
              <td style={S.td}>Caudas muito pesadas</td>
              <td style={S.td}>Raramente na prática</td>
            </tr>
            <tr>
              <td style={S.td}>ν = 5 a 10</td>
              <td style={S.td}>Caudas notavelmente mais pesadas</td>
              <td style={S.td}>Amostras muito pequenas</td>
            </tr>
            <tr>
              <td style={S.td}>ν ≥ 30</td>
              <td style={S.td}>Praticamente igual à Normal</td>
              <td style={S.td}>n grande, t ≈ z</td>
            </tr>
            <tr>
              <td style={S.td}>ν → ∞</td>
              <td style={S.td}>Converge para N(0,1)</td>
              <td style={S.td}>Limite teórico</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          O teste t é robusto a desvios moderados da normalidade, especialmente para n ≥ 30,
          graças ao TLC.
        </div>
      </section>

      <hr style={S.divider} />

      {/* 6. Chi-Quadrado */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Distribuição Chi-Quadrado</h2>
        <p style={S.p}>
          Se Z₁, Z₂, ..., Z_k são variáveis aleatórias independentes com distribuição N(0,1),
          então a soma dos seus quadrados segue uma distribuição Chi-Quadrado com k graus de
          liberdade:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\chi^2(k) = Z_1^2 + Z_2^2 + \cdots + Z_k^2" />
        </div>
        <p style={S.p}>
          A distribuição é assimétrica à direita e definida apenas para valores positivos. A
          assimetria diminui com k e, para k grande, χ²(k) ≈ N(k, 2k).
        </p>
        <div style={S.diagram}>
          <ChiSquaredCurves />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>E[χ²(k)]</td>
              <td style={S.td}>k</td>
            </tr>
            <tr>
              <td style={S.td}>Var[χ²(k)]</td>
              <td style={S.td}>2k</td>
            </tr>
            <tr>
              <td style={S.td}>Moda</td>
              <td style={S.td}>max(k − 2, 0)</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Aplicações</h3>
        <p style={S.p}>
          A distribuição Chi-Quadrado aparece em dois contextos fundamentais:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Teste de aderência (goodness-of-fit):</strong> compara frequências observadas
            com esperadas — <InlineMath math="\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}" />
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Teste de independência:</strong> verifica se duas variáveis categóricas numa
            tabela de contingência são independentes.
          </li>
          <li>
            <strong>Intervalo de confiança para σ²:</strong> baseado em <InlineMath math="(n-1)s^2/\sigma^2 \sim \chi^2(n-1)" />.
          </li>
        </ul>
      </section>

      <hr style={S.divider} />

      {/* 7. Distribuição F */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Distribuição F de Snedecor</h2>
        <p style={S.p}>
          A distribuição F resulta do rácio de duas distribuições Chi-Quadrado independentes,
          cada uma dividida pelos seus graus de liberdade:
        </p>
        <div style={S.highlight}>
          <BlockMath math="F = \frac{\chi^2(d_1) / d_1}{\chi^2(d_2) / d_2} \;\sim\; F(d_1, d_2)" />
        </div>
        <p style={S.p}>
          Tal como a Chi-Quadrado, é definida para valores positivos e assimétrica à direita.
          d₁ e d₂ são os graus de liberdade do numerador e denominador, respetivamente.
        </p>
        <div style={S.diagram}>
          <FDistCurve />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aplicação</th>
              <th style={S.th}>Estatística</th>
              <th style={S.th}>Graus de liberdade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>ANOVA a um fator</td>
              <td style={S.td}>F = MSB / MSW</td>
              <td style={S.td}>d₁=k−1, d₂=N−k</td>
            </tr>
            <tr>
              <td style={S.td}>Regressão linear múltipla</td>
              <td style={S.td}>F global do modelo</td>
              <td style={S.td}>d₁=p, d₂=n−p−1</td>
            </tr>
            <tr>
              <td style={S.td}>Comparação de variâncias</td>
              <td style={S.td}>F = s₁² / s₂²</td>
              <td style={S.td}>d₁=n₁−1, d₂=n₂−1</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Relação útil: se T ~ t(ν), então T² ~ F(1, ν). O teste t é um caso especial do teste F.
        </div>
      </section>

    </div>
  );
}
