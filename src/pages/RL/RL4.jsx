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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
  math: { margin: '1rem 0', textAlign: 'center' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
};

/* ── SVG backup diagrams ── */
function MCBackupDiagram() {
  const nodes = [0, 1, 2, 3, 4];
  return (
    <svg width={120} height={200} viewBox="0 0 120 200" style={{ display: 'block', margin: '0 auto' }}>
      <text x={60} y={16} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>s (início)</text>
      {nodes.slice(0, -1).map((i) => (
        <line key={i} x1={60} y1={38 + i * 32} x2={60} y2={52 + i * 32} stroke="#94a3b8" strokeWidth={1.5} markerEnd="url(#arr)" />
      ))}
      {nodes.map((i) => (
        <circle key={i} cx={60} cy={30 + i * 32} r={10} fill="var(--bg-secondary)" stroke={color} strokeWidth={1.8} />
      ))}
      <rect x={40} y={178} width={40} height={14} rx={4} fill={color} opacity={0.85} />
      <text x={60} y={188} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={700}>G_t</text>
      <defs>
        <marker id="arr" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
      <text x={60} y={198} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">retorno completo</text>
    </svg>
  );
}

function TDBackupDiagram() {
  return (
    <svg width={120} height={129} viewBox="0 0 120 120" style={{ display: 'block', margin: '0 auto' }}>
      <text x={60} y={16} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>S_t</text>
      <line x1={60} y1={40} x2={60} y2={78} stroke="#94a3b8" strokeWidth={1.5} />
      <rect x={42} y={52} width={35} height={14} rx={4} fill="var(--bg-secondary)" stroke="#94a3b8" strokeWidth={1} />
      <text x={60} y={62} textAnchor="middle" fontSize={9} fill={color}>R_{'{t+1}'}</text>
      <circle cx={60} cy={30} r={10} fill="var(--bg-secondary)" stroke={color} strokeWidth={2} />
      <circle cx={60} cy={95} r={18} fill="var(--bg-secondary)" stroke="#64748b" strokeWidth={1.8} strokeDasharray="3 2" />
      <text x={60} y={98} textAnchor="middle" fontSize={9} fill="#64748b">S_{'{t+1}'}</text>
      <text x={60} y={122} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">1 passo</text>
    </svg>
  );
}

function DPBackupDiagram() {
  const branches = [-30, 0, 30];
  return (
    <svg width={140} height={140} viewBox="0 0 140 140" style={{ display: 'block', margin: '0 auto' }}>
      <text x={70} y={16} textAnchor="middle" fontSize={11} fill={color} fontWeight={700}>s</text>
      <circle cx={70} cy={28} r={9} fill="none" stroke={color} strokeWidth={2} />
      {branches.map((dx) => (
        <g key={dx}>
          <line x1={70} y1={37} x2={70 + dx} y2={65} stroke="#94a3b8" strokeWidth={1.3} />
          <rect x={70 + dx - 12} y={55} width={24} height={13} rx={3} fill="#f1f5f9" stroke="#94a3b8" strokeWidth={1} />
          <text x={70 + dx} y={64} textAnchor="middle" fontSize={8} fill={color}>a</text>
          {[-10, 10].map((ddx) => (
            <g key={ddx}>
              <line x1={70 + dx} y1={68} x2={70 + dx + ddx} y2={96} stroke="#94a3b8" strokeWidth={1} />
              <circle cx={70 + dx + ddx} cy={102} r={7} fill="none" stroke="#64748b" strokeWidth={1.5} />
            </g>
          ))}
        </g>
      ))}
      <text x={70} y={130} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">full backup (modelo)</text>
    </svg>
  );
}

function CliffWalkingSVG() {
  const cols = 12;
  const rows = 4;
  const cw = 46;
  const ch = 38;
  const cliffCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <svg width={cols * cw + 2} height={rows * ch + 40} viewBox={`0 0 ${cols * cw + 2} ${rows * ch + 40}`}
      style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const isCliff = r === rows - 1 && cliffCells.includes(c);
          const isStart = r === rows - 1 && c === 0;
          const isGoal = r === rows - 1 && c === cols - 1;
          const fill = isCliff ? '#4a9eed' : isStart ? '#4a9eed' : isGoal ? color : 'var(--bg-primary)';
          return (
            <g key={`${r}-${c}`}>
              <rect x={c * cw + 1} y={r * ch + 1} width={cw - 2} height={ch - 2} rx={3}
                fill={fill} stroke="var(--text-secondary)" strokeWidth={1} opacity={isCliff ? 0.7 : 1} />
              {isCliff && <text x={c * cw + cw / 2} y={r * ch + ch / 2 + 4} textAnchor="middle" fontSize={10} fill="#fff">▼</text>}
              {isStart && <text x={c * cw + cw / 2} y={r * ch + ch / 2 + 4} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={700}>S</text>}
              {isGoal && <text x={c * cw + cw / 2} y={r * ch + ch / 2 + 4} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={700}>G</text>}
            </g>
          );
        })
      )}
      {/* SARSA path — safe route along top */}
      <polyline
        points={`${cw / 2},${(rows - 1) * ch + ch / 2} ${cw / 2},${ch / 2} ${(cols - 1) * cw + cw / 2},${ch / 2} ${(cols - 1) * cw + cw / 2},${(rows - 1) * ch + ch / 2}`}
        fill="none" stroke="#4a9eed" strokeWidth={2.5} strokeDasharray="5 3" />
      {/* Q-Learning path — along bottom edge */}
      <polyline
        points={`${cw / 2},${(rows - 1) * ch + ch / 2} ${cw / 2},${(rows - 2) * ch + ch / 2} ${(cols - 1) * cw + cw / 2},${(rows - 2) * ch + ch / 2} ${(cols - 1) * cw + cw / 2},${(rows - 1) * ch + ch / 2}`}
        fill="none" stroke="#0284c7" strokeWidth={2.5} strokeDasharray="5 3" />
      {/* Legend */}
      <line x1={10} y1={rows * ch + 20} x2={40} y2={rows * ch + 20} stroke="#4a9eed" strokeWidth={2.5} strokeDasharray="5 3" />
      <text x={46} y={rows * ch + 24} fontSize={11} fill="var(--text-secondary)">SARSA (caminho seguro)</text>
      <line x1={220} y1={rows * ch + 20} x2={250} y2={rows * ch + 20} stroke="#0284c7" strokeWidth={2.5} strokeDasharray="5 3" />
      <text x={256} y={rows * ch + 24} fontSize={11} fill="var(--text-secondary)">Q-Learning (caminho ótimo)</text>
    </svg>
  );
}

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
      { x: 68,  trueQ: 0.4, label: 'A₁', barH: 40,  barY: 140, col: '#7dd3fc' },
      { x: 188, trueQ: 1.2, label: 'A₂', barH: 120, barY: 60,  col: '#4a9eed' },
      { x: 308, trueQ: 0.7, label: 'A₃', barH: 70,  barY: 110, col: '#7dd3fc' },
      { x: 428, trueQ: 0.2, label: 'A₄', barH: 20,  barY: 160, col: '#fde8d8' },
      { x: 548, trueQ: 0.9, label: 'A₅', barH: 90,  barY: 90,  col: '#4a9eed' },
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
    <text x="68" y="235" textAnchor="middle" fontSize="11" fill="#0284c7" fontWeight="700">
      Greedy fica aqui ↑
    </text>
    <text x="188" y="240" textAnchor="middle" fontSize="11" fill="#4a9eed" fontWeight="700">
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
    { eps: '0 (greedy)',  col: '#4a9eed', vals: Array.from({length: steps}, (_, i) => 0.35 + 0.3 * (1 - Math.exp(-i * 0.15))) },
    { eps: '0.1',         col: '#38bdf8', vals: Array.from({length: steps}, (_, i) => 0.15 + 0.7 * (1 - Math.exp(-i * 0.22))) },
    { eps: '0.3',         col: '#bae6fd', vals: Array.from({length: steps}, (_, i) => 0.10 + 0.55 * (1 - Math.exp(-i * 0.3))) },
    { eps: '1.0 (random)',col: '#e0f2fe', vals: Array.from({length: steps}, () => 0.2) },
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

export default function RL4() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>MÓDULO 4</div>
      <h1 style={S.h1}>Métodos Model-Free</h1>

      {/* ── 1. Model-Free vs Model-Based ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Model-Free vs Model-Based</h2>
        <p style={S.p}>
          Em <strong>métodos Model-Based</strong> (como Dynamic Programming), o agente conhece ou aprende
          explicitamente a dinâmica do ambiente: a função de transição <InlineMath math="P(s'|s,a)" /> e
          a função de recompensa <InlineMath math="R(s,a)" />. Com esse modelo pode planear: computar
          valores ótimos sem nunca interagir com o ambiente real.
        </p>
        <p style={S.p}>
          Nos <strong>métodos Model-Free</strong>, nenhum desses elementos é conhecido. O agente apenas
          observa sequências de experiência <InlineMath math="(S_t, A_t, R_{t+1}, S_{t+1}, \ldots)" /> e
          usa essas amostras para atualizar diretamente as estimativas de <InlineMath math="V^\pi" /> ou
          <InlineMath math="Q^\pi" />.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 1rem' }}>Tabela comparativa — DP vs MC vs TD</p>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Método</th>
                <th style={S.th}>Requer modelo?</th>
                <th style={S.th}>Tipo de backup</th>
                <th style={S.th}>Atualiza quando?</th>
                <th style={S.th}>Bootstrapping?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['DP (Policy/Value Iteration)', 'Sim', 'Full (largura+profundidade)', 'Varrimento da tabela', 'Sim'],
                ['Monte Carlo', 'Não', 'Sample — trajetória completa', 'Fim do episódio', 'Não'],
                ['TD(0)', 'Não', 'Sample — 1 passo', 'A cada step', 'Sim'],
              ].map(([m, mod, bk, wh, bs]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 600 }}>{m}</td>
                  <td style={S.td}>{mod}</td>
                  <td style={S.td}>{bk}</td>
                  <td style={S.td}>{wh}</td>
                  <td style={S.td}>{bs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          A ausência de modelo é crucial na prática: problemas reais como xadrez, robótica ou mercados
          financeiros têm dinâmicas desconhecidas ou demasiado complexas para modelar explicitamente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 2. Monte Carlo — Prediction ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Monte Carlo Methods — Predição</h2>
        <p style={S.p}>
          Os métodos Monte Carlo estimam <InlineMath math="V^\pi(s)" /> como a média empírica dos retornos
          observados sempre que o estado <InlineMath math="s" /> é visitado. O retorno de um episódio a
          partir do instante <InlineMath math="t" /> é:
        </p>
        <div style={S.math}>
          <BlockMath math="G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \cdots + \gamma^{T-t-1} R_T" />
        </div>
        <p style={S.p}>
          Após acumular vários episódios, <InlineMath math="V^\pi(s)" /> converge para a média dos
          <InlineMath math="G_t" /> observados. Na forma incremental (equivalente, mais eficiente em memória):
        </p>
        <div style={S.math}>
          <BlockMath math="V(S_t) \leftarrow V(S_t) + \alpha\bigl[G_t - V(S_t)\bigr]" />
        </div>

        <h3 style={S.h3}>First-Visit vs Every-Visit MC</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
          {[
            {
              title: 'First-Visit MC',
              desc: 'Atualiza V(s) apenas com o G_t da primeira visita a s no episódio. Estimativa unbiased de Vπ(s). Mais comum na teoria.',
            },
            {
              title: 'Every-Visit MC',
              desc: 'Atualiza V(s) com o G_t de todas as visitas a s no mesmo episódio. Mais dados por episódio mas visitas correlacionadas.',
            },
          ].map(({ title, desc }) => (
            <div key={title} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: `1px solid rgba(74,158,237,0.10)` }}>
              <p style={{ fontWeight: 700, color, margin: '0 0 0.4rem' }}>{title}</p>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>Diagrama de Backup — Monte Carlo</h3>
        <div style={S.diagram}>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            O backup MC percorre a trajetória completa até ao fim do episódio — <InlineMath math="G_t" /> é o retorno real.
          </p>
          <MCBackupDiagram />
        </div>

        <table style={S.table}>
          <thead><tr><th style={S.th}>Vantagem</th><th style={S.th}>Desvantagem</th></tr></thead>
          <tbody>
            {[
              ['Não requer modelo do ambiente', 'Requer episódios completos'],
              ['Unbiased — usa retornos reais', 'Alta variância (sequências longas)'],
              ['Simples de implementar', 'Não funciona em tarefas contínuas'],
              ['Não faz bootstrapping', 'Aprendizagem lenta — só no final'],
            ].map(([v, d]) => (
              <tr key={v}><td style={S.td}>{v}</td><td style={S.td}>{d}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 4. TD(0) ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. TD(0) — Temporal Difference Learning</h2>
        <p style={S.p}>
          TD Learning combina as ideias do MC (model-free, amostras de experiência) com as da DP
          (bootstrapping). Em vez de esperar pelo fim do episódio, atualiza a estimativa de valor
          após cada step usando o TD target:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{TD target} = R_{t+1} + \gamma V(S_{t+1})" />
        </div>
        <p style={S.p}>
          O erro de TD, <InlineMath math="\delta_t" />, mede a discrepância entre a estimativa atual
          e o TD target:
        </p>
        <div style={S.math}>
          <BlockMath math="\delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t)" />
        </div>
        <p style={S.p}>A regra de atualização TD(0) é então:</p>
        <div style={S.math}>
          <BlockMath math="V(S_t) \leftarrow V(S_t) + \alpha \,\delta_t" />
        </div>

        <h3 style={S.h3}>Bootstrapping</h3>
        <p style={S.p}>
          <strong>Bootstrapping</strong> significa atualizar uma estimativa com base noutra estimativa —
          <InlineMath math="V(S_{t+1})" /> é em si mesma uma aproximação, não o retorno real. Isto
          introduz bias mas reduz drasticamente a variância e permite aprendizagem online.
        </p>

        <h3 style={S.h3}>Diagrama de Backup — TD(0)</h3>
        <div style={S.diagram}>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            O backup TD percorre apenas 1 passo — usa <InlineMath math="V(S_{t+1})" /> como estimativa do resto.
          </p>
          <TDBackupDiagram />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
          {[
            {
              title: 'Vantagem sobre MC',
              items: [
                'Online — atualiza a cada step',
                'Funciona em tarefas contínuas',
                'Baixa variância (1 passo de recompensa)',
                'Mais eficiente em tempo real',
              ],
            },
            {
              title: 'Desvantagem vs MC',
              items: [
                'Biased — depende de V(S_{t+1}) aproximado',
                'Converge mais lentamente em alguns problemas',
                'Sensível à inicialização de V',
                'Propagação de erros via bootstrapping',
              ],
            },
          ].map(({ title, items }) => (
            <div key={title} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: `1px solid rgba(74,158,237,0.10)` }}>
              <p style={{ fontWeight: 700, color, margin: '0 0 0.5rem', fontSize: '0.9rem' }}>{title}</p>
              <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                {items.map((it) => (
                  <li key={it} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.3rem', lineHeight: 1.5 }}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={S.note}>
          O TD error <InlineMath math="\delta_t" /> tem uma correspondência biológica com os sinais de
          neurónios dopaminérgicos no cérebro humano — uma descoberta que liga o RL computacional à
          neurociência (Schultz et al., 1997).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 5. MC vs TD vs DP Triple Comparison ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. MC vs TD vs DP — Comparação Tripla</h2>

        <h3 style={S.h3}>Diagramas de Backup</h3>
        <div style={S.diagram}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', textAlign: 'center' }}>
            <div>
              <p style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.9rem' }}>DP</p>
              <DPBackupDiagram />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Full backup (largura + profundidade)</p>
            </div>
            <div>
              <p style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Monte Carlo</p>
              <MCBackupDiagram />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Sample backup — trajetória completa</p>
            </div>
            <div>
              <p style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.9rem' }}>TD(0)</p>
              <TDBackupDiagram />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Sample backup — 1 passo</p>
            </div>
          </div>
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>DP</th>
              <th style={S.th}>Monte Carlo</th>
              <th style={S.th}>TD(0)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Requer modelo?', 'Sim', 'Não', 'Não'],
              ['Tipo de backup', 'Full (todos os s\')', 'Sample — trajetória', 'Sample — 1 passo'],
              ['Bootstrapping?', 'Sim', 'Não', 'Sim'],
              ['Bias', 'Zero (com modelo exato)', 'Zero (unbiased)', 'Sim (bias inicial)'],
              ['Variância', 'Zero (expectativa exata)', 'Alta', 'Baixa'],
              ['Atualiza online?', 'Não (varrimento)', 'Não (fim do episódio)', 'Sim (cada step)'],
              ['Tarefas contínuas?', 'Sim (com γ&lt;1)', 'Não', 'Sim'],
              ['Convergência', 'V* (com modelo)', 'V^π (tabular)', 'V^π (tabular, α→0)'],
            ].map(([prop, dp, mc, td]) => (
              <tr key={prop}>
                <td style={{ ...S.td, fontWeight: 600 }}>{prop}</td>
                <td style={S.td}>{dp}</td>
                <td style={S.td}>{mc}</td>
                <td style={S.td}>{td}</td>
              </tr>
            ))}
          </tbody>
        </table>

        
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.5rem' }}>Intuição do espaço DP-MC-TD:</p>
          <p style={{ ...S.p, marginBottom: '0.4rem' }}>
            TD e MC são os extremos de um espectro de <strong>n-step returns</strong>. TD(0) usa 1 passo; MC
            usa todos os passos até T. O método <InlineMath math="\text{TD}(\lambda)" /> interpola entre os dois
            via um parâmetro <InlineMath math="\lambda \in [0,1]" />.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            DP é orthogonal a este eixo: usa o modelo (expectativa sobre transições) em vez de amostras.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* ── 6. SARSA ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. O Problema de Exploração em RL</h2>
        <p style={S.p}>
          Em Model-Free Control, o agente não conhece a função de recompensa nem a dinâmica de transição do ambiente.
          Tem de descobrir a política ótima interagindo diretamente com o ambiente. Isto cria uma tensão fundamental:
          o agente precisa de <strong>explorar</strong> ações desconhecidas para descobrir recompensas melhores,
          mas também precisa de <strong>explotar</strong> o conhecimento já adquirido para maximizar recompensa imediata.
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

      {/* ── ε-Greedy ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. ε-Greedy: A Solução Fundamental</h2>
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

      {/* ── GLIE ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. GLIE — Greedy in the Limit with Infinite Exploration</h2>
        <p style={S.p}>
          Para garantir convergência teórica para a política ótima π*, não basta ter qualquer schedule de ε decrescente.
          A condição formal GLIE impõe dois requisitos simultâneos que devem ser satisfeitos:
        </p>

        <p style={S.p}>
          <strong>Condição 1 — Exploração suficiente:</strong> Todos os pares estado-ação devem ser visitados infinitas
          vezes ao longo do treino:
        </p>
        <div style={S.math}>
          <BlockMath math={`\\lim_{k \\to \\infty} N_k(s, a) = \\infty \\quad \\forall s \\in \\mathcal{S},\\, a \\in \\mathcal{A}`} />
        </div>
        <p style={S.p}>
          <strong>Condição 2 — Convergência para greedy:</strong> A política deve convergir para a política greedy
          no limite:
        </p>
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

        <div style={S.note}>
          Na prática, <InlineMath math={"\\varepsilon_k = 1/k"} /> pode ser demasiado lento. Muitos práticos usam
          <InlineMath math={"\\varepsilon_k = \\varepsilon_0 \\cdot \\rho^k"} /> com ρ ∈ (0,1), que não é formalmente
          GLIE mas funciona bem empiricamente para problemas finitos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SARSA ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. SARSA — On-Policy TD Control</h2>
        <p style={S.p}>
          SARSA estende o TD(0) de predição para <em>controlo</em>: aprende a função de valor de ação
          <InlineMath math="Q^\pi(s,a)" /> em vez de <InlineMath math="V^\pi(s)" />. É on-policy — a
          mesma política que recolhe dados é a política que está a ser melhorada.
        </p>
        <p style={S.p}>
          O nome SARSA deriva da quíntupla de experiência usada na atualização:
          <InlineMath math="(S_t,\, A_t,\, R_{t+1},\, S_{t+1},\, A_{t+1})" />.
        </p>
        <div style={S.math}>
          <BlockMath math="Q(S_t,A_t) \leftarrow Q(S_t,A_t) + \alpha\Bigl[R_{t+1} + \gamma Q(S_{t+1},A_{t+1}) - Q(S_t,A_t)\Bigr]" />
        </div>

        <h3 style={S.h3}>Algoritmo SARSA por Episódio</h3>
        <div style={S.diagram}>
          {[
            { n: 1, text: 'Inicializar Q(s,a) = 0 para todos s, a. Observar estado inicial S.' },
            { n: 2, text: 'Escolher A com política ε-greedy sobre Q(S,·).' },
            { n: 3, text: 'Tomar ação A; observar recompensa R e próximo estado S\'.' },
            { n: 4, text: 'Escolher A\' com política ε-greedy sobre Q(S\',·).' },
            { n: 5, text: 'Q(S,A) ← Q(S,A) + α[R + γQ(S\',A\') − Q(S,A)]' },
            { n: 6, text: 'S ← S\'; A ← A\'; repetir passos 3–6 até S ser terminal.' },
          ].map(({ n, text }) => (
            <div key={n} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 26, height: 26, borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.82rem', flexShrink: 0 }}>{n}</div>
              <p style={{ margin: '0.1rem 0 0', color: 'var(--text-primary)', lineHeight: 1.6, fontSize: '0.92rem', fontFamily: n === 5 ? 'monospace' : 'inherit' }}>{text}</p>
            </div>
          ))}
        </div>

        <h3 style={S.h3}>Convergência de SARSA</h3>
        <p style={S.p}>
          SARSA converge para <InlineMath math="Q^\pi" /> — a Q-function da política corrente — se a
          política satisfizer a condição GLIE: <em>Greedy in the Limit with Infinite Exploration</em>
          (<InlineMath math="\varepsilon_t \to 0" /> com <InlineMath math="\sum_t \varepsilon_t = \infty" />).
          Com GLIE, SARSA converge para <InlineMath math="Q^*" />.
        </p>
        <div style={S.note}>
          On-policy significa que SARSA aprende a Q-function da política que está a executar — incluindo
          as suas explorações. Em ambientes com penalizações severas (ex: precipícios), isto torna SARSA
          mais conservador e seguro durante o treino do que Q-Learning.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 7. Q-Learning ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Q-Learning — Off-Policy TD Control</h2>
        <p style={S.p}>
          Q-Learning aprende a Q-function ótima <InlineMath math="Q^*" /> diretamente, independentemente
          da política de comportamento. É off-policy: a <em>target policy</em> (política greedy em relação
          a Q) difere da <em>behavior policy</em> (que pode ser ε-greedy, aleatória, humana, etc.).
        </p>
        <div style={S.math}>
          <BlockMath math="Q(S_t,A_t) \leftarrow Q(S_t,A_t) + \alpha\Bigl[R_{t+1} + \gamma \max_{a'} Q(S_{t+1},a') - Q(S_t,A_t)\Bigr]" />
        </div>
        <p style={S.p}>
          A diferença crucial face a SARSA é o uso de <InlineMath math="\max_{a'} Q(S_{t+1},a')" /> no
          target em vez de <InlineMath math="Q(S_{t+1}, A_{t+1})" />. Isto torna o algoritmo
          off-policy: o target assume sempre a ação ótima futura, independentemente do que a behavior
          policy faria.
        </p>

        <h3 style={S.h3}>Condições de Convergência</h3>
        <p style={S.p}>
          Q-Learning converge para <InlineMath math="Q^*" /> em MDPs finitos sob as condições
          de Robbins-Monro para as learning rates:
        </p>
        <div style={S.math}>
          <BlockMath math="\sum_{t=0}^{\infty} \alpha_t = \infty \qquad \text{e} \qquad \sum_{t=0}^{\infty} \alpha_t^2 < \infty" />
        </div>
        <p style={S.p}>
          Além disso, todos os pares <InlineMath math="(s,a)" /> devem ser visitados infinitamente —
          garantido por uma behavior policy suficientemente exploratória (ex: ε-greedy com ε &gt; 0).
        </p>
        <div style={S.note}>
          Q-Learning é a fundação do <strong>Deep Q-Network (DQN)</strong> — substituindo a tabela Q
          por uma rede neuronal profunda. O DQN alcançou desempenho supra-humano em jogos Atari (Mnih et al., 2015),
          marcando o início do Deep RL moderno.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 9. SARSA vs Q-Learning ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. SARSA vs Q-Learning — Comparação e Cliff Walking</h2>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Propriedade</th>
              <th style={S.th}>SARSA</th>
              <th style={S.th}>Q-Learning</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tipo de política', 'On-policy', 'Off-policy'],
              ['Target Q-value', 'Q(S\', A\') — ação seguida pela política', "max_a' Q(S',a') — ação ótima"],
              ['Converge para', 'Q^π (Q da política atual)', 'Q* (Q ótima)'],
              ['Segurança no treino', 'Mais seguro — considera as explorações', 'Pode tomar riscos — target assume ação ótima'],
              ['Nome do target', 'SARSA (quíntupla)', 'Q-Learning (max)'],
              ['Convergência', 'GLIE → Q*', 'Condições Robbins-Monro → Q*'],
              ['Uso em Deep RL', 'Actor-Critic on-policy (PPO, A3C)', 'DQN, Double DQN, Rainbow'],
            ].map(([prop, sarsa, ql]) => (
              <tr key={prop}>
                <td style={{ ...S.td, fontWeight: 600 }}>{prop}</td>
                <td style={S.td}>{sarsa}</td>
                <td style={S.td}>{ql}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Cliff Walking — Exemplo Clássico</h3>
        <p style={S.p}>
          No problema Cliff Walking (Sutton &amp; Barto, Cap. 6), o agente parte de S e deve atingir G
          numa grelha com um precipício na linha inferior. Cair no precipício dá recompensa −100 e
          reinicia o episódio. Todos os outros steps têm recompensa −1.
        </p>
        <div style={S.diagram}>
          <CliffWalkingSVG />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.2rem' }}>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: '1px solid rgba(74,158,237,0.10)' }}>
              <p style={{ fontWeight: 700, color: '#4a9eed', margin: '0 0 0.4rem' }}>SARSA — Caminho Seguro</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Aprende um caminho mais longo pelo topo da grelha. Como é on-policy, contabiliza o risco
                de cair due à exploração ε-greedy — prefere evitar o precipício mesmo a custo de mais steps.
              </p>
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: '1px solid rgba(2,132,199,0.4)' }}>
              <p style={{ fontWeight: 700, color: '#4a9eed', margin: '0 0 0.4rem' }}>Q-Learning — Caminho Ótimo</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Aprende o caminho mais curto (junto ao precipício), que é o ótimo teórico. Mas durante o
                treino, a exploração ε-greedy leva a quedas frequentes — desempenho pior no treino
                mas melhor assimptoticamente.
              </p>
            </div>
          </div>
        </div>
        <div style={S.note}>
          Este exemplo ilustra o tradeoff fundamental on-policy vs off-policy: SARSA é mais seguro durante
          o treino (útil em ambientes reais onde erros têm consequências), enquanto Q-Learning converge para
          a política ótima global mas pode ter desempenho pior durante a aprendizagem.
        </div>
      </div>
</div>
  );
}
