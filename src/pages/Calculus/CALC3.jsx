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
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1rem', margin: '1.5rem 0', display: 'flex', justifyContent: 'center' },
  formula: { background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.20)', borderRadius: 8, padding: '0.75rem 1.25rem', fontFamily: 'monospace', fontSize: '1rem', color: color, margin: '1rem 0', textAlign: 'center', letterSpacing: '0.03em' },
};

/* ─────────────────────────── SVGs ─────────────────────────── */

function SurfacePlot3D() {
  const rows = 8, cols = 8;
  const w = 500, h = 320;
  const ox = 80, oy = 260;
  const sx = 40, sy = 22, sz = 80;

  function project(xi, yi, zi) {
    const x = ox + (xi - yi) * sx;
    const y = oy - zi * sz - (xi + yi) * sy * 0.5;
    return [x, y];
  }

  function surf(xi, yi) {
    const x = (xi - rows / 2) / (rows / 2);
    const y = (yi - cols / 2) / (cols / 2);
    return Math.exp(-(x * x + y * y) * 2) * 0.8 + 0.1;
  }

  const gridLines = [];
  for (let i = 0; i <= rows; i++) {
    const pts = [];
    for (let j = 0; j <= cols; j++) {
      const z = surf(i, j);
      const [px, py] = project(i, j, z);
      pts.push(`${px},${py}`);
    }
    gridLines.push(<polyline key={`r${i}`} points={pts.join(' ')} fill="none" stroke={color} strokeWidth="1" opacity="0.5" />);
  }
  for (let j = 0; j <= cols; j++) {
    const pts = [];
    for (let i = 0; i <= rows; i++) {
      const z = surf(i, j);
      const [px, py] = project(i, j, z);
      pts.push(`${px},${py}`);
    }
    gridLines.push(<polyline key={`c${j}`} points={pts.join(' ')} fill="none" stroke={color} strokeWidth="1" opacity="0.35" />);
  }

  // contour lines projected below — centered under the visible surface base
  const contourLevels = [0.8, 0.6, 0.4, 0.2];
  const contours = contourLevels.map((lv, li) => {
    return <ellipse key={`ct${li}`} cx={240} cy={272} rx={lv * 90} ry={lv * 22} fill="none" stroke={color} strokeWidth="1" opacity={0.25 + li * 0.12} strokeDasharray="4 2" />;
  });

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      {gridLines}
      {contours}
      <text x="250" y="18" textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Superfície f(x,y) com curvas de nível projetadas</text>
      <text x="420" y="295" fontSize="11" fill="var(--text-secondary)">x</text>
      <text x="20" y="295" fontSize="11" fill="var(--text-secondary)">y</text>
      <text x="78" y="180" fontSize="11" fill="var(--text-secondary)">f</text>
    </svg>
  );
}

function SliceSVG() {
  const w = 480, h = 280;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* axes */}
      <line x1="60" y1="240" x2="420" y2="240" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="60" y1="240" x2="60" y2="40" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="425" y="244" fontSize="12" fill="var(--text-secondary)">x</text>
      <text x="55" y="35" fontSize="12" fill="var(--text-secondary)">f</text>
      <text x="200" y="258" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Corte em y = y₀ fixo</text>
      {/* curve: f(x, y0) = x^2 * y0 + y0^3, y0=1.5 => x^2*1.5 + 3.375 */}
      <path d="M70,220 Q160,180 240,140 Q300,110 370,60" fill="none" stroke={color} strokeWidth="2.5" />
      {/* tangent at x0 ~ 240 */}
      <line x1="180" y1="170" x2="300" y2="110" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="6 3" />
      <circle cx="240" cy="140" r="5" fill={color} />
      <text x="248" y="136" fontSize="11" fill={color}>(x₀, f(x₀,y₀))</text>
      <text x="305" y="105" fontSize="11" fill="#f59e0b">declive = ∂f/∂x</text>
      <text x="62" y="36" fontSize="10" fill="var(--text-secondary)">Curva 1D com y₀ fixo</text>
    </svg>
  );
}

function TangentPlaneSVG() {
  const w = 480, h = 220;
  const pts = [];
  for (let i = 0; i <= 30; i++) {
    const x = 60 + i * 12;
    const y = 110 - Math.sin(i * 0.3) * 55 - (i * 0.5);
    pts.push(`${x},${y}`);
  }
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* surface approximation */}
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2" />
      {/* tangent plane at mid point */}
      <line x1="120" y1="105" x2="290" y2="63" stroke="#f59e0b" strokeWidth="2.5" />
      <circle cx="200" cy="85" r="5" fill={color} />
      {/* label */}
      <text x="245" y="25" fontSize="11" fill="#f59e0b">Plano tangente</text>
      <text x="245" y="39" fontSize="10" fill="#f59e0b">f(x+Δx,y+Δy) ≈ f + fₓΔx + f_y Δy</text>
      {/* Δx arrow */}
      <line x1="200" y1="150" x2="260" y2="150" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr)" />
      <text x="225" y="165" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Δx</text>
      {/* Δf arrow */}
      <line x1="260" y1="150" x2="260" y2="88" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="4 2" />
      <text x="272" y="122" fontSize="11" fill="var(--text-secondary)">Δf</text>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x="240" y="212" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Aproximação linear / diferencial total</text>
    </svg>
  );
}

function GradientFieldSVG() {
  const w = 480, h = 300;
  const arrows = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      const cx = 60 + i * 60;
      const cy = 50 + j * 52;
      const gx = cx - 240;
      const gy = cy - 150;
      const mag = Math.sqrt(gx * gx + gy * gy) || 1;
      const nx = (gx / mag) * 18;
      const ny = (gy / mag) * 18;
      arrows.push(
        <g key={`g${i}${j}`}>
          <line x1={cx} y1={cy} x2={cx + nx} y2={cy + ny} stroke={color} strokeWidth="1.5" markerEnd="url(#ga)" />
        </g>
      );
    }
  }
  // ellipse contours
  const contours = [30, 55, 80, 110].map((r, i) => (
    <ellipse key={i} cx={240} cy={150} rx={r} ry={r * 0.6} fill="none" stroke={color} strokeWidth="1" opacity={0.3 + i * 0.1} />
  ));
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      <defs>
        <marker id="ga" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={color} />
        </marker>
      </defs>
      {contours}
      {arrows}
      <circle cx={240} cy={150} r={5} fill="#f59e0b" />
      <text x="245" y="145" fontSize="11" fill="#f59e0b">mínimo</text>
      <text x="240" y="290" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Campo gradiente: vetores perpendiculares às curvas de nível</text>
    </svg>
  );
}

function DirectionalDerivSVG() {
  const w = 480, h = 300;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* Axes */}
      <line x1="50" y1="250" x2="430" y2="250" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="50" y1="250" x2="50" y2="30" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="435" y="254" fontSize="12" fill="var(--text-secondary)">t</text>
      <text x="44" y="26" fontSize="12" fill="var(--text-secondary)">f</text>
      {/* curve along direction u */}
      <path d="M70,220 C150,200 220,160 300,100 C340,75 380,60 420,50" fill="none" stroke={color} strokeWidth="2.5" />
      {/* point and tangent */}
      <circle cx={230} cy={155} r={5} fill="#f59e0b" />
      <line x1={170} y1={185} x2={290} y2={120} stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" />
      <text x={295} y={115} fontSize="11" fill="#f59e0b">D_u f = ∇f · u</text>
      {/* direction vector */}
      <line x1={230} y1={155} x2={270} y2={130} stroke="#fb923c" strokeWidth="2" markerEnd="url(#du)" />
      <text x={272} y={128} fontSize="11" fill="#fb923c">u</text>
      <defs>
        <marker id="du" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="#fb923c" />
        </marker>
      </defs>
      <text x="240" y="280" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Taxa de variação na direção u (vetor unitário)</text>
    </svg>
  );
}

function JacobianSVG() {
  const w = 480, h = 300;
  const inputs = ['x₁', 'x₂', 'x₃'];
  const outputs = ['f₁', 'f₂'];
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* input nodes */}
      {inputs.map((lbl, i) => (
        <g key={i}>
          <circle cx={80} cy={80 + i * 70} r={24} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={80} y={85 + i * 70} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill={color}>{lbl}</text>
        </g>
      ))}
      {/* output nodes */}
      {outputs.map((lbl, i) => (
        <g key={i}>
          <circle cx={380} cy={115 + i * 80} r={24} fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
          <text x={380} y={120 + i * 80} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="#f59e0b">{lbl}</text>
        </g>
      ))}
      {/* edges */}
      {inputs.map((_, i) =>
        outputs.map((_, j) => (
          <line key={`e${i}${j}`} x1={104} y1={80 + i * 70} x2={356} y2={115 + j * 80} stroke="var(--text-secondary)" strokeWidth="1.2" />
        ))
      )}
      {/* J label */}
      <rect x={185} y={120} width={110} height={60} rx={8} fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1" />
      <text x={240} y={148} textAnchor="middle" fontSize="12" fill={color}>J (2×3)</text>
      <text x={240} y={165} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">∂fᵢ / ∂xⱼ</text>
      <text x={240} y={285} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Jacobiana: cada entrada mapeia para cada saída</text>
    </svg>
  );
}

function HessianSVG() {
  const w = 480, h = 300;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      {/* bowl - positive definite */}
      <path d="M60,220 Q160,100 240,80 Q320,100 420,220" fill="none" stroke={color} strokeWidth="2.5" />
      <text x={240} y={68} textAnchor="middle" fontSize="11" fill={color}>{"λ₁>0, λ₂>0 → mínimo local"}</text>
      {/* curvature arrows */}
      <path d="M150,170 Q180,130 210,120" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
      <text x={115} y={165} fontSize="10" fill="#f59e0b">curv. κ₁</text>
      <path d="M280,120 Q310,130 330,160" fill="none" stroke="#fb923c" strokeWidth="1.5" />
      <text x={335} y={165} fontSize="10" fill="#fb923c">curv. κ₂</text>
      <circle cx={240} cy={80} r={5} fill="#f59e0b" />
      {/* saddle hint */}
      <path d="M60,170 Q140,210 240,190 Q340,170 420,200" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x={240} y={215} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Ponto de sela: H indefinida (λ mistas)</text>
      <text x={240} y={280} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Eigenvalores da Hessiana determinam a curvatura local</text>
    </svg>
  );
}

function CompGraphSVG() {
  const w = 480, h = 300;
  const nodes = [
    { id: 'x', x: 60, y: 150, lbl: 'x' },
    { id: 'y', x: 60, y: 220, lbl: 'y' },
    { id: 'u', x: 200, y: 110, lbl: 'u(x,y)' },
    { id: 'v', x: 200, y: 220, lbl: 'v(x,y)' },
    { id: 'f', x: 370, y: 165, lbl: 'f(u,v)' },
  ];
  const edges = [
    { from: 'x', to: 'u', lbl: '∂u/∂x' },
    { from: 'y', to: 'u', lbl: '∂u/∂y' },
    { from: 'x', to: 'v', lbl: '∂v/∂x' },
    { from: 'y', to: 'v', lbl: '∂v/∂y' },
    { from: 'u', to: 'f', lbl: '∂f/∂u' },
    { from: 'v', to: 'f', lbl: '∂f/∂v' },
  ];
  const nodeMap = {};
  nodes.forEach(n => { nodeMap[n.id] = n; });
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      <defs>
        <marker id="cga" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {edges.map((e, i) => {
        const a = nodeMap[e.from], b = nodeMap[e.to];
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        return (
          <g key={i}>
            <line x1={a.x + 32} y1={a.y} x2={b.x - 32} y2={b.y} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#cga)" />
            <text x={mx} y={my - 6} textAnchor="middle" fontSize="9" fill={color}>{e.lbl}</text>
          </g>
        );
      })}
      {nodes.map(n => (
        <g key={n.id}>
          <rect x={n.x - 30} y={n.y - 16} width={60} height={32} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="11" fill={color}>{n.lbl}</text>
        </g>
      ))}
      <text x={240} y={285} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Grafo computacional: arestas com derivadas parciais</text>
    </svg>
  );
}

function AutogradSVG() {
  const w = 480, h = 300;
  const nodes = [
    { x: 70, y: 80, lbl: 'w' },
    { x: 70, y: 160, lbl: 'x' },
    { x: 200, y: 120, lbl: 'wx' },
    { x: 70, y: 240, lbl: 'b' },
    { x: 320, y: 165, lbl: 'wx+b' },
    { x: 420, y: 165, lbl: 'L' },
  ];
  const fwdEdges = [
    [0, 2], [1, 2], [2, 4], [3, 4], [4, 5]
  ];
  const bwdLabels = ['∂L/∂w', '∂L/∂x', '∂L/∂(wx)', '∂L/∂b', '∂L/∂(wx+b)'];
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      <defs>
        <marker id="fw" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={color} />
        </marker>
        <marker id="bw" markerWidth="5" markerHeight="5" refX="0" refY="2.5" orient="auto-start-reverse">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="#f59e0b" />
        </marker>
      </defs>
      {fwdEdges.map(([ai, bi], i) => {
        const a = nodes[ai], b = nodes[bi];
        return <line key={i} x1={a.x + 22} y1={a.y} x2={b.x - 22} y2={b.y} stroke={color} strokeWidth="1.5" markerEnd="url(#fw)" />;
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x - 22} y={n.y - 14} width={44} height={28} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="10" fill={color}>{n.lbl}</text>
        </g>
      ))}
      <text x={420} y={195} fontSize="9" fill="#f59e0b">backward()</text>
      <text x={240} y={285} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Forward pass (roxo) + Backward pass / autograd (amarelo)</text>
      <path d="M420,182 C380,220 280,240 200,240 C140,240 100,220 70,210" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#bw)" />
    </svg>
  );
}

function VectorFieldSVG() {
  const w = 480, h = 300;
  const arrows = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 6; j++) {
      const cx = 40 + i * 56;
      const cy = 30 + j * 46;
      // f(x,y) = -x^2 - y^2 => ∇f = (-2x,-2y), negate for gradient field
      const gx = cx - 240;
      const gy = cy - 138;
      const mag = Math.sqrt(gx * gx + gy * gy) || 1;
      const len = Math.min(18, mag * 0.12);
      const nx = (gx / mag) * len;
      const ny = (gy / mag) * len;
      const hue = 200 + Math.floor((mag / 200) * 100);
      arrows.push(
        <line key={`vf${i}${j}`} x1={cx - nx * 0.4} y1={cy - ny * 0.4} x2={cx + nx * 0.6} y2={cy + ny * 0.6} stroke={color} strokeWidth="1.2" opacity={0.5 + (mag / 300)} markerEnd="url(#vfa)" />
      );
    }
  }
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: '100%' }}>
      <defs>
        <marker id="vfa" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4 Z" fill={color} />
        </marker>
      </defs>
      {arrows}
      <circle cx={240} cy={138} r={6} fill="#f59e0b" />
      <text x={248} y={134} fontSize="10" fill="#f59e0b">mínimo / poço de energia</text>
      <text x={240} y={290} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Campo vectorial ∇f — cada seta aponta para o gradiente ascendente</text>
    </svg>
  );
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export default function CALC3() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Calculus for Data Science</Link>

      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Derivadas Parciais &amp; Gradiente</h1>
      <p style={S.lead}>
        Da geometria de superfícies multidimensionais ao motor de todo o machine learning moderno — derivadas parciais, gradiente, Jacobiana, Hessiana e diferenciação automática.
      </p>

      {/* ── SECTION 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Funções de Várias Variáveis</h2>
        <p style={S.p}>
          Uma função de várias variáveis recebe um vector de entradas e devolve um escalar (ou vector): <strong>f: ℝⁿ → ℝ</strong>. O domínio é um espaço de alta dimensão; o gráfico vive em ℝⁿ⁺¹. Em ML, o exemplo canónico é a <em>loss surface</em> L(w₁, w₂, ..., wₙ) — a superfície de perda como função dos parâmetros.
        </p>
        <div style={S.highlight}>
          <strong>Exemplos:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', color: 'var(--text-primary)', lineHeight: 2 }}>
            <li>f(x, y) = x² + y² — paraboloide, mínimo global em (0,0)</li>
            <li>L(w₁, w₂) = (1/n) Σ(w₁xᵢ + w₂ - yᵢ)² — superfície de perda MSE linear</li>
            <li>f(x, y) = densidade de probabilidade conjunta de (X, Y)</li>
            <li>f(x, y) = xy — ponto de sela em (0,0)</li>
          </ul>
        </div>

        <div style={S.svgWrap}><SurfacePlot3D /></div>

        <p style={S.p}>
          <strong>Curvas de nível (contour lines):</strong> são os conjuntos {'{x : f(x) = c}'} para constante c. Em 2D, projectam a superfície 3D num mapa topográfico. Propriedade fundamental: o gradiente ∇f é sempre <em>perpendicular</em> às curvas de nível. Duas curvas de nível próximas indicam variação rápida; curvas afastadas indicam variação lenta.
        </p>
        <div style={S.note}>
          Em ML, as curvas de nível da loss surface mostram as regiões de igual custo. O gradiente descent move-se perpendicularmente a essas curvas, na direcção do declive máximo negativo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Derivada Parcial — Definição</h2>
        <p style={S.p}>
          A derivada parcial de f em relação a xᵢ é definida fixando todas as outras variáveis e diferenciando apenas em xᵢ:
        </p>
        <div style={S.formula}>
          <BlockMath math="\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h,\,y) - f(x,\,y)}{h}" />
        </div>
        <p style={S.p}>
          <strong>Notações equivalentes:</strong> ∂f/∂x, fₓ, D₁f, ∂₁f. Todas denotam o mesmo objecto — a taxa de variação de f quando apenas x varia.
        </p>

        
          <strong>Exemplo completo:</strong> f(x, y) = x²y + y³
          <div style={S.formula}><BlockMath math="\frac{\partial f}{\partial x} = 2xy" /></div>
          <div style={S.formula}><BlockMath math="\frac{\partial f}{\partial y} = x^2 + 3y^2" /></div>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Para ∂f/∂x: trata-se y como constante → derivar x²y em relação a x dá 2xy; y³ é constante → derivada 0.
            Para ∂f/∂y: x² é constante → derivada 0; derivar y³ dá 3y².
          </p>
        

        <div style={S.svgWrap}><SliceSVG /></div>

        <p style={S.p}>
          Geometricamente, ∂f/∂x é o declive da curva obtida cortando a superfície com o plano y = y₀ fixo. É uma função 1D ordinária cujo declive pode ser computado com as regras usuais de derivação.
        </p>

        <p style={S.p}>
          <strong>Derivadas parciais de ordem superior:</strong> aplica-se a definição repetidamente.
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\!\left(\frac{\partial f}{\partial x}\right) \qquad \frac{\partial^2 f}{\partial x\,\partial y} = \frac{\partial}{\partial x}\!\left(\frac{\partial f}{\partial y}\right)" /></div>
        <div style={S.note}>
          Pelo teorema de Schwarz (Clairaut), se as derivadas mistas são contínuas: ∂²f/∂x∂y = ∂²f/∂y∂x. A ordem de diferenciação não importa para funções suaves — relevante para a simetria da Hessiana.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Diferencial Total e Aproximação Linear</h2>
        <p style={S.p}>
          O <strong>diferencial total</strong> generaliza a diferencial 1D: para f(x, y) diferenciável,
        </p>
        <div style={S.formula}><BlockMath math="df = \frac{\partial f}{\partial x}\,dx + \frac{\partial f}{\partial y}\,dy" /></div>
        <p style={S.p}>
          Isto dá uma aproximação linear de como f varia quando (x, y) varia de forma infinitesimal. Para variações finitas:
        </p>
        <div style={S.formula}><BlockMath math="f(x+\Delta x,\,y+\Delta y) \approx f(x,y) + f_x\,\Delta x + f_y\,\Delta y" /></div>

        <div style={S.svgWrap}><TangentPlaneSVG /></div>

        <p style={S.p}>
          O plano tangente à superfície em (x₀, y₀, f(x₀,y₀)) é exactamente esta aproximação linear. Em notação vectorial:
        </p>
        <div style={S.formula}><BlockMath math="df = \nabla f \cdot d\mathbf{r}" /></div>
        <p style={S.p}>
          onde dr = (dx, dy) é o vector de deslocamento e ∇f = (∂f/∂x, ∂f/∂y) é o gradiente.
        </p>

        
          <strong>Derivada total vs parcial — quando as variáveis estão relacionadas:</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            Se x = x(t) e y = y(t), então f(x(t), y(t)) é função de t. A derivada total em relação a t é:
          </p>
          <div style={S.formula}><BlockMath math="\frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}" /></div>
          <p style={{ margin: '0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Este é o caso particular da regra da cadeia multivariável — base do backpropagation.
          </p>
        

        <div style={S.note}>
          Análise de erro: o erro da aproximação linear é O(‖Δr‖²). Para variações pequenas, o plano tangente é uma excelente aproximação — justifica o método de Newton e outros algoritmos de segunda ordem.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Gradiente ∇f</h2>
        <p style={S.p}>
          O <strong>gradiente</strong> de f: ℝⁿ → ℝ é o vector de todas as derivadas parciais:
        </p>
        <div style={S.formula}><BlockMath math="\nabla f(\mathbf{x}) = \left[\frac{\partial f}{\partial x_1},\, \frac{\partial f}{\partial x_2},\, \ldots,\, \frac{\partial f}{\partial x_n}\right]^\top \in \mathbb{R}^n" /></div>

        <p style={S.p}>
          <strong>Propriedades fundamentais do gradiente:</strong>
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2.2, marginBottom: '1rem', paddingLeft: '1.4rem' }}>
          <li>Aponta na <strong>direcção de maior subida</strong> (steepest ascent)</li>
          <li>A magnitude ‖∇f‖ é a <strong>taxa de subida máxima</strong></li>
          <li>É <strong>perpendicular às curvas de nível</strong> (level sets)</li>
          <li>−∇f aponta na direcção de maior descida → <em>gradient descent</em></li>
        </ul>

        <div style={S.svgWrap}><GradientFieldSVG /></div>

        <div style={S.highlight}>
          <strong>Gradientes de funções de perda comuns em ML:</strong>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Função</th>
                <th style={S.th}>Fórmula</th>
                <th style={S.th}>Gradiente ∂L/∂w</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>MSE</td>
                <td style={S.td}>(1/n)‖Xw − y‖²</td>
                <td style={S.td}>(2/n) Xᵀ(Xw − y)</td>
              </tr>
              <tr>
                <td style={S.td}>Cross-entropy (binária)</td>
                <td style={S.td}>−[y log σ + (1−y) log(1−σ)]</td>
                <td style={S.td}>(σ − y)x</td>
              </tr>
              <tr>
                <td style={S.td}>L2 regularização</td>
                <td style={S.td}>λ‖w‖²</td>
                <td style={S.td}>2λw</td>
              </tr>
              <tr>
                <td style={S.td}>L1 regularização</td>
                <td style={S.td}>λ‖w‖₁</td>
                <td style={S.td}>λ sign(w)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          O gradiente generaliza o conceito de derivada escalar: para n=1, ∇f = f'(x) ∈ ℝ. Para n&gt;1, ∇f ∈ ℝⁿ — um vector, não um escalar.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Derivada Direcional</h2>
        <p style={S.p}>
          A <strong>derivada direcional</strong> mede a taxa de variação de f na direcção de um vector unitário u ∈ ℝⁿ (‖u‖ = 1):
        </p>
        <div style={S.formula}><BlockMath math="D_{\mathbf{u}} f(\mathbf{x}) = \lim_{h \to 0} \frac{f(\mathbf{x} + h\mathbf{u}) - f(\mathbf{x})}{h} = \nabla f(\mathbf{x}) \cdot \mathbf{u}" /></div>
        <p style={S.p}>
          A segunda igualdade segue do diferencial total. Por Cauchy-Schwarz:
        </p>
        <div style={S.formula}><BlockMath math="|D_{\mathbf{u}} f| \leq \|\nabla f\| \cdot \|\mathbf{u}\| = \|\nabla f\|" /></div>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2.2, marginBottom: '1rem', paddingLeft: '1.4rem' }}>
          <li><strong>Máximo:</strong> u = ∇f / ‖∇f‖ → D_u f = ‖∇f‖</li>
          <li><strong>Mínimo:</strong> u = −∇f / ‖∇f‖ → D_u f = −‖∇f‖</li>
          <li><strong>Zero:</strong> u perpendicular a ∇f → ao longo da curva de nível</li>
        </ul>

        <div style={S.svgWrap}><DirectionalDerivSVG /></div>

        
          <strong>Ligação ao Gradient Descent:</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            O algoritmo de gradient descent escolhe u = −∇f / ‖∇f‖, a direcção de maior descida. A actualização é:
          </p>
          <div style={S.formula}><BlockMath math="w \leftarrow w - \eta\,\nabla L(w)" /></div>
          <p style={{ margin: '0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            onde η (learning rate) controla o tamanho do passo. A derivada direcional nessa direcção é −‖∇L‖ — máxima descida possível naquele ponto.
          </p>
        
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Jacobiana</h2>
        <p style={S.p}>
          Para f: ℝⁿ → ℝᵐ (vector de m funções de n variáveis), a <strong>Jacobiana</strong> é a matriz m×n de todas as derivadas parciais:
        </p>
        <div style={S.formula}><BlockMath math="J \in \mathbb{R}^{m \times n},\quad J_{ij} = \frac{\partial f_i}{\partial x_j}" /></div>

        <div style={S.formula}><BlockMath math="J = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\ \vdots & & & \vdots \\ \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n} \end{bmatrix}" /></div>

        <div style={S.svgWrap}><JacobianSVG /></div>

        <p style={S.p}>
          <strong>Casos especiais:</strong>
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2.2, marginBottom: '1rem', paddingLeft: '1.4rem' }}>
          <li>m = 1: Jacobiana = gradiente transposto (vector linha)</li>
          <li>m = n: Jacobiana quadrada; det(J) = factor de escala local do volume</li>
          <li>f linear f(x) = Ax: J = A</li>
        </ul>

        
          <strong>Regra da cadeia matricial:</strong> para h = f ∘ g com g: ℝⁿ → ℝᵏ e f: ℝᵏ → ℝᵐ,
          <div style={S.formula}><BlockMath math="J_h = J_f \cdot J_g \quad \text{(produto de matrizes)}" /></div>
          <p style={{ margin: '0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Esta é a forma matricial exacta do backpropagation: a Jacobiana da composição é o produto das Jacobianas. Em vez de computar J_h explicitamente, o backprop usa <em>Jacobian-vector products</em> (JVPs) para eficiência O(n).
          </p>
        

              </section>

      <hr style={S.divider} />

      {/* ── SECTION 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Hessiana</h2>
        <p style={S.p}>
          A <strong>Hessiana</strong> de f: ℝⁿ → ℝ é a matriz n×n de todas as derivadas parciais de segunda ordem:
        </p>
        <div style={S.formula}><BlockMath math="H_{ij} = \frac{\partial^2 f}{\partial x_i\,\partial x_j}" /></div>
        <p style={S.p}>
          Pelo teorema de Schwarz, H é <strong>simétrica</strong> (H = Hᵀ) se f ∈ C². Os eigenvalores de H determinam a curvatura local:
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2.2, marginBottom: '1rem', paddingLeft: '1.4rem' }}>
          <li><strong>H definida positiva</strong> (todos eigenvalores &gt; 0): mínimo local</li>
          <li><strong>H definida negativa</strong> (todos eigenvalores &lt; 0): máximo local</li>
          <li><strong>H indefinida</strong> (eigenvalores mistos): ponto de sela</li>
          <li>∇f = 0 e H singular: caso degenerado, teste inconclusivo</li>
        </ul>

        <div style={S.svgWrap}><HessianSVG /></div>

        
          <strong>Hessiana e curvatura:</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            Os eigenvalores λ₁, λ₂ da Hessiana 2×2 são as <em>curvaturas principais</em>. A direcção do eigenvector com maior |λ| é aquela onde f varia mais rapidamente. O método de Newton usa H para corrigir o passo do gradiente:
          </p>
          <div style={S.formula}><BlockMath math="w \leftarrow w - H^{-1}\,\nabla f" /></div>
          <p style={{ margin: '0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            O Newton step converge quadraticamente perto do mínimo, mas H⁻¹ é cara de computar (O(n³)) para n grande. Métodos quasi-Newton (L-BFGS) aproximam H⁻¹ com actualizações de baixo rank.
          </p>
        

              </section>

      <hr style={S.divider} />

      {/* ── SECTION 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Regra da Cadeia Multivariável</h2>
        <p style={S.p}>
          Se f depende de (u, v) e cada um depende de (x, y), a regra da cadeia dá:
        </p>
        <div style={S.formula}><BlockMath math="\frac{\partial f}{\partial x} = \frac{\partial f}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial f}{\partial v}\frac{\partial v}{\partial x}" /></div>
        <div style={S.formula}><BlockMath math="\frac{\partial f}{\partial y} = \frac{\partial f}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial f}{\partial v}\frac{\partial v}{\partial y}" /></div>
        <p style={S.p}>
          Generalizando para vectores: se f: ℝᵏ → ℝ e g: ℝⁿ → ℝᵏ, então (f ∘ g): ℝⁿ → ℝ e:
        </p>
        <div style={S.formula}><BlockMath math="\nabla(f \circ g)(\mathbf{x}) = J_g(\mathbf{x})^\top \cdot \nabla f(g(\mathbf{x}))" /></div>

        <div style={S.svgWrap}><CompGraphSVG /></div>

        <p style={S.p}>
          O <strong>grafo computacional</strong> (DAG) torna a regra da cadeia visual: cada aresta carrega uma derivada parcial. Para propagar gradientes da saída para cada nó, multiplica-se as derivadas ao longo dos caminhos e soma-se sobre todos os caminhos que chegam ao nó.
        </p>

        <div style={S.highlight}>
          <strong>Este é exactamente o backpropagation.</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            Cada camada de uma rede neural é uma função composta. O backprop aplica a regra da cadeia de forma sistemática da perda L até aos parâmetros w, percorrendo o grafo computacional de trás para a frente (reverse mode).
          </p>
        </div>

              </section>

      <hr style={S.divider} />

      {/* ── SECTION 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Gradiente em Funções de Perda</h2>
        <p style={S.p}>
          Derivações completas das funções de perda mais usadas em ML.
        </p>

        
          <strong>MSE — Mean Squared Error</strong>
          <div style={S.formula}><BlockMath math="L(w) = \frac{1}{n}\sum_i (\hat{y}_i - y_i)^2 = \frac{1}{n}\|Xw - y\|^2" /></div>
          <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, margin: '0.5rem 0' }}>
            Expandindo: L = (1/n)(Xw−y)ᵀ(Xw−y). Diferenciando:
          </p>
          <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial w} = \frac{2}{n} X^\top(Xw - y)" /></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Passo a passo: d/dw[(Xw−y)ᵀ(Xw−y)] = 2Xᵀ(Xw−y) via regra do produto + transposta.
          </p>
        

        
          <strong>Cross-Entropy com Softmax</strong>
          <div style={S.formula}><BlockMath math="L = -\sum_i y_i \log(\hat{y}_i),\quad \hat{y} = \text{softmax}(z)" /></div>
          <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, margin: '0.5rem 0' }}>
            Resultado notável: o gradiente da cross-entropy + softmax em relação ao logit zᵢ simplifica para:
          </p>
          <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial z_i} = \hat{y}_i - y_i" /></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            A derivada do log cancela com a derivada do softmax — gradiente numericamente limpo e estável.
          </p>
        

        
          <strong>L2 Regularização</strong>
          <div style={S.formula}><BlockMath math="R(w) = \lambda\|w\|^2 = \lambda\sum_j w_j^2" /></div>
          <div style={S.formula}><BlockMath math="\frac{\partial R}{\partial w} = 2\lambda w" /></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            O gradiente total com regularização: ∂L_total/∂w = ∂L/∂w + 2λw — empurra os pesos para zero (weight decay).
          </p>
        

              </section>

      <hr style={S.divider} />

      {/* ── SECTION 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Diferenciação Automática</h2>
        <p style={S.p}>
          A diferenciação automática (AD) não é diferenciação simbólica nem numérica — é diferenciação exacta de programas, explorando a regra da cadeia sobre o grafo computacional.
        </p>

        
          <strong>Forward Mode AD — Números Duais</strong>
          <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, margin: '0.5rem 0' }}>
            Cada valor real x torna-se um par (x, ẋ) onde ẋ é a derivada direcional. Aritmética dual:
          </p>
          <div style={S.formula}><BlockMath math="(a,\,\dot{a}) + (b,\,\dot{b}) = (a+b,\;\dot{a}+\dot{b})" /></div>
          <div style={S.formula}><BlockMath math="(a,\,\dot{a}) \times (b,\,\dot{b}) = (ab,\;a\dot{b}+\dot{a}b)" /></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Forward mode calcula uma derivada direcional por passagem. Para f: ℝⁿ → ℝ são precisas n passagens para o gradiente completo — ineficiente para n grande.
          </p>
        

        
          <strong>Reverse Mode AD — Backpropagation</strong>
          <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, margin: '0.5rem 0' }}>
            Passa o grafo para a frente (forward pass), armazena valores intermédios, depois percorre de trás para a frente (backward pass) acumulando gradientes. Para f: ℝⁿ → ℝ, 1 backward pass dá ∇f completo — O(n) independentemente de n.
          </p>
          <div style={S.formula}><BlockMath math="\frac{\partial L}{\partial x_i} = \sum_{\text{caminhos}} \left(\text{produto de derivadas parciais ao longo do caminho}\right)" /></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Este é o insight essencial do backprop: com 1 forward + 1 backward, obtemos gradiente para TODOS os n parâmetros. Custo: O(c) onde c é o custo do forward pass, independente de n.
          </p>
        

        <div style={S.svgWrap}><AutogradSVG /></div>

        
        <div style={S.note}>
          Forward mode é mais eficiente para f: ℝ → ℝᵐ (m grande, n = 1). Reverse mode é mais eficiente para f: ℝⁿ → ℝ (n grande, m = 1). O gradiente de uma loss scalar sobre milhões de parâmetros: reverse mode é a escolha óbvia.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Campos Vectoriais e Gradiente</h2>
        <p style={S.p}>
          O gradiente ∇f define um <strong>campo vectorial</strong>: a cada ponto x ∈ ℝⁿ associa um vector ∇f(x) ∈ ℝⁿ. Este campo tem propriedades especiais que campos vectoriais arbitrários não têm.
        </p>

        <div style={S.svgWrap}><VectorFieldSVG /></div>

        <div style={S.highlight}>
          <strong>Campos Conservativos (Gradiente):</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', color: 'var(--text-primary)', lineHeight: 2 }}>
            <li>Integral de linha <strong>independente do caminho</strong>: ∫_C ∇f · dr = f(B) − f(A)</li>
            <li><strong>Curl = 0</strong>: ∂(∂f/∂y)/∂x = ∂(∂f/∂x)/∂y (Schwarz)</li>
            <li>A função f é o <strong>potencial</strong> do campo vectorial</li>
          </ul>
        </div>

        <p style={S.p}>
          <strong>Pontos de sela em landscapes não-convexas:</strong> em redes profundas, a loss surface tem inúmeros pontos de sela (∇L = 0 mas H indefinida). Em alta dimensão, pontos de sela são muito mais comuns que mínimos locais — a maioria dos pontos críticos são selas, mas o gradient descent tende a escapar delas.
        </p>

        <div style={S.note}>
          <strong>Intuição de energia:</strong> gradient descent é análogo à descida de uma partícula numa paisagem de energia potencial V(x) — a força é −∇V, exactamente o gradiente negativo. Mínimos são estados de menor energia.
        </div>

        <p style={S.p}>
          <strong>Visualização de campos de gradiente:</strong> plots de quiver (setas) mostram o campo vectorial. A densidade de linhas de campo indica magnitude; a perpendicular às isolinhas confirma geometria do gradiente.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── SECTION 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese — Hierarquia de Objectos Diferenciais</h2>
        <p style={S.p}>
          Das derivadas parciais escalares ao tensor de Hessiana, há uma hierarquia clara de objectos matemáticos e os seus usos em ML.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Objecto</th>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>f:</th>
              <th style={S.th}>Uso em ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Derivada parcial ∂f/∂xᵢ</td>
              <td style={S.td}>Escalar ∈ ℝ</td>
              <td style={S.td}>ℝⁿ → ℝ</td>
              <td style={S.td}>Componente de gradiente; entrada de J</td>
            </tr>
            <tr>
              <td style={S.td}>Gradiente ∇f</td>
              <td style={S.td}>Vector ∈ ℝⁿ</td>
              <td style={S.td}>ℝⁿ → ℝ</td>
              <td style={S.td}>Gradient descent, backprop</td>
            </tr>
            <tr>
              <td style={S.td}>Jacobiana J</td>
              <td style={S.td}>Matriz ∈ ℝ^(m×n)</td>
              <td style={S.td}>ℝⁿ → ℝᵐ</td>
              <td style={S.td}>Backprop em camadas vectoriais, NTK</td>
            </tr>
            <tr>
              <td style={S.td}>Hessiana H</td>
              <td style={S.td}>Matriz ∈ ℝ^(n×n)</td>
              <td style={S.td}>ℝⁿ → ℝ</td>
              <td style={S.td}>Newton, curvatura, SAM, Fisher</td>
            </tr>
            <tr>
              <td style={S.td}>Derivada direcional D_u f</td>
              <td style={S.td}>Escalar ∈ ℝ</td>
              <td style={S.td}>ℝⁿ → ℝ</td>
              <td style={S.td}>JVPs, análise de sensibilidade</td>
            </tr>
          </tbody>
        </table>

        
          <strong>Fórmula-chave: Regra da Cadeia em Forma Matricial</strong>
          <div style={S.formula}><BlockMath math="J_{f \circ g} = J_f \cdot J_g" /></div>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Esta equação unifica toda a teoria: gradiente é caso m=1, escalar é caso m=n=1. Backpropagation é a aplicação eficiente desta regra de trás para a frente, evitando computar Jacobianas densas através de Jacobian-vector products.
          </p>
        

        
        <div style={S.note}>
          <strong>Caminho de aprendizagem:</strong> derivada parcial → diferencial total → gradiente → derivada direcional → Jacobiana → Hessiana → AD. Cada nível generaliza o anterior e desbloqueia novos algoritmos de optimização.
        </div>

        <div style={S.highlight}>
          <strong>Conceitos-chave deste módulo:</strong>
          <ul style={{ margin: '0.5rem 0 0 1.2rem', color: 'var(--text-primary)', lineHeight: 2.2 }}>
            <li>∂f/∂xᵢ fixa todas as variáveis excepto xᵢ e diferencia normalmente</li>
            <li>∇f aponta na direcção de maior subida e é perpendicular às curvas de nível</li>
            <li>D_u f = ∇f · u — taxa de variação na direcção u</li>
            <li>A Jacobiana generaliza o gradiente para funções vectoriais</li>
            <li>A Hessiana contém informação de curvatura de segunda ordem</li>
            <li>Regra da cadeia em forma matricial: J_(f∘g) = J_f · J_g</li>
            <li>Reverse mode AD (backprop) calcula ∇f em O(1) backward passes para qualquer n</li>
          </ul>
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>13. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Funções de Várias Variáveis</strong> — uma função f: ℝⁿ → ℝ mapeia um vector de entrada para um escalar; a perda de uma rede neuronal é exactamente este tipo de função — com milhões de variáveis (pesos).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Derivada Parcial — Definição</strong> — ∂f/∂xᵢ mede como f varia quando apenas xᵢ muda; em redes neuronais, cada derivada parcial da perda em relação a um peso indica quanto esse peso afecta o erro.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Diferencial Total e Aproximação Linear</strong> — df = ∑(∂f/∂xᵢ)dxᵢ aproxima a variação de f para pequenas perturbações; é a base da linearização de modelos não-lineares e da análise de sensibilidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Gradiente ∇f</strong> — o gradiente é o vector de todas as derivadas parciais e aponta na direcção de maior crescimento de f; o algoritmo de descida do gradiente anda na direcção oposta para minimizar a perda.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Derivada Direcional</strong> — Dᵤf = ∇f · u mede a taxa de variação de f na direcção do vector unitário u; generaliza a derivada parcial e é usada em métodos de optimização de direcção conjugada.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Jacobiana</strong> — a matriz Jacobiana J contém todas as derivadas parciais de um mapeamento vectorial F: ℝⁿ → ℝᵐ; em backprop, o Jacobiano da activação é multiplicado pelo gradiente que vem da camada seguinte.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Hessiana</strong> — a matriz Hessiana H contém as segundas derivadas parciais e descreve a curvatura local de f; métodos de segunda ordem como Newton usam H⁻¹∇f mas são caros computacionalmente — daí o uso de Adam que aproxima H.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
