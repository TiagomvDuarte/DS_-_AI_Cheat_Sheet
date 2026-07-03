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
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function ModelSpectrumSVG() {
  return (
    <svg viewBox="0 0 760 160" style={{ width: '100%', maxWidth: 760, display: 'block', margin: '1.5rem auto' }}>
      <defs>
        <linearGradient id="spectrumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.08)" />
          <stop offset="50%" stopColor="rgba(249,115,22,0.12)" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect x="40" y="60" width="680" height="40" rx="20" fill="url(#spectrumGrad)" />
      {/* White box */}
      <rect x="30" y="10" width="140" height="36" rx="8" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="100" y="33" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>White Box</text>
      {/* Hybrid */}
      <rect x="305" y="10" width="150" height="36" rx="8" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="380" y="33" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Híbrido</text>
      {/* Black box */}
      <rect x="590" y="10" width="140" height="36" rx="8" fill="#f97316" />
      <text x="660" y="33" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">Black Box</text>
      {/* Arrow */}
      <line x1="40" y1="130" x2="720" y2="130" stroke="#6b7280" strokeWidth="1" />
      <polygon points="720,126 730,130 720,134" fill="#6b7280" />
      <text x="40" y="148" fontSize="11" fill="var(--text-secondary)">Física conhecida</text>
      <text x="630" y="148" fontSize="11" fill="var(--text-secondary)">Dados abundantes</text>
      {/* Labels below spectrum */}
      <text x="100" y="118" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Primeiro Princípios</text>
      <text x="380" y="118" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Physics-Informed ML</text>
      <text x="660" y="118" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Deep Learning</text>
    </svg>
  );
}

function FEMMeshSVG() {
  return (
    <svg viewBox="0 0 700 200" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '1.5rem auto' }}>
      <defs>
        <linearGradient id="stressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      {/* Part outline */}
      <rect x="60" y="40" width="380" height="120" rx="6" fill="url(#stressGrad)" fillOpacity="0.85" stroke="#f97316" strokeWidth="1.5" />
      {/* Mesh lines horizontal */}
      {[65, 90, 115, 140].map((y, i) => (
        <line key={i} x1="60" y1={y} x2="440" y2={y} stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
      ))}
      {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420].map((x, i) => (
        <line key={i} x1={x} y1="40" x2={x} y2="160" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
      ))}
      {/* Diagonal mesh */}
      {[60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => (
        <line key={i} x1={x} y1="40" x2={x + 40} y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
      ))}
      {/* Fix constraint */}
      <rect x="30" y="40" width="30" height="120" fill="#6b7280" rx="3" />
      <text x="45" y="107" textAnchor="middle" fontSize="10" fill="#fff">Fix</text>
      {/* Force arrow */}
      <line x1="480" y1="100" x2="440" y2="100" stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arrow)" />
      <polygon points="440,95 440,105 455,100" fill="#f97316" />
      <text x="490" y="104" fontSize="11" fill="#f97316" fontWeight="700">F</text>
      {/* Stress scale */}
      <rect x="560" y="40" width="18" height="120" rx="3" fill="url(#stressGrad)" />
      <text x="582" y="48" fontSize="9" fill="var(--text-secondary)">Max</text>
      <text x="582" y="165" fontSize="9" fill="var(--text-secondary)">Min</text>
      <text x="569" y="185" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Von Mises [MPa]</text>
      {/* Title */}
      <text x="250" y="185" textAnchor="middle" fontSize="12" fill="var(--text-secondary)" fontWeight="600">Análise FEM — Campo de Tensões (Von Mises)</text>
    </svg>
  );
}

function RegressionCurveSVG() {
  return (
    <svg viewBox="0 0 700 220" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '1.5rem auto' }}>
      {/* Axes */}
      <line x1="60" y1="20" x2="60" y2="180" stroke="#6b7280" strokeWidth="1.5" />
      <line x1="60" y1="180" x2="660" y2="180" stroke="#6b7280" strokeWidth="1.5" />
      <text x="355" y="210" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Tempo (h)</text>
      <text x="20" y="100" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform="rotate(-90,20,100)">Temperatura (°C)</text>
      {/* Confidence band */}
      <path d="M80,150 Q180,120 280,100 Q380,80 480,70 Q560,62 640,55" fill="none" stroke="none" />
      <path d="M80,165 Q180,135 280,115 Q380,95 480,85 Q560,77 640,70 L640,40 Q560,47 480,55 Q380,65 280,85 Q180,105 80,135 Z" fill="rgba(249,115,22,0.10)" />
      {/* Prediction curve */}
      <path d="M80,150 Q180,120 280,100 Q380,80 480,70 Q560,62 640,55" fill="none" stroke={color} strokeWidth="2.5" />
      {/* Sensor data points */}
      {[[90,145],[120,138],[160,125],[200,118],[240,108],[280,104],[330,92],[380,84],[430,75],[480,72],[530,65],[580,60],[630,58]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
      ))}
      {/* LSTM prediction points */}
      {[[490,73],[530,66],[570,61],[610,57],[650,54]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={color} stroke="#fff" strokeWidth="1" />
      ))}
      {/* Legend */}
      <circle cx="100" cy="205" r="4" fill="#f59e0b" />
      <text x="110" y="209" fontSize="10" fill="var(--text-secondary)">Dados do sensor</text>
      <line x1="200" y1="205" x2="225" y2="205" stroke={color} strokeWidth="2.5" />
      <text x="230" y="209" fontSize="10" fill="var(--text-secondary)">Modelo regressão</text>
      <rect x="320" y="200" width="14" height="10" fill="rgba(249,115,22,0.10)" />
      <text x="398" y="209" fontSize="10" fill="var(--text-secondary)">Intervalo de confiança 95%</text>
    </svg>
  );
}

function PINNArchSVG() {
  // nodes end at y=210+22=232 (hidden layers), labels at y=250, loss bar at y=268
  return (
    <svg viewBox="0 0 740 310" style={{ width: '100%', maxWidth: 740, display: 'block', margin: '1.5rem auto' }}>
      {/* Input layer */}
      {[45, 90, 135, 180].map((y, i) => (
        <circle key={i} cx="80" cy={y} r="22" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      ))}
      <text x="80" y="222" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Inputs</text>
      <text x="80" y="235" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">(x, t, BC)</text>
      {/* Hidden layer 1 */}
      {[30, 75, 120, 165, 210].map((y, i) => (
        <circle key={i} cx="220" cy={y} r="22" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      ))}
      <text x="220" y="252" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Camada 1</text>
      {/* Hidden layer 2 */}
      {[30, 75, 120, 165, 210].map((y, i) => (
        <circle key={i} cx="360" cy={y} r="22" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      ))}
      <text x="360" y="252" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Camada 2</text>
      {/* Hidden layer 3 */}
      {[55, 100, 145, 190].map((y, i) => (
        <circle key={i} cx="500" cy={y} r="22" fill="#f97316" stroke={color} strokeWidth="1.5" />
      ))}
      <text x="500" y="252" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Camada 3</text>
      {/* Output */}
      <circle cx="640" cy="122" r="24" fill={color} />
      <text x="640" y="126" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">u(x,t)</text>
      <text x="640" y="252" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Output</text>
      {/* Connections */}
      {[45, 90, 135, 180].map((y1, i) => [30, 75, 120, 165, 210].map((y2, j) => (
        <line key={`${i}-${j}`} x1="102" y1={y1} x2="198" y2={y2} stroke="rgba(249,115,22,0.20)" strokeWidth="0.5" />
      )))}
      {[30, 75, 120, 165, 210].map((y1, i) => [30, 75, 120, 165, 210].map((y2, j) => (
        <line key={`${i}-${j}`} x1="242" y1={y1} x2="338" y2={y2} stroke="rgba(249,115,22,0.20)" strokeWidth="0.5" />
      )))}
      {[30, 75, 120, 165, 210].map((y1, i) => [55, 100, 145, 190].map((y2, j) => (
        <line key={`${i}-${j}`} x1="382" y1={y1} x2="478" y2={y2} stroke="rgba(249,115,22,0.20)" strokeWidth="0.5" />
      )))}
      {[55, 100, 145, 190].map((y, i) => (
        <line key={i} x1="522" y1={y} x2="616" y2="122" stroke="rgba(249,115,22,0.20)" strokeWidth="0.5" />
      ))}
      {/* Physics loss annotation */}
      <rect x="120" y="268" width="480" height="20" rx="3" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="282" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">L_total = L_data + lambda · L_physics (PDE residual)</text>
    </svg>
  );
}

function SurrogateSVG() {
  return (
    <svg viewBox="0 0 720 190" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      {/* FEM box */}
      <rect x="20" y="50" width="160" height="90" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="2" />
      <text x="100" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f97316">Simulação FEM</text>
      <text x="100" y="108" textAnchor="middle" fontSize="10" fill="#f97316">Milhões de DOF</text>
      <text x="100" y="124" textAnchor="middle" fontSize="10" fill="#f97316">Horas por execução</text>
      {/* Arrow */}
      <line x1="180" y1="95" x2="250" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="250,90 262,95 250,100" fill="var(--text-secondary)" />
      <text x="216" y="85" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Treino</text>
      {/* Surrogate box */}
      <rect x="262" y="40" width="180" height="110" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="2" />
      <text x="352" y="82" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f59e0b">Surrogate Model</text>
      <text x="352" y="102" textAnchor="middle" fontSize="10" fill="#f59e0b">Gaussian Process</text>
      <text x="352" y="118" textAnchor="middle" fontSize="10" fill="#f59e0b">Polynomial Chaos</text>
      <text x="352" y="134" textAnchor="middle" fontSize="10" fill="#f59e0b">Neural Network</text>
      {/* Arrow 2 */}
      <line x1="442" y1="95" x2="510" y2="95" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="510,90 522,95 510,100" fill="var(--text-secondary)" />
      <text x="476" y="85" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Deploy</text>
      {/* Result box */}
      <rect x="522" y="50" width="175" height="90" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="2" />
      <text x="609" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Predição Rápida</text>
      <text x="609" y="108" textAnchor="middle" fontSize="10" fill={color}>ms por execução</text>
      <text x="609" y="124" textAnchor="middle" fontSize="10" fill={color}>1000x speedup</text>
      {/* Speed badge */}
      <rect x="280" y="165" width="155" height="22" rx="11" fill={color} />
      <text x="357" y="180" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Aceleração: 1000x+</text>
    </svg>
  );
}

function CoSimSVG() {
  return (
    <svg viewBox="0 0 720 210" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      {/* Thermal simulator */}
      <rect x="30" y="50" width="200" height="110" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="130" y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fb923c">Simulador Térmico</text>
      <text x="130" y="105" textAnchor="middle" fontSize="10" fill="#fb923c">Temperatura T(x,t)</text>
      <text x="130" y="120" textAnchor="middle" fontSize="10" fill="#fb923c">Condutividade k</text>
      <text x="130" y="135" textAnchor="middle" fontSize="10" fill="#fb923c">ex: Modelica / ANSYS</text>
      {/* FMI coupling */}
      <rect x="265" y="70" width="180" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke="#6b7280" strokeWidth="1.5" />
      <text x="355" y="103" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-secondary)">FMI / FMU</text>
      <text x="355" y="120" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Master Algorithm</text>
      <text x="355" y="133" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Sync nos coupling points</text>
      {/* Arrows */}
      <line x1="230" y1="95" x2="265" y2="95" stroke="#f97316" strokeWidth="1.8" />
      <polygon points="265,91 276,95 265,99" fill="#f97316" />
      <line x1="230" y1="120" x2="265" y2="120" stroke="#f97316" strokeWidth="1.8" />
      <polygon points="230,116 219,120 230,124" fill={color} />
      <line x1="445" y1="95" x2="480" y2="95" stroke="#f97316" strokeWidth="1.8" />
      <polygon points="480,91 491,95 480,99" fill="#f97316" />
      <line x1="445" y1="120" x2="480" y2="120" stroke={color} strokeWidth="1.8" />
      <polygon points="445,116 434,120 445,124" fill={color} />
      {/* Mechanical simulator */}
      <rect x="491" y="50" width="200" height="110" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="2" />
      <text x="591" y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Simulador Mecânico</text>
      <text x="591" y="105" textAnchor="middle" fontSize="10" fill={color}>Tensão sigma(x,t)</text>
      <text x="591" y="120" textAnchor="middle" fontSize="10" fill={color}>Deformação epsilon</text>
      <text x="591" y="135" textAnchor="middle" fontSize="10" fill={color}>ex: Abaqus / FEniCS</text>
      {/* Time axis */}
      <line x1="60" y1="185" x2="660" y2="185" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
      {[150, 250, 350, 450, 550].map((x, i) => (
        <line key={i} x1={x} y1="180" x2={x} y2="190" stroke="#6b7280" strokeWidth="1" />
      ))}
      <text x="360" y="205" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Passos de tempo sincronizados (coupling points)</text>
    </svg>
  );
}

function DigitalThreadSVG() {
  return (
    <svg viewBox="0 0 860 180" style={{ width: '100%', maxWidth: 860, display: 'block', margin: '1.5rem auto' }}>
      {/* Stages: 5 boxes × 130px + 4 gaps × 30px = 650 + 30 start = 710 total */}
      {[
        { x: 30,  label: 'Design',      sub: 'CAD/PLM' },
        { x: 190, label: 'Fabrico',     sub: 'MES/CAM' },
        { x: 350, label: 'Operação',    sub: 'IoT/SCADA' },
        { x: 510, label: 'Manutenção',  sub: 'CMMS' },
        { x: 670, label: 'Fim de vida', sub: 'ERP' },
      ].map(({ x, label, sub }, i) => (
        <g key={i}>
          <rect x={x} y="30" width="130" height="70" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2" />
          <text x={x + 65} y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">{label}</text>
          <text x={x + 65} y="80" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{sub}</text>
        </g>
      ))}
      {/* Connecting arrows */}
      {[160, 320, 480, 640].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="65" x2={x + 20} y2="65" stroke="#6b7280" strokeWidth="1.5" />
          <polygon points={`${x + 20},61 ${x + 30},65 ${x + 20},69`} fill="#6b7280" />
        </g>
      ))}
      {/* Digital thread arrow below */}
      <rect x="30" y="112" width="800" height="24" rx="12" fill="rgba(249,115,22,0.10)" />
      <text x="430" y="129" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Digital Thread — Dados fluem durante todo o ciclo de vida</text>
    </svg>
  );
}

function CalibrationSVG() {
  return (
    <svg viewBox="0 0 700 220" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '1.5rem auto' }}>
      {/* Axes */}
      <line x1="60" y1="20" x2="60" y2="175" stroke="#6b7280" strokeWidth="1.5" />
      <line x1="60" y1="175" x2="650" y2="175" stroke="#6b7280" strokeWidth="1.5" />
      <text x="355" y="200" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">Amostras (tempo)</text>
      <text x="22" y="100" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" transform="rotate(-90,22,100)">Valor</text>
      {/* Real sensor */}
      {[[80,120],[120,110],[160,105],[200,115],[240,90],[280,95],[320,88],[360,80],[400,85],[440,75],[480,78],[520,70],[560,65],[600,68],[640,62]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#f59e0b" />
      ))}
      <path d="M80,120 Q160,105 240,90 Q340,86 440,75 Q540,68 640,62" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" />
      {/* Model before calibration */}
      <path d="M80,140 Q160,125 240,110 Q340,104 440,93 Q540,86 640,80" fill="none" stroke="#f97316" strokeWidth="2" />
      {/* Model after calibration */}
      <path d="M80,122 Q160,107 240,92 Q340,88 440,77 Q540,70 640,64" fill="none" stroke={color} strokeWidth="2.5" />
      {/* Residuals */}
      {[[160,105],[280,95],[400,85],[520,70]].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={x} y2={y + 7} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2,2" />
      ))}
      {/* Legend */}
      <circle cx="90" cy="210" r="4" fill="#f59e0b" />
      <text x="100" y="214" fontSize="10" fill="var(--text-secondary)">Sensor real</text>
      <line x1="175" y1="210" x2="195" y2="210" stroke="#f97316" strokeWidth="2" />
      <text x="200" y="214" fontSize="10" fill="var(--text-secondary)">Modelo antes calibração</text>
      <line x1="360" y1="210" x2="380" y2="210" stroke={color} strokeWidth="2.5" />
      <text x="385" y="214" fontSize="10" fill="var(--text-secondary)">Modelo calibrado</text>
    </svg>
  );
}

function KalmanSVG() {
  return (
    <svg viewBox="0 0 720 230" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      {/* Predict box */}
      <rect x="30" y="55" width="160" height="85" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="2" />
      <text x="110" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Predição</text>
      <text x="110" y="107" textAnchor="middle" fontSize="10" fill={color}>x̂(k|k-1) = F·x̂(k-1)</text>
      <text x="110" y="122" textAnchor="middle" fontSize="10" fill={color}>P(k|k-1) = F·P·Fᵀ+Q</text>
      {/* Arrow predict → update */}
      <line x1="190" y1="97" x2="262" y2="97" stroke={color} strokeWidth="1.5" />
      <polygon points="262,92 274,97 262,102" fill={color} />
      {/* Measurement box */}
      <rect x="274" y="22" width="170" height="48" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="359" y="43" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f59e0b">Medição z(k)</text>
      <text x="359" y="61" textAnchor="middle" fontSize="10" fill="#f59e0b">Sensor / IoT data</text>
      {/* Arrow measurement ↓ update */}
      <line x1="359" y1="70" x2="359" y2="82" stroke="#f59e0b" strokeWidth="1.5" />
      <polygon points="354,82 359,94 364,82" fill="#f59e0b" />
      {/* Update box */}
      <rect x="274" y="94" width="170" height="72" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="359" y="120" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Atualização</text>
      <text x="359" y="138" textAnchor="middle" fontSize="10" fill={color}>K = P·Hᵀ(H·P·Hᵀ+R)⁻¹</text>
      <text x="359" y="153" textAnchor="middle" fontSize="10" fill={color}>x̂(k) = x̂(k|k-1)+K·y</text>
      {/* Arrow update → estado */}
      <line x1="444" y1="130" x2="516" y2="130" stroke={color} strokeWidth="1.5" />
      <polygon points="516,125 528,130 516,135" fill={color} />
      {/* State estimate box */}
      <rect x="528" y="90" width="162" height="80" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="609" y="122" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Estado Estimado</text>
      <text x="609" y="140" textAnchor="middle" fontSize="10" fill={color}>x̂(k), P(k)</text>
      <text x="609" y="157" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Próximo ciclo</text>
      {/* Feedback loop: Estado → Predição */}
      <path d="M609,170 Q609,200 360,205 Q110,210 110,140" fill="none" stroke={color} strokeWidth="1.2" strokeDasharray="5,3" strokeOpacity="0.6" />
      <polygon points="105,140 110,128 115,140" fill={color} fillOpacity="0.6" />
      <text x="360" y="218" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">feedback → próxima iteração</text>
    </svg>
  );
}

function ROMSVG() {
  return (
    <svg viewBox="0 0 720 190" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      {/* Full order model */}
      <rect x="20" y="30" width="200" height="130" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="2" />
      <text x="120" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Modelo de Ordem Total</text>
      {/* Grid of dots simulating millions DOF */}
      {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2,3,4,5,6].map(col => (
        <circle key={`${row}-${col}`} cx={35 + col * 22} cy={75 + row * 9} r="2" fill="#f59e0b" fillOpacity="0.7" />
      )))}
      <text x="120" y="170" textAnchor="middle" fontSize="10" fill="#f97316">N = 10⁶ DOF</text>
      {/* POD arrow */}
      <line x1="220" y1="95" x2="285" y2="95" stroke={color} strokeWidth="2" />
      <polygon points="285,90 298,95 285,100" fill={color} />
      <text x="252" y="85" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">POD</text>
      <text x="252" y="112" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Projeção</text>
      {/* ROM */}
      <rect x="298" y="40" width="160" height="100" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="2" />
      <text x="378" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">ROM (PROM)</text>
      {[0,1,2,3].map(row => [0,1,2].map(col => (
        <circle key={`${row}-${col}`} cx={348 + (col - 1) * 30} cy={88 + row * 13} r="3" fill="#f97316" fillOpacity="0.8" />
      )))}
      <text x="378" y="158" textAnchor="middle" fontSize="10" fill="#f97316">n = 200 DOF</text>
      {/* Arrow to result */}
      <line x1="458" y1="95" x2="520" y2="95" stroke={color} strokeWidth="2" />
      <polygon points="520,90 533,95 520,100" fill={color} />
      {/* Accuracy box */}
      <rect x="533" y="40" width="170" height="110" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="2" />
      <text x="618" y="72" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Resultado</text>
      <text x="618" y="95" textAnchor="middle" fontSize="11" fill={color}>Mesma precisão</text>
      <text x="618" y="114" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Erro (menor que) 1%</text>
      <text x="618" y="133" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Speedup: 1000x</text>
    </svg>
  );
}

function MonteCarloSVG() {
  return (
    <svg viewBox="0 0 720 210" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      {/* Input distribution */}
      <rect x="20" y="20" width="180" height="160" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.20)" strokeWidth="1.5" />
      <text x="110" y="42" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-secondary)">Incerteza de Entrada</text>
      <path d="M40,150 Q110,40 180,150" fill="rgba(100,116,139,0.2)" stroke="var(--text-secondary)" strokeWidth="2" />
      <text x="110" y="168" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">E [Normal(mu, sigma)]</text>
      {/* Monte Carlo arrow */}
      <line x1="200" y1="100" x2="260" y2="100" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="260,95 272,100 260,105" fill="var(--text-secondary)" />
      <text x="230" y="88" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Monte Carlo</text>
      <text x="230" y="116" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">N=10000</text>
      {/* Model box */}
      <rect x="272" y="70" width="150" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="347" y="97" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Modelo DT</text>
      <text x="347" y="115" textAnchor="middle" fontSize="10" fill={color}>f(E, params)</text>
      {/* Arrow to output */}
      <line x1="422" y1="100" x2="482" y2="100" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <polygon points="482,95 494,100 482,105" fill="var(--text-secondary)" />
      {/* Output distribution */}
      <rect x="494" y="20" width="200" height="160" rx="8" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.20)" strokeWidth="1.5" />
      <text x="594" y="42" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-secondary)">Distribuição de Saída</text>
      <path d="M514,155 Q594,35 674,155" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      {/* CI lines */}
      <line x1="544" y1="50" x2="544" y2="160" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" />
      <line x1="644" y1="50" x2="644" y2="160" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" />
      <text x="544" y="176" textAnchor="middle" fontSize="9" fill="#f97316">P5</text>
      <text x="644" y="176" textAnchor="middle" fontSize="9" fill="#f97316">P95</text>
      <text x="594" y="176" textAnchor="middle" fontSize="9" fill={color}>Mediana</text>
      <text x="594" y="190" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">IC 90%</text>
    </svg>
  );
}

function DecisionTreeSVG() {
  return (
    <svg viewBox="0 0 720 280" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      {/* Root */}
      <rect x="270" y="10" width="180" height="40" rx="8" fill={color} />
      <text x="360" y="35" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Física conhecida?</text>
      {/* Left branch - Yes */}
      <line x1="310" y1="50" x2="180" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="185" y="80" fontSize="10" fill="#f97316" fontWeight="700">Sim</text>
      <rect x="80" y="90" width="200" height="40" rx="8" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1.5" />
      <text x="180" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f59e0b">Dados suficientes?</text>
      {/* Left-Left - No */}
      <line x1="130" y1="130" x2="80" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="60" y="162" fontSize="9" fill="#f97316">Não</text>
      <rect x="20" y="170" width="140" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="90" y="195" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Modelo Físico</text>
      <text x="90" y="208" textAnchor="middle" fontSize="9" fill="#f97316">(FEM/CFD/Modelica)</text>
      {/* Left-Right - Yes */}
      <line x1="230" y1="130" x2="265" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="265" y="162" fontSize="9" fill="#f97316">Sim</text>
      <rect x="190" y="170" width="140" height="40" rx="8" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <text x="260" y="195" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Modelo Híbrido</text>
      <text x="260" y="208" textAnchor="middle" fontSize="9" fill={color}>(PINN / Physics-ML)</text>
      {/* Right branch - No */}
      <line x1="410" y1="50" x2="530" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="508" y="80" fontSize="10" fill="#f97316" fontWeight="700">Não</text>
      <rect x="440" y="90" width="200" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="540" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Dados abundantes?</text>
      {/* Right-Right - Yes */}
      <line x1="590" y1="130" x2="630" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="623" y="162" fontSize="9" fill="#f97316">Sim</text>
      <rect x="570" y="170" width="140" height="40" rx="8" fill="rgba(249,115,22,0.08)" stroke="#fb923c" strokeWidth="1.5" />
      <text x="640" y="195" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Modelo ML</text>
      <text x="640" y="208" textAnchor="middle" fontSize="9" fill="#f97316">(NN / GP / LSTM)</text>
      {/* Right-Left - No */}
      <line x1="490" y1="130" x2="460" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="450" y="162" fontSize="9" fill="#f97316">Não</text>
      <rect x="370" y="170" width="150" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="445" y="192" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fb923c">Recolher mais</text>
      <text x="445" y="206" textAnchor="middle" fontSize="9" fill="#fb923c">dados ou usar</text>
      {/* Real-time box at bottom */}
      <rect x="150" y="250" width="420" height="28" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x="360" y="269" textAnchor="middle" fontSize="11" fill={color} fontWeight="600">Tempo real requerido? Adicionar ROM / Surrogate ao pipeline</text>
    </svg>
  );
}

export default function DT3() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>

      <div style={S.tag}>MÓDULO 03</div>
      <h1 style={S.h1}>Modelação &amp; Simulação</h1>
      <p style={S.lead}>
        O núcleo de qualquer Digital Twin é o modelo matemático que replica o comportamento do sistema físico.
        Este módulo explora a taxonomia de modelos, do primeiro princípio ao deep learning, passando por abordagens híbridas,
        co-simulação, calibração, redução de ordem e quantificação de incerteza — as peças essenciais para construir
        gémeos digitais fiáveis e de alto desempenho.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Tipos de Modelos</h2>
        <p style={S.p}>
          Os modelos utilizados em Digital Twins posicionam-se num espectro que vai do <strong>white box</strong>
          (totalmente baseado em física e equações derivadas de primeiros princípios) ao <strong>black box</strong>
          (puramente orientado por dados, sem conhecimento explícito do mecanismo físico). No meio encontramos
          abordagens <strong>híbridas</strong> que combinam o melhor dos dois mundos.
        </p>
        <ModelSpectrumSVG />
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Limitações</th>
              <th style={S.th}>Requisitos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>Físico (White Box)</strong></td>
              <td style={S.td}>Interpretável; extrapola para condições não vistas; não precisa de dados históricos</td>
              <td style={S.td}>Requer equações bem estabelecidas; computacionalmente caro</td>
              <td style={S.td}>Equações de governação, parâmetros físicos</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Data-Driven (Black Box)</strong></td>
              <td style={S.td}>Flexível; aprende padrões complexos; fácil de implementar</td>
              <td style={S.td}>Caixa negra; fraca extrapolação; precisa de muitos dados</td>
              <td style={S.td}>Dados históricos abundantes e de qualidade</td>
            </tr>
            <tr>
              <td style={S.td}><strong>Híbrido (Grey Box)</strong></td>
              <td style={S.td}>Melhor de ambos; eficiente em dados; fisicamente consistente</td>
              <td style={S.td}>Maior complexidade de implementação</td>
              <td style={S.td}>Alguma física + dados parciais</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          A escolha do tipo de modelo deve ser guiada pelo conhecimento disponível do sistema, volume de dados, requisitos de
          tempo real e necessidades de interpretabilidade. Não existe uma solução universal.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Modelos Físicos — Primeiros Princípios</h2>
        <p style={S.p}>
          Os modelos de primeiros princípios derivam o comportamento do sistema diretamente das leis fundamentais da física:
          conservação de energia, quantidade de movimento, massa e carga. São a base tradicional da engenharia e continuam
          a ser indispensáveis onde a física é bem conhecida e os dados escassos.
        </p>
        <FEMMeshSVG />
        <h3 style={S.h3}>Equações de Governação Comuns</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Condução de calor (Fourier):</strong><br />
            rho * c_p * (partial T / partial t) = nabla · (k nabla T) + Q
          </p>
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Equilíbrio mecânico (Cauchy):</strong><br />
            nabla · sigma + f = rho * (partial^2 u / partial t^2)
          </p>
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Escoamento incompressível (Navier-Stokes):</strong><br />
            rho (Du/Dt) = -nabla p + mu nabla^2 u + f
          </p>
        </div>
        <h3 style={S.h3}>Ferramentas e Frameworks</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Ferramenta</th>
              <th style={S.th}>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Mecânica estrutural</td><td style={S.td}>ANSYS Mechanical, Abaqus, FEniCS</td><td style={S.td}>FEM — tensões, vibrações, fadiga</td></tr>
            <tr><td style={S.td}>Fluidos (CFD)</td><td style={S.td}>OpenFOAM, ANSYS Fluent, Star-CCM+</td><td style={S.td}>Escoamento, transferência de calor</td></tr>
            <tr><td style={S.td}>Multi-domínio</td><td style={S.td}>Modelica / OpenModelica, Simscape</td><td style={S.td}>Sistemas elétricos, hidráulicos, térmicos</td></tr>
            <tr><td style={S.td}>Eletromagnetismo</td><td style={S.td}>CST Studio, COMSOL</td><td style={S.td}>Campos EM, motores, sensores</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          <strong>Quando usar:</strong> Quando as equações físicas são conhecidas, os dados históricos são escassos ou inexistentes,
          e a extrapolação para novas condições operacionais é crítica (ex: segurança nuclear, aeroespacial, medicina).
        </div>
        <h3 style={S.h3}>Pontos Fortes e Fracos</h3>
        <p style={S.p}>
          Modelos físicos são altamente interpretáveis e permitem compreender a causa raiz dos fenómenos. Extrapolam de forma
          segura para fora do domínio de treino e não necessitam de dados históricos. No entanto, a sua implementação é intensiva
          em conhecimento de domínio, o custo computacional pode ser proibitivo para uso em tempo real, e simplificações
          geométricas ou de materiais introduzem incertezas de modelação que devem ser quantificadas.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Modelos de Machine Learning</h2>
        <p style={S.p}>
          Quando dados históricos abundam mas a física é complexa ou desconhecida, os modelos de ML oferecem uma alternativa
          poderosa. Em Digital Twins, destacam-se as redes LSTM para séries temporais, os Processos Gaussianos (GP) com
          quantificação de incerteza nativa, e as redes convolucionais para análise de imagem e vibração.
        </p>
        <RegressionCurveSVG />
        <h3 style={S.h3}>Arquiteturas Relevantes para DTs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Força</th>
              <th style={S.th}>Uso típico em DT</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>LSTM / GRU</td><td style={S.td}>Séries temporais com dependências longas</td><td style={S.td}>Predição de desgaste, anomalias, forecasting</td></tr>
            <tr><td style={S.td}>Gaussian Process (GP)</td><td style={S.td}>Incerteza epistémica nativa, poucos dados</td><td style={S.td}>Surrogate models, sensor fusion</td></tr>
            <tr><td style={S.td}>Transformer</td><td style={S.td}>Atenção multi-head, multi-sensor</td><td style={S.td}>Análise de sistemas complexos com muitos sensores</td></tr>
            <tr><td style={S.td}>Autoencoder</td><td style={S.td}>Detecção de anomalias não supervisionada</td><td style={S.td}>Monitorização de estado, qualidade</td></tr>
            <tr><td style={S.td}>CNN 1D</td><td style={S.td}>Padrões locais em sinais</td><td style={S.td}>Vibração, análise acústica, ECG industrial</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Os GP (Gaussian Processes) são especialmente úteis quando os dados são escassos e a quantificação de incerteza é
          necessária. A biblioteca GPyTorch permite GP escaláveis a grandes datasets usando aproximações indutivas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Physics-Informed Neural Networks (PINNs)</h2>
        <p style={S.p}>
          As PINNs incorporam equações diferenciais parciais (PDEs) diretamente na função de perda da rede neuronal.
          Isto permite treinar modelos com muito menos dados e garantir que as predições respeitam as leis físicas,
          mesmo em regiões onde não há observações.
        </p>
        <PINNArchSVG />
        <h3 style={S.h3}>Formulação da Loss Function</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Loss total:</strong> L_total = L_data + lambda * L_physics
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>L_data</strong> = soma dos quadrados dos resíduos nos pontos de observação
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>L_physics</strong> = resíduo da PDE nos pontos de colocação (sem necessidade de dados)
          </p>
        </div>
        <p style={S.p}>
          As derivadas parciais são calculadas por diferenciação automática (autograd), tornando possível avaliar
          o resíduo da PDE em qualquer ponto do domínio durante o treino. O hiperparâmetro lambda controla o
          balanço entre fidelidade aos dados e consistência física.
        </p>
        <h3 style={S.h3}>Benefícios das PINNs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Benefício</th>
              <th style={S.th}>Detalhe</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Eficiência em dados</td><td style={S.td}>A física substitui exemplos — funciona com dados esparsos ou ruidosos</td></tr>
            <tr><td style={S.td}>Consistência física</td><td style={S.td}>Predições nunca violam as leis de conservação incorporadas</td></tr>
            <tr><td style={S.td}>Interpolação e extrapolação</td><td style={S.td}>Melhor generalização fora do domínio de treino vs ML puro</td></tr>
            <tr><td style={S.td}>Problemas inversos</td><td style={S.td}>Identifica parâmetros desconhecidos (k, rho, mu) a partir de observações</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Surrogate Models &amp; Emulação</h2>
        <p style={S.p}>
          Simulações de alta fidelidade (FEM, CFD) podem demorar horas por execução, tornando inviável o seu uso
          em tempo real ou em otimização com milhares de avaliações. Os <strong>surrogate models</strong> (emuladores)
          são modelos substitutos, treinados sobre um conjunto de simulações, que replicam o comportamento
          com uma fração do custo computacional.
        </p>
        <SurrogateSVG />
        <h3 style={S.h3}>Técnicas de Surrogate Modelling</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>Pontos Fortes</th>
              <th style={S.th}>Limitações</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Gaussian Process (Kriging)</td><td style={S.td}>Quantificação de incerteza; óptimo para poucos dados</td><td style={S.td}>Escala O(n³); difícil em alta dimensão</td></tr>
            <tr><td style={S.td}>Polynomial Chaos Expansion</td><td style={S.td}>Base ortogonal; propagação analítica de incerteza</td><td style={S.td}>Maldição da dimensionalidade</td></tr>
            <tr><td style={S.td}>Rede Neuronal (Deep Surrogate)</td><td style={S.td}>Alta dimensão; não-linearidades complexas</td><td style={S.td}>Sem incerteza nativa; precisa de mais dados</td></tr>
            <tr><td style={S.td}>Radial Basis Functions</td><td style={S.td}>Simples; interpolação exacta nos pontos de treino</td><td style={S.td}>Menos robusto fora do domínio amostrado</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          <strong>Aplicações:</strong> Exploração do espaço de design, otimização de parâmetros (Bayesian Optimization),
          análise de sensibilidade de custo elevado, e loops de controlo adaptativo onde a latência é crítica.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Co-Simulação</h2>
        <p style={S.p}>
          Sistemas reais envolvem múltiplos domínios físicos acoplados — por exemplo, um motor eléctrico combina
          dinâmica electromagnética, térmica e mecânica. A <strong>co-simulação</strong> permite que simuladores
          especializados em cada domínio operem em paralelo, trocando dados nos chamados <em>coupling points</em>.
        </p>
        <CoSimSVG />
        <h3 style={S.h3}>FMI — Functional Mock-up Interface</h3>
        <p style={S.p}>
          O standard FMI (ISO 25539) define uma interface universal para unidades de simulação (<em>Functional Mock-up Units</em> — FMUs).
          Cada FMU encapsula um modelo como uma caixa negra com entradas, saídas e estado interno, permitindo a sua integração
          em plataformas como Simulink, Dymola, OpenModelica ou Python (via FMPy).
        </p>
        <h3 style={S.h3}>Algoritmo Master e Sincronização</h3>
        <p style={S.p}>
          O algoritmo master coordena a evolução temporal dos sub-simuladores. Nos coupling points, as saídas de cada
          FMU tornam-se entradas dos outros. A escolha do passo de acoplamento envolve um trade-off entre precisão
          e velocidade de simulação. Algoritmos iterativos (Jacobi, Gauss-Seidel) melhoram a precisão ao custo
          de mais comunicação inter-simuladores.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>OpenModelica</td><td style={S.td}>Modelica open-source; excelente para sistemas multi-domínio</td></tr>
            <tr><td style={S.td}>Simulink / Simscape</td><td style={S.td}>Integração MathWorks; popular em automóvel e aeronáutica</td></tr>
            <tr><td style={S.td}>FMPy</td><td style={S.td}>Biblioteca Python para importar e simular FMUs</td></tr>
            <tr><td style={S.td}>SSP (System Structure and Parameterization)</td><td style={S.td}>Standard para descrever arquitecturas de co-simulação</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Digital Thread</h2>
        <p style={S.p}>
          O <strong>Digital Thread</strong> é o fio condutor de dados que liga todas as fases do ciclo de vida de um produto:
          desde o design conceptual até ao fim de vida, passando pelo fabrico, operação e manutenção. Enquanto o Digital Twin
          é o "espelho" do sistema em operação, o Digital Thread é a infraestrutura de dados que alimenta e mantém esse espelho
          actualizado ao longo do tempo.
        </p>
        <DigitalThreadSVG />
        <h3 style={S.h3}>Componentes do Digital Thread</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Fase</th>
              <th style={S.th}>Sistema</th>
              <th style={S.th}>Dados Chave</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Design</td><td style={S.td}>PLM (Windchill, Teamcenter), CAD</td><td style={S.td}>Geometria, materiais, requisitos, BOM</td></tr>
            <tr><td style={S.td}>Engenharia</td><td style={S.td}>CAE (ANSYS, Nastran), PDM</td><td style={S.td}>Simulações, resultados FEM, testes virtuais</td></tr>
            <tr><td style={S.td}>Fabrico</td><td style={S.td}>MES, CAM, qualidade</td><td style={S.td}>Parâmetros de processo, inspeções, as-built</td></tr>
            <tr><td style={S.td}>Operação</td><td style={S.td}>IoT, SCADA, CMMS</td><td style={S.td}>Telemetria em tempo real, histórico de falhas</td></tr>
            <tr><td style={S.td}>Fim de vida</td><td style={S.td}>ERP, sistemas de reciclagem</td><td style={S.td}>Horas de operação, degradação, sustentabilidade</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Boeing e Airbus foram pioneiros na implementação do Digital Thread em programas como o 787 Dreamliner e o A350,
          conectando design, fabrico e operação numa cadeia de dados contínua que permite rastreabilidade total
          de cada componente.
        </div>
        <h3 style={S.h3}>PLM e Integração de Sistemas</h3>
        <p style={S.p}>
          A integração entre PLM, ERP, MES e sistemas IoT é o desafio técnico central do Digital Thread.
          Ontologias como o DTDL (Digital Twin Definition Language) da Microsoft e o AML (AutomationML) permitem
          descrever activos digitais de forma interoperável entre diferentes plataformas e fornecedores.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Calibração e Validação</h2>
        <p style={S.p}>
          Um modelo, por mais sofisticado que seja, só é útil se as suas predições corresponderem ao comportamento real do sistema.
          A <strong>calibração</strong> ajusta os parâmetros do modelo para minimizar o desvio face a dados reais.
          A <strong>validação</strong> verifica que o modelo é adequado ao propósito, usando dados independentes dos de calibração.
        </p>
        <CalibrationSVG />
        <h3 style={S.h3}>Framework V&amp;V (Verification &amp; Validation)</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Verificação:</strong> "Construímos o modelo correctamente?" — O modelo implementa correctamente as equações
            definidas? (comparação com soluções analíticas, benchmarks)
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Validação:</strong> "Construímos o modelo certo?" — O modelo representa correctamente o sistema físico?
            (comparação com dados experimentais independentes)
          </p>
        </div>
        <h3 style={S.h3}>Métricas de Qualidade de Modelo</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Fórmula</th>
              <th style={S.th}>Interpretação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>RMSE</td><td style={S.td}>sqrt(mean((y - y_hat)^2))</td><td style={S.td}>Erro médio na mesma unidade da variável</td></tr>
            <tr><td style={S.td}>MAPE</td><td style={S.td}>mean(|y - y_hat| / y) * 100</td><td style={S.td}>Erro percentual — fácil de comunicar</td></tr>
            <tr><td style={S.td}>R²</td><td style={S.td}>1 - SS_res / SS_tot</td><td style={S.td}>Fracção da variância explicada pelo modelo</td></tr>
            <tr><td style={S.td}>Theil U</td><td style={S.td}>RMSE_model / RMSE_naive</td><td style={S.td}>Compara com predição naive — deve ser menor que 1</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          A norma ASME V&amp;V 10-2006 estabelece o framework de referência para verificação e validação de modelos em
          mecânica computacional. A norma ASME V&amp;V 20-2009 aplica-se especificamente a CFD.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Model Updating em Tempo Real</h2>
        <p style={S.p}>
          Os sistemas físicos evoluem — desgaste, fadiga, alterações de condições ambientais — e o Digital Twin
          deve acompanhar essa evolução. O <strong>model updating em tempo real</strong> utiliza novas observações
          para ajustar continuamente os parâmetros ou o estado do modelo, mantendo-o sincronizado com a realidade.
        </p>
        <KalmanSVG />
        <h3 style={S.h3}>Filtro de Kalman e Variantes</h3>
        <p style={S.p}>
          O Filtro de Kalman (KF) é o algoritmo de estimação de estado óptimo para sistemas lineares com ruído gaussiano.
          Para sistemas não-lineares, existem extensões: o <strong>Extended Kalman Filter (EKF)</strong> lineariza
          em torno do estado actual, o <strong>Unscented Kalman Filter (UKF)</strong> propaga pontos sigma, e
          o <strong>Particle Filter</strong> usa amostras Monte Carlo para distribuições arbitrárias.
        </p>
        <h3 style={S.h3}>Identificação de Parâmetros Bayesiana</h3>
        <p style={S.p}>
          Para além da estimação de estado, é possível identificar parâmetros do modelo em tempo real usando
          inferência Bayesiana. O estado aumentado inclui tanto as variáveis de estado como os parâmetros a identificar.
          Com novos dados, a distribuição <em>a posteriori</em> dos parâmetros é actualizada recursivamente,
          proporcionando uma estimativa com incerteza quantificada.
        </p>
        <div style={S.note}>
          Em Digital Twins de estruturas civis (pontes, edifícios), o model updating em tempo real com dados de
          acelerómetros permite detectar danos estruturais e actualizações de rigidez ao longo da vida útil do activo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Redução de Ordem de Modelos (ROM)</h2>
        <p style={S.p}>
          Modelos FEM detalhados de componentes industriais podem ter milhões de graus de liberdade (DOF),
          tornando impraticável a sua utilização em loops de controlo em tempo real ou em simulações de Monte Carlo.
          A <strong>Redução de Ordem de Modelos (ROM)</strong> projecta o sistema de alta dimensão num subespaço
          de baixa dimensão que captura a dinâmica dominante com precisão controlada.
        </p>
        <ROMSVG />
        <h3 style={S.h3}>POD — Proper Orthogonal Decomposition</h3>
        <p style={S.p}>
          A POD (também conhecida como análise de componentes principais em contexto dinâmico) identifica as
          <em>modos próprios ortogonais</em> que melhor representam os dados de simulação. Com um número reduzido
          de modos (tipicamente dezenas a centenas), é possível reconstruir o campo completo com erro controlado.
        </p>
        <h3 style={S.h3}>Tipos de ROM</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Sigla</th>
              <th style={S.th}>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Proper Orthogonal Decomposition</td><td style={S.td}>POD</td><td style={S.td}>Mecânica dos fluidos, estrutural</td></tr>
            <tr><td style={S.td}>Projection-based ROM</td><td style={S.td}>PROM</td><td style={S.td}>Sistemas lineares e não-lineares parametrizados</td></tr>
            <tr><td style={S.td}>Dynamic Mode Decomposition</td><td style={S.td}>DMD</td><td style={S.td}>Sistemas dinâmicos — extrai modos oscilatórios</td></tr>
            <tr><td style={S.td}>Balanced Truncation</td><td style={S.td}>BT</td><td style={S.td}>Sistemas de controlo lineares</td></tr>
            <tr><td style={S.td}>Hyper-Reduction (DEIM)</td><td style={S.td}>DEIM</td><td style={S.td}>ROM não-linear eficiente</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Na indústria automóvel, ROMs de simulações de crash com 5M DOF são reduzidas a modelos com 500 DOF que
          executam em segundos, permitindo optimização multi-objectivo de geometrias com milhares de avaliações.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Incerteza e Análise de Sensibilidade</h2>
        <p style={S.p}>
          Toda a predição de um Digital Twin está sujeita a incertezas: imprecisão nos parâmetros do modelo,
          ruído de medição, simplificações geométricas, variabilidade material. A <strong>quantificação de incerteza (UQ)</strong>
          é a disciplina que propaga essas incertezas através do modelo e as quantifica na saída, permitindo
          tomar decisões informadas sob incerteza.
        </p>
        <MonteCarloSVG />
        <h3 style={S.h3}>Tipos de Incerteza</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Incerteza aleatória (aleatory):</strong> inerente à variabilidade natural do sistema —
            não pode ser reduzida com mais dados. Ex: variabilidade de material, condições ambientais.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Incerteza epistémica:</strong> devida a falta de conhecimento — pode ser reduzida
            com mais dados ou modelos melhores. Ex: parâmetros desconhecidos, simplificações do modelo.
          </p>
        </div>
        <h3 style={S.h3}>Análise de Sensibilidade de Sobol</h3>
        <p style={S.p}>
          Os índices de sensibilidade de Sobol permitem identificar quais as entradas que mais contribuem para
          a variância da saída, guiando o esforço de calibração e recolha de dados para os parâmetros mais influentes.
        </p>
        <h3 style={S.h3}>Decisão sob Incerteza</h3>
        <p style={S.p}>
          Com as distribuições de saída quantificadas, é possível definir limites de decisão baseados em probabilidade.
          Por exemplo: "substituir o componente se a probabilidade de falha nos próximos 500 horas exceder 5%."
          Esta abordagem é a base dos sistemas de Manutenção Preditiva baseada em risco (<em>Risk-Based Maintenance</em>).
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método UQ</th>
              <th style={S.th}>Custo computacional</th>
              <th style={S.th}>Precisão</th>
              <th style={S.th}>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Monte Carlo (MC)</td><td style={S.td}>Alto (N=10000+)</td><td style={S.td}>Alta (converge lentamente)</td><td style={S.td}>Referência; qualquer modelo</td></tr>
            <tr><td style={S.td}>Quasi-Monte Carlo</td><td style={S.td}>Médio</td><td style={S.td}>Alta (sequências de baixa discrepância)</td><td style={S.td}>Dimensão moderada</td></tr>
            <tr><td style={S.td}>Polynomial Chaos (PCE)</td><td style={S.td}>Baixo (pós treino)</td><td style={S.td}>Alta (para modelos suaves)</td><td style={S.td}>Propagação analítica de incerteza</td></tr>
            <tr><td style={S.td}>FORM/SORM</td><td style={S.td}>Muito baixo</td><td style={S.td}>Boa (linearização)</td><td style={S.td}>Análise de fiabilidade estrutural</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          A escolha da abordagem de modelação certa para um Digital Twin depende de múltiplos factores:
          conhecimento físico disponível, volume e qualidade dos dados, requisitos de tempo real, necessidade
          de interpretabilidade e recursos computacionais. A árvore de decisão abaixo sintetiza os critérios principais.
        </p>
        <DecisionTreeSVG />
        <h3 style={S.h3}>Comparação das Abordagens</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Físico</th>
              <th style={S.th}>ML Puro</th>
              <th style={S.th}>PINN</th>
              <th style={S.th}>Surrogate</th>
              <th style={S.th}>ROM</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Poucos dados</td><td style={S.td}>Excelente</td><td style={S.td}>Fraco</td><td style={S.td}>Muito bom</td><td style={S.td}>Moderado</td><td style={S.td}>Bom</td></tr>
            <tr><td style={S.td}>Tempo real</td><td style={S.td}>Fraco</td><td style={S.td}>Excelente</td><td style={S.td}>Bom</td><td style={S.td}>Excelente</td><td style={S.td}>Excelente</td></tr>
            <tr><td style={S.td}>Extrapolação</td><td style={S.td}>Excelente</td><td style={S.td}>Fraco</td><td style={S.td}>Muito bom</td><td style={S.td}>Fraco</td><td style={S.td}>Bom</td></tr>
            <tr><td style={S.td}>Interpretável</td><td style={S.td}>Excelente</td><td style={S.td}>Fraco</td><td style={S.td}>Moderado</td><td style={S.td}>Moderado</td><td style={S.td}>Bom</td></tr>
            <tr><td style={S.td}>Incerteza nativa</td><td style={S.td}>Moderado</td><td style={S.td}>Fraco</td><td style={S.td}>Moderado</td><td style={S.td}>Excelente (GP)</td><td style={S.td}>Moderado</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Tooling Landscape</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Categoria</th>
              <th style={S.th}>Ferramentas</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>FEM / Estrutural</td><td style={S.td}>ANSYS Mechanical, Abaqus, FEniCS, Calculix</td></tr>
            <tr><td style={S.td}>CFD</td><td style={S.td}>OpenFOAM, ANSYS Fluent, SU2</td></tr>
            <tr><td style={S.td}>Multi-domain</td><td style={S.td}>Modelica, OpenModelica, Simscape</td></tr>
            <tr><td style={S.td}>Co-simulação</td><td style={S.td}>FMPy, Modelon Impact, INTO-CPS</td></tr>
            <tr><td style={S.td}>ML / Deep Learning</td><td style={S.td}>PyTorch, TensorFlow, JAX, scikit-learn</td></tr>
            <tr><td style={S.td}>PINNs</td><td style={S.td}>DeepXDE, NeuralPDE.jl, SciANN, NVIDIA Modulus</td></tr>
            <tr><td style={S.td}>Gaussian Processes</td><td style={S.td}>GPyTorch, GPflow, scikit-learn GaussianProcess</td></tr>
            <tr><td style={S.td}>ROM</td><td style={S.td}>pyMOR, Octave MOR, OpenBF</td></tr>
            <tr><td style={S.td}>Incerteza / UQ</td><td style={S.td}>SALib, OpenTURNS, Dakota, chaospy</td></tr>
            <tr><td style={S.td}>Kalman / Estimação</td><td style={S.td}>FilterPy, pykalman, UKF em SciPy</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Pipeline de Modelação Recomendado</h3>
        <div style={S.note}>
          <strong>Princípio de ouro:</strong> Comece sempre com o modelo mais simples que satisfaz os requisitos de
          precisão. Aumente a complexidade apenas quando os dados e os requisitos o justificam. Um modelo simples
          bem calibrado e validado é sempre preferível a um modelo complexo não compreendido.
        </div>
        <h3 style={S.h3}>Tendências Emergentes</h3>
        <p style={S.p}>
          O campo da modelação para Digital Twins está em rápida evolução. As <strong>Foundation Models</strong>
          para ciência e engenharia (ex: NVIDIA FourCastNet para previsão meteorológica) prometem modelos
          pré-treinados em larga escala que podem ser fine-tuned para domínios específicos com poucos dados.
          Os <strong>Neural Operators</strong> (FNO, DeepONet) aprendem operadores entre espaços de funções,
          generalizando para geometrias e condições de fronteira não vistas durante o treino. A combinação
          destas arquitecturas com frameworks de co-simulação FMI representa o próximo passo na evolução
          dos Digital Twins de alta fidelidade.
        </p>
      </section>
    </div>
  );
}
