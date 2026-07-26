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
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ── SVG 1: Frequentista vs Bayesiano ── */
function ComparisonSVG() {
  return (
    <svg viewBox="0 0 700 260" style={{ width: '100%', height: 'auto' }}>
      {/* Frequentist box */}
      <rect x="10" y="10" width="320" height="240" rx="10" fill="rgba(74,158,237,0.07)" stroke="#0284c7" strokeWidth="1.5" />
      <text x="170" y="38" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0284c7">FREQUENTISTA</text>
      {/* bullet rows */}
      {[
        ['Probabilidade', 'Frequência de longo prazo'],
        ['Parâmetros', 'Fixos e desconhecidos'],
        ['Dados', 'Variáveis aleatórias'],
        ['Inferência', 'p-values e IC 95%'],
        ['Tamanho amostral', 'Precisa ser grande'],
        ['Prior knowledge', 'Não utilizada'],
      ].map(([k, v], i) => (
        <g key={k} transform={`translate(20, ${55 + i * 30})`}>
          <text fontSize="11" fontWeight="600" fill="#0284c7">{k}:</text>
          <text x="0" y="14" fontSize="10" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      {/* Bayesian box */}
      <rect x="370" y="10" width="320" height="240" rx="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="530" y="38" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>BAYESIANO</text>
      {[
        ['Probabilidade', 'Grau de crença / incerteza'],
        ['Parâmetros', 'Têm distribuições'],
        ['Dados', 'Fixos (observados)'],
        ['Inferência', 'Distribuição posterior'],
        ['Tamanho amostral', 'Funciona com n pequeno'],
        ['Prior knowledge', 'Incorporada explicitamente'],
      ].map(([k, v], i) => (
        <g key={k} transform={`translate(380, ${55 + i * 30})`}>
          <text fontSize="11" fontWeight="600" fill={color}>{k}:</text>
          <text x="0" y="14" fontSize="10" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      {/* vs badge */}
      <circle cx="350" cy="130" r="18" fill="#fff" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="350" y="135" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--text-secondary)">VS</text>
    </svg>
  );
}

/* ── SVG 2: Teorema de Bayes — quatro componentes ── */
function BayesTheoremSVG() {
  const boxes = [
    { x: 20, label: 'P(θ)', sub: 'Prior', desc: 'Crença inicial\nsobre θ', fill: 'rgba(74,158,237,0.10)', stroke: '#4a9eed' },
    { x: 195, label: 'P(data|θ)', sub: 'Likelihood', desc: 'Prob. dos dados\ndado θ', fill: 'rgba(56,189,248,0.12)', stroke: '#38bdf8' },
    { x: 370, label: 'P(data)', sub: 'Evidência', desc: 'Constante\nnormalizadora', fill: 'rgba(2,132,199,0.12)', stroke: '#0284c7' },
    { x: 545, label: 'P(θ|data)', sub: 'Posterior', desc: 'Crença atualizada\nsobre θ', fill: 'rgba(74,158,237,0.10)', stroke: color },
  ];
  return (
    <svg viewBox="0 0 720 190" style={{ width: '100%', height: 'auto' }}>
      <text x="360" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text-primary)">
        P(θ | data) = P(data | θ) × P(θ) / P(data)
      </text>
      {boxes.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y="40" width="155" height="130" rx="8" fill={b.fill} stroke={b.stroke} strokeWidth="1.5" />
          <text x={b.x + 77} y="68" textAnchor="middle" fontSize="15" fontWeight="800" fill={b.stroke}>{b.label}</text>
          <text x={b.x + 77} y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill={b.stroke}>{b.sub}</text>
          {b.desc.split('\n').map((line, j) => (
            <text key={j} x={b.x + 77} y={110 + j * 16} textAnchor="middle" fontSize="10" fill="var(--text-primary)">{line}</text>
          ))}
          {i < 3 && (
            <text x={b.x + 166} y="108" textAnchor="middle" fontSize="20" fill="var(--text-secondary)">{i === 2 ? '÷' : '×'}</text>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 3: Updating belief flow ── */
function BeliefUpdateSVG() {
  return (
    <svg viewBox="0 0 680 110" style={{ width: '100%', height: 'auto' }}>
      {[
        { x: 20, label: 'Prior P(θ)', color: '#0284c7', fill: 'rgba(2,132,199,0.12)', desc: 'Antes dos dados' },
        { x: 240, label: 'Dados observados', color: '#38bdf8', fill: 'rgba(56,189,248,0.12)', desc: 'Nova evidência' },
        { x: 460, label: 'Posterior P(θ|data)', color: '#4a9eed', fill: 'rgba(74,158,237,0.12)', desc: 'Crença atualizada' },
      ].map((item, i) => (
        <g key={item.label}>
          <rect x={item.x} y="15" width="175" height="75" rx="8"
            fill={item.fill}
            stroke={item.color} strokeWidth="1.5" />
          <text x={item.x + 87} y="45" textAnchor="middle" fontSize="11" fontWeight="700" fill={item.color}>{item.label}</text>
          <text x={item.x + 87} y="65" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{item.desc}</text>
          {i < 2 && (
            <path d={`M ${item.x + 182} 52 L ${item.x + 205} 52`} stroke="#4a9eed" strokeWidth="2" fill="none" />
          )}
          {i < 2 && (
            <polygon points={`${item.x + 205},46 ${item.x + 213},52 ${item.x + 205},58`} fill="#4a9eed" />
          )}
        </g>
      ))}
      <text x="340" y="105" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">O posterior torna-se o novo prior quando chegam mais dados</text>
    </svg>
  );
}

/* ── SVG 4: Beta distribution shapes ── */
function BetaShapesSVG() {
  // Approximate beta PDF values for display purposes
  const betaCurves = [
    { a: 1, b: 1, stroke: 'var(--text-secondary)', dash: '4,3', label: 'Beta(1,1) — Uniforme' },
    { a: 2, b: 5, stroke: '#1c5cab', dash: '', label: 'Beta(2,5) — Assimétrica esq.' },
    { a: 5, b: 2, stroke: '#3987e5', dash: '', label: 'Beta(5,2) — Assimétrica dir.' },
    { a: 5, b: 5, stroke: '#86b6ef', dash: '', label: 'Beta(5,5) — Simétrica' },
    { a: 0.5, b: 0.5, stroke: '#cde2fb', dash: '6,3', label: 'Beta(0.5,0.5) — Jeffreys' },
  ];

  function betaPDF(x, a, b) {
    if (x <= 0 || x >= 1) return 0;
    // unnormalized, scaled for display
    return Math.pow(x, a - 1) * Math.pow(1 - x, b - 1);
  }

  const padX = 40, padY = 38, plotW = 500, plotH = 130;

  function getPath(a, b) {
    const pts = [];
    for (let i = 0; i <= 100; i++) {
      const xv = 0.01 + i * 0.0098;
      pts.push([xv, betaPDF(xv, a, b)]);
    }
    const maxY = Math.max(...pts.map(p => p[1])) || 1;
    const svgPts = pts.map(([xv, yv]) => {
      const sx = padX + xv * plotW;
      const sy = padY + plotH - (yv / maxY) * (plotH - 4);
      return `${sx},${sy}`;
    });
    return 'M ' + svgPts.join(' L ');
  }

  const axisY = padY + plotH;

  return (
    <svg viewBox="0 0 620 240" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}>
      <text x="310" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Formas da Distribuição Beta(α, β)</text>
      {/* axes */}
      <line x1={padX} y1={axisY} x2={padX + plotW + 5} y2={axisY} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padX} y1={padY} x2={padX} y2={axisY} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={padX + plotW / 2} y={axisY + 18} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">θ (0 a 1)</text>
      {[0, 0.25, 0.5, 0.75, 1].map((v) => (
        <g key={v}>
          <text x={padX + v * plotW} y={axisY + 12} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v}</text>
          <line x1={padX + v * plotW} y1={axisY - 2} x2={padX + v * plotW} y2={axisY + 3} stroke="var(--text-secondary)" strokeWidth="1" />
        </g>
      ))}
      {betaCurves.map((c) => (
        <path key={c.label} d={getPath(c.a, c.b)} fill="none" stroke={c.stroke} strokeWidth="2" strokeDasharray={c.dash || ''} />
      ))}
      {/* legend — 3 on first row, 2 on second */}
      {betaCurves.map((c, i) => (
        <g key={c.label} transform={`translate(30, ${195 + Math.floor(i / 3) * 18})`}>
          <line x1={(i % 3) * 195} y1="0" x2={(i % 3) * 195 + 20} y2="0" stroke={c.stroke} strokeWidth="2.5" />
          <text x={(i % 3) * 195 + 25} y="4" fontSize="10" fill="var(--text-primary)">{c.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 5: Sequential Beta-Binomial updating ── */
function SequentialUpdateSVG() {
  function betaPDF(x, a, b) {
    if (x <= 0 || x >= 1) return 0;
    return Math.pow(x, a - 1) * Math.pow(1 - x, b - 1);
  }

  function getPath(a, b, color, W, H, padX, padY) {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const xv = 0.01 + i * 0.0123;
      pts.push([xv, betaPDF(xv, a, b)]);
    }
    const maxY = Math.max(...pts.map(p => p[1])) || 1;
    const svgPts = pts.map(([xv, yv]) => {
      const sx = padX + xv * W;
      const sy = padY + H - (yv / maxY) * (H - 5);
      return `${sx},${sy}`;
    });
    return { d: 'M ' + svgPts.join(' L '), stroke: color };
  }

  const stages = [
    { a: 1, b: 1, title: 'Prior', sub: 'Beta(1,1)', obs: '' },
    { a: 4, b: 1, title: 'Após 3H 0C', sub: 'Beta(4,1)', obs: '+3 Heads' },
    { a: 4, b: 3, title: 'Após 3H 2C', sub: 'Beta(4,3)', obs: '+2 Tails' },
  ];
  const colors = ['var(--text-secondary)', '#4a9eed', color];

  const panelW = 200, panelH = 140, gap = 30, arrowW = 40;
  const totalW = 3 * panelW + 2 * arrowW + 40;
  const titleH = 30, obsH = 22;
  const svgH = titleH + panelH + obsH + 20;

  return (
    <svg viewBox={`0 0 ${totalW} ${svgH}`} style={{ width: '100%', maxWidth: 740, display: 'block', margin: '0 auto', height: 'auto' }}>
      <text x={totalW / 2} y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Atualização Sequencial: Moeda com Prior Beta</text>
      {stages.map((s, idx) => {
        const ox = 20 + idx * (panelW + arrowW);
        const plotPadX = ox + 12;
        const plotPadY = titleH + 38;
        const plotW2 = panelW - 24;
        const plotH2 = panelH - 50;
        const path = getPath(s.a, s.b, colors[idx], plotW2, plotH2, plotPadX, plotPadY);
        return (
          <g key={s.title}>
            <rect x={ox} y={titleH} width={panelW} height={panelH} rx="7" fill="rgba(0,0,0,0.02)" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={ox + panelW / 2} y={titleH + 18} textAnchor="middle" fontSize="11" fontWeight="700" fill={colors[idx]}>{s.title}</text>
            <text x={ox + panelW / 2} y={titleH + 32} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{s.sub}</text>
            <path d={path.d} fill="none" stroke={colors[idx]} strokeWidth="2" />
            <line x1={plotPadX} y1={plotPadY + plotH2} x2={plotPadX + plotW2} y2={plotPadY + plotH2} stroke="var(--text-secondary)" strokeWidth="1" />
            {s.obs && (
              <text x={ox + panelW / 2} y={titleH + panelH + 16} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors[idx]}>{s.obs}</text>
            )}
            {idx < 2 && (
              <g>
                <line x1={ox + panelW + 4} y1={titleH + panelH / 2} x2={ox + panelW + arrowW - 8} y2={titleH + panelH / 2} stroke="var(--text-secondary)" strokeWidth="1.5" />
                <polygon points={`${ox + panelW + arrowW - 8},${titleH + panelH / 2 - 4} ${ox + panelW + arrowW},${titleH + panelH / 2} ${ox + panelW + arrowW - 8},${titleH + panelH / 2 + 4}`} fill="var(--text-secondary)" />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ── SVG 6: Normal-Normal three curves ── */
function NormalNormalSVG() {
  function normalPDF(x, mu, sigma) {
    return Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2)) / (sigma * Math.sqrt(2 * Math.PI));
  }

  function getPath(mu, sigma, col, xMin, xMax, W, H, ox, oy) {
    const pts = [];
    for (let i = 0; i <= 100; i++) {
      const xv = xMin + i * (xMax - xMin) / 100;
      pts.push([xv, normalPDF(xv, mu, sigma)]);
    }
    const maxY = Math.max(...pts.map(p => p[1]));
    const svgPts = pts.map(([xv, yv]) => {
      const sx = ox + ((xv - xMin) / (xMax - xMin)) * W;
      const sy = oy + H - (yv / maxY) * (H - 5);
      return `${sx},${sy}`;
    });
    return 'M ' + svgPts.join(' L ');
  }

  const xMin = -4, xMax = 8, W = 560, H = 120, ox = 30, oy = 40;

  return (
    <svg viewBox="0 0 620 230" style={{ width: '100%', height: 'auto' }}>
      <text x="310" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Modelo Normal-Normal: Prior, Likelihood e Posterior</text>
      <line x1={ox} y1={oy + H} x2={ox + W} y2={oy + H} stroke="var(--text-secondary)" strokeWidth="1" />
      <path d={getPath(0, 2.5, '#0284c7', xMin, xMax, W, H, ox, oy)} fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="6,3" />
      <path d={getPath(5, 1.5, '#38bdf8', xMin, xMax, W, H, ox, oy)} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,3" />
      <path d={getPath(3.5, 1.0, '#4a9eed', xMin, xMax, W, H, ox, oy)} fill="none" stroke="#4a9eed" strokeWidth="2.5" />
      {/* x-axis labels */}
      {[-4, -2, 0, 2, 4, 6, 8].map(v => {
        const sx = ox + ((v - xMin) / (xMax - xMin)) * W;
        return (
          <g key={v}>
            <text x={sx} y={oy + H + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v}</text>
            <line x1={sx} y1={oy + H} x2={sx} y2={oy + H + 4} stroke="var(--text-secondary)" strokeWidth="1" />
          </g>
        );
      })}
      {/* Legend */}
      {[
        { col: '#0284c7', dash: '6,3', label: 'Prior N(0, 2.5²) — crença inicial vaga' },
        { col: '#38bdf8', dash: '4,3', label: 'Likelihood N(5, 1.5²) — dados observados' },
        { col: '#4a9eed', dash: '', label: 'Posterior N(3.5, 1.0²) — média ponderada pela precisão' },
      ].map((item, i) => (
        <g key={item.label} transform={`translate(30, ${180 + i * 18})`}>
          <line x1="0" y1="0" x2="22" y2="0" stroke={item.col} strokeWidth="2.5" strokeDasharray={item.dash} />
          <text x="28" y="4" fontSize="10" fill="var(--text-primary)">{item.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 7: MCMC Trace Plot ── */
function TracePlotSVG() {
  // Simulate a trace with burn-in then mixing
  const pts = [];
  let val = 5;
  for (let i = 0; i < 200; i++) {
    if (i < 50) {
      val = val + (2 - val) * 0.15 + (Math.sin(i * 0.3) * 1.5);
    } else {
      val = val + (Math.random() - 0.5) * 1.2;
      if (val > 6) val = 6;
      if (val < -1) val = -1;
    }
    pts.push(val);
  }

  const W = 560, H = 120, ox = 50, oy = 30;
  const minV = Math.min(...pts) - 0.5;
  const maxV = Math.max(...pts) + 0.5;

  const pathD = pts.map((v, i) => {
    const sx = ox + (i / (pts.length - 1)) * W;
    const sy = oy + H - ((v - minV) / (maxV - minV)) * H;
    return `${i === 0 ? 'M' : 'L'} ${sx},${sy}`;
  }).join(' ');

  const burnX = ox + (50 / 199) * W;

  return (
    <svg viewBox="0 0 660 215" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}>
      <text x="330" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Trace Plot MCMC — Burn-in e Mixing</text>
      {/* burn-in region */}
      <rect x={ox} y={oy} width={burnX - ox} height={H} fill="rgba(74,158,237,0.10)" />
      <line x1={burnX} y1={oy} x2={burnX} y2={oy + H} stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={(ox + burnX) / 2} y={oy + H + 14} textAnchor="middle" fontSize="9" fill="#4a9eed">Burn-in (descartar)</text>
      {/* post burn-in region */}
      <rect x={burnX} y={oy} width={W - (burnX - ox)} height={H} fill="rgba(74,158,237,0.10)" />
      <text x={(burnX + ox + W) / 2} y={oy + H + 14} textAnchor="middle" fontSize="9" fill={color}>Amostras válidas</text>
      {/* axes */}
      <line x1={ox} y1={oy + H} x2={ox + W} y2={oy + H} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={ox} y1={oy} x2={ox} y2={oy + H} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* trace */}
      <path d={pathD} fill="none" stroke={color} strokeWidth="1.2" />
      <text x={ox - 10} y={oy + H / 2 + 4} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90, ${ox - 10}, ${oy + H / 2})`}>θ</text>
      <text x={ox + W / 2} y={oy + H + 28} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Iterações</text>
      {/* diagnostics */}
      <text x={ox + W / 2} y={oy + H + 50} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">R-hat: 1.002 ✓   ESS: 1847 ✓   Autocorr. lag-1: 0.12 ✓</text>
    </svg>
  );
}

/* ── SVG 8: Hierarchical model ── */
function HierarchicalSVG() {
  const groups = ['Escola A', 'Escola B', 'Escola C', 'Escola D'];
  return (
    <svg viewBox="0 0 620 220" style={{ width: '100%', height: 'auto' }}>
      <text x="310" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Modelo Hierárquico — Partial Pooling</text>
      {/* Hyperprior */}
      <rect x="230" y="30" width="160" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="310" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Hyperprior</text>
      <text x="310" y="63" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">μ₀, τ (hiperparâmetros)</text>
      {/* Group level */}
      {groups.map((g, i) => {
        const gx = 30 + i * 145;
        return (
          <g key={g}>
            <line x1="310" y1="70" x2={gx + 65} y2="110" stroke="#4a9eed" strokeWidth="1" strokeDasharray="4,3" />
            <rect x={gx} y="110" width="130" height="40" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
            <text x={gx + 65} y="128" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>{g}</text>
            <text x={gx + 65} y="143" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">θᵢ ~ N(μ₀, τ²)</text>
            {/* Observations */}
            {[0, 1, 2].map(j => {
              const ox2 = gx + 15 + j * 35;
              return (
                <g key={j}>
                  <line x1={gx + 65} y1="150" x2={ox2 + 10} y2="178" stroke={color} strokeWidth="1" />
                  <circle cx={ox2 + 10} cy="185" r="10" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
                  <text x={ox2 + 10} y="189" textAnchor="middle" fontSize="9" fill={color}>y</text>
                </g>
              );
            })}
          </g>
        );
      })}
      <text x="310" y="215" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Shrinkage: estimativas dos grupos puxadas para a média global</text>
    </svg>
  );
}

/* ── SVG 9: Pooling comparison ── */
function PoolingSVG() {
  const schools = ['A', 'B', 'C', 'D', 'E'];
  const complete = [72, 72, 72, 72, 72];
  const noPool = [85, 60, 78, 55, 90];
  const partial = [80, 65, 76, 62, 85];
  const W = 520, ox = 60, oy = 30, H = 120;
  const minV = 40, maxV = 100;

  function toY(v) { return oy + H - ((v - minV) / (maxV - minV)) * H; }
  function toX(i) { return ox + i * (W / 4); }

  return (
    <svg viewBox="0 0 620 220" style={{ width: '100%', height: 'auto' }}>
      <text x="310" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Complete vs No Pooling vs Partial Pooling</text>
      {/* axes */}
      <line x1={ox} y1={oy} x2={ox} y2={oy + H} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={ox} y1={oy + H} x2={ox + W} y2={oy + H} stroke="var(--text-secondary)" strokeWidth="1" />
      {[50, 60, 70, 80, 90, 100].map(v => (
        <g key={v}>
          <text x={ox - 6} y={toY(v) + 3} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
          <line x1={ox - 3} y1={toY(v)} x2={ox} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth="1" />
        </g>
      ))}
      {schools.map((s, i) => (
        <text key={s} x={toX(i)} y={oy + H + 14} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Esc.{s}</text>
      ))}
      {/* Complete pooling line */}
      <line x1={toX(0)} y1={toY(72)} x2={toX(4)} y2={toY(72)} stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" />
      {/* No pooling points */}
      {noPool.map((v, i) => (
        <circle key={i} cx={toX(i)} cy={toY(v)} r="5" fill="#0284c7" fillOpacity="0.85" />
      ))}
      {/* Partial pooling points */}
      {partial.map((v, i) => (
        <circle key={i} cx={toX(i)} cy={toY(v)} r="5" fill="#4a9eed" fillOpacity="0.95" />
      ))}
      {/* Shrinkage arrows */}
      {schools.map((s, i) => (
        <line key={s} x1={toX(i)} y1={toY(noPool[i]) + (noPool[i] > partial[i] ? 6 : -6)}
          x2={toX(i)} y2={toY(partial[i]) + (noPool[i] > partial[i] ? -6 : 6)}
          stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2,2" />
      ))}
      {/* Legend */}
      <line x1="60" y1="178" x2="82" y2="178" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="86" y="182" fontSize="10" fill="var(--text-primary)">Complete pooling</text>
      <circle cx="220" cy="178" r="5" fill="#0284c7" fillOpacity="0.85" />
      <text x="228" y="182" fontSize="10" fill="var(--text-primary)">No pooling</text>
      <circle cx="330" cy="178" r="5" fill="#4a9eed" fillOpacity="0.95" />
      <text x="338" y="182" fontSize="10" fill="var(--text-primary)">Partial pooling (Hier.)</text>
      <text x="310" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Setas tracejadas: shrinkage das estimativas sem pooling para o modelo hierárquico</text>
    </svg>
  );
}
// ── Main component ──
export default function ST14() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/statistics" style={S.back}>
        <ArrowLeft size={16} />
        Voltar a Statistics
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 14</div>
      <h1 style={S.h1}>Estatística Bayesiana</h1>

<section style={S.section}>
        <h2 style={S.h2}>1. Frequentista vs Bayesiano</h2>
        <p style={S.p}>
          As duas grandes escolas da inferência estatística diferem fundamentalmente na interpretação
          de probabilidade. Para o frequentista, probabilidade é a frequência de longo prazo de
          eventos repetíveis. Para o bayesiano, probabilidade é um grau de crença — pode ser atribuída
          a hipóteses únicas, parâmetros desconhecidos, ou qualquer proposição incerta.
        </p>
        <div style={S.diagram}>
          <ComparisonSVG />
        </div>
        <h3 style={S.h3}>Quando a abordagem Bayesiana vence</h3>
        <p style={S.p}>
          A inferência bayesiana brilha em cenários onde o tamanho amostral é pequeno (não há
          assintótica para salvar), onde existe conhecimento especializado relevante que seria
          desperdiçado pela abordagem frequentista, e onde a quantificação rigorosa de incerteza
          é necessária — como em ensaios clínicos adaptativos ou sistemas de recomendação.
        </p>
        <div style={S.note}>
          Bayes não é "melhor" que frequentista por definição. Em amostras grandes com priors vagos,
          os resultados convergem. A escolha depende do problema, dos dados disponíveis e da
          interpretação desejada.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Contexto</th>
              <th style={S.th}>Abordagem recomendada</th>
              <th style={S.th}>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['n pequeno, prior forte', 'Bayesiana', 'Prior estabiliza estimativas'],
              ['n grande, sem prior', 'Frequentista ou Bayesiana', 'Resultados equivalentes'],
              ['Necessidade de P(H₁|dados)', 'Bayesiana', 'Frequentista não dá isso diretamente'],
              ['Contexto regulatório (FDA, EMA)', 'Frequentista', 'Padrão aceito por reguladores'],
              ['Modelos hierárquicos complexos', 'Bayesiana', 'MCMC é mais flexível'],
              ['A/B testing com decisão contínua', 'Bayesiana', 'Permite stopping rules naturais'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>2. Teorema de Bayes</h2>
        <p style={S.p}>
          O teorema de Bayes é a espinha dorsal de toda inferência bayesiana. Ele descreve como
          atualizar a probabilidade de uma hipótese (ou valor de parâmetro) à luz de novos dados:
        </p>
        
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <BlockMath math="P(\theta \mid \text{data}) = \frac{P(\text{data} \mid \theta) \times P(\theta)}{P(\text{data})}" />
          </div>
          <p style={{ ...S.p, marginBottom: 0, textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <InlineMath math="\text{Posterior} \propto \text{Likelihood} \times \text{Prior}" />
          </p>
        
        <div style={S.diagram}>
          <BayesTheoremSVG />
        </div>
        <h3 style={S.h3}>Os quatro componentes em detalhe</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Notação</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Prior', 'P(θ)', 'Nossa crença sobre θ antes de ver os dados. Pode ser vaga (uniforme) ou informativa.'],
              ['Likelihood', 'P(data|θ)', 'A probabilidade de observar estes dados se o parâmetro for θ. Vem do modelo.'],
              ['Evidência (marginal)', 'P(data)', 'Constante de normalização. Integral do numerador sobre todos os θ.'],
              ['Posterior', 'P(θ|data)', 'Crença atualizada após ver os dados. O nosso objetivo.'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={{ ...S.td, fontFamily: 'monospace' }}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Atualização sequencial de crenças</h3>
        <p style={S.p}>
          Uma propriedade elegante da inferência bayesiana é que ela é sequencialmente consistente:
          o posterior de hoje torna-se o prior de amanhã. A ordem em que os dados chegam não altera
          o resultado final.
        </p>
        <div style={S.diagram}>
          <BeliefUpdateSVG />
        </div>
        <h3 style={S.h3}>Exemplo: Diagnóstico médico</h3>
        
          <p style={S.p}>
            Doença rara com prevalência <InlineMath math="P(D) = 0.001" />. Teste com sensibilidade <InlineMath math="P(T^+|D) = 0.99" /> e
            especificidade <InlineMath math="P(T^-|\neg D) = 0.99" />. Qual <InlineMath math="P(D|T^+)" />?
          </p>
          <div style={{ margin: '0.5rem 0' }}>
            <BlockMath math="P(D|T^+) = \frac{P(T^+|D) \cdot P(D)}{P(T^+)} = \frac{0.99 \times 0.001}{0.99 \times 0.001 + 0.01 \times 0.999} \approx 0.09" />
          </div>
          <p style={{ ...S.p, marginBottom: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Mesmo com teste muito preciso, a probabilidade de ter a doença após teste positivo é apenas 9%
            — porque a doença é muito rara. A baixa prevalência (prior fraco) domina.
          </p>
        
      </section>

<section style={S.section}>
        <h2 style={S.h2}>3. Distribuições a Priori</h2>
        <p style={S.p}>
          A escolha do prior é o aspecto mais distintivo (e frequentemente debatido) da análise
          bayesiana. Um prior deve refletir honestamente o conhecimento disponível antes de ver
          os dados. Não é arbitrário — é uma assunção explícita, auditável e que pode ser criticada.
        </p>
        <h3 style={S.h3}>Tipos de prior</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Quando usar</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Informativo', 'Conhecimento especializado sólido', 'Beta(8,2) para moeda viciada conhecida'],
              ['Fracamente informativo', 'Regularização, evitar extremos', 'Normal(0, 10) em regressão'],
              ['Não-informativo / Plano', 'Deixar os dados falar', 'Uniforme em [0,1], Beta(1,1)'],
              ['Prior de Jeffreys', 'Invariância à reparametrização', 'Beta(0.5, 0.5) para proporção'],
              ['Conjugado', 'Posteriors em forma fechada', 'Beta para likelihood Binomial'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Priors conjugados — pares clássicos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Prior</th>
              <th style={S.th}>Likelihood</th>
              <th style={S.th}>Posterior</th>
              <th style={S.th}>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Beta(α, β)', 'Binomial(n, θ)', 'Beta(α+k, β+n-k)', 'Proporções, taxas de sucesso'],
              ['Normal(μ₀, τ²)', 'Normal(θ, σ²)', 'Normal (média ponderada)', 'Médias com variância conhecida'],
              ['Gamma(α, β)', 'Poisson(λ)', 'Gamma(α+Σx, β+n)', 'Contagens, taxas de eventos'],
              ['Dirichlet(α)', 'Multinomial', 'Dirichlet(α + contagens)', 'Distribuições sobre categorias'],
              ['Normal-InvGamma', 'Normal(μ, σ²)', 'Normal-InvGamma', 'μ e σ² ambos desconhecidos'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Formas da distribuição Beta</h3>
        <div style={S.diagram}>
          <BetaShapesSVG />
        </div>
        <div style={S.note}>
          O prior de Jeffreys Beta(0.5, 0.5) é invariante à reparametrização: se transformarmos
          θ → φ = log(θ/(1-θ)), o prior induzido sobre φ é igualmente não-informativo.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>4. Inferência Bayesiana — Modelo Beta-Binomial</h2>
        <p style={S.p}>
          O modelo Beta-Binomial é o cavalo de batalha da inferência bayesiana para proporções.
          Suponhamos que queremos estimar a probabilidade θ de cara numa moeda (possivelmente viciada).
        </p>
        
          <p style={S.p}><strong>Prior:</strong> <InlineMath math="\theta \sim \text{Beta}(\alpha, \beta)" /> — encodifica crença inicial sobre θ</p>
          <p style={S.p}><strong>Likelihood:</strong> <InlineMath math="k \mid \theta \sim \text{Binomial}(n, \theta)" /> — modelo dos dados</p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Posterior:</strong> <InlineMath math="\theta \mid k \sim \text{Beta}(\alpha + k,\; \beta + n - k)" />
          </p>
        
        <h3 style={S.h3}>Atualização sequencial com lançamentos de moeda</h3>
        <div style={S.diagram}>
          <SequentialUpdateSVG />
        </div>
        <p style={S.p}>
          Com prior <InlineMath math="\text{Beta}(1,1)" /> (uniforme), após observar 3 caras e 0 coroas, obtemos <InlineMath math="\text{Beta}(4,1)" />.
          Após mais 2 coroas, obtemos <InlineMath math="\text{Beta}(4,3)" />. A média da <InlineMath math="\text{Beta}(\alpha,\beta)" /> é <InlineMath math="\alpha/(\alpha+\beta)" />, e a
          variância decresce com mais dados.
        </p>
        <h3 style={S.h3}>Intervalo de credibilidade vs Intervalo de confiança</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>IC Frequentista 95%</th>
              <th style={S.th}>Intervalo de Credibilidade 95%</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Interpretação', 'Em 95% dos experimentos repetidos, o IC contém θ', 'P(θ ∈ [a,b] | data) = 0.95'],
              ['Parâmetro', 'Fixo (não tem probabilidade)', 'Tem distribuição de probabilidade'],
              ['Dado n fixo', 'Não se pode dizer "95% chance que θ ∈ IC"', 'Pode-se dizer exatamente isso'],
              ['Tipo', 'Aleatório (varia por amostra)', 'Fixo (dado estes dados)'],
              ['Melhor para', 'Procedimentos com garantia frequentista', 'Quantificação direta de incerteza'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>5. Modelo Normal-Normal</h2>
        <p style={S.p}>
          Quando o parâmetro de interesse é uma média e temos um prior normal com variância
          conhecida, o posterior também é normal — outra conjugação elegante. O resultado é uma
          média ponderada pela precisão entre o prior e os dados.
        </p>
        <h3 style={S.h3}>Caso com variância conhecida</h3>
        
          <p style={S.p}><strong>Prior:</strong> <InlineMath math="\theta \sim \mathcal{N}(\mu_0, \tau^2)" /></p>
          <p style={S.p}><strong>Dados:</strong> <InlineMath math="x_i \mid \theta \sim \mathcal{N}(\theta, \sigma^2),\quad i=1,\ldots,n" /></p>
          <p style={S.p}><strong>Posterior:</strong> <InlineMath math="\theta \mid \text{data} \sim \mathcal{N}(\mu_n, \tau_n^2)" /> onde:</p>
          <div style={{ margin: '0.25rem 0' }}>
            <BlockMath math="\mu_n = \frac{\mu_0/\tau^2 + n\bar{x}/\sigma^2}{1/\tau^2 + n/\sigma^2}, \qquad \frac{1}{\tau_n^2} = \frac{1}{\tau^2} + \frac{n}{\sigma^2}" />
          </div>
        
        <div style={S.diagram}>
          <NormalNormalSVG />
        </div>
        <p style={S.p}>
          Quando n cresce, a precisão dos dados (<InlineMath math="n/\sigma^2" />) domina a precisão do prior (<InlineMath math="1/\tau^2" />),
          e o posterior converge para a média amostral. Com n pequeno, o prior exerce maior influência.
        </p>
        <h3 style={S.h3}>Caso com variância desconhecida: Normal-InverseGamma</h3>
        <p style={S.p}>
          Quando tanto <InlineMath math="\mu" /> quanto <InlineMath math="\sigma^2" /> são desconhecidos, usamos o prior conjugado
          Normal-InverseGamma: <InlineMath math="(\mu, \sigma^2) \sim \text{NIG}(\mu_0, \kappa_0, \alpha_0, \beta_0)" />.
          O posterior é NIG com parâmetros atualizados: <InlineMath math="\mu_n,\; \kappa_n = \kappa_0 + n,\;
          \alpha_n = \alpha_0 + n/2,\; \beta_n = \beta_0 + \text{SQ}/2 + \text{correção}" />.
        </p>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>6. MCMC — Markov Chain Monte Carlo</h2>
        <p style={S.p}>
          Na maioria dos problemas reais, o posterior P(θ|data) não tem forma fechada —
          o integral de normalização P(data) é intratável. MCMC resolve isso amostrando
          diretamente do posterior sem precisar calcular a constante de normalização.
        </p>
        <div style={S.diagram}>
          <TracePlotSVG />
        </div>
        <h3 style={S.h3}>Algoritmo Metropolis-Hastings</h3>
        <p style={S.p}>
          O MH é o algoritmo MCMC mais fundamental. A ideia: propor um novo valor θ* a partir
          de uma distribuição proposta q(θ*|θᵗ), e aceitar ou rejeitar com probabilidade
          min(1, r) onde r é a razão de aceitação.
        </p>
        <h3 style={S.h3}>Amostragem de Gibbs</h3>
        <p style={S.p}>
          Quando temos múltiplos parâmetros (θ₁, θ₂, ..., θₖ), o Gibbs sampling
          amostra cada θᵢ da sua distribuição condicional completa P(θᵢ | θᱼ≠ᵢ, data),
          ciclando pelos parâmetros. Cada condicional é tipicamente mais simples de amostrar.
        </p>
        <h3 style={S.h3}>Diagnósticos MCMC</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Diagnóstico</th>
              <th style={S.th}>Meta</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['R-hat (Gelman-Rubin)', '< 1.01', 'Múltiplas cadeias convergiram para o mesmo posterior'],
              ['ESS (Effective Sample Size)', '> 400 por parâmetro', 'Corrige para autocorrelação na cadeia'],
              ['Trace plot', 'Aspecto de "caterpillar"', 'Boa mistura e estacionaridade'],
              ['Autocorrelação', 'Decai rapidamente', 'Amostras quasi-independentes'],
              ['BFMI (E-BFMI)', '> 0.3', 'Energia no HMC — detecta problemas geométricos'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          O NUTS (No-U-Turn Sampler), usado em PyMC e Stan, é uma versão automática do HMC
          (Hamiltonian Monte Carlo) que não requer ajuste manual do número de passos.
          É dramaticamente mais eficiente que Metropolis-Hastings em modelos complexos.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>7. Modelos Hierárquicos (Multilevel)</h2>
        <p style={S.p}>
          Modelos hierárquicos (ou multinível) representam situações onde as observações têm
          estrutura de grupos — alunos dentro de escolas, medições repetidas do mesmo indivíduo,
          ensaios clínicos em múltiplos centros. O segredo está no partial pooling.
        </p>
        <div style={S.diagram}>
          <HierarchicalSVG />
        </div>
        <h3 style={S.h3}>Três estratégias de pooling</h3>
        <div style={S.diagram}>
          <PoolingSVG />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estratégia</th>
              <th style={S.th}>Como funciona</th>
              <th style={S.th}>Problema</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Complete Pooling', 'Ignora grupos, ajusta um único modelo', 'Ignora variação entre grupos (underfitting)'],
              ['No Pooling', 'Um modelo independente por grupo', 'Não aproveita informação entre grupos (overfitting em grupos pequenos)'],
              ['Partial Pooling', 'Grupos compartilham hiperprior', 'Shrinkage automático: grupos pequenos ficam mais próximos da média'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Shrinkage é automático em modelos hierárquicos: grupos com poucos dados são "puxados"
          para a média global mais fortemente do que grupos com muitos dados. Isso reduz overfitting
          sem qualquer regularização manual.
        </div>
      </section>

<section style={S.section}>
        <h2 style={S.h2}>8. Contraste: Bayesiano vs Frequentista na Prática</h2>
        <p style={S.p}>
          A escolha entre abordagens frequentista e bayesiana não é dogmática — é pragmática.
          Cada uma tem contextos onde brilha. Entender as diferenças concretas em problemas
          comuns é mais valioso do que debater filosofia.
        </p>
        <h3 style={S.h3}>A/B Testing</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspecto</th>
              <th style={S.th}>Frequentista</th>
              <th style={S.th}>Bayesiano</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Métrica principal', 'p-value (< 0.05?)', 'P(B melhor que A | dados)'],
              ['Decisão', 'Rejeitar H₀ ou não', 'P(uplift > threshold)'],
              ['Stopping rules', 'Fixar n antes do experimento', 'Stopping natural (opcional)'],
              ['Tamanho do efeito', 'Estimativa pontual com IC', 'Distribuição posterior do efeito'],
              ['Pergunta respondida', '"Os dados são consistentes com H₀?"', '"Qual a prob. de B ser melhor?"'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Comparação de Modelos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Frequentista</th>
              <th style={S.th}>Bayesiano</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Critério de informação', 'AIC, BIC', 'WAIC, LOO-CV'],
              ['Teste de hipóteses', 'Likelihood ratio test', 'Bayes Factor'],
              ['Comparação direta', 'Não (só vs modelo nulo)', 'Sim (P(M₁) vs P(M₂))'],
              ['Penalização da complexidade', 'Número de parâmetros', 'Effective number (p_waic)'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Bayes Factors</h3>
        <div style={S.highlight}>
          <p style={S.p}>
            <strong>BF₁₀ = P(data | M₁) / P(data | M₀)</strong>
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            BF {'>'} 10: forte evidência para M₁ |
            BF 3-10: evidência moderada |
            BF 1-3: evidência fraca |
            BF {'<'} 1: evidência contra M₁
          </p>
        </div>
        <div style={S.note}>
          LOO-CV (Leave-One-Out Cross-Validation) via PSIS-LOO é o método de comparação de modelos
          bayesianos recomendado — é mais estável que WAIC e mais interpretável que Bayes Factors
          (que dependem fortemente dos priors).
        </div>
      </section>
    </div>
  );
}
