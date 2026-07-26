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

// ─── Fixed return series with obvious spikes at positions 10,11,22,23,35 ────
const returns = [
  0.3, -0.4, 0.2, -0.1, 0.5, -0.3, 0.1, 0.2, -0.2, 0.3,
  2.8, -3.1, 2.5, -0.4, 0.6, -0.2, 0.3, -0.1, 0.4, -0.3,
  0.2, 0.1, 2.2, -2.7, 1.9, -0.5, 0.3, -0.2, 0.4, 0.1,
  -0.3, 0.2, -0.1, 0.4, 0.2, 3.0, -2.8, 2.1, -0.4, 0.3,
];

function ClusterSVG() {
  const W = 760;
  const padL = 42, padR = 12, padT = 14, padB = 24;
  const innerW = W - padL - padR;
  const n = returns.length;

  const topH = 110, gap = 20, absH = 100;
  const totalH = padT + topH + gap + absH + padB;

  const topMid = padT + topH / 2;
  const topScale = topH / 2 / 3.5;

  const absTop = padT + topH + gap;
  const absScaleH = absH / 3.5;

  const step = innerW / (n - 1);

  const retPath = returns.map((v, i) => {
    const x = padL + i * step;
    const y = topMid - v * topScale;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${totalH}`} style={{ width: '100%', display: 'block' }}>
      <text x={padL} y={padT - 2} fontSize="10" fill="var(--text-secondary)">rt</text>
      <line x1={padL} y1={padT} x2={padL} y2={padT + topH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={topMid} x2={padL + innerW} y2={topMid} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
      {[3, 1.5, 0, -1.5, -3].map(v => {
        const y = topMid - v * topScale;
        return (
          <g key={v}>
            <line x1={padL - 4} y1={y} x2={padL} y2={y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={padL - 6} y={y + 4} fontSize="8" fill="var(--text-secondary)" textAnchor="end">{v}</text>
          </g>
        );
      })}
      <path d={retPath} fill="none" stroke={color} strokeWidth="1.5" />
      {returns.map((v, i) => {
        const x = padL + i * step;
        const y = topMid - v * topScale;
        if (Math.abs(v) > 1.5) {
          return <circle key={i} cx={x} cy={y} r="3" fill={color} />;
        }
        return null;
      })}
      <text x={padL + innerW + 4} y={topMid + 4} fontSize="9" fill="var(--text-secondary)">t</text>

      <text x={padL} y={absTop - 2} fontSize="10" fill="var(--text-secondary)">|rt|</text>
      <line x1={padL} y1={absTop} x2={padL} y2={absTop + absH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={absTop + absH} x2={padL + innerW} y2={absTop + absH} stroke="var(--text-secondary)" strokeWidth="1" />
      {returns.map((v, i) => {
        const x = padL + i * step;
        const barH = Math.abs(v) * absScaleH;
        const isSpike = Math.abs(v) > 1.5;
        return (
          <rect
            key={i}
            x={x - 6}
            y={absTop + absH - barH}
            width={12}
            height={barH}
            fill={isSpike ? color : `${color}55`}
            rx={1}
          />
        );
      })}
      {[0, 1, 2, 3].map(v => {
        const y = absTop + absH - v * absScaleH;
        return (
          <g key={v}>
            <line x1={padL - 4} y1={y} x2={padL} y2={y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={padL - 6} y={y + 4} fontSize="8" fill="var(--text-secondary)" textAnchor="end">{v}</text>
          </g>
        );
      })}
      <text x={padL + innerW + 4} y={absTop + absH} fontSize="9" fill="var(--text-secondary)">t</text>
      <text x={padL + innerW / 2} y={totalH - 2} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">Clustering: grandes choques agrupam-se no tempo</text>
    </svg>
  );
}

// ─── ARCH(1) example data ────────────────────────────────────────────────────
const archEps = [0.3, -0.2, 1.8, -2.1, 0.4, -0.3];
const archOmega = 0.1, archAlpha = 0.7;
const archSigma2 = [0.5];
for (let i = 1; i < archEps.length; i++) {
  archSigma2.push(archOmega + archAlpha * archEps[i - 1] ** 2);
}

function ArchSVG() {
  const W = 680, H = 200;
  const padL = 45, padR = 20, padT = 20, padB = 35;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const n = archSigma2.length;
  const maxVal = Math.max(...archSigma2) * 1.15;
  const barW = (innerW / n) * 0.55;
  const step = innerW / n;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={padL - 8} y={padT - 4} fontSize="10" fill="var(--text-secondary)" textAnchor="middle">sigma_t^2</text>
      {[0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0].filter(v => v <= maxVal).map(v => {
        const y = padT + innerH - (v / maxVal) * innerH;
        return (
          <g key={v}>
            <line x1={padL - 4} y1={y} x2={padL + innerW} y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3" />
            <text x={padL - 6} y={y + 4} fontSize="8" fill="var(--text-secondary)" textAnchor="end">{v.toFixed(1)}</text>
          </g>
        );
      })}
      {archSigma2.map((v, i) => {
        const cx = padL + i * step + step / 2;
        const barH = (v / maxVal) * innerH;
        const isHigh = v > 1.5;
        return (
          <g key={i}>
            <rect
              x={cx - barW / 2}
              y={padT + innerH - barH}
              width={barW}
              height={barH}
              fill={isHigh ? color : `${color}66`}
              rx={3}
            />
            <text x={cx} y={padT + innerH + 14} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">t={i + 1}</text>
            <text x={cx} y={padT + innerH - barH - 4} fontSize="8" fill={color} textAnchor="middle">{v.toFixed(2)}</text>
          </g>
        );
      })}
      <text x={padL + innerW / 2} y={H - 4} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">ARCH(1): omega=0.1, alpha=0.7 — sigma^2 dispara após grandes erros</text>
    </svg>
  );
}

// ─── GARCH(1,1) simulation ───────────────────────────────────────────────────
const garchReturns = [
  0.4, -0.5, 0.3, -0.2, 0.6, -0.3, 0.2, 0.3, -0.2, 0.4,
  2.6, -3.0, 2.4, -0.5, 0.7, -0.3, 0.4, -0.2, 0.5, 0.3,
  -0.4, 0.2, 2.0, -2.5, 1.7, -0.6, 0.4, -0.3, 0.5, 0.2,
];
const gOmega = 0.05, gAlpha = 0.10, gBeta = 0.85;
const gSigma2 = [0.3];
for (let i = 1; i < garchReturns.length; i++) {
  const prev = garchReturns[i - 1];
  gSigma2.push(gOmega + gAlpha * prev * prev + gBeta * gSigma2[i - 1]);
}
const gSigma = gSigma2.map(v => Math.sqrt(v));

function GarchSVG() {
  const W = 760;
  const padL = 42, padR = 12, padT = 14, padB = 24;
  const innerW = W - padL - padR;
  const n = garchReturns.length;
  const step = innerW / (n - 1);

  const topH = 110, gap = 20, botH = 100;
  const totalH = padT + topH + gap + botH + padB;

  const topMid = padT + topH / 2;
  const topScale = topH / 2 / 3.5;

  const botTop = padT + topH + gap;
  const maxSig = Math.max(...gSigma) * 1.2;
  const botScale = botH / maxSig;

  const retPath = garchReturns.map((v, i) => {
    const x = padL + i * step;
    const y = topMid - v * topScale;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const sigPath = gSigma.map((v, i) => {
    const x = padL + i * step;
    const y = botTop + botH - v * botScale;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const upperEnv = garchReturns.map((v, i) => {
    const x = padL + i * step;
    const y = topMid - gSigma[i] * 2 * topScale;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const lowerEnv = garchReturns.map((v, i) => {
    const x = padL + i * step;
    const y = topMid + gSigma[i] * 2 * topScale;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${totalH}`} style={{ width: '100%', display: 'block' }}>
      <text x={padL} y={padT - 2} fontSize="10" fill="var(--text-secondary)">rt</text>
      <line x1={padL} y1={padT} x2={padL} y2={padT + topH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={topMid} x2={padL + innerW} y2={topMid} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
      <path d={retPath} fill="none" stroke={color} strokeWidth="1.4" />
      <path d={upperEnv} fill="none" stroke={`${color}88`} strokeWidth="1" strokeDasharray="4,3" />
      <path d={lowerEnv} fill="none" stroke={`${color}88`} strokeWidth="1" strokeDasharray="4,3" />
      <text x={padL + innerW - 2} y={padT + 10} fontSize="8" fill={`${color}88`} textAnchor="end">+/-2sigma_t</text>

      <text x={padL} y={botTop - 2} fontSize="10" fill="var(--text-secondary)">sigma_t</text>
      <line x1={padL} y1={botTop} x2={padL} y2={botTop + botH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={botTop + botH} x2={padL + innerW} y2={botTop + botH} stroke="var(--text-secondary)" strokeWidth="1" />
      <path d={sigPath} fill="none" stroke={color} strokeWidth="2" />
      {[0.2, 0.6, 1.0, 1.4, 1.8].filter(v => v <= maxSig).map(v => {
        const y = botTop + botH - v * botScale;
        return (
          <g key={v}>
            <text x={padL - 6} y={y + 4} fontSize="8" fill="var(--text-secondary)" textAnchor="end">{v.toFixed(1)}</text>
          </g>
        );
      })}
      <text x={padL + innerW + 4} y={botTop + botH} fontSize="9" fill="var(--text-secondary)">t</text>
      <text x={padL + innerW / 2} y={totalH - 2} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">GARCH(1,1): sigma_t acompanha clusters de volatilidade</text>
    </svg>
  );
}

// ─── News Impact Curve ───────────────────────────────────────────────────────
function NewsImpactSVG() {
  const W = 680, H = 240;
  const padL = 50, padR = 20, padT = 20, padB = 45;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const nPoints = 80;
  const epsMin = -3, epsMax = 3;
  const omegaNI = 0.1, alphaNI = 0.3, gammaNI = 0.4;

  const garchPoints = [];
  const gjrPoints = [];
  for (let i = 0; i <= nPoints; i++) {
    const eps = epsMin + (epsMax - epsMin) * i / nPoints;
    const garchSig2 = omegaNI + alphaNI * eps * eps;
    const gjrSig2 = omegaNI + (alphaNI + (eps < 0 ? gammaNI : 0)) * eps * eps;
    garchPoints.push({ eps, sig2: garchSig2 });
    gjrPoints.push({ eps, sig2: gjrSig2 });
  }

  const maxSig2 = Math.max(...gjrPoints.map(p => p.sig2)) * 1.1;

  const toX = eps => padL + (eps - epsMin) / (epsMax - epsMin) * innerW;
  const toY = sig2 => padT + innerH - (sig2 / maxSig2) * innerH;

  const garchPath = garchPoints.map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${toX(p.eps).toFixed(1)},${toY(p.sig2).toFixed(1)}`
  ).join(' ');

  const gjrPath = gjrPoints.map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${toX(p.eps).toFixed(1)},${toY(p.sig2).toFixed(1)}`
  ).join(' ');

  const zeroX = toX(0);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={zeroX} y1={padT} x2={zeroX} y2={padT + innerH} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />

      {[-3, -2, -1, 0, 1, 2, 3].map(v => {
        const x = toX(v);
        return (
          <g key={v}>
            <line x1={x} y1={padT + innerH} x2={x} y2={padT + innerH + 5} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={x} y={padT + innerH + 16} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">{v}</text>
          </g>
        );
      })}

      {[0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5].filter(v => v <= maxSig2).map(v => {
        const y = toY(v);
        return (
          <g key={v}>
            <line x1={padL - 4} y1={y} x2={padL} y2={y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={padL - 6} y={y + 4} fontSize="8" fill="var(--text-secondary)" textAnchor="end">{v.toFixed(1)}</text>
          </g>
        );
      })}

      <path d={gjrPath} fill="none" stroke={color} strokeWidth="2" strokeDasharray="6,3" />
      <path d={garchPath} fill="none" stroke={color} strokeWidth="2" />

      <text x={padL + innerW - 10} y={padT + 14} fontSize="9" fill={color} textAnchor="end">GARCH (simétrico)</text>
      <text x={padL + innerW - 10} y={padT + 28} fontSize="9" fill={color} textAnchor="end">GJR-GARCH (assimétrico)</text>

      <text x={padL + innerW / 2} y={H - 5} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">epsilon(t-1)</text>
      <text x={padL - 30} y={padT + innerH / 2} fontSize="9" fill="var(--text-secondary)" textAnchor="middle" transform={`rotate(-90, ${padL - 30}, ${padT + innerH / 2})`}>sigma_t^2</text>
    </svg>
  );
}

// ─── VaR Distribution ────────────────────────────────────────────────────────
function VaRSVG() {
  const W = 680, H = 210;
  const padL = 20, padR = 20, padT = 20, padB = 40;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const nPoints = 200;
  const xMin = -4, xMax = 4;
  const varCut = -1.645;

  const gauss = x => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);

  const toX = x => padL + (x - xMin) / (xMax - xMin) * innerW;
  const toY = y => padT + innerH - y * innerH / 0.45;

  const curvePts = [];
  for (let i = 0; i <= nPoints; i++) {
    const x = xMin + (xMax - xMin) * i / nPoints;
    curvePts.push({ x, y: gauss(x) });
  }

  const curvePathD = curvePts.map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${toX(p.x).toFixed(1)},${toY(p.y).toFixed(1)}`
  ).join(' ');

  const shadePts = curvePts.filter(p => p.x <= varCut);
  const shadePathD = shadePts.length > 0
    ? `M${toX(shadePts[0].x).toFixed(1)},${toY(0).toFixed(1)} ` +
      shadePts.map(p => `L${toX(p.x).toFixed(1)},${toY(p.y).toFixed(1)}`).join(' ') +
      ` L${toX(varCut).toFixed(1)},${toY(0).toFixed(1)} Z`
    : '';

  const varX = toX(varCut);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }}>
      <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke="var(--text-secondary)" strokeWidth="1" />
      {shadePathD && <path d={shadePathD} fill={`${color}55`} />}
      <path d={curvePathD} fill="none" stroke={color} strokeWidth="2" />
      <line x1={varX} y1={padT} x2={varX} y2={padT + innerH} stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      <text x={varX - 4} y={padT + 12} fontSize="9" fill={color} textAnchor="end">VaR (95%)</text>
      <text x={varX - 4} y={padT + 24} fontSize="8" fill={color} textAnchor="end">z=-1.645</text>
      {[-3, -2, -1, 0, 1, 2, 3].map(v => {
        const x = toX(v);
        return (
          <g key={v}>
            <line x1={x} y1={padT + innerH} x2={x} y2={padT + innerH + 5} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={x} y={padT + innerH + 16} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">{v}sigma</text>
          </g>
        );
      })}
      <text x={padL + innerW / 2} y={padT + innerH + 32} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">Distribuição dos retornos: area sombreada = VaR a 95%</text>
      <text x={toX(-2.8)} y={toY(0.03) - 5} fontSize="10" fill={color} textAnchor="middle">5%</text>
    </svg>
  );
}
// ── Main component ──
export default function ST13() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 13</div>
      <h1 style={S.h1}>Modelos de Volatilidade</h1>

<section style={S.section}>
        <h2 style={S.h2}>1. Factos Estilizados dos Retornos Financeiros</h2>
        <p style={S.p}>
          Os retornos financeiros partilham um conjunto de propriedades empiricas robustas, independentemente
          do activo ou mercado considerado. Compreender estes padrões e o ponto de partida para a modelação
          da volatilidade.
        </p>

        <div style={S.highlight}>
          <strong style={{ color }}>Principais factos estilizados:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.4rem', lineHeight: 2 }}>
            <li><strong>Caudas pesadas (fat tails):</strong> a distribuição dos retornos tem mais massa nas caudas do que a Normal — excesso de curtose positivo.</li>
            <li><strong>Assimetria negativa (negative skewness):</strong> quedas tendem a ser maiores e mais abruptas do que subidas de igual magnitude.</li>
            <li><strong>Clustering de volatilidade:</strong> grandes variações tendem a ser seguidas de grandes variações, e períodos calmos tendem a ser calmos — autocorrelação nos |rt| e rt².</li>
          </ul>
        </div>

        <div style={S.diagram}>
          <ClusterSVG />
        </div>

        <p style={S.p}>
          O painel superior mostra os retornos rt — note os picos em t=10–11, t=22–23 e t=35. O painel
          inferior mostra |rt|: fica evidente que os valores elevados se agrupam. Os modelos ARCH/GARCH
          foram desenhados precisamente para capturar esta dependência temporal na variância condicional.
        </p>

        <div style={S.note}>
          A autocorrelação dos retornos rt e tipicamente nula (hipótese de eficiência), mas a autocorrelação
          de rt² e |rt| e significativamente positiva e decai lentamente — sinal claro de clustering.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>2. Processo ARCH(q) — Engle (1982)</h2>
        <p style={S.p}>
          Robert Engle propos em 1982 o modelo <strong>AutoRegressive Conditional Heteroskedasticity</strong>
          (ARCH), pelo qual recebeu o Premio Nobel em 2003. A ideia central e modelar a variância condicional
          como função dos quadrados dos erros passados.
        </p>

        <h3 style={S.h3}>Especificação</h3>
        <BlockMath math="\varepsilon_t = \sigma_t \cdot z_t, \quad z_t \sim \text{iid}(0,1)" />
          <BlockMath math="\sigma_t^2 = \omega + \alpha_1\varepsilon_{t-1}^2 + \cdots + \alpha_q\varepsilon_{t-q}^2" />

        <p style={S.p}>
          O processo zt e ruido branco estandardizado (Normal(0,1) ou t-Student). A variância condicional
          sigma_t² reage imediatamente a choques passados.
        </p>

        <h3 style={S.h3}>Condição de Estacionaridade</h3>
        <p style={S.p}>
          Para que o processo seja estacionário de segunda ordem, a soma dos coeficientes auto-regressivos
          deve ser inferior a unidade:
        </p>
        <BlockMath math="\alpha_1 + \cdots + \alpha_q < 1, \quad \omega > 0,\; \alpha_i \geq 0" />
          <BlockMath math="\text{Variância incondicional: } E[\varepsilon_t^2] = \frac{\omega}{1 - \sum_i \alpha_i}" />

        <h3 style={S.h3}>Exemplo Numérico — ARCH(1): omega=0.1, alpha=0.7</h3>
        <p style={S.p}>
          Simulamos 6 períodos com erros epsilon_t = {archEps.join(', ')}. A variância condicional
          dispara nos períodos t=3 e t=4 após os choques de 1.8 e -2.1.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>t</th>
              <th style={S.th}>epsilon_t</th>
              <th style={S.th}>sigma_t² = 0.1 + 0.7 · epsilon_(t-1)²</th>
              <th style={S.th}>sigma_t</th>
            </tr>
          </thead>
          <tbody>
            {archEps.map((e, i) => (
              <tr key={i} style={archSigma2[i] > 1.5 ? { background: 'rgba(74,158,237,0.10)' } : {}}>
                <td style={S.td}>{i + 1}</td>
                <td style={S.td}>{e.toFixed(1)}</td>
                <td style={{ ...S.td, color: archSigma2[i] > 1.5 ? color : 'var(--text-primary)', fontWeight: archSigma2[i] > 1.5 ? 700 : 400 }}>{archSigma2[i].toFixed(3)}</td>
                <td style={S.td}>{Math.sqrt(archSigma2[i]).toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}>
          <ArchSVG />
        </div>

        <div style={S.note}>
          Limitação do ARCH(q): para capturar persistência de volatilidade prolongada, são necessários
          valores de q muito elevados, tornando a estimação instavel. O GARCH resolve este problema
          com apenas um parâmetro adicional beta.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>3. Teste ARCH de Engle (LM Test)</h2>
        <p style={S.p}>
          Antes de ajustar um modelo GARCH, e boa prática verificar se existe heteroscedasticidade
          condicional nos residuos. O teste LM de Engle e o procedimento padrão.
        </p>

        <h3 style={S.h3}>Procedimento</h3>
        <ol style={{ paddingLeft: '1.4rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '1rem' }}>
          <li>Estimar o modelo de média (AR, ARMA, etc.) e obter os residuos e_t.</li>
          <li>Calcular e_t² e regredir sobre e_(t-1)², ..., e_(t-q)².</li>
          <li>Calcular a estatística LM = n · R², onde n e o número de observações.</li>
          <li>Sob H₀ (sem efeitos ARCH), LM ~ chi²(q).</li>
        </ol>

        <BlockMath math="H_0: \alpha_1 = \cdots = \alpha_q = 0 \text{ (sem ARCH)}" />
          <BlockMath math="H_1: \text{pelo menos um } \alpha_i \neq 0" />
          <BlockMath math="\text{LM} = n \cdot R^2 \sim \chi^2(q) \text{ sob } H_0" />

        <p style={S.p}>
          Um p-valor baixo (p {'<'} 0.05) indica a presenca de efeitos ARCH — a variância condicional
          não e constante e um modelo GARCH e justificado.
        </p>

        <div style={S.note}>
          Em amostras grandes (tipicamente n &gt; 1000 em dados intradias), o teste ARCH quase sempre
          rejeita H0. O interesse prático esta na magnitude e persistência dos efeitos, não apenas
          na sua presenca.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>4. GARCH(1,1) — Bollerslev (1986)</h2>
        <p style={S.p}>
          Tim Bollerslev generalizou o ARCH introduzindo a variância condicional desfasada no lado
          direito da equação. O <strong>GARCH(1,1)</strong> e de longe o modelo mais utilizado em finanças,
          capturando a persistência da volatilidade com apenas três parâmetros.
        </p>

        <BlockMath math="\sigma_t^2 = \omega + \alpha\,\varepsilon_{t-1}^2 + \beta\,\sigma_{t-1}^2" />
          <BlockMath math="\text{Persistência: } \alpha + \beta \approx 0.97 \text{ (dados diários típicos)}" />
          <BlockMath math="\text{Variância incondicional: } \sigma^2 = \frac{\omega}{1 - \alpha - \beta}" />

        <p style={S.p}>
          O parâmetro alpha (news coefficient) mede a reação imediata a novos choques; beta (persistence)
          mede a velocidade de reversão a variância de longo prazo. Quando alpha + beta é próximo de 1,
          a volatilidade é altamente persistente — choques demoram muito a dissipar-se.
        </p>

        <h3 style={S.h3}>Condições de Estacionaridade e Positividade</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Condição</th>
              <th style={S.th}>Requisito</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Positividade de sigma_t²', 'omega > 0, alpha >= 0, beta >= 0', 'Variância sempre positiva'],
              ['Estacionaridade', 'alpha + beta < 1', 'Variância incondicional finita'],
              ['Processo IGARCH', 'alpha + beta = 1', 'Choque permanente (sem reversão)'],
              ['Kurtosis finita', '3alpha² + (alpha+beta)² < 1', 'Caudas bem comportadas'],
            ].map(([c, r, i], idx) => (
              <tr key={idx}>
                <td style={S.td}>{c}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{r}</td>
                <td style={S.td}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}>
          <GarchSVG />
        </div>

        <p style={S.p}>
          Painel superior: retornos rt com envelope +/-2sigma_t (tracejado). Painel inferior: sigma_t
          estimado via recursão GARCH(1,1) com omega=0.05, alpha=0.10, beta=0.85. Observa-se claramente
          como sigma_t sobe durante os clusters de volatilidade e reverte gradualmente.
        </p>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>5. Estimação por Maxima Verosimilhança</h2>
        <p style={S.p}>
          Os parâmetros GARCH são estimados maximizando a log-verosimilhanca condicional. A função
          de verosimilhanca depende da distribuição assumida para as inovações z_t.
        </p>

        <h3 style={S.h3}>Log-Verosimilhanca Gaussiana</h3>
        
          <BlockMath math="\ell(\theta) = -\frac{1}{2}\sum_t \left[\log(2\pi) + \log(\sigma_t^2) + \frac{\varepsilon_t^2}{\sigma_t^2}\right]" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <InlineMath math="\theta = (\omega, \alpha, \beta)" /> estimados por BFGS ou Nelder-Mead
          </div>
        

        <p style={S.p}>
          Na prática, as inovações financeiras tem caudas mais pesadas do que a Normal. Distribuições
          alternativas melhoram o ajustamento e produzem estimativas mais robustas do VaR.
        </p>

        <h3 style={S.h3}>Distribuições das Inovações</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Distribuição</th>
              <th style={S.th}>Parâmetros extras</th>
              <th style={S.th}>Vantagem</th>
              <th style={S.th}>Uso tipico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Normal', '—', 'Simples, QML consistente', 'Estimação inicial'],
              ['t-Student', 'graus de liberdade nu', 'Caudas pesadas', 'VaR, stress testing'],
              ['t assimétrica (skewed-t)', 'nu, skewness xi', 'Caudas + assimetria', 'Acções individuais'],
              ['GED', 'shape kappa', 'Flexivel nas caudas', 'Mercados emergentes'],
            ].map(([d, p, v, u], i) => (
              <tr key={i}>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{v}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Estimativas Tipicas para Dados Diarios</h3>
        <BlockMath math="\omega \approx 0.0001 \;\;|\;\; \alpha \approx 0.10 \;\;|\;\; \beta \approx 0.85 \;\;|\;\; \alpha+\beta \approx 0.95" />

        <h3 style={S.h3}>Comparação de Modelos via AIC/BIC</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Parâmetros</th>
              <th style={S.th}>AIC</th>
              <th style={S.th}>BIC</th>
              <th style={S.th}>Log-lik</th>
            </tr>
          </thead>
          <tbody>
            {[
              { model: 'GARCH(1,1) Normal', params: 3, aic: '-4.821', bic: '-4.798', ll: '2418.5' },
              { model: 'GARCH(1,1) t', params: 4, aic: '-4.863', bic: '-4.834', ll: '2440.2' },
              { model: 'GARCH(1,2) Normal', params: 4, aic: '-4.820', bic: '-4.791', ll: '2418.0' },
              { model: 'EGARCH(1,1) t', params: 5, aic: '-4.877', bic: '-4.840', ll: '2447.9', best: true },
              { model: 'GJR-GARCH(1,1) t', params: 5, aic: '-4.870', bic: '-4.833', ll: '2444.3' },
            ].map((row, i) => (
              <tr key={i} style={row.best ? { background: 'rgba(74,158,237,0.10)' } : {}}>
                <td style={{ ...S.td, fontWeight: row.best ? 700 : 400, color: row.best ? color : 'var(--text-primary)' }}>
                  {row.model}{row.best ? ' *' : ''}
                </td>
                <td style={S.td}>{row.params}</td>
                <td style={S.td}>{row.aic}</td>
                <td style={S.td}>{row.bic}</td>
                <td style={S.td}>{row.ll}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          O EGARCH(1,1) com inovações t-Student (*) apresenta melhor AIC e BIC neste exemplo. Na
          prática, o GARCH(1,1) simples e frequentemente competitivo (principio da parcimonia de
          Hansen e Lunde, 2005).
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>6. Efeito de Alavancagem e Modelos Assimetricos</h2>
        <p style={S.p}>
          Um facto empírico bem documentado em mercados de acções e que retornos negativos (mas noticias)
          tendem a aumentar a volatilidade mais do que retornos positivos de igual magnitude. Este
          fenomeno e conhecido como <strong>efeito de alavancagem</strong> (leverage effect) ou
          volatility asymmetry.
        </p>

        <h3 style={S.h3}>GJR-GARCH (Glosten, Jagannathan, Runkle, 1993)</h3>
        
          <BlockMath math="\sigma_t^2 = \omega + (\alpha + \gamma\cdot\mathbf{1}[\varepsilon_{t-1}<0])\,\varepsilon_{t-1}^2 + \beta\,\sigma_{t-1}^2" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <InlineMath math="\mathbf{1}[\cdot] = 1" /> se <InlineMath math="\varepsilon_{t-1} < 0" />, 0 caso contrário &nbsp;|&nbsp; Efeito negativo: <InlineMath math="\alpha + \gamma" /> &nbsp;|&nbsp; Efeito positivo: <InlineMath math="\alpha" />
          </div>
        
        <p style={S.p}>
          Tipicamente gamma &gt; 0, confirmando que mas noticias aumentam mais a volatilidade.
          O efeito total de um choque negativo e (alpha + gamma) vs. alpha para um choque positivo.
        </p>

        <h3 style={S.h3}>EGARCH — Nelson (1991)</h3>
        
          <BlockMath math="\log(\sigma_t^2) = \omega + \alpha|z_{t-1}| + \gamma z_{t-1} + \beta\log(\sigma_{t-1}^2)" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <InlineMath math="z_{t-1} = \varepsilon_{t-1}/\sigma_{t-1}" /> (inovação estandardizada) &nbsp;|&nbsp; <InlineMath math="\gamma < 0" /> implica efeito de alavancagem
          </div>
        
        <p style={S.p}>
          A formulação logaritmica do EGARCH garante sigma_t² &gt; 0 sem necessidade de impor restrições
          de sinal sobre os parâmetros. O coeficiente gamma captura directamente o efeito de alavancagem.
        </p>

        <h3 style={S.h3}>Curva de Impacto de Noticias (News Impact Curve)</h3>
        <p style={S.p}>
          A NIC representa sigma_t² como função de epsilon_(t-1), mantendo sigma_(t-1)² no seu valor incondicional.
          Para o GARCH simétrico e uma parabola; para o GJR-GARCH e assimétrica com o ramo esquerdo mais inclinado.
        </p>

        <div style={S.diagram}>
          <NewsImpactSVG />
        </div>

        <div style={S.note}>
          A linha continua (GARCH simétrico) tem a mesma inclinação para choques positivos e negativos.
          A linha tracejada (GJR-GARCH) tem o ramo esquerdo mais ingreme: choques negativos de igual
          magnitude geram mais volatilidade do que choques positivos.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>7. Previsão de Volatilidade e Value at Risk</h2>
        <p style={S.p}>
          Uma das principais utilizações dos modelos GARCH é produzir previsões de volatilidade e,
          a partir destas, calcular medidas de risco como o Value at Risk (VaR).
        </p>

        <h3 style={S.h3}>Previsão h-Step GARCH(1,1)</h3>
        
          <BlockMath math="E[\sigma^2_{t+h} \mid \mathcal{F}_t] = \sigma^2 + (\alpha+\beta)^{h-1}(\sigma^2_{t+1} - \sigma^2)" />
          <BlockMath math="\sigma^2 = \frac{\omega}{1 - \alpha - \beta} \quad \text{(variância incondicional)}" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Quando <InlineMath math="h \to \infty" />: <InlineMath math="E[\sigma^2_{t+h}] \to \sigma^2" /> (mean reversion)
          </div>
        

        <p style={S.p}>
          Para horizontes longos, a previsão converge para a variância incondicional a uma taxa determinada
          por alpha+beta. Quando alpha+beta ≈ 0.97, a convergência é muito lenta — a volatilidade
          presente continua a ser informativa mesmo para previsões a 30 dias.
        </p>

        <h3 style={S.h3}>Value at Risk com GARCH</h3>
        
          <BlockMath math="\text{VaR}_\alpha = \mu_t - z_\alpha\,\sigma_t" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <InlineMath math="z_\alpha = 1.645" /> para <InlineMath math="\alpha = 5\%" /> (Normal) &nbsp;|&nbsp; <InlineMath math="z_\alpha = 2.326" /> para <InlineMath math="\alpha = 1\%" /> (Normal)
          </div>
        

        <p style={S.p}>
          Ao usar sigma_t dinâmico em vez de sigma constante, o VaR-GARCH e mais conservador em períodos
          volateis e mais permissivo em períodos calmos — adaptando-se as condições de mercado.
        </p>

        <div style={S.diagram}>
          <VaRSVG />
        </div>

        <p style={S.p}>
          A area sombreada representa a regiao de perda que excede o VaR a 95% — os 5% piores resultados.
          Com inovações t-Student, esta area e ligeiramente mais alargada, produzindo um VaR mais conservador.
        </p>

        <h3 style={S.h3}>Backtesting do VaR</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Teste</th>
              <th style={S.th}>H0</th>
              <th style={S.th}>Referência</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Kupiec (1995)', 'Frequência de violações = alpha', 'Proportion of Failures (POF)'],
              ['Christoffersen (1998)', 'Violações independentes e iid', 'Coverage + independence'],
              ['DQ Test (Engle & Manganelli)', 'Hit sequence sem autocorrelação', 'Dynamic Quantile Test'],
            ].map(([t, h, r], i) => (
              <tr key={i}>
                <td style={S.td}>{t}</td>
                <td style={S.td}>{h}</td>
                <td style={S.td}>{r}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>8. DCC-GARCH — Correlações Dinamicas</h2>
        <p style={S.p}>
          O modelo <strong>Dynamic Conditional Correlation GARCH</strong> (DCC), proposto por Engle (2002),
          estende o GARCH multivariado permitindo que as correlações entre activos variem ao longo do tempo.
        </p>

        <BlockMath math="H_t = D_t R_t D_t" />
          <BlockMath math="D_t = \text{diag}(\sigma_{1t},\sigma_{2t},\ldots,\sigma_{kt})" />
          <BlockMath math="R_t = Q_t^{*-1} Q_t Q_t^{*-1}, \quad Q_t = (1-a-b)\bar{Q} + a\,z_{t-1}z'_{t-1} + b\,Q_{t-1}" />

        <p style={S.p}>
          A estimação e feita em dois passos: primeiro estimam-se os GARCH univariados para cada serie;
          depois estimam-se os parâmetros de correlação dinâmica (a, b) a partir dos residuos
          estandardizados. Esta abordagem torna o DCC escalavel para carteiras com muitos activos.
        </p>

        <h3 style={S.h3}>Aplicações do DCC-GARCH</h3>
        <ul style={{ paddingLeft: '1.4rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '1rem' }}>
          <li><strong>Risco de carteira:</strong> calcular VaR multivariado com correlações variaveis.</li>
          <li><strong>Cobertura dinâmica (hedging):</strong> racios de cobertura que se ajustam com as correlações.</li>
          <li><strong>Detecção de contagio:</strong> correlações que sobem durante crises financeiras.</li>
          <li><strong>Gestao de activos:</strong> diversificação efectiva em função das correlações correntes.</li>
        </ul>

        <div style={S.note}>
          Durante crises (2008, COVID-19), as correlações entre activos de risco tendem a convergir
          para 1 — o chamado efeito "correlation breakdown" que reduz os beneficios da diversificação
          exactamente quando mais são necessários. O DCC captura este fenomeno.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>9. Volatilidade Realizada e HAR-RV</h2>
        <p style={S.p}>
          Com dados de alta frequência (tick-by-tick, 1 minuto, 5 minutos), e possível estimar a
          volatilidade de cada dia directamente a partir dos dados intradias, sem necessitar de um
          modelo parametrico.
        </p>

        <h3 style={S.h3}>Volatilidade Realizada</h3>
        
          <BlockMath math="\text{RV}_t = \sum_i r_{t,i}^2" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <InlineMath math="r_{t,i}" /> = retorno intradiário do período <InlineMath math="i" /> no dia <InlineMath math="t" /> &nbsp;|&nbsp; Frequência típica: 5 minutos (78 obs/dia para mercado EUA)
          </div>
        

        <p style={S.p}>
          Quando o número de observações intradias cresce, RV_t converge para a variância quadratica
          integrada (variância "verdadeira" do dia), tornando-se uma estimativa quase sem erro de
          medição. Contudo, microestrutura (bid-ask bounce, asynchronous trading) pode introduzir
          ruido que exige correcções.
        </p>

        <h3 style={S.h3}>Modelo HAR-RV (Corsi, 2009)</h3>
        
          <BlockMath math="\text{RV}_t = c + \beta_d\,\text{RV}_{t-1} + \beta_w\,\overline{\text{RV}}_{t-5} + \beta_m\,\overline{\text{RV}}_{t-22} + \varepsilon_t" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <InlineMath math="\overline{\text{RV}}_{t-5}" /> = média das últimas 5 semanas de RV &nbsp;|&nbsp; <InlineMath math="\overline{\text{RV}}_{t-22}" /> = média dos últimos 22 dias (aprox. 1 mês) de RV
          </div>
        

        <p style={S.p}>
          O HAR-RV e um modelo de heterogeneidade ao nível do agente: operadores de curto prazo
          respondem a RV_(t-1) (diario), gestores de medio prazo a RV_bar_(t-5) (semanal) e investidores
          institucionais a RV_bar_(t-22) (mensal). Apesar da sua simplicidade, o HAR-RV supera muitos
          modelos GARCH em previsão out-of-sample.
        </p>

        <h3 style={S.h3}>Comparação: GARCH vs. Volatilidade Realizada</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>GARCH</th>
              <th style={S.th}>Volatilidade Realizada</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Dados necessários', 'Retornos diarios', 'Dados intradias (HF)'],
              ['Tipo de modelo', 'Parametrico', 'Semi-parametrico / não-param.'],
              ['Erro de medição', 'sigma_t e latente', 'RV_t ≈ variância verdadeira'],
              ['Previsão curto prazo', 'Razoavel', 'Superior (HAR-RV)'],
              ['Previsão longo prazo', 'Mean-reversion lenta', 'HAR-RV em escala RV'],
              ['Complexidade', 'Baixa–média', 'Requer infra HF'],
              ['Uso em VaR', 'Padrão regulatorio', 'Crescente adoção'],
            ].map(([d, g, rv], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600 }}>{d}</td>
                <td style={S.td}>{g}</td>
                <td style={S.td}>{rv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
