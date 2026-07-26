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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem', fontFamily: 'monospace', fontSize: '1rem', color: 'var(--text-primary)' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', display: 'flex', justifyContent: 'center', overflowX: 'auto' },
  ul: { paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1rem' },
  formula: { fontFamily: 'monospace', background: 'rgba(74,158,237,0.10)', borderRadius: 4, padding: '0.15rem 0.4rem', fontSize: '0.95rem', color },
};

/* ── SVG helpers ── */

function ChainRule1DSVG() {
  const W = 760, H = 160;
  // boxes: x = left edge, width=120, center at x+60, vertical center at cy=80
  const cy = 80;
  const bw = 120, bh = 44;
  const boxes = [
    { x: 50,  label: 'x',      sub: 'input',        clr: '#4a9eed', fill: 'rgba(74,158,237,0.22)' },
    { x: 310, label: 'u=g(x)', sub: 'intermediate', clr: '#7dd3fc', fill: 'rgba(74,158,237,0.16)' },
    { x: 570, label: 'f(u)',   sub: 'output',       clr: '#bae6fd', fill: 'rgba(74,158,237,0.10)' },
  ];
  // arrows: from right edge of box i to left edge of box i+1
  const edges = [
    { x1: 172, x2: 308, label: "du/dx = g'(x)", clr: '#bae6fd' },
    { x1: 432, x2: 568, label: "df/du = f'(u)", clr: '#7dd3fc' },
  ];
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {edges.map((e, i) => (
        <g key={i}>
          <line x1={e.x1} y1={cy} x2={e.x2 - 10} y2={cy} stroke={e.clr} strokeWidth={2} />
          <polygon points={`${e.x2 - 10},${cy - 6} ${e.x2},${cy} ${e.x2 - 10},${cy + 6}`} fill={e.clr} />
          <text x={(e.x1 + e.x2) / 2} y={cy - 14} textAnchor="middle" fontSize={12} fill={e.clr}>{e.label}</text>
        </g>
      ))}
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={cy - bh / 2} width={bw} height={bh} rx={8} fill={b.fill} stroke={b.clr} strokeWidth={1.5} />
          <text x={b.x + bw / 2} y={cy - 4} textAnchor="middle" fontSize={14} fontWeight="700" fill={b.clr}>{b.label}</text>
          <text x={b.x + bw / 2} y={cy + 13} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">{b.sub}</text>
        </g>
      ))}
      <text x={W / 2} y={H - 10} textAnchor="middle" fontSize={13} fill="var(--text-secondary)">
        df/dx = (df/du) · (du/dx)
      </text>
    </svg>
  );
}

function MultiCompositionSVG() {
  const boxStyle = { border: `1.5px solid ${color}`, background: 'rgba(74,158,237,0.10)', borderRadius: 8, padding: '0.55rem 1.1rem', color: 'var(--text-primary)', textAlign: 'center', minWidth: 70 };
  const rowStyle = { display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' };
  const arrowStyle = { color, fontSize: '1.3rem' };
  const Box = ({ math }) => <div style={boxStyle}><InlineMath math={math} /></div>;
  const Arrow = () => <div style={arrowStyle}>→</div>;

  return (
    <div style={{ width: '100%' }}>
      <p style={{ fontWeight: 700, color, marginBottom: '0.75rem' }}>
        Exemplo 1: <InlineMath math="\dfrac{d}{dx}\left[e^{x^2}\right]" />
      </p>
      <div style={rowStyle}>
        <Box math="x" />
        <Arrow />
        <Box math="u = x^2" />
        <Arrow />
        <Box math="e^{u}" />
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.75rem 0 0' }}>
        Chain: <InlineMath math="\dfrac{d}{dx}\left[e^{x^2}\right] = e^{x^2} \cdot 2x" />
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid var(--card-border)', margin: '1.25rem 0' }} />

      <p style={{ fontWeight: 700, color, marginBottom: '0.75rem' }}>
        Exemplo 2: <InlineMath math="\dfrac{d}{dx}[\ln(\sin(x))]" />
      </p>
      <div style={rowStyle}>
        <Box math="x" />
        <Arrow />
        <Box math="\sin(x)" />
        <Arrow />
        <Box math="\ln(\sin(x))" />
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.75rem 0 0' }}>
        <InlineMath math="= \dfrac{1}{\sin(x)} \cdot \cos(x) = \cot(x)" />
      </p>
    </div>
  );
}

function MultivariableTreeSVG() {
  const W = 700, H = 310;
  // KaTeX can't render inside native SVG <text>, so labels are embedded via
  // <foreignObject> (HTML) positioned at the same coordinates the SVG uses.
  const Label = ({ x, y, w = 40, h = 22, math, fontSize = 14, fill = 'var(--text-primary)', bold = false }) => (
    <foreignObject x={x - w / 2} y={y - h / 2} width={w} height={h}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: fill, fontSize, fontWeight: bold ? 700 : 400 }}
      >
        <InlineMath math={math} />
      </div>
    </foreignObject>
  );

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {/* z node */}
      <circle cx={350} cy={40} r={28} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={2} />
      <Label x={350} y={42} math="z" fontSize={16} fill={color} bold />

      {/* u node */}
      <circle cx={180} cy={140} r={28} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <Label x={180} y={142} math="u" />

      {/* v node */}
      <circle cx={520} cy={140} r={28} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <Label x={520} y={142} math="v" />

      {/* x node */}
      <circle cx={100} cy={240} r={24} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={100} y={242} math="x" />

      {/* y node (under u) */}
      <circle cx={260} cy={240} r={24} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={260} y={242} math="y" />

      {/* x node (under v) */}
      <circle cx={440} cy={240} r={24} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={440} y={242} math="x" />

      {/* y node (under v) */}
      <circle cx={600} cy={240} r={24} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={600} y={242} math="y" />

      {/* edges z→u, z→v */}
      <line x1={325} y1={60} x2={202} y2={120} stroke={color} strokeWidth={2} />
      <Label x={238} y={90} w={56} h={22} math="\partial z/\partial u" fontSize={12} fill={color} />
      <line x1={375} y1={60} x2={498} y2={120} stroke={color} strokeWidth={2} />
      <Label x={462} y={90} w={56} h={22} math="\partial z/\partial v" fontSize={12} fill={color} />

      {/* edges u→x, u→y */}
      <line x1={160} y1={162} x2={116} y2={218} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={106} y={188} w={54} h={20} math="\partial u/\partial x" fontSize={11} fill="var(--text-secondary)" />
      <line x1={200} y1={162} x2={244} y2={218} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={254} y={188} w={54} h={20} math="\partial u/\partial y" fontSize={11} fill="var(--text-secondary)" />

      {/* edges v→x, v→y */}
      <line x1={500} y1={162} x2={456} y2={218} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={446} y={188} w={54} h={20} math="\partial v/\partial x" fontSize={11} fill="var(--text-secondary)" />
      <line x1={540} y1={162} x2={584} y2={218} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <Label x={594} y={188} w={54} h={20} math="\partial v/\partial y" fontSize={11} fill="var(--text-secondary)" />

      {/* formula */}
      <Label
        x={350} y={300} w={420} h={30}
        math="\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}"
        fontSize={14}
      />
    </svg>
  );
}

function CompGraphSVG() {
  const W = 720, H = 320;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {/* title */}
      <text x={360} y={22} textAnchor="middle" fontSize={13} fontWeight="700" fill="var(--text-secondary)">
        f(x,y) = (x+y) · sin(x)  — Grafo de Computação
      </text>

      {/* INPUT NODES */}
      <circle cx={60}  cy={120} r={26} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={2} />
      <text x={60}  cy={120} y={116} textAnchor="middle" fontSize={14} fontWeight="700" fill={color}>x</text>
      <text x={60}  y={132} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">input</text>

      <circle cx={60}  cy={220} r={26} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={2} />
      <text x={60}  y={216} textAnchor="middle" fontSize={14} fontWeight="700" fill={color}>y</text>
      <text x={60}  y={232} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">input</text>

      {/* INTERMEDIATE NODES */}
      {/* v1 = x+y */}
      <rect x={210} y={148} width={80} height={38} rx={8} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={250} y={166} textAnchor="middle" fontSize={12} fontWeight="600" fill="var(--text-primary)">v1=x+y</text>
      <text x={250} y={180} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">(+)</text>

      {/* v2 = sin(x) */}
      <rect x={210} y={88} width={90} height={38} rx={8} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={255} y={106} textAnchor="middle" fontSize={12} fontWeight="600" fill="var(--text-primary)">v2=sin(x)</text>
      <text x={255} y={120} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">(sin)</text>

      {/* v3 = v1*v2 */}
      <rect x={400} y={120} width={100} height={38} rx={8} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={2} />
      <text x={450} y={138} textAnchor="middle" fontSize={12} fontWeight="600" fill="var(--text-primary)">v3=v1·v2</text>
      <text x={450} y={152} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">(×)</text>

      {/* OUTPUT */}
      <circle cx={620} cy={139} r={28} fill={color} />
      <text x={620} y={135} textAnchor="middle" fontSize={12} fontWeight="700" fill="#fff">out</text>
      <text x={620} y={149} textAnchor="middle" fontSize={10} fill="rgba(255,255,255,0.8)">f(x,y)</text>

      {/* EDGES x→v1, y→v1 */}
      <line x1={86} y1={120} x2={210} y2={165} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={86} y1={220} x2={210} y2={172} stroke="var(--text-secondary)" strokeWidth={1.5} />

      {/* x→v2 */}
      <line x1={86} y1={115} x2={210} y2={107} stroke="var(--text-secondary)" strokeWidth={1.5} />

      {/* v1→v3, v2→v3 */}
      <line x1={290} y1={167} x2={400} y2={148} stroke={color} strokeWidth={2} />
      <line x1={300} y1={107} x2={400} y2={133} stroke={color} strokeWidth={2} />

      {/* v3→out */}
      <line x1={500} y1={139} x2={592} y2={139} stroke={color} strokeWidth={2} />
      <polygon points="592,134 600,139 592,144" fill={color} />

      {/* FORWARD labels */}
      <text x={360} y={260} textAnchor="middle" fontSize={12} fontWeight="700" fill="var(--text-secondary)">Forward pass →</text>
      <text x={360} y={278} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">compute each node left-to-right</text>
      <text x={360} y={296} textAnchor="middle" fontSize={12} fontWeight="700" fill={color}>← Backward pass</text>
      <text x={360} y={312} textAnchor="middle" fontSize={11} fill={color}>propagate ∂f/∂v right-to-left via chain rule</text>
    </svg>
  );
}

function NeuralNetSVG() {
  const W = 700, H = 340;
  const inputY = [80, 160, 240];
  const h1Y = [60, 120, 180, 240];
  const h2Y = [80, 160, 240];
  const outY = [160];
  const cols = [80, 230, 430, 580];

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <defs>
        <marker id="nnFwd" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#fff" />
        </marker>
        <marker id="nnBwd" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#fff" />
        </marker>
      </defs>
      <text x={cols[0]} y={30} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">x</text>
      <text x={cols[1]} y={30} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">a1=σ(W1x+b1)</text>
      <text x={cols[2]} y={30} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">a2=σ(W2a1+b2)</text>
      <text x={cols[3]} y={30} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">L</text>

      {inputY.map((y, i) => (
        <circle key={i} cx={cols[0]} cy={y} r={20} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      ))}
      {h1Y.map((y, i) => (
        <circle key={i} cx={cols[1]} cy={y} r={20} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      ))}
      {h2Y.map((y, i) => (
        <circle key={i} cx={cols[2]} cy={y} r={20} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={2} />
      ))}
      <circle cx={cols[3]} cy={outY[0]} r={22} fill={color} />
      <text x={cols[3]} y={outY[0] + 5} textAnchor="middle" fontSize={13} fontWeight="700" fill="#fff">L</text>

      {inputY.map((iy, ii) => h1Y.map((hy, hi) => (
        <line key={`${ii}-${hi}`} x1={cols[0] + 20} y1={iy} x2={cols[1] - 20} y2={hy}
          stroke="var(--text-secondary)" strokeWidth={1} opacity={0.6} />
      )))}
      {h1Y.map((hy, hi) => h2Y.map((h2y, h2i) => (
        <line key={`${hi}-${h2i}`} x1={cols[1] + 20} y1={hy} x2={cols[2] - 20} y2={h2y}
          stroke={color} strokeWidth={1} opacity={0.4} />
      )))}
      {h2Y.map((y, i) => (
        <line key={i} x1={cols[2] + 20} y1={y} x2={cols[3] - 24} y2={outY[0]}
          stroke={color} strokeWidth={1.5} opacity={0.7} markerEnd="url(#nnFwd)" />
      ))}

      {/* W1 label */}
      <text x={(cols[0] + cols[1]) / 2} y={300} textAnchor="middle" fontSize={12} fontWeight="700" fill="var(--text-secondary)">W1, b1</text>
      <text x={(cols[1] + cols[2]) / 2} y={300} textAnchor="middle" fontSize={12} fontWeight="700" fill={color}>W2, b2</text>

      {/* gradient arrows (backward) */}
      <path d={`M ${cols[3] - 22} ${outY[0]} Q ${(cols[2]+cols[3])/2} ${outY[0] + 50} ${cols[2] + 26} ${h2Y[1]}`}
        fill="none" stroke={color} strokeWidth={2} strokeDasharray="6,3" markerEnd="url(#nnBwd)" />
      <text x={(cols[2]+cols[3])/2} y={outY[0] + 65} textAnchor="middle" fontSize={10} fill={color}>∂L/∂a2</text>
    </svg>
  );
}

function ForwardReverseSVG() {
  const W = 700, H = 260;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {/* Forward mode */}
      <rect x={10} y={10} width={320} height={240} rx={10} fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={170} y={36} textAnchor="middle" fontSize={13} fontWeight="700" fill="var(--text-secondary)">Forward Mode AD</text>

      <text x={30} y={65} fontSize={12} fill="var(--text-primary)">Dual number: (v, v')</text>
      <text x={30} y={85} fontSize={11} fill="var(--text-secondary)">Propagate from input → output</text>
      <text x={30} y={105} fontSize={11} fill="var(--text-secondary)">One pass per input variable</text>
      <text x={30} y={125} fontSize={11} fill="var(--text-secondary)">Cost: O(n) passes for n inputs</text>

      <rect x={30} y={145} width={270} height={60} rx={6} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1} />
      <text x={165} y={166} textAnchor="middle" fontSize={11} fill={color}>x → u → f</text>
      <text x={165} y={184} textAnchor="middle" fontSize={11} fill={color}>(1, 0) → (g(1), g'(1)) → (f, f'·g')</text>
      <text x={30} y={226} fontSize={11} fill="var(--text-secondary)">Good when: few inputs, many outputs</text>

      {/* Reverse mode */}
      <rect x={370} y={10} width={320} height={240} rx={10} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={530} y={36} textAnchor="middle" fontSize={13} fontWeight="700" fill={color}>Reverse Mode AD (Backprop)</text>

      <text x={390} y={65} fontSize={12} fill="var(--text-primary)">Adjoint: grad propagated backward</text>
      <text x={390} y={85} fontSize={11} fill="var(--text-secondary)">Propagate from output → inputs</text>
      <text x={390} y={105} fontSize={11} fill="var(--text-secondary)">One pass per output</text>
      <text x={390} y={125} fontSize={11} fill="var(--text-secondary)">Cost: O(m) passes for m outputs</text>

      <rect x={390} y={145} width={270} height={60} rx={6} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={525} y={166} textAnchor="middle" fontSize={11} fill={color}>L → W2 → W1 → ...</text>
      <text x={525} y={184} textAnchor="middle" fontSize={11} fill={color}>∂L/∂Wk in single backward pass</text>
      <text x={390} y={226} fontSize={12} fontWeight="700" fill={color}>{"ML: n params >> m=1 loss → use this!"}</text>
    </svg>
  );
}

function VanishingGradSVG() {
  const W = 700, H = 240;
  const layers = 8;
  const w = W / (layers + 2);
  const sigma_prime_max = 0.25;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <text x={W / 2} y={22} textAnchor="middle" fontSize={13} fontWeight="700" fill="var(--text-secondary)">
        Gradient magnitude across layers (sigmoid activations)
      </text>
      {/* bar chart of gradient magnitudes */}
      {Array.from({ length: layers }, (_, i) => {
        const mag = Math.pow(sigma_prime_max, layers - i);
        const barH = Math.max(3, mag * 140);
        const x = (i + 1) * w + 10;
        const y = 180 - barH;
        const opacity = 0.3 + 0.7 * (i / layers);
        return (
          <g key={i}>
            <rect x={x} y={y} width={w - 20} height={barH} rx={3} fill={color} opacity={opacity} />
            <text x={x + (w - 20) / 2} y={198} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">
              {`L${layers - i}`}
            </text>
            <text x={x + (w - 20) / 2} y={y - 4} textAnchor="middle" fontSize={9} fill={color}>
              {mag < 0.001 ? '≈0' : mag.toFixed(3)}
            </text>
          </g>
        );
      })}
      <line x1={20} y1={180} x2={W - 20} y2={180} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={W / 2} y={220} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        Each layer multiplies grad by σ'(x) ≤ 0.25 → exponential decay toward input layers
      </text>
    </svg>
  );
}

function ResNetBlockSVG() {
  const W = 660, H = 220;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <defs>
        <marker id="resMain" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="resSkip" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={W / 2} y={22} textAnchor="middle" fontSize={13} fontWeight="700" fill="var(--text-secondary)">
        ResNet Block — Gradient Highway
      </text>

      {/* input */}
      <rect x={20} y={90} width={70} height={36} rx={7} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={55} y={113} textAnchor="middle" fontSize={13} fill="var(--text-primary)">x^l</text>

      {/* F(x) block */}
      <rect x={180} y={90} width={140} height={36} rx={7} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={2} />
      <text x={250} y={108} textAnchor="middle" fontSize={12} fill={color}>F(x^l)</text>
      <text x={250} y={122} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Conv-BN-ReLU stack</text>

      {/* + node */}
      <circle cx={430} cy={108} r={18} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={2} />
      <text x={430} y={114} textAnchor="middle" fontSize={18} fontWeight="700" fill={color}>+</text>

      {/* output */}
      <rect x={520} y={90} width={100} height={36} rx={7} fill={color} />
      <text x={570} y={113} textAnchor="middle" fontSize={12} fontWeight="700" fill="#fff">x^(l+1)</text>

      {/* main path arrow */}
      <line x1={90} y1={108} x2={176} y2={108} stroke={color} strokeWidth={2} markerEnd="url(#resMain)" />
      <line x1={320} y1={108} x2={408} y2={108} stroke={color} strokeWidth={2} markerEnd="url(#resMain)" />
      <line x1={448} y1={108} x2={516} y2={108} stroke={color} strokeWidth={2} markerEnd="url(#resMain)" />

      {/* skip connection */}
      <path d="M 90 108 Q 260 50 408 108" fill="none" stroke="var(--text-secondary)" strokeWidth={2} strokeDasharray="6,3" markerEnd="url(#resSkip)" />
      <text x={260} y={48} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">skip connection (identity)</text>

      {/* gradient formula */}
      <text x={W / 2} y={165} textAnchor="middle" fontSize={12} fill="var(--text-primary)">
        ∂L/∂x^l = ∂L/∂x^(l+1) · (1 + ∂F/∂x^l)
      </text>
      <text x={W / 2} y={185} textAnchor="middle" fontSize={11} fill={color}>
        The +1 guarantees gradient flows even if ∂F/∂x^l ≈ 0
      </text>
      <text x={W / 2} y={205} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        This is why ResNets can train hundreds of layers without vanishing gradients
      </text>
    </svg>
  );
}

function CheckpointSVG() {
  const W = 680, H = 200;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <text x={W / 2} y={22} textAnchor="middle" fontSize={13} fontWeight="700" fill="var(--text-secondary)">
        Gradient Checkpointing: Memory vs Compute Tradeoff
      </text>

      {/* Standard backprop - all activations stored */}
      <text x={10} y={50} fontSize={12} fontWeight="700" fill="var(--text-secondary)">Standard: store all activations O(n)</text>
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={10 + i * 62} y={60} width={54} height={36} rx={5}
          fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1.5} />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <text key={i} x={37 + i * 62} y={82} textAnchor="middle" fontSize={10} fill={color}>a{i + 1}</text>
      ))}

      {/* Checkpoint - sparse */}
      <text x={10} y={120} fontSize={12} fontWeight="700" fill={color}>Checkpoint: store O(√n), recompute rest</text>
      {Array.from({ length: 10 }, (_, i) => {
        const isCheckpoint = i % 3 === 0;
        return (
          <rect key={i} x={10 + i * 62} y={130} width={54} height={36} rx={5}
            fill={isCheckpoint ? `rgba(74,158,237,0.10)` : 'rgba(100,100,100,0.1)'}
            stroke={isCheckpoint ? color : 'var(--card-border)'}
            strokeWidth={isCheckpoint ? 2 : 1}
            strokeDasharray={isCheckpoint ? 'none' : '4,2'} />
        );
      })}
      {Array.from({ length: 10 }, (_, i) => {
        const isCheckpoint = i % 3 === 0;
        return (
          <text key={i} x={37 + i * 62} y={152} textAnchor="middle" fontSize={10}
            fill={isCheckpoint ? color : 'var(--text-secondary)'}>
            {isCheckpoint ? `c${i + 1}` : '·'}
          </text>
        );
      })}

      <text x={W / 2} y={190} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">
        Solid = stored checkpoint. Dashed = recomputed during backward pass.
      </text>
    </svg>
  );
}

/* ── MAIN COMPONENT ── */

export default function CALC4() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Calculus for Data Science</Link>

      <div style={S.tag}>Module 04</div>
      <h1 style={S.h1}>Chain Rule &amp; Backpropagation</h1>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Chain Rule — 1D</h2>
        <p style={S.p}>
          A regra da cadeia é o resultado fundamental do cálculo diferencial para funções compostas. Se
          <InlineMath math="f = f(u)" /> e <InlineMath math="u = g(x)" />, então:
        </p>
        <BlockMath math="\frac{df}{dx} = \frac{df}{du} \cdot \frac{du}{dx}" />
        <p style={S.p}>
          A intuição é a amplificação de taxas de variação: quanto f varia por unidade de u, vezes quanto
          u varia por unidade de x. Para composições múltiplas f(g(h(x))):
        </p>
        <BlockMath math="\frac{d}{dx}[f(g(h(x)))] = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)" />
        <div style={S.svgWrap}>
          <ChainRule1DSVG />
        </div>
        <div style={S.svgWrap}>
          <MultiCompositionSVG />
        </div>

        <p style={S.p}><strong>Exemplo em ML — sigmoid com pré-activação:</strong></p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Derivada (chain rule)</th>
              <th style={S.th}>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="e^{x^2}" /></td>
              <td style={S.td}><InlineMath math="2x \cdot e^{x^2}" /></td>
              <td style={S.td}>inner: <InlineMath math="2x" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\ln(\sin(x))" /></td>
              <td style={S.td}><InlineMath math="\frac{1}{\sin(x)} \cdot \cos(x) = \cot(x)" /></td>
              <td style={S.td}>inner: <InlineMath math="\cos(x)" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\sigma(wx+b)" /></td>
              <td style={S.td}><InlineMath math="\sigma(wx+b)(1-\sigma(wx+b)) \cdot w" /></td>
              <td style={S.td}>w.r.t. x; inner: <InlineMath math="w" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="(1 + e^{-x})^{-1}" /></td>
              <td style={S.td}><InlineMath math="\sigma(x)(1-\sigma(x))" /></td>
              <td style={S.td}>sigmoid própria</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\tanh(x)" /></td>
              <td style={S.td}><InlineMath math="1 - \tanh^2(x)" /></td>
              <td style={S.td}><InlineMath math="\operatorname{sech}^2(x)" /></td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\text{ReLU}(x)" /></td>
              <td style={S.td}><InlineMath math="1 \text{ se } x>0,\ 0 \text{ se } x\leq 0" /></td>
              <td style={S.td}>sem chain — linear por partes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Chain Rule — Caso Multivariável</h2>
        <p style={S.p}>
          Quando <InlineMath math="z = f(u, v),\ u = g(x, y),\ v = h(x, y)" />, a derivada parcial de <InlineMath math="z" /> em ordem a <InlineMath math="x" /> soma as
          contribuições de <em>todos os caminhos</em> da variável de entrada até à saída:
        </p>
        <BlockMath math="\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}" />
        <p style={S.p}>
          O princípio geral é: <strong>somar sobre todos os caminhos de z até x no grafo de dependências</strong>,
          e ao longo de cada caminho multiplicar as derivadas parciais das arestas.
        </p>
        <div style={S.svgWrap}>
          <MultivariableTreeSVG />
        </div>

        <p style={S.p}><strong>Forma matricial — Jacobiano:</strong></p>
        <p style={S.p}>
          Se <InlineMath math="f: \mathbb{R}^n \to \mathbb{R}^m" /> e <InlineMath math="g: \mathbb{R}^p \to \mathbb{R}^n" />, então a composição <InlineMath math="h = f \circ g" /> tem Jacobiano:
        </p>
        <BlockMath math="J_h(x) = J_f(g(x)) \cdot J_g(x)" />
        <p style={S.p}>
          onde <InlineMath math="J_f" /> é a matriz <InlineMath math="m \times n" /> das derivadas parciais de <InlineMath math="f" /> e <InlineMath math="J_g" /> é <InlineMath math="n \times p" />. Esta é a generalização matricial
          exacta da regra da cadeia 1D — multiplicação de Jacobianos.
        </p>

        
        <div style={S.note}>
          Para redes neurais, os "múltiplos caminhos" traduzem-se em que cada peso influencia a loss através
          de múltiplos neurónios. O gradiente total é automaticamente a soma dessas contribuições — e é
          exactamente isso que backprop calcula.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Grafos de Computação</h2>
        <p style={S.p}>
          Um <strong>grafo de computação</strong> é um DAG (grafo acíclico dirigido) onde cada nó representa
          um valor intermédio e cada aresta representa uma operação. Formaliza como decompor qualquer cálculo
          em passos elementares diferenciáveis.
        </p>
        <ul style={S.ul}>
          <li>Nós folha: inputs e parâmetros (sem predecessores)</li>
          <li>Nós internos: resultados de operações (cada um conhece a operação que o criou)</li>
          <li>Nó raiz: output final (loss)</li>
        </ul>
        <div style={S.svgWrap}>
          <CompGraphSVG />
        </div>
        <p style={S.p}><strong>Forward pass</strong> — percorrer o grafo da esquerda para a direita, computando e armazenando valores em cada nó.</p>
        <p style={S.p}><strong>Backward pass</strong> — percorrer da direita para a esquerda, usando chain rule em cada nó para propagar gradientes:</p>
                <div style={S.note}>
          O acúmulo de gradientes (+=) em vez de substituição é o que implementa correctamente a soma sobre
          múltiplos caminhos da regra da cadeia multivariável. Cada vez que um nó é predecessor de múltiplos
          nós, o seu gradiente acumula contribuições de todos.
        </div>

        <p style={S.p}><strong>Por que grafos de computação são poderosos:</strong></p>
        <ul style={S.ul}>
          <li>Handles arbitrariamente complexas — qualquer composição diferenciável</li>
          <li>A mesma implementação de forward serve de base para todo o backward</li>
          <li>Frameworks como PyTorch/JAX constroem este grafo automaticamente durante o forward</li>
          <li>Permite diferenciação de estruturas de controlo (loops, condicionais)</li>
        </ul>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Backpropagation — Derivação Completa</h2>
        <p style={S.p}>
          Considere uma rede de 2 camadas com activação sigmoid e loss MSE. Derivamos todos os gradientes
          de forma explícita, passo a passo.
        </p>

        <p style={S.p}><strong>Forward pass:</strong></p>
        <BlockMath math="z_1 = W_1 \cdot x + b_1 \quad|\quad a_1 = \sigma(z_1)" />
          <BlockMath math="z_2 = W_2 \cdot a_1 + b_2 \quad|\quad a_2 = \sigma(z_2)" />
          <BlockMath math="L = \frac{1}{2}\|a_2 - y\|^2" />

        <div style={S.svgWrap}>
          <NeuralNetSVG />
        </div>

        <p style={S.p}><strong>Backward pass — derivação passo a passo:</strong></p>
        
        <p style={S.p}><strong>Porquê <InlineMath math="\partial L/\partial W = \delta \cdot a^\top" /> e não <InlineMath math="\partial L/\partial W = \delta^\top \cdot a" />?</strong></p>
        <p style={S.p}>
          <InlineMath math="W" /> tem shape <InlineMath math="(\text{out}, \text{in})" />. <InlineMath math="z = W\cdot a + b" />, logo <InlineMath math="\partial z/\partial W_{ij} = a_j" /> apenas para a linha <InlineMath math="i" />.
          Portanto o gradiente de <InlineMath math="L" /> em relação a <InlineMath math="W_{ij}" /> é <InlineMath math="\delta_i \cdot a_j" />, que em forma matricial é <InlineMath math="\delta \cdot a^\top" />.
          As dimensões devem coincidir com as de <InlineMath math="W" /> — verificar sempre as shapes é o primeiro passo de debug.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Quantidade</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Shape (ex. h=64, out=10, in=784)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\partial L/\partial a_2" /></td>
              <td style={S.td}><InlineMath math="a_2 - y" /></td>
              <td style={S.td}>(10,)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\partial L/\partial z_2 (= \delta_2)" /></td>
              <td style={S.td}><InlineMath math="(a_2-y) \odot a_2(1-a_2)" /></td>
              <td style={S.td}>(10,)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\partial L/\partial W_2" /></td>
              <td style={S.td}><InlineMath math="\delta_2 \cdot a_1^\top" /></td>
              <td style={S.td}>(10, 64)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\partial L/\partial a_1" /></td>
              <td style={S.td}><InlineMath math="W_2^\top \cdot \delta_2" /></td>
              <td style={S.td}>(64,)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\partial L/\partial z_1 (= \delta_1)" /></td>
              <td style={S.td}><InlineMath math="\partial L/\partial a_1 \odot a_1(1-a_1)" /></td>
              <td style={S.td}>(64,)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\partial L/\partial W_1" /></td>
              <td style={S.td}><InlineMath math="\delta_1 \cdot x^\top" /></td>
              <td style={S.td}>(64, 784)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Notação Matricial do Backprop</h2>
        <p style={S.p}>
          A regra delta generalizada unifica o backprop em duas equações matriciais elegantes aplicáveis
          a qualquer camada l de uma rede fully-connected:
        </p>
        <BlockMath math="\delta^l = \left((W^{l+1})^\top \delta^{l+1}\right) \odot \sigma'(z^l)" />
          <BlockMath math="\frac{\partial L}{\partial W^l} = \delta^l (a^{l-1})^\top" />
          <BlockMath math="\frac{\partial L}{\partial b^l} = \delta^l" />
        <p style={S.p}>
          onde <InlineMath math="\odot" /> é o produto de Hadamard (elementwise), <InlineMath math="\delta^l" /> é o "erro" na camada l, e <InlineMath math="\sigma'(z^l)" /> é a derivada
          da activação avaliada nos pré-activações do forward pass.
        </p>

        <p style={S.p}><strong>Hadamard product ⊙:</strong></p>
        
        <p style={S.p}><strong>Extensão para mini-batches:</strong></p>
        <p style={S.p}>
          Com batch size B, as activações têm shape (n, B). O gradiente dos pesos acumula sobre o batch:
        </p>
        <BlockMath math="\frac{\partial L}{\partial W^l} = \frac{1}{B} \cdot \delta^l \cdot (a^{l-1})^\top" />
        
        <div style={S.note}>
          A divisão por B dá o gradiente <em>médio</em> sobre o batch. Algumas implementações não dividem
          aqui e ajustam o learning rate. O importante é ser consistente — não misturar sum e mean entre layers.
        </div>

        <p style={S.p}><strong>Porquê a forma matricial é essencial:</strong></p>
        <ul style={S.ul}>
          <li>Elimina loops Python — operações BLAS em GPU/CPU vectorizadas</li>
          <li>O compilador JIT do PyTorch/JAX pode fusionar operações matriciais</li>
          <li>Permite processar batches inteiros com uma única operação de matriz</li>
          <li>O código fica proporcional à estrutura matemática — mais legível e menos bugs</li>
        </ul>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Modo Forward vs Modo Reverse</h2>
        <p style={S.p}>
          Diferenciação automática (AD) é a família de técnicas que calculam derivadas exactas de programas
          computacionais. Existem dois modos fundamentais, com custos assimptóticos opostos.
        </p>
        <div style={S.svgWrap}>
          <ForwardReverseSVG />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Forward Mode</th>
              <th style={S.th}>Reverse Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Propaga</td>
              <td style={S.td}>Tangentes (input→output)</td>
              <td style={S.td}>Adjoints (output→input)</td>
            </tr>
            <tr>
              <td style={S.td}>Custo por pass</td>
              <td style={S.td}>O(n) — 1 pass por input</td>
              <td style={S.td}>O(m) — 1 pass por output</td>
            </tr>
            <tr>
              <td style={S.td}>Ideal quando</td>
              <td style={S.td}>n pequeno, m grande</td>
              <td style={S.td}>n grande, m pequeno</td>
            </tr>
            <tr>
              <td style={S.td}>Em ML</td>
              <td style={S.td}>Pouco usado</td>
              <td style={S.td}>Backprop = caso m=1 (loss)</td>
            </tr>
            <tr>
              <td style={S.td}>Implementação</td>
              <td style={S.td}>Dual numbers</td>
              <td style={S.td}>Tape / wengert list</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          Em ML, n é o número de parâmetros (pode ser 10⁹) e m = 1 (a loss é escalar). Reverse mode
          computa <InlineMath math="\nabla L" /> em relação a todos os n parâmetros com um único backward pass — custo independente de n.
          Forward mode precisaria de n passes. Daí backprop ser sempre reverse mode.
        </p>

              </div>

      <hr style={S.divider} />

      {/* ── SECTION 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Autograd em PyTorch</h2>
        <p style={S.p}>
          PyTorch implementa reverse mode AD através de um grafo de computação dinâmico construído durante
          o forward pass. Cada tensor com <span style={S.formula}>requires_grad=True</span> regista as
          operações que o produziram.
        </p>

        
        <div style={S.note}>
          <strong>Regra prática:</strong> nunca modifique in-place tensors com <span style={S.formula}>requires_grad=True</span>.
          Use sempre operações out-of-place: <span style={S.formula}>x = x + 1</span> em vez de <span style={S.formula}>x += 1</span>.
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>API PyTorch</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Activar tracking</td>
              <td style={S.td}>requires_grad=True</td>
              <td style={S.td}>Constrói grafo durante forward</td>
            </tr>
            <tr>
              <td style={S.td}>Backward</td>
              <td style={S.td}>.backward()</td>
              <td style={S.td}>Propaga gradientes, destrói grafo</td>
            </tr>
            <tr>
              <td style={S.td}>Aceder gradiente</td>
              <td style={S.td}>.grad</td>
              <td style={S.td}>Acumulado após .backward()</td>
            </tr>
            <tr>
              <td style={S.td}>Separar do grafo</td>
              <td style={S.td}>.detach()</td>
              <td style={S.td}>Cria tensor sem grad_fn</td>
            </tr>
            <tr>
              <td style={S.td}>Desactivar tracking</td>
              <td style={S.td}>torch.no_grad()</td>
              <td style={S.td}>Context manager para inference</td>
            </tr>
            <tr>
              <td style={S.td}>Preservar grafo</td>
              <td style={S.td}>retain_graph=True</td>
              <td style={S.td}>Permite múltiplos .backward()</td>
            </tr>
            <tr>
              <td style={S.td}>Limpar gradientes</td>
              <td style={S.td}>optimizer.zero_grad()</td>
              <td style={S.td}>Antes de cada backward</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Vanishing e Exploding Gradients</h2>
        <p style={S.p}>
          Num backprop através de L camadas, o gradiente em relação à primeira camada é um produto de L
          matrizes Jacobianas. O comportamento deste produto determina se o treino funciona.
        </p>
        <BlockMath math="\frac{\partial L}{\partial W_1} = \frac{\partial L}{\partial a_L} \cdot J_L \cdot J_{L-1} \cdots J_1" />
        <p style={S.p}>
          <strong>Vanishing:</strong> Se os valores singulares dos Jacobianos são consistentemente menores
          que 1, o produto decresce exponencialmente. Com sigmoid: <InlineMath math="\sigma'(x) \leq 1/4" /> sempre, logo após 10 camadas
          o gradiente é multiplicado por no máximo <InlineMath math="(1/4)^{10} \approx 10^{-6}" />.
        </p>
        <div style={S.svgWrap}>
          <VanishingGradSVG />
        </div>
        <p style={S.p}>
          <strong>Exploding:</strong> Se os valores singulares dos Jacobianos excedem 1 consistentemente,
          o produto cresce exponencialmente → gradientes NaN/Inf.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Problema</th>
              <th style={S.th}>Sintoma</th>
              <th style={S.th}>Solução</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Vanishing</td>
              <td style={S.td}>Loss não diminui; primeiras camadas não aprendem</td>
              <td style={S.td}>ReLU, He init, BatchNorm, ResNet</td>
            </tr>
            <tr>
              <td style={S.td}>Exploding</td>
              <td style={S.td}>Loss NaN; gradientes muito grandes</td>
              <td style={S.td}>Gradient clipping, cuidado com lr</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}><strong>Soluções em detalhe:</strong></p>
        <ul style={S.ul}>
          <li><strong>Inicialização Xavier/Glorot:</strong> <InlineMath math="W \sim U\!\left(-\sqrt{\tfrac{6}{fan_{in}+fan_{out}}}, +\sqrt{\tfrac{6}{fan_{in}+fan_{out}}}\right)" /> — mantém variância aproximada ao longo das camadas</li>
          <li><strong>Inicialização He:</strong> <InlineMath math="W \sim N(0, 2/fan_{in})" /> — optimizada para ReLU</li>
          <li><strong>Batch Normalization:</strong> normaliza activações para <InlineMath math="\mu=0, \sigma=1" /> antes da activação — re-centra o regime linear de sigmoid/tanh</li>
          <li><strong>Skip connections (ResNet):</strong> o +1 no gradiente garante passagem directa — ver secção 9</li>
          <li><strong>Gradient clipping:</strong> se <InlineMath math="\|\nabla\|_2 > threshold" />, escalar <InlineMath math="\nabla \leftarrow \nabla \cdot (threshold / \|\nabla\|_2)" /></li>
        </ul>

              </div>

      <hr style={S.divider} />

      {/* ── SECTION 9 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Gradiente em Arquitecturas Modernas</h2>
        <p style={S.p}>
          As arquitecturas modernas foram desenhadas explicitamente para garantir bom fluxo de gradientes.
        </p>

        <p style={S.p}><strong>Residual Networks (ResNet):</strong></p>
        <BlockMath math="x^{(l+1)} = x^l + F(x^l, W_l) \implies \frac{\partial L}{\partial x^l} = \frac{\partial L}{\partial x^{(l+1)}} \cdot \left(1 + \frac{\partial F}{\partial x^l}\right)" />
        <div style={S.svgWrap}>
          <ResNetBlockSVG />
        </div>

        <p style={S.p}><strong>Transformers — Atenção e gradientes:</strong></p>
        <p style={S.p}>
          A mecanismo de atenção calcula: <InlineMath math="\text{Attn}(Q,K,V) = \text{softmax}(QK^\top / \sqrt{d}) \cdot V" />.
          O Jacobiano do softmax tem a forma especial:
        </p>
        <BlockMath math="\frac{\partial \text{softmax}(z)_i}{\partial z_j} = p_i(\delta_{ij} - p_j)" />
        <p style={S.p}>
          onde <InlineMath math="p = \text{softmax}(z)" />. Na prática, frameworks computam isto eficientemente via o truque
          de FlashAttention que evita materializar a matriz de atenção completa.
        </p>

        <p style={S.p}><strong>LSTMs — portas como válvulas de gradiente:</strong></p>
        
        <div style={S.note}>
          As LSTMs foram a primeira solução largamente adoptada para vanishing gradients em RNNs.
          As portas são pesos aprendidos que determinam quanto do gradiente histórico é preservado.
          Transformers com atenção posicional generalizam isto de forma ainda mais flexível.
        </div>

        <p style={S.p}><strong>Highway Networks:</strong></p>
        <p style={S.p}>
          Precursores do ResNet com gates aprendidas: <InlineMath math="y = T(x)\cdot H(x) + (1-T(x))\cdot x" />, onde T é a transform gate.
          Gradiente: <InlineMath math="\partial y/\partial x = T\cdot \partial H/\partial x + (1-T) + \text{gradientes das gates}" />. Mais expressivo que ResNet mas
          com mais parâmetros e hiperparâmetros.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 10 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Diferenciação de Segunda Ordem</h2>
        <p style={S.p}>
          O Hessiano H de <InlineMath math="L(\theta)" /> é a matriz n×n de derivadas segundas <InlineMath math="\partial^2 L/\partial \theta_i \partial \theta_j" />. Para <InlineMath math="n=10^8" /> parâmetros,
          formar H explicitamente é impossível (10¹⁶ entradas). Mas podemos calcular <strong>produtos Hessiano-vector</strong> Hv sem formar H.
        </p>

        <p style={S.p}><strong>Truque de Pearlmutter (Hv em O(n)):</strong></p>
        <BlockMath math="Hv = \nabla_\theta\left[(\nabla_\theta L)^\top v\right] = \mathcal{R}_v\{\nabla L\}" />
        <p style={S.p}>
          onde R_v{'{f}'} é o operador "diferencial directional em direcção v" aplicado a f. Na prática:
        </p>

        <p style={S.p}><strong>Aplicações:</strong></p>
        <ul style={S.ul}>
          <li><strong>Método de Newton:</strong> <InlineMath math="\theta \leftarrow \theta - H^{-1}\nabla L" />. Usa Hv para resolver <InlineMath math="H\cdot \Delta\theta = \nabla L" /> via conjugate gradient</li>
          <li><strong>Natural gradient:</strong> <InlineMath math="\theta \leftarrow \theta - F^{-1}\nabla L" /> onde F é a Fisher information matrix</li>
          <li><strong>Estimação de curvatura:</strong> para adaptar learning rates (Adam usa estimativa de 2ª ordem diagonal)</li>
        </ul>

        <p style={S.p}><strong>Gauss-Newton e Fisher Information:</strong></p>
        <div style={S.highlight}>
          G = J^T J (Gauss-Newton, aprox. ao Hessiano){'\n'}
          F = E[∇log p(y|x) ∇log p(y|x)^T] (Fisher){'\n'}
          F = G para modelos exponenciais com MSE/cross-entropy
        </div>
        <div style={S.note}>
          A Fisher Information Matrix é o Hessiano esperado da log-verosimilhança, e coincide com a
          Gauss-Newton matrix para redes com outputs exponenciais. Natural gradient pré-condicionado
          por F⁻¹ é invariante a reparametrizações — ao contrário do gradiente euclideano.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 11 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Gradient Checkpointing</h2>
        <p style={S.p}>
          Backprop padrão armazena <em>todas</em> as activações do forward pass para usar no backward —
          custo de memória O(n) para n camadas. Em redes muito profundas ou com activações grandes
          (transformers com sequências longas), isso é proibitivo.
        </p>
        <div style={S.svgWrap}>
          <CheckpointSVG />
        </div>

        <p style={S.p}><strong>Estratégia óptima:</strong> dividir a rede em k segmentos, guardar apenas as activações
          nas k fronteiras. Durante o backward de cada segmento, re-executar o forward desse segmento para
          recalcular as activações intermédias. Tradeoff óptimo em k = √n:</p>
        <BlockMath math="\text{Memória: } O(\sqrt{n}) \;|\; \text{Compute extra: } O(n) \text{ (1 forward adicional)}" />

        
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Memória (activações)</th>
              <th style={S.th}>Compute extra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Padrão</td>
              <td style={S.td}>O(n)</td>
              <td style={S.td}>0</td>
            </tr>
            <tr>
              <td style={S.td}>Checkpoint óptimo</td>
              <td style={S.td}>O(√n)</td>
              <td style={S.td}>+1 forward pass (O(n))</td>
            </tr>
            <tr>
              <td style={S.td}>Sem guardar nada</td>
              <td style={S.td}>O(1)</td>
              <td style={S.td}>Re-forward completo por camada: O(n²)</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Gradient checkpointing é essencial para treinar modelos com sequências muito longas (como
          transformers com context window de 128K tokens) ou redes extremamente profundas. PyTorch
          Fully Sharded Data Parallel (FSDP) combina checkpointing com sharding de pesos para escalar
          a modelos com centenas de biliões de parâmetros.
        </div>
      </div>
    </div>
  );
}
