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

// === DIAGRAM 1: Graph + Adjacency Matrix ===
const GraphAdjacencyDiagram = () => {
  const nodes = [
    { id: 'A', x: 90, y: 50, color: '#f97316' },
    { id: 'B', x: 230, y: 40, color: '#fb923c' },
    { id: 'C', x: 290, y: 150, color: '#fdba74' },
    { id: 'D', x: 160, y: 200, color: '#fed7aa' },
    { id: 'E', x: 40, y: 150, color: '#f59e0b' },
  ];
  const edges = [['A', 'B'], ['A', 'E'], ['A', 'D'], ['B', 'C'], ['C', 'D'], ['D', 'E']];
  const idx = { A: 0, B: 1, C: 2, D: 3, E: 4 };
  const adj = Array.from({ length: 5 }, () => Array(5).fill(0));
  edges.forEach(([a, b]) => { adj[idx[a]][idx[b]] = 1; adj[idx[b]][idx[a]] = 1; });

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Um grafo simples e a sua matriz de adjacência</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
        <svg viewBox="0 0 330 240" style={{ maxWidth: 280, height: 'auto' }}>
          {edges.map(([a, b], i) => {
            const na = nodes.find(n => n.id === a), nb = nodes.find(n => n.id === b);
            return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="var(--text-secondary)" strokeWidth="2" />;
          })}
          {nodes.map(n => (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r="20" fill={n.color} opacity="0.85" />
              <text x={n.x} y={n.y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{n.id}</text>
            </g>
          ))}
        </svg>
        <div>
          <table style={{ ...S.table, marginBottom: 0, width: 'auto' }}>
            <thead>
              <tr>
                <th style={{ ...S.th, textAlign: 'center' }}></th>
                {nodes.map(n => <th key={n.id} style={{ ...S.th, textAlign: 'center', color: n.color }}>{n.id}</th>)}
              </tr>
            </thead>
            <tbody>
              {nodes.map((n, i) => (
                <tr key={n.id}>
                  <td style={{ ...S.td, fontWeight: 700, color: n.color }}>{n.id}</td>
                  {nodes.map((m, j) => (
                    <td key={m.id} style={{ ...S.td, textAlign: 'center', fontFamily: 'monospace', color: adj[i][j] ? '#f97316' : 'var(--text-secondary)', fontWeight: adj[i][j] ? 700 : 400 }}>{adj[i][j]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
        A matriz A é simétrica (grafo não-dirigido) e a sua diagonal é zero (sem self-loops). Cada nó tem ainda um vector de features x_v ∈ ℝ^d — por exemplo, num grafo social, idade, número de posts, ou um embedding de perfil.
      </p>
    </div>
  );
};

// === DIAGRAM 2: Grid vs Graph ===
const GridVsGraphDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Grelha regular (CNN) vs. estrutura irregular de grafo</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
      <div>
        <svg viewBox="0 0 160 160" style={{ width: 160, height: 160 }}>
          {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => (
            <g key={`${r}-${c}`}>
              <rect x={c * 40 + 5} y={r * 40 + 5} width="30" height="30" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
            </g>
          )))}
        </svg>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Pixel: exactamente 8 vizinhos, posições fixas e ordenadas (esquerda, direita, cima, baixo, diagonais)</p>
      </div>
      <div>
        <svg viewBox="0 0 160 160" style={{ width: 160, height: 160 }}>
          {[[60, 20, 110, 50], [110, 50, 130, 110], [130, 110, 70, 140], [70, 140, 30, 90], [30, 90, 60, 20], [60, 20, 30, 90], [110, 50, 70, 140]].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--text-secondary)" strokeWidth="1.5" />
          ))}
          {[[60, 20, '#f97316'], [110, 50, '#f97316'], [130, 110, '#f97316'], [70, 140, '#fdba74'], [30, 90, '#f97316']].map(([x, y, c], i) => (
            <circle key={i} cx={x} cy={y} r="10" fill={c} opacity="0.85" />
          ))}
        </svg>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Nó: número de vizinhos varia (grau diferente), e não há ordem natural — "primeiro vizinho" não tem significado</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      Uma CNN aplica o mesmo kernel a uma janela de tamanho fixo, assumindo vizinhança regular e ordenada. Numa rede social, um utilizador pode ter 3 ou 3.000 amigos — não existe "kernel 3×3" que generalize. Uma RNN assume uma sequência ordenada (passado → futuro); um grafo não tem início nem fim. As GNNs precisam de operações que sejam (1) aplicáveis a vizinhanças de tamanho variável e (2) <strong>invariantes à permutação</strong> — o resultado não pode depender da ordem em que listamos os vizinhos.
    </p>
  </div>
);

// === DIAGRAM 3: Message Passing ===
const MessagePassingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Uma ronda de message passing para o nó central A</p>
    <svg viewBox="0 0 360 220" style={{ maxWidth: 320, height: 'auto' }}>
      <defs>
        <marker id="mpArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>
      {[[180, 110, 'A', '#f97316'], [80, 50, 'B', '#f97316'], [280, 50, 'C', '#f97316'], [80, 180, 'D', '#fdba74'], [280, 180, 'E', '#f97316']].map(([x, y, label, c]) => (
        label !== 'A' && (
          <g key={label}>
            <line x1={x} y1={y} x2={180} y2={110} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#mpArrow)" />
          </g>
        )
      ))}
      {[[180, 110, 'A', '#f97316', 26], [80, 50, 'B', '#f97316', 20], [280, 50, 'C', '#f97316', 20], [80, 180, 'D', '#fdba74', 20], [280, 180, 'E', '#f97316', 20]].map(([x, y, label, c, r]) => (
        <g key={label}>
          <circle cx={x} cy={y} r={r} fill={c} opacity="0.85" />
          <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">{label}</text>
        </g>
      ))}
      <text x="180" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">m_A = AGGREGATE(h_B, h_C, h_D, h_E)</text>
      <text x="180" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">h_A' = UPDATE(h_A, m_A)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O nó A recebe uma "mensagem" de cada vizinho (B, C, D, E). Essas mensagens são combinadas por uma função <strong>AGGREGATE</strong> simétrica (soma, média, máximo) — o resultado não depende da ordem dos vizinhos. De seguida, a função <strong>UPDATE</strong> combina o estado anterior de A com a mensagem agregada para produzir o novo embedding h_A'. Repetindo este processo em K camadas, A acumula informação de vizinhos a K saltos de distância.
    </p>
  </div>
);

// === Numeric example: mean aggregation ===
const AggregationExample = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Exemplo numérico: agregação por média</p>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'left' }}>
      Suponha que cada nó tem um feature vector de dimensão 2 (ex: [actividade, influência]). O nó A tem três vizinhos: B, D e E.
    </p>
    <div style={{ overflowX: 'auto' }}>
      <table style={S.table}>
        <thead><tr><th style={S.th}>Nó</th><th style={S.th}>h (vector)</th></tr></thead>
        <tbody>
          {[['A (próprio)', '[1.0, 0.5]', '#f97316'], ['B (vizinho)', '[2.0, 1.0]', '#f97316'], ['D (vizinho)', '[0.0, 3.0]', '#fdba74'], ['E (vizinho)', '[1.0, 2.0]', '#f97316']].map(([n, v, c]) => (
            <tr key={n}><td style={{ ...S.td, color: c, fontWeight: 700 }}>{n}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={S.math}>
      <BlockMath math={`m_A = \\text{mean}(h_B, h_D, h_E) = \\frac{[2,1] + [0,3] + [1,2]}{3} = [1.0,\\ 2.0]`} />
    </div>
    <div style={S.math}>
      <BlockMath math={`h_A' = \\sigma\\big(W \\cdot \\text{concat}(h_A, m_A)\\big) = \\sigma\\big(W \\cdot [1.0,\\ 0.5,\\ 1.0,\\ 2.0]\\big)`} />
    </div>
    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
      W é uma matriz de pesos treinável e σ é uma não-linearidade (ex: ReLU). O novo h_A' incorpora tanto a informação do próprio nó como um resumo dos seus vizinhos diretos.
    </p>
  </div>
);

// === GCN numeric example ===
const GCNExample = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Exemplo: uma camada GCN num mini-grafo de 3 nós</p>
    <svg viewBox="0 0 220 110" style={{ maxWidth: 200, height: 'auto' }}>
      <line x1="50" y1="30" x2="170" y2="30" stroke="var(--text-secondary)" strokeWidth="2" />
      <line x1="50" y1="30" x2="110" y2="90" stroke="var(--text-secondary)" strokeWidth="2" />
      {[[50, 30, '1', '#f97316'], [170, 30, '2', '#f97316'], [110, 90, '3', '#f97316']].map(([x, y, l, c]) => (
        <g key={l}>
          <circle cx={x} cy={y} r="20" fill={c} opacity="0.85" />
          <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{l}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.75rem 0', textAlign: 'left' }}>
      O nó 1 está ligado a 2 e a 3; os nós 2 e 3 não estão ligados entre si. Graus (com self-loop, Ã = A + I): nó 1 → 3, nós 2 e 3 → 2.
    </p>
    <div style={S.math}>
      <BlockMath math={`H^{(l+1)} = \\sigma\\left(\\tilde{D}^{-1/2}\\,\\tilde{A}\\,\\tilde{D}^{-1/2}\\,H^{(l)}\\,W^{(l)}\\right)`} />
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', textAlign: 'left' }}>
      Para o nó 1, o coeficiente de normalização aplicado à mensagem do nó 2 é:
    </p>
    <div style={S.math}>
      <BlockMath math={`\\tilde{D}^{-1/2}_{11}\\ \\tilde{A}_{12}\\ \\tilde{D}^{-1/2}_{22} = \\frac{1}{\\sqrt{3}} \\cdot 1 \\cdot \\frac{1}{\\sqrt{2}} \\approx 0.408`} />
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'left' }}>
      Este coeficiente multiplica h₂ na soma que forma a nova representação de h₁. Note como nós de grau elevado (como o nó 1) "diluem" a contribuição de cada vizinho — esta é a normalização que evita que hubs dominem a agregação. O mesmo cálculo aplica-se ao self-loop (Ã₁₁ = 1) e à contribuição do nó 3.
    </p>
  </div>
);

// === GAT attention diagram ===
const GATDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>GAT: pesos de atenção diferentes por aresta</p>
    <svg viewBox="0 0 320 200" style={{ maxWidth: 300, height: 'auto' }}>
      {[[160, 100, 80, 40, 0.6], [160, 100, 250, 40, 0.1], [160, 100, 60, 170, 0.2], [160, 100, 260, 170, 0.1]].map(([x1, y1, x2, y2, w], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth={w * 10} opacity={0.3 + w} />
      ))}
      {[[160, 100, 'A', '#f97316', 24], [80, 40, 'B', '#f97316', 18], [250, 40, 'C', '#f97316', 18], [60, 170, 'D', '#fdba74', 18], [260, 170, 'E', '#f97316', 18]].map(([x, y, l, c, r]) => (
        <g key={l}>
          <circle cx={x} cy={y} r={r} fill={c} opacity="0.85" />
          <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{l}</text>
        </g>
      ))}
      <text x="115" y="62" fill="#f97316" fontSize="10" fontWeight="700">α=0.60</text>
      <text x="210" y="62" fill="var(--text-secondary)" fontSize="10">α=0.10</text>
      <text x="80" y="145" fill="var(--text-secondary)" fontSize="10">α=0.20</text>
      <text x="225" y="145" fill="var(--text-secondary)" fontSize="10">α=0.10</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      Ao contrário da GCN (que usa pesos fixos baseados apenas no grau), a GAT aprende um coeficiente α_ij para cada aresta, dependente das features de ambos os nós — exactamente como a atenção num Transformer (Módulo 06 de NLP) calcula pesos diferentes entre tokens. Aqui, o nó B recebe 60% da "atenção" de A — talvez porque B é um nó muito relevante para a tarefa — enquanto C, D e E recebem pesos menores. A espessura das linhas representa α_ij.
    </p>
  </div>
);

// === Task type diagrams ===
const TaskDiagram = ({ title, desc, highlight }) => {
  const nodes = [[160, 40, 'A'], [70, 110, 'B'], [250, 110, 'C'], [110, 190, 'D'], [210, 190, 'E']];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4]];
  const colorFor = (label) => highlight.nodes && highlight.nodes.includes(label) ? '#f97316' : '#f97316';
  const isHighEdge = (a, b) => highlight.edge && ((highlight.edge[0] === a && highlight.edge[1] === b) || (highlight.edge[0] === b && highlight.edge[1] === a));
  return (
    <div style={{ background: 'var(--bg-secondary)', borderRadius: 10, padding: '1rem', border: '1px solid var(--card-border)' }}>
      <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>{title}</div>
      <svg viewBox="0 0 320 230" style={{ width: '100%', maxWidth: 220, height: 'auto' }}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
            stroke={isHighEdge(nodes[a][2], nodes[b][2]) ? '#f97316' : 'rgba(255,255,255,0.3)'}
            strokeWidth={isHighEdge(nodes[a][2], nodes[b][2]) ? 3 : 1.5}
            strokeDasharray={isHighEdge(nodes[a][2], nodes[b][2]) ? '5,3' : 'none'} />
        ))}
        {nodes.map(([x, y, l]) => (
          <g key={l}>
            <circle cx={x} cy={y} r="22" fill={colorFor(l)} opacity="0.85" />
            <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{l}</text>
          </g>
        ))}
        {highlight.graphLabel && <text x="160" y="225" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">{highlight.graphLabel}</text>}
      </svg>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>{desc}</p>
    </div>
  );
};

export default function DL6() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 06</div>
      <h1 style={S.h1}>Graph Neural Networks (GNNs)</h1>
      <p style={S.lead}>
        Imagens são grelhas, frases são sequências — mas a maior parte dos dados do mundo real não tem nenhuma destas formas regulares. Moléculas, redes sociais, grafos de conhecimento, redes de estradas: todos são <strong>grafos</strong>, conjuntos de entidades ligadas por relações arbitrárias. As Graph Neural Networks (GNNs) estendem o deep learning a esta estrutura, aprendendo representações de nós, arestas e grafos inteiros através de um princípio simples e poderoso: <em>cada nó aprende com os seus vizinhos</em>.
      </p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Grafos como dados: nós, arestas e features</h2>
        <p style={S.p}>
          Um grafo <InlineMath math="G = (V, E)" /> é definido por um conjunto de nós (vértices) <InlineMath math="V" /> e um conjunto de arestas <InlineMath math="E" /> que ligam pares de nós. Cada nó <InlineMath math="v" /> pode carregar um <strong>vector de features</strong> <InlineMath math="x_v \in \mathbb{R}^d" /> — por exemplo, numa rede social isto pode ser idade, número de seguidores e tópicos de interesse; numa molécula, o tipo de átomo e a sua carga.
        </p>
        <p style={S.p}>
          Para que um computador possa processar a estrutura, o grafo é representado por uma <strong>matriz de adjacência</strong> <InlineMath math="A \in \{0,1\}^{|V| \times |V|}" />, onde <InlineMath math="A_{ij} = 1" /> se existe uma aresta entre os nós <InlineMath math="i" /> e <InlineMath math="j" />, e 0 caso contrário. Para grafos não-dirigidos, esta matriz é simétrica.
        </p>
        <GraphAdjacencyDiagram />
        <p style={S.p}>
          Além da estrutura (matriz de adjacência) e das features dos nós, os grafos podem ainda ter <strong>features nas arestas</strong> (ex: peso, tipo de relação, distância) e <strong>features ao nível do grafo</strong> (ex: propriedade global de uma molécula). A combinação destes três tipos de informação — estrutura, nós, arestas — é o que uma GNN aprende a processar conjuntamente.
        </p>
        <div style={S.note}>
          Em grafos com milhões de nós (redes sociais reais), a matriz de adjacência densa seria proibitivamente grande — quase toda preenchida com zeros. Na prática usa-se representação <em>esparsa</em> (lista de arestas), mas o conceito matemático mantém-se.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Porque é que CNNs e RNNs não chegam</h2>
        <p style={S.p}>
          As CNNs exploram a estrutura regular de uma grelha de pixels: cada pixel tem exactamente o mesmo número de vizinhos, numa posição relativa fixa, o que permite partilhar pesos de um kernel por toda a imagem. As RNNs exploram a ordem natural de uma sequência (tempo, posição na frase). Os grafos não têm nenhuma destas propriedades:
        </p>
        <GridVsGraphDiagram />
        <p style={S.p}>
          Estas duas restrições — <strong>tamanho de vizinhança variável</strong> e <strong>ausência de ordem</strong> — definem os requisitos de qualquer arquitectura para grafos: as operações têm de funcionar com qualquer número de vizinhos e o resultado não pode mudar se a ordem dos vizinhos for permutada. É exactamente este o problema que o <em>message passing</em> resolve.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Message Passing: o paradigma unificador</h2>
        <p style={S.p}>
          Quase todas as GNNs modernas (GCN, GAT, GraphSAGE, e muitas outras) são casos particulares do <strong>Message Passing Neural Network (MPNN)</strong>. A ideia central, repetida em cada camada <InlineMath math="k" /> da rede:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>1. Cada nó envia uma "mensagem" aos seus vizinhos</strong> — geralmente uma transformação do seu próprio embedding.</p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>2. Cada nó agrega as mensagens recebidas</strong> dos seus vizinhos directos, usando uma função simétrica (soma, média ou máximo) — invariante à ordem.</p>
          <p style={{ ...S.p, marginBottom: 0 }}><strong>3. Cada nó actualiza o seu próprio embedding</strong> combinando o estado anterior com a mensagem agregada.</p>
        </div>
        <MessagePassingDiagram />
        <div style={S.math}>
          <BlockMath math={`m_v^{(k)} = \\text{AGGREGATE}\\big(\\{h_u^{(k-1)} : u \\in \\mathcal{N}(v)\\}\\big) \\qquad h_v^{(k)} = \\text{UPDATE}\\big(h_v^{(k-1)},\\ m_v^{(k)}\\big)`} />
        </div>
        <AggregationExample />
        <h3 style={S.h3}>O alcance cresce com a profundidade</h3>
        <p style={S.p}>
          Com 1 camada, cada nó "vê" apenas os seus vizinhos directos (1-hop). Com K camadas, cada nó incorpora informação de nós a K saltos de distância — o seu <strong>campo recetivo</strong> cresce exactamente como o de uma CNN profunda, mas sobre a topologia do grafo em vez de uma grelha espacial.
        </p>
        <div style={S.note}>
          <strong>Limite de expressividade — teste de Weisfeiler-Leman:</strong> existe um algoritmo clássico (1-WL) que distingue grafos refinando iterativamente "cores" de nós com base nas cores dos vizinhos — é estruturalmente idêntico ao message passing. Prova-se que uma GNN standard <em>nunca</em> consegue distinguir dois grafos que o 1-WL test também não distingue (ex: certos pares de grafos regulares simétricos). Arquitecturas mais recentes incorporam codificações posicionais ou estruturas de ordem superior para ultrapassar este limite.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. GCN — Graph Convolutional Network</h2>
        <p style={S.p}>
          A GCN (Kipf &amp; Welling, 2017) é a instância mais simples e influente do message passing: a agregação é uma <strong>média ponderada pelo grau</strong> dos vizinhos, aplicada simultaneamente a todos os nós através de uma única operação matricial.
        </p>
        <div style={S.math}>
          <BlockMath math={`H^{(l+1)} = \\sigma\\left(\\tilde{D}^{-1/2}\\,\\tilde{A}\\,\\tilde{D}^{-1/2}\\,H^{(l)}\\,W^{(l)}\\right)`} />
        </div>
        <p style={S.p}>
          Onde <InlineMath math="\tilde{A} = A + I" /> é a matriz de adjacência com <strong>self-loops</strong> adicionados (cada nó é vizinho de si próprio, garantindo que o seu próprio embedding contribui para a actualização), <InlineMath math="\tilde{D}" /> é a matriz diagonal de graus de <InlineMath math="\tilde{A}" />, <InlineMath math="W^{(l)}" /> são pesos treináveis partilhados por todos os nós, e <InlineMath math="\sigma" /> é uma não-linearidade (ReLU).
        </p>
        <p style={S.p}>
          A normalização simétrica <InlineMath math="\tilde{D}^{-1/2}\tilde{A}\tilde{D}^{-1/2}" /> é crucial: sem ela, nós com muitos vizinhos (hubs) acumulariam somas muito maiores do que nós com poucos vizinhos, desestabilizando o treino. A normalização garante que a contribuição de cada vizinho é "dividida" pela raiz quadrada do produto dos graus dos dois nós envolvidos.
        </p>
        <GCNExample />
        <div style={S.note}>
          <strong>Limitações da GCN:</strong> (1) todos os vizinhos contribuem com pesos fixos, determinados apenas pela estrutura — não há mecanismo para a rede "decidir" que um vizinho é mais importante que outro; (2) empilhar muitas camadas causa <em>over-smoothing</em>: os embeddings de todos os nós tendem a convergir para valores semelhantes, perdendo capacidade discriminativa. Na prática, 2–3 camadas costumam ser o ponto ótimo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. GAT — Graph Attention Network</h2>
        <p style={S.p}>
          A GAT (Veličković et al., 2018) resolve a primeira limitação da GCN: em vez de pesos de agregação fixos baseados no grau, aprende <strong>coeficientes de atenção</strong> <InlineMath math="\alpha_{ij}" /> entre cada nó e os seus vizinhos — dinâmicos e dependentes das features, exactamente como a self-attention dos Transformers (ver Módulo 06 de NLP) calcula pesos diferentes entre cada par de tokens.
        </p>
        <div style={S.math}>
          <BlockMath math={`e_{ij} = \\text{LeakyReLU}\\big(a^\\top [Wh_i \\,\\Vert\\, Wh_j]\\big)`} />
        </div>
        <div style={S.math}>
          <BlockMath math={`\\alpha_{ij} = \\frac{\\exp(e_{ij})}{\\sum_{k \\in \\mathcal{N}(i)} \\exp(e_{ik})} \\qquad h_i' = \\sigma\\left(\\sum_{j \\in \\mathcal{N}(i)} \\alpha_{ij} W h_j\\right)`} />
        </div>
        <p style={S.p}>
          O vector <InlineMath math="a" /> e a matriz <InlineMath math="W" /> são parâmetros aprendidos. A concatenação <InlineMath math="[Wh_i \Vert Wh_j]" /> permite que o coeficiente <InlineMath math="e_{ij}" /> capture a relação específica entre o par <InlineMath math="(i,j)" />, e o softmax sobre os vizinhos garante que os pesos somam 1 — interpretáveis como "quanta atenção o nó i dá a cada vizinho j".
        </p>
        <GATDiagram />
        <h3 style={S.h3}>Multi-head attention</h3>
        <p style={S.p}>
          Tal como nos Transformers, a GAT usa <InlineMath math="K" /> "cabeças" de atenção independentes em paralelo, cada uma com os seus próprios <InlineMath math="W" /> e <InlineMath math="a" />. Os resultados são concatenados (camadas intermédias) ou calculados em média (camada final, para controlar a dimensionalidade do output). Isto estabiliza o treino e permite que diferentes cabeças capturem diferentes tipos de relações — por exemplo, uma cabeça pode focar-se em "vizinhos do mesmo tipo" e outra em "vizinhos com features muito diferentes (complementares)".
        </p>
        <div style={S.note}>
          A GAT é especialmente útil em grafos <strong>heterogéneos</strong> ou ruidosos, onde nem todas as arestas são igualmente informativas — por exemplo, num grafo de citações, um artigo pode citar centenas de outros, mas apenas alguns são realmente relevantes para o seu conteúdo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <div style={S.section}>
        <h2 style={S.h2}>6. GraphSAGE — aprendizagem indutiva e amostragem</h2>
        <p style={S.p}>
          GCN e GAT, na sua formulação original, são <strong>transductive</strong>: o treino opera sobre um grafo fixo e completo — a matriz de adjacência inteira é usada em cada forward pass. Isto coloca dois problemas: não generaliza a nós ou grafos nunca vistos, e não escala a grafos com milhões de nós (a matriz de adjacência completa não cabe em memória).
        </p>
        <p style={S.p}>
          O <strong>GraphSAGE</strong> ("SAmple and aggreGatE", Hamilton et al., 2017) resolve ambos: em vez de usar todos os vizinhos, <strong>amostra</strong> um número fixo de vizinhos por nó em cada camada, e aprende uma função de agregação que generaliza — pode ser aplicada a um nó completamente novo, mesmo que não tenha existido durante o treino.
        </p>
        <h3 style={S.h3}>Estratégias de agregação</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Aggregator</th><th style={S.th}>Como funciona</th><th style={S.th}>Característica</th></tr></thead>
            <tbody>
              {[
                ['Mean', 'Calcula a média elementwise dos vectores dos vizinhos amostrados', 'Simples e rápido; comporta-se de forma semelhante à GCN'],
                ['Pool (max-pool)', 'Cada vizinho passa por uma pequena MLP, depois aplica-se max-pooling elemento-a-elemento', 'Captura a feature mais "saliente" entre os vizinhos, útil para detectar outliers informativos'],
                ['LSTM', 'Os vizinhos amostrados são ordenados aleatoriamente e processados por uma LSTM', 'Mais expressivo (não é simétrico por natureza, mas a ordem aleatória mitiga isso); mais lento a treinar'],
              ].map(([n, h, c]) => (
                <tr key={n}><td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>{n}</td><td style={S.td}>{h}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={S.h3}>Inductive vs Transductive</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '1rem', border: '1px solid var(--card-border)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Transductive (GCN, GAT clássicos)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              O modelo aprende embeddings específicos para os nós vistos durante o treino. Para classificar um nó novo seria necessário re-treinar com o grafo expandido. Adequado quando o grafo é estático e completo.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '1rem', border: `1px solid ${color}40` }}>
            <div style={{ fontWeight: 700, color: '#f97316', marginBottom: '0.4rem' }}>Inductive (GraphSAGE)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              O modelo aprende uma <em>função</em> de agregação parametrizada, aplicável a qualquer vizinhança — incluindo nós e grafos nunca vistos durante o treino. Essencial para grafos dinâmicos (novos utilizadores, novas moléculas).
            </p>
          </div>
        </div>
        <p style={S.p}>
          A amostragem de vizinhanças (em vez de usar o grafo completo) também permite treinar em <strong>mini-batches</strong> — fundamental para escalar a grafos industriais com milhares de milhões de nós, como os usados pelo Pinterest (PinSage) ou redes sociais.
        </p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 7 */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Tarefas práticas: três formas de usar uma GNN</h2>
        <p style={S.p}>
          Depois de várias camadas de message passing, cada nó tem um embedding <InlineMath math="h_v" /> que resume a sua vizinhança. Esse embedding pode ser usado para três tipos fundamentais de tarefa:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <TaskDiagram
            title="Node Classification"
            desc="Prevê um rótulo para cada nó individualmente — ex: classificar se uma conta numa rede social é um bot (laranja) com base no seu embedding e no dos vizinhos."
            highlight={{ nodes: ['B', 'D'] }}
          />
          <TaskDiagram
            title="Link Prediction"
            desc="Prevê se deve existir uma aresta entre dois nós que ainda não estão ligados — ex: sugestão de amizade ou recomendação de produto. A aresta a tracejado laranja é a ligação prevista."
            highlight={{ edge: ['B', 'C'] }}
          />
          <TaskDiagram
            title="Graph Classification"
            desc="Agrega os embeddings de todos os nós (pooling) num único vector que representa o grafo inteiro — ex: prever se uma molécula é tóxica, ou classificar um grafo de interações como fraudulento."
            highlight={{ nodes: ['A', 'B', 'C', 'D', 'E'], graphLabel: 'embedding global do grafo' }}
          />
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Exemplos de aplicação por domínio:</strong></p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: 0 }}>
            <li><strong>Drug discovery:</strong> átomos = nós, ligações químicas = arestas → graph classification para prever toxicidade ou actividade biológica de moléculas.</li>
            <li><strong>Redes sociais / fraud detection:</strong> utilizadores = nós, interações = arestas → node classification para detectar contas falsas; link prediction para sugestões de amizade.</li>
            <li><strong>Sistemas de recomendação:</strong> grafos bipartidos utilizador–item (ex: PinSage, Pinterest) → link prediction para recomendar novos itens.</li>
            <li><strong>Mapas e tráfego:</strong> interseções = nós, estradas = arestas → node/edge regression para prever tempos de chegada (Google Maps usa GNNs desde 2020).</li>
            <li><strong>Knowledge graphs:</strong> entidades = nós, relações = arestas tipadas → link prediction para completar factos em falta.</li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 8 - Comparison table */}
      <div style={S.section}>
        <h2 style={S.h2}>8. GCN vs GAT vs GraphSAGE</h2>
        <p style={S.p}>
          As três arquitecturas partilham o mesmo esqueleto de message passing, mas diferem na forma de agregação, na capacidade de generalização e na escalabilidade. A tabela seguinte resume as diferenças essenciais:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Critério</th>
                <th style={S.th}>GCN</th>
                <th style={S.th}>GAT</th>
                <th style={S.th}>GraphSAGE</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Agregação', 'Média ponderada pelo grau (fixa, espectral)', 'Soma ponderada por atenção aprendida', 'Mean / Pool / LSTM (escolhível)'],
                ['Pesos por vizinho', 'Fixos (estrutura apenas)', 'Aprendidos, dependentes das features', 'Iguais dentro do aggregator escolhido'],
                ['Indutivo?', 'Não (transductive clássico)', 'Não (transductive clássico)', 'Sim — generaliza a nós/grafos novos'],
                ['Escalabilidade', 'Requer grafo completo em memória', 'Requer grafo completo em memória', 'Mini-batches via sampling — escala a milhões de nós'],
                ['Custo computacional', 'Baixo', 'Médio-alto (cálculo de atenção por aresta)', 'Controlável (depende do nº de vizinhos amostrados)'],
                ['Casos de uso típicos', 'Baseline rápido, grafos pequenos/médios estáticos', 'Grafos heterogéneos/ruidosos onde nem todas as relações pesam igual', 'Grafos enormes e dinâmicos (redes sociais, recomendação industrial)'],
              ].map(([c, gcn, gat, sage]) => (
                <tr key={c}>
                  <td style={{ ...S.td, fontWeight: 700 }}>{c}</td>
                  <td style={S.td}>{gcn}</td>
                  <td style={S.td}>{gat}</td>
                  <td style={S.td}>{sage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Na prática, GAT e GraphSAGE não são mutuamente exclusivos — é comum combinar atenção com amostragem (GAT-SAGE) para obter o melhor dos dois mundos: pesos adaptativos e escalabilidade a grafos enormes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SYNTHESIS */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>
        <p style={S.p}>
          As GNNs generalizam o deep learning a dados estruturados em grafo substituindo a convolução por <strong>message passing</strong>: cada nó agrega informação dos seus vizinhos de forma simétrica (invariante à ordem) e actualiza o seu próprio embedding. Empilhando camadas, o campo recetivo de cada nó cresce — mas com o risco de over-smoothing.
        </p>
        <p style={S.p}>
          A <strong>GCN</strong> oferece uma agregação simples e eficiente baseada na normalização pelo grau; a <strong>GAT</strong> torna essa agregação adaptativa através de coeficientes de atenção aprendidos; o <strong>GraphSAGE</strong> resolve a escalabilidade e a generalização a grafos novos através de amostragem e funções de agregação inductivas. As três arquitecturas alimentam tarefas de <strong>classificação de nós</strong>, <strong>predição de arestas</strong> e <strong>classificação de grafos inteiros</strong> — desde detecção de fraude a descoberta de fármacos e sistemas de recomendação à escala global.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Um grafo é (nós + features) + (arestas / matriz de adjacência) — sem ordem nem grau fixo</li>
            <li>Message passing = AGGREGATE (simétrico) + UPDATE, repetido em K camadas</li>
            <li>GCN: agregação fixa normalizada pelo grau; simples, propensa a over-smoothing</li>
            <li>GAT: atenção aprendida por aresta — analogia directa à self-attention dos Transformers</li>
            <li>GraphSAGE: amostragem + aggregators (mean/pool/LSTM) → indutivo e escalável</li>
            <li>Aplicações: node classification, link prediction, graph classification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
