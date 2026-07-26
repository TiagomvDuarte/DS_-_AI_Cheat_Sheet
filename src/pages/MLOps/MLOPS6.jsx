import React, { useState } from 'react';
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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// ===== DIAGRAM 1: Drift Taxonomy Tree =====
const DriftTaxonomyDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Taxonomia de Drift — Árvore de Classificação</p>
    <svg viewBox="0 0 680 300" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-tax6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Root */}
      <rect x="225" y="10" width="230" height="44" rx="9" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x="340" y="30" textAnchor="middle" fill={color} fontSize="12" fontWeight="800">Mudança de Distribuição</text>
      <text x="340" y="46" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">P(X,Y) em produção ≠ P(X,Y) em treino</text>

      {/* Left branch: Data Drift */}
      <path d="M290 54 L160 100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-tax6)" />
      <rect x="60" y="100" width="200" height="44" rx="9" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="160" y="120" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Data Drift</text>
      <text x="160" y="136" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">P(X) muda — inputs mudam</text>

      {/* Right branch: Concept Drift */}
      <path d="M390 54 L510 100" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-tax6)" />
      <rect x="410" y="100" width="200" height="44" rx="9" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.8" />
      <text x="510" y="120" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="700">Concept Drift</text>
      <text x="510" y="136" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">P(Y|X) muda — relação muda</text>

      {/* Left sub-branches */}
      <path d="M110 144 L80 185" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-tax6)" />
      <rect x="10" y="185" width="140" height="38" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.3" />
      <text x="80" y="202" textAnchor="middle" fill="#4a9eed" fontSize="9.5" fontWeight="700">Covariate Shift</text>
      <text x="80" y="216" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">P(X) muda, P(Y|X) igual</text>

      <path d="M210 144 L240 185" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-tax6)" />
      <rect x="160" y="185" width="150" height="38" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.3" />
      <text x="235" y="202" textAnchor="middle" fill="#4a9eed" fontSize="9.5" fontWeight="700">Prior Probability Shift</text>
      <text x="235" y="216" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">P(Y) muda (frequência de classes)</text>

      {/* Recurring line drawn FIRST (behind all boxes) */}
      <path d="M510 144 L510 250" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-tax6)" />

      {/* Right sub-branches — 4 types */}
      <path d="M450 144 L400 185" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-tax6)" />
      <rect x="340" y="185" width="120" height="38" rx="7" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.3" />
      <text x="400" y="203" textAnchor="middle" fill="#0284c7" fontSize="9.5" fontWeight="700">Sudden</text>
      <text x="400" y="217" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">mudança abrupta</text>

      <path d="M510 144 L500 185" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-tax6)" />
      <rect x="466" y="185" width="108" height="38" rx="7" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.3" />
      <text x="520" y="203" textAnchor="middle" fill="#0284c7" fontSize="9.5" fontWeight="700">Gradual</text>
      <text x="520" y="217" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">mudança lenta</text>

      <path d="M560 144 L595 185" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr-tax6)" />
      <rect x="578" y="185" width="92" height="38" rx="7" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.3" />
      <text x="624" y="203" textAnchor="middle" fill="#0284c7" fontSize="9.5" fontWeight="700">Incremental</text>
      <text x="624" y="217" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">stepwise</text>

      {/* Recurring box drawn LAST (on top) */}
      <rect x="430" y="250" width="160" height="38" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.3" />
      <text x="510" y="268" textAnchor="middle" fill="#4a9eed" fontSize="9.5" fontWeight="700">Recurring</text>
      <text x="510" y="282" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">conceito reaparece periodicamente</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      A distinção fundamental é entre <strong>Data Drift</strong> (os inputs mudam mas a relação entre inputs
      e outputs mantém-se) e <strong>Concept Drift</strong> (a própria relação entre inputs e outputs muda).
      Esta distinção determina como se deve reagir: data drift pode ser tratado com retraining nos novos dados;
      concept drift pode exigir reanálise do problema e das labels.
    </p>
  </div>
);

// ===== DIAGRAM 2: 4 Drift Type Patterns — mini time series =====
const DriftTypesDiagram = () => {
  const W = 130, H = 60, pad = 12;
  const panels = [
    {
      label: 'Sudden', c: '#4a9eed', ex: 'Ex: regulação muda', points: [
        [0,45],[1,44],[2,45],[3,44],[4,45],[5,44],[5.1,20],[6,20],[7,21],[8,20],[9,21],[10,20]
      ]
    },
    {
      label: 'Gradual', c: '#4a9eed', ex: 'Ex: tendência sazonal', points: [
        [0,45],[1,44],[2,42],[3,43],[4,40],[5,38],[6,35],[7,30],[8,26],[9,22],[10,20]
      ]
    },
    {
      label: 'Incremental', c: '#4a9eed', ex: 'Ex: mudança de hábitos', points: [
        [0,45],[1,45],[2,38],[2.1,38],[3,38],[4,30],[4.1,30],[5,30],[6,22],[6.1,22],[7,22],[8,20],[9,20],[10,20]
      ]
    },
    {
      label: 'Recurring', c: '#4a9eed', ex: 'Ex: sazonalidade', points: [
        [0,45],[1,44],[2,30],[3,20],[4,30],[5,44],[6,45],[7,30],[8,20],[9,30],[10,44]
      ]
    },
  ];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Os 4 Padrões Temporais de Drift</p>
      <svg viewBox="0 0 580 120" style={{ maxWidth: '100%', height: 'auto' }}>
        {panels.map(({ label, c, ex, points }, pi) => {
          const ox = pi * 145 + 5;
          const toX = (v) => ox + pad + (v / 10) * (W - 2 * pad);
          const toY = (v) => pad + ((50 - v) / 40) * (H - 2 * pad);
          const d = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${toX(x).toFixed(1)},${toY(y).toFixed(1)}`).join(' ');
          return (
            <g key={label}>
              {/* panel bg */}
              <rect x={ox} y="0" width={W} height={H + 10} rx="7" fill={`${c}08`} stroke={`${c}40`} strokeWidth="1" />
              {/* axis */}
              <line x1={ox + pad} y1={H - pad + 10} x2={ox + W - pad} y2={H - pad + 10} stroke="var(--text-secondary)" strokeWidth="0.8" />
              {/* line */}
              <path d={d} fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" />
              {/* label */}
              <text x={ox + W / 2} y={H + 20} textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{label}</text>
              <text x={ox + W / 2} y={H + 32} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{ex}</text>
            </g>
          );
        })}
        {/* x-axis label */}
        <text x="290" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Tempo →</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
        Cada padrão requer uma estratégia de detecção e resposta diferente. O drift <strong>Sudden</strong> é
        o mais fácil de detectar (mudança abrupta nos dados) mas o mais difícil de antecipar. O drift
        <strong> Recurring</strong> é previsível mas requer que o modelo "lembre" o conceito antigo
        quando o ciclo recomeça — ensambles por contexto são a solução habitual.
      </p>
    </div>
  );
};

// ===== DIAGRAM 3: Covariate Shift — 2D feature space =====
const CovariateShiftDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Data Drift (Covariate Shift) — Distribuições de Features</p>
    <svg viewBox="0 0 580 240" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cov6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Panel A — Training distribution */}
      <rect x="20" y="10" width="250" height="200" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="145" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Distribuição de Treino</text>

      {/* Axes */}
      <line x1="50" y1="190" x2="250" y2="190" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-cov6)" />
      <line x1="50" y1="190" x2="50" y2="40" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-cov6)" />
      <text x="245" y="205" fill="var(--text-secondary)" fontSize="9">Feature 1</text>
      <text x="35" y="40" fill="var(--text-secondary)" fontSize="9" transform="rotate(-90 35 120)">Feature 2</text>

      {/* Training cloud — blue ellipse */}
      <ellipse cx="120" cy="130" rx="55" ry="40" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="120" y="70" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Dados de Treino</text>
      <text x="120" y="80" textAnchor="middle" fill="#4a9eed" fontSize="8">P_train(X)</text>

      {/* Some dots */}
      {[[100,120],[110,130],[130,125],[115,140],[105,115],[125,135],[135,120],[108,145]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#4a9eed" opacity="0.6" />
      ))}

      {/* Decision boundary */}
      <line x1="60" y1="80" x2="210" y2="185" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="175" y="155" fill="#4a9eed" fontSize="8" fontStyle="italic">fronteira de decisão</text>

      {/* Panel B — Production distribution */}
      <rect x="310" y="10" width="250" height="200" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="435" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Distribuição em Produção</text>

      <line x1="340" y1="190" x2="540" y2="190" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-cov6)" />
      <line x1="340" y1="190" x2="340" y2="40" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-cov6)" />
      <text x="535" y="205" fill="var(--text-secondary)" fontSize="9">Feature 1</text>
      <text x="325" y="40" fill="var(--text-secondary)" fontSize="9" transform="rotate(-90 325 120)">Feature 2</text>

      {/* Training ghost */}
      <ellipse cx="410" cy="130" rx="55" ry="40" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1" strokeDasharray="4,3" />
      <text x="410" y="143" textAnchor="middle" fill="#4a9eed" fontSize="7.5" opacity="0.5">treino (ref.)</text>

      {/* Production cloud — shifted */}
      <ellipse cx="480" cy="80" rx="45" ry="35" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="2" />
      <text x="530" y="40" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Produção</text>
      <text x="530" y="50" textAnchor="middle" fill="#4a9eed" fontSize="8">P_prod(X)</text>

      {[[465,72],[480,82],[490,70],[475,88],[492,78],[462,85],[485,65]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#4a9eed" opacity="0.6" />
      ))}

      {/* Decision boundary — same */}
      <line x1="350" y1="80" x2="500" y2="185" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />

      {/* Gap arrow */}
      <path d="M410 130 Q445 105 475 85" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arr-cov6)" />
      <text x="410" y="102" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">covariate shift</text>

      {/* Annotations */}
      <text x="290" y="230" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">P(Y|X) mantém-se igual — fronteira de decisão correcta mas inputs em zona "estranha"</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      No covariate shift, a fronteira de decisão aprendida durante treino é <strong>ainda correcta</strong> —
      mas os inputs de produção chegam em zonas do espaço de features onde o modelo tem poucos ou nenhuns
      exemplos de treino. O modelo extrapola em vez de interpolar, com resultados imprevisíveis.
      Detecção: testes estatísticos por feature (KS test, chi-square) ou PSI.
    </p>
  </div>
);

// ===== DIAGRAM 4: Concept Drift — decision boundary shifts =====
const ConceptDriftDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Concept Drift — A Fronteira de Decisão Muda</p>
    <svg viewBox="0 0 580 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cd6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Time T1 */}
      <rect x="20" y="10" width="250" height="190" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="145" y="30" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Tempo T1 — Treino</text>
      <line x1="50" y1="180" x2="250" y2="180" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="50" y1="180" x2="50" y2="40" stroke="var(--text-secondary)" strokeWidth="1" />

      {/* Class A dots T1 */}
      {[[80,80],[90,95],[70,110],[100,75],[85,120],[75,60]].map(([cx,cy],i) => (
        <circle key={'a1'+i} cx={cx} cy={cy} r="6" fill="#4a9eed" opacity="0.7" />
      ))}
      {/* Class B dots T1 */}
      {[[170,100],[185,80],[200,120],[160,130],[190,60],[175,145]].map(([cx,cy],i) => (
        <circle key={'b1'+i} cx={cx} cy={cy} r="6" fill="#4a9eed" opacity="0.7" />
      ))}

      {/* Decision boundary T1 — vertical-ish */}
      <line x1="130" y1="45" x2="130" y2="175" stroke={color} strokeWidth="2.5" />
      <text x="130" y="193" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">fronteira T1</text>

      <text x="90" y="170" fill="#4a9eed" fontSize="9" fontWeight="700">Classe A</text>
      <text x="170" y="170" fill="#4a9eed" fontSize="9" fontWeight="700">Classe B</text>

      {/* Time T2 */}
      <rect x="310" y="10" width="250" height="190" rx="10" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="435" y="30" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="700">Tempo T2 — Produção</text>
      <line x1="340" y1="180" x2="540" y2="180" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="340" y1="180" x2="340" y2="40" stroke="var(--text-secondary)" strokeWidth="1" />

      {/* Same feature positions but labels SWAPPED — concept drift */}
      {[[380,80],[390,95],[370,110],[400,75],[385,120],[375,60]].map(([cx,cy],i) => (
        <circle key={'a2'+i} cx={cx} cy={cy} r="6" fill="#4a9eed" opacity="0.7" />
      ))}
      {[[470,100],[485,80],[500,120],[460,130],[490,60],[475,145]].map(([cx,cy],i) => (
        <circle key={'b2'+i} cx={cx} cy={cy} r="6" fill="#4a9eed" opacity="0.7" />
      ))}

      {/* Old boundary T1 (now wrong) */}
      <line x1="420" y1="45" x2="420" y2="175" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" opacity="0.4" />
      <text x="420" y="45" textAnchor="middle" fill={color} fontSize="8" opacity="0.5">antiga (errada)</text>

      {/* New correct boundary */}
      <line x1="430" y1="45" x2="430" y2="175" stroke="#0284c7" strokeWidth="2.5" />
      <text x="430" y="193" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">fronteira T2</text>

      {/* Arrow showing shift */}
      <path d="M270 100 L308 100" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arr-cd6)" />
      <text x="289" y="92" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="700">drift</text>

      <text x="380" y="170" fill="#4a9eed" fontSize="9" fontWeight="700">Classe B</text>
      <text x="475" y="170" fill="#4a9eed" fontSize="9" fontWeight="700">Classe A</text>

      <text x="290" y="215" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">P(X) mantém-se — P(Y|X) mudou completamente</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      O concept drift é insidioso porque a distribuição dos inputs pode parecer normal — é a
      <strong> relação entre inputs e outputs</strong> que mudou. O modelo aplica a fronteira de decisão
      antiga (T1) a um mundo onde essa fronteira já não é correcta (T2). Para detectar concept drift
      é necessário ter ground truth — sem ele, o modelo parece saudável mas está sistematicamente errado.
    </p>
  </div>
);

// ===== DIAGRAM 5: Detection Algorithms =====
const DriftDetectionAlgorithmsDiagram = () => {
  const W = 540, H = 160, padL = 30, padB = 30, padT = 15, padR = 20;
  const toX = (v) => padL + (v / 20) * (W - padL - padR);
  const toY = (v, base, scale) => H - padB - ((v - base) / scale) * (H - padT - padB);

  // ADWIN line — shrinks after drift at x=12
  const adwinPts = Array.from({length: 21}, (_, i) => {
    const x = i;
    const y = x < 12 ? 0.05 + Math.sin(i * 0.8) * 0.02 : 0.05 + Math.sin(i * 0.8) * 0.02 + (x - 12) * 0.03;
    return [x, y];
  });
  const adwinPath = adwinPts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${toX(x).toFixed(1)},${toY(y, 0, 0.4).toFixed(1)}`).join(' ');

  // DDM — error rate rises
  const ddmPts = Array.from({length: 21}, (_, i) => {
    const x = i;
    const y = x < 10 ? 0.05 + i * 0.002 : 0.07 + (x - 10) * 0.025;
    return [x, y];
  });
  const ddmPath = ddmPts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${toX(x).toFixed(1)},${toY(y, 0, 0.4).toFixed(1)}`).join(' ');

  // KSWIN — stat spikes
  const ksPts = Array.from({length: 21}, (_, i) => {
    const x = i;
    const y = x === 12 ? 0.35 : x === 13 ? 0.28 : 0.05 + Math.abs(Math.sin(i * 1.2)) * 0.06;
    return [x, y];
  });
  const ksPath = ksPts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${toX(x).toFixed(1)},${toY(y, 0, 0.4).toFixed(1)}`).join(' ');

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Algoritmos de Detecção de Drift — Comportamento ao Longo do Tempo</p>
      <svg viewBox={`0 0 ${W + 40} ${H + 30}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr-alg6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-alg6)" />
        <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={W / 2} y={H + 12} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Tempo (stream de dados)</text>
        <text x="12" y={H / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="8" transform={`rotate(-90 12 ${H/2})`}>Estatística</text>

        {/* Drift event line */}
        <line x1={toX(12)} y1={padT} x2={toX(12)} y2={H - padB} stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={toX(12)} y={padT + 10} textAnchor="middle" fill="#4a9eed" fontSize="8.5" fontWeight="700">drift real</text>

        {/* Threshold line */}
        <line x1={padL} y1={toY(0.2, 0, 0.4)} x2={W - padR} y2={toY(0.2, 0, 0.4)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
        <text x={W - padR - 2} y={toY(0.2, 0, 0.4) - 3} textAnchor="end" fill="var(--text-secondary)" fontSize="7.5">threshold</text>

        {/* ADWIN */}
        <path d={adwinPath} fill="none" stroke="#4a9eed" strokeWidth="2" />
        <text x={toX(20)} y={toY(adwinPts[18][1], 0, 0.4) - 8} fill="#4a9eed" fontSize="8.5" fontWeight="700">ADWIN</text>

        {/* DDM */}
        <path d={ddmPath} fill="none" stroke="#0284c7" strokeWidth="2" />
        <text x={toX(18)} y={toY(ddmPts[18][1], 0, 0.4) - 8} fill="#0284c7" fontSize="8.5" fontWeight="700">DDM</text>

        {/* KSWIN */}
        <path d={ksPath} fill="none" stroke={color} strokeWidth="2" />
        <text x={toX(14)} y={toY(ksPts[12][1], 0, 0.4) - 10} fill={color} fontSize="8.5" fontWeight="700">KSWIN</text>

        {/* Alert markers */}
        <circle cx={toX(15)} cy={toY(ddmPts[15][1], 0, 0.4)} r="5" fill="#0284c7" opacity="0.9" />
        <text x={toX(15)} y={toY(ddmPts[15][1], 0, 0.4) - 8} textAnchor="middle" fill="#0284c7" fontSize="7.5" fontWeight="700">alerta</text>

        <circle cx={toX(13)} cy={toY(ksPts[13][1], 0, 0.4)} r="5" fill={color} opacity="0.9" />
        <text x={toX(13) + 20} y={toY(ksPts[13][1], 0, 0.4)} fill={color} fontSize="7.5" fontWeight="700">alerta</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
        ADWIN rastreia a média de um stream com uma janela adaptativa — quando detecta mudança estatística
        significativa, contrai a janela para se adaptar. DDM monitoriza a taxa de erro, disparando quando
        sobe acima de um threshold. KSWIN aplica o teste de Kolmogorov-Smirnov entre uma janela histórica
        e uma janela recente, disparando quando as distribuições divergem significativamente.
      </p>
    </div>
  );
};

// ===== DIAGRAM 6: Drift Response Flowchart =====
const DriftResponseDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Como Responder ao Drift — Árvore de Decisão</p>
    <svg viewBox="0 0 620 360" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-resp6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Root */}
      <rect x="205" y="10" width="210" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="2" />
      <text x="310" y="35" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Drift Detectado</text>

      <path d="M310 50 L310 75" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />

      {/* Type? */}
      <polygon points="310,78 430,105 310,132 190,105" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="310" y="101" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Que tipo</text>
      <text x="310" y="116" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">de drift?</text>

      {/* Data Drift only */}
      <path d="M190 105 L100 105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />
      <text x="145" y="97" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Data drift</text>
      <rect x="10" y="85" width="90" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="55" y="102" textAnchor="middle" fill="#4a9eed" fontSize="8.5" fontWeight="700">Retreinar</text>
      <text x="55" y="116" textAnchor="middle" fill="#4a9eed" fontSize="8.5">nos novos dados</text>

      {/* Concept drift */}
      <path d="M430 105 L520 105" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />
      <text x="475" y="97" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Concept drift</text>
      <rect x="520" y="85" width="90" height="40" rx="8" fill="rgba(2,132,199,0.10)" stroke="#0284c7" strokeWidth="1.5" />
      <text x="565" y="102" textAnchor="middle" fill="#0284c7" fontSize="8.5" fontWeight="700">Rever labels</text>
      <text x="565" y="116" textAnchor="middle" fill="#0284c7" fontSize="8.5">+ retreinar</text>

      {/* Both */}
      <path d="M310 132 L310 155" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />
      <text x="325" y="147" fill="var(--text-secondary)" fontSize="9">Ambos</text>

      {/* Severity decision */}
      <polygon points="310,158 430,185 310,212 190,185" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="310" y="181" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Severidade</text>
      <text x="310" y="196" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">do drift?</text>

      {/* Mild */}
      <path d="M190 185 L110 185" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />
      <text x="150" y="177" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Leve</text>
      <rect x="10" y="165" width="100" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="60" y="182" textAnchor="middle" fill="#4a9eed" fontSize="8.5" fontWeight="700">Reweighting</text>
      <text x="60" y="196" textAnchor="middle" fill="#4a9eed" fontSize="8.5">de amostras</text>

      {/* Severe */}
      <path d="M430 185 L510 185" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />
      <text x="470" y="177" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Grave</text>
      <rect x="510" y="165" width="100" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="560" y="182" textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">Full pipeline</text>
      <text x="560" y="196" textAnchor="middle" fill={color} fontSize="8.5">re-evaluation</text>

      <path d="M310 212 L310 235" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />

      {/* Ensemble option */}
      <rect x="190" y="235" width="240" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="310" y="252" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Ensemble por contexto?</text>
      <text x="310" y="267" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">Modelo por época / segmento / conceito</text>

      <path d="M310 275 L310 298" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-resp6)" />
      <rect x="170" y="298" width="280" height="40" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.8" />
      <text x="310" y="315" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Validar novo modelo antes de deploy</text>
      <text x="310" y="330" textAnchor="middle" fill="var(--text-secondary)" fontSize="8.5">shadow mode → canary → full rollout</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', textAlign: 'left' }}>
      A resposta ao drift deve ser proporcional ao tipo e severidade. Concept drift grave pode exigir
      reanálise completa do problema — não apenas retraining. Nenhum modelo novo vai para produção
      sem validação progressiva: shadow mode (corre em paralelo sem afetar utilizadores), canary
      (% pequena do tráfego), e só depois full rollout.
    </p>
  </div>
);

// ===== DIAGRAM 7: Statistical Tests Overview =====
const StatisticalTestsDiagram = () => {
  const tests = [
    { name: 'KS Test', full: 'Kolmogorov-Smirnov', type: 'Contínua', sensitivity: 'Alta', cost: 'Baixo', note: 'Compara CDFs. Não assume distribuição. Ideal para features numéricas.' },
    { name: 'Chi-Square', full: 'Chi-Square Test', type: 'Categórica', sensitivity: 'Média', cost: 'Baixo', note: 'Compara frequências observadas vs. esperadas. Para features discretas.' },
    { name: 'PSI', full: 'Population Stability Index', type: 'Qualquer', sensitivity: 'Média-Alta', cost: 'Baixo', note: 'Padrão da indústria financeira. PSI > 0.2 = drift grave.' },
    { name: 'MMD', full: 'Maximum Mean Discrepancy', type: 'Alta dimensão', sensitivity: 'Alta', cost: 'Alto', note: 'Detecta drift em espaços de alta dimensão. Usado com kernels.' },
    { name: 'ADWIN', full: 'Adaptive Windowing', type: 'Stream', sensitivity: 'Alta', cost: 'Médio', note: 'Online. Janela adaptativa. Sem necessidade de definir tamanho de janela.' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Testes Estatísticos para Detecção de Drift</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', textAlign: 'left' }}>
        {tests.map(({ name, full, type, sensitivity, cost, note }) => (
          <div key={name} style={{ display: 'flex', gap: '0.75rem', background: 'var(--bg-primary)', borderRadius: 8, padding: '0.65rem 0.85rem', border: `1px solid var(--card-border)`, alignItems: 'flex-start' }}>
            <div style={{ minWidth: 60 }}>
              <span style={{ fontWeight: 800, color, fontSize: '0.85rem', fontFamily: 'monospace' }}>{name}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                <span style={{ background: 'rgba(74,158,237,0.10)', color, fontSize: '0.75rem', fontWeight: 600, padding: '0.1rem 0.45rem', borderRadius: 5 }}>{type}</span>
                <span style={{ background: 'rgba(16,185,129,0.08)', color: '#4a9eed', fontSize: '0.75rem', fontWeight: 600, padding: '0.1rem 0.45rem', borderRadius: 5 }}>sensibilidade: {sensitivity}</span>
                <span style={{ background: 'rgba(2,132,199,0.08)', color: '#4a9eed', fontSize: '0.75rem', fontWeight: 600, padding: '0.1rem 0.45rem', borderRadius: 5 }}>custo: {cost}</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== DIAGRAM: Adaptive Random Forest =====
const ARFDiagram = () => {
  const rgb = '74,158,237';
  const trees = [
    { label: 'HT 1', warn: false },
    { label: 'HT 2', warn: false },
    { label: 'HT 3', warn: true },
    { label: 'HT 4', warn: false },
    { label: 'HT 5', warn: false },
  ];
  const W = 620, tW = 86, tH = 38, adH = 18, gap = 20;
  const totalTW = trees.length * tW + (trees.length - 1) * gap;
  const startX = (W - totalTW) / 2;
  const tY = 14;
  const voteY = tY + tH + adH + 70;
  const ht3i = 2;
  const ht3cx = startX + ht3i * (tW + gap) + tW / 2;
  const bgBoxY = tY + tH + adH + 12;
  const bgBoxH = 36;
  return (
    <div style={S.diagram}>
      <svg viewBox={`0 0 ${W} ${voteY + 54}`} width="100%" style={{ display: 'block' }}>
        <defs>
          <marker id="arfA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0,7 3.5,0 7" fill="var(--text-secondary)" />
          </marker>
          <marker id="arfAO" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0,7 3.5,0 7" fill={color} />
          </marker>
        </defs>

        <text x={W / 2} y={tY - 5} textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
          ← instâncias do stream recebidas por todas as árvores →
        </text>

        {trees.map((t, i) => {
          const tx = startX + i * (tW + gap);
          const cx = tx + tW / 2;
          return (
            <g key={i}>
              <rect x={tx} y={tY} width={tW} height={tH} rx="7"
                fill={t.warn ? 'rgba(74,158,237,0.18)' : `rgba(${rgb},0.08)`}
                stroke={t.warn ? '#4a9eed' : color}
                strokeWidth={t.warn ? 2.2 : 1.5} />
              <text x={cx} y={tY + tH / 2 + 5} textAnchor="middle" fontSize="12" fill={color} fontWeight="700">
                {t.label}
              </text>
              <rect x={tx + 8} y={tY + tH + 3} width={tW - 16} height={adH} rx="4"
                fill={t.warn ? 'rgba(74,158,237,0.15)' : 'rgba(74,158,237,0.06)'}
                stroke={t.warn ? '#4a9eed' : 'rgba(74,158,237,0.25)'}
                strokeWidth="1" />
              <text x={cx} y={tY + tH + adH - 3} textAnchor="middle" fontSize="8" fill={t.warn ? '#4a9eed' : 'var(--text-secondary)'}>
                {t.warn ? 'ADWIN aviso' : 'ADWIN ✓'}
              </text>
              <line x1={cx} y1={tY + tH + adH + 3} x2={cx} y2={voteY}
                stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arfA)" />
            </g>
          );
        })}

        <line x1={ht3cx + tW / 2 + 2} y1={tY + tH / 2} x2={ht3cx + tW / 2 + 5} y2={bgBoxY + bgBoxH / 2 - 17}
          stroke="#4a9eed" strokeWidth="1.2" strokeDasharray="4,3" />
        <rect x={ht3cx + tW / 2 - 30} y={bgBoxY} width={tW} height={bgBoxH} rx="7"
          fill="rgba(74,158,237,0.07)" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={ht3cx + tW / 2 - 30 + tW / 2} y={bgBoxY + 14} textAnchor="middle" fontSize="10" fill="#4a9eed" fontWeight="700">
          HT 3 (bg)
        </text>
        <text x={ht3cx + tW / 2 - 30 + tW / 2} y={bgBoxY + 27} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">
          a crescer…
        </text>

        <rect x={W / 2 - 250} y={voteY} width="500" height="38" rx="7"
          fill={`rgba(${rgb},0.15)`} stroke={color} strokeWidth="1.8" />
        <text x={W / 2} y={voteY + 24} textAnchor="middle" fontSize="13" fill={color} fontWeight="700">
          Voto Maj.
        </text>

        <text x={W / 2} y={voteY + 52} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">
          Quando drift confirmado: HT 3 (bg) substitui HT 3
        </text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Arquitectura ARF: 5 Hoeffding Trees com ADWIN individual. HT 3 em estado de aviso (azul) com
        árvore background (tracejado) a crescer. Após confirmação de drift, a background substitui a foreground.
      </p>
    </div>
  );
};

export default function MLOPS6() {
  return (
    <div style={S.page}>
      <Link to="/mlops" style={S.back}><ArrowLeft size={16} /> Voltar a MLOps</Link>

      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>Data Drift & Concept Drift</h1>

      {/* =================== SECTION 1 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Taxonomia de Drift</h2>
        <p style={S.p}>
          Drift é qualquer mudança na distribuição dos dados ao longo do tempo que afecta a capacidade de
          generalização do modelo. A taxonomia formal distingue pelo menos dois eixos ortogonais: o que muda
          (inputs <InlineMath math="X" />, outputs <InlineMath math="Y" />, ou a relação entre ambos) e
          como a mudança ocorre no tempo (de forma súbita, gradual, incremental ou recorrente).
        </p>
        <DriftTaxonomyDiagram />

        <h3 style={S.h3}>Notação Formal</h3>
        <div style={S.math}>
          <BlockMath math="P_{\text{treino}}(X, Y) \neq P_{\text{produção}}(X, Y)" />
        </div>
        <p style={S.p}>
          Esta desigualdade pode ser decomposta usando a regra da cadeia de probabilidade:
        </p>
        <div style={S.math}>
          <BlockMath math="P(X, Y) = P(Y \mid X) \cdot P(X) = P(X \mid Y) \cdot P(Y)" />
        </div>
        <p style={S.p}>
          Dependendo de qual factor muda, temos diferentes tipos de drift com implicações diferentes para
          o modelo. Se apenas <InlineMath math="P(X)" /> muda (data drift), a função aprendida
          <InlineMath math=" f: X \to Y" /> pode ainda ser correcta, mas é aplicada em zonas do espaço
          de features com que o modelo não tem experiência. Se <InlineMath math="P(Y \mid X)" /> muda
          (concept drift), a própria função aprendida está errada — o mundo mudou.
        </p>
        <div style={S.note}>
          <strong>Distinção crítica:</strong> Data drift pode ser detectado apenas com os inputs
          (sem necessitar de ground truth). Concept drift requer ground truth para ser confirmado —
          o que cria o mesmo problema de delay do Módulo 05. Esta é a razão pela qual concept drift
          é frequentemente detectado tarde.
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 2 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Os 4 Tipos de Drift Temporal</h2>
        <p style={S.p}>
          Independentemente do tipo de mudança (dados ou conceito), o drift pode manifestar-se no
          tempo de quatro formas distintas, cada uma com implicações diferentes para a estratégia
          de detecção e resposta.
        </p>
        <DriftTypesDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Padrão</th>
                <th style={S.th}>Descrição</th>
                <th style={S.th}>Exemplo real</th>
                <th style={S.th}>Detecção</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Sudden', 'Mudança abrupta num único ponto temporal', 'COVID-19 em Março 2020 — padrões de consumo mudam de um dia para o outro', 'Fácil — mudança estatística imediata'],
                ['Gradual', 'Substituição lenta do conceito antigo pelo novo', 'Hábitos de compra online que evoluem ao longo de meses', 'Difícil — sinal fraco durante muito tempo'],
                ['Incremental', 'Mudança em degraus — períodos estáveis seguidos de saltos', 'Novas features de produto lançadas progressivamente por mercado', 'Moderado — detectar cada degrau'],
                ['Recurring', 'Conceito antigo reaparece periodicamente', 'Sazonalidade do Natal — os padrões de Dezembro de 2023 assemelham-se a Dezembro de 2022', 'Previsível mas requer memória do conceito anterior'],
              ].map(([p, d, e, det]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{p}</td>
                  <td style={S.td}>{d}</td>
                  <td style={{ ...S.td, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{e}</td>
                  <td style={S.td}>{det}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.highlight}>
          <strong>Recurring concepts:</strong> o padrão mais desafiante para sistemas de ML tradicionais.
          Um modelo que aprende continuamente com dados recentes pode "esquecer" o padrão sazonal anterior
          — problema conhecido como <em>catastrophic forgetting</em>. Solução: ensembles de modelos por
          contexto (um modelo por época do ano) ou meta-learning que reconhece o contexto corrente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 3 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Data Drift (Covariate Shift)</h2>
        <p style={S.p}>
          O covariate shift ocorre quando a distribuição marginal dos inputs muda entre treino e produção,
          mas a distribuição condicional do output dado os inputs se mantém. Formalmente:
        </p>
        <div style={S.math}>
          <BlockMath math="P_{\text{treino}}(X) \neq P_{\text{prod}}(X) \quad \text{mas} \quad P_{\text{treino}}(Y \mid X) = P_{\text{prod}}(Y \mid X)" />
        </div>
        <CovariateShiftDiagram />

        <h3 style={S.h3}>Testes Estatísticos para Detectar Data Drift</h3>
        <p style={S.p}>
          A detecção de data drift não requer ground truth — apenas compara a distribuição dos inputs
          em produção com a distribuição de treino (ou com uma janela de referência recente).
        </p>
        <StatisticalTestsDiagram />

        <h3 style={S.h3}>PSI — Population Stability Index</h3>
        <p style={S.p}>
          O PSI é o standard da indústria financeira e um dos mais usados em MLOps por ser interpretável:
          o valor do PSI tem limiar intuitivo. É calculado por feature ou por score do modelo.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{PSI} = \sum_{i=1}^{N} \left( p_i^{\text{prod}} - p_i^{\text{treino}} \right) \times \ln\!\left(\frac{p_i^{\text{prod}}}{p_i^{\text{treino}}}\right)" />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>PSI</th><th style={S.th}>Interpretação</th><th style={S.th}>Acção recomendada</th></tr>
            </thead>
            <tbody>
              {[
                ['< 0.1', 'Distribuição estável', 'Nenhuma — continuar a monitorizar'],
                ['0.1 – 0.2', 'Mudança moderada', 'Investigar — pode ser sazonal ou bug de dados'],
                ['> 0.2', 'Mudança significativa', 'Retreinar ou alertar equipa imediatamente'],
              ].map(([psi, i, a]) => (
                <tr key={psi}>
                  <td style={{ ...S.td, fontWeight: 700, color, fontFamily: 'monospace' }}>{psi}</td>
                  <td style={S.td}>{i}</td>
                  <td style={S.td}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 4 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Concept Drift</h2>
        <p style={S.p}>
          Concept drift é a mudança na relação condicional entre inputs e outputs. É o tipo mais perigoso
          de drift porque os inputs podem parecer completamente normais — apenas o que eles significam mudou.
        </p>
        <div style={S.math}>
          <BlockMath math="P_{\text{treino}}(Y \mid X) \neq P_{\text{prod}}(Y \mid X)" />
        </div>
        <ConceptDriftDiagram />

        <h3 style={S.h3}>Porquê é Mais Difícil de Detectar?</h3>
        <p style={S.p}>
          Concept drift é estruturalmente mais difícil de detectar que data drift por duas razões:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>
            <strong>Requer ground truth:</strong> para observar que <InlineMath math="P(Y|X)" /> mudou,
            é necessário saber o <InlineMath math="Y" /> real — que chega com delay ou pode nunca chegar
            para todas as amostras.
          </li>
          <li>
            <strong>Os inputs parecem normais:</strong> se apenas a relação mudou mas a distribuição dos
            inputs é idêntica, todos os testes de data drift (KS, PSI) reportam "sem drift" — e o modelo
            está sistematicamente errado.
          </li>
        </ul>
        <div style={S.highlight}>
          <strong>Exemplos reais de concept drift puro:</strong>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: 1.8, marginBottom: 0 }}>
            <li>Modelos de risco de crédito: a definição de "bom pagador" muda com taxas de juro e desemprego</li>
            <li>Filtros de spam: os spammers adaptam o conteúdo continuamente às defesas dos filtros</li>
            <li>Modelos de diagnóstico médico: guidelines clínicas mudam o que é considerado "doença"</li>
            <li>Recomendações: as preferências de utilizadores mudam com cultura, moda e eventos externos</li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 5 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Algoritmos de Detecção</h2>
        <p style={S.p}>
          Os algoritmos de detecção de drift dividem-se em dois grupos: os que operam em
          <strong> batch</strong> (comparam janelas de dados em momentos discretos) e os que operam em
          <strong> stream</strong> (monitorizam continuamente cada novo ponto de dado). A escolha depende
          do volume de dados e da latência de detecção necessária.
        </p>
        <DriftDetectionAlgorithmsDiagram />

        <h3 style={S.h3}>ADWIN — Adaptive Windowing</h3>
        <p style={S.p}>
          ADWIN mantém uma janela de tamanho variável sobre o stream de dados. A ideia central: se a
          média na metade mais antiga da janela difere significativamente da metade mais recente, há drift
          — e a janela contrai-se para eliminar os dados antigos. Formalmente, ADWIN mantém a invariante:
        </p>
        <div style={S.math}>
          <BlockMath math="\left|\hat{\mu}_0 - \hat{\mu}_1\right| \geq \epsilon_{\text{cut}} = \sqrt{\frac{1}{2m} \cdot \ln\frac{4n}{\delta}}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="m" /> é o tamanho da subjanela, <InlineMath math="n" /> é o tamanho
          total da janela, e <InlineMath math="\delta" /> é o nível de confiança. Quando esta condição
          é satisfeita, os dados antigos são descartados e a janela começa em zero.
        </p>

        <h3 style={S.h3}>DDM — Drift Detection Method</h3>
        <p style={S.p}>
          DDM (Gama et al., 2004) monitoriza a taxa de erro do modelo ao longo do tempo. Assume que
          numa situação estável, o erro segue uma distribuição binomial. Quando a taxa de erro mais
          o desvio padrão excede um threshold de <strong>warning</strong>, o sistema entra em modo
          de alerta. Se continuar a subir acima do threshold de <strong>drift</strong>, o retraining
          é disparado.
        </p>

        <h3 style={S.h3}>KSWIN — Kolmogorov-Smirnov Windowing</h3>
        <p style={S.p}>
          KSWIN (Raab et al., 2020) combina o teste estatístico KS com uma janela deslizante. Para
          cada nova observação, compara a distribuição de uma janela de referência com a distribuição
          da janela mais recente. O p-value do teste KS serve de estatística de monitorização.
        </p>
        <div style={S.math}>
          <BlockMath math="D_{n,m} = \sup_x \left| F_n(x) - G_m(x) \right|" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="F_n" /> é a CDF empírica da janela de referência e
          <InlineMath math=" G_m" /> é a CDF empírica da janela recente. Quando
          <InlineMath math=" D_{n,m}" /> excede um threshold crítico, drift é detectado.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Algoritmo</th>
                <th style={S.th}>Tipo de drift</th>
                <th style={S.th}>Requer labels</th>
                <th style={S.th}>Online/Batch</th>
                <th style={S.th}>Implementação</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['ADWIN', 'Data + Concept', 'Não (usa qualquer métrica)', 'Online', 'River, scikit-multiflow'],
                ['DDM', 'Concept drift', 'Sim (taxa de erro)', 'Online', 'River, scikit-multiflow'],
                ['KSWIN', 'Data drift', 'Não', 'Online + Batch', 'River, Evidently AI'],
                ['PSI', 'Data drift', 'Não', 'Batch', 'Evidently AI, custom'],
                ['Chi-Square', 'Data drift (categórico)', 'Não', 'Batch', 'scipy.stats, Evidently AI'],
              ].map(([a, t, l, m, i]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 600, color, fontFamily: 'monospace', fontSize: '0.85rem' }}>{a}</td>
                  <td style={S.td}>{t}</td>
                  <td style={{ ...S.td, color: l === 'Sim' ? '#4a9eed' : '#4a9eed', fontWeight: 600 }}>{l}</td>
                  <td style={S.td}>{m}</td>
                  <td style={{ ...S.td, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* =================== SECTION 6 =================== */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Como Responder ao Drift</h2>
        <p style={S.p}>
          Detectar drift é apenas metade do trabalho. A resposta deve ser <strong>proporcional</strong>
          ao tipo e severidade do drift — retreinar completamente um modelo quando um simples reweight de
          amostras seria suficiente é um desperdício de recursos e introduz risco desnecessário.
        </p>
        <DriftResponseDiagram />

        <h3 style={S.h3}>Reweighting de Amostras</h3>
        <p style={S.p}>
          Para drift leve, pode ser suficiente dar mais peso às amostras recentes durante o treino,
          sem precisar de retreinar do zero. A técnica standard é <strong>Importance Weighting</strong>:
          cada amostra <InlineMath math="(x_i, y_i)" /> recebe um peso proporcional à razão entre a
          distribuição actual e a distribuição de treino.
        </p>
        <div style={S.math}>
          <BlockMath math="w(x) = \frac{P_{\text{prod}}(x)}{P_{\text{treino}}(x)}" />
        </div>
        <p style={S.p}>
          Na prática, este rácio é estimado treinando um classificador binário para distinguir amostras
          de treino de amostras de produção — as probabilidades desse classificador dão os pesos.
        </p>

        <h3 style={S.h3}>Ensemble de Modelos por Contexto</h3>
        <p style={S.p}>
          Para drift recorrente (sazonalidade), a melhor estratégia é manter um ensemble de modelos
          especializados por contexto: modelo de Verão, modelo de Inverno, modelo de crise, etc.
          Um <strong>router model</strong> (geralmente simples, baseado em regras ou em features de
          contexto como mês do ano) selecciona qual modelo usar para cada request.
        </p>

        <h3 style={S.h3}>Shadow Mode e Canary Deployments</h3>
        <p style={S.p}>
          Qualquer novo modelo (treinado como resposta a drift) deve ser validado antes de substituir
          o modelo em produção. O processo padrão:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Fase</th>
                <th style={S.th}>Descrição</th>
                <th style={S.th}>Duração típica</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Shadow Mode', 'Novo modelo corre em paralelo mas as suas predições não afectam utilizadores. Compara resultados offline.', '24–72 horas'],
                ['Canary (1–5%)', 'Novo modelo serve uma pequena fracção do tráfego real. Métricas de negócio monitorizadas de perto.', '1–7 dias'],
                ['Progressive rollout', 'Aumenta gradualmente a % de tráfego: 10% → 25% → 50% → 100%.', '1–2 semanas'],
                ['Full rollout', 'Modelo antigo desativado. Monitorização intensiva nas primeiras 48h.', '—'],
              ].map(([f, d, dur]) => (
                <tr key={f}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{f}</td>
                  <td style={S.td}>{d}</td>
                  <td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{dur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          <strong>Rollback automático:</strong> defina previamente uma métrica de saúde e um threshold.
          Se a métrica cair abaixo do threshold nas primeiras horas após o deploy, o sistema reverte
          automaticamente para o modelo anterior. Nenhum deploy deve ser feito sem ter um rollback planeado.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>7. Adaptive Random Forest — Resposta Automática ao Drift</h2>
        <p style={S.p}>
          As secções anteriores tratam a deteção e a resposta ao drift como passos manuais — algo
          dispara um alerta, uma pessoa decide retreinar. A <strong>Adaptive Random Forest (ARF)</strong>{' '}
          (Gomes et al., 2017) automatiza esse ciclo dentro do próprio modelo: é o classificador de
          streams recomendado hoje para produção quando o volume de dados é demasiado alto ou o
          retreino em batch é demasiado lento para reagir a tempo.
        </p>
        <p style={S.p}>
          Combina três ingredientes: subconjuntos aleatórios de features por nó (como no Random
          Forest batch), pesos Poisson de alta variância para diversidade entre árvores, e um{' '}
          <strong>detector ADWIN por árvore</strong> — a mesma técnica de deteção de drift já vista
          na secção 5, aplicada individualmente a cada árvore do ensemble.
        </p>

        <div style={S.highlight}>
          <strong>Mecanismo warning/drift, árvore a árvore:</strong>
          <p style={{ ...S.p, marginTop: '0.6rem', marginBottom: 0 }}>
            Cada árvore tem o seu próprio ADWIN com dois limiares: um de aviso (δw) e um de drift
            (δd), com δw &gt; δd. Quando a árvore degrada acima de δw, uma <strong>árvore
            background</strong> começa a crescer em paralelo, treinada apenas nos dados mais
            recentes. Se a degradação ultrapassa δd, o drift é confirmado e a árvore background
            substitui a foreground — sem interromper o ensemble nem exigir um retreino global.
          </p>
        </div>

        <ARFDiagram />

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Parâmetro</th>
                <th style={S.th}>Valor padrão</th>
                <th style={S.th}>Efeito</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['n_estimators', '100', 'Número de árvores; mais árvores = maior accuracy e memória'],
                ['λ (lambda)', '6', 'Intensidade Poisson; valores maiores aumentam diversidade'],
                ['drift_detector', 'ADWIN (δ=0.001)', 'Sensibilidade à confirmação de drift; δ menor → mais sensível'],
                ['warning_detector', 'ADWIN (δ=0.01)', 'Dispara crescimento da árvore background; δ maior → menos avisos falsos'],
                ['max_features', '⌊√d⌋', 'Features por nó; menor valor → maior diversidade entre árvores'],
              ].map(([p, v, e]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 700, color }}><code>{p}</code></td>
                  <td style={S.td}>{v}</td>
                  <td style={S.td}>{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          A ARF é hoje o classificador de referência para streams em produção (implementado em{' '}
          <code>river</code>, usado em deteção de fraude, intrusão de rede e scoring em tempo real).
          Supera os métodos anteriores na maioria dos benchmarks, com boa performance tanto em
          streams estacionários como em cenários com drift abrupto, gradual ou recorrente.
        </div>
      </div>
</div>
  );
}
