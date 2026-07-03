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

export default function GTH5() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[4].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Deteção de Comunidades</h1>
      <p style={S.sub}>Modularidade, algoritmos de deteção de comunidades — Louvain, Leiden, Infomap, Girvan-Newman — e comunidades sobrepostas: os métodos que revelam a estrutura mesoscópica das redes complexas.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Comunidades e Modularidade</h2>
        <p style={S.p}>Uma <strong>comunidade</strong> (ou módulo) é um subconjunto de nós com mais ligações internas do que se esperaria por acaso — nós dentro da mesma comunidade conectam-se densamente entre si e têm relativamente poucas arestas para o exterior. Esta definição informal é capturada quantitativamente pela <strong>modularidade Q</strong>, proposta por Newman & Girvan (2004):</p>
        <p style={S.p}><strong>Q = (1/2m) Σ [A_ij − k_i k_j / 2m] δ(c_i, c_j)</strong>, onde m é o número total de arestas, A_ij é a entrada da matriz de adjacência, k_i e k_j são os graus dos nós i e j, e δ(c_i, c_j) = 1 se i e j pertencem à mesma comunidade. O termo k_i k_j / 2m representa a probabilidade de existir a aresta (i, j) num grafo aleatório com a mesma distribuição de graus.</p>
        <p style={S.p}>Q ∈ [−0.5, 1]; valores de Q &gt; 0.3 indicam estrutura comunitária significativa. Redes reais com comunidades fortes apresentam tipicamente Q ∈ [0.3, 0.7]. Maximizar Q é NP-hard — o número de partições possíveis cresce como o número de Bell, inviabilizando busca exaustiva para redes com mais de ~30 nós.</p>
        <p style={S.p}>Exemplos reais: <strong>redes sociais</strong> — grupos de interesse, câmaras de eco, círculos de amizade; <strong>redes de proteínas</strong> — módulos funcionais (complexos proteicos que realizam funções biológicas coordenadas). A deteção de comunidades em redes de citações científicas revela disciplinas e subcampos emergentes.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Resolução limit:</strong> A modularidade Q sofre de um limite de resolução (Fortunato & Barthélemy, 2007) — comunidades menores que √(2m) tendem a ser fundidas, mesmo que sejam estruturalmente distintas. Para resolver isto, usam-se versões parametrizadas: Q(γ) com parâmetro de resolução γ que controla a escala das comunidades detectadas.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 700 200" width="100%" style={{display:'block'}}>
            <text x="350" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Três Comunidades — Poucas Arestas Inter-Comunitárias</text>
            {/* Community 1 - amber */}
            <ellipse cx="130" cy="110" rx="90" ry="65" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3"/>
            <circle cx="80" cy="90" r="13" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="140" cy="75" r="13" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="170" cy="115" r="13" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="100" cy="140" r="13" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <line x1="80" y1="90" x2="140" y2="75" stroke="#f59e0b" strokeWidth="1.8"/>
            <line x1="140" y1="75" x2="170" y2="115" stroke="#f59e0b" strokeWidth="1.8"/>
            <line x1="170" y1="115" x2="100" y2="140" stroke="#f59e0b" strokeWidth="1.8"/>
            <line x1="80" y1="90" x2="100" y2="140" stroke="#f59e0b" strokeWidth="1.8"/>
            <line x1="80" y1="90" x2="170" y2="115" stroke="#f59e0b" strokeWidth="1.8"/>
            <text x="130" y="185" fill="#f59e0b" fontSize="11" textAnchor="middle">Comunidade A</text>
            {/* Community 2 - teal */}
            <ellipse cx="360" cy="100" rx="85" ry="65" fill="#f9731618" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
            <circle cx="310" cy="80" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <circle cx="365" cy="65" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <circle cx="405" cy="95" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <circle cx="340" cy="130" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <line x1="310" y1="80" x2="365" y2="65" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="365" y1="65" x2="405" y2="95" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="405" y1="95" x2="340" y2="130" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="310" y1="80" x2="340" y2="130" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="310" y1="80" x2="405" y2="95" stroke="#f97316" strokeWidth="1.8"/>
            <text x="360" y="185" fill="#f97316" fontSize="11" textAnchor="middle">Comunidade B</text>
            {/* Community 3 - purple */}
            <ellipse cx="590" cy="110" rx="85" ry="65" fill="#f9731618" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
            <circle cx="545" cy="85" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <circle cx="600" cy="70" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <circle cx="635" cy="110" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <circle cx="570" cy="140" r="13" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <line x1="545" y1="85" x2="600" y2="70" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="600" y1="70" x2="635" y2="110" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="635" y1="110" x2="570" y2="140" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="545" y1="85" x2="570" y2="140" stroke="#f97316" strokeWidth="1.8"/>
            <line x1="600" y1="70" x2="570" y2="140" stroke="#f97316" strokeWidth="1.8"/>
            <text x="590" y="185" fill="#f97316" fontSize="11" textAnchor="middle">Comunidade C</text>
            {/* Inter-community edges (sparse) */}
            <line x1="170" y1="115" x2="310" y2="80" stroke="#475569" strokeWidth="1.2" strokeDasharray="4,3"/>
            <line x1="405" y1="95" x2="545" y2="85" stroke="#475569" strokeWidth="1.2" strokeDasharray="4,3"/>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Algoritmo de Louvain</h2>
        <p style={S.p}>O algoritmo de <strong>Louvain</strong> (Blondel et al., 2008) é o método mais utilizado para deteção de comunidades em redes de grande escala. Opera em duas fases iterativas: na <strong>Fase 1</strong>, cada nó é inicialmente colocado na sua própria comunidade. Depois, para cada nó i e cada comunidade vizinha C, calcula-se o ganho de modularidade ΔQ de mover i para C. Se max(ΔQ) &gt; 0, o nó move-se para a comunidade com maior ganho. Este processo repete-se em passes sobre todos os nós até convergência (sem movimento melhore Q).</p>
        <p style={S.p}>Na <strong>Fase 2</strong>, as comunidades encontradas são agregadas em super-nós: cada comunidade torna-se um único nó, as arestas intra-comunitárias tornam-se self-loops ponderados, e as arestas inter-comunitárias são combinadas. As duas fases repetem-se sobre o grafo comprimido, produzindo uma hierarquia de comunidades. A complexidade é <strong>O(n log n)</strong> na prática, escala para redes com 10⁹ nós.</p>
        <p style={S.p}>O <strong>Leiden algorithm</strong> (Traag et al., 2019) é uma melhoria do Louvain que garante que todas as comunidades encontradas são internamente bem-conectadas — o Louvain pode produzir comunidades desconexas. O Leiden adiciona um passo de refinamento local que divide sub-optimamente comunidades. O <strong>Infomap</strong> (Rosvall & Bergstrom, 2008) adopta um paradigma diferente: minimiza o <em>description length</em> de um random walker que percorre o grafo (MDL — Minimum Description Length). Comunidades são definidas como regiões onde o random walker fica preso durante muito tempo.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Comparação de algoritmos:</strong> Louvain — rápido, não garante conectividade interna. Leiden — mais lento mas comunidades sempre conexas. Infomap — baseado em teoria de informação, melhor para grafos dirigidos e redes com fluxo. Para redes muito grandes (&gt;10⁷ nós), Louvain e Infomap são os únicos práticos. Para qualidade garantida em redes médias, Leiden é preferido.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 720 178" width="100%" style={{display:'block'}}>
            <text x="360" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Louvain — Fase 1: nós individuais → Fase 2: super-nós</text>
            {/* Phase 1 label */}
            <text x="170" y="40" fill={C} fontSize="11" textAnchor="middle" fontWeight="700">Fase 1 — Nós Individuais</text>
            {/* 8 individual nodes */}
            <circle cx="80" cy="80" r="11" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/><text x="80" y="84" fill="#e2e8f0" fontSize="10" textAnchor="middle">1</text>
            <circle cx="120" cy="65" r="11" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/><text x="120" y="69" fill="#e2e8f0" fontSize="10" textAnchor="middle">2</text>
            <circle cx="150" cy="95" r="11" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/><text x="150" y="99" fill="#e2e8f0" fontSize="10" textAnchor="middle">3</text>
            <circle cx="100" cy="115" r="11" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/><text x="100" y="119" fill="#e2e8f0" fontSize="10" textAnchor="middle">4</text>
            <circle cx="220" cy="75" r="11" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/><text x="220" y="79" fill="#e2e8f0" fontSize="10" textAnchor="middle">5</text>
            <circle cx="255" cy="60" r="11" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/><text x="255" y="64" fill="#e2e8f0" fontSize="10" textAnchor="middle">6</text>
            <circle cx="270" cy="100" r="11" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/><text x="270" y="104" fill="#e2e8f0" fontSize="10" textAnchor="middle">7</text>
            <circle cx="235" cy="120" r="11" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/><text x="235" y="124" fill="#e2e8f0" fontSize="10" textAnchor="middle">8</text>
            {/* intra edges */}
            <line x1="80" y1="80" x2="120" y2="65" stroke={C} strokeWidth="1.3"/>
            <line x1="120" y1="65" x2="150" y2="95" stroke={C} strokeWidth="1.3"/>
            <line x1="150" y1="95" x2="100" y2="115" stroke={C} strokeWidth="1.3"/>
            <line x1="80" y1="80" x2="100" y2="115" stroke={C} strokeWidth="1.3"/>
            <line x1="220" y1="75" x2="255" y2="60" stroke="#f97316" strokeWidth="1.3"/>
            <line x1="255" y1="60" x2="270" y2="100" stroke="#f97316" strokeWidth="1.3"/>
            <line x1="270" y1="100" x2="235" y2="120" stroke="#f97316" strokeWidth="1.3"/>
            <line x1="220" y1="75" x2="235" y2="120" stroke="#f97316" strokeWidth="1.3"/>
            {/* inter edge */}
            <line x1="150" y1="95" x2="220" y2="75" stroke="#475569" strokeWidth="1" strokeDasharray="3,2"/>
            {/* Arrow */}
            <text x="340" y="100" fill="#94a3b8" fontSize="22" textAnchor="middle">→</text>
            {/* Phase 2 label */}
            <text x="510" y="40" fill={C} fontSize="11" textAnchor="middle" fontWeight="700">Fase 2 — Super-Nós</text>
            {/* Super node A */}
            <circle cx="440" cy="100" r="32" fill={`${C}25`} stroke={C} strokeWidth="2.5"/>
            <text x="440" y="96" fill={C} fontSize="11" textAnchor="middle" fontWeight="700">C1</text>
            <text x="440" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle">1,2,3,4</text>
            {/* Super node B */}
            <circle cx="560" cy="100" r="32" fill="#f9731625" stroke="#f97316" strokeWidth="2.5"/>
            <text x="560" y="96" fill="#f97316" fontSize="11" textAnchor="middle" fontWeight="700">C2</text>
            <text x="560" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle">5,6,7,8</text>
            {/* self loops */}
            <path d="M420,72 Q400,45 440,65" fill="none" stroke={C} strokeWidth="1.5"/>
            <path d="M580,72 Q600,45 560,65" fill="none" stroke="#f97316" strokeWidth="1.5"/>
            {/* inter edge */}
            <line x1="472" y1="100" x2="528" y2="100" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="500" y="148" fill="#94a3b8" fontSize="10" textAnchor="middle">aresta inter-comunitária</text>
            <text x="420" y="165" fill={C} fontSize="10" textAnchor="middle">self-loop = intra</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Girvan-Newman e Métodos Divisivos</h2>
        <p style={S.p}>O algoritmo de <strong>Girvan-Newman</strong> (2002) é divisivo: começa com o grafo completo e remove iterativamente arestas com maior <em>edge betweenness</em> — o número de shortest paths entre todos os pares de nós que passam pela aresta. A intuição é que arestas entre comunidades têm betweenness alta, pois todos os caminhos entre comunidades passam por elas. Após cada remoção, recalcula-se o edge betweenness de todas as arestas restantes. O processo gera um <strong>dendrograma</strong> hierárquico de comunidades — cortando o dendrograma a diferentes níveis obtêm-se diferentes granularidades.</p>
        <p style={S.p}>A complexidade é <strong>O(m²n)</strong> — computacionalmente inviável para redes grandes. Para n = 10⁴, são necessárias ~10¹² operações. Contudo, produz resultados de alta qualidade e o dendrograma é informativo sobre a estrutura hierárquica da rede.</p>
        <p style={S.p}>O <strong>Spectral Clustering</strong> é um método divisivo baseado em álgebra linear. Define-se o Laplaciano do grafo <strong>L = D − A</strong>, onde D é a matriz diagonal de graus e A é a matriz de adjacência. Os eigenvectors correspondentes aos menores eigenvalues (excluindo zero) do Laplaciano capturam a estrutura de conectividade. Projeta-se cada nó no espaço dos k eigenvectors e aplica-se k-means. O <strong>Normalized Cut</strong> (Shi & Malik, 2000) usa o Laplaciano normalizado e é a base de algoritmos de segmentação de imagens — cada pixel é um nó, arestas têm peso proporcional à similaridade de intensidade.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Girvan-Newman em Python:</strong> NetworkX implementa <code>girvan_newman(G)</code>. Para grafos pequenos (&lt;500 nós), é prático. Para redes maiores, Louvain via <code>python-louvain</code> ou <code>cdlib</code> é preferível. Spectral clustering: <code>sklearn.cluster.SpectralClustering</code> com <code>affinity='precomputed'</code> e a matriz de adjacência como input.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Overlapping Communities e Benchmarks</h2>
        <p style={S.p}>Em muitas redes reais, nós pertencem a múltiplas comunidades simultaneamente — um investigador pode pertencer a múltiplas áreas de pesquisa, uma proteína pode participar em múltiplos complexos. As <strong>comunidades sobrepostas</strong> (overlapping communities) requerem métodos especializados. O <strong>BIGCLAM</strong> (Yang & Leskovec, 2013) modela a pertença a comunidades como factores não-negativos — a probabilidade de existir a aresta (u, v) é 1 − exp(−F_u · F_v), onde F_u é o vector de pertença de u. Optimização por gradient ascent.</p>
        <p style={S.p}>As <strong>link communities</strong> (Ahn et al., 2010) definem comunidades de arestas em vez de nós: duas arestas pertencem à mesma comunidade se partilham um nó e formam um triângulo densa. Permite naturalmente overlapping — um nó que pertence a múltiplas comunidades de arestas é um membro de overlapping.</p>
        <p style={S.p}><strong>Benchmarks:</strong> O <strong>LFR benchmark</strong> (Lancichinetti, Fortunato & Radicchi, 2008) gera grafos sintéticos com estrutura comunitária controlada: parâmetro μ (mixing parameter) controla a fracção de arestas inter-comunitárias. Para μ &lt; 0.5 a estrutura é detectável; μ = 0 é estrutura perfeita; μ = 1 é grafo aleatório. A qualidade da deteção é medida pelo <strong>NMI (Normalized Mutual Information)</strong> entre a partição detectada e o ground truth: NMI ∈ [0, 1], NMI = 1 é partição perfeita.</p>
        <p style={S.p}><strong>Aplicações:</strong> deteção de grupos temáticos no Twitter (hashtag communities), módulos de proteínas multifuncionais (gene ontology), comunidades de utilizadores em redes de recomendação, detecção de câmaras de eco em redes de notícias.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>cdlib:</strong> A biblioteca Python cdlib implementa +40 algoritmos de deteção de comunidades (Louvain, Leiden, Infomap, BIGCLAM, link communities) com interface unificada. Métricas de qualidade: modularidade, NMI, ARI (Adjusted Rand Index), conductance. Comparação visual com <code>cdlib.viz.plot_community_graph(G, communities)</code>.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}><strong>Comunidades</strong> são sub-grafos com mais arestas internas do que externas; a <strong>modularidade Q</strong> quantifica a qualidade de uma partição.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Louvain</strong> optimiza modularidade em duas fases (mover nós localmente + colapsar comunidades) — escala para redes com milhões de nós em O(n log n).</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Girvan-Newman</strong> remove iterativamente arestas com maior betweenness centrality — divisivo e interpretável mas computacionalmente caro O(VE²).</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Overlapping communities</strong> (Clique Percolation, BigCLAM) permitem que um nó pertença a múltiplas comunidades — mais realista em redes sociais.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Benchmarks</strong> (LFR, Karate Club) avaliam algoritmos com ground truth conhecida; comparação via NMI ou ARI.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
