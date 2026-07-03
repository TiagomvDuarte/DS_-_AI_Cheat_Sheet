import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Geospatial';

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

function OSMnxSvg() {
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">OSMnx — Análise de Redes Viárias a partir do OpenStreetMap</text>
      {/* road network */}
      <rect x="10" y="24" width="260" height="135" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="140" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Rede Viária (Grafo)</text>
      {/* roads */}
      <line x1="30" y1="80" x2="100" y2="60" stroke="#f97316" strokeWidth="2.5" opacity="0.8" />
      <line x1="100" y1="60" x2="180" y2="75" stroke="#f97316" strokeWidth="2" opacity="0.7" />
      <line x1="180" y1="75" x2="250" y2="55" stroke="#f97316" strokeWidth="2.5" opacity="0.8" />
      <line x1="100" y1="60" x2="120" y2="120" stroke="#f97316" strokeWidth="1.5" opacity="0.6" />
      <line x1="180" y1="75" x2="200" y2="130" stroke="#f97316" strokeWidth="1.5" opacity="0.6" />
      <line x1="120" y1="120" x2="200" y2="130" stroke="#f97316" strokeWidth="2" opacity="0.7" />
      <line x1="50" y1="120" x2="120" y2="120" stroke="#f97316" strokeWidth="1.5" opacity="0.5" />
      {/* nodes */}
      {[[30,80],[100,60],[180,75],[250,55],[120,120],[200,130],[50,120]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#f97316" opacity="0.9" />
      ))}
      <text x="140" y="152" textAnchor="middle" fill="#f97316" fontSize="8">Nós = intersecções. Arestas = segmentos de rua com atributos (comprimento, vel., lanes)</text>
      {/* metrics */}
      <rect x="280" y="24" width="270" height="135" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="415" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Métricas de Redes Viárias</text>
      {[
        { metric: 'Betweenness Centrality', desc: 'Nós em mais caminhos curtos', c: '#f97316' },
        { metric: 'Closeness Centrality', desc: 'Distância média a todos os nós', c: '#f97316' },
        { metric: 'Avg Node Connectivity', desc: 'Robustez da rede a remoção', c: '#f97316' },
        { metric: 'Street Network Circuity', desc: 'Ratio distância real/euclidiana', c: '#f97316' },
        { metric: 'Intersection Density', desc: 'Intersecções por km² (walkability)', c: '#f97316' },
      ].map((m, i) => (
        <g key={i}>
          <rect x="288" y={50 + i * 22} width="254" height="18" fill={i % 2 === 0 ? 'var(--bg-secondary)' : 'transparent'} rx="2" />
          <rect x="288" y={50 + i * 22} width="4" height="18" fill={m.c} rx="1" />
          <text x="298" y={63 + i * 22} fill={m.c} fontSize="8.5" fontWeight="700">{m.metric}</text>
          <text x="298" y={63 + i * 22 + 11} fill="#f97316" fontSize="7">{m.desc}</text>
        </g>
      ))}
    </svg>
  );
}

function MobilitySvg() {
  return (
    <svg viewBox="0 0 560 170" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="170" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Análise de Mobilidade Urbana — Fontes de Dados e Métricas</text>
      {[
        { src: 'GPS Flotilha', ex: 'Uber, Waze, HERE', metrica: 'Velocidade, densidade OD', c: '#f97316', x: 10 },
        { src: 'GTFS Transit', ex: 'Metro, Bus, Comboio', metrica: 'Acessibilidade isócrona', c: '#f97316', x: 193 },
        { src: 'Mobile Data', ex: 'Signaling, CDRs', metrica: 'Origem-Destino, home-work', c: '#f97316', x: 376 },
      ].map(d => (
        <g key={d.x}>
          <rect x={d.x} y="24" width="175" height="115" fill={d.c} rx="6" opacity="0.09" />
          <rect x={d.x} y="24" width="175" height="115" fill="none" stroke={d.c} strokeWidth="1.5" rx="6" />
          <text x={d.x + 87} y="42" textAnchor="middle" fill={d.c} fontSize="10" fontWeight="700">{d.src}</text>
          <text x={d.x + 87} y="60" textAnchor="middle" fill="#fb923c" fontSize="8.5">{d.ex}</text>
          <line x1={d.x + 15} y1="68" x2={d.x + 160} y2="68" stroke={d.c} strokeWidth="0.7" opacity="0.3" />
          <text x={d.x + 87} y="85" textAnchor="middle" fill="#f97316" fontSize="8">{d.metrica}</text>
        </g>
      ))}
      <text x="280" y="153" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Isócronas: áreas alcançáveis em X minutos (a pé, carro, transporte público)</text>
      <text x="280" y="165" textAnchor="middle" fill="#fb923c" fontSize="8.5">Ferramentas: OpenRouteService, Valhalla, OSRM, r5py (GTFS + OSM multi-modal)</text>
    </svg>
  );
}

function HeatIslandSvg() {
  return (
    <svg viewBox="0 0 560 170" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="170" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Urban Heat Island (UHI) — Temperatura de Superfície (LST)</text>
      {/* LST gradient */}
      <rect x="10" y="24" width="265" height="130" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="142" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Land Surface Temperature (LST)</text>
      {[0,1,2,3,4,5,6,7].map(col => [0,1,2,3,4,5].map(row => {
        const dist = Math.sqrt((col - 3.5) ** 2 + (row - 2.5) ** 2);
        const temp = Math.max(0, 1 - dist / 4);
        const r = Math.round(30 + temp * 200);
        const g = Math.round(80 - temp * 60);
        return <rect key={`${col}-${row}`} x={18 + col * 31} y={48 + row * 18} width="29" height="16" fill={`rgb(${r},${g},20)`} opacity={0.5 + temp * 0.5} rx="2" />;
      }))}
      <text x="142" y="152" textAnchor="middle" fill="#f97316" fontSize="8">Centro urbano 5-8°C mais quente que periferia rural</text>
      {/* factors */}
      <rect x="285" y="24" width="267" height="130" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="418" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Factores UHI e Mitigação</text>
      {[
        { fac: 'Asfalto / betão (alta absorção)', mit: '→ pavimento permeável', c: '#f97316' },
        { fac: 'Falta de vegetação (evap.)', mit: '→ arborização urbana', c: '#f97316' },
        { fac: 'Geometria cânion (retenção)', mit: '→ H/W ratio < 1', c: '#f97316' },
        { fac: 'Calor antropogénico (AC, tráfego)', mit: '→ edificios passivos', c: '#f97316' },
      ].map((f, i) => (
        <g key={i}>
          <rect x="293" y={50 + i * 26} width="251" height="20" fill={i % 2 === 0 ? 'var(--bg-secondary)' : 'transparent'} rx="2" />
          <rect x="293" y={50 + i * 26} width="4" height="20" fill={f.c} rx="1" />
          <text x="302" y={64 + i * 26} fill="#fb923c" fontSize="8">{f.fac}</text>
          <text x="302" y={64 + i * 26 + 10} fill={f.c} fontSize="7.5" fontStyle="italic">{f.mit}</text>
        </g>
      ))}
    </svg>
  );
}

function SmartCitySvg() {
  const layers = [
    { name: 'Sensores IoT', desc: 'Qualidade ar, ruído, tráfego, resíduos', c: '#f97316' },
    { name: 'Mobilidade', desc: 'Bicicletas, scooters, transporte público', c: '#f97316' },
    { name: 'Energia', desc: 'Smart grid, consumo por quarteirão', c: '#f97316' },
    { name: 'Segurança', desc: 'CCTV, iluminação adaptativa', c: '#f97316' },
    { name: 'Ambiente', desc: 'Inundações, UHI, qualidade do ar', c: '#f97316' },
    { name: 'Dados Abertos', desc: 'APIs câmara, OpenData portals', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 190" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="190" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Smart Cities — Camadas de Dados Urbanos</text>
      {layers.map((l, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 10 + col * 185;
        const y = 24 + row * 78;
        return (
          <g key={i}>
            <rect x={x} y={y} width="175" height="68" fill={l.c} rx="6" opacity="0.09" />
            <rect x={x} y={y} width="175" height="68" fill="none" stroke={l.c} strokeWidth="1.2" rx="6" />
            <rect x={x} y={y} width="5" height="68" fill={l.c} rx="2" />
            <text x={x + 15} y={y + 22} fill={l.c} fontSize="10" fontWeight="700">{l.name}</text>
            <text x={x + 15} y={y + 40} fill="#fb923c" fontSize="8.5">{l.desc}</text>
          </g>
        );
      })}
      <text x="280" y="185" textAnchor="middle" fill="#fb923c" fontSize="8.5">Digital Twin: réplica virtual da cidade com dados em tempo real — permite simular intervenções antes de as implementar.</text>
    </svg>
  );
}

export default function GEO6() {
  const mod = modules[5];
  return (
    <div style={S.page}>
      <Link to="/geospatial" style={S.back}>← Geospatial Intelligence</Link>
      <div style={S.badge}>MÓDULO 06</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. OpenStreetMap e OSMnx</h2>
        <div style={S.diagram}><OSMnxSvg /></div>
        <div style={S.highlight}>
          <strong>OpenStreetMap (OSM)</strong> é o "Wikipedia dos mapas" — uma base de dados geoespacial global editável pela comunidade com mais de 10 milhões de contribuidores. Contém redes viárias, edifícios, uso do solo, pontos de interesse, hidrografia e muito mais, com cobertura global e actualização quasi-real-time. Os dados são licenciados sob ODbL (Open Database License) — gratuitos para uso comercial com atribuição.
        </div>
        <p style={S.p}>
          <strong>OSMnx</strong> é a biblioteca Python de referência para descarregar e analisar redes viárias do OSM. Permite descarregar o grafo viário de qualquer cidade ou polígono no mundo, calcular caminhos mais curtos, isócronas, e métricas de rede como betweenness centrality e closeness centrality. O grafo resultante é compatível com NetworkX para análise de grafos e com GeoPandas para análise geoespacial.
        </p>
        <div style={S.note}>Overpass API: permite queries complexas ao OSM — ex: "todos os hospitais a menos de 500m de autoestrada em Portugal". A linguagem Overpass QL é específica do OSM. O osmnx.features_from_place() usa a Overpass API internamente para descarregar features por tipo (amenity, highway, landuse, etc.).</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Mobilidade Urbana e Análise de Fluxos</h2>
        <div style={S.diagram}><MobilitySvg /></div>
        <div style={S.highlight}>
          A <strong>análise de mobilidade urbana</strong> usa dados de GPS de frotas, transpondedores de portagem, cartões de transporte público e dados de sinalização de telemóveis para compreender padrões de movimento. As <strong>matrizes Origem-Destino (OD)</strong> quantificam o número de deslocações entre cada par de zonas — base do planeamento de transportes. A sua visualização usa flow maps ou chord diagrams.
        </div>
        <p style={S.p}>
          As <strong>isócronas</strong> definem as áreas alcançáveis a partir de um ponto em X minutos de viagem, por modo de transporte. São fundamentais para análise de acessibilidade: "qual a percentagem da população de Lisboa a menos de 15 minutos de um hospital de carro? e de transporte público?". Ferramentas: OpenRouteService (API gratuita), Valhalla (auto-hospedado), r5py (Python wrapper para R5 multi-modal routing com GTFS + OSM).
        </p>
        <div style={S.note}>GTFS (General Transit Feed Specification): formato standard de dados de transporte público — horários, rotas, paragens. Quase todas as câmaras municipais e operadores publicam GTFS. A biblioteca gtfs-kit processa feeds GTFS; combinado com OSMnx permite calcular tempos de viagem multi-modal reais.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Urban Heat Island e Ambiente Urbano</h2>
        <div style={S.diagram}><HeatIslandSvg /></div>
        <div style={S.highlight}>
          O <strong>Urban Heat Island (UHI)</strong> é o fenómeno pelo qual as cidades têm temperaturas superiores às zonas rurais envolventes — tipicamente 2-8°C mais quentes durante noites de verão. A causa principal é a substituição de vegetação e solo permeável por superfícies impermeáveis e escuras (asfalto, betão) que absorvem mais radiação solar e libertam calor lentamente durante a noite. A detecção remota é fundamental: o Landsat 8/9 e o MODIS medem a <strong>Land Surface Temperature (LST)</strong> com resolução de 30m e 1km respectivamente.
        </div>
        <p style={S.p}>
          A análise de UHI integra dados de satélite (LST), dados de uso do solo (cobertura impermeável, NDVI), geometria urbana (Height-to-Width ratio dos cânions urbanos) e dados meteorológicos. As estratégias de mitigação comprovadas incluem: arborização urbana (redução de 2-4°C via sombra e evapotranspiração), telhados verdes, pavimentos permeáveis e "cool roofs" (alta reflectividade). O mapeamento de zonas de vulnerabilidade ao calor é crítico para planos de adaptação climática.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Smart Cities e Digital Twins</h2>
        <div style={S.diagram}><SmartCitySvg /></div>
        <div style={S.highlight}>
          Uma <strong>Smart City</strong> integra sensores IoT, dados em tempo real e análise geoespacial para melhorar a eficiência urbana e a qualidade de vida. A base técnica é uma plataforma de dados urbanos (Urban Data Platform) que agrega fluxos de dados de múltiplas fontes: sensores de qualidade do ar, contadores de tráfego, medidores inteligentes de energia, câmaras de CCTV e dados de transporte público em tempo real.
        </div>
        <p style={S.p}>
          O <strong>Digital Twin</strong> urbano é uma réplica virtual dinâmica da cidade que integra geometria 3D (CityGML, IFC), dados de sensores em tempo real e modelos de simulação. Permite simular cenários antes de implementar: "se fecharmos esta rua ao tráfego, qual o impacto na mobilidade geral?"; "qual o efeito de plantar 1000 árvores nestes locais na temperatura média do bairro?". Plataformas: NVIDIA Omniverse, Cesium, Bentley iTwin, ou soluções open-source baseadas em 3D Tiles.
        </p>
        <div style={S.note}>Dados abertos urbanos: o portal dados.gov.pt tem dados geoespaciais de Portugal; o Eurostat publica dados NUTS regionais; o Copenhagen City Data Exchange e o Barcelona Open Data são referências europeias de dados urbanos abertos. A maioria inclui shapefiles, GeoJSON e APIs REST.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Walkability e Métricas de Qualidade Urbana</h2>
        <div style={S.highlight}>
          A <strong>walkability</strong> (índice de caminhabilidade) quantifica quão favorável é o ambiente urbano para deslocações a pé. O Walk Score e índices similares combinam: densidade de intersecções (mais intersecções = mais caminhos alternativos = melhor), mistura de usos do solo (residencial + comércio + serviços), qualidade das passeios e segurança percebida. Com OSMnx, é possível calcular métricas de walkability para qualquer cidade: intersecção density, node connectivity, average block size.
        </div>
        <p style={S.p}>
          O <strong>índice de segregação espacial</strong> (dissimilarity index, isolation index) quantifica como grupos populacionais (por rendimento, etnia, acesso a serviços) estão distribuídos no espaço urbano. Com dados censitários por secção estatística e GeoPandas, é possível calcular padrões de segregação, identificar desertos alimentares (food deserts), zonas com fraco acesso a espaços verdes, ou áreas com maior risco de inundação sobrepostas com populações vulneráveis — análises críticas para políticas de equidade urbana.
        </p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>OpenStreetMap e OSMnx</strong> — OSM é o Wikipedia dos mapas — dados abertos de estradas, edifícios, POIs contribuídos globalmente; OSMnx (Boeing) descarrega e analisa redes de ruas como grafos NetworkX — permite calcular centrality, shortest paths e isócronas em qualquer cidade do mundo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Mobilidade Urbana e Análise de Fluxos</strong> — dados de mobilidade (GPS, bilhetes de transporte, mobile phone data) revelam padrões de origem-destino; matrizes OD e mapas de fluxo visualizam onde as pessoas se movem; Origin-Destination clustering identifica padrões de commuting e permite optimizar transporte público.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Urban Heat Island e Ambiente Urbano</strong> — UHI é o fenómeno de cidades serem mais quentes que zonas rurais circundantes (até +8°C) por superfícies impermeáveis e ausência de vegetação; SUHI (Surface UHI) medido com Landsat LST; ML correlaciona NDVI, impermeabilidade e morfologia urbana com temperatura — guia planeamento de espaços verdes.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Smart Cities e Digital Twins</strong> — digital twins urbanos (Singapura Virtual, Helsingborg) integram dados de sensores IoT, GIS, simulação de tráfego e energia num modelo dinâmico da cidade; permitem simular intervenções de planeamento antes de as implementar — reduzem custo e risco de decisões urbanas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Walkability e Métricas de Qualidade Urbana</strong> — Walk Score e métricas de walkability combinam densidade de POIs, conectividade de ruas e declive numa pontuação por localização; correlacionam com saúde, emissões de carbono e preço de imobiliário — ferramentas como OSMnx permitem calcular métricas customizadas em qualquer cidade.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
