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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', margin: '1.25rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'auto' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.5rem', margin: '1rem 0', textAlign: 'center', overflowX: 'auto' },
};

/* ─── Scalar loop vs AVX2 ─── */
function SvgSIMD() {
  const laneColors = ['#f97316','#f59e0b','#fb923c','#fbbf24','#ea580c','#f97316','#f59e0b','#fb923c'];

  const FloatChip = ({ i, c, big }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <div style={{ width: big ? 52 : 32, height: big ? 44 : 30, borderRadius: 6, background: `${c}22`, border: `2px solid ${c}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <div style={{ fontWeight: 800, fontSize: big ? '0.88rem' : '0.75rem', color: c }}>f{i}</div>
        {big && <div style={{ fontSize: '0.6rem', color: `${c}aa` }}>lane {i}</div>}
      </div>
      {!big && <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>c{i+1}</div>}
    </div>
  );

  return (
    <div style={{ ...S.diagram, gap: '1rem', alignItems: 'stretch' }}>

      {/* Scalar side */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Loop Escalar (8 ciclos)</div>
        {/* Sequential execution — stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 20, fontSize: '0.6rem', color: 'var(--text-secondary)', textAlign: 'right' }}>c{i+1}</div>
              <div style={{ width: 44, height: 18, borderRadius: 4, background: `${laneColors[i]}22`, border: `1.5px solid ${laneColors[i]}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: laneColors[i] }}>f{i}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#f97316' }}>1 float/instrução × 8 ciclos</div>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.5 }}>
          SSE: 4 floats (128-bit XMM)<br/>AVX-512: 16 floats (512-bit ZMM)<br/>ARM NEON: 128-bit
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 1, background: 'var(--card-border)', alignSelf: 'stretch' }} />

      {/* AVX2 side */}
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-secondary)', textAlign: 'center' }}>AVX2 — 1 instrução VADDPS (1 ciclo)</div>
        {/* All 8 lanes in parallel */}
        <div style={{ border: '2px solid #f97316', borderRadius: 8, padding: '8px 10px', background: 'rgba(249,115,22,0.06)', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: '0.65rem', color: '#f97316', textAlign: 'center', fontWeight: 600 }}>← registo YMM de 256-bit →</div>
          <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
            {[0,1,2,3,4,5,6,7].map(i => <FloatChip key={i} i={i} c={laneColors[i]} big />)}
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, color: '#f97316' }}>8 floats × 1 ciclo = 8× mais rápido</div>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
          Intel vs AMD: mesma ISA x86 AVX2 &nbsp;|&nbsp; Intel vs ARM: ISA distinta
        </div>
      </div>
    </div>
  );
}

/* ─── SVG: Python loop vs NumPy ─── */
function SvgNumPy() {
  return (
    <svg width="680" height="220" viewBox="0 0 680 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      <text x="160" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">Python loop — N elementos</text>
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x="20" y={26 + i*30} width="280" height="24" rx="4" fill="#f97316" opacity={0.55 + i*0.07} />
          <text x="160" y={43 + i*30} textAnchor="middle" fontSize="10" fill="#fff">
            {i < 4 ? `overhead interpretador → processa arr[${i}]` : '… (repete N vezes)'}
          </text>
        </g>
      ))}
      <text x="160" y="188" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">N chamadas ao interpretador = lento</text>
      <text x="160" y="203" textAnchor="middle" fontSize="10" fill="#94a3b8">np.vectorize() sofre do mesmo problema</text>

      <line x1="325" y1="10" x2="325" y2="215" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4,3" />

      <text x="510" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">NumPy — 1 chamada C</text>
      <rect x="345" y="36" width="320" height="136" rx="8" fill={color} opacity="0.13" stroke={color} strokeWidth="1.5" />
      <text x="505" y="85" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">np.sum(arr)</text>
      <text x="505" y="105" textAnchor="middle" fontSize="10" fill="#f97316">↓ uma chamada C / Fortran</text>
      <text x="505" y="121" textAnchor="middle" fontSize="10" fill="#f97316">processa todos os N elementos</text>
      <text x="505" y="137" textAnchor="middle" fontSize="10" fill="#f97316">com SIMD interno (AVX2 / OpenBLAS)</text>
      <text x="505" y="153" textAnchor="middle" fontSize="10" fill="#f97316">sem overhead por elemento</text>
      <text x="505" y="200" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">1 chamada Python → N elementos em C = 100× mais rápido</text>
    </svg>
  );
}

/* ─── SVG: Numba JIT compilation pipeline ─── */
function SvgNumbaJIT() {
  const boxes = [
    { label: 'Código\nPython', col: '#f97316' },
    { label: 'Numba\n@njit', col: '#f97316' },
    { label: 'LLVM IR\n(intermédio)', col: '#f97316' },
    { label: 'Código\nMáquina', col: color },
  ];
  return (
    <svg width="660" height="120" viewBox="0 0 660 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={10 + i*160} y="24" width="136" height="56" rx="8" fill={b.col} opacity="0.15" stroke={b.col} strokeWidth="1.5" />
          {b.label.split('\n').map((line, j) => (
            <text key={j} x={78 + i*160} y={50 + j*17} textAnchor="middle" fontSize="11" fontWeight="700" fill={b.col}>{line}</text>
          ))}
          {i < boxes.length - 1 && (
            <g>
              <line x1={148 + i*160} y1="52" x2={158 + i*160} y2="52" stroke="#94a3b8" strokeWidth="1.5" />
              <polygon points={`${156+i*160},48 ${164+i*160},52 ${156+i*160},56`} fill="#94a3b8" />
            </g>
          )}
        </g>
      ))}
      <text x="330" y="104" textAnchor="middle" fontSize="10" fill="#94a3b8">1ª chamada: compilação JIT (~1 s) → chamadas seguintes: velocidade C / Fortran</text>
    </svg>
  );
}

/* ─── SVG: prange cores ─── */
function SvgPrange() {
  return (
    <svg width="680" height="185" viewBox="0 0 680 185" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      <text x="340" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">numba.prange — 16 iterações distribuídas por 4 núcleos</text>
      <rect x="260" y="24" width="160" height="28" rx="6" fill="#f97316" opacity="0.18" stroke="#f97316" strokeWidth="1.2" />
      <text x="340" y="43" textAnchor="middle" fontSize="11" fontWeight="600" fill="#f97316">Numba Thread Pool</text>
      {[0,1,2,3].map(i => {
        const cx = 75 + i*175;
        return (
          <g key={i}>
            <line x1="340" y1="52" x2={cx} y2="78" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" />
            <rect x={cx - 65} y="80" width="130" height="28" rx="6" fill={color} opacity="0.18" stroke={color} strokeWidth="1.2" />
            <text x={cx} y="98" textAnchor="middle" fontSize="11" fontWeight="600" fill={color}>Core {i} — iter {i*4}–{i*4+3}</text>
          </g>
        );
      })}
      {[0,1,2,3].map(i => {
        const cx = 75 + i*175;
        return <line key={i} x1={cx} y1="108" x2="340" y2="148" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" />;
      })}
      <rect x="255" y="148" width="170" height="28" rx="6" fill="#f97316" opacity="0.18" stroke="#f97316" strokeWidth="1.2" />
      <text x="340" y="167" textAnchor="middle" fontSize="11" fontWeight="600" fill="#f97316">Redução / resultado final</text>
    </svg>
  );
}

/* ─── SVG: cuda.jit pipeline ─── */
function SvgCudaJIT() {
  const boxes = [
    { label: 'Python\n@cuda.jit', col: '#f97316' },
    { label: 'PTX\n(assembly GPU)', col: '#f97316' },
    { label: 'Kernel\nGPU Launch', col: '#f97316' },
    { label: 'GPU\n(milhares threads)', col: color },
  ];
  return (
    <svg width="660" height="130" viewBox="0 0 660 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      <text x="330" y="16" textAnchor="middle" fontSize="11" fill="#64748b">Fluxo: Python → cuda.jit → PTX → lançamento do kernel na GPU</text>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={10 + i*160} y="24" width="136" height="56" rx="8" fill={b.col} opacity="0.15" stroke={b.col} strokeWidth="1.5" />
          {b.label.split('\n').map((line, j) => (
            <text key={j} x={78 + i*160} y={50 + j*17} textAnchor="middle" fontSize="11" fontWeight="700" fill={b.col}>{line}</text>
          ))}
          {i < boxes.length - 1 && (
            <g>
              <line x1={148 + i*160} y1="52" x2={158 + i*160} y2="52" stroke="#94a3b8" strokeWidth="1.5" />
              <polygon points={`${156+i*160},48 ${164+i*160},52 ${156+i*160},56`} fill="#94a3b8" />
            </g>
          )}
        </g>
      ))}
      <text x="330" y="104" textAnchor="middle" fontSize="10" fill="#94a3b8">kernel[blocos, threads_por_bloco](d_a, d_b, d_c) — memória GPU explícita</text>
    </svg>
  );
}

/* ─── SVG: CuPy pipeline ─── */
function SvgCuPy() {
  const steps = [
    { label: 'Python\ncp.dot(a,b)', col: '#f97316' },
    { label: 'CuPy API\n(drop-in NumPy)', col: '#f97316' },
    { label: 'cuBLAS /\ncuFFT', col: '#f97316' },
    { label: 'GPU\nExecução', col: color },
    { label: 'Resultado\n→ CPU', col: '#f97316' },
  ];
  return (
    <svg width="700" height="130" viewBox="0 0 700 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      <text x="350" y="16" textAnchor="middle" fontSize="11" fill="#64748b">Pipeline CuPy: interface NumPy-compatível sobre bibliotecas CUDA da NVIDIA</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={8 + i*136} y="24" width="122" height="56" rx="7" fill={s.col} opacity="0.15" stroke={s.col} strokeWidth="1.5" />
          {s.label.split('\n').map((line, j) => (
            <text key={j} x={69 + i*136} y={50 + j*17} textAnchor="middle" fontSize="10" fontWeight="700" fill={s.col}>{line}</text>
          ))}
          {i < steps.length - 1 && (
            <g>
              <line x1={132 + i*136} y1="52" x2={140 + i*136} y2="52" stroke="#94a3b8" strokeWidth="1.5" />
              <polygon points={`${138+i*136},48 ${146+i*136},52 ${138+i*136},56`} fill="#94a3b8" />
            </g>
          )}
        </g>
      ))}
      <text x="350" y="104" textAnchor="middle" fontSize="10" fill="#94a3b8">Gargalo: transferência CPU↔GPU via PCIe — só vale para arrays grandes</text>
    </svg>
  );
}

/* ─── Decision flowchart ─── */
function SvgDecision() {
  // SVG-based flowchart for precise layout control
  const qW = 168, qH = 36, qR = 7;
  const tW = 148, tH = 36, tR = 10;
  const Q = ({ x, y, label }) => (
    <g>
      <rect x={x - qW/2} y={y - qH/2} width={qW} height={qH} rx={qR}
        fill="var(--bg-secondary)" stroke="#64748b" strokeWidth={1.5} />
      <text x={x} y={y + 4} textAnchor="middle" fontSize={10} fontWeight={600} fill="var(--text-secondary)">{label}</text>
    </g>
  );
  const T = ({ x, y, label, c }) => (
    <g>
      <rect x={x - tW/2} y={y - tH/2} width={tW} height={tH} rx={tR} fill={c} />
      <text x={x} y={y + 4} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1e293b">{label}</text>
    </g>
  );
  const Arr = ({ x1, y1, x2, y2, label, lx, ly }) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748b" strokeWidth={1.2} markerEnd="url(#dArr)" />
      {label && <text x={lx ?? (x1+x2)/2 + 6} y={ly ?? (y1+y2)/2 + 4} fontSize={9} fontWeight={600} fill="#f97316">{label}</text>}
    </g>
  );

  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 680 310" width="100%" style={{ display: 'block' }}>
        <defs>
          <marker id="dArr" markerWidth={7} markerHeight={7} refX={5} refY={3.5} orient="auto">
            <path d="M0,0 L7,3.5 L0,7 z" fill="#64748b" />
          </marker>
        </defs>

        {/* START pill */}
        <rect x={240} y={8} width={200} height={34} rx={17} fill="#f97316" />
        <text x={340} y={30} textAnchor="middle" fontSize={12} fontWeight={800} fill="#fff">Problema numérico</text>

        {/* start → Q1 */}
        <Arr x1={340} y1={42} x2={340} y2={72} />

        {/* Q1 */}
        <Q x={340} y={90} label="CPU ou GPU disponível?" />

        {/* Q1 → CPU branch */}
        <line x1={340} y1={108} x2={340} y2={120} stroke="#64748b" strokeWidth={1.2} />
        <line x1={175} y1={120} x2={340} y2={120} stroke="#64748b" strokeWidth={1.2} />
        <line x1={175} y1={120} x2={175} y2={138} stroke="#64748b" strokeWidth={1.2} markerEnd="url(#dArr)" />
        <text x={230} y={117} fontSize={9} fontWeight={600} fill="#f97316">CPU</text>

        {/* Q1 → GPU branch */}
        <line x1={340} y1={120} x2={510} y2={120} stroke="#64748b" strokeWidth={1.2} />
        <line x1={510} y1={120} x2={510} y2={138} stroke="#64748b" strokeWidth={1.2} markerEnd="url(#dArr)" />
        <text x={420} y={117} fontSize={9} fontWeight={600} fill="#f97316">GPU</text>

        {/* Q2 CPU */}
        <Q x={175} y={156} label="Operações sobre arrays?" />

        {/* Q2 CPU → Sim (NumPy) */}
        <line x1={175} y1={174} x2={175} y2={186} stroke="#64748b" strokeWidth={1.2} />
        <line x1={90}  y1={186} x2={175} y2={186} stroke="#64748b" strokeWidth={1.2} />
        <line x1={90}  y1={186} x2={90}  y2={204} stroke="#64748b" strokeWidth={1.2} markerEnd="url(#dArr)" />
        <text x={100} y={183} fontSize={9} fontWeight={600} fill="#f97316">Sim</text>

        {/* Q2 CPU → Não → Loop? */}
        <line x1={175} y1={186} x2={265} y2={186} stroke="#64748b" strokeWidth={1.2} />
        <line x1={265} y1={186} x2={265} y2={204} stroke="#64748b" strokeWidth={1.2} markerEnd="url(#dArr)" />
        <text x={200} y={183} fontSize={9} fontWeight={600} fill="#f97316">Não</text>

        <T x={90}  y={222} label="NumPy / ufuncs"          c="#f97316" />
        <Q x={265} y={222} label="Loop numérico custom?" />

        {/* Loop? → Sim → Numba */}
        <Arr x1={265} y1={240} x2={265} y2={258} label="Sim" lx={270} ly={252} />
        <T x={265} y={276} label="Numba @njit / parallel=True" c="#fb923c" />

        {/* Q2 GPU */}
        <Q x={510} y={156} label="Array ops simples?" />

        {/* GPU → Sim → CuPy */}
        <Arr x1={510} y1={174} x2={510} y2={204} label="Sim" lx={515} ly={192} />
        <T x={510} y={222} label="CuPy" c="#f59e0b" />

        {/* CuPy → Não → cuda.jit */}
        <Arr x1={510} y1={240} x2={510} y2={258} label="Não" lx={515} ly={252} />
        <T x={510} y={276} label="@cuda.jit (kernel custom)" c="#fbbf24" />

        {/* Legend */}
        <text x={340} y={300} textAnchor="middle" fontSize={9} fill="#64748b">Fluxo simplificado — considere tamanho dos dados e overhead de transferência PCIe</text>
      </svg>
    </div>
  );
}

export default function PAR7() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>
      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Vectorização e Numba</h1>
      <p style={S.lead}>
        Da instrução SIMD no núcleo da CPU ao kernel CUDA em Python — neste módulo percorremos toda a hierarquia de vectorização: extensões AVX do processador, NumPy e as suas ufuncs em C, compilação JIT com Numba, paralelização automática com <code>prange</code>, e programação directa da GPU com <code>@cuda.jit</code> e CuPy.
      </p>

      {/* ══════════════════════════════ SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. SIMD — Single Instruction, Multiple Data</h2>
        <p style={S.p}>
          As CPUs modernas incluem extensões vectoriais que permitem aplicar a <strong>mesma instrução</strong> a vários valores em simultâneo, processando-os em paralelo dentro de um único núcleo. É o nível mais baixo de vectorização — nativo no hardware.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Extensão</th>
              <th style={S.th}>Largura do registo</th>
              <th style={S.th}>Floats de 32-bit</th>
              <th style={S.th}>Fabricante / Plataforma</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['SSE / SSE2', '128-bit (XMM)', '4 floats', 'Intel / AMD (2000+)'],
              ['AVX / AVX2', '256-bit (YMM)', '8 floats', 'Intel / AMD (2013+)'],
              ['AVX-512', '512-bit (ZMM)', '16 floats', 'Intel Xeon / AMD Zen 4'],
              ['ARM NEON', '128-bit', '4 floats', 'ARM Cortex-A, Apple M-series'],
            ].map(([ext, w, f, fab]) => (
              <tr key={ext}>
                <td style={S.td}><strong>{ext}</strong></td>
                <td style={S.td}>{w}</td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{fab}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.math}>
          <BlockMath math={"\\text{Speedup}_{\\text{SIMD}} = \\frac{\\text{largura do registo (bits)}}{\\text{tamanho do elemento (bits)}} = \\frac{256}{32} = 8\\times \\;\\text{(AVX2, floats de 32-bit)}"} />
        </div>

        <div style={S.diagram}>
          <SvgSIMD />
        </div>

        <div style={S.note}>
          <strong>Auto-vectorização pelo compilador:</strong> com <code>-O2 -march=native</code>, o GCC/Clang analisa os loops e emite instruções AVX automaticamente. Funciona bem em loops simples com iterações independentes. Falha com ponteiros <em>aliased</em>, condicionais complexos ou dependências de dados entre iterações consecutivas.
        </div>
        <p style={S.p}>
          Em Python, a vectorização SIMD é explorada indirectamente por NumPy (via OpenBLAS / MKL) e Numba (via LLVM), sem que o programador escreva uma única linha de <em>assembly</em>. Intel e ARM usam ISAs distintas, mas o conceito de registos vectoriais largos é idêntico.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════ SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Vectorização com NumPy</h2>
        <p style={S.p}>
          O interpretador CPython tem um overhead por operação que torna os loops Python lentos para cálculo numérico. <strong>NumPy</strong> contorna isto: as operações são implementadas em C/Fortran e o Python faz apenas uma chamada que processa todo o array de uma vez, explorando SIMD internamente.
        </p>

        <div style={S.diagram}>
          <SvgNumPy />
        </div>

        <div style={S.math}>
          <BlockMath math={"t_{\\text{NumPy}} \\approx t_{\\text{overhead\\_C}} + N \\cdot t_{\\text{SIMD}} \\;\\ll\\; t_{\\text{Python\\_loop}} = N \\cdot \\bigl(t_{\\text{overhead\\_interp}} + t_{\\text{op}}\\bigr)"} />
        </div>

        <p style={S.p}><strong>Broadcasting</strong> permite operar sobre arrays de formas diferentes sem copiar dados:</p>
        <div style={S.code}>{`import numpy as np
import time

N = 10_000_000
arr = np.random.rand(N)

# ── Python loop puro ────────────────────────────────────────────
t0 = time.perf_counter()
total = 0.0
for x in arr:
    total += x
t_loop = time.perf_counter() - t0

# ── NumPy sum ────────────────────────────────────────────────────
t0 = time.perf_counter()
total_np = np.sum(arr)
t_np = time.perf_counter() - t0

# ── Broadcasting: normalização por coluna (sem loop explícito) ───
mat = np.random.rand(1000, 1000)
col_mean = mat.mean(axis=0)          # shape (1000,)
mat_norm  = mat - col_mean           # broadcast: (1000,1000) - (1000,)

print(f"Loop Python : {t_loop:.3f} s")
print(f"NumPy sum   : {t_np:.4f} s  (≈ {t_loop/t_np:.0f}× mais rápido)")`}
        </div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Universal Functions (ufuncs)</strong> — operam elemento a elemento com SIMD interno:</p>
          <div style={S.code}>{`np.sin(arr)        # ufunc — processa N floats em C
np.exp(arr)
np.sqrt(arr)
np.add(a, b)       # equivalente a a + b, mais controlável
np.dot(A, B)       # BLAS dgemm / sgemm — altamente optimizado`}
          </div>
        </div>

        <p style={S.p}><strong>Anti-padrões que destroem a vectorização:</strong></p>
        <div style={S.code}>{`# ✗ Loop Python com indexação NumPy — overhead por elemento
result = np.zeros(N)
for i in range(N):
    result[i] = arr[i]**2 + np.sin(arr[i])

# ✓ Vectorizado — uma expressão NumPy
result = arr**2 + np.sin(arr)

# ✗ Append em loop (realoca memória N vezes)
lst = []
for x in arr:
    lst.append(x * 2)
result = np.array(lst)

# ✓ Operação directa
result = arr * 2

# ✗ np.vectorize NÃO vectoriza de verdade (loop Python interno)
vfunc = np.vectorize(lambda x: x**2 if x > 0 else 0)
result = vfunc(arr)   # lento!

# ✓ Usar np.where para condicionais vectorizados
result = np.where(arr > 0, arr**2, 0)`}
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════ SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Numba @jit — Compilação JIT</h2>
        <p style={S.p}>
          <strong>Numba</strong> usa o compilador <strong>LLVM</strong> para compilar funções Python em código máquina nativo em tempo de execução. Ao contrário de NumPy, Numba não exige reescrita em estilo vectorizado — compila loops Python directos para instruções CPU optimizadas.
        </p>
        <p style={S.p}>
          O decorador <code>@numba.njit</code> (equivalente a <code>@numba.jit(nopython=True)</code>) força compilação sem recorrer ao interpretador Python. Na primeira chamada, Numba infere os tipos e compila; nas seguintes reutiliza o binário.
        </p>

        <div style={S.diagram}>
          <SvgNumbaJIT />
        </div>

        <div style={S.code}>{`import numba
import numpy as np
import time

# ── Python puro ──────────────────────────────────────────────────
def soma_quadrados_python(arr):
    total = 0.0
    for x in arr:
        total += x * x
    return total

# ── Numba @njit ──────────────────────────────────────────────────
@numba.njit
def soma_quadrados_numba(arr):
    total = 0.0
    for i in range(len(arr)):
        total += arr[i] * arr[i]
    return total

arr = np.random.rand(10_000_000)

soma_quadrados_numba(arr)          # warmup — primeira chamada compila

t0 = time.perf_counter()
soma_quadrados_python(arr)
t_py = time.perf_counter() - t0

t0 = time.perf_counter()
soma_quadrados_numba(arr)
t_nb = time.perf_counter() - t0

print(f"Python puro : {t_py:.3f} s")
print(f"Numba @njit : {t_nb:.4f} s  (≈ {t_py/t_nb:.0f}× mais rápido)")`}
        </div>

        <div style={S.math}>
          <BlockMath math={"t_{\\text{total}} = \\underbrace{t_{\\text{compilação JIT}}}_{\\approx 1\\,\\text{s, 1ª chamada}} + n \\cdot t_{\\text{execução nativa}} \\approx t_{\\text{compilação}} + n \\cdot t_{C}"} />
        </div>

        <div style={S.note}>
          <strong>Quando usar Numba @njit:</strong> algoritmos com loops numéricos complexos (simulações, solvers, raycasting) que não se vectorizam naturalmente com NumPy. Para operações simples sobre arrays, NumPy já é suficiente e mais simples. Use <code>cache=True</code> para persistir o binário compilado em <code>__pycache__</code> e evitar recompilar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════ SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Numba @njit Paralelo e prange</h2>
        <p style={S.p}>
          Combinando <code>@numba.njit(parallel=True)</code> com <code>numba.prange</code>, Numba distribui automaticamente as iterações do loop pelos núcleos disponíveis via um <em>thread pool</em> interno. Não é necessário gerir threads, locks ou sincronização — o compilador faz-o.
        </p>

        <div style={S.diagram}>
          <SvgPrange />
        </div>

        <div style={S.code}>{`import numba
import numpy as np
import time

@numba.njit(parallel=True, fastmath=True, cache=True)
def matrix_norm_rows(A):
    """Norma L2 de cada linha de A, calculada em paralelo."""
    n, m = A.shape
    result = np.empty(n)
    for i in numba.prange(n):       # prange → paralelizado por Numba
        s = 0.0
        for j in range(m):
            s += A[i, j] * A[i, j]
        result[i] = s ** 0.5
    return result

A = np.random.rand(10_000, 2_000).astype(np.float32)
matrix_norm_rows(A)                 # warmup / compilação

t0 = time.perf_counter()
norms = matrix_norm_rows(A)
print(f"Tempo paralelo : {time.perf_counter()-t0:.4f} s")
print(f"Shape resultado: {norms.shape}")`}
        </div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Flags importantes:</strong></p>
          <p style={{ ...S.p, marginBottom: '0.3rem' }}>• <code>parallel=True</code> — activa <code>prange</code> e auto-paralelização de reduções NumPy.</p>
          <p style={{ ...S.p, marginBottom: '0.3rem' }}>• <code>fastmath=True</code> — permite reordenações de ponto flutuante (IEEE 754 relaxado) para mais velocidade; pode introduzir erros numéricos de arredondamento.</p>
          <p style={{ ...S.p, marginBottom: 0 }}>• <code>cache=True</code> — grava o binário compilado em disco; elimina warmup em execuções futuras.</p>
        </div>

        <div style={S.math}>
          <BlockMath math={"\\text{Speedup ideal prange} = N_{\\text{cores}} \\quad \\text{(com iterações completamente independentes)}"} />
        </div>

        <div style={S.note}>
          <strong>Limitação:</strong> <code>prange</code> só paraleliza correctamente loops sem dependências entre iterações. Reduções simples (<code>total += ...</code>) são detectadas automaticamente e paralelizadas com acumuladores por thread, seguidos de uma redução final.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════ SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Numba @cuda.jit — GPU com Python</h2>
        <p style={S.p}>
          O sub-módulo <code>numba.cuda</code> permite escrever <strong>kernels CUDA em Python</strong>. O código é compilado para PTX (linguagem <em>assembly</em> da GPU NVIDIA) e executado nos milhares de threads da GPU. Cada thread identifica a sua posição via <code>cuda.grid(1)</code>.
        </p>

        <div style={S.diagram}>
          <SvgCudaJIT />
        </div>

        <div style={S.code}>{`from numba import cuda
import numpy as np
import math

# ── Kernel CUDA escrito em Python ────────────────────────────────
@cuda.jit
def vector_add(a, b, c):
    """Cada thread soma um elemento: c[i] = a[i] + b[i]"""
    i = cuda.grid(1)                 # índice global do thread
    if i < a.shape[0]:
        c[i] = a[i] + b[i]

N = 1_000_000
a_host = np.random.rand(N).astype(np.float32)
b_host = np.random.rand(N).astype(np.float32)

# Transferir arrays para memória da GPU (VRAM)
d_a = cuda.to_device(a_host)
d_b = cuda.to_device(b_host)
d_c = cuda.device_array(N, dtype=np.float32)

# Configuração da grelha: blocos de 256 threads
threads_per_block = 256
blocks = math.ceil(N / threads_per_block)

# Lançar o kernel na GPU
vector_add[blocks, threads_per_block](d_a, d_b, d_c)

# Copiar resultado de volta para a CPU
c_host = d_c.copy_to_host()
print(f"Primeiros 5 resultados : {c_host[:5]}")
print(f"Grelha: {blocks} blocos × {threads_per_block} threads = {blocks*threads_per_block} threads")`}
        </div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Conceitos chave de CUDA:</strong></p>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Conceito</th>
                <th style={S.th}>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Thread', 'Unidade mínima — executa o corpo do kernel'],
                ['Block', 'Grupo de threads (≤ 1024) que partilham shared memory e podem sincronizar'],
                ['Grid', 'Conjunto de blocos que formam o lançamento completo do kernel'],
                ['Warp', '32 threads que executam em lockstep — SIMD da GPU'],
                ['cuda.to_device', 'Copia array NumPy da RAM para VRAM da GPU (transferência PCIe)'],
                ['cuda.copy_to_host', 'Copia resultado da VRAM de volta para RAM da CPU'],
              ].map(([c, d]) => (
                <tr key={c}><td style={S.td}><code>{c}</code></td><td style={S.td}>{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.math}>
          <BlockMath math={"i = \\text{blockIdx.x} \\times \\text{blockDim.x} + \\text{threadIdx.x} \\;=\\; \\texttt{cuda.grid(1)}"} />
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════ SECTION 6 */}
      <div style={S.section}>
        <h2 style={S.h2}>6. CuPy — NumPy na GPU</h2>
        <p style={S.p}>
          <strong>CuPy</strong> é uma substituição directa de NumPy que executa na GPU NVIDIA. A API é quase idêntica — basta substituir <code>import numpy as np</code> por <code>import cupy as cp</code>. Internamente, CuPy usa cuBLAS, cuFFT, cuSolver e outros componentes altamente optimizados do ecossistema CUDA.
        </p>

        <div style={S.diagram}>
          <SvgCuPy />
        </div>

        <div style={S.code}>{`import cupy as cp
import numpy as np
import time

# ── Criar array directamente na GPU ─────────────────────────────
a_gpu = cp.array([1.0, 2.0, 3.0, 4.0])
b_gpu = cp.random.rand(10_000_000, dtype=cp.float32)

# ── Operações idênticas ao NumPy ─────────────────────────────────
norma = cp.linalg.norm(a_gpu)           # cuBLAS
soma  = cp.sum(b_gpu)                   # kernel CUDA interno
fft   = cp.fft.fft(b_gpu[:65536])      # cuFFT

# ── Benchmark: NumPy CPU vs CuPy GPU ─────────────────────────────
N = 8_000
A_cpu = np.random.rand(N, N).astype(np.float32)
A_gpu = cp.asarray(A_cpu)              # copia para VRAM

t0 = time.perf_counter()
np.dot(A_cpu, A_cpu.T)
t_cpu = time.perf_counter() - t0

t0 = time.perf_counter()
cp.dot(A_gpu, A_gpu.T)
cp.cuda.Stream.null.synchronize()      # aguardar GPU terminar
t_gpu = time.perf_counter() - t0

print(f"NumPy CPU: {t_cpu:.3f} s")
print(f"CuPy  GPU: {t_gpu:.3f} s  (≈ {t_cpu/t_gpu:.1f}× speedup)")`}
        </div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Quando CuPy bate NumPy — e quando não:</strong></p>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Cenário</th>
                <th style={S.th}>Vencedor</th>
                <th style={S.th}>Razão</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Arrays grandes (≥ 1M floats), operações densas', 'CuPy', 'GPU tem milhares de threads; overhead PCIe amortizado'],
                ['FFT de sinal longo (≥ 64K amostras)', 'CuPy (cuFFT)', 'cuFFT é 10–100× mais rápido que FFTW para sinais longos'],
                ['Álgebra linear densa (matmul, SVD)', 'CuPy (cuBLAS)', 'cuBLAS usa Tensor Cores — hardware dedicado para matmul'],
                ['Arrays pequenos (< 100K elementos)', 'NumPy', 'Overhead de transferência PCIe domina o cálculo útil'],
                ['Muitas operações independentes pequenas', 'NumPy', 'Latência de lançamento de kernel acumula'],
              ].map(([s, v, r]) => (
                <tr key={s}>
                  <td style={S.td}>{s}</td>
                  <td style={S.td}><strong>{v}</strong></td>
                  <td style={S.td}>{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          <strong>Gargalo de transferência:</strong> a largura de banda PCIe 4.0 ×16 é ~64 GB/s; a VRAM de uma GPU moderna opera a ~900 GB/s. Para problemas onde os dados cabem em VRAM e as operações são computacionalmente intensas, CuPy oferece acelerações de 10–100× face ao NumPy em CPU.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════ SECTION 7 */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Quando Usar o Quê — Guia de Decisão</h2>
        <p style={S.p}>
          A escolha da ferramenta certa depende do hardware disponível, do tamanho dos dados, da complexidade do algoritmo e do esforço de implementação aceitável. A regra geral: comece sempre pela solução mais simples.
        </p>

        <SvgDecision />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>Hardware</th>
              <th style={S.th}>Facilidade</th>
              <th style={S.th}>Speedup típico</th>
              <th style={S.th}>Caso de uso ideal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['NumPy ufuncs', 'CPU (SIMD)', '★★★★★', '10–200× vs loop Python', 'Array ops, álgebra linear, FFT em CPU'],
              ['Numba @njit', 'CPU (SIMD)', '★★★★☆', '50–500× vs loop Python', 'Loops numéricos não vectorizáveis com NumPy'],
              ['Numba @njit(parallel)', 'CPU multi-core', '★★★★☆', 'N_cores × de @njit', 'Loops embaraçosamente paralelos em CPU'],
              ['CuPy', 'GPU NVIDIA', '★★★★☆', '10–100× vs NumPy CPU', 'Array ops e álgebra linear em GPU com API NumPy'],
              ['@cuda.jit', 'GPU NVIDIA', '★★☆☆☆', '100–1000× vs CPU', 'Kernels CUDA custom, acesso a shared memory GPU'],
            ].map(([t, h, f, s, u]) => (
              <tr key={t}>
                <td style={S.td}><strong>{t}</strong></td>
                <td style={S.td}>{h}</td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Regra prática:</strong> comece com NumPy. Se ainda for lento, experimente Numba <code>@njit</code>. Se precisar de múltiplos núcleos em CPU, adicione <code>parallel=True</code>. Só avance para GPU quando os dados forem grandes e a operação computacionalmente intensa. A complexidade cresce significativamente a cada passo.
          </p>
        </div>

        <div style={S.math}>
          <BlockMath math={"\\text{ROI} = \\frac{\\Delta\\,\\text{Speedup}}{\\Delta\\,\\text{Complexidade}} \\xrightarrow{\\text{maximize}} \\text{escolha óptima de técnica}"} />
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════ SYNTHESIS */}
              <h2 style={{ ...S.h2, borderLeft: 'none', paddingLeft: 0, marginBottom: '0.75rem' }}>8. Síntese do Módulo</h2>
<div style={{ ...S.highlight, borderRadius: 10 }}>
        <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 2 }}>
          <li><strong>SIMD:</strong> SSE (4 floats / 128-bit), AVX2 (8 floats / 256-bit), AVX-512 (16 floats / 512-bit) — um núcleo CPU processa N valores por instrução. ARM NEON é o equivalente nos processadores ARM.</li>
          <li><strong>NumPy:</strong> elimina o overhead do interpretador Python com uma chamada C que processa todo o array; ufuncs e broadcasting são as ferramentas centrais. <code>np.vectorize()</code> não vectoriza de verdade — continua a iterar em Python.</li>
          <li><strong>Numba @njit:</strong> LLVM compila loops Python para código máquina nativo; warmup (~1 s) na 1ª chamada, velocidade de C/Fortran nas seguintes. <code>cache=True</code> elimina recompilação entre sessões.</li>
          <li><strong>Numba parallel + prange:</strong> distribui iterações pelos núcleos disponíveis automaticamente; <code>fastmath=True</code> relaxa IEEE 754 para mais velocidade com possíveis erros de arredondamento.</li>
          <li><strong>@cuda.jit:</strong> kernels CUDA escritos em Python, compilados para PTX; gestão explícita de memória GPU com <code>to_device</code> / <code>copy_to_host</code>; ideal para algoritmos custom que não existem em bibliotecas.</li>
          <li><strong>CuPy:</strong> drop-in replacement de NumPy na GPU; usa cuBLAS/cuFFT; supera NumPy em arrays grandes, perde em arrays pequenos por overhead de transferência PCIe.</li>
          <li><strong>Guia de decisão:</strong> NumPy → Numba @njit → Numba parallel → CuPy → @cuda.jit. Cada nível acrescenta complexidade; escolha o mínimo suficiente para o speedup necessário.</li>
        </ul>
      </div>
    </div>
  );
}
