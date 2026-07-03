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
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function HumanOrganSVG() {
  return (
    <svg viewBox="0 0 700 340" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '1.5rem auto' }}>
      <ellipse cx="220" cy="50" rx="28" ry="32" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M192 82 Q180 110 175 160 Q170 200 175 250" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M248 82 Q260 110 265 160 Q270 200 265 250" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M175 130 Q150 135 145 155" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M265 130 Q290 135 295 155" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M190 250 Q185 290 182 320" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M250 250 Q255 290 258 320" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M192 82 Q220 95 248 82" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <rect x="2" y="110" width="80" height="36" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="42" y="124" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">HEART</text>
      <text x="42" y="138" textAnchor="middle" fontSize="8" fill="#f97316">cardiac DT</text>
      <line x1="82" y1="128" x2="185" y2="128" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <rect x="175" y="120" width="16" height="12" rx="2" fill="#f97316" />
      <text x="183" y="129" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">DT</text>
      <rect x="2" y="158" width="80" height="36" rx="6" fill="rgba(251,146,60,0.12)" stroke="#f97316" strokeWidth="1.5" />
      <text x="42" y="172" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">LUNGS</text>
      <text x="42" y="186" textAnchor="middle" fontSize="8" fill="#f97316">respiratory DT</text>
      <line x1="82" y1="176" x2="185" y2="160" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <rect x="175" y="153" width="16" height="12" rx="2" fill="#f97316" />
      <text x="183" y="162" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">DT</text>
      <rect x="340" y="20" width="80" height="36" rx="6" fill="rgba(251,146,60,0.12)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="380" y="34" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fb923c">BRAIN</text>
      <text x="380" y="48" textAnchor="middle" fontSize="8" fill="#fb923c">neuro DT</text>
      <line x1="340" y1="38" x2="252" y2="52" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,3" />
      <rect x="236" y="45" width="16" height="12" rx="2" fill="#fb923c" />
      <text x="244" y="54" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">DT</text>
      <rect x="340" y="180" width="80" height="36" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="380" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f59e0b">KIDNEYS</text>
      <text x="380" y="208" textAnchor="middle" fontSize="8" fill="#f59e0b">renal DT</text>
      <line x1="340" y1="198" x2="265" y2="185" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
      <rect x="249" y="178" width="16" height="12" rx="2" fill="#f59e0b" />
      <text x="257" y="187" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">DT</text>
      <text x="510" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">DATA SOURCES</text>
      {[['Wearables', 55], ['EHR', 90], ['Genomics', 125], ['Imaging', 160], ['Labs', 195]].map(([label, y]) => (
        <g key={label}>
          <rect x="455" y={y - 13} width="110" height="24" rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
          <text x="510" y={y + 4} textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="600">{label}</text>
        </g>
      ))}
    </svg>
  );
}

function PatientDTHubSVG() {
  const spokes = [
    { label: 'Wearables', angle: -90, c: '#f97316' },
    { label: 'EHR', angle: -30, c: '#f97316' },
    { label: 'Genomics', angle: 30, c: '#f97316' },
    { label: 'Imaging', angle: 90, c: '#f97316' },
    { label: 'Lab Results', angle: 150, c: '#f97316' },
    { label: 'Clinical Notes', angle: 210, c: '#f97316' },
  ];
  const cx = 300, cy = 175, r = 120;
  return (
    <svg viewBox="0 0 600 350" style={{ width: '100%', maxWidth: 600, display: 'block', margin: '1.5rem auto' }}>
      {/* Lines drawn first so nodes cover them */}
      {spokes.map(({ label, angle, c }) => {
        const rad = (angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return <line key={label} x1={cx} y1={cy} x2={x} y2={y} stroke={c} strokeWidth="1.5" strokeDasharray="5,3" />;
      })}
      {spokes.map(({ label, angle, c }) => {
        const rad = (angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        const lx = cx + (r + 52) * Math.cos(rad);
        const ly = cy + (r + 52) * Math.sin(rad);
        const short = label.split(' ')[0].slice(0, 3).toUpperCase();
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="18" fill="var(--bg-primary)" />
            <circle cx={x} cy={y} r="18" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="2" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="8" fontWeight="700" fill={c}>{short}</text>
            <text x={lx} y={ly + 4} textAnchor="middle" fontSize="9" fill={c} fontWeight="600">{label}</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="52" fill="var(--bg-primary)" />
      <circle cx={cx} cy={cy} r="52" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="2" />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="12" fontWeight="800" fill="#f97316">Patient</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="12" fontWeight="800" fill="#f97316">Digital Twin</text>
      <text x={cx} y={cy + 22} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">real-time model</text>
    </svg>
  );
}

function CardioSVG() {
  return (
    <svg viewBox="0 0 700 310" style={{ width: '100%', display: 'block', margin: '1.5rem auto', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f97316">Cardiovascular Digital Twin — Circuito Cardíaco</text>

      {/* Left side: oxygenated (bright orange) */}
      {/* LA */}
      <rect x="120" y="50" width="100" height="44" rx="6" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="2" />
      <text x="170" y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">LA</text>
      <text x="170" y="84" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Aurícula Esq.</text>
      {/* LV */}
      <rect x="120" y="130" width="100" height="44" rx="6" fill="rgba(249,115,22,0.3)" stroke="#f97316" strokeWidth="2" />
      <text x="170" y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">LV</text>
      <text x="170" y="164" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Ventrículo Esq.</text>

      {/* Right side: deoxygenated (amber) */}
      {/* RA */}
      <rect x="480" y="50" width="100" height="44" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="2" />
      <text x="530" y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f59e0b">RA</text>
      <text x="530" y="84" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Aurícula Dir.</text>
      {/* RV */}
      <rect x="480" y="130" width="100" height="44" rx="6" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="2" />
      <text x="530" y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f59e0b">RV</text>
      <text x="530" y="164" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Ventrículo Dir.</text>

      {/* Lungs */}
      <rect x="280" y="50" width="140" height="44" rx="6" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="350" y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fb923c">Pulmões</text>
      <text x="350" y="84" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Trocas gasosas O₂/CO₂</text>

      {/* Body */}
      <rect x="280" y="165" width="140" height="44" rx="6" fill="rgba(234,88,12,0.15)" stroke="#ea580c" strokeWidth="1.5" />
      <text x="350" y="185" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ea580c">Corpo</text>
      <text x="350" y="199" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Tecidos periféricos</text>

      {/* Arrows: LA→LV */}
      <line x1="170" y1="94" x2="170" y2="128" stroke="#f97316" strokeWidth="2" />
      <polygon points="164,124 170,132 176,124" fill="#f97316" />
      {/* LV→Body */}
      <line x1="220" y1="152" x2="278" y2="187" stroke="#f97316" strokeWidth="2" />
      <polygon points="272,182 282,190 274,194" fill="#f97316" />
      {/* Body→RA */}
      <line x1="420" y1="187" x2="478" y2="165" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="472,161 482,168 476,172" fill="#f59e0b" />
      {/* RA→RV */}
      <line x1="530" y1="94" x2="530" y2="128" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="524,124 530,132 536,124" fill="#f59e0b" />
      {/* RV→Lungs */}
      <line x1="480" y1="152" x2="422" y2="87" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="416,83 426,90 418,95" fill="#f59e0b" />
      {/* Lungs→LA */}
      <line x1="280" y1="72" x2="222" y2="72" stroke="#f97316" strokeWidth="2" />
      <polygon points="218,66 226,72 218,78" fill="#f97316" />

      {/* ECG strip */}
      <text x="50" y="238" fontSize="9" fontWeight="600" fill="var(--text-secondary)">ECG Waveform (simulated)</text>
      <line x1="50" y1="270" x2="650" y2="270" stroke="var(--card-border)" strokeWidth="1" />
      <path d="M50 270 L110 270 L120 270 L125 260 L130 270 L140 270 L150 270 L158 242 L165 285 L172 238 L180 270 L190 270 L195 265 L200 270 L260 270 L270 270 L275 260 L280 270 L290 270 L300 270 L308 242 L315 285 L322 238 L330 270 L340 270 L345 265 L350 270 L410 270 L420 270 L425 260 L430 270 L440 270 L450 270 L458 242 L465 285 L472 238 L480 270 L490 270 L495 265 L500 270 L560 270 L570 270 L575 260 L580 270 L610 270" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="295" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">P Q R S T waves — electrofisiologia DT</text>
    </svg>
  );
}

function TumorGrowthSVG() {
  return (
    <svg viewBox="0 0 620 300" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '1.5rem auto' }}>
      <line x1="60" y1="240" x2="560" y2="240" stroke="var(--card-border)" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="60" y1="20" x2="60" y2="240" stroke="var(--card-border)" strokeOpacity="0.6" strokeWidth="1.5" />
      <text x="310" y="270" textAnchor="middle" fontSize="11" fill="#64748b">Time (weeks)</text>
      <text x="20" y="135" textAnchor="middle" fontSize="11" fill="#64748b" transform="rotate(-90,20,135)">Tumor Volume (cm3)</text>
      {[0, 4, 8, 12, 16, 20].map((v, i) => (
        <g key={v}>
          <line x1={60 + i * 80} y1="240" x2={60 + i * 80} y2="246" stroke="#94a3b8" strokeWidth="1" />
          <text x={60 + i * 80} y="258" textAnchor="middle" fontSize="9" fill="#64748b">{v}</text>
        </g>
      ))}
      {[0, 25, 50, 75, 100].map((v, i) => (
        <g key={v}>
          <line x1="54" y1={240 - i * 44} x2="60" y2={240 - i * 44} stroke="#94a3b8" strokeWidth="1" />
          <text x="48" y={244 - i * 44} textAnchor="end" fontSize="9" fill="#64748b">{v}</text>
        </g>
      ))}
      <path d="M60 80 C120 75 180 78 240 85 C300 92 360 100 420 108 C460 115 500 118 540 120" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3" />
      <text x="545" y="122" fontSize="9" fill="#f59e0b" fontWeight="600">Chemo</text>
      <path d="M60 80 C120 70 180 62 240 60 C300 59 360 65 420 78 C460 88 500 98 540 108" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,3" />
      <text x="545" y="110" fontSize="9" fill="#f97316" fontWeight="600">Radio</text>
      <path d="M60 80 C120 60 180 40 240 28 C300 20 360 18 420 22 C460 26 500 32 540 38" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <text x="545" y="40" fontSize="9" fill="#f97316" fontWeight="600">Combined</text>
      <line x1="60" y1="20" x2="60" y2="240" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3" />
      <text x="62" y="32" fontSize="8" fill="#f97316">Tx start</text>
      <circle cx="60" cy="80" r="5" fill="#64748b" />
      <text x="68" y="90c" fontSize="8" fill="#64748b">Baseline: 80 cm3</text>
      <text x="310" y="8" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Mechanistic Tumor Growth Model — Treatment Comparison</text>
    </svg>
  );
}

function OrganChipSVG() {
  return (
    <svg viewBox="0 0 640 280" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '1.5rem auto' }}>
      <rect x="150" y="40" width="340" height="200" rx="12" fill="rgba(249,115,22,0.05)" stroke="#f97316" strokeWidth="2" />
      <text x="320" y="28" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Organ-on-Chip Schematic</text>
      <rect x="170" y="70" width="300" height="40" rx="6" fill="rgba(251,146,60,0.15)" stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="86" textAnchor="middle" fontSize="9" fontWeight="600" fill="#f97316">Lung Epithelial Cell Layer</text>
      <text x="320" y="100" textAnchor="middle" fontSize="8" fill="#f97316">air-liquid interface</text>
      <rect x="170" y="112" width="300" height="8" rx="2" fill="#94a3b8" />
      <text x="320" y="122" textAnchor="middle" fontSize="7" fill="#64748b">porous membrane (2 um pores)</text>
      <rect x="170" y="122" width="300" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="138" textAnchor="middle" fontSize="9" fontWeight="600" fill="#f97316">Vascular Endothelial Cell Layer</text>
      <text x="320" y="152" textAnchor="middle" fontSize="8" fill="#f97316">blood-side flow</text>
      <polygon points="170,86 155,82 155,90" fill="#f97316" />
      <line x1="155" y1="86" x2="140" y2="86" stroke="#f97316" strokeWidth="1.5" />
      <text x="110" y="90" textAnchor="middle" fontSize="8" fill="#f97316">Air in</text>
      <polygon points="480,90 490,86 490,94" fill="#f97316" />
      <line x1="470" y1="90" x2="490" y2="90" stroke="#f97316" strokeWidth="1.5" />
      <text x="520" y="94" textAnchor="middle" fontSize="8" fill="#f97316">Air out</text>
      <polygon points="170,142 155,138 155,146" fill="#f97316" />
      <line x1="155" y1="142" x2="140" y2="142" stroke="#f97316" strokeWidth="1.5" />
      <text x="108" y="146" textAnchor="middle" fontSize="8" fill="#f97316">Drug in</text>
      <polygon points="480,146 490,142 490,150" fill="#f97316" />
      <line x1="470" y1="146" x2="490" y2="146" stroke="#f97316" strokeWidth="1.5" />
      <text x="512" y="150" textAnchor="middle" fontSize="8" fill="#f97316">Effluent</text>
      {[185, 225, 265, 305, 345, 385, 425, 455].map((x, i) => (
        <rect key={i} x={x} y="168" width="6" height="20" rx="2" fill="#f59e0b" />
      ))}
      <text x="320" y="200" textAnchor="middle" fontSize="8" fill="#f59e0b">Sensor Electrode Array — TEER measurement</text>
      <rect x="170" y="215" width="300" height="20" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="320" y="229" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="600">Real-time data feed to Computational Digital Twin</text>
    </svg>
  );
}

function HospitalFloorSVG() {
  return (
    <svg viewBox="0 0 680 300" style={{ width: '100%', maxWidth: 680, display: 'block', margin: '1.5rem auto' }}>
      <text x="340" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Hospital Floor Plan Digital Twin</text>
      <rect x="20" y="40" width="130" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="85" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">ER</text>
      <text x="85" y="92" textAnchor="middle" fontSize="8" fill="#f97316">Emergency</text>
      <text x="85" y="104" textAnchor="middle" fontSize="8" fill="#f97316">22 beds — HIGH</text>
      <rect x="20" y="160" width="130" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="2" />
      <text x="85" y="196" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f59e0b">ICU</text>
      <text x="85" y="212" textAnchor="middle" fontSize="8" fill="#f59e0b">Intensive Care</text>
      <text x="85" y="224" textAnchor="middle" fontSize="8" fill="#f59e0b">10/12 beds — 83%</text>
      <rect x="275" y="40" width="130" height="80" rx="6" fill="rgba(251,146,60,0.12)" stroke="#fb923c" strokeWidth="2" />
      <text x="340" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fb923c">OR</text>
      <text x="340" y="92" textAnchor="middle" fontSize="8" fill="#fb923c">Operating Rooms</text>
      <text x="340" y="104" textAnchor="middle" fontSize="8" fill="#fb923c">4 active / 6 total</text>
      <rect x="530" y="40" width="130" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="595" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">WARDS</text>
      <text x="595" y="92" textAnchor="middle" fontSize="8" fill="#f97316">General Inpatient</text>
      <text x="595" y="104" textAnchor="middle" fontSize="8" fill="#f97316">68/90 beds — 76%</text>
      <rect x="275" y="160" width="130" height="80" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="340" y="196" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">RADIOLOGY</text>
      <text x="340" y="212" textAnchor="middle" fontSize="8" fill="#f97316">CT / MRI / X-Ray</text>
      <text x="340" y="224" textAnchor="middle" fontSize="8" fill="#f97316">queue: 8 patients</text>
      <rect x="530" y="160" width="130" height="80" rx="6" fill="rgba(251,146,60,0.1)" stroke="#f97316" strokeWidth="2" />
      <text x="595" y="196" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">PHARMACY</text>
      <text x="595" y="212" textAnchor="middle" fontSize="8" fill="#f97316">Dispensing</text>
      <text x="595" y="224" textAnchor="middle" fontSize="8" fill="#f97316">automated</text>
      <line x1="150" y1="80" x2="275" y2="80" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="272,75 284,80 272,85" fill="#f97316" />
      <line x1="405" y1="80" x2="530" y2="80" stroke="#fb923c" strokeWidth="1.5" />
      <polygon points="527,75 539,80 527,85" fill="#fb923c" />
      <line x1="85" y1="120" x2="85" y2="160" stroke="#f59e0b" strokeWidth="1.5" />
      <polygon points="80,157 85,169 90,157" fill="#f59e0b" />
      <line x1="340" y1="120" x2="340" y2="160" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="335,157 340,169 345,157" fill="#f97316" />
      <line x1="595" y1="120" x2="595" y2="160" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="590,157 595,169 600,157" fill="#f97316" />
      <rect x="18" y="38" width="134" height="84" rx="8" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="6,3" />
      <text x="85" y="136" textAnchor="middle" fontSize="8" fill="#f97316" fontWeight="700">CONGESTION ALERT</text>
      <rect x="240" y="258" width="200" height="24" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="340" y="274" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="700">DT real-time occupancy simulation</text>
    </svg>
  );
}

function DrugFunnelSVG() {
  const stages = [
    { label: 'Target ID', width: 520, y: 20, c: '#f97316', count: '10,000' },
    { label: 'Hit Discovery', width: 430, y: 78, c: '#f97316', count: '1,000' },
    { label: 'Lead Opt.', width: 340, y: 136, c: '#f97316', count: '250' },
    { label: 'Candidate', width: 250, y: 194, c: '#f97316', count: '25' },
    { label: 'Phase I/II', width: 160, y: 252, c: '#f97316', count: '5' },
    { label: 'Phase III', width: 90, y: 310, c: '#f97316', count: '2' },
    { label: 'Approval', width: 50, y: 368, c: '#f97316', count: '1' },
  ];
  return (
    <svg viewBox="0 0 720 440" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      <text x="360" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Drug Discovery Funnel with DT Integration</text>
      {stages.map(({ label, width, y, c, count }) => (
        <g key={label}>
          <rect x={(560 - width) / 2 + 50} y={y + 22} width={width} height="44" rx="4" fill={`${c}22`} stroke={c} strokeWidth="1.5" />
          <text x="330" y={y + 48} textAnchor="middle" fontSize="10" fontWeight="700" fill={c}>{label}</text>
          <text x="330" y={y + 61} textAnchor="middle" fontSize="8" fill={c}>{count} compounds</text>
          <rect x="620" y={y + 28} width="28" height="18" rx="4" fill="#f97316" />
          <text x="634" y={y + 41} textAnchor="middle" fontSize="8" fill="#fff" fontWeight="700">DT</text>
        </g>
      ))}
    </svg>
  );
}

function ArtificialPancreasSVG() {
  return (
    <svg viewBox="0 0 620 260" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '1.5rem auto' }}>
      <text x="310" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Artificial Pancreas Closed-Loop Control</text>
      <rect x="20" y="90" width="120" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="80" y="116" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">CGM Sensor</text>
      <text x="80" y="130" textAnchor="middle" fontSize="8" fill="#f97316">Glucose reading</text>
      <text x="80" y="142" textAnchor="middle" fontSize="8" fill="#f97316">every 5 min</text>
      <line x1="140" y1="120" x2="198" y2="120" stroke="#f97316" strokeWidth="2" />
      <polygon points="195,115 207,120 195,125" fill="#f97316" />
      <text x="165" y="112" textAnchor="middle" fontSize="7" fill="#64748b">BG data</text>
      <rect x="200" y="80" width="140" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="270" y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">DT Algorithm</text>
      <text x="270" y="122" textAnchor="middle" fontSize="8" fill="#f97316">Glucose-Insulin</text>
      <text x="270" y="134" textAnchor="middle" fontSize="8" fill="#f97316">PK/PD model</text>
      <text x="270" y="146" textAnchor="middle" fontSize="8" fill="#f97316">MPC controller</text>
      <line x1="340" y1="120" x2="398" y2="120" stroke="#f97316" strokeWidth="2" />
      <polygon points="395,115 407,120 395,125" fill="#f97316" />
      <text x="365" y="112" textAnchor="middle" fontSize="7" fill="#64748b">dose cmd</text>
      <rect x="400" y="90" width="120" height="60" rx="8" fill="rgba(251,146,60,0.12)" stroke="#fb923c" strokeWidth="2" />
      <text x="460" y="116" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fb923c">Insulin Pump</text>
      <text x="460" y="130" textAnchor="middle" fontSize="8" fill="#fb923c">micro-dose</text>
      <text x="460" y="142" textAnchor="middle" fontSize="8" fill="#fb923c">delivery</text>
      <line x1="520" y1="120" x2="558" y2="120" stroke="#f97316" strokeWidth="2" />
      <polygon points="555,115 567,120 555,125" fill="#f97316" />
      <ellipse cx="590" cy="120" rx="24" ry="30" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="590" y="116" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f97316">Patient</text>
      <text x="590" y="128" textAnchor="middle" fontSize="7" fill="#f97316">body</text>
      <path d="M590 150 Q590 200 310 200 Q80 200 80 150" fill="none" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5,3" />
      <polygon points="76,153 80,141 84,153" fill="#64748b" />
      <text x="310" y="218" textAnchor="middle" fontSize="8" fill="#64748b">Physiological feedback updates DT state in real time</text>
      <rect x="200" y="228" width="140" height="20" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="270" y="242" textAnchor="middle" fontSize="8" fill="#f97316" fontWeight="600">Hypo alert — suspend basal</text>
    </svg>
  );
}

function GaitAnalysisSVG() {
  return (
    <svg viewBox="0 0 640 300" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '1.5rem auto' }}>
      <text x="320" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Gait Analysis Digital Twin</text>
      <line x1="40" y1="268" x2="440" y2="268" stroke="#f97316" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="180" cy="55" r="20" fill="none" stroke="#f97316" strokeWidth="2" />
      <line x1="180" y1="75" x2="180" y2="150" stroke="#f97316" strokeWidth="2" />
      <line x1="180" y1="95" x2="135" y2="135" stroke="#f97316" strokeWidth="2" />
      <line x1="180" y1="95" x2="225" y2="120" stroke="#f97316" strokeWidth="2" />
      <line x1="180" y1="150" x2="155" y2="210" stroke="#f97316" strokeWidth="2" />
      <line x1="155" y1="210" x2="140" y2="268" stroke="#f97316" strokeWidth="2" />
      <line x1="180" y1="150" x2="210" y2="200" stroke="#f97316" strokeWidth="2" />
      <line x1="210" y1="200" x2="230" y2="268" stroke="#f97316" strokeWidth="2" />
      <circle cx="180" cy="150" r="6" fill="#f59e0b" />
      <text x="195" y="155" fontSize="8" fill="#f59e0b">Hip: 15 deg</text>
      <circle cx="155" cy="210" r="6" fill="#f59e0b" />
      <text x="115" y="215" textAnchor="end" fontSize="8" fill="#f59e0b">Knee: 35 deg</text>
      <circle cx="140" cy="268" r="6" fill="#f59e0b" />
      <text x="88" y="272" textAnchor="end" fontSize="8" fill="#f59e0b">Ankle: 10 deg</text>
      <circle cx="210" cy="200" r="6" fill="#f97316" />
      <text x="225" y="205" fontSize="8" fill="#f97316">Knee: 12 deg</text>
      <line x1="140" y1="268" x2="140" y2="242" stroke="#f97316" strokeWidth="2" />
      <polygon points="136,245 140,232 144,245" fill="#f97316" />
      <text x="162" y="238" fontSize="7" fill="#f97316">GRF: 1.2BW</text>
      {[[180,55],[180,95],[180,150],[135,135],[225,120],[155,210],[210,200],[140,268],[230,268]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#fb923c" fillOpacity="0.7" />
      ))}
      <text x="330" y="50" fontSize="9" fill="#fb923c">MoCap markers</text>
      <circle cx="315" cy="46" r="4" fill="#fb923c" fillOpacity="0.7" />
      <rect x="470" y="50" width="140" height="200" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
      <text x="540" y="70" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">MoCap Pipeline</text>
      {['MoCap video', 'Marker track.', 'Joint angles', 'Force plates', 'EMG signals', 'OpenSim model', 'DT validation'].map((s, i) => (
        <g key={s}>
          <text x="540" y={90 + i * 22} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{s}</text>
          {i < 6 && <line x1="540" y1={96 + i * 22} x2="540" y2={104 + i * 22} stroke="#f97316" strokeWidth="1" strokeDasharray="2,2" />}
        </g>
      ))}
    </svg>
  );
}

function FederatedLearningSVG() {
  const hospitals = [
    { label: 'Hospital A', y: 80, pts: '12,000 pts', c: '#f97316' },
    { label: 'Hospital B', y: 175, pts: '8,500 pts', c: '#f97316' },
    { label: 'Hospital C', y: 255, pts: '15,200 pts', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 640 320" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '1.5rem auto' }}>
      <text x="320" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Federated Learning for Patient DT Privacy</text>
      {hospitals.map(({ label, y, pts, c }) => (
        <g key={label}>
          <rect x="20" y={y - 28} width="140" height="56" rx="8" fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          <text x="90" y={y - 8} textAnchor="middle" fontSize="9" fontWeight="700" fill={c}>{label}</text>
          <text x="90" y={y + 6} textAnchor="middle" fontSize="8" fill={c}>{pts}</text>
          <text x="90" y={y + 18} textAnchor="middle" fontSize="7" fill={c}>local DT model</text>
          <line x1="160" y1={y} x2="268" y2="155" stroke={c} strokeWidth="1.5" strokeDasharray="5,3" />
          <polygon points={`265,${151} 271,155 265,${159}`} fill={c} />
          <text x="218" y={(y + 155) / 2 - 5} textAnchor="middle" fontSize="7" fill={c}>gradients only</text>
          <line x1="268" y1="160" x2="160" y2={y + 5} stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
        </g>
      ))}
      <rect x="268" y="110" width="140" height="90" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="338" y="138" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Central</text>
      <text x="338" y="152" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Aggregator</text>
      <text x="338" y="166" textAnchor="middle" fontSize="8" fill="#f97316">FedAvg algorithm</text>
      <text x="338" y="178" textAnchor="middle" fontSize="8" fill="#f97316">no raw data seen</text>
      <text x="338" y="190" textAnchor="middle" fontSize="8" fill="#f97316">DP noise added</text>
      <rect x="460" y="125" width="140" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="530" y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Global DT Model</text>
      <text x="530" y="164" textAnchor="middle" fontSize="8" fill="#f97316">improved, shared back</text>
      <line x1="408" y1="155" x2="458" y2="155" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="455,150 467,155 455,160" fill="#f97316" />
      <rect x="248" y="222" width="180" height="24" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
      <text x="338" y="238" textAnchor="middle" fontSize="8" fill="#f97316" fontWeight="600">Raw patient data NEVER leaves hospital</text>
    </svg>
  );
}

function RegulatoryTreeSVG() {
  return (
    <svg viewBox="0 0 680 340" style={{ width: '100%', maxWidth: 680, display: 'block', margin: '1.5rem auto' }}>
      <text x="340" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Regulatory Pathway Decision Tree</text>
      <rect x="270" y="28" width="160" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="50" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Is it Software?</text>
      <line x1="350" y1="62" x2="350" y2="80" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="270" y="80" width="160" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="102" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Is it SaMD?</text>
      <line x1="430" y1="97" x2="500" y2="97" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="500" y="80" width="130" height="34" rx="6" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
      <text x="565" y="99" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Non-SaMD — exempt</text>
      <text x="440" y="93" fontSize="7" fill="#f97316">No</text>
      <line x1="350" y1="114" x2="350" y2="132" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="356" y="126" fontSize="7" fill="#f97316">Yes</text>
      <rect x="250" y="132" width="200" height="34" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="350" y="154" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Risk Class (I / II / III)?</text>
      <line x1="350" y1="166" x2="350" y2="184" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="350" y1="184" x2="120" y2="184" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="120" y1="184" x2="120" y2="200" stroke="#f97316" strokeWidth="1.5" />
      <text x="230" y="178" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">Class I</text>
      <rect x="50" y="200" width="140" height="46" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="120" y="220" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">EXEMPT</text>
      <text x="120" y="234" textAnchor="middle" fontSize="7" fill="#f97316">general controls only</text>
      <text x="120" y="244" textAnchor="middle" fontSize="7" fill="#f97316">EU: Class I</text>
      <line x1="350" y1="184" x2="350" y2="200" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="356" y="196" fontSize="7" fill="var(--text-secondary)">Class II</text>
      <rect x="265" y="200" width="170" height="56" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="350" y="222" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f59e0b">510(k) Clearance</text>
      <text x="350" y="236" textAnchor="middle" fontSize="7" fill="#f59e0b">substantial equivalence</text>
      <text x="350" y="248" textAnchor="middle" fontSize="7" fill="#f59e0b">EU: Class IIa/IIb CE</text>
      <line x1="350" y1="184" x2="560" y2="184" stroke="#f97316" strokeWidth="1.5" />
      <line x1="560" y1="184" x2="560" y2="200" stroke="#f97316" strokeWidth="1.5" />
      <text x="462" y="178" textAnchor="middle" fontSize="7" fill="var(--text-secondary)">Class III</text>
      <rect x="480" y="200" width="160" height="56" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="560" y="222" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">PMA Required</text>
      <text x="560" y="236" textAnchor="middle" fontSize="7" fill="#f97316">premarket approval</text>
      <text x="560" y="248" textAnchor="middle" fontSize="7" fill="#f97316">EU: Class III NB audit</text>
      <rect x="180" y="278" width="320" height="44" rx="8" fill="rgba(251,146,60,0.08)" stroke="#fb923c" strokeWidth="1" />
      <text x="340" y="296" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fb923c">EU AI Act (2024) — DT as High-Risk AI System</text>
      <text x="340" y="312" textAnchor="middle" fontSize="8" fill="#fb923c">Requires: conformity assessment, transparency, human oversight, robustness</text>
    </svg>
  );
}

function EcosystemMapSVG() {
  return (
    <svg viewBox="0 0 720 340" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      <text x="360" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Health Digital Twin Ecosystem Map</text>
      <text x="80" y="44" textAnchor="middle" fontSize="9" fontWeight="700" fill="#64748b">DATA SOURCES</text>
      {['EHR/EMR', 'Wearables', 'Genomics', 'Imaging', 'Lab Tests', 'IoT Sensors'].map((s, i) => (
        <g key={s}>
          <rect x="20" y={55 + i * 40} width="120" height="28" rx="5" fill="rgba(100,116,139,0.1)" stroke="#94a3b8" strokeWidth="1" />
          <text x="80" y={74 + i * 40} textAnchor="middle" fontSize="8" fill="#475569">{s}</text>
          <line x1="140" y1={69 + i * 40} x2="185" y2={69 + i * 40} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" />
        </g>
      ))}
      <rect x="185" y="120" width="160" height="100" rx="10" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="2.5" />
      <text x="265" y="158" textAnchor="middle" fontSize="11" fontWeight="800" fill="#f97316">Patient</text>
      <text x="265" y="172" textAnchor="middle" fontSize="11" fontWeight="800" fill="#f97316">Digital Twin</text>
      <text x="265" y="188" textAnchor="middle" fontSize="8" fill="#f97316">integrated model</text>
      <text x="265" y="200" textAnchor="middle" fontSize="8" fill="#f97316">real-time updated</text>
      <text x="450" y="44" textAnchor="middle" fontSize="9" fontWeight="700" fill="#64748b">ORGAN DTs</text>
      {[
        { label: 'Cardiac DT', y: 55, c: '#f97316' },
        { label: 'Neuro DT', y: 100, c: '#f97316' },
        { label: 'Hepatic DT', y: 145, c: '#f97316' },
        { label: 'Renal DT', y: 190, c: '#f97316' },
        { label: 'Pulm. DT', y: 235, c: '#f97316' },
      ].map(({ label, y, c }) => (
        <g key={label}>
          <rect x="390" y={y} width="120" height="28" rx="5" fill={`${c}15`} stroke={c} strokeWidth="1.5" />
          <text x="450" y={y + 18} textAnchor="middle" fontSize="8" fontWeight="600" fill={c}>{label}</text>
          <line x1="345" y1="170" x2="388" y2={y + 14} stroke={c} strokeWidth="1" strokeDasharray="3,2" />
        </g>
      ))}
      <text x="620" y="44" textAnchor="middle" fontSize="9" fontWeight="700" fill="#64748b">APPLICATIONS</text>
      {[
        { label: 'Drug Discovery', y: 60, c: '#f97316' },
        { label: 'Hospital DT', y: 105, c: '#f97316' },
        { label: 'Treatment Plan', y: 150, c: '#f97316' },
        { label: 'Drug Dosing', y: 195, c: '#f97316' },
        { label: 'Clinical Trial', y: 240, c: '#f97316' },
      ].map(({ label, y, c }) => (
        <g key={label}>
          <rect x="555" y={y} width="130" height="28" rx="5" fill={`${c}12`} stroke={c} strokeWidth="1.5" />
          <text x="620" y={y + 18} textAnchor="middle" fontSize="8" fontWeight="600" fill={c}>{label}</text>
          <line x1="510" y1={y + 14} x2="553" y2={y + 14} stroke={c} strokeWidth="1" strokeDasharray="3,2" />
        </g>
      ))}
      <line x1="345" y1="170" x2="388" y2="170" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="385,165 397,170 385,175" fill="#f97316" />
      <line x1="510" y1="170" x2="553" y2="170" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="550,165 562,170 550,175" fill="#f97316" />
    </svg>
  );
}

export default function DT7() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>
      <div style={S.tag}>MÓDULO 07</div>
      <h1 style={S.h1}>Digital Twins em Saúde</h1>
      <p style={S.lead}>
        Os Digital Twins (DTs) em saúde representam a convergência entre modelos computacionais de alta fidelidade, dados clínicos em tempo real e inteligência artificial para criar réplicas virtuais de pacientes, órgãos, dispositivos e hospitais. Esta tecnologia promete transformar radicalmente a medicina personalizada, a descoberta de fármacos, o planeamento cirúrgico e a gestão hospitalar.
      </p>

      {/* SECTION 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Visão Geral</h2>
        <HumanOrganSVG />
        <p style={S.p}>
          A FDA define Digital Twins em saúde como "representações computacionais dinâmicas de sistemas biológicos que integram dados multimodais para simular, prever e otimizar resultados clínicos." Esta definição abrange desde gémeos digitais de órgãos individuais até modelos integrados de doentes completos.
        </p>
        <div style={S.highlight}>
          <strong>Mercado Global:</strong> O mercado de Digital Twins em saúde deverá atingir <strong>$5.6 mil milhões até 2030</strong>, com uma CAGR de 25.6% (MarketsandMarkets, 2023). Os principais impulsionadores incluem a adoção de dispositivos wearable, a digitalização de EHRs e os avanços em medicina de precisão.
        </div>
        <h3 style={S.h3}>Fontes de Dados Integradas</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fonte de Dados</th>
              <th style={S.th}>Exemplos</th>
              <th style={S.th}>Frequência de Atualização</th>
              <th style={S.th}>Volume Típico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Wearables', 'Apple Watch, Fitbit, CGM Dexcom', 'Contínua (1-5 min)', '~50 GB/ano/doente'],
              ['EHR/EMR', 'Epic, Cerner, Meditech', 'Por episódio', '~1 GB/doente'],
              ['Genómica', 'WGS, SNP arrays, RNA-seq', 'Uma vez / anual', '~200 GB/doente'],
              ['Imagiologia', 'CT, MRI, PET, ecografia', 'Por exame', '~2-15 GB/exame'],
              ['Laboratório', 'Hemograma, bioquímica, proteómica', 'Por episódio', '~10 MB/episódio'],
              ['Notas clínicas', 'Registos de texto, NLP processado', 'Por consulta', '~5 MB/ano'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A heterogeneidade e volume dos dados de saúde colocam desafios únicos de integração. Normas como HL7 FHIR R4, DICOM e openEHR são essenciais para a interoperabilidade dos DTs de saúde.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Patient Digital Twin</h2>
        <PatientDTHubSVG />
        <p style={S.p}>
          O Patient Digital Twin (PDT) é o conceito central da medicina de precisão baseada em DTs: um modelo computacional individualizado que integra todas as fontes de dados disponíveis sobre um doente específico, permitindo simulações personalizadas e previsões clínicas.
        </p>
        <h3 style={S.h3}>Exemplos Clínicos Estabelecidos</h3>
        <div style={S.highlight}>
          <strong>Philips HeartModel:</strong> Modelo 3D personalizado do coração baseado em ecocardiografia 3D, permitindo análise automática de volumes e função ventricular. Utilizado em mais de 2 milhões de doentes em 80 países.
        </div>
        <div style={S.highlight}>
          <strong>Siemens Healthineers — syngo.via:</strong> Plataforma de DT cardiovascular que integra CT coronário, FFR-CT e análise de fluxo para planeamento de intervenções percutâneas.
        </div>
        <h3 style={S.h3}>Casos de Uso Clínicos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso de Uso</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Evidência Clínica</th>
              <th style={S.th}>Maturidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tratamento personalizado', 'Otimização de protocolos com base no perfil individual', 'Ensaios Fase II/III em oncologia', 'TRL 6-7'],
              ['Dosagem de fármacos', 'Cálculo de dose com PBPK individualizado', 'Aprovado FDA para vancomicina', 'TRL 8-9'],
              ['Planeamento cirúrgico', 'Simulação 3D pré-operatória', 'TAVI, cirurgia cardíaca pediátrica', 'TRL 7-8'],
              ['Monitorização contínua', 'Deteção precoce de deterioração', 'ICU preditivo (MIMIC-IV)', 'TRL 6'],
              ['Ensaios virtuais', 'Substituição parcial de controlos placebo', 'Aprovação FDA (Bayesian borrowing)', 'TRL 5-6'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          O TRL (Technology Readiness Level) varia entre 1 (conceito básico) e 9 (sistema operacional em ambiente real). Os PDTs em dosagem de fármacos atingiram já maturidade clínica elevada, enquanto ensaios virtuais completos permanecem em fase de investigação.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Digital Twin Cardiovascular</h2>
        <CardioSVG />
        <p style={S.p}>
          O DT cardiovascular é a área mais madura dos DTs em saúde, beneficiando de décadas de modelação de dinâmica de fluidos computacional (CFD) e eletrofisiologia cardíaca. As aplicações clínicas aprovadas incluem FFR-CT (HeartFlow) para avaliação de estenoses coronárias.
        </p>
        <h3 style={S.h3}>FFR-CT — Fractional Flow Reserve Computacional</h3>
        <p style={S.p}>
          A FFR-CT (HeartFlow FFRCT Analysis) constrói um DT 3D das artérias coronárias a partir de TC cardíaca e calcula a reserva de fluxo fracionário (FFR) em cada ponto da árvore arterial usando CFD. Permite identificar estenoses funcionalmente significativas sem cateterismo.
        </p>
        <div style={S.highlight}>
          <strong>Estudo PLATFORM (2016, Lancet):</strong> FFR-CT reduziu taxas de angiografia coronária invasiva desnecessária em 61% (p &lt; 0.001) sem compromisso da segurança. Aprovado FDA em 2014, CE Mark em 2011.
        </div>
        <h3 style={S.h3}>Simulação Eletrofisiológica</h3>
        <p style={S.p}>
          Os DTs eletrofisiológicos simulam a propagação do potencial de ação cardíaco usando modelos de célula (Hodgkin-Huxley, Beeler-Reuter, O'Hara-Rudy) integrados em geometrias 3D derivadas de MRI. Aplicações incluem planeamento de ablação para FA, otimização de CRT e identificação de substrato arrítmico ventricular pré-ablação.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aplicação</th>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Benefício</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Planeamento de ablação para FA', 'Stsim Cardiom, Adas 3D', 'Redução de recidiva pós-ablação em 30%'],
              ['Resincronização cardíaca (CRT)', 'EP Solutions, Cardiologs', 'Otimização de localização de lead'],
              ['Torsade de Pointes in silico', 'FDA CIPA initiative', 'Substituição parcial de estudo hERG'],
              ['Arritmia ventricular — VT', 'Cornell CardioVascular Lab', 'Identificação de substrato pré-ablação'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A iniciativa CIPA (Comprehensive In vitro Proarrhythmia Assay) da FDA, ICH S7B e ICH E14 estão a integrar DTs eletrofisiológicos no processo regulatório para teste de cardiotoxicidade de novos fármacos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Oncologia Digital</h2>
        <TumorGrowthSVG />
        <p style={S.p}>
          Os DTs oncológicos integram modelos mecanísticos de crescimento tumoral com dados de radiómica, genómica e farmacocinética para prever resposta terapêutica e otimizar protocolos de tratamento.
        </p>
        <h3 style={S.h3}>Modelos Mecanísticos de Crescimento Tumoral</h3>
        <p style={S.p}>
          O modelo de Gompertz e os modelos de equações diferenciais parciais (PDE) descrevem a dinâmica espaciotemporal do crescimento tumoral. O modelo mais completo integra: proliferação celular, angiogénese, pressão intersticial, gradientes de oxigénio e mecanismos de resistência.
        </p>
        <h3 style={S.h3}>Radiómica e DT Oncológico</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Feature Radiológica</th>
              <th style={S.th}>Informação Capturada</th>
              <th style={S.th}>Aplicação Clínica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['GLCM (texture)', 'Heterogeneidade intratumoral', 'Prognóstico NSCLC'],
              ['Morphological features', 'Forma, espiculação, diâmetro', 'Classificação nodular Lung-RADS'],
              ['Intensity histogram', 'Distribuição de densidade', 'Resposta a quimioterapia'],
              ['Wavelet features', 'Padrões multi-escala', 'Detecção de mutação EGFR'],
              ['Shape 3D', 'Esfericidade, compacidade', 'Diferenciação benigno/maligno'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Ensaios Clínicos Virtuais (FDA):</strong> A FDA publicou em 2023 orientações sobre o uso de "virtual patient populations" em ensaios clínicos in silico, reconhecendo DTs como ferramentas de suporte regulatório. O projeto VICTRE (Virtual Imaging Clinical Trial for Regulatory Evaluation) validou esta abordagem para mamografia.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Organ-on-Chip e Digital Twin</h2>
        <OrganChipSVG />
        <p style={S.p}>
          Os sistemas Organ-on-Chip (OoC) são microdispositivos microfluídicos que replicam a fisiologia de órgãos humanos in vitro, criando um complemento físico-digital único: o chip fornece dados experimentais em tempo real que alimentam e validam o DT computacional.
        </p>
        <h3 style={S.h3}>Plataforma Emulate Bio</h3>
        <p style={S.p}>
          A Emulate Bio (parceira de Harvard) desenvolveu chips para pulmão, fígado, rim, intestino e barreira hematoencefálica. O Lung-on-Chip replica a interface alvéolo-capilar com fluxo de ar e sangue separados por membrana porosa de 10 micrometros, simulando condições de estirpe mecânica respiratória.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>OoC System</th>
              <th style={S.th}>Células Utilizadas</th>
              <th style={S.th}>DT Integrado</th>
              <th style={S.th}>Aplicação Farmacológica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Lung-on-Chip', 'Epitelial alveolar + endotelial', 'Modelo de inflamação pulmonar', 'Toxicidade inalatória, COVID-19'],
              ['Liver-on-Chip', 'Hepatócitos primários + Kupffer', 'PBPK hepático', 'Hepatotoxicidade (DILI)'],
              ['Kidney-on-Chip', 'Células tubulares proximais', 'Filtração glomerular DT', 'Nefrotoxicidade'],
              ['Gut-on-Chip', 'Colonócitos + microbioma', 'Absorção intestinal DT', 'Biodisponibilidade oral'],
              ['BBB-on-Chip', 'Endotelial cerebral + pericitos', 'Permeabilidade barreira DT', 'CNS drug delivery'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A FDA e a EMA publicaram em 2022 orientações conjuntas sobre o uso de New Approach Methodologies (NAM), incluindo OoC + DT, para reduzir testes em animais em até 40% em estudos de segurança pré-clínica.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Hospital Digital Twin</h2>
        <HospitalFloorSVG />
        <p style={S.p}>
          O Hospital Digital Twin (HDT) é um modelo virtual de todo o sistema hospitalar — espaços físicos, equipamentos, fluxos de doentes, pessoal e recursos — que permite simulação, otimização e gestão em tempo real das operações hospitalares.
        </p>
        <h3 style={S.h3}>Aplicações Operacionais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Problema Resolvido</th>
              <th style={S.th}>Impacto Reportado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Bloco Operatório', 'Otimização de agendamento de cirurgias', '+18% utilização OR (Johns Hopkins)'],
              ['ICU', 'Previsão de disponibilidade de camas', '-23% transferências de emergência'],
              ['Urgência', 'Redução de tempo de espera (LOS)', '-35 min tempo médio de espera (NHS)'],
              ['Infeção hospitalar', 'Simulação de fluxo de ar HVAC', '-60% propagação de MRSA (simulação)'],
              ['Farmácia', 'Gestão de stock e dispensação', '-15% desperdício de medicação'],
              ['Pessoal', 'Otimização de turnos e escalas', '-8% overtime não planeado'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Caso NHS — COVID-19 Hospital DT</h3>
        <p style={S.p}>
          Durante a pandemia COVID-19, o NHS Nightingale Hospital de Londres utilizou um DT desenvolvido pela Dassault Systèmes para simular capacidade, fluxos de doentes, necessidades de equipamentos de proteção individual e ventiladores. O modelo permitiu planeamento de capacidade para 4,000 camas em 9 dias de construção, simulação de 47 cenários de surge de doentes, otimização de zonas de pressão negativa para contenção viral, e previsão de consumo de oxigénio médico.
        </p>
        <div style={S.highlight}>
          <strong>Siemens Xcelerator:</strong> Plataforma de HDT que integra BIM (Building Information Model), sistemas IoT hospitalares (RTLS, HVAC, BMS) e simulação de fluxo de doentes. Implementada no King's College Hospital, Londres, com redução de 22% no consumo energético.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 7 */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Descoberta de Fármacos</h2>
        <DrugFunnelSVG />
        <p style={S.p}>
          Os DTs estão a transformar a descoberta de fármacos ao permitir triagem virtual de milhões de compostos, previsão de propriedades ADMET, simulação de ensaios clínicos e redução drástica do tempo e custo do pipeline farmacêutico.
        </p>
        <h3 style={S.h3}>PBPK — Physiologically Based Pharmacokinetics</h3>
        <p style={S.p}>
          Os modelos PBPK representam o corpo humano como compartimentos fisiológicos interligados (sangue, fígado, rim, cérebro, músculo, gordura, pulmão) com parâmetros baseados em fisiologia real. Permitem prever distribuição de fármacos em populações especiais (pediátrica, grávidas, insuficientes renais).
        </p>
        <h3 style={S.h3}>Impacto em Tempo e Custo</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fase Pipeline</th>
              <th style={S.th}>Tempo Tradicional</th>
              <th style={S.th}>Com DT</th>
              <th style={S.th}>Redução de Custo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Target ID + Validação', '3-5 anos', '1-2 anos', '-60%'],
              ['Hit-to-Lead', '2-3 anos', '6-12 meses', '-55%'],
              ['Lead Optimization', '3-4 anos', '1-2 anos', '-40%'],
              ['Pré-clínica (ADMET)', '2-3 anos', '6-9 meses', '-65%'],
              ['Fase I/II (virtual arms)', '3-5 anos', '2-3 anos', '-30%'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={{ ...S.td, color: '#f97316', fontWeight: 700 }}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 8 */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Dispositivos Médicos Conectados</h2>
        <ArtificialPancreasSVG />
        <p style={S.p}>
          Os dispositivos médicos conectados são a materialização física dos DTs de saúde: pacemakers, bombas de insulina, neuroestimuladores e dispositivos de assistência ventricular incorporam modelos de DT para controlo em malha fechada e monitorização preditiva.
        </p>
        <h3 style={S.h3}>Pâncreas Artificial</h3>
        <div style={S.highlight}>
          <strong>Omnipod 5 + Dexcom G6 (FDA cleared 2022):</strong> O primeiro sistema de malha fechada híbrida aprovado para adultos e crianças acima de 2 anos. O algoritmo SmartAdjust usa um modelo de DT personalizado que aprende as respostas individuais à insulina ao longo de 5-7 dias, mantendo 70% do tempo no alvo glicémico 70-180 mg/dL.
        </div>
        <h3 style={S.h3}>Pacemaker Digital Twin</h3>
        <p style={S.p}>
          Os pacemakers modernos (Medtronic, Abbott, Boston Scientific) geram dados de 24/7 transmitidos remotamente via Bluetooth para DTs hospedados na nuvem. O DT deteta degradação de bateria com previsão de substituição (MTTF modeling), alterações no limiar de pace e sensing, FA paroxística (99.2% sensibilidade, Abbott Confirm Rx), e descompensação cardíaca precoce via impedância transtorácica.
        </p>
        <h3 style={S.h3}>Cibersegurança em Dispositivos Médicos DT</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ameaça</th>
              <th style={S.th}>Vetor de Ataque</th>
              <th style={S.th}>Mitigação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Manipulação de DT', 'Injeção de dados falsos no modelo', 'Anomaly detection + digital signature'],
              ['Ransomware', 'Encriptação de modelos DT hospitalares', 'Backup isolado + MFA + zero-trust'],
              ['Man-in-the-middle', 'Intercepção de telemetria Bluetooth', 'TLS 1.3 + certificate pinning'],
              ['Adversarial attacks', 'Perturbação de inputs de ML', 'Adversarial training + input validation'],
              ['Insider threat', 'Acesso indevido a modelos de doentes', 'RBAC + audit trail + data masking'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A FDA publicou em 2023 diretrizes de cibersegurança para dispositivos médicos, exigindo que fabricantes demonstrem planos de monitorização e patch management para dispositivos conectados incluindo DTs embebidos (Predetermined Change Control Plan).
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 9 */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Reabilitação e Biomecânica</h2>
        <GaitAnalysisSVG />
        <p style={S.p}>
          Os DTs musculoesqueléticos modelam o sistema locomotor humano com base em anatomia individual, permitindo análise de marcha personalizada, design de próteses, controlo de exoesqueletos e planeamento de reabilitação pós-AVC ou ortopédica.
        </p>
        <h3 style={S.h3}>OpenSim — Simulação Musculoesquelética</h3>
        <p style={S.p}>
          OpenSim (Stanford, NIH-funded) é a plataforma de referência para DTs biomecânicos. Modela músculos, tendões, ligamentos e articulações com física completa, permitindo calcular forças internas inacessíveis por medição direta (forças de contacto articular, tensões musculares). O pipeline integra câmeras de captura de movimento a 200+ Hz e processa os dados via Inverse Kinematics e Inverse Dynamics.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Aplicação</th>
              <th style={S.th}>Tecnologia DT</th>
              <th style={S.th}>Evidência</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Fitting de próteses de membro', 'FEA + socket pressure DT', 'Redução de úlceras por pressão -45% (Ohio State)'],
              ['Controlo de exoesqueleto', 'IMU + LSTM model predictive control', 'ReWalk, Ekso Bionics — aprovado FDA'],
              ['Reabilitação pós-AVC', 'EMG biofeedback + marcha DT', '+28% recuperação motora (Fugl-Meyer)'],
              ['Osteoartrite de joelho', 'Análise de carga articular DT', 'Otimização de osteotomia tibial'],
              ['Paralisia cerebral', 'Simulação musculoesquelética pré-cirúrgica', 'Redução de cirurgias desnecessárias -35%'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Os sistemas de feedback em tempo real combinam sensores IMU wearable com DTs de marcha executados em edge computing para fornecer feedback sonoro ou háptico durante sessões de reabilitação, sem necessidade de laboratório especializado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 10 */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Privacidade e Ética</h2>
        <FederatedLearningSVG />
        <p style={S.p}>
          Os DTs de saúde levantam questões éticas e de privacidade sem precedentes: envolvem os dados mais sensíveis que existem sobre uma pessoa (saúde, genoma, comportamento), são usados para decisões de alta consequência (tratamentos, seguros) e podem perpetuar ou amplificar desigualdades existentes.
        </p>
        <h3 style={S.h3}>GDPR e HIPAA — Enquadramento Legal</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Requisito</th>
              <th style={S.th}>GDPR (EU)</th>
              <th style={S.th}>HIPAA (EUA)</th>
              <th style={S.th}>Impacto no DT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Base legal', 'Consentimento explícito ou interesse legítimo', 'TPO (Treatment, Payment, Operations)', 'Necessário consentimento informado para DT'],
              ['Direito de acesso', 'Acesso a todos os dados + DT derivado', 'Acesso a PHI em 30 dias', 'Doente pode solicitar o seu DT'],
              ['Direito ao apagamento', 'Apagar dados E modelos treinados com eles', 'Não explícito', 'Machine unlearning nos modelos DT'],
              ['Portabilidade', 'Exportação em formato legível por máquina', 'Não obrigatório', 'Interoperabilidade entre DTs de provedores'],
              ['Privacy by design', 'Obrigatório por defeito', 'Recomendado', 'DTs devem minimizar dados utilizados'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Bias e Equidade nos DTs</h3>
        <p style={S.p}>
          Um estudo seminal de Obermeyer et al. (Science, 2019) demonstrou que um algoritmo comercial de gestão de saúde subestimava consistentemente as necessidades de doentes negros em relação a doentes brancos de saúde equivalente, porque usava custos de saúde como proxy de necessidade — refletindo desigualdades históricas de acesso. DTs treinados em populações não representativas perpetuarão estes biases.
        </p>
        <div style={S.highlight}>
          <strong>Federated Learning + Differential Privacy:</strong> A combinação de aprendizagem federada (treino local, partilha apenas de gradientes) com privacidade diferencial (adição de ruído calibrado) permite construir DTs populacionais sem centralizar dados sensíveis. Standard: DP-SGD com epsilon entre 1-10.
        </div>
        <div style={S.note}>
          O grupo de trabalho WG3 do projeto "DIGI-B-CUBE" (Horizon Europe) está a desenvolver frameworks de consentimento dinâmico para DTs que permitem ao doente controlar granularmente quais os dados que alimentam o seu DT e quais as finalidades permitidas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 11 */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Regulamentação de DTs em Saúde</h2>
        <RegulatoryTreeSVG />
        <p style={S.p}>
          Os DTs em saúde enquadram-se na categoria de Software as a Medical Device (SaMD) quando utilizados para fins de diagnóstico ou tratamento. A regulamentação aplica tanto nos EUA (FDA) como na Europa (MDR 2017/745, IVDR 2017/746) e está a ser complementada pelo EU AI Act.
        </p>
        <h3 style={S.h3}>Classificação SaMD — Tabela de Referência</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Exemplo de DT</th>
              <th style={S.th}>Classe (EUA)</th>
              <th style={S.th}>Classe (EU)</th>
              <th style={S.th}>Via Regulatória</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Calculador de dose (suporte decisão)', 'Classe II', 'Classe IIa', '510(k) / CE Mark'],
              ['FFR-CT (diagnóstico coronário)', 'Classe II', 'Classe IIb', '510(k) De Novo'],
              ['DT pâncreas artificial (tratamento ativo)', 'Classe III', 'Classe III', 'PMA / NB Audit'],
              ['DT para planeamento de ablação', 'Classe II', 'Classe IIb', '510(k)'],
              ['DT de crescimento tumoral (prognóstico)', 'Classe II', 'Classe IIa', '510(k)'],
              ['DT de hospital (apenas operacional)', 'Não regulado', 'Não regulado', 'N/A'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Normas Técnicas Aplicáveis</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Norma</th>
              <th style={S.th}>Âmbito</th>
              <th style={S.th}>Relevância para DT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ISO 13485:2016', 'Gestão de qualidade de dispositivos médicos', 'QMS para desenvolvimento de software DT'],
              ['IEC 62304:2006+A1', 'Software lifecycle para dispositivos médicos', 'Arquitectura, V&V, gestão de riscos'],
              ['IEC 62366:2015', 'Usabilidade de dispositivos médicos', 'Interface do utilizador para DT clínico'],
              ['ISO 14971:2019', 'Gestão de riscos de dispositivos médicos', 'FMEA, análise de riscos do DT'],
              ['ASME V&V 40-2018', 'V&V de simulação computacional médica', 'Validação de modelos de DT (FDA guidance)'],
              ['ISO/IEC 27001', 'Segurança de informação', 'Proteção de dados do DT de doente'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A FDA publicou em 2023 o "AI/ML Action Plan" reconhecendo que DTs adaptativos que aprendem continuamente requerem um novo paradigma regulatório — Predetermined Change Control Plan (PCCP) — que define antecipadamente as modificações permitidas sem necessidade de nova autorização.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 12 */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <EcosystemMapSVG />
        <p style={S.p}>
          Os Digital Twins em saúde representam uma revolução paradigmática: a transição de uma medicina baseada em populações (guidelines para o "doente médio") para uma medicina baseada em modelos individuais de alta fidelidade. Esta transição é habilitada pela convergência de três ondas tecnológicas simultâneas: dados clínicos massivos e heterogéneos, modelos computacionais de fisiologia de alta resolução, e IA capaz de aprender e atualizar estes modelos em tempo real.
        </p>
        <h3 style={S.h3}>Impacto por Área de Aplicação</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Área</th>
              <th style={S.th}>Impacto Principal</th>
              <th style={S.th}>Horizonte Temporal</th>
              <th style={S.th}>TRL Atual</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Cardiovascular DT', 'Eliminação de 40% de cateterismos desnecessários', '2024-2026', '8-9'],
              ['Oncologia DT', 'Redução de 30% em toxicidade de quimioterapia', '2025-2028', '5-7'],
              ['Hospital DT', '+20% eficiência operacional, -15% custos', '2024-2026', '7-8'],
              ['Descoberta fármacos', 'Redução de 50% no tempo de desenvolvimento', '2026-2030', '5-7'],
              ['Pâncreas artificial', '70% do tempo em alvo glicémico (70-180 mg/dL)', 'Já disponível', '9'],
              ['Reabilitação', '+35% recuperação funcional pós-AVC', '2025-2027', '6-8'],
              ['DT farmacogenómico', 'Dosagem personalizada para 80% dos fármacos', '2027-2032', '4-6'],
            ].map(([a, b, c, d]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Technology Stack dos DTs de Saúde</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Camada</th>
              <th style={S.th}>Tecnologias</th>
              <th style={S.th}>Padrões</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Dados', 'Kafka, Spark Streaming, Delta Lake, Apache Arrow', 'HL7 FHIR R4, DICOM, openEHR'],
              ['Modelação', 'FEniCS, OpenFOAM, Modelica, Simscape', 'ASME V&V 40, CellML, SBML'],
              ['ML/AI', 'PyTorch, JAX, Flax, Hugging Face', 'ONNX, MLflow, Weights and Biases'],
              ['Geminalização', 'Azure Digital Twins, AWS IoT TwinMaker', 'W3C DTDL, AAS (Asset Admin Shell)'],
              ['Visualização', 'Unity Medical XR, Babylon.js, VTK.js', 'glTF 2.0, WebGPU, HL7 SMART on FHIR'],
              ['Segurança', 'Vault HashiCorp, Azure Confidential Computing', 'ISO 27001, IEC 62443, NIST SP 800-66'],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Futuro: IA Generativa e DTs Sintéticos</h3>
        <p style={S.p}>
          A próxima fronteira é a geração de "synthetic patient DTs" usando modelos de difusão e transformers de grandes dimensões treinados em populações reais mas gerando novos doentes sintéticos realistas para treino de algoritmos, simulação de ensaios clínicos e geração de dados raros (doenças órfãs). Projetos como Syntegra, MDClone e Syntho estão já a comercializar dados sintéticos de saúde com preservação das correlações estatísticas essenciais.
        </p>
        <h3 style={S.h3}>Desafios Remanescentes</h3>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Identifiability:</strong> Modelos de DT com demasiados parâmetros livres são não-identificáveis — dados insuficientes não permitem estimar parâmetros únicos</li>
          <li><strong>Generalização:</strong> DTs treinados numa população hospitalar específica podem não generalizar para outras (covariate shift)</li>
          <li><strong>Integração clínica:</strong> A maioria dos DTs existe como ferramentas de investigação, não integradas nos workflows clínicos reais</li>
          <li><strong>Custo computacional:</strong> DTs de alta fidelidade (CFD, FEA) requerem HPC — barreira para adoção widespread</li>
          <li><strong>Validação:</strong> A validação clínica rigorosa de DTs requer ensaios prospetivos difíceis e dispendiosos de conduzir</li>
          <li><strong>Responsabilidade:</strong> Se um DT faz uma previsão errada que leva a dano do doente, quem é responsável — fabricante, médico, hospital?</li>
        </ul>
        <div style={S.highlight}>
          <strong>Visão 2035:</strong> Um cenário plausível para 2035 inclui cada doente hospitalizado a ter um DT atualizado em tempo real integrado no seu processo clínico, com recomendações de dosagem, alertas de deterioração e planeamento terapêutico personalizados — com supervisão médica obrigatória e explicabilidade total das previsões. Os DTs de descoberta de fármacos reduzirão o tempo médio de desenvolvimento de 12 para 7 anos. Os hospitais operarão em modo "digital-first", com geminalização completa das suas operações.
        </div>
        <div style={S.note}>
          O sucesso dos DTs em saúde depende fundamentalmente da resolução de três problemas paralelos: <strong>técnico</strong> (modelos mais fiéis e eficientes), <strong>regulatório</strong> (frameworks ágeis para tecnologias adaptativas) e <strong>social</strong> (confiança de doentes e profissionais de saúde nas decisões suportadas por DTs). Nenhum destes problemas tem solução técnica isolada.
        </div>
      </section>
    </div>
  );
}
