import React from 'react';
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

function BMSLayersSVG() {
  const bx = 360, by = 190;
  const nodes = [
    { label: 'HVAC', sub: 'Aquecimento, Ventilação e Ar Condicionado', color: '#f97316', icon: '🌡', x: 360, y: 60 },
    { label: 'Iluminação', sub: 'Presença + luz natural + dimming DALI', color: '#f97316', icon: '💡', x: 590, y: 130 },
    { label: 'Energia', sub: 'Smart meter, solar PV, bateria', color: '#f97316', icon: '⚡', x: 540, y: 290 },
    { label: 'Segurança', sub: 'Controlo de acesso, CCTV, alarme', color: '#f97316', icon: '🔒', x: 180, y: 290 },
    { label: 'Elevadores', sub: 'Scheduling, predictive maintenance', color: '#f97316', icon: '🛗', x: 130, y: 130 },
  ];
  return (
    <svg viewBox="0 0 720 360" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Building Management System (BMS) — Subsistemas Integrados</text>

      <defs>
        <marker id="arrowBMS" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#f97316" />
        </marker>
      </defs>

      {/* Lines behind boxes — endpoints clipped to rectangle edges */}
      {nodes.map((n, i) => {
        const dx = n.x - bx, dy = n.y - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / dist, uy = dy / dist;
        // BMS box half-dims: 74×34; node box half-dims: 90×30
        const bT = Math.min(ux !== 0 ? 74 / Math.abs(ux) : Infinity, uy !== 0 ? 34 / Math.abs(uy) : Infinity);
        const nT = Math.min(ux !== 0 ? 90 / Math.abs(ux) : Infinity, uy !== 0 ? 30 / Math.abs(uy) : Infinity);
        return <line key={i}
          x1={bx + ux * bT} y1={by + uy * bT}
          x2={n.x - ux * nT} y2={n.y - uy * nT}
          stroke={n.color} strokeWidth="1.5" markerEnd="url(#arrowBMS)" />;
      })}

      {/* Central BMS */}
      <rect x={bx - 74} y={by - 34} width="148" height="68" rx="10" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
      <text x={bx} y={by - 10} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>BMS</text>
      <text x={bx} y={by + 8} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">BACnet/IP · LonWorks</text>
      <text x={bx} y={by + 22} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Modbus · KNX</text>

      {/* Satellite nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x - 90} y={n.y - 30} width="180" height="60" rx="8"
            fill={n.color} fillOpacity="0.1" stroke={n.color} strokeWidth="1.5" />
          <text x={n.x} y={n.y - 8} textAnchor="middle" fontSize="11" fontWeight="700" fill={n.color}>{n.icon} {n.label}</text>
          <text x={n.x} y={n.y + 10} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{n.sub}</text>
        </g>
      ))}

      <rect x="30" y="334" width="660" height="20" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="347" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">BACnet (ISO 16484-5) é o protocolo dominante em HVAC · KNX para iluminação e automação · Modbus para energia · integração via FIWARE NGSI-LD</text>
    </svg>
  );
}

function HVACRLSvg() {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const setpointFixed = hours.map(() => 22);
  const setpointRL = [20,20,20,20,20,20,21,22,22,22,22,22,22,22,22,22,22,22,21,21,20,20,20,20];
  const occupancy =  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
  const energyFixed = hours.map(() => 3.2);
  const energyRL =   [0.4,0.4,0.4,0.4,0.4,0.4,1.2,2.8,3.0,3.1,3.2,3.0,3.0,3.1,3.2,3.1,3.0,2.9,1.5,1.0,0.5,0.4,0.4,0.4];

  const W = 620, H = 80, padL = 44, padT = 38;
  const toX = (i) => padL + (i / 23) * W;
  const toY1 = (v) => padT + H - ((v - 18) / 6) * H;
  const toY2 = (v) => padT + H * 2.3 - (v / 4) * H;

  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>HVAC com RL — Setpoint e Consumo: Fixo vs. Adaptativo</text>

      {/* Occupancy shading */}
      <rect x={toX(7)} y={padT} width={toX(18) - toX(7)} height={H} fill="#f97316" fillOpacity="0.08" />
      <text x={(toX(7) + toX(18)) / 2} y={padT + 12} textAnchor="middle" fontSize="8" fill="#f97316">ocupação 8h–18h</text>

      {/* Temperature chart */}
      <text x={padL - 4} y={padT - 8} textAnchor="end" fontSize="9" fill="var(--text-secondary)">°C</text>
      {[19, 20, 21, 22, 23].map(v => (
        <g key={v}>
          <line x1={padL} y1={toY1(v)} x2={padL + W} y2={toY1(v)} stroke="var(--text-secondary)" strokeWidth="0.5" />
          <text x={padL - 3} y={toY1(v) + 4} textAnchor="end" fontSize="7.5" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
      <polyline points={hours.map(i => `${toX(i)},${toY1(setpointFixed[i])}`).join(' ')} fill="none" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="5 3" />
      <polyline points={hours.map(i => `${toX(i)},${toY1(setpointRL[i])}`).join(' ')} fill="none" stroke={color} strokeWidth="2" />

      {/* Energy chart */}
      <text x={padL - 4} y={padT + H + 50} textAnchor="end" fontSize="9" fill="var(--text-secondary)">kWh</text>
      {[1, 2, 3, 4].map(v => (
        <g key={v}>
          <line x1={padL} y1={toY2(v)} x2={padL + W} y2={toY2(v)} stroke="var(--text-secondary)" strokeWidth="0.5" />
          <text x={padL - 3} y={toY2(v) + 4} textAnchor="end" fontSize="7.5" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}
      <path d={`M${hours.map(i => `${toX(i)},${toY2(energyFixed[i])}`).join(' L')} L${toX(23)},${toY2(0)} L${padL},${toY2(0)} Z`} fill="#6b7280" fillOpacity="0.1" />
      <polyline points={hours.map(i => `${toX(i)},${toY2(energyFixed[i])}`).join(' ')} fill="none" stroke="#6b7280" strokeWidth="1.5" />
      <path d={`M${hours.map(i => `${toX(i)},${toY2(energyRL[i])}`).join(' L')} L${toX(23)},${toY2(0)} L${padL},${toY2(0)} Z`} fill={color} fillOpacity="0.1" />
      <polyline points={hours.map(i => `${toX(i)},${toY2(energyRL[i])}`).join(' ')} fill="none" stroke={color} strokeWidth="2" />

      {hours.filter(h => h % 4 === 0).map(h => (
        <text key={h} x={toX(h)} y={padT + H + H * 1.4 + 30} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{h}h</text>
      ))}

      {/* Axes */}
      <line x1={padL} y1={padT} x2={padL} y2={toY2(0)} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={toY2(0)} x2={padL + W} y2={toY2(0)} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="2 2" />

      <rect x="30" y="278" width="660" height="26" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="289" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>RL poupança: −31% consumo energia HVAC · Setpoint pré-arrefece antes da ocupação (pre-cooling) → conforto preservado</text>
      <text x="360" y="301" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Algoritmo: PPO · Estado: T_int, T_ext, ocupação prevista, preço energia, hora · Reward: −(custo_energia + penalidade_desconforto)</text>
    </svg>
  );
}

function BIMDigitalTwinSVG() {
  const layers = [
    { label: 'Modelo BIM (IFC)', sub: 'Geometria 3D · Materiais · Sistemas MEP', color: '#f97316' },
    { label: 'Dados IoT em Tempo Real', sub: 'HVAC · Energia · Ocupação · Qualidade do ar', color: '#f97316' },
    { label: 'Modelos Analíticos', sub: 'EnergyPlus · ML previsão consumo · CFD', color: '#f97316' },
    { label: 'Digital Twin Engine', sub: 'Sincronização · Simulação · Optimização', color: '#f97316' },
    { label: 'Aplicações', sub: 'Facility Management · BEMS · Alertas · Relatórios', color: '#f97316' },
  ];
  const boxH = 52, gap = 68;
  return (
    <svg viewBox="0 0 720 400" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Digital Twin de Edifício — Arquitectura de Integração BIM + IoT + ML</text>
      <defs>
        <marker id="arrowBIM" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={color} />
        </marker>
      </defs>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={30 + i * 10} y={38 + i * gap} width={660 - i * 20} height={boxH} rx="8"
            fill={l.color} fillOpacity="0.1" stroke={l.color} strokeWidth="1.5" />
          <text x="360" y={38 + i * gap + 22} textAnchor="middle" fontSize="12" fontWeight="700" fill={l.color}>{l.label}</text>
          <text x="360" y={38 + i * gap + 39} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">{l.sub}</text>
          {i < layers.length - 1 && (
            <line x1="360" y1={38 + i * gap + boxH} x2="360" y2={38 + (i + 1) * gap - 2}
              stroke={color} strokeWidth="2" markerEnd="url(#arrowBIM)" />
          )}
        </g>
      ))}
      <rect x="30" y="370" width="660" height="22" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="384" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">openBIM: IFC 4.3 (ISO 16739) · gbXML para simulação energética · COBie para dados de O&amp;M · FIWARE Smart Building Data Models</text>
    </svg>
  );
}

export default function SC7() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 07</div>
      <h1 style={S.h1}>Smart Buildings & BMS</h1>
      <p style={S.lead}>
        Os edifícios consomem 40% da energia total na UE. Building Management Systems com
        RL para HVAC reduzem 30–40% do consumo sem comprometer conforto. Digital Twins
        de edifícios integram BIM (IFC), dados IoT em tempo real e simulação EnergyPlus
        para optimização contínua do ciclo de vida.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Building Management Systems</h2>
        <BMSLayersSVG />
        <h3 style={S.h3}>Protocolos e integração</h3>
        <p style={S.p}>
          Um BMS integra todos os sistemas técnicos de um edifício — HVAC, iluminação,
          energia, segurança e elevadores — numa plataforma de supervisão e controlo unificada.
          A interoperabilidade entre fabricantes é garantida por protocolos standard:
        </p>
        <div style={S.highlight}>
          <strong>BACnet (Building Automation and Control Networks, ASHRAE 135):</strong>
          protocolo dominante para HVAC e controlo de instalações. Suporta comunicação
          IP (BACnet/IP), RS-485 (BACnet MS/TP) e wireless (BACnet/SC sobre TLS).
          Define objectos estandardizados: Analog Input (sensor temperatura), Binary Output
          (válvula on/off), Schedule (programação horária), Trend Log (histórico).
        </div>
        <div style={S.highlight}>
          <strong>KNX:</strong> standard europeu (EN 50090) para automação de edifícios
          residenciais e comerciais — iluminação, estores, aquecimento, tomadas inteligentes.
          Topologia em bus (KNX TP), rádio (KNX RF) ou IP (KNXnet/IP).
          40 000+ produtos certificados de 500+ fabricantes.
        </div>
        <p style={S.p}>
          A integração com plataformas de cidade usa FIWARE Smart Data Models para edifícios:
          entidades <code>Building</code>, <code>BuildingOperation</code>, <code>Device</code>
          com mapeamento directo de pontos BACnet/KNX para atributos NGSI-LD.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. HVAC com Reinforcement Learning</h2>
        <HVACRLSvg />
        <h3 style={S.h3}>Formulação PPO e pre-cooling</h3>
        <p style={S.p}>
          HVAC representa tipicamente 40–60% do consumo energético de um edifício comercial.
          O controlo tradicional usa setpoints fixos e temporizadores — ignorando a ocupação
          real, a previsão meteorológica e o preço dinâmico da electricidade.
          RL aprende políticas que optimizam simultaneamente conforto e custo.
        </p>
        <div style={S.highlight}>
          <strong>Formulação do MDP para HVAC:</strong>
          <br/>• <strong>Estado:</strong> T_interior, T_exterior, humidade, ocupação prevista
          (1h, 4h, 8h), preço_electricidade(t), hora, dia_semana, radiação_solar
          <br/>• <strong>Acção:</strong> setpoint_temperatura (contínuo, 18–26°C),
          taxa_ventilação (0–100%), carga_chiller (0–100%)
          <br/>• <strong>Reward:</strong> −(custo_energia_kWh × preço_tarifário) − λ × PMV²
          onde PMV (Predicted Mean Vote, ISO 7730) mede desconforto térmico
          <br/>• <strong>Algoritmo:</strong> PPO (Proximal Policy Optimization) com
          clipping de policy gradient (ε=0.2) — mais estável que DDPG em ambientes ruidosos
        </div>
        <div style={S.highlight}>
          <strong>Pre-cooling (thermal mass exploitation):</strong> o RL aprende a arrefecer
          o edifício antes dos períodos de pico tarifário, usando a inércia térmica da
          estrutura como "bateria" gratuita. Edifício pré-arrefecido a 21°C às 7h consome
          menos energia de 8h às 12h (tarifa alta) para manter 22°C — poupança de 15–20%
          só com este efeito.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Abordagem</th><th style={S.th}>Poupança energia</th><th style={S.th}>Conforto (PMV)</th><th style={S.th}>Referência</th></tr></thead>
          <tbody>
            {[
              ['Setpoint fixo (baseline)', '—', '±0.3 PMV', 'Tradicional'],
              ['Programação por horário', '–8%', '±0.4 PMV', 'Padrão industria'],
              ['MPC (Model Predictive Control)', '–22%', '±0.2 PMV', 'Sturzenegger 2016'],
              ['DQN (discretizado)', '–26%', '±0.3 PMV', 'Wei et al. 2017'],
              ['PPO (contínuo)', '–31%', '±0.25 PMV', 'Zhang et al. 2022'],
              ['PPO + previsão ocupação', '–38%', '±0.22 PMV', 'Estado da arte 2023'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Digital Twin de Edifício</h2>
        <BIMDigitalTwinSVG />
        <h3 style={S.h3}>BIM, IFC e sincronização com IoT</h3>
        <p style={S.p}>
          O Digital Twin de um edifício combina o modelo BIM (Building Information Model)
          com dados de sensores IoT em tempo real e modelos de simulação — criando uma
          representação viva do edifício que evolui com o estado físico real.
        </p>
        <div style={S.highlight}>
          <strong>IFC (Industry Foundation Classes, ISO 16739):</strong> formato openBIM
          neutro para modelos de edifícios. Descreve elementos construtivos (IfcWall,
          IfcSlab, IfcSpace), sistemas MEP (IfcDistributionSystem para HVAC, elétrico,
          hidráulico) e relações espaciais (IfcRelContainedInSpatialStructure).
          Um modelo IFC de um edifício de escritórios típico tem 50 000–500 000 entidades.
        </div>
        <div style={S.highlight}>
          <strong>EnergyPlus + ML:</strong> simulação física (EnergyPlus do DOE) calibrada
          com dados reais de consumo — o modelo paramétrico é ajustado (AutoML ou Bayesian
          Optimization) para minimizar o erro entre simulação e medição. O modelo calibrado
          prevê consumo futuro com MAPE &lt;5% e permite simular cenários de retrofit
          (troca de janelas, isolamento, PV) sem obra real.
        </div>
        <div style={S.note}>
          Síntese: edifícios inteligentes são a fronteira entre a smart city e a eficiência
          energética individual. BMS com RL poupa 30–38% em HVAC. Digital Twins com BIM+IoT
          permitem gestão preditiva e simulação de cenários. Integração com a plataforma
          municipal via FIWARE cria visibilidade agregada de consumo por quarteirão — base
          para políticas de reabilitação urbana orientadas por dados.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Building Management Systems</strong> — integram HVAC, iluminação, energia, segurança e elevadores numa plataforma unificada através de protocolos BACnet (ASHRAE 135) e KNX (EN 50090), com mapeamento para FIWARE NGSI-LD para integração na plataforma municipal.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>HVAC com Reinforcement Learning</strong> — agentes PPO aprendem políticas de setpoint contínuo que exploram a inércia térmica do edifício (pre-cooling) e o preço dinâmico da electricidade, poupando 31–38% de energia face a setpoints fixos com conforto PMV equivalente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Digital Twin de Edifício</strong> — combina o modelo BIM em IFC (ISO 16739), dados IoT em tempo real e simulação EnergyPlus calibrada com AutoML, permitindo prever o consumo com MAPE inferior a 5% e simular cenários de retrofit sem obra real.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
