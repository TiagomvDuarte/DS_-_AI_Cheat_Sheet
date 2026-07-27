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

function MatrixAnnotatedSVG() {
  return (
    <svg width="100%" viewBox="0 0 460 220" style={{ display: 'block', margin: '0 auto', maxWidth: 460 }}>
      {/* Bracket left */}
      <path d="M 113 30 L 103 30 L 103 190 L 113 190" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Bracket right */}
      <path d="M 267 30 L 277 30 L 277 190 L 267 190" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Cells */}
      {[0,1,2].map(r => [0,1,2].map(c => {
        const x = 135 + c * 55;
        const y = 50 + r * 55;
        const labels = [['a₁₁','a₁₂','a₁₃'],['a₂₁','a₂₂','a₂₃'],['a₃₁','a₃₂','a₃₃']];
        return (
          <g key={`${r}-${c}`}>
            <rect x={x - 22} y={y - 20} width={44} height={36} rx={5}
              fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontFamily="serif">
              {labels[r][c]}
            </text>
          </g>
        );
      }))}
      {/* Row label */}
      <text x="55" y="110" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">m</text>
      <text x="55" y="124" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">rows</text>
      <line x1="79" y1="40" x2="79" y2="180" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="75" y1="40" x2="83" y2="40" stroke={color} strokeWidth="1" />
      <line x1="75" y1="180" x2="83" y2="180" stroke={color} strokeWidth="1" />
      {/* Col label */}
      <text x="190" y="215" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">n cols</text>
      <line x1="103" y1="205" x2="277" y2="205" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="103" y1="201" x2="103" y2="209" stroke={color} strokeWidth="1" />
      <line x1="277" y1="201" x2="277" y2="209" stroke={color} strokeWidth="1" />
      {/* Title */}
      <text x="370" y="114" textAnchor="middle" fontSize="12" fill="var(--text-secondary)">A ∈ ℝ^(m×n)</text>
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
      <rect x="20" y="40" width="80" height="120" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="25" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">A (3×2)</text>
      {[0,1,2].map(r => [0,1].map(c => (
        <rect key={`a${r}${c}`} x={26 + c*36} y={46 + r*36} width={30} height={28} rx={3}
          fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
      )))}
      {/* Highlight row 0 of A */}
      <rect x="26" y="46" width="68" height="28" rx="3" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="66" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">row i</text>

      {/* B matrix (2x3) */}
      <rect x="160" y="40" width="120" height="80" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="220" y="25" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">B (2×3)</text>
      {[0,1].map(r => [0,1,2].map(c => (
        <rect key={`b${r}${c}`} x={166 + c*36} y={46 + r*32} width={30} height={26} rx={3}
          fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
      )))}
      {/* Highlight col 0 of B */}
      <rect x="166" y="46" width="30" height="62" rx="3" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="181" y="82" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">col j</text>

      {/* C matrix (3x3) */}
      <rect x="310" y="40" width="55" height="55" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
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
            fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
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
            fill="rgba(74,158,237,0.10)" stroke="rgba(74,158,237,0.10)" strokeWidth="1" />
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
      <rect x="30" y="80" width="60" height="60" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="60" y="175" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Unit square</text>
      <text x="60" y="188" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">area = 1</text>
      {/* Arrow */}
      <text x="120" y="118" fontSize="20" fill={color} textAnchor="middle">→</text>
      <text x="120" y="134" fontSize="10" fill="var(--text-secondary)" textAnchor="middle">× A</text>
      {/* Transformed parallelogram */}
      <polygon points="150,140 210,100 250,60 190,100"
        fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
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
      <rect x="10" y="40" width="60" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="40" y="70" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="600">x</text>
      <text x="40" y="110" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">input</text>
      {/* Arrow A */}
      <line x1="72" y1="65" x2="128" y2="65" stroke={color} strokeWidth="2" />
      <polygon points="128,60 140,65 128,70" fill={color} />
      <text x="106" y="56" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">A</text>
      {/* Transformed */}
      <rect x="142" y="40" width="60" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x="172" y="70" textAnchor="middle" fontSize="13" fill="var(--text-primary)" fontWeight="600">Ax</text>
      <text x="172" y="110" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">transformed</text>
      {/* Arrow A-inv */}
      <line x1="204" y1="65" x2="258" y2="65" stroke="#4a9eed" strokeWidth="2" />
      <polygon points="258,60 270,65 258,70" fill="#4a9eed" />
      <text x="237" y="56" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">A⁻¹</text>
      {/* Recovered */}
      <rect x="272" y="40" width="78" height="50" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
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
          <circle cx={60} cy={50 + i * 50} r={18} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={60} y={55 + i * 50} textAnchor="middle" fontSize="12" fill="var(--text-primary)">x{i+1}</text>
        </g>
      ))}
      {/* Output nodes */}
      {outputs.map(i => (
        <g key={`out${i}`}>
          <circle cx={280} cy={75 + i * 60} r={18} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
          <text x={280} y={80 + i * 60} textAnchor="middle" fontSize="12" fill="var(--text-primary)">y{i+1}</text>
        </g>
      ))}
      {/* Connections */}
      {inputs.map(i => outputs.map(j => (
        <line key={`w${i}${j}`}
          x1={78} y1={50 + i * 50}
          x2={262} y2={75 + j * 60}
          stroke="rgba(74,158,237,0.10)" strokeWidth="1.5" />
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
      <rect x="20" y="90" width="80" height="32" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="60" y="111" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">LU</text>
      <text x="60" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Solve Ax=b</text>
      {/* QR */}
      <rect x="110" y="90" width="80" height="32" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="150" y="111" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">QR</text>
      <text x="150" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Least squares</text>
      {/* Eigen */}
      <rect x="200" y="90" width="80" height="32" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="240" y="111" textAnchor="middle" fontSize="12" fill="var(--text-primary)" fontWeight="700">Eigen</text>
      <text x="240" y="140" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">PCA, dynamics</text>
      {/* SVD */}
      <rect x="290" y="90" width="80" height="32" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
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
          <strong>Adição:</strong> <InlineMath math="(A+B)_{ij} = A_{ij}+B_{ij}" />. As dimensões têm de ser iguais.<br />
          <strong>Escalar:</strong> <InlineMath math="(kA)_{ij} = k \cdot A_{ij}" />. O escalar distribui por todos os elementos.
        </div>
        <h3 style={S.h3}>Broadcasting em NumPy</h3>
        <p style={S.p}>
          NumPy generaliza a adição com broadcasting — permite operar entre arrays de formas diferentes
          desde que sejam compatíveis segundo regras específicas. Em ML, isto é essencial para adicionar
          bias vectors a batches.
        </p>
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
          <BlockMath math="C_{ij} = \sum_k A_{ik} B_{kj}" />
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
          Para <InlineMath math="f(x) = x^TAx" />, o gradiente é <InlineMath math="\nabla f = (A+A^T)x" />.
          Se A for simétrica (A = Aᵀ), simplifica para <InlineMath math="\nabla f = 2Ax" />.
          Essencial em regressão linear: minimizar <InlineMath math="\|Xw-y\|^2" /> leva a <InlineMath math="X^TXw = X^Ty" />.
        </div>
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
          <strong>2×2:</strong> <InlineMath math="\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad-bc" /><br />
          <strong>3×3 (expansão de cofactores pela 1ª linha):</strong><br />
          <BlockMath math="\det(A) = a_{11}M_{11} - a_{12}M_{12} + a_{13}M_{13}" />
          onde M<sub>ij</sub> é o menor (det da submatriz com linha i e coluna j removidas).
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
          Se <InlineMath math="A = \begin{pmatrix}a&b\\c&d\end{pmatrix}" /> e det(A) = ad−bc ≠ 0, então
          <BlockMath math="A^{-1} = \frac{1}{ad-bc}\begin{pmatrix}d & -b\\-c & a\end{pmatrix}" />
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
          <BlockMath math="\text{tr}(A) \approx \frac{1}{m} \sum_{i=1}^{m} z_i^T A z_i, \quad z \sim \text{Rademacher}(\{-1, +1\})" />
        </div>
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
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Decomposições — Visão Geral</h2>
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
          Se <InlineMath math="\kappa(A) = 10^k" />, perde-se aproximadamente k dígitos de precisão na solução.
          Uma matrix com <InlineMath math="\kappa \approx 10^{15}" /> numa máquina float64 (≈16 dígitos) é numericamente singular.
        </div>
      </section>
    </div>
  );
}
