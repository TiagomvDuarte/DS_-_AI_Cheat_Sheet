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
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

export default function RL1() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>MÓDULO 1</div>
      <h1 style={S.h1}>Introdução ao Reinforcement Learning</h1>
      <p style={S.lead}>
        Reinforcement Learning (RL) é um paradigma de aprendizagem em que um agente aprende a tomar decisões
        através da interação com o ambiente, recebendo sinais de recompensa. Diferente do supervised learning
        (sem labels a cada passo) e do unsupervised learning (tem um objetivo de maximização), o RL é guiado
        por recompensas escalares e consequências diferidas. Neste módulo estabelecemos o vocabulário, as
        definições formais e a intuição que sustentam todos os módulos seguintes.
      </p>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. RL vs Supervised vs Unsupervised Learning</h2>
        <p style={S.p}>
          Os três grandes paradigmas do Machine Learning diferem fundamentalmente na natureza do sinal de
          aprendizagem, no tipo de problema que resolvem e na forma como o agente/modelo interage com os dados.
          Compreender estas diferenças é essencial para saber quando aplicar cada abordagem.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Sinal de Treino</th>
              <th style={S.th}>Objetivo</th>
              <th style={S.th}>Tipo de Feedback</th>
              <th style={S.th}>Timing</th>
              <th style={S.th}>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Supervised</strong></td>
              <td style={S.td}>Pares (x, y) rotulados</td>
              <td style={S.td}>Predição / Classificação</td>
              <td style={S.td}>Erro direto por label</td>
              <td style={S.td}>Imediato</td>
              <td style={S.td}>Classificação de imagens, regressão, NLP</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Unsupervised</strong></td>
              <td style={S.td}>Dados não rotulados</td>
              <td style={S.td}>Estrutura latente</td>
              <td style={S.td}>Sem feedback externo</td>
              <td style={S.td}>—</td>
              <td style={S.td}>Clustering, VAEs, redução de dimensão</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Reinforcement</strong></td>
              <td style={S.td}>Sinal de recompensa r_t</td>
              <td style={S.td}>Decisões sequenciais ótimas</td>
              <td style={S.td}>Escalar, avaliativo</td>
              <td style={S.td}>Diferido, esparso</td>
              <td style={S.td}>Jogos, robótica, trading, recomendação</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Diagrama: Os Três Paradigmas como Ciclos de Feedback</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 870 200" width="100%" style={{ display: 'block' }}>
            {/* ── Supervised ── */}
            <g>
              <text x="120" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Supervised Learning</text>
              <g transform="translate(0,20)">
                <rect x="30" y="28" width="90" height="36" rx="7" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
                <text x="75" y="45" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Dataset</text>
                <text x="75" y="55" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(x, y)</text>
                <rect x="150" y="28" width="90" height="36" rx="7" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
                <text x="195" y="50" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Modelo</text>
                <rect x="150" y="90" width="90" height="36" rx="7" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
                <text x="195" y="112" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Predição ŷ</text>
                <rect x="30" y="90" width="90" height="36" rx="7" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5"/>
                <text x="75" y="112" textAnchor="middle" fontSize="11" fill={color}>Loss (y − ŷ)</text>
                <line x1="120" y1="46" x2="150" y2="46" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <line x1="195" y1="64" x2="195" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <line x1="150" y1="108" x2="120" y2="108" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <line x1="75" y1="90" x2="75" y2="64" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <text x="133" y="44" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">x</text>
                <text x="208" y="80" fontSize="9" fill="var(--text-secondary)">ŷ</text>
                <text x="136" y="122" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">erro</text>
                <text x="50" y="82" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">gradiente</text>
              </g>
            </g>

            {/* ── Unsupervised ── */}
            <g>
              <text x="390" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-secondary)">Unsupervised Learning</text>
              <g transform="translate(0,20)">
                <rect x="310" y="28" width="90" height="36" rx="7" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
                <text x="355" y="42" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Dataset</text>
                <text x="355" y="55" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(x)</text>
                <rect x="430" y="28" width="90" height="36" rx="7" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
                <text x="475" y="50" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Modelo</text>
                <rect x="370" y="95" width="110" height="36" rx="7" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
                <text x="425" y="115" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Estrutura latente</text>
                <line x1="400" y1="46" x2="430" y2="46" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <line x1="475" y1="64" x2="425" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <text x="412" y="44" fontSize="9" fill="var(--text-secondary)" textAnchor="middle">x</text>
              </g>
            </g>

            {/* ── RL ── */}
            <g>
              <text x="700" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Reinforcement Learning</text>
              <g transform="translate(0,20)">
                <rect x="580" y="28" width="80" height="36" rx="7" fill="var(--bg-primary)" stroke={color} strokeWidth="1.5"/>
                <text x="620" y="50" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Agente</text>
                <rect x="740" y="28" width="80" height="36" rx="7" fill="var(--bg-primary)" stroke="#94a3b8" strokeWidth="1.5"/>
                <text x="780" y="50" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Ambiente</text>
                <path d="M660 28 Q700 12 740 28" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <text x="700" y="10" fontSize="9" fill="#94a3b8" textAnchor="middle">aₜ</text>
                <path d="M740 56 Q700 76 660 56" fill="none" stroke={color} strokeWidth="1.5" markerEnd="url(#arr1)"/>
                <text x="700" y="88" fontSize="9" fill={color} textAnchor="middle">rₜ₊₁, sₜ₊₁</text>
              </g>
            </g>

            <defs>
              <marker id="arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/>
              </marker>
            </defs>
          </svg>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.75rem 0 0', textAlign: 'center' }}>
            Nota: no RL o agente <em>gera</em> os seus próprios dados ao interagir com o ambiente — não existe um dataset fixo.
          </p>
        </div>

        <p style={S.p}>
          A distinção mais crítica entre RL e supervised learning está na natureza do sinal: no supervised learning,
          o modelo recebe a resposta correta (<em>instrutivo</em>); no RL, o agente recebe apenas uma pontuação
          que avalia o quão boa foi a ação (<em>avaliativo</em>). Não lhe é dito o que devia ter feito — apenas
          se foi bom ou mau. Esta nuance é o que torna o RL fundamentalmente mais difícil e mais geral.
        </p>
        <div style={S.note}>
          No RL o agente não recebe a ação correta — recebe apenas uma recompensa que indica se o comportamento
          foi bom ou mau. Cabe ao agente descobrir a sequência de ações que maximiza o retorno total.
          Este é o <strong>credit assignment problem</strong>: como atribuir crédito (ou culpa) a ações passadas
          com base numa recompensa recebida muito depois?
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. O Problema de RL — Agente e Ambiente</h2>
        <p style={S.p}>
          O problema de RL é formalmente descrito como a interação cíclica entre dois atores: o <strong>agente</strong>
          (o aprendiz / tomador de decisões) e o <strong>ambiente</strong> (tudo o resto). A cada passo de tempo
          discreto <InlineMath math="t" />, o agente observa o estado do ambiente, escolhe uma ação, e o ambiente
          responde com um novo estado e uma recompensa.
        </p>

        <h3 style={S.h3}>O Ciclo Agente–Ambiente</h3>
        <div style={S.diagram}>
          <svg viewBox="0 0 700 180" width="100%" style={{ display: 'block' }}>
            {/* Agent box */}
            <rect x="60" y="60" width="160" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2"/>
            <text x="140" y="86" textAnchor="middle" fontSize="14" fontWeight="700" fill={color}>Agente</text>
            <text x="140" y="104" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">π(a | s)</text>

            {/* Environment box */}
            <rect x="480" y="60" width="160" height="60" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="2"/>
            <text x="560" y="86" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text-primary)">Ambiente</text>
            <text x="560" y="104" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">P(s'|s,a), R(s,a)</text>

            {/* Action arrow top: agent → environment */}
            <defs>
              <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6 Z" fill={color}/>
              </marker>
              <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6 Z" fill="var(--text-secondary)"/>
              </marker>
            </defs>
            <path d="M220 75 L480 75" fill="none" stroke={color} strokeWidth="2" markerEnd="url(#arrowRed)"/>
            <text x="350" y="55" textAnchor="middle" fontSize="12" fill={color} fontWeight="600">Ação</text>
            <text x="350" y="68" textAnchor="middle" fontSize="11" fill={color}>A_t</text>

            {/* State + Reward arrows bottom: environment → agent */}
            <path d="M480 105 L220 105" fill="none" stroke="var(--text-secondary)" strokeWidth="2" markerEnd="url(#arrowGray)"/>
            <text x="350" y="122" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Estado  S_{"{t+1}"}  |  Recompensa  R_{"{t+1}"}</text>

            {/* Time label */}
            <text x="350" y="160" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">passo de tempo t → t+1</text>

            {/* Self-loop labels */}
            <text x="60" y="48" fontSize="10" fill="var(--text-secondary)">Observa S_t</text>
            <text x="490" y="48" fontSize="10" fill="var(--text-secondary)">Emite S_{"{t+1}"}, R_{"{t+1}"}</text>
          </svg>
        </div>

        <h3 style={S.h3}>Definições Formais</h3>
        <p style={S.p}>
          As entidades fundamentais do ciclo RL são definidas formalmente como:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Símbolo</th>
              <th style={S.th}>Nome</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Exemplo (Atari)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="S_t" /></td>
              <td style={S.td}><strong>Estado</strong></td>
              <td style={S.td}>Representação do ambiente no instante t</td>
              <td style={S.td}>Frame de pixels 84×84</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="A_t" /></td>
              <td style={S.td}><strong>Ação</strong></td>
              <td style={S.td}>Decisão do agente baseada em S_t</td>
              <td style={S.td}>Pressionar botão (18 possíveis)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="R_{t+1}" /></td>
              <td style={S.td}><strong>Recompensa</strong></td>
              <td style={S.td}>Sinal escalar emitido pelo ambiente após A_t</td>
              <td style={S.td}>Variação na pontuação do jogo</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="S_{t+1}" /></td>
              <td style={S.td}><strong>Próximo Estado</strong></td>
              <td style={S.td}>Novo estado do ambiente após a ação</td>
              <td style={S.td}>Frame seguinte do jogo</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\mathcal{S}, \mathcal{A}" /></td>
              <td style={S.td}><strong>Espaços</strong></td>
              <td style={S.td}>Conjuntos de todos os estados/ações possíveis</td>
              <td style={S.td}>Todos os frames possíveis / 18 botões</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          A sequência que o agente experiencia ao longo do tempo chama-se <strong>trajetória</strong> (ou episódio):
        </p>
        <div style={S.math}>
          <BlockMath math="\tau = (S_0, A_0, R_1, S_1, A_1, R_2, S_2, A_2, R_3, \ldots)" />
        </div>
        <div style={S.note}>
          Nota sobre observabilidade: quando o agente tem acesso completo ao estado do ambiente, o problema
          é <em>fully observable</em> (MDP). Quando só tem acesso a uma observação parcial O_t (e.g., apenas
          o frame atual sem velocidade), é <em>partially observable</em> (POMDP). Na prática, usa-se frequentemente
          um histórico de frames como proxy do estado.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. A Hipótese do Reward</h2>
        <div style={S.highlight}>
          <p style={{ ...S.p, fontStyle: 'italic', marginBottom: '0.4rem' }}>
            "All of what we mean by goals and purposes can be well thought of as the maximization
            of the expected value of the cumulative sum of a received scalar signal (called reward)."
          </p>
          <p style={{ ...S.p, marginBottom: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            — Richard S. Sutton &amp; Andrew G. Barto, <em>Reinforcement Learning: An Introduction</em> (2018)
          </p>
        </div>
        <p style={S.p}>
          A <strong>Reward Hypothesis</strong> é a pedra angular do RL: qualquer objetivo, independentemente da sua
          complexidade, pode ser expresso como a maximização do retorno cumulativo esperado. Esta é uma afirmação
          poderosa e controversa — implica que não precisamos de programar comportamentos específicos, apenas
          de definir corretamente o sinal de recompensa.
        </p>
        <h3 style={S.h3}>Exemplos da Hipótese em Ação</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Objetivo Natural</th>
              <th style={S.th}>Formulação como Recompensa</th>
              <th style={S.th}>Desafio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Jogo Atari</td>
              <td style={S.td}>Ganhar pontos</td>
              <td style={S.td}><InlineMath math="r_t = \Delta\text{score}_t" /></td>
              <td style={S.td}>Recompensa esparsa em alguns jogos</td>
            </tr>
            <tr>
              <td style={S.td}>Robô de Picking</td>
              <td style={S.td}>Apanhar objeto</td>
              <td style={S.td}><InlineMath math="r_t = +1" /> se objeto apanhado, 0 c.c.</td>
              <td style={S.td}>Recompensa muito esparsa</td>
            </tr>
            <tr>
              <td style={S.td}>Trading Algorítmico</td>
              <td style={S.td}>Maximizar lucro</td>
              <td style={S.td}><InlineMath math="r_t = \Delta\text{portfolio}_t" /></td>
              <td style={S.td}>Não stacionaridade do mercado</td>
            </tr>
            <tr>
              <td style={S.td}>Chatbot / RLHF</td>
              <td style={S.td}>Respostas úteis e seguras</td>
              <td style={S.td}>Preferência humana (modelo de recompensa)</td>
              <td style={S.td}>Reward hacking, alinhamento</td>
            </tr>
            <tr>
              <td style={S.td}>Controlo de Rede Elétrica</td>
              <td style={S.td}>Minimizar consumo energético</td>
              <td style={S.td}><InlineMath math="r_t = -\text{energia}_t" /></td>
              <td style={S.td}>Múltiplos objetivos concorrentes</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          Um dos maiores perigos da Reward Hypothesis é o <strong>reward hacking</strong>: o agente encontra
          formas inesperadas de maximizar a recompensa que não correspondem ao objetivo pretendido. Por exemplo,
          um agente de corrida pode aprender a andar em círculos para acumular recompensa de velocidade sem
          avançar na pista. Definir bem a função de recompensa é tanto arte como ciência.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Return e Discount Factor</h2>
        <p style={S.p}>
          O objetivo do agente não é maximizar a recompensa imediata <InlineMath math="R_{t+1}" />, mas sim
          o <strong>retorno</strong> <InlineMath math="G_t" /> — a soma (possivelmente descontada) de todas
          as recompensas futuras a partir do instante t.
        </p>

        <h3 style={S.h3}>Retorno com Desconto</h3>
        <div style={S.math}>
          <BlockMath math="G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \cdots = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\gamma \in [0, 1]" /> é o <strong>fator de desconto</strong>. Este parâmetro
          controla a importância relativa das recompensas imediatas vs futuras:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Valor de γ</th>
              <th style={S.th}>Comportamento</th>
              <th style={S.th}>Analogia</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\gamma = 0" /></td>
              <td style={S.td}>Agente míope — só considera recompensa imediata</td>
              <td style={S.td}>Viver apenas o presente</td>
              <td style={S.td}>Tarefas puramente imediatas</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\gamma = 0.9" /></td>
              <td style={S.td}>Pondera recompensas até ~10 passos à frente</td>
              <td style={S.td}>Planeamento de curto/médio prazo</td>
              <td style={S.td}>Maioria dos problemas práticos</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\gamma = 0.99" /></td>
              <td style={S.td}>Considera recompensas até ~100 passos</td>
              <td style={S.td}>Planeamento de longo prazo</td>
              <td style={S.td}>Jogos complexos (Go, Chess)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\gamma \to 1" /></td>
              <td style={S.td}>Far-sighted — pondera igualmente todas as recompensas</td>
              <td style={S.td}>Otimização a infinito</td>
              <td style={S.td}>Apenas válido em tarefas episódicas</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Tarefas Episódicas vs Tarefas Contínuas</h3>
        <p style={S.p}>
          O retorno <InlineMath math="G_t" /> assume formas ligeiramente diferentes consoante o tipo de tarefa:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '1rem', border: '1px solid var(--card-border)' }}>
            <p style={{ fontWeight: 700, color, margin: 0, marginBottom: '0.6rem' }}>Tarefas Episódicas</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Têm um estado terminal — o episódio termina (vitória/derrota, jogo over, objetivo atingido).
              O retorno é uma soma finita. Exemplos: xadrez, Atari, robô que apanha objeto.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '1rem', border: '1px solid var(--card-border)' }}>
            <p style={{ fontWeight: 700, color, margin: 0, marginBottom: '0.6rem' }}>Tarefas Contínuas</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Sem estado terminal — o agente interage indefinidamente. O desconto γ &lt; 1 é essencial
              para garantir que G_t converge. Exemplos: trading, controlo de temperatura, servidores.
            </p>
          </div>
        </div>
        <div style={S.note}>
          Uma propriedade útil do retorno descontado: podemos escrever <InlineMath math="G_t = R_{t+1} + \gamma G_{t+1}" />.
          Esta relação recursiva é a base das equações de Bellman que estudaremos no Módulo 02.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Política (Policy)</h2>
        <p style={S.p}>
          A <strong>política</strong> <InlineMath math="\pi" /> é o cérebro do agente — define completamente o seu
          comportamento ao mapear estados para ações. É o objeto central que o RL tenta otimizar.
        </p>

        <h3 style={S.h3}>Política Estocástica</h3>
        <p style={S.p}>
          A forma mais geral de política é a <em>política estocástica</em>, que define uma distribuição de
          probabilidade sobre as ações dado o estado:
        </p>
        <div style={S.math}>
          <BlockMath math="\pi(a \mid s) = P[A_t = a \mid S_t = s]" />
        </div>
        <p style={S.p}>
          A probabilidade de selecionar a ação <InlineMath math="a" /> no estado <InlineMath math="s" />,
          com <InlineMath math="\sum_{a \in \mathcal{A}} \pi(a \mid s) = 1" /> para todo o estado s.
        </p>

        <h3 style={S.h3}>Política Determinística</h3>
        <p style={S.p}>
          Um caso especial é a <em>política determinística</em>, que mapeia cada estado a exatamente uma ação:
        </p>
        <div style={S.math}>
          <BlockMath math="\mu: \mathcal{S} \rightarrow \mathcal{A} \quad \Rightarrow \quad a = \mu(s)" />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Formulação</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Algoritmos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Determinística</td>
              <td style={S.td}><InlineMath math="a = \mu(s)" /></td>
              <td style={S.td}>Computacionalmente simples, boa em espaços contínuos</td>
              <td style={S.td}>DDPG, TD3</td>
            </tr>
            <tr>
              <td style={S.td}>Estocástica</td>
              <td style={S.td}><InlineMath math="\pi(a|s)" /></td>
              <td style={S.td}>Exploration natural, melhor em ambientes parcialmente observáveis</td>
              <td style={S.td}>PPO, TRPO, A3C</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          O objetivo do RL é encontrar a <strong>política ótima</strong> <InlineMath math="\pi^*" /> que
          maximiza o retorno esperado em todos os estados:
        </p>
        <div style={S.math}>
          <BlockMath math="\pi^* = \arg\max_\pi \mathbb{E}_\pi[G_t \mid S_t = s] \quad \forall s \in \mathcal{S}" />
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Value Function e Q-Function</h2>
        <p style={S.p}>
          As funções de valor são o mecanismo central com que os agentes raciocinam sobre o futuro —
          permitem quantificar "quão boa" é uma situação sem ter de simular todos os futuros possíveis.
          Serão derivadas formalmente com as equações de Bellman no Módulo 02; aqui introduzimos a intuição.
        </p>

        <h3 style={S.h3}>State Value Function</h3>
        <p style={S.p}>
          A <strong>função de valor de estado</strong> <InlineMath math="V^\pi(s)" /> mede o retorno cumulativo
          esperado a partir do estado s, seguindo a política π:
        </p>
        <div style={S.math}>
          <BlockMath math="V^\pi(s) = \mathbb{E}_\pi\!\left[G_t \mid S_t = s\right] = \mathbb{E}_\pi\!\left[\sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \;\middle|\; S_t = s\right]" />
        </div>
        <p style={S.p}>
          <InlineMath math="V^\pi(s)" /> responde à pergunta: <em>"Se estou no estado s e sigo a política π,
          qual o retorno total esperado?"</em>
        </p>

        <h3 style={S.h3}>Action-Value Function (Q-Function)</h3>
        <p style={S.p}>
          A <strong>Q-function</strong> <InlineMath math="Q^\pi(s, a)" /> condiciona também na ação tomada,
          medindo o retorno esperado ao executar a ação a no estado s e depois seguir π:
        </p>
        <div style={S.math}>
          <BlockMath math="Q^\pi(s, a) = \mathbb{E}_\pi\!\left[G_t \mid S_t = s,\, A_t = a\right]" />
        </div>
        <p style={S.p}>
          <InlineMath math="Q^\pi(s, a)" /> responde à pergunta: <em>"Se estou no estado s, tomo a ação a
          (independentemente do que π diria), e depois sigo π, qual o retorno esperado?"</em>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
          <div style={S.highlight}>
            <p style={{ fontWeight: 700, color, margin: 0, marginBottom: '0.4rem' }}>V(s) — avalia estados</p>
            <p style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.6, color: 'var(--text-primary)' }}>
              Útil em métodos policy gradient. Precisa de um modelo para selecionar ações.
              Usado como baseline em algoritmos Actor-Critic.
            </p>
          </div>
          
            <p style={{ fontWeight: 700, color, margin: 0, marginBottom: '0.4rem' }}>Q(s,a) — avalia pares estado-ação</p>
            <p style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.6, color: 'var(--text-primary)' }}>
              Permite selecionar ações sem modelo do ambiente:
              <InlineMath math="\pi(s) = \arg\max_a Q(s,a)" />.
              Base do DQN e variantes.
            </p>
          
        </div>
        <div style={S.note}>
          A relação entre V e Q é: <InlineMath math="V^\pi(s) = \sum_a \pi(a|s)\, Q^\pi(s,a)" />.
          No Módulo 02 derivaremos as equações de Bellman que relacionam V(s) com V(s') recursivamente,
          abrindo caminho para algoritmos como Value Iteration e Policy Iteration.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Exploração vs Exploitação</h2>
        <p style={S.p}>
          O <strong>dilema exploração-exploitação</strong> é talvez o problema mais fundamental e distintivo
          do RL. O agente deve constantemente decidir entre:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0 1.5rem' }}>
          <div style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '1rem' }}>
            <p style={{ fontWeight: 700, color, margin: 0, marginBottom: '0.5rem' }}>Exploitation (Exploitação)</p>
            <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.6, color: 'var(--text-primary)' }}>
              Usar o conhecimento atual para maximizar a recompensa imediata.
              Selecionar a ação com maior valor estimado.
              Risco: ficar preso em ótimo local.
            </p>
          </div>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem' }}>
            <p style={{ fontWeight: 700, color: 'var(--text-primary)', margin: 0, marginBottom: '0.5rem' }}>Exploration (Exploração)</p>
            <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.6, color: 'var(--text-primary)' }}>
              Tentar ações desconhecidas para obter mais informação sobre o ambiente.
              Pode gerar recompensas piores a curto prazo mas melhores a longo prazo.
            </p>
          </div>
        </div>

        <h3 style={S.h3}>O Problema do Multi-Armed Bandit</h3>
        <p style={S.p}>
          O caso de estudo mais simples e mais estudado do dilema exploração-exploitação é o
          <strong> multi-armed bandit</strong>: k slot machines (braços), cada uma com distribuição
          de recompensa desconhecida. Como maximizar o retorno total ao longo de N tentativas?
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 160" width="100%" style={{ display: 'block' }}>
            {/* 5 slot machines */}
            {[80, 190, 300, 410, 520].map((x, i) => (
              <g key={i}>
                {/* Machine body */}
                <rect x={x} y="30" width="80" height="100" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5"/>
                {/* Screen */}
                <rect x={x + 10} y="42" width="60" height="35" rx="4" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1"/>
                <text x={x + 40} y="63" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">μ = ?</text>
                {/* Arm */}
                <rect x={x + 62} y="55" width="8" height="28" rx="3" fill={i === 2 ? color : 'var(--text-secondary)'}/>
                <circle cx={x + 66} cy="53" r="6" fill={i === 2 ? color : 'var(--text-secondary)'}/>
                {/* Label */}
                <text x={x + 40} y="147" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Braço {i + 1}</text>
                {/* Agent arrow for arm 3 */}
                {i === 2 && (
                  <>
                    <path d="M340 10 L340 25" stroke={color} strokeWidth="2" markerEnd="url(#arrRed2)"/>
                    <text x="340" y="9" textAnchor="middle" fontSize="10" fill={color} fontWeight="600">Agente puxa aqui</text>
                    <defs>
                      <marker id="arrRed2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill={color}/>
                      </marker>
                    </defs>
                  </>
                )}
              </g>
            ))}
            <text x="340" y="155" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Cada braço tem distribuição de recompensa desconhecida — o agente não sabe qual é o melhor</text>
          </svg>
        </div>

        <h3 style={S.h3}>Porque o Greedy Puro Falha</h3>
        <p style={S.p}>
          Se o agente for puramente greedy (sempre explora o braço com melhor estimativa atual), pode
          acontecer que:
        </p>
        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
          <li style={{ marginBottom: '0.5rem' }}>Nas primeiras tentativas, um braço mau por acaso retorna uma recompensa alta (flutuação).</li>
          <li style={{ marginBottom: '0.5rem' }}>O agente greedy compromete-se com esse braço e nunca mais explora os outros.</li>
          <li style={{ marginBottom: '0.5rem' }}>O verdadeiro braço ótimo fica subamostrado — acumulam-se <strong>arrependimentos</strong> (regret).</li>
        </ul>

        <h3 style={S.h3}>ε-Greedy: A Solução Mais Simples</h3>
        <p style={S.p}>
          A estratégia <strong>ε-greedy</strong> equilibra os dois lados do dilema de forma simples e eficaz:
        </p>
        <div style={S.math}>
          <BlockMath math="A_t = \begin{cases} \arg\max_a Q(s, a) & \text{com probabilidade } 1 - \varepsilon \\ \text{ação aleatória} & \text{com probabilidade } \varepsilon \end{cases}" />
        </div>
        <p style={S.p}>
          Tipicamente <InlineMath math="\varepsilon" /> começa alto (e.g., 1.0 — exploração pura) e decai
          ao longo do treino (e.g., até 0.01 — quase totalmente greedy). Estratégias mais sofisticadas
          como UCB e Thompson Sampling serão tratadas no Módulo 05.
        </p>
        <div style={S.note}>
          Pura exploitação → ótimo local. Pura exploração → nenhum aproveitamento. O equilíbrio certo
          depende do horizonte temporal, da incerteza do ambiente e da estrutura do problema. Não existe
          solução universal — é um dos problemas abertos do RL.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Modelo do Ambiente (Opcional)</h2>
        <p style={S.p}>
          Um agente pode (mas não tem de) manter um <strong>modelo interno do ambiente</strong> —
          uma representação que lhe permite prever o que vai acontecer antes de agir.
          O modelo é composto por duas funções:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Dinâmica de transição: } P(s' \mid s, a) = P[S_{t+1} = s' \mid S_t = s, A_t = a]" />
        </div>
        <div style={S.math}>
          <BlockMath math="\text{Função de recompensa: } R(s, a) = \mathbb{E}[R_{t+1} \mid S_t = s, A_t = a]" />
        </div>

        <h3 style={S.h3}>Model-Based vs Model-Free</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Tem Modelo?</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Desvantagens</th>
              <th style={S.th}>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Model-Based</strong></td>
              <td style={S.td}>Sim (dado ou aprendido)</td>
              <td style={S.td}>Eficiência de amostragem; permite planeamento</td>
              <td style={S.td}>Erros do modelo propagam-se; difícil modelar ambientes complexos</td>
              <td style={S.td}>AlphaZero, Dyna-Q, MBPO</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Model-Free</strong></td>
              <td style={S.td}>Não</td>
              <td style={S.td}>Simples; funciona em qualquer ambiente; sem bias do modelo</td>
              <td style={S.td}>Requer muitas amostras; lento a aprender</td>
              <td style={S.td}>Q-Learning, DQN, PPO, SAC</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          A maioria dos algoritmos modernos (PPO, SAC, DQN) é model-free — aprendem diretamente da
          experiência sem modelar as dinâmicas do ambiente. Model-based RL é uma área de investigação ativa
          precisamente porque a eficiência de amostragem é crítica em cenários reais (robótica física,
          onde cada interação tem custo).
        </p>

        <h3 style={S.h3}>Roteiro do Curso</h3>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', margin: 0, color: 'var(--text-primary)' }}>Onde estamos e para onde vamos:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
            {[
              { mod: 'Módulo 01', title: 'Introdução ao RL', current: true, desc: 'Vocabulário, ciclo agente-ambiente, reward hypothesis' },
              { mod: 'Módulo 02', title: 'MDPs e Bellman', current: false, desc: 'Formalismo MDP, equações de Bellman, V* e Q*' },
              { mod: 'Módulo 03', title: 'Dynamic Programming', current: false, desc: 'Policy Evaluation, Policy Iteration, Value Iteration' },
              { mod: 'Módulo 04', title: 'Model-Free Prediction', current: false, desc: 'Monte Carlo, TD(0), TD(λ)' },
              { mod: 'Módulo 05', title: 'Model-Free Control', current: false, desc: 'SARSA, Q-Learning, bandit algorithms' },
              { mod: 'Módulo 06+', title: 'Deep RL', current: false, desc: 'DQN, Policy Gradients, PPO, Actor-Critic' },
            ].map(({ mod, title, current, desc }) => (
              <div key={mod} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 0.75rem', borderRadius: 6, background: current ? 'rgba(249,115,22,0.10)' : 'transparent', border: current ? `1px solid rgba(249,115,22,0.10)` : '1px solid transparent' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: current ? color : 'var(--text-secondary)', minWidth: 80 }}>{mod}</span>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: current ? color : 'var(--text-primary)', minWidth: 160 }}>{title}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Exemplos de Aplicações Reais</h2>
        <p style={S.p}>
          Para ancorar os conceitos abstratos, vejamos como o framework RL se instancia em aplicações
          reais — identificando o espaço de estados, o espaço de ações e o sinal de recompensa de cada uma.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aplicação</th>
              <th style={S.th}>Espaço de Estados</th>
              <th style={S.th}>Espaço de Ações</th>
              <th style={S.th}>Sinal de Recompensa</th>
              <th style={S.th}>Marco</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Atari DQN</strong></td>
              <td style={S.td}>4 frames consecutivos 84×84 px (escala de cinzentos)</td>
              <td style={S.td}>Discreto: 18 botões do joystick</td>
              <td style={S.td}>Variação na pontuação do jogo</td>
              <td style={S.td}>DeepMind, 2015 — supera nível humano em 29 jogos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>AlphaGo / AlphaZero</strong></td>
              <td style={S.td}>Tabuleiro 19×19 (361 posições)</td>
              <td style={S.td}>Discreto: colocar pedra em posição vazia</td>
              <td style={S.td}>+1 vitória, −1 derrota (esparso)</td>
              <td style={S.td}>DeepMind, 2016/2017 — campeão mundial Lee Sedol</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Robótica (manipulação)</strong></td>
              <td style={S.td}>Posições das juntas, câmera RGB-D, força dos sensores</td>
              <td style={S.td}>Contínuo: torques em cada junta</td>
              <td style={S.td}>Distância ao objetivo, tarefa concluída</td>
              <td style={S.td}>OpenAI, Google DeepMind Robotics</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Trading Algorítmico</strong></td>
              <td style={S.td}>Preços, volumes, indicadores técnicos, posição atual</td>
              <td style={S.td}>Comprar / Vender / Manter (discreto ou contínuo)</td>
              <td style={S.td}>Retorno financeiro ajustado ao risco (Sharpe ratio)</td>
              <td style={S.td}>J.P. Morgan, Two Sigma, fundos quantitativos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Recomendação (YouTube/Netflix)</strong></td>
              <td style={S.td}>Histórico de visualizações, perfil, contexto temporal</td>
              <td style={S.td}>Item a recomendar (milhões de vídeos/filmes)</td>
              <td style={S.td}>Clique, tempo de visualização, engagement longo prazo</td>
              <td style={S.td}>Google, Netflix — substituição de modelos supervisionados</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Controlo Energético</strong></td>
              <td style={S.td}>Temperaturas, humidade, ocupação dos espaços, previsão meteorológica</td>
              <td style={S.td}>Definições de AVAC, iluminação, carregamento de baterias</td>
              <td style={S.td}>Negativo do consumo energético (minimizar)</td>
              <td style={S.td}>DeepMind — 40% redução no arrefecimento dos datacenters Google</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          Em 2016 a DeepMind aplicou RL ao controlo do sistema de arrefecimento dos datacenters da Google,
          obtendo uma redução de ~40% no consumo energético. Este resultado demonstrou que o RL pode ter
          impacto imediato e massivo em sistemas físicos complexos do mundo real.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        
          <p style={{ fontWeight: 700, color, margin: 0, marginBottom: '0.75rem' }}>Conceitos-chave a reter:</p>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              RL é um paradigma de <strong>decisão sequencial sob incerteza</strong>: um agente interage com
              um ambiente, recebendo recompensas escalares diferidas — fundamentalmente diferente do supervised
              (sinal instrutivo) e do unsupervised (sem sinal externo).
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              O ciclo agente-ambiente produz trajetórias <InlineMath math="(S_t, A_t, R_{t+1}, S_{t+1}, \ldots)" />.
              O agente observa estados, toma ações, e o ambiente responde com novo estado e recompensa.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              A <strong>Reward Hypothesis</strong> (Sutton): qualquer objetivo pode ser formulado como
              maximização do retorno cumulativo esperado <InlineMath math="G_t = \sum_{k=0}^\infty \gamma^k R_{t+k+1}" />.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              O <strong>fator de desconto</strong> <InlineMath math="\gamma \in [0,1]" /> controla o horizonte
              temporal: <InlineMath math="\gamma = 0" /> (míope) a <InlineMath math="\gamma \to 1" /> (far-sighted).
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              A <strong>política</strong> <InlineMath math="\pi(a|s)" /> define o comportamento do agente.
              As <strong>funções de valor</strong> <InlineMath math="V^\pi(s)" /> e <InlineMath math="Q^\pi(s,a)" /> quantificam o retorno esperado a partir de um estado ou par estado-ação.
            </li>
            <li style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              O dilema <strong>exploração vs exploitação</strong> é central: sem exploração suficiente,
              o agente fica preso em ótimos locais; sem exploitação, nunca aproveita o conhecimento adquirido.
              ε-greedy é a solução mais simples.
            </li>
            <li style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
              Agentes podem ser <strong>model-free</strong> (aprendem diretamente da experiência) ou
              <strong> model-based</strong> (mantêm modelo interno do ambiente para planeamento).
            </li>
          </ul>
        
      </div>
    </div>
  );
}
