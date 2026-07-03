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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// ============================================================
// DIAGRAM 1 — GDPR 7 Principles (hexagonal arrangement)
// ============================================================
const GDPRPrinciplesDiagram = () => {
  const cx = 280, cy = 165, r = 120;
  const principles = [
    { label: 'Lawfulness', color: '#f97316' },
    { label: 'Purpose\nLimitation', color: '#f97316' },
    { label: 'Data\nMinimisation', color: '#f97316' },
    { label: 'Accuracy', color: '#f97316' },
    { label: 'Storage\nLimitation', color: '#f97316' },
    { label: 'Integrity &\nConfidentiality', color: '#f97316' },
    { label: 'Accountability', color: '#f97316' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Os 7 Princípios do GDPR — Artigo 5.º</p>
      <svg viewBox="0 0 560 330" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="gdpr-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        {/* Center */}
        <circle cx={cx} cy={cy} r="42" fill={`${color}18`} stroke={color} strokeWidth="2" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill={color} fontSize="10.5" fontWeight="800">GDPR</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Art. 5</text>
        <text x={cx} y={cy + 20} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Princípios</text>
        {principles.map((p, i) => {
          const angle = (2 * Math.PI * i) / 7 - Math.PI / 2;
          const hx = cx + r * Math.cos(angle);
          const hy = cy + r * Math.sin(angle);
          const lx1 = cx + 44 * Math.cos(angle);
          const ly1 = cy + 44 * Math.sin(angle);
          const lx2 = hx - 32 * Math.cos(angle);
          const ly2 = hy - 32 * Math.sin(angle);
          const lines = p.label.split('\n');
          return (
            <g key={i}>
              <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#gdpr-arr)" />
              {/* Hexagon approximated by a circle for simplicity */}
              <circle cx={hx} cy={hy} r="30" fill={`${p.color}18`} stroke={p.color} strokeWidth="1.8" />
              {lines.map((line, li) => (
                <text key={li} x={hx} y={hy - (lines.length - 1) * 5.5 + li * 11} textAnchor="middle" fill={p.color} fontSize="8.5" fontWeight="700">{line}</text>
              ))}
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'left', marginTop: '0.5rem' }}>
        Cada princípio tem implicações directas para o desenvolvimento de sistemas de ML — desde a recolha de dados até ao deployment e monitorização.
      </p>
    </div>
  );
};

// ============================================================
// DIAGRAM 2 — Responsible AI — 5 Pillars
// ============================================================
const ResponsibleAIFrameworkDiagram = () => {
  const pillars = [
    { label: 'Fairness', color: '#f97316', icon: '⚖', subs: ['Demographic parity', 'Equal opportunity', 'Auditar bias nos dados'] },
    { label: 'Explainability', color: '#f97316', icon: '🔍', subs: ['SHAP / LIME', 'Model Cards', 'Right to explanation'] },
    { label: 'Robustness', color: '#f97316', icon: '🛡', subs: ['Adversarial inputs', 'Distribution shift', 'Stress testing'] },
    { label: 'Privacy', color: '#f97316', icon: '🔒', subs: ['Federated learning', 'Differential privacy', 'Data minimisation'] },
    { label: 'Accountability', color: '#f97316', icon: '📋', subs: ['Audit trails', 'Model owners', 'Regulatory compliance'] },
  ];
  const colW = 90, gap = 8, totalW = pillars.length * colW + (pillars.length - 1) * gap;
  const svgW = totalW + 60;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Os 5 Pilares da Responsible AI</p>
      <svg viewBox={`0 0 ${svgW} 265`} style={{ maxWidth: '100%', height: 'auto' }}>
        <text x={svgW / 2} y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">Responsible AI Framework</text>
        {pillars.map((p, i) => {
          const x = 30 + i * (colW + gap);
          const pillarH = 80 + i * 12;
          const pillarTop = 200 - pillarH;
          return (
            <g key={i}>
              {/* Column / pillar */}
              <rect x={x} y={pillarTop} width={colW} height={pillarH} rx="6" fill={`${p.color}20`} stroke={p.color} strokeWidth="1.8" />
              <text x={x + colW / 2} y={pillarTop + 18} textAnchor="middle" fill={p.color} fontSize="14">{p.icon}</text>
              <text x={x + colW / 2} y={pillarTop + 34} textAnchor="middle" fill={p.color} fontSize="9.5" fontWeight="800">{p.label}</text>
              {/* Sub-points below pillar */}
              {p.subs.map((s, si) => (
                <text key={si} x={x + colW / 2} y={220 + si * 13} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{s}</text>
              ))}
              {/* Base */}
              <rect x={x - 4} y="200" width={colW + 8} height="8" rx="3" fill={p.color} opacity="0.6" />
            </g>
          );
        })}
        {/* Foundation bar */}
        <rect x="26" y="208" width={totalW + 8} height="6" rx="3" fill="rgba(100,100,100,0.18)" />
        <text x={svgW / 2} y="262" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontStyle="italic">Base: Cultura organizacional + Legislação</text>
      </svg>
    </div>
  );
};

// ============================================================
// DIAGRAM 3 — SHAP Waterfall Chart
// ============================================================
const SHAPDiagram = () => {
  const base = 0.50;
  const features = [
    { name: 'Income',    val: +0.18 },
    { name: 'Age',       val: +0.12 },
    { name: 'Education', val: +0.05 },
    { name: 'Debt',      val: -0.15 },
  ];
  const finalScore = base + features.reduce((a, f) => a + f.val, 0);

  const svgW = 520, barH = 26, barGap = 10, padL = 110, padR = 60, padT = 50;
  const minV = 0.20, maxV = 0.85;
  const plotW = svgW - padL - padR;
  const xScale = v => padL + ((v - minV) / (maxV - minV)) * plotW;

  const rows = features.length + 2; // base + features + f(x)
  const totalH = padT + rows * (barH + barGap) + 40;

  let running = base;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>SHAP — Waterfall de Contribuições de Features (Previsão de Crédito)</p>
      <svg viewBox={`0 0 ${svgW} ${totalH}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Grid lines */}
        {[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8].map(v => (
          <g key={v}>
            <line x1={xScale(v)} y1={padT - 10} x2={xScale(v)} y2={padT + rows * (barH + barGap)} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />
            <text x={xScale(v)} y={padT - 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{v.toFixed(1)}</text>
          </g>
        ))}

        {/* Base row */}
        {(() => {
          const y = padT;
          const x0 = xScale(0); const x1 = xScale(base);
          return (
            <g>
              <text x={padL - 6} y={y + barH / 2 + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9" fontWeight="600">E[f(x)]</text>
              <rect x={xScale(minV)} y={y} width={x1 - xScale(minV)} height={barH} rx="3" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1.2" />
              <text x={x1 + 5} y={y + barH / 2 + 4} textAnchor="start" fill="var(--text-secondary)" fontSize="8.5" fontWeight="700">{base.toFixed(2)}</text>
            </g>
          );
        })()}

        {/* Feature bars */}
        {features.map((f, i) => {
          const y = padT + (i + 1) * (barH + barGap);
          const startX = xScale(running);
          const endX = xScale(running + f.val);
          const bx = Math.min(startX, endX);
          const bw = Math.abs(endX - startX);
          const connX = startX;
          running += f.val;
          return (
            <g key={i}>
              <line x1={connX} y1={y - barGap + 2} x2={connX} y2={y + 2} stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="2,2" />
              <text x={padL - 6} y={y + barH / 2 + 4} textAnchor="end" fill="var(--text-primary)" fontSize="9" fontWeight="600">{f.name}</text>
              <rect x={bx} y={y} width={Math.max(bw, 2)} height={barH} rx="3" fill={f.val > 0 ? 'rgba(249,115,22,0.4)' : 'rgba(239,68,68,0.4)'} stroke={f.val > 0 ? '#f97316' : '#ef4444'} strokeWidth="1.5" />
              <text x={f.val > 0 ? endX + 4 : endX - 4} y={y + barH / 2 + 4} textAnchor={f.val > 0 ? 'start' : 'end'} fill={f.val > 0 ? '#f97316' : '#ef4444'} fontSize="8.5" fontWeight="700">{f.val > 0 ? `+${f.val.toFixed(2)}` : f.val.toFixed(2)}</text>
            </g>
          );
        })}

        {/* f(x) final row */}
        {(() => {
          const y = padT + (features.length + 1) * (barH + barGap);
          return (
            <g>
              <text x={padL - 6} y={y + barH / 2 + 4} textAnchor="end" fill={color} fontSize="9" fontWeight="700">f(x)</text>
              <rect x={xScale(minV)} y={y} width={xScale(finalScore) - xScale(minV)} height={barH} rx="3" fill="rgba(249,115,22,0.5)" stroke={color} strokeWidth="2" />
              <text x={xScale(finalScore) + 5} y={y + barH / 2 + 4} textAnchor="start" fill={color} fontSize="9.5" fontWeight="800">{finalScore.toFixed(2)}</text>
            </g>
          );
        })()}

        <text x={svgW / 2} y={totalH - 10} textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontStyle="italic">
          Cada barra mostra a contribuição marginal de cada feature para a predição final
        </text>
      </svg>
    </div>
  );
};

// ============================================================
// DIAGRAM 4 — LIME Diagram
// ============================================================
const LIMEDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>LIME — Aproximação Linear Local de um Modelo Complexo</p>
    <svg viewBox="0 0 520 260" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Background grid */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={'h' + i} x1="40" y1={50 + i * 40} x2="480" y2={50 + i * 40} stroke="var(--text-secondary)" strokeWidth="0.4" opacity="0.5" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={'v' + i} x1={40 + i * 65} y1="30" x2={40 + i * 65} y2="230" stroke="var(--text-secondary)" strokeWidth="0.4" opacity="0.5" />
      ))}

      {/* Global model boundary (curved, black) */}
      <path d="M40,80 C100,60 160,180 230,130 C300,80 370,200 480,160" stroke="var(--card-border)" strokeWidth="2.5" fill="none" />
      <text x="370" y="140" fill="rgba(249,115,22,0.06)" fontSize="9" fontWeight="700">Global model</text>
      <text x="370" y="152" fill="var(--text-secondary)" fontSize="8">(complexo, não-linear)</text>

      {/* Neighborhood grey dots */}
      {[
        [210, 115], [220, 145], [235, 120], [245, 150], [255, 118],
        [195, 138], [240, 132], [215, 160], [260, 145], [230, 105],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#94a3b8" opacity="0.55" />
      ))}

      {/* Neighbourhood circle */}
      <circle cx="232" cy="132" r="52" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5,3" opacity="0.7" />
      <text x="232" y="195" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">vizinhança amostrada</text>

      {/* Target prediction point (red dot) */}
      <circle cx="232" cy="132" r="8" fill="#f97316" stroke="white" strokeWidth="2" />
      <text x="248" y="100" fill="#f97316" fontSize="9" fontWeight="700">ponto x'</text>

      {/* LOCAL linear approximation (dashed straight line) */}
      <line x1="155" y1="170" x2="315" y2="95" stroke="#f97316" strokeWidth="2.5" strokeDasharray="7,4" />
      <text x="95" y="185" fill="#f97316" fontSize="9" fontWeight="700">Local surrogate</text>
      <text x="95" y="197" fill="#f97316" fontSize="8">(linear)</text>

      {/* Axis labels */}
      <text x="260" y="245" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Feature 1</text>
      <text x="20" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" transform="rotate(-90,20,135)">Feature 2</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'left', marginTop: '0.5rem' }}>
      O LIME perturba o ponto de interesse, pesa as perturbações pela proximidade, e ajusta um modelo linear local — que é interpretável mesmo que o modelo global não o seja.
    </p>
  </div>
);

// ============================================================
// DIAGRAM 5 — PDP (Partial Dependence Plot)
// ============================================================
const PDPDiagram = () => {
  const w = 480, h = 220, padL = 55, padR = 20, padT = 30, padB = 45;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const ageMin = 20, ageMax = 80;
  const pdp = (age) => {
    const t = (age - ageMin) / (ageMax - ageMin);
    return 0.05 + 0.55 * (1 - Math.exp(-4.5 * t));
  };
  const xP = (age) => padL + ((age - ageMin) / (ageMax - ageMin)) * plotW;
  const yP = (prob) => padT + plotH - prob * plotH;
  const nPts = 60;
  const pts = Array.from({ length: nPts + 1 }, (_, i) => {
    const age = ageMin + (i / nPts) * (ageMax - ageMin);
    return { age, prob: pdp(age), x: xP(age), y: yP(pdp(age)) };
  });
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const ciUpper = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${(yP(Math.min(1, pdp(p.age) + 0.07))).toFixed(1)}`).join(' ');
  const ciLower = pts.slice().reverse().map((p) => `L${p.x.toFixed(1)},${(yP(Math.max(0, pdp(p.age) - 0.07))).toFixed(1)}`).join(' ');
  const ciPath = ciUpper + ' ' + ciLower + ' Z';
  const yLabels = [0, 0.2, 0.4, 0.6, 0.8];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>PDP — Efeito Marginal da Idade em P(default)</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {/* CI shading */}
        <path d={ciPath} fill="#f97316" opacity="0.12" />
        {/* Axes */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.2" />
        <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1.2" />
        {/* Y axis labels */}
        {yLabels.map(v => {
          const py = yP(v);
          return (
            <g key={v}>
              <line x1={padL - 4} y1={py} x2={padL + plotW} y2={py} stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.5" />
              <text x={padL - 7} y={py + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="8">{v.toFixed(1)}</text>
            </g>
          );
        })}
        {/* X axis labels */}
        {[20, 30, 40, 50, 60, 70, 80].map(age => (
          <text key={age} x={xP(age)} y={padT + plotH + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{age}</text>
        ))}
        {/* PDP curve */}
        <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" />
        {/* Plateau annotation */}
        <line x1={xP(60)} y1={padT} x2={xP(60)} y2={padT + plotH} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" opacity="0.6" />
        <text x={xP(50) + 4} y={padT + 14} fill="var(--text-secondary)" fontSize="8" fontStyle="italic">platô ≈ 60 anos</text>
        {/* Axis titles */}
        <text x={padL + plotW / 2} y={h - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Idade</text>
        <text x="12" y={padT + plotH / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="9" transform={`rotate(-90,12,${padT + plotH / 2})`}>P(default)</text>
        {/* Legend */}
        <line x1={padL + plotW - 100} y1={padT} x2={padL + plotW - 75} y2={padT} stroke={color} strokeWidth="2.5" />
        <text x={padL + plotW - 72} y={padT +3} fill={color} fontSize="8.5" fontWeight="700">PDP</text>
        <rect x={padL + plotW - 100} y={padT + 8} width="25" height="8" fill="#f97316" opacity="0.18" />
        <text x={padL + plotW - 72} y={padT + 15} fill="var(--text-secondary)" fontSize="8">IC 95%</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'left', marginTop: '0.5rem' }}>
        O PDP mostra o efeito marginal da Idade na probabilidade de default, marginalizado sobre todas as outras features. A banda de confiança (IC 95%) indica a incerteza da estimativa.
      </p>
    </div>
  );
};

// ============================================================
// DIAGRAM 6 — Governance Framework — 8-step circular process
// ============================================================
const GovernanceFrameworkDiagram = () => {
  const steps = [
    { label: 'Define\nUse Case', color: '#f97316' },
    { label: 'Risk\nAssessment', color: '#f97316' },
    { label: 'Data\nGovernance', color: '#f97316' },
    { label: 'Model\nDevelopment', color: '#f97316' },
    { label: 'Fairness\nAudit', color: '#f97316' },
    { label: 'Explaina-\nbility', color: '#f97316' },
    { label: 'Deploy with\nControls', color: '#f97316' },
    { label: 'Monitor\n& Audit', color: '#f97316' },
  ];
  const cx = 240, cy = 155, r = 110;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Framework de Governance — Processo Circular de 8 Passos</p>
      <svg viewBox="0 0 480 310" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="gov-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        {/* Center */}
        <circle cx={cx} cy={cy} r="38" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.8" />
        <text x={cx} y={cy - 5} textAnchor="middle" fill={color} fontSize="10" fontWeight="800">ML</text>
        <text x={cx} y={cy + 9} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Governance</text>
        <text x={cx} y={cy + 22} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">ciclo contínuo</text>
        {steps.map((s, i) => {
          const angle = (2 * Math.PI * i) / 8 - Math.PI / 2;
          const nx = cx + r * Math.cos(angle);
          const ny = cy + r * Math.sin(angle);
          // Arrow from previous to this node
          const prevAngle = (2 * Math.PI * ((i - 1 + 8) % 8)) / 8 - Math.PI / 2;
          const pnx = cx + r * Math.cos(prevAngle);
          const pny = cy + r * Math.sin(prevAngle);
          const midAngle = prevAngle + (2 * Math.PI / 16);
          const arrowX = cx + (r + 16) * Math.cos(midAngle);
          const arrowY = cy + (r + 16) * Math.sin(midAngle);
          const lines = s.label.split('\n');
          return (
            <g key={i}>
              <circle cx={nx} cy={ny} r="28" fill={`${s.color}18`} stroke={s.color} strokeWidth="1.8" />
              <text x={nx} y={ny - 10} textAnchor="middle" fill={s.color} fontSize="10" fontWeight="800">{i + 1}</text>
              {lines.map((line, li) => (
                <text key={li} x={nx} y={ny + 3 + li * 10} textAnchor="middle" fill={s.color} fontSize="7.5" fontWeight="600">{line}</text>
              ))}
            </g>
          );
        })}
        {/* Clockwise arrows between nodes */}
        {steps.map((s, i) => {
          const a1 = (2 * Math.PI * i) / 8 - Math.PI / 2;
          const a2 = (2 * Math.PI * ((i + 1) % 8)) / 8 - Math.PI / 2;
          const aMid = (a1 + a2) / 2;
          const arrowR = r + 18;
          const ax = cx + arrowR * Math.cos(aMid);
          const ay = cy + arrowR * Math.sin(aMid);
          const fromX = cx + (r + 29) * Math.cos(a1);
          const fromY = cy + (r + 29) * Math.sin(a1);
          const toX = cx + (r + 29) * Math.cos(a2);
          const toY = cy + (r + 29) * Math.sin(a2);
          return (
            <path key={i} d={`M${fromX.toFixed(1)},${fromY.toFixed(1)} Q${ax.toFixed(1)},${ay.toFixed(1)} ${toX.toFixed(1)},${toY.toFixed(1)}`}
              fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#gov-arr)" />
          );
        })}
      </svg>
    </div>
  );
};

// ============================================================
// DIAGRAM 7 — EU AI Act Risk Pyramid
// ============================================================
const AIActRiskDiagram = () => {
  const tiers = [
    {
      level: 'Risco Inaceitável', color: '#f97316',
      label: 'PROIBIDO', detail: 'social scoring, surveillance em massa',
      height: 55, y: 30, textY: 57
    },
    {
      level: 'Risco Elevado', color: '#f97316',
      label: 'Avaliação de Conformidade Obrigatória', detail: 'contratação, crédito, saúde, justiça criminal',
      height: 60, y: 85, textY: 117
    },
    {
      level: 'Risco Limitado', color: '#f97316',
      label: 'Transparência Obrigatória', detail: 'chatbots — utilizador deve ser informado',
      height: 65, y: 145, textY: 177
    },
    {
      level: 'Risco Mínimo', color: '#f97316',
      label: 'Uso Livre', detail: 'filtros de spam, jogos, recomendações',
      height: 70, y: 210, textY: 248
    },
  ];
  const svgW = 500;
  const apexX = svgW / 2;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>EU AI Act — Pirâmide de Classificação de Risco</p>
      <svg viewBox={`0 0 ${svgW} 310`} style={{ maxWidth: '100%', height: 'auto' }}>
        {tiers.map((t, i) => {
          // Each tier is a trapezoid
          const totalTiers = tiers.length;
          const idx = i; // 0 = top (smallest)
          const topW = 60 + idx * 90;
          const botW = 60 + (idx + 1) * 90;
          const topX = apexX - topW / 2;
          const botX = apexX - botW / 2;
          return (
            <g key={i}>
              <polygon
                points={`${topX},${t.y} ${topX + topW},${t.y} ${botX + botW},${t.y + t.height} ${botX},${t.y + t.height}`}
                fill={`${t.color}22`} stroke={t.color} strokeWidth="1.8"
              />
              <text x={apexX} y={t.y + 18} textAnchor="middle" fill={t.color} fontSize="10" fontWeight="800">{t.level}</text>
              <text x={apexX} y={t.y + 33} textAnchor="middle" fill={t.color} fontSize="8.5" fontWeight="600">{t.label}</text>
              <text x={apexX} y={t.y + 47} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5" fontStyle="italic">
                {t.detail.split('\n').map((line, li) => (
                  <tspan key={li} x={apexX} dy={li === 0 ? 0 : '1.1em'}>{line}</tspan>
                ))}
              </text>
            </g>
          );
        })}
        {/* Arrow labels on right */}
        <text x="490" y="57" textAnchor="end" fill="#f97316" fontSize="9" fontWeight="700">▲ Mais restritivo</text>
        <text x="490" y="290" textAnchor="end" fill="#f97316" fontSize="9" fontWeight="700">▼ Menos restritivo</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'left', marginTop: '0.5rem' }}>
        O EU AI Act (em vigor a partir de 2026) classifica sistemas de IA em 4 categorias de risco com obrigações legais progressivamente mais exigentes.
      </p>
    </div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function MLOPS7() {
  return (
    <div style={S.page}>
      <Link to="/mlops" style={S.back}><ArrowLeft size={16} /> Voltar a MLOps</Link>

      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Model Governance, Responsible AI & Regulamentação</h1>
      <p style={S.lead}>
        Um modelo de ML não existe no vácuo — está sujeito à lei, à ética e às expectativas da sociedade.
        GDPR, Responsible AI, explicabilidade e o EU AI Act deixaram de ser opcionais: são requisitos de negócio
        e, em muitos domínios, obrigações legais. Este módulo fecha o ciclo MLOps com a dimensão de governance,
        ética e regulamentação — os alicerces que tornam um sistema de ML verdadeiramente responsável.
      </p>

      {/* ===================== SECTION 1: GDPR ===================== */}
      <div style={S.section}>
        <h2 style={S.h2}>1. GDPR e Proteção de Dados em IA</h2>
        <p style={S.p}>
          O Regulamento Geral de Proteção de Dados (GDPR), em vigor desde maio de 2018, estabelece no seu
          Artigo 5.º sete princípios fundamentais que afectam directamente o ciclo de vida de qualquer sistema
          de ML que processe dados pessoais de cidadãos da União Europeia — o que inclui praticamente todos
          os sistemas de ML em produção.
        </p>
        <GDPRPrinciplesDiagram />

        <h3 style={S.h3}>Implicações Concretas para Sistemas de ML</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Princípio GDPR</th>
                <th style={S.th}>Implicação concreta para ML</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Lawfulness (Art.5a)', 'Necessita de base legal para processar dados (consentimento, contrato, interesse legítimo). Modelos não podem ser treinados com dados recolhidos sem base legal.'],
                ['Purpose Limitation (Art.5b)', 'Um modelo treinado para X (ex: detecção de fraude) não pode ser reutilizado para Y (ex: scoring de crédito) sem nova base legal e consentimento.'],
                ['Data Minimisation (Art.5c)', 'Incluir apenas as features estritamente necessárias. Remover PII (nome, NIF, morada) quando não essencial. Pseudonimização preferível.'],
                ['Accuracy (Art.5d)', 'Modelos degradados devem ser actualizados ou retirados. Predições erradas com impacto nos titulares têm consequências legais.'],
                ['Storage Limitation (Art.5e)', 'Dados de treino não podem ser retidos indefinidamente. Necessidade de políticas de retenção e eliminação periódica dos datasets.'],
                ['Integrity & Confidentiality (Art.5f)', 'Dados sensíveis no treino devem ser cifrados. Sem data leakage de PII para os parâmetros do modelo (ataques de membership inference).'],
                ['Accountability (Art.5.2)', 'A organização deve demonstrar e provar compliance — logs, registos de processamento (Art.30), avaliações de impacto (DPIA, Art.35).'],
              ].map(([p, i]) => (
                <tr key={p}>
                  <td style={{ ...S.td, fontWeight: 600, color, whiteSpace: 'nowrap' }}>{p}</td>
                  <td style={S.td}>{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Artigo 22.º — Direito à Explicação</h3>
        <p style={S.p}>
          O Artigo 22.º do GDPR é particularmente relevante para ML: os titulares de dados têm o direito de
          não ficar sujeitos a <strong>decisões exclusivamente automatizadas</strong> com efeitos
          significativos (recusa de crédito, selecção de emprego, triagem médica). Quando estas decisões
          ocorrem, o titular tem direito a obter uma <strong>explicação significativa</strong> da lógica
          envolvida.
        </p>
        <div style={S.highlight}>
          <strong>Implicação prática:</strong> qualquer pipeline de decisão automatizada em domínios de alto risco
          (crédito, contratação, seguros, saúde) deve ser capaz de gerar explicações individuais (local
          explainability) para cada decisão — o que exige a integração de ferramentas XAI (SHAP, LIME) no
          próprio pipeline de inferência, não apenas como análise post-hoc.
        </div>
        <div style={S.note}>
          Uma <strong>DPIA (Data Protection Impact Assessment)</strong> é obrigatória (Art.35) quando o
          processamento é de alto risco — incluindo perfiling sistemático, processamento à larga escala de
          dados sensíveis, ou monitorização sistemática de espaços de acesso público. Sistemas de ML de
          scoring ou classificação de pessoas quase sempre requerem DPIA.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===================== SECTION 2: RESPONSIBLE AI ===================== */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Responsible AI — Os 5 Pilares</h2>
        <p style={S.p}>
          Responsible AI é uma abordagem centrada no ser humano para o desenvolvimento e deployment de
          sistemas de IA. Vai além do compliance legal: é sobre garantir que os sistemas de ML são
          intrinsecamente justos, compreensíveis, robustos, privados e responsabilizáveis.
        </p>
        <ResponsibleAIFrameworkDiagram />

        <h3 style={S.h3}>Pilar 1 — Fairness (Equidade)</h3>
        <p style={S.p}>
          Um modelo é <em>justo</em> quando não discrimina sistematicamente grupos protegidos (género,
          etnia, idade, deficiência). Existem várias métricas formais de fairness, e é matematicamente
          impossível satisfazer todas simultaneamente — é necessário escolher:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Métrica</th><th style={S.th}>Definição</th><th style={S.th}>Quando usar</th></tr>
            </thead>
            <tbody>
              {[
                ['Demographic Parity', 'P(ŷ=1 | A=0) = P(ŷ=1 | A=1)', 'Quando o resultado deve ser independente do grupo'],
                ['Equal Opportunity', 'TPR igual entre grupos: P(ŷ=1 | y=1, A=0) = P(ŷ=1 | y=1, A=1)', 'Quando queremos que os qualificados de todos os grupos sejam igualmente aceites'],
                ['Equalized Odds', 'TPR e FPR iguais entre grupos', 'Mais exigente — igualdade em positivos e negativos'],
                ['Calibration', 'P(y=1 | ŷ=p, A=a) = p para todos a', 'Quando as probabilidades devem ser interpretadas de igual forma entre grupos'],
              ].map(([m, d, w]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 600, color }}>{m}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{d}</td>
                  <td style={S.td}>{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.math}>
          <BlockMath math="\text{Demographic Parity: } P(\hat{y}=1 \mid A=0) = P(\hat{y}=1 \mid A=1)" />
        </div>

        <h3 style={S.h3}>Pilar 2 — Explainability (Explicabilidade)</h3>
        <p style={S.p}>
          Explicabilidade é a capacidade de comunicar porque é que um modelo produz uma dada previsão.
          Distinguem-se duas dimensões: <strong>global</strong> (quais features são mais importantes em
          geral?) e <strong>local</strong> (porque é que <em>esta</em> predição específica foi feita?).
          As técnicas XAI são detalhadas na secção 3.
        </p>

        <h3 style={S.h3}>Pilar 3 — Robustness (Robustez)</h3>
        <p style={S.p}>
          Um modelo robusto mantém o seu desempenho face a perturbações nos dados de entrada.
          Ataques adversariais (perturbações propositadamente construídas para enganar o modelo),
          distribution shift (o mundo mudou desde o treino) e inputs malformados são as principais
          ameaças. Estratégias de mitigação incluem adversarial training, stress testing com
          distribuições out-of-distribution, e monotonic constraints.
        </p>

        <h3 style={S.h3}>Pilar 4 — Privacy (Privacidade Computacional)</h3>
        <p style={S.p}>
          Além das obrigações GDPR, existem técnicas computacionais que protegem a privacidade mesmo
          durante o treino:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Federated Learning:</strong> o modelo é treinado localmente em cada dispositivo/instituição; apenas os gradientes (não os dados) são enviados para um servidor central. Os dados nunca saem do dispositivo.</li>
          <li><strong>Differential Privacy:</strong> adicionar ruído calibrado aos gradientes durante o treino garante (com garantia matemática) que nenhum registo individual pode ser identificado no modelo resultante. O parâmetro <InlineMath math="\epsilon" /> controla o trade-off entre privacidade e utilidade.</li>
          <li><strong>Membership Inference Defence:</strong> modelos treinados com regularização forte são menos vulneráveis a ataques que tentam determinar se um dado registo estava no conjunto de treino.</li>
        </ul>

        <h3 style={S.h3}>Pilar 5 — Accountability (Responsabilização)</h3>
        <p style={S.p}>
          Accountability significa que existe sempre um humano responsável pelo comportamento de um modelo
          de ML — e que essa responsabilidade pode ser demonstrada e auditada. Os <strong>Model Cards</strong>
          (ver secção 6) são o mecanismo padrão de documentação de accountability para cada modelo.
        </p>
        <div style={S.note}>
          O <strong>Teorema da Impossibilidade de Chouldechova (2017)</strong> prova formalmente que,
          quando a prevalência base difere entre grupos, é matematicamente impossível satisfazer
          simultaneamente Demographic Parity, Equal Opportunity e Calibration. A escolha da métrica de
          fairness é, portanto, sempre uma decisão de valor — não apenas técnica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===================== SECTION 3: XAI ===================== */}
      <div style={S.section}>
        <h2 style={S.h2}>3. XAI — Explicabilidade de Modelos</h2>
        <p style={S.p}>
          Explainable AI (XAI) é o conjunto de técnicas que tornam o comportamento dos modelos de ML
          compreensível — quer para os programadores que os desenvolvem, quer para os utilizadores
          afectados pelas suas decisões. Existem três grandes métodos model-agnostic: SHAP, LIME e PDP.
        </p>

        <h3 style={S.h3}>SHAP — SHapley Additive exPlanations</h3>
        <p style={S.p}>
          SHAP fundamenta-se nos <strong>Shapley values</strong> da teoria dos jogos cooperativos.
          A intuição: imaginar que cada feature é um "jogador" num jogo, e o "prémio" é a diferença
          entre a predição e o valor base (média das predições). Os Shapley values distribuem este
          prémio de forma justa, calculando a contribuição marginal média de cada feature em todas
          as ordens possíveis de coalições:
        </p>
        <div style={S.math}>
          <BlockMath math="\phi_i = \sum_{S \subseteq F \setminus \{i\}} \frac{|S|!\,(|F|-|S|-1)!}{|F|!} \left[ f(S \cup \{i\}) - f(S) \right]" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="F" /> é o conjunto de todas as features, <InlineMath math="S" /> é uma
          coligação sem a feature <InlineMath math="i" />, e <InlineMath math="f(S)" /> é a predição
          do modelo usando apenas as features em <InlineMath math="S" />. Na prática, calcular o valor
          exacto é exponencial em <InlineMath math="|F|" />, mas o <strong>TreeSHAP</strong> calcula
          valores exactos em tempo polinomial para modelos baseados em árvores.
        </p>
        <SHAPDiagram />
        <p style={S.p}>
          O gráfico waterfall mostra como a predição final de um modelo de scoring de crédito se
          constrói a partir do valor base (média do dataset). Cada feature "empurra" a predição
          para cima (positivo, verde) ou para baixo (negativo, vermelho). O valor base mais a soma
          de todas as contribuições equals a predição final.
        </p>

        <h3 style={S.h3}>LIME — Local Interpretable Model-agnostic Explanations</h3>
        <p style={S.p}>
          LIME aborda o problema de forma diferente: em vez de analisar o modelo globalmente,
          treina um <strong>modelo substituto linear</strong> em torno de cada predição individual.
          O algoritmo tem três passos:
        </p>
        <ol style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Amostrar a vizinhança:</strong> gerar perturbações do input original (ex: mascarar palavras num texto, alterar valores numa tabela).</li>
          <li><strong>Pesar por proximidade:</strong> dar mais peso às perturbações mais próximas do ponto original (kernel de proximidade).</li>
          <li><strong>Ajustar modelo linear:</strong> treinar uma regressão linear ponderada com as perturbações — os coeficientes são a "explicação" local.</li>
        </ol>
        <LIMEDiagram />
        <div style={S.note}>
          <strong>Limitação crítica do LIME:</strong> as explicações podem ser instáveis — perturbações
          ligeiramente diferentes produzem explicações muito diferentes. LIME deve ser usado com
          múltiplas execuções para verificar estabilidade, e não como única fonte de explicação em
          contextos de alto risco.
        </div>

        <h3 style={S.h3}>PDP — Partial Dependence Plots</h3>
        <p style={S.p}>
          Os PDPs mostram o <strong>efeito marginal</strong> de uma ou duas features na predição do
          modelo, marginalizando sobre a distribuição conjunta de todas as outras features:
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{f}_{x_S}(x_S) = \mathbb{E}_{x_C}\left[\hat{f}(x_S, x_C)\right] \approx \frac{1}{n} \sum_{i=1}^n \hat{f}(x_S, x_C^{(i)})" />
        </div>
        <p style={S.p}>
          Na prática, para calcular o PDP para a feature <InlineMath math="x_S" /> num valor fixo:
          substituir esse valor em todos os registos do dataset, calcular as predições, e tomar a média.
          Repetir para todos os valores de <InlineMath math="x_S" />.
        </p>
        <PDPDiagram />
        <p style={S.p}>
          Os <strong>ICE plots (Individual Conditional Expectation)</strong> são uma alternativa que
          mostra uma curva por observação, em vez da média — revelando heterogeneidade que o PDP
          médio esconde. Se as curvas ICE forem muito divergentes, o efeito da feature depende
          fortemente das outras features (interacções).
        </p>
        <div style={S.highlight}>
          <strong>Quando usar cada método:</strong>
          <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0 0' }}>
            <li><strong>SHAP:</strong> melhor escolha para explicações locais e globais consistentes; obrigatório em decisões individuais de alto risco.</li>
            <li><strong>LIME:</strong> útil para modelos em texto e imagem; verificar sempre a estabilidade das explicações.</li>
            <li><strong>PDP/ICE:</strong> ideal para comunicar o efeito de uma feature a stakeholders não-técnicos; detectar relações não-lineares.</li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===================== SECTION 4: EU AI ACT ===================== */}
      <div style={S.section}>
        <h2 style={S.h2}>4. EU AI Act — Regulamentação Europeia</h2>
        <p style={S.p}>
          O EU AI Act (Regulamento (UE) 2024/1689), aprovado em junho de 2024 e com entrada em vigor
          faseada até 2026, é o primeiro quadro legal abrangente para sistemas de IA no mundo. A sua
          abordagem baseia-se numa classificação de risco em quatro níveis:
        </p>
        <AIActRiskDiagram />

        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Nível de Risco</th>
                <th style={S.th}>Exemplos</th>
                <th style={S.th}>Obrigações</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Inaceitável (Proibido)', 'Social scoring por autoridades, reconhecimento de emoções em locais de trabalho, manipulação subliminar, identificação biométrica em tempo real em espaços públicos (com excepções)', 'PROIBIDO. Produção e deployment ilegal na UE.'],
                ['Alto Risco', 'Hiring/HR (triagem de CVs), crédito e scoring financeiro, sistemas de educação e formação, sistemas de segurança crítica, gestão de migrações, aplicação da lei', 'Avaliação de conformidade (conformity assessment) antes do deployment; registo num DB europeu; requisitos de transparência, robustez, supervisão humana e documentação técnica.'],
                ['Risco Limitado', 'Chatbots e agentes conversacionais, sistemas de geração de conteúdo deepfake, sistemas que interagem com pessoas', 'Obrigação de transparência: o utilizador deve ser informado de que está a interagir com IA.'],
                ['Risco Mínimo', 'Filtros de spam, recomendações de conteúdo, jogos com IA, assistentes gramaticais', 'Sem obrigações adicionais. Encorajado o uso de Códigos de Conduta voluntários.'],
              ].map(([nivel, ex, ob]) => (
                <tr key={nivel}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{nivel}</td>
                  <td style={S.td}>{ex}</td>
                  <td style={S.td}>{ob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>O Que é uma "Avaliação de Conformidade"?</h3>
        <p style={S.p}>
          Para sistemas de <strong>alto risco</strong>, a conformity assessment exige documentação
          técnica exaustiva que prove que o sistema cumpre os requisitos do AI Act antes de ser
          colocado no mercado:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Sistema de gestão de qualidade:</strong> processos documentados para desenvolvimento, treino, validação e monitorização do sistema.</li>
          <li><strong>Documentação técnica:</strong> descrição do modelo, dados de treino, métricas de desempenho, limitações, arquitectura.</li>
          <li><strong>Registos (logging):</strong> o sistema deve gerar automaticamente logs de funcionamento para permitir auditoria posterior.</li>
          <li><strong>Transparência para utilizadores:</strong> documentação clara sobre as capacidades e limitações do sistema para os utilizadores finais e autoridades regulatórias.</li>
          <li><strong>Supervisão humana:</strong> o sistema deve ser desenhado para permitir supervisão humana efectiva — incluindo capacidade de parar, anular ou corrigir decisões.</li>
          <li><strong>Exactidão, robustez e cibersegurança:</strong> métricas documentadas de desempenho, testes de robustez a adversarial inputs e resistência a ataques.</li>
        </ul>
        <div style={S.note}>
          O <strong>AI Office</strong> (criado pela Comissão Europeia) é a entidade supervisora a nível
          europeu, enquanto cada Estado-membro designa autoridades nacionais competentes. As coimas por
          violação do AI Act podem atingir 35 milhões de euros ou 7% do volume de negócios global anual.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===================== SECTION 5: GOVERNANCE FRAMEWORK ===================== */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Framework de Governance — 8 Passos</h2>
        <p style={S.p}>
          Um framework de governance robusto organiza a implementação de políticas, controlos e
          processos de forma estruturada. Este processo circular de 8 passos cobre o ciclo completo
          desde a definição do caso de uso até à monitorização contínua.
        </p>
        <GovernanceFrameworkDiagram />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '1.5rem' }}>
          {[
            {
              num: '1', title: 'Define Use Case',
              color: '#f97316',
              body: 'Documentar o caso de uso: objectivo de negócio, dados necessários, outputs esperados, decisões afectadas. Definir quem são os stakeholders e que grupos populacionais são afectados.',
              tools: 'Documento de Caso de Uso, AI Canvas'
            },
            {
              num: '2', title: 'Risk Assessment',
              color: '#f97316',
              body: 'Classificar o sistema segundo o EU AI Act (risco mínimo, limitado, elevado, inaceitável). Avaliar riscos de fairness, privacidade, segurança, e impacto nos afectados. Decidir se é necessária DPIA.',
              tools: 'Risk Matrix, DPIA, AI Act Classifier'
            },
            {
              num: '3', title: 'Data Governance',
              color: '#f97316',
              body: 'Documentar a proveniência dos dados de treino (datasheet for datasets). Verificar licenças e base legal GDPR. Implementar controlos de qualidade, retenção e eliminação. Auditar bias nos dados de treino.',
              tools: 'Data Catalog (Unity Catalog, DataHub), Datasheets'
            },
            {
              num: '4', title: 'Model Development',
              color: '#f97316',
              body: 'Seguir MLOps best practices: versionamento de código e dados, rastreio de experimentos, reprodutibilidade. Documentar hiperparâmetros, métricas de treino/validação, e decisões arquitecturais.',
              tools: 'MLflow, DVC, Git, experiment tracking'
            },
            {
              num: '5', title: 'Fairness Audit',
              color: '#f97316',
              body: 'Medir métricas de fairness (demographic parity, equal opportunity) por subgrupos. Documentar disparidades detectadas. Decidir mitigações: re-sampling, re-weighting, post-processing thresholds.',
              tools: 'Fairlearn, AI Fairness 360 (IBM), What-If Tool'
            },
            {
              num: '6', title: 'Explainability',
              color: '#f97316',
              body: 'Integrar XAI no pipeline de inferência (não apenas post-hoc). Gerar SHAP values para cada predição de alto risco. Validar que as explicações são estáveis e coerentes com o conhecimento de domínio.',
              tools: 'SHAP, LIME, InterpretML, Captum (PyTorch)'
            },
            {
              num: '7', title: 'Deploy with Controls',
              color: '#f97316',
              body: 'Deployment com guardrails: limites de confiança mínima para decisões automáticas, circuit breakers, filas de revisão humana. Registar todos os outputs e inputs para auditoria (com retenção adequada ao GDPR).',
              tools: 'Shadow mode, A/B testing, feature flags, audit logs'
            },
            {
              num: '8', title: 'Monitor & Audit',
              color: '#f97316',
              body: 'Monitorização contínua de drift, fairness, performance e anomalias (ver Módulo 06). Auditoria periódica por terceiros em sistemas de alto risco. Revisão do framework à medida que o contexto muda.',
              tools: 'Evidently AI, Alibi Detect, Grafana dashboards, auditores externos'
            },
          ].map(({ num, title, color: c, body, tools }) => (
            <div key={num} style={{ background: 'var(--bg-secondary)', border: `1px solid var(--card-border)`, borderLeft: `3px solid ${c}`, borderRadius: 8, padding: '0.85rem 1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span style={{ background: c, color: 'white', fontSize: '0.75rem', fontWeight: 800, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>{num}</span>
                <span style={{ fontWeight: 700, color: c, fontSize: '0.9rem' }}>{title}</span>
              </div>
              <p style={{ margin: '0 0 0.4rem', fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{body}</p>
              <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-secondary)' }}><strong style={{ color: c }}>Ferramentas:</strong> {tools}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===================== SECTION 6: MODEL CARDS & DATASHEETS ===================== */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Model Cards e Datasheets</h2>
        <p style={S.p}>
          <strong>Model Cards</strong> (Mitchell et al., Google, 2019) são documentos padronizados que
          acompanham cada modelo de ML, tornando o seu comportamento, limitações e considerações éticas
          transparentes para todos os stakeholders — desde os utilizadores finais até a reguladores.
          São hoje um standard de facto na indústria e um requisito implícito do EU AI Act para sistemas
          de alto risco.
        </p>

        <h3 style={S.h3}>Template de Model Card</h3>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
          <div style={{ color, fontWeight: 700, marginBottom: '0.5rem' }}># Model Card — [Nome do Modelo v1.x]</div>
          <div><span style={{ color: '#f97316', fontWeight: 700 }}>## Modelo</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Tipo: XGBoost Classifier &nbsp;|&nbsp; Versão: 1.3.2</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Data de treino: 2025-03-15 &nbsp;|&nbsp; Responsável: Equipa de Crédito</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Uso Pretendido</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Aprovação de crédito pessoal (montantes &lt; 50.000€)</div>
          <div style={{ color: 'var(--text-secondary)' }}>- NÃO usar para: scoring de seguros, decisões de emprego</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Dados de Treino</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Período: Jan 2020 – Dez 2024 &nbsp;|&nbsp; N = 450.000 pedidos</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Base legal GDPR: Interesse legítimo (Art.6.1f)</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Métricas de Desempenho</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- AUC-ROC: 0.84 &nbsp;|&nbsp; KS: 0.52 &nbsp;|&nbsp; Gini: 0.68</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Por segmento: [tabela de fairness metrics por género/idade]</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Considerações Éticas e Limitações</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Disparidade detectada: TPR 8pp inferior em clientes &gt;65 anos</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Mitigação: threshold calibrado por segmento etário</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Não performant para clientes sem histórico de crédito</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Explicabilidade</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- SHAP disponível por predição individual (API /explain)</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Top 3 features: debt_ratio, payment_history, income_stability</div>
        </div>

        <h3 style={S.h3}>Datasheets for Datasets</h3>
        <p style={S.p}>
          <strong>Datasheets for Datasets</strong> (Gebru et al., 2018) são a contraparte dos Model Cards
          para os dados — documentam a proveniência, composição, processo de recolha, pré-processamento
          e usos recomendados de um dataset. São essenciais para rastrear problemas de bias e garantir
          compliance GDPR.
        </p>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
          <div style={{ color, fontWeight: 700, marginBottom: '0.5rem' }}># Datasheet — Dataset de Pedidos de Crédito 2020-2024</div>
          <div><span style={{ color: '#f97316', fontWeight: 700 }}>## Motivação</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Criado para: treino de modelos de scoring de crédito interno</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Financiado por: [Organização X]</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Composição</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- 450.000 instâncias; 34 features; target: default em 12 meses</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Dados sensíveis: idade, género (pseudonimizados)</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Processo de Recolha</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Fonte: sistema CRM interno + bureau de crédito externo</div>
          <div style={{ color: 'var(--text-secondary)' }}>- Base legal: contrato (Art.6.1b GDPR) + interesse legítimo</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Usos Recomendados / Não Recomendados</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Recomendado: modelos de aprovação de crédito pessoal</div>
          <div style={{ color: 'var(--text-secondary)' }}>- NÃO recomendado: scoring de seguros, detecção de fraude</div>
          <div style={{ marginTop: '0.5rem' }}><span style={{ color: '#f97316', fontWeight: 700 }}>## Retenção e Eliminação</span></div>
          <div style={{ color: 'var(--text-secondary)' }}>- Expiração: 2028-01-01 | Responsável: Data Steward — Ana Silva</div>
        </div>
        <div style={S.note}>
          A combinação de <strong>Model Cards + Datasheets</strong> forma a base documental mínima para
          qualquer sistema de ML de alto risco em conformidade com o EU AI Act e o GDPR. Devem ser
          mantidos actualizados a cada re-treino ou alteração significativa do modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ===================== SECTION 7: FECHO DO CURSO ===================== */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Fecho do Curso MLOps — O Ciclo que Não Termina</h2>
        <p style={S.p}>
          Ao longo dos 7 módulos deste curso, construímos uma visão completa do que significa colocar
          Machine Learning em produção de forma responsável e sustentável. Cada módulo revelou uma camada
          essencial do problema:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Módulo</th>
                <th style={S.th}>Tema central</th>
                <th style={S.th}>A questão que responde</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['01', 'Introdução ao MLOps', 'Porque é que 87% dos modelos de ML nunca chegam a produção? O que torna ML em produção diferente de ML experimental?'],
                ['02', 'Dados — Validação e Feature Stores', 'Como garantir que os dados de treino e inferência são consistentes, válidos e rastreáveis ao longo do tempo?'],
                ['03', 'Deployment Pipelines & CI/CD', 'Como passar de um notebook Jupyter para um serviço de inferência robusto, testado e automaticamente deployado?'],
                ['04', 'Containerização com Docker & Kubernetes', 'Como garantir que o modelo se comporta de forma idêntica em desenvolvimento, staging e produção, independentemente do ambiente?'],
                ['05', 'Monitorização de Modelos em Produção', 'Como detectar quando um modelo em produção começa a degradar, antes que o impacto de negócio seja significativo?'],
                ['06', 'Drift Detection e Re-treino Automático', 'Como medir rigorosamente o data drift e o concept drift, e como automatizar o ciclo de re-treino de forma segura?'],
                ['07', 'Governance, Responsible AI & Regulamentação', 'Como garantir que sistemas de ML são legalmente conformes, eticamente responsáveis e auditáveis ao longo de todo o seu ciclo de vida?'],
              ].map(([m, t, q]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color, textAlign: 'center', whiteSpace: 'nowrap' }}>M{m}</td>
                  <td style={{ ...S.td, fontWeight: 600 }}>{t}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          A narrativa que une todos os módulos é a seguinte: um modelo de ML não é um artefacto estático —
          é um sistema vivo, inserido num contexto de negócio em mudança, alimentado por dados que evoluem,
          avaliado por métricas que têm de ser monitorizadas, e sujeito a obrigações legais e éticas que
          crescem à medida que o impacto da IA na sociedade aumenta.
        </p>
        <p style={S.p}>
          O ciclo MLOps — recolher dados, treinar, validar, deployer, monitorizar, detectar drift,
          re-treinar — não é uma sequência linear que termina. É um ciclo contínuo, onde cada revolução
          do ciclo deve incorporar as aprendizagens da revolução anterior. E este ciclo tem de ser
          executado com <strong>governance</strong>: com políticas claras, responsabilidades definidas,
          documentação actualizada e mecanismos de supervisão humana.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>A fronteira do estado da arte</strong> está a mover-se rapidamente — LLMs em produção,
            RAG pipelines, agentes autónomos — mas os princípios fundamentais deste curso mantêm-se:
            validação rigorosa, monitorização contínua, explicabilidade sempre que necessário, e
            accountability em cada decisão automatizada. A tecnologia muda; a responsabilidade não.
          </p>
        </div>
      </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>8. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>GDPR e Proteção de Dados em IA</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Responsible AI — Os 5 Pilares</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>XAI — Explicabilidade de Modelos</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>EU AI Act — Regulamentação Europeia</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Framework de Governance — 8 Passos</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Model Cards e Datasheets</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Fecho do Curso MLOps — O Ciclo que Não Termina</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
