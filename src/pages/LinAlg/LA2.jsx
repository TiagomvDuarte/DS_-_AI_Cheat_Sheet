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

function MatrixAnnotatedSVG() {
  return (
    <svg width="340" height="220" viewBox="0 0 340 220" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {/* Bracket left */}
      <path d="M 60 30 L 50 30 L 50 190 L 60 190" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Bracket right */}
      <path d="M 230 30 L 240 30 L 240 190 L 230 190" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Cells */}
      {[0,1,2].map(r => [0,1,2].map(c => {
        const x = 80 + c * 55;
        const y = 50 + r * 55;
        const labels = [['a₁₁','a₁₂','a₁₃'],['a₂₁','a₂₂','a₂₃'],['a₃₁','a₃₂','a₃₃']];
        return (
          <g key={`${r}-${c}`}>
            <rect x={x - 22} y={y - 20} width={44} height={36} rx={5}
              fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontFamily="serif">
              {labels[r][c]}
            </text>
          </g>
        );
      }))}
      {/* Row label */}
      <text x="16" y="110" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">m</text>
      <text x="16" y="124" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">rows</text>
      <line x1="26" y1="40" x2="26" y2="180" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="22" y1="40" x2="30" y2="40" stroke={color} strokeWidth="1" />
      <line x1="22" y1="180" x2="30" y2="180" stroke={color} strokeWidth="1" />
      {/* Col label */}
      <text x="145" y="215" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">n cols</text>
      <line x1="70" y1="205" x2="245" y2="205" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="70" y1="201" x2="70" y2="209" stroke={color} strokeWidth="1" />
      <line x1="245" y1="201" x2="245" y2="209" stroke={color} strokeWidth="1" />
      {/* Title */}
      <text x="290" y="110" textAnchor="middle" fontSize="12" fill="var(--text-secondary)">A ∈ ℝ^(m\xd7n)</text>
    </svg>
  );
}

function ScalarMultSVG() {
  const a = [[3, 1], [0, 2]];
  const k = 2;
  const res = a.map(row => row.map(v => v * k));
  function drawMatrix(data, ox, oy, label) {
    return (
      <g>
        <text x={ox + 32} y={oy - 8} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">{label}</text>
        <path d={`M ${ox+4} ${oy} L ${ox} ${oy} L ${ox} ${oy+66} L ${ox+4} ${oy+66}`} stroke={color} strokeWidth="2" fill="none" />
        <path d={`M ${ox+60} ${oy} L ${ox+64} ${oy} L ${ox+64} ${oy+66} L ${ox+60} ${oy+66}`} stroke={color} strokeWidth="2" fill="none" />
        {data.map((row, r) => row.map((v, c) => (
          <text key={`${r}-${c}`} x={ox + 16 + c * 32} y={oy + 22 + r * 30} textAnchor="middle" fontSize="14" fill="var(--text-primary)" fontWeight="600">{v}</text>
        )))}
      </g>
    );
  }
  return (
    <svg width="340" height="110" viewBox="0 0 340 110" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {drawMatrix(a, 20, 20, 'A')}
      <text x="102" y="58" textAnchor="middle" fontSize="18" fill={color} fontWeight="700">+</text>
      {drawMatrix(a, 120, 20, 'A')}
      <text x="202" y="58" textAnchor="middle" fontSize="16" fill="var(--text-secondary)">=</text>
      {drawMatrix(res, 220, 20, '2A')}
    </svg>
  );
}

function MatmulDiagramSVG() {
  return (
    <svg width="380" height="200" viewBox="0 0 380 200" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {/* A matrix (3x2) */}
      <rect x="20" y="40" width="80" height="120" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="25" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">A (3×2)</text>
      {[0,1,2].map(r => [0,1].map(c => (
        <rect key={`a${r}${c}`} x={26 + c*36} y={46 + r*36} width={30} height={28} rx={3}
          fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      )))}
      {/* Highlight row 0 of A */}
      <rect x="26" y="46" width="68" height="28" rx="3" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="66" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">row i</text>

      {/* B matrix (2x3) */}
      <rect x="160" y="40" width="120" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="220" y="25" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">B (2×3)</text>
      {[0,1].map(r => [0,1,2].map(c => (
        <rect key={`b${r}${c}`} x={166 + c*36} y={46 + r*32} width={30} height={26} rx={3}
          fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      )))}
      {/* Highlight col 0 of B */}
      <rect x="166" y="46" width="30" height="62" rx="3" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="181" y="82" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">col j</text>

      {/* C matrix (3x3) */}
      <rect x="310" y="40" width="55" height="55" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="337" y="25" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">C (3×3)</text>
      <rect x="313" y="43" width="16" height="16" rx="3" fill={color} fillOpacity="0.7" />
      <text x="321" y="55" textAnchor="middle" fontSize="9" fill="#fff">ij</text>

      {/* Arrow */}
      <text x="143" y="85" textAnchor="middle" fontSize="22" fill={color}>×</text>
      <text x="290" y="85" textAnchor="middle" fontSize="22" fill="var(--text-secondary)">=</text>

      {/* Formula */}
      <text x="190" y="155" textAnchor="middle" fontSize="12" fill="var(--text-secondary)">C(i,j) = Σ A(i,k) × B(k,j)</text>
      <text x="190" y="175" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">summed over k = shared dimension</text>
    </svg>
  );
}

function TransposeSVG() {
  return (
    <svg width="400" height="170" viewBox="0 0 400 170" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {/* Original 3x2 */}
      <text x="65" y="18" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">A (3×2)</text>
      <path d="M 14 22 L 10 22 L 10 148 L 14 148" stroke={color} strokeWidth="2" fill="none" />
      <path d="M 116 22 L 120 22 L 120 148 L 116 148" stroke={color} strokeWidth="2" fill="none" />
      {[['a','b'],['c','d'],['e','f']].map((row, r) => row.map((v, c) => (
        <g key={`o${r}${c}`}>
          <rect x={18 + c*48} y={28 + r*38} width={38} height={30} rx={4}
            fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
          <text x={18 + c*48 + 19} y={28 + r*38 + 20} textAnchor="middle" fontSize="14" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
      {/* Arrow */}
      <text x="148" y="90" textAnchor="middle" fontSize="22" fill={color}>→</text>
      <text x="148" y="112" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">transpose</text>

      {/* Transposed 2x3 */}
      <text x="278" y="18" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Aᵀ (2×3)</text>
      <path d="M 174 22 L 170 22 L 170 90 L 174 90" stroke={color} strokeWidth="2" fill="none" />
      <path d="M 382 22 L 386 22 L 386 90 L 382 90" stroke={color} strokeWidth="2" fill="none" />
      {[['a','c','e'],['b','d','f']].map((row, r) => row.map((v, c) => (
        <g key={`t${r}${c}`}>
          <rect x={178 + c*66} y={28 + r*38} width={56} height={30} rx={4}
            fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
          <text x={178 + c*66 + 28} y={28 + r*38 + 20} textAnchor="middle" fontSize="14" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
    </svg>
  );
}

function DetSquareSVG() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {/* Unit square */}
      <rect x="30" y="80" width="60" height="60" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="60" y="175" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Unit square</text>
      <text x="60" y="188" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">area = 1</text>
      {/* Arrow */}
      <text x="120" y="118" fontSize="20" fill={color} textAnchor="middle">→</text>
      <text x="120" y="134" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">× A</text>
      {/* Transformed parallelogram */}
      <polygon points="150,140 210,100 250,60 190,100"
        fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="210" y="175" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Transformed</text>
      <text x="210" y="188" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">area = |det(A)|</text>
      {/* 2x2 matrix */}
      <text x="30" y="30" fontSize="11" fill="var(--text-secondary)">A = </text>
      <text x="55" y="30" fontSize="13" fill="var(--text-primary)">[[a b] [c d]]   det = ad − bc</text>
    </svg>
  );
}

function InverseSVG() {
  return (
    <svg width="360" height="130" viewBox="0 0 360 130" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {/* Input vector */}
      <rect x="10" y="40" width="60" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="40" y="70" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="600">x</text>
      <text x="40" y="110" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">input</text>
      {/* Arrow A */}
      <line x1="72" y1="65" x2="128" y2="65" stroke={color} strokeWidth="2" />
      <polygon points="128,60 140,65 128,70" fill={color} />
      <text x="106" y="56" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">A</text>
      {/* Transformed */}
      <rect x="142" y="40" width="60" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="172" y="70" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="600">Ax</text>
      <text x="172" y="110" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">transformed</text>
      {/* Arrow A-inv */}
      <line x1="204" y1="65" x2="258" y2="65" stroke="#f97316" strokeWidth="2" />
      <polygon points="258,60 270,65 258,70" fill="#f97316" />
      <text x="237" y="56" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">A⁻¹</text>
      {/* Recovered */}
      <rect x="272" y="40" width="78" height="50" rx="8" fill="rgba(16,185,129,0.1)" stroke="#f97316" strokeWidth="1.5" />
      <text x="311" y="70" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="600">A⁻¹Ax = x</text>
      <text x="311" y="110" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">recovered</text>
    </svg>
  );
}

function NeuralLayerSVG() {
  const inputs = [0, 1, 2];
  const outputs = [0, 1];
  return (
    <svg width="360" height="200" viewBox="0 0 360 200" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {/* Input nodes */}
      {inputs.map(i => (
        <g key={`in${i}`}>
          <circle cx={60} cy={50 + i * 50} r={18} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={60} y={55 + i * 50} textAnchor="middle" fontSize="12" fill="var(--text-primary)">x{i+1}</text>
        </g>
      ))}
      {/* Output nodes */}
      {outputs.map(i => (
        <g key={`out${i}`}>
          <circle cx={280} cy={75 + i * 60} r={18} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
          <text x={280} y={80 + i * 60} textAnchor="middle" fontSize="12" fill="var(--text-primary)">y{i+1}</text>
        </g>
      ))}
      {/* Connections */}
      {inputs.map(i => outputs.map(j => (
        <line key={`w${i}${j}`}
          x1={78} y1={50 + i * 50}
          x2={262} y2={75 + j * 60}
          stroke="rgba(249,115,22,0.10)" strokeWidth="1.5" />
      )))}
      {/* Weight matrix label */}
      <rect x="145" y="85" width="70" height="36" rx="8" fill={color} fillOpacity="0.9" />
      <text x="180" y="100" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">W</text>
      <text x="180" y="114" textAnchor="middle" fontSize="10" fill="#fff">(2×3)</text>
      {/* Labels */}
      <text x="60" y="185" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">x ∈ ℝ³</text>
      <text x="280" y="185" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">y = Wx+b</text>
    </svg>
  );
}

function DecompTreeSVG() {
  return (
    <svg width="380" height="210" viewBox="0 0 380 210" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}>
      {/* Root */}
      <rect x="145" y="10" width="90" height="32" rx="8" fill={color} />
      <text x="190" y="31" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="700">Matrix A</text>
      {/* Branches */}
      <line x1="190" y1="42" x2="60" y2="90" stroke={color} strokeWidth="1.5" />
      <line x1="190" y1="42" x2="150" y2="90" stroke={color} strokeWidth="1.5" />
      <line x1="190" y1="42" x2="240" y2="90" stroke={color} strokeWidth="1.5" />
      <line x1="190" y1="42" x2="330" y2="90" stroke={color} strokeWidth="1.5" />
      {/* LU */}
      <rect x="20" y="90" width="80" height="32" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="111" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">LU</text>
      <text x="60" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Solve Ax=b</text>
      {/* QR */}
      <rect x="110" y="90" width="80" height="32" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="150" y="111" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">QR</text>
      <text x="150" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Least squares</text>
      {/* Eigen */}
      <rect x="200" y="90" width="80" height="32" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="240" y="111" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Eigen</text>
      <text x="240" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">PCA, dynamics</text>
      {/* SVD */}
      <rect x="290" y="90" width="80" height="32" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="330" y="111" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">SVD</text>
      <text x="330" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Universal</text>
      {/* Details row */}
      <text x="60" y="165" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">O(n³)</text>
      <text x="60" y="177" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">square A</text>
      <text x="150" y="165" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">O(mn²)</text>
      <text x="150" y="177" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">m≥n</text>
      <text x="240" y="165" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">O(n³)</text>
      <text x="240" y="177" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">symmetric</text>
      <text x="330" y="165" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">O(mn²)</text>
      <text x="330" y="177" textAnchor="middle" fontSize="9" fill={color}>any shape</text>
    </svg>
  );
}

export default function LA2() {
  return (
    <div style={S.page}>
      <Link to="/linalg" style={S.back}><ArrowLeft size={16} /> Voltar a Álgebra Linear</Link>
      <span style={S.tag}>MÓDULO 02</span>
      <h1 style={S.h1}>Matrizes &amp; Operações</h1>
      <p style={S.lead}>
        Matrizes são a estrutura central de toda a álgebra linear aplicada — representam transformações lineares,
        conjuntos de dados, pesos de redes neuronais e muito mais. Neste módulo exploramos a anatomia, as operações
        e as propriedades que tornam as matrizes tão poderosas em Data Science e Machine Learning.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O que é uma Matriz</h2>
        <p style={S.p}>
          Uma matriz A de dimensão m×n é uma grelha retangular de números com m linhas e n colunas.
          O elemento na linha i e coluna j escreve-se A(i,j) ou a(ij). Formalmente, A ∈ ℝ^(m×n).
        </p>
        <MatrixAnnotatedSVG />
        <div style={S.highlight}>
          <strong>Matriz como função linear:</strong> A : ℝⁿ → ℝᵐ. Multiplicar A por um vetor x ∈ ℝⁿ
          produz um vetor y ∈ ℝᵐ. Cada linha de A define um produto interno com x.
        </div>
        <h3 style={S.h3}>Matrizes em Machine Learning</h3>
        <p style={S.p}>
          <strong>Dataset matrix X ∈ ℝ^(n×p):</strong> n amostras, p features. Cada linha é uma observação,
          cada coluna é uma variável. Esta convenção é usada em scikit-learn, PyTorch e TensorFlow.
        </p>
        <p style={S.p}>
          <strong>Weight matrix W ∈ ℝ^(d_out × d_in):</strong> numa camada densa de rede neuronal, W mapeia
          um vetor de input de dimensão d_in para um vetor de output de dimensão d_out. Os pesos aprendidos
          ficam armazenados nesta matriz.
        </p>
        <div style={S.code}>{`import numpy as np

# Dataset: 100 amostras, 5 features
X = np.random.randn(100, 5)   # shape (100, 5)

# Weight matrix: 3 outputs, 5 inputs
W = np.random.randn(3, 5)     # shape (3, 5)

# Uma amostra
x = X[0]                       # shape (5,)
y = W @ x                      # shape (3,)  — y = Wx`}</div>
        <div style={S.note}>
          Convenção: em álgebra linear teórica os vectores são colunas (x ∈ ℝⁿ).
          Em pandas/sklearn as linhas são amostras (X de shape n×p). Preste atenção às transposas!
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Tipos Especiais de Matrizes</h2>
        <p style={S.p}>
          Certos padrões estruturais de matrizes surgem repetidamente e têm propriedades algébricas
          que simplificam cálculos e análises.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Propriedade chave</th>
              <th style={S.th}>Exemplo ML</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Quadrada','m = n','Pode ter inversa','Gramiana XᵀX'],
              ['Simétrica','A = Aᵀ','Eigenvalues reais','Covariância Σ'],
              ['Diagonal','a(ij)=0 se i≠j','Inv = 1/dᵢᵢ','Scaling matrix'],
              ['Identidade','I: dᵢᵢ=1, resto 0','AI = IA = A','Inicialização'],
              ['Zero','todos 0','rank 0','Bias init'],
              ['Triangular sup.','a(ij)=0 se i>j','Det = produto diagonal','LU, backsolve'],
              ['Triangular inf.','a(ij)=0 se i<j','Det = produto diagonal','LU, forwardsolve'],
              ['Ortogonal','AᵀA = I','A⁻¹ = Aᵀ, det=±1','Q em QR, rotações'],
              ['Positiva definida','xᵀAx > 0 ∀x≠0','Todos eigenvalues > 0','Covariância, kernel'],
            ].map(([t,d,p,e]) => (
              <tr key={t}>
                <td style={S.td}><strong>{t}</strong></td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Matriz ortogonal preserva comprimentos e ângulos:</strong> se Q é ortogonal,
          então ||Qx|| = ||x|| e o ângulo entre Qx e Qy é igual ao ângulo entre x e y.
          São as rotações e reflexões do espaço.
        </div>
        <div style={S.code}>{`# Verificar simetria
A = np.array([[2, 1, 0], [1, 3, 1], [0, 1, 2]])
print(np.allclose(A, A.T))   # True

# Matriz identidade
I = np.eye(3)

# Ortogonal: Q de decomposição QR
Q, R = np.linalg.qr(np.random.randn(4, 4))
print(np.allclose(Q.T @ Q, np.eye(4)))   # True`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Adição e Multiplicação por Escalar</h2>
        <p style={S.p}>
          A adição de matrizes e a multiplicação por escalar são operações element-wise: aplicam-se
          elemento a elemento, exigindo que as matrizes tenham a mesma dimensão.
        </p>
        <ScalarMultSVG />
        <div style={S.highlight}>
          <strong>Adição:</strong> (A + B)(i,j) = A(i,j) + B(i,j). As dimensões têm de ser iguais.<br />
          <strong>Escalar:</strong> (kA)(i,j) = k × A(i,j). O escalar distribui por todos os elementos.
        </div>
        <h3 style={S.h3}>Broadcasting em NumPy</h3>
        <p style={S.p}>
          NumPy generaliza a adição com broadcasting — permite operar entre arrays de formas diferentes
          desde que sejam compatíveis segundo regras específicas. Em ML, isto é essencial para adicionar
          bias vectors a batches.
        </p>
        <div style={S.code}>{`A = np.array([[1, 2, 3], [4, 5, 6]])   # (2, 3)
B = np.array([[10, 20, 30]])            # (1, 3)
C = A + B                               # (2, 3) — B broadcast por cada linha

# Operações elementares
print(2 * A)          # multiplica cada elemento por 2
print(A + 1)          # adiciona 1 a cada elemento
print(A ** 2)         # eleva ao quadrado element-wise

# Soma de matrizes em batch (e.g., gradientes acumulados)
grads = [np.random.randn(3, 4) for _ in range(8)]
total_grad = sum(grads)   # soma element-wise`}</div>
        <div style={S.note}>
          As propriedades algébricas — comutatividade (A+B=B+A), associatividade, distributividade sobre
          escalares — tornam estas operações simples e previsíveis, ao contrário da multiplicação matricial.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Multiplicação de Matrizes</h2>
        <p style={S.p}>
          A multiplicação matricial é a operação mais importante da álgebra linear. Dada A ∈ ℝ^(m×k)
          e B ∈ ℝ^(k×n), o produto C = AB ∈ ℝ^(m×n) tem elemento:
        </p>
        <div style={S.highlight} style={{ textAlign: 'center', padding: '1.2rem' }}>
          C(i,j) = Σ(k) A(i,k) × B(k,j)
        </div>
        <MatmulDiagramSVG />
        <h3 style={S.h3}>Restrição de dimensões</h3>
        <p style={S.p}>
          Para que AB seja definido, o número de colunas de A deve igualar o número de linhas de B.
          Mnemónica: (m×<strong>k</strong>) × (<strong>k</strong>×n) = (m×n).
          As dimensões internas cancelam, as externas formam o resultado.
        </p>
        <h3 style={S.h3}>Não comutatividade</h3>
        <p style={S.p}>
          Em geral AB ≠ BA. Mesmo quando ambas as ordens são definidas (A e B quadradas), os resultados
          diferem. Isto tem consequências directas em backpropagation: a ordem das jacobians importa.
        </p>
        <h3 style={S.h3}>4 perspectivas sobre matmul</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Perspectiva</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Utilidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Produto interno','C(i,j) = linha i de A · coluna j de B','Definição standard, implementação naive'],
              ['Combinação de colunas','Col j de C = A × (col j de B)','Interpretação de transformação'],
              ['Combinação de linhas','Linha i de C = (linha i de A) × B','Perspectiva de amostra'],
              ['Soma de outer products','AB = Σ(k) a(k) bᵀ(k)','Rank-1 decomposição, low-rank approx'],
            ].map(([p,d,u]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`A = np.random.randn(3, 4)
B = np.random.randn(4, 2)

# Multiplicação matricial — operador @ (Python 3.5+)
C = A @ B                       # (3, 2)
C2 = np.matmul(A, B)           # equivalente
C3 = np.dot(A, B)              # também funciona para 2D

# Verificar não comutatividade
X = np.random.randn(3, 3)
Y = np.random.randn(3, 3)
print(np.allclose(X @ Y, Y @ X))   # False (quase sempre)

# Batch matmul — essencial em deep learning
# B amostras, cada com matrizes A(i) e B(i)
A_batch = np.random.randn(32, 8, 4)   # batch de 32 matrizes 8x4
B_batch = np.random.randn(32, 4, 6)   # batch de 32 matrizes 4x6
C_batch = A_batch @ B_batch            # (32, 8, 6)`}</div>
        <div style={S.note}>
          Complexidade naive: O(mnk) para (m×k) × (k×n). Algoritmos como Strassen reduzem
          para ~O(n^2.81). Em prática, BLAS e cuBLAS com hardware SIMD/GPU dominam o desempenho.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Transposta</h2>
        <p style={S.p}>
          A transposta de A ∈ ℝ^(m×n) é a matriz Aᵀ ∈ ℝ^(n×m) definida por (Aᵀ)(i,j) = A(j,i).
          Reflecte a matriz ao longo da diagonal principal — linhas tornam-se colunas e vice-versa.
        </p>
        <TransposeSVG />
        <h3 style={S.h3}>Propriedades essenciais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Nota</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Involução','(Aᵀ)ᵀ = A','Transposta dupla devolve original'],
              ['Produto (reversa)','(AB)ᵀ = BᵀAᵀ','A ordem inverte!'],
              ['Soma','(A+B)ᵀ = Aᵀ + Bᵀ','Distribui sobre adição'],
              ['Escalar','(kA)ᵀ = kAᵀ','Escalar comuta'],
              ['Simetria','A = Aᵀ','A é simétrica'],
              ['Gram matrix','AᵀA é simétrica e PSD','Sempre!'],
            ].map(([p,f,n]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Transposta em ML: matriz de covariância</h3>
        <p style={S.p}>
          Dada uma matriz de dados X ∈ ℝ^(n×p) (centrada), a matriz de covariância amostral é
          Σ = XᵀX / (n-1) ∈ ℝ^(p×p). É sempre simétrica e positiva semi-definida.
          PCA decompõe esta matriz para encontrar direcções de máxima variância.
        </p>
        <h3 style={S.h3}>Gradiente da forma quadrática</h3>
        <div style={S.highlight}>
          Para f(x) = xᵀAx, o gradiente é ∇f = (A + Aᵀ)x.
          Se A for simétrica (A = Aᵀ), simplifica para ∇f = 2Ax.
          Essencial em regressão linear: minimizar ||Xw − y||² leva a XᵀXw = Xᵀy.
        </div>
        <div style={S.code}>{`X = np.random.randn(100, 5)   # 100 amostras, 5 features
X_centered = X - X.mean(axis=0)

# Matriz de covariância
cov = X_centered.T @ X_centered / (len(X) - 1)   # (5, 5) simétrica
print(np.allclose(cov, cov.T))   # True

# Transposta no NumPy
A = np.random.randn(3, 4)
print(A.T.shape)       # (4, 3)
print(A.T.T is A)      # False, mas np.allclose(A.T.T, A) é True

# Regra do produto transposto
B = np.random.randn(4, 2)
print(np.allclose((A @ B).T, B.T @ A.T))   # True`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Determinante</h2>
        <p style={S.p}>
          O determinante det(A) é um escalar associado a uma matriz quadrada que codifica o factor
          de escala do volume sob a transformação linear A. Só é definido para matrizes quadradas.
        </p>
        <h3 style={S.h3}>Casos simples</h3>
        <div style={S.highlight}>
          <strong>2×2:</strong> det([[a,b],[c,d]]) = ad − bc<br />
          <strong>3×3 (expansão de cofactores pela 1ª linha):</strong><br />
          det(A) = a(11)·M(11) − a(12)·M(12) + a(13)·M(13)<br />
          onde M(ij) é o menor (det da submatriz com linha i e coluna j removidas).
        </div>
        <DetSquareSVG />
        <h3 style={S.h3}>Interpretação geométrica</h3>
        <p style={S.p}>
          |det(A)| = factor pelo qual a transformação A escala volumes.
          Se det(A) = 2, a transformação duplica áreas (em 2D) ou volumes (em 3D).
          O sinal indica se a orientação é preservada (positivo) ou invertida (negativo).
        </p>
        <h3 style={S.h3}>Propriedades e aplicações</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Fórmula/Condição</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Produto','det(AB) = det(A) · det(B)'],
              ['Transposta','det(Aᵀ) = det(A)'],
              ['Inversa','det(A⁻¹) = 1 / det(A)'],
              ['Singular','det(A) = 0 ⟺ A não tem inversa'],
              ['Escala','det(kA) = kⁿ · det(A) para A n×n'],
              ['Troca de linhas','troca de 2 linhas → multiplica det por −1'],
              ['Jacobiano','|det(J)| = factor de mudança de variável em integrais'],
            ].map(([p,f]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{f}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`A = np.array([[3., 1.], [2., 4.]])
print(np.linalg.det(A))      # 3*4 - 1*2 = 10.0

# Verificar det(AB) = det(A)*det(B)
B = np.random.randn(2, 2)
print(np.isclose(np.linalg.det(A @ B),
                  np.linalg.det(A) * np.linalg.det(B)))  # True

# Matriz singular
C = np.array([[1., 2.], [2., 4.]])   # linha 2 = 2 × linha 1
print(np.linalg.det(C))   # ≈ 0

# Jacobiano para mudança de variáveis — numericamente
from numpy.linalg import det
J = np.array([[np.cos(0.5), -np.sin(0.5)],
              [np.sin(0.5),  np.cos(0.5)]])   # rotação
print(abs(det(J)))   # 1.0 — rotações preservam volume`}</div>
        <div style={S.note}>
          Para matrizes grandes, calcule det via decomposição LU (O(n³)).
          Evite calcular det directamente em muitas aplicações ML — é numericamente instável
          para matrizes grandes; prefira log-det ou checar rank.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Matriz Inversa</h2>
        <p style={S.p}>
          A inversa de A ∈ ℝ^(n×n), denotada A⁻¹, satisfaz AA⁻¹ = A⁻¹A = I.
          Existe se e só se det(A) ≠ 0 (A é invertível, não-singular, de rank completo).
        </p>
        <InverseSVG />
        <h3 style={S.h3}>Fórmula para 2×2</h3>
        <div style={S.highlight}>
          Se A = [[a,b],[c,d]] e det(A) = ad−bc ≠ 0, então<br />
          A⁻¹ = (1 / (ad−bc)) × [[d, −b], [−c, a]]
        </div>
        <h3 style={S.h3}>Método de Gauss-Jordan</h3>
        <p style={S.p}>
          Para dimensões maiores, forme a matriz aumentada [A | I] e aplique operações elementares
          de linhas até obter [I | A⁻¹]. Este método tem complexidade O(n³).
        </p>
        <h3 style={S.h3}>Propriedades</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Fórmula</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Produto inverso','(AB)⁻¹ = B⁻¹A⁻¹'],
              ['Transposta inversa','(Aᵀ)⁻¹ = (A⁻¹)ᵀ'],
              ['Escalar','(kA)⁻¹ = (1/k) A⁻¹'],
              ['Involução','(A⁻¹)⁻¹ = A'],
              ['Determinante','det(A⁻¹) = 1/det(A)'],
            ].map(([p,f]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{f}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Pseudo-inversa de Moore-Penrose</h3>
        <p style={S.p}>
          Para matrizes não quadradas ou singulares, usa-se a pseudo-inversa A⁺ (Moore-Penrose).
          Dada A = UΣVᵀ (SVD), A⁺ = VΣ⁺Uᵀ onde Σ⁺ inverte os valores singulares não-zero.
          A⁺ resolve o problema de mínimos quadrados: x = A⁺b minimiza ||Ax − b||.
        </p>
        <div style={S.code}>{`A = np.array([[2., 1.], [1., 3.]])
A_inv = np.linalg.inv(A)
print(np.allclose(A @ A_inv, np.eye(2)))   # True

# Resolver sistema Ax = b (preferir lstsq a inv!)
b = np.array([4., 5.])
x = np.linalg.solve(A, b)          # mais estável que inv(A) @ b
x2 = np.linalg.lstsq(A, b, rcond=None)[0]   # mínimos quadrados

# Pseudo-inversa para não-quadradas
A_rect = np.random.randn(5, 3)    # mais linhas que colunas
A_pinv = np.linalg.pinv(A_rect)   # (3, 5)
print(np.allclose(A_pinv @ A_rect, np.eye(3)))   # True (aprox)`}</div>
        <div style={S.note}>
          Em prática, evite calcular a inversa explicitamente. Para Ax=b prefira np.linalg.solve
          (usa LU internamente). Para sistemas sobredeterminados use lstsq. A inversa explícita
          amplifica erros numéricos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Traço</h2>
        <p style={S.p}>
          O traço de uma matriz quadrada A ∈ ℝ^(n×n) é a soma dos seus elementos diagonais:
          tr(A) = Σ a(ii) = a(11) + a(22) + ... + a(nn).
          É também igual à soma dos eigenvalues de A.
        </p>
        <h3 style={S.h3}>Propriedades do traço</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Importância</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Linearidade','tr(A+B) = tr(A) + tr(B)','Gradients compostos'],
              ['Escalar','tr(kA) = k tr(A)','Learning rate scaling'],
              ['Ciclicidade','tr(AB) = tr(BA)','Fundamental em derivadas'],
              ['Ciclicidade geral','tr(ABC) = tr(CAB) = tr(BCA)','Gradiente de traces'],
              ['Frobenius','tr(AᵀA) = ||A||²(F)','Norma de peso'],
              ['Eigenvalues','tr(A) = Σ λ(i)','Invariante espectral'],
              ['Identidade','tr(I_n) = n','Dimensão do espaço'],
            ].map(([p,f,i]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Hutchinson Trace Estimator</h3>
        <p style={S.p}>
          Para matrizes muito grandes onde calcular o traço exacto é caro (e.g., hessiana de uma
          rede neuronal), o estimador de Hutchinson permite estimar tr(A) com vectores aleatórios:
        </p>
        <div style={S.highlight}>
          tr(A) ≈ (1/m) Σ zᵢᵀ A zᵢ, onde z ~ Rademacher ({'{-1, +1}'})
        </div>
        <div style={S.code}>{`A = np.array([[4., 2., 0.], [2., 3., 1.], [0., 1., 2.]])
print(np.trace(A))                    # 4+3+2 = 9

# tr(AB) = tr(BA)
B = np.random.randn(3, 3)
print(np.isclose(np.trace(A @ B), np.trace(B @ A)))   # True

# Frobenius norm via trace
frob_sq = np.trace(A.T @ A)
frob_direct = np.sum(A ** 2)
print(np.isclose(frob_sq, frob_direct))   # True

# Hutchinson estimator
def hutchinson_trace(A, m=500):
    n = A.shape[0]
    estimates = []
    for _ in range(m):
        z = np.random.choice([-1., 1.], size=n)
        estimates.append(z @ A @ z)
    return np.mean(estimates)

print(f"Exact: {np.trace(A):.2f}, Hutchinson: {hutchinson_trace(A):.2f}")`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Normas de Matrizes</h2>
        <p style={S.p}>
          Tal como vectores têm normas que medem comprimento, matrizes têm normas que medem
          tamanho de diferentes formas — dependendo do que queremos quantificar.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Norma</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Interpretação</th>
              <th style={S.th}>Uso em ML</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Frobenius','||A||F = sqrt(Σ a(ij)²) = sqrt(tr(AᵀA))','Soma quadrados de todos elementos','L2 regularização de pesos'],
              ['Espectral','||A||2 = σ_max(A)','Maior valor singular; máx alongamento','Lipschitz constant de camada'],
              ['Nuclear','||A||* = Σ σ(i)','Soma valores singulares','Low-rank regularização'],
              ['Max (infinito)','max(i) Σ(j) |a(ij)|','Soma máxima de linha','Robustez a perturbações'],
              ['Operator (1-norm)','max(j) Σ(i) |a(ij)|','Soma máxima de coluna','Análise de estabilidade'],
            ].map(([n,f,i,u]) => (
              <tr key={n}>
                <td style={S.td}><strong>{n}</strong></td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{i}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Regularização com normas de matrizes</h3>
        <p style={S.p}>
          Em redes neuronais, a regularização L2 (weight decay) penaliza a norma de Frobenius
          dos pesos: L(W) = loss + λ ||W||²F. Isto encoraja pesos pequenos.
        </p>
        <p style={S.p}>
          A norma nuclear promove esparsidade no espaço de valores singulares, i.e., promove
          matrizes de baixo rank. Usada em matrix completion (Netflix problem) e compressão de modelos.
        </p>
        <div style={S.code}>{`W = np.random.randn(64, 128)

# Frobenius norm
frob = np.linalg.norm(W, 'fro')
frob2 = np.sqrt(np.sum(W**2))         # equivalente
print(np.isclose(frob, frob2))         # True

# Spectral norm (maior valor singular)
spectral = np.linalg.norm(W, 2)
_, s, _ = np.linalg.svd(W, full_matrices=False)
print(np.isclose(spectral, s[0]))      # True

# Nuclear norm (soma dos valores singulares)
nuclear = np.linalg.norm(W, 'nuc')
print(np.isclose(nuclear, np.sum(s)))  # True

# L2 regularização no training loop (PyTorch style)
# loss = criterion(y_pred, y_true) + lambda_ * torch.norm(W, 'fro')**2`}</div>
        <div style={S.note}>
          A norma espectral é a constante de Lipschitz da transformação linear: ||Ax - Ay|| ≤ σ_max ||x-y||.
          Spectral normalisation (Miyato 2018) usa isto para estabilizar treino de GANs.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Matrizes em Redes Neuronais</h2>
        <p style={S.p}>
          Redes neuronais profundas são essencialmente composições de transformações afim e não-linearidades.
          Cada camada densa é uma multiplicação matricial seguida de uma activação.
        </p>
        <NeuralLayerSVG />
        <h3 style={S.h3}>Forward pass: uma amostra vs batch</h3>
        <div style={S.highlight}>
          <strong>Uma amostra:</strong> y = Wx + b, onde W ∈ ℝ^(d_out × d_in), x ∈ ℝ^(d_in), b ∈ ℝ^(d_out)<br />
          <strong>Batch:</strong> Y = XWᵀ + b, onde X ∈ ℝ^(n × d_in), W ∈ ℝ^(d_out × d_in), Y ∈ ℝ^(n × d_out)
        </div>
        <h3 style={S.h3}>Inicialização de pesos (Xavier / Glorot)</h3>
        <p style={S.p}>
          Para evitar vanishing/exploding gradients, os pesos são inicializados com variância cuidadosa.
          Xavier initialisation: σ = sqrt(1 / n_in), ou na versão uniforme ±sqrt(6 / (n_in + n_out)).
          He initialisation para ReLU: σ = sqrt(2 / n_in).
        </p>
        <h3 style={S.h3}>Mecanismo de Atenção (Transformers)</h3>
        <p style={S.p}>
          O self-attention usa três matrizes de projecção Q, K, V e computa:
          Attention(Q,K,V) = softmax(QKᵀ / sqrt(d_k)) × V.
          A divisão por sqrt(d_k) previne gradientes muito pequenos quando d_k é grande.
        </p>
        <div style={S.code}>{`# Forward pass manual
W = np.random.randn(4, 3)    # 4 outputs, 3 inputs
b = np.zeros(4)
x = np.random.randn(3)
y = W @ x + b                # (4,)

# Batch forward pass
X = np.random.randn(32, 3)   # 32 amostras
Y = X @ W.T + b              # (32, 4) — nota a transposta!

# Xavier initialisation
def xavier_init(n_in, n_out):
    sigma = np.sqrt(1.0 / n_in)
    return np.random.normal(0, sigma, (n_out, n_in))

W_init = xavier_init(512, 256)
print(W_init.std())   # ≈ 0.044 = sqrt(1/512)

# Simplified self-attention
def attention(Q, K, V):
    d_k = Q.shape[-1]
    scores = Q @ K.T / np.sqrt(d_k)    # (seq, seq)
    # softmax para estabilidade numérica
    scores -= scores.max(axis=-1, keepdims=True)
    weights = np.exp(scores)
    weights /= weights.sum(axis=-1, keepdims=True)
    return weights @ V                   # (seq, d_v)

seq, d_k, d_v = 10, 8, 8
Q = np.random.randn(seq, d_k)
K = np.random.randn(seq, d_k)
V = np.random.randn(seq, d_v)
out = attention(Q, K, V)    # (10, 8)`}</div>
        <h3 style={S.h3}>Eficiência computacional</h3>
        <p style={S.p}>
          BLAS (Basic Linear Algebra Subprograms) optimiza matmul para CPUs com SIMD e cache tiling.
          cuBLAS faz o mesmo para GPUs NVIDIA. PyTorch e JAX chamam estas routines automaticamente —
          a abstracção de tensores esconde chamadas a kernels optimizados.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação</th>
              <th style={S.th}>Complexidade</th>
              <th style={S.th}>GPU speedup típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['matmul (m×k)×(k×n)','O(mnk)','100–1000×'],
              ['Batch matmul (b×m×k)×(b×k×n)','O(bmnk)','100–1000×'],
              ['Softmax (n)','O(n)','10–50×'],
              ['Element-wise','O(n)','10–100×'],
            ].map(([op,c,s]) => (
              <tr key={op}>
                <td style={S.td}>{op}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Decomposições — Visão Geral</h2>
        <p style={S.p}>
          Toda a potência da álgebra linear aplicada reside em decompor matrizes em factores
          com estrutura especial. As quatro decomposições fundamentais são LU, QR, Eigen e SVD.
        </p>
        <DecompTreeSVG />
        <h3 style={S.h3}>Quando usar cada decomposição</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Decomposição</th>
              <th style={S.th}>Forma</th>
              <th style={S.th}>Requisito</th>
              <th style={S.th}>Aplicação principal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['LU','A = LU (triangulares)','A quadrada e invertível','Resolver Ax=b, calcular det'],
              ['LU com pivotamento','PA = LU','A quadrada (geral)','Estabilidade numérica'],
              ['QR','A = QR (ortogonal × triangular)','A m×n, m≥n','Mínimos quadrados, eigenvalues'],
              ['Eigendecomposição','A = VΛV⁻¹','A quadrada diagonalizável','PCA, PageRank, dinâmicas'],
              ['Cholesky','A = LLᵀ','A simétrica positiva definida','Gauss processes, kalman filter'],
              ['SVD','A = UΣVᵀ','Qualquer A m×n','Tudo: PCA, compressão, pseudo-inv'],
            ].map(([d,f,r,a]) => (
              <tr key={d}>
                <td style={S.td}><strong>{d}</strong></td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{r}</td>
                <td style={S.td}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Número de condicionamento</h3>
        <p style={S.p}>
          O número de condicionamento κ(A) = σ_max / σ_min mede a sensibilidade da solução de Ax=b
          a perturbações em b. κ(A) ≈ 1 é bem condicionado; κ(A) ≫ 1 é mal condicionado (near-singular).
        </p>
        <div style={S.highlight}>
          Se κ(A) = 10^k, perde-se aproximadamente k dígitos de precisão na solução.
          Uma matrix com κ ≈ 10^15 numa máquina float64 (≈16 dígitos) é numericamente singular.
        </div>
        <div style={S.code}>{`A = np.random.randn(4, 4)

# LU decomposition
from scipy.linalg import lu
P, L, U = lu(A)
print(np.allclose(P @ L @ U, A))   # True

# QR decomposition
Q, R = np.linalg.qr(A)
print(np.allclose(Q @ R, A))        # True
print(np.allclose(Q.T @ Q, np.eye(4)))  # True

# Eigendecomposition (A simétrica)
S_mat = A.T @ A                          # positiva semi-definida
eigenvalues, eigenvectors = np.linalg.eigh(S_mat)
print(np.allclose(S_mat @ eigenvectors, eigenvectors * eigenvalues))  # True

# SVD
U, s, Vt = np.linalg.svd(A, full_matrices=False)
print(np.allclose(U @ np.diag(s) @ Vt, A))   # True

# Número de condicionamento
kappa = np.linalg.cond(A)
print(f"Condition number: {kappa:.2f}")`}</div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese — Cheat Sheet de Matrizes</h2>
        <p style={S.p}>
          Resumo de todas as operações, notações NumPy e complexidades computacionais para
          referência rápida em projetos de Data Science e Machine Learning.
        </p>
        <h3 style={S.h3}>Operações NumPy essenciais</h3>
        <div style={S.code}>{`import numpy as np

# Criação
A = np.array([[1,2],[3,4]])        # de lista
A = np.zeros((m, n))               # zeros
A = np.ones((m, n))                # uns
A = np.eye(n)                      # identidade
A = np.diag([1, 2, 3])            # diagonal
A = np.random.randn(m, n)         # gaussiana

# Dimensões
A.shape                            # (m, n)
A.T                                # transposta, shape (n, m)
A.reshape(p, q)                    # reshape (p*q = m*n)
A.flatten()                        # (m*n,)

# Operações element-wise
A + B                              # adição (mesmo shape)
A * B                              # multiplicação elem-wise
A ** 2                             # quadrado elem-wise
np.sqrt(A)                         # raiz elem-wise

# Multiplicação matricial
A @ B                              # matmul
np.matmul(A, B)                   # equivalente
A.dot(B)                           # equivalente (2D)

# Propriedades escalares
np.linalg.det(A)                   # determinante
np.trace(A)                        # traço
np.linalg.matrix_rank(A)          # rank
np.linalg.cond(A)                  # número condicionamento

# Inversa e sistemas lineares
np.linalg.inv(A)                   # inversa (evite!)
np.linalg.solve(A, b)             # solução de Ax=b
np.linalg.lstsq(A, b, rcond=None) # mínimos quadrados
np.linalg.pinv(A)                  # pseudo-inversa

# Normas
np.linalg.norm(A, 'fro')          # Frobenius
np.linalg.norm(A, 2)              # spectral
np.linalg.norm(A, 'nuc')          # nuclear

# Decomposições
np.linalg.svd(A)                   # SVD: U, s, Vt
np.linalg.eig(A)                   # eigenvalues/vectors
np.linalg.eigh(A)                  # para simétricas
np.linalg.qr(A)                    # QR: Q, R
np.linalg.cholesky(A)              # Cholesky: L`}</div>

        <h3 style={S.h3}>Complexidades computacionais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operação</th>
              <th style={S.th}>Complexidade</th>
              <th style={S.th}>Nota</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Adição A+B (m×n)','O(mn)','Element-wise, trivialmente paralelo'],
              ['Multiplicação AB (m×k × k×n)','O(mnk)','BLAS level 3, GPU-acelerado'],
              ['Transposta (m×n)','O(1) view ou O(mn) cópia','NumPy usa view quando possível'],
              ['Determinante (n×n)','O(n³)','Via LU'],
              ['Inversa (n×n)','O(n³)','Via Gauss-Jordan ou LU'],
              ['Traço (n×n)','O(n)','Só diagonal'],
              ['Norma Frobenius','O(mn)','Soma quadrados'],
              ['Norma espectral','O(mn min(m,n))','Via SVD truncado'],
              ['LU (n×n)','O(n³)','Com pivotamento parcial'],
              ['QR (m×n, m≥n)','O(mn²)','Via Householder'],
              ['SVD (m×n)','O(mn min(m,n))','Algoritmo LAPACK'],
              ['Eigendecomposição (n×n)','O(n³)','Iterativo em prática'],
            ].map(([op,c,n]) => (
              <tr key={op}>
                <td style={S.td}>{op}</td>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}>{n}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Matrizes e as suas aplicações em ML</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Contexto ML</th>
              <th style={S.th}>Matriz</th>
              <th style={S.th}>Operação chave</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Regressão Linear','XᵀX ∈ ℝ^(p×p)','Inversa: (XᵀX)⁻¹Xᵀy'],
              ['PCA','Covariância Σ','Eigendecomposição → componentes'],
              ['Rede neuronal densa','W ∈ ℝ^(out×in)','matmul Y=XWᵀ+b'],
              ['CNN','Filtros 4D','Convolução como matmul (im2col)'],
              ['Transformer','Q,K,V projectores','QKᵀ/sqrt(d) matmul'],
              ['SVD compressão','A ≈ U_k Σ_k Vᵀ_k','rank-k approx, recomendação'],
              ['Gaussian Processes','Kernel matrix K','Cholesky para sampling'],
              ['Graph Neural Nets','Adjacência A','Matmul A X W'],
              ['Regularização','||W||²F ou ||W||*','Norma adicionada a loss'],
              ['Gradients','Jacobiana J ∈ ℝ^(m×n)','Chain rule = matmul de jacobians'],
            ].map(([ctx,mat,op]) => (
              <tr key={ctx}>
                <td style={S.td}><strong>{ctx}</strong></td>
                <td style={S.td}>{mat}</td>
                <td style={S.td}>{op}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Regra de ouro:</strong> em Data Science, a pergunta raramente é "como calculo isto?"
          mas sim "qual a decomposição mais adequada?". SVD para análise e compressão, QR para sistemas
          lineares sobredeterminados, Cholesky para matrizes positivas definidas, LU para sistemas quadrados.
        </div>

        <div style={S.note}>
          Próximos tópicos: módulo LA3 abordará Eigenvalues e Eigenvectors em profundidade,
          e módulo LA4 cobrirá SVD e as suas aplicações em PCA, compressão e sistemas de recomendação.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>13. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>O que é uma Matriz</strong> — uma matriz é um array rectangular de números organizado em linhas e colunas; é a estrutura fundamental para representar transformações lineares, dados tabulares e sistemas de equações.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tipos Especiais de Matrizes</strong> — matrizes identidade, diagonal, simétrica, ortogonal e triangular têm propriedades algébricas que simplificam cálculos — a matriz ortogonal, por exemplo, preserva distâncias e é a base de rotações em ML.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Adição e Multiplicação por Escalar</strong> — a adição de matrizes e a multiplicação por escalar são operações elemento a elemento que formam a estrutura de espaço vectorial; são directamente implementadas em NumPy com broadcasting.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Multiplicação de Matrizes</strong> — a multiplicação AB combina linhas de A com colunas de B (dot product); é a operação central de redes neuronais — cada camada densa é uma multiplicação matricial seguida de activação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Transposta</strong> — a transposta Aᵀ troca linhas por colunas; é essencial em álgebra linear (AᵀA é sempre simétrica e semidefinida positiva) e aparece em regressão, SVD e backpropagation.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Determinante</strong> — o determinante mede o factor de escala volumétrica de uma transformação linear; quando det(A) = 0 a matriz é singular e o sistema Ax = b não tem solução única.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Matriz Inversa</strong> — A⁻¹ é a matriz tal que AA⁻¹ = I; existe apenas quando A é quadrada e não-singular, e permite resolver Ax = b como x = A⁻¹b — embora na prática se use eliminação gaussiana por eficiência.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
