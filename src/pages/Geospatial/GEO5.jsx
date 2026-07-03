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

function LibraryCompSvg() {
  const libs = [
    { name: 'Folium', stack: 'Python → Leaflet.js', interact: 'Moderada', scale: 'Pequena', uso: 'Mapas rápidos em notebooks', c: '#f97316' },
    { name: 'Plotly/Mapbox', stack: 'Python + Mapbox GL', interact: 'Alta', scale: 'Média', uso: 'Dashboards Plotly/Dash', c: '#f97316' },
    { name: 'kepler.gl', stack: 'React + deck.gl', interact: 'Muito Alta', scale: 'Grande (GPU)', uso: 'Exploração Big Data geo', c: '#f97316' },
    { name: 'deck.gl', stack: 'JavaScript/Python', interact: 'Muito Alta', scale: 'Muito Grande', uso: 'Aplicações prod WebGL', c: '#f97316' },
    { name: 'PyDeck', stack: 'Python wrapper deck.gl', interact: 'Alta', scale: 'Grande', uso: 'deck.gl em notebooks', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 212" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Bibliotecas de Visualização Geoespacial — Comparação</text>
      {['Biblioteca','Stack','Interactividade','Escala','Uso ideal'].map((h, i) => {
        const xs = [12, 110, 240, 325, 405];
        return <text key={i} x={xs[i]} y="30" fill="#f97316" fontSize="9" fontWeight="700">{h}</text>;
      })}
      <line x1="8" y1="35" x2="552" y2="35" stroke="var(--card-border)" strokeWidth="1" />
      {libs.map((l, i) => {
        const y = 40 + i * 32;
        const xs = [12, 110, 240, 325, 405];
        const scaleColor = l.scale.includes('Muito') ? '#f97316' : l.scale === 'Grande' ? '#fbbf24' : l.scale === 'Média' ? '#f97316' : '#fb923c';
        return (
          <g key={i}>
            <rect x="8" y={y} width="544" height="26" fill={i % 2 === 0 ? 'rgba(249,115,22,0.06)' : 'transparent'} rx="3" />
            <rect x="8" y={y} width="5" height="26" fill={l.c} rx="1" />
            <text x={xs[0]+8} y={y+17} fill={l.c} fontSize="10" fontWeight="700">{l.name}</text>
            <text x={xs[1]} y={y+17} fill="#fb923c" fontSize="8.5">{l.stack}</text>
            <text x={xs[2]} y={y+17} fill="#fb923c" fontSize="8.5">{l.interact}</text>
            <text x={xs[3]} y={y+17} fill={scaleColor} fontSize="8.5" fontWeight="600">{l.scale}</text>
            <text x={xs[4]} y={y+17} fill="#f97316" fontSize="8.5">{l.uso}</text>
          </g>
        );
      })}
      <text x="280" y="206" textAnchor="middle" fill="#fb923c" fontSize="8.5">kepler.gl usa GPU via WebGL para renderizar milhões de pontos em tempo real no browser. deck.gl é a base do kepler.gl.</text>
    </svg>
  );
}

function LayerTypesSvg() {
  const layers = [
    { name: 'ScatterplotLayer', desc: 'Pontos com tamanho/cor por atributo', c: '#f97316' },
    { name: 'HexagonLayer', desc: 'Agregação hexagonal 3D com extrusão', c: '#f97316' },
    { name: 'H3HexagonLayer', desc: 'Grid H3 nativo com cores/altura', c: '#f97316' },
    { name: 'PathLayer', desc: 'Linhas com largura variável', c: '#f97316' },
    { name: 'PolygonLayer', desc: 'Polígonos extrudidos (edifícios 3D)', c: '#f97316' },
    { name: 'HeatmapLayer', desc: 'Densidade contínua (kernel GPU)', c: '#f97316' },
    { name: 'TileLayer', desc: 'Tiles raster base (OSM, Mapbox)', c: '#f97316' },
    { name: 'MVTLayer', desc: 'Mapbox Vector Tiles (estilo, filtro)', c: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 215" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="215" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">deck.gl — Principais Layers</text>
      {layers.map((l, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = col === 0 ? 10 : 290;
        const y = 24 + row * 45;
        return (
          <g key={i}>
            <rect x={x} y={y} width="270" height="38" fill={l.c} rx="5" opacity="0.09" />
            <rect x={x} y={y} width="270" height="38" fill="none" stroke={l.c} strokeWidth="1.2" rx="5" />
            <rect x={x} y={y} width="5" height="38" fill={l.c} rx="2" />
            <text x={x + 15} y={y + 15} fill={l.c} fontSize="9" fontWeight="700">{l.name}</text>
            <text x={x + 15} y={y + 30} fill="#fb923c" fontSize="8">{l.desc}</text>
          </g>
        );
      })}
      <text x="280" y="210" textAnchor="middle" fill="#fb923c" fontSize="8.5">Layers são compostos em stack — TileLayer base + H3 + Scatterplot funcionam simultâneamente com blend modes.</text>
    </svg>
  );
}

function MapStyleSvg() {
  return (
    <svg viewBox="0 0 560 145" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="145" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Princípios de Design Cartográfico</text>
      {[
        { title: 'Projecção correcta', desc: 'Equal area para choropleth de taxas. Mercator distorce — nunca usar para áreas.', x: 10, c: '#f97316' },
        { title: 'Paleta de cores', desc: 'Sequential para magnitude. Diverging para desvio da média. Qualitative para categorias.', x: 193, c: '#f97316' },
        { title: 'Classificação', desc: 'Natural breaks (Jenks) preserva distribuição. Quantis: intervalos com igual n. Equal: intervalos iguais.', x: 376, c: '#f97316' },
      ].map(d => (
        <g key={d.x}>
          <rect x={d.x} y="24" width="175" height="90" fill={d.c} rx="6" opacity="0.08" />
          <rect x={d.x} y="24" width="175" height="90" fill="none" stroke={d.c} strokeWidth="1.2" rx="6" />
          <text x={d.x + 87} y="40" textAnchor="middle" fill={d.c} fontSize="9.5" fontWeight="700">{d.title}</text>
          <foreignObject x={d.x + 8} y="46" width="160" height="64">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: '#fb923c', fontSize: '8.5px', lineHeight: 1.6 }}>{d.desc}</div>
          </foreignObject>
        </g>
      ))}
      <text x="280" y="130" textAnchor="middle" fill="#fb923c" fontSize="8">Acessibilidade: paletas colorblind-safe (ColorBrewer). Evitar vermelho-verde. Incluir legenda com unidades e fonte.</text>
    </svg>
  );
}

function StorytellingFlowSvg() {
  const steps = [
    ['Dados', 'brutos'],
    ['Limpeza', 'CRS'],
    ['Análise', 'espacial'],
    ['Visualização', 'exploratória'],
    ['Narrativa', '+ story'],
    ['Dashboard', 'App'],
  ];
  return (
    <svg viewBox="0 0 560 100" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="100" fill="var(--bg-secondary)" rx="8" />
      <text x="280" y="16" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Pipeline: Dados → Narrativa Cartográfica</text>
      {steps.map((lines, i) => {
        const x = 10 + i * 92;
        const isLast = i === steps.length - 1;
        return (
          <g key={i}>
            <rect x={x} y="24" width="82" height="52" fill="#f97316" rx="6" opacity={0.1 + i * 0.08} />
            <rect x={x} y="24" width="82" height="52" fill="none" stroke="#f97316" strokeWidth="1.2" rx="6" opacity={0.4 + i * 0.1} />
            <text x={x + 41} y={44} textAnchor="middle" fill="#fff" fontSize="8" fontWeight={isLast ? '700' : '500'}>{lines[0]}</text>
            <text x={x + 41} y={57} textAnchor="middle" fill="#fff" fontSize="8" fontWeight={isLast ? '700' : '500'}>{lines[1]}</text>
            {!isLast && <text x={x + 86} y="54" fill="#f97316" fontSize="14" opacity="0.7">›</text>}
          </g>
        );
      })}
    </svg>
  );
}

export default function GEO5() {
  const mod = modules[4];
  return (
    <div style={S.page}>
      <Link to="/geospatial" style={S.back}>← Geospatial Intelligence</Link>
      <div style={S.badge}>MÓDULO 05</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Bibliotecas de Visualização Geoespacial</h2>
        <div style={S.diagram}><LibraryCompSvg /></div>
        <div style={S.highlight}>
          O ecossistema de visualização geoespacial em Python divide-se em dois mundos: ferramentas baseadas em <strong>Leaflet.js</strong> (Folium, ipyleaflet) que são simples e funcionam bem para protótipos em notebooks, e ferramentas baseadas em <strong>WebGL/GPU</strong> (deck.gl, kepler.gl) que renderizam milhões de pontos em tempo real no browser. Para dashboards de produção com dados grandes, deck.gl é o standard da indústria — usado pelo Uber, Airbnb e empresas de mobilidade.
        </div>
        <p style={S.p}>
          <strong>Folium</strong> gera HTML interactivo que incorpora um mapa Leaflet.js — perfeito para outputs de Jupyter notebooks partilháveis. Suporta choropleth maps, marcadores, clusters de pontos e layers sobrepostos. A limitação é a performance para mais de ~10,000 pontos. <strong>Plotly Express</strong> com Mapbox permite criar mapas interactivos em poucas linhas e integra nativamente com dashboards Dash — ideal para analistas.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. deck.gl e kepler.gl</h2>
        <div style={S.diagram}><LayerTypesSvg /></div>
        <div style={S.highlight}>
          <strong>deck.gl</strong> (Uber, open-source) é um framework de visualização geoespacial baseado em WebGL — processa os dados diretamente na GPU do browser, permitindo renderizar dezenas de milhões de pontos interactivamente. A arquitectura é baseada em layers compostos: cada layer tem propriedades de dados, aparência e interactividade configuráveis. O PyDeck é o wrapper Python que permite usar deck.gl directamente de notebooks Jupyter com uma API idêntica à versão JavaScript.
        </div>
        <p style={S.p}>
          <strong>kepler.gl</strong> é uma aplicação completa construída sobre deck.gl pela Uber, com interface visual drag-and-drop para exploração de dados geoespaciais grandes. Suporta importação de CSV, GeoJSON, Parquet — e gera configurações exportáveis para reprodução. O HexagonLayer e H3HexagonLayer são particularmente poderosos: agregam automaticamente pontos em hexágonos extrudidos em 3D, com altura proporcional à contagem ou a uma métrica.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Princípios de Design Cartográfico</h2>
        <div style={S.diagram}><MapStyleSvg /></div>
        <div style={S.highlight}>
          A escolha da <strong>projecção</strong> afecta drasticamente a percepção do mapa. Choropleth maps (mapas de coropletas) que mostram taxas (densidade, percentagens) devem usar sempre projecções equal-area — a Mercator distorce dramaticamente as áreas em latitudes altas, fazendo a Rússia parecer enorme e África pequena. Para Portugal, usar PT-TM06 (EPSG:3763) em mapas locais.
        </div>
        <p style={S.p}>
          A <strong>classificação dos dados</strong> afecta fundamentalmente a narrativa visual. Os <em>Natural Breaks (Jenks)</em> encontram quebras na distribuição dos dados — preservam os grupos naturais. Os <em>Quantis</em> garantem igual número de observações em cada classe — bons para distribuições skewed. Os <em>intervalos iguais</em> dividem o range em partes iguais — intuitivos mas enganadores com distribuições assimétricas. Sempre mostrar o histograma junto ao mapa.
        </p>
        <div style={S.note}>ColorBrewer (colorbrewer2.org): paletas testadas para cartografia, com variantes colorblind-safe, print-safe e fotocopy-safe. Disponível no matplotlib como plt.cm.RdYlGn, etc. Evitar arco-íris (jet, rainbow) — não são perceptualmente uniformes e distorcem a percepção de gradientes.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Mapas com Plotly e Mapbox</h2>
        <div style={S.highlight}>
          <strong>Plotly Express</strong> oferece funções de alto nível para mapas: px.scatter_map (pontos), px.choropleth_map (polígonos com cores), px.density_map (heatmap de densidade). Integra nativamente com Mapbox para tiles de base — requer token Mapbox para estilos custom, mas o estilo "open-street-map" é gratuito. Os mapas Plotly são interactivos por default (zoom, pan, hover com tooltip) e exportáveis para HTML standalone.
        </div>
        <p style={S.p}>
          Para <strong>dashboards geoespaciais</strong>, o Dash com dcc.Graph e px.scatter_map permite callbacks interactivos — clicar num polígono do mapa actualiza gráficos laterais. Para cenários mais avançados, o dash-leaflet ou dash-deck integram Leaflet.js e deck.gl directamente. A alternativa moderna é Streamlit com st.map (básico) ou pydeck_chart para visualizações deck.gl completas em apps Streamlit.
        </p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Storytelling Espacial</h2>
        <div style={S.diagram}><StorytellingFlowSvg /></div>
        <div style={S.highlight}>
          O <strong>storytelling cartográfico</strong> combina visualização de dados geoespaciais com narrativa para comunicar insights a audiências não técnicas. As ferramentas incluem: <strong>Scrollytelling</strong> — mapas que animam ao fazer scroll (Mapbox GL JS com Intersection Observer API); <strong>Storymap.js</strong> e Knight Lab StoryMapJS — ferramentas no-code para narrativas baseadas em mapas; <strong>ESRI StoryMaps</strong> — plataforma commercial para atlas interactivos.
        </div>
        <p style={S.p}>
          Para produção, a pipeline completa inclui: dados → GeoPandas (limpeza e análise espacial) → GeoJSON/PMTiles (formato de distribuição) → Mapbox GL JS ou deck.gl (renderização frontend) → aplicação web (Next.js, React). Os <strong>PMTiles</strong> (Protomaps) são o formato moderno para tiles vectoriais — um único ficheiro serve como servidor de tiles, sem infra-estrutura de servidor necessária.
        </p>
        <div style={S.note}>Recursos: MapboxGL JS para web profissional; Observable Plot com Geo para visualizações estatísticas geoespaciais; QGIS para criação de mapas estáticos de alta qualidade para publicação/impressão. Para análise exploratória rápida, lonboard (novo, 2023) usa WebGL com API Pandas-like.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Bibliotecas de Visualização Geoespacial</strong> — Folium (Leaflet.js wrapper), Plotly/Mapbox, PyDeck (deck.gl) e Kepler.gl permitem mapas interactivos em Python; Matplotlib + Cartopy para mapas estáticos publication-quality; cada ferramenta tem trade-offs de interactividade, performance e integração com Jupyter.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>deck.gl e kepler.gl</strong> — deck.gl (Uber) é uma framework WebGL para visualização de grandes datasets geoespaciais (milhões de pontos a 60fps); Kepler.gl é uma UI sobre deck.gl para exploração visual sem código — ambas aceleram a análise exploratória de dados de mobilidade, GPS e IoT.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Princípios de Design Cartográfico</strong> — escolha de projecção afecta área, forma, distância e direcção; classificação de dados (natural breaks, quantile, equal interval) afecta a percepção; paletas de cor divergentes para dados com ponto médio, sequenciais para dados ordenados; sempre incluir escala, norte e legenda.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Mapas com Plotly e Mapbox</strong> — Plotly Express com px.choropleth, px.scatter_mapbox e px.density_mapbox produz mapas interactivos em &lt;5 linhas de código; integração com Mapbox Style tiles permite customização visual; ideal para dashboards web e relatórios analíticos com dados geoespaciais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Storytelling Espacial</strong> — storytelling espacial combina dados geoespaciais com narrativa para comunicar padrões e insights; scrollytelling (scroll-driven maps), animações temporais e mapas small-multiples são técnicas eficazes; o contexto geográfico aumenta a credibilidade e o impacto de análises de dados.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
