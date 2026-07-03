import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

// ─── SVG 1: Grid deformed by a linear map ────────────────────────────────────
function GridDeformSVG() {
  const w = 420, h = 240, cx = 100, cy = 120;
  // original grid lines in domain (left side)
  const origLines = [];
  for (let i = -3; i <= 3; i++) {
    origLines.push({ x1: cx + i * 20, y1: cy - 60, x2: cx + i * 20, y2: cy + 60 });
    origLines.push({ x1: cx - 60, y1: cy + i * 20, x2: cx + 60, y2: cy + i * 20 });
  }
  // A = [[1.2, 0.5],[0.3, 0.9]] applied to grid in codomain (right side)
  const a = [[1.2, 0.5], [0.3, 0.9]];
  const rcx = 310, rcy = 120;
  function applyA(x, y) { return [a[0][0] * x + a[0][1] * y, a[1][0] * x + a[1][1] * y]; }
  const txLines = [];
  for (let i = -3; i <= 3; i++) {
    const [ax1, ay1] = applyA(i * 20, -60);
    const [ax2, ay2] = applyA(i * 20, 60);
    txLines.push({ x1: rcx + ax1, y1: rcy + ay1, x2: rcx + ax2, y2: rcy + ay2 });
    const [bx1, by1] = applyA(-60, i * 20);
    const [bx2, by2] = applyA(60, i * 20);
    txLines.push({ x1: rcx + bx1, y1: rcy + by1, x2: rcx + bx2, y2: rcy + by2 });
  }
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {/* Domain */}
      <text x={cx} y={18} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Domínio</text>
      {origLines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(249,115,22,0.10)" strokeWidth="0.8" />
      ))}
      <line x1={cx - 65} y1={cy} x2={cx + 65} y2={cy} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1={cx} y1={cy - 65} x2={cx} y2={cy + 65} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="3" fill={color} />
      {/* Arrow */}
      <text x={w / 2} y={h / 2 - 8} textAnchor="middle" fontSize="12" fill={color} fontWeight="700">T(x)=Ax</text>
      <line x1={175} y1={cy} x2={245} y2={cy} stroke={color} strokeWidth="1.5" />
      <polygon points="245,117 253,120 245,123" fill={color} />
      {/* Codomain */}
      <text x={rcx} y={18} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Codomain</text>
      {txLines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(249,115,22,0.10)" strokeWidth="0.8" />
      ))}
      <line x1={rcx - 75} y1={rcy} x2={rcx + 75} y2={rcy} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1={rcx} y1={rcy - 75} x2={rcx} y2={rcy + 75} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <circle cx={rcx} cy={rcy} r="3" fill={color} />
      <text x={cx} y={h - 8} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Linhas permanecem linhas</text>
      <text x={rcx} y={h - 8} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Origem fixa • Grade deformada</text>
    </svg>
  );
}

// ─── SVG 2: Unit square under 2D transforms ──────────────────────────────────
function GeomTransformSVG() {
  const w = 440, h = 200;
  const sc = 28;
  function sq(cx, cy, m) {
    const pts = [[0,0],[1,0],[1,1],[0,1]].map(([x,y]) => [
      cx + (m[0][0]*x + m[0][1]*y)*sc,
      cy - (m[1][0]*x + m[1][1]*y)*sc,
    ]);
    return pts.map(p => p.join(',')).join(' ');
  }
  const configs = [
    { label: 'Original', cx: 55, cy: 120, m: [[1,0],[0,1]] },
    { label: 'Rotação 45°', cx: 155, cy: 120, m: [[0.707,-0.707],[0.707,0.707]] },
    { label: 'Reflexão Y', cx: 255, cy: 120, m: [[-1,0],[0,1]] },
    { label: 'Shear', cx: 360, cy: 120, m: [[1,0.6],[0,1]] },
  ];
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {configs.map((c, i) => (
        <g key={i}>
          <polygon points={sq(c.cx, c.cy, [[1,0],[0,1]])} fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" strokeDasharray="3,2" />
          <polygon points={sq(c.cx, c.cy, c.m)} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={c.cx + 14} y={c.cy + 32} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">{c.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── SVG 3: Kernel and Image mapping ─────────────────────────────────────────
function KernelImageSVG() {
  const w = 420, h = 220;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {/* Domain ellipse */}
      <ellipse cx={120} cy={110} rx={90} ry={75} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x={120} y={20} textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Domínio ℝⁿ</text>
      {/* Kernel region */}
      <ellipse cx={95} cy={115} rx={32} ry={28} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" strokeDasharray="4,2" />
      <text x={95} y={112} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">ker(T)</text>
      <text x={95} y={124} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">Ax=0</text>
      {/* Other vectors */}
      <circle cx={155} cy={85} r="3" fill={color} />
      <circle cx={170} cy={115} r="3" fill={color} />
      <circle cx={155} cy={140} r="3" fill={color} />
      {/* Arrow */}
      <text x={210} y={106} textAnchor="middle" fontSize="11" fill={color} fontWeight="700">T</text>
      <line x1={210} y1={112} x2={240} y2={112} stroke={color} strokeWidth="1.5" />
      <polygon points="240,109 248,112 240,115" fill={color} />
      {/* Codomain ellipse */}
      <ellipse cx={320} cy={110} rx={80} ry={70} fill="rgba(249,115,22,0.10)" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x={320} y={20} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Codomain ℝᵐ</text>
      {/* Image region */}
      <ellipse cx={310} cy={118} rx={45} ry={38} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x={315} y={119} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">Im(T)</text>
      <text x={315} y={132} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">col(A)</text>
      {/* ker maps to origin */}
      <line x1={127} y1={108} x2={261} y2={108} stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="3,2" />
      <circle cx={268} cy={108} r="3" fill="var(--text-secondary)" />
      <text x={268} y={100} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">0</text>
      {/* Other vectors map */}
      <line x1={155} y1={85} x2={288} y2={90} stroke={color} strokeWidth="0.8" strokeDasharray="2,2" />
      <line x1={170} y1={115} x2={315} y2={122} stroke={color} strokeWidth="0.8" strokeDasharray="2,2" />
      <line x1={155} y1={140} x2={295} y2={142} stroke={color} strokeWidth="0.8" strokeDasharray="2,2" />
      <circle cx={288} cy={90} r="2.5" fill={color} />
      <circle cx={315} cy={122} r="2.5" fill={color} />
      <circle cx={295} cy={142} r="2.5" fill={color} />
      <text x={120} y={200} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">dim ker(T) + dim Im(T) = n</text>
      <text x={320} y={200} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">nulidade + rank = n</text>
    </svg>
  );
}

// ─── SVG 4: Injective / Surjective / Bijective ───────────────────────────────
function InjectSurjectSVG() {
  const w = 440, h = 200;
  function drawMap(gx, label, dotsSrc, dotsDst, arrows, note) {
    return (
      <g key={gx}>
        <ellipse cx={gx + 32} cy={100} rx={28} ry={65} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
        <ellipse cx={gx + 108} cy={100} rx={28} ry={65} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
        {dotsSrc.map(([y], i) => <circle key={i} cx={gx + 32} cy={y} r="4" fill={color} />)}
        {dotsDst.map(([y, col], i) => <circle key={i} cx={gx + 108} cy={y} r="4" fill={col || color} />)}
        {arrows.map(([sy, dy], i) => (
          <line key={i} x1={gx + 37} y1={sy} x2={gx + 103} y2={dy} stroke={color} strokeWidth="1" markerEnd="url(#arr)" />
        ))}
        <text x={gx + 70} y={185} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">{label}</text>
        <text x={gx + 70} y={196} textAnchor="middle" fontSize="8.5" fill={color}>{note}</text>
      </g>
    );
  }
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill={color} />
        </marker>
      </defs>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {drawMap(10, 'Injetiva', [[70],[100],[130]], [[70],[100],[130]], [[70,70],[100,100],[130,130]], 'ker={0}')}
      {drawMap(155, 'Sobrejetiva', [[75],[105],[130]], [[65],[95],[130]], [[75,65],[105,95],[130,130],[105,130]], 'Im=Codomain')}
      {drawMap(300, 'Bijetiva', [[70],[100],[130]], [[70],[100],[130]], [[70,70],[100,100],[130,130]], 'Invertível')}
    </svg>
  );
}

// ─── SVG 5: Composition of transforms ────────────────────────────────────────
function CompositionSVG() {
  const w = 440, h = 270;
  const sc = 26;
  function sq(cx, cy, m) {
    const pts = [[0,0],[1,0],[1,1],[0,1]].map(([x,y]) => [
      cx + (m[0][0]*x + m[0][1]*y)*sc,
      cy - (m[1][0]*x + m[1][1]*y)*sc,
    ]);
    return pts.map(p => p.join(',')).join(' ');
  }
  const I = [[1,0],[0,1]];
  const R45 = [[0.707,-0.707],[0.707,0.707]];
  const Ref = [[-1,0],[0,1]];
  function compose(A, B) {
    return [
      [A[0][0]*B[0][0]+A[0][1]*B[1][0], A[0][0]*B[0][1]+A[0][1]*B[1][1]],
      [A[1][0]*B[0][0]+A[1][1]*B[1][0], A[1][0]*B[0][1]+A[1][1]*B[1][1]],
    ];
  }
  const RthenF = compose(Ref, R45);
  const FthenR = compose(R45, Ref);
  const row1 = [
    { cx: 55, cy: 100, m: I, label: 'Original' },
    { cx: 175, cy: 100, m: R45, label: 'Rot 45°' },
    { cx: 295, cy: 100, m: RthenF, label: 'Rot→Ref' },
  ];
  const row2 = [
    { cx: 55, cy: 210, m: I, label: '' },
    { cx: 175, cy: 210, m: Ref, label: 'Ref Y' },
    { cx: 295, cy: 210, m: FthenR, label: 'Ref→Rot' },
  ];
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      <text x={10} y={14} fontSize="9.5" fill="var(--text-secondary)">A₂A₁ depende da ordem!</text>
      {row1.map((c, i) => (
        <g key={i}>
          <polygon points={sq(c.cx, c.cy, I)} fill="none" stroke="rgba(249,115,22,0.10)" strokeWidth="0.8" strokeDasharray="3,2" />
          <polygon points={sq(c.cx, c.cy, c.m)} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.4" />
          <text x={c.cx + 14} y={c.cy + 42} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{c.label}</text>
        </g>
      ))}
      {row2.map((c, i) => (
        <g key={i}>
          <polygon points={sq(c.cx, c.cy, I)} fill="none" stroke="rgba(249,115,22,0.10)" strokeWidth="0.8" strokeDasharray="3,2" />
          <polygon points={sq(c.cx, c.cy, c.m)} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.4" />
          <text x={c.cx + 14} y={c.cy + 42} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{c.label}</text>
        </g>
      ))}
      <line x1={90} y1={96} x2={130} y2={96} stroke={color} strokeWidth="1" />
      <polygon points="130,94 136,96 130,98" fill={color} />
      <line x1={210} y1={96} x2={250} y2={96} stroke={color} strokeWidth="1" />
      <polygon points="250,94 256,96 250,98" fill={color} />
      <line x1={90} y1={206} x2={130} y2={206} stroke={color} strokeWidth="1" />
      <polygon points="130,204 136,206 130,208" fill={color} />
      <line x1={210} y1={206} x2={250} y2={206} stroke={color} strokeWidth="1" />
      <polygon points="250,204 256,206 250,208" fill={color} />
      <text x={380} y={100} textAnchor="middle" fontSize="14" fill={color} fontWeight="700">≠</text>
    </svg>
  );
}

// ─── SVG 6: Change of basis ───────────────────────────────────────────────────
function ChangeBasisSVG() {
  const w = 420, h = 220;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {/* Standard basis grid */}
      <line x1={60} y1={50} x2={60} y2={170} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={20} y1={110} x2={160} y2={110} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={60} y1={110} x2={110} y2={110} stroke="#f97316" strokeWidth="2" />
      <polygon points="110,107 118,110 110,113" fill="#f97316" />
      <line x1={60} y1={110} x2={60} y2={60} stroke="#f97316" strokeWidth="2" />
      <polygon points="57,60 60,52 63,60" fill="#f97316" />
      <text x={90} y={125} fontSize="9" fill="#f97316">e₁</text>
      <text x={40} y={85} fontSize="9" fill="#f97316">e₂</text>
      <circle cx={60} cy={110} r="3" fill={color} />
      {/* Vector v */}
      <line x1={60} y1={110} x2={120} y2={68} stroke={color} strokeWidth="2" />
      <polygon points="117,65 125,62 122,70" fill={color} />
      <text x={128} y={65} fontSize="9.5" fill={color}>v</text>
      <text x={90} y={200} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Base padrão: [3, 2]</text>
      {/* New basis */}
      <line x1={270} y1={50} x2={310} y2={170} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
      <line x1={210} y1={130} x2={380} y2={90} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
      <line x1={290} y1={110} x2={340} y2={97} stroke="#f97316" strokeWidth="2" />
      <polygon points="340,94 348,92 341,100" fill="#f97316" />
      <line x1={290} y1={110} x2={298} y2={68} stroke="#f97316" strokeWidth="2" />
      <polygon points="295,68 298,60 301,68" fill="#f97316" />
      <text x={350} y={96} fontSize="9" fill="#f97316">b₁</text>
      <text x={282} y={64} fontSize="9" fill="#f97316">b₂</text>
      <circle cx={290} cy={110} r="3" fill={color} />
      <line x1={290} y1={110} x2={350} y2={68} stroke={color} strokeWidth="2" />
      <polygon points="347,65 355,62 352,70" fill={color} />
      <text x={358} y={65} fontSize="9.5" fill={color}>v</text>
      <text x={320} y={200} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Base B: [α, β] diferentes!</text>
      <text x={210} y={14} textAnchor="middle" fontSize="10" fill={color} fontWeight="600">[T]_B = P⁻¹AP</text>
    </svg>
  );
}

// ─── SVG 7: Affine transform ──────────────────────────────────────────────────
function AffineSVG() {
  const w = 440, h = 210;
  const sc = 24;
  function sqPts(cx, cy, m, tx, ty) {
    const pts = [[0,0],[1,0],[1,1],[0,1]].map(([x,y]) => [
      cx + (m[0][0]*x + m[0][1]*y)*sc + tx,
      cy - (m[1][0]*x + m[1][1]*y)*sc - ty,
    ]);
    return pts.map(p => p.join(',')).join(' ');
  }
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      <text x={80} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Original</text>
      <polygon points={sqPts(60, 130, [[1,0],[0,1]], 0, 0)} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <circle cx={60} cy={130} r="3" fill="#f97316" />
      <text x={60} y={145} textAnchor="middle" fontSize="8" fill="#f97316">origem</text>
      {/* Arrow */}
      <text x={200} y={100} textAnchor="middle" fontSize="10" fill={color}>T(x)=Ax+b</text>
      <line x1={155} y1={108} x2={240} y2={108} stroke={color} strokeWidth="1.5" />
      <polygon points="240,105 248,108 240,111" fill={color} />
      {/* Transformed: shear + translation */}
      <text x={340} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Afim (A+translação b)</text>
      <polygon points={sqPts(270, 130, [[1,0.4],[0,1]], 30, 0)} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <circle cx={300} cy={130} r="3" fill="#f97316" />
      <text x={300} y={145} textAnchor="middle" fontSize="8" fill="#f97316">origem≠0</text>
      <text x={220} y={192} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Coordenadas homogéneas: [[A, b],[0, 1]] · [x, 1]ᵀ = [Ax+b, 1]ᵀ</text>
    </svg>
  );
}

// ─── SVG 8: Orthogonal transform — unit circle preserved ─────────────────────
function OrthogonalSVG() {
  const w = 420, h = 220;
  const cx = 105, cy = 110, r = 65;
  const rcx = 310, rcy = 110;
  const cosT = Math.cos(Math.PI / 5), sinT = Math.sin(Math.PI / 5);
  // Sample points on unit circle, apply rotation Q
  const pts = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * 2 * Math.PI;
    return [Math.cos(a), Math.sin(a)];
  });
  const srcPts = pts.map(([x, y]) => `${cx + x * r},${cy - y * r}`).join(' ');
  const dstPts = pts.map(([x, y]) => {
    const qx = cosT * x - sinT * y;
    const qy = sinT * x + cosT * y;
    return `${rcx + qx * r},${rcy - qy * r}`;
  }).join(' ');
  // Draw axes vectors
  const e1x = cx + r, e1y = cy;
  const e2x = cx, e2y = cy - r;
  const qe1x = rcx + cosT * r, qe1y = rcy - sinT * r;
  const qe2x = rcx + (-sinT) * r, qe2y = rcy - cosT * r;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      <text x={cx} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Antes (Q)</text>
      <polygon points={srcPts} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <line x1={cx - 72} y1={cy} x2={cx + 72} y2={cy} stroke="var(--text-secondary)" strokeWidth="0.8" />
      <line x1={cx} y1={cy - 72} x2={cx} y2={cy + 72} stroke="var(--text-secondary)" strokeWidth="0.8" />
      <line x1={cx} y1={cy} x2={e1x} y2={e1y} stroke="#f97316" strokeWidth="2" />
      <polygon points={`${e1x - 5},${e1y - 3} ${e1x + 3},${e1y} ${e1x - 5},${e1y + 3}`} fill="#f97316" />
      <line x1={cx} y1={cy} x2={e2x} y2={e2y} stroke="#f97316" strokeWidth="2" />
      <polygon points={`${e2x - 3},${e2y + 5} ${e2x},${e2y - 3} ${e2x + 3},${e2y + 5}`} fill="#f97316" />
      {/* Arrow */}
      <text x={w / 2} y={cy - 8} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">Q (ortogonal)</text>
      <line x1={190} y1={cy} x2={215} y2={cy} stroke={color} strokeWidth="1" />
      <polygon points="215,108 220,110 215,112" fill={color} />
      <text x={rcx} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Depois (QᵀQ=I)</text>
      <polygon points={dstPts} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <line x1={rcx - 72} y1={rcy} x2={rcx + 72} y2={rcy} stroke="var(--text-secondary)" strokeWidth="0.8" />
      <line x1={rcx} y1={rcy - 72} x2={rcx} y2={rcy + 72} stroke="var(--text-secondary)" strokeWidth="0.8" />
      <line x1={rcx} y1={rcy} x2={qe1x} y2={qe1y} stroke="#f97316" strokeWidth="2" />
      <polygon points={`${qe1x - 4},${qe1y - 4} ${qe1x + 3},${qe1y + 1} ${qe1x - 4},${qe1y + 4}`} fill="#f97316" />
      <line x1={rcx} y1={rcy} x2={qe2x} y2={qe2y} stroke="#f97316" strokeWidth="2" />
      <polygon points={`${qe2x - 3},${qe2y - 4} ${qe2x + 4},${qe2y} ${qe2x - 3},${qe2y + 4}`} fill="#f97316" />
      <text x={cx} y={h - 6} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">||x|| preservada</text>
      <text x={rcx} y={h - 6} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Ângulos preservados</text>
    </svg>
  );
}

// ─── SVG 9: Projection ────────────────────────────────────────────────────────
function ProjectionSVG() {
  const w = 440, h = 210;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {/* Projection onto a line */}
      <text x={100} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Projeção sobre linha</text>
      <line x1={20} y1={160} x2={185} y2={60} stroke={color} strokeWidth="1.8" />
      <text x={188} y={58} fontSize="9" fill={color}>a</text>
      <circle cx={130} cy={65} r="4" fill="#f97316" />
      <text x={138} y={63} fontSize="9" fill="#f97316">x</text>
      {/* foot of perpendicular */}
      <circle cx={100} cy={100} r="4" fill="#f97316" />
      <text x={88} y={98} fontSize="9" fill="#f97316">Px</text>
      <line x1={130} y1={65} x2={100} y2={100} stroke="#f97316" strokeWidth="1.2" strokeDasharray="4,2" />
      <rect x={97} y={97} width={6} height={6} fill="none" stroke="#f97316" strokeWidth="1" />
      <text x={100} y={195} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">P = aaᵀ/(aᵀa) • P²=P</text>
      {/* Projection onto plane */}
      <text x={330} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Projeção sobre plano</text>
      <ellipse cx={330} cy={135} rx={95} ry={35} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x={330} y={178} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">col(A)</text>
      <circle cx={340} cy={70} r="4" fill="#f97316" />
      <text x={348} y={68} fontSize="9" fill="#f97316">x</text>
      <circle cx={335} cy={128} r="4" fill="#f97316" />
      <text x={320} y={126} fontSize="9" fill="#f97316">Px</text>
      <line x1={340} y1={70} x2={335} y2={128} stroke="#f97316" strokeWidth="1.2" strokeDasharray="4,2" />
      <rect x={332} y={125} width={6} height={6} fill="none" stroke="#f97316" strokeWidth="1" />
      <text x={330} y={195} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">P = A(AᵀA)⁻¹Aᵀ • Pᵀ=P</text>
    </svg>
  );
}

// ─── SVG 10: Neural network layers as transforms ──────────────────────────────
function NeuralNetSVG() {
  const w = 440, h = 210;
  const layers = [
    { label: 'Input x', x: 50, nodes: [60, 95, 130, 165] },
    { label: 'Hidden h₁', x: 175, nodes: [70, 105, 140] },
    { label: 'Hidden h₂', x: 300, nodes: [80, 115, 150] },
    { label: 'Output y', x: 400, nodes: [95, 130] },
  ];
  const edges = [];
  for (let l = 0; l < layers.length - 1; l++) {
    for (const sy of layers[l].nodes) {
      for (const dy of layers[l + 1].nodes) {
        edges.push({ x1: layers[l].x + 10, y1: sy, x2: layers[l + 1].x - 10, y2: dy });
      }
    }
  }
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {edges.map((e, i) => (
        <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="rgba(249,115,22,0.10)" strokeWidth="0.9" />
      ))}
      {layers.map((layer, li) => (
        <g key={li}>
          {layer.nodes.map((ny, ni) => (
            <circle key={ni} cx={layer.x} cy={ny} r="9" fill={li === 0 ? 'rgba(249,115,22,0.7)' : li === layers.length - 1 ? 'rgba(249,115,22,0.7)' : `rgba(249,115,22,0.10)`} stroke="white" strokeWidth="1" />
          ))}
          <text x={layer.x} y={193} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{layer.label}</text>
        </g>
      ))}
      <text x={112} y={30} textAnchor="middle" fontSize="8.5" fill={color}>W₁x+b₁</text>
      <text x={237} y={30} textAnchor="middle" fontSize="8.5" fill={color}>W₂h₁+b₂</text>
      <text x={350} y={30} textAnchor="middle" fontSize="8.5" fill={color}>W₃h₂+b₃</text>
      <text x={112} y={42} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">+σ</text>
      <text x={237} y={42} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">+σ</text>
      <text x={350} y={42} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">+σ</text>
    </svg>
  );
}

// ─── SVG 11: Image warping / homography ──────────────────────────────────────
function VisionSVG() {
  const w = 440, h = 210;
  const src = [[40, 40], [160, 40], [160, 160], [40, 160]];
  // dst shifted to right half, slightly warped (perspective effect)
  const dst = [[270, 50], [400, 40], [415, 165], [260, 170]];
  const srcStr = src.map(p => p.join(',')).join(' ');
  const dstStr = dst.map(p => p.join(',')).join(' ');
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', margin: '1rem auto' }}>
      <rect width={w} height={h} fill="var(--bg-secondary)" rx="8" />
      {/* Source image */}
      <text x={100} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Imagem Fonte</text>
      <polygon points={srcStr} fill="rgba(96,165,250,0.15)" stroke="#f97316" strokeWidth="1.5" />
      {[3, 6].map(i => (
        <line key={i} x1={40} y1={40 + i * 20} x2={160} y2={40 + i * 20} stroke="#f97316" strokeWidth="0.5" strokeDasharray="3,2" />
      ))}
      {[3, 6].map(i => (
        <line key={i} x1={40 + i * 20} y1={40} x2={40 + i * 20} y2={160} stroke="#f97316" strokeWidth="0.5" strokeDasharray="3,2" />
      ))}
      {/* Arrow */}
      <text x={214} y={95} textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">Homografia H</text>
      <line x1={175} y1={103} x2={248} y2={103} stroke={color} strokeWidth="1.5" />
      <polygon points="248,100 256,103 248,106" fill={color} />
      <text x={214} y={116} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">x'=Hx (proj.)</text>
      {/* Destination image */}
      <text x={340} y={16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Imagem Destino</text>
      <polygon points={dstStr} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      {[1, 2].map(i => (
        <line key={`dh${i}`} x1={265 + i * 2} y1={50 + i * 40} x2={408 - i * 2} y2={45 + i * 40} stroke="rgba(249,115,22,0.10)" strokeWidth="0.5" strokeDasharray="3,2" />
      ))}
      {[1, 2].map(i => (
        <line key={`dv${i}`} x1={270 + i * 48} y1={50} x2={272 + i * 50} y2={167} stroke="rgba(249,115,22,0.10)" strokeWidth="0.5" strokeDasharray="3,2" />
      ))}
      <text x={220} y={200} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Convolução = transform. linear (matriz circulante) • Fourier = mudança de base para freq.</text>
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LA4() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16} /> Voltar a Álgebra Linear</Link>

      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Transformações Lineares</h1>
      <p style={S.lead}>
        Uma transformação linear é uma função entre espaços vetoriais que preserva a estrutura algébrica — adição de vetores e multiplicação por escalar. São o coração da álgebra linear aplicada e a base matemática de redes neuronais, visão computacional, processamento de sinais e muito mais.
      </p>

      {/* ── 1. Definição ─────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Definição e Propriedades Fundamentais</h2>
        <p style={S.p}>
          Uma função T: ℝⁿ → ℝᵐ é uma <strong>transformação linear</strong> se e só se satisfaz duas condições para todos os vetores u, v e todo escalar c:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Aditividade:</strong> T(u + v) = T(u) + T(v)<br />
            <strong>Homogeneidade:</strong> T(cu) = c · T(u)<br />
            <strong>Equivalente combinado:</strong> T(αu + βv) = αT(u) + βT(v)
          </p>
        </div>
        <p style={S.p}>
          Estas duas propriedades podem ser combinadas numa só: T preserva <em>combinações lineares</em>. Uma consequência imediata é que T(0) = 0 — a origem é sempre mapeada para a origem.
        </p>
        <GridDeformSVG />
        <h3 style={S.h3}>Toda Transformação Linear é uma Matriz</h3>
        <p style={S.p}>
          Este é o teorema central: qualquer transformação linear T: ℝⁿ → ℝᵐ pode ser completamente descrita por uma matriz A ∈ ℝᵐˣⁿ, de tal forma que T(x) = Ax para todo x ∈ ℝⁿ.
        </p>
        <p style={S.p}>
          A matriz A é construída colocando em cada coluna j a imagem do vetor canónico eⱼ: a coluna j de A é T(eⱼ). Isto significa que conhecer o que a transformação faz à base padrão é suficiente para determinar completamente o comportamento em todo o espaço.
        </p>
        <div style={S.note}>
          Em data science: qualquer operação que "mistura" features de forma linear (ex: PCA, projeções, pesos de uma camada linear de rede neural sem bias) é uma transformação linear com matriz correspondente.
        </div>
        <h3 style={S.h3}>Verificar se T é Linear</h3>
        <p style={S.p}>
          Para verificar a linearidade, basta verificar T(αu + βv) = αT(u) + βT(v) para vetores arbitrários, ou equivalentemente, verificar se T(0) = 0 e aditividade. Funções com termos constantes (T(x) = Ax + b com b ≠ 0) ou termos não-lineares (T(x) = ||x||) não são lineares.
        </p>
        <div style={S.code}>{`# Verificar linearidade numericamente
import numpy as np

def is_linear(T, n=5, trials=100):
    for _ in range(trials):
        u = np.random.randn(n)
        v = np.random.randn(n)
        a, b = np.random.randn(), np.random.randn()
        lhs = T(a*u + b*v)
        rhs = a*T(u) + b*T(v)
        if not np.allclose(lhs, rhs, atol=1e-10):
            return False
    return True

# T(x) = Ax é linear
A = np.random.randn(3, 5)
T_linear = lambda x: A @ x
print(is_linear(T_linear))  # True

# T(x) = Ax + b não é linear (é afim)
b = np.ones(3)
T_affine = lambda x: A @ x + b
print(is_linear(T_affine))  # False`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 2. Transformações Geométricas 2D ─────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Transformações Geométricas em 2D</h2>
        <p style={S.p}>
          As transformações lineares mais intuitivas são as geométricas em ℝ². Cada uma tem uma matriz canónica que captura toda a sua ação.
        </p>
        <GeomTransformSVG />
        <h3 style={S.h3}>Matrizes das Transformações Fundamentais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Transformação</th>
              <th style={S.th}>Matriz</th>
              <th style={S.th}>Propriedades</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Rotação por θ</td>
              <td style={S.td}>[[cos θ, −sin θ], [sin θ, cos θ]]</td>
              <td style={S.td}>det = 1, ortogonal, preserva área</td>
            </tr>
            <tr>
              <td style={S.td}>Reflexão no eixo X</td>
              <td style={S.td}>[[1, 0], [0, −1]]</td>
              <td style={S.td}>det = −1, involutória (P² = I)</td>
            </tr>
            <tr>
              <td style={S.td}>Reflexão no eixo Y</td>
              <td style={S.td}>[[−1, 0], [0, 1]]</td>
              <td style={S.td}>det = −1, involutória</td>
            </tr>
            <tr>
              <td style={S.td}>Escalonamento (sx, sy)</td>
              <td style={S.td}>[[sx, 0], [0, sy]]</td>
              <td style={S.td}>det = sx·sy, diagonal</td>
            </tr>
            <tr>
              <td style={S.td}>Shear horizontal (k)</td>
              <td style={S.td}>[[1, k], [0, 1]]</td>
              <td style={S.td}>det = 1, preserva área</td>
            </tr>
            <tr>
              <td style={S.td}>Projeção sobre X</td>
              <td style={S.td}>[[1, 0], [0, 0]]</td>
              <td style={S.td}>det = 0, singular, idempotente</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Interpretação do Determinante</h3>
        <p style={S.p}>
          O determinante de uma matriz de transformação 2D mede o <em>factor de escala de área</em>: um quadrado unitário é transformado numa figura com área |det A|. Se det A = 0, a transformação colapsa o espaço para uma dimensão menor (área zero). Se det A {'< 0'}, a orientação é invertida.
        </p>
        <div style={S.code}>{`import numpy as np

# Rotação por 45 graus
theta = np.pi / 4
R = np.array([[np.cos(theta), -np.sin(theta)],
              [np.sin(theta),  np.cos(theta)]])

# Escalonamento
S_mat = np.array([[2, 0],
                  [0, 0.5]])

# Composição: primeiro escala, depois rota
A = R @ S_mat

# Área do quadrado unitário transformado
print(f"det(R) = {np.linalg.det(R):.4f}")   # 1.0 (preserva área)
print(f"det(S) = {np.linalg.det(S_mat):.4f}")  # 1.0 (2*0.5)
print(f"det(A) = {np.linalg.det(A):.4f}")   # 1.0

# Vetor transformado
v = np.array([1, 0])
print(f"Rot(v) = {R @ v}")  # [0.707, 0.707]`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 3. Kernel e Imagem ───────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Kernel e Imagem</h2>
        <p style={S.p}>
          Para compreender uma transformação linear T: ℝⁿ → ℝᵐ, as duas estruturas mais importantes são o seu <strong>kernel</strong> (núcleo) e a sua <strong>imagem</strong>.
        </p>
        <KernelImageSVG />
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Kernel (Núcleo):</strong> ker(T) = null(A) = {'{'}x ∈ ℝⁿ : Ax = 0{'}'}<br />
            <strong>Imagem (Espaço Coluna):</strong> Im(T) = col(A) = {'{'}Ax : x ∈ ℝⁿ{'}'}<br />
            <strong>Teorema Rank-Nulidade:</strong> dim(ker T) + dim(Im T) = n
          </p>
        </div>
        <h3 style={S.h3}>Kernel — Vetores que Colapsam para Zero</h3>
        <p style={S.p}>
          O kernel de T é o conjunto de todos os vetores de entrada que são mapeados para o vetor zero. É sempre um subespaço vetorial de ℝⁿ. A sua dimensão chama-se <em>nulidade</em> da matriz. Se a nulidade é zero, a transformação é injetiva (não "perde informação").
        </p>
        <p style={S.p}>
          Para encontrar o kernel, resolve-se o sistema homogéneo Ax = 0 por eliminação de Gauss. As variáveis livres (correspondentes a colunas não-pivô) geram o kernel.
        </p>
        <h3 style={S.h3}>Imagem — O Que é Alcançável</h3>
        <p style={S.p}>
          A imagem de T é o conjunto de todos os vetores de saída possíveis — é o espaço coluna de A. A sua dimensão é o <em>rank</em> de A, denotado r. A imagem é o "alcance" da transformação: um vetor b ∈ ℝᵐ pode ser atingido (Ax = b tem solução) se e só se b ∈ Im(T).
        </p>
        <h3 style={S.h3}>Teorema Rank-Nulidade</h3>
        <p style={S.p}>
          O teorema fundamental diz que para T: ℝⁿ → ℝᵐ com matriz A:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            rank(A) + nullity(A) = n<br />
            dim(Im T) + dim(ker T) = dim(domínio)
          </p>
        </div>
        <p style={S.p}>
          Intuitivamente: o espaço de entrada ℝⁿ divide-se entre a "parte que sobrevive" (complemento do kernel, mapeada injetivamente) e a "parte que colapsa" (kernel). As duas dimensões somam n.
        </p>
        <div style={S.note}>
          Em ML: o kernel de uma matriz de pesos W numa camada linear corresponde a <em>features redundantes</em> — direções do espaço de input que não têm qualquer efeito na saída. Redução de dimensionalidade (PCA) essencialmente encontra e descarta essas direções.
        </div>
        <div style={S.code}>{`import numpy as np

A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])

# Rank (dimensão da imagem)
rank = np.linalg.matrix_rank(A)
print(f"rank(A) = {rank}")   # 2

# Nulidade = n - rank
n = A.shape[1]
nullity = n - rank
print(f"nullity(A) = {nullity}")  # 1

# Kernel: vetor no kernel (solução de Ax=0)
_, _, Vt = np.linalg.svd(A)
kernel = Vt[-nullity:, :]  # últimas linhas de Vt
print(f"ker(A) ≈ span de: {kernel}")

# Verificar A @ ker ≈ 0
print(np.allclose(A @ kernel.T, 0, atol=1e-10))  # True`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 4. Injectividade e Sobrejectividade ──────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Injectividade, Sobrejectividade e Bijectividade</h2>
        <p style={S.p}>
          Compreender se uma transformação linear é injetiva ou sobrejetiva tem implicações directas na existência e unicidade de soluções de sistemas lineares.
        </p>
        <InjectSurjectSVG />
        <h3 style={S.h3}>Injectividade — Sem Colisões</h3>
        <p style={S.p}>
          T é <strong>injetiva</strong> (one-to-one) se vetores distintos têm imagens distintas: T(u) = T(v) ⟹ u = v. Para transformações lineares, isto equivale a ker(T) = {'{'}0{'}'}, ou seja, a única solução de Ax = 0 é x = 0.
        </p>
        <p style={S.p}>
          Em termos de rank: T: ℝⁿ → ℝᵐ é injetiva se e só se rank(A) = n (todas as colunas são linearmente independentes). Requer n ≤ m — não pode haver "mais entradas que saídas".
        </p>
        <h3 style={S.h3}>Sobrejectividade — Cobre Tudo</h3>
        <p style={S.p}>
          T é <strong>sobrejetiva</strong> (onto) se Im(T) = ℝᵐ, ou seja, para todo b ∈ ℝᵐ existe pelo menos um x com T(x) = b. Equivale a rank(A) = m (todas as linhas são linearmente independentes). Requer m ≤ n.
        </p>
        <h3 style={S.h3}>Bijectividade e Invertibilidade</h3>
        <p style={S.p}>
          T é <strong>bijetiva</strong> se for simultaneamente injetiva e sobrejetiva — cada elemento do codomain tem exatamente uma pré-imagem. Para transformações lineares T: ℝⁿ → ℝⁿ, isto equivale a det(A) ≠ 0, e nesse caso T é invertível com T⁻¹(y) = A⁻¹y.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Condição de Rank</th>
              <th style={S.th}>Sistemas Lineares</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Injetiva</td>
              <td style={S.td}>rank(A) = n</td>
              <td style={S.td}>Ax = b tem no máximo uma solução</td>
            </tr>
            <tr>
              <td style={S.td}>Sobrejetiva</td>
              <td style={S.td}>rank(A) = m</td>
              <td style={S.td}>Ax = b tem sempre solução</td>
            </tr>
            <tr>
              <td style={S.td}>Bijetiva</td>
              <td style={S.td}>rank(A) = n = m</td>
              <td style={S.td}>Ax = b tem exatamente uma solução</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Em regressão linear: se a matriz de design X ∈ ℝᵐˣⁿ tem rank n (colunas independentes), a transformação Xβ é injetiva e a solução OLS é única. Se houver multicolinearidade (rank {'<'} n), a solução não é única — precisamos de regularização.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── 5. Composição ────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Composição de Transformações</h2>
        <p style={S.p}>
          Aplicar uma transformação seguida de outra — composição — é a operação fundamental que liga transformações lineares à multiplicação de matrizes.
        </p>
        <CompositionSVG />
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Se T₁(x) = A₁x e T₂(x) = A₂x, então (T₂ ∘ T₁)(x) = T₂(T₁(x)) = A₂(A₁x) = (A₂A₁)x<br />
            A composição corresponde à <strong>multiplicação de matrizes</strong> (na ordem inversa da composição).
          </p>
        </div>
        <h3 style={S.h3}>A Ordem Importa</h3>
        <p style={S.p}>
          A composição de transformações não é comutativa em geral. "Rodar depois de reflectir" é diferente de "reflectir depois de rodar". Matematicamente: A₂A₁ ≠ A₁A₂ em geral. Este facto é crucial em robótica (sequência de rotações), gráficos 3D e deep learning (ordem das camadas).
        </p>
        <h3 style={S.h3}>Propriedades da Composição</h3>
        <p style={S.p}>
          A composição de transformações lineares é associativa: T₃ ∘ (T₂ ∘ T₁) = (T₃ ∘ T₂) ∘ T₁, reflectindo a associatividade da multiplicação de matrizes. Além disso, a composição de transformações invertíveis é invertível: (T₂ ∘ T₁)⁻¹ = T₁⁻¹ ∘ T₂⁻¹, equivalente a (A₂A₁)⁻¹ = A₁⁻¹A₂⁻¹.
        </p>
        <div style={S.code}>{`import numpy as np

theta = np.pi / 4
R = np.array([[np.cos(theta), -np.sin(theta)],
              [np.sin(theta),  np.cos(theta)]])
Ref = np.array([[-1, 0], [0, 1]])  # Reflexão no eixo Y

# Rotação depois de reflexão
R_then_Ref = Ref @ R
# Reflexão depois de rotação
Ref_then_R = R @ Ref

print("R_then_Ref:")
print(np.round(R_then_Ref, 3))
print("Ref_then_R:")
print(np.round(Ref_then_R, 3))
print("Iguais?", np.allclose(R_then_Ref, Ref_then_R))  # False

# Verificar associatividade
S_mat = np.array([[2, 0], [0, 0.5]])
lhs = (Ref @ R) @ S_mat
rhs = Ref @ (R @ S_mat)
print("Associatividade:", np.allclose(lhs, rhs))  # True`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 6. Mudança de Base ───────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Mudança de Base e Diagonalização</h2>
        <p style={S.p}>
          As coordenadas de um vetor dependem da base escolhida. A mesma transformação linear pode ter representações matriciais muito diferentes em bases diferentes — e escolher a base certa simplifica enormemente os cálculos.
        </p>
        <ChangeBasisSVG />
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Se B = {'{'}b₁, ..., bₙ{'}'} é uma base e P = [b₁ | ... | bₙ] é a matriz de mudança de base,<br />
            então a matriz de T na base B é: [T]_B = P⁻¹AP
          </p>
        </div>
        <h3 style={S.h3}>Matrizes Similares</h3>
        <p style={S.p}>
          Duas matrizes A e B são <em>similares</em> se existe uma matriz invertível P tal que B = P⁻¹AP. Matrizes similares representam a mesma transformação linear em bases diferentes. Partilham o mesmo determinante, traço, valores próprios e rank.
        </p>
        <h3 style={S.h3}>Diagonalização — A Base Ideal</h3>
        <p style={S.p}>
          A melhor base para uma transformação é a base dos seus <strong>vetores próprios</strong> (eigenvectors). Nessa base, a matriz da transformação torna-se diagonal: [T]_B = Λ = diag(λ₁, ..., λₙ). Isto significa que a transformação actua de forma independente em cada direcção própria — apenas escala.
        </p>
        <p style={S.p}>
          A = PΛP⁻¹ onde P = [v₁ | ... | vₙ] (colunas são eigenvectors) e Λ = diag(λ₁, ..., λₙ). Isto permite calcular Aᵏ = PΛᵏP⁻¹ eficientemente.
        </p>
        <div style={S.note}>
          PCA é exactamente uma mudança de base para a base dos vetores próprios da matriz de covariância — a base onde a transformação (covariância) fica diagonal, revelando as direcções de máxima variância.
        </div>
        <div style={S.code}>{`import numpy as np

A = np.array([[4, 1],
              [2, 3]])

# Diagonalização: A = P Lambda P^{-1}
eigenvalues, P = np.linalg.eig(A)
Lambda = np.diag(eigenvalues)
P_inv = np.linalg.inv(P)

# Verificar
A_reconstructed = P @ Lambda @ P_inv
print(np.allclose(A, A_reconstructed))  # True

# Potência eficiente: A^10
Lambda_10 = np.diag(eigenvalues**10)
A_10 = P @ Lambda_10 @ P_inv
print(np.round(A_10))

# Mudança de base: coordenadas em base P
v = np.array([3, 2])
v_in_B = P_inv @ v  # coordenadas na base de eigenvectors
print(f"v em base B: {v_in_B}")`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 7. Transformações Afins ──────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Transformações Afins</h2>
        <p style={S.p}>
          Uma <strong>transformação afim</strong> tem a forma T(x) = Ax + b, onde b ≠ 0. <em>Não é linear</em> porque T(0) = b ≠ 0 — a origem não é preservada. Mas é "linear a menos de uma translação".
        </p>
        <AffineSVG />
        <h3 style={S.h3}>Coordenadas Homogéneas</h3>
        <p style={S.p}>
          O truque elegante para trabalhar com transformações afins como se fossem lineares é usar <strong>coordenadas homogéneas</strong>: representar x ∈ ℝⁿ como [x, 1]ᵀ ∈ ℝⁿ⁺¹. Então a transformação afim torna-se uma transformação linear numa dimensão superior:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0, fontFamily: 'monospace' }}>
            [[A, b], [0ᵀ, 1]] · [x, 1]ᵀ = [Ax + b, 1]ᵀ
          </p>
        </div>
        <p style={S.p}>
          Isto permite compor transformações afins por simples multiplicação de matrizes (n+1)×(n+1), o que é a base dos pipelines de transformação em gráficos 3D e robótica.
        </p>
        <h3 style={S.h3}>Camadas de Redes Neuronais são Afins</h3>
        <p style={S.p}>
          A operação fundamental de uma camada densa de rede neural é y = Wx + b — exatamente uma transformação afim, com W ∈ ℝᵐˣⁿ e b ∈ ℝᵐ. As funções de activação (ReLU, sigmoid, tanh) são não-lineares e aplicadas elemento a elemento depois da parte afim.
        </p>
        <div style={S.note}>
          Sem funções de activação não-lineares, uma composição arbitrária de camadas afins seria ainda uma transformação afim — não mais expressiva que uma única camada. A não-linearidade é o que permite às redes profundas aproximar funções arbitrárias.
        </div>
        <div style={S.code}>{`import numpy as np

# Transformação afim T(x) = Ax + b
A = np.array([[2, -1],
              [1,  3]])
b = np.array([1, -2])

def T_affine(x):
    return A @ x + b

# Em coordenadas homogéneas
A_hom = np.block([[A, b.reshape(-1, 1)],
                  [np.zeros((1, 2)), np.ones((1, 1))]])

def T_hom(x):
    x_hom = np.append(x, 1)
    return (A_hom @ x_hom)[:-1]

x = np.array([3, 1])
print(T_affine(x))   # [6, 4]
print(T_hom(x))      # [6, 4]

# Composição de afins via homogéneas
B = np.array([[0, -1], [1, 0]])
c = np.array([2, 0])
B_hom = np.block([[B, c.reshape(-1, 1)],
                  [np.zeros((1, 2)), np.ones((1, 1))]])

# T2 ∘ T1 = B_hom @ A_hom
composed = B_hom @ A_hom
print("Composição (homogénea):", composed)`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 8. Transformações Ortogonais ─────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Transformações Ortogonais</h2>
        <p style={S.p}>
          Uma transformação linear Q: ℝⁿ → ℝⁿ é <strong>ortogonal</strong> se preserva o produto interno — equivalentemente, preserva comprimentos e ângulos. A sua matriz satisfaz QᵀQ = I (logo Q⁻¹ = Qᵀ).
        </p>
        <OrthogonalSVG />
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            QᵀQ = I ⟺ as colunas de Q formam uma base ortonormal<br />
            ||Qx|| = ||x|| para todo x (isometria)<br />
            det(Q) = ±1 : +1 para rotações, −1 para reflexões
          </p>
        </div>
        <h3 style={S.h3}>Propriedades Computacionais</h3>
        <p style={S.p}>
          As transformações ortogonais são numericamente estáveis — não amplificam nem reduzem o tamanho dos vetores. A inversão é gratuita: Q⁻¹ = Qᵀ. Os seus valores próprios têm módulo 1 (vivem no círculo unitário complexo).
        </p>
        <h3 style={S.h3}>Decomposição QR</h3>
        <p style={S.p}>
          Qualquer matriz A ∈ ℝᵐˣⁿ (com m ≥ n) pode ser decomposta como A = QR, onde Q ∈ ℝᵐˣⁿ tem colunas ortonormais (QᵀQ = I) e R ∈ ℝⁿˣⁿ é triangular superior. Esta decomposição é a base para resolver sistemas de equações normais de forma numericamente estável e para o algoritmo QR de cálculo de valores próprios.
        </p>
        <h3 style={S.h3}>Projectores Ortogonais</h3>
        <p style={S.p}>
          Se Q tem colunas ortonormais que formam uma base para um subespaço S, então P = QQᵀ é o projector ortogonal sobre S. Como Qᵀ extrai coordenadas na base ortonormal e Q reconstrói, o produto QQᵀ projecta ortogonalmente sobre o espaço coluna de Q.
        </p>
        <div style={S.code}>{`import numpy as np

# QR decomposition
A = np.random.randn(5, 3)
Q, R = np.linalg.qr(A)

print("QᵀQ ≈ I:", np.allclose(Q.T @ Q, np.eye(3)))  # True
print("A = QR:", np.allclose(A, Q @ R))              # True

# Projetor ortogonal sobre col(A)
P = Q @ Q.T
print("P² = P:", np.allclose(P @ P, P))   # True (idempotente)
print("Pᵀ = P:", np.allclose(P.T, P))     # True (simétrico)

# Transformação ortogonal preserva norma
theta = np.pi / 3
Q_rot = np.array([[np.cos(theta), -np.sin(theta)],
                  [np.sin(theta),  np.cos(theta)]])
v = np.array([3, 4])
print(f"||v|| = {np.linalg.norm(v)}")      # 5.0
print(f"||Qv|| = {np.linalg.norm(Q_rot @ v)}")  # 5.0`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 9. Projecções como Transformações ────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Projecções como Transformações Lineares</h2>
        <p style={S.p}>
          As projecções são transformações lineares com a propriedade especial de que aplicá-las duas vezes dá o mesmo resultado que aplicá-las uma vez — <em>idempotência</em>.
        </p>
        <ProjectionSVG />
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            P é um projector se e só se P² = P (idempotente)<br />
            P é um projector ortogonal se adicionalmente Pᵀ = P (simétrico)<br />
            Projecção sobre col(A): P = A(AᵀA)⁻¹Aᵀ
          </p>
        </div>
        <h3 style={S.h3}>Geometria da Projecção</h3>
        <p style={S.p}>
          A projecção ortogonal de x sobre um subespaço S encontra o ponto Px em S mais próximo de x. O erro e = x − Px é ortogonal a S (e ⊥ col(A)), o que é a condição de optimalidade dos mínimos quadrados.
        </p>
        <h3 style={S.h3}>Decomposição Ortogonal</h3>
        <p style={S.p}>
          Qualquer vetor x ∈ ℝⁿ pode ser decomposto unicamente em x = Px + (I − P)x, onde Px ∈ S e (I − P)x ∈ S^⊥ (complemento ortogonal). Tanto P como I − P são projectores ortogonais complementares.
        </p>
        <h3 style={S.h3}>Projecção e Mínimos Quadrados</h3>
        <p style={S.p}>
          A solução de mínimos quadrados para Ax = b é x̂ = (AᵀA)⁻¹Aᵀb, e a melhor aproximação de b no espaço coluna de A é ŷ = Ax̂ = A(AᵀA)⁻¹Aᵀb = Pb. O residual b − ŷ é ortogonal a todas as colunas de A, razão pela qual Aᵀ(b − Ax̂) = 0 (equações normais).
        </p>
        <div style={S.note}>
          Em PCA: projectar dados sobre os primeiros k vetores próprios da covariância é uma projecção ortogonal sobre o subespaço de máxima variância. O erro de reconstrução (variância perdida) é ortogonal a esse subespaço.
        </div>
        <div style={S.code}>{`import numpy as np

# Projecção sobre um vetor a
a = np.array([1, 2, 2])
a = a / np.linalg.norm(a)  # normalizar

P_line = np.outer(a, a)  # aaᵀ (projeção sobre a linha)
x = np.array([3, 1, 4])
proj = P_line @ x
print(f"Projecção de x sobre a: {proj}")
print(f"É idempotente: {np.allclose(P_line @ P_line, P_line)}")

# Projecção sobre subespaço (2D no R3)
A = np.array([[1, 0],
              [0, 1],
              [0, 0]])  # plano xy

P_plane = A @ np.linalg.inv(A.T @ A) @ A.T
x3 = np.array([2, 3, 5])
print(f"Projecção no plano xy: {P_plane @ x3}")  # [2, 3, 0]
print(f"P² = P: {np.allclose(P_plane @ P_plane, P_plane)}")
print(f"Pᵀ = P: {np.allclose(P_plane.T, P_plane)}")`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 10. Redes Neuronais ───────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Transformações em Redes Neuronais</h2>
        <p style={S.p}>
          As redes neuronais profundas são composições alternadas de transformações afins (camadas lineares com bias) e funções de activação não-lineares aplicadas elemento a elemento. A perspectiva de álgebra linear ilumina porque a profundidade importa e o que cada camada faz geometricamente.
        </p>
        <NeuralNetSVG />
        <h3 style={S.h3}>Cada Camada como Transformação Afim</h3>
        <p style={S.p}>
          Uma camada densa transforma o input x ∈ ℝⁿ em h ∈ ℝᵐ por h = σ(Wx + b), onde W ∈ ℝᵐˣⁿ é a matriz de pesos, b ∈ ℝᵐ é o bias, e σ é a activação. A parte Wx + b é afim; σ introduz a não-linearidade essencial.
        </p>
        <p style={S.p}>
          Geometricamente, a parte afim faz: rotação/shear (pelos vetores próprios de W), escalonamento (pelos valores singulares de W), e translação (pelo bias b). A activação "dobra" o espaço, criando fronteiras de decisão não-lineares.
        </p>
        <h3 style={S.h3}>Profundidade e Composição</h3>
        <p style={S.p}>
          Uma rede com L camadas computa h_L = σ_L(W_L · σ_(L-1)(... σ₁(W₁x + b₁) ...) + b_L). Esta composição profunda permite representar funções arbitrariamente complexas. A retropropagação calcula gradientes usando a regra da cadeia — multiplicação de Jacobianos (matrizes de derivadas parciais), que são exactamente as matrizes das transformações lineares das camadas.
        </p>
        <h3 style={S.h3}>Atenção como Transformação</h3>
        <p style={S.p}>
          O mecanismo de atenção (Transformers) usa transformações lineares para projectar inputs em espaços de queries Q, keys K e values V:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0, fontFamily: 'monospace' }}>
            Attention(Q, K, V) = softmax(QKᵀ / √d) · V
          </p>
        </div>
        <p style={S.p}>
          Onde Q = XW_Q, K = XW_K, V = XW_V são transformações lineares do input X. O produto QKᵀ mede similaridade entre tokens (produto interno no espaço de queries/keys), normalizado por √d (dimensão) para estabilidade numérica. O softmax cria pesos de atenção e V é agregado com esses pesos — uma combinação convexa das linhas de V, ou seja, mais uma transformação linear (ponderada).
        </p>
        <div style={S.note}>
          A cabeça de atenção múltipla (multi-head attention) aplica o mecanismo de atenção em paralelo h vezes, cada um com projectores diferentes W_Q^i, W_K^i, W_V^i, depois concatena e projecta: é uma riquíssima composição de transformações lineares.
        </div>
        <div style={S.code}>{`import numpy as np

def softmax(x, axis=-1):
    e = np.exp(x - x.max(axis=axis, keepdims=True))
    return e / e.sum(axis=axis, keepdims=True)

def attention(Q, K, V):
    d = Q.shape[-1]
    scores = Q @ K.T / np.sqrt(d)
    weights = softmax(scores)
    return weights @ V

# Exemplo: 4 tokens, dimensão 8
np.random.seed(42)
X = np.random.randn(4, 8)
W_Q = np.random.randn(8, 4)
W_K = np.random.randn(8, 4)
W_V = np.random.randn(8, 4)

Q = X @ W_Q  # (4, 4) — projecção linear
K = X @ W_K  # (4, 4)
V = X @ W_V  # (4, 4)

out = attention(Q, K, V)
print("Shape output:", out.shape)  # (4, 4)

# Backward: gradiente flui por multiplicações de matrizes
# dL/dW_Q = Xᵀ · dL/dQ (transformação transposta!)`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 11. Visão Computacional ──────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Transformações em Visão Computacional</h2>
        <p style={S.p}>
          Visão computacional está saturada de transformações lineares: homografias para rectificação de imagens, registos afins, convolução como multiplicação por uma matriz circulante, e a Transformada de Fourier como uma mudança de base espectral.
        </p>
        <VisionSVG />
        <h3 style={S.h3}>Homografia — Transformação Projectiva</h3>
        <p style={S.p}>
          Uma homografia H ∈ ℝ³ˣ³ mapeia pontos de uma imagem para outra em coordenadas homogéneas: [x', y', w']ᵀ = H [x, y, 1]ᵀ, com x'_img = x'/w', y'_img = y'/w'. É a transformação mais geral que preserva linhas rectas — cobre rotação, escalonamento, shear, translação e perspectiva. Tem 8 graus de liberdade (a escala global é livre).
        </p>
        <h3 style={S.h3}>Registo Afim de Imagens</h3>
        <p style={S.p}>
          Em alinhamento de imagens médicas ou de satélite, usa-se uma transformação afim T(x) = Ax + b (6 parâmetros em 2D) para alinhar uma imagem de referência com uma imagem alvo. Os parâmetros são estimados minimizando a diferença de intensidade — um problema de optimização onde as transformações são afins.
        </p>
        <h3 style={S.h3}>Convolução como Transformação Linear</h3>
        <p style={S.p}>
          A convolução discreta 1D com um filtro de comprimento k pode ser escrita como multiplicação por uma <strong>matriz de Toeplitz</strong> (ou circulante no caso periódico). Para um sinal de comprimento n e filtro de comprimento k, a matriz tem dimensão (n−k+1) × n com o filtro deslocado em cada linha.
        </p>
        <p style={S.p}>
          Redes convolucionais (CNNs) exploram a estrutura desta matriz: partilha de pesos (o mesmo filtro em cada posição) e esparsidade (cada saída depende apenas de k entradas). É uma transformação linear altamente estruturada.
        </p>
        <h3 style={S.h3}>Transformada de Fourier — Mudança de Base Espectral</h3>
        <p style={S.p}>
          A Transformada Discreta de Fourier (DFT) é uma transformação linear x → Fx onde F ∈ ℂⁿˣⁿ é a <strong>matriz de Fourier</strong> com F[j,k] = e^{'{'}−2πijk/n{'}'} / √n. As colunas de F formam uma base ortonormal de funções sinusoidais (senóides complexas) — a DFT é uma mudança de base ortogonal para a base de frequências.
        </p>
        <p style={S.p}>
          F é unitária (F*F = I onde F* é a conjugada transposta), preservando normas no sentido complexo. O algoritmo FFT computa Fx em O(n log n) em vez de O(n²), explorando a estrutura recursiva de F.
        </p>
        <div style={S.code}>{`import numpy as np

# Convolução como multiplicação de matriz de Toeplitz
def conv_matrix(h, n):
    """Constrói matriz de convolução para filtro h e sinal de tamanho n."""
    k = len(h)
    m = n - k + 1
    T = np.zeros((m, n))
    for i in range(m):
        T[i, i:i+k] = h
    return T

h = np.array([1, -2, 1])  # filtro de segunda derivada
x = np.array([1, 3, 6, 10, 15, 21, 28.0])

T = conv_matrix(h, len(x))
y_matrix = T @ x
y_conv = np.convolve(x, h, mode='valid')
print(np.allclose(y_matrix, y_conv))  # True

# DFT como transformação linear
n = 8
F = np.fft.fft(np.eye(n)) / np.sqrt(n)  # matriz de Fourier
x_sig = np.array([1, 2, 3, 4, 4, 3, 2, 1.0])
X_fft = np.fft.fft(x_sig)
X_mat = F @ x_sig * np.sqrt(n)
print(np.allclose(X_fft, X_mat))  # True

# Homografia: aplicar a um ponto
H = np.array([[1.2, 0.3, 10],
              [0.1, 1.1,  5],
              [0.0005, 0.0003, 1]])
p_hom = np.array([100, 80, 1.0])
p_dst = H @ p_hom
p_dst_2d = p_dst[:2] / p_dst[2]
print(f"Ponto transformado: {np.round(p_dst_2d)}")`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── 12. Síntese ──────────────────────────────────────────────────── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          Todas as transformações estudadas neste módulo são casos especiais ou generalizações uma das outras. A tabela abaixo organiza a taxonomia completa.
        </p>
        <h3 style={S.h3}>Tabela Comparativa</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Forma Matricial</th>
              <th style={S.th}>Propriedades-Chave</th>
              <th style={S.th}>Aplicação ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Linear</td>
              <td style={S.td}>T(x) = Ax</td>
              <td style={S.td}>T(0)=0; T(αu+βv)=αT(u)+βT(v)</td>
              <td style={S.td}>Camada linear, PCA, embeddings</td>
            </tr>
            <tr>
              <td style={S.td}>Afim</td>
              <td style={S.td}>T(x) = Ax + b</td>
              <td style={S.td}>Linear + translação; T(0)=b</td>
              <td style={S.td}>Camada densa (pré-activação)</td>
            </tr>
            <tr>
              <td style={S.td}>Ortogonal</td>
              <td style={S.td}>QᵀQ = I</td>
              <td style={S.td}>Preserva norma e ângulos; det=±1</td>
              <td style={S.td}>QR, Householder, rotações de features</td>
            </tr>
            <tr>
              <td style={S.td}>Projecção</td>
              <td style={S.td}>P² = P (Pᵀ=P se ortogonal)</td>
              <td style={S.td}>Idempotente; dim↓</td>
              <td style={S.td}>PCA, regressão OLS, atenção</td>
            </tr>
            <tr>
              <td style={S.td}>Diagonal</td>
              <td style={S.td}>D = diag(d₁,...,dₙ)</td>
              <td style={S.td}>Escala eixos independentemente</td>
              <td style={S.td}>Normalização, SVD (Σ), eigenbasis</td>
            </tr>
            <tr>
              <td style={S.td}>Projectiva</td>
              <td style={S.td}>H em coords. homogéneas</td>
              <td style={S.td}>Preserva linhas; não preserva razões</td>
              <td style={S.td}>Rectificação de imagens, homografia</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Regras de Composição</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>T₁</th>
              <th style={S.th}>T₂</th>
              <th style={S.th}>T₂ ∘ T₁</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Linear</td>
              <td style={S.td}>Linear</td>
              <td style={S.td}>Linear (A₂A₁)</td>
            </tr>
            <tr>
              <td style={S.td}>Afim</td>
              <td style={S.td}>Afim</td>
              <td style={S.td}>Afim (A₂A₁x + A₂b₁ + b₂)</td>
            </tr>
            <tr>
              <td style={S.td}>Ortogonal</td>
              <td style={S.td}>Ortogonal</td>
              <td style={S.td}>Ortogonal (Q₂Q₁)</td>
            </tr>
            <tr>
              <td style={S.td}>Projecção</td>
              <td style={S.td}>Projecção</td>
              <td style={S.td}>Só projecção se P₁P₂ = P₂P₁</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Exemplos NumPy — Referência Rápida</h3>
        <div style={S.code}>{`import numpy as np

# ── Transformações Geométricas ──────────────────────────────────────
theta = np.pi / 6
R = np.array([[np.cos(theta), -np.sin(theta)],
              [np.sin(theta),  np.cos(theta)]])  # Rotação

# ── Kernel e Imagem ─────────────────────────────────────────────────
A = np.random.randn(4, 6)
rank = np.linalg.matrix_rank(A)
nullity = A.shape[1] - rank
_, S_vals, Vt = np.linalg.svd(A)
kernel_basis = Vt[rank:]  # kernel: últimas n-r linhas de Vt
image_basis = Vt[:rank]   # aprox. col(A) via SVD

# ── Decomposição QR ─────────────────────────────────────────────────
Q, R_mat = np.linalg.qr(A.T)  # A.T para m>=n
print("QᵀQ=I:", np.allclose(Q.T @ Q, np.eye(Q.shape[1])))

# ── Projecção Ortogonal ─────────────────────────────────────────────
A_sub = A[:, :2]  # subespaço 2D
P = A_sub @ np.linalg.pinv(A_sub.T @ A_sub) @ A_sub.T
print("P²=P:", np.allclose(P @ P, P))

# ── Mudança de Base / Diagonalização ───────────────────────────────
B = np.array([[3, 1], [0, 2]])
vals, vecs = np.linalg.eig(B)
Lambda = np.diag(vals)
print("B = PΛP⁻¹:", np.allclose(B, vecs @ Lambda @ np.linalg.inv(vecs)))

# ── Transformação Afim em Coordenadas Homogéneas ───────────────────
def make_hom(A_mat, b_vec):
    n = A_mat.shape[0]
    H = np.eye(n + 1)
    H[:n, :n] = A_mat
    H[:n, n] = b_vec
    return H

A_aff = np.array([[0.8, -0.2], [0.3, 0.9]])
b_aff = np.array([5.0, -3.0])
H_aff = make_hom(A_aff, b_aff)
x_hom = np.array([2.0, 1.0, 1.0])
result = (H_aff @ x_hom)[:2]
expected = A_aff @ np.array([2, 1]) + b_aff
print("Afim homogénea:", np.allclose(result, expected))  # True`}</div>

        <h3 style={S.h3}>Ligações Conceptuais</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Transformações → Sistemas Lineares:</strong> Ax = b tem solução ⟺ b ∈ Im(T). Solução única ⟺ T injetiva ⟺ ker(T) = {'{'}0{'}'}.</p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Transformações → Decomposições:</strong> SVD = U · Σ · Vᵀ decompõe T em: mudança de base no domínio (Vᵀ), escalonamento (Σ), mudança de base no codomain (U).</p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Transformações → Optimização:</strong> Mínimos quadrados min ||Ax − b||² ⟺ projectar b sobre col(A).</p>
          <p style={{ ...S.p, marginBottom: 0 }}><strong>Transformações → Deep Learning:</strong> Forward pass = composição de afins e não-linearidades. Backward pass = composição das transpostas (regra da cadeia como produto de Jacobianos).</p>
        </div>
      </section>
    </div>
  );
}
