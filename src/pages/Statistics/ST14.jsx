import { Link } from 'react-router-dom';
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

/* ── helpers ─────────────────────────────────────────────────────────── */
function toPath(pts, yMin, yMax, w, h) {
  const sx = (i) => 10 + (i / (pts.length - 1)) * (w - 20);
  const sy = (v) => h - 6 - ((v - yMin) / (yMax - yMin + 0.001)) * (h - 12);
  return pts.map((v, i) => `${i === 0 ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)}`).join(' ');
}

/* raw series: trend + seasonal + noise (fixed) */
const RAW24 = [
  12, 15, 11, 18, 14, 19, 13, 22, 17, 24, 19, 28,
  21, 26, 20, 30, 25, 32, 27, 35, 29, 37, 31, 40,
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
function PanelChart({ series, label, strokeColor, yMin, yMax, w = 560, h = 60 }) {
  const path = toPath(series, yMin, yMax, w, h);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
      <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', width: 80, textAlign: 'right', flexShrink: 0 }}>{label}</span>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, height: h, display: 'block' }}>
        <path d={path} fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ── Decomposition chart ─────────────────────────────────────────────── */
function DecompositionChart() {
  const w = 560;
  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Decomposicao classica — serie original e componentes
      </div>
      <PanelChart series={RAW24} label="Original" strokeColor="var(--text-secondary)" yMin={8} yMax={44} w={w} h={60} />
      <PanelChart series={TREND24} label="Tendencia" strokeColor={color} yMin={8} yMax={44} w={w} h={60} />
      <PanelChart series={SEASONAL24} label="Sazonalidade" strokeColor="#f97316" yMin={-6} yMax={6} w={w} h={60} />
      <PanelChart series={RESID24} label="Residuo" strokeColor="#f97316" yMin={-6} yMax={6} w={w} h={60} />
    </div>
  );
}

/* ── MA chart ────────────────────────────────────────────────────────── */
function MAChart() {
  const ma3 = computeMA(RAW24, 3);
  const ma5 = computeMA(RAW24, 5);
  const w = 560; const h = 160;
  const yMin = 8; const yMax = 44;
  const rawPath = toPath(RAW24, yMin, yMax, w, h);

  const sx = (i) => 10 + (i / (RAW24.length - 1)) * (w - 20);
  const sy = (v) => h - 6 - ((v - yMin) / (yMax - yMin)) * (h - 12);

  let ma3Path = '';
  let ma5Path = '';
  ma3.forEach((v, i) => {
    if (v === null) return;
    const prev = ma3[i - 1];
    ma3Path += `${(prev === null || prev === undefined) ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)} `;
  });
  ma5.forEach((v, i) => {
    if (v === null) return;
    const prev = ma5[i - 1];
    ma5Path += `${(prev === null || prev === undefined) ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)} `;
  });

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Medias moveis MA(3) e MA(5) sobre a serie original
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, height: h, display: 'block' }}>
        <path d={rawPath} fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <path d={ma3Path.trim()} fill="none" stroke="#f97316" strokeWidth="2.5" />
        <path d={ma5Path.trim()} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8,4" />
      </svg>
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.8rem' }}>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--text-secondary)', verticalAlign: 'middle', marginRight: 4 }} />Original</span>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: '#f97316', verticalAlign: 'middle', marginRight: 4 }} />MA(3)</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><svg width="24" height="3"><line x1="0" y1="1.5" x2="24" y2="1.5" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6,3"/></svg>MA(5)</span>
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
    let s = 0; let cnt = 0;
    for (let j = lo; j <= hi; j++) { s += RAW24[j]; cnt++; }
    return s / cnt;
  });
  const stlSeasonal = RAW24.map((v, i) => v - loessTrend[i]);
  const stlResid = stlSeasonal.map((s, i) => s - (stlSeasonal[i % 4] + stlSeasonal[(i % 4) + 4]) / 2);
  const w = 560;
  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Decomposicao STL — tendencia suavizada via LOESS
      </div>
      <PanelChart series={RAW24} label="Original" strokeColor="var(--text-secondary)" yMin={8} yMax={44} w={w} h={60} />
      <PanelChart series={loessTrend} label="LOESS trend" strokeColor={color} yMin={8} yMax={44} w={w} h={60} />
      <PanelChart series={stlSeasonal} label="Sazonalidade" strokeColor="#f97316" yMin={-10} yMax={10} w={w} h={60} />
      <PanelChart series={stlResid} label="Residuo" strokeColor="#f97316" yMin={-4} yMax={4} w={w} h={60} />
    </div>
  );
}

/* ── SES chart ───────────────────────────────────────────────────────── */
function SESChart() {
  const ses02 = computeSES(RAW24, 0.2);
  const ses08 = computeSES(RAW24, 0.8);
  const w = 560; const h = 160;
  const yMin = 8; const yMax = 44;
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
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Suavizacao Exponencial Simples — efeito do parametro alfa
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, height: h, display: 'block' }}>
        <path d={rawPath} fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <path d={ses02Path} fill="none" stroke="#f97316" strokeWidth="2.5" />
        <path d={ses08Path} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8,4" />
        <line x1={forecastX1} y1={forecastY} x2={forecastX2} y2={forecastY}
          stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x={forecastX2 - 4} y={forecastY - 5} textAnchor="end" fontSize="9" fill="#f59e0b">previsao</text>
      </svg>
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.8rem' }}>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--text-secondary)', verticalAlign: 'middle', marginRight: 4 }} />Original</span>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: '#f97316', verticalAlign: 'middle', marginRight: 4 }} />SES alfa=0.2 (suave)</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><svg width="24" height="3"><line x1="0" y1="1.5" x2="24" y2="1.5" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6,3"/></svg>SES alfa=0.8 (reativo)</span>
      </div>
    </div>
  );
}

/* ── Holt chart ──────────────────────────────────────────────────────── */
function HoltChart() {
  const { fitted, forecast } = computeHolt(RAW24, 0.3, 0.1);
  const w = 560; const h = 160;
  const n = RAW24.length;
  const totalPts = n + forecast.length;
  const yMin = 8; const yMax = 58;

  const sx = (i) => 10 + (i / (totalPts - 1)) * (w - 20);
  const sy = (v) => h - 6 - ((v - yMin) / (yMax - yMin)) * (h - 12);

  const rawPath = RAW24.map((v, i) => `${i === 0 ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)}`).join(' ');
  const fittedPath = fitted.map((v, i) => `${i === 0 ? 'M' : 'L'}${sx(i).toFixed(1)},${sy(v).toFixed(1)}`).join(' ');
  const forecastPath = [`M${sx(n - 1).toFixed(1)},${sy(fitted[n - 1]).toFixed(1)}`]
    .concat(forecast.map((v, i) => `L${sx(n + i).toFixed(1)},${sy(v).toFixed(1)}`)).join(' ');

  const ciUpper = forecast.map((v, i) => v + 1.2 * (i + 1));
  const ciLower = forecast.map((v, i) => v - 1.2 * (i + 1));
  const fanPts = [
    `M${sx(n - 1).toFixed(1)},${sy(fitted[n - 1]).toFixed(1)}`,
    ...ciUpper.map((v, i) => `L${sx(n + i).toFixed(1)},${sy(v).toFixed(1)}`),
    ...ciLower.slice().reverse().map((v, i) => `L${sx(n + forecast.length - 1 - i).toFixed(1)},${sy(v).toFixed(1)}`),
    'Z',
  ].join(' ');

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Suavizacao de Holt — previsao com tendencia e intervalo de confianca
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, height: h, display: 'block' }}>
        <path d={fanPts} fill="rgba(245,158,11,0.15)" stroke="none" />
        <path d={rawPath} fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <path d={fittedPath} fill="none" stroke="#f97316" strokeWidth="2.5" />
        <path d={forecastPath} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8,4" />
        <line x1={sx(n - 1)} y1={4} x2={sx(n - 1)} y2={h - 4}
          stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3 2" />
        <text x={sx(n - 1) + 4} y={14} fontSize="9" fill="var(--text-secondary)">previsao</text>
      </svg>
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.8rem' }}>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--text-secondary)', verticalAlign: 'middle', marginRight: 4 }} />Original</span>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: '#f97316', verticalAlign: 'middle', marginRight: 4 }} />Holt ajustado</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><svg width="24" height="3"><line x1="0" y1="1.5" x2="24" y2="1.5" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6,3"/></svg>Previsao</span>
      </div>
    </div>
  );
}

/* ── Holt-Winters chart ──────────────────────────────────────────────── */
function HWChart() {
  const period = 4;
  const alpha = 0.3; const beta = 0.1; const gamma = 0.2;
  let l = RAW24.slice(0, period).reduce((a, b) => a + b, 0) / period;
  let b = (RAW24.slice(period, 2 * period).reduce((a, b) => a + b, 0) / period -
    RAW24.slice(0, period).reduce((a, b) => a + b, 0) / period) / period;
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

  const w = 560; const h = 160;
  const yMin = 8; const yMax = 44;
  const rawPath = toPath(RAW24, yMin, yMax, w, h);
  const fittedPath = toPath(fitted, yMin, yMax, w, h);

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Holt-Winters aditivo — ajuste sobre serie com sazonalidade
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, height: h, display: 'block' }}>
        <path d={rawPath} fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <path d={fittedPath} fill="none" stroke={color} strokeWidth="2" />
      </svg>
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.8rem' }}>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: 'var(--text-secondary)', verticalAlign: 'middle', marginRight: 4 }} />Original</span>
        <span><span style={{ display: 'inline-block', width: 24, height: 3, background: color, verticalAlign: 'middle', marginRight: 4 }} />Holt-Winters ajustado</span>
      </div>
    </div>
  );
}

/* ── main component ──────────────────────────────────────────────────── */
export default function ST14() {
  return (
    <div style={S.page}>
      {/* back */}
      <Link to="/statistics" style={S.back}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Voltar a Statistics
      </Link>

      {/* header */}
      <div style={S.tag}>MÓDULO 14</div>
      <h1 style={S.h1}>Decomposicao e Suavizacao Exponencial</h1>
      <p style={S.lead}>
        As series temporais encerram multiplos padroes sobrepostos — tendencia de longo prazo, sazonalidade
        ciclica e ruido aleatorio. Este modulo explora como decompor esses padroes e como produzir previsoes
        de curto prazo atraves de metodos de suavizacao exponencial, desde o modelo mais simples (SES)
        ate ao framework ETS completo.
      </p>

      {/* ── 1. Decomposicao Classica ─────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Decomposicao Classica</h2>
        <p style={S.p}>
          A decomposicao classica parte do principio de que uma serie temporal <em>Y</em> pode ser expressa
          como a combinacao de quatro componentes:
        </p>
        <BlockMath math="\text{Modelo Aditivo: } Y_t = T_t + S_t + C_t + I_t" />
          <BlockMath math="\text{Modelo Multiplicativo: } Y_t = T_t \times S_t \times C_t \times I_t" />
        <p style={S.p}>
          Onde <strong>T</strong> e a tendencia (movimento de longo prazo), <strong>S</strong> a sazonalidade
          (variacao periodica regular), <strong>C</strong> o ciclo (oscilacoes de medio prazo, tipicamente
          superiores a 1 ano) e <strong>I</strong> o componente irregular ou residual (ruido aleatorio
          nao explicado pelos outros).
        </p>
        <p style={S.p}>
          O modelo aditivo e adequado quando a amplitude das flutuacoes sazonais e aproximadamente constante
          ao longo do tempo. O modelo multiplicativo e preferido quando essa amplitude cresce proporcionalmente
          ao nivel da serie — situacao frequente em dados economicos e de trafego.
        </p>

        <h3 style={S.h3}>Algoritmo classico de decomposicao</h3>
        <p style={S.p}>
          O procedimento padrao para o modelo aditivo segue tres passos principais:
        </p>
        <ol style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>Estimar a <strong>tendencia T&#x0302;</strong> atraves de uma media movel centrada de ordem igual ao periodo sazonal.</li>
          <li>Calcular os <strong>indices sazonais</strong> como a media das diferencas (y - T&#x0302;) para cada periodo j.</li>
          <li>Obter o <strong>residuo</strong> subtraindo a tendencia e a sazonalidade estimadas: I = y - T&#x0302; - S&#x0302;.</li>
        </ol>

        <DecompositionChart />

        <div style={S.note}>
          Para dados com sazonalidade multiplicativa, aplica-se logaritmo antes de decompor aditivamente,
          transformando o problema num equivalente aditivo na escala logaritmica.
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
              ['Amplitude sazonal', 'Constante', 'Cresce com o nivel'],
              ['Variancia', 'Estavel', 'Proporcional ao nivel'],
              ['Transformacao', 'Nenhuma', 'Logaritmo ou ratio'],
              ['Interpretacao', 'Unidades originais', 'Proporcoes / percentagens'],
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

      <hr style={S.divider} />

      {/* ── 2. Medias Moveis ─────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Medias Moveis</h2>
        <p style={S.p}>
          A media movel de ordem k substitui cada observacao pela media aritmetica das k observacoes vizinhas,
          suavizando as flutuacoes de curto prazo e revelando a tendencia subjacente:
        </p>
        <BlockMath math="\hat{T}_t = \frac{1}{k}\sum_{j=0}^{k-1} y_{t-j}" />
        <p style={S.p}>
          Para valores de k pares (e.g. k=4 para sazonalidade trimestral), usa-se uma media movel
          <strong> centrada</strong>: calcula-se primeiro MA(k) e depois MA(2) sobre o resultado,
          de modo a que o centro da janela coincida com uma observacao real e a media nao seja
          desfasada no tempo.
        </p>

        <h3 style={S.h3}>Comparacao de ordens</h3>
        <MAChart />

        <p style={S.p}>
          Valores maiores de k produzem linhas de tendencia mais suaves mas perdem mais observacoes
          nas extremidades e reagem mais lentamente a mudancas de nivel. A escolha ideal de k e
          tipicamente igual ao periodo sazonal (e.g. 4 para dados trimestrais, 12 para mensais).
        </p>

      </section>

      <hr style={S.divider} />

      {/* ── 3. Indices Sazonais ──────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Indices Sazonais</h2>
        <p style={S.p}>
          Apos estimar a tendencia T&#x0302;<sub>t</sub>, calculam-se os indices sazonais como a media
          das diferencas desajustadas para cada periodo j (no caso aditivo):
        </p>
        <BlockMath math="\bar{S}_j = \text{média de } (y_t - \hat{T}_t) \text{ para todo } t \text{ tal que } t \equiv j \pmod{m}" />
        <p style={S.p}>
          Para o modelo aditivo, os indices sazonais devem somar zero ao longo de um periodo completo.
          Caso contrario, normalizam-se subtraindo a media dos proprios indices:
        </p>
        <BlockMath math="S^*_j = \bar{S}_j - \frac{1}{m}\sum_j \bar{S}_j" />

        <h3 style={S.h3}>Exemplo — 4 trimestres</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Trimestre</th>
              <th style={S.th}>Indice bruto</th>
              <th style={S.th}>Indice normalizado</th>
              <th style={S.th}>Interpretacao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Q1', '-3.2', '-3.4', 'Abaixo da tendencia (3.4 unidades)'],
              ['Q2', '+1.8', '+1.6', 'Ligeiramente acima'],
              ['Q3', '+4.1', '+3.9', 'Pico sazonal'],
              ['Q4', '-2.5', '-2.7', 'Baixa sazonal'],
            ].map(([q, raw, norm, interp], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{q}</strong></td>
                <td style={S.td}>{raw}</td>
                <td style={S.td}><strong>{norm}</strong></td>
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
          No modelo multiplicativo, a condicao e que a media dos indices sazonais seja igual a 1 (nao a 0).
          Normaliza-se dividindo cada indice pela media dos indices brutos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. STL ───────────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. STL — Decomposicao via LOESS</h2>
        <p style={S.p}>
          O metodo STL (<em>Seasonal and Trend decomposition using Loess</em>) supera as limitacoes
          da decomposicao classica. Em vez de medias moveis, usa regressao localmente ponderada (LOESS)
          para estimar tanto a tendencia como o componente sazonal, iterando ate convergencia.
        </p>

        
          <strong>LOESS:</strong> Num ponto <InlineMath math="t" />, ajusta-se um polinómio de grau <InlineMath math="d" /> usando apenas as
          observações vizinhas, ponderadas por uma função tricúbica que atribui pesos maiores
          às observações mais próximas.
        

        <h3 style={S.h3}>Vantagens do STL face a decomposicao classica</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caracteristica</th>
              <th style={S.th}>Decomposicao Classica</th>
              <th style={S.th}>STL</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Periodicidade', 'Inteira', 'Qualquer (inclui nao inteira)'],
              ['Sazonalidade variavel', 'Nao', 'Sim (parametro s.window)'],
              ['Robustez a outliers', 'Nao', 'Sim (opcao robust=TRUE)'],
              ['Valores em falta', 'Problematico', 'Mais robusto com interpolacao'],
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

      <hr style={S.divider} />

      {/* ── 5. SES ───────────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Suavizacao Exponencial Simples (SES)</h2>
        <p style={S.p}>
          A suavizacao exponencial simples e o metodo de previsao de curto prazo mais amplamente utilizado.
          Atribui pesos exponencialmente decrescentes as observacoes passadas, dando maior importancia
          ao passado recente:
        </p>
        <BlockMath math="\ell_t = \alpha\, y_t + (1-\alpha)\,\ell_{t-1}, \quad 0 < \alpha \leq 1" />
        <p style={S.p}>
          A previsao h passos a frente e simplesmente o ultimo nivel estimado: y&#x0302;<sub>t+h|t</sub> = l<sub>t</sub>.
          Expandindo a recursao, os pesos das observacoes passadas formam uma serie geometrica:
        </p>

        <h3 style={S.h3}>Pesos das observacoes com alfa = 0.3</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Observacao</th>
              <th style={S.th}>Formula do peso</th>
              <th style={S.th}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4].map((j) => {
              const wVal = (0.3 * Math.pow(0.7, j)).toFixed(4);
              return (
                <tr key={j}>
                  <td style={S.td}>y<sub>t-{j}</sub></td>
                  <td style={S.td}>&alpha;(1-&alpha;)<sup>{j}</sup> = 0.3 x 0.7<sup>{j}</sup></td>
                  <td style={{ ...S.td, fontWeight: j === 0 ? 700 : 400 }}>{wVal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <SESChart />

        <p style={S.p}>
          Um valor alto de &alpha; (proximo de 1) torna o modelo muito reativo — segue de perto os dados
          mas amplifica o ruido. Um valor baixo (proximo de 0) produz previsoes mais suaves, adequadas
          quando o nivel da serie e relativamente estavel. O valor otimo e encontrado minimizando a
          soma dos erros quadraticos (SSE) atraves de otimizacao numerica.
        </p>

        <div style={S.note}>
          A SES assume que a serie nao tem tendencia nem sazonalidade significativas. Em presenca destes
          padroes, os residuos da SES apresentarao autocorrelacao sistematica — sinal de que e necessario
          um modelo mais complexo como Holt ou Holt-Winters.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Holt ──────────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Suavizacao de Holt (Dupla)</h2>
        <p style={S.p}>
          O metodo de Holt estende a SES adicionando um componente de tendencia. O estado do modelo e
          descrito por dois vetores — nivel l<sub>t</sub> e declive b<sub>t</sub> — atualizados recursivamente:
        </p>
        <BlockMath math="\ell_t = \alpha\, y_t + (1-\alpha)(\ell_{t-1} + b_{t-1})" />
          <BlockMath math="b_t = \beta(\ell_t - \ell_{t-1}) + (1-\beta)\,b_{t-1}" />
          <BlockMath math="\hat{y}_{t+h|t} = \ell_t + h\,b_t" />
        <p style={S.p}>
          O parametro &alpha; controla a suavizacao do nivel e &beta; controla a suavizacao da tendencia.
          A previsao h passos a frente segue uma linha reta a partir do ultimo nivel estimado, com
          declive b<sub>t</sub>.
        </p>

        <h3 style={S.h3}>Variante com tendencia amortecida (Damped Trend)</h3>
        <p style={S.p}>
          Para horizontes de previsao longos, a extrapolacao linear pode ser excessivamente otimista.
          O modelo de tendencia amortecida (Gardner e McKenzie, 1985) introduz um parametro de amortecimento
          &phi; (tipicamente 0.8 a 0.98), tornando as previsoes mais conservadoras a longa distancia:
        </p>
        <BlockMath math="\hat{y}_{t+h|t} = \ell_t + (\phi + \phi^2 + \cdots + \phi^h)\,b_t" />

        <HoltChart />

        <p style={S.p}>
          O intervalo de confianca representado e construido assumindo erros normalmente distribuidos.
          A incerteza cresce com o horizonte de previsao h, refletindo a acumulacao de erros ao longo do tempo.
        </p>

      </section>

      <hr style={S.divider} />

      {/* ── 7. Holt-Winters ──────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Holt-Winters (Tripla)</h2>
        <p style={S.p}>
          O metodo de Holt-Winters acrescenta ao modelo de Holt um terceiro componente para capturar a
          sazonalidade. Existem duas variantes: aditiva (amplitude sazonal constante) e multiplicativa
          (amplitude crescente com o nivel).
        </p>

        <h3 style={S.h3}>Equacoes — Variante Aditiva</h3>
        <BlockMath math="\ell_t = \alpha(y_t - s_{t-m}) + (1-\alpha)(\ell_{t-1} + b_{t-1})" />
          <BlockMath math="b_t = \beta(\ell_t - \ell_{t-1}) + (1-\beta)\,b_{t-1}" />
          <BlockMath math="s_t = \gamma(y_t - \ell_{t-1} - b_{t-1}) + (1-\gamma)\,s_{t-m}" />
          <BlockMath math="\hat{y}_{t+h|t} = \ell_t + h\,b_t + s_{t+h-m(k+1)}" />

        <h3 style={S.h3}>Equacoes — Variante Multiplicativa</h3>
        <BlockMath math="\ell_t = \alpha\left(\frac{y_t}{s_{t-m}}\right) + (1-\alpha)(\ell_{t-1} + b_{t-1})" />
          <BlockMath math="s_t = \gamma\left(\frac{y_t}{\ell_{t-1} + b_{t-1}}\right) + (1-\gamma)\,s_{t-m}" />
          <BlockMath math="\hat{y}_{t+h|t} = (\ell_t + h\,b_t)\times s_{t+h-m(k+1)}" />

        <HWChart />

        <h3 style={S.h3}>Parametros e inicializacao</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parametro</th>
              <th style={S.th}>Papel</th>
              <th style={S.th}>Intervalo tipico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['alfa', 'Suavizacao do nivel', '0.1 – 0.5'],
              ['beta', 'Suavizacao da tendencia', '0.01 – 0.3'],
              ['gamma', 'Suavizacao da sazonalidade', '0.05 – 0.5'],
              ['m', 'Periodo sazonal', '4 (trimestral), 12 (mensal)'],
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
          Os parametros otimos sao estimados minimizando o SSE atraves de otimizacao numerica (tipicamente
          L-BFGS-B). A inicializacao do nivel e tendencia e feita com as primeiras m observacoes por regressao.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. ETS ───────────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Framework ETS — Estado em Espaco</h2>
        <p style={S.p}>
          O framework ETS (Error, Trend, Seasonal) unifica todos os modelos de suavizacao exponencial
          numa representacao de espaco de estados, permitindo calcular intervalos de predicao formalmente
          e selecionar automaticamente o modelo otimo por AIC.
        </p>

        <div style={S.highlight}>
          <strong>ETS(Error, Trend, Seasonal)</strong>
          <br />
          Error: A (aditivo) ou M (multiplicativo)
          <br />
          Trend: N (nenhuma), A (aditiva), Ad (aditiva amortecida), M (multiplicativa)
          <br />
          Seasonal: N (nenhuma), A (aditiva), M (multiplicativa)
        </div>

        <h3 style={S.h3}>Modelos ETS comuns e equivalencias</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo ETS</th>
              <th style={S.th}>Equivalente classico</th>
              <th style={S.th}>Componentes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ETS(A,N,N)', 'SES', 'Nivel, sem tendencia, sem sazonalidade'],
              ['ETS(A,A,N)', 'Holt linear', 'Nivel + tendencia aditiva'],
              ['ETS(A,Ad,N)', 'Damped Holt', 'Nivel + tendencia amortecida'],
              ['ETS(A,A,A)', 'Holt-Winters aditivo', 'Nivel + tendencia + sazonalidade aditiva'],
              ['ETS(M,A,M)', 'Holt-Winters multiplicativo', 'Nivel + tendencia + sazonalidade mult.'],
              ['ETS(M,Ad,M)', 'Damped HW mult.', 'Variante mais robusta para previsao longa'],
            ].map(([a, b, c], i) => (
              <tr key={i} style={i < 2 ? { background: 'rgba(249,115,22,0.10)' } : {}}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 600 }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Selecao automatica por AIC</h3>
        <p style={S.p}>
          A funcao <code>ets()</code> do pacote <em>forecast</em> ajusta e compara automaticamente todos
          os modelos ETS validos (ate 30 combinacoes possiveis), selecionando o de menor AIC:
        </p>
        <BlockMath math="\text{AIC} = -2\log(L) + 2k" />
        <p style={S.p}>
          Onde L e a verossimilhanca maximizada e k o numero de parametros estimados. O AICc (corrigido
          para amostras pequenas) e preferido quando T / k e inferior a 40.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Avaliacao ─────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Avaliacao e Previsao</h2>
        <p style={S.p}>
          A avaliacao da qualidade preditiva deve ser feita sempre num conjunto de teste nao visto durante
          o ajuste do modelo. Para series temporais usa-se uma divisao temporal (nao aleatoria), reservando
          os ultimos h periodos para avaliacao.
        </p>

        <h3 style={S.h3}>Metricas de erro de previsao</h3>
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
              ['MAE', 'Original', 'Interpretavel, robusto a outliers', 'Escala dependente'],
              ['RMSE', 'Original', 'Penaliza erros grandes', 'Sensivel a outliers'],
              ['MAPE', 'Percentagem', 'Comparavel entre series', 'Indefinido quando y=0'],
              ['MASE', 'Adimensional', 'Comparavel, escala livre', 'Requer naive sazonal como referencia'],
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

        <h3 style={S.h3}>Comparacao de modelos — benchmark</h3>
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
              <tr key={i} style={i === 5 ? { background: 'rgba(249,115,22,0.10)', fontWeight: 600 } : {}}>
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
          No framework ETS, os intervalos de predicao sao calculados analiticamente a partir da variancia
          do processo de estado. Para um intervalo de 95%:
        </p>
        <BlockMath math="\left[\hat{y}_{t+h} - 1.96\,\sigma_h,\; \hat{y}_{t+h} + 1.96\,\sigma_h\right]" />
        <p style={S.p}>
          A variancia de previsao &sigma;<sub>h</sub><sup>2</sup> cresce com o horizonte h. Em alternativa,
          podem usar-se intervalos bootstrap nao parametricos, especialmente quando os residuos nao sao
          normalmente distribuidos.
        </p>

        <div style={S.note}>
          A funcao <code>accuracy()</code> do pacote forecast calcula automaticamente MAE, RMSE, MAPE e MASE
          para os conjuntos de treino e de teste, facilitando a comparacao sistematica de modelos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Sintese ──────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Sintese do Modulo</h2>

        <div style={S.highlight}>
          <strong>Decomposicao</strong> — separar a serie nos seus componentes fundamentais (tendencia,
          sazonalidade, residuo) e o primeiro passo para compreender e modelar qualquer serie temporal.
          O STL e a opcao mais robusta e flexivel para uso geral.
        </div>
        <div style={S.highlight}>
          <strong>Suavizacao exponencial</strong> — familia de modelos parametricos que atribuem pesos
          exponencialmente decrescentes ao passado. SES para series de nivel, Holt para tendencias
          lineares, Holt-Winters para tendencia com sazonalidade.
        </div>
        <div style={S.highlight}>
          <strong>Framework ETS</strong> — unifica todos os metodos de suavizacao numa representacao
          de espaco de estados, permitindo selecao automatica por AIC e calculo formal de intervalos
          de predicao probabilisticos.
        </div>

        <h3 style={S.h3}>Guia de selecao de metodo</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situacao</th>
              <th style={S.th}>Metodo recomendado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Compreender a estrutura da serie', 'STL ou decomposicao classica'],
              ['Serie sem tendencia nem sazonalidade', 'SES / ETS(A,N,N)'],
              ['Serie com tendencia linear', 'Holt / ETS(A,A,N)'],
              ['Previsao de longo prazo com tendencia', 'Holt amortecido / ETS(A,Ad,N)'],
              ['Tendencia e sazonalidade constante', 'Holt-Winters aditivo / ETS(A,A,A)'],
              ['Tendencia e sazonalidade crescente', 'Holt-Winters multiplicativo / ETS(M,A,M)'],
              ['Selecao automatica do melhor modelo', 'ets() com selecao por AIC'],
              ['Comparacao formal entre modelos', 'accuracy() no conjunto de teste + AICc'],
            ].map(([s, m], i) => (
              <tr key={i}>
                <td style={S.td}>{s}</td>
                <td style={{ ...S.td, color, fontWeight: 500 }}>{m}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          Os metodos de suavizacao exponencial e os modelos ARIMA sao complementares: os primeiros sao
          mais intuitivos e eficientes computacionalmente; os segundos permitem capturar estruturas de
          autocorrelacao mais complexas. Para series com padroes de nivel e tendencia claros, o ETS e
          frequentemente competitivo ou superior ao ARIMA, com menor custo de especificacao.
        </div>

        <p style={{ ...S.p, marginTop: '2rem' }}>
          Este modulo cobriu o ciclo completo de analise de series temporais por decomposicao e suavizacao:
          desde a identificacao visual dos componentes, passando pelo ajuste de modelos hierarquicamente
          mais ricos (SES, Holt, Holt-Winters, ETS), ate a avaliacao rigorosa da qualidade preditiva
          num conjunto de teste temporal. O dominio destas ferramentas constitui a base para abordagens
          mais avancadas como SARIMA, redes neuronais para series temporais e modelos de ensemble.
        </p>
      </section>
    </div>
  );
}
