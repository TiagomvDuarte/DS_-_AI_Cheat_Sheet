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

function CRSSvg() {
  const items = [
    { name: 'WGS84 (EPSG:4326)', type: 'Geográfico', unit: 'Graus (°)', uso: 'GPS, armazenamento universal', c: '#f97316' },
    { name: 'Web Mercator (EPSG:3857)', type: 'Projecção', unit: 'Metros', uso: 'Google Maps, tiles web', c: '#f97316' },
    { name: 'UTM Zone 29N (EPSG:32629)', type: 'Projecção', unit: 'Metros', uso: 'Portugal continental', c: '#f97316' },
    { name: 'PT-TM06 (EPSG:3763)', type: 'Projecção', unit: 'Metros', uso: 'Cartografia oficial PT', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 185" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Sistemas de Referência de Coordenadas (CRS)</text>
      {items.map((it, i) => {
        const y = 28 + i * 36;
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="30" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="4" />
            <rect x="8" y={y} width="5" height="30" fill={it.c} rx="2" />
            <text x="22" y={y + 19} fill={it.c} fontSize="10" fontWeight="700">{it.name}</text>
            <text x="240" y={y + 19} fill="#fb923c" fontSize="9">{it.type}</text>
            <text x="330" y={y + 19} fill="#fb923c" fontSize="9">{it.unit}</text>
            <text x="420" y={y + 19} fill="#f97316" fontSize="9">{it.uso}</text>
          </g>
        );
      })}
      <text x="280" y="178" textAnchor="middle" fill="#fb923c" fontSize="8.5">Regra: armazenar em WGS84, calcular distâncias/áreas em projecção métrica local. Nunca medir distâncias em graus.</text>
    </svg>
  );
}

function VectorRasterSvg() {
  return (
    <svg viewBox="0 0 560 200" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Vector vs Raster — Modelos de Dados Geoespaciais</text>
      <rect x="8" y="24" width="265" height="152" fill="#f97316" rx="6" opacity="0.07" />
      <rect x="8" y="24" width="265" height="152" fill="none" stroke="#f97316" strokeWidth="1.5" rx="6" />
      <text x="140" y="40" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">VECTOR</text>
      <circle cx="60" cy="72" r="7" fill="#f97316" opacity="0.8" />
      <text x="80" y="75" fill="#fb923c" fontSize="9">Point — coordenada exacta</text>
      <text x="80" y="86" fill="#f97316" fontSize="8">ex: estação meteo, POI</text>
      <path d="M 45,112 L 75,102 L 110,117 L 140,105" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <text x="155" y="112" fill="#fb923c" fontSize="9">Line — rede viária, rios</text>
      <polygon points="45,150 80,136 120,146 105,162 50,160" fill="#f97316" opacity="0.35" stroke="#f97316" strokeWidth="1.5" />
      <text x="135" y="155" fill="#fb923c" fontSize="9">Polygon — área, município</text>
      <rect x="285" y="24" width="267" height="152" fill="#f59e0b" rx="6" opacity="0.07" />
      <rect x="285" y="24" width="267" height="152" fill="none" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
      <text x="418" y="40" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">RASTER</text>
      {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => {
        const v = Math.sin(r * 1.3 + c * 0.9) * 0.5 + 0.5;
        return <rect key={`${r}-${c}`} x={305 + c * 21} y={48 + r * 21} width="19" height="19" fill="#f59e0b" opacity={0.15 + v * 0.7} stroke="var(--bg-secondary)" strokeWidth="0.5" />;
      }))}
      <text x="418" y="162" textAnchor="middle" fill="#fb923c" fontSize="8.5">Grid de pixels — cada célula = 1 valor</text>
      <text x="418" y="174" textAnchor="middle" fill="#fb923c" fontSize="8.5">(elevação, temperatura, reflectância)</text>
    </svg>
  );
}

function FormatsSvg() {
  const rows = [
    { name: 'GeoJSON', ext: '.geojson', perf: 'Baixa', uso: 'APIs web, browser', c: '#f97316' },
    { name: 'Shapefile', ext: '.shp + ...', perf: 'Média', uso: 'ESRI / legado GIS', c: '#f97316' },
    { name: 'GeoPackage', ext: '.gpkg', perf: 'Alta', uso: 'QGIS, substitui SHP', c: '#f97316' },
    { name: 'GeoParquet', ext: '.parquet', perf: 'Muito Alta', uso: 'Big data, cloud, DuckDB', c: '#f97316' },
    { name: 'GeoTIFF / COG', ext: '.tif', perf: 'Alta', uso: 'Raster satélite, DEM', c: '#f97316' },
  ];
  const perfColor = p => p === 'Muito Alta' ? '#f97316' : p === 'Alta' ? '#fbbf24' : p === 'Média' ? '#f97316' : '#fb923c';
  return (
    <svg viewBox="0 0 560 205" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="195" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Formatos de Dados Geoespaciais</text>
      {['Formato','Extensão','Performance','Uso típico'].map((h, i) => {
        const xs = [16, 145, 265, 360];
        return <text key={i} x={xs[i]} y="30" fill="#f97316" fontSize="9" fontWeight="700">{h}</text>;
      })}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {rows.map((r, i) => {
        const y = 40 + i * 30;
        const xs = [16, 145, 265, 360];
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="26" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <rect x="8" y={y} width="5" height="26" fill={r.c} rx="1" />
            <text x={xs[0]+8} y={y+17} fill={r.c} fontSize="10" fontWeight="700">{r.name}</text>
            <text x={xs[1]} y={y+17} fill="#fb923c" fontSize="9" fontFamily="monospace">{r.ext}</text>
            <text x={xs[2]} y={y+17} fill={perfColor(r.perf)} fontSize="9" fontWeight="600">{r.perf}</text>
            <text x={xs[3]} y={y+17} fill="#fb923c" fontSize="9">{r.uso}</text>
          </g>
        );
      })}
      <text x="280" y="200" textAnchor="middle" fill="#fb923c" fontSize="8.5">GeoParquet (2023): colunar + GeoArrow. Leituras 10-100x mais rápidas que GeoJSON. Suporte nativo DuckDB e Pandas 2.0.</text>
    </svg>
  );
}

function SpatialOpsSvg() {
  return (
    <svg viewBox="0 0 560 155" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="155" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="14" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Operações Espaciais — Predicados e Transformações</text>
      {/* Buffer */}
      <circle cx="65" cy="80" r="26" fill="#f97316" opacity="0.12" stroke="#f97316" strokeWidth="1.2" strokeDasharray="4,2" />
      <circle cx="65" cy="80" r="9" fill="#f97316" opacity="0.7" />
      <text x="65" y="118" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Buffer</text>
      <text x="65" y="129" textAnchor="middle" fill="#f97316" fontSize="7.5">zona de distância</text>
      {/* Intersect */}
      <ellipse cx="168" cy="80" rx="22" ry="18" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1.2" />
      <ellipse cx="188" cy="80" rx="22" ry="18" fill="#f97316" opacity="0.25" stroke="#f97316" strokeWidth="1.2" />
      <ellipse cx="178" cy="80" rx="10" ry="12" fill="#fb923c" opacity="0.6" />
      <text x="178" y="110" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Intersect</text>
      <text x="178" y="121" textAnchor="middle" fill="#f97316" fontSize="7.5">área comum</text>
      {/* Union */}
      <ellipse cx="283" cy="80" rx="21" ry="17" fill="#f59e0b" opacity="0.35" stroke="#f59e0b" strokeWidth="1.2" />
      <ellipse cx="303" cy="80" rx="21" ry="17" fill="#f59e0b" opacity="0.35" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="293" y="110" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">Union</text>
      <text x="293" y="121" textAnchor="middle" fill="#f97316" fontSize="7.5">área combinada</text>
      {/* Dissolve */}
      <rect x="380" y="65" width="28" height="22" fill="#f97316" opacity="0.3" stroke="#f97316" strokeWidth="1" />
      <rect x="408" y="70" width="28" height="22" fill="#f97316" opacity="0.3" stroke="#f97316" strokeWidth="1" />
      <rect x="394" y="78" width="30" height="14" fill="#f97316" opacity="0.5" />
      <text x="408" y="110" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Dissolve</text>
      <text x="408" y="121" textAnchor="middle" fill="#f97316" fontSize="7.5">agregar por atributo</text>
      {/* Clip */}
      <rect x="468" y="60" width="55" height="42" fill="#f97316" opacity="0.1" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
      <polygon points="473,102 510,63 530,88 505,104" fill="#f97316" opacity="0.5" />
      <text x="495" y="120" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Clip</text>
      <text x="495" y="131" textAnchor="middle" fill="#f97316" fontSize="7.5">recortar por máscara</text>
      <text x="280" y="148" textAnchor="middle" fill="#fb923c" fontSize="8">Predicados: contains, within, intersects, touches, crosses, overlaps, disjoint — modelo topológico DE-9IM (OGC).</text>
    </svg>
  );
}

export default function GEO1() {
  const mod = modules[0];
  return (
    <div style={S.page}>
      <Link to="/geospatial" style={S.back}>← Geospatial Intelligence</Link>
      <div style={S.badge}>MÓDULO 01</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Sistemas de Referência de Coordenadas</h2>
        <div style={S.diagram}><CRSSvg /></div>
        <div style={S.highlight}>
          Um <strong>Sistema de Referência de Coordenadas (CRS)</strong> define como coordenadas numéricas se mapeiam para posições reais na superfície terrestre. A Terra não é uma esfera perfeita mas um elipsoide achatado nos polos — o <strong>datum</strong> define os parâmetros exactos desse elipsoide. O WGS84 é o datum global do GPS e de praticamente todos os dados modernos. Ao importar dados de fontes diferentes, verificar sempre que o CRS coincide antes de qualquer análise espacial.
        </div>
        <p style={S.p}>
          <strong>Projecções cartográficas</strong> convertem a superfície curva da Terra para um plano 2D, introduzindo sempre distorções. A projecção de Mercator preserva ângulos (conforme) mas distorce áreas dramaticamente — a Gronelândia aparece maior que África, quando é 14x mais pequena. As projecções <strong>Equal Area</strong> (Albers, Equal Earth) preservam áreas correctas e são obrigatórias em análises de densidade ou uso do solo. Para Portugal continental, o sistema oficial é o <strong>PT-TM06 / ETRS89 (EPSG:3763)</strong>.
        </p>
        <div style={S.note}>Erro comum: calcular distâncias em graus (WGS84). Um grau de latitude equivale a ~111 km, mas um grau de longitude varia de ~111 km no equador a 0 km nos polos. Sempre reprojectar para UTM ou projecção métrica local antes de calcular distâncias, áreas ou buffers.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Vector vs Raster — Modelos de Dados</h2>
        <div style={S.diagram}><VectorRasterSvg /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.9rem' }}>
          <p style={S.p}>
            <strong>Dados Vector</strong> representam geometrias discretas com precisão arbitrária: pontos (coordenada exacta), linhas (sequência de vértices) e polígonos (anéis fechados). Cada geometria tem atributos numa tabela associada. Ideais para entidades com fronteiras definidas: municípios, redes viárias, parcelas. A biblioteca Shapely implementa o modelo OGC em Python.
          </p>
          <p style={S.p}>
            <strong>Dados Raster</strong> dividem o espaço numa grelha regular de células, cada uma com um valor numérico. A resolução define o tamanho de cada célula (10m, 30m, 1km). Ideais para fenómenos contínuos: elevação (DEM), temperatura, imagens de satélite. O GeoTIFF inclui metadados CRS e georreferenciação embutidos.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Formatos de Dados Geoespaciais</h2>
        <div style={S.diagram}><FormatsSvg /></div>
        <div style={S.highlight}>
          O <strong>Shapefile</strong> (ESRI, 1998) é legado — usa 3 a 7 ficheiros separados, limita nomes de campos a 10 caracteres e não suporta valores NULL correctamente. O seu substituto moderno é o <strong>GeoPackage</strong> (.gpkg): um único ficheiro SQLite com múltiplas camadas e tipos de geometria mistos. Para análise em larga escala, o <strong>GeoParquet</strong> é revolucionário — formato colunar com suporte a geometrias, leituras 10-100x mais rápidas e integração com DuckDB.
        </div>
        <div style={S.note}>Cloud-Optimized GeoTIFF (COG): permite leitura parcial de ficheiros raster remotos via HTTP range requests. Ferramentas como STAC indexam colecções de COGs — base do acesso a dados Sentinel, Landsat e MODIS em cloud.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. GeoPandas — GeoDataFrame</h2>
        <div style={S.highlight}>
          <strong>GeoPandas</strong> estende o Pandas com uma coluna de geometria especial (GeoSeries) e operações espaciais integradas. Um GeoDataFrame é essencialmente um DataFrame com uma coluna geometry do tipo Shapely e um atributo .crs. As operações fundamentais incluem: <strong>.to_crs()</strong> para reprojecção, <strong>.buffer()</strong> para criar zonas de distância, <strong>.sjoin()</strong> para spatial join baseado em predicados espaciais, e <strong>.dissolve()</strong> para agregar geometrias por atributo.
        </div>
        <p style={S.p}>
          O <strong>spatial join</strong> combina dois GeoDataFrames com base numa relação espacial (intersects, within, contains, nearest). Por exemplo, para cada estação meteorológica, encontrar o município em que está contida — um sjoin com predicado "within". O <strong>dissolve</strong> agrega múltiplas geometrias numa só: dissolver as 308 freguesias de Portugal nos 278 municípios, somando os atributos de população.
        </p>
        <div style={S.note}>Performance: para datasets grandes, usar Shapely 2.0 que opera sobre arrays NumPy de geometrias com operações vectorizadas. O STRTree permite queries espaciais em O(log n) em vez de O(n).</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Tipos de Geometria e Operações Espaciais</h2>
        <div style={S.diagram}><SpatialOpsSvg /></div>
        <div style={S.highlight}>
          As <strong>operações de conjunto</strong> (intersect, union, difference, symmetric difference) seguem a álgebra de conjuntos aplicada a geometrias. O <strong>buffer</strong> cria uma zona de distância — fundamental para análises de proximidade ("quais os estabelecimentos a menos de 500m de uma paragem de metro?"). O <strong>clip</strong> recorta geometrias a uma área de estudo, reduzindo dados a processar.
        </div>
        <p style={S.p}>
          <strong>Predicados topológicos (DE-9IM):</strong> <em>contains</em> — A contém B completamente; <em>within</em> — B está dentro de A; <em>intersects</em> — partilham pelo menos um ponto; <em>touches</em> — partilham apenas fronteira; <em>crosses</em> — interiores cruzam-se; <em>overlaps</em> — partilham interior mas nenhum contém o outro. Base do filtro espacial em GeoPandas e PostGIS.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. QGIS e Ecossistema de Ferramentas</h2>
        <p style={S.p}>
          <strong>QGIS</strong> é o software GIS open-source de referência. Suporta centenas de formatos vectoriais e raster, tem editor de modelação gráfica para workflows complexos e integração nativa com PostGIS. O QGIS Processing Toolbox expõe algoritmos do GRASS GIS e SAGA GIS. Para análise programática, o PyQGIS permite scripting Python dentro do QGIS.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.9rem' }}>
          <div style={S.note}><strong>PostGIS:</strong> extensão PostgreSQL que adiciona tipos geométricos e mais de 300 funções espaciais. ST_Within, ST_Distance, ST_Buffer, ST_Intersects directamente em SQL. Escala para centenas de milhões de geometrias.</div>
          <div style={S.note}><strong>Google Earth Engine (GEE):</strong> plataforma cloud para análise de imagens de satélite. Acesso a 70+ petabytes de dados históricos (Landsat desde 1972, Sentinel desde 2014) com processamento distribuído. API Python e JavaScript.</div>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Sistemas de Referência de Coordenadas</strong> — CRS definem como coordenadas (latitude, longitude, altitude) mapeiam para a superfície terrestre; WGS84 é o datum global (GPS); UTM projecta em zonas de 6° para minimizar distorção métrica — converter entre CRS sem atenção causa erros de dezenas a centenas de metros.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Vector vs Raster — Modelos de Dados</strong> — dados vectoriais representam features geográficas como pontos, linhas e polígonos com atributos — eficientes para dados discretos (estradas, edifícios); raster divide o espaço em células de valor uniforme — ideal para dados contínuos (temperatura, elevação, imagens de satélite).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Formatos de Dados Geoespaciais</strong> — Shapefile (legado ESRI), GeoJSON (web), GeoPackage (SQLite geoespacial), GeoTIFF (raster com CRS embutido) e Cloud-Optimized GeoTIFF (COG para acesso remoto) são os formatos principais — COG e Parquet geoespacial são o futuro para análise à escala.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>GeoPandas — GeoDataFrame</strong> — GeoPandas estende Pandas com uma coluna de geometria (Shapely) e operações espaciais (sjoin, dissolve, overlay); permite análise geoespacial em Python com sintaxe familiar — base de qualquer pipeline de GIS em Python.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Tipos de Geometria e Operações Espaciais</strong> — Point, LineString, Polygon e as suas variantes Multi* são os tipos base de Shapely; operações: buffer (zona de influência), intersection (sobreposição), union, difference e within — base de análise de vizinhança, catchment areas e análise de conflitos de uso do solo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>QGIS e Ecossistema de Ferramentas</strong> — QGIS é o SIG desktop open-source de referência; GDAL/OGR é a biblioteca de conversão e processamento de dados geoespaciais; PostGIS adiciona capacidades espaciais ao PostgreSQL; Google Earth Engine processa petabytes de dados de satélite na cloud — ecossistema rico e interoperável.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
