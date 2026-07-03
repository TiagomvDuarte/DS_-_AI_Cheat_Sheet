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
          <path d={pathN06} fill="none" stroke="#f97316" strokeWidth="2" />
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
        MA(1) com theta=0.7: resposta ao impulso (trunca apos lag 1)
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
        Correlograma teorico: ACF e PACF para AR(1), MA(1) e ARMA(1,1)
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
        <Panel data={rwI1} label="I(1) — passeio aleatorio (nao estacionario)" yOff={H} clr="#f97316" />
        <Panel data={rwI2} label="I(2) — dupla integracao" yOff={H * 2} clr="#f97316" />
      </svg>
    </div>
  );
}

export default function ST12() {
  return (
    <div style={S.page}>
      {/* Back link */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO ST12</div>
      <h1 style={S.h1}>Processos ARMA &amp; Testes de Raiz Unitária</h1>
      <p style={S.lead}>
        Os modelos ARMA constituem a espinha dorsal da modelação de séries temporais univariadas.
        Combinam memória autoregressiva (AR) com choques médios móveis (MA), permitindo descrever
        de forma parcimoniosa uma vasta gama de processos estacionários. O diagnóstico de raiz unitária
        — testes ADF e KPSS — é a etapa prévia indispensável à escolha de transformações adequadas.
      </p>

      {/* ── 1. AR(p) ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Processo AR(p)</h2>
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

      <hr style={S.divider} />

      {/* ── 2. Operador Lag ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Operador Lag (L)</h2>
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

      <hr style={S.divider} />

      {/* ── 3. MA(q) ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Processo MA(q)</h2>
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
          Para que o processo MA(q) admita uma representação AR(∞) é necessário que as raízes de
          Θ(z) = 1 + θ₁z + … + θ<sub>q</sub>z<sup>q</sup> estejam fora do círculo unitário.
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

      <hr style={S.divider} />

      {/* ── 4. ARMA(p,q) ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Processo ARMA(p,q)</h2>
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

      <hr style={S.divider} />

      {/* ── 5. ACF e PACF ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. ACF e PACF — Identificação da Ordem</h2>
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

      <hr style={S.divider} />

      {/* ── 6. Estimação ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Estimação de Modelos ARMA</h2>
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

      <hr style={S.divider} />

      {/* ── 7. Diagnóstico ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Diagnóstico de Resíduos</h2>
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

      <hr style={S.divider} />

      {/* ── 8. Raiz Unitária ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Raiz Unitária e Integração</h2>
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

      <hr style={S.divider} />

      {/* ── 9. Teste ADF ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Teste Dickey-Fuller Aumentado (ADF)</h2>
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

      <hr style={S.divider} />

      {/* ── 10. Teste KPSS ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Teste KPSS</h2>
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

      <hr style={S.divider} />

      {/* ── 11. Cointegração ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Cointegração — Introdução</h2>
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

      <hr style={S.divider} />

      {/* ── 12. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          Este módulo percorreu o núcleo da modelação ARMA e o diagnóstico de estacionaridade:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Ideia-chave</th>
              <th style={S.th}>Função R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>AR(p)</strong></td>
              <td style={S.td}>Memória de longo alcance; ACF decai, PACF corta em p</td>
              <td style={S.td}><code>arima(, order=c(p,0,0))</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>MA(q)</strong></td>
              <td style={S.td}>Sempre estacionário; ACF corta em q, PACF decai</td>
              <td style={S.td}><code>arima(, order=c(0,0,q))</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>ARMA(p,q)</strong></td>
              <td style={S.td}>Parcimónia; ambas as funções decaem</td>
              <td style={S.td}><code>auto.arima()</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>AIC / BIC</strong></td>
              <td style={S.td}>Selecção de ordem; minimizar</td>
              <td style={S.td}><code>AIC(), BIC()</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>Ljung-Box</strong></td>
              <td style={S.td}>Testar ruído branco nos resíduos</td>
              <td style={S.td}><code>Box.test()</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>ADF</strong></td>
              <td style={S.td}>H₀: raiz unitária; valores críticos de MacKinnon</td>
              <td style={S.td}><code>adf.test(), ur.df()</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>KPSS</strong></td>
              <td style={S.td}>H₀: estacionário; complementar ao ADF</td>
              <td style={S.td}><code>kpss.test()</code></td>
            </tr>
            <tr>
              <td style={S.td}><strong>Cointegração</strong></td>
              <td style={S.td}>Relação de equilíbrio entre séries I(1)</td>
              <td style={S.td}><code>po.test(), ca.jo()</code></td>
            </tr>
          </tbody>
        </table>
        <div style={{ ...S.highlight, marginTop: '1.5rem' }}>
          <strong>Fluxo de trabalho recomendado:</strong>
          <ol style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li>Visualizar a série e calcular ACF/PACF</li>
            <li>Testar raiz unitária (ADF + KPSS) e diferenciar se necessário</li>
            <li>Identificar ordem ARMA pelos padrões de ACF/PACF</li>
            <li>Estimar vários modelos candidatos; comparar AIC/BIC</li>
            <li>Diagnosticar resíduos (Ljung-Box, normalidade)</li>
            <li>Seleccionar modelo final e produzir previsões com intervalos</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
