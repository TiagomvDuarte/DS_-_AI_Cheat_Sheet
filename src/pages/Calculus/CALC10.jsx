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
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

const svgWrap = { margin: '1.5rem 0', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--card-border)', background: 'var(--bg-secondary)' };
const formula = { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 1.25rem', fontFamily: 'monospace', fontSize: '0.95rem', color: color, margin: '0.75rem 0', textAlign: 'center' };

/* ─── SVG 1: Direction Field ─── */
function DirectionFieldSVG() {
  const W = 520, H = 280;
  const xMin = -1, xMax = 3, yMin = -2, yMax = 3;
  const toSx = x => ((x - xMin) / (xMax - xMin)) * (W - 60) + 30;
  const toSy = y => H - 20 - ((y - yMin) / (yMax - yMin)) * (H - 40);

  const arrows = [];
  for (let xi = -0.5; xi <= 2.8; xi += 0.5) {
    for (let yi = -1.5; yi <= 2.8; yi += 0.5) {
      const dy = yi - xi;
      const len = Math.sqrt(1 + dy * dy);
      const dx2 = 14 / len;
      const dy2 = (dy * 14) / len;
      const sx = toSx(xi), sy = toSy(yi);
      arrows.push({ x1: sx - dx2 / 2, y1: sy + dy2 / 2, x2: sx + dx2 / 2, y2: sy - dy2 / 2 });
    }
  }

  // Solution curves for dy/dt = y - t with different C values
  const curves = [];
  for (const C of [-2, -1, 0, 1, 2]) {
    const pts = [];
    let y = C * Math.exp(0) + 0 + 1; // y = (C + t + 1)e^t — at t=0: C+1
    // exact solution: y = (C)e^t + t + 1
    for (let i = 0; i <= 60; i++) {
      const t = xMin + (i / 60) * (xMax - xMin);
      const yv = C * Math.exp(t) + t + 1;
      pts.push([toSx(t), toSy(yv)]);
    }
    const d = pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
    curves.push(d);
  }

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      {/* grid */}
      {[-1,0,1,2,3].map(v => (
        <line key={'gx'+v} x1={toSx(v)} y1={20} x2={toSx(v)} y2={H-20} stroke="var(--text-secondary)" strokeWidth={0.5} />
      ))}
      {[-2,-1,0,1,2,3].map(v => (
        <line key={'gy'+v} x1={30} y1={toSy(v)} x2={W-30} y2={toSy(v)} stroke="var(--text-secondary)" strokeWidth={0.5} />
      ))}
      {/* axes */}
      <line x1={30} y1={toSy(0)} x2={W-30} y2={toSy(0)} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={toSx(0)} y1={20} x2={toSx(0)} y2={H-20} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* direction arrows */}
      {arrows.map((a, i) => (
        <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="#94a3b8" strokeWidth={1} />
      ))}
      {/* solution curves */}
      {curves.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={color} strokeWidth={i === 2 ? 2.5 : 1.5} opacity={i === 2 ? 1 : 0.55} clipPath="url(#dfclip)" />
      ))}
      <defs>
        <clipPath id="dfclip">
          <rect x={30} y={20} width={W - 60} height={H - 40} />
        </clipPath>
      </defs>
      <text x={W - 35} y={toSy(0) - 6} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">t</text>
      <text x={toSx(0) + 8} y={28} fill="var(--text-secondary)" fontSize={11}>y</text>
      <text x={W / 2} y={H - 2} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Campo direcional: dy/dt = y - t</text>
    </svg>
  );
}

/* ─── SVG 2: Logistic Growth S-curve ─── */
function LogisticSVG() {
  const W = 520, H = 270;
  const r = 1.2, K = 1.0;
  const toSx = t => 30 + (t / 8) * (W - 60);
  const toSy = y => H - 20 - (y / 1.2) * (H - 40);

  // logistic: y(t) = K / (1 + ((K - y0)/y0) * exp(-r*t))
  const makeCurve = (y0) => {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = (i / 80) * 8;
      const yv = K / (1 + ((K - y0) / y0) * Math.exp(-r * t));
      pts.push([toSx(t), toSy(yv)]);
    }
    return pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  };

  const expCurve = [];
  for (let i = 0; i <= 80; i++) {
    const t = (i / 80) * 8;
    const yv = 0.05 * Math.exp(r * t);
    if (yv <= 1.2) expCurve.push([toSx(t), toSy(yv)]);
  }
  const expD = expCurve.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H }`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      {/* carrying capacity line */}
      <line x1={30} y1={toSy(K)} x2={W - 30} y2={toSy(K)} stroke="#64748b" strokeWidth={1} strokeDasharray="5,3" />
      <text x={W - 35} y={toSy(K) - 5} fill="#64748b" fontSize={10} textAnchor="end">K (cap.)</text>
      {/* axes */}
      <line x1={30} y1={H - 20} x2={W - 30} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={30} y1={20} x2={30} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* exponential */}
      <path d={expD} fill="none" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4,3" />
      {/* logistic curves */}
      {[0.02, 0.05, 0.15, 0.4].map((y0, i) => (
        <path key={i} d={makeCurve(y0)} fill="none" stroke={color} strokeWidth={i === 1 ? 2.5 : 1.5} opacity={0.5 + i * 0.1} clipPath="url(#logclip)" />
      ))}
      <defs>
        <clipPath id="logclip">
          <rect x={30} y={20} width={W - 60} height={H - 40} />
        </clipPath>
      </defs>
      <text x={W / 2} y={H - 2} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Crescimento logístico: dy/dt = ry(1 - y/K)</text>
    </svg>
  );
}

/* ─── SVG 3: Family of Solution Curves (linear 1st order) ─── */
function LinearODESVG() {
  const W = 520, H = 260;
  const toSx = x => 30 + ((x + 1) / 4) * (W - 60);
  const toSy = y => H - 20 - ((y + 2) / 6) * (H - 40);

  // y' + y = x => integrating factor e^x => y = x - 1 + Ce^(-x)
  const makeCurve = (C) => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const x = -1 + (i / 60) * 4;
      const yv = x - 1 + C * Math.exp(-x);
      pts.push([toSx(x), toSy(yv)]);
    }
    return pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  };

  const Cs = [-3, -1.5, 0, 1.5, 3];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      {/* axes */}
      <line x1={30} y1={toSy(0)} x2={W - 30} y2={toSy(0)} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={toSx(0)} y1={20} x2={toSx(0)} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      <defs>
        <clipPath id="linclip">
          <rect x={30} y={20} width={W - 60} height={H - 40} />
        </clipPath>
      </defs>
      {Cs.map((C, i) => (
        <path key={i} d={makeCurve(C)} fill="none" stroke={color} strokeWidth={i === 2 ? 2.5 : 1.5} opacity={0.4 + i * 0.12} clipPath="url(#linclip)" />
      ))}
      <text x={W / 2} y={H - 2} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Família de soluções: y = x - 1 + Ce^(-x)</text>
    </svg>
  );
}

/* ─── SVG 4: Phase Portraits ─── */
function PhasePortraitSVG() {
  const W = 520, H = 280;
  const CX = W / 2, CY = H / 2;
  const R = 90;

  // Stable spiral, saddle point, unstable node — three panels
  const panels = [
    { cx: 90, label: 'Espiral estável', color: '#f97316' },
    { cx: 260, label: 'Ponto de sela', color: '#f97316' },
    { cx: 430, label: 'Nó instável', color: color },
  ];

  // Stable spiral trajectories
  const spiralPts = (cx, cy, sign) => {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * 4 * Math.PI;
      const r = 70 * Math.exp(-sign * 0.3 * t);
      pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
    }
    return pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  };

  // Saddle: hyperbolic paths
  const saddlePts = (cx, cy, k) => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const t = -2 + (i / 60) * 4;
      pts.push([cx + k * t * 30, cy + (k === 0 ? 1 : 1 / (k * t + 0.001)) * 20]);
    }
    return pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  };

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      <defs>
        <clipPath id="p1clip"><circle cx={90} cy={130} r={82} /></clipPath>
        <clipPath id="p2clip"><circle cx={260} cy={130} r={82} /></clipPath>
        <clipPath id="p3clip"><circle cx={430} cy={130} r={82} /></clipPath>
      </defs>

      {/* Panel borders */}
      {panels.map((p, i) => (
        <circle key={i} cx={p.cx} cy={130} r={82} fill="none" stroke="var(--text-secondary)" strokeWidth={1} />
      ))}

      {/* Stable spiral */}
      {[-1, 1].map((s, i) => (
        <path key={i} d={spiralPts(90, 130, 1)} fill="none" stroke="#f97316" strokeWidth={1.5} opacity={0.7 + i * 0.1} clipPath="url(#p1clip)" transform={`rotate(${i * 90}, 90, 130)`} />
      ))}
      <circle cx={90} cy={130} r={4} fill="#f97316" />

      {/* Saddle */}
      {[[-1, -0.5, 0, 0.5, 1]].flat().map((k, i) => {
        const pts = [];
        for (let j = 0; j <= 60; j++) {
          const t = -1.5 + (j / 60) * 3;
          const x = 260 + t * 40;
          const y = 130 + (k !== 0 ? k * 25 * Math.cosh(t * 0.8) : 0);
          pts.push([x, y]);
        }
        const d = pts.map((p, ii) => (ii === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
        return <path key={'sh'+i} d={d} fill="none" stroke="#f59e0b" strokeWidth={1.2} opacity={0.6} clipPath="url(#p2clip)" />;
      })}
      {[-1,-0.5,0,0.5,1].map((k, i) => {
        const pts = [];
        for (let j = 0; j <= 60; j++) {
          const t = -1.5 + (j / 60) * 3;
          const x = 260 + k * 25 * Math.cosh(t * 0.8);
          const y = 130 + t * 40;
          pts.push([x, y]);
        }
        const d = pts.map((p, ii) => (ii === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
        return <path key={'sv'+i} d={d} fill="none" stroke="#f59e0b" strokeWidth={1.2} opacity={0.6} clipPath="url(#p2clip)" />;
      })}
      <circle cx={260} cy={130} r={4} fill="#f59e0b" />

      {/* Unstable node */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const pts = [];
        for (let j = 0; j <= 40; j++) {
          const t = j / 40;
          const r = t * 75;
          pts.push([430 + r * Math.cos(rad), 130 + r * Math.sin(rad)]);
        }
        const d = pts.map((p, ii) => (ii === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
        return <path key={i} d={d} fill="none" stroke={color} strokeWidth={1.2} opacity={0.65} clipPath="url(#p3clip)" />;
      })}
      <circle cx={430} cy={130} r={4} fill={color} />

      {/* Labels */}
      {panels.map((p, i) => (
        <text key={i} x={p.cx} y={H - 8} fill={p.color} fontSize={10} textAnchor="middle" fontWeight={600}>{p.label}</text>
      ))}
    </svg>
  );
}

/* ─── SVG 5: Damped Oscillator ─── */
function DampedOscillatorSVG() {
  const W = 520, H = 260;
  const toSx = t => 30 + (t / 12) * (W - 60);
  const toSy = y => H / 2 - y * 90;

  const overdamped = [];
  const critical = [];
  const underdamped = [];

  for (let i = 0; i <= 120; i++) {
    const t = (i / 120) * 12;
    // overdamped: y = e^(-0.5t)(cosh(0.3t))
    overdamped.push([toSx(t), toSy(Math.exp(-1.5 * t) * (1 + 0.5 * t))]);
    // critically damped: y = (1+t)e^(-t)
    critical.push([toSx(t), toSy((1 + t) * Math.exp(-t))]);
    // underdamped: y = e^(-0.3t)cos(2t)
    underdamped.push([toSx(t), toSy(Math.exp(-0.3 * t) * Math.cos(2 * t))]);
  }

  const toD = pts => pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      <line x1={30} y1={H / 2} x2={W - 30} y2={H / 2} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={30} y1={20} x2={30} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      <defs>
        <clipPath id="dampclip"><rect x={30} y={20} width={W - 60} height={H - 40} /></clipPath>
      </defs>
      <path d={toD(overdamped)} fill="none" stroke="#f97316" strokeWidth={2} clipPath="url(#dampclip)" />
      <path d={toD(critical)} fill="none" stroke="#f59e0b" strokeWidth={2} clipPath="url(#dampclip)" />
      <path d={toD(underdamped)} fill="none" stroke={color} strokeWidth={2} clipPath="url(#dampclip)" />
      {/* legend */}
      <rect x={W - 160} y={30} width={130} height={70} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" />
      <line x1={W - 150} y1={50} x2={W - 130} y2={50} stroke="#f97316" strokeWidth={2} />
      <text x={W - 125} y={54} fill="var(--text-primary)" fontSize={10}>Superam.</text>
      <line x1={W - 150} y1={68} x2={W - 130} y2={68} stroke="#f59e0b" strokeWidth={2} />
      <text x={W - 125} y={72} fill="var(--text-primary)" fontSize={10}>Crít. am.</text>
      <line x1={W - 150} y1={86} x2={W - 130} y2={86} stroke={color} strokeWidth={2} />
      <text x={W - 125} y={90} fill="var(--text-primary)" fontSize={10}>Subeam.</text>
      <text x={W / 2} y={H - 2} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Oscilador amortecido: ay'' + by' + cy = 0</text>
    </svg>
  );
}

/* ─── SVG 6: Euler vs Exact ─── */
function EulerVsExactSVG() {
  const W = 520, H = 260;
  const toSx = t => 30 + (t / 3) * (W - 60);
  const toSy = y => H - 20 - ((y - 0.5) / 10) * (H - 40);

  // dy/dt = y, y(0)=1 => exact: y=e^t
  // Euler with h=0.5
  const exact = [];
  for (let i = 0; i <= 60; i++) {
    const t = (i / 60) * 3;
    exact.push([toSx(t), toSy(Math.exp(t))]);
  }

  const eulerH05 = [[0, 1]];
  let y = 1;
  for (let i = 0; i < 6; i++) {
    y = y + 0.5 * y;
    eulerH05.push([(i + 1) * 0.5, y]);
  }

  const eulerH025 = [[0, 1]];
  let y2 = 1;
  for (let i = 0; i < 12; i++) {
    y2 = y2 + 0.25 * y2;
    eulerH025.push([(i + 1) * 0.25, y2]);
  }

  const toD = pts => pts.map((p, i) => (i === 0 ? `M${toSx(p[0]).toFixed(1)},${toSy(p[1]).toFixed(1)}` : `L${toSx(p[0]).toFixed(1)},${toSy(p[1]).toFixed(1)}`)).join(' ');
  const exactD = exact.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      <line x1={30} y1={H - 20} x2={W - 30} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={30} y1={20} x2={30} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      <defs>
        <clipPath id="eulerclip"><rect x={30} y={20} width={W - 60} height={H - 40} /></clipPath>
      </defs>
      <path d={exactD} fill="none" stroke="#f97316" strokeWidth={2.5} clipPath="url(#eulerclip)" />
      <path d={toD(eulerH05)} fill="none" stroke={color} strokeWidth={2} strokeDasharray="5,3" clipPath="url(#eulerclip)" />
      <path d={toD(eulerH025)} fill="none" stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="3,2" clipPath="url(#eulerclip)" />
      {/* dots */}
      {eulerH05.map((p, i) => (
        <circle key={i} cx={toSx(p[0])} cy={toSy(p[1])} r={3} fill={color} />
      ))}
      {/* legend */}
      <rect x={35} y={25} width={145} height={65} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" />
      <line x1={45} y1={43} x2={65} y2={43} stroke="#f97316" strokeWidth={2} />
      <text x={70} y={47} fill="var(--text-primary)" fontSize={10}>Exata: y = e^t</text>
      <line x1={45} y1={61} x2={65} y2={61} stroke={color} strokeWidth={2} strokeDasharray="5,3" />
      <text x={70} y={65} fill="var(--text-primary)" fontSize={10}>Euler h = 0.5</text>
      <line x1={45} y1={79} x2={65} y2={79} stroke="#f59e0b" strokeWidth={2} strokeDasharray="3,2" />
      <text x={70} y={83} fill="var(--text-primary)" fontSize={10}>Euler h = 0.25</text>
      <text x={W / 2} y={H - 2} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Acumulação de erro no método de Euler</text>
    </svg>
  );
}

/* ─── SVG 7: Bifurcation Diagram ─── */
function BifurcationSVG() {
  const W = 520, H = 260;
  const toSx = r => 30 + ((r + 0.5) / 3) * (W - 60);
  const toSy = y => H / 2 - y * 80;

  // Normal form: dy/dt = ry - y^3
  // Equilibria: y*=0 (always), y* = ±sqrt(r) for r&gt;0
  const stableUp = [], stableDown = [], unstable = [], zeroStable = [], zeroUnstable = [];

  for (let i = 0; i <= 80; i++) {
    const r = -0.5 + (i / 80) * 3;
    if (r >= 0) {
      stableUp.push([toSx(r), toSy(Math.sqrt(r))]);
      stableDown.push([toSx(r), toSy(-Math.sqrt(r))]);
      zeroUnstable.push([toSx(r), toSy(0)]);
    } else {
      zeroStable.push([toSx(r), toSy(0)]);
    }
  }

  const toD = pts => pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      <line x1={30} y1={H / 2} x2={W - 30} y2={H / 2} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={toSx(0)} y1={20} x2={toSx(0)} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4,2" />
      <text x={toSx(0) + 5} y={28} fill="var(--text-secondary)" fontSize={10}>r = 0</text>
      <path d={toD(stableUp)} fill="none" stroke={color} strokeWidth={2.5} />
      <path d={toD(stableDown)} fill="none" stroke={color} strokeWidth={2.5} />
      <path d={toD(zeroStable)} fill="none" stroke="#f97316" strokeWidth={2.5} />
      <path d={toD(zeroUnstable)} fill="none" stroke="#64748b" strokeWidth={2} strokeDasharray="5,3" />
      <text x={W - 35} y={H / 2 - 8} fill="var(--text-secondary)" fontSize={11} textAnchor="end">r</text>
      <text x={toSx(0) + 8} y={30} fill="var(--text-secondary)" fontSize={11}>y*</text>
      <text x={W / 2} y={H - 2} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Bifurcação de forquilha: dy/dt = ry - y³</text>
    </svg>
  );
}

/* ─── SVG 8: ResNet vs Euler ─── */
function ResNetEulerSVG() {
  const W = 520, H = 200;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />

      {/* Left: ResNet block */}
      <text x={130} y={22} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600}>Bloco ResNet</text>
      {/* boxes */}
      {[50, 100, 150].map((y, i) => (
        <rect key={i} x={70} y={y} width={120} height={30} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
      ))}
      <text x={130} y={70} textAnchor="middle" dominantBaseline="middle" fill="var(--text-primary)" fontSize={10}>h(t)</text>
      <text x={130} y={120} textAnchor="middle" dominantBaseline="middle" fill="var(--text-primary)" fontSize={10}>F(h(t), θ)</text>
      <text x={130} y={170} textAnchor="middle" dominantBaseline="middle" fill="var(--text-primary)" fontSize={10}>h(t+1) = h(t) + F</text>
      {/* arrows */}
      <line x1={130} y1={80} x2={130} y2={100} stroke="var(--text-secondary)" strokeWidth={1.5} markerEnd="url(#arr)" />
      <line x1={130} y1={130} x2={130} y2={150} stroke={color} strokeWidth={1.5} markerEnd="url(#arr)" />
      {/* skip connection */}
      <path d="M75,65 Q40,120 75,165" fill="none" stroke="#f97316" strokeWidth={1.5} strokeDasharray="4,2" />

      {/* Divider */}
      <line x1={260} y1={30} x2={260} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />

      {/* Right: Euler step */}
      <text x={390} y={22} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600}>Passo de Euler</text>
      {[50, 100, 150].map((y, i) => (
        <rect key={i} x={330} y={y} width={120} height={30} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      ))}
      <text x={390} y={70} textAnchor="middle" dominantBaseline="middle" fill="var(--text-primary)" fontSize={10}>y(t)</text>
      <text x={390} y={120} textAnchor="middle" dominantBaseline="middle" fill="var(--text-primary)" fontSize={10}>h · f(y(t), t)</text>
      <text x={390} y={170} textAnchor="middle" dominantBaseline="middle" fill="var(--text-primary)" fontSize={10}>y(t+h) = y(t) + h·f</text>
      <line x1={390} y1={80} x2={390} y2={100} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={390} y1={130} x2={390} y2={150} stroke="#f97316" strokeWidth={1.5} />

      <defs>
        <marker id="arr" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── SVG 9: Continuous vs Discrete Depth ─── */
function NeuralODESVG() {
  const W = 520, H = 220;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />

      {/* Discrete: stacked layers */}
      <text x={110} y={22} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600}>Rede discreta</text>
      {[40, 75, 110, 145, 180].map((y, i) => (
        <rect key={i} x={30} y={y} width={160} height={22} rx={4} fill={i % 2 === 0 ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'} stroke={color} strokeWidth={1} />
      ))}
      {[40, 75, 110, 145, 180].map((y, i) => (
        <text key={i} x={110} y={y + 14} textAnchor="middle" fill="var(--text-primary)" fontSize={9}>Camada {i + 1}</text>
      ))}

      {/* Divider */}
      <line x1={260} y1={30} x2={260} y2={H - 10} stroke="var(--text-secondary)" strokeWidth={1} />

      {/* Continuous: smooth curve */}
      <text x={390} y={22} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600}>Neural ODE (contínuo)</text>
      {/* draw a smooth flowing path */}
      <path d="M310,40 C340,60 360,50 380,80 C400,110 360,130 390,160 C420,185 450,170 470,190" fill="none" stroke="#f97316" strokeWidth={3} />
      {/* dots along path */}
      {[[310,40],[345,63],[380,80],[390,115],[390,160],[470,190]].map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={4} fill="#f97316" opacity={0.8} />
      ))}
      <text x={390} y={210} textAnchor="middle" fill="var(--text-secondary)" fontSize={10}>dh/dt = f(h(t), t, θ)</text>
    </svg>
  );
}

/* ─── SVG 10: Adjoint Trajectories ─── */
function AdjointSVG() {
  const W = 520, H = 240;
  const toSx = t => 40 + (t / 4) * (W - 80);
  const toSy = (y, base, scale) => base - y * scale;

  const fwdPts = [], adjPts = [];
  for (let i = 0; i <= 80; i++) {
    const t = (i / 80) * 4;
    fwdPts.push([toSx(t), toSy(Math.exp(0.5 * t), 80, 10)]);
    adjPts.push([toSx(t), toSy(Math.exp(-0.5 * t) * 2, 180, 20)]);
  }

  const toD = pts => pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />

      {/* Forward pass */}
      <text x={40} y={18} fill={color} fontSize={11} fontWeight={600}>Passagem direta: h(t)</text>
      <line x1={40} y1={80} x2={W - 40} y2={80} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={toD(fwdPts)} fill="none" stroke={color} strokeWidth={2.5} />
      <circle cx={toSx(0)} cy={toSy(1, 80, 40)} r={4} fill={color} />
      <circle cx={toSx(4)} cy={toSy(Math.exp(2), 80, 40)} r={4} fill={color} />
      <text x={toSx(0) + 5} y={toSy(1, 80, 40) - 6} fill={color} fontSize={9}>t₀</text>
      <text x={toSx(4) - 15} y={toSy(Math.exp(2), 80, 40) - 6} fill={color} fontSize={9}>T</text>

      {/* Adjoint */}
      <text x={40} y={138} fill="#f97316" fontSize={11} fontWeight={600}>Adjunto: a(t) = dL/dh(t)</text>
      <line x1={40} y1={180} x2={W - 40} y2={180} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={toD(adjPts)} fill="none" stroke="#f97316" strokeWidth={2.5} strokeDasharray="6,3" />
      {/* backward arrow */}
      <path d={`M${toSx(3.8)},${toSy(Math.exp(-1.9) * 2, 180, 40)} L${toSx(4)},${toSy(Math.exp(-2) * 2, 180, 40)}`} fill="none" stroke="#f97316" strokeWidth={2} markerEnd="url(#barr)" />

      <defs>
        <marker id="barr" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>

      <text x={W / 2} y={H - 2} textAnchor="middle" fill="var(--text-secondary)" fontSize={10}>da/dt = -a^T · (∂f/∂h), integrado para trás</text>
    </svg>
  );
}

/* ─── SVG 11: SDE Diffusion Paths ─── */
function DiffusionSVG() {
  const W = 520, H = 240;
  const toSx = t => 30 + (t / 5) * (W - 60);
  const toSy = y => H / 2 - y * 50;

  // Simulate a few SDE paths (pseudo-random, deterministic seed)
  const seed = [0.3, -0.5, 0.7, -0.2, 0.6, -0.4, 0.8, -0.1, 0.5, -0.6,
                0.2, -0.3, 0.9, -0.7, 0.4, -0.8, 0.1, -0.9, 0.6, -0.4];
  const makePath = (offset) => {
    const pts = [[0, offset]];
    let y = offset;
    for (let i = 1; i <= 50; i++) {
      const t = (i / 50) * 5;
      const dW = seed[(i + Math.round(offset * 10)) % seed.length] * 0.4;
      y = y * Math.exp(-0.3 * 0.1) + dW;
      pts.push([t, y]);
    }
    return pts.map((p, i) => (i === 0 ? `M${toSx(p[0]).toFixed(1)},${toSy(p[1]).toFixed(1)}` : `L${toSx(p[0]).toFixed(1)},${toSy(p[1]).toFixed(1)}`)).join(' ');
  };

  // Envelope
  const envUp = [], envDown = [];
  for (let i = 0; i <= 50; i++) {
    const t = (i / 50) * 5;
    const sigma = Math.sqrt(1 - Math.exp(-0.6 * t)) * 1.2;
    envUp.push([toSx(t), toSy(sigma)]);
    envDown.push([toSx(t), toSy(-sigma)]);
  }
  const envD = [...envUp, ...envDown.reverse()];
  const envPath = envD.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ') + 'Z';

  const offsets = [-0.8, -0.3, 0.1, 0.5, 0.9];

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" />
      <path d={envPath} fill="rgba(249,115,22,0.10)" stroke="none" />
      <line x1={30} y1={H / 2} x2={W - 30} y2={H / 2} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={30} y1={20} x2={30} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      <defs>
        <clipPath id="sdeclip"><rect x={30} y={20} width={W - 60} height={H - 40} /></clipPath>
      </defs>
      {offsets.map((o, i) => (
        <path key={i} d={makePath(o)} fill="none" stroke={color} strokeWidth={1.3} opacity={0.55 + i * 0.08} clipPath="url(#sdeclip)" />
      ))}
      <text x={W / 2} y={H - 2} textAnchor="middle" fill="var(--text-secondary)" fontSize={11}>Caminhos de difusão: dy = f dt + g dW</text>
    </svg>
  );
}

/* ─── Main Component ─── */
export default function CALC10() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Cálculo</Link>

      <div style={S.tag}>MÓDULO 10</div>
      <h1 style={S.h1}>Equações Diferenciais Ordinárias (EDOs)</h1>
      <p style={S.lead}>
        EDOs descrevem como quantidades mudam ao longo do tempo. Da física ao aprendizado de máquina moderno —
        Neural ODEs, modelos de difusão, descida de gradiente — as EDOs estão na base de todos esses avanços.
        Este módulo constrói intuição geométrica, métodos analíticos e numéricos, e conexões diretas com ML.
      </p>

      {/* ─── Section 1 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O que são EDOs</h2>
        <p style={S.p}>
          Uma Equação Diferencial Ordinária relaciona uma função desconhecida com as suas derivadas. A forma
          geral de primeira ordem é:
        </p>
        <div style={formula}><BlockMath math="\frac{dy}{dt} = f(y, t)" /></div>
        <p style={S.p}>
          A <strong>ordem</strong> da EDO é a ordem da derivada mais alta presente. Uma EDO de ordem n pode
          sempre ser reescrita como um sistema de n EDOs de primeira ordem.
        </p>

        <h3 style={S.h3}>Classificação</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Exemplo</th>
              <th style={S.th}>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Linear</td>
              <td style={S.td}>y' + P(t)y = Q(t)</td>
              <td style={S.td}>Coeficientes não dependem de y; superposição válida</td>
            </tr>
            <tr>
              <td style={S.td}>Não-linear</td>
              <td style={S.td}>dy/dt = y(1 - y)</td>
              <td style={S.td}>Sem superposição; pode ter caos, bifurcações</td>
            </tr>
            <tr>
              <td style={S.td}>Autônoma</td>
              <td style={S.td}>dy/dt = f(y)</td>
              <td style={S.td}>f não depende explicitamente de t</td>
            </tr>
            <tr>
              <td style={S.td}>Separável</td>
              <td style={S.td}>dy/dt = g(y)h(t)</td>
              <td style={S.td}>Variáveis separáveis; integrável diretamente</td>
            </tr>
          </tbody>
        </table>

        <div style={svgWrap}><DirectionFieldSVG /></div>
        <div style={S.note}>
          O campo direcional mostra a tangente da solução em cada ponto (t, y). As curvas solução são
          tangentes a cada seta — aqui para dy/dt = y - t, cuja solução exata é y = Ce^t + t + 1.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 2 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. EDOs Separáveis</h2>
        <p style={S.p}>
          Uma EDO é <strong>separável</strong> se pudermos escrever dy/dt = g(y) · h(t). Separando:
        </p>
        <div style={formula}><BlockMath math="\frac{dy}{g(y)} = h(t)\,dt" /></div>
        <p style={S.p}>Integramos ambos os lados para obter a solução implícita G(y) = H(t) + C.</p>

        <h3 style={S.h3}>Crescimento Exponencial</h3>
        <p style={S.p}>
          Para dy/dt = ky, separamos: dy/y = k dt → ln|y| = kt + C → y = Ae^(kt).
          Com k {">"} 0: crescimento; k {"<"} 0: decaimento.
        </p>

        <h3 style={S.h3}>Crescimento Logístico</h3>
        <p style={S.p}>
          Quando recursos são limitados, o modelo logístico incorpora uma capacidade de carga K:
        </p>
        <div style={formula}><BlockMath math="\frac{dy}{dt} = r \cdot y \cdot \left(1 - \frac{y}{K}\right)" /></div>
        <p style={S.p}>
          A solução é y(t) = K / (1 + ((K - y₀)/y₀) · e^(-rt)), formando a característica curva S.
          Para y {"<"} K/2 o crescimento acelera; para y {">"} K/2 desacelera até a saturação.
        </p>

        <div style={svgWrap}><LogisticSVG /></div>
        <div style={S.note}>
          A curva tracejada mostra o crescimento exponencial puro (sem limitação). As curvas coloridas
          mostram diferentes condições iniciais convergindo para K com a forma de S.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 3 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. EDOs Lineares de 1ª Ordem</h2>
        <p style={S.p}>
          A forma padrão é y' + P(x)y = Q(x). O método do <strong>fator integrante</strong> multiplica
          ambos os lados por μ(x) = e^(∫P(x)dx), transformando o lado esquerdo numa derivada exata:
        </p>
        <div style={formula}><BlockMath math="\frac{d}{dx}[\mu(x) \cdot y] = \mu(x) \cdot Q(x)" /></div>
        <p style={S.p}>Integrando: μ(x) · y = ∫ μ(x) Q(x) dx + C, logo y = (1/μ) [∫μQ dx + C].</p>

        <h3 style={S.h3}>EMA como EDO Linear</h3>
        <p style={S.p}>
          A Exponential Moving Average (EMA) usada no Adam é a versão discreta de uma EDO linear:
        </p>
        <div style={formula}><BlockMath math="\frac{dm}{dt} = -\beta m + (1-\beta)g \quad \to \quad \text{discreto: } m = \beta m + (1-\beta)g" /></div>
        <p style={S.p}>
          A solução contínua é m(t) = e^(-βt)·m₀ + (1-β)∫e^(-β(t-s))g(s)ds — uma convolução com
          kernel exponencial que "esquece" gradientes antigos.
        </p>

        <div style={svgWrap}><LinearODESVG /></div>

        
          <strong>Estrutura geral da solução:</strong> a solução da EDO linear inhomogénea é sempre
          <InlineMath math="y = y_{\text{hom}} + y_{\text{part}}" />, onde <InlineMath math="y_{\text{hom}} = Ce^{-\int P\,dx}" /> é a família homogénea (<InlineMath math="C \in \mathbb{R}" />).
        
      </section>

      <hr style={S.divider} />

      {/* ─── Section 4 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Sistemas de EDOs</h2>
        <p style={S.p}>
          Um sistema de n EDOs lineares de primeira ordem tem a forma matricial dy/dt = Ay, onde
          A ∈ ℝ^(n×n). A solução formal é:
        </p>
        <div style={formula}><BlockMath math="y(t) = e^{At} \cdot y_0" /></div>
        <p style={S.p}>
          onde e^(At) é a exponencial de matriz. Na prática, diagonalizamos A = PDP⁻¹ →
          e^(At) = P e^(Dt) P⁻¹, onde e^(Dt) = diag(e^(λ₁t), ..., e^(λₙt)).
        </p>

        <h3 style={S.h3}>Estabilidade via Valores Próprios</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Condição em λ</th>
              <th style={S.th}>Comportamento</th>
              <th style={S.th}>Retrato de fase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Re(λ) {"<"} 0 (todos)</td>
              <td style={S.td}>Estável; y → 0</td>
              <td style={S.td}>Espiral/nó estável</td>
            </tr>
            <tr>
              <td style={S.td}>Re(λ) {">"} 0 (algum)</td>
              <td style={S.td}>Instável; y → ∞</td>
              <td style={S.td}>Nó/foco instável</td>
            </tr>
            <tr>
              <td style={S.td}>λ mistos (sinais opostos)</td>
              <td style={S.td}>Ponto de sela</td>
              <td style={S.td}>Hipérboles</td>
            </tr>
            <tr>
              <td style={S.td}>Re(λ) = 0 (puro imaginário)</td>
              <td style={S.td}>Centro (oscilação pura)</td>
              <td style={S.td}>Elipses fechadas</td>
            </tr>
          </tbody>
        </table>

        <div style={svgWrap}><PhasePortraitSVG /></div>
        <div style={S.note}>
          Retratos de fase 2D: espiral estável (Re(λ) {"<"} 0, Im(λ) ≠ 0), ponto de sela (λ₁ {"<"} 0 {"<"} λ₂),
          nó instável (λ₁, λ₂ {">"} 0 reais).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 5 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. EDOs de 2ª Ordem</h2>
        <p style={S.p}>
          A forma homogénea ay'' + by' + cy = 0 aparece em mecânica (massa-mola-amortecedor),
          circuitos RLC e modelos de oscilação. A equação característica ar² + br + c = 0
          determina o comportamento:
        </p>

        <div style={formula}><BlockMath math="r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" /></div>

        <h3 style={S.h3}>Três Casos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Discriminante</th>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Solução geral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>b² - 4ac {">"} 0</td>
              <td style={S.td}>Superamortecido</td>
              <td style={S.td}>C₁e^(r₁t) + C₂e^(r₂t)</td>
            </tr>
            <tr>
              <td style={S.td}>b² - 4ac = 0</td>
              <td style={S.td}>Criticamente amortecido</td>
              <td style={S.td}>(C₁ + C₂t)e^(rt)</td>
            </tr>
            <tr>
              <td style={S.td}>b² - 4ac {"<"} 0</td>
              <td style={S.td}>Subamortecido</td>
              <td style={S.td}>e^(αt)(C₁cos(ωt) + C₂sin(ωt))</td>
            </tr>
          </tbody>
        </table>

        <div style={svgWrap}><DampedOscillatorSVG /></div>
        <div style={S.note}>
          O amortecimento crítico converge mais rapidamente para zero sem oscilar — ideal em sistemas de
          controlo que precisam de resposta rápida sem sobressinal (e.g. suspensões de automóveis).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 6 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Métodos Numéricos</h2>
        <p style={S.p}>
          A maioria das EDOs não tem solução analítica fechada. Os métodos numéricos aproximam a solução
          passo a passo a partir da condição inicial y(t₀) = y₀.
        </p>

        <h3 style={S.h3}>Método de Euler</h3>
        <div style={formula}><BlockMath math="y_{n+1} = y_n + h \cdot f(t_n, y_n)" /></div>
        <p style={S.p}>
          Erro local O(h²), erro global O(h). Simples mas acumula erro rapidamente.
          Requer h pequeno para estabilidade em EDOs rígidas.
        </p>

        <h3 style={S.h3}>Runge-Kutta de 4ª Ordem (RK4)</h3>
                <p style={S.p}>
          Erro global O(h⁴) — muito mais preciso que Euler com o mesmo passo. O RK4 é o "cavalo de
          batalha" de solucionadores numéricos.
        </p>

        <div style={svgWrap}><EulerVsExactSVG /></div>

        <h3 style={S.h3}>scipy.integrate.solve_ivp</h3>
        
        <div style={S.note}>
          Métodos adaptativos (RK45, DOP853) ajustam h automaticamente para manter o erro abaixo de
          uma tolerância. Para EDOs rígidas (stiff) prefira Radau ou BDF.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 7 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Estabilidade e Bifurcações</h2>
        <p style={S.p}>
          Um <strong>ponto de equilíbrio</strong> y* satisfaz f(y*) = 0. Para analisar a sua estabilidade,
          linearizamos: perturbação u = y - y*, então du/dt ≈ f'(y*) · u.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>f'(y*)</th>
              <th style={S.th}>Estabilidade</th>
              <th style={S.th}>Intuição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>f'(y*) {"<"} 0</td>
              <td style={S.td}>Estável (atractor)</td>
              <td style={S.td}>Perturbações decaem para zero</td>
            </tr>
            <tr>
              <td style={S.td}>f'(y*) {">"} 0</td>
              <td style={S.td}>Instável (repulsor)</td>
              <td style={S.td}>Perturbações crescem</td>
            </tr>
            <tr>
              <td style={S.td}>f'(y*) = 0</td>
              <td style={S.td}>Marginalmente estável</td>
              <td style={S.td}>Análise de ordem superior necessária</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Gradiente Descendente como EDO</h3>
        <p style={S.p}>
          O gradiente descendente contínuo é exactamente uma EDO:
        </p>
        <div style={formula}><BlockMath math="\frac{d\theta}{dt} = -\nabla L(\theta)" /></div>
        <p style={S.p}>
          O gradiente descendente com learning rate η é o método de Euler aplicado a esta EDO com h = η.
          A convergência depende de os valores próprios da Hessiana ∇²L(θ*) serem todos positivos —
          i.e., o mínimo ser um ponto de equilíbrio estável.
        </p>

        <h3 style={S.h3}>Bifurcações</h3>
        <p style={S.p}>
          Uma bifurcação ocorre quando a estrutura qualitativa das soluções muda ao variar um parâmetro.
          Na bifurcação de forquilha dy/dt = ry - y³: para r ≤ 0 existe apenas y*=0 (estável);
          para r {">"} 0 surgem dois novos equilíbrios estáveis em ±√r e y*=0 torna-se instável.
        </p>

        <div style={svgWrap}><BifurcationSVG /></div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 8 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. ResNets como Método de Euler</h2>
        <p style={S.p}>
          A conexão residual de uma ResNet tem uma forma notável:
        </p>
        <div style={formula}><BlockMath math="h(t+1) = h(t) + F(h(t), \theta)" /></div>
        <p style={S.p}>
          Isto é <em>exactamente</em> o método de Euler com passo h=1, aplicado à EDO dh/dt = F(h, θ).
          Uma rede mais profunda equivale a um passo h mais fino — melhor discretização da EDO subjacente.
        </p>

        <div style={svgWrap}><ResNetEulerSVG /></div>

        <h3 style={S.h3}>Implicações</h3>
        
          <strong>Estabilidade numérica da ResNet:</strong> a análise de Euler garante que, se <InlineMath math="F" /> for
          Lipschitz com constante <InlineMath math="L" />, a propagação de gradiente é estável para passos pequenos o suficiente.
          É por isso que as ResNets treinam mais facilmente que redes profundas sem skip connections.
        

        <p style={S.p}>
          Levando esta ideia ao limite — infinitamente muitas camadas com passo → 0 — chegamos às
          Neural ODEs, onde a transformação da representação é descrita por uma EDO contínua.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 9 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Neural ODEs</h2>
        <p style={S.p}>
          Introduzidas por Chen et al. (2018), as Neural ODEs substituem a sequência discreta de camadas
          por uma EDO contínua parametrizada por uma rede neuronal:
        </p>
        <div style={formula}><BlockMath math="\frac{dh}{dt} = f(h(t), t, \theta)" /></div>
        <p style={S.p}>
          O "forward pass" é uma chamada a um solucionador de EDOs (e.g. RK45) desde t₀ até T.
          A saída final h(T) é passada ao classificador.
        </p>

        <div style={svgWrap}><NeuralODESVG /></div>

        <h3 style={S.h3}>Vantagens</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Característica</th>
              <th style={S.th}>Redes Discretas</th>
              <th style={S.th}>Neural ODEs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Profundidade</td>
              <td style={S.td}>Fixa (inteira)</td>
              <td style={S.td}>Contínua; adaptável</td>
            </tr>
            <tr>
              <td style={S.td}>Memória (treino)</td>
              <td style={S.td}>O(profundidade)</td>
              <td style={S.td}>O(1) com método adjunto</td>
            </tr>
            <tr>
              <td style={S.td}>Parâmetros</td>
              <td style={S.td}>Cresce com profundidade</td>
              <td style={S.td}>Fixos (partilhados em t)</td>
            </tr>
            <tr>
              <td style={S.td}>Fluxo normalizante</td>
              <td style={S.td}>Requer jacobiano</td>
              <td style={S.td}>Trace via instantaneous change of variables</td>
            </tr>
          </tbody>
        </table>

              </section>

      <hr style={S.divider} />

      {/* ─── Section 10 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Método Adjunto</h2>
        <p style={S.p}>
          Para treinar uma Neural ODE precisamos de gradientes dL/dθ. A retropropagação directa
          armazenaria todos os estados intermediários — O(T) memória. O método adjunto reduz isso para O(1).
        </p>

        <h3 style={S.h3}>Derivação</h3>
        <p style={S.p}>Define-se o estado adjunto a(t) = dL/dh(t). Verifica-se que a(t) satisfaz a EDO adjunta:</p>
        <div style={formula}><BlockMath math="\frac{da}{dt} = -a^\top \cdot \frac{\partial f}{\partial h}" /></div>
        <p style={S.p}>integrada para trás de T até t₀. O gradiente em relação aos parâmetros é então:</p>
        <div style={formula}><BlockMath math="\frac{dL}{d\theta} = -\int_{t_0}^{T} a(t)^\top \cdot \frac{\partial f}{\partial \theta}\, dt" /></div>

        <div style={svgWrap}><AdjointSVG /></div>

        <h3 style={S.h3}>Implementação</h3>
        
        <div style={S.note}>
          O custo computacional do adjunto é 2x a passagem directa (duas integrações de EDO),
          mas a economia de memória é enorme em sequências longas ou profundidade elevada.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 11 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. SDEs e Modelos de Difusão</h2>
        <p style={S.p}>
          Uma Equação Diferencial Estocástica (SDE) adiciona ruído Browniano W(t):
        </p>
        <div style={formula}><BlockMath math="dy = f(y, t)\,dt + g(y, t)\,dW" /></div>
        <p style={S.p}>
          Onde dW é um incremento Browniano com dW ~ N(0, dt). O termo f é o "drift" (determinístico)
          e g é a "difusão" (estocástico).
        </p>

        <h3 style={S.h3}>Dinâmica de Langevin</h3>
        <p style={S.p}>
          Para amostrar de uma distribuição p(x) ∝ e^(-E(x)), a dinâmica de Langevin usa:
        </p>
        <div style={formula}><BlockMath math="dx = -\nabla E(x)\,dt + \sqrt{2}\,dW" /></div>
        <p style={S.p}>
          Em equilíbrio, a distribuição estacionária é exactamente p(x). É a base do
          Langevin MCMC e de algoritmos de amostragem em modelos probabilísticos.
        </p>

        <h3 style={S.h3}>DDPM — Modelos de Difusão</h3>
        <p style={S.p}>
          O processo <strong>forward</strong> de difusão adiciona ruído gradualmente:
          x(t+1) = sqrt(1-β)·x(t) + sqrt(β)·ε, ε ~ N(0,I), até x(T) ~ N(0,I).
        </p>
        <p style={S.p}>
          O processo <strong>reverse</strong> aprende a desruídizar — uma rede neuronal aproxima
          a função de score ∇_x log p(x,t), que dirige a SDE reversa de ruído para dados reais.
        </p>
        <div style={formula}><BlockMath math="dx = \left[f(x,t) - g^2(t) \cdot \nabla_x \log p(x,t)\right] dt + g(t)\,dW" /></div>

        <div style={svgWrap}><DiffusionSVG /></div>

        <div style={S.note}>
          A envolvente vermelha mostra a distribuição marginal alargando ao longo do tempo.
          Cada linha colorida é um caminho amostral. O processo reverso (não mostrado) aprenderia
          a guiar estes caminhos de volta à distribuição de dados.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── Section 12 ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>

        <h3 style={S.h3}>Tipos de EDO e Métodos de Solução</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de EDO</th>
              <th style={S.th}>Método analítico</th>
              <th style={S.th}>Complexidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Separável</td>
              <td style={S.td}>Separar e integrar</td>
              <td style={S.td}>Baixa</td>
            </tr>
            <tr>
              <td style={S.td}>Linear 1ª ordem</td>
              <td style={S.td}>Fator integrante</td>
              <td style={S.td}>Baixa</td>
            </tr>
            <tr>
              <td style={S.td}>Linear 2ª ordem (const.)</td>
              <td style={S.td}>Equação característica</td>
              <td style={S.td}>Média</td>
            </tr>
            <tr>
              <td style={S.td}>Sistema linear</td>
              <td style={S.td}>Diagonalização, e^(At)</td>
              <td style={S.td}>Média</td>
            </tr>
            <tr>
              <td style={S.td}>Não-linear geral</td>
              <td style={S.td}>Numérico (RK4, etc.)</td>
              <td style={S.td}>Alta</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Comparação de Métodos Numéricos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Ordem</th>
              <th style={S.th}>Avaliações/passo</th>
              <th style={S.th}>Adequado para</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Euler</td>
              <td style={S.td}>O(h)</td>
              <td style={S.td}>1</td>
              <td style={S.td}>Demonstração, protótipos</td>
            </tr>
            <tr>
              <td style={S.td}>Heun (RK2)</td>
              <td style={S.td}>O(h²)</td>
              <td style={S.td}>2</td>
              <td style={S.td}>Precisão moderada</td>
            </tr>
            <tr>
              <td style={S.td}>RK4</td>
              <td style={S.td}>O(h⁴)</td>
              <td style={S.td}>4</td>
              <td style={S.td}>Geral; muito usado</td>
            </tr>
            <tr>
              <td style={S.td}>RK45 (Dormand-Prince)</td>
              <td style={S.td}>O(h⁵)</td>
              <td style={S.td}>6 (adaptativo)</td>
              <td style={S.td}>Precisão alta; Neural ODE</td>
            </tr>
            <tr>
              <td style={S.td}>BDF / Radau</td>
              <td style={S.td}>Variável</td>
              <td style={S.td}>Implícito</td>
              <td style={S.td}>EDOs rígidas (stiff)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Aplicações em Machine Learning</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo / Técnica</th>
              <th style={S.th}>Conexão com EDOs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>ResNets</td>
              <td style={S.td}>Método de Euler na forma discretizada</td>
            </tr>
            <tr>
              <td style={S.td}>Neural ODEs</td>
              <td style={S.td}>EDO contínua dh/dt = f(h,t,θ); solucionador como forward pass</td>
            </tr>
            <tr>
              <td style={S.td}>Fluxos Normalizantes Contínuos</td>
              <td style={S.td}>Mudança de variável instantânea via divergência do campo</td>
            </tr>
            <tr>
              <td style={S.td}>Modelos de Difusão (DDPM, Score)</td>
              <td style={S.td}>SDE forward/reverse; score function = gradiente log-densidade</td>
            </tr>
            <tr>
              <td style={S.td}>Gradiente Descendente</td>
              <td style={S.td}>EDO dθ/dt = -∇L discretizada com passo η</td>
            </tr>
            <tr>
              <td style={S.td}>Langevin MCMC</td>
              <td style={S.td}>SDE de Langevin; distribução estacionária = alvo</td>
            </tr>
            <tr>
              <td style={S.td}>Adam / EMA</td>
              <td style={S.td}>EDO linear de 1ª ordem para momentos do gradiente</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Código de Referência Completo</h3>
        
        <div style={S.highlight}>
          <strong>Takeaway principal:</strong> EDOs não são apenas matemática clássica — são a linguagem
          unificada que liga optimização, arquitecturas de redes neuronais, modelos generativos e inferência
          probabilística. Compreender EDOs torna transparentes os detalhes que normalmente ficam ocultos
          dentro de frameworks de deep learning.
        </div>
      </section>
    </div>
  );
}
