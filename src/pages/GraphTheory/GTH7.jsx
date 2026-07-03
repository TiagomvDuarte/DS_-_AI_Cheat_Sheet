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

export default function GTH7() {
  return (
    <div style={S.page}>
      <Link to="/graph-theory" style={S.back}>← Graph Theory & Network Science</Link>
      <div style={S.badge}>{modules[6].num} — GRAPH THEORY & NETWORK SCIENCE</div>
      <h1 style={S.h1}>Graph Neural Networks</h1>
      <p style={S.sub}>Message passing, GCN, GraphSAGE, Graph Attention Networks, expressividade WL, e aplicações de GNNs em drug discovery, knowledge graphs e previsão de tráfego.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Message Passing Framework</h2>
        <p style={S.p}>As <strong>Graph Neural Networks</strong> aprendem representações vectoriais (embeddings) de nós, arestas e grafos combinando a estrutura do grafo com features iniciais. O paradigma unificador é o <strong>message passing</strong>: em cada camada l, cada nó v agrega mensagens dos seus vizinhos e actualiza o seu estado oculto:</p>
        <p style={S.p}><strong>h_v^(l+1) = UPDATE( h_v^(l), AGGREGATE( {'{h_u^(l) : u ∈ N(v)}'} ) )</strong>, onde AGGREGATE pode ser sum, mean, max ou attention, e UPDATE é tipicamente uma rede neuronal (MLP). Após K camadas, o embedding h_v^(K) captura a vizinhança de raio K em torno de v — o <em>receptive field</em> cresce exponencialmente com K.</p>
        <p style={S.p}><strong>Oversmoothing</strong>: para K grande, os embeddings de todos os nós convergem para o mesmo vector — perda de informação local. Na prática, K ∈ [2, 5] é suficiente para a maioria das tarefas. <strong>Tasks:</strong> node classification (prever classe de nós não-anotados), link prediction (prever arestas ausentes), graph classification (prever propriedade do grafo completo).</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Expressividade:</strong> GNNs com message passing são no máximo tão expressivas quanto o teste 1-WL (Weisfeiler-Leman) de isomorfismo de grafos (Xu et al., ICLR 2019). Isto significa que existem grafos não-isomorfos que qualquer GNN de message passing representa com o mesmo embedding — limitação fundamental que motivou k-WL GNNs e arquiteturas com informação posicional.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 200" width="100%" style={{display:'block'}}>
            <text x="340" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Message Passing — Agregação de Vizinhança de 2 Saltos para o Nó Alvo</text>
            {/* Layer 0 — 2-hop neighbors */}
            <circle cx="80" cy="60" r="12" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1.5"/>
            <text x="80" y="64" fill="#94a3b8" fontSize="9" textAnchor="middle">n₁</text>
            <circle cx="80" cy="130" r="12" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1.5"/>
            <text x="80" y="134" fill="#94a3b8" fontSize="9" textAnchor="middle">n₂</text>
            <circle cx="120" cy="170" r="12" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1.5"/>
            <text x="120" y="174" fill="#94a3b8" fontSize="9" textAnchor="middle">n₃</text>
            <text x="80" y="195" fill="#64748b" fontSize="9" textAnchor="middle">camada 0</text>
            {/* Layer 1 — 1-hop neighbors */}
            <circle cx="240" cy="75" r="14" fill={`${C}30`} stroke={C} strokeWidth="1.8"/>
            <text x="240" y="80" fill="#e2e8f0" fontSize="10" textAnchor="middle">u₁</text>
            <circle cx="240" cy="145" r="14" fill={`${C}30`} stroke={C} strokeWidth="1.8"/>
            <text x="240" y="150" fill="#e2e8f0" fontSize="10" textAnchor="middle">u₂</text>
            <text x="240" y="195" fill={C} fontSize="9" textAnchor="middle">camada 1</text>
            {/* Target node */}
            <circle cx="420" cy="105" r="20" fill={`${C}50`} stroke={C} strokeWidth="2.5"/>
            <text x="420" y="102" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">v</text>
            <text x="420" y="114" fill={C} fontSize="9" textAnchor="middle">alvo</text>
            <text x="420" y="195" fill={C} fontSize="9" textAnchor="middle">camada 2</text>
            {/* Edges L0→L1 */}
            <line x1="92" y1="63" x2="226" y2="73" stroke="#475569" strokeWidth="1.2"/>
            <line x1="92" y1="127" x2="226" y2="80" stroke="#475569" strokeWidth="1.2"/>
            <line x1="92" y1="133" x2="226" y2="142" stroke="#475569" strokeWidth="1.2"/>
            <line x1="130" y1="167" x2="226" y2="150" stroke="#475569" strokeWidth="1.2"/>
            {/* Edges L1→target */}
            <line x1="254" y1="78" x2="400" y2="101" stroke={C} strokeWidth="1.8"/>
            <line x1="254" y1="142" x2="400" y2="109" stroke={C} strokeWidth="1.8"/>
            {/* AGGREGATE box */}
            <rect x="490" y="85" width="90" height="40" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="535" y="101" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">AGGREGATE</text>
            <text x="535" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">+ UPDATE</text>
            <line x1="440" y1="105" x2="490" y2="105" stroke={C} strokeWidth="1.5"/>
            <text x="610" y="109" fill="#e2e8f0" fontSize="11" textAnchor="middle">h_v^(2)</text>
            <line x1="580" y1="105" x2="595" y2="105" stroke={C} strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. GCN e GraphSAGE</h2>
        <p style={S.p}>O <strong>GCN</strong> (Graph Convolutional Network, Kipf & Welling, ICLR 2017) propõe uma forma eficiente de message passing: <strong>H^(l+1) = σ( D̃^(-1/2) Ã D̃^(-1/2) H^(l) W^(l) )</strong>, onde Ã = A + I (adjacência com self-loops), D̃ é a matriz diagonal de graus de Ã, W^(l) é a matriz de pesos aprendível, e σ é uma não-linearidade (ReLU). A normalização simétrica D̃^(-1/2) Ã D̃^(-1/2) previne exploding/vanishing gradients. GCN é <em>transductivo</em> — aprende embeddings para nós no grafo de treino, não generaliza directamente para novos nós.</p>
        <p style={S.p}><strong>GraphSAGE</strong> (Hamilton, Ying & Leskovec, NeurIPS 2017) resolve a limitação transductiva com uma abordagem <em>indutiva</em>: em vez de aprender embeddings por nó, aprende uma <em>função de agregação</em>. Para cada nó, amostram-se subconjuntos de vizinhos (neighborhood sampling) e aplicam-se agregadores (mean, LSTM, max-pooling). O embedding de novos nós (não vistos no treino) é computado aplicando os agregadores aprendidos à sua vizinhança — permite generalization.</p>
        <p style={S.p}>Aplicações de escala: <strong>PinSage</strong> (Pinterest, 2018) usa GraphSAGE para recomendar pins a partir de um grafo de 3B pins e 18B arestas — o maior sistema de GNN em produção. Mini-batch training com random walks para amostrar vizinhanças tractáveis. GraphSAGE também é usado em fraud detection (e-commerce), molecular property prediction (drogas), e entity embeddings em knowledge graphs.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>PyTorch Geometric (PyG):</strong> A implementação de referência para GNNs. <code>torch_geometric.nn.GCNConv</code>, <code>SAGEConv</code>, <code>GATConv</code>. Edge index no formato [2, E]. Mini-batch com <code>NeighborLoader</code> para grafos grandes. DGL (Deep Graph Library) é a alternativa principal, com backend flexível (PyTorch/MXNet/TensorFlow).</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Graph Attention Networks e Expressividade</h2>
        <p style={S.p}>O <strong>GAT</strong> (Graph Attention Network, Veličković et al., ICLR 2018) introduz atenção sobre os vizinhos: o coeficiente de atenção entre nós u e v é calculado como <strong>e_uv = LeakyReLU( a^T [Wh_u ‖ Wh_v] )</strong>, normalizado com softmax: α_uv = softmax_u(e_uv). O embedding actualizado é h_v' = σ( Σ_u α_uv W h_u ). Multi-head attention (K cabeças paralelas) com concatenação ou média das saídas aumenta a estabilidade. GAT é especialmente eficaz quando vizinhos têm relevância desigual — nós com vizinhos ruidosos beneficiam de pesos de atenção baixos para os vizinhos irrelevantes.</p>
        <p style={S.p}><strong>Expressividade de GNNs:</strong> O teste de <strong>Weisfeiler-Leman (1-WL)</strong> é um algoritmo clássico de isomorfismo de grafos que itera: colorir nós com o multiset das cores dos vizinhos. Xu et al. (ICLR 2019) provam que qualquer GNN de message passing é no máximo tão expressiva quanto 1-WL — existem pares de grafos que 1-WL não distingue e que nenhuma GNN standard consegue separar.</p>
        <p style={S.p}>O <strong>GIN</strong> (Graph Isomorphism Network, Xu et al., 2019) é a GNN mais expressiva na classe 1-WL: a agregação por <em>sum</em> (em vez de mean ou max) é estritamente mais expressiva — <strong>h_v^(l+1) = MLP( (1+ε) h_v^(l) + Σ_u∈N(v) h_u^(l) )</strong>. O parâmetro ε pode ser aprendido ou fixo a 0. Extensões: k-WL GNNs (computacionalmente caras), GNNs com informação posicional (distâncias, eigenvectors do Laplaciano), GNNs equivariantes a simetrias 3D para moléculas.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 185" width="100%" style={{display:'block'}}>
            <text x="310" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">GAT — Pesos de Atenção nas Arestas (espessura ∝ α)</text>
            {/* Central node */}
            <circle cx="310" cy="100" r="20" fill={`${C}50`} stroke={C} strokeWidth="2.5"/>
            <text x="310" y="97" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">v</text>
            <text x="310" y="109" fill={C} fontSize="9" textAnchor="middle">alvo</text>
            {/* Neighbor nodes */}
            <circle cx="160" cy="60" r="15" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="160" y="65" fill="#e2e8f0" fontSize="10" textAnchor="middle">u₁</text>
            <circle cx="160" cy="140" r="15" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="160" y="145" fill="#e2e8f0" fontSize="10" textAnchor="middle">u₂</text>
            <circle cx="310" cy="170" r="15" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1.5"/>
            <text x="310" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle">u₃</text>
            <circle cx="460" cy="80" r="15" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="460" y="85" fill="#e2e8f0" fontSize="10" textAnchor="middle">u₄</text>
            <circle cx="460" cy="140" r="15" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1.5"/>
            <text x="460" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">u₅</text>
            {/* Attention edges — thickness reflects alpha */}
            <line x1="175" y1="66" x2="292" y2="94" stroke={C} strokeWidth="4" opacity="0.9"/>
            <text x="225" y="72" fill={C} fontSize="10" fontWeight="700">α=0.45</text>
            <line x1="175" y1="134" x2="292" y2="107" stroke={C} strokeWidth="2.5" opacity="0.7"/>
            <text x="230" y="130" fill={C} fontSize="10">α=0.28</text>
            <line x1="310" y1="155" x2="310" y2="120" stroke="#475569" strokeWidth="1" opacity="0.5"/>
            <text x="335" y="148" fill="#64748b" fontSize="9">α=0.08</text>
            <line x1="445" y1="86" x2="330" y2="97" stroke={C} strokeWidth="2" opacity="0.6"/>
            <text x="390" y="82" fill={C} fontSize="10">α=0.14</text>
            <line x1="445" y1="135" x2="328" y2="108" stroke="#475569" strokeWidth="0.8" opacity="0.4"/>
            <text x="390" y="130" fill="#64748b" fontSize="9">α=0.05</text>
            <text x="310" y="30" fill="#94a3b8" fontSize="10" textAnchor="middle">Σ α_uv = 1.00 — softmax sobre vizinhos</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Aplicações de GNNs</h2>
        <p style={S.p}><strong>Drug discovery:</strong> Moléculas são grafos naturais — átomos como nós, ligações químicas como arestas, com features atómicas (tipo de átomo, carga, hibridação) e features de aresta (tipo de ligação). GNNs superam fingerprints clássicos em predição de propriedades ADMET (absorption, distribution, metabolism, excretion, toxicity). <strong>AlphaFold2</strong> usa invariant point attention (IPA) — um tipo de GNN sobre o grafo de estrutura proteica — para prever coordenadas 3D de átomos. Pré-treino de GNNs em PubChem (110M moléculas) com self-supervised learning melhora performance em downstream tasks com poucos dados.</p>
        <p style={S.p}><strong>Knowledge Graph Completion:</strong> R-GCN (Relational GCN, Schlichtkrull et al., 2018) estende GCNs para grafos com múltiplos tipos de relações — cada tipo de aresta tem pesos próprios. Task: link prediction (prever relações ausentes em knowledge graphs como Freebase, Wikidata). Combinado com embedding methods (TransE, RotatE) para escalabilidade.</p>
        <p style={S.p}><strong>Social networks:</strong> Fraud detection na Alibaba (GraphSAGE sobre rede de transacções), fake news detection (grafos de propagação), user recommendation. <strong>Traffic forecasting:</strong> DCRNN (Diffusion Convolutional RNN, Li et al., 2018) modela o grafo de estradas com difusão em GNN e combina com GRU para séries temporais — prediz velocidade em 207 sensores de tráfego em SF. <strong>Physics simulation:</strong> GNN-based simulation (Sanchez-Gonzalez et al., DeepMind 2020) aprende dinâmica de sistemas de partículas a partir de dados, generalizando para materiais novos.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 660 190" width="100%" style={{display:'block'}}>
            <text x="330" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Molécula como Grafo — Átomos como Nós, Ligações como Arestas</text>
            {/* Benzene-like molecule */}
            {/* Hexagon vertices (benzene ring) */}
            <circle cx="280" cy="70" r="16" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <text x="280" y="67" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">C</text>
            <text x="280" y="78" fill="#94a3b8" fontSize="8" textAnchor="middle">sp2</text>
            <circle cx="330" cy="55" r="16" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <text x="330" y="52" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">C</text>
            <text x="330" y="63" fill="#94a3b8" fontSize="8" textAnchor="middle">sp2</text>
            <circle cx="380" cy="70" r="16" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <text x="380" y="67" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">C</text>
            <text x="380" y="78" fill="#94a3b8" fontSize="8" textAnchor="middle">sp2</text>
            <circle cx="380" cy="120" r="16" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <text x="380" y="117" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">C</text>
            <text x="380" y="128" fill="#94a3b8" fontSize="8" textAnchor="middle">sp2</text>
            <circle cx="330" cy="140" r="16" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <text x="330" y="137" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">C</text>
            <text x="330" y="148" fill="#94a3b8" fontSize="8" textAnchor="middle">sp2</text>
            <circle cx="280" cy="120" r="16" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="2"/>
            <text x="280" y="117" fill="#f59e0b" fontSize="10" fontWeight="700" textAnchor="middle">C</text>
            <text x="280" y="128" fill="#94a3b8" fontSize="8" textAnchor="middle">sp2</text>
            {/* Ring bonds */}
            <line x1="293" y1="66" x2="317" y2="59" stroke={C} strokeWidth="2"/>
            <line x1="343" y1="59" x2="367" y2="66" stroke={C} strokeWidth="2"/>
            <line x1="380" y1="86" x2="380" y2="104" stroke={C} strokeWidth="2"/>
            <line x1="367" y1="126" x2="343" y2="136" stroke={C} strokeWidth="2"/>
            <line x1="317" y1="136" x2="293" y2="126" stroke={C} strokeWidth="2"/>
            <line x1="280" y1="86" x2="280" y2="104" stroke={C} strokeWidth="2"/>
            {/* Heteroatom substituents */}
            <circle cx="440" cy="70" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2"/>
            <text x="440" y="67" fill="#f97316" fontSize="10" fontWeight="700" textAnchor="middle">N</text>
            <text x="440" y="78" fill="#94a3b8" fontSize="8" textAnchor="middle">+charge</text>
            <line x1="396" y1="70" x2="426" y2="70" stroke="#f97316" strokeWidth="1.8"/>
            <circle cx="220" cy="70" r="14" fill="rgba(249,115,22,0.06)" stroke="#fb923c" strokeWidth="2"/>
            <text x="220" y="67" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle">O</text>
            <text x="220" y="78" fill="#94a3b8" fontSize="8" textAnchor="middle">-OH</text>
            <line x1="264" y1="70" x2="234" y2="70" stroke="#fb923c" strokeWidth="1.8"/>
            {/* Legend */}
            <rect x="80" y="155" width="10" height="10" fill="#f59e0b" rx="2"/>
            <text x="95" y="173" fill="#94a3b8" fontSize="9">C — carbono (feature: sp2, aromático)</text>
            <rect x="280" y="155" width="10" height="10" fill="#f97316" rx="2"/>
            <text x="295" y="173" fill="#94a3b8" fontSize="9">N — azoto (feature: carga +1)</text>
            <rect x="460" y="155" width="10" height="10" fill="#fb923c" rx="2"/>
            <text x="475" y="173" fill="#94a3b8" fontSize="9">O — oxigénio (feature: -OH)</text>
            <text x="330" y="190" fill={C} fontSize="9" textAnchor="middle">arestas: tipo de ligação (simples/dupla/aromática) como edge features</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.5rem"}}><strong>Message passing</strong>: em cada camada, cada nó agrega mensagens dos vizinhos e actualiza a sua representação — generaliza convolução para grafos irregulares.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>GCN</strong> (Kipf & Welling) normaliza por grau: H^(l+1) = σ(D^(-½)ÂD^(-½)H^(l)W^(l)); <strong>GraphSAGE</strong> usa sampling para escalar a grafos grandes.</li>
              <li style={{marginBottom:"0.5rem"}}><strong>Graph Attention Networks (GAT)</strong> aprendem pesos de atenção por aresta — diferenciável e mais expressivo que agregação uniforme.</li>
              <li style={{marginBottom:"0.5rem"}}>O <strong>Weisfeiler-Leman test</strong> define o limite de expressividade das GNNs standard — não distingue certas estruturas simétricas (e.g., ciclos do mesmo comprimento).</li>
              <li style={{marginBottom:"0.5rem"}}>Aplicações: predição de ligações, classificação de nós, descoberta de fármacos (molecular graphs), sistemas de recomendação e detecção de fraude.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
