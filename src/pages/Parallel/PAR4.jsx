import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    color: 'var(--text-secondary)', textDecoration: 'none',
    fontSize: '0.9rem', marginBottom: '2.5rem',
  },
  tag: {
    display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`,
    fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem',
    borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', margin: '1.25rem 0', overflowX: 'auto' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 1.25rem', margin: '1rem 0', overflowX: 'auto' },
};

/* ── SVG: Fork-Join Timeline ── */
function ForkJoinSVG() {
  const W = 820, H = 260;
  const amber = '#f97316';
  const threads = ['#f97316', '#f97316', '#f97316', '#f97316'];
  const forkX = 160, joinX = 640;
  const masterY = 40;
  const threadYs = [100, 140, 180, 220];
  // Nested fork inside thread 2
  const nestedForkX = 350, nestedJoinX = 500;
  const nestedY1 = 152, nestedY2 = 168;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      {/* Master before fork */}
      <line x1={20} y1={masterY} x2={forkX} y2={masterY} stroke={amber} strokeWidth={3} />
      {/* Fork lines */}
      {threadYs.map((y, i) => (
        <line key={i} x1={forkX} y1={masterY} x2={forkX} y2={y} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 3" />
      ))}
      {/* Parallel thread lines */}
      {threadYs.map((y, i) => (
        <line key={i} x1={forkX} y1={y} x2={joinX} y2={y} stroke={threads[i]} strokeWidth={2.5} />
      ))}
      {/* Nested fork on thread index 1 (y=140) */}
      <line x1={nestedForkX} y1={140} x2={nestedForkX} y2={nestedY1} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 2" />
      <line x1={nestedForkX} y1={140} x2={nestedForkX} y2={nestedY2} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 2" />
      <line x1={nestedForkX} y1={nestedY1} x2={nestedJoinX} y2={nestedY1} stroke="#fbbf24" strokeWidth={1.5} />
      <line x1={nestedForkX} y1={nestedY2} x2={nestedJoinX} y2={nestedY2} stroke="#fbbf24" strokeWidth={1.5} />
      <line x1={nestedJoinX} y1={nestedY1} x2={nestedJoinX} y2={nestedY2} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 2" />
      {/* Join lines */}
      {threadYs.map((y, i) => (
        <line key={i} x1={joinX} y1={y} x2={joinX} y2={masterY} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 3" />
      ))}
      {/* Master after join */}
      <line x1={joinX} y1={masterY} x2={W - 20} y2={masterY} stroke={amber} strokeWidth={3} />
      {/* Implicit barrier marker */}
      <rect x={joinX - 4} y={masterY - 10} width={8} height={H - masterY - 10} fill="rgba(249,115,22,0.10)" rx={2} />
      {/* Labels */}
      <text x={20} y={masterY - 10} fill="var(--text-secondary)" fontSize={11}>Thread mestre</text>
      <text x={forkX + 8} y={masterY - 10} fill={amber} fontSize={11} fontWeight="700">fork</text>
      <text x={joinX + 8} y={masterY - 10} fill={amber} fontSize={11} fontWeight="700">join</text>
      <text x={joinX - 2} y={H - 4} fill="rgba(249,115,22,0.10)" fontSize={10}>barreira implícita</text>
      {threadYs.map((y, i) => (
        <text key={i} x={forkX + 8} y={y - 5} fill={threads[i]} fontSize={10}>T{i}</text>
      ))}
      <text x={nestedForkX + 4} y={nestedY1 - 4} fill="#fbbf24" fontSize={9}>aninhado</text>
      {/* Dots master start/end */}
      <circle cx={20} cy={masterY} r={5} fill={amber} />
      <circle cx={W - 20} cy={masterY} r={5} fill={amber} />
    </svg>
  );
}

/* ── SVG: Static scheduling — 16 iterations across 4 threads ── */
function StaticScheduleSVG() {
  const colors = ['#f97316', '#f59e0b', '#fb923c', '#fbbf24'];
  const bw = 38, bh = 28, gap = 2;
  const iters = Array.from({ length: 16 }, (_, i) => i);
  return (
    <svg viewBox="0 0 660 80" width="100%" style={{ display: 'block' }}>
      <text x={4} y={16} fill="var(--text-secondary)" fontSize={11} fontWeight="600">Escalonamento estático (chunk=4)</text>
      {iters.map(i => {
        const thread = Math.floor(i / 4);
        const col = i % 16;
        return (
          <g key={i}>
            <rect x={col * (bw + gap) + 4} y={24} width={bw} height={bh} fill={colors[thread]} rx={3} opacity={0.9} />
            <text x={col * (bw + gap) + 4 + bw / 2} y={24 + bh / 2 + 4} fill="#1e293b" fontSize={10} fontWeight="700" textAnchor="middle">{i}</text>
          </g>
        );
      })}
      {colors.map((c, i) => (
        <g key={i}>
          <rect x={4 + i * 100} y={58} width={14} height={10} fill={c} rx={2} />
          <text x={22 + i * 100} y={67} fill="var(--text-secondary)" fontSize={10}>Thread {i}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG: Three scheduling modes side by side ── */
function SchedulingDiagramSVG() {
  const colors = ['#f97316', '#f59e0b', '#fb923c', '#fbbf24'];
  // static: 4 equal blocks; dynamic: first-come; guided: decreasing
  const staticAssign = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3];
  // dynamic: simulate out-of-order pick (unbalanced workload => some get more)
  const dynamicAssign = [0,1,2,3,0,2,3,1,0,3,2,0,1,3,2,1];
  // guided: chunks 5,4,3,2,1,1
  const guidedAssign = [0,0,0,0,0,1,1,1,1,2,2,2,3,3,3,3];

  const renderRow = (assign, label, yOff) => {
    const bw = 34, gap = 1;
    return (
      <g transform={`translate(0,${yOff})`}>
        <text x={4} y={14} fill="var(--text-secondary)" fontSize={10} fontWeight="600">{label}</text>
        {assign.map((t, i) => (
          <g key={i}>
            <rect x={4 + i * (bw + gap)} y={20} width={bw} height={22} fill={colors[t]} rx={2} opacity={0.9} />
            <text x={4 + i * (bw + gap) + bw / 2} y={35} fill="#1e293b" fontSize={9} fontWeight="700" textAnchor="middle">{i}</text>
          </g>
        ))}
      </g>
    );
  };

  return (
    <svg viewBox="0 0 580 160" width="100%" style={{ display: 'block' }}>
      {renderRow(staticAssign, 'Estático (static, chunk=4)', 4)}
      {renderRow(dynamicAssign, 'Dinâmico (dynamic) — carga desequilibrada', 58)}
      {renderRow(guidedAssign, 'Guiado (guided) — chunks decrescentes', 112)}
    </svg>
  );
}

/* ── Reduction diagram ──────────────────────────────────────────────── */
function ReductionSVG() {
  const threads = [
    { c: '#f97316', label: 'sum_0', sub: 'Thread 0' },
    { c: '#f59e0b', label: 'sum_1', sub: 'Thread 1' },
    { c: '#fb923c', label: 'sum_2', sub: 'Thread 2' },
    { c: '#fbbf24', label: 'sum_3', sub: 'Thread 3' },
  ];
  return (
    <div style={{ ...S.diagram, padding: '1.2rem 1.4rem' }}>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem' }}>
        Reduction: soma parcial por thread → barreira → acumulação
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {/* Thread partial sum boxes */}
        <div style={{ display: 'flex', gap: '0.6rem', flex: 1 }}>
          {threads.map(({ c, label, sub }) => (
            <div key={label} style={{ flex: 1, border: `2px solid ${c}`, borderRadius: 8, padding: '0.5rem 0.3rem', textAlign: 'center', background: `${c}18` }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: c, fontFamily: 'monospace' }}>{label}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: 2 }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* converging arrow */}
        <svg width="60" height="80" viewBox="0 0 60 80" style={{ flexShrink: 0 }}>
          <defs>
            <marker id="redArr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L0,7 L7,3.5 z" fill="#94a3b8" />
            </marker>
          </defs>
          {[10, 27, 43, 60].map((y, i) => (
            <line key={i} x1={0} y1={y} x2={44} y2={40}
              stroke={threads[i].c} strokeWidth="1.5" strokeDasharray="4,2"
              markerEnd="url(#redArr)" />
          ))}
        </svg>

        {/* barrier */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>barreira</div>
          <div style={{ width: 10, height: 70, background: 'rgba(249,115,22,0.15)', border: '1.5px solid rgba(249,115,22,0.4)', borderRadius: 4 }} />
        </div>

        {/* arrow to result */}
        <svg width="36" height="20" viewBox="0 0 36 20" style={{ flexShrink: 0 }}>
          <defs>
            <marker id="redArr2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L0,7 L7,3.5 z" fill="#f97316" />
            </marker>
          </defs>
          <line x1="0" y1="10" x2="30" y2="10" stroke="#f97316" strokeWidth="2" markerEnd="url(#redArr2)" />
        </svg>

        {/* result */}
        <div style={{ background: '#f97316', borderRadius: 8, padding: '0.6rem 1rem', textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>Σ total</div>
          <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>master thread</div>
        </div>
      </div>

      {/* formula */}
      <div style={{ marginTop: '0.9rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
        <span style={{ fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '3px 10px', borderRadius: 4, border: '1px solid var(--card-border)' }}>
          total = sum_0 + sum_1 + sum_2 + sum_3
        </span>
      </div>
    </div>
  );
}

/* ── SVG: Task DAG — Fibonacci tree ── */
function TaskDAGSVG() {
  const amber = '#f97316';
  const nodeR = 18;
  const nodes = [
    { id: 'fib5', x: 300, y: 30, label: 'fib(5)' },
    { id: 'fib4', x: 180, y: 90, label: 'fib(4)' },
    { id: 'fib3a', x: 420, y: 90, label: 'fib(3)' },
    { id: 'fib3b', x: 110, y: 160, label: 'fib(3)' },
    { id: 'fib2a', x: 250, y: 160, label: 'fib(2)' },
    { id: 'fib2b', x: 360, y: 160, label: 'fib(2)' },
    { id: 'fib1a', x: 480, y: 160, label: 'fib(1)' },
    { id: 'fib2c', x: 60,  y: 230, label: 'fib(2)' },
    { id: 'fib1b', x: 160, y: 230, label: 'fib(1)' },
  ];
  const edges = [
    ['fib5','fib4'], ['fib5','fib3a'],
    ['fib4','fib3b'], ['fib4','fib2a'],
    ['fib3a','fib2b'], ['fib3a','fib1a'],
    ['fib3b','fib2c'], ['fib3b','fib1b'],
  ];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  return (
    <svg viewBox="0 0 580 280" width="100%" style={{ display: 'block' }}>
      <text x={4} y={14} fill="var(--text-secondary)" fontSize={11} fontWeight="600">DAG de tarefas OpenMP — Fibonacci recursivo</text>
      {edges.map(([a, b], i) => {
        const na = byId[a], nb = byId[b];
        return <line key={i} x1={na.x} y1={na.y + nodeR} x2={nb.x} y2={nb.y - nodeR} stroke="#94a3b8" strokeWidth={1.5} markerEnd="url(#arr)" />;
      })}
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
        </marker>
      </defs>
      {nodes.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={nodeR} fill={amber} opacity={0.85} />
          <text x={n.x} y={n.y + 4} fill="#fff" fontSize={9.5} textAnchor="middle">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function PAR4() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>
      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>OpenMP — Memória Partilhada e Paralelismo de Threads</h1>
      <p style={S.lead}>
        OpenMP é a API de facto para programação paralela em memória partilhada. Baseada em directivas de compilador (<code>#pragma omp</code>), permite paralelizar código C, C++ e Fortran com alterações mínimas, tirando partido de todos os núcleos de um processador multicore ou de um nó NUMA.
      </p>

      {/* ── SECÇÃO 1: Modelo Fork-Join ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Modelo Fork-Join</h2>
        <p style={S.p}>
          O modelo de execução OpenMP assenta no paradigma <strong>fork-join</strong>: o programa começa com uma única <em>thread mestre</em>. Ao encontrar uma região paralela (<code>#pragma omp parallel</code>), a thread mestre faz <strong>fork</strong> e cria uma equipa de threads. No fim da região existe uma <strong>barreira implícita</strong> após a qual todas as threads são sincronizadas e a equipa é dissolvida (join), retornando ao fluxo sequencial.
        </p>
        <div style={S.diagram}>
          <ForkJoinSVG />
        </div>
        <p style={S.p}>
          O paralelismo pode ser <strong>aninhado</strong> (<em>nested parallelism</em>): uma thread de uma equipa pode, ela própria, criar uma sub-equipa. Por omissão o aninhamento está desactivado; activa-se com <code>OMP_NESTED=true</code> ou <code>omp_set_nested(1)</code>.
        </p>
        <div style={S.math}>
          <BlockMath math={String.raw`T_p = T_1 / p + T_\infty \quad\Rightarrow\quad S_p = \frac{T_1}{T_p}`} />
        </div>
        <p style={S.p}>
          Onde <InlineMath math="T_1" /> é o tempo sequencial, <InlineMath math="p" /> o número de threads e <InlineMath math="T_\infty" /> o caminho crítico (span). A lei de Amdahl limita o speedup a <InlineMath math="S \leq 1/(1-f)" /> sendo <InlineMath math="f" /> a fracção paralelizável.
        </p>
        <div style={S.note}>
          Definir o número de threads: variável de ambiente <code>OMP_NUM_THREADS=8</code>, cláusula <code>num_threads(n)</code>, ou chamada <code>omp_set_num_threads(n)</code> (ordem de precedência crescente).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 2: Directivas Básicas ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Directivas Básicas</h2>
        <p style={S.p}>
          As directivas OpenMP controlam a criação de regiões paralelas, a partilha de iterações de ciclos e o modo como as variáveis são vistas pelas threads.
        </p>

        <p style={S.p}><strong>Olá Mundo paralelo</strong> — cada thread executa o bloco inteiro:</p>

        <p style={S.p}><strong>Partilha de iterações de ciclo</strong> — <code>#pragma omp for</code> distribui as iterações:</p>

        <p style={S.p}><strong>Partilha de variáveis</strong> — por omissão a maioria das variáveis é <code>shared</code>; variáveis de iteração do ciclo são <code>private</code> automaticamente:</p>

        <div style={S.diagram}>
          <StaticScheduleSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Escalonamento estático com chunk=4: as 16 iterações são distribuídas em blocos contíguos de 4 por cada thread, em round-robin.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Cláusula</th>
              <th style={S.th}>Significado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['shared(var)', 'Variável partilhada — todas as threads acedem à mesma localização de memória'],
              ['private(var)', 'Cada thread tem uma cópia privada (não inicializada)'],
              ['firstprivate(var)', 'Cópia privada inicializada com o valor exterior à região'],
              ['lastprivate(var)', 'Após o ciclo, a variável exterior recebe o valor da última iteração'],
              ['default(none)', 'Obriga a declarar explicitamente a classe de cada variável (boa prática)'],
            ].map(([c, d]) => (
              <tr key={c}>
                <td style={S.td}><code>{c}</code></td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Boa prática:</strong> usar <code>default(none)</code> obriga o programador a classificar explicitamente cada variável, evitando condições de corrida silenciosas causadas por variáveis <code>shared</code> acidentais.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 3: Reduction ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Cláusula Reduction</h2>
        <p style={S.p}>
          A cláusula <code>reduction</code> permite combinar resultados parciais de várias threads <strong>sem condições de corrida</strong>. Cada thread recebe uma cópia privada da variável, inicializada com o elemento neutro do operador. No fim da região, todas as cópias são combinadas com o operador e o resultado é escrito na variável partilhada original.
        </p>
        <div style={S.diagram}>
          <ReductionSVG />
        </div>
        <div style={S.math}>
          <BlockMath math={String.raw`\text{sum} = \sum_{i=0}^{N-1} a_i \cdot b_i \;=\; \sum_{t=0}^{p-1} \underbrace{\left(\sum_{i \in \text{chunk}_t} a_i \cdot b_i\right)}_{\text{sum}_t}`} />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Operador</th>
              <th style={S.th}>Valor neutro</th>
              <th style={S.th}>Uso</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['+', '0', 'Soma'],
              ['*', '1', 'Produto'],
              ['min', 'DBL_MAX', 'Mínimo'],
              ['max', '-DBL_MAX', 'Máximo'],
              ['&&', '1', 'AND lógico'],
              ['||', '0', 'OR lógico'],
              ['&', '~0', 'AND bitwise'],
              ['|', '0', 'OR bitwise'],
              ['^', '0', 'XOR bitwise'],
            ].map(([op, neutral, use]) => (
              <tr key={op}>
                <td style={S.td}><code>{op}</code></td>
                <td style={S.td}><code>{neutral}</code></td>
                <td style={S.td}>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Em C++ 11+ e OpenMP 4.0+, é possível definir operadores de reduction personalizados com <code>#pragma omp declare reduction</code>, útil para estruturas de dados como vectores ou árvores.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 4: Scheduling ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Scheduling — Escalonamento de Iterações</h2>
        <p style={S.p}>
          A cláusula <code>schedule</code> controla como as iterações de um ciclo paralelo são atribuídas às threads. A escolha afecta significativamente o balanceamento de carga, especialmente quando o trabalho por iteração é irregular.
        </p>
        <div style={S.diagram}>
          <SchedulingDiagramSVG />
        </div>
        <div style={S.math}>
          <p style={{ ...S.p, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tamanho do chunk guiado na iteração <InlineMath math="k" />:</p>
          <BlockMath math={String.raw`\text{chunk}_k = \max\!\left(\text{chunk\_min},\; \frac{N - \text{iterações\_feitas}}{p}\right)`} />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modo</th>
              <th style={S.th}>Overhead</th>
              <th style={S.th}>Balanceamento</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['static', 'Mínimo', 'Fixo', 'Iterações de custo uniforme'],
              ['dynamic', 'Médio-alto', 'Excelente', 'Carga muito irregular'],
              ['guided', 'Médio', 'Muito bom', 'Carga irregular moderada'],
              ['runtime', '—', '—', 'Afinar sem recompilar'],
              ['auto', 'Variável', 'Variável', 'Deixar ao compilador'],
            ].map(([m, o, b, w]) => (
              <tr key={m}>
                <td style={S.td}><code>{m}</code></td>
                <td style={S.td}>{o}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{w}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A ausência da cláusula <code>schedule</code> equivale a <code>schedule(static)</code> na maioria das implementações. Para perfis de carga desconhecidos, começar com <code>dynamic</code> e afinar com medições reais.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 5: Sincronização ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Sincronização</h2>
        <p style={S.p}>
          Quando várias threads acedem e modificam dados partilhados, é necessário sincronização para evitar condições de corrida. OpenMP oferece vários mecanismos com diferentes granularidades e custos.
        </p>

        <p style={S.p}><strong><code>#pragma omp critical</code></strong> — secção crítica com exclusão mútua (mutex):</p>

        <p style={S.p}><strong><code>#pragma omp atomic</code></strong> — operação atómica via instrução de hardware (mais eficiente que <code>critical</code> para operações simples):</p>

        <p style={S.p}><strong><code>#pragma omp barrier</code></strong> — ponto de sincronização explícito; todas as threads esperam:</p>

        <p style={S.p}><strong><code>#pragma omp single</code></strong> e <strong><code>#pragma omp master</code></strong> — executam um bloco em apenas uma thread:</p>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Comparação de performance:</strong></p>
          <p style={{ ...S.p, marginBottom: 0, fontSize: '0.95rem' }}>
            <code>atomic</code> usa instruções de hardware (LOCK XADD, CAS) — latência ~1-5 ciclos. <code>critical</code> usa mutex do sistema operativo — latência ~50-200 ciclos em caso de contenção. Para operações simples (++, +=), preferir sempre <code>atomic</code>.
          </p>
        </div>
        <div style={S.math}>
          <BlockMath math={String.raw`T_\text{sync} \approx n_\text{threads} \times t_\text{lock} \quad (\text{critical}) \qquad \text{vs} \qquad T_\text{sync} \approx t_\text{CAS} \quad (\text{atomic})`} />
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 6: Tasks ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Tasks — Paralelismo Irregular</h2>
        <p style={S.p}>
          As directivas <code>#pragma omp task</code> (OpenMP 3.0+) permitem expressar paralelismo <strong>irregular</strong> — algoritmos recursivos, travessia de árvores, quicksort, processamento de listas ligadas — onde o número e tamanho das unidades de trabalho não é conhecido em tempo de compilação.
        </p>
        <p style={S.p}>
          Uma <strong>task</strong> é uma unidade de trabalho que pode ser executada por qualquer thread disponível. A thread que encontra a directiva cria a task e pode suspender-se ou continuar; outra thread pode executar a task mais tarde.
        </p>

        <div style={S.diagram}>
          <TaskDAGSVG />
        </div>

        <p style={S.p}><strong>Dependências entre tasks</strong> — <code>depend</code> permite exprimir o DAG de dependências explicitamente (OpenMP 4.0+):</p>

        <div style={S.note}>
          A cláusula <code>if(cond)</code> numa task permite desactivar a criação de tasks abaixo de um limiar de granularidade, evitando overhead para subproblemas pequenos: <code>#pragma omp task if(n &gt; 20)</code>.
        </div>
        <div style={S.math}>
          <BlockMath math={String.raw`W = \sum_{k=0}^{n} T(k) \approx \Theta(\phi^n) \quad \text{(Fibonacci)} \quad \phi = \frac{1+\sqrt{5}}{2}`} />
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 7: Secções, SIMD e Offload ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Secções, SIMD e Offload para GPU</h2>

        <p style={S.p}>
          <strong><code>#pragma omp sections</code></strong> distribui blocos de código <em>independentes</em> pelas threads — útil para paralelismo de tarefas heterogéneas como produtor/consumidor:
        </p>

        <p style={S.p}>
          <strong><code>#pragma omp simd</code></strong> — dica ao compilador para vectorizar o ciclo com instruções SIMD (SSE, AVX, AVX-512). Pode ser combinada com <code>parallel for</code>:
        </p>

        <p style={S.p}>
          <strong><code>#pragma omp target</code></strong> (OpenMP 4.0+) — <em>offload</em> de regiões de código para acelerador (GPU, FPGA). Os dados são transferidos explicitamente com <code>map</code>:
        </p>

        <div style={S.note}>
          Compilar com suporte OpenMP: <code>gcc -fopenmp prog.c -o prog</code>. Para offload GPU (NVIDIA): <code>gcc -fopenmp -foffload=nvptx-none prog.c</code> ou usar LLVM/Clang com <code>-fopenmp-targets=nvptx64</code>.
        </div>

        <p style={{ ...S.p, marginTop: '1.5rem' }}><strong>Resumo de todas as principais construções OpenMP:</strong></p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Construção</th>
              <th style={S.th}>Propósito</th>
              <th style={S.th}>Cláusulas principais</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['parallel', 'Criar equipa de threads (região paralela)', 'num_threads, if, shared, private, firstprivate, default, reduction, copyin'],
              ['for', 'Distribuir iterações de ciclo pelas threads', 'schedule, nowait, ordered, collapse, reduction, lastprivate'],
              ['parallel for', 'parallel + for numa só directiva', 'Combinação de ambas as cláusulas'],
              ['sections', 'Distribuir blocos independentes por threads', 'nowait, reduction, private'],
              ['section', 'Marcar um bloco dentro de sections', '—'],
              ['single', 'Executar bloco numa só thread (qualquer)', 'nowait, private, copyprivate'],
              ['master', 'Executar bloco na thread mestre (tid=0)', '— (sem barreira implícita)'],
              ['critical', 'Secção crítica com mutex', 'hint (tipo de lock)'],
              ['atomic', 'Operação atómica hardware', 'read, write, update, capture'],
              ['barrier', 'Barreira de sincronização explícita', '—'],
              ['task', 'Criar unidade de trabalho assíncrona', 'if, shared, private, firstprivate, default, depend, priority, untied'],
              ['taskwait', 'Aguardar tasks filhas', 'depend'],
              ['taskgroup', 'Aguardar todas as tasks do grupo', '—'],
              ['simd', 'Vectorização SIMD do ciclo', 'reduction, safelen, linear, aligned'],
              ['target', 'Offload de região para acelerador (GPU)', 'map, device, nowait, depend'],
              ['teams', 'Criar múltiplas equipas no acelerador', 'num_teams, thread_limit, reduction'],
              ['declare reduction', 'Definir operador de reduction personalizado', '—'],
            ].map(([c, p, cl]) => (
              <tr key={c}>
                <td style={S.td}><code>#pragma omp {c}</code></td>
                <td style={S.td}>{p}</td>
                <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{cl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 8: Síntese ── */}
              <h2 style={{ ...S.h2, borderLeft: 'none', paddingLeft: 0, marginBottom: '0.75rem' }}>8. Síntese do Módulo</h2>
<div style={{ ...S.highlight, borderRadius: 10 }}>
        <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 2 }}>
          <li><strong>Modelo fork-join:</strong> thread mestre faz fork numa região <code>parallel</code>, cria equipa, barreira implícita no fim, join. Aninhamento possível mas desactivado por omissão.</li>
          <li><strong>Directivas básicas:</strong> <code>#pragma omp parallel for</code> distribui iterações; variáveis <code>private</code>/<code>shared</code>/<code>firstprivate</code>/<code>lastprivate</code> controlam visibilidade; <code>default(none)</code> é boa prática.</li>
          <li><strong>Reduction:</strong> cláusula <code>reduction(op:var)</code> elimina races em acumulações (soma, produto, min, max). Cada thread tem cópia privada; combinação na barreira final.</li>
          <li><strong>Scheduling:</strong> <code>static</code> (round-robin, baixo overhead), <code>dynamic</code> (fila global, melhor balanceamento), <code>guided</code> (chunks decrescentes, compromisso), <code>runtime</code> (configurável via <code>OMP_SCHEDULE</code>).</li>
          <li><strong>Sincronização:</strong> <code>critical</code> usa mutex (custo elevado); <code>atomic</code> usa hardware (preferível para ops simples); <code>barrier</code> sincroniza todas as threads; <code>single</code> executa em uma thread com barreira; <code>master</code> executa na mestre sem barreira.</li>
          <li><strong>Tasks:</strong> <code>#pragma omp task</code> para paralelismo irregular (recursão, grafos); <code>taskwait</code> aguarda filhas; <code>depend</code> define DAG de dependências; <code>if(n&gt;k)</code> evita overhead em problemas pequenos.</li>
          <li><strong>Secções/SIMD/Offload:</strong> <code>sections</code> para blocos heterogéneos; <code>simd</code> para vectorização; <code>target</code>/<code>teams</code> para GPU.</li>
        </ul>
        <div style={{ ...S.math, marginTop: '1rem' }}>
          <BlockMath math={String.raw`\text{Speedup ideal} = \min\!\left(p,\; \frac{1}{1-f}\right) \quad\text{(Lei de Amdahl)}`} />
        </div>
      </div>
    </div>
  );
}
