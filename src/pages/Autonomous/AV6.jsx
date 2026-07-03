import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Autonomous';

const mod = modules[5];
const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

function V2XTaxonomyDiagram() {
  const spokes = [
    { label: 'V2V', sublabel: 'Vehicle-to-Vehicle', detail: '300m · 10Hz · BSM', latency: '2ms', color: '#f97316', angle: -90 },
    { label: 'V2I', sublabel: 'Vehicle-to-Infrastructure', detail: 'SPAT · MAP · IVI', latency: '5ms', color: '#f97316', angle: -18 },
    { label: 'V2P', sublabel: 'Vehicle-to-Pedestrian', detail: 'Smartphone app', latency: '8ms', color: '#f97316', angle: 54 },
    { label: 'V2N', sublabel: 'Vehicle-to-Network', detail: 'Cloud · HD Maps · OTA', latency: '50ms', color: '#f97316', angle: 126 },
    { label: 'V2G', sublabel: 'Vehicle-to-Grid', detail: 'Bidirectional EV', latency: '100ms', color: '#f97316', angle: 198 },
  ];
  const cx = 380, cy = 145, r = 90;
  return (
    <svg viewBox="0 0 760 310" style={{ width: '100%' }}>
      <rect width={760} height={310} fill="var(--bg-secondary)" rx={10} />
      <text x={380} y={20} textAnchor="middle" fill={color} fontSize={13} fontWeight={700}>V2X — Taxonomia de Comunicação Veicular</text>
      {/* Draw lines first (behind everything) */}
      {spokes.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const ex = cx + r * Math.cos(rad);
        const ey = cy + r * Math.sin(rad);
        return <line key={i} x1={cx} y1={cy} x2={ex} y2={ey} stroke={s.color} strokeWidth={1.5} strokeDasharray="4 3" />;
      })}
      {/* Spoke nodes and labels on top */}
      {spokes.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const ex = cx + r * Math.cos(rad);
        const ey = cy + r * Math.sin(rad);
        // V2V points straight up — place label to the right instead
        const isTop = s.angle === -90;
        const lx = isTop ? ex + 30 : cx + (r + 58) * Math.cos(rad);
        const ly = isTop ? ey : cy + (r + 58) * Math.sin(rad);
        const anchor = isTop ? 'start' : 'middle';
        return (
          <g key={i}>
            <ellipse cx={ex} cy={ey} rx={22} ry={14} fill="var(--bg-secondary)" stroke="none" />
            <ellipse cx={ex} cy={ey} rx={22} ry={14} fill={`${s.color}20`} stroke={s.color} strokeWidth={1.5} />
            <text x={ex} y={ey + 4} textAnchor="middle" fill={s.color} fontSize={9} fontWeight={800}>{s.label}</text>
            <text x={lx} y={ly - 14} textAnchor={anchor} fill={s.color} fontSize={9} fontWeight={700}>{s.sublabel}</text>
            <text x={lx} y={ly} textAnchor={anchor} fill="#fb923c" fontSize={8}>{s.detail}</text>
            <rect x={isTop ? lx : lx - 20} y={ly + 4} width={40} height={14} rx={4} fill={`${s.color}20`} />
            <text x={isTop ? lx + 20 : lx} y={ly + 14} textAnchor={anchor} fill={s.color} fontSize={8} fontWeight={700}>{s.latency}</text>
          </g>
        );
      })}
      {/* Center node on top */}
      <ellipse cx={cx} cy={cy} rx={32} ry={20} fill="var(--bg-secondary)" stroke="none" />
      <ellipse cx={cx} cy={cy} rx={32} ry={20} fill={`${color}20`} stroke={color} strokeWidth={2} />
      <text x={cx} y={cy - 4} textAnchor="middle" fill={color} fontSize={9} fontWeight={700}>EGO</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill={color} fontSize={9} fontWeight={700}>VEHICLE</text>
      <text x={380} y={298} textAnchor="middle" fill="#fb923c" fontSize={9}>V2X = Vehicle-to-Everything · 5.9 GHz ITS band · IEEE 1609 / ETSI ITS-G5</text>
    </svg>
  );
}

function DSRCvsCVX2Diagram() {
  const techs = [
    { name: 'DSRC / 802.11p', sub: 'WAVE · IEEE 1609', freq: '5.9 GHz', latency: '2 ms', range: '300–1000 m', infra: 'Não necessária', status: 'Maduro / Sunset', color: '#f97316' },
    { name: 'C-V2X PC5', sub: 'Sidelink Direto · Rel-14/16', freq: '5.9 GHz', latency: '1 ms', range: '500 m', infra: 'Não necessária', status: 'Alta densidade', color: '#f97316' },
    { name: 'C-V2X Uu', sub: '5G Network · Rel-16 NR-V2X', freq: '5G NR', latency: '10–50 ms', range: 'Ilimitado', infra: 'Cobertura 5G', status: 'Alcance global', color: '#f97316' },
  ];
  const headers = ['Frequência', 'Latência', 'Alcance', 'Infraestrutura', 'Diferencial'];
  const fields = ['freq', 'latency', 'range', 'infra', 'status'];
  return (
    <svg viewBox="0 0 760 240" style={{ width: '100%' }}>
      <rect width={760} height={240} fill="var(--bg-secondary)" rx={10} />
      <text x={380} y={20} textAnchor="middle" fill={color} fontSize={13} fontWeight={700}>DSRC vs C-V2X — Comparação de Tecnologias</text>
      {/* Header row */}
      {['Tecnologia', ...headers].map((h, i) => (
        <text key={i} x={10 + i * 125} y={42} fill="#f97316" fontSize={9} fontWeight={700}>{h}</text>
      ))}
      <line x1={5} y1={48} x2={755} y2={48} stroke="var(--card-border)" strokeWidth={1} />
      {techs.map((t, ti) => {
        const y = 60 + ti * 58;
        return (
          <g key={ti}>
            <rect x={5} y={y - 4} width={750} height={52} rx={6} fill={`${t.color}08`} />
            <rect x={5} y={y - 4} width={3} height={52} rx={2} fill={t.color} />
            <text x={15} y={y + 10} fill={t.color} fontSize={10} fontWeight={700}>{t.name}</text>
            <text x={15} y={y + 23} fill="#f97316" fontSize={8}>{t.sub}</text>
            {fields.map((f, fi) => (
              <text key={fi} x={135 + fi * 125} y={y + 14} fill="#fb923c" fontSize={9}>{t[f]}</text>
            ))}
          </g>
        );
      })}
      <text x={380} y={230} textAnchor="middle" fill="#fb923c" fontSize={9}>China mandatou C-V2X em 2021 · EUA transiciona DSRC→C-V2X · EU C-V2X via C-Roads · Japão ARIB STD-T109</text>
    </svg>
  );
}

function RSUDiagram() {
  return (
    <svg viewBox="0 0 760 240" style={{ width: '100%' }}>
      <rect width={760} height={240} fill="var(--bg-secondary)" rx={10} />
      <text x={380} y={20} textAnchor="middle" fill={color} fontSize={13} fontWeight={700}>RSU — Road Side Unit e Mensagens ITS</text>

      {/* Road */}
      <rect x={0} y={170} width={760} height={70} fill="rgba(249,115,22,0.06)" />
      <line x1={0} y1={205} x2={760} y2={205} stroke="#f59e0b" strokeWidth={2} strokeDasharray="30 20" />
      <text x={380} y={230} textAnchor="middle" fill="#fb923c" fontSize={9}>Via pública · 2 faixas</text>

      {/* Traffic light pole with RSU */}
      <rect x={178} y={90} width={6} height={80} fill="#fb923c" />
      <rect x={162} y={60} width={38} height={60} rx={5} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth={2} />
      <circle cx={181} cy={74} r={7} fill="#f97316" />
      <circle cx={181} cy={88} r={7} fill="#f59e0b" />
      <circle cx={181} cy={102} r={7} fill="#f97316" />
      {/* RSU box */}
      <rect x={195} y={70} width={55} height={35} rx={5} fill={`${color}20`} stroke={color} strokeWidth={1.5} />
      <text x={222} y={84} textAnchor="middle" fill={color} fontSize={8} fontWeight={700}>RSU</text>
      <text x={222} y={96} textAnchor="middle" fill="#fb923c" fontSize={7}>DSRC/C-V2X</text>
      <text x={222} y={106} textAnchor="middle" fill="#fb923c" fontSize={7}>GPS · Backhaul</text>

      {/* Coverage bubble */}
      <ellipse cx={330} cy={165} rx={160} ry={55} fill={`${color}08`} stroke={color} strokeWidth={1} strokeDasharray="6 4" />
      <text x={450} y={130} fill={color} fontSize={8}>300m cobertura</text>

      {/* Vehicle OBU */}
      <rect x={340} y={178} width={70} height={22} rx={5} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth={1.5} />
      <circle cx={355} cy={200} r={5} fill="#fb923c" />
      <circle cx={395} cy={200} r={5} fill="#fb923c" />
      <text x={375} y={193} textAnchor="middle" fill="#fb923c" fontSize={8}>OBU</text>

      {/* Communication arrows */}
      <line x1={245} y1={100} x2={340} y2={180} stroke={color} strokeWidth={1.5} strokeDasharray="5 3" />

      {/* Messages */}
      {[
        { label: 'SPAT', sub: 'Signal Phase & Timing · 100ms', x: 540, y: 60, c: '#f97316' },
        { label: 'MAP', sub: 'Intersection Geometry · cm precision', x: 540, y: 100, c: '#f97316' },
        { label: 'BSM', sub: 'Basic Safety Messages · vehicles→RSU', x: 540, y: 140, c: '#f97316' },
        { label: 'IVI', sub: 'In-Vehicle Information · advisories', x: 540, y: 180, c: '#f97316' },
      ].map((m, i) => (
        <g key={i}>
          <rect x={490} y={m.y - 14} width={260} height={30} rx={5} fill={`${m.c}12`} stroke={`${m.c}30`} />
          <text x={500} y={m.y} fill={m.c} fontSize={10} fontWeight={700}>{m.label}</text>
          <text x={500} y={m.y + 12} fill="#f97316" fontSize={8}>{m.sub}</text>
        </g>
      ))}
    </svg>
  );
}

function PlatooningDiagram() {
  return (
    <svg viewBox="0 0 760 250" style={{ width: '100%' }}>
      <rect width={760} height={250} fill="var(--bg-secondary)" rx={10} />
      <text x={380} y={20} textAnchor="middle" fill={color} fontSize={13} fontWeight={700}>Platooning e Manobras Cooperativas</text>

      {/* Road */}
      <rect x={0} y={55} width={760} height={90} fill="rgba(249,115,22,0.06)" />
      <line x1={0} y1={100} x2={760} y2={100} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="25 15" />

      {/* Truck 1 - Leader */}
      <rect x={30} y={70} width={100} height={30} rx={5} fill={`${color}30`} stroke={color} strokeWidth={2} />
      <text x={80} y={88} textAnchor="middle" fill={color} fontSize={9} fontWeight={700}>LEADER</text>
      <circle cx={45} cy={100} r={5} fill="#fb923c" />
      <circle cx={115} cy={100} r={5} fill="#fb923c" />

      {/* Truck 2 */}
      <rect x={160} y={70} width={100} height={30} rx={5} fill={`${color}18`} stroke={color} strokeWidth={1.5} />
      <text x={210} y={88} textAnchor="middle" fill={color} fontSize={9} fontWeight={700}>FOLLOWER 1</text>
      <circle cx={175} cy={100} r={5} fill="#fb923c" />
      <circle cx={245} cy={100} r={5} fill="#fb923c" />

      {/* Truck 3 */}
      <rect x={290} y={70} width={100} height={30} rx={5} fill={`${color}10`} stroke={color} strokeWidth={1.5} />
      <text x={340} y={88} textAnchor="middle" fill={color} fontSize={9} fontWeight={700}>FOLLOWER 2</text>
      <circle cx={305} cy={100} r={5} fill="#fb923c" />
      <circle cx={375} cy={100} r={5} fill="#fb923c" />

      {/* V2V links */}
      <line x1={130} y1={85} x2={160} y2={85} stroke="#f97316" strokeWidth={2} />
      <text x={145} y={80} textAnchor="middle" fill="#f97316" fontSize={7}>2ms</text>
      <line x1={260} y1={85} x2={290} y2={85} stroke="#f97316" strokeWidth={2} />
      <text x={275} y={80} textAnchor="middle" fill="#f97316" fontSize={7}>2ms</text>

      {/* Gap labels */}
      <text x={145} y={115} textAnchor="middle" fill="#f59e0b" fontSize={8}>4 m gap</text>
      <text x={275} y={115} textAnchor="middle" fill="#f59e0b" fontSize={8}>4 m gap</text>

      {/* Fuel savings */}
      <rect x={160} y={50} width={80} height={18} rx={4} fill="#f9731620" stroke="rgba(249,115,22,0.25)" />
      <text x={200} y={63} textAnchor="middle" fill="#f97316" fontSize={8}>-10–15% fuel</text>
      <rect x={290} y={50} width={80} height={18} rx={4} fill="#f9731620" stroke="rgba(249,115,22,0.25)" />
      <text x={330} y={63} textAnchor="middle" fill="#f97316" fontSize={8}>-4–7% fuel</text>

      {/* Cooperative merge section */}
      <text x={580} y={45} textAnchor="middle" fill="#fb923c" fontSize={10} fontWeight={700}>Merge Cooperativo</text>

      {/* Road merge */}
      <rect x={470} y={55} width={260} height={90} fill="rgba(249,115,22,0.06)" />
      <line x1={470} y1={88} x2={730} y2={88} stroke="#f59e0b" strokeWidth={1} strokeDasharray="10 8" />
      <line x1={470} y1={112} x2={600} y2={112} stroke="#f59e0b" strokeWidth={1} strokeDasharray="10 8" />
      {/* merge point */}
      <line x1={600} y1={112} x2={680} y2={88} stroke="#f59e0b" strokeWidth={1} />

      {/* Car A main lane */}
      <rect x={475} y={64} width={50} height={20} rx={4} fill={`${color}25`} stroke={color} strokeWidth={1.5} />
      <text x={500} y={78} textAnchor="middle" fill={color} fontSize={8} fontWeight={700}>CAR A</text>

      {/* Car B merging */}
      <rect x={510} y={95} width={50} height={20} rx={4} fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth={1.5} />
      <text x={535} y={109} textAnchor="middle" fill="#f97316" fontSize={8} fontWeight={700}>CAR B</text>

      {/* Negotiation arrow */}
      <path d="M 525 74 Q 555 88 535 95" fill="none" stroke="#f97316" strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)" />
      <text x={560} y={82} fill="#f97316" fontSize={7}>V2V negoc.</text>
      <text x={560} y={92} fill="#f97316" fontSize={7}>A passa 1.º</text>

      <text x={380} y={245} textAnchor="middle" fill="#fb923c" fontSize={9}>CACC: usa acc/braking V2V para estabilidade de cadeia · gap 8–12m a 80km/h vs 50m (humano)</text>
    </svg>
  );
}

function SmartRoadsDiagram() {
  const regions = [
    { label: 'China', x: 590, y: 50, w: 130, color: '#f97316', status: 'Mandatado C-V2X', detail: '10,000+ RSU · 6,000km' },
    { label: 'Europa', x: 230, y: 50, w: 130, color: '#fb923c', status: 'C-Roads Programme', detail: '1,700km · 19 países' },
    { label: 'EUA', x: 50, y: 90, w: 130, color: '#fbbf24', status: 'DSRC→C-V2X', detail: 'Michigan Corridor · USDOT' },
    { label: 'Japão', x: 590, y: 130, w: 130, color: '#ea580c', status: 'ITS Spot System', detail: 'Expressways · ARIB' },
  ];
  return (
    <svg viewBox="0 0 760 270" style={{ width: '100%' }}>
      <rect width={760} height={270} fill="var(--bg-secondary)" rx={10} />
      <text x={380} y={20} textAnchor="middle" fill={color} fontSize={13} fontWeight={700}>Smart Roads — Deployment Global V2X</text>

      {/* Simplified world map outline */}
      {/* Americas */}
      <path d="M 80 60 L 100 55 L 140 58 L 160 70 L 165 100 L 150 130 L 130 145 L 110 160 L 100 150 L 85 130 L 75 100 Z" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth={1} />
      {/* Europe */}
      <path d="M 195 55 L 230 50 L 260 55 L 270 80 L 255 100 L 240 105 L 210 100 L 190 80 Z" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth={1} />
      {/* Africa */}
      <path d="M 210 110 L 250 105 L 270 120 L 275 160 L 250 185 L 225 180 L 205 160 L 200 130 Z" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth={1} />
      {/* Asia */}
      <path d="M 290 45 L 380 40 L 480 50 L 540 60 L 590 55 L 630 65 L 640 100 L 610 120 L 560 130 L 500 125 L 450 130 L 400 120 L 330 115 L 285 100 L 280 70 Z" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth={1} />
      {/* Australia */}
      <path d="M 550 155 L 610 150 L 640 160 L 650 185 L 620 200 L 575 195 L 545 180 Z" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth={1} />

      {/* Region highlights — solid bg rect first so boxes appear above map */}
      {regions.map((r, i) => (
        <g key={i}>
          <rect x={r.x} y={r.y} width={r.w} height={54} rx={6} fill="var(--bg-secondary)" stroke="none" />
          <rect x={r.x} y={r.y} width={r.w} height={54} rx={6} fill={`${r.color}15`} stroke={`${r.color}60`} strokeWidth={1.5} />
          <text x={r.x + r.w / 2} y={r.y + 14} textAnchor="middle" fill={r.color} fontSize={10} fontWeight={700}>{r.label}</text>
          <text x={r.x + r.w / 2} y={r.y + 28} textAnchor="middle" fill="#fb923c" fontSize={8}>{r.status}</text>
          <text x={r.x + r.w / 2} y={r.y + 42} textAnchor="middle" fill="#f97316" fontSize={8}>{r.detail}</text>
        </g>
      ))}

      {/* Legend */}
      {[
        { label: 'Mandatado', color: '#f97316' },
        { label: 'Piloto ativo', color: '#fb923c' },
        { label: 'Em transição', color: '#fbbf24' },
        { label: 'Expressways', color: '#ea580c' },
      ].map((l, i) => (
        <g key={i} transform={`translate(${20 + i * 175}, 228)`}>
          <rect x={0} y={0} width={12} height={12} rx={2} fill={l.color} />
          <text x={17} y={10} fill="#fb923c" fontSize={9}>{l.label}</text>
        </g>
      ))}

      <text x={380} y={258} textAnchor="middle" fill="#fb923c" fontSize={8}>Smart road extras: IoT sensors · inductive charging (Electreon) · dynamic speed limits · connected tunnels</text>
    </svg>
  );
}

function PKIDiagram() {
  // Row y positions with uniform 35px gaps
  const r1y = 35;  // Root CA
  const r2y = 115; // Certs (gap=42 from bottom of r1)
  const r3y = 195; // OBU + sides (gap=35 from bottom of r2)
  return (
    <svg viewBox="0 0 760 255" style={{ width: '100%' }}>
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
        <marker id="arr-dash" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
        </marker>
      </defs>
      <rect width={760} height={255} fill="var(--bg-secondary)" rx={10} />
      <text x={380} y={20} textAnchor="middle" fill={color} fontSize={13} fontWeight={700}>PKI V2X — Pseudónimos e Detecção de Mau Comportamento</text>

      {/* Arrows (behind boxes) */}
      <line x1={350} y1={r1y+38} x2={218} y2={r2y} stroke={color} strokeWidth={1.5} markerEnd="url(#arr)" />
      <line x1={410} y1={r1y+38} x2={542} y2={r2y} stroke={color} strokeWidth={1.5} markerEnd="url(#arr)" />
      <line x1={210} y1={r2y+45} x2={330} y2={r3y} stroke="#fb923c" strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr-dash)" />
      <line x1={550} y1={r2y+45} x2={430} y2={r3y} stroke="#fb923c" strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr-dash)" />
      <line x1={280} y1={r3y+19} x2={222} y2={r3y+19} stroke="#f97316" strokeWidth={1.5} markerEnd="url(#arr)" />
      <line x1={480} y1={r3y+19} x2={540} y2={r3y+19} stroke="#f97316" strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr-dash)" />

      {/* Root CA */}
      <rect x={315} y={r1y} width={130} height={38} rx={7} fill="var(--bg-secondary)" />
      <rect x={300} y={r1y} width={160} height={38} rx={7} fill={`${color}20`} stroke={color} strokeWidth={2} />
      <text x={380} y={r1y+15} textAnchor="middle" fill={color} fontSize={10} fontWeight={700}>Root CA</text>
      <text x={380} y={r1y+29} textAnchor="middle" fill="#f97316" fontSize={8}>Certificate Authority · SCMS / CCMS</text>

      {/* Pseudonym Cert #1 */}
      <rect x={130} y={r2y} width={160} height={45} rx={6} fill="var(--bg-secondary)" />
      <rect x={130} y={r2y} width={160} height={45} rx={6} fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth={1.5} />
      <text x={210} y={r2y+16} textAnchor="middle" fill="#f97316" fontSize={9} fontWeight={700}>Pseudonym Cert #1</text>
      <text x={210} y={r2y+29} textAnchor="middle" fill="#f97316" fontSize={8}>válido 5 min · anónimo</text>
      <text x={210} y={r2y+40} textAnchor="middle" fill="#fb923c" fontSize={7}>rotação automática</text>

      {/* Pseudonym Cert #N */}
      <rect x={470} y={r2y} width={160} height={45} rx={6} fill="var(--bg-secondary)" />
      <rect x={470} y={r2y} width={160} height={45} rx={6} fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth={1.5} />
      <text x={550} y={r2y+16} textAnchor="middle" fill="#f97316" fontSize={9} fontWeight={700}>Pseudonym Cert #N</text>
      <text x={550} y={r2y+29} textAnchor="middle" fill="#f97316" fontSize={8}>válido 5 min · anónimo</text>
      <text x={550} y={r2y+40} textAnchor="middle" fill="#fb923c" fontSize={7}>pool de 100+ certs</text>

      {/* Veículo receptor */}
      <rect x={50} y={r3y} width={170} height={38} rx={6} fill="var(--bg-secondary)" />
      <rect x={50} y={r3y} width={170} height={38} rx={6} fill="#f9731615" stroke="#f97316" strokeWidth={1.5} />
      <text x={135} y={r3y+15} textAnchor="middle" fill="#f97316" fontSize={9} fontWeight={700}>Veículo receptor</text>
      <text x={135} y={r3y+29} textAnchor="middle" fill="#f97316" fontSize={8}>verifica assinatura PKI</text>

      {/* OBU assina BSM */}
      <rect x={280} y={r3y} width={200} height={38} rx={6} fill="var(--bg-secondary)" />
      <rect x={280} y={r3y} width={200} height={38} rx={6} fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth={1.5} />
      <text x={380} y={r3y+15} textAnchor="middle" fill="#f97316" fontSize={10} fontWeight={700}>OBU assina BSM</text>
      <text x={380} y={r3y+29} textAnchor="middle" fill="#f97316" fontSize={8}>posição · velocidade · heading · assinatura digital</text>

      {/* Misbehaviour Detection */}
      <rect x={542} y={r3y} width={210} height={38} rx={6} fill="var(--bg-secondary)" />
      <rect x={542} y={r3y} width={210} height={38} rx={6} fill="#ea580c15" stroke="#f97316" strokeWidth={1.5} />
      <text x={650} y={r3y+15} textAnchor="middle" fill="#f97316" fontSize={9} fontWeight={700}>Misbehaviour Detection</text>
      <text x={650} y={r3y+29} textAnchor="middle" fill="#f97316" fontSize={8}>plausibilidade · MDA local/global</text>

      <text x={380} y={247} textAnchor="middle" fill="#fb923c" fontSize={8}>Pseudónimo roda a cada 5 min · impede rastreio · mantém autenticidade · SCMS (EUA) · CCMS (EU)</text>
    </svg>
  );
}

export default function AV6() {
  return (
    <div style={S.page}>
      <Link to="/autonomous" style={S.back}>← Autonomous Vehicles</Link>
      <div style={S.badge}>MÓDULO 06</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. V2X — Taxonomia e Stack de Comunicação</h2>
        <p style={S.p}>V2X (Vehicle-to-Everything) é o termo guarda-chuva para todas as formas de comunicação entre um veículo e o seu entorno. A norma opera na banda ITS de 5.9 GHz reservada exclusivamente para segurança rodoviária, garantindo ausência de interferência com Wi-Fi doméstico. O V2V (Vehicle-to-Vehicle) permite que os veículos partilhem posição, velocidade e heading dez vezes por segundo através de BSM (Basic Safety Messages) — detetando perigos em ângulo cego a 300 metros, antes que qualquer LiDAR ou câmera os possa ver. Este alcance antecipado é o argumento central para V2X: a percepção cooperativa estende o horizonte do sensor individual.</p>
        <p style={S.p}>O V2I (Vehicle-to-Infrastructure) liga os veículos a semáforos e RSUs (Road Side Units), recebendo mensagens SPAT com a fase atual do sinal e o tempo exato para a próxima mudança — permitindo que o veículo calcule a velocidade ideal para atravessar o semáforo a verde (green wave) sem parar. O V2P protege utilizadores vulneráveis como ciclistas e peões com aplicação smartphone. O V2N conecta ao cloud para actualizações de HD Maps e routing em tempo real. O V2G fecha o ciclo com a rede eléctrica para carregamento bidirecional de veículos elétricos, participando nos mercados de energia como baterias móveis.</p>
        <div style={S.diagram}><V2XTaxonomyDiagram /></div>
        <div style={S.highlight}>A latência é o parâmetro crítico do V2X: o V2V direto opera a 2ms — suficiente para travar um veículo a 100km/h antes de um impacto 300ms à frente. Comparativamente, um humano tem um tempo de reação de 150-250ms. A comunicação V2X pode assim "ver" e reagir a eventos que o condutor humano e os sensores onboard ainda não detetaram, criando uma camada de segurança verdadeiramente cooperativa.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. DSRC vs C-V2X — Tecnologias de Comunicação</h2>
        <p style={S.p}>A "guerra do espectro" do V2X opôs duas famílias tecnológicas durante duas décadas. O DSRC (Dedicated Short-Range Communications) baseia-se no padrão Wi-Fi 802.11p, standardizado como WAVE (Wireless Access in Vehicular Environments) na família IEEE 1609, com a FCC americana a reservar a banda 5.9 GHz em 1999. A sua arquitectura ad-hoc — sem infraestrutura de rede — permite comunicação direta veículo-a-veículo com latência de 2ms e range até 1000m em linha de vista, sendo a tecnologia mais madura com décadas de campo de provas. No entanto, a pressão da indústria telecomunicações levou a FCC a redistribuir 45MHz da banda para Wi-Fi em 2020, comprometendo o futuro americano do DSRC.</p>
        <p style={S.p}>O C-V2X (Cellular V2X), standardizado pelo 3GPP a partir do Release 14 em 2017, opera em dois modos complementares. O modo PC5 (sidelink) permite comunicação direta entre veículos sem passar pela rede celular, com latência de 1ms e melhor desempenho em cenários de alta densidade — simulações mostram que o PC5 mantém fiabilidade de entrega superior ao DSRC quando há mais de 200 veículos por km². O modo Uu comunica via rede 5G (eNodeB ou gNodeB), com latência de 10-50ms mas alcance ilimitado — ideal para V2N e coordenação a longa distância. O Release 16 (NR-V2X) adiciona suporte a unicast e groupcast para platooning e teleoperation. A China tornou-se o árbitro desta disputa ao mandar C-V2X em todos os novos veículos a partir de 2021, inclinando o mercado global de forma decisiva.</p>
        <div style={S.diagram}><DSRCvsCVX2Diagram /></div>
        <div style={S.note}>O DSRC e o C-V2X PC5 são fundamentalmente incompatíveis ao nível de rádio — um veículo com DSRC não consegue comunicar com um com C-V2X sem hardware de duplo modo. Esta fragmentação é um dos maiores obstáculos ao deployment global: numa auto-estrada europeia com veículos de diferentes origens e idades, a ausência de standard único elimina os benefícios de segurança cooperativa que justificam o investimento em infraestrutura.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. RSU — Road Side Units e Infraestrutura</h2>
        <p style={S.p}>A RSU é o nó físico da infraestrutura V2X — essencialmente um computador de bordo de estrada equipado com rádio DSRC ou C-V2X, receptor GPS de alta precisão, e ligação backhaul (fibra ou LTE) ao centro de gestão de tráfego. Tipicamente montada em poste de semáforo ou sinal, a RSU emite mensagens a cada 100ms: a mensagem SPAT (Signal Phase and Timing) indica a fase atual do semáforo (verde/amarelo/vermelho), o tempo em segundos até à próxima transição com precisão de 100ms, e os movimentos permitidos em cada fase — tornando o "prever o semáforo" uma realidade técnica em vez de adivinhação do condutor.</p>
        <p style={S.p}>A mensagem MAP descreve a geometria da intersecção com precisão centimétrica — IDs de faixa, IDs de conexão, abordagens e saídas, limites de velocidade por faixa, e localização de passadeiras. Este mapa local é mais preciso e actualizado que qualquer HD Map por ser gerado em tempo real pela própria infraestrutura. A mensagem IVI (In-Vehicle Information) transmite avisos personalizados: zona de obras à frente, velocidade variável, perigo meteorológico. O padrão ETSI ITS-G5 governa o deployment europeu; o DSRC/WAVE (ASTM E2213-03) o americano. O custo de uma RSU é de €5,000-15,000 por unidade, a instalar junto a semáforos que já custaram €50,000+ — o argumento económico é de incremento marginal, não de infraestrutura de raiz.</p>
        <div style={S.diagram}><RSUDiagram /></div>
        <div style={S.highlight}>O valor da RSU multiplica-se com a penetração de OBUs nos veículos. Com 5% dos veículos equipados, a RSU serve principalmente como sensor coletivo de tráfego; com 30%, começa a otimizar semáforos adaptativamente; com 70%+, os benefícios de segurança cooperativa emergem plenamente. Este efeito de rede cria o dilema do ovo e da galinha: sem RSUs, ninguém compra OBUs; sem OBUs, o ROI das RSUs não se materializa.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Cooperative Driving — Platooning e Manobras Cooperativas</h2>
        <p style={S.p}>O platooning de camiões é a aplicação V2X comercialmente mais madura. Os projetos SARTRE (EU, 2012), KONVOI (Alemanha), e a Peloton Technology (EUA) demonstraram que uma coluna de três camiões mantendo um intervalo de 8-12 metros a 80 km/h — impossível para condutores humanos sem comunicação direta — reduz a resistência aerodinâmica do seguidor em 10-15% de consumo de combustível e do líder em 4-7%. A chave é a latência garantida abaixo de 20ms: o travão do líder é comunicado via V2V ao seguidor antes que o impulso mecânico se propague, permitindo resposta síncrona praticamente instantânea. A Scania tem platooning em operação comercial limitada desde 2019 na Suécia.</p>
        <p style={S.p}>O CACC (Cooperative Adaptive Cruise Control) vai além do ACC convencional baseado em radar: em vez de reagir à distância medida, o veículo seguidor recebe via V2V os valores de aceleração e travagem do líder com antecedência temporal, permitindo uma resposta proativa que elimina as oscilações de velocidade em cascata (efeito acordeão) que caracterizam o tráfego humano. A estabilidade de cadeia — capacidade de uma perturbação se atenuar em vez de amplificar ao longo da coluna — é matematicamente demonstrável com CACC mas impossível com controlo baseado apenas em sensores locais. Para manobras cooperativas como a fusão de faixas, os veículos negociam via V2V a prioridade de passagem antes de executar qualquer movimento físico, eliminando os conflitos de intenção que causam a maioria dos near-misses em zonas de fusão.</p>
        <div style={S.diagram}><PlatooningDiagram /></div>
        <div style={S.note}>O platooning de camiões enfrenta obstáculos regulatórios além dos técnicos: a maioria dos países exige um condutor humano por veículo, tornando um pelotão de três camiões legalmente equivalente a três veículos independentes. A legislação alemã de 2022 foi pioneira ao permitir platooning com dois condutores para três veículos. Os benefícios económicos dependem de rotas longas e previsíveis — autoestradas entre centros logísticos — onde a densidade de veículos equipados é suficiente para formar colunas espontâneas.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Smart Roads e Deployment Global</h2>
        <p style={S.p}>A China lidera o deployment V2X com uma abordagem top-down única: o Ministério da Indústria e Tecnologia da Informação mandatou chipsets C-V2X em todos os novos veículos de passageiros a partir de 2025, e implantou RSUs em mais de 6,000km de auto-estrada e em toda a rede urbana principal de Pequim e Xangai — totalizando mais de 10,000 RSUs operacionais em 2024. O ecosistema completo inclui veículos conectados, RSUs, centros de gestão de tráfego integrados com IA, e até robots de inspecção de estrada com C-V2X. O resultado é o maior laboratório V2X do mundo, acelerando iterações tecnológicas que os mercados fragmentados ocidentais não conseguem replicar.</p>
        <p style={S.p}>Na Europa, o programa C-Roads conecta 1,700km de estrada em 19 países, partilhando dados em tempo real de obras, pavimento escorregadio, e condução em contramão — os casos de uso com maior impacto de segurança imediato. A Alemanha tem o deployment mais denso em auto-estradas (Autobahn), enquanto o programa EU EIP (Ecosystem Innovation Programme) financia RSUs em corredores transeuropeus. Nos EUA, o Connected Vehicle Pilot do USDOT testou DSRC em Nova Iorque, Tampa e Wyoming com mais de 27,000 OBUs instalados entre 2016-2020, mas a redistribuição do espectro em 2020 e a transição para C-V2X atrasou o scale-up. As smart roads de nova geração vão além do V2X: sensores IoT embebidos no asfalto para detecção de gelo e contagem de tráfego, faixas de carregamento indutivo da Electreon em testes em Israel e Suécia, iluminação inteligente que acende apenas quando há tráfego, e tunéis conectados com localização por pseudolites para colmatar a perda de GPS.</p>
        <div style={S.diagram}><SmartRoadsDiagram /></div>
        <div style={S.highlight}>A Japan ITS Spot é a infraestrutura V2X mais antiga do mundo em operação contínua — implantada em auto-estradas japonesas desde 2011 com mais de 1,600 pontos e mais de 5 milhões de OBUs nos veículos. O sistema fornece informação de tráfego em tempo real, alertas de segurança e cobranças electrónicas de portagem numa única tecnologia DSRC a 5.8GHz. A taxa de penetração de 40%+ de OBUs nas auto-estradas japonesas é o caso de sucesso mais próximo de uma visão V2X plena — demonstrando que infraestrutura + regulação de longo prazo + paciência produz ecosistemas funcionais.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Segurança, Privacidade e Desafios</h2>
        <p style={S.p}>A segurança V2X é existencial: uma mensagem BSM falsa anunciando "veículo de emergência a aproximar-se" poderia causar travagem em massa numa auto-estrada. O modelo de segurança usa PKI (Public Key Infrastructure) com pseudónimos rotativos — cada OBU recebe um pool de centenas de certificados de curta duração do SCMS (Security Credential Management System) nos EUA ou CCMS (Cooperative-ITS Credentials Management System) na UE. Cada BSM é assinado digitalmente com o certificado pseudónimo atual, rotando a cada 5 minutos. O receptor verifica a assinatura criptograficamente sem saber a identidade real do veículo emissor — autenticidade sem identificabilidade. Este equilíbrio é engenhosamente elegante: garante que a mensagem vem de um veículo real certificado, mas não permite rastrear o veículo específico.</p>
        <p style={S.p}>A detecção de mau comportamento é a segunda linha de defesa: verificações de plausibilidade locais (este veículo está a afirmar estar em dois lugares ao mesmo tempo? A velocidade reportada é fisicamente impossível?) combinadas com análise global na Misbehaviour Detection Authority (MDA), que pode revogar os certificados de um veículo mau comportado. Mesmo com pseudónimos, a correlação de mensagens de múltiplas RSUs ao longo de uma rota pode re-identificar um veículo — problema activo de investigação. Os desafios estruturais de deployment vão além da segurança: o problema do ovo e galinha (RSU sem OBUs = investimento sem retorno), o ciclo de substituição de frota de 15 anos para atingir penetração crítica de OBUs, a coexistência de espectro com Wi-Fi na banda 5.9GHz, os modelos de negócio para financiar RSUs (o operador de estrada, o município, a indústria automóvel, o Estado?), e a interoperabilidade transfronteiriça entre padrões ETSI, IEEE e 3GPP que ainda não é transparente para o utilizador final.</p>
        <div style={S.diagram}><PKIDiagram /></div>
        <div style={S.note}>O maior risco sistémico de V2X não é técnico mas de governança: a fragmentação entre DSRC e C-V2X, entre SCMS e CCMS, entre ETSI ITS-G5 e WAVE, e entre regulações nacionais, atrasa a criação do efeito de rede que torna o V2X verdadeiramente valioso. Sem interoperabilidade global, cada país cria um "jardim murado" que funciona bem internamente mas falha nos corredores transfronteiriços onde os veículos passam de um ecossistema para outro. A União Internacional de Telecomunicações (UIT) coordena mas não legisla — o alinhamento global continua a depender de negociações bilaterais e multilaterais lentas.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>V2X — Taxonomia e Stack de Comunicação</strong> — V2X (Vehicle-to-Everything) abrange V2V (veículo a veículo), V2I (infra-estrutura), V2P (peões) e V2N (rede); reduz acidentes por partilhar intenções e avisos além do alcance sensorial do veículo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>DSRC vs C-V2X — Tecnologias de Comunicação</strong> — DSRC (802.11p/WAVE) é peer-to-peer de baixa latência (~2ms); C-V2X (PC5 e Uu) usa infra-estrutura celular com melhor range e evolução para 5G NR-V2X — a maioria dos OEMs migrou para C-V2X.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RSU — Road Side Units e Infraestrutura</strong> — RSUs são unidades instaladas em cruzamentos que transmitem informação de semáforos, acidentes e condições da estrada; integradas com gestão de tráfego, permitem Connected Traffic Light Assist e redução de consumo energético.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Cooperative Driving — Platooning e Manobras Cooperativas</strong> — platooning agrupa camiões em comboio com separação &lt;10m via V2V, reduzindo consumo de combustível 10–20% pelo efeito de drafting; cooperative merging e intersection management eliminam colisões em cruzamentos sem semáforos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Smart Roads e Deployment Global</strong> — smart roads integram RSUs, sensores de tráfego e iluminação adaptativa; China lidera com 17.000km de estradas V2X equipadas; Europa tem pilotos C-ITS no corredor Frankfurt–Roterdão.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Segurança, Privacidade e Desafios</strong> — V2X requer PKI automotivo (SCMS) para autenticar mensagens e evitar spoofing; anonimização de certificados rotativa protege privacidade de localização; jamming de sinal e replay attacks são ameaças activas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
