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
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem', fontFamily: 'monospace', fontSize: '1rem', color: 'var(--text-primary)' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1rem', margin: '1.5rem 0', display: 'flex', justifyContent: 'center' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  li: { marginBottom: '0.35rem' },
};

/* ─── SVG 1: Riemann rectangles ─── */
function RiemannSVG() {
  const W = 540, H = 220;
  const pad = { l: 40, r: 20, t: 20, b: 40 };
  const w = W - pad.l - pad.r;
  const h = H - pad.t - pad.b;
  const a = 0.3, b = 2.8;
  const f = x => 0.5 * x * x - 0.1 * x + 0.6;
  const xScale = x => pad.l + ((x - 0) / 3) * w;
  const yScale = y => pad.t + h - (y / 5) * h;
  const n = 6;
  const dx = (b - a) / n;

  const rects = [];
  for (let i = 0; i < n; i++) {
    const xL = a + i * dx;
    const xM = xL + dx / 2;
    const yM = f(xM);
    const rx = xScale(xL);
    const rw = xScale(xL + dx) - xScale(xL);
    const ry = yScale(yM);
    const rh = yScale(0) - yScale(yM);
    rects.push({ rx, ry, rw, rh });
  }

  const curvePts = [];
  for (let i = 0; i <= 60; i++) {
    const x = i / 60 * 3;
    curvePts.push(`${xScale(x)},${yScale(f(x))}`);
  }
  const curveD = 'M ' + curvePts.join(' L ');

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {rects.map((r, i) => (
        <rect key={i} x={r.rx} y={r.ry} width={r.rw} height={r.rh}
          fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth="1" />
      ))}
      <path d={curveD} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad.l} y1={yScale(0)} x2={pad.l + w} y2={yScale(0)} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + h} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x={xScale(a)} y={yScale(0) + 18} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">a</text>
      <text x={xScale(b)} y={yScale(0) + 18} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">b</text>
      <text x={xScale(1.5)} y={yScale(1.8)} textAnchor="middle" fontSize="11" fill={color} fontWeight="700">f(x)</text>
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Soma de Riemann com n = 6 retângulos (ponto médio)</text>
    </svg>
  );
}

/* ─── SVG 2: Fundamental Theorem ─── */
function FTCSvg() {
  const W = 540, H = 200;
  const cx = W / 2;
  const cy = H / 2;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <rect x={30} y={60} width={180} height={80} rx={10} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x={120} y={97} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Diferenciação</text>
      <text x={120} y={116} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">d/dx F(x) = f(x)</text>

      <rect x={330} y={60} width={180} height={80} rx={10} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x={420} y={97} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Integração</text>
      <text x={420} y={116} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">∫f(x)dx = F(b)−F(a)</text>

      <path d="M 210 90 Q 270 50 330 90" fill="none" stroke={color} strokeWidth="2" markerEnd="url(#arr1)" />
      <path d="M 330 110 Q 270 150 210 110" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr2)" />
      <text x={270} y={58} textAnchor="middle" fontSize="11" fill={color}>inversa</text>
      <text x={270} y={148} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">antiderivada</text>

      <defs>
        <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x={cx} y={H - 5} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Teorema Fundamental: diferenciação e integração são operações inversas</text>
    </svg>
  );
}

/* ─── SVG 3: PDF and CDF ─── */
function PdfCdfSvg() {
  const W = 540, H = 240;
  const pad = { l: 50, r: 20, t: 20, b: 40 };
  const w = W - pad.l - pad.r;
  const h = H - pad.t - pad.b;
  const mu = 0, sigma = 1;
  const xmin = -3.5, xmax = 3.5;
  const normalPDF = x => Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
  const xScale = x => pad.l + ((x - xmin) / (xmax - xmin)) * w;
  const yScalePDF = y => pad.t + h - (y / 0.45) * h;

  const pdfPts = [];
  for (let i = 0; i <= 100; i++) {
    const x = xmin + (i / 100) * (xmax - xmin);
    pdfPts.push(`${xScale(x)},${yScalePDF(normalPDF(x))}`);
  }
  const pdfD = 'M ' + pdfPts.join(' L ');

  const shadePts = [];
  const xa = -1, xb = 1;
  shadePts.push(`${xScale(xa)},${yScalePDF(0)}`);
  for (let i = 0; i <= 40; i++) {
    const x = xa + (i / 40) * (xb - xa);
    shadePts.push(`${xScale(x)},${yScalePDF(normalPDF(x))}`);
  }
  shadePts.push(`${xScale(xb)},${yScalePDF(0)}`);
  const shadeD = 'M ' + shadePts.join(' L ') + ' Z';

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <path d={shadeD} fill="rgba(249,115,22,0.10)" />
      <path d={pdfD} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad.l} y1={yScalePDF(0)} x2={pad.l + w} y2={yScalePDF(0)} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + h} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1={xScale(xa)} y1={pad.t} x2={xScale(xa)} y2={yScalePDF(0)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <line x1={xScale(xb)} y1={pad.t} x2={xScale(xb)} y2={yScalePDF(0)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      <text x={xScale(xa)} y={yScalePDF(0) + 16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">a</text>
      <text x={xScale(xb)} y={yScalePDF(0) + 16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">b</text>
      <text x={xScale(0)} y={yScalePDF(0.22)} textAnchor="middle" fontSize="12" fill={color} fontWeight="700">P(a≤X≤b)</text>
      <text x={xScale(2.5)} y={yScalePDF(0.35)} textAnchor="start" fontSize="12" fill={color}>f(x)</text>
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">PDF da Normal: área sombreada = P(a ≤ X ≤ b) = ∫f(x)dx</text>
    </svg>
  );
}

/* ─── SVG 4: Monte Carlo ─── */
function MonteCarloSvg() {
  const W = 480, H = 220;
  const pad = { l: 40, r: 20, t: 20, b: 30 };
  const w = W - pad.l - pad.r;
  const h = H - pad.t - pad.b;
  const f = x => Math.sin(x) * 0.8 + 0.5;
  const xScale = x => pad.l + x * w;
  const yScale = y => pad.t + h - (y / 1.5) * h;

  const curvePts = [];
  for (let i = 0; i <= 80; i++) {
    const x = i / 80;
    curvePts.push(`${xScale(x)},${yScale(f(x))}`);
  }
  const curveD = 'M ' + curvePts.join(' L ');

  const samples = [
    { x: 0.08, y: 0.65 }, { x: 0.17, y: 0.3 }, { x: 0.25, y: 0.85 }, { x: 0.33, y: 0.15 },
    { x: 0.42, y: 0.72 }, { x: 0.50, y: 0.55 }, { x: 0.58, y: 0.9 }, { x: 0.65, y: 0.2 },
    { x: 0.73, y: 0.6 }, { x: 0.82, y: 0.45 }, { x: 0.91, y: 0.78 }, { x: 0.97, y: 0.35 },
  ];

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <rect x={pad.l} y={pad.t} width={w} height={h} fill="rgba(249,115,22,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <path d={curveD} fill="none" stroke={color} strokeWidth="2.5" />
      {samples.map((s, i) => {
        const cy = yScale(s.y);
        const fy = yScale(f(s.x));
        const inside = s.y <= f(s.x);
        return (
          <circle key={i} cx={xScale(s.x)} cy={cy} r={5}
            fill={inside ? color : 'var(--text-secondary)'} fillOpacity={inside ? 0.8 : 0.4} />
        );
      })}
      <line x1={pad.l} y1={pad.t + h} x2={pad.l + w} y2={pad.t + h} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + h} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x={xScale(0.5)} y={yScale(1.35)} textAnchor="middle" fontSize="11" fill={color}>pontos verdes: abaixo de f(x)</text>
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Monte Carlo: amostras aleatórias estimam a área sob f(x)</text>
    </svg>
  );
}

/* ─── SVG 5: 2D Gaussian contours ─── */
function GaussianContourSvg() {
  const W = 520, H = 310;
  const cx = W / 2, cy = H / 2;
  const radii = [20, 40, 65, 95, 130];

  const marginalX = [];
  for (let i = 0; i <= 60; i++) {
    const x = cx - 140 + (i / 60) * 280;
    const val = Math.exp(-0.5 * ((x - cx) / 55) ** 2) * 30;
    marginalX.push(`${x},${45 - val}`);
  }
  const marginalXD = 'M ' + marginalX.join(' L ');

  const marginalY = [];
  for (let i = 0; i <= 60; i++) {
    const y = cy - 120 + (i / 60) * 240;
    const val = Math.exp(-0.5 * ((y - cy) / 55) ** 2) * 30;
    marginalY.push(`${W - 45 + val},${y}`);
  }
  const marginalYD = 'M ' + marginalY.join(' L ');

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {radii.map((r, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.7}
          fill="none" stroke={color} strokeWidth="1.5"
          strokeOpacity={0.8 - i * 0.12} />
      ))}
      <line x1={cx - 145} y1={cy} x2={cx + 145} y2={cy} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
      <line x1={cx} y1={cy - 125} x2={cx} y2={cy + 125} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" />
      <path d={marginalXD} fill="none" stroke="rgba(249,115,22,0.10)" strokeWidth="2" />
      <path d={marginalYD} fill="none" stroke="rgba(249,115,22,0.10)" strokeWidth="2" />
      <text x={cx} y={14} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">marginal f_Y(y)</text>
      <text x={cx + 70} y={42} textAnchor="start" fontSize="11" fill="var(--text-secondary)">marginal f_X(x)</text>
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="12" fill={color} fontWeight="700">f(x,y)</text>
      <text x={W / 2} y={H - 5} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Gaussiana 2D: contornos da densidade conjunta e densidades marginais</text>
    </svg>
  );
}

/* ─── SVG 6: Polar vs rectangular integration ─── */
function PolarRectSvg() {
  const W = 540, H = 220;
  const halfW = W / 2 - 10;

  const rectPts = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      rectPts.push({ x: 25 + i * 38, y: 28 + j * 38, w: 38, h: 38 });
    }
  }

  const arcPts = [];
  const polarCx = halfW + 140, polarCy = 110;
  const nRings = 4, nSectors = 8;
  for (let r = 1; r <= nRings; r++) {
    for (let s = 0; s < nSectors; s++) {
      const a1 = (s / nSectors) * Math.PI;
      const a2 = ((s + 1) / nSectors) * Math.PI;
      const r1 = (r - 1) * 22, r2 = r * 22;
      const x1 = polarCx + r1 * Math.cos(a1);
      const y1 = polarCy - r1 * Math.sin(a1);
      const x2 = polarCx + r2 * Math.cos(a1);
      const y2 = polarCy - r2 * Math.sin(a1);
      const x3 = polarCx + r2 * Math.cos(a2);
      const y3 = polarCy - r2 * Math.sin(a2);
      const x4 = polarCx + r1 * Math.cos(a2);
      const y4 = polarCy - r1 * Math.sin(a2);
      arcPts.push({ x1, y1, x2, y2, x3, y3, x4, y4, r2, a1, a2, large: a2 - a1 > Math.PI ? 1 : 0 });
    }
  }

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <text x={halfW / 2} y={14} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Coordenadas Retangulares</text>
      {rectPts.slice(0, 20).map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h}
          fill={`rgba(249,115,22,0.10) * 0.04})`} stroke={color} strokeWidth="0.8" />
      ))}
      <line x1={halfW + 5} y1={0} x2={halfW + 5} y2={H} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x={halfW + 140} y={14} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Coordenadas Polares</text>
      {arcPts.map((a, i) => {
        const d = `M ${a.x1} ${a.y1} L ${a.x2} ${a.y2} A ${a.r2} ${a.r2} 0 ${a.large} 0 ${a.x3} ${a.y3} L ${a.x4} ${a.y4} A ${(a.r2 - 22)} ${(a.r2 - 22)} 0 ${a.large} 1 ${a.x1} ${a.y1} Z`;
        return (
          <path key={i} d={d}
            fill={`rgba(249,115,22,0.10) * 0.05})`} stroke={color} strokeWidth="0.8" />
        );
      })}
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Fubini permite trocar ordem de integração; Jacobiano adapta elemento de área</text>
    </svg>
  );
}

/* ─── SVG 7: Improper integral convergence ─── */
function ImproperSvg() {
  const W = 480, H = 210;
  const pad = { l: 50, r: 20, t: 20, b: 35 };
  const w = W - pad.l - pad.r;
  const h = H - pad.t - pad.b;
  const xmin = 0.8, xmax = 5.5;
  const f = x => 1 / (x * x);
  const xScale = x => pad.l + ((x - xmin) / (xmax - xmin)) * w;
  const yScale = y => pad.t + h - Math.min(y, 2) / 2 * h;

  const curvePts = [];
  for (let i = 0; i <= 100; i++) {
    const x = xmin + (i / 100) * (xmax - xmin);
    curvePts.push(`${xScale(x)},${yScale(f(x))}`);
  }
  const curveD = 'M ' + curvePts.join(' L ');

  const shadePts = [];
  shadePts.push(`${xScale(1)},${yScale(0)}`);
  for (let i = 0; i <= 80; i++) {
    const x = 1 + (i / 80) * (xmax - 1 - 0.1);
    shadePts.push(`${xScale(x)},${yScale(f(x))}`);
  }
  shadePts.push(`${xScale(xmax - 0.1)},${yScale(0)}`);
  const shadeD = 'M ' + shadePts.join(' L ') + ' Z';

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <path d={shadeD} fill="rgba(249,115,22,0.10)" />
      <path d={curveD} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={pad.l} y1={pad.t + h} x2={pad.l + w} y2={pad.t + h} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + h} stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x={xScale(1)} y={pad.t + h + 16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">1</text>
      <text x={xScale(xmax - 0.2)} y={pad.t + h + 16} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">∞</text>
      <text x={xScale(2.5)} y={yScale(0.55)} textAnchor="middle" fontSize="12" fill={color} fontWeight="700">área = 1</text>
      <text x={xScale(3.5)} y={yScale(0.18)} textAnchor="start" fontSize="12" fill={color}>f(x) = 1/x²</text>
      <text x={W / 2} y={H - 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">∫[1,∞) x⁻² dx = 1 converge (p = 2 {'>'} 1)</text>
    </svg>
  );
}

export default function CALC6() {
  return (
    <div style={S.page}>
      <Link to="/calculus" style={S.back}><ArrowLeft size={16} /> Voltar a Calculus for Data Science</Link>

      <div style={S.tag}>Module 06</div>
      <h1 style={S.h1}>Integrais &amp; Probabilidade</h1>
      <p style={S.lead}>
        A integração é a operação inversa da diferenciação e é a linguagem natural da probabilidade
        contínua. Distribuições de probabilidade, valores esperados, variâncias, divergências entre
        distribuições e métodos de Monte Carlo são todos definidos através de integrais. Este módulo
        constrói a teoria desde as somas de Riemann até às aplicações em Machine Learning.
      </p>

      {/* ── 1. Integral de Riemann ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Integral de Riemann</h2>
        <p style={S.p}>
          O integral definido de f de a a b captura a área com sinal entre o gráfico e o eixo x.
          Formalmente, divide-se [a, b] em n subintervalos de largura Δx = (b − a)/n, escolhe-se
          um ponto representativo xᵢ* em cada subintervalo, e toma-se o limite:
        </p>
        <BlockMath math='\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_i f(x_i^*) \cdot \Delta x' />
        <div style={S.svgWrap}>
          <RiemannSVG />
        </div>
        <p style={S.p}>
          Dependendo de onde se escolhe xᵢ*, obtêm-se variantes: soma da esquerda (xᵢ* = xᵢ),
          soma da direita (xᵢ* = xᵢ₊₁), soma do ponto médio (xᵢ* = (xᵢ + xᵢ₊₁)/2) e soma
          trapezoidal. Todas convergem para o mesmo valor quando f é integrável (e.g., contínua
          por partes). O SVG acima mostra n = 6 retângulos de ponto médio — à medida que n → ∞,
          os rectângulos preenchem exactamente a área.
        </p>
        <p style={S.p}><strong>Área com sinal:</strong> Se f(x) &lt; 0 num subintervalo, os rectângulos têm
          altura negativa e a contribuição é negativa. O integral mede área acima do eixo menos área
          abaixo. Para a área geométrica total usa-se ∫|f(x)|dx.</p>
        <p style={S.p}><strong>Propriedades fundamentais:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Linearidade</td>
              <td style={S.td}>∫[a,b] (αf + βg) dx = α∫f dx + β∫g dx</td>
              <td style={S.td}>O integral é linear</td>
            </tr>
            <tr>
              <td style={S.td}>Aditividade</td>
              <td style={S.td}>∫[a,b] f = ∫[a,c] f + ∫[c,b] f</td>
              <td style={S.td}>Intervalos adjacentes somam</td>
            </tr>
            <tr>
              <td style={S.td}>Inversão de limites</td>
              <td style={S.td}>∫[a,b] f = −∫[b,a] f</td>
              <td style={S.td}>Trocar limites inverte sinal</td>
            </tr>
            <tr>
              <td style={S.td}>Integral nulo</td>
              <td style={S.td}>∫[a,a] f = 0</td>
              <td style={S.td}>Intervalo degenerado tem área zero</td>
            </tr>
            <tr>
              <td style={S.td}>Monotonia</td>
              <td style={S.td}>f ≤ g ⟹ ∫f ≤ ∫g</td>
              <td style={S.td}>Preserva ordem pontual</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Em ML, a soma de Riemann é o análogo contínuo da soma sobre mini-batches. A passagem n → ∞
          justifica tratar distribuições contínuas como limites de histogramas discretos.
        </div>
              </div>

      <hr style={S.divider} />

      {/* ── 2. Teorema Fundamental do Cálculo ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Teorema Fundamental do Cálculo</h2>
        <p style={S.p}>
          O Teorema Fundamental do Cálculo (TFC) liga os dois ramos principais do cálculo —
          diferenciação e integração — revelando que são operações inversas uma da outra.
        </p>
        <div style={S.svgWrap}>
          <FTCSvg />
        </div>
        <p style={S.p}><strong>Parte 1 — Integral como antiderivada:</strong></p>
        <BlockMath math={"\\text{Se } F(x) = \\int_a^x f(t)\\,dt,\\text{ então } F'(x) = f(x)"} />
        <p style={S.p}>
          Isto diz que a função que acumula área debaixo de f, derivada em ordem a x, devolve f(x).
          A integral é uma antiderivada de f. Intuição: aumentar x por dx acrescenta o rectângulo
          f(x)·dx, portanto dF/dx = f(x).
        </p>
        <p style={S.p}><strong>Parte 2 — Avaliação exacta:</strong></p>
        <BlockMath math='\int_a^b f(x)\,dx = F(b) - F(a) \quad \text{(onde } F \text{ é qualquer antiderivada de } f\text{)}' />
        <p style={S.p}>
          Isto transforma o problema difícil de computar limites de somas de Riemann no problema
          (geralmente mais fácil) de encontrar uma antiderivada. A constante de integração cancela:
          F(b) − F(a) é independente da constante C em F + C.
        </p>
        <p style={S.p}><strong>Exemplos:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>f(x)</th>
              <th style={S.th}>F(x)</th>
              <th style={S.th}>∫[0,1] f(x)dx</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>xⁿ</td><td style={S.td}>xⁿ⁺¹ / (n+1)</td><td style={S.td}>1/(n+1)</td></tr>
            <tr><td style={S.td}>eˣ</td><td style={S.td}>eˣ</td><td style={S.td}>e − 1</td></tr>
            <tr><td style={S.td}>cos x</td><td style={S.td}>sin x</td><td style={S.td}>sin 1 ≈ 0.841</td></tr>
            <tr><td style={S.td}>1/x</td><td style={S.td}>ln|x|</td><td style={S.td}>∫[1,e] = 1</td></tr>
            <tr><td style={S.td}>1/(1+x²)</td><td style={S.td}>arctan x</td><td style={S.td}>π/4</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Porque é "fundamental"? Antes do TFC, calcular integrais exactos exigia computar limites
          de somas. O TFC reduziu esse problema à álgebra de antiderivadas — uma simplificação
          extraordinária que tornou o cálculo uma ferramenta prática.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 3. Técnicas de Integração ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Técnicas de Integração</h2>
        <p style={S.p}>
          Nem todas as funções têm antiderivadas elementares. Quando existem, as técnicas abaixo
          transformam o integrando numa forma conhecida.
        </p>

        <p style={S.p}><strong>Substituição (u-substituição)</strong> — regra da cadeia ao contrário:</p>
        <BlockMath math={"\\int f(g(x))\\cdot g'(x)\\,dx = \\int f(u)\\,du \\quad (u = g(x))"} />
        <p style={S.p}>
          Exemplo: ∫2x·e^(x²) dx. Seja u = x², du = 2x dx. Fica ∫eᵘ du = eᵘ + C = e^(x²) + C.
          Útil quando se reconhece uma função e a sua derivada no integrando.
        </p>

        <p style={S.p}><strong>Integração por partes</strong> — regra do produto ao contrário:</p>
        <BlockMath math='\int u\,dv = uv - \int v\,du' />
        <p style={S.p}>
          Regra mnemónica LIATE para escolher u: Logarítmico {'>'} Inverso trigonométrico {'>'} Algébrico {'>'} Trigonométrico {'>'} Exponencial.
          Exemplo: ∫x·eˣ dx. Seja u = x, dv = eˣ dx. Então du = dx, v = eˣ. Resultado: xeˣ − eˣ + C.
        </p>

        <p style={S.p}><strong>Fracções parciais</strong> — para funções racionais P(x)/Q(x):</p>
        <BlockMath math='\frac{1}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b} \quad \to \text{ integrais de logaritmos}' />

        <p style={S.p}><strong>Substituições trigonométricas</strong>:</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Expressão</th>
              <th style={S.th}>Substituição</th>
              <th style={S.th}>Identidade usada</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>√(a²−x²)</td><td style={S.td}>x = a sin θ</td><td style={S.td}>1−sin²θ = cos²θ</td></tr>
            <tr><td style={S.td}>√(a²+x²)</td><td style={S.td}>x = a tan θ</td><td style={S.td}>1+tan²θ = sec²θ</td></tr>
            <tr><td style={S.td}>√(x²−a²)</td><td style={S.td}>x = a sec θ</td><td style={S.td}>sec²θ−1 = tan²θ</td></tr>
          </tbody>
        </table>

        <p style={S.p}><strong>Tabela de integrais padrão:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>f(x)</th>
              <th style={S.th}>∫f(x)dx</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>xⁿ (n ≠ −1)</td><td style={S.td}>xⁿ⁺¹/(n+1) + C</td></tr>
            <tr><td style={S.td}>1/x</td><td style={S.td}>ln|x| + C</td></tr>
            <tr><td style={S.td}>eˣ</td><td style={S.td}>eˣ + C</td></tr>
            <tr><td style={S.td}>aˣ</td><td style={S.td}>aˣ/ln a + C</td></tr>
            <tr><td style={S.td}>sin x</td><td style={S.td}>−cos x + C</td></tr>
            <tr><td style={S.td}>cos x</td><td style={S.td}>sin x + C</td></tr>
            <tr><td style={S.td}>sec²x</td><td style={S.td}>tan x + C</td></tr>
            <tr><td style={S.td}>1/√(1−x²)</td><td style={S.td}>arcsin x + C</td></tr>
            <tr><td style={S.td}>1/(1+x²)</td><td style={S.td}>arctan x + C</td></tr>
            <tr><td style={S.td}>ln x</td><td style={S.td}>x ln x − x + C</td></tr>
          </tbody>
        </table>
              </div>

      <hr style={S.divider} />

      {/* ── 4. Integrais Impróprios ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Integrais Impróprios</h2>
        <p style={S.p}>
          Quando o intervalo de integração é infinito ou o integrando tem uma singularidade,
          define-se o integral como um limite:
        </p>
        <BlockMath math='\int_a^{\infty} f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx' />
        <BlockMath math='\int_a^b f(x)\,dx = \lim_{\varepsilon \to 0^+} \int_a^{b-\varepsilon} f(x)\,dx \quad \text{(se } f \to \infty \text{ em } x=b\text{)}' />
        <div style={S.svgWrap}>
          <ImproperSvg />
        </div>
        <p style={S.p}><strong>Teste-p:</strong> O integral ∫[1,∞) x⁻ᵖ dx converge se e só se p &gt; 1.</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>p</th>
              <th style={S.th}>∫[1,∞) x⁻ᵖ dx</th>
              <th style={S.th}>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>p &gt; 1</td><td style={S.td}>1/(p−1)</td><td style={S.td}>Converge</td></tr>
            <tr><td style={S.td}>p = 1</td><td style={S.td}>ln b → ∞</td><td style={S.td}>Diverge</td></tr>
            <tr><td style={S.td}>p &lt; 1</td><td style={S.td}>b¹⁻ᵖ/(1−p) → ∞</td><td style={S.td}>Diverge</td></tr>
          </tbody>
        </table>
        <p style={S.p}><strong>Função Gamma</strong> — generaliza o factorial:</p>
        <BlockMath math='\Gamma(n) = \int_0^{\infty} t^{n-1} e^{-t}\,dt = (n-1)! \quad \text{para } n \text{ inteiro positivo}' />
        <p style={S.p}>
          Propriedades: Γ(1) = 1, Γ(1/2) = √π, Γ(n+1) = n·Γ(n). A função Gamma é a base das
          distribuições Gamma e Beta, fundamentais em Bayesian statistics.
        </p>
        <p style={S.p}><strong>Integral Gaussiano</strong> — o mais importante em probabilidade:</p>
        <BlockMath math='\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}' />
        <p style={S.p}>
          Prova elegante: elevar ao quadrado, passar a polar, integrar em r e θ separadamente.
          Este resultado garante que a distribuição Normal é uma PDF válida — o seu integral é 1.
          Mais geralmente: ∫e^(−ax²)dx = √(π/a).
        </p>
                <div style={S.note}>
          A convergência de integrais impróprios é essencial para garantir que PDFs integram 1.
          A função Gamma aparece na distribuição t de Student, chi-quadrado e em priors Bayesianos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 5. PDFs e CDFs ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. PDFs e CDFs</h2>
        <p style={S.p}>
          Uma função densidade de probabilidade (PDF) f(x) descreve a distribuição de uma variável
          aleatória contínua X. Probabilidades são integrais da PDF:
        </p>
        <BlockMath math='P(a \leq X \leq b) = \int_a^b f(x)\,dx' />
        <div style={S.svgWrap}>
          <PdfCdfSvg />
        </div>
        <p style={S.p}><strong>Requisitos para uma PDF válida:</strong></p>
        <ul style={S.ul}>
          <li style={S.li}>f(x) ≥ 0 para todo x (não-negatividade)</li>
          <li style={S.li}>∫[−∞,∞] f(x) dx = 1 (normalização)</li>
        </ul>
        <p style={S.p}>
          A função de distribuição acumulada (CDF) F(x) é a integral da PDF até x:
        </p>
        <BlockMath math='F(x) = P(X \leq x) = \int_{-\infty}^x f(t)\,dt' />
        <p style={S.p}>
          Pelo TFC, f(x) = F'(x). A CDF é não decrescente, F(−∞) = 0, F(∞) = 1. Probabilidades
          em intervalos calculam-se com P(a ≤ X ≤ b) = F(b) − F(a).
        </p>
        <p style={S.p}><strong>PDFs comuns e as suas formas:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Distribuição</th>
              <th style={S.th}>PDF f(x)</th>
              <th style={S.th}>Suporte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Normal N(μ,σ²)</td>
              <td style={S.td}>(1/(σ√(2π))) exp(−(x−μ)²/(2σ²))</td>
              <td style={S.td}>(−∞, ∞)</td>
            </tr>
            <tr>
              <td style={S.td}>Exponencial(λ)</td>
              <td style={S.td}>λ e^(−λx)</td>
              <td style={S.td}>[0, ∞)</td>
            </tr>
            <tr>
              <td style={S.td}>Uniforme[a,b]</td>
              <td style={S.td}>1/(b−a)</td>
              <td style={S.td}>[a, b]</td>
            </tr>
            <tr>
              <td style={S.td}>Gamma(α,β)</td>
              <td style={S.td}>x^(α−1) e^(−x/β) / (β^α Γ(α))</td>
              <td style={S.td}>[0, ∞)</td>
            </tr>
            <tr>
              <td style={S.td}>Beta(α,β)</td>
              <td style={S.td}>x^(α−1)(1−x)^(β−1) / B(α,β)</td>
              <td style={S.td}>[0, 1]</td>
            </tr>
          </tbody>
        </table>
              </div>

      <hr style={S.divider} />

      {/* ── 6. Valor Esperado e Variância ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Valor Esperado e Variância como Integrais</h2>
        <p style={S.p}>
          O valor esperado (média) de uma variável aleatória contínua X é a média ponderada dos
          valores de X, com pesos dados pela PDF:
        </p>
        <BlockMath math='E[X] = \int_{-\infty}^{\infty} x\cdot f(x)\,dx' />
        <p style={S.p}>
          Mais geralmente, para qualquer função g de X:
        </p>
        <BlockMath math='E[g(X)] = \int_{-\infty}^{\infty} g(x)\cdot f(x)\,dx \quad \text{(Lei do Estatístico Inconsciente)}' />
        <p style={S.p}><strong>Variância:</strong></p>
        <BlockMath math='\mathrm{Var}[X] = E[(X-\mu)^2] = E[X^2] - (E[X])^2' />
        <p style={S.p}><strong>Momentos de ordem n:</strong> E[Xⁿ] = ∫xⁿ f(x) dx. O primeiro momento é a média,
          o segundo momento centrado é a variância, o terceiro (estandardizado) é a assimetria, o quarto é a curtose.</p>
        <p style={S.p}><strong>Função geradora de momentos (MGF):</strong></p>
        <BlockMath math='M(t) = E[e^{tX}] = \int_{-\infty}^{\infty} e^{tx} f(x)\,dx' />
        <p style={S.p}>
          A MGF "gera" momentos por diferenciação: E[Xⁿ] = M^(n)(0). É única para cada distribuição
          e útil para provar propriedades como a soma de normais independentes ser normal.
        </p>
        <p style={S.p}><strong>Momentos da Normal N(μ,σ²):</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Momento</th>
              <th style={S.th}>Valor</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>E[X]</td><td style={S.td}>μ</td><td style={S.td}>Média/centro</td></tr>
            <tr><td style={S.td}>E[X²]</td><td style={S.td}>μ² + σ²</td><td style={S.td}>Segundo momento</td></tr>
            <tr><td style={S.td}>Var[X]</td><td style={S.td}>σ²</td><td style={S.td}>Dispersão</td></tr>
            <tr><td style={S.td}>Assimetria</td><td style={S.td}>0</td><td style={S.td}>Distribuição simétrica</td></tr>
            <tr><td style={S.td}>Curtose (excesso)</td><td style={S.td}>0</td><td style={S.td}>Referência "normal"</td></tr>
          </tbody>
        </table>
        <p style={S.p}><strong>Momentos da Exponencial(λ):</strong> E[X] = 1/λ, Var[X] = 1/λ².</p>
                <div style={S.note}>
          Em ML, o valor esperado é a previsão de Bayes óptima sob perda quadrática. A variância
          mede a incerteza do modelo. Minimizar E[(y − f(x))²] leva a f(x) = E[y|x].
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 7. Integrais Duplos e Triplos ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Integrais Duplos e Triplos</h2>
        <p style={S.p}>
          Para funções de duas variáveis, o integral duplo acumula o volume sob a superfície f(x,y)
          sobre uma região D no plano xy:
        </p>
        <BlockMath math='\iint_D f(x,y)\,dA = \int\!\!\int f(x,y)\,dx\,dy' />
        <p style={S.p}><strong>Teorema de Fubini:</strong> se f é contínua num rectângulo [a,b]×[c,d], pode
          integrar-se em qualquer ordem:</p>
        <BlockMath math='\int_a^b\!\int_c^d f(x,y)\,dy\,dx = \int_c^d\!\int_a^b f(x,y)\,dx\,dy' />
        <div style={S.svgWrap}>
          <PolarRectSvg />
        </div>
        <p style={S.p}><strong>Mudança de variáveis e Jacobiano:</strong></p>
        <BlockMath math='\iint f(x,y)\,dx\,dy = \iint f(x(u,v),\,y(u,v))\,|J|\,du\,dv' />
        <p style={S.p}>
          O Jacobiano |J| = |∂(x,y)/∂(u,v)| é o determinante da matriz de derivadas parciais.
          Em coordenadas polares (x = r cos θ, y = r sin θ): |J| = r. Logo dA = r dr dθ.
          Em coordenadas esféricas: dV = r² sin φ dr dθ dφ.
        </p>
        <p style={S.p}><strong>Aplicação em probabilidade conjunta:</strong></p>
        <BlockMath math='P(a \leq X \leq b,\; c \leq Y \leq d) = \int_a^b\!\int_c^d f(x,y)\,dy\,dx' />
        <p style={S.p}>
          A PDF conjunta f(x,y) deve satisfazer: f(x,y) ≥ 0 e ∬f(x,y)dxdy = 1. Integrais
          duplos aparecem sempre que se lida com duas ou mais variáveis aleatórias conjuntas.
        </p>
              </div>

      <hr style={S.divider} />

      {/* ── 8. Distribuições Conjuntas e Marginais ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Distribuições Conjuntas e Marginais</h2>
        <p style={S.p}>
          Dada a PDF conjunta f(x,y) de duas variáveis aleatórias (X,Y), todas as propriedades
          probabilísticas derivam de integrais desta função.
        </p>
        <div style={S.svgWrap}>
          <GaussianContourSvg />
        </div>
        <p style={S.p}><strong>Densidade marginal</strong> — integrar fora a variável irrelevante:</p>
        <BlockMath math='f_X(x) = \int_{-\infty}^{\infty} f(x,y)\,dy \qquad f_Y(y) = \int_{-\infty}^{\infty} f(x,y)\,dx' />
        <p style={S.p}><strong>Densidade condicional</strong> — Bayes contínuo:</p>
        <BlockMath math='f(y|x) = \frac{f(x,y)}{f_X(x)}' />
        <p style={S.p}>
          A densidade condicional f(y|x) é uma PDF válida em y para cada valor fixo de x.
          A lei de probabilidade total na forma contínua: f_Y(y) = ∫f(y|x)f_X(x)dx.
        </p>
        <p style={S.p}><strong>Independência:</strong> X e Y são independentes se e só se:</p>
        <BlockMath math='f(x,y) = f_X(x)\cdot f_Y(y)' />
        <p style={S.p}><strong>Covariância como integral duplo:</strong></p>
        <BlockMath math='\mathrm{Cov}(X,Y) = \iint (x-\mu_X)(y-\mu_Y)\,f(x,y)\,dx\,dy = E[XY] - E[X]E[Y]' />
        <p style={S.p}><strong>Normal Multivariada N(μ,Σ):</strong></p>
        <BlockMath math='f(\mathbf{x}) = \frac{1}{\sqrt{(2\pi)^d|\Sigma|}} \exp\!\left(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^\top \Sigma^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)' />
        <p style={S.p}>
          A PDF é um integral d-dimensional normalizado pelo determinante de Σ. As marginais de
          uma Normal multivariada são Normais. A covariância captura a correlação linear entre pares
          de variáveis; Cov(X,Y) = 0 implica independência apenas para Normais.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Quantidade</th>
              <th style={S.th}>Definição integral</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>f_X(x)</td><td style={S.td}>∫f(x,y)dy</td></tr>
            <tr><td style={S.td}>f(y|x)</td><td style={S.td}>f(x,y)/f_X(x)</td></tr>
            <tr><td style={S.td}>E[X]</td><td style={S.td}>∬x·f(x,y)dxdy</td></tr>
            <tr><td style={S.td}>Cov(X,Y)</td><td style={S.td}>∬(x−μ_X)(y−μ_Y)f(x,y)dxdy</td></tr>
            <tr><td style={S.td}>P(X&lt;Y)</td><td style={S.td}>∬[x&lt;y] f(x,y)dxdy</td></tr>
          </tbody>
        </table>
              </div>

      <hr style={S.divider} />

      {/* ── 9. Integração de Monte Carlo ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Integração de Monte Carlo</h2>
        <p style={S.p}>
          A integração de Monte Carlo estima integrais através de amostragem aleatória. A ideia base:
          se X ~ Uniforme[a,b], então E[f(X)] = (1/(b−a)) ∫[a,b] f(x) dx, logo:
        </p>
        <BlockMath math='\int_a^b f(x)\,dx \approx (b-a)\cdot\frac{1}{n}\sum_i f(x_i) \qquad x_i \sim \text{Uniforme}[a,b]' />
        <div style={S.svgWrap}>
          <MonteCarloSvg />
        </div>
        <p style={S.p}>
          Pelo Teorema Central do Limite, o estimador tem erro padrão σ/√n onde σ é o desvio padrão
          de f(X). A taxa de convergência O(1/√n) é <strong>independente da dimensão d</strong> do
          problema — uma vantagem crucial. A quadratura clássica (Simpson, Gauss) tem taxa O(n^(−k/d))
          que deteriora exponencialmente com d ("maldição da dimensionalidade").
        </p>
        <p style={S.p}><strong>Importance Sampling</strong> — reduzir variância usando uma distribuição proposta q:</p>
        <BlockMath math='\int f(x)\,dx = \int \frac{f(x)}{q(x)}\cdot q(x)\,dx \approx \frac{1}{n}\sum_i \frac{f(x_i)}{q(x_i)} \qquad x_i \sim q' />
        <p style={S.p}>
          Escolhendo q ∝ |f| reduz-se a variância ao mínimo. Em MCMC (Monte Carlo por cadeia de
          Markov), não se amostra directamente mas constrói-se uma cadeia de Markov cuja distribuição
          estacionária é a distribuição alvo — essencial para inferência Bayesiana em alta dimensão.
        </p>
        <p style={S.p}><strong>Aplicações em ML:</strong></p>
        <ul style={S.ul}>
          <li style={S.li}>Computar constantes normalizadoras em modelos probabilísticos</li>
          <li style={S.li}>Estimativa da verosimilhança marginal (evidência Bayesiana)</li>
          <li style={S.li}>Estimativa de gradientes em variational inference (ELBO)</li>
          <li style={S.li}>Amostrar de distribuições posteriores complexas via MCMC</li>
          <li style={S.li}>Avaliação de métricas em high-dimensional feature spaces</li>
        </ul>
                <div style={S.note}>
          A regra de ouro: use quadratura numérica (quad, dblquad) para integrais de baixa dimensão
          (d ≤ 3–4) onde é mais precisa. Use Monte Carlo para d &gt; 4 ou quando a PDF é conhecida
          apenas a menos de uma constante (caso Bayesiano típico).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 10. Entropia e Divergência KL ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Entropia e Divergência KL como Integrais</h2>
        <p style={S.p}>
          A teoria da informação fornece medidas de "desordem" e "distância" entre distribuições,
          todas definidas como integrais de funções de PDFs.
        </p>
        <p style={S.p}><strong>Entropia de Shannon (diferencial):</strong></p>
        <BlockMath math='H(X) = -\int f(x)\log f(x)\,dx' />
        <p style={S.p}>
          Mede a incerteza média associada a X. A Normal maximiza a entropia entre distribuições
          de variância σ² fixa: H(N(μ,σ²)) = (1/2) ln(2πeσ²). A entropia é invariante a
          translações e escala por log.
        </p>
        <p style={S.p}><strong>Cross-entropy:</strong></p>
        <BlockMath math='H(p, q) = -\int p(x)\log q(x)\,dx' />
        <p style={S.p}>
          A função de perda cross-entropy em classificação é H(p,q) onde p é a distribuição real
          (one-hot) e q é a previsão do modelo (softmax). Minimizar H(p,q) é equivalente a
          maximizar a log-verosimilhança.
        </p>
        <p style={S.p}><strong>Divergência de Kullback-Leibler:</strong></p>
        <BlockMath math='D_{\mathrm{KL}}(p \| q) = \int p(x)\log\frac{p(x)}{q(x)}\,dx \geq 0' />
        <p style={S.p}>
          D_KL mede quanta informação se perde ao usar q em vez de p. Note: D_KL(p‖q) ≠ D_KL(q‖p)
          — não é uma métrica simétrica. A não-negatividade segue da desigualdade de Jensen:
          −log é convexa, logo −E[log(q/p)] ≥ −log E[q/p] = 0.
        </p>
        <BlockMath math='D_{\mathrm{KL}}(p \| q) = H(p, q) - H(p)' />
        <p style={S.p}><strong>Informação mútua:</strong></p>
        <BlockMath math='I(X;Y) = \iint f(x,y)\log\frac{f(x,y)}{f_X(x)f_Y(y)}\,dx\,dy = D_{\mathrm{KL}}(f(x,y)\|f_X(x)f_Y(y))' />
        <p style={S.p}>
          I(X;Y) ≥ 0, com igualdade se e só se X e Y são independentes. A informação mútua
          generaliza a correlação: mede qualquer dependência estatística (não só linear).
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Quantidade</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Uso em ML</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Entropia H(p)</td><td style={S.td}>−∫p log p dx</td><td style={S.td}>Regularização, VAEs</td></tr>
            <tr><td style={S.td}>Cross-entropy H(p,q)</td><td style={S.td}>−∫p log q dx</td><td style={S.td}>Função de perda em classificação</td></tr>
            <tr><td style={S.td}>KL divergence</td><td style={S.td}>∫p log(p/q) dx</td><td style={S.td}>ELBO em VAEs, distilação</td></tr>
            <tr><td style={S.td}>Informação mútua</td><td style={S.td}>∫∫f(x,y)log(f/(fXfY))dxdy</td><td style={S.td}>Selecção de features, ICA</td></tr>
          </tbody>
        </table>
              </div>

      <hr style={S.divider} />

      {/* ── 11. Integrais em Álgebra Linear ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Integrais em Álgebra Linear</h2>
        <p style={S.p}>
          Muitas operações de álgebra linear têm análogos contínuos que são integrais. Esta
          perspectiva unifica conceitos discretos e contínuos.
        </p>
        <p style={S.p}><strong>Convolução</strong> — produto de funções no domínio da frequência:</p>
        <BlockMath math='(f * g)(t) = \int_{-\infty}^{\infty} f(\tau)\,g(t-\tau)\,d\tau' />
        <p style={S.p}>
          A convolução aparece em: filtros de sinal (CNNs são convoluções discretas), suavização
          de densidades (kernel density estimation), e na probabilidade de somas de variáveis
          aleatórias independentes (f(X+Y) = f_X * f_Y).
        </p>
        <p style={S.p}><strong>Cross-correlação:</strong></p>
        <BlockMath math='(f \star g)(t) = \int f(\tau)\,g(t+\tau)\,d\tau' />
        <p style={S.p}><strong>Produto interno em espaços de funções L²:</strong></p>
        <BlockMath math='\langle f, g \rangle = \int f(x)\,g(x)\,dx' />
        <p style={S.p}>
          Este produto interno define a norma L²: ‖f‖² = ∫f(x)² dx. Funções ortonormais satisfazem
          {'<'}φᵢ, φⱼ{'>'} = δᵢⱼ. As séries de Fourier são expansões nesta base ortonormal.
        </p>
        <p style={S.p}><strong>Matriz de Gram:</strong></p>
        <BlockMath math='G_{ij} = \langle \varphi_i, \varphi_j \rangle = \int \varphi_i(x)\,\varphi_j(x)\,dx' />
        <p style={S.p}>
          A matriz de Gram captura as correlações entre funções de base. Em métodos de kernel,
          o kernel k(x,x') = {'<'}φ(x), φ(x'){'>'} é o produto interno no espaço de features —
          que pode ser de dimensão infinita! O kernel trick evita computar φ explicitamente.
        </p>
        <p style={S.p}><strong>Transformada de Fourier — produto interno contínuo:</strong></p>
        <BlockMath math='\mathcal{F}(\omega) = \int_{-\infty}^{\infty} f(x)\,e^{-2\pi i\omega x}\,dx = \langle f,\, e^{2\pi i\omega\cdot}\rangle_{L^2}' />
        <p style={S.p}>
          A transformada de Fourier é uma mudança de base no espaço L²(R) de funções quadrado-
          integráveis. Cada componente F(ω) é o produto interno de f com a função base e^(2πiωx).
          A transformada inversa reconstrói f a partir dos coeficientes F(ω).
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação discreta</th>
              <th style={S.th}>Análogo contínuo (integral)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Σᵢ aᵢ bᵢ (produto interno)</td><td style={S.td}>∫f(x)g(x)dx</td></tr>
            <tr><td style={S.td}>Σⱼ Aᵢⱼ xⱼ (matriz-vector)</td><td style={S.td}>∫K(x,y)f(y)dy (operador integral)</td></tr>
            <tr><td style={S.td}>Σⱼ Aᵢⱼ Bⱼₖ (produto de matrizes)</td><td style={S.td}>(f*g)(t) (convolução)</td></tr>
            <tr><td style={S.td}>Gᵢⱼ = φᵢᵀφⱼ (Gram discreto)</td><td style={S.td}>∫φᵢ(x)φⱼ(x)dx</td></tr>
            <tr><td style={S.td}>DFT: Σ xₙ e^(−2πikn/N)</td><td style={S.td}>∫f(x)e^(−2πiωx)dx (Fourier)</td></tr>
          </tbody>
        </table>
                <div style={S.note}>
          A perspectiva de produto interno L² unifica: regressão por mínimos quadrados (projecção
          ortogonal), análise de Fourier (base ortonormal), SVMs com kernel (produto interno
          implícito em espaço de features), e Gaussian Processes (kernel como covariância).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 12. Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          Este módulo cobriu a integração desde os fundamentos (somas de Riemann) até às suas
          manifestações centrais em Machine Learning. Aqui está o quadro unificador:
        </p>
        <p style={S.p}><strong>Árvore de decisão para escolha de técnica de integração:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Técnica recomendada</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Antiderivada elementar existe</td><td style={S.td}>TFC (calcular F(b)−F(a))</td></tr>
            <tr><td style={S.td}>Composição de funções</td><td style={S.td}>U-substituição</td></tr>
            <tr><td style={S.td}>Produto função × exponencial/trig</td><td style={S.td}>Integração por partes (LIATE)</td></tr>
            <tr><td style={S.td}>Função racional P(x)/Q(x)</td><td style={S.td}>Fracções parciais</td></tr>
            <tr><td style={S.td}>Expressão com raiz quadrada</td><td style={S.td}>Substituição trigonométrica</td></tr>
            <tr><td style={S.td}>Dimensão d ≤ 3, precisão alta</td><td style={S.td}>Quadratura numérica (quad, dblquad)</td></tr>
            <tr><td style={S.td}>Dimensão d &gt; 3</td><td style={S.td}>Monte Carlo / MCMC</td></tr>
            <tr><td style={S.td}>Integral impróprio com estrutura</td><td style={S.td}>Função Gamma / tabelas</td></tr>
          </tbody>
        </table>

        <p style={S.p}><strong>Integrais-chave em Machine Learning:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Integral</th>
              <th style={S.th}>Resultado</th>
              <th style={S.th}>Aplicação ML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>∫[−∞,∞] e^(−x²) dx</td>
              <td style={S.td}>√π</td>
              <td style={S.td}>Normalização da Normal</td>
            </tr>
            <tr>
              <td style={S.td}>∫[0,∞) xⁿe^(−x) dx</td>
              <td style={S.td}>n! = Γ(n+1)</td>
              <td style={S.td}>Distribuições Gamma/Beta</td>
            </tr>
            <tr>
              <td style={S.td}>∫p(x)log p(x)dx</td>
              <td style={S.td}>−H(p)</td>
              <td style={S.td}>Entropia, regularização</td>
            </tr>
            <tr>
              <td style={S.td}>∫p(x)log(p/q)dx</td>
              <td style={S.td}>D_KL(p‖q)</td>
              <td style={S.td}>VAE, distilação, RLHF</td>
            </tr>
            <tr>
              <td style={S.td}>∫xf(x)dx</td>
              <td style={S.td}>E[X]</td>
              <td style={S.td}>Previsão óptima, média</td>
            </tr>
            <tr>
              <td style={S.td}>∫(x−μ)²f(x)dx</td>
              <td style={S.td}>Var[X]</td>
              <td style={S.td}>Incerteza, regularização L2</td>
            </tr>
            <tr>
              <td style={S.td}>∫f(τ)g(t−τ)dτ</td>
              <td style={S.td}>(f*g)(t)</td>
              <td style={S.td}>CNNs, filtros, KDE</td>
            </tr>
            <tr>
              <td style={S.td}>∬f(x,y)log(f/(fXfY))dxdy</td>
              <td style={S.td}>I(X;Y)</td>
              <td style={S.td}>Info mútua, ICA, selecção</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}><strong>Monte Carlo vs Quadratura:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspecto</th>
              <th style={S.th}>Quadratura (Simpson/Gauss)</th>
              <th style={S.th}>Monte Carlo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Taxa de convergência</td><td style={S.td}>O(n^(−k/d)) — degradá com d</td><td style={S.td}>O(1/√n) — independente de d</td></tr>
            <tr><td style={S.td}>Dimensão óptima</td><td style={S.td}>d ≤ 3</td><td style={S.td}>d grande (4+)</td></tr>
            <tr><td style={S.td}>Requer PDF explícita</td><td style={S.td}>Sim</td><td style={S.td}>Não (basta amostrar)</td></tr>
            <tr><td style={S.td}>Paralelizável</td><td style={S.td}>Parcialmente</td><td style={S.td}>Sim (amostras independentes)</td></tr>
            <tr><td style={S.td}>Exemplo em Python</td><td style={S.td}>scipy.integrate.quad</td><td style={S.td}>numpy.random + média</td></tr>
          </tbody>
        </table>

        <div style={S.note}>
          A integração é o fio condutor que liga Riemann ao backpropagation. O gradiente de uma
          perda esperada — E[L(θ)] = ∫L(θ,x)p(x)dx — é um integral. Actualizações de parâmetros
          em SGD são estimativas de Monte Carlo deste integral. Inferência variacional minimiza
          D_KL via optimização de integrais. A teoria é uma e a integração está no centro.
        </div>

              </div>
    </div>
  );
}
