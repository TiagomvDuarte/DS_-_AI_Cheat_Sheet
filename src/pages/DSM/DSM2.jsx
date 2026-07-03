import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
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
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.06)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1rem', margin: '1.25rem 0', display: 'flex', justifyContent: 'center', overflowX: 'auto' },
  math: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

/* ─── SVG helpers ──────────────────────────────────────────── */

function BatchVsHoeffdingSVG() {
  const pw = 340, ph = 190, gap = 20;
  const totalW = pw * 2 + gap;
  return (
    <svg viewBox={`0 0 ${totalW} ${ph}`} width="100%" style={{ maxWidth: totalW }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill={color}/>
        </marker>
      </defs>

      {/* ── Panel 1: Batch ── */}
      <rect x="0" y="0" width={pw} height={ph} rx="10" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1.5"/>
      <text x={pw/2} y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Árvore Batch (C4.5 / ID3)</text>
      {/* Cylinder */}
      <ellipse cx="68" cy="72" rx="44" ry="14" fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth="1.5"/>
      <rect x="24" y="72" width="88" height="38" fill={`rgba(249,115,22,0.07)`} stroke={color} strokeWidth="1.5"/>
      <ellipse cx="68" cy="110" rx="44" ry="14" fill={`rgba(249,115,22,0.10)`} stroke={color} strokeWidth="1.5"/>
      <text x="68" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Todos os</text>
      <text x="68" y="107" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">dados</text>
      {/* Arrow */}
      <line x1="114" y1="91" x2="148" y2="91" stroke={color} strokeWidth="2" markerEnd="url(#arr2)"/>
      {/* Compute box */}
      <rect x="150" y="73" width="76" height="36" rx="6" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="188" y="95" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Computar</text>
      {/* Arrow */}
      <line x1="228" y1="91" x2="262" y2="91" stroke={color} strokeWidth="2" markerEnd="url(#arr2)"/>
      {/* Triangle */}
      <polygon points={`292,62 320,120 264,120`} fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="292" y="97" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Split</text>
      {/* Caption */}
      <text x={pw/2} y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Requer todo o dataset em memória</text>

      {/* ── Panel 2: Hoeffding ── */}
      <g transform={`translate(${pw + gap}, 0)`}>
        <rect x="0" y="0" width={pw} height={ph} rx="10" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1.5"/>
        <text x={pw/2} y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Árvore de Hoeffding (VFDT)</text>
        {/* Stream arrows */}
        <text x="14" y="85" fontSize="10" fill="var(--text-secondary)">stream</text>
        <line x1="14" y1="70" x2="52" y2="70" stroke={color} strokeWidth="1.5" markerEnd="url(#arr2)"/>
        <line x1="14" y1="91" x2="52" y2="91" stroke={color} strokeWidth="1.5" markerEnd="url(#arr2)"/>
        <line x1="14" y1="112" x2="52" y2="112" stroke={color} strokeWidth="1.5" markerEnd="url(#arr2)"/>
        {/* Stat box */}
        <rect x="54" y="60" width="88" height="62" rx="6" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
        <text x="98" y="80" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Estatísticas</text>
        <text x="98" y="93" textAnchor="middle" fontSize="10" fill="var(--text-primary)">suficientes</text>
        <text x="98" y="106" textAnchor="middle" fontSize="10" fill="var(--text-primary)">(n_ijk)</text>
        {/* Arrow */}
        <line x1="144" y1="91" x2="178" y2="91" stroke={color} strokeWidth="2" markerEnd="url(#arr2)"/>
        {/* Check box */}
        <rect x="180" y="73" width="88" height="36" rx="6" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
        <text x="224" y="89" textAnchor="middle" fontSize="10" fill="var(--text-primary)">IG_a − IG_b</text>
        <text x="224" y="102" textAnchor="middle" fontSize="10" fill="var(--text-primary)">{`> ε ?`}</text>
        {/* Arrow */}
        <line x1="270" y1="91" x2="296" y2="91" stroke={color} strokeWidth="2" markerEnd="url(#arr2)"/>
        {/* Triangle */}
        <polygon points={`315,62 333,118 297,118`} fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
        <text x="315" y="97" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Split</text>
        {/* Caption */}
        <text x={pw/2} y="148" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Processa 1 instância de cada vez</text>
        <text x={pw/2} y="162" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Memória proporcional à árvore</text>
      </g>
    </svg>
  );
}

function ConvergenceSVG() {
  /* ε = sqrt(R² * ln(1/δ) / 2n), R=1, δ=0.05 → R²ln(1/δ)/2 ≈ 1.498 */
  const W = 560, H = 180;
  const padL = 50, padB = 36, padT = 20, padR = 20;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const nMax = 1000;
  const C = 1.498;
  const eps = (n) => Math.sqrt(C / n);
  const threshold = 0.05;

  const xScale = (n) => padL + (n / nMax) * plotW;
  const yScale = (e) => padT + plotH - Math.min(e, 1) * plotH;

  const pts = [];
  for (let n = 1; n <= nMax; n += 5) {
    pts.push(`${xScale(n).toFixed(1)},${yScale(eps(n)).toFixed(1)}`);
  }
  const polyline = pts.join(' ');

  const threshY = yScale(threshold);
  // intersection: n = C / threshold²
  const nIntersect = C / (threshold * threshold);
  const xIntersect = xScale(nIntersect);

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      {/* axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.5"/>
      {/* axis labels */}
      <text x={padL + plotW / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">n (instâncias observadas)</text>
      <text x="12" y={padT + plotH / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90,12,${padT + plotH / 2})`}>ε</text>
      {/* curve */}
      <polyline points={polyline} fill="none" stroke={color} strokeWidth="2.5"/>
      {/* threshold line */}
      <line x1={padL} y1={threshY} x2={padL + plotW} y2={threshY} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,4"/>
      <text x={padL + plotW + 2} y={threshY + 4} fontSize="10" fill="#f97316">τ = 0.05</text>
      {/* intersection */}
      <circle cx={xIntersect} cy={threshY} r="5" fill={color}/>
      <line x1={xIntersect} y1={threshY} x2={xIntersect} y2={padT + plotH} stroke={color} strokeWidth="1" strokeDasharray="4,3"/>
      <text x={xIntersect} y={padT + plotH + 14} textAnchor="middle" fontSize="10" fill={color}>n*≈{Math.round(nIntersect)}</text>
      {/* title */}
      <text x={padL + plotW / 2} y={padT - 4} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text-primary)">Convergência do Hoeffding Bound (δ=0.05, R=1)</text>
    </svg>
  );
}

function VFDTNodeSVG() {
  return (
    <svg width="640" height="240" viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      {/* Node box */}
      <rect x="20" y="30" width="260" height="180" rx="10" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1.5"/>
      <text x="150" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Folha (nó)</text>
      {/* Table header */}
      <rect x="30" y="60" width="240" height="22" rx="4" fill={`rgba(249,115,22,0.15)`}/>
      <text x="80" y="75" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">Atributo / Valor</text>
      <text x="180" y="75" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-primary)">Classe 0 | Classe 1</text>
      {/* rows */}
      {[
        ['Temp = Alto', '23', '41'],
        ['Temp = Baixo', '55', '12'],
        ['Hum = Alta', '31', '38'],
        ['Hum = Baixa', '47', '15'],
      ].map(([label, c0, c1], i) => (
        <g key={i}>
          <rect x="30" y={82 + i * 22} width="240" height="22" fill={i % 2 === 0 ? 'transparent' : `rgba(249,115,22,0.04)`}/>
          <text x="80" y={97 + i * 22} textAnchor="middle" fontSize="10" fill="var(--text-primary)">{label}</text>
          <text x="175" y={97 + i * 22} textAnchor="middle" fontSize="10" fill="var(--text-primary)">{c0}</text>
          <text x="215" y={97 + i * 22} textAnchor="middle" fontSize="10" fill="var(--text-primary)">{c1}</text>
        </g>
      ))}
      <text x="150" y="174" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">n = 166 instâncias</text>
      <text x="150" y="190" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">ε = 0.039 → IG_a − IG_b = 0.051 &gt; ε</text>
      <text x="150" y="206" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>→ Dividir em "Temp"!</text>

      {/* Arrow */}
      <line x1="285" y1="120" x2="330" y2="120" stroke={color} strokeWidth="2" markerEnd="url(#arr2)"/>

      {/* After split */}
      <text x="480" y="30" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Após Divisão</text>
      <polygon points="480,50 420,130 540,130" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="480" y="98" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Temp?</text>
      <line x1="446" y1="132" x2="410" y2="175" stroke={color} strokeWidth="1.5"/>
      <line x1="514" y1="132" x2="550" y2="175" stroke={color} strokeWidth="1.5"/>
      <rect x="385" y="175" width="50" height="28" rx="6" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1"/>
      <text x="410" y="194" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Alto</text>
      <rect x="525" y="175" width="50" height="28" rx="6" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1"/>
      <text x="550" y="194" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Baixo</text>
      <text x="410" y="218" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">folha nova</text>
      <text x="550" y="218" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">folha nova</text>

      <defs>
        <marker id="arr2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill={color}/>
        </marker>
      </defs>
    </svg>
  );
}

function NBLeavesSVG() {
  return (
    <svg width="580" height="260" viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      {/* root */}
      <polygon points="290,20 240,80 340,80" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="290" y="58" textAnchor="middle" fontSize="11" fill="var(--text-primary)">X₁?</text>
      {/* left branch */}
      <line x1="255" y1="82" x2="165" y2="128" stroke={color} strokeWidth="1.5"/>
      <polygon points="165,128 125,188 205,188" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="165" y="166" textAnchor="middle" fontSize="11" fill="var(--text-primary)">X₂?</text>
      {/* left-left NB leaf */}
      <line x1="140" y1="190" x2="90" y2="210" stroke={color} strokeWidth="1.2"/>
      <rect x="50" y="210" width="80" height="32" rx="8" fill={`rgba(249,115,22,0.14)`} stroke={color} strokeWidth="1.5"/>
      <text x="90" y="228" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>NB Classifier</text>
      {/* left-right MC leaf */}
      <line x1="190" y1="190" x2="240" y2="210" stroke={color} strokeWidth="1.2"/>
      <rect x="200" y="210" width="80" height="32" rx="8" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1"/>
      <text x="240" y="228" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Majority Class</text>
      {/* right branch */}
      <line x1="325" y1="82" x2="415" y2="128" stroke={color} strokeWidth="1.5"/>
      <polygon points="415,128 375,188 455,188" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="415" y="166" textAnchor="middle" fontSize="11" fill="var(--text-primary)">X₃?</text>
      {/* right-left NB leaf */}
      <line x1="390" y1="190" x2="340" y2="210" stroke={color} strokeWidth="1.2"/>
      <rect x="300" y="210" width="80" height="32" rx="8" fill={`rgba(249,115,22,0.14)`} stroke={color} strokeWidth="1.5"/>
      <text x="340" y="228" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>NB Classifier</text>
      {/* right-right NB leaf */}
      <line x1="440" y1="190" x2="490" y2="210" stroke={color} strokeWidth="1.2"/>
      <rect x="450" y="210" width="80" height="32" rx="8" fill={`rgba(249,115,22,0.14)`} stroke={color} strokeWidth="1.5"/>
      <text x="490" y="228" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>NB Classifier</text>

      <text x="290" y="10" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Folhas com NB activo (n ≥ nbThreshold) destacadas a azul</text>
    </svg>
  );
}

function ADWINTreeSVG() {
  return (
    <svg width="620" height="300" viewBox="0 0 620 270" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      {/* root */}
      <polygon points="310,20 265,75 355,75" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="310" y="55" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Raiz</text>
      {/* left subtree — healthy */}
      <line x1="278" y1="77" x2="185" y2="125" stroke={color} strokeWidth="1.5"/>
      <polygon points="185,125 145,180 225,180" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="185" y="160" textAnchor="middle" fontSize="10" fill="var(--text-primary)">Nó A</text>
      <line x1="160" y1="182" x2="120" y2="220" stroke={color} strokeWidth="1.2"/>
      <rect x="85" y="218" width="70" height="26" rx="6" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1"/>
      <text x="120" y="235" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">folha OK</text>
      <line x1="210" y1="182" x2="250" y2="220" stroke={color} strokeWidth="1.2"/>
      <rect x="215" y="218" width="70" height="26" rx="6" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1"/>
      <text x="250" y="235" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">folha OK</text>

      {/* right subtree — DRIFT */}
      <line x1="342" y1="77" x2="435" y2="125" stroke={color} strokeWidth="1.5"/>
      <polygon points="435,125 395,180 475,180" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x="435" y="155" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700">Nó B</text>
      <text x="435" y="170" textAnchor="middle" fontSize="9" fill="#f97316">⚠ drift</text>
      <line x1="410" y1="182" x2="370" y2="220" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
      <rect x="335" y="218" width="70" height="26" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
      <text x="370" y="235" textAnchor="middle" fontSize="10" fill="#f97316">podado</text>
      <line x1="460" y1="182" x2="500" y2="220" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
      <rect x="465" y="218" width="70" height="26" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2"/>
      <text x="500" y="235" textAnchor="middle" fontSize="10" fill="#f97316">podado</text>
      {/* new leaf */}
      <line x1="435" y1="182" x2="435" y2="258" stroke={color} strokeWidth="1.5"/>
      <rect x="400" y="253" width="70" height="26" rx="8" fill={`rgba(249,115,22,0.14)`} stroke={color} strokeWidth="1.5"/>
      <text x="435" y="270" textAnchor="middle" fontSize="10" fontWeight="600" fill={color}>nova folha</text>

      {/* ADWIN label */}
      <rect x="530" y="120" width="85" height="50" rx="6" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1"/>
      <text x="572" y="140" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>ADWIN</text>
      <text x="572" y="154" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">janela deslizante</text>
      <text x="572" y="166" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">detectou drift</text>
      <line x1="528" y1="145" x2="478" y2="152" stroke={color} strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arr3)"/>

      <defs>
        <marker id="arr3" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill={color}/>
        </marker>
      </defs>
    </svg>
  );
}

function HATAlternativeSVG() {
  return (
    <svg width="600" height="260" viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      {/* main tree */}
      <text x="180" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Árvore Principal</text>
      <polygon points="180,30 130,90 230,90" fill={`rgba(249,115,22,0.08)`} stroke={color} strokeWidth="1.5"/>
      <text x="180" y="68" textAnchor="middle" fontSize="11" fill="var(--text-primary)">Split A</text>
      <line x1="150" y1="92" x2="100" y2="140" stroke={color} strokeWidth="1.5"/>
      <line x1="210" y1="92" x2="260" y2="140" stroke={color} strokeWidth="1.5"/>
      <rect x="65" y="138" width="70" height="28" rx="6" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1"/>
      <text x="100" y="157" textAnchor="middle" fontSize="10" fill="var(--text-primary)">folha L1</text>
      <rect x="225" y="138" width="70" height="28" rx="6" fill={`rgba(249,115,22,0.06)`} stroke={color} strokeWidth="1"/>
      <text x="260" y="157" textAnchor="middle" fontSize="10" fill="var(--text-primary)">folha L2</text>

      {/* Alternative subtree */}
      <text x="450" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Sub-árvore Alternativa</text>
      <polygon points="450,30 400,90 500,90" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6,3"/>
      <text x="450" y="68" textAnchor="middle" fontSize="11" fill="#f97316">Split B?</text>
      <line x1="420" y1="92" x2="380" y2="140" stroke="#f97316" strokeWidth="1.2" strokeDasharray="5,3"/>
      <line x1="480" y1="92" x2="520" y2="140" stroke="#f97316" strokeWidth="1.2" strokeDasharray="5,3"/>
      <rect x="345" y="138" width="70" height="28" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="380" y="157" textAnchor="middle" fontSize="10" fill="#f97316">alt L1</text>
      <rect x="485" y="138" width="70" height="28" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="520" y="157" textAnchor="middle" fontSize="10" fill="#f97316">alt L2</text>

      {/* comparison arrow */}
      <line x1="295" y1="115" x2="390" y2="115" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x="342" y="110" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">comparar</text>
      <text x="342" y="125" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">accuracy</text>

      {/* switch arrow */}
      <path d="M450,95 Q450,200 280,200 Q200,200 200,175" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="6,4" markerEnd="url(#arr4)"/>
      <text x="360" y="215" textAnchor="middle" fontSize="10" fill={color}>substitui se alt. melhor</text>

      <defs>
        <marker id="arr4" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill={color}/>
        </marker>
      </defs>
    </svg>
  );
}

function AccuracyChartSVG() {
  const W = 560, H = 190;
  const padL = 55, padB = 40, padT = 28, padR = 25;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const nMax = 100000;

  // VFDT accuracy: converges towards 0.88 (C4.5 level)
  const vfdt = (n) => 0.55 + 0.33 * (1 - Math.exp(-n / 15000));
  // Baseline (random/trivial)
  const baseline = 0.60;
  // C4.5 reference
  const c45 = 0.88;

  const xS = (n) => padL + (n / nMax) * plotW;
  const yS = (v) => padT + plotH - (v - 0.5) / 0.45 * plotH;

  const vfdtPts = [];
  for (let n = 0; n <= nMax; n += 1000) {
    vfdtPts.push(`${xS(n).toFixed(1)},${yS(vfdt(n)).toFixed(1)}`);
  }

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%' }}>
      {/* axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.5"/>
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.5"/>
      {/* y ticks */}
      {[0.55, 0.65, 0.75, 0.85].map(v => (
        <g key={v}>
          <line x1={padL - 4} y1={yS(v)} x2={padL} y2={yS(v)} stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={padL - 7} y={yS(v) + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{(v * 100).toFixed(0)}%</text>
        </g>
      ))}
      {/* x ticks */}
      {[0, 25000, 50000, 75000, 100000].map(n => (
        <g key={n}>
          <line x1={xS(n)} y1={padT + plotH} x2={xS(n)} y2={padT + plotH + 4} stroke="var(--text-secondary)" strokeWidth="1"/>
          <text x={xS(n)} y={padT + plotH + 14} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{n === 0 ? '0' : `${n / 1000}k`}</text>
        </g>
      ))}
      {/* baseline */}
      <line x1={padL} y1={yS(baseline)} x2={padL + plotW} y2={yS(baseline)} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,4"/>
      <text x={padL + plotW + 2} y={yS(baseline) + 4} fontSize="9" fill="#94a3b8">Base</text>
      {/* C4.5 reference */}
      <line x1={padL} y1={yS(c45)} x2={padL + plotW} y2={yS(c45)} stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,4"/>
      <text x={padL + plotW + 2} y={yS(c45) + 4} fontSize="9" fill="#f97316">C4.5</text>
      {/* VFDT curve */}
      <polyline points={vfdtPts.join(' ')} fill="none" stroke={color} strokeWidth="2.5"/>
      {/* legend */}
      <line x1={padL + 20} y1={padT + 8} x2={padL + 40} y2={padT + 8} stroke={color} strokeWidth="2.5"/>
      <text x={padL + 44} y={padT + 12} fontSize="10" fill={color}>VFDT (prequential)</text>
      {/* labels */}
      <text x={padL + plotW / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Instâncias processadas</text>
      <text x="12" y={padT + plotH / 2} textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform={`rotate(-90,12,${padT + plotH / 2})`}>Accuracy</text>
      <text x={padL + plotW / 2} y={padT - 8} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--text-primary)">Accuracy Prequential — VFDT vs. Referências</text>
    </svg>
  );
}

/* ─── Main Component ───────────────────────────────────────── */

export default function DSM2() {
  return (
    <div style={S.page}>
      <Link to="/dsm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Stream Mining</Link>

      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Árvores de Hoeffding</h1>
      <p style={S.lead}>
        As Árvores de Hoeffding são o algoritmo de aprendizagem incremental mais influente em <em>data stream mining</em>.
        Usando uma garantia estatística formal — o <strong>Hoeffding Bound</strong> — permitem tomar decisões de divisão
        de nós com dados limitados, sem nunca rever instâncias passadas. São a base de todos os métodos de árvore
        para streams modernos, desde o VFDT original (Domingos &amp; Hulten, 2000) até às variantes adaptativas actuais.
      </p>

      {/* ── Section 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Do Batch ao Online — Árvores de Decisão</h2>
        <p style={S.p}>
          Algoritmos clássicos como o <strong>ID3</strong> e o <strong>C4.5</strong> constroem árvores de decisão
          exigindo acesso a todo o conjunto de dados em memória. Em cada nó, calculam o <em>Information Gain</em>
          (ou o rácio de ganho, no C4.5) sobre todas as instâncias para determinar o melhor atributo de divisão.
          Este modelo é impraticável em ambientes de stream: os dados chegam continuamente, não podem ser
          armazenados na totalidade e cada instância deve ser processada em tempo constante.
        </p>
        <p style={S.p}>
          A solução proposta por Domingos &amp; Hulten (2000) é o <strong>VFDT — Very Fast Decision Tree</strong>,
          que substitui a certeza de ver todos os dados por uma <em>garantia probabilística</em>: com probabilidade
          elevada, a decisão de divisão tomada com <InlineMath math={"n"} /> amostras é a mesma que seria tomada
          com o dataset completo. Essa garantia é formalizada pelo <strong>Hoeffding Bound</strong>.
        </p>
        <div style={S.diagram}>
          <BatchVsHoeffdingSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-0.5rem' }}>
          Comparação entre o paradigma batch (C4.5/ID3) e o paradigma incremental (VFDT/Hoeffding Tree)
        </p>
        <div style={S.note}>
          <strong>Memória vs. instâncias:</strong> Uma árvore de Hoeffding mantém apenas estatísticas de contagem
          por nó — não as instâncias individuais. A memória cresce com a árvore (nós × atributos × classes),
          nunca com o volume do stream.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Hoeffding Bound</h2>
        <p style={S.p}>
          O <strong>Hoeffding Bound</strong> (também chamado <em>Hoeffding's inequality</em>) é uma desigualdade
          de concentração: dado que uma variável aleatória com range <InlineMath math={"R"} /> é observada
          <InlineMath math={"n"} /> vezes de forma independente, a probabilidade de que a média amostral
          difira da média real em mais de <InlineMath math={"\\varepsilon"} /> é no máximo <InlineMath math={"\\delta"} />.
          Inversamente, com probabilidade <InlineMath math={"1-\\delta"} />, a média verdadeira está a menos
          de <InlineMath math={"\\varepsilon"} /> da média observada, onde:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\varepsilon = \\sqrt{\\frac{R^2 \\ln(1/\\delta)}{2n}}"} />
        </div>
        
          <strong>Parâmetros da fórmula:</strong>
          <ul style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2.1 }}>
            <li><strong><InlineMath math={"R"} /></strong> — range da variável aleatória; para o Information Gain com <InlineMath math={"k"} /> classes: <InlineMath math={"R = \\log_2 k"} /></li>
            <li><strong><InlineMath math={"\\delta"} /></strong> — probabilidade de erro tolerada (tipicamente <InlineMath math={"10^{-7}"} /> no MOA)</li>
            <li><strong><InlineMath math={"n"} /></strong> — número de instâncias observadas no nó folha actual</li>
            <li><strong><InlineMath math={"\\varepsilon"} /></strong> — margem de erro garantida com probabilidade <InlineMath math={"1-\\delta"} /></li>
          </ul>
        
        <p style={S.p}>
          A intuição prática é directa: se o melhor atributo <InlineMath math={"X_a"} /> superar o segundo
          melhor <InlineMath math={"X_b"} /> por mais do que <InlineMath math={"\\varepsilon"} />, então
          com probabilidade <InlineMath math={"\\geq 1-\\delta"} />, <InlineMath math={"X_a"} /> é também
          o melhor atributo na população completa. Podemos dividir <strong>sem ver mais dados</strong>.
          Tipicamente, a divisão acontece após centenas ou poucos milhares de instâncias — nunca milhões.
        </p>
        <div style={S.diagram}>
          <ConvergenceSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-0.5rem' }}>
          ε decresce com <InlineMath math={"\\sqrt{n}"} />; a partir de n* ≈ 600, ε cai abaixo do limiar τ = 0.05
        </p>
        <div style={S.note}>
          À medida que <InlineMath math={"n \\to \\infty"} />, <InlineMath math={"\\varepsilon \\to 0"} />.
          A árvore de Hoeffding converge para a árvore batch óptima — garante PAC-like para streams.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. VFDT — Very Fast Decision Tree</h2>
        <p style={S.p}>
          O <strong>VFDT</strong> (Domingos &amp; Hulten, 2000) é a implementação canónica das Árvores de Hoeffding.
          Mantém <em>estatísticas suficientes</em> em cada nó folha — contagens <InlineMath math={"n_{ijk}"} />
          (classe <InlineMath math={"j"} />, atributo <InlineMath math={"i"} />, valor <InlineMath math={"k"} />) —
          para calcular o critério de divisão sem guardar as instâncias originais. Dois mecanismos adicionais
          completam o algoritmo: o <strong>grace period</strong> e o <strong>tie-breaking</strong>.
        </p>

        <div style={S.diagram}>
          <VFDTNodeSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-0.5rem' }}>
          Nó folha a acumular contagens n_ijk até o Hoeffding Bound autorizar a divisão
        </p>

        

        
          <strong>Grace period (τ_g):</strong> o teste de Hoeffding é computacionalmente caro se avaliado
          em cada instância. Verifica-se apenas a cada <InlineMath math={"\\tau_g"} /> instâncias (default: 200).
          Aumentar τ_g reduz o overhead mas pode atrasar divisões necessárias.
          <br /><br />
          <strong>Tie-breaking (τ_tie):</strong> quando <InlineMath math={"IG(X_a) - IG(X_b) < \\varepsilon"} /> mas
          ambos <InlineMath math={"< \\tau_{tie}"} /> (os dois melhores são indistinguíveis mesmo com mais dados),
          divide-se imediatamente pelo melhor para evitar crescimento indefinido do nó.
        

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Default (MOA)</th>
              <th style={S.th}>Efeito de aumentar</th>
              <th style={S.th}>Efeito de diminuir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><InlineMath math={"\\delta"} /> (confiança)</td>
              <td style={S.td}><InlineMath math={"10^{-7}"} /></td>
              <td style={S.td}>Mais divisões prematuras; árvore maior</td>
              <td style={S.td}>Divisões mais conservadoras; árvore mais compacta</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math={"\\tau_{tie}"} /> (tie threshold)</td>
              <td style={S.td}>0.05</td>
              <td style={S.td}>Menos tie-breaks; nós crescem mais</td>
              <td style={S.td}>Tie-breaks mais frequentes; árvore mais rasa</td>
            </tr>
            <tr>
              <td style={S.td}><InlineMath math={"\\tau_g"} /> (grace period)</td>
              <td style={S.td}>200</td>
              <td style={S.td}>Menos verificações; processamento mais rápido</td>
              <td style={S.td}>Divisões mais atempadas; maior overhead</td>
            </tr>
          </tbody>
        </table>
        <p style={S.note}>
          O VFDT processa cada instância em tempo amortizado <InlineMath math={"O(\\log |T|)"} /> e usa memória
          proporcional ao número de folhas — nunca ao número de instâncias processadas. A divisão por nó
          ocorre tipicamente após centenas, não milhões, de instâncias.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Naive Bayes nas Folhas</h2>
        <p style={S.p}>
          Uma extensão importante do VFDT é usar <strong>Naive Bayes (NB)</strong> nas folhas em vez de classificação
          pela classe maioritária. Como as folhas acumulam contagens <InlineMath math={"n_{ijk}"} />, estas funcionam
          como estatísticas suficientes para um classificador NB sem custo adicional de memória.
          A estratégia <strong>Naïve Bayes Adaptativo (NBA)</strong> escolhe automaticamente entre os dois modos:
        </p>
        

        <div style={S.diagram}>
          <NBLeavesSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-0.5rem' }}>
          Folhas com NB activo (n ≥ nbThreshold) beneficiam das estatísticas já acumuladas para o teste de Hoeffding
        </p>

        
          <strong>Estratégias de classificação nas folhas:</strong>
          <ul style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2.1 }}>
            <li><strong>Majority Class:</strong> retorna a classe mais frequente — simples, robusto a ruído, seguro com poucos dados</li>
            <li><strong>Naive Bayes:</strong> calcula <InlineMath math={"P(y|x) \\propto P(y) \\prod_i P(x_i|y)"} /> com as contagens acumuladas</li>
            <li><strong>NB Adaptativo:</strong> escolhe NB se <InlineMath math={"n_l \\geq \\text{nbThreshold}"} />, MC caso contrário</li>
          </ul>
        
        <p style={S.note}>
          Em benchmarks com SEA e Hyperplane, o NB Adaptativo supera a classe maioritária em 2–5 pontos de accuracy,
          especialmente na fase inicial do stream e em zonas de fronteira de conceito onde as folhas ainda têm
          poucas instâncias mas os padrões de classe são informativos.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Adaptive Hoeffding Tree — ADWIN + VFDT</h2>
        <p style={S.p}>
          O VFDT básico não lida com <em>concept drift</em> — uma divisão feita mantém-se para sempre,
          mesmo que o conceito subjacente mude. A <strong>Hoeffding Adaptive Tree (HAT)</strong> integra
          o detector <strong>ADWIN</strong> em cada folha e nó da árvore para detectar e responder a drift
          de forma autónoma.
        </p>
        <div style={S.highlight}>
          <strong>Mecanismo de adaptação da HAT:</strong>
          <ol style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2.2 }}>
            <li>Cada folha mantém um detector ADWIN a monitorar a taxa de acerto local</li>
            <li>Se ADWIN detecta drift, o nó e os ramos ascendentes ficam marcados como suspeitos</li>
            <li>Uma sub-árvore alternativa cresce em paralelo a partir do nó suspeito</li>
            <li>Quando a sub-árvore alternativa supera a original em accuracy prequential, substitui-a</li>
            <li>Sub-árvores obsoletas são podadas automaticamente, libertando memória</li>
          </ol>
        </div>
        <div style={S.diagram}>
          <ADWINTreeSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-0.5rem' }}>
          Nó B com drift detectado pelo ADWIN (vermelho) — sub-árvore podada e substituída por nova folha
        </p>
        <p style={S.p}>
          O ADWIN mantém uma janela deslizante de tamanho variável que se contrai automaticamente quando
          detecta mudança estatística. A HAT beneficia desta propriedade: adapta-se a drift abrupto
          (substituição imediata de ramos) e gradual (contracção progressiva da janela ADWIN). A HAT é
          o classificador de árvore única mais usado no MOA e serve de base para os ensembles do Módulo 03.
        </p>
        
        <div style={S.note}>
          O parâmetro <code>-t 0.001</code> no HyperplaneGenerator controla a taxa de drift gradual
          (0.001 pesos rotacionados por instância). A HAT adapta-se sem necessidade de reiniciar a árvore.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Hoeffding Anytime Tree (HAT) — Sub-árvores Paralelas</h2>
        <p style={S.p}>
          A <strong>Hoeffding Anytime Tree</strong> leva a adaptação um passo mais longe: em vez de apenas
          reagir ao drift, mantém <em>sempre</em> sub-árvores alternativas a crescer em paralelo nos nós
          de divisão actuais. Assim que uma alternativa supera a árvore principal em accuracy prequential
          (calculada numa janela deslizante), a substituição ocorre automaticamente — sem esperar por um
          sinal de drift externo.
        </p>
        <div style={S.diagram}>
          <HATAlternativeSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-0.5rem' }}>
          Nó com split actual (azul) e sub-árvore alternativa a crescer em paralelo (roxo tracejado);
          a alternativa substitui quando a sua accuracy superar a do nó principal
        </p>
        <div style={S.highlight}>
          <strong>Diferenças entre HAT (ADWIN) e Hoeffding Anytime Tree:</strong>
          <ul style={{ margin: '0.6rem 0 0 1.2rem', lineHeight: 2.1 }}>
            <li><strong>HAT:</strong> reage ao drift quando ADWIN detecta mudança numa folha — reactivo</li>
            <li><strong>Anytime:</strong> mantém alternativas em todos os nós continuamente — proactivo</li>
            <li><strong>Custo:</strong> a variante Anytime usa mais memória (sub-árvores paralelas por nó)</li>
            <li><strong>Vantagem:</strong> sem latência de detecção — substitui imediatamente quando necessário</li>
          </ul>
        </div>
        <p style={S.p}>
          Em conjuntos com drift frequente e abrupto, a variante Anytime apresenta menor queda de accuracy
          no momento do drift, à custa de maior consumo de memória. Em streams estacionários, o overhead
          de manter alternativas é desperdiçado — a HAT com ADWIN é geralmente preferível.
        </p>
      </div>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Avaliação e Comparação</h2>
        <p style={S.p}>
          A avaliação de classificadores de stream usa tipicamente a <strong>accuracy prequential</strong>
          (também chamada <em>test-then-train</em>): cada instância é primeiro classificada (testada) e
          só depois usada para actualizar o modelo (treino). Não há separação treino/teste — cada instância
          serve ambos os propósitos, garantindo que o modelo é sempre avaliado em dados que ainda não viu.
        </p>
        <div style={S.diagram}>
          <AccuracyChartSVG />
        </div>
        <p style={{ ...S.p, fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-0.5rem' }}>
          Accuracy prequential do VFDT a convergir para o nível do C4.5 batch à medida que n cresce;
          baseline = classificador maioritário estático
        </p>
        <p style={S.p}>
          O gráfico ilustra a convergência assimptótica: com poucos dados, o VFDT tem accuracy reduzida
          (árvore ainda pequena, divisões ainda não tomadas). À medida que o stream avança, a accuracy
          converge para o nível do C4.5 — sem nunca ter visto o dataset completo em simultâneo.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Algoritmo</th>
              <th style={S.th}>Drift</th>
              <th style={S.th}>Memória</th>
              <th style={S.th}>Velocidade</th>
              <th style={S.th}>Accuracy (stream)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>C4.5 / ID3</strong></td>
              <td style={S.td}>Sem suporte</td>
              <td style={S.td}>O(N) — todo o dataset</td>
              <td style={S.td}>Lento (batch)</td>
              <td style={S.td}>Alta (referência)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>VFDT</strong></td>
              <td style={S.td}>Sem suporte</td>
              <td style={S.td}>O(|árvore|)</td>
              <td style={S.td}>Muito rápido</td>
              <td style={S.td}>Converge para C4.5</td>
            </tr>
            <tr>
              <td style={S.td}><strong>VFDT + NBA</strong></td>
              <td style={S.td}>Sem suporte</td>
              <td style={S.td}>O(|árvore|)</td>
              <td style={S.td}>Muito rápido</td>
              <td style={S.td}>+2–5% vs. VFDT base</td>
            </tr>
            <tr>
              <td style={S.td}><strong>HAT (ADWIN)</strong></td>
              <td style={S.td}>Sim — reactivo</td>
              <td style={S.td}>O(|árvore| × 2)</td>
              <td style={S.td}>Rápido</td>
              <td style={S.td}>Alta, adapta-se ao drift</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Hoeffding Anytime</strong></td>
              <td style={S.td}>Sim — proactivo</td>
              <td style={S.td}>O(|árvore| × k)</td>
              <td style={S.td}>Moderado</td>
              <td style={S.td}>Melhor no drift abrupto</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          <strong>Regra prática:</strong> para streams estacionários, usar VFDT + NBA; para streams com drift
          moderado, HAT com ADWIN; para drift abrupto e frequente, considerar ensembles (Módulo 03).
          A complexidade de memória por instância é sempre O(1) em todas as variantes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
              <h2 style={{ ...S.h2, marginBottom: '1rem' }}>8. Síntese do Módulo</h2>
<div style={{ ...S.highlight, borderRadius: 12, padding: '1.5rem' }}>
        <p style={{ ...S.p, marginBottom: '0.5rem' }}>Pontos-chave das Árvores de Hoeffding:</p>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
          <li>
            O <strong>Hoeffding Bound</strong> <InlineMath math={"\\varepsilon = \\sqrt{R^2 \\ln(1/\\delta) / (2n)}"} /> garante
            que a divisão tomada com <InlineMath math={"n"} /> amostras coincide com a decisão batch com probabilidade <InlineMath math={"\\geq 1-\\delta"} />
          </li>
          <li>
            O <strong>VFDT</strong> mantém apenas contagens <InlineMath math={"n_{ijk}"} /> por folha — memória independente do número
            de instâncias processadas; velocidade O(log |T|) por instância
          </li>
          <li>
            <strong>Grace period</strong> e <strong>tie-breaking</strong> controlam quando e como dividir nós;
            parametrização cuidadosa equilibra velocidade e qualidade das divisões
          </li>
          <li>
            <strong>Naive Bayes Adaptativo</strong> nas folhas melhora accuracy em 2–5%, especialmente com poucos dados por folha
            e em zonas de fronteira de conceito
          </li>
          <li>
            A <strong>HAT</strong> combina VFDT com ADWIN para adaptação reactiva a concept drift; a variante <strong>Anytime</strong>
            mantém alternativas paralelas para adaptação proactiva
          </li>
          <li>
            Com <InlineMath math={"n \\to \\infty"} />, o VFDT converge para a árvore batch óptima — garantia PAC-like
            para streams de dados potencialmente ilimitados
          </li>
          <li>
            As Árvores de Hoeffding são a base dos <strong>ensembles de stream</strong> (Bagging, Boosting, ADACC)
            que serão abordados no Módulo 03
          </li>
        </ul>
      </div>
    </div>
  );
}
