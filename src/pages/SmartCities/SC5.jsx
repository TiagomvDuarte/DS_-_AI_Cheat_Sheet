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

function NGSILDSvg() {
  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>FIWARE NGSI-LD — Entidade de Contexto e Relações Semânticas</text>

      {/* Entity box */}
      <rect x="30" y="38" width="320" height="210" rx="8" fill={color} fillOpacity="0.07" stroke={color} strokeWidth="1.5" />
      <rect x="30" y="38" width="320" height="28" rx="8" fill={color} fillOpacity="0.2" />
      <text x="190" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>TrafficFlowObserved</text>
      {[
        ['id', '"urn:ngsi-ld:TrafficFlow:Lisboa:A5:001"'],
        ['type', '"TrafficFlowObserved"'],
        ['@context', '"fiware/TrafficFlow"'],
        ['intensity', '{ value: 847, unitCode: "P1" }'],
        ['averageSpeed', '{ value: 32.4, unitCode: "KMH" }'],
        ['laneId', '{ value: 2 }'],
        ['refRoadSegment', '→ RoadSegment entity'],
        ['observedAt', '"2024-06-21T08:45:00Z"'],
      ].map(([k, v], i) => (
        <g key={k}>
          <text x="45" y={82 + i * 22} fontSize="9" fontWeight="700" fill={color}>{k}:</text>
          <text x="140" y={82 + i * 22} fontSize="9" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}

      {/* Relation arrow to RoadSegment — goes right horizontally then down, label above line */}
      <defs>
        <marker id="arrowNGSI" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#f97316" />
        </marker>
      </defs>
      <line x1="350" y1="158" x2="428" y2="158" stroke={color} strokeWidth="1.5" markerEnd="url(#arrowNGSI)" />
      <text x="390" y="150" textAnchor="middle" fontSize="8" fill={color}>refRoadSegment</text>

      {/* RoadSegment entity */}
      <rect x="430" y="100" width="220" height="115" rx="8" fill="#f97316" fillOpacity="0.07" stroke="#f97316" strokeWidth="1.5" />
      <rect x="430" y="100" width="220" height="24" rx="8" fill="#f97316" fillOpacity="0.2" />
      <text x="540" y="117" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f97316">RoadSegment</text>
      {[
        ['id', 'A5-Lisboa-Km15'],
        ['name', '"A5 — Cascais"'],
        ['maxSpeed', '120 km/h'],
        ['refRoad', '→ Road entity'],
      ].map(([k, v], i) => (
        <g key={k}>
          <text x="445" y={134 + i * 18} fontSize="8.5" fontWeight="600" fill="#f97316">{k}:</text>
          <text x="495" y={134 + i * 18} fontSize="8.5" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}

      {/* Road entity */}
      <line x1="540" y1="215" x2="540" y2="245" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrowNGSI)" />
      <rect x="450" y="245" width="180" height="24" rx="4" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="1" />
      <text x="540" y="261" textAnchor="middle" fontSize="9" fill="#f97316">Road: A5 (entidade pai)</text>

      <text x="360" y="296" textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">NGSI-LD + JSON-LD: relações semânticas entre entidades permitem queries SPARQL sobre grafo urbano</text>
    </svg>
  );
}

function FIWAREStackSVG() {
  const components = [
    { label: 'Orion Context Broker', desc: 'NGSI-LD API · pub/sub · geo-queries', color: '#f97316', y: 42 },
    { label: 'STH-Comet / QuantumLeap', desc: 'Histórico temporal · CrateDB / TimescaleDB', color: '#f97316', y: 108 },
    { label: 'Cygnus', desc: 'Apache Flume-based · sink para Kafka, HDFS, MySQL, Elasticsearch', color: '#f97316', y: 174 },
    { label: 'Keyrock + Wilma PEP', desc: 'OAuth2 / OpenID · Policy Enforcement Point para NGSI-LD', color: '#f97316', y: 240 },
    { label: 'IoT Agent (UL / JSON / OPC-UA)', desc: 'Protocol bridge: MQTT/CoAP → NGSI-LD', color: '#f97316', y: 306 },
  ];
  return (
    <svg viewBox="0 0 720 380" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Stack FIWARE — Componentes e Responsabilidades</text>

      {/* Left input */}
      <rect x="20" y="160" width="110" height="60" rx="6" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="1.5" />
      <text x="75" y="184" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Sensores IoT</text>
      <text x="75" y="198" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">MQTT / CoAP</text>
      <text x="75" y="210" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">HTTP / OPC-UA</text>
      <line x1="130" y1="190" x2="210" y2="322" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Right output */}
      <rect x="590" y="135" width="110" height="60" rx="6" fill="#6b7280" fillOpacity="0.1" stroke="#6b7280" strokeWidth="1.5" />
      <text x="645" y="159" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6b7280">Apps / APIs</text>
      <text x="645" y="173" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Dashboard · GIS</text>
      <text x="645" y="185" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">ML Pipelines</text>
      <line x1="590" y1="165" x2="490" y2="68" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" />

      {components.map((c, i) => (
        <g key={i}>
          <rect x="210" y={c.y} width="280" height="48" rx="7" fill={c.color} fillOpacity="0.1" stroke={c.color} strokeWidth="1.5" />
          <rect x="210" y={c.y} width="7" height="48" rx="3" fill={c.color} />
          <text x="228" y={c.y + 19} fontSize="10" fontWeight="700" fill={c.color}>{c.label}</text>
          <text x="228" y={c.y + 35} fontSize="8.5" fill="var(--text-secondary)">{c.desc}</text>
          {i < components.length - 1 && (
            <line x1="350" y1={c.y + 48} x2="350" y2={components[i + 1].y} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3 2" />
          )}
        </g>
      ))}
      <rect x="30" y="362" width="660" height="14" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="373" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">FIWARE usado em +500 cidades · Standard NGSI-LD adoptado por ETSI · Integrado no Smart Data Models da Comissão Europeia</text>
    </svg>
  );
}

function DataSpacesSVG() {
  const spaces = [
    { name: 'Mobility\nData Space', color: '#f97316', x: 120, y: 90 },
    { name: 'Energy\nData Space', color: '#f97316', x: 360, y: 55 },
    { name: 'Health\nData Space', color: '#f97316', x: 600, y: 90 },
    { name: 'Public Admin\nData Space', color: '#f97316', x: 120, y: 230 },
    { name: 'Smart Cities\nData Space', color: '#f97316', x: 360, y: 265 },
    { name: 'Agri-food\nData Space', color: '#f97316', x: 600, y: 230 },
  ];
  const gaia = { x: 360, y: 160 };
  return (
    <svg viewBox="0 0 720 330" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>European Data Spaces — Arquitectura de Federação (Gaia-X / IDSA)</text>
      <defs>
        <marker id="arrowDS" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#6b7280" />
        </marker>
      </defs>

      {/* Lines first so circle renders on top */}
      {spaces.map((s, i) => (
        <line key={i} x1={s.x} y1={s.y} x2={gaia.x} y2={gaia.y} stroke={s.color} strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowDS)" />
      ))}

      {/* Central Gaia-X hub — drawn after lines so it sits on top */}
      <circle cx={gaia.x} cy={gaia.y} r="52" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
      <text x={gaia.x} y={gaia.y - 14} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>Gaia-X</text>
      <text x={gaia.x} y={gaia.y + 2} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Trust Framework</text>
      <text x={gaia.x} y={gaia.y + 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">IDSA Connector</text>
      <text x={gaia.x} y={gaia.y + 30} textAnchor="middle" fontSize="8" fill={color}>IDS + Policy Engine</text>

      {/* Space boxes — drawn after circle */}
      {spaces.map((s, i) => {
        const lines = s.name.split('\n');
        return (
          <g key={i}>
            <rect x={s.x - 64} y={s.y - 28} width={128} height={56} rx="8" fill="var(--bg-secondary)" stroke={s.color} strokeWidth="1.5" />
            {lines.map((l, li) => (
              <text key={li} x={s.x} y={s.y - 4 + li * 16} textAnchor="middle" fontSize="10" fontWeight={li === 0 ? '700' : '400'} fill={s.color}>{l}</text>
            ))}
          </g>
        );
      })}

      <rect x="30" y="300" width="660" height="24" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="313" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Data Act (2023) + Data Governance Act (2022): obrigação de partilha de dados do sector público · direito de portabilidade industrial</text>
      <text x="360" y="323" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">IDS Connector: encapsula políticas de uso nos próprios dados (ODRL/OWL) — soberania dos dados no publisher</text>
    </svg>
  );
}

export default function SC5() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 05</div>
      <h1 style={S.h1}>Plataformas & Governança de Dados</h1>
      <p style={S.lead}>
        FIWARE com NGSI-LD é o standard de facto para plataformas de smart cities na Europa.
        Os European Data Spaces federados por Gaia-X e IDSA resolvem a fragmentação entre
        domínios. Open Data em formato FAIR (GTFS, GeoJSON, SPARQL endpoints) multiplica
        o valor dos dados públicos ao permitir inovação cívica sem fricção.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. NGSI-LD — O Standard de Contexto Urbano</h2>
        <NGSILDSvg />
        <h3 style={S.h3}>JSON-LD, Linked Data e queries semânticas</h3>
        <p style={S.p}>
          NGSI-LD (Next Generation Service Interface — Linked Data, ETSI GS CIM 009) é a
          evolução do NGSI-v2 que integra conceitos de Linked Data / RDF. Cada entidade
          tem um @context que mapeia os seus atributos para URIs semânticas globais —
          garantindo que "velocidade" em Lisboa e "velocidade" em Barcelona são a mesma
          propriedade semântica, interoperáveis sem transformação.
        </p>
        <div style={S.highlight}>
          <strong>Geo-queries no Orion Context Broker:</strong> NGSI-LD suporta queries
          geoespaciais nativas — "devolve todas as entidades TrafficFlowObserved num raio
          de 500m da Praça do Comércio" — usando GeoJSON como formato de localização.
          O Orion usa MongoDB com índices geoespaciais 2dsphere para estas queries
          com latência &lt;50ms mesmo com milhões de entidades.
        </div>
        <div style={S.highlight}>
          <strong>Pub/Sub e Notificações:</strong> aplicações subscrevem a padrões de
          mudança em entidades — "notifica-me quando TrafficFlowObserved.intensity &gt; 1000
          em qualquer sensor da Avenida da Liberdade". O broker envia HTTP POST ou AMQP
          à aplicação em &lt;100ms após a mudança. Permite arquitecturas event-driven
          sem polling.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Stack FIWARE em Produção</h2>
        <FIWAREStackSVG />
        <h3 style={S.h3}>Componentes, data flow e deploymento</h3>
        <p style={S.p}>
          Uma instância FIWARE completa para uma cidade média (500K hab.) corre tipicamente
          em Kubernetes com Helm Charts oficiais. O data flow vai dos sensores IoT
          (MQTT via IoT Agent) → Orion Context Broker (estado actual) → Cygnus (persist
          para histórico) → QuantumLeap/CrateDB (time-series) → Grafana/Dashboard (visualização).
        </p>
        <div style={S.highlight}>
          <strong>IoT Agent MQTT:</strong> bridge protocol entre MQTT (nativo dos sensores)
          e NGSI-LD (Orion). Cada sensor publica em <code>/ul/TOKEN/DEVICE_ID/attrs</code>
          (Ultralight 2.0) ou JSON. O IoT Agent transforma automaticamente e cria/actualiza
          a entidade NGSI-LD correspondente no Orion.
        </div>
        <div style={S.highlight}>
          <strong>QuantumLeap + CrateDB:</strong> alternativa moderna ao STH-Comet.
          CrateDB é uma base de dados SQL distribuída com suporte nativo a time-series,
          geoespacial (PostGIS-compatible) e JSON. Suporta queries como:
          <code>SELECT avg(intensity), time_bucket('1h', observedAt) FROM TrafficFlow WHERE refRoadSegment='A5' GROUP BY 2</code>
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Componente</th><th style={S.th}>Docker Image</th><th style={S.th}>RAM típica</th><th style={S.th}>Função</th></tr></thead>
          <tbody>
            {[
              ['Orion CB', 'fiware/orion-ld:1.4.0', '2–4 GB', 'Context management + NGSI-LD API'],
              ['MongoDB', 'mongo:6.0', '4–8 GB', 'Storage do Orion (entidades + subscriptions)'],
              ['IoT Agent MQTT', 'fiware/iotagent-ul:2.4', '512 MB', 'Protocol bridge MQTT → NGSI-LD'],
              ['QuantumLeap', 'fiware/quantum-leap:0.9', '1 GB', 'NGSI → CrateDB sink'],
              ['CrateDB', 'crate:5.4', '8–16 GB', 'Time-series + geoespacial SQL'],
              ['Keyrock', 'fiware/idm:8.3', '512 MB', 'OAuth2 / OpenID Connect IdM'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. European Data Spaces e Soberania dos Dados</h2>
        <DataSpacesSVG />
        <h3 style={S.h3}>IDSA Connector, Gaia-X e políticas de uso nos dados</h3>
        <p style={S.p}>
          O maior desafio das smart cities não é a falta de dados — é a sua fragmentação
          em silos sectoriais e institucionais. Os European Data Spaces resolvem isto através
          de um modelo de federação onde os dados permanecem no publisher mas são acessíveis
          a terceiros autorizados com políticas de uso codificadas nos próprios dados.
        </p>
        <div style={S.highlight}>
          <strong>IDS Connector (International Data Spaces):</strong> componente de software
          que encapsula dados com políticas ODRL (Open Digital Rights Language).
          Cada dataset inclui metadados: quem pode aceder, para que fins, por quanto tempo,
          se pode redistribuir, se pode usar para treino ML. O Policy Enforcement Point
          verifica estas políticas em cada acesso — sem depender de contrato bilateral.
        </div>
        <div style={S.highlight}>
          <strong>Gaia-X Trust Framework:</strong> não é uma cloud específica mas um framework
          de certificação. Provedores de dados e serviços declaram os seus atributos
          (jurisdição, políticas de segurança, conformidade GDPR) em Self-Descriptions
          assinadas digitalmente. Um Federated Catalogue agrega estas self-descriptions
          e permite descoberta de dados entre participantes.
        </div>
        <div style={S.highlight}>
          <strong>Open Data FAIR em Smart Cities:</strong> dados de transportes (GTFS/GTFS-RT),
          qualidade do ar (OpenAQ), tráfego (UTD19 dataset — 2 anos de dados de 135 cidades)
          e energia (OpenPowerSystemData) estão disponíveis sob licença CC BY 4.0.
          A Comissão Europeia estima que o open data do sector público gera 184 B€/ano
          em valor económico na UE — maioritariamente via inovação de terceiros sobre dados públicos.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Standard / Dataset</th><th style={S.th}>Domínio</th><th style={S.th}>Formato</th><th style={S.th}>Utilizadores principais</th></tr></thead>
          <tbody>
            {[
              ['GTFS / GTFS-RT', 'Transportes públicos', 'CSV + Protobuf', 'Google Maps, Citymapper, Moovit'],
              ['FIWARE Smart Data Models', 'Multi-domínio urbano', 'JSON-LD / NGSI-LD', '500+ cidades europeias'],
              ['OpenAQ', 'Qualidade do ar', 'JSON REST API', 'OMS, municípios, investigação'],
              ['UTD19', 'Tráfego urbano', 'CSV (parquet)', 'Investigação ST-GNN (135 cidades)'],
              ['OpenStreetMap', 'Cartografia base', 'OSM XML / GeoJSON', 'Virtually all apps + ML spatial'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Síntese final: FIWARE com NGSI-LD resolve a interoperabilidade técnica dentro de uma
          cidade. Os European Data Spaces e Gaia-X resolvem a interoperabilidade entre cidades
          e sectores com soberania dos dados preservada. Open Data FAIR multiplica o valor
          público dos dados ao permitir inovação externa sem fricção. A governança de dados
          é tão crítica quanto a tecnologia — a smart city do futuro é uma cidade que governa
          os seus dados como bem público.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>NGSI-LD — O Standard de Contexto Urbano</strong> — padrão ETSI que integra Linked Data/RDF nas entidades de contexto urbano, garantindo interoperabilidade semântica entre cidades e suportando geo-queries com latência inferior a 50ms via MongoDB 2dsphere.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Stack FIWARE em Produção</strong> — ecossistema de componentes open-source (Orion Context Broker, IoT Agents, QuantumLeap, CrateDB, Keyrock) que corre em Kubernetes e cobre o fluxo completo de sensor IoT a dashboard, utilizado em mais de 500 cidades europeias.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>European Data Spaces e Soberania dos Dados</strong> — Gaia-X e os conectores IDSA permitem partilhar dados entre sectores mantendo a soberania do publicador, com políticas ODRL codificadas nos próprios dados; a Comissão Europeia estima que o open data público gera 184 mil milhões de euros por ano em valor económico na UE.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
