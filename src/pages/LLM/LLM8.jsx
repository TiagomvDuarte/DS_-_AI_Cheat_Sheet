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
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

export default function LLM8() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}>
        <ArrowLeft size={16} /> Voltar aos módulos
      </Link>

      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Pós-treino, Dados Sintéticos &amp; Inferência em Escala</h1>

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Dados Sintéticos — Porquê e Como</h2>

        <p style={S.p}>
          Os dados reais da web têm bias, toxicidade e qualidade inconsistente — especialmente em domínios
          especializados como matemática, código ou ciência. Os dados sintéticos gerados por LLMs oferecem
          uma alternativa escalável e controlável.
        </p>

        <h3 style={S.h3}>Self-Instruct e Alpaca</h3>
        <p style={S.p}>
          O paradigma <strong>Self-Instruct</strong> usa o próprio LLM para gerar pares (instrução, resposta)
          a partir de um conjunto pequeno de exemplos seed. O modelo da Stanford Alpaca gerou 52 000 instruções
          a partir de apenas 175 seeds usando GPT-3.5, a um custo inferior a 500 USD.
        </p>

        <h3 style={S.h3}>Destilação de Conhecimento</h3>
        <p style={S.p}>
          Na destilação, um modelo pequeno (student) aprende a imitar a distribuição de probabilidade de um
          modelo grande (teacher), em vez de aprender apenas dos labels hard. A loss de destilação minimiza
          a divergência KL entre as distribuições:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\mathcal{L}_{KD} = KL(p_{teacher} \\| p_{student}) = \\sum_y p_T(y|x)\\log\\frac{p_T(y|x)}{p_S(y|x)}"} />
        </div>
        <p style={S.p}>
          O student aprende não só o token correcto mas toda a distribuição de probabilidade do teacher —
          incluindo informação sobre tokens prováveis mas errados (<em>dark knowledge</em>).
        </p>

        {/* SVG: Self-Instruct loop */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
            {[
              { x: 30, y: 80, w: 110, h: 44, label: 'Seed Tasks', sub: '175 exemplos', fill: 0.08 },
              { x: 200, y: 80, w: 110, h: 44, label: 'LLM Gera', sub: 'instruções + respostas', fill: 0.14 },
              { x: 370, y: 80, w: 110, h: 44, label: 'Filtragem', sub: 'qualidade & diversidade', fill: 0.20 },
              { x: 540, y: 80, w: 110, h: 44, label: 'Fine-tune', sub: 'novo modelo', fill: 0.26 },
            ].map(({ x, y, w, h, label, sub, fill }, i) => (
              <g key={i}>
                <rect x={x} y={y} width={w} height={h} rx={8}
                  fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth={1.5} />
                <text x={x + w / 2} y={y + 17} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>{label}</text>
                <text x={x + w / 2} y={y + 33} textAnchor="middle" fontSize={9} fill="#ffff">{sub}</text>
              </g>
            ))}
            {/* Forward arrows */}
            {[[140, 200], [310, 370], [480, 540]].map(([x1, x2], i) => (
              <g key={i}>
                <line x1={x1} y1={102} x2={x2 - 10} y2={102} stroke={color} strokeWidth={1.5} />
                <polygon points={`${x2 - 10},98 ${x2},102 ${x2 - 10},106`} fill={color} />
              </g>
            ))}
            {/* Feedback loop */}
            <path d="M 595 124 C 595 165, 380 175, 255 165 C 150 158, 85 145, 85 124"
              fill="none" stroke="#0284c7" strokeWidth={2} strokeDasharray="5,4" />
            <polygon points="85,116 81,128 91,126" fill="#0284c7" />
            <text x={340} y={188} textAnchor="middle" fontSize={10} fill="#0284c7" fontWeight={600}>
              iteração: novo modelo gera melhores dados
            </text>
          </svg>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Paralelismo e Infra de Treino</h2>

        <p style={S.p}>
          Treinar modelos com centenas de biliões de parâmetros requer distribuir o trabalho por centenas
          ou milhares de GPUs. Existem três dimensões de paralelismo que podem ser combinadas.
        </p>

        <h3 style={S.h3}>As três dimensões</h3>
        <p style={S.p}>
          <strong>Data Parallelism:</strong> cada GPU recebe uma cópia completa do modelo e processa
          um sub-batch diferente. Os gradientes são agregados (all-reduce) no final.
        </p>
        <p style={S.p}>
          <strong>Tensor Parallelism (Megatron-LM):</strong> as matrizes de pesos são divididas
          ao longo de uma dimensão por várias GPUs. Cada GPU computa uma fracção da matrix multiplication.
          Requer comunicação all-reduce em cada operação.
        </p>
        <p style={S.p}>
          <strong>Pipeline Parallelism:</strong> layers diferentes residem em GPUs diferentes.
          Micro-batches fluem como numa pipeline de fábrica, reduzindo o "pipeline bubble".
        </p>

        <h3 style={S.h3}>ZeRO — Zero Redundancy Optimizer</h3>
        <p style={S.p}>
          O DeepSpeed ZeRO particiona os optimizer states (Stage 1), gradients (Stage 2) e parâmetros
          (Stage 3) por todas as GPUs, eliminando redundância. O ZeRO-3 permite treinar modelos muito
          maiores do que a VRAM de uma GPU permitiria.
        </p>

        <p style={S.p}>
          <strong>Mixed Precision:</strong> o forward pass e backward são computados em BF16/FP16,
          mas os optimizer states mantêm-se em FP32 para estabilidade numérica.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estratégia</th>
              <th style={S.th}>O que se divide</th>
              <th style={S.th}>Comunicação</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Data Parallelism', 'Mini-batches', 'All-reduce de gradientes', 'Modelo cabe numa GPU; escalar throughput'],
              ['Tensor Parallelism', 'Matrizes de pesos', 'All-reduce por camada (alto)', 'Camadas demasiado grandes para uma GPU'],
              ['Pipeline Parallelism', 'Camadas (layers)', 'Point-to-point entre estágios', 'Modelo profundo, micro-batching possível'],
              ['ZeRO Stage 3', 'Params + grads + optim', 'All-gather de params', 'Modelos que não cabem em nenhuma GPU'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* SVG: 3D parallelism */}
        <div style={S.diagram}>
          {(() => {
            const cTP = '#4a9eed', cPP = '#0284c7', cDP = '#0369a1';
            // box dims
            const bw = 100, bh = 44, tpGap = 20, ppGap = 20;
            const rowH = bh + ppGap;
            const repW = bw * 2 + tpGap;
            const repGap = 60;
            const padX = 72; // left padding for PP stage labels
            const padY = 52; // top padding for title + replica label
            const rx = [padX, padX + repW + repGap];
            const W = rx[1] + repW + 20;
            const H = padY + 3 * rowH - ppGap + 60; // 60 for legend

            const stages = ['PP Stage 1', 'PP Stage 2', 'PP Stage 3'];
            const stageColors = ['rgba(74,158,237,0.08)', 'rgba(2,132,199,0.06)', 'rgba(3,105,161,0.07)'];

            return (
              <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
                <defs>
                  <marker id="mTP" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L0,7 L7,3.5 z" fill={cTP} />
                  </marker>
                  <marker id="mPP" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L0,7 L7,3.5 z" fill={cPP} />
                  </marker>
                  <marker id="mDP" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L0,7 L7,3.5 z" fill={cDP} />
                  </marker>
                </defs>

                {/* Title */}
                <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill={color}>3D Parallelism</text>

                {/* PP stage row backgrounds + labels */}
                {stages.map((lbl, pi) => {
                  const y0 = padY + pi * rowH;
                  return (
                    <g key={pi}>
                      <rect x={padX - 6} y={y0 - 4} width={W - padX + 2} height={bh + 8} rx={6} fill={stageColors[pi]} />
                      <text x={padX - 10} y={y0 + bh / 2 + 4} textAnchor="end" fontSize={8} fontWeight={600} fill={cPP}>{lbl}</text>
                    </g>
                  );
                })}

                {/* Replicas */}
                {rx.map((x0, di) => (
                  <g key={di}>
                    {/* Replica label */}
                    <text x={x0 + repW / 2} y={padY - 8} textAnchor="middle" fontSize={9} fill="var(--text-secondary)" fontWeight={600}>
                      {`Data Parallel Replica ${di + 1}`}
                    </text>

                    {[0, 1, 2].map(pi => {
                      const y0 = padY + pi * rowH;
                      return (
                        <g key={pi}>
                          {/* Two TP boxes per row */}
                          {[0, 1].map(ti => {
                            const bx = x0 + ti * (bw + tpGap);
                            return (
                              <g key={ti}>
                                <rect x={bx} y={y0} width={bw} height={bh} rx={6}
                                  fill="rgba(74,158,237,0.13)" stroke={color} strokeWidth={1.5} />
                                <text x={bx + bw / 2} y={y0 + 17} textAnchor="middle" fontSize={9} fontWeight={700} fill={color}>
                                  {`Layer ${pi * 2 + ti + 1}`}
                                </text>
                                <text x={bx + bw / 2} y={y0 + 32} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">
                                  {`GPU ${di * 6 + pi * 2 + ti + 1}`}
                                </text>
                              </g>
                            );
                          })}

                          {/* TP arrow (horizontal, solid) */}
                          <line x1={x0 + bw + 2} y1={y0 + bh / 2}
                            x2={x0 + bw + tpGap - 2} y2={y0 + bh / 2}
                            stroke={cTP} strokeWidth={2} markerEnd="url(#mTP)" />

                          {/* PP arrows (vertical) per column */}
                          {pi < 2 && [0, 1].map(ti => {
                            const cx = x0 + ti * (bw + tpGap) + bw / 2;
                            return (
                              <line key={ti}
                                x1={cx} y1={y0 + bh + 3}
                                x2={cx} y2={y0 + rowH - 3}
                                stroke={cPP} strokeWidth={1.5} strokeDasharray="4,3" markerEnd="url(#mPP)" />
                            );
                          })}
                        </g>
                      );
                    })}
                  </g>
                ))}

                {/* DP arrow between replicas (middle row) */}
                {(() => {
                  const midY = padY + rowH + bh / 2;
                  const x1 = rx[0] + repW + 5, x2 = rx[1] - 5;
                  return (
                    <>
                      <line x1={x1} y1={midY} x2={x2} y2={midY}
                        stroke={cDP} strokeWidth={2.5} strokeDasharray="7,4" markerEnd="url(#mDP)" />
                      <text x={(x1 + x2) / 2} y={midY - 6} textAnchor="middle" fontSize={8} fontWeight={700} fill={cDP}>DP</text>
                    </>
                  );
                })()}

                {/* Legend */}
                {[
                  [cDP, 'Data Parallel (DP)', '7,4', 2.5, 'horizontal'],
                  [cPP, 'Pipeline Parallel (PP)', '4,3', 1.5, 'vertical'],
                  [cTP, 'Tensor Parallel (TP)', null, 2, 'horizontal'],
                ].map(([c, lbl, dash, sw], i) => {
                  const lx = 20 + i * (W / 3);
                  const ly = H - 22;
                  return (
                    <g key={i}>
                      <line x1={lx} y1={ly} x2={lx + 24} y2={ly}
                        stroke={c} strokeWidth={sw} strokeDasharray={dash || undefined} />
                      <text x={lx + 28} y={ly + 4} fontSize={9} fill="var(--text-secondary)">{lbl}</text>
                    </g>
                  );
                })}
              </svg>
            );
          })()}
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. KV Cache — Inferência Eficiente</h2>

        <p style={S.p}>
          Durante a geração autoregressiva, o modelo processa todos os tokens anteriores em cada step.
          As matrizes K (Key) e V (Value) de cada camada de atenção seriam recalculadas repetidamente —
          um desperdício enorme de compute.
        </p>

        <h3 style={S.h3}>Como funciona o KV Cache</h3>
        <p style={S.p}>
          O KV Cache armazena as matrizes K e V de cada camada para todos os tokens já gerados. A cada
          novo step, apenas o token mais recente precisa de ser processado; os K e V anteriores são
          lidos da cache. O custo de memória cresce com a sequência:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\text{Memória}_{KV} = 2 \\times n_{\\text{layers}} \\times n_{\\text{heads}} \\times d_{\\text{head}} \\times L_{\\text{seq}} \\times \\text{bytes}"} />
        </div>

        <h3 style={S.h3}>MHA vs. MQA vs. GQA</h3>
        <p style={S.p}>
          Para reduzir o tamanho do KV cache, foram propostas variantes da atenção multi-head:
        </p>

        {/* SVG: MHA vs MQA vs GQA */}
        <div style={S.diagram}>
          <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
            {/* MHA */}
            <g>
              <text x={100} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>MHA</text>
              <text x={100} y={35} textAnchor="middle" fontSize={9} fill="#6b7280">Multi-Head Attention</text>
              {[0, 1, 2, 3].map(i => (
                <g key={i}>
                  <rect x={20 + i * 40} y={50} width={30} height={22} rx={4}
                    fill="rgba(74,158,237,0.20)" stroke="#4a9eed" strokeWidth={1} />
                  <text x={35 + i * 40} y={65} textAnchor="middle" fontSize={8} fill="#4a9eed">Q{i + 1}</text>
                  <rect x={20 + i * 40} y={90} width={30} height={22} rx={4}
                    fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1} />
                  <text x={35 + i * 40} y={105} textAnchor="middle" fontSize={8} fill="#4a9eed">K{i + 1}</text>
                  <rect x={20 + i * 40} y={130} width={30} height={22} rx={4}
                    fill="rgba(2,132,199,0.15)" stroke="#0284c7" strokeWidth={1} />
                  <text x={35 + i * 40} y={145} textAnchor="middle" fontSize={8} fill="#0284c7">V{i + 1}</text>
                </g>
              ))}
              <text x={100} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">4 K/V por head</text>
            </g>

            {/* MQA */}
            <g transform="translate(230,0)">
              <text x={100} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>MQA</text>
              <text x={100} y={35} textAnchor="middle" fontSize={9} fill="#6b7280">Multi-Query Attention</text>
              {[0, 1, 2, 3].map(i => (
                <g key={i}>
                  <rect x={20 + i * 40} y={50} width={30} height={22} rx={4}
                    fill="rgba(74,158,237,0.20)" stroke="#4a9eed" strokeWidth={1} />
                  <text x={35 + i * 40} y={65} textAnchor="middle" fontSize={8} fill="#4a9eed">Q{i + 1}</text>
                </g>
              ))}
              {/* Single shared K, V */}
              <rect x={75} y={90} width={50} height={22} rx={4}
                fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1.5} />
              <text x={100} y={105} textAnchor="middle" fontSize={9} fontWeight={700} fill="#4a9eed">K (shared)</text>
              <rect x={75} y={130} width={50} height={22} rx={4}
                fill="rgba(2,132,199,0.25)" stroke="#0284c7" strokeWidth={1.5} />
              <text x={100} y={145} textAnchor="middle" fontSize={9} fontWeight={700} fill="#0284c7">V (shared)</text>
              {[20, 60, 100, 140].map((x, i) => (
                <g key={i}>
                  <line x1={x + 15} y1={72} x2={100} y2={90} stroke="#4a9eed" strokeWidth={0.8} strokeDasharray="3,2" />
                </g>
              ))}
              <text x={100} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">1 K/V partilhado</text>
            </g>

            {/* GQA */}
            <g transform="translate(460,0)">
              <text x={110} y={20} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>GQA</text>
              <text x={110} y={35} textAnchor="middle" fontSize={9} fill="#6b7280">Grouped-Query Attention</text>
              {[0, 1, 2, 3].map(i => (
                <g key={i}>
                  <rect x={20 + i * 40} y={50} width={30} height={22} rx={4}
                    fill="rgba(74,158,237,0.20)" stroke="#4a9eed" strokeWidth={1} />
                  <text x={35 + i * 40} y={65} textAnchor="middle" fontSize={8} fill="#4a9eed">Q{i + 1}</text>
                </g>
              ))}
              {/* Two group K, V */}
              {[0, 1].map(g => (
                <g key={g}>
                  <rect x={30 + g * 100} y={90} width={60} height={22} rx={4}
                    fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth={1.5} />
                  <text x={60 + g * 100} y={105} textAnchor="middle" fontSize={8} fontWeight={700} fill="#4a9eed">K-G{g + 1}</text>
                  <rect x={30 + g * 100} y={130} width={60} height={22} rx={4}
                    fill="rgba(2,132,199,0.18)" stroke="#0284c7" strokeWidth={1.5} />
                  <text x={60 + g * 100} y={145} textAnchor="middle" fontSize={8} fontWeight={700} fill="#0284c7">V-G{g + 1}</text>
                </g>
              ))}
              {[[35, 60], [75, 60], [115, 160], [155, 160]].map(([qx, kx], i) => (
                <line key={i} x1={qx} y1={72} x2={kx} y2={90} stroke="#4a9eed" strokeWidth={0.8} strokeDasharray="3,2" />
              ))}
              <text x={110} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">2 grupos de K/V</text>
            </g>
          </svg>
        </div>

        <div style={S.note}>
          O GQA é o compromisso adoptado pela maioria dos modelos modernos (LLaMA 3, Mistral, Gemma):
          reduz o KV cache significativamente sem a degradação de qualidade do MQA puro.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Speculative Decoding</h2>

        <p style={S.p}>
          O principal bottleneck da inferência autoregressiva é a sua natureza sequencial: cada token
          requer um forward pass completo do modelo. O speculative decoding quebra este bottleneck
          usando um modelo auxiliar mais rápido.
        </p>

        <h3 style={S.h3}>Como funciona</h3>
        <p style={S.p}>
          Um modelo pequeno e rápido (<em>draft model</em>) gera <InlineMath math={"k"} /> tokens
          candidatos. O modelo grande (<em>verifier</em>) verifica todos os <InlineMath math={"k"} /> tokens
          em paralelo num único forward pass. Se todos forem aceites, obtemos <InlineMath math={"k+1"} /> tokens
          por forward pass do modelo grande — um speedup substancial.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\mathbb{E}[\\text{tokens/step}] = \\frac{1 - \\alpha^{k+1}}{1 - \\alpha}"} />
        </div>
        <p style={S.p}>
          onde <InlineMath math={"\\alpha"} /> é a <em>acceptance rate</em> — a probabilidade de o verifier
          aceitar cada draft token. Com <InlineMath math={"\\alpha = 0.8"} /> e <InlineMath math={"k = 4"} />,
          o speedup esperado é <InlineMath math={"\\approx 3.4 \\times"} />.
        </p>

        <h3 style={S.h3}>Variantes modernas</h3>
        <p style={S.p}>
          O <strong>Self-Speculative Decoding</strong> usa as próprias layers iniciais do modelo como
          draft. O <strong>Medusa</strong> adiciona múltiplas cabeças de predição ao modelo original
          para gerar vários tokens candidatos em paralelo. O <strong>EAGLE</strong> aprende a imitar
          a distribuição do verifier de forma mais eficiente que um draft model independente.
        </p>

        {/* SVG: speculative decoding flow */}
        <div style={S.diagram}>
          <svg viewBox="0 0 720 230" width="100%" style={{ display: 'block' }}>
            <text x={360} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>
              Speculative Decoding — Fluxo
            </text>

            {/* Draft model */}
            <rect x={20} y={35} width={140} height={50} rx={8}
              fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth={1.5} />
            <text x={90} y={58} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4a9eed">Draft Model</text>
            <text x={90} y={75} textAnchor="middle" fontSize={9} fill="#6b7280">(modelo pequeno)</text>

            {/* Draft tokens */}
            {['t₁', 't₂', 't₃', 't₄'].map((t, i) => (
              <g key={i}>
                <rect x={185 + i * 52} y={42} width={40} height={36} rx={6}
                  fill="rgba(74,158,237,0.20)" stroke="#4a9eed" strokeWidth={1} />
                <text x={205 + i * 52} y={64} textAnchor="middle" fontSize={12} fontWeight={700} fill="#4a9eed">{t}</text>
              </g>
            ))}
            <text x={370} y={100} textAnchor="middle" fontSize={9} fill="#6b7280">k=4 tokens draft (sequencial)</text>

            {/* Arrow down to verifier */}
            <line x1={360} y1={103} x2={360} y2={118} stroke={color} strokeWidth={1.5} />
            <polygon points="356,118 360,126 364,118" fill={color} />
            <text x={400} y={115} fontSize={9} fill={color}>verificar em paralelo</text>

            {/* Verifier */}
            <rect x={20} y={130} width={140} height={50} rx={8}
              fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth={1.5} />
            <text x={90} y={153} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Verifier</text>
            <text x={90} y={170} textAnchor="middle" fontSize={9} fill="#6b7280">(modelo grande)</text>

            {/* Verification results */}
            {[
              { t: 't₁', ok: true },
              { t: 't₂', ok: true },
              { t: 't₃', ok: true },
              { t: 't₄', ok: false },
            ].map(({ t, ok }, i) => (
              <g key={i}>
                <rect x={185 + i * 52} y={137} width={40} height={36} rx={6}
                  fill={ok ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'}
                  stroke={ok ? color : '#4a9eed'} strokeWidth={1.5} />
                <text x={205 + i * 52} y={155} textAnchor="middle" fontSize={11} fontWeight={700}
                  fill={ok ? color : '#4a9eed'}>{t}</text>
                <text x={205 + i * 52} y={168} textAnchor="middle" fontSize={10}
                  fill={ok ? color : '#4a9eed'}>{ok ? '✓' : '✗'}</text>
              </g>
            ))}

            {/* Final token from verifier */}
            <rect x={397} y={137} width={40} height={36} rx={6}
              fill={`rgba(74,158,237,0.10)`} stroke={color} strokeWidth={2} />
            <text x={417} y={155} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>t₅</text>
            <text x={417} y={168} textAnchor="middle" fontSize={9} fill={color}>novo</text>

            <text x={360} y={200} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>
              3 tokens aceites + 1 token novo = 4 tokens num único forward pass do verifier
            </text>
            <text x={360} y={218} textAnchor="middle" fontSize={9} fill="#6b7280">
              (t₄ rejeitado — verifier substitui com a sua própria predição)
            </text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Condição de correcção:</strong> o speculative decoding é exactamente equivalente
          à geração pelo modelo grande — não há perda de qualidade. O truque é que o verifier pode
          verificar todos os drafts em paralelo porque processa a sequência completa de uma vez,
          tal como no prefill.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Synthesis ── */}
      

    </div>
  );
}
