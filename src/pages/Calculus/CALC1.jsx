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

// SVG 1: Function approaching a limit from left and right
function LimitApproachSVG() {
  const W = 480, H = 220;
  const ox = 60, oy = 170;
  const sx = 70, sy = 55;

  // Plot points for f(x) = (x^2-1)/(x-1) = x+1 with hole at x=1
  const pts = [];
  for (let i = -50; i <= 80; i++) {
    const xv = -0.8 + i * 0.025;
    if (Math.abs(xv - 1) < 0.03) continue;
    const yv = xv + 1;
    pts.push([ox + xv * sx, oy - yv * sy]);
  }
  const d = pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  const ax = ox + 1 * sx;
  const ay = oy - 2 * sy;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      {/* Axes */}
      <line x1={ox - 10} y1={oy} x2={W - 20} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox} y1={20} x2={ox} y2={oy + 15} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* Axis labels */}
      <text x={W - 15} y={oy + 4} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">x</text>
      <text x={ox} y={14} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">f(x)</text>
      {/* Curve */}
      <path d={d} fill="none" stroke={color} strokeWidth={2.5} />
      {/* Hole at x=1, f=2 */}
      <circle cx={ax} cy={ay} r={5} fill="var(--bg-secondary)" stroke={color} strokeWidth={2} />
      {/* Vertical dashed at x=1 */}
      <line x1={ax} y1={oy} x2={ax} y2={ay - 10} stroke={color} strokeWidth={1} strokeDasharray="4,3" />
      {/* Horizontal dashed at y=2 */}
      <line x1={ox} y1={ay} x2={ax - 8} y2={ay} stroke={color} strokeWidth={1} strokeDasharray="4,3" />
      {/* Labels */}
      <text x={ax} y={oy + 14} fontSize={11} fill={color} textAnchor="middle">a</text>
      <text x={ox - 12} y={ay + 4} fontSize={11} fill={color} textAnchor="end">L</text>
      {/* Arrows from left/right */}
      <text x={ax - 30} y={ay - 28} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">x→a⁻</text>
      <text x={ax + 38} y={ay - 28} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">x→a⁺</text>
      {/* Title */}
      <text x={W / 2} y={H - 6} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">f(x) = (x²−1)/(x−1): buraco removível em x=1, limite = 2</text>
    </svg>
  );
}

// SVG 2: Epsilon-delta diagram
function EpsilonDeltaSVG() {
  const W = 480, H = 260;
  const ox = 60, oy = 210;
  const sx = 100, sy = 25;

  const pts = [];
  for (let i = 0; i <= 48; i++) {
    const xv = i * 0.05;
    const yv = 3 * xv - 1;
    pts.push([ox + xv * sx, oy - yv * sy]);
  }
  const d = pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  const ax = ox + 2 * sx; // x=2
  const Ly = oy - 5 * sy; // f(2)=5

  const eps = 0.5 * sy;
  const delta = (eps / 3) * sx; // delta = eps/3

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      {/* Epsilon band (horizontal) */}
      <rect x={ox - 5} y={Ly - eps} width={W - ox} height={eps * 2} fill="rgba(249,115,22,0.10)" />
      {/* Delta band (vertical) */}
      <rect x={ax - delta} y={30} width={delta * 2} height={oy - 30} fill="rgba(249,115,22,0.10)" />
      {/* Axes */}
      <line x1={ox - 10} y1={oy} x2={W - 10} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox} y1={15} x2={ox} y2={oy + 10} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* Curve */}
      <path d={d} fill="none" stroke={color} strokeWidth={2.5} />
      {/* Dashed lines */}
      <line x1={ax} y1={oy} x2={ax} y2={Ly} stroke={color} strokeWidth={1} strokeDasharray="4,3" />
      <line x1={ox} y1={Ly} x2={ax} y2={Ly} stroke={color} strokeWidth={1} strokeDasharray="4,3" />
      {/* Epsilon labels */}
      <text x={ox - 14} y={Ly - eps + 4} fontSize={10} fill={color} textAnchor="end">L+ε</text>
      <text x={ox - 14} y={Ly + eps + 4} fontSize={10} fill={color} textAnchor="end">L−ε</text>
      <text x={ox - 8} y={Ly + 4} fontSize={10} fill={color} textAnchor="end">L</text>
      {/* Delta labels */}
      <text x={ax - delta} y={oy + 13} fontSize={10} fill={color} textAnchor="middle">a−δ</text>
      <text x={ax} y={oy + 13} fontSize={10} fill={color} textAnchor="middle">a</text>
      <text x={ax + delta} y={oy + 13} fontSize={10} fill={color} textAnchor="middle">a+δ</text>
      {/* Title */}
      <text x={W / 2} y={H - 4} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">Definição ε-δ: para todo ε{'>'} 0 existe δ{'>'} 0 tal que |f(x)−L|{'<'}ε quando 0{'<'}|x−a|{'<'}δ</text>
    </svg>
  );
}

// SVG 3: Squeeze theorem
function SqueezeSVG() {
  const W = 440, H = 200;
  const ox = 40, oy = 130;
  const sx = 55, sy = 50;

  const range = [];
  for (let i = -50; i <= 50; i++) range.push(i * 0.06);

  const ptsG = [], ptsF = [], ptsH = [];
  range.forEach(xv => {
    if (Math.abs(xv) < 0.001) return;
    ptsG.push([ox + (xv + 0) * sx + 200, oy - (xv * xv) * sy]);
    ptsF.push([ox + (xv + 0) * sx + 200, oy - (xv * Math.sin(1 / xv)) * sy * 0.9 - (xv * xv) * sy * 0.05]);
    ptsH.push([ox + (xv + 0) * sx + 200, oy - (-xv * xv) * sy]);
  });

  const mkD = pts => pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      <line x1={10} y1={oy} x2={W - 10} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox + 200} y1={20} x2={ox + 200} y2={oy + 15} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={mkD(ptsH)} fill="none" stroke="#f97316" strokeWidth={2} />
      <path d={mkD(ptsG)} fill="none" stroke="#f59e0b" strokeWidth={2} />
      <path d={mkD(ptsF)} fill="none" stroke={color} strokeWidth={1.5} strokeDasharray="5,3" />
      <circle cx={ox + 200} cy={oy} r={4} fill={color} />
      <text x={W - 10} y={oy - 30} fontSize={10} fill="#f97316" textAnchor="end">h(x) = x²</text>
      <text x={W - 10} y={oy + 30} fontSize={10} fill="#f59e0b" textAnchor="end">g(x) = −x²</text>
      <text x={W - 10} y={oy - 10} fontSize={10} fill={color} textAnchor="end">f(x) = x·sin(1/x)</text>
      <text x={ox + 200} y={oy + 14} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">0</text>
      <text x={W / 2} y={H - 4} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">Teorema do Sanduíche: g ≤ f ≤ h e lim g = lim h = 0 ⟹ lim f = 0</text>
    </svg>
  );
}

// SVG 4: Growth rates
function GrowthRatesSVG() {
  const W = 460, H = 220;
  const ox = 50, oy = 190;
  const sx = 55, sy = 1.2;

  const xs = [];
  for (let i = 0; i <= 40; i++) xs.push(0.2 + i * 0.12);

  const ptsPoly = [], ptsExp = [], ptsLog = [];
  xs.forEach(xv => {
    const px = ox + xv * sx;
    const polyY = xv * xv;
    const expY = Math.exp(xv * 0.5);
    const logY = Math.log(xv + 1) * 3;
    if (oy - polyY * sy > 10) ptsPoly.push([px, oy - polyY * sy]);
    if (oy - expY * sy > 10) ptsExp.push([px, oy - expY * sy]);
    ptsLog.push([px, oy - logY * sy]);
  });

  const mkD = pts => pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      <line x1={ox - 10} y1={oy} x2={W - 10} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox} y1={10} x2={ox} y2={oy + 10} stroke="var(--text-secondary)" strokeWidth={1} />
      {ptsPoly.length > 1 && <path d={mkD(ptsPoly)} fill="none" stroke="#f59e0b" strokeWidth={2} />}
      {ptsExp.length > 1 && <path d={mkD(ptsExp)} fill="none" stroke="#f97316" strokeWidth={2} />}
      {ptsLog.length > 1 && <path d={mkD(ptsLog)} fill="none" stroke="#f97316" strokeWidth={2} />}
      <text x={W - 15} y={60} fontSize={11} fill="#f97316" textAnchor="end">eˣ</text>
      <text x={W - 15} y={100} fontSize={11} fill="#f59e0b" textAnchor="end">x²</text>
      <text x={W - 15} y={160} fontSize={11} fill="#f97316" textAnchor="end">log(x)</text>
      <text x={W / 2} y={H - 4} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">Corrida de crescimento: eˣ domina x², que domina log(x)</text>
    </svg>
  );
}

// SVG 5: Discontinuity types
function DiscontinuitySVG() {
  const W = 480, H = 200;
  const panelW = 120;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      {/* Panel 1: Continuous */}
      <text x={60} y={18} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">Contínua</text>
      <line x1={10} y1={160} x2={110} y2={160} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={20} y1={170} x2={20} y2={30} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d="M25,140 Q50,60 95,70" fill="none" stroke={color} strokeWidth={2.5} />

      {/* Panel 2: Removable discontinuity */}
      <text x={180} y={18} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">Removível</text>
      <line x1={130} y1={160} x2={230} y2={160} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={140} y1={170} x2={140} y2={30} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d="M145,140 L175,85" fill="none" stroke={color} strokeWidth={2.5} />
      <path d="M185,85 L215,50" fill="none" stroke={color} strokeWidth={2.5} />
      <circle cx={180} cy={85} r={4} fill="var(--bg-secondary)" stroke={color} strokeWidth={2} />
      <circle cx={180} cy={110} r={4} fill={color} />

      {/* Panel 3: Jump discontinuity */}
      <text x={300} y={18} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">Salto</text>
      <line x1={250} y1={160} x2={350} y2={160} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={260} y1={170} x2={260} y2={30} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d="M265,140 L295,120" fill="none" stroke={color} strokeWidth={2.5} />
      <path d="M305,80 L335,60" fill="none" stroke={color} strokeWidth={2.5} />
      <circle cx={300} cy={120} r={4} fill="var(--bg-secondary)" stroke={color} strokeWidth={2} />
      <circle cx={300} cy={80} r={4} fill={color} />

      {/* Panel 4: Infinite/essential discontinuity */}
      <text x={420} y={18} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">Infinita</text>
      <line x1={370} y1={160} x2={470} y2={160} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={380} y1={170} x2={380} y2={30} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d="M385,150 Q400,130 415,50" fill="none" stroke={color} strokeWidth={2.5} />
      <path d="M425,170 Q430,120 455,100" fill="none" stroke={color} strokeWidth={2.5} />
      <line x1={420} y1={30} x2={420} y2={170} stroke="#f97316" strokeWidth={1} strokeDasharray="4,3" />
    </svg>
  );
}

// SVG 6: IVT diagram
function IVTDiagram() {
  const W = 440, H = 210;
  const ox = 50, oy = 180;
  const sx = 80, sy = 55;

  const pts = [];
  for (let i = 0; i <= 40; i++) {
    const xv = i * 0.075;
    const yv = 0.3 * xv * xv * xv - 0.5 * xv + 1.2;
    pts.push([ox + xv * sx, oy - yv * sy]);
  }
  const d = pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');

  const fa = 1.2, fb = 0.3 * 3 * 3 * 3 * 0.075 ** 3 * 40 * 40 * 40 / 1000;
  // Use direct coordinates for a=0, b=3
  const xA = ox, xB = ox + 3 * sx;
  const yA = oy - fa * sy;
  const k = 0.6;
  const kY = oy - k * sy;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      <line x1={ox - 10} y1={oy} x2={W - 10} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox} y1={15} x2={ox} y2={oy + 10} stroke="var(--text-secondary)" strokeWidth={1} />
      <path d={d} fill="none" stroke={color} strokeWidth={2.5} />
      {/* f(a) and f(b) dashed horizontals */}
      <line x1={ox} y1={yA} x2={xA + 5} y2={yA} stroke="#f59e0b" strokeWidth={1} strokeDasharray="3,3" />
      {/* k line */}
      <line x1={ox} y1={kY} x2={W - 10} y2={kY} stroke="#f97316" strokeWidth={1} strokeDasharray="4,3" />
      {/* vertical dashed at a and b */}
      <line x1={xA} y1={oy} x2={xA} y2={yA} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      <line x1={xB} y1={oy} x2={xB} y2={oy - 0.5 * sy} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      {/* Labels */}
      <text x={xA} y={oy + 13} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">a</text>
      <text x={xB} y={oy + 13} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">b</text>
      <text x={ox - 8} y={kY + 4} fontSize={10} fill="#f97316" textAnchor="end">k</text>
      <text x={ox - 8} y={yA + 4} fontSize={10} fill="#f59e0b" textAnchor="end">f(a)</text>
      <text x={W / 2} y={H - 4} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">TVI: existe c ∈ (a,b) com f(c) = k, para qualquer k entre f(a) e f(b)</text>
    </svg>
  );
}

// SVG 7: Sequence convergence
function SequenceConvergeSVG() {
  const W = 460, H = 200;
  const ox = 50, oy = 100;
  const sx = 38, sy = 60;
  const L = 1;
  const Ly = oy - L * sy;

  const terms = [];
  for (let n = 1; n <= 10; n++) {
    const an = 1 + (n % 2 === 0 ? 1 : -1) * (1 / n);
    terms.push({ n, an });
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      <line x1={ox - 10} y1={oy + 10} x2={W - 10} y2={oy + 10} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox} y1={20} x2={ox} y2={oy + 20} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* Limit line */}
      <line x1={ox} y1={Ly} x2={W - 10} y2={Ly} stroke="#f97316" strokeWidth={1.5} strokeDasharray="6,4" />
      <text x={ox - 6} y={Ly + 4} fontSize={11} fill="#f97316" textAnchor="end">L</text>
      {/* Dots */}
      {terms.map(({ n, an }) => (
        <circle key={n} cx={ox + n * sx} cy={oy - (an - 1) * sy} r={5} fill={color} fillOpacity={0.85} />
      ))}
      {/* Lines to limit */}
      {terms.map(({ n, an }) => (
        <line key={`l${n}`} x1={ox + n * sx} y1={oy - (an - 1) * sy} x2={ox + n * sx} y2={Ly} stroke={color} strokeWidth={1} strokeDasharray="3,2" strokeOpacity={0.4} />
      ))}
      {/* n labels */}
      {[1, 3, 5, 7, 9].map(n => (
        <text key={`t${n}`} x={ox + n * sx} y={oy + 22} fontSize={10} fill="var(--text-secondary)" textAnchor="middle">{n}</text>
      ))}
      <text x={W / 2} y={H - 4} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">aₙ → L conforme n → ∞: oscilações diminuem em torno do limite</text>
    </svg>
  );
}

// SVG 8: Neural activation functions
function ActivationSVG() {
  const W = 480, H = 220;
  const ox = 60, oy = 110;
  const sx = 30, sy = 80;

  const xs = [];
  for (let i = -50; i <= 50; i++) xs.push(i * 0.12);

  const sigmoid = x => 1 / (1 + Math.exp(-x));
  const tanh = x => Math.tanh(x);
  const relu = x => Math.max(0, x);

  const mkPath = (fn, clip) => {
    const pts = xs.map(xv => {
      const yv = fn(xv);
      return [ox + xv * sx, oy - yv * sy];
    }).filter(([, y]) => y > (clip || -10) && y < H + 10);
    return pts.map((p, i) => (i === 0 ? `M${p[0].toFixed(1)},${p[1].toFixed(1)}` : `L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '1rem auto' }}>
      {/* Axes */}
      <line x1={10} y1={oy} x2={W - 10} y2={oy} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={ox} y1={15} x2={ox} y2={H - 20} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* y=0 and y=1 for reference */}
      <line x1={ox} y1={oy - sy} x2={W - 10} y2={oy - sy} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      <text x={ox - 6} y={oy - sy + 4} fontSize={10} fill="var(--text-secondary)" textAnchor="end">1</text>
      <line x1={ox} y1={oy + sy} x2={W - 10} y2={oy + sy} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,3" />
      <text x={ox - 6} y={oy + sy + 4} fontSize={10} fill="var(--text-secondary)" textAnchor="end">−1</text>
      {/* Sigmoid */}
      <path d={mkPath(sigmoid)} fill="none" stroke="#f97316" strokeWidth={2} />
      {/* Tanh */}
      <path d={mkPath(tanh)} fill="none" stroke="#fb923c" strokeWidth={2} />
      {/* ReLU */}
      <path d={mkPath(relu)} fill="none" stroke="#f59e0b" strokeWidth={2.5} strokeDasharray="6,3" />
      {/* Legend */}
      <line x1={W - 120} y1={25} x2={W - 100} y2={25} stroke="#f97316" strokeWidth={2} />
      <text x={W - 95} y={29} fontSize={11} fill="#f97316">sigmoid</text>
      <line x1={W - 120} y1={42} x2={W - 100} y2={42} stroke="#fb923c" strokeWidth={2} />
      <text x={W - 95} y={46} fontSize={11} fill="#fb923c">tanh</text>
      <line x1={W - 120} y1={59} x2={W - 100} y2={59} stroke="#f59e0b" strokeWidth={2} strokeDasharray="6,3" />
      <text x={W - 95} y={63} fontSize={11} fill="#f59e0b">ReLU</text>
      <text x={W / 2} y={H - 4} fontSize={11} fill="var(--text-secondary)" textAnchor="middle">Funções de activação: comportamento assimptótico e saturação</text>
    </svg>
  );
}

export default function CALC1() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Cálculo</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Limites e Continuidade</h1>
      <p style={S.lead}>
        O conceito de limite é a pedra angular de todo o Cálculo — e, por extensão, de toda a teoria de convergência
        em Machine Learning. Neste módulo construímos a intuição geométrica, a definição rigorosa ε-δ, as regras
        operacionais e as aplicações directas a redes neuronais e algoritmos de optimização.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Intuição de Limite</h2>
        <p style={S.p}>
          Dado uma função f e um ponto a, perguntamos: <em>para que valor L se aproxima f(x) quando x se aproxima de a?</em>{' '}
          A resposta é o limite de f em a, escrito lim(x→a) f(x) = L. O elemento crucial é que <strong>a função não
          precisa de estar definida em a</strong> — apenas a comportamento nas vizinhanças importa.
        </p>

        <LimitApproachSVG />

        <p style={S.p}>
          Considere f(x) = (x² − 1)/(x − 1). Em x = 1 a expressão é 0/0 — uma forma indeterminada. Mas para x ≠ 1
          podemos factorizar: (x−1)(x+1)/(x−1) = x+1. Portanto lim(x→1) f(x) = 2, embora f(1) não esteja definida.
          Este é um <em>buraco removível</em>.
        </p>

        
          <strong>Outro exemplo clássico:</strong> <InlineMath math="\lim_{x \to 0} \frac{\sin(x)}{x} = 1" />. Para <InlineMath math="x \neq 0" /> a função está definida, e ao
          aproximarmo-nos de zero pelos dois lados obtemos sempre 1. Este limite é fundamental em Fourier e em sinais digitais.
        

        <h3 style={S.h3}>Limites Laterais</h3>
        <p style={S.p}>
          O <strong>limite pela esquerda</strong> lim(x→a⁻) f(x) considera apenas x {'<'} a.
          O <strong>limite pela direita</strong> lim(x→a⁺) f(x) considera apenas x {'>'} a.
          O limite bilateral existe se e só se ambos os limites laterais existem e são iguais:
        </p>
        <BlockMath math="\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = L \text{ e } \lim_{x \to a^+} f(x) = L" />
        <p style={S.p}>
          Quando os limites laterais diferem (ex.: função de Heaviside em 0) dizemos que o limite bilateral
          <em> não existe</em>. Em ML isto aparece na análise de funções de perda não suaves como o hinge loss.
        </p>

        <div style={S.note}>
          <strong>Ligação a ML:</strong> A convergência de algoritmos iterativos (SGD, Adam) é formalmente um limite de
          sequências. Perguntar "o algoritmo converge?" é perguntar se esse limite existe e para onde aponta.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Definição Formal ε-δ</h2>
        <p style={S.p}>
          A definição informal de limite é intuitiva mas imprecisa. A definição rigorosa de Weierstrass elimina toda
          a ambiguidade:
        </p>

        
          <strong>Definição (Cauchy-Weierstrass):</strong> Dizemos que <InlineMath math="\lim_{x \to a} f(x) = L" /> se e só se: para todo <InlineMath math="\varepsilon > 0" />
          existe <InlineMath math="\delta > 0" /> tal que, para todo x com <InlineMath math="0 < |x - a| < \delta" />, se tem <InlineMath math="|f(x) - L| < \varepsilon" />.
        

        <EpsilonDeltaSVG />

        <p style={S.p}>
          O diagrama ilustra a ideia: qualquer banda horizontal de largura 2ε em torno de L pode ser
          acompanhada de uma banda vertical de largura 2δ em torno de a tal que a curva nunca sai da banda horizontal
          dentro da banda vertical.
        </p>

        <h3 style={S.h3}>Exemplo: Prova Formal de lim(x→2)(3x − 1) = 5</h3>
        <p style={S.p}>
          Queremos mostrar que dado qualquer ε {'>'} 0 existe δ {'>'} 0 com |( 3x−1) − 5| {'<'} ε sempre que 0 {'<'} |x−2| {'<'} δ.
        </p>
        <p style={S.p}>
          Simplificamos: |(3x−1) − 5| = |3x − 6| = 3|x − 2|. Para que 3|x−2| {'<'} ε basta |x−2| {'<'} ε/3.
          Escolhemos então δ = ε/3. Verificação: se 0 {'<'} |x−2| {'<'} δ = ε/3, então |f(x)−5| = 3|x−2| {'<'} 3·(ε/3) = ε. ∎
        </p>

        <div style={S.note}>
          <strong>Porquê importa o rigor?</strong> Toda a teoria de convergência em optimização — garantias de SGD,
          taxas de convergência de métodos de segunda ordem — assenta em provas ε-δ ou variantes funcionais (normas de
          Banach, espaços de Hilbert). Sem rigor, os argumentos colapsam em heurística.
        </div>

        <h3 style={S.h3}>Propriedades da Definição</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Enunciado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Unicidade</td>
              <td style={S.td}>Se o limite existe, é único</td>
            </tr>
            <tr>
              <td style={S.td}>Local</td>
              <td style={S.td}>Depende apenas de uma vizinhança de a, não do valor em a</td>
            </tr>
            <tr>
              <td style={S.td}>Limite vs valor</td>
              <td style={S.td}>lim f(x) pode existir mesmo que f(a) não esteja definida ou seja diferente</td>
            </tr>
            <tr>
              <td style={S.td}>Limite lateral</td>
              <td style={S.td}>Definição análoga com x {'>'} a ou x {'<'} a (sem módulo, com sinal)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Regras Algébricas de Limites</h2>
        <p style={S.p}>
          Se lim(x→a) f(x) = L e lim(x→a) g(x) = M, então podemos calcular limites de combinações algébricas
          directamente sem recorrer à definição ε-δ em cada caso:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Regra</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Condição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Soma</td>
              <td style={S.td}>lim (f + g) = L + M</td>
              <td style={S.td}>—</td>
            </tr>
            <tr>
              <td style={S.td}>Produto</td>
              <td style={S.td}>lim (f · g) = L · M</td>
              <td style={S.td}>—</td>
            </tr>
            <tr>
              <td style={S.td}>Quociente</td>
              <td style={S.td}>lim (f / g) = L / M</td>
              <td style={S.td}>M ≠ 0</td>
            </tr>
            <tr>
              <td style={S.td}>Potência</td>
              <td style={S.td}>lim (f)ⁿ = Lⁿ</td>
              <td style={S.td}>n inteiro</td>
            </tr>
            <tr>
              <td style={S.td}>Raiz</td>
              <td style={S.td}>lim √f = √L</td>
              <td style={S.td}>L ≥ 0</td>
            </tr>
            <tr>
              <td style={S.td}>Composição</td>
              <td style={S.td}>lim g(f(x)) = g(L)</td>
              <td style={S.td}>g contínua em L</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Teorema do Sanduíche (Squeeze Theorem)</h3>
        <p style={S.p}>
          Se numa vizinhança de a se tem g(x) ≤ f(x) ≤ h(x), e se lim g(x) = lim h(x) = L, então lim f(x) = L.
          A função f fica "espremida" entre g e h e não tem outra opção senão convergir para L.
        </p>

        <SqueezeSVG />

        <p style={S.p}>
          <strong>Aplicação: lim(x→0) x·sin(1/x) = 0.</strong> Temos −|x| ≤ x·sin(1/x) ≤ |x|, e ambos os extremos
          tendem para 0. Logo o limite é 0, mesmo que sin(1/x) oscile infinitamente.
        </p>

        <div style={S.highlight}>
          <strong>Limite fundamental:</strong> lim(x→0) sin(x)/x = 1. Prova geométrica: área do triângulo interno ≤
          área do sector ≤ área do triângulo externo, dividindo por sin(x)/2 e passando ao limite. Este resultado é a
          base da diferenciação de funções trigonométricas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Limites no Infinito e Comportamento Assimptótico</h2>
        <p style={S.p}>
          Quando x cresce sem limite, podemos perguntar se f(x) converge para um valor finito L — a
          <em> assímptota horizontal</em>: lim(x→+∞) f(x) = L. Isto é central para entender funções de activação e
          funções de perda à medida que os parâmetros divergem.
        </p>

        <GrowthRatesSVG />

        <h3 style={S.h3}>Hierarquia de Crescimento</h3>
        <p style={S.p}>
          Para x → +∞, as funções crescem em ordens distintas. A hierarquia estrita é:
        </p>
        <BlockMath math="\log(x) \ll x^\alpha \;(\alpha > 0) \ll e^x \ll x! \ll x^x" />
        <p style={S.p}>
          Isto significa, por exemplo, que lim(x→∞) xⁿ/eˣ = 0 para qualquer n fixo — a exponencial domina sempre
          qualquer polinómio. Esta hierarquia é exactamente a notação Big-O da teoria de complexidade computacional.
        </p>

        <h3 style={S.h3}>Formas Indeterminadas</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Forma</th>
              <th style={S.th}>Exemplo</th>
              <th style={S.th}>Estratégia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>0/0</td>
              <td style={S.td}>sin(x)/x quando x→0</td>
              <td style={S.td}>L'Hôpital, factorização</td>
            </tr>
            <tr>
              <td style={S.td}>∞/∞</td>
              <td style={S.td}>x²/eˣ quando x→∞</td>
              <td style={S.td}>L'Hôpital</td>
            </tr>
            <tr>
              <td style={S.td}>0·∞</td>
              <td style={S.td}>x·ln(x) quando x→0⁺</td>
              <td style={S.td}>Reescrever como 0/0 ou ∞/∞</td>
            </tr>
            <tr>
              <td style={S.td}>∞ − ∞</td>
              <td style={S.td}>√(x+1) − √x quando x→∞</td>
              <td style={S.td}>Racionalizar (conjugado)</td>
            </tr>
            <tr>
              <td style={S.td}>1^∞</td>
              <td style={S.td}>(1+1/n)ⁿ quando n→∞</td>
              <td style={S.td}>Logaritmo + L'Hôpital</td>
            </tr>
            <tr>
              <td style={S.td}>0⁰</td>
              <td style={S.td}>xˣ quando x→0⁺</td>
              <td style={S.td}>Logaritmo + L'Hôpital</td>
            </tr>
            <tr>
              <td style={S.td}>∞⁰</td>
              <td style={S.td}>x^(1/x) quando x→∞</td>
              <td style={S.td}>Logaritmo + L'Hôpital</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Assímptotas Verticais</h3>
        <p style={S.p}>
          Se lim(x→a) |f(x)| = +∞, a recta x = a é uma <em>assímptota vertical</em>. Exemplo: f(x) = 1/x em x = 0,
          ou f(x) = tan(x) em x = π/2. Em redes neuronais, assímptotas verticais podem surgir em funções de perda
          como a cross-entropy quando a previsão tende para 0.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Regra de L'Hôpital</h2>
        <p style={S.p}>
          A Regra de L'Hôpital (pronuncia-se "Lo-pi-tal") fornece um método sistemático para resolver formas
          indeterminadas 0/0 e ∞/∞: em vez de calcular lim f(x)/g(x) directamente, calculamos lim f'(x)/g'(x).
        </p>

        
          <strong>Teorema (L'Hôpital):</strong> Se <InlineMath math="\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0" /> (ou ambos <InlineMath math="\pm\infty" />), e se <InlineMath math="g'(x) \neq 0" />
          numa vizinhança de a, então: <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" /> desde que este último limite exista.
        

        <p style={S.p}>
          <strong>Atenção:</strong> Derivamos o numerador e denominador <em>separadamente</em> — não se aplica a regra
          do quociente.
        </p>

        <h3 style={S.h3}>Exemplos Detalhados</h3>

        <p style={S.p}><strong>Exemplo 1:</strong> lim(x→0) sin(x)/x — forma 0/0.</p>
        
        <p style={S.p}><strong>Exemplo 2:</strong> lim(x→∞) x²/eˣ — forma ∞/∞, aplicar duas vezes.</p>
        
        <p style={S.p}><strong>Exemplo 3:</strong> lim(x→0⁺) x·ln(x) — forma 0·(−∞). Reescrevemos como ln(x)/(1/x).</p>
        
        <p style={S.p}><strong>Exemplo 4:</strong> lim(x→0⁺) xˣ — forma 0⁰. Usamos a identidade xˣ = e^(x·ln x).</p>
        
        <h3 style={S.h3}>Quando L'Hôpital Falha</h3>
        <p style={S.p}>
          L'Hôpital pode falhar se as derivadas também produzem formas indeterminadas indefinidamente, ou se o limite
          de f'/g' não existe. Exemplo: lim(x→∞) x/√(x²+1) — aplicar L'Hôpital produz √(x²+1)/x, que é o inverso do
          original, criando um ciclo. Solução correcta: dividir por x — lim x/√(x²+1) = lim 1/√(1+1/x²) = 1.
        </p>

        <div style={S.note}>
          <strong>Em ML:</strong> L'Hôpital aparece na análise de funções de custo quando parâmetros saturam. Por
          exemplo, a cross-entropy −log(p) quando p→0⁺ não é indeterminada (→+∞), mas nas variantes suavizadas
          como label smoothing a análise assimptótica usa as mesmas técnicas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Continuidade</h2>
        <p style={S.p}>
          Uma função é contínua em a se e só se satisfaz simultaneamente três condições:
        </p>
        <div style={S.highlight}>
          <ol style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li><strong>Definida:</strong> f(a) está definida (a pertence ao domínio)</li>
            <li><strong>Limite existe:</strong> lim(x→a) f(x) existe (os limites laterais coincidem)</li>
            <li><strong>Igualdade:</strong> lim(x→a) f(x) = f(a) (limite igual ao valor)</li>
          </ol>
        </div>

        <p style={S.p}>Se qualquer condição falhar, há uma <em>descontinuidade</em>. Existem três tipos principais:</p>

        <DiscontinuitySVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Reparável?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Removível</td>
              <td style={S.td}>Limite existe mas difere do valor (ou valor não definido)</td>
              <td style={S.td}>Sim — redefinir f(a) = L</td>
            </tr>
            <tr>
              <td style={S.td}>Salto (jump)</td>
              <td style={S.td}>Limites laterais existem mas são diferentes</td>
              <td style={S.td}>Não</td>
            </tr>
            <tr>
              <td style={S.td}>Essencial/Infinita</td>
              <td style={S.td}>Pelo menos um limite lateral é ±∞ ou oscila</td>
              <td style={S.td}>Não</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Continuidade em Funções por Partes</h3>
        <p style={S.p}>
          Para funções definidas por ramos, verificamos continuidade nos pontos de junção comparando os limites
          laterais com o valor atribuído. Exemplo: a função ReLU é contínua em x = 0 porque lim(x→0⁻) 0 = 0 e
          lim(x→0⁺) x = 0, e ReLU(0) = 0. Porém, não é diferenciável em x = 0.
        </p>

        <h3 style={S.h3}>Classes de Continuidade</h3>
        <p style={S.p}>
          Dizemos que f é contínua num intervalo [a,b] se for contínua em cada ponto interior e tiver os limites
          laterais correctos nos extremos. Funções polinomiais, racionais (fora de zeros do denominador), trigonométricas
          e exponenciais são todas contínuas no seu domínio natural.
        </p>

        <div style={S.note}>
          A composição de funções contínuas é contínua. Logo redes neuronais compostas de activações contínuas (sigmoid,
          tanh, softplus) são contínuas como funções de entrada — garantia importante para aproximação universal.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Teoremas Fundamentais de Continuidade</h2>

        <h3 style={S.h3}>Teorema do Valor Intermédio (TVI)</h3>
        <p style={S.p}>
          Se f é contínua em [a,b] e k é qualquer valor entre f(a) e f(b), então existe pelo menos um c ∈ (a,b) tal
          que f(c) = k. Intuitivamente: uma função contínua não pode "saltar" de um valor para outro sem passar por
          todos os valores intermédios.
        </p>

        <IVTDiagram />

        
          <strong>Corolário (Existência de Raízes):</strong> Se <InlineMath math="f(a) < 0 < f(b)" />, então existe <InlineMath math="c \in (a,b)" /> com <InlineMath math="f(c) = 0" />.
          Esta é a base teórica do <em>método da bissecção</em> — um dos algoritmos mais simples de root-finding,
          análogo a binary search.
        

        
        <h3 style={S.h3}>Teorema de Weierstrass (Valores Extremos)</h3>
        <p style={S.p}>
          Se f é contínua num intervalo <em>fechado e limitado</em> [a,b], então f atinge o seu máximo e mínimo globais
          em [a,b]. Existem c, d ∈ [a,b] com f(c) ≤ f(x) ≤ f(d) para todo x ∈ [a,b].
        </p>
        <p style={S.p}>
          Este teorema garante que problemas de optimização sobre conjuntos compactos têm solução. Em ML, quando
          restringimos parâmetros a regiões limitadas (regularização com bola L2), o mínimo da perda é garantido.
        </p>

        <h3 style={S.h3}>Continuidade Uniforme</h3>
        <p style={S.p}>
          Uma função é <em>uniformemente contínua</em> em A se, para qualquer ε {'>'} 0, existe δ {'>'} 0 que funciona
          para <em>todos</em> os pontos simultaneamente: |x−y| {'<'} δ ⟹ |f(x)−f(y)| {'<'} ε para quaisquer x, y ∈ A.
          A diferença para continuidade simples: δ não pode depender do ponto. Toda função contínua em [a,b] é
          uniformemente contínua (Teorema de Heine-Cantor).
        </p>

        <div style={S.note}>
          Continuidade uniforme é relevante em algoritmos de aprendizagem: garante que pequenas perturbações na entrada
          produzem efeitos controláveis na saída — a base de robustez e generalização.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Limites em Séries e Sequências</h2>
        <p style={S.p}>
          Uma <em>sequência</em> (aₙ) converge para L se, para todo ε {'>'} 0, existe N tal que n {'>'} N implica
          |aₙ − L| {'<'} ε. Esta é exactamente a definição ε-δ adaptada ao domínio discreto — com N no papel de 1/δ.
        </p>

        <SequenceConvergeSVG />

        <h3 style={S.h3}>Série Geométrica</h3>
        <p style={S.p}>
          A série Σ rⁿ (n=0 a ∞) converge para 1/(1−r) quando |r| {'<'} 1 e diverge quando |r| ≥ 1. As somas parciais
          Sₙ = (1−rⁿ⁺¹)/(1−r) e o limite é obtido notando que rⁿ → 0 se |r| {'<'} 1.
        </p>

        <BlockMath math="\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}, \quad |r| < 1" />

        <h3 style={S.h3}>Testes de Convergência</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Teste</th>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Razão (D'Alembert)</td>
              <td style={S.td}><InlineMath math="\lim \left|\frac{a_{n+1}}{a_n}\right| < 1 \Rightarrow \text{converge}" /></td>
              <td style={S.td}>Séries com factorial, potências</td>
            </tr>
            <tr>
              <td style={S.td}>Raiz (Cauchy)</td>
              <td style={S.td}><InlineMath math="\lim |a_n|^{1/n} < 1 \Rightarrow \text{converge}" /></td>
              <td style={S.td}>Séries de potências</td>
            </tr>
            <tr>
              <td style={S.td}>Comparação</td>
              <td style={S.td}><InlineMath math="|a_n| \le b_n \text{ e } \sum b_n \text{ converge} \Rightarrow \sum a_n \text{ converge}" /></td>
              <td style={S.td}>Quando há série de referência</td>
            </tr>
            <tr>
              <td style={S.td}>Integral</td>
              <td style={S.td}><InlineMath math="\sum f(n) \text{ e } \int f(x)\,dx \text{ convergem juntos}" /></td>
              <td style={S.td}>Séries p: <InlineMath math="\sum 1/n^p" /></td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Conexão a ML: Gradient Descent como Sequência</h3>
        <p style={S.p}>
          O gradiente descendente gera a sequência θ(t+1) = θ(t) − η·∇L(θ(t)). Perguntar se converge é perguntar
          se esta sequência tem limite. Com condições de Lipschitz suaves e taxa de aprendizagem η adequada,
          prova-se convergência para um mínimo local (ou global em funções convexas) usando exactamente os critérios
          de convergência de sequências.
        </p>

              </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Funções de Activação — Limites e Comportamento</h2>
        <p style={S.p}>
          As funções de activação de redes neuronais são escolhidas precisamente pelo seu comportamento assimptótico
          e de continuidade. A análise de limites revela directamente as propriedades de gradiente que determinam
          o sucesso do treino.
        </p>

        <ActivationSVG />

        <h3 style={S.h3}>Sigmoid: <InlineMath math="\sigma(x) = \frac{1}{1+e^{-x}}" /></h3>
        <BlockMath math="\lim_{x \to +\infty} \sigma(x) = 1 \qquad \lim_{x \to -\infty} \sigma(x) = 0 \qquad \sigma(0) = \tfrac{1}{2}" />
        <p style={S.p}>
          A derivada <InlineMath math="\sigma'(x) = \sigma(x)(1 - \sigma(x))" /> atinge o máximo em x=0 com valor 1/4, e tende para 0 nas regiões de
          saturação (<InlineMath math="x \to \pm\infty" />). O <em>vanishing gradient</em> em redes profundas deve-se exactamente a este fenómeno:
          os limites da derivada nas caudas são zero.
        </p>

        <h3 style={S.h3}>Tanh: <InlineMath math="\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}" /></h3>
        <p style={S.p}>
          Semelhante à sigmoid mas com imagem (−1, 1) e centrada na origem. <InlineMath math="\lim_{x \to \pm\infty} \tanh(x) = \pm 1" />.
          A derivada <InlineMath math="\tanh'(x) = 1 - \tanh^2(x)" /> tem máximo 1 em x=0 (melhor que sigmoid), mas ainda satura.
        </p>

        <h3 style={S.h3}>ReLU: <InlineMath math="\max(0, x)" /></h3>
        <p style={S.p}>
          A ReLU não satura para <InlineMath math="x > 0" />: <InlineMath math="\lim_{x \to +\infty} \text{ReLU}(x) = +\infty" />. A derivada é 1 para <InlineMath math="x > 0" /> e 0 para <InlineMath math="x < 0" />.
          Não há vanishing gradient do lado positivo. Mas neurónios com <InlineMath math="x < 0" /> têm gradiente zero permanentemente
          (dying ReLU problem). Variantes como Leaky ReLU, ELU e GELU foram propostas para mitigar isto.
        </p>

        <h3 style={S.h3}>Softmax como Aproximação Contínua de argmax</h3>
        <p style={S.p}>
          A função <InlineMath math="\text{softmax}(\mathbf{z})_i = \frac{e^{z_i}}{\sum_j e^{z_j}}" /> é contínua e diferenciável em toda a parte. Quando a
          temperatura <InlineMath math="T \to 0" /> na versão temperada <InlineMath math="\text{softmax}(\mathbf{z}/T)" />, o resultado converge para a função argmax, que
          é descontínua. Isto motiva o uso de softmax em problemas de classificação — é a melhor aproximação
          suave ao vencedor-leva-tudo.
        </p>

        <div style={S.note}>
          O limite <InlineMath math="\lim_{T \to 0} \text{softmax}(\mathbf{z}/T) = \text{one-hot}(\arg\max \mathbf{z})" /> é um resultado de convergência de funções que usa
          exactamente a teoria de limites paramétricos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Limites em Álgebra Linear</h2>
        <p style={S.p}>
          Em espaços vectoriais e matriciais, o conceito de limite generaliza usando normas. A sequência de vectores
          (vₙ) converge para v se ||vₙ − v|| → 0, e a sequência de matrizes (Aₙ) converge para A se ||Aₙ − A|| → 0
          para alguma norma matricial induzida.
        </p>

        <h3 style={S.h3}>Raio Espectral e Convergência de Potências de Matrizes</h3>
        
          O limite <InlineMath math="\lim_{n \to \infty} A^n" /> existe e é zero se e só se o raio espectral <InlineMath math="\rho(A) = \max|\lambda_i| < 1" />, onde <InlineMath math="\lambda_i" /> são os
          valores próprios de A.
        
        <p style={S.p}>
          O raio espectral determina a taxa de contracção (ou expansão) iterativa. Se ρ(A) = 0.9, as potências Aⁿ
          decaem geometricamente. Se ρ(A) = 1.1, Aⁿ explode.
        </p>

        <h3 style={S.h3}>Iteração de Potência (Power Iteration)</h3>
        <p style={S.p}>
          O algoritmo de iteração de potência produz a sequência vₙ = Avₙ₋₁/||Avₙ₋₁||. Sob condições adequadas
          (valor próprio dominante único), esta sequência converge para o vector próprio dominante de A. A taxa
          de convergência é ρ₂/ρ₁ onde ρ₁ {'>'} ρ₂ são os dois maiores valores singulares. Este método está
          na base do PageRank original do Google.
        </p>

        <h3 style={S.h3}>RNNs: Gradientes como Potências de Matrizes</h3>
        <p style={S.p}>
          Numa RNN, o gradiente propagado t passos para trás é proporcional a Wᵗ onde W é a matriz de pesos
          recorrentes. Se ρ(W) {'<'} 1, o gradiente tende para zero (vanishing gradient). Se ρ(W) {'>'} 1, explode.
          O LSTM e o GRU foram concebidos exactamente para contornar este problema através de portas que controlam
          o fluxo de gradiente.
        </p>

        
        <h3 style={S.h3}>Normas Matriciais e Continuidade</h3>
        <p style={S.p}>
          A multiplicação matricial A·v é uma operação contínua (linear ⟹ contínua em espaços de dimensão finita).
          Logo, todas as redes feedforward com pesos fixos são funções contínuas da entrada. A continuidade é uma
          garantia mínima de estabilidade — pequenas perturbações na entrada produzem pequenas perturbações na saída,
          desde que as normas dos pesos sejam controladas.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Cálculo Numérico de Limites</h2>
        <p style={S.p}>
          Em aritmética de ponto flutuante, calcular limites numericamente exige cuidado. Os problemas mais comuns
          são <em>cancelamento catastrófico</em> (subtracção de números quase iguais) e <em>erros de arredondamento</em>
          que se acumulam.
        </p>

        <h3 style={S.h3}>Problema: sin(x)/x perto de x=0</h3>
        <p style={S.p}>
          Se calcularmos directamente sin(x)/x para x = 1e-16, obtemos 0/0 no limite de precisão de 64 bits. A
          função sin(x) é representada como 0.0 para x muito pequeno, e a divisão produz NaN.
        </p>

        
        <h3 style={S.h3}>Cancelamento Catastrófico</h3>
        <p style={S.p}>
          Considere f(x) = (1 − cos(x))/x² perto de x = 0 (limite = 1/2). Se calcularmos directamente:
          cos(1e-8) = 0.99999999999999995..., e 1 − cos(1e-8) perde todos os dígitos significativos por cancelamento.
        </p>
        
        <h3 style={S.h3}>Cálculo Simbólico com SymPy</h3>
        <p style={S.p}>
          Para limites exactos, a biblioteca SymPy calcula de forma simbólica, evitando todos os problemas numéricos:
        </p>
        
        <h3 style={S.h3}>Quando os Limites Numéricos Enganam</h3>
        <p style={S.p}>
          Numericamente, lim(x→∞) sin(x) parece oscilar sem convergir — o que é correcto, o limite não existe.
          Mas algoritmos que amostram finitos pontos podem ver aparente convergência se a amostragem for periódica.
          Sempre validar com análise simbólica quando possível, e usar múltiplas escalas de x para confirmar tendências.
        </p>

        <div style={S.note}>
          Em deep learning, a instabilidade numérica manifesta-se como NaN durante treino — tipicamente por divisão
          por zero (batch norm com variância zero) ou overflow em exp (softmax não normalizado). A solução é sempre
          reformular para estabilidade numérica antes de calcular.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>

        <h3 style={S.h3}>Limites Fundamentais a Memorizar</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Limite</th>
              <th style={S.th}>Valor</th>
              <th style={S.th}>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{x \to 0} \frac{\sin(x)}{x}" /></td>
              <td style={S.td}>1</td>
              <td style={S.td}>Derivada de sin, análise de Fourier</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{n \to \infty} \left(1+\frac{1}{n}\right)^n" /></td>
              <td style={S.td}><InlineMath math="e \approx 2.71828" /></td>
              <td style={S.td}>Juro contínuo, entropia, distribuição de Poisson</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{x \to 0} (1+x)^{1/x}" /></td>
              <td style={S.td}><InlineMath math="e" /></td>
              <td style={S.td}>Definição alternativa de e</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{x \to 0} \frac{e^x - 1}{x}" /></td>
              <td style={S.td}>1</td>
              <td style={S.td}>Derivada de <InlineMath math="e^x" /> em 0</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{x \to 0} \frac{\ln(1+x)}{x}" /></td>
              <td style={S.td}>1</td>
              <td style={S.td}>Derivada de ln em 1</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{x \to 0^+} x \ln(x)" /></td>
              <td style={S.td}>0</td>
              <td style={S.td}>Entropia: <InlineMath math="0 \cdot \log(0) = 0" /> por definição</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{x \to \infty} \frac{x^n}{e^x}" /></td>
              <td style={S.td}>0 para qualquer n</td>
              <td style={S.td}>Exponencial domina polinómios</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\lim_{x \to 0^+} x^x" /></td>
              <td style={S.td}>1</td>
              <td style={S.td}>Forma <InlineMath math="0^0" /> natural</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Árvore de Decisão: Qual Técnica Usar?</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Técnica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Expressão racional, sem forma indeterminada</td>
              <td style={S.td}>Substituição directa</td>
            </tr>
            <tr>
              <td style={S.td}>Forma 0/0 com factorização possível</td>
              <td style={S.td}>Factorizar e cancelar</td>
            </tr>
            <tr>
              <td style={S.td}>Forma 0/0 ou ∞/∞ sem factorização óbvia</td>
              <td style={S.td}>L'Hôpital</td>
            </tr>
            <tr>
              <td style={S.td}>Formas 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰</td>
              <td style={S.td}>Converter para 0/0 ou ∞/∞, depois L'Hôpital</td>
            </tr>
            <tr>
              <td style={S.td}>f espremedida entre g e h com mesmo limite</td>
              <td style={S.td}>Teorema do Sanduíche</td>
            </tr>
            <tr>
              <td style={S.td}>Expressão com radicais (∞−∞)</td>
              <td style={S.td}>Racionalizar com conjugado</td>
            </tr>
            <tr>
              <td style={S.td}>Limite x→∞ de quociente de polinómios</td>
              <td style={S.td}>Dividir pelo grau mais alto</td>
            </tr>
            <tr>
              <td style={S.td}>Sequência ou série</td>
              <td style={S.td}>Testes de convergência (razão, raiz, comparação)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Conexões a Machine Learning — Resumo</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito de Limite</th>
              <th style={S.th}>Papel em ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Convergência de sequências</td>
              <td style={S.td}>Convergência de SGD, Adam, e métodos iterativos</td>
            </tr>
            <tr>
              <td style={S.td}>Limites de funções de activação</td>
              <td style={S.td}>Saturação, vanishing/exploding gradient</td>
            </tr>
            <tr>
              <td style={S.td}>Raio espectral de matrizes</td>
              <td style={S.td}>Estabilidade de RNNs, gradientes em redes profundas</td>
            </tr>
            <tr>
              <td style={S.td}>Continuidade e TVI</td>
              <td style={S.td}>Bisecção, root-finding, robustez de modelos</td>
            </tr>
            <tr>
              <td style={S.td}>Limites de série geométrica</td>
              <td style={S.td}>Análise de atenção, kernel tricks, séries de Taylor em expansões</td>
            </tr>
            <tr>
              <td style={S.td}>L'Hôpital, formas 0/0</td>
              <td style={S.td}>Análise de funções de custo em regiões degeneradas</td>
            </tr>
            <tr>
              <td style={S.td}>0·log(0) = 0 (limite)</td>
              <td style={S.td}>Convenção de entropia: termos com p=0 contribuem 0</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Mensagem central:</strong> Limites não são apenas formalidade matemática. São a linguagem precisa
          para descrever convergência de algoritmos, estabilidade numérica, e comportamento de funções nas
          fronteiras do seu domínio — tudo aquilo que determina se um modelo de ML treina com sucesso ou falha.
        </div>

      </section>
    </div>
  );
}
