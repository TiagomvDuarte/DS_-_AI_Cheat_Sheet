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
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ─── Interactive Variable Type Explorer ─── */
const VarTypeExplorer = () => {
  const [active, setActive] = useState(0);
  const types = [
    { name: 'Nominal', color: '#4a9eed', desc: 'Valores sem ordem lógica entre si. Apenas identificam categorias.', examples: ['Género (M/F)', 'País de origem', 'Cor dos olhos', 'Tipo de produto'], nota: 'Só podemos calcular moda e frequências. Média não faz sentido.' },
    { name: 'Ordinal', color: '#4a9eed', desc: 'Valores com ordem definida, mas sem distância mensurável entre categorias.', examples: ['Nível de educação', 'Satisfação (1–5)', 'Ranking', 'Classificação (A/B/C)'], nota: 'Podemos usar mediana e percentis. A diferença entre posições não é constante.' },
    { name: 'Discreta', color: '#4a9eed', desc: 'Valores numéricos contáveis — número finito ou infinito contável de valores possíveis.', examples: ['Número de filhos', 'Contagem de erros', 'Número de vendas', 'Número de páginas'], nota: 'Média e variância fazem sentido. Resulta tipicamente de contagens.' },
    { name: 'Contínua', color: '#4a9eed', desc: 'Pode assumir qualquer valor num intervalo — infinitos valores possíveis entre dois pontos.', examples: ['Altura (cm)', 'Temperatura', 'Peso (kg)', 'Rendimento'], nota: 'Toda a aritmética estatística se aplica. Requer distribuições contínuas.' },
  ];
  const t = types[active];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Explorador de Tipos de Variáveis</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {types.map((tp, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ padding: '0.35rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: active === i ? tp.color : 'var(--bg-primary)', color: active === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${active === i ? tp.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{tp.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${t.color}40` }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{t.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
          {t.examples.map(e => <span key={e} style={{ background: `${t.color}12`, border: `1px solid ${t.color}30`, color: t.color, fontSize: '0.78rem', fontWeight: 600, padding: '0.2rem 0.55rem', borderRadius: 8 }}>{e}</span>)}
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}> {t.nota}</p>
      </div>
    </div>
  );
};

/* ─── Taxonomy Tree SVG ─── */
const TaxonomySVG = () => (
  <svg viewBox="0 0 760 210" style={{ width: '100%', maxWidth: 760, display: 'block', margin: '0 auto' }}>
    {/* Root */}
    <rect x="300" y="10" width="160" height="36" rx="8" fill={color} />
    <text x="380" y="33" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Variável</text>

    {/* Branches to level 2 */}
    <line x1="380" y1="46" x2="380" y2="60" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="185" y1="60" x2="575" y2="60" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="185" y1="60" x2="185" y2="74" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="575" y1="60" x2="575" y2="74" stroke="var(--text-secondary)" strokeWidth="1.5" />

    {/* Qualitativa */}
    <rect x="105" y="74" width="160" height="36" rx="8" fill="#4a9eed" />
    <text x="185" y="97" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Qualitativa</text>

    {/* Quantitativa */}
    <rect x="495" y="74" width="160" height="36" rx="8" fill="#4a9eed" />
    <text x="575" y="97" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Quantitativa</text>

    {/* Branches level 2 → 3 left */}
    <line x1="185" y1="110" x2="185" y2="124" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="95" y1="124" x2="275" y2="124" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="95" y1="124" x2="95" y2="138" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="275" y1="124" x2="275" y2="138" stroke="var(--text-secondary)" strokeWidth="1.5" />

    {/* Nominal */}
    <rect x="20" y="138" width="150" height="46" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
    <text x="95" y="158" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Nominal</text>
    <text x="95" y="174" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">sem ordem</text>

    {/* Ordinal */}
    <rect x="200" y="138" width="150" height="46" rx="7" fill="rgba(14,116,144,0.12)" stroke="#4a9eed" strokeWidth="1.5" />
    <text x="275" y="158" textAnchor="middle" fill="#4a9eed" fontSize="12" fontWeight="700">Ordinal</text>
    <text x="275" y="174" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">com ordem</text>

    {/* Branches level 2 → 3 right */}
    <line x1="575" y1="110" x2="575" y2="124" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="485" y1="124" x2="665" y2="124" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="485" y1="124" x2="485" y2="138" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="665" y1="124" x2="665" y2="138" stroke="var(--text-secondary)" strokeWidth="1.5" />

    {/* Discreta */}
    <rect x="410" y="138" width="150" height="46" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
    <text x="485" y="158" textAnchor="middle" fill="#4a9eed" fontSize="12" fontWeight="700">Discreta</text>
    <text x="485" y="174" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">contável</text>

    {/* Contínua */}
    <rect x="590" y="138" width="150" height="46" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
    <text x="665" y="158" textAnchor="middle" fill="#4a9eed" fontSize="12" fontWeight="700">Contínua</text>
    <text x="665" y="174" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">mensurável</text>
  </svg>
);

/* ─── Distribution Shapes SVG (mean/median/mode positions) ─── */
const DistributionShapesSVG = () => {
  /* Colors for mean / median / mode — same hue family (blue), stepped light→dark */
  const modeColor = '#86b6ef';   // Mo (lightest)
  const medianColor = '#3987e5'; // Md
  const meanColor = '#1c5cab';   // μ (darkest)

  /* Asymmetric gaussian bump: peakT in [0,1] sets where the mode sits along
     the width; each side gets its own sigma sized so the curve returns to
     baseline (~3σ) by the edge, so the path closes cleanly with no cliff. */
  const bump = (baseX, baseline, w, peakT, height = 55, pts = 80) => {
    const sigmaLeft = (w * peakT) / 3;
    const sigmaRight = (w * (1 - peakT)) / 3;
    const arr = [];
    for (let i = 0; i <= pts; i++) {
      const t = i / pts;
      const x = baseX + w * t;
      const sigma = t < peakT ? sigmaLeft : sigmaRight;
      const z = sigma === 0 ? 0 : ((t - peakT) * w) / sigma;
      const y = baseline - height * Math.exp(-0.5 * z * z);
      arr.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    arr.push(`L${(baseX + w).toFixed(1)},${baseline}`, `L${baseX.toFixed(1)},${baseline}`, 'Z');
    return arr.join(' ');
  };

  const baseline = 100;
  /* Symmetric */
  const s1cx = 90, s1w = 120;
  /* Right skew (positive): mode leftmost, mean rightmost */
  const s2bx = 230, s2w = 140, s2peakT = 0.25;
  /* Left skew (negative): mirror of right skew */
  const s3bx = 400, s3w = 140, s3peakT = 0.75;

  return (
    <svg viewBox="0 0 600 130" style={{ width: '100%', maxWidth: 860, display: 'block', margin: '0 auto' }}>
      {/* ── Symmetric ── */}
      <path d={bump(s1cx - s1w / 2, baseline, s1w, 0.5)} fill={`${color}22`} stroke={color} strokeWidth="1.5" />
      {/* mean=median=mode at center */}
      <line x1={s1cx} y1="45" x2={s1cx} y2={baseline} stroke={color} strokeWidth="1.5" strokeDasharray="3,3" />
      <text x={s1cx} y="38" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">Média=Mediana=Moda</text>
      <text x={s1cx} y={baseline + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Simétrica</text>

      {/* ── Right skew ── */}
      <path d={bump(s2bx, baseline, s2w, s2peakT)} fill={`${color}22`} stroke={color} strokeWidth="1.5" />
      {(() => {
        const modeX = s2bx + s2w * s2peakT;
        const medX = modeX + s2w * 0.14;
        const meanX = modeX + s2w * 0.28;
        return (
          <>
            <line x1={modeX} y1="20" x2={modeX} y2={baseline} stroke={modeColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1={medX} y1="35" x2={medX} y2={baseline} stroke={medianColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1={meanX} y1="50" x2={meanX} y2={baseline} stroke={meanColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x={modeX} y="14" textAnchor="middle" fill={modeColor} fontSize="7" fontWeight="700">Mo</text>
            <text x={medX} y="29" textAnchor="middle" fill={medianColor} fontSize="7" fontWeight="700">Md</text>
            <text x={meanX} y="44" textAnchor="middle" fill={meanColor} fontSize="7" fontWeight="700">μ</text>
            <text x={s2bx + s2w * 0.55} y={baseline + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Assimetria positiva</text>
          </>
        );
      })()}

      {/* ── Left skew ── */}
      <path d={bump(s3bx, baseline, s3w, s3peakT)} fill={`${color}22`} stroke={color} strokeWidth="1.5" />
      {(() => {
        const modeX = s3bx + s3w * s3peakT;
        const medX = modeX - s3w * 0.14;
        const meanX = modeX - s3w * 0.28;
        return (
          <>
            <line x1={meanX} y1="50" x2={meanX} y2={baseline} stroke={meanColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1={medX} y1="35" x2={medX} y2={baseline} stroke={medianColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1={modeX} y1="20" x2={modeX} y2={baseline} stroke={modeColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x={meanX} y="44" textAnchor="middle" fill={meanColor} fontSize="7" fontWeight="700">μ</text>
            <text x={medX} y="29" textAnchor="middle" fill={medianColor} fontSize="7" fontWeight="700">Md</text>
            <text x={modeX} y="14" textAnchor="middle" fill={modeColor} fontSize="7" fontWeight="700">Mo</text>
            <text x={s3bx + s3w * 0.45} y={baseline + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Assimetria negativa</text>
          </>
        );
      })()}
    </svg>
  );
};

/* ─── Boxplot / IQR Number Line SVG ─── */
const IQRNumberLineSVG = () => {
  const y = 55;
  const q0x = 50, q1x = 140, q2x = 220, q3x = 310, q4x = 420;
  const whiskerY = y;
  const boxTop = y - 22, boxBot = y + 22;

  return (
    <svg viewBox="0 0 480 110" style={{ width: '100%', maxWidth: 480, display: 'block', margin: '0 auto' }}>
      {/* Axis line */}
      <line x1="30" y1={y} x2="450" y2={y} stroke="var(--text-secondary)" strokeWidth="1.5" />

      {/* Left whisker Q0 → Q1 */}
      <line x1={q0x} y1={whiskerY} x2={q1x} y2={whiskerY} stroke={color} strokeWidth="2" />
      <line x1={q0x} y1={boxTop + 10} x2={q0x} y2={boxBot - 10} stroke={color} strokeWidth="2" />

      {/* Box Q1 → Q3 */}
      <rect x={q1x} y={boxTop} width={q3x - q1x} height={boxBot - boxTop} fill={`${color}20`} stroke={color} strokeWidth="2" rx="2" />

      {/* Median line Q2 */}
      <line x1={q2x} y1={boxTop} x2={q2x} y2={boxBot} stroke={color} strokeWidth="2.5" />

      {/* Right whisker Q3 → Q4 */}
      <line x1={q3x} y1={whiskerY} x2={q4x} y2={whiskerY} stroke={color} strokeWidth="2" />
      <line x1={q4x} y1={boxTop + 10} x2={q4x} y2={boxBot - 10} stroke={color} strokeWidth="2" />

      {/* IQR bracket below */}
      <line x1={q1x} y1={boxBot + 8} x2={q3x} y2={boxBot + 8} stroke="#4a9eed" strokeWidth="1.5" />
      <line x1={q1x} y1={boxBot + 5} x2={q1x} y2={boxBot + 11} stroke="#4a9eed" strokeWidth="1.5" />
      <line x1={q3x} y1={boxBot + 5} x2={q3x} y2={boxBot + 11} stroke="#4a9eed" strokeWidth="1.5" />
      <text x={(q1x + q3x) / 2} y={boxBot + 22} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">IQR = Q3 − Q1</text>

      {/* Labels */}
      <text x={q0x} y={boxTop - 6} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Q0 (mín)</text>
      <text x={q1x} y={boxTop - 6} textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Q1</text>
      <text x={q2x} y={boxTop - 6} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Q2 (med.)</text>
      <text x={q3x} y={boxTop - 6} textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Q3</text>
      <text x={q4x} y={boxTop - 6} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Q4 (max)</text>

      {/* Outlier dot example */}
      <circle cx="455" cy={y} r="5" fill="none" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="455" y={boxTop - 6} textAnchor="middle" fill="#4a9eed" fontSize="8">outlier</text>
      <line x1={q4x} y1={y} x2="449" y2={y} stroke="#4a9eed" strokeWidth="1" strokeDasharray="3,2" />
    </svg>
  );
};

/* ─── Empirical Rule Bell Curve SVG ─── */
const EmpiricalRuleSVG = () => {
  const cx = 300, baseline = 150, w = 480;
  const sigma = 70;

  const gauss = (x) => {
    const z = (x - cx) / sigma;
    return baseline - 100 * Math.exp(-0.5 * z * z);
  };

  const pathBetween = (x1, x2) => {
    const pts = [];
    const steps = 60;
    for (let i = 0; i <= steps; i++) {
      const x = x1 + ((x2 - x1) / steps) * i;
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${gauss(x).toFixed(1)}`);
    }
    pts.push(`L${x2.toFixed(1)},${baseline} L${x1.toFixed(1)},${baseline} Z`);
    return pts.join(' ');
  };

  const fullPath = () => {
    const pts = [];
    const x1 = cx - 3.5 * sigma, x2 = cx + 3.5 * sigma;
    const steps = 120;
    for (let i = 0; i <= steps; i++) {
      const x = x1 + ((x2 - x1) / steps) * i;
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${gauss(x).toFixed(1)}`);
    }
    return pts.join(' ');
  };

  return (
    <svg viewBox="0 0 600 190" style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }}>
      {/* Shaded bands — same hue, stepped light→dark from outer to inner */}
      <path d={pathBetween(cx - 3 * sigma, cx + 3 * sigma)} fill="rgba(134,182,239,0.16)" />
      <path d={pathBetween(cx - 2 * sigma, cx + 2 * sigma)} fill="rgba(57,135,229,0.16)" />
      <path d={pathBetween(cx - sigma, cx + sigma)} fill="rgba(28,92,171,0.22)" />

      {/* Bell curve outline */}
      <path d={fullPath()} fill="none" stroke={color} strokeWidth="2" />

      {/* Baseline */}
      <line x1="30" y1={baseline} x2="570" y2={baseline} stroke="var(--text-secondary)" strokeWidth="1" />

      {/* σ tick lines */}
      {[-3, -2, -1, 0, 1, 2, 3].map(n => (
        <g key={n}>
          <line x1={cx + n * sigma} y1={baseline} x2={cx + n * sigma} y2={baseline + 6} stroke="var(--text-secondary)" strokeWidth="1" />
          <text x={cx + n * sigma} y={baseline + 16} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">
            {n === 0 ? 'μ' : `${n > 0 ? '+' : ''}${n}σ`}
          </text>
        </g>
      ))}

      {/* Percentage labels — darkest (1σ) to lightest (3σ) */}
      <text x={cx} y={baseline - 108} textAnchor="middle" fill="#1c5cab" fontSize="10" fontWeight="700">68%</text>
      <line x1={cx - sigma} y1={baseline - 102} x2={cx + sigma} y2={baseline - 102} stroke="#1c5cab" strokeWidth="1" />
      <line x1={cx - sigma} y1={baseline - 105} x2={cx - sigma} y2={baseline - 99} stroke="#1c5cab" strokeWidth="1" />
      <line x1={cx + sigma} y1={baseline - 105} x2={cx + sigma} y2={baseline - 99} stroke="#1c5cab" strokeWidth="1" />

      <text x={cx} y={baseline - 88} textAnchor="middle" fill="#3987e5" fontSize="10" fontWeight="700">95%</text>
      <line x1={cx - 2 * sigma} y1={baseline - 82} x2={cx + 2 * sigma} y2={baseline - 82} stroke="#3987e5" strokeWidth="1" />
      <line x1={cx - 2 * sigma} y1={baseline - 85} x2={cx - 2 * sigma} y2={baseline - 79} stroke="#3987e5" strokeWidth="1" />
      <line x1={cx + 2 * sigma} y1={baseline - 85} x2={cx + 2 * sigma} y2={baseline - 79} stroke="#3987e5" strokeWidth="1" />

      <text x={cx} y={baseline - 68} textAnchor="middle" fill="#86b6ef" fontSize="10" fontWeight="700">99.7%</text>
      <line x1={cx - 3 * sigma} y1={baseline - 62} x2={cx + 3 * sigma} y2={baseline - 62} stroke="#86b6ef" strokeWidth="1" />
      <line x1={cx - 3 * sigma} y1={baseline - 65} x2={cx - 3 * sigma} y2={baseline - 59} stroke="#86b6ef" strokeWidth="1" />
      <line x1={cx + 3 * sigma} y1={baseline - 65} x2={cx + 3 * sigma} y2={baseline - 59} stroke="#86b6ef" strokeWidth="1" />
    </svg>
  );
};

/* ─── Histogram SVG ─── */
const HistogramSVG = () => {
  const bars = [
    { label: '155–160', count: 4 },
    { label: '160–165', count: 11 },
    { label: '165–170', count: 19 },
    { label: '170–175', count: 23 },
    { label: '175–180', count: 16 },
    { label: '180–185', count: 7 },
  ];
  const maxCount = 25;
  const barW = 70, gap = 10, leftPad = 40, topPad = 20, chartH = 140, bottomPad = 45;
  const totalW = leftPad + bars.length * (barW + gap) + 20;
  const totalH = topPad + chartH + bottomPad;

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} style={{ width: '100%', maxWidth: totalW, display: 'block', margin: '0 auto' }}>
      {/* Y axis */}
      <line x1={leftPad} y1={topPad} x2={leftPad} y2={topPad + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* X axis */}
      <line x1={leftPad} y1={topPad + chartH} x2={totalW - 10} y2={topPad + chartH} stroke="var(--text-secondary)" strokeWidth="1.5" />

      {/* Y grid + labels */}
      {[0, 5, 10, 15, 20, 25].map(v => {
        const y = topPad + chartH - (v / maxCount) * chartH;
        return (
          <g key={v}>
            <line x1={leftPad - 4} y1={y} x2={leftPad} y2={y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={leftPad - 7} y={y + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{v}</text>
            {v > 0 && <line x1={leftPad} y1={y} x2={totalW - 10} y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3" />}
          </g>
        );
      })}

      {/* Bars */}
      {bars.map((b, i) => {
        const bx = leftPad + i * (barW + gap) + gap / 2;
        const bh = (b.count / maxCount) * chartH;
        const by = topPad + chartH - bh;
        return (
          <g key={i}>
            <rect x={bx} y={by} width={barW} height={bh} fill={color} rx="3" opacity="0.85" />
            <text x={bx + barW / 2} y={by - 4} textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700">{b.count}</text>
            <text x={bx + barW / 2} y={topPad + chartH + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{b.label}</text>
          </g>
        );
      })}

      {/* Axis label */}
      <text x={leftPad + (bars.length * (barW + gap)) / 2} y={topPad + chartH + 30} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Altura (cm)</text>
      <text x={14} y={topPad + chartH / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="9" transform={`rotate(-90, 14, ${topPad + chartH / 2})`}>Frequência</text>
    </svg>
  );
};

/* ─── Correlation Scatterplot Grid SVG ─── */
const CorrelationSVG = () => {
  /* 4 quadrants: r≈1, r≈-1, r≈0, nonlinear */
  const qw = 160, qh = 120, pad = 20, gutter = 30;
  const totalW = pad * 2 + qw * 2 + gutter;
  const totalH = pad * 2 + qh * 2 + gutter + 30;

  const dots = {
    pos: [[15, 75], [25, 65], [38, 52], [50, 42], [60, 32], [75, 20], [88, 10], [100, 5]],
    neg: [[5, 5], [18, 18], [30, 28], [45, 40], [60, 52], [75, 65], [90, 75], [105, 82]],
    none: [[10, 30], [20, 70], [35, 15], [50, 55], [65, 80], [80, 25], [95, 60], [108, 40]],
    nonlin: [[5, 80], [20, 45], [35, 20], [55, 10], [70, 20], [85, 45], [100, 75], [110, 82]],
  };

  const Quadrant = ({ ox, oy, data, label, sublabel, lineColor }) => (
    <g>
      <rect x={ox} y={oy} width={qw} height={qh} fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" rx="4" />
      {data.map((d, i) => (
        <circle key={i} cx={ox + d[0] * (qw / 120)} cy={oy + d[1] * (qh / 90)} r="2.5" fill={lineColor || color} opacity="0.8" />
      ))}
      <text x={ox + qw / 2} y={oy - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">{label}</text>
      <text x={ox + qw / 2} y={oy + qh + 12} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{sublabel}</text>
    </g>
  );

  /* Trend lines */
  const TrendLine = ({ ox, oy, x1r, y1r, x2r, y2r, clr }) => (
    <line
      x1={ox + x1r * (qw / 120)} y1={oy + y1r * (qh / 90)}
      x2={ox + x2r * (qw / 120)} y2={oy + y2r * (qh / 90)}
      stroke={clr || '#4a9eed'} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"
    />
  );

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} style={{ width: '100%', maxWidth: 700, display: 'block', margin: '0 auto' }}>
      {/* r ≈ +1 (top-left) */}
      <Quadrant ox={pad} oy={pad + 14} data={dots.pos} label="r ≈ +1" sublabel="Correlação positiva" />
      <TrendLine ox={pad} oy={pad + 14} x1r={5} y1r={78} x2r={110} y2r={3} />

      {/* r ≈ -1 (top-right) */}
      <Quadrant ox={pad + qw + gutter} oy={pad + 14} data={dots.neg} label="r ≈ −1" sublabel="Correlação negativa" lineColor="#4a9eed" />
      <TrendLine ox={pad + qw + gutter} oy={pad + 14} x1r={5} y1r={3} x2r={110} y2r={85} clr="#4a9eed" />

      {/* r ≈ 0 (bottom-left) */}
      <Quadrant ox={pad} oy={pad + 14 + qh + gutter} data={dots.none} label="r ≈ 0" sublabel="Sem correlação linear" lineColor="var(--text-secondary)" />

      {/* Nonlinear (bottom-right) */}
      <Quadrant ox={pad + qw + gutter} oy={pad + 14 + qh + gutter} data={dots.nonlin} label="Não-linear" sublabel="Spearman &gt; Pearson" lineColor="#4a9eed" />

      {/* Curved trend for nonlinear */}
      <path
        d={`M${pad + qw + gutter + 5 * (qw / 120)},${pad + 14 + qh + gutter + 80 * (qh / 90)} Q${pad + qw + gutter + 55 * (qw / 120)},${pad + 14 + qh + gutter + 5 * (qh / 90)} ${pad + qw + gutter + 110 * (qw / 120)},${pad + 14 + qh + gutter + 82 * (qh / 90)}`}
        fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"
      />
    </svg>
  );
};

/* ─── Main Component ─── */
export default function ST1() {
  return (
    <div style={S.page}>
      <Link to="/statistics" style={S.back}><ArrowLeft size={16} /> Voltar a Statistics</Link>
      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Estatística Descritiva &amp; Visualização</h1>

      {/* ══════════════════════════════════════
          1. TIPOS DE VARIÁVEIS
      ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Tipos de Variáveis</h2>
        <p style={S.p}>
          Toda a análise estatística começa por identificar o tipo de variável em estudo.
          O tipo determina que operações matemáticas têm sentido e que gráficos ou testes são adequados.
        </p>

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Taxonomia das variáveis</p>
          <TaxonomySVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Operações válidas</th>
              <th style={S.th}>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Nominal', 'Igualdade, moda, frequências', 'Género, cor, país'],
              ['Ordinal', 'Ordem, mediana, percentis', 'Grau de satisfação, ranking'],
              ['Discreta', 'Aritmética completa, média, variância', 'Nº de filhos, contagem de erros'],
              ['Contínua', 'Aritmética + distribuições contínuas', 'Altura, temperatura, rendimento'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <VarTypeExplorer />

        <div style={S.note}>
          <strong>Regra prática:</strong> se conseguir calcular uma média e ela fazer sentido, a variável é quantitativa.
          Se não fizer sentido (ex: média entre "azul" e "verde"), é qualitativa.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════
          2. MEDIDAS DE TENDÊNCIA CENTRAL
      ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Medidas de Tendência Central</h2>
        <p style={S.p}>
          As medidas de tendência central descrevem o valor "típico" ou central de uma distribuição.
          A escolha entre média, mediana e moda depende da forma da distribuição e da presença de valores extremos.
        </p>

        <h3 style={S.h3}>Média aritmética (μ ou x̄)</h3>
        
          <BlockMath math="\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i = \frac{x_1 + x_2 + \cdots + x_n}{n}" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Soma de todos os valores dividida pelo número de observações.
            Sensível a outliers — um valor extremo desloca a média significativamente.
          </p>
        

        <h3 style={S.h3}>Mediana</h3>
        
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Mediana = valor central após ordenação crescente</p>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Se n for ímpar: posição <InlineMath math="\frac{n+1}{2}" />. Se n for par: média das posições <InlineMath math="\frac{n}{2}" /> e <InlineMath math="\frac{n}{2} + 1" />.
            Robusta a outliers — ideal para distribuições assimétricas como rendimentos ou preços de imóveis.
          </p>
        

        <h3 style={S.h3}>Moda</h3>
        <div style={S.highlight}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Moda = valor (ou classe) com maior frequência</p>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Pode existir mais do que uma moda (bimodal, multimodal). É a única medida aplicável a variáveis nominais.
          </p>
        </div>

        <h3 style={S.h3}>Posição relativa: distribuições simétricas vs. assimétricas</h3>
        <p style={S.p}>
          Em distribuições simétricas (ex: Normal), média = mediana = moda.
          Em distribuições assimétricas, as três medidas divergem — o diagrama abaixo ilustra esse padrão.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Localização de média, mediana e moda</p>
          <DistributionShapesSVG />
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', color: '#1c5cab', fontWeight: 600 }}>● Média (μ)</span>
            <span style={{ fontSize: '0.8rem', color: '#3987e5', fontWeight: 600 }}>● Mediana</span>
            <span style={{ fontSize: '0.8rem', color: '#86b6ef', fontWeight: 600 }}>● Moda</span>
          </div>
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Medida recomendada</th>
              <th style={S.th}>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Distribuição simétrica, sem outliers', 'Média', 'Usa toda a informação dos dados'],
              ['Distribuição assimétrica ou com outliers', 'Mediana', 'Robusta — não é afetada pelos extremos'],
              ['Variável nominal ou categórica', 'Moda', 'Única operação válida para categorias'],
              ['Distribuição bimodal', 'Moda(s)', 'Revela a estrutura multimodal dos dados'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={{ ...S.td, fontWeight: 700, color }}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════
          3. MEDIDAS DE DISPERSÃO
      ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Medidas de Dispersão</h2>
        <p style={S.p}>
          A tendência central não é suficiente — dois conjuntos de dados com a mesma média podem ter distribuições muito diferentes.
          As medidas de dispersão quantificam o grau de variabilidade ou espalhamento dos dados.
        </p>

        <h3 style={S.h3}>Variância (s²)</h3>
        
          <BlockMath math="s^2 = \frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n - 1}" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Média dos quadrados dos desvios em relação à média. O divisor <InlineMath math="(n-1)" /> em vez de n dá o estimador não-viesado (correcção de Bessel).
            Unidade: ao quadrado dos dados originais.
          </p>
        

        <h3 style={S.h3}>Desvio Padrão (s ou σ)</h3>
        
          <BlockMath math="s = \sqrt{s^2}" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Raiz quadrada da variância — recupera a mesma unidade dos dados. É a medida de dispersão mais usada em conjunto com a média.
          </p>
        

        <h3 style={S.h3}>Intervalo Interquartílico (IQR) e Amplitude</h3>
        
          <BlockMath math="\text{IQR} = Q_3 - Q_1" />
          <BlockMath math="\text{Amplitude} = \text{Max} - \text{Min}" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            O IQR contém os 50% centrais dos dados e é muito robusto a outliers.
            A amplitude usa apenas os dois extremos — é muito sensível a valores anómalos.
          </p>
        

        <h3 style={S.h3}>Coeficiente de Variação (CV)</h3>
        
          <BlockMath math="\text{CV} = \frac{s}{\bar{x}} \times 100\%" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Dispersão relativa à média — adimensional. Permite comparar a variabilidade de distribuições com unidades ou escalas diferentes.
          </p>
        

        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quartis, IQR e whiskers</p>
          <IQRNumberLineSVG />
        </div>

        <h3 style={S.h3}>Regra Empírica (distribuição Normal)</h3>
        <p style={S.p}>
          Para dados que seguem uma distribuição Normal (sino), existe uma relação fixa entre o desvio padrão e a proporção de dados abrangidos.
          Esta regra — também chamada regra 68-95-99.7 — é uma das mais usadas em estatística aplicada.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Regra empírica 68 – 95 – 99.7</p>
          <EmpiricalRuleSVG />
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', color: '#1c5cab', fontWeight: 600 }}>● μ ± 1σ → 68%</span>
            <span style={{ fontSize: '0.8rem', color: '#3987e5', fontWeight: 600 }}>● μ ± 2σ → 95%</span>
            <span style={{ fontSize: '0.8rem', color: '#86b6ef', fontWeight: 600 }}>● μ ± 3σ → 99.7%</span>
          </div>
        </div>

        <div style={S.note}>
          A regra empírica só se aplica a distribuições aproximadamente normais. Para distribuições arbitrárias, a desigualdade de Chebyshev garante que pelo menos 1 − 1/k² dos dados estão dentro de k desvios padrão da média.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════
          4. DISTRIBUIÇÃO DE FREQUÊNCIAS
      ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Distribuição de Frequências</h2>
        <p style={S.p}>
          A distribuição de frequências organiza os dados em classes ou categorias, mostrando quantas observações pertencem a cada grupo.
          É o ponto de partida para perceber a forma e os padrões da distribuição.
        </p>

        <h3 style={S.h3}>Tabela de Frequências</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Classe (Altura)</th>
              <th style={S.th}>Frequência absoluta (n)</th>
              <th style={S.th}>Frequência relativa (%)</th>
              <th style={S.th}>Freq. acumulada</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['155–160 cm', 4, '5.0%', 4],
              ['160–165 cm', 11, '13.8%', 15],
              ['165–170 cm', 19, '23.7%', 34],
              ['170–175 cm', 23, '28.7%', 57],
              ['175–180 cm', 16, '20.0%', 73],
              ['180–185 cm', 7, '8.8%', 80],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={{ ...S.td, fontWeight: 600, color }}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
            <tr>
              <td style={{ ...S.td, fontWeight: 700 }}>Total</td>
              <td style={{ ...S.td, fontWeight: 700, color }}>80</td>
              <td style={{ ...S.td, fontWeight: 700 }}>100%</td>
              <td style={S.td}></td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Histograma</h3>
        <p style={S.p}>O histograma representa graficamente a tabela de frequências. As barras são contíguas e a área de cada barra é proporcional à frequência.</p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Distribuição de alturas (n = 80)</p>
          <HistogramSVG />
        </div>

        <h3 style={S.h3}>Diagrama de Ramos e Folhas (Stem-and-Leaf)</h3>
        <p style={S.p}>
          O diagrama de ramos e folhas é uma alternativa ao histograma que preserva os valores individuais.
          O "ramo" representa os algarismos mais significativos e as "folhas" os menos significativos.
        </p>
        <pre style={S.code}>{`Dados: 162, 165, 167, 168, 170, 171, 172, 173, 175, 178, 180, 183

Ramo | Folhas
  16 | 2  5  7  8
  17 | 0  1  2  3  5  8
  18 | 0  3

Cada linha = uma classe de 10 cm. Permite ver a forma
da distribuição sem perder informação individual.`}</pre>

        <div style={S.note}>
          Número de classes sugerido: regra de Sturges → <InlineMath math="k \approx 1 + 3.322 \cdot \log_{10}(n)" />. Para n = 80: k ≈ 7 classes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════
          5. CORRELAÇÃO
      ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Correlação</h2>
        <p style={S.p}>
          A correlação mede a força e a direcção da relação linear (ou monótona) entre duas variáveis quantitativas.
          Correlação não implica causalidade — variáveis correlacionadas podem ter uma causa comum ou a relação pode ser espúria.
        </p>

        <h3 style={S.h3}>Coeficiente de Pearson (r)</h3>
        
          <BlockMath math="r = \frac{\sum_{i}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i}(x_i - \bar{x})^2 \cdot \sum_{i}(y_i - \bar{y})^2}}" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Varia entre −1 e +1. Mede apenas relações <strong>lineares</strong>.
            Sensível a outliers e não-normalidade. Pressupõe escala de intervalo ou rácio.
          </p>
        

        <h3 style={S.h3}>Correlação de Spearman (ρ)</h3>
        
          <BlockMath math="\rho = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)}" />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Versão não paramétrica baseada nos <em>ranks</em> (posições ordenadas) em vez dos valores originais.
            Robusta a outliers e válida para variáveis ordinais. Capta relações <strong>monótonas</strong> (não apenas lineares).
          </p>
        

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Valor de |r| ou |ρ|</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0.00 – 0.19', 'Muito fraca ou nula'],
              ['0.20 – 0.39', 'Fraca'],
              ['0.40 – 0.59', 'Moderada'],
              ['0.60 – 0.79', 'Forte'],
              ['0.80 – 1.00', 'Muito forte'],
            ].map(([a, b]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 600, color }}>{a}</td>
                <td style={S.td}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Quatro cenários de correlação</h3>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Diagramas de dispersão</p>
          <CorrelationSVG />
        </div>

        <div style={S.note}>
          No cenário não-linear (quadrante inferior direito), o Pearson pode dar r ≈ 0 mesmo existindo uma relação forte em forma de U. O Spearman também falha neste caso — é necessário usar correlação não paramétrica baseada em ranks ou inspecionar o gráfico.
        </div>

      </div>

    </div>
  );
}
