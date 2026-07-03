import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './RecommenderSystems';

const C = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color: C, marginBottom: '1rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function REC1() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>← Recommender Systems</Link>
      <div style={S.badge}>MÓDULO {modules[0].num}</div>
      <h1 style={S.h1}>{modules[0].title}</h1>
      <p style={S.sub}>{modules[0].subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Collaborative Filtering — Conceito</h2>
        <p style={S.p}>
          A ideia central do Collaborative Filtering (CF) é recomendar itens com base no comportamento coletivo de utilizadores similares, sem precisar de conhecer o conteúdo dos itens. O sistema aprende padrões a partir das interações (ratings, cliques, compras) e extrapola preferências.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>User-based CF:</strong> encontrar utilizadores com histórico similar ao utilizador alvo usando cosine similarity ou Pearson correlation, e recomendar itens que esses utilizadores gostaram mas o utilizador alvo ainda não viu.
          </p>
        </div>
        <p style={S.p}>
          <strong>Item-based CF</strong> (Amazon, 2003 — Linden et al.): calcular similaridade entre itens com base nos utilizadores que os avaliaram. Mais estável que user-based porque os itens mudam menos do que as preferências dos utilizadores. É a base do motor da Amazon "clientes que compraram X também compraram Y".
        </p>
        <p style={S.p}>
          <strong>Problema de escala:</strong> user-based CF tem complexidade O(U²) com milhões de utilizadores. A solução passa por Locality Sensitive Hashing (LSH) para approximate nearest neighbors — agrupa utilizadores similares em buckets sem calcular todas as pares de distância.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 270" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="270" fill="var(--bg-secondary)" />
            <text x="340" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Matriz Utilizador-Item (ratings 1–5)</text>
            {['Item A', 'Item B', 'Item C', 'Item D', 'Item E'].map((label, i) => (
              <text key={label} x={175 + i * 90} y={48} textAnchor="middle" fill={C} fontSize="11" fontWeight="700">{label}</text>
            ))}
            {['Alice', 'Bob', 'Carol', 'Dave'].map((label, i) => (
              <text key={label} x={75} y={88 + i * 46} textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="600">{label}</text>
            ))}
            {[
              [5, 3, 0, 1, 4],
              [4, 0, 4, 1, 2],
              [0, 1, 5, 2, 0],
              [1, 0, 4, 5, 1],
            ].map((row, ri) =>
              row.map((val, ci) => {
                const x = 132 + ci * 90;
                const y = 64 + ri * 46;
                const isRecommend = ri === 0 && ci === 2;
                const isSimilarRow = ri === 1 || ri === 2;
                const fill = isRecommend ? `${C}35` : isSimilarRow ? 'rgba(249,115,22,0.12)' : 'rgba(249,115,22,0.04)';
                const stroke = isRecommend ? C : isSimilarRow ? `${C}60` : 'var(--card-border)';
                return (
                  <g key={`${ri}-${ci}`}>
                    <rect x={x} y={y} width={76} height={34} rx={4} fill={fill} stroke={stroke} strokeWidth={isRecommend ? 2 : 1} />
                    <text x={x + 38} y={y + 21} textAnchor="middle" fill={val === 0 ? 'var(--card-border)' : '#e2e8f0'} fontSize="14" fontWeight={val > 0 ? '600' : '400'}>
                      {val === 0 ? '—' : val}
                    </text>
                  </g>
                );
              })
            )}
            {/* similares — Bob (ri=1,y=110) a Carol (ri=2,y=156+34=190) */}
            <line x1="118" y1="110" x2="118" y2="192" stroke={C} strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="118" y="106" textAnchor="middle" fill={C} fontSize="9" fontWeight="600">similares</text>
            {/* Item C col center: x=132+2*90+38=350 */}
            <line x1="350" y1="98" x2="350" y2="234" stroke={C} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="350" y="245" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">Recomendar a Alice</text>
            <text x="350" y="260" textAnchor="middle" fill="#64748b" fontSize="10">Bob e Carol avaliaram Item C positivamente</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Matrix Factorization</h2>
        <p style={S.p}>
          Matrix Factorization (MF) decompõe a matriz utilizador-item (U×I) em dois embeddings: <strong>P</strong> (U×k) para utilizadores e <strong>Q</strong> (I×k) para itens, onde k é a dimensão latente. O rating estimado é r̂_ui = p_u · q_i.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Função objetivo:</strong> minimizar Σ(r_ui − p_u · q_i)² + λ(‖p_u‖² + ‖q_i‖²) via SGD ou ALS. O termo de regularização λ previne overfitting ao penalizar embeddings de grande magnitude.
          </p>
        </div>
        <p style={S.p}>
          <strong>SVD (Singular Value Decomposition):</strong> decomposição exata mas não lida bem com dados esparsos — requer imputação dos valores em falta. <strong>Simon Funk SVD</strong> (Netflix Prize, 2006): versão estocástica que treina apenas sobre ratings observados, ignorando entradas vazias.
        </p>
        <p style={S.p}>
          <strong>SVD++</strong> (Koren, 2008): incorpora feedback implícito (itens visualizados mas não avaliados) diretamente nas embeddings dos utilizadores. Foi parte central do conjunto de modelos que ganhou o Netflix Prize, com RMSE 10.06% abaixo do baseline Cinematch da Netflix.
        </p>
        <p style={S.p}>
          <strong>Dimensão latente k:</strong> hiperparâmetro crítico — k pequeno leva a underfitting (não captura nuances de gosto); k grande leva a overfitting e aumenta custo computacional. Na prática usa-se k entre 20 e 200.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 210" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="210" fill="var(--bg-secondary)" />
            <text x="310" y="10" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">R ≈ P × Qᵀ — Decomposição em Fatores Latentes</text>
            <rect x="30" y="38" width="110" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="85" y="33" textAnchor="middle" fill="#cbd5e1" fontSize="11">R (U × I)</text>
            {[0,1,2,3].map(i => [0,1,2].map(j => (
              <rect key={`r${i}${j}`} x={36 + j * 32} y={46 + i * 26} width={26} height={18} rx={3} fill="var(--bg-secondary)" stroke="var(--card-border)" />
            )))}
            <text x="85" y="172" textAnchor="middle" fill="#475569" fontSize="10">esparsa</text>
            <text x="155" y="103" textAnchor="middle" fill="#94a3b8" fontSize="20">≈</text>
            <rect x="170" y="38" width="75" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="207" y="33" textAnchor="middle" fill={C} fontSize="11">P (U × k)</text>
            {[0,1,2,3].map(i => [0,1].map(j => (
              <rect key={`p${i}${j}`} x={176 + j * 32} y={46 + i * 26} width={26} height={18} rx={3} fill={`${C}20`} stroke={`${C}40`} />
            )))}
            <text x="207" y="172" textAnchor="middle" fill={C} fontSize="10">utilizadores</text>
            <text x="258" y="103" textAnchor="middle" fill="#94a3b8" fontSize="20">×</text>
            <rect x="272" y="58" width="125" height="70" rx="6" fill="rgba(249,115,22,0.06)" stroke={`${C}70`} strokeWidth="1.5" />
            <text x="334" y="53" textAnchor="middle" fill={`${C}cc`} fontSize="11">Qᵀ (k × I)</text>
            {[0,1].map(i => [0,1,2].map(j => (
              <rect key={`q${i}${j}`} x={278 + j * 38} y={65 + i * 28} width={32} height={20} rx={3} fill={`${C}18`} stroke={`${C}35`} />
            )))}
            <text x="334" y="142" textAnchor="middle" fill={`${C}99`} fontSize="10">itens</text>
            <line x1="170" y1="188" x2="245" y2="188" stroke={C} strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x="207" y="200" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">k latente</text>
            <text x="490" y="75" fill="#94a3b8" fontSize="11">Fatores latentes capturam:</text>
            <text x="490" y="95" fill={C} fontSize="11">• género de conteúdo</text>
            <text x="490" y="113" fill={C} fontSize="11">• época / estilo</text>
            <text x="490" y="131" fill={C} fontSize="11">• popularidade</text>
            <text x="490" y="158" fill="#e2e8f0" fontSize="12" fontWeight="700">r̂_ui = p_u · q_i</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. ALS — Alternating Least Squares</h2>
        <p style={S.p}>
          ALS é uma alternativa ao SGD para treinar Matrix Factorization: fixa Q e resolve P em closed-form (mínimos quadrados), depois fixa P e resolve Q. Repete até convergir. Cada linha de P tem solução analítica: p_u = (QᵀQ + λI)⁻¹ Qᵀ r_u.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Vantagem chave:</strong> ALS é paralelizável por utilizador e por item — cada linha de P/Q é independente dado a outra matriz. Implementado no Apache Spark MLlib para escala horizontal com dezenas de milhões de utilizadores.
          </p>
        </div>
        <p style={S.p}>
          <strong>Implicit ALS</strong> (Hu, Koren, Volinsky 2008): versão para feedback implícito (cliques, plays, compras). Define confiança c_ui = 1 + α × r_ui onde r_ui é a frequência de interação e α é hiperparâmetro. Preferência binária p_ui ∈ {'{0,1}'}. Padrão em serviços de streaming como Spotify e Apple Music.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Cold start em MF:</strong> utilizadores ou itens novos sem histórico não têm embedding treinado — problema fundamental de CF. Soluções: fallback para popularidade global, bootstrap com content-based filtering, ou few-shot warm-up com as primeiras interações do utilizador.
          </p>
        </div>
        <p style={S.p}>
          <strong>Regularização λ:</strong> controla o trade-off bias-variância em MF. Escolhido por cross-validation em grid search. Valores típicos: 0.01–0.1 para ratings explícitos; 1–10 para feedback implícito com muitas interações.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Avaliação de CF</h2>
        <p style={S.p}>
          <strong>RMSE e MAE</strong> medem o erro de predição de rating (offline). Limitação importante: não medem a utilidade real da recomendação — um sistema pode ter RMSE baixo mas recomendar itens que o utilizador já conhece ou não tem interesse em descobrir.
        </p>
        <p style={S.p}>
          <strong>Precision@K, Recall@K, NDCG@K:</strong> métricas de ranking — avaliam a qualidade da lista top-K. NDCG (Normalized Discounted Cumulative Gain) penaliza itens relevantes em posições mais baixas. São mais alinhadas com o que o utilizador realmente experiencia no produto.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Train/test split temporal:</strong> absolutamente crucial — nunca fazer split aleatório. Um split aleatório permite data leakage: o modelo vê interações futuras durante treino e "prevê" o passado, inflando artificialmente as métricas offline.
          </p>
        </div>
        <p style={S.p}>
          <strong>Leave-one-out evaluation:</strong> reservar a última interação de cada utilizador para teste. Computa-se o ranking de todos os itens e avalia-se em que posição aparece o item de teste. Popular em benchmarks académicos como MovieLens e Amazon Reviews.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 190" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="190" fill="var(--bg-secondary)" />
            <text x="340" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Precision@K e Recall@K — Lista Ordenada de Recomendações</text>
            {[
              { label: '#1', relevant: true },
              { label: '#2', relevant: true },
              { label: '#3', relevant: false },
              { label: '#4', relevant: true },
              { label: '#5', relevant: false },
              { label: '#6', relevant: false },
            ].map((item, i) => {
              const inK = i < 3;
              const fill = inK && item.relevant ? `${C}25` : 'rgba(249,115,22,0.04)';
              const stroke = inK && item.relevant ? C : inK ? 'var(--card-border)' : '#334155';
              const sw = inK && item.relevant ? 2 : 1;
              const tickColor = item.relevant ? (inK ? C : '#64748b') : '#334155';
              return (
                <g key={i}>
                  <rect x={40 + i * 98} y={45} width={80} height={72} rx={6}
                    fill={fill} stroke={stroke} strokeWidth={sw} />
                  <text x={80 + i * 98} y={78} textAnchor="middle" fill={inK ? '#94a3b8' : '#475569'} fontSize="11">{item.label}</text>
                  <text x={80 + i * 98} y={102} textAnchor="middle" fill={tickColor} fontSize="16" fontWeight="700">
                    {item.relevant ? '✓' : '✗'}
                  </text>
                </g>
              );
            })}
            <line x1="325" y1="36" x2="325" y2="132" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3" />
            <text x="334" y="148" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">K = 3</text>
            <text x="110" y="172" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">Precision@3 = 2/3 = 0.67</text>
            <text x="400" y="172" textAnchor="middle" fill="#94a3b8" fontSize="11">NDCG penaliza relevância em posições mais baixas</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Collaborative Filtering — Conceito</strong> — recomenda itens com base no comportamento colectivo de utilizadores similares, sem necessitar de conhecer o conteúdo dos itens; distingue-se entre a variante user-based (similaridade entre utilizadores) e item-based (similaridade entre itens, mais estável e usada pela Amazon).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Matrix Factorization</strong> — decompõe a matriz utilizador-item em dois embeddings latentes (P e Q) cujo produto interno estima ratings; treina minimizando o erro quadrático com regularização L2, sendo o Simon Funk SVD (Netflix Prize, 2006) a variante estocástica que ignora entradas vazias.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ALS — Alternating Least Squares</strong> — alternativa ao SGD que fixa uma das matrizes e resolve a outra em closed-form de forma iterativa; é paralelizável por utilizador ou item e a base do Implicit ALS (Hu et al., 2008) para feedback implícito como cliques e streams.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Avaliação de CF</strong> — métricas de rating (RMSE, MAE) avaliam precisão de previsão mas não utilidade real; métricas de ranking (Precision@K, Recall@K, NDCG@K) são mais alinhadas com a experiência do utilizador, e o split temporal é obrigatório para evitar data leakage.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
