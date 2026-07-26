import React from 'react';
import { Link } from 'react-router-dom';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { modules } from './RecommenderSystems';

const C = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2rem',
  },
  badge: {
    display: 'inline-block',
    background: 'transparent',
    color: C,
    border: `1.5px solid ${C}`,
    fontSize: '0.72rem',
    fontWeight: 700,
    padding: '0.2rem 0.7rem',
    borderRadius: 20,
    marginBottom: '0.75rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: '0.4rem',
  },
  sub: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '2.5rem',
  },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, borderLeft: `3px solid ${C}`, paddingLeft: '0.85rem', marginBottom: '1rem' },
  highlight: {
    background: `${C}15`,
    borderLeft: `3px solid ${C}`,
    padding: '0.85rem 1.1rem',
    borderRadius: '0 8px 8px 0',
    marginBottom: '1rem',
  },
  note: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    padding: '0.85rem 1.1rem',
    borderRadius: 8,
    marginBottom: '1rem',
  },
  p: {
    color: 'var(--text-secondary)',
    lineHeight: 1.75,
    marginBottom: '0.85rem',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    borderRadius: 12,
    padding: '1.5rem',
    marginBottom: '1rem',
    overflowX: 'auto',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2rem 0',
  },
};

export default function REC2() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>
        ← Recommender Systems
      </Link>
      <div style={S.badge}>MÓDULO {modules[1].num}</div>
      <h1 style={S.h1}>{modules[1].title}</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. Representação de Conteúdo</h2>
        <p style={S.p}>
          A ideia central do Content-Based Filtering é criar um perfil do
          utilizador e dos itens com base em features descritivas do conteúdo, e
          recomendar itens similares ao histórico do utilizador. Ao contrário do
          CF, não precisa de dados de outros utilizadores.
        </p>
        <p style={S.p}>
          <strong>Texto:</strong> TF-IDF para descrições, sinopses e reviews. O
          IDF (Inverse Document Frequency) penaliza termos comuns a muitos
          documentos (ex: "o", "de"); o TF (Term Frequency) recompensa a
          frequência local do termo no documento.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Embeddings de texto:</strong> Word2Vec, GloVe, BERT sentence
            embeddings — representações densas que capturam semântica. Sinopses
            de filmes do mesmo género ficam próximas no espaço vetorial,
            permitindo similaridade por produto interno ou cosine.
          </p>
        </div>
        <p style={S.p}>
          <strong>Features estruturadas:</strong> género, ano, duração, atores,
          tags — one-hot encoding para variáveis categóricas de baixa
          cardinalidade, ou embeddings categóricos para alta cardinalidade (ex:
          ID de ator).
        </p>
        <p style={S.p}>
          <strong>Imagens:</strong> features de CNN (ResNet, ViT) para produtos,
          capas de álbuns, thumbnails de vídeos. O penúltimo layer da CNN produz
          um vetor de features compacto e semanticamente rico.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 200" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="200" fill="var(--bg-secondary)" />
            <text
              x="340"
              y="20"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
              fontWeight="600"
            >
              Pipeline de Representação de Conteúdo
            </text>
            {/* Raw content box */}
            <rect
              x="20"
              y="40"
              width="130"
              height="110"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
            <text
              x="85"
              y="62"
              textAnchor="middle"
              fill="#cbd5e1"
              fontSize="11"
              fontWeight="600"
            >
              Conteúdo Raw
            </text>
            <text
              x="85"
              y="83"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              {' '}
              texto
            </text>
            <text
              x="85"
              y="100"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              {' '}
              imagem
            </text>
            <text
              x="85"
              y="117"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              {' '}
              metadados
            </text>
            <text
              x="85"
              y="134"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              {' '}
              tags
            </text>
            {/* Arrow 1 */}
            <line
              x1="150"
              y1="95"
              x2="200"
              y2="95"
              stroke={C}
              strokeWidth="2"
              markerEnd="url(#a1)"
            />
            <polygon points="200,90 212,95 200,100" fill={C} />
            {/* Feature extraction box */}
            <rect
              x="212"
              y="40"
              width="145"
              height="110"
              rx="8"
              fill="rgba(74,158,237,0.06)"
              stroke={C}
              strokeWidth="1.5"
            />
            <text
              x="284"
              y="62"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="600"
            >
              Extração de Features
            </text>
            <text
              x="284"
              y="83"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              TF-IDF / BERT
            </text>
            <text
              x="284"
              y="100"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              ResNet / ViT
            </text>
            <text
              x="284"
              y="117"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              One-hot / Embed.
            </text>
            <text
              x="284"
              y="134"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              Concatenação
            </text>
            {/* Arrow 2 */}
            <line
              x1="357"
              y1="95"
              x2="407"
              y2="95"
              stroke={C}
              strokeWidth="2"
            />
            <polygon points="407,90 419,95 407,100" fill={C} />
            {/* Dense vector box */}
            <rect
              x="419"
              y="55"
              width="110"
              height="78"
              rx="8"
              fill={`${C}20`}
              stroke={C}
              strokeWidth="2"
            />
            <text
              x="474"
              y="78"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="600"
            >
              Vetor Denso
            </text>
            <text
              x="474"
              y="97"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="10"
            >
              [0.2, 0.8, 0.1,
            </text>
            <text
              x="474"
              y="113"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="10"
            >
              0.6, 0.3, ...]
            </text>
            {/* Similarity */}
            <text x="560" y="75" fill="#94a3b8" fontSize="10">
              Cosine Sim.
            </text>
            <text x="560" y="92" fill={C} fontSize="10" fontWeight="600">
              Item A ↔ Item B
            </text>
            <line
              x1="529"
              y1="85"
              x2="555"
              y2="85"
              stroke={C}
              strokeWidth="1"
              strokeDasharray="3,2"
            />
            <text x="560" y="115" fill="#475569" fontSize="10">
              sim = cos(θ)
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Perfis de Utilizador</h2>
        <p style={S.p}>
          <strong>Perfil explícito:</strong> ratings, likes, listas de favoritos
          — sinal direto e interpretável mas escasso. Utilizadores raramente
          avaliam mais de 1–2% dos itens com que interagem.
        </p>
        <p style={S.p}>
          <strong>Perfil implícito:</strong> tempo de visualização, cliques,
          scroll depth, replay, skip — sinal abundante mas ruidoso. Um clique
          pode ser acidente; ver 80% de um vídeo é sinal forte de interesse.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Construção do perfil:</strong> média ponderada dos vetores
            dos itens consumidos, onde o peso é o rating ou a recência. Perfil
            do utilizador u: <InlineMath math="p_u = \sum w_i \times q_i" />, somando sobre itens consumidos.
          </p>
        </div>
        <p style={S.p}>
          <strong>Decay temporal:</strong> preferências antigas pesam menos.
          Exponential decay com fator <InlineMath math="\gamma^t" /> (t = dias desde interação). Permite
          que o perfil reflita gostos atuais em vez de histórico remoto.
        </p>
        <p style={S.p}>
          <strong>User drift:</strong> interesses mudam ao longo do tempo — um
          utilizador que gostava de animação na adolescência pode preferir
          documentários agora. Solução: janelas deslizantes (últimos 30 dias)
          para curto prazo + modelo de longo prazo combinados.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Similaridade e Ranking</h2>
        <p style={S.p}>
          <strong>Cosine Similarity:</strong> <InlineMath math="\text{sim}(u,i) = \dfrac{p_u \cdot q_i}{\lVert p_u \rVert \times \lVert q_i \rVert}" />. Invariante à magnitude do vetor — funciona bem para text
          embeddings onde comprimento do documento não deve influenciar
          similaridade.
        </p>
        <p style={S.p}>
          <strong>Distância Euclidiana:</strong> sensível à magnitude — útil
          quando a escala importa, como em features de preço ou duração
          normalizados.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Approximate Nearest Neighbors (ANN):</strong> FAISS
            (Facebook), ScaNN (Google), Annoy (Spotify) — busca eficiente em
            vetores de alta dimensão sem calcular todas as distâncias. HNSW
            (Hierarchical Navigable Small World) é a estrutura de índice mais
            popular: grafo hierárquico que permite navegação logarítmica.
          </p>
        </div>
        <p style={S.p}>
          <strong>Re-ranking:</strong> após retrieval por similaridade (top-100
          ou top-1000), re-rank com modelo mais pesado — ex: gradient boosting
          sobre features adicionais como popularidade do item, contexto
          temporal, ou diversidade da lista.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 210" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="210" fill="var(--bg-secondary)" />
            <text
              x="340"
              y="20"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
              fontWeight="600"
            >
              FAISS — Busca Approximate Nearest Neighbors
            </text>
            {/* Embedding space */}
            <ellipse
              cx="300"
              cy="115"
              rx="220"
              ry="80"
              fill="rgba(74,158,237,0.04)"
              stroke="var(--card-border)"
              strokeWidth="1.5"
            />
            {/* Distance circles */}
            <circle
              cx="200"
              cy="105"
              r="50"
              fill="none"
              stroke={`${C}30`}
              strokeWidth="1.5"
              strokeDasharray="4,3"
            />
            <circle
              cx="200"
              cy="105"
              r="80"
              fill="none"
              stroke={`${C}18`}
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            {/* Query vector */}
            <circle cx="200" cy="105" r="8" fill={C} />
            <text
              x="200"
              y="92"
              textAnchor="middle"
              fill={C}
              fontSize="11"
              fontWeight="700"
            >
              Query
            </text>
            {/* Neighbor points */}
            <circle cx="230" cy="80" r="6" fill={`${C}cc`} />
            <text x="240" y="75" fill="#e2e8f0" fontSize="10">
              NN1
            </text>
            <circle cx="170" cy="130" r="6" fill={`${C}99`} />
            <text x="148" y="128" fill="#94a3b8" fontSize="10">
              NN2
            </text>
            <circle cx="245" cy="130" r="6" fill={`${C}80`} />
            <text x="255" y="133" fill="#94a3b8" fontSize="10">
              NN3
            </text>
            {/* Far points */}
            <circle cx="380" cy="90" r="5" fill="var(--card-border)" />
            <circle cx="420" cy="130" r="5" fill="var(--card-border)" />
            <circle cx="360" cy="145" r="5" fill="var(--card-border)" />
            <circle cx="310" cy="60" r="5" fill="var(--card-border)" />
            {/* Lines to neighbors */}
            <line
              x1="200"
              y1="105"
              x2="230"
              y2="80"
              stroke={C}
              strokeWidth="1.5"
              strokeDasharray="3,2"
            />
            <line
              x1="200"
              y1="105"
              x2="170"
              y2="130"
              stroke={`${C}80`}
              strokeWidth="1"
              strokeDasharray="3,2"
            />
            <line
              x1="200"
              y1="105"
              x2="245"
              y2="130"
              stroke={`${C}70`}
              strokeWidth="1"
              strokeDasharray="3,2"
            />
            {/* Labels */}
            <text x="530" y="70" fill="#94a3b8" fontSize="11">
              FAISS / ScaNN:
            </text>
            <text x="530" y="88" fill={C} fontSize="11">
              sub-linear search
            </text>
            <text x="530" y="106" fill="#94a3b8" fontSize="11">
              HNSW index
            </text>
            <text x="530" y="124" fill="#94a3b8" fontSize="11">
              IVF + PQ compress.
            </text>
            <text x="530" y="150" fill="#475569" fontSize="10">
              Millões de vetores,
            </text>
            <text x="530" y="165" fill="#475569" fontSize="10">
              ms de latência
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Vantagens, Limitações e Casos de Uso</h2>
        <p style={S.p}>
          <strong>Vantagens:</strong> não precisa de dados de outros
          utilizadores (sem cold start de utilizador novo desde que haja
          conteúdo descritivo), explicável ("recomendado porque gostaste de X"),
          funciona bem com catálogos de nicho onde há poucos utilizadores por
          item.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Limitações:</strong> filter bubble e serendipidade baixa — o
            sistema recomenda sempre coisas similares ao histórico, dificultando
            descoberta. Requer features ricas de conteúdo (custo editorial ou
            extração automática). Não captura preferências implícitas de estilo
            coletivo.
          </p>
        </div>
        <p style={S.p}>
          <strong>Casos de uso:</strong> notícias (Google News usa CB para cold
          start de artigos novos), produtos de e-commerce (descrições textuais),
          música por audio features (componente CB do Spotify Discover Weekly),
          podcasts e artigos académicos.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Híbrido típico:</strong> content-based para cold start
            (utilizadores e itens novos sem histórico) + collaborative filtering
            quando há histórico suficiente (limiar de N interações). É a
            abordagem mais comum em produção.
          </p>
        </div>
      </div>
    </div>
  );
}
