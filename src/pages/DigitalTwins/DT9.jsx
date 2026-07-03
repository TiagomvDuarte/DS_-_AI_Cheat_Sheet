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

function MarketBarChartSVG() {
  const years = [
    { year: 2023, value: 11, sectors: [4.5, 2.5, 2.5, 1.5] },
    { year: 2024, value: 15, sectors: [6, 3.5, 3.2, 2.3] },
    { year: 2025, value: 20, sectors: [8, 4.5, 4.2, 3.3] },
    { year: 2026, value: 27, sectors: [11, 6, 5.5, 4.5] },
    { year: 2027, value: 36, sectors: [15, 8, 7.2, 5.8] },
    { year: 2028, value: 47, sectors: [19, 11, 9.5, 7.5] },
    { year: 2029, value: 59, sectors: [24, 14, 12, 9] },
    { year: 2030, value: 73, sectors: [30, 17, 15, 11] },
  ];
  const sectorColors = ['#f97316', '#fb923c', '#fbbf24', '#ea580c'];
  const sectorNames = ['Manufatura', 'Saúde', 'Energia', 'Cidades'];
  const maxVal = 73;
  const barH = 26;
  const gap = 10;
  const leftPad = 52;
  const chartW = 580;
  const totalH = years.length * (barH + gap) + 60;

  return (
    <svg viewBox={`0 0 720 ${totalH}`} style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Mercado Global de Digital Twins 2023-2030 (USD Bilhões)</text>
      {years.map((row, i) => {
        const y = 38 + i * (barH + gap);
        let xCursor = leftPad;
        return (
          <g key={row.year}>
            <text x={leftPad - 6} y={y + barH / 2 + 1} textAnchor="end" fontSize="11" fill="var(--text-secondary)" dominantBaseline="middle">{row.year}</text>
            {row.sectors.map((sv, si) => {
              const bw = (sv / maxVal) * chartW;
              const rect = <rect key={si} x={xCursor} y={y} width={bw} height={barH} fill={sectorColors[si]} rx="2" />;
              xCursor += bw;
              return rect;
            })}
            <text x={leftPad + (row.value / maxVal) * chartW + 6} y={y + barH / 2 + 1} fontSize="11" fontWeight="700" fill="var(--text-primary)" dominantBaseline="middle">${row.value}B</text>
          </g>
        );
      })}
      {sectorNames.map((name, i) => (
        <g key={name}>
          <rect x={leftPad + i * 148} y={totalH - 24} width={12} height={12} fill={sectorColors[i]} rx="2" />
          <text x={leftPad + i * 148 + 16} y={totalH - 14} fontSize="11" fill="var(--text-secondary)">{name}</text>
        </g>
      ))}
      <text x={leftPad + chartW / 2} y={totalH - 2} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">CAGR ~31% | Fonte: MarketsandMarkets, Grand View Research 2024</text>
    </svg>
  );
}

function AutonomyLadderSVG() {
  const rungs = [
    { label: 'Monitor', sub: 'Coleta dados, dashboards', humanOp: 1.0, color: '#fb923c' },
    { label: 'Analyze', sub: 'Alertas, anomalias, KPIs', humanOp: 0.7, color: '#f97316' },
    { label: 'Decide', sub: 'Recomendações, otimização', humanOp: 0.35, color: '#f97316' },
    { label: 'Act', sub: 'Atuação autónoma, auto-healing', humanOp: 0.05, color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 700 320" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Escada de Autonomia de Digital Twins</text>
      {rungs.map((r, i) => {
        const y = 240 - i * 56;
        const boxW = 180 + i * 30;
        const boxX = (340 - boxW / 2);
        return (
          <g key={r.label}>
            <rect x={boxX} y={y - 20} width={boxW} height={38} rx="6" fill={r.color} fillOpacity="0.15" stroke={r.color} strokeWidth="1.5" />
            <text x="340" y={y + 2} textAnchor="middle" fontSize="13" fontWeight="700" fill={r.color}>{r.label}</text>
            <text x="340" y={y + 16} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{r.sub}</text>
            {i < rungs.length - 1 && (
              <line x1="340" y1={y - 20} x2="340" y2={y - 36} stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="3 3" />
            )}
            <text x={boxX - 10} y={y + 2} textAnchor="end" fontSize="10" fill="var(--text-secondary)">Humano {Math.round(r.humanOp * 100)}%</text>
            <text x={680} y={y + 2} textAnchor="end" fontSize="10" fill={r.color}>Nível {i + 1}</text>
          </g>
        );
      })}
      <text x="340" y="300" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Autonomia crescente de baixo para cima — intervenção humana diminui</text>
    </svg>
  );
}

function GenerativeDTSVG() {
  const mid = 130;
  return (
    <svg viewBox="0 0 720 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <defs>
        <marker id="arrowGen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" />
        </marker>
      </defs>
      <text x="360" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Generative Digital Twin — Síntese de Cenários com LLMs</text>
      {/* DT Graph box */}
      <rect x="15" y="50" width="200" height="170" rx="10" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <text x={mid} y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">DT Knowledge Graph</text>
      {/* Circles with bigger r=20 */}
      <circle cx="75" cy="120" r="22" fill="#f97316" fillOpacity="0.18" stroke="#f97316" strokeWidth="1.5" />
      <text x="75" y="124" textAnchor="middle" fontSize="10" fontWeight="600" fill="#f97316">Asset</text>
      <circle cx={mid} cy="165" r="22" fill="#f97316" fillOpacity="0.18" stroke="#f97316" strokeWidth="1.5" />
      <text x={mid} y="169" textAnchor="middle" fontSize="10" fontWeight="600" fill="#f97316">Sensor</text>
      <circle cx="185" cy="120" r="22" fill="#f97316" fillOpacity="0.18" stroke="#f97316" strokeWidth="1.5" />
      <text x="185" y="124" textAnchor="middle" fontSize="10" fontWeight="600" fill="#f97316">Event</text>
      {/* Edges between circles */}
      <line x1="95" y1="125" x2="112" y2="148" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.2" />
      <line x1="150" y1="155" x2="165" y2="132" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.2" />
      <line x1="96" y1="115" x2="162" y2="115" stroke="#f97316" strokeOpacity="0.5" strokeWidth="1.2" />
      {/* LLM center box */}
      <rect x="255" y="45" width="210" height="165" rx="10" fill="none" stroke={color} strokeWidth="2" />
      <text x="360" y="74" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>LLM Engine</text>
      <text x="360" y="94" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">(GPT-4 / Claude / Gemini)</text>
      <rect x="272" y="107" width="176" height="44" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x="360" y="125" textAnchor="middle" fontSize="9.5" fill={color}>"Gera 1000 cenários de falha</text>
      <text x="360" y="141" textAnchor="middle" fontSize="9.5" fill={color}>para motor turbina JT8D"</text>
      <text x="360" y="188" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Prompt Engineering + RAG</text>
      {/* Output box */}
      <rect x="505" y="50" width="200" height="165" rx="10" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <text x="605" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f97316">Cenários Sintéticos</text>
      {[0,1,2,3].map(i => (
        <rect key={i} x={520} y={86 + i * 28} width={170} height={22} rx="4" fill="#f97316" fillOpacity={0.10 + i * 0.04} stroke="#f97316" strokeWidth="0.8" />
      ))}
      {['Falha sensor T3', 'Vibração 340Hz', 'Oil leak #2', '+997 mais...'].map((t, i) => (
        <text key={i} x="605" y={101 + i * 28} textAnchor="middle" fontSize="9.5" fill="#f97316">{t}</text>
      ))}
      {/* Arrows */}
      <line x1="215" y1="135" x2="253" y2="135" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowGen)" />
      <line x1="465" y1="135" x2="503" y2="135" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowGen)" />
      <text x="360" y="255" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Dados sintéticos raros usados para treinar modelos preditivos — reduz dependência de falhas reais</text>
    </svg>
  );
}

function QuantumCircuitSVG() {
  const gates = [
    { x: 110, qubit: 0, label: 'H' },
    { x: 160, qubit: 0, label: 'RZ' },
    { x: 210, qubit: 1, label: 'H' },
    { x: 260, qubit: 0, label: 'CNOT', isCnot: true },
    { x: 310, qubit: 0, label: 'RZ' },
    { x: 360, qubit: 1, label: 'RZ' },
    { x: 410, qubit: 2, label: 'H' },
    { x: 460, qubit: 1, label: 'CNOT', isCnot: true, target: 2 },
    { x: 510, qubit: 2, label: 'RZ' },
  ];
  const qubits = ['|q0⟩', '|q1⟩', '|q2⟩'];
  const qY = [80, 130, 180];
  return (
    <svg viewBox="0 0 720 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Circuito Quântico para Simulação de Materiais (VQE simplificado)</text>
      {qubits.map((q, i) => (
        <g key={q}>
          <text x="52" y={qY[i] + 5} textAnchor="end" fontSize="12" fill="var(--text-primary)">{q}</text>
          <line x1="58" y1={qY[i]} x2="620" y2={qY[i]} stroke="var(--text-secondary)" strokeWidth="1.5" />
        </g>
      ))}
      {gates.map((g, idx) => {
        const y = qY[g.qubit];
        if (g.isCnot) {
          const ty = g.target !== undefined ? qY[g.target] : qY[g.qubit + 1];
          return (
            <g key={idx}>
              <circle cx={g.x} cy={y} r="8" fill={color} />
              <line x1={g.x} y1={y} x2={g.x} y2={ty} stroke={color} strokeWidth="1.5" />
              <circle cx={g.x} cy={ty} r="10" fill="none" stroke={color} strokeWidth="1.5" />
              <line x1={g.x - 10} y1={ty} x2={g.x + 10} y2={ty} stroke={color} strokeWidth="1.5" />
              <line x1={g.x} y1={ty - 10} x2={g.x} y2={ty + 10} stroke={color} strokeWidth="1.5" />
            </g>
          );
        }
        return (
          <g key={idx}>
            <rect x={g.x - 16} y={y - 14} width={32} height={28} rx="4" fill="var(--bg-secondary)" stroke={color} strokeWidth="1.5" />
            <text x={g.x} y={y + 5} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>{g.label}</text>
          </g>
        );
      })}
      <rect x="620" y="65" width="40" height="30" rx="4" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="640" y="82" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">M</text>
      <rect x="620" y="115" width="40" height="30" rx="4" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="640" y="132" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">M</text>
      <rect x="620" y="165" width="40" height="30" rx="4" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="640" y="182" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">M</text>
      {/* Speedup chart */}
      <rect x="20" y="210" width="680" height="70" rx="6" fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
      <text x="360" y="228" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Vantagem Quântica em Otimização (tamanho do problema)</text>
      <text x="40" y="252" fontSize="10" fill="var(--text-secondary)">Clássico:</text>
      <rect x="105" y="240" width="400" height="12" rx="3" fill="#6b7280" fillOpacity="0.5" />
      <text x="515" y="252" fontSize="10" fill="#6b7280">O(2^n)</text>
      <text x="40" y="272" fontSize="10" fill="var(--text-secondary)">Quântico:</text>
      <rect x="105" y="260" width="160" height="12" rx="3" fill={color} fillOpacity="0.7" />
      <text x="275" y="272" fontSize="10" fill={color}>O(poly n) — speedup exponencial para n grande</text>
    </svg>
  );
}

function ConcentricRingsSVG() {
  const rings = [
    { r: 20, label: 'Átomo', color: '#f97316' },
    { r: 50, label: 'Molécula', color: '#f97316' },
    { r: 82, label: 'Material', color: '#f97316' },
    { r: 114, label: 'Componente', color: '#f97316' },
    { r: 148, label: 'Sistema', color: '#f97316' },
    { r: 185, label: 'Cidade', color: '#f97316' },
    { r: 224, label: 'Planeta', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 720 500" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Digital Twin of Everything — Escala Hierárquica</text>
      {rings.map((ring, i) => (
        <circle key={i} cx="360" cy="260" r={ring.r} fill="none" stroke={ring.color} strokeWidth={i === 0 ? 0 : 1.5} strokeDasharray={i < 2 ? '0' : '4 3'} fillOpacity="0" />
      ))}
      {rings.map((ring, i) => {
        if (i === 0) {
          return <circle key={`dot-${i}`} cx="360" cy="260" r={ring.r} fill={ring.color} fillOpacity="0.3" />;
        }
        const angle = -90 + i * 20;
        const rad = (angle * Math.PI) / 180;
        const lx = 360 + (ring.r + 10) * Math.cos(rad);
        const ly = 260 + (ring.r + 10) * Math.sin(rad);
        return (
          <g key={`label-${i}`}>
            <line x1={360 + ring.r * Math.cos(rad)} y1={260 + ring.r * Math.sin(rad)} x2={lx} y2={ly} stroke={ring.color} strokeWidth="1" />
            <text x={lx + (Math.cos(rad) > 0 ? 4 : -4)} y={ly + 4} fontSize="11" fontWeight="600" fill={ring.color} textAnchor={Math.cos(rad) > 0 ? 'start' : 'end'}>{ring.label}</text>
          </g>
        );
      })}
      <text x="360" y="258" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">DT</text>
      <text x="360" y="460" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Destination Earth (EU) — €320M para DT do planeta até 2030 | Copernicus + ECMWF</text>
    </svg>
  );
}

function MetaversoIndustrialSVG() {
  return (
    <svg viewBox="0 0 720 260" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Metaverso Industrial — Convergência Física-Digital-Imersiva</text>
      {/* Physical Factory */}
      <rect x="20" y="50" width="185" height="160" rx="8" fill="none" stroke="#6b7280" strokeWidth="1.5" />
      <text x="112" y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">Fábrica Física</text>
      {/* Simple factory icons */}
      <rect x="50" y="90" width="30" height="40" rx="3" fill="#6b7280" fillOpacity="0.3" stroke="#6b7280" strokeWidth="1" />
      <rect x="90" y="100" width="25" height="30" rx="3" fill="#6b7280" fillOpacity="0.3" stroke="#6b7280" strokeWidth="1" />
      <rect x="125" y="85" width="40" height="45" rx="3" fill="#6b7280" fillOpacity="0.3" stroke="#6b7280" strokeWidth="1" />
      <line x1="50" y1="135" x2="205" y2="135" stroke="#6b7280" strokeWidth="1" />
      {/* Worker */}
      <circle cx="112" cy="152" r="8" fill="#6b7280" fillOpacity="0.5" />
      <line x1="112" y1="160" x2="112" y2="180" stroke="#6b7280" strokeWidth="2" />
      <line x1="98" y1="165" x2="126" y2="165" stroke="#6b7280" strokeWidth="2" />
      <text x="112" y="198" textAnchor="middle" fontSize="9" fill="#6b7280">Operadores + Sensores IoT</text>
      {/* DT Middle */}
      <rect x="267" y="50" width="185" height="160" rx="8" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="2" />
      <text x="360" y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Digital Twin</text>
      <rect x="290" y="88" width="30" height="40" rx="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="330" y="98" width="25" height="30" rx="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="365" y="83" width="40" height="45" rx="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
      <line x1="290" y1="133" x2="452" y2="133" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
      <text x="360" y="162" textAnchor="middle" fontSize="9" fill={color}>Modelo em Tempo Real</text>
      <text x="360" y="176" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">NVIDIA Omniverse / Azure DT</text>
      <text x="360" y="198" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">USD + PhysX + AI</text>
      {/* Immersive */}
      <rect x="514" y="50" width="185" height="160" rx="8" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <text x="607" y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f97316">Interface Imersiva</text>
      {/* AR Glasses */}
      <ellipse cx="607" cy="120" rx="40" ry="20" fill="none" stroke="#f97316" strokeWidth="2" />
      <circle cx="590" cy="120" r="14" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <circle cx="624" cy="120" r="14" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <line x1="567" y1="120" x2="550" y2="115" stroke="#f97316" strokeWidth="1.5" />
      <line x1="647" y1="120" x2="664" y2="115" stroke="#f97316" strokeWidth="1.5" />
      <text x="607" y="155" textAnchor="middle" fontSize="9" fill="#f97316">AR / VR / MR Headset</text>
      <text x="607" y="170" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Manutenção Remota</text>
      <text x="607" y="185" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Colaboração Global</text>
      <text x="607" y="198" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Treinamento Imersivo</text>
      {/* Arrows */}
      <path d="M205 125 L265 125" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowG)" fill="none" />
      <path d="M265 115 L205 115" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrowG2)" fill="none" strokeDasharray="4 3" />
      <path d="M452 125 L512 125" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowV)" fill="none" />
      <path d="M512 115 L452 115" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrowV2)" fill="none" strokeDasharray="4 3" />
      <defs>
        <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="arrowG2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="arrowV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="arrowV2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
      </defs>
      <text x="360" y="242" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">BMW Virtual Factory (Munique) — 12.000 robots simulados antes de instalação física</text>
    </svg>
  );
}

function NetworkSlicingSVG() {
  const slices = [
    { label: 'eMBB', sub: 'Enhanced Mobile Broadband', desc: 'Streaming 4K, visualização DT em AR', color: '#f97316', y: 70 },
    { label: 'URLLC', sub: 'Ultra-Reliable Low Latency', desc: 'Controlo DT em tempo real (<1ms)', color: '#f97316', y: 148 },
    { label: 'mMTC', sub: 'Massive Machine Type Comm.', desc: 'Milhões sensores IoT DT', color: '#f97316', y: 226 },
  ];
  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>5G Network Slicing para Digital Twins</text>
      {/* 5G Tower */}
      <polygon points="80,60 100,60 95,270 85,270" fill="#6b7280" fillOpacity="0.4" />
      <line x1="75" y1="90" x2="105" y2="90" stroke="#6b7280" strokeWidth="2" />
      <line x1="70" y1="120" x2="110" y2="120" stroke="#6b7280" strokeWidth="2" />
      <polygon points="78,58 90,40 102,58" fill="#6b7280" fillOpacity="0.6" />
      <text x="90" y="290" textAnchor="middle" fontSize="10" fill="#6b7280">5G NR</text>
      {slices.map((s) => (
        <g key={s.label}>
          <rect x="150" y={s.y} width="440" height="62" rx="6" fill={s.color} fillOpacity="0.1" stroke={s.color} strokeWidth="1.5" />
          <rect x="155" y={s.y + 6} width="70" height="50" rx="4" fill={s.color} fillOpacity="0.25" />
          <text x="190" y={s.y + 26} textAnchor="middle" fontSize="12" fontWeight="800" fill={s.color}>{s.label}</text>
          <text x="190" y={s.y + 42} textAnchor="middle" fontSize="8" fill={s.color}>{s.sub.split(' ').slice(0, 2).join(' ')}</text>
          <text x="238" y={s.y + 22} fontSize="10" fontWeight="600" fill={s.color}>{s.sub}</text>
          <text x="238" y={s.y + 38} fontSize="10" fill="var(--text-secondary)">{s.desc}</text>
          <line x1="140" y1={s.y + 31} x2="150" y2={s.y + 31} stroke={s.color} strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="100" y1="165" x2="140" y2={s.y + 31} stroke={s.color} strokeWidth="1" strokeDasharray="2 2" />
        </g>
      ))}
      {/* Right side — endpoint icons */}
      <rect x="600" y="75" width="100" height="50" rx="6" fill="none" stroke="#f97316" strokeWidth="1" />
      <text x="650" y="98" textAnchor="middle" fontSize="10" fill="#f97316">AR Headset</text>
      <text x="650" y="114" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">100 Mbps+</text>
      <rect x="600" y="153" width="100" height="50" rx="6" fill="none" stroke="#f97316" strokeWidth="1" />
      <text x="650" y="176" textAnchor="middle" fontSize="10" fill="#f97316">DT Controller</text>
      <text x="650" y="192" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">latência 1ms</text>
      <rect x="600" y="231" width="100" height="50" rx="6" fill="none" stroke="#f97316" strokeWidth="1" />
      <text x="650" y="254" textAnchor="middle" fontSize="10" fill="#f97316">IoT Sensors</text>
      <text x="650" y="270" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">1M devices/km2</text>
      {slices.map((s, i) => (
        <line key={i} x1="590" y1={s.y + 31} x2="600" y2={s.y + 31} stroke={s.color} strokeWidth="1.5" />
      ))}
      <text x="360" y="300" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">MEC — Mobile Edge Computing coloca processamento DT a menos de 10ms do ativo</text>
    </svg>
  );
}

function CarbonBarChartSVG() {
  const data = [
    { label: 'Manufatura', pct: 15, color: '#f97316' },
    { label: 'Edifícios', pct: 25, color: '#f97316' },
    { label: 'Transporte', pct: 20, color: '#f97316' },
    { label: 'Rede Elétrica', pct: 18, color: '#f97316' },
    { label: 'Agricultura', pct: 12, color: '#f97316' },
  ];
  const maxPct = 30;
  const barW = 90;
  const gap = 20;
  const chartH = 160;
  const baseY = 220;
  return (
    <svg viewBox="0 0 720 280" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Potencial de Redução de Carbono com Digital Twins (%)</text>
      {data.map((d, i) => {
        const x = 80 + i * (barW + gap);
        const h = (d.pct / maxPct) * chartH;
        return (
          <g key={d.label}>
            <rect x={x} y={baseY - h} width={barW} height={h} rx="4" fill={d.color} fillOpacity="0.75" />
            <text x={x + barW / 2} y={baseY - h - 8} textAnchor="middle" fontSize="13" fontWeight="800" fill={d.color}>-{d.pct}%</text>
            <text x={x + barW / 2} y={baseY + 16} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{d.label}</text>
          </g>
        );
      })}
      <line x1="70" y1={baseY} x2="640" y2={baseY} stroke="var(--text-secondary)" strokeWidth="1.5" />
      {[0, 10, 20, 30].map(pct => {
        const y = baseY - (pct / maxPct) * chartH;
        return (
          <g key={pct}>
            <line x1="70" y1={y} x2="640" y2={y} stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="3 3" />
            <text x="64" y={y + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{pct}%</text>
          </g>
        );
      })}
      <text x="360" y="258" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Fonte: IEA, World Economic Forum — Digital Twin Impact on Net Zero 2023</text>
    </svg>
  );
}

function CognitiveDTSVG() {
  const nodes = [
    { id: 'Perception', x: 200, y: 100, color: '#f97316', sub: 'Dados Sensores, Vídeo, NLP' },
    { id: 'Reasoning', x: 520, y: 100, color: '#f97316', sub: 'Knowledge Graph + LLM' },
    { id: 'Learning', x: 520, y: 220, color: '#f97316', sub: 'RL, Transfer Learning, Ontology' },
    { id: 'Acting', x: 200, y: 220, color: '#f97316', sub: 'Atuadores, Alertas, API' },
  ];
  return (
    <svg viewBox="0 0 720 330" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Cognitive Digital Twin — Arquitetura Neuro-Simbólica</text>
      {/* Loop arrows */}
      <path d="M280 100 L440 100" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrowCB)" />
      <path d="M520 140 L520 180" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrowCV)" />
      <path d="M440 220 L280 220" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrowCO)" />
      <path d="M200 180 L200 140" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrowCG)" />
      <defs>
        <marker id="arrowCB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="arrowCV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="arrowCO" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
        <marker id="arrowCG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" /></marker>
      </defs>
      {nodes.map(n => (
        <g key={n.id}>
          <rect x={n.x - 80} y={n.y - 30} width={160} height={60} rx="10" fill={n.color} fillOpacity="0.12" stroke={n.color} strokeWidth="2" />
          <text x={n.x} y={n.y - 6} textAnchor="middle" fontSize="13" fontWeight="700" fill={n.color}>{n.id}</text>
          <text x={n.x} y={n.y + 12} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{n.sub}</text>
        </g>
      ))}
      {/* Center DT logo */}
      <circle cx="360" cy="160" r="38" fill="rgba(249,115,22,0.08)" stroke={color} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="360" y="156" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Cognitive</text>
      <text x="360" y="172" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>DT Core</text>
      {/* Annotations */}
      <text x="100" y="80" fontSize="9" fill="#f97316" textAnchor="middle">Input</text>
      <text x="630" y="80" fontSize="9" fill="#f97316" textAnchor="middle">Raciocínio</text>
      <text x="640" y="240" fontSize="9" fill="#f97316" textAnchor="middle">Aprendizagem</text>
      <text x="100" y="240" fontSize="9" fill="#f97316" textAnchor="middle">Ação</text>
      <text x="360" y="290" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">NASA DAPHNE (Deep Space) usa CDT para missões sem comunicação terrestre em tempo real</text>
      <text x="360" y="308" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Contexto + Memória + Causalidade — além de simples modelos preditivos</text>
    </svg>
  );
}

function StandardsTimelineSVG() {
  const milestones = [
    { year: 2020, x: 60, label: 'IEC 62832\nIIoT Baseline', color: '#fb923c' },
    { year: 2021, x: 150, label: 'ISO 23247\nManuf. DT', color: '#f97316' },
    { year: 2023, x: 280, label: 'DTDL v3\nAzure DT', color: '#f97316' },
    { year: 2024, x: 400, label: 'EU AI Act\nAAS v3\nIDTA', color: '#f97316' },
    { year: 2025, x: 510, label: 'EU Data Act\nGaia-X DT', color: '#f97316' },
    { year: 2026, x: 620, label: 'IEEE 2806\n(estimado)', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 720 220" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Standards e Regulação — Timeline 2020-2026</text>
      <line x1="40" y1="100" x2="680" y2="100" stroke="var(--text-secondary)" strokeWidth="2" />
      {milestones.map((m) => {
        const lines = m.label.split('\n');
        return (
          <g key={m.year}>
            <circle cx={m.x} cy="100" r="8" fill={m.color} />
            <line x1={m.x} y1="92" x2={m.x} y2="60" stroke={m.color} strokeWidth="1.5" />
            {lines.map((line, li) => (
              <text key={li} x={m.x} y={50 - (lines.length - 1 - li) * 14} textAnchor="middle" fontSize="9" fill={m.color}>{line}</text>
            ))}
            <text x={m.x} y="120" textAnchor="middle" fontSize="10" fontWeight="700" fill={m.color}>{m.year}</text>
          </g>
        );
      })}
      <rect x="40" y="140" width="640" height="60" rx="6" fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
      <text x="360" y="162" textAnchor="middle" fontSize="11" fontWeight="600" fill={color}>Principais Organismos: ISO TC184/SC4 | IEC TC65 | IEEE P2806 | W3C WoT | IDTA | ETSI MEC</text>
      <text x="360" y="182" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Asset Administration Shell (AAS) — standard aberto para identidade e dados de ativos industriais</text>
      <text x="360" y="198" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">EU AI Act classifica DTs autónomos de alto risco (Artigo 6) — auditoria e transparência obrigatórias</text>
    </svg>
  );
}

function RadarChartSVG() {
  const axes = [
    { label: 'IoT/Conectividade', angle: -90 },
    { label: 'Cloud Platforms', angle: -30 },
    { label: 'Simulação', angle: 30 },
    { label: 'ML / IA', angle: 90 },
    { label: 'Domain Knowledge', angle: 150 },
    { label: 'Data Engineering', angle: 210 },
  ];
  const scores = [0.8, 0.75, 0.65, 0.85, 0.7, 0.9];
  const cx = 220, cy = 160, maxR = 110;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const points = axes.map((a, i) => {
    const r = scores[i] * maxR;
    return [cx + r * Math.cos(toRad(a.angle)), cy + r * Math.sin(toRad(a.angle))];
  });
  const gridPoints = (frac) => axes.map(a => [
    cx + frac * maxR * Math.cos(toRad(a.angle)),
    cy + frac * maxR * Math.sin(toRad(a.angle)),
  ]).map(p => p.join(',')).join(' ');
  const poly = points.map(p => p.join(',')).join(' ');
  return (
    <svg viewBox="0 0 720 320" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Perfil de Skills — Digital Twin Engineer</text>
      {[0.25, 0.5, 0.75, 1.0].map(f => (
        <polygon key={f} points={gridPoints(f)} fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
      ))}
      {axes.map((a, i) => {
        const x2 = cx + maxR * Math.cos(toRad(a.angle));
        const y2 = cy + maxR * Math.sin(toRad(a.angle));
        const lx = cx + (maxR + 18) * Math.cos(toRad(a.angle));
        const ly = cy + (maxR + 18) * Math.sin(toRad(a.angle));
        return (
          <g key={a.label}>
            <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={lx} y={ly + 4} textAnchor="middle" fontSize="10" fill="var(--text-secondary)">{a.label}</text>
          </g>
        );
      })}
      <polygon points={poly} fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
      {points.map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="4" fill={color} />
      ))}
      {/* Job roles table */}
      <rect x="440" y="40" width="270" height="240" rx="8" fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.20)" strokeWidth="1" />
      <text x="575" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Perfis Profissionais</text>
      {[
        ['DT Engineer', '€55-80k'],
        ['DT Architect', '€75-110k'],
        ['DT Data Scientist', '€65-95k'],
        ['DT Product Manager', '€70-100k'],
        ['DT Simulation Eng.', '€60-90k'],
      ].map(([role, salary], i) => (
        <g key={role}>
          <text x="455" y={90 + i * 36} fontSize="10" fontWeight="600" fill="var(--text-primary)">{role}</text>
          <text x="455" y={106 + i * 36} fontSize="10" fill={color}>{salary} / ano (EU)</text>
        </g>
      ))}
      <text x="360" y="308" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Certificações: AWS IoT, Azure DT, Siemens MindSphere, PTC ThingWorx, Coursera DT Specialization</text>
    </svg>
  );
}

function KnowledgeMapSVG() {
  const modules = [
    { id: 'M1', label: 'DT Fundamentos', x: 360, y: 80, color: '#f97316' },
    { id: 'M2', label: 'IoT / Arquitetura', x: 560, y: 140, color: '#f97316' },
    { id: 'M3', label: 'Modelação', x: 600, y: 240, color: '#f97316' },
    { id: 'M4', label: 'Manufatura', x: 520, y: 340, color: '#f97316' },
    { id: 'M5', label: 'Plataformas', x: 360, y: 390, color: '#f97316' },
    { id: 'M6', label: 'Cidades / Energia', x: 200, y: 340, color: '#f97316' },
    { id: 'M7', label: 'Saúde', x: 120, y: 240, color: '#f97316' },
    { id: 'M8', label: 'ML / IA', x: 160, y: 140, color: '#f97316' },
    { id: 'M9', label: 'Futuro', x: 360, y: 240, color: '#f97316' },
  ];
  const edges = [
    ['M1', 'M2', 'conecta'], ['M1', 'M8', 'alimenta'], ['M2', 'M3', 'habilita'],
    ['M3', 'M4', 'simula'], ['M4', 'M5', 'usa'], ['M5', 'M6', 'serve'],
    ['M6', 'M7', 'extende'], ['M7', 'M8', 'usa'], ['M8', 'M9', 'potencia'],
    ['M1', 'M9', 'evolui'], ['M5', 'M9', 'plataforma'], ['M3', 'M9', 'modelos'],
  ];
  const getModule = (id) => modules.find(m => m.id === id);
  return (
    <svg viewBox="0 0 720 480" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Mapa de Conhecimento — Curso Completo de Digital Twins</text>
      <defs>
        <marker id="arrowMap" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="var(--text-secondary)" fillOpacity="0.5" />
        </marker>
      </defs>
      {edges.map(([from, to, label]) => {
        const f = getModule(from);
        const t = getModule(to);
        const mx = (f.x + t.x) / 2;
        const my = (f.y + t.y) / 2;
        return (
          <g key={`${from}-${to}`}>
            <line x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrowMap)" />
            <text x={mx} y={my - 4} textAnchor="middle" fontSize="8" fill="var(--text-secondary)" fillOpacity="0.7">{label}</text>
          </g>
        );
      })}
      {modules.map(m => {
        const r = m.id === 'M9' ? 36 : 30;
        return (
          <g key={m.id}>
            <circle cx={m.x} cy={m.y} r={r} fill="var(--bg-secondary)" />
            <circle cx={m.x} cy={m.y} r={r} fill={m.color} fillOpacity="0.15" stroke={m.color} strokeWidth={m.id === 'M9' ? 2.5 : 1.5} />
            <text x={m.x} y={m.y - 5} textAnchor="middle" fontSize="10" fontWeight="700" fill={m.color}>{m.id}</text>
            <text x={m.x} y={m.y + 8} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{m.label}</text>
          </g>
        );
      })}
      <text x="360" y="458" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Todos os módulos convergem para aplicações do mundo real — do átomo ao planeta</text>
    </svg>
  );
}

export default function DT9() {
  return (
    <div style={S.page}>
      <Link to="/digital-twins" style={S.back}><ArrowLeft size={16} /> Voltar a Digital Twins</Link>

      <div style={S.tag}>MÓDULO 09</div>
      <h1 style={S.h1}>Futuro &amp; Tendências em Digital Twins</h1>
      <p style={S.lead}>
        O ecossistema de Digital Twins está em rápida evolução — de ferramentas de monitoramento para sistemas cognitivos autónomos que percebem, raciocinam e atuam. Neste módulo final exploramos as forças tecnológicas, económicas e regulatórias que vão redefinir o campo nos próximos 5-10 anos, e como posicionar a sua carreira nessa transformação.
      </p>

      {/* SECTION 1 */}
      <section style={S.section}>
        <h2 style={S.h2}>1. O Mercado 2024-2030</h2>
        <MarketBarChartSVG />
        <h3 style={S.h3}>Tamanho e Crescimento</h3>
        <p style={S.p}>
          O mercado global de Digital Twins foi avaliado em aproximadamente $11 mil milhões em 2023 e projeta-se atingir $73 mil milhões até 2030, crescendo a um CAGR (taxa de crescimento anual composta) de 31%. Este crescimento é impulsionado pela convergência de IoT de baixo custo, computação em nuvem elástica, e algoritmos de ML cada vez mais acessíveis.
        </p>
        <div style={S.highlight}>
          <strong>Gartner Hype Cycle 2024:</strong> Digital Twins encontram-se no "Slope of Enlightenment" — a fase em que as tecnologias emergem do desencanto e começam a gerar valor real. Estimativa: 2-5 anos até "Plateau of Productivity" generalizado.
        </div>
        <h3 style={S.h3}>Drivers Principais do Mercado</h3>
        <ul style={{ ...S.p, paddingLeft: '1.4rem' }}>
          <li><strong>Industria 4.0 e Manufactura Inteligente:</strong> Exigência de zero downtime e OEE acima de 90% obriga à simulação contínua de ativos produtivos.</li>
          <li><strong>Regulação ESG e Net Zero:</strong> Rastreamento de emissões Scope 1/2/3 em tempo real exige modelação digital de cadeias de valor inteiras.</li>
          <li><strong>Urbanização Acelerada:</strong> 68% da população mundial estará em cidades em 2050 — gestão inteligente requer DTs de infraestrutura urbana.</li>
          <li><strong>Saúde Personalizada:</strong> O "human digital twin" emerge como paradigma central de medicina de precisão, com FDA já a emitir orientações.</li>
          <li><strong>Democratização das Plataformas:</strong> Azure Digital Twins, AWS IoT TwinMaker, e Google Cloud Digital Twins reduziram o custo de entrada em 80% desde 2020.</li>
        </ul>
        <div style={S.note}>
          Nota: Os números de mercado variam conforme a definição de "Digital Twin" usada pelos analistas. A McKinsey (2023) usa uma definição mais restrita e estima $4-15B; a Grand View Research inclui simulação industrial e IoT correlata, chegando a $137B até 2030.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Setor</th>
              <th style={S.th}>Quota Mercado 2024</th>
              <th style={S.th}>CAGR Estimado</th>
              <th style={S.th}>Caso de Uso Dominante</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Manufatura', '38%', '29%', 'Manutenção Preditiva, OEE'],
              ['Saúde', '21%', '35%', 'Human DT, Cirurgia Planeada'],
              ['Energia e Utilities', '18%', '33%', 'Grid Digital Twin, Turbinas'],
              ['Cidades Inteligentes', '13%', '38%', 'BIM + CityGML + Tráfego'],
              ['Outros', '10%', '25%', 'Aviação, Defesa, Logística'],
            ].map(([s, q, c, u]) => (
              <tr key={s}>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{q}</td>
                <td style={S.td}>{c}</td>
                <td style={S.td}>{u}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <section style={S.section}>
        <h2 style={S.h2}>2. Autonomous Digital Twins</h2>
        <AutonomyLadderSVG />
        <h3 style={S.h3}>Da Monitorização à Ação Autónoma</h3>
        <p style={S.p}>
          A evolução dos Digital Twins segue uma escada de quatro degraus. Os DTs atuais encontram-se maioritariamente nos níveis Monitor e Analyze — recolhem dados e geram alertas, mas exigem decisão humana para qualquer ação. A fronteira do campo está nos níveis Decide e Act, onde o gémeo digital toma decisões e atua no mundo físico sem intervenção humana direta.
        </p>
        <div style={S.highlight}>
          <strong>Boeing Maintenance DT:</strong> Boeing implementou um DT para as frotas 737 MAX que analisa mais de 600 parâmetros de voo em tempo real e sugere automaticamente janelas de manutenção ao MRO (Maintenance, Repair &amp; Overhaul). Estimativa: redução de 25% em atrasos por manutenção não planeada.
        </div>
        <h3 style={S.h3}>Self-Healing Systems</h3>
        <p style={S.p}>
          Sistemas auto-regenerativos combinam o DT com orquestração de infraestrutura (Kubernetes, Ansible) para detetar anomalias e remediar automaticamente — reiniciando serviços, redirecionando tráfego, ou ajustando parâmetros de processo sem intervenção humana. Exemplos incluem redes de telecomunicações 5G (Nokia AVA), plantas de tratamento de água (Veolia HydroSight), e data centers (Google DeepMind).
        </p>
        <h3 style={S.h3}>Closed-Loop Control Sem Humanos</h3>
        <p style={S.p}>
          O closed-loop control total significa que o DT fecha o ciclo: percebe o estado físico via sensores, simula consequências de ações alternativas, seleciona a ação ótima, e envia comandos de volta ao sistema físico — tudo em milissegundos. Esta capacidade é crítica em contextos onde a velocidade de reação humana é insuficiente: reator nuclear, rede elétrica, veículo autónomo.
        </p>
        <div style={S.note}>
          Kill switches e safety constraints são obrigatórios: qualquer DT autónomo deve ter mecanismos de interrupção manual de emergência, limites físicos parametrizados, e alertas obrigatórios antes de ações de alto impacto. O EU AI Act (2024) classifica estes sistemas como "high-risk AI".
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <section style={S.section}>
        <h2 style={S.h2}>3. Generative Digital Twins</h2>
        <GenerativeDTSVG />
        <h3 style={S.h3}>LLMs como Motor de Síntese de Cenários</h3>
        <p style={S.p}>
          Uma das tendências mais disruptivas de 2024-2025 é a integração de Large Language Models (LLMs) com Digital Twins. O padrão emergente — Generative DT — usa o LLM como interface semântica para o grafo de conhecimento do DT, permitindo que engenheiros e operadores gerem cenários complexos em linguagem natural.
        </p>
        <h3 style={S.h3}>Synthetic Failure Data para Eventos Raros</h3>
        <p style={S.p}>
          O maior desafio em manutenção preditiva é a escassez de dados de falha real — por definição, falhas raras acontecem raramente. O Generative DT resolve este problema: usando o modelo físico do DT para validar a plausibilidade física, e o LLM para diversificar e enriquecer cenários, gera datasets sintéticos de falhas raras que respeitam as leis da física do ativo.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Plataforma</th>
              <th style={S.th}>Tecnologia LLM</th>
              <th style={S.th}>Integração DT</th>
              <th style={S.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Microsoft Copilot for Azure DT', 'GPT-4o', 'Azure Digital Twins + ADX', 'GA 2024'],
              ['NVIDIA Omniverse + AI', 'LLaMA 3 / NIM', 'USD Scene Graph', 'Preview'],
              ['Siemens Industrial Copilot', 'GPT-4 (Azure)', 'MindSphere + Teamcenter', 'GA 2024'],
              ['GE Vernova DT + GenAI', 'Custom LLM', 'Predix Time Series', 'Beta'],
              ['Ansys SimAI', 'Physics-aware LLM', 'Fluent + Mechanical DT', 'GA 2024'],
            ].map(([p, l, i, s]) => (
              <tr key={p}>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{l}</td>
                <td style={S.td}>{i}</td>
                <td style={S.td}>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Implicação crítica: dados sintéticos de alta qualidade permitem treinar modelos de ML preditivo mesmo para equipamentos novos onde não há histórico de falhas — bootstrapping de modelos de zero. Esta é a promessa central do Generative DT para a indústria.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <section style={S.section}>
        <h2 style={S.h2}>4. Quantum Computing para Digital Twins</h2>
        <QuantumCircuitSVG />
        <h3 style={S.h3}>Onde o Quantum Impacta Digital Twins</h3>
        <p style={S.p}>
          A computação quântica não vai substituir DTs clássicos — vai potenciar casos de uso específicos onde os computadores clássicos atingem limites intratáveis. Os dois grandes domínios são simulação quântica de materiais (VQE — Variational Quantum Eigensolver) e otimização combinatória (QAOA — Quantum Approximate Optimization Algorithm).
        </p>
        <div style={S.highlight}>
          <strong>VQE para Simulação de Materiais:</strong> Simular o comportamento eletrônico de uma molécula com N eletrões requer 2^N estados — intratável para N maior que ~50 num computador clássico. Um computador quântico com N qubits representa naturalmente esses estados. Aplicação direta: DT de baterias de nova geração (simulação de interfaces catódicas), catálise química, semicondutores.
        </div>
        <h3 style={S.h3}>Quantum Annealing para Scheduling</h3>
        <p style={S.p}>
          Problemas de scheduling em manufatura (otimização de ordens de produção, routing de AGVs, planeamento de manutenção) são NP-difíceis — crescem exponencialmente com o número de variáveis. D-Wave Quantum Annealers e algoritmos QAOA em hardware de gate (IBM, Google) mostram vantagem quântica em instâncias de mais de 1000 variáveis, relevante para DTs de fábricas complexas.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Algoritmo</th>
              <th style={S.th}>Aplicação DT</th>
              <th style={S.th}>Hardware</th>
              <th style={S.th}>Horizonte</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['VQE', 'Simulação de materiais, baterias', 'IBM Eagle / Heron (127+ qubits)', '5-8 anos'],
              ['QAOA', 'Scheduling, routing, otimização', 'D-Wave Advantage (5000+ qubits)', '3-5 anos'],
              ['QML', 'Classificação anomalias em DT', 'Google Sycamore, IonQ', '7-10 anos'],
              ['Quantum Sim.', 'CFD quântico (ainda teórico)', 'Fault-tolerant (futuro)', '10-15 anos'],
            ].map(([a, ap, h, t]) => (
              <tr key={a}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{ap}</td>
                <td style={S.td}>{h}</td>
                <td style={S.td}>{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Perspetiva pragmática: IBM projeta 100.000 qubits lógicos com correção de erros para 2033. Até lá, o paradigma "Quantum-Classical Hybrid" — onde um DT clássico orquestra chamadas a subrotinas quânticas para subproblemas específicos — é o caminho mais realista.
        </div>
      </section>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <section style={S.section}>
        <h2 style={S.h2}>5. Digital Twin of Everything</h2>
        <ConcentricRingsSVG />
        <h3 style={S.h3}>Da Escala Atómica ao Planeta</h3>
        <p style={S.p}>
          A visão de "Digital Twin of Everything" propõe uma hierarquia contínua de gémeos digitais — do nível subatómico (simulações DFT de materiais) até ao nível planetário (modelos climáticos em tempo real). Cada nível alimenta o superior com dados e modelos validados, criando uma cadeia de fidelidade sem precedentes.
        </p>
        <div style={S.highlight}>
          <strong>Destination Earth (DestinE):</strong> Iniciativa da União Europeia com orçamento de €320 milhões para construir um DT de alta fidelidade do planeta Terra até 2030. Integra dados Copernicus (satélites ESA), modelos ECMWF (previsão meteorológica), e infraestrutura de computação EuroHPC. Objetivo: simulações climáticas com resolução de 1km, 10x superior ao estado da arte atual.
        </div>
        <h3 style={S.h3}>Earth System Model como DT Planetário</h3>
        <p style={S.p}>
          Os Earth System Models (ESMs) modernos — como o ICON da DWD/MPI ou o EC-Earth — modelam a atmosfera, oceano, criosfera, e biosfera de forma acoplada. A diferença entre um ESM clássico e um "Earth DT" é a atualização contínua com dados observacionais em tempo quase-real e a capacidade de exploração interativa de cenários "what-if" por decisores políticos e empresas.
        </p>
        <h3 style={S.h3}>Ecosystem Digital Twins e Copernicus</h3>
        <p style={S.p}>
          O programa Copernicus da ESA fornece 16 TB/dia de dados de observação da Terra — temperatura superficial, clorofila oceânica, cobertura florestal, etc. A integração destes dados com modelos de ecossistemas cria "Ecosystem DTs" capazes de prever colapsos de biodiversidade, avaliar stocks de carbono florestal, e otimizar práticas agrícolas à escala continental. Projetos como ESDL (Earth System Data Lab) da ESA estão na fronteira desta integração.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 6 */}
      <section style={S.section}>
        <h2 style={S.h2}>6. Metaverso Industrial</h2>
        <MetaversoIndustrialSVG />
        <h3 style={S.h3}>NVIDIA Omniverse como Backbone</h3>
        <p style={S.p}>
          O NVIDIA Omniverse é a plataforma que mais concretiza a visão do metaverso industrial. Baseado no formato Universal Scene Description (USD) da Pixar, permite que diferentes ferramentas de CAD, simulação, e visualização colaborem em tempo real sobre o mesmo modelo 3D. O physics engine PhysX garante que o comportamento simulado é fisicamente correto.
        </p>
        <div style={S.highlight}>
          <strong>BMW Virtual Factory (Munich):</strong> A BMW usa o Omniverse para planear e simular a sua nova fábrica de Munich antes de qualquer construção física. Mais de 12.000 robots, linhas de montagem, e sistemas logísticos foram simulados durante 18 meses, resultando em 30% menos retrabalho de layout e 25% de aumento de produtividade projetado vs. fábricas anteriores.
        </div>
        <h3 style={S.h3}>Manutenção Remota Colaborativa</h3>
        <p style={S.p}>
          Técnicos em diferentes países podem inspecionar o mesmo ativo via AR — um especialista em Frankfurt vê exatamente o que o técnico em campo no Brasil está a ver, e pode annotate o campo visual em tempo real. O DT fornece contexto adicional: histórico de intervenções, manuais, dados de sensores em overlay AR. Empresas como PTC (Vuforia), Microsoft (Dynamics 365 Remote Assist), e Scope AR implementam isto em larga escala.
        </p>
        <h3 style={S.h3}>5G como Habilitador</h3>
        <p style={S.p}>
          A promessa do metaverso industrial depende criticamente de conectividade de baixa latência. O 5G com URLLC (Ultra-Reliable Low Latency Communication) oferece latências abaixo de 1ms e fiabilidade de 99.9999% — condições necessárias para telepresença háptica (o técnico "sente" o torque ao apertar um parafuso remotamente) e controlo de robots via DT sem lag percetível.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 7 */}
      <section style={S.section}>
        <h2 style={S.h2}>7. 5G e Edge AI para Digital Twins</h2>
        <NetworkSlicingSVG />
        <h3 style={S.h3}>Network Slicing e QoS Garantido</h3>
        <p style={S.p}>
          O 5G introduz network slicing — a capacidade de dividir uma rede física em múltiplas redes virtuais independentes, cada uma com garantias de QoS (Quality of Service) diferentes. Para Digital Twins, isto é revolucionário: a mesma antena 5G pode simultaneamente servir streaming de vídeo 4K para visualização AR, controlo de ultra-baixa latência de atuadores industriais, e telemetria massiva de sensores IoT — sem interferência entre casos de uso.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso de Uso DT</th>
              <th style={S.th}>Latência Req.</th>
              <th style={S.th}>Banda Req.</th>
              <th style={S.th}>Slice 5G</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Controlo robot via DT', '< 1ms', '1 Mbps', 'URLLC'],
              ['Visualização AR do DT', '< 20ms', '> 50 Mbps', 'eMBB'],
              ['Telemetria sensores IoT', '< 100ms', '< 100 kbps/sensor', 'mMTC'],
              ['Video inspeção visual', '< 50ms', '> 20 Mbps', 'eMBB'],
              ['Sync DT para nuvem', '< 500ms', 'variável', 'eMBB'],
            ].map(([u, l, b, s]) => (
              <tr key={u}>
                <td style={S.td}>{u}</td>
                <td style={S.td}>{l}</td>
                <td style={S.td}>{b}</td>
                <td style={S.td}>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Mobile Edge Computing (MEC)</h3>
        <p style={S.p}>
          Mobile Edge Computing move capacidade de processamento para o edge da rede — dentro ou próximo da fábrica — reduzindo a latência de round-trip para a nuvem de ~50ms para ~1-5ms. Para DTs industriais, isto significa que o processamento de inferência ML e a lógica de decisão do DT podem residir localmente, garantindo operação mesmo com falhas de conectividade WAN e cumprindo requisitos de soberania de dados (dados sensíveis nunca saem da fábrica).
        </p>
        <h3 style={S.h3}>5G Privado em Fábricas</h3>
        <p style={S.p}>
          O 5G privado (campus network) permite às empresas implementar a sua própria infraestrutura 5G controlada, sem partilha com operadoras públicas. Empresas como Bosch, BASF, e Volkswagen já implementaram redes 5G privadas nas suas fábricas, combinadas com MEC e DTs locais para controlo de processos de alta precisão.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 8 */}
      <section style={S.section}>
        <h2 style={S.h2}>8. Digital Twins e Sustentabilidade</h2>
        <CarbonBarChartSVG />
        <h3 style={S.h3}>Potencial de Redução de Emissões</h3>
        <p style={S.p}>
          O World Economic Forum estima que a adoção generalizada de Digital Twins poderia reduzir as emissões globais de CO2 em 7-10 gigatoneladas por ano até 2030 — equivalente a eliminar as emissões de 1.5 mil milhões de carros. Este potencial decorre de otimização de consumo energético, redução de desperdício, e aceleração da transição para fontes renováveis.
        </p>
        <div style={S.highlight}>
          <strong>Tracking Scope 1/2/3 em Tempo Real:</strong> Os DTs de cadeia de valor permitem rastrear emissões de carbono em cada etapa — desde extração de matéria-prima (Scope 3 upstream) até uso do produto pelo consumidor (Scope 3 downstream). Empresas como Siemens e SAP integram DTs de produto com plataformas de carbon accounting (CarbonChain, Persefoni) para reportes automatizados.
        </div>
        <h3 style={S.h3}>Passaporte Digital de Material (Circular Economy)</h3>
        <p style={S.p}>
          A regulação europeia (EU Battery Regulation 2023, EU Ecodesign for Sustainable Products Regulation) exige que produtos tenham um "passaporte digital" que rastreie composição de materiais, origem, e condições de reciclagem ao longo de todo o ciclo de vida. O Digital Twin é a infraestrutura natural para este passaporte — o DT do produto mantém a história completa desde a fabrica até ao fim de vida.
        </p>
        <h3 style={S.h3}>Alinhamento com EU Taxonomy</h3>
        <p style={S.p}>
          A EU Taxonomy para Finanças Sustentáveis exige que empresas comprovem que as suas atividades contribuem substancialmente para objetivos climáticos. DTs que monitorizam intensidade energética, emissões específicas, e eficiência de recursos fornecem os dados auditáveis necessários para conformidade com a taxonomia — e desbloqueiam acesso a financiamento verde mais barato.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Iniciativa</th>
              <th style={S.th}>Tipo DT</th>
              <th style={S.th}>Impacto Reportado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Siemens EnergyManager DT', 'Building/Plant DT', '-23% consumo energético em 300 plantas'],
              ['Microsoft Campus DT (Redmond)', 'Smart Building DT', '-46% energia, carbono neutro antecipado'],
              ['National Grid DT (UK)', 'Energy Grid DT', '+12% integração renovável, -8% curtailment'],
              ['GreenStar Farms DT', 'Agriculture DT', '-30% água, -15% fertilizante'],
              ['Maersk Vessel DT', 'Maritime DT', '-11% consumo combustível por viagem'],
            ].map(([i, t, im]) => (
              <tr key={i}>
                <td style={S.td}>{i}</td>
                <td style={S.td}>{t}</td>
                <td style={S.td}>{im}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      {/* SECTION 9 */}
      <section style={S.section}>
        <h2 style={S.h2}>9. Cognitive Digital Twins</h2>
        <CognitiveDTSVG />
        <h3 style={S.h3}>Neuro-Simbólica: Combinando Conhecimento e Dados</h3>
        <p style={S.p}>
          Os Cognitive Digital Twins (CDTs) representam a próxima geração de DTs — sistemas que não apenas modelam o comportamento físico, mas raciocinam sobre ele usando uma combinação de lógica simbólica (ontologias, regras de domínio) e aprendizagem estatística (deep learning, reinforcement learning). Esta abordagem neuro-simbólica supera as limitações de cada paradigma isolado.
        </p>
        <div style={S.highlight}>
          <strong>NASA DAPHNE — Deep Space CDT:</strong> Para missões a Marte e além, onde latências de comunicação com a Terra chegam a 24 minutos, os sistemas espaciais precisam de tomar decisões autonomamente. O projeto DAPHNE da NASA usa um CDT que mantém um modelo de conhecimento do spacecraft, aplica raciocínio causal sobre anomalias, e decide ações de remediação sem contacto com a Terra.
        </div>
        <h3 style={S.h3}>Knowledge Graph como Espinha Dorsal</h3>
        <p style={S.p}>
          A componente simbólica do CDT tipicamente assume a forma de um Knowledge Graph (grafo de conhecimento) que codifica:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.4rem' }}>
          <li>Ontologias de domínio (IEC CIM para energia, MIMOSA para manutenção, HL7 FHIR para saúde)</li>
          <li>Relações causa-efeito entre variáveis do sistema</li>
          <li>Regras de negócio e constraints operacionais</li>
          <li>Histórico de decisões e outcomes (para aprendizagem)</li>
          <li>Contexto situacional (estado do ambiente, missão corrente, recursos disponíveis)</li>
        </ul>
        <h3 style={S.h3}>LLMs como Interface do Knowledge Graph</h3>
        <p style={S.p}>
          A integração de LLMs com o Knowledge Graph do CDT cria uma interface de linguagem natural poderosa: o LLM traduz perguntas em consultas SPARQL/Cypher ao grafo, interpreta os resultados, e responde em linguagem natural. Mais avançado: o LLM pode gerar hipóteses causais que são validadas pelo modelo físico do DT — um ciclo de raciocínio científico assistido por IA.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 10 */}
      <section style={S.section}>
        <h2 style={S.h2}>10. Standards e Regulação Emergentes</h2>
        <StandardsTimelineSVG />
        <h3 style={S.h3}>Landscape de Standards em 2024</h3>
        <p style={S.p}>
          A proliferação de plataformas proprietárias de Digital Twins (Azure DT, AWS TwinMaker, Siemens MindSphere, PTC ThingWorx) cria fragmentação e lock-in. O ecossistema de standards responde com iniciativas de interoperabilidade que visam criar "DTs que falem a mesma língua" independentemente da plataforma subjacente.
        </p>
        <div style={S.highlight}>
          <strong>Asset Administration Shell (AAS):</strong> Desenvolvido pela IDTA (Industrial Digital Twin Association, com membros como BASF, Bosch, SAP, Siemens), o AAS é um standard aberto que define como qualquer ativo industrial deve expor a sua identidade, dados, e capacidades de forma interoperável. A versão 3.0 (2024) inclui suporte para submodelos de segurança funcional, sustentabilidade, e ciclo de vida.
        </div>
        <h3 style={S.h3}>ISO 23247 — Manufatura Digital Twin</h3>
        <p style={S.p}>
          O standard ISO 23247 (2021-2023) define uma framework de referência para DTs em manufatura, incluindo: arquitetura de 4 entidades (Physical Entity, Digital Twin Entity, Cross-Entity Functions, User Entity), requisitos de interoperabilidade, e guidelines de implementação. É o ponto de partida obrigatório para qualquer projeto DT em contexto industrial regulado.
        </p>
        <h3 style={S.h3}>EU AI Act e Digital Twins</h3>
        <p style={S.p}>
          O EU AI Act (2024), em vigor a partir de 2026, classifica sistemas de IA por nível de risco. DTs autónomos que controlam infraestrutura crítica (energia, água, transportes) ou tomam decisões sobre pessoas (saúde, emprego) são classificados como "High Risk" — sujeitos a avaliação de conformidade obrigatória, registo num banco de dados europeu, e transparência sobre dados de treino e capacidades do sistema.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Requisito EU AI Act</th>
              <th style={S.th}>Impacto para DTs</th>
              <th style={S.th}>Prazo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Risk assessment obrigatório', 'Classificar DT por nível de risco', '2025'],
              ['Transparência de dados de treino', 'Documentar datasets ML usados no DT', '2026'],
              ['Human oversight', 'Kill switches e supervisão humana documentada', '2026'],
              ['Robustness testing', 'Testes de adversarial e edge cases', '2026'],
              ['Registo na EU database', 'High-risk DTs devem ser registados', '2026'],
            ].map(([r, i, p]) => (
              <tr key={r}>
                <td style={S.td}>{r}</td>
                <td style={S.td}>{i}</td>
                <td style={S.td}>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Regulatory Sandbox e IDTA</h3>
        <p style={S.p}>
          Vários países europeus (Alemanha, Países Baixos, Espanha) oferecem "regulatory sandboxes" para projetos DT inovadores — ambientes controlados onde empresas podem testar DTs autónomos sem cumprir todos os requisitos regulatórios, em troca de partilha de dados com reguladores. A IDTA coordena grupos de trabalho em segurança funcional, interoperabilidade semântica, e governança de dados para DTs federados.
        </p>
      </section>

      <hr style={S.divider} />

      {/* SECTION 11 */}
      <section style={S.section}>
        <h2 style={S.h2}>11. Carreira e Skills em Digital Twins</h2>
        <RadarChartSVG />
        <h3 style={S.h3}>O Perfil T-Shaped do DT Engineer</h3>
        <p style={S.p}>
          O profissional de Digital Twins bem-sucedido tem um perfil "T-shaped": profundidade numa área técnica (simulação física, ML, IoT, ou cloud) e amplitude suficiente para integrar as restantes. Empresas valorizam quem compreende tanto o ativo físico (o domínio industrial) quanto as tecnologias digitais que o modelam.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Perfil</th>
              <th style={S.th}>Foco Principal</th>
              <th style={S.th}>Stack Típico</th>
              <th style={S.th}>Salário EU (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['DT Engineer', 'Implementação e integração', 'Python, DTDL, IoT Hub, InfluxDB', '€55-80k'],
              ['DT Architect', 'Design de sistemas DT', 'AAS, Azure/AWS, Kafka, ontologias', '€75-110k'],
              ['DT Data Scientist', 'ML e analytics sobre DT', 'Python, TensorFlow, SQL, Grafana', '€65-95k'],
              ['DT Product Manager', 'Roadmap e estratégia DT', 'Business cases, OKRs, stakeholders', '€70-100k'],
              ['DT Simulation Engineer', 'Modelação física e FEA/CFD', 'ANSYS, COMSOL, OpenFOAM, Modelica', '€60-90k'],
            ].map(([p, f, s, sal]) => (
              <tr key={p}>
                <td style={S.td}>{p}</td>
                <td style={S.td}>{f}</td>
                <td style={S.td}>{s}</td>
                <td style={S.td}>{sal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Learning Path Recomendado</h3>
        <p style={S.p}>
          Para alguém que parte de zero, o caminho sugerido é:
        </p>
        <h3 style={S.h3}>Certificações Relevantes (2024)</h3>
        <ul style={{ ...S.p, paddingLeft: '1.4rem' }}>
          <li><strong>Microsoft Azure IoT Developer Specialty (AZ-220):</strong> Cobre IoT Hub, DPS, e fundamentos de Azure DT</li>
          <li><strong>AWS IoT Core Specialty:</strong> Arquitetura IoT e TwinMaker na AWS</li>
          <li><strong>Coursera Digital Twin Specialization (Univ. Michigan):</strong> 4 cursos cobrindo fundamentos, simulação, ML e deployment</li>
          <li><strong>PTC ThingWorx Certified Developer:</strong> Plataforma industrial líder em manufatura</li>
          <li><strong>Siemens MindSphere Application Developer:</strong> Ecossistema industrial Siemens</li>
        </ul>
      </section>

      <hr style={S.divider} />

      {/* SECTION 12 */}
      <section style={S.section}>
        <h2 style={S.h2}>12. Síntese do Módulo</h2>
        <KnowledgeMapSVG />
        <h3 style={S.h3}>O Que Aprendemos — 9 Módulos em Perspetiva</h3>
        <p style={S.p}>
          Este curso percorreu o ecossistema de Digital Twins desde os fundamentos conceituais até às fronteiras do estado da arte. Cada módulo construiu sobre os anteriores, criando uma visão integrada de como DTs transformam indústrias:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Módulo</th>
              <th style={S.th}>Tema</th>
              <th style={S.th}>Conceito Chave</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['01', 'Fundamentos de DT', 'Tríade físico-virtual-conexão; tipos de DT'],
              ['02', 'IoT e Arquitetura', 'Sensores, MQTT, edge-cloud pipeline'],
              ['03', 'Modelação e Simulação', 'FEM, CFD, Modelica, gémeos de alta fidelidade'],
              ['04', 'DTs em Manufatura', 'OEE, predictive maintenance, linha de produção'],
              ['05', 'Plataformas e Standards', 'Azure DT, AAS, DTDL, Eclipse Ditto'],
              ['06', 'Cidades e Energia', 'CityGML, BIM, smart grid, gestão urbana'],
              ['07', 'Saúde e Human DT', 'Órgão DT, cirurgia planeada, ensaios clínicos'],
              ['08', 'ML e IA em DTs', 'Anomaly detection, RUL, transfer learning'],
              ['09', 'Futuro e Tendências', 'Autonomia, GenAI, quantum, regulação'],
            ].map(([m, t, c]) => (
              <tr key={m}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                <td style={S.td}>{t}</td>
                <td style={S.td}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={S.h3}>Self-Assessment Checklist</h3>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 700 }}>Antes de avançar para projetos profissionais, verifique:</p>
          {[
            'Consigo explicar a diferença entre DT, simulação, e shadow model a um não-técnico',
            'Sei implementar um pipeline MQTT → InfluxDB → Grafana para dados de sensores reais',
            'Compreendo quando usar FEM, CFD, ou ML para modelar um ativo físico',
            'Conheço pelo menos uma plataforma DT cloud (Azure, AWS, ou Siemens) ao nível de projeto piloto',
            'Consigo calcular ROI de um projeto DT e apresentar a caso de negócio',
            'Sei identificar riscos regulatórios (EU AI Act, GDPR) para um projeto DT',
            'Tenho pelo menos um projeto DT no portfolio com código público no GitHub',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span style={{ color, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
        <h3 style={S.h3}>Open Source DT Stack para Projetos</h3>
        <h3 style={S.h3}>3 Ideias de Projetos Portfolio</h3>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {[
            {
              title: '1. DT de Painel Solar Residencial',
              desc: 'Simular degradação de painéis fotovoltaicos ao longo do tempo, comparar produção real vs. modelo, e prever quando a eficiência cai abaixo de 80% do nominal.',
              stack: 'ESP32 + MQTT + InfluxDB + Ditto + Grafana + Python scikit-learn',
              dificulty: 'Iniciante',
            },
            {
              title: '2. DT de Edifício Inteligente',
              desc: 'Modelar consumo energético de um edifício (HVAC, iluminação, elevadores), otimizar setpoints em tempo real com RL, e simular impacto de diferentes cenários climáticos.',
              stack: 'Azure IoT Hub + Azure DT + TimescaleDB + Stable-Baselines3 + Streamlit',
              dificulty: 'Intermédio',
            },
            {
              title: '3. DT de Linha de Produção',
              desc: 'Gémeo digital de uma linha de montagem (pode ser simulada com CoppeliaSim), com deteção de anomalias de qualidade por visão computacional e otimização de throughput.',
              stack: 'CoppeliaSim + Python + YOLO + Kafka + Eclipse Ditto + MLflow',
              dificulty: 'Avançado',
            },
          ].map((proj) => (
            <div key={proj.title} style={{ ...S.highlight, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ fontWeight: 700, color, fontSize: '0.95rem' }}>{proj.title}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{proj.desc}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{proj.stack}</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color }}>{proj.dificulty}</div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
