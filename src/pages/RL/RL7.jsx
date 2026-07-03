import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
};

/* ── SVG: Variância dos gradientes com e sem baseline ── */
const VarianceChart = () => (
  <svg viewBox="0 0 560 245" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
    {/* axes */}
    <line x1="50" y1="190" x2="530" y2="190" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <line x1="50" y1="20" x2="50" y2="190" stroke="var(--text-secondary)" strokeWidth="1.5" />
    <text x="290" y="208" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Episódios de treino</text>
    <text x="14" y="110" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform="rotate(-90,14,110)">Variância do gradiente</text>

    {/* REINFORCE without baseline — noisy high curve */}
    <polyline
      points="50,30 110,55 170,40 230,70 290,45 350,80 410,50 470,65 530,48"
      fill="none" stroke="#f97316" strokeWidth="2"
    />
    {/* REINFORCE with baseline — much lower smoother curve */}
    <polyline
      points="50,130 110,120 170,115 230,108 290,105 350,100 410,97 470,94 530,92"
      fill="none" stroke="#fdba74" strokeWidth="2"
    />

    {/* legend — below the chart */}
    <rect x="130" y="222" width="12" height="12" fill="#f97316" />
    <text x="146" y="233" fontSize="11" fill="var(--text-secondary)">Sem baseline (REINFORCE puro)</text>
    <rect x="360" y="222" width="12" height="12" fill="#fdba74" />
    <text x="376" y="233" fontSize="11" fill="var(--text-secondary)">Com baseline V(s)</text>
  </svg>
);

/* ── SVG: Diagrama Actor-Critic ── */
const ActorCriticDiagram = () => (
  <svg viewBox="0 0 580 200" style={{ width: '100%', maxWidth: 580, display: 'block', margin: '0 auto' }}>
    {/* Environment */}
    <rect x="220" y="70" width="140" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
    <text x="290" y="97" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Ambiente</text>
    <text x="290" y="115" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">s, r</text>

    {/* Actor */}
    <rect x="20" y="70" width="130" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
    <text x="85" y="97" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Actor  π_θ</text>
    <text x="85" y="115" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">P(a | s)</text>

    {/* Critic */}
    <rect x="430" y="70" width="130" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
    <text x="495" y="97" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Critic  V_w</text>
    <text x="495" y="115" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">V(s)</text>

    <defs>
      <marker id="acArr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={color} />
      </marker>
      <marker id="acArr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill="#f97316" />
      </marker>
      <marker id="acArr3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
      </marker>
    </defs>

    {/* arrows: actor -> env (action) */}
    <line x1="150" y1="100" x2="218" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#acArr)" />
    <text x="184" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">ação a</text>

    {/* env -> critic (state) */}
    <line x1="360" y1="100" x2="428" y2="100" stroke={color} strokeWidth="1.5" markerEnd="url(#acArr)" />
    <text x="394" y="93" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">estado s</text>

    {/* critic -> actor (TD error δ) */}
    <path d="M495,130 Q495,170 85,170 L85,132" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#acArr2)" />
    <text x="290" y="185" textAnchor="middle" fontSize="10" fill="#f97316">δ_t = r + γV(s') − V(s)  →  actualiza actor e critic</text>

    {/* env -> actor (state feedback) */}
    <path d="M290,70 Q290,40 85,40 L85,70" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#acArr3)" />
    <text x="190" y="33" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">novo estado s'</text>
  </svg>
);

export default function RL7() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>MÓDULO 7 — Último Módulo</div>
      <h1 style={S.h1}>Policy-Based Reinforcement Learning</h1>
      <p style={S.lead}>
        Em vez de aprender <InlineMath math="V(s)" /> ou <InlineMath math="Q(s,a)" /> e derivar uma política,
        aprendemos diretamente a política <InlineMath math="\pi_\theta" />.
        Policy gradient oferece vantagens únicas: políticas estocásticas naturais, suporte nativo a espaços
        de ação contínuos, e convergência mais suave em problemas complexos.
        Este módulo fecha o percurso desde as equações de Bellman até ao PPO moderno.
      </p>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Value-Based vs Policy-Based vs Actor-Critic</h2>
        <p style={S.p}>
          Existem três grandes famílias de algoritmos em RL com tradeoffs distintos em termos de
          o que aprendem, como lidam com espaços de ação, e qual a variância/bias dos seus estimadores.
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Família</th>
                <th style={S.th}>O que aprende</th>
                <th style={S.th}>Derivação da política</th>
                <th style={S.th}>Ações contínuas</th>
                <th style={S.th}>Políticas estocásticas ótimas</th>
                <th style={S.th}>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Value-Based</strong></td>
                <td style={S.td}><InlineMath math="Q^*(s,a)" /></td>
                <td style={S.td}>Greedy: <InlineMath math="\pi(s)=\arg\max_a Q^*(s,a)" /></td>
                <td style={S.td} style={{ color: '#f97316' }}>Não suportado</td>
                <td style={S.td} style={{ color: '#f97316' }}>Não — greedy é sempre determinístico</td>
                <td style={S.td}>Q-Learning, DQN, SARSA</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Policy-Based</strong></td>
                <td style={S.td}><InlineMath math="\pi_\theta(a|s)" /> directamente</td>
                <td style={S.td}>É a própria saída da rede</td>
                <td style={S.td} style={{ color: '#f97316' }}>Sim (Gaussiana)</td>
                <td style={S.td} style={{ color: '#f97316' }}>Sim — por natureza estocástica</td>
                <td style={S.td}>REINFORCE, Policy Gradient</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Actor-Critic</strong></td>
                <td style={S.td}><InlineMath math="\pi_\theta" /> + <InlineMath math="V_w(s)" /></td>
                <td style={S.td}>Actor é a política; critic reduz variância</td>
                <td style={S.td} style={{ color: '#f97316' }}>Sim</td>
                <td style={S.td} style={{ color: '#f97316' }}>Sim</td>
                <td style={S.td}>A3C, PPO, SAC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={S.h3}>Por que Value-Based falha em espaços contínuos?</h3>
        <p style={S.p}>
          O DQN precisa de calcular <InlineMath math="\arg\max_a Q(s,a)" /> para obter a política greedy.
          Com ações discretas (e.g., 18 ações no Atari) isto é trivial.
          Mas com ações contínuas (e.g., torque de cada motor de um robô),
          o <InlineMath math="\arg\max" /> sobre um espaço infinito é intratável —
          tornaria necessário um processo de optimização interno a cada passo de decisão.
          Policy-based resolve isto parametrizando diretamente a distribuição de ações.
        </p>
        <p style={S.p}>
          Adicionalmente, em jogos como Pedra-Papel-Tesoura, a política ótima é estocástica (jogar cada ação
          com probabilidade 1/3). Uma política greedy derivada de Q* nunca consegue representar isto.
        </p>
        <div style={S.note}>
          A família Actor-Critic domina o state-of-the-art moderno — PPO é o algoritmo
          padrão para RLHF em LLMs, robótica e jogos complexos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Parametrização de Políticas</h2>
        <p style={S.p}>
          A política <InlineMath math="\pi_\theta(a|s)" /> é uma distribuição sobre ações parametrizada por{' '}
          <InlineMath math="\theta" /> (tipicamente pesos de uma rede neuronal).
          A forma da distribuição depende do tipo de espaço de ação:
        </p>

        <h3 style={S.h3}>Ações discretas — Política Softmax</h3>
        <p style={S.p}>
          Para um conjunto finito de ações, parametrizamos preferências{' '}
          <InlineMath math="h(s, a, \theta)" /> e aplicamos softmax para obter probabilidades:
        </p>
        <div style={S.math}>
          <BlockMath math="\pi_\theta(a|s) = \frac{\exp\!\bigl(h(s, a, \theta)\bigr)}{\displaystyle\sum_{b} \exp\!\bigl(h(s, b, \theta)\bigr)}" />
        </div>
        <p style={S.p}>
          As preferências <InlineMath math="h(s,a,\theta)" /> podem ser funções lineares em features
          (e.g., <InlineMath math="h = \phi(s,a)^\top \theta" />) ou a saída de uma rede neuronal.
          A política softmax garante que todas as ações têm probabilidade positiva — essencial para
          exploração e para representar políticas estocásticas ótimas.
        </p>

        <h3 style={S.h3}>Ações contínuas — Política Gaussiana</h3>
        <p style={S.p}>
          Para espaços de ação contínuos, parametrizamos a média e variância de uma distribuição Gaussiana.
          A rede neuronal produz <InlineMath math="\mu_\theta(s)" /> e{' '}
          <InlineMath math="\sigma^2_\theta(s)" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\pi_\theta(a|s) = \mathcal{N}\!\bigl(\mu_\theta(s),\, \sigma^2_\theta(s)\bigr) = \frac{1}{\sigma_\theta(s)\sqrt{2\pi}} \exp\!\!\left(-\frac{(a - \mu_\theta(s))^2}{2\sigma^2_\theta(s)}\right)" />
        </div>
        <p style={S.p}>
          A ação é amostrada durante a execução: <InlineMath math="a \sim \mathcal{N}(\mu_\theta(s), \sigma^2_\theta(s))" />.
          <InlineMath math="\sigma" /> controla a exploração — durante treino é tipicamente maior;
          durante avaliação pode-se usar apenas <InlineMath math="\mu_\theta(s)" /> como ação determinística.
        </p>

        
          <strong>Vantagens da parametrização de políticas:</strong>
          <ul style={{ ...S.ul, marginTop: '0.5rem' }}>
            <li style={S.li}>Paisagem de optimização mais suave — pequenas mudanças em <InlineMath math="\theta" /> causam pequenas mudanças na política</li>
            <li style={S.li}>Suporte nativo a espaços de ação contínuos sem <InlineMath math="\arg\max" /> intratável</li>
            <li style={S.li}>Pode representar políticas estocásticas ótimas naturalmente</li>
            <li style={S.li}>A política é directamente parametrizada — mais interpretável do que derivar de Q*</li>
          </ul>
        
      </div>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. O Objetivo de Optimização</h2>
        <p style={S.p}>
          O objectivo de policy gradient é maximizar o retorno esperado sob a política{' '}
          <InlineMath math="\pi_\theta" />, a partir do estado inicial:
        </p>
        <div style={S.math}>
          <BlockMath math="J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}[G_0] = V^{\pi_\theta}(s_0) = \mathbb{E}_{\pi_\theta}\!\left[\sum_{t=0}^{\infty} \gamma^t R_{t+1}\right]" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\tau = (s_0, a_0, r_1, s_1, a_1, r_2, \ldots)" /> é uma trajectória
          gerada seguindo <InlineMath math="\pi_\theta" />.
        </p>
        <p style={S.p}>
          Queremos maximizar <InlineMath math="J(\theta)" /> via <strong>gradient ascent</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="\theta \leftarrow \theta + \alpha \nabla_\theta J(\theta)" />
        </div>
        <p style={S.p}>
          O <strong>desafio fundamental</strong>: como calcular{' '}
          <InlineMath math="\nabla_\theta J(\theta)" /> quando a expectativa é sobre trajectórias
          geradas pela própria política <InlineMath math="\pi_\theta" /> que estamos a optimizar?
          A distribuição das trajectórias muda com <InlineMath math="\theta" />, tornando o gradiente
          não-trivial de calcular directamente.
        </p>
        <div style={S.note}>
          A solução elegante para este problema é o <strong>Policy Gradient Theorem</strong>,
          que reescreve o gradiente numa forma que pode ser estimada por amostras.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Policy Gradient Theorem</h2>
        <p style={S.p}>
          O Policy Gradient Theorem fornece uma expressão tratável para{' '}
          <InlineMath math="\nabla_\theta J(\theta)" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta}\!\bigl[\nabla_\theta \log \pi_\theta(a|s) \cdot Q^{\pi_\theta}(s, a)\bigr]" />
        </div>

        <h3 style={S.h3}>O Log-Derivative Trick (Score Function)</h3>
        <p style={S.p}>
          A chave da derivação é a identidade:
        </p>
        <div style={S.math}>
          <BlockMath math="\nabla_\theta \pi_\theta(a|s) = \pi_\theta(a|s) \cdot \nabla_\theta \log \pi_\theta(a|s)" />
        </div>
        <p style={S.p}>
          Esta identidade decorre directamente da regra da cadeia:{' '}
          <InlineMath math="\nabla_\theta \log f = \frac{\nabla_\theta f}{f}" />, logo{' '}
          <InlineMath math="\nabla_\theta f = f \cdot \nabla_\theta \log f" />.
          Multiplicando e dividindo por <InlineMath math="\pi_\theta" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\nabla_\theta J(\theta) = \sum_s \mu(s) \sum_a \nabla_\theta \pi_\theta(a|s) Q^{\pi_\theta}(s,a) = \mathbb{E}_{\pi_\theta}\!\left[\nabla_\theta \log \pi_\theta(a|s) \cdot Q^{\pi_\theta}(s,a)\right]" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\mu(s)" /> é a distribuição estacionária de estados sob <InlineMath math="\pi_\theta" />.
        </p>

        <h3 style={S.h3}>Intuição do Teorema</h3>
        
          <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            O gradiente é uma média ponderada de <InlineMath math="\nabla_\theta \log \pi_\theta(a|s)" />
            — o gradiente da log-probabilidade da acção — ponderado por <InlineMath math="Q^{\pi_\theta}(s,a)" />.
          </p>
          <ul style={{ ...S.ul, marginTop: '0.6rem' }}>
            <li style={S.li}>Se <InlineMath math="Q^{\pi_\theta}(s,a) > 0" /> (acção boa): gradiente ascendente aumenta <InlineMath math="\pi_\theta(a|s)" /></li>
            <li style={S.li}>Se <InlineMath math="Q^{\pi_\theta}(s,a) < 0" /> (acção má): gradiente descendente diminui <InlineMath math="\pi_\theta(a|s)" /></li>
            <li style={S.li}>Magnitude proporcional a <InlineMath math="|Q|" />: acções muito boas/más têm actualizações maiores</li>
          </ul>
        
        <p style={S.p}>
          A vantagem crucial: <InlineMath math="\nabla_\theta \log \pi_\theta(a|s)" /> é fácil de calcular
          por backpropagation — não precisamos de diferenciar através da distribuição de trajectórias.
          Podemos estimar o gradiente com amostras Monte Carlo da política actual.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. REINFORCE — Monte Carlo Policy Gradient</h2>
        <p style={S.p}>
          REINFORCE substitui o <InlineMath math="Q^{\pi_\theta}(s_t, a_t)" /> pelo retorno amostrado{' '}
          <InlineMath math="G_t" />, que é um estimador não-enviesado:
        </p>
        <div style={S.math}>
          <BlockMath math="G_t = \sum_{k=t}^{T} \gamma^{k-t} R_{k+1}" />
        </div>
        <p style={S.p}>
          Substituindo no Policy Gradient Theorem, obtemos a actualização do REINFORCE:
        </p>
        <div style={S.math}>
          <BlockMath math="\theta \leftarrow \theta + \alpha \sum_{t=0}^{T} G_t \, \nabla_\theta \log \pi_\theta(A_t | S_t)" />
        </div>

        <h3 style={S.h3}>Algoritmo REINFORCE Completo</h3>
        <div style={S.code}>{`Inicializar θ aleatoriamente

Repetir para cada episódio:
  1. Gerar episódio τ = (s₀,a₀,r₁, s₁,a₁,r₂, ..., sT)
     seguindo π_θ

  2. Para cada passo t = 0, 1, ..., T-1:
       Calcular Gₜ = r_{t+1} + γ·r_{t+2} + γ²·r_{t+3} + ...

  3. Actualizar parâmetros:
       θ ← θ + α · Gₜ · ∇_θ log π_θ(aₜ | sₜ)

Retornar θ final`}</div>

        <h3 style={S.h3}>O Problema da Alta Variância</h3>
        <p style={S.p}>
          <InlineMath math="G_t" /> inclui todas as recompensas futuras aleatórias do episódio.
          Cada episódio pode ter um <InlineMath math="G_t" /> muito diferente — mesmo para o mesmo
          par <InlineMath math="(s,a)" /> — porque os passos futuros dependem de acções estocásticas e da
          estocasticidade do ambiente. Isto implica:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>Gradientes muito ruidosos — difícil saber se uma acção foi genuinamente boa ou teve sorte</li>
          <li style={S.li}>Convergência lenta — são necessários muitos episódios para estimativas estáveis</li>
          <li style={S.li}>Sensível à escolha de <InlineMath math="\alpha" /> — learning rates elevados causam divergência</li>
        </ul>
        <div style={S.note}>
          REINFORCE é não-enviesado mas de alta variância. Na prática é raramente usado sozinho —
          a baseline de variância reduzida é quase sempre necessária.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Baseline e Redução de Variância</h2>
        <p style={S.p}>
          Podemos subtrair qualquer função baseline <InlineMath math="b(s)" /> do retorno <strong>sem introduzir bias</strong>
          no gradiente. A razão é que:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathbb{E}_{\pi_\theta}\!\bigl[\nabla_\theta \log \pi_\theta(a|s) \cdot b(s)\bigr] = \sum_a \nabla_\theta \pi_\theta(a|s) \cdot b(s) = b(s) \nabla_\theta \underbrace{\sum_a \pi_\theta(a|s)}_{=1} = 0" />
        </div>
        <p style={S.p}>
          Logo, o gradiente com baseline é equivalente ao original mas com menos variância:
        </p>
        <div style={S.math}>
          <BlockMath math="\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta}\!\bigl[\nabla_\theta \log \pi_\theta(a|s) \cdot \bigl(G_t - b(s_t)\bigr)\bigr]" />
        </div>

        <h3 style={S.h3}>Baseline Óptima</h3>
        <p style={S.p}>
          A baseline que minimiza a variância do gradiente é, teoricamente:
        </p>
        <div style={S.math}>
          <BlockMath math="b^*(s) = \frac{\mathbb{E}\!\left[G_t^2 \,\|\nabla_\theta \log \pi_\theta\|^2 \mid s\right]}{\mathbb{E}\!\left[\|\nabla_\theta \log \pi_\theta\|^2 \mid s\right]}" />
        </div>
        <p style={S.p}>
          Na prática, esta baseline é difícil de calcular. A solução standard é usar
          a <strong>função valor</strong> <InlineMath math="V^{\pi_\theta}(s)" /> como baseline,
          o que dá origem à <strong>Advantage Function</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="A^{\pi}(s, a) = Q^{\pi}(s, a) - V^{\pi}(s)" />
        </div>
        <p style={S.p}>
          <InlineMath math="A(s,a) > 0" /> significa que a acção <InlineMath math="a" /> é melhor
          do que a média no estado <InlineMath math="s" />.
          <InlineMath math="A(s,a) < 0" /> significa que é pior do que a média.
          Centrar o sinal de aprendizagem em torno de zero reduz dramaticamente a variância.
        </p>

        <h3 style={S.h3}>Variância dos Gradientes: Com vs Sem Baseline</h3>
        <div style={S.diagram}>
          <VarianceChart />
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
            A baseline <InlineMath math="V(s)" /> reduz significativamente a variância dos estimadores de gradiente ao longo do treino
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Actor-Critic</h2>
        <p style={S.p}>
          O Actor-Critic substitui o retorno Monte Carlo <InlineMath math="G_t" /> por um estimador
          bootstrap via TD, usando uma rede critic que aprende <InlineMath math="V_w(s)" />.
          Isto reduz variância ao custo de introduzir um pequeno bias.
        </p>

        <h3 style={S.h3}>Componentes</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong>Actor <InlineMath math="\pi_\theta(a|s)" />:</strong> a política — decide que acção tomar. Actualizado por policy gradient usando o advantage estimado.</li>
          <li style={S.li}><strong>Critic <InlineMath math="V_w(s)" />:</strong> a função valor — avalia quão bom é o estado actual. Actualizado por TD learning.</li>
          <li style={S.li}><strong>TD error:</strong> <InlineMath math="\delta_t = R_{t+1} + \gamma V_w(S_{t+1}) - V_w(S_t)" /> — aproximação de <InlineMath math="A(s_t, a_t)" />.</li>
        </ul>

        <h3 style={S.h3}>Actualizações</h3>
        <p style={S.p}>Actualização do <strong>Critic</strong> (minimizar erro TD):</p>
        <div style={S.math}>
          <BlockMath math="w \leftarrow w + \beta \,\delta_t \,\nabla_w V_w(S_t)" />
        </div>
        <p style={S.p}>Actualização do <strong>Actor</strong> (maximizar <InlineMath math="J(\theta)" /> usando advantage estimado):</p>
        <div style={S.math}>
          <BlockMath math="\theta \leftarrow \theta + \alpha \,\delta_t \,\nabla_\theta \log \pi_\theta(A_t | S_t)" />
        </div>
        <p style={S.p}>
          O TD error <InlineMath math="\delta_t" /> serve como estimador de{' '}
          <InlineMath math="A(s_t, a_t)" />: se a recompensa recebida mais o valor do próximo estado
          excederem a estimativa actual de <InlineMath math="V(s_t)" />, a acção foi melhor do que esperado.
        </p>

        <h3 style={S.h3}>Diagrama de Arquitectura</h3>
        <div style={S.diagram}>
          <ActorCriticDiagram />
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
            Actor e Critic partilham o estado como input; o TD error <InlineMath math="\delta_t" /> flui do Critic para actualizar ambos
          </p>
        </div>

        <div style={S.note}>
          Actor e Critic podem partilhar camadas iniciais da rede neuronal (representações de estado comuns)
          com cabeças separadas para <InlineMath math="\pi_\theta" /> e <InlineMath math="V_w" />.
          Este design é eficiente e comum em implementações modernas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Advantage Actor-Critic (A2C), A3C e Extensões</h2>

        <h3 style={S.h3}>A2C — Advantage Actor-Critic</h3>
        <p style={S.p}>
          A2C usa <strong>workers paralelos síncronos</strong>: múltiplos agentes recolhem experiências
          em simultâneo e as actualizações são agregadas antes de actualizar a política global.
          Isto reduz correlação entre amostras sem necessitar de replay buffer (ao contrário do DQN).
        </p>

        <h3 style={S.h3}>A3C — Asynchronous Advantage Actor-Critic</h3>
        <p style={S.p}>
          A3C (Mnih et al., 2016) usa workers <strong>assíncronos</strong>: cada worker actualiza
          os parâmetros globais independentemente, sem esperar pelos outros. Isto acelera o treino
          mas pode introduzir gradientes desactualizados (stale gradients).
        </p>

        <h3 style={S.h3}>PPO — Proximal Policy Optimization</h3>
        <p style={S.p}>
          PPO (Schulman et al., 2017) resolve um problema fundamental do policy gradient: updates
          demasiado grandes podem destruir a política aprendida. PPO limita a mudança de política
          usando um <strong>objectivo clipped</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{\text{old}}}(a_t|s_t)}" />
        </div>
        <div style={S.math}>
          <BlockMath math="L^{\text{CLIP}}(\theta) = \mathbb{E}_t\!\left[\min\!\Bigl(r_t(\theta)\,\hat{A}_t,\; \mathrm{clip}\bigl(r_t(\theta),\, 1-\varepsilon,\, 1+\varepsilon\bigr)\,\hat{A}_t\Bigr)\right]" />
        </div>
        <p style={S.p}>
          O rácio <InlineMath math="r_t(\theta)" /> mede o quanto a nova política difere da antiga.
          O clip impede que <InlineMath math="r_t" /> saia do intervalo{' '}
          <InlineMath math="[1-\varepsilon, 1+\varepsilon]" /> (tipicamente <InlineMath math="\varepsilon=0.2" />),
          garantindo actualizações conservadoras:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>Se <InlineMath math="\hat{A}_t > 0" /> (boa acção): não aumentamos <InlineMath math="\pi_\theta(a|s)" /> mais do que <InlineMath math="1+\varepsilon" /> vezes</li>
          <li style={S.li}>Se <InlineMath math="\hat{A}_t < 0" /> (má acção): não diminuímos mais do que <InlineMath math="1-\varepsilon" /> vezes</li>
        </ul>
        <div style={S.note}>
          PPO tornou-se o algoritmo padrão para RLHF (Reinforcement Learning from Human Feedback) —
          o método usado para alinhar LLMs como ChatGPT com preferências humanas.
          É simples de implementar, estável e eficiente.
        </div>

        <h3 style={S.h3}>SAC — Soft Actor-Critic</h3>
        <p style={S.p}>
          SAC (Haarnoja et al., 2018) adiciona um termo de <strong>regularização de entropia</strong>
          ao objectivo, incentivando a política a ser o mais aleatória possível enquanto maximiza retorno:
        </p>
        <div style={S.math}>
          <BlockMath math="J(\theta) = \mathbb{E}_{\pi_\theta}\!\left[\sum_t \gamma^t \bigl(R_{t+1} + \alpha \mathcal{H}(\pi_\theta(\cdot|s_t))\bigr)\right]" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\mathcal{H}(\pi) = -\mathbb{E}[\log \pi]" /> é a entropia da política.
          SAC é o algoritmo de referência para controlo contínuo (robótica, manipulação),
          oferecendo exploração robusta e alta eficiência amostral.
        </p>

        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Algoritmo</th>
                <th style={S.th}>Estimativa gradiente</th>
                <th style={S.th}>Variância</th>
                <th style={S.th}>Bias</th>
                <th style={S.th}>Paralelismo</th>
                <th style={S.th}>Inovação-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>REINFORCE</td>
                <td style={S.td}><InlineMath math="G_t" /> Monte Carlo</td>
                <td style={S.td}>Alta</td>
                <td style={S.td}>Nulo</td>
                <td style={S.td}>Não</td>
                <td style={S.td}>Estimador puro, não-enviesado</td>
              </tr>
              <tr>
                <td style={S.td}>Actor-Critic</td>
                <td style={S.td}>TD error <InlineMath math="\delta_t" /></td>
                <td style={S.td}>Baixa</td>
                <td style={S.td}>Baixo</td>
                <td style={S.td}>Limitado</td>
                <td style={S.td}>Bootstrap com critic</td>
              </tr>
              <tr>
                <td style={S.td}>A3C</td>
                <td style={S.td}><InlineMath math="n" />-step TD + advantage</td>
                <td style={S.td}>Baixa</td>
                <td style={S.td}>Baixo</td>
                <td style={S.td}>Assíncrono</td>
                <td style={S.td}>Workers assíncronos</td>
              </tr>
              <tr>
                <td style={S.td}><strong>PPO</strong></td>
                <td style={S.td}>Clipped surrogate</td>
                <td style={S.td}>Baixa</td>
                <td style={S.td}>Baixo</td>
                <td style={S.td}>Síncrono</td>
                <td style={S.td}>Updates conservadores via clip</td>
              </tr>
              <tr>
                <td style={S.td}><strong>SAC</strong></td>
                <td style={S.td}>Off-policy + entropia</td>
                <td style={S.td}>Muito baixa</td>
                <td style={S.td}>Baixo</td>
                <td style={S.td}>Off-policy</td>
                <td style={S.td}>Regularização de entropia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Panorama do RL Moderno — Síntese do Curso</h2>
        <p style={S.p}>
          Ao longo dos 7 módulos percorremos o espectro completo dos algoritmos de RL —
          desde tabelas simples até redes neurais profundas. Esta tabela unifica toda a taxonomia:
        </p>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Algoritmo</th>
                <th style={S.th}>Módulo</th>
                <th style={S.th}>Tabular / Func. Aprox.</th>
                <th style={S.th}>Model-Based / Free</th>
                <th style={S.th}>Paradigma</th>
                <th style={S.th}>On / Off Policy</th>
                <th style={S.th}>Espaço ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>Policy Iteration</td>
                <td style={S.td}>RL1</td>
                <td style={S.td}>Tabular</td>
                <td style={S.td}>Model-Based</td>
                <td style={S.td}>Value-Based</td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Discreto</td>
              </tr>
              <tr>
                <td style={S.td}>Value Iteration</td>
                <td style={S.td}>RL1</td>
                <td style={S.td}>Tabular</td>
                <td style={S.td}>Model-Based</td>
                <td style={S.td}>Value-Based</td>
                <td style={S.td}>—</td>
                <td style={S.td}>Discreto</td>
              </tr>
              <tr>
                <td style={S.td}>Monte Carlo</td>
                <td style={S.td}>RL2</td>
                <td style={S.td}>Tabular</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Value-Based</td>
                <td style={S.td}>On/Off</td>
                <td style={S.td}>Discreto</td>
              </tr>
              <tr>
                <td style={S.td}>TD(0) / SARSA</td>
                <td style={S.td}>RL3</td>
                <td style={S.td}>Tabular</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Value-Based</td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Discreto</td>
              </tr>
              <tr>
                <td style={S.td}>Q-Learning</td>
                <td style={S.td}>RL3</td>
                <td style={S.td}>Tabular</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Value-Based</td>
                <td style={S.td}>Off-policy</td>
                <td style={S.td}>Discreto</td>
              </tr>
              <tr>
                <td style={S.td}>DQN</td>
                <td style={S.td}>RL4–5</td>
                <td style={S.td}>Func. Aprox. (DNN)</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Value-Based</td>
                <td style={S.td}>Off-policy</td>
                <td style={S.td}>Discreto</td>
              </tr>
              <tr>
                <td style={S.td}>Double DQN / Dueling</td>
                <td style={S.td}>RL5–6</td>
                <td style={S.td}>Func. Aprox. (DNN)</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Value-Based</td>
                <td style={S.td}>Off-policy</td>
                <td style={S.td}>Discreto</td>
              </tr>
              <tr>
                <td style={S.td}>REINFORCE</td>
                <td style={S.td}>RL7</td>
                <td style={S.td}>Func. Aprox. (DNN)</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Policy-Based</td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Discreto / Contínuo</td>
              </tr>
              <tr>
                <td style={S.td}>Actor-Critic / A3C</td>
                <td style={S.td}>RL7</td>
                <td style={S.td}>Func. Aprox. (DNN)</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Actor-Critic</td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Discreto / Contínuo</td>
              </tr>
              <tr>
                <td style={S.td}><strong>PPO</strong></td>
                <td style={S.td}>RL7</td>
                <td style={S.td}>Func. Aprox. (DNN)</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Actor-Critic</td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Discreto / Contínuo</td>
              </tr>
              <tr>
                <td style={S.td}><strong>SAC</strong></td>
                <td style={S.td}>RL7</td>
                <td style={S.td}>Func. Aprox. (DNN)</td>
                <td style={S.td}>Model-Free</td>
                <td style={S.td}>Actor-Critic</td>
                <td style={S.td}>Off-policy</td>
                <td style={S.td}>Contínuo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>O Arco do Curso</h3>
        <p style={S.p}>
          Começámos com <strong>MDPs e equações de Bellman</strong> (RL1) — a fundação matemática que
          define formalmente o problema de decisão sequencial. Progredimos para métodos de
          <strong> amostragem</strong> (RL2–3) que eliminam a necessidade de um modelo do ambiente.
          Introduzimos <strong>aproximação de funções</strong> (RL4–5) para escalar a espaços de
          estado grandes. Explorámos <strong>extensões do DQN</strong> (RL6) que tornaram o
          Q-learning robusto. Finalmente, chegámos a <strong>policy gradient e actor-critic</strong> (RL7)
          — o paradigma que domina as aplicações modernas de RL.
        </p>
        <div style={S.note}>
          O campo de RL continua a evoluir rapidamente. Direcções activas incluem:
          RL baseado em modelos com world models (Dreamer), RL hierárquico, multi-agent RL,
          e o já omnipresente RLHF para alinhamento de LLMs — que usa exactamente os algoritmos
          que aprendemos neste módulo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 10 — Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        
          <strong>Policy Gradient Theorem e REINFORCE</strong>
          <ul style={{ ...S.ul, marginTop: '0.5rem' }}>
            <li style={S.li}>O Policy Gradient Theorem garante <InlineMath math="\nabla_\theta J(\theta) = \mathbb{E}[\nabla_\theta \log \pi_\theta(a|s) \cdot Q^{\pi}(s,a)]" /> — o log-derivative trick torna o gradiente computável</li>
            <li style={S.li}>REINFORCE usa <InlineMath math="G_t" /> como estimador não-enviesado de <InlineMath math="Q^{\pi}" /> — simples mas de alta variância</li>
            <li style={S.li}>A baseline <InlineMath math="b(s) = V^{\pi}(s)" /> reduz variância sem introduzir bias; <InlineMath math="A(s,a) = Q(s,a) - V(s)" /> é a função vantagem</li>
            <li style={S.li}>Actor-Critic substitui Monte Carlo por bootstrap TD, combinando policy gradient com aprendizagem de valor</li>
            <li style={S.li}>PPO garante actualizações conservadoras com o objectivo clipped <InlineMath math="L^{\text{CLIP}}" /> — é o algoritmo padrão em aplicações modernas</li>
          </ul>
        
      </div>
    </div>
  );
}
