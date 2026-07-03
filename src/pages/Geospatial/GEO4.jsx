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

function H3GridSvg() {
  // Hexagonal grid approximation with SVG polygons
  const hexes = [
    { cx: 120, cy: 80, res: '8', area: '0.74 km²', color: '#f97316', opacity: 0.8 },
    { cx: 180, cy: 80, res: '8', area: '0.74 km²', color: '#f97316', opacity: 0.5 },
    { cx: 150, cy: 130, res: '8', area: '0.74 km²', color: '#f97316', opacity: 0.6 },
    { cx: 210, cy: 130, res: '8', area: '0.74 km²', color: '#f97316', opacity: 0.4 },
    { cx: 90,  cy: 130, res: '8', area: '0.74 km²', color: '#f97316', opacity: 0.7 },
  ];
  const hex = (cx, cy, r) => {
    const pts = Array.from({length: 6}, (_, i) => {
      const a = Math.PI / 180 * (60 * i - 30);
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return pts.join(' ');
  };
  const resolutions = [
    { res: 5, area: '252.9 km²', edge: '8.5 km', color: '#f97316' },
    { res: 7, area: '5.16 km²', edge: '1.2 km', color: '#f97316' },
    { res: 8, area: '0.74 km²', edge: '0.46 km', color: '#f97316' },
    { res: 9, area: '0.10 km²', edge: '0.17 km', color: '#f97316' },
    { res: 12, area: '0.00032 km²', edge: '10 m', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 185" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="185" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">H3 — Sistema Hierárquico de Indexação Hexagonal (Uber)</text>
      {/* hex grid */}
      <rect x="8" y="24" width="270" height="145" fill="rgba(249,115,22,0.06)" rx="6" />
      {hexes.map((h, i) => (
        <polygon key={i} points={hex(h.cx, h.cy, 35)} fill={h.color} opacity={h.opacity * 0.4} stroke={h.color} strokeWidth="1.5" />
      ))}
      <polygon points={hex(150, 100, 35)} fill="#f97316" opacity="0.6" stroke="#f97316" strokeWidth="2" />
      <text x="150" y="96" textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="700">res 8</text>
      <text x="150" y="108" textAnchor="middle" fill="#fb923c" fontSize="8">0.74 km²</text>
      {/* resolution table */}
      <rect x="288" y="24" width="264" height="145" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="420" y="40" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Resoluções H3</text>
      {resolutions.map((r, i) => (
        <g key={i}>
          <rect x="296" y={48 + i * 24} width="248" height="20" fill={i % 2 === 0 ? 'var(--bg-secondary)' : 'transparent'} rx="3" />
          <rect x="296" y={48 + i * 24} width="4" height="20" fill={r.color} rx="1" />
          <text x="307" y={62 + i * 24} fill={r.color} fontSize="9" fontWeight="700">Res {r.res}</text>
          <text x="360" y={62 + i * 24} fill="#fb923c" fontSize="9">{r.area}</text>
          <text x="460" y={62 + i * 24} fill="#f97316" fontSize="9">aresta: {r.edge}</text>
        </g>
      ))}
      <text x="280" y="178" textAnchor="middle" fill="#fb923c" fontSize="8.5">Cada hexágono tem 7 filhos no nível seguinte. K-ring(h, k): todos os hexágonos a distância k de h.</text>
    </svg>
  );
}

function SpatialFeaturesSvg() {
  const features = [
    { cat: 'Distância', ex: 'dist_centro (km), dist_metro (m)', c: '#f97316' },
    { cat: 'Densidade', ex: 'pop_km2, lojas_hex, incidentes_buffer', c: '#f97316' },
    { cat: 'Vizinhança', ex: 'avg_preco_1km, k5_crime_rate', c: '#f97316' },
    { cat: 'H3 Agg.', ex: 'trips_hex_h7, ndvi_hex_res9', c: '#f97316' },
    { cat: 'Lag Espacial', ex: 'W @ preco (média vizinhos)', c: '#f97316' },
    { cat: 'Topografia', ex: 'elevation, slope, aspect, TPI', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 190" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="190" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Feature Engineering Geoespacial — Categorias</text>
      {features.map((f, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = col === 0 ? 10 : 290;
        const y = 24 + row * 52;
        return (
          <g key={i}>
            <rect x={x} y={y} width="270" height="44" fill={f.c} rx="6" opacity="0.1" />
            <rect x={x} y={y} width="270" height="44" fill="none" stroke={f.c} strokeWidth="1.2" rx="6" />
            <rect x={x} y={y} width="5" height="44" fill={f.c} rx="2" />
            <text x={x + 15} y={y + 16} fill={f.c} fontSize="9.5" fontWeight="700">{f.cat}</text>
            <text x={x + 15} y={y + 32} fill="#fb923c" fontSize="8">{f.ex}</text>
          </g>
        );
      })}
      <text x="280" y="185" textAnchor="middle" fill="#fb923c" fontSize="8.5">Feature leakage: não usar features que dependem do target futuro (ex: avg_preco calculado com o ponto em causa incluído).</text>
    </svg>
  );
}

function GWRSvg() {
  return (
    <svg viewBox="0 0 560 175" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="175" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">GWR — Coeficientes Locais vs Global OLS</text>
      {/* OLS */}
      <rect x="10" y="24" width="255" height="120" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="137" y="40" textAnchor="middle" fill="#fb923c" fontSize="9.5" fontWeight="700">OLS Global — Um coeficiente para todos</text>
      {[0,1,2,3,4,5,6].map(col => [0,1,2,3,4].map(row => (
        <rect key={`${col}-${row}`} x={18 + col * 34} y={50 + row * 18} width="30" height="14" fill="#f97316" opacity="0.45" rx="2" />
      )))}
      <text x="137" y="155" textAnchor="middle" fill="#f97316" fontSize="8">β_area = 2500 (igual em todo o país)</text>
      {/* GWR */}
      <rect x="295" y="24" width="255" height="120" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="422" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">GWR — Coeficiente varia no espaço</text>
      {[0,1,2,3,4,5,6].map(col => [0,1,2,3,4].map(row => {
        const v = Math.sin(col * 0.9 + row * 0.7) * 0.5 + 0.5;
        return <rect key={`${col}-${row}`} x={303 + col * 34} y={50 + row * 18} width="30" height="14" fill="#f97316" opacity={0.15 + v * 0.7} rx="2" />;
      }))}
      <text x="422" y="155" textAnchor="middle" fill="#f97316" fontSize="8">β_area: 1800 (interior) a 5500 (Lisboa/Porto)</text>
    </svg>
  );
}

function LiDARSvg() {
  return (
    <svg viewBox="0 0 560 165" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="165" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">LiDAR — Point Cloud e Produtos Derivados</text>
      {/* point cloud */}
      <rect x="10" y="24" width="255" height="125" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="137" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Point Cloud (LAZ/LAS format)</text>
      {Array.from({length: 200}, (_, i) => {
        const x = 20 + Math.random() * 235;
        const y = 45 + Math.random() * 95;
        const h = 1 - (y - 45) / 95;
        const r = Math.round(100 + h * 155);
        const g = Math.round(200 - h * 100);
        return <circle key={i} cx={x} cy={y} r="1.5" fill={`rgb(${r},${g},80)`} opacity="0.75" />;
      })}
      <text x="137" y="162" textAnchor="middle" fill="#f97316" fontSize="8">Pontos classificados: solo, vegetação, edifício, água</text>
      {/* products */}
      <rect x="295" y="24" width="255" height="125" fill="rgba(249,115,22,0.06)" rx="6" />
      <text x="422" y="40" textAnchor="middle" fill="#f97316" fontSize="9.5" fontWeight="700">Produtos Derivados</text>
      {[
        { name: 'DTM', desc: 'Digital Terrain Model — só solo', c: '#f97316' },
        { name: 'DSM', desc: 'Digital Surface Model — superfície topo', c: '#f97316' },
        { name: 'CHM', desc: 'Canopy Height = DSM - DTM', c: '#f97316' },
        { name: 'nDSM', desc: 'Normalised — altura acima solo', c: '#f97316' },
      ].map((p, i) => (
        <g key={i}>
          <rect x="303" y={50 + i * 25} width="239" height="20" fill={i % 2 === 0 ? 'var(--bg-secondary)' : 'transparent'} rx="2" />
          <rect x="303" y={50 + i * 25} width="4" height="20" fill={p.c} rx="1" />
          <text x="314" y={64 + i * 25} fill={p.c} fontSize="9" fontWeight="700">{p.name}</text>
          <text x="360" y={64 + i * 25} fill="#fb923c" fontSize="8.5">{p.desc}</text>
        </g>
      ))}
      <text x="422" y="162" textAnchor="middle" fill="#f97316" fontSize="8">pdal, laspy, open3d — processamento Point Cloud Python</text>
    </svg>
  );
}

export default function GEO4() {
  const mod = modules[3];
  return (
    <div style={S.page}>
      <Link to="/geospatial" style={S.back}>← Geospatial Intelligence</Link>
      <div style={S.badge}>MÓDULO 04</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. H3 — Sistema de Indexação Hexagonal</h2>
        <div style={S.diagram}><H3GridSvg /></div>
        <div style={S.highlight}>
          O <strong>H3</strong> (Uber, 2018) é um sistema de indexação espacial hierárquico que divide a superfície da Terra em hexágonos em 16 resoluções diferentes (0 a 15). Os hexágonos têm propriedades únicas para análise espacial: todos os vizinhos estão à mesma distância do centro (ao contrário dos quadrados), e a área das células é aproximadamente constante a uma dada resolução. Cada célula tem um identificador de 64 bits único.
        </div>
        <p style={S.p}>O H3 é ideal para <strong>agregação espacial uniforme</strong>: agregar trajetos de viagens, incidentes, vendas ou qualquer ponto num grid regular. A hierarquia permite análise multi-escala — resolução 7 (~5 km²) para análise regional, resolução 9 (~0.1 km²) para análise urbana. O k-ring(cell, k) retorna todos os hexágonos a distância de k passos, útil para features de vizinhança. A biblioteca h3-py tem integração nativa com Pandas e GeoPandas.</p>
        <div style={S.note}>Alternativas: S2 (Google, sistema de células esféricas quadradas, base do BigQuery Geo), Geohash (sistema baseado em Base32, cada caractere adicional divide a área em 32 partes). H3 é preferível pela uniformidade de distância entre vizinhos e pela hierarquia limpa.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Spatial Joins e Operações em Escala</h2>
        <div style={S.highlight}>
          O <strong>spatial join</strong> combina atributos de dois GeoDataFrames com base numa relação espacial. É a operação mais comum em GIS e pode ser computacionalmente cara para datasets grandes. O GeoPandas usa STR-trees (Sort-Tile-Recursive) para indexação espacial, reduzindo queries de O(n²) para O(n log n). Para joins muito grandes, o DuckDB com extensão spatial permite fazer spatial joins directamente em SQL sobre ficheiros Parquet sem carregar tudo em memória.
        </div>
        <p style={S.p}><strong>Operações em escala</strong>: para milhões de geometrias, usar Dask-GeoPandas (paralelização com Dask), ou converter para PostGIS (PostgreSQL com extensão geoespacial) que usa índices GiST (Generalized Search Tree) para queries espaciais sub-segundo em tabelas de 100M de linhas. O <strong>DuckDB Spatial</strong> é uma alternativa emergente: SQL analítico colunar com ST_Within, ST_Distance e ST_Intersects sem servidor.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Feature Engineering Geoespacial</h2>
        <div style={S.diagram}><SpatialFeaturesSvg /></div>
        <div style={S.highlight}>
          O <strong>feature engineering geoespacial</strong> transforma geometrias e coordenadas brutas em variáveis preditivas para modelos de ML. As categorias principais: <em>distâncias</em> a POIs (pontos de interesse) relevantes — transportes, comércio, escolas; <em>densidades</em> — número de pontos por área de influência; <em>agregações em grid H3</em>; <em>lags espaciais</em> — médias ponderadas dos vizinhos; e <em>variáveis topográficas</em> derivadas de DEMs.
        </div>
        <p style={S.p}>O <strong>spatial lag</strong> de uma variável Y é a média ponderada dos valores Y nos vizinhos: Wlag_Y = W @ Y onde W é a matriz de pesos normalizada por linha. É equivalente a "preço médio dos 5 vizinhos mais próximos" e é frequentemente uma das features mais preditivas em modelos de preços imobiliários. Cuidado com <strong>spatial leakage</strong>: garantir que as features de vizinhança são calculadas excluindo a observação em causa.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Modelos ML com Componente Espacial</h2>
        <div style={S.diagram}><GWRSvg /></div>
        <div style={S.highlight}>
          A maioria dos algoritmos de ML não incorpora explicitamente a estrutura espacial — tratam as observações como i.i.d. (independentes e identicamente distribuídas). Para incorporar espaço em modelos ML padrão: incluir coordenadas (lat, lon) directamente como features; usar embeddings espaciais (encodings sinusoidais de coordenadas); adicionar features H3 de vizinhança; ou usar a distância a referências geográficas relevantes. O <strong>Random Forest com features espaciais</strong> captura muitas não-linearidades geográficas.
        </div>
        <p style={S.p}>Os <strong>Gaussian Processes (kriging bayesiano)</strong> modelam explicitamente a estrutura de dependência espacial via kernel de covariância. O GP fornece não só previsões mas também incerteza (intervalos de confiança) por localização — valioso em aplicações de monitorização ambiental ou epidemiologia. A limitação é o custo computacional O(n³) para treino — para datasets grandes usar GP esparsos (inducing points) ou aproximações de baixo rank.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Point Cloud e LiDAR</h2>
        <div style={S.diagram}><LiDARSvg /></div>
        <div style={S.highlight}>
          O <strong>LiDAR (Light Detection And Ranging)</strong> emite pulsos laser e mede o tempo de retorno para calcular distâncias 3D com precisão centimétrica. O resultado é uma "nuvem de pontos" com coordenadas XYZ e atributos adicionais: intensidade do retorno, número do retorno (primeiro retorno = topo da vegetação, último = solo), classificação do ponto e cor RGB. O formato standard é LAS/LAZ (comprimido).
        </div>
        <p style={S.p}>Os produtos derivados do LiDAR são essenciais para cálculo de altura de vegetação, volume de biomassa florestal, modelação de inundações e planeamento urbano. O <strong>nDSM (normalised Digital Surface Model)</strong> = DSM - DTM, e representa a altura acima do solo de cada objecto — permite distinguir árvores de 20m de edifícios de 20m pela forma do perfil 3D. O processamento de Point Clouds em Python usa as bibliotecas pdal, laspy e open3d.</p>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>H3 — Sistema de Indexação Hexagonal</strong> — H3 (Uber) indexa a superfície terrestre em hexágonos hierárquicos de 16 resoluções (resolução 9: ~0.1km²); hexágonos têm vizinhança uniforme (6 vizinhos equidistantes) — ideal para análise de mobilidade, heatmaps e agregação geoespacial eficiente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Spatial Joins e Operações em Escala</strong> — spatial join associa features com base em relação espacial (intersects, within, contains); em escala, PostGIS com índices GIST, DuckDB com extensão Spatial e Dask-Geopandas permitem spatial joins em datasets de bilhões de pontos sem carregar em memória.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Feature Engineering Geoespacial</strong> — features geoespaciais para ML incluem: distância ao centro urbano, densidade de POIs num raio, índices de acessibilidade, H3 embeddings, variáveis sazonais e índices espectrais — enriquecem modelos de preço de habitação, risco de seguro e procura de transporte.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos ML com Componente Espacial</strong> — incluir coordenadas directamente em modelos ML ignora a estrutura espacial; alternativas: H3 embeddings + tabular ML, GWR para não-estacionariedade, Graph Neural Networks sobre grafo espacial, e Gaussian Processes com kernel espacial — escolha depende da natureza da dependência espacial.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Point Cloud e LiDAR</strong> — point clouds são colecções de pontos 3D (X,Y,Z + intensidade) capturadas por LiDAR aéreo (ALS) ou terrestre (TLS); Open3D e PDAL processam point clouds; PointNet e PointPillars são CNNs 3D para classificação e detecção em point clouds.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
