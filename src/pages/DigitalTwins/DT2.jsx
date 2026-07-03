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

function LayerStackSVG() {
  const layers = [
    { y: 20,  label: 'Application Layer',      sub: 'Dashboards · APIs · AI/ML · Alerting',    fill: '#f97316' },
    { y: 100, label: 'Digital Twin Engine',     sub: 'State Store · Simulation · Graph DB',      fill: '#fb923c' },
    { y: 180, label: 'Data Ingestion',          sub: 'Kafka · Event Hubs · Stream Processing',   fill: '#f59e0b' },
    { y: 260, label: 'Connectivity Layer',      sub: 'OPC-UA · MQTT · Modbus · 5G · LoRaWAN',  fill: '#fbbf24' },
    { y: 340, label: 'Physical Layer',          sub: 'Sensors · Actuators · PLCs · Machines',    fill: '#ea580c' },
  ];
  return (
    <svg viewBox="0 0 700 440" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '1.5rem auto' }}>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={40} y={l.y} width={620} height={68} rx={8} fill={l.fill} fillOpacity={0.15} stroke={l.fill} strokeWidth={1.5} />
          <rect x={40} y={l.y} width={8} height={68} rx={4} fill={l.fill} />
          <text x={65} y={l.y + 26} fontSize={13} fontWeight={700} fill={l.fill}>{l.label}</text>
          <text x={65} y={l.y + 47} fontSize={11} fill="var(--text-secondary)">{l.sub}</text>
          {i < layers.length - 1 && (
            <line x1={350} y1={l.y + 68} x2={350} y2={l.y + 80} stroke={color} strokeWidth={1.5} strokeDasharray="4 2" />
          )}
        </g>
      ))}
      <text x={350} y={428} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">IIC/IIRA Reference Architecture — 5-Layer Stack</text>
    </svg>
  );
}

function SensorPlacementSVG() {
  return (
    <svg viewBox="0 0 640 300" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '1.5rem auto' }}>
      {/* Machine body */}
      <rect x={220} y={80} width={200} height={140} rx={6} fill="none" stroke="var(--text-secondary)" strokeWidth={2} />
      <rect x={240} y={100} width={60} height={80} rx={4} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <rect x={340} y={100} width={60} height={80} rx={4} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={320} y={210} textAnchor="middle" fontSize={11} fill="var(--text-secondary)">Industrial Machine</text>

      {/* Temperature sensor */}
      <circle cx={160} cy={110} r={18} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={160} y={107} textAnchor="middle" fontSize={9} fontWeight={700} fill="#f97316">TEMP</text>
      <text x={160} y={118} textAnchor="middle" fontSize={8} fill="#f97316">PT100</text>
      <line x1={178} y1={110} x2={220} y2={120} stroke="#f97316" strokeWidth={1} strokeDasharray="3 2" />

      {/* Vibration sensor */}
      <circle cx={160} cy={185} r={18} fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth={1.5} />
      <text x={160} y={182} textAnchor="middle" fontSize={9} fontWeight={700} fill="#f59e0b">VIB</text>
      <text x={160} y={193} textAnchor="middle" fontSize={8} fill="#f59e0b">MEMS</text>
      <line x1={178} y1={185} x2={220} y2={175} stroke="#f59e0b" strokeWidth={1} strokeDasharray="3 2" />

      {/* Pressure sensor */}
      <circle cx={480} cy={120} r={18} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={480} y={117} textAnchor="middle" fontSize={9} fontWeight={700} fill="#f97316">PRES</text>
      <text x={480} y={128} textAnchor="middle" fontSize={8} fill="#f97316">4-20mA</text>
      <line x1={462} y1={120} x2={420} y2={130} stroke="#f97316" strokeWidth={1} strokeDasharray="3 2" />

      {/* Camera */}
      <circle cx={480} cy={185} r={18} fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth={1.5} />
      <text x={480} y={182} textAnchor="middle" fontSize={9} fontWeight={700} fill="#f97316">CAM</text>
      <text x={480} y={193} textAnchor="middle" fontSize={8} fill="#f97316">CV</text>
      <line x1={462} y1={185} x2={420} y2={165} stroke="#f97316" strokeWidth={1} strokeDasharray="3 2" />

      {/* Actuator feedback arrow */}
      <rect x={255} y={235} width={130} height={28} rx={6} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={1} />
      <text x={320} y={254} textAnchor="middle" fontSize={10} fill={color} fontWeight={600}>Actuador (Set-point)</text>
      <line x1={320} y1={220} x2={320} y2={235} stroke={color} strokeWidth={1.5} />
      <polygon points="315,220 325,220 320,212" fill={color} />

      <text x={320} y={292} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Sensor placement and actuator feedback on industrial machine</text>
    </svg>
  );
}

function ProtocolComparisonSVG() {
  const protocols = [
    { name: 'OPC-UA', latency: 10, reliability: 95, x: 120, color: '#f97316' },
    { name: 'MQTT',   latency: 30, reliability: 85, x: 220, color: '#f97316' },
    { name: 'AMQP',   latency: 25, reliability: 90, x: 320, color: '#f97316' },
    { name: 'Modbus', latency: 5,  reliability: 99, x: 420, color: '#f97316' },
    { name: 'BACnet', latency: 20, reliability: 88, x: 520, color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 660 280" style={{ width: '100%', maxWidth: 660, display: 'block', margin: '1.5rem auto' }}>
      <text x={20} y={18} fontSize={11} fontWeight={600} fill="var(--text-secondary)">Latência típica (ms) por protocolo</text>
      {/* Axes */}
      <line x1={60} y1={30} x2={60} y2={220} stroke="var(--text-secondary)" strokeWidth={1} />
      <line x1={60} y1={220} x2={600} y2={220} stroke="var(--text-secondary)" strokeWidth={1} />
      {/* Y-axis labels */}
      {[0,10,20,30,40].map((v, i) => (
        <g key={i}>
          <text x={52} y={220 - v * 4.5 + 4} textAnchor="end" fontSize={9} fill="var(--text-secondary)">{v}</text>
          <line x1={58} y1={220 - v * 4.5} x2={600} y2={220 - v * 4.5} stroke="var(--text-secondary)" strokeWidth={0.5} />
        </g>
      ))}
      {/* Bars */}
      {protocols.map((p, i) => {
        const barH = p.latency * 4.5;
        return (
          <g key={i}>
            <rect x={p.x - 35} y={220 - barH} width={50} height={barH} rx={4} fill={p.color} fillOpacity={0.7} />
            <text x={p.x - 10} y={220 - barH - 6} textAnchor="middle" fontSize={10} fontWeight={700} fill={p.color}>{p.latency}ms</text>
            <text x={p.x - 10} y={238} textAnchor="middle" fontSize={10} fill="var(--text-primary)">{p.name}</text>
          </g>
        );
      })}
      <text x={330} y={270} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Latência media indicativa em ambiente industrial controlado</text>
    </svg>
  );
}

function EdgeArchSVG() {
  return (
    <svg viewBox="0 0 700 320" style={{ width: '100%', maxWidth: 700, display: 'block', margin: '1.5rem auto' }}>
      {/* Far Edge */}
      <rect x={10} y={60} width={160} height={200} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} strokeDasharray="6 3" />
      <text x={90} y={50} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Far Edge</text>
      <rect x={25} y={75} width={130} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={90} y={98} textAnchor="middle" fontSize={10} fill="var(--text-primary)">Sensor / PLC</text>
      <rect x={25} y={120} width={130} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={90} y={143} textAnchor="middle" fontSize={10} fill="var(--text-primary)">Microcontroller</text>
      <rect x={25} y={165} width={130} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={90} y={188} textAnchor="middle" fontSize={10} fill="var(--text-primary)">LoRa / Zigbee</text>
      <text x={90} y={272} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Latencia: 1-5ms</text>

      {/* Arrow */}
      <line x1={170} y1={160} x2={220} y2={160} stroke={color} strokeWidth={2} />
      <polygon points="220,155 230,160 220,165" fill={color} />

      {/* Edge */}
      <rect x={230} y={60} width={200} height={200} rx={8} fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth={1.5} strokeDasharray="6 3" />
      <text x={330} y={50} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Edge</text>
      <rect x={248} y={75} width={165} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={330} y={98} textAnchor="middle" fontSize={10} fill="var(--text-primary)">Azure IoT Edge</text>
      <rect x={248} y={120} width={165} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={330} y={143} textAnchor="middle" fontSize={10} fill="var(--text-primary)">AWS Greengrass</text>
      <rect x={248} y={165} width={165} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={330} y={188} textAnchor="middle" fontSize={10} fill="var(--text-primary)">NVIDIA Jetson</text>
      <text x={330} y={272} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Latencia: 5-50ms</text>

      {/* Arrow */}
      <line x1={430} y1={160} x2={480} y2={160} stroke="#f97316" strokeWidth={2} />
      <polygon points="480,155 490,160 480,165" fill="#f97316" />

      {/* Cloud */}
      <rect x={490} y={60} width={200} height={200} rx={8} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} strokeDasharray="6 3" />
      <text x={590} y={50} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Cloud</text>
      <rect x={508} y={75} width={165} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={590} y={98} textAnchor="middle" fontSize={10} fill="var(--text-primary)">Azure Digital Twins</text>
      <rect x={508} y={120} width={165} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={590} y={143} textAnchor="middle" fontSize={10} fill="var(--text-primary)">AWS TwinMaker</text>
      <rect x={508} y={165} width={165} height={36} rx={5} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} />
      <text x={590} y={188} textAnchor="middle" fontSize={10} fill="var(--text-primary)">ML / Analytics</text>
      <text x={590} y={272} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Latencia: 50-500ms</text>

      <text x={350} y={308} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Far Edge → Edge → Cloud: continuum de processamento com tradeoffs de latencia e custo</text>
    </svg>
  );
}

function PipelineSVG() {
  const nodes = [
    { x: 20,  label: 'Sensors',        sub: 'IoT Devices', color: '#f97316' },
    { x: 160, label: 'Edge',           sub: 'Pre-process',  color: '#f97316' },
    { x: 300, label: 'Kafka/Event Hub',sub: 'Streaming',    color: '#f97316' },
    { x: 440, label: 'Stream Proc.',   sub: 'Flink/ASA',    color: '#f97316' },
    { x: 580, label: 'DT State Store', sub: 'InfluxDB/ADX', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 720 200" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={60} width={100} height={56} rx={7} fill={n.color} fillOpacity={0.12} stroke={n.color} strokeWidth={1.5} />
          <text x={n.x + 50} y={84} textAnchor="middle" fontSize={10} fontWeight={700} fill={n.color}>{n.label}</text>
          <text x={n.x + 50} y={100} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">{n.sub}</text>
          {i < nodes.length - 1 && (
            <>
              <line x1={n.x + 100} y1={88} x2={n.x + 140} y2={88} stroke={n.color} strokeWidth={1.5} />
              <polygon points={`${n.x + 140},83 ${n.x + 150},88 ${n.x + 140},93`} fill={n.color} />
            </>
          )}
        </g>
      ))}
      <text x={360} y={180} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Pipeline de ingestao: Sensores ao Digital Twin State Store</text>
    </svg>
  );
}

function DTDLGraphSVG() {
  return (
    <svg viewBox="0 0 640 300" style={{ width: '100%', maxWidth: 640, display: 'block', margin: '1.5rem auto' }}>
      {/* Central Interface */}
      <rect x={230} y={100} width={180} height={80} rx={8} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={2} />
      <text x={320} y={132} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>Interface</text>
      <text x={320} y={150} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">dtmi:example:Motor;1</text>
      <text x={320} y={166} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Properties · Telemetry · Commands</text>

      {/* Property node */}
      <rect x={30} y={60} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={100} y={82} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Property</text>
      <text x={100} y={99} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">temperature: double</text>
      <line x1={170} y1={85} x2={230} y2={128} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      {/* Telemetry node */}
      <rect x={30} y={160} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={100} y={182} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Telemetry</text>
      <text x={100} y={199} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">vibration: float[]</text>
      <line x1={170} y1={185} x2={230} y2={155} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      {/* Command node */}
      <rect x={470} y={60} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={540} y={82} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Command</text>
      <text x={540} y={99} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">setSpeed(rpm: int)</text>
      <line x1={470} y1={85} x2={410} y2={128} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      {/* Relationship node */}
      <rect x={470} y={160} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={540} y={182} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Relationship</text>
      <text x={540} y={199} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">isPartOf: Factory</text>
      <line x1={470} y1={185} x2={410} y2={155} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      {/* Component node */}
      <rect x={245} y={220} width={150} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={320} y={242} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Component</text>
      <text x={320} y={259} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">sensor: TemperatureSensor</text>
      <line x1={320} y1={180} x2={320} y2={220} stroke={color} strokeWidth={1} strokeDasharray="4 2" />

      <text x={320} y={290} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">DTDL v2 — Azure Digital Twins Definition Language (JSON-LD)</text>
    </svg>
  );
}

function StateMachineSVG() {
  return (
    <svg viewBox="0 0 680 280" style={{ width: '100%', maxWidth: 680, display: 'block', margin: '1.5rem auto' }}>
      {/* States */}
      <ellipse cx={100} cy={130} rx={70} ry={36} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={2} />
      <text x={100} y={127} textAnchor="middle" fontSize={12} fontWeight={700} fill="#f97316">IDLE</text>
      <text x={100} y={143} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">temp normal</text>

      <ellipse cx={300} cy={100} rx={80} ry={36} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={2} />
      <text x={300} y={97} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>RUNNING</text>
      <text x={300} y={113} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">producao activa</text>

      <ellipse cx={520} cy={100} rx={80} ry={36} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={2} />
      <text x={520} y={97} textAnchor="middle" fontSize={12} fontWeight={700} fill="#f97316">WARNING</text>
      <text x={520} y={113} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">anomalia detectada</text>

      <ellipse cx={520} cy={210} rx={80} ry={36} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={2} />
      <text x={520} y={207} textAnchor="middle" fontSize={12} fontWeight={700} fill="#f97316">FAULT</text>
      <text x={520} y={223} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">paragem emergencia</text>

      <ellipse cx={300} cy={210} rx={80} ry={36} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={2} />
      <text x={300} y={207} textAnchor="middle" fontSize={12} fontWeight={700} fill="#f97316">MAINTENANCE</text>
      <text x={300} y={223} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">manutencao programada</text>

      {/* Transitions */}
      <line x1={170} y1={115} x2={220} y2={104} stroke={color} strokeWidth={1.5} />
      <polygon points="220,100 230,104 220,110" fill={color} />
      <text x={195} y={105} textAnchor="middle" fontSize={8} fill={color}>start</text>

      <line x1={380} y1={100} x2={440} y2={100} stroke="#f59e0b" strokeWidth={1.5} />
      <polygon points="440,96 450,100 440,104" fill="#f59e0b" />
      <text x={410} y={94} textAnchor="middle" fontSize={8} fill="#f59e0b">thresh</text>

      <line x1={520} y1={136} x2={520} y2={174} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="516,174 520,184 524,174" fill="#f97316" />
      <text x={535} y={162} fontSize={8} fill="#f97316">critical</text>

      <line x1={440} y1={210} x2={380} y2={210} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="380,206 370,210 380,214" fill="#f97316" />
      <text x={410} y={204} textAnchor="middle" fontSize={8} fill="#f97316">schedule</text>

      <line x1={220} y1={210} x2={170} y2={148} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="166,148 170,138 174,148" fill="#f97316" />
      <text x={180} y={185} fontSize={8} fill="#f97316">done</text>

      <text x={340} y={270} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Digital Twin State Machine — transicoes determinadas por eventos de telemetria</text>
    </svg>
  );
}

function BidirectionalSyncSVG() {
  return (
    <svg viewBox="0 0 680 260" style={{ width: '100%', maxWidth: 680, display: 'block', margin: '1.5rem auto' }}>
      {/* Physical */}
      <rect x={30} y={70} width={180} height={120} rx={10} fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth={2} />
      <text x={120} y={100} textAnchor="middle" fontSize={13} fontWeight={700} fill="#f59e0b">Physical Asset</text>
      <text x={120} y={118} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Sensor readings</text>
      <text x={120} y={133} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Actuator state</text>
      <text x={120} y={148} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Physical properties</text>
      <text x={120} y={168} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">e.g. CNC Machine</text>

      {/* Digital Twin */}
      <rect x={470} y={70} width={180} height={120} rx={10} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={2} />
      <text x={560} y={100} textAnchor="middle" fontSize={13} fontWeight={700} fill={color}>Digital Twin</text>
      <text x={560} y={118} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Twin properties</text>
      <text x={560} y={133} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Simulation state</text>
      <text x={560} y={148} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Predicted behaviour</text>
      <text x={560} y={168} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">e.g. Azure DT Instance</text>

      {/* Physical to Digital arrow */}
      <line x1={210} y1={110} x2={470} y2={110} stroke="#f97316" strokeWidth={2} />
      <polygon points="470,105 482,110 470,115" fill="#f97316" />
      <text x={340} y={100} textAnchor="middle" fontSize={10} fontWeight={600} fill="#f97316">Telemetria / MQTT / OPC-UA</text>
      <text x={340} y={120} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">anomaly detection, state update</text>

      {/* Digital to Physical arrow */}
      <line x1={470} y1={155} x2={210} y2={155} stroke="#f97316" strokeWidth={2} />
      <polygon points="210,150 198,155 210,160" fill="#f97316" />
      <text x={340} y={145} textAnchor="middle" fontSize={10} fontWeight={600} fill="#f97316">Set-point / OTA / Command</text>
      <text x={340} y={165} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">actuation, firmware update</text>

      <text x={340} y={245} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Sincronizacao bidirecional: physical-to-digital e digital-to-physical</text>
    </svg>
  );
}

function ThreatModelSVG() {
  const threats = [
    { x: 60,  y: 60,  label: 'Sensor Spoofing',   color: '#f97316' },
    { x: 240, y: 60,  label: 'Man-in-the-Middle',  color: '#f97316' },
    { x: 420, y: 60,  label: 'Model Theft',        color: '#f97316' },
    { x: 60,  y: 170, label: 'Actuation Attack',   color: '#f97316' },
    { x: 240, y: 170, label: 'DoS / Flooding',     color: '#f97316' },
    { x: 420, y: 170, label: 'Data Tampering',     color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 620 280" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '1.5rem auto' }}>
      <text x={310} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="var(--text-primary)">Modelo de Ameacas — Digital Twin IoT</text>
      {threats.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width={150} height={60} rx={8} fill={t.color} fillOpacity={0.1} stroke={t.color} strokeWidth={1.5} />
          <text x={t.x + 75} y={t.y + 28} textAnchor="middle" fontSize={10} fontWeight={700} fill={t.color}>{t.label}</text>
          <text x={t.x + 75} y={t.y + 46} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">
            {i === 0 ? 'Falsos dados de sensor' : i === 1 ? 'Intercept protocolo' : i === 2 ? 'Roubo modelo DTDL' : i === 3 ? 'Comandos maliciosos' : i === 4 ? 'Sobrecarga canal' : 'Alteracao estado twin'}
          </text>
        </g>
      ))}
      {/* Zero Trust label */}
      <rect x={200} y={245} width={220} height={28} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1} />
      <text x={310} y={265} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Zero Trust Architecture</text>
    </svg>
  );
}

function AzureDTArchSVG() {
  const boxes = [
    { x: 20,  y: 80,  w: 120, h: 50, label: 'DTDL Models',     color: '#f97316' },
    { x: 180, y: 80,  w: 120, h: 50, label: 'Twin Graph',       color: '#f97316' },
    { x: 340, y: 80,  w: 120, h: 50, label: 'Event Routes',     color: '#f97316' },
    { x: 500, y: 80,  w: 120, h: 50, label: 'TSI / ADX',        color: '#f97316' },
    { x: 340, y: 180, w: 120, h: 50, label: 'Event Hub',        color: '#f97316' },
    { x: 500, y: 180, w: 120, h: 50, label: 'Power BI',         color: '#f97316' },
    { x: 20,  y: 180, w: 120, h: 50, label: 'IoT Hub',          color: '#f97316' },
    { x: 180, y: 180, w: 120, h: 50, label: 'Functions',        color: '#f97316' },
  ];
  const arrows = [
    { x1: 140, y1: 105, x2: 180, y2: 105 },
    { x1: 300, y1: 105, x2: 340, y2: 105 },
    { x1: 460, y1: 105, x2: 500, y2: 105 },
    { x1: 80,  y1: 130, x2: 80,  y2: 180 },
    { x1: 140, y1: 205, x2: 180, y2: 205 },
    { x1: 300, y1: 205, x2: 340, y2: 205 },
    { x1: 460, y1: 205, x2: 500, y2: 205 },
    { x1: 400, y1: 130, x2: 400, y2: 180 },
  ];
  return (
    <svg viewBox="0 0 660 270" style={{ width: '100%', maxWidth: 660, display: 'block', margin: '1.5rem auto' }}>
      <text x={330} y={40} textAnchor="middle" fontSize={13} fontWeight={700} fill={color}>Azure Digital Twins — Arquitectura</text>
      {arrows.map((a, i) => (
        <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="var(--text-secondary)" strokeWidth={1.2} strokeDasharray="4 2" />
      ))}
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={6} fill={b.color} fillOpacity={0.1} stroke={b.color} strokeWidth={1.5} />
          <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 5} textAnchor="middle" fontSize={10} fontWeight={600} fill={b.color}>{b.label}</text>
        </g>
      ))}
      <text x={330} y={258} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Fluxo: IoT Hub → Twin Graph via Functions → Event Routes → Analytics</text>
    </svg>
  );
}

function TwinMakerArchSVG() {
  return (
    <svg viewBox="0 0 660 260" style={{ width: '100%', maxWidth: 660, display: 'block', margin: '1.5rem auto' }}>
      <text x={330} y={30} textAnchor="middle" fontSize={13} fontWeight={700} fill={color}>AWS IoT TwinMaker — Arquitectura</text>
      {/* Workspace */}
      <rect x={230} y={50} width={200} height={55} rx={8} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={2} />
      <text x={330} y={76} textAnchor="middle" fontSize={12} fontWeight={700} fill="#f97316">Workspace</text>
      <text x={330} y={94} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Logical container para DTs</text>

      {/* Entities */}
      <rect x={90} y={155} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={160} y={178} textAnchor="middle" fontSize={11} fontWeight={600} fill="#f97316">Entities</text>
      <text x={160} y={195} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Componentes e hierarquia</text>
      <line x1={230} y1={95} x2={160} y2={155} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      {/* Connectors */}
      <rect x={260} y={155} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={330} y={178} textAnchor="middle" fontSize={11} fontWeight={600} fill={color}>Connectors</text>
      <text x={330} y={195} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">S3, Timestream, Sitewise</text>
      <line x1={330} y1={105} x2={330} y2={155} stroke={color} strokeWidth={1} strokeDasharray="4 2" />

      {/* Grafana */}
      <rect x={430} y={155} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={500} y={178} textAnchor="middle" fontSize={11} fontWeight={600} fill="#f97316">Grafana Plugin</text>
      <text x={500} y={195} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Visualizacao e dashboards</text>
      <line x1={430} y1={95} x2={500} y2={155} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      {/* Scene */}
      <rect x={90} y={50} width={120} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={150} y={73} textAnchor="middle" fontSize={11} fontWeight={600} fill="#f97316">Scene</text>
      <text x={150} y={90} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">3D / gLTF viewer</text>
      <line x1={210} y1={75} x2={230} y2={75} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      {/* IoT SiteWise */}
      <rect x={450} y={50} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={520} y={73} textAnchor="middle" fontSize={11} fontWeight={600} fill="#f97316">IoT SiteWise</text>
      <text x={520} y={90} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">Asset modelling</text>
      <line x1={430} y1={75} x2={450} y2={75} stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />

      <text x={330} y={248} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">TwinMaker: Workspace centraliza entidades, conectores e visualizacao 3D</text>
    </svg>
  );
}

function SynthesisArchSVG() {
  return (
    <svg viewBox="0 0 720 360" style={{ width: '100%', maxWidth: 720, display: 'block', margin: '1.5rem auto' }}>
      <text x={360} y={24} textAnchor="middle" fontSize={14} fontWeight={800} fill={color}>Arquitectura de Referencia IoT-to-Digital-Twin</text>

      {/* Row 1: Physical */}
      <rect x={20}  y={50} width={100} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={70}  y={73} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Sensores</text>
      <text x={70}  y={89} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">IoT Devices</text>

      <rect x={140} y={50} width={100} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={190} y={73} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Actuadores</text>
      <text x={190} y={89} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">PLCs / RTUs</text>

      <line x1={120} y1={75} x2={140} y2={75} stroke="#f97316" strokeWidth={1} />

      {/* Row 1 to Row 2 */}
      <line x1={190} y1={100} x2={190} y2={130} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="186,130 190,140 194,130" fill="#f97316" />
      <line x1={70}  y1={100} x2={70}  y2={130} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="66,130 70,140 74,130" fill="#f97316" />

      {/* Row 2: Edge */}
      <rect x={20}  y={140} width={100} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={70}  y={163} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Far Edge</text>
      <text x={70}  y={179} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">Micro / MCU</text>

      <rect x={140} y={140} width={100} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={190} y={163} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Edge Node</text>
      <text x={190} y={179} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">IoT Edge / Greengrass</text>
      <line x1={120} y1={165} x2={140} y2={165} stroke="#f97316" strokeWidth={1} />

      {/* Row 2 to Row 3: Edge Node → Kafka */}
      <line x1={240} y1={165} x2={278} y2={165} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="274,161 284,165 274,169" fill="#f97316" />

      {/* Row 3: Ingestion */}
      <rect x={280} y={140} width={130} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={345} y={163} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Kafka / Event Hub</text>
      <text x={345} y={179} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">Streaming ingestao</text>

      <rect x={430} y={140} width={130} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={495} y={163} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Stream Processing</text>
      <text x={495} y={179} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">Flink / ASA / Spark</text>
      <line x1={410} y1={165} x2={430} y2={165} stroke="#f97316" strokeWidth={1} />

      {/* Row 3 to Row 4: Stream Processing → DT Engine */}
      <line x1={495} y1={190} x2={495} y2={238} stroke={color} strokeWidth={1.5} />
      <polygon points="491,234 495,244 499,234" fill={color} />

      {/* Row 4: DT Platform */}
      <rect x={430} y={240} width={130} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={2} />
      <text x={495} y={263} textAnchor="middle" fontSize={10} fontWeight={700} fill={color}>Digital Twin Engine</text>
      <text x={495} y={279} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">State / Graph / Sim</text>

      {/* Stream Processing → Dashboard */}
      <line x1={560} y1={165} x2={618} y2={165} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="614,161 624,165 614,169" fill="#f97316" />

      {/* DT Engine → AI/ML */}
      <line x1={560} y1={265} x2={618} y2={265} stroke="#f97316" strokeWidth={1.5} />
      <polygon points="614,261 624,265 614,269" fill="#f97316" />

      {/* Row 5: Apps */}
      <rect x={620} y={140} width={90} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={665} y={163} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Dashboard</text>
      <text x={665} y={179} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">Power BI / Grafana</text>

      <rect x={620} y={240} width={90} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={665} y={263} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">AI / ML</text>
      <text x={665} y={279} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">Predictive Analytics</text>
      <line x1={665} y1={190} x2={665} y2={240} stroke="#f97316" strokeWidth={1} strokeDasharray="3 2" />

      {/* Security overlay */}
      <rect x={270} y={240} width={140} height={50} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1} strokeDasharray="4 2" />
      <text x={340} y={263} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">Zero Trust / PKI</text>
      <text x={340} y={279} textAnchor="middle" fontSize={8.5} fill="var(--text-secondary)">mTLS · cert identity</text>

      <text x={360} y={348} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Arquitectura completa IoT-to-DT: sensores, edge, ingestao, motor DT, aplicacoes</text>
    </svg>
  );
}

function DecisionTreeSVG() {
  return (
    <svg viewBox="0 0 600 320" style={{ width: '100%', maxWidth: 600, display: 'block', margin: '1.5rem auto' }}>
      <text x={300} y={24} textAnchor="middle" fontSize={13} fontWeight={700} fill="var(--text-primary)">Arvore de Decisao — Seleccao de Protocolo</text>

      {/* Root */}
      <rect x={220} y={40} width={160} height={44} rx={8} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={2} />
      <text x={300} y={60} textAnchor="middle" fontSize={11} fontWeight={700} fill={color}>Ambiente Industrial?</text>
      <text x={300} y={76} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">OT vs IT network</text>

      {/* Branch: Yes */}
      <line x1={260} y1={84} x2={140} y2={130} stroke={color} strokeWidth={1.5} />
      <text x={155} y={113} textAnchor="middle" fontSize={9} fill="#f97316">Sim</text>

      <rect x={60} y={130} width={160} height={44} rx={8} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={140} y={150} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Latencia Critica?</text>
      <text x={140} y={166} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">menos de 10ms?</text>

      <line x1={100} y1={174} x2={80} y2={220} stroke="#f59e0b" strokeWidth={1.5} />
      <text x={75} y={204} textAnchor="middle" fontSize={9} fill="#f59e0b">Sim</text>
      <rect x={20} y={220} width={120} height={36} rx={6} fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth={1.5} />
      <text x={80} y={244} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f59e0b">Profinet / Modbus</text>

      <line x1={175} y1={174} x2={195} y2={220} stroke="#f97316" strokeWidth={1.5} />
      <text x={205} y={204} textAnchor="middle" fontSize={9} fill="#f97316">Nao</text>
      <rect x={140} y={220} width={120} height={36} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={200} y={244} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">OPC-UA</text>

      {/* Branch: No */}
      <line x1={340} y1={84} x2={460} y2={130} stroke={color} strokeWidth={1.5} />
      <text x={445} y={113} textAnchor="middle" fontSize={9} fill="#f97316">Nao</text>

      <rect x={380} y={130} width={160} height={44} rx={8} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={460} y={150} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f97316">Dispositivos IoT?</text>
      <text x={460} y={166} textAnchor="middle" fontSize={9} fill="var(--text-secondary)">baixa potencia?</text>

      <line x1={420} y1={174} x2={390} y2={220} stroke="#f97316" strokeWidth={1.5} />
      <text x={392} y={204} textAnchor="middle" fontSize={9} fill="#f97316">Sim</text>
      <rect x={320} y={220} width={120} height={36} rx={6} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth={1.5} />
      <text x={380} y={244} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f97316">MQTT / LoRaWAN</text>

      <line x1={500} y1={174} x2={520} y2={220} stroke="#f97316" strokeWidth={1.5} />
      <text x={528} y={204} textAnchor="middle" fontSize={9} fill="#f97316">Nao</text>
      <rect x={460} y={220} width={120} height={36} rx={6} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth={1.5} />
      <text x={520} y={244} textAnchor="middle" fontSize={10} fontWeight={700} fill={color}>AMQP / HTTPS</text>

      <text x={300} y={308} textAnchor="middle" fontSize={10} fill="var(--text-secondary)">Decisao baseada em ambiente, latencia e tipo de dispositivo</text>
    </svg>
  );
}

export default function DT2() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>
      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Arquitectura &amp; IoT</h1>
      <p style={S.lead}>
        Este módulo explora a arquitectura técnica dos Digital Twins, desde os sensores no terreno até às plataformas
        cloud, passando pelos protocolos de comunicação, edge computing, ingestão de dados em tempo real, modelos de
        descrição semântica, gestão de estado, sincronização bidirecional e segurança. Uma visão completa para
        arquitectos de soluções IoT industriais.
      </p>

      {/* SECTION 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Arquitectura de Referência</h2>
        <p style={S.p}>
          A arquitectura de referência dos Digital Twins segue o modelo da Industrial Internet Consortium (IIC/IIRA),
          que organiza os componentes em cinco camadas funcionais. Cada camada tem responsabilidades distintas e
          interfaces bem definidas, permitindo heterogeneidade tecnológica dentro de cada nível.
        </p>
        <LayerStackSVG />
        <div style={S.highlight}>
          <strong>IIC/IIRA</strong> — Industrial Internet Reference Architecture. Publicada em 2015, define cinco
          domínios funcionais: Control, Operations, Information, Application e Business. A arquitectura de 5 camadas
          acima é uma simplificação operacional muito usada em projectos reais.
        </div>
        <h3 style={S.h3}>Camadas em detalhe</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Camada</th>
              <th style={S.th}>Responsabilidade</th>
              <th style={S.th}>Exemplos de tecnologia</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Physical Layer</td><td style={S.td}>Recolha de dados físicos, actuação</td><td style={S.td}>PT100, MEMS, encoders, válvulas</td></tr>
            <tr><td style={S.td}>Connectivity</td><td style={S.td}>Transporte seguro de dados</td><td style={S.td}>OPC-UA, MQTT, 5G, LoRaWAN</td></tr>
            <tr><td style={S.td}>Data Ingestion</td><td style={S.td}>Streaming, buffering, parsing</td><td style={S.td}>Kafka, Azure Event Hubs, Kinesis</td></tr>
            <tr><td style={S.td}>DT Engine</td><td style={S.td}>Estado, simulação, grafo de relações</td><td style={S.td}>Azure DT, AWS TwinMaker, ThingWorx</td></tr>
            <tr><td style={S.td}>Application Layer</td><td style={S.td}>Visualização, alertas, AI/ML</td><td style={S.td}>Power BI, Grafana, Azure ML</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Nota: nem todos os projectos requerem todas as camadas. Em cenários de baixa complexidade, o Edge pode
          conectar directamente ao DT Engine ignorando um broker de streaming dedicado.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Sensores e Actuadores</h2>
        <p style={S.p}>
          Os sensores são os olhos e ouvidos do Digital Twin — sem dados de qualidade, o gémeo digital é apenas um
          modelo estático. A escolha do sensor influencia directamente a fidelidade do twin, o custo de infraestrutura
          e os requisitos de banda larga.
        </p>
        <SensorPlacementSVG />
        <h3 style={S.h3}>Tipos de sensor por caso de uso</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Sensor</th>
              <th style={S.th}>Protocolo típico</th>
              <th style={S.th}>Taxa de amostragem</th>
              <th style={S.th}>Custo relativo</th>
              <th style={S.th}>Caso de uso DT</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Temperatura (PT100)</td><td style={S.td}>4-20 mA / Modbus</td><td style={S.td}>1 Hz</td><td style={S.td}>Baixo</td><td style={S.td}>Monitorização térmica motor</td></tr>
            <tr><td style={S.td}>Vibração (MEMS)</td><td style={S.td}>SPI / OPC-UA</td><td style={S.td}>1-10 kHz</td><td style={S.td}>Médio</td><td style={S.td}>Detecção fadiga rolamentos</td></tr>
            <tr><td style={S.td}>Pressão (piezo)</td><td style={S.td}>4-20 mA / HART</td><td style={S.td}>10 Hz</td><td style={S.td}>Médio</td><td style={S.td}>Controlo fluxo tubagens</td></tr>
            <tr><td style={S.td}>Câmera (RGB/IR)</td><td style={S.td}>GigE / USB3</td><td style={S.td}>30 fps</td><td style={S.td}>Alto</td><td style={S.td}>Inspecção visual qualidade</td></tr>
            <tr><td style={S.td}>LiDAR (3D)</td><td style={S.td}>Ethernet / ROS2</td><td style={S.td}>20 fps</td><td style={S.td}>Muito Alto</td><td style={S.td}>Mapeamento espacial 3D</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Actuadores e Feedback Loop</h3>
        <p style={S.p}>
          Os actuadores recebem comandos do Digital Twin Engine para ajustar o comportamento do activo físico:
          variadores de frequência para velocidade de motor, válvulas proporcionais para caudal, sistemas de heating
          para controlo de temperatura. O feedback loop fecha o ciclo: o actuador age, o sensor mede o resultado, o
          DT actualiza o seu estado. Este loop é fundamental para simulações preditivas e controlo em malha fechada.
        </p>
        <div style={S.highlight}>
          <strong>Regra de ouro:</strong> a qualidade dos dados do sensor é o factor limitante da fidelidade do
          Digital Twin. Sensor com drift de 2% introduz erro sistemático cumulativo no modelo. Calibração periódica
          e detecção de outliers no edge são essenciais.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Protocolos de Comunicação</h2>
        <p style={S.p}>
          A selecção do protocolo de comunicação é uma das decisões mais críticas na arquitectura IoT para Digital
          Twins. Afecta latência, confiabilidade, segurança, consumo energético e custo de integração. Não existe
          protocolo universal — a escolha depende do contexto industrial, requisitos de latência e topologia de rede.
        </p>
        <ProtocolComparisonSVG />
        <h3 style={S.h3}>Protocolos em detalhe</h3>
        <p style={S.p}>
          <strong>OPC-UA (IEC 62541)</strong> — O padrão industrial por excelência para automação fabril. Oferece
          modelo semântico rico (information model), segurança integrada (certificados X.509, encriptação TLS),
          descoberta de serviços e suporte para pub/sub (OPC-UA PubSub via MQTT ou AMQP). Latência típica de 10ms,
          confiabilidade superior a 99%. Utilizado em PLCs Siemens, Beckhoff, Rockwell.
        </p>
        <p style={S.p}>
          <strong>MQTT (ISO/IEC 20922)</strong> — Protocolo pub/sub de baixo overhead (cabeçalho de 2 bytes).
          Ideal para dispositivos com recursos limitados e redes instáveis. QoS em três níveis: at-most-once,
          at-least-once, exactly-once. Utilizado massivamente em IoT consumer e industrial. Brokers: Mosquitto,
          HiveMQ, Azure IoT Hub (MQTT endpoint).
        </p>
        <p style={S.p}>
          <strong>AMQP 1.0</strong> — Protocolo de mensageria orientado a filas com garantias de entrega robustas.
          Utilizado pelo Azure Service Bus e Azure Event Hubs. Suporta transacções e confirmações de entrega.
          Preferido quando a ordem e entrega garantida são críticas.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Protocolo</th>
              <th style={S.th}>Latência</th>
              <th style={S.th}>Confiabilidade</th>
              <th style={S.th}>Segurança</th>
              <th style={S.th}>Contexto ideal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>OPC-UA</td><td style={S.td}>5-20 ms</td><td style={S.td}>★★★★★</td><td style={S.td}>TLS + X.509</td><td style={S.td}>Automação industrial OT</td></tr>
            <tr><td style={S.td}>MQTT</td><td style={S.td}>10-50 ms</td><td style={S.td}>★★★★</td><td style={S.td}>TLS 1.2/1.3</td><td style={S.td}>IoT, dispositivos baixa potência</td></tr>
            <tr><td style={S.td}>AMQP</td><td style={S.td}>15-40 ms</td><td style={S.td}>★★★★★</td><td style={S.td}>SASL + TLS</td><td style={S.td}>Mensageria enterprise</td></tr>
            <tr><td style={S.td}>Modbus RTU</td><td style={S.td}>1-5 ms</td><td style={S.td}>★★★</td><td style={S.td}>Nenhuma nativa</td><td style={S.td}>Legacy PLC, SCADA</td></tr>
            <tr><td style={S.td}>BACnet</td><td style={S.td}>10-50 ms</td><td style={S.td}>★★★★</td><td style={S.td}>BACnet/SC TLS</td><td style={S.td}>Building automation (HVAC)</td></tr>
            <tr><td style={S.td}>Profinet</td><td style={S.td}>menor que 1 ms</td><td style={S.td}>★★★★★</td><td style={S.td}>VLAN isolation</td><td style={S.td}>Motion control, robotics</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          OPC-UA Foundation e MQTT estão a convergir: OPC-UA PubSub permite publicar dados OPC-UA sobre transporte
          MQTT ou AMQP, combinando o modelo semântico rico do OPC-UA com a leveza do MQTT.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Edge Computing para Digital Twins</h2>
        <p style={S.p}>
          O Edge Computing é um componente crítico para Digital Twins que requerem resposta em tempo real. Em vez de
          enviar todos os dados brutos para a cloud, o edge filtra, agrega e processa localmente, reduzindo latência,
          largura de banda e custos de transferência de dados.
        </p>
        <EdgeArchSVG />
        <h3 style={S.h3}>Justificação do Edge</h3>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Latência:</strong> controlo em malha fechada requer resposta em menos de 10ms — inviável via cloud (round-trip mínimo de 50ms)</li>
          <li><strong>Custo de bandwidth:</strong> sensores de vibração a 10kHz geram 80 MB/hora por sensor — enviar tudo para cloud é proibitivo</li>
          <li><strong>Privacidade e soberania:</strong> dados de produção sensíveis podem não poder sair do perímetro fabril</li>
          <li><strong>Resiliência offline:</strong> produção não pode parar se a ligação cloud cair</li>
        </ul>
        <h3 style={S.h3}>Plataformas de Edge</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Fabricante</th>
              <th style={S.th}>Pontos fortes</th>
              <th style={S.th}>Integração DT</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Azure IoT Edge</td><td style={S.td}>Microsoft</td><td style={S.td}>Módulos Docker, integração ADT nativa</td><td style={S.td}>Azure Digital Twins</td></tr>
            <tr><td style={S.td}>AWS Greengrass</td><td style={S.td}>Amazon</td><td style={S.td}>Lambda @ Edge, ML Inference</td><td style={S.td}>AWS TwinMaker</td></tr>
            <tr><td style={S.td}>NVIDIA Jetson</td><td style={S.td}>NVIDIA</td><td style={S.td}>GPU inference, computer vision</td><td style={S.td}>Agnóstico (REST/MQTT)</td></tr>
            <tr><td style={S.td}>EdgeX Foundry</td><td style={S.td}>Linux Foundation</td><td style={S.td}>Open source, agnóstico cloud</td><td style={S.td}>Qualquer plataforma DT</td></tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Padrões de sincronização Edge-to-Cloud</h3>
        <p style={S.p}>
          <strong>Store-and-Forward:</strong> o edge armazena dados localmente e envia em batch quando a ligação está
          disponível. Garante zero perda de dados mesmo em conectividade intermitente.
        </p>
        <p style={S.p}>
          <strong>Telemetry Aggregation:</strong> o edge calcula estatísticas (média, min, max, percentis) por janela
          temporal e envia apenas os agregados, reduzindo volume em 99%.
        </p>
        <p style={S.p}>
          <strong>Event-Driven Upload:</strong> o edge só envia dados quando detecta anomalia ou mudança de estado
          significativa (change-of-value), minimizando tráfego desnecessário.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Data Ingestion e Streaming</h2>
        <p style={S.p}>
          O pipeline de ingestão é a espinha dorsal do Digital Twin — é o caminho pelo qual os dados dos sensores
          chegam ao estado do twin em tempo (quase) real. A escolha de tecnologias de streaming é determinante para
          throughput, latência fim-a-fim e capacidade de replay histórico.
        </p>
        <PipelineSVG />
        <h3 style={S.h3}>Apache Kafka</h3>
        <p style={S.p}>
          Kafka é o sistema de streaming de referência para ingestão de alta throughput. Arquitectado como log
          distribuído e imutável, permite múltiplos consumidores a velocidades independentes, replay histórico de
          eventos, retenção configurável (dias a semanas) e throughput de milhões de mensagens por segundo.
          Particionamento por device ID garante ordenação por sensor. Utilizado por empresas como LinkedIn, Netflix,
          e plataformas industriais como Siemens MindSphere.
        </p>
        <h3 style={S.h3}>Azure Event Hubs e IoT Hub</h3>
        <p style={S.p}>
          Azure IoT Hub fornece gestão de dispositivos (device registry, provisioning, OTA updates) e transporte
          seguro (MQTT/AMQP/HTTPS com certificados). Azure Event Hubs é o broker de streaming compatível com protocolo
          Kafka, escalando até milhões de eventos por segundo com garantias de ordenação por partition.
        </p>
        <h3 style={S.h3}>Bases de dados Time-Series</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Base de dados</th>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Pontos fortes</th>
              <th style={S.th}>Integração DT</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>InfluxDB</td><td style={S.td}>Open source TSDB</td><td style={S.td}>Flux query, alta compressão</td><td style={S.td}>Grafana, Node-RED</td></tr>
            <tr><td style={S.td}>TimescaleDB</td><td style={S.td}>PostgreSQL extension</td><td style={S.td}>SQL familiar, hypertables</td><td style={S.td}>Grafana, SQL clients</td></tr>
            <tr><td style={S.td}>Azure Data Explorer</td><td style={S.td}>Managed cloud TSDB</td><td style={S.td}>KQL, integração nativa ADT</td><td style={S.td}>Azure Digital Twins</td></tr>
            <tr><td style={S.td}>Amazon Timestream</td><td style={S.td}>Managed cloud TSDB</td><td style={S.td}>Serverless, SQL-like</td><td style={S.td}>AWS TwinMaker</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Para Digital Twins, a base de dados time-series serve dois papéis: (1) alimentar o estado actual do twin
          com a leitura mais recente; (2) fornecer histórico para análise de tendências, treino de modelos ML e
          simulação de cenários passados.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Digital Twin Description Languages</h2>
        <p style={S.p}>
          Para que um Digital Twin seja interoperável, partilhável e compreensível por máquinas, é necessário um
          formalismo que descreva a estrutura, propriedades, telemetria, comandos e relações de cada twin. As
          Linguagens de Descrição surgiram como padrão semântico para este fim.
        </p>
        <DTDLGraphSVG />
        <h3 style={S.h3}>Azure DTDL (Digital Twins Definition Language)</h3>
        <p style={S.p}>
          DTDL v2/v3 é um formato JSON-LD desenvolvido pela Microsoft. Define Interfaces (análogas a classes),
          Properties (estado persistente), Telemetry (dados de sensor em tempo real), Commands (acções invocáveis),
          Relationships (ligações entre twins) e Components (composição de sub-modelos). Um modelo DTDL é
          machine-readable, permitindo ao Azure DT engine construir automaticamente o grafo de twins.
        </p>
        <h3 style={S.h3}>Comparação de linguagens de descrição</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Standard</th>
              <th style={S.th}>Organização</th>
              <th style={S.th}>Formato</th>
              <th style={S.th}>Adopção</th>
              <th style={S.th}>Foco</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>DTDL v3</td><td style={S.td}>Microsoft</td><td style={S.td}>JSON-LD</td><td style={S.td}>Alta (Azure)</td><td style={S.td}>Azure DT ecosystem</td></tr>
            <tr><td style={S.td}>W3C WoT TD</td><td style={S.td}>W3C</td><td style={S.td}>JSON-LD</td><td style={S.td}>Média (open)</td><td style={S.td}>Web of Things, interop</td></tr>
            <tr><td style={S.td}>AAS (IEC 63278)</td><td style={S.td}>Plattform Industrie 4.0</td><td style={S.td}>XML/JSON/RDF</td><td style={S.td}>Alta (indústria DE)</td><td style={S.td}>Asset lifecycle, Indústria 4.0</td></tr>
            <tr><td style={S.td}>SysML</td><td style={S.td}>OMG</td><td style={S.td}>UML-based</td><td style={S.td}>Média (engenharia)</td><td style={S.td}>System modelling</td></tr>
          </tbody>
        </table>
        <div style={S.highlight}>
          <strong>Asset Administration Shell (AAS)</strong> — O modelo de referência da Indústria 4.0 alemã. Cada
          activo físico tem uma AAS digital com submodelos padronizados: Nameplate, TechnicalData, Handover,
          Documentation, Maintenance. Promovido pela ZVEI, Bitkom e Plattform Industrie 4.0. Converge com DTDL
          através de mapeamentos publicados pela Microsoft e Siemens.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 7 */}
      <section style={S.section}>
        <h2 style={S.h2}>7. State Management</h2>
        <p style={S.p}>
          O estado do Digital Twin é o snapshot completo de todas as suas propriedades num dado instante t. Gerir
          este estado de forma consistente, durável e auditável é um dos desafios técnicos mais complexos da
          arquitectura de DTs, especialmente em sistemas distribuídos com múltiplas fontes de dados.
        </p>
        <StateMachineSVG />
        <h3 style={S.h3}>Definição de Estado</h3>
        <p style={S.p}>
          Estado (State) de um DT num instante t inclui: valores actuais de todas as propriedades (temperatura,
          velocidade, pressão), estado da máquina de estados finita (IDLE, RUNNING, WARNING, FAULT), histórico
          de telemetria para janela temporal configurável, e metadata do modelo (versão DTDL, timestamp de última
          actualização, source de cada propriedade).
        </p>
        <h3 style={S.h3}>Event Sourcing Pattern</h3>
        <p style={S.p}>
          Em vez de armazenar apenas o estado actual, o Event Sourcing persiste todos os eventos que causaram
          mudanças de estado. O estado actual é reconstruído por replay dos eventos. Vantagens: auditoria completa,
          capacidade de "time travel" (reconstituir estado em qualquer instante passado), e base para simulação
          de cenários alternativos.
        </p>
        <h3 style={S.h3}>Consistência em sistemas distribuídos</h3>
        <p style={S.p}>
          O teorema CAP (Consistency, Availability, Partition tolerance) aplica-se directamente a DTs distribuídos.
          Na prática, a maioria dos sistemas de DT escolhe AP (Available + Partition tolerant) com consistência
          eventual: o estado do twin pode estar ligeiramente desactualizado mas o sistema mantém disponibilidade.
          Para propriedades críticas de segurança (e.g. estado de válvula de emergência), pode-se optar por CP
          com strong consistency para esse subconjunto.
        </p>
        <div style={S.note}>
          Estratégia common: manter o "hot state" em memória (Redis/cache) para consultas em tempo real,
          e persistir no "cold store" (time-series DB) para histórico e análise. O DT engine mantém a sincronização
          entre ambas as camadas.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 8 */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Sincronização Bidirecional</h2>
        <p style={S.p}>
          A sincronização bidirecional é a característica que distingue um Digital Twin verdadeiro de um simples
          dashboard de monitorização. O twin não só recebe dados do mundo físico como também envia comandos e
          ajustes de volta, criando um loop de controlo fechado entre o domínio físico e o digital.
        </p>
        <BidirectionalSyncSVG />
        <h3 style={S.h3}>Physical-to-Digital (P2D)</h3>
        <p style={S.p}>
          Fluxo de dados do activo físico para o twin digital. Inclui: ingestão de telemetria (leituras de sensores),
          detecção de anomalias no edge (antes de atingir o twin), actualização de propriedades do twin (temperatura,
          velocidade, estado operacional), e flagging de alertas quando thresholds são excedidos. A frequência de
          actualização varia de milissegundos (controlo em tempo real) a minutos (monitorização de tendências).
        </p>
        <h3 style={S.h3}>Digital-to-Physical (D2P)</h3>
        <p style={S.p}>
          Fluxo de comandos do twin digital para o activo físico. Inclui: ajuste de set-points (velocidade de
          motor, temperatura de forno), firmware OTA updates (over-the-air via IoT Hub), recalibração de sensores
          com desvio detectado, e activação de actuadores (abertura de válvula, paragem de emergência). Requer
          autenticação robusta e confirmação de recepção.
        </p>
        <h3 style={S.h3}>Requisitos de latência por caso de uso</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso de uso</th>
              <th style={S.th}>Direcção</th>
              <th style={S.th}>Latência máxima</th>
              <th style={S.th}>Protocolo recomendado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Controlo motion (robótica)</td><td style={S.td}>D2P</td><td style={S.td}>1 ms</td><td style={S.td}>Profinet RT / EtherCAT</td></tr>
            <tr><td style={S.td}>Paragem de emergência</td><td style={S.td}>D2P</td><td style={S.td}>10 ms</td><td style={S.td}>OPC-UA (local edge)</td></tr>
            <tr><td style={S.td}>Ajuste de set-point PID</td><td style={S.td}>D2P</td><td style={S.td}>100 ms</td><td style={S.td}>MQTT QoS2</td></tr>
            <tr><td style={S.td}>Alerta de anomalia</td><td style={S.td}>P2D</td><td style={S.td}>500 ms</td><td style={S.td}>MQTT / Event Hub</td></tr>
            <tr><td style={S.td}>Actualização estado twin</td><td style={S.td}>P2D</td><td style={S.td}>2 s</td><td style={S.td}>Kafka / Event Hub</td></tr>
            <tr><td style={S.td}>OTA firmware update</td><td style={S.td}>D2P</td><td style={S.td}>minutos</td><td style={S.td}>IoT Hub Direct Method</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 9 */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Segurança e Zero Trust</h2>
        <p style={S.p}>
          A superfície de ataque de um sistema Digital Twin é substancialmente maior que sistemas IT tradicionais:
          inclui dispositivos físicos com firmware desactualizado, protocolos OT sem segurança nativa (Modbus,
          Profibus), e a confluência de redes OT e IT historicamente separadas. A abordagem Zero Trust é o
          framework de referência para mitigar estes riscos.
        </p>
        <ThreatModelSVG />
        <h3 style={S.h3}>Vectores de ataque específicos a DTs</h3>
        <p style={S.p}>
          <strong>Sensor Spoofing:</strong> um atacante injeta leituras falsas de sensor (e.g. temperatura normal
          quando a máquina está em sobreaquecimento). O twin actualiza o seu estado com dados falsos, levando a
          decisões erradas. Mitigação: assinatura digital de leituras no sensor, detecção de anomalias estatísticas
          no edge.
        </p>
        <p style={S.p}>
          <strong>Actuation Attack:</strong> comprometer o canal D2P para enviar comandos maliciosos ao activo
          físico — velocidade excessiva, paragem de sistemas de arrefecimento. Consequências potencialmente
          catastróficas em infraestrutura crítica. Mitigação: autenticação mútua (mTLS), rate limiting de
          comandos, confirmação de operador para acções críticas.
        </p>
        <p style={S.p}>
          <strong>DT Model Theft:</strong> roubo dos modelos DTDL que descrevem activos industriais proprietários.
          Representa roubo de propriedade intelectual e pode facilitar ataques mais precisos.
          Mitigação: encriptação em repouso, RBAC granular, auditoria de acessos ao modelo.
        </p>
        <h3 style={S.h3}>Arquitectura Zero Trust para DTs</h3>
        <p style={S.p}>
          Zero Trust parte do princípio "never trust, always verify". Cada dispositivo, utilizador e serviço deve
          autenticar-se mesmo dentro do perímetro de rede. Para DTs industriais: (1) identidade de dispositivo
          baseada em certificados X.509 per-device, provisionados via DPS (Device Provisioning Service); (2) mTLS
          para todos os canais de comunicação; (3) segmentação de rede OT/IT com firewalls industriais; (4)
          encriptação AES-256 em repouso para dados do twin e modelos.
        </p>
        <div style={S.highlight}>
          <strong>NIST IoT Cybersecurity Framework (NISTIR 8259)</strong> — Define capacidades de cibersegurança
          fundamentais para dispositivos IoT: device identification, configuration management, data protection,
          logical access to interfaces, software update, e cybersecurity event awareness. Referência obrigatória
          para DTs em infraestrutura crítica.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Controlo</th>
              <th style={S.th}>Tecnologia</th>
              <th style={S.th}>Onde aplicar</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Identidade de dispositivo</td><td style={S.td}>X.509 certificados, TPM</td><td style={S.td}>Cada sensor/edge node</td></tr>
            <tr><td style={S.td}>Encriptação em trânsito</td><td style={S.td}>TLS 1.3, mTLS</td><td style={S.td}>Todos os canais</td></tr>
            <tr><td style={S.td}>Encriptação em repouso</td><td style={S.td}>AES-256, Azure Key Vault</td><td style={S.td}>State store, modelos</td></tr>
            <tr><td style={S.td}>Autorização</td><td style={S.td}>RBAC, OAuth 2.0</td><td style={S.td}>APIs do DT engine</td></tr>
            <tr><td style={S.td}>Auditoria</td><td style={S.td}>Azure Monitor, SIEM</td><td style={S.td}>Acessos e comandos</td></tr>
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 10 */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Azure Digital Twins</h2>
        <p style={S.p}>
          Azure Digital Twins (ADT) é a plataforma managed da Microsoft para criação e gestão de Digital Twins
          empresariais. Suporta modelos DTDL, grafo de twins com relações, event routing para outros serviços Azure,
          e integração com Time Series Insights e Power BI para análise e visualização.
        </p>
        <AzureDTArchSVG />
        <h3 style={S.h3}>Componentes principais</h3>
        <p style={S.p}>
          <strong>Models (DTDL):</strong> carregados via API ou SDK, definem a estrutura dos twins. Um modelo
          dtmi:example:Motor;1 pode ser instanciado em múltiplos twins (motor-001, motor-002, ...).
        </p>
        <p style={S.p}>
          <strong>Twin Graph:</strong> grafo de twins com relações tipadas. Permite queries como "quais motores
          pertencem à fábrica Lisboa e têm temperatura superior a 80C". Utiliza Azure Digital Twins Query Language
          (ADTQL), similar a SQL.
        </p>
        <p style={S.p}>
          <strong>Event Routes:</strong> routing automático de eventos de alteração de twin para Event Hub, Service
          Bus, ou Event Grid, permitindo integração com Azure Functions para lógica de negócio, Azure Stream
          Analytics para processamento em tempo real, e Azure Machine Learning para modelos preditivos.
        </p>
        <h3 style={S.h3}>Integração com Time Series Insights (TSI)</h3>
        <p style={S.p}>
          ADT integra nativamente com Azure Data Explorer (ADX) para análise histórica de propriedades de twins.
          Cada alteração de propriedade pode ser roteada para ADX via Event Hub, permitindo queries KQL sobre
          séries temporais de todos os twins: "evolução de temperatura do motor-001 nas últimas 24 horas com
          anomalias marcadas".
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 11 */}
      <section style={S.section}>
        <h2 style={S.h2}>11. AWS IoT TwinMaker</h2>
        <p style={S.p}>
          AWS IoT TwinMaker é o serviço da Amazon para criação de Digital Twins operacionais, com foco em
          visualização 3D de instalações físicas (fábricas, edifícios, infraestrutura) e integração com dados
          operacionais em tempo real via conectores configuráveis.
        </p>
        <TwinMakerArchSVG />
        <h3 style={S.h3}>Conceitos fundamentais</h3>
        <p style={S.p}>
          <strong>Workspace:</strong> container lógico que agrega todos os recursos TwinMaker de um projecto.
          Associado a um bucket S3 (armazenamento de cenas 3D, modelos) e uma IAM role com permissões apropriadas.
        </p>
        <p style={S.p}>
          <strong>Entities e Components:</strong> entities representam activos físicos (máquinas, salas, edifícios).
          Cada entity tem components que ligam a fontes de dados externas via connectors. Um component pode ligar
          a IoT SiteWise (para dados de sensores OPC-UA), Amazon Timestream (para histórico) ou S3 (para dados
          estáticos).
        </p>
        <p style={S.p}>
          <strong>Scene:</strong> visualização 3D em formato gLTF/GLB carregada para S3. O TwinMaker Scene Composer
          permite mapear entities do grafo a objectos 3D na cena, adicionando tags visuais com dados em tempo real
          (temperatura de motor visualizada sobre o modelo 3D do motor).
        </p>
        <h3 style={S.h3}>Integração Grafana</h3>
        <p style={S.p}>
          TwinMaker disponibiliza um plugin oficial para Grafana que permite criar dashboards com painéis de
          séries temporais, alarmes e visualização 3D da cena TwinMaker — tudo integrado num único dashboard
          operacional. O plugin usa a TwinMaker API para federar dados de múltiplas fontes (SiteWise, Timestream,
          S3) transparentemente para o operador.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 12 */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <p style={S.p}>
          Esta secção consolida todos os conceitos do módulo numa arquitectura de referência completa, uma árvore
          de decisão para selecção de protocolos, e um orçamento de latência para sistemas DT em tempo real.
        </p>
        <SynthesisArchSVG />
        <h3 style={S.h3}>Árvore de decisão — Selecção de protocolo</h3>
        <DecisionTreeSVG />
        <h3 style={S.h3}>Orçamento de latência (latency budget)</h3>
        <p style={S.p}>
          Para sistemas DT que requerem actuação em menos de 500ms, é essencial orçamentar a latência em cada
          salto da cadeia. Abaixo, um exemplo para controlo de temperatura de forno industrial:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Salto</th>
              <th style={S.th}>Tecnologia</th>
              <th style={S.th}>Latência típica</th>
              <th style={S.th}>Latência máxima</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td}>Sensor para Edge node</td><td style={S.td}>Modbus RTU / 4-20mA</td><td style={S.td}>2 ms</td><td style={S.td}>5 ms</td></tr>
            <tr><td style={S.td}>Processamento no Edge</td><td style={S.td}>Azure IoT Edge module</td><td style={S.td}>5 ms</td><td style={S.td}>20 ms</td></tr>
            <tr><td style={S.td}>Edge para Event Hub</td><td style={S.td}>AMQP sobre TLS</td><td style={S.td}>20 ms</td><td style={S.td}>80 ms</td></tr>
            <tr><td style={S.td}>Stream Processing</td><td style={S.td}>Azure Stream Analytics</td><td style={S.td}>30 ms</td><td style={S.td}>100 ms</td></tr>
            <tr><td style={S.td}>Actualização DT state</td><td style={S.td}>ADT REST API</td><td style={S.td}>15 ms</td><td style={S.td}>50 ms</td></tr>
            <tr><td style={S.td}>Lógica de negócio</td><td style={S.td}>Azure Function</td><td style={S.td}>10 ms</td><td style={S.td}>40 ms</td></tr>
            <tr><td style={S.td}>Comando para actuador</td><td style={S.td}>IoT Hub Direct Method</td><td style={S.td}>25 ms</td><td style={S.td}>80 ms</td></tr>
            <tr>
              <td style={{ ...S.td, fontWeight: 700 }}>Total fim-a-fim</td>
              <td style={S.td}></td>
              <td style={{ ...S.td, fontWeight: 700, color }}>107 ms</td>
              <td style={{ ...S.td, fontWeight: 700, color: '#f97316' }}>375 ms</td>
            </tr>
          </tbody>
        </table>
        <h3 style={S.h3}>Checklist de implementação DT Connectivity</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>Fase 1 — Inventário e modelação</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Identificar todos os activos físicos a digitalizar e hierarquia (site / area / linha / activo)</li>
            <li>Mapear sensores existentes: protocolo, frequência, qualidade de dados</li>
            <li>Criar modelos DTDL (ou AAS) para cada tipo de activo</li>
            <li>Definir relações entre twins (isPartOf, feeds, controls)</li>
          </ul>
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>Fase 2 — Conectividade e Edge</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Seleccionar protocolo de comunicação baseado em ambiente e requisitos de latência</li>
            <li>Implementar edge nodes com capacidade de store-and-forward e agregação</li>
            <li>Configurar certificados X.509 per-device via DPS ou AWS IoT Core</li>
            <li>Testar conectividade em condições de rede degradada (simulação de perda de pacotes)</li>
          </ul>
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>Fase 3 — Ingestão e Estado</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Configurar pipeline de streaming (Kafka / Event Hubs) com particionamento por device ID</li>
            <li>Implementar state store com separação hot (cache) e cold (TSDB)</li>
            <li>Definir estratégia de retenção e compressão de dados históricos</li>
            <li>Validar latência fim-a-fim contra orçamento definido</li>
          </ul>
        </div>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>Fase 4 — Segurança e Operações</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: 2, fontSize: '0.95rem' }}>
            <li>Implementar Zero Trust: mTLS em todos os canais, RBAC granular, auditoria de acessos</li>
            <li>Configurar monitorização de saúde dos dispositivos (heartbeat, last-seen)</li>
            <li>Definir processo de OTA update e rollback para firmware de edge nodes</li>
            <li>Realizar pen test específico para vectores IoT/OT (OWASP IoT Attack Surface Areas)</li>
          </ul>
        </div>
        <div style={S.note}>
          A arquitectura IoT para Digital Twins não é um projecto único — é uma disciplina de engenharia contínua.
          Sensores falham, protocolos evoluem, requisitos de negócio mudam. Projectar para mudança desde o início,
          com abstracções claras entre camadas, é o que diferencia uma arquitectura robusta de uma prova de conceito.
        </div>
      </section>
    </div>
  );
}
