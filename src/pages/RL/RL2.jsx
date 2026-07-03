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
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

/* ─── SVG: Markov vs History-Dependent ─── */
const MarkovDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-primary)' }}>
      Processo dependente da história vs Processo de Markov
    </p>
    <svg viewBox="0 0 720 180" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '0 auto' }}>
      {/* ── History-dependent side ── */}
      <text x="10" y="22" fontSize="13" fontWeight="700" fill={color}>Dependente da História</text>
      {/* nodes S1..S4 */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <circle cx={60 + i * 110} cy={90} r={28} fill="var(--bg-primary)" stroke={color} strokeWidth="1.5"/>
          <text x={60 + i * 110} y={94} textAnchor="middle" fontSize="12" fill={color} fontWeight="600">
            S<tspan fontSize="9" dy="3">{i+1}</tspan>
          </text>
        </g>
      ))}
      {/* arrows between consecutive */}
      {[0,1,2].map(i => (
        <line key={i} x1={88 + i*110} y1={90} x2={132 + i*110} y2={90} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)"/>
      ))}
      {/* long arc from S1 all the way to S4 — represents history dependency */}
      <path d="M 60 62 Q 225 20 390 62" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrd)"/>
      <text x="225" y="38" fontSize="10" fill="#f97316" textAnchor="middle">a história influencia o futuro</text>

      {/* ── Markov side ── */}
      <text x="430" y="22" fontSize="13" fontWeight="700" fill="#f97316">Processo de Markov</text>
      <circle cx="510" cy="90" r="28" fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="510" y="94" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="600">S<tspan fontSize="9" dy="3">t</tspan></text>
      <circle cx="650" cy="90" r="28" fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="650" y="94" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="600">S<tspan fontSize="9" dy="3">t+1</tspan></text>
      <line x1="538" y1="90" x2="622" y2="90" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrg)"/>
      <text x="580" y="80" textAnchor="middle" fontSize="10" fill="#f97316">P(S&#x2081;|S&#x209C;)</text>
      <text x="580" y="138" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">só o estado atual importa</text>

      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)"/>
        </marker>
        <marker id="arrd" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316"/>
        </marker>
        <marker id="arrg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316"/>
        </marker>
      </defs>
    </svg>
  </div>
);

/* ─── SVG: 3×3 Grid World ─── */
const GridWorld = () => {
  const cellSize = 70;
  const labels = [
    ['(0,0)', '(0,1)', '(0,2)'],
    ['(1,0)', 'X',     '(1,2)'],
    ['(2,0)', '(2,1)', 'G'],
  ];
  const cellColor = (r, c) => {
    if (labels[r][c] === 'G') return '#bbf7d0';
    if (labels[r][c] === 'X') return '#fecaca';
    return 'var(--bg-primary)';
  };
  const textColor = (r, c) => {
    if (labels[r][c] === 'G') return '#f97316';
    if (labels[r][c] === 'X') return '#f97316';
    return 'var(--text-secondary)';
  };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-primary)' }}>
        Exemplo Recorrente: Grid World 3×3
      </p>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <svg viewBox="0 0 210 210" style={{ width: 210, flexShrink: 0 }}>
          {labels.map((row, r) => row.map((lbl, c) => (
            <g key={`${r}-${c}`}>
              <rect x={c * cellSize} y={r * cellSize} width={cellSize} height={cellSize}
                fill={cellColor(r, c)} stroke="var(--text-secondary)" strokeWidth="1.5"/>
              <text x={c * cellSize + cellSize / 2} y={r * cellSize + cellSize / 2 + 5}
                textAnchor="middle" fontSize={lbl === 'G' || lbl === 'X' ? 20 : 10}
                fontWeight={lbl === 'G' || lbl === 'X' ? 800 : 400}
                fill={textColor(r, c)}>{lbl}</text>
            </g>
          )))}
          {/* agent marker */}
          <circle cx={35} cy={35} r={12} fill={color} opacity={0.8}/>
          <text x={35} y={39} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">A</text>
        </svg>
        <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p style={{ margin: '0 0 0.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Legenda:</p>
          <p style={{ margin: '0 0 0.3rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>G</span> — Estado objetivo (goal), recompensa +10</p>
          <p style={{ margin: '0 0 0.3rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>X</span> — Obstáculo (parede intransponível)</p>
          <p style={{ margin: '0 0 0.3rem' }}><span style={{ color: color, fontWeight: 700 }}>A</span> — Posição inicial do agente</p>
          <p style={{ margin: '0 0 0.3rem' }}>Recompensa por passo: &minus;1</p>
          <p style={{ margin: '0 0 0.3rem' }}>Ações: N, S, E, O (determinísticas)</p>
          <p style={{ margin: 0 }}>Fator de desconto: &gamma; = 0.9</p>
        </div>
      </div>
    </div>
  );
};

/* ─── SVG: Backup Diagram (Expectation) ─── */
const BackupDiagramExpectation = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-primary)' }}>
      Diagrama de Backup — Equação de Bellman de Expectação
    </p>
    <svg viewBox="0 0 420 250" style={{ width: '100%', maxWidth: 420, display: 'block', margin: '0 auto' }}>
      {/* Root state s */}
      <circle cx={210} cy={30} r={22} fill="var(--bg-primary)" stroke={color} strokeWidth="2"/>
      <text x={210} y={35} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>s</text>

      {/* Action nodes */}
      {[100, 210, 320].map((ax, i) => (
        <g key={i}>
          <line x1={210} y1={52} x2={ax} y2={108} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#bArr)"/>
          <rect x={ax - 22} y={108} width={44} height={26} rx={6} fill="var(--bg-primary)" stroke={color} strokeWidth="1.5"/>
          <text x={ax} y={125} textAnchor="middle" fontSize="12" fontWeight="600" fill={color}>
            {['a₁','a₂','a₃'][i]}
          </text>
          <text x={ax} y={96} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">
            {['π(a₁|s)','π(a₂|s)','π(a₃|s)'][i]}
          </text>
        </g>
      ))}

      {/* Next-state nodes from a2 */}
      {[150, 210, 270].map((sx, i) => (
        <g key={i}>
          <line x1={210} y1={134} x2={sx} y2={195} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#bArr)"/>
          <circle cx={sx} cy={215} r={18} fill="var(--bg-primary)" stroke="#64748b" strokeWidth="1.5"/>
          <text x={sx} y={220} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">s'</text>
          <text x={sx} y={163} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">
            {['P(s₁|s,a₂)','P(s₂|s,a₂)','P(s₃|s,a₂)'][i]}
          </text>
          {i === 0 && <text x={sx} y={243} textAnchor="middle" fontSize="9" fill={color}>r + γV(s')</text>}
        </g>
      ))}

      {/* Ellipsis for other actions */}
      <text x={370} y={125} fontSize="16" fill="var(--text-secondary)">…</text>

      <defs>
        <marker id="bArr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)"/>
        </marker>
      </defs>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem' }}>
      Nós quadrados = ações; nós circulares = estados. Ramos superiores ponderados por &pi;(a|s); ramos inferiores por P(s'|s,a).
    </p>
  </div>
);

/* ─── SVG: Backup Diagram (Optimality) ─── */
const BackupDiagramOptimality = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-primary)' }}>
      Diagrama de Backup — Equação de Bellman de Otimalidade
    </p>
    <svg viewBox="0 0 360 240" style={{ width: '100%', maxWidth: 360, display: 'block', margin: '0 auto' }}>
      {/* Root state s */}
      <circle cx={180} cy={42} r={22} fill="var(--bg-primary)" stroke={color} strokeWidth="2"/>
      <text x={180} y={47} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>s</text>
      <text x={180} y={18} textAnchor="middle" fontSize="9" fill={color}>V*(s)</text>

      {/* max arc label */}
      <text x={310} y={100} fontSize="11" fill="#f97316" fontWeight="700">max</text>

      {/* Action nodes */}
      {[100, 180, 260].map((ax, i) => (
        <g key={i}>
          <line x1={180} y1={64} x2={ax} y2={114} stroke={i===1 ? '#f97316' : 'var(--text-secondary)'} strokeWidth={i===1 ? 2 : 1.2} markerEnd={`url(#oArr${i===1?'g':''})`}/>
          <rect x={ax-20} y={114} width={40} height={24} rx={5}
            fill={i===1 ? 'rgba(249,115,22,0.10)' : 'var(--bg-primary)'}
            stroke={i===1 ? '#f97316' : color} strokeWidth="1.5"/>
          <text x={ax} y={130} textAnchor="middle" fontSize="11" fontWeight="600" fill={i===1 ? '#f97316' : color}>
            {['a₁','a*','a₃'][i]}
          </text>
        </g>
      ))}

      {/* Next states from a* */}
      {[130, 180, 230].map((sx, i) => (
        <g key={i}>
          <line x1={180} y1={138} x2={sx} y2={188} stroke="#f97316" strokeWidth="1.2" markerEnd="url(#oArrg)"/>
          <circle cx={sx} cy={206} r={17} fill="var(--bg-primary)" stroke="#64748b" strokeWidth="1.5"/>
          <text x={sx} y={211} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">s'</text>
          <text x={sx} y={230} textAnchor="middle" fontSize="9" fill={color}>V*(s')</text>
        </g>
      ))}

      <defs>
        <marker id="oArr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="var(--text-secondary)"/>
        </marker>
        <marker id="oArrg" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#f97316"/>
        </marker>
      </defs>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem' }}>
      A aresta verde representa a ação ótima a* = argmax Q*(s,a). Apenas essa ramificação é selecionada.
    </p>
  </div>
);

export default function RL2() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>MÓDULO 2</div>
      <h1 style={S.h1}>MDPs e Value-Based RL Tabular</h1>
      <p style={S.lead}>
        O Markov Decision Process (MDP) é o framework matemático formal que fundamenta praticamente todo
        o Reinforcement Learning moderno. Neste módulo derivamos a propriedade de Markov, a tupla formal
        do MDP, as funções de valor, as equações de Bellman de expectação e de otimalidade, e aplicamos
        cada conceito a um exemplo numérico concreto numa grelha 3×3.
      </p>

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 1 — Propriedade de Markov                     */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>1. A Propriedade de Markov</h2>
        <p style={S.p}>
          Um processo estocástico diz-se <strong>Markoviano</strong> quando o estado futuro depende
          unicamente do estado presente, e não da sequência de estados anteriores. Formalmente, a
          probabilidade de transição satisfaz:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathbb{P}[S_{t+1} \mid S_t] = \mathbb{P}[S_{t+1} \mid S_1, S_2, \ldots, S_t]" />
        </div>
        <p style={S.p}>
          Esta igualdade afirma que condicionar sobre o estado atual <InlineMath math="S_t" /> é tão
          informativo quanto condicionar sobre toda a história <InlineMath math="(S_1, \ldots, S_t)" />.
          O estado é, portanto, uma <em>estatística suficiente</em> da história.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.4rem' }}>Intuição:</p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Num jogo de xadrez, a posição atual das peças é suficiente para jogar de forma ótima —
            não é necessário saber a sequência de movimentos que levou até ali. O estado "encapsula"
            tudo o que é relevante para o futuro.
          </p>
        </div>
        <MarkovDiagram />
        <div style={S.note}>
          Em problemas reais, a propriedade de Markov é uma aproximação. A percepção parcial do
          ambiente (observações incompletas) cria dependência histórica — esses casos são tratados
          pelos <strong>POMDPs</strong> (ver Secção 7).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 2 — MDP Formal                                */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>2. MDP Formal — Tupla (S, A, P, R, γ)</h2>
        <p style={S.p}>
          Um <strong>Markov Decision Process</strong> é definido pela tupla{' '}
          <InlineMath math="(\mathcal{S},\, \mathcal{A},\, P,\, R,\, \gamma)" />, onde cada componente
          tem um papel preciso:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Símbolo</th>
              <th style={S.th}>Nome</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>No Grid World 3×3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math="\mathcal{S}"/></td>
              <td style={S.td}>Espaço de estados</td>
              <td style={S.td}>Conjunto de todos os estados possíveis</td>
              <td style={S.td}>9 posições (r,c), excluindo X</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\mathcal{A}"/></td>
              <td style={S.td}>Espaço de ações</td>
              <td style={S.td}>Conjunto de todas as ações disponíveis</td>
              <td style={S.td}>{'{N, S, E, O}'}</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="P(s'\mid s,a)"/></td>
              <td style={S.td}>Função de transição</td>
              <td style={S.td}>Probabilidade de chegar a s' tomando a em s</td>
              <td style={S.td}>1.0 (determinístico; 0 se parede)</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="R(s,a,s')"/></td>
              <td style={S.td}>Função de recompensa</td>
              <td style={S.td}>Recompensa escalar recebida na transição</td>
              <td style={S.td}>+10 ao atingir G, −1 por passo</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math="\gamma \in [0,1]"/></td>
              <td style={S.td}>Fator de desconto</td>
              <td style={S.td}>Peso das recompensas futuras vs imediatas</td>
              <td style={S.td}>0.9</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Retorno acumulado</h3>
        <p style={S.p}>
          O retorno descontado <InlineMath math="G_t" /> a partir do instante t é:
        </p>
        <div style={S.math}>
          <BlockMath math="G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \cdots = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}" />
        </div>
        <p style={S.p}>
          O desconto <InlineMath math="\gamma" /> serve dois propósitos: (1) garante a convergência
          de <InlineMath math="G_t" /> em horizontes infinitos quando <InlineMath math="\gamma < 1" />,
          e (2) modela a preferência por recompensas imediatas sobre futuras.
        </p>
        <GridWorld />
        <p style={S.p}>
          Este grid world 3×3 será o nosso <strong>exemplo recorrente</strong> ao longo de todo o módulo.
          O agente começa em (0,0) e deve alcançar G=(2,2). O estado X=(1,1) é uma parede impenetrável.
          Cada movimento recebe recompensa −1; atingir G recebe +10.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 3 — Funções de Valor                          */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Funções de Valor</h2>
        <p style={S.p}>
          As funções de valor quantificam a "qualidade" de um estado ou par (estado, ação) sob uma
          política <InlineMath math="\pi" />. São a linguagem em que todos os algoritmos RL clássicos
          comunicam.
        </p>

        <h3 style={S.h3}>State-Value Function — V<sup>π</sup>(s)</h3>
        <div style={S.math}>
          <BlockMath math="V^\pi(s) = \mathbb{E}_\pi\!\left[G_t \mid S_t = s\right]" />
        </div>
        <p style={S.p}>
          <InlineMath math="V^\pi(s)" /> é o retorno esperado ao começar no estado s e seguir a política
          <InlineMath math="\pi" /> indefinidamente.
        </p>

        <h3 style={S.h3}>Action-Value Function — Q<sup>π</sup>(s, a)</h3>
        <div style={S.math}>
          <BlockMath math="Q^\pi(s, a) = \mathbb{E}_\pi\!\left[G_t \mid S_t = s,\, A_t = a\right]" />
        </div>
        <p style={S.p}>
          <InlineMath math="Q^\pi(s,a)" /> é mais informativa: mede o retorno esperado de tomar a ação
          a no estado s e seguir <InlineMath math="\pi" /> a partir daí.
        </p>

        <h3 style={S.h3}>Relação entre V e Q</h3>
        <div style={S.math}>
          <BlockMath math="V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a \mid s)\, Q^\pi(s, a)" />
        </div>
        <p style={S.p}>
          A função de estado é a média ponderada das Q-values pelas probabilidades da política. Para
          uma política determinística <InlineMath math="\pi(s)=a" />, temos simplesmente
          <InlineMath math="V^\pi(s) = Q^\pi(s, \pi(s))" />.
        </p>

        <h3 style={S.h3}>Valores V<sup>π</sup> no Grid World (política aleatória uniforme)</h3>
        <p style={S.p}>
          Para uma política aleatória que escolhe cada ação com probabilidade 0.25, os valores
          aproximados de <InlineMath math="V^\pi" /> no grid world são:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estado (r,c)</th>
              <th style={S.th}>V<sup>π</sup>(s) (aprox.)</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['(0,0)', '−18.2', 'Longe do goal, muitos passos esperados'],
              ['(0,1)', '−14.5', 'Alguma proximidade mas sem caminho direto'],
              ['(0,2)', '−11.3', 'Vizinho do corredor para G'],
              ['(1,0)', '−16.0', 'Bloqueado parcialmente por X'],
              ['(1,2)', '−8.7', 'Corredor direto para G'],
              ['(2,0)', '−13.1', 'Rota longa via (2,1)'],
              ['(2,1)', '−5.4', 'Um passo de G'],
              ['(2,2) = G', '0.0', 'Estado terminal (objetivo)'],
            ].map(([s,v,i]) => (
              <tr key={s}>
                <td style={S.td}><InlineMath math={s.replace(/[()]/g, m => m === '(' ? '(' : ')')}/>{s}</td>
                <td style={{ ...S.td, color: Number(v) >= 0 ? '#f97316' : '#f97316', fontWeight: 600 }}>{v}</td>
                <td style={S.td}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Os valores negativos refletem o custo acumulado de passos (−1 por passo). Estados mais próximos
          do goal têm V mais alto. Estes números serão afinados pela Programação Dinâmica (Módulo 03).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 4 — Equações de Bellman (Expectation)         */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Equações de Bellman de Expectação</h2>
        <p style={S.p}>
          A ideia central é expandir <InlineMath math="G_t" /> e usar a estrutura recursiva do retorno
          para expressar <InlineMath math="V^\pi(s)" /> em função de <InlineMath math="V^\pi(s')" />.
        </p>

        <h3 style={S.h3}>Derivação passo a passo</h3>
        <p style={S.p}><strong>Passo 1</strong> — Expansão de G<sub>t</sub>:</p>
        <div style={S.math}>
          <BlockMath math="G_t = R_{t+1} + \gamma G_{t+1}" />
        </div>
        <p style={S.p}><strong>Passo 2</strong> — Tomar a esperança condicionada em S<sub>t</sub>=s:</p>
        <div style={S.math}>
          <BlockMath math="V^\pi(s) = \mathbb{E}_\pi[R_{t+1} + \gamma G_{t+1} \mid S_t = s]" />
        </div>
        <p style={S.p}><strong>Passo 3</strong> — Expandir sobre ações e estados seguintes:</p>
        <div style={S.math}>
          <BlockMath math="V^\pi(s) = \sum_{a} \pi(a|s) \sum_{s'} P(s'|s,a)\Bigl[R(s,a,s') + \gamma\, V^\pi(s')\Bigr]" />
        </div>
        <p style={S.p}>
          Este é o resultado chave: o valor de s é a recompensa imediata esperada mais o valor descontado
          do estado seguinte, em média sobre ações e transições.
        </p>

        <h3 style={S.h3}>Equação de Bellman para Q<sup>π</sup></h3>
        <div style={S.math}>
          <BlockMath math="Q^\pi(s,a) = \sum_{s'} P(s'|s,a)\!\left[R(s,a,s') + \gamma \sum_{a'} \pi(a'|s')\, Q^\pi(s',a')\right]" />
        </div>
        <p style={S.p}>
          A Q-function é recursiva na mesma maneira: toma o estado seguinte s', soma sobre todas as
          ações futuras a' ponderadas pela política, e continua recursivamente.
        </p>

        <BackupDiagramExpectation />

        
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.4rem' }}>Propriedade importante:</p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            As equações de Bellman formam um sistema linear de <InlineMath math="|\mathcal{S}|"/> equações
            (uma por estado). Para MDPs pequenos, podem ser resolvidas diretamente por álgebra linear:{' '}
            <InlineMath math="\mathbf{v} = \mathbf{r}_\pi + \gamma P_\pi \mathbf{v}"/> implica{' '}
            <InlineMath math="\mathbf{v} = (I - \gamma P_\pi)^{-1}\mathbf{r}_\pi"/>. Para MDPs grandes
            usamos métodos iterativos (Policy Evaluation, Módulo 03).
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 5 — Política Ótima e Bellman Optimality       */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Política Ótima e Equações de Bellman de Otimalidade</h2>
        <p style={S.p}>
          A política ótima <InlineMath math="\pi^*"/> maximiza <InlineMath math="V^\pi(s)"/>
          simultaneamente para todos os estados. A existência de pelo menos uma política ótima
          determinística é garantida pelo Teorema da Política Ótima para MDPs finitos.
        </p>

        <h3 style={S.h3}>Funções de valor ótimas</h3>
        <div style={S.math}>
          <BlockMath math="V^*(s) = \max_\pi V^\pi(s) = \max_a Q^*(s,a)" />
        </div>
        <div style={S.math}>
          <BlockMath math="Q^*(s,a) = \max_\pi Q^\pi(s,a)" />
        </div>

        <h3 style={S.h3}>Equação de Bellman de Otimalidade para V*</h3>
        <div style={S.math}>
          <BlockMath math="V^*(s) = \max_{a \in \mathcal{A}} \sum_{s'} P(s'|s,a)\Bigl[R(s,a,s') + \gamma\, V^*(s')\Bigr]" />
        </div>

        <h3 style={S.h3}>Equação de Bellman de Otimalidade para Q*</h3>
        <div style={S.math}>
          <BlockMath math="Q^*(s,a) = \sum_{s'} P(s'|s,a)\!\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]" />
        </div>

        <p style={S.p}>
          A diferença crucial face às equações de expectação é o operador <strong>max</strong>: em vez
          de calcular a média sobre ações ponderada por <InlineMath math="\pi"/>, selecionamos a ação
          de maior valor. Isto torna as equações de otimalidade <em>não-lineares</em>.
        </p>

        <h3 style={S.h3}>Política ótima greedy</h3>
        <div style={S.math}>
          <BlockMath math="\pi^*(s) = \arg\max_{a \in \mathcal{A}} Q^*(s,a)" />
        </div>
        <p style={S.p}>
          Uma vez conhecida <InlineMath math="Q^*"/>, a política ótima é imediatamente obtida sem
          necessidade de conhecer o modelo <InlineMath math="P(s'|s,a)"/>. Esta é a base do Q-Learning
          (Módulo 04).
        </p>

        <BackupDiagramOptimality />

        <div style={S.note}>
          As equações de Bellman de otimalidade não têm solução analítica em geral — a não-linearidade
          do max impede a inversão matricial direta. Os algoritmos de Programação Dinâmica (Value Iteration,
          Policy Iteration) resolvem estas equações iterativamente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 6 — Exemplo Numérico                          */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Exemplo Numérico Completo — Grid World 3×3</h2>
        <p style={S.p}>
          Vamos calcular manualmente os valores de <InlineMath math="V^\pi"/> para a política simples
          <strong> "sempre ir para Este (E); se parede, ir para Sul (S)"</strong>, com
          <InlineMath math="\gamma = 0.9"/> e recompensas R=−1 por passo, R=+10 ao atingir G=(2,2).
        </p>

        <h3 style={S.h3}>Aplicação da equação de Bellman em (2,1)</h3>
        <p style={S.p}>
          O estado (2,1) está à esquerda do goal. Com a política, a ação é E (ir para Este = (2,2)=G).
          A transição é determinística: <InlineMath math="P((2,2)|(2,1),E) = 1"/>.
        </p>
        <div style={S.math}>
          <BlockMath math="V^\pi(2,1) = R(2,1, E, G) + \gamma \cdot V^\pi(G) = 10 + 0.9 \times 0 = 10" />
        </div>
        <p style={S.p}>
          (O estado G é terminal com <InlineMath math="V^\pi(G)=0"/>.)
        </p>

        <h3 style={S.h3}>Aplicação em (2,0)</h3>
        <p style={S.p}>
          De (2,0), a ação E leva a (2,1). Sabemos já <InlineMath math="V^\pi(2,1) = 10"/>.
        </p>
        <div style={S.math}>
          <BlockMath math="V^\pi(2,0) = R(2,0,E,(2,1)) + \gamma \cdot V^\pi(2,1) = -1 + 0.9 \times 10 = 8" />
        </div>

        <h3 style={S.h3}>Aplicação em (1,2)</h3>
        <p style={S.p}>
          De (1,2), a ação E encontra uma parede (fora do grid), então a política diz S (Sul) → (2,2)=G.
        </p>
        <div style={S.math}>
          <BlockMath math="V^\pi(1,2) = R(1,2, S, G) + \gamma \cdot V^\pi(G) = 10 + 0.9 \times 0 = 10" />
        </div>

        <h3 style={S.h3}>Aplicação em (0,2)</h3>
        <p style={S.p}>
          De (0,2), a ação E encontra parede, logo S → (1,2).
        </p>
        <div style={S.math}>
          <BlockMath math="V^\pi(0,2) = -1 + 0.9 \times 10 = 8" />
        </div>

        <h3 style={S.h3}>Tabela de valores calculados</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estado</th>
              <th style={S.th}>Ação tomada</th>
              <th style={S.th}>Próximo estado</th>
              <th style={S.th}><InlineMath math="V^\pi(s)"/></th>
            </tr>
          </thead>
          <tbody>
            {[
              ['(2,2) = G', '—', 'Terminal', '0'],
              ['(2,1)', 'E', '(2,2)', '10'],
              ['(2,0)', 'E', '(2,1)', '8'],
              ['(1,2)', 'S', '(2,2)', '10'],
              ['(0,2)', 'S', '(1,2)', '8'],
              ['(0,1)', 'E', '(0,2)', '6.2'],
              ['(0,0)', 'E', '(0,1)', '4.58'],
              ['(1,0)', 'S', '(2,0)', '6.2'],
            ].map(([s,a,ns,v]) => (
              <tr key={s}>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{ns}</td>
                <td style={{ ...S.td, color: Number(v) >= 0 ? '#f97316' : '#f97316', fontWeight: 600 }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Os valores positivos refletem que esta política particular consegue sempre atingir o goal.
          Contudo, não é necessariamente a política ótima — a Programação Dinâmica (Módulo 03) encontrará
          <InlineMath math="V^*"/> que domina estes valores em todos os estados.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 7 — Por Que MDPs? Limitações e Extensões      */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Por Que MDPs? Limitações e Extensões</h2>
        <p style={S.p}>
          Os MDPs são um framework poderoso, mas assentam em pressupostos que importa reconhecer:
        </p>

        <h3 style={S.h3}>Pressupostos do MDP clássico</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Pressuposto</th>
              <th style={S.th}>O que significa</th>
              <th style={S.th}>Quando falha</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Observabilidade total', 'O agente vê o estado verdadeiro s', 'Robótica com sensores ruidosos, jogos com informação parcial'],
              ['Espaços finitos', '|S| e |A| são finitos e manejáveis', 'Controlo contínuo, espaços de alta dimensão'],
              ['Estacionaridade', 'P e R não mudam ao longo do tempo', 'Ambientes não-estacionários, adversários adaptativos'],
              ['Propriedade de Markov', 'S_t encapsula toda a história relevante', 'Observações parciais, latências de sensores'],
            ].map(([p,m,f]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{m}</td>
                <td style={S.td}>{f}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Extensões além do âmbito deste curso</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          {[
            { title: 'POMDPs', desc: 'Partially Observable MDPs. O agente recebe observações o_t ≠ s_t e mantém uma belief state (distribuição sobre estados). Requer algoritmos de filtragem bayesiana.' },
            { title: 'MDPs Contínuos', desc: 'Espaços de estado/ação contínuos. Requerem aproximação de funções (redes neuronais, kernels) em vez de tabelas. Base do Deep RL (Módulos 05–07).' },
            { title: 'MDPs Multi-Agente', desc: 'Múltiplos agentes que interagem. Os outros agentes fazem parte do ambiente não-estacionário. Leva à Teoria dos Jogos e ao MARL.' },
            { title: 'MDPs Hierárquicos', desc: 'Ações de alto nível que invocam sub-políticas (options). Permite transferência de conhecimento e planeamento em múltiplas escalas temporais.' },
          ].map(({title, desc}) => (
            <div key={title} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '1rem', border: '1px solid var(--card-border)' }}>
              <p style={{ fontWeight: 700, color, margin: '0 0 0.4rem' }}>{title}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={S.note}>
          Para os objetivos deste curso, trabalhamos exclusivamente com MDPs totalmente observáveis,
          com espaços discretos e finitos, e estacionários. Esta configuração cobre a maioria dos
          problemas académicos clássicos e fornece a base conceptual para o Deep RL.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════ */}
      {/* SECTION 8 — Síntese                                   */}
      {/* ══════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>
        
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '0.7rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Propriedade de Markov:</strong>{' '}
              <InlineMath math="\mathbb{P}[S_{t+1}|S_t] = \mathbb{P}[S_{t+1}|S_1,\ldots,S_t]"/> — o estado
              atual é uma estatística suficiente da história.
            </li>
            <li style={{ marginBottom: '0.7rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Tupla MDP</strong>{' '}
              <InlineMath math="(\mathcal{S}, \mathcal{A}, P, R, \gamma)"/> — cada componente tem
              papel preciso: estados, ações, transições, recompensas, desconto.
            </li>
            <li style={{ marginBottom: '0.7rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Funções de valor:</strong>{' '}
              <InlineMath math="V^\pi(s) = \mathbb{E}_\pi[G_t|S_t=s]"/> e{' '}
              <InlineMath math="Q^\pi(s,a) = \mathbb{E}_\pi[G_t|S_t=s,A_t=a]"/>; relacionadas por{' '}
              <InlineMath math="V^\pi(s) = \sum_a \pi(a|s) Q^\pi(s,a)"/>.
            </li>
            <li style={{ marginBottom: '0.7rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Equações de Bellman de Expectação:</strong> expressam V e Q recursivamente —
              valor presente = recompensa imediata esperada + valor futuro descontado.
            </li>
            <li style={{ marginBottom: '0.7rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>V* e Q* (otimalidade):</strong>{' '}
              <InlineMath math="V^*(s) = \max_a Q^*(s,a)"/>; as equações de Bellman de otimalidade
              são não-lineares devido ao operador max.
            </li>
            <li style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
              <strong>Política ótima greedy:</strong>{' '}
              <InlineMath math="\pi^*(s) = \arg\max_a Q^*(s,a)"/> — conhecendo Q* a política ótima
              é imediata, sem necessidade do modelo de transição.
            </li>
          </ul>
        
      </div>
    </div>
  );
}
