import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';

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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ── SVG: n-step backup depths ── */
const NStepDiagram = () => (
  <svg viewBox="0 0 640 260" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '0 auto' }}>
    <text x="320" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>
      Profundidade de Backup — n-Step Returns
    </text>

    {/* n=1 TD */}
    <g transform="translate(40, 35)">
      <text x="70" y="14" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>n = 1 (TD)</text>
      <line x1="70" y1="58" x2="70" y2="130" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="70" cy="40" r="18" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
      <text x="70" y="45" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>S_t</text>
      <text x="92" y="98" fontSize="10" fill="var(--text-secondary)">{'R_{t+1}'}</text>
      <circle cx="70" cy="148" r="18" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" strokeDasharray="4,2" />
      <text x="70" y="151" textAnchor="middle" fontSize="10" fill={color}>V(S')</text>
      <text x="70" y="182" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Baixo bias</text>
      <text x="70" y="196" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Alta variância ↓</text>
    </g>

    {/* n=3 */}
    <g transform="translate(230, 35)">
      <text x="70" y="14" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>n = 3</text>
      <line x1="70" y1="58" x2="70" y2="130" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="92" y="80" fontSize="10" fill="var(--text-secondary)">{'R_{t+1}'}</text>
      <text x="92" y="98" fontSize="10" fill="var(--text-secondary)">{'R_{t+2}'}</text>
      <text x="92" y="116" fontSize="10" fill="var(--text-secondary)">{'R_{t+3}'}</text>
      <circle cx="70" cy="40" r="18" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
      <text x="70" y="45" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>S_t</text>
      <circle cx="70" cy="148" r="18" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" strokeDasharray="4,2" />
      <text x="70" y="151" textAnchor="middle" fontSize="10" fill={color}>V(S''')</text>
      <text x="70" y="182" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Balanço</text>
      <text x="70" y="196" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">bias-variância</text>
    </g>

    {/* n=∞ MC */}
    <g transform="translate(430, 35)">
      <text x="60" y="14" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>n = ∞ (MC)</text>
      <line x1="60" y1="58" x2="60" y2="122" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="60" cy="40" r="18" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
      <text x="60" y="45" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>S_t</text>
      <text x="60" y="116" textAnchor="middle" fontSize="16" fill="#94a3b8">⋮</text>
      <rect x="36" y="128" width="48" height="20" rx="4" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
      <text x="60" y="142" textAnchor="middle" fontSize="11" fill={color}>G_T</text>
      <text x="60" y="182" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Alto bias ↑</text>
      <text x="60" y="196" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Baixa variância</text>
    </g>
  </svg>
);

export default function RL5() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>MÓDULO 5</div>
      <h1 style={S.h1}>Model-Free Control</h1>

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. On-Policy vs Off-Policy Learning</h2>
        <p style={S.p}>
          Uma das distinções mais importantes em RL é se o agente aprende sobre a mesma política que está a executar
          (<em>on-policy</em>) ou sobre uma política diferente (<em>off-policy</em>). Esta diferença tem implicações
          profundas em termos de estabilidade, eficiência amostral e aplicabilidade.
        </p>

        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Característica</th>
                <th style={S.th}>On-Policy</th>
                <th style={S.th}>Off-Policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Definição</strong></td>
                <td style={S.td}>Aprende sobre a política que executa</td>
                <td style={S.td}>Aprende sobre target policy diferente da behaviour policy</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Exemplo principal</strong></td>
                <td style={S.td}>SARSA</td>
                <td style={S.td}>Q-Learning</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Eficiência amostral</strong></td>
                <td style={S.td}>Menor — dados ligados à política atual</td>
                <td style={S.td}>Maior — pode reutilizar dados de políticas antigas</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Estabilidade</strong></td>
                <td style={S.td}>Mais estável com aproximação de funções</td>
                <td style={S.td}>Pode divergir com function approximation (deadly triad)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Segurança</strong></td>
                <td style={S.td}>Mais seguro — o agente age como aprende</td>
                <td style={S.td}>Behaviour policy pode ser exploratória/humana/aleatória</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Experience replay</strong></td>
                <td style={S.td}>Não compatível diretamente</td>
                <td style={S.td}>Compatível — dados do replay buffer são off-policy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Importance Sampling: o Mecanismo Geral para Off-Policy</h3>
        <p style={S.p}>
          Quando aprendemos sobre uma target policy π usando dados gerados por uma behaviour policy μ, as
          distribuições de probabilidade são diferentes. O <strong>importance sampling</strong> é o mecanismo
          estatístico geral que corrige este desvio. O rácio de importância pondera cada amostra:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\rho_t = \\frac{\\pi(A_t \\mid S_t)}{\\mu(A_t \\mid S_t)}`} />
        </div>

        <p style={S.p}>
          Para uma trajetória de n passos, o rácio de importância cumulativo é o produto dos rácios individuais:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\rho_{t:t+n} = \\prod_{k=t}^{t+n-1} \\frac{\\pi(A_k \\mid S_k)}{\\mu(A_k \\mid S_k)}`} />
        </div>

        <p style={S.p}>
          O estimador de importance sampling corrige o retorno esperado:
          <InlineMath math={"\\mathbb{E}_\\mu[\\rho_{t:T} G_t] = \\mathbb{E}_\\pi[G_t]"} />.
          O problema principal é a <strong>alta variância</strong> dos rácios cumulativos, que aumenta
          exponencialmente com o horizonte temporal. Q-Learning evita importance sampling ao usar o operador
          max diretamente, o que é equivalente a seguir a política greedy implicitamente.
        </p>

        <div style={S.note}>
          Importance sampling ponderado (weighted IS) reduz a variância dividindo pelo soma dos rácios,
          ao custo de introduzir um pequeno bias que desaparece assintoticamente. É preferido em prática.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Double Q-Learning — Overestimation Bias</h2>

        <h3 style={S.h3}>O Problema: Bias de Sobreestimação em Q-Learning</h3>
        <p style={S.p}>
          Q-Learning usa o operador max tanto para <em>selecionar</em> a melhor ação como para <em>avaliar</em>
          o seu valor. Quando os valores Q são estimativas ruidosas (o que é sempre o caso), este operador max
          causa sobreestimação sistemática porque:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\mathbb{E}\\bigl[\\max_a Q(s',a)\\bigr] \\geq \\max_a \\mathbb{E}\\bigl[Q(s',a)\\bigr]`} />
        </div>

        <p style={S.p}>
          Esta desigualdade (Jensen's inequality para funções convexas) demonstra que o máximo do valor esperado
          é sempre menor ou igual ao valor esperado do máximo.
        </p>

        <h3 style={S.h3}>Exemplo Numérico do Bias</h3>
        <p style={S.p}>
          Considere um estado s' com 3 ações cujos valores verdadeiros são todos 0, mas cujas estimativas Q
          têm ruído gaussiano com σ = 0.5:
        </p>

        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Ação</th>
                <th style={S.th}>Valor verdadeiro Q*(s',a)</th>
                <th style={S.th}>Estimativa Q(s',a) (com ruído)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>a₁</td>
                <td style={S.td}>0.0</td>
                <td style={S.td}>−0.32</td>
              </tr>
              <tr>
                <td style={S.td}>a₂</td>
                <td style={S.td}>0.0</td>
                <td style={S.td}>+0.41</td>
              </tr>
              <tr>
                <td style={S.td}>a₃</td>
                <td style={S.td}>0.0</td>
                <td style={S.td}>+0.07</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700, background: 'rgba(74,158,237,0.10)' }}>max</td>
                <td style={{ ...S.td, fontWeight: 700 }}>0.0</td>
                <td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>+0.41 ← BIAS</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 0' }}>
            Q-Learning propaga um target de +0.41 quando o valor verdadeiro é 0. Este erro acumula-se ao longo
            do treino, especialmente em ambientes estocásticos com muitas ações.
          </p>
        </div>

        <h3 style={S.h3}>Solução: Double Q-Learning</h3>
        <p style={S.p}>
          Double Q-Learning (van Hasselt, 2010) resolve o bias de sobreestimação mantendo dois conjuntos
          independentes de valores Q — <InlineMath math={"Q_A"} /> e <InlineMath math={"Q_B"} /> — e desacoplando
          a seleção de ação da sua avaliação.
        </p>

        <p style={S.p}>
          <strong>Regra de atualização de Q_A</strong> (seleção com Q_A, avaliação com Q_B):
        </p>
        <div style={S.math}>
          <BlockMath math={`a^* = \\arg\\max_a Q_A(s', a)`} />
          <BlockMath math={`Q_A(s,a) \\leftarrow Q_A(s,a) + \\alpha\\bigl[r + \\gamma Q_B(s', a^*) - Q_A(s,a)\\bigr]`} />
        </div>

        <p style={S.p}>
          <strong>Regra de atualização de Q_B</strong> (seleção com Q_B, avaliação com Q_A, aplicada com prob. 0.5):
        </p>
        <div style={S.math}>
          <BlockMath math={`b^* = \\arg\\max_a Q_B(s', a)`} />
          <BlockMath math={`Q_B(s,a) \\leftarrow Q_B(s,a) + \\alpha\\bigl[r + \\gamma Q_A(s', b^*) - Q_B(s,a)\\bigr]`} />
        </div>

        <h3 style={S.h3}>Porque Funciona: Esboço da Prova</h3>
        <p style={S.p}>
          O bias desaparece porque <InlineMath math={"Q_A"} /> e <InlineMath math={"Q_B"} /> são estimativas
          independentes. Mesmo que <InlineMath math={"Q_A"} /> sobreestime a ação <InlineMath math={"a^*"} />,
          a avaliação <InlineMath math={"Q_B(s', a^*)"} /> é uma estimativa independente e não correlacionada
          com o erro de <InlineMath math={"Q_A"} />. Formalmente:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\mathbb{E}\\bigl[Q_B(s', \\arg\\max_a Q_A(s',a))\\bigr] \\leq \\max_a Q^*(s', a) + \\delta`} />
        </div>

        <p style={S.p}>
          onde δ é um termo de erro que converge para zero. Empiricamente, Double Q-Learning apresenta
          estimativas mais precisas e políticas mais estáveis especialmente em ambientes estocásticos
          com muitas ações.
        </p>

        <div style={S.note}>
          Double DQN (van Hasselt et al., 2016) aplica o mesmo princípio em Deep RL, usando a rede online
          para selecionar ações e a rede target para avaliá-las — uma das melhorias mais impactantes ao DQN original.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. n-Step TD Methods</h2>
        <p style={S.p}>
          Os métodos TD(0) e Monte Carlo representam dois extremos de um espectro: TD(0) usa apenas um passo
          de recompensa real e depois bootstrapping; MC usa todos os passos reais até ao fim do episódio.
          Os <strong>n-step methods</strong> interpolam entre estes extremos, usando n recompensas reais
          seguidas de bootstrapping com <InlineMath math={"V(S_{t+n})"} />.
        </p>

        <h3 style={S.h3}>Definição do n-step Return</h3>
        <div style={S.math}>
          <BlockMath math={`G_t^{(n)} = R_{t+1} + \\gamma R_{t+2} + \\cdots + \\gamma^{n-1} R_{t+n} + \\gamma^n V(S_{t+n})`} />
        </div>

        <p style={S.p}>
          A regra de atualização n-step TD utiliza este retorno como target:
        </p>
        <div style={S.math}>
          <BlockMath math={`V(S_t) \\leftarrow V(S_t) + \\alpha\\bigl[G_t^{(n)} - V(S_t)\\bigr]`} />
        </div>

        <div style={S.diagram}>
          <NStepDiagram />
          <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
            À esquerda: TD(0) bootstraps imediatamente após 1 passo. No centro: n=3 usa 3 recompensas reais.
            À direita: MC usa todas as recompensas até ao fim do episódio.
          </p>
        </div>

        <h3 style={S.h3}>Tradeoff Bias-Variância com n</h3>
        <ul style={S.ul}>
          <li style={S.li}>
            <strong>n pequeno (TD):</strong> Baixa variância (bootstraps cedo com estimativas suaves),
            alto bias (propaga erros da função de valor <InlineMath math={"V(S_{t+n})"} />)
          </li>
          <li style={S.li}>
            <strong>n grande (MC):</strong> Alto bias zero mas alta variância — os retornos reais
            são ruidosos e o sinal de treino flutua muito entre episódios
          </li>
          <li style={S.li}>
            <strong>n intermédio:</strong> Em prática, n ∈ [3, 10] frequentemente supera ambos os extremos.
            O valor ótimo depende da estocacidade do ambiente e da qualidade inicial de <InlineMath math={"V"} />
          </li>
          <li style={S.li}>
            n-step methods requerem esperar n passos antes de poder atualizar — introduz latência de treino
            que é mitigada com TD(λ)
          </li>
        </ul>

        <div style={S.note}>
          GAE (Generalized Advantage Estimation), usado em PPO e A3C, é essencialmente uma versão suavizada
          de n-step returns com um parâmetro λ que interpola entre TD(0) e MC para estimação de vantagens.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. TD(λ) e Eligibility Traces</h2>
        <p style={S.p}>
          Em vez de escolher um único valor de n, TD(λ) combina <em>todos</em> os n-step returns numa
          média geometricamente ponderada, controlada pelo parâmetro <InlineMath math={"\\lambda \\in [0,1]"} />.
          Isto permite aprendizagem eficiente que captura a informação de múltiplos horizontes temporais
          simultaneamente.
        </p>

        <h3 style={S.h3}>O λ-Return: Vista Frontal</h3>
        <p style={S.p}>
          O λ-return combina todos os n-step returns com pesos decrescentes:
        </p>

        <div style={S.math}>
          <BlockMath math={`G_t^\\lambda = (1-\\lambda) \\sum_{n=1}^{\\infty} \\lambda^{n-1} G_t^{(n)}`} />
        </div>

        <p style={S.p}>
          Os pesos <InlineMath math={"(1-\\lambda)\\lambda^{n-1}"} /> somam 1 (série geométrica).
          Para <InlineMath math={"\\lambda = 0"} />, recupera-se TD(0); para <InlineMath math={"\\lambda = 1"} />,
          recupera-se Monte Carlo. λ ∈ (0,1) interpola suavemente entre os dois.
        </p>

        <div style={S.math}>
          <BlockMath math={`\\lambda = 0 \\Rightarrow G_t^\\lambda = G_t^{(1)} \\quad (\\text{TD(0)})`} />
          <BlockMath math={`\\lambda = 1 \\Rightarrow G_t^\\lambda = G_t \\quad (\\text{Monte Carlo})`} />
        </div>

        <h3 style={S.h3}>Eligibility Traces: Vista de Retaguarda</h3>
        <p style={S.p}>
          Calcular o λ-return requer olhar para o futuro (forward view), tornando a aprendizagem online
          impossível sem esperar pelo fim do episódio. As <strong>eligibility traces</strong> oferecem uma
          vista equivalente de retaguarda (backward view) que permite updates online eficientes.
        </p>

        <p style={S.p}>
          A eligibility trace <InlineMath math={"e_t(s)"} /> mede quanto o estado s é "elegível" para receber
          crédito pelo TD error atual. É aumentada sempre que o estado é visitado e decai exponencialmente:
        </p>

        <div style={S.math}>
          <BlockMath math={`e_t(s) = \\gamma\\lambda\\, e_{t-1}(s) + \\mathbf{1}[S_t = s]`} />
        </div>

        <p style={S.p}>
          O update de TD(λ) propaga o TD error δ_t por todos os estados, ponderado pelas suas eligibility traces:
        </p>

        <div style={S.math}>
          <BlockMath math={`\\delta_t = R_{t+1} + \\gamma V(S_{t+1}) - V(S_t)`} />
          <BlockMath math={`V(s) \\leftarrow V(s) + \\alpha\\,\\delta_t\\,e_t(s) \\quad \\forall s`} />
        </div>

        <h3 style={S.h3}>SARSA(λ): Controlo com Eligibility Traces</h3>
        <p style={S.p}>
          SARSA(λ) aplica eligibility traces a valores Q em vez de V, mantendo uma trace para cada par (s,a):
        </p>

        <div style={S.math}>
          <BlockMath math={`e_t(s,a) = \\gamma\\lambda\\, e_{t-1}(s,a) + \\mathbf{1}[S_t = s,\\, A_t = a]`} />
          <BlockMath math={`Q(s,a) \\leftarrow Q(s,a) + \\alpha\\,\\delta_t\\,e_t(s,a) \\quad \\forall s, a`} />
        </div>

        <div style={S.highlight}>
          <strong>Vantagem principal:</strong> As eligibility traces resolvem o problema do crédito temporal
          (credit assignment) de forma eficiente. Um estado visitado muito antes do fim de um episódio ainda
          recebe crédito proporcional à sua "participação" no retorno, através da trace decrescente.
          Isto acelera dramaticamente a aprendizagem em ambientes com recompensas esparsas ou episódios longos.
        </div>

        <div style={S.note}>
          Accumulating traces (somam 1 a cada visita) são as mais comuns. Replacing traces (repõem em 1)
          são mais estáveis em certos problemas. Watkins's Q(λ) aplica a ideia ao Q-Learning off-policy,
          mas corta as traces quando uma ação exploratória é tomada.
        </div>
      </div>
</div>
  );
}
