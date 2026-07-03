import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  svgWrap: { background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 12, padding: '1rem', margin: '1.2rem 0', overflowX: 'auto' },
};

// ── SVG 1: DataFrame & Series structure ───────────────────────────────────────
function SvgDataFrame() {
  const cellW = 80, cellH = 32, cols = ['Index', 'nome', 'idade', 'salario'];
  const rows = [['0', 'Ana', '25', '1800'], ['1', 'Bruno', '30', '2500'], ['2', 'Carla', '22', '2100']];
  const tableW = cols.length * cellW;
  return (
    <svg width="100%" viewBox="0 0 600 230" fontFamily="monospace" fontSize="12" style={{ display: 'block', margin: '0 auto' }}>
      {/* DataFrame label */}
      <text x="10" y="18" fontWeight="700" fill={color} fontSize="13">DataFrame</text>
      {/* header row */}
      {cols.map((c, ci) => (
        <g key={c}>
          <rect x={10 + ci * cellW} y={26} width={cellW} height={cellH}
            fill={ci === 0 ? 'rgba(249,115,22,0.25)' : 'rgba(249,115,22,0.08)'}
            stroke={color} strokeWidth="1" />
          <text x={10 + ci * cellW + cellW / 2} y={26 + cellH / 2 + 5}
            textAnchor="middle" fill={ci === 0 ? color : 'var(--text-primary)'} fontWeight="700">{c}</text>
        </g>
      ))}
      {/* data rows */}
      {rows.map((row, ri) =>
        row.map((val, ci) => (
          <g key={ri + '-' + ci}>
            <rect x={10 + ci * cellW} y={58 + ri * cellH} width={cellW} height={cellH}
              fill={ci === 0 ? 'rgba(249,115,22,0.15)' : 'rgba(0,0,0,0)'}
              stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={10 + ci * cellW + cellW / 2} y={58 + ri * cellH + cellH / 2 + 5}
              textAnchor="middle" fill={ci === 0 ? color : 'var(--text-primary)'}>{val}</text>
          </g>
        ))
      )}
      {/* Index highlight bracket */}
      <text x="10" y="175" fill={color} fontSize="11">Index (rótulos das linhas)</text>
      <line x1="10" y1="179" x2="160" y2="179" stroke={color} strokeWidth="1.5" />

      {/* Series panel */}
      <text x="370" y="18" fontWeight="700" fill={color} fontSize="13">Series (coluna única)</text>
      {['Index', 'nome'].map((c, ci) => (
        <g key={'s' + c}>
          <rect x={370 + ci * cellW} y={26} width={cellW} height={cellH}
            fill={ci === 0 ? 'rgba(249,115,22,0.25)' : 'rgba(249,115,22,0.08)'}
            stroke={color} strokeWidth="1" />
          <text x={370 + ci * cellW + cellW / 2} y={26 + cellH / 2 + 5}
            textAnchor="middle" fill={ci === 0 ? color : 'var(--text-primary)'} fontWeight="700">{c}</text>
        </g>
      ))}
      {[['0', 'Ana'], ['1', 'Bruno'], ['2', 'Carla']].map((row, ri) =>
        row.map((val, ci) => (
          <g key={'sv' + ri + ci}>
            <rect x={370 + ci * cellW} y={58 + ri * cellH} width={cellW} height={cellH}
              fill={ci === 0 ? 'rgba(249,115,22,0.15)' : 'rgba(0,0,0,0)'}
              stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={370 + ci * cellW + cellW / 2} y={58 + ri * cellH + cellH / 2 + 5}
              textAnchor="middle" fill={ci === 0 ? color : 'var(--text-primary)'}>{val}</text>
          </g>
        ))
      )}
      <line x1="332" y1="95" x2="366" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="362,91 370,95 362,99" fill="var(--text-secondary)" />
      <text x="349" y="86" fill="var(--text-secondary)" fontSize="9" textAnchor="middle">dict of</text>
      <text x="349" y="75" fill="var(--text-secondary)" fontSize="9" textAnchor="middle">Series</text>

      <text x="300" y="195" fill="var(--text-secondary)" fontSize="11" textAnchor="middle">DataFrame = dicionário de Series com Index partilhado</text>
    </svg>
  );
}

// ── SVG 2: Indexing methods ───────────────────────────────────────────────────
function SvgIndexing() {
  const cellW = 72, cellH = 30;
  const cols = ['idx', 'nome', 'idade', 'salario'];
  const rows = [['0', 'Ana', '25', '1800'], ['1', 'Bruno', '30', '2500'], ['2', 'Carla', '22', '2100'], ['3', 'Dora', '35', '3100']];
  const hilightLoc = (ci, ri) => ci === 1 && ri === 1; // loc[1,'nome']
  const hilightIloc = (ci, ri) => ri >= 0 && ri <= 1 && ci >= 0 && ci <= 1; // iloc[:2,:2]
  const hilightBool = (ri) => ri === 2 || ri === 3; // age&gt;28
  return (
    <svg width="100%" viewBox="0 0 580 240" fontFamily="monospace" fontSize="11">
      <text x="8" y="16" fontWeight="700" fill="var(--text-primary)" fontSize="12">Mesmo DataFrame — três formas de selecionar</text>

      {/* Table */}
      {cols.map((c, ci) => (
        <g key={'ih' + c}>
          <rect x={8 + ci * cellW} y={24} width={cellW} height={cellH}
            fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1" />
          <text x={8 + ci * cellW + cellW / 2} y={24 + cellH / 2 + 5}
            textAnchor="middle" fill={color} fontWeight="700">{c}</text>
        </g>
      ))}
      {rows.map((row, ri) =>
        row.map((val, ci) => {
          const isLoc = hilightLoc(ci, ri);
          const isIloc = hilightIloc(ci, ri);
          const isBool = hilightBool(ri);
          const bg = isLoc ? 'rgba(249,115,22,0.45)' : isIloc ? 'rgba(249,115,22,0.10)' : isBool ? 'rgba(16,185,129,0.18)' : 'rgba(0,0,0,0)';
          return (
            <g key={'ir' + ri + ci}>
              <rect x={8 + ci * cellW} y={54 + ri * cellH} width={cellW} height={cellH}
                fill={bg} stroke="var(--text-secondary)" strokeWidth="1" />
              <text x={8 + ci * cellW + cellW / 2} y={54 + ri * cellH + cellH / 2 + 5}
                textAnchor="middle" fill="var(--text-primary)">{val}</text>
            </g>
          );
        })
      )}

      {/* Legends */}
      <rect x="310" y="60" width="14" height="14" fill="rgba(249,115,22,0.45)" stroke={color} strokeWidth="1" />
      <text x="330" y="72" fill="var(--text-primary)" fontSize="11">.loc[1, 'nome'] — por rótulo</text>

      <rect x="310" y="82" width="14" height="14" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="330" y="94" fill="var(--text-primary)" fontSize="11">.iloc[:2, :2] — por posição</text>

      <rect x="310" y="104" width="14" height="14" fill="rgba(16,185,129,0.18)" stroke="#f97316" strokeWidth="1" />
      <text x="330" y="116" fill="var(--text-primary)" fontSize="11">df[df['idade'] &gt; 28] — bool</text>

      <text x="310" y="145" fill="var(--text-secondary)" fontSize="10">.at[1,'nome'] → valor único (rótulo)</text>
      <text x="310" y="160" fill="var(--text-secondary)" fontSize="10">.iat[1,1]   → valor único (posição)</text>

      <text x="8" y="218" fill="var(--text-secondary)" fontSize="10">loc — rótulo; iloc — posição inteira; bool indexing — expressão booleana; at/iat — acesso escalar eficiente</text>
    </svg>
  );
}

// ── SVG 3: Data cleaning pipeline ────────────────────────────────────────────
function SvgCleaning() {
  const steps = [
    { label: 'Dados\nBrutos', detail: '200 linhas\n18 NaN\n5 duplicados', x: 20 },
    { label: 'dropna /\nfillna', detail: '182 linhas\n0 NaN', x: 170 },
    { label: 'drop_\nduplicates', detail: '177 linhas\n0 dup.', x: 320 },
    { label: 'astype', detail: 'tipos\ncorretos', x: 470 },
  ];
  return (
    <svg width="100%" viewBox="0 0 600 160" fontFamily="sans-serif" fontSize="12">
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={30} width={120} height={90} rx="8"
            fill={i === 0 ? 'rgba(249,115,22,0.10)' : i === steps.length - 1 ? 'rgba(249,115,22,0.08)' : 'rgba(249,115,22,0.08)'}
            stroke={i === 0 ? '#f97316' : i === steps.length - 1 ? '#f97316' : color}
            strokeWidth="1.5" />
          <text x={s.x + 60} y={58} textAnchor="middle" fontWeight="700"
            fill={i === 0 ? '#f97316' : i === steps.length - 1 ? '#f97316' : color} fontSize="11">
            {s.label.split('\n').map((line, li) => (
              <tspan key={li} x={s.x + 60} dy={li === 0 ? 0 : 14}>{line}</tspan>
            ))}
          </text>
          {s.detail.split('\n').map((line, li) => (
            <text key={li} x={s.x + 60} y={85 + li * 14} textAnchor="middle"
              fill="var(--text-secondary)" fontSize="10">{line}</text>
          ))}
          {i < steps.length - 1 && (
            <g>
              <line x1={s.x + 122} y1={70} x2={s.x + 148} y2={70}
                stroke="var(--text-secondary)" strokeWidth="1.5" />
              <polygon points={`${s.x + 148},65 ${s.x + 158},70 ${s.x + 148},75`}
                fill="var(--text-secondary)" />
            </g>
          )}
        </g>
      ))}
      <text x="300" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">
        Pipeline de limpeza: cada passo reduz ruído nos dados
      </text>
    </svg>
  );
}

// ── SVG 4: apply/map/transform ────────────────────────────────────────────────
function SvgTransform() {
  return (
    <svg width="100%" viewBox="0 0 600 180" fontFamily="monospace" fontSize="12">
      {/* Series */}
      <text x="10" y="18" fill={color} fontWeight="700" fontSize="13">Series.map / apply</text>
      {[10, 20, 30].map((v, i) => (
        <g key={i}>
          <rect x="10" y={28 + i * 32} width="60" height="28" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1" />
          <text x="40" y={28 + i * 32 + 18} textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      <text x="80" y="98" fill="var(--text-secondary)" fontSize="11">.map(</text>
      <text x="80" y="112" fill="var(--text-secondary)" fontSize="11">lambda x:</text>
      <text x="80" y="126" fill="var(--text-secondary)" fontSize="11">x * 2)</text>
      {[20, 40, 60].map((v, i) => (
        <g key={i}>
          <rect x="160" y={28 + i * 32} width="60" height="28" fill="rgba(16,185,129,0.12)" stroke="#f97316" strokeWidth="1" />
          <text x="190" y={28 + i * 32 + 18} textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      <line x1="72" y1="70" x2="158" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="156,66 164,70 156,74" fill="var(--text-secondary)" />

      {/* DataFrame apply */}
      <text x="280" y="18" fill={color} fontWeight="700" fontSize="13">DataFrame.apply</text>
      {['A', 'B'].map((col, ci) =>
        [1, 2, 3].map((val, ri) => (
          <g key={col + ri}>
            <rect x={280 + ci * 60} y={28 + ri * 32} width="56" height="28"
              fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1" />
            <text x={280 + ci * 60 + 28} y={28 + ri * 32 + 18} textAnchor="middle" fill="var(--text-primary)">{val * (ci + 1)}</text>
          </g>
        ))
      )}
      <text x="406" y="80" fill="var(--text-secondary)" fontSize="10">.apply(</text>
      <text x="406" y="94" fill="var(--text-secondary)" fontSize="10">sum, axis=0)</text>
      {[6, 12].map((v, ci) => (
        <g key={'res' + ci}>
          <rect x={460 + ci * 60} y={54} width="56" height="28" fill="rgba(16,185,129,0.12)" stroke="#f97316" strokeWidth="1" />
          <text x={460 + ci * 60 + 28} y={72} textAnchor="middle" fill="var(--text-primary)">{v}</text>
        </g>
      ))}
      <line x1="400" y1="70" x2="458" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="456,66 464,70 456,74" fill="var(--text-secondary)" />
      <text x="400" y="160" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">axis=0 → por coluna | axis=1 → por linha</text>
    </svg>
  );
}

// ── SVG 5: GroupBy split-apply-combine ───────────────────────────────────────
function SvgGroupBy() {
  return (
    <svg width="100%" viewBox="0 0 600 200" fontFamily="sans-serif" fontSize="12">
      {/* Original */}
      <text x="10" y="18" fill={color} fontWeight="700" fontSize="12">SPLIT</text>
      {[['A', 10], ['B', 20], ['A', 30], ['B', 40], ['A', 50]].map(([g, v], i) => (
        <g key={i}>
          <rect x="10" y={24 + i * 28} width="80" height="24"
            fill={g === 'A' ? 'rgba(249,115,22,0.15)' : 'rgba(249,115,22,0.10)'}
            stroke={g === 'A' ? color : '#f97316'} strokeWidth="1" />
          <text x="50" y={24 + i * 28 + 16} textAnchor="middle" fill="var(--text-primary)">{g} | {v}</text>
        </g>
      ))}

      {/* Arrow */}
      <line x1="96" y1="90" x2="130" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="128,86 136,90 128,94" fill="var(--text-secondary)" />

      {/* Groups */}
      <text x="138" y="18" fill={color} fontWeight="700" fontSize="12">APPLY</text>
      {[['A', [10, 30, 50]], ['B', [20, 40]]].map(([g, vals], gi) => (
        <g key={g}>
          <text x={138 + gi * 120} y={36} fill={g === 'A' ? color : '#f97316'} fontWeight="700" fontSize="11">Grupo {g}</text>
          {vals.map((v, vi) => (
            <g key={vi}>
              <rect x={138 + gi * 120} y={42 + vi * 26} width="90" height="22"
                fill={g === 'A' ? 'rgba(249,115,22,0.12)' : 'rgba(249,115,22,0.10)'}
                stroke={g === 'A' ? color : '#f97316'} strokeWidth="1" />
              <text x={138 + gi * 120 + 45} y={42 + vi * 26 + 15} textAnchor="middle" fill="var(--text-primary)">{v}</text>
            </g>
          ))}
          <text x={138 + gi * 120 + 45} y={130} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">mean()</text>
          <rect x={138 + gi * 120} y={136} width="90" height="22"
            fill="rgba(16,185,129,0.15)" stroke="#f97316" strokeWidth="1" />
          <text x={138 + gi * 120 + 45} y={151} textAnchor="middle" fill="var(--text-primary)">{g === 'A' ? 30 : 30}</text>
        </g>
      ))}

      {/* Arrow */}
      <line x1="378" y1="97" x2="412" y2="97" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="410,93 418,97 410,101" fill="var(--text-secondary)" />

      {/* Result */}
      <text x="420" y="18" fill={color} fontWeight="700" fontSize="12">COMBINE</text>
      {[['A', 30], ['B', 30]].map(([g, v], i) => (
        <g key={g}>
          <rect x="420" y={71 + i * 28} width="100" height="24"
            fill="rgba(16,185,129,0.12)" stroke="#f97316" strokeWidth="1" />
          <text x="470" y={71 + i * 28 + 16} textAnchor="middle" fill="var(--text-primary)">{g} → {v}</text>
        </g>
      ))}

      <text x="300" y="188" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">
        groupby('grupo')['valor'].mean() — split-apply-combine
      </text>
    </svg>
  );
}

// ── SVG 6: Join types ─────────────────────────────────────────────────────────
function SvgJoins() {
  const joinTypes = [
    { label: 'INNER', desc: 'interseção', leftFill: 'rgba(249,115,22,0.1)', rightFill: 'rgba(249,115,22,0.1)', midFill: 'rgba(249,115,22,0.5)' },
    { label: 'LEFT', desc: 'tudo da esq.', leftFill: 'rgba(249,115,22,0.10)', rightFill: 'rgba(0,0,0,0)', midFill: 'rgba(249,115,22,0.10)' },
    { label: 'RIGHT', desc: 'tudo da dir.', leftFill: 'rgba(0,0,0,0)', rightFill: 'rgba(16,185,129,0.35)', midFill: 'rgba(16,185,129,0.35)' },
    { label: 'OUTER', desc: 'união total', leftFill: 'rgba(245,158,11,0.3)', rightFill: 'rgba(245,158,11,0.3)', midFill: 'rgba(245,158,11,0.3)' },
  ];
  return (
    <svg width="100%" viewBox="0 0 600 180" fontFamily="sans-serif" fontSize="12">
      {joinTypes.map((j, i) => {
        const ox = 10 + i * 148;
        return (
          <g key={j.label}>
            <text x={ox + 62} y="16" textAnchor="middle" fill={color} fontWeight="700" fontSize="12">{j.label}</text>
            <text x={ox + 62} y="28" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{j.desc}</text>
            {/* Left circle */}
            <ellipse cx={ox + 42} cy={90} rx="40" ry="50" fill={j.leftFill} stroke="#f97316" strokeWidth="1.5" />
            {/* Right circle */}
            <ellipse cx={ox + 82} cy={90} rx="40" ry="50" fill={j.rightFill} stroke={color} strokeWidth="1.5" />
            {/* Mid overlay */}
            <clipPath id={'lc' + i}>
              <ellipse cx={ox + 42} cy={90} rx="40" ry="50" />
            </clipPath>
            <ellipse cx={ox + 82} cy={90} rx="40" ry="50" fill={j.midFill} clipPath={'url(#lc' + i + ')'} />
            <text x={ox + 30} y="168" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">L</text>
            <text x={ox + 94} y="168" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">R</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── SVG 7: Pivot long → wide ──────────────────────────────────────────────────
function SvgPivot() {
  return (
    <svg width="100%" viewBox="0 0 600 200" fontFamily="monospace" fontSize="11">
      {/* Long format */}
      <text x="10" y="18" fill={color} fontWeight="700" fontSize="12">Formato Longo</text>
      {[['nome','metric','valor'],['Ana','A','10'],['Ana','B','20'],['Bruno','A','30'],['Bruno','B','40']].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <g key={ci}>
              <rect x={10 + ci * 70} y={24 + ri * 28} width="68" height="26"
                fill={ri === 0 ? 'rgba(249,115,22,0.15)' : 'rgba(0,0,0,0)'}
                stroke={ri === 0 ? color : 'var(--card-border)'} strokeWidth="1" />
              <text x={10 + ci * 70 + 34} y={24 + ri * 28 + 17} textAnchor="middle"
                fill={ri === 0 ? color : 'var(--text-primary)'} fontWeight={ri === 0 ? '700' : '400'}>{cell}</text>
            </g>
          ))}
        </g>
      ))}

      {/* Arrow */}
      <text x="248" y="90" fill="var(--text-secondary)" fontSize="10">pivot_table</text>
      <line x1="240" y1="100" x2="300" y2="100" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="298,96 306,100 298,104" fill="var(--text-secondary)" />

      {/* Wide format */}
      <text x="318" y="18" fill={color} fontWeight="700" fontSize="12">Formato Wide</text>
      {[['nome','A','B'],['Ana','10','20'],['Bruno','30','40']].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <g key={ci}>
              <rect x={318 + ci * 80} y={24 + ri * 32} width="78" height="28"
                fill={ri === 0 ? 'rgba(249,115,22,0.15)' : ci > 0 ? 'rgba(16,185,129,0.1)' : 'rgba(0,0,0,0)'}
                stroke={ri === 0 ? color : ci > 0 ? '#f97316' : 'var(--card-border)'} strokeWidth="1" />
              <text x={318 + ci * 80 + 39} y={24 + ri * 32 + 18} textAnchor="middle"
                fill={ri === 0 ? color : ci > 0 ? '#f97316' : 'var(--text-primary)'}
                fontWeight={ri === 0 ? '700' : '400'}>{cell}</text>
            </g>
          ))}
        </g>
      ))}
      <text x="300" y="185" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">
        pd.pivot_table(df, values='valor', index='nome', columns='metric', aggfunc='sum')
      </text>
    </svg>
  );
}

// ── SVG 8: Time series resampling ─────────────────────────────────────────────
function SvgTimeSeries() {
  const daily = [12, 18, 9, 22, 14, 8, 25, 30, 16, 11, 19, 27, 7, 21];
  const monthly = [daily.slice(0, 7).reduce((a, b) => a + b, 0) / 7, daily.slice(7).reduce((a, b) => a + b, 0) / 7];
  const maxD = Math.max(...daily);
  const h = 80, w = 240;
  return (
    <svg width="100%" viewBox="0 0 600 200" fontFamily="sans-serif" fontSize="11">
      <text x="10" y="18" fill={color} fontWeight="700" fontSize="12">Daily (freq D)</text>
      {daily.map((v, i) => (
        <rect key={i} x={10 + i * (w / daily.length)} y={24 + h - (v / maxD) * h}
          width={w / daily.length - 2} height={(v / maxD) * h}
          fill={color} opacity="0.7" />
      ))}
      <line x1="10" y1={24 + h} x2={10 + w} y2={24 + h} stroke="var(--text-secondary)" strokeWidth="1" />

      {/* Arrow */}
      <text x="291" y="68" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">.resample('ME')</text>
      <text x="291" y="80" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">.mean()</text>
      <line x1="252" y1="86" x2="318" y2="86" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="316,82 324,86 316,90" fill="var(--text-secondary)" />

      {/* Monthly */}
      <text x="330" y="18" fill={color} fontWeight="700" fontSize="12">Monthly (freq ME)</text>
      {monthly.map((v, i) => (
        <rect key={i} x={330 + i * 110} y={24 + h - (v / maxD) * h}
          width="90" height={(v / maxD) * h}
          fill="#f97316" opacity="0.75" />
      ))}
      <line x1="330" y1={24 + h} x2={550} y2={24 + h} stroke="var(--text-secondary)" strokeWidth="1" />

      {/* rolling */}
      <text x="10" y="140" fill="var(--text-secondary)" fontSize="10">.rolling(window=3).mean() — média móvel de 3 períodos</text>
      <text x="10" y="156" fill="var(--text-secondary)" fontSize="10">.shift(1)                — desloca série 1 período para frente</text>
      <text x="10" y="172" fill="var(--text-secondary)" fontSize="10">.diff()                  — diferença entre períodos consecutivos</text>
      <text x="10" y="188" fill="var(--text-secondary)" fontSize="10">pd.to_datetime(df['data']) — converte strings para DatetimeIndex</text>
    </svg>
  );
}

// ── SVG 9: Pipeline / method chaining ────────────────────────────────────────
function SvgPipeline() {
  const steps = ['load', 'clean', 'transform', 'aggregate', 'export'];
  return (
    <svg width="100%" viewBox="0 0 600 120" fontFamily="sans-serif" fontSize="12">
      <text x="10" y="18" fill={color} fontWeight="700" fontSize="13">df.pipe(step1).pipe(step2).pipe(step3)…</text>
      {steps.map((s, i) => {
        const x = 10 + i * 114;
        return (
          <g key={s}>
            <rect x={x} y="30" width="100" height="50" rx="8"
              fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
            <text x={x + 50} y="60" textAnchor="middle" fontWeight="700" fill={color} fontSize="11">{s}</text>
            {i < steps.length - 1 && (
              <g>
                <line x1={x + 102} y1="55" x2={x + 112} y2="55" stroke="var(--text-secondary)" strokeWidth="1.5" />
                <polygon points={`${x + 110},51 ${x + 118},55 ${x + 110},59`} fill="var(--text-secondary)" />
              </g>
            )}
          </g>
        );
      })}
      <text x="300" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">
        Cada passo é uma função pura: recebe df, devolve df transformado
      </text>
    </svg>
  );
}

// ── SVG 10: Workflow synthesis ────────────────────────────────────────────────
function SvgWorkflow() {
  const steps = [
    { label: 'Load', sub: 'read_csv\nread_excel', c: '#f97316' },
    { label: 'Inspect', sub: 'head\ninfo\ndescribe', c: color },
    { label: 'Clean', sub: 'fillna\ndropna\nastype', c: '#f97316' },
    { label: 'Transform', sub: 'apply\nmap\nrename', c: color },
    { label: 'Aggregate', sub: 'groupby\npivot', c: '#f97316' },
    { label: 'Export', sub: 'to_csv\nto_excel', c: '#f97316' },
  ];
  return (
    <svg width="100%" viewBox="0 0 600 140" fontFamily="sans-serif" fontSize="11">
      {steps.map((s, i) => {
        const x = 8 + i * 98;
        return (
          <g key={s.label}>
            <rect x={x} y="20" width="88" height="80" rx="8"
              fill="rgba(0,0,0,0)" stroke={s.c} strokeWidth="2" />
            <text x={x + 44} y="45" textAnchor="middle" fontWeight="700" fill={s.c} fontSize="12">{s.label}</text>
            {s.sub.split('\n').map((line, li) => (
              <text key={li} x={x + 44} y={60 + li * 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{line}</text>
            ))}
            {i < steps.length - 1 && (
              <g>
                <line x1={x + 90} y1="60" x2={x + 96} y2="60" stroke="var(--text-secondary)" strokeWidth="1.5" />
                <polygon points={`${x + 94},56 ${x + 100},60 ${x + 94},64`} fill="var(--text-secondary)" />
              </g>
            )}
          </g>
        );
      })}
      <text x="300" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">
        Fluxo típico de análise de dados com Pandas
      </text>
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function PfDS6() {
  return (
    <div style={S.page}>
      <Link to="/pfds" style={S.back}><ArrowLeft size={16} /> Voltar a Programming for Data Science</Link>

      <div style={S.tag}>MÓDULO 06</div>
      <h1 style={S.h1}>Pandas para Data Science</h1>
      <p style={S.lead}>
        Pandas é a biblioteca de eleição para manipulação e análise de dados tabulares em Python.
        Este módulo cobre Series e DataFrame, indexação, limpeza, transformações, GroupBy,
        merges, pivot tables, strings, time series, performance e boas práticas de pipeline.
      </p>

      {/* ── 1. DataFrame e Series ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. DataFrame e Series</h2>
        <p style={S.p}>
          Uma <strong>Series</strong> é um array unidimensional com rótulos (index). Um <strong>DataFrame</strong> é
          uma estrutura bidimensional: linhas são observações, colunas são features. Internamente, um
          DataFrame é um dicionário de Series que partilham o mesmo Index.
        </p>
        <div style={S.svgWrap}><SvgDataFrame /></div>
        <div style={S.code}>{`import pandas as pd

# Criar Series
s = pd.Series([11, 28, 72], index=['a', 'b', 'c'])
print(s.index)   # Index(['a', 'b', 'c'], dtype='object')
print(s.values)  # array([11, 28, 72])
print(s.dtype)   # int64

# Criar DataFrame a partir de dicionário
df = pd.DataFrame({
    'nome':    ['Ana', 'Bruno', 'Carla'],
    'idade':   [25, 30, 22],
    'salario': [1800.0, 2500.0, 2100.0]
})

# Criar a partir de lista de dicts
df2 = pd.DataFrame([
    {'nome': 'Ana', 'idade': 25},
    {'nome': 'Bruno', 'idade': 30},
])

# Ler CSV
df_csv = pd.read_csv('dados.csv', sep=';', encoding='utf-8')
df_excel = pd.read_excel('dados.xlsx', sheet_name='Sheet1')

# Propriedades essenciais
print(df.shape)    # (3, 3)
print(df.columns)  # Index(['nome', 'idade', 'salario'])
print(df.dtypes)
# nome       object
# idade       int64
# salario   float64`}</div>
        <div style={S.note}>
          Cada coluna de um DataFrame é uma Series. Aceder a uma coluna com <code>df['nome']</code> devolve
          uma Series; aceder a várias colunas com <code>df[['nome', 'idade']]</code> devolve um DataFrame.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 2. Indexação e Seleção ────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Indexação e Seleção</h2>
        <p style={S.p}>
          Pandas oferece três paradigmas de seleção: <strong>.loc[]</strong> por rótulo,
          <strong> .iloc[]</strong> por posição inteira, e <strong>boolean indexing</strong> por expressão
          booleana. Para acesso escalar eficiente existem <code>.at[]</code> e <code>.iat[]</code>.
        </p>
        <div style={S.svgWrap}><SvgIndexing /></div>
        <div style={S.code}>{`# .loc — por rótulo (inclui extremo)
df.loc[1, 'nome']           # 'Bruno'
df.loc[0:2, ['nome', 'idade']]  # linhas 0,1,2 (inclusivo!)
df.loc[df['idade'] > 25, 'nome']  # filtro com loc

# .iloc — por posição (exclui extremo, como Python)
df.iloc[0, 1]       # 25 (linha 0, col 1)
df.iloc[:3, :2]     # primeiras 3 linhas, 2 colunas
df.iloc[[0, 2], :]  # linhas 0 e 2

# Boolean indexing
df[df['idade'] > 25]
df[(df['idade'] > 22) & (df['salario'] < 2500)]
df[df['nome'].isin(['Ana', 'Carla'])]

# .at e .iat — acesso escalar mais rápido
df.at[1, 'nome']   # 'Bruno'  (rótulo)
df.iat[1, 0]       # 'Bruno'  (posição)

# .query — expressão como string (mais legível)
df.query('idade > 25')
df.query('salario < 2400 and nome != "Ana"')`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Atenção: <code>.loc[0:2]</code> inclui o índice 2 (comportamento diferente do Python).
            <code>.iloc[0:2]</code> exclui o índice 2, como o slicing normal do Python.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 3. Limpeza de Dados ───────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Limpeza de Dados</h2>
        <p style={S.p}>
          Dados reais têm valores em falta, duplicados e tipos errados. Pandas oferece métodos
          específicos para cada problema.
        </p>
        <div style={S.svgWrap}><SvgCleaning /></div>
        <div style={S.code}>{`# ── Valores em falta ──────────────────────────────────────
df.isna()                      # máscara booleana de NaN
df.isna().sum()                # contagem por coluna
df.isna().sum().sum()          # total no DataFrame

df.dropna()                    # remove linhas com qualquer NaN
df.dropna(subset=['idade'])    # remove só se NaN em 'idade'
df.dropna(how='all')           # remove só se TODOS os valores NaN
df.dropna(thresh=3)            # mantém linhas com >= 3 valores não-NaN

df.fillna(0)                   # preencher com 0
df.fillna({'idade': 0, 'nome': 'Desconhecido'})  # por coluna
df['salario'].fillna(df['salario'].mean())       # com média

# ── Duplicados ─────────────────────────────────────────────
df.duplicated()                      # máscara booleana
df.duplicated(subset=['nome'])       # duplicados em 'nome'
df.drop_duplicates()                 # remove duplicados
df.drop_duplicates(subset=['nome'], keep='last')  # manter último

# ── Tipos ──────────────────────────────────────────────────
df['idade'].astype(int)
df['salario'].astype(float)
df['data'] = pd.to_datetime(df['data'], format='%Y-%m-%d')
df['categoria'] = df['categoria'].astype('category')  # economiza memória

# ── Substituições ──────────────────────────────────────────
df['col'].replace({'sim': 1, 'não': 0})
df['col'].str.strip()              # remove espaços
df['col'].str.lower()              # normaliza capitalização`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Objetivo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['.isna() / .notna()', 'Máscara booleana de NaN / não-NaN'],
              ['.fillna(valor)', 'Preencher NaN com valor, média, etc.'],
              ['.dropna()', 'Remover linhas (ou colunas) com NaN'],
              ['.duplicated()', 'Identificar linhas duplicadas'],
              ['.drop_duplicates()', 'Remover duplicados'],
              ['.astype(dtype)', 'Converter tipo de coluna'],
              ['.replace(dict)', 'Substituir valores por mapeamento'],
            ].map(([m, d]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{m}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 4. Transformações ─────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Transformações</h2>
        <p style={S.p}>
          Pandas oferece <code>.apply()</code>, <code>.map()</code> e <code>.applymap()</code> para
          transformações elemento-a-elemento ou por linha/coluna. Criar colunas novas é trivial.
        </p>
        <div style={S.svgWrap}><SvgTransform /></div>
        <div style={S.code}>{`# ── .map() — Series, elemento a elemento ──────────────────
df['nome'].map(str.upper)
df['idade'].map(lambda x: x * 2)
df['estado'].map({'solteiro': 0, 'casado': 1})  # dicionário

# ── .apply() — Series ou DataFrame ────────────────────────
df['nome'].apply(len)                   # comprimento de cada string
df.apply(lambda col: col.max(), axis=0) # máximo por coluna
df.apply(lambda row: row.sum(), axis=1) # soma por linha

# ── .applymap() — cada célula do DataFrame ────────────────
df_num.applymap(lambda x: round(x, 2))

# ── Criar novas colunas ───────────────────────────────────
df['salario_anual'] = df['salario'] * 12
df['nome_upper'] = df['nome'].str.upper()
df['ratio'] = df['A'] / df['B']

# ── Renomear e remover ────────────────────────────────────
df.rename(columns={'nome': 'name', 'idade': 'age'})
df.rename(index={0: 'primeiro'})
df.drop(columns=['salario'])
df.drop(index=[0, 1])

# ── Lambda dentro de apply ────────────────────────────────
df['escalao'] = df['idade'].apply(lambda x: 'junior' if x < 30 else 'senior')`}</div>
        <div style={S.note}>
          <code>.map()</code> funciona apenas em Series. <code>.apply()</code> funciona em Series e
          DataFrames (com axis=0 ou axis=1). <code>.applymap()</code> aplica a cada célula individual
          do DataFrame — use para transformações globais de formatação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 5. GroupBy ───────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. GroupBy — Split-Apply-Combine</h2>
        <p style={S.p}>
          O padrão <strong>split-apply-combine</strong> divide o DataFrame em grupos,
          aplica uma função a cada grupo e combina os resultados num único objeto.
        </p>
        <div style={S.svgWrap}><SvgGroupBy /></div>
        <div style={S.code}>{`# ── Agregação básica ──────────────────────────────────────
df.groupby('job')['salario'].mean()
df.groupby(['job', 'cidade'])['salario'].sum()

# ── .agg() com múltiplas funções ──────────────────────────
df.groupby('job')['salario'].agg(['mean', 'min', 'max', 'count'])

# ── Named aggregations (pandas >= 0.25) ───────────────────
df.groupby('job').agg(
    salario_medio=('salario', 'mean'),
    salario_max=('salario', 'max'),
    total=('salario', 'sum'),
)

# ── .transform() — devolve Series com mesmo índice ────────
df['salario_z'] = df.groupby('job')['salario'].transform(
    lambda x: (x - x.mean()) / x.std()
)
# Diferença key: .agg() reduz; .transform() mantém shape original

# ── value_counts normalizado por grupo ────────────────────
df.groupby('escalao')['estado'].value_counts(normalize=True).unstack().fillna(0)

# ── filter — manter só grupos que satisfazem condição ─────
df.groupby('job').filter(lambda g: g['salario'].mean() > 2000)`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>.agg()</strong> reduz cada grupo a um valor — o resultado tem menos linhas.
            <strong> .transform()</strong> devolve um valor por observação original — útil para
            normalização dentro de grupos (e.g., z-score por categoria).
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 6. Merge e Join ──────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Merge e Join</h2>
        <p style={S.p}>
          <code>pd.merge()</code> combina DataFrames com lógica de database-style join.
          Os quatro tipos de join diferem na forma como lidam com chaves sem correspondência.
        </p>
        <div style={S.svgWrap}><SvgJoins /></div>
        <div style={S.code}>{`# ── pd.merge() ───────────────────────────────────────────
pd.merge(df_left, df_right, on='key')             # inner (padrão)
pd.merge(df_left, df_right, on='key', how='left')
pd.merge(df_left, df_right, on='key', how='right')
pd.merge(df_left, df_right, on='key', how='outer')

# Chaves com nomes diferentes
pd.merge(df1, df2, left_on='user_id', right_on='id')

# Merge em múltiplas colunas
pd.merge(df1, df2, on=['ano', 'mes'])

# ── Join no índice ────────────────────────────────────────
df1.join(df2, how='left')           # join pelo Index
df1.join(df2, on='key')             # chave de df1 vs Index de df2

# ── pd.concat() — empilhar DataFrames ────────────────────
pd.concat([df1, df2], ignore_index=True)          # vertical
pd.concat([df1, df2], axis=1)                     # horizontal
pd.concat([df1, df2], axis=0, keys=['2022','2023'])  # MultiIndex

# ── Verificar qualidade do merge ──────────────────────────
merged = pd.merge(df1, df2, on='key', how='outer')
merged.isna().sum()                 # NaN introduzidos por outer join
merged[merged['col'].isna()].head() # chaves sem correspondência`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>how=</th>
              <th style={S.th}>Linhas resultantes</th>
              <th style={S.th}>NaN introduzidos</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['"inner"', 'Apenas chaves presentes em ambos', 'Não'],
              ['"left"', 'Todas as chaves do DataFrame esquerdo', 'Colunas do direito'],
              ['"right"', 'Todas as chaves do DataFrame direito', 'Colunas do esquerdo'],
              ['"outer"', 'Todas as chaves de ambos', 'Ambos os lados'],
            ].map(([h, r, n]) => (
              <tr key={h}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{h}</td>
                <td style={S.td}>{r}</td>
                <td style={S.td}>{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 7. Pivot Tables e Crosstab ───────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Pivot Tables e Crosstab</h2>
        <p style={S.p}>
          Pivot tables são uma versão bidimensional do GroupBy: o split-apply-combine ocorre
          em simultâneo ao longo de índice e colunas. <code>pd.crosstab()</code> é um caso especial
          para tabelas de frequência.
        </p>
        <div style={S.svgWrap}><SvgPivot /></div>
        <div style={S.code}>{`# ── pivot_table básica ───────────────────────────────────
pd.pivot_table(df,
    values='salario',
    index='job',
    columns='cidade',
    aggfunc='mean'
)

# Múltiplas agregações
pd.pivot_table(df,
    values='salario',
    index='job',
    columns='cidade',
    aggfunc=['mean', 'count', 'sum'],
    fill_value=0            # substituir NaN por 0
)

# ── pd.crosstab() — frequências ──────────────────────────
pd.crosstab(df['job'], df['estado'])
pd.crosstab(df['job'], df['estado'], normalize='index')  # proporções por linha
pd.crosstab(df['job'], df['estado'],
            values=df['salario'], aggfunc='mean')         # com valores

# ── pivot simples (sem agregação) ─────────────────────────
df.pivot(index='nome', columns='metric', values='valor')
# Nota: pivot falha com duplicados — usar pivot_table nesses casos`}</div>
        <div style={S.note}>
          <code>pivot()</code> é uma reestruturação pura (sem agregação). <code>pivot_table()</code>
          agrega e lida com duplicados automaticamente. <code>crosstab()</code> é um atalho para
          tabelas de contingência entre duas variáveis categóricas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 8. String Operations ─────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. String Operations</h2>
        <p style={S.p}>
          O acessor <code>.str</code> expõe operações de string vetorizadas — evitam loops e funcionam
          diretamente sobre Series com dtype object.
        </p>
        <div style={S.code}>{`# ── Normalização ─────────────────────────────────────────
df['nome'].str.lower()
df['nome'].str.upper()
df['nome'].str.strip()
df['nome'].str.replace(' ', '_')

# ── Filtragem ─────────────────────────────────────────────
df[df['email'].str.contains('@gmail.com', na=False)]
df[df['codigo'].str.startswith('PT')]
df[df['desc'].str.endswith('!')]

# ── Extração ──────────────────────────────────────────────
df['nome'].str.split(' ')              # lista de tokens
df['nome'].str.split(' ', expand=True) # DataFrame de colunas
df['texto'].str.extract(r'(\d+)')      # regex, captura grupo

# ── Informação ────────────────────────────────────────────
df['nome'].str.len()
df['nome'].str.count('a')
df['code'].str[0:3]                    # slice de string`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método str</th>
              <th style={S.th}>Equivalente Python</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['.str.lower()', '"texto".lower()'],
              ['.str.contains(pat)', '"texto" in s / re.search()'],
              ['.str.split(sep)', '"a,b".split(",")'],
              ['.str.extract(regex)', 're.search(regex, s).group()'],
              ['.str.replace(pat, rep)', '"s".replace(pat, rep)'],
              ['.str.strip()', '"s".strip()'],
              ['.str.len()', 'len("s")'],
              ['.str[i:j]', '"s"[i:j]'],
            ].map(([m, e]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{m}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 9. Time Series ───────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Time Series em Pandas</h2>
        <p style={S.p}>
          Pandas tem suporte nativo a séries temporais através de <code>DatetimeIndex</code>.
          As operações de <code>.resample()</code>, <code>.rolling()</code> e <code>.shift()</code>
          tornam análise temporal muito mais simples.
        </p>
        <div style={S.svgWrap}><SvgTimeSeries /></div>
        <div style={S.code}>{`# ── Converter para datetime ──────────────────────────────
df['data'] = pd.to_datetime(df['data'])
df['data'] = pd.to_datetime(df['data'], format='%d/%m/%Y')

# Definir como índice
df = df.set_index('data')

# ── Criar DatetimeIndex ───────────────────────────────────
idx = pd.date_range('2024-01-01', periods=12, freq='ME')
ts = pd.Series(range(12), index=idx)

# ── Resample — mudar frequência ───────────────────────────
ts.resample('ME').mean()    # diário → mensal (média)
ts.resample('W').sum()      # diário → semanal (soma)
ts.resample('Q').last()     # → trimestral (último valor)

# ── Rolling — janela deslizante ───────────────────────────
ts.rolling(window=7).mean()         # média móvel 7 dias
ts.rolling(window=30).std()         # desvio padrão 30 dias
ts.rolling(window=3, min_periods=1).mean()  # janela com mínimo

# ── Shift — deslocar no tempo ─────────────────────────────
ts.shift(1)          # 1 período para frente (lag)
ts.shift(-1)         # 1 período para trás (lead)
ts.diff()            # diferença entre períodos consecutivos
ts.pct_change()      # variação percentual

# ── Propriedades de datas ─────────────────────────────────
df.index.year
df.index.month
df.index.day_name()
df.index.quarter`}</div>
        <div style={S.note}>
          Ao fazer <code>resample('ME')</code> é necessário sempre chamar uma função de agregação
          em seguida: <code>.mean()</code>, <code>.sum()</code>, <code>.first()</code>, etc.
          O objeto resample por si só não devolve valores.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 10. Performance ──────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Performance</h2>
        <p style={S.p}>
          A regra de ouro: <strong>nunca iterar com for sobre linhas de um DataFrame</strong>.
          Operações vetorizadas são ordens de magnitude mais rápidas.
        </p>
        <div style={S.code}>{`# ── ERRADO — loop sobre linhas ───────────────────────────
# Complexidade O(n) com overhead Python por linha:
for i, row in df.iterrows():
    df.at[i, 'novo'] = row['a'] + row['b']   # LENTO

# ── CORRETO — operação vetorizada ─────────────────────────
df['novo'] = df['a'] + df['b']                # 100-1000x mais rápido

# ── .query() vs boolean indexing ─────────────────────────
# Equivalentes em resultado; query é mais legível:
df[df['salario'] > 2000]
df.query('salario > 2000')          # mesma performance

# ── Inspecionar memória ───────────────────────────────────
df.info(memory_usage='deep')        # inclui objetos Python
df.memory_usage(deep=True)          # por coluna em bytes
df.memory_usage(deep=True).sum() / 1e6  # total em MB

# ── Categorical dtype — economiza memória ─────────────────
df['estado'].astype('category')     # de object para category
# Útil para colunas com poucos valores únicos (low cardinality)

before = df['estado'].nbytes
df['estado'] = df['estado'].astype('category')
after = df['estado'].nbytes
# Redução pode ser 5-10x para colunas categóricas

# ── Chunking — ficheiros grandes ──────────────────────────
chunks = []
for chunk in pd.read_csv('grande.csv', chunksize=10000):
    chunk_filtrado = chunk[chunk['valor'] > 100]
    chunks.append(chunk_filtrado)
df = pd.concat(chunks, ignore_index=True)

# ── Operações eficientes ──────────────────────────────────
df.eval('novo = a + b * 2')         # expressão como string
df.eval('a + b').sum()              # sem criar coluna intermédia`}</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão</th>
              <th style={S.th}>Velocidade relativa</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Operação vetorizada (df["a"] + df["b"])', 'Base (1x)', 'Sempre que possível'],
              ['.apply(func)', '10-100x mais lento', 'Lógica complexa não vetorizável'],
              ['.iterrows()', '1000x mais lento', 'Nunca em produção'],
              ['.itertuples()', '100x mais lento', 'Se mesmo precisar iterar'],
            ].map(([p, s, q]) => (
              <tr key={p}>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.8rem' }}>{p}</td>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{q}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── 11. Pipeline com method chaining ─────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Pipeline com Method Chaining</h2>
        <p style={S.p}>
          <code>df.pipe(func)</code> permite encadear funções personalizadas no mesmo estilo fluente
          que os métodos nativos de Pandas. Torna o código mais legível e testável.
        </p>
        <div style={S.svgWrap}><SvgPipeline /></div>
        <div style={S.code}>{`# ── Funções do pipeline ──────────────────────────────────
def load_data(path):
    return pd.read_csv(path, sep=';')

def clean(df):
    return (df
        .dropna(subset=['nome', 'salario'])
        .drop_duplicates()
        .assign(nome=df['nome'].str.strip().str.lower())
    )

def add_features(df):
    return df.assign(
        salario_anual=df['salario'] * 12,
        escalao=pd.cut(df['salario'], bins=[0, 1500, 2500, 9999],
                       labels=['baixo', 'medio', 'alto'])
    )

def aggregate(df):
    return df.groupby('escalao')['salario_anual'].agg(['mean', 'count'])

# ── Encadeamento com .pipe() ──────────────────────────────
resultado = (
    load_data('dados.csv')
    .pipe(clean)
    .pipe(add_features)
    .pipe(aggregate)
)

# ── Method chaining nativo ────────────────────────────────
resultado = (
    df
    .query('salario > 1000')
    .assign(salario_anual=lambda d: d['salario'] * 12)
    .groupby('job')['salario_anual']
    .mean()
    .sort_values(ascending=False)
    .head(10)
)`}</div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A chave para method chaining legível é: uma operação por linha, dentro de parênteses
            exteriores. Use <code>.assign()</code> para criar colunas dentro de uma chain sem quebrar
            o fluxo. Funções no pipeline devem ser puras: receber df e devolver df.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── 12. Síntese ──────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>12. Síntese</h2>
        <p style={S.p}>
          Fluxo típico de um projeto de análise de dados com Pandas: do carregamento à exportação.
        </p>
        <div style={S.svgWrap}><SvgWorkflow /></div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fase</th>
              <th style={S.th}>Operações principais</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Load', 'read_csv, read_excel, read_json, read_sql'],
              ['Inspect', 'head, tail, info, describe, value_counts, shape, dtypes'],
              ['Clean', 'isna, fillna, dropna, drop_duplicates, astype, replace'],
              ['Index / Select', 'loc, iloc, boolean indexing, at, iat, query'],
              ['Transform', 'apply, map, applymap, assign, rename, drop, str.*'],
              ['Aggregate', 'groupby + agg/transform, pivot_table, crosstab'],
              ['Combine', 'merge (inner/left/right/outer), concat, join'],
              ['Time Series', 'to_datetime, resample, rolling, shift, diff'],
              ['Performance', 'vectorized ops, categorical dtype, chunking, eval'],
              ['Export', 'to_csv, to_excel, to_json, to_sql, to_parquet'],
            ].map(([fase, ops]) => (
              <tr key={fase}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{fase}</td>
                <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{ops}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <p style={S.p}><strong>Regras de ouro:</strong></p>
          <p style={S.p}>1. Nunca iterar com for sobre linhas — usar operações vetorizadas.</p>
          <p style={S.p}>2. Preferir <code>.assign()</code> a atribuição direta dentro de chains.</p>
          <p style={S.p}>3. Usar <code>category</code> dtype para colunas com baixa cardinalidade.</p>
          <p style={S.p}>4. Verificar NaN após merges com <code>.isna().sum()</code>.</p>
          <p style={{ ...S.p, marginBottom: 0 }}>5. Preferir <code>.loc[]</code> e <code>.iloc[]</code> explícitos a indexação ambígua.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>13. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>DataFrame e Series</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Indexação e Seleção</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Limpeza de Dados</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Transformações</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>GroupBy — Split-Apply-Combine</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Merge e Join</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Pivot Tables e Crosstab</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
