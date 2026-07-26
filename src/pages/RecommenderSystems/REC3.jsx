import React from 'react';
import { Link } from 'react-router-dom';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
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

export default function REC3() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>← Recommender Systems</Link>
      <div style={S.badge}>MÓDULO {modules[2].num}</div>
      <h1 style={S.h1}>{modules[2].title}</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. Porquê Sistemas Híbridos</h2>
        <p style={S.p}>
          <strong>CF puro:</strong> sofre de cold start (utilizadores e itens novos sem histórico), popularity bias (recomenda itens populares por defeito) e filter bubbles (recomendações convergem para os mesmos itens populares).
        </p>
        <p style={S.p}>
          <strong>CB puro:</strong> filter bubble de conteúdo (recomenda apenas itens similares ao histórico), requer features ricas e custosas de extrair, e não captura o gosto coletivo implícito.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Netflix Prize (2009):</strong> o vencedor BellKor's Pragmatic Chaos combinava mais de 107 modelos distintos, alcançando RMSE 10.06% abaixo do baseline Cinematch da Netflix. A lição fundamental: ensembles batem modelos únicos de forma consistente.
          </p>
        </div>
        <p style={S.p}>
          <strong>Burke (2002)</strong> propôs uma taxonomia de sistemas híbridos: weighted (combina scores), switching (muda de modelo por contexto), mixed (apresenta resultados de vários modelos juntos), cascade (pipeline em etapas), feature augmentation (saída de um modelo como feature de outro), e meta-level (treinar sobre o modelo de outro).
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 210" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="210" fill="var(--bg-secondary)" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Sistemas Híbridos — Combinação CF + CB</text>
            {/* CF circle */}
            <circle cx="270" cy="115" r="75" fill="#4a9eed22" stroke="#4a9eed" strokeWidth="2" />
            <text x="250" y="100" textAnchor="middle" fill="#4a9eed" fontSize="13" fontWeight="700">CF</text>
            <text x="250" y="118" textAnchor="middle" fill="#64748b" fontSize="10">histórico</text>
            <text x="250" y="133" textAnchor="middle" fill="#64748b" fontSize="10">coletivo</text>
            {/* CB circle */}
            <circle cx="370" cy="115" r="75" fill={`${C}18`} stroke={C} strokeWidth="2" />
            <text x="390" y="100" textAnchor="middle" fill={C} fontSize="13" fontWeight="700">CB</text>
            <text x="390" y="118" textAnchor="middle" fill="#64748b" fontSize="10">features</text>
            <text x="390" y="133" textAnchor="middle" fill="#64748b" fontSize="10">conteúdo</text>
            {/* Intersection label */}
            <text x="320" y="108" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">Híbrido</text>
            <text x="320" y="126" textAnchor="middle" fill="#94a3b8" fontSize="9">Netflix</text>
            <text x="320" y="140" textAnchor="middle" fill="#94a3b8" fontSize="9">Spotify</text>
            {/* CF-only examples */}
            <text x="155" y="170" textAnchor="middle" fill="#475569" fontSize="10">cold start ✗</text>
            <text x="155" y="183" textAnchor="middle" fill="#475569" fontSize="10">pop. bias</text>
            {/* CB-only examples */}
            <text x="485" y="170" textAnchor="middle" fill="#475569" fontSize="10">filter bubble ✗</text>
            <text x="485" y="183" textAnchor="middle" fill="#475569" fontSize="10">sem histórico</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Estratégias de Combinação</h2>
        <p style={S.p}>
          <strong>Weighted Hybrid:</strong> <InlineMath math="\text{score}_{\text{final}} = \alpha \times \text{score}_{CF} + (1-\alpha) \times \text{score}_{CB}" />. O peso α pode ser aprendido por regressão linear ou variar por utilizador — mais α para utilizadores com histórico rico, mais (1−α) para utilizadores novos.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Cascade (pipeline em etapas):</strong> CB filtra candidatos (retrieval barato sobre todo o catálogo) → CF re-rank (mais preciso sobre subconjunto pequeno). Combinação mais eficiente em larga escala — CF não precisa de correr sobre milhões de itens.
          </p>
        </div>
        <p style={S.p}>
          <strong>Switching:</strong> usar CF quando há histórico suficiente (N interações), CB para novos utilizadores. Limiar N escolhido empiricamente — tipicamente 5–20 interações.
        </p>
        <p style={S.p}>
          <strong>Feature Augmentation:</strong> saída de CF (embedding latente) como feature adicional para CB, ou vice-versa. Exemplo: embedding MF de utilizador como feature num modelo gradient boosting com features de conteúdo.
        </p>
        <p style={S.p}>
          <strong>Stacking:</strong> meta-learner (logistic regression, LightGBM) aprende a combinar scores de múltiplos modelos base. O meta-learner descobre quando cada modelo base é mais fiável para diferentes segmentos de utilizadores ou itens.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Contextual Bandits</h2>
        <p style={S.p}>
          O problema fundamental de recomendação em tempo real é o dilema <strong>exploração vs. exploração</strong>: explorar (descobrir novas preferências do utilizador) ou exploitar (recomendar o que sabemos que funciona). Um sistema puramente greedy nunca aprende novas preferências.
        </p>
        <p style={S.p}>
          <strong>ε-Greedy:</strong> com probabilidade ε explorar aleatoriamente (recomendar item aleatório), com probabilidade 1−ε exploitar o melhor item conhecido. Simples mas ineficiente — não usa incerteza.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Thompson Sampling:</strong> sample da distribuição de probabilidade de cada item ser o melhor — abordagem Bayesiana. Usado no Google News e Yahoo para seleção de artigos. Converge mais rapidamente que UCB em problemas com muitos itens.
          </p>
        </div>
        <p style={S.p}>
          <strong>UCB (Upper Confidence Bound):</strong> recomendar o item com maior limite superior de confiança — recompensa esperada + bónus de incerteza. Balanceia exploração e incerteza de forma principiada.
        </p>
        <p style={S.p}>
          <strong>LinUCB</strong> (Li et al., 2010): UCB linear com features de contexto (features do utilizador + features do item). Formaliza o problema como contextual bandit — o contexto determina qual arm (item) tem maior UCB. Padrão para news recommendation personalizada.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 200" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="200" fill="var(--bg-secondary)" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">UCB — Intervalos de Confiança ao Longo do Tempo</text>
            {/* Axes */}
            <line x1="60" y1="160" x2="620" y2="160" stroke="var(--card-border)" strokeWidth="1.5" />
            <line x1="60" y1="50" x2="60" y2="160" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="340" y="185" textAnchor="middle" fill="#64748b" fontSize="10">Número de observações (t)</text>
            <text x="25" y="110" textAnchor="middle" fill="#64748b" fontSize="10" transform="rotate(-90,25,110)">Recompensa</text>
            {/* UCB curve (upper bound) */}
            <path d="M80,80 Q150,65 220,72 Q300,75 380,82 Q460,87 540,90 Q580,91 600,92"
              fill="none" stroke={C} strokeWidth="2" strokeDasharray="5,3" />
            {/* Mean estimate */}
            <path d="M80,110 Q150,105 220,108 Q300,112 380,115 Q460,118 540,120 Q580,121 600,122"
              fill="none" stroke={`${C}cc`} strokeWidth="2" />
            {/* Lower bound */}
            <path d="M80,140 Q150,138 220,136 Q300,133 380,130 Q460,128 540,127 Q580,127 600,127"
              fill="none" stroke={`${C}50`} strokeWidth="1.5" strokeDasharray="3,2" />
            {/* Shaded region */}
            <path d="M80,80 Q150,65 220,72 Q300,75 380,82 Q460,87 540,90 Q580,91 600,92 Q580,127 540,127 Q460,128 380,130 Q300,133 220,136 Q150,138 80,140 Z"
              fill={`${C}10`} />
            {/* Labels */}
            <text x="612" y="93" fill={C} fontSize="10" fontWeight="700">UCB</text>
            <text x="612" y="123" fill={`${C}cc`} fontSize="10">média</text>
            <text x="600" y="133" fill={`${C}60`} fontSize="10">LCB</text>
            {/* Annotations */}
            <text x="120" y="45" fill="#94a3b8" fontSize="10">incerteza alta</text>
            <text x="120" y="57" fill="#94a3b8" fontSize="10">→ explorar</text>
            <text x="480" y="65" fill="#94a3b8" fontSize="10">incerteza baixa</text>
            <text x="480" y="77" fill="#94a3b8" fontSize="10">→ exploitar</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Casos Reais e Arquitecturas</h2>
        <p style={S.p}>
          <strong>Netflix:</strong> ensemble de CF, CB, hora do dia, dispositivo, tendências regionais. Personalização de artwork (thumbnail) por utilizador — o mesmo filme tem thumbnails diferentes para diferentes segmentos, otimizado por bandits.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>YouTube (2016, Covington et al.):</strong> arquitectura two-stage — candidate generation (CF por embedding, reduz de 10M para ~100 vídeos) + ranking (DNN com features contextuais, seleciona dezenas para apresentar). Escala para 1 mil milhão de utilizadores.
          </p>
        </div>
        <p style={S.p}>
          <strong>Spotify Discover Weekly:</strong> CF baseado em playlists ("pessoas que ouviram A também adicionaram B a playlists") + CB (audio features: BPM, energia, valência) + curadoria editorial para seed. Gera 30 músicas semanais personalizadas.
        </p>
        <p style={S.p}>
          <strong>Amazon:</strong> item-based CF para "clientes que compraram X também compraram Y" (estável e escalável) + CB para cold start de produtos novos sem histórico de compras.
        </p>
        <div style={S.diagram}>
          <svg viewBox="0 0 680 185" style={{ width: '100%', height: 'auto' }}>
            <rect width="680" height="185" fill="var(--bg-secondary)" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">YouTube Two-Stage — Arquitectura de Recomendação</text>
            {/* Stage 0: all videos */}
            <rect x="20" y="50" width="110" height="100" rx="8" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="75" y="70" textAnchor="middle" fill="#64748b" fontSize="10">Catálogo</text>
            <text x="75" y="92" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="800">10M</text>
            <text x="75" y="110" textAnchor="middle" fill="#64748b" fontSize="10">vídeos</text>
            <text x="75" y="128" textAnchor="middle" fill="#475569" fontSize="9">corpus total</text>
            {/* Arrow 1 */}
            <line x1="130" y1="100" x2="185" y2="100" stroke={C} strokeWidth="2" />
            <polygon points="185,95 197,100 185,105" fill={C} />
            {/* Stage 1: candidate generation */}
            <rect x="197" y="40" width="145" height="120" rx="8" fill="rgba(74,158,237,0.06)" stroke={C} strokeWidth="2" />
            <text x="269" y="62" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Candidate Generation</text>
            <text x="269" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">CF por embedding</text>
            <text x="269" y="102" textAnchor="middle" fill="#e2e8f0" fontSize="20" fontWeight="800">~100</text>
            <text x="269" y="115" textAnchor="middle" fill="#64748b" fontSize="10">candidatos</text>
            <text x="269" y="132" textAnchor="middle" fill="#475569" fontSize="9">ANN search</text>
            {/* Arrow 2 */}
            <line x1="342" y1="100" x2="397" y2="100" stroke={C} strokeWidth="2" />
            <polygon points="397,95 409,100 397,105" fill={C} />
            {/* Stage 2: ranking */}
            <rect x="409" y="40" width="145" height="120" rx="8" fill="rgba(74,158,237,0.06)" stroke={`${C}80`} strokeWidth="2" />
            <text x="481" y="62" textAnchor="middle" fill={`${C}cc`} fontSize="10" fontWeight="700">Ranking</text>
            <text x="481" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">DNN + features</text>
            <text x="481" y="102" textAnchor="middle" fill="#e2e8f0" fontSize="20" fontWeight="800">~10</text>
            <text x="481" y="115" textAnchor="middle" fill="#64748b" fontSize="10">recomendações</text>
            <text x="481" y="132" textAnchor="middle" fill="#475569" fontSize="9">contexto + watch time</text>
            {/* Arrow 3 */}
            <line x1="554" y1="100" x2="610" y2="100" stroke={C} strokeWidth="2" />
            <polygon points="610,95 622,100 610,105" fill={C} />
            <text x="640" y="103" textAnchor="middle" fill="#e2e8f0" fontSize="10">UI</text>
          </svg>
        </div>
      </div>

    </div>
  );
}
