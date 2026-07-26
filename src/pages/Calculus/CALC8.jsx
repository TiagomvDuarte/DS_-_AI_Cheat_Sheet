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
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// SVG 1: 2D vector field
function VectorFieldSVG() {
  const W = 480, H = 260;
  const cx = W / 2, cy = H / 2;
  const arrows = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      const x = 40 + i * 65;
      const y = 30 + j * 40;
      const dx = (x - cx) * 0.12;
      const dy = (y - cy) * 0.12;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const scale = Math.min(22, len);
      const ux = (dx / len) * scale;
      const uy = (dy / len) * scale;
      const ex = x + ux;
      const ey = y + uy;
      const alpha = 0.3 + 0.7 * (scale / 22);
      arrows.push({ x, y, ex, ey, alpha });
    }
  }
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {arrows.map((a, i) => {
        const headLen = 5;
        const angle = Math.atan2(a.ey - a.y, a.ex - a.x);
        const h1x = a.ex - headLen * Math.cos(angle - 0.4);
        const h1y = a.ey - headLen * Math.sin(angle - 0.4);
        const h2x = a.ex - headLen * Math.cos(angle + 0.4);
        const h2y = a.ey - headLen * Math.sin(angle + 0.4);
        return (
          <g key={i} opacity={a.alpha}>
            <line x1={a.x} y1={a.y} x2={a.ex} y2={a.ey} stroke={color} strokeWidth={1.5} />
            <polyline points={`${h1x.toFixed(1)},${h1y.toFixed(1)} ${a.ex.toFixed(1)},${a.ey.toFixed(1)} ${h2x.toFixed(1)},${h2y.toFixed(1)}`} fill="none" stroke={color} strokeWidth={1.5} />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <text x={cx} y={cy - 12} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>origem</text>
      <text x={W / 2} y={H - 8} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">Campo radial F(x,y) = (x, y)</text>
    </svg>
  );
}

// SVG 2: Nabla operator — three operations illustrated
function NablaSVG() {
  // Extra viewBox padding around the actual content (rather than shrinking the
  // outer container) is what makes the boxes/text genuinely render smaller,
  // since the SVG still fills its container width at 100%.
  const W = 640, H = 190;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {/* Gradient */}
      <rect x={100} y={42} width={130} height={50} rx={8} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1} />
      <text x={165} y={64} textAnchor="middle" fontSize={13} fill={color} fontWeight={700}>Gradiente</text>
      <text x={165} y={82} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">escalar → vector</text>
      {/* Divergence */}
      <rect x={255} y={42} width={130} height={50} rx={8} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1} />
      <text x={320} y={64} textAnchor="middle" fontSize={13} fill={color} fontWeight={700}>Divergência</text>
      <text x={320} y={82} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">vector → escalar</text>
      {/* Curl */}
      <rect x={410} y={42} width={130} height={50} rx={8} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth={1} />
      <text x={475} y={64} textAnchor="middle" fontSize={13} fill={color} fontWeight={700}>Rotacional</text>
      <text x={475} y={82} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">vector → vector</text>
      {/* Laplacian */}
      <rect x={255} y={104} width={130} height={44} rx={8} fill="rgba(74,158,237,0.07)" stroke={color} strokeWidth={1} strokeDasharray="4 2" />
      <text x={320} y={123} textAnchor="middle" fontSize={13} fill={color} fontWeight={700}>Laplaciano</text>
      <text x={320} y={139} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">∇²f = ∇·(∇f)</text>
      {/* arrows */}
      <line x1={230} y1={67} x2={255} y2={67} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3 2" />
      <line x1={385} y1={67} x2={410} y2={67} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3 2" />
      <line x1={320} y1={92} x2={320} y2={104} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3 2" />
    </svg>
  );
}

// SVG 3: Contour map with gradient vectors
function GradientContourSVG() {
  const W = 640, H = 340;
  const cx = W / 2, cy = H / 2;
  // Draw elliptical contours
  const contours = [30, 60, 90, 120];
  // Gradient vectors at several points on a contour
  const gradVectors = [
    { ox: cx, oy: cy - 60, dx: 0, dy: -28 },
    { ox: cx + 70, oy: cy - 30, dx: 22, dy: -18 },
    { ox: cx + 80, oy: cy + 20, dx: 24, dy: 12 },
    { ox: cx, oy: cy + 60, dx: 0, dy: 28 },
    { ox: cx - 70, oy: cy + 20, dx: -24, dy: 12 },
    { ox: cx - 80, oy: cy - 30, dx: -22, dy: -18 },
  ];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {contours.map((r, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r * 1.3} ry={r} fill="none" stroke={color} strokeWidth={1} opacity={0.25 + i * 0.18} />
      ))}
      {gradVectors.map((v, i) => {
        const ex = v.ox + v.dx;
        const ey = v.oy + v.dy;
        const angle = Math.atan2(v.dy, v.dx);
        const h1x = ex - 6 * Math.cos(angle - 0.4);
        const h1y = ey - 6 * Math.sin(angle - 0.4);
        const h2x = ex - 6 * Math.cos(angle + 0.4);
        const h2y = ey - 6 * Math.sin(angle + 0.4);
        return (
          <g key={i}>
            <line x1={v.ox} y1={v.oy} x2={ex} y2={ey} stroke="#7dd3fc" strokeWidth={2} />
            <polyline points={`${h1x.toFixed(1)},${h1y.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${h2x.toFixed(1)},${h2y.toFixed(1)}`} fill="none" stroke="#7dd3fc" strokeWidth={2} />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize={11} fill={color}>mínimo</text>
      {/* gradient descent path */}
      <path d={`M${cx + 130},${cy - 60} Q${cx + 100},${cy - 40} ${cx + 70},${cy - 10} Q${cx + 35},${cy + 15} ${cx},${cy}`} fill="none" stroke="#4a9eed" strokeWidth={2} strokeDasharray="5 3" />
      <text x={cx + 135} y={cy - 64} fontSize={11} fill="#4a9eed" textAnchor="start">−∇f</text>
      <text x={W / 2} y={H - 8} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">curvas de nível (azul) e vectores gradiente (azul claro) — descida: azul tracejado</text>
    </svg>
  );
}

// SVG 4: Source vs Sink divergence
function DivergenceSVG() {
  const W = 480, H = 200;
  // source on left, sink on right
  const srcX = 120, snkX = 360, midY = 100;
  const dirs = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {/* source */}
      {dirs.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const ex = srcX + 34 * Math.cos(rad);
        const ey = midY + 34 * Math.sin(rad);
        const angle = rad;
        const h1x = ex - 6 * Math.cos(angle - 0.4);
        const h1y = ey - 6 * Math.sin(angle - 0.4);
        const h2x = ex - 6 * Math.cos(angle + 0.4);
        const h2y = ey - 6 * Math.sin(angle + 0.4);
        return (
          <g key={i}>
            <line x1={srcX} y1={midY} x2={ex} y2={ey} stroke={color} strokeWidth={1.5} />
            <polyline points={`${h1x.toFixed(1)},${h1y.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${h2x.toFixed(1)},${h2y.toFixed(1)}`} fill="none" stroke={color} strokeWidth={1.5} />
          </g>
        );
      })}
      <circle cx={srcX} cy={midY} r={5} fill={color} />
      <text x={srcX} y={midY + 52} textAnchor="middle" fontSize={12} fill={color} fontWeight={700}>fonte (∇·F &gt; 0)</text>
      {/* sink */}
      {dirs.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const sx2 = snkX + 34 * Math.cos(rad);
        const sy2 = midY + 34 * Math.sin(rad);
        const angle = Math.atan2(midY - sy2, snkX - sx2);
        const ex2 = snkX - 8 * Math.cos(rad);
        const ey2 = midY - 8 * Math.sin(rad);
        const h1x = ex2 - 6 * Math.cos(angle - 0.4);
        const h1y = ey2 - 6 * Math.sin(angle - 0.4);
        const h2x = ex2 - 6 * Math.cos(angle + 0.4);
        const h2y = ey2 - 6 * Math.sin(angle + 0.4);
        return (
          <g key={i}>
            <line x1={sx2} y1={sy2} x2={ex2} y2={ey2} stroke="#4a9eed" strokeWidth={1.5} />
            <polyline points={`${h1x.toFixed(1)},${h1y.toFixed(1)} ${ex2.toFixed(1)},${ey2.toFixed(1)} ${h2x.toFixed(1)},${h2y.toFixed(1)}`} fill="none" stroke="#4a9eed" strokeWidth={1.5} />
          </g>
        );
      })}
      <circle cx={snkX} cy={midY} r={5} fill="#4a9eed" />
      <text x={snkX} y={midY + 52} textAnchor="middle" fontSize={12} fill="#4a9eed" fontWeight={700}>sorvedouro (∇·F &lt; 0)</text>
      <line x1={240} y1={20} x2={240} y2={180} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4 3" />
    </svg>
  );
}

// SVG 5: Curl / rotation arrows
function CurlSVG() {
  const W = 480, H = 200;
  const cx = 240, cy = 100;
  // rotating arrows around a centre
  const pts = 8;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {/* circular arrow path hint */}
      <circle cx={cx} cy={cy} r={55} fill="none" stroke={color} strokeWidth={1} opacity={0.2} />
      {Array.from({ length: pts }).map((_, i) => {
        const ang = (i / pts) * 2 * Math.PI;
        const ox = cx + 55 * Math.cos(ang);
        const oy = cy + 55 * Math.sin(ang);
        // tangent direction (counter-clockwise)
        const tx = -Math.sin(ang) * 22;
        const ty = Math.cos(ang) * 22;
        const ex = ox + tx;
        const ey = oy + ty;
        const headAng = Math.atan2(ty, tx);
        const h1x = ex - 6 * Math.cos(headAng - 0.4);
        const h1y = ey - 6 * Math.sin(headAng - 0.4);
        const h2x = ex - 6 * Math.cos(headAng + 0.4);
        const h2y = ey - 6 * Math.sin(headAng + 0.4);
        return (
          <g key={i}>
            <line x1={ox} y1={oy} x2={ex} y2={ey} stroke={color} strokeWidth={2} />
            <polyline points={`${h1x.toFixed(1)},${h1y.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${h2x.toFixed(1)},${h2y.toFixed(1)}`} fill="none" stroke={color} strokeWidth={2} />
          </g>
        );
      })}
      {/* central curl symbol */}
      <path d="M230,90 Q240,78 250,90 Q260,102 250,110 Q240,118 230,110" fill="none" stroke={color} strokeWidth={2} />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize={12} fill={color} fontWeight={700}>∇×F ≠ 0</text>
      {/* irrotational box */}
      <rect x={370} y={50} width={90} height={70} rx={6} fill="rgba(74,158,237,0.07)" stroke={color} strokeWidth={1} strokeDasharray="4 2" />
      <text x={415} y={80} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>irrotacional</text>
      <text x={415} y={98} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">∇×F = 0</text>
      <text x={415} y={112} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">conservativo</text>
      <text x={W / 2 - 60} y={H - 8} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">campo rotacional — ∇×F aponta para fora do plano (eixo z)</text>
    </svg>
  );
}

// SVG 6: Laplacian — bowl, hill, harmonic
function LaplacianSVG() {
  const W = 480, H = 200;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {/* bowl ∇²f > 0 */}
      <path d="M30,80 Q80,160 130,80" fill="none" stroke={color} strokeWidth={2} />
      <circle cx={80} cy={155} r={4} fill={color} />
      <text x={80} y={175} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>∇²f &gt; 0</text>
      <text x={80} y={190} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">mínimo local</text>
      {/* hill ∇²f < 0 */}
      <path d="M175,160 Q225,40 275,160" fill="none" stroke="#4a9eed" strokeWidth={2} />
      <circle cx={225} cy={45} r={4} fill="#4a9eed" />
      <text x={225} y={175} textAnchor="middle" fontSize={11} fill="#4a9eed" fontWeight={700}>∇²f &lt; 0</text>
      <text x={225} y={190} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">máximo local</text>
      {/* harmonic ∇²f = 0 */}
      <path d="M320,130 Q360,80 400,100 Q420,110 450,90" fill="none" stroke="#7dd3fc" strokeWidth={2} />
      <text x={385} y={175} textAnchor="middle" fontSize={11} fill="#7dd3fc" fontWeight={700}>∇²f = 0</text>
      <text x={385} y={190} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">função harmónica</text>
    </svg>
  );
}

// SVG 7: Line integral — two paths between same endpoints
function LineIntegralSVG() {
  const W = 480, H = 228;
  const ax = 80, ay = 160, bx = 400, by = 60;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {/* path 1: curved */}
      <path d={`M${ax},${ay} Q180,40 ${bx},${by}`} fill="none" stroke={color} strokeWidth={2.5} />
      <text x={210} y={55} fontSize={11} fill={color} fontWeight={700}>caminho C1</text>
      {/* path 2: straight-ish */}
      <path d={`M${ax},${ay} Q260,180 ${bx},${by}`} fill="none" stroke="#7dd3fc" strokeWidth={2.5} />
      <text x={365} y={108} fontSize={11} fill="#7dd3fc" fontWeight={700}>caminho C2</text>
      {/* endpoints */}
      <circle cx={ax} cy={ay} r={6} fill={color} />
      <text x={ax - 10} y={ay + 18} fontSize={12} fill="var(--text-primary)" fontWeight={700}>A</text>
      <circle cx={bx} cy={by} r={6} fill={color} />
      <text x={bx + 8} y={by - 4} fontSize={12} fill="var(--text-primary)" fontWeight={700}>B</text>
      {/* annotation — placed below both curves so it never overlaps them */}
      <rect x={110} y={178} width={260} height={40} rx={6} fill="rgba(74,158,237,0.10)" />
      <text x={240} y={194} textAnchor="middle" fontSize={11} fill={color}>campo conservativo: ∫C1 F·dr = ∫C2 F·dr</text>
      <text x={240} y={209} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">independência do caminho</text>
    </svg>
  );
}

// SVG 8: Flux through a closed surface
function FluxSVG() {
  const W = 640, H = 300;
  const cx = W / 2, cy = H / 2;
  const rx = 90, ry = 60;
  const fluxPts = [
    { ang: 0 }, { ang: 45 }, { ang: 90 }, { ang: 135 },
    { ang: 180 }, { ang: 225 }, { ang: 270 }, { ang: 315 },
  ];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth={2} />
      {fluxPts.map((fp, i) => {
        const rad = (fp.ang * Math.PI) / 180;
        const ox = cx + rx * Math.cos(rad);
        const oy = cy + ry * Math.sin(rad);
        const normX = Math.cos(rad);
        const normY = Math.sin(rad) * (ry / rx);
        const len2 = Math.sqrt(normX * normX + normY * normY);
        const nx = (normX / len2) * 28;
        const ny = (normY / len2) * 28;
        const ex = ox + nx;
        const ey = oy + ny;
        const headAng = Math.atan2(ny, nx);
        const h1x = ex - 6 * Math.cos(headAng - 0.4);
        const h1y = ey - 6 * Math.sin(headAng - 0.4);
        const h2x = ex - 6 * Math.cos(headAng + 0.4);
        const h2y = ey - 6 * Math.sin(headAng + 0.4);
        return (
          <g key={i}>
            <line x1={ox} y1={oy} x2={ex} y2={ey} stroke={color} strokeWidth={1.8} />
            <polyline points={`${h1x.toFixed(1)},${h1y.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${h2x.toFixed(1)},${h2y.toFixed(1)}`} fill="none" stroke={color} strokeWidth={1.8} />
          </g>
        );
      })}
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize={13} fill={color} fontWeight={700}>∯ F·dS</text>
      <text x={cx} y={cy + 20} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">= ∭ ∇·F dV</text>
      <text x={W / 2} y={H - 8} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">Teorema de Gauss: fluxo superficial = integral de volume da divergência</text>
    </svg>
  );
}

// SVG 9: Grid deformation by Jacobian
function JacobianSVG() {
  const W = 480, H = 220;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {/* regular grid left */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={'gh' + i} x1={30} y1={30 + i * 35} x2={180} y2={30 + i * 35} stroke="var(--text-secondary)" strokeWidth={0.8} opacity={0.4} />
      ))}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={'gv' + i} x1={30 + i * 37} y1={30} x2={30 + i * 37} y2={170} stroke="var(--text-secondary)" strokeWidth={0.8} opacity={0.4} />
      ))}
      <text x={105} y={195} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">espaço z (original)</text>
      {/* arrow */}
      <path d="M200,100 Q240,90 280,100" fill="none" stroke={color} strokeWidth={2} />
      <polyline points="274,94 280,100 274,106" fill="none" stroke={color} strokeWidth={2} />
      <text x={240} y={86} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>f (bijecção)</text>
      <text x={240} y={115} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">|det J|</text>
      {/* deformed grid right */}
      {[0, 1, 2, 3, 4].map(i => {
        const y1d = 30 + i * 35 + (i - 2) * 6;
        const y2d = 30 + i * 35 - (i - 2) * 6;
        return <line key={'dh' + i} x1={300} y1={y1d} x2={450} y2={y2d} stroke={color} strokeWidth={0.9} opacity={0.5} />;
      })}
      {[0, 1, 2, 3, 4].map(i => {
        const x1d = 300 + i * 37 + (i - 2) * 4;
        const x2d = 300 + i * 37 - (i - 2) * 4;
        return <line key={'dv' + i} x1={x1d} y1={30} x2={x2d} y2={170} stroke={color} strokeWidth={0.9} opacity={0.5} />;
      })}
      <text x={375} y={195} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">espaço x (transformado)</text>
    </svg>
  );
}

// SVG 10: Normalizing flows — 2D distribution transform
function NormalizingFlowSVG() {
  const W = 480, H = 200;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {/* simple gaussian blob left */}
      {[0.35, 0.6, 0.85].map((r, i) => (
        <ellipse key={i} cx={110} cy={100} rx={r * 55} ry={r * 40} fill="none" stroke={color} strokeWidth={1} opacity={0.3 + i * 0.25} />
      ))}
      <text x={110} y={165} textAnchor="middle" fontSize={12} fill={color} fontWeight={700}>p(z) — Gaussiana</text>
      {/* arrow */}
      <path d="M185,100 Q240,80 295,100" fill="none" stroke="#7dd3fc" strokeWidth={2} />
      <polyline points="289,94 295,100 289,106" fill="none" stroke="#7dd3fc" strokeWidth={2} />
      <text x={240} y={66} textAnchor="middle" fontSize={11} fill="#7dd3fc" fontWeight={700}>f invertível</text>
      <text x={240} y={80} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">+ log|det J|</text>
      {/* complex blob right */}
      <path d="M370,75 Q410,55 440,90 Q460,115 440,145 Q415,165 380,155 Q345,145 340,120 Q330,90 370,75 Z" fill="none" stroke={color} strokeWidth={1.5} opacity={0.5} />
      <path d="M375,82 Q408,66 432,96 Q450,118 432,143 Q410,158 382,150 Q352,140 347,118 Q338,92 375,82 Z" fill="rgba(74,158,237,0.10)" />
      <text x={392} y={175} textAnchor="middle" fontSize={12} fill={color} fontWeight={700}>p(x) — complexa</text>
      {/* formula */}
      <text x={240} y={192} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">log p(x) = log p(z) + log|det J|</text>
    </svg>
  );
}

// SVG 11: Small graph with Laplacian
function GraphLaplacianSVG() {
  const W = 480, H = 230;
  const nodes = [
    { id: 0, x: 120, y: 60, label: '0' },
    { id: 1, x: 240, y: 40, label: '1' },
    { id: 2, x: 360, y: 80, label: '2' },
    { id: 3, x: 100, y: 160, label: '3' },
    { id: 4, x: 260, y: 150, label: '4' },
    { id: 5, x: 380, y: 170, label: '5' },
  ];
  const edges = [[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5]];
  const msgArrows = [[1,0],[4,1],[4,3],[5,4]];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '1.2rem auto' }} overflow="visible">
      <rect width={W} height={H} rx={10} fill="var(--bg-secondary)" />
      {edges.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b];
        return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="var(--text-secondary)" strokeWidth={1.8} />;
      })}
      {msgArrows.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b];
        const angle = Math.atan2(nb.y - na.y, nb.x - na.x);
        const midX = (na.x + nb.x) / 2;
        const midY = (na.y + nb.y) / 2;
        const ex = midX + 10 * Math.cos(angle);
        const ey = midY + 10 * Math.sin(angle);
        const h1x = ex - 7 * Math.cos(angle - 0.4);
        const h1y = ey - 7 * Math.sin(angle - 0.4);
        const h2x = ex - 7 * Math.cos(angle + 0.4);
        const h2y = ey - 7 * Math.sin(angle + 0.4);
        return (
          <g key={i}>
            <polyline points={`${h1x.toFixed(1)},${h1y.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${h2x.toFixed(1)},${h2y.toFixed(1)}`} fill="none" stroke={color} strokeWidth={2} />
          </g>
        );
      })}
      {nodes.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={16} fill="var(--bg-secondary)" />
          <circle cx={n.x} cy={n.y} r={16} fill="rgba(74,158,237,0.18)" stroke={color} strokeWidth={1.8} />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize={13} fill={color} fontWeight={700}>{n.label}</text>
        </g>
      ))}
      <text x={W / 2} y={210} textAnchor="middle" fontSize={12} fill="var(--text-secondary)">grafo — setas verdes: message passing (GNN)</text>
    </svg>
  );
}

export default function CALC9() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Cálculo</Link>
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Cálculo Vetorial</h1>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Campos Escalares e Vectoriais</h2>
        <p style={S.p}>
          Um <strong>campo escalar</strong> <InlineMath math="f: \mathbb{R}^n \to \mathbb{R}" /> associa um número real a cada ponto do espaço.
          Exemplos em ML: função de perda <InlineMath math="L(\theta)" />, probabilidade <InlineMath math="\log p(x)" />, função de valor <InlineMath math="V(s)" />.
        </p>
        <p style={S.p}>
          Um <strong>campo vectorial</strong> <InlineMath math="F: \mathbb{R}^n \to \mathbb{R}^n" /> associa um vector a cada ponto.
          Exemplos em ML: gradiente <InlineMath math="\nabla L(\theta)" />, campo de velocidade de um fluxo, forças num simulador físico.
        </p>
        <VectorFieldSVG />
        
          <strong>Notação:</strong> campo escalar <InlineMath math="f(x,y)" />, campo vectorial <InlineMath math="F(x,y) = (P(x,y), Q(x,y))" />.
          Em <InlineMath math="\mathbb{R}^3" />: <InlineMath math="F = (P, Q, R)" />.
        
        <div style={S.note}>
          Em ML, os parâmetros <InlineMath math="\theta \in \mathbb{R}^n" /> definem um campo escalar de perda. O optimizador navega este campo
          usando o gradiente — um campo vectorial.
        </div>
        <h3 style={S.h3}>Exemplos comuns</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Domínio → Contradomínio</th>
              <th style={S.th}>Exemplo ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Escalar</td>
              <td style={S.td}>ℝⁿ → ℝ</td>
              <td style={S.td}>função de perda, log-verossimilhança</td>
            </tr>
            <tr>
              <td style={S.td}>Vectorial</td>
              <td style={S.td}>ℝⁿ → ℝⁿ</td>
              <td style={S.td}>gradiente, campo de atenção, score function</td>
            </tr>
            <tr>
              <td style={S.td}>Tensorial</td>
              <td style={S.td}>ℝⁿ → ℝⁿˣⁿ</td>
              <td style={S.td}>Hessiana, Jacobiano</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Operador Nabla <InlineMath math="\nabla" /></h2>
        <p style={S.p}>
          O operador nabla <InlineMath math="\nabla" /> (ou "del") é o vector de derivadas parciais:
        </p>
        <BlockMath math="\nabla = \left(\frac{\partial}{\partial x_1}, \frac{\partial}{\partial x_2}, \ldots, \frac{\partial}{\partial x_n}\right)" />
        <p style={S.p}>
          Aplicado de três formas diferentes, gera os três operadores fundamentais do cálculo vetorial:
        </p>
        <NablaSVG />
        <h3 style={S.h3}>Gradiente: <InlineMath math="\nabla f" /></h3>
        <p style={S.p}>
          Aplicar <InlineMath math="\nabla" /> a um campo escalar f produz um campo vectorial: <InlineMath math="\nabla f = \left(\frac{\partial f}{\partial x_1}, \ldots, \frac{\partial f}{\partial x_n}\right)" />.
          O gradiente aponta na direcção de maior crescimento de f.
        </p>
        <h3 style={S.h3}>Divergência: <InlineMath math="\nabla \cdot F" /></h3>
        <p style={S.p}>
          O produto escalar de <InlineMath math="\nabla" /> com um campo vectorial <InlineMath math="F = (F_1, \ldots, F_n)" /> é:
          {' '}<InlineMath math="\nabla \cdot F = \frac{\partial F_1}{\partial x_1} + \frac{\partial F_2}{\partial x_2} + \cdots + \frac{\partial F_n}{\partial x_n}" />. Resultado: escalar.
        </p>
        <h3 style={S.h3}>Rotacional: <InlineMath math="\nabla \times F" /> (em <InlineMath math="\mathbb{R}^3" />)</h3>
        <p style={S.p}>
          O produto vetorial de <InlineMath math="\nabla" /> com F mede a "rotação" local do campo. Resultado: vector.
        </p>
        <h3 style={S.h3}>Laplaciano: <InlineMath math="\nabla^2 f = \nabla \cdot (\nabla f)" /></h3>
        <BlockMath math="\nabla^2 f = \frac{\partial^2 f}{\partial x_1^2} + \frac{\partial^2 f}{\partial x_2^2} + \cdots + \frac{\partial^2 f}{\partial x_n^2}" />
        <div style={S.note}>
          O Laplaciano combina divergência e gradiente: mede a curvatura média de f.
          Função harmónica: <InlineMath math="\nabla^2 f = 0" /> — sem máximos nem mínimos no interior.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Gradiente como Campo</h2>
        <p style={S.p}>
          Para uma função <InlineMath math="f: \mathbb{R}^n \to \mathbb{R}" />, o gradiente <InlineMath math="\nabla f" /> é um campo vectorial que em cada ponto indica
          a direcção e magnitude do maior crescimento de f.
        </p>
        <GradientContourSVG />
        
          <strong>Propriedade fundamental:</strong> <InlineMath math="\nabla f" /> é sempre perpendicular às curvas de nível de f.
          A descida de gradiente segue <InlineMath math="-\nabla f" />.
        
        <h3 style={S.h3}>Gradient Descent</h3>
        <p style={S.p}>
          A actualização de parâmetros <InlineMath math="\theta \leftarrow \theta - \eta \cdot \nabla L(\theta)" /> move-se na direcção oposta ao gradiente,
          descendo a superfície de perda. O passo <InlineMath math="\eta" /> (learning rate) controla a magnitude do movimento.
        </p>
                <h3 style={S.h3}>Regra da Cadeia Vectorial</h3>
        <p style={S.p}>
          Para <InlineMath math="f = g \circ h" /> com <InlineMath math="h: \mathbb{R}^n \to \mathbb{R}^m" /> e <InlineMath math="g: \mathbb{R}^m \to \mathbb{R}" />:
        </p>
        <BlockMath math="\nabla f(x) = J_h(x)^\top \cdot \nabla g(h(x))" />
        <p style={S.p}>
          onde <InlineMath math="J_h" /> é o Jacobiano de h. É a base do algoritmo de backpropagation em redes neurais.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Divergência</h2>
        <p style={S.p}>
          A divergência <InlineMath math="\nabla \cdot F" /> mede a taxa de "expansão" ou "contracção" de um campo vectorial num ponto.
          Intuitivamente: quanta "substância" está a fluir para fora de uma região infinitesimal?
        </p>
        <BlockMath math="\nabla \cdot F = \frac{\partial F_1}{\partial x_1} + \frac{\partial F_2}{\partial x_2} + \frac{\partial F_3}{\partial x_3}" />
        <DivergenceSVG />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Sinal</th>
              <th style={S.th}>Interpretação</th>
              <th style={S.th}>Exemplo físico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\nabla \cdot F > 0" /></td>
              <td style={S.td}>fonte — fluxo a sair</td>
              <td style={S.td}>nascente de água, carga eléctrica positiva</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\nabla \cdot F < 0" /></td>
              <td style={S.td}>sorvedouro — fluxo a entrar</td>
              <td style={S.td}>dreno, carga negativa</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\nabla \cdot F = 0" /></td>
              <td style={S.td}>campo solenoidal</td>
              <td style={S.td}>campo magnético, fluido incompressível</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Ligação a Normalizing Flows</h3>
        <p style={S.p}>
          Em normalizing flows contínuos (Neural ODEs, FFJORD), a evolução da log-densidade ao longo
          do tempo segue:
        </p>
        <BlockMath math="\frac{d \log p(x(t))}{dt} = -\nabla \cdot f(x(t), t)" />
        <p style={S.p}>
          O traço do Jacobiano (= divergência) determina como a densidade muda ao longo da trajectória.
          Computar o traço exacto é custoso — FFJORD usa estimadores de Hutchinson para O(n) custo.
        </p>
              </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Rotacional</h2>
        <p style={S.p}>
          O rotacional <InlineMath math="\nabla \times F" /> mede a rotação local de um campo vectorial em <InlineMath math="\mathbb{R}^3" />.
          Em cada ponto, indica o eixo e velocidade angular da rotação infinitesimal.
        </p>
        <BlockMath math="\nabla \times F = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\; \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\; \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)" />
        <CurlSVG />
        <h3 style={S.h3}>Campos Conservativos e Irrotacionais</h3>
        <p style={S.p}>
          Um campo F é <strong>conservativo</strong> se existe um potencial escalar φ tal que <InlineMath math="F = \nabla \varphi" />.
          Equivalentemente (em domínios simplesmente conexos):
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Condição</th>
              <th style={S.th}>Equivalência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="F = \nabla \varphi" /> (existe potencial)</td>
              <td style={S.td}>conservativo</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\nabla \times F = 0" /></td>
              <td style={S.td}>irrotacional</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\oint_C F \cdot dr = 0" /> (todo C fechado)</td>
              <td style={S.td}>independência do caminho</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Em ML: a função de perda <InlineMath math="L(\theta)" /> define um campo gradiente <InlineMath math="\nabla L" />. Campos gradiente são sempre
          conservativos — o "trabalho" de descer do ponto A ao ponto B é sempre o mesmo,
          independente do caminho do optimizador.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Laplaciano</h2>
        <p style={S.p}>
          O Laplaciano <InlineMath math="\nabla^2 f = \nabla \cdot (\nabla f)" /> combina gradiente e divergência. Mede a curvatura média de f:
          a diferença entre o valor de f num ponto e a sua média numa vizinhança.
        </p>
        <BlockMath math="\nabla^2 f = \frac{\partial^2 f}{\partial x_1^2} + \frac{\partial^2 f}{\partial x_2^2} + \cdots + \frac{\partial^2 f}{\partial x_n^2}" />
        <LaplacianSVG />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Sinal de <InlineMath math="\nabla^2 f" /></th>
              <th style={S.th}>Geometria</th>
              <th style={S.th}>ML / Física</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\nabla^2 f > 0" /></td>
              <td style={S.td}>bowl / mínimo local</td>
              <td style={S.td}>função de perda convexa localmente</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\nabla^2 f < 0" /></td>
              <td style={S.td}>colina / máximo local</td>
              <td style={S.td}>ponto de sela instável</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\nabla^2 f = 0" /></td>
              <td style={S.td}>harmónica</td>
              <td style={S.td}>solução da equação de Laplace</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Laplaciano em Graph Neural Networks</h3>
        <p style={S.p}>
          O Laplaciano de grafo <InlineMath math="L = D - A" /> (onde D é a matriz de graus e A a matriz de adjacência)
          é o análogo discreto do operador <InlineMath math="\nabla^2" />. Os seus auto-vectores formam a base de Fourier do
          grafo, permitindo convolução espectral:
        </p>
        <BlockMath math="L = U \Lambda U^\top \quad \text{(decomposição espectral)}" />
                <div style={S.note}>
          A normalização <InlineMath math="L_{\text{sym}} = D^{-1/2} L D^{-1/2}" /> é usada em GCN (Kipf &amp; Welling, 2017).
          O filtro passa-baixo (smooth) corresponde aos auto-vectores de menor auto-valor.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Integral de Linha</h2>
        <p style={S.p}>
          A integral de linha de um campo vectorial F ao longo de uma curva C mede o "trabalho total"
          efectuado pelo campo ao longo da trajectória:
        </p>
        <BlockMath math="\int_C F \cdot dr = \int_a^b F(r(t)) \cdot r'(t)\, dt" />
        <LineIntegralSVG />
        <h3 style={S.h3}>Independência do Caminho</h3>
        <p style={S.p}>
          Se F é conservativo (<InlineMath math="F = \nabla \varphi" />), então <InlineMath math="\int_C F \cdot dr = \varphi(B) - \varphi(A)" /> para qualquer caminho C de
          A a B. O resultado depende apenas dos extremos, não do caminho.
        </p>
        <h3 style={S.h3}>Teorema de Green (em ℝ²)</h3>
        <p style={S.p}>
          Para uma região D com fronteira C orientada positivamente:
        </p>
        <BlockMath math="\oint_C (P\,dx + Q\,dy) = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA" />
        <p style={S.p}>
          Equivalentemente: integral de linha na fronteira = integral duplo do rotacional no interior.
          É um caso especial do Teorema de Stokes.
        </p>
        <div style={S.note}>
          Interpretação: o "trabalho" ao longo de um contorno fechado mede a "rotação total"
          do campo no interior — ligação directa ao rotacional.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Teoremas de Gauss e Stokes</h2>
        <p style={S.p}>
          Os dois grandes teoremas do cálculo vectorial relacionam integrais em domínios com integrais
          nas suas fronteiras — generalizações do Teorema Fundamental do Cálculo.
        </p>
        <h3 style={S.h3}>Teorema de Gauss (Divergência)</h3>
        <BlockMath math="\oiint_S F \cdot dS = \iiint_V (\nabla \cdot F)\, dV" />
        <p style={S.p}>
          O fluxo total de F através de uma superfície fechada S é igual ao integral da divergência
          de F no volume V por ela delimitado.
        </p>
        <FluxSVG />
        <h3 style={S.h3}>Teorema de Stokes</h3>
        <BlockMath math="\oint_C F \cdot dr = \iint_S (\nabla \times F) \cdot dS" />
        <p style={S.p}>
          A circulação de F ao longo da fronteira C de uma superfície S é igual ao fluxo do
          rotacional de F através de S.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Teorema</th>
              <th style={S.th}>Operador</th>
              <th style={S.th}>Fronteira → Interior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>TFC (1D)</td>
              <td style={S.td}><InlineMath math="d/dx" /></td>
              <td style={S.td}><InlineMath math="\int_a^b f'\,dx = f(b) - f(a)" /></td>
            </tr>
            <tr>
              <td style={S.td}>Green (2D)</td>
              <td style={S.td}>rotacional 2D</td>
              <td style={S.td}><InlineMath math="\oint_C = \iint_D \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}" /></td>
            </tr>
            <tr>
              <td style={S.td}>Stokes (3D surf)</td>
              <td style={S.td}><InlineMath math="\nabla \times F" /></td>
              <td style={S.td}><InlineMath math="\oint_C = \iint_S (\nabla \times F) \cdot dS" /></td>
            </tr>
            <tr>
              <td style={S.td}>Gauss (3D vol)</td>
              <td style={S.td}><InlineMath math="\nabla \cdot F" /></td>
              <td style={S.td}><InlineMath math="\oiint_S = \iiint_V (\nabla \cdot F)\, dV" /></td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Todos estes teoremas são casos especiais do Teorema de Stokes Generalizado:
          {' '}<InlineMath math="\int_M d\omega = \int_{\partial M} \omega" />, expresso em linguagem de formas diferenciais.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Mudança de Variáveis e Jacobiano</h2>
        <p style={S.p}>
          Quando se transforma um integral por uma mudança de variáveis <InlineMath math="x = f(u)" />, o Jacobiano
          da transformação mede como os volumes locais se expandem ou contraem:
        </p>
        <BlockMath math="\int_D g(x)\,dx = \int_{f^{-1}(D)} g(f(u))\,|\det J_f(u)|\,du" />
        <JacobianSVG />
        <h3 style={S.h3}>Transformações comuns</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Transformação</th>
              <th style={S.th}>Jacobiano <InlineMath math="|\det J|" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Polar: <InlineMath math="(r, \theta) \to (r\cos\theta, r\sin\theta)" /></td>
              <td style={S.td}><InlineMath math="r" /></td>
            </tr>
            <tr>
              <td style={S.td}>Cilíndrica: <InlineMath math="(r, \theta, z)" /></td>
              <td style={S.td}><InlineMath math="r" /></td>
            </tr>
            <tr>
              <td style={S.td}>Esférica: <InlineMath math="(\rho, \varphi, \theta)" /></td>
              <td style={S.td}><InlineMath math="\rho^2 \sin\varphi" /></td>
            </tr>
            <tr>
              <td style={S.td}>Linear: <InlineMath math="x = Au" /></td>
              <td style={S.td}><InlineMath math="|\det A|" /></td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Fórmula de Mudança de Densidade</h3>
        <p style={S.p}>
          Se <InlineMath math="X = f(Z)" /> e <InlineMath math="Z \sim p_Z" />, então a densidade de X é:
        </p>
        <BlockMath math="p_X(x) = p_Z(f^{-1}(x)) \cdot |\det J_{f^{-1}}(x)|" />
        <p style={S.p}>
          Em forma logarítmica: <InlineMath math="\log p_X(x) = \log p_Z(z) - \log |\det J_f(z)|" />, com <InlineMath math="z = f^{-1}(x)" />.
          Esta é a equação central dos normalizing flows.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Normalizing Flows</h2>
        <p style={S.p}>
          Normalizing flows aprendem uma bijecção invertível <InlineMath math="f: \mathcal{Z} \to \mathcal{X}" /> que transforma uma
          distribuição simples <InlineMath math="p_Z" /> (e.g., gaussiana) numa distribuição complexa <InlineMath math="p_X" />.
        </p>
        <NormalizingFlowSVG />
        <BlockMath math="\log p_X(x) = \log p_Z(f^{-1}(x)) + \log |\det J_{f^{-1}}(x)|" />
        <h3 style={S.h3}>O problema do determinante</h3>
        <p style={S.p}>
          Calcular <InlineMath math="\det(J)" /> para uma transformação geral custa <InlineMath math="O(n^3)" />. Normalizing flows contornam
          isto com arquitecturas cujo Jacobiano é triangular:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Truque</th>
              <th style={S.th}>Custo log-det</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>NICE</td>
              <td style={S.td}>additive coupling layers</td>
              <td style={S.td}><InlineMath math="O(n)" /> — det = 1</td>
            </tr>
            <tr>
              <td style={S.td}>RealNVP</td>
              <td style={S.td}>affine coupling layers</td>
              <td style={S.td}><InlineMath math="O(n)" /> — diagonal J</td>
            </tr>
            <tr>
              <td style={S.td}>Glow</td>
              <td style={S.td}>1×1 invertible conv</td>
              <td style={S.td}><InlineMath math="O(c^3)" /> por camada</td>
            </tr>
            <tr>
              <td style={S.td}>FFJORD</td>
              <td style={S.td}>Neural ODE + Hutchinson</td>
              <td style={S.td}><InlineMath math="O(n)" /> estocástico</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Coupling Layer (RealNVP)</h3>
                <div style={S.note}>
          A triangularidade do Jacobiano permite calcular o log-determinante em O(n) —
          a chave para treinar normalizing flows com máxima verossimilhança exacta.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Cálculo em Grafos</h2>
        <p style={S.p}>
          O cálculo vectorial tem análogos discretos em grafos <InlineMath math="G = (V, E)" />, substituindo derivadas
          por diferenças ao longo de arestas.
        </p>
        <GraphLaplacianSVG />
        <h3 style={S.h3}>Operadores de Grafo</h3>
        <p style={S.p}>
          Para um sinal <InlineMath math="f: V \to \mathbb{R}" /> (valor em cada nó) e um fluxo <InlineMath math="g: E \to \mathbb{R}" /> (valor em cada aresta):
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operador contínuo</th>
              <th style={S.th}>Análogo em grafo</th>
              <th style={S.th}>Definição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Gradiente <InlineMath math="\nabla f" /></td>
              <td style={S.td}>Gradiente de grafo</td>
              <td style={S.td}><InlineMath math="(\nabla_G f)(e_{ij}) = f(j) - f(i)" /></td>
            </tr>
            <tr>
              <td style={S.td}>Divergência <InlineMath math="\nabla \cdot F" /></td>
              <td style={S.td}>Divergência de grafo</td>
              <td style={S.td}><InlineMath math="(\text{div}\, g)(i) = \sum_j g(e_{ij})" /></td>
            </tr>
            <tr>
              <td style={S.td}>Laplaciano <InlineMath math="\nabla^2 f" /></td>
              <td style={S.td}>Laplaciano de grafo L</td>
              <td style={S.td}><InlineMath math="(Lf)(i) = \sum_j (f(i) - f(j))" /></td>
            </tr>
          </tbody>
        </table>
        <BlockMath math="L = D - A \qquad L_{\text{sym}} = D^{-1/2} L D^{-1/2} \qquad L_{\text{rw}} = D^{-1} L" />
        <h3 style={S.h3}>Graph Fourier Transform</h3>
        <p style={S.p}>
          Como L é simétrica positiva semi-definida, <InlineMath math="L = U \Lambda U^\top" />. Os auto-vectores U formam a
          base de Fourier do grafo: frequências baixas (auto-valor pequeno) = sinais suaves;
          frequências altas = sinais oscilatórios.
        </p>
        <h3 style={S.h3}>GNN como Convolução no Grafo</h3>
        <p style={S.p}>
          Graph Convolutional Networks (GCN) implementam uma convolução espectral aproximada:
        </p>
                <div style={S.note}>
          Message passing = aplicar o operador Laplaciano normalizado: cada nó agrega informação
          dos vizinhos, suavizando o sinal sobre o grafo (filtro passa-baixo).
        </div>
      </section>

    </div>
  );
}
