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
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ── Diagrama: fluxo ARIMA ── */
function FlowchartARIMA() {
  const nodes = [
    { id: 'orig', x: 60, y: 20, label: 'Série original' },
    { id: 'adf',  x: 60, y: 90, label: 'Testar raiz unitária (ADF)' },
    { id: 'i1',   x: 60, y: 160, label: 'I(1)? → Diferenciar' },
    { id: 'dy',   x: 60, y: 230, label: 'Série Δyₜ estacionária' },
    { id: 'arma', x: 60, y: 300, label: 'Ajustar ARMA(p,q) a Δyₜ' },
    { id: 'res',  x: 60, y: 370, label: 'ARIMA(p,1,q)' },
  ];
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 340 420" style={{ width: '100%', maxHeight: 420 }}>
        {nodes.map((n, i) => (
          <g key={n.id}>
            <rect x={10} y={n.y} width={320} height={38} rx={8}
              fill={i === nodes.length - 1 ? color : 'var(--bg-secondary)'}
              stroke={color} strokeWidth={1.5} />
            <text x={170} y={n.y + 23} textAnchor="middle" fontSize={13}
              fill={i === nodes.length - 1 ? '#fff' : 'var(--text-primary)'} fontWeight={i === nodes.length - 1 ? 700 : 400}>
              {n.label}
            </text>
            {i < nodes.length - 1 && (
              <line x1={170} y1={n.y + 38} x2={170} y2={n.y + 60}
                stroke={color} strokeWidth={1.5} markerEnd="url(#arr)" />
            )}
          </g>
        ))}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 Z" fill={color} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

/* ── Diagrama: Diferenciação – 3 painéis ── */
const origData = [12,14,13,16,18,17,20,22,21,24,26,25,28,30,29,32,34,33,36,38,37,40,42,41,44];
const diff1 = origData.slice(1).map((v, i) => v - origData[i]);
const diff2 = diff1.slice(1).map((v, i) => v - diff1[i]);

function miniPath(data, xScale, yScale, yMid) {
  return data.map((v, i) => `${i === 0 ? 'M' : 'L'}${xScale(i)},${yMid - v * yScale}`).join(' ');
}

function DiffPanels() {
  const W = 700, panH = 80, gap = 30, pad = 40;
  const xS = (i) => pad + i * ((W - pad * 2) / (origData.length - 1));
  const xS1 = (i) => pad + i * ((W - pad * 2) / (diff1.length - 1));
  const xS2 = (i) => pad + i * ((W - pad * 2) / (diff2.length - 1));

  const totalH = panH * 3 + gap * 2 + 60;
  const y0 = 30, y1 = y0 + panH + gap, y2 = y1 + panH + gap;

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${totalH}`} style={{ width: '100%' }}>
        {/* Panel 0: original */}
        <text x={pad} y={y0 - 8} fontSize={11} fill={color} fontWeight={700}>Série original (tendência)</text>
        <line x1={pad} y1={y0 + panH} x2={W - pad} y2={y0 + panH} stroke="var(--text-secondary)" strokeWidth={1} />
        <path d={miniPath(origData, xS, 1.5, y0 + panH - 10)} fill="none" stroke={color} strokeWidth={1.8} />

        {/* Panel 1: 1st diff */}
        <text x={pad} y={y1 - 8} fontSize={11} fill={color} fontWeight={700}>1ª diferença Δyₜ (aprox. estacionária)</text>
        <line x1={pad} y1={y1 + panH / 2} x2={W - pad} y2={y1 + panH / 2} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4,3" />
        <path d={miniPath(diff1, xS1, 8, y1 + panH / 2)} fill="none" stroke="#f97316" strokeWidth={1.8} />

        {/* Panel 2: 2nd diff */}
        <text x={pad} y={y2 - 8} fontSize={11} fill={color} fontWeight={700}>2ª diferença Δ²yₜ (estacionária, mais ruidosa)</text>
        <line x1={pad} y1={y2 + panH / 2} x2={W - pad} y2={y2 + panH / 2} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4,3" />
        <path d={miniPath(diff2, xS2, 12, y2 + panH / 2)} fill="none" stroke="#f97316" strokeWidth={1.8} />
      </svg>
    </div>
  );
}

/* ── Box-Jenkins: diagrama circular ── */
function BoxJenkinsDiagram() {
  const W = 500, H = 320;
  const cx = W / 2, cy = H / 2, R = 110;
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
          <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 Z" fill={color} />
          </marker>
          <marker id="arrRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 Z" fill="#f97316" />
          </marker>
        </defs>
        {/* arcs between nodes */}
        {steps.map((s, i) => {
          const next = steps[(i + 1) % steps.length];
          const x1 = nx(s.angle), y1 = ny(s.angle);
          const x2 = nx(next.angle), y2 = ny(next.angle);
          const mx = cx + (R + 28) * Math.cos((s.angle + next.angle) / 2);
          const my = cy + (R + 28) * Math.sin((s.angle + next.angle) / 2);
          return (
            <path key={i} d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
              fill="none" stroke={color} strokeWidth={1.6} markerEnd="url(#arr2)" />
          );
        })}
        {/* feedback arrow: Diagnóstico → Identificação */}
        <path d={`M${nx(Math.PI / 2)},${ny(Math.PI / 2)} C${cx - 20},${cy + 150} ${cx - 160},${cy + 80} ${nx(-Math.PI / 2) - 2},${ny(-Math.PI / 2) + 2}`}
          fill="none" stroke="#f97316" strokeWidth={1.4} strokeDasharray="5,3" markerEnd="url(#arrRed)" />
        <text x={cx - 105} y={cy + 165} fontSize={10} fill="#f97316" textAnchor="middle">Reformular</text>
        {/* nodes */}
        {steps.map((s, i) => (
          <g key={i}>
            <circle cx={nx(s.angle)} cy={ny(s.angle)} r={36} fill={color} opacity={0.92} />
            <text x={nx(s.angle)} y={ny(s.angle) - 4} textAnchor="middle" fontSize={11} fill="#fff" fontWeight={700}>{s.label}</text>
            <text x={nx(s.angle)} y={ny(s.angle) + 12} textAnchor="middle" fontSize={10} fill="rgba(255,255,255,0.8)">{s.sub}</text>
            <text x={nx(s.angle)} y={ny(s.angle) + 24} textAnchor="middle" fontSize={11} fill="#fff" fontWeight={400}>
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
  const W = 680, H = 220, padL = 40, padR = 20, padT = 20, padB = 30;
  const histLen = 18;
  const hist = Array.from({ length: histLen }, (_, i) => 50 + i * 1.4 + Math.sin(i * 0.8) * 6);
  const forecasts = [67, 69, 71, 72.5, 74, 75.5];
  const ci95 = [3, 5.5, 8, 10, 12, 14];
  const ci80 = [1.8, 3.2, 4.8, 6, 7.2, 8.4];

  const allN = histLen + forecasts.length;
  const xScale = (i) => padL + (i / (allN - 1)) * (W - padL - padR);
  const allVals = [...hist, ...forecasts.map((v, i) => v + ci95[i]), ...forecasts.map((v, i) => v - ci95[i])];
  const minV = Math.min(...allVals) - 2;
  const maxV = Math.max(...allVals) + 2;
  const yScale = (v) => padT + (1 - (v - minV) / (maxV - minV)) * (H - padT - padB);

  const histPath = hist.map((v, i) => `${i === 0 ? 'M' : 'L'}${xScale(i)},${yScale(v)}`).join(' ');
  const fcastPath = forecasts.map((v, i) => `${i === 0 ? `M${xScale(histLen - 1)},${yScale(hist[histLen - 1])} L` : 'L'}${xScale(histLen + i)},${yScale(v)}`).join(' ');

  const upper95 = forecasts.map((v, i) => `${i === 0 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v + ci95[i])}`).join(' ');
  const lower95 = forecasts.map((v, i) => `${i === forecasts.length - 1 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v - ci95[i])}`).join(' ');
  const fanArea95 = `${upper95} ${lower95.replace('M', 'L')} Z`;

  const upper80 = forecasts.map((v, i) => `${i === 0 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v + ci80[i])}`).join(' ');
  const lower80 = forecasts.map((v, i) => `${i === forecasts.length - 1 ? 'M' : 'L'}${xScale(histLen + i)},${yScale(v - ci80[i])}`).join(' ');
  const fanArea80 = `${upper80} ${lower80.replace('M', 'L')} Z`;

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%' }}>
        {/* axes */}
        <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1} />
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--text-secondary)" strokeWidth={1} />
        {/* fan areas */}
        <path d={fanArea95} fill={color} opacity={0.12} />
        <path d={fanArea80} fill={color} opacity={0.2} />
        {/* history */}
        <path d={histPath} fill="none" stroke={color} strokeWidth={2} />
        {/* forecast */}
        <path d={fcastPath} fill="none" stroke={color} strokeWidth={2} strokeDasharray="6,4" />
        {/* vertical divider */}
        <line x1={xScale(histLen - 1)} y1={padT} x2={xScale(histLen - 1)} y2={H - padB}
          stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4,3" />
        {/* h labels */}
        {forecasts.map((_, i) => (
          <text key={i} x={xScale(histLen + i)} y={H - padB + 14} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">
            h={i + 1}
          </text>
        ))}
        <text x={xScale(histLen / 2)} y={padT - 4} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">Histórico</text>
        <text x={xScale(histLen + 2.5)} y={padT - 4} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>Previsão</text>
        {/* legend */}
        <rect x={W - 160} y={padT} width={12} height={10} fill={color} opacity={0.35} />
        <text x={W - 144} y={padT + 9} fontSize={10} fill="var(--text-secondary)">IC 95%</text>
        <rect x={W - 160} y={padT + 16} width={12} height={10} fill={color} opacity={0.5} />
        <text x={W - 144} y={padT + 25} fontSize={10} fill="var(--text-secondary)">IC 80%</text>
      </svg>
    </div>
  );
}

/* ── Sazonalidade: 2 painéis ── */
const seasonalRaw = Array.from({ length: 48 }, (_, i) => 50 + 20 * Math.sin((2 * Math.PI * i) / 12) + i * 0.5);
const seasonalDiff = seasonalRaw.slice(12).map((v, i) => v - seasonalRaw[i]);

function SeasonalPanels() {
  const W = 680, panH = 90, padL = 36, padR = 16, gap = 40;
  const totalH = panH * 2 + gap + 60;

  const minR = Math.min(...seasonalRaw), maxR = Math.max(...seasonalRaw);
  const minD = Math.min(...seasonalDiff), maxD = Math.max(...seasonalDiff);

  const xR = (i) => padL + (i / (seasonalRaw.length - 1)) * (W - padL - padR);
  const yR = (v) => 30 + panH - ((v - minR) / (maxR - minR)) * (panH - 4);

  const xD = (i) => padL + (i / (seasonalDiff.length - 1)) * (W - padL - padR);
  const yD = (v) => 30 + panH + gap + panH / 2 - ((v - (minD + maxD) / 2) / ((maxD - minD) / 2)) * (panH / 2 - 4);

  const pathR = seasonalRaw.map((v, i) => `${i === 0 ? 'M' : 'L'}${xR(i)},${yR(v)}`).join(' ');
  const pathD = seasonalDiff.map((v, i) => `${i === 0 ? 'M' : 'L'}${xD(i)},${yD(v)}`).join(' ');

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${totalH}`} style={{ width: '100%' }}>
        <text x={padL} y={20} fontSize={11} fill={color} fontWeight={700}>Série original com sazonalidade</text>
        <path d={pathR} fill="none" stroke={color} strokeWidth={1.8} />

        <text x={padL} y={30 + panH + gap - 6} fontSize={11} fill="#f97316" fontWeight={700}>Diferença sazonal (1-L¹²)yₜ = yₜ - yₜ₋₁₂</text>
        <line x1={padL} y1={30 + panH + gap + panH / 2} x2={W - padR} y2={30 + panH + gap + panH / 2}
          stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4,3" />
        <path d={pathD} fill="none" stroke="#f97316" strokeWidth={1.8} />
      </svg>
    </div>
  );
}

/* ── ACF/PACF Sazonal interactivo ── */
function SeasonalACFPlot({ type }) {
  const lags = Array.from({ length: 30 }, (_, i) => i + 1);
  const getHeight = (lag) => {
    if (type === 'AR') {
      if (lag % 12 === 0) return Math.max(0.1, 0.85 - Math.floor(lag / 12) * 0.28);
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
    const seed = lag * 137 % 100;
    return (seed < 50 ? 1 : -1) * (seed % 15) / 100;
  });
  const maValues = lags.map((lag) => {
    if (lag === 12) return 0.82;
    if (lag % 12 === 0) return 0.07;
    const seed = lag * 97 % 100;
    return (seed < 50 ? 1 : -1) * (seed % 10) / 100;
  });
  const values = type === 'AR' ? arValues : maValues;

  const W = 600, H = 160, padL = 36, padR = 10, padT = 10, padB = 30;
  const xScale = (i) => padL + (i / (lags.length - 1)) * (W - padL - padR);
  const yMid = padT + (H - padT - padB) / 2;
  const yScale = (v) => yMid - v * ((H - padT - padB) / 2 - 4);
  const ci = 0.2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%' }}>
      {/* CI bands */}
      <rect x={padL} y={yScale(ci)} width={W - padL - padR} height={yScale(-ci) - yScale(ci)}
        fill={color} opacity={0.08} />
      <line x1={padL} y1={yScale(ci)} x2={W - padR} y2={yScale(ci)} stroke={color} strokeWidth={1} strokeDasharray="4,2" opacity={0.4} />
      <line x1={padL} y1={yScale(-ci)} x2={W - padR} y2={yScale(-ci)} stroke={color} strokeWidth={1} strokeDasharray="4,2" opacity={0.4} />
      {/* zero line */}
      <line x1={padL} y1={yMid} x2={W - padR} y2={yMid} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* bars */}
      {values.map((v, i) => (
        <rect key={i} x={xScale(i) - 5} y={v >= 0 ? yScale(v) : yMid}
          width={10} height={Math.abs(yScale(v) - yMid)}
          fill={lags[i] % 12 === 0 ? color : 'var(--text-secondary)'} opacity={lags[i] % 12 === 0 ? 0.9 : 0.4} />
      ))}
      {/* lag labels */}
      {[12, 24].map((l) => (
        <text key={l} x={xScale(l - 1)} y={H - padB + 16} textAnchor="middle" fontSize={10} fill={color} fontWeight={700}>
          {l}
        </text>
      ))}
      {[6, 18].map((l) => (
        <text key={l} x={xScale(l - 1)} y={H - padB + 16} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">
          {l}
        </text>
      ))}
      <text x={padL - 4} y={yMid + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">0</text>
      <text x={padL - 4} y={yScale(0.8) + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">0.8</text>
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Desfasamento (lag)</text>
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
        <button style={tabStyle('AR')} onClick={() => setTab('AR')}>Sazonal AR</button>
        <button style={tabStyle('MA')} onClick={() => setTab('MA')}>Sazonal MA</button>
      </div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        {tab === 'AR'
          ? 'ACF do processo SAR(1)₁₂: spikes decrescentes nos múltiplos de 12 (lags 12, 24, …)'
          : 'ACF do processo SMA(1)₁₂: spike significativo apenas no lag 12, corte abrupto'}
      </div>
      <SeasonalACFPlot type={tab} />
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
export default function ST13() {
  return (
    <div style={S.page}>
      {/* back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* header */}
      <div style={S.tag}>MÓDULO 13</div>
      <h1 style={S.h1}>Modelos ARIMA &amp; SARIMA</h1>
      <p style={S.lead}>
        Os modelos ARIMA e SARIMA constituem a espinha dorsal da análise clássica de séries temporais univariadas.
        Combinam componentes autorregressivos, de médias móveis e de diferenciação para modelar séries não
        estacionárias e, no caso do SARIMA, padrões sazonais regulares.
      </p>

      {/* ── 1. De ARMA a ARIMA ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. De ARMA a ARIMA</h2>
        <p style={S.p}>
          Um processo ARMA(p,q) exige estacionariedade. Quando a série apresenta raiz unitária — tendência
          estocástica — é necessário diferenciar <em>d</em> vezes antes de ajustar um ARMA. O resultado é um
          modelo ARIMA(<em>p</em>,<em>d</em>,<em>q</em>).
        </p>
        
          <strong>Representação polinomial:</strong>
          <BlockMath math="\Phi(L)(1-L)^d y_t = \Theta(L)\varepsilon_t" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            onde <InlineMath math="\Phi(L) = 1 - \phi_1 L - \cdots - \phi_p L^p" /> e <InlineMath math="\Theta(L) = 1 + \theta_1 L + \cdots + \theta_q L^q" />,
            <InlineMath math="L" /> é o operador de retardo (<InlineMath math="Ly_t = y_{t-1}" />) e <InlineMath math="d" /> é a ordem de integração.
          </div>
        
        <p style={S.p}>
          Casos especiais importantes:
        </p>
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
                <td style={S.td}><code>{b}</code></td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          A ordem <em>d</em> é determinada por testes de raiz unitária como o teste ADF
          (Augmented Dickey-Fuller) ou o teste KPSS. O fluxo de trabalho típico:
        </p>
        <FlowchartARIMA />
        <div style={S.note}>
          Convenção: ARIMA(p,0,q) equivale a ARMA(p,q). Uma série I(2) requer d = 2 diferenciações,
          mas na prática d = 1 é o mais comum em dados económicos e financeiros.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Diferenciação ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Diferenciação</h2>
        <p style={S.p}>
          A primeira diferença remove tendência linear estocástica:
        </p>
        <BlockMath math="\Delta y_t = y_t - y_{t-1} = (1-L)y_t" />
        <p style={S.p}>
          A segunda diferença remove tendência quadrática:
        </p>
        <BlockMath math="\Delta^2 y_t = \Delta y_t - \Delta y_{t-1} = (1-L)^2 y_t" />
        <p style={S.p}>
          Cada diferenciação reduz a amostra em uma observação. Diferenciar em excesso
          (over-differencing) aumenta a variância e introduz raízes MA no limite unitário —
          sinal de modelo sobrediferenciado. O gráfico abaixo ilustra o efeito visual das
          diferenciações sucessivas.
        </p>
        <DiffPanels />
        <div style={S.note}>
          Regra prática: se a série original tem autocorrelações muito persistentes (ACF decai
          lentamente), d = 1 é provavelmente necessário. Se após d = 1 a ACF continua persistente,
          considere d = 2 — mas raramente se ultrapassa d = 2.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Metodologia Box-Jenkins ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Metodologia Box-Jenkins</h2>
        <p style={S.p}>
          George Box e Gwilym Jenkins sistematizaram em 1970 um processo iterativo de quatro etapas
          para identificar, estimar, diagnosticar e utilizar modelos ARIMA. O método permanece
          relevante e é a base dos algoritmos automáticos modernos.
        </p>
        <BoxJenkinsDiagram />
        <h3 style={S.h3}>Etapa 1 — Identificação</h3>
        <p style={S.p}>
          Analisar a ACF e a PACF da série diferenciada. A ACF corta após q desfasamentos
          (processo MA). A PACF corta após p desfasamentos (processo AR). Padrões mistos
          sugerem um ARMA(p,q).
        </p>
        <h3 style={S.h3}>Etapa 2 — Estimação</h3>
        <p style={S.p}>
          Os parâmetros φ₁,…,φₚ e θ₁,…,θ_q são estimados por máxima verossimilhança (MLE),
          maximizando L(φ,θ | y₁,…,yₙ). Para modelos com d {'>'} 0 utiliza-se a verossimilhança
          condicional ou a exact MLE via filtro de Kalman.
        </p>
        <h3 style={S.h3}>Etapa 3 — Diagnóstico</h3>
        <p style={S.p}>
          Os resíduos do modelo ajustado devem comportar-se como ruído branco:
          média zero, variância constante, sem autocorrelação. O teste de Ljung-Box testa
          formalmente H₀: ρ₁=⋯=ρₘ=0. Q-Q plots e histogramas avaliam a normalidade.
        </p>
        <h3 style={S.h3}>Etapa 4 — Previsão</h3>
        <p style={S.p}>
          Com o modelo validado, calculam-se previsões h-passos à frente com os respetivos
          intervalos de confiança. Se o diagnóstico reprovar o modelo, regressa-se à etapa 1
          (seta "Reformular" no diagrama).
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Seleção p, d, q ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Selecção de p, d, q</h2>
        <p style={S.p}>
          Dois critérios de informação dominam a seleção de modelos ARIMA. Ambos penalizam
          a complexidade mas de forma diferente:
        </p>
        
          <BlockMath math="\text{AIC} = -2\log L + 2k" />
          <BlockMath math="\text{BIC} = -2\log L + k\cdot\log(n)" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <em>k</em> = número de parâmetros, <em>n</em> = dimensão amostral. Valores mais baixos indicam melhor modelo.
          </div>
        
        <p style={S.p}>
          O BIC penaliza mais a complexidade do que o AIC (log(n) {'>'} 2 para n {'>'} 7) e tende
          a selecionar modelos mais parcimoniosos. Na prática, quando AIC e BIC discordam,
          privilegia-se o BIC se a previsão for o objetivo principal.
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
              <tr key={i} style={i === 2 ? { background: 'rgba(249,115,22,0.06)' } : {}}>
                <td style={S.td}><code>{m}</code></td>
                <td style={S.td}>{k}</td>
                <td style={S.td}>{aic}{i === 2 ? ' ★' : ''}</td>
                <td style={S.td}>{bic}</td>
                <td style={S.td}>{lb}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A linha destacada (★) indica o modelo selecionado pelo AIC. O ARIMA(1,1,1) tem AIC
          mínimo, mas o ARIMA(0,1,1) tem BIC mínimo — o princípio da parcimónia favorece este último.
        </div>
        <h3 style={S.h3}>auto.arima() — pesquisa em grelha</h3>
        <p style={S.p}>
          A função <code>auto.arima()</code> do pacote <code>forecast</code> (R) automatiza o processo:
          testa múltiplas combinações de (p, d, q) dentro de limites pré-definidos (por defeito
          p,q ≤ 5, d ≤ 2), calcula o AIC de cada modelo e seleciona o melhor. A pesquisa usa
          uma heurística stepwise para evitar avaliar todos os modelos possíveis.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Previsão ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Previsão com ARIMA</h2>
        <p style={S.p}>
          A previsão h-passos à frente, ŷₜ₊ₕ|ₜ, é calculada iterativamente: a previsão de um
          passo alimenta a do passo seguinte. Para um ARIMA(p,d,q), a previsão converge
          para a média a longo prazo (se d = 0) ou para uma tendência determinística (se d ≥ 1).
        </p>
        
          <BlockMath math="\hat{y}_{t+h|t} = E[y_{t+h} \mid \mathcal{I}_t]" />
          <BlockMath math="\text{Intervalo de 95\%: } \hat{y}_{t+h|t} \pm 1.96\,\sigma_h" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            onde <InlineMath math="\sigma_h" /> aumenta com <InlineMath math="h" /> (incerteza cumulativa).
          </div>
        
        <p style={S.p}>
          Uma propriedade fundamental: os intervalos de previsão alargam-se com o horizonte h.
          Para o passeio aleatório ARIMA(0,1,0), σₕ = σ√h — cresce com a raiz quadrada do
          horizonte. O "leque" de incerteza é visível no gráfico abaixo.
        </p>
        <ForecastFan />
        <div style={S.note}>
          A zona mais escura representa o IC de 80%, a zona mais clara o IC de 95%.
          O intervalo de 95% cobre aproximadamente ±1.96 erros padrão.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Sazonalidade ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Sazonalidade</h2>
        <p style={S.p}>
          Muitas séries exibem padrões que se repetem a cada <em>m</em> períodos:
          vendas mensais (m = 12), dados trimestrais (m = 4), horários (m = 24). Um ARIMA
          simples não consegue capturar estes padrões adequadamente.
        </p>
        <p style={S.p}>
          A diferenciação sazonal remove padrões sazonais estocásticos:
        </p>
        
          <BlockMath math="(1 - L^m)y_t = y_t - y_{t-m}" />
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Análogo à diferenciação regular, mas comparando com o período homólogo.
          </div>
        
        <p style={S.p}>
          Abaixo, uma série com sazonalidade clara (amplitude de ~40 unidades por ciclo)
          e o resultado após diferenciação sazonal com m = 12:
        </p>
        <SeasonalPanels />
        <div style={S.note}>
          Após a diferenciação sazonal a série fica aproximadamente estacionária em torno
          de zero. A variância residual resulta da componente irregular da série original.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. SARIMA ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. SARIMA(p,d,q)(P,D,Q)m</h2>
        <p style={S.p}>
          O modelo SARIMA (Seasonal ARIMA) combina a estrutura ARIMA regular com componentes
          autorregressivos e de médias móveis sazonais. A notação completa é:
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
              ['p', 'AR regular', 'Nº de desfasamentos autorregressivos não sazonais'],
              ['d', 'I regular', 'Ordem de diferenciação regular'],
              ['q', 'MA regular', 'Nº de desfasamentos de médias móveis não sazonais'],
              ['P', 'AR sazonal', 'Nº de termos AR sazonais (desfasamentos em múltiplos de m)'],
              ['D', 'I sazonal', 'Nº de diferenciações sazonais'],
              ['Q', 'MA sazonal', 'Nº de termos MA sazonais'],
              ['m', 'Período', 'Comprimento do ciclo sazonal (ex.: 12 para mensal)'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}><code>{a}</code></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Exemplo: SARIMA(1,1,1)(1,1,1)₁₂</h3>
        <p style={S.p}>
          O modelo mais popular para dados mensais com tendência e sazonalidade.
          Aplicado ao clássico dataset <code>AirPassengers</code> (passageiros aéreos 1949-1960):
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>d=1 elimina a tendência crescente.</li>
          <li>D=1 elimina o padrão sazonal multiplicativo (após log-transformação).</li>
          <li>P=Q=1 captura a autocorrelação sazonal residual.</li>
          <li>p=q=1 captura autocorrelação de curto prazo.</li>
        </ul>
        <div style={S.note}>
          Para dados com sazonalidade multiplicativa (amplitude aumenta com o nível),
          aplicar log antes de ajustar o SARIMA: log(yₜ) transforma sazonalidade
          multiplicativa em aditiva.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. ACF/PACF Sazonal ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. ACF/PACF Sazonal</h2>
        <p style={S.p}>
          A identificação dos termos sazonais P e Q baseia-se nos mesmos princípios da
          identificação ARMA regular, mas observando os desfasamentos que são múltiplos
          de m. A ACF e PACF revelam a estrutura sazonal:
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
              ['Decaimento nos lag 12, 24, …', 'Corte após lag 12', 'SAR(1) → P=1'],
              ['Corte após lag 12', 'Decaimento nos lag 12, 24, …', 'SMA(1) → Q=1'],
              ['Decaimento em ambos', 'Decaimento em ambos', 'SARMA(P,Q)'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}><strong>{c}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          O painel interativo abaixo mostra a ACF típica para cada tipo de processo sazonal.
          Os spikes destacados a azul correspondem aos desfasamentos múltiplos de 12.
        </p>
        <ACFTabs />
        <div style={S.note}>
          As linhas tracejadas representam os limites de significância aproximados ±1.96/√n
          (IC de 95% sob H₀: autocorrelação nula).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Avaliação do Modelo ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Avaliação do Modelo</h2>
        <h3 style={S.h3}>Métricas in-sample</h3>
        <p style={S.p}>
          As métricas in-sample avaliam o ajustamento do modelo aos dados de treino:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>AIC / BIC</strong> — equilíbrio entre ajustamento e complexidade.</li>
          <li><strong>Teste de Ljung-Box</strong> — testa autocorrelação residual. Rejeitar H₀ indica má especificação.</li>
          <li><strong>Teste ARCH</strong> — testa heteroscedasticidade condicional nos resíduos.</li>
        </ul>
        <h3 style={S.h3}>Métricas out-of-sample</h3>
        <p style={S.p}>
          Separar os dados em treino (ex.: 80%) e teste (20%). Avaliar as previsões
          no conjunto de teste com:
        </p>
        <BlockMath math="\text{MAE} = \frac{1}{n}\sum|y_t - \hat{y}_t|" />
          <BlockMath math="\text{RMSE} = \sqrt{\frac{1}{n}\sum(y_t - \hat{y}_t)^2}" />
          <BlockMath math="\text{MAPE} = \frac{100}{n}\sum\frac{|y_t - \hat{y}_t|}{|y_t|}" />
        <p style={S.p}>
          Comparar sempre com benchmarks ingénuos — se o ARIMA não bate o Naïve, algo está mal.
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
              <tr key={i} style={best ? { background: 'rgba(249,115,22,0.06)' } : {}}>
                <td style={S.td}><strong>{best ? '★ ' : ''}</strong><code>{m}</code></td>
                <td style={S.td}>{mae}</td>
                <td style={S.td}>{rmse}</td>
                <td style={S.td}>{mape}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          O MAPE é inadequado quando yₜ pode ser zero ou próximo de zero (divisão por
          valores pequenos explode a métrica). Nesse caso prefira MAE ou RMSE.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <p style={S.p}>
          Os modelos ARIMA e SARIMA fornecem um quadro coerente para modelar séries temporais
          univariadas com tendência e/ou sazonalidade. Os pontos-chave a reter:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            { title: 'ARIMA(p,d,q)', body: 'Generaliza ARMA para séries não estacionárias via diferenciação d vezes. d=1 é o mais frequente em dados económicos.' },
            { title: 'Box-Jenkins', body: 'Processo iterativo: Identificação → Estimação → Diagnóstico → Previsão, com retroacção quando o diagnóstico falha.' },
            { title: 'AIC vs BIC', body: 'AIC favorece modelos mais complexos; BIC é mais parcimonioso. Ambos devem ser consultados, com preferência pelo BIC se o objetivo é previsão.' },
            { title: 'SARIMA', body: 'Adiciona componentes AR e MA sazonais (P,D,Q)m. Essencial para dados com ciclos regulares (m=4,12,24,…).' },
            { title: 'Diagnóstico rigoroso', body: 'Resíduos devem ser ruído branco. Ljung-Box e inspecção visual da ACF dos resíduos são etapas obrigatórias.' },
            { title: 'Benchmarks', body: 'Comparar sempre com Naïve e Naïve Sazonal. Um modelo complexo que não supera estes benchmarks simples não é útil.' },
          ].map(({ title, body }, i) => (
            <div key={i} style={{ ...S.highlight, marginBottom: 0 }}>
              <strong style={{ color, display: 'block', marginBottom: '0.4rem' }}>{title}</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{body}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
