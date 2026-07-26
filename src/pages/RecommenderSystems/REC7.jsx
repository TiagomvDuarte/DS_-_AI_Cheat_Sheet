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

export default function REC7() {
  return (
    <div style={S.page}>
      <Link to="/recommender" style={S.back}>← Recommender Systems</Link>
      <div style={S.badge}>MÓDULO {modules[6].num}</div>
      <h1 style={S.h1}>{modules[6].title}</h1>

      <div style={S.section}>
        <h2 style={S.h2}>1. Formulação como Reinforcement Learning</h2>
        <p style={S.p}>
          Um sistema de recomendação pode ser formulado como um <strong>Markov Decision Process (MDP)</strong>: o <em>estado</em> é o histórico e contexto atual do utilizador, a <em>ação</em> é o item a recomendar, a <em>recompensa</em> é o feedback observado (clique, compra, avaliação, tempo de sessão), e a <em>transição</em> é o novo estado resultante da interação.
        </p>
        <p style={S.p}>
          A principal vantagem sobre abordagens supervisionadas é que o RL <strong>otimiza recompensa a longo prazo</strong> em vez de apenas prever o próximo clique. Isto permite capturar efeitos de sequência e diversidade — recomendar agora um item diferente pode aumentar o engagement total da sessão, mesmo que não seja o mais relevante no imediato.
        </p>
        <div style={S.highlight}>
          <strong>Desafios específicos de RecSys com RL:</strong> o ambiente é não-estacionário (os gostos do utilizador mudam), a recompensa é esparsa e ruidosa, o espaço de ação é enorme (catálogo inteiro com milhões de itens) e a exploração tem custo real — expor um utilizador a itens irrelevantes degrada a experiência. O <em>offline RL</em> mitiga este último ponto aprendendo apenas de dados históricos.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 500 150" width="100%" style={{ display: 'block' }}>
            <text x="250" y="18" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">MDP para Sistemas de Recomendação</text>
            {/* State box */}
            <rect x="20" y="50" width="110" height="60" rx="8" fill={`${C}20`} stroke={C} strokeWidth="1.5" />
            <text x="75" y="75" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">Estado</text>
            <text x="75" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9">histórico +</text>
            <text x="75" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">contexto</text>
            {/* Agent box */}
            <rect x="195" y="50" width="110" height="60" rx="8" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="250" y="75" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="700">Agente</text>
            <text x="250" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9">RecSys</text>
            <text x="250" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">π(a|s)</text>
            {/* Environment box */}
            <rect x="370" y="50" width="110" height="60" rx="8" fill="rgba(74,158,237,0.06)" stroke="var(--card-border)" strokeWidth="1.5" />
            <text x="425" y="75" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="700">Ambiente</text>
            <text x="425" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9">Utilizador</text>
            <text x="425" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">reage ao item</text>
            {/* Action arrow: agent → environment */}
            <line x1="305" y1="72" x2="370" y2="72" stroke={C} strokeWidth="2" markerEnd="url(#arr7c)" />
            <text x="337" y="67" textAnchor="middle" fill={C} fontSize="9" fontWeight="600">ação (item)</text>
            {/* Reward + next state arrow: environment → state (curved below) */}
            <path d="M 425 110 Q 250 148 75 110" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr7g)" />
            <text x="250" y="145" textAnchor="middle" fill="#475569" fontSize="9">recompensa r + próximo estado s'</text>
            {/* State → Agent arrow */}
            <line x1="130" y1="80" x2="195" y2="80" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr7g)" />
            <text x="162" y="75" textAnchor="middle" fill="#475569" fontSize="9">s</text>
            <defs>
              <marker id="arr7c" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill={C} />
              </marker>
              <marker id="arr7g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#475569" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Multi-Armed Bandits</h2>
        <p style={S.p}>
          O problema <strong>Multi-Armed Bandit</strong> modela a escolha entre K itens com recompensas desconhecidas, minimizando o regret total — a diferença acumulada entre a recompensa do item ótimo e a recompensa efetivamente obtida. É um caso especial de RL sem estado (ou com estado ignorado).
        </p>
        <p style={S.p}>
          O <strong>ε-Greedy</strong> explora um item aleatório com probabilidade ε e explota o melhor conhecido com probabilidade 1−ε. É simples mas tem ε fixo, sem adaptação ao nível de incerteza atual. O <strong>UCB1</strong> é mais sofisticado: score_i = x̄_i + √(2 ln(t) / n_i), onde o segundo termo representa a incerteza — itens pouco explorados têm UCB mais alto e são selecionados primeiro. O regret é O(√(KT ln T)).
        </p>
        <div style={S.highlight}>
          <strong>Thompson Sampling:</strong> abordagem Bayesiana que modela a distribuição de recompensa de cada item como Beta(α_i, β_i), onde α conta sucessos e β conta falhas. Em cada passo, amostra um valor de cada distribuição e escolhe o item com maior sample. Empírica e teoricamente, converge mais rápido que UCB em muitos cenários. <strong>LinUCB</strong> (Li et al., 2010) estende UCB a bandits contextuais com features lineares e foi usado pelo Yahoo! para recomendação de artigos de notícias.
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 600 200" width="100%" style={{ display: 'block' }}>
            <text x="300" y="18" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">Multi-Armed Bandit — Intervalo de Confiança e UCB</text>
            {/* Y axis */}
            <line x1="50" y1="30" x2="50" y2="155" stroke="var(--card-border)" strokeWidth="1" />
            <text x="44" y="35" textAnchor="end" fill="#475569" fontSize="8">1.0</text>
            <text x="44" y="93" textAnchor="end" fill="#475569" fontSize="8">0.5</text>
            <text x="44" y="155" textAnchor="end" fill="#475569" fontSize="8">0.0</text>
            <line x1="48" y1="155" x2="580" y2="155" stroke="var(--card-border)" strokeWidth="1" />
            <text x="22" y="95" textAnchor="middle" fill="#64748b" fontSize="8" transform="rotate(-90,22,95)">recompensa</text>
            {/* Arms: [label, mu, ucb, n, highlight] */}
            {[
              { label:'Braço 1', x:130, mu:0.4, ucb:0.82, n:5,   hi:true,  note:'pouco explorado' },
              { label:'Braço 2', x:250, mu:0.6, ucb:0.72, n:30,  hi:false, note:'UCB médio' },
              { label:'Braço 3', x:370, mu:0.65,ucb:0.68, n:200, hi:false, note:'bem explorado' },
              { label:'Braço 4', x:490, mu:0.5, ucb:1.0,  n:0,   hi:true,  note:'nunca explorado' },
            ].map(({ label, x, mu, ucb, n, hi, note }) => {
              const yBase = 155;
              const scale = 120;
              const yMu  = yBase - mu  * scale;
              const yUCB = yBase - Math.min(ucb, 1) * scale;
              const yLow = yBase - Math.max(mu - (ucb - mu) * 0.6, 0) * scale;
              return (
                <g key={label}>
                  {/* CI bar */}
                  <line x1={x} y1={yLow} x2={x} y2={yUCB} stroke={hi ? C : `${C}60`} strokeWidth={hi ? 3 : 2} />
                  {/* UCB marker */}
                  <line x1={x-8} y1={yUCB} x2={x+8} y2={yUCB} stroke={hi ? C : `${C}80`} strokeWidth="2" />
                  <text x={x+12} y={yUCB+4} fill={hi ? C : '#94a3b8'} fontSize="8" fontWeight="700">UCB</text>
                  {/* Mean dot */}
                  <circle cx={x} cy={yMu} r="5" fill={hi ? C : `${C}80`} />
                  <text x={x+10} y={yMu+4} fill="#94a3b8" fontSize="8">μ̂={mu}</text>
                  {/* Low marker */}
                  <line x1={x-8} y1={yLow} x2={x+8} y2={yLow} stroke={`${C}50`} strokeWidth="1.5" />
                  {/* Label */}
                  <text x={x} y="170" textAnchor="middle" fill={hi ? C : '#94a3b8'} fontSize="9" fontWeight={hi ? '700' : '400'}>{label}</text>
                  <text x={x} y="182" textAnchor="middle" fill="#475569" fontSize="8">{n === 0 ? 'n=0' : `n=${n}`}</text>
                  <text x={x} y="194" textAnchor="middle" fill={hi ? C : '#64748b'} fontSize="8">{note}</text>
                </g>
              );
            })}
            {/* Highlight selected arm arrow */}
            <text x="130" y="26" textAnchor="middle" fill={C} fontSize="8" fontWeight="700">← selecionar (UCB max)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Deep Q-Network para RecSys</h2>
        <p style={S.p}>
          O <strong>DQN</strong> (Mnih et al., DeepMind, 2015) aproxima a Q-function — Q(s,a) = recompensa esperada em estado s tomando ação a — através de uma rede neuronal. O treino usa uma target network separada para estabilidade e <em>experience replay</em>: um buffer de transições (s, a, r, s') do qual são amostradas mini-batches aleatórias para quebrar correlações temporais.
        </p>
        <p style={S.p}>
          O <strong>DRN</strong> (Deep Reinforcement Learning for News Recommendation, Zheng et al., 2018) adapta DQN com uma dueling network architecture para RecSys de notícias. O estado combina embeddings do utilizador e do contexto temporal; a ação é o artigo a recomendar. O sistema é atualizado incrementalmente com feedback em tempo real.
        </p>
        <div style={S.note}>
          <strong>Problema de escala:</strong> calcular Q(s,a) para um catálogo de 10 milhões de itens é inviável num único forward pass. A solução prática é usar DQN apenas no estágio de re-ranking (sobre os candidatos já filtrados pelo retrieval), não sobre o catálogo completo. O <em>reward shaping</em> combina recompensas imediatas (clique) com recompensas diferidas (sessão longa, ausência de churn) para guiar a política.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Actor-Critic e Offline RL</h2>
        <p style={S.p}>
          As arquiteturas <strong>Actor-Critic</strong> separam a política (ator, π(a|s)) do estimador de valor (crítico, V(s) ou Q(s,a)). O ator aprende que item recomendar; o crítico avalia quão bom foi o estado atual, fornecendo sinal de treino com menor variância do que o REINFORCE puro.
        </p>
        <p style={S.p}>
          Para lidar com o espaço de ação enorme, <strong>DDPG/TD3</strong> tratam os embeddings de itens como ações contínuas: o ator gera um vetor de embedding, e um retrieval ANN encontra o item mais próximo desse vetor no catálogo. Isto reduz o problema de ação discreta de milhões de opções para um problema de otimização num espaço vetorial contínuo.
        </p>
        <div style={S.highlight}>
          <strong>Offline RL (Batch RL):</strong> aprender exclusivamente de logs históricos, sem exploração ao vivo. O <em>Conservative Q-Learning (CQL)</em> penaliza Q-values de ações fora do suporte dos dados de treino, prevenindo o modelo de sobre-valorizar ações nunca observadas. O <em>Inverse Propensity Scoring (IPS)</em> corrige o viés de seleção: só observamos recompensas das ações que o sistema anterior tomou — IPS repondera as amostras para simular uma política diferente.
        </div>
        <p style={S.p}>
          Em produção: JD.com usa RL para RecSys de e-commerce; a Alibaba usa REINFORCE para otimizar anúncios; a Google aplica RL no YouTube para maximizar o tempo de visionamento a longo prazo em vez de apenas o próximo clique. Todos enfrentam o mesmo trade-off fundamental: exploração (descobrir preferências novas) vs. exploração (maximizar satisfação conhecida).
        </p>
      </div>

    </div>
  );
}
