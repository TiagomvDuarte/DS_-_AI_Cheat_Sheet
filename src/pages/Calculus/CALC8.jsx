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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(245,158,11,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// SVG 1: sin(x) with polynomial approximations of order 1,3,5,7
function SinApproxSVG() {
  const W = 520, H = 240;
  const ox = 260, oy = 120;
  const sx = 45, sy = 80;

  function makePath(fn, xMin, xMax, steps) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const x = xMin + (xMax - xMin) * i / steps;
      const y = fn(x);
      if (!isFinite(y) || Math.abs(y) > 4) continue;
      pts.push([ox + x * sx, oy - y * sy]);
    }
    return pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  }

  const sinFn = x => Math.sin(x);
  const t1 = x => x;
  const t3 = x => x - x ** 3 / 6;
  const t5 = x => x - x ** 3 / 6 + x ** 5 / 120;
  const t7 = x => x - x ** 3 / 6 + x ** 5 / 120 - x ** 7 / 5040;

  const dSin = makePath(sinFn, -5, 5, 300);
  const d1 = makePath(t1, -3, 3, 200);
  const d3 = makePath(t3, -4, 4, 200);
  const d5 = makePath(t5, -5, 5, 200);
  const d7 = makePath(t7, -5, 5, 200);

  const xTicks = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const yTicks = [-1, 0, 1];

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      {/* Grid */}
      {xTicks.map(v => (
        <line key={v} x1={ox + v * sx} y1={20} x2={ox + v * sx} y2={H - 20} stroke="var(--text-secondary)" strokeWidth="0.5" />
      ))}
      {yTicks.map(v => (
        <line key={v} x1={20} y1={oy - v * sy} x2={W - 20} y2={oy - v * sy} stroke="var(--text-secondary)" strokeWidth="0.5" />
      ))}
      {/* Axes */}
      <line x1={20} y1={oy} x2={W - 20} y2={oy} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={ox} y1={20} x2={ox} y2={H - 20} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Tick labels */}
      {[-3, -2, -1, 1, 2, 3].map(v => (
        <text key={v} x={ox + v * sx} y={oy + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v}</text>
      ))}
      {/* Approximations */}
      <path d={d1} fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d={d3} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d={d5} fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d={d7} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
      {/* True sin */}
      <path d={dSin} fill="none" stroke="#f97316" strokeWidth="2.5" />
      {/* Legend */}
      <rect x={W - 130} y={12} width={118} height={88} rx="4" fill="var(--bg-primary)" fillOpacity="0.85" />
      <line x1={W - 124} y1={26} x2={W - 108} y2={26} stroke="#f97316" strokeWidth="2.5" />
      <text x={W - 104} y={30} fontSize="9" fill="var(--text-primary)">sin(x)</text>
      <line x1={W - 124} y1={42} x2={W - 108} y2={42} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={46} fontSize="9" fill="var(--text-primary)">Ordem 1</text>
      <line x1={W - 124} y1={58} x2={W - 108} y2={58} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={62} fontSize="9" fill="var(--text-primary)">Ordem 3</text>
      <line x1={W - 124} y1={74} x2={W - 108} y2={74} stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={78} fontSize="9" fill="var(--text-primary)">Ordem 5</text>
      <line x1={W - 124} y1={90} x2={W - 108} y2={90} stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={94} fontSize="9" fill="var(--text-primary)">Ordem 7</text>
      <text x={ox} y={H - 6} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Aproximações de Maclaurin de sin(x) em torno de x=0</text>
    </svg>
  );
}

// SVG 2: Convergence interval illustration
function ConvergenceSVG() {
  const W = 480, H = 120;
  const cx = 240, lineY = 60;
  const R = 140;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      {/* Number line */}
      <line x1={40} y1={lineY} x2={W - 40} y2={lineY} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points={`${W-40},${lineY} ${W-48},${lineY-4} ${W-48},${lineY+4}`} fill="var(--text-secondary)" />
      {/* Convergence interval */}
      <rect x={cx - R} y={lineY - 14} width={R * 2} height={28} rx="4" fill={color} fillOpacity="0.18" />
      <line x1={cx - R} y1={lineY - 18} x2={cx - R} y2={lineY + 18} stroke={color} strokeWidth="2" />
      <line x1={cx + R} y1={lineY - 18} x2={cx + R} y2={lineY + 18} stroke={color} strokeWidth="2" />
      {/* Center mark */}
      <circle cx={cx} cy={lineY} r="4" fill={color} />
      {/* Labels */}
      <text x={cx - R} y={lineY + 34} textAnchor="middle" fontSize="11" fill="var(--text-primary)">a - R</text>
      <text x={cx} y={lineY + 34} textAnchor="middle" fontSize="11" fill={color}>a</text>
      <text x={cx + R} y={lineY + 34} textAnchor="middle" fontSize="11" fill="var(--text-primary)">a + R</text>
      {/* Bracket labels */}
      <text x={cx - R - 8} y={lineY + 4} textAnchor="end" fontSize="16" fill={color}>(</text>
      <text x={cx + R + 8} y={lineY + 4} textAnchor="start" fontSize="16" fill={color}>)</text>
      {/* Arrow label */}
      <text x={cx} y={lineY - 22} textAnchor="middle" fontSize="10" fill={color}>Intervalo de Convergência  2R</text>
      {/* Diverge labels */}
      <text x={cx - R - 38} y={lineY + 20} textAnchor="middle" fontSize="9" fill="#f97316">diverge</text>
      <text x={cx + R + 38} y={lineY + 20} textAnchor="middle" fontSize="9" fill="#f97316">diverge</text>
      <text x={W - 36} y={lineY - 8} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">x</text>
    </svg>
  );
}

// SVG 3: Error vs order bar chart
function ErrorOrderSVG() {
  const W = 480, H = 280;
  const padL = 60, padB = 50, padT = 20, padR = 20;
  const chartW = W - padL - padR;
  const chartH = H - padB - padT;

  const orders = [1, 2, 3, 4, 5, 6, 7, 8];
  // log10 of approximate error at x=1 for sin(x)
  const errors = [0.46, -0.22, -1.05, -1.95, -3.06, -4.31, -5.64, -7.02];
  const minErr = -8, maxErr = 1;
  const range = maxErr - minErr;
  const barW = (chartW / orders.length) * 0.6;
  const barGap = chartW / orders.length;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      {/* Axes */}
      <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {/* y grid + labels */}
      {[-8, -6, -4, -2, 0].map(v => {
        const y = padT + chartH * (1 - (v - minErr) / range);
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" />
            <text x={padL - 6} y={y + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
          </g>
        );
      })}
      {/* Bars */}
      {orders.map((ord, i) => {
        const errV = errors[i];
        const barTop = padT + chartH * (1 - (errV - minErr) / range);
        const zeroY = padT + chartH * (1 - (0 - minErr) / range);
        const barH = Math.abs(zeroY - barTop);
        const bx = padL + i * barGap + (barGap - barW) / 2;
        const alpha = 0.4 + 0.08 * i;
        return (
          <rect key={ord} x={bx} y={barTop} width={barW} height={barH} rx="2"
            fill={color} fillOpacity={Math.min(alpha, 1)} />
        );
      })}
      {/* x labels */}
      {orders.map((ord, i) => {
        const bx = padL + i * barGap + barGap / 2;
        return (
          <text key={ord} x={bx} y={H - padB + 14} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{ord}</text>
        );
      })}
      <text x={padL + chartW / 2} y={H - 4} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Ordem da Aproximação</text>
      <text x={12} y={H / 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)" transform={`rotate(-90,12,${H / 2})`}>log₁₀(Erro)</text>
    </svg>
  );
}

// SVG 4: Quadratic bowl for 2nd-order Taylor
function QuadraticBowlSVG() {
  const W = 540, H = 220;
  const ox = 240, oy = 180;
  const sx = 50, sy = 40;

  function parabola(x) { return x * x; }

  const pts = [];
  for (let i = -50; i <= 50; i++) {
    const x = i * 0.08;
    const y = parabola(x);
    if (y > 4.5) continue;
    pts.push([ox + x * sx, oy - y * sy]);
  }
  const dParab = pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  // Point x0 = 1.5
  const x0 = 1.5;
  const y0 = parabola(x0);
  const grad = 2 * x0;
  const hess = 2;
  // Taylor approx at x0: Q(x) = y0 + grad*(x-x0) + 0.5*hess*(x-x0)^2
  const qPts = [];
  for (let i = -50; i <= 50; i++) {
    const x = i * 0.08;
    const dx = x - x0;
    const y = y0 + grad * dx + 0.5 * hess * dx * dx;
    if (y < 0 || y > 5) continue;
    qPts.push([ox + x * sx, oy - y * sy]);
  }
  const dQ = qPts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  // Newton step: x_new = x0 - grad/hess
  const xNew = x0 - grad / hess;

  const px0 = ox + x0 * sx;
  const py0 = oy - y0 * sy;
  const pxNew = ox + xNew * sx;
  const pyNew = oy - parabola(xNew) * sy;

  // Gradient arrow (tangent line segment)
  const tlLen = 0.8;
  const txA = ox + (x0 - tlLen) * sx;
  const tyA = oy - (y0 + grad * (-tlLen)) * sy;
  const txB = ox + (x0 + tlLen) * sx;
  const tyB = oy - (y0 + grad * (tlLen)) * sy;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      {/* Axes */}
      <line x1={40} y1={oy} x2={W - 20} y2={oy} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={ox} y1={20} x2={ox} y2={H - 10} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Parabola */}
      <path d={dParab} fill="none" stroke="#f97316" strokeWidth="2.5" />
      {/* Quadratic approx overlay */}
      <path d={dQ} fill="none" stroke={color} strokeWidth="1.8" strokeDasharray="5 3" />
      {/* Tangent line */}
      <line x1={txA} y1={tyA} x2={txB} y2={tyB} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* x0 point */}
      <circle cx={px0} cy={py0} r="5" fill={color} />
      <line x1={px0} y1={py0} x2={px0} y2={oy} stroke={color} strokeWidth="1" strokeDasharray="3 2" />
      <text x={px0} y={oy + 14} textAnchor="middle" fontSize="10" fill={color}>x₀</text>
      {/* Newton step point */}
      <circle cx={pxNew} cy={pyNew} r="5" fill="#fb923c" />
      <line x1={pxNew} y1={pyNew} x2={pxNew} y2={oy} stroke="#fb923c" strokeWidth="1" strokeDasharray="3 2" />
      <text x={pxNew} y={oy + 14} textAnchor="middle" fontSize="10" fill="#fb923c">x*</text>
      {/* Arrow x0 -> xNew */}
      <defs>
        <marker id="arrowG" markerWidth="7" markerHeight="7" refX="4" refY="2" orient="auto">
          <path d="M0,0 L0,4 L6,2 z" fill="#fb923c" />
        </marker>
      </defs>
      <line x1={px0} y1={oy + 26} x2={pxNew + 2} y2={oy + 26} stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#arrowG)" />
      <text x={(px0 + pxNew) / 2} y={oy + 38} textAnchor="middle" fontSize="9" fill="#fb923c">Passo Newton</text>
      {/* Labels */}
      <text x={W - 20} y={oy - 6} textAnchor="end" fontSize="10" fill="#f97316">f(x) = x²</text>
      <text x={W - 20} y={oy - 18} textAnchor="end" fontSize="10" fill={color}>T₂(x)</text>
      <text x={W - 20} y={oy - 30} textAnchor="end" fontSize="10" fill="#f59e0b">Tangente</text>
    </svg>
  );
}

// SVG 5: Square wave Fourier approximation (Gibbs phenomenon)
function FourierSVG() {
  const W = 520, H = 200;
  const ox = 30, oy = 100;
  const sx = 70, sy = 70;

  function squareWave(x) {
    const xMod = ((x % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    return xMod < Math.PI ? 1 : -1;
  }

  function fourierApprox(x, N) {
    let sum = 0;
    for (let k = 0; k < N; k++) {
      const n = 2 * k + 1;
      sum += Math.sin(n * x) / n;
    }
    return (4 / Math.PI) * sum;
  }

  function makePath(fn, steps) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const x = -Math.PI + (2 * Math.PI) * i / steps;
      const y = fn(x);
      pts.push([ox + (x + Math.PI) * sx, oy - y * sy]);
    }
    return pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  }

  const dSquare = makePath(squareWave, 800);
  const d3 = makePath(x => fourierApprox(x, 3), 400);
  const d10 = makePath(x => fourierApprox(x, 10), 800);
  const d50 = makePath(x => fourierApprox(x, 50), 2000);

  const xVals = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2, 2 * Math.PI];
  const xLabels = ['0', 'π/2', 'π', '3π/2', '2π'];

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      {/* Axes */}
      <line x1={ox} y1={oy} x2={W - 10} y2={oy} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={ox} y1={20} x2={ox} y2={H - 30} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* x ticks */}
      {xVals.map((v, i) => (
        <text key={i} x={ox + v * sx} y={H - 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{xLabels[i]}</text>
      ))}
      {/* y ticks */}
      {[-1, 0, 1].map(v => (
        <text key={v} x={ox - 6} y={oy - v * sy + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
      ))}
      {/* Square wave */}
      <path d={dSquare} fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Fourier approximations */}
      <path d={d3} fill="none" stroke="#f97316" strokeWidth="1.5" />
      <path d={d10} fill="none" stroke="#fb923c" strokeWidth="1.5" />
      <path d={d50} fill="none" stroke={color} strokeWidth="2" />
      {/* Gibbs label */}
      <text x={ox + Math.PI * sx + 4} y={oy - sy * 1.18} fontSize="8" fill={color}>Gibbs</text>
      {/* Legend */}
      <rect x={30} y={10} width={108} height={66} rx="4" fill="var(--bg-primary)" fillOpacity="0.85" />
      <line x1={34} y1={24} x2={50} y2={24} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={54} y={28} fontSize="9" fill="var(--text-primary)">Onda quadrada</text>
      <line x1={34} y1={40} x2={50} y2={40} stroke="#f97316" strokeWidth="1.5" />
      <text x={54} y={44} fontSize="9" fill="var(--text-primary)">N=3</text>
      <line x1={34} y1={56} x2={50} y2={56} stroke="#fb923c" strokeWidth="1.5" />
      <text x={54} y={60} fontSize="9" fill="var(--text-primary)">N=10</text>
      <line x1={34} y1={70} x2={50} y2={70} stroke={color} strokeWidth="2" />
      <text x={54} y={74} fontSize="9" fill="var(--text-primary)">N=50</text>
    </svg>
  );
}

// SVG 6: Multivariate Taylor loss landscape (contour)
function LossLandscapeSVG() {
  const W = 480, H = 220;
  const cx = 190, cy = 110;

  function ellipseR(a, b, theta) {
    return { rx: a, ry: b };
  }

  const contours = [10, 22, 36, 52, 70, 90].map((r, i) => {
    const rx = r * 1.6;
    const ry = r * 0.9;
    return { rx, ry, alpha: 0.08 + i * 0.04 };
  });

  // Gradient descent path (zigzag toward minimum)
  const gdPts = [
    [cx - 100, cy - 55],
    [cx - 60, cy + 20],
    [cx - 30, cy - 15],
    [cx - 12, cy + 8],
    [cx - 4, cy - 3],
    [cx, cy],
  ];
  const gdPath = gdPts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  // Newton path (direct)
  const newtonPts = [
    [cx - 100, cy - 55],
    [cx - 30, cy - 5],
    [cx, cy],
  ];
  const newtonPath = newtonPts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      {/* Contours */}
      {contours.map((c, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={c.rx} ry={c.ry}
          fill={color} fillOpacity={c.alpha} stroke={color} strokeOpacity="0.3" strokeWidth="0.8" />
      ))}
      {/* GD path */}
      <defs>
        <marker id="arrowGD" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
        </marker>
        <marker id="arrowN" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#fb923c" />
        </marker>
      </defs>
      <path d={gdPath} fill="none" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowGD)" />
      <path d={newtonPath} fill="none" stroke="#fb923c" strokeWidth="2" strokeDasharray="5 2" markerEnd="url(#arrowN)" />
      {/* Minimum */}
      <circle cx={cx} cy={cy} r="5" fill={color} />
      <text x={cx + 8} y={cy + 4} fontSize="10" fill={color}>min</text>
      {/* Start point */}
      <circle cx={cx - 100} cy={cy - 55} r="4" fill="var(--text-secondary)" />
      <text x={cx - 100} y={cy - 60} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">início</text>
      {/* Legend */}
      <rect x={W - 175} y={H - 46} width={168} height={36} rx="4" fill="var(--bg-primary)" fillOpacity="0.85" />
      <line x1={W - 171} y1={H - 32} x2={W - 155} y2={H - 32} stroke="#f97316" strokeWidth="2" />
      <text x={W - 151} y={H - 28} fontSize="9" fill="var(--text-primary)">Grad. Descent (1ª ordem)</text>
      <line x1={W - 171} y1={H - 18} x2={W - 155} y2={H - 18} stroke="#fb923c" strokeWidth="2" strokeDasharray="5 2" />
      <text x={W - 151} y={H - 14} fontSize="9" fill="var(--text-primary)">Newton (2ª ordem)</text>
    </svg>
  );
}

export default function CALC8() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Cálculo</Link>
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Séries de Taylor &amp; Aproximações</h1>
      <p style={S.lead}>
        As séries de Taylor permitem representar funções complexas como somas infinitas de monómios.
        Em ML, esta ideia é omnipresente: gradient descent é uma aproximação de 1ª ordem,
        o método de Newton usa a 2ª ordem, e activações como GELU são aproximadas por polinómios.
        Dominar Taylor é dominar a linguagem da otimização.
      </p>

      {/* ── 1. Motivação ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Motivação</h2>
        <p style={S.p}>
          Porque trabalhar com sin(x) quando podemos trabalhar com x? Polinómios são fáceis de
          derivar, integrar e avaliar numericamente. A ideia de Taylor é encontrar o polinómio
          que coincide com f numa vizinhança de um ponto, igualando todas as derivadas.
        </p>
        <SinApproxSVG />
        <p style={{ ...S.p, marginTop: '0.75rem' }}>
          Com apenas 7 termos de Maclaurin, a aproximação de sin(x) é praticamente perfeita
          no intervalo [-5, 5]. Cada termo extra adiciona um nó de oscilação e alarga o alcance.
        </p>
        <div style={S.note}>
          Regra prática: para aproximar sin(x) com erro abaixo de <InlineMath math="10^{-6}" /> em <InlineMath math="|x| \leq \pi" />,
          bastam 7 termos. Para <InlineMath math="|x| \leq 10" />, precisamos de ~15 termos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Definição ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Definição Formal</h2>
        <p style={S.p}>
          A série de Taylor de f em torno do ponto a é:
        </p>
        <BlockMath math="f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots" />
          <BlockMath math="f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n" />
        <p style={S.p}>
          Quando a = 0, chamamos <strong>Série de Maclaurin</strong>. As séries mais úteis em ML:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Série de Maclaurin</th>
              <th style={S.th}>Raio de Conv.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="e^x" /></td>
              <td style={S.td}><InlineMath math="1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots" /></td>
              <td style={S.td}><InlineMath math="\infty" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sin(x)" /></td>
              <td style={S.td}><InlineMath math="x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots" /></td>
              <td style={S.td}><InlineMath math="\infty" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\cos(x)" /></td>
              <td style={S.td}><InlineMath math="1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots" /></td>
              <td style={S.td}><InlineMath math="\infty" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\frac{1}{1-x}" /></td>
              <td style={S.td}><InlineMath math="1 + x + x^2 + x^3 + \cdots" /></td>
              <td style={S.td}><InlineMath math="|x| < 1" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\ln(1+x)" /></td>
              <td style={S.td}><InlineMath math="x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots" /></td>
              <td style={S.td}><InlineMath math="|x| \leq 1,\; x \neq -1" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\arctan(x)" /></td>
              <td style={S.td}><InlineMath math="x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots" /></td>
              <td style={S.td}><InlineMath math="|x| \leq 1" /></td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          A série de <InlineMath math="e^x" /> é especialmente importante: <InlineMath math="e^x = \sum x^n/n!" /> converge para todo <InlineMath math="x" /> real.
          Isto torna o softmax numericamente instável para <InlineMath math="x" /> grandes — veremos como contornar isso.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Raio de Convergência ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Raio de Convergência</h2>
        <p style={S.p}>
          Uma série de potências <InlineMath math="\sum c_n (x-a)^n" /> converge apenas dentro de um intervalo centrado em a.
          O raio de convergência R é calculado pelo <strong>teste da razão</strong>:
        </p>
        
          <BlockMath math="R = \lim_{n \to \infty} \left|\frac{c_n}{c_{n+1}}\right|" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Converge para <InlineMath math="|x - a| < R" />, Diverge para <InlineMath math="|x - a| > R" />
          </p>
        
        <ConvergenceSVG />
        <h3 style={S.h3}>Exemplos de raios</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Série</th>
              <th style={S.th}><InlineMath math="c_n" /></th>
              <th style={S.th}>R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="e^x = \sum x^n/n!" /></td>
              <td style={S.td}><InlineMath math="1/n!" /></td>
              <td style={S.td}><InlineMath math="\infty" /> (converge sempre)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\ln(1+x) = \sum (-1)^{n+1} x^n/n" /></td>
              <td style={S.td}><InlineMath math="(-1)^{n+1}/n" /></td>
              <td style={S.td}>1</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="1/(1-x) = \sum x^n" /></td>
              <td style={S.td}>1</td>
              <td style={S.td}>1</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Em ML com precisão float32, mesmo séries de raio infinito têm problemas numéricos
          para valores grandes. O raio de convergência indica onde a convergência é rápida.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Resto e Erro ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Resto e Erro — Forma de Lagrange</h2>
        <p style={S.p}>
          Ao truncar em ordem N, cometemos um erro controlado pelo <strong>resto de Lagrange</strong>:
        </p>
        
          <BlockMath math="R_N(x) = \frac{f^{(N+1)}(c) \cdot (x-a)^{N+1}}{(N+1)!}" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            onde <InlineMath math="c" /> é algum ponto entre <InlineMath math="a" /> e <InlineMath math="x" /> (não sabemos qual exatamente).
          </p>
        
        <p style={S.p}>
          Para majorar o erro: se <InlineMath math="|f^{(N+1)}(x)| \leq M" /> em [a, x], então <InlineMath math="|R_N(x)| \leq \frac{M|x-a|^{N+1}}{(N+1)!}" />
        </p>
        <ErrorOrderSVG />
        <p style={{ ...S.p, marginTop: '0.75rem' }}>
          O gráfico mostra o log do erro de sin(x) em x=1 à medida que aumentamos a ordem.
          A cada dois termos, o erro cai cerca de 100× — convergência super-exponencial.
        </p>
        <h3 style={S.h3}>Estimativas práticas</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Majorante <InlineMath math="|f^{(n)}|" /></th>
              <th style={S.th}>Erro com N=3 em <InlineMath math="|x| \leq 1" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>sin(x), cos(x)</td>
              <td style={S.td}>1 para todo n</td>
              <td style={S.td}><InlineMath math="\leq 1/4! \approx 0.042" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="e^x" /></td>
              <td style={S.td}>e para n par/ímpar</td>
              <td style={S.td}><InlineMath math="\leq e/4! \approx 0.113" /></td>
            </tr>
            <tr>
              <td style={S.td}>ln(1+x)</td>
              <td style={S.td}><InlineMath math="(n-1)!" /> para <InlineMath math="n \geq 1" /></td>
              <td style={S.td}><InlineMath math="\leq 1/4 = 0.25" /> em x=1</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Expansões em ML ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Expansões Chave em Machine Learning</h2>
        <p style={S.p}>
          Estas aproximações aparecem recorrentemente em derivações teóricas e otimizações numéricas de ML:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Expressão</th>
              <th style={S.th}>Expansão</th>
              <th style={S.th}>Uso em ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>log(1+x)</td>
              <td style={S.td}>x − x²/2 + x³/3 − ⋯</td>
              <td style={S.td}>Cross-entropy, KL divergence para p≈q</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sigma(x) = 1/(1+e^{-x})" /></td>
              <td style={S.td}><InlineMath math="\frac{1}{2} + \frac{x}{4} - \frac{x^3}{48} + \cdots" /></td>
              <td style={S.td}>Análise de saturação, inicialização</td>
            </tr>
            <tr>
              <td style={S.td}>(1+x)^α</td>
              <td style={S.td}>1 + αx + α(α−1)x²/2! + ⋯</td>
              <td style={S.td}>Normalização de batch, análise de perturbação</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sqrt{1+x}" /></td>
              <td style={S.td}><InlineMath math="1 + x/2 - x^2/8 + x^3/16 - \cdots" /></td>
              <td style={S.td}>Adam optimizer (<InlineMath math="\sqrt{\hat{v}}" />) para <InlineMath math="\hat{v} \approx 1" /></td>
            </tr>
            <tr>
              <td style={S.td}>log-sum-exp</td>
              <td style={S.td}><InlineMath math="\max(x) + \log(1 + \sum_{i} e^{x_i - \max}) \approx \max + \sum e_i" /></td>
              <td style={S.td}>Softmax numericamente estável</td>
            </tr>
            <tr>
              <td style={S.td}>tanh(x)</td>
              <td style={S.td}>x − x³/3 + 2x⁵/15 − ⋯</td>
              <td style={S.td}>RNN, análise de saturação</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          A aproximação σ(x) ≈ ½ + x/4 é usada em privacidade diferencial para linearizar
          o mecanismo exponencial. Com apenas dois termos, o erro é &lt; 1% para <InlineMath math="|x| \leq 1" />.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Aproximações 1ª e 2ª Ordem ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Aproximações de 1ª e 2ª Ordem</h2>
        <p style={S.p}>
          As duas aproximações de Taylor mais usadas em otimização são a linear e a quadrática.
          Elas correspondem diretamente a dois algoritmos de otimização clássicos.
        </p>
        <h3 style={S.h3}>Aproximação Linear (1ª ordem)</h3>
        
          <BlockMath math="f(x + h) \approx f(x) + f'(x) \cdot h" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Minimizar <InlineMath math="h" />: <InlineMath math="h^* = -\alpha \cdot f'(x)" /> → Gradient Descent com passo <InlineMath math="\alpha" />
          </p>
        
        <h3 style={S.h3}>Aproximação Quadrática (2ª ordem)</h3>
        
          <BlockMath math="f(x + h) \approx f(x) + f'(x) h + \tfrac{1}{2} f''(x) h^2" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Minimizar em <InlineMath math="h" />: <InlineMath math="h^* = -f'(x)/f''(x)" /> → Método de Newton (passo exato para f quadrática)
          </p>
        
        <QuadraticBowlSVG />
        <p style={{ ...S.p, marginTop: '0.75rem' }}>
          O método de Newton converge em 1 passo para funções quadráticas. Para funções gerais,
          converge quadraticamente perto do mínimo (número de dígitos corretos duplica a cada iteração).
          O custo é calcular e inverter a Hessiana — O(d³) para d parâmetros.
        </p>
        <h3 style={S.h3}>Comparação de Algoritmos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Algoritmo</th>
              <th style={S.th}>Ordem Taylor</th>
              <th style={S.th}>Passo</th>
              <th style={S.th}>Custo/iter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>SGD</td>
              <td style={S.td}>1ª</td>
              <td style={S.td}><InlineMath math="-\alpha \nabla f" /></td>
              <td style={S.td}>O(d)</td>
            </tr>
            <tr>
              <td style={S.td}>Momentum</td>
              <td style={S.td}>1ª + histórico</td>
              <td style={S.td}><InlineMath math="-\alpha \nabla f + \beta v" /></td>
              <td style={S.td}>O(d)</td>
            </tr>
            <tr>
              <td style={S.td}>Adam</td>
              <td style={S.td}>1ª + curvatura diagonal</td>
              <td style={S.td}><InlineMath math="-\alpha \nabla f / \sqrt{\hat{v}}" /></td>
              <td style={S.td}>O(d)</td>
            </tr>
            <tr>
              <td style={S.td}>Newton</td>
              <td style={S.td}>2ª</td>
              <td style={S.td}><InlineMath math="-H^{-1} \nabla f" /></td>
              <td style={S.td}>O(d³)</td>
            </tr>
            <tr>
              <td style={S.td}>L-BFGS</td>
              <td style={S.td}>2ª aproximada</td>
              <td style={S.td}><InlineMath math="-B^{-1} \nabla f \; (B \approx H)" /></td>
              <td style={S.td}>O(md)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Taylor Multivariável ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Taylor Multivariável</h2>
        <p style={S.p}>
          Para <InlineMath math="f : \mathbb{R}^d \to \mathbb{R}" />, a expansão de Taylor em torno de x é:
        </p>
        
          <BlockMath math="f(x + h) = f(x) + \nabla f(x)^\top h + \tfrac{1}{2} h^\top H(x) h + O(\|h\|^3)" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            <InlineMath math="\nabla f \in \mathbb{R}^d" /> é o gradiente, <InlineMath math="H \in \mathbb{R}^{d \times d}" /> é a Hessiana (<InlineMath math="H_{ij} = \partial^2 f / \partial x_i \partial x_j" />)
          </p>
        
        <LossLandscapeSVG />
        <h3 style={S.h3}>Propriedades da Hessiana</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Condição H</th>
              <th style={S.th}>Interpretação geométrica</th>
              <th style={S.th}>Tipo de ponto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>H positiva definida</td>
              <td style={S.td}>Bowl (elipsoide convexo)</td>
              <td style={S.td}>Mínimo local</td>
            </tr>
            <tr>
              <td style={S.td}>H negativa definida</td>
              <td style={S.td}>Bowl invertido</td>
              <td style={S.td}>Máximo local</td>
            </tr>
            <tr>
              <td style={S.td}>H indefinida</td>
              <td style={S.td}>Sela</td>
              <td style={S.td}>Ponto de sela</td>
            </tr>
            <tr>
              <td style={S.td}>H semi-definida</td>
              <td style={S.td}>Ridge/vale plano</td>
              <td style={S.td}>Direção não determinada</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Nas redes neurais profundas, a Hessiana tem dimensão d×d com d ≈ 10⁸ parâmetros.
          Computar H explicitamente é impossível — daí Adam usar apenas a diagonal (curvatura por eixo).
        </div>
        <h3 style={S.h3}>Curvatura e Taxa de Aprendizagem</h3>
        <p style={S.p}>
          O número de condição κ = λmax/λmin da Hessiana mede a "elongação" do bowl.
          Para SGD convergir sem oscilações, o passo ótimo é <InlineMath math="\alpha \leq 2/(\lambda_{\max} + \lambda_{\min})" />.
          Com κ = 1000, as oscilações são devastadoras — aí precondicionamento ajuda.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Activações e Taylor ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Activações e Aproximações Polinomiais</h2>
        <p style={S.p}>
          Activações não-lineares são frequentemente aproximadas por polinómios de Taylor
          para análise teórica, computação em hardware restrito, ou inferência homomórfica.
        </p>
        <h3 style={S.h3}>GELU — Aproximação com Tanh</h3>
        
          <BlockMath math="\text{GELU}(x) = x \cdot \Phi(x) \approx 0.5x \cdot \left(1 + \tanh\!\left(\sqrt{\tfrac{2}{\pi}} \cdot (x + 0.044715x^3)\right)\right)" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Esta aproximação usa o facto de que <InlineMath math="\tanh(x) \approx x - x^3/3" /> para <InlineMath math="x" /> pequeno.
            A série de Taylor de GELU em <InlineMath math="x=0" /> começa: <InlineMath math="x/2 + \cdots + O(x^3)" />
          </p>
        
        <h3 style={S.h3}>Polinómios de Chebyshev</h3>
        <p style={S.p}>
          Os polinómios de Chebyshev <InlineMath math="T_0, T_1, T_2, \ldots" /> minimizam o erro de máximo (norma <InlineMath math="L^\infty" />)
          numa aproximação polinomial, ao contrário da série de Taylor que é local.
          Para activações de redes neurais em computação homomórfica (FHE), usa-se tipicamente
          Chebyshev de grau 15–63.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Polinómio</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Propriedade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="T_0(x)" /></td>
              <td style={S.td}>1</td>
              <td style={S.td}>Constante</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="T_1(x)" /></td>
              <td style={S.td}><InlineMath math="x" /></td>
              <td style={S.td}>Identidade</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="T_2(x)" /></td>
              <td style={S.td}><InlineMath math="2x^2 - 1" /></td>
              <td style={S.td}>Oscilação de amplitude 1 em [-1,1]</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="T_n(x)" /></td>
              <td style={S.td}><InlineMath math="\cos(n \cdot \arccos(x))" /></td>
              <td style={S.td}>Recorrência: <InlineMath math="T_n = 2x T_{n-1} - T_{n-2}" /></td>
            </tr>
          </tbody>
        </table>
                <h3 style={S.h3}>Activações com Estrutura Polinomial</h3>
        <p style={S.p}>
          Redes polinomiais (Kolmogorov-Arnold Networks, KAN) usam directamente bases de
          B-spline ou Chebyshev como activações aprendíveis. A conexão com séries de Taylor
          é direta: cada activação é um polinómio treinável da entrada.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Log e Exp Numérico ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Estabilidade Numérica: Log e Exp</h2>
        <p style={S.p}>
          A série <InlineMath math="e^x" /> diverge para x grande em aritmética de ponto flutuante.
          Os truques numéricos mais usados em ML derivam directamente de Taylor.
        </p>
        <h3 style={S.h3}>Log-Sum-Exp Estável</h3>
        
          <BlockMath math="\log\!\left(\sum_i e^{x_i}\right) = m + \log\!\left(\sum_i e^{x_i - m}\right), \quad m = \max(x_i)" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Expandindo: <InlineMath math="\log(1 + \sum_{i \neq m} e^{x_i - m}) \approx \sum_{i \neq m} e^{x_i - m}" /> quando <InlineMath math="x_i \ll m" />
          </p>
        
                <h3 style={S.h3}>Softplus e a sua Derivada</h3>
        <p style={S.p}>
          softplus(x) = <InlineMath math="\log(1 + e^x)" /> é uma suavização de ReLU.
          A sua derivada é exactamente <InlineMath math="\sigma(x) = 1/(1+e^{-x})" />. Isto segue de Taylor:
        </p>
        
          <BlockMath math="\frac{d}{dx}\log(1 + e^x) = \frac{e^x}{1 + e^x} = \frac{1}{1 + e^{-x}} = \sigma(x)" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Para <InlineMath math="x \to +\infty" />: softplus<InlineMath math="(x) \to x" /> (comportamento de ReLU)
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Para <InlineMath math="x \to -\infty" />: softplus<InlineMath math="(x) \to 0" /> (comportamento de ReLU)
          </p>
        
        <h3 style={S.h3}>Redução de Alcance (Range Reduction)</h3>
        <p style={S.p}>
          Para calcular <InlineMath math="e^x" /> com precisão total, decompomos <InlineMath math="x = k \cdot \ln 2 + r" /> com <InlineMath math="|r| \leq \ln 2/2" />,
          então <InlineMath math="e^x = 2^k \cdot e^r" /> e usamos a série para <InlineMath math="e^r" /> com r pequeno.
          Esta técnica é usada em todas as bibliotecas de matemática de hardware.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Análise de Perturbação ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Análise de Perturbação e Funções de Influência</h2>
        <p style={S.p}>
          A aproximação linear de Taylor permite quantificar o efeito de pequenas perturbações
          nos parâmetros ou nos dados de treino.
        </p>
        <h3 style={S.h3}>Sensibilidade dos Parâmetros</h3>
        
          <BlockMath math="\Delta f \approx \nabla_\theta f \cdot \Delta\theta \quad \text{(1ª ordem)}" />
          <BlockMath math="\Delta f \approx \nabla_\theta f \cdot \Delta\theta + \tfrac{1}{2} \Delta\theta^\top H \Delta\theta \quad \text{(2ª ordem)}" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Útil para: pruning de pesos, análise de robustez, design de ataques adversariais.
          </p>
        
        <h3 style={S.h3}>Funções de Influência</h3>
        <p style={S.p}>
          Como mudaria o parâmetro <InlineMath math="\theta^*" /> se removêssemos o ponto de treino <InlineMath math="z_i" />?
          Usando a aproximação de 1ª ordem na solução dos mínimos:
        </p>
        <BlockMath math="\Delta\theta \approx -H^{-1} \nabla_\theta L(z_i, \theta) \cdot \frac{1}{n}" />
        <p style={S.p}>
          Isto permite estimar a importância de cada exemplo de treino sem retreinar o modelo.
          É a base de técnicas de interpretabilidade como TracIn e DataMaps.
        </p>
        <h3 style={S.h3}>Privacidade Diferencial</h3>
        <p style={S.p}>
          A sensibilidade global Δf = max|f(D) − f(D′)| sobre vizinhos D, D′ é majorada pela
          norma do gradiente via Taylor:
        </p>
        <BlockMath math="|f(D) - f(D')| \leq \|\nabla f\| \cdot \|D - D'\| \approx \|\nabla f\| \cdot \frac{1}{n}" />
        <p style={S.p}>
          Em DP-SGD, a clip do gradiente garante <InlineMath math="\|\nabla f\| \leq C" />, limitando a sensibilidade a C/n.
          O ruído gaussiano adicionado tem desvio padrão σC para garantir (ε, δ)-DP.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── 11. Séries de Fourier ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Séries de Fourier — Generalização Ortogonal</h2>
        <p style={S.p}>
          Taylor expande em potências (1, x, x², …). Fourier expande em funções ortogonais
          (senos e cossenos). Ambas são casos de expansão em bases de funções:
        </p>
        <BlockMath math="f(x) = \frac{a_0}{2} + \sum_n (a_n \cos(nx) + b_n \sin(nx))" />
          <BlockMath math="a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\,dx" />
          <BlockMath math="b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\,dx" />
        <FourierSVG />
        <p style={{ ...S.p, marginTop: '0.75rem' }}>
          O <strong>fenómeno de Gibbs</strong> mostra que perto de descontinuidades,
          a aproximação sempre oscila ~9% acima/abaixo — independentemente de quantos
          termos se usem. Isto é relevante para sinais discretizados em ML.
        </p>
        <h3 style={S.h3}>Conexão com Positional Encodings (Transformers)</h3>
        <p style={S.p}>
          O positional encoding de "Attention is All You Need" usa exactamente a base de Fourier:
        </p>
        <BlockMath math="\text{PE}(\text{pos}, 2i) = \sin\!\left(\frac{\text{pos}}{10000^{2i/d}}\right)" />
          <BlockMath math="\text{PE}(\text{pos}, 2i+1) = \cos\!\left(\frac{\text{pos}}{10000^{2i/d}}\right)" />
        <p style={S.p}>
          Cada dimensão do embedding corresponde a uma frequência diferente —
          exactamente como diferentes harmónicos na série de Fourier.
          O modelo pode aprender combinações lineares para representar relações de distância.
        </p>
        <h3 style={S.h3}>Taylor vs Fourier — Quando Usar Qual</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Taylor</th>
              <th style={S.th}>Fourier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Tipo de approximação</td>
              <td style={S.td}>Local (em torno de um ponto)</td>
              <td style={S.td}>Global (em toda a periodicidade)</td>
            </tr>
            <tr>
              <td style={S.td}>Base</td>
              <td style={S.td}><InlineMath math="x^n" /> (monómios)</td>
              <td style={S.td}>sin/cos (ortogonais)</td>
            </tr>
            <tr>
              <td style={S.td}>Funções descontinuas</td>
              <td style={S.td}>Não convergem bem</td>
              <td style={S.td}>Convergem (Gibbs na discontinuidade)</td>
            </tr>
            <tr>
              <td style={S.td}>Uso em otimização</td>
              <td style={S.td}>Gradiente, Newton, análise local</td>
              <td style={S.td}>Sinais, positional encodings, espectral</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 12. Síntese ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <h3 style={S.h3}>Séries de Maclaurin Essenciais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>f(x)</th>
              <th style={S.th}>Expansão (primeiros termos)</th>
              <th style={S.th}>Raio R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="e^x" /></td>
              <td style={S.td}><InlineMath math="1 + x + x^2/2! + x^3/3! + x^4/4! + \cdots" /></td>
              <td style={S.td}><InlineMath math="\infty" /></td>
            </tr>
            <tr>
              <td style={S.td}>sin(x)</td>
              <td style={S.td}><InlineMath math="x - x^3/6 + x^5/120 - x^7/5040 + \cdots" /></td>
              <td style={S.td}><InlineMath math="\infty" /></td>
            </tr>
            <tr>
              <td style={S.td}>cos(x)</td>
              <td style={S.td}><InlineMath math="1 - x^2/2 + x^4/24 - x^6/720 + \cdots" /></td>
              <td style={S.td}><InlineMath math="\infty" /></td>
            </tr>
            <tr>
              <td style={S.td}>ln(1+x)</td>
              <td style={S.td}><InlineMath math="x - x^2/2 + x^3/3 - x^4/4 + \cdots" /></td>
              <td style={S.td}>1</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="1/(1-x)" /></td>
              <td style={S.td}><InlineMath math="1 + x + x^2 + x^3 + \cdots" /></td>
              <td style={S.td}>1</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sqrt{1+x}" /></td>
              <td style={S.td}><InlineMath math="1 + x/2 - x^2/8 + x^3/16 - \cdots" /></td>
              <td style={S.td}>1</td>
            </tr>
            <tr>
              <td style={S.td}>arctan(x)</td>
              <td style={S.td}>x − x³/3 + x⁵/5 − x⁷/7 + ⋯</td>
              <td style={S.td}>1</td>
            </tr>
            <tr>
              <td style={S.td}>tanh(x)</td>
              <td style={S.td}><InlineMath math="x - x^3/3 + 2x^5/15 - 17x^7/315 + \cdots" /></td>
              <td style={S.td}><InlineMath math="\pi/2" /></td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Ordem de Aproximação → Algoritmo ML</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ordem</th>
              <th style={S.th}>Informação usada</th>
              <th style={S.th}>Algoritmo</th>
              <th style={S.th}>Convergência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>0</td>
              <td style={S.td}>f(x) (só o valor)</td>
              <td style={S.td}>Evolutionary/Random Search</td>
              <td style={S.td}>Sub-linear</td>
            </tr>
            <tr>
              <td style={S.td}>1</td>
              <td style={S.td}><InlineMath math="\nabla f" /> (gradiente)</td>
              <td style={S.td}>SGD, Adam, Adagrad</td>
              <td style={S.td}>Linear</td>
            </tr>
            <tr>
              <td style={S.td}>1.5</td>
              <td style={S.td}><InlineMath math="\nabla f + \text{diag}(H)" /></td>
              <td style={S.td}>RMSProp, Adam</td>
              <td style={S.td}>Linear melhorado</td>
            </tr>
            <tr>
              <td style={S.td}>2</td>
              <td style={S.td}><InlineMath math="\nabla f + H" /> (Hessiana)</td>
              <td style={S.td}>Newton, L-BFGS</td>
              <td style={S.td}>Quadrática</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\infty" /></td>
              <td style={S.td}>Função completa</td>
              <td style={S.td}>Exact minimization</td>
              <td style={S.td}>1 passo</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplos de Código</h3>
        
        <div style={S.note}>
          Regra prática para ML: use SGD (1ª ordem) durante treino large-scale, L-BFGS (2ª ordem
          aproximada) para fine-tuning ou problemas de dimensão moderada, e Newton para
          regressão logística com poucas features onde d² é tratável.
        </div>

        <h3 style={S.h3}>Identidades Rápidas para Usar no Exame</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Identidade</th>
              <th style={S.th}>Como lembrar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="e^x \approx 1 + x" /> para x ≈ 0</td>
              <td style={S.td}>Linearizar qualquer exponencial pequena</td>
            </tr>
            <tr>
              <td style={S.td}>ln(1+x) ≈ x  para x ≈ 0</td>
              <td style={S.td}>Simplificar cross-entropy perto do ótimo</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sqrt{1+x} \approx 1 + x/2" /> para x ≈ 0</td>
              <td style={S.td}>Adam com <InlineMath math="\hat{v}" /> perto de 1</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="(1+x)^n \approx 1 + nx" /> para x ≈ 0</td>
              <td style={S.td}>Binomial de 1ª ordem (e.g. learning rate schedules)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sigma(x) \approx \frac{1}{2} + \frac{x}{4}" /> para x ≈ 0</td>
              <td style={S.td}>Sigmoid linear perto de zero (inicialização)</td>
            </tr>
            <tr>
              <td style={S.td}>sin(x) ≈ x  para x ≈ 0</td>
              <td style={S.td}>Ângulos pequenos em geometria esférica</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\cos(x) \approx 1 - x^2/2" /> para x ≈ 0</td>
              <td style={S.td}>Positional encoding, erro de aproximação angular</td>
            </tr>
            <tr>
              <td style={S.td}>1/(1+x) ≈ 1 − x  para x ≈ 0</td>
              <td style={S.td}>Inversa de Woodbury (1ª ordem)</td>
            </tr>
          </tbody>
        </table>
      </section>
      
    </div>
  );
}
