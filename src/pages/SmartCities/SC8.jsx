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
  note: { background: 'rgba(180,83,9,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function CityIsochrone15SVG() {
  const cx = 380, cy = 165;
  // 5 min = smallest ring, 15 min = largest
  const rings = [
    { label: '15 min a pé', r: 130, fill: '#f97316', fillOp: 0.10, stroke: '#f97316', dash: '6 3' },
    { label: '10 min a pé', r: 85,  fill: '#fb923c', fillOp: 0.18, stroke: '#fb923c', dash: 'none' },
    { label: '5 min a pé',  r: 42,  fill: '#fbbf24', fillOp: 0.30, stroke: '#fbbf24', dash: 'none' },
  ];
  const pois = [
    { x: 310, y: 75,  label: '🏥 Hospital',     ring: 2 },
    { x: 460, y: 85,  label: '🏫 Escola',        ring: 2 },
    { x: 220, y: 165, label: '🛒 Mercado',        ring: 2 },
    { x: 440, y: 195, label: '💊 Farmácia',       ring: 1 },
    { x: 345, y: 235, label: '🚌 Transportes',    ring: 2 },
    { x: 415, y: 135, label: '🌳 Parque',         ring: 1 },
  ];
  const ringColor = ['#fbbf24', '#fb923c', '#f97316'];
  return (
    <svg viewBox="0 0 720 332" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Cidade dos 15 Minutos — Análise de Isócronas por Modo de Transporte</text>

      {/* Rings drawn largest first so smaller ones appear on top */}
      {rings.map((z, i) => (
        <circle key={i} cx={cx} cy={cy} r={z.r}
          fill={z.fill} fillOpacity={z.fillOp}
          stroke={z.stroke} strokeWidth="1.5"
          strokeDasharray={z.dash} />
      ))}

      {/* Crosshair */}
      <line x1={cx - 140} y1={cy} x2={cx + 140} y2={cy} stroke="var(--text-secondary)" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1={cx} y1={cy - 140} x2={cx} y2={cy + 140} stroke="var(--text-secondary)" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* POI lines drawn before dots */}
      {pois.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y}
          stroke={ringColor[p.ring]} strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.6" />
      ))}

      {/* Centre */}
      <circle cx={cx} cy={cy} r="10" fill={color} stroke="var(--bg-secondary)" strokeWidth="2" />
      <text x={cx} y={cy - 16} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>📍 Residência</text>

      {/* POI dots + labels */}
      {pois.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="7" fill={ringColor[p.ring]} stroke="var(--bg-secondary)" strokeWidth="1.5" />
          <text x={p.x} y={p.y - 13} textAnchor="middle" fontSize="9" fill={ringColor[p.ring]} fontWeight="600">{p.label}</text>
        </g>
      ))}

      {/* Ring labels — staggered upward so 5min is highest */}
      {rings.map((z, i) => (
        <text key={i} x={cx + z.r + 6} y={cy - 28 + i * 16} textAnchor="start" fontSize="8" fill={z.stroke} fontWeight="600">{z.label}</text>
      ))}

      {/* Legend */}
      {rings.slice().reverse().map((z, i) => (
        <g key={i}>
          <circle cx={55} cy={262 + i * 18} r="7" fill={z.fill} fillOpacity={z.fillOp + 0.3} stroke={z.stroke} strokeWidth="1.5" />
          <text x={70} y={267 + i * 18} fontSize="10" fill="var(--text-secondary)">{z.label}</text>
        </g>
      ))}

      <rect x="30" y="308" width="660" height="16" rx="4" fill="rgba(249,115,22,0.08)" />
      <text x="360" y="319" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">Isócronas calculadas com OSRM (Open Source Routing Machine) + OpenStreetMap · Modo pedonal: 1.2 m/s · Modo bicicleta: 4 m/s · Inclui declive via DEM</text>
    </svg>
  );
}

function AccessibilityMLSVG() {
  const services = ['Saúde', 'Educação', 'Comércio', 'Parques', 'Transportes', 'Cultura'];
  const currentScore = [62, 71, 83, 45, 78, 38];
  const targetScore  = [85, 90, 88, 75, 92, 72];
  const W = 580, H = 160, padL = 80, padT = 44;
  const barW = 36, gap = W / services.length;

  return (
    <svg viewBox="0 0 720 280" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Índice de Acessibilidade por Categoria — Situação Actual vs. Target 2030</text>

      {[25, 50, 75, 100].map(v => (
        <g key={v}>
          <line x1={padL} y1={padT + H - (v / 100) * H} x2={padL + W} y2={padT + H - (v / 100) * H} stroke="var(--text-secondary)" strokeWidth="0.7" />
          <text x={padL - 5} y={padT + H - (v / 100) * H + 4} textAnchor="end" fontSize="9" fill="var(--text-secondary)">{v}</text>
        </g>
      ))}

      {services.map((s, i) => {
        const x = padL + i * gap + gap / 2;
        const curH = (currentScore[i] / 100) * H;
        const tgtH = (targetScore[i] / 100) * H;
        return (
          <g key={i}>
            <rect x={x - barW / 2 - 1} y={padT + H - tgtH} width={barW / 2} height={tgtH} rx="3" fill="#f97316" fillOpacity="0.25" stroke="#f97316" strokeWidth="1" />
            <rect x={x + 1} y={padT + H - curH} width={barW / 2} height={curH} rx="3" fill={color} fillOpacity="0.7" />
            <text x={x - barW / 4 - 1} y={padT + H - tgtH - 5} textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="600">{targetScore[i]}</text>
            <text x={x + barW / 4 + 1} y={padT + H - curH - 5} textAnchor="middle" fontSize="9" fill={color} fontWeight="600">{currentScore[i]}</text>
            <text x={x} y={padT + H + 16} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{s}</text>
          </g>
        );
      })}

      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth="1" />

      {/* Legend */}
      <rect x="460" y="230" width="14" height="10" rx="2" fill={color} fillOpacity="0.7" />
      <text x="478" y="239" fontSize="10" fill="var(--text-secondary)">Actual (2024)</text>
      <rect x="560" y="230" width="14" height="10" rx="2" fill="#f97316" fillOpacity="0.4" />
      <text x="578" y="239" fontSize="10" fill="var(--text-secondary)">Target 2030</text>

      <rect x="30" y="258" width="660" height="18" rx="4" fill="rgba(180,83,9,0.07)" />
      <text x="360" y="270" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Score calculado com Random Forest sobre features: densidade de POIs, tempo isócrona, qualidade serviço, frequência transporte · Treino com dados OSM + survey de mobilidade</text>
    </svg>
  );
}

function LandUsePredictionSVG() {
  const grid = [
    ['R','R','M','M','I','I'],
    ['R','R','M','C','I','I'],
    ['P','R','C','C','M','I'],
    ['P','P','C','C','M','M'],
    ['T','P','C','R','M','M'],
    ['T','T','P','R','R','R'],
  ];
  const colors = { R: '#f97316', M: '#fb923c', I: '#c2410c', C: '#f59e0b', P: '#fbbf24', T: '#94a3b8' };
  const labels = { R: 'Residencial', M: 'Misto', I: 'Industrial', C: 'Comercial', P: 'Parque/Verde', T: 'Transportes' };
  const cellSize = 46;
  const gx1 = 30, gx2 = 390, gy = 48;

  return (
    <svg viewBox="0 0 720 390" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>ML para Classificação de Uso do Solo — Actual vs. Previsão 2035</text>

      {/* Current grid */}
      <text x={gx1 + 3 * cellSize} y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)">Uso do Solo Actual</text>
      {grid.map((row, ri) => row.map((cell, ci) => (
        <g key={`${ri}-${ci}`}>
          <rect x={gx1 + ci * cellSize} y={gy + ri * cellSize} width={cellSize - 2} height={cellSize - 2} rx="3"
            fill={colors[cell]} fillOpacity="0.55" stroke={colors[cell]} strokeWidth="1" />
          <text x={gx1 + ci * cellSize + cellSize / 2} y={gy + ri * cellSize + cellSize / 2 + 4}
            textAnchor="middle" fontSize="9" fill={colors[cell]} fontWeight="700">{cell}</text>
        </g>
      )))}

      {/* Predicted grid */}
      <text x={gx2 + 3 * cellSize} y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text-secondary)">Previsão ML 2035</text>
      {[
        ['R','R','M','M','M','I'],
        ['R','R','M','C','M','I'],
        ['P','R','C','C','C','M'],
        ['P','P','C','C','C','M'],
        ['T','P','C','R','C','M'],
        ['T','T','P','R','R','R'],
      ].map((row, ri) => row.map((cell, ci) => (
        <g key={`p-${ri}-${ci}`}>
          <rect x={gx2 + ci * cellSize} y={gy + ri * cellSize} width={cellSize - 2} height={cellSize - 2} rx="3"
            fill={colors[cell]} fillOpacity="0.55" stroke={colors[cell]} strokeWidth="1" />
          <text x={gx2 + ci * cellSize + cellSize / 2} y={gy + ri * cellSize + cellSize / 2 + 4}
            textAnchor="middle" fontSize="9" fill={colors[cell]} fontWeight="700">{cell}</text>
          {grid[ri][ci] !== cell && (
            <text x={gx2 + ci * cellSize + cellSize - 6} y={gy + ri * cellSize + 12} fontSize="10" fill="#f97316">↗</text>
          )}
        </g>
      )))}

      {/* Arrow between grids */}
      <text x="366" y="188" textAnchor="middle" fontSize="22" fill={color}>→</text>
      <text x="366" y="204" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">XGBoost</text>

      {/* Legend */}
      <text x="360" y="336" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--text-secondary)">Legenda:</text>
      {Object.entries(labels).map(([k, v], i) => (
        <g key={k}>
          <rect x={30 + i * 110} y={344} width={14} height={10} rx="2" fill={colors[k]} fillOpacity="0.8" />
          <text x={48 + i * 110} y={353} fontSize="9" fill="var(--text-secondary)">{k}: {v}</text>
        </g>
      ))}

      <rect x="30" y="366" width="660" height="12" rx="4" fill="rgba(249,115,22,0.08)" />
      <text x="360" y="375" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Features: densidade pop, preço imobiliário, acessibilidade, emprego, fluxo pedonal · Acurácia validação cruzada espacial: 81%</text>
    </svg>
  );
}

export default function SC8() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 08</div>
      <h1 style={S.h1}>Urban Planning & GIS</h1>
      <p style={S.lead}>
        O planeamento urbano baseado em dados combina GIS, machine learning e análise
        geoespacial para modelar acessibilidade, prever transformações de uso do solo
        e implementar o conceito de cidade dos 15 minutos. GeoPandas, QGIS e OSRM
        são as ferramentas centrais de um pipeline de análise urbana moderno.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Cidade dos 15 Minutos e Análise de Isócronas</h2>
        <CityIsochrone15SVG />
        <h3 style={S.h3}>O conceito e a sua operacionalização</h3>
        <p style={S.p}>
          A "Cidade dos 15 Minutos" (Carlos Moreno, 2016) postula que todos os cidadãos
          devem aceder a seis funções urbanas essenciais — vida, trabalho, comércio, saúde,
          educação e lazer — em 15 minutos a pé ou de bicicleta. Paris (Anne Hidalgo)
          e Melbourne (20-Minute Neighbourhood) adoptaram o conceito como política pública.
        </p>
        <div style={S.highlight}>
          <strong>Isócronas com OSRM:</strong> Open Source Routing Machine usa o grafo
          de ruas do OpenStreetMap para calcular áreas alcançáveis em N minutos a partir
          de um ponto. O algoritmo Contraction Hierarchies (Geisberger et al. 2008)
          resolve shortest-paths em &lt;1ms mesmo em grafos com 100M+ nós. Para análise
          de acessibilidade urbana, geram-se isócronas para múltiplos modos (pedonal,
          bicicleta, transporte público) e medem-se os POIs dentro de cada isócrona.
        </div>
        <div style={S.highlight}>
          <strong>Métricas de acessibilidade:</strong>
          <br/>• <strong>Cumulative Opportunity Accessibility:</strong> A(i, t) = Σⱼ Oⱼ · [tᵢⱼ ≤ t]
          — conta POIs do tipo j acessíveis em menos de t minutos a partir de i
          <br/>• <strong>Gravity-based:</strong> A(i) = Σⱼ Oⱼ · f(tᵢⱼ) onde f(t) = e^(-beta*t)
          — peso decrescente com a distância-tempo (β≈0.1 para modos suaves)
          <br/>• <strong>Pedestrian Quality Index (PQI):</strong> combina acessibilidade,
          conectividade do grafo pedonal, inclinação, sombra e segurança percebida
        </div>
        <p style={S.p}>
          Lisboa implementou análise de isócronas em todos os 24 bairros em 2022,
          identificando que 38% dos residentes a norte do Tejo não acediam a um parque
          em 10 min. O resultado orientou o programa de renaturalização do Corredor Verde.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. ML para Previsão de Uso do Solo</h2>
        <LandUsePredictionSVG />
        <h3 style={S.h3}>XGBoost geoespacial e validação espacial cruzada</h3>
        <p style={S.p}>
          A previsão de transformações de uso do solo com machine learning permite
          antecipar densificação, gentrificação e expansão industrial — capacitando
          os municípios a intervir preventivamente com instrumentos de gestão territorial
          (PDM, PU, PP).
        </p>
        <div style={S.highlight}>
          <strong>Features geoespaciais típicas:</strong>
          <br/>• <strong>Imobiliário:</strong> preço €/m² (Idealista API), taxa de
          vacancy, velocidade de transacções nos últimos 12 meses
          <br/>• <strong>Acessibilidade:</strong> isócrona pedonal a metro/comboio,
          índice de conectividade do grafo viário (betweenness centrality)
          <br/>• <strong>Sociodemografia:</strong> densidade, estrutura etária, rendimento
          mediano (INE censos), taxa de escolaridade
          <br/>• <strong>Actividade económica:</strong> densidade de empresas por
          CAE, emprego no raio de 1km, espaços comerciais vagos
          <br/>• <strong>Ambiente construído:</strong> índice de mistura de usos (Shannon entropy),
          área de fachada activa por 100m de frente urbana, epoch de construção
        </div>
        <div style={S.highlight}>
          <strong>Validação Espacial Cruzada (Spatial CV):</strong> ao contrário
          do k-fold tradicional, a Spatial CV divide o território em blocos espaciais
          (H3 hexagons da Uber, resolução 8: ~460m²) para evitar data leakage — parcelas
          vizinhas têm features altamente correlacionadas, pelo que amostras de treino
          e teste devem ser espacialmente separadas. A acurácia com Spatial CV (81%)
          é sistematicamente menor que com k-fold aleatório (91%) — reflectindo a
          dificuldade real de generalização para novos territórios.
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Índice de Acessibilidade Urbana</h2>
        <AccessibilityMLSVG />
        <h3 style={S.h3}>Planeamento orientado por dados: da análise à política</h3>
        <p style={S.p}>
          O score de acessibilidade por categoria de serviço traduz análises geoespaciais
          em métricas accionáveis para decisores políticos. Um Random Forest treinado com
          dados de 20 cidades europeias aprende os pesos implícitos de cada factor
          (densidade de POIs, tempo de isócrona, frequência de transporte) para produzir
          um score composto comparável entre bairros e cidades.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Ferramenta</th><th style={S.th}>Função</th><th style={S.th}>Stack</th><th style={S.th}>Licença</th></tr></thead>
          <tbody>
            {[
              ['QGIS', 'Desktop GIS — edição, visualização, análise espacial', 'C++ + Python plugins', 'GNU GPL'],
              ['GeoPandas', 'DataFrames com geometria — análise geoespacial em Python', 'Shapely + Fiona + Pandas', 'BSD'],
              ['OSRM', 'Routing engine para isócronas e distâncias-tempo', 'C++ + OpenStreetMap', 'BSD'],
              ['Kepler.gl', 'Visualização WebGL de grandes datasets geoespaciais', 'React + deck.gl', 'MIT'],
              ['H3 (Uber)', 'Grid hexagonal hierárquico para indexação espacial', 'C + Python binding', 'Apache 2.0'],
              ['PostGIS', 'Extensão PostgreSQL para dados geoespaciais', 'SQL + GEOS + PROJ', 'GNU GPL'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <h3 style={S.h3}>Casos de uso: Lisboa e Barcelona</h3>
        <p style={S.p}>
          <strong>Lisboa — Urbanismo de Dados (2023):</strong> a CML usa GeoPandas + PostGIS
          para monitorizar indicadores do PDM em tempo real, incluindo índice de permeabilidade
          do solo, ratio de espaço verde por habitante e acessibilidade pedonal a serviços
          básicos. Os dados são publicados em data.lisboa.pt via API CKAN.
        </p>
        <p style={S.p}>
          <strong>Barcelona — Superblocks (Superilles):</strong> análise geoespacial com
          isócronas multimodais identificou os 503 blocos candidatos a "superille"
          (células de 3×3 blocos com tráfego automóvel eliminado no interior).
          O modelo ML previu impacto na acessibilidade pedonal (+23%) e na qualidade
          do ar (–7% NO₂). Validação ex-post no Eixample confirma −9.4% NO₂ (Nieuwenhuijsen et al. 2021).
        </p>
        <div style={S.note}>
          Síntese: o planeamento urbano quantitativo combina GIS (QGIS, GeoPandas),
          routing (OSRM), e ML (XGBoost, Random Forest) para transformar dados heterogéneos
          — OSM, cadastro, imobiliário, censos — em scores de acessibilidade e previsões
          de uso do solo accionáveis. O Spatial CV é essencial para avaliar honestamente
          a generalização. A integração com FIWARE fecha o ciclo: dados de sensores
          urbanos alimentam continuamente os modelos de planeamento.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Cidade dos 15 Minutos e Análise de Isócronas</strong> — o conceito postula o acesso pedonal a seis funções urbanas em 15 minutos; as isócronas são calculadas com OSRM sobre OpenStreetMap usando o algoritmo Contraction Hierarchies em menos de 1ms, medindo POIs acessíveis por modo de transporte.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ML para Previsão de Uso do Solo</strong> — XGBoost treinado com features geoespaciais (preço imobiliário, acessibilidade, emprego, mistura de usos) prevê transformações de uso do solo com 81% de acurácia em validação espacial cruzada, que é sistematicamente mais rigorosa que o k-fold aleatório.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Índice de Acessibilidade Urbana</strong> — Random Forest agrega densidade de POIs, tempos de isócrona e frequência de transporte num score composto por categoria de serviço, comparável entre bairros e cidades, orientando políticas municipais para as áreas com maior défice de acessibilidade.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
