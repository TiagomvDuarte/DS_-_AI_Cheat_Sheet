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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(125,211,252,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
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
      <path d={d1} fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d={d3} fill="none" stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d={d5} fill="none" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d={d7} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
      {/* True sin */}
      <path d={dSin} fill="none" stroke="#4a9eed" strokeWidth="2.5" />
      {/* Legend */}
      <rect x={W - 130} y={12} width={118} height={88} rx="4" fill="var(--bg-primary)" fillOpacity="0.85" />
      <line x1={W - 124} y1={26} x2={W - 108} y2={26} stroke="#4a9eed" strokeWidth="2.5" />
      <text x={W - 104} y={30} fontSize="9" fill="var(--text-primary)">sin(x)</text>
      <line x1={W - 124} y1={42} x2={W - 108} y2={42} stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={46} fontSize="9" fill="var(--text-primary)">Ordem 1</text>
      <line x1={W - 124} y1={58} x2={W - 108} y2={58} stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={62} fontSize="9" fill="var(--text-primary)">Ordem 3</text>
      <line x1={W - 124} y1={74} x2={W - 108} y2={74} stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={78} fontSize="9" fill="var(--text-primary)">Ordem 5</text>
      <line x1={W - 124} y1={90} x2={W - 108} y2={90} stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={W - 104} y={94} fontSize="9" fill="var(--text-primary)">Ordem 7</text>
      <text x={ox} y={H - 6} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Aproximações de Maclaurin de sin(x) em torno de x=0</text>
    </svg>
  );
}

// Convergence interval illustration — plain HTML/CSS (not SVG) so KaTeX labels
// never hit the foreignObject/viewBox scaling bug that misplaces them.
function ConvergenceSVG() {
  return (
    <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '1.75rem 2rem 1.25rem', width: '100%' }}>
      <div style={{ textAlign: 'center', color, fontSize: '0.8rem', marginBottom: '0.6rem' }}>
        Intervalo de Convergência <InlineMath math="2R" />
      </div>
      <div style={{ position: 'relative', height: 56 }}>
        {/* base line + arrowhead */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 14, height: 1.5, background: 'var(--text-secondary)' }} />
        <div style={{ position: 'absolute', top: '50%', right: 6, transform: 'translateY(-50%)', width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '8px solid var(--text-secondary)' }} />
        {/* shaded convergence interval */}
        <div style={{ position: 'absolute', left: '18%', right: '25%', top: '32%', bottom: '32%', background: `${color}2e`, borderRadius: 4 }} />
        <div style={{ position: 'absolute', left: '18%', top: '18%', bottom: '18%', width: 2, background: color }} />
        <div style={{ position: 'absolute', right: '25%', top: '18%', bottom: '18%', width: 2, background: color }} />
        {/* center mark */}
        <div style={{ position: 'absolute', left: '48.5%', top: '50%', transform: 'translate(-50%,-50%)', width: 9, height: 9, borderRadius: '50%', background: color }} />
        {/* brackets */}
        <div style={{ position: 'absolute', left: '18%', top: '50%', transform: 'translate(-24px,-50%)', color, fontSize: '1.2rem' }}>(</div>
        <div style={{ position: 'absolute', right: '25%', top: '50%', transform: 'translate(12px,-50%)', color, fontSize: '1.2rem' }}>)</div>
        {/* x-axis label */}
        <div style={{ position: 'absolute', right: 0, top: '0%', color: 'var(--text-secondary)', fontSize: '0.75rem' }}><InlineMath math="x" /></div>
      </div>
      <div style={{ position: 'relative', height: 22 }}>
        <div style={{ position: 'absolute', left: '18%', transform: 'translateX(-50%)', color: 'var(--text-primary)', fontSize: '0.8rem' }}><InlineMath math="a - R" /></div>
        <div style={{ position: 'absolute', left: '48.5%', transform: 'translateX(-50%)', color, fontSize: '0.8rem' }}><InlineMath math="a" /></div>
        <div style={{ position: 'absolute', left: '75%', transform: 'translateX(-50%)', color: 'var(--text-primary)', fontSize: '0.8rem' }}><InlineMath math="a + R" /></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.15rem', fontSize: '0.7rem', color: '#4a9eed' }}>
        <span>diverge</span>
        <span>diverge</span>
      </div>
    </div>
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
          <rect key={ord} x={bx} y={Math.min(barTop, zeroY)} width={barW} height={barH} rx="2"
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
      <path d={d3} fill="none" stroke="#4a9eed" strokeWidth="1.5" />
      <path d={d10} fill="none" stroke="#bae6fd" strokeWidth="1.5" />
      <path d={d50} fill="none" stroke={color} strokeWidth="2" />
      {/* Gibbs label */}
      <text x={ox + Math.PI * sx + 4} y={oy - sy * 1.18} fontSize="8" fill={color}>Gibbs</text>
      {/* Legend */}
      <rect x={30} y={10} width={108} height={66} rx="4" fill="var(--bg-primary)" fillOpacity="0.85" />
      <line x1={34} y1={24} x2={50} y2={24} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x={54} y={28} fontSize="9" fill="var(--text-primary)">Onda quadrada</text>
      <line x1={34} y1={40} x2={50} y2={40} stroke="#4a9eed" strokeWidth="1.5" />
      <text x={54} y={44} fontSize="9" fill="var(--text-primary)">N=3</text>
      <line x1={34} y1={56} x2={50} y2={56} stroke="#bae6fd" strokeWidth="1.5" />
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
    return { rx, ry, alpha: 0.16 + i * 0.09 };
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
        <marker id="arrowGD" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
          <path d="M0,0 L0,4 L4,2 z" fill="#93c5fd" />
        </marker>
        <marker id="arrowN" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
          <path d="M0,0 L0,4 L4,2 z" fill="#dbeafe" />
        </marker>
      </defs>
      {/* Minimum */}
      <circle cx={cx} cy={cy} r="5" fill={color} />
      <text x={cx + 4} y={cy - 12} textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">min</text>
      {/* Start point */}
      <circle cx={cx - 100} cy={cy - 55} r="4" fill="var(--text-secondary)" />
      <text x={cx - 100} y={cy - 60} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">início</text>
      {/* Paths drawn last so the trajectories and arrowheads render in front of the dots */}
      <path d={gdPath} fill="none" stroke="#93c5fd" strokeWidth="2.5" markerEnd="url(#arrowGD)" />
      <path d={newtonPath} fill="none" stroke="#dbeafe" strokeWidth="2.5" strokeDasharray="5 2" markerEnd="url(#arrowN)" />
      {/* Legend */}
      <rect x={W - 175} y={H - 46} width={168} height={36} rx="4" fill="var(--bg-primary)" fillOpacity="0.85" />
      <line x1={W - 171} y1={H - 32} x2={W - 155} y2={H - 32} stroke="#93c5fd" strokeWidth="2.5" />
      <text x={W - 151} y={H - 28} fontSize="9" fill="var(--text-primary)">Grad. Descent (1ª ordem)</text>
      <line x1={W - 171} y1={H - 18} x2={W - 155} y2={H - 18} stroke="#dbeafe" strokeWidth="2.5" strokeDasharray="5 2" />
      <text x={W - 151} y={H - 14} fontSize="9" fill="var(--text-primary)">Newton (2ª ordem)</text>
    </svg>
  );
}

export default function CALC8() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Cálculo</Link>
      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Séries de Taylor &amp; Aproximações</h1>

      {/* ── 1. Motivação ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Motivação</h2>
        <p style={S.p}>
          Porque trabalhar com <InlineMath math="\sin(x)" /> quando podemos trabalhar com <InlineMath math="x" />? Polinómios são fáceis de
          derivar, integrar e avaliar numericamente. A ideia de Taylor é encontrar o polinómio
          que coincide com <InlineMath math="f" /> numa vizinhança de um ponto, igualando todas as derivadas.
        </p>
        <SinApproxSVG />
        <p style={{ ...S.p, marginTop: '0.75rem' }}>
          Com apenas 7 termos de Maclaurin, a aproximação de <InlineMath math="\sin(x)" /> é praticamente perfeita
          no intervalo <InlineMath math="[-5, 5]" />. Cada termo extra adiciona um nó de oscilação e alarga o alcance.
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
          A série de Taylor de <InlineMath math="f" /> em torno do ponto <InlineMath math="a" /> é:
        </p>
        <BlockMath math="f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots" />
          <BlockMath math="f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n" />
        <p style={S.p}>
          Quando <InlineMath math="a = 0" />, chamamos <strong>Série de Maclaurin</strong>. As séries mais úteis em ML:
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
          Uma série de potências <InlineMath math="\sum c_n (x-a)^n" /> converge apenas dentro de um intervalo centrado em <InlineMath math="a" />.
          O raio de convergência <InlineMath math="R" /> é calculado pelo <strong>teste da razão</strong>:
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
          Ao truncar em ordem <InlineMath math="N" />, cometemos um erro controlado pelo <strong>resto de Lagrange</strong>:
        </p>
        
          <BlockMath math="R_N(x) = \frac{f^{(N+1)}(c) \cdot (x-a)^{N+1}}{(N+1)!}" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            onde <InlineMath math="c" /> é algum ponto entre <InlineMath math="a" /> e <InlineMath math="x" /> (não sabemos qual exatamente).
          </p>
        
        <p style={S.p}>
          Para majorar o erro: se <InlineMath math="|f^{(N+1)}(x)| \leq M" /> em <InlineMath math="[a, x]" />, então <InlineMath math="|R_N(x)| \leq \frac{M|x-a|^{N+1}}{(N+1)!}" />
        </p>
        <ErrorOrderSVG />
        <p style={{ ...S.p, marginTop: '0.75rem' }}>
          O gráfico mostra o log do erro de <InlineMath math="\sin(x)" /> em <InlineMath math="x=1" /> à medida que aumentamos a ordem.
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
              <td style={S.td}><InlineMath math="\sin(x), \cos(x)" /></td>
              <td style={S.td}>1 para todo n</td>
              <td style={S.td}><InlineMath math="\leq 1/4! \approx 0.042" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="e^x" /></td>
              <td style={S.td}>e para n par/ímpar</td>
              <td style={S.td}><InlineMath math="\leq e/4! \approx 0.113" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\ln(1+x)" /></td>
              <td style={S.td}><InlineMath math="(n-1)!" /> para <InlineMath math="n \geq 1" /></td>
              <td style={S.td}><InlineMath math="\leq 1/4 = 0.25" /> em <InlineMath math="x=1" /></td>
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
              <td style={S.td}><InlineMath math="\log(1+x)" /></td>
              <td style={S.td}><InlineMath math="x - x^2/2 + x^3/3 - \cdots" /></td>
              <td style={S.td}>Cross-entropy, KL divergence para p≈q</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sigma(x) = 1/(1+e^{-x})" /></td>
              <td style={S.td}><InlineMath math="\frac{1}{2} + \frac{x}{4} - \frac{x^3}{48} + \cdots" /></td>
              <td style={S.td}>Análise de saturação, inicialização</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="(1+x)^\alpha" /></td>
              <td style={S.td}><InlineMath math="1 + \alpha x + \alpha(\alpha-1)x^2/2! + \cdots" /></td>
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
              <td style={S.td}><InlineMath math="\tanh(x)" /></td>
              <td style={S.td}><InlineMath math="x - x^3/3 + 2x^5/15 - \cdots" /></td>
              <td style={S.td}>RNN, análise de saturação</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          A aproximação <InlineMath math="\sigma(x) \approx \tfrac{1}{2} + x/4" /> é usada em privacidade diferencial para linearizar
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
        
        <p style={{ ...S.p, marginTop: '0.75rem' }}>
          O método de Newton converge em 1 passo para funções quadráticas. Para funções gerais,
          converge quadraticamente perto do mínimo (número de dígitos corretos duplica a cada iteração).
          O custo é calcular e inverter a Hessiana — <InlineMath math="O(d^3)" /> para <InlineMath math="d" /> parâmetros.
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
              <td style={S.td}><InlineMath math="O(d)" /></td>
            </tr>
            <tr>
              <td style={S.td}>Momentum</td>
              <td style={S.td}>1ª + histórico</td>
              <td style={S.td}><InlineMath math="-\alpha \nabla f + \beta v" /></td>
              <td style={S.td}><InlineMath math="O(d)" /></td>
            </tr>
            <tr>
              <td style={S.td}>Adam</td>
              <td style={S.td}>1ª + curvatura diagonal</td>
              <td style={S.td}><InlineMath math="-\alpha \nabla f / \sqrt{\hat{v}}" /></td>
              <td style={S.td}><InlineMath math="O(d)" /></td>
            </tr>
            <tr>
              <td style={S.td}>Newton</td>
              <td style={S.td}>2ª</td>
              <td style={S.td}><InlineMath math="-H^{-1} \nabla f" /></td>
              <td style={S.td}><InlineMath math="O(d^3)" /></td>
            </tr>
            <tr>
              <td style={S.td}>L-BFGS</td>
              <td style={S.td}>2ª aproximada</td>
              <td style={S.td}><InlineMath math="-B^{-1} \nabla f \; (B \approx H)" /></td>
              <td style={S.td}><InlineMath math="O(md)" /></td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Taylor Multivariável ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Taylor Multivariável</h2>
        <p style={S.p}>
          Para <InlineMath math="f : \mathbb{R}^d \to \mathbb{R}" />, a expansão de Taylor em torno de <InlineMath math="x" /> é:
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
          O número de condição <InlineMath math="\kappa = \lambda_{\max}/\lambda_{\min}" /> da Hessiana mede a "elongação" do bowl.
          Para SGD convergir sem oscilações, o passo ótimo é <InlineMath math="\alpha \leq 2/(\lambda_{\max} + \lambda_{\min})" />.
          Com <InlineMath math="\kappa = 1000" />, as oscilações são devastadoras — aí precondicionamento ajuda.
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
          A sensibilidade global <InlineMath math="\Delta f = \max|f(D) - f(D')|" /> sobre vizinhos <InlineMath math="D, D'" /> é majorada pela
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
      
    </div>
  );
}
