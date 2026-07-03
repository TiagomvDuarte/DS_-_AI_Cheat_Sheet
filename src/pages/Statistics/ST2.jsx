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

// Helper: binomial coefficient
function binom(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let result = 1;
  for (let i = 0; i < k; i++) {
    result = result * (n - i) / (i + 1);
  }
  return result;
}

// Helper: binomial PMF
function binomPMF(n, p, k) {
  return binom(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

// Helper: Poisson PMF
function poissonPMF(lambda, k) {
  let logP = -lambda + k * Math.log(lambda);
  for (let i = 1; i <= k; i++) logP -= Math.log(i);
  return Math.exp(logP);
}

// Normal PDF for overlay
function normalPDF(x, mu, sigma) {
  return Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2)) / (sigma * Math.sqrt(2 * Math.PI));
}

// ── SVG: PMF bar chart + CDF step function ──
function PMFCDFChart() {
  const probs = [0.1, 0.2, 0.3, 0.2, 0.15, 0.05];
  const xs = [0, 1, 2, 3, 4, 5];
  const W = 400, H = 200;
  const padL = 38, padR = 10, padT = 14, padB = 28;
  const barW = 28;
  const chartW = W - padL - padR;
  const chartH = (H - padT - padB) / 2 - 6;
  const gap = chartH + 28;

  const maxP = 0.35;
  const xStep = chartW / 6;

  // CDF
  const cdf = [];
  let acc = 0;
  for (const p of probs) { acc += p; cdf.push(acc); }

  const barColor = color;
  const stepColor = '#f97316';

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }} aria-label="PMF e CDF">
      {/* ── PMF ── */}
      <text x={padL - 4} y={padT + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">P(x)</text>
      {/* Y axis ticks PMF */}
      {[0, 0.1, 0.2, 0.3].map(v => {
        const y = padT + chartH - (v / maxP) * chartH;
        return (
          <g key={v}>
            <line x1={padL - 3} y1={y} x2={padL} y2={y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={padL - 5} y={y + 3} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
          </g>
        );
      })}
      {/* X axis PMF */}
      <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Bars PMF */}
      {probs.map((p, i) => {
        const cx = padL + i * xStep + xStep / 2;
        const barH = (p / maxP) * chartH;
        const by = padT + chartH - barH;
        return (
          <g key={i}>
            <rect x={cx - barW / 2} y={by} width={barW} height={barH} fill={barColor} opacity="0.85" rx="2" />
            <text x={cx} y={by - 3} textAnchor="middle" fontSize="8" fill={barColor} fontWeight="700">{p}</text>
            <text x={cx} y={padT + chartH + 10} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{i}</text>
          </g>
        );
      })}
      <text x={padL + chartW / 2} y={padT + chartH + 22} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PMF — x</text>

      {/* ── CDF ── */}
      <text x={padL - 4} y={padT + gap + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">F(x)</text>
      {[0, 0.5, 1.0].map(v => {
        const y = padT + gap + chartH - v * chartH;
        return (
          <g key={v}>
            <line x1={padL - 3} y1={y} x2={padL} y2={y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={padL - 5} y={y + 3} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
          </g>
        );
      })}
      <line x1={padL} y1={padT + gap + chartH} x2={W - padR} y2={padT + gap + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + gap} x2={padL} y2={padT + gap + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Step function CDF */}
      {cdf.map((v, i) => {
        const cx = padL + i * xStep + xStep / 2;
        const nextCx = cx + xStep;
        const y = padT + gap + chartH - v * chartH;
        const prevY = i === 0 ? padT + gap + chartH : padT + gap + chartH - cdf[i - 1] * chartH;
        return (
          <g key={i}>
            {i === 0 && <line x1={padL} y1={padT + gap + chartH} x2={cx} y2={padT + gap + chartH} stroke={stepColor} strokeWidth="2" />}
            <line x1={cx} y1={prevY} x2={cx} y2={y} stroke={stepColor} strokeWidth="1.5" strokeDasharray="3,2" />
            <line x1={cx} y1={y} x2={Math.min(nextCx, W - padR)} y2={y} stroke={stepColor} strokeWidth="2" />
            <circle cx={cx} cy={y} r="3" fill={stepColor} />
            <text x={cx} y={padT + gap + chartH + 10} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{i}</text>
          </g>
        );
      })}
      <text x={padL + chartW / 2} y={padT + gap + chartH + 22} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">CDF — x</text>
    </svg>
  );
}

// ── SVG: Bernoulli two-bar ──
function BernoulliChart() {
  const W = 320, H = 130;
  const configs = [{ p: 0.3, label: 'p = 0.3' }, { p: 0.7, label: 'p = 0.7' }];
  const padL = 30, padT = 14, padB = 30;
  const chartH = H - padT - padB;
  const halfW = (W - padL) / 2;
  const barW = 26;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }} aria-label="Bernoulli">
      {configs.map(({ p, label }, ci) => {
        const ox = padL + ci * halfW;
        const bars = [{ x: 0, v: 1 - p }, { x: 1, v: p }];
        return (
          <g key={ci}>
            <line x1={ox} y1={padT} x2={ox} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
            <line x1={ox} y1={padT + chartH} x2={ox + halfW - 4} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={ox + halfW / 2} y={padT - 2} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{label}</text>
            {bars.map(({ x, v }) => {
              const cx = ox + (x + 1) * (halfW / 3);
              const barH = v * chartH * 0.9;
              const by = padT + chartH - barH;
              return (
                <g key={x}>
                  <rect x={cx - barW / 2} y={by} width={barW} height={barH} fill={x === 1 ? color : '#f97316'} opacity="0.85" rx="2" />
                  <text x={cx} y={by - 3} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{v.toFixed(2)}</text>
                  <text x={cx} y={padT + chartH + 12} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{x === 0 ? '0' : '1'}</text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

// ── Interactive Binomial Chart ──
function BinomialChart() {
  const [pVal, setPVal] = useState(0.3);
  const n = 10;
  const probs = Array.from({ length: n + 1 }, (_, k) => ({ k, p: binomPMF(n, pVal, k) }));
  const maxP = Math.max(...probs.map(d => d.p)) * 1.15;

  const W = 400, H = 180;
  const padL = 40, padR = 10, padT = 20, padB = 30;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const barW = Math.floor(chartW / (n + 1)) - 3;
  const xStep = chartW / (n + 1);

  // Normal overlay
  const mu = n * pVal;
  const sigma = Math.sqrt(n * pVal * (1 - pVal));
  const overlayPoints = [];
  for (let x = 0; x <= n; x += 0.2) {
    const y = normalPDF(x, mu, sigma);
    const px = padL + (x + 0.5) * xStep;
    const py = padT + chartH - (y / (maxP)) * chartH;
    overlayPoints.push(`${px},${py}`);
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>p =</label>
        <select
          value={pVal}
          onChange={e => setPVal(parseFloat(e.target.value))}
          style={{ padding: '0.3rem 0.6rem', borderRadius: 6, border: '1px solid var(--card-border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.9rem' }}
        >
          {[0.1, 0.3, 0.5, 0.7, 0.9].map(v => <option key={v} value={v}>{v}</option>)}
        </select>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>n = 10, E[X] = {(n * pVal).toFixed(1)}, Var = {(n * pVal * (1 - pVal)).toFixed(2)}</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }}>
        <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="1" />
        {[0, 0.1, 0.2, 0.3].filter(v => v <= maxP).map(v => {
          const y = padT + chartH - (v / maxP) * chartH;
          return (
            <g key={v}>
              <line x1={padL - 3} y1={y} x2={padL} y2={y} stroke="var(--text-secondary)" strokeWidth="1" />
              <text x={padL - 5} y={y + 3} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
            </g>
          );
        })}
        {probs.map(({ k, p }) => {
          const cx = padL + k * xStep + xStep / 2;
          const barH = (p / maxP) * chartH;
          const by = padT + chartH - barH;
          return (
            <g key={k}>
              <rect x={cx - barW / 2} y={by} width={barW} height={barH} fill={color} opacity="0.8" rx="2" />
              <text x={cx} y={padT + chartH + 10} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{k}</text>
            </g>
          );
        })}
        {/* Normal overlay */}
        {n * pVal >= 5 && (
          <polyline
            points={overlayPoints.join(' ')}
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray="4,2"
            opacity="0.9"
          />
        )}
        {n * pVal >= 5 && (
          <text x={W - padR - 2} y={padT + 10} textAnchor="end" fontSize="8" fill="#f97316">≈ Normal</text>
        )}
        <text x={padL + chartW / 2} y={H - 2} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">k (sucessos em 10 ensaios)</text>
      </svg>
    </div>
  );
}

// ── SVG: Poisson small multiples ──
function PoissonChart() {
  const lambdas = [1, 3, 7];
  const kMax = [8, 12, 18];
  const W = 400, H = 140;
  const cols = 3;
  const colW = W / cols;
  const padL = 8, padT = 18, padB = 22;
  const chartH = H - padT - padB;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: '100%' }} aria-label="Poisson">
      {lambdas.map((lam, ci) => {
        const km = kMax[ci];
        const probs = Array.from({ length: km + 1 }, (_, k) => poissonPMF(lam, k));
        const maxP = Math.max(...probs) * 1.1;
        const ox = ci * colW + padL;
        const availW = colW - padL * 2;
        const xStep = availW / (km + 1);
        const barW = Math.max(2, xStep - 2);
        return (
          <g key={lam}>
            <text x={ox + availW / 2} y={padT - 4} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">λ = {lam}</text>
            <line x1={ox} y1={padT} x2={ox} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="0.8" />
            <line x1={ox} y1={padT + chartH} x2={ox + availW} y2={padT + chartH} stroke="var(--text-secondary)" strokeWidth="0.8" />
            {probs.map((p, k) => {
              const cx = ox + k * xStep + xStep / 2;
              const barH = (p / maxP) * chartH;
              const by = padT + chartH - barH;
              return (
                <g key={k}>
                  <rect x={cx - barW / 2} y={by} width={barW} height={barH} fill={color} opacity="0.75" rx="1" />
                  {k % Math.ceil(km / 4) === 0 && (
                    <text x={cx} y={H - 4} textAnchor="middle" fontSize="7" fill="var(--text-secondary)">{k}</text>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

// ── Main component ──
export default function ST2() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Distribuições Discretas</h1>
      <p style={S.lead}>
        Uma variável aleatória discreta toma valores num conjunto contável. As distribuições discretas descrevem
        a probabilidade de cada valor possível e são fundamentais em contagem, ensaios repetidos e modelação de
        eventos raros. Neste módulo estudamos a PMF, CDF, valor esperado, variância e as distribuições mais
        importantes: Bernoulli, Binomial, Poisson, Geométrica e Hipergeométrica.
      </p>

      {/* ── 1. PMF e CDF ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Função de Massa de Probabilidade (PMF) e CDF</h2>

        <p style={S.p}>
          A <strong>Função de Massa de Probabilidade</strong> (PMF, do inglês <em>Probability Mass Function</em>)
          de uma variável aleatória discreta X é a função p(x) = P(X = x), definida para cada valor possível de X.
        </p>

        
          <strong>Propriedades da PMF:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><InlineMath math="p(x) \geq 0" /> para todo x</li>
            <li><InlineMath math="\sum p(x) = 1" /> (soma sobre todos os valores possíveis)</li>
            <li><InlineMath math="P(a \leq X \leq b) = \sum_{x=a}^{b} p(x)" /></li>
          </ul>
        

        <p style={S.p}>
          A <strong>Função de Distribuição Acumulada</strong> (CDF) é definida como F(x) = P(X ≤ x) = Σ p(k) para
          k ≤ x. Para distribuições discretas, a CDF é uma função em escada — cresce apenas nos pontos com
          probabilidade positiva.
        </p>

        
          <strong>Relação PMF ↔ CDF:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><InlineMath math="F(x) = \sum_{k \leq x} p(k)" /></li>
            <li><InlineMath math="p(x) = F(x) - F(x-1)" /></li>
            <li><InlineMath math="P(a < X \leq b) = F(b) - F(a)" /></li>
          </ul>
        

        <div style={S.diagram}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Exemplo: PMF (barras roxas) e CDF em escada (lilás) para uma distribuição discreta com suporte {'{0,1,2,3,4,5}'}
          </div>
          <PMFCDFChart />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.5rem 0 0' }}>
            Notar que a CDF é constante entre pontos de suporte e salta em cada valor com probabilidade positiva.
          </p>
        </div>

        <div style={S.note}>
          <strong>Nota:</strong> A CDF de uma variável discreta é sempre contínua pela direita (right-continuous),
          ou seja, F(x) = lim F(x + ε) quando ε → 0⁺.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Valor Esperado e Variância ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Valor Esperado e Variância</h2>

        <p style={S.p}>
          O <strong>valor esperado</strong> (ou esperança matemática) de uma variável aleatória discreta X é
          a média ponderada dos valores possíveis, pesados pelas respetivas probabilidades:
        </p>

        
          <strong>Definições fundamentais:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2.2 }}>
            <li><InlineMath math="E[X] = \sum_x x \cdot p(x)" /></li>
            <li><InlineMath math="E[X^2] = \sum_x x^2 \cdot p(x)" /></li>
            <li><InlineMath math="\text{Var}(X) = E[X^2] - (E[X])^2 = E[(X - \mu)^2]" /></li>
            <li><InlineMath math="\sigma(X) = \sqrt{\text{Var}(X)}" /> (desvio padrão)</li>
          </ul>
        

        <h3 style={S.h3}>Propriedades da Esperança e Variância</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Esperança</th>
              <th style={S.th}>Variância</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Constante c', 'E[c] = c', 'Var(c) = 0'],
              ['Escala a', 'E[aX] = a·E[X]', 'Var(aX) = a²·Var(X)'],
              ['Translação b', 'E[X+b] = E[X]+b', 'Var(X+b) = Var(X)'],
              ['Linear aX+b', 'E[aX+b] = a·E[X]+b', 'Var(aX+b) = a²·Var(X)'],
              ['Soma (independentes)', 'E[X+Y] = E[X]+E[Y]', 'Var(X+Y) = Var(X)+Var(Y)'],
            ].map(([prop, esp, vari]) => (
              <tr key={prop}>
                <td style={S.td}>{prop}</td>
                <td style={S.td}>{esp}</td>
                <td style={S.td}>{vari}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplo: Lançamento de um dado equilibrado</h3>
        <p style={S.p}>X ∈ {'{ 1, 2, 3, 4, 5, 6 }'}, cada com probabilidade 1/6.</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>x</th>
              <th style={S.th}>p(x)</th>
              <th style={S.th}>x · p(x)</th>
              <th style={S.th}>x² · p(x)</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5,6].map(x => (
              <tr key={x}>
                <td style={S.td}>{x}</td>
                <td style={S.td}>1/6 ≈ {(1/6).toFixed(4)}</td>
                <td style={S.td}>{(x/6).toFixed(4)}</td>
                <td style={S.td}>{(x*x/6).toFixed(4)}</td>
              </tr>
            ))}
            <tr>
              <td style={{ ...S.td, fontWeight: 700 }}>Σ</td>
              <td style={{ ...S.td, fontWeight: 700 }}>1</td>
              <td style={{ ...S.td, fontWeight: 700 }}>3.5000</td>
              <td style={{ ...S.td, fontWeight: 700 }}>15.1667</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          <InlineMath math="E[X] = 3.5" /> &nbsp;|&nbsp; <InlineMath math="E[X^2] = 91/6 \approx 15.1667" /> &nbsp;|&nbsp; <InlineMath math="\text{Var}(X) = 15.1667 - 3.5^2 = 2.9167" /> &nbsp;|&nbsp; <InlineMath math="\sigma \approx 1.708" />
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Bernoulli ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Distribuição de Bernoulli</h2>

        <p style={S.p}>
          A distribuição de Bernoulli modela um único ensaio com dois resultados possíveis: <em>sucesso</em> (X=1)
          com probabilidade p e <em>insucesso</em> (X=0) com probabilidade 1−p.
        </p>

        
          <strong>PMF:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><InlineMath math="P(X = 1) = p" /></li>
            <li><InlineMath math="P(X = 0) = 1 - p" /></li>
            <li><InlineMath math="E[X] = p" /></li>
            <li><InlineMath math="\text{Var}(X) = p(1-p)" /> — máxima quando p = 0.5</li>
          </ul>
        

        <div style={S.diagram}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            PMF de Bernoulli para p = 0.3 (esquerda) e p = 0.7 (direita)
          </div>
          <BernoulliChart />
        </div>

        <h3 style={S.h3}>Quando usar a distribuição de Bernoulli</h3>
        <ul style={{ ...S.p, paddingLeft: '1.2rem' }}>
          <li>Resultado de uma moeda: cara (sucesso) ou coroa (insucesso)</li>
          <li>Aprovação ou reprovação num exame</li>
          <li>Clique ou não-clique num anúncio digital</li>
          <li>Presença ou ausência de uma doença num diagnóstico</li>
        </ul>

        <div style={S.note}>
          <strong>Bloco de construção:</strong> a Bernoulli é o elemento fundamental. A soma de n variáveis
          Bernoulli i.i.d. com parâmetro p segue uma distribuição Binomial B(n, p).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Binomial ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Distribuição Binomial</h2>

        <p style={S.p}>
          A distribuição Binomial B(n, p) conta o número de sucessos em n ensaios de Bernoulli independentes,
          cada um com probabilidade de sucesso p.
        </p>

        
          <strong>PMF e momentos:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><InlineMath math="P(X = k) = \binom{n}{k} p^k (1-p)^{n-k},\quad k = 0, 1, \ldots, n" /></li>
            <li><InlineMath math="E[X] = np" /></li>
            <li><InlineMath math="\text{Var}(X) = np(1-p)" /></li>
            <li>Moda: <InlineMath math="\lfloor (n+1)p \rfloor" /></li>
          </ul>
        

        <h3 style={S.h3}>Condições de aplicação</h3>
        <ul style={{ ...S.p, paddingLeft: '1.2rem' }}>
          <li>Número fixo n de ensaios</li>
          <li>Cada ensaio é independente dos demais</li>
          <li>Probabilidade de sucesso p constante em todos os ensaios</li>
          <li>Apenas dois resultados por ensaio (sucesso / insucesso)</li>
        </ul>

        <h3 style={S.h3}>PMF interativa — B(10, p)</h3>
        <div style={S.diagram}>
          <BinomialChart />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.75rem 0 0' }}>
            A linha a tracejado amarelo mostra a aproximação Normal N(np, np(1−p)) quando np ≥ 5.
          </p>
        </div>

        <h3 style={S.h3}>Aproximação Normal</h3>
        <p style={S.p}>
          Quando n é grande e <InlineMath math="np \geq 5" /> e <InlineMath math="n(1-p) \geq 5" />, a Binomial pode ser aproximada por uma distribuição
          Normal com <InlineMath math="\mu = np" /> e <InlineMath math="\sigma^2 = np(1-p)" />. Aplica-se a correção de continuidade: <InlineMath math="P(X \leq k) \approx \Phi\!\left(\frac{k + 0.5 - np}{\sigma}\right)" />.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Poisson ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Distribuição de Poisson</h2>

        <p style={S.p}>
          A distribuição de Poisson Poi(λ) modela o número de eventos que ocorrem num intervalo fixo de tempo
          ou espaço, quando os eventos ocorrem de forma independente a uma taxa média λ.
        </p>

        
          <strong>PMF e momentos:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><InlineMath math="P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!},\quad k = 0, 1, 2, \ldots" /></li>
            <li><InlineMath math="E[X] = \lambda" /></li>
            <li><InlineMath math="\text{Var}(X) = \lambda" /> — média igual à variância!</li>
            <li>Moda: <InlineMath math="\lfloor \lambda \rfloor" /> (e também <InlineMath math="\lfloor \lambda \rfloor - 1" /> quando λ é inteiro)</li>
          </ul>
        

        <div style={S.diagram}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            PMF de Poisson para λ = 1, λ = 3 e λ = 7 (pequenos múltiplos)
          </div>
          <PoissonChart />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.75rem 0 0' }}>
            À medida que λ cresce, a distribuição torna-se mais simétrica e aproxima-se de uma Normal.
          </p>
        </div>

        <h3 style={S.h3}>Convergência Binomial → Poisson</h3>
        <p style={S.p}>
          Se <InlineMath math="X \sim B(n, p)" /> com <InlineMath math="n \to \infty" /> e <InlineMath math="p \to 0" /> de tal forma que <InlineMath math="np = \lambda" /> permanece constante,
          então X converge em distribuição para <InlineMath math="\text{Poi}(\lambda)" />. Esta aproximação é prática quando n ≥ 20 e p ≤ 0.05.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>n</th>
              <th style={S.th}>p</th>
              <th style={S.th}>λ = np</th>
              <th style={S.th}>Qualidade da aproximação</th>
            </tr>
          </thead>
          <tbody>
            {[
              [10, 0.1, 1.0, 'Razoável'],
              [50, 0.04, 2.0, 'Boa'],
              [100, 0.03, 3.0, 'Muito boa'],
              [500, 0.01, 5.0, 'Excelente'],
            ].map(([n, p, lam, q]) => (
              <tr key={n}>
                <td style={S.td}>{n}</td>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{lam}</td>
                <td style={S.td}>{q}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplos de aplicação</h3>
        <ul style={{ ...S.p, paddingLeft: '1.2rem' }}>
          <li>Número de chamadas recebidas por uma central telefónica por minuto</li>
          <li>Número de erros tipográficos por página de um livro</li>
          <li>Número de avarias numa máquina por semana</li>
          <li>Número de partículas radioativas detetadas por segundo</li>
          <li>Número de acessos a um servidor web por segundo</li>
        </ul>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Geométrica e Hipergeométrica ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Distribuição Geométrica e Hipergeométrica</h2>

        <h3 style={S.h3}>Distribuição Geométrica Geo(p)</h3>
        <p style={S.p}>
          Modela o número de ensaios de Bernoulli necessários até obter o primeiro sucesso.
        </p>
        
          <strong>PMF e momentos (número de ensaios X):</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><InlineMath math="P(X = k) = (1-p)^{k-1} p,\quad k = 1, 2, 3, \ldots" /></li>
            <li><InlineMath math="E[X] = \frac{1}{p}" /></li>
            <li><InlineMath math="\text{Var}(X) = \frac{1-p}{p^2}" /></li>
          </ul>
        

        <p style={S.p}>
          <strong>Propriedade da falta de memória (memoryless):</strong> <InlineMath math="P(X > s + t \mid X > s) = P(X > t)" />.
          Isto significa que, dado que já ocorreram s insucessos, a probabilidade de esperar mais t ensaios é
          a mesma que esperar t ensaios desde o início. Esta é a única distribuição discreta com esta propriedade.
        </p>

        <div style={S.note}>
          <strong>Variante:</strong> Nalgumas referências, Y = X − 1 conta o número de <em>insucessos</em>
          antes do primeiro sucesso: P(Y = k) = (1−p)^k · p, k = 0, 1, 2, … , com E[Y] = (1−p)/p.
        </div>

        <h3 style={S.h3}>Distribuição Hipergeométrica H(N, K, n)</h3>
        <p style={S.p}>
          Modela o número de sucessos numa amostra sem reposição de tamanho n, retirada de uma população
          de N elementos, dos quais K são "sucessos". Ao contrário da Binomial, os ensaios não são independentes.
        </p>
        
          <strong>PMF e momentos:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li><InlineMath math="P(X = k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}" /></li>
            <li><InlineMath math="E[X] = n \cdot \frac{K}{N}" /></li>
            <li><InlineMath math="\text{Var}(X) = n \cdot \frac{K}{N} \cdot \left(1 - \frac{K}{N}\right) \cdot \frac{N-n}{N-1}" /></li>
            <li>O fator <InlineMath math="\frac{N-n}{N-1}" /> é o fator de correção para população finita</li>
          </ul>
        

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Característica</th>
              <th style={S.th}>Binomial</th>
              <th style={S.th}>Hipergeométrica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Amostragem', 'Com reposição', 'Sem reposição'],
              ['Independência', 'Sim', 'Não'],
              ['Pop. finita/infinita', 'Infinita (ou grande)', 'Finita'],
              ['E[X]', 'np', 'nK/N'],
              ['Var(X)', 'np(1−p)', 'np(1−p)·(N−n)/(N−1)'],
            ].map(([c, b, h]) => (
              <tr key={c}>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{h}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={S.p}>
          Quando n/N ≤ 0.05 (amostra pequena face à população), a Hipergeométrica aproxima-se bem da Binomial
          com p = K/N, pois a remoção de um elemento tem impacto negligenciável nas probabilidades subsequentes.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Comparação e Quando Usar ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Comparação e Quando Usar</h2>

        <p style={S.p}>
          A escolha da distribuição correta depende da estrutura do problema. A tabela seguinte resume
          as condições de aplicação e as principais diferenças:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Distribuição</th>
              <th style={S.th}>Parâmetros</th>
              <th style={S.th}>Situação típica</th>
              <th style={S.th}>Suporte</th>
              <th style={S.th}>E[X]</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Bernoulli', 'p', 'Único ensaio: sucesso/insucesso', '{0, 1}', 'p'],
              ['Binomial B(n,p)', 'n, p', 'n ensaios indep., conta sucessos', '{0, …, n}', 'np'],
              ['Poisson Poi(λ)', 'λ', 'Eventos raros/taxa constante', '{0, 1, 2, …}', 'λ'],
              ['Geométrica Geo(p)', 'p', 'Espera até ao 1.º sucesso', '{1, 2, 3, …}', '1/p'],
              ['Hipergeométrica H(N,K,n)', 'N, K, n', 'Amostragem sem reposição', '{max(0,n−N+K), …, min(n,K)}', 'nK/N'],
            ].map(([d, par, sit, sup, ex]) => (
              <tr key={d}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{d}</td>
                <td style={S.td}>{par}</td>
                <td style={S.td}>{sit}</td>
                <td style={S.td}>{sup}</td>
                <td style={S.td}>{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Guia de decisão rápida</h3>
        <div style={S.diagram}>
          <ul style={{ lineHeight: 2.2, margin: 0, paddingLeft: '1.4rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            <li><strong style={{ color }}>Bernoulli</strong> — apenas um ensaio com dois resultados.</li>
            <li><strong style={{ color }}>Binomial</strong> — n ensaios independentes, mesma p, conta sucessos. Usar quando n ≤ 20 ou np ≥ 5.</li>
            <li><strong style={{ color }}>Poisson</strong> — eventos ocorrem a taxa λ por unidade de tempo/espaço; ou Binomial com n grande e p pequeno (λ = np).</li>
            <li><strong style={{ color }}>Geométrica</strong> — quanto tempo até ao primeiro sucesso? Ensaios independentes com p constante.</li>
            <li><strong style={{ color }}>Hipergeométrica</strong> — como a Binomial, mas população finita e amostragem <em>sem</em> reposição.</li>
          </ul>
        </div>

        <h3 style={S.h3}>Exemplos contextualizados</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Problema</th>
              <th style={S.th}>Distribuição adequada</th>
              <th style={S.th}>Justificação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Moeda cara/coroa uma vez', 'Bernoulli(0.5)', 'Único ensaio binário'],
              ['10 lançamentos, contar caras', 'Binomial(10, 0.5)', 'n fixo, ensaios independentes'],
              ['Nº de e-mails spam por hora', 'Poisson(λ)', 'Eventos a taxa constante'],
              ['Nº de lançamentos até sair 6', 'Geométrica(1/6)', 'Espera até 1.º sucesso'],
              ['5 bolas de 20 (8 vermelhas)', 'Hipergeométrica(20,8,5)', 'Sem reposição'],
            ].map(([prob, dist, just]) => (
              <tr key={prob}>
                <td style={S.td}>{prob}</td>
                <td style={{ ...S.td, fontWeight: 600, color }}>{dist}</td>
                <td style={S.td}>{just}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>

        <p style={S.p}>
          As distribuições discretas são ferramentas fundamentais da probabilidade aplicada. Neste módulo
          percorremos os conceitos essenciais e as distribuições mais usadas em estatística, ciência de dados
          e investigação operacional.
        </p>

        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Conceito</th>
                <th style={S.th}>Fórmula chave</th>
                <th style={S.th}>Observação</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['PMF', 'p(x) = P(X = x)', 'Σ p(x) = 1'],
                ['CDF', 'F(x) = Σ p(k), k ≤ x', 'Função em escada'],
                ['E[X]', 'Σ x·p(x)', 'Centro de massa'],
                ['Var(X)', 'E[X²] − (E[X])²', 'Sempre ≥ 0'],
                ['Bernoulli(p)', 'E=p, Var=p(1−p)', 'Um ensaio'],
                ['Binomial(n,p)', 'E=np, Var=np(1−p)', 'n ensaios indep.'],
                ['Poisson(λ)', 'E=Var=λ', 'Eventos raros'],
                ['Geométrica(p)', 'E=1/p, Var=(1−p)/p²', 'Sem memória'],
                ['Hipergeométrica(N,K,n)', 'E=nK/N', 'Sem reposição'],
              ].map(([c, f, o]) => (
                <tr key={c}>
                  <td style={{ ...S.td, fontWeight: 600, color }}>{c}</td>
                  <td style={S.td}>{f}</td>
                  <td style={S.td}>{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.highlight}>
          <strong>Relações entre distribuições:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li>Bernoulli(p) é um caso especial de Binomial com n = 1</li>
            <li>Binomial(n, p) → Poisson(λ) quando n → ∞, p → 0, np = λ</li>
            <li>Binomial(n, p) → Normal(np, np(1−p)) quando np ≥ 5 e n(1−p) ≥ 5</li>
            <li>Hipergeométrica(N,K,n) → Binomial(n, K/N) quando n/N → 0</li>
            <li>Geométrica é a única distribuição discreta sem memória</li>
          </ul>
        </div>

      </section>
    </div>
  );
}
