import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'rgba(74,158,237,0.06)', border: '1px solid rgba(74,158,237,0.25)', borderRadius: 10, padding: '1rem', margin: '1.2rem 0', overflowX: 'auto' },
};

/* ── SVG 1: Python list vs NumPy ndarray memory layout ── */
function MemoryLayoutSVG() {
  return (
    <svg width="780" height="200" viewBox="0 0 780 200" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Python list side */}
      <text x="10" y="20" fontSize="13" fontWeight="bold" fill={color}>Python list of lists</text>
      {/* List boxes */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={10} y={30 + i * 40} width={70} height={28} rx={4} fill="rgba(74,158,237,0.12)" stroke={color} strokeWidth="1.2" />
          <text x={45} y={49 + i * 40} fontSize="11" textAnchor="middle" fill="var(--text-primary)">ptr[{i}]</text>
          <line x1={80} y1={44 + i * 40} x2={160} y2={44 + i * 40} stroke={color} strokeWidth="1" strokeDasharray="4 3" />
          <rect x={160} y={30 + i * 40} width={110} height={28} rx={4} fill="rgba(2,132,199,0.10)" stroke="#0284c7" strokeWidth="1.2" />
          <text x={215} y={49 + i * 40} fontSize="10" textAnchor="middle" fill="var(--text-primary)">obj obj obj</text>
        </g>
      ))}
      <text x={10} y={170} fontSize="10" fill="var(--text-secondary)">Memória dispersa · boxing Python · sem SIMD</text>

      {/* Divider */}
      <line x1={320} y1={15} x2={320} y2={185} stroke="var(--text-secondary)" strokeWidth="1.5" />

      {/* NumPy ndarray side */}
      <text x={340} y={20} fontSize="13" fontWeight="bold" fill={color}>NumPy ndarray</text>
      <rect x={340} y={35} width={400} height={90} rx={6} fill="rgba(74,158,237,0.08)" stroke={color} strokeWidth="1.5" />
      {/* Contiguous cells */}
      {Array.from({length: 8}, (_, i) => (
        <g key={i}>
          <rect x={350 + i * 46} y={50} width={38} height={28} rx={3} fill={i % 2 === 0 ? 'rgba(74,158,237,0.20)' : 'rgba(74,158,237,0.10)'} stroke={color} strokeWidth="1" />
          <text x={369 + i * 46} y={69} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{i * 1.5}</text>
        </g>
      ))}
      <text x={350} y={110} fontSize="10" fill="var(--text-secondary)">  dtype: float64 · strides: (8,) · contiguous · SIMD-friendly</text>
      {/* Properties */}
      {[
        ['shape', '(8,)', 340],
        ['ndim', '1', 440],
        ['dtype', 'float64', 520],
        ['strides', '(8,)', 620],
      ].map(([k, v, x]) => (
        <g key={k}>
          <text x={x} y={145} fontSize="10" fontWeight="bold" fill={color}>{k}</text>
          <text x={x} y={160} fontSize="10" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      <text x={340} y={185} fontSize="10" fill="var(--text-secondary)">Bloco contíguo · tipo homogéneo · sem overhead Python por elemento</text>
    </svg>
  );
}

/* ── SVG 2: 2D array indexing grid ── */
function IndexingGridSVG() {
  const data = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
  const cw = 44, ch = 38;
  const ox = 60, oy = 40;
  return (
    <svg width="600" height="200" viewBox="0 0 600 200" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x={45} y={10} fontSize="12" fontWeight="bold" fill={color}>arr = np.arange(1,13).reshape(3,4)</text>
      {/* Column headers */}
      {[0,1,2,3].map(c => (
        <text key={c} x={ox + c * cw + cw/2} y={oy - 8} fontSize="11" textAnchor="middle" fill="var(--text-secondary)">[:,{c}]</text>
      ))}
      {/* Row headers */}
      {[0,1,2].map(r => (
        <text key={r} x={ox - 8} y={oy + r * ch + ch/2 + 4} fontSize="11" textAnchor="end" fill="var(--text-secondary)">[{r}]</text>
      ))}
      {data.map((row, r) =>
        row.map((val, c) => {
          const isSingle = r === 1 && c === 2;
          const isRow = r === 0;
          const isCol = c === 1;
          const isSub = r <= 1 && c >= 2;
          let fill = 'rgba(74,158,237,0.04)';
          if (isSingle) fill = 'rgba(74,158,237,0.10)';
          else if (isRow) fill = 'rgba(74,158,237,0.20)';
          else if (isCol) fill = 'rgba(74,158,237,0.18)';
          else if (isSub) fill = 'rgba(74,158,237,0.10)';
          return (
            <g key={`${r}-${c}`}>
              <rect x={ox + c * cw} y={oy + r * ch} width={cw - 2} height={ch - 2} rx={3} fill={fill} stroke={color} strokeWidth="1" />
              <text x={ox + c * cw + cw/2 - 1} y={oy + r * ch + ch/2 + 5} fontSize="12" textAnchor="middle" fill="var(--text-primary)">{val}</text>
            </g>
          );
        })
      )}
      {/* Legend */}
      {[
        ['rgba(74,158,237,0.20)', 'arr[0]  — row 0'],
        ['rgba(74,158,237,0.18)', 'arr[:,1] — col 1'],
        ['rgba(74,158,237,0.10)', 'arr[:2,2:] — submatrix'],
        ['rgba(74,158,237,0.10)', 'arr[1,2] = 7 — single'],
      ].map(([bg, label], i) => (
        <g key={i}>
          <rect x={290} y={50 + i * 28} width={16} height={16} rx={3} fill={bg} stroke={color} strokeWidth="1" />
          <text x={314} y={63 + i * 28} fontSize="11" fill="var(--text-primary)">{label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG 3: Reshape journey ── */
function ReshapeSVG() {
  const cw = 30, ch = 26, gap = 4;
  // Column positions
  const x1 = 10;   // shape(6,) start
  const x2 = 260;  // shape(2,3) start
  const x3 = 440;  // shape(3,2) start
  const x4 = 620;  // shape(1,2,3) start
  const arr6W = 6 * (cw + gap) - gap; // 206
  const arr23W = 3 * (cw + gap) - gap;
  const arr32W = 2 * (cw + gap) - gap;
  return (
    <svg viewBox="0 0 780 130" style={{ display: 'block', maxWidth: '100%', height: 'auto', margin: '0 auto' }}>
      {/* shape(6,) */}
      <text x={x1 + arr6W / 2} y={16} fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">shape(6,)</text>
      {Array.from({length:6}, (_,i) => (
        <g key={i}>
          <rect x={x1 + i * (cw + gap)} y={24} width={cw} height={ch} rx={3} fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.2" />
          <text x={x1 + i * (cw + gap) + cw / 2} y={41} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{i}</text>
        </g>
      ))}
      {/* Arrow */}
      <text x={235} y={40} fontSize="18" fill={color} textAnchor="middle">→</text>
      <text x={220} y={64} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">.reshape(2,3)</text>

      {/* shape(2,3) */}
      <text x={x2 + arr23W / 2} y={16} fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">shape(2,3)</text>
      {[[0,1,2],[3,4,5]].map((row,r) => row.map((v,c) => (
        <g key={`${r}-${c}`}>
          <rect x={x2 + c * (cw + gap)} y={24 + r * (ch + gap)} width={cw} height={ch} rx={3} fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.2" />
          <text x={x2 + c * (cw + gap) + cw / 2} y={41 + r * (ch + gap)} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
      {/* Arrow */}
      <text x={400} y={40} fontSize="18" fill={color} textAnchor="middle">→</text>
      <text x={400} y={54} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">.T</text>

      {/* shape(3,2) */}
      <text x={x3 + arr32W / 2} y={16} fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">shape(3,2)</text>
      {[[0,3],[1,4],[2,5]].map((row,r) => row.map((v,c) => (
        <g key={`${r}-${c}`}>
          <rect x={x3 + c * (cw + gap)} y={24 + r * (ch + gap)} width={cw} height={ch} rx={3} fill="rgba(74,158,237,0.15)" stroke={color} strokeWidth="1.2" />
          <text x={x3 + c * (cw + gap) + cw / 2} y={41 + r * (ch + gap)} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
      {/* Arrow */}
      <text x={580} y={40} fontSize="18" fill={color} textAnchor="middle">→</text>
      <text x={580} y={54} fontSize="9" fill="var(--text-secondary)" textAnchor="middle">expand_dims</text>

      {/* shape(1,2,3) */}
      <text x={x4 + 34} y={16} fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">shape(1,2,3)</text>
      <rect x={x4} y={24} width={68} height={60} rx={4} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={x4 + 34} y={58} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">3D tensor</text>
    </svg>
  );
}

/* ── SVG 4: Loop vs Vectorized performance bar chart ── */
function VectorizationSVG() {
  return (
    <svg width="480" height="160" viewBox="0 0 480 160" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x={10} y={18} fontSize="12" fontWeight="bold" fill={color}>Tempo relativo (N=1 000 000 elementos)</text>
      {/* Loop bar */}
      <rect x={100} y={30} width={300} height={36} rx={5} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x={98} y={52} fontSize="11" textAnchor="end" fill="var(--text-primary)">Python loop</text>
      <text x={408} y={52} fontSize="11" fill="#4a9eed" fontWeight="bold">~2000 ms</text>
      {/* NumPy bar */}
      <rect x={100} y={80} width={18} height={36} rx={5} fill="rgba(74,158,237,0.35)" stroke={color} strokeWidth="1.5" />
      <text x={98} y={102} fontSize="11" textAnchor="end" fill="var(--text-primary)">NumPy ufunc</text>
      <text x={125} y={102} fontSize="11" fill={color} fontWeight="bold">~20 ms</text>
      <text x={10} y={148} fontSize="10" fill="var(--text-secondary)">NumPy corre em C compilado — elimina overhead Python por elemento, usa SIMD</text>
    </svg>
  );
}

/* ── SVG 5: Broadcasting cases ── */
function BroadcastingSVG() {
  return (
    <svg width="700" height="180" viewBox="0 0 700 180" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Case 1: scalar + (4,) */}
      <text x={10} y={18} fontSize="11" fontWeight="bold" fill={color}>Caso 1: escalar + array(4,)</text>
      <rect x={10} y={28} width={28} height={28} rx={3} fill="rgba(74,158,237,0.20)" stroke={color} strokeWidth="1.3" />
      <text x={24} y={47} fontSize="11" textAnchor="middle" fill="var(--text-primary)">5</text>
      <text x={45} y={46} fontSize="16" fill={color}>+</text>
      {[0,1,2,3].map(i => (
        <rect key={i} x={60 + i * 30} y={28} width={26} height={28} rx={3} fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      ))}
      {[1,2,3,4].map((v,i) => (
        <text key={i} x={73 + i * 30} y={47} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
      ))}
      <text x={185} y={46} fontSize="16" fill={color}>=</text>
      {[6,7,8,9].map((v,i) => (
        <g key={i}>
          <rect x={200 + i * 30} y={28} width={26} height={28} rx={3} fill="rgba(74,158,237,0.25)" stroke={color} strokeWidth="1.2" />
          <text x={213 + i * 30} y={47} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      <text x={10} y={78} fontSize="10" fill="var(--text-secondary)">Escalar expande para (4,) — regra: dim ausente = 1</text>

      {/* Case 2: (3,1) + (1,4) → (3,4) */}
      <text x={10} y={100} fontSize="11" fontWeight="bold" fill={color}>Caso 2: (3,1) + (1,4) {'→'} (3,4)</text>
      {[1,2,3].map((v,r) => (
        <g key={r}>
          <rect x={10} y={108 + r * 22} width={22} height={18} rx={2} fill="rgba(74,158,237,0.18)" stroke="#4a9eed" strokeWidth="1.1" />
          <text x={21} y={121 + r * 22} fontSize="10" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      <text x={38} y={124} fontSize="14" fill={color}>+</text>
      {[10,20,30,40].map((v,c) => (
        <g key={c}>
          <rect x={52 + c * 24} y={108} width={20} height={18} rx={2} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.1" />
          <text x={62 + c * 24} y={121} fontSize="10" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      <text x={154} y={124} fontSize="14" fill={color}>=</text>
      {[[11,21,31,41],[12,22,32,42],[13,23,33,43]].map((row,r) =>
        row.map((v,c) => (
          <g key={`${r}-${c}`}>
            <rect x={168 + c * 26} y={108 + r * 22} width={22} height={18} rx={2} fill="rgba(74,158,237,0.20)" stroke={color} strokeWidth="1" />
            <text x={179 + c * 26} y={121 + r * 22} fontSize="9" textAnchor="middle" fill="var(--text-primary)">{v}</text>
          </g>
        ))
      )}
      <text x={280} y={115} fontSize="10" fill="var(--text-secondary)">shape (3,1) e (1,4)</text>
      <text x={280} y={130} fontSize="10" fill="var(--text-secondary)">ambos expandem</text>
      <text x={280} y={145} fontSize="10" fill="var(--text-secondary)">para (3,4)</text>

      {/* Broadcasting rules */}
      <rect x={420} y={98} width={265} height={75} rx={6} fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="1" />
      <text x={430} y={115} fontSize="11" fontWeight="bold" fill={color}>Regras de Broadcasting</text>
      <text x={430} y={130} fontSize="10" fill="var(--text-primary)">1. Alinhar shapes à direita</text>
      <text x={430} y={145} fontSize="10" fill="var(--text-primary)">2. Eixos com size 1 expandem</text>
      <text x={430} y={160} fontSize="10" fill="var(--text-primary)">3. Tamanhos incompatíveis: erro</text>
    </svg>
  );
}

/* ── SVG 6: Aggregation axis ── */
function AggregationAxisSVG() {
  const mat = [[1,2,3],[4,5,6],[7,8,9]];
  const cw = 38, ch = 30, ox = 10, oy = 30;
  return (
    <svg width="580" height="170" viewBox="0 0 580 170" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x={60} y={18} fontSize="11" fontWeight="bold" fill={color}>arr.sum(axis=0) — soma por coluna</text>
      {mat.map((row,r) => row.map((v,c) => (
        <g key={`${r}-${c}`}>
          <rect x={ox + c * cw} y={oy + r * ch} width={cw-2} height={ch-2} rx={3}
            fill={r === 2 ? 'rgba(74,158,237,0.25)' : 'rgba(74,158,237,0.08)'} stroke={color} strokeWidth="1" />
          <text x={ox + c * cw + cw/2 - 1} y={oy + r * ch + ch/2 + 5} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
      {/* axis=0 arrows */}
      {[0,1,2].map(c => (
        <line key={c} x1={ox + c * cw + cw/2 - 1} y1={oy} x2={ox + c * cw + cw/2 - 1} y2={oy + 3 * ch - 2}
          stroke={color} strokeWidth="1.5" markerEnd="url(#arr0)" opacity="0.5" />
      ))}
      {/* Results */}
      {[12,15,18].map((v,c) => (
        <g key={c}>
          <rect x={ox + c * cw} y={oy + 3 * ch + 5} width={cw-2} height={ch-2} rx={3} fill="rgba(74,158,237,0.30)" stroke={color} strokeWidth="1.3" />
          <text x={ox + c * cw + cw/2 - 1} y={oy + 3 * ch + 5 + ch/2 + 5} fontSize="11" textAnchor="middle" fontWeight="bold" fill={color}>{v}</text>
        </g>
      ))}

      {/* axis=1 side */}
      <text x={240} y={18} fontSize="11" fontWeight="bold" fill="#4a9eed">arr.sum(axis=1) — soma por linha</text>
      {mat.map((row,r) => row.map((v,c) => (
        <g key={`b${r}-${c}`}>
          <rect x={240 + c * cw} y={oy + r * ch} width={cw-2} height={ch-2} rx={3}
            fill={c === 2 ? 'rgba(74,158,237,0.22)' : 'rgba(74,158,237,0.08)'} stroke="#4a9eed" strokeWidth="1" />
          <text x={240 + c * cw + cw/2 - 1} y={oy + r * ch + ch/2 + 5} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
      {/* Results */}
      {[6,15,24].map((v,r) => (
        <g key={r}>
          <rect x={240 + 3 * cw + 5} y={oy + r * ch} width={cw-2} height={ch-2} rx={3} fill="rgba(74,158,237,0.28)" stroke="#4a9eed" strokeWidth="1.3" />
          <text x={240 + 3 * cw + 5 + cw/2 - 1} y={oy + r * ch + ch/2 + 5} fontSize="11" textAnchor="middle" fontWeight="bold" fill="#4a9eed">{v}</text>
        </g>
      ))}

      <text x={10} y={170} fontSize="10" fill="var(--text-secondary)">axis=0 colapsa linhas (resultado tem shape de coluna) · axis=1 colapsa colunas (resultado tem shape de linha)</text>
    </svg>
  );
}

/* ── SVG 7: Matrix multiplication diagram ── */
function MatMulSVG() {
  return (
    <svg width="560" height="180" viewBox="0 0 560 180" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x={10} y={18} fontSize="12" fontWeight="bold" fill={color}>Multiplicação matricial C = A @ B</text>
      {/* A matrix (2x3) */}
      <text x={10} y={38} fontSize="11" fill="var(--text-secondary)">A (2{'×'}3)</text>
      {[[1,2,3],[4,5,6]].map((row,r) => row.map((v,c) => (
        <g key={`a${r}${c}`}>
          <rect x={10 + c * 36} y={44 + r * 32} width={32} height={28} rx={3}
            fill={r === 0 ? 'rgba(74,158,237,0.22)' : 'rgba(74,158,237,0.08)'} stroke={color} strokeWidth="1.2" />
          <text x={26 + c * 36} y={62 + r * 32} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
      <text x={124} y={75} fontSize="24" fill={color}>{'×'}</text>
      {/* B matrix (3x2) */}
      <text x={145} y={38} fontSize="11" fill="var(--text-secondary)">B (3{'×'}2)</text>
      {[[7,8],[9,10],[11,12]].map((row,r) => row.map((v,c) => (
        <g key={`b${r}${c}`}>
          <rect x={145 + c * 36} y={44 + r * 32} width={32} height={28} rx={3}
            fill={c === 0 ? 'rgba(74,158,237,0.22)' : 'rgba(74,158,237,0.08)'} stroke="#4a9eed" strokeWidth="1.2" />
          <text x={161 + c * 36} y={62 + r * 32} fontSize="11" textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      )))}
      <text x={226} y={75} fontSize="24" fill={color}>=</text>
      {/* C matrix (2x2) */}
      <text x={250} y={38} fontSize="11" fill="var(--text-secondary)">C (2{'×'}2)</text>
      {[[58,64],[139,154]].map((row,r) => row.map((v,c) => (
        <g key={`c${r}${c}`}>
          <rect x={250 + c * 44} y={44 + r * 32} width={40} height={28} rx={3}
            fill="rgba(74,158,237,0.28)" stroke={color} strokeWidth="1.4" />
          <text x={270 + c * 44} y={62 + r * 32} fontSize="11" textAnchor="middle" fontWeight="bold" fill={color}>{v}</text>
        </g>
      )))}
      {/* Explanation */}
      <rect x={360} y={44} width={185} height={90} rx={6} fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="1" />
      <text x={370} y={62} fontSize="10" fill="var(--text-primary)">C[0,0] = 1{'×'}7 + 2{'×'}9 + 3{'×'}11 = 58</text>
      <text x={370} y={78} fontSize="10" fill="var(--text-primary)">C[0,1] = 1{'×'}8 + 2{'×'}10 + 3{'×'}12 = 64</text>
      <text x={370} y={94} fontSize="10" fill="var(--text-primary)">C[1,0] = 4{'×'}7 + 5{'×'}9 + 6{'×'}11 = 139</text>
      <text x={370} y={110} fontSize="10" fill="var(--text-primary)">C[1,1] = 4{'×'}8 + 5{'×'}10 + 6{'×'}12 = 154</text>
      <text x={370} y={126} fontSize="10" fill={color}>(m,k) @ (k,n) = (m,n)</text>
      <text x={10} y={165} fontSize="10" fill="var(--text-secondary)">A.dot(B) {'≡'} np.matmul(A,B) {'≡'} A @ B  ·  Dimensão interna k deve coincidir</text>
    </svg>
  );
}

/* ── SVG 8: Normal distribution with shaded area ── */
function NormalDistSVG() {
  const W = 520, H = 150;
  const cx = W / 2, base = H - 20, scale = 55;
  const pts = [];
  for (let x = -3.5; x <= 3.5; x += 0.05) {
    const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
    pts.push([cx + x * scale, base - y * scale * 5.5]);
  }
  const pathD = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  // Shaded area between -1 and 1
  const shadePts = pts.filter(p => p[0] >= cx - scale && p[0] <= cx + scale);
  const shadeD = shadePts.length > 0
    ? `M${shadePts[0][0]},${base} ` + shadePts.map(p => `L${p[0]},${p[1]}`).join(' ') + ` L${shadePts[shadePts.length-1][0]},${base} Z`
    : '';

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* baseline */}
      <line x1={30} y1={base} x2={W-30} y2={base} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* shaded area ~68% */}
      {shadeD && <path d={shadeD} fill="rgba(74,158,237,0.20)" />}
      {/* curve */}
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" />
      {/* labels */}
      <text x={cx - scale} y={base + 14} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">{'−1σ'}</text>
      <text x={cx} y={base + 14} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">{'μ'}</text>
      <text x={cx + scale} y={base + 14} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">{'1σ'}</text>
      <text x={cx - 2 * scale} y={base + 14} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">{'−2σ'}</text>
      <text x={cx + 2 * scale} y={base + 14} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">{'2σ'}</text>
      {/* annotation */}
      <text x={cx} y={base - 55} fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">{'68.3%'}</text>
      <line x1={cx - scale + 2} y1={base - 2} x2={cx + scale - 2} y2={base - 2} stroke={color} strokeWidth="1.2" strokeDasharray="3 2" />
      <text x={10} y={18} fontSize="11" fontWeight="bold" fill={color}>Normal(0, 1) — scipy.stats.norm</text>
    </svg>
  );
}

/* ── SVG 9: Optimization loss landscape ── */
function OptimizeSVG() {
  const W = 520, H = 160;
  // Parabola landscape
  const pts = [];
  for (let x = -3; x <= 3; x += 0.1) {
    const y = x * x + 0.3 * Math.sin(3 * x);
    pts.push([W / 2 + x * 60, 130 - y * 18]);
  }
  const pathD = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  // Gradient descent steps
  const steps = [
    [-2.5, 38], [-1.8, 15], [-1.1, 5], [-0.5, 1.5], [0.05, 0.05]
  ].map(([x, y]) => [W / 2 + x * 60, 130 - y * 18]);

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x={120} y={9} fontSize="11" fontWeight="bold" fill={color}>scipy.optimize.minimize — descida do gradiente</text>
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" />
      {/* Gradient trajectory */}
      {steps.slice(0, -1).map((p, i) => (
        <line key={i} x1={p[0]} y1={p[1]} x2={steps[i+1][0]} y2={steps[i+1][1]}
          stroke="#0284c7" strokeWidth="1.8" strokeDasharray="5 3" />
      ))}
      {steps.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === 0 ? 7 : i === steps.length - 1 ? 6 : 4.5}
          fill={i === 0 ? '#4a9eed' : i === steps.length - 1 ? '#4a9eed' : '#4a9eed'}
          stroke="white" strokeWidth="1.2" />
      ))}
      <text x={steps[0][0] + 10} y={steps[0][1] - 5} fontSize="10" fill="#4a9eed">início</text>
      <text x={steps[steps.length-1][0] + 8} y={steps[steps.length-1][1] + 4} fontSize="10" fill="#4a9eed">{'mínimo'}</text>
      <text x={10} y={H - 5} fontSize="10" fill="var(--text-secondary)">Métodos: Nelder-Mead · BFGS · L-BFGS-B · SLSQP · trust-region</text>
    </svg>
  );
}

/* ── SVG 10: FFT — time domain → frequency domain ── */
function FFTsvg() {
  const W = 680, H = 160;
  const oy = 85;

  // Time domain: sum of 2 sinusoids
  const timePts = [];
  for (let i = 0; i < 80; i++) {
    const t = (i / 80) * 2 * Math.PI;
    const y = Math.sin(t * 3) + 0.5 * Math.sin(t * 7);
    timePts.push([20 + i * 3.5, oy - y * 28]);
  }
  const timeD = timePts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');

  // Frequency domain: spikes at f=3 and f=7
  const freqBars = [
    { f: 3, amp: 1.0 },
    { f: 7, amp: 0.5 },
  ];

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      {/* Time domain */}
      <text x={20} y={16} fontSize="11" fontWeight="bold" fill={color}>Domínio do Tempo</text>
      <line x1={20} y1={oy} x2={300} y2={oy} stroke="var(--text-secondary)" strokeWidth="1" />
      <path d={timeD} fill="none" stroke={color} strokeWidth="1.8" />
      <text x={20} y={H - 5} fontSize="9" fill="var(--text-secondary)">sin(3t) + 0.5·sin(7t)</text>

      {/* Arrow */}
      <text x={315} y={oy + 5} fontSize="18" fill={color}>{'→'}</text>
      <text x={308} y={oy + 20} fontSize="9" fill="var(--text-secondary)">np.fft.fft</text>

      {/* Frequency domain */}
      <text x={350} y={16} fontSize="11" fontWeight="bold" fill={color}>Domínio da Frequência</text>
      <line x1={350} y1={oy} x2={670} y2={oy} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* Frequency axis ticks */}
      {[1,2,3,4,5,6,7,8,9].map(f => (
        <g key={f}>
          <line x1={350 + f * 30} y1={oy} x2={350 + f * 30} y2={oy + 5} stroke="var(--text-secondary)" strokeWidth="1" />
          <text x={350 + f * 30} y={oy + 15} fontSize="9" textAnchor="middle" fill="var(--text-secondary)">{f}</text>
        </g>
      ))}
      {freqBars.map(({ f, amp }) => (
        <g key={f}>
          <rect x={350 + f * 30 - 6} y={oy - amp * 50} width={12} height={amp * 50} rx={2}
            fill={color} opacity="0.85" />
          <text x={350 + f * 30} y={oy - amp * 50 - 4} fontSize="10" textAnchor="middle" fontWeight="bold" fill={color}>{amp}</text>
        </g>
      ))}
      <text x={350} y={H - 5} fontSize="9" fill="var(--text-secondary)">Picos em f=3 e f=7 — componentes de frequência identificadas</text>
    </svg>
  );
}

/* ── SVG 11: Cubic spline interpolation ── */
function SplineSVG() {
  const W = 500, H = 160;
  const dataX = [0, 1, 2, 3, 4, 5];
  const dataY = [0.3, 0.8, 0.4, 0.9, 0.5, 0.7];
  const ox = 30, width = 430, height = 110, oy = 130;
  const toSvg = (xi, yi) => [ox + (xi / 5) * width, oy - yi * height];

  // Approximate cubic spline path via SVG cubic bezier segments
  const svgPts = dataX.map((x, i) => toSvg(x, dataY[i]));
  const pathSegs = [];
  for (let i = 0; i < svgPts.length - 1; i++) {
    const [x0, y0] = svgPts[i];
    const [x1, y1] = svgPts[i + 1];
    const dx = (x1 - x0) / 3;
    pathSegs.push(i === 0 ? `M${x0},${y0}` : '');
    pathSegs.push(`C${x0 + dx},${y0} ${x1 - dx},${y1} ${x1},${y1}`);
  }

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x={35} y={16} fontSize="11" fontWeight="bold" fill={color}>scipy.interpolate — spline cúbico</text>
      {/* axes */}
      <line x1={ox} y1={oy} x2={ox + width} y2={oy} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={ox} y1={15} x2={ox} y2={oy} stroke="var(--text-secondary)" strokeWidth="1" />
      {/* spline */}
      <path d={pathSegs.join(' ')} fill="none" stroke={color} strokeWidth="2" />
      {/* data points */}
      {svgPts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={5} fill="#4a9eed" stroke="white" strokeWidth="1.5" />
          <text x={x} y={y - 9} fontSize="9" textAnchor="middle" fill="var(--text-secondary)">({dataX[i]},{dataY[i]})</text>
        </g>
      ))}
      <text x={30} y={H - 5} fontSize="9" fill="var(--text-secondary)">Pontos vermelhos: dados · Curva: spline cúbico suave via interp1d(kind='cubic')</text>
    </svg>
  );
}

/* ── SVG 12: NumPy cheat sheet ── */
function CheatSheetSVG() {
  const items = [
    { label: 'Criação', items: ['np.array()', 'np.zeros()', 'np.ones()', 'np.arange()', 'np.linspace()'] },
    { label: 'Indexação', items: ['arr[i]', 'arr[i,j]', 'arr[::2]', 'arr[mask]', 'arr[[0,2]]'] },
    { label: 'Shape', items: ['.reshape()', '.flatten()', '.ravel()', '.T', 'np.expand_dims()'] },
    { label: 'Ufuncs', items: ['np.sin()', 'np.exp()', 'np.sqrt()', 'np.log()', 'np.abs()'] },
    { label: 'Agregação', items: ['np.sum()', 'np.mean()', 'np.std()', 'np.min()', 'np.max()'] },
    { label: 'Álgebra', items: ['np.dot()', 'A @ B', 'np.linalg.inv()', 'np.linalg.eig()', 'np.linalg.svd()'] },
  ];
  const cols = 3, colW = 240, colH = 130;
  const W = cols * colW + 20;
  const H = Math.ceil(items.length / cols) * colH + 30;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}>
      <text x={10} y={18} fontSize="13" fontWeight="bold" fill={color}>NumPy — Cheat Sheet Visual</text>
      {items.map((group, gi) => {
        const col = gi % cols;
        const row = Math.floor(gi / cols);
        const gx = 10 + col * colW;
        const gy = 28 + row * colH;
        return (
          <g key={gi}>
            <rect x={gx} y={gy} width={colW - 10} height={colH - 8} rx={6}
              fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="1.2" />
            <text x={gx + 10} y={gy + 18} fontSize="11" fontWeight="bold" fill={color}>{group.label}</text>
            {group.items.map((item, ii) => (
              <text key={ii} x={gx + 14} y={gy + 34 + ii * 18} fontSize="10" fill="var(--text-primary)" fontFamily="monospace">{item}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export default function PfDS7() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>NumPy &amp; SciPy</h1>

      {/* ── 1. ndarray ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. ndarray — A Estrutura Central</h2>
        <p style={S.p}>
          As listas Python armazenam <em>ponteiros</em> para objetos dispersos no heap.
          O ndarray usa um <strong>bloco contíguo de memória</strong> com tipo homogéneo
          (dtype fixo), o que permite <em>locality of reference</em>, SIMD e aritmética
          sem boxing/unboxing de objetos Python.
        </p>
        <div style={S.svgWrap}><MemoryLayoutSVG /></div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 4 }}><strong>Propriedades principais do ndarray:</strong></p>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Atributo</th>
                <th style={S.th}>Significado</th>
                <th style={S.th}>Exemplo (shape (3,4))</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['shape', 'Tuplo com o tamanho em cada dimensão', '(3, 4)'],
                ['dtype', 'Tipo de dados dos elementos', 'float64'],
                ['ndim', 'Número de dimensões (eixos)', '2'],
                ['size', 'Total de elementos', '12'],
                ['strides', 'Bytes a avançar por dimensão', '(32, 8)'],
                ['itemsize', 'Bytes por elemento', '8 (float64)'],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{a}</td>
                  <td style={S.td}>{b}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.code}>{`import numpy as np

# A partir de listas
a = np.array([1, 2, 3])                    # 1D, dtype=int64
m = np.array([[1, 2, 3], [4, 5, 6]])       # 2D shape (2,3)

# Funções de criação
np.zeros((3, 3))                            # zeros float64
np.ones((3, 3))                             # uns float64
np.eye(3)                                   # identidade 3x3
np.full((3, 3), 7)                          # preenchido com 7
np.linspace(0, 10, 5)                       # [0. 2.5 5. 7.5 10.]
np.arange(0, 10, 2)                         # [0 2 4 6 8]
np.random.default_rng(42).standard_normal((3, 4))

# Inspecionar
print(m.shape, m.dtype, m.ndim, m.size)    # (2, 3) int64 2 6

# Converter dtype
a_f = a.astype(np.float64)
a_c = a.astype(np.complex128)`}</div>
      </div>

      <hr style={S.divider} />

      {/* ── 2. Indexing ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Indexing e Slicing</h2>
        <p style={S.p}>
          NumPy suporta quatro estilos de indexação: básica (inteiro ou slice), indexação
          booleana (máscara), indexação avançada (fancy) por lista de índices, e
          combinações mistas.
        </p>
        <div style={S.svgWrap}><IndexingGridSVG /></div>
        <div style={S.code}>{`arr2d = np.arange(1, 13).reshape(3, 4)
# array([[ 1,  2,  3,  4],
#        [ 5,  6,  7,  8],
#        [ 9, 10, 11, 12]])

# Indexação básica
arr2d[0]          # array([1, 2, 3, 4])  — linha 0
arr2d[1, 2]       # 7  — linha 1, coluna 2
arr2d[:, 1]       # array([ 2,  6, 10])  — coluna 1
arr2d[0:2, 2:]    # submatriz linhas 0-1, colunas 2-3

# Slicing com step
a = np.arange(10)
a[::2]            # [0, 2, 4, 6, 8]
a[::-1]           # array invertido

# Boolean indexing
a[a > 5]          # [6, 7, 8, 9]
a[(a % 2 == 0) & (a > 3)]   # [4, 6, 8]
a[a < 0] = 0      # substituir negativos

# Fancy indexing (lista de índices)
a[[0, 3, 7]]      # [0, 3, 7]
arr2d[[0, 2], [1, 3]]   # seleciona (0,1) e (2,3) → [2, 12]`}</div>
        <div style={S.note}>
          Slices e indexação básica devolvem <strong>views</strong> (partilham memória).
          Indexação booleana e fancy devolvem <strong>cópias</strong>. Use <code>.copy()</code>
          para garantir independência.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 3. Reshape ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Reshaping e Rearranjo</h2>
        <p style={S.p}>
          <strong>.reshape()</strong> muda a vista sobre os mesmos dados sem copiar.
          <strong> .flatten()</strong> devolve sempre uma cópia 1D.
          <strong> .ravel()</strong> devolve view 1D quando possível.
          <strong> .T</strong> transpõe os eixos.
        </p>
        <div style={S.svgWrap}><ReshapeSVG /></div>
        <div style={S.code}>{`arr = np.arange(6)          # shape (6,)

# reshape — não copia se possível
arr.reshape(2, 3)           # shape (2, 3)
arr.reshape(2, 3, order='C')   # row-major (padrão)
arr.reshape(2, 3, order='F')   # column-major (Fortran)
arr.reshape(-1, 2)          # -1 inferido automaticamente → (3, 2)

# flatten vs ravel
arr.flatten()               # sempre cópia 1D
arr.ravel()                 # view 1D quando possível

# Transpose
m = arr.reshape(2, 3)
m.T                         # shape (3, 2)
m.transpose()               # equivalente

# expand_dims e squeeze
np.expand_dims(m, axis=0)   # (1, 2, 3) — adiciona eixo
np.squeeze(arr.reshape(1,6))  # remove eixos de size 1

# Stack e concatenate
a = np.array([1, 2])
b = np.array([3, 4])
np.vstack([a, b])           # [[1,2],[3,4]]
np.hstack([a, b])           # [1,2,3,4]
np.concatenate([a, b], axis=0)`}</div>
      </div>

      <hr style={S.divider} />

      {/* ── 4. Vectorização ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Vectorização</h2>
        <p style={S.p}>
          Cada iteração de um loop Python paga overhead de interpretação, boxing de tipos e
          verificação de GIL. NumPy delega ao código C compilado que opera sobre o array
          inteiro de uma vez, sem overhead por elemento.
        </p>
        <div style={S.svgWrap}><VectorizationSVG /></div>
        <div style={S.code}>{`import numpy as np, time

N = 1_000_000
a = np.random.rand(N)

# Loop Python — lento
t0 = time.perf_counter()
result = [x ** 2 for x in a]
print(f"Loop:  {(time.perf_counter()-t0)*1e3:.1f} ms")  # ~1800 ms

# NumPy — rápido
t0 = time.perf_counter()
result = a ** 2
print(f"NumPy: {(time.perf_counter()-t0)*1e3:.1f} ms")  # ~2 ms

# np.vectorize — NÃO resolve o problema!
# É apenas sintactic sugar sobre um loop Python.
# Para performance real, use ufuncs nativas.`}</div>
        <div style={S.note}>
          <strong>np.vectorize</strong> aplica uma função Python elemento a elemento —
          conveniente mas não mais rápido que um loop. Use sempre ufuncs nativas para performance.
        </div>
        <p style={S.p}><strong>Ufuncs (Universal Functions):</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Categoria</th>
              <th style={S.th}>Funções</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Matemáticas', 'np.sqrt, np.exp, np.log, np.log2, np.log10', 'element-wise em C'],
              ['Trigonometria', 'np.sin, np.cos, np.tan, np.arcsin', 'radianos'],
              ['Arredondamento', 'np.floor, np.ceil, np.round, np.trunc', 'devolvem array'],
              ['Sinal', 'np.abs, np.sign, np.clip', 'np.clip(a, min, max)'],
              ['Binárias', 'np.add, np.multiply, np.maximum, np.minimum', 'suportam out='],
            ].map(([cat, fns, note]) => (
              <tr key={cat}>
                <td style={{ ...S.td, fontWeight: 600 }}>{cat}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{fns}</td>
                <td style={S.td}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 5. Broadcasting ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Broadcasting</h2>
        <p style={S.p}>
          Broadcasting define como NumPy trata operações entre arrays de shapes diferentes.
          Dois arrays são compatíveis se, para cada dimensão alinhada à direita, os tamanhos
          são iguais ou um deles é 1 (ou inexistente).
        </p>
        <div style={S.svgWrap}><BroadcastingSVG /></div>
        <div style={S.code}>{`import numpy as np

# Escalar + array
a = np.arange(5)         # shape (5,)
a * 3                    # shape (5,) — escalar expande

# (4,3) — desmeanar colunas
arr = np.random.randn(4, 3)
arr - arr.mean(0)        # mean(0) tem shape (3,) → broadcast para (4,3)

# (4,3) — desmeanar linhas
row_means = arr.mean(1, keepdims=True)   # shape (4,1)
arr - row_means          # (4,3) - (4,1) → (4,3)

# (3,1) + (1,4) → (3,4)
col = np.array([[1],[2],[3]])   # shape (3,1)
row = np.array([[10,20,30,40]]) # shape (1,4)
col + row                # shape (3,4)

# ERRO de broadcast
a = np.ones((3, 2))
b = np.ones((3,))
# a + b  →  ValueError: operands could not be broadcast together
#           shapes (3,2) (3,)  — 2 != 3 na dim 1`}</div>
      </div>

      <hr style={S.divider} />

      {/* ── 6. Operações Matemáticas ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Operações Matemáticas e Agregações</h2>
        <p style={S.p}>
          Além das ufuncs element-wise, NumPy oferece <strong>funções de agregação</strong>
          que reduzem dimensões. O parâmetro <code>axis</code> controla qual dimensão é colapsada.
        </p>
        <div style={S.svgWrap}><AggregationAxisSVG /></div>
        <div style={S.code}>{`arr = np.array([[1,2,3],[4,5,6],[7,8,9]])

# Agregação global
arr.sum()          # 45
arr.mean()         # 5.0
arr.std()          # desvio padrão
arr.min(), arr.max()

# Com axis
arr.sum(axis=0)    # [12, 15, 18] — soma de cada coluna
arr.sum(axis=1)    # [6, 15, 24]  — soma de cada linha
arr.mean(axis=0, keepdims=True)   # shape (1,3) — preserva dims

# Funções úteis
np.cumsum(arr, axis=1)  # soma cumulativa por linha
np.cumprod(arr)         # produto cumulativo
np.diff(arr, axis=1)    # diferenças consecutivas
np.gradient(arr)        # gradiente numérico
np.percentile(arr, 75)  # percentil 75
np.median(arr)          # mediana
np.var(arr)             # variância`}</div>
      </div>

      <hr style={S.divider} />

      {/* ── 7. Álgebra Linear ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Álgebra Linear — numpy.linalg</h2>
        <p style={S.p}>
          NumPy delega operações de álgebra linear a BLAS/LAPACK, bibliotecas otimizadas
          para hardware. O operador <code>@</code> (Python 3.5+) realiza multiplicação matricial.
        </p>
        <div style={S.svgWrap}><MatMulSVG /></div>
        <div style={S.code}>{`import numpy as np

A = np.array([[1,2,3],[4,5,6]])   # shape (2,3)
B = np.array([[7,8],[9,10],[11,12]])  # shape (3,2)

# Multiplicação matricial
C = A @ B                         # shape (2,2) — equivalente a np.matmul(A,B)
C = np.dot(A, B)                  # igual para 2D

# Produto interno (dot product) de vetores
u = np.array([1, 2, 3])
v = np.array([4, 5, 6])
np.dot(u, v)                      # 32  (1*4 + 2*5 + 3*6)

# numpy.linalg
sq = np.array([[1,2],[3,4]])
np.linalg.det(sq)                 # determinante = -2.0
np.linalg.inv(sq)                 # matriz inversa
np.linalg.matrix_rank(sq)         # posto da matriz

# Valores e vetores próprios
vals, vecs = np.linalg.eig(sq)    # valores e vetores próprios
print(vals)   # [eigenvalue1, eigenvalue2]

# SVD — Singular Value Decomposition
U, s, Vt = np.linalg.svd(sq)      # sq = U @ np.diag(s) @ Vt

# Sistemas lineares Ax = b
b = np.array([5, 11])
x = np.linalg.solve(sq, b)        # solução exata
x = np.linalg.lstsq(sq, b, rcond=None)[0]  # mínimos quadrados

# Normas
np.linalg.norm(u)                  # norma L2
np.linalg.norm(sq, 'fro')          # norma de Frobenius`}</div>
      </div>

      <hr style={S.divider} />

      {/* ── 8. SciPy Estatística ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. SciPy — Estatística</h2>
        <p style={S.p}>
          <code>scipy.stats</code> oferece mais de 100 distribuições de probabilidade contínuas e
          discretas, testes estatísticos e funções de correlação.
        </p>
        <div style={S.svgWrap}><NormalDistSVG /></div>
        <div style={S.code}>{`from scipy import stats

# Distribuição Normal
dist = stats.norm(loc=0, scale=1)   # Normal(0,1)
dist.pdf(0)          # 0.3989 — densidade em x=0
dist.cdf(1.96)       # 0.9750 — P(X ≤ 1.96)
dist.ppf(0.975)      # 1.9600 — quantil 97.5%
dist.rvs(size=1000)  # 1000 amostras aleatórias
dist.interval(0.95)  # (-1.96, 1.96) — intervalo 95%

# Outras distribuições
stats.t(df=10)                   # t-Student com 10 graus de liberdade
stats.chi2(df=5)                 # Qui-quadrado
stats.f(dfn=3, dfd=20)           # Distribuição F
stats.binom(n=10, p=0.3)         # Binomial (discreta)
stats.poisson(mu=5)              # Poisson

# Testes de hipóteses
a = stats.norm.rvs(loc=0, size=30, random_state=1)
b = stats.norm.rvs(loc=0.5, size=30, random_state=2)
t_stat, p_val = stats.ttest_ind(a, b)    # t-test independente
stats.ttest_rel(a, b[:len(a)])           # t-test emparelhado
stats.mannwhitneyu(a, b)                 # Mann-Whitney (não paramétrico)
stats.ks_2samp(a, b)                     # Kolmogorov-Smirnov

# Correlação
r, p = stats.pearsonr(a, b[:30])        # Pearson r
rho, p = stats.spearmanr(a, b[:30])     # Spearman rho
tau, p = stats.kendalltau(a, b[:30])    # Kendall tau

# Estatísticas descritivas
stats.describe(a)    # nobs, minmax, mean, variance, skewness, kurtosis`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Quando usar scipy.stats vs numpy:</strong> NumPy tem <code>np.mean</code>,
            <code>np.std</code>, <code>np.corrcoef</code> para estatísticas básicas.
            scipy.stats adiciona distribuições parametrizadas, testes de hipóteses, ajuste de
            distribuições e estatísticas de ordem.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 9. SciPy Otimização ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. SciPy — Otimização</h2>
        <p style={S.p}>
          <code>scipy.optimize</code> oferece minimização de funções escalares e vetoriais,
          ajuste de curvas, raízes de equações e programação linear.
        </p>
        <div style={S.svgWrap}><OptimizeSVG /></div>
        <div style={S.code}>{`from scipy.optimize import minimize, curve_fit
import numpy as np

# minimize — minimiza f(x) escalar
def rosenbrock(x):
    return (1 - x[0])**2 + 100*(x[1] - x[0]**2)**2

x0 = np.array([-1.0, 1.0])

# Nelder-Mead — sem gradiente (robusto mas lento)
res = minimize(rosenbrock, x0, method='Nelder-Mead')
print(res.x)         # [1. 1.]  (mínimo global)

# BFGS — usa gradiente aproximado (rápido, eficiente)
res = minimize(rosenbrock, x0, method='BFGS')

# L-BFGS-B — BFGS com memória limitada, suporta bounds
bounds = [(-2, 2), (-2, 2)]
res = minimize(rosenbrock, x0, method='L-BFGS-B', bounds=bounds)

# curve_fit — ajuste de curva a dados
def model(x, a, b, c):
    return a * np.exp(-b * x) + c

xdata = np.linspace(0, 4, 50)
ydata = model(xdata, 2.5, 1.3, 0.5) + 0.2*np.random.randn(50)

popt, pcov = curve_fit(model, xdata, ydata)
print(popt)   # [~2.5, ~1.3, ~0.5]

# Raízes e zeros
from scipy.optimize import root, brentq
brentq(lambda x: x**2 - 2, 1, 2)   # sqrt(2) ≈ 1.4142`}</div>
      </div>

      <hr style={S.divider} />

      {/* ── 10. SciPy Signal e Interpolação ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. SciPy — Sinal e Interpolação</h2>
        <p style={S.p}>
          <code>scipy.signal</code> e <code>numpy.fft</code> processam sinais no domínio da
          frequência. <code>scipy.interpolate</code> reconstrói funções contínuas a partir de
          pontos discretos.
        </p>
        <div style={S.svgWrap}><FFTsvg /></div>
        <div style={S.code}>{`import numpy as np
from scipy import signal, interpolate

# FFT — Fast Fourier Transform
fs = 1000          # frequência de amostragem (Hz)
t = np.linspace(0, 1, fs, endpoint=False)
x = np.sin(2*np.pi*50*t) + 0.5*np.sin(2*np.pi*120*t)  # 50Hz + 120Hz

X = np.fft.fft(x)             # FFT
freqs = np.fft.fftfreq(len(x), 1/fs)
magnitude = np.abs(X)         # magnitude espectral

# Apenas frequências positivas
pos = freqs > 0
# Picos em 50 Hz e 120 Hz

# Filtros (scipy.signal)
b, a = signal.butter(4, 80, fs=fs, btype='low')   # filtro Butterworth passa-baixo 80Hz
xf = signal.filtfilt(b, a, x)

# Espetrograma
f, t_spec, Sxx = signal.spectrogram(x, fs=fs)

# Interpolação
from scipy.interpolate import interp1d, CubicSpline

xp = np.array([0, 1, 2, 3, 4, 5])
yp = np.array([0.3, 0.8, 0.4, 0.9, 0.5, 0.7])

# Linear
f_lin = interp1d(xp, yp)
y_lin = f_lin(np.linspace(0, 5, 50))

# Spline cúbico — mais suave
cs = CubicSpline(xp, yp)
y_spl = cs(np.linspace(0, 5, 200))

# interp1d com diferentes métodos
f_quad = interp1d(xp, yp, kind='quadratic')
f_cubic = interp1d(xp, yp, kind='cubic')`}</div>
        <div style={S.svgWrap}><SplineSVG /></div>
      </div>

      <hr style={S.divider} />

      {/* ── 11. NumPy vs Pandas ── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. NumPy vs Pandas</h2>
        <p style={S.p}>
          NumPy e Pandas são complementares. Pandas é construído sobre NumPy — os arrays
          subjacentes de um DataFrame são ndarrays. A escolha depende da estrutura dos dados
          e das operações necessárias.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>NumPy</th>
              <th style={S.th}>Pandas</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Estrutura', 'ndarray homogéneo', 'DataFrame heterogéneo com labels'],
              ['Labels', 'Apenas índices inteiros', 'Índices e colunas nomeados'],
              ['Tipos mistos', 'Não (cast automático)', 'Sim (cada coluna tem dtype próprio)'],
              ['Performance numérica', 'Excelente (sem overhead)', 'Overhead de labels e indexação'],
              ['Álgebra linear', 'Nativo (np.linalg)', 'Via .values / .to_numpy()'],
              ['ML / tensores', 'Base de PyTorch, TensorFlow', 'Conversão necessária'],
              ['Dados tabulares', 'Incómodo (sem nomes)', 'Ideal (read_csv, merge, groupby)'],
              ['Séries temporais', 'Manual', 'DatetimeIndex, resample, rolling'],
            ].map(([c, n, p]) => (
              <tr key={c}>
                <td style={{ ...S.td, fontWeight: 600 }}>{c}</td>
                <td style={S.td}>{n}</td>
                <td style={S.td}>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.code}>{`import numpy as np
import pandas as pd

# NumPy → Pandas
arr = np.array([[1, 2.5, 'a'], [3, 4.1, 'b']])  # dtype object (mixed)
df = pd.DataFrame(arr, columns=['int_col', 'float_col', 'str_col'])

# Pandas → NumPy
arr2 = df['float_col'].astype(float).to_numpy()   # preferred
arr3 = df.values                                   # legacy (retorna object se mixed)

# Operações NumPy em colunas Pandas
prices = pd.Series([100, 102, 98, 105])
log_returns = np.log(prices / prices.shift(1))    # log returns

# DataFrame de resultado NumPy
result_arr = np.linalg.eig(np.corrcoef(np.random.randn(4, 100)))
pd.DataFrame({'eigenvalues': result_arr[0].real})`}</div>
        <div style={S.note}>
          Regra prática: use <strong>Pandas</strong> para manipulação e análise de dados
          tabulares com labels. Converta para <strong>NumPy</strong> com <code>.to_numpy()</code>
          quando precisar de álgebra linear ou computação numérica pura.
        </div>
      </div>
</div>
  );
}
