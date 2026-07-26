import React from 'react';
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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: dataset 1D points on a line ===
const PontosDiagram = () => {
  const pts = [
    { id: 'A', x: 2, c: '#4a9eed' },
    { id: 'B', x: 3, c: '#4a9eed' },
    { id: 'C', x: 9, c: '#4a9eed' },
    { id: 'D', x: 10, c: '#4a9eed' },
    { id: 'E', x: 19, c: '#4a9eed' },
  ];
  const w = 480, h = 90, pad = 30;
  const xToPx = (x) => pad + (x / 20) * (w - 2 * pad);
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Dataset de Exemplo — 5 pontos em 1D</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - 30} x2={w - pad} y2={h - 30} stroke="var(--text-secondary)" strokeWidth="1.5" />
        {pts.map(({ id, x, c }) => (
          <g key={id}>
            <circle cx={xToPx(x)} cy={h - 30} r="7" fill={c} />
            <text x={xToPx(x)} y={h - 45} textAnchor="middle" fill={c} fontSize="13" fontWeight="700">{id}</text>
            <text x={xToPx(x)} y={h - 8} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{x}</text>
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cinco pontos numa única dimensão, com coordenadas <InlineMath math="A=2,\ B=3,\ C=9,\ D=10,\ E=19" />.
        As distâncias entre pares são simplesmente o valor absoluto da diferença,{' '}
        <InlineMath math="d(x,y)=|x-y|" />, o que torna a matriz de distâncias inicial trivial de calcular e
        permite seguir o algoritmo "à mão", passo a passo, sem perder o fio à meada em contas de distância
        euclidiana multidimensional.
      </p>
    </div>
  );
};

// === Diagram: growing dendrogram across merge steps ===
const DendrogramaCrescimentoDiagram = () => {
  const w = 480, h = 230;
  const leafX = { A: 40, B: 100, C: 220, D: 280, E: 400 };
  const leafY = 190;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Dendrograma Final com Alturas de Fusão Anotadas (Single Linkage)</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {/* leaves */}
        {Object.entries(leafX).map(([id, x]) => (
          <g key={id}>
            <line x1={x} y1={leafY} x2={x} y2={leafY + 12} stroke={color} strokeWidth="1.5" />
            <text x={x} y={leafY + 26} textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">{id}</text>
          </g>
        ))}
        {/* y-axis (height) ticks */}
        {[0, 1, 2, 7, 9].map((val, i) => {
          const y = leafY - (val / 9) * 150;
          return (
            <g key={i}>
              <line x1={20} y1={y} x2={w - 10} y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="2,3" />
              <text x={12} y={y + 3} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{val}</text>
            </g>
          );
        })}
        <text x="8" y="20" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">altura</text>

        {/* Step 1: merge A-B at height 1 */}
        <line x1={leafX.A} y1={leafY} x2={leafX.A} y2={leafY - (1 / 9) * 150} stroke={color} strokeWidth="1.5" />
        <line x1={leafX.B} y1={leafY} x2={leafX.B} y2={leafY - (1 / 9) * 150} stroke={color} strokeWidth="1.5" />
        <line x1={leafX.A} y1={leafY - (1 / 9) * 150} x2={leafX.B} y2={leafY - (1 / 9) * 150} stroke={color} strokeWidth="1.5" />
        <text x={(leafX.A + leafX.B) / 2} y={leafY - (1 / 9) * 150 - 6} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">1 (A,B)</text>

        {/* Step 2: merge C-D at height 1 */}
        <line x1={leafX.C} y1={leafY} x2={leafX.C} y2={leafY - (1 / 9) * 150} stroke={color} strokeWidth="1.5" />
        <line x1={leafX.D} y1={leafY} x2={leafX.D} y2={leafY - (1 / 9) * 150} stroke={color} strokeWidth="1.5" />
        <line x1={leafX.C} y1={leafY - (1 / 9) * 150} x2={leafX.D} y2={leafY - (1 / 9) * 150} stroke={color} strokeWidth="1.5" />
        <text x={(leafX.C + leafX.D) / 2} y={leafY - (1 / 9) * 150 - 6} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">1 (C,D)</text>

        {/* Step 3: merge {A,B} with {C,D} at height 6 */}
        {(() => {
          const midAB = (leafX.A + leafX.B) / 2;
          const midCD = (leafX.C + leafX.D) / 2;
          const yAB = leafY - (1 / 9) * 150;
          const yCD = leafY - (1 / 9) * 150;
          const yMerge = leafY - (6 / 9) * 150;
          return (
            <>
              <line x1={midAB} y1={yAB} x2={midAB} y2={yMerge} stroke={color} strokeWidth="1.5" />
              <line x1={midCD} y1={yCD} x2={midCD} y2={yMerge} stroke={color} strokeWidth="1.5" />
              <line x1={midAB} y1={yMerge} x2={midCD} y2={yMerge} stroke={color} strokeWidth="1.5" />
              <text x={(midAB + midCD) / 2} y={yMerge - 6} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">6 ({'{A,B},{C,D}'})</text>

              {/* Step 4: merge with E at height 9 */}
              <line x1={(midAB + midCD) / 2} y1={yMerge} x2={(midAB + midCD) / 2} y2={leafY - (9 / 9) * 150} stroke={color} strokeWidth="1.5" />
              <line x1={leafX.E} y1={leafY} x2={leafX.E} y2={leafY - (9 / 9) * 150} stroke={color} strokeWidth="1.5" />
              <line x1={(midAB + midCD) / 2} y1={leafY - (9 / 9) * 150} x2={leafX.E} y2={leafY - (9 / 9) * 150} stroke={color} strokeWidth="1.5" />
              <text x={((midAB + midCD) / 2 + leafX.E) / 2} y={leafY - (9 / 9) * 150 - 6} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">9 (+E)</text>
            </>
          );
        })()}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cada fusão corresponde a uma linha horizontal cuja altura é a distância de linkage no momento da fusão.
        Note como o salto entre a altura 6 (fusão dos dois pares) e a altura 9 (entrada de E) é o maior "degrau"
        do dendrograma — é exactamente este tipo de salto que a heurística do "maior gap" explora para sugerir
        o número de clusters.
      </p>
    </div>
  );
};

// === Diagram: cluster shapes by linkage method ===
const FormasClustersDiagram = () => {
  const methods = [
    {
      name: 'Single',
      c: '#4a9eed',
      desc: 'efeito "chaining"',
      // a chain of points connected in a snake shape
      points: [[10, 60], [25, 50], [40, 58], [55, 45], [70, 55], [85, 40], [100, 50], [115, 35], [40, 20], [55, 22]],
      groups: [[0, 1, 2, 3, 4, 5, 6, 7], [8, 9]],
    },
    {
      name: 'Complete',
      c: '#4a9eed',
      desc: 'clusters compactos, igual diâmetro',
      points: [[15, 20], [28, 15], [22, 32], [35, 25], [90, 20], [103, 15], [97, 32], [110, 25]],
      groups: [[0, 1, 2, 3], [4, 5, 6, 7]],
    },
    {
      name: 'Ward',
      c: '#4a9eed',
      desc: 'clusters esféricos, variância mínima',
      points: [[15, 18], [30, 15], [22, 30], [35, 28], [20, 40], [85, 18], [100, 15], [92, 30], [105, 28], [97, 40]],
      groups: [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]],
    },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Formas Típicas de Clusters Produzidas por Cada Linkage</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {methods.map(({ name, c, desc, points, groups }, mi) => (
          <div key={mi} style={{ flex: '1 1 140px', minWidth: 140 }}>
            <svg viewBox="0 0 125 70" style={{ maxWidth: '100%', height: 'auto' }}>
              {groups.map((g, gi) => {
                const xs = g.map(i => points[i][0]);
                const ys = g.map(i => points[i][1]);
                const minX = Math.min(...xs) - 8, maxX = Math.max(...xs) + 8;
                const minY = Math.min(...ys) - 8, maxY = Math.max(...ys) + 8;
                return (
                  <rect key={gi} x={minX} y={minY} width={maxX - minX} height={maxY - minY} rx="12"
                    fill={`${c}12`} stroke={c} strokeWidth="1.2" strokeDasharray={mi === 0 ? '3,2' : 'none'} />
                );
              })}
              {points.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill={c} />
              ))}
            </svg>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: c, margin: '0.3rem 0 0.1rem' }}>{name}</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        O <strong>single linkage</strong> liga clusters através do par de pontos mais próximo — basta uma "ponte"
        fina de pontos intermédios para que dois grupos visualmente distintos sejam fundidos numa única estrutura
        alongada ("chaining"). O <strong>complete linkage</strong> só funde clusters quando o seu par mais
        afastado é pequeno, produzindo grupos compactos mas por vezes de tamanho desigual. O <strong>Ward</strong>{' '}
        tende a produzir clusters aproximadamente esféricos e de tamanho semelhante, porque a cada passo escolhe a
        fusão que aumenta o menos possível a variância total — o que penaliza grupos muito alongados ou
        desequilibrados.
      </p>
    </div>
  );
};

// === Diagram: dendrogram cut at multiple heights ===
const CorteDendrogramaDiagram = () => {
  const w = 460, h = 200;
  const leafX = [30, 75, 150, 195, 270, 315, 390, 435];
  const leafY = 165;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Cortar o Dendrograma a Diferentes Alturas</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {/* leaves */}
        {leafX.map((x, i) => (
          <g key={i}>
            <line x1={x} y1={leafY} x2={x} y2={leafY + 10} stroke={color} strokeWidth="1.5" />
            <text x={x} y={leafY + 22} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{i + 1}</text>
          </g>
        ))}
        {/* low-level merges */}
        {[[0, 1, 30], [2, 3, 35], [4, 5, 25], [6, 7, 30]].map(([a, b, dy], i) => {
          const y = leafY - dy;
          return (
            <g key={i}>
              <line x1={leafX[a]} y1={leafY} x2={leafX[a]} y2={y} stroke={color} strokeWidth="1.5" />
              <line x1={leafX[b]} y1={leafY} x2={leafX[b]} y2={y} stroke={color} strokeWidth="1.5" />
              <line x1={leafX[a]} y1={y} x2={leafX[b]} y2={y} stroke={color} strokeWidth="1.5" />
            </g>
          );
        })}
        {/* mid merges */}
        {(() => {
          const m1x = (leafX[0] + leafX[1] + leafX[2] + leafX[3]) / 4;
          const m2x = (leafX[4] + leafX[5] + leafX[6] + leafX[7]) / 4;
          const m1ax = (leafX[0] + leafX[1]) / 2, m1bx = (leafX[2] + leafX[3]) / 2;
          const m2ax = (leafX[4] + leafX[5]) / 2, m2bx = (leafX[6] + leafX[7]) / 2;
          const yMid = leafY - 90;
          const yTop = leafY - 145;
          return (
            <>
              <line x1={m1ax} y1={leafY - 30} x2={m1ax} y2={yMid} stroke={color} strokeWidth="1.5" />
              <line x1={m1bx} y1={leafY - 35} x2={m1bx} y2={yMid} stroke={color} strokeWidth="1.5" />
              <line x1={m1ax} y1={yMid} x2={m1bx} y2={yMid} stroke={color} strokeWidth="1.5" />

              <line x1={m2ax} y1={leafY - 25} x2={m2ax} y2={yMid} stroke={color} strokeWidth="1.5" />
              <line x1={m2bx} y1={leafY - 30} x2={m2bx} y2={yMid} stroke={color} strokeWidth="1.5" />
              <line x1={m2ax} y1={yMid} x2={m2bx} y2={yMid} stroke={color} strokeWidth="1.5" />

              <line x1={(m1ax + m1bx) / 2} y1={yMid} x2={(m1ax + m1bx) / 2} y2={yTop} stroke={color} strokeWidth="1.5" />
              <line x1={(m2ax + m2bx) / 2} y1={yMid} x2={(m2ax + m2bx) / 2} y2={yTop} stroke={color} strokeWidth="1.5" />
              <line x1={(m1ax + m1bx) / 2} y1={yTop} x2={(m2ax + m2bx) / 2} y2={yTop} stroke={color} strokeWidth="1.5" />
            </>
          );
        })()}

        {/* cut lines */}
        <line x1={10} y1={leafY - 18} x2={w - 10} y2={leafY - 18} stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={w - 8} y={leafY - 21} textAnchor="end" fill="#4a9eed" fontSize="9" fontWeight="700">corte alto → k=4</text>

        <line x1={10} y1={leafY - 55} x2={w - 10} y2={leafY - 55} stroke="#0284c7" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={w - 8} y={leafY - 58} textAnchor="end" fill="#0284c7" fontSize="9" fontWeight="700">corte médio → k=2</text>

        <line x1={10} y1={leafY - 150} x2={w - 10} y2={leafY - 150} stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={w - 8} y={leafY - 153} textAnchor="end" fill="#4a9eed" fontSize="9" fontWeight="700">corte baixo → k=1</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Uma linha horizontal "corta" o dendrograma; o número de ramos verticais intersectados pela linha é o
        número de clusters resultante. Cortar perto da raiz (acima de todas as fusões) dá <InlineMath math="k=1" />{' '}
        — todos os pontos num único cluster. Cortar perto das folhas dá <InlineMath math="k=n" /> — cada ponto é o
        seu próprio cluster. Entre estes extremos, a escolha mais informativa é normalmente feita procurando o{' '}
        <strong>maior "gap" vertical</strong> entre alturas de fusão consecutivas — um salto grande sugere que os
        clusters formados antes desse salto são "naturalmente" mais coerentes do que qualquer fusão seguinte.
      </p>
    </div>
  );
};

// === Diagram: Classification vs Clustering ===
const ClassVsClusterDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Classification vs. Clustering — visualmente</p>
    <svg viewBox="0 0 560 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Left: classification - colored by known label, clean boundary */}
      <text x="140" y="18" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">CLASSIFICATION (labels conhecidas)</text>
      <rect x="20" y="30" width="240" height="150" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="140" y1="35" x2="140" y2="175" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      {[
        [50, 60, '#4a9eed'], [80, 110, '#4a9eed'], [60, 150, '#4a9eed'], [100, 80, '#4a9eed'], [45, 130, '#4a9eed'],
        [190, 70, '#4a9eed'], [220, 120, '#4a9eed'], [200, 160, '#4a9eed'], [165, 90, '#4a9eed'], [235, 50, '#4a9eed'],
      ].map(([cx, cy, c], i) => <circle key={i} cx={cx} cy={cy} r="5" fill={c} />)}
      <text x="80" y="195" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Classe A (label)</text>
      <text x="205" y="195" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">Classe B (label)</text>

      {/* Right: clustering - no labels, groups emerge from proximity */}
      <text x="420" y="18" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">CLUSTERING (sem labels)</text>
      <rect x="300" y="30" width="240" height="150" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {[
        [340, 70], [365, 95], [330, 110], [355, 60], [380, 85],
        [470, 60], [500, 90], [480, 130], [520, 70], [450, 100],
        [400, 150], [430, 165], [370, 160], [410, 130],
      ].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="5" fill="var(--text-secondary)" />)}
      <ellipse cx="356" cy="84" rx="42" ry="38" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
      <ellipse cx="485" cy="90" rx="48" ry="42" fill="none" stroke="rgba(74,158,237,0.9)" strokeWidth="1.5" strokeDasharray="4,3" />
      <ellipse cx="403" cy="151" rx="46" ry="28" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="420" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">grupos descobertos por proximidade — sem rótulos prévios</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Em classificação, cada ponto já tem uma cor (label) <em>antes</em> de o algoritmo correr — o objetivo é
      aprender a fronteira que separa as cores. Em clustering, todos os pontos começam cinzentos — o algoritmo
      tem de descobrir, apenas a partir da posição relativa dos pontos, que agrupamentos fazem sentido. Não há
      "resposta certa" pré-definida — apenas estrutura geométrica nos dados.
    </p>
  </div>
);

// === Diagram: Euclidean vs Manhattan ===
const DistanceDiagram = () => {
  const A = { x: 60, y: 160, label: 'A (2,1)' };
  const B = { x: 260, y: 40, label: 'B (8,6)' };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Distância Euclidiana vs. Manhattan entre dois pontos</p>
      <svg viewBox="0 0 360 200" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* grid */}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={'v' + i} x1={40 + i * 40} y1="10" x2={40 + i * 40} y2="180" stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.4" />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={'h' + i} x1="40" y1={10 + i * 40} x2="320" y2={10 + i * 40} stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.4" />
        ))}
        {/* Manhattan path (orange, stepped) */}
        <path d={`M${A.x} ${A.y} L${B.x} ${A.y} L${B.x} ${B.y}`} fill="none" stroke="#0284c7" strokeWidth="3" strokeDasharray="6,4" />
        {/* Euclidean path (purple, straight) */}
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={color} strokeWidth="3" />
        {/* points */}
        <circle cx={A.x} cy={A.y} r="6" fill="#4a9eed" />
        <circle cx={B.x} cy={B.y} r="6" fill="rgba(74,158,237,0.9)" />
        <text x={A.x - 10} y={A.y + 20} fill="#4a9eed" fontSize="11" fontWeight="700" textAnchor="middle">{A.label}</text>
        <text x={B.x + 20} y={B.y - 10} fill="rgba(74,158,237,0.9)" fontSize="11" fontWeight="700" textAnchor="middle">{B.label}</text>

        <text x={(A.x + B.x) / 2 + 25} y={(A.y + B.y) / 2 - 5} fill={color} fontSize="10" fontWeight="700">Euclidiana</text>
        <text x={(A.x + B.x) / 2 - 10} y={A.y + 18} fill="#0284c7" fontSize="10" fontWeight="700">Manhattan</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        A distância <strong>euclidiana</strong> (linha contínua) é o caminho mais curto "em linha reta" entre os
        dois pontos — a hipotenusa do triângulo. A distância <strong>Manhattan</strong> (linha tracejada) soma
        os deslocamentos ao longo de cada eixo separadamente — como percorrer um quarteirão de uma cidade
        organizada em grelha, sem atravessar edifícios na diagonal.
      </p>
    </div>
  );
};

// === Diagram: clustering family taxonomy ===
const ClusteringTaxonomyDiagram = () => {
  const families = [
    { label: 'Partitional', sub: 'k-Means,\nk-Medoids', c: '#4a9eed', x: 20 },
    { label: 'Hierarchical', sub: 'Agglomerative,\nDivisive', c: '#4a9eed', x: 160 },
    { label: 'Density-based', sub: 'DBSCAN,\nHDBSCAN', c: '#4a9eed', x: 300 },
    { label: 'Model-based', sub: 'GMM\n(Gaussian Mixtures)', c: '#4a9eed', x: 440 },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Taxonomia das Famílias de Algoritmos de Clustering</p>
      <svg viewBox="0 0 600 180" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr-dm8-tax" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        <rect x="170" y="10" width="260" height="36" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
        <text x="300" y="33" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Cluster Analysis</text>
        {families.map(({ label, sub, c, x }, i) => (
          <g key={i}>
            <path d={`M300 46 L${x + 70} 75`} stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-dm8-tax)" opacity="0.6" />
            <rect x={x} y="80" width="140" height="65" rx="8" fill={`${c}15`} stroke={c} strokeWidth="1.5" />
            <text x={x + 70} y="102" textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{label}</text>
            {sub.split('\n').map((line, li) => (
              <text key={li} x={x + 70} y={120 + li * 13} textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">{line}</text>
            ))}
          </g>
        ))}
        <text x="300" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">
          cada família será o foco de um módulo dedicado (04 a 06)
        </text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Tal como na aprendizagem supervisionada, não existe um "melhor" algoritmo de clustering — cada família
        assume uma forma diferente para os clusters e é adequada a cenários distintos. Este mapa serve de
        bússola para os próximos módulos.
      </p>
    </div>
  );
};

export default function DM8() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Hierarchical Clustering</h1>

      {/* === SECTION 1: Clustering vs Classification === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Clustering vs. Classification</h2>
        <p style={S.p}>
          A diferença fundamental entre clustering e classificação não está no algoritmo em si, mas na
          <strong> natureza do problema</strong>: em classificação, sabemos de antemão quais são as categorias
          (as labels existem nos dados de treino) e o objetivo é aprender uma função que mapeia novos exemplos
          para essas categorias. Em clustering, <strong>não existem categorias pré-definidas</strong> — o
          objetivo é descobrir se existe estrutura de grupo nos dados, e que forma essa estrutura tem.
        </p>
        <ClassVsClusterDiagram />
        <table style={S.table}>
          <thead><tr><th style={S.th}></th><th style={S.th}>Classification</th><th style={S.th}>Clustering</th></tr></thead>
          <tbody>
            {[
              ['Tipo', 'Supervisionado', 'Não supervisionado'],
              ['Dados de treino', 'Instâncias com labels conhecidas', 'Sem labels — grupos emergem dos dados'],
              ['Objetivo', 'Aprender a prever a classe de novos exemplos', 'Descobrir estrutura natural nos dados'],
              ['Nº de grupos', 'Conhecido a priori (definido pelas labels)', 'Frequentemente desconhecido — tem de ser estimado ou escolhido'],
              ['Resultado', 'Modelo treinado + previsões para novos exemplos', 'Atribuição de cada ponto a um cluster (e, em alguns algoritmos, um modelo dos clusters)'],
              ['Avaliação', 'Accuracy, F1, AUC (vs. labels verdadeiras)', 'Silhouette, Davies-Bouldin, interpretação de negócio'],
              ['Exemplo', 'Classificar emails como spam/não-spam', 'Agrupar clientes por comportamento de compra'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color: 'var(--text-secondary)' }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color }}>{c}</td></tr>)}
          </tbody>
        </table>
        <p style={S.p}>
          Esta diferença tem uma consequência prática importante: em classificação podemos sempre medir o
          desempenho do modelo comparando previsões com a "verdade" (as labels de teste). Em clustering, essa
          "verdade" geralmente não existe — não há uma forma objetiva de dizer que um agrupamento de clientes
          em "3 segmentos" está mais "correto" do que em "5 segmentos". A avaliação passa a depender de
          <strong> propriedades geométricas internas</strong> (coesão, separação) e de
          <strong> interpretabilidade de negócio</strong> (os clusters fazem sentido para quem vai agir sobre
          eles?).
        </p>
        <div style={S.highlight}>
          <strong>Casos de uso típicos de clustering:</strong> segmentação de clientes para marketing,
          deteção de anomalias (pontos que não pertencem a nenhum cluster denso), compressão/sumarização de
          dados (substituir milhares de pontos por alguns centróides representativos), pré-processamento para
          outras tarefas (criar uma feature categórica "cluster" para usar num modelo supervisionado
          posterior), e exploração de dados quando ainda não sabemos que grupos existem.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Taxonomia de Algoritmos === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Taxonomia de Algoritmos de Clustering</h2>
        <p style={S.p}>
          Antes de mergulhar no agrupamento hierárquico, vale a pena mapear as grandes famílias de algoritmos
          de clustering. Cada família faz uma assunção diferente sobre <strong>a forma</strong> que os
          clusters têm, e isso determina em que tipos de dados cada uma se destaca — ou falha.
        </p>
        <ClusteringTaxonomyDiagram />
        <table style={S.table}>
          <thead><tr><th style={S.th}>Família</th><th style={S.th}>Ideia central</th><th style={S.th}>Pontos fortes</th><th style={S.th}>Limitações</th></tr></thead>
          <tbody>
            {[
              ['Partitional (k-Means)', 'Divide os dados em k grupos, cada um representado por um centróide; minimiza a distância dos pontos aos centróides', 'Rápido, escalável, simples de interpretar', 'Requer escolher k à priori; assume clusters esféricos e de tamanho semelhante; sensível a outliers'],
              ['Hierarchical (Agglomerative/Divisive)', 'Constrói uma hierarquia de clusters (dendrograma) — agglomerative funde os pares mais próximos sucessivamente; divisive parte do todo e divide', 'Não exige escolher k antecipadamente; o dendrograma revela estrutura a múltiplas escalas', 'Custo computacional alto (O(n²) ou pior); decisões de fusão são irreversíveis (greedy)'],
              ['Density-based (DBSCAN/HDBSCAN)', 'Clusters são regiões de alta densidade de pontos separadas por regiões de baixa densidade; pontos isolados são "ruído"', 'Encontra clusters de forma arbitrária; identifica outliers naturalmente; não exige k', 'Sensível a parâmetros de densidade; dificuldade com clusters de densidades muito diferentes'],
              ['Model-based (GMM)', 'Assume que os dados são gerados por uma mistura de distribuições probabilísticas (ex.: gaussianas); estima os parâmetros dessas distribuições', 'Atribuição "soft" (probabilidade de pertença); clusters podem ter formas elípticas/orientadas', 'Assume uma forma distribucional; sensível à inicialização; mais caro computacionalmente'],
            ].map(([f, i, s, l]) => (
              <tr key={f}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{f}</td>
                <td style={S.td}>{i}</td>
                <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{s}</td>
                <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Esta tabela não é exaustiva — existem dezenas de variantes e híbridos — mas cobre as quatro famílias
          "canónicas" que estruturam a maioria dos cursos e ferramentas de clustering (incluindo scikit-learn).
          O essencial a reter é que <strong>a escolha do algoritmo é uma escolha sobre a forma
          assumida para os clusters</strong> — exatamente da mesma forma que, em aprendizagem supervisionada,
          a escolha do algoritmo é uma escolha de viés indutivo.
        </p>
        <div style={S.note}>
          Este módulo cobre <strong>Hierarchical Clustering</strong> em profundidade (incluindo como ler um
          dendrograma e escolher o número de clusters a partir dele); o Módulo 05 cobre k-Means e métricas de
          avaliação interna (Silhouette, Davies-Bouldin); o Módulo 06 cobre Density-based e Model-based
          clustering (DBSCAN, HDBSCAN, GMM).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Pipeline geral === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Processo: Da Matriz de Dados ao Dendrograma</h2>
        <p style={S.p}>
          O agrupamento hierárquico aglomerativo ("bottom-up") parte da situação mais granular possível — cada
          observação é o seu próprio cluster — e vai sucessivamente fundindo os dois clusters mais semelhantes,
          registando a que "altura" (distância) cada fusão ocorreu. Ao fim de <InlineMath math="n-1" /> fusões,
          resta um único cluster contendo todas as observações, e o histórico completo de fusões forma o
          dendrograma.
        </p>
        <div style={S.diagram}>
          {[
            ['1', 'Matriz de dados', 'n observações × p features'],
            ['2', 'Matriz de distâncias', 'D[i,j] = dist(xᵢ, xⱼ) — distância entre cada par, matriz n×n simétrica'],
            ['3', 'Algoritmo aglomerativo', 'Começa com n clusters (cada obs. é um cluster)'],
            ['4', 'Fundir os 2 clusters mais próximos', 'Usar regra de linkage para distância inter-cluster'],
            ['5', 'Atualizar a matriz de distâncias', 'Recalcular as distâncias do novo cluster aos restantes'],
            ['6', 'Repetir até 1 cluster', 'Registar a distância (altura) de fusão em cada passo'],
            ['7', 'Dendrograma', 'Visualização hierárquica; cortar para obter k clusters'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{d}</span></div>
            </div>
          ))}
        </div>
        <p style={S.p}>
          O passo crítico — e o que distingue os diferentes algoritmos de agrupamento hierárquico — é o passo
          5: como recalcular a distância entre o novo cluster (fusão de dois anteriores) e todos os clusters
          restantes. É exactamente essa regra que chamamos de <strong>método de linkage</strong>, e que vamos
          detalhar formalmente na próxima secção.
        </p>
        <div style={S.note}>
          Existe também a variante <strong>divisiva</strong> ("top-down"): começa com todas as observações num
          único cluster e vai dividindo recursivamente. É computacionalmente muito mais cara
          (<InlineMath math="2^{n-1}" /> formas possíveis de dividir um cluster) e por isso raramente usada na
          prática — o foco desta cadeira, e da literatura em geral, é o agrupamento aglomerativo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Distâncias === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. A Matriz de Distâncias</h2>
        <p style={S.p}>
          Tudo começa por escolher uma <strong>métrica de distância</strong> entre pares de observações. A
          escolha desta métrica é uma decisão de modelação tão importante quanto a escolha do linkage — métricas
          diferentes podem produzir dendrogramas radicalmente diferentes para os mesmos dados.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Distância</th><th style={S.th}>Fórmula</th><th style={S.th}>Uso típico</th></tr></thead>
          <tbody>
            {[
              ['Euclidiana', '\\sqrt{\\sum (x_i - y_i)^2}', 'Dados contínuos, mesma escala'],
              ['Manhattan', '\\sum |x_i - y_i|', 'Dados esparsos; mais robusto a outliers'],
              ['Coseno', '1 - \\dfrac{x \\cdot y}{|x||y|}', 'Texto, dados de alta dimensão'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}><InlineMath math={b} /></td><td style={S.td}>{c}</td></tr>)}
            <tr><td style={{ ...S.td, fontWeight: 700, color }}>Gower</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>Mistura de distâncias</td><td style={S.td}>Dados mistos (numéricos + categóricos)</td></tr>
          </tbody>
        </table>
        <DistanceDiagram />
        <div style={S.note}>
          <strong>Porque importa a magnitude vs. direção (Cosseno)?</strong> Imagine dois clientes: o cliente A
          comprou (2 unidades de roupa, 1 de eletrónica) e o cliente B comprou (20 unidades de roupa, 10 de
          eletrónica). Em termos absolutos (Euclidiana), estão muito distantes — B compra 10x mais. Mas em
          termos de <em>perfil de compra</em> (proporção entre categorias), são idênticos — ambos compram
          duas vezes mais roupa do que eletrónica. A similaridade de cosseno capta esta segunda noção,
          ignorando a escala.
        </div>

        <h3 style={S.h3}>Distância de Jaccard (dados binários/categóricos)</h3>
        <p style={S.p}>
          As métricas anteriores assumem dados numéricos contínuos. Para dados <strong>binários</strong>
          (presença/ausência de um atributo — ex.: "comprou categoria X? sim/não") ou conjuntos, a
          <strong> distância (ou índice) de Jaccard</strong> compara a proporção de atributos partilhados
          entre dois conjuntos.
        </p>
        <div style={S.math}>
          <BlockMath math="J(A, B) = \frac{|A \cap B|}{|A \cup B|} \qquad d_{jaccard}(A,B) = 1 - J(A,B)" />
        </div>
        <p style={S.p}>
          <strong>Exemplo:</strong> dois clientes descritos pelas categorias de produtos que já compraram —
          Cliente A: {'{Roupa, Eletrónica, Livros}'}, Cliente B: {'{Roupa, Eletrónica, Desporto, Casa}'}. A
          intersecção é {'{Roupa, Eletrónica}'} (2 elementos), a união é
          {' {Roupa, Eletrónica, Livros, Desporto, Casa}'} (5 elementos). Logo
          <InlineMath math="J(A,B) = 2/5 = 0.4" /> e <InlineMath math="d_{jaccard}(A,B) = 0.6" /> — moderamente
          diferentes.
        </p>

        <h3 style={S.h3}>Tabela-resumo: qual métrica usar?</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Métrica</th><th style={S.th}>Tipo de dados</th><th style={S.th}>Sensível a escala?</th><th style={S.th}>Quando usar</th></tr></thead>
          <tbody>
            {[
              ['Euclidiana', 'Numérico contínuo', 'Sim — exige normalização', 'Default para k-Means; quando a magnitude importa'],
              ['Manhattan', 'Numérico contínuo', 'Sim — exige normalização', 'Dados com muitos outliers; alta dimensionalidade'],
              ['Cosseno', 'Numérico (vetores)', 'Não — invariante a escala', 'Texto, perfis de comportamento, dados esparsos'],
              ['Jaccard', 'Binário / categórico / conjuntos', 'N/A', 'Presença/ausência de atributos, cestas de compra'],
            ].map(([m, t, s, u]) => (
              <tr key={m}><td style={{ ...S.td, fontWeight: 700, color }}>{m}</td><td style={S.td}>{t}</td><td style={S.td}>{s}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{u}</td></tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Dado um conjunto de <InlineMath math="n" /> observações, a <strong>matriz de distâncias</strong>{' '}
          <InlineMath math="D" /> é uma matriz simétrica <InlineMath math="n \times n" /> onde{' '}
          <InlineMath math="D_{ij} = d(x_i, x_j)" />. A diagonal é sempre zero (distância de um ponto a si
          próprio), e como <InlineMath math="D_{ij} = D_{ji}" />, basta calcular o triângulo superior — o que
          dá <InlineMath math="\binom{n}{2} = \frac{n(n-1)}{2}" /> distâncias a calcular inicialmente.
        </p>
        <div style={S.note}>
          <strong>Normalize os dados antes de calcular distâncias!</strong> Features com escalas muito diferentes
          (ex.: "idade" em anos vs. "salário" em euros) dominam a distância euclidiana — uma diferença de
          1000€ no salário pesa muito mais do que uma diferença de 10 anos na idade, mesmo que ambas sejam,
          relativamente, igualmente significativas. A normalização (ex.: z-score ou min-max) coloca todas as
          features na mesma escala antes do cálculo de <InlineMath math="D" />.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Linkage formal === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Métodos de Linkage</h2>
        <p style={S.p}>
          Quando dois clusters (que podem ser singletons ou já o resultado de fusões anteriores) precisam de ser
          comparados, a "distância entre clusters" não é única — depende de <strong>qual estatística</strong> dos
          pares de distâncias entre os seus elementos escolhemos usar. Esta escolha é o <strong>método de
          linkage</strong>, e tem um impacto profundo na forma dos clusters resultantes.
        </p>

        <h3 style={S.h3}>Single Linkage (ligação mínima)</h3>
        <p style={S.p}>
          A distância entre dois clusters <InlineMath math="A" /> e <InlineMath math="B" /> é a distância entre o
          <strong> par de pontos mais próximo</strong>, um de cada cluster:
        </p>
        <div style={S.math}>
          <BlockMath math="d_{\text{single}}(A,B) = \min_{a \in A,\ b \in B} d(a,b)" />
        </div>
        <p style={S.p}>
          Intuitivamente, dois clusters estão "próximos" se houver <em>pelo menos um</em> par de pontos muito
          próximo entre eles — mesmo que a maioria dos restantes pontos esteja longe. Isto produz o já mencionado
          efeito de <strong>chaining</strong>: uma sequência de pontos intermédios pode ligar dois grupos
          visualmente bem separados num único cluster alongado.
        </p>

        <h3 style={S.h3}>Complete Linkage (ligação máxima)</h3>
        <p style={S.p}>
          A distância entre clusters é a distância entre o <strong>par de pontos mais afastado</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="d_{\text{complete}}(A,B) = \max_{a \in A,\ b \in B} d(a,b)" />
        </div>
        <p style={S.p}>
          Aqui, dois clusters só são considerados "próximos" se <em>todos</em> os seus pontos estiverem
          razoavelmente perto — basta um par de pontos muito afastado para "puxar" a distância para cima. Isto
          tende a produzir clusters compactos e de diâmetro semelhante, mas é sensível a outliers (um único ponto
          afastado pode impedir uma fusão que de outra forma faria sentido).
        </p>

        <h3 style={S.h3}>Average Linkage (ligação média)</h3>
        <p style={S.p}>
          A distância entre clusters é a <strong>média de todas as distâncias par-a-par</strong> entre elementos
          dos dois clusters:
        </p>
        <div style={S.math}>
          <BlockMath math="d_{\text{average}}(A,B) = \frac{1}{|A|\cdot|B|} \sum_{a \in A} \sum_{b \in B} d(a,b)" />
        </div>
        <p style={S.p}>
          É um compromisso entre single e complete linkage — usa informação de <em>todos</em> os pares, em vez de
          apenas o mínimo ou o máximo, o que o torna mais robusto a outliers individuais do que ambos os métodos
          anteriores, sem ser tão rígido como o complete linkage.
        </p>

        <h3 style={S.h3}>Ward Linkage (mínima variância)</h3>
        <p style={S.p}>
          O método de Ward não compara directamente distâncias entre pontos — em vez disso, escolhe a cada passo
          a fusão que produz o <strong>menor aumento na soma dos quadrados dentro dos clusters</strong> (SSE,{' '}
          <em>sum of squared errors</em>). Formalmente, se <InlineMath math="\text{SSE}(C)" /> for a soma das
          distâncias quadráticas de cada ponto de <InlineMath math="C" /> ao centróide de <InlineMath math="C" />:
        </p>
        <div style={S.math}>
          <BlockMath math="d_{\text{Ward}}(A,B) = \text{SSE}(A \cup B) - \text{SSE}(A) - \text{SSE}(B)" />
        </div>
        <p style={S.p}>
          Esta quantidade tem uma fórmula equivalente, mais conveniente de calcular, em função apenas das
          cardinalidades e da distância entre centróides:
        </p>
        <div style={S.math}>
          <BlockMath math="d_{\text{Ward}}(A,B) = \frac{|A|\,|B|}{|A|+|B|} \, \lVert \bar{x}_A - \bar{x}_B \rVert^2" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\bar{x}_A" /> e <InlineMath math="\bar{x}_B" /> são os centróides (médias) dos
          dois clusters. O Ward linkage tende a produzir clusters esféricos e de tamanho equilibrado, e é o
          método mais usado na prática quando o objetivo é obter uma partição semelhante à que o k-Means
          produziria — mas obtida hierarquicamente.
        </p>

        <FormasClustersDiagram />

        <table style={S.table}>
          <thead><tr><th style={S.th}>Método</th><th style={S.th}>Distância entre clusters A e B</th><th style={S.th}>Característica</th></tr></thead>
          <tbody>
            {[
              ['Single Linkage', 'min d(a,b) para a∈A, b∈B', 'Sensível a outliers; tende a chains longas'],
              ['Complete Linkage', 'max d(a,b) para a∈A, b∈B', 'Clusters compactos; sensível a outliers'],
              ['Average Linkage', 'média de todos d(a,b)', 'Compromisso; mais robusto'],
              ['Ward', 'Aumento de SSE ao fundir A e B', 'Minimiza variância intra-cluster; preferido em geral'],
              ['Centroid', 'dist(centroide A, centroide B)', 'Pode ter inversões no dendrograma'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>
        <div style={S.highlight}><strong>Ward linkage</strong> é o método mais usado na prática — minimiza a variância total intra-cluster a cada fusão, produzindo clusters mais equilibrados e compactos.</div>
      </div>


      {/* === SECTION 6: Cortar o dendrograma === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Cortar o Dendrograma — Escolher o Número de Clusters</h2>
        <p style={S.p}>
          Uma das grandes vantagens do agrupamento hierárquico é que <strong>não precisamos de decidir{' '}
          <InlineMath math="k" /> antes de correr o algoritmo</strong> — o dendrograma representa todas as
          partições possíveis simultaneamente, e a escolha de <InlineMath math="k" /> reduz-se a escolher onde
          "cortar" a árvore horizontalmente.
        </p>
        <CorteDendrogramaDiagram />
        <p style={S.p}>
          As heurísticas mais comuns para escolher a altura do corte são:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Heurística</th><th style={S.th}>Ideia</th></tr></thead>
          <tbody>
            {[
              ['Inspeção visual', 'Procurar visualmente o ponto onde os ramos verticais ficam "longos" antes da fusão seguinte — sugere clusters bem separados'],
              ['Maior gap (salto)', 'Identificar o maior aumento de altura entre fusões consecutivas; cortar imediatamente abaixo desse salto'],
              ['Número de clusters desejado', 'Se o domínio impõe k (ex.: "queremos 3 segmentos de clientes para 3 campanhas"), cortar diretamente a essa altura'],
              ['Critério estatístico', 'Combinar com métricas como o coeficiente de silhueta, calculadas para cada k candidato, e escolher o k que maximiza a métrica'],
            ].map(([h, d]) => (
              <tr key={h}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{h}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A heurística do "maior gap" não é infalível: em dados sem estrutura de cluster clara (ex.: amostrados
          uniformemente de uma única distribuição), o dendrograma pode não apresentar nenhum salto óbvio, e
          qualquer corte será, até certo ponto, arbitrário. Nestes casos, é importante combinar a inspeção do
          dendrograma com conhecimento do domínio e métricas de validação externas.
        </div>
      </div>
    </div>
  );
}
