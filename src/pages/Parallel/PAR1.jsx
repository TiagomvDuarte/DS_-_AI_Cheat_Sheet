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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.25rem 0', overflowX: 'auto' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.5rem', margin: '1rem 0', textAlign: 'center' },
};

/* ─── SVG: CPU Clock Speed 1970-2024 ─── */
function ClockSpeedSVG() {
  // Simplified polyline data: year mapped to x, clock MHz to y (log scale approx)
  // x: 1970→30, 2024→730 (700px range, 54 years → ~13px/year)
  // y: 1MHz=370, 3000MHz=30; log scale compressed manually
  const toX = (year) => 30 + (year - 1970) * (700 / 54);
  // log scale: y = 370 - (log10(mhz)/log10(4000))*340
  const toY = (mhz) => 370 - (Math.log10(Math.max(mhz, 0.1)) / Math.log10(4000)) * 340;

  const clockData = [
    [1971, 0.1], [1974, 2], [1978, 8], [1982, 12], [1985, 16],
    [1989, 25], [1993, 66], [1997, 300], [1999, 600], [2001, 1500],
    [2003, 3000], [2005, 3200], [2007, 3200], [2010, 3300],
    [2013, 3500], [2016, 3600], [2019, 3800], [2022, 4000], [2024, 4200],
  ];

  const coreData = [
    [1971, 1], [1993, 1], [2001, 1], [2003, 1], [2005, 2], [2007, 4],
    [2010, 6], [2013, 8], [2016, 16], [2019, 32], [2022, 64], [2024, 128],
  ];
  // cores: y = 370 - (log10(n)/log10(200))*340
  const toCoreY = (n) => 370 - (Math.log10(Math.max(n, 0.5)) / Math.log10(200)) * 340;

  const clockPoints = clockData.map(([y, m]) => `${toX(y)},${toY(m)}`).join(' ');
  const corePoints = coreData.map(([y, n]) => `${toX(y)},${toCoreY(n)}`).join(' ');

  const yTicks = [0.1, 1, 10, 100, 1000, 4000];
  const xYears = [1970, 1980, 1990, 2000, 2010, 2020, 2024];

  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 760 420" width="100%" style={{ fontFamily: 'sans-serif', fontSize: 11 }}>
        {/* grid */}
        {yTicks.map((mhz) => (
          <line key={mhz} x1={30} y1={toY(mhz)} x2={730} y2={toY(mhz)} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}
        {xYears.map((yr) => (
          <line key={yr} x1={toX(yr)} y1={30} x2={toX(yr)} y2={370} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}

        {/* axes */}
        <line x1={30} y1={30} x2={30} y2={370} stroke="var(--text-secondary)" />
        <line x1={30} y1={370} x2={730} y2={370} stroke="var(--text-secondary)" />

        {/* y labels */}
        {yTicks.map((mhz) => (
          <text key={mhz} x={24} y={toY(mhz) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize={10}>
            {mhz >= 1000 ? `${mhz / 1000}G` : mhz >= 1 ? `${mhz}M` : `${mhz * 1000}k`}
          </text>
        ))}

        {/* x labels */}
        {xYears.map((yr) => (
          <text key={yr} x={toX(yr)} y={385} textAnchor="middle" fill="var(--text-secondary)" fontSize={10}>{yr}</text>
        ))}

        {/* plateau annotation */}
        <line x1={toX(2003)} y1={20} x2={toX(2003)} y2={370} stroke="#0284c7" strokeWidth={1.5} strokeDasharray="6,3" />
        <text x={toX(2004)} y={25} fill="#0284c7" fontSize={10}>Plateau ~2003</text>

        {/* clock speed line */}
        <polyline points={clockPoints} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" />

        {/* cores line */}
        <polyline points={corePoints} fill="none" stroke="#4a9eed" strokeWidth={2} strokeLinejoin="round" strokeDasharray="5,2" />

        {/* legend */}
        <rect x={540} y={38} width={180} height={54} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" />
        <line x1={550} y1={54} x2={578} y2={54} stroke={color} strokeWidth={2.5} />
        <text x={584} y={58} fill="var(--text-primary)" fontSize={11}>Frequência do relógio</text>
        <line x1={550} y1={74} x2={578} y2={74} stroke="#4a9eed" strokeWidth={2} strokeDasharray="5,2" />
        <text x={584} y={78} fill="var(--text-primary)" fontSize={11}>Nº de núcleos (aprox.)</text>

        {/* axis labels */}
        <text x={15} y={200} fill="var(--text-secondary)" fontSize={11} transform="rotate(-90,15,200)" textAnchor="middle">Frequência / Nº Núcleos (escala log)</text>
        <text x={380} y={410} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Ano</text>
        <text x={380} y={10} fill="var(--text-primary)" fontSize={13} fontWeight={700} textAnchor="middle">Evolução da Frequência e Núcleos de CPU (1970–2024)</text>
      </svg>
    </div>
  );
}

/* ─── SVG: Amdahl Speedup Curves ─── */
function AmdahlSVG() {
  const W = 700, H = 340;
  const padL = 55, padB = 45, padT = 30, padR = 20;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxN = 64, maxS = 22;

  const toX = (n) => padL + ((n - 1) / (maxN - 1)) * chartW;
  const toY = (s) => padT + chartH - (s / maxS) * chartH;

  const amdahl = (n, serial) => 1 / (serial + (1 - serial) / n);

  const curves = [
    { s: 0.05, label: 's = 5%', stroke: '#7dd3fc' },
    { s: 0.10, label: 's = 10%', stroke: '#3b82f6' },
    { s: 0.25, label: 's = 25%', stroke: '#1e3a8a' },
    { s: 0.50, label: 's = 50%', stroke: '#94a3b8' },
  ];

  const ns = Array.from({ length: 64 }, (_, i) => i + 1);
  const yTicks = [1, 5, 10, 15, 20];
  const xTicks = [1, 8, 16, 32, 48, 64];

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ fontFamily: 'sans-serif' }}>
        {/* grid */}
        {yTicks.map((v) => (
          <line key={v} x1={padL} y1={toY(v)} x2={W - padR} y2={toY(v)} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}
        {xTicks.map((v) => (
          <line key={v} x1={toX(v)} y1={padT} x2={toX(v)} y2={padT + chartH} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}

        {/* ideal dashed */}
        <line x1={toX(1)} y1={toY(1)} x2={toX(64)} y2={toY(64 > maxS ? maxS : 64)} stroke="#999" strokeWidth={1} strokeDasharray="6,3" />

        {/* axes */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" />
        <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" />

        {/* curves */}
        {curves.map(({ s, stroke }) => {
          const pts = ns.map((n) => `${toX(n)},${toY(Math.min(amdahl(n, s), maxS))}`).join(' ');
          return <polyline key={s} points={pts} fill="none" stroke={stroke} strokeWidth={2} strokeLinejoin="round" />;
        })}

        {/* y axis labels */}
        {yTicks.map((v) => (
          <text key={v} x={padL - 6} y={toY(v) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize={10}>{v}×</text>
        ))}

        {/* x axis labels */}
        {xTicks.map((v) => (
          <text key={v} x={toX(v)} y={padT + chartH + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize={10}>{v}</text>
        ))}

        {/* legend */}
        {curves.map(({ label, stroke }, i) => (
          <g key={label}>
            <line x1={padL + 10} y1={padT + 10 + i * 20} x2={padL + 34} y2={padT + 10 + i * 20} stroke={stroke} strokeWidth={2} />
            <text x={padL + 40} y={padT + 14 + i * 20} fill="var(--text-primary)" fontSize={11}>{label}</text>
          </g>
        ))}

        {/* labels */}
        <text x={14} y={padT + chartH / 2} fill="var(--text-secondary)" fontSize={11} transform={`rotate(-90,14,${padT + chartH / 2})`} textAnchor="middle">Speedup S(n)</text>
        <text x={padL + chartW / 2} y={H - 4} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Nº de processadores (n)</text>
        <text x={padL + chartW / 2} y={padT - 10} fill="var(--text-primary)" fontSize={13} fontWeight={700} textAnchor="middle">Lei de Amdahl — Curvas de Speedup</text>
      </svg>
    </div>
  );
}

/* ─── SVG: Amdahl vs Gustafson ─── */
function AmdahlVsGustafsonSVG() {
  const W = 680, H = 320;
  const padL = 55, padB = 45, padT = 35, padR = 20;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxN = 32, maxS = 32;
  const s = 0.05;

  const toX = (n) => padL + ((n - 1) / (maxN - 1)) * chartW;
  const toY = (v) => padT + chartH - (v / maxS) * chartH;

  const amdahl = (n) => 1 / (s + (1 - s) / n);
  const gustafson = (n) => n - s * (n - 1);

  const ns = Array.from({ length: 32 }, (_, i) => i + 1);
  const xTicks = [1, 8, 16, 24, 32];
  const yTicks = [1, 8, 16, 20, 24, 32];

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ fontFamily: 'sans-serif' }}>
        {yTicks.map((v) => (
          <line key={v} x1={padL} y1={toY(v)} x2={W - padR} y2={toY(v)} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}
        {xTicks.map((v) => (
          <line key={v} x1={toX(v)} y1={padT} x2={toX(v)} y2={padT + chartH} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}
        <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" />
        <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" />

        {/* Amdahl */}
        <polyline
          points={ns.map((n) => `${toX(n)},${toY(Math.min(amdahl(n), maxS))}`).join(' ')}
          fill="none" stroke="#4a9eed" strokeWidth={2.5} strokeLinejoin="round"
        />
        {/* Gustafson */}
        <polyline
          points={ns.map((n) => `${toX(n)},${toY(Math.min(gustafson(n), maxS))}`).join(' ')}
          fill="none" stroke="#94a3b8" strokeWidth={2.5} strokeLinejoin="round"
        />

        {yTicks.map((v) => (
          <text key={v} x={padL - 6} y={toY(v) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize={10}>{v}×</text>
        ))}
        {xTicks.map((v) => (
          <text key={v} x={toX(v)} y={padT + chartH + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize={10}>{v}</text>
        ))}

        {/* legend */}
        <rect x={padL + 10} y={padT + 8} width={195} height={50} rx={5} fill="var(--bg-secondary)" stroke="var(--text-secondary)" />
        <line x1={padL + 18} y1={padT + 22} x2={padL + 42} y2={padT + 22} stroke="#4a9eed" strokeWidth={2.5} />
        <text x={padL + 48} y={padT + 26} fill="var(--text-primary)" fontSize={11}>Amdahl (plateaux)</text>
        <line x1={padL + 18} y1={padT + 42} x2={padL + 42} y2={padT + 42} stroke="#94a3b8" strokeWidth={2.5} />
        <text x={padL + 48} y={padT + 46} fill="var(--text-primary)" fontSize={11}>Gustafson (linear)</text>

        <text x={14} y={padT + chartH / 2} fill="var(--text-secondary)" fontSize={11} transform={`rotate(-90,14,${padT + chartH / 2})`} textAnchor="middle">Speedup</text>
        <text x={padL + chartW / 2} y={H - 4} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Nº de processadores (n)</text>
        <text x={padL + chartW / 2} y={padT - 14} fill="var(--text-primary)" fontSize={13} fontWeight={700} textAnchor="middle">Amdahl vs. Gustafson (s = 5%)</text>
      </svg>
    </div>
  );
}

/* ─── SVG: Flynn Taxonomy 2×2 ─── */
function FlynnSVG() {
  const boxes = [
    { x: 20,  y: 20,  label: 'SISD', sub: 'Single Instruction\nSingle Data', eg: 'CPU escalar clássica\n(Von Neumann)', color: '#64748b' },
    { x: 360, y: 20,  label: 'SIMD', sub: 'Single Instruction\nMultiple Data', eg: 'GPU, AVX/SSE\nTPU, vectorização', color: '#4a9eed' },
    { x: 20,  y: 170, label: 'MISD', sub: 'Multiple Instruction\nSingle Data', eg: 'Pipeline de tolerância\na falhas (raro)', color: '#4a9eed' },
    { x: 360, y: 170, label: 'MIMD', sub: 'Multiple Instruction\nMultiple Data', eg: 'Multi-core, clusters\nSupercomputadores', color: '#4a9eed' },
  ];

  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 700 330" width="100%" style={{ fontFamily: 'sans-serif' }}>
        <text x={350} y={18} textAnchor="middle" fill="var(--text-primary)" fontSize={13} fontWeight={700}>Taxonomia de Flynn — Classificação de Arquitecturas</text>
        {/* column headers */}
        <text x={195} y={42} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600}>Dado Único</text>
        <text x={535} y={42} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600}>Dados Múltiplos</text>
        {/* row headers */}
        <text x={12} y={125} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600} transform="rotate(-90,12,125)">Instr. Única</text>
        <text x={12} y={265} textAnchor="middle" fill="var(--text-secondary)" fontSize={11} fontWeight={600} transform="rotate(-90,12,265)">Instr. Múltiplas</text>

        {boxes.map(({ x, y, label, sub, eg, color: c }) => (
          <g key={label} transform={`translate(${x + 30},${y + 30})`}>
            <rect width={290} height={130} rx={8} fill={`${c}18`} stroke={c} strokeWidth={2} />
            <text x={145} y={28} textAnchor="middle" fill={c} fontSize={17} fontWeight={800}>{label}</text>
            {sub.split('\n').map((line, i) => (
              <text key={i} x={145} y={50 + i * 16} textAnchor="middle" fill="var(--text-primary)" fontSize={11}>{line}</text>
            ))}
            <line x1={20} y1={84} x2={270} y2={84} stroke={c} strokeOpacity={0.3} />
            {eg.split('\n').map((line, i) => (
              <text key={i} x={145} y={100 + i * 16} textAnchor="middle" fill="var(--text-secondary)" fontSize={10}>{line}</text>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── SVG: Efficiency Curves ─── */
function EfficiencySVG() {
  const W = 680, H = 300;
  const padL = 55, padB = 45, padT = 35, padR = 20;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxN = 32;

  const toX = (n) => padL + ((n - 1) / (maxN - 1)) * chartW;
  const toY = (e) => padT + chartH - e * chartH;

  // Ideal: e=1 always
  // Real: e = 1/(1 + 0.04*(n-1))  (communication overhead grows)
  // Superlinear briefly: e peaks above 1 at n=2-4 then declines
  const ideal = Array.from({ length: 32 }, (_, i) => ({ n: i + 1, e: 1.0 }));
  const real = Array.from({ length: 32 }, (_, i) => {
    const n = i + 1;
    return { n, e: 1 / (1 + 0.04 * (n - 1)) };
  });
  const superlinear = Array.from({ length: 32 }, (_, i) => {
    const n = i + 1;
    const bonus = n <= 4 ? (n - 1) * 0.05 : (4 - 1) * 0.05 - (n - 4) * 0.04;
    return { n, e: Math.min(Math.max(1.0 + bonus, 0.1), 1.2) };
  });

  const toPoints = (arr) => arr.map(({ n, e }) => `${toX(n)},${toY(Math.min(e, 1.2))}`).join(' ');
  const xTicks = [1, 8, 16, 24, 32];
  const yTicks = [0, 0.25, 0.5, 0.75, 1.0, 1.2];

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ fontFamily: 'sans-serif' }}>
        {yTicks.map((v) => (
          <line key={v} x1={padL} y1={toY(v)} x2={W - padR} y2={toY(v)} stroke={v === 1.0 ? color : 'var(--card-border)'} strokeDasharray={v === 1.0 ? '0' : '4,3'} strokeOpacity={v === 1.0 ? 0.4 : 1} />
        ))}
        {xTicks.map((v) => (
          <line key={v} x1={toX(v)} y1={padT} x2={toX(v)} y2={padT + chartH} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}
        <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" />
        <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" />

        <polyline points={toPoints(ideal)} fill="none" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="6,3" />
        <polyline points={toPoints(superlinear)} fill="none" stroke="#7dd3fc" strokeWidth={2} strokeLinejoin="round" />
        <polyline points={toPoints(real)} fill="none" stroke="#1e3a8a" strokeWidth={2.5} strokeLinejoin="round" />

        {yTicks.map((v) => (
          <text key={v} x={padL - 6} y={toY(v) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize={10}>{v.toFixed(2)}</text>
        ))}
        {xTicks.map((v) => (
          <text key={v} x={toX(v)} y={padT + chartH + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize={10}>{v}</text>
        ))}

        {/* legend */}
        <rect x={padL + chartW - 200} y={padT + 8} width={200} height={72} rx={5} fill="var(--bg-secondary)" stroke="var(--text-secondary)" />
        <line x1={padL + chartW - 192} y1={padT + 22} x2={padL + chartW - 168} y2={padT + 22} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="6,3" />
        <text x={padL + chartW - 162} y={padT + 26} fill="var(--text-primary)" fontSize={11}>Ideal (E=1)</text>
        <line x1={padL + chartW - 192} y1={padT + 42} x2={padL + chartW - 168} y2={padT + 42} stroke="#7dd3fc" strokeWidth={2} />
        <text x={padL + chartW - 162} y={padT + 46} fill="var(--text-primary)" fontSize={11}>Superlinear (cache)</text>
        <line x1={padL + chartW - 192} y1={padT + 62} x2={padL + chartW - 168} y2={padT + 62} stroke="#1e3a8a" strokeWidth={2.5} />
        <text x={padL + chartW - 162} y={padT + 66} fill="var(--text-primary)" fontSize={11}>Real (overhead comm.)</text>

        <text x={14} y={padT + chartH / 2} fill="var(--text-secondary)" fontSize={11} transform={`rotate(-90,14,${padT + chartH / 2})`} textAnchor="middle">Eficiência E(n)</text>
        <text x={padL + chartW / 2} y={H - 4} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Nº de processadores (n)</text>
        <text x={padL + chartW / 2} y={padT - 14} fill="var(--text-primary)" fontSize={13} fontWeight={700} textAnchor="middle">Curvas de Eficiência Paralela</text>
      </svg>
    </div>
  );
}

/* ─── SVG: Roofline Model ─── */
function RooflineSVG() {
  const W = 680, H = 320;
  const padL = 60, padB = 50, padT = 40, padR = 30;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  // Log scale x: intensity 0.01..100 → log10: -2..2
  // Log scale y: GFLOPs/s 0.1..100 → log10: -1..2
  const Ppeak = 16;   // GFLOPs/s peak compute
  const Bpeak = 0.8;  // GFLOPs/byte peak bandwidth (memory bandwidth * scaling)

  const toX = (i) => padL + ((Math.log10(i) - (-2)) / 4) * chartW;
  const toY = (g) => padT + chartH - ((Math.log10(g) - (-1)) / 3) * chartH;

  // roof: min(Ppeak, I*Bpeak)  where Bpeak in GFLOPs/s per FLOP/byte
  // ridge = Ppeak / Bpeak
  const memBW = 200; // GB/s
  // Performance = min(Ppeak, I * memBW) GFLOPs/s when I in FLOP/byte
  // but simplified: ridge = Ppeak / memBW * 1e3? let's use ridge = 20 FLOP/byte
  const ridge = 20; // FLOP/byte

  const roofPoints = [];
  const intensities = [];
  for (let logI = -2; logI <= 2; logI += 0.05) {
    const I = Math.pow(10, logI);
    intensities.push(I);
    const perf = Math.min(Ppeak, I * Ppeak / ridge);
    roofPoints.push(`${toX(I)},${toY(Math.max(perf, 0.05))}`);
  }

  const xTicks = [0.01, 0.1, 1, 10, 100];
  const yTicks = [0.1, 1, 10, 100];

  // Two kernels
  const memBoundKernel = { I: 0.5, perf: Math.min(Ppeak, 0.5 * Ppeak / ridge), label: 'Kernel A\n(mem-bound)' };
  const compBoundKernel = { I: 50, perf: Math.min(Ppeak, 50 * Ppeak / ridge), label: 'Kernel B\n(compute-bound)' };

  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ fontFamily: 'sans-serif' }}>
        {yTicks.map((v) => (
          <line key={v} x1={padL} y1={toY(v)} x2={W - padR} y2={toY(v)} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}
        {xTicks.map((v) => (
          <line key={v} x1={toX(v)} y1={padT} x2={toX(v)} y2={padT + chartH} stroke="var(--text-secondary)" strokeDasharray="4,3" />
        ))}
        <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="var(--text-secondary)" />
        <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="var(--text-secondary)" />

        {/* roofline */}
        <polyline points={roofPoints.join(' ')} fill="none" stroke={color} strokeWidth={3} strokeLinejoin="round" />

        {/* ridge point */}
        <circle cx={toX(ridge)} cy={toY(Ppeak)} r={5} fill="#0284c7" />
        <text x={toX(ridge) - 40} y={toY(Ppeak) - 8} fill="#0284c7" fontSize={10} fontWeight={700}>Ridge Point</text>

        {/* horizontal roof label */}
        <text x={W - padR - 130} y={toY(Ppeak) - 25} fill={color} fontSize={10} fontWeight={600}>Compute Roof ({Ppeak} GFLOP/s)</text>

        {/* memory slope annotation */}
        <text x={toX(0.03)} y={toY(0.3)} fill="#64748b" fontSize={9} transform={`rotate(-35,${toX(0.03)},${toY(0.3)})`}>Memory BW slope</text>

        {/* Kernel A */}
        <circle cx={toX(memBoundKernel.I)} cy={toY(memBoundKernel.perf)} r={7} fill="#4a9eed" />
        <text x={toX(memBoundKernel.I) - 5} y={toY(memBoundKernel.perf) + 22} fill="#4a9eed" fontSize={10} fontWeight={700}>A</text>
        <text x={toX(memBoundKernel.I) - 5} y={toY(memBoundKernel.perf) + 34} fill="var(--text-secondary)" fontSize={9}>mem-bound</text>

        {/* Kernel B */}
        <circle cx={toX(compBoundKernel.I)} cy={toY(compBoundKernel.perf)} r={7} fill="#4a9eed" />
        <text x={toX(compBoundKernel.I) - 5} y={toY(compBoundKernel.perf) + 22} fill="#4a9eed" fontSize={10} fontWeight={700}>B</text>
        <text x={toX(compBoundKernel.I) - 5} y={toY(compBoundKernel.perf) + 34} fill="var(--text-secondary)" fontSize={9}>compute-bound</text>

        {yTicks.map((v) => (
          <text key={v} x={padL - 6} y={toY(v) + 4} textAnchor="end" fill="var(--text-secondary)" fontSize={10}>{v}</text>
        ))}
        {xTicks.map((v) => (
          <text key={v} x={toX(v)} y={padT + chartH + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize={9}>{v}</text>
        ))}

        <text x={14} y={padT + chartH / 2} fill="var(--text-secondary)" fontSize={11} transform={`rotate(-90,14,${padT + chartH / 2})`} textAnchor="middle">GFLOPs/s (log)</text>
        <text x={padL + chartW / 2} y={H - 6} fill="var(--text-secondary)" fontSize={11} textAnchor="middle">Intensidade Aritmética — FLOP/byte (log)</text>
        <text x={padL + chartW / 2} y={padT - 16} fill="var(--text-primary)" fontSize={13} fontWeight={700} textAnchor="middle">Roofline Model</text>
      </svg>
    </div>
  );
}

/* ─── SVG: Types of Parallelism ─── */
function ParallelismTypesSVG() {
  const types = [
    {
      title: 'Data Parallelism',
      color: '#4a9eed',
      sub: 'Dados idênticos, ops paralelas',
      footer: 'Ex: map(), vetores, GPU',
      content: () => (
        <div>
          <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', marginBottom: '0.3rem' }}>
            {['D1','D2','D3','D4'].map(d => (
              <div key={d} style={{ background: 'rgba(74,158,237,0.7)', borderRadius: 3, padding: '0.2rem 0.35rem', fontSize: '0.6rem', color: '#fff', fontFamily: 'monospace', fontWeight: 700 }}>{d}</div>
            ))}
          </div>
          <div style={{ fontSize: '0.58rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '0.3rem' }}>↓ mesma operação</div>
          <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', marginBottom: '0.3rem' }}>
            {['P1','P2','P3','P4'].map(p => (
              <div key={p} style={{ background: 'rgba(74,158,237,0.5)', borderRadius: 3, padding: '0.2rem 0.35rem', fontSize: '0.6rem', color: '#fff', fontFamily: 'monospace', fontWeight: 700 }}>{p}</div>
            ))}
          </div>
          <div style={{ fontSize: '0.58rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '0.3rem' }}>↓ resultados</div>
          <div style={{ background: 'rgba(74,158,237,0.35)', borderRadius: 3, padding: '0.2rem 0', textAlign: 'center', fontSize: '0.6rem', color: '#fff', fontFamily: 'monospace' }}>Resultado Unificado</div>
        </div>
      ),
    },
    {
      title: 'Task Parallelism',
      color: '#38bdf8',
      sub: 'Dados distintos, tarefas diferentes',
      footer: 'Ex: OpenMP sections, futures',
      content: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          {[['T1','Compressão'],['T2','Cifra'],['T3','Upload']].map(([t, l], i) => (
            <div key={t} style={{ background: `rgba(56,189,248,${0.55 - i*0.08})`, borderRadius: 4, padding: '0.25rem 0.5rem', fontSize: '0.62rem', color: '#fff', fontFamily: 'monospace', textAlign: 'center' }}>{t}: {l}</div>
          ))}
        </div>
      ),
    },
    {
      title: 'Pipeline Parallelism',
      color: '#0284c7',
      sub: 'Stages encadeados',
      footer: 'Ex: CPU pipeline, streaming',
      content: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', alignItems: 'center' }}>
          {[['S1','Leitura'],['S2','Processo'],['S3','Escrita']].map(([s, l], i) => (
            <React.Fragment key={s}>
              <div style={{ background: `rgba(2,132,199,${0.5 + i*0.1})`, borderRadius: 4, padding: '0.25rem 0.5rem', fontSize: '0.62rem', color: '#fff', fontFamily: 'monospace', textAlign: 'center', width: '100%' }}>{s}: {l}</div>
              {i < 2 && <div style={{ fontSize: '0.7rem', color: '#0284c7', lineHeight: 1 }}>↓</div>}
            </React.Fragment>
          ))}
        </div>
      ),
    },
    {
      title: 'Model Parallelism',
      color: '#7dd3fc',
      sub: 'Modelo fragmentado',
      footer: 'Ex: LLMs, GPT, pipeline ML',
      content: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          {[['GPU 0','Camadas 1-4'],['GPU 1','Camadas 5-8'],['GPU 2','Camadas 9-12']].map(([g, l], i) => (
            <div key={g} style={{ background: `rgba(125,211,252,${0.45 + i*0.1})`, borderRadius: 4, padding: '0.25rem 0.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>{g}</div>
              <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{l}</div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div style={S.diagram}>
      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '0.8rem', fontFamily: 'sans-serif' }}>Tipos de Paralelismo</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
        {types.map(({ title, color: c, sub, footer, content: Content }) => (
          <div key={title} style={{ background: `${c}0d`, border: `1.5px solid ${c}`, borderRadius: 8, padding: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: c, fontFamily: 'sans-serif', textAlign: 'center', marginBottom: '0.15rem' }}>{title}</div>
            <Content />
            <div style={{ marginTop: 'auto', paddingTop: '0.35rem' }}>
              <div style={{ fontSize: '0.58rem', color: 'var(--text-secondary)', fontFamily: 'monospace', textAlign: 'center' }}>{footer}</div>
              <div style={{ fontSize: '0.58rem', color: c, fontFamily: 'monospace', textAlign: 'center', marginTop: '0.15rem' }}>↑ {sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   COMPONENT PRINCIPAL
═══════════════════════════════════════════ */
export default function PAR1() {
  return (
    <div style={S.page}>
      <Link to="/parallel" style={S.back}><ArrowLeft size={16} /> Voltar a Parallel &amp; HPC</Link>
      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Fundamentos de Computação Paralela</h1>
      <p style={S.lead}>
        Da Lei de Moore ao modelo Roofline: este módulo apresenta as leis fundamentais que governam
        o speedup, as taxonomias de arquitecturas paralelas, e as métricas que permitem avaliar e
        comparar implementações. É a base conceptual de todo o estudo de HPC.
      </p>

      {/* ══════════════════════════════════════ */}
      {/* SECÇÃO 1 — PORQUÊ PARALELIZAR?        */}
      {/* ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Porquê Paralelizar?</h2>

        <p style={S.p}>
          A <strong>Lei de Moore</strong> (1965) previu que o número de transístores duplicaria a
          cada dois anos — e manteve-se precisa durante décadas. Mas por volta de 2003–2005 a
          frequência de relógio estagnou nos 3 GHz: aumentá-la implicaria dissipação de calor
          inviável (potência ∝ C·V²·f). Os fabricantes responderam com múltiplos núcleos a
          frequência moderada em vez de um único núcleo mais rápido.
        </p>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Consequência prática:</strong> a partir de 2005, o desempenho <em>single-thread</em>{' '}
            quase não melhora de geração para geração. Para beneficiar do hardware moderno é
            obrigatório escrever código que explore múltiplos núcleos — isto é, código paralelo.
          </p>
        </div>

        <p style={S.p}>
          É importante distinguir dois conceitos frequentemente confundidos:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Conceito</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Wall-clock time</strong></td>
              <td style={S.td}>Tempo real decorrido do início ao fim do programa</td>
              <td style={S.td}>O utilizador espera 10 segundos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Compute time</strong></td>
              <td style={S.td}>Soma do tempo de CPU em todos os núcleos/threads</td>
              <td style={S.td}>4 núcleos × 8 s = 32 s de CPU</td>
            </tr>
          </tbody>
        </table>
        <p style={S.p}>
          O paralelismo reduz o <em>wall-clock time</em>; o <em>compute time</em> pode até aumentar
          ligeiramente devido a overhead de coordenação. O objectivo é maximizar a utilização útil de
          cada núcleo.
        </p>

        <p style={S.p}>
          Alguns problemas são <strong>embarrassingly parallel</strong>: não há dependências entre
          sub-tarefas (ex: renderização de imagens, simulações Monte Carlo). Nestes casos, scaling
          próximo do linear é atingível.
        </p>

        <ClockSpeedSVG />

        <div style={S.note}>
          O gráfico mostra a frequência de relógio (escala logarítmica) a crescer rapidamente até
          ~2003, depois a estagnar em torno dos 3–4 GHz. Em paralelo, o número de núcleos começa
          a crescer exponencialmente a partir de 2005 — a indústria "girou" em direcção ao paralelismo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════ */}
      {/* SECÇÃO 2 — LEI DE AMDAHL               */}
      {/* ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Lei de Amdahl</h2>

        <p style={S.p}>
          Em 1967, Gene Amdahl formulou uma lei que define o speedup máximo teórico de um programa
          quando apenas uma fracção da sua execução pode ser paralelizada. Seja <InlineMath math={"s"} />{' '}
          a fracção <em>sequencial</em> (não paralelizável) do trabalho total, e <InlineMath math={"n"} />{' '}
          o número de processadores. O speedup é:
        </p>

        <div style={S.math}>
          <BlockMath math={"S(n) = \\frac{1}{s + \\frac{1-s}{n}}"} />
        </div>

        <p style={S.p}>
          O trabalho total é normalizado para 1: a fracção sequencial <InlineMath math={"s"} /> demora
          sempre o mesmo tempo, e a fracção paralela <InlineMath math={"1-s"} /> divide-se por{' '}
          <InlineMath math={"n"} /> processadores. Quando <InlineMath math={"n \\to \\infty"} />, o
          speedup converge para <InlineMath math={"1/s"} /> — a <strong>barreira de Amdahl</strong>:
          a parte sequencial torna-se o gargalo absoluto.
        </p>

        <AmdahlSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fracção sequencial s</th>
              <th style={S.th}>Speedup máximo (n→∞)</th>
              <th style={S.th}>Para atingir 10× precisa de…</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['50% (s=0.5)', '2×', 'impossível'],
              ['25% (s=0.25)', '4×', 'impossível'],
              ['10% (s=0.10)', '10×', 'infinitos processadores'],
              ['5% (s=0.05)', '20×', '~12 processadores'],
              ['1% (s=0.01)', '100×', '~11 processadores'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={S.td}>{a}</td><td style={S.td}><strong>{b}</strong></td><td style={S.td}>{c}</td></tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Implicação prática:</strong> com 95% do código paralelizável (s=0.05), o speedup
            máximo possível é apenas <strong>20×</strong>, independentemente de quantos milhares de
            processadores se adicionem. Optimizar a parte sequencial tem mais impacto do que adicionar
            mais hardware.
          </p>
        </div>

        <div style={S.note}>
          A Lei de Amdahl assume um <strong>problema de tamanho fixo</strong> (strong scaling). Na
          prática, muitos sistemas reais violam esta premissa — o que motivou John Gustafson a
          propor uma lei alternativa.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════ */}
      {/* SECÇÃO 3 — LEI DE GUSTAFSON            */}
      {/* ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Lei de Gustafson</h2>

        <p style={S.p}>
          Em 1988, John Gustafson argumentou que a Lei de Amdahl era excessivamente pessimista porque
          assumia um problema de tamanho fixo. Na prática, usa-se mais processadores para resolver
          <em> problemas maiores</em> no mesmo tempo — conceito chamado <strong>weak scaling</strong>.
          Se o tamanho do problema escala com <InlineMath math={"n"} />, o speedup escalado é:
        </p>

        <div style={S.math}>
          <BlockMath math={"S(n) = n - s(n-1)"} />
        </div>

        <p style={S.p}>
          Com <InlineMath math={"s = 0.05"} /> e <InlineMath math={"n = 1000"} />, obtemos{' '}
          <InlineMath math={"S \\approx 1000 - 0.05 \\times 999 \\approx 950"} />. O crescimento é
          quase linear — muito mais optimista do que Amdahl.
        </p>

        <AmdahlVsGustafsonSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aspecto</th>
              <th style={S.th}>Amdahl (Strong Scaling)</th>
              <th style={S.th}>Gustafson (Weak Scaling)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Tamanho do problema</strong></td>
              <td style={S.td}>Fixo</td>
              <td style={S.td}>Cresce com n</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Objectivo</strong></td>
              <td style={S.td}>Resolver mais depressa</td>
              <td style={S.td}>Resolver maior no mesmo tempo</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Speedup</strong></td>
              <td style={S.td}>Plateau em 1/s</td>
              <td style={S.td}>Crescimento linear ≈ n</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Quando usar</strong></td>
              <td style={S.td}>Latência crítica (trading HFT)</td>
              <td style={S.td}>Simulações científicas, ML</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          As duas leis não são contraditórias — respondem a perguntas diferentes. Use Amdahl quando
          o tamanho do problema é fixo e pretende minimizar o tempo de resposta. Use Gustafson quando
          pode escalar o problema para tirar partido de mais recursos computacionais.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════ */}
      {/* SECÇÃO 4 — TAXONOMIA DE FLYNN          */}
      {/* ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Taxonomia de Flynn</h2>

        <p style={S.p}>
          Em 1966, Michael Flynn propôs classificar arquitecturas segundo dois eixos: o número de{' '}
          <strong>fluxos de instruções</strong> e de <strong>fluxos de dados</strong> processados em
          simultâneo — produzindo quatro classes.
        </p>

        <FlynnSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Classe</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Exemplos reais</th>
              <th style={S.th}>Relevância hoje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>SISD</strong></td>
              <td style={S.td}>Um fluxo de instruções opera sobre um fluxo de dados</td>
              <td style={S.td}>CPU escalar clássica (8086, Pentium original)</td>
              <td style={S.td}>Praticamente extinto em produção</td>
            </tr>
            <tr>
              <td style={S.td}><strong>SIMD</strong></td>
              <td style={S.td}>Uma instrução opera simultaneamente sobre múltiplos dados</td>
              <td style={S.td}>AVX-512, ARM NEON, GPUs (warps), TPUs</td>
              <td style={S.td}>Muito relevante — vectorização automática</td>
            </tr>
            <tr>
              <td style={S.td}><strong>MISD</strong></td>
              <td style={S.td}>Múltiplas instruções sobre o mesmo dado</td>
              <td style={S.td}>Sistemas de redundância/tolerância a falhas</td>
              <td style={S.td}>Nicho — sistemas críticos (aviação)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>MIMD</strong></td>
              <td style={S.td}>Múltiplas instruções operam sobre múltiplos dados independentes</td>
              <td style={S.td}>Multi-core (Intel Core, AMD Ryzen), clusters MPI</td>
              <td style={S.td}>Dominante em HPC e servidores</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Os CPUs modernos são MIMD com lanes SIMD:</strong> cada núcleo executa um fluxo
            de instruções independente (MIMD), mas cada instrução pode processar 8, 16 ou 32 elementos
            em paralelo via extensões vectoriais AVX-512 (SIMD). Escrever código que explore ambos os
            níveis é o desafio central da optimização em HPC.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════ */}
      {/* SECÇÃO 5 — MÉTRICAS DE DESEMPENHO      */}
      {/* ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Métricas de Desempenho</h2>

        <p style={S.p}>
          Avaliar uma implementação paralela requer mais do que medir o tempo de execução. Sejam{' '}
          <InlineMath math={"T_1"} /> o tempo de execução com 1 processador e{' '}
          <InlineMath math={"T_n"} /> o tempo com <InlineMath math={"n"} /> processadores. O
          <strong> speedup</strong> e a <strong>eficiência</strong> definem-se como:
        </p>

        <div style={S.math}>
          <BlockMath math={"S(n) = \\frac{T_1}{T_n}, \\quad E(n) = \\frac{S(n)}{n} = \\frac{T_1}{n \\cdot T_n}"} />
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Valor ideal</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Speedup S(n)</strong></td>
              <td style={S.td}><InlineMath math={"T_1 / T_n"} /></td>
              <td style={S.td}>= n (linear)</td>
              <td style={S.td}>Quantas vezes mais rápido com n processadores</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Eficiência E(n)</strong></td>
              <td style={S.td}><InlineMath math={"S(n) / n"} /></td>
              <td style={S.td}>= 1.0 (100%)</td>
              <td style={S.td}>Fracção de tempo útil por processador</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Overhead O(n)</strong></td>
              <td style={S.td}><InlineMath math={"n \\cdot T_n - T_1"} /></td>
              <td style={S.td}>= 0</td>
              <td style={S.td}>Tempo extra em comunicação e sincronização</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Scalability</strong></td>
              <td style={S.td}>E(n) constante?</td>
              <td style={S.td}>E não decresce com n</td>
              <td style={S.td}>Capacidade de manter eficiência ao escalar</td>
            </tr>
          </tbody>
        </table>

        <EfficiencySVG />

        <p style={S.p}>
          A linha ideal (<InlineMath math={"E = 1"} />) é inatingível em sistemas reais. A curva{' '}
          <em>superlinear</em> ocorre brevemente quando dados pequenos cabem inteiramente em cache
          com mais núcleos; a curva real decresce à medida que o overhead de comunicação cresce com{' '}
          <InlineMath math={"n"} />.
        </p>

        <div style={S.note}>
          <strong>Strong scaling</strong>: problema de tamanho fixo, aumenta-se n — E(n) decresce
          inevitavelmente (Amdahl domina).<br />
          <strong>Weak scaling</strong>: problema cresce com n — E(n) pode manter-se próximo de 1 se
          o overhead por processador for constante (Gustafson).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════ */}
      {/* SECÇÃO 6 — ROOFLINE MODEL              */}
      {/* ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Roofline Model</h2>

        <p style={S.p}>
          O Roofline Model (Williams et al., 2009) identifica rapidamente se um kernel está limitado
          pela capacidade de cálculo (<em>compute-bound</em>) ou pela largura de banda de memória
          (<em>memory-bound</em>), com base na <strong>intensidade aritmética</strong>:
        </p>

        <div style={S.math}>
          <BlockMath math={"I = \\frac{\\text{FLOPs}}{\\text{bytes transferidos}}"} />
        </div>

        <p style={S.p}>
          O desempenho máximo atingível por um kernel com intensidade aritmética{' '}
          <InlineMath math={"I"} /> é limitado pelo mínimo entre o tecto de computação{' '}
          <InlineMath math={"P_{\\text{peak}}"} /> e o produto da intensidade pela largura de banda
          de memória <InlineMath math={"B_{\\text{peak}}"} />:
        </p>

        <div style={S.math}>
          <BlockMath math={"\\text{Performance} \\leq \\min\\!\\left(P_{\\text{peak}},\\; I \\cdot B_{\\text{peak}}\\right)"} />
        </div>

        <p style={S.p}>
          O ponto onde as duas rampas se cruzam chama-se <strong>ridge point</strong>: kernels com{' '}
          <InlineMath math={"I"} /> abaixo são <em>memory-bound</em>; acima, <em>compute-bound</em>.
        </p>

        <RooflineSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Situação</th>
              <th style={S.th}>Diagnóstico</th>
              <th style={S.th}>Estratégia de optimização</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Kernel A (intensidade baixa)</td>
              <td style={S.td}>Memory-bound</td>
              <td style={S.td}>Reduzir acesso à memória, melhorar localidade, usar cache blocking</td>
            </tr>
            <tr>
              <td style={S.td}>Kernel B (intensidade alta)</td>
              <td style={S.td}>Compute-bound</td>
              <td style={S.td}>Vectorização (SIMD), fusão de operações, uso de FMA</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Ferramentas como Intel VTune, NVIDIA Nsight, e AMD uProf geram automaticamente diagramas
          Roofline para identificar onde cada kernel se situa relativamente aos limites do hardware.
          É o primeiro passo de qualquer análise de bottleneck em HPC.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ══════════════════════════════════════ */}
      {/* SECÇÃO 7 — TIPOS DE PARALELISMO        */}
      {/* ══════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Tipos de Paralelismo</h2>

        <p style={S.p}>
          Consoante a forma como o trabalho e os dados são decompostos, distinguem-se quatro padrões
          fundamentais, cada um com diferentes requisitos de comunicação e ferramentas.
        </p>

        <ParallelismTypesSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Decomposição</th>
              <th style={S.th}>Comunicação</th>
              <th style={S.th}>Ferramentas típicas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Data Parallelism</strong></td>
              <td style={S.td}>Dados divididos; mesma operação em cada parte</td>
              <td style={S.td}>Mínima (reduce no fim)</td>
              <td style={S.td}>OpenMP, CUDA, NumPy vectorizado</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Task Parallelism</strong></td>
              <td style={S.td}>Tarefas diferentes executadas em simultâneo</td>
              <td style={S.td}>Moderada (dependências entre tarefas)</td>
              <td style={S.td}>OpenMP tasks, Python futures, Dask</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Pipeline Parallelism</strong></td>
              <td style={S.td}>Dados fluem por estágios encadeados</td>
              <td style={S.td}>Ponto-a-ponto entre estágios</td>
              <td style={S.td}>CPU pipeline, streaming, Kafka</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Model Parallelism</strong></td>
              <td style={S.td}>Modelo ML dividido por múltiplas GPUs</td>
              <td style={S.td}>Alta (activações entre layers)</td>
              <td style={S.td}>PyTorch Pipeline, Megatron-LM, DeepSpeed</td>
            </tr>
          </tbody>
        </table>

        <p style={S.p}>
          No treino de LLMs, os três tipos coexistem — data, model e pipeline parallelism combinados
          chamam-se <em>3D parallelism</em>, usado em sistemas como GPT-4 e Llama.
        </p>

        <div style={S.note}>
          A escolha do tipo de paralelismo deve seguir a estrutura natural do problema.
          Tentar forçar task parallelism num problema essencialmente de data parallelism gera
          overhead desnecessário e código mais difícil de manter.
        </div>
      </div>

    </div>
  );
}
