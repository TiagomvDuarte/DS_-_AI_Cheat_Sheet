import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
const S = {
  page:      { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back:      { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag:       { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1:        { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead:      { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section:   { marginBottom: '3.5rem' },
  h2:        { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  p:         { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table:     { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th:        { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td:        { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note:      { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider:   { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code:      { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  math:      { margin: '1rem 0', overflowX: 'auto', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.5rem', textAlign: 'center' },
  diagram:   { margin: '1.5rem 0', display: 'flex', justifyContent: 'center' },
};

/* ─── Distributed Memory Model ─── */
function SvgDistributed() {
  const nodes = [
    { label: 'Nó 0', rank: 0, c: '#f97316' },
    { label: 'Nó 1', rank: 1, c: '#f59e0b' },
    { label: 'Nó 2', rank: 2, c: '#fb923c' },
    { label: 'Nó 3', rank: 3, c: '#fbbf24' },
  ];
  const nodeCard = ({ label, c }) => (
    <div style={{ flex: 1, border: `2px solid ${c}`, borderRadius: 10, padding: '0.6rem 0.5rem', background: `${c}12`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ background: c, borderRadius: 6, padding: '4px 8px', textAlign: 'center' }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem' }}>CPU</div>
        </div>
        <div style={{ background: `${c}cc`, borderRadius: 6, padding: '4px 8px', textAlign: 'center' }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem' }}>RAM</div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.65rem' }}>privada</div>
        </div>
      </div>
      <div style={{ fontWeight: 700, fontSize: '0.82rem', color: c }}>{label}</div>
      <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', background: 'var(--bg-secondary)', borderRadius: 4, padding: '1px 6px', border: '1px solid var(--card-border)' }}>addr space isolado</div>
    </div>
  );

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.6rem' }}>
      {/* Nodes row */}
      <div style={{ display: 'flex', gap: '0.7rem', width: '100%' }}>
        {nodes.map(n => <React.Fragment key={n.rank}>{nodeCard(n)}</React.Fragment>)}
      </div>

      {/* Wires + switch row */}
      <svg width="100%" height="52" viewBox="0 0 680 52" preserveAspectRatio="none" style={{ display: 'block' }}>
        <defs>
          <marker id="distArr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L0,7 L7,3.5 z" fill="#f97316" />
          </marker>
        </defs>
        {/* vertical wires from nodes to switch */}
        {[85, 255, 425, 595].map((x, i) => (
          <line key={i} x1={x} y1={0} x2={340} y2={38} stroke="#475569" strokeWidth="1.5" strokeDasharray="4,2" />
        ))}
        {/* switch box */}
        <rect x="265" y="28" width="150" height="22" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        <text x="340" y="43" textAnchor="middle" fill="#f1f5f9" fontSize="11" fontWeight="700">Switch (InfiniBand)</text>
        {/* MPI message arrow: nó0 → nó3 */}
        <path d="M85,4 Q340,48 595,4" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,3" markerEnd="url(#distArr)" />
      </svg>

      {/* MPI label */}
      <div style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 6, padding: '4px 16px', alignSelf: 'center' }}>
        MPI_Send (Nó 0) → MPI_Recv (Nó 3)
      </div>
    </div>
  );
}

/* ─── Hello World processes ─── */
function SvgHello() {
  const ranks = [
    { r: 0, c: '#f97316' },
    { r: 1, c: '#f59e0b' },
    { r: 2, c: '#fb923c' },
    { r: 3, c: '#fbbf24' },
  ];
  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.8rem' }}>
      <div style={{ display: 'flex', gap: '0.7rem' }}>
        {ranks.map(({ r, c }) => (
          <div key={r} style={{ flex: 1, border: `2px solid ${c}`, borderRadius: 10, padding: '0.7rem 0.5rem', background: `${c}12`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: c }}>Rank {r}</div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: 'var(--text-primary)', background: 'var(--bg-secondary)', borderRadius: 4, padding: '3px 8px', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              Hello from rank {r} of 4
            </div>
            <div style={{ fontSize: '0.65rem', color: '#64748b' }}>MPI_COMM_WORLD</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: 6, padding: '5px 12px', border: '1px solid var(--card-border)' }}>
        ⚠ Ordem de saída <strong>não determinística</strong> — processos correm em paralelo e assíncronos
      </div>
    </div>
  );
}

/* ─── Send/Recv timeline ─── */
function SvgTimeline() {
  const cSend = '#f97316';
  const cRecv = '#f59e0b';
  const cWait = '#475569';
  const cComp = '#1e293b';

  const seg = (label, c, flex, faint) => (
    <div style={{
      flex, padding: '5px 8px', borderRadius: 6, textAlign: 'center',
      background: faint ? `${c}22` : c,
      border: `1.5px solid ${c}`,
      color: faint ? c : '#fff',
      fontWeight: faint ? 400 : 700,
      fontSize: '0.75rem', fontFamily: 'monospace', whiteSpace: 'nowrap',
    }}>{label}</div>
  );

  const row = (label, children, labelC) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div style={{ width: 60, fontWeight: 700, fontSize: '0.8rem', color: labelC || 'var(--text-primary)', flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, display: 'flex', gap: '4px', alignItems: 'stretch' }}>{children}</div>
    </div>
  );

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '1.2rem' }}>
      {/* Bloqueante panel */}
      <div style={{ border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem 1.2rem', background: 'var(--bg-secondary)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Bloqueante — MPI_Send / MPI_Recv
        </div>
        {/* time axis */}
        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', paddingLeft: 68 }}>Tempo →</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {row('P0', <>
            {seg('MPI_Send', cSend, 2)}
            <div style={{ flex: 3 }} />
          </>)}
          {row('P1', <>
            {seg('aguarda…', cWait, 1, true)}
            {seg('MPI_Recv', cRecv, 2)}
            <div style={{ flex: 1 }} />
          </>)}
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.6rem', paddingLeft: 68 }}>
          P1 fica <strong>bloqueado</strong> até P0 enviar — sem sobreposição
        </div>
      </div>

      {/* Não-bloqueante panel */}
      <div style={{ border: `1px solid rgba(249,115,22,0.4)`, borderRadius: 10, padding: '1rem 1.2rem', background: 'rgba(249,115,22,0.05)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: cSend, marginBottom: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Não-bloqueante — MPI_Isend / MPI_Irecv + overlap
        </div>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', paddingLeft: 68 }}>Tempo →</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {row('P0 (NB)', <>
            {seg('MPI_Isend', cSend, 1)}
            {seg('computar…', cComp, 3, true)}
            {seg('MPI_Wait', '#94a3b8', 1, true)}
          </>)}
          {row('P1 (NB)', <>
            {seg('MPI_Irecv', cRecv, 1)}
            {seg('computar…', cComp, 3, true)}
            {seg('MPI_Wait', '#94a3b8', 1, true)}
          </>)}
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.6rem', paddingLeft: 68 }}>
          Comunicação e computação <strong style={{ color: cSend }}>sobrepostas</strong> — latência escondida
        </div>
      </div>
    </div>
  );
}

/* ─── Collective operations ─── */
function SvgCollectives() {
  const ops = [
    {
      name: 'MPI_Bcast', desc: 'Root envia para todos', c: '#f97316',
      // before: [root full, others empty], after: [all full]
      before: [true, false, false, false],
      after:  [true, true,  true,  true],
      dir: 'out', // arrows from root outward
    },
    {
      name: 'MPI_Scatter', desc: 'Distribui parcelas', c: '#f59e0b',
      before: [true, false, false, false],
      after:  [true, true,  true,  true],
      dir: 'out',
    },
    {
      name: 'MPI_Gather', desc: 'Recolhe no root', c: '#fb923c',
      before: [true, true,  true,  true],
      after:  [true, false, false, false],
      dir: 'in',
    },
    {
      name: 'MPI_Allreduce', desc: 'Reduz e distribui', c: '#fbbf24',
      before: [true, true,  true,  true],
      after:  [true, true,  true,  true],
      dir: 'all',
    },
  ];

  const Dot = ({ filled, c, label, small }) => (
    <div style={{
      width: small ? 26 : 30, height: small ? 26 : 30, borderRadius: '50%',
      background: filled ? c : 'transparent',
      border: `2px solid ${filled ? c : '#475569'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: '0.72rem',
      color: filled ? '#1e293b' : '#475569',
      flexShrink: 0,
    }}>{label}</div>
  );

  const Arrow = ({ dir, c }) => (
    <div style={{ fontSize: dir === 'in' ? '0.9rem' : '0.9rem', color: c, alignSelf: 'center', flexShrink: 0 }}>
      {dir === 'out' ? '→' : dir === 'in' ? '←' : '⇄'}
    </div>
  );

  return (
    <div style={{ ...S.diagram }}>
      <div style={{ display: 'flex', gap: '0.6rem', width: '100%' }}>
        {ops.map(({ name, desc, c, before, after, dir }) => (
          <div key={name} style={{ flex: 1, border: `2px solid ${c}`, borderRadius: 10, padding: '0.7rem 0.5rem', background: `${c}10`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ fontWeight: 700, fontSize: '0.78rem', color: c, fontFamily: 'monospace', textAlign: 'center' }}>{name}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', textAlign: 'center' }}>{desc}</div>
            {/* before */}
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {before.map((f, i) => <Dot key={i} filled={f} c={c} label={i} />)}
            </div>
            {/* arrow row */}
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {[0,1,2,3].map(i => <Arrow key={i} dir={dir} c={c} />)}
            </div>
            {/* after */}
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {after.map((f, i) => <Dot key={i} filled={f} c={c} label={i} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Strided vector type ─── */
function SvgVectorType() {
  const rows = 4, cols = 5;
  const selectedCol = 1;
  const cellW = 62, cellH = 30, gap = 4;
  const totalW = cols * cellW + (cols - 1) * gap;
  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
        Array 2D (4×5) — coluna 1 seleccionada&nbsp;
        <span style={{ fontFamily: 'monospace', color: '#f97316' }}>MPI_Type_vector</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: gap }}>
        {Array.from({ length: rows }, (_, r) => (
          <div key={r} style={{ display: 'flex', gap }}>
            {Array.from({ length: cols }, (_, c) => {
              const sel = c === selectedCol;
              return (
                <div key={c} style={{
                  width: cellW, height: cellH, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: sel ? '#f97316' : 'var(--bg-secondary)',
                  border: `${sel ? 2 : 1}px solid ${sel ? '#f97316' : 'var(--card-border)'}`,
                  fontFamily: 'monospace', fontSize: '0.72rem', fontWeight: sel ? 700 : 400,
                  color: sel ? '#1e293b' : 'var(--text-secondary)',
                  opacity: sel ? 1 : 0.6,
                }}>
                  [{r}][{c}]
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* stride annotation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.72rem', color: '#f97316', fontWeight: 600 }}>
        <svg width={cellW + gap} height={14} viewBox={`0 0 ${cellW + gap} 14`} style={{ display: 'inline-block' }}>
          <defs>
            <marker id="strideArr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
              <path d="M0,0 L0,5 L5,2.5 z" fill="#f97316" />
            </marker>
          </defs>
          <line x1="2" y1="7" x2={cellW + gap - 4} y2="7" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#strideArr)" />
        </svg>
        <span>stride = 5 elementos (1 linha completa)</span>
      </div>
    </div>
  );
}

/* ─── Cartesian topology 4×4 ─── */
function SvgCartesian() {
  const size = 4;
  const center = 5; // rank 5 = (1,1)
  const neighbors = new Set([1, 4, 6, 9]); // up, left, right, down
  const cCenter = '#f97316';
  const cNeighbor = '#f59e0b';

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
        Grelha Cartesiana 4×4&nbsp;
        <span style={{ fontFamily: 'monospace', color: cCenter }}>MPI_Cart_create</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 58px)', gap: 6 }}>
        {Array.from({ length: size * size }, (_, i) => {
          const r = Math.floor(i / size), c = i % size;
          const isCenter = i === center;
          const isNeighbor = neighbors.has(i);
          const bc = isCenter ? cCenter : isNeighbor ? cNeighbor : 'var(--bg-secondary)';
          const border = isCenter ? `2.5px solid ${cCenter}` : isNeighbor ? `2px solid ${cNeighbor}` : '1px solid var(--card-border)';
          const textC = (isCenter || isNeighbor) ? '#1e293b' : 'var(--text-secondary)';
          const coordC = isCenter ? 'rgba(255,255,255,0.6)' : isNeighbor ? 'rgba(30,41,59,0.6)' : '#475569';
          return (
            <div key={i} style={{ width: 58, height: 58, borderRadius: 8, background: bc, border, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: textC }}>{i}</div>
              <div style={{ fontSize: '0.65rem', color: coordC, fontFamily: 'monospace' }}>({r},{c})</div>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: '0.75rem', color: cNeighbor, fontWeight: 600 }}>
        Vizinhos do rank 5 —&nbsp;
        <span style={{ fontFamily: 'monospace' }}>MPI_Cart_shift</span>
      </div>
      {/* legend */}
      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
        <span><span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 3, background: cCenter, verticalAlign: 'middle', marginRight: 4 }} />rank 5 (origem)</span>
        <span><span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 3, background: cNeighbor, verticalAlign: 'middle', marginRight: 4 }} />vizinhos cartesianos</span>
      </div>
    </div>
  );
}

/* ─── Hybrid MPI+OpenMP cluster ─── */
function SvgHybrid() {
  const nodeColors = ['#f97316', '#f59e0b', '#fb923c', '#fbbf24'];
  const threadColors = [
    ['#f97316','#ea580c','#fb923c','#c2410c','#f97316','#ea580c','#fb923c','#c2410c'],
    ['#f59e0b','#d97706','#fbbf24','#b45309','#f59e0b','#d97706','#fbbf24','#b45309'],
    ['#fb923c','#f97316','#ea580c','#c2410c','#fb923c','#f97316','#ea580c','#c2410c'],
    ['#fbbf24','#f59e0b','#d97706','#b45309','#fbbf24','#f59e0b','#d97706','#b45309'],
  ];

  const NodeCard = ({ i }) => {
    const c = nodeColors[i];
    const tc = threadColors[i];
    return (
      <div style={{ border: `2px solid ${c}`, borderRadius: 10, padding: '0.6rem 0.5rem', background: `${c}10`, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: c, textAlign: 'center' }}>Nó {i} — MPI rank {i}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
          {Array.from({ length: 8 }, (_, t) => (
            <div key={t} style={{ background: tc[t], borderRadius: 4, padding: '3px 0', textAlign: 'center', fontSize: '0.65rem', fontWeight: 700, color: '#1e293b' }}>T{t}</div>
          ))}
        </div>
        <div style={{ fontSize: '0.62rem', color: c, textAlign: 'center', opacity: 0.8 }}>← OpenMP threads →</div>
      </div>
    );
  };

  return (
    <div style={{ ...S.diagram, flexDirection: 'column', gap: '0.7rem', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 36px 1fr', gridTemplateRows: 'auto 36px auto', gap: 6, alignItems: 'center' }}>
        {/* Row 0: Nó0 | H-arrow | Nó1 */}
        <NodeCard i={0} />
        <svg width="36" height="60" viewBox="0 0 36 60" style={{ alignSelf: 'center' }}>
          <defs>
            <marker id="mpiR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#f97316" /></marker>
            <marker id="mpiL" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto"><path d="M6,0 L6,6 L0,3 z" fill="#f97316" /></marker>
          </defs>
          <line x1="4" y1="22" x2="32" y2="22" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiR)" />
          <line x1="32" y1="38" x2="4" y2="38" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiL)" />
        </svg>
        <NodeCard i={1} />

        {/* Row 1: V-arrows */}
        <svg width="100%" height="36" viewBox="0 0 160 36" style={{ alignSelf: 'center' }}>
          <defs>
            <marker id="mpiD" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,0 L6,0 L3,6 z" fill="#f97316" /></marker>
            <marker id="mpiU" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto"><path d="M0,6 L6,6 L3,0 z" fill="#f97316" /></marker>
          </defs>
          <line x1="60" y1="4" x2="60" y2="32" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiD)" />
          <line x1="100" y1="32" x2="100" y2="4" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiU)" />
        </svg>
        <div />
        <svg width="100%" height="36" viewBox="0 0 160 36" style={{ alignSelf: 'center' }}>
          <line x1="60" y1="4" x2="60" y2="32" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiD)" />
          <line x1="100" y1="32" x2="100" y2="4" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiU)" />
        </svg>

        {/* Row 2: Nó2 | H-arrow | Nó3 */}
        <NodeCard i={2} />
        <svg width="36" height="60" viewBox="0 0 36 60" style={{ alignSelf: 'center' }}>
          <line x1="4" y1="22" x2="32" y2="22" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiR)" />
          <line x1="32" y1="38" x2="4" y2="38" stroke="#f97316" strokeWidth="1.8" markerEnd="url(#mpiL)" />
        </svg>
        <NodeCard i={3} />
      </div>
      {/* legend */}
      <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
        <span><span style={{ display: 'inline-block', width: 18, height: 3, background: '#f97316', verticalAlign: 'middle', marginRight: 5 }} />MPI (entre nós)</span>
        <span><span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 2, background: '#f97316', verticalAlign: 'middle', marginRight: 5 }} />OpenMP (dentro do nó)</span>
      </div>
    </div>
  );
}

export default function PAR5() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>

      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>MPI — Message Passing Interface</h1>
      <p style={S.lead}>
        MPI é o padrão de facto para programação paralela em sistemas de memória distribuída. Permite coordenar milhares de processos espalhados por centenas de nós de um cluster, comunicando exclusivamente por troca de mensagens. É a espinha dorsal de supercomputadores e aplicações científicas de larga escala.
      </p>

      {/* ══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Modelo de Memória Distribuída</h2>
        <p style={S.p}>
          No modelo de memória distribuída, cada processo tem o seu próprio espaço de endereçamento privado. Ao contrário do modelo de memória partilhada (OpenMP, pthreads), <strong>nenhum processo pode aceder directamente à memória de outro</strong>. Toda a colaboração entre processos ocorre através de <em>mensagens explícitas</em> enviadas pela rede de interligação.
        </p>
        <p style={S.p}>
          Esta arquitectura escala facilmente a <strong>dezenas de milhares de nós</strong> porque não existe gargalo de barramento de memória partilhada. Em contrapartida, o programador é responsável por toda a comunicação: o que enviar, para quem, quando e com que sincronização.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Característica</th>
              <th style={S.th}>Memória Partilhada (OpenMP)</th>
              <th style={S.th}>Memória Distribuída (MPI)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Espaço de endereços', 'Único, partilhado', 'Privado por processo'],
              ['Comunicação', 'Variáveis partilhadas', 'MPI_Send / MPI_Recv explícito'],
              ['Sincronização', '#pragma omp barrier / critical', 'Implícita em operações colectivas'],
              ['Escala típica', 'Até ~256 núcleos (1 nó)', 'Até centenas de milhares de cores'],
              ['Portabilidade', 'Dentro do nó', 'Entre nós e clusters heterogéneos'],
              ['Dificuldade', 'Moderada (race conditions)', 'Alta (deadlocks, serialização)'],
            ].map(([c, omp, mpi]) => (
              <tr key={c}>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}>{omp}</td>
                <td style={S.td}>{mpi}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}><SvgDistributed /></div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A rede InfiniBand usada em clusters de HPC oferece latências de <strong>~1 µs</strong> e larguras de banda de até <strong>400 Gb/s</strong> por porto (HDR InfiniBand), muito superiores às de Ethernet convencional. Ainda assim, a comunicação é sempre mais lenta do que o acesso à memória local — minimizar mensagens é a regra de ouro do MPI.
          </p>
        </div>

        <div style={S.math}>
          <BlockMath math={'T_{\\text{comm}} = \\alpha + \\beta \\cdot n'} />
        </div>
        <p style={S.p}>
          O modelo de desempenho de comunicação mais simples tem dois parâmetros: <InlineMath math={'\\alpha'} /> (latência de arranque, tipicamente 1–10 µs) e <InlineMath math={'\\beta'} /> (tempo por byte, inverso da largura de banda). Para mensagens grandes, o custo é dominado por <InlineMath math={'\\beta \\cdot n'} />; para mensagens pequenas, por <InlineMath math={'\\alpha'} />.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>2. MPI Basics</h2>
        <p style={S.p}>
          Todo o programa MPI começa com <code>MPI_Init</code> e termina com <code>MPI_Finalize</code>. Entre estas chamadas, cada processo conhece dois valores fundamentais: o seu <strong>rank</strong> (identificador único dentro do comunicador) e o <strong>size</strong> (número total de processos). O comunicador <code>MPI_COMM_WORLD</code> agrupa todos os processos lançados.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['MPI_Init(&argc, &argv)',        'Inicializa o ambiente MPI; deve ser a primeira chamada MPI'],
              ['MPI_Finalize()',                 'Termina o ambiente MPI; deve ser a última chamada MPI'],
              ['MPI_Comm_rank(comm, &rank)',     'Devolve o rank do processo chamador no comunicador comm'],
              ['MPI_Comm_size(comm, &size)',     'Devolve o número total de processos no comunicador comm'],
              ['MPI_COMM_WORLD',                 'Comunicador global predefinido que inclui todos os processos'],
              ['MPI_Wtime()',                    'Temporizador de alta resolução (segundos desde época MPI)'],
            ].map(([fn, desc]) => (
              <tr key={fn}>
                <td style={S.td}><code>{fn}</code></td>
                <td style={S.td}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}><SvgHello /></div>

        <div style={S.note}>
          O <strong>rank</strong> não implica qualquer ordem de execução. Os processos são assíncronos; a saída de <code>printf</code> pode aparecer em qualquer ordem. Para coordenação, são necessárias primitivas de comunicação explícitas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Comunicação Ponto-a-Ponto</h2>
        <p style={S.p}>
          A comunicação ponto-a-ponto envolve exactamente dois processos: um remetente e um destinatário. MPI oferece variantes <strong>bloqueantes</strong> e <strong>não-bloqueantes</strong>, com compromissos diferentes entre segurança e desempenho.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Semântica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['MPI_Send(buf, count, type, dest, tag, comm)',   'Bloqueante', 'Retorna quando o buffer pode ser reutilizado (dados enviados ou em buffer MPI)'],
              ['MPI_Recv(buf, count, type, src, tag, comm, status)', 'Bloqueante', 'Retorna quando os dados estão disponíveis no buffer destino'],
              ['MPI_Isend(buf, count, type, dest, tag, comm, &req)', 'Não-bloqueante', 'Inicia o envio; retorna imediatamente; usar MPI_Wait para completar'],
              ['MPI_Irecv(buf, count, type, src, tag, comm, &req)',  'Não-bloqueante', 'Inicia a recepção; retorna imediatamente; usar MPI_Wait para completar'],
              ['MPI_Wait(&req, &status)',     '—', 'Bloqueia até a operação não-bloqueante terminar'],
              ['MPI_Sendrecv(...)',            'Bloqueante', 'Envio e recepção simultâneos; evita deadlock em padrões pingue-pongue'],
            ].map(([fn, tipo, sem]) => (
              <tr key={fn}>
                <td style={S.td}><code style={{ fontSize: '0.8rem' }}>{fn}</code></td>
                <td style={S.td}>{tipo}</td>
                <td style={S.td}>{sem}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}><SvgTimeline /></div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Regra de ouro anti-deadlock:</strong> se dois processos precisam de trocar dados mutuamente, ou (1) um envia e o outro recebe, depois trocam os papéis, ou (2) ambos usam <code>MPI_Sendrecv</code> / operações não-bloqueantes. Nunca colocar dois <code>MPI_Send</code> simétricos antes dos <code>MPI_Recv</code> correspondentes.
          </p>
        </div>

        <div style={S.math}>
          <BlockMath math={'T_{\\text{pingpong}} = 2\\alpha + 2\\beta n \\quad \\Rightarrow \\quad \\text{latência medida} = T/2'} />
        </div>
        <p style={S.p}>
          O teste de pingue-pongue é o benchmark mais comum para medir os parâmetros da rede: o processo 0 envia para o processo 1 que imediatamente responde. Dividindo o tempo total por 2 obtemos a latência de ida e volta.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Operações Colectivas</h2>
        <p style={S.p}>
          As operações colectivas envolvem <strong>todos os processos</strong> de um comunicador. São altamente optimizadas pela implementação MPI (usam algoritmos em árvore, pipeline, etc.) e devem ser preferidas a implementações manuais equivalentes com ponto-a-ponto. <strong>Todos os processos devem chamar a mesma operação colectiva</strong> — não há excepções.
        </p>

        <div style={S.diagram}><SvgCollectives /></div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Função</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Complexidade típica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['MPI_Bcast',     'Root transmite buffer para todos os processos',          'O(log P · β·n + α·log P)'],
              ['MPI_Scatter',   'Root distribui parcelas distintas a cada processo',      'O(log P · α + β·n)'],
              ['MPI_Gather',    'Root recolhe parcelas de todos os processos',            'O(log P · α + β·n)'],
              ['MPI_Allgather', 'Todos os processos recolhem dados de todos (sem root)',  'O(log P · α + β·n·P)'],
              ['MPI_Reduce',    'Aplica operação (SUM, MAX, …) e coloca resultado no root','O(log P · (α + β·n))'],
              ['MPI_Allreduce', 'Reduce + Bcast; resultado disponível em todos',          'O(log P · (α + β·n))'],
              ['MPI_Barrier',   'Sincronização: nenhum processo avança até todos chegarem','O(log P · α)'],
            ].map(([fn, desc, cplx]) => (
              <tr key={fn}>
                <td style={S.td}><code>{fn}</code></td>
                <td style={S.td}>{desc}</td>
                <td style={S.td}><em style={{ fontSize: '0.82rem' }}>{cplx}</em></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.math}>
          <BlockMath math={'\\text{Speedup}_\\text{reduce} = \\frac{P \\cdot T_{\\text{seq}}}{T_{\\text{comp}} + T_{\\text{reduce}}} = \\frac{P \\cdot n}{n + \\log_2 P \\cdot \\alpha / \\beta}'} />
        </div>

        <div style={S.note}>
          Operações MPI predefinidas: <code>MPI_SUM</code>, <code>MPI_PROD</code>, <code>MPI_MAX</code>, <code>MPI_MIN</code>, <code>MPI_LAND</code> (AND lógico), <code>MPI_LOR</code>, <code>MPI_BAND</code> (AND bit a bit). É também possível definir operações personalizadas com <code>MPI_Op_create</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Tipos de Dados e Comunicadores</h2>
        <p style={S.p}>
          MPI define tipos de dados básicos (<code>MPI_INT</code>, <code>MPI_DOUBLE</code>, <code>MPI_FLOAT</code>, <code>MPI_BYTE</code>, <code>MPI_CHAR</code>, etc.) e permite construir tipos derivados para descrever estruturas de dados não-contíguas em memória, evitando cópias intermédias dispendiosas.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo Básico MPI</th>
              <th style={S.th}>Equivalente C</th>
              <th style={S.th}>Tamanho</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['MPI_INT',    'int',            '4 bytes'],
              ['MPI_LONG',   'long',           '8 bytes'],
              ['MPI_FLOAT',  'float',          '4 bytes'],
              ['MPI_DOUBLE', 'double',         '8 bytes'],
              ['MPI_CHAR',   'char',           '1 byte'],
              ['MPI_BYTE',   '(byte bruto)',   '1 byte (sem conversão)'],
            ].map(([mpi, c, sz]) => (
              <tr key={mpi}>
                <td style={S.td}><code>{mpi}</code></td>
                <td style={S.td}><code>{c}</code></td>
                <td style={S.td}>{sz}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.diagram}><SvgVectorType /></div>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>MPI_Comm_split</strong> é fundamental para algoritmos hierárquicos: por exemplo, num cluster com 4 nós de 16 processos cada, podemos criar comunicadores por nó para operações locais e manter o <code>MPI_COMM_WORLD</code> para comunicação global. Combinado com topologias virtuais, permite mapear a comunicação à topologia física do cluster.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Topologias Virtuais</h2>
        <p style={S.p}>
          MPI permite associar uma <strong>topologia virtual</strong> a um comunicador, mapeando ranks a posições numa grelha cartesiana ou num grafo arbitrário. Isto simplifica a programação de algoritmos com padrões de comunicação estruturados (stencils, decomposição de domínios, multiplicação de matrizes) e pode permitir que o MPI optimize o mapeamento físico.
        </p>

        <div style={S.diagram}><SvgCartesian /></div>

        <div style={S.note}>
          Com <code>periods={`{1,1}`}</code>, a grelha é tórica: o rank na linha 0 tem como vizinho norte o rank na linha 3, e vice-versa. Isto é muito útil em simulações de fluidos (CFD) e dinâmica molecular com condições de fronteira periódicas.
        </div>

        <div style={S.math}>
          <BlockMath math={'\\text{rank}(r, c) = r \\times N_c + c \\quad \\Leftrightarrow \\quad (r, c) = \\left(\\left\\lfloor \\frac{\\text{rank}}{N_c} \\right\\rfloor,\\; \\text{rank} \\bmod N_c\\right)'} />
        </div>
        <p style={S.p}>
          A função <code>MPI_Cart_create</code> com <code>reorder=1</code> pode remapear os ranks para que processos com coordenadas adjacentes na grelha correspondam a ranks fisicamente próximos na rede, reduzindo a contenção de mensagens.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Paralelismo Híbrido MPI+OpenMP</h2>
        <p style={S.p}>
          Os supercomputadores modernos têm uma arquitectura <strong>hierárquica</strong>: nós de computação ligados por rede de alta velocidade, cada um com múltiplos sockets, cada socket com múltiplos núcleos que partilham memória. O modelo híbrido MPI+OpenMP explora ambos os níveis: <strong>MPI entre nós</strong>, <strong>OpenMP dentro do nó</strong>.
        </p>
        <p style={S.p}>
          Os benefícios são múltiplos: redução do número de processos MPI (menor overhead de comunicação nas colectivas), melhor utilização da hierarquia de cache, e menor consumo de memória (dados partilhados entre threads do mesmo processo vs. replicados por processo MPI).
        </p>

        <div style={S.diagram}><SvgHybrid /></div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível de Thread MPI</th>
              <th style={S.th}>Significado</th>
              <th style={S.th}>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['MPI_THREAD_SINGLE',    'Só uma thread usará MPI',                               'MPI puro sem OpenMP'],
              ['MPI_THREAD_FUNNELED',  'Só a thread master (que fez MPI_Init) chama MPI',       'Caso mais comum: OpenMP paraleliza computação, thread master faz MPI'],
              ['MPI_THREAD_SERIALIZED','Threads chamam MPI mas não em simultâneo (serializado)', 'Menos comum; overhead de sincronização'],
              ['MPI_THREAD_MULTIPLE',  'Múltiplas threads chamam MPI simultaneamente',           'Máxima flexibilidade; suporte depende da implementação'],
            ].map(([nivel, sig, uso]) => (
              <tr key={nivel}>
                <td style={S.td}><code style={{ fontSize: '0.8rem' }}>{nivel}</code></td>
                <td style={S.td}>{sig}</td>
                <td style={S.td}>{uso}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Estratégia recomendada:</strong> usar 1 processo MPI por socket (ou por nó NUMA), com tantas threads OpenMP quantos os núcleos disponíveis. Por exemplo, num nó com 2 sockets × 16 núcleos: 2 processos MPI × 16 threads OpenMP = 32 núcleos totalmente utilizados. Isto minimiza o overhead MPI e maximiza a partilha de cache L3 dentro do socket.
          </p>
        </div>

        <div style={S.math}>
          <BlockMath math={'T_{\\text{híbrido}} = \\frac{T_{\\text{comp}}}{P_{\\text{MPI}} \\cdot T_{\\text{OMP}}} + T_{\\text{comm}}(P_{\\text{MPI}}) + T_{\\text{sync}}(T_{\\text{OMP}})'} />
        </div>
        <p style={S.p}>
          O tempo total depende da eficiência da paralelização em dois níveis: <InlineMath math={'P_{\\text{MPI}}'} /> processos MPI entre nós e <InlineMath math={'T_{\\text{OMP}}'} /> threads OpenMP dentro de cada nó. A comunicação MPI escala com <InlineMath math={'P_{\\text{MPI}}'} /> (menos processos = menos mensagens), enquanto a sincronização OpenMP escala com <InlineMath math={'T_{\\text{OMP}}'} />.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════════════════════════ */}
              <h2 style={{ ...S.h2, borderLeft: 'none', paddingLeft: 0, marginBottom: '0.75rem' }}>8. Síntese do Módulo</h2>
<div style={{ ...S.highlight, borderRadius: 10 }}>
        <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 2.1 }}>
          <li><strong>Memória Distribuída:</strong> cada processo tem espaço de endereçamento privado; comunicação exclusivamente por mensagens explícitas; escala a milhares de nós; contrasta com OpenMP que exige memória partilhada.</li>
          <li><strong>MPI Basics:</strong> <code>MPI_Init</code> / <code>MPI_Finalize</code> delimitam o programa; <code>MPI_Comm_rank</code> e <code>MPI_Comm_size</code> identificam o processo; <code>MPI_COMM_WORLD</code> é o comunicador global predefinido.</li>
          <li><strong>Ponto-a-Ponto:</strong> <code>MPI_Send</code> / <code>MPI_Recv</code> são bloqueantes; <code>MPI_Isend</code> / <code>MPI_Irecv</code> são não-bloqueantes e permitem sobrepor comunicação e computação; <code>MPI_Sendrecv</code> evita deadlocks em trocas simétricas.</li>
          <li><strong>Colectivas:</strong> Bcast, Scatter, Gather, Allgather, Reduce, Allreduce, Barrier — todos os processos participam; implementações internas são altamente optimizadas com algoritmos em árvore.</li>
          <li><strong>Tipos e Comunicadores:</strong> tipos derivados (<code>MPI_Type_vector</code>, <code>MPI_Type_contiguous</code>) evitam cópias de dados não-contíguos; <code>MPI_Comm_split</code> cria sub-comunicadores para algoritmos hierárquicos.</li>
          <li><strong>Topologias Virtuais:</strong> <code>MPI_Cart_create</code> mapeia ranks a grelhas cartesianas; <code>MPI_Cart_shift</code> devolve os ranks vizinhos; simplifica stencils e decomposição de domínios com fronteiras periódicas.</li>
          <li><strong>MPI+OpenMP:</strong> modelo híbrido ideal para arquitecturas de cluster modernas; MPI entre nós, OpenMP dentro do nó; iniciar com <code>MPI_Init_thread(MPI_THREAD_FUNNELED)</code>; tipicamente 1 processo MPI por socket.</li>
        </ul>
      </div>
    </div>
  );
}
