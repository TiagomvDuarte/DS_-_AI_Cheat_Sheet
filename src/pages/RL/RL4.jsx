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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1.5rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
  math: { margin: '1rem 0', textAlign: 'center' },
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
          const fill = isCliff ? '#f97316' : isStart ? '#f97316' : isGoal ? color : 'var(--bg-primary)';
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
        fill="none" stroke="#f97316" strokeWidth={2.5} strokeDasharray="5 3" />
      {/* Q-Learning path — along bottom edge */}
      <polyline
        points={`${cw / 2},${(rows - 1) * ch + ch / 2} ${cw / 2},${(rows - 2) * ch + ch / 2} ${(cols - 1) * cw + cw / 2},${(rows - 2) * ch + ch / 2} ${(cols - 1) * cw + cw / 2},${(rows - 1) * ch + ch / 2}`}
        fill="none" stroke="#f59e0b" strokeWidth={2.5} strokeDasharray="5 3" />
      {/* Legend */}
      <line x1={10} y1={rows * ch + 20} x2={40} y2={rows * ch + 20} stroke="#f97316" strokeWidth={2.5} strokeDasharray="5 3" />
      <text x={46} y={rows * ch + 24} fontSize={11} fill="var(--text-secondary)">SARSA (caminho seguro)</text>
      <line x1={220} y1={rows * ch + 20} x2={250} y2={rows * ch + 20} stroke="#f59e0b" strokeWidth={2.5} strokeDasharray="5 3" />
      <text x={256} y={rows * ch + 24} fontSize={11} fill="var(--text-secondary)">Q-Learning (caminho ótimo)</text>
    </svg>
  );
}

export default function RL4() {
  return (
    <div style={S.page}>
      <Link to="/rl" style={S.back}><ArrowLeft size={16} /> Voltar a RL</Link>

      <div style={S.tag}>MÓDULO 4</div>
      <h1 style={S.h1}>Métodos Model-Free</h1>
      <p style={S.lead}>
        Os métodos Model-Free aprendem diretamente da experiência sem necessitar de um modelo explícito
        do ambiente — sem acesso a <InlineMath math="P(s'|s,a)" /> nem a <InlineMath math="R(s,a)" />.
        O agente interage com o ambiente e atualiza estimativas de valor a partir de retornos e recompensas
        observados. Os dois grandes paradigmas são Monte Carlo e Temporal Difference Learning, a partir dos
        quais derivam os algoritmos de controlo SARSA e Q-Learning.
      </p>

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
            <div key={title} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: `1px solid rgba(249,115,22,0.10)` }}>
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

      {/* ── 3. MC Worked Example ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Monte Carlo — Exemplo Numérico</h2>
        <p style={S.p}>
          Considere um MDP com 4 estados <InlineMath math="\{A, B, C, D\}" />, onde D é terminal. Seguindo
          a política <InlineMath math="\pi" /> obtemos o episódio:
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, margin: '0 0 0.75rem' }}>
            Episódio: <span style={{ fontFamily: 'monospace', color }}>A → B → C → D</span>
            &nbsp; com recompensas <span style={{ fontFamily: 'monospace', color }}>+1, +2, +5</span> e <InlineMath math="\gamma=1" />
          </p>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Passo t</th>
                <th style={S.th}>Estado <InlineMath math="S_t" /></th>
                <th style={S.th}>Recompensa <InlineMath math="R_{t+1}" /></th>
                <th style={S.th}>Retorno <InlineMath math="G_t" /></th>
                <th style={S.th}>Update <InlineMath math="(\alpha=0.1)" /></th>
              </tr>
            </thead>
            <tbody>
              {[
                { t: 0, s: 'A', r: '+1', g: '1+2+5 = 8', upd: 'V(A) ← 0 + 0.1×(8−0) = 0.8' },
                { t: 1, s: 'B', r: '+2', g: '2+5 = 7', upd: 'V(B) ← 0 + 0.1×(7−0) = 0.7' },
                { t: 2, s: 'C', r: '+5', g: '5', upd: 'V(C) ← 0 + 0.1×(5−0) = 0.5' },
              ].map(({ t, s, r, g, upd }) => (
                <tr key={t}>
                  <td style={S.td}>{t}</td>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{s}</td>
                  <td style={S.td}>{r}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{g}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{upd}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ ...S.p, marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Ao longo de muitos episódios, <InlineMath math="V(A)" /> converge para <InlineMath math="V^\pi(A) = \mathbb{E}[G_t | S_t = A]" />.
          </p>
        </div>
        <div style={S.note}>
          Com <InlineMath math="\gamma = 1" /> (sem desconto), o retorno é simplesmente a soma das recompensas futuras.
          Em tarefas com episódios longos, um <InlineMath math="\gamma < 1" /> é essencial para garantir convergência.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 4. TD(0) ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. TD(0) — Temporal Difference Learning</h2>
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
            <div key={title} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: `1px solid rgba(249,115,22,0.10)` }}>
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
        <h2 style={S.h2}>5. MC vs TD vs DP — Comparação Tripla</h2>

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
        <h2 style={S.h2}>6. SARSA — On-Policy TD Control</h2>
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
        <h2 style={S.h2}>7. Q-Learning — Off-Policy TD Control</h2>
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

      {/* ── 8. Q-Learning Numeric Example ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Exemplo Numérico — Q-Learning num MDP de 3 Estados</h2>
        <p style={S.p}>
          Considere um MDP com estados <InlineMath math="\{s_0, s_1, s_2\}" />, onde <InlineMath math="s_2" /> é
          terminal, e 2 ações <InlineMath math="\{a_0, a_1\}" />. Parâmetros: <InlineMath math="\alpha=0.5,\; \gamma=0.9" />.
          Recompensas: tomar <InlineMath math="a_1" /> em <InlineMath math="s_0" /> leva a <InlineMath math="s_1" />
          com R=0; tomar <InlineMath math="a_1" /> em <InlineMath math="s_1" /> leva a <InlineMath math="s_2" />
          com R=10.
        </p>

        <h3 style={S.h3}>Q-table inicial (todos zeros)</h3>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Estado</th>
                <th style={S.th}><InlineMath math="Q(s,a_0)" /></th>
                <th style={S.th}><InlineMath math="Q(s,a_1)" /></th>
              </tr>
            </thead>
            <tbody>
              {['s_0', 's_1', 's_2'].map((s) => (
                <tr key={s}><td style={{ ...S.td, fontFamily: 'monospace' }}>{s}</td><td style={S.td}>0</td><td style={S.td}>0</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Episódio: <span style={{ fontFamily: 'monospace', color }}>s₀ →(a₁)→ s₁ →(a₁)→ s₂</span></h3>
        <div style={S.diagram}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Step</th>
                <th style={S.th}>Transição</th>
                <th style={S.th}>R</th>
                <th style={S.th}>Q target</th>
                <th style={S.th}>Update</th>
                <th style={S.th}>Novo Q</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  step: 1,
                  trans: 's₀,a₁ → s₁',
                  r: 0,
                  target: '0 + 0.9×max(0,0) = 0',
                  update: 'Q(s₀,a₁) ← 0 + 0.5×(0−0)',
                  newq: '0',
                },
                {
                  step: 2,
                  trans: 's₁,a₁ → s₂',
                  r: 10,
                  target: '10 + 0.9×0 = 10',
                  update: 'Q(s₁,a₁) ← 0 + 0.5×(10−0)',
                  newq: '5',
                },
              ].map(({ step, trans, r, target, update, newq }) => (
                <tr key={step}>
                  <td style={S.td}>{step}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{trans}</td>
                  <td style={S.td}>{r}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{target}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{update}</td>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{newq}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ ...S.h3, marginTop: '1.2rem' }}>Após 2º episódio (Q(s₁,a₁) = 5 agora)</h3>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Step</th>
                <th style={S.th}>Transição</th>
                <th style={S.th}>R</th>
                <th style={S.th}>Q target</th>
                <th style={S.th}>Novo Q</th>
              </tr>
            </thead>
            <tbody>
              {[
                { step: 1, trans: 's₀,a₁ → s₁', r: 0, target: '0 + 0.9×5 = 4.5', newq: 'Q(s₀,a₁) = 0 + 0.5×(4.5−0) = 2.25' },
                { step: 2, trans: 's₁,a₁ → s₂', r: 10, target: '10', newq: 'Q(s₁,a₁) = 5 + 0.5×(10−5) = 7.5' },
              ].map(({ step, trans, r, target, newq }) => (
                <tr key={step}>
                  <td style={S.td}>{step}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{trans}</td>
                  <td style={S.td}>{r}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{target}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem', color }}>{newq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...S.p, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
          Com mais episódios, <InlineMath math="Q(s_0, a_1) \to 9" /> e <InlineMath math="Q(s_1, a_1) \to 10" />,
          que são os valores ótimos: <InlineMath math="Q^*(s_0,a_1) = \gamma \cdot R = 0.9 \times 10 = 9" />.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── 9. SARSA vs Q-Learning ── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. SARSA vs Q-Learning — Comparação e Cliff Walking</h2>

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
            <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: '1px solid rgba(249,115,22,0.10)' }}>
              <p style={{ fontWeight: 700, color: '#f97316', margin: '0 0 0.4rem' }}>SARSA — Caminho Seguro</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Aprende um caminho mais longo pelo topo da grelha. Como é on-policy, contabiliza o risco
                de cair due à exploração ε-greedy — prefere evitar o precipício mesmo a custo de mais steps.
              </p>
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '1rem', border: '1px solid rgba(245,158,11,0.4)' }}>
              <p style={{ fontWeight: 700, color: '#f97316', margin: '0 0 0.4rem' }}>Q-Learning — Caminho Ótimo</p>
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


      <hr style={S.divider} />

      {/* ── 10. Síntese ── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <div style={S.highlight}>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            {[
              { bold: 'Model-Free vs Model-Based', text: ': métodos model-free não conhecem P(s\'|s,a) nem R(s,a) — aprendem da experiência direta. Essenciais em problemas reais onde a dinâmica é desconhecida ou intratável.' },
              { bold: 'Monte Carlo', text: ': usa retornos completos G_t de episódios — unbiased mas alta variância. Requer episódios completos; não funciona em tarefas contínuas.' },
              { bold: 'TD(0)', text: ': bootstrapping online a cada step via TD error δ_t = R_{t+1} + γV(S_{t+1}) − V(S_t). Biased mas baixa variância, funciona em tarefas contínuas.' },
              { bold: 'Comparação DP/MC/TD', text: ': DP usa modelo + full backup; MC usa samples + trajetória completa; TD usa samples + 1 passo. TD(λ) interpola MC↔TD.' },
              { bold: 'SARSA (on-policy)', text: ': Q(S,A) ← Q(S,A) + α[R + γQ(S\',A\') − Q(S,A)]. Aprende Q^π — mais seguro durante treino, converge para Q* com GLIE.' },
              { bold: 'Q-Learning (off-policy)', text: ': Q(S,A) ← Q(S,A) + α[R + γ max_a\' Q(S\',a\') − Q(S,A)]. Aprende Q* diretamente — base do DQN e do Deep RL moderno.' },
              { bold: 'Cliff Walking', text: ': ilustra on/off-policy — SARSA toma o caminho seguro, Q-Learning aprende o ótimo mas cai durante o treino.' },
            ].map(({ bold, text }) => (
              <li key={bold} style={{ marginBottom: '0.6rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                <strong>{bold}</strong>{text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
