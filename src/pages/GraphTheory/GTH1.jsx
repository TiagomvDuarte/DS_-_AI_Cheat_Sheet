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

export default function GTH1() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[0].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Fundamentos de Grafos</h1>
      <p style={S.sub}>Definições formais, tipos de grafos, representações computacionais, grau, caminhos e propriedades especiais — as bases da teoria de grafos desde Euler até à modernidade.</p>

      {/* 1. Definições e Tipos */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Definições e Tipos</h2>
        <p style={S.p}>Um grafo é formalmente definido como um par <strong>G = (V, E)</strong>, onde V é o conjunto de vértices (nós) e E ⊆ V × V é o conjunto de arestas. Esta abstração matemática surgiu em 1736, quando Leonhard Euler resolveu o problema das Sete Pontes de Königsberg — demonstrando que não existe percurso que atravesse cada ponte exactamente uma vez — criando assim o primeiro teorema da teoria de grafos.</p>
        <p style={S.p}>Um <strong>grafo não-dirigido</strong> tem arestas sem orientação: {'{u, v}'} = {'{v, u}'}. Um <strong>grafo dirigido</strong> (dígrafo) tem arestas com direcção: (u → v) != (v → u). Um <strong>grafo pesado</strong> associa um peso w(e) ∈ ℝ a cada aresta. Um <strong>multigrafo</strong> permite múltiplas arestas entre o mesmo par de vértices. Um <strong>hipergrafo</strong> generaliza arestas para subconjuntos de qualquer cardinalidade. Um <strong>grafo simples</strong> não tem self-loops (arestas de um vértice para si próprio) nem arestas múltiplas.</p>
        <p style={S.p}>Grafos importantes: <strong>K_n</strong> — grafo completo com n vértices (toda a aresta existe); <strong>K_{'{m,n}'}</strong> — grafo bipartido completo; <strong>P_n</strong> — grafo caminho com n vértices; <strong>C_n</strong> — ciclo com n vértices. Um <strong>grafo bipartido</strong> tem V = A ∪ B tal que todas as arestas ligam A a B. O <strong>isomorfismo de grafos</strong> — determinar se dois grafos são estruturalmente idênticos — é NP-difícil em geral (embora algoritmos quasi-polinomiais existam desde Babai 2016).</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Definições fundamentais:</strong> Um <em>subgrafo</em> G' = (V', E') satisfaz V' ⊆ V e E' ⊆ E ∩ (V' × V'). O <em>grafo complementar</em> Ḡ tem as mesmas arestas que faltam em G. Dois grafos são <em>isomorfos</em> se existe uma bijecção f: V₁ → V₂ que preserva adjacências.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 780 200" width="100%" style={{display:'block'}}>
            {/* Directed graph */}
            <text x="90" y="18" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Dirigido</text>
            <circle cx="50" cy="60" r="14" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="2"/>
            <circle cx="130" cy="40" r="14" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="2"/>
            <circle cx="130" cy="100" r="14" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="2"/>
            <circle cx="50" cy="130" r="14" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="2"/>
            <circle cx="90" cy="85" r="14" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="2"/>
            <text x="50" y="65" fill="#f97316" fontSize="11" textAnchor="middle">A</text>
            <text x="130" y="45" fill="#f97316" fontSize="11" textAnchor="middle">B</text>
            <text x="130" y="105" fill="#f97316" fontSize="11" textAnchor="middle">C</text>
            <text x="50" y="135" fill="#f97316" fontSize="11" textAnchor="middle">D</text>
            <text x="90" y="90" fill="#f97316" fontSize="11" textAnchor="middle">E</text>
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={C}/>
              </marker>
            </defs>
            <line x1="63" y1="55" x2="115" y2="46" stroke={C} strokeWidth="1.5" markerEnd="url(#arr)"/>
            <line x1="130" y1="54" x2="100" y2="73" stroke={C} strokeWidth="1.5" markerEnd="url(#arr)"/>
            <line x1="63" y1="68" x2="77" y2="76" stroke={C} strokeWidth="1.5" markerEnd="url(#arr)"/>
            <line x1="90" y1="99" x2="63" y2="118" stroke={C} strokeWidth="1.5" markerEnd="url(#arr)"/>
            <line x1="103" y1="90" x2="117" y2="93" stroke={C} strokeWidth="1.5" markerEnd="url(#arr)"/>

            {/* Undirected graph */}
            <text x="290" y="18" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Não-Dirigido</text>
            <circle cx="250" cy="60" r="14" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="2"/>
            <circle cx="330" cy="40" r="14" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="2"/>
            <circle cx="330" cy="100" r="14" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="2"/>
            <circle cx="250" cy="130" r="14" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="2"/>
            <circle cx="290" cy="85" r="14" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="2"/>
            <text x="250" y="65" fill="#fb923c" fontSize="11" textAnchor="middle">A</text>
            <text x="330" y="45" fill="#fb923c" fontSize="11" textAnchor="middle">B</text>
            <text x="330" y="105" fill="#fb923c" fontSize="11" textAnchor="middle">C</text>
            <text x="250" y="135" fill="#fb923c" fontSize="11" textAnchor="middle">D</text>
            <text x="290" y="90" fill="#fb923c" fontSize="11" textAnchor="middle">E</text>
            <line x1="263" y1="55" x2="316" y2="46" stroke="#fb923c" strokeWidth="1.5"/>
            <line x1="330" y1="54" x2="300" y2="73" stroke="#fb923c" strokeWidth="1.5"/>
            <line x1="263" y1="68" x2="277" y2="76" stroke="#fb923c" strokeWidth="1.5"/>
            <line x1="290" y1="99" x2="263" y2="118" stroke="#fb923c" strokeWidth="1.5"/>
            <line x1="303" y1="90" x2="317" y2="93" stroke="#fb923c" strokeWidth="1.5"/>
            <line x1="250" y1="74" x2="250" y2="116" stroke="#fb923c" strokeWidth="1.5"/>

            {/* Bipartite */}
            <text x="490" y="18" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Bipartido K₂,₃</text>
            <circle cx="450" cy="50" r="14" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="2"/>
            <circle cx="450" cy="120" r="14" fill="rgba(249,115,22,0.15)" stroke={C} strokeWidth="2"/>
            <circle cx="530" cy="40" r="14" fill="rgba(253,186,116,0.15)" stroke="#fdba74" strokeWidth="2"/>
            <circle cx="530" cy="85" r="14" fill="rgba(253,186,116,0.15)" stroke="#fdba74" strokeWidth="2"/>
            <circle cx="530" cy="130" r="14" fill="rgba(253,186,116,0.15)" stroke="#fdba74" strokeWidth="2"/>
            <text x="450" y="55" fill="#f97316" fontSize="11" textAnchor="middle">u₁</text>
            <text x="450" y="125" fill="#f97316" fontSize="11" textAnchor="middle">u₂</text>
            <text x="530" y="45" fill="#fdba74" fontSize="11" textAnchor="middle">v₁</text>
            <text x="530" y="90" fill="#fdba74" fontSize="11" textAnchor="middle">v₂</text>
            <text x="530" y="135" fill="#fdba74" fontSize="11" textAnchor="middle">v₃</text>
            <line x1="464" y1="50" x2="516" y2="44" stroke={C} strokeWidth="1.5"/>
            <line x1="464" y1="54" x2="516" y2="80" stroke={C} strokeWidth="1.5"/>
            <line x1="464" y1="57" x2="516" y2="126" stroke={C} strokeWidth="1.5"/>
            <line x1="464" y1="120" x2="516" y2="50" stroke={C} strokeWidth="1.5"/>
            <line x1="464" y1="120" x2="516" y2="89" stroke={C} strokeWidth="1.5"/>
            <line x1="464" y1="120" x2="516" y2="130" stroke={C} strokeWidth="1.5"/>

            {/* K4 complete */}
            <text x="680" y="18" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">K₄ Completo</text>
            <circle cx="650" cy="50" r="14" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="710" cy="50" r="14" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="680" cy="120" r="14" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="680" cy="80" r="14" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="2"/>
            <text x="650" y="55" fill="#f59e0b" fontSize="11" textAnchor="middle">1</text>
            <text x="710" y="55" fill="#f59e0b" fontSize="11" textAnchor="middle">2</text>
            <text x="680" y="125" fill="#f59e0b" fontSize="11" textAnchor="middle">4</text>
            <text x="680" y="85" fill="#f59e0b" fontSize="11" textAnchor="middle">3</text>
            <line x1="664" y1="50" x2="696" y2="50" stroke="#f59e0b" strokeWidth="1.5"/>
            <line x1="650" y1="64" x2="672" y2="108" stroke="#f59e0b" strokeWidth="1.5"/>
            <line x1="650" y1="60" x2="666" y2="72" stroke="#f59e0b" strokeWidth="1.5"/>
            <line x1="710" y1="64" x2="688" y2="108" stroke="#f59e0b" strokeWidth="1.5"/>
            <line x1="710" y1="60" x2="694" y2="72" stroke={C} strokeWidth="1.5"/>
            <line x1="680" y1="94" x2="680" y2="106" stroke={C} strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2. Representações */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Representações</h2>
        <p style={S.p}>A escolha de representação tem impacto directo na complexidade dos algoritmos. A <strong>matriz de adjacência</strong> A[i][j] = 1 se existe aresta (i, j), 0 caso contrário. Ocupa O(V²) espaço e permite lookup em O(1), mas é ineficiente para grafos esparsos. A <strong>lista de adjacência</strong> armazena, para cada vértice, a lista dos seus vizinhos: O(V + E) espaço, O(grau) para verificar adjacência. É a representação padrão para grafos esparsos.</p>
        <p style={S.p}>A <strong>matriz de incidência</strong> tem dimensões V × E: M[v][e] = 1 se v é endpoint de e. Útil em análise espectral. Em Python, o NetworkX usa dicionários de listas; scipy.sparse implementa representações CSR/CSC eficientes para álgebra linear; PyTorch Geometric (PyG) usa tensores de edge_index com forma [2, E] para GNNs.</p>
        <p style={S.p}><strong>Grau de um vértice:</strong> d(v) = número de vizinhos de v (em grafos não-dirigidos). Em dígrafos, distinguem-se grau de entrada (in-degree) e de saída (out-degree). O <strong>Lema do Handshaking</strong> estabelece que Σ_{'{v∈V}'} d(v) = 2|E|, pois cada aresta contribui exactamente duas vezes para a soma total de graus. Define-se grau mínimo δ(G) = min d(v), máximo Δ(G) = max d(v), e grau médio k̄ = 2|E|/|V|.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Trade-offs práticos:</strong> Grafos densos (E ≈ V²) → matriz de adjacência. Grafos esparsos (E ≈ V) → lista de adjacência. Para verificar se dois vértices são adjacentes: O(1) vs O(d(v)). Para iterar vizinhos: O(V) vs O(d(v)). A maioria das redes reais (sociais, biológicas, web) são esparsas com k̄ ≪ V.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3. Caminhos e Conectividade */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Caminhos e Conectividade</h2>
        <p style={S.p}>Um <strong>caminho</strong> é uma sequência de vértices v₀, v₁, …, v_k onde todos os vértices são distintos e cada par consecutivo é adjacente. Um <strong>trilho</strong> (walk) permite repetir vértices mas não arestas. Um <strong>circuito</strong> é um trilho fechado (v₀ = v_k). O <strong>comprimento</strong> de um caminho é o número de arestas. A <strong>distância</strong> d(u, v) é o comprimento do caminho mais curto; o <strong>diâmetro</strong> diam(G) = max_{'{u,v}'} d(u, v).</p>
        <p style={S.p}>Um grafo é <strong>conexo</strong> se existe caminho entre qualquer par de vértices. As <strong>componentes conexas</strong> são os subgrafos conexos maximais. A <strong>conectividade de vértice</strong> κ(G) é o número mínimo de vértices cuja remoção desconecta G (ou o torna trivial). A <strong>conectividade de aresta</strong> κ'(G) é o mínimo número de arestas cuja remoção desconecta G. O <strong>Teorema de Menger</strong> afirma que κ(G) = número máximo de caminhos internamente disjuntos entre qualquer par de vértices.</p>
        <p style={S.p}><strong>Pontes</strong> são arestas cuja remoção aumenta o número de componentes conexas. <strong>Pontos de articulação</strong> (cut vertices) são vértices cuja remoção aumenta o número de componentes. Ambos identificam vulnerabilidades estruturais em redes — detectados em O(V + E) por DFS (algoritmo de Tarjan).</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Hierarquia de conectividade:</strong> κ(G) ≤ κ'(G) ≤ δ(G). Ou seja, a conectividade de vértice nunca supera a de aresta, que por sua vez nunca supera o grau mínimo. Grafos 3-conexos são particularmente robustos — a remoção de qualquer 2 vértices não desconecta o grafo.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 600 210" width="100%" style={{display:'block'}}>
            <text x="300" y="16" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">BFS — Camadas a partir da fonte S</text>
            {/* Layer 0: S */}
            <circle cx="80" cy="110" r="18" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="80" y="115" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">S</text>
            {/* Layer 1 */}
            <circle cx="200" cy="70" r="16" fill={`${C}25`} stroke={C} strokeWidth="1.5"/>
            <circle cx="200" cy="150" r="16" fill={`${C}25`} stroke={C} strokeWidth="1.5"/>
            <text x="200" y="75" fill="#f97316" fontSize="11" textAnchor="middle">A</text>
            <text x="200" y="155" fill="#f97316" fontSize="11" textAnchor="middle">B</text>
            {/* Layer 2 */}
            <circle cx="340" cy="50" r="16" fill="rgba(253,186,116,0.15)" stroke="#fdba74" strokeWidth="1.5"/>
            <circle cx="340" cy="110" r="16" fill="rgba(253,186,116,0.15)" stroke="#fdba74" strokeWidth="1.5"/>
            <circle cx="340" cy="170" r="16" fill="rgba(253,186,116,0.15)" stroke="#fdba74" strokeWidth="1.5"/>
            <text x="340" y="55" fill="#fdba74" fontSize="11" textAnchor="middle">C</text>
            <text x="340" y="115" fill="#fdba74" fontSize="11" textAnchor="middle">D</text>
            <text x="340" y="175" fill="#fdba74" fontSize="11" textAnchor="middle">E</text>
            {/* Layer 3 */}
            <circle cx="470" cy="75" r="16" fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth="1.5"/>
            <circle cx="470" cy="145" r="16" fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="470" y="80" fill="#f59e0b" fontSize="11" textAnchor="middle">F</text>
            <text x="470" y="150" fill="#f59e0b" fontSize="11" textAnchor="middle">G</text>
            {/* Edges BFS tree */}
            <line x1="98" y1="100" x2="184" y2="77" stroke={C} strokeWidth="2"/>
            <line x1="98" y1="120" x2="184" y2="143" stroke={C} strokeWidth="2"/>
            <line x1="216" y1="64" x2="324" y2="56" stroke="#fb923c" strokeWidth="2"/>
            <line x1="216" y1="75" x2="324" y2="102" stroke="#fb923c" strokeWidth="2"/>
            <line x1="216" y1="156" x2="324" y2="167" stroke="#fb923c" strokeWidth="2"/>
            <line x1="356" y1="58" x2="454" y2="69" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="356" y1="118" x2="454" y2="137" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
            {/* Layer labels */}
            <text x="80" y="140" fill={C} fontSize="10" textAnchor="middle">d=0</text>
            <text x="200" y="180" fill="#fb923c" fontSize="10" textAnchor="middle">d=1</text>
            <text x="340" y="198" fill="#fdba74" fontSize="10" textAnchor="middle">d=2</text>
            <text x="470" y="175" fill="#f59e0b" fontSize="10" textAnchor="middle">d=3</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4. Propriedades Especiais */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Propriedades Especiais</h2>
        <p style={S.p}>Um <strong>grafo Euleriano</strong> possui um circuito que usa cada aresta exactamente uma vez (circuito Euleriano). A condição necessária e suficiente (Euler, 1736) é: o grafo é conexo e todos os vértices têm grau par. Se exactamente dois vértices têm grau ímpar, existe um trilho Euleriano (mas não circuito) entre esses dois vértices — a situação exacta das pontes de Königsberg com 4 nós de grau ímpar.</p>
        <p style={S.p}>Um <strong>grafo Hamiltoniano</strong> possui um ciclo que visita cada vértice exactamente uma vez. Ao contrário do caso Euleriano, não existe caracterização eficiente: determinar se um grafo é Hamiltoniano é NP-completo. O <strong>Teorema de Dirac</strong> fornece uma condição suficiente: se δ(G) ≥ n/2 (grau mínimo pelo menos metade do número de vértices), então G é Hamiltoniano.</p>
        <p style={S.p}>Um <strong>grafo planar</strong> pode ser desenhado no plano sem cruzamentos de arestas. O <strong>Teorema de Kuratowski</strong> caracteriza grafos planares: G é planar se e só se não contém subdivisão de K₅ ou K_{'{3,3}'}. Para grafos planares conexos, a fórmula de Euler estabelece V − E + F = 2, onde F é o número de faces (incluindo a face exterior). O <strong>Teorema das 4 Cores</strong> (Appel & Haken, 1976 — primeiro teorema provado por computador, com verificação assistida por computador) afirma que qualquer mapa planar pode ser colorido com no máximo 4 cores de forma que regiões adjacentes tenham cores distintas.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Cromaticidade e Planaridade:</strong> O número cromático χ(G) é o mínimo de cores necessárias para colorir os vértices de G sem dois adjacentes com a mesma cor. Grafos bipartidos têm χ = 2 (ou 1 se sem arestas). Para grafos planares, χ(G) ≤ 4 pelo Teorema das 4 Cores. Grafos perfeitos satisfazem χ(G) = ω(G) para todos os subgrafos induzidos, onde ω(G) é o tamanho do maior clique.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}>Um <strong>grafo G=(V,E)</strong> é definido por vértices e arestas; pode ser dirigido (dígrafos) ou não-dirigido, ponderado ou não.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Representações</strong>: matriz de adjacência (O(V²), acesso O(1)) vs. lista de adjacência (O(V+E), eficiente para grafos esparsos).</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Caminhos e conectividade</strong>: um grafo é conexo se existe caminho entre todo o par de vértices; componentes conexas identificam sub-grafos isolados.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Grafos especiais</strong>: árvores (acíclicos conexos), bipartidos (2-coloríveis), completos K_n, planares (sem cruzamentos de arestas) e grafos eulerianos/hamiltonianos.</li>
              <li style={{marginBottom:"0.5rem"}}>O <strong>grau</strong> de um vértice (in-degree/out-degree em dígrafos) determina conectividade local; o handshaking lemma garante Σdeg = 2|E|.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
