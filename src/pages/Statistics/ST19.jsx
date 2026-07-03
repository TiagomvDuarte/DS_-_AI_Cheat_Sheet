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
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function ExperimentFlowSVG() {
  return (
    <svg viewBox="0 0 780 200" style={{ width: '100%', height: 'auto' }}>
      {/* Population box */}
      <rect x="10" y="70" width="120" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="70" y="96" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Population</text>
      <text x="70" y="114" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">N utilizadores</text>

      {/* Arrow to split */}
      <line x1="130" y1="100" x2="180" y2="100" stroke={color} strokeWidth="1.5" fill="none" />
      <polygon points="180,95 190,100 180,105" fill={color} />

      {/* Random split box */}
      <rect x="190" y="70" width="110" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="245" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Random</text>
      <text x="245" y="113" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Split</text>

      {/* Arrow up to Control */}
      <line x1="300" y1="85" x2="360" y2="55" stroke="#f97316" strokeWidth="1.5" fill="none" />
      <polygon points="355,48 365,55 356,62" fill="#f97316" />

      {/* Arrow down to Treatment */}
      <line x1="300" y1="115" x2="360" y2="145" stroke="#f97316" strokeWidth="1.5" fill="none" />
      <polygon points="355,138 365,145 356,152" fill="#f97316" />

      {/* Control box */}
      <rect x="365" y="25" width="120" height="55" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="425" y="48" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Controlo (A)</text>
      <text x="425" y="68" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Experiência atual</text>

      {/* Treatment box */}
      <rect x="365" y="120" width="120" height="55" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="425" y="143" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Tratamento (B)</text>
      <text x="425" y="163" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Nova variante</text>

      {/* Arrows to Measure */}
      <line x1="485" y1="52" x2="535" y2="85" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
      <line x1="485" y1="147" x2="535" y2="115" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
      <polygon points="530,78 540,85 531,92" fill="var(--text-secondary)" />
      <polygon points="530,108 540,115 531,122" fill="var(--text-secondary)" />

      {/* Measure box */}
      <rect x="540" y="70" width="100" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="590" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Medir</text>
      <text x="590" y="113" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Métrica primária</text>

      {/* Arrow to decision */}
      <line x1="640" y1="100" x2="680" y2="100" stroke={color} strokeWidth="1.5" fill="none" />
      <polygon points="680,95 690,100 680,105" fill={color} />

      {/* Decision box */}
      <rect x="690" y="70" width="80" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="730" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Decisão</text>
      <text x="730" y="113" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Ship / Kill</text>
    </svg>
  );
}

function PowerCurveSVG() {
  const W = 700, H = 220;
  const pad = { l: 55, r: 20, t: 20, b: 45 };
  const iW = W - pad.l - pad.r;
  const iH = H - pad.t - pad.b;

  // Power vs sample size for two scenarios (larger and smaller MDE)
  const nMax = 5000;
  const points1 = [];
  const points2 = [];

  const phi = (z) => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const poly = t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
    const p = 1 - d * poly;
    return z >= 0 ? p : 1 - p;
  };

  for (let n = 50; n <= nMax; n += 50) {
    const delta1 = 0.02, delta2 = 0.01, p0 = 0.05;
    const se1 = Math.sqrt(2 * p0 * (1 - p0) / n);
    const se2 = Math.sqrt(2 * p0 * (1 - p0) / n);
    const z_alpha = 1.96;
    const power1 = 1 - phi(z_alpha - delta1 / se1) + phi(-z_alpha - delta1 / se1);
    const power2 = 1 - phi(z_alpha - delta2 / se2) + phi(-z_alpha - delta2 / se2);
    const nx = pad.l + (n / nMax) * iW;
    points1.push([nx, pad.t + iH - Math.min(power1, 1) * iH]);
    points2.push([nx, pad.t + iH - Math.min(power2, 1) * iH]);
  }

  const toPath = (pts) => pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  // Horizontal 0.8 power line
  const y80 = pad.t + iH - 0.8 * iH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
      {/* Y axis */}
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + iH} stroke="var(--text-secondary)" strokeWidth="1" fill="none" />
      {/* X axis */}
      <line x1={pad.l} y1={pad.t + iH} x2={pad.l + iW} y2={pad.t + iH} stroke="var(--text-secondary)" strokeWidth="1" fill="none" />

      {/* Grid lines */}
      {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map(v => {
        const y = pad.t + iH - v * iH;
        return (
          <g key={v}>
            <line x1={pad.l} y1={y} x2={pad.l + iW} y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="4,4" fill="none" />
            <text x={pad.l - 6} y={y + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{v.toFixed(1)}</text>
          </g>
        );
      })}

      {/* X axis labels */}
      {[0, 1000, 2000, 3000, 4000, 5000].map(v => {
        const x = pad.l + (v / nMax) * iW;
        return (
          <text key={v} x={x} y={pad.t + iH + 16} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{v}</text>
        );
      })}

      {/* 80% power reference line */}
      <line x1={pad.l} y1={y80} x2={pad.l + iW} y2={y80} stroke="#f97316" strokeWidth="1.5" strokeDasharray="6,3" fill="none" />
      <text x={pad.l + iW - 4} y={y80 - 5} textAnchor="end" fontSize="10" fill="#f97316">Poder = 0.80</text>

      {/* Curves */}
      <path d={toPath(points1)} fill="none" stroke="#f97316" strokeWidth="2.5" />
      <path d={toPath(points2)} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8,4" />

      {/* Legend — bottom right */}
      <line x1={W - 220} y1={H - pad.b - 30} x2={W - 195} y2={H - pad.b - 30} stroke="#f97316" strokeWidth="2.5" fill="none" />
      <text x={W - 190} y={H - pad.b - 26} fontSize="11" fill="var(--text-primary)">MDE = 2pp (delta grande)</text>
      <line x1={W - 220} y1={H - pad.b - 12} x2={W - 195} y2={H - pad.b - 12} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8,4" fill="none" />
      <text x={W - 190} y={H - pad.b - 8} fontSize="11" fill="var(--text-primary)">MDE = 1pp (delta pequeno)</text>

      {/* Axis labels */}
      <text x={pad.l + iW / 2} y={H - 5} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Tamanho amostral (n por grupo)</text>
      <text x={12} y={pad.t + iH / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90, 12, ${pad.t + iH / 2})`}>Poder estatístico</text>
    </svg>
  );
}

function RandomizationSVG() {
  const bw = 90, bh = 105, dotR = 8, dotGap = 22;
  // Left side: pool + arrow + 2 boxes
  const poolX = 18, poolY = 28;
  const arrowLx1 = poolX + 4*28, arrowLx2 = arrowLx1 + 20;
  const leftBox1X = arrowLx2 + 8, leftBox2X = leftBox1X + bw + 14;
  const leftCx = (leftBox1X + leftBox2X + bw) / 2;
  // Divider
  const divX = leftBox2X + bw + 20;
  // Right side: 2 boxes
  const rightBox1X = divX + 20, rightBox2X = rightBox1X + bw + 14;
  const rightCx = (rightBox1X + rightBox2X + bw) / 2;
  const W = rightBox2X + bw + 18;

  const dotColors = ['#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316','#f97316'];

  return (
    <svg viewBox={`0 0 ${W} 195`} style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}>
      {/* LEFT title */}
      <text x={leftCx + 0} y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Boa Randomização</text>

      {/* Pool of users */}
      {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
        const col = i % 4, row = Math.floor(i / 4);
        return <circle key={i} cx={poolX + col * 28 + 14} cy={poolY + row * 28 + 14} r="10" fill={dotColors[i]} fillOpacity="0.75" />;
      })}

      {/* Arrow pool → boxes */}
      <line x1={poolX + 4*28 + 4} y1={poolY + 42} x2={leftBox1X - 6} y2={poolY + 42} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arL)" />

      {/* Left Control box */}
      <rect x={leftBox1X} y={25} width={bw} height={bh} rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
      <text x={leftBox1X + bw/2} y={42} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Controlo</text>
      {[0,1,2,3,4,5].map(i => {
        const col = i % 3, row = Math.floor(i / 3);
        return <circle key={i} cx={leftBox1X + 18 + col * dotGap} cy={58 + row * dotGap} r={dotR} fill={color} fillOpacity="0.65" />;
      })}

      {/* Left Treatment box */}
      <rect x={leftBox2X} y={25} width={bw} height={bh} rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x={leftBox2X + bw/2} y={42} textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Tratamento</text>
      {[0,1,2,3,4,5].map(i => {
        const col = i % 3, row = Math.floor(i / 3);
        return <circle key={i} cx={leftBox2X + 18 + col * dotGap} cy={58 + row * dotGap} r={dotR} fill="#f97316" fillOpacity="0.65" />;
      })}

      <text x={leftCx} y={148} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Grupos balanceados — covariáveis similares</text>

      {/* Divider */}
      <line x1={divX} y1="10" x2={divX} y2="185" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,4" />

      {/* RIGHT title */}
      <text x={rightCx} y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Viés de Seleção</text>

      {/* Right Control box */}
      <rect x={rightBox1X} y={25} width={bw} height={bh} rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x={rightBox1X + bw/2} y={42} textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Controlo</text>
      {[0,1,2,3,4,5].map(i => {
        const col = i % 3, row = Math.floor(i / 3);
        return <circle key={i} cx={rightBox1X + 18 + col * dotGap} cy={58 + row * dotGap} r={dotR} fill="var(--text-secondary)" fillOpacity="0.7" />;
      })}
      <text x={rightBox1X + bw/2} y={140} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Novos users</text>

      {/* Right Treatment box */}
      <rect x={rightBox2X} y={25} width={bw} height={bh} rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x={rightBox2X + bw/2} y={42} textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Tratamento</text>
      {[0,1,2,3,4,5].map(i => {
        const col = i % 3, row = Math.floor(i / 3);
        return <circle key={i} cx={rightBox2X + 18 + col * dotGap} cy={58 + row * dotGap} r={dotR} fill="#f97316" fillOpacity="0.85" />;
      })}
      <text x={rightBox2X + bw/2} y={140} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Users fiéis</text>

      <text x={rightCx} y={162} textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">Grupos sistematicamente diferentes</text>
      <text x={rightCx} y={177} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Resultados não comparáveis!</text>

      <defs>
        <marker id="arL" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="var(--text-secondary)" />
        </marker>
      </defs>
    </svg>
  );
}

function TwoDistSVG() {
  const W = 680, H = 200;
  const pad = { l: 30, r: 30, t: 20, b: 40 };
  const iW = W - pad.l - pad.r;
  const iH = H - pad.t - pad.b;

  const norm = (x, mu, sigma) => Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));

  const muA = 0.03, muB = 0.034, sigma = 0.008;
  const xMin = 0, xMax = 0.07;
  const steps = 200;

  const toX = (v) => pad.l + ((v - xMin) / (xMax - xMin)) * iW;
  const maxY = norm(muA, muA, sigma);
  const toY = (v) => pad.t + iH - (v / maxY) * iH * 0.85;

  const ptsA = [], ptsB = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    ptsA.push([toX(x), toY(norm(x, muA, sigma))]);
    ptsB.push([toX(x), toY(norm(x, muB, sigma))]);
  }

  const baseline = pad.t + iH;
  const pathA = `M${ptsA[0][0]},${baseline} ` + ptsA.map(p => `L${p[0]},${p[1]}`).join(' ') + ` L${ptsA[ptsA.length-1][0]},${baseline} Z`;
  const pathB = `M${ptsB[0][0]},${baseline} ` + ptsB.map(p => `L${p[0]},${p[1]}`).join(' ') + ` L${ptsB[ptsB.length-1][0]},${baseline} Z`;

  const lineA = ptsA.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const lineB = ptsB.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  const xMuA = toX(muA), xMuB = toX(muB);
  const yMuA = toY(norm(muA, muA, sigma));
  const yMuB = toY(norm(muB, muB, sigma));

  const xTicks = [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
      <path d={pathA} fill="#f59e0b" fillOpacity="0.15" />
      <path d={pathB} fill="#f97316" fillOpacity="0.15" />
      <path d={lineA} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8,4" />
      <path d={lineB} fill="none" stroke="#f97316" strokeWidth="2.5" />

      {/* Vertical mean lines */}
      <line x1={xMuA} y1={yMuA} x2={xMuA} y2={baseline} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" fill="none" />
      <line x1={xMuB} y1={yMuB} x2={xMuB} y2={baseline} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" fill="none" />

      <text x={xMuA- 26} y={baseline + 14} textAnchor="middle" fontSize="10" fill="#f59e0b">A: 3.0%</text>
      <text x={xMuB} y={baseline + 14} textAnchor="middle" fontSize="10" fill="#f97316">B: 3.4%</text>

      {/* X axis */}
      <line x1={pad.l} y1={baseline} x2={pad.l + iW} y2={baseline} stroke="var(--text-secondary)" strokeWidth="1" fill="none" />

      {xTicks.map(v => (
        <text key={v} x={toX(v)} y={baseline + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{(v * 100).toFixed(0)}%</text>
      ))}

      {/* Legend */}
      <line x1={pad.l + 10} y1={pad.t + 15} x2={pad.l + 30} y2={pad.t + 15} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8,4" fill="none" />
      <text x={pad.l + 35} y={pad.t + 19} fontSize="11" fill="var(--text-primary)">Controlo A</text>
      <line x1={pad.l + 120} y1={pad.t + 15} x2={pad.l + 140} y2={pad.t + 15} stroke="#f97316" strokeWidth="2.5" fill="none" />
      <text x={pad.l + 145} y={pad.t + 19} fontSize="11" fill="var(--text-primary)">Tratamento B</text>

      {/* Lift annotation */}
      <line x1={xMuA} y1={pad.t + 8} x2={xMuB} y2={pad.t + 8} stroke="#f97316" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
      <text x={(xMuA + xMuB) / 2} y={pad.t + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">lift = +0.4pp</text>
    </svg>
  );
}

function MultipleTestingSVG() {
  const W = 680, H = 190;
  const bars = [
    { label: 'Métrica 1', p: 0.62 },
    { label: 'Métrica 2', p: 0.18 },
    { label: 'Métrica 3', p: 0.41 },
    { label: 'Métrica 4', p: 0.03 },
    { label: 'Métrica 5', p: 0.08 },
    { label: 'Métrica 6', p: 0.52 },
    { label: 'Métrica 7', p: 0.29 },
    { label: 'Métrica 8', p: 0.04 },
    { label: 'Métrica 9', p: 0.77 },
    { label: 'Métrica 10', p: 0.11 },
    { label: 'Métrica 11', p: 0.23 },
    { label: 'Métrica 12', p: 0.66 },
    { label: 'Métrica 13', p: 0.038 },
    { label: 'Métrica 14', p: 0.56 },
    { label: 'Métrica 15', p: 0.19 },
    { label: 'Métrica 16', p: 0.44 },
    { label: 'Métrica 17', p: 0.07 },
    { label: 'Métrica 18', p: 0.31 },
    { label: 'Métrica 19', p: 0.88 },
    { label: 'Métrica 20', p: 0.049 },
  ];

  const bH = 6, gap = 3;
  const total = bars.length * (bH + gap);
  const startY = (H - total) / 2;
  const xScale = (v) => 30 + v * 420;
  const alpha = 0.05;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
      {/* Alpha threshold line */}
      <line x1={xScale(alpha)} y1={startY - 10} x2={xScale(alpha)} y2={startY + total + 5} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" fill="none" />
      <text x={xScale(alpha)} y={startY - 14} textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">alpha = 0.05</text>

      {bars.map((b, i) => {
        const y = startY + i * (bH + gap);
        const w = Math.min(b.p * 420, 420);
        const isSignif = b.p < alpha;
        const barColor = isSignif ? '#f97316' : 'var(--text-secondary)';
        return (
          <g key={i}>
            <rect x={30} y={y} width={w} height={bH} rx="2" fill={barColor} fillOpacity={isSignif ? 0.9 : 0.35} />
            {isSignif && (
              <text x={xScale(b.p) + 4} y={y + bH - 1} fontSize="8" fill="#f97316" fontWeight="700">p={b.p}</text>
            )}
          </g>
        );
      })}

      {/* X axis */}
      <line x1={30} y1={startY + total + 8} x2={450} y2={startY + total + 8} stroke="var(--text-secondary)" strokeWidth="1" fill="none" />
      {[0, 0.25, 0.5, 0.75, 1.0].map(v => (
        <text key={v} x={xScale(v)} y={startY + total + 20} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v.toFixed(2)}</text>
      ))}
      <text x={240} y={startY + total + 32} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">p-value</text>

      {/* Annotation */}
      <rect x="465" y={startY} width="200" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="475" y={startY + 16} fontSize="11" fontWeight="700" fill="#f97316">Falsos Positivos!</text>
      <text x="475" y={startY + 32} fontSize="10" fill="var(--text-secondary)">20 testes × alpha=0.05</text>
      <text x="475" y={startY + 48} fontSize="10" fill="var(--text-secondary)">= ~1 falso positivo</text>
      <text x="475" y={startY + 64} fontSize="10" fill="var(--text-secondary)">esperado por acaso</text>
      <text x="475" y={startY + 78} fontSize="10" fill="#f97316" fontWeight="600">3 marcadas como sig.!</text>
    </svg>
  );
}

function PeekingSVG() {
  const W = 680, H = 200;
  const pad = { l: 45, r: 30, t: 20, b: 40 };
  const iW = W - pad.l - pad.r;
  const iH = H - pad.t - pad.b;

  // Simulated p-value trajectory (random walk style, pre-computed)
  const rawPvals = [
    0.42, 0.38, 0.61, 0.54, 0.48, 0.33, 0.29, 0.41, 0.37, 0.22,
    0.18, 0.14, 0.09, 0.06, 0.04, 0.07, 0.11, 0.09, 0.06, 0.04,
    0.08, 0.12, 0.16, 0.21, 0.18, 0.14, 0.11, 0.09, 0.12, 0.15,
    0.19, 0.23, 0.27, 0.22, 0.18, 0.14, 0.11, 0.13, 0.16, 0.20,
  ];

  const N = rawPvals.length;
  const toX = (i) => pad.l + (i / (N - 1)) * iW;
  const toY = (p) => pad.t + iH - Math.min(p / 0.7, 1) * iH;

  const linePath = rawPvals.map((p, i) => (i === 0 ? `M${toX(i)},${toY(p)}` : `L${toX(i)},${toY(p)}`)).join(' ');

  // Alpha = 0.05 line y position
  const yAlpha = toY(0.05);

  // Crossings below 0.05
  const crossings = rawPvals.reduce((acc, p, i) => {
    if (p < 0.05 && (i === 0 || rawPvals[i - 1] >= 0.05)) acc.push(i);
    return acc;
  }, []);

  const yTicks = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
      {/* Grid */}
      {yTicks.map(v => {
        const y = toY(v);
        return (
          <g key={v}>
            <line x1={pad.l} y1={y} x2={pad.l + iW} y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="4,4" fill="none" />
            <text x={pad.l - 5} y={y + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v.toFixed(1)}</text>
          </g>
        );
      })}

      {/* Alpha line */}
      <line x1={pad.l} y1={yAlpha} x2={pad.l + iW} y2={yAlpha} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" fill="none" />
      <text x={pad.l + iW - 4} y={yAlpha - 5} textAnchor="end" fontSize="10" fill="#f97316" fontWeight="700">p = 0.05</text>

      {/* Danger zone (below alpha) */}
      <rect x={pad.l} y={yAlpha} width={iW} height={pad.t + iH - yAlpha} fill="#f97316" fillOpacity="0.05" />

      {/* P-value trajectory */}
      <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" />

      {/* Mark crossings (dangerous peeking points) */}
      {crossings.map(i => (
        <circle key={i} cx={toX(i)} cy={toY(rawPvals[i])} r="6" fill="#f97316" fillOpacity="0.8" />
      ))}

      {/* Axes */}
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + iH} stroke="var(--text-secondary)" strokeWidth="1" fill="none" />
      <line x1={pad.l} y1={pad.t + iH} x2={pad.l + iW} y2={pad.t + iH} stroke="var(--text-secondary)" strokeWidth="1" fill="none" />

      {/* X labels */}
      {[0, 10, 20, 30, 39].map(i => (
        <text key={i} x={toX(i)} y={pad.t + iH + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Dia {i + 1}</text>
      ))}

      <text x={pad.l + iW / 2} y={H - 4} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Tempo (dias do experimento)</text>
      <text x={12} y={pad.t + iH / 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)" transform={`rotate(-90, 12, ${pad.t + iH / 2})`}>p-value</text>

      {/* Annotation for circles */}
      <text x={toX(14) + 8} y={toY(rawPvals[14]) - 17} fontSize="10" fill="#f97316" fontWeight="600">Peeking!</text>
    </svg>
  );
}

function ChecklistSVG() {
  const phases = [
    {
      label: 'Pré-lançamento',
      color: color,
      items: ['Hipótese definida', 'Métrica primária única', 'Guardrails definidos', 'MDE calculado', 'n amostral calculado', 'Duração planeada'],
    },
    {
      label: 'A Correr',
      color: '#f97316',
      items: ['Não fazer peeking', 'Monitorizar SRM', 'Verificar logs', 'Não alterar experimento'],
    },
    {
      label: 'Análise',
      color: '#f97316',
      items: ['Teste estatístico correto', 'Corrigir múlt. comparações', 'CI para o lift', 'Seg. por sub-grupos'],
    },
    {
      label: 'Decisão',
      color: '#f97316',
      items: ['Sig. estatística?', 'Sig. prática?', 'Qualitativa OK?', 'Ship / Iterate / Kill'],
    },
  ];

  const colW = 160, gap = 10;
  const totalW = phases.length * colW + (phases.length - 1) * gap + 20;

  return (
    <svg viewBox={`0 0 ${totalW} 200`} style={{ width: '100%', height: 'auto' }}>
      {phases.map((phase, pi) => {
        const x = 10 + pi * (colW + gap);
        return (
          <g key={pi}>
            <rect x={x} y={5} width={colW} height={188} rx="8" fill={`${phase.color}14`} stroke={phase.color} strokeWidth="1.5" />
            <rect x={x} y={5} width={colW} height={28} rx="8" fill={phase.color} />
            <rect x={x} y={24} width={colW} height={9} fill={phase.color} />
            <text x={x + colW / 2} y={23} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">{phase.label}</text>
            {phase.items.map((item, ii) => (
              <g key={ii}>
                <circle cx={x + 14} cy={46 + ii * 23} r="5" fill={phase.color} fillOpacity="0.2" stroke={phase.color} strokeWidth="1" />
                <text x={x + 14} y={46 + ii * 23 + 4} textAnchor="middle" fontSize="9" fill={phase.color} fontWeight="700">✓</text>
                <text x={x + 24} y={46 + ii * 23 + 4} fontSize="10" fill="var(--text-primary)">{item}</text>
              </g>
            ))}

            {/* Arrow to next phase */}
            {pi < phases.length - 1 && (
              <polygon points={`${x + colW + 3},100 ${x + colW + gap - 3},95 ${x + colW + gap - 3},105`} fill={phase.color} />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function ST19() {
  return (
    <div style={S.page}>
      <Link to="/statistics" style={S.back}><ArrowLeft size={16} /> Voltar a Statistics</Link>
      <span style={S.tag}>MÓDULO 19</span>
      <h1 style={S.h1}>Desenho de Experimentos &amp; Testes A/B</h1>
      <p style={S.lead}>
        Um teste A/B é um RCT aplicado a produto. A diferença entre um teste bem desenhado e um mal desenhado não está na análise — está no planeamento: tamanho amostral correto, randomização adequada, métricas definidas antes de lançar, e critérios de paragem pré-especificados.
      </p>

      {/* ── SECTION 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Anatomia de um Teste A/B</h2>
        <p style={S.p}>
          Um teste A/B é um experimento controlado aleatorizado (RCT) em que utilizadores são aleatoriamente assignados a uma de duas (ou mais) variantes. O objetivo é estimar o efeito causal de uma mudança de produto numa métrica de negócio.
        </p>
        <div style={S.diagram}>
          <ExperimentFlowSVG />
        </div>
        <h3 style={S.h3}>Componentes Fundamentais</h3>
        <p style={S.p}>
          <strong>Unidade de randomização:</strong> quem é assignado? Utilizador (user-level), sessão (session-level), ou dispositivo. A escolha afeta a granularidade e os efeitos de rede. User-level é o mais comum para experiências de produto — garante que o mesmo utilizador vê sempre a mesma variante.
        </p>
        <p style={S.p}>
          <strong>Mecanismo de assignment:</strong> hash-based determinístico. A função hash(user_id + experiment_id) garante que o mesmo utilizador é sempre assignado à mesma variante, mesmo que seja visto em múltiplas sessões. O resultado modulo 100 determina a percentagem de tráfego.
        </p>
        <p style={S.p}>
          <strong>Exposure logging:</strong> registar o momento exato em que um utilizador foi exposto à variante. Só utilizadores expostos devem entrar na análise. A falta de logging correto leva a diluição do efeito (intention-to-treat vs per-protocol).
        </p>

        <div style={S.highlight}>
          <strong>Métricas de produto comuns:</strong>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Métrica</th>
                <th style={S.th}>Tipo</th>
                <th style={S.th}>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>Conversion rate</td>
                <td style={S.td}>Proporção</td>
                <td style={S.td}>Z-test de duas proporções</td>
              </tr>
              <tr>
                <td style={S.td}>Revenue per user</td>
                <td style={S.td}>Contínua (skewed)</td>
                <td style={S.td}>Alta variância; considerar CUPED</td>
              </tr>
              <tr>
                <td style={S.td}>Retenção D7 / D30</td>
                <td style={S.td}>Proporção</td>
                <td style={S.td}>Precisa de esperar D7 ou D30</td>
              </tr>
              <tr>
                <td style={S.td}>Duração de sessão</td>
                <td style={S.td}>Contínua</td>
                <td style={S.td}>Distribuição log-normal típica</td>
              </tr>
              <tr>
                <td style={S.td}>Cliques / impressões</td>
                <td style={S.td}>Taxa (ratio)</td>
                <td style={S.td}>Delta method para variância</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Planeamento — Hipóteses e Métricas</h2>
        <p style={S.p}>
          A regra de ouro: tudo deve ser definido <em>antes</em> de lançar o experimento. Alterar a métrica ou a hipótese após ver os dados é HARKing (Hypothesizing After Results are Known) — invalida a inferência frequentista.
        </p>

        <h3 style={S.h3}>Hierarquia de Métricas</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Métrica primária (1 única):</strong> a que decide se se faz ship ou não. Ex: checkout conversion rate. Com uma métrica primária pré-definida, não há problema de múltiplas comparações.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Guardrail metrics:</strong> métricas que não podem degradar. Ex: latência de página, revenue total, NPS. Se alguma degradar, o experimento não deve fazer ship mesmo que a primária melhore.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Métricas secundárias (informational):</strong> auxiliam a compreensão do mecanismo. Não tomam decisões, mas informam iterações futuras.
          </p>
        </div>

        <h3 style={S.h3}>Hipóteses e Direção do Teste</h3>
        <p style={S.p}>
          <strong>Teste unilateral (one-tailed):</strong> só detetamos efeitos numa direção (H1: B &gt; A). Mais poder para detetar aquela direção, mas não deteta regressões. Usar apenas quando regressões são impossíveis ou irrelevantes.
        </p>
        <p style={S.p}>
          <strong>Teste bilateral (two-tailed):</strong> deteta efeitos em ambas as direções (H1: B ≠ A). Mais conservador, mas preferível na maioria dos contextos de produto onde regressões são possíveis.
        </p>

        <h3 style={S.h3}>Minimum Detectable Effect (MDE)</h3>
        <p style={S.p}>
          O MDE é o menor efeito que tem significado prático para o negócio. Se uma melhoria de 0.1pp na conversão não vale o custo de manter a variante, não faz sentido desenhar um teste para detetar 0.1pp.
        </p>
        <div style={S.note}>
          <strong>Significância prática vs. estatística:</strong> com n suficientemente grande, qualquer efeito é estatisticamente significativo. Um efeito pode ser significativo (p &lt; 0.05) mas irrelevante para o negócio (lift de 0.001pp). Sempre reportar o intervalo de confiança para o efeito, não apenas o p-value.
        </div>
        <div style={S.note}>
          <strong>Novelty effect:</strong> utilizadores mudam o comportamento temporariamente por curiosidade. Experimentos muito curtos podem capturar este efeito inflacionado. Recomendação: correr pelo menos 1-2 semanas, cobrindo pelo menos um ciclo de negócio completo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Cálculo do Tamanho Amostral</h2>
        <p style={S.p}>
          O sample size é determinado por quatro parâmetros: nível de significância (alpha), poder (1-beta), taxa de conversão baseline, e o MDE. Subestimar o n leva a experimentos underpowered — que frequentemente não detetam efeitos reais.
        </p>

        <div style={S.diagram}>
          <PowerCurveSVG />
        </div>

        <h3 style={S.h3}>Fórmula para Duas Proporções</h3>
        <p style={S.p}>
          Para testar a diferença entre duas taxas de conversão, o número de observações necessárias por grupo é:
        </p>
        
          <BlockMath math="n = \frac{2\,(z_{\alpha/2} + z_{\beta})^2 \cdot p(1-p)}{\delta^2}" />
          <p style={{ ...S.p, margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            onde <InlineMath math="p" /> é a taxa baseline, <InlineMath math="\delta" /> é o MDE, <InlineMath math="z_{\alpha/2} = 1.96" /> (alpha=0.05, bilateral), <InlineMath math="z_{\beta} = 0.84" /> (poder=0.80)
          </p>
        

        <h3 style={S.h3}>Parâmetros Chave e Trade-offs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Valor típico</th>
              <th style={S.th}>Impacto em n</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>alpha (tipo I)</td>
              <td style={S.td}>0.05</td>
              <td style={S.td}>Menor alpha → maior n</td>
            </tr>
            <tr>
              <td style={S.td}>Poder (1 - beta)</td>
              <td style={S.td}>0.80 ou 0.90</td>
              <td style={S.td}>Maior poder → maior n</td>
            </tr>
            <tr>
              <td style={S.td}>Baseline p</td>
              <td style={S.td}>Depende da métrica</td>
              <td style={S.td}>p próximo de 0.5 → maior n</td>
            </tr>
            <tr>
              <td style={S.td}>MDE</td>
              <td style={S.td}>Decisão de negócio</td>
              <td style={S.td}>Menor MDE → n quadrático</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Regra prática:</strong> se o tráfego não permite atingir o n necessário dentro de um período razoável (ex: 4 semanas), é melhor rever o MDE para cima ou aceitar menor poder, do que correr um teste demasiado curto.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Randomização e Validade</h2>
        <p style={S.p}>
          A randomização é o que distingue um experimento de um estudo observacional — é ela que garante que grupos são comparáveis em todas as variáveis (observadas e não observadas). Uma má randomização invalida todas as análises subsequentes.
        </p>

        <div style={S.diagram}>
          <RandomizationSVG />
        </div>

        <h3 style={S.h3}>Violações de SUTVA e Randomização por Cluster</h3>
        <p style={S.p}>
          SUTVA (Stable Unit Treatment Value Assumption) assume que o outcome de um utilizador não é afetado pela variante de outros utilizadores. Em redes sociais, marketplaces ou plataformas de rideshare, esta assunção é violada: o utilizador A vê o comportamento de B e vice-versa.
        </p>
        <p style={S.p}>
          Solução: <strong>randomização por cluster</strong>. Em vez de randomizar por utilizador, randomiza-se por grupos (ex: cidade, região geográfica, comunidade social). Menos unidades de randomização reduz o poder, mas elimina o spillover.
        </p>

        <h3 style={S.h3}>Testes A/A e SRM</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Teste A/A:</strong> correr o mesmo sistema de randomização com duas variantes idênticas. Esperado: p-values uniformes, taxa de falsos positivos próxima de alpha. Serve para validar que o pipeline de logging e análise está correto.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SRM (Sample Ratio Mismatch):</strong> verificar se os grupos têm os tamanhos esperados. Se configurarmos 50/50 e observarmos 48/52, pode ser bug de logging, caching, ou bot traffic. Teste: qui-quadrado de goodness-of-fit. SRM invalida os resultados.
          </p>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Análise — Proporções</h2>
        <p style={S.p}>
          Para métricas binárias (converteu / não converteu), o teste padrão é o z-test de duas proporções. Com amostras grandes (n &gt; 1000 por grupo), a aproximação normal é excelente.
        </p>

        <div style={S.diagram}>
          <TwoDistSVG />
        </div>

        <div style={S.note}>
          <strong>Lift relativo vs. absoluto:</strong> "+0.4pp" (absoluto) e "+13.3%" (relativo) descrevem o mesmo efeito. Para comunicação executiva, o relativo soa maior. Para análise de impacto de revenue, o absoluto é mais direto. Reportar sempre ambos para contexto.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Análise — Médias e Revenue</h2>
        <p style={S.p}>
          Para métricas contínuas (revenue por utilizador, duração de sessão, número de itens no carrinho), o teste adequado é o t-test de Welch, que não assume variâncias iguais entre grupos.
        </p>

        <h3 style={S.h3}>Problema: Alta Variância em Revenue</h3>
        <p style={S.p}>
          A distribuição de revenue por utilizador é tipicamente muito skewed: a maioria dos utilizadores tem revenue zero, e uns poucos têm revenue muito elevado. Isto inflaciona a variância e reduz o poder do teste.
        </p>

        <h3 style={S.h3}>Winsorizing e Transformações</h3>
        <p style={S.p}>
          <strong>Winsorizing (capping):</strong> limitar os outliers ao percentil 99 (ou 95) remove a influência de valores extremos. Importante: fazer capping no pooled dataset ou usar o threshold do controlo aplicado a ambos.
        </p>
        <p style={S.p}>
          <strong>Log transform:</strong> para métricas lognormais (como revenue), trabalhar em log-escala estabiliza a variância. O teste t em log-escala testa a razão de medianas, não a diferença de médias.
        </p>

        <h3 style={S.h3}>Delta Method para Ratio Metrics</h3>
        <div style={S.note}>
          Métricas como CTR = cliques / impressões são ratios. A variância de um ratio não é a variância de numerador a dividir pela variância de denominador — é preciso o delta method:
          <BlockMath math="\operatorname{Var}\!\left(\frac{Y}{X}\right) \approx \left(\frac{\mu_Y}{\mu_X}\right)^2 \left[\frac{\operatorname{Var}(Y)}{\mu_Y^2} + \frac{\operatorname{Var}(X)}{\mu_X^2} - \frac{2\operatorname{Cov}(X,Y)}{\mu_X \mu_Y}\right]" />
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Problema de Múltiplos Testes</h2>
        <p style={S.p}>
          Com alpha = 0.05, cada teste individual tem 5% de probabilidade de falso positivo. Se fizermos 20 testes independentes, a probabilidade de pelo menos um falso positivo é <InlineMath math="1 - 0.95^{20} \approx 64\%" />.
        </p>

        <div style={S.diagram}>
          <MultipleTestingSVG />
        </div>

        <h3 style={S.h3}>Correções para Múltiplas Comparações</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.75rem' }}>
            <strong>Bonferroni:</strong> dividir alpha pelo número de testes. Se 20 métricas, usar alpha' = 0.05/20 = 0.0025. Muito conservador — aumenta muito os falsos negativos. Adequado quando cada falso positivo tem custo elevado.
          </p>
          <p style={{ ...S.p, marginBottom: '0.75rem' }}>
            <strong>Benjamini-Hochberg (FDR):</strong> controla a False Discovery Rate — a proporção esperada de falsos positivos entre os descobertos. Muito menos conservador que Bonferroni. Ideal para exploração de muitas métricas.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Melhor solução:</strong> pré-registar uma única métrica primária. Sem a necessidade de correger para múltiplos testes, o alpha = 0.05 é válido diretamente.
          </p>
        </div>

        <div style={S.note}>
          <strong>Peeking problem:</strong> olhar para os resultados a meio do experimento e parar se p &lt; 0.05 é equivalente a fazer múltiplos testes. O tipo I error real pode subir para 30%+ dependendo de quantas vezes se olhou. Ver Secção 8.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Sequential Testing e Peeking</h2>
        <p style={S.p}>
          O teste de hipóteses frequentista clássico pressupõe que o n é fixo antes de ver os dados. Se pararmos o experimento quando p &lt; 0.05 em qualquer momento (peeking), estamos a aplicar o teste várias vezes, inflacionando o tipo I error.
        </p>

        <div style={S.diagram}>
          <PeekingSVG />
        </div>

        <p style={S.p}>
          O gráfico mostra a trajetória do p-value ao longo do tempo num experimento onde não há efeito real. Os pontos vermelhos marcam momentos em que o p-value cruzou 0.05 por puro acaso. Parar em qualquer desses momentos seria um falso positivo.
        </p>

        <h3 style={S.h3}>Soluções para Sequential Testing</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Ideia</th>
              <th style={S.th}>Prós / Contras</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Fixed-horizon</td>
              <td style={S.td}>Definir n antes, olhar apenas no fim</td>
              <td style={S.td}>Simples; requer disciplina</td>
            </tr>
            <tr>
              <td style={S.td}>SPRT (Wald)</td>
              <td style={S.td}>Likelihood ratio com fronteiras de paragem</td>
              <td style={S.td}>Válido a qualquer momento; menos flexível</td>
            </tr>
            <tr>
              <td style={S.td}>mSPRT / always-valid</td>
              <td style={S.td}>e-values; p-values válidos em qualquer momento</td>
              <td style={S.td}>Moderno; usado no LinkedIn, Spotify</td>
            </tr>
            <tr>
              <td style={S.td}>Bayesian testing</td>
              <td style={S.td}>P(B &gt; A | dados); monitorizar continuamente</td>
              <td style={S.td}>Intuitivo; escolha de prior importante</td>
            </tr>
            <tr>
              <td style={S.td}>Group sequential</td>
              <td style={S.td}>Alpha spending ao longo de interim analyses</td>
              <td style={S.td}>O'Brien-Fleming; muito usado em ensaios clínicos</td>
            </tr>
          </tbody>
        </table>

      </section>

      <hr style={S.divider} />

      {/* ── SECTION 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Além do A/B — Designs Avançados</h2>

        <h3 style={S.h3}>Multi-Armed Bandits</h3>
        <p style={S.p}>
          Em vez de split fixo 50/50, bandits alocam mais tráfego à variante que parece melhor em tempo real. O tradeoff fundamental é <strong>explore vs. exploit</strong>: explorar variantes novas vs. exploitar a que parece melhor.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Thompson Sampling:</strong> para cada variante, amostrar de uma distribuição Beta posterior (atualizada com conversões observadas). Escolher a variante com o maior sample. Naturalmente balanceia explore/exploit.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Quando preferir bandits sobre A/B:</strong> quando o custo de mostrar a variante pior é elevado (ex: revenue imediato), quando há muitas variantes para testar, ou quando o efeito muda ao longo do tempo. Desvantagem: análise estatística mais complexa; difícil estimar efeito causal limpo.
          </p>
        </div>

        <h3 style={S.h3}>Factorial Designs (2&#7482; Designs)</h3>
        <p style={S.p}>
          Testar múltiplos fatores simultaneamente. Um design 2 &times; 2 testa dois fatores (ex: copy A/B e imagem X/Y) em quatro células: AX, AY, BX, BY. Permite estimar <strong>efeitos de interação</strong> — o efeito de mudar o copy pode depender da imagem.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Célula</th>
              <th style={S.th}>Copy</th>
              <th style={S.th}>Imagem</th>
              <th style={S.th}>Conversão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>AX</td>
              <td style={S.td}>Original</td>
              <td style={S.td}>Original</td>
              <td style={S.td}>3.0%</td>
            </tr>
            <tr>
              <td style={S.td}>AY</td>
              <td style={S.td}>Original</td>
              <td style={S.td}>Nova</td>
              <td style={S.td}>3.2%</td>
            </tr>
            <tr>
              <td style={S.td}>BX</td>
              <td style={S.td}>Novo</td>
              <td style={S.td}>Original</td>
              <td style={S.td}>3.5%</td>
            </tr>
            <tr>
              <td style={S.td}>BY</td>
              <td style={S.td}>Novo</td>
              <td style={S.td}>Nova</td>
              <td style={S.td}>4.1%</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          O efeito de interação é: (BY - BX) - (AY - AX) = (4.1 - 3.5) - (3.2 - 3.0) = 0.6 - 0.2 = +0.4pp. A nova imagem tem efeito maior quando combinada com o novo copy — há interação positiva.
        </p>

        <h3 style={S.h3}>Switchback Experiments</h3>
        <p style={S.p}>
          Para sistemas onde a randomização por utilizador é impossível (ex: rideshare marketplace — o mesmo driver e rider interagem), alternar o tratamento por <em>período de tempo</em>: horas pares = controlo, horas ímpares = tratamento. Importante controlar para autocorrelação temporal.
        </p>

        <h3 style={S.h3}>Interleaving (Ranking Systems)</h3>
        <p style={S.p}>
          Para testar dois algoritmos de ranking (ex: recomendações), mostrar ao mesmo utilizador uma lista interleaved (alternando resultados dos dois sistemas). Muito mais sensível que A/B tradicional para ranking — detecta diferenças com 10-100x menos tráfego.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Síntese</h2>
        <p style={S.p}>
          O lifecycle de um experimento tem quatro fases. Erros em qualquer fase podem invalidar os resultados. O checklist abaixo cobre as verificações essenciais.
        </p>

        <div style={S.diagram}>
          <ChecklistSVG />
        </div>

        <h3 style={S.h3}>Erros Comuns em Testes A/B</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Erro</th>
              <th style={S.th}>Consequência</th>
              <th style={S.th}>Solução</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Peeking e paragem antecipada</td>
              <td style={S.td}>Falsos positivos inflacionados (até 30%+)</td>
              <td style={S.td}>Sequential testing ou fixed-horizon estrito</td>
            </tr>
            <tr>
              <td style={S.td}>Múltiplas métricas sem correção</td>
              <td style={S.td}>Alta taxa de falsa descoberta</td>
              <td style={S.td}>Pré-registar métrica primária única; usar BH-FDR</td>
            </tr>
            <tr>
              <td style={S.td}>Unidade de randomização errada</td>
              <td style={S.td}>Spillover, SUTVA violado</td>
              <td style={S.td}>Randomizar ao nível correto (user vs cluster)</td>
            </tr>
            <tr>
              <td style={S.td}>Duração curta (sem semana completa)</td>
              <td style={S.td}>Efeitos de dia-da-semana não capturados</td>
              <td style={S.td}>Correr pelo menos 1-2 semanas completas</td>
            </tr>
            <tr>
              <td style={S.td}>Novelty effect</td>
              <td style={S.td}>Lift inflacionado a curto prazo</td>
              <td style={S.td}>Analisar apenas utilizadores recorrentes ou correr mais tempo</td>
            </tr>
            <tr>
              <td style={S.td}>SRM (Sample Ratio Mismatch)</td>
              <td style={S.td}>Grupos não representativos; resultados inválidos</td>
              <td style={S.td}>Teste qui-quadrado de proporções; investigar bug de logging</td>
            </tr>
            <tr>
              <td style={S.td}>Confundir sig. estatística com prática</td>
              <td style={S.td}>Ship de efeito trivial ou rejeitar efeito real</td>
              <td style={S.td}>Reportar sempre CI para o lift; definir MDE de negócio a priori</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Framework de Decisão Final</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Uma decisão de ship requer <em>todas</em> as condições:
          </p>
          <p style={{ ...S.p, marginBottom: '0.25rem' }}>1. <strong>Significância estatística:</strong> p &lt; alpha pré-especificado, CI do lift não inclui zero.</p>
          <p style={{ ...S.p, marginBottom: '0.25rem' }}>2. <strong>Significância prática:</strong> lift estimado &gt;= MDE de negócio.</p>
          <p style={{ ...S.p, marginBottom: '0.25rem' }}>3. <strong>Guardrails OK:</strong> nenhuma métrica de guardrail degradou.</p>
          <p style={{ ...S.p, marginBottom: 0 }}>4. <strong>Qualitativa OK:</strong> user research, heatmaps, e feedback qualitativo alinham com o resultado quantitativo.</p>
        </div>

        <div style={S.note}>
          <strong>Iterate, não apenas Ship/Kill:</strong> um resultado nulo (p não significativo) não significa que a ideia é má — pode significar que o MDE foi muito pequeno, ou que a implementação precisava de ser melhorada. Os dados do experimento devem informar a próxima iteração.
        </div>

      </section>
    </div>
  );
}
