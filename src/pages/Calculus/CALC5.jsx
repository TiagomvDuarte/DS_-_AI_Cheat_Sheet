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
  subtitle: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p: { lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1rem' },
  svgBox: { background: 'var(--bg-secondary)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' },
  formulaBox: { background: `${color}11`, border: `1px solid ${color}33`, borderRadius: 8, padding: '1rem 1.5rem', marginBottom: '1.25rem', fontFamily: 'monospace', fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.8 },
  infoBox: { background: 'var(--bg-secondary)', borderRadius: 8, padding: '1rem 1.5rem', marginBottom: '1.25rem', borderLeft: `3px solid ${color}` },
  ul: { color: 'var(--text-secondary)', lineHeight: 1.85, paddingLeft: '1.5rem' },
  table: { width: '100%', borderCollapse: 'collapse', marginBottom: '1.25rem', fontSize: '0.9rem' },
  th: { background: `${color}22`, color: 'var(--text-primary)', padding: '0.5rem 0.75rem', textAlign: 'left', fontWeight: 700, borderBottom: `1px solid ${color}33` },
  td: { padding: '0.45rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' },
  highlight: { color, fontWeight: 700 },
};

/* ── SVG 1: Loss Surface ─────────────────────────────────────── */
function LossSurfaceSVG() {
  // In SVG: y increases downward. High y = low on screen = LOW loss (minima).
  // Curve: starts mid, rises to local max, dips to local min, rises, dips to global min, rises to plateau.
  const curve = "M30,160 C55,155 75,140 100,110 C120,85 130,70 155,65 C175,62 190,110 210,135 C230,160 250,170 270,165 C285,160 295,145 310,130 C325,115 335,95 355,85 C375,75 390,230 420,240 C445,248 460,245 490,240 C510,237 530,235 560,233 C585,232 610,230 630,229";
  const fill  = "M30,160 C55,155 75,140 100,110 C120,85 130,70 155,65 C175,62 190,110 210,135 C230,160 250,170 270,165 C285,160 295,145 310,130 C325,115 335,95 355,85 C375,75 390,230 420,240 C445,248 460,245 490,240 C510,237 530,235 560,233 C585,232 610,230 630,229 L630,275 L30,275 Z";
  return (
    <svg width="640" height="290" viewBox="0 0 640 290" style={{ maxWidth: '100%' }}>
      <rect width="640" height="290" rx="8" fill="var(--bg-secondary)" />
      {/* Filled area */}
      <path d={fill} fill={`${color}15`} />
      {/* Curve */}
      <path d={curve} fill="none" stroke={color} strokeWidth="2.5" />
      {/* Axes */}
      <line x1="30" y1="275" x2="630" y2="275" stroke="var(--text-secondary)" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="30" y1="275" x2="30" y2="25" stroke="var(--text-secondary)" strokeWidth="1" strokeOpacity="0.5" />
      <text x="625" y="272" textAnchor="end" fontSize="11" fill="var(--text-secondary)">params →</text>
      <text x="38" y="22" fontSize="11" fill="var(--text-secondary)">loss ↑</text>
      {/* Local min at x≈155, y≈65 (low on screen = low loss) */}
      <circle cx="155" cy="65" r="6" fill="#7dd3fc" />
      <line x1="155" y1="65" x2="155" y2="275" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="3,3" strokeOpacity="0.4" />
      <text x="155" y="54" textAnchor="middle" fontSize="11" fill="#7dd3fc">local min</text>
      {/* Saddle at x≈270, y≈165 (inflection) */}
      <circle cx="270" cy="165" r="6" fill="#bae6fd" />
      <text x="260" y="154" textAnchor="middle" fontSize="11" fill="#bae6fd">saddle</text>
      {/* Global min at x≈420, y≈240 (lowest point on curve) */}
      <circle cx="420" cy="240" r="7" fill="#4a9eed" />
      <line x1="420" y1="240" x2="420" y2="275" stroke="#4a9eed" strokeWidth="1" strokeDasharray="3,3" strokeOpacity="0.4" />
      <text x="440" y="228" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">global min</text>
      {/* Plateau near x=530 */}
      <line x1="490" y1="237" x2="600" y2="230" stroke="var(--text-secondary)" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="545" y="220" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">plateau</text>
      {/* Local max at x≈100, y≈110 */}
      <circle cx="100" cy="110" r="5" fill="var(--text-secondary)" fillOpacity="0.5" />
      <text x="80" y="100" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">local max</text>
    </svg>
  );
}

/* ── SVG 2: Gradient Descent on Contour Map ─────────────────── */
function GDContoursVG() {
  const cx = 320, cy = 150;
  // Elliptical contours — simplified
  const contours = [
    { rx: 200, ry: 110, op: 0.12 },
    { rx: 155, ry: 82, op: 0.15 },
    { rx: 110, ry: 58, op: 0.18 },
    { rx: 68, ry: 36, op: 0.22 },
    { rx: 34, ry: 18, op: 0.3 },
  ];
  // GD trajectory points (hand-crafted)
  const pts = [
    [120, 240], [150, 210], [185, 188], [220, 170],
    [255, 160], [280, 155], [300, 152], [315, 150]
  ];
  const polyline = pts.map(p => p.join(',')).join(' ');
  return (
    <svg width="640" height="300" viewBox="0 0 640 300" style={{ maxWidth: '100%' }}>
      <rect width="640" height="300" rx="8" fill="var(--bg-secondary)" />
      {contours.map((c, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={c.rx} ry={c.ry} fill="none" stroke={color} strokeWidth="1.5" opacity={c.op * 3} />
      ))}
      {/* Center (minimum) */}
      <circle cx={cx} cy={cy} r="5" fill="#4a9eed" />
      <text x={cx + 8} y={cy + 4} fontSize="11" fill="#4a9eed">min</text>
      {/* GD path */}
      <polyline points={polyline} fill="none" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="4,2" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#7dd3fc" />
      ))}
      <text x="120" y="255" fontSize="11" fill="#7dd3fc">start</text>
      {/* Labels */}
      <text x="12" y="20" fontSize="13" fill="#94a3b8" fontWeight="bold">Gradient Descent on Elliptic Loss</text>
    </svg>
  );
}

/* ── SVG 3: Hessian Eigenvalue Directions ───────────────────── */
function HessianSVG() {
  const cx = 200, cy = 150;
  return (
    <svg width="640" height="300" viewBox="0 0 640 300" style={{ maxWidth: '100%' }}>
      <rect width="640" height="300" rx="8" fill="var(--bg-secondary)" />
      {/* Contours centered at (200,150) — elongated, tilted */}
      {[70, 50, 32, 18, 8].map((r, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r * 2.2} ry={r} fill="none" stroke={color} strokeWidth="1.4" opacity={0.4 + i * 0.1} transform={`rotate(-30, ${cx}, ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r="5" fill="#4a9eed" />
      {/* Eigenvector 1 — major axis direction */}
      <line x1={cx} y1={cy} x2={cx + 90} y2={cy - 52} stroke="#e0f2fe" strokeWidth="2.5" />
      <polygon points={`${cx + 90},${cy - 52} ${cx + 82.1},${cy - 41.7} ${cx + 77.1},${cy - 50.3}`} fill="#e0f2fe" />
      <text x={cx + 95} y={cy - 54} fontSize="11" fill="#e0f2fe">v1 (λ1 small)</text>
      {/* Eigenvector 2 — minor axis direction */}
      <line x1={cx} y1={cy} x2={cx + 48} y2={cy + 82} stroke="#4a9eed" strokeWidth="2.5" />
      <polygon points={`${cx + 48},${cy + 82} ${cx + 37.6},${cy + 74.2} ${cx + 46.3},${cy + 69.1}`} fill="#4a9eed" />
      <text x={cx + 52} y={cy + 94} fontSize="11" fill="#4a9eed">v2 (λ2 large)</text>
      {/* Right panel: eigenvalue classification */}
      <rect x="380" y="40" width="240" height="220" rx="8" fill="rgba(74,158,237,0.06)" />
      <text x="500" y="68" textAnchor="middle" fontSize="13" fill="#94a3b8" fontWeight="bold">Classification</text>
      {[
        { label: 'All λ > 0', desc: 'Local Min', color: '#4a9eed', y: 100 },
        { label: 'All λ < 0', desc: 'Local Max', color: '#bae6fd', y: 135 },
        { label: 'Mixed λ', desc: 'Saddle Point', color: '#4a9eed', y: 170 },
        { label: 'Some λ = 0', desc: 'Degenerate', color: '#94a3b8', y: 205 },
      ].map(r => (
        <g key={r.label}>
          <circle cx="398" cy={r.y - 3} r="5" fill={r.color} />
          <text x="412" y={r.y} fontSize="11" fill="#e2e8f0">{r.label}</text>
          <text x="490" y={r.y} fontSize="11" fill={r.color}>{r.desc}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 4: Convex vs Non-Convex ────────────────────────────── */
function ConvexSVG() {
  return (
    <svg width="640" height="260" viewBox="0 0 640 260" style={{ maxWidth: '100%' }}>
      <rect width="640" height="260" rx="8" fill="var(--bg-secondary)" />
      {/* Left: convex function */}
      <text x="160" y="25" textAnchor="middle" fontSize="13" fill="#4a9eed" fontWeight="bold">Convex</text>
      <path d="M60,220 Q160,40 260,220" fill="none" stroke="#4a9eed" strokeWidth="3" />
      {/* Chord line */}
      <line x1="90" y1="182" x2="230" y2="182" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
      <circle cx="90" cy="182" r="4" fill="#4a9eed" />
      <circle cx="230" cy="182" r="4" fill="#4a9eed" />
      <text x="160" y="196" textAnchor="middle" fontSize="10" fill="#4a9eed">chord above curve</text>
      <text x="160" y="240" textAnchor="middle" fontSize="10" fill="#64748b">f(λx+(1-λ)y) ≤ λf(x)+(1-λ)f(y)</text>
      {/* Divider */}
      <line x1="320" y1="20" x2="320" y2="240" stroke="var(--card-border)" strokeWidth="1" />
      {/* Right: non-convex function */}
      <text x="480" y="25" textAnchor="middle" fontSize="13" fill="#bae6fd" fontWeight="bold">Non-Convex</text>
      <path d="M360,220 C380,160 400,200 430,120 C455,55 470,170 500,150 C530,130 550,210 580,220" fill="none" stroke="#bae6fd" strokeWidth="3" />
      {/* Chord that goes above the function */}
      <line x1="375" y1="196" x2="555" y2="200" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="5,3" />
      <circle cx="375" cy="196" r="4" fill="#bae6fd" />
      <circle cx="555" cy="200" r="4" fill="#bae6fd" />
      <text x="465" y="215" textAnchor="middle" fontSize="10" fill="#bae6fd">chord below curve</text>
      {/* Local minima markers */}
      <circle cx="430" cy="120" r="4" fill="#7dd3fc" />
      <text x="420" y="112" textAnchor="middle" fontSize="9" fill="#7dd3fc">local</text>
      <circle cx="500" cy="150" r="4" fill="#7dd3fc" />
      <text x="500" y="142" textAnchor="middle" fontSize="9" fill="#7dd3fc">local</text>
    </svg>
  );
}

/* ── SVG 5: Optimizer Trajectory Comparison ─────────────────── */
function OptimizerTrajSVG() {
  const cx = 320, cy = 150;
  // GD (plain) — oscillates
  const gd = [[80,260],[130,190],[175,235],[215,185],[250,210],[275,175],[295,190],[310,162],[318,155]];
  // Momentum — smoother
  const mom = [[80,260],[140,200],[195,170],[240,158],[278,152],[305,151],[316,150]];
  // Nesterov — fastest
  const nes = [[80,260],[155,185],[220,160],[270,152],[305,150],[316,150]];
  const toStr = pts => pts.map(p => p.join(',')).join(' ');
  return (
    <svg width="640" height="300" viewBox="0 0 640 300" style={{ maxWidth: '100%' }}>
      <rect width="640" height="300" rx="8" fill="var(--bg-secondary)" />
      {/* Contours */}
      {[120, 90, 62, 38, 18].map((r, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r * 1.7} ry={r * 0.65} fill="none" stroke={color} strokeWidth="1.2" opacity={0.3 + i * 0.08} />
      ))}
      <circle cx={cx} cy={cy} r="5" fill="#4a9eed" />
      {/* Trajectories */}
      <polyline points={toStr(gd)} fill="none" stroke="#bae6fd" strokeWidth="2" strokeDasharray="5,3" />
      <polyline points={toStr(mom)} fill="none" stroke="#7dd3fc" strokeWidth="2" />
      <polyline points={toStr(nes)} fill="none" stroke="#e0f2fe" strokeWidth="2.5" />
      {/* Start dot */}
      <circle cx="80" cy="260" r="5" fill="var(--text-secondary)" />
      {/* Legend */}
      <rect x="400" y="200" width="220" height="80" rx="6" fill="rgba(74,158,237,0.06)" />
      <line x1="415" y1="220" x2="445" y2="220" stroke="#bae6fd" strokeWidth="2" strokeDasharray="5,3" />
      <text x="452" y="224" fontSize="11" fill="#bae6fd">GD (oscillating)</text>
      <line x1="415" y1="240" x2="445" y2="240" stroke="#7dd3fc" strokeWidth="2" />
      <text x="452" y="244" fontSize="11" fill="#7dd3fc">Momentum</text>
      <line x1="415" y1="260" x2="445" y2="260" stroke="#e0f2fe" strokeWidth="2.5" />
      <text x="452" y="264" fontSize="11" fill="#e0f2fe">Nesterov</text>
    </svg>
  );
}

/* ── SVG 6: Adaptive Optimizer Paths ───────────────────────── */
function AdaptiveSVG() {
  const cx = 320, cy = 150;
  const adam = [[60,260],[140,175],[220,158],[280,152],[310,150],[320,150]];
  const adagrad = [[60,260],[120,200],[180,180],[235,168],[275,158],[305,152],[318,150]];
  const rmsprop = [[60,260],[135,178],[210,160],[270,153],[305,150],[320,150]];
  const toStr = pts => pts.map(p => p.join(',')).join(' ');
  return (
    <svg width="640" height="300" viewBox="0 0 640 300" style={{ maxWidth: '100%' }}>
      <rect width="640" height="300" rx="8" fill="var(--bg-secondary)" />
      {[130, 95, 64, 38, 16].map((r, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r * 1.8} ry={r * 0.6} fill="none" stroke={color} strokeWidth="1.2" opacity={0.25 + i * 0.1} />
      ))}
      <circle cx={cx} cy={cy} r="5" fill="#4a9eed" />
      <polyline points={toStr(adagrad)} fill="none" stroke="#bae6fd" strokeWidth="2" strokeDasharray="6,3" />
      <polyline points={toStr(rmsprop)} fill="none" stroke="#7dd3fc" strokeWidth="2" />
      <polyline points={toStr(adam)} fill="none" stroke="#e0f2fe" strokeWidth="2.5" />
      <circle cx="60" cy="260" r="5" fill="var(--text-secondary)" />
      <rect x="390" y="195" width="230" height="85" rx="6" fill="rgba(74,158,237,0.06)" />
      <line x1="405" y1="218" x2="440" y2="218" stroke="#bae6fd" strokeWidth="2" strokeDasharray="6,3" />
      <text x="448" y="222" fontSize="11" fill="#bae6fd">AdaGrad (stalls)</text>
      <line x1="405" y1="240" x2="440" y2="240" stroke="#7dd3fc" strokeWidth="2" />
      <text x="448" y="244" fontSize="11" fill="#7dd3fc">RMSprop</text>
      <line x1="405" y1="262" x2="440" y2="262" stroke="#e0f2fe" strokeWidth="2.5" />
      <text x="448" y="266" fontSize="11" fill="#e0f2fe">Adam</text>
    </svg>
  );
}

/* ── SVG 7: Learning Rate Schedules ────────────────────────── */
function LRScheduleSVG() {
  // LR as fraction of max (normalized to 100 epochs, height 0-1 mapped to y 220-40)
  const toY = v => 220 - v * 180;
  const toX = e => 40 + e * 5.6;
  // Step decay: drops at 30, 60
  const step = Array.from({ length: 101 }, (_, e) => {
    const lr = e < 30 ? 1 : e < 60 ? 0.5 : 0.25;
    return `${toX(e)},${toY(lr)}`;
  }).join(' ');
  // Exponential
  const exp = Array.from({ length: 101 }, (_, e) => {
    const lr = Math.exp(-0.04 * e);
    return `${toX(e)},${toY(lr)}`;
  }).join(' ');
  // Cosine
  const cos = Array.from({ length: 101 }, (_, e) => {
    const lr = 0.5 * (1 + Math.cos(Math.PI * e / 100));
    return `${toX(e)},${toY(lr)}`;
  }).join(' ');
  // Warmup + cosine
  const warm = Array.from({ length: 101 }, (_, e) => {
    const lr = e < 10 ? e / 10 : 0.5 * (1 + Math.cos(Math.PI * (e - 10) / 90));
    return `${toX(e)},${toY(lr)}`;
  }).join(' ');
  return (
    <svg width="640" height="280" viewBox="0 0 640 280" style={{ maxWidth: '100%' }}>
      <rect width="640" height="280" rx="8" fill="var(--bg-secondary)" />
      {/* Axes */}
      <line x1="40" y1="220" x2="600" y2="220" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="40" y1="40" x2="40" y2="220" stroke="var(--card-border)" strokeWidth="1" />
      <text x="320" y="250" textAnchor="middle" fontSize="11" fill="#475569">Epoch</text>
      <text x="18" y="130" textAnchor="middle" fontSize="11" fill="#475569" transform="rotate(-90,18,130)">LR</text>
      {/* Schedules */}
      <polyline points={step} fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="6,3" />
      <polyline points={exp} fill="none" stroke="#7dd3fc" strokeWidth="2" />
      <polyline points={cos} fill="none" stroke="#bae6fd" strokeWidth="2" strokeDasharray="4,3" />
      <polyline points={warm} fill="none" stroke="#e0f2fe" strokeWidth="2.5" />
      {/* Legend */}
      <rect x="420" y="50" width="200" height="100" rx="6" fill="rgba(74,158,237,0.06)" />
      <line x1="432" y1="70" x2="460" y2="70" stroke="#4a9eed" strokeWidth="2" strokeDasharray="6,3" />
      <text x="468" y="74" fontSize="10" fill="#4a9eed">Step Decay</text>
      <line x1="432" y1="90" x2="460" y2="90" stroke="#7dd3fc" strokeWidth="2" />
      <text x="468" y="94" fontSize="10" fill="#7dd3fc">Exponential</text>
      <line x1="432" y1="110" x2="460" y2="110" stroke="#bae6fd" strokeWidth="2" strokeDasharray="4,3" />
      <text x="468" y="114" fontSize="10" fill="#bae6fd">Cosine</text>
      <line x1="432" y1="130" x2="460" y2="130" stroke="#e0f2fe" strokeWidth="2.5" />
      <text x="468" y="134" fontSize="10" fill="#e0f2fe">Warmup+Cosine</text>
    </svg>
  );
}

/* ── SVG 8: Lagrange Multipliers Geometric ──────────────────── */
function LagrangeSVG() {
  // f(x,y) = x^2+y^2, constraint x+y=1 (line)
  // contours of f centered at (cx,cy) = (200,150)
  const cx = 200, cy = 150;
  // constraint line x+y=const, through (0.5,0.5) scaled
  // center corresponds to (0,0), scale: 1 unit = 100px
  // constraint x+y=1 in pixel coords: scale by 80px/unit
  // pixel x = cx + 80*x, pixel y = cy - 80*y
  // x+y=1: y = 1-x, endpoints: x=-0.5..1.5
  const lx1 = cx + 80 * (-0.5), ly1 = cy - 80 * (1.5);
  const lx2 = cx + 80 * (1.5), ly2 = cy - 80 * (-0.5);
  // Optimal point: (0.5, 0.5)
  const ox = cx + 80 * 0.5, oy = cy - 80 * 0.5;
  return (
    <svg width="640" height="300" viewBox="0 0 640 300" style={{ maxWidth: '100%' }}>
      <rect width="640" height="300" rx="8" fill="var(--bg-secondary)" />
      {/* Contour circles */}
      {[20, 40, 60, 80, 100].map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="1.5" opacity={0.3 + i * 0.08} />
      ))}
      {/* Constraint line */}
      <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke="#7dd3fc" strokeWidth="2.5" />
      <text x={lx2 - 10} y={ly2 + 15} fontSize="12" fill="#7dd3fc">x + y = 1</text>
      {/* Tangent point */}
      <circle cx={ox} cy={oy} r="7" fill="#4a9eed" />
      <text x={ox + 10} y={oy - 10} fontSize="11" fill="#4a9eed">optimal (0.5, 0.5)</text>
      {/* Gradient arrows at optimal */}
      <line x1={ox} y1={oy} x2={ox - 28} y2={oy + 28} stroke="#7dd3fc" strokeWidth="2" />
      <polygon points={`${ox - 28},${oy + 28} ${ox - 18},${oy + 20} ${ox - 22},${oy + 30}`} fill="#7dd3fc" />
      <text x={ox - 35} y={oy + 45} fontSize="10" fill="#7dd3fc">∇f</text>
      <line x1={ox} y1={oy} x2={ox - 28} y2={oy + 28} stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3,2" />
      <text x={ox} y={oy + 28} fontSize="10" fill="#bae6fd">∇g</text>
      {/* Right panel: explanation */}
      <rect x="370" y="40" width="255" height="225" rx="8" fill="rgba(74,158,237,0.06)" />
      <text x="497" y="65" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="bold">Lagrange Conditions</text>
      <text x="385" y="95" fontSize="11" fill="#94a3b8">Minimize f(x,y) = x² + y²</text>
      <text x="385" y="115" fontSize="11" fill="#94a3b8">Subject to: x + y = 1</text>
      <text x="385" y="145" fontSize="11" fill={color}>Lagrangian:</text>
      <text x="385" y="163" fontSize="11" fill="#e2e8f0">L = f(x) - λg(x)</text>
      <text x="385" y="188" fontSize="11" fill={color}>Conditions:</text>
      <text x="385" y="206" fontSize="10" fill="#94a3b8">∂L/∂x = 2x - λ = 0</text>
      <text x="385" y="222" fontSize="10" fill="#94a3b8">∂L/∂y = 2y - λ = 0</text>
      <text x="385" y="238" fontSize="10" fill="#94a3b8">x + y = 1</text>
      <text x="385" y="256" fontSize="10" fill="#4a9eed">→ x=y=0.5, λ=1</text>
    </svg>
  );
}

/* ── SVG 9: KKT Feasible Region ─────────────────────────────── */
function KKTSVG() {
  return (
    <svg width="820" height="300" viewBox="0 0 820 300" style={{ maxWidth: '100%' }}>
      <rect width="820" height="300" rx="8" fill="var(--bg-secondary)" />
      {/* Feasible region */}
      <path d="M60,250 L60,60 L260,60 L260,250 Z" fill={`${color}18`} stroke={color} strokeWidth="1.5" strokeDasharray="6,3" />
      <text x="160" y="165" textAnchor="middle" fontSize="12" fill={color}>Feasible</text>
      <text x="160" y="183" textAnchor="middle" fontSize="12" fill={color}>Region</text>
      {/* Objective contours centered at x=310 — max r=120 → extends to x=430 */}
      {[30, 60, 90, 120].map((r, i) => (
        <circle key={i} cx="310" cy="155" r={r} fill="none" stroke="#7dd3fc" strokeWidth="1.2" opacity={0.3 + i * 0.12} />
      ))}
      {/* KKT point on constraint boundary */}
      <circle cx="260" cy="155" r="7" fill="#4a9eed" />
      <text x="248" y="145" fontSize="11" fill="#4a9eed">x*</text>
      {/* Gradient arrows */}
      <line x1="260" y1="155" x2="310" y2="155" stroke="#7dd3fc" strokeWidth="2" />
      <polygon points="310,155 300,150 300,160" fill="#7dd3fc" />
      <text x="314" y="152" fontSize="10" fill="#7dd3fc">∇f</text>
      <line x1="260" y1="155" x2="260" y2="195" stroke="#bae6fd" strokeWidth="2" strokeDasharray="3,2" />
      <polygon points="260,195 255,183 265,183" fill="#bae6fd" />
      <text x="265" y="210" fontSize="10" fill="#bae6fd">-λ∇g</text>
      {/* Title */}
      <text x="160" y="28" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="bold">KKT: Inequality Constraint</text>
      {/* Right panel — starts at x=470, clear of contours */}
      <rect x="470" y="40" width="330" height="220" rx="8" fill="rgba(74,158,237,0.06)" />
      <text x="635" y="68" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="bold">KKT Conditions</text>
      {[
        ['1. Stationarity:', color],
        ['∇f + Σ λᵢ∇gᵢ = 0', 'var(--text-secondary)'],
        ['2. Primal feasibility:', color],
        ['gᵢ(x) ≤ 0', 'var(--text-secondary)'],
        ['3. Dual feasibility:', color],
        ['λᵢ ≥ 0', 'var(--text-secondary)'],
        ['4. Complementary slackness:', color],
        ['λᵢ · gᵢ(x) = 0', 'var(--text-secondary)'],
      ].map(([line, fill], i) => (
        <text key={i} x="485" y={95 + i * 22} fontSize="11" fill={fill}>{line}</text>
      ))}
    </svg>
  );
}

/* ── SVG 10: Saddle Point Surface ───────────────────────────── */
function SaddleSVG() {
  // Approximate saddle f(x,y)=x^2-y^2 as projected curves
  const lines = [];
  // x-slices (positive curvature)
  for (let y = -3; y <= 3; y += 1) {
    const pts = [];
    for (let x = -3; x <= 3; x += 0.5) {
      const px = 200 + x * 40 + y * 20;
      const py = 150 - (x * x - y * y) * 12 - y * 15;
      pts.push(`${px},${py}`);
    }
    lines.push({ pts: pts.join(' '), stroke: color, op: 0.35 + Math.abs(y) * 0.07 });
  }
  // y-slices (negative curvature)
  for (let x = -3; x <= 3; x += 1) {
    const pts = [];
    for (let y = -3; y <= 3; y += 0.5) {
      const px = 200 + x * 40 + y * 20;
      const py = 150 - (x * x - y * y) * 12 - y * 15;
      pts.push(`${px},${py}`);
    }
    lines.push({ pts: pts.join(' '), stroke: '#bae6fd', op: 0.25 + Math.abs(x) * 0.05 });
  }
  const sadX = 200, sadY = 150;
  return (
    <svg width="640" height="300" viewBox="0 0 640 300" style={{ maxWidth: '100%' }}>
      <rect width="640" height="300" rx="8" fill="var(--bg-secondary)" />
      {lines.map((l, i) => (
        <polyline key={i} points={l.pts} fill="none" stroke={l.stroke} strokeWidth="1.2" opacity={l.op} />
      ))}
      <circle cx={sadX} cy={sadY} r="6" fill="#7dd3fc" />
      <text x={sadX + 10} y={sadY - 8} fontSize="11" fill="#7dd3fc">saddle point</text>
      <text x={sadX + 10} y={sadY + 8} fontSize="10" fill="#94a3b8">∇f=0 but not min/max</text>
      {/* Right annotation */}
      <rect x="380" y="30" width="240" height="140" rx="8" fill="rgba(74,158,237,0.06)" />
      <text x="500" y="55" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="bold">High Dimensions</text>
      <text x="390" y="80" fontSize="10" fill="#94a3b8">P(all λ same sign) → 0</text>
      <text x="390" y="98" fontSize="10" fill="#94a3b8">exponentially fast in dim.</text>
      <text x="390" y="120" fontSize="10" fill={color}>Most critical points</text>
      <text x="390" y="138" fontSize="10" fill={color}>are saddles, not minima.</text>
      <text x="390" y="158" fontSize="10" fill="#4a9eed">SGD noise helps escape!</text>
    </svg>
  );
}

/* ── Main Component ──────────────────────────────────────────── */
export default function CALC5() {
  return (
    <div style={S.page}>
      {/* Back */}
      <Link to="/calculus" style={S.back}>
        <ArrowLeft size={16} />
        Voltar ao Cálculo
      </Link>

      {/* Header */}
      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>Optimização</h1>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Landscape de Optimização</h2>
        <div style={S.svgBox}><LossSurfaceSVG /></div>
        <p style={S.p}>
          O landscape de perda de uma rede neural é uma superfície de alta dimensionalidade que relaciona
          os parâmetros do modelo com o valor da função de custo. Ao contrário do que se poderia esperar,
          estes landscapes raramente são convexos — estão repletos de mínimos locais, máximos locais,
          pontos de sela e regiões planas (platôs).
        </p>
        <div style={S.infoBox}>
          <strong style={S.highlight}>Ponto crítico:</strong> qualquer ponto onde <InlineMath math="\nabla f = 0" />.
          Pode ser mínimo local, máximo local ou ponto de sela. A derivada zero é condição necessária
          mas não suficiente para otimalidade.
        </div>
        <p style={S.p}>
          Em alta dimensionalidade (milhões de parâmetros), a geometria muda drasticamente. Para que
          um ponto crítico seja um mínimo local, <em>todos</em> os autovalores da Hessiana precisam
          ser positivos simultaneamente — um evento de probabilidade exponencialmente pequena.
          Na prática, a vasta maioria dos pontos críticos encontrados em redes profundas são pontos de
          sela, não mínimos locais.
        </p>
        <p style={S.p}>
          Observação empírica importante: os mínimos locais que o treino encontra em redes profundas
          tendem a ter valores de perda muito próximos ao mínimo global. Isso sugere que a não-convexidade
          do problema de DL não é tão prejudicial quanto se poderia temer.
        </p>
        <ul style={S.ul}>
          <li>Mínimo global: menor valor da função em todo o domínio</li>
          <li>Mínimo local: menor valor em uma vizinhança</li>
          <li>Ponto de sela: mínimo em algumas direções, máximo em outras</li>
          <li>Platô: região onde o gradiente é quase zero mas não é ponto crítico</li>
        </ul>
      </section>

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Condições de 1ª Ordem</h2>
        <p style={S.p}>
          A condição necessária de primeira ordem para um mínimo (irrestrito) é que o gradiente seja zero
          no ponto ótimo. Esta condição é chamada de <em>condição de estacionaridade</em>.
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="\text{Condição necessária: } \nabla f(x^*) = 0" />
          <BlockMath math="\text{Exemplo: } f(x, y) = x^2 + y^2 - 2x" />
          <BlockMath math="\frac{\partial f}{\partial x} = 2x - 2 = 0 \implies x^* = 1" />
          <BlockMath math="\frac{\partial f}{\partial y} = 2y = 0 \implies y^* = 0" />
          <BlockMath math="\text{Ponto crítico: } (1, 0),\; f(1,0) = -1" />
        </div>
        <p style={S.p}>
          Para problemas convexos com soluções de forma fechada, resolver <InlineMath math="\nabla f = 0" /> diretamente
          fornece a solução global. Exemplos clássicos: regressão linear (equação normal), LDA, PCA.
          Quando a forma fechada não existe (redes neurais), recorremos ao gradiente descendente.
        </p>
        <div style={S.infoBox}>
          <strong style={S.highlight}>Regressão linear — solução exata:</strong>{' '}
          minimizar <InlineMath math="\|Xw - y\|^2" /> leva a <InlineMath math="\nabla = 2X^\top(Xw-y) = 0" />,
          portanto <InlineMath math="w^* = (X^\top X)^{-1}X^\top y" />. Custo <InlineMath math="O(n^3)" /> — impraticável
          para n grande, donde o gradiente descendente.
        </div>
        <p style={S.p}>
          Para problemas restritos, a condição de estacionaridade é substituída pela condição KKT
          (ver Secção 10). Para problemas com restrições de igualdade, usamos multiplicadores de Lagrange
          (Secção 9). A condição <InlineMath math="\nabla f = 0" /> permanece válida para o Lagrangiano aumentado.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Hessiana e Condições de 2ª Ordem</h2>
        <div style={S.svgBox}><HessianSVG /></div>
        <p style={S.p}>
          A matriz Hessiana <InlineMath math="H = \nabla^2 f" /> captura a curvatura da função em cada direção. Formalmente,
          o elemento <InlineMath math="(i,j)" /> da Hessiana é <InlineMath math="H_{ij} = \dfrac{\partial^2 f}{\partial x_i \partial x_j}" />.
          Para funções suficientemente suaves, <InlineMath math="H" /> é simétrica.
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="H = \left[\frac{\partial^2 f}{\partial x_i \partial x_j}\right]" />
          <BlockMath math="\text{Exemplo: } f(x,y) = x^2 + 3xy + y^2" />
          <BlockMath math="H = \begin{bmatrix}2 & 3\\ 3 & 2\end{bmatrix},\quad \lambda_1 = 5,\; \lambda_2 = -1 \implies \text{ponto de sela}" />
        </div>
        <p style={S.p}>
          As condições suficientes de segunda ordem classificam os pontos críticos:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Hessiana em x*</th>
              <th style={S.th}>Autovalores</th>
              <th style={S.th}>Classificação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Definida Positiva', 'Todos > 0', 'Mínimo local'],
              ['Definida Negativa', 'Todos < 0', 'Máximo local'],
              ['Indefinida', 'Sinais mistos', 'Ponto de sela'],
              ['Semi-def. Positiva', 'Alguns = 0', 'Inconclusivo (1ª ordem)'],
            ].map(([h, ev, cl]) => (
              <tr key={h}>
                <td style={S.td}>{h}</td>
                <td style={S.td}>{ev}</td>
                <td style={S.td}>{cl}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          A decomposição espectral <InlineMath math="H = Q\Lambda Q^\top" /> (onde Q contém os autovetores e <InlineMath math="\Lambda" /> os autovalores)
          revela as direções principais de curvatura. Ao longo do autovetor com maior autovalor, a curvatura
          é mais acentuada (aprendizagem mais lento para gradiente descendente). Ao longo do menor autovetor,
          a curvatura é suave. Esta diferença de escala é a origem do problema de condicionamento.
        </p>
        <div style={S.infoBox}>
          <strong style={S.highlight}>Número de condição:</strong> <InlineMath math="\kappa(H) = \lambda_{max} / \lambda_{min}" />.
          Quanto maior, mais difícil para o GD convergir (é necessário passo pequeno para evitar
          divergência na direção de alta curvatura, mas isso é lento na direção de baixa curvatura).
        </div>
      </section>

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Convexidade</h2>
        <div style={S.svgBox}><ConvexSVG /></div>
        <p style={S.p}>
          Um conjunto C é <em>convexo</em> se para quaisquer x, y em C e <InlineMath math="\lambda" /> em [0,1],
          o ponto <InlineMath math="\lambda x + (1-\lambda)y" /> também pertence a C — i.e., o segmento de
          reta entre quaisquer dois pontos está inteiramente no conjunto.
        </p>
        <p style={S.p}>
          Uma função <InlineMath math="f: C \to \mathbb{R}" /> é <em>convexa</em> se o epígrafo (conjunto de pontos
          acima do gráfico) é um conjunto convexo, equivalentemente:
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y) \quad \forall\, \lambda \in [0,1]" />
          <BlockMath math="\text{1ª ordem: } f(y) \geq f(x) + \nabla f(x)^\top(y-x)" />
          <BlockMath math="\text{2ª ordem: } \nabla^2 f(x) \succeq 0 \text{ (Hessiana SDP em todo } x\text{)}" />
        </div>
        <p style={S.p}>
          A propriedade mais importante da convexidade em otimização: <strong>qualquer mínimo local é
          também mínimo global</strong>. Isso elimina a preocupação com pontos de sela e mínimos locais
          espúrios — basta encontrar onde <InlineMath math="\nabla f = 0" />.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Problema ML</th>
              <th style={S.th}>Convexo?</th>
              <th style={S.th}>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Regressão Linear', 'Sim', 'Perda quadrática, função afim'],
              ['Regressão Logística', 'Sim', 'Log-loss é convexa em w'],
              ['SVM (hard/soft margin)', 'Sim', 'QP com restrições lineares'],
              ['LASSO / Ridge', 'Sim', 'Norma + quadrático'],
              ['Redes Neurais', 'Não', 'Composição não-linear'],
              ['Autoencoders / GANs', 'Não', 'Não-linearidades e min-max'],
            ].map(([p, c, m]) => (
              <tr key={p}>
                <td style={S.td}>{p}</td>
                <td style={S.td} style={{ color: c === 'Sim' ? '#4a9eed' : '#bae6fd' }}>{c}</td>
                <td style={S.td}>{m}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Gradient Descent — Análise</h2>
        <div style={S.svgBox}><GDContoursVG /></div>
        <p style={S.p}>
          O gradiente descendente é o algoritmo de otimização central em machine learning. A cada iteração,
          move-se na direção de maior descida local — o negativo do gradiente.
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="x_{n+1} = x_n - \alpha\,\nabla f(x_n)" />
          <BlockMath math="\text{Lipschitz: } \|\nabla f(x) - \nabla f(y)\| \leq L\|x - y\|,\quad \alpha^* = 1/L" />
          <BlockMath math="\text{Conv. (}\mu\text{-SC)}: \|x_n - x^*\|^2 \leq \left(1 - \frac{\mu}{L}\right)^n \|x_0 - x^*\|^2" />
          <BlockMath math="\text{Convexo: } f(x_n) - f^* \leq O(1/k) \qquad \text{Não-convexo: } \|\nabla f\|^2 \leq O(1/\sqrt{k})" />
        </div>
        <p style={S.p}>
          A escolha da taxa de aprendizagem <InlineMath math="\alpha" /> é crítica. Se <InlineMath math="\alpha > 2/L" />, o algoritmo diverge
          para funções quadráticas. Se <InlineMath math="\alpha \ll 1/L" />, a convergência é desnecessariamente lenta.
          A busca exata em linha (exact line search) encontra o <InlineMath math="\alpha" /> ótimo a cada passo via minimização
          1D, mas é computacionalmente caro. A busca de Armijo/Wolfe fornece um compromisso razoável.
        </p>
        <div style={S.infoBox}>
          <strong style={S.highlight}>Intuição geométrica:</strong> o gradiente aponta perpendicular
          às curvas de nível. Em problemas mal-condicionados (elipses muito alongadas), o GD zigue-zageia
          ao invés de ir em linha reta. É por isso que otimizadores como o Adam e o método do gradiente
          conjugado foram desenvolvidos.
        </div>
      </section>

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Variantes de Gradient Descent</h2>
        <div style={S.svgBox}><OptimizerTrajSVG /></div>
        <p style={S.p}>
          Existem três regimes de amostragem para estimar o gradiente, cada um com seu trade-off:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Variante</th>
              <th style={S.th}>Gradiente usa</th>
              <th style={S.th}>Vantagem</th>
              <th style={S.th}>Desvantagem</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Batch GD', 'Todos os dados', 'Gradiente exato', 'Lento por iteração'],
              ['SGD', '1 exemplo', 'Muito rápido, ruído útil', 'Alta variância'],
              ['Mini-batch', 'B exemplos', 'Compromisso GPU-friendly', 'Hiperparâmetro B'],
            ].map(([v, g, a, d]) => (
              <tr key={v}>
                <td style={S.td}>{v}</td>
                <td style={S.td}>{g}</td>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          O <em>momentum</em> acumula a velocidade nas direções consistentes e amorteça oscilações.
          Formalmente, mantém um vetor velocidade v que é uma média exponencial dos gradientes passados:
        </p>
        <div style={S.formulaBox}>
          <strong>Momentum (Heavy Ball):</strong>
          <BlockMath math="v_t = \beta\, v_{t-1} + \nabla f(x_t) \qquad x_{t+1} = x_t - \alpha\, v_t" />
          <strong>Nesterov Accelerated Gradient (NAG):</strong>
          <BlockMath math="v_t = \beta\, v_{t-1} + \nabla f(x_t - \alpha\beta\, v_{t-1}) \qquad x_{t+1} = x_t - \alpha\, v_t" />
        </div>
        <p style={S.p}>
          O NAG obtém taxa de convergência <InlineMath math="O(1/k^2)" /> para funções convexas, vs <InlineMath math="O(1/k)" /> do GD simples —
          uma melhoria significativa demonstrada por Nesterov em 1983. A intuição é que ao avaliar o gradiente
          no ponto "onde o momentum nos levaria", conseguimos corrigir antecipadamente.
        </p>
        <div style={S.infoBox}>
          <strong style={S.highlight}>Escolha de <InlineMath math="\beta" />:</strong> valores típicos são 0.9, 0.95 ou 0.99.
          Um <InlineMath math="\beta" /> maior preserva mais velocidade acumulada mas pode overshoot. Em DL, <InlineMath math="\beta = 0.9" /> é
          o padrão mais comum.
        </div>
      </section>

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Optimizadores Adaptativos</h2>
        <div style={S.svgBox}><AdaptiveSVG /></div>
        <p style={S.p}>
          Os otimizadores adaptativos ajustam a taxa de aprendizagem individualmente por parâmetro,
          com base no histórico de gradientes. Isso é especialmente útil quando diferentes parâmetros
          têm escalas de gradiente muito distintas (e.g., embeddings raros vs. pesos densos).
        </p>
        <div style={S.formulaBox}>
          <strong>AdaGrad:</strong>
          <BlockMath math="G_t = G_{t-1} + g_t^2 \qquad x_{t+1} = x_t - \frac{\alpha}{\sqrt{G_t + \varepsilon}} g_t" />
          <strong>RMSprop:</strong>
          <BlockMath math="v_t = \beta_2 v_{t-1} + (1-\beta_2)g_t^2 \qquad x_{t+1} = x_t - \frac{\alpha}{\sqrt{v_t + \varepsilon}} g_t" />
          <strong>Adam (Kingma &amp; Ba, 2014):</strong>
          <BlockMath math="m_t = \beta_1 m_{t-1} + (1-\beta_1)g_t \qquad v_t = \beta_2 v_{t-1} + (1-\beta_2)g_t^2" />
          <BlockMath math="\hat{m}_t = \frac{m_t}{1-\beta_1^t} \qquad \hat{v}_t = \frac{v_t}{1-\beta_2^t}" />
          <BlockMath math="x_{t+1} = x_t - \frac{\alpha\,\hat{m}_t}{\sqrt{\hat{v}_t} + \varepsilon} \qquad \beta_1=0.9,\; \beta_2=0.999,\; \varepsilon=10^{-8}" />
        </div>
        <p style={S.p}>
          O <strong>AdamW</strong> separa o weight decay da atualização adaptativa. No Adam padrão,
          o weight decay é efetivamente escalonado pela inversa do 2º momento, o que reduz seu efeito
          em parâmetros com gradientes grandes. No AdamW, o decay é aplicado diretamente ao peso:
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="\text{AdamW: } x_{t+1} = x_t - \frac{\alpha\,\hat{m}_t}{\sqrt{\hat{v}_t} + \varepsilon} - \alpha\lambda\, x_t \quad \text{(weight decay desacoplado)}" />
        </div>
        <div style={S.infoBox}>
          <strong style={S.highlight}>Problema do AdaGrad:</strong> <InlineMath math="G_t" /> cresce monotonicamente,
          fazendo o passo efetivo tender a zero. O RMSprop corrige isso com média exponencial (memória finita).
          O Adam combina momentum (1º momento) com RMSprop (2º momento) e adiciona correção de bias nas
          iterações iniciais onde m e v são subestimados.
        </div>
      </section>

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Learning Rate Schedules</h2>
        <div style={S.svgBox}><LRScheduleSVG /></div>
        <p style={S.p}>
          A taxa de aprendizagem fixa raramente é ótima ao longo de todo o treino. Schedules adaptativos
          permitem exploração agressiva no início e refinamento fino ao final.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Schedule</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Step Decay', <InlineMath math="\alpha \times \gamma^{(\text{época}/s)}" />, 'ResNets clássicas'],
              ['Exponential', <InlineMath math="\alpha_0 \times e^{-\lambda t}" />, 'Decaimento suave geral'],
              ['Cosine Annealing', <InlineMath math="\alpha_{min} + \tfrac{1}{2}(\alpha_{max}-\alpha_{min})(1+\cos(\pi t/T))" />, 'Transformers, ViT'],
              ['Warm Restarts (SGDR)', 'Cosine com resets periódicos', 'Ensemble via snapshots'],
              ['Linear Warmup + Cosine', 'Ramp-up linear, depois cosine', 'BERT, GPT, LLMs'],
              ['1-Cycle Policy', 'Sobe e desce em 1 ciclo', 'Fast.ai, fine-tuning'],
            ].map(([s, f, u]) => (
              <tr key={s}>
                <td style={S.td}>{s}</td>
                <td style={S.td} style={{ fontFamily: 'monospace', fontSize: '0.82rem' }}>{f}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.infoBox}>
          <strong style={S.highlight}>Por que warmup?</strong> No início do treino, os pesos são
          aleatórios e os gradientes são ruidosos e de grande magnitude. Uma LR alta nesse estágio pode
          causar instabilidade (especialmente em transformers com layer norm). O warmup linear permite que
          os parâmetros se ajustem a uma região razoável antes de acelerar.
        </div>
        <p style={S.p}>
          O <em>cyclical learning rate</em> (Smith, 2017) oscila periodicamente entre um mínimo e um máximo.
          A intuição é que aumentar temporariamente a LR pode ajudar a escapar de mínimos rasos e pontos
          de sela, potencialmente levando a mínimos mais planos (flat minima) que generalizam melhor.
          Esta é uma das motivações para os warm restarts: ao reiniciar a LR, o modelo "re-explora"
          o landscape, podendo encontrar soluções melhores.
        </p>
      </section>

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Optimização Restrita — Multiplicadores de Lagrange</h2>
        <div style={S.svgBox}><LagrangeSVG /></div>
        <p style={S.p}>
          Problemas de otimização com restrições de igualdade surgem frequentemente em ML: SVM (margin),
          análise de componentes principais (normalização), entropia máxima (distribuições de probabilidade).
          O método de Lagrange transforma um problema restrito num problema irrestrito aumentado.
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="\min f(x) \;\text{ sujeito a }\; g(x) = 0" />
          <BlockMath math="\mathcal{L}(x, \lambda) = f(x) - \lambda\, g(x)" />
          <BlockMath math="\nabla_x \mathcal{L} = \nabla f(x) - \lambda\,\nabla g(x) = 0 \qquad \nabla_\lambda \mathcal{L} = g(x) = 0" />
          <BlockMath math="\nabla f(x^*) = \lambda\,\nabla g(x^*) \quad \text{(gradientes paralelos)}" />
        </div>
        <p style={S.p}>
          A interpretação geométrica é elegante: no ponto ótimo, as curvas de nível de <InlineMath math="f" /> são tangentes
          à curva de restrição <InlineMath math="g = 0" />. Isso acontece exatamente quando os gradientes de <InlineMath math="f" /> e <InlineMath math="g" /> são paralelos
          (proporcionais), com o multiplicador <InlineMath math="\lambda" /> sendo a constante de proporcionalidade.
        </p>
        <p style={S.p}>
          Para múltiplas restrições de igualdade <InlineMath math="g_i(x) = 0,\ i = 1,...,m" />:
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="\mathcal{L}(x, \lambda) = f(x) - \sum_i \lambda_i\, g_i(x)" />
          <BlockMath math="\nabla_x \mathcal{L} = 0 \;\text{ e }\; g_i(x) = 0 \;\forall\, i" />
        </div>
        <div style={S.infoBox}>
          <strong style={S.highlight}>SVM — margin maximization:</strong> maximizar <InlineMath math="2/\|w\|" /> sujeito a
          <InlineMath math="y_i(w^\top x_i + b) \geq 1" />. O dual Lagrangiano leva à formulação QP:
          <InlineMath math="\max \sum \alpha_i - \tfrac{1}{2}\sum_{ij} \alpha_i \alpha_j y_i y_j \langle x_i, x_j\rangle" />,
          onde os <InlineMath math="\alpha_i > 0" /> são os multiplicadores de Lagrange dos support vectors.
        </div>
      </section>

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Condições KKT</h2>
        <div style={S.svgBox}><KKTSVG /></div>
        <p style={S.p}>
          As condições de Karush-Kuhn-Tucker (KKT) generalizam os multiplicadores de Lagrange para
          restrições de desigualdade. São condições necessárias de otimalidade para problemas não-lineares
          com restrições de igualdade e desigualdade.
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="\min f(x) \;\text{ s.t. }\; g_i(x) \leq 0,\; h_j(x) = 0" />
          <strong>Condições KKT em x*:</strong>
          <BlockMath math="1.\; \nabla f + \sum_i \lambda_i\nabla g_i + \sum_j \mu_j\nabla h_j = 0" />
          <BlockMath math="2.\; g_i(x^*) \leq 0,\; h_j(x^*) = 0 \quad 3.\; \lambda_i \geq 0 \quad 4.\; \lambda_i g_i(x^*) = 0" />
        </div>
        <p style={S.p}>
          A condição de slackness complementar é particularmente importante: para cada restrição de
          desigualdade, ou a restrição está ativa (<InlineMath math="g_i = 0" />, <InlineMath math="\lambda_i" /> pode ser <InlineMath math="> 0" />)
          ou o multiplicador é zero (<InlineMath math="\lambda_i = 0" />, <InlineMath math="g_i < 0" /> — restrição inativa).
          Nunca ambos são simultaneamente não-nulos.
        </p>
        <div style={S.infoBox}>
          <strong style={S.highlight}>SVM e KKT:</strong> os support vectors são exatamente os pontos
          onde a restrição <InlineMath math="g_i = 0" /> está ativa, correspondendo a <InlineMath math="\alpha_i > 0" />.
          Pontos corretamente classificados com margem larga têm <InlineMath math="\alpha_i = 0" /> e não contribuem
          para o hiperplano. O kernel trick funciona porque a solução depende apenas de produtos internos
          <InlineMath math="\langle x_i, x_j\rangle" />.
        </div>
        <p style={S.p}>
          O <em>caminho de solução do LASSO</em> (LARS algorithm) é outro exemplo de KKT: à medida que
          o parâmetro de regularização <InlineMath math="\lambda" /> varia, diferentes subconjuntos de coeficientes entram
          e saem de zero, e as condições KKT determinam exatamente quando cada transição ocorre.
        </p>
      </section>

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Pontos de Sela e Problemas em DL</h2>
        <div style={S.svgBox}><SaddleSVG /></div>
        <p style={S.p}>
          Em alta dimensionalidade, os pontos de sela dominam o landscape de otimização. Para uma rede
          com n parâmetros, um ponto crítico aleatório tem probabilidade <InlineMath math="2^{-n}" /> de ser um
          mínimo local (todos os autovalores positivos). Com n na ordem de milhões, isso é efetivamente
          impossível.
        </p>
        <p style={S.p}>
          A teoria dos campos aleatórios de Bray & Dean (2007) e trabalhos de Dauphin et al. (2014)
          mostram que em redes profundas: (1) os mínimos locais encontrados em prática tendem a ter perda
          similar ao mínimo global; (2) a maioria dos pontos críticos são selas; (3) o índice dos pontos
          de sela (fração de autovalores negativos) decresce com o valor da perda — pontos de sela
          perto do mínimo global têm poucos autovalores negativos.
        </p>
        <div style={S.formulaBox}>
          <p style={{margin:'0 0 0.5rem'}}>Ponto de sela típico em n dimensões: H tem k autovalores negativos, n−k positivos.</p>
          <p style={{margin:'0 0 0.25rem'}}><strong>Estratégias para escapar selas:</strong></p>
          <ul style={{margin:0, paddingLeft:'1.2rem'}}>
            <li>Ruído SGD — perturbação estocástica natural</li>
            <li>Perturbação aleatória deliberada (PGD)</li>
            <li>Métodos de 2ª ordem — usa curvatura negativa</li>
            <li>Adam — atualizações adaptativas podem ajudar</li>
          </ul>
        </div>
        <p style={S.p}>
          As <strong>GANs</strong> (Generative Adversarial Networks) exemplificam um problema de
          otimização min-max onde o objetivo é encontrar um ponto de sela:
        </p>
        <div style={S.formulaBox}>
          <BlockMath math="\min_G \max_D V(G, D) = \mathbb{E}[\log D(x)] + \mathbb{E}[\log(1 - D(G(z)))]" />
          <p style={{margin:'0.5rem 0 0', fontSize:'0.9rem'}}>O gerador G minimiza, o discriminador D maximiza. O equilíbrio é um ponto de sela — nem min nem max global.</p>
        </div>
        <p style={S.p}>
          Isso torna o treino de GANs inerentemente instável: os algoritmos de gradiente padrão
          não convergem garantidamente para o equilíbrio de Nash do jogo min-max. Variantes como
          Wasserstein GAN e técnicas de estabilização (gradient penalty, spectral normalization)
          foram desenvolvidas especificamente para mitigar este problema.
        </p>
      </section>
    </div>
  );
}
