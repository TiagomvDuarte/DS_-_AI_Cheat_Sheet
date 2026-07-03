import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Industry40';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  card: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.25rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginBottom: '0.85rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginBottom: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: '1rem 1.2rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.7, marginTop: '0.75rem', overflowX: 'auto' },
  formula: { background: '#1e293b', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 1rem', marginTop: '0.75rem', fontFamily: 'monospace', fontSize: '0.92rem', color: '#f8fafc', textAlign: 'center' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function PurdueModelSVG() {
  const layers = [
    { color: '#f97316', label: 'L4 — Enterprise (ERP / BI)', sub: 'SAP S/4HANA, Oracle ERP, Power BI' },
    { color: '#f97316', label: 'L3 — Operations (MES / SCADA)', sub: 'Ignition, Wonderware, OSIsoft PI Historian' },
    { color: '#f97316', label: 'L2 — Supervisory (HMI / DCS)', sub: 'SCADA Panels, Historian, Alarming' },
    { color: '#f97316', label: 'L1 — Control (PLC / DCS)', sub: 'Siemens S7-1500, Allen-Bradley ControlLogix' },
    { color: '#f97316', label: 'L0 — Field (Sensores / Atuadores)', sub: 'IIoT nodes, Fieldbus, OPC-UA endpoints, TSN' },
  ];
  return (
    <svg viewBox="0 0 560 320" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="320" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Purdue Reference Model — IEC 62264 / ISA-95</text>
      {layers.map((l, i) => {
        const pad = i * 16;
        const y = 28 + i * 56;
        return (
          <g key={i}>
            <rect x={18 + pad} y={y} width={524 - pad * 2} height={44} fill={l.color} rx="5" opacity="0.82" />
            <text x={280} y={y + 17} textAnchor="middle" fill="#fff" fontWeight="700" fontSize="12">{l.label}</text>
            <text x={280} y={y + 33} textAnchor="middle" fill="#ffffffcc" fontSize="9.5">{l.sub}</text>
          </g>
        );
      })}
      {/* IT/OT boundary arrow */}
      <line x1="8" y1="200" x2="8" y2="240" stroke="#f97316" strokeWidth="2" />
      <text x={14} y={215} fill="#f97316" fontSize="8.5" fontWeight="700">IT/OT</text>
      <text x={14} y={225} fill="#f97316" fontSize="8.5" fontWeight="700">Boundary</text>
      <text x={280} y={312} textAnchor="middle" fill="#fb923c" fontSize="9">DMZ industrial entre L2/L3: firewall unidireccional (data diode) ou IDMZ (Rockwell/Cisco). Zero trust OT.</text>
    </svg>
  );
}

function TSNStackSVG() {
  const standards = [
    { std: 'IEEE 802.1Qbv', name: 'Time-Aware Shaper', desc: 'Janelas de transmissao time-gated — garante latencia deterministica', color: '#f97316' },
    { std: 'IEEE 802.1Qcc', name: 'Stream Reservation', desc: 'Configuracao centralizada de fluxos (CNC + CUC)', color: '#f97316' },
    { std: 'IEEE 802.1AS-Rev', name: 'Precision Time Protocol', desc: 'Sincronizacao de relogio sub-microsegundo (gPTP)', color: '#f97316' },
    { std: 'IEEE 802.1CB', name: 'Frame Replication', desc: 'Redundancia de caminho sem interrupcao (FRER)', color: '#f97316' },
    { std: 'IEEE 802.1Qci', name: 'Per-Stream Filtering', desc: 'Policiamento de trafego por stream — isola falhas', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 220" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="220" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">TSN (Time-Sensitive Networking) — Stack IEEE 802.1 para OT Determinista</text>
      {standards.map((s, i) => {
        const y = 26 + i * 36;
        return (
          <g key={i}>
            <rect x="8" y={y} width="100" height="28" fill={s.color} rx="4" opacity="0.2" />
            <rect x="8" y={y} width="100" height="28" fill="none" stroke={s.color} strokeWidth="1.5" rx="4" />
            <text x={58} y={y + 12} textAnchor="middle" fill={s.color} fontSize="9" fontWeight="700">{s.std}</text>
            <text x={58} y={y + 23} textAnchor="middle" fill={s.color} fontSize="8">{s.name}</text>
            <text x={118} y={y + 18} fill="#fb923c" fontSize="9">{s.desc}</text>
          </g>
        );
      })}
      <text x={280} y={215} textAnchor="middle" fill="#fb923c" fontSize="9">TSN + OPC-UA (Part 14 pub/sub): controlo determinista em Ethernet padrao — fim ao EtherCAT/PROFINET proprietario</text>
    </svg>
  );
}

function PrivateNetworkSVG() {
  const nodes = [
    { x: 280, y: 75, label: '5G Core (SA)', sub: 'AMF/SMF/UPF/PCF', color: '#f97316', r: 48 },
    { x: 110, y: 175, label: 'gNB (RAN)', sub: 'URLLC slice\n<1ms latencia', color: '#f97316', r: 40 },
    { x: 280, y: 185, label: 'MEC Server', sub: 'Edge compute\nML inference', color: '#f97316', r: 40 },
    { x: 450, y: 175, label: 'AGVs / Cobots', sub: '5G UEs\n1M/km2', color: '#f97316', r: 40 },
    { x: 450, y: 75, label: 'OPC-UA / MES', sub: 'Integracao fabrica', color: '#f97316', r: 36 },
  ];
  const edges = [[0,1],[0,2],[0,3],[0,4],[1,2],[2,3]];
  return (
    <svg viewBox="0 0 560 255" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="255" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">5G SA Private Network — Arquitectura para Smart Factory</text>
      {edges.map(([a,b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#f97316" strokeOpacity="0.35" strokeWidth="1.5" />
      ))}
      {nodes.map((n, i) => {
        const lines = n.sub.split('\n');
        return (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="var(--bg-secondary)" />
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity="0.14" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke={n.color} strokeWidth="2" />
            <text x={n.x} y={n.y - 4 + (lines.length - 1) * (-6)} textAnchor="middle" fill={n.color} fontSize="9.5" fontWeight="700">{n.label}</text>
            {lines.map((l, li) => (
              <text key={li} x={n.x} y={n.y + 9 + li * 11} textAnchor="middle" fill="#fb923c" fontSize="8">{l}</text>
            ))}
          </g>
        );
      })}
      <text x={280} y={248} textAnchor="middle" fill="#fb923c" fontSize="9">Nokia DAC + Siemens SINUMERIK: 5G SA privada para CNC wireless em Wolfsburg VW (2023)</text>
    </svg>
  );
}

function EdgeAIHierarchySVG() {
  const tiers = [
    { label: 'Cloud AI', x: 280, y: 35, w: 400, h: 38, color: '#f97316', details: 'Model training, Digital Twin, fleet analytics — latencia 50-500ms', sub: 'AWS SageMaker / Azure ML / GCP Vertex' },
    { label: 'Fog / Regional Edge', x: 280, y: 88, w: 320, h: 38, color: '#f97316', details: 'Agregacao, ML inference pesada — latencia 5-50ms', sub: 'Dell PowerEdge / HPE Edgeline' },
    { label: 'Edge Gateway', x: 280, y: 141, w: 240, h: 38, color: '#f97316', details: 'Feature extraction, anomaly detection — latencia 1-5ms', sub: 'NVIDIA Jetson AGX Orin / Raspberry Pi CM4' },
    { label: 'Device / MCU', x: 280, y: 194, w: 160, h: 38, color: '#f97316', details: 'TinyML, threshold alerting — latencia <1ms', sub: 'STM32 / Nordic nRF / Cortex-M' },
  ];
  return (
    <svg viewBox="0 0 560 255" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="245" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Hierarquia Edge AI — Do MCU ao Cloud (continuum computacional)</text>
      {tiers.map((t, i) => (
        <g key={i}>
          <rect x={t.x - t.w/2} y={t.y} width={t.w} height={t.h} fill={t.color} rx="5" opacity="0.15" />
          <rect x={t.x - t.w/2} y={t.y} width={t.w} height={t.h} fill="none" stroke={t.color} strokeWidth="1.5" rx="5" />
          <text x={t.x} y={t.y + 14} textAnchor="middle" fill={t.color} fontSize="11" fontWeight="700">{t.label}</text>
          <text x={t.x} y={t.y + 26} textAnchor="middle" fill="#fb923c" fontSize="8.5">{t.sub}</text>
        </g>
      ))}
      <text x={280} y={248} textAnchor="middle" fill="#fb923c" fontSize="9">TinyML (TensorFlow Lite Micro): modelo MobileNetV3 comprimido para 50kB, inferencia em 2ms em Cortex-M7</text>
    </svg>
  );
}

function OPCUATableSVG() {
  const rows = [
    { name: 'OPC-UA (IEC 62541)', lat: '5-50 ms', sec: 'TLS 1.3 + PKI X.509', disc: 'Sim', sem: 'Sim', c: '#f97316' },
    { name: 'MQTT v5', lat: '1-10 ms', sec: 'TLS + ACL', disc: 'Nao', sem: 'Nao', c: '#f97316' },
    { name: 'Modbus TCP', lat: '1-5 ms', sec: 'Nenhuma nativa', disc: 'Nao', sem: 'Nao', c: '#fb923c' },
    { name: 'PROFINET IRT', lat: '<1 ms', sec: 'MRP/MRPD rings', disc: 'Parcial', sem: 'Nao', c: '#fb923c' },
    { name: 'OPC-UA + TSN', lat: '<0.1 ms', sec: 'TLS + TSN isolation', disc: 'Sim', sem: 'Sim', c: '#f97316' },
  ];
  const hdrs = ['Protocolo', 'Latencia', 'Seguranca', 'Discovery', 'Semantica'];
  const xs = [8, 148, 265, 385, 450];
  return (
    <svg viewBox="0 0 560 210" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="210" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={18} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Protocolos IIoT — Comparacao Tecnica (2024)</text>
      {hdrs.map((h, i) => <text key={i} x={xs[i] + 2} y={32} fill="#fb923c" fontSize="10" fontWeight="700">{h}</text>)}
      <line x1="6" y1="38" x2="554" y2="38" stroke="var(--card-border)" strokeWidth="1" />
      {rows.map((r, ri) => {
        const y = 38 + ri * 32;
        const vals = [r.name, r.lat, r.sec, r.disc, r.sem];
        return (
          <g key={ri}>
            <rect x="6" y={y + 2} width="548" height="28" fill={ri % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            {vals.map((v, ci) => (
              <text key={ci} x={xs[ci] + 4} y={y + 20} fill={ci === 0 ? r.c : (v === 'Sim' ? '#f97316' : '#e2e8f0')} fontSize={ci === 0 ? '10.5' : '10'} fontWeight={ci === 0 ? '700' : (v === 'Sim' ? '700' : '400')}>{v}</text>
            ))}
          </g>
        );
      })}
      <text x={280} y={205} textAnchor="middle" fill="#fb923c" fontSize="9">OPC-UA Companion Specs 2024: PackML, Robotics, MachineTool, AutoID, Mining, Weighing, CNC, Laser</text>
    </svg>
  );
}

function MaturitySVG() {
  const stages = [
    { name: 'Computerisation', desc: 'IT isolado', pct: 0.92, color: '#fb923c' },
    { name: 'Connectivity', desc: 'PLCs em rede', pct: 0.72, color: '#f97316' },
    { name: 'Visibility', desc: 'Sensores+KPIs', pct: 0.48, color: '#f97316' },
    { name: 'Transparency', desc: 'Digital Twin', pct: 0.28, color: '#f97316' },
    { name: 'Predictability', desc: 'Simulacao', pct: 0.16, color: '#f97316' },
    { name: 'Adaptability', desc: 'Self-optim.', pct: 0.04, color: '#f97316' },
  ];
  const W = 88;
  const maxH = 130;
  return (
    <svg viewBox="0 0 560 220" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="210" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">IMPULS Maturity Model (acatech) — Adopcao Europa 2023</text>
      {stages.map((s, i) => {
        const x = 10 + i * W;
        const barH = maxH * s.pct;
        const barY = 165 - barH;
        return (
          <g key={i}>
            <rect x={x + 6} y={barY} width={W - 12} height={barH} fill={s.color} rx="4" opacity="0.8" />
            <text x={x + W/2} y={barY - 6} textAnchor="middle" fill={s.color} fontSize="10" fontWeight="700">{Math.round(s.pct*100)}%</text>
            <text x={x + W/2} y={180} textAnchor="middle" fill="#e2e8f0" fontSize="8.5" fontWeight="700">{s.name}</text>
            <text x={x + W/2} y={192} textAnchor="middle" fill="#fb923c" fontSize="8">{s.desc}</text>
          </g>
        );
      })}
      <text x={280} y={215} textAnchor="middle" fill="#fb923c" fontSize="9">WEF Lighthouse (nivel 6): 153 fabricas globais em Jan 2024. Ganhos medios: +30% produtividade, -27% custos, -35% emissoes.</text>
    </svg>
  );
}

export default function IND1() {
  const mod = modules[0];
  return (
    <div style={S.page}>
      <Link to="/industry40" style={S.back}>← Industry 4.0</Link>
      <div style={S.badge}>MÓDULO 01</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Purdue Reference Model — Arquitectura de Automacao Industrial</h2>
        <div style={S.diagram}><PurdueModelSVG /></div>
        <div style={S.highlight}>
          O Purdue Model (IEC 62264 / ISA-95) define 5 camadas funcionais com interfaces padrao entre elas. A fronteira <strong>IT/OT</strong> entre L2 e L3 e o perimetro de seguranca critico: trafego so deve fluir de L2 para L3 (nunca o contrario sem inspecao profunda). Arquitectura modern: <strong>IDMZ</strong> (Industrial DMZ) com dois firewalls e zona tampao — replicacao de dados via OSIsoft PI ou Historian para a camada enterprise sem expor PLCs diretamente.
        </div>
        <div style={S.note}>
          Industry 4.0 dissolve parcialmente estas camadas: <strong>edge computing</strong> coloca computacao em L0.5 (na celula), processando 90% dos dados localmente. Apenas KPIs e eventos anomalos sobem a L3/L4. Arquitectura emergente: OT Cloud (AWS IoT SiteWise, Azure IoT Operations) com conectores OPC-UA nativos e MQTT broker gerido.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. TSN — Time-Sensitive Networking para Controlo Determinista</h2>
        <div style={S.diagram}><TSNStackSVG /></div>
        <div style={S.highlight}>
          <strong>TSN (IEEE 802.1Qbv)</strong> usa um "gate control list" que define janelas de tempo exactas para cada classe de trafego em Ethernet padrao (1GbE / 10GbE). O relogio mestre distribui tempo via gPTP (IEEE 802.1AS) com precisao de <strong>10-100 nanosegundos</strong> via IEEE 1588v2 hardware timestamps. Resultado: latencia garantida de 30-100 us para trafego critico de controlo, co-existindo com trafego best-effort (IT) na mesma rede fisica.
        </div>
        <div style={S.note}>
          Impacto industrial: TSN elimina a necessidade de redes separadas para OT (PROFINET, EtherCAT) e IT (Ethernet standard). Uma unica infraestrutura de rede suporta controlo de movimento a 4 kHz, video de inspecao a 1 Gbps, e dados de MES simultaneamente. Siemens PROFINET over TSN e Cisco IE3400 sao os primeiros switches industriais TSN certificados (2023).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. 5G SA Private Network — Conectividade para Smart Factory</h2>
        <div style={S.diagram}><PrivateNetworkSVG /></div>
        <div style={S.highlight}>
          5G SA (Standalone) com network slicing cria fatias virtuais dedicadas: <strong>URLLC</strong> (Ultra-Reliable Low-Latency Communication) para AGVs e cobots (&lt;1 ms latencia, 99.9999% reliability) e <strong>eMBB</strong> para video de inspecao e AR. O <strong>UPF</strong> (User Plane Function) pode ser deployado no MEC server dentro da fabrica — dados de producao nunca saem do perimetro fisico. Frequencias: sub-6 GHz para cobertura ampla; mmWave (26 GHz) para alta densidade em areas especificas.
        </div>
        <div style={S.note}>
          Casos reais 2023: Nokia + VW Wolfsburg (5G SA privada para 1500 AGVs); Ericsson + Assa Abloy (controlo de qualidade por video em 5G); Bosch Stuttgart (5G + TSN para controlo de maquinas CNC sem fios). O espectro privado (3.7-3.8 GHz em Portugal/Europa) permite deployments isolados sem partilha com operadores publicos.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Edge AI Hierarchy — Computacao no Continuum IoT-Edge-Cloud</h2>
        <div style={S.diagram}><EdgeAIHierarchySVG /></div>
        <div style={S.highlight}>
          <strong>TinyML</strong> (TensorFlow Lite Micro, Edge Impulse) permite executar redes neurais em MCUs com 256 kB RAM: deteccao de anomalias de vibração em 50 kB de modelo, latencia de 2 ms, consumo de 1 mW. <strong>NVIDIA Jetson AGX Orin</strong> (275 TOPS) executa YOLOv8 a 120 FPS para inspecao visual em tempo real. O <strong>continuum computacional</strong> (ETSI MEC) define onde executar cada modelo: modelos pequenos e criticos no device; modelos grandes e batch em cloud.
        </div>
        <div style={S.note}>
          Benchmark NVIDIA Jetson AGX Orin vs cloud: inferencia YOLOv8m local = 8 ms, latencia total (captura + inferencia + sinal PLC) = 12 ms. Via cloud AWS: latencia total = 85-200 ms (variavel). Para sinal de rejeicao em linha de producao a 1200 pecas/hora (0.5s por peca), apenas o edge e viavel.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Protocolos IIoT: OPC-UA, MQTT e TSN</h2>
        <div style={S.diagram}><OPCUATableSVG /></div>
        <div style={S.highlight}>
          <strong>OPC-UA Part 14</strong> (pub/sub) define tres transport layers: UDP Multicast (latencia &lt;1 ms, sem garantias), MQTT (broker centralizado, QoS 0/1/2), AMQP (enterprise, persistencia de mensagens). Para controlo de tempo-real, OPC-UA sobre TSN (IEEE 802.1Qbv) combina o modelo semantico rico do OPC-UA com o determinismo do TSN — latencia garantida de &lt;0.1 ms mesmo sob carga de rede.
        </div>
        <div style={S.note}>
          OPC-UA Address Space: cada No (Node) tem NodeId, BrowseName, DisplayName, Attributes e References. Tipos de No: Object, Variable, Method, ObjectType, VariableType, DataType, ReferenceType, View. O Information Model permite representar a hierarquia fisica da fabrica (fabrica &gt; linha &gt; estacao &gt; equipamento &gt; sensor) como arvore navegavel.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Asset Administration Shell (AAS) e Digital Thread</h2>
        <div style={S.grid2}>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>AAS — IEC 63278 (IDTA)</div>
            <p style={S.p}>
              O Asset Administration Shell e o "passaporte digital" de cada activo industrial ao longo do seu ciclo de vida completo. Estrutura formal: <strong>AAS Header</strong> (identificadores globais: IRDI, IRI, Asset ID unico) + <strong>Submodels</strong> padrao registados na IDTA: Nameplate, Handover Documentation, Technical Data, Carbon Footprint, Predictive Maintenance, Simulation. Serializado em JSON-LD, RDF, ou XML para interoperabilidade.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Digital Thread — Rastreabilidade Total</div>
            <p style={S.p}>
              Digital Thread e o fio de dados continuo desde o conceito (CAD, simulacao) ate ao fim de vida (MRO, reciclagem). Cada peca tem um AAS com: parametros de design (PLM Siemens Teamcenter), parametros de processo reais (MES), dados de inspecao (CMM, vision), historico de manutencao de campo. Correlacao design-processo-campo permite identificar causas raiz de falhas de campo em horas vs semanas.
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>7. Modelo RAMI 4.0 — Referencia Arquitectural</h2>
        <div style={S.highlight}>
          <strong>RAMI 4.0</strong> (Reference Architectural Model Industrie 4.0, DIN SPEC 91345) e um cubo 3D que mapeia: Eixo Y — Hierarquia (de componentes a empresa); Eixo X — Ciclo de vida (de desenvolvimento a reciclagem); Eixo Z — Camadas (de fisica a negocio). Cada celula do cubo define os requisitos de um sistema I4.0. O AAS implementa o conceito de "I4.0 Component" = activo fisico + AAS + identity.
        </div>
        <div style={S.note}>
          Diferenca RAMI 4.0 vs IIC (Industrial Internet Consortium) IIRA: RAMI foca-se em hierarquia de fabrica e ciclo de vida de produto; IIRA foca-se em conectividade e analytics a nivel de sistema de sistemas. Na pratica, ambos convergem para OPC-UA + Digital Twin + AI/ML como stack tecnologico.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>8. Modelo de Maturidade IMPULS (acatech)</h2>
        <div style={S.diagram}><MaturitySVG /></div>
        <div style={S.highlight}>
          O salto de nivel 3 (Visibility) para nivel 4 (Transparency) exige um Digital Twin que nao apenas monitorize mas explique por que os KPIs se comportam como se comportam — requer modelos causais, nao apenas correlacoes. O nivel 5 (Predictability) requer simulacao "what-if": Digital Twin que corre cenarios futuros mais rapido que tempo real. McKinsey 2022: uma fabrica no nivel 5 gera 2-5x mais valor por euro investido em I4.0 vs nivel 2-3.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>9. Implementacao: OPC-UA Server + Pub/Sub MQTT em Python</h2>
        <div style={S.note}>
          Arquitectura dual-protocol: OPC-UA para sistemas SCADA/MES que precisam de navegacao semantica e seguranca PKI; MQTT para ingestao em cloud (AWS IoT Core, Azure IoT Hub) com throughput de 100k+ msgs/s. O mesmo dado e publicado em ambos os canais simultaneamente a 10 Hz.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>10. Benchmarks: WEF Lighthouse Factories</h2>
        <div style={S.grid3}>
          {[
            { title: 'Bosch Rexroth Homburg', stat: '-25% downtime', detail: 'OPC-UA + Digital Twin + ML. 850 sensores/linha, 12 linhas. ROI em 18 meses. Seleccionada WEF Lighthouse 2021.' },
            { title: 'Siemens Amberg', stat: '99.99885% qualidade', detail: '1 defeito por 1M pecas. 75% automatizado. Produto digital gemeo de cada PLC produzido. Zero papel na fabrica desde 2019.' },
            { title: 'BMW Regensburg', stat: '+10% throughput', detail: '1500 AGVs 5G wireless. Reconfigurar linha de producao em 4h vs 4 dias anterior. 200 cobots assembly.' },
            { title: 'Haier Qingdao', stat: '-28% lead time', detail: 'Mass customisation real: lote minimo = 1 unidade customizada. AAS por produto. 5000+ SKUs em simultneo.' },
            { title: 'Johnson & Johnson Geel', stat: '-40% energia', detail: 'Digital Energy Twin com optimizacao RL para HVAC e iluminacao. ISO 50001 + scope 2 emissions tracking.' },
            { title: 'Henkel Dusseldorf', stat: '+15% OEE', detail: 'ML para scheduling dinamico de producao. Digital Twin de reactores quimicos. Reduccao de waste de materia prima 18%.' },
          ].map((b, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.25rem', fontSize: '0.85rem' }}>{b.title}</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{b.stat}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{b.detail}</div>
            </div>
          ))}
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>11. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Purdue Reference Model — Arquitectura de Automacao Industrial</strong> — o Purdue Model hierarquiza a automação industrial em 5 níveis (campo, controlo, supervisão, MES, ERP); define fronteiras de segurança IT/OT e é referência para design de arquitecturas Industry 4.0 seguras e interoperáveis.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>TSN — Time-Sensitive Networking para Controlo Determinista</strong> — TSN (IEEE 802.1) garante latência determinista &lt;1ms em redes Ethernet standard para controlo em tempo real; substitui fieldbus proprietários (Profibus, DeviceNet), permitindo convergência de tráfego OT e IT na mesma infra-estrutura.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>5G SA Private Network — Conectividade para Smart Factory</strong> — redes 5G privadas (SA — Standalone) oferecem latência &lt;5ms, bandwidth de 10Gbps e URLLC para aplicações de controlo; permitem conectar AGVs, cobots e sensores sem cabos com SLAs garantidos — crítico para fábricas com layouts dinâmicos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Edge AI Hierarchy — Computacao no Continuum IoT-Edge-Cloud</strong> — o continuum IoT-edge-cloud processa dados no nível mais adequado: MCUs para detecção local, gateways edge para agregação e inferência, cloud para treino e analytics global — reduz bandwidth, latência e custos de transmissão.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Protocolos IIoT: OPC-UA, MQTT e TSN</strong> — OPC-UA é o standard de interoperabilidade semântica industrial (dados + modelos de informação); MQTT é leve para sensores com bandwidth limitado (QoS 0/1/2); TSN garante determinismo temporal — os três são complementares em arquitecturas IIoT modernas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Asset Administration Shell (AAS) e Digital Thread</strong> — AAS é o passaporte digital de cada activo industrial (máquina, componente, produto) com todos os seus dados ao longo do ciclo de vida; o Digital Thread liga design CAD, produção MES e operação em campo num fio de dados contínuo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelo RAMI 4.0 — Referencia Arquitectural</strong> — RAMI 4.0 é um cubo 3D (camadas funcionais × ciclo de vida × hierarquia de integração) que mapeia todos os aspectos de uma fábrica inteligente; fornece vocabulário comum para integração de sistemas heterogéneos em Industry 4.0.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
