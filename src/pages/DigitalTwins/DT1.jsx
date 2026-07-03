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

/* ── SVG helpers ── */

function DefinitionSVG() {
  return (
    <svg viewBox="0 0 640 180" width="100%" style={{ maxWidth: 640, display: 'block', margin: '1.5rem auto' }}>
      {/* Physical Asset box */}
      <rect x="20" y="50" width="160" height="80" rx="10" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="2" />
      <text x="100" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Ativo Físico</text>
      <text x="100" y="100" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Máquina / Edifício</text>
      <text x="100" y="115" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Infraestrutura</text>

      {/* Bidirectional arrows */}
      <line x1="183" y1="83" x2="257" y2="83" stroke={color} strokeWidth="2" />
      <polygon points="257,78 267,83 257,88" fill={color} />
      <line x1="257" y1="97" x2="183" y2="97" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="183,92 173,97 183,102" fill="#f59e0b" />
      <text x="220" y="76" textAnchor="middle" fontSize="9" fill={color}>Dados sensor</text>
      <text x="220" y="112" textAnchor="middle" fontSize="9" fill="#f59e0b">Comandos</text>

      {/* Sync box */}
      <rect x="268" y="60" width="104" height="60" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="320" y="86" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f59e0b">Sincronização</text>
      <text x="320" y="103" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Bidirecional</text>

      {/* Arrow right */}
      <line x1="375" y1="83" x2="449" y2="83" stroke={color} strokeWidth="2" />
      <polygon points="449,78 459,83 449,88" fill={color} />
      <line x1="449" y1="97" x2="375" y2="97" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="375,92 365,97 375,102" fill="#f59e0b" />
      <text x="412" y="76" textAnchor="middle" fontSize="9" fill={color}>Replica</text>
      <text x="412" y="112" textAnchor="middle" fontSize="9" fill="#f59e0b">Controlo</text>

      {/* Digital Twin box */}
      <rect x="460" y="30" width="160" height="120" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="540" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Digital Twin</text>
      <text x="540" y="76" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Modelo 3D/Físico</text>
      <text x="540" y="92" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Motor de ML</text>
      <text x="540" y="108" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Histórico de dados</text>
      <text x="540" y="124" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Simulação em tempo-real</text>

      {/* Labels below */}
      <text x="320" y="165" textAnchor="middle" fontSize="11" fill="var(--text-secondary)" fontWeight="600">O Digital Twin é o espelho vivo do ativo físico</text>
    </svg>
  );
}

function TimelineSVG() {
  const events = [
    { year: '1960', label: 'NASA Apollo', sub: 'Primeiro conceito DT' },
    { year: '2002', label: 'M. Grieves', sub: 'Cunha o termo' },
    { year: '2010', label: 'NASA Roadmap', sub: 'DT em aeronaves' },
    { year: '2017', label: 'Gartner Top 10', sub: 'Tendência estratégica' },
    { year: '2020', label: 'COVID', sub: 'Adopção acelerada' },
    { year: '2024', label: 'GenAI + DT', sub: 'DT cognitivo' },
  ];
  return (
    <svg viewBox="0 0 700 160" width="100%" style={{ maxWidth: 700, display: 'block', margin: '1.5rem auto' }}>
      {/* Timeline line */}
      <line x1="40" y1="80" x2="660" y2="80" stroke="var(--text-secondary)" strokeWidth="2" />
      {events.map((e, i) => {
        const x = 40 + i * 124;
        const above = i % 2 === 0;
        return (
          <g key={e.year}>
            <circle cx={x} cy="80" r="7" fill={color} />
            {above ? (
              <>
                <line x1={x} y1="73" x2={x} y2="42" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" />
                <text x={x} y="36" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>{e.year}</text>
                <text x={x} y="22" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{e.label}</text>
                <text x={x} y="10" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{e.sub}</text>
              </>
            ) : (
              <>
                <line x1={x} y1="87" x2={x} y2="118" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" />
                <text x={x} y="128" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>{e.year}</text>
                <text x={x} y="141" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{e.label}</text>
                <text x={x} y="154" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{e.sub}</text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function TriangleSVG() {
  return (
    <svg viewBox="-10 -20 420 320" width="100%" style={{ maxWidth: 420, display: 'block', margin: '1.5rem auto' }}>
      {/* Triangle */}
      <polygon points="200,20 30,250 370,250" fill="rgba(249,115,22,0.05)" stroke={color} strokeWidth="2" />
      {/* Nodes — background circles mask triangle lines */}
      <circle cx="200" cy="20" r="36" fill="var(--bg-primary)" />
      <circle cx="200" cy="20" r="36" fill="rgba(249,115,22,0.18)" stroke={color} strokeWidth="2" />
      <text x="200" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Entidade</text>
      <text x="200" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Física</text>

      <circle cx="30" cy="250" r="38" fill="var(--bg-primary)" />
      <circle cx="30" cy="250" r="38" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" strokeWidth="2" />
      <text x="30" y="246" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f59e0b">Modelo</text>
      <text x="30" y="258" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f59e0b">Digital</text>

      <circle cx="370" cy="250" r="38" fill="var(--bg-primary)" />
      <circle cx="370" cy="250" r="38" fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth="2" />
      <text x="370" y="246" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Fluxo de</text>
      <text x="370" y="258" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Dados</text>

      {/* Center label */}
      <text x="200" y="148" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Digital</text>
      <text x="200" y="163" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">Twin</text>
      <text x="200" y="180" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Tríade fundamental</text>
    </svg>
  );
}

function PyramidSVG() {
  const levels = [
    { label: 'City DT', w: 300, y: 20, fill: 'rgba(249,115,22,0.10)', stroke: '#f97316', fs: 11 },
    { label: 'Process DT', w: 240, y: 70, fill: 'rgba(245,158,11,0.15)', stroke: '#f97316', fs: 11 },
    { label: 'System DT', w: 180, y: 120, fill: 'rgba(249,115,22,0.15)', stroke: '#f97316', fs: 11 },
    { label: 'Asset DT', w: 140, y: 170, fill: 'rgba(249,115,22,0.15)', stroke: color, fs: 11 },
    { label: 'Component DT', w: 120, y: 220, fill: 'rgba(249,115,22,0.10)', stroke: '#f97316', fs: 10 },
  ];
  return (
    <svg viewBox="0 0 320 290" width="100%" style={{ maxWidth: 320, display: 'block', margin: '1.5rem auto' }}>
      {levels.map((l) => (
        <g key={l.label}>
          <rect x={(320 - l.w) / 2} y={l.y} width={l.w} height="40" rx="4" fill={l.fill} stroke={l.stroke} strokeWidth="1.5" />
          <text x="160" y={l.y + 25} textAnchor="middle" fontSize={l.fs} fontWeight="600" fill="var(--text-primary)">{l.label}</text>
        </g>
      ))}
      <text x="160" y="282" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Hierarquia de Digital Twins</text>
    </svg>
  );
}

function VennSVG() {
  return (
    <svg viewBox="0 0 540 260" width="100%" style={{ maxWidth: 540, display: 'block', margin: '1.5rem auto' }}>
      {/* DT circle — large, left */}
      <circle cx="185" cy="130" r="105" fill="rgba(249,115,22,0.13)" stroke="#f97316" strokeWidth="2.5" />
      {/* Simulação circle — top right */}
      <circle cx="340" cy="85" r="82" fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3" />
      {/* BIM circle — bottom right */}
      <circle cx="345" cy="178" r="76" fill="rgba(251,146,60,0.08)" stroke="#fb923c" strokeWidth="2" strokeDasharray="3,3" />

      {/* DT label — far left */}
      <text x="160" y="122" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f97316">Digital</text>
      <text x="160" y="138" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f97316">Twin</text>
      <text x="160" y="154" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Real-time + ML</text>
      <text x="160" y="167" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Sincronização bidirecional</text>

      {/* Simulação label — top right */}
      <text x="378" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f59e0b">Simulação</text>
      <text x="378" y="76" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Offline, física</text>
      <text x="378" y="89" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">ANSYS / MATLAB</text>

      {/* BIM label — bottom right */}
      <text x="388" y="185" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fb923c">BIM</text>
      <text x="388" y="199" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Geometria 3D</text>
      <text x="388" y="212" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Revit / IFC</text>

      {/* DT ∩ Simulação — top middle intersection */}
      <text x="262" y="78" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--text-primary)">Modelos</text>
      <text x="262" y="89" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--text-primary)">físicos</text>

      {/* DT ∩ BIM — bottom middle intersection */}
      <text x="275" y="168" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--text-primary)">Dados</text>
      <text x="275" y="179" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--text-primary)">operacionais</text>

      {/* Simulação ∩ BIM — right intersection */}
      <text x="348" y="132" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--text-primary)">Geometria</text>
      <text x="348" y="143" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--text-primary)">partilhada</text>
    </svg>
  );
}

function FactorySVG() {
  return (
    <svg viewBox="0 0 600 200" width="100%" style={{ maxWidth: 600, display: 'block', margin: '1.5rem auto' }}>
      {/* Factory building */}
      <rect x="20" y="80" width="220" height="100" rx="4" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" />
      <polygon points="20,80 130,30 240,80" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="130" y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Fábrica Física</text>

      {/* Machines */}
      <rect x="40" y="140" width="40" height="30" rx="3" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="1" />
      <text x="60" y="160" textAnchor="middle" fontSize="8" fill="var(--text-primary)">M1</text>
      <rect x="100" y="140" width="40" height="30" rx="3" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="1" />
      <text x="120" y="160" textAnchor="middle" fontSize="8" fill="var(--text-primary)">M2</text>
      <rect x="160" y="140" width="40" height="30" rx="3" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="1" />
      <text x="180" y="160" textAnchor="middle" fontSize="8" fill="var(--text-primary)">M3</text>

      {/* Sensor dots */}
      <circle cx="60" cy="138" r="4" fill="#f59e0b" />
      <circle cx="120" cy="138" r="4" fill="#f59e0b" />
      <circle cx="180" cy="138" r="4" fill="#f59e0b" />

      {/* Data flow arrows */}
      <line x1="242" y1="130" x2="310" y2="100" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      <polygon points="306,96 314,100 308,106" fill={color} />

      {/* Cloud / DT platform */}
      <rect x="315" y="60" width="140" height="80" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
      <text x="385" y="88" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Digital Twin</text>
      <text x="385" y="104" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Modelo + ML</text>
      <text x="385" y="118" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Predicao</text>
      <text x="385" y="132" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Optimizacao</text>

      {/* Feedback arrow */}
      <line x1="313" y1="110" x2="244" y2="145" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" />
      <polygon points="248,141 241,148 247,151" fill="#f59e0b" />

      {/* Insights box */}
      <rect x="465" y="60" width="115" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="522" y="85" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Insights</text>
      <text x="522" y="101" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Manut. preditiva</text>
      <text x="522" y="114" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Controlo qualidade</text>
      <text x="522" y="127" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Optimiz. processo</text>
      <line x1="457" y1="100" x2="467" y2="100" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="463,96 470,100 463,104" fill="#f97316" />

      <text x="300" y="192" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Fluxo de dados sensor → DT → Insights → Controlo</text>
    </svg>
  );
}

function CitySVG() {
  return (
    <svg viewBox="0 0 600 200" width="100%" style={{ maxWidth: 600, display: 'block', margin: '1.5rem auto' }}>
      {/* Buildings */}
      {[
        { x: 30, h: 90, w: 35 }, { x: 75, h: 130, w: 30 }, { x: 115, h: 70, w: 40 },
        { x: 165, h: 110, w: 35 }, { x: 210, h: 80, w: 30 },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={170 - b.h} width={b.w} height={b.h} rx="2" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="1" />
        </g>
      ))}

      {/* Ground */}
      <line x1="20" y1="170" x2="580" y2="170" stroke="var(--text-secondary)" strokeWidth="2" />

      {/* Roads */}
      <rect x="20" y="170" width="240" height="20" rx="0" fill="rgba(100,100,100,0.15)" />

      {/* Sensor nodes on buildings */}
      {[47, 90, 135, 182, 225].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={155} r="5" fill="#f59e0b" opacity="0.9" />
          <circle cx={x} cy={155} r="10" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
        </g>
      ))}

      {/* DT city platform on right */}
      <rect x="290" y="40" width="160" height="120" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="2" />
      <text x="370" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Cidade Digital</text>
      <text x="370" y="85" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Trafego em tempo-real</text>
      <text x="370" y="100" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Gestao de energia</text>
      <text x="370" y="115" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Seguranca publica</text>
      <text x="370" y="130" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Planeamento urbano</text>
      <text x="370" y="145" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Emergencias</text>

      {/* Connecting lines */}
      <line x1="240" y1="100" x2="288" y2="100" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points="284,96 291,100 284,104" fill={color} />

      {/* Analytics */}
      <rect x="465" y="60" width="110" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="520" y="85" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">Analytics</text>
      <text x="520" y="102" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Predicao</text>
      <text x="520" y="116" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Simulacao</text>
      <text x="520" y="130" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Optimizacao</text>
      <line x1="458" y1="100" x2="467" y2="100" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="463,96 470,100 463,104" fill="#f97316" />

      <text x="300" y="192" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Rede de sensores urbanos sincronizada com o DT da cidade</text>
    </svg>
  );
}

function BodySVG() {
  return (
    <svg viewBox="0 0 500 240" width="100%" style={{ maxWidth: 500, display: 'block', margin: '1.5rem auto' }}>
      {/* Silhouette */}
      <ellipse cx="140" cy="42" rx="22" ry="26" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <rect x="118" y="68" width="44" height="80" rx="8" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      {/* Arms */}
      <line x1="118" y1="75" x2="86" y2="130" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <line x1="162" y1="75" x2="194" y2="130" stroke={color} strokeWidth="8" strokeLinecap="round" />
      {/* Legs */}
      <line x1="130" y1="148" x2="118" y2="210" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <line x1="150" y1="148" x2="162" y2="210" stroke={color} strokeWidth="8" strokeLinecap="round" />

      {/* Organ highlights */}
      <ellipse cx="140" cy="90" rx="12" ry="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="62" y="87" textAnchor="end" fontSize="9" fill="#f97316" fontWeight="700">Coracao</text>
      <line x1="64" y1="87" x2="128" y2="90" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />

      <ellipse cx="135" cy="108" rx="10" ry="7" fill="rgba(249,115,22,0.30)" stroke="#f97316" strokeWidth="1.5" />
      <text x="62" y="110" textAnchor="end" fontSize="9" fill="#f97316" fontWeight="700">Pulmoes</text>
      <line x1="64" y1="110" x2="125" y2="108" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />

      <ellipse cx="140" cy="125" rx="9" ry="6" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="62" y="127" textAnchor="end" fontSize="9" fill="#f59e0b" fontWeight="700">Figado</text>
      <line x1="64" y1="127" x2="131" y2="125" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" />

      {/* DT panel */}
      <rect x="230" y="20" width="250" height="200" rx="10" fill="rgba(249,115,22,0.06)" stroke={color} strokeWidth="2" />
      <text x="355" y="46" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Patient Digital Twin</text>
      <text x="355" y="65" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Historico clinico</text>
      <text x="355" y="81" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Genomica + Proteómica</text>
      <text x="355" y="97" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Biomarcadores em tempo-real</text>
      <text x="355" y="113" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Simulacao de farmacos</text>
      <text x="355" y="129" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Predicao de progressao</text>
      <text x="355" y="145" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Tratamento personalizado</text>
      <text x="355" y="161" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Alertas precoces</text>

      <line x1="195" y1="100" x2="228" y2="100" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points="224,96 231,100 224,104" fill={color} />
    </svg>
  );
}

function WindFarmSVG() {
  return (
    <svg viewBox="0 0 600 220" width="100%" style={{ maxWidth: 600, display: 'block', margin: '1.5rem auto' }}>
      {/* Sea */}
      <rect x="0" y="160" width="600" height="60" rx="0" fill="rgba(249,115,22,0.08)" />
      <text x="300" y="185" textAnchor="middle" fontSize="9" fill={color}>Mar Offshore</text>

      {/* Wind turbines */}
      {[60, 140, 220].map((x, i) => (
        <g key={i}>
          {/* Tower */}
          <line x1={x} y1="160" x2={x} y2="60" stroke="var(--text-secondary)" strokeWidth="4" strokeLinecap="round" />
          {/* Blades */}
          <line x1={x} y1="60" x2={x - 30} y2="30" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <line x1={x} y1="60" x2={x + 30} y2="30" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <line x1={x} y1="60" x2={x} y2="98" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <circle cx={x} cy="60" r="5" fill={color} />
          {/* Sensor */}
          <circle cx={x} cy="55" r="4" fill="#f59e0b" />
        </g>
      ))}

      {/* DT panel */}
      <rect x="300" y="20" width="180" height="130" rx="10" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="2" />
      <text x="390" y="44" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Wind Turbine DT</text>
      <text x="390" y="62" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Vibracao e desgaste</text>
      <text x="390" y="78" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Velocidade do vento</text>
      <text x="390" y="94" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Temperatura</text>
      <text x="390" y="110" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Predicao falhas</text>
      <text x="390" y="126" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Manut. -25% custo</text>

      <line x1="222" y1="80" x2="298" y2="80" stroke={color} strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points="294,76 301,80 294,84" fill={color} />

      {/* Grid DT */}
      <rect x="494" y="40" width="95" height="90" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="541" y="62" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Grid DT</text>
      <text x="541" y="78" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Balanco rede</text>
      <text x="541" y="93" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Redirecionar</text>
      <text x="541" y="108" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">carga</text>
      <line x1="482" y1="85" x2="492" y2="85" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="488,81 495,85 488,89" fill="#f97316" />
    </svg>
  );
}

function MaturitySVG() {
  const levels = [
    { n: 1, label: 'Digital Model', sub: 'Sem sincronizacao', fill: 'rgba(100,100,100,0.15)', stroke: '#94a3b8' },
    { n: 2, label: 'Digital Shadow', sub: 'Sensor → Digital (1 via)', fill: 'rgba(245,158,11,0.15)', stroke: '#f97316' },
    { n: 3, label: 'Digital Twin', sub: 'Bidirecional', fill: 'rgba(249,115,22,0.15)', stroke: color },
    { n: 4, label: 'Autonomous DT', sub: 'Auto-actuacao', fill: 'rgba(249,115,22,0.15)', stroke: '#f97316' },
    { n: 5, label: 'Cognitive DT', sub: 'IA + auto-aprendizagem', fill: 'rgba(249,115,22,0.10)', stroke: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 220" width="100%" style={{ maxWidth: 560, display: 'block', margin: '1.5rem auto' }}>
      {/* Ladder steps */}
      {levels.map((l, i) => {
        const x = 10 + i * 110;
        const y = 160 - i * 28;
        return (
          <g key={l.n}>
            <rect x={x} y={y} width={100} height={200 - y} rx="4" fill={l.fill} stroke={l.stroke} strokeWidth="1.5" />
            <text x={x + 50} y={y + 18} textAnchor="middle" fontSize="11" fontWeight="700" fill={l.stroke}>L{l.n}</text>
            <text x={x + 50} y={y + 33} textAnchor="middle" fontSize="8" fill="var(--text-primary)">{l.label}</text>
            <text x={x + 50} y={y + 47} textAnchor="middle" fontSize="7" fill="var(--text-secondary)">{l.sub}</text>
          </g>
        );
      })}
      <text x="280" y="212" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Escada de maturidade dos Digital Twins</text>
    </svg>
  );
}

function RadarSVG() {
  const cx = 200, cy = 130, r = 100;
  const labels = ['Qualidade dados', 'Seguranca', 'Custo', 'Interop.', 'Latencia', 'Fidelidade'];
  const values = [0.8, 0.9, 0.7, 0.75, 0.65, 0.85];
  const n = labels.length;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const px = (i, v) => cx + Math.cos(angle(i)) * r * v;
  const py = (i, v) => cy + Math.sin(angle(i)) * r * v;
  const outerPts = labels.map((_, i) => `${px(i, 1)},${py(i, 1)}`).join(' ');
  const midPts = labels.map((_, i) => `${px(i, 0.5)},${py(i, 0.5)}`).join(' ');
  const valPts = values.map((v, i) => `${px(i, v)},${py(i, v)}`).join(' ');
  return (
    <svg viewBox="0 0 420 280" width="100%" style={{ maxWidth: 420, display: 'block', margin: '1.5rem auto' }}>
      {/* Grid */}
      <polygon points={outerPts} fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      <polygon points={midPts} fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
      {labels.map((_, i) => (
        <line key={i} x1={cx} y1={cy} x2={px(i, 1)} y2={py(i, 1)} stroke="var(--text-secondary)" strokeWidth="1" />
      ))}
      {/* Data */}
      <polygon points={valPts} fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="2" />
      {values.map((v, i) => (
        <circle key={i} cx={px(i, v)} cy={py(i, v)} r="4" fill={color} />
      ))}
      {/* Labels */}
      {labels.map((l, i) => {
        const lx = cx + Math.cos(angle(i)) * (r + 22);
        const ly = cy + Math.sin(angle(i)) * (r + 22);
        return (
          <text key={i} x={lx} y={ly} textAnchor="middle" fontSize="9" fill="var(--text-primary)" fontWeight="600">{l}</text>
        );
      })}
      <text x="200" y="268" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Nivel de desafio (maior = mais critico)</text>
    </svg>
  );
}

function EcosystemSVG() {
  return (
    <svg viewBox="0 0 580 260" width="100%" style={{ maxWidth: 580, display: 'block', margin: '1.5rem auto' }}>
      {/* Center DT hub */}
      <ellipse cx="290" cy="130" rx="60" ry="40" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="2.5" />
      <text x="290" y="126" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Digital</text>
      <text x="290" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>Twin</text>

      {/* Satellite nodes */}
      {[
        { x: 110, y: 40, label: 'IoT / Sensores', stroke: '#f97316', fill: 'rgba(245,158,11,0.12)' },
        { x: 470, y: 40, label: 'Cloud Platform', stroke: '#f97316', fill: 'rgba(249,115,22,0.10)' },
        { x: 60, y: 160, label: 'Fisica / CAD', stroke: '#f97316', fill: 'rgba(249,115,22,0.10)' },
        { x: 520, y: 160, label: 'ML / AI', stroke: '#f97316', fill: 'rgba(249,115,22,0.10)' },
        { x: 180, y: 230, label: 'Hist. de dados', stroke: '#f97316', fill: 'rgba(245,158,11,0.1)' },
        { x: 400, y: 230, label: 'Dashboard / UI', stroke: '#f97316', fill: 'rgba(249,115,22,0.10)' },
      ].map((node) => (
        <g key={node.label}>
          <ellipse cx={node.x} cy={node.y} rx="52" ry="24" fill={node.fill} stroke={node.stroke} strokeWidth="1.5" />
          <text x={node.x} y={node.y + 5} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--text-primary)">{node.label}</text>
          <line
            x1={node.x < 290 ? node.x + 52 : node.x - 52}
            y1={node.y}
            x2={node.x < 290 ? 230 : 350}
            y2={130}
            stroke={node.stroke}
            strokeWidth="1"
            strokeDasharray="4,3"
            opacity="0.7"
          />
        </g>
      ))}
      <text x="290" y="255" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Ecossistema de um Digital Twin empresarial</text>
    </svg>
  );
}

/* ── Main component ── */

export default function DT1() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>O que são Digital Twins</h1>
      <p style={S.lead}>
        Um Digital Twin é uma representação digital dinâmica e sincronizada de um objeto, processo ou sistema físico.
        Ao contrário de modelos estáticos, o DT vive e respira com o seu homólogo físico — ingerindo dados em tempo-real,
        executando simulações e devolvendo comandos de controlo. Neste módulo exploramos a sua definição, história,
        arquitectura, tipos, casos de uso e desafios num percurso completo de Data Science.
      </p>

      {/* ── Section 1 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>1. Definição</h2>
        <DefinitionSVG />

        <div style={S.highlight}>
          <strong style={{ color }}>Definição canónica (ISO 23247 / IEC 63278):</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>
            "Um Digital Twin é uma representação digital de um elemento ou processo real que serve de base para raciocinar
            sobre o homólogo físico." A chave está na sincronização contínua e bidirecional: sensores alimentam o modelo
            digital e o modelo devolve acções ao mundo físico.
          </p>
        </div>

        <p style={S.p}>
          A NASA define-o como "a representação integrada e multifísica de um veículo ou sistema que reflecte o estado
          actual do veículo em missão, com base em dados do veículo em voo". A GE Aviation introduziu o conceito em
          motores de reactores: cada motor tem um gémeo digital individual que acompanha a sua vida operacional.
        </p>

        <h3 style={S.h3}>Não confundir com um modelo 3D</h3>
        <p style={S.p}>
          Um modelo CAD é estático — descreve a geometria no momento da concepção. Um Digital Twin acrescenta:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Física:</strong> equações diferenciais que governam o comportamento real</li>
          <li><strong>Dados:</strong> telemetria de sensores IoT em tempo-real ou quase-real</li>
          <li><strong>ML:</strong> modelos aprendidos que capturam comportamentos não modeláveis analiticamente</li>
          <li><strong>Histórico:</strong> registo completo de estados passados para diagnóstico e treino</li>
          <li><strong>Integração:</strong> ligação a ERPs, MES, SCADA e plataformas cloud</li>
        </ul>

        <div style={S.note}>
          Regra prática: se o modelo não actualiza automaticamente quando o mundo físico muda, é uma simulação, não um Digital Twin.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 2 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>2. História e Evolução</h2>
        <TimelineSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Ano</th>
              <th style={S.th}>Marco</th>
              <th style={S.th}>Detalhe</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['~1960', 'NASA Apollo', 'Réplicas físicas dos módulos lunares para treino em Terra — o embrião conceptual.'],
              ['2002', 'Michael Grieves — PLM', 'Primeira formulação académica: "Conceptual Ideal for Product Lifecycle Management".'],
              ['2003', 'John Vickers (NASA)', 'Populariza o termo "Digital Twin" em documentos internos.'],
              ['2010', 'NASA Technology Roadmap', 'DT listado como capacidade crítica para aeronaves e veículos espaciais.'],
              ['2012', 'GE Industrial Internet', 'GE aplica DT em motores de avião, turbinas de vento e locomotivas.'],
              ['2015', 'Indústria 4.0 / Alemanha', 'DT torna-se pilar central da estratégia alemã de manufatura inteligente.'],
              ['2017', 'Gartner Top 10', 'Tecnologia estratégica no relatório anual; estimativa de 21 mil M DTs até 2020.'],
              ['2019', 'Azure Digital Twins (beta)', 'Microsoft lança plataforma cloud nativa para DT empresariais.'],
              ['2020', 'COVID-19', 'Simulação de cadeias de abastecimento e hospitais digitais aceleram adopção.'],
              ['2021', 'NVIDIA Omniverse', 'Plataforma de DT colaborativos com renderização em tempo-real.'],
              ['2023', 'ISO/IEC 30173', 'Primeira norma internacional de terminologia para Digital Twins.'],
              ['2024', 'GenAI + DT', 'LLMs integrados em DTs para interface em linguagem natural e raciocínio autónomo.'],
            ].map(([year, mark, detail]) => (
              <tr key={year}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{year}</td>
                <td style={S.td}>{mark}</td>
                <td style={S.td}>{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 3 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Os 3 Componentes Fundamentais</h2>
        <TriangleSVG />

        <h3 style={S.h3}>Componente 1 — Entidade Física</h3>
        <p style={S.p}>
          O objecto real que queremos espelhar: uma turbina, um edifício, um paciente, uma cidade. Está equipado com
          sensores (temperatura, pressão, vibração, corrente, câmeras, LIDAR...) que produzem fluxos de dados contínuos.
          A qualidade e granularidade dos sensores determina directamente a fidelidade do DT.
        </p>

        <h3 style={S.h3}>Componente 2 — Modelo Digital (Virtual Model)</h3>
        <p style={S.p}>
          A representação computacional do ativo. Pode incluir: geometria 3D (CAD/BIM), modelo de elementos finitos
          (FEM/FEA) para stress mecânico, equações de transferência de calor, modelos de degradação, redes neuronais
          treinadas em dados históricos, e motores de simulação (MATLAB/Simulink, ANSYS, OpenModelica).
        </p>
        <div style={S.note}>
          Um bom modelo digital equilibra fidelidade e custo computacional. Modelos de ordem reduzida (ROM) são frequentemente
          usados em produção para manter latência abaixo de 100 ms.
        </div>

        <h3 style={S.h3}>Componente 3 — Fluxo de Dados Bidirecional</h3>
        <p style={S.p}>
          O canal que mantém ativo e DT em sincronismo. No sentido físico → digital: protocolos IoT (MQTT, OPC-UA,
          Kafka, AMQP) entregam telemetria a pipelines de ingestão (Azure Event Hubs, AWS Kinesis). No sentido
          digital → físico: sistemas SCADA ou APIs REST devolvem comandos de controlo (ajustar setpoint, accionar
          válvula, redirigir tráfego).
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Dimensão</th>
              <th style={S.th}>Entidade Física</th>
              <th style={S.th}>Modelo Digital</th>
              <th style={S.th}>Fluxo de Dados</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tecnologia', 'Sensores IoT, SCADA', 'FEM, ML, simuladores', 'MQTT, Kafka, REST'],
              ['Latência', 'Evento real', '< 100 ms processamento', 'Depende da rede'],
              ['Actualização', 'Contínua', 'Incremental', 'Streaming ou batch'],
              ['Custo', 'Hardware', 'Computação cloud', 'Conectividade / banda'],
            ].map(([dim, f, d, fl]) => (
              <tr key={dim}>
                <td style={{ ...S.td, fontWeight: 600 }}>{dim}</td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{d}</td>
                <td style={S.td}>{fl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 4 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Tipos de Digital Twins</h2>
        <PyramidSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Escala</th>
              <th style={S.th}>Exemplo</th>
              <th style={S.th}>Complexidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Component DT', 'Peça única', 'Rolamento num motor', 'Baixa'],
              ['Asset DT', 'Máquina completa', 'Motor a jacto CF6-80', 'Média'],
              ['System DT', 'Conjunto de assets', 'Linha de produção', 'Alta'],
              ['Process DT', 'Cadeia de processos', 'Supply chain global', 'Muito alta'],
              ['City DT', 'Ecossistema urbano', 'Virtual Singapore', 'Extrema'],
            ].map(([tipo, escala, ex, comp]) => (
              <tr key={tipo}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{tipo}</td>
                <td style={S.td}>{escala}</td>
                <td style={S.td}>{ex}</td>
                <td style={S.td}>{comp}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Composição Hierárquica</h3>
        <p style={S.p}>
          Na prática os DTs são compostos: um System DT agrega vários Asset DTs que por sua vez compõem Component DTs.
          Esta hierarquia permite granularidade de diagnóstico — detectar que a falha do sistema se origina num
          componente específico — e escalabilidade de gestão.
        </p>

        <div style={S.highlight}>
          <strong>Exemplo: GE Aviation Engine DT</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Cada motor CF6-80 tem o seu próprio DT individual. A GE mantém mais de 750 000 DTs de motores activos
            que reportam telemetria de mais de 5 000 sensores por voo. O sistema prevê falhas com antecedência de
            semanas, reduzindo AOG (Aircraft on Ground) em 36%.
          </p>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 5 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Digital Twin vs Simulação vs BIM</h2>
        <VennSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Critério</th>
              <th style={S.th}>Digital Twin</th>
              <th style={S.th}>Simulação</th>
              <th style={S.th}>BIM</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Sincronização', 'Bidirecional, contínua', 'Offline, manual', 'Estática / periódica'],
              ['Dados reais', 'Sim — sensores IoT', 'Parâmetros estimados', 'Planta como construída'],
              ['ML / IA', 'Integrado', 'Opcional', 'Não nativo'],
              ['Temporalidade', 'Tempo-real', 'Estática / batch', 'Ciclo de vida obra'],
              ['Comando físico', 'Sim (actua)', 'Não', 'Não'],
              ['Exemplo tool', 'Azure DT, NVIDIA Omniverse', 'ANSYS, MATLAB', 'Revit, Archicad'],
            ].map(([crit, dt, sim, bim]) => (
              <tr key={crit}>
                <td style={{ ...S.td, fontWeight: 600 }}>{crit}</td>
                <td style={{ ...S.td, color }}>{dt}</td>
                <td style={S.td}>{sim}</td>
                <td style={S.td}>{bim}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.note}>
          Um Digital Twin pode incorporar motores de simulação internamente. A distinção não é a ausência de simulação
          mas a presença de sincronização automática com o mundo real.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 6 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Casos de Uso em Manufatura</h2>
        <FactorySVG />

        <h3 style={S.h3}>Manutenção Preditiva</h3>
        <p style={S.p}>
          O caso de uso mais maduro. O DT monitoriza vibração, temperatura, consumo de corrente e analisa padrões de
          degradação com modelos de sobrevivência (Cox, Weibull) e redes LSTM. Resultados tipicamente reportados:
          redução de downtime não planeado entre 30-50%, aumento de OEE (Overall Equipment Effectiveness) de 10-15%.
        </p>

        <h3 style={S.h3}>Controlo de Qualidade</h3>
        <p style={S.p}>
          O DT do processo de soldadura, por exemplo, monitoriza 47 parâmetros em tempo-real e compara com o envelope
          de qualidade aprendido. Desvios geram alertas antes de produzir peças defeituosas. A BMW reporta redução de
          retrabalho em 40% na linha de carroçaria com DTs de robôs de soldadura.
        </p>

        <h3 style={S.h3}>Optimização de Processo</h3>
        <p style={S.p}>
          O DT corre cenários "what-if" em paralelo com a produção real: "e se aumentarmos a temperatura do forno 5°C?"
          O modelo físico-ML responde em milissegundos sem parar a linha. Encontrada a configuração óptima, o comando
          é enviado ao SCADA. A BASF usa esta abordagem em reactores químicos com ganhos energéticos de 8%.
        </p>

        <h3 style={S.h3}>Design de Novos Produtos</h3>
        <p style={S.p}>
          DTs de produtos em uso fornecem dados reais sobre como os clientes utilizam o produto — informação que
          alimenta ciclos de design seguintes. A Rolls-Royce usou DTs de motores Trent em serviço para redesenhar
          pás de turbina, reduzindo consumo de combustível 1,3% (significativo a escala de frota global).
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso de Uso</th>
              <th style={S.th}>Métrica chave</th>
              <th style={S.th}>Ganho típico</th>
              <th style={S.th}>Empresa referência</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Manutenção preditiva', 'MTBF, downtime', '-30 a -50% falhas', 'GE, Siemens'],
              ['Controlo de qualidade', 'Scrap rate', '-30 a -40%', 'BMW, Bosch'],
              ['Optimização de processo', 'OEE, consumo energia', '+10 a +15% OEE', 'BASF, ABB'],
              ['Design assistido por DT', 'Time-to-market', '-20 a -30%', 'Rolls-Royce'],
              ['Supply chain DT', 'On-time delivery', '+15 a +25%', 'Unilever, P&G'],
            ].map(([cu, m, g, e]) => (
              <tr key={cu}>
                <td style={{ ...S.td, fontWeight: 600 }}>{cu}</td>
                <td style={S.td}>{m}</td>
                <td style={{ ...S.td, color: '#f97316', fontWeight: 600 }}>{g}</td>
                <td style={S.td}>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 7 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Casos de Uso em Cidades Inteligentes</h2>
        <CitySVG />

        <h3 style={S.h3}>Virtual Singapore</h3>
        <p style={S.p}>
          O projecto mais ambicioso de City DT do mundo. Desenvolvido pela NRF e pela Singtel em parceria com a Esri,
          replica toda a cidade-estado em 3D com dados semânticos de 5,6 M de edifícios, vegetação, infraestrutura
          subterrânea e mobilidade. Casos de uso activos: análise solar para instalação de painéis fotovoltaicos
          em coberturas, planeamento de resposta a emergências, simulação de inundações.
        </p>

        <h3 style={S.h3}>Helsinki 3D+</h3>
        <p style={S.p}>
          A cidade de Helsínquia mantém um modelo 3D urbano com actualização semestral que integra dados de
          qualidade do ar, tráfego e ruído. É usado para simular o impacto de novos edifícios no sombreamento
          e na circulação de ar antes de emitir licenças de construção.
        </p>

        <h3 style={S.h3}>Barcelona Superblock</h3>
        <p style={S.p}>
          DT de tráfego urbano que simula o efeito de fechar quarteirões ao trânsito automóvel (Superilles).
          Integra dados de sensores de CO2, contadores de peões e câmeras de tráfego. Permitiu reduzir emissões
          de NO2 em 25% nas áreas piloto.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Cidade</th>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Foco principal</th>
              <th style={S.th}>Impacto</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Singapura', 'Esri CityEngine + AWS', 'Planeamento urbano', 'Politica energetica +18%'],
              ['Helsínquia', 'CityGML + custom', 'Qualidade do ar e licencas', 'Tempo aprovacao -40%'],
              ['Barcelona', 'MaaS / FIWARE', 'Trafego e emissoes', 'NO2 -25%'],
              ['Dubai', 'Bentley iTwin', 'Infraestrutura e servicos', 'Custo operacional -20%'],
              ['Rennes', 'Dassault 3DExperience', 'Mobilidade e energia', 'Transito publico +12%'],
            ].map(([city, plat, focus, imp]) => (
              <tr key={city}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{city}</td>
                <td style={S.td}>{plat}</td>
                <td style={S.td}>{focus}</td>
                <td style={{ ...S.td, color: '#f97316' }}>{imp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 8 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Casos de Uso em Saúde</h2>
        <BodySVG />

        <h3 style={S.h3}>Patient Digital Twin</h3>
        <p style={S.p}>
          A fronteira mais promissora e mais regulada. Um DT de paciente integra dados genómicos (variantes SNP,
          expressão genética), proteómica, metabolómica, histórico clínico e biomarcadores em tempo-real (via
          wearables ou dispositivos implantados). O modelo permite simular a resposta a diferentes fármacos ou
          dosagens antes de os administrar — medicina preditiva e personalizada.
        </p>

        <h3 style={S.h3}>Hospital Digital Twin</h3>
        <p style={S.p}>
          DT dos fluxos hospitalares: camas, blocos operatórios, urgências. Durante a COVID-19, hospitais como
          o Johns Hopkins criaram DTs para simular cenários de sobrecarga e planear alocação de ventiladores e
          UCI. Empresas como a GE Healthcare oferecem "Command Center" baseado em DT de hospital.
        </p>

        <h3 style={S.h3}>Drug Discovery DT</h3>
        <p style={S.p}>
          DTs de células, tecidos e órgãos permitem testar compostos in silico antes de ensaios laboratoriais.
          A Novartis e a Pfizer usam DTs de alvos proteicos para acelerar triagem de moléculas. Estima-se que
          o processo de descoberta passe de 12 para 4-6 anos com DTs.
        </p>

        <div style={S.highlight}>
          <strong style={{ color }}>FDA Digital Twin Framework (2021)</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>
            A FDA publicou directrizes sobre o uso de "Digital Twins" e modelos computacionais na aprovação de
            dispositivos médicos (Computational Modeling and Simulation). Permite substituir alguns ensaios
            clínicos por evidência computacional validada.
          </p>
        </div>

        <div style={S.note}>
          Considerações éticas: quem é o dono do DT de um paciente? Os dados genómicos são o activo mais sensível
          que existe. RGPD europeu e HIPAA americano aplicam-se integralmente. Anonimização não é suficiente — dados
          genómicos são quase-identificadores únicos.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 9 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Casos de Uso em Energia</h2>
        <WindFarmSVG />

        <h3 style={S.h3}>Turbinas Eólicas Offshore — Siemens Gamesa</h3>
        <p style={S.p}>
          Cada turbina SG 14-222 DD tem um DT que monitoriza mais de 400 sensores a 50 Hz. Modelos de fadiga
          de materiais calculam em tempo-real o estado das pás, torre e caixa de velocidades. O sistema prevê
          falhas de rolamento com 3-6 semanas de antecedência, permitindo enviar embarcações de manutenção
          em condições meteorológicas favoráveis. Redução de custos O&M: 25%.
        </p>

        <h3 style={S.h3}>Power Grid Digital Twin</h3>
        <p style={S.p}>
          DTs de redes eléctricas permitem simular perturbações (queda de linha, falha de subestação) e calcular
          respostas de balanceamento em milissegundos. A National Grid UK usa DTs para integrar fontes renováveis
          intermitentes sem perder estabilidade de frequência (50 Hz ± 0.2 Hz).
        </p>

        <h3 style={S.h3}>Battery Digital Twin (EV)</h3>
        <p style={S.p}>
          Tesla, BYD e Volkswagen implementam DTs de pacotes de baterias em veículos eléctricos. O DT monitoriza
          temperatura célula a célula, estado de carga (SoC) e estado de saúde (SoH), optimiza a estratégia de
          carregamento e prevê degradação. Resultado: duração da bateria aumentada 15-20%.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Sub-sector</th>
              <th style={S.th}>Asset</th>
              <th style={S.th}>Valor gerado</th>
              <th style={S.th}>Parceiro tecnológico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Eólica offshore', 'Turbina SG 14-222', 'O&M -25%, manut. preditiva', 'Siemens Gamesa + AWS'],
              ['Rede eléctrica', 'Subestacoes / linhas', 'Estabilidade renovaveis', 'National Grid + GE Vernova'],
              ['Solar utility', 'Parque FV 500 MW', 'Previsao producao +8%', 'EDF + Bentley'],
              ['Bateria EV', 'Pack Li-ion 800V', 'Vida util +15-20%', 'Tesla, Volkswagen'],
              ['Petroquímica', 'Refinaria / reactores', 'Energia -8%, emissoes -12%', 'Shell + AspenTech'],
            ].map(([sec, asset, val, par]) => (
              <tr key={sec}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{sec}</td>
                <td style={S.td}>{asset}</td>
                <td style={{ ...S.td, color: '#f97316' }}>{val}</td>
                <td style={S.td}>{par}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* ── Section 10 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Maturidade e Níveis</h2>
        <MaturitySVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível</th>
              <th style={S.th}>Nome</th>
              <th style={S.th}>Sincronização</th>
              <th style={S.th}>ML/IA</th>
              <th style={S.th}>Capacidade chave</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['L1', 'Digital Model', 'Nenhuma (manual)', 'Não', 'Modelo CAD/BIM estático'],
              ['L2', 'Digital Shadow', 'Sensor → Digital', 'Opcional', 'Monitorização e visualização'],
              ['L3', 'Digital Twin', 'Bidirecional', 'Sim', 'Diagnóstico + controlo remoto'],
              ['L4', 'Autonomous DT', 'Bidirecional + actua', 'Avançado', 'Optimização e auto-actuação'],
              ['L5', 'Cognitive DT', 'Auto-aprendizagem', 'LLM + RL', 'Raciocínio, planeamento autónomo'],
            ].map(([l, n, s, ml, c]) => (
              <tr key={l}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{l}</td>
                <td style={S.td}>{n}</td>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{ml}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Onde está a indústria em 2024?</h3>
        <p style={S.p}>
          A maioria das implementações industriais encontra-se no L2-L3. Grandes OEMs (GE, Siemens, ABB) operam
          em L3 em casos específicos. L4 existe em ambientes controlados (robótica, veículos autónomos). L5 é
          investigação activa com primeiros produtos a emergir em 2024-2025 (NVIDIA Omniverse + LLMs).
        </p>

        <div style={S.note}>
          Não saltar níveis: tentativas de implementar L4 sem dados limpos (requisito de L2) resultam em falhas
          caras. A maturidade de dados precede sempre a maturidade do modelo.
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 11 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Desafios e Limitações</h2>
        <RadarSVG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Desafio</th>
              <th style={S.th}>Descrição</th>
              <th style={S.th}>Mitigação</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Qualidade e latência dos dados',
                'Sensores falham, dados chegam fora de ordem, timestamps inconsistentes',
                'Data quality pipelines (Great Expectations), time-series DBs (InfluxDB, TimescaleDB), técnicas de imputação',
              ],
              [
                'Fidelidade vs custo computacional',
                'Modelos FEM de alta fidelidade podem demorar horas a correr',
                'Modelos de ordem reduzida (ROMs) via POD/RBF; surrogate models com GPR ou neural ODEs',
              ],
              [
                'Cibersegurança',
                'O DT expande superfície de ataque — comprometer o DT pode comprometer o activo físico',
                'Zero-trust architecture, encriptação canal (TLS 1.3), autenticação mútua certificados X.509, auditoria contínua',
              ],
              [
                'Interoperabilidade',
                'Padrões concorrentes: DTDL (Microsoft), AAS (Plattform I4.0), W3C WoT, NGSI-LD (FIWARE)',
                'Adoptar camada de abstracção (Eclipse Ditto, ThingsBoard), apostar em DTDL + AAS que convergem para ISO 23247',
              ],
              [
                'Custo de implementação',
                'Projecto DT industrial pode custar 500 k a 5 M EUR em sensores, integração e modelos',
                'Começar pequeno (Component DT), provar ROI, escalar; explorar cloud-native (Azure Digital Twins pay-per-use)',
              ],
              [
                'Talent gap',
                'Requer competências raras: IoT + física + ML + integração IT/OT',
                'Formação interna; parcerias com universidades; plataformas low-code DT (PTC Vuforia, Siemens Mendix)',
              ],
            ].map(([d, desc, mit]) => (
              <tr key={d}>
                <td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{d}</td>
                <td style={S.td}>{desc}</td>
                <td style={{ ...S.td, color: '#f97316' }}>{mit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong style={{ color }}>O problema da divergência do modelo</strong>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Com o tempo, o activo físico evolui (desgaste, modificações, upgrades) e o DT pode divergir da
            realidade se não houver re-calibração contínua. Esta "model drift" é análoga ao concept drift em ML:
            deve ser monitorizada com métricas de erro entre predições do DT e medições reais, e activar
            re-treino automático quando o erro excede um threshold.
          </p>
        </div>
      </section>

      <hr style={S.divider} />

      {/* ── Section 12 ── */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <EcosystemSVG />

        <h3 style={S.h3}>Tabela de Definições Chave</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Termo</th>
              <th style={S.th}>Definição concisa</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Digital Twin (DT)', 'Representação digital sincronizada e bidirecional de um activo ou processo físico'],
              ['Digital Shadow', 'DT de nível 2: sensor → digital apenas; sem actuar no físico'],
              ['Digital Model', 'DT de nível 1: modelo digital sem sincronização automática'],
              ['OPC-UA', 'Protocolo industrial de comunicação M2M seguro e semântico, base da conectividade DT'],
              ['DTDL', 'Digital Twin Definition Language — linguagem JSON-LD da Microsoft para descrever DTs'],
              ['AAS', 'Asset Administration Shell — padrão I4.0 para passaporte digital de activos industriais'],
              ['ROM', 'Reduced Order Model — modelo simplificado que preserva comportamento com menos custo'],
              ['Surrogate model', 'Modelo de ML que aproxoma um simulador lento para inferência rápida'],
              ['Model drift', 'Divergência crescente entre DT e activo físico real ao longo do tempo'],
              ['NVIDIA Omniverse', 'Plataforma de DT colaborativo com renderização USD e simulação física em tempo-real'],
            ].map(([t, d]) => (
              <tr key={t}>
                <td style={{ ...S.td, fontWeight: 700, color, whiteSpace: 'nowrap' }}>{t}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Matriz Maturidade vs ROI</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Nível</th>
              <th style={S.th}>Investimento relativo</th>
              <th style={S.th}>ROI típico</th>
              <th style={S.th}>Payback</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['L1 — Digital Model', 'Baixo (software CAD)', 'Melhoria de design', '> 3 anos'],
              ['L2 — Digital Shadow', 'Médio (sensores + plataforma)', '10-20% eficiência', '1-2 anos'],
              ['L3 — Digital Twin', 'Alto (integração IT/OT + ML)', '20-40% redução falhas', '8-18 meses'],
              ['L4 — Autonomous DT', 'Muito alto (automação + controlo)', '40-60% eficiência ops', '12-24 meses'],
              ['L5 — Cognitive DT', 'Extremo (IA avancada + R&D)', 'Vantagem competitiva', '> 2 anos'],
            ].map(([n, inv, roi, pb]) => (
              <tr key={n}>
                <td style={{ ...S.td, fontWeight: 600, color }}>{n}</td>
                <td style={S.td}>{inv}</td>
                <td style={{ ...S.td, color: '#f97316' }}>{roi}</td>
                <td style={S.td}>{pb}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Roadmap: Como Começar</h3>
        <div style={S.highlight}>
          <ol style={{ paddingLeft: '1.25rem', margin: 0 }}>
            <li style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Definir o caso de negócio:</strong> qual processo tem maior custo de downtime ou ineficiência? Aí mora o ROI mais rápido.</li>
            <li style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Avaliar maturidade de dados:</strong> existe telemetria? Com que frequência? Histórico de quanto tempo? Se não há dados, começar por instrumentar (L2).</li>
            <li style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Escolher plataforma:</strong> Azure Digital Twins (enterprise), AWS IoT TwinMaker (AWS-native), NVIDIA Omniverse (visualização), Eclipse Ditto (open-source).</li>
            <li style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Modelar o activo:</strong> ontologia (DTDL/AAS), modelo físico simplificado, integrações OPC-UA/MQTT.</li>
            <li style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Piloto restrito:</strong> uma máquina, um processo. Validar fidelidade do modelo vs realidade (RMSE, MAE).</li>
            <li style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Adicionar ML:</strong> modelos de anomalia (Isolation Forest, VAE), previsão de RUL (LSTM, Transformer), optimização (RL).</li>
            <li style={{ ...S.p, marginBottom: 0 }}><strong>Escalar e fechar o loop:</strong> actuar no físico via API SCADA/MES, monitorizar model drift, re-treinar periodicamente.</li>
          </ol>
        </div>

        <div style={S.note}>
          O padrão híbrido physics-ML (Physics-Informed ML) é o estado da arte em Digital Twins industriais:
          o modelo físico garante extrapolação correcta; o ML corrige desvios por degradação, variabilidade de
          materiais ou fenómenos não modelados. Explore Physics-Informed Neural Networks (PINNs) para ir mais longe.
        </div>

        <div style={S.note}>
          Síntese do Módulo: Um Digital Twin sincroniza o mundo físico com o digital de forma bidirecional e contínua.
          A tríade Entidade Física + Modelo Digital + Fluxo de Dados define a arquitectura mínima. A maturidade
          progride de L1 (modelo estático) a L5 (cognição autónoma) — a maioria da indústria opera em L2-L3, com ROI
          comprovado em paybacks de 8-18 meses. Os desafios críticos são qualidade de dados, cibersegurança e model drift;
          a abordagem physics-informed ML é o estado da arte para modelos de alta fidelidade.
        </div>
      </section>
    </div>
  );
}
