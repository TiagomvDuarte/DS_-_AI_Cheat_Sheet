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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: dataset 1D points on a line ===
const PontosDiagram = () => {
  const pts = [
    { id: 'A', x: 2, c: '#f97316' },
    { id: 'B', x: 3, c: '#f97316' },
    { id: 'C', x: 9, c: '#f97316' },
    { id: 'D', x: 10, c: '#f97316' },
    { id: 'E', x: 19, c: '#f97316' },
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
      c: '#f97316',
      desc: 'efeito "chaining"',
      // a chain of points connected in a snake shape
      points: [[10, 60], [25, 50], [40, 58], [55, 45], [70, 55], [85, 40], [100, 50], [115, 35], [40, 20], [55, 22]],
      groups: [[0, 1, 2, 3, 4, 5, 6, 7], [8, 9]],
    },
    {
      name: 'Complete',
      c: '#f97316',
      desc: 'clusters compactos, igual diâmetro',
      points: [[15, 20], [28, 15], [22, 32], [35, 25], [90, 20], [103, 15], [97, 32], [110, 25]],
      groups: [[0, 1, 2, 3], [4, 5, 6, 7]],
    },
    {
      name: 'Ward',
      c: '#f97316',
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
        <line x1={10} y1={leafY - 18} x2={w - 10} y2={leafY - 18} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={w - 8} y={leafY - 21} textAnchor="end" fill="#f97316" fontSize="9" fontWeight="700">corte alto → k=4</text>

        <line x1={10} y1={leafY - 55} x2={w - 10} y2={leafY - 55} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={w - 8} y={leafY - 58} textAnchor="end" fill="#f59e0b" fontSize="9" fontWeight="700">corte médio → k=2</text>

        <line x1={10} y1={leafY - 150} x2={w - 10} y2={leafY - 150} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={w - 8} y={leafY - 153} textAnchor="end" fill="#f97316" fontSize="9" fontWeight="700">corte baixo → k=1</text>
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

export default function DM8() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Hierarchical Clustering</h1>
      <p style={S.lead}>
        O agrupamento hierárquico constrói uma <strong>hierarquia completa de partições</strong> dos dados, sem
        necessidade de especificar antecipadamente o número de clusters <InlineMath math="k" />. O resultado —
        um <strong>dendrograma</strong> — codifica simultaneamente todas as soluções possíveis, de
        <InlineMath math="k=n" /> (cada observação isolada) a <InlineMath math="k=1" /> (todas as observações
        num único cluster), permitindo "cortar" a árvore à altura que melhor se adequa ao problema. Neste módulo
        vamos aprofundar a construção da matriz de distâncias, formalizar matematicamente cada regra de linkage,
        seguir um exemplo numérico completo passo a passo, e discutir como avaliar e escolher o corte do
        dendrograma.
      </p>

      {/* === SECTION 1: Pipeline geral === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Processo: Da Matriz de Dados ao Dendrograma</h2>
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
        <h2 style={S.h2}>2. A Matriz de Distâncias</h2>
        <p style={S.p}>
          Tudo começa por escolher uma <strong>métrica de distância</strong> entre pares de observações. A
          escolha desta métrica é uma decisão de modelação tão importante quanto a escolha do linkage — métricas
          diferentes podem produzir dendrogramas radicalmente diferentes para os mesmos dados.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Distância</th><th style={S.th}>Fórmula</th><th style={S.th}>Uso típico</th></tr></thead>
          <tbody>
            {[
              ['Euclidiana', '√Σ(xᵢ-yᵢ)²', 'Dados contínuos, mesma escala'],
              ['Manhattan', 'Σ|xᵢ-yᵢ|', 'Dados esparsos; mais robusto a outliers'],
              ['Coseno', '1 - (x·y)/(|x||y|)', 'Texto, dados de alta dimensão'],
              ['Gower', 'Mistura de distâncias', 'Dados mistos (numéricos + categóricos)'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{b}</td><td style={S.td}>{c}</td></tr>)}
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
        <h2 style={S.h2}>3. Métodos de Linkage — Formalização</h2>
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

        <h3 style={S.h3}>A Fórmula de Atualização de Lance-Williams</h3>
        <p style={S.p}>
          Em vez de recalcular a matriz de distâncias do zero a cada fusão, existe uma <strong>fórmula
          recursiva única</strong> — devida a Lance e Williams (1967) — que expressa a nova distância de um
          cluster <InlineMath math="Q" /> ao cluster recém-formado <InlineMath math="A \cup B" /> em função das
          distâncias antigas <InlineMath math="d(Q,A)" />, <InlineMath math="d(Q,B)" /> e{' '}
          <InlineMath math="d(A,B)" />:
        </p>
        <div style={S.math}>
          <BlockMath math="d(Q, A \cup B) = \alpha_A\, d(Q,A) + \alpha_B\, d(Q,B) + \beta\, d(A,B) + \gamma\, |d(Q,A) - d(Q,B)|" />
        </div>
        <p style={S.p}>
          Cada método de linkage corresponde a uma escolha diferente das constantes{' '}
          <InlineMath math="\alpha_A, \alpha_B, \beta, \gamma" />:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Método</th><th style={S.th}><InlineMath math="\alpha_A" /></th><th style={S.th}><InlineMath math="\alpha_B" /></th><th style={S.th}><InlineMath math="\beta" /></th><th style={S.th}><InlineMath math="\gamma" /></th></tr></thead>
          <tbody>
            {[
              ['Single', '1/2', '1/2', '0', '-1/2'],
              ['Complete', '1/2', '1/2', '0', '1/2'],
              ['Average', '|A|/(|A|+|B|)', '|B|/(|A|+|B|)', '0', '0'],
              ['Ward', '(|Q|+|A|)/(|Q|+|A|+|B|)', '(|Q|+|B|)/(|Q|+|A|+|B|)', '-|Q|/(|Q|+|A|+|B|)', '0'],
            ].map(([m, a, b, be, g]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.78rem' }}>{a}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.78rem' }}>{b}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.78rem' }}>{be}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.78rem' }}>{g}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A vantagem prática da fórmula de Lance-Williams é computacional: permite atualizar a matriz de
          distâncias <InlineMath math="O(n)" /> por fusão (em vez de recalcular tudo a partir dos dados
          originais), e é a forma como praticamente todas as bibliotecas (ex.: <code>scipy.cluster.hierarchy</code>)
          implementam internamente os diferentes linkages.
        </div>

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

      <hr style={S.divider} />

      {/* === SECTION 4: Exemplo numérico completo === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Exemplo Numérico Completo — Single Linkage Passo a Passo</h2>
        <p style={S.p}>
          Vamos agora seguir o algoritmo aglomerativo até ao fim sobre um pequeno dataset, usando{' '}
          <strong>single linkage</strong> e distância euclidiana (= valor absoluto, em 1D). O objectivo é tornar
          tangível o que acontece "por dentro" a cada iteração: como é a matriz de distâncias inicial, qual o par
          mais próximo, como se actualiza a matriz após cada fusão, e como tudo isto se traduz no dendrograma.
        </p>
        <PontosDiagram />

        <h3 style={S.h3}>Passo 0 — Matriz de Distâncias Inicial</h3>
        <p style={S.p}>
          Com 5 pontos, temos <InlineMath math="\binom{5}{2}=10" /> distâncias a calcular. Como{' '}
          <InlineMath math="d(x,y)=|x-y|" />:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}></th><th style={S.th}>A (2)</th><th style={S.th}>B (3)</th><th style={S.th}>C (9)</th><th style={S.th}>D (10)</th><th style={S.th}>E (19)</th></tr></thead>
          <tbody>
            {[
              ['A', '0', '1', '7', '8', '17'],
              ['B', '1', '0', '6', '7', '16'],
              ['C', '7', '6', '0', '1', '10'],
              ['D', '8', '7', '1', '0', '9'],
              ['E', '17', '16', '10', '9', '0'],
            ].map(([row, ...vals]) => (
              <tr key={row}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{row}</td>
                {vals.map((v, i) => (
                  <td key={i} style={{ ...S.td, fontFamily: 'monospace', fontWeight: (v === '1') ? 700 : 400, background: (v === '1') ? `${color}12` : 'transparent' }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          As menores distâncias da matriz são <InlineMath math="d(A,B)=1" /> e <InlineMath math="d(C,D)=1" />{' '}
          (destacadas). Há um empate — em casos como este, a ordem é arbitrária (ou definida por uma regra de
          desempate, ex.: ordem dos índices); vamos fundir primeiro <InlineMath math="\{A,B\}" />.
        </p>

        <h3 style={S.h3}>Passo 1 — Fundir A e B (altura = 1)</h3>
        <p style={S.p}>
          Criamos o cluster <InlineMath math="\{A,B\}" />. Com single linkage, a distância de{' '}
          <InlineMath math="\{A,B\}" /> a qualquer outro ponto <InlineMath math="X" /> é{' '}
          <InlineMath math="\min(d(A,X), d(B,X))" />:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}></th><th style={S.th}>{'{A,B}'}</th><th style={S.th}>C (9)</th><th style={S.th}>D (10)</th><th style={S.th}>E (19)</th></tr></thead>
          <tbody>
            {[
              ['{A,B}', '0', '6', '7', '16'],
              ['C', '6', '0', '1', '10'],
              ['D', '7', '1', '0', '9'],
              ['E', '16', '10', '9', '0'],
            ].map(([row, ...vals]) => (
              <tr key={row}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{row}</td>
                {vals.map((v, i) => (
                  <td key={i} style={{ ...S.td, fontFamily: 'monospace', fontWeight: (v === '1') ? 700 : 400, background: (v === '1') ? `${color}12` : 'transparent' }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Por exemplo, <InlineMath math="d(\{A,B\}, C) = \min(d(A,C), d(B,C)) = \min(7,6) = 6" />. A menor
          distância agora é <InlineMath math="d(C,D)=1" />.
        </p>

        <h3 style={S.h3}>Passo 2 — Fundir C e D (altura = 1)</h3>
        <p style={S.p}>
          Criamos o cluster <InlineMath math="\{C,D\}" />. Recalculamos novamente, usando o mínimo:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}></th><th style={S.th}>{'{A,B}'}</th><th style={S.th}>{'{C,D}'}</th><th style={S.th}>E (19)</th></tr></thead>
          <tbody>
            {[
              ['{A,B}', '0', '6', '16'],
              ['{C,D}', '6', '0', '9'],
              ['E', '16', '9', '0'],
            ].map(([row, ...vals]) => (
              <tr key={row}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{row}</td>
                {vals.map((v, i) => (
                  <td key={i} style={{ ...S.td, fontFamily: 'monospace', fontWeight: (v === '6') ? 700 : 400, background: (v === '6') ? `${color}12` : 'transparent' }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Aqui, <InlineMath math="d(\{A,B\},\{C,D\}) = \min(d(A,C),d(A,D),d(B,C),d(B,D)) = \min(7,8,6,7) = 6" />.
          A menor distância na matriz é agora <InlineMath math="6" />, entre <InlineMath math="\{A,B\}" /> e{' '}
          <InlineMath math="\{C,D\}" />.
        </p>

        <h3 style={S.h3}>Passo 3 — Fundir {'{A,B}'} e {'{C,D}'} (altura = 6)</h3>
        <p style={S.p}>
          Forma-se o cluster <InlineMath math="\{A,B,C,D\}" />. Resta apenas comparar com{' '}
          <InlineMath math="E" />:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}></th><th style={S.th}>{'{A,B,C,D}'}</th><th style={S.th}>E (19)</th></tr></thead>
          <tbody>
            {[
              ['{A,B,C,D}', '0', '9'],
              ['E', '9', '0'],
            ].map(([row, ...vals]) => (
              <tr key={row}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{row}</td>
                {vals.map((v, i) => (
                  <td key={i} style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          <InlineMath math="d(\{A,B,C,D\}, E) = \min(d(A,E),d(B,E),d(C,E),d(D,E)) = \min(17,16,10,9) = 9" />.
        </p>

        <h3 style={S.h3}>Passo 4 — Fundir tudo (altura = 9)</h3>
        <p style={S.p}>
          Resta um único cluster <InlineMath math="\{A,B,C,D,E\}" />, formado à altura <InlineMath math="9" />.
          O algoritmo termina. O histórico completo de fusões é:
        </p>
        
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Altura 1: <InlineMath math="A" /> + <InlineMath math="B" /> → <InlineMath math="\{A,B\}" /></li>
            <li>Altura 1: <InlineMath math="C" /> + <InlineMath math="D" /> → <InlineMath math="\{C,D\}" /></li>
            <li>Altura 6: <InlineMath math="\{A,B\}" /> + <InlineMath math="\{C,D\}" /> → <InlineMath math="\{A,B,C,D\}" /></li>
            <li>Altura 9: <InlineMath math="\{A,B,C,D\}" /> + <InlineMath math="E" /> → <InlineMath math="\{A,B,C,D,E\}" /></li>
          </ul>
        
        <DendrogramaCrescimentoDiagram />
        <div style={S.note}>
          Note o salto de altura <InlineMath math="1 \to 6" /> e depois <InlineMath math="6 \to 9" />. O maior
          "gap" (entre as alturas 1 e 6, ou entre 6 e 9, dependendo de como medimos) sugere cortes naturais —
          voltamos a este ponto na secção 6.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Cophenetic === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Distância Cofenética e Validação</h2>
        <p style={S.p}>
          Como saber se um dendrograma é uma "boa" representação dos dados originais? Uma forma de quantificar
          isto é através da <strong>distância cofenética</strong>: para qualquer par de observações{' '}
          <InlineMath math="(i,j)" />, a distância cofenética <InlineMath math="d_c(i,j)" /> é a{' '}
          <strong>altura à qual i e j ficam, por fusão, no mesmo cluster</strong> pela primeira vez no
          dendrograma.
        </p>
        <p style={S.p}>
          No exemplo da secção anterior, a distância cofenética entre <InlineMath math="A" /> e{' '}
          <InlineMath math="C" /> é <InlineMath math="6" /> — porque é à altura 6 que{' '}
          <InlineMath math="\{A,B\}" /> e <InlineMath math="\{C,D\}" /> se fundem, juntando{' '}
          <InlineMath math="A" /> e <InlineMath math="C" /> no mesmo cluster pela primeira vez. Note que isto é
          diferente da distância original <InlineMath math="d(A,C)=7" /> — o dendrograma "comprime" ou
          "distorce" as distâncias originais.
        </p>
        <p style={S.p}>
          A <strong>correlação cofenética</strong> mede exactamente esta distorção: é o coeficiente de correlação
          de Pearson entre todas as distâncias originais <InlineMath math="d(i,j)" /> e as correspondentes
          distâncias cofenéticas <InlineMath math="d_c(i,j)" />, sobre todos os pares <InlineMath math="(i,j)" />:
        </p>
        <div style={S.math}>
          <BlockMath math="r_c = \frac{\sum_{i<j} (d(i,j) - \bar{d})(d_c(i,j) - \bar{d_c})}{\sqrt{\sum_{i<j}(d(i,j)-\bar{d})^2}\ \sqrt{\sum_{i<j}(d_c(i,j)-\bar{d_c})^2}}" />
        </div>
        <p style={S.p}>
          Um valor de <InlineMath math="r_c" /> próximo de <InlineMath math="1" /> indica que o dendrograma
          preserva bem a estrutura de distâncias originais — pares próximos no espaço original tendem a
          fundir-se a alturas baixas, e pares afastados só se fundem a alturas elevadas. Valores baixos sugerem
          que o dendrograma distorce significativamente as relações originais, e podem motivar a experimentação
          com outro método de linkage.
        </p>
        <div style={S.note}>
          Na prática, o <strong>single linkage</strong> tende a produzir correlações cofenéticas mais altas para
          dados com estrutura "em cadeia" ou alongada, enquanto o <strong>average linkage</strong> e o{' '}
          <strong>UPGMA</strong> são frequentemente reportados como os que, em média, maximizam{' '}
          <InlineMath math="r_c" /> em datasets diversos — mas isto não é uma regra universal (lembre-se do No
          Free Lunch Theorem). A correlação cofenética é uma ferramenta de diagnóstico, não um critério absoluto
          de "correção".
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Cortar o dendrograma === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Cortar o Dendrograma — Escolher o Número de Clusters</h2>
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
        <p style={S.p}>
          No exemplo numérico da secção 4, as alturas de fusão foram <InlineMath math="1, 1, 6, 9" />. O maior
          salto ocorre entre <InlineMath math="1" /> e <InlineMath math="6" /> (diferença de 5) — cortar
          imediatamente abaixo da altura 6 dá <InlineMath math="k=2" /> clusters:{' '}
          <InlineMath math="\{A,B,C,D\}" /> e <InlineMath math="\{E\}" />. Alternativamente, cortar entre 6 e 9
          (salto de 3) dá <InlineMath math="k=2" /> também, mas com agrupamento{' '}
          <InlineMath math="\{A,B\}, \{C,D\}, \{E\}" /> se cortarmos um pouco mais abaixo — ou seja, a escolha
          "correta" depende do objetivo e raramente é totalmente inequívoca.
        </p>
        <div style={S.note}>
          A heurística do "maior gap" não é infalível: em dados sem estrutura de cluster clara (ex.: amostrados
          uniformemente de uma única distribuição), o dendrograma pode não apresentar nenhum salto óbvio, e
          qualquer corte será, até certo ponto, arbitrário. Nestes casos, é importante combinar a inspeção do
          dendrograma com conhecimento do domínio e métricas de validação externas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Hierarchical vs k-Means === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Hierarchical Clustering vs. k-Means</h2>
        <p style={S.p}>
          O agrupamento hierárquico e o k-Means são as duas abordagens de clustering mais ensinadas e usadas na
          prática, mas partem de filosofias muito diferentes. Compreender as diferenças ajuda a escolher a
          abordagem certa — e prepara o terreno para o próximo módulo.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Hierarchical Clustering</th><th style={S.th}>k-Means</th></tr></thead>
          <tbody>
            {[
              ['Especificar k antecipadamente', 'Não — escolhido a posteriori, cortando o dendrograma', 'Sim — k é um hiperparâmetro obrigatório antes de correr'],
              ['Complexidade computacional', 'O(n²) ou O(n²log n) em tempo, O(n²) em memória (matriz de distâncias)', 'O(n·k·i) — linear em n (i = nº de iterações)'],
              ['Escalabilidade', 'Impraticável para n grande (tipicamente n > 10.000–50.000)', 'Escala bem para datasets grandes'],
              ['Determinismo', 'Determinístico — mesma matriz de distâncias produz sempre o mesmo dendrograma', 'Dependente da inicialização — resultados podem variar entre execuções'],
              ['Interpretabilidade da estrutura', 'Alta — o dendrograma mostra a estrutura hierárquica completa a todos os níveis', 'Baixa — apenas uma partição plana em k grupos, sem relações entre eles'],
              ['Reversibilidade das decisões', 'Fusões são irrevogáveis — uma fusão "errada" cedo propaga-se por toda a árvore', 'Pontos podem mudar de cluster em cada iteração — há "correção" ao longo do treino'],
              ['Forma dos clusters', 'Depende do linkage (ver secção 3) — pode ser muito flexível (single) ou esférico (Ward)', 'Implicitamente assume clusters esféricos/convexos (distância ao centróide)'],
            ].map(([a, h, k]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700 }}>{a}</td>
                <td style={S.td}>{h}</td>
                <td style={S.td}>{k}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Na prática, é comum usar o agrupamento hierárquico como ferramenta <strong>exploratória</strong> —
          sobretudo em datasets pequenos ou médios — precisamente porque o dendrograma ajuda a decidir
          visualmente quantos clusters fazem sentido, antes de aplicar um algoritmo mais escalável como o
          k-Means com esse <InlineMath math="k" /> já informado.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Desvantagens === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Limitações Práticas</h2>
        <p style={S.p}>
          Para encerrar a parte técnica, vale a pena consolidar as principais limitações que tornam o
          agrupamento hierárquico inadequado em certos cenários:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Complexidade O(n²):</strong> tanto em memória (armazenar a matriz de distâncias completa)
          como em tempo — torna-se impraticável para datasets com muitas dezenas de milhares de observações sem
          aproximações ou amostragem.</li>
          <li><strong>Irrevogabilidade:</strong> uma vez feita uma fusão, ela nunca é desfeita — não há mecanismo
          de "otimização global" como existe (parcialmente) no k-Means através de re-iterações.</li>
          <li><strong>Sensibilidade à escala e à métrica:</strong> a escolha de distância (euclidiana, Manhattan,
          etc.) e de linkage tem um impacto enorme no resultado, e não há uma "combinação certa" universal.</li>
          <li><strong>Inversões no dendrograma:</strong> alguns métodos (ex.: centroid linkage) podem produzir
          dendrogramas onde uma fusão posterior ocorre a uma altura <em>menor</em> que uma fusão anterior — uma
          inconsistência visual que dificulta a interpretação.</li>
        </ul>
        <div style={S.note}><strong>Desvantagens do Hierarchical:</strong> O(n²) em memória e tempo — impraticável para n grande (n &gt; 10.000). Decisões de fusão são irrevogáveis — não há otimização global como no k-means.</div>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>
        <p style={S.p}>
          O agrupamento hierárquico aglomerativo constrói, de forma determinística, uma árvore completa de
          partições dos dados — desde <InlineMath math="n" /> clusters singleton até um único cluster contendo
          tudo. Cada fusão é guiada por uma regra de <strong>linkage</strong>, que define como medir a "distância"
          entre dois clusters, e essa regra determina a forma e o comportamento dos clusters resultantes.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Algoritmo aglomerativo: começa com n clusters singleton, funde os dois mais próximos a cada passo, repete até 1 cluster</li>
            <li>Não requer k a priori — o dendrograma codifica todas as partições possíveis e k é escolhido a posteriori, cortando a árvore</li>
            <li>Single linkage (mínimo) → chaining; Complete (máximo) → clusters compactos; Average (média) → compromisso; Ward (mínima variância) → clusters esféricos e equilibrados</li>
            <li>A fórmula de Lance-Williams unifica todos os linkages numa única equação recursiva de atualização O(n) por fusão</li>
            <li>A distância cofenética mede a altura à qual dois pontos se fundem; a correlação cofenética avalia quão bem o dendrograma preserva as distâncias originais</li>
            <li>Cortar o dendrograma: heurística do "maior gap" entre alturas de fusão sucessivas, inspeção visual, ou critério imposto pelo domínio</li>
            <li>Vantagens sobre k-Means: determinístico, não precisa de k, interpretação hierárquica multi-nível</li>
            <li>Desvantagens: O(n²) em tempo/memória (impraticável para n grande), fusões irrevogáveis, sensível à métrica e ao linkage escolhidos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
