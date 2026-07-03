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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: Classification vs Clustering ===
const ClassVsClusterDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Classification vs. Clustering — visualmente</p>
    <svg viewBox="0 0 560 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Left: classification - colored by known label, clean boundary */}
      <text x="140" y="18" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">CLASSIFICATION (labels conhecidas)</text>
      <rect x="20" y="30" width="240" height="150" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="140" y1="35" x2="140" y2="175" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      {[
        [50, 60, '#f97316'], [80, 110, '#f97316'], [60, 150, '#f97316'], [100, 80, '#f97316'], [45, 130, '#f97316'],
        [190, 70, '#f97316'], [220, 120, '#f97316'], [200, 160, '#f97316'], [165, 90, '#f97316'], [235, 50, '#f97316'],
      ].map(([cx, cy, c], i) => <circle key={i} cx={cx} cy={cy} r="5" fill={c} />)}
      <text x="80" y="195" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Classe A (label)</text>
      <text x="205" y="195" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">Classe B (label)</text>

      {/* Right: clustering - no labels, groups emerge from proximity */}
      <text x="420" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">CLUSTERING (sem labels)</text>
      <rect x="300" y="30" width="240" height="150" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      {[
        [340, 70], [365, 95], [330, 110], [355, 60], [380, 85],
        [470, 60], [500, 90], [480, 130], [520, 70], [450, 100],
        [400, 150], [430, 165], [370, 160], [410, 130],
      ].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="5" fill="var(--text-secondary)" />)}
      <ellipse cx="356" cy="84" rx="42" ry="38" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <ellipse cx="485" cy="90" rx="48" ry="42" fill="none" stroke="rgba(249,115,22,0.9)" strokeWidth="1.5" strokeDasharray="4,3" />
      <ellipse cx="403" cy="151" rx="46" ry="28" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="420" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">grupos descobertos por proximidade — sem rótulos prévios</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Em classificação, cada ponto já tem uma cor (label) <em>antes</em> de o algoritmo correr — o objetivo é
      aprender a fronteira que separa as cores. Em clustering, todos os pontos começam cinzentos — o algoritmo
      tem de descobrir, apenas a partir da posição relativa dos pontos, que agrupamentos fazem sentido. Não há
      "resposta certa" pré-definida — apenas estrutura geométrica nos dados.
    </p>
  </div>
);

// === Diagram: Cohort retention curves ===
const CohortCurvesDiagram = () => {
  const w = 480, h = 220, pad = 40;
  const months = [0, 1, 2, 3, 4, 5];
  const xToPx = (m) => pad + (m / 5) * (w - 2 * pad);
  const yToPx = (pct) => h - pad - (pct / 100) * (h - 2 * pad);

  const cohorts = [
    { label: 'Jan', c: '#f97316', vals: [100, 65, 48, 38, 32, 28] },
    { label: 'Fev', c: '#fb923c', vals: [100, 70, 52, 44, 39, null] },
    { label: 'Mar', c: '#fdba74', vals: [100, 68, 55, 50, null, null] },
  ];

  const makePath = (vals) => {
    let d = '';
    vals.forEach((v, i) => {
      if (v == null) return;
      const x = xToPx(months[i]);
      const y = yToPx(v);
      d += (d === '' ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
    });
    return d;
  };

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curvas de Retenção por Cohort</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={w / 2} y={h - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="11">Mês desde aquisição →</text>
        <text x="14" y={h / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="11" transform={`rotate(-90 14 ${h / 2})`}>Retenção (%)</text>
        {months.map(m => (
          <text key={m} x={xToPx(m)} y={h - pad + 16} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{m}</text>
        ))}
        {[0, 25, 50, 75, 100].map(p => (
          <text key={p} x={pad - 8} y={yToPx(p) + 3} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{p}</text>
        ))}
        {cohorts.map(({ label, c, vals }, ci) => (
          <g key={ci}>
            <path d={makePath(vals)} fill="none" stroke={c} strokeWidth="2.5" />
            {vals.map((v, i) => v != null && <circle key={i} cx={xToPx(months[i])} cy={yToPx(v)} r="3.5" fill={c} />)}
            <text x={w - pad - 5} y={yToPx(vals.filter(v => v != null).slice(-1)[0]) - 6} textAnchor="end" fill={c} fontSize="10" fontWeight="700">{label}</text>
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cada linha representa a evolução de um cohort ao longo do tempo. Cohorts mais recentes (Mar) têm menos
        pontos — ainda não atingiram os meses futuros. Comparar as curvas permite responder a perguntas como:
        "a retenção está a melhorar ao longo do tempo (cohorts mais recentes retêm melhor)?" ou "existe um
        "cotovelo" a partir do qual a retenção estabiliza (os clientes que sobrevivem ao mês 2 tendem a
        ficar)?"
      </p>
    </div>
  );
};

// === Diagram: RFM cube ===
const RFMCubeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Cubo RFM — 3 dimensões × 4 quartis = 64 células</p>
    <svg viewBox="0 0 420 260" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* isometric cube — scaled down to fit */}
      <g transform="translate(80,20) scale(0.7)">
        <polygon points="0,80 120,20 240,80 120,140" fill="none" stroke="var(--text-secondary)" strokeWidth="1.4" />
        <polygon points="0,80 120,140 120,260 0,200" fill="none" stroke="var(--text-secondary)" strokeWidth="1.4" />
        <polygon points="120,140 240,80 240,200 120,260" fill="none" stroke="var(--text-secondary)" strokeWidth="1.4" />
        {/* highlight one cell */}
        <rect x="50" y="95" width="22" height="22" fill={`${color}40`} stroke={color} strokeWidth="2" transform="skewX(-20)" />
      </g>
      {/* axes labels outside the scaled group */}
      <text x="80" y="38" fill="#f97316" fontSize="11" fontWeight="700">Frequency →</text>
      <text x="220" y="52" fill="#f59e0b" fontSize="11" fontWeight="700">Recency →</text>
      <text x="22" y="150" fill="#fb923c" fontSize="11" fontWeight="700" transform="rotate(-90 22 150)">Monetary →</text>
      <text x="210" y="242" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">cada célula = combinação (R-quartil, F-quartil, M-quartil) → 4×4×4 = 64 segmentos possíveis</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Cada cliente é colocado num quartil (1 a 4) em cada uma das três dimensões — Recency, Frequency,
      Monetary — produzindo um código de três dígitos (ex.: "4-4-4" = melhor quartil nas três dimensões,
      "Champions"). Com 4 quartis por dimensão e 3 dimensões obtemos <InlineMath math="4^3 = 64" /> células
      possíveis, mas na prática agrupam-se várias células adjacentes em segmentos de negócio com nomes
      memoráveis (Champions, Loyal, At Risk, Hibernating, etc.), porque 64 segmentos seria demasiado granular
      para acionar campanhas distintas.
    </p>
  </div>
);

// === Diagram: Euclidean vs Manhattan ===
const DistanceDiagram = () => {
  const A = { x: 60, y: 160, label: 'A (2,1)' };
  const B = { x: 260, y: 40, label: 'B (8,6)' };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Distância Euclidiana vs. Manhattan entre dois pontos</p>
      <svg viewBox="0 0 360 200" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* grid */}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={'v' + i} x1={40 + i * 40} y1="10" x2={40 + i * 40} y2="180" stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.4" />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={'h' + i} x1="40" y1={10 + i * 40} x2="320" y2={10 + i * 40} stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.4" />
        ))}
        {/* Manhattan path (orange, stepped) */}
        <path d={`M${A.x} ${A.y} L${B.x} ${A.y} L${B.x} ${B.y}`} fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6,4" />
        {/* Euclidean path (purple, straight) */}
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={color} strokeWidth="3" />
        {/* points */}
        <circle cx={A.x} cy={A.y} r="6" fill="#f97316" />
        <circle cx={B.x} cy={B.y} r="6" fill="rgba(249,115,22,0.9)" />
        <text x={A.x - 10} y={A.y + 20} fill="#f97316" fontSize="11" fontWeight="700" textAnchor="middle">{A.label}</text>
        <text x={B.x + 20} y={B.y - 10} fill="rgba(249,115,22,0.9)" fontSize="11" fontWeight="700" textAnchor="middle">{B.label}</text>

        <text x={(A.x + B.x) / 2 + 25} y={(A.y + B.y) / 2 - 5} fill={color} fontSize="10" fontWeight="700">Euclidiana</text>
        <text x={(A.x + B.x) / 2 - 10} y={A.y + 18} fill="#f59e0b" fontSize="10" fontWeight="700">Manhattan</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        A distância <strong>euclidiana</strong> (linha contínua) é o caminho mais curto "em linha reta" entre os
        dois pontos — a hipotenusa do triângulo. A distância <strong>Manhattan</strong> (linha tracejada) soma
        os deslocamentos ao longo de cada eixo separadamente — como percorrer um quarteirão de uma cidade
        organizada em grelha, sem atravessar edifícios na diagonal.
      </p>
    </div>
  );
};

// === Diagram: clustering family taxonomy ===
const ClusteringTaxonomyDiagram = () => {
  const families = [
    { label: 'Partitional', sub: 'k-Means,\nk-Medoids', c: '#f97316', x: 20 },
    { label: 'Hierarchical', sub: 'Agglomerative,\nDivisive', c: '#f97316', x: 160 },
    { label: 'Density-based', sub: 'DBSCAN,\nHDBSCAN', c: '#f97316', x: 300 },
    { label: 'Model-based', sub: 'GMM\n(Gaussian Mixtures)', c: '#f97316', x: 440 },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Taxonomia das Famílias de Algoritmos de Clustering</p>
      <svg viewBox="0 0 600 180" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr-dm7" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        <rect x="170" y="10" width="260" height="36" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
        <text x="300" y="33" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Cluster Analysis</text>
        {families.map(({ label, sub, c, x }, i) => (
          <g key={i}>
            <path d={`M300 46 L${x + 70} 75`} stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-dm7)" opacity="0.6" />
            <rect x={x} y="80" width="140" height="65" rx="8" fill={`${c}15`} stroke={c} strokeWidth="1.5" />
            <text x={x + 70} y="102" textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{label}</text>
            {sub.split('\n').map((line, li) => (
              <text key={li} x={x + 70} y={120 + li * 13} textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">{line}</text>
            ))}
          </g>
        ))}
        <text x="300" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">
          cada família será o foco de um módulo dedicado (04 a 06)
        </text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Tal como na aprendizagem supervisionada, não existe um "melhor" algoritmo de clustering — cada família
        assume uma forma diferente para os clusters e é adequada a cenários distintos. Este mapa serve de
        bússola para os próximos módulos.
      </p>
    </div>
  );
};

// === Diagram: Spectral Clustering ===
const SpectralClusteringDiagram = () => {
  // Two crescent shapes — top crescent and bottom crescent
  // Top crescent: points arcing along the top half
  const topCrescent = [
    [110, 60], [130, 48], [150, 44], [170, 48], [190, 60], [205, 76], [198, 94],
    [178, 104], [158, 108], [138, 104], [118, 94], [108, 78],
  ];
  // Bottom crescent: points arcing along the bottom half, interleaved
  const bottomCrescent = [
    [130, 120], [150, 112], [170, 112], [190, 120], [205, 136], [200, 154],
    [180, 164], [160, 168], [140, 164], [120, 154], [115, 138],
  ];

  // k-means centroids (misplaced — splits left/right not top/bottom)
  const kmCentLeft = [128, 108];
  const kmCentRight = [185, 100];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Clustering em formas não-convexas (crescentes interligados)
      </p>
      <svg viewBox="0 0 600 210" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* LEFT PANEL — k-means fails */}
        <text x="155" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">k-Means falha</text>
        <rect x="20" y="24" width="270" height="170" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />

        {/* k-means: wrong coloring — left vs right split */}
        {topCrescent.map(([cx, cy], i) => (
          <circle key={'tl' + i} cx={cx} cy={cy + 20} r="4.5"
            fill={cx < 160 ? '#f97316' : '#f97316'} opacity="0.9" />
        ))}
        {bottomCrescent.map(([cx, cy], i) => (
          <circle key={'bl' + i} cx={cx} cy={cy + 20} r="4.5"
            fill={cx < 160 ? '#f97316' : '#f97316'} opacity="0.9" />
        ))}
        {/* Misplaced centroids */}
        <circle cx={kmCentLeft[0]} cy={kmCentLeft[1] + 20} r="8" fill="#f97316" stroke="#fff" strokeWidth="2" />
        <text x={kmCentLeft[0]} y={kmCentLeft[1] + 24} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">C1</text>
        <circle cx={kmCentRight[0]} cy={kmCentRight[1] + 20} r="8" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
        <text x={kmCentRight[0]} y={kmCentRight[1] + 24} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">C2</text>
        <text x="155" y="207" textAnchor="middle" fill="#f97316" fontSize="9" fontStyle="italic">centróides mal posicionados — corte vertical errado</text>

        {/* RIGHT PANEL — spectral succeeds */}
        <text x="450" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Spectral Clustering acerta</text>
        <rect x="315" y="24" width="270" height="170" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />

        {topCrescent.map(([cx, cy], i) => (
          <circle key={'tr' + i} cx={cx + 295} cy={cy + 20} r="4.5" fill="#f97316" opacity="0.9" />
        ))}
        {bottomCrescent.map(([cx, cy], i) => (
          <circle key={'br' + i} cx={cx + 295} cy={cy + 20} r="4.5" fill="rgba(249,115,22,0.9)" opacity="0.9" />
        ))}
        {/* Dashed outlines showing correct clusters */}
        <ellipse cx="453" cy="93" rx="60" ry="36" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
        <ellipse cx="453" cy="155" rx="55" ry="28" fill="none" stroke="rgba(249,115,22,0.9)" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x="450" y="207" textAnchor="middle" fill="#f97316" fontSize="9" fontStyle="italic">eigenvectors do Laplaciano separam os crescentes corretamente</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        k-Means minimiza a distância aos centróides, assumindo clusters esféricos e compactos — faz um corte
        vertical que parte ambos os crescentes ao meio. Spectral Clustering projeta os pontos no espaço dos
        eigenvectors do Laplaciano do grafo de similaridade, onde os dois crescentes se tornam linearmente
        separáveis, e só então aplica k-Means nesse espaço transformado.
      </p>
    </div>
  );
};

// === Diagram: cohesion vs separation ===
const CohesionSeparationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Bons clusters: alta coesão interna, alta separação externa</p>
    <svg viewBox="0 0 480 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* good clustering */}
      <text x="120" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">BOM</text>
      <rect x="10" y="25" width="220" height="160" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <ellipse cx="65" cy="80" rx="45" ry="40" fill="#f9731615" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" />
      <ellipse cx="170" cy="130" rx="45" ry="40" fill="rgba(249,115,22,0.9)15" stroke="rgba(249,115,22,0.9)" strokeWidth="1.5" strokeDasharray="3,2" />
      {[[50,65],[75,90],[55,95],[80,65],[60,75]].map(([x,y],i) => <circle key={'g1'+i} cx={x} cy={y} r="4" fill="#f97316" />)}
      {[[155,115],[185,145],[160,150],[190,115],[175,130]].map(([x,y],i) => <circle key={'g2'+i} cx={x} cy={y} r="4" fill="rgba(249,115,22,0.9)" />)}
      <text x="120" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">clusters compactos e bem separados</text>

      {/* bad clustering */}
      <text x="365" y="18" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">MAU</text>
      <rect x="250" y="25" width="220" height="160" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <ellipse cx="320" cy="100" rx="55" ry="50" fill="#f9731615" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" />
      <ellipse cx="390" cy="110" rx="55" ry="50" fill="rgba(249,115,22,0.9)15" stroke="rgba(249,115,22,0.9)" strokeWidth="1.5" strokeDasharray="3,2" />
      {[[290,80],[330,120],[300,140],[350,70],[310,110],[340,135]].map(([x,y],i) => <circle key={'b1'+i} cx={x} cy={y} r="4" fill="#f97316" />)}
      {[[400,90],[430,130],[370,100],[410,150],[395,115],[360,125]].map(([x,y],i) => <circle key={'b2'+i} cx={x} cy={y} r="4" fill="rgba(249,115,22,0.9)" />)}
      <text x="365" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">clusters dispersos e sobrepostos</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Intuitivamente, um bom agrupamento tem <strong>coesão</strong> alta — os pontos dentro de cada cluster
      estão próximos entre si — e <strong>separação</strong> alta — os clusters estão afastados uns dos outros.
      No exemplo "MAU", os dois grupos sobrepõem-se: um ponto pode estar mais próximo do centro do cluster
      vizinho do que do seu próprio centro, o que sugere que o número de clusters ou a forma do algoritmo não
      está adequado aos dados.
    </p>
  </div>
);

export default function DM7() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Cluster Analysis — Introdução</h1>
      <p style={S.lead}>
        Clustering é o problema de agrupar instâncias semelhantes entre si <strong>sem usar labels</strong> —
        é a tarefa não-supervisionada por excelência. Antes de mergulharmos nos algoritmos propriamente ditos
        (k-Means, hierárquico, density-based, model-based — módulos 04 a 06), este módulo estabelece as bases:
        a distinção entre clustering e classificação, técnicas exploratórias mais simples (Cohort Analysis,
        segmentação baseada em células/quartis e RFM), as medidas de distância e similaridade que sustentam
        praticamente todos os algoritmos de clustering, um mapa das famílias de algoritmos que vamos estudar,
        e uma primeira noção — ainda informal — de como avaliar a qualidade de um agrupamento sem ter labels
        de referência.
      </p>

      {/* === SECTION 1: Clustering vs Classification === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Clustering vs. Classification</h2>
        <p style={S.p}>
          A diferença fundamental entre clustering e classificação não está no algoritmo em si, mas na
          <strong> natureza do problema</strong>: em classificação, sabemos de antemão quais são as categorias
          (as labels existem nos dados de treino) e o objetivo é aprender uma função que mapeia novos exemplos
          para essas categorias. Em clustering, <strong>não existem categorias pré-definidas</strong> — o
          objetivo é descobrir se existe estrutura de grupo nos dados, e que forma essa estrutura tem.
        </p>
        <ClassVsClusterDiagram />
        <table style={S.table}>
          <thead><tr><th style={S.th}></th><th style={S.th}>Classification</th><th style={S.th}>Clustering</th></tr></thead>
          <tbody>
            {[
              ['Tipo', 'Supervisionado', 'Não supervisionado'],
              ['Dados de treino', 'Instâncias com labels conhecidas', 'Sem labels — grupos emergem dos dados'],
              ['Objetivo', 'Aprender a prever a classe de novos exemplos', 'Descobrir estrutura natural nos dados'],
              ['Nº de grupos', 'Conhecido a priori (definido pelas labels)', 'Frequentemente desconhecido — tem de ser estimado ou escolhido'],
              ['Resultado', 'Modelo treinado + previsões para novos exemplos', 'Atribuição de cada ponto a um cluster (e, em alguns algoritmos, um modelo dos clusters)'],
              ['Avaliação', 'Accuracy, F1, AUC (vs. labels verdadeiras)', 'Silhouette, Davies-Bouldin, interpretação de negócio'],
              ['Exemplo', 'Classificar emails como spam/não-spam', 'Agrupar clientes por comportamento de compra'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color: 'var(--text-secondary)' }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color }}>{c}</td></tr>)}
          </tbody>
        </table>
        <p style={S.p}>
          Esta diferença tem uma consequência prática importante: em classificação podemos sempre medir o
          desempenho do modelo comparando previsões com a "verdade" (as labels de teste). Em clustering, essa
          "verdade" geralmente não existe — não há uma forma objetiva de dizer que um agrupamento de clientes
          em "3 segmentos" está mais "correto" do que em "5 segmentos". A avaliação passa a depender de
          <strong> propriedades geométricas internas</strong> (coesão, separação — secção 6) e de
          <strong> interpretabilidade de negócio</strong> (os clusters fazem sentido para quem vai agir sobre
          eles?).
        </p>
        <div style={S.highlight}>
          <strong>Casos de uso típicos de clustering:</strong> segmentação de clientes para marketing,
          deteção de anomalias (pontos que não pertencem a nenhum cluster denso), compressão/sumarização de
          dados (substituir milhares de pontos por alguns centróides representativos), pré-processamento para
          outras tarefas (criar uma feature categórica "cluster" para usar num modelo supervisionado
          posterior), e exploração de dados quando ainda não sabemos que grupos existem.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Cohort Analysis === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Cohort Analysis</h2>
        <p style={S.p}>
          A <strong>Cohort Analysis</strong> é uma das técnicas exploratórias mais simples e mais usadas em
          análise de negócio. Em vez de agrupar clientes por similaridade geométrica (como faria um algoritmo
          de clustering), agrupa-os por uma <strong>característica comum partilhada num dado momento</strong> —
          tipicamente, a data em que se tornaram clientes — e depois acompanha-se a evolução de cada grupo ao
          longo do tempo.
        </p>
        <div style={S.highlight}>
          <strong>Cohort:</strong> Grupo de entidades que partilham uma característica num dado momento — ex:
          todos os clientes que fizeram a primeira compra em Janeiro 2024.<br /><br />
          <strong>Objetivo:</strong> Comparar o comportamento de diferentes cohorts ao longo do tempo —
          retenção, receita, engagement, churn rate por cohort.
        </div>
        <p style={S.p}>
          A forma mais comum de visualizar isto é a <strong>matriz de retenção</strong>: cada linha é um
          cohort (definido pelo mês de aquisição), cada coluna é o "mês desde a aquisição" (mês 0, mês 1, mês
          2, ...), e cada célula mostra a percentagem de clientes desse cohort ainda ativos nesse mês.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Exemplo: Matriz de Retenção por Cohort</p>
          <table style={{ ...S.table, marginBottom: 0, fontFamily: 'monospace', fontSize: '0.82rem' }}>
            <thead>
              <tr>
                <th style={S.th}>Cohort</th>
                {['Mês 0', 'Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5'].map(m => <th key={m} style={S.th}>{m}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['Jan 2024', '100%', '65%', '48%', '38%', '32%', '28%'],
                ['Fev 2024', '100%', '70%', '52%', '44%', '39%', '—'],
                ['Mar 2024', '100%', '68%', '55%', '50%', '—', '—'],
              ].map(([c, ...vals]) => (
                <tr key={c}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{c}</td>
                  {vals.map((v, i) => <td key={i} style={{ ...S.td, color: v === '—' ? 'var(--text-secondary)' : v === '100%' ? '#f97316' : 'var(--text-primary)' }}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CohortCurvesDiagram />
        <h3 style={S.h3}>Leitura da matriz: o que procurar?</h3>
        <p style={S.p}>
          A matriz de retenção não é apenas uma tabela de números — é um instrumento de diagnóstico. Há três
          padrões que se procuram tipicamente:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Tendência entre cohorts:</strong> cohorts mais recentes (Mar 2024) retêm melhor que
            cohorts mais antigos (Jan 2024)? Se sim, isso sugere que mudanças de produto, onboarding ou
            marketing recentes estão a melhorar a retenção.</li>
          <li><strong>"Cotovelo" de estabilização:</strong> a retenção cai rapidamente nos primeiros meses e
            depois estabiliza? Esse ponto de inflexão identifica o momento crítico em que um cliente passa de
            "experimental" para "habitual" — e é o período em que vale mais a pena investir em onboarding.</li>
          <li><strong>Comparação entre tipos de cohort:</strong> embora o exemplo use cohorts temporais
            (mês de aquisição), também é possível definir cohorts por canal de aquisição, plano subscrito, ou
            região — permitindo perguntas como "os clientes adquiridos via redes sociais retêm pior que os
            adquiridos por referral?"</li>
        </ul>
        <div style={S.note}>
          Cohort Analysis é frequentemente o <strong>primeiro passo</strong> antes de qualquer clustering
          algorítmico: ajuda a entender a dinâmica temporal dos dados (ex.: "os clientes mudam de
          comportamento ao longo do ciclo de vida?") — informação que pode depois ser usada como feature de
          entrada para um algoritmo de clustering (ex.: "tempo desde a aquisição" como uma das dimensões).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Cell-based Segments === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Cell-based Segments (Segmentação por Quartis)</h2>
        <p style={S.p}>
          A segmentação <em>cell-based</em> é a abordagem mais simples a clustering: em vez de deixar um
          algoritmo descobrir grupos a partir da geometria dos dados, definimos <strong>regras explícitas</strong>
          baseadas em divisões estatísticas — tipicamente quartis ou percentis de uma ou mais variáveis. O
          resultado são "células" (combinações de intervalos) que funcionam como segmentos.
        </p>
        <p style={S.p}>
          A vantagem principal desta abordagem é a <strong>interpretabilidade total</strong>: cada segmento tem
          uma definição clara e auditável ("clientes no quartil 4 de Frequency e quartil 4 de Monetary"), o que
          facilita a comunicação com equipas de negócio e a criação de campanhas direcionadas. A desvantagem é
          que as fronteiras são <strong>arbitrárias</strong> — um cliente no percentil 74 e outro no percentil
          76 ficam em segmentos diferentes, apesar de serem quase indistinguíveis.
        </p>
        <div style={S.highlight}>
          <strong>Exemplo RFM (Recency, Frequency, Monetary):</strong><br />
          1. Dividir cada dimensão em quartis (Q1, Q2, Q3, Q4)<br />
          2. Criar segmentos pela combinação de quartis: (R_quartil, F_quartil, M_quartil)<br />
          3. Dar nomes de negócio: "Champions" (alto em tudo), "At Risk" (alta frequência mas baixa recência), etc.
        </div>
        <RFMCubeDiagram />
        <table style={S.table}>
          <thead><tr><th style={S.th}>Segmento RFM</th><th style={S.th}>Perfil</th><th style={S.th}>Ação sugerida</th></tr></thead>
          <tbody>
            {[
              ['Champions', 'Compraram recentemente, compram frequentemente, gastam muito', 'Recompensar, pedir reviews'],
              ['Loyal Customers', 'Compram frequentemente mas não tão recentemente', 'Programa de fidelidade'],
              ['Potential Loyalist', 'Recência e frequência médias-altas, valor médio', 'Ofertas para aumentar frequência'],
              ['At Risk', 'Compraram muito mas há muito tempo', 'Campanha de reactivação urgente'],
              ['Hibernating', 'Baixa recência, frequência e valor', 'Oferta especial ou deixar ir'],
              ['New Customers', 'Recência alta, frequência e valor baixos (poucas compras)', 'Onboarding, segunda compra'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>
        <h3 style={S.h3}>Exemplo Numérico: classificar um cliente em RFM</h3>
        <p style={S.p}>
          Suponha uma base de 1000 clientes. Calculam-se os quartis (25%, 50%, 75%) para cada dimensão:
          Recency (dias desde a última compra — quanto <em>menor</em>, melhor), Frequency (nº de compras no
          último ano — quanto maior, melhor) e Monetary (gasto total — quanto maior, melhor).
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Dimensão</th><th style={S.th}>Q1 (pior)</th><th style={S.th}>Q2</th><th style={S.th}>Q3</th><th style={S.th}>Q4 (melhor)</th></tr></thead>
          <tbody>
            <tr><td style={{ ...S.td, fontWeight: 700 }}>Recency (dias)</td><td style={S.td}>&gt; 180</td><td style={S.td}>91–180</td><td style={S.td}>31–90</td><td style={S.td}>≤ 30</td></tr>
            <tr><td style={{ ...S.td, fontWeight: 700 }}>Frequency (compras/ano)</td><td style={S.td}>≤ 1</td><td style={S.td}>2–3</td><td style={S.td}>4–6</td><td style={S.td}>&gt; 6</td></tr>
            <tr><td style={{ ...S.td, fontWeight: 700 }}>Monetary (€ total)</td><td style={S.td}>≤ 50</td><td style={S.td}>51–150</td><td style={S.td}>151–400</td><td style={S.td}>&gt; 400</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          Um cliente que comprou há 15 dias (Recency → Q4), fez 7 compras este ano (Frequency → Q4) e gastou
          €520 (Monetary → Q4) recebe o código <strong>4-4-4</strong> → <strong>Champions</strong>. Outro
          cliente que comprou há 200 dias (Q1), fez 5 compras (Q3) e gastou €380 (Q3) recebe o código
          <strong> 1-3-3</strong> — alta frequência e valor históricos, mas ausência recente → <strong>At
          Risk</strong>, candidato a uma campanha de reativação.
        </p>
        <div style={S.note}>
          Cell-based segments são um excelente <strong>baseline</strong>: rápidos de implementar, fáceis de
          explicar e auditáveis. Em muitos casos de negócio, são suficientes. Algoritmos de clustering
          (módulos 04–06) tornam-se relevantes quando (a) há mais de 3 dimensões e a "grelha" de células
          cresce exponencialmente, (b) as fronteiras naturais nos dados não coincidem com quartis, ou (c)
          queremos que os grupos emerjam organicamente em vez de serem impostos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Migration Matrix === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Migration Matrix</h2>
        <p style={S.p}>
          Depois de definidos os segmentos (por células RFM, por clustering, ou por qualquer outro critério),
          uma pergunta natural é: <strong>os clientes mudam de segmento ao longo do tempo?</strong> A
          <em> migration matrix</em> (ou matriz de transição) responde a esta pergunta — mostra a
          probabilidade de um cliente que está num segmento no período <InlineMath math="T" /> estar noutro
          segmento (ou no mesmo) no período <InlineMath math="T+1" />.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Exemplo: Migração entre Segmentos (T → T+1)</p>
          <table style={{ ...S.table, marginBottom: 0, fontSize: '0.82rem' }}>
            <thead>
              <tr><th style={S.th}>De \ Para</th>{['Gold', 'Silver', 'Bronze', 'Churn'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ['Gold', '70%', '20%', '5%', '5%'],
                ['Silver', '15%', '60%', '15%', '10%'],
                ['Bronze', '5%', '20%', '55%', '20%'],
              ].map(([r, ...vals]) => (
                <tr key={r}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{r}</td>
                  {vals.map((v, i) => <td key={i} style={{ ...S.td, color: i === 0 ? '#f97316' : i === 3 ? '#f97316' : 'var(--text-primary)' }}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A diagonal principal (Gold→Gold = 70%, Silver→Silver = 60%, Bronze→Bronze = 55%) representa a
          <strong> estabilidade</strong> de cada segmento — a percentagem de clientes que permanece no mesmo
          grupo. Valores fora da diagonal representam <strong>fluxos</strong>: por exemplo, 20% dos clientes
          Gold descem para Silver, e 5% para Bronze ou Churn.
        </p>
        <h3 style={S.h3}>Para que serve, na prática?</h3>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Medir o impacto de campanhas:</strong> se uma campanha de retenção for lançada para
            clientes Gold, comparar a matriz de migração antes e depois da campanha mostra se a taxa
            Gold→Gold aumentou (campanha eficaz) ou se manteve igual.</li>
          <li><strong>Prever churn agregado:</strong> a coluna "Churn" mostra, para cada segmento de origem,
            qual a probabilidade de abandono — útil para estimar receita futura e priorizar segmentos de
            maior risco (Bronze tem 20% de churn vs. 5% para Gold).</li>
          <li><strong>Identificar "degradação silenciosa":</strong> mesmo sem churn explícito, clientes Gold
            que migram para Silver/Bronze são um sinal de alerta precoce — agir nesta transição é mais barato
            do que recuperar um cliente já perdido.</li>
        </ul>
        <div style={S.note}>
          A migration matrix é, na verdade, uma <strong>cadeia de Markov de primeira ordem</strong> sobre os
          segmentos: assume que a probabilidade de transição depende apenas do segmento atual, não do
          histórico completo. Esta simplificação é poderosa (permite projetar a distribuição de clientes por
          segmento em múltiplos períodos futuros, multiplicando a matriz por si mesma), mas é também uma
          assunção — na realidade, um cliente que "já foi" Gold antes pode comportar-se diferentemente de um
          cliente Silver que nunca foi Gold.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Medidas de Distância === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Medidas de Distância e Similaridade</h2>
        <p style={S.p}>
          Tudo o que vimos até agora — cohorts, segmentos por quartis, migração — usa regras explícitas para
          definir grupos. Os algoritmos de clustering propriamente ditos (módulos 04–06) substituem essas
          regras por uma <strong>medida quantitativa de "quão parecidos" dois pontos são</strong>. Quase todos
          os algoritmos de clustering dependem, no seu núcleo, de uma função de <strong>distância</strong>
          (quanto menor, mais parecidos) ou de <strong>similaridade</strong> (quanto maior, mais parecidos).
          A escolha desta função é uma das decisões mais importantes — e mais frequentemente ignoradas — em
          todo o pipeline de clustering.
        </p>

        <h3 style={S.h3}>Distância Euclidiana</h3>
        <p style={S.p}>
          A mais intuitiva: a distância "em linha reta" entre dois pontos, generalizando o teorema de
          Pitágoras para <InlineMath math="n" /> dimensões.
        </p>
        <div style={S.math}>
          <BlockMath math="d_{euclid}(x, y) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}" />
        </div>

        <h3 style={S.h3}>Distância Manhattan (City Block)</h3>
        <p style={S.p}>
          Soma das diferenças absolutas em cada dimensão — como navegar uma grelha de ruas onde só se pode
          mover horizontal ou verticalmente, nunca na diagonal. É mais robusta a outliers do que a euclidiana,
          porque não eleva as diferenças ao quadrado (uma diferença grande numa única dimensão "pesa" menos
          relativamente).
        </p>
        <div style={S.math}>
          <BlockMath math="d_{manhattan}(x, y) = \sum_{i=1}^{n} |x_i - y_i|" />
        </div>
        <DistanceDiagram />

        <h3 style={S.h3}>Exemplo Numérico: A=(2,1), B=(8,6)</h3>
        <p style={S.p}>
          Considere os dois pontos do diagrama acima, <InlineMath math="A = (2, 1)" /> e
          <InlineMath math="B = (8, 6)" />. As diferenças por eixo são
          <InlineMath math="\Delta x = 8 - 2 = 6" /> e <InlineMath math="\Delta y = 6 - 1 = 5" />.
        </p>
        <div style={S.math}>
          <BlockMath math="d_{euclid}(A,B) = \sqrt{6^2 + 5^2} = \sqrt{36+25} = \sqrt{61} \approx 7.81" />
          <BlockMath math="d_{manhattan}(A,B) = |6| + |5| = 11" />
        </div>
        <p style={S.p}>
          Note que a Manhattan (11) é sempre <InlineMath math="\geq" /> a Euclidiana (≈7.81) — a "soma dos
          cursos" nunca é mais curta que a "linha reta". A diferença entre as duas relaciona-se diretamente
          com quão alinhada está a reta AB com os eixos: se A e B diferissem apenas numa dimensão, as duas
          distâncias seriam iguais.
        </p>

        <h3 style={S.h3}>Similaridade de Cosseno</h3>
        <p style={S.p}>
          Em vez de medir a distância "absoluta" entre dois pontos, a <strong>similaridade de cosseno</strong>
          mede o ângulo entre os vetores que os representam — ignorando completamente a sua magnitude. É a
          métrica de eleição quando o que importa é a <strong>direção</strong> dos dados, não a sua escala —
          típico em dados de texto (vetores de frequência de palavras) ou perfis de comportamento
          normalizados.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{cos}(x, y) = \frac{x \cdot y}{\|x\| \, \|y\|} = \frac{\sum_{i=1}^n x_i y_i}{\sqrt{\sum_{i=1}^n x_i^2} \sqrt{\sum_{i=1}^n y_i^2}}" />
        </div>
        <p style={S.p}>
          O resultado varia entre -1 (vetores opostos) e 1 (vetores na mesma direção), sendo 0 para vetores
          ortogonais (perpendiculares). Para usar como "distância" (onde menor = mais parecido), define-se
          tipicamente <InlineMath math="d_{cos}(x,y) = 1 - \text{cos}(x,y)" />, que varia entre 0 (idêntico
          em direção) e 2 (direções opostas).
        </p>
        <div style={S.note}>
          <strong>Porque importa a magnitude vs. direção?</strong> Imagine dois clientes: o cliente A comprou
          (2 unidades de roupa, 1 de eletrónica) e o cliente B comprou (20 unidades de roupa, 10 de
          eletrónica). Em termos absolutos (Euclidiana), estão muito distantes — B compra 10x mais. Mas em
          termos de <em>perfil de compra</em> (proporção entre categorias), são idênticos — ambos compram
          duas vezes mais roupa do que eletrónica. A similaridade de cosseno capta esta segunda noção,
          ignorando a escala.
        </div>

        <h3 style={S.h3}>Distância de Jaccard (dados binários/categóricos)</h3>
        <p style={S.p}>
          As métricas anteriores assumem dados numéricos contínuos. Para dados <strong>binários</strong>
          (presença/ausência de um atributo — ex.: "comprou categoria X? sim/não") ou conjuntos, a
          <strong> distância (ou índice) de Jaccard</strong> compara a proporção de atributos partilhados
          entre dois conjuntos.
        </p>
        <div style={S.math}>
          <BlockMath math="J(A, B) = \frac{|A \cap B|}{|A \cup B|} \qquad d_{jaccard}(A,B) = 1 - J(A,B)" />
        </div>
        <p style={S.p}>
          <strong>Exemplo:</strong> dois clientes descritos pelas categorias de produtos que já compraram —
          Cliente A: {'{Roupa, Eletrónica, Livros}'}, Cliente B: {'{Roupa, Eletrónica, Desporto, Casa}'}. A
          intersecção é {'{Roupa, Eletrónica}'} (2 elementos), a união é
          {' {Roupa, Eletrónica, Livros, Desporto, Casa}'} (5 elementos). Logo
          <InlineMath math="J(A,B) = 2/5 = 0.4" /> e <InlineMath math="d_{jaccard}(A,B) = 0.6" /> — moderamente
          diferentes.
        </p>

        <h3 style={S.h3}>Tabela-resumo: qual métrica usar?</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Métrica</th><th style={S.th}>Tipo de dados</th><th style={S.th}>Sensível a escala?</th><th style={S.th}>Quando usar</th></tr></thead>
          <tbody>
            {[
              ['Euclidiana', 'Numérico contínuo', 'Sim — exige normalização', 'Default para k-Means; quando a magnitude importa'],
              ['Manhattan', 'Numérico contínuo', 'Sim — exige normalização', 'Dados com muitos outliers; alta dimensionalidade'],
              ['Cosseno', 'Numérico (vetores)', 'Não — invariante a escala', 'Texto, perfis de comportamento, dados esparsos'],
              ['Jaccard', 'Binário / categórico / conjuntos', 'N/A', 'Presença/ausência de atributos, cestas de compra'],
            ].map(([m, t, s, u]) => (
              <tr key={m}><td style={{ ...S.td, fontWeight: 700, color }}>{m}</td><td style={S.td}>{t}</td><td style={S.td}>{s}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{u}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          <strong>Implicação crítica:</strong> sempre que se usa distância Euclidiana ou Manhattan, é
          necessário <strong>normalizar/escalar as features primeiro</strong> (ex.: z-score ou min-max). Sem
          isto, uma feature medida em milhares (ex.: receita anual em €) domina completamente o cálculo da
          distância face a uma feature medida em unidades pequenas (ex.: número de filhos), independentemente
          da sua importância real para o problema.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Taxonomia de Algoritmos === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Taxonomia de Algoritmos de Clustering</h2>
        <p style={S.p}>
          Com uma noção de distância definida, podemos agora mapear as grandes famílias de algoritmos de
          clustering que serão exploradas em detalhe nos próximos módulos. Cada família faz uma assunção
          diferente sobre <strong>a forma</strong> que os clusters têm, e isso determina em que tipos de
          dados cada uma se destaca — ou falha.
        </p>
        <ClusteringTaxonomyDiagram />
        <table style={S.table}>
          <thead><tr><th style={S.th}>Família</th><th style={S.th}>Ideia central</th><th style={S.th}>Pontos fortes</th><th style={S.th}>Limitações</th></tr></thead>
          <tbody>
            {[
              ['Partitional (k-Means)', 'Divide os dados em k grupos, cada um representado por um centróide; minimiza a distância dos pontos aos centróides', 'Rápido, escalável, simples de interpretar', 'Requer escolher k à priori; assume clusters esféricos e de tamanho semelhante; sensível a outliers'],
              ['Hierarchical (Agglomerative/Divisive)', 'Constrói uma hierarquia de clusters (dendrograma) — agglomerative funde os pares mais próximos sucessivamente; divisive parte do todo e divide', 'Não exige escolher k antecipadamente; o dendrograma revela estrutura a múltiplas escalas', 'Custo computacional alto (O(n²) ou pior); decisões de fusão são irreversíveis (greedy)'],
              ['Density-based (DBSCAN/HDBSCAN)', 'Clusters são regiões de alta densidade de pontos separadas por regiões de baixa densidade; pontos isolados são "ruído"', 'Encontra clusters de forma arbitrária; identifica outliers naturalmente; não exige k', 'Sensível a parâmetros de densidade; dificuldade com clusters de densidades muito diferentes'],
              ['Model-based (GMM)', 'Assume que os dados são gerados por uma mistura de distribuições probabilísticas (ex.: gaussianas); estima os parâmetros dessas distribuições', 'Atribuição "soft" (probabilidade de pertença); clusters podem ter formas elípticas/orientadas', 'Assume uma forma distribucional; sensível à inicialização; mais caro computacionalmente'],
            ].map(([f, i, s, l]) => (
              <tr key={f}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{f}</td>
                <td style={S.td}>{i}</td>
                <td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{s}</td>
                <td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Esta tabela não é exaustiva — existem dezenas de variantes e híbridos — mas cobre as quatro famílias
          "canónicas" que estruturam a maioria dos cursos e ferramentas de clustering (incluindo scikit-learn).
          O essencial a reter neste momento é que <strong>a escolha do algoritmo é uma escolha sobre a forma
          assumida para os clusters</strong> — exatamente da mesma forma que, em aprendizagem supervisionada,
          a escolha do algoritmo é uma escolha de viés indutivo (recordar Módulo ML1).
        </p>
        <div style={S.note}>
          <strong>Pré-visualização dos próximos módulos:</strong> Módulo 04 cobre Hierarchical Clustering em
          profundidade (incluindo como ler um dendrograma e escolher o número de clusters a partir dele);
          Módulo 05 cobre k-Means e métricas de avaliação interna (Silhouette, Davies-Bouldin); Módulo 06
          cobre Density-based e Model-based clustering (DBSCAN, HDBSCAN, GMM).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Como Avaliar Clusters sem Labels === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Como Avaliar Clusters sem Labels?</h2>
        <p style={S.p}>
          Voltamos à pergunta levantada na secção 1: se não há labels de referência, como sabemos se um
          agrupamento é "bom"? A resposta intuitiva — e que será formalizada em métricas concretas no Módulo
          05 — assenta em duas propriedades geométricas complementares: <strong>coesão</strong> (cohesion) e
          <strong> separação</strong> (separation).
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Coesão:</strong> os pontos dentro do mesmo cluster devem estar próximos uns dos outros
            (a distância média intra-cluster deve ser pequena). Um cluster coeso é "compacto".</li>
          <li><strong>Separação:</strong> os pontos em clusters diferentes devem estar afastados (a distância
            entre clusters deve ser grande). Clusters bem separados não se sobrepõem.</li>
        </ul>
        <CohesionSeparationDiagram />
        <p style={S.p}>
          Estas duas propriedades estão em tensão com o <strong>número de clusters</strong>, <InlineMath math="k" />:
          aumentar <InlineMath math="k" /> tende a melhorar a coesão (clusters mais pequenos são naturalmente
          mais compactos — no limite, cada ponto é o seu próprio cluster, com coesão perfeita) mas pode piorar
          a separação (mais clusters significa mais fronteiras, e algumas ficam necessariamente próximas).
          Encontrar o <InlineMath math="k" /> "certo" é, em larga medida, encontrar o equilíbrio entre estes
          dois objetivos.
        </p>
        <div style={S.highlight}>
          <strong>Teaser do Módulo 05:</strong> Duas das métricas internas mais usadas formalizam exatamente
          esta intuição:
          <ul style={{ marginTop: '0.5rem', marginBottom: 0, paddingLeft: '1.5rem' }}>
            <li><strong>Silhouette Score</strong> — para cada ponto, compara a sua distância média aos pontos
              do próprio cluster com a distância média aos pontos do cluster vizinho mais próximo, produzindo
              um valor entre -1 e 1 (quanto maior, melhor).</li>
            <li><strong>Davies-Bouldin Index (DBI)</strong> — razão entre a dispersão dentro dos clusters e a
              separação entre os seus centróides; quanto <em>menor</em>, melhor (clusters compactos e bem
              separados).</li>
          </ul>
        </div>
        <p style={S.p}>
          Por agora, o ponto essencial é conceptual: <strong>avaliação não-supervisionada é sempre relativa e
          indireta</strong>. Não existe um "score absoluto de qualidade" — apenas comparações entre diferentes
          configurações (diferentes valores de <InlineMath math="k" />, diferentes algoritmos, diferentes
          métricas de distância) usando proxies geométricos como coesão e separação. A validação final, em
          contexto de negócio, continua a depender da <strong>interpretação humana</strong> — os clusters
          resultantes correspondem a grupos com significado prático e ações distintas associadas?
        </p>
        <div style={S.note}>
          Existe ainda uma terceira via de avaliação — a <strong>avaliação externa</strong> — usada quando, por
          coincidência, existem labels disponíveis (ex.: já sabemos a que segmento de negócio um subconjunto de
          clientes pertence) e podemos comparar os clusters descobertos com essas labels usando métricas como o
          Adjusted Rand Index. Esta abordagem será também referida no Módulo 05, mas é menos comum na prática
          precisamente porque, se já tivéssemos as labels, clustering deixaria de ser a ferramenta mais
          adequada — usaríamos classificação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Spectral Clustering === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Spectral Clustering</h2>
        <p style={S.p}>
          k-Means e os algoritmos hierárquicos assumem que os clusters são <strong>convexos e compactos</strong>
          — regiões aproximadamente esféricas no espaço de features. Esta assunção falha completamente quando
          os dados formam estruturas não-convexas: dois crescentes interligados, dois anéis concêntricos,
          espirais interligadas. <strong>Spectral Clustering</strong> resolve este problema usando a
          eigenstrutura do grafo de similaridade dos dados para encontrar clusters de forma arbitrária, sem
          assumir qualquer forma geométrica prévia.
        </p>
        <div style={S.highlight}>
          <strong>Intuição central:</strong> em vez de operar diretamente no espaço original das features,
          Spectral Clustering constrói um grafo de similaridade entre os pontos, calcula os eigenvectors do
          Laplaciano desse grafo (que capturam a conectividade global do grafo), e aplica k-Means
          <em> nesse espaço espectral</em> — onde os clusters, mesmo não-convexos no espaço original, tornam-se
          linearmente separáveis.
        </div>

        <h3 style={S.h3}>Algoritmo passo a passo</h3>
        <p style={S.p}><strong>Passo 1 — Construir a similarity matrix W</strong> usando o kernel Gaussiano:</p>
        <div style={S.math}>
          <BlockMath math="W_{ij} = \exp\!\left(-\frac{\|x_i - x_j\|^2}{2\sigma^2}\right)" />
        </div>
        <p style={S.p}>
          O parâmetro <InlineMath math="\sigma" /> (bandwidth) controla o raio de vizinhança — pontos mais
          distantes que ~<InlineMath math="2\sigma" /> têm peso próximo de zero e são tratados como
          desconectados no grafo. <InlineMath math="W" /> é simétrica e não-negativa.
        </p>

        <p style={S.p}><strong>Passo 2 — Calcular o Degree matrix D</strong>: matriz diagonal onde cada
          entrada é a soma das similaridades da linha correspondente:</p>
        <div style={S.math}>
          <BlockMath math="D_{ii} = \sum_{j=1}^{n} W_{ij}" />
        </div>

        <p style={S.p}><strong>Passo 3 — Calcular o Laplaciano do grafo</strong>. Existem duas variantes principais:</p>
        <div style={S.math}>
          <BlockMath math="L = D - W \quad \text{(não normalizado)}" />
          <BlockMath math="L_{\mathrm{sym}} = D^{-1/2}\, L\, D^{-1/2} = I - D^{-1/2} W D^{-1/2} \quad \text{(normalizado)}" />
        </div>
        <p style={S.p}>
          O Laplaciano normalizado <InlineMath math="L_{\mathrm{sym}}" /> é recomendado quando os clusters
          têm tamanhos desiguais, pois compensa diferenças de grau entre nós.
        </p>

        <p style={S.p}><strong>Passo 4 — Calcular os k menores eigenvectors de L</strong> (correspondentes
          aos k menores eigenvalues). Estes eigenvectors formam a matriz <InlineMath math="U \in \mathbb{R}^{n \times k}" />.</p>

        <p style={S.p}><strong>Passo 5 — Embedding espectral</strong>: cada ponto <InlineMath math="x_i" /> é
          agora representado pela linha <InlineMath math="i" /> de <InlineMath math="U" /> — um vetor em
          <InlineMath math="\mathbb{R}^k" />. No espaço espectral, pontos fortemente conectados no grafo
          ficam próximos, independentemente da sua forma no espaço original.</p>

        <p style={S.p}><strong>Passo 6 — Aplicar k-Means nas linhas de U</strong>. No espaço espectral
          os clusters tornam-se linearmente separáveis — k-Means funciona corretamente mesmo que no espaço
          original as formas fossem não-convexas.</p>

        <SpectralClusteringDiagram />

        <h3 style={S.h3}>Intuição geométrica: o Laplaciano e a Graph Cut</h3>
        <p style={S.p}>
          O Laplaciano do grafo captura a <strong>conectividade</strong> entre os pontos. Os eigenvectors
          correspondentes aos menores eigenvalues codificam a partição do grafo que minimiza o
          <em> normalized cut</em> — isto é, o "custo" de cortar as arestas que ligam os dois grupos,
          normalizado pelo volume de cada grupo. Clusters com poucas ligações entre eles (bem separados no
          grafo) correspondem a partições com normalized cut baixo, e são exactamente o que os primeiros
          eigenvectors revelam.
        </p>
        <div style={S.note}>
          Spectral clustering relaciona-se com a Graph Cut — os eigenvectors do Laplaciano minimizam o
          normalized cut entre clusters. É a base conceptual de algoritmos de community detection em redes
          sociais (ex.: modularity-based clustering em grafos de interação social).
        </div>

        <h3 style={S.h3}>Hiperparâmetros e escolhas práticas</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Hiperparâmetro</th><th style={S.th}>Papel</th><th style={S.th}>Como escolher</th></tr></thead>
          <tbody>
            {[
              ['σ (bandwidth)', 'Raio efetivo de vizinhança no kernel Gaussiano — controla quais pares de pontos se consideram "vizinhos" no grafo', 'Heurística: σ = mediana das distâncias aos k vizinhos mais próximos; ou varrer valores e inspecionar a conectividade do grafo'],
              ['k (nº de clusters)', 'Número de eigenvectors retidos = número de clusters esperados', 'O eigengap heuristic: escolher k onde o salto entre eigenvalues consecutivos é maior'],
              ['Laplaciano', 'Normalizado (L_sym) vs não-normalizado (L)', 'Normalizado recomendado para clusters de tamanhos diferentes; não-normalizado funciona bem quando os clusters têm tamanhos semelhantes'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Complexidade e escalabilidade</h3>
        <p style={S.p}>
          O passo mais custoso é a eigendecomposição do Laplaciano: <InlineMath math="\mathcal{O}(n^3)" />
          no caso geral, onde <InlineMath math="n" /> é o número de pontos. Isto torna Spectral Clustering
          impraticável para datasets grandes (n &gt; ~10 000 pontos). Para grandes escalas, usa-se a
          <strong> aproximação de Nyström</strong> — que estima os eigenvectors usando apenas uma amostra
          aleatória dos pontos — ou variantes baseadas em grafos esparsos (<em>k-NN graph</em> em vez da
          similarity matrix densa).
        </p>

        <div style={S.highlight}>
          <strong>Spectral Clustering no mapa de algoritmos:</strong> Spectral Clustering preenche o gap
          entre os métodos particionais (k-Means — esféricos, convexos) e os baseados em densidade (DBSCAN
          — formas arbitrárias via densidade local). Usa a geometria <em>global</em> do grafo de
          similaridade — não apenas vizinhanças locais — o que lhe permite capturar estruturas de
          conectividade que DBSCAN perde quando a densidade é variável e que k-Means perde por assumir
          convexidade.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Síntese do Módulo</h2>
        <p style={S.p}>
          Este módulo estabeleceu as fundações conceptuais para todo o bloco de Cluster Analysis. Antes de
          aplicar qualquer algoritmo, é fundamental entender a natureza do problema não-supervisionado, dominar
          as técnicas exploratórias mais simples (que muitas vezes já resolvem o problema de negócio), e
          escolher conscientemente uma medida de distância — a decisão que mais influencia o resultado de
          qualquer algoritmo de clustering.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Clustering é não-supervisionado: não há labels, o número de grupos é frequentemente
              desconhecido, e a avaliação depende de propriedades geométricas internas e de interpretação de
              negócio</li>
            <li>Cohort Analysis agrupa por característica comum partilhada num momento (tipicamente temporal)
              e acompanha a evolução ao longo do tempo — útil para retenção e ciclo de vida</li>
            <li>Cell-based Segments (incl. RFM) usam quartis/percentis para criar segmentos interpretáveis e
              acionáveis — um excelente baseline antes de recorrer a clustering algorítmico</li>
            <li>Migration Matrix modela transições entre segmentos como uma cadeia de Markov — útil para medir
              impacto de campanhas e prever churn agregado</li>
            <li>Distância Euclidiana e Manhattan medem proximidade absoluta (e exigem normalização das
              features); similaridade de cosseno mede direção, ignorando escala; Jaccard compara conjuntos
              binários/categóricos</li>
            <li>Quatro famílias de algoritmos de clustering: Partitional (k-Means), Hierarchical
              (Agglomerative/Divisive), Density-based (DBSCAN/HDBSCAN) e Model-based (GMM) — cada uma assume
              uma forma diferente para os clusters</li>
            <li>Avaliação sem labels assenta na tensão entre coesão (compacidade intra-cluster) e separação
              (distância inter-cluster) — formalizada em métricas como Silhouette e Davies-Bouldin (Módulo 05)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
