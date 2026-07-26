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
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

// ── SVG 1: Orthogonality in 2D and 3D ──────────────────────────────────────
function OrthogonalitySVG() {
  return (
    <svg width="100%" viewBox="0 0 560 220" style={{ display: 'block', margin: '1rem 0' }}>
      {/* 2D panel */}
      <g transform="translate(40,20)">
        <text x="100" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>2D — u · v = 0</text>
        {/* axes */}
        <line x1="0" y1="160" x2="200" y2="160" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="20" y1="170" x2="20" y2="10" stroke="var(--text-secondary)" strokeWidth="1"/>
        {/* vector u */}
        <line x1="20" y1="160" x2="140" y2="80" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#ah1)"/>
        <text x="148" y="78" fontSize="12" fill="#4a9eed" fontWeight="700">u</text>
        {/* vector v */}
        <line x1="20" y1="160" x2="60" y2="40" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#ah2)"/>
        <text x="64" y="38" fontSize="12" fill="#4a9eed" fontWeight="700">v</text>
        {/* right angle mark */}
        <path d="M 32,152 A 15,15 0 0,1 25,146" fill="none" stroke={color} strokeWidth="1.5"/>
        <text x="55" y="175" fontSize="11" fill="var(--text-secondary)">u · v = 0</text>
        <defs>
          <marker id="ah1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed"/>
          </marker>
          <marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed"/>
          </marker>
        </defs>
      </g>
      {/* 3D panel */}
      <g transform="translate(280,20)">
        <text x="110" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Pythagorean Theorem</text>
        {/* right triangle */}
        <polygon points="20,170 180,170 20,50" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5"/>
        {/* sides */}
        <text x="95" y="185" textAnchor="middle" fontSize="12" fill="var(--text-primary)">a</text>
        <text x="5" y="112" textAnchor="middle" fontSize="12" fill="var(--text-primary)">b</text>
        <text x="115" y="105" fontSize="12" fill={color} fontWeight="600">c</text>
        {/* right angle */}
        <polyline points="20,150 40,150 40,170" fill="none" stroke={color} strokeWidth="1.5"/>
        <text x="55" y="195" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">a² + b² = c²</text>
        <text x="55" y="212" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">⟺ u ⊥ v</text>
      </g>
    </svg>
  );
}

// ── SVG 2: Orthogonal Projection decomposition ────────────────────────────
function ProjectionSVG() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', margin: '1rem 0' }}>
    <svg width="100%" viewBox="0 0 480 230" style={{ display: 'block', flex: '1 1 300px', minWidth: 0 }}>
      <g transform="translate(30,20)">
        <text x="220" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Projecção de v sobre u</text>
        {/* subspace line */}
        <line x1="0" y1="180" x2="420" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="6,4"/>
        <text x="430" y="184" fontSize="12" fill="var(--text-secondary)">span(u)</text>
        {/* u vector */}
        <line x1="30" y1="180" x2="280" y2="180" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#ahu)"/>
        <text x="290" y="177" fontSize="13" fill="#4a9eed" fontWeight="700">u</text>
        <defs>
          <marker id="ahu" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed"/>
          </marker>
          <marker id="ahv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed"/>
          </marker>
          <marker id="ahp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color}/>
          </marker>
          <marker id="ahperp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#4a9eed"/>
          </marker>
        </defs>
        {/* v vector */}
        <line x1="30" y1="180" x2="170" y2="50" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#ahv)"/>
        <text x="175" y="48" fontSize="13" fill="#4a9eed" fontWeight="700">v</text>
        {/* projection onto u */}
        <line x1="30" y1="180" x2="170" y2="180" stroke={color} strokeWidth="2.5" markerEnd="url(#ahp)"/>
        <text x="90" y="168" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">proj(v)</text>
        {/* perpendicular component */}
        <line x1="170" y1="180" x2="170" y2="50" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#ahperp)"/>
        <text x="178" y="120" fontSize="12" fill="#4a9eed">v⊥</text>
        {/* right angle at foot */}
        <polyline points="170,168 182,168 182,180" fill="none" stroke={color} strokeWidth="1.5"/>
      </g>
    </svg>
    <div style={{ flex: '0 1 200px', background: 'rgba(74,158,237,0.10)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.9rem 1rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
      <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', textAlign: 'center' }}>Fórmulas</div>
      <div style={{ marginBottom: '0.35rem' }}><InlineMath math="\text{proj}_u(v) = \frac{v\cdot u}{\|u\|^2}u" /></div>
      <div style={{ marginBottom: '0.35rem' }}><InlineMath math="P = A(A^TA)^{-1}A^T" /></div>
      <div style={{ marginBottom: '0.35rem' }}><InlineMath math="P^2 = P" /> (idempotente)</div>
      <div><InlineMath math="P^T = P" /> (simétrico)</div>
    </div>
    </div>
  );
}

// ── SVG 3: Gram-Schmidt step-by-step ─────────────────────────────────────
function GramSchmidtSVG() {
  return (
    <svg width="100%" viewBox="0 0 560 260" style={{ display: 'block', margin: '1rem 0' }}>
      {/* Step 1 */}
      <g transform="translate(20,30)">
        <text x="75" y="0" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Passo 1: e₁ = x₁/‖x₁‖</text>
        <line x1="10" y1="160" x2="140" y2="160" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="10" y1="170" x2="10" y2="20" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="10" y1="160" x2="100" y2="80" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#gs1)"/>
        <text x="105" y="78" fontSize="11" fill="#4a9eed">x₁</text>
        <line x1="10" y1="160" x2="68" y2="107" stroke={color} strokeWidth="2.5" markerEnd="url(#gs2)"/>
        <text x="55" y="100" fontSize="11" fill={color} fontWeight="700">e₁</text>
        <defs>
          <marker id="gs1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed"/></marker>
          <marker id="gs2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={color}/></marker>
          <marker id="gs3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed"/></marker>
          <marker id="gs4" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed"/></marker>
          <marker id="gs5" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#4a9eed"/></marker>
          <marker id="gs6" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill={color}/></marker>
        </defs>
      </g>
      {/* Step 2 */}
      <g transform="translate(200,30)">
        <text x="75" y="0" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Passo 2: subtrair proj</text>
        <line x1="10" y1="160" x2="140" y2="160" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="10" y1="170" x2="10" y2="20" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="10" y1="160" x2="68" y2="107" stroke={color} strokeWidth="2" markerEnd="url(#gs6)"/>
        <text x="40" y="125" fontSize="11" fill={color} fontWeight="700">e₁</text>
        <line x1="10" y1="160" x2="120" y2="60" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#gs3)"/>
        <text x="125" y="58" fontSize="11" fill="#4a9eed">x₂</text>
        {/* projection onto e1 */}
        <line x1="10" y1="160" x2="90" y2="135" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#gs4)"/>
        <text x="60" y="155" fontSize="10" fill="#4a9eed">proj</text>
        {/* u2 perpendicular */}
        <line x1="90" y1="135" x2="120" y2="60" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#gs5)"/>
        <text x="115" y="90" fontSize="11" fill="#4a9eed" fontWeight="700">u₂</text>
        <polyline points="82,137 85,130 93,128" fill="none" stroke={color} strokeWidth="1.5"/>
      </g>
      {/* Step 3 */}
      <g transform="translate(390,30)">
        <text x="75" y="0" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Resultado: Base ON</text>
        <line x1="10" y1="160" x2="140" y2="160" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="10" y1="170" x2="10" y2="20" stroke="var(--text-secondary)" strokeWidth="1"/>
        {/* e1 horizontal */}
        <line x1="10" y1="160" x2="110" y2="160" stroke={color} strokeWidth="2.5" markerEnd="url(#gs2)"/>
        <text x="115" y="158" fontSize="11" fill={color} fontWeight="700">e₁</text>
        {/* e2 vertical */}
        <line x1="10" y1="160" x2="10" y2="60" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#gs5)"/>
        <text x="15" y="58" fontSize="11" fill="#4a9eed" fontWeight="700">e₂</text>
        {/* right angle */}
        <polyline points="10,148 22,148 22,160" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5"/>
        <text x="75" y="210" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">e₁ · e₂ = 0, ‖eᵢ‖ = 1</text>
      </g>
    </svg>
  );
}

// ── SVG 4: QR structure ───────────────────────────────────────────────────
function QRStructureSVG() {
  return (
    <svg width="100%" viewBox="0 0 560 200" style={{ display: 'block', margin: '1rem 0' }}>
      {/* A matrix */}
      <g transform="translate(20,30)">
        <text x="40" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">A</text>
        <rect x="0" y="10" width="80" height="120" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
        {[0,1,2,3].map(r => [0,1].map(c => (
          <rect key={`a${r}${c}`} x={8+c*36} y={18+r*28} width="30" height="22" rx="3" fill="rgba(74,158,237,0.18)" stroke="#4a9eed" strokeWidth="0.5"/>
        )))}
        <text x="40" y="145" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">m × n</text>
      </g>
      <text x="115" y="90" textAnchor="middle" fontSize="22" fill="var(--text-secondary)">=</text>
      {/* Q matrix */}
      <g transform="translate(130,30)">
        <text x="40" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Q</text>
        <rect x="0" y="10" width="80" height="120" rx="4" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5"/>
        {[0,1,2,3].map(r => [0,1].map(c => (
          <rect key={`q${r}${c}`} x={8+c*36} y={18+r*28} width="30" height="22" rx="3" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="0.5"/>
        )))}
        <text x="40" y="145" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">m × n</text>
        <text x="40" y="160" textAnchor="middle" fontSize="10" fill={color}>QᵀQ = I</text>
      </g>
      <text x="225" y="90" textAnchor="middle" fontSize="22" fill="var(--text-secondary)">·</text>
      {/* R matrix */}
      <g transform="translate(240,30)">
        <text x="40" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill="#4a9eed">R</text>
        <rect x="0" y="10" width="80" height="80" rx="4" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
        {/* upper triangular pattern */}
        {[0,1].map(r => [0,1].map(c => c >= r ? (
          <rect key={`r${r}${c}`} x={8+c*36} y={18+r*28} width="30" height="22" rx="3" fill="rgba(74,158,237,0.20)" stroke="#4a9eed" strokeWidth="0.5"/>
        ) : (
          <rect key={`r0${r}${c}`} x={8+c*36} y={18+r*28} width="30" height="22" rx="3" fill="rgba(0,0,0,0.03)" stroke="var(--text-secondary)" strokeWidth="0.5"/>
        )))}
        <text x="40" y="105" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">n × n</text>
        <text x="40" y="120" textAnchor="middle" fontSize="10" fill="#4a9eed">triangular sup.</text>
      </g>
      {/* legend */}
      <g transform="translate(360,40)">
        <rect x="0" y="0" width="180" height="140" rx="8" fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1"/>
        <text x="90" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Propriedades</text>
        <text x="10" y="42" fontSize="11" fill="var(--text-primary)">Q: colunas ortonormais</text>
        <text x="10" y="60" fontSize="11" fill="var(--text-primary)">QᵀQ = I (mas QQᵀ ≠ I)</text>
        <text x="10" y="78" fontSize="11" fill="var(--text-primary)">R: triangular superior</text>
        <text x="10" y="96" fontSize="11" fill="var(--text-primary)">R invertível se A f.c.</text>
        <text x="10" y="114" fontSize="11" fill="var(--text-primary)">Via Gram-Schmidt ou</text>
        <text x="10" y="132" fontSize="11" fill="var(--text-primary)">reflexões Householder</text>
      </g>
    </svg>
  );
}

// ── SVG 5: Least Squares geometric picture ───────────────────────────────
function LeastSquaresSVG() {
  return (
    <svg width="100%" viewBox="0 0 560 260" style={{ display: 'block', margin: '1rem 0' }}>
      <g transform="translate(20,20)">
        <text x="190" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Geometria dos Mínimos Quadrados</text>
        {/* col(A) plane */}
        <ellipse cx="190" cy="180" rx="160" ry="35" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5"/>
        <text x="365" y="185" fontSize="12" fill={color} fontWeight="600">Col(A)</text>
        {/* b vector */}
        <line x1="190" y1="180" x2="280" y2="55" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#lsb)"/>
        <text x="286" y="52" fontSize="13" fill="#4a9eed" fontWeight="700">b</text>
        {/* Ax_hat projection */}
        <line x1="190" y1="180" x2="270" y2="168" stroke={color} strokeWidth="2.5" markerEnd="url(#lsp)"/>
        <text x="278" y="166" fontSize="12" fill={color} fontWeight="700">Ax̂</text>
        {/* residual */}
        <line x1="270" y1="168" x2="280" y2="55" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#lsr)"/>
        <text x="286" y="115" fontSize="12" fill="#4a9eed" fontWeight="600">r = b−Ax̂</text>
        {/* right angle at Ax_hat */}
        <polyline points="280,167 281,157 271,158" fill="none" stroke="#4a9eed" strokeWidth="1.5"/>
        <defs>
          <marker id="lsb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4a9eed"/></marker>
          <marker id="lsp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill={color}/></marker>
          <marker id="lsr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4a9eed"/></marker>
        </defs>
        <text x="50" y="234" fontSize="11" fill="var(--text-secondary)">r ⊥ Col(A)  ⟺  Aᵀr = 0  ⟺  AᵀAx̂ = Aᵀb</text>
      </g>
    </svg>
  );
}

// ── SVG 6: QR vs Normal Equations condition number ───────────────────────
function QRvNormalSVG() {
  return (
    <svg width="100%" viewBox="0 0 560 190" style={{ display: 'block', margin: '1rem 0' }}>
      {/* Normal Equations box */}
      <g transform="translate(20,20)">
        <rect x="0" y="0" width="240" height="150" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
        <text x="120" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill="#4a9eed">Equações Normais</text>
        <text x="120" y="46" textAnchor="middle" fontSize="11" fill="var(--text-primary)">AᵀA x̂ = Aᵀb</text>
        <text x="120" y="66" textAnchor="middle" fontSize="11" fill="var(--text-primary)">κ(AᵀA) = κ(A)²</text>
        <text x="10" y="90" fontSize="11" fill="var(--text-secondary)">• Rápido mas numericamente</text>
        <text x="10" y="108" fontSize="11" fill="var(--text-secondary)">  instável para κ(A) grande</text>
        <text x="10" y="126" fontSize="11" fill="var(--text-secondary)">• Perde metade dos dígitos</text>
        <text x="10" y="144" fontSize="11" fill="var(--text-secondary)">  significativos</text>
      </g>
      <text x="278" y="98" textAnchor="middle" fontSize="28" fill="var(--text-secondary)">vs</text>
      {/* QR box */}
      <g transform="translate(300,20)">
        <rect x="0" y="0" width="240" height="150" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5"/>
        <text x="120" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Via QR</text>
        <text x="120" y="46" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Rx̂ = Qᵀb</text>
        <text x="120" y="66" textAnchor="middle" fontSize="11" fill="var(--text-primary)">κ(R) = κ(A)</text>
        <text x="10" y="90" fontSize="11" fill="var(--text-secondary)">• Numericamente estável</text>
        <text x="10" y="108" fontSize="11" fill="var(--text-secondary)">• Mantém todos os dígitos</text>
        <text x="10" y="126" fontSize="11" fill="var(--text-secondary)">• Preferido em produção</text>
        <text x="10" y="144" fontSize="11" fill={color} fontWeight="600">• np.linalg.lstsq usa QR/SVD</text>
      </g>
    </svg>
  );
}

// ── SVG 7: Linear Regression fitted line ────────────────────────────────
function RegressionSVG() {
  const pts = [[30,155],[80,120],[130,100],[180,90],[230,70],[280,55],[320,45]];
  const fitY = x => 170 - x * 0.4;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', margin: '1rem 0' }}>
    <svg width="100%" viewBox="0 0 400 220" style={{ display: 'block', flex: '1 1 300px', minWidth: 0 }}>
      <g transform="translate(30,20)">
        <text x="175" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Regressão Linear como Mínimos Quadrados</text>
        {/* axes */}
        <line x1="10" y1="175" x2="360" y2="175" stroke="var(--text-secondary)" strokeWidth="1.5"/>
        <line x1="10" y1="175" x2="10" y2="10" stroke="var(--text-secondary)" strokeWidth="1.5"/>
        <text x="370" y="178" fontSize="12" fill="var(--text-secondary)">x</text>
        <text x="12" y="8" fontSize="12" fill="var(--text-secondary)">y</text>
        {/* fitted line */}
        <line x1="10" y1={fitY(10)} x2="340" y2={fitY(340)} stroke={color} strokeWidth="2.5"/>
        <text x="345" y={fitY(340)} fontSize="11" fill={color} fontWeight="600">ŷ=β₀+β₁x</text>
        {/* data points + residuals */}
        {pts.map(([px, py], i) => (
          <g key={i}>
            <line x1={px} y1={py} x2={px} y2={fitY(px)} stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="3,2"/>
            <circle cx={px} cy={py} r="4" fill="#4a9eed"/>
          </g>
        ))}
        <text x="175" y="198" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">resíduos (vermelho) ⊥ Col(X)</text>
      </g>
    </svg>
    <div style={{ flex: '0 1 180px', background: 'rgba(74,158,237,0.10)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.9rem 1rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
      <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', textAlign: 'center' }}>Fórmulas</div>
      <div style={{ marginBottom: '0.35rem' }}><InlineMath math="\hat{\beta} = (X^TX)^{-1}X^Ty" /></div>
      <div style={{ marginBottom: '0.35rem' }}><InlineMath math="H = X(X^TX)^{-1}X^T" /></div>
      <div style={{ marginBottom: '0.35rem' }}><InlineMath math="\hat{y} = Hy" /></div>
      <div style={{ marginBottom: '0.35rem' }}><InlineMath math="R^2 = 1 - \|r\|^2/\|y-\bar{y}\|^2" /></div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>H = hat matrix</div>
    </div>
    </div>
  );
}

// ── SVG 8: Bias-Variance tradeoff for Ridge ───────────────────────────────
function RidgeSVG() {
  const W = 400, H = 160;
  const lambdas = [0,20,40,60,80,100,120,140,160,180,200];
  const bias2 = l => 5 + l * l * 0.004;
  const variance = l => 90 * Math.exp(-l * 0.025);
  const total = l => bias2(l) + variance(l);
  const scaleX = l => 20 + (l / 200) * (W - 40);
  const scaleY = v => H - 10 - (v / 100) * (H - 20);

  const pathFor = fn => lambdas.map((l, i) =>
    `${i === 0 ? 'M' : 'L'}${scaleX(l)},${scaleY(fn(l))}`
  ).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 560 ${H + 60}`} style={{ display: 'block', margin: '1rem 0' }}>
      <g transform="translate(20,30)">
        <text x="200" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Ridge: Tradeoff Bias²-Variância</text>
        <line x1="20" y1={H} x2={W} y2={H} stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="20" y1="10" x2="20" y2={H} stroke="var(--text-secondary)" strokeWidth="1"/>
        <text x={W + 5} y={H + 4} fontSize="11" fill="var(--text-secondary)">λ</text>
        <text x="20" y="8" fontSize="10" fill="var(--text-secondary)">Erro</text>
        {/* variance */}
        <path d={pathFor(variance)} fill="none" stroke="#4a9eed" strokeWidth="2"/>
        <text x={scaleX(20)} y={scaleY(variance(10)) - 5} fontSize="11" fill="#4a9eed">Variância</text>
        {/* bias2 */}
        <path d={pathFor(bias2)} fill="none" stroke="#4a9eed" strokeWidth="2"/>
        <text x={scaleX(180)} y={scaleY(bias2(180)) - 5} fontSize="11" fill="#4a9eed">Bias²</text>
        {/* total */}
        <path d={pathFor(total)} fill="none" stroke={color} strokeWidth="2.5" strokeDasharray="6,3"/>
        <text x={scaleX(125)} y={scaleY(total(100)) - 8} fontSize="11" fill={color} fontWeight="700">Total</text>
        {/* optimal marker */}
        <line x1={scaleX(80)} y1="10" x2={scaleX(80)} y2={H} stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3"/>
        <text x={scaleX(80)} y={H + 16} textAnchor="middle" fontSize="10" fill="#4a9eed">λ*</text>
      </g>
    </svg>
  );
}

// ── SVG 9: OMP steps ─────────────────────────────────────────────────────
function OMPStepsSVG() {
  return (
    <svg width="100%" viewBox="0 0 560 220" style={{ display: 'block', margin: '1rem 0' }}>
      {/* Step boxes */}
      {[
        { x: 10, label: 'Init', desc1: 'r⁰ = b', desc2: 'S = ∅', col: '#94a3b8' },
        { x: 185, label: 'Iter 1', desc1: 'j* = argmax|aⱼᵀr|', desc2: 'S = {j*}, solve LS', col: '#4a9eed' },
        { x: 360, label: 'Iter 2', desc1: 'update r = b - Ax̂', desc2: 'adicionar próximo j*', col: color },
      ].map(({ x, label, desc1, desc2, col }) => (
        <g key={x} transform={`translate(${x},30)`}>
          <rect x="0" y="0" width="165" height="90" rx="8" fill={`rgba(0,0,0,0.03)`} stroke={col} strokeWidth="1.5"/>
          <text x="82" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={col}>{label}</text>
          <text x="82" y="46" textAnchor="middle" fontSize="10" fill="var(--text-primary)">{desc1}</text>
          <text x="82" y="64" textAnchor="middle" fontSize="10" fill="var(--text-primary)">{desc2}</text>
        </g>
      ))}
      {/* arrows */}
      <line x1="178" y1="75" x2="183" y2="75" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#omp1)"/>
      <line x1="352" y1="75" x2="357" y2="75" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#omp2)"/>
      <defs>
        <marker id="omp1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)"/></marker>
        <marker id="omp2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)"/></marker>
      </defs>
      {/* 2D illustration */}
      <g transform="translate(150,140)">
        <text x="130" y="0" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>OMP: selecciona átomo mais correlacionado com r</text>
        <text x="130" y="18" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">‖b - Ax̂‖ decresce monotonamente; pára quando ‖r‖ {'<'} ε</text>
      </g>
    </svg>
  );
}

// ── SVG 10: Fourier basis ────────────────────────────────────────────────
function FourierBasisSVG() {
  const N = 80;
  const xs = Array.from({ length: N }, (_, i) => i);
  const pathSin = (k) => xs.map((i, idx) => {
    const x = 10 + (i / N) * 120;
    const y = 30 - 22 * Math.sin(2 * Math.PI * k * i / N);
    return `${idx === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ');

  return (
    <svg width="100%" viewBox="0 0 560 100" style={{ display: 'block', margin: '1rem 0' }}>
      {[1, 2, 3, 4].map((k, ki) => (
        <g key={k} transform={`translate(${ki * 135 + 10},20)`}>
          <text x="65" y="0" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>k = {k}</text>
          <line x1="10" y1="30" x2="130" y2="30" stroke="var(--text-secondary)" strokeWidth="1"/>
          <path d={pathSin(k)} fill="none" stroke={color} strokeWidth="1.8"/>
          <text x="65" y="72" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">sin(2πk·/N)</text>
        </g>
      ))}
    </svg>
  );
}

// ── SVG 11: QR eigenvalue convergence ────────────────────────────────────
function QREigenSVG() {
  const steps = [
    [8.2, 3.1, -0.5, 0.1],
    [9.6, 2.1, -0.3, 0.0],
    [10.8, 1.2, -0.1, 0.0],
    [11.5, 0.4, 0.0, 0.0],
    [11.9, 0.1, 0.0, 0.0],
  ];
  const colors = [color, '#4a9eed', '#4a9eed', '#4a9eed'];
  const scaleX = i => 30 + i * 90;
  const scaleY = v => 160 - (v / 12) * 130;

  return (
    <svg width="100%" viewBox="0 0 560 200" style={{ display: 'block', margin: '1rem 0' }}>
      <g transform="translate(20,20)">
        <text x="200" y="0" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Convergência do Algoritmo QR</text>
        <line x1="20" y1="165" x2="430" y2="165" stroke="var(--text-secondary)" strokeWidth="1"/>
        <line x1="20" y1="10" x2="20" y2="165" stroke="var(--text-secondary)" strokeWidth="1"/>
        <text x="440" y="168" fontSize="11" fill="var(--text-secondary)">iter</text>
        <text x="20" y="8" fontSize="10" fill="var(--text-secondary)">diag(A)</text>
        {colors.map((c, di) => (
          <g key={di}>
            <path
              d={steps.map((row, si) => `${si === 0 ? 'M' : 'L'}${scaleX(si)},${scaleY(row[di])}`).join(' ')}
              fill="none" stroke={c} strokeWidth="2"/>
            {steps.map((row, si) => (
              <circle key={si} cx={scaleX(si)} cy={scaleY(row[di])} r="3" fill={c}/>
            ))}
          </g>
        ))}
        {/* labels */}
        {[0,1,2,3,4].map(i => (
          <text key={i} x={scaleX(i)} y="178" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{i}</text>
        ))}
        <text x="350" y="50" fontSize="11" fill={color}>λ₁</text>
        <text x="350" y="110" fontSize="11" fill="#4a9eed">λ₂</text>
        <text x="350" y="155" fontSize="11" fill="#4a9eed">λ₃,₄→0</text>
      </g>
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function LA7() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16}/> Voltar a Álgebra Linear</Link>

      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Ortogonalidade &amp; Mínimos Quadrados</h1>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Ortogonalidade</h2>
        <p style={S.p}>
          Dois vectores <strong>u</strong> e <strong>v</strong> são <em>ortogonais</em> se e só se o seu
          produto interno for zero: <strong>u · v = 0</strong>. Geometricamente, formam um ângulo de 90°.
          A ortogonalidade generaliza a perpendicularidade para espaços de dimensão arbitrária, incluindo
          espaços funcionais (L², séries de Fourier) e espaços de matrizes (Frobenius).
        </p>
        <OrthogonalitySVG />
        <div style={S.highlight}>
          <strong>Produto interno:</strong> <InlineMath math="u \cdot v = u_1v_1 + u_2v_2 + \cdots + u_nv_n = u^Tv" />
          <br/>
          <strong>Norma:</strong> <InlineMath math="\|u\| = \sqrt{u \cdot u} = \sqrt{u_1^2 + \cdots + u_n^2}" />
          <br/>
          <strong>Ortogonal:</strong> <InlineMath math="u \cdot v = 0" /> &nbsp;|&nbsp; <strong>Ortonormal:</strong> <InlineMath math="u \cdot v = 0" /> e <InlineMath math="\|u\| = \|v\| = 1" />
        </div>
        <h3 style={S.h3}>Conjuntos Ortogonais e Independência Linear</h3>
        <p style={S.p}>
          Um conjunto de vectores não nulos {'{v₁, …, vₖ}'} é ortogonal se vᵢ · vⱼ = 0 para todo i ≠ j.
          <strong> Todo conjunto ortogonal é linearmente independente.</strong> A prova é directa: se
          c₁v₁ + … + cₖvₖ = 0, tomamos o produto interno com vᵢ e obtemos cᵢ‖vᵢ‖² = 0, logo cᵢ = 0.
        </p>
        <h3 style={S.h3}>Complemento Ortogonal</h3>
        <p style={S.p}>
          O <em>complemento ortogonal</em> de um subespaço W é W⊥ = {'{'} v ∈ Rⁿ : v · w = 0 para todo w ∈ W {'}'}.
          Temos Rⁿ = W ⊕ W⊥ (decomposição ortogonal directa). Dimensão: dim(W) + dim(W⊥) = n.
          Importante: (Col A)⊥ = Nul(Aᵀ) e (Nul A)⊥ = Col(Aᵀ).
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Subespaço</th>
              <th style={S.th}>Complemento Ortogonal</th>
              <th style={S.th}>Relevância</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Col(A)','Nul(Aᵀ)','resíduos de mínimos quadrados'],
              ['Nul(A)','Col(Aᵀ)','solução de norma mínima'],
              ['Row(A)','Nul(A)','componente projectável'],
            ].map(([a,b,c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Projecção Ortogonal</h2>
        <p style={S.p}>
          A projecção ortogonal de v sobre u decompõe v numa componente paralela a u e numa componente
          perpendicular. É a operação fundamental que liga ortogonalidade a aproximação óptima:
          a projecção é o ponto de u mais próximo de v.
        </p>
        <ProjectionSVG />
        <div style={S.highlight}>
          <strong>Projecção sobre vector:</strong> <InlineMath math="\text{proj}_u(v) = \frac{v \cdot u}{\|u\|^2} u" />
          <br/>
          <strong>Projecção sobre subespaço Col(A):</strong> <InlineMath math="P = A(A^TA)^{-1}A^T" />
          <br/>
          <strong>Componente perpendicular:</strong> <InlineMath math="v^{\perp} = v - Pv = (I-P)v" />
        </div>
        <h3 style={S.h3}>Matriz de Projecção — Propriedades Fundamentais</h3>
        <p style={S.p}>
          A matriz de projecção P = A(AᵀA)⁻¹Aᵀ satisfaz duas propriedades chave que a caracterizam
          completamente como projecção ortogonal:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Equação</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Idempotência','P² = P','projectar duas vezes = projectar uma vez'],
              ['Simetria','Pᵀ = P','projecção ortogonal (não oblíqua)'],
              ['Complementar','(I−P)² = I−P','I−P projecta sobre W⊥'],
              ['Eigenvalores','λ ∈ {0,1}','subespaços invariantes são W e W⊥'],
            ].map(([a,b,c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}><code>{b}</code></td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Caso Especial: Q com Colunas Ortonormais</h3>
        <p style={S.p}>
          Se A tem colunas ortonormais (QᵀQ = I), então AᵀA = I e a projecção simplifica para
          P = QQᵀ. Não é preciso inverter qualquer matriz — extremamente eficiente computacionalmente.
          Coordenadas em base ortonormal: cᵢ = qᵢᵀ·v.
        </p>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Processo de Gram-Schmidt</h2>
        <p style={S.p}>
          Dado um conjunto de vectores linearmente independentes {'{'} x₁, x₂, …, xₙ {'}'}, o processo
          de Gram-Schmidt constrói uma base ortonormal {'{'} e₁, e₂, …, eₙ {'}'} que abrange o mesmo
          subespaço. É o algoritmo fundamental para construir bases ortonormais e realizar a decomposição QR.
        </p>
        <GramSchmidtSVG />
        <div style={S.highlight}>
          <strong>Algoritmo clássico:</strong>
          <BlockMath math="u_1 = x_1 \;\rightarrow\; e_1 = u_1/\|u_1\|" />
          <BlockMath math="u_2 = x_2 - (x_2\cdot e_1)e_1 \;\rightarrow\; e_2 = u_2/\|u_2\|" />
          <BlockMath math="u_3 = x_3 - (x_3\cdot e_1)e_1 - (x_3\cdot e_2)e_2 \;\rightarrow\; e_3 = u_3/\|u_3\|" />
          <BlockMath math="u_k = x_k - \sum_{i=1}^{k-1} (x_k\cdot e_i)\, e_i \;\rightarrow\; e_k = u_k/\|u_k\|" />
        </div>
        <h3 style={S.h3}>Gram-Schmidt Modificado (Numericamente Estável)</h3>
        <p style={S.p}>
          A versão clássica acumula erros de arredondamento porque subtrai todas as projecções de uma
          vez. O Gram-Schmidt modificado subtrai cada projecção sequencialmente, após normalizar, o que
          produz ortogonalidade muito superior em aritmética de ponto flutuante:
        </p>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Decomposição QR</h2>
        <p style={S.p}>
          A decomposição QR factoriza A = QR onde Q tem colunas ortonormais e R é triangular superior.
          É uma das factorizações mais importantes da álgebra linear numérica, usada em mínimos
          quadrados, cálculo de autovalores e resolução de sistemas lineares.
        </p>
        <QRStructureSVG />
        <h3 style={S.h3}>Via Reflexões de Householder</h3>
        <p style={S.p}>
          As reflexões de Householder H = I − 2vvᵀ/vᵀv são matrizes ortogonais (Hᵀ = H, H² = I)
          que reflectem vectores sobre o hiperplano perpendicular a v. Escolhendo v adequadamente,
          cada reflexão zera os elementos abaixo da diagonal numa coluna. A composição de n reflexões
          produz Q = H₁H₂…Hₙ com melhor estabilidade numérica que Gram-Schmidt.
        </p>
        <h3 style={S.h3}>Comparação Householder vs Gram-Schmidt</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Complexidade</th>
              <th style={S.th}>Estabilidade</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['GS Clássico','O(mn²)','fraca','educação, esboços'],
              ['GS Modificado','O(mn²)','boa','iterações de Krylov'],
              ['Householder','O(mn²)','excelente','np.linalg.qr'],
              ['Givens Rotations','O(mn²)','excelente','matrizes esparsas'],
            ].map(([a,b,c,d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Mínimos Quadrados</h2>
        <p style={S.p}>
          Quando o sistema Ax = b não tem solução (m {'>'} n, sistema sobredeterminado), procuramos
          x̂ que minimize o erro quadrático ‖Ax − b‖². A solução geométrica: projectar b sobre Col(A)
          e resolver o sistema com a projecção.
        </p>
        <LeastSquaresSVG />
        <div style={S.highlight}>
          <strong>Equações Normais:</strong> <InlineMath math="A^TA\,\hat{x} = A^Tb" />
          <br/>
          <strong>Solução (se AᵀA invertível):</strong> <InlineMath math="\hat{x} = (A^TA)^{-1} A^Tb" />
          <br/>
          <strong>Resíduo:</strong> <InlineMath math="r = b - A\hat{x} \perp \text{Col}(A)" /> &nbsp;⟺&nbsp; <InlineMath math="A^Tr = 0" />
        </div>
        <h3 style={S.h3}>Derivação via Cálculo</h3>
        <p style={S.p}>
          Minimizar f(x) = ‖Ax − b‖² = (Ax−b)ᵀ(Ax−b) = xᵀAᵀAx − 2bᵀAx + bᵀb.
          Tomando o gradiente: ∇f = 2AᵀAx − 2Aᵀb = 0, que dá exactamente as equações normais.
          A Hessiana é 2AᵀA (positiva semi-definida), confirmando que é mínimo global.
        </p>
        <h3 style={S.h3}>Unicidade da Solução</h3>
        <p style={S.p}>
          A solução de mínimos quadrados x̂ é única se e só se as colunas de A são linearmente
          independentes (Nul(A) = {'{0}'}), equivalente a AᵀA ser invertível. Se A não tem colunas
          l.i., existem infinitas soluções; a de norma mínima é dada pela pseudoinversa: x̂ = A⁺b.
        </p>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Solução de Mínimos Quadrados via QR</h2>
        <p style={S.p}>
          A decomposição QR transforma as equações normais num sistema triangular, eliminando a
          necessidade de calcular AᵀA explicitamente. Esta abordagem é numericamente superior.
        </p>
        <QRvNormalSVG />
        <div style={S.highlight}>
          <strong>Derivação:</strong> <InlineMath math="A=QR \;\Longrightarrow\; A^TA\hat{x}=A^Tb" />
          <br/>
          <InlineMath math="R^TQ^TQR\hat{x} = R^TQ^Tb \;\Longrightarrow\; R^TR\hat{x} = R^TQ^Tb \;\Longrightarrow\;" /> <strong><InlineMath math="R\hat{x} = Q^Tb" /></strong>
          <br/>
          Sistema triangular: resolver por substituição retroactiva em O(n²)
        </div>
        <h3 style={S.h3}>Algoritmo Completo via QR</h3>
        <h3 style={S.h3}>Actualizações de Posto 1 (QR Update)</h3>
        <p style={S.p}>
          Quando adicionamos ou removemos uma observação de A, podemos actualizar a decomposição QR
          existente em O(n²) em vez de recalcular de raiz em O(mn²). Isto é crucial em aprendizagem
          online e análise de janela deslizante. A biblioteca scipy fornece scipy.linalg.qr_update.
        </p>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Regressão Linear como Mínimos Quadrados</h2>
        <p style={S.p}>
          A regressão linear é mínimos quadrados com A substituído pela matriz de design X, onde cada
          linha é um ponto de dados com as suas features. A solução β̂ minimiza a soma dos quadrados
          dos resíduos — exatamente a projecção ortogonal de y sobre Col(X).
        </p>
        <RegressionSVG />
        <h3 style={S.h3}>Matriz de Design e Estimador de Mínimos Quadrados</h3>
        <div style={S.highlight}>
          <InlineMath math="X \in \mathbb{R}^{n\times p}" />: linhas são observações, colunas são features (inclui coluna de 1s para intercept)
          <br/>
          <InlineMath math="\hat{\beta} = (X^TX)^{-1}X^Ty" /> &nbsp;(estimador OLS — Ordinary Least Squares)
          <br/>
          <InlineMath math="H = X(X^TX)^{-1}X^T" /> &nbsp;(hat matrix: <InlineMath math="Hy=\hat{y}" /> projecta y sobre Col(X))
          <br/>
          <InlineMath math="R^2 = 1 - \|r\|^2 / \|y-\bar{y}\|^2" /> &nbsp;(coeficiente de determinação)
        </div>
        <h3 style={S.h3}>Interpretação Geométrica</h3>
        <p style={S.p}>
          ŷ = Hy é a projecção ortogonal de y sobre o subespaço gerado pelas features X.
          Os resíduos r = y − ŷ = (I−H)y são perpendiculares a toda coluna de X.
          R² mede a fracção da variância de y explicada pelo modelo: 0 ≤ R² ≤ 1.
        </p>
        <h3 style={S.h3}>Regressão Múltipla com Sklearn vs NumPy</h3>
        <h3 style={S.h3}>Propriedades Estatísticas do OLS</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Condição</th>
              <th style={S.th}>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Não enviesado','E[ε]=0, X fixo','E[β̂] = β'],
              ['BLUE (Gauss-Markov)','ε i.i.d., Var=σ²I','variância mínima entre estimadores lineares'],
              ['MLE','ε ~ N(0,σ²I)','β̂ OLS = β̂ MLE'],
              ['Consistência','n→∞','β̂ → β em probabilidade'],
            ].map(([a,b,c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Mínimos Quadrados Regularizados</h2>
        <p style={S.p}>
          Quando X é mal condicionado ou p ≥ n, OLS sobreajusta. A regularização adiciona um termo
          de penalização ao objectivo, controlando a complexidade do modelo e o tradeoff bias-variância.
        </p>
        <RidgeSVG />
        <h3 style={S.h3}>Ridge Regression (L2)</h3>
        <div style={S.highlight}>
          <strong>Objectivo Ridge:</strong> <InlineMath math="\min \|X\beta - y\|^2 + \lambda\|\beta\|^2" />
          <br/>
          <strong>Solução fechada:</strong> <InlineMath math="\hat{\beta}_{ridge} = (X^TX + \lambda I)^{-1}X^Ty" />
          <br/>
          <strong>Vantagem:</strong> <InlineMath math="X^TX + \lambda I" /> é sempre invertível para λ {'>'} 0, mesmo se XᵀX é singular
        </div>
        <p style={S.p}>
          A interpretação como mínimos quadrados: equivale a aumentar X com √λ·I abaixo e adicionar
          zeros ao vector y. Assim β̂_ridge é também uma solução de mínimos quadrados — pode usar-se QR!
          Em termos de SVD: β̂_ridge = Σᵢ (σᵢ/(σᵢ²+λ)) uᵢvᵢᵀ y — contrai os coeficientes suaves.
        </p>
        <h3 style={S.h3}>Lasso Regression (L1)</h3>
        <div style={S.highlight}>
          <strong>Objectivo Lasso:</strong> <InlineMath math="\min \|X\beta - y\|^2 + \lambda\|\beta\|_1" />
          <br/>
          <strong>Sem solução fechada</strong> — resolve-se via programação convexa (ADMM, coordinate descent)
          <br/>
          <strong>Esparsidade:</strong> Lasso tende a zerar coeficientes (selecção de variáveis automática)
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Penalização</th>
              <th style={S.th}>Solução</th>
              <th style={S.th}>Efeito</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['OLS','nenhuma','(XᵀX)⁻¹Xᵀy','não enviesado, alta variância'],
              ['Ridge','λ‖β‖²','(XᵀX+λI)⁻¹Xᵀy','contrai coefs uniformemente'],
              ['Lasso','λ‖β‖₁','coord. descent','esparso, selecção de variáveis'],
              ['Elastic Net','λ₁‖β‖₁+λ₂‖β‖²','coord. descent','esparso + estável'],
            ].map(([a,b,c,d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}><code>{c}</code></td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 9 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Orthogonal Matching Pursuit</h2>
        <p style={S.p}>
          OMP é um algoritmo ganancioso para reconstrução esparsa: dado um dicionário A e observação b,
          encontrar a representação mais esparsa Ax ≈ b. É mais simples que Lasso mas fornece
          garantias teóricas sob condições de esparsidade (RIP — Restricted Isometry Property).
        </p>
        <OMPStepsSVG />
        <div style={S.highlight}>
          <strong>OMP — Algoritmo:</strong>
          <br/>
          1. Inicializar: <InlineMath math="r^0 = b,\ S = \emptyset,\ \hat{x} = 0" />
          <br/>
          2. Encontrar átomo: <InlineMath math="j^* = \arg\max_j |a_j^T r^{(t)}|" />
          <br/>
          3. Actualizar suporte: <InlineMath math="S \leftarrow S \cup \{j^*\}" />
          <br/>
          4. Resolver LS: <InlineMath math="\hat{x}_S = \arg\min \|A_S x - b\|^2" />
          <br/>
          5. Actualizar resíduo: <InlineMath math="r^{(t+1)} = b - A_S\hat{x}_S" />
          <br/>
          6. Repetir até <InlineMath math="\|r\| < \varepsilon" /> ou |S| = k
        </div>
        <h3 style={S.h3}>Ligação ao Compressed Sensing</h3>
        <p style={S.p}>
          O teorema fundamental de Candes-Donoho (2006): se x tem apenas k coeficientes não nulos e
          A satisfaz RIP de ordem 2k, então OMP e Lasso recuperam x exactamente a partir de apenas
          m = O(k log(n/k)) medidas — muito menos que n. Aplicações: MRI comprimido, aquisição
          de sinal sub-Nyquist, machine learning com dicionários atómicos.
        </p>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 10 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Bases Ortonormais Especiais</h2>
        <p style={S.p}>
          Diferentes bases ortonormais são óptimas para diferentes tipos de sinais. A escolha da base
          determina se a representação é esparsa (poucos coeficientes grandes) ou densa. Bases
          ortonormais tornam a análise e síntese operações inversas com a mesma matriz transposta.
        </p>
        <FourierBasisSVG />
        <div style={S.highlight}>
          <strong>Propriedade fundamental:</strong> Se {'{q₁,…,qₙ}'} é base ortonormal de ℝⁿ, então
          <BlockMath math="v = (v\cdot q_1)q_1 + (v\cdot q_2)q_2 + \cdots + (v\cdot q_n)q_n \quad \text{(síntese)}" />
          <BlockMath math="c_i = v\cdot q_i \quad \text{(análise — coordenadas sem resolver sistema linear!)}" />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Base</th>
              <th style={S.th}>Vectores base</th>
              <th style={S.th}>Esparsa para</th>
              <th style={S.th}>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Fourier DFT','exp(2πijk/N)','sinais periódicos suaves','áudio, comunicações'],
              ['DCT-II','cos(π(n+0.5)k/N)','imagens naturais','JPEG, MP3'],
              ['Haar Wavelet','funções degrau multi-escala','bordas e transientes','JPEG2000, ECG'],
              ['Eigenvectors (PCA)','autovetores de covariância','dados de baixa dimensão','compressão, visualização'],
            ].map(([a,b,c,d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Porquê Bases Ortonormais Facilitam o Cálculo</h3>
        <p style={S.p}>
          Em base ortonormal, a matrix de Gram G = QᵀQ = I, pelo que coordenadas são meros produtos
          internos. A energia preserva-se: ‖v‖² = Σ cᵢ² (Teorema de Parseval). Transformações
          ortogonais têm inversa = transposta (O(n²) em vez de O(n³) para a inversa geral).
        </p>
      </div>

      <hr style={S.divider}/>

      {/* ── Section 11 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Algoritmo QR para Autovalores</h2>
        <p style={S.p}>
          O algoritmo QR é o método padrão para calcular autovalores de matrizes. A ideia genial:
          factorizar A = QR e definir A' = RQ = QᵀAQ — uma transformação ortogonal de similaridade
          que preserva autovalores. Iterando, A converge para forma triangular (ou diagonal se A simétrica).
        </p>
        <QREigenSVG />
        <div style={S.highlight}>
          <strong>Algoritmo QR básico:</strong>
          <br/>
          <InlineMath math="A_0 = A" />
          <br/>
          Para <InlineMath math="k = 0, 1, 2, \ldots" />: factorizar <InlineMath math="A_k = Q_kR_k" />, depois <InlineMath math="A_{k+1} = R_kQ_k" />
          <br/>
          Convergência: <InlineMath math="\text{diag}(A_k) \to" /> autovalores de A (se A simétrica: convergência quadrática)
        </div>
        <h3 style={S.h3}>Porquê Converge?</h3>
        <p style={S.p}>
          Aₖ₊₁ = RₖQₖ = Qₖᵀ(QₖRₖ)Qₖ = QₖᵀAₖQₖ, logo todas as Aₖ têm os mesmos autovalores.
          O mecanismo é equivalente à iteração de potência simultânea: as colunas do produto
          Q₁Q₂…Qₖ convergem para os autovetores de A. A velocidade de convergência depende da
          razão |λᵢ₊₁/λᵢ|.
        </p>
        <h3 style={S.h3}>QR com Shifts (Versão Prática)</h3>
        <p style={S.p}>
          O algoritmo prático usa shifts: (Aₖ − μₖI) = QₖRₖ, depois Aₖ₊₁ = RₖQₖ + μₖI.
          Com shift de Wilkinson, a convergência é cúbica perto dos autovalores. numpy usa LAPACK
          que implementa variantes altamente optimizadas deste algoritmo.
        </p>
      </div>
    </div>
  );
}
