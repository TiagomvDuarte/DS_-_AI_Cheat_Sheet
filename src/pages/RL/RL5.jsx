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
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ── SVG: 5-Armed Bandit ── */
const BanditDiagram = () => (
  <svg viewBox="0 0 680 260" style={{ width: '100%', maxWidth: 680, display: 'block', margin: '0 auto' }}>
    {/* background */}
    <rect x="0" y="0" width="680" height="260" rx="10" fill="none" />

    {/* Title */}
    <text x="340" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>
      Problema do Bandido de 5 Braços
    </text>

    {/* Arms */}
    {[
      { x: 68,  trueQ: 0.4, label: 'A₁', barH: 40,  barY: 140, col: '#fbbf24' },
      { x: 188, trueQ: 1.2, label: 'A₂', barH: 120, barY: 60,  col: '#f97316' },
      { x: 308, trueQ: 0.7, label: 'A₃', barH: 70,  barY: 110, col: '#fbbf24' },
      { x: 428, trueQ: 0.2, label: 'A₄', barH: 20,  barY: 160, col: '#fde8d8' },
      { x: 548, trueQ: 0.9, label: 'A₅', barH: 90,  barY: 90,  col: '#f97316' },
    ].map(({ x, trueQ, label, barH, barY, col }) => (
      <g key={label}>
        {/* True Q bar */}
        <rect x={x} y={barY} width={60} height={barH} rx="4" fill={col} opacity="0.85" />
        {/* True Q label on bar */}
        <text x={x + 30} y={barY - 6} textAnchor="middle" fontSize="11" fill={col} fontWeight="600">
          q*={trueQ}
        </text>
        {/* Arm label */}
        <text x={x + 30} y={200} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">
          {label}
        </text>
      </g>
    ))}

    {/* Baseline */}
    <line x1="40" y1="180" x2="640" y2="180" stroke="var(--text-secondary)" strokeWidth="1.5" />

    {/* Greedy arrow — stuck on A1 because first tried */}
    <text x="68" y="235" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">
      Greedy fica aqui ↑
    </text>
    <text x="188" y="240" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">
      Ótimo real ↑
    </text>

    {/* Legend */}
    <rect x="460" y="210" width="12" height="12" rx="2" fill={color} />
    <text x="476" y="221" fontSize="11" fill="var(--text-secondary)">Valor verdadeiro q*(a) — desconhecido do agente</text>
  </svg>
);

/* ── SVG: Cumulative Reward vs ε ── */
const EpsilonRewardPlot = () => {
  const W = 680, H = 220;
  const pad = { t: 30, b: 50, l: 55, r: 160 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;

  // Fake cumulative reward curves for ε = 0 (greedy), 0.1, 0.3, 1.0
  const steps = 20;
  const curves = [
    { eps: '0 (greedy)',  col: '#f97316', vals: Array.from({length: steps}, (_, i) => 0.35 + 0.3 * (1 - Math.exp(-i * 0.15))) },
    { eps: '0.1',         col: '#fb923c', vals: Array.from({length: steps}, (_, i) => 0.15 + 0.7 * (1 - Math.exp(-i * 0.22))) },
    { eps: '0.3',         col: '#fdba74', vals: Array.from({length: steps}, (_, i) => 0.10 + 0.55 * (1 - Math.exp(-i * 0.3))) },
    { eps: '1.0 (random)',col: '#fed7aa', vals: Array.from({length: steps}, () => 0.2) },
  ];

  const toX = (i) => pad.l + (i / (steps - 1)) * plotW;
  const toY = (v) => pad.t + plotH - v * plotH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      {/* Axes */}
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + plotH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={pad.l} y1={pad.t + plotH} x2={pad.l + plotW} y2={pad.t + plotH} stroke="var(--text-secondary)" strokeWidth="1.5" />

      {/* Y labels */}
      {[0, 0.25, 0.5, 0.75, 1].map(v => (
        <g key={v}>
          <line x1={pad.l - 4} y1={toY(v)} x2={pad.l} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth="1" />
          <text x={pad.l - 8} y={toY(v) + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{v.toFixed(2)}</text>
        </g>
      ))}

      {/* X label */}
      <text x={pad.l + plotW / 2} y={H - 6} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
        Passos de treino (×1000)
      </text>
      {/* Y label */}
      <text x={12} y={pad.t + plotH / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)"
        transform={`rotate(-90, 12, ${pad.t + plotH / 2})`}>
        Recompensa média
      </text>

      {/* Curves */}
      {curves.map(({ vals, col }) => {
        const pts = vals.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');
        return <polyline key={col} points={pts} fill="none" stroke={col} strokeWidth="2.2" strokeLinejoin="round" />;
      })}

      {/* Legend — outside plot area, right side */}
      {curves.map(({ eps, col }, idx) => (
        <g key={eps}>
          <line x1={pad.l + plotW + 12} y1={pad.t + 20 + idx * 22} x2={pad.l + plotW + 34} y2={pad.t + 20 + idx * 22} stroke={col} strokeWidth="2.5" />
          <text x={pad.l + plotW + 38} y={pad.t + 24 + idx * 22} fontSize="10.5" fill="var(--text-secondary)">
            ε = {eps}
          </text>
        </g>
      ))}
    </svg>
  );
};

/* ── SVG: ε decay curve GLIE ── */
const GLIEDecayCurve = () => {
  const W = 500, H = 180;
  const pad = { t: 25, b: 40, l: 50, r: 20 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;
  const steps = 30;
  const toX = (i) => pad.l + (i / (steps - 1)) * plotW;
  const toY = (v) => pad.t + plotH * (1 - v);

  const harmonic = Array.from({ length: steps }, (_, i) => 1 / (i + 1));
  const pts = harmonic.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}>
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + plotH} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1={pad.l} y1={pad.t + plotH} x2={pad.l + plotW} y2={pad.t + plotH} stroke="var(--text-secondary)" strokeWidth="1.5" />

      {[0, 0.5, 1].map(v => (
        <g key={v}>
          <line x1={pad.l - 4} y1={toY(v)} x2={pad.l} y2={toY(v)} stroke="var(--text-secondary)" strokeWidth="1" />
          <text x={pad.l - 8} y={toY(v) + 4} textAnchor="end" fontSize="10" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}

      <text x={pad.l + plotW / 2} y={H - 5} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
        Episódio k
      </text>
      <text x={12} y={pad.t + plotH / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)"
        transform={`rotate(-90, 12, ${pad.t + plotH / 2})`}>
        ε_k
      </text>

      <polyline points={pts} fill="none" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />

      {/* Annotation */}
      <text x={toX(5)} y={toY(harmonic[5]) - 8} textAnchor="middle" fontSize="10" fill={color}>
        ε_k = 1/k
      </text>
      <text x={toX(25)} y={toY(harmonic[25]) + 14} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
        → 0 quando k → ∞
      </text>
    </svg>
  );
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
      <p style={S.lead}>
        Encontrar a política ótima sem um modelo do ambiente — a generalização prática de Q-Learning para controlo real.
        Model-free control combina exploração inteligente com aprendizagem incremental para convergir para π*.
        Este módulo aprofunda os mecanismos de exploração, as garantias teóricas de convergência, o problema de
        overestimation, e os métodos multi-step que ligam TD e Monte Carlo.
      </p>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O Problema de Exploração em RL</h2>
        <p style={S.p}>
          Em Model-Free Control, o agente não conhece a função de recompensa nem a dinâmica de transição do ambiente.
          Tem de descobrir a política ótima interagindo diretamente com o ambiente. Isto cria uma tensão fundamental:
          o agente precisa de <strong>explorar</strong> ações desconhecidas para descobrir recompensas melhores,
          mas também precisa de <strong>explorar</strong> o conhecimento já adquirido para maximizar recompensa imediata.
        </p>

        <h3 style={S.h3}>Porque é que políticas greedy puras falham</h3>
        <p style={S.p}>
          Uma política puramente greedy seleciona sempre a ação com maior valor estimado atual:
          <InlineMath math={"\\pi(s) = \\arg\\max_a Q(s,a)"} />. O problema é que os valores Q são inicializados de forma
          arbitrária ou pessimista, e o agente pode "bloquear" numa ação sub-ótima antes de ter explorado alternativas
          melhores. Considere o exemplo clássico do problema do bandido de 5 braços:
        </p>

        <div style={S.diagram}>
          <BanditDiagram />
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
            Se o agente experimenta A₁ primeiro e obtém recompensa razoável, a política greedy fica "presa" nessa ação,
            nunca descobrindo que A₂ é o ótimo real.
          </p>
        </div>

        <p style={S.p}>
          Matematicamente, este fenómeno é chamado de <strong>sub-ótimo local permanente</strong>: o agente converge
          para uma política que não é ótima porque nunca recolheu evidência suficiente sobre as outras ações.
          A exploração é o mecanismo que garante que todos os pares (s, a) são amostrados suficientemente.
        </p>

        <div style={S.highlight}>
          <strong>Dilema Exploração-Explotação:</strong> Sem exploração suficiente, o agente não descobre o ótimo global.
          Com exploração excessiva, desperdiça recompensas a experimentar ações sabidamente sub-ótimas.
          O equilíbrio dinâmico entre os dois é o núcleo do design de algoritmos de controlo model-free.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. ε-Greedy: A Solução Fundamental</h2>
        <p style={S.p}>
          A política ε-greedy é o mecanismo mais simples e amplamente utilizado para equilibrar exploração e explotação.
          O princípio é direto: com probabilidade ε, o agente toma uma ação aleatória (exploração uniforme do espaço
          de ações); com probabilidade <InlineMath math={"1-\\varepsilon"} />, toma a ação greedy (explotação do
          conhecimento atual).
        </p>

        <div style={S.math}>
          <BlockMath math={`\\pi(a \\mid s) = \\begin{cases} \\dfrac{\\varepsilon}{|\\mathcal{A}|} + (1 - \\varepsilon) & \\text{se } a = \\arg\\max_{a'} Q(s, a') \\\\ \\dfrac{\\varepsilon}{|\\mathcal{A}|} & \\text{caso contrário} \\end{cases}`} />
        </div>

        <p style={S.p}>
          Note que todas as ações recebem pelo menos probabilidade <InlineMath math={"\\varepsilon / |\\mathcal{A}|"} />,
          garantindo que nenhuma ação é completamente excluída. A ação greedy recebe probabilidade adicional
          <InlineMath math={"1 - \\varepsilon"} />.
        </p>

        <h3 style={S.h3}>Melhoria da Política com ε-Greedy</h3>
        <p style={S.p}>
          Pode-se provar que a política ε-greedy em relação a <InlineMath math={"Q_\\pi"} /> é sempre pelo menos tão boa
          quanto a política ε-greedy anterior (melhoria de política monotónica). Para qualquer estado <InlineMath math={"s"} />:
        </p>

        <div style={S.math}>
          <BlockMath math={`Q_\\pi(s, \\pi'(s)) \\geq V_\\pi(s)`} />
        </div>

        <p style={S.p}>
          O tradeoff chave é entre o valor de ε e a recompensa acumulada. Um ε elevado garante mais exploração
          mas reduz a recompensa média por passo (porque o agente escolhe ações sub-ótimas com mais frequência).
          Um ε baixo explota mais eficientemente mas converge para sub-ótimos locais se não houver exploração suficiente.
        </p>

        <div style={S.diagram}>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Recompensa acumulada ao longo do treino para diferentes valores de ε (problema do bandido de 10 braços)
          </p>
          <EpsilonRewardPlot />
          <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
            ε = 0.1 obtém o melhor desempenho a longo prazo — exploração suficiente sem desperdiçar recompensas.
            ε = 0 (greedy) estabiliza rapidamente mas num sub-ótimo.
          </p>
        </div>

        <div style={S.note}>
          Na prática, ε é frequentemente decrescente ao longo do treino: começa alto (exploração intensa) e vai
          reduzindo à medida que o agente ganha confiança nos seus valores Q. Esta abordagem combina o melhor
          dos dois mundos, mas requer um schedule de decaimento cuidadosamente ajustado.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. GLIE — Greedy in the Limit with Infinite Exploration</h2>
        <p style={S.p}>
          Para garantir convergência teórica para a política ótima π*, não basta ter qualquer schedule de ε decrescente.
          A condição formal GLIE impõe dois requisitos simultâneos que devem ser satisfeitos:
        </p>

        
          <strong>Condição 1 — Exploração suficiente:</strong> Todos os pares estado-ação devem ser visitados infinitas
          vezes ao longo do treino:
          <div style={S.math}>
            <BlockMath math={`\\lim_{k \\to \\infty} N_k(s, a) = \\infty \\quad \\forall s \\in \\mathcal{S},\\, a \\in \\mathcal{A}`} />
          </div>
          <strong>Condição 2 — Convergência para greedy:</strong> A política deve convergir para a política greedy
          no limite:
          <div style={S.math}>
            <BlockMath math={`\\lim_{k \\to \\infty} \\pi_k(a \\mid s) = \\mathbf{1}\\left[a = \\arg\\max_{a'} Q_k(s, a')\\right]`} />
          </div>
        

        <h3 style={S.h3}>Schedule Harmónico: ε_k = 1/k</h3>
        <p style={S.p}>
          A escolha mais comum de schedule GLIE é <InlineMath math={"\\varepsilon_k = 1/k"} />, onde k é o número
          do episódio. Este schedule satisfaz ambas as condições GLIE porque:
        </p>

        <ul style={S.ul}>
          <li style={S.li}>
            <InlineMath math={"\\sum_{k=1}^\\infty \\varepsilon_k = \\sum_{k=1}^\\infty \\frac{1}{k} = \\infty"} /> —
            a soma diverge, garantindo exploração suficiente (Condição 1)
          </li>
          <li style={S.li}>
            <InlineMath math={"\\varepsilon_k = 1/k \\to 0"} /> quando <InlineMath math={"k \\to \\infty"} /> —
            a política converge para greedy (Condição 2)
          </li>
          <li style={S.li}>
            A taxa de decaimento é lenta o suficiente para garantir exploração, mas suficientemente rápida
            para convergência assintótica
          </li>
        </ul>

        <div style={S.diagram}>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Curva de decaimento GLIE: ε_k = 1/k
          </p>
          <GLIEDecayCurve />
        </div>

        <h3 style={S.h3}>Convergência de SARSA com GLIE</h3>
        <p style={S.p}>
          SARSA é o algoritmo on-policy que atualiza <InlineMath math={"Q(s,a)"} /> com base na transição real
          <InlineMath math={"(s, a, r, s', a')"} />. A regra de atualização é:
        </p>

        <div style={S.math}>
          <BlockMath math={`Q(s,a) \\leftarrow Q(s,a) + \\alpha\\bigl[r + \\gamma Q(s', a') - Q(s,a)\\bigr]`} />
        </div>

        <p style={S.p}>
          <strong>Teorema:</strong> SARSA com exploração GLIE converge para a função de valor-ação ótima
          <InlineMath math={"Q^*"} /> e consequentemente para a política ótima π*, desde que os learning rates
          satisfaçam as condições de Robbins-Monro:
          <InlineMath math={"\\sum_t \\alpha_t = \\infty"} /> e <InlineMath math={"\\sum_t \\alpha_t^2 < \\infty"} />.
        </p>

        <p style={S.p}>
          A intuição da convergência é que: (1) com GLIE, o agente visita todos os pares (s,a) suficientemente
          para estimar Q* com precisão arbitrária; (2) com ε → 0, a política converge para a política greedy em
          relação a Q*, que por definição é π*.
        </p>

        <div style={S.note}>
          Na prática, <InlineMath math={"\\varepsilon_k = 1/k"} /> pode ser demasiado lento. Muitos práticos usam
          <InlineMath math={"\\varepsilon_k = \\varepsilon_0 \\cdot \\rho^k"} /> com ρ ∈ (0,1), que não é formalmente
          GLIE mas funciona bem empiricamente para problemas finitos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. On-Policy vs Off-Policy Learning</h2>
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
        <h2 style={S.h2}>5. Double Q-Learning — Overestimation Bias</h2>

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
                <td style={{ ...S.td, fontWeight: 700, background: 'rgba(249,115,22,0.10)' }}>max</td>
                <td style={{ ...S.td, fontWeight: 700 }}>0.0</td>
                <td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>+0.41 ← BIAS</td>
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
        <h2 style={S.h2}>6. n-Step TD Methods</h2>
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
        <h2 style={S.h2}>7. TD(λ) e Eligibility Traces</h2>
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

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Tabela Comparativa — Métodos de Controlo</h2>
        <p style={S.p}>
          Resumo comparativo dos principais algoritmos de controlo model-free estudados neste módulo:
        </p>

        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Algoritmo</th>
                <th style={S.th}>On/Off Policy</th>
                <th style={S.th}>Convergência Garantida</th>
                <th style={S.th}>Overestimation</th>
                <th style={S.th}>Updates Online</th>
                <th style={S.th}>Efic. Amostral</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>ε-greedy / GLIE</strong></td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Sim (com GLIE)</td>
                <td style={S.td}>Não aplicável</td>
                <td style={S.td}>Sim</td>
                <td style={S.td}>Baixa</td>
              </tr>
              <tr>
                <td style={S.td}><strong>SARSA</strong></td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Sim (com GLIE)</td>
                <td style={S.td}>Mínimo</td>
                <td style={S.td}>Sim</td>
                <td style={S.td}>Média</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Q-Learning</strong></td>
                <td style={S.td}>Off-policy</td>
                <td style={S.td}>Sim (tabular)</td>
                <td style={S.td}>Sistemático</td>
                <td style={S.td}>Sim</td>
                <td style={S.td}>Alta</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Double Q-Learning</strong></td>
                <td style={S.td}>Off-policy</td>
                <td style={S.td}>Sim</td>
                <td style={S.td}>Eliminado</td>
                <td style={S.td}>Sim</td>
                <td style={S.td}>Alta</td>
              </tr>
              <tr>
                <td style={S.td}><strong>SARSA(λ)</strong></td>
                <td style={S.td}>On-policy</td>
                <td style={S.td}>Sim (com GLIE)</td>
                <td style={S.td}>Mínimo</td>
                <td style={S.td}>Sim</td>
                <td style={S.td}>Muito alta</td>
              </tr>
              <tr>
                <td style={S.td}><strong>n-step TD</strong></td>
                <td style={S.td}>On/Off (IS)</td>
                <td style={S.td}>Sim</td>
                <td style={S.td}>Reduzido</td>
                <td style={S.td}>Com latência n</td>
                <td style={S.td}>Alta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          Nenhum algoritmo domina em todas as dimensões. A escolha depende do problema: Q-Learning é a
          escolha padrão para eficiência amostral; SARSA é preferido quando a segurança durante o treino
          importa; SARSA(λ) é excelente para recompensas esparsas; Double Q-Learning é quase sempre
          preferível a Q-Learning standard.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 9: Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>

        <div style={S.highlight}>
          <ul style={S.ul}>
            <li style={S.li}>
              Políticas greedy puras falham em RL porque ficam presas em sub-ótimos locais antes de explorar
              todo o espaço de ações — a exploração é necessária para descobrir π*
            </li>
            <li style={S.li}>
              ε-greedy equilibra exploração e explotação; GLIE (ε_k = 1/k) garante que ε → 0 e que todos
              os pares (s,a) são visitados infinitas vezes — condições suficientes para convergência para π*
            </li>
            <li style={S.li}>
              On-policy (SARSA) é mais estável e seguro; off-policy (Q-Learning) é mais eficiente e pode
              reutilizar dados históricos via experience replay
            </li>
            <li style={S.li}>
              Importance sampling é o mecanismo estatístico geral para corrigir o desvio entre behaviour
              policy e target policy em off-policy learning, mas sofre de alta variância com horizontes longos
            </li>
            <li style={S.li}>
              Q-Learning sofre de overestimation sistemático porque o operador max usa a mesma estimativa
              para selecionar e avaliar ações. Double Q-Learning elimina este bias com dois conjuntos
              independentes de valores Q
            </li>
            <li style={S.li}>
              n-step returns interpolam entre TD(0) (baixa variância, alto bias) e MC (alto bias zero, alta variância);
              valores intermédios n ∈ [3,10] frequentemente superam os extremos
            </li>
            <li style={S.li}>
              TD(λ) e eligibility traces unificam todos os n-step returns numa combinação ponderada eficiente,
              resolvendo o credit assignment temporal e acelerando a aprendizagem com recompensas esparsas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
