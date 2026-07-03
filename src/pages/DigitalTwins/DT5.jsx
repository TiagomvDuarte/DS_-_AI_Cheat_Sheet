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

function QuadrantSVG() {
  return (
    <svg viewBox="0 0 700 420" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="420" fill="var(--bg-secondary)" rx="10" />
      <line x1="350" y1="30" x2="350" y2="390" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <line x1="30" y1="210" x2="670" y2="210" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="350" y="18" textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="600">OT (Industrial)</text>
      <text x="350" y="408" textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="600">IT / Cloud-native</text>
      <text x="16" y="210" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="600" transform="rotate(-90,16,210)">Open Source</text>
      <text x="684" y="210" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="600" transform="rotate(90,684,210)">Proprietary</text>
      <text x="90" y="55" fontSize="10" fill="#94a3b8" fontWeight="700">Open + OT</text>
      <text x="480" y="55" fontSize="10" fill="#94a3b8" fontWeight="700">Proprietary + OT</text>
      <text x="90" y="395" fontSize="10" fill="#94a3b8" fontWeight="700">Open + Cloud</text>
      <text x="460" y="395" fontSize="10" fill="#94a3b8" fontWeight="700">Proprietary + Cloud</text>
      <circle cx="160" cy="310" r="38" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="160" y="306" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Eclipse</text>
      <text x="160" y="320" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Ditto</text>
      <circle cx="270" cy="270" r="36" fill="rgba(249,115,22,0.1)" stroke="#f97316" strokeWidth="2" />
      <text x="270" y="266" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">NVIDIA</text>
      <text x="270" y="280" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Omniverse</text>
      <circle cx="520" cy="300" r="38" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="2" />
      <text x="520" y="296" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Azure</text>
      <text x="520" y="310" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Digital Twins</text>
      <circle cx="610" cy="270" r="36" fill="rgba(234,88,12,0.1)" stroke="#ea580c" strokeWidth="2" />
      <text x="610" y="266" textAnchor="middle" fontSize="11" fill="#ea580c" fontWeight="700">AWS</text>
      <text x="610" y="280" textAnchor="middle" fontSize="11" fill="#ea580c" fontWeight="700">TwinMaker</text>
      <circle cx="500" cy="110" r="36" fill="rgba(249,115,22,0.1)" stroke="#f59e0b" strokeWidth="2" />
      <text x="500" y="106" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">Siemens</text>
      <text x="500" y="120" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">MindSphere</text>
      <circle cx="610" cy="130" r="34" fill="rgba(234,88,12,0.1)" stroke="#ea580c" strokeWidth="2" />
      <text x="610" y="126" textAnchor="middle" fontSize="11" fill="#ea580c" fontWeight="700">PTC</text>
      <text x="610" y="140" textAnchor="middle" fontSize="11" fill="#ea580c" fontWeight="700">ThingWorx</text>
    </svg>
  );
}

function AzureArchSVG() {
  const boxes = [
    { x: 20, label1: 'DTDL', label2: 'Models', c: '#f97316' },
    { x: 155, label1: 'Twin', label2: 'Graph', c: '#f97316' },
    { x: 290, label1: 'Event', label2: 'Routes', c: '#f97316' },
    { x: 425, label1: 'Azure Data', label2: 'Explorer', c: '#f97316' },
    { x: 560, label1: 'Power', label2: 'BI', c: '#ea580c' },
  ];
  return (
    <svg viewBox="0 0 700 160" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="160" fill="var(--bg-secondary)" rx="10" />
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={40} width={110} height={80} rx="8" fill={b.c} fillOpacity="0.12" stroke={b.c} strokeWidth="2" />
          <text x={b.x + 55} y={74} textAnchor="middle" fontSize="12" fill={b.c} fontWeight="700">{b.label1}</text>
          <text x={b.x + 55} y={92} textAnchor="middle" fontSize="12" fill={b.c} fontWeight="700">{b.label2}</text>
          {i < boxes.length - 1 && (
            <g>
              <line x1={b.x + 112} y1={80} x2={b.x + 128} y2={80} stroke="#94a3b8" strokeWidth="2" />
              <polygon points={`${b.x + 126},75 ${b.x + 136},80 ${b.x + 126},85`} fill="#94a3b8" />
            </g>
          )}
        </g>
      ))}
      <text x="350" y="148" textAnchor="middle" fontSize="11" fill="#64748b">Fluxo de dados Azure Digital Twins</text>
    </svg>
  );
}

function AWSTwinMakerSVG() {
  return (
    <svg viewBox="0 0 700 280" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="280" fill="var(--bg-secondary)" rx="10" />
      <rect x="30" y="90" width="140" height="60" rx="8" fill="rgba(234,88,12,0.12)" stroke="#ea580c" strokeWidth="2" />
      <text x="100" y="116" textAnchor="middle" fontSize="12" fill="#ea580c" fontWeight="700">Entities</text>
      <text x="100" y="132" textAnchor="middle" fontSize="12" fill="#ea580c" fontWeight="700">+ Components</text>
      <line x1="172" y1="120" x2="220" y2="120" stroke="#94a3b8" strokeWidth="2" />
      <polygon points="218,115 228,120 218,125" fill="#94a3b8" />
      <rect x="230" y="90" width="140" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="300" y="116" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Scene</text>
      <text x="300" y="132" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Composer</text>
      <line x1="372" y1="120" x2="420" y2="120" stroke="#94a3b8" strokeWidth="2" />
      <polygon points="418,115 428,120 418,125" fill="#94a3b8" />
      <rect x="430" y="90" width="140" height="60" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="500" y="116" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="700">Grafana</text>
      <text x="500" y="132" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="700">Dashboard</text>
      <rect x="120" y="200" width="120" height="50" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
      <text x="180" y="226" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="700">Amazon S3</text>
      <text x="180" y="242" textAnchor="middle" fontSize="11" fill="#f97316">(3D Models)</text>
      <rect x="300" y="200" width="140" height="50" rx="8" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="2" />
      <text x="370" y="226" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="700">Timestream</text>
      <text x="370" y="242" textAnchor="middle" fontSize="11" fill="#f97316">(Time-Series)</text>
      <line x1="300" y1="150" x2="180" y2="200" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
      <line x1="300" y1="150" x2="370" y2="200" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="350" y="268" textAnchor="middle" fontSize="11" fill="#64748b">Arquitetura AWS IoT TwinMaker</text>
    </svg>
  );
}

function OmniverseSVG() {
  const layers = [
    { y: 30, label: 'Nucleus Server (Collaboration Hub)', c: '#f97316', w: 520 },
    { y: 90, label: 'Connect Plugins (Revit, Maya, Blender, SolidWorks)', c: '#f97316', w: 440 },
    { y: 150, label: 'Kit SDK (Extensions, Python scripting)', c: '#fb923c', w: 360 },
    { y: 210, label: 'Apps: Isaac Sim | Factory | Audio2Face | USD Composer', c: '#f59e0b', w: 520 },
  ];
  return (
    <svg viewBox="0 0 600 290" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="600" height="290" fill="var(--bg-secondary)" rx="10" />
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={(600 - l.w) / 2} y={l.y} width={l.w} height={48} rx="7" fill={l.c} fillOpacity="0.15" stroke={l.c} strokeWidth="2" />
          <text x="300" y={l.y + 28} textAnchor="middle" fontSize="12" fill={l.c} fontWeight="700">{l.label}</text>
        </g>
      ))}
      <text x="300" y="278" textAnchor="middle" fontSize="11" fill="#64748b">Stack NVIDIA Omniverse</text>
    </svg>
  );
}

function MindSphereSVG() {
  const adapters = ['MindConnect IoT2040', 'MindConnect Nano', 'SIMATIC S7', 'OPC UA Gateway'];
  const apps = ['MindApp Analytics', 'MindApp Monitor', 'Insights Hub'];
  return (
    <svg viewBox="0 0 700 300" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="300" fill="var(--bg-secondary)" rx="10" />
      <circle cx="350" cy="150" r="60" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="2.5" />
      <text x="350" y="144" textAnchor="middle" fontSize="13" fill="#f97316" fontWeight="800">MindSphere</text>
      <text x="350" y="160" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="600">Cloud Platform</text>
      {adapters.map((a, i) => {
        const y = 60 + i * 55;
        return (
          <g key={i}>
            <rect x="30" y={y} width="160" height="36" rx="6" fill="rgba(22,101,52,0.08)" stroke="#f97316" strokeWidth="1.5" />
            <text x="110" y={y + 22} textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">{a}</text>
            <line x1="192" y1={y + 18} x2="292" y2="150" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
          </g>
        );
      })}
      {apps.map((app, i) => {
        const y = 80 + i * 60;
        return (
          <g key={i}>
            <line x1="410" y1="150" x2="490" y2={y + 18} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
            <rect x="490" y={y} width="150" height="36" rx="6" fill="rgba(22,101,52,0.08)" stroke="#f97316" strokeWidth="1.5" />
            <text x="565" y={y + 22} textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">{app}</text>
          </g>
        );
      })}
      <text x="350" y="288" textAnchor="middle" fontSize="11" fill="#64748b">Siemens MindSphere Hub-and-Spoke</text>
    </svg>
  );
}

function DittoArchSVG() {
  const outputs = [
    { label: 'HTTP REST', y: 75, c: '#f97316' },
    { label: 'MQTT Broker', y: 120, c: '#f97316' },
    { label: 'WebSocket', y: 165, c: '#ea580c' },
  ];
  return (
    <svg viewBox="0 0 700 240" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="240" fill="var(--bg-secondary)" rx="10" />
      <rect x="20" y="80" width="130" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="85" y="116" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Things</text>
      <text x="85" y="132" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">API</text>
      <line x1="152" y1="120" x2="195" y2="120" stroke="#94a3b8" strokeWidth="2" />
      <polygon points="193,115 203,120 193,125" fill="#94a3b8" />
      <rect x="205" y="60" width="150" height="120" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="280" y="110" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Protocol</text>
      <text x="280" y="126" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Adapter</text>
      <text x="280" y="144" textAnchor="middle" fontSize="10" fill="#64748b">(Ditto Protocol)</text>
      {outputs.map((out, i) => (
        <g key={i}>
          <line x1="357" y1={out.y} x2="400" y2={out.y} stroke="#94a3b8" strokeWidth="1.5" />
          <polygon points={`398,${out.y - 5} 408,${out.y} 398,${out.y + 5}`} fill="#94a3b8" />
          <rect x="410" y={out.y - 20} width="140" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke={out.c} strokeWidth="1.5" />
          <text x="480" y={out.y + 5} textAnchor="middle" fontSize="12" fill={out.c} fontWeight="600">{out.label}</text>
        </g>
      ))}
      <text x="350" y="225" textAnchor="middle" fontSize="11" fill="#64748b">Eclipse Ditto — Arquitetura de Protocolo</text>
    </svg>
  );
}

function SimToolsSVG() {
  const tools = [
    { cx: 350, cy: 140, label1: 'FMI/FMU', label2: 'Standard Hub', c: '#f97316', r: 52 },
    { cx: 155, cy: 75, label1: 'ANSYS', label2: 'Twin Builder', c: '#fb923c', r: 44 },
    { cx: 545, cy: 75, label1: 'Modelica', label2: '/ Dymola', c: '#f97316', r: 44 },
    { cx: 155, cy: 215, label1: 'OpenFOAM', label2: '(CFD)', c: '#f97316', r: 44 },
    { cx: 545, cy: 215, label1: 'MATLAB', label2: 'Simulink', c: '#ea580c', r: 44 },
  ];
  return (
    <svg viewBox="0 0 700 300" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="300" fill="var(--bg-secondary)" rx="10" />
      {tools.slice(1).map((t, i) => (
        <line key={i} x1={t.cx} y1={t.cy} x2={350} y2={140} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
      ))}
      {tools.map((t, i) => (
        <g key={i}>
          <circle cx={t.cx} cy={t.cy} r={t.r} fill="rgba(249,115,22,0.10)" stroke={t.c} strokeWidth="2.5" />
          <text x={t.cx} y={t.cy - 4} textAnchor="middle" fontSize="11" fill={t.c} fontWeight="700">{t.label1}</text>
          <text x={t.cx} y={t.cy + 12} textAnchor="middle" fontSize="11" fill={t.c} fontWeight="700">{t.label2}</text>
        </g>
      ))}
      <text x="350" y="285" textAnchor="middle" fontSize="11" fill="#64748b">Ferramentas conectadas via FMI Standard</text>
    </svg>
  );
}

function TimeSeriesBarSVG() {
  const bars = [
    { label: 'InfluxDB', value: 92, c: '#f97316' },
    { label: 'TimescaleDB', value: 74, c: '#f97316' },
    { label1: 'Azure Data', label2: 'Explorer', value: 85, c: '#f97316' },
    { label: 'QuestDB', value: 97, c: '#f97316' },
  ];
  const maxH = 140;
  return (
    <svg viewBox="0 0 600 240" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="600" height="240" fill="var(--bg-secondary)" rx="10" />
      <text x="300" y="22" textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="600">Write Throughput Relativo (normalizado, 100 = melhor)</text>
      {bars.map((b, i) => {
        const x = 60 + i * 130;
        const barH = (b.value / 100) * maxH;
        const y = 180 - barH;
        return (
          <g key={i}>
            <rect x={x} y={y} width={80} height={barH} rx="5" fill={b.c} fillOpacity="0.8" />
            <text x={x + 40} y={y - 6} textAnchor="middle" fontSize="11" fill={b.c} fontWeight="700">{b.value}</text>
            {b.label ? (
              <text x={x + 40} y={195} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">{b.label}</text>
            ) : (
              <g>
                <text x={x + 40} y={195} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">{b.label1}</text>
                <text x={x + 40} y={208} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">{b.label2}</text>
              </g>
            )}
          </g>
        );
      })}
      <line x1="40" y1="180" x2="580" y2="180" stroke="#94a3b8" strokeWidth="1" />
    </svg>
  );
}

function VizStackSVG() {
  const layers = [
    { label: '3D Scene Layer (Unity / Unreal / Omniverse)', c: '#f97316', y: 40 },
    { label: 'Sensor Overlay Layer (real-time data streams)', c: '#f97316', y: 110 },
    { label: 'KPI Panel Layer (Grafana / Power BI)', c: '#f97316', y: 180 },
  ];
  return (
    <svg viewBox="0 0 680 270" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="680" height="270" fill="var(--bg-secondary)" rx="10" />
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={40 + i * 20} y={l.y} width={580 - i * 40} height={58} rx="8" fill={l.c} fillOpacity="0.13" stroke={l.c} strokeWidth="2" />
          <text x="340" y={l.y + 33} textAnchor="middle" fontSize="12" fill={l.c} fontWeight="700">{l.label}</text>
        </g>
      ))}
      <text x="340" y="258" textAnchor="middle" fontSize="11" fill="#64748b">Stack de Visualização em Camadas</text>
    </svg>
  );
}

function MLOpsSVG() {
  const steps = [
    { s: 'Ingestion', c: '#f97316' },
    { s: 'Feature Eng.', c: '#f97316' },
    { s: 'Training', c: '#f97316' },
    { s: 'Deploy', c: '#f97316' },
    { s: 'Monitor', c: '#ea580c' },
    { s: 'Drift Detect', c: '#ea580c' },
    { s: 'Retrain', c: '#f59e0b' },
  ];
  return (
    <svg viewBox="0 0 720 200" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="720" height="200" fill="var(--bg-secondary)" rx="10" />
      {steps.map((st, i) => {
        const x = 15 + i * 100;
        return (
          <g key={i}>
            <rect x={x} y={55} width={84} height={55} rx="7" fill={st.c} fillOpacity="0.13" stroke={st.c} strokeWidth="2" />
            <text x={x + 42} y={87} textAnchor="middle" fontSize="10" fill={st.c} fontWeight="700">{st.s}</text>
            {i < steps.length - 1 && (
              <g>
                <line x1={x + 85} y1={82} x2={x + 97} y2={82} stroke="#94a3b8" strokeWidth="1.5" />
                <polygon points={`${x + 95},77 ${x + 105},82 ${x + 95},87`} fill="#94a3b8" />
              </g>
            )}
          </g>
        );
      })}
      <path d="M 715 82 Q 715 160 360 160 Q 8 160 8 82" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,4" />
      <polygon points="10,76 4,86 16,86" fill="#f97316" />
      <text x="360" y="178" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="600">Ciclo de melhoria continua</text>
    </svg>
  );
}

function StandardsVennSVG() {
  // Circles with real overlap: distance between top two = 160 < 2*r=240
  return (
    <svg viewBox="0 0 700 360" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="360" fill="var(--bg-secondary)" rx="10" />
      {/* Left: W3C WoT */}
      <circle cx="255" cy="148" r="118" fill="#f97316" fillOpacity="0.08" stroke="#f97316" strokeWidth="2" />
      {/* Right: IEC 63278 AAS */}
      <circle cx="445" cy="148" r="118" fill="#fb923c" fillOpacity="0.08" stroke="#fb923c" strokeWidth="2" />
      {/* Bottom: ISO 23247 */}
      <circle cx="350" cy="248" r="108" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="2" />

      {/* Labels in unique regions (top-left, top-right, bottom) */}
      <text x="200" y="108" textAnchor="middle" fontSize="13" fill="#f97316" fontWeight="700">W3C WoT</text>
      <text x="200" y="126" textAnchor="middle" fontSize="10" fill="#f97316">Thing Description</text>
      <text x="200" y="141" textAnchor="middle" fontSize="10" fill="#f97316">JSON-LD</text>

      <text x="470" y="108" textAnchor="middle" fontSize="13" fill="#fb923c" fontWeight="700">IEC 63278 AAS</text>
      <text x="470" y="126" textAnchor="middle" fontSize="10" fill="#fb923c">Asset Admin Shell</text>
      <text x="470" y="141" textAnchor="middle" fontSize="10" fill="#fb923c">IDTA v3</text>

      <text x="350" y="308" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="700">ISO 23247</text>
      <text x="350" y="324" textAnchor="middle" fontSize="10" fill="#f59e0b">Manufacturing DT</text>

      {/* Intersection labels */}
      <text x="350" y="163" textAnchor="middle" fontSize="11" fill="var(--text-primary)" fontWeight="700">DTDL</text>
      <text x="350" y="173" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">OMG DMIM</text>
      <text x="298" y="215" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Semântica</text>
      <text x="402" y="215" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Asset Models</text>
    </svg>
  );
}

function DecisionTreeSVG() {
  return (
    <svg viewBox="0 0 700 380" width="100%" style={{ display: 'block', margin: '1.5rem 0' }}>
      <rect width="700" height="380" fill="var(--bg-secondary)" rx="10" />
      <rect x="260" y="20" width="180" height="44" rx="8" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
      <text x="350" y="46" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">Selecionar Plataforma DT</text>
      <line x1="350" y1="64" x2="350" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="215" y="90" width="270" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="350" y="115" textAnchor="middle" fontSize="12" fill={color} fontWeight="600">Cloud provider ja definido?</text>
      <line x1="270" y1="130" x2="160" y2="170" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="440" y1="130" x2="550" y2="170" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="165" y="158" fontSize="10" fill="#f97316" fontWeight="700">SIM</text>
      <text x="527" y="158" fontSize="10" fill="#ea580c" fontWeight="700">NAO</text>
      <rect x="60" y="170" width="200" height="40" rx="8" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="1.5" />
      <text x="160" y="195" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Azure ou AWS?</text>
      <line x1="90" y1="210" x2="60" y2="250" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="220" y1="210" x2="240" y2="250" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="20" y="250" width="120" height="40" rx="6" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="1.5" />
      <text x="80" y="275" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Azure DT</text>
      <rect x="165" y="250" width="120" height="40" rx="6" fill="rgba(234,88,12,0.12)" stroke="#ea580c" strokeWidth="1.5" />
      <text x="225" y="275" textAnchor="middle" fontSize="11" fill="#ea580c" fontWeight="700">AWS TwinMaker</text>
      <rect x="460" y="170" width="200" height="40" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="560" y="188" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">Foco industrial OT?</text>
      <text x="560" y="204" textAnchor="middle" fontSize="10" fill="#f59e0b">(PLM, SCADA, MES)</text>
      <line x1="490" y1="210" x2="460" y2="250" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="600" y1="210" x2="620" y2="250" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="443" y="242" fontSize="10" fill="#f97316" fontWeight="700">SIM</text>
      <text x="625" y="242" fontSize="10" fill="#ea580c" fontWeight="700">NAO</text>
      <rect x="380" y="250" width="130" height="40" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5" />
      <text x="445" y="275" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">Siemens / PTC</text>
      <rect x="560" y="250" width="120" height="40" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="620" y="268" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Budget</text>
      <text x="620" y="283" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">limitado?</text>
      <line x1="580" y1="290" x2="555" y2="330" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="640" y1="290" x2="655" y2="330" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="490" y="330" width="120" height="36" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="550" y="352" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">Eclipse Ditto</text>
      <rect x="626" y="330" width="60" height="36" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="656" y="352" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="700">NVIDIA</text>
    </svg>
  );
}

export default function DT5() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>
      <div style={S.tag}>Module 05</div>
      <h1 style={S.h1}>Plataformas &amp; Ferramentas</h1>
      <p style={S.lead}>
        O ecossistema de Digital Twins evoluiu de soluções monolíticas proprietárias para um conjunto diversificado de plataformas cloud, ferramentas de simulação, bases de dados de séries temporais e padrões abertos. Neste módulo mapeamos o landscape completo, comparamos as principais plataformas e fornecemos guias práticos de implementação.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Landscape de Plataformas</h2>
        <p style={S.p}>
          As plataformas de Digital Twins posicionam-se num quadrante definido por dois eixos: a origem tecnológica (OT industrial versus IT cloud-native) e o modelo de licenciamento (open source versus proprietário). Compreender este mapa é o primeiro passo para uma escolha informada.
        </p>
        <QuadrantSVG />
        <h3 style={S.h3}>Critérios de Seleção</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Peso</th>
              <th style={S.th}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Integração com infra existente', 'Alto', 'Compatibilidade com protocolos OPC UA, MQTT, REST, sistemas SCADA/MES'],
              ['Escalabilidade', 'Alto', 'Capacidade de gerir milhões de twins simultaneamente'],
              ['Modelação semântica', 'Médio', 'Suporte a DTDL, AAS, WoT Thing Description'],
              ['Custo TCO', 'Alto', 'Licenças, infraestrutura, formação, suporte'],
              ['Ecossistema de parceiros', 'Médio', 'ISVs, SIs e marketplace de soluções verticais'],
              ['Visualização 3D', 'Baixo-Médio', 'Capacidade de renderizar modelos CAD, BIM, pointclouds'],
              ['MLOps integrado', 'Médio', 'Pipelines de ML para modelos preditivos nativos na plataforma'],
              ['Segurança e compliance', 'Alto', 'IEC 62443, GDPR, certificações ISO 27001'],
            ].map(([c, p, d], i) => (
              <tr key={i}>
                <td style={S.td}>{c}</td>
                <td style={S.td}><span style={{ color: p === 'Alto' ? '#b91c1c' : p === 'Médio' ? '#ea580c' : '#f97316', fontWeight: 700 }}>{p}</span></td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Não existe uma plataforma universalmente superior. A decisão deve ser orientada pelos requisitos de negócio, stack tecnológico existente e competências internas da equipa.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Azure Digital Twins</h2>
        <p style={S.p}>
          O Azure Digital Twins (ADT) é o serviço PaaS da Microsoft para criação de grafos de twins baseados em modelos DTDL (Digital Twins Definition Language). Integra nativamente com o ecossistema Azure: IoT Hub, Event Grid, Azure Data Explorer e Power BI.
        </p>
        <AzureArchSVG />        
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Aspeto</th><th style={S.th}>Pontos Fortes</th><th style={S.th}>Limitações</th></tr>
          </thead>
          <tbody>
            {[
              ['Modelação', 'DTDL v3 expressivo, herança, componentes', 'Vendor lock-in no formato DTDL'],
              ['Escalabilidade', 'Milhões de twins, grafo até 10 M de relações', 'Latência de query aumenta com grafos complexos'],
              ['Integração', 'IoT Hub, Event Grid, ADX nativos', 'Integrações OT requerem bridges adicionais'],
              ['Custo', 'Pay-per-message e pay-per-query', 'Pode ser elevado em volumes altos de telemetria'],
              ['Visualização', 'Azure Digital Twins Explorer (beta)', '3D limitado — requer Unity ou Power BI'],
            ].map(([a, f, l], i) => (
              <tr key={i}><td style={S.td}>{a}</td><td style={S.td}>{f}</td><td style={S.td}>{l}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. AWS IoT TwinMaker</h2>
        <p style={S.p}>
          Lançado em 2021, o AWS IoT TwinMaker permite construir twins de edifícios, fábricas e equipamentos com um modelo de entidades e componentes. O Scene Composer integra modelos 3D com dados de sensores em tempo real, e o painel Grafana integrado acelera a operacionalização.
        </p>
        <AWSTwinMakerSVG />
        <h3 style={S.h3}>Caso de Uso: Smart Building</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Componente</th><th style={S.th}>Tecnologia AWS</th><th style={S.th}>Função</th></tr>
          </thead>
          <tbody>
            {[
              ['Sensores BMS', 'IoT SiteWise', 'Ingestão HVAC, iluminação, ocupação'],
              ['Modelos 3D BIM', 'S3 + Scene Composer', 'Visualização planta do edifício'],
              ['Séries temporais', 'Amazon Timestream', 'Histórico de consumo energético'],
              ['Dashboard ops', 'Grafana + TwinMaker plugin', 'Monitorização em tempo real'],
              ['Anomalias', 'SageMaker + Lookout', 'Deteção de padrões anómalos no HVAC'],
            ].map(([c, t, f], i) => (
              <tr key={i}><td style={S.td}>{c}</td><td style={S.td}>{t}</td><td style={S.td}>{f}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. NVIDIA Omniverse</h2>
        <p style={S.p}>
          A NVIDIA Omniverse é uma plataforma de colaboração e simulação 3D baseada no formato aberto USD (Universal Scene Description) da Pixar, extensível com MDL para materiais físicos. Destaca-se pela renderização fotorrealista com ray tracing em tempo real e simulação física com PhysX 5.
        </p>
        <OmniverseSVG />
        <div style={S.highlight}>
          <strong>USD — Universal Scene Description:</strong> formato hierárquico que representa cenas 3D complexas com referências, variantes e composição em camadas (layers). Cada aplicação pode contribuir com a sua layer sem destruir o trabalho das restantes — conceito de "non-destructive collaboration".
        </div>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Capacidade</th><th style={S.th}>Tecnologia</th><th style={S.th}>Aplicação Industrial</th></tr>
          </thead>
          <tbody>
            {[
              ['Renderização RT', 'RTX ray tracing, DLSS 3', 'Visualização de fábricas e produtos foto-realistas'],
              ['Simulação física', 'PhysX 5, Flex', 'Robótica, colisões, fluidos, tecidos'],
              ['IA generativa', 'Audio2Face, GET3D', 'Avatares e geração procedural de ativos 3D'],
              ['Robótica', 'Isaac Sim, Isaac Lab', 'Treino de políticas RL em ambiente virtual'],
              ['Fábrica digital', 'Omniverse Factory', 'Gémeo digital de linhas de produção completas'],
              ['Conectores', 'Revit, SolidWorks, Maya, Unreal', 'Importação direta de formatos CAD/BIM'],
            ].map(([c, t, a], i) => (
              <tr key={i}><td style={S.td}>{c}</td><td style={S.td}>{t}</td><td style={S.td}>{a}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          O Omniverse é a base do conceito de "Industrial Metaverse" da NVIDIA, onde múltiplos utilizadores e aplicações de IA colaboram num gémeo digital partilhado em tempo real.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Siemens MindSphere &amp; Xcelerator</h2>
        <p style={S.p}>
          A Siemens possui o portfólio industrial mais abrangente para Digital Twins, dividido entre o MindSphere (plataforma IIoT em cloud) e o Xcelerator (suite de software de engenharia que cobre PLM, CAE e automação).
        </p>
        <MindSphereSVG />
        <h3 style={S.h3}>Portfólio Xcelerator</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Produto</th><th style={S.th}>Domínio</th><th style={S.th}>Função no DT</th></tr>
          </thead>
          <tbody>
            {[
              ['NX CAD/CAE', 'Engenharia mecânica', 'Modelo 3D de referência (DT de produto)'],
              ['Teamcenter', 'PLM / PDM', 'Gestão do ciclo de vida do gémeo digital'],
              ['Simcenter Amesim', 'Simulação multi-física', 'Modelos de performance termodinâmica e fluida'],
              ['Simcenter STAR-CCM+', 'CFD', 'Simulação aerodinâmica e térmica'],
              ['SIMATIC WinCC', 'SCADA', 'DT operacional de processos de automação'],
              ['Opcenter APS', 'MES / APS', 'DT de planeamento e sequenciação de produção'],
            ].map(([p, d, f], i) => (
              <tr key={i}><td style={S.td}>{p}</td><td style={S.td}>{d}</td><td style={S.td}>{f}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Ponto forte diferenciador:</strong> A Siemens é a única fornecedora que conecta o DT de produto (NX + Teamcenter) com o DT de produção (SIMATIC) e o DT de desempenho (MindSphere) numa cadeia de valor contínua — do design à operação.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Eclipse Ditto (Open Source)</h2>
        <p style={S.p}>
          O Eclipse Ditto é um framework open source desenvolvido pela Bosch que implementa o padrão "Digital Twin as a Service" sobre protocolo HTTP, MQTT e WebSocket. Cada coisa (Thing) é representada por um objeto JSON com "features" que mapeiam propriedades do dispositivo físico.
        </p>
        <DittoArchSVG />
        <h3 style={S.h3}>Thing Model — Representação JSON</h3>
        <div style={S.code}>{`{
  "thingId": "org.fabrikam:motor-001",
  "policyId": "org.fabrikam:motor-policy",
  "attributes": {
    "localizacao": "Linha-A / Setor-3",
    "fabricante": "ABB",
    "modelo": "M3BP-315"
  },
  "features": {
    "statusOperacional": {
      "properties": {
        "rpm": 1450,
        "temperatura": 72.3,
        "vibracao": 0.42,
        "estadoMotor": "RUNNING"
      }
    },
    "manutencao": {
      "properties": {
        "ultimaManutencao": "2025-11-15",
        "horasOperacao": 14320,
        "proximaManutencao": "2026-05-15"
      }
    }
  }
}`}</div>
        <h3 style={S.h3}>Docker Compose — Deploy Local</h3>
        <div style={S.code}>{`version: '3.8'
services:
  mongodb:
    image: mongo:6
    environment:
      MONGO_INITDB_ROOT_USERNAME: ditto
      MONGO_INITDB_ROOT_PASSWORD: ditto

  ditto:
    image: eclipse/ditto:latest
    ports:
      - "8080:8080"
      - "8443:8443"
    environment:
      MONGO_DB_URI: "mongodb://ditto:ditto@mongodb:27017/ditto"
    depends_on:
      - mongodb

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - ditto
`}</div>
        <h3 style={S.h3}>Open Source vs. Comercial — Quando escolher?</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Situação</th><th style={S.th}>Recomendação</th><th style={S.th}>Justificação</th></tr>
          </thead>
          <tbody>
            {[
              ['Startup / POC com budget limitado', 'Eclipse Ditto', 'Zero licenças, comunidade ativa, deploy em K8s'],
              ['Enterprise com Azure como cloud principal', 'Azure Digital Twins', 'Integração nativa, SLA garantido, suporte Microsoft'],
              ['OT industrial pesado (automação Siemens)', 'Xcelerator + MindSphere', 'Conectores nativos SIMATIC, expertise vertical'],
              ['Visualização 3D fotorrealista', 'NVIDIA Omniverse', 'USD, RTX, física avançada sem alternativa equivalente'],
              ['Smart Building / Smart Campus AWS', 'AWS TwinMaker', 'Grafana nativo, Timestream, integração SiteWise'],
              ['Soberania de dados / on-prem obrigatório', 'Eclipse Ditto ou Bosch IoT Suite', 'Deploy on-prem, sem dependência de cloud pública'],
            ].map(([s, r, j], i) => (
              <tr key={i}><td style={S.td}>{s}</td><td style={S.td}><strong>{r}</strong></td><td style={S.td}>{j}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Ferramentas de Simulação</h2>
        <p style={S.p}>
          Os modelos de simulação constituem o "núcleo analítico" do Digital Twin. O padrão FMI (Functional Mock-up Interface) é o denominador comum que permite composição de modelos de diferentes ferramentas — um motor de ANSYS pode ser acoplado a um controlador Modelica e a um modelo CFD OpenFOAM na mesma simulação.
        </p>
        <SimToolsSVG />
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Ferramenta</th><th style={S.th}>Domínio</th><th style={S.th}>Licença</th><th style={S.th}>FMI</th><th style={S.th}>Caso de Uso DT</th></tr>
          </thead>
          <tbody>
            {[
              ['ANSYS Twin Builder', 'Multi-física', 'Comercial', 'Exporta FMU', 'ROM de sistemas mecânicos/elétricos'],
              ['Modelica / Dymola', 'Sistemas dinâmicos', 'Comercial/Open', 'Exporta FMU', 'Termodinâmica, veículos, energia'],
              ['OpenModelica', 'Sistemas dinâmicos', 'Open Source (OSMC)', 'Exporta FMU', 'Alternativa open source ao Dymola'],
              ['OpenFOAM', 'CFD', 'Open Source (GPL)', 'Via co-simulação', 'Escoamentos, térmica, aerodinâmica'],
              ['MATLAB / Simulink', 'Control / Signals', 'Comercial', 'Exporta FMU', 'Controladores, signal processing'],
              ['Simcenter Amesim', 'Multi-física Siemens', 'Comercial', 'Exporta FMU', 'Sistemas hidráulicos, propulsão'],
            ].map(([f, d, l, fmi, u], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{f}</strong></td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{l}</td>
                <td style={S.td}>{fmi}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          FMI 3.0 (2022) introduziu suporte a variáveis de clock, co-simulação com step-size control adaptativo e binary variables — essencial para acoplamento de modelos de controlo com modelos de física de alta frequência.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Bases de Dados de Séries Temporais</h2>
        <p style={S.p}>
          A escolha da base de dados de séries temporais é crítica para o desempenho do Digital Twin operacional. As workloads de DT são caracterizadas por ingestão massiva de alta frequência, queries de agregação temporal e downsampling para armazenamento eficiente.
        </p>
        <TimeSeriesBarSVG />
        <h3 style={S.h3}>Políticas de Downsampling e Retenção</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Camada</th><th style={S.th}>Resolução</th><th style={S.th}>Retenção</th><th style={S.th}>Uso</th></tr>
          </thead>
          <tbody>
            {[
              ['Hot (raw)', '1 seg ou menos', '72 horas', 'Alertas em tempo real, dashboards live'],
              ['Warm (1 min)', '1 minuto', '30 dias', 'Análise de turno, tendências de curto prazo'],
              ['Cool (1 hora)', '1 hora', '1 ano', 'KPIs mensais, relatórios de manutenção'],
              ['Cold (1 dia)', '1 dia', '10 anos', 'Auditoria, machine learning histórico, regulação'],
            ].map(([c, r, ret, u], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}>{r}</td>
                <td style={S.td}>{ret}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>QuestDB</strong> destaca-se em benchmarks de ingestão (mais de 4 milhões de pontos/seg por instância) e suporta SQL nativo com extensões de séries temporais como SAMPLE BY e LATEST ON — produtivo para equipas com skills SQL.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Visualização e Dashboards</h2>
        <p style={S.p}>
          A visualização do Digital Twin serve audiências distintas: operadores de piso que precisam de dashboards operacionais em tempo real, gestores que consomem KPIs de negócio, engenheiros que analisam gémeos 3D e técnicos de campo que usam AR/VR para manutenção.
        </p>
        <VizStackSVG />
        <h3 style={S.h3}>Ferramentas por Audiência</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Ferramenta</th><th style={S.th}>Audiência</th><th style={S.th}>Pontos Fortes</th><th style={S.th}>Integração DT</th></tr>
          </thead>
          <tbody>
            {[
              ['Grafana', 'Operadores / SRE', 'Alertas, multi-datasource, dashboards live', 'InfluxDB, Prometheus, TwinMaker plugin'],
              ['Power BI', 'Gestão / Business', 'Relatórios, DAX, integração Microsoft 365', 'Azure DT connector, Dataflows'],
              ['Unity Reflect', 'Engenheiros / BIM', 'Modelos BIM interativos em tempo real', 'REST APIs, IoT streams'],
              ['Unreal Engine', 'Visualização premium', 'Renderização AAA, Lumen GI', 'USD import, WebSocket data'],
              ['Bentley iTwin Viewer', 'Infraestrutura', 'iModels, GIS, análise estrutural', 'iTwin Platform APIs'],
              ['PTC Vuforia', 'Técnicos campo', 'AR sobreposição em equipamento real', 'ThingWorx, REST'],
            ].map(([f, a, p, intg], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{f}</strong></td>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{intg}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          A tendência é usar WebGL e padrões web (Three.js, Babylon.js, CesiumJS) para visualização 3D acessível no browser sem plugins — democratizando o acesso ao gémeo digital.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. MLOps para Digital Twins</h2>
        <p style={S.p}>
          O Digital Twin operacional é inseparável de modelos de Machine Learning — desde manutenção preditiva a otimização de processos. O MLOps garante que estes modelos são treinados, versionados, monitorizados e retreinados de forma sistemática ao longo do ciclo de vida do twin.
        </p>
        <MLOpsSVG />
        <h3 style={S.h3}>Deteção de Drift e Retreino</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Tipo de Drift</th><th style={S.th}>Causa no DT</th><th style={S.th}>Método de Deteção</th><th style={S.th}>Ação</th></tr>
          </thead>
          <tbody>
            {[
              ['Data drift', 'Mudança nas condições operacionais do equipamento', 'PSI, Kolmogorov-Smirnov test', 'Alerta + retreino agendado'],
              ['Concept drift', 'Desgaste altera relação entre features e target', 'ADWIN, Page-Hinkley', 'Retreino imediato com dados recentes'],
              ['Model drift', 'Acumulação de erro na integração numérica do modelo físico', 'Erro de previsão vs. medição real', 'Atualização de parâmetros (Kalman Filter)'],
              ['Infrastructure drift', 'Sensores com deriva, falha de calibração', 'Outlier detection na ingestão', 'Alerta de manutenção preventiva do sensor'],
            ].map(([t, c, m, a], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{t}</strong></td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{m}</td>
                <td style={S.td}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Interoperabilidade e Standards</h2>
        <p style={S.p}>
          A interoperabilidade é o maior desafio do ecossistema de Digital Twins. Múltiplos consórcios e organismos de normalização trabalham em paralelo para definir linguagens de modelação, formatos de troca e arquiteturas de referência — com zonas de sobreposição e complementaridade.
        </p>
        <StandardsVennSVG />
        <h3 style={S.h3}>Principais Standards</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Standard</th><th style={S.th}>Organismo</th><th style={S.th}>Foco</th><th style={S.th}>Maturidade</th></tr>
          </thead>
          <tbody>
            {[
              ['DTDL v3', 'Microsoft / open spec', 'Linguagem de modelação para Azure DT', 'Produção'],
              ['W3C WoT TD 1.1', 'W3C', 'Thing Description baseada em JSON-LD', 'Recomendação W3C (2023)'],
              ['IEC 63278 AAS', 'IEC / IDTA', 'Asset Administration Shell para indústria 4.0', 'Publicado (2023)'],
              ['ISO 23247', 'ISO TC 184', 'Framework DT para manufacturing', 'Publicado (2021)'],
              ['OMG DMIM', 'OMG', 'Digital Model Integration Metamodel', 'Draft (2024)'],
              ['Gaia-X', 'Gaia-X AISBL', 'Data spaces para soberania de dados europeia', 'Adoção crescente'],
              ['Eclipse DT Working Group', 'Eclipse Foundation', 'Open source DT interoperability stack', 'Ativo'],
            ].map(([s, o, f, m], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{s}</strong></td>
                <td style={S.td}>{o}</td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{m}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Asset Administration Shell (AAS) v3</strong> da IDTA (Industrial Digital Twin Association) é o standard mais adotado na indústria europeia para representação de ativos industriais. Define submodelos standarizados (Nameplate, TechnicalData, Documentation, PCF) que permitem interoperabilidade entre fornecedores sem integração custom.
        </div>
        <div style={S.note}>
          A convergência entre AAS (foco industrial OT) e W3C WoT (foco IoT/IT) está a ser trabalhada pelo Eclipse Foundation e pelo IEC TC 65, apontando para uma futura camada de interoperabilidade unificada.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          A decisão de plataforma combina múltiplos fatores: stack tecnológico existente, domínio industrial, maturidade da equipa, requisitos de visualização 3D e restrições de budget. A árvore de decisão seguinte guia a escolha inicial.
        </p>
        <DecisionTreeSVG />
        <h3 style={S.h3}>Comparação: 8 Plataformas x 6 Critérios</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Plataforma</th>
                <th style={S.th}>OT / IT</th>
                <th style={S.th}>3D Viz</th>
                <th style={S.th}>Open Src</th>
                <th style={S.th}>ML nativo</th>
                <th style={S.th}>FMI/Sim</th>
                <th style={S.th}>On-Prem</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Azure Digital Twins', 'IT', '✗', '✗', '✓', '✗', '✗'],
                ['AWS IoT TwinMaker', 'IT', '✓', '✗', '✓', '✗', '✗'],
                ['NVIDIA Omniverse', 'IT/OT', '✓✓', 'Parcial', '✓', '✓', '✓'],
                ['Siemens MindSphere', 'OT', '✓', '✗', '✗', '✓', '✗'],
                ['PTC ThingWorx', 'OT', '✓', '✗', '✗', '✗', '✓'],
                ['Eclipse Ditto', 'IT/OT', '✗', '✓✓', '✗', '✗', '✓'],
                ['Bentley iTwin', 'OT/Infra', '✓✓', '✗', '✗', '✗', 'Parcial'],
                ['ANSYS Twin Builder', 'OT', '✓', '✗', '✗', '✓✓', '✓'],
              ].map(([p, ot, viz, os, ml, fmi, op], i) => (
                <tr key={i}>
                  <td style={S.td}><strong>{p}</strong></td>
                  <td style={S.td}>{ot}</td>
                  <td style={{ ...S.td, color: viz.includes('✓') ? '#f97316' : '#b91c1c' }}>{viz}</td>
                  <td style={{ ...S.td, color: os.includes('✓') ? '#f97316' : '#b91c1c' }}>{os}</td>
                  <td style={{ ...S.td, color: ml.includes('✓') ? '#f97316' : '#b91c1c' }}>{ml}</td>
                  <td style={{ ...S.td, color: fmi.includes('✓') ? '#f97316' : '#b91c1c' }}>{fmi}</td>
                  <td style={{ ...S.td, color: op.includes('✓') ? '#f97316' : '#b91c1c' }}>{op}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={S.h3}>Tiers de Custo</h3>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Tier</th><th style={S.th}>Plataformas</th><th style={S.th}>Custo Estimado/Mês</th><th style={S.th}>Perfil</th></tr>
          </thead>
          <tbody>
            {[
              ['Open Source', 'Eclipse Ditto, OpenModelica, OpenFOAM', '0 (infra própria)', 'Startups, academia, POCs, orgs com ops internos'],
              ['Cloud Pay-per-use', 'Azure DT, AWS TwinMaker', '50 a 5.000 USD', 'PMEs e enterprise com cloud strategy definida'],
              ['Enterprise Suite', 'Siemens Xcelerator, PTC ThingWorx', '10.000 a 100.000 USD', 'Grandes industriais, OEMs, contratos plurianuais'],
              ['Premium Simulation', 'ANSYS, Dymola, MATLAB', '20.000 a 200.000 USD', 'Engenharia de produto, R&D, aeroespaço/defesa'],
            ].map(([t, p, c, per], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{t}</strong></td>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{per}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
        <div style={S.highlight}>
          <strong>Takeaway final:</strong> A maturidade do ecossistema de Digital Twins em 2025 permite implementações robustas com stacks 100% open source (Eclipse Ditto + InfluxDB + Grafana + OpenModelica). As plataformas cloud adicionam managed services e SLAs, enquanto as suites industriais acrescentam integração vertical profunda com PLM e automação. A escolha deve ser guiada pelo problema a resolver, não pela tecnologia.
        </div>
      </section>
    </div>
  );
}
