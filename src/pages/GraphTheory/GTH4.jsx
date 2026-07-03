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

export default function GTH4() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[3].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Fluxo em Redes</h1>
      <p style={S.sub}>Formulação de redes de fluxo, Ford-Fulkerson e Edmonds-Karp, o teorema max-flow min-cut, algoritmos modernos de fluxo e aplicações em matching bipartido, scheduling e optimização combinatória.</p>

      {/* 1. Formulação */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Formulação do Problema</h2>
        <p style={S.p}>Uma <strong>rede de fluxo</strong> é um dígrafo G = (V, E, s, t, c) com uma fonte s (source), um sumidouro t (sink) e uma função de capacidade c: E → ℝ⁺. Um <strong>fluxo</strong> f: E → ℝ satisfaz duas propriedades: (1) <em>restrição de capacidade</em> — 0 ≤ f(e) ≤ c(e) para toda a aresta e; (2) <em>conservação de fluxo</em> — para todo o vértice v != s, t, o fluxo que entra é igual ao fluxo que sai: Σ f(u,v) = Σ f(v,w).</p>
        <p style={S.p}>O <strong>valor do fluxo</strong> |f| é definido como o fluxo total que sai da fonte s (ou equivalentemente, o que entra em t). O <strong>problema de fluxo máximo</strong> consiste em encontrar um fluxo f que maximize |f|. Pode-se assumir sem perda de generalidade que o grafo é simples e que para cada aresta (u, v) existe a aresta reversa (v, u) — necessária para o grafo residual.</p>
        <p style={S.p}><strong>Aplicações:</strong> redes de transporte (maximizar mercadoria de origem a destino com capacidades nas rotas); scheduling de tarefas com recursos limitados; matching bipartido máximo (reduz directamente a max-flow); segmentação de imagens por s-t cut (graph cuts em visão computacional); routing em redes de telecomunicação; flow shop scheduling em produção industrial.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 560 200" width="100%" style={{display:'block'}}>
            <defs>
              <marker id="arrf" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={C}/>
              </marker>
              <marker id="arrfg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
              </marker>
            </defs>
            <text x="280" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Rede de fluxo — formato fluxo/capacidade em cada aresta</text>
            {/* Source */}
            <circle cx="60" cy="100" r="20" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="60" y="105" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">s</text>
            {/* Intermediate nodes */}
            <circle cx="190" cy="55" r="16" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2"/>
            <circle cx="190" cy="150" r="16" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2"/>
            <circle cx="350" cy="55" r="16" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2"/>
            <circle cx="350" cy="150" r="16" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="2"/>
            <text x="190" y="60" fill="#e2e8f0" fontSize="12" textAnchor="middle">A</text>
            <text x="190" y="155" fill="#e2e8f0" fontSize="12" textAnchor="middle">B</text>
            <text x="350" y="60" fill="#e2e8f0" fontSize="12" textAnchor="middle">C</text>
            <text x="350" y="155" fill="#e2e8f0" fontSize="12" textAnchor="middle">D</text>
            {/* Sink */}
            <circle cx="490" cy="100" r="20" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="490" y="105" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">t</text>

            {/* Edges with flow/capacity labels */}
            <line x1="80" y1="90" x2="174" y2="62" stroke={C} strokeWidth="2" markerEnd="url(#arrf)"/>
            <text x="120" y="68" fill="#e2e8f0" fontSize="11" textAnchor="middle">10/15</text>

            <line x1="80" y1="110" x2="174" y2="143" stroke={C} strokeWidth="2" markerEnd="url(#arrf)"/>
            <text x="120" y="136" fill="#e2e8f0" fontSize="11" textAnchor="middle">8/10</text>

            <line x1="206" y1="55" x2="334" y2="55" stroke={C} strokeWidth="2" markerEnd="url(#arrf)"/>
            <text x="270" y="48" fill="#e2e8f0" fontSize="11" textAnchor="middle">10/12</text>

            <line x1="190" y1="71" x2="190" y2="134" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrfg)"/>
            <text x="177" y="106" fill="#94a3b8" fontSize="10" textAnchor="middle">2/5</text>

            <line x1="206" y1="62" x2="334" y2="143" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrfg)"/>
            <text x="268" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">0/8</text>

            <line x1="206" y1="150" x2="334" y2="150" stroke={C} strokeWidth="2" markerEnd="url(#arrf)"/>
            <text x="270" y="167" fill="#e2e8f0" fontSize="11" textAnchor="middle">8/10</text>

            <line x1="366" y1="62" x2="470" y2="90" stroke={C} strokeWidth="2" markerEnd="url(#arrf)"/>
            <text x="424" y="68" fill="#e2e8f0" fontSize="11" textAnchor="middle">10/13</text>

            <line x1="366" y1="143" x2="470" y2="110" stroke={C} strokeWidth="2" markerEnd="url(#arrf)"/>
            <text x="424" y="135" fill="#e2e8f0" fontSize="11" textAnchor="middle">8/9</text>

            <text x="280" y="190" fill="#64748b" fontSize="10" textAnchor="middle">|f| = 18</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2. Ford-Fulkerson e Edmonds-Karp */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Ford-Fulkerson e Edmonds-Karp</h2>
        <p style={S.p}>O método de <strong>Ford-Fulkerson</strong> (1956) baseia-se na ideia de augmenting paths. O <strong>grafo residual</strong> G_f contém, para cada aresta (u, v) com fluxo f(u,v) e capacidade c(u,v): uma aresta forward (u, v) com capacidade residual c(u,v) − f(u,v) e uma aresta backward (v, u) com capacidade f(u,v). Um augmenting path é qualquer caminho de s a t em G_f. O fluxo é aumentado pelo valor mínimo de capacidade no caminho (gargalo). O processo repete-se até não existir augmenting path.</p>
        <p style={S.p}>Ford-Fulkerson tem complexidade O(|f| × E), onde |f| é o valor do fluxo máximo. Com capacidades irracionais pode não terminar. <strong>Edmonds-Karp</strong> (1972) especifica usar BFS para encontrar o augmenting path mais curto (em número de arestas), garantindo terminação e complexidade O(VE²) independente dos valores das capacidades. A análise baseia-se no facto de que cada aresta pode ser gargalo no máximo O(VE/2) vezes, pois a distância de s a cada vértice nunca diminui entre iterações.</p>
        <p style={S.p}><strong>Capacidade de escalonamento:</strong> uma variante de Ford-Fulkerson que usa apenas augmenting paths com gargalo ≥ Δ (começando com Δ = 2^⌊log C⌋ e dividindo por 2). Complexidade: O(E² log C) para capacidades inteiras máximas C. Melhor que Edmonds-Karp quando as capacidades são grandes.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Grafo residual — intuição:</strong> A aresta backward permite "desfazer" fluxo previamente enviado. Isto é fundamental — sem ela, o algoritmo poderia ficar preso num fluxo subóptimo. O grafo residual captura exactamente o espaço de melhorias possíveis ao fluxo actual.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 560 185" width="100%" style={{display:'block'}}>
            <defs>
              <marker id="arrf2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill={C}/>
              </marker>
              <marker id="arrf2b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#fb923c"/>
              </marker>
            </defs>
            <text x="280" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Ford-Fulkerson — grafo residual e augmenting path destacado</text>
            {/* Original flow */}
            <text x="140" y="35" fill="#94a3b8" fontSize="10" textAnchor="middle">Fluxo actual</text>
            <circle cx="60" cy="80" r="16" fill={`${C}40`} stroke={C} strokeWidth="2"/>
            <text x="60" y="85" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">s</text>
            <circle cx="160" cy="55" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="160" y="60" fill="#e2e8f0" fontSize="11" textAnchor="middle">A</text>
            <circle cx="160" cy="110" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="160" y="115" fill="#e2e8f0" fontSize="11" textAnchor="middle">B</text>
            <circle cx="240" cy="80" r="16" fill={`${C}40`} stroke={C} strokeWidth="2"/>
            <text x="240" y="85" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">t</text>
            <line x1="76" y1="73" x2="146" y2="62" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf2)"/>
            <text x="105" y="60" fill="#e2e8f0" fontSize="9" textAnchor="middle">5/10</text>
            <line x1="76" y1="87" x2="146" y2="103" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf2)"/>
            <text x="105" y="102" fill="#e2e8f0" fontSize="9" textAnchor="middle">5/8</text>
            <line x1="174" y1="62" x2="226" y2="74" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf2)"/>
            <text x="203" y="60" fill="#e2e8f0" fontSize="9" textAnchor="middle">5/7</text>
            <line x1="174" y1="103" x2="226" y2="86" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf2)"/>
            <text x="203" y="104" fill="#e2e8f0" fontSize="9" textAnchor="middle">5/6</text>

            {/* Residual graph */}
            <text x="420" y="35" fill="#94a3b8" fontSize="10" textAnchor="middle">Grafo residual</text>
            <circle cx="330" cy="80" r="16" fill={`${C}40`} stroke={C} strokeWidth="2"/>
            <text x="330" y="85" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">s</text>
            <circle cx="430" cy="55" r="14" fill="rgba(249,115,22,0.06)" stroke="#fb923c" strokeWidth="2"/>
            <text x="430" y="60" fill="#fb923c" fontSize="11" textAnchor="middle">A</text>
            <circle cx="430" cy="110" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="430" y="115" fill="#e2e8f0" fontSize="11" textAnchor="middle">B</text>
            <circle cx="510" cy="80" r="16" fill={`${C}40`} stroke={C} strokeWidth="2"/>
            <text x="510" y="85" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">t</text>
            {/* Augmenting path highlighted */}
            <line x1="346" y1="73" x2="416" y2="62" stroke="#fb923c" strokeWidth="2.5" markerEnd="url(#arrf2b)"/>
            <text x="378" y="58" fill="#fb923c" fontSize="9" fontWeight="bold" textAnchor="middle">res=5</text>
            <line x1="444" y1="62" x2="496" y2="74" stroke="#fb923c" strokeWidth="2.5" markerEnd="url(#arrf2b)"/>
            <text x="474" y="58" fill="#fb923c" fontSize="9" fontWeight="bold" textAnchor="middle">res=2</text>
            {/* Backward edges */}
            <line x1="416" y1="68" x2="346" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arrf2)"/>
            <line x1="346" y1="87" x2="416" y2="103" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf2)"/>
            <text x="378" y="105" fill="#e2e8f0" fontSize="9" textAnchor="middle">res=3</text>
            <line x1="444" y1="103" x2="496" y2="86" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf2)"/>
            <text x="474" y="104" fill="#e2e8f0" fontSize="9" textAnchor="middle">res=1</text>

            <text x="420" y="145" fill="#fb923c" fontSize="10" textAnchor="middle">Augmenting path: s→A→t, gargalo=2</text>
            <text x="140" y="145" fill="#64748b" fontSize="10" textAnchor="middle">|f| actual = 10</text>

            <text x="280" y="170" fill={C} fontSize="10" textAnchor="middle">→ após augmentation: |f| = 12 (máximo)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3. Max-Flow Min-Cut */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Teorema Max-Flow Min-Cut</h2>
        <p style={S.p}>Um <strong>corte</strong> (S, T) é uma partição de V tal que s ∈ S e t ∈ T. A <strong>capacidade do corte</strong> cap(S, T) é a soma das capacidades das arestas que vão de S para T (arestas backward não contam). O <strong>Teorema Max-Flow Min-Cut</strong> (Ford & Fulkerson, 1956) afirma que o valor máximo de fluxo de s a t é igual à capacidade mínima de qualquer corte s-t.</p>
        <p style={S.p}>A demonstração usa três equivalências: (1) f é um fluxo máximo; (2) o grafo residual G_f não tem augmenting path (caminho de s a t); (3) existe um corte (S, T) com cap(S, T) = |f|. Para encontrar o corte mínimo: após Edmonds-Karp terminar, S = (vértices alcançáveis de s em G_f), T = V ∖ S. As arestas saturadas cruzando (S, T) formam o min-cut.</p>
        <p style={S.p}><strong>Algoritmos modernos:</strong> <em>Dinic</em> — O(V²E), usa BFS para construir grafo em camadas e DFS para encontrar blocking flows; muito mais rápido em prática. <em>Push-Relabel</em> (Goldberg-Tarjan) — O(V³), usa labels de altura e operações push/relabel locais. <em>HLPPS</em> (Highest-Label Push-Relabel) — O(V²√E), o mais rápido na prática para grafos gerais.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Intuição do Teorema:</strong> O fluxo não pode exceder a capacidade de nenhum corte (pois todo o fluxo deve atravessar o corte). Por outro lado, o algoritmo de Ford-Fulkerson garante que, quando termina, o fluxo actual satura exactamente um corte. A igualdade max-flow = min-cut estabelece que este corte é o gargalo global da rede.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 560 190" width="100%" style={{display:'block'}}>
            <defs>
              <marker id="arrf3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill={C}/>
              </marker>
              <marker id="arrf3s" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f59e0b"/>
              </marker>
            </defs>
            <text x="280" y="10" fill="#94a3b8" fontSize="12" textAnchor="middle">Max-flow min-cut — corte óptimo com arestas saturadas</text>
            {/* S partition background */}
            <ellipse cx="170" cy="95" rx="145" ry="75" fill="#ef444410" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3"/>
            <text x="60" y="180" fill={C} fontSize="11" fontWeight="bold">S</text>
            {/* T partition background */}
            <ellipse cx="420" cy="95" rx="125" ry="75" fill="#f9731610" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3"/>
            <text x="520" y="180" fill="#f97316" fontSize="11" fontWeight="bold">T</text>

            {/* Nodes */}
            <circle cx="60" cy="95" r="18" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="60" y="100" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">s</text>
            <circle cx="185" cy="55" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="185" y="60" fill="#e2e8f0" fontSize="11" textAnchor="middle">A</text>
            <circle cx="185" cy="140" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="185" y="145" fill="#e2e8f0" fontSize="11" textAnchor="middle">B</text>
            <circle cx="370" cy="55" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="370" y="60" fill="#e2e8f0" fontSize="11" textAnchor="middle">C</text>
            <circle cx="370" cy="140" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="370" y="145" fill="#e2e8f0" fontSize="11" textAnchor="middle">D</text>
            <circle cx="500" cy="95" r="18" fill="#f9731620" stroke="#f97316" strokeWidth="2.5"/>
            <text x="500" y="100" fill="#fff" fontSize="13" fontWeight="bold" textAnchor="middle">t</text>

            {/* Internal edges */}
            <line x1="78" y1="85" x2="171" y2="62" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf3)"/>
            <text x="118" y="65" fill="#e2e8f0" fontSize="9" textAnchor="middle">12/12</text>
            <line x1="78" y1="105" x2="171" y2="133" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf3)"/>
            <text x="118" y="128" fill="#e2e8f0" fontSize="9" textAnchor="middle">8/8</text>

            {/* Cut edges (saturated, highlighted yellow) */}
            <line x1="199" y1="55" x2="356" y2="55" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrf3s)"/>
            <text x="278" y="46" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">12/12 ★</text>
            <line x1="199" y1="140" x2="356" y2="140" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrf3s)"/>
            <text x="278" y="158" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">8/8 ★</text>

            {/* T-side edges */}
            <line x1="384" y1="62" x2="482" y2="85" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrf3)"/>
            <text x="438" y="65" fill="#e2e8f0" fontSize="9" textAnchor="middle">12/15</text>
            <line x1="384" y1="133" x2="482" y2="105" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrf3)"/>
            <text x="438" y="130" fill="#e2e8f0" fontSize="9" textAnchor="middle">8/10</text>

            {/* Cut label */}
            <line x1="282" y1="20" x2="282" y2="175" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="282" y="175" fill="#f59e0b" fontSize="10" textAnchor="middle">min-cut = 20</text>
            <text x="282" y="188" fill="#f59e0b" fontSize="10" textAnchor="middle">= max-flow</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4. Matching e Aplicações */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Matching e Aplicações</h2>
        <p style={S.p}>O <strong>matching bipartido máximo</strong> em G = (U ∪ V, E) reduz directamente a max-flow: adicionar super-source s com arestas de capacidade 1 para cada u ∈ U, aresta de capacidade 1 para cada (u, v) ∈ E, e arestas de capacidade 1 de cada v ∈ V para super-sink t. O fluxo máximo é o tamanho do matching máximo. O <strong>algoritmo de Hopcroft-Karp</strong> (1973) encontra o matching máximo em grafos bipartidos em O(E√V), usando BFS para encontrar caminhos de aumento mais curtos e DFS para aumentar o fluxo em múltiplos caminhos por fase.</p>
        <p style={S.p}>O <strong>Teorema de Hall</strong> (Marriage Theorem, 1935) afirma que um grafo bipartido G = (U ∪ V, E) tem um matching que cobre todo U se e só se para todo S ⊆ U, |N(S)| ≥ |S| (onde N(S) é o conjunto de vizinhos de S). É a base teórica para a existência de matchings perfeitos. O <strong>Algoritmo Húngaro</strong> resolve o problema de atribuição de custo mínimo (assignment problem) em O(V³): atribuir n trabalhadores a n tarefas minimizando o custo total.</p>
        <p style={S.p}><strong>Stable Matching</strong> (Gale-Shapley, 1962 — Nobel Economia 2012 a Roth e Shapley): dado n homens e n mulheres com preferências ordenadas, encontrar um matching estável (sem par que prefira mudar). Algoritmo deferred acceptance: O(n²). Aplicações: atribuição de residentes médicos a hospitais (NRMP — National Resident Matching Program usado nos EUA desde 1952), sistemas de admissão universitária, kidney exchange programs.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 560 185" width="100%" style={{display:'block'}}>
            <defs>
              <marker id="arrf4" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill={C}/>
              </marker>
              <marker id="arrf4g" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f97316"/>
              </marker>
            </defs>
            <text x="280" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Matching bipartido — augmenting path encontrado por Hopcroft-Karp</text>
            {/* Super source */}
            <circle cx="40" cy="95" r="16" fill={`${C}40`} stroke={C} strokeWidth="2"/>
            <text x="40" y="100" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">s</text>
            {/* U side */}
            <circle cx="150" cy="50" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <circle cx="150" cy="95" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <circle cx="150" cy="140" r="14" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="150" y="55" fill="#e2e8f0" fontSize="11" textAnchor="middle">u₁</text>
            <text x="150" y="100" fill="#e2e8f0" fontSize="11" textAnchor="middle">u₂</text>
            <text x="150" y="145" fill="#e2e8f0" fontSize="11" textAnchor="middle">u₃</text>
            {/* V side */}
            <circle cx="380" cy="50" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <circle cx="380" cy="95" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <circle cx="380" cy="140" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="380" y="55" fill="#e2e8f0" fontSize="11" textAnchor="middle">v₁</text>
            <text x="380" y="100" fill="#e2e8f0" fontSize="11" textAnchor="middle">v₂</text>
            <text x="380" y="145" fill="#e2e8f0" fontSize="11" textAnchor="middle">v₃</text>
            {/* Super sink */}
            <circle cx="500" cy="95" r="16" fill="#f9731620" stroke="#f97316" strokeWidth="2"/>
            <text x="500" y="100" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">t</text>

            {/* s → U edges */}
            <line x1="56" y1="85" x2="136" y2="57" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf4)"/>
            <line x1="56" y1="95" x2="136" y2="95" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf4)"/>
            <line x1="56" y1="105" x2="136" y2="133" stroke={C} strokeWidth="1.5" markerEnd="url(#arrf4)"/>

            {/* Bipartite edges — matched (green) and unmatched (gray) */}
            <line x1="164" y1="50" x2="366" y2="50" stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arrf4g)"/>
            <line x1="164" y1="95" x2="366" y2="95" stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arrf4g)"/>
            <line x1="164" y1="140" x2="366" y2="95" stroke="#64748b" strokeWidth="1" strokeDasharray="4,3"/>
            <line x1="164" y1="50" x2="366" y2="140" stroke="#64748b" strokeWidth="1" strokeDasharray="4,3"/>
            {/* Augmenting path (u3 → v3) */}
            <line x1="164" y1="140" x2="366" y2="140" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6,2" markerEnd="url(#arrf4)"/>
            <text x="265" y="158" fill="#f59e0b" fontSize="10" textAnchor="middle">augmenting path</text>

            {/* V → t edges */}
            <line x1="394" y1="50" x2="484" y2="85" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrf4)"/>
            <line x1="394" y1="95" x2="484" y2="95" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrf4)"/>
            <line x1="394" y1="140" x2="484" y2="105" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrf4)"/>

            {/* Labels */}
            <text x="150" y="175" fill={C} fontSize="9" textAnchor="middle">U (trabalhadores)</text>
            <text x="380" y="175" fill="#f97316" fontSize="9" textAnchor="middle">V (tarefas)</text>
            <line x1="420" y1="35" x2="440" y2="35" stroke="#f97316" strokeWidth="2.5"/>
            <text x="445" y="39" fill="#f97316" fontSize="9">matching</text>
            <line x1="420" y1="50" x2="440" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,2"/>
            <text x="445" y="54" fill="#f59e0b" fontSize="9">augmenting</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}><strong>Fluxo em redes</strong>: cada aresta tem capacidade c(u,v); o fluxo deve respeitar conservação (fluxo que entra = que sai em vértices intermédios).</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Ford-Fulkerson</strong> aumenta o fluxo por caminhos aumentantes no grafo residual; <strong>Edmonds-Karp</strong> usa BFS para garantir O(VE²).</li>
              <li style={{marginBottom:"0.5rem"}}>O <strong>Teorema Max-Flow Min-Cut</strong> (Ford-Fulkerson) estabelece que o fluxo máximo entre s e t iguala a capacidade mínima de qualquer s-t cut.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Matching bipartido máximo</strong> reduz-se a fluxo máximo; o Teorema de König iguala matching máximo a vertex cover mínimo em grafos bipartidos.</li>
              <li style={{marginBottom:"0.5rem"}}>Aplicações práticas: escalonamento de tarefas, atribuição de recursos, análise de redes de transporte e problemas de distribuição.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
