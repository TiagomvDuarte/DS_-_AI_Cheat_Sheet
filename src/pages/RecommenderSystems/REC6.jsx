import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './RecommenderSystems';

const C = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, borderLeft: `3px solid ${C}`, paddingLeft: '0.85rem', marginBottom: '1rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function REC6() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>← Recommender Systems</Link>
      <div style={S.badge}>MÓDULO {modules[5].num}</div>
      <h1 style={S.h1}>{modules[5].title}</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. Graph-Based Recommendation</h2>
        <p style={S.p}>
          As interações entre utilizadores e itens formam naturalmente um <strong>grafo bipartido</strong>: nós de utilizador ligados a nós de item através de arestas de interação (visualização, compra, avaliação). Este grafo captura relações indiretas de ordem superior — se o utilizador A interagiu com o item X, e o utilizador B também, e B interagiu com Y, então A pode gostar de Y mesmo sem nunca ter visto Y diretamente.
        </p>
        <p style={S.p}>
          <strong>Random Walks</strong> como SimRank e Personalized PageRank propagam scores de relevância pelo grafo a partir de um nó âncora (o utilizador). O Pinterest PinSage usa random walks para gerar pares de treino — dois nós visitados frequentemente juntos nos walks são considerados similares.
        </p>
        <div style={S.highlight}>
          <strong>Graph Neural Networks (GNNs):</strong> mensagens passam entre nós vizinhos, agregando informação sobre itens consumidos por utilizadores similares. Ao contrário de Matrix Factorization, as GNNs capturam relações de ordem superior (amigos de amigos) e suportam heterogeneidade — múltiplos tipos de nós (utilizadores, itens, categorias) e múltiplos tipos de arestas.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 210" width="100%" style={{ display: 'block' }}>
            <text x="250" y="18" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">Grafo Bipartido Utilizador-Item e Caminho Multi-hop</text>
            {/* User nodes */}
            <circle cx="80" cy="80" r="22" fill={`${C}30`} stroke={C} strokeWidth="2" />
            <text x="80" y="76" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">U1</text>
            <text x="80" y="88" textAnchor="middle" fill="#94a3b8" fontSize="8">utilizador</text>
            <circle cx="80" cy="160" r="22" fill={`${C}15`} stroke={C} strokeWidth="1.5" />
            <text x="80" y="156" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">U2</text>
            <text x="80" y="168" textAnchor="middle" fill="#94a3b8" fontSize="8">utilizador</text>
            {/* Item nodes (squares) */}
            <rect x="198" y="58" width="44" height="44" rx="6" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="220" y="81" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">I1</text>
            <text x="220" y="93" textAnchor="middle" fill="#475569" fontSize="8">item</text>
            <rect x="198" y="138" width="44" height="44" rx="6" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="220" y="161" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">I2</text>
            <text x="220" y="173" textAnchor="middle" fill="#475569" fontSize="8">item</text>
            {/* Second user node */}
            <circle cx="360" cy="120" r="22" fill={`${C}15`} stroke={C} strokeWidth="1.5" />
            <text x="360" y="116" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">U3</text>
            <text x="360" y="128" textAnchor="middle" fill="#94a3b8" fontSize="8">utilizador</text>
            {/* Target item */}
            <rect x="428" y="98" width="44" height="44" rx="6" fill={`${C}25`} stroke={C} strokeWidth="2" />
            <text x="450" y="121" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">I3</text>
            <text x="450" y="133" textAnchor="middle" fill="#94a3b8" fontSize="8">item</text>
            {/* Edges */}
            <line x1="102" y1="80" x2="198" y2="80" stroke="var(--card-border)" strokeWidth="1.5" />
            <line x1="102" y1="90" x2="198" y2="155" stroke="var(--card-border)" strokeWidth="1.5" />
            <line x1="102" y1="160" x2="198" y2="155" stroke="var(--card-border)" strokeWidth="1.5" />
            {/* Multi-hop path highlighted */}
            <line x1="242" y1="155" x2="338" y2="125" stroke={C} strokeWidth="2.5" strokeDasharray="5,3" />
            <line x1="382" y1="120" x2="428" y2="120" stroke={C} strokeWidth="2.5" strokeDasharray="5,3" />
            <line x1="102" y1="80" x2="198" y2="80" stroke={C} strokeWidth="2.5" />
            {/* Legend */}
            <circle cx="60" cy="198" r="6" fill={`${C}30`} stroke={C} strokeWidth="1.5" />
            <text x="72" y="202" fill="#64748b" fontSize="9">Utilizador</text>
            <rect x="120" y="192" width="12" height="12" rx="2" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="138" y="202" fill="#64748b" fontSize="9">Item</text>
            <line x1="165" y1="198" x2="185" y2="198" stroke={C} strokeWidth="2" strokeDasharray="4,2" />
            <text x="190" y="202" fill="#64748b" fontSize="9">Caminho multi-hop (U1→I1→U3→I3)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. PinSage e GraphSAGE</h2>
        <p style={S.p}>
          O <strong>GraphSAGE</strong> (Hamilton et al., 2017) é uma GNN indutiva — aprende uma função de agregação de vizinhos em vez de embeddings fixos por nó, o que lhe permite generalizar a nós não vistos durante o treino. Amostra um número fixo de vizinhos para escalabilidade e aplica um aggregator (mean, max-pool, ou LSTM) sobre os vetores de features desses vizinhos.
        </p>
        <p style={S.p}>
          <strong>PinSage</strong> (Ying et al., Pinterest, 2018) aplica os princípios do GraphSAGE a um grafo com 3 mil milhões de pins e 18 mil milhões de arestas. A inovação-chave é usar random walks para amostrar vizinhos ponderados por importância (frequência de co-visita) em vez de contagem simples. Em produção desde 2018, o PinSage obteve +30% de engagement vs. o baseline anterior.
        </p>
        <div style={S.note}>
          <strong>Curriculum training:</strong> durante o treino, começa-se com negativos fáceis (itens aleatórios do catálogo) e progressivamente introduce-se hard negatives gerados pelo modelo atual — itens que o modelo confunde com positivos. Este currículo melhora significativamente a qualidade dos embeddings aprendidos.
        </div>
        <p style={S.p}>
          No serving, os embeddings de todos os pins são pré-computados e indexados em FAISS para recuperação ANN em tempo real. A separação entre a fase de treino (GNN pesada) e a fase de serving (busca vetorial) é o que torna o sistema viável a esta escala.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Knowledge Graph Recommendation</h2>
        <p style={S.p}>
          Os <strong>Knowledge Graphs (KGs)</strong> são bases de conhecimento estruturadas que codificam entidades e relações semânticas. Por exemplo: "Inception" → genre → "Sci-fi"; "Inception" → director → "Christopher Nolan"; "Inception" → actor → "Leonardo DiCaprio". Integrar KGs em RecSys permite capturar atributos semânticos ricos dos itens sem depender exclusivamente de dados de interação.
        </p>
        <p style={S.p}>
          O <strong>KGCN</strong> (Wang et al., 2019) propaga informação do KG através de receptive fields em torno de cada item, agregando atributos de entidades semanticamente conectadas. Itens ligados por relações relevantes para o utilizador ficam próximos no espaço de embedding.
        </p>
        <div style={S.highlight}>
          <strong>KGAT</strong> (Knowledge Graph Attention Network) aplica atenção sobre as relações do KG, aprendendo a ponderar a relevância de cada tipo de relação para cada utilizador. Isto permite, por exemplo, que um utilizador cinéfilo enfatize a relação "director" enquanto outro enfatiza "actor".
        </div>
        <p style={S.p}>
          A vantagem mais valiosa dos KGs para RecSys é a <strong>explicabilidade</strong>: é possível justificar uma recomendação com "sugerido porque o realizador X fez filmes de que gostas". Os datasets mais usados combinam MovieLens com Freebase, e Amazon com KGs proprietários. O principal desafio é a construção e manutenção contínua do KG.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 180" width="100%" style={{ display: 'block' }}>
            <text x="250" y="18" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">Knowledge Graph — Tripletos e Propagação KGCN</text>
            {/* Central item */}
            <rect x="208" y="70" width="84" height="36" rx="6" fill={`${C}25`} stroke={C} strokeWidth="2" />
            <text x="250" y="92" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">Inception</text>
            {/* Genre */}
            <rect x="30" y="40" width="70" height="30" rx="6" fill="rgba(74,158,237,0.08)" stroke={`${C}60`} strokeWidth="1.2" />
            <text x="65" y="60" textAnchor="middle" fill="#e2e8f0" fontSize="10">Sci-fi</text>
            <line x1="100" y1="55" x2="204" y2="82" stroke={`${C}60`} strokeWidth="1.2" />
            <polygon points="200,79 208,84 202,89" fill={`${C}60`} />
            <text x="148" y="62" fill="#94a3b8" fontSize="8">genre</text>
            {/* Director */}
            <rect x="30" y="90" width="110" height="30" rx="6" fill="rgba(74,158,237,0.08)" stroke={`${C}60`} strokeWidth="1.2" />
            <text x="85" y="110" textAnchor="middle" fill="#e2e8f0" fontSize="10">C. Nolan</text>
            <line x1="140" y1="105" x2="204" y2="94" stroke={C} strokeWidth="1.8" />
            <polygon points="200,91 208,95 200,99" fill={C} />
            <text x="148" y="97" fill={C} fontSize="8" fontWeight="600">director</text>
            {/* Actor */}
            <rect x="30" y="140" width="110" height="30" rx="6" fill="rgba(74,158,237,0.08)" stroke={`${C}60`} strokeWidth="1.2" />
            <text x="85" y="160" textAnchor="middle" fill="#e2e8f0" fontSize="10">L. DiCaprio</text>
            <line x1="140" y1="148" x2="204" y2="106" stroke={`${C}60`} strokeWidth="1.2" />
            <polygon points="200,103 208,107 202,112" fill={`${C}60`} />
            <text x="180" y="133" fill="#94a3b8" fontSize="8">actor</text>
            {/* Related item */}
            <rect x="380" y="50" width="100" height="30" rx="6" fill="rgba(74,158,237,0.08)" stroke={`${C}60`} strokeWidth="1.2" />
            <text x="430" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="10">Interstellar</text>
            <line x1="292" y1="83" x2="376" y2="64" stroke={C} strokeWidth="1.8" strokeDasharray="5,3" />
            <polygon points="372,61 380,65 373,70" fill={C} />
            <text x="316" y="67" fill={C} fontSize="8" fontWeight="600">similar_to</text>
            {/* KGCN propagation label */}
            <rect x="360" y="100" width="120" height="54" rx="6" fill={`${C}10`} stroke={C} strokeWidth="1.2" />
            <text x="420" y="118" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">KGCN Propagação</text>
            <text x="420" y="132" textAnchor="middle" fill="#94a3b8" fontSize="8">receptive field</text>
            <text x="420" y="142" textAnchor="middle" fill="#94a3b8" fontSize="8">agregação por atenção</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Heterogeneous Information Networks</h2>
        <p style={S.p}>
          As <strong>Heterogeneous Information Networks (HINs)</strong> generalizam os grafos bipartidos ao incorporar múltiplos tipos de nós (utilizadores, itens, autores, categorias, tags) e múltiplos tipos de arestas (comprou, escreveu, pertence-a, co-autoria). Esta riqueza estrutural permite capturar o contexto semântico completo em torno de cada entidade.
        </p>
        <p style={S.p}>
          Os <strong>meta-paths</strong> definem sequências de tipos de nó que codificam relações semânticas específicas. Por exemplo, User → Item → Category → Item representa "itens da mesma categoria que o utilizador aprecia"; User → Item → User → Item representa "itens apreciados por utilizadores similares". Diferentes meta-paths capturam diferentes aspetos de similaridade.
        </p>
        <div style={S.note}>
          <strong>HAN</strong> (Heterogeneous Graph Attention Network): aplica dois níveis de atenção — atenção ao nível do nó (quais vizinhos dentro de um meta-path importam) e atenção ao nível do meta-path (quais meta-paths são mais relevantes para a tarefa). A combinação permite aprendizagem de representações ricas e semanticamente interpretáveis.
        </div>
        <p style={S.p}>
          As HINs têm aplicações naturais em recomendação académica (autores, papers, venues, tópicos), e-commerce (produtos, marcas, categorias, utilizadores, reviews) e redes sociais. Os desafios principais são a necessidade de domain knowledge para definir meta-paths manualmente e a escala computacional para grafos com biliões de nós e arestas heterogéneas.
        </p>
      </div>

    </div>
  );
}
