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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.7rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1rem', margin: '1.5rem 0', display: 'flex', justifyContent: 'center' },
  formula: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 1.25rem', fontFamily: 'monospace', fontSize: '0.95rem', color: color, margin: '0.75rem 0', textAlign: 'center' },
};

/* ─── SVG 1: Loss Landscape ─── */
function LossLandscapeSVG() {
  const pts = [];
  for (let i = 0; i <= 80; i++) {
    const x = i / 80;
    const y = 4 * (x - 0.5) * (x - 0.5);
    pts.push([30 + i * 3, 130 - y * 100]);
  }
  const mseD = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  const cePts = [];
  for (let i = 1; i <= 79; i++) {
    const x = i / 80;
    const y = -(Math.log(x) * 0.3 + Math.log(1 - x) * 0.7) * 28;
    cePts.push([30 + i * 3, 130 - Math.min(y, 90)]);
  }
  const ceD = cePts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  return (
    <svg viewBox="0 0 280 160" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="280" height="160" fill="var(--bg-secondary)" />
      <line x1="30" y1="10" x2="30" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="30" y1="140" x2="260" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="28" y="8" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">L</text>
      <text x="262" y="143" fontSize="9" fill="var(--text-secondary)" textAnchor="start">ŷ</text>
      <path d={mseD} fill="none" stroke={color} strokeWidth="2" />
      <path d={ceD} fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
      <text x="220" y="60" fontSize="9" fill={color}>MSE</text>
      <text x="270" y="74" fontSize="9" fill="#f97316">Cross-Ent.</text>
      <text x="145" y="155" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">Previsão ŷ</text>
      <text x="4" y="80" fontSize="9" fill="var(--text-secondary)" textAnchor="start" dominantBaseline="middle">Perda</text>
    </svg>
  );
}

/* ─── SVG 2: Gradient Descent on Bowl ─── */
function GradientDescentSVG() {
  const cx = 140, cy = 80, rx = 100, ry = 55;
  const steps = [
    [cx - 70, cy + 45],
    [cx - 47, cy + 28],
    [cx - 28, cy + 16],
    [cx - 14, cy + 7],
    [cx - 5, cy + 2],
    [cx, cy],
  ];
  return (
    <svg viewBox="0 0 280 160" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="280" height="160" fill="var(--bg-secondary)" />
      {[1, 0.7, 0.45, 0.22].map((s, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx * s} ry={ry * s}
          fill="none" stroke={`rgba(249,115,22,0.10)`} strokeWidth="1" />
      ))}
      {steps.slice(0, -1).map((p, i) => (
        <line key={i} x1={p[0]} y1={p[1]} x2={steps[i + 1][0]} y2={steps[i + 1][1]}
          stroke={color} strokeWidth="1.5" markerEnd="url(#arr2)" />
      ))}
      {steps.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill={i === steps.length - 1 ? color : '#fff'}
          stroke={color} strokeWidth="1.5" />
      ))}
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <text x={cx} y={cy - 8} fontSize="9" fill={color} textAnchor="middle" dominantBaseline="middle">x*</text>
      <text x={cx} y="152" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">x_n+1 = x_n - alpha * grad f(x_n)</text>
    </svg>
  );
}

/* ─── SVG 3: Adam Bias Correction ─── */
function AdamSVG() {
  const w = 280, h = 140;
  const pts1 = [], pts2 = [];
  let m = 0, v = 0;
  const b1 = 0.9, b2 = 0.999, g = 0.5;
  for (let t = 1; t <= 40; t++) {
    m = b1 * m + (1 - b1) * g;
    v = b2 * v + (1 - b2) * g * g;
    const mhat = m / (1 - Math.pow(b1, t));
    const vhat = v / (1 - Math.pow(b2, t));
    pts1.push([20 + t * 6, 120 - m * 160]);
    pts2.push([20 + t * 6, 120 - mhat * 80]);
  }
  const d1 = pts1.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const d2 = pts2.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" />
      <line x1="20" y1="10" x2="20" y2="125" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="20" y1="125" x2="260" y2="125" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="20" y1="45" x2="260" y2="45" stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3 3" />
      <path d={d1} fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d={d2} fill="none" stroke={color} strokeWidth="2" />
      <text x="200" y="30" fontSize="8" fill="#f97316">m_t (biased)</text>
      <text x="180" y="78" fontSize="8" fill={color}>m_hat_t (corrected)</text>
      <text x="145" y="138" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">t (passos)</text>
    </svg>
  );
}

/* ─── SVG 4: L1 vs L2 Regularization ─── */
function RegularizationSVG() {
  return (
    <svg viewBox="0 0 280 160" width="100%" style={{ display: 'block', maxWidth: 420, margin: '0 auto' }} overflow="hidden">
      <rect width="280" height="160" fill="var(--bg-secondary)" />
      {/* L2 ball */}
      <circle cx="70" cy="80" r="45" fill="none" stroke={color} strokeWidth="1.5" />
      {/* L1 diamond */}
      <polygon points="210,35 255,80 210,125 165,80" fill="none" stroke="#f97316" strokeWidth="1.5" />
      {/* Loss contours ellipses */}
      {[25, 38, 52].map((r, i) => (
        <ellipse key={i} cx="70" cy="55" rx={r * 1.4} ry={r * 0.7}
          fill="none" stroke="rgba(249,115,22,0.10)" strokeWidth="0.8" />
      ))}
      {[25, 38, 52].map((r, i) => (
        <ellipse key={i} cx="210" cy="55" rx={r * 1.4} ry={r * 0.7}
          fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="0.8" />
      ))}
      {/* Optimal points */}
      <circle cx="70" cy="35" r="4" fill={color} />
      <circle cx="165" cy="80" r="4" fill="#f97316" />
      <text x="70" y="28" fontSize="8" fill={color} textAnchor="middle">L2: solução densa</text>
      <text x="153" y="90" fontSize="8" fill="#f97316" textAnchor="end">L1: sparse</text>
      <text x="70" y="150" fontSize="9" fill={color} textAnchor="middle">Bola L2</text>
      <text x="210" y="150" fontSize="9" fill="#f97316" textAnchor="middle">Bola L1</text>
    </svg>
  );
}

/* ─── SVG 5: Variance through layers ─── */
function VarianceSVG() {
  const layers = [0, 80, 160, 240];
  const vars = [1.0, 2.5, 0.3, 0.05];
  const varsGood = [1.0, 0.98, 0.97, 0.96];
  return (
    <svg viewBox="0 0 280 160" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="280" height="160" fill="var(--bg-secondary)" />
      <line x1="20" y1="10" x2="20" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="20" y1="130" x2="265" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
      {layers.map((lx, i) => (
        <g key={i}>
          <line x1={20 + lx * 0.93} y1="125" x2={20 + lx * 0.93} y2="133" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x={20 + lx * 0.93} y="143" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">
            {`L${i + 1}`}
          </text>
        </g>
      ))}
      {/* Bad init */}
      {layers.map((lx, i) => {
        if (i === 0) return null;
        const x1 = 20 + layers[i - 1] * 0.93;
        const y1 = 130 - vars[i - 1] * 50;
        const x2 = 20 + lx * 0.93;
        const y2 = 130 - vars[i] * 50;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="2" />;
      })}
      {layers.map((lx, i) => (
        <circle key={i} cx={20 + lx * 0.93} cy={130 - vars[i] * 50} r="4" fill="#f97316" />
      ))}
      {/* Good init (Xavier) */}
      {layers.map((lx, i) => {
        if (i === 0) return null;
        const x1 = 20 + layers[i - 1] * 0.93;
        const y1 = 130 - varsGood[i - 1] * 50;
        const x2 = 20 + lx * 0.93;
        const y2 = 130 - varsGood[i] * 50;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3" />;
      })}
      {layers.map((lx, i) => (
        <circle key={i} cx={20 + lx * 0.93} cy={130 - varsGood[i] * 50} r="4" fill="#f59e0b" />
      ))}
      <text x="220" y="30" fontSize="8" fill="#f97316">Init má</text>
      <text x="220" y="43" fontSize="8" fill="#f59e0b">Xavier/He</text>
      <text x="8" y="70" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">Var</text>
    </svg>
  );
}

/* ─── SVG 6: Batch Normalization distribution shift ─── */
function BatchNormSVG() {
  const gauss = (x, mu, sig) => Math.exp(-0.5 * ((x - mu) / sig) ** 2) / (sig * Math.sqrt(2 * Math.PI));
  const xs = Array.from({ length: 60 }, (_, i) => -3 + i * 0.1);

  const before = xs.map((x, i) => [-25 + i * 4, 140 - gauss(x, 0.8, 1.4) * 200]);
  const after = xs.map((x, i) => [115 + i * 4, 140 - gauss(x, 0, 0.8) * 200]);

  const dBefore = before.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const dAfter = after.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  return (
    <svg viewBox="0 0 290 165" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500, margin: '0 auto' }}>
      <rect width="290" height="165" fill="var(--bg-secondary)" />
      <line x1="-25" y1="140" x2="95" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="115" y1="140" x2="255" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
      <path d={dBefore} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <path d={dAfter} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="34" y="158" fontSize="9" fill="#f97316" textAnchor="middle">Antes BN</text>
      <text x="175" y="158" fontSize="9" fill={color} textAnchor="middle">Depois BN</text>
      <text x="34" y="12" fontSize="8" fill="#f97316" textAnchor="middle">mu=0.8, sigma=1.4</text>
      <text x="175" y="12" fontSize="8" fill={color} textAnchor="middle">mu=0, sigma=1</text>
    </svg>
  );
}

/* ─── SVG 7: Attention Scores ─── */
function AttentionSVG() {
  const tokens = ['A', 'B', 'C', 'D'];
  const scores = [
    [0.7, 0.1, 0.15, 0.05],
    [0.05, 0.8, 0.1, 0.05],
    [0.1, 0.2, 0.6, 0.1],
    [0.05, 0.05, 0.1, 0.8],
  ];
  return (
    <svg viewBox="0 0 240 200" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="240" height="200" fill="var(--bg-secondary)" />
      <text x="120" y="16" fontSize="10" fill="var(--text-primary)" textAnchor="middle" fontWeight="700">
        Attention Matrix (softmax)
      </text>
      {tokens.map((t, i) => (
        <text key={i} x={55 + i * 40} y="34" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">{t}</text>
      ))}
      {tokens.map((t, j) => (
        <text key={j} x="30" y={55 + j * 35} fontSize="10" fill="var(--text-secondary)" textAnchor="middle" dominantBaseline="middle">{t}</text>
      ))}
      {scores.map((row, j) =>
        row.map((s, i) => (
          <g key={`${j}-${i}`}>
            <rect x={38 + i * 40} y={40 + j * 35} width="34" height="28"
              fill={`rgba(249,115,22,0.10)`} rx="3" />
            <text x={55 + i * 40} y={54 + j * 35} fontSize="8.5" fill={s > 0.4 ? '#fff' : 'var(--text-primary)'}
              textAnchor="middle" dominantBaseline="middle">
              {s.toFixed(2)}
            </text>
          </g>
        ))
      )}
      <text x="120" y="185" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">
        Query tokens (linhas) x Key tokens (colunas)
      </text>
    </svg>
  );
}

/* ─── SVG 8: Convolution operation ─── */
function ConvolutionSVG() {
  const input = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];
  const kernel = [[1, 0, -1], [2, 0, -2], [1, 0, -1]];
  const cellSize = 22;
  return (
    <svg viewBox="0 0 280 160" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="280" height="160" fill="var(--bg-secondary)" />
      <text x="10" y="14" fontSize="9" fill="var(--text-secondary)">Input (5x5)</text>
      {input.map((row, j) =>
        row.map((v, i) => (
          <g key={`${j}-${i}`}>
            <rect x={10 + i * cellSize} y={20 + j * cellSize} width={cellSize - 1} height={cellSize - 1}
              fill="rgba(249,115,22,0.10)" stroke="var(--text-secondary)" strokeWidth="0.5" />
            <text x={10 + i * cellSize + cellSize / 2} y={20 + j * cellSize + cellSize / 2}
              fontSize="7" fill="var(--text-primary)" textAnchor="middle" dominantBaseline="middle">
              {v}
            </text>
          </g>
        ))
      )}
      {/* Highlight 3x3 window */}
      <rect x={10} y={20} width={cellSize * 3} height={cellSize * 3} fill="none"
        stroke={color} strokeWidth="2" />
      <text x="140" y="14" fontSize="9" fill="var(--text-secondary)">Kernel (3x3)</text>
      {kernel.map((row, j) =>
        row.map((v, i) => (
          <g key={`${j}-${i}`}>
            <rect x={140 + i * cellSize} y={20 + j * cellSize} width={cellSize - 1} height={cellSize - 1}
              fill={`rgba(249,115,22,0.10) * 0.3})`} stroke={color} strokeWidth="0.8" />
            <text x={140 + i * cellSize + cellSize / 2} y={20 + j * cellSize + cellSize / 2}
              fontSize="8" fill={color} textAnchor="middle" dominantBaseline="middle">
              {v}
            </text>
          </g>
        ))
      )}
      <text x="130" y="55" fontSize="16" fill={color} textAnchor="middle">*</text>
      <text x="120" y="145" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">
        Convolucao: (f*g)[n] = sum f[k] g[n-k]
      </text>
    </svg>
  );
}

/* ─── SVG 9: RNN Gradient Flow ─── */
function RNNGradientSVG() {
  const steps = 6;
  const gradsVanish = [1, 0.6, 0.3, 0.14, 0.06, 0.02];
  const gradsExplode = [1, 1.8, 3.2, 5.8, 10.5, 19];
  const maxVal = 20;
  return (
    <svg viewBox="0 0 280 170" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="280" height="170" fill="var(--bg-secondary)" />
      <line x1="30" y1="10" x2="30" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="30" y1="130" x2="265" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
      {gradsVanish.map((g, i) => {
        const x = 30 + i * 46;
        const y = 130 - (g / maxVal) * 115;
        return (
          <g key={i}>
            {i > 0 && (
              <line x1={30 + (i - 1) * 46} y1={130 - (gradsVanish[i - 1] / maxVal) * 115}
                x2={x} y2={y} stroke={color} strokeWidth="2" />
            )}
            <circle cx={x} cy={y} r="3.5" fill={color} />
          </g>
        );
      })}
      {gradsExplode.map((g, i) => {
        const x = 30 + i * 46;
        const capped = Math.min(g, maxVal);
        const y = 130 - (capped / maxVal) * 115;
        return (
          <g key={i}>
            {i > 0 && (
              <line x1={30 + (i - 1) * 46} y1={130 - (Math.min(gradsExplode[i - 1], maxVal) / maxVal) * 115}
                x2={x} y2={y} stroke="#f97316" strokeWidth="2" />
            )}
            <circle cx={x} cy={y} r="3.5" fill="#f97316" />
          </g>
        );
      })}
      {Array.from({ length: steps }, (_, i) => (
        <text key={i} x={30 + i * 46} y="143" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">
          {`T-${steps - 1 - i}`}
        </text>
      ))}
      <text x="230" y="35" fontSize="8" fill="#f97316">{"rho(W) > 1"}</text>
      <text x="230" y="100" fontSize="8" fill={color}>rho(W) {'<'} 1</text>
      <text x="8" y="70" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">|grad|</text>
      <text x="145" y="160" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">Passos de tempo (BPTT)</text>
    </svg>
  );
}

/* ─── SVG 10: Natural Gradient / Fisher ─── */
function NaturalGradientSVG() {
  return (
    <svg viewBox="0 0 280 160" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="280" height="160" fill="var(--bg-secondary)" />
      {/* Standard gradient - elongated contours */}
      <g transform="translate(70,80)">
        {[50, 35, 20].map((r, i) => (
          <ellipse key={i} cx="0" cy="0" rx={r * 2.2} ry={r * 0.5}
            fill="none" stroke={`rgba(59,130,246,${0.3 + i * 0.2})`} strokeWidth="1" />
        ))}
        {/* Standard gradient steps (zig-zag) */}
        <line x1="-70" y1="-12" x2="-50" y2="10" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrs)" />
        <line x1="-50" y1="10" x2="-30" y2="-8" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrs)" />
        <line x1="-30" y1="-8" x2="-15" y2="5" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrs)" />
        <line x1="-15" y1="5" x2="0" y2="0" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrs)" />
        <text x="0" y="55" fontSize="8" fill="#f97316" textAnchor="middle">Gradiente Padrão</text>
      </g>
      {/* Natural gradient - direct path */}
      <g transform="translate(210,80)">
        {[50, 35, 20].map((r, i) => (
          <ellipse key={i} cx="0" cy="0" rx={r * 2.2} ry={r * 0.5}
            fill="none" stroke={`rgba(249,115,22,0.10)`} strokeWidth="1" />
        ))}
        <line x1="-70" y1="-10" x2="-40" y2="-5" stroke={color} strokeWidth="1.5" markerEnd="url(#arrn)" />
        <line x1="-40" y1="-5" x2="-15" y2="-2" stroke={color} strokeWidth="1.5" markerEnd="url(#arrn)" />
        <line x1="-15" y1="-2" x2="0" y2="0" stroke={color} strokeWidth="1.5" markerEnd="url(#arrn)" />
        <text x="0" y="55" fontSize="8" fill={color} textAnchor="middle">Gradiente Natural</text>
      </g>
      <defs>
        <marker id="arrs" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="arrn" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── SVG 11: Variational / Euler-Lagrange ─── */
function VariationalSVG() {
  const xPoints = Array.from({ length: 60 }, (_, i) => i / 59);
  const straight = xPoints.map((x, i) => [20 + i * 4, 130 - x * 80]);
  const curved = xPoints.map((x, i) => [20 + i * 4, 130 - (x + 0.4 * Math.sin(Math.PI * x)) * 80]);
  const curved2 = xPoints.map((x, i) => [20 + i * 4, 130 - (x - 0.3 * Math.sin(Math.PI * x)) * 80]);

  const dS = straight.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const dC = curved.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const dC2 = curved2.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  return (
    <svg viewBox="0 0 260 160" width="100%" overflow="visible" style={{ display: 'block', maxWidth: 500 }}>
      <rect width="260" height="160" fill="var(--bg-secondary)" />
      <circle cx="20" cy="130" r="4" fill={color} />
      <circle cx="256" cy="50" r="4" fill={color} />
      <path d={dC2} fill="none" stroke="rgba(249,115,22,0.10)" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={dC} fill="none" stroke="rgba(249,115,22,0.10)" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={dS} fill="none" stroke={color} strokeWidth="2.5" />
      <text x="130" y="65" fontSize="9" fill={color} textAnchor="middle">f* (Euler-Lagrange)</text>
      <text x="130" y="30" fontSize="8" fill="rgba(249,115,22,0.10)" textAnchor="middle">variações admissíveis</text>
      <text x="130" y="148" fontSize="8" fill="var(--text-secondary)" textAnchor="middle">
        dL/df - d/dx(dL/df') = 0
      </text>
    </svg>
  );
}

/* ─── Main Component ─── */
export default function CALC7() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Calculus for Data Science
      </Link>

      <div style={S.tag}>Module 07</div>
      <h1 style={S.h1}>Cálculo em Machine Learning</h1>
      <p style={S.lead}>
        Derivação rigorosa das fundações matemáticas do ML moderno — funções de perda, otimizadores,
        normalização, atenção e muito mais. Cada algoritmo emerge de princípios de cálculo.
      </p>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Funções de Perda — Derivação Matemática</h2>
        <p style={S.p}>
          A escolha da função de perda não é arbitrária: define a geometria do espaço de otimização
          e os gradientes que fluem pela rede. Três funções dominam o ML supervisionado.
        </p>

        <h3 style={S.h3}>MSE — Erro Quadrático Médio</h3>
        <div style={S.formula}><BlockMath math="L = \frac{1}{n}\|y - \hat{y}\|^2 = \frac{1}{n}\sum_i (y_i - \hat{y}_i)^2" /></div>
        <p style={S.p}>
          Gradiente em relação à previsão <InlineMath math="\hat{y}" />:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \hat{y}} = \frac{2}{n}(\hat{y} - y)" /></div>
        <div style={S.note}>
          O factor 2 cancela-se frequentemente quando α absorve constantes. MSE penaliza erros grandes
          quadraticamente — sensível a outliers mas diferenciável em toda a parte.
        </div>

        <h3 style={S.h3}>Cross-Entropy Binária</h3>
        <div style={S.formula}><BlockMath math="L = -[y \cdot \log(\hat{y}) + (1-y) \cdot \log(1-\hat{y})]" /></div>
        <p style={S.p}>
          Gradiente directo em relação a <InlineMath math="\hat{y}" /> (saída sigmoid):
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \hat{y}} = \frac{\hat{y} - y}{\hat{y}(1 - \hat{y})}" /></div>
        <p style={S.p}>
          Mas <InlineMath math="\hat{y} = \sigma(z)" />, e <InlineMath math="\partial\hat{y}/\partial z = \hat{y}(1-\hat{y})" />. Pela regra da cadeia:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial z} = \frac{\partial L}{\partial \hat{y}} \cdot \frac{\partial \hat{y}}{\partial z} = \frac{\hat{y}-y}{\hat{y}(1-\hat{y})} \cdot \hat{y}(1-\hat{y}) = \hat{y} - y" /></div>
        
          <strong>Cancelamento elegante:</strong> a derivada da cross-entropy binária com sigmoid
          simplifica para <InlineMath math="\hat{y} - y" />. O denominador de <InlineMath math="\hat{y}(1-\hat{y})" /> cancela exactamente com a derivada da sigmoid.
          Este é um dos resultados mais belos do cálculo aplicado a ML.
        

        <h3 style={S.h3}>Cross-Entropy Categórica com Softmax</h3>
        <div style={S.formula}><BlockMath math="L = -\sum_k y_k \log(\hat{y}_k), \quad \hat{y}_k = \frac{\exp(z_k)}{\sum_j \exp(z_j)}" /></div>
        <p style={S.p}>
          O jacobiano do softmax: <InlineMath math="\partial\hat{y}_i/\partial z_j = \hat{y}_i(\delta_{ij} - \hat{y}_j)" />. Aplicando a regra da cadeia com a cross-entropy:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial z_i} = \hat{y}_i - y_i" /></div>
        <p style={S.p}>
          Novamente o mesmo cancelamento. Para a classe correcta k, a contribuição de <InlineMath math="-y_k/\hat{y}_k" /> multiplicada
          por <InlineMath math="\hat{y}_k(1-\hat{y}_k)" /> para i=k mais <InlineMath math="\sum_{j \neq k} (-y_j/\hat{y}_j)(-\hat{y}_j\hat{y}_k)" /> reduz a <InlineMath math="\hat{y}_i - y_i" />.
        </p>

        <div style={S.svgWrap}>
          <LossLandscapeSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função de Perda</th>
              <th style={S.th}>Tarefa</th>
              <th style={S.th}>∂L/∂z (final)</th>
              <th style={S.th}>Propriedade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>MSE</td>
              <td style={S.td}>Regressão</td>
              <td style={S.td}><InlineMath math="\frac{2}{n}(\hat{y}-y)" /></td>
              <td style={S.td}>Sensível a outliers</td>
            </tr>
            <tr>
              <td style={S.td}>Binary CE + Sigmoid</td>
              <td style={S.td}>Classificação binária</td>
              <td style={S.td}><InlineMath math="\hat{y}-y" /></td>
              <td style={S.td}>Cancelamento sigmoid</td>
            </tr>
            <tr>
              <td style={S.td}>Cat. CE + Softmax</td>
              <td style={S.td}>Multiclasse</td>
              <td style={S.td}><InlineMath math="\hat{y}_i - y_i" /></td>
              <td style={S.td}>Cancelamento softmax</td>
            </tr>
            <tr>
              <td style={S.td}>Huber Loss</td>
              <td style={S.td}>Regressão robusta</td>
              <td style={S.td}>MSE perto de 0, MAE longe</td>
              <td style={S.td}>Resistente a outliers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Derivação de Gradient Descent</h2>
        <p style={S.p}>
          O gradient descent emerge naturalmente da aproximação de Taylor de primeira ordem combinada
          com uma restrição de passo.
        </p>

        <h3 style={S.h3}>Expansão de Taylor de Primeira Ordem</h3>
        <div style={S.formula}><BlockMath math="f(x + \Delta x) \approx f(x) + \nabla f(x)^\top \cdot \Delta x" /></div>
        <p style={S.p}>
          Queremos minimizar <InlineMath math="f(x+\Delta x)" />. Fixando <InlineMath math="\|\Delta x\| = \varepsilon" /> (restrição de confiança), o problema torna-se:
        </p>
        <div style={S.formula}><BlockMath math="\min_{\|\Delta x\|=\varepsilon} \; \nabla f(x)^\top \cdot \Delta x" /></div>
        <p style={S.p}>
          Pela desigualdade de Cauchy-Schwarz: <InlineMath math="\nabla f \cdot \Delta x \geq -\|\nabla f\| \cdot \|\Delta x\|" />. O mínimo é atingido quando
          <InlineMath math="\Delta x" /> é antiparalelo a <InlineMath math="\nabla f" />:
        </p>
        <div style={S.formula}><BlockMath math="\Delta x^* = -\varepsilon \cdot \frac{\nabla f}{\|\nabla f\|}" /></div>
        <p style={S.p}>
          Absorvendo <InlineMath math="\varepsilon" /> na taxa de aprendizagem <InlineMath math="\alpha" />: <InlineMath math="x^{(t+1)} = x^{(t)} - \alpha\nabla f(x^{(t)})" />. Esta é a descida pelo
          gradiente — a direcção de descida mais íngreme localmente.
        </p>

        <h3 style={S.h3}>Convergência para Funções Fortemente Convexas</h3>
        <p style={S.p}>
          Para f <InlineMath math="\mu" />-fortemente convexa e L-suave (<InlineMath math="\|\nabla^2 f\| \leq L" />), com <InlineMath math="\alpha = 1/L" />:
        </p>
        <div style={S.formula}><BlockMath math="\|x^{(t+1)} - x^*\|^2 \leq \left(1 - \frac{\mu}{L}\right) \|x^{(t)} - x^*\|^2" /></div>
        <p style={S.p}>
          Convergência geométrica (linear) com taxa <InlineMath math="\kappa = \mu/L" /> (razão de condicionamento). Após T iterações:
          <InlineMath math="\|x_T - x^*\|^2 \leq (1-\kappa)^T \|x_0 - x^*\|^2" />. Para <InlineMath math="\kappa" /> pequeno (mal condicionado), convergência lenta.
        </p>

        <div style={S.svgWrap}>
          <GradientDescentSVG />
        </div>

        <div style={S.note}>
          Gradient descent só garante mínimos locais para funções não-convexas. Em redes neuronais
          profundas, os "mínimos locais" tendem a ter valores de perda similares — o problema real
          são os pontos de sela.
        </div>

        <h3 style={S.h3}>Variantes de Gradient Descent</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Variante</th>
              <th style={S.th}>Actualização</th>
              <th style={S.th}>Custo por Iteração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>GD (Batch)</td>
              <td style={S.td}><InlineMath math="x \mathrel{-}= \alpha\nabla f(x)" /> sobre todo dataset</td>
              <td style={S.td}><InlineMath math="O(n)" /></td>
            </tr>
            <tr>
              <td style={S.td}>SGD</td>
              <td style={S.td}><InlineMath math="x \mathrel{-}= \alpha\nabla f_i(x)" /> para amostra i</td>
              <td style={S.td}><InlineMath math="O(1)" /></td>
            </tr>
            <tr>
              <td style={S.td}>Mini-batch SGD</td>
              <td style={S.td}><InlineMath math="x \mathrel{-}= \alpha\nabla f_B(x)" /> sobre batch B</td>
              <td style={S.td}><InlineMath math="O(|B|)" /></td>
            </tr>
            <tr>
              <td style={S.td}>Momentum</td>
              <td style={S.td}><InlineMath math="v = \beta v + \nabla f;\; x \mathrel{-}= \alpha v" /></td>
              <td style={S.td}><InlineMath math="O(|B|)" /> + memória</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Análise Matemática do Adam</h2>
        <p style={S.p}>
          Adam (Adaptive Moment Estimation) combina momentum de primeira e segunda ordem com correcção
          de viés. Derivação completa:
        </p>

        <h3 style={S.h3}>Momentos e Correcção de Viés</h3>
        <div style={S.formula}><BlockMath math="m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t \quad \text{(primeiro momento)}" /></div>
        <div style={S.formula}><BlockMath math="v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2 \quad \text{(segundo momento)}" /></div>
        <p style={S.p}>
          Expandindo <InlineMath math="m_t" /> recursivamente com <InlineMath math="m_0 = 0" />:
        </p>
        <div style={S.formula}><BlockMath math="m_t = (1-\beta_1) \sum_{i=1}^{t} \beta_1^{t-i} \cdot g_i" /></div>
        <p style={S.p}>
          Tomando esperança: <InlineMath math="\mathbb{E}[m_t] = \mathbb{E}[g] \cdot (1-\beta_1^t)" />. Logo <InlineMath math="m_t" /> está viesado por factor <InlineMath math="(1-\beta_1^t)" />.
          A correcção:
        </p>
        <div style={S.formula}><BlockMath math="\hat{m}_t = \frac{m_t}{1 - \beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1 - \beta_2^t}" /></div>
        <div style={S.formula}><BlockMath math="\theta_t = \theta_{t-1} - \alpha \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \varepsilon}" /></div>

        <div style={S.svgWrap}>
          <AdamSVG />
        </div>

        <h3 style={S.h3}>Intuição de Cada Componente</h3>
        
          <strong><InlineMath math="\hat{m}_t" /></strong> — direcção de movimento média, suaviza gradientes ruidosos (como momentum)
          mas normalizada para magnitude comparável ao gradiente instantâneo.
          <br /><br />
          <strong><InlineMath math="\hat{v}_t" /></strong> — variância do gradiente, estima a curvatura por coordenada.
          Divisão por <InlineMath math="\sqrt{\hat{v}}" /> normaliza o passo: coordenadas com gradientes consistentes recebem
          passos menores; coordenadas ruidosas também recebem passos menores.
          <br /><br />
          <strong><InlineMath math="\varepsilon" /></strong> — evita divisão por zero e estabiliza regiões de perda plana (<InlineMath math="\hat{v} \approx 0" />).
        

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Hiperparâmetro</th>
              <th style={S.th}>Valor Típico</th>
              <th style={S.th}>Efeito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\alpha" /> (lr)</td>
              <td style={S.td}><code>1e-3</code></td>
              <td style={S.td}>Magnitude global do passo</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\beta_1" /></td>
              <td style={S.td}><code>0.9</code></td>
              <td style={S.td}>Suavização do gradiente (momentum)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\beta_2" /></td>
              <td style={S.td}><code>0.999</code></td>
              <td style={S.td}>Suavização da variância</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\varepsilon" /></td>
              <td style={S.td}><code>1e-8</code></td>
              <td style={S.td}>Estabilidade numérica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Regularização — Cálculo das Penalidades</h2>
        <p style={S.p}>
          Regularização adiciona um termo de penalidade à função de perda que favorece soluções
          com pesos pequenos, controlando a complexidade do modelo.
        </p>

        <h3 style={S.h3}>Regularização L2 (Ridge / Weight Decay)</h3>
        <div style={S.formula}><BlockMath math="L_{\text{reg}} = L_{\text{data}} + \lambda\|w\|^2 = L_{\text{data}} + \lambda \sum_i w_i^2" /></div>
        <p style={S.p}>Gradiente da penalidade L2:</p>
        <div style={S.formula}><BlockMath math="\frac{\partial}{\partial w}[\lambda\|w\|^2] = 2\lambda w" /></div>
        <p style={S.p}>
          A actualização de pesos torna-se: <InlineMath math="w \leftarrow w - \alpha(\nabla L_{\text{data}} + 2\lambda w) = (1-2\alpha\lambda)w - \alpha\nabla L_{\text{data}}" />.
          O factor <InlineMath math="(1-2\alpha\lambda)" /> representa decay multiplicativo dos pesos — daí o nome "weight decay".
          L2 penaliza pesos grandes mas nunca os zera exactamente.
        </p>

        <h3 style={S.h3}>Regularização L1 (Lasso)</h3>
        <div style={S.formula}><BlockMath math="L_{\text{reg}} = L_{\text{data}} + \lambda\|w\|_1 = L_{\text{data}} + \lambda \sum_i |w_i|" /></div>
        <p style={S.p}>Subgradiente da norma L1:</p>
        <div style={S.formula}><BlockMath math="\frac{\partial\|w\|_1}{\partial w_i} = \operatorname{sign}(w_i) \; (w_i \neq 0), \quad [-1,1] \; (w_i = 0)" /></div>
        
          <strong>Porquê L1 promove esparsidade:</strong> o gradiente de <InlineMath math="|w_i|" /> é <InlineMath math="\pm\lambda" /> independentemente
          da magnitude de <InlineMath math="w_i" />. Mesmo pesos muito pequenos recebem um empurrão constante em direcção
          a zero. Em contraste, L2 tem gradiente <InlineMath math="2\lambda w_i" /> que diminui à medida que <InlineMath math="w_i \to 0" />, e o peso
          nunca chega exactamente a zero. L1 pode "vencer" a inércia e zerar exactamente.
        

        <div style={S.svgWrap}>
          <RegularizationSVG />
        </div>

        <h3 style={S.h3}>Elastic Net</h3>
        <div style={S.formula}><BlockMath math="L_{\text{reg}} = L_{\text{data}} + \lambda_1\|w\|_1 + \lambda_2\|w\|^2" /></div>
        <p style={S.p}>
          Combina esparsidade de L1 com estabilidade de L2. Especialmente útil quando existem
          grupos de features correlacionadas — L1 tende a escolher uma arbitrariamente, L2 distribui
          o peso, elastic net faz algo intermédio.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Inicialização de Pesos — Análise de Variância</h2>
        <p style={S.p}>
          Uma das descobertas mais importantes do deep learning: a inicialização dos pesos determina
          se o treino começa bem ou falha completamente.
        </p>

        <h3 style={S.h3}>Propagação de Variância através de uma Camada</h3>
        <p style={S.p}>
          Considera uma camada linear: y = Wx, com W e x independentes, E[x] = 0, E[w] = 0.
        </p>
        <div style={S.formula}><BlockMath math="\operatorname{Var}[y_i] = \sum_j \operatorname{Var}[w_{ij}] \cdot \operatorname{Var}[x_j] = n_{\text{in}} \cdot \operatorname{Var}[w] \cdot \operatorname{Var}[x]" /></div>
        <p style={S.p}>
          Para manter variância constante através das camadas (<InlineMath math="\operatorname{Var}[y] = \operatorname{Var}[x]" />):
        </p>
        <div style={S.formula}><BlockMath math="\operatorname{Var}[w] = \frac{1}{n_{\text{in}}} \quad \to \quad \text{Xavier/Glorot Initialization}" /></div>

        <h3 style={S.h3}>Xavier vs. He Initialization</h3>
        <p style={S.p}>
          ReLU corta metade das activações (as negativas), efectivamente reduzindo a variância
          por um factor de 2. Para compensar:
        </p>
        <div style={S.formula}><BlockMath math="\operatorname{Var}[w] = \frac{2}{n_{\text{in}}} \quad \to \quad \text{He Initialization (para ReLU)}" /></div>
        
          <strong>Derivação He:</strong> para ReLU, <InlineMath math="\mathbb{E}[\text{ReLU}(z)^2] = \mathbb{E}[z^2]/2" /> quando <InlineMath math="z \sim \mathcal{N}(0,\sigma^2)" />.
          Logo <InlineMath math="\operatorname{Var}[\text{saída\_ReLU}] = n_{\text{in}} \cdot \operatorname{Var}[w] \cdot \operatorname{Var}[x] / 2" />. Para que seja igual a <InlineMath math="\operatorname{Var}[x]" />:
          <InlineMath math="\operatorname{Var}[w] = 2/n_{\text{in}}" />.
        

        <div style={S.svgWrap}>
          <VarianceSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Inicialização</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Activação Recomendada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Zeros</td>
              <td style={S.td}><InlineMath math="w = 0" /></td>
              <td style={S.td}>Nunca (simetria)</td>
            </tr>
            <tr>
              <td style={S.td}>Aleatória Normal</td>
              <td style={S.td}><InlineMath math="w \sim \mathcal{N}(0, 0.01)" /></td>
              <td style={S.td}>Redes rasas</td>
            </tr>
            <tr>
              <td style={S.td}>Xavier/Glorot</td>
              <td style={S.td}><InlineMath math="w \sim U[-1/\sqrt{n}, 1/\sqrt{n}]" /></td>
              <td style={S.td}>Tanh, Sigmoid</td>
            </tr>
            <tr>
              <td style={S.td}>He</td>
              <td style={S.td}><InlineMath math="w \sim \mathcal{N}(0, \sqrt{2/n})" /></td>
              <td style={S.td}>ReLU, Leaky ReLU</td>
            </tr>
            <tr>
              <td style={S.td}>Ortogonal</td>
              <td style={S.td}>W = QR decomp</td>
              <td style={S.td}>RNNs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Batch Normalization — Cálculo Completo</h2>
        <p style={S.p}>
          Batch Normalization normaliza activações dentro de um mini-batch, estabilizando o treino
          e permitindo taxas de aprendizagem maiores.
        </p>

        <h3 style={S.h3}>Forward Pass</h3>
        <div style={S.formula}><BlockMath math="\mu_B = \frac{1}{m}\sum_i x_i" /></div>
        <div style={S.formula}><BlockMath math="\sigma^2_B = \frac{1}{m}\sum_i (x_i - \mu_B)^2" /></div>
        <div style={S.formula}><BlockMath math="\hat{x}_i = \frac{x_i - \mu_B}{\sqrt{\sigma^2_B + \varepsilon}}" /></div>
        <div style={S.formula}><BlockMath math="y_i = \gamma \hat{x}_i + \beta" /></div>

        <h3 style={S.h3}>Backward Pass — Derivação Completa</h3>
        <p style={S.p}>
          Usando a regra da cadeia, e denotando <InlineMath math="\delta = \partial L/\partial y" />:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \gamma} = \sum_i \frac{\partial L}{\partial y_i} \cdot \hat{x}_i" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \beta} = \sum_i \frac{\partial L}{\partial y_i}" /></div>
        <p style={S.p}>Para o gradiente em relação a x, necessitamos de propagar por <InlineMath math="\mu_B" /> e <InlineMath math="\sigma^2_B" />:</p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \hat{x}_i} = \frac{\partial L}{\partial y_i} \cdot \gamma" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \sigma^2} = \sum_i \frac{\partial L}{\partial \hat{x}_i} \cdot (x_i - \mu_B) \cdot \left(-\tfrac{1}{2}\right)(\sigma^2+\varepsilon)^{-3/2}" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \mu} = \sum_i \frac{\partial L}{\partial \hat{x}_i} \cdot \frac{-1}{\sqrt{\sigma^2+\varepsilon}}" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial x_i} = \frac{\partial L/\partial \hat{x}_i}{\sqrt{\sigma^2+\varepsilon}} + \frac{\partial L}{\partial \sigma^2} \cdot \frac{2(x_i-\mu)}{m} + \frac{\partial L}{\partial \mu} \cdot \frac{1}{m}" /></div>

        <div style={S.svgWrap}>
          <BatchNormSVG />
        </div>

        <div style={S.highlight}>
          <strong>Porquê BN ajuda:</strong>
          <br />
          1. Reduz internal covariate shift — as distribuições de entrada de cada camada mantêm-se estáveis.
          <br />
          2. Permite taxas de aprendizagem maiores sem divergência.
          <br />
          3. Actua como regularizador — cada amostra é normalizada com estatísticas do batch (ruído).
          <br />
          4. Torna o gradiente mais uniforme — normalizar por σ compensa escalas diferentes de activação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Attention Mechanism — Cálculo</h2>
        <p style={S.p}>
          O mecanismo de atenção escalada é a base dos Transformers. A sua derivação matemática
          revela escolhas de design não-óbvias.
        </p>

        <h3 style={S.h3}>Scaled Dot-Product Attention</h3>
        <div style={S.formula}><BlockMath math="\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) \cdot V" /></div>
        <p style={S.p}>
          Q (queries), K (keys), V (values) são matrizes <InlineMath math="n \times d" />. Os scores <InlineMath math="QK^\top" /> são <InlineMath math="n \times n" />.
        </p>

        <h3 style={S.h3}>Jacobiano do Softmax</h3>
        <p style={S.p}>
          O softmax de vector z: <InlineMath math="s_i = \exp(z_i)/\sum_j \exp(z_j)" />. O jacobiano (matriz de derivadas parciais):
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial s_i}{\partial z_j} = s_i(\delta_{ij} - s_j)" /></div>
        <p style={S.p}>
          Para i=j: <InlineMath math="s_i(1-s_i)" />. Para i≠j: <InlineMath math="-s_i s_j" />. Esta estrutura é usada no backward pass da atenção.
        </p>

        <h3 style={S.h3}>Gradientes de Atenção</h3>
        <p style={S.p}>
          Seja <InlineMath math="A = \text{softmax}(QK^\top/\sqrt{d_k})" />, a saída <InlineMath math="O = AV" />. Dado <InlineMath math="\partial L/\partial O" />:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial V} = A^\top \cdot \frac{\partial L}{\partial O}" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial A} = \frac{\partial L}{\partial O} \cdot V^\top" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial (QK^\top/\sqrt{d_k})} = \text{softmax\_backward}\!\left(A,\, \frac{\partial L}{\partial A}\right)" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial Q} = \frac{\partial L}{\partial \text{scores}} \cdot \frac{K}{\sqrt{d_k}}" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial K} = \left(\frac{\partial L}{\partial \text{scores}}\right)^\top \cdot \frac{Q}{\sqrt{d_k}}" /></div>

        <div style={S.svgWrap}>
          <AttentionSVG />
        </div>

        
          <strong>Porquê escalar por <InlineMath math="\sqrt{d_k}" />:</strong> o produto <InlineMath math="QK^\top" /> tem variância <InlineMath math="d_k" /> (soma de <InlineMath math="d_k" />
          produtos de variável aleatória unitária). Sem escala, para <InlineMath math="d_k" /> grande os logits tornam-se
          muito grandes, o softmax satura (outputs próximos de 0 ou 1), e os gradientes
          <InlineMath math="\partial s/\partial z \approx s(1-s) \to 0" /> (vanishing gradient).
        
      </div>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Convoluções — Cálculo</h2>
        <p style={S.p}>
          CNNs exploram a estrutura de convoluções para aprendizagem eficiente de features
          locais com partilha de parâmetros.
        </p>

        <h3 style={S.h3}>Definições</h3>
        <div style={S.formula}><BlockMath math="(f * g)[n] = \sum_k f[k] \cdot g[n-k] \quad \text{(convolução discreta)}" /></div>
        <div style={S.formula}><BlockMath math="(f * g)(t) = \int f(\tau)\,g(t-\tau)\,d\tau \quad \text{(convolução contínua)}" /></div>
        <div style={S.formula}><BlockMath math="(f \star g)[n] = \sum_k f[k] \cdot g[n+k] \quad \text{(cross-correlação, CNNs)}" /></div>
        <p style={S.p}>
          CNNs calculam tecnicamente cross-correlação mas chamam-lhe convolução. A distinção
          importa para equivariância translacional.
        </p>

        <h3 style={S.h3}>Gradientes em Relação a Filtros e Inputs</h3>
        <p style={S.p}>
          Dado output O = X * W (convolução input X com filtro W), e ∂L/∂O:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial W[k]} = \sum_n \frac{\partial L}{\partial O[n]} \cdot X[n+k] \quad \text{(cross-correlação de } X \text{ com } \partial L/\partial O\text{)}" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial X[n]} = \sum_k \frac{\partial L}{\partial O[n-k]} \cdot W[k] \quad \text{(convolução transposta / full conv)}" /></div>
        <p style={S.p}>
          O gradiente em relação ao input é uma convolução "transposta" — o filtro é aplicado na
          ordem inversa. Para strides &gt; 1, o gradiente requer upsampling com zeros (deconvolution).
        </p>

        <div style={S.svgWrap}>
          <ConvolutionSVG />
        </div>

        <div style={S.highlight}>
          <strong>Eficiência da convolução:</strong>
          <br />
          Partilha de parâmetros: o mesmo filtro W (k parâmetros) é aplicado em n posições.
          Versus camada densa: n×n parâmetros. Para imagens 224×224 com filtro 3×3: 9 vs 50k parâmetros.
          <br />
          Equivariância translacional: se a entrada desloca, a saída desloca igualmente.
          Propriedade exacta da convolução; desejável para visão.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Gradient Flow em RNNs</h2>
        <p style={S.p}>
          RNNs processam sequências através de estado recorrente h_t = f(Wh(t-1) + Ux_t + b).
          O treino requer Backpropagation Through Time (BPTT).
        </p>

        <h3 style={S.h3}>BPTT — Derivação</h3>
        <p style={S.p}>
          O gradiente da perda em t=T em relação ao estado em t=0 envolve produto de jacobianos:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial h_T}{\partial h_0} = \prod_{i=1}^{T} \frac{\partial h_i}{\partial h_{i-1}} = \prod_{i=1}^{T} \operatorname{diag}(f'(z_i)) \cdot W" /></div>
        <p style={S.p}>
          O raio espectral de W determina o comportamento dos gradientes:
        </p>
        <div style={S.formula}><BlockMath math="\rho(W) = \max |\text{eigenvalue}(W)|" /></div>
        
          <strong><InlineMath math="\rho(W) < 1" />:</strong> produto de matrizes decresce exponencialmente → gradiente desvanece
          (vanishing gradient). Redes "esquecem" dependências longas.
          <br /><br />
          <strong><InlineMath math="\rho(W) > 1" />:</strong> produto cresce exponencialmente → gradiente explode. Treino instável,
          NaN nos pesos. Solução: gradient clipping (<InlineMath math="\|g\| \leftarrow \min(\|g\|, \text{max\_norm})" />).
        

        <div style={S.svgWrap}>
          <RNNGradientSVG />
        </div>

        <h3 style={S.h3}>Solução LSTM — Gradient Highways</h3>
        <p style={S.p}>
          O estado de célula do LSTM: C_t = f_t ⊙ C(t-1) + i_t ⊙ g_t. O gradiente flui por:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial C_t}{\partial C_{t-1}} = f_t \quad \text{(forget gate)}" /></div>
        <p style={S.p}>
          O forget gate <InlineMath math="f_t \in (0,1)" /> por coordenada controla o fluxo de gradiente como uma válvula.
          Com <InlineMath math="f_t \approx 1" />, o gradiente passa livremente. Este "gradient highway" resolve o vanishing
          gradient para dependências longas.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Natural Gradient</h2>
        <p style={S.p}>
          O gradient descent padrão ignora a geometria do espaço de distribuições de probabilidade.
          O natural gradient corrige esta limitação.
        </p>

        <h3 style={S.h3}>Fisher Information Matrix</h3>
        <div style={S.formula}><BlockMath math="F(\theta) = \mathbb{E}\!\left[\nabla \log p(x|\theta) \cdot \nabla \log p(x|\theta)^\top\right]" /></div>
        <p style={S.p}>
          F mede a curvatura da divergência KL em relação a <InlineMath math="\theta" />. É equivalente ao hessiano da
          KL-divergência entre <InlineMath math="p(x|\theta)" /> e <InlineMath math="p(x|\theta+\delta)" /> para <InlineMath math="\delta \to 0" />.
        </p>

        <h3 style={S.h3}>Natural Gradient Update</h3>
        <div style={S.formula}><BlockMath math="\theta_{t+1} = \theta_t - \alpha \cdot F(\theta_t)^{-1} \cdot \nabla L(\theta_t)" /></div>
        
          <strong>Invariância a reparametrização:</strong> o natural gradient é invariante a mudanças
          de parametrização — optimizar no espaço de distribuições, não de parâmetros. Se <InlineMath math="\theta' = g(\theta)" />,
          o natural gradient dá o mesmo resultado.
        

        <div style={S.svgWrap}>
          <NaturalGradientSVG />
        </div>

        <h3 style={S.h3}>Custo e Aproximações</h3>
        <p style={S.p}>
          Para modelo com n parâmetros, F é n×n e F⁻¹ tem custo O(n³). Para redes modernas
          (n = 10⁹), computacionalmente proibitivo. Aproximações:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Aproximação</th>
              <th style={S.th}>Custo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Natural Gradient Exacto</td>
              <td style={S.td}><InlineMath math="F^{-1}\nabla L" /></td>
              <td style={S.td}><InlineMath math="O(n^3)" /> — impraticável</td>
            </tr>
            <tr>
              <td style={S.td}>K-FAC</td>
              <td style={S.td}><InlineMath math="F \approx" /> kronecker factors por camada</td>
              <td style={S.td}><InlineMath math="O(n^{1.5})" /></td>
            </tr>
            <tr>
              <td style={S.td}>EKFAC</td>
              <td style={S.td}>K-FAC com rescaling eigen</td>
              <td style={S.td}>Melhor aproximação</td>
            </tr>
            <tr>
              <td style={S.td}>Adam (aprox.)</td>
              <td style={S.td}><InlineMath math="F \approx \operatorname{diag}(\mathbb{E}[g^2])" /></td>
              <td style={S.td}><InlineMath math="O(n)" /> — prático</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          Adam pode ser visto como uma aproximação diagonal do natural gradient — a divisão por √v̂
          estima F⁻¹ diagonal. Esta perspectiva explica o sucesso de Adam.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Cálculo Variacional — Introdução</h2>
        <p style={S.p}>
          Enquanto cálculo clássico optimiza sobre vectores ou escalares, cálculo variacional
          optimiza sobre espaços de funções — encontrar a função f que minimiza um funcional F[f].
        </p>

        <h3 style={S.h3}>Funcionais e Equação de Euler-Lagrange</h3>
        <div style={S.formula}><BlockMath math="\mathcal{F}[f] = \int \mathcal{L}(x, f(x), f'(x))\,dx" /></div>
        <p style={S.p}>
          A condição necessária de optimalidade é a equação de Euler-Lagrange:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial \mathcal{L}}{\partial f} - \frac{d}{dx}\!\left(\frac{\partial \mathcal{L}}{\partial f'}\right) = 0" /></div>
        <p style={S.p}>
          Derivação: considere f* + εη onde η é perturbação arbitrária com condições de fronteira.
          d/dε F[f*+εη] = 0 para todo η, por integração por partes dá a equação acima.
        </p>

        <div style={S.svgWrap}>
          <VariationalSVG />
        </div>

        <h3 style={S.h3}>Aplicações em ML</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Área</th>
              <th style={S.th}>Problema Variacional</th>
              <th style={S.th}>Conexão ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Física</td>
              <td style={S.td}><InlineMath math="S = \int \mathcal{L}\,dt" /> (princípio de mínima acção)</td>
              <td style={S.td}>Neural ODEs (base)</td>
            </tr>
            <tr>
              <td style={S.td}>Inferência Variacional</td>
              <td style={S.td}><InlineMath math="\min KL[q(z)\|p(z|x)]" /></td>
              <td style={S.td}>VAEs — ELBO</td>
            </tr>
            <tr>
              <td style={S.td}>Fluxos Normalizantes Contínuos</td>
              <td style={S.td}>ODE de densidade</td>
              <td style={S.td}>Continuous NF</td>
            </tr>
            <tr>
              <td style={S.td}>Controlo Óptimo</td>
              <td style={S.td}><InlineMath math="\min \int c(x,u)\,dt,\;\dot{x}=f(x,u)" /></td>
              <td style={S.td}>RL, políticas óptimas</td>
            </tr>
            <tr>
              <td style={S.td}>Processos Gaussianos</td>
              <td style={S.td}>max verosimilhança marginal</td>
              <td style={S.td}>Kernel ML</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Neural ODEs (2018) parametrizam a dinâmica de um sistema com uma rede neuronal e
          integram a ODE resultante. O treino usa o adjoint method — essencialmente cálculo
          variacional aplicado a redes neuronais de profundidade contínua.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 12 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          Mapeamento completo entre conceitos de cálculo e algoritmos de ML, com guia de debugging
          de problemas de gradiente.
        </p>

        <h3 style={S.h3}>Mapa Conceito Cálculo → Algoritmo ML</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito de Cálculo</th>
              <th style={S.th}>Algoritmo / Componente ML</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Derivada parcial', 'Gradiente da perda por parâmetro'],
              ['Regra da cadeia', 'Backpropagation'],
              ['Método de Lagrange', 'Regularização com restrições'],
              ['Expansão de Taylor', 'Gradient descent, Newton'],
              ['Hessiana', 'Optimização de segunda ordem'],
              ['Divergência KL', 'Treinamento de VAEs, RL'],
              ['Cálculo variacional', 'Inferência variacional, Neural ODEs'],
              ['Equação diferencial', 'RNNs, Neural ODEs, difusão'],
              ['Integral estocástica', 'Score matching, SGM'],
            ].map(([a, b], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Folha de Fórmulas Completa</h3>
        
        <h3 style={S.h3}>Debugging de Problemas de Gradiente</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Sintoma</th>
              <th style={S.th}>Causa Provável</th>
              <th style={S.th}>Solução</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Perda NaN', 'Gradiente explodindo ou log(0)', 'Gradient clipping, lr menor, eps nas losses'],
              ['Perda não decresce', 'lr muito pequeno / vanishing gradient', 'He init, BatchNorm, LSTM'],
              ['Perda decresce devagar', 'Mal condicionamento', 'Adam, learning rate scheduling'],
              ['Treino instável / oscilação', 'lr muito grande', 'Diminuir lr, adicionar momentum'],
              ['Gradient check falha', 'Bug na implementação do backward', 'Verificar regra da cadeia'],
              ['Activações saturadas', 'Inicialização má', 'Xavier / He conforme activação'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Gradient Checking</h3>
        <p style={S.p}>
          Verificação numérica do gradiente — compara gradiente analítico com diferença finita:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial \theta_i} \approx \frac{L(\theta + \varepsilon e_i) - L(\theta - \varepsilon e_i)}{2\varepsilon}" /></div>
        
        <div style={S.highlight}>
          <strong>Monitorização de Normas de Gradiente:</strong> rastrear ||∇L|| por camada
          durante o treino. Gradientes saudáveis mantêm magnitudes similares em camadas diferentes.
          Razão entre ||grad camada 1|| / ||grad camada final|| próxima de 1 indica bom fluxo.
          Ratio menor que 0.01 ou maior que 100 indica problema de vanishing/exploding gradient.
        </div>

        <div style={S.note}>
          <strong>Análise de curvas de perda:</strong> perda treino decresce mas validação sobe →
          overfitting (aumentar regularização). Ambas sobem → bug ou lr muito grande. Ambas estagnadas
          → lr muito pequeno, vanishing gradient ou arquitectura inadequada.
        </div>
      </div>

    </div>
  );
}
