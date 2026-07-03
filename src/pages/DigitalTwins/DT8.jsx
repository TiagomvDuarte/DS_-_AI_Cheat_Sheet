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

function LifecycleSVG() {
  const cx = 280, cy = 215, r = 110;
  const stages = [
    { label: 'Sense', angle: -90, ml: 'Anomaly Detection' },
    { label: 'Model', angle: -18, ml: 'Surrogate Models' },
    { label: 'Analyze', angle: 54, ml: 'RUL Prediction' },
    { label: 'Optimize', angle: 126, ml: 'RL / Optimization' },
    { label: 'Act', angle: 198, ml: 'Control Policy' },
  ];
  return (
    <svg viewBox="0 0 560 420" style={{ width: '100%', maxWidth: 560, display: 'block', margin: '1.5rem auto' }}>
      <defs>
        {stages.map((_, i) => (
          <marker key={i} id={`arr${i}`} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={color} />
          </marker>
        ))}
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="2" />
      {/* Arcs first */}
      {stages.map((s, i) => {
        const a = (s.angle * Math.PI) / 180;
        const nx = cx + r * Math.cos(a);
        const ny = cy + r * Math.sin(a);
        const nextS = stages[(i + 1) % stages.length];
        const na = (nextS.angle * Math.PI) / 180;
        const nnx = cx + r * Math.cos(na);
        const nny = cy + r * Math.sin(na);
        return (
          <path key={`arc${i}`}
            d={`M ${nx} ${ny} A ${r} ${r} 0 0 1 ${nnx} ${nny}`}
            fill="none" stroke={color} strokeWidth="2.5" markerEnd={`url(#arr${i})`}
          />
        );
      })}
      {/* Nodes on top */}
      {stages.map((s, i) => {
        const a = (s.angle * Math.PI) / 180;
        const nx = cx + r * Math.cos(a);
        const ny = cy + r * Math.sin(a);
        return (
          <g key={i}>
            <circle cx={nx} cy={ny} r="22" fill={color} />
            <text x={nx} y={ny} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="10" fontWeight="700">{s.label}</text>
          </g>
        );
      })}
      {stages.map((s, i) => {
        const a = (s.angle * Math.PI) / 180;
        const lx = cx + (r + 75) * Math.cos(a);
        const ly = cy + (r + 75) * Math.sin(a);
        return (
          <text key={'ml' + i} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill="var(--text-secondary)" fontSize="9.5">{s.ml}</text>
        );
      })}
      <text x={cx} y={cy - 12} textAnchor="middle" fill={color} fontSize="13" fontWeight="700">Digital</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill={color} fontSize="13" fontWeight="700">Twin</text>
      <text x={cx} y={cy + 24} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ML Loop</text>
      <text x={280} y={405} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Ciclo de vida do DT aumentado por ML em cada fase</text>
    </svg>
  );
}

function AnomalySVG() {
  const points = [10,12,11,13,12,14,13,12,11,13,12,38,13,12,11,14,12,13];
  const upper = points.map(() => 20);
  const lower = points.map(() => 6);
  const w = 500, h = 160, padL = 30, padR = 52, padT = 20, padB = 30;
  const gw = w - padL - padR;
  const gh = h - padT - padB;
  const xScale = (i) => padL + (i / (points.length - 1)) * gw;
  const yScale = (v) => padT + gh - ((v / 45) * gh);
  const lineD = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(v)}`).join(' ');
  const upperD = upper.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(v)}`).join(' ');
  const lowerD = lower.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(v)}`).join(' ');
  const bandD = upper.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(v)}`).join(' ')
    + ' ' + lower.map((v, i) => `${i === points.length - 1 - i ? '' : ''}`).reverse().map((v, i) => `L ${xScale(points.length - 1 - i)} ${yScale(lower[points.length - 1 - i])}`).join(' ') + ' Z';
  const anomalyIdx = 11;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '1.5rem auto' }}>
      <path d={bandD} fill="rgba(249,115,22,0.10)" />
      <path d={upperD} fill="none" stroke="rgba(249,115,22,0.35)" strokeWidth="1.5" strokeDasharray="4,3" />
      <path d={lowerD} fill="none" stroke="rgba(249,115,22,0.35)" strokeWidth="1.5" strokeDasharray="4,3" />
      <path d={lineD} fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx={xScale(anomalyIdx)} cy={yScale(points[anomalyIdx])} r="8" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <line x1={xScale(anomalyIdx)} y1={yScale(points[anomalyIdx]) - 12} x2={xScale(anomalyIdx)} y2={yScale(points[anomalyIdx]) - 28} stroke="#f97316" strokeWidth="1.5" />
      <text x={xScale(anomalyIdx)} y={yScale(points[anomalyIdx]) - 29} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Anomalia</text>
      <text x={padL + gw + 5} y={yScale(20)} dominantBaseline="middle" fill="var(--text-secondary)" fontSize="9">Upper</text>
      <text x={padL + gw + 5} y={yScale(6)} dominantBaseline="middle" fill="var(--text-secondary)" fontSize="9">Lower</text>
      <line x1={padL} y1={padT + gh} x2={padL + gw} y2={padT + gh} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + gh} stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={w / 2} y={h - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Tempo</text>
      <text x={12} y={padT + gh / 2} textAnchor="middle" dominantBaseline="middle" fill="var(--text-secondary)" fontSize="9" transform={`rotate(-90,12,${padT + gh / 2})`}>Valor</text>
    </svg>
  );
}

function RULSVG() {
  const w = 460, h = 200, padL = 40, padR = 20, padT = 20, padB = 35;
  const gw = w - padL - padR;
  const gh = h - padT - padB;
  const pts = Array.from({ length: 60 }, (_, i) => {
    const t = i / 59;
    return 1 - Math.pow(t, 1.6) * 0.98;
  });
  const xS = (i) => padL + (i / 59) * gw;
  const yS = (v) => padT + (1 - v) * gh;
  const lineD = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xS(i)} ${yS(v)}`).join(' ');
  const knownUpTo = 38;
  const predStart = knownUpTo;
  const coneTop = pts.map((v, i) => {
    if (i < predStart) return null;
    const spread = ((i - predStart) / (59 - predStart)) * 0.18;
    return { x: xS(i), y: yS(Math.max(0, v - spread)) };
  }).filter(Boolean);
  const coneBot = pts.map((v, i) => {
    if (i < predStart) return null;
    const spread = ((i - predStart) / (59 - predStart)) * 0.18;
    return { x: xS(i), y: yS(Math.min(1, v + spread)) };
  }).filter(Boolean).reverse();
  const coneD = coneTop.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
    + ' ' + coneBot.map((p, i) => `L ${p.x} ${p.y}`).join(' ') + ' Z';
  return (
    <svg viewBox={`0 0 ${w +15}  ${h}`} style={{ width: '100%', maxWidth: w, display: 'block', margin: '1.5rem auto' }}>
      <line x1={padL} y1={padT + gh} x2={padL + gw} y2={padT + gh} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + gh} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL + gw} y1={padT} x2={padL + gw} y2={padT + gh} stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={padL + gw + 4} y={padT + gh / 2} fill="#f97316" fontSize="9" dominantBaseline="middle">Falha</text>
      <path d={coneD} fill="rgba(249,115,22,0.15)" />
      <path d={lineD} fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={xS(predStart)} y1={padT} x2={xS(predStart)} y2={padT + gh} stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x={xS(predStart) - 20} y={padT + 10} textAnchor="middle" fill={color} fontSize="9">t atual</text>
      <text x={(xS(predStart) + xS(59)) / 2} y={padT + 14} textAnchor="middle" fill={color} fontSize="9">RUL (incerteza)</text>
      <text x={padL - 5} y={yS(1)} textAnchor="end" dominantBaseline="middle" fill="var(--text-secondary)" fontSize="9">1.0</text>
      <text x={padL - 5} y={yS(0)} textAnchor="end" dominantBaseline="middle" fill="var(--text-secondary)" fontSize="9">0.0</text>
      <text x={padL + gw / 2} y={h - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Tempo de operação</text>
      <text x={12} y={padT + gh / 2} textAnchor="middle" dominantBaseline="middle" fill="var(--text-secondary)" fontSize="9" transform={`rotate(-90,12,${padT + gh / 2})`}>Health Index</text>
    </svg>
  );
}

function RLSVG() {
  return (
    <svg viewBox="0 0 460 200" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
      <rect x="30" y="65" width="130" height="70" rx="10" fill={color} />
      <text x="95" y="97" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Agente</text>
      <text x="95" y="115" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">Politica (pi)</text>
      <rect x="300" y="65" width="130" height="70" rx="10" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="2" />
      <text x="365" y="93" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Digital Twin</text>
      <text x="365" y="111" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Ambiente</text>
      <text x="365" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">simulado</text>
      <defs>
        <marker id="arrl1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={color} />
        </marker>
        <marker id="arrl2" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto">
          <path d="M8,0 L0,4 L8,8 Z" fill={color} />
        </marker>
      </defs>
      <path d="M 160 90 Q 230 55 300 90" fill="none" stroke={color} strokeWidth="2" markerEnd="url(#arrl1)" />
      <text x="230" y="60" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">Acao</text>
      <path d="M 300 120 Q 230 160 160 120" fill="none" stroke={color} strokeWidth="2" markerEnd="url(#arrl2)" />
      <text x="230" y="168" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">Estado + Recompensa</text>
      <text x="230" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Treinar RL num DT e-real evita custos e riscos físicos</text>
    </svg>
  );
}

function GenAISVG() {
  return (
    <svg viewBox="0 0 460 210" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
      <rect x="10" y="80" width="110" height="50" rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="65" y="102" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Útilizador</text>
      <text x="65" y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Query em LN</text>
      <rect x="175" y="65" width="110" height="80" rx="8" fill={color} />
      <text x="230" y="97" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">LLM</text>
      <text x="230" y="113" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9">GPT-4 / Claude</text>
      <text x="230" y="128" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Raciocinio</text>
      <rect x="340" y="75" width="110" height="60" rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
      <text x="395" y="99" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">DT Knowledge</text>
      <text x="395" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Graph / DB</text>
      <defs>
        <marker id="arrg1" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill={color} /></marker>
        <marker id="arrg2" markerWidth="7" markerHeight="7" refX="2" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill={color} /></marker>
      </defs>
      <line x1="120" y1="105" x2="175" y2="105" stroke={color} strokeWidth="2" markerEnd="url(#arrg1)" />
      <line x1="285" y1="98" x2="340" y2="98" stroke={color} strokeWidth="2" markerEnd="url(#arrg1)" />
      <line x1="340" y1="112" x2="285" y2="112" stroke={color} strokeWidth="2" markerEnd="url(#arrg2)" />
      <path d="M 230 145 Q 155 175 100 155" fill="none" stroke={color} strokeWidth="2" markerEnd="url(#arrg2)" />
      <text x="160" y="178" textAnchor="middle" fill={color} fontSize="9">Resposta em LN</text>
      <text x="230" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">LLM como interface conversacional do Digital Twin</text>
    </svg>
  );
}

function GNNSVG() {
  const nodes = [
    { id: 0, x: 100, y: 100, label: 'M1' },
    { id: 1, x: 210, y: 55, label: 'M2' },
    { id: 2, x: 320, y: 80, label: 'M3' },
    { id: 3, x: 210, y: 160, label: 'M4' },
    { id: 4, x: 350, y: 165, label: 'M5' },
  ];
  const edges = [[0,1],[1,2],[0,3],[3,4],[2,4],[1,3]];
  return (
    <svg viewBox="0 0 460 240" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
      <defs>
        <marker id="arrgnn" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(249,115,22,0.5)" /></marker>
      </defs>
      {edges.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b];
        return (
          <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="rgba(249,115,22,0.4)" strokeWidth="2" markerEnd="url(#arrgnn)" />
        );
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="26" fill={n.id === 0 ? '#f97316' : color} fillOpacity={n.id === 0 ? 1 : 0.85} />
          <text x={n.x} y={n.y - 2} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="12" fontWeight="700">{n.label}</text>
          {n.id === 0 && <text x={n.x} y={n.y + 14} textAnchor="middle" fill="#fff" fontSize="7">anomalia</text>}
        </g>
      ))}
      <rect x="10" y="195" width="420" height="40" rx="6" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.2)" strokeWidth="1" />
      <text x="220" y="213" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">GNN agrega informação de vizinhos: cada no recebe msgs dos nos adjacentes</text>
      <text x="220" y="223" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Anomalia em M1 propaga-se pelo grafo para detetar falhas em cadeia</text>
    </svg>
  );
}

function TransferSVG() {
  return (
    <svg viewBox="0 0 460 200" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
      <rect x="20" y="60" width="150" height="100" rx="10" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="2" />
      <text x="95" y="88" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Source DT</text>
      <text x="95" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Bem instrumentado</text>
      <text x="95" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Muitos sensores</text>
      <text x="95" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Grande dataset</text>
      <text x="95" y="150" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Modelo pre-treinado</text>
      <rect x="290" y="60" width="150" height="100" rx="10" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.4)" strokeWidth="2" strokeDasharray="6,3" />
      <text x="365" y="88" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Target DT</text>
      <text x="365" y="105" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Poucos sensores</text>
      <text x="365" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Dados escassos</text>
      <text x="365" y="135" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Nova instalacao</text>
      <text x="365" y="150" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">Fine-tuning (poucos ep.)</text>
      <defs>
        <marker id="arrtl" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill={color} /></marker>
      </defs>
      <path d="M 170 105 Q 230 75 290 105" fill="none" stroke={color} strokeWidth="2.5" markerEnd="url(#arrtl)" />
      <text x="230" y="78" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Transfer</text>
      <text x="230" y="185" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Domain Adaptation: adaptar modelo de um ativo a outro com poucos dados</text>
    </svg>
  );
}

function FederatedSVG() {
  const sites = [
    { y: 55,  label: 'Site A' },
    { y: 120, label: 'Site B' },
    { y: 185, label: 'Site C' },
  ];
  const sx = 80, sw = 84, sh = 52;
  const cx = 340, cy = 120, cw = 110, ch = 72;
  const agLeft = cx - cw / 2;
  const agRight = cx + cw / 2;
  return (
    <svg viewBox="0 0 460 255" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
      <defs>
        <marker id="arrfl" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={color} />
        </marker>
        <marker id="arrfl_d" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(249,115,22,0.65)" />
        </marker>
      </defs>
      {/* Aggregator */}
      <rect x={agLeft} y={cy - ch / 2} width={cw} height={ch} rx="10" fill={color} />
      <text x={cx} y={cy - 14} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Agregador</text>
      <text x={cx} y={cy + 4} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9">FedAvg</text>
      <text x={cx} y={cy + 19} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8">Global Model</text>
      {/* Sites + arrows */}
      {sites.map((s, i) => (
        <g key={i}>
          <rect x={sx - sw / 2} y={s.y - sh / 2} width={sw} height={sh} rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
          <text x={sx} y={s.y - 9} textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{s.label}</text>
          <text x={sx} y={s.y + 7} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Dados locais</text>
          <text x={sx} y={s.y + 19} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Modelo local</text>
          {/* Solid: site → aggregator (gradients) */}
          <line x1={sx + sw / 2} y1={s.y - 7} x2={agLeft} y2={cy + (i - 1) * 20 - 7} stroke={color} strokeWidth="1.5" markerEnd="url(#arrfl)" />
          {/* Dashed: aggregator → site (global model) — line drawn right-to-left so arrow points left */}
          <line x1={agLeft} y1={cy + (i - 1) * 20 + 7} x2={sx + sw / 2} y2={s.y + 7} stroke="rgba(249,115,22,0.55)" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrfl_d)" />
        </g>
      ))}
      {/* Legend */}
      <line x1="30" y1="232" x2="62" y2="232" stroke={color} strokeWidth="1.5" markerEnd="url(#arrfl)" />
      <text x="67" y="236" fill="var(--text-secondary)" fontSize="8">Gradientes → Agregador</text>
      <line x1="235" y1="232" x2="203" y2="232" stroke="rgba(249,115,22,0.55)" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrfl_d)" />
      <text x="240" y="236" fill="var(--text-secondary)" fontSize="8">Modelo global → Sites</text>
    </svg>
  );
}

function ExplainSVG() {
  const features = [
    { name: 'Temperatura', val: 0.30 },
    { name: 'Vibracao',    val: 0.25 },
    { name: 'Idade',       val: 0.20 },
    { name: 'Pressao',     val: -0.10 },
    { name: 'Humidade',    val: -0.05 },
  ];
  const maxV = 0.35;
  const barW = 200;
  const baseX = 240;
  const nameX = 150;
  return (
    <svg viewBox="0 0 460 210" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
      <text x="230" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="600">SHAP — Contribuição de cada feature para a predição</text>
      {features.map((f, i) => {
        const y = 38 + i * 32;
        const pos = f.val >= 0;
        const bw = Math.abs(f.val / maxV) * barW;
        const bx = pos ? baseX : baseX - bw;
        return (
          <g key={i}>
            <text x={nameX} y={y + 11} textAnchor="end" fill="var(--text-primary)" fontSize="10">{f.name}</text>
            <rect x={bx} y={y} width={bw} height="22" rx="4" fill={color} fillOpacity={pos ? 0.9 : 0.45} />
            <text x={pos ? bx + bw + 5 : bx - 5} y={y + 11} textAnchor={pos ? 'start' : 'end'} dominantBaseline="middle" fill={color} fontSize="9" fontWeight="700">{pos ? '+' : ''}{f.val.toFixed(2)}</text>
          </g>
        );
      })}
      <line x1={baseX} y1="32" x2={baseX} y2={38 + features.length * 32} stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x={baseX} y={38 + features.length * 32 + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Baseline</text>
    </svg>
  );
}

function SimulatorSVG() {
  return (
    <svg viewBox="0 0 520 200" style={{ width: '100%', maxWidth: 520, display: 'block', margin: '1.5rem auto' }}>
      <defs>
        <marker id="arrsim" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={color} />
        </marker>
      </defs>
      {/* Digital Twin box */}
      <rect x="20" y="70" width="130" height="70" rx="10" fill={color} />
      <text x="85" y="99" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Digital Twin</text>
      <text x="85" y="117" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">Simulador</text>
      <text x="85" y="130" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Sintético</text>
      {/* Data circles: 3 cols x 2 rows, max x = 185+2*38+15=276, well left of arrow at 295 */}
      {[0,1,2,3,4,5].map((i) => {
        const tx = 185 + (i % 3) * 38;
        const ty = 65 + Math.floor(i / 3) * 52;
        return (
          <g key={i}>
            <line x1="150" y1="105" x2={tx - 13} y2={ty} stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <circle cx={tx} cy={ty} r="15" fill="rgba(249,115,22,0.15)" stroke={color} strokeWidth="1.5" />
            <text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fill={color} fontSize="7.5">data</text>
          </g>
        );
      })}
      {/* Arrow from circles to ML Model */}
      <line x1="295" y1="105" x2="378" y2="105" stroke={color} strokeWidth="2" markerEnd="url(#arrsim)" />
      <text x="336" y="96" textAnchor="middle" fill={color} fontSize="8">Dados</text>
      {/* ML Model box */}
      <rect x="380" y="70" width="120" height="70" rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="2" />
      <text x="440" y="97" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">ML Model</text>
      <text x="440" y="113" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Treina em dados</text>
      <text x="440" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">sintéticos</text>
      <text x="260" y="182" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Sim-to-Real Gap: domain randomization reduz discrepância simulação-realidade</text>
    </svg>
  );
}

function SinteseSVG() {
  const rungs = [
    { label: 'Monitorização', cap: 'Dashboards, alertas' },
    { label: 'Diagnóstico', cap: 'Anomaly detection, root cause' },
    { label: 'Predição', cap: 'RUL, forecasting' },
    { label: 'Otimização', cap: 'RL, otimização numérica' },
    { label: 'Autonomia', cap: 'Self-healing, controlo autónomo' },
  ];
  const bx = 30, rowH = 36, startY = 240;
  return (
    <svg viewBox="0 0 480 270" style={{ width: '100%', maxWidth: 480, display: 'block', margin: '1.5rem auto' }}>
      <text x="240" y="18" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Escada de Capacidades do DT aumentado por IA</text>
      {rungs.map((r, i) => {
        const bw = 90 + i * 72;
        const y = startY - i * rowH;
        const alpha = 0.25 + i * 0.15;
        const bright = i >= 3;
        return (
          <g key={i}>
            <rect x={bx} y={y - 26} width={bw} height="30" rx="5" fill={color} fillOpacity={alpha} stroke={color} strokeWidth="1.5" strokeOpacity="0.7" />
            <text x={bx + 8} y={y - 9} fill={bright ? '#fff' : color} fontSize="10" fontWeight="700" dominantBaseline="middle">{i + 1}. {r.label}</text>
            <text x={bx + bw + 8} y={y - 9} textAnchor="start" fill="var(--text-secondary)" fontSize="8.5" dominantBaseline="middle">{r.cap}</text>
          </g>
        );
      })}
    </svg>
  );
}

function MLOpsSVGFixed() {
  const steps = ['Ingestao', 'Features', 'Treino', 'Deploy', 'Monitor'];
  const sw = 72, sh = 44, gap = 14;
  const totalW = steps.length * sw + (steps.length - 1) * gap;
  const startX = (460 - totalW) / 2;
  const y = 70;
  return (
    <svg viewBox="0 0 460 190" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
      <defs>
        <marker id="arrmlo2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill={color} /></marker>
        <marker id="arrmlo3" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#f97316" /></marker>
      </defs>
      {steps.map((s, i) => {
        const x = startX + i * (sw + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={sw} height={sh} rx="8" fill={i === 4 ? color : 'rgba(249,115,22,0.12)'} stroke={color} strokeWidth="1.5" />
            <text x={x + sw / 2} y={y + sh / 2} textAnchor="middle" dominantBaseline="middle" fill={i === 4 ? '#fff' : color} fontSize="9.5" fontWeight="700">{s}</text>
            {i < steps.length - 1 && (
              <line x1={x + sw} y1={y + sh / 2} x2={x + sw + gap} y2={y + sh / 2} stroke={color} strokeWidth="2" markerEnd="url(#arrmlo2)" />
            )}
          </g>
        );
      })}
      <path
        d={`M ${startX + (steps.length - 1) * (sw + gap) + sw / 2} ${y + sh} Q ${startX + (steps.length - 1) * (sw + gap) + sw / 2} ${y + sh + 50} ${startX + sw / 2} ${y + sh + 50} Q ${startX - 20} ${y + sh + 50} ${startX - 20} ${y + sh / 2} L ${startX} ${y + sh / 2}`}
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
        strokeDasharray="5,3"
        markerEnd="url(#arrmlo3)"
      />
      <text x="230" y={y + sh + 68} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600">Drift Detetado - Retreino Automático</text>
      <text x="230" y="22" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Pipeline MLOps para modelos de ML em Digital Twins</text>
    </svg>
  );
}

export default function DT8() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>ML &amp; AI em Digital Twins</h1>
      <p style={S.lead}>
        Os Digital Twins modernos deixaram de ser meros espelhos digitais passivos: hoje incorporam modelos de Machine Learning
        e Inteligência Artificial que transformam dados de sensores em conhecimento acionável, predições de falha, otimização
        autónoma e interfaces conversacionais. Este módulo explora as técnicas, arquiteturas e padrões de implementação que
        definem o estado da arte da intersecao entre ML/AI e DTs industriais.
      </p>

      {/* SECTION 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. ML no Ciclo de Vida do Digital Twin</h2>
        <p style={S.p}>
          O ciclo de vida de um Digital Twin — Sentir, Modelar, Analisar, Otimizar, Atuar — mapeia diretamente para
          familias de algoritmos de ML. Em vez de um modelo monolítico, um DT maduro orquestra múltiplas técnicas especializadas,
          cada uma responsavel por uma fase do ciclo.
        </p>
        <LifecycleSVG />
        <div style={S.highlight}>
          <strong>Principio chave:</strong> cada fase do ciclo DT tem uma familia ML correspondente. A sinergia entre
          fases — dados de anomalia alimentam treino de RUL, politica RL usa surrogate models para simular consecuencias —
          e o que distingue um DT inteligente de uma colecao de modelos isolados.
        </div>
        <h3 style={S.h3}>Mapeamento Tarefa DT → Técnica ML → Ferramenta</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tarefa do DT</th>
              <th style={S.th}>Técnica ML</th>
              <th style={S.th}>Frameworks/Ferramentas</th>
              <th style={S.th}>Outputs</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Detetar anomalias em tempo real', 'Isolation Forest, LSTM Autoencoder', 'scikit-learn, Keras, River', 'Score de anomalia, alertas'],
              ['Prever vida útil restante', 'LSTM, Transformers, Weibull', 'TensorFlow, PyTorch, lifelines', 'RUL em horas/ciclos'],
              ['Otimizar parametros operacionais', 'Reinforcement Learning', 'Stable-Baselines3, RLlib', 'Politica de controlo'],
              ['Substituir simulações caras', 'Surrogate / Emulator Models', 'GPflow, botorch, SMAC', 'Funcao aproximada rápida'],
              ['Detetar causa raiz', 'Causal ML, GNN', 'DoWhy, PyG', 'Grafo causal, ranking features'],
              ['Gerar dados sintéticos', 'GAN, VAE, Diffusion', 'PyTorch, HuggingFace Diffusers', 'Dataset aumentado'],
              ['Interface em linguagem natural', 'LLM + RAG', 'LangChain, Azure OpenAI', 'Respostas contextuais'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          A escolha da técnica depende de tres dimensoes: volume de dados históricos disponível, latência de inferência
          aceitavel (tempo real vs. batch) e requisito de interpretabilidade (safety-critical vs. operacional).
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Anomaly Detection em Dados de Sensores</h2>
        <p style={S.p}>
          A deteção de anomalias e a aplicação de ML mais imediata num DT industrial. O desafio e que "anomalia" e
          estatísticamente rara, os labels são escassos, e o conceito de normalidade muda com o estado operacional do ativo.
        </p>
        <AnomalySVG />
        <h3 style={S.h3}>Algoritmos e Trade-offs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Algoritmo</th>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Vantagens</th>
              <th style={S.th}>Limitacoes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Isolation Forest', 'Unsupervised', 'Rápido, escalavel, sem labels', 'Fraco em anomalias contextuais'],
              ['Autoencoder', 'Deep / Unsupervised', 'Aprende representacoes complexas', 'Threshold manual, custo treino'],
              ['LSTM Autoencoder', 'Deep / Sequêncial', 'Captura dependências temporais', 'Mais dados necessários'],
              ['One-Class SVM', 'Kernel / Unsupervised', 'Robusto a outliers treino', 'Não escala bem (O(n^2))'],
              ['Statistical (3-sigma)', 'Parametric', 'Interpretavel, tempo real', 'Assume normalidade, univariado'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Anomalia Multivariada</h3>
        <p style={S.p}>
          Sensores individuais dentro dos limites podem revelar anomalia em conjunto: temperatura normal + vibracao
          normal mas correlacao temperatura-vibracao fora do padrão sinaliza folga mecanica. Modelos multivariados
          (LSTM Autoencoder com input shape (T, n_sensors)) capturam estas correlacoes cruzadas.
        </p>
        <div style={S.note}>
          Em produção, use thresholds adaptativos baseados em percentis rolantes (ex. 99.9 percentil das últimas 24h)
          em vez de constantes fixas. Isso acomoda drift lento e mudancas de regime operacional.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Remaining Useful Life (RUL)</h2>
        <p style={S.p}>
          Prever a vida útil restante de um componente transforma o DT de sistema reativo em sistema preditivo.
          O modelo aprende a trajetoria de degradacao e projeta quando o health index atingira o limiar critico.
        </p>
        <RULSVG />
        <h3 style={S.h3}>Construcao do Health Index</h3>
        <p style={S.p}>
          O Health Index (HI) e uma metrica composta, normalizada entre 0 (saudavel) e 1 (falha), que agrega
          múltiplos indicadores de condição. Pode ser calculado por PCA sobre features de vibracão, analise
          espectral de FFT, ou aprendido end-to-end por uma rede neuronal com saida monotonicamente decrescente.
        </p>
        <h3 style={S.h3}>Distribuicao de Weibull para RUL Probabilístico</h3>
        <p style={S.p}>
          A distribuicao de Weibull modela o tempo ate falha com dois parametros: forma (k) e escala (lambda).
          k &gt; 1 indica falha por desgaste (beta de infantile mortality), k = 1 e exponencial puro (falha aleatoria),
          k &gt; 1 e o regime de desgaste tipico de rolamentos e engrenagens.
        </p>
        <div style={S.highlight}>
          Deep Weibull: redes neurais com cabeca Weibull na saida produzem distribuicoes de probabilidade completas
          sobre RUL, não apenas estimativas pontuais — essencial para manutenção baseada em risco.
        </div>
        <p style={S.p}>
          Monte Carlo Dropout (training=True na inferência) transforma qualquer rede com Dropout numa aproximacao
          Bayesiana que produz intervalos de incerteza sem custo adicional de treino — ideal para o cone de incerteza
          da predição de RUL.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Otimização com Reinforcement Learning</h2>
        <p style={S.p}>
          Reinforcement Learning treina um agente que aprende uma politica de controlo otima por interacao com um
          ambiente. O Digital Twin e o ambiente perfeito: seguro, rápido (simulação &gt; tempo real), gratuito para
          reset, e disponível 24/7. Danos físicos no treino são eliminados.
        </p>
        <RLSVG />
        <h3 style={S.h3}>Caso de Uso: Controlo HVAC Industrial</h3>
        <p style={S.p}>
          Um sistema HVAC industrial tem milhares de setpoints possíveis. O RL aprende uma politica que minimiza
          consumo energetico enquanto mantém temperatura e humidade dentro de especificacoes. O DT do edificio
          simula a resposta termica, permitindo explorar estrategias agressivas sem risco para o processo.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Componente RL</th>
              <th style={S.th}>No contexto HVAC + DT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Estado (Observation)', 'Temperatura, humidade, ocupacao, hora do dia, forecast meteorológico'],
              ['Acao (Action)', 'Setpoints de temperatura e fluxo de ar de cada zona'],
              ['Recompensa (Reward)', '-kWh consumidos + penalidade por violacao de conforto'],
              ['Ambiente', 'Digital Twin termico do edificio (EnergyPlus ou TRNSYS)'],
              ['Algoritmo', 'PPO (continuo), SAC (sample-efficient), TD3 (deterministic policy)'],
            ].map(([a, b], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Resultados reportados na literatura: RL em DT de edificios atinge reducoes de 15-30% no consumo energetico
          face a controladores PID classicos, com zero violacoes de conforto após convergencia.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Generative AI para Digital Twins</h2>
        <p style={S.p}>
          LLMs como GPT-4, Claude e Gemini abrem uma nova camada de interacao com DTs: linguagem natural como
          interface universal para consultar o estado do ativo, diagnosticar problemas e gerar relatorios. Alem
          de interfaces, modelos generativos produzem dados sintéticos de falha para treinar modelos supervisionados.
        </p>
        <GenAISVG />
        <h3 style={S.h3}>Modelos Generativos para Dados de Falha</h3>
        <p style={S.p}>
          Falhas são raras por definicao — um rolamento pode operar 10.000 horas antes de falhar. Modelos
          generativos (GANs condicionais, VAEs, modelos de difusao) sintetizam sequências realistas de sensores
          em modo de falha, balanceando o dataset de treino sem aguardar falhas reais.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo Generativo</th>
              <th style={S.th}>Aplicação em DTs</th>
              <th style={S.th}>Qualidade</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['CTGAN', 'Dados tabulares de sensores multivariáveis', 'Boa para correlacoes'],
              ['TimeGAN', 'Series temporais de sensores com dependências', 'Excelente fidelidade temporal'],
              ['CVAE', 'Geração condicionada por tipo de falha', 'Controlavel'],
              ['Diffusion (DDPM)', 'Cenarios de falha realistas, alta qualidade', 'Estado da arte'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Graph Neural Networks para Topologia Industrial</h2>
        <p style={S.p}>
          Fabrics industriais são naturalmente grafos: maquinas são nos, fluxos de material e energia são arestas.
          GNNs exploram esta topologia — uma falha em M1 deve influenciar a predição de M2 e M3 downstream,
          algo impossível para modelos que tratam cada sensor independentemente.
        </p>
        <GNNSVG />
        <h3 style={S.h3}>Message Passing em GNNs</h3>
        <p style={S.p}>
          A cada camada GNN, cada no agrega representacoes dos seus vizinhos (message passing) e atualiza o
          seu próprio estado. Após k camadas, cada no tem informação sobre nos a k-hops de distância. Para uma
          fábrica com 3 estagios de produção, 3 camadas capturam dependências fim-a-fim.
        </p>
      
        <h3 style={S.h3}>Knowledge Graphs para DTs</h3>
        <p style={S.p}>
          Alem de GNNs para ML, Knowledge Graphs (KGs) codificam o conhecimento de engenharia: componente-pertence-a-subsistema,
          falha-tem-sintoma, manutenção-resolve-falha. LLMs combinados com KGs do DT (RAG sobre grafos) respondem
          a questões complexas de diagnóstico que nenhum modelo puramente estatístico consegue.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 7 */}
      <section style={S.section}>
        <h2 style={S.h2}>7. Transfer Learning entre Digital Twins</h2>
        <p style={S.p}>
          Treinar modelos de ML para cada ativo de raiz e dispendioso e muitas vezes impossível (dados insuficientes
          em ativos novos). Transfer Learning aproveita o conhecimento de ativos fonte para acelerar a aprendizagem
          em ativos alvo — mesmo entre fábricantes ou tipos de maquinas diferentes.
        </p>
        <TransferSVG />
        <h3 style={S.h3}>Paradigmas de Transfer para DTs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Paradigma</th>
              <th style={S.th}>Descricao</th>
              <th style={S.th}>Caso de uso DT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Fine-tuning', 'Pre-treinar na source, ajustar camadas finais na target', 'Mesmo tipo maquina, fábrica diferente'],
              ['Domain Adaptation', 'Alinhar distribuicoes feature source-target', 'Maquinas similares, ciclos operacionais diferentes'],
              ['Few-shot Learning', 'Meta-aprender a adaptar a novas tarefas com poucos exemplos', 'Novo tipo de falha com 5-10 exemplos'],
              ['Fleet Learning', 'Aprender em frota, especializar por ativo', 'Veiculos, turbinas, robots (modelo Tesla)'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Fleet Learning: o modelo Tesla</h3>
        <p style={S.p}>
          A Tesla opera uma das maiores frotas de DTs em produção: cada veiculo e um Digital Twin que envia
          dados de conducao anonimizados. O modelo global aprende com bilhoes de km, e cada veiculo recebe
          uma versão personalizada via OTA updates. Este padrão — aprender com a frota, specializar por instância —
          e diretamente aplicavel a turbinas eolicas, compressores industriais e linhas de produção.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 8 */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Federated Learning em Digital Twins</h2>
        <p style={S.p}>
          Dados de produção são frequentemente confidenciais: um fábricante não partilha telemetria de maquinas
          com concorrentes, mesmo que isso beneficiasse todos. Federated Learning (FL) resolve este dilema —
          os modelos viajam, os dados ficam.
        </p>
        <FederatedSVG />
        <h3 style={S.h3}>Algoritmo FedAvg</h3>
        <p style={S.p}>
          No FedAvg (McMahan et al., 2017), cada cliente treina localmente durante E epocas e envia apenas
          os gradientes (ou pesos atualizados) para o servidor central. O servidor agrega por media ponderada
          (proporcional ao numero de amostras) e distribui o modelo global melhorado. Nenhum dado raw sai
          das instalacoes.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo FL</th>
              <th style={S.th}>Particao de dados</th>
              <th style={S.th}>Exemplo em DTs</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Horizontal FL', 'Mesmas features, diferentes amostras (sites diferentes)', 'Fábrica A e B, mesmas maquinas, dados de produção distintos'],
              ['Vertical FL', 'Features diferentes, mesmas amostras (entidades partilhadas)', 'Fábricante (vibracoes) + fornecedor energia (consumo) para o mesmo ativo'],
              ['Federated Transfer', 'Features e amostras diferentes', 'Tipos de ativos distintos, conhecimento de dominio partilhado'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.highlight}>
          Privacidade alem de FL: para garantias formais, combine FL com Differential Privacy (adicionar ruido
          calibrado aos gradientes) e Secure Aggregation (somar gradientes de forma encriptada — o servidor
          ve apenas a media, nunca gradientes individuais).
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 9 */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Explainability (XAI) em Digital Twins</h2>
        <p style={S.p}>
          Em aplicações safety-critical — uma turbina nuclear, um comboio de alta velocidade, uma linha
          farmaceutica — "o modelo disse que vai falhar" não e suficiente. Regulacao (ISO 13849, IEC 62443)
          e engenheiros de manutenção exigem explicações causais e verificaveis.
        </p>
        <ExplainSVG />
        <h3 style={S.h3}>Técnicas XAI para DTs</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>Tipo</th>
              <th style={S.th}>Output</th>
              <th style={S.th}>Aplicação DT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['SHAP (Shapley Values)', 'Global + Local', 'Contribuição por feature', 'Ranking de sensores para anomalia'],
              ['LIME', 'Local', 'Modelo linear local', 'Explicar predição individual de RUL'],
              ['Counterfactual', 'Local', '"Se X fosse Y, não falharia"', 'Recomendar acao corretiva'],
              ['Causal ML (DoWhy)', 'Causal', 'Grafo causal, efeito interventional', 'Root cause analysis de falha'],
              ['Attention Maps', 'Deep / Local', 'Timestamps mais relevantes', 'Identificar instante de inicio de degradacao'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Raciocinio causal vs. correlacional: SHAP identifica features correlacionadas com anomalia, mas
          DoWhy (Microsoft) permite distinguir causas reais de correlacoes espurias — crucial quando a
          temperatura sobe por causa da vibracao excessiva, não como causa independente.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 10 */}
      <section style={S.section}>
        <h2 style={S.h2}>10. DT como Simulador para Treino de ML</h2>
        <p style={S.p}>
          Inversão do paradigma habitual: em vez de ML melhorar o DT, o DT gera dados para treinar ML.
          Simulações de alta fidelidade (EnergyPlus, OpenFOAM, NVIDIA Isaac Sim) produzem datasets com
          todas as condições de falha necessárias, incluindo cenarios raros impossíveis de observar em operação normal.
        </p>
        <SimulatorSVG />
        <h3 style={S.h3}>Sim-to-Real Gap e Domain Randomization</h3>
        <p style={S.p}>
          O gap entre simulação e realidade e o principal obstáculo. Domain Randomization (DR) treina o modelo
          em versões aleatorizadas do simulador (variar friccao, massa, geometria, ruido de sensor) para que
          a realidade seja apenas mais uma variante — o modelo aprende politicas robustas a incerteza de modelo.
        </p>
        <h3 style={S.h3}>NVIDIA Isaac Sim para Robotica</h3>
        <p style={S.p}>
          Para robotica industrial, o NVIDIA Isaac Sim oferece rendering foto-realista com física de alta
          fidelidade (PhysX 5), suporte a ROS2, e GPU-accelerated domain randomization. Um braco robot pode
          ser treinado em 1 hora de simulação paralela (100 instâncias em GPU) e deployed em hardware real
          com mínima necessidade de fine-tuning.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Dominio</th>
              <th style={S.th}>Fidelidade</th>
              <th style={S.th}>Integração ML</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['NVIDIA Isaac Sim', 'Robotica, manipulacao', 'Alta (PhysX 5 + ray tracing)', 'RL nativo, ROS2, Python API'],
              ['EnergyPlus + OpenStudio', 'Edificios, HVAC', 'Alta para termica', 'Gymnasium wrapper'],
              ['OpenFOAM', 'Fluidos, termica industrial', 'Muito alta (CFD)', 'Surrogate via dados offline'],
              ['Ansys Twin Builder', 'Sistemas multi-físicos', 'Alta', 'Python API, FMU export'],
              ['Gazebo / ROS2', 'Robotica, veiculos', 'Media-alta', 'gym-gazebo, ROS2 topics'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 11 */}
      <section style={S.section}>
        <h2 style={S.h2}>11. MLOps para Modelos de DT</h2>
        <p style={S.p}>
          Deployar um modelo ML num DT industrial não e o fim do trabalho — e o inicio. Maquinas degradam,
          regime operacional muda, novos componentes são instalados: a distribuicao de dados deriva (concept drift)
          e o modelo precisa de ser monitorizado e retreinado continuamente.
        </p>
        <MLOpsSVGFixed />
        <h3 style={S.h3}>Concept Drift em DTs Industriais</h3>
        <p style={S.p}>
          Tipos de drift especificos a DTs: <strong>Virtual drift</strong> (sensor recalibrado — distribuicao muda
          sem mudanca real no processo), <strong>Real drift</strong> (rolamento novo — performance melhora, anomalias
          reduzem), <strong>Gradual drift</strong> (desgaste lento ao longo de meses). Cada tipo requer estrategia
          de deteção e adaptacao diferente.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tipo de Drift</th>
              <th style={S.th}>Detetor</th>
              <th style={S.th}>Acao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Data drift (input)', 'PSI, Wasserstein distance', 'Alerta, investigar causa'],
              ['Concept drift (output)', 'ADWIN, DDM, Page-Hinkley', 'Retreino com janela recente'],
              ['Performance drift', 'Monitor MAE/F1 em produção', 'Retreino ou rollback'],
              ['Covariate shift', 'Maximum Mean Discrepancy', 'Re-weighting de amostras'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </section>

      <hr style={S.divider} />

      {/* SECTION 12 */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Sintese do Módulo</h2>
        <p style={S.p}>
          Um DT verdadeiramente inteligente integra múltiplas camadas de ML num pipeline coerente. A escada
          de capacidades abaixo mostra a progressão natural de maturidade — cada degrau adiciona valor mas
          também complexidade de implementação e operação.
        </p>
        <SinteseSVG />
        <h3 style={S.h3}>Seleção de Técnica ML por Tarefa DT</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Tarefa</th>
              <th style={S.th}>Dados disponíveis</th>
              <th style={S.th}>Técnica recomendada</th>
              <th style={S.th}>Alternativa</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Anomaly detection', 'Sem labels', 'Isolation Forest / LSTM AE', 'One-Class SVM'],
              ['Anomaly detection', 'Com labels', 'XGBoost / LSTM classify', 'Random Forest'],
              ['RUL prediction', 'Muitos dados históricos', 'LSTM / Transformer', 'CNN 1D'],
              ['RUL prediction', 'Poucos dados', 'Weibull + TL', 'GPR Bayesiano'],
              ['Controlo otimo', 'DT disponível', 'PPO / SAC (RL)', 'MPC classico'],
              ['Root cause', 'Dados e grafo causal', 'DoWhy + GNN', 'Bayesian Network'],
              ['Interface útilizador', 'Qualquer', 'LLM + RAG sobre DT', 'NLP classico'],
              ['Dados escassos (site novo)', 'Source DT abundante', 'Transfer Learning', 'Federated Learning'],
            ].map(([a, b, c, d], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}><strong>{c}</strong></td>
                <td style={S.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Padrões de Arquitetura</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Padrão</th>
              <th style={S.th}>Quando usar</th>
              <th style={S.th}>Tecnologias</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Lambda Architecture', 'Batch + streaming em paralelo', 'Spark + Flink + Redis'],
              ['Kappa Architecture', 'So streaming, batch desnecessário', 'Kafka + Flink + Feature Store'],
              ['ML Microservices', 'Modelos independentes por funcao', 'FastAPI + Docker + K8s'],
              ['Edge-Cloud Hybrid', 'Latência critica + compute cloud', 'ONNX Runtime + Azure IoT Edge'],
              ['Federated Hub-Spoke', 'Privacidade + frota distribuida', 'Flower + Azure FL + PySyft'],
            ].map(([a, b, c], i) => (
              <tr key={i}>
                <td style={S.td}><strong>{a}</strong></td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Exemplo End-to-End: Anomaly Detection com IsolationForest</h3>
        
        <div style={S.highlight}>
          <strong>Roadmap de implementação sugerido:</strong>
          <ol style={{ margin: '0.5rem 0 0 1.2rem', lineHeight: 2 }}>
            <li>Comecar com Isolation Forest estateless para deteção rápida de anomalias univariadas</li>
            <li>Adicionar LSTM Autoencoder para capturar dependências temporais e multivariadas</li>
            <li>Implementar RUL com LSTM supervisionado quando labels históricos estiverem disponíveis</li>
            <li>Construir pipeline MLOps com MLflow + monitoring de drift</li>
            <li>Explorar RL para otimização quando o DT tiver fidelidade suficiente para simular consequências</li>
            <li>Adicionar LLM interface para democratizar acesso a insights do DT</li>
          </ol>
        </div>
        <p style={S.p}>
          A interseção de ML/AI com Digital Twins e uma das areas de maior crescimento em engenharia de sistemas
          cyberphysicos. As técnicas aqui exploradas — de Isolation Forest a Federated Learning, de GNNs a LLMs —
          não são alternativas mutuamente exclusivas: os DTs mais avancados orquestram-nas num ecossistema integrado
          onde cada técnica amplifica as outras, criando sistemas industriais verdadeiramente autónomos e auto-conscientes.
        </p>
      </section>
    </div>
  );
}
