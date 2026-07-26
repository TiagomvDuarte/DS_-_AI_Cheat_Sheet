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
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.2rem 0', overflowX: 'auto', display: 'flex', justifyContent: 'center' },
  formula: { fontFamily: 'monospace', background: 'rgba(74,158,237,0.10)', borderRadius: 6, padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '1rem', color: 'var(--text-primary)', display: 'block' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' },
  card: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.9rem 1.1rem' },
};

/* ─────────────────────────────── SVGs ─────────────────────────────── */

function SvgSecantToTangent() {
  // Parabola f(x)=x^2, tangent at x=1, plus one secant
  const W = 500, H = 220;
  // map math [-2,3.5] -> [0,W], [0,7] -> [H,0]
  const mx = (x) => ((x + 2) / 5.5) * W;
  const my = (y) => H - (y / 7) * H;

  // Only plot the portion of the parabola that stays within the declared y-range
  // [0,7] — beyond x≈±2.646 (where x²=7) the curve would map to negative pixels
  // and get clipped by the viewBox, even though the tangent/secant lines (which
  // don't depend on this loop) extend further right within bounds.
  const pts = [];
  for (let i = -2; i <= 2.6; i += 0.05) {
    pts.push(`${mx(i).toFixed(1)},${my(i * i).toFixed(1)}`);
  }
  const curve = pts.join(' ');

  // tangent at x=1: y = 2x-1
  const tx1 = -0.5, tx2 = 2.8;
  const ty1 = 2 * tx1 - 1, ty2 = 2 * tx2 - 1;

  // secant from x=1 to x=2: slope=(4-1)/(2-1)=3, y=3(x-1)+1=3x-2
  const sx1 = 0, sx2 = 2.5;
  const sy1 = 3 * sx1 - 2, sy2 = 3 * sx2 - 2;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* axes */}
      <line x1={mx(-2)} y1={my(0)} x2={mx(3.5)} y2={my(0)} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={mx(0)} y1={0} x2={mx(0)} y2={H} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* parabola */}
      <polyline points={curve} fill="none" stroke={color} strokeWidth="2.5" />
      {/* secant */}
      <line x1={mx(sx1)} y1={my(sy1)} x2={mx(sx2)} y2={my(sy2)} stroke="#7dd3fc" strokeWidth="1.8" strokeDasharray="6 3" />
      {/* tangent */}
      <line x1={mx(tx1)} y1={my(ty1)} x2={mx(tx2)} y2={my(ty2)} stroke="#4a9eed" strokeWidth="2" />
      {/* point x=1 */}
      <circle cx={mx(1)} cy={my(1)} r="4" fill={color} />
      {/* point x=2 */}
      <circle cx={mx(2)} cy={my(4)} r="4" fill="#7dd3fc" />
      {/* labels anchored end — sit just inside the line tips */}
      <text x={mx(tx2) + 6} y={my(ty2)} fill="#4a9eed" fontSize="12" dominantBaseline="middle">tangente</text>
      <text x={mx(sx2) + 6} y={my(sy2) - 10} fill="#7dd3fc" fontSize="12" dominantBaseline="middle">secante</text>
      <text x={mx(1) + 30} y={my(1) - 8} fill={color} fontSize="11">(x, f(x))</text>
      <text x={mx(2) -30} y={my(4) - 12} fill="#7dd3fc" fontSize="11" textAnchor="middle">(x+h, f(x+h))</text>
      <text x={mx(-1.8)} y={my(3.6)} fill={color} fontSize="13" fontWeight="bold">f(x)=x&#178;</text>
    </svg>
  );
}

function SvgChainDiagram() {
  const W = 420, H = 130;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* boxes */}
      <rect x="20" y="45" width="80" height="40" rx="6" fill="rgba(74,158,237,0.25)" stroke="#4a9eed" strokeWidth="1.5" />
      <rect x="170" y="45" width="80" height="40" rx="6" fill="rgba(186,230,253,0.20)" stroke="#bae6fd" strokeWidth="1.5" />
      <rect x="320" y="45" width="80" height="40" rx="6" fill="rgba(125,211,252,0.20)" stroke="#7dd3fc" strokeWidth="1.5" />
      {/* arrows */}
      <line x1="100" y1="65" x2="168" y2="65" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="165,60 175,65 165,70" fill="var(--text-secondary)" />
      <line x1="250" y1="65" x2="318" y2="65" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="315,60 325,65 315,70" fill="var(--text-secondary)" />
      {/* labels */}
      <text x="60" y="68" textAnchor="middle" dominantBaseline="middle" fill="#4a9eed" fontSize="14" fontWeight="bold">x</text>
      <text x="130" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">g</text>
      <text x="210" y="68" textAnchor="middle" dominantBaseline="middle" fill="#bae6fd" fontSize="13">g(x)</text>
      <text x="280" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">f</text>
      <text x="360" y="68" textAnchor="middle" dominantBaseline="middle" fill="#7dd3fc" fontSize="13">f(g(x))</text>
      {/* derivative annotation */}
      <text x="130" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">g'(x)</text>
      <text x="280" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">f'(g(x))</text>
      <text x="210" y="20" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="600">d/dx [f(g(x))] = f'(g(x)) · g'(x)</text>
    </svg>
  );
}

function SvgHigherDerivatives() {
  const W = 440, H = 200;
  const mx = (x) => ((x + 2.2) / 5.4) * W;
  const my = (y, min, max) => H - ((y - min) / (max - min)) * (H - 20) - 10;

  const xs = [];
  for (let x = -2.2; x <= 3.2; x += 0.06) xs.push(x);

  const f = (x) => 0.15 * x * x * x - 0.5 * x * x + 0.2 * x + 1;
  const fp = (x) => 0.45 * x * x - x + 0.2;
  const fpp = (x) => 0.9 * x - 1;

  const toPoints = (fn, min, max) =>
    xs.map((x) => `${mx(x).toFixed(1)},${my(fn(x), min, max).toFixed(1)}`).join(' ');

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <line x1={0} y1={my(0, -1.5, 2)} x2={W} y2={my(0, -1.5, 2)} stroke="var(--text-secondary)" strokeWidth="1" />
      <polyline points={toPoints(f, -1.5, 2)} fill="none" stroke={color} strokeWidth="2.5" />
      <polyline points={toPoints(fp, -1.5, 2)} fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="7 3" />
      <polyline points={toPoints(fpp, -1.5, 2)} fill="none" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="3 3" />
      <text x="8" y="18" fill={color} fontSize="12" fontWeight="bold">f(x)</text>
      <text x="8" y="36" fill="#4a9eed" fontSize="12">f'(x)</text>
      <text x="8" y="54" fill="#7dd3fc" fontSize="12">f''(x)</text>
    </svg>
  );
}

function SvgMVT() {
  const W = 400, H = 150;
  const a = 0.3, b = 3.8;
  const f = (x) => -0.2 * x * x + x + 0.8;
  const mx = (x) => ((x - 0) / 4.5) * W;
  const my = (y) => H - (y / 2.5) * (H - 20) - 10;

  const xs = [];
  for (let x = 0.2; x <= 4.3; x += 0.05) xs.push(x);
  const curve = xs.map((x) => `${mx(x).toFixed(1)},${my(f(x)).toFixed(1)}`).join(' ');

  const fa = f(a), fb = f(b);
  const avgSlope = (fb - fa) / (b - a);
  // tangent point: f'(x) = avgSlope => -0.4x+1 = avgSlope => x = (1-avgSlope)/0.4
  const c = (1 - avgSlope) / 0.4;
  const fc = f(c);
  // tangent line through (c, fc): y = avgSlope*(x-c)+fc
  const tLine = (x) => avgSlope * (x - c) + fc;
  // secant line
  const sLine = (x) => ((fb - fa) / (b - a)) * (x - a) + fa;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <polyline points={curve} fill="none" stroke={color} strokeWidth="2.5" />
      {/* secant */}
      <line x1={mx(a - 0.1)} y1={my(sLine(a - 0.1))} x2={mx(b + 0.1)} y2={my(sLine(b + 0.1))} stroke="#7dd3fc" strokeWidth="1.8" />
      {/* tangent at c */}
      <line x1={mx(c - 1.2)} y1={my(tLine(c - 1.2))} x2={mx(c + 1.2)} y2={my(tLine(c + 1.2))} stroke="#4a9eed" strokeWidth="1.8" strokeDasharray="6 3" />
      {/* points */}
      <circle cx={mx(a)} cy={my(fa)} r="5" fill="#7dd3fc" />
      <circle cx={mx(b)} cy={my(fb)} r="5" fill="#7dd3fc" />
      <circle cx={mx(c)} cy={my(fc)} r="5" fill="#4a9eed" />
      {/* labels */}
      <text x={mx(a) - 4} y={my(fa) - 10} textAnchor="middle" fill="#7dd3fc" fontSize="12">a</text>
      <text x={mx(b) + 4} y={my(fb) - 16} textAnchor="start" fill="#7dd3fc" fontSize="12">b</text>
      <text x={mx(c)} y={my(fc) - 12} textAnchor="middle" fill="#4a9eed" fontSize="12">c</text>
      <text x={mx((a + b) / 2)} y={my(sLine((a + b) / 2)) + 16} textAnchor="middle" fill="#7dd3fc" fontSize="11">secante</text>
      <text x={mx(c - 1.2)} y={my(tLine(c - 1.2)) - 8} textAnchor="start" fill="#4a9eed" fontSize="11">tangente em c</text>
    </svg>
  );
}

function SvgActivations() {
  const W = 440, H = 200;
  const xs = [];
  for (let x = -4; x <= 4; x += 0.08) xs.push(x);

  const sigmoid = (x) => 1 / (1 + Math.exp(-x));
  const sigDeriv = (x) => { const s = sigmoid(x); return s * (1 - s); };
  const relu = (x) => Math.max(0, x);
  const reluDeriv = (x) => (x > 0 ? 1 : 0);
  const tanhDeriv = (x) => 1 - Math.tanh(x) ** 2;

  const mx = (x) => ((x + 4) / 8) * W;
  const my = (y, ymin, ymax) => H - ((y - ymin) / (ymax - ymin)) * (H - 20) - 10;

  const toPoints = (fn, ymin, ymax) =>
    xs.map((x) => `${mx(x).toFixed(1)},${my(fn(x), ymin, ymax).toFixed(1)}`).join(' ');

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <line x1={0} y1={my(0, -0.1, 1.2)} x2={W} y2={my(0, -0.1, 1.2)} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={mx(0)} y1={0} x2={mx(0)} y2={H} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* sigmoid derivative */}
      <polyline points={toPoints(sigDeriv, -0.1, 1.2)} fill="none" stroke={color} strokeWidth="2" />
      {/* tanh derivative */}
      <polyline points={toPoints(tanhDeriv, -0.1, 1.2)} fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="7 3" />
      {/* relu derivative */}
      <polyline points={toPoints(reluDeriv, -0.1, 1.2)} fill="none" stroke="#7dd3fc" strokeWidth="2.5" />
      {/* legend */}
      <line x1="10" y1="18" x2="36" y2="18" stroke={color} strokeWidth="2" />
      <text x="40" y="22" fill={color} fontSize="12">σ'(x)</text>
      <line x1="100" y1="18" x2="126" y2="18" stroke="#4a9eed" strokeWidth="2" strokeDasharray="7 3" />
      <text x="130" y="22" fill="#4a9eed" fontSize="12">tanh'(x)</text>
      <line x1="220" y1="18" x2="246" y2="18" stroke="#7dd3fc" strokeWidth="2.5" />
      <text x="250" y="22" fill="#7dd3fc" fontSize="12">ReLU'(x)</text>
      {/* y=0.25 reference for sigmoid max */}
      <line x1={0} y1={my(0.25, -0.1, 1.2)} x2={W} y2={my(0.25, -0.1, 1.2)} stroke={color} strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
      <text x={W - 4} y={my(0.25, -0.1, 1.2) - 4} textAnchor="end" fill={color} fontSize="10" opacity="0.7">max σ'=0.25</text>
    </svg>
  );
}

function SvgNewtonRaphson() {
  const W = 520, H = 240;
  const padL = 40, padB = 40;
  const xMin = 1.6, xMax = 3.4, yMin = -10, yMax = 18;

  const f  = (x) => x * x * x - 2 * x - 5;
  const fp = (x) => 3 * x * x - 2;

  const mx = (x) => padL + ((x - xMin) / (xMax - xMin)) * (W - padL - 10);
  const my = (y) => H - padB - ((y - yMin) / (yMax - yMin)) * (H - padB - 10);

  const pts = [];
  for (let x = xMin; x <= xMax; x += 0.03) pts.push(`${mx(x).toFixed(1)},${my(f(x)).toFixed(1)}`);

  const x0 = 3.0;
  const x1 = x0 - f(x0) / fp(x0);
  const x2 = x1 - f(x1) / fp(x1);
  // root ≈ 2.0946
  const root = x2 - f(x2) / fp(x2);

  // tangent from xA hitting y=0 at xB, extend ±ext in x
  const tang = (xA, ext1, ext2) => {
    const s = fp(xA);
    const yA = f(xA);
    return {
      x1: mx(xA - ext1), y1: my(yA + s * (-ext1)),
      x2: mx(xA + ext2), y2: my(yA + s * ext2),
    };
  };

  // Extend each tangent far enough past its own x-intercept (the next iterate)
  // so the line visibly crosses the axis instead of floating above it.
  const margin = 0.15;
  const t1 = tang(x0, (x0 - x1) + margin, margin);
  const t2 = tang(x1, (x1 - x2) + margin, 0.3);

  const zero = my(0);

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* Axes */}
      <line x1={padL} y1={zero} x2={W - 5} y2={zero} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={10} x2={padL} y2={H - padB + 8} stroke="var(--text-secondary)" strokeWidth="1" />

      {/* Curve */}
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2.5" />
      <text x={mx(xMax) - 5} y={my(f(xMax)) - 8} fill={color} fontSize="13" fontWeight="bold" textAnchor="end">f(x)</text>

      {/* Root marker */}
      <circle cx={mx(root)} cy={zero} r="5" fill="#bae6fd" />
      <text x={mx(root)} y={zero + 32} textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="bold">raiz</text>

      {/* Step 1: x0 → x1 */}
      {/* vertical dashed from x0 up to curve */}
      <line x1={mx(x0)} y1={zero} x2={mx(x0)} y2={my(f(x0))} stroke="#7dd3fc" strokeWidth="1.2" strokeDasharray="4,3" />
      {/* tangent line at x0 */}
      <line x1={t1.x1} y1={t1.y1} x2={t1.x2} y2={t1.y2} stroke="#7dd3fc" strokeWidth="2" />
      {/* point on curve at x0 */}
      <circle cx={mx(x0)} cy={my(f(x0))} r="5" fill="#7dd3fc" />
      {/* x0 on axis */}
      <line x1={mx(x0)} y1={zero - 4} x2={mx(x0)} y2={zero + 4} stroke="#7dd3fc" strokeWidth="2" />
      <text x={mx(x0)} y={zero + 18} textAnchor="middle" fill="#7dd3fc" fontSize="12">x₀</text>

      {/* Step 2: x1 → x2 */}
      <line x1={mx(x1)} y1={zero} x2={mx(x1)} y2={my(f(x1))} stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="4,3" />
      <line x1={t2.x1} y1={t2.y1} x2={t2.x2} y2={t2.y2} stroke="#bae6fd" strokeWidth="2" />
      <circle cx={mx(x1)} cy={my(f(x1))} r="5" fill="#bae6fd" />
      <line x1={mx(x1)} y1={zero - 4} x2={mx(x1)} y2={zero + 4} stroke="#bae6fd" strokeWidth="2" />
      <text x={mx(x1)} y={zero + 18} textAnchor="middle" fill="#bae6fd" fontSize="12">x₁</text>

      {/* x2 on axis */}
      <line x1={mx(x2)} y1={zero - 4} x2={mx(x2)} y2={zero + 4} stroke="#4a9eed" strokeWidth="2" />
      <text x={mx(x2)} y={zero + 18} textAnchor="middle" fill="#4a9eed" fontSize="12">x₂</text>

      {/* Arrows on axis showing direction */}
      <polygon points={`${mx(x0) - 6},${zero - 5} ${mx(x1) + 2},${zero} ${mx(x0) - 6},${zero + 5}`} fill="#7dd3fc" opacity="0.6" />
      <polygon points={`${mx(x1) - 6},${zero - 5} ${mx(x2) + 2},${zero} ${mx(x1) - 6},${zero + 5}`} fill="#bae6fd" opacity="0.6" />

      {/* Caption */}
      <text x={W / 2} y={H - 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="11">
        Cada tangente em xₙ corta o eixo em xₙ₊₁ — convergência quadrática para a raiz
      </text>
    </svg>
  );
}

function SvgNumericalError() {
  const W = 500, H = 220;
  const padL = 55, padB = 40, padT = 20, padR = 20;
  const plotW = W - padL - padR;
  const plotH = H - padB - padT;

  // x-axis: log10(h) from -16 to 0
  // y-axis: log10(error) from -18 to 2
  const xMin = -16, xMax = 0;
  const yMin = -18, yMax = 2;

  const px = (lh) => padL + ((lh - xMin) / (xMax - xMin)) * plotW;
  const py = (le) => padT + plotH - ((le - yMin) / (yMax - yMin)) * plotH;

  const hs = [];
  for (let lh = xMin; lh <= xMax; lh += 0.2) hs.push(lh);

  const eps = 1e-16;
  const fwdErr = (lh) => { const h = 10 ** lh; return Math.log10(Math.abs(h + eps / h)); };
  const cenErr = (lh) => { const h = 10 ** lh; return Math.log10(Math.abs(h * h + eps / h)); };

  const fwdPts = hs.map(lh => `${px(lh).toFixed(1)},${Math.max(padT, Math.min(padT + plotH, py(fwdErr(lh)))).toFixed(1)}`).join(' ');
  const cenPts = hs.map(lh => `${px(lh).toFixed(1)},${Math.max(padT, Math.min(padT + plotH, py(cenErr(lh)))).toFixed(1)}`).join(' ');

  // optimal h: forward ≈ eps^(1/2) → lh≈-8; central ≈ eps^(1/3) → lh≈-5.3
  const lhOptFwd = -8, lhOptCen = -16 / 3;

  const xTicks = [-16, -12, -8, -4, 0];
  const yTicks = [-16, -12, -8, -4, 0];

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* Grid */}
      {yTicks.map(y => (
        <line key={y} x1={padL} y1={py(y)} x2={W - padR} y2={py(y)}
          stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.3" />
      ))}
      {/* Axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={padT + plotH} x2={W - padR} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* X ticks & labels */}
      {xTicks.map(x => (
        <g key={x}>
          <line x1={px(x)} y1={padT + plotH} x2={px(x)} y2={padT + plotH + 4} stroke="var(--text-secondary)" strokeWidth="1" />
          <text x={px(x)} y={padT + plotH + 15} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{x}</text>
        </g>
      ))}
      {/* Y ticks & labels */}
      {yTicks.map(y => (
        <g key={y}>
          <line x1={padL - 4} y1={py(y)} x2={padL} y2={py(y)} stroke="var(--text-secondary)" strokeWidth="1" />
          <text x={padL - 7} y={py(y) + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{y}</text>
        </g>
      ))}
      {/* Axis labels */}
      <text x={W / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">log₁₀(h)</text>
      <text x={12} y={padT + plotH / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)"
        transform={`rotate(-90, 12, ${padT + plotH / 2})`}>log₁₀(erro)</text>
      {/* Curves */}
      <polyline points={fwdPts} fill="none" stroke="#7dd3fc" strokeWidth="2.5" />
      <polyline points={cenPts} fill="none" stroke="#bae6fd" strokeWidth="2.5" strokeDasharray="8,4" />
      {/* Optimal point markers */}
      <line x1={px(lhOptFwd)} y1={padT} x2={px(lhOptFwd)} y2={padT + plotH}
        stroke="#7dd3fc" strokeWidth="1" strokeDasharray="3,3" strokeOpacity="0.6" />
      <text x={px(lhOptFwd) + 4} y={padT + 14} fontSize="9" fill="#7dd3fc">h*≈10⁻⁸</text>
      <line x1={px(lhOptCen)} y1={padT} x2={px(lhOptCen)} y2={padT + plotH}
        stroke="#bae6fd" strokeWidth="1" strokeDasharray="3,3" strokeOpacity="0.6" />
      <text x={px(lhOptCen) + 4} y={padT + 26} fontSize="9" fill="#bae6fd">h*≈10⁻⁵</text>
      {/* Legend */}
      <line x1={padL + 10} y1={padT + 82} x2={padL + 32} y2={padT + 82} stroke="#7dd3fc" strokeWidth="2.5" />
      <text x={padL + 36} y={padT + 85} fontSize="11" fill="#7dd3fc">diferença avante  O(h)</text>
      <line x1={padL + 10} y1={padT + 97} x2={padL + 32} y2={padT + 97} stroke="#bae6fd" strokeWidth="2.5" strokeDasharray="8,4" />
      <text x={padL + 36} y={padT + 102} fontSize="11" fill="#bae6fd">diferença central  O(h²)</text>
    </svg>
  );
}

/* ─────────────────────────────── Main ─────────────────────────────── */

export default function CALC2() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Cálculo</Link>

      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Derivadas &amp; Diferenciação</h1>

      {/* ── 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Definição de Derivada</h2>
        <p style={S.p}>
          A derivada de <InlineMath math="f" /> em <InlineMath math="x" /> é o limite da razão incremental quando o incremento h tende para zero:
        </p>
        <BlockMath math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
        <p style={S.p}>
          <strong>Interpretação geométrica:</strong> <InlineMath math="f'(x)" /> é o declive da recta tangente ao gráfico de <InlineMath math="f" /> no ponto{' '}
          <InlineMath math="(x, f(x))" />. A recta secante tem declive <InlineMath math="\frac{f(x+h)-f(x)}{h}" />; quando <InlineMath math="h \to 0" /> a secante converge para a tangente.
          O esquema abaixo ilustra essa convergência para <InlineMath math="f(x) = x^2" />.
        </p>
        <div style={S.svgWrap}>
          <SvgSecantToTangent />
        </div>
        <p style={S.p}>
          <strong>Interpretação física:</strong> Se <InlineMath math="s(t)" /> é a posição ao longo do tempo, então <InlineMath math="s'(t)" /> é a velocidade
          instantânea. A derivada generaliza a ideia de velocidade média para qualquer função.
        </p>
        <p style={S.p}>
          <strong>Diferenciabilidade implica continuidade</strong> (mas não o inverso). Uma função pode ser contínua em
          x sem ser diferenciável — por exemplo, <InlineMath math="f(x) = |x|" /> é contínua em 0 mas a sua derivada é descontínua aí. ReLU
          tem exatamente esta propriedade, o que motiva o uso de subgradientes em deep learning.
        </p>
        <div style={S.grid2}>
          <div style={S.card}>
            <strong style={{ color }}>Notação de Lagrange</strong>
            <div style={{ marginTop: 6, fontSize: '0.95rem' }}><InlineMath math="f'(x),\ f''(x),\ f^{(n)}(x)" /></div>
          </div>
          <div style={S.card}>
            <strong style={{ color }}>Notação de Leibniz</strong>
            <div style={{ marginTop: 6, fontSize: '0.95rem' }}><InlineMath math="\frac{dy}{dx},\ \frac{d^2y}{dx^2}" /></div>
          </div>
          <div style={S.card}>
            <strong style={{ color }}>Notação de Operador</strong>
            <div style={{ marginTop: 6, fontSize: '0.95rem' }}><InlineMath math="Df(x),\ D^2f(x)" /></div>
          </div>
          <div style={S.card}>
            <strong style={{ color }}>Notação Parcial (ML)</strong>
            <div style={{ marginTop: 6, fontSize: '0.95rem' }}><InlineMath math="\frac{\partial L}{\partial w},\ \frac{\partial f}{\partial x}" /></div>
          </div>
        </div>
                <div style={S.note}>
          A definição formal exige que o limite exista e seja igual tanto pela esquerda como pela direita.
          Em pontos de canto (como ReLU em 0) os limites laterais existem mas diferem, pelo que a função
          não é diferenciável aí.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Regras Básicas de Derivação</h2>
        <p style={S.p}>
          Em vez de aplicar a definição a cada função, usamos regras que permitem derivar expressões complexas
          sistematicamente. As quatro regras fundamentais são: constante, potência, soma/diferença e múltiplo constante.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função <InlineMath math="f(x)" /></th>
              <th style={S.th}>Derivada <InlineMath math="f'(x)" /></th>
              <th style={S.th}>Regra / Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><InlineMath math="c" /> (constante)</td><td style={S.td}>0</td><td style={S.td}>Constante</td></tr>
            <tr><td style={S.td}><InlineMath math="x^n" /></td><td style={S.td}><InlineMath math="n \cdot x^{n-1}" /></td><td style={S.td}>Potência (n real)</td></tr>
            <tr><td style={S.td}><InlineMath math="c \cdot f(x)" /></td><td style={S.td}><InlineMath math="c \cdot f'(x)" /></td><td style={S.td}>Múltiplo constante</td></tr>
            <tr><td style={S.td}><InlineMath math="f(x) + g(x)" /></td><td style={S.td}><InlineMath math="f'(x) + g'(x)" /></td><td style={S.td}>Soma</td></tr>
            <tr><td style={S.td}><InlineMath math="f(x) - g(x)" /></td><td style={S.td}><InlineMath math="f'(x) - g'(x)" /></td><td style={S.td}>Diferença</td></tr>
            <tr><td style={S.td}><InlineMath math="e^x" /></td><td style={S.td}><InlineMath math="e^x" /></td><td style={S.td}>Exponencial natural</td></tr>
            <tr><td style={S.td}><InlineMath math="a^x" /></td><td style={S.td}><InlineMath math="a^x \cdot \ln(a)" /></td><td style={S.td}>Exponencial geral</td></tr>
            <tr><td style={S.td}><InlineMath math="\ln(x)" /></td><td style={S.td}><InlineMath math="1/x" /></td><td style={S.td}><InlineMath math="x > 0" /></td></tr>
            <tr><td style={S.td}><InlineMath math="\log_a(x)" /></td><td style={S.td}><InlineMath math="\frac{1}{x \ln a}" /></td><td style={S.td}>Mudança de base</td></tr>
            <tr><td style={S.td}><InlineMath math="\sin(x)" /></td><td style={S.td}><InlineMath math="\cos(x)" /></td><td style={S.td}>Trigonométrica</td></tr>
            <tr><td style={S.td}><InlineMath math="\cos(x)" /></td><td style={S.td}><InlineMath math="-\sin(x)" /></td><td style={S.td}>Trigonométrica</td></tr>
            <tr><td style={S.td}><InlineMath math="\tan(x)" /></td><td style={S.td}><InlineMath math="\sec^2(x) = \frac{1}{\cos^2(x)}" /></td><td style={S.td}>Trigonométrica</td></tr>
            <tr><td style={S.td}><InlineMath math="\arcsin(x)" /></td><td style={S.td}><InlineMath math="\frac{1}{\sqrt{1-x^2}}" /></td><td style={S.td}><InlineMath math="|x| < 1" /></td></tr>
            <tr><td style={S.td}><InlineMath math="\arccos(x)" /></td><td style={S.td}><InlineMath math="\frac{-1}{\sqrt{1-x^2}}" /></td><td style={S.td}><InlineMath math="|x| < 1" /></td></tr>
            <tr><td style={S.td}><InlineMath math="\arctan(x)" /></td><td style={S.td}><InlineMath math="\frac{1}{1+x^2}" /></td><td style={S.td}>Para todo x</td></tr>
          </tbody>
        </table>
                <div style={S.note}>
          A regra da potência funciona para qualquer expoente real: inteiros, fraccionários, negativos. Isto inclui
          raízes (n = 1/2) e funções racionais (n = &#8722;1).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Regra do Produto e do Quociente</h2>
        <p style={S.p}>
          Quando uma função é o produto ou quociente de duas funções, usamos regras específicas.
        </p>
        
          <strong>Regra do Produto:</strong> <BlockMath math="(u \cdot v)' = u' \cdot v + u \cdot v'" />
        
        
          <strong>Regra do Quociente:</strong> <BlockMath math="\left(\frac{u}{v}\right)' = \frac{u' \cdot v - u \cdot v'}{v^2}" />
        
        <p style={S.p}>
          <strong>Mnemónica para o quociente:</strong> "hi d-lo minus lo d-hi over lo-lo" — where "hi" = numerador,
          "lo" = denominador, "d" = derivada.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Decomposição u, v</th>
              <th style={S.th}>Derivada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="x^2 \cdot e^x" /></td>
              <td style={S.td}><InlineMath math="u = x^2,\; v = e^x" /></td>
              <td style={S.td}><InlineMath math="2x e^x + x^2 e^x = e^x(x^2+2x)" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sin(x) \cdot \cos(x)" /></td>
              <td style={S.td}><InlineMath math="u = \sin,\; v = \cos" /></td>
              <td style={S.td}><InlineMath math="\cos^2(x) - \sin^2(x) = \cos(2x)" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\dfrac{x}{x^2+1}" /></td>
              <td style={S.td}><InlineMath math="u = x,\; v = x^2+1" /></td>
              <td style={S.td}><InlineMath math="\frac{(1-x^2)}{(x^2+1)^2}" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\dfrac{e^x}{\sin(x)}" /></td>
              <td style={S.td}><InlineMath math="u = e^x,\; v = \sin(x)" /></td>
              <td style={S.td}><InlineMath math="\frac{e^x(\sin(x) - \cos(x))}{\sin^2(x)}" /></td>
            </tr>
          </tbody>
        </table>
                <div style={S.note}>
          <strong>Erro comum:</strong> <InlineMath math="(u \cdot v)' \neq u' \cdot v'" />. A derivada de um produto NÃO é o produto das
          derivadas. Verificar sempre com a fórmula completa.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Regra da Cadeia</h2>
        <p style={S.p}>
          A regra da cadeia permite derivar funções compostas <InlineMath math="f(g(x))" />. É a base matemática da backpropagation em
          redes neuronais.
        </p>
        <BlockMath math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
        <div style={S.svgWrap}>
          <SvgChainDiagram />
        </div>
        <p style={S.p}>
          A intuição é: multiplicamos as taxas de variação. Se g muda à taxa <InlineMath math="g'(x)" /> e f muda à taxa <InlineMath math="f'(g(x))" /> em
          relação a g, então a taxa composta é o produto.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Composta</th>
              <th style={S.th}>f(u)</th>
              <th style={S.th}>g(x)</th>
              <th style={S.th}>Derivada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\sin(x^2)" /></td>
              <td style={S.td}><InlineMath math="\sin(u)" /></td>
              <td style={S.td}><InlineMath math="x^2" /></td>
              <td style={S.td}><InlineMath math="\cos(x^2) \cdot 2x" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="e^{-x^2}" /></td>
              <td style={S.td}><InlineMath math="e^u" /></td>
              <td style={S.td}><InlineMath math="-x^2" /></td>
              <td style={S.td}><InlineMath math="e^{-x^2} \cdot (-2x)" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\ln(3x+1)" /></td>
              <td style={S.td}><InlineMath math="\ln(u)" /></td>
              <td style={S.td}><InlineMath math="3x+1" /></td>
              <td style={S.td}><InlineMath math="\frac{3}{3x+1}" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sigma(wx+b)" /></td>
              <td style={S.td}><InlineMath math="\sigma(u)" /></td>
              <td style={S.td}><InlineMath math="wx+b" /></td>
              <td style={S.td}><InlineMath math="\sigma'(wx+b) \cdot w" /></td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          <strong>Padrão geral em ML:</strong> Para um neurónio com peso w, entrada x e função de activação &#963;:
        </p>
        <BlockMath math="\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot \frac{\partial z}{\partial w} = \delta \cdot \sigma'(z) \cdot x" />
                <div style={S.note}>
          Em redes com N camadas, a backpropagation aplica a regra da cadeia N vezes consecutivamente.
          O gradiente de cada camada depende dos gradientes de todas as camadas seguintes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Derivação Implícita</h2>
        <p style={S.p}>
          Nem sempre y está definido explicitamente como função de x. Quando <InlineMath math="F(x, y) = 0" /> define y implicitamente,
          diferenciamos ambos os lados em relação a x, tratando y como função de x e aplicando a regra da cadeia.
        </p>
        <BlockMath math="\text{Se } F(x,y) = 0,\text{ então } \frac{dy}{dx} = -\frac{\partial F/\partial x}{\partial F/\partial y}" />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Curva <InlineMath math="F(x,y) = 0" /></th>
              <th style={S.th}><InlineMath math="dy/dx" /></th>
              <th style={S.th}>Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Círculo: <InlineMath math="x^2 + y^2 = r^2" /></td>
              <td style={S.td}><InlineMath math="-x/y" /></td>
              <td style={S.td}>Normal à tangente passa pelo centro</td>
            </tr>
            <tr>
              <td style={S.td}>Hipérbole: <InlineMath math="x^2 - y^2 = 1" /></td>
              <td style={S.td}><InlineMath math="x/y" /></td>
              <td style={S.td}>Assíntota <InlineMath math="y = \pm x" /></td>
            </tr>
            <tr>
              <td style={S.td}>Fólio de Descartes: <InlineMath math="x^3 + y^3 = 3xy" /></td>
              <td style={S.td}><InlineMath math="\frac{y - x^2}{y^2 - x}" /></td>
              <td style={S.td}>Curva clássica com self-intersection</td>
            </tr>
            <tr>
              <td style={S.td}>Elipse: <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" /></td>
              <td style={S.td}><InlineMath math="-\frac{b^2 x}{a^2 y}" /></td>
              <td style={S.td}>Declive varia ao longo da curva</td>
            </tr>
          </tbody>
        </table>
                <div style={S.note}>
          Em deep learning, camadas de normalização (Batch Norm, Layer Norm) criam dependências implícitas
          entre as activações. Os gradientes devem contabilizar estas dependências durante o backward pass.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Derivadas de Ordem Superior</h2>
        <p style={S.p}>
          A segunda derivada <InlineMath math="f''(x)" /> mede a taxa de variação de <InlineMath math="f'(x)" /> — isto é, a curvatura da função.
          As derivadas de ordem superior capturam informação sobre a forma da função que as de primeira ordem não revelam.
        </p>
        <div style={S.svgWrap}>
          <SvgHigherDerivatives />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Derivada</th>
              <th style={S.th}>Física (posição)</th>
              <th style={S.th}>Geometria</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><InlineMath math="f(t)" /></td><td style={S.td}>Posição</td><td style={S.td}>Curva</td></tr>
            <tr><td style={S.td}><InlineMath math="f'(t)" /></td><td style={S.td}>Velocidade</td><td style={S.td}>Declive da tangente</td></tr>
            <tr><td style={S.td}><InlineMath math="f''(t)" /></td><td style={S.td}>Aceleração</td><td style={S.td}>Curvatura (côncavo/convexo)</td></tr>
            <tr><td style={S.td}><InlineMath math="f'''(t)" /></td><td style={S.td}>Jerk (variação de aceleração)</td><td style={S.td}>Taxa de variação da curvatura</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          <strong>Concavidade:</strong> Se <InlineMath math="f''(x) > 0" />, a função é convexa em x (curvatura para cima, forma de tigela).
          Se <InlineMath math="f''(x) < 0" />, é côncava (curvatura para baixo). <strong>Pontos de inflexão</strong> ocorrem onde f'' muda de sinal.
        </p>
        <div style={S.highlight}>
          <strong>Pré-visualização de séries de Taylor:</strong> Uma função suave pode ser aproximada por um polinómio
          usando todas as derivadas em <InlineMath math="x_0" />:
          <BlockMath math="f(x) \approx f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)(x-x_0)^2}{2!} + \frac{f'''(x_0)(x-x_0)^3}{3!} + \cdots" />
        </div>
                <div style={S.note}>
          A Hessiana é a matriz das derivadas parciais de segunda ordem <InlineMath math="\partial^2 f/\partial x_i \partial x_j" />.
          É usada em optimização de segunda ordem (Newton's Method) e mede a curvatura em espaços de alta dimensão.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Teorema do Valor Médio</h2>
        <p style={S.p}>
          O Teorema do Valor Médio (TVM) é um dos resultados mais importantes do Cálculo. Diz que existe sempre um
          ponto interior onde a derivada iguala a variação média.
        </p>
        <div style={S.highlight}>
          <strong>TVM:</strong> Se f é contínua em [a,b] e diferenciável em (a,b), existe <InlineMath math="c \in (a,b)" /> tal que:
          <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />
        </div>
        <div style={S.svgWrap}>
          <SvgMVT />
        </div>
        <p style={S.p}>
          <strong>Geometricamente:</strong> existe um ponto <InlineMath math="c" /> onde a tangente à curva é paralela à recta secante
          que une <InlineMath math="(a, f(a))" /> a <InlineMath math="(b, f(b))" />.
        </p>
        <p style={S.p}>
          <strong>Teorema de Rolle</strong> é o caso especial onde <InlineMath math="f(a) = f(b)" />: se uma função tem o mesmo valor
          nos extremos, existe pelo menos um ponto interior onde <InlineMath math="f'(c) = 0" /> (um máximo ou mínimo).
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aplicação</th>
              <th style={S.th}>Como o TVM ajuda</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Limitar erros</td><td style={S.td}><InlineMath math="|f(b)-f(a)| \le \max|f'| \cdot (b-a)" />: bound na variação da função</td></tr>
            <tr><td style={S.td}>Provar igualdades</td><td style={S.td}>Se <InlineMath math="f'(x)=0" /> para todo x, então f é constante</td></tr>
            <tr><td style={S.td}>Análise de convergência</td><td style={S.td}>Bound no erro de métodos numéricos: <InlineMath math="|\text{erro}| \le Mh^2" /> (diferenças centrais)</td></tr>
            <tr><td style={S.td}>Desigualdades</td><td style={S.td}>Provar <InlineMath math="\ln(x) \le x-1" /> para x&gt;0 usando <InlineMath math="f'(x)=1/x-1" /></td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          O TVM é a fundação teórica por detrás da análise de convergência do gradient descent:
          a diferença de perda entre iterações é controlada pela norma do gradiente multiplicada pelo passo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Derivadas das Funções de Activação em ML</h2>
        <p style={S.p}>
          As funções de activação introduzem não-linearidade nas redes neuronais. As suas derivadas determinam
          o fluxo do gradiente durante o treino — e portanto o sucesso ou falhanço da aprendizagem.
        </p>
        <div style={S.svgWrap}>
          <SvgActivations />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Activação</th>
              <th style={S.th}><InlineMath math="f(x)" /></th>
              <th style={S.th}><InlineMath math="f'(x)" /></th>
              <th style={S.th}>Gama f'</th>
              <th style={S.th}>Problema</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Sigmoid &#963;</td>
              <td style={S.td}><InlineMath math="1/(1+e^{-x})" /></td>
              <td style={S.td}><InlineMath math="\sigma(x)(1-\sigma(x))" /></td>
              <td style={S.td}>(0, 0.25]</td>
              <td style={S.td}>Saturação, vanishing gradient</td>
            </tr>
            <tr>
              <td style={S.td}>Tanh</td>
              <td style={S.td}><InlineMath math="\frac{e^x-e^{-x}}{e^x+e^{-x}}" /></td>
              <td style={S.td}><InlineMath math="1-\tanh^2(x)" /></td>
              <td style={S.td}>(0, 1]</td>
              <td style={S.td}>Saturação nos extremos</td>
            </tr>
            <tr>
              <td style={S.td}>ReLU</td>
              <td style={S.td}><InlineMath math="\max(0, x)" /></td>
              <td style={S.td}><InlineMath math="0 \text{ se } x<0;\ 1 \text{ se } x>0" /></td>
              <td style={S.td}>0 ou 1</td>
              <td style={S.td}>Neurónios mortos (dead neurons)</td>
            </tr>
            <tr>
              <td style={S.td}>Leaky ReLU</td>
              <td style={S.td}><InlineMath math="\max(\alpha x, x)" /></td>
              <td style={S.td}><InlineMath math="\alpha \text{ se } x<0;\ 1 \text{ se } x>0" /></td>
              <td style={S.td}>&#945; ou 1</td>
              <td style={S.td}>&#945; é hiperparâmetro (tipic. 0.01)</td>
            </tr>
            <tr>
              <td style={S.td}>ELU</td>
              <td style={S.td}><InlineMath math="\alpha(e^x-1) \text{ se } x<0;\ x \text{ se } x \ge 0" /></td>
              <td style={S.td}><InlineMath math="\alpha e^x \text{ se } x<0;\ 1 \text{ se } x>0" /></td>
              <td style={S.td}>(0, &#8734;)</td>
              <td style={S.td}>Mais suave que Leaky ReLU</td>
            </tr>
            <tr>
              <td style={S.td}>GELU</td>
              <td style={S.td}><InlineMath math="x \cdot \Phi(x)" /></td>
              <td style={S.td}><InlineMath math="\Phi(x) + x\phi(x)" /></td>
              <td style={S.td}>Suave</td>
              <td style={S.td}>Usado em Transformers (BERT, GPT)</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          <strong>Softmax:</strong> Para a saída de classificação, a derivada de softmax não é um vector mas uma
          matriz Jacobiana. Para softmax <InlineMath math="s_i = e^{z_i} / \sum_j e^{z_j}" />:
        </p>
        <div style={S.highlight}>
          <InlineMath math="\partial s_i/\partial z_j = s_i(\delta_{ij} - s_j)" /> onde <InlineMath math="\delta_{ij}" /> é o delta de Kronecker
        </div>
                <div style={S.note}>
          <strong>Vanishing gradient:</strong> A derivada máxima do sigmoid é 0.25. Em redes profundas com L camadas,
          o gradiente que chega à primeira camada é proporcional a <InlineMath math="(0.25)^L \to 0" /> muito rapidamente.
          ReLU resolve isto mantendo gradiente 1 para activações positivas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 9 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Derivação Logarítmica</h2>
        <p style={S.p}>
          A derivação logarítmica consiste em tomar o logaritmo natural de ambos os lados antes de diferenciar.
          É especialmente útil quando a função é um produto de muitos termos, ou quando o expoente é variável.
        </p>
        <div style={S.highlight}>
          Se <InlineMath math="y = f(x)" />, então <InlineMath math="\ln(y) = \ln(f(x))" />. Diferenciando: <InlineMath math="y'/y = [\ln f(x)]'" />. Logo <InlineMath math="y' = y \cdot [\ln f(x)]'" />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Derivada por log-diferenciação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="x^x" /></td>
              <td style={S.td}><InlineMath math="x^x(1 + \ln x)" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="x^n" /> (n variável)</td>
              <td style={S.td}><InlineMath math="x^n \cdot \left(\frac{n}{x} + \ln(x) \cdot n'\right)" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="f(x)^{g(x)}" /></td>
              <td style={S.td}><InlineMath math="f(x)^{g(x)} \cdot \left[g'(x) \ln f(x) + \frac{g(x) f'(x)}{f(x)}\right]" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\dfrac{x^{1+x} \cdot \sin^2(x)}{\sqrt{x^2+1}}" /></td>
              <td style={S.td}>Produto e quociente complexos &#8594; log simplifica</td>
            </tr>
          </tbody>
        </table>
                <div style={S.note}>
          O truque logarítmico transforma produtos em somas — muito mais fáceis de diferenciar. Em ML, o log
          da verossimilhança (log-likelihood) é maximizado exactamente por esta razão: transforma produtos de
          probabilidades em somas de log-probabilidades.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 10 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Método de Newton-Raphson</h2>
        <p style={S.p}>
          O método de Newton-Raphson é um algoritmo iterativo para encontrar raízes de <InlineMath math="f(x) = 0" /> (ou mínimos de
          uma função ao aplicá-lo a <InlineMath math="f'(x) = 0" />). Usa a tangente local para estimar o próximo passo.
        </p>
        <BlockMath math="x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}" />
        <div style={S.svgWrap}>
          <SvgNewtonRaphson />
        </div>
        <p style={S.p}>
          <strong>Convergência quadrática:</strong> Perto da raiz, o erro na iteração (n+1) é proporcional ao
          quadrado do erro na iteração n. Isto é muito mais rápido que métodos lineares (bisecção, gradient descent).
          Em termos práticos: o número de dígitos correctos duplica a cada iteração.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Usa</th>
              <th style={S.th}>Convergência</th>
              <th style={S.th}>Custo por iter.</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Bisecção</td><td style={S.td}><InlineMath math="f(x)" /></td><td style={S.td}><InlineMath math="\text{Linear } O(1/2^n)" /></td><td style={S.td}>1 avaliação</td></tr>
            <tr><td style={S.td}>Gradient descent</td><td style={S.td}><InlineMath math="f'(x)" /></td><td style={S.td}>Linear (depende de lr)</td><td style={S.td}>1 gradiente</td></tr>
            <tr><td style={S.td}>Newton-Raphson</td><td style={S.td}><InlineMath math="f'(x), f''(x)" /></td><td style={S.td}>Quadrática</td><td style={S.td}>1 gradiente + Hessiana</td></tr>
            <tr><td style={S.td}>BFGS (quasi-Newton)</td><td style={S.td}><InlineMath math="f'(x) + \text{approx } f''" /></td><td style={S.td}>Super-linear</td><td style={S.td}>Gradiente + rank-2 update</td></tr>
          </tbody>
        </table>
                <div style={S.note}>
          Em ML, o passo de Newton na direcção <InlineMath math="-H^{-1}\nabla L" /> (H = Hessiana) é o óptimo local de segunda ordem.
          Para redes neuronais com milhões de parâmetros, calcular <InlineMath math="H^{-1}" /> (n&#178; entradas) é proibitivo,
          daí o uso de optimizadores de primeira ordem (Adam, SGD) na prática.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 11 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Diferenciação Numérica</h2>
        <p style={S.p}>
          Quando a derivada analítica é difícil ou impossível de obter, podemos aproximá-la numericamente.
          O trade-off é entre precisão e custo computacional.
        </p>
        <div style={S.grid2}>
          <div style={S.card}>
            <strong style={{ color }}>Diferença Avante (Forward)</strong>
            <div style={{ marginTop: 8, fontSize: '0.92rem' }}>
              <InlineMath math="f'(x) \approx \frac{f(x+h) - f(x)}{h}" />
            </div>
            <div style={{ marginTop: 6, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Erro O(h) — 1 avaliação extra</div>
          </div>
          <div style={S.card}>
            <strong style={{ color }}>Diferença Central</strong>
            <div style={{ marginTop: 8, fontSize: '0.92rem' }}>
              <InlineMath math="f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}" />
            </div>
            <div style={{ marginTop: 6, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Erro O(h&#178;) — 2 avaliações extra</div>
          </div>
        </div>
        <div style={S.svgWrap}>
          <SvgNumericalError />
        </div>
        <p style={S.p}>
          O esquema mostra o erro vs h em escala log-log. Para valores de h muito grandes, o erro de truncagem domina
          (O(h) ou O(h&#178;)). Para valores muito pequenos, o erro de arredondamento em vírgula flutuante domina.
          O óptimo está algures no meio (tipicamente h &#8776; 1e-5 para diferença avante, h &#8776; 1e-4 para central).
        </p>
        <p style={S.p}>
          <strong>Método do passo complexo:</strong> Avaliar <InlineMath math="f(x + ih)" /> no complexo elimina o erro de cancelamento.
          Erro O(h&#178;) com precisão de máquina sem necessidade de subtracção de valores próximos.
        </p>
                <div style={S.note}>
          O gradient check é uma técnica essencial ao implementar backpropagation. Compara o gradiente analítico
          (calculado pelo código de backward) com uma estimativa numérica. Um erro relativo abaixo de 1e-5 indica
          que a implementação está correcta.
        </div>
      </div>
    </div>
  );
}
