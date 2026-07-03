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
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.25rem 0', overflowX: 'auto' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem 1.25rem', margin: '1rem 0', overflowX: 'auto' },
};

export default function PAR8() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Profiling e Frameworks Modernos</h1>
      <p style={S.lead}>
        Optimizar sem medir é adivinhar. Este módulo cobre o ciclo completo de optimização de desempenho — das ferramentas de profiling (cProfile, Nsight, perf, VTune) aos frameworks modernos de computação distribuída (Dask, Ray) — e encerra com uma síntese de todo o curso.
      </p>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Workflow de Optimização de Desempenho</h2>
        <p style={S.p}>
          A regra de ouro da optimização é <strong>medir primeiro, nunca adivinhar</strong>. A intuição sobre onde está o bottleneck está errada na maioria das vezes. O ciclo correcto é: perfilar o código, identificar o hotspot, optimizar apenas esse hotspot, medir novamente para confirmar a melhoria.
        </p>
        <p style={S.p}>
          A Lei de Amdahl quantifica o limite superior da aceleração obtida ao optimizar uma fracção <InlineMath math="p" /> do programa:
        </p>
        <div style={S.math}>
          <BlockMath math="S(n) = \\frac{1}{(1-p) + \\dfrac{p}{n}}" />
        </div>
        <p style={S.p}>
          Se 20 % do código é sequencial, a aceleração máxima possível é <InlineMath math="1/(0{,}2) = 5\\times" />, independentemente do número de núcleos. Optimizar as partes erradas não altera este limite — por isso identificar o bottleneck correcto é crítico.
        </p>

        {/* SVG: ciclo de optimização */}
        <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.8rem' }}>
          {/* Pipeline steps */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            {[
              { label: 'Código',    sub: 'escrever',    c: '#f97316' },
              { label: 'Profile',   sub: 'medir',       c: '#f59e0b' },
              { label: 'Hotspot',   sub: 'identificar', c: '#fb923c' },
              { label: 'Optimizar', sub: 'melhorar',    c: '#fbbf24' },
              { label: 'Medir',     sub: 'validar',     c: '#f97316' },
            ].reduce((acc, step, i, arr) => {
              acc.push(
                <div key={step.label} style={{ flex: 1, border: `2px solid ${step.c}`, borderRadius: 10, padding: '0.7rem 0.4rem', background: `${step.c}14`, textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: step.c }}>{step.label}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', marginTop: 3 }}>{step.sub}</div>
                </div>
              );
              if (i < arr.length - 1) acc.push(
                <div key={`arr-${i}`} style={{ fontSize: '1.2rem', color: '#f97316', flexShrink: 0 }}>→</div>
              );
              return acc;
            }, [])}
          </div>

          {/* Return arc label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
            <div style={{ flex: 1, borderBottom: '1.5px dashed #f97316', borderLeft: '1.5px dashed #f97316', borderRadius: '0 0 0 8px', height: 18, position: 'relative' }}>
              <span style={{ position: 'absolute', left: -1, top: -9, color: '#f97316', fontSize: '0.9rem' }}>↑</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>repetir até atingir o objectivo</div>
            <div style={{ flex: 1, borderBottom: '1.5px dashed #f97316', borderRight: '1.5px dashed #f97316', borderRadius: '0 0 8px 0', height: 18 }} />
          </div>
        </div>

        <div style={S.note}>
          Nunca optimize com base em intuição. Um profiler de 10 minutos pode poupar dias de trabalho na direcção errada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Profiling Python — cProfile e line_profiler</h2>
        <p style={S.p}>
          O módulo <strong>cProfile</strong> da biblioteca padrão mede o tempo total e o número de chamadas de cada função. O <strong>line_profiler</strong> (instalado separadamente) vai mais longe e mede o tempo linha a linha dentro de uma função. O <strong>snakeviz</strong> gera flamegraphs interactivos no browser a partir do output do cProfile.
        </p>

        {/* Flamegraph mockup */}
        <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 4 }}>
            Flamegraph — tempo de execução por função (simulado)
          </div>

          {(() => {
            const Bar = ({ label, pct, c, offset = 0, h = 34 }) => (
              <div style={{ position: 'absolute', left: `${offset}%`, width: `${pct}%`, height: h, borderRadius: 5, background: `${c}22`, border: `2px solid ${c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxSizing: 'border-box' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: c, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0 6px' }}>{label}</span>
              </div>
            );
            const Row = ({ children, h = 34 }) => (
              <div style={{ position: 'relative', width: '100%', height: h }}>{children}</div>
            );
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
                <Row><Bar label="script.py: __main__ (100 %)" pct={100} offset={0} c="#f97316" /></Row>
                <Row>
                  <Bar label="model.forward (72 %)" pct={72} offset={0} c="#f59e0b" />
                  <Bar label="data.load_batch (27 %)" pct={27} offset={73} c="#fb923c" />
                </Row>
                <Row>
                  <Bar label="ops.matmul (42 %)" pct={42} offset={0} c="#fbbf24" />
                  <Bar label="ops.softmax (28 %)" pct={28} offset={43} c="#f59e0b" />
                  <Bar label="read_image (18 %)" pct={18} offset={73} c="#fb923c" />
                  <Bar label="resize (9 %)" pct={9} offset={91} c="#ea580c" />
                </Row>
                <Row>
                  <Bar label="cublas_gemm (22 %)" pct={22} offset={0} c="#c2410c" />
                  <Bar label="memory_alloc (18 %)" pct={18} offset={23} c="#f97316" />
                </Row>
              </div>
            );
          })()}

          <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: 6 }}>
            Eixo X = tempo acumulado · Altura = profundidade da pilha de chamadas
          </div>
        </div>

        <div style={S.note}>
          O flamegraph revela imediatamente os "pilares" mais largos — são os bottlenecks reais. <code>cublas_gemm</code> e <code>read_image</code> são os candidatos óbvios a optimizar neste exemplo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Profiling CUDA — NVIDIA Nsight</h2>
        <p style={S.p}>
          Para programas GPU, o profiler do sistema operativo não é suficiente. A NVIDIA fornece dois complementares: <strong>Nsight Systems</strong> (visão global do sistema — timeline de CPU, GPU e memória) e <strong>Nsight Compute</strong> (análise detalhada kernel a kernel — ocupância, throughput de memória, eficiência das SM).
        </p>

        <div style={S.math}>
          <BlockMath math="\\text{Achieved Occupancy} = \\frac{\\text{active warps per SM}}{\\text{max warps per SM}}" />
        </div>

        {/* Nsight Systems timeline — hybrid HTML */}
        <div style={S.diagram}>
          {(() => {
            const TOTAL = 800; // ms
            const pct = (ms) => `${(ms / TOTAL * 100).toFixed(2)}%`;
            const w   = (ms) => `${(ms / TOTAL * 100).toFixed(2)}%`;

            const rowH = 28;
            const trackStyle = { position: 'relative', width: '100%', height: rowH, background: 'rgba(255,255,255,0.03)', borderRadius: 4 };

            const Seg = ({ start, dur, c, label, faint = false }) => (
              <div style={{
                position: 'absolute', left: pct(start), width: w(dur), height: '100%',
                background: faint ? `${c}18` : `${c}28`,
                border: `1.5px solid ${c}`,
                borderRadius: 3, boxSizing: 'border-box',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
              }}>
                {label && <span style={{ fontSize: '0.62rem', color: c, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0 4px' }}>{label}</span>}
              </div>
            );

            const smPcts = [30, 78, 85, 70, 90, 55, 88, 82];

            const rows = [
              { label: 'CPU',        c: '#f97316' },
              { label: 'H2D',        c: '#f59e0b' },
              { label: 'GPU Kernels',c: '#fb923c' },
              { label: 'D2H',        c: '#fbbf24' },
              { label: 'SM Util',    c: '#f97316' },
            ];

            const ticks = [0,100,200,300,400,500,600,700,800];

            return (
              <div style={{ fontFamily: 'monospace' }}>
                <div style={{ textAlign: 'center', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Nsight Systems — Timeline (simulado)
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {rows.map(({ label, c }, ri) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 76, fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'right', flexShrink: 0 }}>{label}</div>
                      <div style={{ flex: 1, ...trackStyle }}>
                        {ri === 0 && <>
                          <Seg start={0}   dur={800} c={c} label="Python / DataLoader" />
                          {[0,160,290,450,560].map((x,i) => <Seg key={i} start={x} dur={[80,60,80,70,88][i]} c={c} faint />)}
                        </>}
                        {ri === 1 && <>
                          <Seg start={0}   dur={55} c={c} label="H→D" />
                          <Seg start={290} dur={55} c={c} label="H→D" />
                          <Seg start={500} dur={55} c={c} label="H→D" />
                        </>}
                        {ri === 2 && <>
                          <Seg start={160} dur={116} c={c} />
                          <Seg start={312} dur={120} c={c} label="matmul / conv / norm" />
                          <Seg start={510} dur={130} c={c} />
                        </>}
                        {ri === 3 && <>
                          <Seg start={100} dur={30}  c={c} />
                          <Seg start={160} dur={30}  c={c} />
                          <Seg start={282} dur={24}  c={c} label="D→H" />
                          <Seg start={380} dur={90}  c={c} />
                          <Seg start={492} dur={24}  c={c} />
                          <Seg start={560} dur={60}  c={c} />
                          <Seg start={650} dur={24}  c={c} />
                          <Seg start={720} dur={70}  c={c} />
                        </>}
                        {ri === 4 && smPcts.map((pct, i) => (
                          <div key={i} style={{
                            position: 'absolute',
                            left: `${i * 12.5}%`, width: '11%',
                            bottom: 0, height: `${pct}%`,
                            background: `${c}30`, border: `1px solid ${c}`,
                            borderRadius: '2px 2px 0 0',
                          }} />
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Time axis */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 76, flexShrink: 0 }} />
                    <div style={{ flex: 1, position: 'relative', height: 18 }}>
                      <svg width="100%" height="18" style={{ overflow: 'visible' }}>
                        <line x1="0%" y1={0} x2="100%" y2={0} stroke="var(--text-secondary)" strokeWidth={1} />
                        {ticks.map((t, i) => (
                          <g key={t}>
                            <line x1={`${i * 12.5}%`} y1={0} x2={`${i * 12.5}%`} y2={5} stroke="var(--text-secondary)" strokeWidth={1} />
                            <text x={`${i * 12.5}%`} y={15} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">{t}ms</text>
                          </g>
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        <div style={S.note}>
          As lacunas entre kernels GPU (zonas sem cor roxa) indicam que a GPU está idle — tipicamente à espera de transferências de memória ou sincronização com a CPU. Estes "buracos" são os primeiros a eliminar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. perf e VTune — CPU Profiling</h2>
        <p style={S.p}>
          No Linux, <strong>perf</strong> é a ferramenta de referência para profiling de CPU. Usa os <em>hardware performance counters</em> do processador para medir cache misses, branch mispredictions e IPC sem overhead significativo. O <strong>Intel VTune Profiler</strong> (gratuito) oferece uma análise mais profunda da microarquitectura, incluindo roofline model e análise de dependências.
        </p>

        {/* perf stat bar chart — hybrid HTML */}
        <div style={S.diagram}>
          {(() => {
            const MAX = 20;
            const CHART_H = 140;
            const bars = [
              { group: 'cache-miss',  phase: 'antes',  pct: 8.23,  c: '#f97316' },
              { group: 'cache-miss',  phase: 'depois', pct: 2.10,  c: '#fb923c' },
              { group: 'branch-miss', phase: 'antes',  pct: 14.80, c: '#f97316' },
              { group: 'branch-miss', phase: 'depois', pct: 3.50,  c: '#fb923c' },
            ];
            const yTicks = [0, 5, 10, 15, 20];
            return (
              <div style={{ fontFamily: 'monospace' }}>
                <div style={{ textAlign: 'center', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  perf stat — taxas de cache-miss e branch-miss antes/depois da optimização
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* Y axis */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', height: CHART_H, paddingBottom: 2 }}>
                    {[...yTicks].reverse().map(v => (
                      <span key={v} style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', lineHeight: 1 }}>{v}%</span>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', height: CHART_H, borderLeft: '1px solid var(--text-secondary)', borderBottom: '1px solid var(--text-secondary)' }}>
                      {/* Grid lines */}
                      {yTicks.slice(1).map(v => (
                        <div key={v} style={{ position: 'absolute', bottom: `${(v / MAX) * 100}%`, left: 0, right: 0, borderTop: '1px solid rgba(148,163,184,0.15)' }} />
                      ))}
                      {/* Bar groups */}
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 6%' }}>
                        {/* Gap between groups */}
                        {[0, 1].map(gi => (
                          <div key={gi} style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
                            {bars.slice(gi * 2, gi * 2 + 2).map(({ phase, pct, c }) => (
                              <div key={phase} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: c }}>{pct}%</span>
                                <div style={{
                                  width: 52, height: `${(pct / MAX) * CHART_H}px`,
                                  background: `${c}25`, border: `2px solid ${c}`,
                                  borderRadius: '3px 3px 0 0',
                                }} />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* X labels */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '6px 6%' }}>
                      {['cache-miss', 'branch-miss'].map(g => (
                        <div key={g} style={{ display: 'flex', gap: 6 }}>
                          {['antes', 'depois'].map(p => (
                            <div key={p} style={{ width: 52, textAlign: 'center', fontSize: '0.62rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                              {g}<br/>({p})
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Legend */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, paddingLeft: 8 }}>
                    {[{ c: '#f97316', label: 'antes de optimizar' }, { c: '#fb923c', label: 'após optimização' }].map(({ c, label }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 12, height: 12, background: `${c}25`, border: `2px solid ${c}`, borderRadius: 2 }} />
                        <span style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        <p style={S.p}>
          O IPC (instruções por ciclo) é um indicador síntese da eficiência da microarquitectura. Um IPC baixo com muitos cache misses aponta para problemas de localidade de dados; um IPC baixo com muitos branch mispredictions sugere estruturas de controlo que o compilador pode optimizar com <code>__builtin_expect</code> ou reestruturação lógica.
        </p>
        <div style={S.math}>
          <BlockMath math="\\text{IPC} = \\frac{\\text{instructions retired}}{\\text{clock cycles}}" />
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Dask — Paralelismo Lazy em Python</h2>
        <p style={S.p}>
          Dask constrói um <strong>grafo de computação</strong> (DAG) enquanto o programador escreve operações — nenhuma computação acontece até ser chamado <code>.compute()</code>. Este modelo lazy permite ao scheduler optimizar a execução, fundir operações e evitar materializar resultados intermédios desnecessários.
        </p>

        {/* SVG: DAG do Dask */}
        <div style={S.diagram}>
          <svg viewBox="0 0 740 235" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="darr" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
              </marker>
            </defs>
            <text x={370} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-secondary)">Grafo de Tarefas Dask — avaliação lazy até .compute()</text>

            {/* Nós folha (leitura) */}
            {[80, 220, 360, 500, 640].map((x, i) => (
              <g key={i}>
                <rect x={x - 48} y={32} width={96} height={30} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.2} />
                <text x={x} y={51} textAnchor="middle" fontSize={10} fill={color}>read_csv #{i + 1}</text>
              </g>
            ))}

            {/* Nós intermédios — filter */}
            {[150, 430].map((x, i) => (
              <g key={i}>
                <rect x={x - 60} y={88} width={120} height={30} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.2} />
                <text x={x} y={107} textAnchor="middle" fontSize={10} fill={color}>query / filter #{i + 1}</text>
              </g>
            ))}

            {/* Nós intermédios — groupby */}
            {[150, 430].map((x, i) => (
              <g key={i}>
                <rect x={x - 60} y={144} width={120} height={30} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.2} />
                <text x={x} y={163} textAnchor="middle" fontSize={10} fill={color}>groupby.mean #{i + 1}</text>
              </g>
            ))}

            {/* Nó final */}
            <rect x={290} y={200} width={160} height={26} rx={8} fill={color} />
            <text x={370} y={218} textAnchor="middle" fontSize={11} fontWeight={700} fill="#fff">.compute()</text>

            {/* Arestas folha → filter */}
            {[[80,150],[220,150],[360,430],[500,430],[640,430]].map(([from,to],i) => (
              <line key={i} x1={from} y1={62} x2={to} y2={88} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#darr)" />
            ))}
            {/* filter → groupby */}
            {[150, 430].map((x, i) => (
              <line key={i} x1={x} y1={118} x2={x} y2={144} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#darr)" />
            ))}
            {/* groupby → compute */}
            {[150, 430].map((x, i) => (
              <line key={i} x1={x} y1={174} x2={370} y2={200} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#darr)" />
            ))}
          </svg>
        </div>

        <div style={S.note}>
          O <strong>Dask Dashboard</strong> (porta 8787) mostra em tempo real o progresso das tarefas, o uso de memória por worker e o grafo de execução — imprescindível para diagnosticar bottlenecks em pipelines Dask.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Ray — Distributed Computing</h2>
        <p style={S.p}>
          Ray é um framework de computação distribuída de propósito geral que expõe dois primitivos: <strong>Tasks</strong> (funções remotas stateless) e <strong>Actors</strong> (objectos stateful distribuídos). O <strong>Object Store</strong> in-memory partilhado evita serialização desnecessária ao passar dados entre tasks no mesmo nó.
        </p>

        {/* Ray cluster — SVG-based layout */}
        <div style={S.diagram}>
          <div style={{ textAlign: 'center', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Cluster Ray — head node + workers + object store partilhado
          </div>
          {(() => {
            const nodes = [
              { label: 'Head Node',  sub: ['GCS · Scheduler', 'Dashboard :8265'], c: '#f97316', x: 30  },
              { label: 'Worker 1',   sub: ['Raylet', 'Tasks/Actors'],              c: '#f97316', x: 230 },
              { label: 'Worker 2',   sub: ['Raylet', 'Tasks/Actors'],              c: '#fb923c', x: 370 },
              { label: 'Worker 3',   sub: ['Raylet', 'Tasks/Actors'],              c: '#f59e0b', x: 510 },
            ];
            const nodeW = 120, nodeH = 64, nodeY = 10;
            const storY = 140, storX = 220, storW = 210, storH = 44;
            // center x of each node
            const cx = nodes.map(n => n.x + nodeW / 2);
            const storCX = storX + storW / 2;
            return (
              <svg viewBox="0 0 670 210" width="100%" style={{ display: 'block', overflow: 'visible' }}>
                <defs>
                  <marker id="arO" markerWidth={7} markerHeight={7} refX={5} refY={3.5} orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" fill="#f97316" />
                  </marker>
                  <marker id="arA" markerWidth={7} markerHeight={7} refX={5} refY={3.5} orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" fill="#fbbf24" />
                  </marker>
                </defs>

                {/* Head → W1 → W2 → W3: sequential arrows between box edges */}
                {[0,1,2].map(i => (
                  <line key={i}
                    x1={nodes[i].x + nodeW} y1={nodeY + nodeH / 2}
                    x2={nodes[i+1].x}       y2={nodeY + nodeH / 2}
                    stroke="#f97316" strokeWidth={1.5} strokeDasharray="5,3"
                    markerEnd="url(#arO)"
                  />
                ))}

                {/* All nodes → Object Store: from bottom-center to Object Store top */}
                {nodes.map((n, i) => (
                  <line key={i}
                    x1={cx[i]} y1={nodeY + nodeH}
                    x2={storCX} y2={storY}
                    stroke="#fbbf24" strokeWidth={1.2} strokeDasharray="4,3"
                    markerEnd="url(#arA)"
                  />
                ))}

                {/* Node boxes */}
                {nodes.map((n, i) => (
                  <g key={n.label}>
                    <rect x={n.x} y={nodeY} width={nodeW} height={nodeH} rx={8}
                      fill={`${n.c}18`} stroke={n.c} strokeWidth={i === 0 ? 2 : 1.5} />
                    <text x={n.x + nodeW/2} y={nodeY + 22} textAnchor="middle"
                      fontSize={11} fontWeight={700} fill={n.c}>{n.label}</text>
                    {n.sub.map((line, j) => (
                      <text key={j} x={n.x + nodeW/2} y={nodeY + 38 + j * 14}
                        textAnchor="middle" fontSize={9} fill="var(--text-secondary)">{line}</text>
                    ))}
                  </g>
                ))}

                {/* Object Store */}
                <rect x={storX} y={storY} width={storW} height={storH} rx={8}
                  fill="rgba(251,191,36,0.12)" stroke="#fbbf24" strokeWidth={2} />
                <text x={storCX} y={storY + 18} textAnchor="middle"
                  fontSize={11} fontWeight={700} fill="#fbbf24">Object Store</text>
                <text x={storCX} y={storY + 32} textAnchor="middle"
                  fontSize={9} fill="var(--text-secondary)">in-memory · zero-copy</text>
              </svg>
            );
          })()}
        </div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Ray é a escolha natural para <strong>ML distribuído heterogéneo</strong>: Ray Tune faz hyperparameter search em paralelo, Ray Serve serve modelos com auto-scaling, e RLlib escala reinforcement learning para centenas de workers — tudo sobre as mesmas primitivas Tasks/Actors.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Guia de Decisão: Dask vs Ray vs Spark</h2>
        <p style={S.p}>
          Cada framework tem um nicho distinto. A tabela e o fluxograma seguintes ajudam a escolher rapidamente com base no problema concreto.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Framework</th>
              <th style={S.th}>Melhor Para</th>
              <th style={S.th}>Limitação</th>
              <th style={S.th}>Escala</th>
              <th style={S.th}>Python Nativo</th>
              <th style={S.th}>Integração ML</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Dask',  'Escalar Pandas/NumPy, ETL médio',       'Menos maduro que Spark para SQL puro', '1–100 nós',    '✓✓✓', 'Boa (sklearn, XGBoost)'],
              ['Ray',   'ML distribuído, RL, serving, actores',  'Overhead para tarefas muito pequenas', '1–1000+ nós',  '✓✓✓', 'Excelente (Tune, RLlib, Serve)'],
              ['Spark', 'Big data ETL, SQL, ecossistema Hadoop', 'JVM overhead, curva de aprendizagem',  '10–10000+ nós','✓✓',  'MLlib (menos Pythónico)'],
            ].map(([fw,best,lim,scale,py,ml]) => (
              <tr key={fw}>
                <td style={S.td}><strong>{fw}</strong></td>
                <td style={S.td}>{best}</td>
                <td style={S.td}>{lim}</td>
                <td style={S.td}>{scale}</td>
                <td style={S.td}>{py}</td>
                <td style={S.td}>{ml}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* SVG: decision flowchart */}
        <div style={S.diagram}>
          <svg viewBox="0 0 740 278" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="farr" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
              </marker>
            </defs>
            <text x={370} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text-secondary)">Guia de Decisão — qual framework escolher?</text>

            {/* Nó raiz */}
            <rect x={240} y={28} width={260} height={34} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
            <text x={370} y={50} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Preciso de computação distribuída?</text>

            <line x1={370} y1={62} x2={370} y2={86} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#farr)" />
            <text x={377} y={78} fontSize={9} fill="var(--text-secondary)">Sim</text>

            {/* 2ª pergunta */}
            <rect x={200} y={86} width={340} height={34} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.3} />
            <text x={370} y={108} textAnchor="middle" fontSize={11} fill={color}>Dados estruturados tipo Pandas/NumPy?</text>

            {/* Sim → Dask */}
            <line x1={200} y1={103} x2={116} y2={150} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#farr)" />
            <text x={118} y={136} fontSize={9} fill="var(--text-secondary)">Sim</text>
            <rect x={26} y={150} width={170} height={34} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
            <text x={111} y={172} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff">→ Dask</text>

            {/* Não → 3ª pergunta */}
            <line x1={540} y1={103} x2={622} y2={150} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#farr)" />
            <text x={604} y={136} fontSize={9} fill="var(--text-secondary)">Não</text>

            <rect x={494} y={150} width={240} height={34} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.3} />
            <text x={614} y={172} textAnchor="middle" fontSize={11} fill={color}>Actores / ML / RL distribuído?</text>

            {/* Sim → Ray */}
            <line x1={614} y1={184} x2={614} y2={224} stroke="var(--text-secondary)" strokeWidth={1} markerEnd="url(#farr)" />
            <text x={620} y={214} fontSize={9} fill="var(--text-secondary)">Sim</text>
            <rect x={530} y={224} width={168} height={34} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
            <text x={614} y={246} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff">→ Ray</text>

            {/* Ecossistema Hadoop → Spark */}
            <line x1={370} y1={120} x2={370} y2={224} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="4 2" markerEnd="url(#farr)" />
            <text x={377} y={186} fontSize={9} fill="var(--text-secondary)">Ecossistema Hadoop/SQL?</text>
            <rect x={278} y={224} width={184} height={34} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
            <text x={370} y={246} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff">→ Spark</text>

            <text x={614} y={270} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">(RL → Ray RLlib em específico)</text>
          </svg>
        </div>

        <div style={S.note}>
          <strong>Regra prática:</strong> comece com <code>multiprocessing</code> ou Dask; migre para Ray se precisar de ML distribuído, actores ou serving; use Spark se os dados não cabem em nenhum nó ou se a organização já tem infra-estrutura Hadoop/HDFS.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 8 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo e do Curso</h2>
        <p style={S.p}>
          Este módulo fecha o ciclo: saber escrever código paralelo é necessário mas não suficiente — é preciso medir para saber onde optimizar e escolher o framework certo para a escala e natureza do problema.
        </p>

        <div style={{ ...S.highlight, borderRadius: 10, marginBottom: '1.5rem' }}>
          <p style={{ ...S.p, fontWeight: 700, marginBottom: '0.5rem' }}>Resumo completo do curso (PAR1 – PAR8):</p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 2.1, margin: 0 }}>
            <li><strong>PAR1 — Fundamentos de Paralelismo:</strong> Lei de Amdahl, Lei de Gustafson, taxonomia Flynn (SIMD/MIMD), granularidade de tarefas e overhead de sincronização.</li>
            <li><strong>PAR2 — Threads e Processos:</strong> Modelo de memória partilhada, GIL do Python, <code>threading</code> vs <code>multiprocessing</code>, race conditions, locks e semáforos.</li>
            <li><strong>PAR3 — OpenMP e SIMD:</strong> Directivas <code>#pragma omp parallel</code>, vectorização automática e intrínsecas AVX/AVX-512, false sharing e padding na cache L1.</li>
            <li><strong>PAR4 — MPI e Comunicação Distribuída:</strong> Modelo de passagem de mensagens, operações ponto-a-ponto e colectivas (Reduce, Broadcast, AllReduce), topologias de comunicação.</li>
            <li><strong>PAR5 — CUDA e Programação GPU:</strong> Hierarquia thread/block/grid, memória global vs partilhada vs registos, coalescing de acessos e optimização de kernels.</li>
            <li><strong>PAR6 — Frameworks Python:</strong> Dask (lazy evaluation), Ray (Tasks/Actors), Spark (DataFrames distribuídos), JAX (jit/vmap/pmap), PyTorch DDP/FSDP.</li>
            <li><strong>PAR7 — Hierarquia de Memória e Optimização:</strong> Cache L1/L2/L3, bandwidth vs latência, prefetching, blocking/tiling para reutilização de cache, NUMA.</li>
            <li><strong>PAR8 — Profiling e Frameworks Modernos:</strong> Ciclo medir→identificar→optimizar→medir; cProfile, line_profiler, snakeviz, Nsight Systems/Compute, perf, VTune; guia de decisão Dask/Ray/Spark.</li>
          </ul>
        </div>

        <div style={{ ...S.note, fontSize: '0.95rem', padding: '1rem 1.25rem' }}>
          <strong>Princípio fundamental do HPC moderno:</strong> O HPC moderno é heterogéneo — CPU + GPU + acelerador; dominar a hierarquia de memória é mais valioso do que conhecer qualquer framework específica. Um programa que ignora a cache e a largura de banda de memória nunca será rápido, independentemente do framework utilizado.
        </div>

        <div style={S.math}>
          <BlockMath math="\\text{Speedup real} \\leq \\min\\!\\left(S_{\\text{Amdahl}},\\; \\frac{\\text{Bandwidth}_{\\text{pico}}}{\\text{Bandwidth}_{\\text{necessário}}}\\right)" />
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          O speedup efectivo é sempre limitado pelo menor dos dois tectos: a fracção paralela (Amdahl) e a largura de banda disponível (Roofline Model). Conhecer ambos os limites antes de começar a optimizar é o que separa o engenheiro de HPC experiente do principiante.
        </p>
      </div>
    </div>
  );
}
