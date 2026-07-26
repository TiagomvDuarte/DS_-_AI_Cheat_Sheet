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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.2rem 0', overflowX: 'auto', textAlign: 'center' },
  math: { margin: '1rem 0', padding: '0.75rem 1rem', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, overflowX: 'auto' },
};

/* ── SVG: Processos vs Threads ─────────────────────────────────────── */
function DiagramProcessosThreads() {
  return (
    <svg width="780" height="240" viewBox="0 0 780 240" style={{ maxWidth: '100%' }}>
      {/* Processo A */}
      <rect x="20" y="10" width="170" height="210" rx="10" fill="none" stroke={color} strokeWidth="2" />
      <text x="105" y="32" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Processo A</text>
      <rect x="35" y="42" width="140" height="38" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="105" y="58" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Globals / BSS</text>
      <text x="105" y="74" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">variáveis globais</text>
      <rect x="35" y="88" width="140" height="38" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="105" y="104" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Heap</text>
      <text x="105" y="120" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">alocação dinâmica</text>
      <rect x="35" y="134" width="140" height="38" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="105" y="150" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Stack</text>
      <text x="105" y="166" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">frames de função</text>
      <rect x="35" y="180" width="140" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="105" y="200" textAnchor="middle" fontSize="11" fill="var(--text-primary)">File Descriptors / PID</text>

      {/* Processo B */}
      <rect x="210" y="10" width="170" height="210" rx="10" fill="none" stroke="#4a9eed" strokeWidth="2" />
      <text x="295" y="32" textAnchor="middle" fontSize="13" fontWeight="700" fill="#4a9eed">Processo B</text>
      <rect x="225" y="42" width="140" height="38" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="295" y="58" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Globals / BSS</text>
      <text x="295" y="74" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">espaço separado</text>
      <rect x="225" y="88" width="140" height="38" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="295" y="104" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Heap</text>
      <text x="295" y="120" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">espaço separado</text>
      <rect x="225" y="134" width="140" height="38" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="295" y="150" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Stack</text>
      <text x="295" y="166" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">frames de função</text>
      <rect x="225" y="180" width="140" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" />
      <text x="295" y="200" textAnchor="middle" fontSize="11" fill="#4a9eed">File Descriptors / PID</text>

      {/* VS label */}
      <text x="395" y="125" textAnchor="middle" fontSize="18" fontWeight="800" fill="var(--text-secondary)">vs</text>

      {/* Processo C com 4 threads */}
      <rect x="420" y="10" width="340" height="210" rx="10" fill="none" stroke={color} strokeWidth="2" />
      <text x="590" y="32" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Processo C — memória partilhada</text>
      {/* shared areas */}
      <rect x="435" y="42" width="310" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="590" y="62" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Globals / Heap — partilhado por todas as threads</text>
      {/* 4 thread stacks */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={435 + i * 78} y="82" width="70" height="130" rx="5" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" strokeDasharray="4 2" />
          <text x={470 + i * 78} y="102" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>T{i}</text>
          <text x={470 + i * 78} y="118" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Stack</text>
          <text x={470 + i * 78} y="132" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">privada</text>
          <text x={470 + i * 78} y="150" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PC / regs</text>
          <text x={470 + i * 78} y="166" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">locais</text>
        </g>
      ))}
    </svg>
  );
}

/* ── GIL Timeline ─────────────────────────────────────────────────── */
function DiagramGIL() {
  const c1 = '#4a9eed'; // Thread 1 — orange
  const c2 = '#0284c7'; // Thread 2 — amber
  const cSwitch = '#94a3b8';
  // slots: [x, width, owner] — 0=T1 1=T2 null=switch
  const W = 660;
  const slotW = 130;
  const gap = 18;
  const startX = 90;
  // 3 execution slots per thread, alternating ownership
  const slots = [
    { x: startX,                w: slotW, owner: 0 },
    { x: startX + slotW + gap,  w: slotW, owner: 1 },
    { x: startX + 2*(slotW+gap),w: slotW, owner: 0 },
  ];
  const switchXs = [startX + slotW, startX + slotW + gap + slotW];
  const rowY = (t) => t === 0 ? 68 : 128;
  const rowH = 34;
  return (
    <svg width={W} height={220} viewBox={`0 0 ${W} 220`} style={{ maxWidth: '100%' }}>
      <defs>
        <marker id="gilArr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={cSwitch} />
        </marker>
      </defs>

      {/* GIL ownership bar */}
      <text x="4" y="24" fontSize="10" fontWeight="700" fill={cSwitch}>GIL</text>
      {slots.map((s, i) => {
        const c = s.owner === 0 ? c1 : c2;
        return (
          <g key={i}>
            <rect x={s.x} y={10} width={s.w} height={16} rx="3" fill={c} opacity="0.9" />
            <text x={s.x + s.w/2} y={22} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
              {s.owner === 0 ? 'Thread 1' : 'Thread 2'}
            </text>
          </g>
        );
      })}

      {/* Thread labels */}
      <text x="4" y={rowY(0)+21} fontSize="11" fontWeight="700" fill={c1}>T1</text>
      <text x="4" y={rowY(1)+21} fontSize="11" fontWeight="700" fill={c2}>T2</text>

      {/* Timeline rows */}
      {[0, 1].map(t => {
        const y = rowY(t);
        return slots.map((s, i) => {
          const active = s.owner === t;
          const c = t === 0 ? c1 : c2;
          return (
            <g key={`${t}-${i}`}>
              <rect x={s.x} y={y} width={s.w} height={rowH} rx="5"
                fill={active ? c : 'var(--bg-secondary)'}
                stroke={active ? c : cSwitch}
                strokeWidth={active ? 0 : 1}
                opacity={active ? 1 : 0.5}
              />
              <text x={s.x + s.w/2} y={y + rowH/2 + 5} textAnchor="middle"
                fontSize="10" fontWeight={active ? '700' : '400'}
                fill={active ? '#fff' : 'var(--text-secondary)'}>
                {active ? 'Python bytecode' : 'aguarda GIL'}
              </text>
            </g>
          );
        });
      })}

      {/* Switch arrows */}
      {switchXs.map((x, i) => (
        <g key={i}>
          <line x1={x + gap/2} y1={rowY(0) + rowH} x2={x + gap/2} y2={rowY(1)}
            stroke={cSwitch} strokeWidth="1.5" strokeDasharray="3,2"
            markerEnd="url(#gilArr)" />
          <text x={x + gap/2} y={rowY(0) + rowH + (rowY(1)-rowY(0)-rowH)/2 + 4}
            textAnchor="middle" fontSize="8" fill={cSwitch}>troca</text>
        </g>
      ))}

      {/* Time axis */}
      <line x1={startX} y1={175} x2={W-10} y2={175} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={startX} y={188} fontSize="9" fill="var(--text-secondary)">t = 0</text>
      <text x={W-30} y={188} fontSize="9" fill="var(--text-secondary)">tempo</text>
      {[startX + slotW + gap/2, startX + slotW*2 + gap*1.5].map((x, i) => (
        <line key={i} x1={x} y1={172} x2={x} y2={178} stroke="var(--text-secondary)" strokeWidth="1" />
      ))}

      {/* Legend */}
      <rect x={startX} y={198} width={18} height={10} rx="2" fill={c1} />
      <text x={startX+22} y={207} fontSize="9" fill="var(--text-secondary)">Thread 1 executa</text>
      <rect x={startX+130} y={198} width={18} height={10} rx="2" fill={c2} />
      <text x={startX+152} y={207} fontSize="9" fill="var(--text-secondary)">Thread 2 executa</text>
      <rect x={startX+265} y={198} width={18} height={10} rx="2" fill="var(--bg-secondary)" stroke={cSwitch} strokeWidth="1" />
      <text x={startX+287} y={207} fontSize="9" fill="var(--text-secondary)">aguarda GIL</text>
    </svg>
  );
}

/* ── I/O-bound threads timeline ────────────────────────────────────── */
function DiagramIOThreads() {
  const tColors = ['#4a9eed', '#0284c7', '#38bdf8', '#7dd3fc'];
  // segments: x in "timeline units" (0–300), scaled to SVG pixels
  const startX = 80;
  const scale = 1.8; // px per unit
  const rows = [
    [{ x: 0, w: 18, type: 'cpu' }, { x: 18, w: 155, type: 'io' }, { x: 173, w: 16, type: 'cpu' }],
    [{ x: 8, w: 14, type: 'cpu' }, { x: 22, w: 130, type: 'io' }, { x: 152, w: 20, type: 'cpu' }],
    [{ x: 4, w: 20, type: 'cpu' }, { x: 24, w: 165, type: 'io' }, { x: 189, w: 14, type: 'cpu' }],
    [{ x: 6, w: 16, type: 'cpu' }, { x: 22, w: 140, type: 'io' }, { x: 162, w: 18, type: 'cpu' }],
  ];
  const rowH = 32;
  const rowGap = 12;
  const totalRows = rows.length;
  const svgH = 40 + totalRows * (rowH + rowGap) + 50;
  const maxEnd = 210 * scale; // rightmost edge
  const totalW = startX + maxEnd + 60;

  return (
    <svg width={totalW} height={svgH} viewBox={`0 0 ${totalW} ${svgH}`} style={{ maxWidth: '100%' }}>
      <defs>
        <marker id="ioArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Legend */}
      <rect x={startX} y={8} width={16} height={12} rx="2" fill="#4a9eed" />
      <text x={startX+20} y={19} fontSize="10" fill="var(--text-secondary)">CPU (executa código)</text>
      <rect x={startX+165} y={8} width={16} height={12} rx="2" fill="rgba(74,158,237,0.15)" stroke="#4a9eed" strokeWidth="1" strokeDasharray="3,2" />
      <text x={startX+185} y={19} fontSize="10" fill="var(--text-secondary)">I/O bloqueada (aguarda rede/disco)</text>

      {/* Thread rows */}
      {rows.map((segs, ti) => {
        const c = tColors[ti];
        const y = 32 + ti * (rowH + rowGap);
        return (
          <g key={ti}>
            <text x={startX - 10} y={y + rowH/2 + 4} textAnchor="end" fontSize="11" fontWeight="700" fill={c}>T{ti+1}</text>
            {/* background track */}
            <rect x={startX} y={y} width={maxEnd} height={rowH} rx="4" fill="rgba(255,255,255,0.03)" stroke="var(--card-border)" strokeWidth="0.5" />
            {segs.map((s, si) => {
              const sx = startX + s.x * scale;
              const sw = s.w * scale;
              const isCpu = s.type === 'cpu';
              return (
                <g key={si}>
                  <rect x={sx} y={y+2} width={sw} height={rowH-4} rx="3"
                    fill={isCpu ? c : 'rgba(74,158,237,0.12)'}
                    stroke={isCpu ? 'none' : c}
                    strokeWidth={isCpu ? 0 : 1}
                    strokeDasharray={isCpu ? 'none' : '4,2'}
                  />
                  {sw > 24 && (
                    <text x={sx + sw/2} y={y + rowH/2 + 4} textAnchor="middle" fontSize="9"
                      fill={isCpu ? '#fff' : c} fontWeight={isCpu ? '700' : '400'}>
                      {isCpu ? 'CPU' : 'I/O wait'}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Total time bracket */}
      {(() => {
        const bracketY = 32 + totalRows * (rowH + rowGap) + 4;
        const maxSegEnd = Math.max(...rows.map(r => {
          const last = r[r.length-1];
          return last.x + last.w;
        })) * scale;
        return (
          <g>
            <line x1={startX} y1={bracketY} x2={startX + maxSegEnd} y2={bracketY}
              stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#ioArr)" />
            <text x={startX + maxSegEnd/2} y={bracketY + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">
              tempo total ≈ maior pedido individual (não soma)
            </text>
            <line x1={startX} y1={bracketY - 4} x2={startX} y2={bracketY + 4} stroke="var(--text-secondary)" strokeWidth="1" />
          </g>
        );
      })()}
    </svg>
  );
}

/* ── SVG: multiprocessing — 4 cores ───────────────────────────────── */
function DiagramMultiprocessing() {
  const pw = ['#4a9eed', '#4a9eed', '#4a9eed', '#4a9eed'];
  return (
    <svg width="700" height="200" viewBox="0 0 700 200" style={{ maxWidth: '100%' }}>
      {pw.map((c, i) => (
        <g key={i}>
          {/* core box */}
          <rect x={30 + i * 165} y="10" width="145" height="170" rx="10" fill="none" stroke={c} strokeWidth="2" />
          <text x={103 + i * 165} y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={c}>Worker {i}</text>
          <text x={103 + i * 165} y="50" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Processo independente</text>
          {/* interpreter box */}
          <rect x={45 + i * 165} y="58" width="115" height="30" rx="5" fill={`${c}22`} stroke={c} strokeWidth="1" />
          <text x={103 + i * 165} y="77" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Python Interpreter</text>
          {/* GIL */}
          <rect x={45 + i * 165} y="96" width="115" height="24" rx="5" fill={`${c}33`} stroke={c} strokeWidth="1" />
          <text x={103 + i * 165} y="112" textAnchor="middle" fontSize="10" fontWeight="700" fill={c}>GIL próprio</text>
          {/* core */}
          <rect x={45 + i * 165} y="128" width="115" height="40" rx="5" fill={`${c}15`} stroke={c} strokeWidth="1" />
          <text x={103 + i * 165} y="148" textAnchor="middle" fontSize="10" fill="var(--text-primary)">CPU Core {i}</text>
          <text x={103 + i * 165} y="162" textAnchor="middle" fontSize="9" fill={c}>100% ativo</text>
        </g>
      ))}
    </svg>
  );
}

/* ── SVG: asyncio event loop ───────────────────────────────────────── */
function DiagramAsyncio() {
  return (
    <svg width="680" height="220" viewBox="0 0 680 220" style={{ maxWidth: '100%' }}>
      {/* event loop circle */}
      <circle cx="340" cy="110" r="70" fill="none" stroke={color} strokeWidth="2.5" />
      <text x="340" y="105" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Event</text>
      <text x="340" y="122" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Loop</text>
      {/* coroutines outside */}
      {[
        { label: 'fetch(url1)', cx: 100, cy: 50 },
        { label: 'fetch(url2)', cx: 580, cy: 50 },
        { label: 'write_db()', cx: 100, cy: 170 },
        { label: 'read_file()', cx: 580, cy: 170 },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.cx - 55} y={c.cy - 18} width="110" height="36" rx="8"
            fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
          <text x={c.cx} y={c.cy + 6} textAnchor="middle" fontSize="10" fill="var(--text-primary)">{c.label}</text>
        </g>
      ))}
      {/* arrows loop→coroutine */}
      {[
        { x1: 280, y1: 75, x2: 160, y2: 57 },
        { x1: 400, y1: 75, x2: 520, y2: 57 },
        { x1: 280, y1: 145, x2: 160, y2: 163 },
        { x1: 400, y1: 145, x2: 520, y2: 163 },
      ].map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={color} strokeWidth="1.5" strokeDasharray="5 3"
          markerEnd="url(#aArr)" />
      ))}
      <defs>
        <marker id="aArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill={color} />
        </marker>
      </defs>
      <text x="340" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">
        loop selecciona coroutine pronta → executa até await → passa à seguinte
      </text>
    </svg>
  );
}

/* ── Race Condition diagram ─────────────────────────────────────────── */
function DiagramRaceCondition() {
  const cA = '#4a9eed';
  const cB = '#0284c7';
  const steps = [
    { t: 'A', label: 'lê counter = 0',       note: null },
    { t: 'A', label: 'calcula 0 + 1 = 1',    note: null },
    { t: '!', label: 'preempted pelo SO',     note: 'Thread A suspensa' },
    { t: 'B', label: 'lê counter = 0',        note: null },
    { t: 'B', label: 'calcula 0 + 1 = 1',    note: null },
    { t: 'B', label: 'escreve counter = 1',   note: null },
    { t: 'A', label: 'escreve counter = 1',   note: '← perdeu actualização!' },
  ];
  const colW = '1fr 28px 1fr';
  const stepStyle = (active, c) => ({
    padding: '7px 12px',
    borderRadius: 6,
    border: `1.5px solid ${active ? c : 'var(--card-border)'}`,
    background: active ? `${c}18` : 'transparent',
    color: active ? c : 'var(--text-secondary)',
    fontSize: '0.78rem',
    fontWeight: active ? 600 : 400,
    opacity: active ? 1 : 0.35,
  });
  return (
    <div style={{ ...S.diagram, padding: '1rem 1.2rem' }}>
      {/* header */}
      <div style={{ display: 'grid', gridTemplateColumns: colW, gap: '0.5rem', marginBottom: '0.6rem' }}>
        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.85rem', color: cA }}>Thread A</div>
        <div />
        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.85rem', color: cB }}>Thread B</div>
      </div>

      {/* shared counter badge */}
      <div style={{ textAlign: 'center', marginBottom: '0.8rem' }}>
        <span style={{ background: 'rgba(74,158,237,0.12)', border: '1.5px solid #4a9eed', borderRadius: 8, padding: '4px 18px', fontSize: '0.85rem', fontWeight: 700, color: '#4a9eed' }}>
          counter = 0 &nbsp;(memória partilhada)
        </span>
      </div>

      {/* steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {steps.map(({ t, label, note }, i) => {
          const isA = t === 'A';
          const isB = t === 'B';
          const isWarn = t === '!';
          const c = isA ? cA : cB;
          return (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: colW, gap: '0.5rem', alignItems: 'center' }}>
              {/* Thread A column */}
              <div style={isA ? stepStyle(true, cA) : { opacity: 0 }}>
                {isA && <><span style={{ marginRight: 6, opacity: 0.6 }}>{i+1}.</span>{label}{note && <span style={{ marginLeft: 8, color: '#0369a1', fontSize: '0.72rem' }}>{note}</span>}</>}
              </div>
              {/* centre tick */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {isWarn
                  ? <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>⟳</span>
                  : <span style={{ width: 6, height: 6, borderRadius: '50%', background: isA ? cA : cB, display: 'inline-block' }} />
                }
              </div>
              {/* Thread B column */}
              <div style={isB ? stepStyle(true, cB) : (isWarn ? { fontSize: '0.75rem', color: '#64748b', textAlign: 'center' } : { opacity: 0 })}>
                {isB && <><span style={{ marginRight: 6, opacity: 0.6 }}>{i+1}.</span>{label}{note && <span style={{ marginLeft: 8, color: '#0369a1', fontSize: '0.72rem' }}>{note}</span>}</>}
                {isWarn && 'Thread B activa'}
              </div>
            </div>
          );
        })}
      </div>

      {/* result */}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <span style={{ background: 'rgba(74,158,237,0.08)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '5px 14px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          esperado: <strong style={{ color: cA }}>counter = 2</strong>
        </span>
        <span style={{ background: 'rgba(3,105,161,0.12)', border: '1.5px solid #0369a1', borderRadius: 6, padding: '5px 14px', fontSize: '0.8rem', color: '#0369a1', fontWeight: 600 }}>
          real: counter = 1 &nbsp;← lost update!
        </span>
      </div>
    </div>
  );
}

export default function PAR3() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>
      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Threads, Processos e Programação Paralela em Python</h1>
      <p style={S.lead}>
        Python oferece três paradigmas principais de concorrência: <strong>threading</strong> para tarefas I/O-bound,
        <strong> multiprocessing</strong> para tarefas CPU-bound, e <strong>asyncio</strong> para concorrência cooperativa.
        Compreender o GIL — Global Interpreter Lock — é fundamental para escolher a ferramenta certa.
      </p>

      {/* ── SECÇÃO 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Processos vs Threads</h2>
        <p style={S.p}>
          Um <strong>processo</strong> é uma instância de programa em execução com o seu próprio espaço de endereçamento virtual: heap, stack, globais e descritores de ficheiro. A comunicação entre processos (IPC) exige mecanismos explícitos como pipes ou sockets.
        </p>
        <p style={S.p}>
          Uma <strong>thread</strong> é uma unidade de execução <em>leve</em> que partilha o espaço de memória do processo pai: partilha heap e globais, mas tem stack, program counter e registos próprios. A criação de uma thread é tipicamente 10&ndash;100× mais rápida que a de um processo, e a troca de contexto entre threads é mais barata do que entre processos.
        </p>
        <div style={S.math}>
          <BlockMath math={`T_{\\text{context switch processo}} \\approx 5\\text{–}10\\,\\mu s \\quad \\gg \\quad T_{\\text{context switch thread}} \\approx 1\\text{–}3\\,\\mu s`} />
        </div>
        <div style={S.diagram}>
          <DiagramProcessosThreads />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            Esquerda: dois processos com espaços de memória completamente isolados. Direita: um processo com quatro threads a partilhar heap e globais, mas com stacks separadas.
          </p>
        </div>
        <div style={S.note}>
          No Linux, threads são implementadas como <em>lightweight processes</em> (LWP) via <code>clone()</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Python GIL — Global Interpreter Lock</h2>
        <p style={S.p}>
          O GIL é um <strong>mutex</strong> interno do CPython que garante que apenas <em>uma thread</em> executa bytecode Python de cada vez, mesmo em máquinas multicore. Existe porque a gestão de memória do CPython usa <strong>reference counting</strong>: sem proteção, duas threads poderiam decrementar simultaneamente o mesmo contador, corrompendo a heap. Consequência prática: adicionar mais threads Python <strong>não acelera</strong> cálculos CPU-bound puros — pode até torná-los mais lentos pelo overhead de aquisição/libertação do GIL.
        </p>
        <div style={S.math}>
          <BlockMath math={`\\text{Speedup}_\\text{threading CPU-bound} = \\frac{T_1}{T_n} \\approx 1 \\quad (\\text{com GIL})`} />
        </div>
        <div style={S.diagram}>
          <DiagramGIL />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            Timeline de duas threads Python CPU-bound: apenas uma executa de cada vez. O GIL é libertado e readquirido periodicamente (a cada ~5 ms ou 100 bytecodes).
          </p>
        </div>
        <p style={S.p}>
          O GIL <strong>é libertado</strong> automaticamente em certas situações, permitindo verdadeiro paralelismo mesmo com threads:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>GIL libertado?</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Operações de I/O (rede, disco)', 'Sim', 'socket.recv(), open().read()'],
              ['Operações NumPy / SciPy', 'Sim (C extension)', 'np.dot(a, b), np.fft.fft(x)'],
              ['Extensões C bem escritas', 'Sim', 'Py_BEGIN_ALLOW_THREADS'],
              ['time.sleep()', 'Sim', 'permite outras threads correr'],
              ['Bytecode Python puro', 'Não', 'loops, aritmética, listas'],
            ].map(([sit, gil, ex]) => (
              <tr key={sit}>
                <td style={S.td}>{sit}</td>
                <td style={S.td}><span style={{ color: gil === 'Sim' || gil.startsWith('Sim') ? color : '#4a9eed', fontWeight: 700 }}>{gil}</span></td>
                <td style={S.td}><code>{ex}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Nota histórica:</strong> O Python 3.13 introduziu modo <em>free-threaded</em> experimental (<code>--disable-gil</code>). Em versões anteriores, para verdadeiro paralelismo CPU-bound em Python, a solução canónica é <code>multiprocessing</code>.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. threading — Concorrência I/O-Bound</h2>
        <p style={S.p}>
          Apesar do GIL, o módulo <code>threading</code> é <strong>muito eficaz</strong> para tarefas I/O-bound. Enquanto uma thread aguarda uma resposta de rede ou disco, o GIL é libertado e outra thread pode executar — o resultado é sobreposição de esperas e um speedup real.
        </p>
        <div style={S.diagram}>
          <DiagramIOThreads />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            Quatro threads a fazer pedidos de rede em simultâneo. O tempo total aproxima-se do maior pedido individual, não da soma de todos.
          </p>
        </div>
        <div style={S.note}>
          Regra prática: use <code>ThreadPoolExecutor</code> sempre que o bottleneck seja I/O (rede, base de dados, ficheiros). Para CPU-bound, passe para <code>ProcessPoolExecutor</code> com a mesma API.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. multiprocessing — Tarefas CPU-Bound</h2>
        <p style={S.p}>
          O módulo <code>multiprocessing</code> contorna o GIL lançando <strong>processos filhos</strong> completos, cada um com o seu próprio intérprete Python e GIL, correndo em cores diferentes. O custo é maior — criação de processo, serialização via <em>pickle</em>, comunicação IPC — e só se justifica quando o trabalho por tarefa é suficientemente pesado.
        </p>
        <div style={S.math}>
          <BlockMath math={`\\text{Speedup ideal} = \\frac{T_1}{T_n} \\approx n \\quad (\\text{Lei de Amdahl: } S = \\frac{1}{1-p + p/n})`} />
        </div>
        <div style={S.diagram}>
          <DiagramMultiprocessing />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            Quatro processos worker independentes, cada um com o seu intérprete e GIL, a executar em paralelo em cores distintos.
          </p>
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Atenção:</strong> no Windows e macOS (spawn), todo o código ao nível do módulo é re-executado nos workers. Coloque sempre o código principal dentro de <code>if __name__ == "__main__":</code> para evitar recursão infinita de processos.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. asyncio — Concorrência Cooperativa</h2>
        <p style={S.p}>
          O módulo <code>asyncio</code> implementa concorrência <strong>cooperativa</strong> num único thread, através de um <em>event loop</em>. Coroutines são funções definidas com <code>async def</code>; <code>await</code> suspende a coroutine actual e devolve controlo ao loop. Ao contrário de threads, não há preempção pelo SO — a coroutine corre até voluntariamente fazer <code>await</code>, o que elimina a maioria das race conditions, mas exige código escrito de forma assíncrona.
        </p>
        <div style={S.diagram}>
          <DiagramAsyncio />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            Event loop de thread única. O loop selecciona a coroutine pronta, corre-a até ao próximo <code>await</code>, e passa à seguinte.
          </p>
        </div>
        <p style={S.p}>
          A tabela seguinte compara os três paradigmas de concorrência em Python:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Tipo de tarefa</th>
              <th style={S.th}>GIL</th>
              <th style={S.th}>Memória partilhada</th>
              <th style={S.th}>Overhead</th>
              <th style={S.th}>Escalabilidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['threading', 'I/O-bound', 'Sim (limitante)', 'Sim (directa)', 'Baixo', 'Limitado pelo GIL'],
              ['multiprocessing', 'CPU-bound', 'Não (processo próprio)', 'Não (IPC explícito)', 'Alto (fork + pickle)', 'Excelente (multicore)'],
              ['asyncio', 'I/O-bound (muitas)', 'Sim (1 thread)', 'Sim (1 thread)', 'Muito baixo', 'Excelente (I/O massivo)'],
            ].map(([p, t, gil, mem, over, scale]) => (
              <tr key={p}>
                <td style={S.td}><code>{p}</code></td>
                <td style={S.td}>{t}</td>
                <td style={S.td}>{gil}</td>
                <td style={S.td}>{mem}</td>
                <td style={S.td}>{over}</td>
                <td style={S.td}>{scale}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Quando usar asyncio vs threading: asyncio é preferível quando se gerem <em>milhares</em> de conexões simultâneas (servidores web, web scrapers massivos). Threading é mais simples e suficiente para dezenas de tarefas I/O.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Race Conditions &amp; Sincronização</h2>
        <p style={S.p}>
          Uma <strong>race condition</strong> ocorre quando o comportamento de um programa depende da ordem de execução relativa de threads — ordem essa que não é determinística. O exemplo clássico é a operação <code>counter += 1</code>, que parece atómica mas não é: trata-se de três operações distintas (READ, ADD, WRITE) que podem ser intercaladas pelo SO.
        </p>
        <div style={S.diagram}>
          <DiagramRaceCondition />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
            Thread A e Thread B lêem ambas counter=0, calculam 1, e escrevem 1. O incremento de uma thread é perdido — <em>lost update</em>.
          </p>
        </div>
        <div style={S.highlight}>
          <p style={S.p}><strong>Deadlock:</strong> ocorre quando duas ou mais threads se bloqueiam mutuamente à espera de recursos que a outra detém. Exemplo: Thread A detém Lock1 e aguarda Lock2; Thread B detém Lock2 e aguarda Lock1 — impasse permanente.</p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECÇÃO 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. concurrent.futures — Interface Unificada</h2>
        <p style={S.p}>
          O módulo <code>concurrent.futures</code> fornece uma interface de alto nível que abstrai threads e processos através de executores e futuros. A grande vantagem é que <code>ThreadPoolExecutor</code> e <code>ProcessPoolExecutor</code> partilham a mesma API — mudar de threads para processos é trivial.
        </p>
        <div style={S.note}>
          Padrão de decisão rápida: é CPU-bound com cálculo pesado por item? → <code>ProcessPoolExecutor</code>. É I/O-bound (rede, disco, base de dados)? → <code>ThreadPoolExecutor</code> ou <code>asyncio</code>. Mistura de ambos? → <code>asyncio</code> com <code>run_in_executor()</code> para offload de bloqueios.
        </div>
        <div style={S.math}>
          <BlockMath math={`\\text{Workers óptimos (CPU-bound)} = N_{\\text{cores}} \\quad ; \\quad \\text{Workers (I/O-bound)} = \\min\\!\\left(32,\\, N_{\\text{cores}} + 4\\right)`} />
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '-0.5rem', marginBottom: '1rem' }}>
          Heurísticas do PEP 686 e da documentação oficial do Python. O valor exacto depende da latência I/O e do número de conexões simultâneas desejadas.
        </p>
      </div>

    </div>
  );
}
