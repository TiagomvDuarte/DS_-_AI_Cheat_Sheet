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

export default function GTH2() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[1].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Algoritmos Clássicos</h1>
      <p style={S.sub}>BFS, DFS, caminhos mais curtos com Dijkstra e Bellman-Ford, Floyd-Warshall para todos os pares, ordenação topológica e componentes fortemente conexas — os algoritmos fundamentais da teoria de grafos.</p>

      {/* 1. BFS e DFS */}
      <div style={S.section}>
        <h2 style={S.h2}>1. BFS e DFS</h2>
        <p style={S.p}><strong>Breadth-First Search (BFS)</strong> explora o grafo camada por camada a partir de um vértice fonte, usando uma fila FIFO. Garante encontrar o caminho mais curto (em número de arestas) em grafos não-pesados. Complexidade: O(V + E). Aplicações: componentes conexas, verificar se um grafo é bipartido (2-colorível ↔ bipartido — um grafo com ciclo ímpar não é bipartido), algoritmos de flooding em redes, distâncias em redes sociais.</p>
        <p style={S.p}><strong>Depth-First Search (DFS)</strong> explora tão fundo quanto possível antes de retroceder, usando pilha ou recursão. Cada vértice recebe um tempo de descoberta d[v] e de finalização f[v]. As arestas classificam-se em: <em>arestas de árvore</em> (caminho DFS), <em>back edges</em> (para ancestral — indica ciclo), <em>forward edges</em> (para descendente não-filho) e <em>cross edges</em> (entre subárvores). Complexidade: O(V + E).</p>
        <p style={S.p}><strong>Componentes Fortemente Conexas (SCCs):</strong> numa SCC, todo o vértice é alcançável a partir de qualquer outro. O <strong>algoritmo de Kosaraju</strong> usa dois DFS (grafo original + transposto). O <strong>algoritmo de Tarjan</strong> encontra SCCs num único DFS usando discovery time e low-link values com uma pilha — O(V + E).</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>BFS vs DFS:</strong> BFS garante caminho mínimo mas usa mais memória (O(V) na fila no pior caso). DFS usa O(profundidade) de memória e é natural para detecção de ciclos, ordenação topológica e SCCs. Ambos têm complexidade O(V + E) mas servem propósitos distintos.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 215" width="100%" style={{display:'block'}}>
            <text x="310" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">BFS — Árvore com camadas coloridas (source = S)</text>
            {/* Nodes — todos descidos 25px */}
            <circle cx="80" cy="115" r="18" fill={`${C}50`} stroke={C} strokeWidth="2.5"/>
            <text x="80" y="120" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">S</text>

            <circle cx="200" cy="75" r="16" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <circle cx="200" cy="155" r="16" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <text x="200" y="80" fill="#e2e8f0" fontSize="12" textAnchor="middle">A</text>
            <text x="200" y="160" fill="#e2e8f0" fontSize="12" textAnchor="middle">B</text>

            <circle cx="340" cy="55" r="16" fill={`${C}18`} stroke="#fb923c" strokeWidth="1.5"/>
            <circle cx="340" cy="115" r="16" fill={`${C}18`} stroke="#fb923c" strokeWidth="1.5"/>
            <circle cx="340" cy="175" r="16" fill={`${C}18`} stroke="#fb923c" strokeWidth="1.5"/>
            <text x="340" y="60" fill="#e2e8f0" fontSize="12" textAnchor="middle">C</text>
            <text x="340" y="120" fill="#e2e8f0" fontSize="12" textAnchor="middle">D</text>
            <text x="340" y="180" fill="#e2e8f0" fontSize="12" textAnchor="middle">E</text>

            <circle cx="480" cy="85" r="16" fill="transparent" stroke="#64748b" strokeWidth="1.5"/>
            <circle cx="480" cy="145" r="16" fill="transparent" stroke="#64748b" strokeWidth="1.5"/>
            <text x="480" y="90" fill="#94a3b8" fontSize="12" textAnchor="middle">F</text>
            <text x="480" y="150" fill="#94a3b8" fontSize="12" textAnchor="middle">G</text>

            {/* Edges */}
            <line x1="98" y1="105" x2="184" y2="82" stroke={C} strokeWidth="2"/>
            <line x1="98" y1="125" x2="184" y2="148" stroke={C} strokeWidth="2"/>
            <line x1="216" y1="68" x2="324" y2="61" stroke={C} strokeWidth="2"/>
            <line x1="216" y1="80" x2="324" y2="108" stroke={C} strokeWidth="2"/>
            <line x1="216" y1="162" x2="324" y2="172" stroke={C} strokeWidth="2"/>
            <line x1="356" y1="63" x2="464" y2="79" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="356" y1="122" x2="464" y2="137" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3"/>
            {/* Cross edge */}
            <line x1="340" y1="131" x2="340" y2="159" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>

            {/* Layer labels */}
            <rect x="56" y="141" width="48" height="16" rx="4" fill={`${C}20`}/>
            <text x="80" y="153" fill={C} fontSize="10" textAnchor="middle">Layer 0</text>
            <rect x="176" y="180" width="48" height="16" rx="4" fill={`${C}15`}/>
            <text x="200" y="192" fill={C} fontSize="10" textAnchor="middle">Layer 1</text>
            <rect x="316" y="195" width="48" height="16" rx="4" fill={`${C}10`}/>
            <text x="340" y="207" fill="#fb923c" fontSize="10" textAnchor="middle">Layer 2</text>
            <rect x="456" y="168" width="48" height="16" rx="4" fill="rgba(249,115,22,0.06)"/>
            <text x="480" y="180" fill="#64748b" fontSize="10" textAnchor="middle">Layer 3</text>

            {/* Queue state */}
            <text x="560" y="50" fill="#94a3b8" fontSize="10" textAnchor="middle">Fila:</text>
            <rect x="535" y="55" width="50" height="20" rx="4" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)"/>
            <text x="560" y="69" fill={C} fontSize="11" textAnchor="middle">[S]→[A,B]</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2. Caminhos Mais Curtos */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Caminhos Mais Curtos</h2>
        <p style={S.p}><strong>Algoritmo de Dijkstra</strong> resolve o problema de Single-Source Shortest Path (SSSP) em grafos pesados com pesos não-negativos. Mantém uma estimativa de distância d[v] para cada vértice, inicialmente ∞ (excepto a fonte). Em cada iteração, selecciona o vértice não visitado com menor distância e relaxa as suas arestas: se d[u] + w(u, v) &lt; d[v], actualiza d[v]. Complexidade: O(V²) com array simples, O((V + E) log V) com min-heap. Não funciona com pesos negativos.</p>
        <p style={S.p}><strong>Bellman-Ford</strong> permite pesos negativos e detecta ciclos negativos. Executa V−1 iterações de relaxação sobre todas as arestas. Se uma V-ésima iteração ainda actualiza distâncias, existe ciclo negativo. Complexidade: O(VE). Mais lento que Dijkstra mas mais geral. SPFA (Shortest Path Faster Algorithm) é uma variante com fila que funciona melhor na prática.</p>
        <p style={S.p}><strong>Floyd-Warshall</strong> resolve All-Pairs Shortest Path (APSP) com programação dinâmica: d[i][j][k] = distância mais curta de i a j usando apenas os primeiros k vértices como intermediários. Recorrência: d[i][j] = min(d[i][j], d[i][k] + d[k][j]). Complexidade: O(V³). Detecta ciclos negativos (d[i][i] &lt; 0). Adequado para grafos densos pequenos ou quando se necessita de todas as distâncias.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Comparação:</strong> Dijkstra — O((V+E) log V), sem negativos, SSSP. Bellman-Ford — O(VE), com negativos, detecta ciclos negativos, SSSP. Floyd-Warshall — O(V³), APSP, grafos densos. Johnson's algorithm — O(V² log V + VE), APSP em grafos esparsos (usa Bellman-Ford + Dijkstra com re-pesagem).</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 580 180" width="100%" style={{display:'block'}}>
            <text x="290" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Dijkstra — Grafo pesado, 6 nós, actualização de distâncias</text>
            {/* Nodes */}
            <circle cx="80" cy="90" r="18" fill={`${C}50`} stroke={C} strokeWidth="2.5"/>
            <text x="80" y="95" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">S</text>
            <text x="80" y="118" fill={C} fontSize="10" textAnchor="middle">d=0</text>

            <circle cx="200" cy="45" r="16" fill={`${C}25`} stroke={C} strokeWidth="2"/>
            <text x="200" y="50" fill="#e2e8f0" fontSize="12" textAnchor="middle">A</text>
            <text x="200" y="73" fill={C} fontSize="10" textAnchor="middle">d=4</text>

            <circle cx="200" cy="135" r="16" fill={`${C}25`} stroke={C} strokeWidth="2"/>
            <text x="200" y="140" fill="#e2e8f0" fontSize="12" textAnchor="middle">B</text>
            <text x="200" y="163" fill={C} fontSize="10" textAnchor="middle">d=2</text>

            <circle cx="340" cy="45" r="16" fill={`${C}15`} stroke="#fb923c" strokeWidth="1.5"/>
            <text x="340" y="50" fill="#e2e8f0" fontSize="12" textAnchor="middle">C</text>
            <text x="340" y="73" fill="#fb923c" fontSize="10" textAnchor="middle">d=7</text>

            <circle cx="340" cy="135" r="16" fill={`${C}15`} stroke="#fb923c" strokeWidth="1.5"/>
            <text x="340" y="140" fill="#e2e8f0" fontSize="12" textAnchor="middle">D</text>
            <text x="340" y="163" fill="#fb923c" fontSize="10" textAnchor="middle">d=5</text>

            <circle cx="470" cy="90" r="16" fill="transparent" stroke="#64748b" strokeWidth="1.5"/>
            <text x="470" y="95" fill="#94a3b8" fontSize="12" textAnchor="middle">T</text>
            <text x="470" y="118" fill="#64748b" fontSize="10" textAnchor="middle">d=9</text>

            {/* Edges with weights */}
            <line x1="98" y1="79" x2="184" y2="52" stroke={C} strokeWidth="2"/>
            <text x="137" y="58" fill="#e2e8f0" fontSize="10" textAnchor="middle">4</text>

            <line x1="98" y1="101" x2="184" y2="128" stroke={C} strokeWidth="2.5"/>
            <text x="137" y="122" fill={C} fontSize="10" fontWeight="bold" textAnchor="middle">2</text>

            <line x1="216" y1="50" x2="324" y2="50" stroke="#fb923c" strokeWidth="1.5"/>
            <text x="270" y="44" fill="#e2e8f0" fontSize="10" textAnchor="middle">3</text>

            <line x1="216" y1="140" x2="324" y2="140" stroke="#fb923c" strokeWidth="2"/>
            <text x="270" y="157" fill="#e2e8f0" fontSize="10" textAnchor="middle">3</text>

            <line x1="216" y1="55" x2="325" y2="128" stroke="#64748b" strokeWidth="1"/>
            <text x="275" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">8</text>

            <line x1="216" y1="130" x2="325" y2="57" stroke="#64748b" strokeWidth="1"/>

            <line x1="356" y1="52" x2="454" y2="82" stroke="#64748b" strokeWidth="1.5"/>
            <text x="410" y="60" fill="#94a3b8" fontSize="10" textAnchor="middle">2</text>

            <line x1="356" y1="128" x2="454" y2="98" stroke="#64748b" strokeWidth="1.5"/>
            <text x="410" y="125" fill="#94a3b8" fontSize="10" textAnchor="middle">4</text>

            {/* Shortest path highlight */}
            <line x1="98" y1="101" x2="184" y2="128" stroke={C} strokeWidth="3" opacity="0.6"/>
            <line x1="216" y1="140" x2="324" y2="140" stroke={C} strokeWidth="3" opacity="0.6"/>
            <line x1="356" y1="128" x2="454" y2="98" stroke={C} strokeWidth="3" opacity="0.6"/>
            <text x="290" y="175" fill={C} fontSize="10" textAnchor="middle">Caminho mínimo S→T: S→B→D→T = 9</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3. Ordenação Topológica */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Ordenação Topológica</h2>
        <p style={S.p}>Um <strong>DAG</strong> (Directed Acyclic Graph) é um dígrafo sem ciclos dirigidos. A <strong>ordenação topológica</strong> é uma linearização dos vértices tal que para toda a aresta (u, v), u aparece antes de v na ordenação. Existe se e só se o grafo é um DAG — equivalentemente, não existe ordenação topológica se e só se existe um ciclo.</p>
        <p style={S.p}>O <strong>algoritmo de Kahn</strong> usa BFS com in-degrees: inicializa uma fila com todos os vértices de in-degree 0; remove um vértice, diminui o in-degree dos seus vizinhos, e adiciona à fila os que ficam com in-degree 0. Complexidade: O(V + E). Se o grafo tiver ciclos, nem todos os vértices serão processados — detecção de ciclo gratuita. A abordagem baseada em <strong>DFS</strong> ordena vértices por tempo de finalização decrescente.</p>
        <p style={S.p}><strong>Aplicações críticas:</strong> build systems (Make, Gradle, Bazel) que compilam ficheiros por ordem de dependências; gestores de pacotes (pip, npm, cargo) que instalam dependências na ordem correcta; scheduling de tarefas com pré-requisitos; compilação de expressões em circuitos aritméticos; resolução de folhas de cálculo com dependências entre células.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Detecção de ciclos:</strong> Em grafos não-dirigidos, DFS detecta um ciclo quando encontra uma back edge (aresta para ancestral). Em dígrafos, um ciclo existe ↔ DFS encontra uma back edge ↔ não existe ordenação topológica. A complexidade de detecção é O(V + E) em ambos os casos.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 580 200" width="100%" style={{display:'block'}}>
            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={C}/>
              </marker>
              <marker id="arr2r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f97316"/>
              </marker>
            </defs>
            <text x="290" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">DAG de dependências de tarefas com ordenação topológica</text>
            {/* Nodes */}
            {[
              {x:60, y:110, label:'A', n:'1'},
              {x:160, y:75, label:'B', n:'2'},
              {x:160, y:145, label:'C', n:'3'},
              {x:270, y:110, label:'D', n:'4'},
              {x:380, y:75, label:'E', n:'5'},
              {x:380, y:145, label:'F', n:'6'},
              {x:490, y:110, label:'G', n:'7'},
            ].map(({x,y,label,n}) => (
              <g key={label}>
                <circle cx={x} cy={y} r="16" fill={`${C}20`} stroke={C} strokeWidth="1.5"/>
                <text x={x} y={y+4} fill="#e2e8f0" fontSize="12" textAnchor="middle">{label}</text>
                <rect x={x-10} y={y-32} width="20" height="14" rx="4" fill={`${C}40`}/>
                <text x={x} y={y-22} fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">#{n}</text>
              </g>
            ))}
            {/* Edges */}
            <line x1="76" y1="103" x2="144" y2="83" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <line x1="76" y1="117" x2="144" y2="139" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <line x1="176" y1="82" x2="254" y2="105" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <line x1="176" y1="139" x2="254" y2="115" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <line x1="286" y1="103" x2="364" y2="82" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <line x1="286" y1="117" x2="364" y2="139" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <line x1="396" y1="82" x2="474" y2="105" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <line x1="396" y1="139" x2="474" y2="115" stroke={C} strokeWidth="1.5" markerEnd="url(#arr2)"/>
            {/* Cycle back edge (error) */}
            <path d="M 380 161 Q 380 182 270 182 Q 160 182 160 161" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#arr2r)" strokeDasharray="4,3"/>
            <text x="270" y="170" fill="#f97316" fontSize="9" textAnchor="middle">ciclo → sem ordenação topológica</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4. Algoritmos Avançados */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Algoritmos Avançados — Pontes e SCCs</h2>
        <p style={S.p}>O <strong>algoritmo de Tarjan para pontes e pontos de articulação</strong> usa DFS e atribui a cada vértice v um discovery time disc[v] e um low-link value low[v] = min discovery time alcançável por v via back edges. Uma aresta (u, v) é ponte se low[v] &gt; disc[u] — o que significa que v não pode alcançar u ou os seus ancestrais sem usar esta aresta. Um vértice u é ponto de articulação se tem um filho v na árvore DFS com low[v] ≥ disc[u].</p>
        <p style={S.p}>O <strong>algoritmo de Tarjan para SCCs</strong> encontra todas as componentes fortemente conexas num único DFS em O(V + E). Mantém uma pilha de vértices visitados; quando um vértice v tem low[v] = disc[v] (não consegue alcançar ancestrais), emite todos os vértices na pilha até v como uma SCC. O <strong>algoritmo de Kosaraju</strong> usa dois DFS: primeiro no grafo original, depois no transposto G^T, por ordem decrescente de tempo de finalização — também O(V + E).</p>
        <p style={S.p}><strong>Condensação</strong> é o DAG obtido ao contrair cada SCC num único nó — sempre um DAG, usado para análise de dependências. <strong>2-SAT</strong> é o problema de satisfatibilidade com cláusulas de exactamente 2 literais (x ∨ y equivale a ¬x → y e ¬y → x). Reduz-se a encontrar SCCs no grafo de implicações: satisfatível ↔ nenhuma variável e a sua negação estão na mesma SCC. Complexidade: O(V + E).</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Aplicações práticas:</strong> SCCs identificam grupos de módulos com dependências circulares em sistemas de software (npm, pip). Pontes identificam pontos únicos de falha em redes de comunicação. 2-SAT resolve problemas de atribuição com restrições binárias em optimização e verificação formal.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}><strong>BFS</strong> explora por camadas (FIFO), garante caminho mais curto em grafos não-ponderados e corre em O(V+E).</li>
              <li style={{marginBottom:"0.5rem"}}><strong>DFS</strong> explora em profundidade (LIFO/recursão), gera timestamps de descoberta/finalização úteis para ordenação topológica e SCCs.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Dijkstra</strong> resolve SSSP em grafos ponderados sem arestas negativas em O((V+E)log V) com heap; <strong>Bellman-Ford</strong> tolera pesos negativos em O(VE).</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Ordenação topológica</strong> (DFS ou Kahn) ordena DAGs linearmente — pré-requisito para programação dinâmica em grafos dirigidos acíclicos.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Pontes e SCCs</strong>: o algoritmo de Tarjan/Kosaraju encontra componentes fortemente conexas em O(V+E); pontes são arestas cuja remoção desconecta o grafo.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
