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

export default function REC5() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>
        ← Recommender Systems
      </Link>
      <div style={S.badge}>MÓDULO {modules[4].num}</div>
      <h1 style={S.h1}>{modules[4].title}</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. Métricas de Avaliação Offline</h2>
        <p style={S.p}>
          As métricas mais simples para sistemas de recomendação são o{' '}
          <strong>RMSE</strong> (Root Mean Squared Error) e o{' '}
          <strong>MAE</strong> (Mean Absolute Error), aplicados à previsão de
          ratings: <InlineMath math="\text{RMSE} = \sqrt{\dfrac{\sum(\hat{r}-r)^2}{N}}" /> e <InlineMath math="\text{MAE} = \dfrac{\sum|\hat{r}-r|}{N}" />. Embora fáceis de
          calcular, estas métricas não refletem a utilidade real das listas de
          recomendação — um sistema pode ter RMSE baixo mas recomendar itens que
          o utilizador nunca consumiria.
        </p>
        <p style={S.p}>
          Para listas ordenadas, as métricas de ranking são mais relevantes.{' '}
          <strong>Precision@K</strong> mede a fração de itens no top-K que são
          relevantes; <strong>Recall@K</strong> mede a fração de todos os itens
          relevantes que foram recuperados no top-K.
        </p>
        <div style={S.highlight}>
          <strong>NDCG@K</strong> (Normalized Discounted Cumulative Gain): mede
          a qualidade do ranking premiando itens relevantes nas primeiras
          posições. <InlineMath math="\text{DCG} = \sum \dfrac{\text{rel}_i}{\log_2(i+1)}" />; <InlineMath math="\text{NDCG} = \dfrac{\text{DCG}}{\text{IDCG}}" />, onde IDCG é o
          DCG ideal (ranking perfeito). Valores próximos de 1 indicam ordenação
          quase perfeita.
        </div>
        <p style={S.p}>
          O <strong>MRR</strong> (Mean Reciprocal Rank) é a média de <InlineMath math="1/\text{rank}" /> do
          primeiro item relevante em cada lista. É especialmente útil em
          cenários onde apenas o resultado de topo importa (ex: motores de
          busca, assistentes de voz). <strong>Coverage</strong> mede a
          percentagem do catálogo que o sistema efetivamente recomenda;{' '}
          <strong>Novelty</strong> quantifica quão inesperados são os itens. A{' '}
          <strong>Serendipity</strong> — itens surpreendentes mas apreciados — é
          a mais difícil de medir em modo offline.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 520 200" width="100%" style={{ display: 'block' }}>
            {/* Title */}
            <text
              x="260"
              y="22"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="11"
              fontWeight="600"
            >
              NDCG — Ranked List com Relevância e Desconto
            </text>
            {/* Columns headers */}
            <text
              x="60"
              y="48"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              Posição
            </text>
            <text
              x="180"
              y="48"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              Item
            </text>
            <text
              x="300"
              y="48"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              Relevância
            </text>
            <text
              x="420"
              y="48"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              Desconto log₂(i+1)
            </text>
            {/* Row 1 */}
            <rect
              x="20"
              y="54"
              width="480"
              height="28"
              rx="4"
              fill={`${C}20`}
            />
            <text
              x="60"
              y="73"
              textAnchor="middle"
              fill={C}
              fontSize="12"
              fontWeight="700"
            >
              1
            </text>
            <text
              x="180"
              y="73"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="12"
            >
              Filme A
            </text>
            <text x="300" y="73" textAnchor="middle" fill={C} fontSize="12">
              3{' '}
            </text>
            <text
              x="420"
              y="73"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              log₂(2) = 1.00
            </text>
            {/* Row 2 */}
            <rect
              x="20"
              y="84"
              width="480"
              height="28"
              rx="4"
              fill="transparent"
            />
            <text
              x="60"
              y="103"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              2
            </text>
            <text
              x="180"
              y="103"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="12"
            >
              Filme B
            </text>
            <text
              x="300"
              y="103"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              0 (não relevante)
            </text>
            <text
              x="420"
              y="103"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              log₂(3) = 1.58
            </text>
            {/* Row 3 */}
            <rect
              x="20"
              y="114"
              width="480"
              height="28"
              rx="4"
              fill={`${C}10`}
            />
            <text
              x="60"
              y="133"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              3
            </text>
            <text
              x="180"
              y="133"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="12"
            >
              Filme C
            </text>
            <text x="300" y="133" textAnchor="middle" fill={C} fontSize="12">
              2{' '}
            </text>
            <text
              x="420"
              y="133"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              log₂(4) = 2.00
            </text>
            {/* Row 4 */}
            <rect
              x="20"
              y="144"
              width="480"
              height="28"
              rx="4"
              fill="transparent"
            />
            <text
              x="60"
              y="163"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              4
            </text>
            <text
              x="180"
              y="163"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="12"
            >
              Filme D
            </text>
            <text x="300" y="163" textAnchor="middle" fill={C} fontSize="12">
              1{' '}
            </text>
            <text
              x="420"
              y="163"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              log₂(5) = 2.32
            </text>
            {/* DCG formula */}
            <text
              x="260"
              y="192"
              textAnchor="middle"
              fill={C}
              fontSize="10"
              fontWeight="700"
            >
              DCG = 3/1.00 + 0/1.58 + 2/2.00 + 1/2.32 = 4.43 → NDCG = DCG/IDCG
            </text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Cold Start e Popularity Bias</h2>
        <p style={S.p}>
          O <strong>cold start de utilizador</strong> ocorre quando um novo
          utilizador não tem histórico de interações. Soluções comuns incluem
          onboarding surveys (como a Netflix pede géneros preferidos na criação
          de conta), priors demográficos e bootstrap content-based com atributos
          do perfil inicial.
        </p>
        <p style={S.p}>
          O <strong>cold start de item</strong> afeta produtos ou conteúdos
          recém-adicionados, sem avaliações. As abordagens passam por
          content-based features (metadados, descrições), boosting editorial
          temporário, ou um braço de exploração em bandit algorithms.
        </p>
        <div style={S.note}>
          <strong>Popularity Bias:</strong> modelos treinados com feedback
          implícito (cliques, visualizações) tendem a sobre-recomendar itens
          populares — o fenómeno "rich get richer". Isto prejudica a cauda longa
          do catálogo e cria feedback loops que amplificam a desigualdade de
          exposição.
        </div>
        <p style={S.p}>
          Mitigação: <strong>Inverse Propensity Scoring (IPS)</strong> —
          downweighting de amostras de itens populares durante o treino, de
          forma a corrigir o viés de seleção. Diversidade forçada no ranking
          final (ex: MMR) também ajuda. A teoria da{' '}
          <strong>Long Tail Economics</strong> (Anderson, 2004) argumenta que
          plataformas digitais conseguem rentabilizar nichos — os RecSys devem
          servir esses nichos, não apenas os hits mainstream.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. A/B Testing e Avaliação Online</h2>
        <p style={S.p}>
          Uma limitação crítica da avaliação offline é que as métricas
          calculadas sobre dados históricos não correlacionam perfeitamente com
          a satisfação real dos utilizadores. O verdadeiro teste é sempre
          online.
        </p>
        <p style={S.p}>
          No <strong>A/B Testing</strong>, os utilizadores são divididos
          aleatoriamente entre o sistema de controlo e o de tratamento. As
          métricas de negócio acompanhadas incluem CTR, tempo de sessão, taxa de
          retenção e conversão. O <strong>interleaving</strong> — misturar
          recomendações de dois sistemas para o mesmo utilizador e medir os
          cliques — é mais sensível estatisticamente e usado extensivamente pela
          Netflix.
        </p>
        <div style={S.highlight}>
          <strong>Guardrails e duração:</strong> É essencial definir métricas de
          segurança (não degradar segmentos específicos de utilizadores). A
          duração típica de um teste é 1–2 semanas para acumular poder
          estatístico suficiente para detetar o efeito mínimo desejado. Atenção
          ao <em>novelty effect</em>: utilizadores reagem positivamente a
          qualquer mudança inicialmente — aguardar estabilização antes de
          concluir.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Serving em Larga Escala</h2>
        <p style={S.p}>
          A arquitetura padrão da indústria para serving em larga escala é{' '}
          <strong>two-stage</strong>: um estágio de <em>retrieval</em> (ANN,
          ~100ms, devolve centenas de candidatos a partir de milhões de itens)
          seguido de um estágio de <em>ranking</em> (modelo pesado, reordena os
          candidatos com features ricas).
        </p>
        <p style={S.p}>
          As <strong>feature stores</strong> (Redis, Feast) pré-computam e
          cacheiam features de utilizadores e itens, garantindo latência de
          serving p99 abaixo de 100ms. Os embeddings requerem freshness:
          re-treino diário ou mais frequente para capturar tendências. Para
          sinais muito recentes, online updates incrementais complementam os
          embeddings batch.
        </p>
        <p style={S.p}>
          A diversidade na lista final é promovida pelo{' '}
          <strong>Maximum Marginal Relevance (MMR)</strong> — penalizar a
          similaridade entre itens já selecionados para a lista, evitando
          resultados redundantes. O monitoring em produção deve vigiar
          distribution shift de features, degradação de CTR e feedback loop
          amplification.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 105" width="100%" style={{ display: 'block' }}>
            <text
              x="340"
              y="18"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="11"
              fontWeight="600"
            >
              Arquitetura de Serving em Produção
            </text>
            {[
              { label: ['User Request'], sub: null, highlight: true },
              {
                label: ['Feature', 'Lookup'],
                sub: 'Redis/Feast',
                highlight: false,
              },
              {
                label: ['Retrieval', '(FAISS)'],
                sub: '~100ms',
                highlight: false,
              },
              {
                label: ['Ranking', 'Model'],
                sub: 'Top-K candidatos',
                highlight: false,
              },
              { label: ['Diversity', 'Re-rank'], sub: 'MMR', highlight: false },
              { label: ['Response'], sub: null, highlight: true },
            ].map(({ label, sub, highlight }, i) => {
              const x = 10 + i * 112;
              const cx = x + 50;
              return (
                <g key={i}>
                  <rect
                    x={x}
                    y="28"
                    width="100"
                    height="38"
                    rx="6"
                    fill={highlight ? `${C}25` : 'rgba(74,158,237,0.06)'}
                    stroke={highlight ? C : `${C}50`}
                    strokeWidth={highlight ? 1.8 : 1}
                  />
                  {label.length === 1 ? (
                    <text
                      x={cx}
                      y="51"
                      textAnchor="middle"
                      fill={highlight ? C : '#94a3b8'}
                      fontSize="10"
                      fontWeight={highlight ? '700' : '400'}
                    >
                      {label[0]}
                    </text>
                  ) : (
                    <>
                      <text
                        x={cx}
                        y="44"
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="10"
                      >
                        {label[0]}
                      </text>
                      <text
                        x={cx}
                        y="58"
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="10"
                      >
                        {label[1]}
                      </text>
                    </>
                  )}
                  {sub && (
                    <text
                      x={cx}
                      y="82"
                      textAnchor="middle"
                      fill="#475569"
                      fontSize="9"
                    >
                      {sub}
                    </text>
                  )}
                  {i < 5 && (
                    <>
                      <line
                        x1={x + 102}
                        y1="47"
                        x2={x + 108}
                        y2="47"
                        stroke="#475569"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points={`${x + 104},43 ${x + 112},47 ${x + 104},51`}
                        fill="#475569"
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
