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

// ── SVG 1: Industry 4.0 Pillars ──────────────────────────────────────────────
function I40PillarsSVG() {
  const pillars = [
    { label: 'IoT', angle: 0 },
    { label: 'Cloud', angle: 45 },
    { label: 'AI', angle: 90 },
    { label: 'Robotics', angle: 135 },
    { label: 'Big Data', angle: 180 },
    { label: 'AR/VR', angle: 225 },
    { label: 'Cyber', angle: 270 },
    { label: 'Additive', angle: 315 },
  ];
  const cx = 210, cy = 148, r = 95;
  return (
    <svg viewBox="0 0 560 360" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '0 auto' }}>
      {/* center circle */}
      <circle cx={cx} cy={cy} r={38} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={2} />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Digital</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Twin</text>
      <text x={cx} y={cy + 22} textAnchor="middle" fontSize={9} fill={color}>CORE</text>
      {pillars.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const nx = cx + r * Math.cos(rad);
        const ny = cy + r * Math.sin(rad);
        const lx = cx + (r + 36) * Math.cos(rad);
        const ly = cy + (r + 36) * Math.sin(rad);
        return (
          <g key={p.label}>
            <line x1={cx + 38 * Math.cos(rad)} y1={cy + 38 * Math.sin(rad)} x2={nx - 16 * Math.cos(rad)} y2={ny - 16 * Math.sin(rad)} stroke={color} strokeWidth={1} strokeDasharray="3,2" />
            <circle cx={nx} cy={ny} r={16} fill={color} fillOpacity={0.9} />
            <text x={lx} y={ly + 4} textAnchor="middle" fontSize={9} fontWeight={600} fill="var(--text-primary)">{p.label}</text>
          </g>
        );
      })}
      {/* ROI label — positioned bottom-right to avoid node overlap */}
      <rect x={390} y={100} width={145} height={52} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={462} y={118} textAnchor="middle" fontSize={9} fontWeight={700} fill={color}>McKinsey ROI</text>
      <text x={462} y={133} textAnchor="middle" fontSize={13} fontWeight={800} fill={color}>10-20%</text>
      <text x={462} y={147} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">productivity gain</text>
      {/* maturity arrow */}
      <text x={20} y={305} fontSize={8} fill="var(--text-secondary)">Reactive</text>
      <text x={190} y={305} fontSize={8} fill="var(--text-secondary)">Predictive</text>
      <text x={360} y={305} fontSize={8} fill="var(--text-secondary)">Prescriptive</text>
      <line x1={20} y1={315} x2={530} y2={315} stroke={color} strokeWidth={2} />
      <polygon points="530,311 540,315 530,319" fill={color} />
      <circle cx={80} cy={315} r={4} fill="#f97316" />
      <circle cx={260} cy={315} r={4} fill="#f59e0b" />
      <circle cx={440} cy={315} r={4} fill="#f97316" />
      <text x={280} y={338} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Maturidade DT em Manufatura</text>
    </svg>
  );
}

// ── SVG 2: Degradation Curve ──────────────────────────────────────────────────
function DegradationCurveSVG() {
  const pts = [
    [20, 160], [60, 155], [100, 148], [140, 138], [170, 120], [195, 95], [215, 65], [230, 40],
  ];
  const pathD = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  return (
    <svg viewBox="0 0 400 205" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
      {/* axes */}
      <line x1={20} y1={10} x2={20} y2={175} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={20} y1={175} x2={390} y2={175} stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={10} y={95} fontSize={8} fill="var(--text-secondary)" textAnchor="middle" dominantBaseline="middle" style={{ writingMode: 'tb' }}>Degradação</text>
      <text x={205} y={200} fontSize={8} fill="var(--text-secondary)" textAnchor="middle">Tempo</text>
      {/* zones */}
      <rect x={20} y={10} width={150} height={165} fill="#f97316" fillOpacity={0.06} />
      <rect x={170} y={10} width={60} height={165} fill="#f59e0b" fillOpacity={0.1} />
      <rect x={230} y={10} width={160} height={165} fill="#f97316" fillOpacity={0.07} />
      <text x={95} y={185} textAnchor="middle" fontSize={8} fill="#f97316">Normal</text>
      <text x={200} y={185} textAnchor="middle" fontSize={8} fill="#f59e0b">Warning</text>
      <text x={310} y={185} textAnchor="middle" fontSize={8} fill="#f97316">Falha</text>
      {/* degradation line */}
      <path d={pathD} fill="none" stroke="#f97316" strokeWidth={2.5} />
      {/* DT intervention */}
      <line x1={175} y1={10} x2={175} y2={175} stroke={color} strokeWidth={1.5} strokeDasharray="4,2" />
      <circle cx={175} cy={118} r={5} fill={color} />
      <rect x={178} y={130} width={90} height={28} rx={4} fill={color} fillOpacity={0.9} />
      <text x={223} y={143} textAnchor="middle" fontSize={8} fill="#fff" fontWeight={700}>DT Intervem Aqui</text>
      <text x={223} y={153} textAnchor="middle" fontSize={7} fill="#fff">manutenção planeada</text>
      {/* RUL bracket */}
      <line x1={175} y1={30} x2={230} y2={30} stroke={color} strokeWidth={1} />
      <line x1={175} y1={25} x2={175} y2={35} stroke={color} strokeWidth={1} />
      <line x1={230} y1={25} x2={230} y2={35} stroke={color} strokeWidth={1} />
      <text x={202} y={24} textAnchor="middle" fontSize={8} fontWeight={700} fill={color}>RUL</text>
      {/* sensors */}
      <text x={260} y={60} fontSize={8} fill="var(--text-secondary)">Sensores:</text>
      <text x={260} y={72} fontSize={8} fill="var(--text-secondary)">• Vibração</text>
      <text x={260} y={83} fontSize={8} fill="var(--text-secondary)">• Temperatura</text>
      <text x={260} y={94} fontSize={8} fill="var(--text-secondary)">• Acústico</text>
    </svg>
  );
}

// ── SVG 3: Quality Production Line ──────────────────────────────────────────
function QualityLineSVG() {
  return (
    <svg viewBox="0 0 500 210" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}>
      {/* DT cloud — top, clear of DT nodes */}
      <ellipse cx={250} cy={16} rx={80} ry={12} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={1} strokeDasharray="3,2" />
      <text x={250} y={20} textAnchor="middle" fontSize={8} fontWeight={700} fill={color}>Digital Twin de Qualidade</text>
      {/* DT sensors */}
      {[62, 162, 262, 362].map((x) => (
        <g key={x}>
          <circle cx={x} cy={42} r={9} fill={color} />
          <text x={x} y={46} textAnchor="middle" fontSize={7} fill="#fff">DT</text>
          <line x1={x} y1={28} x2={x} y2={42} stroke={color} strokeWidth={1} strokeDasharray="2,2" />
          <line x1={x} y1={51} x2={x} y2={80} stroke={color} strokeWidth={1} strokeDasharray="2,2" />
        </g>
      ))}
      {/* machines */}
      {[40, 140, 240, 340, 430].map((x, i) => (
        <g key={i}>
          <rect x={x} y={80} width={44} height={34} rx={4} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={1.5} />
          <text x={x + 22} y={100} textAnchor="middle" fontSize={8} fill={color} fontWeight={600}>{['Corte', 'Maquina', 'Montagem', 'Pintura', 'Final'][i]}</text>
        </g>
      ))}
      {/* conveyor belt */}
      <rect x={10} y={112} width={480} height={16} rx={4} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      {/* defect icon — on conveyor between Pintura and Final */}
      <circle cx={420} cy={120} r={6} fill="#f97316" fillOpacity={0.9} />
      <text x={420} y={108} textAnchor="middle" fontSize={7} fontWeight={700} fill="#f97316">⚠ Defeito</text>
      {/* SPC labels */}
      <text x={10} y={150} fontSize={8} fill="var(--text-secondary)">X-bar chart: media do processo  |  R-chart: amplitude  |  Cp/Cpk: capacidade do processo</text>
      <text x={10} y={164} fontSize={8} fill="var(--text-secondary)">Yield prediction via DT: 98.2% vs 94.1% baseline</text>
      <text x={10} y={180} fontSize={8} fill="var(--text-secondary)">Computer Vision + DT: identificacao de defeitos em tempo real com tolerancia de 0.01mm</text>
    </svg>
  );
}

// ── SVG 4: Process Optimization ───────────────────────────────────────────────
function ProcessOptSVG() {
  return (
    <svg viewBox="0 0 460 220" style={{ width: '100%', maxWidth: 580, display: 'block', margin: '0 auto' }}>
      {/* input params */}
      <rect x={10} y={20} width={100} height={155} rx={6} fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth={1} />
      <text x={60} y={38} textAnchor="middle" fontSize={9} fontWeight={700} fill="var(--text-secondary)">PARAMETROS</text>
      {[['Velocidade', '1200 rpm'], ['Temperatura', '185 degC'], ['Pressao', '42 bar'], ['Feed Rate', '0.8 mm/r']].map(([k, v], i) => (
        <g key={k}>
          <text x={60} y={60 + i * 30} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">{k}</text>
          <rect x={18} y={65 + i * 30} width={84} height={14} rx={3} fill={color} fillOpacity={0.12} />
          <text x={60} y={75 + i * 30} textAnchor="middle" fontSize={8} fontWeight={700} fill={color}>{v}</text>
        </g>
      ))}
      {/* arrow to DT */}
      <polygon points="128,98 115,93 115,103" fill={color} />
      <line x1={110} y1={98} x2={127} y2={98} stroke={color} strokeWidth={2} />
      {/* DT box */}
      <rect x={130} y={55} width={120} height={86} rx={8} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={2} />
      <text x={190} y={80} textAnchor="middle" fontSize={10} fontWeight={800} fill={color}>Digital Twin</text>
      <text x={190} y={95} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Surrogate Model</text>
      <text x={190} y={108} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">(DoE + ML)</text>
      <text x={190} y={124} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Simulacao continua</text>
      {/* arrow to output */}
      <polygon points="268,98 255,93 255,103" fill="#f97316" />
      <line x1={250} y1={98} x2={267} y2={98} stroke="#f97316" strokeWidth={2} />
      {/* optimal setpoints */}
      <rect x={270} y={20} width={108} height={155} rx={6} fill="var(--bg-secondary)" stroke="#f97316" strokeWidth={1.5} />
      <text x={324} y={38} textAnchor="middle" fontSize={9} fontWeight={700} fill="#f97316">OTIMIZADO</text>
      {[['Velocidade', '1380 rpm'], ['Temperatura', '178 degC'], ['Pressao', '38 bar'], ['Feed Rate', '0.95 mm/r']].map(([k, v], i) => (
        <g key={k}>
          <text x={324} y={60 + i * 30} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">{k}</text>
          <rect x={278} y={65 + i * 30} width={92} height={14} rx={3} fill="#f97316" fillOpacity={0.15} />
          <text x={324} y={75 + i * 30} textAnchor="middle" fontSize={8} fontWeight={700} fill="#f97316">{v}</text>
        </g>
      ))}
      {/* energy gain */}
      <rect x={385} y={55} width={70} height={86} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={420} y={78} textAnchor="middle" fontSize={8} fill={color} fontWeight={700}>Energia</text>
      <text x={420} y={93} textAnchor="middle" fontSize={14} fontWeight={800} fill="#f97316">-18%</text>
      <text x={420} y={108} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">poupanca</text>
      <text x={420} y={122} textAnchor="middle" fontSize={8} fill={color} fontWeight={700}>Throughput</text>
      <text x={420} y={136} textAnchor="middle" fontSize={12} fontWeight={800} fill="#f97316">+14%</text>
      {/* bottom labels */}
      <text x={190} y={210} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Design of Experiments (DoE) com surrogate model para espaco de parametros de alta dimensao</text>
    </svg>
  );
}

// ── SVG 5: OEE Gauges ────────────────────────────────────────────────────────
function OEEGaugeSVG() {
  function Arc({ cx, cy, r, pct, clr }) {
    const angle = pct * Math.PI;
    const ex = cx + r * Math.cos(Math.PI - angle);
    const ey = cy - r * Math.sin(Math.PI - angle);
    const large = pct > 0.5 ? 1 : 0;
    return (
      <g>
        <path d={`M${cx - r},${cy} A${r},${r} 0 0,1 ${cx + r},${cy}`} fill="none" stroke="var(--text-secondary)" strokeWidth={10} />
        <path d={`M${cx - r},${cy} A${r},${r} 0 ${large},1 ${ex},${ey}`} fill="none" stroke={clr} strokeWidth={10} strokeLinecap="round" />
      </g>
    );
  }
  return (
    <svg viewBox="0 0 420 160" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '0 auto' }}>
      {/* OEE formula */}
      <text x={210} y={18} textAnchor="middle" fontSize={10} fontWeight={700} fill={color}>OEE = Disponibilidade x Performance x Qualidade</text>
      {/* gauge: Disponibilidade */}
      <Arc cx={70} cy={100} r={48} pct={0.88} clr="#f97316" />
      <text x={70} y={95} textAnchor="middle" fontSize={16} fontWeight={800} fill="#f97316">88%</text>
      <text x={70} y={110} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Disponib.</text>
      {/* gauge: Performance */}
      <Arc cx={210} cy={100} r={48} pct={0.92} clr={color} />
      <text x={210} y={95} textAnchor="middle" fontSize={16} fontWeight={800} fill={color}>92%</text>
      <text x={210} y={110} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Performance</text>
      {/* gauge: Quality */}
      <Arc cx={350} cy={100} r={48} pct={0.97} clr="#f59e0b" />
      <text x={350} y={95} textAnchor="middle" fontSize={16} fontWeight={800} fill="#f59e0b">97%</text>
      <text x={350} y={110} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Qualidade</text>
      {/* OEE result */}
      <text x={210} y={148} textAnchor="middle" fontSize={10} fill="var(--text-primary)">
        OEE = 0.88 x 0.92 x 0.97 = <tspan fontWeight={800} fill={color}>78.6%</tspan> (meta world-class: 85%+)
      </text>
    </svg>
  );
}

// ── SVG 6: PLM Lifecycle ─────────────────────────────────────────────────────
function PLMLifecycleSVG() {
  const phases = ['Conceito', 'Design', 'Manufatura', 'Servico', 'EOL'];
  const colors = ['#f97316', '#fb923c', '#f59e0b', '#ea580c', '#fbbf24'];
  return (
    <svg viewBox="0 0 500 160" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}>
      {phases.map((ph, i) => {
        const x = 10 + i * 97;
        return (
          <g key={ph}>
            <rect x={x} y={30} width={84} height={50} rx={6} fill={colors[i]} fillOpacity={0.18} stroke={colors[i]} strokeWidth={1.5} />
            <text x={x + 42} y={58} textAnchor="middle" fontSize={9} fontWeight={700} fill={colors[i]}>{ph}</text>
            {i < 4 && <polygon points={`${x + 96},55 ${x + 85},50 ${x + 85},60`} fill={colors[i]} />}
            {/* DT icon below */}
            <circle cx={x + 42} cy={105} r={10} fill={colors[i]} fillOpacity={0.8} />
            <text x={x + 42} y={108} textAnchor="middle" fontSize={7} fill="#fff" fontWeight={700}>DT</text>
            <line x1={x + 42} y1={80} x2={x + 42} y2={95} stroke={colors[i]} strokeWidth={1} strokeDasharray="2,2" />
          </g>
        );
      })}
      <text x={250} y={130} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">DT presente em todas as fases: CAD/CAE/MES/ERP integrado</text>
      <text x={250} y={143} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Siemens Teamcenter  |  PTC Windchill  |  Dassault 3DEXPERIENCE</text>
    </svg>
  );
}

// ── SVG 7: ISA-95 Pyramid ────────────────────────────────────────────────────
function ISA95PyramidSVG() {
  const layers = [
    { label: 'Field Devices / Sensors', y: 150, w: 320, fill: '#fbbf24' },
    { label: 'PLC / Control Layer',     y: 115, w: 260, fill: '#ea580c' },
    { label: 'SCADA / HMI (Ignition, WinCC)', y: 80, w: 200, fill: '#f59e0b' },
    { label: 'MES (SAP ME, Rockwell)', y: 45, w: 140, fill: '#fb923c' },
    { label: 'ERP / Business',         y: 10,  w: 80,  fill: '#f97316' },
  ];
  const cx = 210;
  return (
    <svg viewBox="0 0 520 210" style={{ width: '100%', maxWidth: 600, display: 'block', margin: '0 auto' }}>
      {layers.map((l) => (
        <g key={l.label}>
          <rect x={cx - l.w / 2} y={l.y} width={l.w} height={30} rx={3} fill={l.fill} fillOpacity={0.2} stroke={l.fill} strokeWidth={1.5} />
          <text x={cx} y={l.y + 18} textAnchor="middle" fontSize={9} fontWeight={600} fill="var(--text-primary)">{l.label}</text>
        </g>
      ))}
      {/* DT overlay */}
      <rect x={375} y={10} width={90} height={170} rx={6} fill={color} fillOpacity={0.08} stroke={color} strokeWidth={1.5} strokeDasharray="4,2" />
      <text x={420} y={36} textAnchor="middle" fontSize={9} fontWeight={700} fill={color}>DT</text>
      <text x={420} y={50} textAnchor="middle" fontSize={8} fill={color}>Overlay</text>
      {[40, 75, 110, 145].map((y) => (
        <line key={y} x1={375} y1={y} x2={355} y2={y} stroke={color} strokeWidth={1} strokeDasharray="2,1" />
      ))}
      <text x={220} y={200} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">OPC-UA: protocolo universal para integracao de dados em todos os niveis</text>
    </svg>
  );
}

// ── SVG 8: Robot Arm with DT Shadow ─────────────────────────────────────────
function RobotArm({ bx, solid, clr }) {
  // bx = base centre x; solid = true for physical, false for DT
  const by = 160; // base top y
  const sw = solid ? 7 : 5;
  const da = solid ? '' : '6,3';
  const fo = solid ? 1 : 0.35;
  // joint positions
  const j0x = bx, j0y = by - 20;       // shoulder
  const j1x = bx + 30, j1y = by - 70;  // elbow
  const j2x = bx + 55, j2y = by - 110; // wrist
  const j3x = bx + 65, j3y = by - 135; // tip
  return (
    <g>
      {/* base platform */}
      <rect x={bx - 22} y={by} width={44} height={14} rx={3} fill={clr} fillOpacity={fo} stroke={solid ? 'none' : clr} strokeWidth={1} strokeDasharray={da} />
      {/* column */}
      <rect x={bx - 6} y={by - 20} width={12} height={22} rx={3} fill={clr} fillOpacity={fo} stroke={solid ? 'none' : clr} strokeWidth={1} strokeDasharray={da} />
      {/* arm segments */}
      <line x1={j0x} y1={j0y} x2={j1x} y2={j1y} stroke={clr} strokeWidth={sw} strokeLinecap="round" strokeOpacity={fo} strokeDasharray={da} />
      <line x1={j1x} y1={j1y} x2={j2x} y2={j2y} stroke={clr} strokeWidth={sw - 2} strokeLinecap="round" strokeOpacity={fo} strokeDasharray={da} />
      <line x1={j2x} y1={j2y} x2={j3x} y2={j3y} stroke={clr} strokeWidth={sw - 3} strokeLinecap="round" strokeOpacity={fo} strokeDasharray={da} />
      {/* joints */}
      {[[j0x,j0y],[j1x,j1y],[j2x,j2y]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={5} fill={clr} fillOpacity={fo} stroke={solid ? 'none' : clr} strokeWidth={1} strokeDasharray={da} />
      ))}
      {/* gripper tip */}
      {solid
        ? <circle cx={j3x} cy={j3y} r={5} fill={clr} />
        : <circle cx={j3x} cy={j3y} r={5} fill="none" stroke={clr} strokeWidth={1.5} strokeDasharray="2,2" />}
    </g>
  );
}

function RobotDTSVG() {
  return (
    <svg viewBox="0 0 500 210" style={{ width: '100%', maxWidth: 580, display: 'block', margin: '0 auto' }}>
      {/* Physical robot */}
      <RobotArm bx={110} solid={true} clr={color} />
      <text x={110} y={195} textAnchor="middle" fontSize={8} fontWeight={700} fill={color}>Físico</text>

      {/* sync arrow */}
      <line x1={180} y1={120} x2={225} y2={120} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="3,2" />
      <polygon points="225,116 233,120 225,124" fill="#f59e0b" />
      <text x={202} y={112} textAnchor="middle" fontSize={7} fill="#f59e0b">sync</text>

      {/* Digital Twin robot */}
      <RobotArm bx={270} solid={false} clr={color} />
      <text x={270} y={195} textAnchor="middle" fontSize={8} fontWeight={700} fill={color}>Digital Twin</text>

      {/* collision indicator — beside the arm, clearly visible */}
      <circle cx={60} cy={105} r={32} fill="#f97316" fillOpacity={0.18} stroke="#f97316" strokeWidth={1.5} strokeDasharray="3,2" />
      <line x1={92} y1={105} x2={118} y2={102} stroke="#f97316" strokeWidth={1} strokeDasharray="2,2" />
      <text x={60} y={99} textAnchor="middle" fontSize={8} fontWeight={700} fill="#f97316">⚠ colisão</text>
      <text x={60} y={113} textAnchor="middle" fontSize={8} fill="#f97316">detectada</text>

      {/* side labels */}
      <text x={355} y={75} fontSize={8} fill="var(--text-secondary)">ROS 2 + DT</text>
      <text x={355} y={90} fontSize={8} fill="var(--text-secondary)">NVIDIA Isaac</text>
      <text x={355} y={105} fontSize={8} fill="var(--text-secondary)">Virtual comm.</text>
      <text x={355} y={120} fontSize={8} fill="var(--text-secondary)">Cobot force</text>
      <text x={355} y={135} fontSize={8} fill="var(--text-secondary)">feedback DT</text>
    </svg>
  );
}

// ── SVG 9: Supply Chain Network ───────────────────────────────────────────────
function SupplyChainSVG() {
  const nodes = [
    { id: 'S1', x: 30, y: 40, label: 'Fornec. A', risk: false },
    { id: 'S2', x: 30, y: 100, label: 'Fornec. B', risk: true },
    { id: 'S3', x: 30, y: 160, label: 'Fornec. C', risk: false },
    { id: 'F1', x: 150, y: 70, label: 'Fabrica 1', risk: false },
    { id: 'F2', x: 150, y: 130, label: 'Fabrica 2', risk: false },
    { id: 'D1', x: 270, y: 50, label: 'DC Norte', risk: false },
    { id: 'D2', x: 270, y: 100, label: 'DC Centro', risk: true },
    { id: 'D3', x: 270, y: 150, label: 'DC Sul', risk: false },
    { id: 'C1', x: 380, y: 60, label: 'Cliente X', risk: false },
    { id: 'C2', x: 380, y: 100, label: 'Cliente Y', risk: false },
    { id: 'C3', x: 380, y: 140, label: 'Cliente Z', risk: false },
  ];
  const edges = [
    ['S1', 'F1'], ['S2', 'F1'], ['S2', 'F2'], ['S3', 'F2'],
    ['F1', 'D1'], ['F1', 'D2'], ['F2', 'D2'], ['F2', 'D3'],
    ['D1', 'C1'], ['D2', 'C1'], ['D2', 'C2'], ['D3', 'C2'], ['D3', 'C3'],
  ];
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <svg viewBox="0 0 480 220" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}>
      {/* edges first */}
      {edges.map((e) => {
        const a = nodeMap[e[0]], b = nodeMap[e[1]];
        const isRisk = a.risk || b.risk;
        return (
          <line key={e[0] + e[1]} x1={a.x + 28} y1={a.y + 12} x2={b.x} y2={b.y + 12}
            stroke={isRisk ? '#f97316' : '#fb923c'} strokeWidth={isRisk ? 2 : 1} strokeOpacity={isRisk ? 1 : 0.4} strokeDasharray={isRisk ? '4,2' : 'none'} />
        );
      })}
      {/* nodes on top with solid background */}
      {nodes.map((n) => (
        <g key={n.id}>
          <rect x={n.x} y={n.y} width={56} height={24} rx={5}
            fill="var(--bg-secondary)"
            stroke={n.risk ? '#f97316' : color} strokeWidth={n.risk ? 2 : 1.5}
            strokeDasharray={n.risk ? '4 2' : 'none'} />
          <text x={n.x + 28} y={n.y + 15} textAnchor="middle" fontSize={8} fill={n.risk ? '#f97316' : color} fontWeight={600}>{n.label}</text>
        </g>
      ))}
      <text x={240} y={200} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Nos a vermelho: risco de disrupcao detectado pelo DT</text>
      <text x={240} y={212} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Llamasoft / IBM Sterling: plataformas de Supply Chain DT</text>
    </svg>
  );
}

// ── SVG 10: Jet Engine ───────────────────────────────────────────────────────
function JetEngineSVG() {
  return (
    <svg viewBox="0 0 500 210" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}>
      {/* engine body */}
      <ellipse cx={250} cy={95} rx={160} ry={52} fill="var(--bg-secondary)" stroke={color} strokeWidth={2} />
      <ellipse cx={120} cy={95} rx={30} ry={52} fill="var(--bg-secondary)" stroke={color} strokeWidth={1.5} />
      <ellipse cx={380} cy={95} rx={15} ry={28} fill="var(--bg-secondary)" stroke={color} strokeWidth={1.5} />
      {/* fan blades — radially arranged around intake center */}
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((a) => (
        <line key={a}
          x1={120} y1={95}
          x2={120 + 26 * Math.cos((a * Math.PI) / 180)}
          y2={95 + 26 * Math.sin((a * Math.PI) / 180)}
          stroke={color} strokeWidth={3} strokeOpacity={0.75} strokeLinecap="round"
        />
      ))}
      <circle cx={120} cy={95} r={5} fill={color} />
      {/* sensor dots */}
      {[
        { cx: 155, cy: 68, label: 'T1 Temp' },
        { cx: 210, cy: 58, label: 'P2 Press' },
        { cx: 270, cy: 63, label: 'Vibr' },
        { cx: 320, cy: 73, label: 'EGT' },
        { cx: 360, cy: 85, label: 'N1 Speed' },
      ].map((s) => (
        <g key={s.label}>
          <circle cx={s.cx} cy={s.cy} r={5} fill="#f59e0b" />
          <line x1={s.cx} y1={s.cy - 5} x2={s.cx} y2={s.cy - 20} stroke="#f59e0b" strokeWidth={1} />
          <text x={s.cx} y={s.cy - 24} textAnchor="middle" fontSize={7} fill="#f59e0b">{s.label}</text>
        </g>
      ))}
      {/* GE predix label */}
      <rect x={10} y={162} width={480} height={38} rx={4} fill="rgba(249,115,22,0.10)" />
      <text x={250} y={177} textAnchor="middle" fontSize={9} fontWeight={700} fill={color}>GE Aviation — Predix Platform: 20 000 parametros por voo</text>
      <text x={250} y={192} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Poupanca: +$1B em manutencao evitada | Blade degradation DT | Turbine architecture</text>
    </svg>
  );
}

// ── SVG 11: Implementation Roadmap ───────────────────────────────────────────
function RoadmapSVG() {
  const phases = [
    { label: 'Fase 1', sub: 'Conectar & Monitorizar', color: '#f97316', items: ['Sensores IoT', 'Data pipeline', 'Dashboard basico'] },
    { label: 'Fase 2', sub: 'Analisar & Prever', color: color, items: ['ML models', 'Alertas DT', 'KPI tracking'] },
    { label: 'Fase 3', sub: 'Otimizar & Automatizar', color: '#ea580c', items: ['Closed-loop', 'Auto-ajuste', 'Full DT'] },
  ];
  return (
    <svg viewBox="0 0 460 200" style={{ width: '100%', maxWidth: 580, display: 'block', margin: '0 auto' }}>
      <line x1={30} y1={55} x2={430} y2={55} stroke="var(--text-secondary)" strokeWidth={2} />
      <polygon points="430,51 440,55 430,59" fill="var(--text-secondary)" />
      {phases.map((ph, i) => {
        const x = 30 + i * 133;
        return (
          <g key={ph.label}>
            <circle cx={x + 60} cy={55} r={14} fill={ph.color} fillOpacity={0.9} />
            <text x={x + 60} y={59} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={700}>{i + 1}</text>
            <rect x={x + 10} y={76} width={100} height={100} rx={6} fill={ph.color} fillOpacity={0.08} stroke={ph.color} strokeWidth={1.5} />
            <text x={x + 60} y={92} textAnchor="middle" fontSize={9} fontWeight={700} fill={ph.color}>{ph.label}</text>
            <text x={x + 60} y={105} textAnchor="middle" fontSize={7.5} fill="var(--text-secondary)">{ph.sub}</text>
            {ph.items.map((it, j) => (
              <text key={it} x={x + 60} y={120 + j * 14} textAnchor="middle" fontSize={8} fill="var(--text-primary)">• {it}</text>
            ))}
          </g>
        );
      })}
      <text x={230} y={193} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Equipa: OT (Operacoes) + IT (TI) + Data Science — cada fase: 3-6 meses</text>
    </svg>
  );
}

// ── SVG 12: Value Chain ───────────────────────────────────────────────────────
function ValueChainSVG() {
  const steps = ['Sensores', 'Edge', 'Cloud', 'DT Engine', 'Analytics', 'Decisao'];
  const clrs = ['#f97316', '#fb923c', '#f59e0b', '#f97316', '#fb923c', '#ea580c'];
  return (
    <svg viewBox="0 0 500 120" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}>
      {steps.map((s, i) => {
        const x = 10 + i * 82;
        return (
          <g key={s}>
            <rect x={x} y={25} width={70} height={40} rx={6} fill={clrs[i]} fillOpacity={0.18} stroke={clrs[i]} strokeWidth={1.5} />
            <text x={x + 35} y={48} textAnchor="middle" fontSize={9} fontWeight={700} fill={clrs[i]}>{s}</text>
            {i < 5 && <polygon points={`${x + 71},45 ${x + 80},40 ${x + 80},50`} fill={clrs[i]} />}
          </g>
        );
      })}
      <text x={250} y={82} textAnchor="middle" fontSize={8} fill="var(--text-secondary)">Stack tecnologica: MQTT/OPC-UA → Kafka/Spark → AWS/Azure → FMI/DT → Grafana/ML → ERP</text>
      <text x={250} y={96} textAnchor="middle" fontSize={8} fill={color} fontWeight={600}>Latencia tipica ponta-a-ponta: 10-200ms | Retencao de dados: hot 30d / warm 1a / cold 7a</text>
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function DT4() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>
      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>Digital Twins em Manufatura</h1>
      <p style={S.lead}>
        A manufatura inteligente e o dominio onde os Digital Twins demonstram o maior impacto economico imediato.
        Desde a manutencao preditiva ate a otimizacao de toda a cadeia de valor, esta modulo explora como
        as fabricas do futuro usam gemeos digitais para aumentar OEE, reduzir desperdicio e acelerar inovacao.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Industria 4.0 e Digital Twins</h2>
        <I40PillarsSVG />
        <p style={S.p}>
          A Industria 4.0 (I4.0) e o paradigma de transformacao digital que combina tecnologias ciberneticas com
          processos fisicos de producao. Os Digital Twins ocupam a posicao central neste ecossistema, actuando como
          camada de integracao entre IoT, Cloud, AI e Robotics. Ao contrario de sistemas isolados, o DT em manufatura
          agrega dados de multiplas fontes — sensores, PLCs, SCADA, ERP — para criar uma representacao holistica
          e actualizavel em tempo real de todo o processo produtivo.
        </p>
        <div style={S.highlight}>
          <strong>McKinsey Global Institute (2022):</strong> empresas que implementam DT em manufatura registam ganhos
          de produtividade de <strong>10 a 20%</strong>, reducao de downtime de <strong>20-50%</strong> e reducao
          de custos de qualidade de <strong>10-25%</strong>.
        </div>
        <h3 style={S.h3}>Da Manufatura Reactiva a Prescritiva</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nivel</th>
              <th style={S.th}>Descricao</th>
              <th style={S.th}>Ferramenta DT</th>
              <th style={S.th}>Horizonte</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Reactivo', 'Actua depois de falha', 'Monitorização basica', 'Passado'],
              ['Preditivo', 'Antecipa falhas com dados historicos', 'ML + DT simulation', 'Futuro proximo'],
              ['Prescritivo', 'Recomenda ou executa accao optima autonomamente', 'RL + DT closed-loop', 'Optimizacao continua'],
            ].map(([n, d, f, h]) => (
              <tr key={n}>
                <td style={S.td}>{n}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{h}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Os pilares da I4.0 nao funcionam de forma independente: o DT e o elemento que confere coerencia semantica
          aos dados produzidos por todos os outros pilares, tornando-os accionaveis.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Manutencao Preditiva</h2>
        <DegradationCurveSVG />
        <p style={S.p}>
          A manutencao preditiva (PdM — Predictive Maintenance) e o caso de uso com maior ROI imediato em manufatura.
          O Digital Twin monitoriza continuamente os parametros do equipamento e compara com modelos de degradacao
          pre-estabelecidos, identificando o ponto optimo de intervencao antes que a falha ocorra.
        </p>
        <h3 style={S.h3}>Sensor Fusion e Dados de Entrada</h3>
        <p style={S.p}>
          A fusao de sensores combina multiplas modalidades para aumentar a robustez da predicao. Sensores de vibracao
          (acelerometros MEMS a 10-50 kHz), temperatura (termopares tipo K), emissao acustica (20-300 kHz) e corrente
          electrica sao os mais utilizados. O DT processa estes sinais em tempo real, extraindo features como RMS,
          curtose, entropia espectral e Peak-to-Peak para alimentar modelos de RUL.
        </p>
        <h3 style={S.h3}>RUL — Remaining Useful Life</h3>
        <div style={S.highlight}>
          O RUL representa o tempo estimado ate a falha, dado o estado actual do equipamento. A ISO 13374 define
          os requisitos para sistemas de condition monitoring: aquisicao, manipulacao, analise e comunicacao de dados.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estrategia de Manutencao</th>
              <th style={S.th}>Custo Relativo</th>
              <th style={S.th}>Disponibilidade</th>
              <th style={S.th}>Aplicabilidade DT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Correctiva (break-fix)', '100% (baseline)', '70-75%', 'Baixa'],
              ['Preventiva (calendario)', '60-80%', '80-85%', 'Media'],
              ['Preditiva (PdM)', '35-50%', '88-92%', 'Alta'],
              ['Prescritiva (DT closed-loop)', '25-40%', '92-98%', 'Muito Alta'],
            ].map(([e, c, d, a]) => (
              <tr key={e}>
                <td style={S.td}>{e}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Qualidade e Inspeccao</h2>
        <QualityLineSVG />
        <p style={S.p}>
          O controlo de qualidade tradicional baseia-se em amostragem estatistica post-hoc, detectando defeitos
          depois de pecas ja terem sido produzidas. O Digital Twin de Qualidade transforma este paradigma: atraves
          de sensores inline e visao computacional, cada peca e monitorizada continuamente, e o DT preve
          a qualidade do output em tempo real, permitindo ajustes imediatos nos parametros de processo.
        </p>
        <h3 style={S.h3}>Statistical Process Control (SPC) com DT</h3>
        <p style={S.p}>
          O SPC usa cartas de controlo (X-bar para a media, R-chart para a amplitude) para detectar quando
          um processo sai dos limites de controlo estatistico (UCL/LCL). Com o DT, estes limites sao dinamicos
          e ajustados em funcao das condicoes do equipamento, materias-primas e ambiente, aumentando
          significativamente a sensibilidade de deteccao de anomalias sem aumentar os falsos alarmes.
        </p>
        <div style={S.highlight}>
          <strong>Indices de Capacidade:</strong> Cp = (USL - LSL) / (6 sigma) mede a capacidade potencial.
          Cpk = min[(USL - media)/3sigma, (media - LSL)/3sigma] mede a capacidade real (centrada).
          World-class manufacturing: Cpk maior que 1.67 (equivalente a 6 sigma, 3.4 DPPM).
        </div>
        <h3 style={S.h3}>Computer Vision para Deteccao de Defeitos</h3>
        <p style={S.p}>
          Sistemas de inspecao optica automatica (AOI) baseados em deep learning (CNNs como ResNet, EfficientNet)
          integram-se com o DT para classificar defeitos (riscos, porosidade, deformacoes geometricas) com
          tolerancias de 0.01 mm. O DT mantem o historico de cada peca e correlaciona defeitos com parametros
          de processo especificos, fechando o loop de qualidade.
        </p>
        <div style={S.note}>
          Metodologia Toyota A3 + DT: o relatorio A3 (PDCA num formato A3) e enriquecido com dados do DT
          para analise de causa raiz mais rapida e evidencias quantitativas de melhoria.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Metrica de Qualidade</th>
              <th style={S.th}>Sem DT</th>
              <th style={S.th}>Com DT</th>
              <th style={S.th}>Melhoria</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Yield (%)', '94.1', '98.2', '+4.1 pp'],
              ['Tempo de deteccao de defeitos', '4-8 horas', 'Real-time', '-99%'],
              ['Custo de retrabalho', 'Baseline', '-35%', '-35%'],
              ['DPPM (defeitos por milhao)', '8 500', '1 200', '-86%'],
            ].map(([m, s, c, i]) => (
              <tr key={m}>
                <td style={S.td}>{m}</td>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td} style={{ color: '#f97316', fontWeight: 700 }}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Optimizacao de Processos</h2>
        <ProcessOptSVG />
        <p style={S.p}>
          A optimizacao de processos com DT vai alem do ajuste manual de parametros: usa modelos surrogate
          (aproximacoes computacionalmente eficientes dos modelos de simulacao completa) para explorar o espaco
          de parametros e encontrar configuracoes optimas sem interrupcao da producao. O Design of Experiments (DoE)
          com DT reduz o numero de experimentos fisicos necessarios em 70-90%.
        </p>
        <h3 style={S.h3}>Design of Experiments (DoE) com Surrogate Models</h3>
        <p style={S.p}>
          O DoE classico (Taguchi, Response Surface Methodology) requer dezenas a centenas de ensaios fisicos.
          Com o DT como surrogate model treinado em dados historicos e simulacoes, o espaco experimental e
          explorado virtualmente. Tecnicas como Latin Hypercube Sampling e Bayesian Optimisation permitem
          encontrar o optimo global com apenas 5-20 ensaios fisicos de validacao.
        </p>
        <div style={S.note}>
          Energia representa tipicamente 8-15% dos custos de producao em industria pesada. O DT com
          optimizacao energetica pode reduzir este custo em 15-25% sem comprometer throughput.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. OEE e KPIs de Manufatura</h2>
        <OEEGaugeSVG />
        <p style={S.p}>
          O OEE (Overall Equipment Effectiveness) e a metrica primaria de eficiencia em manufatura enxuta.
          Combina tres dimensoes: Disponibilidade (tempo real vs planeado), Performance (velocidade real vs teorica)
          e Qualidade (unidades boas vs total produzido). O DT permite monitorizar o OEE em tempo real,
          desagregar por causa de perda e simular o impacto de melhorias antes de as implementar.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>KPI</th>
              <th style={S.th}>Formula</th>
              <th style={S.th}>Valor Tipico</th>
              <th style={S.th}>Com DT (World Class)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['OEE', 'A x P x Q', '65-70%', '85-90%'],
              ['Disponibilidade (A)', 'Tempo operacao / Tempo planeado', '80-85%', '90-95%'],
              ['Performance (P)', 'Producao real / Producao teorica', '88-92%', '93-97%'],
              ['Qualidade (Q)', 'Pecas boas / Total produzido', '94-96%', '98-99.5%'],
              ['MTBF', 'Tempo medio entre falhas', '450h', '1 200h'],
              ['MTTR', 'Tempo medio de reparacao', '6.5h', '2.1h'],
              ['Custos de Manutencao', '% do RAB', '4.5%', '2.1%'],
              ['Throughput', 'Unidades/hora', 'Baseline', '+14-22%'],
            ].map(([k, f, t, d]) => (
              <tr key={k}>
                <td style={S.td}><strong>{k}</strong></td>
                <td style={S.td} style={{ fontFamily: 'monospace', fontSize: '0.82rem' }}>{f}</td>
                <td style={S.td}>{t}</td>
                <td style={S.td} style={{ color: '#f97316', fontWeight: 600 }}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Passagem de 65% para 85% de OEE</strong> representa tipicamente um ganho de producao equivalente
          a adicionar um turno completo sem investimento em novo equipamento — apenas atraves de eliminacao
          de perdas identificadas pelo DT.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Product Lifecycle Management (PLM)</h2>
        <PLMLifecycleSVG />
        <p style={S.p}>
          O PLM e a disciplina que gere a informacao associada a um produto ao longo de toda a sua vida util,
          desde a concepcao ate ao fim de vida (EOL). O Digital Twin e o fio condutor que liga todas as fases
          do PLM, transportando informacao bidireccionalmente: dados de servico alimentam o redesign,
          dados de manufatura informam a engenharia, e modelos de design guiam a producao.
        </p>
        <h3 style={S.h3}>Plataformas PLM + DT</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Fabricante</th>
              <th style={S.th}>DT Capability</th>
              <th style={S.th}>Integracao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Teamcenter', 'Siemens', 'Xcelerator DT', 'MES, ERP, IoT'],
              ['Windchill', 'PTC', 'ThingWorx IoT + DT', 'Vuforia AR, SCADA'],
              ['3DEXPERIENCE', 'Dassault Systemes', 'SIMULIA Simulation DT', 'CATIA, DELMIA'],
              ['Creo + Vuforia', 'PTC', 'AR/DT overlay', 'Factory floor'],
              ['NX / Capital', 'Siemens', 'Virtual factory', 'Tecnomatix'],
            ].map(([p, f, d, i]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>DT e Engenharia Simultanea</h3>
        <p style={S.p}>
          O DT permite engenharia simultanea real: enquanto o tooling ainda esta em producao, o DT
          simulado valida a assembly sequence, identifica interferencias e optimiza o plano de controlo
          de qualidade. Tempo de lancamento de novos produtos (NPI) reduz 30-40%.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. SCADA e MES Integration</h2>
        <ISA95PyramidSVG />
        <p style={S.p}>
          A piramide de automacao ISA-95 (IEC 62264) define os niveis funcionais da manufactura moderna:
          do campo fisico (sensores, actuadores) ate ao nivel de negocio (ERP). O Digital Twin actua
          como overlay transversal a todos os niveis, consumindo dados de baixo para cima e fornecendo
          insight e controlo de cima para baixo.
        </p>
        <h3 style={S.h3}>SCADA — Supervisory Control and Data Acquisition</h3>
        <p style={S.p}>
          Sistemas SCADA como Inductive Automation Ignition, Siemens WinCC e AVEVA System Platform
          fornecem a camada de visualizacao e controlo em tempo real. A integracao com DT adiciona
          capacidade de simulacao: e possivel testar alarmes, sequencias de controlo e cenarios de
          emergencia no DT antes de os activar na planta fisica.
        </p>
        <h3 style={S.h3}>MES — Manufacturing Execution System</h3>
        <p style={S.p}>
          O MES (SAP Manufacturing Execution, Rockwell FactoryTalk, Siemens Opcenter) gere a execucao
          da producao em tempo real: ordens de trabalho, rastreabilidade, genealogia do produto e
          gestao de recursos. Com DT, o MES antecipa bottlenecks, resequencia ordens dinamicamente
          e prevê completion dates com precisao superior a 95%.
        </p>
        <div style={S.highlight}>
          <strong>OPC-UA (IEC 62541):</strong> protocolo universal que permite comunicacao segura e
          semanticamente rica entre equipamentos de diferentes fabricantes, cloud platforms e DT engines.
          Suporta pub/sub, discovery automatico e modelos de informacao padronizados (companion specs).
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Robotica e Automacao</h2>
        <RobotDTSVG />
        <p style={S.p}>
          O Digital Twin de robo e uma das aplicacoes mais avancadas em manufatura. O gemeo digital
          executa as mesmas trajectórias e tarefas que o robo fisico em tempo real, permitindo deteccao
          de colisoes, optimizacao de trajectórias e ajuste de parametros de forca sem risco para
          pessoas ou equipamento. Esta capacidade e critica em ambientes de producao partilhados entre
          humanos e robos (cobots).
        </p>
        <h3 style={S.h3}>Virtual Commissioning</h3>
        <p style={S.p}>
          O commissioning virtual permite validar programas de robo, sistemas de controlo e interlocks
          de seguranca no DT antes de qualquer instalacao fisica. Siemens Process Simulate, Delmia Robotics
          e ABB RobotStudio oferecem ambientes de simulacao fiel que reduzem o tempo de commissioning
          em 50-70% e eliminam praticamente os danos por programacao incorrecta.
        </p>
        <h3 style={S.h3}>ROS 2 e NVIDIA Isaac Sim</h3>
        <div style={S.highlight}>
          <strong>NVIDIA Isaac Sim</strong> (baseado em Omniverse) fornece simulacao fisicamente precisa
          para desenvolvimento e teste de sistemas roboticos com DT. Suporta ROS 2 natively, permitindo
          transicao directa do ambiente virtual para o robo fisico (sim-to-real transfer).
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tecnologia</th>
              <th style={S.th}>Funcao no DT</th>
              <th style={S.th}>Beneficio</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ROS 2 (middleware)', 'Comunicacao inter-nos, abstraction layer', 'Portabilidade entre robos'],
              ['NVIDIA Isaac Sim', 'Simulacao GPU-accelerated, photorealistic', 'Sim-to-real transfer robusto'],
              ['Moveit 2', 'Motion planning + collision avoidance', 'Trajectórias seguras em tempo real'],
              ['Cobot force DT', 'Monitorizacao de torque/forca em tempo real', 'Deteccao de contacto inesperado'],
              ['Digital shadow arm', 'Replica sincronizada do estado cinematico', 'Diagnostico e optimizacao continua'],
            ].map(([t, f, b]) => (
              <tr key={t}>
                <td style={S.td}><strong>{t}</strong></td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Supply Chain Digital Twin</h2>
        <SupplyChainSVG />
        <p style={S.p}>
          O Digital Twin de Supply Chain (SCDT) e um grafo dinamico que representa fornecedores,
          fabricas, centros de distribuicao, transportadores e clientes. Cada no tem atributos de
          capacidade, stock, lead time e nivel de risco. O SCDT permite simular cenarios de disrupcao
          (pandemias, congestionamento portuario, falhas de fornecedor) e calcular os impactos antes
          que ocorram, activando planos de contingencia de forma proactiva.
        </p>
        <h3 style={S.h3}>Casos de Uso de SCDT</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso de Uso</th>
              <th style={S.th}>Descricao</th>
              <th style={S.th}>Impacto</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Demand Forecasting', 'ML sobre historico de vendas + DT de inventario', 'Forecast accuracy +15-25%'],
              ['Inventory Optimization', 'DT simula politicas de stock (EOQ, JIT, S,s)', 'Stock reduction 20-35%'],
              ['Disruption Simulation', 'What-if: fecho de porto, falta de semicondutores', 'Recovery time -40%'],
              ['Supplier Risk Scoring', 'Score dinamico por fornecedor com DT', 'Disruption cost -30%'],
              ['Last-mile Optimization', 'DT de frotas e rotas em tempo real', 'Custo transporte -12%'],
            ].map(([c, d, i]) => (
              <tr key={c}>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}>{d}</td>
                <td style={S.td} style={{ color: '#f97316', fontWeight: 600 }}>{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          COVID-19 demonstrou a fragilidade de supply chains just-in-time sem DT. Empresas com SCDT
          estabelecido (ex: Unilever, Procter and Gamble) adaptaram-se em dias; empresas sem DT levaram
          semanas a meses para identificar alternativas de fornecimento.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Caso de Estudo: GE Aviation</h2>
        <JetEngineSVG />
        <p style={S.p}>
          A GE Aviation e um dos casos mais emblematicos de Digital Twin em manufatura de alto valor.
          Cada motor jet (GE90, LEAP, GEnx) tem um gemeo digital associado que acompanha toda a
          sua vida util: desde o primeiro teste de aceitacao em fabrica ate ao ultimo voo antes
          de revisao geral (overhaul). O sistema processa mais de 20 000 parametros por voo,
          sincronizados com o DT atraves da plataforma Predix.
        </p>
        <h3 style={S.h3}>Arquitectura da Plataforma Predix</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Camada</th>
              <th style={S.th}>Tecnologia</th>
              <th style={S.th}>Funcao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Edge (motor)', 'FADEC + Health Management Unit', 'Aquisicao local, pre-processamento, transmissao'],
              ['Conectividade', 'ACARS + Satcom (intra-voo)', 'Streaming de parametros criticos em voo'],
              ['Ingestion', 'Predix Data Services (Kafka)', 'Recepcao de 20 000 params/voo'],
              ['DT Engine', 'Predix APM + Physics models', 'Actualizacao do gemeo digital em tempo real'],
              ['Analytics', 'FlightPulse + ML', 'Anomaly detection, RUL, fuel optimization'],
              ['Action', 'MRO Integration (C-Check scheduling)', 'Ordens de manutencao automaticas'],
            ].map(([c, t, f]) => (
              <tr key={c}>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}>{t}</td>
                <td style={S.td}>{f}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Resultados GE Aviation:</strong> poupanca superior a 1 biliao USD em manutencao
          evitada nos primeiros 5 anos. Reducao de AOG (Aircraft on Ground) events em 36%.
          Extensao do intervalo entre overhauls em 20-30% com base em dados do DT.
          Mais de 68 000 motores monitorizados pela plataforma Predix.
        </div>
        <h3 style={S.h3}>Blade Degradation DT</h3>
        <p style={S.p}>
          As pas de turbina (turbine blades) operam a temperaturas superiores ao ponto de fusao do
          metal base (graças a cooling channels e thermal barrier coatings). O DT de cada pa inclui
          um modelo de creep, fadiga termica e erosao que integra os ciclos termicos de cada voo.
          Quando o modelo indica que a pa atingiu 80% da sua vida util, a manutencao e planeada
          proactivamente no proximo C-Check, evitando falhas em servico.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Implementacao Passo-a-Passo</h2>
        <RoadmapSVG />
        <p style={S.p}>
          A implementacao de DT em manufatura e um projecto de transformacao, nao apenas de tecnologia.
          A abordagem faseada minimiza o risco e permite demonstrar valor rapido (quick wins) enquanto
          se constroi a infra-estrutura para capacidades avancadas. Cada fase deve ter KPIs claros
          e um business case validado antes de avanar para a seguinte.
        </p>
        <h3 style={S.h3}>Seleccao do Activo Piloto</h3>
        <p style={S.p}>
          Criterios de seleccao: (1) activo critico para a producao com historial de falhas documentado;
          (2) dados de sensores disponiveis ou facilmente instrumentaveis; (3) custo de falha elevado
          (justifica ROI do DT); (4) equipa local motivada e disponivel para colaborar. Evitar activos
          sem historico de dados ou com processos em constante mudanca.
        </p>
        <h3 style={S.h3}>Calculo de ROI</h3>
        <h3 style={S.h3}>Papeis da Equipa</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Papel</th>
              <th style={S.th}>Perfil</th>
              <th style={S.th}>Responsabilidade no DT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['OT Lead', 'Engenheiro de Processo / Manutencao', 'Domain expertise, validacao de modelos fisicos'],
              ['IT Architect', 'Engenheiro de Sistemas / Cloud', 'Infra-estrutura, conectividade, seguranca'],
              ['Data Scientist', 'PhD / MSc em ML/Estatistica', 'Modelos preditivos, anomaly detection, RUL'],
              ['DT Developer', 'Software Engineer com exp. IoT', 'Desenvolvimento do gemeo digital, APIs'],
              ['Product Owner', 'Gestor Industrial', 'Prioridades, ROI, gestao de stakeholders'],
              ['Change Manager', 'RH / Operacoes', 'Adopcao, formacao, resistencia a mudanca'],
            ].map(([p, pe, r]) => (
              <tr key={p}>
                <td style={S.td}><strong>{p}</strong></td>
                <td style={S.td}>{pe}</td>
                <td style={S.td}>{r}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <ValueChainSVG />
        <p style={S.p}>
          O Digital Twin em manufatura e uma jornada de maturidade continua. A cadeia de valor tecnologica
          vai dos sensores fisicos ate as decisoes de negocio, passando por edge computing, cloud, motor DT
          e analytics avancada. Cada camada adiciona inteligencia e valor, mas tambem complexidade e
          requisitos de governanca de dados.
        </p>
        <h3 style={S.h3}>Stack Tecnologica Completa</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Camada</th>
              <th style={S.th}>Tecnologias</th>
              <th style={S.th}>Protocolos</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Sensores/Field', 'MEMS, termopares, encoders, vision cameras', 'IO-Link, Profibus, CAN'],
              ['Edge Computing', 'Siemens IPC, Dell Edge, AWS Greengrass', 'OPC-UA, MQTT, Modbus TCP'],
              ['Conectividade', '5G, LTE-M, Ethernet industrial, TSN', 'MQTT, AMQP, DDS'],
              ['Cloud/Ingestion', 'Azure IoT Hub, AWS IoT Core, Kafka', 'HTTPS, WebSocket, gRPC'],
              ['DT Engine', 'Azure Digital Twins, AWS IoTTwinMaker, Bentley iTwin', 'DTDL, JSON-LD, RDF'],
              ['Analytics/ML', 'Databricks, SageMaker, MLflow, Grafana', 'REST API, GraphQL'],
              ['ERP/MES', 'SAP S/4HANA, Rockwell, Siemens Opcenter', 'IDocs, RFC, OData'],
            ].map(([c, t, p]) => (
              <tr key={c}>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}>{t}</td>
                <td style={S.td} style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Checklist de Avaliacao de Maturidade DT</h3>
        <div style={S.highlight}>
          {[
            'Instrumentacao: mais de 80% dos activos criticos com sensores conectados',
            'Dados: historico limpo de pelo menos 12 meses de dados operacionais',
            'Conectividade: latencia ponta-a-ponta inferior a 500ms para dados criticos',
            'DT base: modelo digital sincronizado em tempo real (menos de 1 min delay)',
            'PdM: pelo menos 1 modelo preditivo em producao com KPI monitorizado',
            'Qualidade: SPC automatico com alertas do DT integrados no MES',
            'OEE: dashboard em tempo real com drill-down por causa de perda',
            'Closed-loop: pelo menos 1 actuacao automatica baseada em DT em producao',
            'PLM: DT conectado ao sistema PLM para feedback design-manufacture',
            'Supply Chain: visibilidade de nivel 1 de fornecedores no SCDT',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span style={{ color: color, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item}</span>
            </div>
          ))}
        </div>
        <h3 style={S.h3}>Impacto de KPIs por Nivel de Maturidade</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nivel</th>
              <th style={S.th}>OEE</th>
              <th style={S.th}>Downtime</th>
              <th style={S.th}>Custo Qualidade</th>
              <th style={S.th}>Lead Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Nivel 0 (sem DT)', '60-65%', 'Baseline', 'Baseline', 'Baseline'],
              ['Nivel 1 (Monitor)', '68-72%', '-15%', '-8%', '-5%'],
              ['Nivel 2 (Predict)', '75-80%', '-35%', '-20%', '-15%'],
              ['Nivel 3 (Optimize)', '82-87%', '-55%', '-35%', '-30%'],
              ['Nivel 4 (Autonomous)', '88-95%', '-70%', '-50%', '-45%'],
            ].map(([n, o, d, q, l]) => (
              <tr key={n}>
                <td style={S.td}><strong>{n}</strong></td>
                <td style={{ ...S.td, color: n === 'Nivel 4 (Autonomous)' ? '#f97316' : undefined, fontWeight: n === 'Nivel 4 (Autonomous)' ? 700 : undefined }}>{o}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{q}</td>
                <td style={S.td}>{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Exemplo Final: Pipeline Completo de Manutencao Preditiva</h3>
        <div style={S.note}>
          Os Digital Twins em manufatura nao sao um destino, sao uma plataforma de melhoria continua.
          Cada dado adicional, cada modelo melhorado e cada processo automatizado aumenta o valor do gemeo
          digital — e por consequencia, a competitividade da operacao industrial.
        </div>
      </section>
    </div>
  );
}
