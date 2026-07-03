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

function CityMapSVG() {
  const sColors = { T: '#f97316', AQ: '#fb923c', E: '#f59e0b', W: '#fbbf24' };
  const sensors = [
    { cx: 200, cy: 100, type: 'T' }, { cx: 500, cy: 100, type: 'T' }, { cx: 200, cy: 240, type: 'T' },
    { cx: 120, cy: 170, type: 'AQ' }, { cx: 580, cy: 170, type: 'AQ' },
    { cx: 350, cy: 60,  type: 'E' }, { cx: 500, cy: 240, type: 'E' },
    { cx: 350, cy: 280, type: 'W' }, { cx: 120, cy: 80,  type: 'W' },
  ];
  return (
    <svg viewBox="0 0 700 340" style={{ width: '100%', borderRadius: 10, background: 'var(--bg-secondary)' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f97316">City Digital Twin — Rede de Sensores</text>

      {/* Roads */}
      <line x1="50" y1="170" x2="650" y2="170" stroke="var(--text-secondary)" strokeWidth="6" strokeOpacity="0.3" />
      <line x1="350" y1="50" x2="350" y2="290" stroke="var(--text-secondary)" strokeWidth="6" strokeOpacity="0.3" />
      <line x1="50" y1="100" x2="650" y2="100" stroke="var(--text-secondary)" strokeWidth="3" strokeOpacity="0.2" />
      <line x1="50" y1="240" x2="650" y2="240" stroke="var(--text-secondary)" strokeWidth="3" strokeOpacity="0.2" />
      <line x1="200" y1="50" x2="200" y2="290" stroke="var(--text-secondary)" strokeWidth="3" strokeOpacity="0.2" />
      <line x1="500" y1="50" x2="500" y2="290" stroke="var(--text-secondary)" strokeWidth="3" strokeOpacity="0.2" />

      {/* Sensor connection lines drawn before nodes */}
      {sensors.map((s, i) => (
        <line key={i} x1={s.cx} y1={s.cy} x2={350} y2={170}
          stroke={sColors[s.type]} strokeWidth="1.5" strokeDasharray="5,3" strokeOpacity="0.7" />
      ))}

      {/* Central City DT node */}
      <circle cx="350" cy="170" r="30" fill="#f97316" fillOpacity="0.9" />
      <text x="350" y="165" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">City</text>
      <text x="350" y="177" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">DT</text>

      {/* Sensor nodes */}
      {sensors.map((s, i) => (
        <g key={i}>
          <circle cx={s.cx} cy={s.cy} r="14" fill={sColors[s.type]} stroke="var(--bg-secondary)" strokeWidth="2" />
          <text x={s.cx} y={s.cy + 4} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">{s.type}</text>
        </g>
      ))}

      {/* Legend */}
      <rect x="555" y="258" width="130" height="72" rx="6" fill="var(--bg-primary)" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" />
      {[['T','Tráfego'],['AQ','Qualidade Ar'],['E','Energia'],['W','Água']].map(([k,v],i) => (
        <g key={k}>
          <circle cx="569" cy={272 + i*16} r="5" fill={sColors[k]} />
          <text x="580" y={276 + i*16} fontSize="9" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
    </svg>
  );
}

function ArchitectureSVG() {
  const layers = [
    { y: 40, label: 'Aplicações', sub: 'Dashboard · Planeamento · Alertas · APIs', fill: '#f97316', textFill: '#fff' },
    { y: 100, label: 'City DT Engine', sub: 'Simulação · Otimização · IA/ML · Gemelos', fill: '#f97316', textFill: '#fff' },
    { y: 160, label: 'Data Platform', sub: 'Data Lake · Streaming · Ontologias · GIS', fill: '#f59e0b', textFill: '#fff' },
    { y: 220, label: 'IoT & Sensores', sub: 'MQTT · LoRaWAN · 5G · SCADA · APIs', fill: '#fb923c', textFill: '#fff' },
    { y: 280, label: 'Cidade Física', sub: 'Edifícios · Ruas · Redes · Pessoas · Veículos', fill: '#ea580c', textFill: '#e2e8f0' },
  ];
  return (
    <svg viewBox="0 0 700 360" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="25" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Arquitectura de City Digital Twin — 5 Camadas</text>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="60" y={l.y} width="500" height="48" rx="7" fill={l.fill} />
          <text x="180" y={l.y + 20} textAnchor="middle" fontSize="12" fontWeight="700" fill={l.textFill}>{l.label}</text>
          <text x="370" y={l.y + 20} textAnchor="middle" fontSize="10" fill={l.textFill} fillOpacity="0.85">{l.sub}</text>
          {i < layers.length - 1 && (
            <polygon points={`340,${l.y + 48} 360,${l.y + 48} 350,${l.y + 60}`} fill="#f97316" />
          )}
        </g>
      ))}
      {/* Side annotations */}
      <rect x="580" y="40" width="100" height="48" rx="5" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
      <text x="630" y="60" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Cesium · QGIS</text>
      <text x="630" y="74" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Power BI · ArcGIS</text>
      <line x1="560" y1="64" x2="580" y2="64" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3,2" />

      <rect x="580" y="100" width="100" height="48" rx="5" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
      <text x="630" y="120" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Eclipse Ditto</text>
      <text x="630" y="134" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Azure DT · AWS</text>
      <line x1="560" y1="124" x2="580" y2="124" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3,2" />

      <rect x="580" y="160" width="100" height="48" rx="5" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
      <text x="630" y="180" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Apache Kafka</text>
      <text x="630" y="194" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">PostGIS · Spark</text>
      <line x1="560" y1="184" x2="580" y2="184" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3,2" />

      <rect x="580" y="220" width="100" height="48" rx="5" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
      <text x="630" y="240" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">LoRaWAN · NB-IoT</text>
      <text x="630" y="254" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">OPC-UA · MQTT</text>
      <line x1="560" y1="244" x2="580" y2="244" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="3,2" />

      <text x="350" y="345" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">BIM/IFC integra-se nas camadas de Data Platform e City DT Engine via conversão semântica</text>
    </svg>
  );
}

function TrafficSVG() {
  return (
    <svg viewBox="0 0 700 320" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Rede de Tráfego — Estado em Tempo Real</text>
      {/* Horizontal roads */}
      <rect x="50" y="110" width="600" height="14" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="50" y="195" width="250" height="14" rx="3" fill="#ea580c" fillOpacity="0.7" />
      <rect x="350" y="195" width="130" height="14" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="530" y="195" width="120" height="14" rx="3" fill="#f97316" fillOpacity="0.7" />
      {/* Vertical roads */}
      <rect x="193" y="60" width="14" height="200" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="343" y="60" width="14" height="200" rx="3" fill="#ea580c" fillOpacity="0.7" />
      <rect x="493" y="60" width="14" height="100" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="493" y="195" width="14" height="65" rx="3" fill="#f97316" fillOpacity="0.7" />

      {/* Intersection nodes */}
      {[[200, 117], [350, 117], [500, 117], [200, 202], [350, 202], [500, 202]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="12" fill="#ea580c" stroke="#fff" strokeWidth="2" />
      ))}

      {/* Flow arrows */}
      <polygon points="310,110 322,117 310,124" fill="#f97316" />
      <polygon points="460,110 472,117 460,124" fill="#f97316" />
      <polygon points="240,110 252,117 240,124" fill="#f97316" />

      {/* Legend */}
      <rect x="50" y="260" width="600" height="40" rx="6" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
      <rect x="70" y="275" width="30" height="10" rx="2" fill="#f97316" />
      <text x="106" y="284" fontSize="10" fill="var(--text-secondary)">Livre</text>
      <rect x="160" y="275" width="30" height="10" rx="2" fill="#ea580c" />
      <text x="196" y="284" fontSize="10" fill="var(--text-secondary)">Lento</text>
      <rect x="250" y="275" width="30" height="10" rx="2" fill="#f97316" />
      <text x="286" y="284" fontSize="10" fill="var(--text-secondary)">Congestionado</text>
      <circle cx="400" cy="280" r="8" fill="#ea580c" />
      <text x="415" y="284" fontSize="10" fill="var(--text-secondary)">Interseção DT</text>

      <text x="350" y="50" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">London SCOOT · Singapore ITMS · Barcelona Superblocks</text>
    </svg>
  );
}

function EnergyUrbanSVG() {
  return (
    <svg viewBox="0 0 700 340" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Rede de Energia Urbana — Smart Grid</text>

      {/* Smart grid central node */}
      <rect x="295" y="140" width="110" height="50" rx="8" fill="#f97316" />
      <text x="350" y="161" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Smart Grid</text>
      <text x="350" y="178" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">DT Node</text>

      {/* Buildings with solar */}
      {[[100, 80], [180, 120], [80, 200], [160, 240]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="50" height="60" rx="3" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeOpacity="0.4" strokeWidth="1" />
          <rect x={x + 5} y={y - 12} width="40" height="12" rx="2" fill="#fbbf24" />
          <text x={x + 25} y={y - 4} textAnchor="middle" fontSize="7" fill="var(--text-secondary)">solar</text>
          <line x1={x + 50} y1={y + 30} x2="295" y2="165" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3" />
        </g>
      ))}

      {/* Wind turbines */}
      {[[580, 80], [620, 140]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x} y2={y + 50} stroke="#fb923c" strokeWidth="3" />
          <ellipse cx={x} cy={y} rx="20" ry="5" fill="none" stroke="#fb923c" strokeWidth="2" />
          <circle cx={x} cy={y} r="3" fill="#f97316" />
          <line x1="410" y1="165" x2={x} y2={y + 25} stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,3" />
        </g>
      ))}

      {/* Battery storage */}
      <rect x="530" y="220" width="70" height="40" rx="5" fill="#f97316" />
      <rect x="558" y="215" width="14" height="5" rx="2" fill="#f97316" />
      <text x="565" y="236" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Battery</text>
      <text x="565" y="250" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Storage</text>
      <line x1="530" y1="240" x2="405" y2="175" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />

      {/* Demand nodes */}
      {[[100, 290], [200, 290], [300, 290], [420, 290], [530, 290]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="12" fill="#f97316" fillOpacity="0.8" />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="8" fill="#fff">D</text>
          <line x1={x} y1={y - 12} x2="350" y2="190" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3" />
        </g>
      ))}

      {/* Labels */}
      <text x="130" y="270" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Residencial</text>
      <text x="350" y="315" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Indústria</text>
      <text x="590" y="275" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Vento</text>

      {/* Legend */}
      <rect x="50" y="310" width="160" height="30" rx="5" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
      <rect x="60" y="320" width="12" height="8" rx="1" fill="#fbbf24" />
      <text x="77" y="328" fontSize="9" fill="var(--text-secondary)">Solar</text>
      <rect x="110" y="320" width="12" height="8" rx="1" fill="#f97316" />
      <text x="127" y="328" fontSize="9" fill="var(--text-secondary)">Storage</text>
    </svg>
  );
}

function BuildingDTSVG() {
  return (
    <svg viewBox="0 0 700 340" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Building Energy Model (BEM) — Corte Transversal</text>

      {/* Building outline */}
      <rect x="80" y="60" width="300" height="240" rx="4" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="2" />

      {/* Floors */}
      {[60, 120, 180, 240].map((y, i) => (
        <line key={i} x1="80" y1={y} x2="380" y2={y} stroke="var(--card-border)" strokeWidth="1" />
      ))}

      {/* HVAC ducts - cool air blue */}
      <rect x="90" y="70" width="60" height="12" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="90" y="130" width="60" height="12" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="90" y="190" width="60" height="12" rx="3" fill="#f97316" fillOpacity="0.7" />
      <text x="120" y="79" textAnchor="middle" fontSize="7" fill="#fb923c">cool</text>
      <text x="120" y="139" textAnchor="middle" fontSize="7" fill="#fb923c">cool</text>
      <text x="120" y="199" textAnchor="middle" fontSize="7" fill="#fb923c">cool</text>

      {/* HVAC ducts - hot air red */}
      <rect x="310" y="70" width="60" height="12" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="310" y="130" width="60" height="12" rx="3" fill="#f97316" fillOpacity="0.7" />
      <rect x="310" y="190" width="60" height="12" rx="3" fill="#f97316" fillOpacity="0.7" />
      <text x="340" y="79" textAnchor="middle" fontSize="7" fill="#7c2d12">hot</text>
      <text x="340" y="139" textAnchor="middle" fontSize="7" fill="#7c2d12">hot</text>
      <text x="340" y="199" textAnchor="middle" fontSize="7" fill="#7c2d12">hot</text>

      {/* Occupancy sensors */}
      {[[170, 90], [230, 90], [170, 150], [250, 150], [200, 210], [300, 210], [160, 270], [280, 270]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#f97316" fillOpacity="0.8" stroke="#fff" strokeWidth="1" />
      ))}

      {/* Lighting grid dots */}
      {[[150, 110], [210, 110], [270, 110], [330, 110],
        [150, 170], [210, 170], [270, 170], [330, 170],
        [150, 230], [210, 230], [270, 230], [330, 230]].map(([cx, cy], i) => (
        <rect key={i} x={cx - 5} y={cy - 2} width="10" height="4" rx="2" fill="#fbbf24" fillOpacity="0.8" />
      ))}

      {/* BEM Engine box */}
      <rect x="430" y="80" width="200" height="80" rx="8" fill="#f97316" />
      <text x="530" y="102" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">BEM Engine</text>
      <text x="530" y="118" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">EnergyPlus · OpenStudio</text>
      <text x="530" y="133" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">IDA ICE · DesignBuilder</text>
      <text x="530" y="148" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Fault Detection · ASHRAE</text>
      <line x1="380" y1="120" x2="430" y2="120" stroke="#f97316" strokeWidth="2" strokeDasharray="4,3" />

      {/* Output metrics */}
      <rect x="430" y="180" width="200" height="100" rx="8" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
      <text x="530" y="200" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Resultados DT</text>
      <text x="445" y="218" fontSize="9" fill="#f97316">✓ Poupança: 20–30%</text>
      <text x="445" y="234" fontSize="9" fill="#f97316">✓ Comfort: 95%+</text>
      <text x="445" y="250" fontSize="9" fill="#f97316">✓ Fault Detection: RT</text>
      <text x="445" y="266" fontSize="9" fill="var(--text-secondary)">✓ ASHRAE 90.1 OK</text>

      {/* Legend */}
      <circle cx="90" cy="310" r="6" fill="#f97316" />
      <text x="102" y="315" fontSize="9" fill="var(--text-secondary)">Ocupação</text>
      <rect x="160" y="305" width="12" height="5" rx="1" fill="#fbbf24" />
      <text x="178" y="315" fontSize="9" fill="var(--text-secondary)">Iluminação</text>
      <rect x="240" y="305" width="12" height="5" rx="1" fill="#f97316" />
      <text x="258" y="315" fontSize="9" fill="var(--text-secondary)">AVAC Frio</text>
      <rect x="320" y="305" width="12" height="5" rx="1" fill="#f97316" />
      <text x="338" y="315" fontSize="9" fill="var(--text-secondary)">AVAC Quente</text>
    </svg>
  );
}

function WindFarmSVG() {
  const turbines = [
    [140, 80], [280, 80], [420, 80],
    [140, 180], [280, 180], [420, 180],
  ];
  return (
    <svg viewBox="0 0 700 320" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Offshore Wind Farm Digital Twin</text>

      {/* Sea background */}
      <rect x="50" y="35" width="430" height="260" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />

      {/* Wake effect arrows */}
      {turbines.map(([x, y], i) => (
        <g key={i}>
          {/* Turbine pole */}
          <line x1={x} y1={y + 10} x2={x} y2={y + 40} stroke="var(--card-border)" strokeWidth="3" />
          {/* Turbine blades circle */}
          <circle cx={x} cy={y} r="18" fill="#fff" fillOpacity="0.9" stroke="#f97316" strokeWidth="2" />
          {/* Blades */}
          <line x1={x} y1={y - 18} x2={x} y2={y + 18} stroke="#94a3b8" strokeWidth="2.5" />
          <line x1={x - 16} y1={y - 9} x2={x + 16} y2={y + 9} stroke="#94a3b8" strokeWidth="2.5" />
          <line x1={x - 16} y1={y + 9} x2={x + 16} y2={y - 9} stroke="#94a3b8" strokeWidth="2.5" />
          <circle cx={x} cy={y} r="4" fill="#f97316" />
          {/* Wake effect */}
          <path d={`M ${x + 18} ${y} Q ${x + 50} ${y + 5} ${x + 80} ${y + 15}`} fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,3" />
        </g>
      ))}

      {/* DT monitoring station */}
      <rect x="520" y="100" width="130" height="120" rx="8" fill="#f97316" />
      <text x="585" y="122" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">DT Monitor</text>
      <text x="585" y="140" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Wind Speed: 9.2 m/s</text>
      <text x="585" y="155" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Power: 142 MW</text>
      <text x="585" y="170" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Pitch: 12.3 deg</text>
      <text x="585" y="185" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">RPM: 14.8</text>
      <text x="585" y="200" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">CUF: 38.5%</text>
      <text x="585" y="215" textAnchor="middle" fontSize="9" fill="#f97316">Status: OK</text>

      {/* Connections to monitor */}
      {turbines.map(([x, y], i) => (
        <line key={i} x1={x + 18} y1={y} x2="520" y2="160" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3" fillOpacity="0.5" />
      ))}

      {/* SCADA label */}
      <rect x="55" y="265" width="420" height="22" rx="4" fill="#fb923c" fillOpacity="0.8" />
      <text x="265" y="281" textAnchor="middle" fontSize="10" fill="#fff">SCADA → FLORIS Wake Model → Predictive Maintenance · Siemens Gamesa / Vestas</text>
    </svg>
  );
}

function GridDTSVG() {
  return (
    <svg viewBox="0 0 700 330" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Rede Eléctrica — Grid Digital Twin</text>

      {/* Transmission lines */}
      <line x1="150" y1="100" x2="350" y2="80" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="350" y1="80" x2="550" y2="100" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="150" y1="100" x2="200" y2="200" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="550" y1="100" x2="500" y2="200" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="200" y1="200" x2="350" y2="220" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="500" y1="200" x2="350" y2="220" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.5" />
      <line x1="200" y1="200" x2="150" y2="290" stroke="#f97316" strokeWidth="2" strokeOpacity="0.5" />
      <line x1="500" y1="200" x2="550" y2="290" stroke="#f97316" strokeWidth="2" strokeOpacity="0.5" />
      <line x1="350" y1="220" x2="350" y2="290" stroke="#f97316" strokeWidth="2" strokeOpacity="0.5" />

      {/* Generator squares */}
      {[[140, 88], [340, 68], [540, 88]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="24" height="24" rx="3" fill="#f97316" stroke="#fff" strokeWidth="2" />
          <text x={x + 12} y={y + 16} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">G</text>
        </g>
      ))}

      {/* Substation circles */}
      {[[200, 200], [500, 200], [350, 220]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="14" fill="#f97316" stroke="#fff" strokeWidth="2" />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">S</text>
        </g>
      ))}

      {/* Load triangles */}
      {[[150, 290], [350, 290], [550, 290]].map(([x, y], i) => (
        <g key={i}>
          <polygon points={`${x},${y - 14} ${x - 12},${y + 10} ${x + 12},${y + 10}`} fill="#f97316" stroke="#fff" strokeWidth="2" />
          <text x={x} y={y + 6} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">L</text>
        </g>
      ))}

      {/* Labels */}
      <text x="95" y="62" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">765kV</text>
      <text x="350" y="50" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Renewable In</text>

      {/* Legend */}
      <rect x="55" y="305" width="590" height="20" rx="4" fill="var(--bg-secondary)" />
      <rect x="70" y="311" width="12" height="8" rx="1" fill="#f97316" />
      <text x="88" y="320" fontSize="9" fill="var(--text-secondary)">Geração</text>
      <circle cx="140" cy="315" r="6" fill="#f97316" />
      <text x="152" y="320" fontSize="9" fill="var(--text-secondary)">Subestação</text>
      <polygon points="225,309 213,321 237,321" fill="#f97316" />
      <text x="243" y="320" fontSize="9" fill="var(--text-secondary)">Carga</text>
      <text x="380" y="320" fontSize="9" fill="var(--text-secondary)">N-1 Security · State Estimation · ENTSO-E Pan-EU DT</text>
    </svg>
  );
}

function BatterySVG() {
  const points = [];
  for (let i = 0; i <= 40; i++) {
    const x = 80 + i * 12;
    const decay = 100 - i * 0.5 - Math.pow(i, 1.4) * 0.12;
    const y = 270 - (decay / 100) * 180;
    points.push(`${x},${y}`);
  }
  const polyline = points.join(' ');

  return (
    <svg viewBox="0 0 700 320" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Battery SoH — Curva de Degradação com DT Monitoring</text>

      {/* Axes */}
      <line x1="80" y1="90" x2="80" y2="270" stroke="var(--card-border)" strokeWidth="2" />
      <line x1="80" y1="270" x2="580" y2="270" stroke="var(--card-border)" strokeWidth="2" />

      {/* Y axis labels */}
      {[100, 80, 60, 40].map((v, i) => {
        const y = 270 - (v / 100) * 180;
        return (
          <g key={i}>
            <line x1="75" y1={y} x2="580" y2={y} stroke="var(--card-border)" strokeWidth="1" />
            <text x="70" y={y + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}%</text>
          </g>
        );
      })}

      {/* X axis labels */}
      {[0, 200, 400, 600, 800].map((v, i) => {
        const x = 80 + (v / 1000) * 480;
        return (
          <text key={i} x={x} y="284" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{v}</text>
        );
      })}

      <text x="330" y="300" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Ciclos de Carga</text>
      <text x="30" y="180" textAnchor="middle" fontSize="10" fill="var(--text-secondary)" transform="rotate(-90, 30, 180)">Capacidade (%)</text>

      {/* Degradation curve */}
      <polyline points={polyline} fill="none" stroke="#f97316" strokeWidth="2.5" />

      {/* EoL line at 80% */}
      <line x1="80" y1={270 - 0.8 * 180} x2="580" y2={270 - 0.8 * 180} stroke="#f97316" strokeWidth="1.5" strokeDasharray="6,3" />
      <text x="585" y={270 - 0.8 * 180 + 4} fontSize="9" fill="#f97316">EoL 80%</text>

      {/* DT monitoring zone */}
      <rect x="200" y="90" width="200" height="180" rx="4" fill="#f97316" fillOpacity="0.07" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="300" y="225" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">DT Monitoring Zone</text>
      <text x="300" y="240" textAnchor="middle" fontSize="8" fill="#f97316">SoC/SoH Estimation</text>
      <text x="300" y="254" textAnchor="middle" fontSize="8" fill="#f97316">Anomaly Detection</text>

      {/* Kalman filter label */}
      <rect x="430" y="130" width="150" height="70" rx="6" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5" />
      <text x="505" y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Algoritmos DT</text>
      <text x="440" y="167" fontSize="9" fill="#f97316">· Kalman Filter</text>
      <text x="440" y="181" fontSize="9" fill="#f97316">· ECM (equiv. circuit)</text>
      <text x="440" y="195" fontSize="9" fill="#f97316">· Tesla Megapack</text>

      {/* Second life annotation */}
      <text x="350" y="310" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">2nd Life: baterias com SoH 70–80% reaproveitadas em armazenamento estacionário</text>
    </svg>
  );
}

function WaterNetworkSVG() {
  const nodes = [
    { cx: 120, cy: 100, p: 4.2, label: 'Tank A' },
    { cx: 280, cy: 80, p: 3.8, label: 'Pump 1' },
    { cx: 440, cy: 120, p: 3.1, label: 'Node C' },
    { cx: 580, cy: 100, p: 2.5, label: 'Zone 3' },
    { cx: 160, cy: 220, p: 3.5, label: 'Node D' },
    { cx: 320, cy: 200, p: 2.9, label: 'Node E' },
    { cx: 480, cy: 230, p: 1.8, label: 'Zone 5' },
    { cx: 240, cy: 310, p: 2.2, label: 'Zone 6' },
    { cx: 400, cy: 300, p: 1.5, label: 'Zone 7' },
  ];
  const edges = [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[4,7],[5,8],[2,5],[1,4]];
  const pressureColor = (p) => {
    if (p > 3.5) return '#f97316';
    if (p > 2.5) return '#fb923c';
    return '#f59e0b';
  };
  return (
    <svg viewBox="0 0 700 365" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Water Distribution Network — Pressure DT</text>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy} stroke="#f97316" strokeWidth="3" strokeOpacity="0.4" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="16" fill={pressureColor(n.p)} stroke="#fff" strokeWidth="2" />
          <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">{n.p}</text>
          <text x={n.cx} y={n.cy + (n.label === 'Zone 5' ? 52 : 30)} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{n.label}</text>
        </g>
      ))}

      {/* Leak detection highlight */}
      <circle cx="480" cy="230" r="28" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="6,3" />
      <text x="530" y="215" fontSize="10" fontWeight="700" fill="#f97316">Leak?</text>
      <text x="530" y="228" fontSize="9" fill="#f97316">P: 1.8 bar</text>
      <text x="530" y="241" fontSize="9" fill="#f97316">Flow anomaly</text>

      {/* Legend */}
      <circle cx="80" cy="348" r="8" fill="#f97316" />
      <text x="95" y="353" fontSize="9" fill="var(--text-secondary)">{"Alto (>3.5 bar)"}</text>
      <circle cx="210" cy="348" r="8" fill="#fb923c" />
      <text x="225" y="353" fontSize="9" fill="var(--text-secondary)">{"Médio (2.5-3.5)"}</text>
      <circle cx="360" cy="348" r="8" fill="#f59e0b" />
      <text x="375" y="353" fontSize="9" fill="var(--text-secondary)">{"Baixo (<2.5 bar)"}</text>
      <text x="560" y="353" fontSize="9" fill="var(--text-secondary)">EPANET Hydraulic</text>
    </svg>
  );
}

function ResilienceSVG() {
  return (
    <svg viewBox="0 0 700 310" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Flood Risk Digital Twin — Zonas e Rotas de Evacuação</text>

      {/* Risk zones — horizontal bands left to right */}
      <rect x="60" y="40" width="160" height="220" rx="0" fill="#f97316" fillOpacity="0.22" />
      <rect x="220" y="40" width="160" height="220" rx="0" fill="#fb923c" fillOpacity="0.15" />
      <rect x="380" y="40" width="160" height="220" rx="0" fill="#fbbf24" fillOpacity="0.10" />
      {/* Safe zone */}
      <rect x="540" y="40" width="120" height="220" rx="0" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />

      {/* Zone borders */}
      <rect x="60" y="40" width="480" height="220" fill="none" stroke="var(--card-border)" strokeWidth="1" rx="4" />
      <line x1="220" y1="40" x2="220" y2="260" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" />
      <line x1="380" y1="40" x2="380" y2="260" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" />
      <line x1="540" y1="40" x2="540" y2="260" stroke="#f97316" strokeWidth="1.5" />

      {/* Zone labels */}
      <text x="140" y="62" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">RISCO ALTO</text>
      <text x="140" y="74" textAnchor="middle" fontSize="8" fill="#f97316">Cota 0–2m</text>
      <text x="300" y="62" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fb923c">RISCO MÉDIO</text>
      <text x="300" y="74" textAnchor="middle" fontSize="8" fill="#fb923c">Cota 2–5m</text>
      <text x="460" y="62" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fbbf24">RISCO BAIXO</text>
      <text x="460" y="74" textAnchor="middle" fontSize="8" fill="#fbbf24">Cota &gt;5m</text>
      <text x="600" y="62" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">SAFE</text>
      <text x="600" y="75" textAnchor="middle" fontSize="9" fill="#f97316">ZONE</text>

      {/* Buildings */}
      {[[75,100],[115,100],[75,155],[115,155],[230,100],[270,100],[230,155]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="28" height="32" rx="2" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" />
      ))}

      {/* Evacuation route A */}
      <path d="M 140,200 L 140,130 L 380,110 L 540,110" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="8,3" />
      <polygon points="535,104 550,110 535,116" fill="#f97316" />
      <text x="330" y="103" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f97316">Rota A</text>

      {/* Evacuation route B */}
      <path d="M 200,230 L 380,180 L 540,160" fill="none" stroke="#fb923c" strokeWidth="2.5" strokeDasharray="8,3" />
      <polygon points="535,154 550,160 535,166" fill="#fb923c" />
      <text x="370" y="172" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fb923c">Rota B</text>

      {/* Legend */}
      <rect x="60" y="270" width="620" height="22" rx="4" fill="var(--bg-secondary)" />
      <rect x="75" y="277" width="12" height="8" rx="1" fill="#f97316" fillOpacity="0.7" />
      <text x="93" y="285" fontSize="9" fill="var(--text-secondary)">Alto</text>
      <rect x="125" y="277" width="12" height="8" rx="1" fill="#fb923c" fillOpacity="0.7" />
      <text x="143" y="285" fontSize="9" fill="var(--text-secondary)">Médio</text>
      <rect x="185" y="277" width="12" height="8" rx="1" fill="#fbbf24" fillOpacity="0.7" />
      <text x="203" y="285" fontSize="9" fill="var(--text-secondary)">Baixo</text>
      <text x="430" y="285" fontSize="9" fill="var(--text-secondary)">New Orleans IHNC DT · FEMA Flood Models</text>
    </svg>
  );
}

function GovernanceSVG() {
  return (
    <svg viewBox="0 0 700 326" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Governança de Dados — Fluxo e Privacidade</text>

      {/* Citizen data source */}
      <circle cx="100" cy="160" r="35" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="2" />
      <text x="100" y="155" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Cidadãos</text>
      <text x="100" y="169" textAnchor="middle" fontSize="9" fill="#f97316">Dados</text>

      {/* Privacy checkpoint 1 */}
      <rect x="180" y="140" width="80" height="40" rx="6" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="2" />
      <text x="220" y="156" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ea580c">Anonymize</text>
      <text x="220" y="170" textAnchor="middle" fontSize="8" fill="#ea580c">GDPR Art.4</text>

      {/* Privacy checkpoint 2 */}
      <rect x="310" y="140" width="80" height="40" rx="6" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="2" />
      <text x="350" y="156" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ea580c">Aggregate</text>
      <text x="350" y="170" textAnchor="middle" fontSize="8" fill="#ea580c">k-Anon</text>

      {/* Privacy checkpoint 3 */}
      <rect x="440" y="140" width="80" height="40" rx="6" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="2" />
      <text x="480" y="156" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ea580c">Consent</text>
      <text x="480" y="170" textAnchor="middle" fontSize="8" fill="#ea580c">Mgmt</text>

      {/* City DT destination */}
      <circle cx="600" cy="160" r="35" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="2" />
      <text x="600" y="155" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">City DT</text>
      <text x="600" y="169" textAnchor="middle" fontSize="9" fill="#f97316">Engine</text>

      {/* Arrows */}
      <line x1="135" y1="160" x2="178" y2="160" stroke="#f97316" strokeWidth="2" />
      <polygon points="174,155 186,160 174,165" fill="#f97316" />
      <line x1="260" y1="160" x2="308" y2="160" stroke="#f97316" strokeWidth="2" />
      <polygon points="304,155 316,160 304,165" fill="#f97316" />
      <line x1="390" y1="160" x2="438" y2="160" stroke="#f97316" strokeWidth="2" />
      <polygon points="434,155 446,160 434,165" fill="#f97316" />
      <line x1="520" y1="160" x2="563" y2="160" stroke="#f97316" strokeWidth="2" />
      <polygon points="559,155 571,160 559,165" fill="#f97316" />

      {/* Lock icons — move below box top edge */}
      {/* removed overlapping lock icons */}

      {/* Data ownership triangle */}
      <text x="350" y="232" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Triângulo de Propriedade de Dados</text>
      <polygon points="350,248 240,290 460,290" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="350" y="244" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Cidadãos</text>
      <text x="235" y="305" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Cidade/Gov.</text>
      <text x="465" y="305" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Vendor</text>

      <text x="350" y="318" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Facial recognition: art. 9 GDPR · participatory twins: co-design</text>
    </svg>
  );
}

function MaturitySVG() {
  const levels = [
    { level: 5, label: 'Autónomo', sub: 'Self-optimizing city', fill: '#f97316', x: 240 },
    { level: 4, label: 'Otimizar', sub: 'AI-driven decisions', fill: '#f97316', x: 190 },
    { level: 3, label: 'Simular', sub: 'What-if scenarios', fill: '#f59e0b', x: 140 },
    { level: 2, label: 'Visualizar', sub: 'Dashboards & maps', fill: '#fb923c', x: 90 },
    { level: 1, label: 'Conectar', sub: 'IoT sensors live', fill: '#ea580c', x: 40 },
  ];
  return (
    <svg viewBox="0 0 700 400" style={{ width: '100%', borderRadius: 10, background: 'transparent' }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>City DT Maturity Ladder</text>
      {levels.map((l, i) => {
        const y = 340 - i * 60;
        const w = 250 + i * 70;
        const xStart = (500 - w) / 2 + 100;
        return (
          <g key={i}>
            <rect x={xStart} y={y - 44} width={w} height="48" rx="6" fill={l.fill} />
            <text x={xStart + 16} y={y - 18} fontSize="12" fontWeight="700" fill="#fff">L{l.level}: {l.label}</text>
            <text x={xStart + 16} y={y - 4} fontSize="9" fill="rgba(255,255,255,0.8)">{l.sub}</text>
          </g>
        );
      })}
      <text x="350" y="385" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Maioria das cidades europeias: L2-L3 · Singapore/Helsinki: L4</text>
    </svg>
  );
}

export default function DT6() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>
      <div style={S.tag}>MÓDULO 06</div>
      <h1 style={S.h1}>Digital Twins em Cidades & Energia</h1>
      <p style={S.lead}>
        Das metrópoles inteligentes às redes eléctricas descarbonizadas, os Digital Twins urbanos e energéticos
        representam a fronteira mais ambiciosa da tecnologia de gémeos digitais — sincronizando infraestruturas
        físicas complexas com modelos computacionais em tempo real para planear, optimizar e responder a crises
        urbanas com precisão sem precedentes.
      </p>

      {/* ─── 1. City Digital Twins ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. City Digital Twins</h2>
        <CityMapSVG />
        <h3 style={S.h3}>O que é um City Digital Twin?</h3>
        <p style={S.p}>
          Um City Digital Twin (CDT) é uma representação dinâmica e multi-camada de uma cidade — integrando dados
          de sensores IoT, sistemas GIS, BIM, redes de transporte, utilidades e comportamento humano numa plataforma
          computacional unificada. Ao contrário de simulações estáticas, o CDT mantém sincronização bidirecional
          com a cidade física, permitindo que eventos reais actualizem o modelo e que decisões simuladas sejam
          testadas antes da implementação.
        </p>
        <div style={S.highlight}>
          <strong>Exemplos líderes mundiais:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', lineHeight: 2 }}>
            <li><strong>Virtual Singapore</strong> — primeiro CDT nacional; modelagem 3D de todos os edifícios (CityGML LOD3), análise solar, planeamento de emergências, custo: SGD 73M.</li>
            <li><strong>Helsinki 3D+</strong> — integra dados de 45 000+ edifícios BIM, rede de aquecimento distrital, mobilidade e vegetação; open data disponível ao público.</li>
            <li><strong>Barcelona Smart City</strong> — Sentilo IoT platform, 19 000+ sensores, superblocks para reorganização do espaço urbano.</li>
            <li><strong>London Data Twin</strong> — GLA coordena dados de Transport for London, NHS, utility networks e climate projections.</li>
          </ul>
        </div>
        <h3 style={S.h3}>Casos de Uso Principais</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Aplicação CDT</th>
              <th style={S.th}>Benefício Chave</th>
              <th style={S.th}>Horizonte</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Planeamento Urbano', 'Simulação de novos edifícios/zonas', 'Impacto solar/sombra/tráfego pré-avaliado', 'Longo prazo'],
              ['Resposta a Emergências', 'Flood simulation, wildfire spread', 'Rotas evacuação optimizadas em minutos', 'Tempo real'],
              ['Net Zero 2050', 'Mapeamento emissões por quarteirão', 'Identificar hotspots, priorizar intervenções', 'Médio prazo'],
              ['Mobilidade', 'Simulação tráfego multimodal', 'Redução 15-20% congestionamento', 'Tempo real'],
              ['Energia', 'Demand forecasting distrital', 'Integração solar/vento na grid', 'Intra-dia'],
              ['Infraestrutura Água', 'Leak detection, pressure management', 'Redução perdas para &lt;10%', 'Tempo real'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          O mercado global de CDT projecta-se para USD 2.66 mil milhões em 2030, crescendo a CAGR de 28.3% (MarketsandMarkets, 2024). A Europa lidera com 38% da adopção global.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 2. Arquitectura ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Arquitectura de City DT</h2>
        <ArchitectureSVG />
        <h3 style={S.h3}>GIS como Espinha Dorsal</h3>
        <p style={S.p}>
          O backbone geoespacial é fundamental: todos os dados são indexados por coordenadas (WGS84 ou projecção local),
          permitindo operações de intersecção espacial, análise de proximidade e visualização 3D. PostGIS e GeoServer
          servem como base de dados geoespacial; CesiumJS e Deck.gl para visualização web 3D em tempo real.
        </p>
        <h3 style={S.h3}>BIM/IFC Integration</h3>
        <p style={S.p}>
          Ficheiros IFC (Industry Foundation Classes) contêm geometria e semântica de edifícios. A integração no CDT
          envolve: parsear IFC com IfcOpenShell, converter para CityGML ou 3D Tiles, enriquecer com dados de sensores
          IoT por IFC GUID, e alimentar modelos energéticos BEM. A cada actualização BIM (obra, renovação), o CDT
          propaga as alterações automaticamente.
        </p>
        <h3 style={S.h3}>Plataformas Open Data</h3>
        <div style={S.highlight}>
          <strong>Stack tecnológico típico de CDT europeu:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', lineHeight: 1.9 }}>
            <li>Ingestão: Apache Kafka, AWS Kinesis, Azure Event Hub</li>
            <li>Storage: PostGIS, InfluxDB (series temporais), MinIO (objectos)</li>
            <li>DT Engine: Eclipse Ditto, Azure Digital Twins, NVIDIA Omniverse</li>
            <li>Simulation: SUMO (tráfego), EnergyPlus (edifícios), EPANET (água)</li>
            <li>Visualização: Cesium, QGIS, PowerBI, Grafana</li>
          </ul>
        </div>
        <h3 style={S.h3}>Desafios de Governança de Dados</h3>
        <p style={S.p}>
          A principal barreira à implementação não é técnica mas organizacional: silos de dados entre departamentos
          municipais, empresas concessionárias e governo central. Protocolos de partilha de dados, acordos de licença,
          qualidade e latência dos dados são os obstáculos que atrasam projectos CDT por 12-24 meses em média.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 3. Mobilidade e Tráfego ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Mobilidade e Tráfego</h2>
        <TrafficSVG />
        <h3 style={S.h3}>Tráfego em Tempo Real</h3>
        <p style={S.p}>
          Os sistemas de gestão de tráfego modernos baseiam-se em CDTs que integram: contadores de tráfego magnéticos,
          câmeras com visão computacional, dados GPS anonimizados de smartphones e frotas, sensores Bluetooth/WiFi
          em interseções, e feeds de GPS de veículos de emergência e transportes públicos.
        </p>
        <p style={S.p}>
          O sistema SCOOT (Split Cycle Offset Optimisation Technique) de Londres processa 100 000+ detecções/minuto,
          ajustando tempos de semáforo em ciclos de 25 segundos, reduzindo paragens 12% e emissões 8%. O ITMS de
          Singapura vai mais longe: simula toda a rede rodoviária em tempo real, optimiza semáforos adaptativamente
          e prevê incidentes 15 minutos antes da ocorrência.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Cidade</th>
              <th style={S.th}>Sistema</th>
              <th style={S.th}>Tecnologia Core</th>
              <th style={S.th}>Benefício</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Londres', 'SCOOT + LTDS', 'Loop detectors + cameras', '-12% stops, -8% CO2'],
              ['Singapura', 'ITMS 3.0', 'CDT + ML prediction', 'Incidents: -25%'],
              ['Viena', 'VISSIM CDT', 'Multi-agent simulation', 'PT priority +18%'],
              ['Barcelona', 'Superblock DT', 'Agent-based model', 'Pedestrian space x4'],
              ['Lyon', 'Optimus Traffic', 'Digital twin SUMO', 'Journey time -11%'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Veículos Autónomos e CDT</h3>
        <p style={S.p}>
          A integração de veículos autónomos (AV) com CDTs cria um ciclo virtuoso: AVs geram dados de alta qualidade
          (LiDAR, câmeras, localização precisa) que enriquecem o CDT, enquanto o CDT fornece contexto global que
          expande o "campo de visão" do AV além dos seus sensores locais — coordenando manobras de esquina cega,
          gestão de prioridades de emergência e optimização de paragem em frotas.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 4. Energia Urbana ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Energia Urbana</h2>
        <EnergyUrbanSVG />
        <h3 style={S.h3}>District Energy Systems</h3>
        <p style={S.p}>
          Sistemas de energia distrital (aquecimento/arrefecimento de distrito) beneficiam enormemente de CDTs:
          a modelagem térmica de redes de tubagens subterrâneas, combinada com previsão de demanda edifício por
          edifício, permite optimizar a temperatura de retorno, detectar fugas térmicas e planear expansões da rede.
          Copenhagen District Heating serve 98% dos edifícios da cidade com um CDT que integra 23 plantas de
          co-geração e 60+ km de rede.
        </p>
        <div style={S.highlight}>
          <strong>Copenhagen Net Zero 2025:</strong> O DT energético de Copenhaga integra previsão meteorológica
          NWP (7 dias), dados SCADA de todas as plantas, medidores inteligentes de 570 000 clientes, e optimização
          em tempo real do dispatch das plantas. Meta: neutralidade carbónica em 2025, primeiro grande cidade a atingir.
        </div>
        <h3 style={S.h3}>Demand Flexibility e Energy Poverty</h3>
        <p style={S.p}>
          CDTs energéticos permitem mapear vulnerabilidade energética ao nível de quarteirão: cruzando dados de
          consumo de medidores inteligentes com informação socioeconómica (censos, subsídios sociais), identificam-se
          famílias em risco de pobreza energética antes do inverno. Município de Lisboa usa esta abordagem desde 2022,
          identificando 4 200 agregados vulneráveis para intervenção prioritária em eficiência energética.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Recurso</th>
              <th style={S.th}>Modelo DT</th>
              <th style={S.th}>Output</th>
              <th style={S.th}>Benefício</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Solar PV', 'Irradiação + sombreamento BIM', 'Potencial por telhado', 'Mapa instalação óptima'],
              ['Eólico urbano', 'CFD wind flow 3D', 'Velocidade por localização', 'Siting turbinas'],
              ['Demand response', 'Smart meter + ML', 'Flex. capacidade', '-15% pico carga'],
              ['Storage', 'Battery SoC DT', 'Dispatch schedule', 'Arbitragem preço'],
              ['EV charging', 'Mobility + grid DT', 'Carga inteligente', 'Grid stress -20%'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ─── 5. Building Energy Model ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Digital Twin de Edifícios (BEM)</h2>
        <BuildingDTSVG />
        <h3 style={S.h3}>Workflow BIM para BEM</h3>
        <p style={S.p}>
          O pipeline BIM-to-BEM converte geometria arquitectónica em modelo energético simulável:
          <strong> IFC (geometria + materiais) → gbXML (troca dados energéticos) → EnergyPlus/OpenStudio (simulação) → DT (monitorização tempo real).</strong>
          A calibração do modelo usa dados de contadores reais (medidores inteligentes, sub-medidores por piso/zona)
          para ajustar parâmetros como infiltração de ar, ganhos internos e eficiência de HVAC.
        </p>
        <h3 style={S.h3}>Fault Detection & Diagnostics</h3>
        <p style={S.p}>
          O BEM em tempo real detecta anomalias comparando consumo medido vs. previsto pelo modelo. Desvios acima de
          15% activam regras de FDD: HVAC a aquecer e arrefecer simultaneamente (simultaneous heating/cooling),
          economizer lockout com temperatura exterior adequada, ou bomba de circulação a funcionar com válvula fechada.
          Poupanças típicas de FDD: 8-15% energia adicional além da optimização de base.
        </p>
        <div style={S.note}>
          ASHRAE Guideline 36 define sequências de controlo avançadas de HVAC que, integradas com BEM-DT, reduzem consumo 20-30% em edifícios de escritórios. Conformidade verificada automaticamente pelo gémeo digital.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 6. Wind Farm DT ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Wind Farm Digital Twin</h2>
        <WindFarmSVG />
        <h3 style={S.h3}>SCADA e Dados Operacionais</h3>
        <p style={S.p}>
          Um parque eólico offshore moderno de 100 turbinas gera 500+ sinais SCADA por turbina a cada 10 segundos —
          velocidade do vento a múltiplas alturas, potência activa/reactiva, ângulo de pitch das pás, velocidade de
          rotação (RPM), temperatura dos rolamentos, vibração da nacelle, e estado dos sistemas de controlo.
          O DT agrega estes dados (50 000 sinais/segundo/parque) em modelos por turbina, parque e cluster.
        </p>
        <h3 style={S.h3}>FLORIS — Wake Effect Modelling</h3>
        <p style={S.p}>
          O modelo FLORIS (FLOw Redirection and Induction in Steady state), desenvolvido pelo NREL, simula o efeito
          de esteira (wake) entre turbinas. Turbinas a sotavento operam em vento de menor velocidade e maior
          turbulência, reduzindo potência 10-20% e aumentando fadiga estrutural. O DT FLORIS optimiza yaw misalignment
          de turbinas a barlavento para desviar a esteira, aumentando a produção total do parque 1.5-3%.
        </p>
        <div style={S.highlight}>
          <strong>Siemens Gamesa Offshore DT:</strong> Implementado em Hornsea One (UK, 1.2 GW, 174 turbinas),
          o DT integra SCADA, modelos estruturais FEM das torres e fundações, previsão meteorológica de alta resolução
          e histórico de manutenção. Resultado: redução OPEX 10%, aumento disponibilidade de 95% para 97.2%,
          extensão da vida útil de 20 para 25 anos por gestão optimizada de carga de fadiga.
        </div>
        <h3 style={S.h3}>Manutenção Preditiva em Eólico</h3>
        <p style={S.p}>
          As caixas de velocidades e rolamentos de nacelle representam 20% dos custos de manutenção mas 40% do tempo
          de paragem. O DT aplica análise de vibração (envelope análise, kurtosis) e modelos de degradação física
          para prever avarias de rolamentos 30-60 dias antes da falha, optimizando janelas de manutenção com
          condições meteorológicas favoráveis (janelas de 4m de altura de onda ou menos para acesso offshore).
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente</th>
              <th style={S.th}>Sensor DT</th>
              <th style={S.th}>Modelo Predictivo</th>
              <th style={S.th}>Lead Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Rolamento nacelle', 'Vibração 3-eixos', 'Envelope + LSTM', '30-60 dias'],
              ['Caixa velocidades', 'Temperatura óleo + vibração', 'Physical degradation', '14-30 dias'],
              ['Pás (icing)', 'Potência vs. vento', 'Anomaly detection', 'Horas'],
              ['Gerador', 'Temperatura enrolamentos', 'Thermal model DT', '7-14 dias'],
              ['Conversor', 'Harmónicos eléctricos', 'FFT + threshold', 'Dias'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ─── 7. Grid DT ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Rede Eléctrica — Grid Digital Twin</h2>
        <GridDTSVG />
        <h3 style={S.h3}>State Estimation em Tempo Real</h3>
        <p style={S.p}>
          O Grid DT mantém uma estimativa do estado completo da rede (tensões, fluxos de potência, ângulos de fase)
          a cada 4-30 segundos, combinando: medições SCADA de subestações, PMU (Phasor Measurement Units) com
          resolução de 50-100 amostras/segundo, e modelos de rede actualizados (admittance matrix). O algoritmo
          de estimação de estado (WLS — Weighted Least Squares) filtra medições com ruído e detecta bad data.
        </p>
        <h3 style={S.h3}>Análise de Contingências N-1</h3>
        <p style={S.p}>
          O critério N-1 exige que a rede opere em segurança com a perda de qualquer elemento simples (linha,
          transformador, gerador). O Grid DT executa centenas de simulações N-1 em segundos, identificando
          contingências críticas e determinando acções preventivas de re-despacho antes de problemas ocorrerem.
          ENTSO-E está a coordenar um pan-European Grid DT interligando operadores de 36 países.
        </p>
        <h3 style={S.h3}>Integração de Renováveis</h3>
        <p style={S.p}>
          A penetração crescente de solar e eólico (variáveis e não despacháveis) exige que o Grid DT integre
          previsões de geração renovável de curto prazo (nowcasting), simulações de estabilidade de rede com alta
          inverter penetration, e optimização de re-despacho de reservas. Em Portugal, com 60%+ de electricidade
          renovável em 2023, a REN usa modelos DT para gerir a variabilidade com reservas de regulação a cada 15 min.
        </p>
        <div style={S.note}>
          ENTSO-E Common Information Model (CIM IEC 61970/61968) é o standard de modelagem de rede que permite interoperabilidade entre os Grid DTs nacionais europeus.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ─── 8. Baterias ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Baterias e Armazenamento</h2>
        <BatterySVG />
        <h3 style={S.h3}>Hierarquia DT de Baterias</h3>
        <p style={S.p}>
          O DT de um sistema de armazenamento de energia (BESS) opera em três níveis hierárquicos:
          <strong> Célula → Pack → Sistema.</strong> Ao nível de célula, modelos electroquímicos (SPM — Single Particle Model,
          P2D — Pseudo-2D) ou de circuito equivalente (ECM) simulam o comportamento electroquímico, temperatura
          e degradação. Ao nível de pack, o BMS (Battery Management System) equilibra células e limita operação.
          Ao nível de sistema, o EMS (Energy Management System) optimiza o dispatch para arbitragem de preço,
          peak shaving ou serviços de rede.
        </p>
        <h3 style={S.h3}>Estimação de SoC e SoH</h3>
        <div style={S.highlight}>
          <strong>State of Charge (SoC):</strong> fracção de energia disponível (0-100%). Estimação por:
          coulomb counting (integração corrente) + Kalman Filter para correcção de deriva. Precisão DT: ±1-2%.
          <br /><br />
          <strong>State of Health (SoH):</strong> capacidade actual vs. nominal. Estimação por: periodic full cycles,
          EIS (Electrochemical Impedance Spectroscopy), ou ML sobre padrões de tensão/corrente em uso. O DT detecta
          degradação anómala (células envelhecendo mais rápido) e acciona re-balanceamento ou substituição selectiva.
        </div>
        <h3 style={S.h3}>Modelo de Circuito Equivalente</h3>
        <p style={S.p}>
          O ECM mais comum é o Thevenin de segunda ordem: OCV (tensão de circuito aberto) + resistência série R0
          + dois pares RC em paralelo (R1C1 para dinâmicas rápidas, R2C2 para dinâmicas lentas). Os parâmetros
          variam com SoC, temperatura e SoH, criando tabelas lookup que o DT interpola em tempo real. Actualização
          on-line dos parâmetros por filtro de Kalman extendido (EKF).
        </p>
        <h3 style={S.h3}>Baterias de Segunda Vida</h3>
        <p style={S.p}>
          Baterias de VE com SoH 75-80% (inadequadas para mobilidade, que exige aceleração rápida) têm vida útil
          restante de 5-8 anos em armazenamento estacionário (menor exigência de potência). O DT de segunda vida
          re-calibra parâmetros para a nova aplicação, adapta limites de SoC (typicamente 20-80% vs. 5-95% em VE)
          e prevê a data de fim de vida (SoH &lt; 70%) para planeamento de substituição. Nissan LEAF battery reuse
          em Amesterdão serve como caso de referência europeu.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 9. Água ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Água e Infraestrutura</h2>
        <WaterNetworkSVG />
        <h3 style={S.h3}>EPANET e Simulação Hidráulica</h3>
        <p style={S.p}>
          EPANET (EPA Network Analysis Tool) é o standard open-source para simulação hidráulica de redes de
          distribuição de água. O DT de rede de água integra EPANET com dados de pressão em tempo real (sensores
          transmissores de pressão a cada 500m), medidores de caudal em zonas DMA (District Metered Areas),
          e qualidade da água (cloro residual, turbidez). A calibração automática ajusta rugosidade de tubagens
          e características de bombas ao estado actual da infraestrutura envelhecida.
        </p>
        <h3 style={S.h3}>Detecção de Fugas</h3>
        <p style={S.p}>
          Perdas reais em redes europeias variam de 8% (Dinamarca) a 30%+ (Portugal e Itália). O DT de detecção
          de fugas aplica um balanço de massa por zona DMA: se entrada - saída (medida por medidores) &gt; threshold,
          existe fuga. Análise de mínimo nocturno (01:00-03:00h quando consumo legítimo é mínimo) isola fugas de
          consumos legítimos. Localização por correlação de ruído acústico entre hidrofones em válvulas adjacentes.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Sensor</th>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Detecção DT</th>
              <th style={S.th}>Resposta</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Transmissor pressão', 'bar (0-10)', 'Queda anómala &gt;0.2 bar', 'Alerta zona, equipa campo'],
              ['Medidor caudal EM', 'l/s em DMA', 'Night flow mínimo elevado', 'Análise DMA 24h'],
              ['Hidrofone acústico', 'dB, Hz spectrum', 'Correlação ruído fuga', 'Localização ±3m'],
              ['Sensor cloro', 'mg/l residual', 'Decaimento anómalo', 'Suspeita contaminação'],
              ['Smart meter cliente', 'litros/h', 'Consumo contínuo 24h', 'Notif. cliente, avaria?'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Previsão de Procura</h3>
        <p style={S.p}>
          O DT de água prevê a procura diária e horária com modelos SARIMA + variáveis exógenas (temperatura,
          calendário, eventos, tarifas sazonais). Esta previsão alimenta o despacho de bombas e gestão de reservatórios
          para minimizar energia de bombagem (que representa 30-40% da factura energética de uma utility de água)
          através de arbitragem de preço de electricidade.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 10. Resiliência ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Resiliência e Gestão de Emergências</h2>
        <ResilienceSVG />
        <h3 style={S.h3}>Flood Digital Twin</h3>
        <p style={S.p}>
          O DT de inundações integra modelos hidrológicos (HEC-HMS para escoamento superficial), modelos hidráulicos
          2D (HEC-RAS 2D para propagação da cheia), dados de topografia LiDAR de alta resolução (1m x 1m), e
          previsões meteorológicas de curto prazo. Em tempo de crise, o DT actualiza projeccões de inundação a
          cada 30 minutos, permitindo activar planos de contingência (fechamento de comportas, evacuação) com
          4-12 horas de antecedência.
        </p>
        <div style={S.highlight}>
          <strong>New Orleans IHNC Lake Borgne Surge Barrier DT:</strong> após o Katrina, Nova Orleães desenvolveu
          um CDT de resiliência que integra 87 sensores de maré/onda, modelos ADCIRC de surge, 120km de diques
          digitalizados, e planos de evacuação optimizados por condições simuladas. Primeiro teste real: Ida (2021),
          evacuação ordenada 48h antes com zero vítimas na área protegida.
        </div>
        <h3 style={S.h3}>Wildfire Spread Simulation</h3>
        <p style={S.p}>
          Modelos de propagação de incêndio (FARSITE, FlamMap, Phoenix) integrados em CDTs municipais permitem
          prever a frente de fogo em função do vento, humidade, topografia e tipo de combustível (vegetação mapeada
          por satélite Sentinel-2). A simulação estocástica (100 000+ runs) gera probabilidades de chegada de fogo
          a cada ponto do território, alimentando decisões de evacuação proactiva — implementado em Los Angeles,
          Portugal (ANEPC) e Austrália (AFAC).
        </p>
        <h3 style={S.h3}>Crisis Dashboard CDT</h3>
        <p style={S.p}>
          A sala de crise do CDT integra num único ecrã: estado da rede eléctrica (fornecimento a hospitais e
          infraestrutura crítica), localização em tempo real de veículos de emergência, estado de abrigos de evacuação
          (capacidade/ocupação), comunicações de rede móvel (cobertura e congestionamento), e projecções actualizadas
          do fenómeno em curso — transformando gestão de crise de reactiva para preditiva.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 11. Governança e Ética ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Governança e Ética</h2>
        <GovernanceSVG />
        <h3 style={S.h3}>GDPR e City Digital Twins</h3>
        <p style={S.p}>
          CDTs processam dados pessoais em grande escala: localização via câmeras e sensores WiFi/Bluetooth,
          padrões de consumo energético que revelam hábitos domésticos, dados de mobilidade que identificam
          deslocamentos regulares. O GDPR impõe: base legal para processamento (interesse público ou consentimento),
          minimização de dados (só recolher o necessário), limitação de finalidade (não usar dados de tráfego
          para monitorização de pessoas), e Privacy Impact Assessment (DPIA) obrigatório para processamento de grande escala.
        </p>
        <h3 style={S.h3}>Reconhecimento Facial — Linha Vermelha</h3>
        <p style={S.p}>
          O AI Act europeu (2024) proíbe reconhecimento facial em tempo real em espaços públicos para a maioria
          dos fins, com excepções limitadas para crimes graves específicos mediante autorização judicial. CDTs
          devem arquitectar sistemas de visão computacional para análise de fluxo anónima (contagens, velocidades,
          detecção de incidentes) sem identificação individual — tecnicamente possível com modelos de pedestrian
          detection sem feature matching.
        </p>
        <div style={S.highlight}>
          <strong>Propriedade de Dados — Três modelos:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', lineHeight: 1.9 }}>
            <li><strong>Modelo fechado (vendor-owned):</strong> dados e modelos propriedade do fornecedor da plataforma (ex: Sidewalk Toronto — cancelado após resistência cidadã).</li>
            <li><strong>Modelo público (city-owned):</strong> todos os dados propriedade do município, plataformas open-source (ex: Helsinki, Amsterdam).</li>
            <li><strong>Modelo participativo (citizen-governed):</strong> cidadãos co-propriedade dos dados, governança por data cooperative (proposta Aarhus, nós urbanos da EU).</li>
          </ul>
        </div>
        <h3 style={S.h3}>Participatory Digital Twins</h3>
        <p style={S.p}>
          O conceito emergente de "Participatory Digital Twin" envolve cidadãos activamente na co-criação e
          governança do CDT: contribuição de dados voluntários (citizen sensing), acesso a dashboards públicos
          para consultar dados do bairro, participação em simulações de planeamento urbano, e mecanismos de
          contestação de decisões algorítmicas. Projecto europeu URBANAGE (Horizon 2020) testa este modelo em
          Bilbao, Lyon e Edimburgo com foco em envelhecimento activo.
        </p>
      </section>

      <hr style={S.divider} />

      {/* ─── 12. Síntese ─── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <MaturitySVG />
        <h3 style={S.h3}>ROI de City Digital Twins</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Domínio</th>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Redução Típica</th>
              <th style={S.th}>Payback</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tráfego', 'Tempo de viagem médio', '-15%', '3-5 anos'],
              ['Energia edifícios', 'Consumo kWh/m(2)/ano', '-20%', '5-8 anos'],
              ['Emergências', 'Tempo resposta', '-30%', '2-4 anos'],
              ['Água', 'Perdas reais (%)', '-10 pp', '4-6 anos'],
              ['Manutenção infra.', 'Custos correctivos', '-25%', '3-5 anos'],
              ['CO2 urbano', 'Emissões/habitante', '-18%', '7-12 anos'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Stack Tecnológico Completo</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Camada</th>
              <th style={S.th}>Open Source</th>
              <th style={S.th}>Comercial</th>
              <th style={S.th}>Standard</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['IoT/Sensores', 'Eclipse Mosquitto, Node-RED', 'AWS IoT, Azure IoT Hub', 'MQTT, OPC-UA'],
              ['Streaming', 'Apache Kafka, Flink', 'Confluent, AWS Kinesis', 'AMQP, FIWARE'],
              ['Geo DB', 'PostGIS, GeoServer', 'Esri ArcGIS, HERE', 'OGC WFS/WMS, CityGML'],
              ['DT Engine', 'Eclipse Ditto, RDF4J', 'Azure DT, NVIDIA Omniverse', 'DTDL, W3C WoT'],
              ['Simulation', 'SUMO, EPANET, EnergyPlus', 'Bentley OpenCity, Autodesk', 'IFC, gbXML'],
              ['Viz 3D', 'CesiumJS, Deck.gl, QGIS', 'Esri ArcGIS Pro, Unity', '3D Tiles, glTF'],
              ['ML/AI', 'TensorFlow, PyTorch, scikit', 'Azure ML, AWS SageMaker', 'PMML, ONNX'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Comparação de Casos de Estudo</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Cidade</th>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Investimento</th>
              <th style={S.th}>Impacto Principal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Singapore', 'Virtual Singapore (NUS/GovTech)', 'SGD 73M', 'Planeamento nacional integrado'],
              ['Helsinki', 'Helsinki 3D+ (open data)', 'EUR 5M/ano', 'Energia -20%, open API público'],
              ['Barcelona', 'Sentilo + Fiware', 'EUR 40M (10a)', 'Superblocks, -21% tráfego'],
              ['Copenhagen', 'State of Green + CHP DT', 'DKK 600M', 'Net zero 2025 on-track'],
              ['Dubai', 'Dubai DT (DEWA+TomTom)', 'AED 300M', 'GDP +1.5%, city services DT'],
              ['London', 'London Data Twin (GLA)', 'GBP 20M', 'Net zero planning tool'],
              ['Amsterdam', 'Amsterdam 3D (AMS Institute)', 'EUR 8M', 'Open data pioneer EU'],
            ].map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Tendências 2025-2030</h3>
        <div style={S.highlight}>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, marginTop: '0.5rem' }}>
            <li><strong>Gemelos de Gemelos (System of Systems DT):</strong> interoperabilidade entre CDTs de cidades vizinhas para gestão de recursos regionais.</li>
            <li><strong>Quantum Computing + Grid DT:</strong> optimização de despacho com milhões de variáveis em segundos (Fujitsu, IBM).</li>
            <li><strong>Generative AI + CDT:</strong> LLMs que interpretam alertas do DT e geram relatórios em linguagem natural para decisores não-técnicos.</li>
            <li><strong>Edge DT:</strong> modelos DT comprimidos a correr em hardware edge (subestações, IEDs) para resposta sub-segundo sem latência cloud.</li>
            <li><strong>Digital Twin EU Policy:</strong> Directiva Europeia de Dados (Data Act 2025) cria obrigações de partilha de dados para CDTs financiados publicamente.</li>
          </ul>
        </div>
        <div style={S.note}>
          O conceito de "Living Lab" — cidade como laboratório vivo de inovação — converge com o CDT: o gémeo
          digital torna-se a plataforma de experimentação segura onde políticas urbanas são testadas virtualmente
          antes de implementação física, democratizando o processo de tomada de decisão e reduzindo o risco de
          intervenções irreversíveis no espaço público.
        </div>
      </section>
    </div>
  );
}
