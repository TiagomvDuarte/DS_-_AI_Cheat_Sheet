import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './ClimateAI';

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

const m = modules[7];

export default function CLI8() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}>← Climate AI &amp; Sustainability</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Desflorestação — Detecção com ML e Satélite</h2>
        <p style={S.p}>
          A desflorestação tropical é responsável por 10–15% das emissões globais de CO2 e é a principal ameaça à biodiversidade terrestre. Global Forest Watch (GFW, WRI + Google) oferece monitorização global em tempo quase-real usando Landsat 30m e Sentinel-2 10m, com mais de 70 milhões de alertas GLAD gerados por ano.
        </p>
        <p style={S.p}>
          GLAD Alerts detectam perturbações florestais em 8 dias com Landsat. RADD (Radar for Detecting Deforestation) usa Sentinel-1 SAR que penetra nuvens — essencial para florestas tropicais com cobertura de nuvens permanente. CNNs aplicadas a patches de imagem multi-temporal (antes/depois) classificam o tipo de perturbação: corte raso, degradação, incêndio ou mineração.
        </p>
        <p style={S.p}>
          NovaStar/Planet NICFI disponibiliza imagens de 5m de zonas tropicais, detetando pistas de madeireiros ilegais antes da abertura de estradas. MapBiomas realiza mapeamento anual de uso da terra no Brasil (1985–presente) com Random Forest em Google Earth Engine — referência global de metodologia.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" width="100%" style={{ display: 'block' }}>
            {/* Background */}
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />

            {/* Title */}
            <text x="390" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">PIPELINE DE DETECÇÃO DE DESFLORESTAÇÃO</text>

            {/* === Sentinel-2 Time Series === */}
            <text x="10" y="45" fill="#fb923c" fontSize="9" fontWeight="600">SENTINEL-2 TIME SERIES</text>

            {/* Panel 2020 - Forest */}
            <rect x="10" y="52" width="80" height="60" rx="4" fill="#c2410c" stroke="#f97316" strokeWidth="1" />
            <rect x="12" y="54" width="76" height="56" rx="3" fill="#ea580c" />
            {/* Tree shapes - yellow so visible on orange bg */}
            {[20,32,44,56,68].map(x => (
              <g key={x}>
                <polygon points={`${x},80 ${x-6},90 ${x+6},90`} fill="#fbbf24" />
                <rect x={x-2} y="90" width="4" height="6" fill="#fbbf24" />
              </g>
            ))}
            <text x="50" y="122" textAnchor="middle" fill="#fb923c" fontSize="8" fontWeight="700">2020 — Floresta</text>

            {/* Arrow 2020→2021 */}
            <polygon points="98,82 91,79 91,85" fill="#f97316" />
            <line x1="90" y1="82" x2="98" y2="82" stroke="#f97316" strokeWidth="1.5" />

            {/* Panel 2021 - Clearing started */}
            <rect x="100" y="52" width="80" height="60" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="1" />
            <rect x="102" y="54" width="76" height="56" rx="3" fill="rgba(249,115,22,0.06)" />
            {[110,122,134].map(x => (
              <g key={x}>
                <polygon points={`${x},80 ${x-6},90 ${x+6},90`} fill="#f97316" />
                <rect x={x-2} y="90" width="4" height="6" fill="#f97316" />
              </g>
            ))}
            {/* Cleared area */}
            <rect x="148" y="60" width="28" height="44" rx="2" fill="rgba(249,115,22,0.15)" opacity="0.8" />
            <line x1="148" y1="60" x2="176" y2="104" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="140" y="122" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="700">2021 — Em Corte</text>

            {/* Arrow 2021→2022 */}
            <polygon points="188,82 181,79 181,85" fill="#f97316" />
            <line x1="180" y1="82" x2="188" y2="82" stroke="#f97316" strokeWidth="1.5" />

            {/* Panel 2022 - Deforested */}
            <rect x="190" y="52" width="80" height="60" rx="4" fill="rgba(234,88,12,0.20)" stroke="#f97316" strokeWidth="1" />
            <rect x="192" y="54" width="76" height="56" rx="3" fill="rgba(234,88,12,0.20)" />
            {/* Stumps */}
            {[200,215,230,245,260].map(x => (
              <g key={x}>
                <rect x={x-3} y="88" width="6" height="8" fill="#f97316" />
                <ellipse cx={x} cy="88" rx="5" ry="3" fill="#fb923c" />
              </g>
            ))}
            <text x="230" y="122" textAnchor="middle" fill="#fb923c" fontSize="8" fontWeight="700">2022 — Desflorestado</text>

            {/* Arrow to algorithm */}
            <polygon points="296,82 284,78 284,86" fill="#f97316" />
            <line x1="270" y1="82" x2="296" y2="82" stroke="#f97316" strokeWidth="2" />

            {/* === Change Detection Algorithm === x=298 w=220 center=408 */}
            <rect x="298" y="48" width="220" height="80" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="408" y="63" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">ALGORITMO DETECÇÃO</text>
            <text x="408" y="76" textAnchor="middle" fill="#fb923c" fontSize="8">Random Forest</text>
            <text x="408" y="88" textAnchor="middle" fill="#fb923c" fontSize="7.5">Bandas espectrais (B2–B12)</text>
            <text x="408" y="98" textAnchor="middle" fill="#fb923c" fontSize="7.5">NDVI delta (antes/depois)</text>
            <text x="408" y="108" textAnchor="middle" fill="#fb923c" fontSize="7.5">SAR Sentinel-1 (backscatter)</text>
            <text x="408" y="120" textAnchor="middle" fill="#fb923c" fontSize="7.5">Textura + índice de humidade</text>

            {/* Arrow to alert map */}
            <polygon points="536,88 524,84 524,92" fill="#f97316" />
            <line x1="518" y1="88" x2="536" y2="88" stroke="#f97316" strokeWidth="2" />

            {/* === Alert Map === x=538 w=232 center=654 */}
            <rect x="538" y="48" width="232" height="80" rx="6" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5" />
            <text x="654" y="63" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">MAPA DE ALERTAS</text>
            {/* Fake map pixels - shifted to center of new box */}
            {[[544,70,28,12,'#ea580c'],[574,70,22,12,'#f97316'],[598,70,32,12,'#ea580c'],
              [544,84,16,10,'#fb923c30'],[562,84,28,10,'#f97316'],[592,84,12,10,'#fb923c80'],
              [544,96,12,8,'#fbbf2480'],[558,96,24,8,'#f97316'],[584,96,20,8,'#fb923c60'],
              [544,106,14,8,'#ea580c'],[560,106,30,8,'#fb923c50'],[592,106,18,8,'#f97316']].map(([x,y,w,h,fill],i) => (
              <rect key={i} x={x} y={y} width={w} height={h} fill={fill} />
            ))}
            <text x="654" y="124" textAnchor="middle" fill="#fb923c" fontSize="7.5">Conf. Score: 0.94</text>

            {/* === Latency Comparison === */}
            <text x="10" y="175" fill="#fb923c" fontSize="9" fontWeight="600">LATÊNCIA DE MONITORIZAÇÃO (DIAS)</text>
            {[
              { label: 'Tradicional (anual)', days: 365, w: 220, fill: '#f97316' },
              { label: 'GLAD (Landsat 8d)', days: 8, w: 48, fill: '#f97316' },
              { label: 'RADD SAR (semanal)', days: 7, w: 42, fill: '#f97316' },
            ].map((item, i) => (
              <g key={i}>
                <text x="10" y={195 + i * 22} fill="#fb923c" fontSize="8">{item.label}</text>
                <rect x="155" y={184 + i * 22} width={item.w} height="14" rx="3" fill={item.fill} opacity="0.85" />
                <text x={162 + item.w} y={195 + i * 22} fill="#fff" fontSize="8" fontWeight="700">{item.days}d</text>
              </g>
            ))}

            {/* === Deforestation by Country Bar Chart === */}
            <text x="420" y="155" fill="#fb923c" fontSize="9" fontWeight="600">DESFLORESTAÇÃO ANUAL (Mha/ano)</text>
            {[
              { label: 'Brasil', val: 1.5, h: 60 },
              { label: 'RDC', val: 1.2, h: 48 },
              { label: 'Indonésia', val: 0.9, h: 36 },
              { label: 'Bolívia', val: 0.5, h: 20 },
              { label: 'Camarões', val: 0.3, h: 12 },
            ].map((c, i) => (
              <g key={i}>
                <rect x={430 + i * 58} y={240 - c.h} width="38" height={c.h} rx="3" fill="#f97316" opacity={0.9 - i * 0.1} />
                <text x={449 + i * 58} y={242 - c.h} textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="700">{c.val}</text>
                <text x={449 + i * 58} y="257" textAnchor="middle" fill="#fb923c" fontSize="7.5">{c.label}</text>
              </g>
            ))}
            <line x1="425" y1="240" x2="720" y2="240" stroke="rgba(249,115,22,0.4)" strokeWidth="1" />

            {/* Bottom labels */}
            <text x="390" y="305" textAnchor="middle" fill="rgba(249,115,22,0.3)" fontSize="8">GFW · GLAD Alerts · RADD · MapBiomas · Planet NICFI</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Global Forest Watch (WRI + Google):</strong> plataforma de monitorização global que combina Landsat 30m, Sentinel-2 10m e SAR para detecção de perturbação florestal em tempo quase-real. GLAD Alerts geram 70 milhões de alertas por ano com latência de 8 dias. RADD usa Sentinel-1 SAR, penetrando nuvens que cobrem permanentemente as florestas tropicais.
        </div>
        <div style={S.note}>
          MapBiomas: mapeamento anual de uso da terra no Brasil de 1985 ao presente usando Random Forest em Google Earth Engine. É considerada a referência metodológica global para mapeamento multi-anual de LULC à escala nacional.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Modelos de Distribuição de Espécies (SDM)</h2>
        <p style={S.p}>
          SDMs (Species Distribution Models) relacionam ocorrências de espécies com variáveis ambientais para prever distribuição actual e futura. GBIF (Global Biodiversity Information Facility) disponibiliza 2.5 mil milhões de registos de ocorrências — a maior base de dados de biodiversidade do mundo. MaxEnt (maximum entropy) é o método historicamente mais usado, operando com dados de presença-apenas.
        </p>
        <p style={S.p}>
          BRT (Boosted Regression Trees) capta interacções não-lineares entre espécies e ambiente. Deep SDMs aplicam CNNs directamente em rasters ambientais, superando abordagens tabulares na captura de padrões espaciais. O IPCC prevê extinção de 8–16% das espécies com 1.5–2°C de aquecimento; E. O. Wilson considera que já nos encontramos na 6ª extinção em massa.
        </p>
        <p style={S.p}>
          Range shifts: espécies movem-se em média 17 km para os pólos e 11 m de altitude por década. eBird (Cornell Lab) contabiliza 1.4 mil milhões de observações de aves, gerando modelos de abundância relativa semanais por espécie para monitorização de populações em declínio.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" width="100%" style={{ display: 'block' }}>
            <defs>
              <marker id="sdmArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <polygon points="0,0 6,3 0,6" fill="#f97316" />
              </marker>
              <marker id="sdmArrAmb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <polygon points="0,0 6,3 0,6" fill="#f59e0b" />
              </marker>
            </defs>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">PIPELINE SDM — DISTRIBUIÇÃO DE ESPÉCIES</text>

            {/* Input data */}
            <rect x="10" y="35" width="140" height="110" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="80" y="52" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">DADOS DE OCORRÊNCIA</text>
            {[['GBIF','2.5B registos'],['iNaturalist','200M obs.'],['Museus','colecções hist.'],['eBird','1.4B aves']].map(([src,detail],i) => (
              <g key={i}>
                <rect x="16" y={58 + i*20} width="8" height="8" rx="2" fill="#f97316" opacity="0.7" />
                <text x="28" y={67 + i*20} fill="#fbbf24" fontSize="8" fontWeight="600">{src}</text>
                <text x="28" y={77 + i*20} fill="rgba(249,115,22,0.6)" fontSize="7">{detail}</text>
              </g>
            ))}

            {/* Environmental predictors */}
            <rect x="10" y="158" width="140" height="112" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="80" y="174" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">PREDITORES AMBIENTAIS</text>
            {[['WorldClim','T°, precipitação'],['Elevação DEM','SRTM 90m'],['Solo / Vegetação','SoilGrids, MODIS'],['NDVI / EVI','fenologia']].map(([src,detail],i) => (
              <g key={i}>
                <rect x="16" y={181 + i*20} width="8" height="8" rx="2" fill="#f97316" opacity="0.7" />
                <text x="28" y={191 + i*20} fill="#fbbf24" fontSize="8" fontWeight="600">{src}</text>
                <text x="28" y={201 + i*20} fill="rgba(249,115,22,0.6)" fontSize="7">{detail}</text>
              </g>
            ))}

            {/* Arrows */}
            <line x1="150" y1="90" x2="193" y2="128" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#sdmArr)" />
            <line x1="150" y1="210" x2="193" y2="154" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#sdmArr)" />

            {/* Model box */}
            <rect x="198" y="100" width="140" height="110" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="268" y="118" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">MODELO SDM</text>
            {[['MaxEnt','presença-apenas'],['BRT','não-linear'],['CNN','rasters espaciais'],['Ensemble','média ponderada']].map(([m2,d],i) => (
              <g key={i}>
                <text x="210" y={133 + i*18} fill="#fb923c" fontSize="8" fontWeight="600">{m2}</text>
                <text x="210" y={143 + i*18} fill="rgba(249,115,22,0.6)" fontSize="7">{d}</text>
              </g>
            ))}

            {/* Arrow to current habitat */}
            <line x1="338" y1="150" x2="354" y2="150" stroke="#f97316" strokeWidth="2" markerEnd="url(#sdmArr)" />

            {/* Current habitat suitability */}
            <rect x="360" y="60" width="120" height="110" rx="6" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5" />
            <text x="420" y="76" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">HABITAT ACTUAL</text>
            {/* Gradient habitat map pixels - orange palette */}
            {Array.from({length:8}, (_,row) => Array.from({length:10}, (_,col) => {
              const val = Math.max(0, 1 - ((row-2)**2 + (col-4)**2)/20);
              return <rect key={`${row}-${col}`} x={364+col*11} y={82+row*10} width="10" height="9" fill={`rgba(234,88,12,${(0.12 + val*0.88).toFixed(2)})`} />;
            }))}
            <text x="420" y="186" textAnchor="middle" fill="#fb923c" fontSize="7.5">0–100% adequabilidade</text>

            {/* Arrow to future */}
            <line x1="480" y1="115" x2="496" y2="115" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#sdmArrAmb)" />

            {/* Future projection */}
            <rect x="502" y="60" width="120" height="110" rx="6" fill="var(--bg-secondary)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="562" y="76" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700">PROJECÇÃO SSP3-7.0</text>
            <text x="562" y="86" textAnchor="middle" fill="#f59e0b" fontSize="7">2080</text>
            {Array.from({length:8}, (_,row) => Array.from({length:10}, (_,col) => {
              const val = Math.max(0, 1 - ((row-0)**2 + (col-6)**2)/18);
              const g = Math.round(val * 160 + 30).toString(16).padStart(2,'0');
              return <rect key={`${row}-${col}`} x={506+col*11} y={92+row*10} width="10" height="9" fill={`#f5${g}0b`} opacity={0.3 + val*0.6} />;
            }))}
            <text x="562" y="188" textAnchor="middle" fill="#fbbf24" fontSize="7.5">Range shift: polo + altitude</text>

            {/* Biodiversity hotspots */}
            <rect x="638" y="60" width="132" height="180" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="704" y="77" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">HOTSPOTS GLOBAIS</text>
            <text x="704" y="89" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7.5">36 regiões críticas (Myers 2000)</text>
            {[
              { label: 'Amazónia', ext: '5.5M km²', pct: 90 },
              { label: 'Mata Atlântica', ext: '0.12M km²', pct: 85 },
              { label: 'Sundaland (SE Ásia)', ext: '1.5M km²', pct: 80 },
              { label: 'Mediterrâneo', ext: '2.3M km²', pct: 70 },
              { label: 'Madagascar', ext: '0.6M km²', pct: 65 },
              { label: 'Indo-Burma', ext: '2.1M km²', pct: 60 },
              { label: 'California', ext: '0.3M km²', pct: 55 },
            ].map((h, i) => (
              <g key={i}>
                <text x="644" y={107 + i*19} fill="#fb923c" fontSize="7.5" fontWeight="600">{h.label}</text>
                <rect x="644" y={112 + i*19} width={h.pct * 0.7} height="5" rx="2" fill="#f97316" opacity="0.6" />
                <text x="720" y={117 + i*19} fill="rgba(249,115,22,0.6)" fontSize="6.5">{h.ext}</text>
              </g>
            ))}

            <text x="390" y="285" textAnchor="middle" fill="rgba(249,115,22,0.3)" fontSize="8">GBIF · MaxEnt · BRT · WorldClim · eBird · IPCC AR6</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>GBIF:</strong> 2.5 mil milhões de registos de ocorrências de espécies — a maior base de dados de biodiversidade do mundo. MaxEnt é o método SDM mais usado historicamente; Deep SDMs em CNNs superam abordagens tabulares para dados espaciais. IPCC prevê extinção de 8–16% das espécies com 1.5–2°C de aquecimento global.
        </div>
        <div style={S.note}>
          Range shifts documentados: espécies deslocam-se em média 17 km para os pólos e 11 m de altitude por década em resposta ao aquecimento. eBird (Cornell Lab): 1.4 mil milhões de observações geram modelos de abundância relativa semanais por espécie para monitorização de populações em declínio.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Land Use &amp; Land Cover Change (LULC)</h2>
        <p style={S.p}>
          LULC (Land Use and Land Cover) change é o segundo maior driver de emissões de gases com efeito de estufa e o principal driver de perda de biodiversidade. Datasets globais de referência: ESA WorldCover 2021 (10m, Sentinel-1+2), Dynamic World (Google, 10m, tempo quase-real), MODIS Land Cover (500m, anual desde 2001) e Copernicus Global Land Service.
        </p>
        <p style={S.p}>
          Classificação com ML: Random Forest em bandas espectrais multi-data + índices (NDVI, NDWI, MNDWI) é o método dominante. Deep learning com ResNet/U-Net em imagens de satélite para segmentação semântica pixel a pixel supera Random Forest em áreas heterogéneas. LSTM/Transformer aplicados a NDVI temporal distinguem culturas anuais de pastagem permanente pela fenologia diferente.
        </p>
        <p style={S.p}>
          Urban sprawl: ML prevê expansão urbana e impacto em habitat — fundamental para planeamento e compensação de biodiversidade. Carbon accounting: LULC change multiplicado por factores de emissão por bioma gera inventários históricos para os relatórios UNFCCC.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 290" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="290" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">CLASSIFICAÇÃO LULC E TRANSIÇÕES 2000–2020</text>

            {/* LULC Map */}
            <text x="10" y="42" fill="#fb923c" fontSize="9" fontWeight="600">MAPA LULC (10 classes)</text>
            {/* Grid map */}
            {[
              ['#ea580c','#c2410c','#ea580c','#f97316','#ea580c','#c2410c','#f97316','#f97316'],
              ['#c2410c','#ea580c','#f97316','#f97316','#f97316','#ea580c','#f97316','rgba(249,115,22,0.6)'],
              ['#ea580c','#f97316','#f97316','#f97316','#f97316','#fb923c','#fb923c','rgba(249,115,22,0.6)'],
              ['#f97316','#f97316','#f97316','#f97316','#fb923c','#fb923c','rgba(249,115,22,0.3)','rgba(249,115,22,0.2)'],
              ['#c2410c','#fb923c','#fb923c','#f97316','#f97316','#f59e0b','rgba(249,115,22,0.2)','rgba(249,115,22,0.2)'],
              ['#ea580c','#fb923c','#f97316','#f97316','#f59e0b','#f59e0b','#f59e0b','rgba(249,115,22,0.15)'],
            ].map((row, ri) => row.map((fill, ci) => (
              <rect key={`${ri}-${ci}`} x={10 + ci*28} y={50 + ri*25} width="26" height="23" fill={fill} opacity="0.85" />
            )))}

            {/* Legend - row1: 4 items, row2: 3 items with wider spacing */}
            {[
              { fill: '#c2410c', label: 'Floresta',       x: 10,  y: 210 },
              { fill: '#fb923c', label: 'Pastagem',       x: 65,  y: 210 },
              { fill: '#f97316', label: 'Culturas',       x: 120, y: 210 },
              { fill: 'rgba(249,115,22,0.3)', label: 'Urbano', x: 175, y: 210 },
              { fill: '#f59e0b', label: 'Zonas húmidas',  x: 10,  y: 228 },
              { fill: '#fbbf24', label: 'Solo nu',        x: 100, y: 228 },
              { fill: 'rgba(251,191,36,0.5)', label: 'Água', x: 155, y: 228 },
            ].map((item, i) => (
              <g key={i}>
                <rect x={item.x} y={item.y} width="10" height="10" rx="2" fill={item.fill} stroke="#f97316" strokeWidth="0.5" />
                <text x={item.x + 14} y={item.y + 9} fill="#fb923c" fontSize="8">{item.label}</text>
              </g>
            ))}

            {/* Accuracy */}
            <rect x="10" y="248" width="200" height="30" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="110" y="260" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Accuracy global: 91%</text>
            <text x="110" y="272" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7.5">Confusão: pastagem / culturas (fenologia)</text>

            {/* Sankey Diagram */}
            <text x="260" y="42" fill="#fb923c" fontSize="9" fontWeight="600">TRANSIÇÕES 2000–2020 (Sankey)</text>

            {/* Source nodes */}
            {[
              { label: 'Floresta', y: 65, fill: '#ea580c', h: 80 },
              { label: 'Pastagem', y: 160, fill: '#fb923c', h: 40 },
              { label: 'Culturas', y: 215, fill: '#f97316', h: 30 },
            ].map((n, i) => (
              <g key={i}>
                <rect x="260" y={n.y} width="60" height={n.h} rx="4" fill={n.fill} opacity="0.8" />
                <text x="290" y={n.y + n.h/2 + 4} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600">{n.label}</text>
              </g>
            ))}

            {/* Target nodes */}
            {[
              { label: 'Culturas', y: 70, fill: '#f97316', h: 60 },
              { label: 'Pastagem', y: 145, fill: '#fb923c', h: 35 },
              { label: 'Urbano', y: 195, fill: 'rgba(249,115,22,0.2)', h: 25 },
              { label: 'Culturas+', y: 235, fill: '#f97316', h: 20 },
            ].map((n, i) => (
              <g key={i}>
                <rect x="460" y={n.y} width="60" height={n.h} rx="4" fill={n.fill} opacity="0.8" />
                <text x="490" y={n.y + n.h/2 + 4} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600">{n.label}</text>
              </g>
            ))}

            {/* Flow paths */}
            {[
              { y1: 68, y2: 90, h1: 45, h2: 40, stroke: '#ea580c', opacity: 0.7 },
              { y1: 115, y2: 164, h1: 25, h2: 15, stroke: '#ea580c', opacity: 0.5 },
              { y1: 165, y2: 147, h1: 18, h2: 16, stroke: '#fb923c', opacity: 0.6 },
              { y1: 185, y2: 198, h1: 12, h2: 20, stroke: '#fb923c', opacity: 0.5 },
              { y1: 218, y2: 238, h1: 25, h2: 15, stroke: '#f97316', opacity: 0.6 },
            ].map((f, i) => (
              <path key={i} d={`M 320,${f.y1} C 390,${f.y1} 390,${f.y2} 460,${f.y2} L 460,${f.y2+f.h2} C 390,${f.y2+f.h2} 390,${f.y1+f.h1} 320,${f.y1+f.h1} Z`}
                fill={f.stroke} opacity={f.opacity} />
            ))}

            {/* Labels on flows */}
            <text x="390" y="108" textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="600">Floresta→Culturas</text>
            <text x="390" y="190" textAnchor="middle" fill="#fff" fontSize="7.5">Floresta→Pastagem</text>

            {/* ML methods panel */}
            <rect x="540" y="50" width="230" height="220" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="655" y="67" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">MÉTODOS ML PARA LULC</text>
            {[
              { name: 'Random Forest', desc: 'bandas espectrais + NDVI/NDWI', acc: 88, color2: '#f97316' },
              { name: 'U-Net (CNN)', desc: 'segmentação semântica pixel', acc: 93, color2: '#f97316' },
              { name: 'LSTM temporal', desc: 'série NDVI — fenologia', acc: 91, color2: '#f97316' },
              { name: 'Transformer', desc: 'multi-temporal, multi-sensor', acc: 94, color2: '#f97316' },
            ].map((ml, i) => (
              <g key={i}>
                <text x="550" y={88 + i*46} fill={ml.color2} fontSize="8.5" fontWeight="700">{ml.name}</text>
                <text x="550" y={100 + i*46} fill="rgba(249,115,22,0.6)" fontSize="7.5">{ml.desc}</text>
                <rect x="550" y={107 + i*46} width={ml.acc * 1.6} height="6" rx="3" fill={ml.color2} opacity="0.7" />
                <text x={554 + ml.acc * 1.6} y={114 + i*46} fill={ml.color2} fontSize="7.5" fontWeight="700">{ml.acc}%</text>
              </g>
            ))}

            <text x="390" y="282" textAnchor="middle" fill="rgba(249,115,22,0.3)" fontSize="8">ESA WorldCover · Dynamic World · MODIS · Copernicus · Google Earth Engine</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>ESA WorldCover 2021</strong> (10m, Sentinel-1+2) e Dynamic World (Google, 10m, quase tempo-real) são os datasets globais de referência. U-Net para segmentação semântica pixel a pixel supera Random Forest em áreas heterogéneas; LSTM distingue culturas anuais de pastagem por fenologia temporal.
        </div>
        <div style={S.note}>
          Carbon accounting: LULC change multiplicado por factores de emissão por bioma (kgCO2/ha/ano) produz inventários históricos de emissões para os relatórios nacionais à UNFCCC. Urban sprawl ML prevê expansão urbana e impacto em habitat para compensação de biodiversidade.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. REDD+ e Mercados de Carbono Florestal</h2>
        <p style={S.p}>
          REDD+ (Reducing Emissions from Deforestation and Forest Degradation) é o principal mecanismo de pagamento por serviços de ecossistema florestal — países e empresas pagam para evitar desflorestação. O estudo Calel et al. (Science 2023) mostrou que 94% dos créditos REDD+ do Verra não representavam reduções reais — questionando a integridade do mercado.
        </p>
        <p style={S.p}>
          Dois problemas fundamentais: adicionality (o que teria acontecido sem o projecto?) e permanência (e se a floresta arder 10 anos depois?). ML melhora MRV (Monitoring, Reporting, Verification): Sentinel-2 + SAR para desflorestação; modelos alométricos + LiDAR para biomassa acima do solo (AGB); GEDI (laser spaceborne LiDAR da NASA) para perfis de altura de copa em escala global.
        </p>
        <p style={S.p}>
          Soto-Navarro et al. (2020): mapa global de carbono florestal a 100m de resolução usando Random Forest em GEDI + Landsat + covariáveis ambientais. Jurisdictional REDD+ à escala nacional resolve o problema de leakage (desflorestação desloca-se para área adjacente). LEAF Coalition: parceria pública-privada para pagamentos nacionais de carbono florestal.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 310" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">MECANISMO REDD+ — CRÉDITOS DE CARBONO FLORESTAL</text>

            {/* Baseline scenario */}
            <rect x="10" y="38" width="200" height="100" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="110" y="55" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">CENÁRIO DE REFERÊNCIA</text>
            <text x="110" y="67" textAnchor="middle" fill="#fb923c" fontSize="7.5">(sem REDD+)</text>
            {/* Declining forest bars */}
            {[70,55,38,22,10].map((h,i) => (
              <rect key={i} x={20 + i*34} y={138 - h} width="28" height={h} rx="2" fill="#f97316" opacity={0.8 - i*0.1} />
            ))}
            {['2020','2022','2024','2026','2028'].map((y,i) => (
              <text key={i} x={34 + i*34} y="150" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="6.5">{y}</text>
            ))}
            <text x="110" y="163" textAnchor="middle" fill="#fb923c" fontSize="7.5">Desflorestação contínua</text>

            {/* Arrow */}
            <line x1="215" y1="88" x2="245" y2="88" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="230" y="82" textAnchor="middle" fill="#fb923c" fontSize="7">vs</text>

            {/* REDD+ scenario */}
            <rect x="248" y="38" width="200" height="100" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="348" y="55" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">CENÁRIO REDD+</text>
            <text x="348" y="67" textAnchor="middle" fill="#fb923c" fontSize="7.5">(floresta protegida)</text>
            {[70,68,66,65,64].map((h,i) => (
              <rect key={i} x={258 + i*34} y={138 - h} width="28" height={h} rx="2" fill="#f97316" opacity={0.7 + i*0.05} />
            ))}
            {['2020','2022','2024','2026','2028'].map((y,i) => (
              <text key={i} x={272 + i*34} y="150" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="6.5">{y}</text>
            ))}
            <text x="348" y="162" textAnchor="middle" fill="#fb923c" fontSize="7.5">Floresta mantida → créditos</text>

            {/* Credits = difference */}
            <rect x="468" y="38" width="130" height="100" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="533" y="55" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">CRÉDITOS</text>
            <text x="533" y="67" textAnchor="middle" fill="#fb923c" fontSize="7.5">baseline - real = tCO2</text>
            <text x="533" y="95" textAnchor="middle" fill="#fbbf24" fontSize="22" fontWeight="800">Δ</text>
            <text x="533" y="115" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">tCO2 evitado</text>
            <text x="533" y="130" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7.5">= créditos verificáveis</text>

            {/* Verification pipeline */}
            <text x="10" y="178" fill="#fb923c" fontSize="9" fontWeight="600">PIPELINE DE VERIFICAÇÃO MRV</text>
            {[
              { label: 'Sentinel-2 + SAR', desc: 'Área desflorestada (ha)' },
              { label: 'AGB + GEDI LiDAR', desc: 'Densidade de biomassa (tC/ha)' },
              { label: 'Factor de emissão', desc: '× 3.67 (CO2/C ratio)' },
              { label: 'Auditoria 3ª parte', desc: 'Verra VCS / Gold Standard' },
            ].map((step, i) => (
              <g key={i}>
                <rect x={10 + i*185} y="188" width="175" height="42" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
                <text x={20 + i*185} y="205" fill="#f97316" fontSize="8" fontWeight="700">{step.label}</text>
                <text x={20 + i*185} y="220" fill="#fb923c" fontSize="7.5">{step.desc}</text>
                {i < 3 && <><line x1={186+i*185} y1="209" x2={193+i*185} y2="209" stroke="#f97316" strokeWidth="1.5" /><polygon points={`${196+i*185},209 ${186+i*185},205 ${186+i*185},213`} fill="#f97316" /></>}
              </g>
            ))}

            {/* Buffer pool / risks */}
            <rect x="10" y="245" width="375" height="40" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="1" />
            <text x="20" y="261" fill="#fbbf24" fontSize="8" fontWeight="700">Buffer Pool (risco):</text>
            <text x="20" y="275" fill="#fb923c" fontSize="7.5">15–20% dos créditos retidos para cobrir risco de incêndio/seca/perturbação</text>

            {/* Leakage note */}
            <rect x="400" y="245" width="370" height="40" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="410" y="261" fill="#f97316" fontSize="8" fontWeight="700">Leakage + Jurisdictional REDD+:</text>
            <text x="410" y="275" fill="#fb923c" fontSize="7.5">Escala nacional elimina deslocação da desflorestação para áreas adjacentes</text>

            <text x="390" y="303" textAnchor="middle" fill="rgba(249,115,22,0.3)" fontSize="7.5">Verra VCS · Gold Standard · GEDI NASA · LEAF Coalition · Calel et al. Science 2023</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>GEDI (NASA):</strong> LiDAR spaceborne que gera perfis de altura de copa em escala global — base para mapas de biomassa a 100m de resolução (Soto-Navarro et al. 2020). ML (Random Forest) combina GEDI + Landsat + covariáveis ambientais para estimar AGB (Above-Ground Biomass) com precisão validável por inventários florestais.
        </div>
        <div style={S.note}>
          Calel et al. (Science 2023): 94% dos créditos REDD+ do Verra VCS não representavam reduções reais de emissões — problema central de adicionality na construção da linha de base contrafactual. Jurisdictional REDD+ à escala nacional e Jurisdictional and Nested REDD+ (JNR) tentam resolver esta limitação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Monitorização de Biodiversidade com IA</h2>
        <p style={S.p}>
          A monitorização da biodiversidade foi transformada por sensores ubíquos e ML. Wildlife Insights (Google + WCS) usa CNN que identifica automaticamente mais de 1000 espécies em fotos de camera traps, reduzindo o trabalho de classificação manual de meses para dias. iNaturalist conta com 3.5M utilizadores e 200M observações — o modelo CV sugere espécie em tempo real com 94% de accuracy no top-1.
        </p>
        <p style={S.p}>
          Bioacústica: BirdNET (Cornell + TU Chemnitz) aplica CNN em espectrogramas de áudio e identifica 6000+ espécies de aves em gravações de campo. O Índice de Integridade Biótica combina via ML múltiplas métricas (riqueza de espécies, abundância, integridade funcional) num mapa global de saúde dos ecossistemas.
        </p>
        <p style={S.p}>
          TNFD (Taskforce on Nature-related Financial Disclosures) é o equivalente do TCFD para natureza — empresas avaliam dependências e impactos na biodiversidade. SBTN (Science Based Targets for Nature) define metas baseadas em ciência para proteger e restaurar a natureza, complementando o SBTi de carbono. O limite de integridade da biosfera (Planetary Boundaries) já foi excedido em mais de 10x o valor seguro — a crise da biodiversidade é tão urgente quanto a climática.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 320" width="100%" style={{ display: 'block' }}>
            <rect width="780" height="320" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">MONITORIZAÇÃO DE BIODIVERSIDADE — TECNOLOGIAS E IA</text>

            {/* Quadrant 1: Camera traps */}
            <rect x="10" y="35" width="178" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="99" y="52" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Camera Traps + CNN</text>
            {/* Camera icon */}
            <rect x="40" y="60" width="30" height="22" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <circle cx="55" cy="71" r="7" fill="none" stroke="#f97316" strokeWidth="1.5" />
            <circle cx="55" cy="71" r="3" fill="#f97316" opacity="0.6" />
            <rect x="66" y="63" width="5" height="5" rx="1" fill="#f97316" />
            {/* CNN boxes */}
            {[0,1,2].map(i => (
              <rect key={i} x={90 + i*22} y="62" width="18" height="18" rx="2" fill={`#fb923c${i===1?'':'40'}`} stroke="#f97316" strokeWidth="1" />
            ))}
            <text x="99" y="96" textAnchor="middle" fill="#fb923c" fontSize="8">Wildlife Insights</text>
            <text x="99" y="108" textAnchor="middle" fill="#fb923c" fontSize="7.5">1000+ espécies</text>
            <text x="99" y="120" textAnchor="middle" fill="#fb923c" fontSize="7.5">meses → dias</text>
            <text x="99" y="132" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">Google + WCS</text>
            <text x="99" y="144" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">iNaturalist 94% top-1</text>

            {/* Quadrant 2: Acoustic */}
            <rect x="198" y="35" width="178" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="287" y="52" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Bioacústica + CNN</text>
            {/* Waveform */}
            <polyline points="210,90 220,75 230,95 240,70 250,92 260,78 270,88 280,72 290,90 300,76 310,88 320,80 330,88 340,78 350,88 360,82" fill="none" stroke="#f97316" strokeWidth="1.5" />
            {/* Spectrogram rect */}
            <rect x="210" y="98" width="150" height="20" rx="2" fill="rgba(249,115,22,0.06)" />
            {Array.from({length:30}, (_,i) => (
              <rect key={i} x={212+i*5} y={98+Math.random()*10} width="4" height={5+Math.random()*14} rx="1" fill="#f97316" opacity="0.6" />
            ))}
            <text x="287" y="130" textAnchor="middle" fill="#fb923c" fontSize="8">BirdNET (Cornell)</text>
            <text x="287" y="142" textAnchor="middle" fill="#fb923c" fontSize="7.5">6000+ espécies aves</text>

            {/* Quadrant 3: eDNA */}
            <rect x="10" y="165" width="178" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="99" y="182" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">eDNA + ML</text>
            {/* DNA helix simplified - lines behind, circles on top */}
            {[0,1,2,3].map(i => (
              <line key={i} x1={64+i*20} y1={195+(i%2===0?0:15)} x2={79+i*20} y2={195+((i+1)%2===0?0:15)} stroke="#f97316" strokeWidth="1" opacity="0.4" />
            ))}
            {[0,1,2,3,4].map(i => (
              <g key={i}>
                <circle cx={59 + i*20} cy={195 + (i%2 === 0 ? 0 : 15)} r="5" fill="#f97316" opacity="0.9" />
                <circle cx={59 + i*20} cy={210 - (i%2 === 0 ? 0 : 15)} r="5" fill="#fb923c" opacity="0.7" />
              </g>
            ))}
            <text x="99" y="225" textAnchor="middle" fill="#fb923c" fontSize="8">Água + Solo amostrados</text>
            <text x="99" y="237" textAnchor="middle" fill="#fb923c" fontSize="7.5">ML: detecção espécies</text>
            <text x="99" y="249" textAnchor="middle" fill="#fb923c" fontSize="7.5">sem observação directa</text>
            <text x="99" y="261" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">Metabarcoding 16S/18S</text>

            {/* Quadrant 4: Satellite */}
            <rect x="198" y="165" width="178" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="287" y="182" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Satélite — Habitat</text>
            {/* Satellite habitat map: two patches + horizontal corridor */}
            {/* Left habitat patch */}
            <rect x="206" y="195" width="32" height="32" rx="3" fill="#c2410c" opacity="0.9" />
            <rect x="210" y="199" width="10" height="8" rx="1" fill="#ea580c" opacity="0.7" />
            <rect x="222" y="205" width="12" height="10" rx="1" fill="#ea580c" opacity="0.5" />
            {/* Corridor (horizontal) */}
            <rect x="238" y="208" width="26" height="8" rx="2" fill="#f97316" opacity="0.6" />
            <text x="251" y="226" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="6">corredor</text>
            {/* Right habitat patch */}
            <rect x="264" y="192" width="34" height="36" rx="3" fill="#c2410c" opacity="0.9" />
            <rect x="268" y="196" width="14" height="12" rx="1" fill="#ea580c" opacity="0.6" />
            <rect x="268" y="210" width="10" height="8" rx="1" fill="#f97316" opacity="0.5" />
            {/* Satellite icon top right */}
            <rect x="306" y="190" width="16" height="10" rx="1" fill="none" stroke="#f97316" strokeWidth="1" />
            <line x1="298" y1="195" x2="306" y2="195" stroke="#f97316" strokeWidth="1" />
            <line x1="322" y1="195" x2="330" y2="195" stroke="#f97316" strokeWidth="1" />
            <line x1="314" y1="190" x2="314" y2="186" stroke="#f97316" strokeWidth="1" />
            {/* Text labels */}
            <text x="287" y="242" textAnchor="middle" fill="#fb923c" fontSize="8" fontWeight="600">Conectividade</text>
            <text x="287" y="254" textAnchor="middle" fill="#fb923c" fontSize="7.5">fenologia + habitat</text>
            <text x="287" y="266" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">Índice Integridade Biótica</text>
            <text x="287" y="278" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">TNFD · SBTN</text>

            {/* Planetary Boundaries Diagram */}
            <text x="440" y="42" fill="#fb923c" fontSize="9" fontWeight="600">PLANETARY BOUNDARIES — INTEGRIDADE DA BIOSFERA</text>
            {/* Outer boundary */}
            <circle cx="580" cy="170" r="110" fill="none" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,2" />
            {/* Safe zone */}
            <circle cx="580" cy="170" r="60" fill="#fb923c10" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" />
            {/* Segments — 9 planetary boundaries */}
            {[
              { angle: 0, name: 'Clima', val: 0.65, safe: 0.55, exceeded: false },
              { angle: 40, name: 'Biodiversidade', val: 1.0, safe: 0.55, exceeded: true },
              { angle: 80, name: 'P/N Ciclos', val: 0.85, safe: 0.55, exceeded: true },
              { angle: 120, name: 'Uso Terra', val: 0.72, safe: 0.55, exceeded: true },
              { angle: 160, name: 'Água doce', val: 0.5, safe: 0.55, exceeded: false },
              { angle: 200, name: 'Aerossóis', val: 0.3, safe: 0.55, exceeded: false },
              { angle: 240, name: 'Ozono', val: 0.45, safe: 0.55, exceeded: false },
              { angle: 280, name: 'Químicos', val: 0.9, safe: 0.55, exceeded: true },
              { angle: 320, name: 'Oceanos', val: 0.58, safe: 0.55, exceeded: true },
            ].map((b, i) => {
              const rad = (b.angle - 90) * Math.PI / 180;
              const r2 = b.val * 110;
              const x2 = 580 + r2 * Math.cos(rad);
              const y2 = 170 + r2 * Math.sin(rad);
              const lx = 580 + 122 * Math.cos(rad);
              const ly = 170 + 122 * Math.sin(rad);
              return (
                <g key={i}>
                  <line x1="580" y1="170" x2={x2} y2={y2} stroke={b.exceeded ? '#ea580c' : 'rgba(249,115,22,0.35)'} strokeWidth="3" />
                  <circle cx={x2} cy={y2} r="5" fill={b.exceeded ? '#ea580c' : 'rgba(249,115,22,0.35)'} stroke={b.exceeded ? '#fbbf24' : '#f97316'} strokeWidth="1" />
                  <text x={lx} y={ly} textAnchor="middle" fill={b.exceeded ? '#fbbf24' : 'rgba(249,115,22,0.6)'} fontSize="7" fontWeight="600">{b.name}</text>
                </g>
              );
            })}
            <text x="580" y="162" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Zona</text>
            <text x="580" y="174" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Segura</text>

            {/* Legend */}
            <circle cx="735" cy="262" r="5" fill="#ea580c" stroke="#fbbf24" strokeWidth="1" />
            <text x="655" y="265" fill="#fbbf24" fontSize="8">Fronteira excedida</text>
            <circle cx="735" cy="280" r="5" fill="rgba(249,115,22,0.35)" stroke="#f97316" strokeWidth="1" />
            <text x="655" y="283" fill="#fb923c" fontSize="8">Dentro da fronteira</text>

            <text x="580" y="300" textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Biodiversidade: +10x acima do limite seguro</text>

            <text x="390" y="312" textAnchor="middle" fill="rgba(249,115,22,0.3)" fontSize="7.5">Wildlife Insights · BirdNET · iNaturalist · TNFD · SBTN · Planetary Boundaries (Rockström 2009)</text>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Wildlife Insights (Google + WCS):</strong> CNN identifica automaticamente mais de 1000 espécies em camera traps — reduz classificação manual de meses para dias. BirdNET identifica 6000+ espécies de aves por CNN em espectrogramas. iNaturalist: 94% accuracy top-1 com 200M observações de 3.5M utilizadores.
        </div>
        <div style={S.note}>
          Planetary Boundaries (Rockström et al. 2009, actualizado Steffen et al. 2015): o limite de integridade da biosfera já foi excedido em mais de 10x o valor seguro — a crise da biodiversidade é tão urgente quanto a climática. TNFD e SBTN definem frameworks corporativos para natureza equivalentes ao TCFD e SBTi para clima.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Desflorestação — Detecção com ML e Satélite</strong> — Global Forest Watch usa Landsat e Sentinel com ML para detectar perda florestal semanalmente a 30m de resolução; CNNs e change detection algorithms identificam corte, fogo e degradação — base de REDD+ e compromissos de zero desflorestação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos de Distribuição de Espécies (SDM)</strong> — SDMs (MaxEnt, BioClim, Random Forests) modelam a relação entre ocorrências de espécies e variáveis climáticas para prever distribuições actuais e futuras; usados para identificar hotspots de biodiversidade em risco e priorizar áreas de conservação.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Land Use &amp; Land Cover Change (LULC)</strong> — classificação de uso do solo com CNNs em imagens Sentinel-2 e Landsat a escala global (ESA WorldCover, Dynamic World); mudanças de LULC são a segunda maior fonte de emissões de CO₂ depois dos combustíveis fósseis.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>REDD+ e Mercados de Carbono Florestal</strong> — REDD+ (Reducing Emissions from Deforestation and Forest Degradation) remunera países em desenvolvimento por preservar florestas; créditos de carbono florestal verificados por satélite e ML aumentam a integridade ambiental vs. auditoria terrestre.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Monitorização de Biodiversidade com IA</strong> — bioacústica com CNNs identifica espécies por vocalizações (BirdNET, Rainforest Connection); camera traps com YOLOv8 classificam animais; eDNA com ML detecta espécies por ADN ambiental em água — monitorização de biodiversidade a escala sem precedente.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
