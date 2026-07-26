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

// SVG 1: Three solution types in 2D
function SolutionTypesSVG() {
  return (
    <svg width="100%" viewBox="0 0 660 220" style={{ maxWidth: 660, display: 'block', margin: '1rem auto' }}>
      {/* Unique solution */}
      <rect x="10" y="10" width="200" height="200" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="110" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Solução Única</text>
      <line x1="30" y1="160" x2="190" y2="60" stroke={color} strokeWidth="2.5" />
      <line x1="30" y1="70" x2="190" y2="170" stroke="#4a9eed" strokeWidth="2.5" />
      <circle cx="110" cy="115" r="5" fill="#4a9eed" />
      <text x="122" y="119" fontSize="10" fill="var(--text-secondary)">x*</text>
      <text x="110" y="200" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">rank(A) = n</text>

      {/* No solution */}
      <rect x="230" y="10" width="200" height="200" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="330" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Sem Solução</text>
      <line x1="250" y1="80" x2="410" y2="80" stroke={color} strokeWidth="2.5" />
      <line x1="250" y1="130" x2="410" y2="130" stroke="#4a9eed" strokeWidth="2.5" />
      <text x="420" y="84" fontSize="10" fill={color}>L₁</text>
      <text x="420" y="134" fontSize="10" fill="#4a9eed">L₂</text>
      <text x="330" y="200" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">sistema inconsistente</text>

      {/* Infinite solutions */}
      <rect x="450" y="10" width="200" height="200" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="550" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Infinitas Soluções</text>
      <line x1="470" y1="160" x2="630" y2="60" stroke={color} strokeWidth="3.5" />
      <line x1="470" y1="160" x2="630" y2="60" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="520" cy="127" r="3" fill="#4a9eed" />
      <circle cx="560" cy="103" r="3" fill="#4a9eed" />
      <circle cx="590" cy="85" r="3" fill="#4a9eed" />
      <text x="550" y="200" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">rank(A) {'<'} n</text>
    </svg>
  );
}

// SVG 2: Gaussian elimination steps
function GaussianSVG() {
  const cellW = 52, cellH = 34;
  const matA = [
    ['2','1','-1','|','8'],
    ['-3','-1','2','|','-11'],
    ['-2','1','2','|','-3'],
  ];
  const matB = [
    ['2','1','-1','|','8'],
    ['0','0.5','0.5','|','1'],
    ['0','2','1','|','5'],
  ];
  const matC = [
    ['2','1','-1','|','8'],
    ['0','0.5','0.5','|','1'],
    ['0','0','−1','|','1'],
  ];

  function renderMatrix(data, ox, oy, pivotCols) {
    return data.map((row, ri) =>
      row.map((val, ci) => {
        const x = ox + ci * cellW;
        const y = oy + ri * cellH;
        const isPivot = pivotCols && pivotCols.includes(ci) && ri === ci;
        return (
          <g key={`${ri}-${ci}`}>
            {isPivot && <rect x={x+2} y={y+2} width={cellW-4} height={cellH-4} rx="4" fill="rgba(74,158,237,0.30)" />}
            <text x={x + cellW/2} y={y + cellH/2 + 5} textAnchor="middle" fontSize="12" fill={val === '|' ? 'var(--text-secondary)' : 'var(--text-primary)'} fontWeight={isPivot ? '700' : '400'}>
              {val}
            </text>
          </g>
        );
      })
    );
  }

  return (
    <svg width="100%" viewBox="0 0 900 180" style={{ maxWidth: 900, display: 'block', margin: '1rem auto' }}>
      <text x="10" y="22" fontSize="12" fontWeight="700" fill={color}>Passo 0 — Original</text>
      <rect x="10" y="30" width="260" height="108" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {renderMatrix(matA, 10, 30, [])}

      <text x="290" y="90" fontSize="22" fill={color} textAnchor="middle">→</text>
      <text x="290" y="108" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">R₂ R₃</text>

      <text x="320" y="22" fontSize="12" fontWeight="700" fill={color}>Passo 1 — Eliminar col 1</text>
      <rect x="320" y="30" width="260" height="108" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {renderMatrix(matB, 320, 30, [0])}

      <text x="600" y="90" fontSize="22" fill={color} textAnchor="middle">→</text>
      <text x="600" y="108" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">R₃</text>

      <text x="630" y="22" fontSize="12" fontWeight="700" fill={color}>REF Final</text>
      <rect x="630" y="30" width="260" height="108" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {renderMatrix(matC, 630, 30, [0, 1, 2])}
    </svg>
  );
}

// SVG 3: REF vs RREF before/after
function RREFComparisonSVG() {
  return (
    <svg width="100%" viewBox="0 0 580 180" style={{ maxWidth: 580, display: 'block', margin: '1rem auto' }}>
      <text x="140" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>REF</text>
      <rect x="10" y="32" width="260" height="130" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {/* REF matrix rows */}
      {[
        ['1','2','−1','3'],
        ['0','1','0.5','1'],
        ['0','0','1','2'],
      ].map((row, ri) => row.map((v, ci) => (
        <text key={`r${ri}${ci}`} x={30 + ci*58} y={68 + ri*36} textAnchor="middle" fontSize="13"
          fill={ci === ri ? color : 'var(--text-primary)'} fontWeight={ci === ri ? '700' : '400'}>
          {v}
        </text>
      )))}
      <text x="140" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Pivôs em destaque — não necessariamente 1</text>

      <text x="290" y="100" fontSize="24" fill={color} textAnchor="middle">⟹</text>
      <text x="290" y="118" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">retro-subst.</text>

      <text x="450" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>RREF</text>
      <rect x="310" y="32" width="260" height="130" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {[
        ['1','0','0','5'],
        ['0','1','0','0'],
        ['0','0','1','2'],
      ].map((row, ri) => row.map((v, ci) => (
        <text key={`f${ri}${ci}`} x={330 + ci*58} y={68 + ri*36} textAnchor="middle" fontSize="13"
          fill={ci === ri && ci < 3 ? color : 'var(--text-primary)'} fontWeight={ci === ri && ci < 3 ? '700' : '400'}>
          {v}
        </text>
      )))}
      <text x="450" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Pivôs = 1, coluna do pivô zerada acima e abaixo</text>
    </svg>
  );
}

// SVG 4: 3D planes
function PlanesSVG() {
  return (
    <svg width="100%" viewBox="0 0 660 210" style={{ maxWidth: 660, display: 'block', margin: '1rem auto' }}>
      {/* Unique: planes intersect at point */}
      <rect x="5" y="5" width="200" height="200" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="105" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Solução Única</text>
      <polygon points="20,170 100,60 185,150" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <polygon points="20,80 110,160 190,70" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
      <polygon points="50,180 105,50 170,130" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <circle cx="105" cy="115" r="5" fill="#4a9eed" />
      <text x="115" y="112" fontSize="9" fill="var(--text-secondary)">x*</text>
      <text x="105" y="198" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">3 planos → 1 ponto</text>

      {/* No solution */}
      <rect x="230" y="5" width="200" height="200" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="330" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Sem Solução</text>
      <polygon points="245,60 330,40 415,80 330,160" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.5" />
      <polygon points="245,90 330,70 415,110 330,190" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
      <line x1="250" y1="130" x2="410" y2="130" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5 3" />
      <text x="330" y="198" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">planos paralelos — sem cruzamento</text>

      {/* Infinite solutions */}
      <rect x="455" y="5" width="200" height="200" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="555" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Infinitas Soluções</text>
      <polygon points="470,80 555,50 635,100 555,170" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.5" />
      <polygon points="470,100 555,70 635,120 555,190" fill="rgba(74,158,237,0.08)" stroke="#4a9eed" strokeWidth="1.5" />
      <line x1="475" y1="115" x2="635" y2="115" stroke="#4a9eed" strokeWidth="2.5" />
      <circle cx="510" cy="115" r="3" fill="#4a9eed" />
      <circle cx="555" cy="115" r="3" fill="#4a9eed" />
      <circle cx="600" cy="115" r="3" fill="#4a9eed" />
      <text x="555" y="198" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">2 planos → reta inteira</text>
    </svg>
  );
}

// SVG 5: 4 fundamental subspaces
function FundamentalSubspacesSVG() {
  return (
    <svg width="100%" viewBox="0 0 580 260" style={{ maxWidth: 580, display: 'block', margin: '1rem auto' }}>
      {/* Domain R^n */}
      <rect x="20" y="30" width="220" height="200" rx="10" fill="rgba(74,158,237,0.06)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="130" y="55" textAnchor="middle" fontSize="13" fontWeight="700" fill="#4a9eed">Domínio ℝⁿ</text>

      {/* Row space */}
      <ellipse cx="130" cy="120" rx="75" ry="45" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="2" />
      <text x="130" y="116" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Espaço Linha</text>
      <text x="130" y="131" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">row(A), dim = r</text>

      {/* Null space */}
      <ellipse cx="130" cy="195" rx="65" ry="30" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="130" y="193" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Null(A)</text>
      <text x="130" y="207" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dim = n − r</text>

      {/* Codomain R^m */}
      <rect x="340" y="30" width="220" height="200" rx="10" fill="rgba(74,158,237,0.06)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="450" y="55" textAnchor="middle" fontSize="13" fontWeight="700" fill="#4a9eed">Contradomínio ℝᵐ</text>

      {/* Column space */}
      <ellipse cx="450" cy="120" rx="75" ry="45" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="2" />
      <text x="450" y="116" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Col(A)</text>
      <text x="450" y="131" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">espaço coluna, dim = r</text>

      {/* Left null space */}
      <ellipse cx="450" cy="195" rx="65" ry="30" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="450" y="193" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Null(Aᵀ)</text>
      <text x="450" y="207" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dim = m − r</text>

      {/* Arrow: A maps row space to col space */}
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={color} />
        </marker>
      </defs>
      <line x1="208" y1="110" x2="372" y2="110" stroke={color} strokeWidth="2" markerEnd="url(#arr)" />
      <text x="290" y="103" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">A</text>

      {/* Orthogonality indicators */}
      <text x="130" y="162" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">⊥</text>
      <text x="450" y="162" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">⊥</text>
    </svg>
  );
}

// SVG 6: Strang big picture (simplified)
function BigPictureSVG() {
  return (
    <svg width="100%" viewBox="0 0 640 280" style={{ maxWidth: 640, display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrowB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={color} />
        </marker>
        <marker id="arrowG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4a9eed" />
        </marker>
      </defs>

      {/* Left side domain */}
      <rect x="10" y="20" width="270" height="240" rx="12" fill="rgba(74,158,237,0.05)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="145" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">ℝⁿ — Domínio</text>

      <rect x="30" y="60" width="110" height="80" rx="8" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="85" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Espaço Linha</text>
      <text x="85" y="110" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">C(Aᵀ), dim r</text>

      <rect x="155" y="60" width="110" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="210" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">Null(A)</text>
      <text x="210" y="110" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dim n−r</text>

      <text x="145" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">x = x_r + x_n</text>
      <text x="145" y="190" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(parte row + null)</text>
      <text x="145" y="245" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Ax_n = 0, Ax_r ≠ 0</text>

      {/* Arrow A */}
      <line x1="285" y1="140" x2="355" y2="140" stroke={color} strokeWidth="2.5" markerEnd="url(#arrowB)" />
      <text x="320" y="132" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">A</text>
      <line x1="355" y1="160" x2="285" y2="160" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrowG)" />
      <text x="320" y="178" textAnchor="middle" fontSize="10" fill="#4a9eed">Aᵀ</text>

      {/* Right side codomain */}
      <rect x="360" y="20" width="270" height="240" rx="12" fill="rgba(74,158,237,0.05)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="495" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">ℝᵐ — Contradomínio</text>

      <rect x="380" y="60" width="110" height="80" rx="8" fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.5" />
      <text x="435" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Col(A)</text>
      <text x="435" y="110" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">C(A), dim r</text>

      <rect x="505" y="60" width="110" height="80" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="560" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">Null(Aᵀ)</text>
      <text x="560" y="110" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">dim m−r</text>

      <text x="495" y="175" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">b = Ax_r (proj em Col(A))</text>
      <text x="495" y="192" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">erro e ∈ Null(Aᵀ)</text>
      <text x="495" y="245" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ML: dados ∈ Col(A), erros ⊥ Col(A)</text>
    </svg>
  );
}

// SVG 7: LU Decomposition
function LUDecompSVG() {
  return (
    <svg width="100%" viewBox="0 0 600 160" style={{ maxWidth: 600, display: 'block', margin: '1rem auto' }}>
      {/* A matrix */}
      <rect x="10" y="20" width="130" height="120" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="75" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">A</text>
      {[['a','b','c'],['d','e','f'],['g','h','i']].map((row,ri) =>
        row.map((v,ci) => (
          <text key={`a${ri}${ci}`} x={30 + ci*36} y={72 + ri*28} textAnchor="middle" fontSize="12" fill="var(--text-primary)">{v}</text>
        ))
      )}

      <text x="160" y="85" textAnchor="middle" fontSize="20" fill={color}>=</text>

      {/* L matrix */}
      <rect x="180" y="20" width="130" height="120" rx="8" fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="1.5" />
      <text x="245" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>L (inferior)</text>
      {[['1','0','0'],['l₂₁','1','0'],['l₃₁','l₃₂','1']].map((row,ri) =>
        row.map((v,ci) => (
          <text key={`l${ri}${ci}`} x={200 + ci*38} y={72 + ri*28} textAnchor="middle" fontSize="11"
            fill={ci > ri ? 'rgba(74,158,237,0.25)' : (ci === ri ? '#4a9eed' : 'var(--text-primary)')}>{v}</text>
        ))
      )}

      <text x="330" y="85" textAnchor="middle" fontSize="20" fill={color}>×</text>

      {/* U matrix */}
      <rect x="350" y="20" width="130" height="120" rx="8" fill="rgba(74,158,237,0.06)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="415" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">U (superior)</text>
      {[['u₁₁','u₁₂','u₁₃'],['0','u₂₂','u₂₃'],['0','0','u₃₃']].map((row,ri) =>
        row.map((v,ci) => (
          <text key={`u${ri}${ci}`} x={370 + ci*38} y={72 + ri*28} textAnchor="middle" fontSize="11"
            fill={ci < ri ? 'rgba(74,158,237,0.20)' : (ci === ri ? '#4a9eed' : 'var(--text-primary)')}>{v}</text>
        ))
      )}

      <text x="500" y="80" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">Ly = b</text>
      <text x="500" y="96" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">Ux = y</text>
    </svg>
  );
}

// SVG 8: Cholesky
function CholeskySSVG() {
  return (
    <svg width="100%" viewBox="0 0 560 160" style={{ maxWidth: 560, display: 'block', margin: '1rem auto' }}>
      <rect x="10" y="20" width="150" height="120" rx="8" fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="1.5" />
      <text x="85" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>A (SPD)</text>
      {[['4','2','2'],['2','5','1'],['2','1','6']].map((row,ri) =>
        row.map((v,ci) => (
          <text key={`s${ri}${ci}`} x={35 + ci*44} y={72 + ri*28} textAnchor="middle" fontSize="12"
            fill={ri === ci ? '#4a9eed' : 'var(--text-primary)'}>{v}</text>
        ))
      )}

      <text x="185" y="87" fontSize="18" fill={color} textAnchor="middle">=</text>

      <rect x="210" y="20" width="150" height="120" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="285" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">L</text>
      {[['2','0','0'],['1','2','0'],['1','0.5','√5']].map((row,ri) =>
        row.map((v,ci) => (
          <text key={`c${ri}${ci}`} x={235 + ci*44} y={72 + ri*28} textAnchor="middle" fontSize="12"
            fill={ci > ri ? 'var(--text-secondary)' : 'var(--text-primary)'}>{v}</text>
        ))
      )}

      <text x="385" y="87" fontSize="18" fill={color} textAnchor="middle">×</text>

      <rect x="410" y="20" width="140" height="120" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="480" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Lᵀ</text>
      {[['2','1','1'],['0','2','0.5'],['0','0','√5']].map((row,ri) =>
        row.map((v,ci) => (
          <text key={`ct${ri}${ci}`} x={435 + ci*38} y={72 + ri*28} textAnchor="middle" fontSize="11"
            fill={ci < ri ? 'var(--text-secondary)' : 'var(--text-primary)'}>{v}</text>
        ))
      )}
    </svg>
  );
}

// SVG 9: Projection onto column space (least squares)
function LeastSquaresSVG() {
  return (
    <svg width="100%" viewBox="0 0 400 320" style={{ maxWidth: 400, display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrLS" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={color} />
        </marker>
        <marker id="arrR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4a9eed" />
        </marker>
        <marker id="arrG2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4a9eed" />
        </marker>
      </defs>

      {/* Column space plane */}
      <polygon points="50,250 200,180 350,220 200,290" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="200" y="308" textAnchor="middle" fontSize="11" fill={color}>Col(A)</text>

      {/* Origin */}
      <circle cx="180" cy="240" r="4" fill="var(--text-secondary)" />
      <text x="165" y="258" fontSize="10" fill="var(--text-secondary)">O</text>

      {/* b vector */}
      <line x1="180" y1="240" x2="240" y2="90" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrLS)" />
      <text x="252" y="88" fontSize="12" fill="#4a9eed" fontWeight="700">b</text>

      {/* Projection Ax_hat */}
      <line x1="180" y1="240" x2="270" y2="200" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrG2)" />
      <text x="282" y="198" fontSize="11" fill="#4a9eed" fontWeight="700">Ax̂</text>

      {/* Residual e = b - Ax_hat */}
      <line x1="270" y1="200" x2="240" y2="90" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrR)" />
      <text x="260" y="148" fontSize="11" fill="#4a9eed" fontWeight="700">e</text>

      {/* Right angle mark */}
      <polyline points="263,196 259,186 269,182" fill="none" stroke="#4a9eed" strokeWidth="1.5" />

      <text x="200" y="30" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Projeção de b sobre Col(A)</text>
      <text x="200" y="48" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">||e|| mínimo quando e ⊥ Col(A)</text>
    </svg>
  );
}

// SVG 10: Underdetermined - solution plane
function UnderdeterminedSVG() {
  return (
    <svg width="100%" viewBox="0 0 480 260" style={{ maxWidth: 480, display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrU" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4a9eed" />
        </marker>
        <marker id="arrMN" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4a9eed" />
        </marker>
      </defs>

      {/* Solution affine subspace */}
      <polygon points="60,200 180,100 420,140 300,240" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="240" y="256" textAnchor="middle" fontSize="11" fill="#4a9eed">Espaço de soluções {'{x : Ax = b}'}</text>

      {/* Origin */}
      <circle cx="100" cy="210" r="4" fill="var(--text-secondary)" />
      <text x="86" y="226" fontSize="10" fill="var(--text-secondary)">O</text>

      {/* Various solutions on the plane */}
      <circle cx="200" cy="155" r="4" fill="#4a9eed" />
      <circle cx="290" cy="165" r="4" fill="#4a9eed" />
      <circle cx="350" cy="180" r="4" fill="#4a9eed" />
      <text x="210" y="148" fontSize="9" fill="#4a9eed">x₁</text>
      <text x="300" y="158" fontSize="9" fill="#4a9eed">x₂</text>
      <text x="360" y="173" fontSize="9" fill="#4a9eed">x₃</text>

      {/* Minimum norm solution */}
      <line x1="100" y1="210" x2="198" y2="156" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arrMN)" />
      <circle cx="200" cy="155" r="6" fill="none" stroke="#4a9eed" strokeWidth="2.5" />
      <text x="135" y="175" fontSize="10" fill="#4a9eed" fontWeight="700">x_mn</text>
      <text x="155" y="188" fontSize="9" fill="var(--text-secondary)">(norma mínima)</text>

      {/* Perpendicular to plane */}
      <polyline points="194,158 192,170 205,173" fill="none" stroke="#4a9eed" strokeWidth="1.5" />

      <text x="240" y="30" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Sistema Subdeterminado (m {'<'} n)</text>
      <text x="240" y="50" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Infinitas soluções — x_mn = Aᵀ(AAᵀ)⁻¹b</text>
    </svg>
  );
}

// SVG 11: Conditioning — well vs ill conditioned
function ConditioningSVG() {
  return (
    <svg width="100%" viewBox="0 0 580 230" style={{ maxWidth: 580, display: 'block', margin: '1rem auto' }}>
      {/* Well conditioned */}
      <rect x="10" y="10" width="265" height="210" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="142" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Bem Condicionado (κ ≈ 1)</text>
      {/* Two lines crossing at clear angle */}
      <line x1="30" y1="170" x2="250" y2="60" stroke={color} strokeWidth="2.5" />
      <line x1="30" y1="60" x2="250" y2="180" stroke="#4a9eed" strokeWidth="2.5" />
      <circle cx="140" cy="120" r="6" fill="#4a9eed" />
      {/* Small perturbation circle */}
      <circle cx="140" cy="120" r="15" fill="none" stroke="#4a9eed" strokeWidth="1" strokeDasharray="3 2" />
      <text x="160" y="118" fontSize="9" fill="var(--text-secondary)">δx pequeno</text>
      <text x="142" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Solução estável a perturbações</text>

      {/* Ill conditioned */}
      <rect x="305" y="10" width="265" height="210" rx="8" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="437" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a9eed">Mal Condicionado (κ ≫ 1)</text>
      {/* Nearly parallel lines */}
      <line x1="320" y1="160" x2="555" y2="80" stroke={color} strokeWidth="2.5" />
      <line x1="320" y1="150" x2="555" y2="70" stroke="#4a9eed" strokeWidth="2.5" strokeDasharray="6 2" />
      <circle cx="430" cy="118" r="6" fill="#4a9eed" />
      {/* Large perturbation range */}
      <line x1="330" y1="90" x2="540" y2="145" stroke="#4a9eed" strokeWidth="1" strokeDasharray="3 2" />
      <text x="437" y="92" fontSize="9" fill="#4a9eed">δx grande!</text>
      <text x="437" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Pequena mudança em b → grande mudança em x</text>
    </svg>
  );
}

// SVG 12: Decision tree
function DecisionTreeSVG() {
  return (
    <svg width="100%" viewBox="0 0 820 380" style={{ maxWidth: 820, display: 'block', margin: '1rem auto' }}>
      <defs>
        <marker id="arrD" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Root — centered at 410 */}
      <rect x="310" y="10" width="200" height="48" rx="8" fill={color} />
      <text x="410" y="31" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Sistema Ax = b</text>
      <text x="410" y="48" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)">m equações, n incógnitas</text>

      {/* Level 1 branches → centers: 150, 410, 670 */}
      <line x1="310" y1="58" x2="150" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrD)" />
      <line x1="410" y1="58" x2="410" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrD)" />
      <line x1="510" y1="58" x2="670" y2="110" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrD)" />

      <text x="220" y="90" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">m = n</text>
      <text x="410" y="95" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">m {'>'} n</text>
      <text x="600" y="90" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">m {'<'} n</text>

      {/* Square system — center 150 */}
      <rect x="70" y="110" width="160" height="48" rx="8" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5" />
      <text x="150" y="131" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Quadrado (m=n)</text>
      <text x="150" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Verificar rank(A)</text>

      {/* Overdetermined — center 410 */}
      <rect x="330" y="110" width="160" height="48" rx="8" fill="var(--bg-secondary)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="410" y="131" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Sobredeterminado</text>
      <text x="410" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">m {'>'} n — mín. quadrados</text>

      {/* Underdetermined — center 670 */}
      <rect x="590" y="110" width="160" height="48" rx="8" fill="var(--bg-secondary)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="670" y="131" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Subdeterminado</text>
      <text x="670" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">m {'<'} n — norma mínima</text>

      {/* Square branches → centers: 80, 230 */}
      <line x1="110" y1="158" x2="80" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrD)" />
      <line x1="185" y1="158" x2="230" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrD)" />
      <text x="76" y="194" fontSize="9" fill="#4a9eed">rank = n</text>
      <text x="176" y="194" fontSize="9" fill="#4a9eed">rank {'<'} n</text>

      {/* Unique solution — center 80 */}
      <rect x="10" y="210" width="140" height="64" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="80" y="230" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">Solução Única</text>
      <text x="80" y="246" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">np.linalg.solve</text>
      <text x="80" y="262" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ou LU / Cholesky</text>

      {/* Inconsistent or infinite — center 230 */}
      <rect x="160" y="210" width="140" height="64" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="230" y="230" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">Sem / ∞ Soluções</text>
      <text x="230" y="246" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Verificar consistência</text>
      <text x="230" y="262" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">via rank([A|b])</text>

      {/* Overdetermined solution — center 410 */}
      <rect x="330" y="210" width="160" height="64" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="410" y="230" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">Mínimos Quadrados</text>
      <text x="410" y="246" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">np.linalg.lstsq</text>
      <text x="410" y="262" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">AᵀAx = Aᵀb</text>
      <line x1="410" y1="158" x2="410" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrD)" />

      {/* Underdetermined solution — center 670 */}
      <rect x="590" y="210" width="160" height="64" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="670" y="230" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a9eed">Norma Mínima</text>
      <text x="670" y="246" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">x = Aᵀ(AAᵀ)⁻¹b</text>
      <text x="670" y="262" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ou pseudoinversa A⁺</text>
      <line x1="670" y1="158" x2="670" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrD)" />

      {/* Condition number check — centered */}
      <rect x="210" y="310" width="400" height="48" rx="8" fill="rgba(74,158,237,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="410" y="330" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Verificar κ(A) = np.linalg.cond(A)</text>
      <text x="410" y="348" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">κ ≫ 1 → resultados numéricos não confiáveis → escalar features</text>
      <line x1="80" y1="274" x2="300" y2="314" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="410" y1="274" x2="410" y2="310" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="670" y1="274" x2="530" y2="314" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 2" />
    </svg>
  );
}

export default function LA3() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16} /> Voltar a Álgebra Linear</Link>
      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Sistemas de Equações Lineares</h1>

      {/* SECTION 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Formulação Ax = b</h2>
        <p style={S.p}>
          Um sistema de m equações lineares com n incógnitas pode ser escrito de forma compacta como <strong>Ax = b</strong>, onde A ∈ ℝ^(m×n) é a matriz de coeficientes, x ∈ ℝⁿ é o vetor de incógnitas e b ∈ ℝᵐ é o vetor independente.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Forma explícita (m=3, n=3):</strong>
          </p>
          <BlockMath math="\begin{aligned} a_{11}x_1+a_{12}x_2+a_{13}x_3 &= b_1\\ a_{21}x_1+a_{22}x_2+a_{23}x_3 &= b_2\\ a_{31}x_1+a_{32}x_2+a_{33}x_3 &= b_3 \end{aligned}" />
        </div>
        <p style={S.p}>
          A equação Ax = b pode ser interpretada de duas formas equivalentes: como uma combinação linear das colunas de A com coeficientes dados por x, ou como a imagem de x pela transformação linear T(x) = Ax. Se b pertence ao espaço coluna de A, o sistema é <em>consistente</em> e tem pelo menos uma solução.
        </p>
        <SolutionTypesSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Três possibilidades em 2D: solução única (linhas se cruzam), sem solução (paralelas) e infinitas soluções (coincidentes).
        </p>
        <h3 style={S.h3}>Notação e Convenção</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Símbolo</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Dimensão</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>A</td><td style={S.td}>Matriz de coeficientes</td><td style={S.td}>m × n</td></tr>
            <tr><td style={S.td}>x</td><td style={S.td}>Vetor de incógnitas</td><td style={S.td}>n × 1</td></tr>
            <tr><td style={S.td}>b</td><td style={S.td}>Vetor de termos independentes</td><td style={S.td}>m × 1</td></tr>
            <tr><td style={S.td}>[A|b]</td><td style={S.td}>Matriz aumentada</td><td style={S.td}>m × (n+1)</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Eliminação Gaussiana</h2>
        <p style={S.p}>
          A Eliminação Gaussiana é o algoritmo fundamental para resolver sistemas lineares. O objetivo é transformar a matriz aumentada [A|b] em forma escalonada por linha (REF) usando operações elementares de linha, preservando o conjunto solução.
        </p>
        <h3 style={S.h3}>Operações Elementares de Linha</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação</th>
              <th style={S.th}>Notação</th>
              <th style={S.th}>Efeito</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Troca de linhas</td><td style={S.td}>Rᵢ ↔ Rⱼ</td><td style={S.td}>Reordena equações</td></tr>
            <tr><td style={S.td}>Escalonamento</td><td style={S.td}>Rᵢ ← c·Rᵢ (c ≠ 0)</td><td style={S.td}>Multiplica equação por constante</td></tr>
            <tr><td style={S.td}>Eliminação</td><td style={S.td}>Rᵢ ← Rᵢ + c·Rⱼ</td><td style={S.td}>Soma múltiplo de outra linha</td></tr>
          </tbody>
        </table>
        <GaussianSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Transformação do sistema original para REF em dois passos. Pivôs em destaque roxo.
        </p>
        <h3 style={S.h3}>Algoritmo Completo com Back Substitution</h3>
        <p style={S.p}>
          Após a fase de eliminação para frente (forward elimination), que produz a REF, aplica-se a substituição retroativa (back substitution) para obter os valores de x. Para um sistema n×n, a complexidade total é <strong>O(n³/3)</strong> na eliminação e <strong>O(n²/2)</strong> na substituição retroativa.
        </p>
        <h3 style={S.h3}>Complexidade Computacional</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fase</th>
              <th style={S.th}>Operações</th>
              <th style={S.th}>Complexidade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Eliminação para frente</td><td style={S.td}>~n³/3 multiplicações</td><td style={S.td}>O(n³)</td></tr>
            <tr><td style={S.td}>Substituição retroativa</td><td style={S.td}>~n²/2 operações</td><td style={S.td}>O(n²)</td></tr>
            <tr><td style={S.td}>Total (sistema único)</td><td style={S.td}>~2n³/3</td><td style={S.td}>O(n³)</td></tr>
            <tr><td style={S.td}>k sistemas com mesma A</td><td style={S.td}>O(n³) + k·O(n²)</td><td style={S.td}>LU amortiza custo</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Forma Escalonada (REF e RREF)</h2>
        <p style={S.p}>
          A <strong>Forma Escalonada por Linha (REF)</strong> e a <strong>Forma Escalonada Reduzida por Linha (RREF)</strong> são formas canônicas que revelam a estrutura do sistema. A RREF é única para cada matriz, tornando-a ideal para análise teórica.
        </p>
        <h3 style={S.h3}>Definição: REF</h3>
        <p style={S.p}>
          Uma matriz está em REF se: (1) todas as linhas nulas estão abaixo das não-nulas; (2) o pivô de cada linha está à direita do pivô da linha anterior; (3) todos os elementos abaixo de um pivô são zero.
        </p>
        <h3 style={S.h3}>Definição: RREF</h3>
        <p style={S.p}>
          A RREF satisfaz adicionalmente: (4) cada pivô é igual a 1; (5) todos os elementos <em>acima e abaixo</em> de cada pivô são zero.
        </p>
        <RREFComparisonSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          À esquerda: REF com pivôs destacados. À direita: RREF com pivôs = 1 e colunas dos pivôs zeradas.
        </p>
        <h3 style={S.h3}>Variáveis Básicas e Livres</h3>
        <p style={S.p}>
          Após obter a RREF, as colunas com pivô correspondem a <strong>variáveis básicas</strong> (determinadas), e as colunas sem pivô correspondem a <strong>variáveis livres</strong> (podem assumir qualquer valor). O número de variáveis livres é <strong>n − rank(A)</strong>.
        </p>
        <div style={S.highlight}>
          <strong>Identificação de variáveis livres:</strong><br /><br />
          Colunas 1, 2, 3 têm pivôs → x₁, x₂, x₃ são básicas.<br />
          Coluna 4 não tem pivô → x₄ é livre (parâmetro t ∈ ℝ).<br /><br />
          A solução geral fica: x = x_particular + t·x_null
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Tipos de Solução — Teorema de Rouché-Capelli</h2>
        <p style={S.p}>
          O <strong>Teorema de Rouché-Capelli</strong> (também chamado de Kronecker-Capelli) fornece condições necessárias e suficientes para a existência e unicidade de soluções de sistemas lineares, usando o conceito de rank.
        </p>
        <div style={S.highlight}>
          <strong>Teorema de Rouché-Capelli:</strong><br /><br />
          Seja [A|b] a matriz aumentada. O sistema Ax = b é:<br />
          • <strong>Inconsistente</strong> (sem solução) se rank(A) ≠ rank([A|b])<br />
          • <strong>Solução única</strong> se rank(A) = rank([A|b]) = n<br />
          • <strong>Infinitas soluções</strong> se rank(A) = rank([A|b]) {'<'} n<br />
          &nbsp;&nbsp;(com ∞ paramétrico de dimensão n − rank(A))
        </div>
        <PlanesSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Geometria de sistemas 3×3: solução única (ponto), sem solução (planos paralelos), infinitas soluções (reta).
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Condição</th>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Geometria (3D)</th>
              <th style={S.th}>Action (DS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>rank(A) = rank([A|b]) = n</td>
              <td style={S.td}>Solução única</td>
              <td style={S.td}>3 planos em 1 ponto</td>
              <td style={S.td}>np.linalg.solve</td>
            </tr>
            <tr>
              <td style={S.td}>rank(A) {'<'} rank([A|b])</td>
              <td style={S.td}>Inconsistente</td>
              <td style={S.td}>Planos paralelos / sem interseção</td>
              <td style={S.td}>Verificar dados, usar lstsq</td>
            </tr>
            <tr>
              <td style={S.td}>rank(A) = rank([A|b]) {'<'} n</td>
              <td style={S.td}>∞ soluções</td>
              <td style={S.td}>Planos em linha/plano</td>
              <td style={S.td}>Regularização / norma mínima</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Rank e Teorema Rank-Nulidade</h2>
        <p style={S.p}>
          O <strong>rank</strong> de uma matriz A é o número de linhas (ou colunas) linearmente independentes. Equivalentemente, é a dimensão do espaço coluna de A, que é igual à dimensão do espaço linha de A. O rank é um invariante fundamental da matriz.
        </p>
        <h3 style={S.h3}>Propriedades do Rank</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Enunciado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Simetria linha-coluna</td><td style={S.td}>dim(Col(A)) = dim(Row(A)) = rank(A)</td></tr>
            <tr><td style={S.td}>Limite superior</td><td style={S.td}>rank(A) ≤ min(m, n)</td></tr>
            <tr><td style={S.td}>Rank máximo</td><td style={S.td}>rank(A) = min(m,n) ⟹ posto completo</td></tr>
            <tr><td style={S.td}>Produto</td><td style={S.td}>rank(AB) ≤ min(rank(A), rank(B))</td></tr>
            <tr><td style={S.td}>Transposição</td><td style={S.td}>rank(Aᵀ) = rank(A)</td></tr>
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Teorema Rank-Nulidade:</strong><br /><br />
          Para A ∈ ℝ^(m×n):
          <BlockMath math="\text{rank}(A) + \text{nulidade}(A) = n" />
          onde nulidade(A) = dim(Null(A)) = número de variáveis livres = n − rank(A)
        </div>
        <FundamentalSubspacesSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Os 4 subespaços fundamentais. A transformação A mapeia o espaço linha para o espaço coluna, e Null(A) para {'{0}'}.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Os 4 Subespaços Fundamentais de Strang</h2>
        <p style={S.p}>
          Gilbert Strang demonstrou que toda matriz A ∈ ℝ^(m×n) induz exatamente quatro subespaços fundamentais que organizam toda a teoria de sistemas lineares. Compreender esses subespaços é compreender a estrutura completa da equação Ax = b.
        </p>
        <BigPictureSVG />
        <h3 style={S.h3}>Os Quatro Subespaços</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Subespaço</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>Espaço Ambiente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Espaço Coluna Col(A)</td>
              <td style={S.td}>{'{Ax : x ∈ ℝⁿ}'}</td>
              <td style={S.td}>r</td>
              <td style={S.td}>ℝᵐ</td>
            </tr>
            <tr>
              <td style={S.td}>Espaço Nulo Null(A)</td>
              <td style={S.td}>{'{x : Ax = 0}'}</td>
              <td style={S.td}>n − r</td>
              <td style={S.td}>ℝⁿ</td>
            </tr>
            <tr>
              <td style={S.td}>Espaço Linha Row(A)</td>
              <td style={S.td}>Col(Aᵀ) = {'{Aᵀy}'}</td>
              <td style={S.td}>r</td>
              <td style={S.td}>ℝⁿ</td>
            </tr>
            <tr>
              <td style={S.td}>Espaço Nulo Esquerdo Null(Aᵀ)</td>
              <td style={S.td}>{'{y : Aᵀy = 0}'}</td>
              <td style={S.td}>m − r</td>
              <td style={S.td}>ℝᵐ</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Ortogonalidade entre Subespaços</h3>
        <p style={S.p}>
          Os quatro subespaços formam dois pares ortogonais complementares:
        </p>
        <div style={S.highlight}>
          • <InlineMath math="\text{Col}(A) \oplus \text{Null}(A^T) = \mathbb{R}^m" /> (complemento ortogonal em ℝᵐ)<br />
          • <InlineMath math="\text{Row}(A) \oplus \text{Null}(A) = \mathbb{R}^n" /> (complemento ortogonal em ℝⁿ)<br /><br />
          Portanto: dim(Col) + dim(Null esq.) = m, e dim(Row) + dim(Null) = n.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 7 */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Decomposição LU</h2>
        <p style={S.p}>
          A <strong>Decomposição LU</strong> fatoriza A = LU, onde L é triangular inferior com 1s na diagonal e U é triangular superior. Essencialmente registra os multiplicadores da eliminação gaussiana em L e o resultado final em U.
        </p>
        <LUDecompSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          A = LU. Diagonal dourada = elementos pivô. Zeros forçados em laranja claro.
        </p>
        <h3 style={S.h3}>Vantagem da Decomposição LU</h3>
        <p style={S.p}>
          Uma vez calculada (O(n³)), a fatoração LU permite resolver <em>k sistemas</em> com a mesma matriz A e diferentes vetores b em O(k·n²) — muito mais eficiente que repetir a eliminação gaussiana a cada vez.
        </p>
        <div style={S.highlight}>
          <strong>Algoritmo:</strong><br />
          1. Fatorar: A = PLU (P = permutação para pivotamento)<br />
          2. Resolver Ly = Pb por substituição direta (forward substitution): O(n²)<br />
          3. Resolver Ux = y por substituição retroativa: O(n²)<br />
          4. Repetir passos 2-3 para cada novo b
        </div>
        <h3 style={S.h3}>LU vs Eliminação Gaussiana vs np.linalg.solve</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Custo de setup</th>
              <th style={S.th}>Custo por b</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Eliminação Gaussiana</td><td style={S.td}>O(n³)</td><td style={S.td}>—</td><td style={S.td}>Sistema único, fins didáticos</td></tr>
            <tr><td style={S.td}>np.linalg.solve</td><td style={S.td}>O(n³)</td><td style={S.td}>—</td><td style={S.td}>Sistema único, conveniência</td></tr>
            <tr><td style={S.td}>LU (scipy)</td><td style={S.td}>O(n³)</td><td style={S.td}>O(n²)</td><td style={S.td}>Múltiplos b, mesma A</td></tr>
            <tr><td style={S.td}>Cholesky</td><td style={S.td}>O(n³/3)</td><td style={S.td}>O(n²)</td><td style={S.td}>A simétrica positiva definida</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 8 */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Decomposição de Cholesky</h2>
        <p style={S.p}>
          Quando a matriz A é <strong>simétrica positiva definida (SPD)</strong> — condição comum em estatística e otimização — a Decomposição de Cholesky A = LLᵀ é preferível ao LU por ser cerca de duas vezes mais rápida e numericamente mais estável.
        </p>
        <h3 style={S.h3}>Matriz Simétrica Positiva Definida (SPD)</h3>
        <p style={S.p}>
          Uma matriz A ∈ ℝ^(n×n) é SPD se: (1) A = Aᵀ (simétrica); (2) xᵀAx {'>'} 0 para todo x ≠ 0 (positiva definida). Equivalentemente, todos os autovalores de A são positivos.
        </p>
        <CholeskySSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Cholesky: A = LLᵀ com L triangular inferior. Apenas metade dos elementos de LU precisa ser calculada.
        </p>
        <h3 style={S.h3}>Quando Encontrar Matrizes SPD em Data Science</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Contexto</th>
              <th style={S.th}>Matriz SPD</th>
              <th style={S.th}>Uso de Cholesky</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Regressão Linear</td><td style={S.td}>XᵀX (sem colinearidade)</td><td style={S.td}>Resolver equações normais</td></tr>
            <tr><td style={S.td}>Gaussian Processes</td><td style={S.td}>Kernel matrix K</td><td style={S.td}>Predição e log-verossimilhança</td></tr>
            <tr><td style={S.td}>Otimização Convexa</td><td style={S.td}>Hessiana H em mín. locais</td><td style={S.td}>Newton step: H·d = −∇f</td></tr>
            <tr><td style={S.td}>Estatística Multivariada</td><td style={S.td}>Matriz de covariância Σ</td><td style={S.td}>Amostrar distribuições normais</td></tr>
            <tr><td style={S.td}>Redes Neurais (K-FAC)</td><td style={S.td}>Fisher information matrix</td><td style={S.td}>Curvatura natural do gradiente</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 9 */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Sistemas Sobredeterminados e Mínimos Quadrados</h2>
        <p style={S.p}>
          Quando m {'>'} n (mais equações que incógnitas), o sistema geralmente não tem solução exata. O método dos <strong>mínimos quadrados</strong> encontra o x̂ que minimiza a norma do resíduo: <strong>min ||Ax − b||²</strong>.
        </p>
        <h3 style={S.h3}>Derivação das Equações Normais</h3>
        <p style={S.p}>
          A função objetivo f(x) = ||Ax − b||² = (Ax−b)ᵀ(Ax−b) é convexa. O mínimo ocorre onde o gradiente é zero:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\nabla f(x) = 2A^T(Ax-b) = 0" />
          <strong>Equações Normais:</strong> <InlineMath math="A^TA\hat{x} = A^Tb" /><br /><br />
          Se A tem posto coluna completo (rank = n), então AᵀA é invertível e
          <BlockMath math="\hat{x} = (A^TA)^{-1}A^Tb = A^+b" /> (pseudoinversa de Moore-Penrose)
        </div>
        <LeastSquaresSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Geometria dos mínimos quadrados: Ax̂ é a projeção ortogonal de b sobre Col(A). O resíduo e = b − Ax̂ é perpendicular a Col(A).
        </p>
        <h3 style={S.h3}>Conexão com Regressão Linear</h3>
        <p style={S.p}>
          Na regressão linear y = Xβ + ε com X ∈ ℝ^(n×p), a estimativa OLS (Ordinary Least Squares) é exatamente a solução de mínimos quadrados: β̂ = (XᵀX)⁻¹Xᵀy. Cada linha de X é uma observação; cada coluna é uma feature.
        </p>
        <h3 style={S.h3}>Decomposição QR para Mínimos Quadrados</h3>
        <p style={S.p}>
          A fatoração A = QR (Q ortogonal, R triangular superior) é numericamente preferível para mínimos quadrados: x̂ = R⁻¹Qᵀb. O número de condição de R é κ(A) — não κ(A)² como em AᵀA.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 10 */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Sistemas Subdeterminados e Norma Mínima</h2>
        <p style={S.p}>
          Quando m {'<'} n (menos equações que incógnitas), o sistema possui infinitas soluções caso seja consistente. O critério mais natural é encontrar a solução de <strong>norma mínima</strong>: entre todos os x com Ax = b, escolher aquele com ||x||₂ mínimo.
        </p>
        <div style={S.highlight}>
          <strong>Solução de norma mínima:</strong>
          <BlockMath math="x_{mn} = A^T(AA^T)^{-1}b" />
          Equivalentemente usando a pseudoinversa: <InlineMath math="x_{mn}=A^+b" /> onde <InlineMath math="A^+=A^T(AA^T)^{-1}" /><br />
          (válido quando A tem posto linha completo, i.e., rank = m)
        </div>
        <UnderdeterminedSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Espaço afim de soluções. x_mn é o ponto mais próximo da origem — perpendicular ao espaço solução.
        </p>
        <h3 style={S.h3}>Interpretação Geométrica</h3>
        <p style={S.p}>
          O conjunto de soluções forma um subespaço afim S = {'{x_p + v : v ∈ Null(A)}'}, onde x_p é qualquer solução particular. A solução de norma mínima x_mn é a projeção ortogonal da origem sobre S, que está no espaço linha Row(A) — perpendicular a Null(A).
        </p>
        <h3 style={S.h3}>Regularização L1 para Soluções Esparsas (LASSO)</h3>
        <p style={S.p}>
          Em muitas aplicações de Data Science, queremos uma solução esparsa (com poucos elementos não-zero) em vez da solução de norma mínima (L2). O LASSO adiciona penalidade L1:
        </p>
        <div style={S.highlight}>
          <strong>LASSO:</strong> <InlineMath math="\min \|Ax-b\|^2+\lambda\|x\|_1" /><br /><br />
          • λ controla esparsidade: maior λ → mais zeros em x̂<br />
          • Seleção automática de features: coeficientes irrelevantes → 0<br />
          • Solução não tem forma fechada — requer otimização (e.g., coordinate descent)<br />
          • Equivalente a norma mínima com restrição ||x||₁ ≤ t
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 11 */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Número de Condição</h2>
        <p style={S.p}>
          O <strong>número de condição</strong> κ(A) mede a sensibilidade da solução de Ax = b a perturbações em A ou b. Uma matriz com κ grande é <em>mal condicionada</em>: pequenas mudanças nos dados de entrada causam grandes mudanças na solução.
        </p>
        <div style={S.highlight}>
          <strong>Definição:</strong>
          <BlockMath math="\kappa(A) = \|A\|\cdot\|A^{-1}\| = \frac{\sigma_{max}}{\sigma_{min}}" />
          onde σ_max e σ_min são os valores singulares máximo e mínimo de A.<br /><br />
          <strong>Interpretação:</strong> Se perturbarmos b por δb, então:
          <BlockMath math="\frac{\|\delta x\|}{\|x\|} \le \kappa(A)\cdot\frac{\|\delta b\|}{\|b\|}" />
          κ = 1 (perfeito), κ = 10⁶ (erros podem crescer 10⁶×)
        </div>
        <ConditioningSVG />
        <p style={{ ...S.p, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          À esquerda: linhas se cruzam em ângulo largo — solução estável. À direita: linhas quase paralelas — pequena perturbação causa grande deslocamento na solução.
        </p>
        <h3 style={S.h3}>Diagnóstico e Melhoria do Condicionamento</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>κ(A)</th>
              <th style={S.th}>Interpretação</th>
              <th style={S.th}>Dígitos perdidos (float64)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>1 a 10²</td><td style={S.td}>Bem condicionado</td><td style={S.td}>0–2 dígitos</td></tr>
            <tr><td style={S.td}>10² a 10⁶</td><td style={S.td}>Condicionamento moderado</td><td style={S.td}>2–6 dígitos</td></tr>
            <tr><td style={S.td}>10⁶ a 10¹²</td><td style={S.td}>Mal condicionado</td><td style={S.td}>6–12 dígitos</td></tr>
            <tr><td style={S.td}>{'>'} 10¹²</td><td style={S.td}>Muito mal condicionado</td><td style={S.td}>Resultado não confiável</td></tr>
            <tr><td style={S.td}>∞</td><td style={S.td}>Singular</td><td style={S.td}>Sem solução (rank deficiente)</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Condicionamento e Feature Scaling</h3>
        <p style={S.p}>
          Em Machine Learning, features em escalas muito diferentes (e.g., idade em anos vs. renda em dólares) produzem matrizes de design mal condicionadas. Padronização ou normalização das features reduz κ(XᵀX) e melhora a estabilidade numérica e a convergência de algoritmos iterativos como gradiente descendente.
        </p>
      </section>
      
    </div>
  );
}
