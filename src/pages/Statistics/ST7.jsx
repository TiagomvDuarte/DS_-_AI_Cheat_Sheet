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

/* ── SVG 1: Distribuição amostral de β̂₁ ── */
function BellCurveSVG() {
  // Generate normal PDF points
  const pts = [];
  for (let i = 0; i <= 200; i++) {
    const x = -4 + (i / 200) * 8;
    const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
    pts.push([x, y]);
  }
  const toSvg = ([x, y]) => [200 + x * 45, 120 - y * 280];

  const fullPath = pts.map((p, i) => {
    const [sx, sy] = toSvg(p);
    return `${i === 0 ? 'M' : 'L'}${sx},${sy}`;
  }).join(' ');

  // Shaded region: -2 to 2
  const shadePts = pts.filter(p => p[0] >= -2 && p[0] <= 2);
  const shadePath = shadePts.map((p, i) => {
    const [sx, sy] = toSvg(p);
    return `${i === 0 ? 'M' : 'L'}${sx},${sy}`;
  }).join(' ');
  const [shadeStartX] = toSvg(shadePts[0]);
  const [shadeEndX] = toSvg(shadePts[shadePts.length - 1]);
  const baseY = toSvg([0, 0])[1];

  return (
    <svg viewBox="0 0 400 150" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }}>
      {/* Shaded ±2SE area */}
      <path
        d={`${shadePath} L${shadeEndX},${baseY} L${shadeStartX},${baseY} Z`}
        fill="rgba(249,115,22,0.10)"
        stroke="none"
      />
      {/* Bell curve */}
      <path d={fullPath} fill="none" stroke={color} strokeWidth="2.5" />
      {/* Baseline */}
      <line x1="10" y1={baseY} x2="390" y2={baseY} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Center β₁ */}
      <line x1="200" y1="20" x2="200" y2={baseY} stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="200" y="15" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">β₁</text>
      {/* -2SE label */}
      <text x={shadeStartX} y={baseY + 14} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">β₁−2SE</text>
      {/* +2SE label */}
      <text x={shadeEndX} y={baseY + 14} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">β₁+2SE</text>
      {/* Caption */}
      <text x="200" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Distribuição amostral de β̂₁ (região sombreada ≈ 95%)</text>
    </svg>
  );
}

/* ── SVG 2: 4-Quadrant Sig vs Effect ── */
function FourQuadrantSVG() {
  const cx = 210, cy = 100;
  return (
    <svg viewBox="0 0 470 220" style={{ width: '100%', maxWidth: 540, display: 'block', margin: '0 auto' }}>
      {/* Axes */}
      <line x1="15" y1={cy} x2="425" y2={cy} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#ah)" />
      <line x1={cx} y1="210" x2={cx} y2="10" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#av)" />
      <defs>
        <marker id="ah" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="av" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* Axis labels */}
      <text x="428" y={cy + 4} fontSize="10" fill="var(--text-secondary)" textAnchor="start">p-value</text>
      <text x={cx} y="7" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">↑ Efeito grande</text>
      <text x={cx} y="218" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">↓ Efeito pequeno</text>
      {/* p labels on axis */}
      <text x="108" y={cy + 14} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">p {'>'} 0.05 (não sig.)</text>
      <text x={cx + 105} y={cy + 14} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">p {'<'} 0.05 (sig.)</text>
      {/* Q1 top-right: sig + large effect — ideal */}
      <rect x={cx + 8} y="18" width="200" height="76" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x={cx + 108} y="55" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">Sig. + Grande efeito</text>
      <text x={cx + 108} y="72" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">✓ Resultado ideal</text>
      {/* Q2 bottom-right: sig + small effect */}
      <rect x={cx + 8} y={cy + 18} width="200" height="76" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1" />
      <text x={cx + 108} y={cy + 55} textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">Sig. + Efeito pequeno</text>
      <text x={cx + 108} y={cy + 72} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">⚠ Cuidado: n muito grande</text>
      {/* Q3 top-left: not sig + large effect */}
      <rect x="18" y="18" width="184" height="76" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="110" y="55" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">Não sig. + Grande efeito</text>
      <text x="110" y="72" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Possível falta de poder</text>
      {/* Q4 bottom-left: not sig + small effect */}
      <rect x="18" y={cy + 18} width="184" height="76" rx="6" fill="rgba(107,114,128,0.1)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="110" y={cy + 55} textAnchor="middle" fontSize="10" fill="var(--text-secondary)" fontWeight="700">Não sig. + Efeito pequeno</text>
      <text x="110" y={cy + 72} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Sem evidência</text>
    </svg>
  );
}

/* ── SVG 3: Forest Plot ── */
function ForestPlotSVG() {
  const coefs = [
    { name: 'Intercepto', est: 2.1, lo: 0.8, hi: 3.4 },
    { name: 'Idade', est: 0.05, lo: -0.02, hi: 0.12 },
    { name: 'Salário', est: 0.38, lo: 0.18, hi: 0.58 },
    { name: 'Educação', est: -0.15, lo: -0.45, hi: 0.15 },
    { name: 'Experiência', est: 0.22, lo: 0.08, hi: 0.36 },
  ];
  const scale = v => 200 + v * 60;
  const yBase = 30;
  const rowH = 28;
  return (
    <svg viewBox="0 0 420 200" style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
      {/* Zero line */}
      <line x1={scale(0)} y1="10" x2={scale(0)} y2="175" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x={scale(0)} y="185" textAnchor="middle" fontSize="9" fill="#f97316">0</text>
      {coefs.map((c, i) => {
        const y = yBase + i * rowH;
        const x = scale(c.est);
        const xLo = scale(c.lo);
        const xHi = scale(c.hi);
        const sig = c.lo > 0 || c.hi < 0;
        const dotColor = sig ? color : 'var(--text-secondary)';
        return (
          <g key={c.name}>
            <text x="4" y={y + 4} fontSize="10" fill="var(--text-primary)">{c.name}</text>
            <line x1={xLo} y1={y} x2={xHi} y2={y} stroke={dotColor} strokeWidth="2" />
            <line x1={xLo} y1={y - 4} x2={xLo} y2={y + 4} stroke={dotColor} strokeWidth="1.5" />
            <line x1={xHi} y1={y - 4} x2={xHi} y2={y + 4} stroke={dotColor} strokeWidth="1.5" />
            <circle cx={x} cy={y} r="4" fill={dotColor} />
            <text x={xHi + 6} y={y + 4} fontSize="9" fill="var(--text-secondary)">{c.est.toFixed(2)}</text>
          </g>
        );
      })}
      <text x="210" y="198" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Estimativa (IC 95%) — cinza = cruza zero (não sig.)</text>
    </svg>
  );
}

/* ── SVG 4: CI vs PI bands ── */
function CIvsPISVG() {
  const W = 400, H = 180;
  const xMin = 20, xMax = 380, yMin = 20, yMax = 160;
  const xMid = (xMin + xMax) / 2;
  const yMid = (yMin + yMax) / 2;

  // Regression line
  const linePts = `${xMin},${yMax - 10} ${xMax},${yMin + 10}`;

  // CI band (narrower)
  const ciTop = `M${xMin},${yMax - 10 - 18} Q${xMid},${yMid - 8} ${xMax},${yMin + 10 - 18}`;
  const ciBot = `M${xMin},${yMax - 10 + 18} Q${xMid},${yMid + 8} ${xMax},${yMin + 10 + 18}`;
  const ciArea = `M${xMin},${yMax - 10 - 18} Q${xMid},${yMid - 8} ${xMax},${yMin + 10 - 18} L${xMax},${yMin + 10 + 18} Q${xMid},${yMid + 8} ${xMin},${yMax - 10 + 18} Z`;

  // PI band (wider)
  const piArea = `M${xMin},${yMax - 10 - 38} Q${xMid},${yMid - 5} ${xMax},${yMin + 10 - 38} L${xMax},${yMin + 10 + 38} Q${xMid},${yMid + 5} ${xMin},${yMax - 10 + 38} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
      {/* PI band */}
      <path d={piArea} fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1.5" strokeDasharray="5,3" />
      {/* CI band */}
      <path d={ciArea} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      {/* Regression line */}
      <polyline points={linePts} fill="none" stroke={color} strokeWidth="2.5" />
      {/* Labels */}
      <text x="330" y="42" fontSize="9" fill="rgba(249,115,22,0.10)">IP 95%</text>
      <text x="330" y="58" fontSize="9" fill={color} fontWeight="700">IC 95%</text>
      {/* Axes */}
      <line x1={xMin - 5} y1={yMax + 5} x2={xMax + 5} y2={yMax + 5} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={xMin - 5} y1={yMin - 5} x2={xMin - 5} y2={yMax + 5} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={xMid} y={H - 2} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">x₀</text>
      <text x="4" y={yMid} fontSize="9" fill="var(--text-secondary)" transform={`rotate(-90,4,${yMid})`}>Ŷ</text>
      <text x="200" y="175" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">IC mais estreito que IP — IC para média, IP para observação individual</text>
    </svg>
  );
}

/* ── SVG 5: F-distribution ── */
function FDistSVG() {
  function lgamma(z) {
    return (z - 0.5) * Math.log(z + 4.5) - (z + 4.5) + 0.5 * Math.log(2 * Math.PI) +
      Math.log(1 + 76.18009173 / z - 86.50532033 / (z + 1) + 24.01409824 / (z + 2));
  }
  const fPDF = (x, d1 = 3, d2 = 20) => {
    if (x <= 0) return 0;
    const logB = lgamma(d1 / 2) + lgamma(d2 / 2) - lgamma((d1 + d2) / 2);
    const logY = (d1 / 2) * Math.log(d1 / d2) + (d1 / 2 - 1) * Math.log(x)
      - ((d1 + d2) / 2) * Math.log(1 + (d1 * x) / d2) - logB;
    return Math.exp(logY);
  };

  const pts = [];
  for (let i = 1; i <= 300; i++) {
    const x = i / 50;
    const y = fPDF(x);
    pts.push([x, y]);
  }
  const yMax = Math.max(...pts.map(p => p[1])) * 1.15;

  const svgX = x => 30 + x * 55;
  const svgY = y => 120 - (y / yMax) * 105;

  const fullPath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${svgX(p[0]).toFixed(1)},${svgY(p[1]).toFixed(1)}`).join(' ');
  const critX = 3.1; // approximate critical value
  const shadePts = pts.filter(p => p[0] >= critX);
  const shadePath = shadePts.length > 1
    ? shadePts.map((p, i) => `${i === 0 ? 'M' : 'L'}${svgX(p[0]).toFixed(1)},${svgY(p[1]).toFixed(1)}`).join(' ') +
      ` L${svgX(shadePts[shadePts.length - 1][0]).toFixed(1)},120 L${svgX(critX).toFixed(1)},120 Z`
    : '';

  return (
    <svg viewBox="0 0 420 145" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }}>
      {shadePath && <path d={shadePath} fill="rgba(249,115,22,0.10)" stroke="none" />}
      <path d={fullPath} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1="20" y1="120" x2="400" y2="120" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={svgX(critX)} y1="40" x2={svgX(critX)} y2="120" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={svgX(critX) + 4} y="55" fontSize="9" fill="#f97316">F crítico</text>
      <text x={svgX(critX) + 12} y="85" fontSize="9" fill={color}>α = 0.05</text>
      <text x="200" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Distribuição F(k, n-k-1) — cauda direita = região crítica</text>
    </svg>
  );
}

export default function ST7() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Inferência em Regressão</h1>
      <p style={S.lead}>
        Após estimar os coeficientes de regressão, o passo seguinte é quantificar a incerteza dessas estimativas e realizar testes de hipóteses formais. Este módulo cobre a distribuição dos estimadores OLS, testes t e F, intervalos de confiança e previsão, e a leitura de output R.
      </p>

      {/* ── 1. Distribuição dos OLS Estimadores ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Distribuição dos Estimadores OLS</h2>
        <p style={S.p}>
          Sob a hipótese de normalidade dos erros (ε ~ N(0, σ²I)), os estimadores OLS seguem uma distribuição normal multivariada:
        </p>
        <BlockMath math="\hat{\beta} \sim \mathcal{N}\!\left(\beta,\; \sigma^2(X'X)^{-1}\right)" />
        <p style={S.p}>
          Para o coeficiente <InlineMath math="\hat{\beta}_1" /> em regressão simples, o desvio-padrão (erro-padrão) é dado por:
        </p>
        <BlockMath math="\mathrm{SE}(\hat{\beta}_1) = \frac{\sigma}{\sqrt{S_{xx}}}, \quad S_{xx} = \sum(x_i - \bar{x})^2" />
        <p style={S.p}>
          Na prática, <InlineMath math="\sigma" /> é desconhecido e é substituído pelo estimador <InlineMath math="s = \sqrt{MSE} = \sqrt{SSE/(n-k-1)}" />, produzindo erros-padrão estimados. Quanto maior a variabilidade em X (maior <InlineMath math="S_{xx}" />), menor o erro-padrão de <InlineMath math="\hat{\beta}_1" /> — mais informação em X leva a estimativas mais precisas.
        </p>
        <div style={S.diagram}>
          <BellCurveSVG />
        </div>
        <div style={S.note}>
          A região sombreada (<InlineMath math="\pm 2\,\mathrm{SE}" /> em torno de <InlineMath math="\beta_1" />) contém aproximadamente 95% da distribuição amostral de <InlineMath math="\hat{\beta}_1" />. Isto é a base dos intervalos de confiança a 95%.
        </div>

        <h3 style={S.h3}>Matriz de Covariância dos Estimadores</h3>
        <p style={S.p}>
          A matriz de covariância completa de <InlineMath math="\hat{\beta}" /> é <InlineMath math="\sigma^2(X'X)^{-1}" />. Os elementos diagonais são as variâncias de cada <InlineMath math="\hat{\beta}_j" />; os elementos fora da diagonal são as covariâncias entre estimadores. Estas covariâncias são essenciais para testar combinações lineares de parâmetros.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Teste t ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Teste t para Coeficientes Individuais</h2>
        <p style={S.p}>
          Para testar H₀: βⱼ = 0 vs. H₁: βⱼ ≠ 0, a estatística de teste é:
        </p>
        <BlockMath math="t = \frac{\hat{\beta}_j}{\mathrm{SE}(\hat{\beta}_j)} \sim t(n-k-1) \text{ sob } H_0" />
        <p style={S.p}>
          onde n é o número de observações e k é o número de preditores (excluindo o intercepto). Os graus de liberdade são <InlineMath math="n - k - 1" />. Rejeita-se <InlineMath math="H_0" /> quando <InlineMath math="|t| > t_{\alpha/2,\,n-k-1}" />.
        </p>

        <h3 style={S.h3}>Output típico do lm() em R — Tabela de Coeficientes</h3>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Termo</th>
                <th style={S.th}>Estimate</th>
                <th style={S.th}>Std. Error</th>
                <th style={S.th}>t value</th>
                <th style={S.th}>Pr({'>'} |t|)</th>
                <th style={S.th}>Significância</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['(Intercept)', '2.347', '0.412', '5.697', '< 0.001', '***'],
                ['idade', '0.083', '0.019', '4.368', '< 0.001', '***'],
                ['salário', '0.341', '0.098', '3.480', '0.001', '**'],
                ['educação', '-0.127', '0.134', '-0.948', '0.347', ''],
                ['experiência', '0.218', '0.075', '2.907', '0.005', '**'],
              ].map(([t, e, se, tv, p, sig]) => (
                <tr key={t}>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{t}</td>
                  <td style={S.td}>{e}</td>
                  <td style={S.td}>{se}</td>
                  <td style={S.td}>{tv}</td>
                  <td style={S.td}>{p}</td>
                  <td style={{ ...S.td, color, fontWeight: 700 }}>{sig}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={S.p}>Interpretação coluna a coluna:</p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Estimate</strong>: β̂ⱼ — a estimativa pontual do coeficiente.</li>
          <li><strong>Std. Error</strong>: SE(β̂ⱼ) — precisão da estimativa; valores menores indicam mais precisão.</li>
          <li><strong>t value</strong>: razão Estimate / Std.Error. Valores absolutos {'>'} 2 são tipicamente significativos com n razoável.</li>
          <li><strong>Pr({'>'} |t|)</strong>: p-value bilateral. Compara-se com o nível de significância α (usualmente 0.05).</li>
          <li><strong>***</strong>: p {'<'} 0.001; <strong>**</strong>: p {'<'} 0.01; <strong>*</strong>: p {'<'} 0.05; <strong>.</strong>: p {'<'} 0.10</li>
        </ul>
        <div style={S.note}>
          Note que "educação" tem p = 0.347: não rejeitamos H₀ de que o seu coeficiente é zero, dados os outros preditores no modelo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Sig estatística vs prática ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Significância Estatística vs. Significância Prática</h2>
        <p style={S.p}>
          Significância estatística (p {'<'} 0.05) não implica importância prática. Com amostras grandes, efeitos ínfimos tornam-se estatisticamente significativos. Com amostras pequenas, efeitos grandes podem não atingir significância. A dimensão do efeito é sempre relevante.
        </p>
        <div style={S.diagram}>
          <FourQuadrantSVG />
        </div>
        <p style={S.p}>Medidas de dimensão do efeito em regressão incluem:</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Medida</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['R²', 'SSR / SST', 'Proporção da variância explicada'],
              ['Cohen\'s f²', 'R² / (1 − R²)', 'Pequeno: 0.02 | Médio: 0.15 | Grande: 0.35'],
              ['β padronizado', 'β̂ · (SD_x / SD_y)', 'Variação em SD de Y por SD de X'],
            ].map(([m, d, i]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{m}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Um coeficiente padronizado de 0.02 pode ser estatisticamente significativo com n = 10 000, mas a sua relevância prática é questionável — o contexto disciplinar deve orientar a interpretação.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. IC para Coeficientes ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Intervalos de Confiança para Coeficientes</h2>
        <p style={S.p}>
          Um intervalo de confiança a (1−α)·100% para βⱼ é:
        </p>
        <BlockMath math="\hat{\beta}_j \pm t_{\alpha/2,\,n-k-1} \cdot \mathrm{SE}(\hat{\beta}_j)" />
        <p style={S.p}>
          Se o IC não contiver zero, rejeitamos H₀: βⱼ = 0 ao nível α (coerente com o teste t). O IC fornece informação adicional sobre a magnitude plausível do efeito — mais informativo que o p-value isolado.
        </p>
        <div style={S.diagram}>
          <ForestPlotSVG />
        </div>
        <p style={S.p}>
          O forest plot acima mostra os ICs a 95% para os cinco coeficientes do exemplo. Os coeficientes em cinza (Idade e Educação) têm IC que cruza o zero — não são significativos. Os coeficientes em verde não cruzam — são estatisticamente diferentes de zero.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 5. IC vs IP ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Intervalos de Confiança vs. Intervalos de Previsão</h2>
        <p style={S.p}>
          Para um novo ponto x₀, existem dois tipos distintos de intervalos:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>O que quantifica</th>
              <th style={S.th}>Fórmula da largura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...S.td, fontWeight: 700, color }}>IC (Confiança)</td>
              <td style={S.td}>Incerteza sobre E[Y | X = x₀] — a resposta média</td>
              <td style={S.td}><InlineMath math="\pm t \cdot s \cdot \sqrt{h_{00}}" /></td>
            </tr>
            <tr>
              <td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>IP (Previsão)</td>
              <td style={S.td}>Incerteza sobre uma nova observação individual Y</td>
              <td style={S.td}><InlineMath math="\pm t \cdot s \cdot \sqrt{1 + h_{00}}" /></td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          onde <InlineMath math="h_{00} = x_0'(X'X)^{-1}x_0" /> é a leveragem do novo ponto. O IP é sempre mais largo que o IC porque acrescenta a variabilidade inerente de uma observação individual (o "+1" sob a raiz). Ambos são mínimos no centro dos dados e alargam-se nas extremidades.
        </p>
        <div style={S.diagram}>
          <CIvsPISVG />
        </div>
        <div style={S.note}>
          Nunca confunda os dois: o IC responde "qual o valor médio esperado de Y quando X = x₀?", enquanto o IP responde "qual o valor de uma nova observação individual quando X = x₀?".
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Combinações Lineares ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Combinações Lineares de Parâmetros</h2>
        <p style={S.p}>
          Por vezes interessa testar ou estimar combinações lineares de coeficientes, como aβ₁ + bβ₂. A variância de tal combinação é:
        </p>
        <BlockMath math="\mathrm{Var}(a\hat{\beta}_1 + b\hat{\beta}_2) = a^2\mathrm{Var}(\hat{\beta}_1) + b^2\mathrm{Var}(\hat{\beta}_2) + 2ab\,\mathrm{Cov}(\hat{\beta}_1,\hat{\beta}_2)" />
        <p style={S.p}>
          A covariância <InlineMath math="\mathrm{Cov}(\hat{\beta}_1, \hat{\beta}_2)" /> é obtida da matriz <InlineMath math="\sigma^2(X'X)^{-1}" /> e pode ser positiva ou negativa. Ignorá-la ao calcular IC para combinações lineares produz intervalos incorretos.
        </p>
        <h3 style={S.h3}>Exemplo: Testar <InlineMath math="\beta_1 + \beta_2 = 1" /></h3>
        <p style={S.p}>
          A hipótese <InlineMath math="H_0: \beta_1 + \beta_2 = 1" /> pode ser reformulada como <InlineMath math="H_0: c'\beta = 1" />, com <InlineMath math="c' = (0, 1, 1, 0, \ldots)" />. A estatística t é:
        </p>
        <BlockMath math="t = \frac{\hat{\beta}_1 + \hat{\beta}_2 - 1}{\mathrm{SE}(\hat{\beta}_1 + \hat{\beta}_2)}" />
        <div style={S.note}>
          A função <code>linearHypothesis()</code> do pacote <strong>car</strong> automatiza este processo e suporta múltiplas restrições conjuntas (produzindo uma estatística F).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Teste F Global ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Teste F — Significância Global do Modelo</h2>
        <p style={S.p}>
          O teste F global testa H₀: β₁ = β₂ = ... = βk = 0 (nenhum preditor tem efeito) contra H₁: pelo menos um βⱼ ≠ 0. A estatística é:
        </p>
        <BlockMath math="F = \frac{MSR}{MSE} = \frac{SSR/k}{SSE/(n-k-1)} \sim F(k,\,n-k-1) \text{ sob } H_0" />

        <h3 style={S.h3}>Tabela ANOVA de Regressão</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fonte</th>
              <th style={S.th}>SS</th>
              <th style={S.th}>df</th>
              <th style={S.th}>MS = SS/df</th>
              <th style={S.th}>F</th>
              <th style={S.th}>p-value</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Regressão', 'SSR', 'k', 'MSR = SSR/k', 'MSR/MSE', 'P(F_{k,n-k-1} > F)'],
              ['Residual', 'SSE', 'n-k-1', 'MSE = SSE/(n-k-1)', '—', '—'],
              ['Total', 'SST', 'n-1', '—', '—', '—'],
            ].map(([src, ss, df, ms, f, p]) => (
              <tr key={src}>
                <td style={{ ...S.td, fontWeight: 600 }}>{src}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{ss}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{df}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{ms}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{f}</td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}>
          <FDistSVG />
        </div>
        <p style={S.p}>
          A estatística F observada deve cair na cauda direita da distribuição F(k, n-k-1) para rejeitar H₀. Valores grandes de F indicam que o modelo explica substancialmente mais variância do que o acaso esperaria.
        </p>
        <div style={S.note}>
          <InlineMath math="R^2" /> e o teste F global estão intimamente relacionados: <InlineMath math="F = \frac{R^2/k}{(1-R^2)/(n-k-1)}" />. Um <InlineMath math="R^2" /> elevado corresponde a um F elevado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Teste F Restrições Conjuntas ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Teste F — Restrições Conjuntas</h2>
        <p style={S.p}>
          O teste F pode generalizar-se para testar q restrições conjuntas: H₀: Rβ = r. Compara-se um modelo restrito (impondo as restrições) com um modelo irrestrito. A estatística é:
        </p>
        <BlockMath math="F = \frac{(SSE_r - SSE_u)/q}{SSE_u/(n-k-1)} \sim F(q,\,n-k-1) \text{ sob } H_0" />
        <p style={S.p}>
          onde SSEᵣ é a soma dos quadrados dos resíduos do modelo restrito, SSEᵤ do modelo irrestrito, e q é o número de restrições impostas.
        </p>
        <h3 style={S.h3}>Exemplo: Testar β₁ = β₂ = 0 conjuntamente</h3>
        <p style={S.p}>
          Esta hipótese impõe q = 2 restrições. O modelo restrito exclui os preditores correspondentes. Mesmo que os testes t individuais não rejeitem cada hipótese separada, o teste F conjunto pode rejeitar devido a correlações entre estimadores.
        </p>
        <div style={S.note}>
          O teste F conjunto é mais poderoso que dois testes t separados quando os estimadores são correlacionados. Use sempre o teste conjunto para hipóteses com múltiplas restrições.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Teste de Wald ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Teste de Wald</h2>
        <p style={S.p}>
          O teste de Wald é uma generalização do teste F que usa a forma matricial da hipótese H₀: Rβ = r. A estatística de Wald é:
        </p>
        <BlockMath math="W = \frac{(R\hat{\beta}-r)'\left[R\,\sigma^2(X'X)^{-1}R'\right]^{-1}(R\hat{\beta}-r)}{q} \sim F(q,\,n-k-1)" />
        <p style={S.p}>
          Sob as hipóteses clássicas, o teste de Wald e o teste F produzem exatamente o mesmo resultado. A vantagem da forma de Wald é a sua generalidade: aplica-se a qualquer conjunto de restrições lineares expressas na forma matricial Rβ = r.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['R (q × p)', 'Matriz de restrições — cada linha é uma restrição linear em β'],
              ['r (q × 1)', 'Vetor dos valores hipotéticos (e.g., zeros para H₀: β = 0)'],
              ['q', 'Número de restrições — graus de liberdade do numerador'],
              ['σ²(X\'X)⁻¹', 'Matriz de covariância de β̂ (estimada por s²(X\'X)⁻¹)'],
            ].map(([c, s]) => (
              <tr key={c}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{c}</td>
                <td style={S.td}>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Leitura de Output R ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Leitura Completa do Output R</h2>
        <p style={S.p}>
          O output de <code>summary(lm(...))</code> em R contém várias secções. Vejamos um output completo anotado:
        </p>
        <div style={S.code}>
          {'Call:\nlm(formula = salario ~ anos_exp + educacao + idade, data = dados)\n\nResiduals:\n    Min      1Q  Median      3Q     Max\n-12.843  -2.947  -0.312   2.851  18.634\n\nCoefficients:\n             Estimate Std. Error t value Pr(>|t|)\n(Intercept)   8.4521     1.2034   7.025  < 2e-16 ***\nanos_exp      0.8312     0.0921   9.024  < 2e-16 ***\neducacao      1.4203     0.3471   4.093  5.2e-05 ***\nidade         0.0234     0.0412   0.568    0.571\n---\nSignif. codes: 0 \'***\' 0.001 \'**\' 0.01 \'*\' 0.05 \'.\' 0.1 \' \' 1\n\nResidual standard error: 4.231 on 196 degrees of freedom\nMultiple R-squared: 0.6834,   Adjusted R-squared: 0.6784\nF-statistic: 141.3 on 3 and 196 DF,  p-value: < 2.2e-16'}
        </div>

        <h3 style={S.h3}>Secção: Residuals</h3>
        <p style={S.p}>
          Apresenta o sumário dos resíduos (êᵢ = yᵢ − ŷᵢ). A mediana próxima de zero e simetria entre Q1/Q3 e Min/Max são sinais de ausência de enviesamento sistemático. Resíduos muito assimétricos sugerem heterocedasticidade ou outliers.
        </p>

        <h3 style={S.h3}>Secção: Coefficients</h3>
        <p style={S.p}>
          Contém a tabela de inferência já discutida. Note que "idade" tem p = 0.571 — não significativo dados os outros preditores. Isto não significa que idade seja irrelevante, mas que a sua contribuição marginal, controlando anos_exp e educação, é estatisticamente indistinguível de zero.
        </p>

        <h3 style={S.h3}>Residual standard error</h3>
        <BlockMath math="s = \sqrt{MSE} = 4.231 \quad \text{com } 196 \text{ gl} \;(= n-k-1 = 200-3-1)" />
        <p style={S.p}>
          Este é o estimador de σ. Mede a dispersão típica dos resíduos em unidades de Y. É usado para calcular todos os erros-padrão dos coeficientes.
        </p>

        <h3 style={S.h3}>R² e R² Ajustado</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Medida</th>
              <th style={S.th}>Valor</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...S.td, fontWeight: 700 }}>R²</td>
              <td style={S.td}>0.6834</td>
              <td style={S.td}>68.3% da variância de salário é explicada pelo modelo</td>
            </tr>
            <tr>
              <td style={{ ...S.td, fontWeight: 700 }}>R² Ajustado</td>
              <td style={S.td}>0.6784</td>
              <td style={S.td}>Penaliza por k — preferível para comparar modelos com diferente n.º de preditores</td>
            </tr>
          </tbody>
        </table>
        <BlockMath math="R^2_{\text{adj}} = 1 - (1-R^2)\cdot\frac{n-1}{n-k-1}" />

        <h3 style={S.h3}>F-statistic</h3>
        <p style={S.p}>
          F = 141.3 com 3 e 196 df, p {'<'} 2.2e-16. Rejeita-se H₀ de que todos os coeficientes são zero — o modelo tem poder explicativo global altamente significativo. O F global é o teste de Wald para o conjunto de todas as restrições βⱼ = 0 (j = 1,...,k).
        </p>
        <div style={S.note}>
          O R² ajustado pode diminuir quando se acrescenta um preditor que não melhora o modelo. Utilize-o como guia na selecção de variáveis, mas não como critério único — AIC e BIC são alternativas baseadas em verosimilhança.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 11. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Síntese do Módulo</h2>
        <p style={S.p}>
          A inferência em regressão assenta num conjunto coerente de ferramentas que quantificam a incerteza das estimativas OLS e permitem testes formais de hipóteses:
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Ferramenta</th>
                <th style={S.th}>Uso</th>
                <th style={S.th}>Distribuição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Teste t', 'Significância de βⱼ individual', 't(n-k-1)'],
                ['IC para β̂ⱼ', 'Intervalo plausível para βⱼ', 'β̂ⱼ ± t · SE'],
                ['IC de previsão', 'Incerteza sobre Ŷ médio em x₀', 'Depende de h₀₀'],
                ['IP de previsão', 'Incerteza sobre Y individual em x₀', 'Inclui variância do erro'],
                ['Combinação linear', 'Inferência sobre aβ₁ + bβ₂', 'Usa Cov(β̂₁, β̂₂)'],
                ['Teste F global', 'Todos os βⱼ = 0?', 'F(k, n-k-1)'],
                ['Teste F parcial', 'q restrições conjuntas', 'F(q, n-k-1)'],
                ['Teste de Wald', 'Forma geral: Rβ = r', 'F(q, n-k-1)'],
              ].map(([f, u, d]) => (
                <tr key={f}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{f}</td>
                  <td style={S.td}>{u}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Fluxo recomendado de análise:</strong> (1) verifique os pressupostos do modelo antes de inferir; (2) interprete o teste F global; (3) examine os testes t individuais e ICs; (4) distinga significância estatística de relevância prática; (5) use testes conjuntos para hipóteses com múltiplas restrições; (6) reporte sempre ICs além dos p-values.
          </p>
        </div>
      </section>
    </div>
  );
}
