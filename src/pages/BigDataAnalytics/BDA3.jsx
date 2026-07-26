import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2.5rem',
  },
  tag: {
    display: 'inline-block',
    background: 'transparent',
    color: '#4a9eed',
    border: '1.5px solid #4a9eed',
    fontSize: '0.75rem',
    fontWeight: 700,
    padding: '0.25rem 0.75rem',
    borderRadius: 20,
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '2.1rem',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  lead: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: 1.7,
  },
  section: { marginBottom: '3.5rem' },
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#4a9eed',
    borderLeft: '3px solid #4a9eed',
    paddingLeft: '0.85rem',
    marginBottom: '1.2rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.8rem',
    marginTop: '1.6rem',
  },
  p: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 12,
    padding: '1.5rem',
    margin: '1.5rem 0',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  th: {
    background: 'var(--bg-secondary)',
    padding: '0.6rem 0.8rem',
    textAlign: 'left',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    borderBottom: '2px solid var(--card-border)',
  },
  td: {
    padding: '0.55rem 0.8rem',
    borderBottom: '1px solid var(--card-border)',
    color: 'var(--text-primary)',
  },
  highlight: {
    background: 'rgba(74,158,237,0.10)',
    border: '1px solid #4a9eed',
    borderRadius: 8,
    padding: '1rem 1.25rem',
    marginBottom: '1.2rem',
  },
  note: {
    background: 'rgba(74,158,237,0.06)',
    borderLeft: '3px solid #4a9eed',
    borderRadius: '0 8px 8px 0',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: '1rem 0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2.5rem 0',
  },
};

const GraphDiagram = () => (
  <div style={S.diagram}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '1rem',
        color: 'var(--text-primary)',
      }}
    >
      Representação de Grafo em GraphFrames
    </p>
    <svg viewBox="0 0 500 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker
          id="arr-g"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
        </marker>
      </defs>
      {[
        { x: 80, y: 90, id: 'Alice', role: 'Data Eng' },
        { x: 240, y: 40, id: 'Bob', role: 'DS' },
        { x: 240, y: 140, id: 'Carol', role: 'ML Eng' },
        { x: 400, y: 90, id: 'Dave', role: 'Eng Mgr' },
      ].map(({ x, y, id, role }) => (
        <g key={id}>
          <circle
            cx={x}
            cy={y}
            r={28}
            fill="rgba(2,132,199,0.12)"
            stroke="#0284c7"
            strokeWidth="2"
          />
          <text
            x={x}
            y={y - 4}
            textAnchor="middle"
            fill="#0284c7"
            fontSize="10"
            fontWeight="700"
          >
            {id}
          </text>
          <text
            x={x}
            y={y + 10}
            textAnchor="middle"
            fill="var(--text-secondary)"
            fontSize="8"
          >
            {role}
          </text>
        </g>
      ))}
      {[
        { x1: 108, y1: 80, x2: 213, y2: 50, label: 'follows' },
        { x1: 108, y1: 100, x2: 213, y2: 132, label: 'friends' },
        { x1: 240, y1: 67, x2: 240, y2: 113, label: 'collab' },
        { x1: 267, y1: 55, x2: 373, y2: 80, label: 'reports_to' },
        { x1: 267, y1: 128, x2: 373, y2: 100, label: 'manages' },
      ].map(({ x1, y1, x2, y2, label }, i) => (
        <g key={i}>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#0284c7"
            strokeWidth="1.5"
            markerEnd="url(#arr-g)"
            opacity="0.7"
          />
          <text
            x={(x1 + x2) / 2}
            y={(y1 + y2) / 2 - 4}
            textAnchor="middle"
            fill="var(--text-secondary)"
            fontSize="8"
          >
            {label}
          </text>
        </g>
      ))}
      <rect
        x="10"
        y="155"
        width="130"
        height="20"
        rx="4"
        fill="rgba(74,158,237,0.10)"
        stroke="#4a9eed"
        strokeWidth="1"
      />
      <text
        x="75"
        y="169"
        textAnchor="middle"
        fill="#4a9eed"
        fontSize="9"
        fontWeight="600"
      >
        Vertices: id, name, role
      </text>
      <rect
        x="310"
        y="155"
        width="175"
        height="20"
        rx="4"
        fill="rgba(74,158,237,0.10)"
        stroke="#4a9eed"
        strokeWidth="1"
      />
      <text
        x="397"
        y="169"
        textAnchor="middle"
        fill="#4a9eed"
        fontSize="9"
        fontWeight="600"
      >
        Edges: src, dst, relationship
      </text>
    </svg>
    <p
      style={{
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        marginTop: '0.25rem',
      }}
    >
      GraphFrame = dois DataFrames: vertices (id obrigatório) + edges (src, dst
      obrigatórios). Todos os atributos são colunas adicionais.
    </p>
  </div>
);

const GNode = ({ x, y, label, color, sub, r = 18 }) => (
  <g>
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={`${color}25`}
      stroke={color}
      strokeWidth="2"
    />
    <text
      x={x}
      y={y + 4}
      textAnchor="middle"
      fill={color}
      fontSize="10"
      fontWeight="700"
    >
      {label}
    </text>
    {sub && (
      <text
        x={x}
        y={y + r + 13}
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="8"
      >
        {sub}
      </text>
    )}
  </g>
);

const ExecWrapper = ({ caption, children }) => (
  <div style={{ marginBottom: '0.75rem' }}>
    <div
      style={{
        fontSize: '0.7rem',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontWeight: 700,
        marginBottom: '0.5rem',
      }}
    >
      Esquema de Execução
    </div>
    {children}
    <p
      style={{
        fontSize: '0.78rem',
        color: 'var(--text-secondary)',
        textAlign: 'center',
        marginTop: '0.4rem',
      }}
    >
      {caption}
    </p>
  </div>
);

const PageRankExecDiagram = () => (
  <ExecWrapper caption="A recebe votos de B, C e D — converge para o PR mais alto. B e D não recebem nenhum link, ficam com o PR mais baixo.">
    <svg
      viewBox="0 0 300 210"
      style={{
        maxWidth: 280,
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    >
      <defs>
        <marker
          id="arr-pr"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
        </marker>
      </defs>
      <line
        x1="60"
        y1="115"
        x2="138"
        y2="50"
        stroke="#0284c7"
        strokeWidth="1.5"
        markerEnd="url(#arr-pr)"
        opacity="0.7"
      />
      <line
        x1="240"
        y1="115"
        x2="162"
        y2="50"
        stroke="#0284c7"
        strokeWidth="1.5"
        markerEnd="url(#arr-pr)"
        opacity="0.7"
      />
      <line
        x1="150"
        y1="155"
        x2="150"
        y2="62"
        stroke="#0284c7"
        strokeWidth="1.5"
        markerEnd="url(#arr-pr)"
        opacity="0.7"
      />
      <line
        x1="150"
        y1="155"
        x2="232"
        y2="122"
        stroke="#0284c7"
        strokeWidth="1.5"
        markerEnd="url(#arr-pr)"
        opacity="0.7"
      />
      <GNode x={150} y={35} r={26} label="A" sub="PR = 0.46" color="#0284c7" />
      <GNode x={45} y={125} r={16} label="B" sub="PR = 0.16" color="#0284c7" />
      <GNode x={250} y={125} r={19} label="C" sub="PR = 0.22" color="#0284c7" />
      <GNode x={150} y={172} r={16} label="D" sub="PR = 0.16" color="#0284c7" />
    </svg>
  </ExecWrapper>
);

const ConnectedComponentsExecDiagram = () => (
  <ExecWrapper caption="Cada nó adopta iterativamente o menor ID entre os seus vizinhos. A componente {A,B,C} converge para label=0; a componente {D,E,F} converge para label=4.">
    <svg
      viewBox="0 0 300 140"
      style={{
        maxWidth: 280,
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    >
      <line
        x1="55"
        y1="40"
        x2="115"
        y2="40"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="55"
        y1="40"
        x2="85"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="115"
        y1="40"
        x2="85"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="215"
        y1="40"
        x2="275"
        y2="40"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="215"
        y1="40"
        x2="245"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="275"
        y1="40"
        x2="245"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <GNode x={50} y={40} label="A" sub="label=0" color="#4a9eed" />
      <GNode x={120} y={40} label="B" sub="label=0" color="#4a9eed" />
      <GNode x={85} y={100} label="C" sub="label=0" color="#4a9eed" />
      <GNode x={210} y={40} label="D" sub="label=4" color="#0284c7" />
      <GNode x={280} y={40} label="E" sub="label=4" color="#0284c7" />
      <GNode x={245} y={100} label="F" sub="label=4" color="#0284c7" />
    </svg>
  </ExecWrapper>
);

const TriangleCountingExecDiagram = () => (
  <ExecWrapper caption="A, B e C formam um triângulo (cada par está ligado) — T(A)=T(B)=T(C)=1. D só está ligado a A, não fecha nenhum triângulo — T(D)=0.">
    <svg
      viewBox="0 0 300 160"
      style={{
        maxWidth: 280,
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    >
      <polygon
        points="140,30 70,120 210,120"
        fill="rgba(74,158,237,0.10)"
        stroke="none"
      />
      <line
        x1="140"
        y1="30"
        x2="70"
        y2="120"
        stroke="#4a9eed"
        strokeWidth="1.5"
      />
      <line
        x1="70"
        y1="120"
        x2="210"
        y2="120"
        stroke="#4a9eed"
        strokeWidth="1.5"
      />
      <line
        x1="210"
        y1="120"
        x2="140"
        y2="30"
        stroke="#4a9eed"
        strokeWidth="1.5"
      />
      <line
        x1="140"
        y1="30"
        x2="270"
        y2="55"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <GNode x={140} y={30} label="A" sub="T=1" color="#4a9eed" />
      <GNode x={70} y={120} label="B" sub="T=1" color="#4a9eed" />
      <GNode x={210} y={120} label="C" sub="T=1" color="#4a9eed" />
      <GNode x={270} y={55} label="D" sub="T=0" color="#0369a1" />
    </svg>
  </ExecWrapper>
);

const BFSExecDiagram = () => (
  <ExecWrapper caption="Expansão por camadas a partir de S: vizinhos directos ficam a dist=1, os seus vizinhos a dist=2 — até encontrar o destino.">
    <svg
      viewBox="0 0 300 170"
      style={{
        maxWidth: 280,
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    >
      <defs>
        <marker
          id="arr-bfs"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
      <line
        x1="55"
        y1="85"
        x2="125"
        y2="40"
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#arr-bfs)"
        opacity="0.7"
      />
      <line
        x1="55"
        y1="85"
        x2="125"
        y2="130"
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#arr-bfs)"
        opacity="0.7"
      />
      <line
        x1="150"
        y1="40"
        x2="225"
        y2="20"
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#arr-bfs)"
        opacity="0.7"
      />
      <line
        x1="150"
        y1="40"
        x2="225"
        y2="85"
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#arr-bfs)"
        opacity="0.7"
      />
      <line
        x1="150"
        y1="130"
        x2="225"
        y2="150"
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#arr-bfs)"
        opacity="0.7"
      />
      <GNode x={40} y={85} r={20} label="S" sub="dist=0" color="#0284c7" />
      <GNode x={140} y={40} label="P" sub="dist=1" color="#4a9eed" />
      <GNode x={140} y={130} label="Q" sub="dist=1" color="#4a9eed" />
      <GNode x={245} y={20} label="R" sub="dist=2" color="#4a9eed" />
      <GNode x={245} y={85} label="T" sub="dist=2" color="#4a9eed" />
      <GNode x={245} y={150} label="U" sub="dist=2" color="#4a9eed" />
    </svg>
  </ExecWrapper>
);

const LabelPropagationExecDiagram = () => (
  <ExecWrapper caption="Comunidades densamente ligadas (A,B,C e D,E,F) convergem cada uma para um label comum. A edge C-D (entre comunidades) é demasiado fraca para mudar o resultado.">
    <svg
      viewBox="0 0 300 140"
      style={{
        maxWidth: 280,
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    >
      <line
        x1="55"
        y1="40"
        x2="115"
        y2="40"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="55"
        y1="40"
        x2="85"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="115"
        y1="40"
        x2="85"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="215"
        y1="40"
        x2="275"
        y2="40"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="215"
        y1="40"
        x2="245"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="275"
        y1="40"
        x2="245"
        y2="100"
        stroke="#4a9eed"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="85"
        y1="100"
        x2="215"
        y2="40"
        stroke="var(--text-secondary)"
        strokeWidth="1.5"
        strokeDasharray="4,3"
        opacity="0.5"
      />
      <GNode x={50} y={40} label="A" sub="L1" color="#4a9eed" />
      <GNode x={120} y={40} label="B" sub="L1" color="#4a9eed" />
      <GNode x={85} y={100} label="C" sub="L1" color="#4a9eed" />
      <GNode x={210} y={40} label="D" sub="L2" color="#4a9eed" />
      <GNode x={280} y={40} label="E" sub="L2" color="#4a9eed" />
      <GNode x={245} y={100} label="F" sub="L2" color="#4a9eed" />
    </svg>
  </ExecWrapper>
);

const AlgoGuide = () => {
  const algos = [
    {
      name: 'PageRank',
      color: '#4a9eed',
      intuicao:
        'Um nó é importante se nós importantes apontam para ele. Um link de um nó com PR alto vale mais que links de nós com PR baixo. Inventado por Larry Page e Sergey Brin em 1998 para rankear páginas web, é hoje aplicado em qualquer rede onde "referências de autoridade" importam.',
      formula: (
        <>
          PR(u) = <sup>(1&minus;d)</sup>&frasl;<sub>N</sub> &nbsp;+&nbsp; d ·{' '}
          <span style={{ fontSize: '1.3em', verticalAlign: 'middle' }}>Σ</span>
          <sub style={{ fontSize: '0.6em' }}>v→u</sub> <sup>PR(v)</sup>&frasl;
          <sub>L(v)</sub>
        </>
      ),
      formulaVars: [
        ['d', 'damping factor (tipicamente 0.85)'],
        ['N', 'número total de nós'],
        ['v→u', 'todos os nós v com edge para u'],
        ['L(v)', 'out-degree de v (nº de links a sair de v)'],
      ],
      mecanismo:
        'Iteração de ponto fixo: inicializa todos os nós com PR=1/N. Cada iteração actualiza o PR de cada nó baseado nos PRs actuais dos seus vizinhos. Converge quando a mudança total entre iterações é menor que um threshold (tipicamente 0.001). Factor de damping d=0.85 modela a probabilidade de um utilizador aleatório seguir um link vs. saltar para uma página aleatória.',
      aplicacoes: [
        'Web search ranking (Google original)',
        'Identificar papers mais influentes em redes de citações',
        'Encontrar contas mais influentes em redes sociais',
        'Identificar hubs de transporte mais críticos',
        'Detecção de fontes de autoridade em knowledge graphs',
      ],
      params:
        'resetProbability (damping factor, default 0.15), maxIter (iterações, default 10), tol (tolerância de convergência)',
      complexity:
        'O(E × maxIter) — proporcional ao número de edges e iterações',
      Diagram: PageRankExecDiagram,
    },
    {
      name: 'Connected Components',
      color: '#4a9eed',
      intuicao:
        'Encontra grupos de nós que estão ligados entre si (directa ou indirectamente) mas não ligados a outros grupos. Em grafos não-dirigidos, uma componente conexa é um "cluster isolado". Identifica ilhas de conectividade numa rede.',
      formula: (
        <>
          label(v) = min {'{'} id(w) : w ∈ N(v) ∪ {'{'}v{'}'} {' }'}
        </>
      ),
      formulaVars: [
        ['N(v)', 'conjunto de vizinhos de v'],
        ['id(w)', 'identificador do nó w'],
        [
          'label(v)',
          'identificador da componente à qual v pertence (= menor id em toda a componente)',
        ],
      ],
      mecanismo:
        'Algoritmo de propagação de labels: inicialmente cada nó tem o seu próprio ID como label. Iterativamente, cada nó adopta o mínimo dos IDs dos seus vizinhos. Quando nenhum nó muda de label, o algoritmo terminou. Nós com o mesmo label final pertencem à mesma componente. GraphFrames usa uma versão optimizada distribuída chamada Alternating Direction Method.',
      aplicacoes: [
        'Detectar ilhas em redes sociais (utilizadores sem ligação à comunidade principal)',
        'Encontrar clusters de empresas ligadas por propriedade ou gestores comuns',
        'Identificar regiões desconectadas numa rede de distribuição',
        'Detecção de fraude: grupos de contas que partilham informação',
        'Análise de componentes numa rede de conhecimento',
      ],
      params:
        'Sem parâmetros obrigatórios. checkpointInterval controla frequência de checkpoints (recomendado para grafos grandes)',
      complexity: 'O(E × log(V))',
      Diagram: ConnectedComponentsExecDiagram,
    },
    {
      name: 'Triangle Counting',
      color: '#4a9eed',
      intuicao:
        'Conta quantos triângulos passam por cada nó. Um triângulo existe quando A→B, B→C, e A→C. Alta contagem de triângulos indica que os vizinhos de um nó também se conhecem entre si — clustering local elevado.',
      formula: (
        <>
          C(v) = <sup>2 · T(v)</sup>&frasl;
          <sub>deg(v) · (deg(v) &minus; 1)</sub>
        </>
      ),
      formulaVars: [
        ['T(v)', 'número de triângulos que passam por v'],
        ['deg(v)', 'grau (nº de edges) de v'],
        ['C(v)', 'clustering coefficient de v — entre 0 e 1'],
      ],
      mecanismo:
        'Para cada edge (u,v): encontrar a intersecção dos vizinhos de u e v. Cada vizinho comum w forma um triângulo (u,v,w). A contagem total por nó é a soma de triângulos em todas as edges adjacentes. GraphFrames implementa com conjunção de neighbourhood sets usando operações de DataFrame.',
      aplicacoes: [
        'Análise de coesão de comunidades (redes com muitos triângulos são mais coesas)',
        'Detecção de spam/bots (contas spam raramente formam triângulos)',
        'Social capital: pessoas com muitos amigos em comum têm laços mais fortes',
        'Identificar hubs de comunidade (nós com muitos triângulos são centrais na comunidade)',
        'Network resilience: grafos com muitos triângulos são mais resistentes a remoção de nós',
      ],
      params:
        'Sem parâmetros. O grafo deve ser não-dirigido (edges bidireccional) para resultados correctos',
      complexity: 'O(E × sqrt(E))',
      Diagram: TriangleCountingExecDiagram,
    },
    {
      name: 'BFS',
      color: '#4a9eed',
      intuicao:
        'Encontra o caminho mais curto entre dois nós num grafo não-ponderado. Explora primeiro todos os vizinhos directos, depois os vizinhos dos vizinhos, e assim por diante. Garantidamente encontra o caminho mais curto em número de saltos (hops).',
      formula: (
        <>
          dist(u,v) = min {'{'} |p| : p ∈ caminhos(u → v) {' }'}
        </>
      ),
      formulaVars: [
        ['p', 'um caminho (sequência de edges) entre u e v'],
        ['|p|', 'comprimento do caminho p, em número de edges'],
        ['dist(u,v)', 'número mínimo de saltos (hops) entre u e v'],
      ],
      mecanismo:
        'Começa pelo nó de origem com distância 0. Expande em camadas: todos os nós a distância 1 são visitados primeiro, depois distância 2, etc. Em grafos distribuídos, implementado com message passing: cada nó envia a sua distância actual + 1 para vizinhos não visitados. Termina quando o nó de destino é encontrado.',
      aplicacoes: [
        'Graus de separação em redes sociais ("6 degrees of Kevin Bacon")',
        'Encontrar rota mais curta em grafos de transporte (sem pesos)',
        'Web crawling: descobrir páginas a distância máxima N de um seed',
        'Recomendação: encontrar utilizadores a 2-3 hops de distância',
        'Análise de alcance: quantos nós são atingíveis em N saltos?',
      ],
      params:
        'fromExpr (filtro para nó de origem), toExpr (destino), maxPathLength (máximo de saltos)',
      complexity: 'O(V + E) — linear no tamanho do grafo',
      Diagram: BFSExecDiagram,
    },
    {
      name: 'Label Propagation',
      color: '#4a9eed',
      intuicao:
        'Detecta comunidades de forma não-supervisionada propagando labels através das edges. Cada nó adopta o label mais comum entre os seus vizinhos. Clusters emergem naturalmente sem definir K a priori — ao contrário do K-Means.',
      formula: (
        <>
          label(v) = argmax<sub>l</sub> &nbsp;|{'{'} w ∈ N(v) : label(w) = l{' '}
          {' }'}|
        </>
      ),
      formulaVars: [
        ['N(v)', 'conjunto de vizinhos de v'],
        ['l', 'um label candidato'],
        [
          'argmax_l',
          'o label l que maximiza a contagem de vizinhos com esse label',
        ],
      ],
      mecanismo:
        'Inicializa cada nó com um label único (o seu ID). Iterativamente: cada nó adopta o label mais frequente entre os seus vizinhos (ties resolvidos aleatoriamente). Nós densamente conectados convertem rapidamente para o mesmo label. Continua até estabilização ou maxIter. Resultado: grupos de nós com o mesmo label são comunidades.',
      aplicacoes: [
        'Segmentação de comunidades em redes sociais sem número pré-definido',
        'Detecção de grupos de interesse em redes de colaboração',
        'Identificação de módulos funcionais em redes biológicas (proteínas, genes)',
        'Clustering de documentos ligados por citações ou links',
        'Detecção de echo chambers em redes de informação',
      ],
      params:
        'maxIter (número máximo de iterações, default 5 — converge rapidamente)',
      complexity: 'O(E × maxIter) — praticamente linear para grafos esparsos',
      Diagram: LabelPropagationExecDiagram,
    },
  ];
  return (
    <>
      {algos.map((a) => (
        <div key={a.name} style={S.diagram}>
          <p
            style={{
              fontWeight: 700,
              marginBottom: '1rem',
              color: a.color,
              fontSize: '1.05rem',
            }}
          >
            {a.name}
          </p>
          <div
            style={{
              background: 'var(--bg-primary)',
              borderRadius: 10,
              padding: '1.25rem',
              textAlign: 'left',
              border: `1.5px solid ${a.color}40`,
            }}
          >
            <a.Diagram />
            <div
              style={{
                background: `${a.color}0d`,
                border: `1px solid ${a.color}30`,
                borderRadius: 8,
                padding: '1rem 1.25rem',
                marginBottom: '0.75rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  color: a.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  marginBottom: '0.6rem',
                }}
              >
                Fórmula
              </div>
              <div
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: a.color,
                  textAlign: 'center',
                  marginBottom: '0.85rem',
                  lineHeight: 2,
                }}
              >
                {a.formula}
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.3rem 1rem',
                  borderTop: `1px solid ${a.color}25`,
                  paddingTop: '0.6rem',
                }}
              >
                {a.formulaVars.map(([sym, desc]) => (
                  <div
                    key={sym}
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        color: a.color,
                        fontWeight: 700,
                      }}
                    >
                      {sym}
                    </span>{' '}
                    — {desc}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginBottom: '0.6rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Intuição
                </span>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    margin: '0.2rem 0 0',
                  }}
                >
                  {a.intuicao}
                </p>
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Mecanismo
                </span>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    margin: '0.2rem 0 0',
                  }}
                >
                  {a.mecanismo}
                </p>
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: a.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Aplicações reais
                </span>
                {a.aplicacoes.map((ap) => (
                  <div
                    key={ap}
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.15rem',
                    }}
                  >
                    • {ap}
                  </div>
                ))}
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Parâmetros
                </span>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    margin: '0.2rem 0 0.5rem',
                  }}
                >
                  {a.params}
                </p>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Complexidade
                </span>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: a.color,
                    margin: '0.2rem 0 0',
                    fontWeight: 600,
                  }}
                >
                  {a.complexity}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default function BDA3() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/bigdata-analytics" style={S.back}>
          <ArrowLeft size={16} /> Voltar a Big Data Analytics
        </Link>
        <div style={S.tag}>MÓDULO 03</div>
        <h1 style={S.h1}>Graph Analytics com GraphFrames</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Porquê Graph Analytics?</h2>
          <p style={S.p}>
            O mundo real é fundamentalmente relacional. Amizades, transacções,
            citações, rotas, interacções proteína-proteína — tudo é uma rede. As
            bases de dados relacionais e os DataFrames tratam entidades
            isoladamente (cada linha é um registo independente). Grafos capturam
            exactamente o que falta: as relações entre entidades.
          </p>
          <p style={S.p}>
            O poder das técnicas de grafo está em revelar propriedades
            emergentes que não existem em nenhuma entidade individual — são
            propriedades da estrutura da rede. O PageRank de uma página web não
            é uma propriedade da página em si, mas da sua posição na rede
            global. A centralidade de um aeroporto não é sobre o aeroporto, mas
            sobre como ele conecta o resto da rede.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                n: 'Detecção de Fraude',
                c: '#4a9eed',
                desc: 'Redes de fraude formam padrões específicos: múltiplas contas ligadas ao mesmo número de telemóvel, mesmo IP, ou mesmo dispositivo. Um anel de fraude cria um subgrafo denso de transacções circulares. Técnicas de grafo encontram estes padrões onde queries SQL convencionais falhariam.',
                ex: 'Identificar rings de fraude em cartões de crédito, analisar redes de contas falsas em redes sociais.',
              },
              {
                n: 'Recomendação Social',
                c: '#4a9eed',
                desc: 'Collaborative filtering clássico ignora a topologia da rede social. "Amigos dos amigos" como features de recomendação usa BFS para encontrar nós a 2-3 hops. "Pessoas que tens em comum" é directamente a contagem de vizinhos comuns — um cálculo de grafo trivial mas extremamente poderoso.',
                ex: 'LinkedIn "2nd degree connections", Twitter "who to follow", Spotify "friends listening to".',
              },
              {
                n: 'Knowledge Graphs',
                c: '#4a9eed',
                desc: 'Representação de conhecimento como rede de entidades e relações: (Paris, capital_de, França), (França, localizada_em, Europa). Raciocínio por traversal de grafo: "onde fica Paris?" navega (Paris → capital_de → França → localizada_em → Europa).',
                ex: 'Google Knowledge Graph, Wikidata, Microsoft Academic Graph.',
              },
            ].map(({ n, c, desc, ex }) => (
              <div
                key={n}
                style={{
                  background: `${c}08`,
                  border: `1px solid ${c}25`,
                  borderRadius: 8,
                  padding: '0.9rem',
                }}
              >
                <div
                  style={{ fontWeight: 700, color: c, marginBottom: '0.35rem' }}
                >
                  {n}
                </div>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {desc}
                </p>
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: c,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  {ex}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Fundamentos de Teoria de Grafos</h2>
          <p style={S.p}>
            Um grafo G = (V, E) consiste num conjunto de vértices (V) e arestas
            (E) que os conectam. Esta representação abstracta captura inúmeros
            problemas do mundo real — desde a World Wide Web até redes de
            distribuição de energia.
          </p>

          <GraphDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Conceito</th>
                  <th style={S.th}>Definição</th>
                  <th style={S.th}>Interpretação prática</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Grau (Degree)',
                    'Número de edges conectadas a um nó',
                    'Num grafo social: quantos amigos tem o utilizador. Distribuição de grau segue power law em redes reais (lei de Zipf)',
                  ],
                  [
                    'In-degree / Out-degree',
                    'Para grafos dirigidos: edges que entram / saem',
                    'Twitter: in-degree = followers, out-degree = following. Hubs têm in-degree altíssimo',
                  ],
                  [
                    'Diâmetro',
                    'Comprimento do caminho mais curto máximo entre quaisquer dois nós',
                    '"6 degrees of separation" afirma que o diâmetro da rede social humana é aproximadamente 6',
                  ],
                  [
                    'Clustering Coefficient',
                    '2 × triângulos / (degree × (degree-1)) — mede coesão local',
                    'Alto CC = os amigos de um nó são também amigos entre si. Redes sociais têm CC muito alto',
                  ],
                  [
                    'Centralidade de Betweenness',
                    'Proporção de caminhos mais curtos que passam por um nó',
                    'Nós com alta betweenness são "pontes" — removê-los fragmenta a rede',
                  ],
                  [
                    'Componente Gigante',
                    'A maior componente conexa de uma rede real',
                    'A internet tem uma componente gigante que inclui mais de 90% dos sites',
                  ],
                  [
                    'Small World Property',
                    'Redes reais têm diâmetro pequeno E clustering alto',
                    'Característica de redes sociais, biológicas, e de transporte — não de grafos aleatórios',
                  ],
                ].map(([c, d, i]) => (
                  <tr key={c}>
                    <td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>
                      {c}
                    </td>
                    <td style={S.td}>{d}</td>
                    <td
                      style={{
                        ...S.td,
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {i}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. GraphFrames — Grafos em Spark</h2>
          <p style={S.p}>
            GraphFrames é a biblioteca de grafos para Spark DataFrames, criada
            pela Databricks em 2016. Combina as capacidades de grafo do GraphX
            (Spark RDD-based) com a interface moderna de DataFrames. Um
            GraphFrame é simplesmente dois DataFrames: um de vértices (com
            coluna "id" obrigatória) e um de edges (com colunas "src" e "dst"
            obrigatórias). Qualquer coluna adicional nos DataFrames torna-se um
            atributo de vértice ou edge.
          </p>
          <p style={S.p}>
            O poder desta arquitectura: todos os algoritmos de grafo devolvem
            DataFrames. Isso permite integrar resultados directamente com o
            ecossistema Spark — fazer join com outros dados, agregar, filtrar,
            ou guardar em qualquer formato. PageRank devolve um DataFrame com
            coluna "pagerank" por vértice; pode-se imediatamente fazer join com
            dados de utilizadores, ordenar, e servir como feature de ML.
          </p>

          <h3 style={S.h3}>Motif Finding — Queries sobre Padrões de Grafo</h3>
          <p style={S.p}>
            Uma das funcionalidades mais poderosas do GraphFrames é o Motif
            Finding: uma query declarativa sobre padrões estruturais no grafo.
            Em vez de especificar como encontrar o padrão, descreve-se o que se
            procura como um mini-grafo.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Padrão (Motif)</th>
                  <th style={S.th}>Descrição</th>
                  <th style={S.th}>Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    '(a)-[e]->(b)',
                    'Todos os pares de nós conectados por um edge',
                    'Listar todas as relações directas; base para outros padrões',
                  ],
                  [
                    '(a)-[e1]->(b); (b)-[e2]->(c)',
                    'Caminhos de tamanho 2 (A→B→C)',
                    'Amigos de amigos, 2-hop recommendations, transitive trust',
                  ],
                  [
                    '(a)-[e1]->(b); (b)-[e2]->(a)',
                    'Edges bidireccional (A e B ligados mutuamente)',
                    'Amizades mútuas em grafos dirigidos, conversas bidireccional',
                  ],
                  [
                    '(a)-[e1]->(b); (b)-[e2]->(c); (c)-[e3]->(a)',
                    'Triângulos (ciclo de tamanho 3)',
                    'Detecção de triângulos, clusters coesos, fraude triangular',
                  ],
                  [
                    '(a)-[e1]->(b); (a)-[e2]->(c)',
                    'Nó com dois edges de saída (fork)',
                    'Utilizadores que seguem dois outros — ponto de partida para recomendação',
                  ],
                ].map(([m, d, a]) => (
                  <tr key={m}>
                    <td
                      style={{
                        ...S.td,
                        fontFamily: 'monospace',
                        fontSize: '0.83rem',
                        color: '#4a9eed',
                      }}
                    >
                      {m}
                    </td>
                    <td style={S.td}>{d}</td>
                    <td
                      style={{
                        ...S.td,
                        fontSize: '0.83rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {a}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Algoritmos de Grafos</h2>
          <AlgoGuide />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Graph Analytics vs. SQL</h2>
          <p style={S.p}>
            SQL e Graph Analytics são complementares, não substitutos. A escolha
            depende do tipo de query: se a relação é fixa e simples, SQL com
            JOIN resolve. Se precisa de traversal de profundidade variável ou
            análise de estrutura, graph analytics é essencial.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Query</th>
                  <th style={S.th}>SQL</th>
                  <th style={S.th}>Graph Analytics</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Amigos directos de um utilizador',
                    ' JOIN simples, O(1) com índice',
                    ' Mas overhead de setup do grafo',
                  ],
                  [
                    'Amigos dos amigos (2 hops)',
                    ' JOIN duplo — verboso mas funciona',
                    ' BFS natural, código mais simples',
                  ],
                  [
                    'Caminhos de comprimento variável',
                    ' Muito difícil — CTEs recursivas, lento',
                    ' BFS com maxPathLength — trivial',
                  ],
                  [
                    'Encontrar comunidades',
                    ' Impossível em SQL puro',
                    ' Label Propagation, Connected Components',
                  ],
                  [
                    'PageRank / Centralidade',
                    ' Impossível sem iteração explícita',
                    ' Algoritmos nativos GraphFrames',
                  ],
                  [
                    'Contar triângulos',
                    ' JOIN triplo — O(N³), impossível em escala',
                    ' Triangle Counting optimizado',
                  ],
                  [
                    'Detecção de ciclos',
                    ' Muito complexo com CTEs recursivas',
                    ' Motif finding com patterns cíclicos',
                  ],
                  [
                    'Agregações simples (count, sum por grupo)',
                    ' GROUP BY — nativo e eficiente',
                    ' Pode usar DataFrame API, mas SQL mais natural',
                  ],
                ].map(([q, s, g]) => (
                  <tr key={q}>
                    <td style={S.td}>{q}</td>
                    <td style={S.td}>{s}</td>
                    <td style={S.td}>{g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
