import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './GraphTheory';

const C = '#f97316';
const S = {
  page:{maxWidth:860,margin:'0 auto',padding:'0 1rem 4rem'},
  back:{display:'flex',alignItems:'center',gap:'0.5rem',color:'var(--text-secondary)',textDecoration:'none',fontSize:'0.9rem',marginBottom:'2rem'},
  badge:{display:'inline-block',background:C,color:'#fff',fontSize:'0.72rem',fontWeight:700,padding:'0.2rem 0.7rem',borderRadius:20,marginBottom:'0.75rem',letterSpacing:'0.06em',textTransform:'uppercase'},
  h1:{fontSize:'2rem',fontWeight:800,color:'var(--text-primary)',marginBottom:'0.4rem'},
  sub:{color:'var(--text-secondary)',fontSize:'1rem',lineHeight:1.6,marginBottom:'2.5rem'},
  section:{marginBottom:'2.5rem'},
  h2:{fontSize:'1.4rem',fontWeight:700,color:C,borderLeft:`3px solid ${C}`,paddingLeft:'0.85rem',marginBottom:'1.2rem'},
  highlight:{background:`${C}15`,borderLeft:`3px solid ${C}`,padding:'0.85rem 1.1rem',borderRadius:'0 8px 8px 0',marginBottom:'1rem'},
  note:{background:'var(--bg-secondary)',border:'1px solid var(--card-border)',padding:'0.85rem 1.1rem',borderRadius:8,marginBottom:'1rem'},
  p:{color:'var(--text-secondary)',lineHeight:1.75,marginBottom:'0.85rem'},
  diagram:{background:'#0f172a',borderRadius:12,padding:'1.5rem',marginBottom:'1rem',overflowX:'auto'},
  divider:{border:'none',borderTop:'1px solid var(--card-border)',margin:'2rem 0'},
};

export default function GTH3() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[2].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Árvores e Spanning Trees</h1>
      <p style={S.sub}>Propriedades de árvores, Minimum Spanning Tree com Kruskal e Prim, estruturas de Union-Find, e aplicações em machine learning desde Decision Trees a árvores de sufixos em bioinformática.</p>

      {/* 1. Propriedades de Árvores */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Propriedades de Árvores</h2>
        <p style={S.p}>Uma <strong>árvore</strong> é um grafo conexo acíclico. As seguintes afirmações são equivalentes para um grafo G com n vértices: (1) G é uma árvore; (2) G é conexo e |E| = n − 1; (3) qualquer par de vértices tem exactamente um caminho entre si; (4) G é conexo mas a remoção de qualquer aresta desconecta-o; (5) G é acíclico mas adicionar qualquer aresta cria exatamente um ciclo. Uma <strong>floresta</strong> é um grafo acíclico (união disjunta de árvores).</p>
        <p style={S.p}>Numa <strong>árvore enraizada</strong>, um vértice é designado raiz; os restantes organizam-se em pai, filhos e folhas. A <strong>profundidade</strong> de um nó é a distância à raiz; a <strong>altura</strong> da árvore é a profundidade máxima. Travessias: <em>pré-ordem</em> (raiz, esquerda, direita — serialização XML), <em>in-ordem</em> (esquerda, raiz, direita — BST ordenada), <em>pós-ordem</em> (esquerda, direita, raiz — avaliação de expressões).</p>
        <p style={S.p}><strong>Árvores especializadas:</strong> BST (Binary Search Tree) — lookup, insert, delete em O(log n) amortizado. AVL e Red-Black Trees — balanceamento automático, O(log n) garantido. B-trees e B+ trees — optimizadas para acesso a disco, usadas em bases de dados e sistemas de ficheiros. Árvores de segmento (segment trees) — queries de intervalo em O(log n). Árvores de Fenwick (Binary Indexed Trees) — prefix sums em O(log n) com implementação muito simples.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 200" width="100%" style={{display:'block'}}>
            <text x="250" y="10" fill="#94a3b8" fontSize="12" textAnchor="middle">Árvore enraizada — altura, profundidade e anotações</text>
            {/* Root */}
            <circle cx="250" cy="45" r="18" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="250" y="50" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">R</text>
            <text x="250" y="22" fill={C} fontSize="10" textAnchor="middle">raiz (d=0)</text>
            {/* Level 1 */}
            <circle cx="130" cy="105" r="16" fill={`${C}25`} stroke={C} strokeWidth="2"/>
            <circle cx="370" cy="105" r="16" fill={`${C}25`} stroke={C} strokeWidth="2"/>
            <text x="130" y="110" fill="#e2e8f0" fontSize="12" textAnchor="middle">A</text>
            <text x="370" y="110" fill="#e2e8f0" fontSize="12" textAnchor="middle">B</text>
            <text x="90" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle">d=1</text>
            <text x="410" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle">d=1</text>
            {/* Level 2 */}
            <circle cx="60" cy="165" r="14" fill={`${C}15`} stroke="#34d399" strokeWidth="1.5"/>
            <circle cx="130" cy="165" r="14" fill={`${C}15`} stroke="#34d399" strokeWidth="1.5"/>
            <circle cx="310" cy="165" r="14" fill={`${C}15`} stroke="#34d399" strokeWidth="1.5"/>
            <circle cx="380" cy="165" r="14" fill={`${C}15`} stroke="#34d399" strokeWidth="1.5"/>
            <circle cx="440" cy="165" r="14" fill={`${C}15`} stroke="#34d399" strokeWidth="1.5"/>
            <text x="60" y="170" fill="#94a3b8" fontSize="11" textAnchor="middle">C</text>
            <text x="130" y="170" fill="#94a3b8" fontSize="11" textAnchor="middle">D</text>
            <text x="310" y="170" fill="#94a3b8" fontSize="11" textAnchor="middle">E</text>
            <text x="380" y="170" fill="#94a3b8" fontSize="11" textAnchor="middle">F</text>
            <text x="440" y="170" fill="#94a3b8" fontSize="11" textAnchor="middle">G</text>
            {/* Edges */}
            <line x1="238" y1="62" x2="144" y2="92" stroke={C} strokeWidth="1.5"/>
            <line x1="262" y1="62" x2="356" y2="92" stroke={C} strokeWidth="1.5"/>
            <line x1="118" y1="120" x2="72" y2="152" stroke={C} strokeWidth="1.5"/>
            <line x1="130" y1="121" x2="130" y2="151" stroke={C} strokeWidth="1.5"/>
            <line x1="358" y1="120" x2="320" y2="152" stroke={C} strokeWidth="1.5"/>
            <line x1="370" y1="121" x2="378" y2="151" stroke={C} strokeWidth="1.5"/>
            <line x1="382" y1="120" x2="432" y2="152" stroke={C} strokeWidth="1.5"/>
            {/* Leaf label */}
            <text x="60" y="188" fill="#34d399" fontSize="9" textAnchor="middle">folha</text>
            <text x="130" y="188" fill="#34d399" fontSize="9" textAnchor="middle">folha</text>
            <text x="310" y="188" fill="#34d399" fontSize="9" textAnchor="middle">folha</text>
            <text x="380" y="188" fill="#34d399" fontSize="9" textAnchor="middle">folha</text>
            <text x="440" y="188" fill="#34d399" fontSize="9" textAnchor="middle">folha</text>
            {/* Height annotation */}
            <line x1="480" y1="45" x2="480" y2="165" stroke="#475569" strokeWidth="1" strokeDasharray="3,2"/>
            <text x="490" y="108" fill="#64748b" fontSize="9" textAnchor="start" transform="rotate(-90,490,108)">altura = 2</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2. Minimum Spanning Tree */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Minimum Spanning Tree</h2>
        <p style={S.p}>Uma <strong>Spanning Tree</strong> de um grafo conexo G é um subgrafo árvore que inclui todos os vértices de G. Uma <strong>MST</strong> (Minimum Spanning Tree) é a spanning tree com soma mínima de pesos das arestas. A MST é única se todos os pesos forem distintos. Para grafos com pesos iguais pode existir mais do que uma MST.</p>
        <p style={S.p}>Dois princípios fundamentais garantem a correcção dos algoritmos de MST. <strong>Propriedade cut:</strong> para qualquer corte (partição de V em S e V∖S), a aresta de menor peso que cruza o corte pertence a alguma MST. <strong>Propriedade cycle:</strong> a aresta de maior peso em qualquer ciclo não pertence a nenhuma MST. Estes princípios são a base do paradigma ganancioso que Kruskal e Prim exploram.</p>
        <p style={S.p}><strong>Aplicações:</strong> design de redes de telecomunicação com custo mínimo; clustering hierárquico single-linkage (duas amostras estão no mesmo cluster se a distância da MST entre elas for menor que um limiar); aproximação 2-factor para o Travelling Salesman Problem (TSP) em grafos métricos via MST (a tour de DFS sobre a MST tem custo ≤ 2 × OPT); redes de distribuição eléctrica e de água.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Cut property (formal):</strong> Seja (S, V∖S) um corte de G e e a aresta de menor peso cruzando o corte (assumindo pesos distintos). Então e pertence a toda a MST de G. Prova: suponha que e não está na MST T; adicionar e a T cria um ciclo que cruza o corte → existe outra aresta e' no ciclo que também cruza o corte → mas w(e) &lt; w(e'), então T' = T + e − e' tem menor peso — contradição.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 180" width="100%" style={{display:'block'}}>
            <text x="250" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">MST — arestas verdes seleccionadas, cinza excluídas</text>
            {/* Nodes */}
            {[{x:80,y:90,l:'A'},{x:200,y:50,l:'B'},{x:200,y:140,l:'C'},{x:330,y:50,l:'D'},{x:330,y:140,l:'E'},{x:430,y:90,l:'F'}].map(({x,y,l}) => (
              <g key={l}>
                <circle cx={x} cy={y} r="16" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2"/>
                <text x={x} y={y+5} fill="#e2e8f0" fontSize="13" textAnchor="middle">{l}</text>
              </g>
            ))}
            {/* MST edges (green) */}
            <line x1="96" y1="83" x2="184" y2="57" stroke={C} strokeWidth="2.5"/>
            <text x="136" y="62" fill={C} fontSize="11" textAnchor="middle">1</text>
            <line x1="96" y1="97" x2="184" y2="133" stroke={C} strokeWidth="2.5"/>
            <text x="126" y="122" fill={C} fontSize="11" textAnchor="middle">2</text>
            <line x1="216" y1="50" x2="314" y2="50" stroke={C} strokeWidth="2.5"/>
            <text x="265" y="44" fill={C} fontSize="11" textAnchor="middle">3</text>
            <line x1="216" y1="140" x2="314" y2="140" stroke={C} strokeWidth="2.5"/>
            <text x="265" y="157" fill={C} fontSize="11" textAnchor="middle">4</text>
            <line x1="346" y1="57" x2="416" y2="83" stroke={C} strokeWidth="2.5"/>
            <text x="386" y="63" fill={C} fontSize="11" textAnchor="middle">5</text>
            {/* Non-MST edges (gray) */}
            <line x1="200" y1="66" x2="200" y2="124" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="213" y="98" fill="#475569" fontSize="10" textAnchor="middle">7</text>
            <line x1="216" y1="57" x2="316" y2="133" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="284" y="102" fill="#475569" fontSize="10" textAnchor="middle">9</text>
            <line x1="346" y1="133" x2="416" y2="97" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="388" y="122" fill="#475569" fontSize="10" textAnchor="middle">8</text>
            {/* Legend */}
            <line x1="60" y1="170" x2="90" y2="170" stroke={C} strokeWidth="2.5"/>
            <text x="95" y="174" fill={C} fontSize="10">MST</text>
            <line x1="150" y1="170" x2="180" y2="170" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="185" y="174" fill="#475569" fontSize="10">excluída</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3. Kruskal e Prim */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Kruskal e Prim</h2>
        <p style={S.p}><strong>Algoritmo de Kruskal:</strong> ordena todas as arestas por peso crescente; percorre-as por ordem e adiciona cada aresta à MST se não forma ciclo com as já adicionadas. O ciclo é detectado com a estrutura <strong>Union-Find</strong> (Disjoint Set Union — DSU): find(u) retorna o representante do conjunto de u; union(u, v) junta os conjuntos. Com path compression (find aponta directamente para a raiz) e union by rank (a árvore menor fica sob a maior), as operações são O(α(V)) amortizado — onde α é a função inversa de Ackermann, efectivamente constante. Total: O(E log E).</p>
        <p style={S.p}><strong>Algoritmo de Prim:</strong> começa num vértice arbitrário e cresce a MST adicionando iterativamente a aresta mais barata que conecta um vértice já na árvore a um vértice ainda fora. Com array simples: O(V²) — adequado para grafos densos. Com min-heap: O(E log V) — melhor para grafos esparsos. Conceptualmente similar ao algoritmo de Dijkstra.</p>
        <p style={S.p}><strong>Algoritmo de Borůvka:</strong> cada componente selecciona a aresta mais barata que sai dela; as componentes fundem-se. Em log V fases, termina com a MST. Complexidade: O(E log V). A vantagem é ser naturalmente paralelizável — cada componente age independentemente.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Escolha prática:</strong> Kruskal é preferível para grafos esparsos (E ≈ V). Prim com heap é preferível para grafos densos (E ≈ V²). Borůvka é usado em algoritmos paralelos e distribuídos. Todos produzem a mesma MST (ou uma MST, se existirem várias).</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4. Árvores Especiais e Aplicações */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Árvores Especiais e Aplicações</h2>
        <p style={S.p}>A <strong>Steiner Tree</strong> generaliza a MST para conectar um subconjunto de vértices K ⊆ V com custo mínimo (podem usar-se vértices de V\K como intermediários). É NP-hard em geral, mas tem algoritmos de aproximação: a razão 11/6 é a melhor conhecida para grafos gerais. Aplicações em design de redes (VLSI, fibra óptica).</p>
        <p style={S.p}>Uma <strong>arborescência</strong> é uma árvore dirigida enraizada onde todos os caminhos partem da raiz. O problema da <strong>Minimum Spanning Arborescence</strong> (MSA) — encontrar a arborescência de custo mínimo num dígrafo — é resolvido pelo <strong>algoritmo de Edmonds</strong> (também chamado Chu-Liu/Edmonds): O(VE) básico, O(E log V) com heaps de Fibonacci.</p>
        <p style={S.p}><strong>Árvores em Machine Learning:</strong> Decision Trees (CART usa Gini impurity, ID3 usa information gain, C4.5 usa gain ratio) criam partições recursivas do espaço de features. Random Forests combinam B árvores treinadas em bootstrap samples com features aleatórias — reduzem variância via ensemble. Gradient Boosted Trees (XGBoost, LightGBM, CatBoost) adicionam árvores sequencialmente para corrigir os erros do ensemble anterior — o estado-da-arte em dados tabulares.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 520 190" width="100%" style={{display:'block'}}>
            <text x="260" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">CART — Decision Tree com critério Gini e folhas de predição</text>
            {/* Root split */}
            <rect x="175" y="25" width="150" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2"/>
            <text x="250" y="42" fill={C} fontSize="11" fontWeight="bold" textAnchor="middle">feature_1 ≤ 3.5</text>
            <text x="250" y="57" fill="#94a3b8" fontSize="9" textAnchor="middle">Gini = 0.48, n=200</text>

            {/* Level 1 left */}
            <rect x="60" y="100" width="140" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#34d399" strokeWidth="1.5"/>
            <text x="130" y="117" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">feature_2 ≤ 1.8</text>
            <text x="130" y="132" fill="#94a3b8" fontSize="9" textAnchor="middle">Gini = 0.35, n=110</text>

            {/* Level 1 right */}
            <rect x="320" y="100" width="140" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#34d399" strokeWidth="1.5"/>
            <text x="390" y="117" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">feature_3 ≤ 0.6</text>
            <text x="390" y="132" fill="#94a3b8" fontSize="9" textAnchor="middle">Gini = 0.41, n=90</text>

            {/* Leaf nodes */}
            <rect x="20" y="170" width="80" height="20" rx="6" fill={`${C}30`} stroke={C} strokeWidth="1.5"/>
            <text x="60" y="184" fill="#e2e8f0" fontSize="10" textAnchor="middle">Classe A (n=70)</text>

            <rect x="120" y="170" width="80" height="20" rx="6" fill={`${C}30`} stroke={C} strokeWidth="1.5"/>
            <text x="160" y="184" fill="#e2e8f0" fontSize="10" textAnchor="middle">Classe B (n=40)</text>

            <rect x="290" y="170" width="80" height="20" rx="6" fill={`${C}30`} stroke={C} strokeWidth="1.5"/>
            <text x="330" y="184" fill="#e2e8f0" fontSize="10" textAnchor="middle">Classe B (n=55)</text>

            <rect x="390" y="170" width="80" height="20" rx="6" fill={`${C}30`} stroke={C} strokeWidth="1.5"/>
            <text x="430" y="184" fill="#e2e8f0" fontSize="10" textAnchor="middle">Classe A (n=35)</text>

            {/* Edges */}
            <line x1="210" y1="65" x2="160" y2="100" stroke={C} strokeWidth="1.5"/>
            <text x="160" y="87" fill="#94a3b8" fontSize="9" textAnchor="middle">Sim</text>
            <line x1="290" y1="65" x2="340" y2="100" stroke={C} strokeWidth="1.5"/>
            <text x="342" y="87" fill="#94a3b8" fontSize="9" textAnchor="middle">Não</text>
            <line x1="100" y1="140" x2="65" y2="170" stroke="#34d399" strokeWidth="1.5"/>
            <line x1="155" y1="140" x2="158" y2="170" stroke="#34d399" strokeWidth="1.5"/>
            <line x1="360" y1="140" x2="333" y2="170" stroke="#34d399" strokeWidth="1.5"/>
            <line x1="415" y1="140" x2="428" y2="170" stroke="#34d399" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}>Uma <strong>árvore</strong> com n vértices tem exactamente n-1 arestas, é conexa e acíclica — qualquer par destas propriedades implica a terceira.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Minimum Spanning Tree (MST)</strong> minimiza o custo total das arestas que conectam todos os vértices; aplicações em redes de comunicação e clustering.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Kruskal</strong> ordena arestas por peso e usa Union-Find para evitar ciclos — O(E log E); <strong>Prim</strong> cresce a árvore a partir de um vértice — O(E log V) com heap.</li>
              <li style={{marginBottom:"0.5rem"}}>A <strong>corte property</strong> garante que a aresta de menor peso cruzando qualquer corte pertence à MST — fundamento teórico de ambos os algoritmos.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Árvores especiais</strong>: árvores de Steiner (subconjunto de vértices), árvores geradoras máximas, e aplicações em compressão de dados (Huffman).</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
