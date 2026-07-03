import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
const rgb = '249,115,22';
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
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: `2px solid var(--card-border)` },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(${rgb},0.06)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '0.5rem', margin: '1.2rem 0', textAlign: 'center' },
  ul: { margin: '0.5rem 0 0.5rem 1.3rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.97rem' },
};

/* ─── SVG diagrams ──────────────────────────────────────────────────── */

function SvgStreamMicroMacro() {
  return (
    <svg viewBox="0 0 700 200" width="100%" style={{ display: 'block' }}>
      {/* Stream points arriving */}
      {[30,60,90,120,150].map((x, i) => (
        <circle key={i} cx={x} cy={100 + (i % 3 - 1) * 28} r={5} fill={`rgba(${rgb},0.55)`} />
      ))}
      {[35,65,95,125,155].map((x, i) => (
        <circle key={i} cx={x} cy={100 + ((i+1) % 3 - 1) * 22} r={5} fill={`rgba(${rgb},0.4)`} />
      ))}
      <text x={80} y={185} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">Stream de pontos</text>

      {/* Arrow stream → online */}
      <line x1={170} y1={100} x2={230} y2={100} stroke={color} strokeWidth={2} />
      <polygon points="230,95 240,100 230,105" fill={color} />

      {/* Online box */}
      <rect x={242} y={72} width={130} height={56} rx={8} fill={`rgba(${rgb},0.12)`} stroke={color} strokeWidth={1.5} />
      <text x={307} y={98} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>Online</text>
      <text x={307} y={115} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">micro-clustering</text>

      {/* Arrow online → offline */}
      <line x1={372} y1={100} x2={432} y2={100} stroke={color} strokeWidth={2} />
      <polygon points="432,95 442,100 432,105" fill={color} />

      {/* Offline box */}
      <rect x={444} y={72} width={130} height={56} rx={8} fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth={1.5} strokeDasharray="5,3" />
      <text x={509} y={98} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>Offline</text>
      <text x={509} y={115} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">macro-clustering</text>

      {/* Output label */}
      <text x={509} y={165} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">Clusters finais</text>
      <line x1={509} y1={128} x2={509} y2={158} stroke="var(--text-secondary)" strokeWidth={1.5} strokeDasharray="3,2" />

      {/* Micro-cluster circles near online */}
      {[{cx:265,cy:88},{cx:310,cy:110},{cx:355,cy:82}].map((p,i)=>(
        <circle key={i} cx={p.cx} cy={p.cy} r={10} fill="none" stroke={color} strokeWidth={1.5} opacity={0.5} />
      ))}
    </svg>
  );
}

function SvgCluStream() {
  return (
    <svg viewBox="0 0 700 230" width="100%" style={{ display: 'block' }}>
      {/* Micro-cluster 1 */}
      <circle cx={140} cy={110} r={46} fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth={1.8} />
      <circle cx={140} cy={110} r={4} fill={color} />
      <text x={140} y={140} textAnchor="middle" fontSize={10} fontWeight={700} fill={color}>centróide</text>
      {/* radius annotation */}
      <line x1={140} y1={110} x2={186} y2={110} stroke={color} strokeWidth={1} strokeDasharray="4,2" />
      <text x={163} y={105} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">2σ (raio)</text>
      {/* points inside */}
      {[[120,95],[155,98],[130,125],[150,118],[135,105]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={3} fill={`rgba(${rgb},0.6)`} />
      ))}
      {/* CF annotation */}
      <rect x={14} y={160} width={155} height={58} rx={6} fill={`rgba(${rgb},0.06)`} stroke={`rgba(${rgb},0.25)`} strokeWidth={1} />
      <text x={92} y={177} textAnchor="middle" fontSize={10} fontWeight={700} fill={color}>CF = (n, LS, SS, LST, SST)</text>
      <text x={92} y={192} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">n=5  LS=Σxᵢ  SS=Σxᵢ²</text>
      <text x={92} y={207} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">LST=Σtᵢ  SST=Σtᵢ²</text>

      {/* Micro-cluster 2 */}
      <circle cx={340} cy={90} r={38} fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth={1.8} />
      <circle cx={340} cy={90} r={4} fill={color} />
      {[[325,80],[355,82],[338,105],[350,98]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={3} fill={`rgba(${rgb},0.6)`} />
      ))}

      {/* Micro-cluster 3 */}
      <circle cx={490} cy={130} r={42} fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth={1.8} />
      <circle cx={490} cy={130} r={4} fill={color} />
      {[[470,120],[505,118],[485,148],[500,140],[475,135]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={3} fill={`rgba(${rgb},0.6)`} />
      ))}

      {/* Snapshot pyramid */}
      <rect x={570} y={40} width={100} height={18} rx={3} fill={`rgba(${rgb},0.25)`} stroke={color} strokeWidth={1} />
      <text x={620} y={53} textAnchor="middle" fontSize={9} fill={color}>Snapshot t₃ (recente)</text>
      <rect x={580} y={64} width={80} height={16} rx={3} fill={`rgba(${rgb},0.15)`} stroke={color} strokeWidth={1} />
      <text x={620} y={76} textAnchor="middle" fontSize={9} fill={color}>Snapshot t₂</text>
      <rect x={592} y={86} width={56} height={14} rx={3} fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth={1} />
      <text x={620} y={97} textAnchor="middle" fontSize={9} fill={color}>Snapshot t₁</text>
      <text x={620} y={116} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Pirâmide</text>
      <text x={620} y={128} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">de snapshots</text>

      {/* Labels */}
      <text x={140} y={22} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-secondary)">Micro-clusters (online)</text>
      <text x={620} y={22} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-secondary)">Histórico (offline)</text>
    </svg>
  );
}

function SvgDenStream() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      {/* Potential micro-clusters — bright */}
      <circle cx={150} cy={100} r={38} fill={`rgba(${rgb},0.22)`} stroke={color} strokeWidth={2} />
      <circle cx={150} cy={100} r={5} fill={color} />
      <text x={100} y={155} textAnchor="middle" fontSize={10} fontWeight={700} fill={color}>p-micro-cluster</text>
      <text x={150} y={168} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">peso ≥ β·μ</text>
      {[[132,92],[162,88],[145,112],[158,105]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={3.5} fill={color} opacity={0.7} />
      ))}

      <circle cx={290} cy={90} r={32} fill={`rgba(${rgb},0.18)`} stroke={color} strokeWidth={2} />
      <circle cx={290} cy={90} r={5} fill={color} />
      {[[275,82],[300,78],[285,104],[297,97]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={3.5} fill={color} opacity={0.7} />
      ))}

      {/* Outlier micro-clusters — faded */}
      <circle cx={440} cy={110} r={25} fill={`rgba(${rgb},0.04)`} stroke={`rgba(${rgb},0.3)`} strokeWidth={1.5} strokeDasharray="4,3" />
      <circle cx={440} cy={110} r={4} fill={`rgba(${rgb},0.3)`} />
      <text x={440} y={148} textAnchor="middle" fontSize={10} fill={`rgba(${rgb},0.5)`}>o-micro-cluster</text>
      <text x={440} y={161} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">peso &lt; β·μ</text>
      {[[428,103],[450,100],[435,120]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={3} fill={`rgba(${rgb},0.3)`} />
      ))}

      <circle cx={530} cy={80} r={20} fill={`rgba(${rgb},0.03)`} stroke={`rgba(${rgb},0.25)`} strokeWidth={1.5} strokeDasharray="4,3" />
      <circle cx={530} cy={80} r={4} fill={`rgba(${rgb},0.25)`} />
      {[[520,74],[538,72],[526,90]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={2.5} fill={`rgba(${rgb},0.25)`} />
      ))}

      {/* Fading arrow */}
      <line x1={380} y1={60} x2={600} y2={60} stroke="var(--text-secondary)" strokeWidth={1} strokeDasharray="3,2" />
      <polygon points="600,55 610,60 600,65" fill="var(--text-secondary)" />
      <text x={490} y={50} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">decaimento temporal f(Δt) = 2^(−λΔt)</text>

      {/* DBSCAN macro cluster encompassing p-micro-clusters */}
      <ellipse cx={218} cy={96} rx={115} ry={65} fill="none" stroke={color} strokeWidth={2} strokeDasharray="6,4" opacity={0.5} />
      <text x={218} y={196} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Macro-cluster DBSCAN (offline)</text>
    </svg>
  );
}

function SvgStreamKM() {
  return (
    <svg viewBox="0 0 700 180" width="100%" style={{ display: 'block' }}>
      {/* 1000 stream points cloud */}
      {Array.from({length:28},(_,i)=>{
        const x = 30 + (i % 7)*18 + Math.sin(i*1.7)*5;
        const y = 55 + Math.floor(i/7)*22 + Math.cos(i*2.3)*4;
        return <circle key={i} cx={x} cy={y} r={3} fill={`rgba(${rgb},0.4)`} />;
      })}
      <text x={85} y={168} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">1000 pontos stream</text>
      <rect x={10} y={38} width={150} height={120} rx={6} fill="none" stroke={`rgba(${rgb},0.2)`} strokeWidth={1} />

      {/* Arrow 1 */}
      <line x1={165} y1={98} x2={215} y2={98} stroke={color} strokeWidth={2} />
      <polygon points="215,93 225,98 215,103" fill={color} />
      <text x={195} y={88} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">compressão</text>

      {/* Coreset box */}
      <rect x={228} y={58} width={150} height={78} rx={6} fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth={1.5} />
      <text x={303} y={82} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Coreset</text>
      {[[255,100],[275,108],[295,95],[315,105],[335,100],[258,118],[300,120],[330,115]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={5} fill={color} opacity={0.6} />
      ))}
      <text x={303} y={155} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">50 pontos ponderados</text>

      {/* Arrow 2 */}
      <line x1={382} y1={98} x2={432} y2={98} stroke={color} strokeWidth={2} />
      <polygon points="432,93 442,98 432,103" fill={color} />
      <text x={412} y={88} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">k-means++</text>

      {/* Final clusters */}
      <circle cx={500} cy={88} r={32} fill={`rgba(${rgb},0.12)`} stroke={color} strokeWidth={1.8} />
      <circle cx={500} cy={88} r={5} fill={color} />
      <circle cx={570} cy={112} r={28} fill={`rgba(${rgb},0.1)`} stroke={color} strokeWidth={1.8} />
      <circle cx={570} cy={112} r={5} fill={color} />
      <circle cx={638} cy={78} r={22} fill={`rgba(${rgb},0.09)`} stroke={color} strokeWidth={1.8} />
      <circle cx={638} cy={78} r={5} fill={color} />
      <text x={582} y={168} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">k=3 macro-clusters</text>
    </svg>
  );
}

function SvgPrequential() {
  const pts = [
    [0,120],[40,105],[80,90],[120,80],[160,95],[200,70],[240,60],[280,75],[320,55],[360,48],[400,52],[440,42],[480,38]
  ];
  const ptsStr = pts.map(([x,y])=>`${x+50},${y+20}`).join(' ');
  return (
    <svg viewBox="0 0 600 180" width="100%" style={{ display: 'block' }}>
      {/* Axes */}
      <line x1={50} y1={20} x2={50} y2={155} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={50} y1={155} x2={545} y2={155} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={22} y={90} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" transform="rotate(-90,22,90)">Acurácia</text>
      <text x={295} y={175} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Tempo (instâncias)</text>
      {/* Grid lines */}
      {[40,70,100,130].map((y,i)=>(
        <line key={i} x1={50} y1={y+20} x2={545} y2={y+20} stroke="var(--text-secondary)" strokeWidth={0.8} />
      ))}
      {/* Accuracy curve */}
      <polyline points={ptsStr} fill="none" stroke={color} strokeWidth={2.5} />
      {/* Fading window shading */}
      <defs>
        <linearGradient id="fadeWin" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`rgba(${rgb},0)`} />
          <stop offset="100%" stopColor={`rgba(${rgb},0.18)`} />
        </linearGradient>
      </defs>
      <rect x={350} y={20} width={195} height={135} rx={4} fill="url(#fadeWin)" />
      <text x={447} y={40} textAnchor="middle" fontSize={9} fill={color}>janela deslizante</text>
      {/* Points on curve */}
      {pts.map(([x,y],i)=>(
        <circle key={i} cx={x+50} cy={y+20} r={3.5} fill={color} opacity={0.8} />
      ))}
      <text x={295} y={16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-secondary)">Acurácia Prequencial com Fading Window</text>
    </svg>
  );
}

function SvgMOAArch() {
  const boxes = [
    { x: 20,  y: 80,  w: 110, label: 'Geradores\nde Stream', sub: 'RBF, Hyperplane\nAGRAWAL' },
    { x: 190, y: 60,  w: 120, label: 'Classificadores', sub: 'VFDT, ARF\nOzaBagging' },
    { x: 190, y: 130, w: 120, label: 'Clusterers', sub: 'CluStream\nDenStream' },
    { x: 380, y: 80,  w: 110, label: 'Avaliadores', sub: 'Prequential\nHoldout' },
    { x: 540, y: 80,  w: 110, label: 'Resultados', sub: 'Métricas\nVisualizações' },
  ];

  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: 'block' }}>
      {/* Stream generators */}
      <rect x={20} y={65} width={120} height={90} rx={8} fill={`rgba(${rgb},0.1)`} stroke={color} strokeWidth={1.5} />
      <text x={80} y={90} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Geradores</text>
      <text x={80} y={106} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">RBF / Hyperplane</text>
      <text x={80} y={119} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">AGRAWAL / SEA</text>
      <text x={80} y={132} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">RandomTree</text>

      {/* Arrow */}
      <line x1={142} y1={110} x2={172} y2={110} stroke={color} strokeWidth={2} />
      <polygon points="172,105 182,110 172,115" fill={color} />

      {/* Learners */}
      <rect x={184} y={45} width={120} height={58} rx={8} fill={`rgba(${rgb},0.1)`} stroke={color} strokeWidth={1.5} />
      <text x={244} y={68} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Classificadores</text>
      <text x={244} y={84} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">VFDT · ARF · NB</text>
      <text x={244} y={97} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">OzaBagging · ADWIN</text>

      <rect x={184} y={118} width={120} height={50} rx={8} fill={`rgba(${rgb},0.1)`} stroke={color} strokeWidth={1.5} />
      <text x={244} y={140} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Clusterers</text>
      <text x={244} y={156} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">CluStream · DenStream</text>

      {/* Arrow */}
      <line x1={306} y1={110} x2={336} y2={110} stroke={color} strokeWidth={2} />
      <polygon points="336,105 346,110 336,115" fill={color} />

      {/* Evaluators */}
      <rect x={348} y={65} width={120} height={90} rx={8} fill={`rgba(${rgb},0.1)`} stroke={color} strokeWidth={1.5} />
      <text x={408} y={90} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Avaliadores</text>
      <text x={408} y={106} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Prequential</text>
      <text x={408} y={119} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Interleaved T-T</text>
      <text x={408} y={132} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Holdout</text>

      {/* Arrow */}
      <line x1={470} y1={110} x2={500} y2={110} stroke={color} strokeWidth={2} />
      <polygon points="500,105 510,110 500,115" fill={color} />

      {/* Results */}
      <rect x={512} y={65} width={120} height={90} rx={8} fill={`rgba(${rgb},0.08)`} stroke={color} strokeWidth={1.5} strokeDasharray="5,3" />
      <text x={572} y={90} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Resultados</text>
      <text x={572} y={106} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Métricas (κ, acc)</text>
      <text x={572} y={119} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Tabelas comparativas</text>
      <text x={572} y={132} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Visualizações</text>

      <text x={350} y={200} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">MOA — Massive Online Analysis (Java framework)</text>
    </svg>
  );
}

function SvgAnomalyStream() {
  const scores = [18,22,20,25,19,21,70,24,18,22,80,21,20,23,19,75,22,21];
  const threshold = 45;
  const w = 600, h = 150, pad = 50, step = (w - pad * 2) / (scores.length - 1);
  return (
    <svg viewBox={`0 0 ${w} ${h + 40}`} width="100%" style={{ display: 'block' }}>
      {/* Axes */}
      <line x1={pad} y1={20} x2={pad} y2={h} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <line x1={pad} y1={h} x2={w - 10} y2={h} stroke="var(--text-secondary)" strokeWidth={1.5} />
      <text x={14} y={h / 2} textAnchor="middle" fontSize={10} fill="var(--text-secondary)" transform={`rotate(-90,14,${h/2})`}>Score</text>
      <text x={w / 2} y={h + 30} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Tempo</text>
      {/* Threshold line */}
      {(() => {
        const ty = h - (threshold / 100) * (h - 30);
        return (
          <>
            <line x1={pad} y1={ty} x2={w - 10} y2={ty} stroke="#f97316" strokeWidth={1.5} strokeDasharray="6,3" />
            <text x={w - 8} y={ty - 4} textAnchor="end" fontSize={9} fill="#f97316">limiar</text>
          </>
        );
      })()}
      {/* Score bars */}
      {scores.map((s, i) => {
        const x = pad + i * step;
        const barH = (s / 100) * (h - 30);
        const y = h - barH;
        const isAnomaly = s > threshold;
        return (
          <g key={i}>
            <rect x={x - 8} y={y} width={16} height={barH} rx={2}
              fill={isAnomaly ? 'rgba(249,115,22,0.10)' : `rgba(${rgb},0.5)`}
              stroke={isAnomaly ? '#f97316' : color}
              strokeWidth={1} />
            {isAnomaly && (
              <text x={x} y={y - 6} textAnchor="middle" fontSize={10} fill="#f97316">!</text>
            )}
          </g>
        );
      })}
      <text x={w / 2} y={14} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-secondary)">Scores de Anomalia ao Longo do Tempo</text>
    </svg>
  );
}

/* ─── Main component ──────────────────────────────────────────────── */

export default function DSM5() {
  return (
    <div style={S.page}>
      <Link to="/dsm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Stream Mining</Link>

      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>Clustering e Avaliação em Streams</h1>
      <p style={S.lead}>
        O clustering em streams enfrenta o desafio fundamental de que os dados chegam continuamente, os clusters
        evoluem ao longo do tempo, e não é possível armazenar todos os pontos em memória. A arquitectura dominante
        é a abordagem em dois níveis — micro-clustering online (resumos compactos e incrementais) combinado com
        macro-clustering offline (agrupamento final dos resumos). Este módulo cobre os três principais algoritmos,
        as métricas de avaliação específicas para streams, o framework MOA e detecção de anomalias.
      </p>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Clustering em Streams — Desafios</h2>
        <p style={S.p}>
          O clustering tradicional (k-means, DBSCAN) pressupõe acesso completo aos dados. Em streams, os dados
          chegam um a um (ou em mini-batches), os clusters podem aparecer, desaparecer ou mover-se ao longo do
          tempo, e a memória disponível é constante independentemente do volume de dados recebido.
        </p>
        <div style={S.highlight}>
          <strong>Principais desafios de clustering em streams:</strong>
          <ul style={S.ul}>
            <li><strong>Evolução temporal:</strong> clusters podem surgir, fundir-se, dividir-se ou desaparecer</li>
            <li><strong>Restrição de memória:</strong> impossível guardar todos os pontos — necessário resumo compacto</li>
            <li><strong>Processamento online:</strong> cada instância deve ser processada em tempo O(1) ou O(log n)</li>
            <li><strong>Sem acesso futuro:</strong> cada ponto é processado uma vez e descartado (one-pass)</li>
            <li><strong>Micro-clusters:</strong> estruturas de sumário que capturam estatísticas suficientes para reconstruir clusters</li>
          </ul>
        </div>
        <p style={S.p}>
          A solução standard é a <strong>arquitectura em dois níveis</strong>: um componente online que mantém
          micro-clusters (estruturas de sumário de tamanho fixo) e um componente offline que, quando solicitado,
          aplica um algoritmo de clustering clássico sobre esses micro-clusters para produzir os macro-clusters finais.
        </p>
        <div style={S.diagram}>
          <SvgStreamMicroMacro />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            Arquitectura dois níveis: stream de pontos → micro-clustering online → macro-clustering offline
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. CluStream</h2>
        <p style={S.p}>
          O <strong>CluStream</strong> (Aggarwal et al., 2003) introduziu a arquitectura online/offline que é a
          base de todos os algoritmos de stream clustering modernos. O componente online mantém um conjunto de
          <em> q</em> micro-clusters, cada um representado por um vector de estatísticas suficientes derivado
          das Clustering Features do algoritmo BIRCH.
        </p>
        <div style={S.highlight}>
          <strong>Micro-cluster — Estatísticas Suficientes:</strong><br /><br />
          Cada micro-cluster é representado por CF = (n, LS, SS, LST, SST) onde:
          <ul style={S.ul}>
            <li><strong>n:</strong> número de pontos no micro-cluster</li>
            <li><strong>LS:</strong> soma linear dos pontos — vector d-dimensional (linear sum)</li>
            <li><strong>SS:</strong> soma dos quadrados — vector d-dimensional (squared sum)</li>
            <li><strong>LST:</strong> soma dos timestamps dos pontos (linear sum of timestamps)</li>
            <li><strong>SST:</strong> soma dos quadrados dos timestamps (squared sum of timestamps)</li>
          </ul>
          A partir do CF é possível calcular centróide, raio, recência e desvio temporal sem guardar os pontos individuais.
        </div>
        <div style={S.math}>
          <BlockMath math={"\\bar{x} = \\frac{LS}{n}, \\quad \\sigma^2 = \\frac{SS}{n} - \\left(\\frac{LS}{n}\\right)^2"} />
        </div>
        <p style={S.p}>
          O processo online do CluStream é simples e eficiente: quando uma nova instância chega, é atribuída ao
          micro-cluster mais próximo (se a distância for inferior ao raio do micro-cluster). Se nenhum micro-cluster
          é suficientemente próximo, cria-se um novo. Se o limite <em>q</em> de micro-clusters é atingido, o
          micro-cluster mais antigo (menor valor de LST/n) é removido ou fundido com o seu vizinho mais próximo.
        </p>
        <div style={S.highlight}>
          <strong>Snapshots Piramidais:</strong> o CluStream guarda snapshots do estado completo dos micro-clusters
          em instantes de tempo seguindo uma estrutura piramidal — snapshots muito recentes são guardados com
          frequência máxima, snapshots mais antigos são guardados com frequência progressivamente menor.
          Isto permite análise em diferentes horizontes temporais com custo de armazenamento O(log t).
        </div>
        <div style={S.diagram}>
          <SvgCluStream />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            Micro-clusters com centróide, raio 2σ e CF anotado; pirâmide de snapshots para análise histórica
          </p>
        </div>
        
        <p style={S.note}>
          O CluStream é o algoritmo de referência para stream clustering centróide. Requer que k seja especificado
          antecipadamente e assume clusters de forma aproximadamente esférica. A pirâmide de snapshots é a sua
          principal contribuição para análise temporal.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. DenStream</h2>
        <p style={S.p}>
          O <strong>DenStream</strong> (Cao et al., 2006) adapta a ideia de clustering baseado em densidade (DBSCAN)
          a streams. Define dois tipos de micro-clusters com base na sua densidade e recência, e aplica uma
          <em> fading function</em> que reduz o peso de pontos antigos exponencialmente.
        </p>
        <div style={S.math}>
          <BlockMath math={"w(t) = \\sum_{t_i \\leq t} f(t - t_i), \\quad f(\\Delta t) = 2^{-\\lambda \\Delta t}"} />
        </div>
        <p style={S.p}>
          Onde λ é o factor de esquecimento (decay factor). Um valor alto de λ faz com que pontos antigos
          percam relevância rapidamente, tornando o modelo mais reactivo a alterações recentes no stream.
        </p>
        <div style={S.highlight}>
          <strong>Tipos de micro-clusters no DenStream:</strong>
          <ul style={S.ul}>
            <li><strong>p-micro-clusters (potential):</strong> alta densidade, peso w ≥ β·μ; fazem parte do modelo de clustering activo</li>
            <li><strong>o-micro-clusters (outlier):</strong> baixa densidade, peso w &lt; β·μ; candidatos a ruído ou novos clusters em formação</li>
          </ul>
          Um o-micro-cluster que acumule pontos suficientes é promovido a p-micro-cluster; um p-micro-cluster
          que perca peso por falta de instâncias recentes é degradado a o-micro-cluster.
        </div>
        <div style={S.diagram}>
          <SvgDenStream />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            p-micro-clusters (alta densidade, cor intensa) vs o-micro-clusters (baixa densidade, desbotados);
            macro-cluster DBSCAN engloba p-micro-clusters próximos
          </p>
        </div>
        
        <p style={S.note}>
          O DenStream é preferível ao CluStream quando o número de clusters não é conhecido, ou quando os clusters
          têm formas irregulares não esféricas. O parâmetro λ controla a sensibilidade a alterações — valores
          maiores tornam o modelo mais adaptativo mas menos estável.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. StreamKM++</h2>
        <p style={S.p}>
          O <strong>StreamKM++</strong> (Ackermann et al., 2012) adapta o k-means++ a streams usando a técnica
          de <strong>coreset sampling</strong> — uma amostra compacta ponderada que aproxima o conjunto completo
          de dados para clustering com garantias teóricas de qualidade (aproximação (1+ε)).
        </p>
        <div style={S.highlight}>
          <strong>Coreset:</strong> um coreset C de tamanho m é um subconjunto ponderado dos dados tal que,
          para qualquer conjunto de k centróides, o custo de clustering sobre C difere do custo sobre os dados
          originais por no máximo um factor (1 + ε):
          <br /><br />
          cost(C, k-means) ≈ (1 + ε) · cost(D, k-means)
          <br /><br />
          O tamanho do coreset m é fixo e independente do número de instâncias processadas — daí o comportamento
          one-pass com memória limitada.
        </div>
        <p style={S.p}>
          O StreamKM++ processa o stream em chunks. Para cada chunk, aplica k-means++ para construir um
          mini-coreset. Esses mini-coresets são acumulados e, quando o buffer atinge o limite L, são comprimidos
          novamente via k-means++. O resultado final é um coreset compacto sobre o qual se aplica o clustering definitivo.
        </p>
        <div style={S.diagram}>
          <SvgStreamKM />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            Pipeline de compressão: 1000 pontos stream → 50 pontos ponderados no coreset → k-means++ com k=3
          </p>
        </div>
        
        <p style={S.p}>
          A inicialização <strong>k-means++</strong> selecciona centróides iniciais com probabilidade proporcional
          à distância quadrada ao centróide mais próximo já escolhido — reduz o custo esperado do clustering em
          O(log k) face à inicialização aleatória e é fundamental para a qualidade do coreset.
        </p>
        <p style={S.note}>
          O StreamKM++ é o mais simples dos três algoritmos e tem garantias teóricas de aproximação.
          É adequado quando k é conhecido e os clusters têm forma aproximadamente esférica. Não tem mecanismo
          nativo para lidar com drift — em caso de concept drift acentuado, é necessário reinicializar o coreset.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Métricas de Avaliação em Streams</h2>
        <p style={S.p}>
          Avaliar classificadores (e clusterers) em streams é fundamentalmente diferente do cenário batch:
          não existe ground truth disponível online na maioria dos casos reais, os dados chegam continuamente
          e a distribuição pode mudar. As métricas de avaliação em streams têm de ser calculadas de forma
          incremental e eficiente.
        </p>
        <div style={S.highlight}>
          <strong>Acurácia Prequential (test-then-train):</strong> cada instância é primeiro usada para teste
          (mede-se o erro) e depois incorporada no treino. Permite medir a evolução do desempenho ao longo do
          tempo sem necessidade de um conjunto de teste separado. Combinado com uma <em>fading window</em>
          (peso exponencial decrescente com o tempo), dá mais importância às instâncias recentes.
        </div>
        <div style={S.diagram}>
          <SvgPrequential />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            Curva de acurácia prequencial: o modelo melhora gradualmente; a janela deslizante destaca o desempenho recente
          </p>
        </div>
        <p style={S.p}>
          O <strong>Kappa Statistic</strong> mede o desempenho do classificador em comparação com um classificador
          aleatório (que escolhe classes com base na distribuição marginal das classes):
        </p>
        <div style={S.math}>
          <BlockMath math={"\\kappa = \\frac{p_o - p_e}{1 - p_e}"} />
        </div>
        <p style={S.p}>
          Onde p₀ é a acurácia observada e pₑ é a acurácia esperada de um classificador aleatório com a mesma
          distribuição de classes. κ = 1 é perfeito; κ = 0 equivale ao classificador aleatório; κ &lt; 0 é
          pior que aleatório.
        </p>
        <p style={S.p}>
          O <strong>Kappa-M</strong> compara com um classificador que prevê sempre a classe maioritária —
          uma baseline mais exigente em datasets desbalanceados:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\kappa_m = \\frac{p_o - p_{\\text{majority}}}{1 - p_{\\text{majority}}}"} />
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Baseline de comparação</th>
              <th style={S.th}>Ideal</th>
              <th style={S.th}>Uso em streams</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Acurácia Prequential</strong></td>
              <td style={S.td}>—</td>
              <td style={S.td}>1.0</td>
              <td style={S.td}>Standard; monitorização contínua</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Kappa (κ)</strong></td>
              <td style={S.td}>Classificador aleatório</td>
              <td style={S.td}>1.0</td>
              <td style={S.td}>Dados balanceados</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Kappa-M (κₘ)</strong></td>
              <td style={S.td}>Classe maioritária</td>
              <td style={S.td}>1.0</td>
              <td style={S.td}>Dados desbalanceados</td>
            </tr>
            <tr>
              <td style={S.td}><strong>CMM</strong></td>
              <td style={S.td}>—</td>
              <td style={S.td}>1.0</td>
              <td style={S.td}>Clustering (MOA)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Purity / Rand</strong></td>
              <td style={S.td}>Ground truth</td>
              <td style={S.td}>1.0</td>
              <td style={S.td}>Datasets sintéticos com labels</td>
            </tr>
          </tbody>
        </table>
        <p style={S.note}>
          Em streams reais, κ e κₘ são preferíveis à acurácia bruta porque são invariantes à distribuição de
          classes e permitem comparações significativas entre domínios. O MOA reporta todas estas métricas
          automaticamente na avaliação prequential.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. MOA — Massive Online Analysis</h2>
        <p style={S.p}>
          O <strong>MOA</strong> (Bifet et al., 2010) é o framework Java de referência para data stream mining.
          Providencia implementações padronizadas de todos os algoritmos principais, geradores de streams
          sintéticos, avaliadores e ferramentas de visualização interactiva. É o benchmark padrão da comunidade
          para comparação de algoritmos de stream learning.
        </p>
        <div style={S.diagram}>
          <SvgMOAArch />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            Arquitectura do MOA: geradores de stream → classificadores/clusterers → avaliadores → resultados
          </p>
        </div>
        <div style={S.highlight}>
          <strong>Algoritmos incluídos no MOA:</strong>
          <ul style={S.ul}>
            <li><strong>Classificação:</strong> VFDT (Hoeffding Tree), ARF (Adaptive Random Forest), Naïve Bayes Online, OzaBagging, OzaBoosting, SAMkNN</li>
            <li><strong>Detecção de drift:</strong> ADWIN, DDM, EDDM, Page-Hinkley, HDDM</li>
            <li><strong>Clustering:</strong> CluStream, DenStream, StreamKM++, k-Means (incremental)</li>
            <li><strong>Geradores:</strong> RandomRBFGeneratorEvents, HyperplaneGenerator, SEA, AGRAWAL, RandomTree</li>
          </ul>
        </div>
        <p style={S.p}>
          O equivalente Python mais moderno é o <strong>River</strong> (fusão do MOA Python com Creme),
          que mantém a mesma filosofia de API incremental mas com integração nativa no ecossistema Python/scikit-learn:
        </p>
        
        
        <p style={S.note}>
          O MOA permite comparar algoritmos de clustering graficamente na GUI: os micro-clusters são visualizados
          como círculos proporcionais ao peso, os macro-clusters como regiões coloridas sobrepostas.
          O RandomRBFGeneratorEvents é o generator de referência — cria clusters gaussianos que se movem,
          fundem e dividem de forma controlada, com parâmetros configuráveis de velocidade e número de eventos.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Anomaly Detection em Streams</h2>
        <p style={S.p}>
          A detecção de anomalias em streams requer algoritmos online que atribuam um score de anomalia
          a cada instância sem acesso ao conjunto completo de dados. Os dois principais paradigmas são
          os <strong>Half-Space Trees</strong> (versão online das Isolation Forests) e o <strong>Streaming LODA</strong>
          (Lightweight Online Detector of Anomalies).
        </p>
        <div style={S.highlight}>
          <strong>Half-Space Trees (HS-Trees):</strong>
          <ul style={S.ul}>
            <li>Constrói aleatoriamente árvores binárias com partições axis-aligned (escolha aleatória de eixo e ponto de corte)</li>
            <li>O score de anomalia de uma instância é o inverso da <em>massa esperada</em> (número de pontos que caem na mesma folha) sob o modelo de distribuição nula</li>
            <li>Anomalias são instâncias que caem em folhas com massa baixa — regiões esparsas do espaço de features</li>
            <li>Actualização incremental: mantém duas janelas (referência e actual) para detectar novidades sem treino completo</li>
          </ul>
        </div>
        <div style={S.highlight}>
          <strong>Streaming LODA:</strong>
          <ul style={S.ul}>
            <li>Projecta os dados em direcções aleatórias (histogramas 1D) e calcula a log-likelihood de cada projecção</li>
            <li>Score de anomalia = média das log-likelihoods negativas das projecções</li>
            <li>Histogramas são actualizados incrementalmente; adaptação de threshold por percentil deslizante</li>
            <li>Eficiente: O(t) por instância onde t é o número de árvores/projecções</li>
          </ul>
        </div>
        <div style={S.diagram}>
          <SvgAnomalyStream />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            Scores de anomalia ao longo do tempo: barras acima do limiar (linha vermelha) são sinalizadas como anomalias (!)
          </p>
        </div>
        
        <p style={S.p}>
          A adaptação do threshold é crítica em streams: um threshold fixo pode gerar muitos falsos positivos
          quando a distribuição dos dados muda. A abordagem recomendada é usar um <strong>percentil deslizante</strong>
          (e.g., 99.5º percentil da janela de scores recentes) como threshold adaptativo.
        </p>
        <p style={S.note}>
          Em streams com concept drift, os scores de anomalia podem aumentar artificialmente durante períodos de
          transição mesmo para instâncias normais. É recomendável usar ADWIN para detectar mudanças no nível
          médio dos scores e reinicializar o modelo quando necessário.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 8 — Síntese ── */}
              <h2 style={{ ...S.h2, marginBottom: '1rem' }}>8. Síntese do Módulo e do Curso</h2>
<div style={{ ...S.highlight, borderRadius: 12, padding: '1.5rem 1.75rem' }}>
        <p style={{ ...S.p, marginBottom: '0.75rem' }}>Pontos-chave por tipo de problema em Data Stream Mining:</p>
        <ul style={S.ul}>
          <li><strong>Classificação online:</strong> VFDT (Hoeffding Tree) para dados estacionários; ARF ou OzaBagging com ADWIN para streams com drift</li>
          <li><strong>Detecção de drift:</strong> ADWIN (detecta drift em janelas deslizantes adaptativas); DDM/EDDM para detecção baseada em taxa de erro</li>
          <li><strong>Clustering (k conhecido, esférico):</strong> CluStream ou StreamKM++ — arquitectura online/offline com snapshots</li>
          <li><strong>Clustering (k desconhecido, forma arbitrária):</strong> DenStream — densidade + fading function + DBSCAN offline</li>
          <li><strong>Anomaly detection:</strong> Half-Space Trees (eficiente, adaptativo); Streaming LODA (projecções aleatórias)</li>
          <li><strong>Avaliação:</strong> acurácia prequential + κ ou κₘ para classificação; CMM + Silhouette para clustering</li>
          <li><strong>Framework:</strong> MOA (Java, benchmark padrão) ou River (Python, produção)</li>
        </ul>

        <br />
        <p style={{ ...S.p, marginBottom: '0.75rem', fontWeight: 600 }}>Algoritmos recomendados por cenário:</p>
        <table style={{ ...S.table, marginBottom: '1rem' }}>
          <thead>
            <tr>
              <th style={S.th}>Problema</th>
              <th style={S.th}>Algoritmo Recomendado</th>
              <th style={S.th}>Framework</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Classificação sem drift</td>
              <td style={S.td}>Hoeffding Tree (VFDT)</td>
              <td style={S.td}>MOA / River</td>
            </tr>
            <tr>
              <td style={S.td}>Classificação com drift</td>
              <td style={S.td}>ARF + ADWIN</td>
              <td style={S.td}>MOA / River</td>
            </tr>
            <tr>
              <td style={S.td}>Detecção de drift</td>
              <td style={S.td}>ADWIN</td>
              <td style={S.td}>MOA / River / scikit-multiflow</td>
            </tr>
            <tr>
              <td style={S.td}>Clustering (k fixo)</td>
              <td style={S.td}>CluStream / StreamKM++</td>
              <td style={S.td}>MOA / River</td>
            </tr>
            <tr>
              <td style={S.td}>Clustering (k desconhecido)</td>
              <td style={S.td}>DenStream</td>
              <td style={S.td}>MOA / River</td>
            </tr>
            <tr>
              <td style={S.td}>Detecção de anomalias</td>
              <td style={S.td}>Half-Space Trees</td>
              <td style={S.td}>River</td>
            </tr>
            <tr>
              <td style={S.td}>Avaliação online</td>
              <td style={S.td}>Prequential + κ / κₘ</td>
              <td style={S.td}>MOA / River</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          <strong>Data Stream Mining</strong> é o backbone de qualquer sistema de ML em produção que processa
          dados em tempo real — desde motores de recomendação a sistemas de detecção de fraude, passando por
          monitorização industrial e análise de redes. Os princípios abordados neste curso (one-pass learning,
          micro/macro clustering, drift detection, avaliação prequential) são os fundamentos que permitem
          escalar modelos de machine learning para volumes e velocidades que tornam o batch learning impraticável.
        </div>
      </div>
    </div>
  );
}
