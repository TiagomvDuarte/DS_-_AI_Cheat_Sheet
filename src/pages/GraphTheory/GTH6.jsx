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

export default function GTH6() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[5].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Métricas de Redes</h1>
      <p style={S.sub}>Centralidade, PageRank, HITS, propriedades small-world e scale-free, robustez e percolação — as métricas fundamentais para caracterizar e analisar redes complexas.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Centralidade</h2>
        <p style={S.p}>As métricas de <strong>centralidade</strong> quantificam a importância de um nó na rede. A <strong>degree centrality</strong> C_D(v) = k(v) / (n−1) é a mais simples — o grau normalizado. Capture importância local mas ignora a estrutura global. A <strong>betweenness centrality</strong> C_B(v) = Σ(s,t: s!=v!=t) σ(s,t|v) / σ(s,t), onde σ(s,t) é o número de shortest paths de s para t e σ(s,t|v) é o número que passa por v. Identifica <em>garrafas de estrangulamento</em> — nós cuja remoção desconecta caminhos críticos.</p>
        <p style={S.p}>A <strong>closeness centrality</strong> C_C(v) = (n−1) / Σ(u!=v) d(u,v) — inverso da distância média de v a todos os outros nós. Nós centrais no sentido geográfico difundem informação rapidamente. A <strong>eigenvector centrality</strong> satisfaz Ax = λx — um nó é importante se os seus vizinhos são importantes. <strong>Katz centrality</strong> adiciona um factor de atenuação: C_K(v) = Σ_k α^k (número de walks de comprimento k até v), β é um offset para nós isolados. A <strong>Harmonic centrality</strong> usa a média harmónica das distâncias (em vez da aritmética), o que a torna bem definida para grafos desconexos: C_H(v) = Σ(u!=v) 1/d(u,v).</p>
        <p style={S.p}>O algoritmo de <strong>Brandes</strong> (2001) computa betweenness de todos os nós em <strong>O(VE)</strong> para grafos não-pesados e O(VE + V² log V) para pesados — a implementação de referência, usada no NetworkX.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Qual usar?</strong> Degree → influência imediata (marketing viral). Betweenness → intermediários, bridges (redes de transporte, redes sociais). Closeness → velocidade de difusão (epidemias, rumores). Eigenvector/PageRank → prestígio acumulado (académicos, websites). Em grafos desconexos, usar harmonic centrality em vez de closeness.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 600 190" width="100%" style={{display:'block'}}>
            <text x="300" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Centralidades — tamanho do nó proporcional à métrica</text>
            {/* Hub node V (high all centralities) */}
            <circle cx="300" cy="100" r="24" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="300" y="97" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">V</text>
            <text x="300" y="109" fill={C} fontSize="9" textAnchor="middle">hub</text>
            {/* Peripheral nodes */}
            <circle cx="160" cy="60" r="13" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="160" y="64" fill="#e2e8f0" fontSize="10" textAnchor="middle">A</text>
            <circle cx="160" cy="140" r="13" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="160" y="144" fill="#e2e8f0" fontSize="10" textAnchor="middle">B</text>
            <circle cx="440" cy="60" r="13" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="440" y="64" fill="#e2e8f0" fontSize="10" textAnchor="middle">C</text>
            <circle cx="440" cy="140" r="13" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="440" y="144" fill="#e2e8f0" fontSize="10" textAnchor="middle">D</text>
            <circle cx="300" cy="170" r="10" fill="rgba(249,115,22,0.06)" stroke="#64748b" strokeWidth="1.2"/>
            <text x="300" y="174" fill="#94a3b8" fontSize="9" textAnchor="middle">E</text>
            {/* leaf nodes on A and C */}
            <circle cx="100" cy="45" r="9" fill="rgba(249,115,22,0.06)" stroke="#64748b" strokeWidth="1"/>
            <text x="100" y="49" fill="#94a3b8" fontSize="8" textAnchor="middle">a1</text>
            <circle cx="110" cy="80" r="9" fill="rgba(249,115,22,0.06)" stroke="#64748b" strokeWidth="1"/>
            <text x="110" y="84" fill="#94a3b8" fontSize="8" textAnchor="middle">a2</text>
            <circle cx="500" cy="45" r="9" fill="rgba(249,115,22,0.06)" stroke="#64748b" strokeWidth="1"/>
            <text x="500" y="49" fill="#94a3b8" fontSize="8" textAnchor="middle">c1</text>
            {/* edges */}
            <line x1="276" y1="88" x2="173" y2="67" stroke={C} strokeWidth="2"/>
            <line x1="276" y1="112" x2="173" y2="133" stroke={C} strokeWidth="2"/>
            <line x1="324" y1="88" x2="427" y2="67" stroke={C} strokeWidth="2"/>
            <line x1="324" y1="112" x2="427" y2="133" stroke={C} strokeWidth="2"/>
            <line x1="300" y1="124" x2="300" y2="160" stroke={C} strokeWidth="2"/>
            <line x1="160" y1="47" x2="109" y2="52" stroke="#64748b" strokeWidth="1.2"/>
            <line x1="149" y1="65" x2="119" y2="78" stroke="#64748b" strokeWidth="1.2"/>
            <line x1="440" y1="47" x2="491" y2="52" stroke="#64748b" strokeWidth="1.2"/>
            {/* centrality labels */}
            <text x="138" y="35" fill="#94a3b8" fontSize="9" textAnchor="middle">BC=low</text>
            <text x="462" y="35" fill="#94a3b8" fontSize="9" textAnchor="middle">BC=low</text>
            <text x="300" y="155" fill={C} fontSize="10" textAnchor="middle">BC=max, CC=max</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. PageRank e HITS</h2>
        <p style={S.p}><strong>PageRank</strong> (Brin & Page, Google 1998) modela um <em>random surfer</em>: com probabilidade d = 0.85 segue um link aleatório da página actual; com probabilidade 1−d = 0.15 teleporta para uma página aleatória do grafo. A equação estacionária é: <strong>PR(v) = (1−d)/n + d × Σ_{'{u→v}'} PR(u) / out(u)</strong>. Convergência garantida por power iteration: inicializar PR(v) = 1/n, iterar até convergência (tipicamente 50-100 iterações, erro &lt; 10⁻⁶).</p>
        <p style={S.p}><strong>Personalized PageRank</strong> substitui o teleport uniforme por um teleport para um subconjunto de nós — permite calcular relevância personalizada a partir de um nó de interesse. Usado em Pinterest para recomendação de pins (PinSage) e no algoritmo de semelhança de nós em grafos de conhecimento.</p>
        <p style={S.p}><strong>HITS</strong> (Hyperlink-Induced Topic Search, Kleinberg 1999) define dois scores por nó: <em>hub score</em> h(v) (aponta para boas autoridades) e <em>authority score</em> a(v) (apontado por bons hubs). Iteração: h(v) ← Σ_{'{u: v→u}'} a(u); a(v) ← Σ_{'{u: u→v}'} h(u). Normalização em cada passo. Equivalente às decomposição SVD da matriz de adjacência. HITS é query-dependent (aplicado ao subgrafo relevante à query), enquanto PageRank é query-independent.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Damping factor d:</strong> d = 0.85 é o valor empírico original do Google. d → 1 valoriza a estrutura de links; d → 0 aproxima distribuição uniforme. Dangling nodes (sem out-links) redistribuem o seu PageRank uniformemente. Spam farms tentam manipular PageRank criando muitas páginas inter-ligadas — TrustRank combate isto propagando confiança a partir de seeds confiáveis.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 190" width="100%" style={{display:'block'}}>
            <text x="310" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">PageRank — Power Iteration em 3 nós (convergência)</text>
            {/* 3 nodes */}
            <circle cx="160" cy="100" r="20" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <text x="160" y="96" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">A</text>
            <circle cx="320" cy="60" r="20" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <text x="320" y="56" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">B</text>
            <circle cx="320" cy="150" r="20" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <text x="320" y="146" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">C</text>
            {/* arrows */}
            <defs>
              <marker id="arr6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={C}/>
              </marker>
            </defs>
            <line x1="179" y1="90" x2="300" y2="68" stroke={C} strokeWidth="1.5" markerEnd="url(#arr6)"/>
            <line x1="179" y1="110" x2="300" y2="142" stroke={C} strokeWidth="1.5" markerEnd="url(#arr6)"/>
            <line x1="320" y1="80" x2="320" y2="130" stroke={C} strokeWidth="1.5" markerEnd="url(#arr6)"/>
            {/* Iteration table */}
            <text x="430" y="40" fill="#94a3b8" fontSize="10" textAnchor="middle">Iteração</text>
            <text x="490" y="40" fill="#94a3b8" fontSize="10" textAnchor="middle">PR(A)</text>
            <text x="540" y="40" fill="#94a3b8" fontSize="10" textAnchor="middle">PR(B)</text>
            <text x="590" y="40" fill="#94a3b8" fontSize="10" textAnchor="middle">PR(C)</text>
            <text x="430" y="58" fill="#e2e8f0" fontSize="10" textAnchor="middle">0</text>
            <text x="490" y="58" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.33</text>
            <text x="540" y="58" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.33</text>
            <text x="590" y="58" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.33</text>
            <text x="430" y="76" fill="#e2e8f0" fontSize="10" textAnchor="middle">1</text>
            <text x="490" y="76" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.05</text>
            <text x="540" y="76" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.33</text>
            <text x="590" y="76" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.33</text>
            <text x="430" y="94" fill="#e2e8f0" fontSize="10" textAnchor="middle">5</text>
            <text x="490" y="94" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.05</text>
            <text x="540" y="94" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.28</text>
            <text x="590" y="94" fill="#e2e8f0" fontSize="10" textAnchor="middle">0.38</text>
            <text x="430" y="112" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">∞</text>
            <text x="490" y="112" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">0.05</text>
            <text x="540" y="112" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">0.26</text>
            <text x="590" y="112" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">0.40</text>
            <text x="510" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">(d=0.85, convergido)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Small-World e Scale-Free</h2>
        <p style={S.p}>O modelo <strong>Small-World</strong> (Watts & Strogatz, 1998) captura duas propriedades observadas em redes reais: <em>alto clustering coefficient</em> (triângulos abundantes — os amigos dos meus amigos são meus amigos) e <em>baixo diâmetro</em> (qualquer dois nós estão a poucos passos). O <em>six degrees of separation</em> (Milgram, 1969) demonstrou empiricamente que qualquer dois americanos estão conectados por ~6 intermediários. No Facebook, esse número caiu para 3.57 em 2016.</p>
        <p style={S.p}>O modelo WS gera grafos small-world: começar com um ring lattice de n nós onde cada nó se conecta aos k vizinhos mais próximos. Depois, reinterligar cada aresta com probabilidade p: p = 0 → lattice regular (alto C, alto L); p = 1 → grafo aleatório (baixo C, baixo L); p ≈ 0.01 → small-world (alto C, baixo L).</p>
        <p style={S.p}>As redes <strong>Scale-Free</strong> (Barabási & Albert, 1999) têm distribuição de grau em lei de potência: <strong>P(k) ~ k^(-γ)</strong>, γ ∈ [2, 3] para redes reais. Surgem por <em>preferential attachment</em>: novos nós ligam preferencialmente a nós com mais ligações — "rich get richer". Hubs com grau muito alto dominam a rede. Consequência: robustez a falhas aleatórias (a probabilidade de remover aleatoriamente um hub é baixa — são raros), mas vulnerabilidade a ataques direcionados (remover os top-k hubs fragmenta rapidamente a rede). A Internet, a Web, redes de citações científicas e redes metabólicas são scale-free.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Clustering Coefficient:</strong> C(v) = (triângulos contendo v) / (k(v)(k(v)−1)/2) — fracção de pares de vizinhos que são também entre si vizinhos. C global = média sobre todos os nós. Grafos aleatórios têm C ≈ k̄/n → 0 para redes esparsas. Redes reais têm C tipicamente 100-1000× mais alto que o esperado aleatoriamente.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 640 205" width="100%" style={{display:'block'}}>
            <text x="320" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Distribuição de Grau — Scale-Free (lei de potência) vs Aleatório (Poisson) — escala log-log</text>
            {/* Axes */}
            <line x1="80" y1="170" x2="580" y2="170" stroke="#475569" strokeWidth="1.5"/>
            <line x1="80" y1="30" x2="80" y2="170" stroke="#475569" strokeWidth="1.5"/>
            <text x="330" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">log(k) — grau</text>
            <text x="30" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle" transform="rotate(-90,30,100)">log P(k)</text>
            {/* Axis ticks */}
            <text x="80" y="185" fill="#64748b" fontSize="9" textAnchor="middle">1</text>
            <text x="200" y="185" fill="#64748b" fontSize="9" textAnchor="middle">10</text>
            <text x="360" y="185" fill="#64748b" fontSize="9" textAnchor="middle">100</text>
            <text x="520" y="185" fill="#64748b" fontSize="9" textAnchor="middle">1000</text>
            <text x="68" y="170" fill="#64748b" fontSize="9" textAnchor="end">10⁻⁴</text>
            <text x="68" y="120" fill="#64748b" fontSize="9" textAnchor="end">10⁻²</text>
            <text x="68" y="70" fill="#64748b" fontSize="9" textAnchor="end">10⁰</text>
            {/* Scale-free line (straight on log-log = power law) */}
            <line x1="80" y1="50" x2="540" y2="168" stroke={C} strokeWidth="2.5"/>
            <text x="400" y="120" fill={C} fontSize="11" fontWeight="700">Scale-Free</text>
            <text x="420" y="132" fill={C} fontSize="9">P(k) ~ k^-2.5</text>
            {/* Poisson hump (bell curve on log scale) */}
            <path d="M80,165 Q160,162 220,80 Q260,45 300,80 Q360,160 580,165" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3"/>
            <text x="230" y="42" fill="#f59e0b" fontSize="11" fontWeight="700">Aleatório (Poisson)</text>
            <text x="340" y="95" fill="#f59e0b" fontSize="9" textAnchor="middle">pico em k̄</text>
            {/* Hub annotation */}
            <text x="510" y="138" fill="#94a3b8" fontSize="9" textAnchor="middle">hubs raros</text>
            <text x="510" y="149" fill="#94a3b8" fontSize="9" textAnchor="middle">mas existem</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Robustez e Percolação</h2>
        <p style={S.p}><strong>Robustez de rede</strong> é a fracção de nós que podem ser removidos antes de a rede fragmentar (i.e., a componente gigante desaparecer ou encolher abaixo de um threshold). <strong>Site percolation</strong>: cada nó permanece na rede com probabilidade p (removido com probabilidade 1−p). <strong>Bond percolation</strong>: cada aresta permanece com probabilidade p. Existe um <strong>limiar de percolação p_c</strong>: para p &gt; p_c existe uma componente gigante que contém O(n) nós; para p &lt; p_c a rede fragmenta em componentes pequenas — transição de fase análoga à física estatística.</p>
        <p style={S.p}>Para redes <strong>scale-free</strong> com γ &lt; 3, o limiar de percolação satisfaz <strong>p_c → 0</strong> quando n → ∞ (Cohen et al., 2000). Isto significa que redes scale-free são extremamente robustas a falhas aleatórias — mesmo removendo a maioria dos nós aleatoriamente, a rede permanece conectada porque a probabilidade de atingir um hub é baixa. Para redes aleatórias (Erdős-Rényi), p_c = ⟨k⟩ / ⟨k²⟩.</p>
        <p style={S.p}><strong>Ataques direcionados</strong>: remover hubs por ordem decrescente de grau é devastador para redes scale-free — p_c colapsa para valores muito pequenos. Esta assimetria tem implicações práticas: a internet é robusta a falhas aleatórias de routers mas vulnerável a ataques DDoS coordenados contra os grandes nós. Em <strong>epidemiologia</strong>: vacinação aleatória é ineficaz em scale-free networks (p_c → 0 para epidemia); vacinação de hubs (targeted vaccination) é dramaticamente mais eficiente — vacinar os top-k hubs pode elevar p_c significativamente.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Cascading failures:</strong> Em redes com dependências (power grids, sistemas financeiros), a falha de um nó pode sobrecarregar os seus vizinhos, que por sua vez falham, desencadeando um cascade. O apagão do Nordeste americano de 2003 começou com uma falha em Ohio e propagou-se em cascade para 50M de pessoas. Modelação: coupled percolation em redes interdependentes (Buldyrev et al., Nature 2010).</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}><strong>Centralidade</strong> mede a importância de um nó: degree (conexões diretas), betweenness (pontes no grafo), closeness (distância média), eigenvector (vizinhos importantes).</li>
              <li style={{marginBottom:"0.5rem"}}><strong>PageRank</strong> modela um random walk com damping factor α≈0.85 — converge para o eigenvector dominante da matriz de transição; HITS distingue hubs de authorities.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Small-world</strong> (Watts-Strogatz): alto clustering e baixo diâmetro — 'six degrees of separation'; combinação de conexões locais com atalhos aleatórios.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Scale-free</strong> (Barabási-Albert): distribuição de graus power-law P(k)~k^(-γ) — resultado de preferential attachment; hubs dominam a topologia.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Robustez e percolação</strong>: redes scale-free são robustas a falhas aleatórias mas vulneráveis a ataques dirigidos aos hubs; limiar de percolação determina colapso.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
