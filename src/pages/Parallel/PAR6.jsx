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
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.25rem 0', overflowX: 'auto', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem 1.25rem', margin: '1rem 0', overflowX: 'auto' },
};

/* ── Diagrama 1: CPU die vs GPU die ─────────────────────────────────── */
function DiagramCPUvsGPU() {
  const coreColors = ['#4a9eed', '#0284c7', '#38bdf8', '#7dd3fc'];
  const smColors = ['#4a9eed','#0369a1','#38bdf8','#0284c7','#7dd3fc','#075985','#4a9eed','#38bdf8'];

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.6rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 32px 1fr', gap: '0.5rem', alignItems: 'stretch' }}>

        {/* CPU panel */}
        <div style={{ border: '2px solid #4a9eed', borderRadius: 10, padding: '0.8rem', background: 'rgba(74,158,237,0.06)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#4a9eed', textAlign: 'center' }}>CPU (ex: Intel i9)</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {coreColors.map((c, i) => (
              <div key={i} style={{ border: `1.5px solid ${c}`, borderRadius: 7, padding: '0.5rem 0.4rem', background: `${c}14`, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontWeight: 700, fontSize: '0.78rem', color: c }}>Core {i+1}</div>
                <div style={{ background: `${c}22`, border: `1px solid ${c}55`, borderRadius: 3, padding: '2px 4px', fontSize: '0.62rem', color: c }}>L1/L2 Cache</div>
                <div style={{ background: 'rgba(100,116,139,0.15)', borderRadius: 3, padding: '2px 4px', fontSize: '0.6rem', color: 'var(--text-secondary)' }}>Branch Pred. / OOO</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.3)', borderRadius: 5, padding: '4px 8px', textAlign: 'center', fontSize: '0.72rem', fontWeight: 600, color: '#4a9eed' }}>
            L3 Cache Partilhada (32 MB)
          </div>
        </div>

        {/* VS divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', writingMode: 'vertical-lr' }}>vs</div>

        {/* GPU panel */}
        <div style={{ border: '2px solid #4a9eed', borderRadius: 10, padding: '0.8rem', background: 'rgba(74,158,237,0.06)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#4a9eed', textAlign: 'center' }}>GPU (ex: A100)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 3 }}>
            {Array.from({ length: 40 }, (_, i) => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: 3, background: `${smColors[i % smColors.length]}22`, border: `1px solid ${smColors[i % smColors.length]}66` }} />
            ))}
          </div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', textAlign: 'center' }}>× 108 SMs = 6912 CUDA cores</div>
          <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.3)', borderRadius: 5, padding: '4px 8px', textAlign: 'center', fontSize: '0.72rem', fontWeight: 600, color: '#4a9eed' }}>
            Memory Controllers + HBM2e (80 GB, 2 TB/s)
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Diagrama 2: Hierarquia de Threads ──────────────────────────────── */
function DiagramThreadHierarchy() {
  const cGrid  = '#4a9eed';
  const cBlock = '#0284c7';
  const cWarp  = '#38bdf8';
  const blockColors = ['#4a9eed','#0284c7','#38bdf8','#7dd3fc'];

  const Dot = ({ c, size = 14, label }) => (
    <div style={{ width: size, height: size, borderRadius: '50%', background: `${c}20`, border: `1.5px solid ${c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {label && <span style={{ fontSize: '0.45rem', color: c, fontWeight: 700, lineHeight: 1 }}>{label}</span>}
    </div>
  );

  const Arrow = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', color: '#94a3b8', flexShrink: 0, padding: '0 4px' }}>→</div>
  );

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>

        {/* Panel 1: Grid */}
        <div style={{ border: `2px solid ${cGrid}`, borderRadius: 10, padding: '0.6rem 0.7rem', background: `${cGrid}0d`, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 160 }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: cGrid, textAlign: 'center' }}>Grid (2×2 blocos)</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
            {blockColors.map((bc, i) => (
              <div key={i} style={{ border: `1.5px solid ${bc}`, borderRadius: 5, padding: '4px', background: `${bc}10`, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ fontSize: '0.6rem', color: bc, fontWeight: 700, textAlign: 'center' }}>Bloco {i}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                  {Array.from({ length: 8 }, (_, t) => <Dot key={t} c={bc} size={10} />)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Arrow />

        {/* Panel 2: Block zoom */}
        <div style={{ border: `2px solid ${cBlock}`, borderRadius: 10, padding: '0.6rem 0.7rem', background: `${cBlock}0d`, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 150 }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: cBlock, textAlign: 'center' }}>Bloco (4×4 threads)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
            {Array.from({ length: 16 }, (_, t) => (
              <Dot key={t} c={cBlock} size={26} label={`(${t%4},${Math.floor(t/4)})`} />
            ))}
          </div>
        </div>

        <Arrow />

        {/* Panel 3: Warp */}
        <div style={{ border: `2px solid ${cWarp}`, borderRadius: 10, padding: '0.6rem 0.7rem', background: `${cWarp}0d`, display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: cWarp, textAlign: 'center' }}>Warp (32 threads)</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textAlign: 'center' }}>mesma instrução em simultâneo (SIMT)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 3 }}>
            {Array.from({ length: 32 }, (_, t) => <Dot key={t} c={cWarp} size={20} />)}
          </div>
          <div style={{ fontSize: '0.62rem', color: 'var(--text-secondary)', textAlign: 'center', fontFamily: 'monospace' }}>threadIdx.x: 0 … 31</div>
        </div>
      </div>
    </div>
  );
}

/* ── Diagrama 3: Hierarquia de Memória ──────────────────────────────── */
function DiagramMemoryHierarchy() {
  const layers = [
    { label: 'Registos (por thread)',         lat: '~1 ciclo',         size: '256 KB/SM',     c: '#4a9eed', pct: 22 },
    { label: 'Shared Memory / L1 (por bloco)',lat: '~5 ciclos',        size: '48–164 KB/SM',  c: '#38bdf8', pct: 38 },
    { label: 'L2 Cache (por GPU)',             lat: '~30 ciclos',       size: '40 MB (A100)',  c: '#0284c7', pct: 55 },
    { label: 'Memória Global (DRAM / HBM)',   lat: '~200–400 ciclos',  size: '80 GB',         c: '#7dd3fc', pct: 74 },
    { label: 'Memória do Sistema (CPU RAM)',  lat: '>1000 ciclos (PCIe)',size: 'GBs–TBs',     c: '#94a3b8', pct: 100 },
  ];
  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#4a9eed', marginBottom: 4 }}>Pirâmide de Memória CUDA</div>
      <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', width: '100%' }}>
        {/* Speed label */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0, fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
          <span>↑</span><span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>Velocidade</span>
        </div>
        {/* Pyramid layers */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
          {layers.map(({ label, lat, size, c, pct }, i) => (
            <div key={i} style={{ width: `${pct}%`, border: `2px solid ${c}`, borderRadius: 6, padding: '6px 12px', background: `${c}14`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.78rem', color: c }}>{label}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>{lat} · {size}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Capacity label */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0, fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
          <span style={{ writingMode: 'vertical-lr' }}>Capacidade</span><span>↓</span>
        </div>
      </div>
    </div>
  );
}

/* ── Diagrama 4: Memory Coalescing ──────────────────────────────────── */
function DiagramCoalescing() {
  const tColors = ['#4a9eed','#0284c7','#38bdf8','#7dd3fc','#0369a1','#075985','#38bdf8','#0284c7'];
  // scattered indices for uncoalesced
  const scattered = [0, 5, 2, 7, 1, 6, 3, 4];

  const ThreadChip = ({ i, c }) => (
    <div style={{ width: 32, height: 26, borderRadius: 5, background: `${c}22`, border: `1.5px solid ${c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 700, color: c, flexShrink: 0 }}>T{i}</div>
  );

  const MemBlock = ({ active, c, small }) => (
    <div style={{ width: small ? 26 : 32, height: 22, borderRadius: 4, background: active ? `${c}30` : 'var(--bg-secondary)', border: `${active ? 2 : 1}px solid ${active ? c : 'var(--card-border)'}`, flexShrink: 0 }} />
  );

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.6rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '1rem', alignItems: 'start' }}>

        {/* Coalesced */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#4a9eed', textAlign: 'center' }}>Coalesced (1 transacção)</div>
          <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
            {tColors.map((c, i) => <ThreadChip key={i} i={i} c={c} />)}
          </div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', textAlign: 'center' }}>threads acessam endereços consecutivos</div>
          <div style={{ textAlign: 'center', fontSize: '1.1rem', color: '#4a9eed' }}>↓</div>
          {/* memory blocks — all highlighted together */}
          <div style={{ border: '2px solid #4a9eed', borderRadius: 6, padding: '4px 6px', display: 'flex', gap: 3, justifyContent: 'center', background: 'rgba(74,158,237,0.06)' }}>
            {tColors.map((c, i) => <MemBlock key={i} active c={c} />)}
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, color: '#4a9eed' }}>→ 1 transacção de memória</div>
        </div>

        {/* Divider */}
        <div style={{ background: 'var(--card-border)', height: '100%', minHeight: 160 }} />

        {/* Non-coalesced */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center' }}>Não-coalesced (N transacções)</div>
          <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
            {tColors.map((c, i) => <ThreadChip key={i} i={i} c={c} />)}
          </div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', textAlign: 'center' }}>threads acessam endereços dispersos</div>
          <div style={{ textAlign: 'center', fontSize: '1.1rem', color: '#94a3b8' }}>↓</div>
          {/* memory blocks — scattered, individual highlights */}
          <div style={{ display: 'flex', gap: 3, justifyContent: 'center', padding: '4px 6px' }}>
            {Array.from({ length: 8 }, (_, i) => {
              const threadIdx = scattered.indexOf(i);
              const c = threadIdx >= 0 ? tColors[threadIdx] : undefined;
              return <MemBlock key={i} active={threadIdx >= 0} c={c || '#94a3b8'} />;
            })}
          </div>
          {/* individual transaction arrows */}
          <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
            {tColors.map((c, i) => (
              <div key={i} style={{ width: 32, textAlign: 'center', fontSize: '0.55rem', color: c }}>↑</div>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8' }}>→ 8 transacções separadas</div>
        </div>
      </div>
    </div>
  );
}

/* ── Diagrama 5: Tiling ─────────────────────────────────────────────── */
function DiagramTiling() {
  const tileColors = [
    '#4a9eed','#0284c7','#38bdf8','#7dd3fc','#0369a1',
    '#0284c7','#38bdf8','#4a9eed','#7dd3fc','#0369a1',
    '#38bdf8','#7dd3fc','#4a9eed','#0284c7','#0369a1',
    '#7dd3fc','#4a9eed','#38bdf8','#0284c7','#0369a1',
    '#0284c7','#0369a1','#7dd3fc','#4a9eed','#38bdf8',
  ];

  const Tile = ({ idx, active }) => {
    const c = tileColors[idx];
    return (
      <div style={{
        width: 48, height: 28, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: active ? c : `${c}18`,
        border: `${active ? 2 : 1}px solid ${active ? c : `${c}66`}`,
        fontSize: '0.6rem', fontWeight: active ? 700 : 400,
        color: active ? '#1e293b' : `${c}99`,
        flexShrink: 0,
      }}>
        {active ? 'tile[0][0]' : ''}
      </div>
    );
  };

  return (
    <div style={{ ...S.diagram, gap: '1rem', alignItems: 'center' }}>
      {/* Global matrix */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#4a9eed', marginBottom: 4 }}>Matriz Global A</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4 }}>
          {Array.from({ length: 25 }, (_, i) => <Tile key={i} idx={i} active={i === 0} />)}
        </div>
        <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', marginTop: 4 }}>cada tile → 1 bloco CUDA</div>
      </div>

      {/* Arrow */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0 }}>
        <div style={{ fontSize: '0.68rem', color: '#4a9eed', fontWeight: 600 }}>carrega</div>
        <div style={{ fontSize: '1.4rem', color: '#4a9eed' }}>→</div>
      </div>

      {/* Shared memory tile */}
      <div style={{ border: '2px solid #4a9eed', borderRadius: 10, padding: '0.7rem 0.8rem', background: 'rgba(74,158,237,0.07)', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', minWidth: 180 }}>
        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#4a9eed' }}>Shared Memory</div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--text-secondary)' }}>__shared__ float tile_A[TILE][TILE]</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} style={{ width: 44, height: 24, borderRadius: 4, background: 'rgba(74,158,237,0.20)', border: '1.5px solid #4a9eed' }} />
          ))}
        </div>
        <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>~48 KB · acesso em ~5 ciclos</div>
      </div>
    </div>
  );
}

/* ── Diagrama 6: Warp Divergence ─────────────────────────────────────── */
function DiagramWarpDivergence() {
  const cIf   = '#4a9eed';
  const cElse = '#0284c7';
  const cMask = '#475569';

  const Chip = ({ t, active, c }) => (
    <div style={{ width: 34, height: 32, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 700, background: active ? `${c}28` : 'rgba(71,85,105,0.15)', border: `1.5px solid ${active ? c : cMask}`, color: active ? c : cMask, flexShrink: 0 }}>
      T{t}
    </div>
  );

  const seg = (label, c, faint) => (
    <div style={{ flex: 1, padding: '14px 10px', borderRadius: 6, background: faint ? 'rgba(71,85,105,0.12)' : `${c}18`, border: `1.5px solid ${faint ? cMask : c}`, textAlign: 'center', fontSize: '0.75rem', fontWeight: faint ? 400 : 600, color: faint ? cMask : c }}>
      {label}
    </div>
  );

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: 0 }}>
      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#4a9eed', textAlign: 'center', marginBottom: '1.2rem' }}>Warp de 32 Threads — Divergência</div>

      {/* Thread chips — two explicit rows of 16 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', marginBottom: '1.8rem' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {Array.from({ length: 16 }, (_, i) => <Chip key={i} t={i} active c={cIf} />)}
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {Array.from({ length: 16 }, (_, i) => <Chip key={i+16} t={i+16} active c={cElse} />)}
        </div>
      </div>

      {/* Execution steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '1.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 8 }}>
          <div style={{ width: 60, fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'right', flexShrink: 0, paddingTop: 10 }}>Passo 1</div>
          {seg('T0–T15: executam if-branch', cIf)}
          {seg('T16–T31: mascarados (idle)', null, true)}
        </div>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 8 }}>
          <div style={{ width: 60, fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'right', flexShrink: 0, paddingTop: 10 }}>Passo 2</div>
          {seg('T0–T15: mascarados (idle)', null, true)}
          {seg('T16–T31: executam else-branch', cElse)}
        </div>
      </div>

      {/* Time axis */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingLeft: 68, marginBottom: '1.4rem' }}>
        <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>t=0</div>
        <div style={{ flex: 1, height: 1, background: 'var(--card-border)' }} />
        <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>t=T</div>
        <div style={{ flex: 1, height: 1, background: 'var(--card-border)' }} />
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0369a1' }}>t=2T → 2× mais lento!</div>
      </div>

      {/* Solution note */}
      <div style={{ background: 'rgba(74,158,237,0.08)', border: '1px solid rgba(74,158,237,0.3)', borderRadius: 6, padding: '10px 16px', fontSize: '0.75rem', color: '#4a9eed', textAlign: 'center', fontFamily: 'monospace' }}>
        <span style={{ color: '#0369a1' }}>if (threadIdx.x &lt; 32)</span> → diverge &nbsp;|&nbsp; <span style={{ color: cIf }}>if (blockIdx.x % 2 == 0)</span> → não diverge (warp toma o mesmo ramo)
      </div>
    </div>
  );
}

/* ── Diagrama 7: Occupancy e Latency Hiding ─────────────────────────── */
function DiagramOccupancy() {
  const warps = [
    { label: 'Warp A', c: '#4a9eed', status: 'stall — aguarda memória' },
    { label: 'Warp B', c: '#0284c7', status: 'pronto — a executar' },
    { label: 'Warp C', c: '#38bdf8', status: 'pronto — a executar' },
    { label: 'Warp D', c: '#7dd3fc', status: 'pronto — a executar' },
  ];

  const seg = (label, c, flex, faint) => (
    <div style={{ flex, padding: '12px 6px', borderRadius: 5, textAlign: 'center', background: faint ? 'rgba(71,85,105,0.15)' : `${c}28`, border: `1.5px solid ${faint ? '#475569' : c}`, color: faint ? '#64748b' : c, fontSize: '0.72rem', fontWeight: faint ? 400 : 700, whiteSpace: 'nowrap' }}>{label}</div>
  );

  // timeline rows per warp: [exec, stall/exec, exec]
  const timeline = [
    // Warp A: exec | stall | retoma
    [seg('exec', '#4a9eed', 1), seg('stall (mem)', '#475569', 2, true), seg('retoma exec', '#4a9eed', 2)],
    // Warp B: idle | exec | idle
    [seg('', '#475569', 1, true), seg('exec', '#0284c7', 1), seg('', '#475569', 3, true)],
    // Warp C: idle | idle | exec
    [seg('', '#475569', 1, true), seg('', '#475569', 1, true), seg('exec', '#38bdf8', 1), seg('', '#475569', 2, true)],
    // Warp D: idle | idle | idle | exec
    [seg('', '#475569', 1, true), seg('', '#475569', 1, true), seg('', '#475569', 1, true), seg('exec', '#7dd3fc', 1), seg('', '#475569', 1, true)],
  ];

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: 0 }}>
      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#4a9eed', textAlign: 'center', marginBottom: '1.6rem' }}>SM — Latency Hiding por Comutação de Warps</div>

      <div style={{ display: 'grid', gridTemplateColumns: '130px 32px 1fr', gap: '0.8rem', alignItems: 'center', marginBottom: '1.6rem' }}>
        {/* Warp list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {warps.map(({ label, c, status }) => (
            <div key={label} style={{ border: `1.5px solid ${c}`, borderRadius: 7, padding: '8px 10px', background: `${c}12` }}>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', color: c }}>{label}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: 2 }}>{status}</div>
            </div>
          ))}
        </div>

        {/* Scheduler arrow */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ fontSize: '0.6rem', color: '#4a9eed', fontWeight: 600, writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>GPU scheduler</div>
          <div style={{ fontSize: '1.2rem', color: '#4a9eed' }}>→</div>
        </div>

        {/* Timeline panel */}
        <div style={{ border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.9rem 0.8rem', background: 'var(--bg-secondary)' }}>
          <div style={{ fontWeight: 700, fontSize: '0.75rem', color: '#4a9eed', marginBottom: 12, textAlign: 'center' }}>Linha Temporal (SM)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {timeline.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 4 }}>{row}</div>
            ))}
          </div>
          <div style={{ borderTop: '1px dashed var(--card-border)', marginTop: 14, paddingTop: 10, fontSize: '0.68rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Durante o stall do Warp A, o scheduler executa B, C, D — GPU nunca fica idle
          </div>
        </div>
      </div>

      {/* Occupancy note */}
      <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0.4rem' }}>
        <div style={{ background: 'rgba(74,158,237,0.08)', border: '1px solid rgba(74,158,237,0.3)', borderRadius: 6, padding: '9px 18px', fontSize: '0.75rem', color: '#4a9eed', fontWeight: 600 }}>
          Occupancy = warps activos / warps máximos por SM
        </div>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '9px 18px', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
          A100: 64 warps/SM × 108 SMs = 6912 warps simultâneos
        </div>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '9px 18px', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
          ↑ registos/thread → ↓ warps activos → ↓ occupancy
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */

export default function PAR6() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>
      <div style={S.tag}>MÓDULO 06</div>
      <h1 style={S.h1}>Computação em GPU e CUDA</h1>
      <p style={S.lead}>
        As GPUs modernas expõem milhares de núcleos de cálculo programáveis através do modelo CUDA. Compreender a arquitectura SIMT, a hierarquia de memória e as regras de optimização é essencial para obter acelerações de 10×–1000× face à CPU em cargas de trabalho paralelizáveis.
      </p>

      {/* ── SECÇÃO 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. CPU vs GPU — Filosofias Opostas</h2>
        <p style={S.p}>
          Uma CPU foi concebida para <strong>baixa latência</strong>: poucos núcleos potentes, execução fora de ordem, branch prediction, caches enormes — o objectivo é executar um único fio de execução o mais rápido possível. Uma GPU foi concebida para <strong>alto débito</strong>: milhares de núcleos simples, sem previsão de desvios, com caches pequenas — executa milhões de operações em paralelo, tolerando latências individuais através de comutação rápida entre grupos de threads.
        </p>
        <div style={S.highlight}>
          <strong>NVIDIA A100 (Ampere, 2020):</strong> 108 Streaming Multiprocessors (SMs) × 64 CUDA cores = <strong>6912 CUDA cores</strong>; 80 GB HBM2e com <strong>2 TB/s</strong> de largura de banda de memória; pico de 312 TFLOPS (FP16 Tensor Cores).
        </div>

        <DiagramCPUvsGPU />

        <div style={S.math}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            Relação entre latência e débito para operações de vírgula flutuante:
          </p>
          <BlockMath math={"\\text{Throughput} = \\frac{\\text{N}_{\\text{operações}}}{\\text{Latência} \\times N_{\\text{núcleos}}^{-1}}"} />
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            A GPU compensa a latência elevada por núcleo com um número de núcleos muito superior, obtendo débito global muito maior para cargas de trabalho paralelas.
          </p>
        </div>

        <p style={S.p}>
          A transferência de dados entre CPU (host) e GPU (device) é feita via <strong>PCIe</strong> (~32 GB/s) ou <strong>NVLink</strong> (~600 GB/s em sistemas com múltiplas GPUs). Esta transferência é frequentemente o verdadeiro bottleneck; minimizá-la é tão importante quanto optimizar os kernels.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Modelo SIMT e Hierarquia de Threads</h2>
        <p style={S.p}>
          CUDA usa o modelo <strong>SIMT</strong> — <em>Single Instruction, Multiple Threads</em>: um único fluxo de instruções é executado por múltiplos threads em simultâneo. Ao contrário do SIMD clássico, o programador escreve código escalar para um único thread; o hardware vectoriza. Os threads organizam-se em três níveis: <strong>Grid</strong> (todos os threads do kernel), <strong>Block</strong> (grupos cooperantes com shared memory) e <strong>Thread</strong>; o hardware agrupa 32 threads num <strong>warp</strong>, a unidade real de execução no SM.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Variável CUDA</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Exemplo (vector add 1M elementos, bloco 256)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['threadIdx.x', 'Índice do thread dentro do bloco', '0 … 255'],
              ['blockIdx.x', 'Índice do bloco dentro do grid', '0 … 3906'],
              ['blockDim.x', 'Número de threads por bloco', '256'],
              ['gridDim.x', 'Número de blocos no grid', '3907 (⌈10⁶/256⌉)'],
              ['warpSize', 'Threads por warp (constante = 32)', '32'],
            ].map(([v,s,e]) => (
              <tr key={v}>
                <td style={S.td}><code>{v}</code></td>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <DiagramThreadHierarchy />

        <div style={S.math}>
          <p style={{ margin: '0 0 0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Índice global de cada thread (para vector addition unidimensional):
          </p>
          <BlockMath math={"i = \\texttt{blockIdx.x} \\times \\texttt{blockDim.x} + \\texttt{threadIdx.x}"} />
          <p style={{ margin: '0.4rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Número mínimo de blocos para cobrir <InlineMath math={"N"} /> elementos: <InlineMath math={"\\left\\lceil N / \\texttt{blockDim.x} \\right\\rceil"} />
          </p>
        </div>

        <div style={S.note}>
          <strong>Regra:</strong> o bloco deve ser múltiplo de 32 (tamanho do warp) para evitar warps parcialmente preenchidos. Valores comuns: 128, 256 ou 512 threads/bloco.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Hierarquia de Memória CUDA</h2>
        <p style={S.p}>
          A GPU tem vários tipos de memória com características muito distintas. Escolher o tipo certo para cada dado é uma das decisões mais impactantes na optimização de kernels CUDA.
        </p>

        <DiagramMemoryHierarchy />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Memória</th>
              <th style={S.th}>Âmbito</th>
              <th style={S.th}>Latência</th>
              <th style={S.th}>Tamanho</th>
              <th style={S.th}>Tempo de vida</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Registos', 'Por thread', '~1 ciclo', '256 KB/SM ÷ threads', 'Thread'],
              ['Shared Memory', 'Por bloco', '~5 ciclos', '48–164 KB/SM', 'Bloco'],
              ['L1 Cache', 'Por SM (partilhada com shared)', '~28 ciclos', 'Configurável', 'Automático'],
              ['L2 Cache', 'Por GPU', '~30 ciclos', '40 MB (A100)', 'Automático'],
              ['Memória Global', 'Todos os threads', '~200–400 ciclos', '80 GB (A100)', 'Alocação'],
              ['Memória Constante', 'Todos (read-only)', '~5 ciclos (cache hit)', '64 KB', 'Aplicação'],
              ['Memória de Textura', 'Todos (read-only)', '~20 ciclos (cache hit)', 'Espaço de endereçamento', 'Alocação'],
            ].map(([t,s,l,sz,lf]) => (
              <tr key={t}>
                <td style={S.td}><strong>{t}</strong></td>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{l}</td>
                <td style={S.td}>{sz}</td>
                <td style={S.td}>{lf}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          A <strong>shared memory</strong> e a L1 cache partilham o mesmo banco de SRAM no SM. Em kernels com muito uso de shared memory, configura-se com <code>cudaFuncSetAttribute(kernel, cudaFuncAttributePreferredSharedMemoryCarveout, 75)</code> para dar 75% à shared memory e 25% à L1.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Optimizações: Memory Coalescing</h2>
        <p style={S.p}>
          Quando um warp de 32 threads acede à memória global, o hardware tenta agrupar todos os acessos numa única <strong>transacção de 128 bytes</strong> (sector de cache). Este agrupamento chama-se <strong>coalescing</strong>.
        </p>
        <p style={S.p}>
          Para que ocorra, os 32 threads do warp devem aceder a endereços contíguos e alinhados — se dispersos, o hardware emite até 32 transacções separadas, multiplicando o tráfego de memória.
        </p>

        <DiagramCoalescing />

        <div style={S.math}>
          <p style={{ margin: '0 0 0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Padrão de acesso ideal (acesso ao elemento <InlineMath math={"i"} /> pelo thread <InlineMath math={"i"} />):
          </p>
          <BlockMath math={"\\text{addr}(\\text{thread}_k) = \\text{base} + k, \\quad k = 0, 1, \\ldots, 31"} />
          <p style={{ margin: '0.4rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Desempenho em caso de não-coalescing: até <InlineMath math={"32\\times"} /> mais transacções, reduzindo o débito efectivo de <InlineMath math={"2\\,\\text{TB/s}"} /> para ~63 GB/s.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Shared Memory e Tiling</h2>
        <p style={S.p}>
          A shared memory é a ferramenta mais poderosa para reduzir o tráfego à memória global: dividir o problema em <strong>tiles</strong>, cada bloco carrega o seu tile para a shared memory (~40× mais rápido) e calcula localmente antes de avançar. A barreira <code>__syncthreads()</code> garante que todos os threads terminaram de carregar antes de qualquer um começar a calcular.
        </p>

        <DiagramTiling />

        <div style={S.math}>
          <p style={{ margin: '0 0 0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Redução de acessos à memória global com tiling (tamanho do tile <InlineMath math={"T"} />):
          </p>
          <BlockMath math={"\\text{Acessos}_{\\text{global}} = \\frac{2 N^3}{T} \\quad \\text{vs} \\quad 2N^3 \\; (\\text{sem tiling})"} />
          <p style={{ margin: '0.4rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Para <InlineMath math={"T = 16"} />, redução de <InlineMath math={"16\\times"} /> nos acessos à DRAM. Para <InlineMath math={"T = 32"} />, redução de <InlineMath math={"32\\times"} />.
          </p>
        </div>

        <div style={S.note}>
          <strong>Bank conflicts:</strong> a shared memory tem 32 bancos de memória. Se threads do mesmo warp acederem ao mesmo banco (mas endereços diferentes), ocorre uma serialização. Para evitar: usar padding (<code>__shared__ float tile[TILE][TILE+1]</code>) na dimensão interior.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Warp Divergence</h2>
        <p style={S.p}>
          O modelo SIMT pressupõe que todos os 32 threads de um warp executam a mesma instrução. Quando uma condição <code>if/else</code> difere entre threads do mesmo warp, ocorre <strong>divergência de warp</strong>: o hardware executa os dois ramos sequencialmente, mascarando os threads inactivos em cada passo — com dois ramos, metade da capacidade de cálculo é desperdiçada.
        </p>

        <DiagramWarpDivergence />

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Regra de ouro:</strong> divergência numa condição baseada em <code>threadIdx</code> causa problemas se o limiar não for múltiplo de 32. Condições baseadas em <code>blockIdx</code> ou dados uniformes dentro do warp não causam divergência.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Occupancy e Latency Hiding</h2>
        <p style={S.p}>
          A GPU esconde a latência elevada dos acessos à memória global através de <strong>comutação de warps</strong>: quando um warp fica bloqueado a aguardar dados, o scheduler do SM passa imediatamente a executar outro warp que esteja pronto. Este mecanismo requer ter muitos warps activos em simultâneo.
        </p>
        <p style={S.p}>
          A <strong>occupancy</strong> mede a fracção dos slots de warp do SM que estão preenchidos com warps activos. Uma occupancy mais alta dá ao scheduler mais opções para esconder latências, mas não é sempre o factor limitante — kernels com alta intensidade aritmética podem atingir o pico de desempenho com occupancy moderada.
        </p>

        <DiagramOccupancy />

        <div style={S.math}>
          <p style={{ margin: '0 0 0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Occupancy teórica de um kernel:
          </p>
          <BlockMath math={"\\text{Occupancy} = \\frac{\\text{warps activos por SM}}{\\text{warps máximos por SM}} = \\frac{\\min\\!\\left(W_{\\text{regs}},\\, W_{\\text{smem}},\\, W_{\\text{block}}\\right)}{W_{\\max}}"} />
          <p style={{ margin: '0.4rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            onde <InlineMath math={"W_{\\text{regs}}"} /> é o limite imposto pelos registos usados, <InlineMath math={"W_{\\text{smem}}"} /> pelo consumo de shared memory, e <InlineMath math={"W_{\\text{block}}"} /> pelo número de blocos em execução.
          </p>
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Limita occupancy quando…</th>
              <th style={S.th}>Solução típica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Registos por thread', '>32 registos/thread → menos warps/SM', 'Usar __launch_bounds__; simplificar cálculos locais'],
              ['Shared memory por bloco', 'Blocos maiores que 48 KB/nBlocks → menos blocos activos', 'Reduzir tamanho do tile ou limitar uso de smem'],
              ['Threads por bloco', 'Bloco de 1024 threads → apenas 2 blocos/SM (A100: 2048 max)', 'Usar blocos de 128–512 threads'],
              ['Blocos por SM', 'Limite hardware de 32 blocos/SM (Ampere)', 'Aumentar trabalho por bloco'],
            ].map(([p,l,s]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{l}</td>
                <td style={S.td}>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          A ferramenta <strong>Nsight Compute</strong> (<code>ncu --set full ./programa</code>) fornece a occupancy real medida em hardware, juntamente com <em>roofline analysis</em>, latência por warp e contadores de banco de shared memory.
        </div>
      </div>

    </div>
  );
}
