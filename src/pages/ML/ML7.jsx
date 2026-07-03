import React from 'react';
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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Dataset usado no exemplo numérico completo ===
// Pontos 2D, classe A (azul) vs classe B (verde), e o ponto query
const DATASET = [
  { x: 1, y: 2, c: 'A' },
  { x: 2, y: 3, c: 'A' },
  { x: 2, y: 1, c: 'A' },
  { x: 3, y: 2, c: 'A' },
  { x: 1.5, y: 3.5, c: 'A' },
  { x: 6, y: 6, c: 'B' },
  { x: 7, y: 5, c: 'B' },
  { x: 6.5, y: 7, c: 'B' },
  { x: 8, y: 6, c: 'B' },
  { x: 7, y: 7.5, c: 'B' },
];
const QUERY = { x: 4, y: 4 };

const dist = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

// === Diagram 1: scatter plot do dataset com query point e círculos k=1,3,5 ===
const KNNScatterDiagram = () => {
  const w = 320, h = 320, pad = 30;
  const scale = (v) => pad + (v / 9) * (w - 2 * pad);
  const sorted = [...DATASET].map((p) => ({ ...p, d: dist(p, QUERY) })).sort((a, b) => a.d - b.d);
  const radiusFor = (k) => sorted[k - 1].d;
  const radii = [1, 3, 5].map((k) => ({ k, r: radiusFor(k) }));
  const cA = '#f97316', cB = '#fdba74', cQ = '#fb923c';
  const colors = { 1: '#f97316', 3: '#fb923c', 5: '#fdba74' };

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Dataset 2D — Ponto Query e Vizinhanças k=1, k=3, k=5</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto', maxHeight: 360 }}>
        {/* eixos */}
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={w - pad} y={h - pad + 14} fontSize="10" textAnchor="end" fill="var(--text-secondary)">x₁</text>
        <text x={pad - 6} y={pad} fontSize="10" textAnchor="end" fill="var(--text-secondary)">x₂</text>

        {/* círculos de raio para k=1,3,5 (do maior para o menor para não sobrepor) */}
        {radii.slice().reverse().map(({ k, r }) => (
          <circle key={k} cx={scale(QUERY.x)} cy={h - scale(QUERY.y)} r={(r / 9) * (w - 2 * pad)} fill="none" stroke={colors[k]} strokeWidth="1.5" strokeDasharray="5,3" />
        ))}

        {/* pontos do dataset */}
        {DATASET.map((p, i) => (
          <g key={i}>
            {p.c === 'A' ? (
              <circle cx={scale(p.x)} cy={h - scale(p.y)} r={7} fill={cA} fillOpacity="0.85" />
            ) : (
              <rect x={scale(p.x) - 6} y={h - scale(p.y) - 6} width={12} height={12} fill={cB} fillOpacity="0.85" />
            )}
            <text x={scale(p.x)} y={h - scale(p.y) - 12} fontSize="8" textAnchor="middle" fill="var(--text-secondary)">({p.x},{p.y})</text>
          </g>
        ))}

        {/* query point */}
        <circle cx={scale(QUERY.x)} cy={h - scale(QUERY.y)} r={9} fill={cQ} />
        <text x={scale(QUERY.x)} y={h - scale(QUERY.y) + 22} fontSize="10" fontWeight="700" textAnchor="middle" fill={cQ}>Query (4,4)</text>

        {/* legenda raios */}
        <text x={pad + 4} y={pad + 8} fontSize="9" fill={colors[1]} fontWeight="700">— k=1</text>
        <text x={pad + 4} y={pad + 20} fontSize="9" fill={colors[3]} fontWeight="700">- - k=3</text>
        <text x={pad + 4} y={pad + 32} fontSize="9" fill={colors[5]} fontWeight="700">- - k=5</text>
      </svg>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}><span style={{ display: 'inline-block', width: 10, height: 10, background: cA, borderRadius: '50%', marginRight: 4 }} />Classe A</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}><span style={{ display: 'inline-block', width: 10, height: 10, background: cB, marginRight: 4 }} />Classe B</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}><span style={{ display: 'inline-block', width: 10, height: 10, background: cQ, borderRadius: '50%', marginRight: 4 }} />Ponto Query</span>
      </div>
    </div>
  );
};

// === Diagram 2: curse of dimensionality — volume da "casca" vs hipercubo ===
const CurseOfDimensionalityDiagram = () => {
  const dims = [1, 2, 3, 5, 10, 20, 50];
  const ratio = (d) => 1 - Math.pow(0.9, d); // fração de volume na "casca" exterior (espessura 10%)
  const w = 480, h = 180, pad = 36;
  const xScale = (i) => pad + (i / (dims.length - 1)) * (w - 2 * pad);
  const yScale = (v) => h - pad - v * (h - 2 * pad);
  const points = dims.map((d, i) => [xScale(i), yScale(ratio(d))]);
  const path = points.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(' ');

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Curse of Dimensionality — Fracção de Volume na "Casca Exterior"</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={pad - 8} y={pad} fontSize="9" textAnchor="end" fill="var(--text-secondary)">100%</text>
        <text x={pad - 8} y={h - pad} fontSize="9" textAnchor="end" fill="var(--text-secondary)">0%</text>
        <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
        {points.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={3.5} fill={color} />
            <text x={x} y={h - pad + 14} fontSize="9" textAnchor="middle" fill="var(--text-secondary)">d={dims[i]}</text>
          </g>
        ))}
        <text x={w / 2} y={14} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">% do volume do hipercubo a menos de 10% da fronteira</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Considere um hipercubo de lado 1 e uma "casca" interior com 10% de espessura junto à fronteira.
        A fracção do volume total contida nessa casca é <InlineMath math="1 - 0.9^d" />, onde <InlineMath math="d" /> é
        o número de dimensões. Em <InlineMath math="d=1" />, apenas 10% do volume está na casca; em <InlineMath math="d=10" />,
        já são ≈65%; em <InlineMath math="d=50" />, mais de 99.5%. Isto significa que, em alta dimensão, <strong>quase
        todos os pontos estão próximos da fronteira</strong> e as distâncias entre pontos tendem a tornar-se
        semelhantes entre si — o conceito de "vizinho mais próximo" perde significado discriminativo.
      </p>
    </div>
  );
};

// === Diagram 3: efeito da normalização de features ===
const ScalingEffectDiagram = () => {
  // dados fictícios: feature 1 em [0,10], feature 2 em [0,1000]
  const raw = [
    { x: 2, y: 200, c: 'A' },
    { x: 3, y: 250, c: 'A' },
    { x: 8, y: 800, c: 'B' },
    { x: 7, y: 150, c: 'B' },
  ];
  const w = 220, h = 180, pad = 28;
  const Plot = ({ pts, xMax, yMax, title }) => (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        {pts.map((p, i) => {
          const px = pad + (p.x / xMax) * (w - 2 * pad);
          const py = h - pad - (p.y / yMax) * (h - 2 * pad);
          return p.c === 'A'
            ? <circle key={i} cx={px} cy={py} r={6} fill="#f97316" fillOpacity="0.85" />
            : <rect key={i} x={px - 5} y={py - 5} width={10} height={10} fill="#f97316" fillOpacity="0.85" />;
        })}
        <text x={w / 2} y={h - 8} fontSize="9" textAnchor="middle" fill="var(--text-secondary)">feature x₁</text>
        <text x={10} y={pad} fontSize="9" textAnchor="start" fill="var(--text-secondary)">x₂</text>
      </svg>
      <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{title}</p>
    </div>
  );
  const normalized = raw.map((p) => ({ x: p.x / 10, y: p.y / 1000, c: p.c }));
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Efeito da Normalização nas Distâncias</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <Plot pts={raw} xMax={10} yMax={1000} title="Sem normalização (x₂ domina)" />
        <Plot pts={normalized} xMax={1} yMax={1} title="Com normalização (ambas em [0,1])" />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        À esquerda, <InlineMath math="x_1 \in [0,10]" /> e <InlineMath math="x_2 \in [0,1000]" />. Como a distância
        Euclidiana soma os quadrados das diferenças em cada eixo, a diferença em <InlineMath math="x_2" /> domina
        completamente o resultado — <InlineMath math="x_1" /> torna-se praticamente irrelevante. Após
        <strong> normalizar</strong> (ex.: min-max para [0,1] ou standardização <InlineMath math="z = (x-\mu)/\sigma" />),
        ambas as features contribuem de forma equilibrada para a distância, à direita.
      </p>
    </div>
  );
};

// === Diagram 4: fronteiras de decisão para k pequeno vs k grande ===
const DecisionBoundaryDiagram = () => {
  const w = 220, h = 180;
  const Boundary = ({ title, path, noisy }) => (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
        <rect x="0" y="0" width={w} height={h} fill="rgba(249,115,22,0.10)" />
        <path d={path} fill="rgba(16,185,129,0.18)" stroke="#f97316" strokeWidth="1.5" />
        {noisy && <circle cx="60" cy="40" r="6" fill="#f97316" fillOpacity="0.7" />}
        <text x={w / 2} y={h - 6} fontSize="9" textAnchor="middle" fill="var(--text-secondary)">{title}</text>
      </svg>
    </div>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Fronteiras de Decisão: k Pequeno vs k Grande</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <Boundary title="k=1 — fronteira irregular, ruidosa (overfitting)" noisy path="M 150 10 C 170 30 120 50 140 70 C 160 90 90 100 110 130 C 130 160 60 150 70 175 L 220 175 L 220 0 Z" />
        <Boundary title="k=15 — fronteira suave (possível underfitting)" path="M 140 10 C 170 50 160 110 130 175 L 220 175 L 220 0 Z" />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Com <InlineMath math="k=1" />, a fronteira de decisão "abraça" cada ponto individual (incluindo ruído —
        repare no pequeno "bolso" verde isolado dentro da região azul), produzindo alta variância. Com
        <InlineMath math="k" /> grande, a fronteira torna-se muito mais suave — mais bias, menos variância — mas
        pode ignorar estruturas locais genuínas se <InlineMath math="k" /> for demasiado grande.
      </p>
    </div>
  );
};

// === Diagram 5: K-d Tree — partição espacial ===
const KDTreePartitionDiagram = () => {
  // pontos exemplo (mesmos do KNNScatterDiagram, simplificados)
  const pts = [
    { x: 2, y: 3, label: 'A(2,3)' },
    { x: 5, y: 4, label: 'B(5,4)' },
    { x: 9, y: 6, label: 'C(9,6)' },
    { x: 4, y: 7, label: 'D(4,7)' },
    { x: 8, y: 1, label: 'E(8,1)' },
    { x: 7, y: 2, label: 'F(7,2)' },
  ];
  const w = 280, h = 280, pad = 24;
  const scale = (v) => pad + (v / 10) * (w - 2 * pad);
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>K-d Tree — Partição Espacial (alternando eixo x / eixo y)</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto', maxHeight: 300 }}>
        <rect x={pad} y={pad} width={w - 2 * pad} height={h - 2 * pad} fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
        {/* split 1: x=7 (vertical, mediana por x) — toda a área */}
        <line x1={scale(7)} y1={pad} x2={scale(7)} y2={h - pad} stroke={color} strokeWidth="2" />
        <text x={scale(7) + 4} y={pad + 12} fontSize="9" fill={color}>x=7</text>
        {/* split 2: esquerda de x=7, split por y=4 (horizontal) */}
        <line x1={pad} y1={scale(4)} x2={scale(7)} y2={scale(4)} stroke="#f97316" strokeWidth="1.5" />
        <text x={pad + 4} y={scale(4) - 4} fontSize="9" fill="#f97316">y=4</text>
        {/* split 3: direita de x=7, split por y=2 (horizontal) */}
        <line x1={scale(7)} y1={scale(2)} x2={w - pad} y2={scale(2)} stroke="#f97316" strokeWidth="1.5" />
        <text x={scale(7) + 4} y={scale(2) - 4} fontSize="9" fill="#f97316">y=2</text>
        {/* split 4: dentro do quadrante inferior-esquerdo (x<7,y<4), split por x=2 */}
        <line x1={scale(2)} y1={scale(4)} x2={scale(2)} y2={h - pad} stroke="#f59e0b" strokeWidth="1.2" />
        {/* pontos */}
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={scale(p.x)} cy={h - scale(p.y)} r={5} fill="#f97316" />
            <text x={scale(p.x) + 7} y={h - scale(p.y) + 3} fontSize="9" fill="var(--text-primary)">{p.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// === Diagram 6: K-d Tree — árvore (estrutura) ===
const KDTreeStructureDiagram = () => {
  const nodes = [
    { x: 160, y: 20, label: 'B(5,4)\nsplit x' },
    { x: 80, y: 90, label: 'A(2,3)\nsplit y' },
    { x: 240, y: 90, label: 'F(7,2)\nsplit y' },
    { x: 40, y: 160, label: 'leaf' },
    { x: 120, y: 160, label: 'D(4,7)' },
    { x: 200, y: 160, label: 'E(8,1)' },
    { x: 280, y: 160, label: 'C(9,6)' },
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>K-d Tree — Estrutura Hierárquica Resultante</p>
      <svg viewBox="0 0 320 200" style={{ maxWidth: '100%', height: 'auto' }}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y + 16} x2={nodes[b].x} y2={nodes[b].y - 16} stroke="#94a3b8" strokeWidth="1.2" />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <rect x={n.x - 32} y={n.y - 12} width="64" height="28" rx="6" fill={i === 0 ? `${color}1A` : 'var(--bg-primary)'} stroke={i === 0 ? color : 'var(--card-border)'} strokeWidth="1.2" />
            {n.label.split('\n').map((l, li) => (
              <text key={li} x={n.x} y={n.y + 2 + li * 11} textAnchor="middle" fill="var(--text-primary)" fontSize="9">{l}</text>
            ))}
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        A raiz divide o espaço pela mediana do eixo <InlineMath math="x" /> (B em x=5 separa A,D à esquerda de
        C,E,F à direita). Cada filho divide o seu subespaço pela mediana do eixo seguinte (y), e assim
        alternadamente. Para procurar o vizinho mais próximo de um novo ponto, percorre-se a árvore de raiz a
        folha comparando apenas com a coordenada relevante em cada nível — em média <InlineMath math="O(\log N)" /> comparações
        em vez de <InlineMath math="O(N)" />.
      </p>
    </div>
  );
};

// === Diagram 7: Locally Weighted Regression ===
const LWRDiagram = () => {
  const w = 460, h = 180, pad = 30;
  // pontos ruidosos em torno de uma curva senoidal
  const data = [];
  for (let i = 0; i <= 16; i++) {
    const x = i / 16;
    const yTrue = 0.5 + 0.35 * Math.sin(x * Math.PI * 1.6);
    const noise = (Math.sin(i * 12.9) * 0.5 + 0.5 - 0.5) * 0.08;
    data.push({ x, y: yTrue + noise });
  }
  const sx = (x) => pad + x * (w - 2 * pad);
  const sy = (y) => h - pad - y * (h - 2 * pad);
  // curva LWR suave (a própria curva "verdadeira" aproximada)
  let path = '';
  for (let i = 0; i <= 40; i++) {
    const x = i / 40;
    const y = 0.5 + 0.35 * Math.sin(x * Math.PI * 1.6);
    path += (i === 0 ? 'M' : 'L') + sx(x).toFixed(1) + ',' + sy(y).toFixed(1) + ' ';
  }
  const queryX = 0.55;
  const queryY = 0.5 + 0.35 * Math.sin(queryX * Math.PI * 1.6);
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Locally Weighted Regression — Ajuste Local Suave</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        {data.map((p, i) => (
          <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={3} fill="#f97316" fillOpacity="0.7" />
        ))}
        <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
        {/* janela de pesos em torno do query */}
        <ellipse cx={sx(queryX)} cy={sy(queryY)} rx={55} ry={50} fill={`${color}15`} stroke={color} strokeWidth="1" strokeDasharray="4,3" />
        <circle cx={sx(queryX)} cy={sy(queryY)} r={5} fill="#f59e0b" />
        <text x={sx(queryX)} y={sy(queryY) - 14} fontSize="9" textAnchor="middle" fill="#f59e0b" fontWeight="700">x_query</text>
        <text x={w / 2} y={14} fontSize="10" textAnchor="middle" fill="var(--text-secondary)">pontos próximos (na janela) pesam mais na regressão local</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Para cada ponto onde queremos prever, a LWR ajusta um <strong>modelo linear (ou polinomial) local</strong> —
        mas dando mais peso aos pontos de treino próximos de <InlineMath math="x_{query}" /> e quase ignorando os
        distantes. Repetindo este ajuste local para vários pontos de consulta, obtém-se uma curva suave que
        acompanha a tendência local dos dados, sem assumir uma forma global fixa (como uma recta única).
      </p>
    </div>
  );
};

export default function ML7() {
  // --- cálculos para o exemplo numérico ---
  const sortedByDist = [...DATASET]
    .map((p) => ({ ...p, d: dist(p, QUERY) }))
    .sort((a, b) => a.d - b.d);

  const k1 = sortedByDist.slice(0, 1);
  const k3 = sortedByDist.slice(0, 3);
  const k5 = sortedByDist.slice(0, 5);
  const majority = (arr) => {
    const counts = arr.reduce((acc, p) => ({ ...acc, [p.c]: (acc[p.c] || 0) + 1 }), {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  };

  // pesos invertidos para os 3 vizinhos mais próximos
  const weighted = k3.map((p) => ({ ...p, w: 1 / (p.d * p.d) }));
  const wSumA = weighted.filter((p) => p.c === 'A').reduce((s, p) => s + p.w, 0);
  const wSumB = weighted.filter((p) => p.c === 'B').reduce((s, p) => s + p.w, 0);

  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 07</div>
      <h1 style={S.h1}>K-Nearest Neighbors & Aprendizagem Baseada em Instâncias</h1>
      <p style={S.lead}>
        Até agora, a maioria dos algoritmos que estudámos constrói um <strong>modelo explícito</strong> durante o
        treino — uma árvore, uma fronteira linear, um conjunto de pesos — e depois descarta os dados de treino.
        A família de algoritmos <strong>instance-based</strong> (ou <em>lazy learning</em>) inverte esta lógica:
        o "modelo" são literalmente os exemplos de treino guardados em memória, e toda a computação acontece no
        momento da previsão. Neste módulo vamos explorar o algoritmo mais representativo desta família —
        <strong> K-Nearest Neighbors (KNN)</strong> — em profundidade: métricas de distância, escolha de
        <InlineMath math="k" />, ponderação por distância, estruturas de aceleração (K-d Trees), o problema da
        "maldição da dimensionalidade", normalização de features, regressão localmente ponderada (LWR), e
        métricas de similaridade para vectores e conjuntos.
      </p>

      {/* === SECTION 1: Lazy Learning === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Lazy Learning — Conhecimento Armazenado nas Instâncias</h2>
        <p style={S.p}>
          Algoritmos como Decision Trees, Regressão Logística ou SVMs são <strong>eager learners</strong>: durante
          o treino, processam todo o dataset e produzem uma estrutura compacta (uma árvore, um conjunto de pesos,
          um conjunto de vectores de suporte) que resume o que foi aprendido. Depois do treino, os dados originais
          já não são necessários.
        </p>
        <p style={S.p}>
          O KNN é o exemplo clássico de <strong>lazy learner</strong>: a "fase de treino" consiste apenas em
          guardar o dataset de treino tal como está. Não há generalização explícita, não há parâmetros ajustados,
          não há função objectivo a optimizar. Todo o "raciocínio" acontece quando chega um novo ponto a classificar
          — nesse momento, o algoritmo percorre (ou consulta uma estrutura indexada sobre) os exemplos guardados
          para decidir a resposta.
        </p>
        
          <strong>Algoritmo KNN — 3 passos na predição:</strong>
          <ol style={{ marginTop: '0.5rem', lineHeight: 2, paddingLeft: '1.25rem' }}>
            <li>Calcular a distância de <InlineMath math="x_{query}" /> a todos os exemplos de treino</li>
            <li>Seleccionar os <InlineMath math="k" /> exemplos mais próximos (os "vizinhos")</li>
            <li>Classificar por <strong>maioria de votos</strong> (classificação) ou <strong>média</strong> dos valores (regressão)</li>
          </ol>
        
        <div style={S.note}>
          <strong>Custo computacional invertido:</strong> Treino em <InlineMath math="O(1)" /> (apenas guardar os
          dados), mas predição em <InlineMath math="O(N)" /> por defeito (comparar com todos os <InlineMath math="N" /> exemplos)
          — ou <InlineMath math="O(\log N)" /> com estruturas como K-d Trees. Isto contrasta com modelos "eager",
          onde o treino é caro mas a predição é praticamente instantânea.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Métricas de Distância === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Métricas de Distância</h2>
        <p style={S.p}>
          O conceito de "vizinho mais próximo" depende inteiramente de como definimos <strong>distância</strong> (ou,
          de forma equivalente, <strong>similaridade</strong>) entre dois pontos. A escolha da métrica tem um
          impacto enorme no comportamento do algoritmo.
        </p>

        <h3 style={S.h3}>Distância Euclidiana (Minkowski, p=2)</h3>
        <p style={S.p}>É a distância "em linha recta", generalização do teorema de Pitágoras para <InlineMath math="n" /> dimensões:</p>
        <div style={S.math}>
          <BlockMath math="d_{euc}(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}" />
        </div>
        <p style={S.p}>
          Exemplo: para <InlineMath math="\mathbf{x}=(1,2)" /> e <InlineMath math="\mathbf{y}=(4,6)" />:
        </p>
        <div style={S.math}>
          <BlockMath math="d_{euc} = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{9+16} = \sqrt{25} = 5" />
        </div>

        <h3 style={S.h3}>Distância Manhattan (Minkowski, p=1)</h3>
        <p style={S.p}>Também chamada distância "taxicab" — soma das diferenças absolutas em cada eixo:</p>
        <div style={S.math}>
          <BlockMath math="d_{man}(\mathbf{x}, \mathbf{y}) = \sum_{i=1}^{n} |x_i - y_i|" />
        </div>
        <div style={S.math}>
          <BlockMath math="d_{man} = |4-1| + |6-2| = 3 + 4 = 7" />
        </div>

        <h3 style={S.h3}>Distância de Minkowski (Generalização)</h3>
        <div style={S.math}>
          <BlockMath math="d_p(\mathbf{x}, \mathbf{y}) = \left( \sum_{i=1}^{n} |x_i - y_i|^p \right)^{1/p}" />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Valor de p</th><th style={S.th}>Nome</th><th style={S.th}>Comportamento</th></tr></thead>
            <tbody>
              {[
                ['p = 1', 'Manhattan', 'Soma de diferenças absolutas — robusta a outliers'],
                ['p = 2', 'Euclidiana', 'Distância em linha recta — a mais comum'],
                ['p → ∞', 'Chebyshev', 'Domina a diferença máxima numa única dimensão'],
              ].map(([a, b, c]) => (
                <tr key={a}><td style={{ ...S.td, fontFamily: 'monospace' }}>{a}</td><td style={{ ...S.td, fontWeight: 700, color }}>{b}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Quanto maior <InlineMath math="p" />, mais a métrica é dominada pela maior diferença individual entre
          coordenadas. Manhattan (p=1) "distribui" a importância por todas as dimensões; Chebyshev (p→∞) ignora
          tudo excepto a dimensão com a maior diferença.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Exemplo Numérico Completo de KNN === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Exemplo Numérico Completo — Classificação KNN</h2>
        <p style={S.p}>
          Vamos classificar um novo ponto <InlineMath math="x_{query} = (4,4)" /> usando um dataset de 10 pontos
          em duas classes (A e B), variando <InlineMath math="k \in \{1, 3, 5\}" />.
        </p>
        <KNNScatterDiagram />

        <h3 style={S.h3}>Tabela de Distâncias (ordenadas)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Ponto</th><th style={S.th}>Coordenadas</th><th style={S.th}>Classe</th><th style={S.th}>Distância Euclidiana a (4,4)</th></tr></thead>
            <tbody>
              {sortedByDist.map((p, i) => (
                <tr key={i}>
                  <td style={S.td}>{i + 1}º</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>({p.x}, {p.y})</td>
                  <td style={{ ...S.td, fontWeight: 700, color: p.c === 'A' ? '#f97316' : '#f97316' }}>{p.c}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{p.d.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Votação por Maioria para Diferentes Valores de k</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>k = 1:</strong> vizinho mais próximo é {`(${k1[0].x}, ${k1[0].y})`}, classe <strong>{k1[0].c}</strong> →
            previsão = <strong style={{ color }}>{majority(k1)[0]}</strong>
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>k = 3:</strong> os 3 vizinhos mais próximos são {k3.map((p) => `(${p.x},${p.y})[${p.c}]`).join(', ')} →
            {' '}{k3.filter((p) => p.c === 'A').length} de classe A e {k3.filter((p) => p.c === 'B').length} de classe B →
            previsão = <strong style={{ color }}>{majority(k3)[0]}</strong>
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>k = 5:</strong> os 5 vizinhos mais próximos são {k5.map((p) => `(${p.x},${p.y})[${p.c}]`).join(', ')} →
            {' '}{k5.filter((p) => p.c === 'A').length} de classe A e {k5.filter((p) => p.c === 'B').length} de classe B →
            previsão = <strong style={{ color }}>{majority(k5)[0]}</strong>
          </p>
        </div>
        <div style={S.note}>
          Repare como a previsão pode <strong>mudar</strong> conforme <InlineMath math="k" /> aumenta: para
          <InlineMath math="k=1" /> e <InlineMath math="k=3" />, o ponto mais próximo do query pertence à classe A,
          mas ao aumentar <InlineMath math="k" /> para 5 começamos a incluir vizinhos da classe B, o que pode
          alterar (ou reforçar) a decisão de maioria. Esta sensibilidade a <InlineMath math="k" /> é central na
          secção 7.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: KNN ponderado pela distância === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. KNN Ponderado pela Distância (Distance-Weighted KNN)</h2>
        <p style={S.p}>
          No KNN "simples" (uniforme), todos os <InlineMath math="k" /> vizinhos têm o mesmo peso no voto — um
          vizinho a distância 0.1 conta exactamente o mesmo que um vizinho a distância 10. Isto é, muitas vezes,
          pouco intuitivo: vizinhos mais próximos deveriam ter mais influência. A solução é o
          <strong> distance-weighted KNN</strong>, onde cada vizinho <InlineMath math="i" /> contribui com um peso
          <InlineMath math="w_i" /> inversamente proporcional à sua distância:
        </p>
        <div style={S.math}>
          <BlockMath math="w_i = \frac{1}{d(\mathbf{x}_{query}, \mathbf{x}_i)^2}" />
        </div>
        <p style={S.p}>
          A classe prevista é então a que maximiza a soma dos pesos dos seus vizinhos (em vez da simples contagem):
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{y} = \arg\max_{c} \sum_{i \in \mathcal{N}_k,\ y_i = c} w_i" />
        </div>

        <h3 style={S.h3}>Exemplo Numérico (continuação da secção 3, k=3)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Vizinho</th><th style={S.th}>Classe</th><th style={S.th}>Distância d</th><th style={S.th}>Peso w = 1/d²</th></tr></thead>
            <tbody>
              {weighted.map((p, i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>({p.x}, {p.y})</td>
                  <td style={{ ...S.td, fontWeight: 700, color: p.c === 'A' ? '#f97316' : '#f97316' }}>{p.c}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{p.d.toFixed(3)}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{p.w.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <BlockMath math={`\\sum w_{A} = ${wSumA.toFixed(3)} \\qquad \\sum w_{B} = ${wSumB.toFixed(3)}`} />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Como <InlineMath math={`${wSumA.toFixed(3)} ${wSumA > wSumB ? '>' : '<'} ${wSumB.toFixed(3)}`} />, a
            previsão ponderada é classe <strong style={{ color }}>{wSumA > wSumB ? 'A' : 'B'}</strong>
            {wSumA > wSumB === (majority(k3)[0] === 'A') ? ' — coincide com a votação simples deste exemplo.' : ' — diferente da votação simples, ilustrando como a ponderação pode alterar o resultado.'}
          </p>
        
        <div style={S.note}>
          A ponderação por distância é especialmente útil quando <InlineMath math="k" /> é grande: garante que
          vizinhos muito distantes (que tecnicamente "entraram" no top-k) tenham uma influência residual,
          em vez de pesarem tanto quanto o vizinho mais próximo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Curse of Dimensionality === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. A Maldição da Dimensionalidade (Curse of Dimensionality)</h2>
        <p style={S.p}>
          O KNN assume implicitamente que "perto no espaço de features" significa "semelhante". Esta suposição
          degrada-se rapidamente conforme o número de dimensões (features) aumenta — um fenómeno conhecido como
          <strong> curse of dimensionality</strong>.
        </p>
        <CurseOfDimensionalityDiagram />
        <p style={S.p}>
          Consequências práticas para o KNN:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>As distâncias entre todos os pares de pontos tendem a tornar-se <strong>semelhantes</strong> — o "vizinho mais próximo" e o "vizinho mais distante" deixam de ser muito diferentes.</li>
          <li>Para manter a mesma densidade de amostragem, o número de pontos necessários cresce <strong>exponencialmente</strong> com o número de dimensões.</li>
          <li>K-d Trees e outras estruturas de indexação espacial perdem eficácia — a partir de ~20 dimensões, tornam-se quase tão lentas como a procura exaustiva (<InlineMath math="O(N)" />).</li>
        </ul>
        <div style={S.note}>
          Mitigações comuns: <strong>redução de dimensionalidade</strong> (PCA, t-SNE, autoencoders), <strong>selecção
          de features</strong> relevantes, ou usar métricas de distância mais robustas (Manhattan tende a degradar-se
          mais lentamente do que Euclidiana em alta dimensão).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Normalização === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Efeito da Normalização de Features</h2>
        <p style={S.p}>
          Como todas as métricas de distância tratam as diferenças em cada eixo de forma simétrica (somando-as,
          ou somando os seus quadrados), uma feature com uma escala numérica muito maior do que as outras
          <strong> dominará</strong> a distância total — independentemente da sua relevância real para o problema.
        </p>
        <ScalingEffectDiagram />
        <p style={S.p}>
          Duas técnicas comuns de normalização:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Min-Max: } x' = \frac{x - x_{min}}{x_{max} - x_{min}} \in [0,1]" />
        </div>
        <div style={S.math}>
          <BlockMath math="\text{Standardização (z-score): } x' = \frac{x - \mu}{\sigma}" />
        </div>
        <div style={S.highlight}>
          <strong>Regra de ouro:</strong> Para qualquer algoritmo baseado em distâncias (KNN, K-Means, SVM com
          kernel RBF, PCA, ...), normalize sempre as features <strong>antes</strong> de calcular distâncias —
          excepto se todas as features já estiverem na mesma escala e unidade de medida por construção.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Escolha de k === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Escolha de k — Trade-off Bias-Variância</h2>
        <p style={S.p}>
          O hiperparâmetro <InlineMath math="k" /> controla directamente o trade-off clássico entre bias
          (enviesamento) e variância:
        </p>
        <DecisionBoundaryDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Aspecto</th><th style={S.th}>k pequeno (k=1)</th><th style={S.th}>k grande (k≈N)</th></tr>
            </thead>
            <tbody>
              {[
                ['Bias', 'Baixo', 'Alto'],
                ['Variância', 'Alta', 'Baixa'],
                ['Fronteiras de decisão', 'Irregulares, complexas', 'Suaves, simples'],
                ['Sensível a ruído?', 'Sim — overfitting', 'Não — pode dar underfitting'],
                ['Custo de predição', 'Igual (ainda compara com todos)', 'Igual'],
                ['Regra prática', '—', 'k = √N como ponto de partida; ajustar via validação cruzada'],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 600, color }}>{a}</td>
                  <td style={S.td}>{b}</td>
                  <td style={S.td}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Em problemas de classificação binária, é boa prática escolher <InlineMath math="k" /> <strong>ímpar</strong> para
          evitar empates 50/50 na votação. O valor óptimo de <InlineMath math="k" /> é tipicamente encontrado por
          <strong> validação cruzada</strong>, testando vários valores e escolhendo o que minimiza o erro no
          conjunto de validação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: K-d Trees === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. K-d Trees — Acelerar a Procura de Vizinhos</h2>
        <p style={S.p}>
          A procura exaustiva do KNN — calcular a distância a <strong>todos</strong> os pontos de treino — é
          <InlineMath math="O(N)" /> por consulta. Para datasets grandes e baixa dimensionalidade (tipicamente
          até ~20 dimensões), uma <strong>K-d Tree</strong> (k-dimensional tree) reduz isto para
          <InlineMath math="O(\log N)" /> em média.
        </p>
        <p style={S.p}>
          Uma K-d Tree é uma árvore binária de pesquisa onde, em cada nível, o espaço é dividido pela
          <strong> mediana</strong> de um dos eixos, alternando ciclicamente entre eixos (x, depois y, depois x, ...
          em 2D).
        </p>

        <h3 style={S.h3}>Exemplo: Construção Passo a Passo</h3>
        <p style={S.p}>
          Considere os pontos: A(2,3), B(5,4), C(9,6), D(4,7), E(8,1), F(7,2).
        </p>
        <ol style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Nível 0 (split por x):</strong> ordenar por x → A(2), D(4), B(5), F(7), E(8), C(9). Mediana = B(5,4). Raiz = B. Esquerda: {`{A, D}`} (x &lt; 5); Direita: {`{F, E, C}`} (x &gt; 5).</li>
          <li><strong>Nível 1, ramo esquerdo (split por y):</strong> entre A(2,3) e D(4,7), mediana de y → A(y=3) fica como nó, D(y=7) como filho.</li>
          <li><strong>Nível 1, ramo direito (split por y):</strong> entre F(7,2), E(8,1), C(9,6), mediana de y → F(y=2) como nó; E(y=1) e C(y=6) como filhos.</li>
        </ol>
        <KDTreePartitionDiagram />
        <KDTreeStructureDiagram />
        <div style={S.note}>
          Para procurar o vizinho mais próximo de um novo ponto, a árvore é percorrida comparando apenas a
          coordenada relevante em cada nível (descendo para a esquerda ou direita), e depois faz-se
          <strong> backtracking</strong> para verificar se a região do "lado errado" da partição poderia conter um
          ponto mais próximo do que o melhor candidato encontrado até agora — isto garante que o resultado é
          exacto, não aproximado.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Cosine e Jaccard === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Similaridade de Cosseno e Similaridade de Jaccard</h2>
        <p style={S.p}>
          Nem todos os dados são vectores numéricos densos em que a distância Euclidiana faz sentido. Para
          vectores de texto (ex.: bag-of-words, embeddings) e para conjuntos (ex.: tags, itens comprados),
          outras medidas de similaridade são mais apropriadas.
        </p>

        <h3 style={S.h3}>Similaridade de Cosseno</h3>
        <p style={S.p}>
          Mede o <strong>ângulo</strong> entre dois vectores, ignorando a sua magnitude — muito usada em NLP, onde
          a "direcção" do vector (o que o documento é sobre) importa mais do que o seu "tamanho" (número total de
          palavras):
        </p>
        <div style={S.math}>
          <BlockMath math="\cos(\mathbf{x}, \mathbf{y}) = \frac{\mathbf{x} \cdot \mathbf{y}}{\|\mathbf{x}\| \, \|\mathbf{y}\|}" />
        </div>
        <p style={S.p}>
          Exemplo: <InlineMath math="\mathbf{x} = (2, 0, 1)" /> e <InlineMath math="\mathbf{y} = (1, 1, 1)" /> (contagens de palavras em dois documentos):
        </p>
        
          <BlockMath math="\mathbf{x} \cdot \mathbf{y} = (2)(1) + (0)(1) + (1)(1) = 3" />
          <BlockMath math="\|\mathbf{x}\| = \sqrt{2^2+0^2+1^2} = \sqrt{5} \approx 2.236" />
          <BlockMath math="\|\mathbf{y}\| = \sqrt{1^2+1^2+1^2} = \sqrt{3} \approx 1.732" />
          <BlockMath math="\cos(\mathbf{x}, \mathbf{y}) = \frac{3}{2.236 \times 1.732} \approx \frac{3}{3.873} \approx 0.775" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            A <strong>distância</strong> de cosseno usada no KNN é tipicamente <InlineMath math="d_{cos} = 1 - \cos(\mathbf{x}, \mathbf{y}) \approx 0.225" /> —
            quanto mais próximo de 0, mais semelhantes (mesma "direcção").
          </p>
        

        <h3 style={S.h3}>Similaridade de Jaccard</h3>
        <p style={S.p}>
          Para <strong>conjuntos</strong> (ou vectores binários), mede a proporção de elementos comuns sobre o
          total de elementos únicos:
        </p>
        <div style={S.math}>
          <BlockMath math="J(A, B) = \frac{|A \cap B|}{|A \cup B|}" />
        </div>
        <p style={S.p}>
          Exemplo: utilizador 1 comprou os produtos <InlineMath math="A = \{pão, leite, ovos, café\}" /> e
          utilizador 2 comprou <InlineMath math="B = \{leite, ovos, queijo\}" />:
        </p>
        
          <BlockMath math="A \cap B = \{leite, ovos\} \Rightarrow |A \cap B| = 2" />
          <BlockMath math="A \cup B = \{pão, leite, ovos, café, queijo\} \Rightarrow |A \cup B| = 5" />
          <BlockMath math="J(A,B) = \frac{2}{5} = 0.4" />
        
        <div style={S.note}>
          A <strong>distância</strong> de Jaccard é <InlineMath math="d_J = 1 - J(A,B)" />. É amplamente usada em
          sistemas de recomendação, deduplicação de documentos, e comparação de conjuntos de features categóricas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 10: LWR === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Locally Weighted Regression (LWR)</h2>
        <p style={S.p}>
          A <strong>Locally Weighted Regression</strong> (regressão localmente ponderada) é uma extensão natural
          da ideia "lazy" do KNN para problemas de <strong>regressão</strong>, mas em vez de simplesmente fazer a
          média dos <InlineMath math="k" /> vizinhos mais próximos, ajusta um <strong>modelo de regressão local</strong> (geralmente
          linear) para cada ponto de consulta, ponderando cada exemplo de treino pela sua proximidade ao ponto de
          consulta.
        </p>
        <p style={S.p}>
          Para cada <InlineMath math="x_{query}" />, resolve-se um problema de regressão ponderada que minimiza:
        </p>
        <div style={S.math}>
          <BlockMath math="\sum_{i=1}^{N} w_i \, (y_i - \theta^T x_i)^2 \qquad \text{onde} \quad w_i = \exp\left(-\frac{\|x_i - x_{query}\|^2}{2\tau^2}\right)" />
        </div>
        <p style={S.p}>
          O parâmetro <InlineMath math="\tau" /> (largura de banda) controla o tamanho da "vizinhança" — valores
          pequenos de <InlineMath math="\tau" /> produzem ajustes muito locais (curvas mais "tremidas"), valores
          grandes aproximam-se de uma regressão linear global.
        </p>
        <LWRDiagram />
        <div style={S.note}>
          A LWR é <strong>lazy</strong> tal como o KNN: não existe um único modelo treinado — cada previsão requer
          resolver um novo problema de regressão usando os dados de treino. É computacionalmente mais cara do que
          uma regressão linear simples, mas consegue capturar relações não-lineares sem especificar explicitamente
          a forma funcional (polinomial, etc.).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 11: Radius Neighbors e comparação === */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Radius Neighbors Classifier & Comparação de Métodos</h2>
        <p style={S.p}>
          Uma variante do KNN é o <strong>Radius Neighbors Classifier</strong>: em vez de fixar o número de
          vizinhos <InlineMath math="k" />, fixa-se um <strong>raio</strong> <InlineMath math="r" /> e consideram-se
          <em> todos</em> os pontos de treino dentro dessa distância do query point. A votação (ou ponderação) é
          feita sobre esse conjunto, que pode ter qualquer tamanho.
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Vantagem:</strong> em regiões densas, considera mais vizinhos (mais informação); em regiões esparsas, considera menos (evita "puxar" vizinhos irrelevantes de longe).</li>
          <li><strong>Desvantagem:</strong> se uma região não tiver <em>nenhum</em> ponto dentro do raio, não há previsão possível (ao contrário do KNN, que sempre encontra os <InlineMath math="k" /> mais próximos, sejam eles quão distantes forem).</li>
          <li><strong>Quando usar:</strong> dados com densidade muito heterogénea entre regiões do espaço de features.</li>
        </ul>

        <h3 style={S.h3}>Comparação Geral</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Método</th><th style={S.th}>Hiperparâmetro principal</th><th style={S.th}>Tipo de output</th><th style={S.th}>Pontos fortes</th></tr>
            </thead>
            <tbody>
              {[
                ['KNN', 'k (nº vizinhos fixo)', 'Classificação (voto) ou regressão (média)', 'Simples, sem suposições sobre a forma dos dados'],
                ['Radius Neighbors', 'r (raio fixo)', 'Classificação ou regressão', 'Adapta-se à densidade local'],
                ['Locally Weighted Regression', 'τ (largura de banda)', 'Regressão (modelo local ajustado)', 'Captura tendências locais suaves, não apenas médias'],
              ].map(([a, b, c, d]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{b}</td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          O KNN e os métodos instance-based representam uma filosofia diferente de "aprendizagem": em vez de
          comprimir o conhecimento num modelo paramétrico, mantêm o conhecimento explícito nos próprios dados
          e raciocinam por <strong>analogia local</strong> a cada nova previsão.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Lazy learning: o "modelo" são os dados de treino guardados; toda a computação ocorre na predição</li>
            <li>Euclidiana (p=2), Manhattan (p=1) e Minkowski (geral) são as métricas de distância base para vectores numéricos</li>
            <li>A votação por maioria do KNN pode mudar de resultado conforme k varia — k controla bias vs variância</li>
            <li>O distance-weighted KNN (w = 1/d²) dá mais peso aos vizinhos mais próximos</li>
            <li>K-d Trees aceleram a procura para O(log N), mas perdem eficácia em alta dimensão</li>
            <li>A curse of dimensionality faz com que as distâncias percam significado discriminativo em muitas dimensões</li>
            <li>Normalizar features é essencial — sem isso, features de maior escala dominam a distância</li>
            <li>Cosine similarity (vectores/texto) e Jaccard (conjuntos) complementam as distâncias geométricas</li>
            <li>LWR estende a ideia "lazy" à regressão, ajustando modelos lineares locais ponderados</li>
            <li>Radius Neighbors substitui k fixo por um raio fixo — adapta-se a densidades heterogéneas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
