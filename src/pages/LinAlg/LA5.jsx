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

function EigenvectorsSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 260" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="260" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="22" textAnchor="middle" fontSize="13" fill="var(--text-secondary)" fontWeight="600">A = [[3,1],[0,2]]   Eigenvectors não rotacionam</text>
      {/* Grid lines */}
      {[-4,-3,-2,-1,0,1,2,3,4].map(i => (
        <line key={`gx${i}`} x1={250 + i * 30} y1={40} x2={250 + i * 30} y2={240} stroke="var(--text-secondary)" strokeWidth="0.5" />
      ))}
      {[-3,-2,-1,0,1,2,3].map(i => (
        <line key={`gy${i}`} x1={100} y1={140 + i * 30} x2={400} y2={140 + i * 30} stroke="var(--text-secondary)" strokeWidth="0.5" />
      ))}
      {/* Axes */}
      <line x1="100" y1="140" x2="400" y2="140" stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1="250" y1="40" x2="250" y2="240" stroke="var(--text-secondary)" strokeWidth="1.2" />
      {/* Generic vectors (before) faded — dir (60,-30), unit(0.894,-0.447), perp(0.447,0.894) */}
      <line x1="250" y1="140" x2="310" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points="310,110 305,118 301,110" fill="#94a3b8" />
      <text x="315" y="108" fontSize="10" fill="#94a3b8">v</text>
      {/* After transform (rotated) — dir (105,-44), unit(0.922,-0.387), perp(0.387,0.922) */}
      <line x1="250" y1="140" x2="355" y2="96" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points="355,96 350,103 346,95" fill="#4a9eed" />
      <text x="360" y="94" fontSize="10" fill="#4a9eed">Av</text>
      {/* Eigenvector 1: lambda=3, direction [1,0] */}
      <line x1="250" y1="140" x2="340" y2="140" stroke={color} strokeWidth="2.5" />
      <polygon points="340,140 330,136 330,144" fill={color} />
      <text x="345" y="138" fontSize="11" fill={color} fontWeight="700">v₁</text>
      {/* Eigenvector 1 after A: scaled by 3 */}
      <line x1="250" y1="140" x2="430" y2="140" stroke={color} strokeWidth="2" strokeDasharray="5,3" />
      <polygon points="430,140 420,136 420,144" fill={color} />
      <text x="432" y="138" fontSize="10" fill={color}>λ₁=3</text>
      {/* Eigenvector 2: lambda=2, direction [1,-1] unit(0.707,-0.707), perp(0.707,0.707) */}
      <line x1="250" y1="140" x2="271" y2="119" stroke="#4a9eed" strokeWidth="2.5" />
      <polygon points="271,119 268,128 262,122" fill="#4a9eed" />
      <text x="272" y="113" fontSize="11" fill="#4a9eed" fontWeight="700">v₂</text>
      {/* Eigenvector 2 after A: scaled by 2 */}
      <line x1="250" y1="140" x2="292" y2="98" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3" />
      <polygon points="292,98 289,107 283,101" fill="#4a9eed" />
      <text x="294" y="96" fontSize="10" fill="#4a9eed">λ₂=2</text>
      {/* Legend */}
      <rect x="100" y="200" width="360" height="58" fill="var(--bg-secondary)" rx="4" />
      <line x1="112" y1="218" x2="137" y2="218" stroke={color} strokeWidth="2.5" />
      <text x="142" y="222" fontSize="10" fill="var(--text-primary)">eigenvector (v)</text>
      <line x1="260" y1="218" x2="285" y2="218" stroke={color} strokeWidth="2" strokeDasharray="5,3" />
      <text x="290" y="222" fontSize="10" fill="var(--text-primary)">após A (apenas escala)</text>
      <line x1="112" y1="244" x2="137" y2="244" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="142" y="248" fontSize="10" fill="var(--text-primary)">vetor genérico roda</text>
    </svg>
  );
}

function CharPolyStepsSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 200" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Polinómio Característico passo a passo: A = [[4,1],[2,3]]</text>
      {/* Step 1 */}
      <rect x="20" y="38" width="140" height="70" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="90" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Passo 1</text>
      <text x="90" y="73" textAnchor="middle" fontSize="11" fill="var(--text-primary)">A - λI =</text>
      <text x="90" y="89" textAnchor="middle" fontSize="10" fill="var(--text-primary)">[[4-λ, 1],</text>
      <text x="90" y="103" textAnchor="middle" fontSize="10" fill="var(--text-primary)">[2, 3-λ]]</text>
      {/* Arrow */}
      <line x1="160" y1="73" x2="174" y2="73" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="178,73 168,68 168,78" fill="var(--text-secondary)" />
      {/* Step 2 */}
      <rect x="180" y="38" width="140" height="70" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="250" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Passo 2</text>
      <text x="250" y="73" textAnchor="middle" fontSize="11" fill="var(--text-primary)">det = 0</text>
      <text x="250" y="89" textAnchor="middle" fontSize="10" fill="var(--text-primary)">(4-λ)(3-λ) - 2 = 0</text>
      <text x="250" y="103" textAnchor="middle" fontSize="10" fill="var(--text-primary)">λ² - 7λ + 10 = 0</text>
      {/* Arrow */}
      <line x1="320" y1="73" x2="334" y2="73" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="338,73 328,68 328,78" fill="var(--text-secondary)" />
      {/* Step 3 */}
      <rect x="340" y="38" width="140" height="70" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="410" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Passo 3</text>
      <text x="410" y="73" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Raízes:</text>
      <text x="410" y="89" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">λ₁ = 5</text>
      <text x="410" y="105" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">λ₂ = 2</text>
      {/* Verification */}
      <rect x="20" y="120" width="460" height="65" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="250" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Verificação</text>
      <text x="250" y="155" textAnchor="middle" fontSize="10" fill="var(--text-primary)">tr(A) = 4+3 = 7 = λ₁+λ₂ = 5+2 ✓</text>
      <text x="250" y="172" textAnchor="middle" fontSize="10" fill="var(--text-primary)">det(A) = 12-2 = 10 = λ₁×λ₂ = 5×2 ✓</text>
    </svg>
  );
}

function EigenvectorSolveSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 230" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Encontrar eigenvector para λ₁=5 em A=[[4,1],[2,3]]</text>
      {/* Column 1 */}
      <rect x="15" y="35" width="148" height="90" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="89" y="53" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>(A - 5I)v = 0</text>
      <text x="89" y="70" textAnchor="middle" fontSize="10" fill="var(--text-primary)">[[4-5, 1],[2, 3-5]]v = 0</text>
      <text x="89" y="86" textAnchor="middle" fontSize="10" fill="var(--text-primary)">[[-1, 1],[2, -2]]v = 0</text>
      <text x="89" y="102" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Matriz singular (det=0) ✓</text>
      {/* Arrow */}
      <line x1="163" y1="80" x2="171" y2="80" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="175,80 165,75 165,85" fill="var(--text-secondary)" />
      {/* Column 2 */}
      <rect x="177" y="35" width="148" height="90" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="251" y="53" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Redução por linhas</text>
      <text x="251" y="70" textAnchor="middle" fontSize="10" fill="var(--text-primary)">-v₁ + v₂ = 0</text>
      <text x="251" y="86" textAnchor="middle" fontSize="10" fill="var(--text-primary)">2v₁ - 2v₂ = 0 (dep.)</text>
      <text x="251" y="102" textAnchor="middle" fontSize="10" fill="var(--text-primary)">v₂ = v₁</text>
      {/* Arrow */}
      <line x1="325" y1="80" x2="333" y2="80" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="337,80 327,75 327,85" fill="var(--text-secondary)" />
      {/* Column 3 */}
      <rect x="339" y="35" width="148" height="90" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="413" y="53" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Eigenspace</text>
      <text x="413" y="70" textAnchor="middle" fontSize="10" fill="var(--text-primary)">v = t[1, 1]</text>
      <text x="413" y="86" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Base: {'{'}[1,1]{'}'}</text>
      <text x="413" y="102" textAnchor="middle" fontSize="10" fill="var(--text-primary)">dim = 1 (geom. mult.)</text>
      {/* Bottom note */}
      <rect x="15" y="140" width="470" height="80" rx="6" fill="rgba(74,158,237,0.07)" stroke="#4a9eed" strokeWidth="1" />
      <text x="250" y="158" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Multiplicidade Algébrica vs Geométrica</text>
      <text x="250" y="175" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Mult. algébrica (α): número de vezes que λ aparece como raiz de det(A-λI)=0</text>
      <text x="250" y="191" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Mult. geométrica (γ): dim(null(A-λI)) — sempre γ ≤ α</text>
      <text x="250" y="207" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Diagonalizável iff γ = α para todos os eigenvalues</text>
    </svg>
  );
}

function DiagonalizationSVG() {
  return (
    <div>
    <svg width="100%" viewBox="0 0 560 120" style={{ display: 'block', margin: '1rem 0 0' }}>
      <rect width="560" height="120" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">A = P D P⁻¹  —  Interpretação por mudança de base</text>
      {/* P^-1: original basis to eigen basis */}
      <rect x="15" y="32" width="105" height="76" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="67" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>P⁻¹</text>
      <text x="67" y="73" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">coords para</text>
      <text x="67" y="87" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">base eigen</text>
      <line x1="120" y1="70" x2="136" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="140,70 130,65 130,75" fill="var(--text-secondary)" />
      {/* D: scale in eigen basis */}
      <rect x="142" y="32" width="105" height="76" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="194" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">D</text>
      <text x="194" y="73" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">escala por</text>
      <text x="194" y="87" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">λ₁, λ₂, ...</text>
      <line x1="247" y1="70" x2="263" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="267,70 257,65 257,75" fill="var(--text-secondary)" />
      {/* P: back to original */}
      <rect x="269" y="32" width="105" height="76" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="321" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">P</text>
      <text x="321" y="73" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">volta à base</text>
      <text x="321" y="87" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">original</text>
      <line x1="374" y1="70" x2="390" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="394,70 384,65 384,75" fill="var(--text-secondary)" />
      {/* = A */}
      <rect x="396" y="32" width="148" height="76" rx="6" fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="2" />
      <text x="470" y="56" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>A</text>
      <text x="470" y="73" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">transformação</text>
      <text x="470" y="87" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">original</text>
      {/* Powers */}
    </svg>
    <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginTop: '0.75rem', marginBottom: '1rem' }}>
      <div style={{ fontWeight: 700, color, textAlign: 'center', marginBottom: '0.6rem', fontSize: '0.95rem' }}>Potências rápidas com diagonalização</div>
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}><InlineMath math="A^k = P D^k P^{-1}" /></div>
      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
        <InlineMath math="D^k = \text{diag}(\lambda_1^k, \lambda_2^k, \ldots, \lambda_n^k)" /> — apenas n exponenciações escalares!
      </div>
      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
        Comparado a <InlineMath math="O(n^3 \log k)" /> para multiplicações de matrizes ingénuas
      </div>
      <div style={{ textAlign: 'center', fontSize: '0.85rem' }}>
        Exemplo: <InlineMath math="A^{100} = P\,\text{diag}(5^{100}, 2^{100})\,P^{-1}" /> (trivial com eigenvalues)
      </div>
    </div>
    </div>
  );
}

function SpectralDecompSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 220" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="220" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Decomposição Espectral: A = λ₁q₁q₁ᵀ + λ₂q₂q₂ᵀ + ...</text>
      {/* Rank-1 matrix 1 */}
      <rect x="15" y="38" width="145" height="90" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="87" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>λ₁ q₁q₁ᵀ</text>
      <text x="87" y="72" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">rank-1 "slab"</text>
      <text x="87" y="88" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">λ₁ = 4.5</text>
      <text x="87" y="104" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">direção principal</text>
      <text x="87" y="118" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">mais importante</text>
      <text x="169" y="83" textAnchor="middle" fontSize="22" fill="var(--text-secondary)">+</text>
      {/* Rank-1 matrix 2 */}
      <rect x="178" y="38" width="145" height="90" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="250" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">λ₂ q₂q₂ᵀ</text>
      <text x="250" y="72" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">rank-1 "slab"</text>
      <text x="250" y="88" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">λ₂ = 1.2</text>
      <text x="250" y="104" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">direção secundária</text>
      <text x="250" y="118" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">menos variância</text>
      <text x="332" y="83" textAnchor="middle" fontSize="22" fill="var(--text-secondary)">+</text>
      {/* ... */}
      <rect x="341" y="38" width="145" height="90" rx="6" fill="rgba(74,158,237,0.1)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="413" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">λₙ qₙqₙᵀ</text>
      <text x="413" y="72" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">rank-1 "slab"</text>
      <text x="413" y="88" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">λₙ = 0.1</text>
      <text x="413" y="104" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">pode ser truncado</text>
      <text x="413" y="118" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">em aproximações</text>
      {/* PSD condition */}
      <rect x="15" y="142" width="470" height="68" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="250" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Positive Semidefinite (PSD): xᵀAx ≥ 0  para todo x</text>
      <text x="250" y="177" textAnchor="middle" fontSize="10" fill="var(--text-primary)">A é PSD  ⟺  todos os eigenvalues λᵢ ≥ 0</text>
      <text x="250" y="194" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Matrizes de covariância são sempre PSD — eigenvalues = variâncias nas direções próprias</text>
    </svg>
  );
}

function PCASVGMain() {
  return (
    <svg width="100%" viewBox="0 0 500 230" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">PCA: Componentes Principais como Eigenvectors da Covariância</text>
      {/* Data cloud */}
      {[
        [200,120],[215,105],[195,115],[225,95],[190,130],
        [210,100],[205,118],[230,90],[220,108],[185,135],
        [240,85],[175,140],[210,112],[200,125],[235,92]
      ].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={color} fillOpacity="0.45" />
      ))}
      {/* PC1 axis (major variance direction) */}
      <line x1="155" y1="160" x2="275" y2="65" stroke="#4a9eed" strokeWidth="2.5" />
      <polygon points="275,65 271,73 266,67" fill="#4a9eed" />
      <text x="278" y="62" fontSize="11" fill="#4a9eed" fontWeight="700">PC1</text>
      <text x="278" y="74" fontSize="9" fill="#4a9eed">λ₁=3.8</text>
      {/* PC2 axis (minor variance direction, orthogonal) */}
      <line x1="175" y1="80" x2="250" y2="155" stroke="#4a9eed" strokeWidth="2.5" />
      <polygon points="250,155 242,152 247,147" fill="#4a9eed" />
      <text x="253" y="165" fontSize="11" fill="#4a9eed" fontWeight="700">PC2</text>
      <text x="253" y="177" fontSize="9" fill="#4a9eed">λ₂=0.4</text>
      {/* Variance explained bar */}
      <rect x="310" y="50" width="170" height="160" rx="6" fill="rgba(74,158,237,0.10)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="395" y="68" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-secondary)">Variância Explicada</text>
      {/* Bar 1 */}
      <rect x="325" y="80" width="60" height="100" rx="3" fill="var(--text-secondary)" />
      <rect x="325" y="154" width="60" height="26" rx="3" fill="#4a9eed" />
      <text x="355" y="149" textAnchor="middle" fontSize="9" fill="#4a9eed" fontWeight="700">90.5%</text>
      <text x="355" y="197" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PC1</text>
      {/* Bar 2 */}
      <rect x="400" y="80" width="60" height="100" rx="3" fill="var(--text-secondary)" />
      <rect x="400" y="170" width="60" height="10" rx="3" fill="#4a9eed" />
      <text x="430" y="165" textAnchor="middle" fontSize="9" fill="#4a9eed" fontWeight="700">9.5%</text>
      <text x="430" y="197" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PC2</text>
    </svg>
  );
}

function PageRankSVG() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', margin: '1rem 0' }}>
    <svg width="100%" viewBox="0 0 500 230" style={{ display: 'block', flex: '1 1 320px', minWidth: 0 }}>
      <rect width="500" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">PageRank: Distribuição Estacionária = Eigenvector (λ=1)</text>
      {/* Nodes */}
      <circle cx="250" cy="70" r="28" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x="250" y="66" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>A</text>
      <text x="250" y="80" textAnchor="middle" fontSize="9" fill={color}>PR=0.38</text>
      <circle cx="150" cy="160" r="25" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="150" y="156" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">B</text>
      <text x="150" y="170" textAnchor="middle" fontSize="9" fill="#4a9eed">PR=0.12</text>
      <circle cx="350" cy="160" r="30" fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="2" />
      <text x="350" y="156" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">C</text>
      <text x="350" y="170" textAnchor="middle" fontSize="9" fill="#4a9eed">PR=0.31</text>
      <circle cx="250" cy="185" r="22" fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth="2" />
      <text x="250" y="181" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">D</text>
      <text x="250" y="195" textAnchor="middle" fontSize="9" fill="#4a9eed">PR=0.19</text>
      {/* Edges */}
      <line x1="228" y1="84" x2="170" y2="143" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="170,143 179,140 173,135" fill="var(--text-secondary)" />
      <line x1="272" y1="84" x2="326" y2="136" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="326,136 317,133 323,128" fill="var(--text-secondary)" />
      <line x1="170" y1="163" x2="228" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="228,180 217,172 220,184" fill="var(--text-secondary)" />
      <line x1="328" y1="163" x2="272" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="272,180 282,181 280,174" fill="var(--text-secondary)" />
      <line x1="250" y1="163" x2="250" y2="100" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="250,100 244,112 256,112" fill="var(--text-secondary)" />
    </svg>
    <div style={{ flex: '0 1 180px', background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '0.9rem 1rem', fontSize: '0.85rem', color: 'var(--text-primary)', textAlign: 'center' }}>
      <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}><InlineMath math="P\pi = \pi" /></div>
      <div style={{ color: 'var(--text-secondary)', marginBottom: '0.6rem' }}><InlineMath math="\lambda = 1" /></div>
      <div style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Power iter:</div>
      <div style={{ marginBottom: '0.3rem' }}><InlineMath math="\pi^{(t+1)} = P\pi^{(t)}" /></div>
      <div style={{ color: 'var(--text-secondary)' }}>até conv.</div>
    </div>
    </div>
  );
}

function DynamicalSystemSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 220" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="220" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Sistemas Dinâmicos x(t+1)=Ax(t): Estável vs Instável</text>
      {/* Stable system - spiral inward */}
      <text x="125" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Estável (|λ|{"<"}1)</text>
      <line x1="50" y1="130" x2="200" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="125" y1="50" x2="125" y2="200" stroke="var(--text-secondary)" strokeWidth="1" />
      {[
        [[125,130],[145,100],[160,115],[150,135],[135,145],[125,138],[120,132],[124,130]]
      ].map((path, pi) => (
        <polyline key={pi} points={path.map(([x,y]) => `${x},${y}`).join(' ')} fill="none" stroke="#4a9eed" strokeWidth="2" />
      ))}
      <circle cx="125" cy="130" r="5" fill="#4a9eed" />
      <circle cx="145" cy="100" r="4" fill="#4a9eed" fillOpacity="0.7" />
      <circle cx="160" cy="115" r="3.5" fill="#4a9eed" fillOpacity="0.6" />
      <circle cx="150" cy="135" r="3" fill="#4a9eed" fillOpacity="0.5" />
      <circle cx="135" cy="145" r="2.5" fill="#4a9eed" fillOpacity="0.4" />
      <text x="125" y="210" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">converge ao equilíbrio</text>
      {/* Divider */}
      <line x1="250" y1="45" x2="250" y2="205" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />
      {/* Unstable system - spiral outward */}
      <text x="375" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a9eed">Instável (|λ|{">"}1)</text>
      <line x1="270" y1="130" x2="490" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="380" y1="50" x2="380" y2="210" stroke="var(--text-secondary)" strokeWidth="1" />
      {[
        [[380,130],[390,120],[400,108],[408,115],[405,130],[398,142],[388,148],[375,140],[370,130],[372,120]]
      ].map((path, pi) => (
        <polyline key={pi} points={path.map(([x,y]) => `${x},${y}`).join(' ')} fill="none" stroke="#4a9eed" strokeWidth="2" />
      ))}
      <circle cx="380" cy="130" r="3" fill="#4a9eed" fillOpacity="0.4" />
      <circle cx="390" cy="120" r="3.5" fill="#4a9eed" fillOpacity="0.5" />
      <circle cx="400" cy="108" r="4" fill="#4a9eed" fillOpacity="0.6" />
      <circle cx="408" cy="115" r="4.5" fill="#4a9eed" fillOpacity="0.7" />
      <circle cx="405" cy="130" r="5" fill="#4a9eed" />
      <text x="380" y="210" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">diverge (cresce sem limite)</text>
      {/* Formula box */}
      <rect x="265" y="50" width="110" height="55" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="320" y="66" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>x(t) = Aᵗ x(0)</text>
      <text x="320" y="80" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">= PΛᵗP⁻¹x(0)</text>
      <text x="320" y="96" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">= Σ cᵢ λᵢᵗ vᵢ</text>
    </svg>
  );
}

function RayleighSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 220" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="220" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Rayleigh Quotient R(x) = xᵀAx / xᵀx na esfera unitária</text>
      {/* Unit circle */}
      <ellipse cx="175" cy="120" rx="80" ry="80" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="175" y="215" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">esfera unitária ||x||=1</text>
      {/* Ellipse xTAx = 1 (stretched) */}
      <ellipse cx="175" cy="120" rx="50" ry="28" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" transform="rotate(-30, 175, 120)" />
      <text x="157" y="120" textAnchor="middle" fontSize="9" fill={color}>xᵀAx=1</text>
      {/* Arrows for eigenvectors */}
      <line x1="175" y1="120" x2="240" y2="73" stroke="#4a9eed" strokeWidth="2" />
      <polygon points="240,73 236,81 231,75" fill="#4a9eed" />
      <text x="244" y="70" fontSize="10" fill="#4a9eed" fontWeight="700">q₁</text>
      <text x="244" y="82" fontSize="9" fill="#4a9eed">max=λ₁</text>
      <line x1="175" y1="120" x2="210" y2="165" stroke="#4a9eed" strokeWidth="2" />
      <polygon points="210,165 202,161 208,156" fill="#4a9eed" />
      <text x="213" y="168" fontSize="10" fill="#4a9eed" fontWeight="700">qₙ</text>
      <text x="213" y="180" fontSize="9" fill="#4a9eed">min=λₙ</text>
      {/* Variational characterization */}
      <rect x="285" y="38" width="200" height="160" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="385" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Caracterização Variacional</text>
      <text x="385" y="75" textAnchor="middle" fontSize="10" fill="var(--text-primary)">max R(x) = λ₁  (maior)</text>
      <text x="385" y="91" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">atingido em x = q₁</text>
      <text x="385" y="110" textAnchor="middle" fontSize="10" fill="var(--text-primary)">min R(x) = λₙ  (menor)</text>
      <text x="385" y="126" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">atingido em x = qₙ</text>
      <line x1="295" y1="140" x2="475" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="385" y="157" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Courant-Fischer:</text>
      <text x="385" y="173" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">λᵏ = max min R(x)</text>
      <text x="385" y="189" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">sobre subespaços de dim k</text>
    </svg>
  );
}

function PowerIterSVG() {
  return (
    <svg width="100%" viewBox="0 0 500 200" style={{ display: 'block', margin: '1rem 0' }}>
      <rect width="500" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x="250" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">Convergência da Power Iteration</text>
      {/* Axes */}
      <line x1="50" y1="160" x2="460" y2="160" stroke="var(--text-secondary)" strokeWidth="1.2" />
      <line x1="50" y1="40" x2="50" y2="160" stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x="460" y="173" fontSize="10" fill="var(--text-secondary)">iteração</text>
      <text x="30" y="40" textAnchor="middle" fontSize="10" fill="var(--text-secondary)" transform="rotate(-90,30,100)">erro</text>
      {/* Grid */}
      {[40,80,120].map((y,i) => (
        <line key={i} x1="50" y1={y} x2="460" y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3" />
      ))}
      {/* Convergence curve */}
      <polyline
        points="50,45 100,65 150,90 200,115 250,133 300,146 350,154 400,158 450,160"
        fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx="50" cy="45" r="4" fill={color} />
      <circle cx="100" cy="65" r="4" fill={color} />
      <circle cx="150" cy="90" r="4" fill={color} />
      <circle cx="200" cy="115" r="4" fill={color} />
      <circle cx="250" cy="133" r="4" fill={color} />
      <circle cx="300" cy="146" r="4" fill={color} />
      <circle cx="350" cy="154" r="4" fill={color} />
      <circle cx="400" cy="158" r="4" fill={color} />
      {/* Rate annotation */}
      <rect x="310" y="50" width="145" height="70" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="382" y="68" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Taxa de convergência</text>
      <text x="382" y="85" textAnchor="middle" fontSize="10" fill="var(--text-primary)">|λ₂/λ₁|ᵏ → 0</text>
      <text x="382" y="101" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">quanto menor o rácio</text>
      <text x="382" y="114" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">mais rápida a conv.</text>
      {/* Axis labels */}
      {[1,5,10,15,20].map((v,i) => (
        <text key={i} x={50 + i * 100} y="173" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v}</text>
      ))}
      <text x="25" y="44" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">1</text>
      <text x="25" y="84" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">0.1</text>
      <text x="25" y="124" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">0.01</text>
    </svg>
  );
}

export default function LA5() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16} /> Voltar a Álgebra Linear</Link>
      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>Eigenvalues &amp; Eigenvectors</h1>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Intuição Geométrica</h2>
        <p style={S.p}>
          Quando multiplicamos um vector por uma matriz, normalmente ele muda de direcção e de magnitude.
          Os <strong>eigenvectors</strong> são as direcções especiais que <em>não mudam de direcção</em> — apenas ficam escalados por um factor escalar chamado <strong>eigenvalue</strong>.
        </p>
        <div style={S.highlight}>
          <strong>Definição:</strong> Dado A (n×n), um vector não-nulo v e escalar λ satisfazem
          <BlockMath math="Av = \lambda v" />
          v é o <em>eigenvector</em>, λ é o <em>eigenvalue</em> correspondente.
        </div>
        <EigenvectorsSVG />
        <h3 style={S.h3}>Interpretação Geométrica dos Eigenvalues</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Valor de λ</th>
              <th style={S.th}>Efeito no eigenvector</th>
              <th style={S.th}>Exemplo em ML</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>λ &gt; 1</td><td style={S.td}>Estica na direcção do eigenvector</td><td style={S.td}>Direção de alta variância em PCA</td></tr>
            <tr><td style={S.td}>0 &lt; λ &lt; 1</td><td style={S.td}>Contrai na direcção do eigenvector</td><td style={S.td}>Regularização implícita</td></tr>
            <tr><td style={S.td}>λ = 1</td><td style={S.td}>Sem alteração de escala</td><td style={S.td}>Distribuição estacionária (PageRank)</td></tr>
            <tr><td style={S.td}>λ = 0</td><td style={S.td}>Colapso para zero — direcção do null space</td><td style={S.td}>Dimensões redundantes</td></tr>
            <tr><td style={S.td}>λ &lt; 0</td><td style={S.td}>Inverte direcção e escala</td><td style={S.td}>Instabilidade em sistemas dinâmicos</td></tr>
            <tr><td style={S.td}>λ complexo</td><td style={S.td}>Rotação + escala</td><td style={S.td}>Oscilações em séries temporais</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Equação Característica</h2>
        <p style={S.p}>
          Para encontrar eigenvalues, reformulamos Av = λv como (A − λI)v = 0. Para que exista uma solução não-trivial,
          a matriz (A − λI) não pode ser invertível — o seu determinante tem de ser zero.
        </p>
        <div style={S.highlight}>
          <strong>Equação Característica:</strong>
          <BlockMath math="\det(A - \lambda I) = 0" />
          O polinómio p(λ) = det(A − λI) chama-se <em>polinómio característico</em> de A.
          Uma matriz n×n tem exactamente n eigenvalues (contando multiplicidades, no campo dos complexos).
        </div>
        <CharPolyStepsSVG />
        <h3 style={S.h3}>Propriedades do Polinómio Característico</h3>
        <p style={S.p}>
          Para uma matriz n×n, o polinómio característico tem grau n. Em geral:
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Encontrar Eigenvectors</h2>
        <p style={S.p}>
          Depois de encontrar cada eigenvalue λᵢ, o eigenvector correspondente obtém-se resolvendo o sistema homogéneo
          (A − λᵢI)v = 0. A solução é o <strong>null space</strong> (espaço nulo) de (A − λᵢI), também chamado <em>eigenspace</em> de λᵢ.
        </p>
        <EigenvectorSolveSVG />
        <h3 style={S.h3}>Algoritmo Passo a Passo</h3>
        <h3 style={S.h3}>Multiplicidade Algébrica vs Geométrica</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Implicação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Mult. algébrica (α)</td><td style={S.td}>Multiplicidade de λ como raiz de det(A−λI)=0</td><td style={S.td}>Quantas vezes λ "conta"</td></tr>
            <tr><td style={S.td}>Mult. geométrica (γ)</td><td style={S.td}>dim(null(A−λI)) = dim do eigenspace</td><td style={S.td}>Quantos eigenvectors LI existem</td></tr>
            <tr><td style={S.td}>Relação</td><td style={S.td}>1 ≤ γ ≤ α sempre</td><td style={S.td}>γ = α para todo λ ↔ A diagonalizável</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Propriedades Fundamentais</h2>
        <p style={S.p}>
          Os eigenvalues codificam informação global sobre a matriz. Algumas propriedades permitem verificar cálculos ou obter informação sem resolver a equação característica completa.
        </p>
        <div style={S.highlight}>
          <strong>Identidades fundamentais para A (n×n) com eigenvalues λ₁,...,λₙ:</strong>
          <BlockMath math="\text{tr}(A) = \lambda_1+\lambda_2+\cdots+\lambda_n" />
          <BlockMath math="\det(A) = \lambda_1\times\lambda_2\times\cdots\times\lambda_n" />
          rank(A) = número de eigenvalues não-nulos
        </div>
        <h3 style={S.h3}>Propriedades por Tipo de Matriz</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Matriz</th>
              <th style={S.th}>Propriedade dos Eigenvalues</th>
              <th style={S.th}>Eigenvectors</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Simétrica real (Aᵀ=A)</td><td style={S.td}>Todos reais</td><td style={S.td}>Ortonormais entre si</td></tr>
            <tr><td style={S.td}>Antissimétrica (Aᵀ=−A)</td><td style={S.td}>Puramente imaginários ou zero</td><td style={S.td}>Complexos conjugados</td></tr>
            <tr><td style={S.td}>Ortogonal (AᵀA=I)</td><td style={S.td}>|λ|=1 (no círculo unitário)</td><td style={S.td}>Preservam norma</td></tr>
            <tr><td style={S.td}>Triangular (sup/inf)</td><td style={S.td}>Entradas da diagonal</td><td style={S.td}>Calculáveis por substituição</td></tr>
            <tr><td style={S.td}>Positiva definida (xᵀAx&gt;0)</td><td style={S.td}>Todos λᵢ &gt; 0</td><td style={S.td}>Ortonormais (se simétrica)</td></tr>
            <tr><td style={S.td}>Idempotente (A²=A)</td><td style={S.td}>Apenas 0 ou 1</td><td style={S.td}>Projector ortogonal</td></tr>
            <tr><td style={S.td}>Permutação</td><td style={S.td}>Raízes da unidade</td><td style={S.td}>Vectores de Fourier discretos</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Operações Preservam / Alteram Eigenvalues</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação</th>
              <th style={S.th}>Efeito nos eigenvalues</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>A + cI</td><td style={S.td}>λᵢ + c para cada i (shift)</td></tr>
            <tr><td style={S.td}>cA</td><td style={S.td}>cλᵢ para cada i (escala)</td></tr>
            <tr><td style={S.td}>A⁻¹</td><td style={S.td}>1/λᵢ para cada i (eigenvalues invertidos)</td></tr>
            <tr><td style={S.td}>Aᵏ</td><td style={S.td}>λᵢᵏ para cada i</td></tr>
            <tr><td style={S.td}>P⁻¹AP (semelhança)</td><td style={S.td}>Eigenvalues inalterados; eigenvectors mudam</td></tr>
            <tr><td style={S.td}>Aᵀ</td><td style={S.td}>Mesmos eigenvalues que A</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Diagonalização</h2>
        <p style={S.p}>
          Se uma matriz A (n×n) tem n eigenvectors linearmente independentes v₁,...,vₙ com eigenvalues λ₁,...,λₙ,
          então pode ser <strong>diagonalizada</strong>: A = PDP⁻¹.
        </p>
        <div style={S.highlight}>
          <strong>Decomposição A = PDP⁻¹:</strong>
          <BlockMath math="P = [v_1\,|\,v_2\,|\,\ldots\,|\,v_n] \quad (\text{colunas} = \text{eigenvectors})" />
          <BlockMath math="D = \text{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n) \quad (\text{diagonal} = \text{eigenvalues})" />
          Condição: A tem n eigenvectors LI ↔ A é diagonalizável
        </div>
        <DiagonalizationSVG />
        <h3 style={S.h3}>Quando É (e Não É) Diagonalizável</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Condição</th>
              <th style={S.th}>Diagonalizável?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>n eigenvalues distintos</td><td style={S.td}>Sempre sim</td></tr>
            <tr><td style={S.td}>Matriz simétrica real</td><td style={S.td}>Sempre sim (Teorema Espectral)</td></tr>
            <tr><td style={S.td}>Eigenvalue repetido com γ = α</td><td style={S.td}>Sim</td></tr>
            <tr><td style={S.td}>Eigenvalue repetido com γ &lt; α</td><td style={S.td}>Não (bloco de Jordan)</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Matrizes Simétricas e Teorema Espectral</h2>
        <p style={S.p}>
          As matrizes simétricas reais têm propriedades especialmente ricas — são omnipresentes em ML (matrizes de covariância,
          Laplacianos de grafos, Hessians) e o Teorema Espectral garante uma decomposição ortogonal.
        </p>
        <div style={S.highlight}>
          <strong>Teorema Espectral:</strong> Se A é simétrica real (Aᵀ = A), então:
          <br />
          (i) Todos os eigenvalues são reais
          <br />
          (ii) Eigenvectors de eigenvalues distintos são ortogonais
          <br />
          (iii) Existe base ortonormal de eigenvectors: <InlineMath math="A = Q\Lambda Q^T" /> onde <InlineMath math="Q^TQ=I" />
        </div>
        <SpectralDecompSVG />
        <h3 style={S.h3}>Decomposição Espectral como Soma de Rank-1</h3>
        <p style={S.p}>
          A decomposição A = QΛQᵀ pode ser escrita como soma de matrizes de rank 1, cada uma capturando
          uma "componente" da informação da matriz:
        </p>
        <h3 style={S.h3}>Positive Semidefinite (PSD)</h3>
        <p style={S.p}>
          Uma matriz simétrica A é PSD se xᵀAx ≥ 0 para todo x. Equivalentemente, todos λᵢ ≥ 0.
          As matrizes de covariância e os Gram matrices são sempre PSD.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Classificação</th>
              <th style={S.th}>Condição em eigenvalues</th>
              <th style={S.th}>xᵀAx</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Positiva Definida (PD)</td><td style={S.td}>Todos λᵢ &gt; 0</td><td style={S.td}>&gt; 0 para x ≠ 0</td></tr>
            <tr><td style={S.td}>Positiva Semidefinida (PSD)</td><td style={S.td}>Todos λᵢ ≥ 0</td><td style={S.td}>≥ 0 para todo x</td></tr>
            <tr><td style={S.td}>Indefinida</td><td style={S.td}>Mix de λᵢ &gt; 0 e λᵢ &lt; 0</td><td style={S.td}>Pode ser qualquer sinal</td></tr>
            <tr><td style={S.td}>Negativa Definida</td><td style={S.td}>Todos λᵢ &lt; 0</td><td style={S.td}>&lt; 0 para x ≠ 0</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. PCA via Eigendecomposição</h2>
        <p style={S.p}>
          Principal Component Analysis (PCA) é possivelmente a aplicação mais importante de eigendecomposição em Data Science.
          Os eigenvectors da matriz de covariância revelam as direcções de máxima variância nos dados.
        </p>
        <div style={S.highlight}>
          <strong>Pipeline PCA via Eigendecomposição:</strong>
          <br />
          1. Centrar dados: <InlineMath math="\tilde{X} = X - \text{mean}(X)" />
          <br />
          2. Calcular covariância: <InlineMath math="\Sigma = \tilde{X}^T\tilde{X} / (n-1)" />
          <br />
          3. Eigendecompor: <InlineMath math="\Sigma = Q\Lambda Q^T" /> (Σ é simétrica PSD)
          <br />
          4. Ordenar por <InlineMath math="\lambda_i" /> decrescente → q₁, q₂, ... são os PCs
          <br />
          5. Projecção: <InlineMath math="Z = \tilde{X}\,Q[:,\,:k]" /> (manter k componentes)
        </div>
        <PCASVGMain />
        <h3 style={S.h3}>Variância Explicada</h3>
        <p style={S.p}>
          Cada eigenvalue λᵢ representa a variância explicada pela componente principal qᵢ.
          A fracção de variância explicada pelo PC i é:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\text{Var. Explicada}(i) = \dfrac{\lambda_i}{\lambda_1+\lambda_2+\cdots+\lambda_n}" />
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. PageRank e Grafos</h2>
        <p style={S.p}>
          O algoritmo PageRank do Google (1998) determina a importância de páginas web usando eigendecomposição.
          A importância de uma página é proporcional à soma das importâncias das páginas que apontam para ela.
        </p>
        <div style={S.highlight}>
          <strong>Formulação como problema de eigenvalores:</strong>
          <br />
          Seja P a matriz de transição (colunas somam 1). O PageRank π satisfaz:
          <BlockMath math="P\pi = \pi \quad\Leftrightarrow\quad \pi \text{ é eigenvector de } P \text{ com } \lambda=1" />
          Pelo Teorema de Perron-Frobenius, matrizes estocásticas positivas têm λ₁=1 único e dominante.
        </div>
        <PageRankSVG />
        <h3 style={S.h3}>Power Iteration para PageRank</h3>
        <h3 style={S.h3}>Laplaciano de Grafos</h3>
        <p style={S.p}>
          O Laplaciano L = D − A (onde D é a matriz de grau e A a de adjacência) tem eigenvalues não-negativos.
          O segundo menor eigenvalue (Fiedler value) mede a conectividade do grafo e é a base de spectral clustering.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Eigenvalue do Laplaciano</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>λ₁ = 0</td><td style={S.td}>Sempre (grafo conectado: multiplicidade 1)</td></tr>
            <tr><td style={S.td}>λ₂ (Fiedler)</td><td style={S.td}>Mede conectividade — pequeno = grafo quase desconexo</td></tr>
            <tr><td style={S.td}>Número k de zeros</td><td style={S.td}>Número de componentes conectadas</td></tr>
            <tr><td style={S.td}>λₙ</td><td style={S.td}>Mede "irregularidade" máxima do grafo</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Sistemas Dinâmicos e Cadeias de Markov</h2>
        <p style={S.p}>
          Muitos sistemas em ML e ciência evoluem segundo x(t+1) = Ax(t). Os eigenvalues de A determinam
          completamente o comportamento a longo prazo do sistema.
        </p>
        <div style={S.highlight}>
          <strong>Solução via eigendecomposição:</strong>
          <BlockMath math="x(t) = A^t x(0) = P\Lambda^tP^{-1}x(0) = c_1\lambda_1^tv_1 + c_2\lambda_2^tv_2 + \cdots + c_n\lambda_n^tv_n" />
          onde cᵢ = (P⁻¹x(0))ᵢ são os coeficientes na base de eigenvectors.
        </div>
        <DynamicalSystemSVG />
        <h3 style={S.h3}>Critérios de Estabilidade</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Eigenvalues dominantes</th>
              <th style={S.th}>Comportamento do sistema</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>|λ| &lt; 1 para todos</td><td style={S.td}>Estável: x(t) → 0</td><td style={S.td}>Filtros de decaimento</td></tr>
            <tr><td style={S.td}>|λ| = 1 para algum, resto &lt; 1</td><td style={S.td}>Marginalmente estável / estacionário</td><td style={S.td}>Cadeias de Markov ergódicas</td></tr>
            <tr><td style={S.td}>|λ| &gt; 1 para algum</td><td style={S.td}>Instável: cresce sem limite</td><td style={S.td}>Instabilidade de gradiente (RNNs)</td></tr>
            <tr><td style={S.td}>λ complexo |λ|&lt;1</td><td style={S.td}>Espiral para zero (oscilação amortecida)</td><td style={S.td}>Osciladores amortecidos</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Cadeias de Markov</h3>
        <p style={S.p}>
          Uma cadeia de Markov ergódica tem uma única distribuição estacionária π que é o eigenvector de P para λ=1.
          Todas as outras componentes têm |λᵢ| &lt; 1 e decaem com o tempo.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Rayleigh Quotient e Caracterização Variacional</h2>
        <p style={S.p}>
          O Rayleigh Quotient conecta eigenvalues a problemas de optimização e é a base teórica
          do método de potência e de algoritmos como IRLM (Implicitly Restarted Lanczos Method).
        </p>
        <div style={S.highlight}>
          <strong>Rayleigh Quotient:</strong>
          <BlockMath math="R(x) = \frac{x^TAx}{x^Tx}" />
          Para A simétrica: min R(x) = λₙ (menor eigenvalue), max R(x) = λ₁ (maior eigenvalue)
          <br />
          Os extremos são atingidos nos eigenvectors correspondentes.
        </div>
        <RayleighSVG />
        <h3 style={S.h3}>Teorema de Courant-Fischer (Min-Max)</h3>
        <p style={S.p}>
          O k-ésimo eigenvalue pode ser caracterizado como:
        </p>
        <div style={S.highlight}>
          <BlockMath math="\lambda_i = \max_{\dim S=i}\ \min_{x\in S,\,x\neq0} R(x) = \min_{\dim S=n-i+1}\ \max_{x\in S,\,x\neq0} R(x)" />
        </div>
        <p style={S.p}>
          Esta caracterização variacional é fundamental para provar resultados em optimização
          (como convergência de gradient descent em quadráticas) e em análise espectral de grafos.
        </p>
        <h3 style={S.h3}>Aplicações em Optimização</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Problema</th>
              <th style={S.th}>Conexão com Eigenvalues</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Gradient descent em f(x) = xᵀAx</td><td style={S.td}>Taxa de convergência ≈ (λₙ − λ₁)/(λₙ + λ₁) (condition number)</td></tr>
            <tr><td style={S.td}>Encontrar PC1 do PCA</td><td style={S.td}>max xᵀΣx s.t. ||x||=1 → eigenvector de λ₁</td></tr>
            <tr><td style={S.td}>Linear Discriminant Analysis</td><td style={S.td}>Generalised eigenvalue problem: Σ_B v = λ Σ_W v</td></tr>
            <tr><td style={S.td}>Spectral norm de rede neural</td><td style={S.td}>||W|| = sqrt(λₘₐₓ(WᵀW)) — Lipschitz bound</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Métodos Numéricos</h2>
        <p style={S.p}>
          Para matrizes grandes, calcular eigenvalues directamente via det(A−λI)=0 é impraticável.
          Usam-se algoritmos iterativos sofisticados, cada um adaptado a diferentes estruturas de problema.
        </p>
        <PowerIterSVG />
        <h3 style={S.h3}>Power Iteration</h3>
        <p style={S.p}>
          Encontra o eigenvector dominante (maior |λ|). Cada iteração aplica A e renormaliza:
        </p>
        <h3 style={S.h3}>Algoritmo QR</h3>
        <p style={S.p}>
          O algoritmo QR é o método padrão para calcular todos os eigenvalues de matrizes densas.
          Iterativamente decompõe A = QR e recalcula A ← RQ, convergindo para uma matriz triangular superior.
        </p>
        <h3 style={S.h3}>Comparativo de Métodos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Complexidade</th>
              <th style={S.th}>Ideal para</th>
              <th style={S.th}>API NumPy/SciPy</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Power Iteration</td><td style={S.td}>O(n² per iter)</td><td style={S.td}>Maior eigenvalue de matrizes esparsas</td><td style={S.td}>Manual</td></tr>
            <tr><td style={S.td}>QR Algorithm</td><td style={S.td}>O(n³)</td><td style={S.td}>Todos eigenvalues de matrizes densas</td><td style={S.td}>np.linalg.eig</td></tr>
            <tr><td style={S.td}>LAPACK dsyevd</td><td style={S.td}>O(n³)</td><td style={S.td}>Matrizes simétricas densas</td><td style={S.td}>np.linalg.eigh</td></tr>
            <tr><td style={S.td}>Lanczos</td><td style={S.td}>O(k·nnz)</td><td style={S.td}>Poucos eigenvalues de matrizes esparsas grandes</td><td style={S.td}>scipy.sparse.linalg.eigsh</td></tr>
            <tr><td style={S.td}>Randomized SVD</td><td style={S.td}>O(n·k²)</td><td style={S.td}>Aproximação de baixo rank em big data</td><td style={S.td}>sklearn.utils.extmath.randomized_svd</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
