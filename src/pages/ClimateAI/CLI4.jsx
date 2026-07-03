import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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

const m = modules[3];

export default function CLI4() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {m.num}</span>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Observação por Satélite e Índices Espectrais</h2>
        <p style={S.p}>O Sentinel-2 (ESA Copernicus) fornece imagens multiespectrais de 13 bandas com resolução de 10 a 60 metros e revisita de 5 dias — completamente gratuito e de acesso aberto. É a base de dados de satélite mais utilizada em agricultura de precisão europeia. O espectro electromagnético explorado vai do azul (443 nm) ao SWIR (2190 nm), permitindo calcular dezenas de índices espectrais sensíveis a diferentes propriedades da vegetação e do solo.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 310" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="310" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" fill="#f97316" fontSize="12" textAnchor="middle" fontWeight="700">Sentinel-2: Bandas Espectrais e Índices Vegetação</text>

            {/* Spectrum bar */}
            <defs>
              <linearGradient id="spectrum" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="15%" stopColor="#f97316" />
                <stop offset="30%" stopColor="#fb923c" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="65%" stopColor="#fb923c" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <rect x="40" y="35" width="700" height="18" fill="url(#spectrum)" rx="4" />
            <text x="40" y="72" fill="rgba(249,115,22,0.6)" fontSize="8">443nm</text>
            <text x="380" y="72" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">740nm (Red Edge)</text>
            <text x="720" y="72" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">2190nm</text>
            <text x="380" y="32" fill="#fb923c" fontSize="9" textAnchor="middle">Espectro Sentinel-2 (13 bandas)</text>

            {/* Band markers */}
            {[
              { nm: 443, x: 40, label: 'B1', color: '#fb923c' },
              { nm: 490, x: 80, label: 'B2', color: '#f97316' },
              { nm: 560, x: 160, label: 'B3', color: '#34d399' },
              { nm: 665, x: 265, label: 'B4 RED', color: '#fb923c' },
              { nm: 705, x: 310, label: 'B5 RE', color: '#c084fc' },
              { nm: 740, x: 350, label: 'B6 RE', color: '#fb923c' },
              { nm: 783, x: 395, label: 'B7 RE', color: '#f97316' },
              { nm: 842, x: 450, label: 'B8 NIR', color: '#f97316' },
              { nm: 865, x: 480, label: 'B8A', color: '#c2410c' },
              { nm: 945, x: 540, label: 'B9', color: '#f97316' },
              { nm: 1375, x: 590, label: 'B10', color: '#3b0764' },
              { nm: 1610, x: 640, label: 'B11 SWIR', color: '#2e1065' },
              { nm: 2190, x: 720, label: 'B12 SWIR', color: '#1e0533' },
            ].map((b) => (
              <line key={b.label} x1={b.x + 40} y1="35" x2={b.x + 40} y2="53" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
            ))}

            {/* NDVI formula and colormap */}
            <text x="390" y="95" fill="#f97316" fontSize="11" textAnchor="middle" fontWeight="700">NDVI = (NIR - Red) / (NIR + Red)</text>
            <text x="390" y="110" fill="#fb923c" fontSize="9" textAnchor="middle">Banda 8 (842nm) e Banda 4 (665nm) do Sentinel-2</text>

            {/* NDVI color scale */}
            <defs>
              <linearGradient id="ndviGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="rgba(249,115,22,0.10)" />
                <stop offset="25%"  stopColor="rgba(249,115,22,0.25)" />
                <stop offset="50%"  stopColor="#fb923c" />
                <stop offset="75%"  stopColor="#f97316" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
            </defs>
            <rect x="60" y="118" width="660" height="22" fill="url(#ndviGrad)" rx="4" />
            {/* Numeric ticks below bar */}
            <text x="60"  y="150" fill="rgba(249,115,22,0.7)" fontSize="8">-1</text>
            <text x="192" y="150" fill="rgba(249,115,22,0.7)" fontSize="8" textAnchor="middle">0</text>
            <text x="324" y="150" fill="rgba(249,115,22,0.7)" fontSize="8" textAnchor="middle">0.3</text>
            <text x="456" y="150" fill="rgba(249,115,22,0.7)" fontSize="8" textAnchor="middle">0.6</text>
            <text x="720" y="150" fill="rgba(249,115,22,0.7)" fontSize="8" textAnchor="end">1.0</text>
            {/* Category labels above bar */}
            <text x="124" y="162" fill="rgba(249,115,22,0.7)" fontSize="7.5" textAnchor="middle">Água/Solo</text>
            <text x="256" y="162" fill="#fbbf24"              fontSize="7.5" textAnchor="middle">Escasso</text>
            <text x="388" y="162" fill="#fb923c"              fontSize="7.5" textAnchor="middle">Moderado</text>
            <text x="570" y="162" fill="#ea580c"              fontSize="7.5" textAnchor="middle">Dense/Culturas</text>

            {/* Seasonal NDVI curve for wheat */}
            <text x="390" y="180" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">Curva Sazonal NDVI — Trigo</text>

            {/* axes */}
            <line x1="60" y1="260" x2="720" y2="260" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="60" y1="185" x2="60" y2="260" stroke="var(--card-border)" strokeWidth="1" />

            {/* Y labels */}
            <text x="55" y="189" fill="rgba(249,115,22,0.6)" fontSize="7.5" textAnchor="end">1.0</text>
            <text x="55" y="207" fill="rgba(249,115,22,0.6)" fontSize="7.5" textAnchor="end">0.6</text>
            <text x="55" y="225" fill="rgba(249,115,22,0.6)" fontSize="7.5" textAnchor="end">0.3</text>
            <text x="55" y="260" fill="rgba(249,115,22,0.6)" fontSize="7.5" textAnchor="end">0</text>

            {/* X months */}
            {['Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'].map((m, i) => (
              <text key={m} x={60 + i * 82} y="272" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">{m}</text>
            ))}

            {/* NDVI points: Nov=0.1, Dec=0.15, Jan=0.2, Feb=0.3, Mar=0.55, Apr=0.8, May=0.7, Jun=0.4, Jul=0.2 */}
            {/* scale: ndvi 0=260, 1.0=185 → 75 px range */}
            <polyline
              points="60,253 142,248 224,245 306,237 388,218 470,200 552,207 634,230 716,245"
              fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinejoin="round"
            />
            {[
              { x: 60, y: 253, v: '0.1' },
              { x: 306, y: 237, v: '0.3' },
              { x: 470, y: 200, v: '0.8' },
              { x: 634, y: 230, v: '0.4' },
              { x: 716, y: 245, v: '0.2' },
            ].map((pt, i) => (
              <g key={i}>
                <circle cx={pt.x} cy={pt.y} r="4" fill="#f97316" />
                <text x={pt.x} y={pt.y - 14} fill="#fb923c" fontSize="8" textAnchor="middle">{pt.v}</text>
              </g>
            ))}
            <text x="494" y="198" fill="#fb923c" fontSize="8" textAnchor="start">Pico Abr</text>
            <text x="142" y="244" fill="#fb923c" fontSize="8" textAnchor="middle">Sementeira</text>
            <text x="706" y="231" fill="#fb923c" fontSize="8" textAnchor="end">Colheita</text>
          </svg>
        </div>

        <p style={S.p}>Índices espectrais chave: NDVI (vigor vegetativo, correlaciona com LAI e biomassa); NDWI (conteúdo de água na planta, detecção de stress hídrico precoce); NDRE (Red Edge, concentração de clorofila, mais sensível que NDVI para detectar stress inicial); NDTI (práticas de mobilização do solo). O SAR do Sentinel-1 penetra nuvens, detecta humidade do solo e monitoriza inundações — complementando o Sentinel-2 em condições meteorológicas adversas.</p>

        <p style={S.p}>Planet Labs oferece imagens diárias a 3-5 metros de resolução — ideal para monitorização de parcelas individuais em culturas de alto valor. MODIS e Landsat fornecem séries temporais longas (desde 1972) para análise de tendências decadais na produtividade agrícola e expansão de culturas.</p>

        <div style={S.highlight}>
          <strong>Outros índices importantes:</strong> EVI (Enhanced Vegetation Index, menos saturado que NDVI em vegetação densa); SAVI (corrige influência do solo); LAI (Leaf Area Index, metros quadrados de folha por metro de solo); FAPAR (fracção de radiação fotossinteticamente activa absorvida) — todos calculáveis a partir de combinações de bandas Sentinel-2.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Yield Prediction e Modelos de Culturas</h2>
        <p style={S.p}>A previsão de produtividade agrícola é o caso de uso de maior impacto da IA na agricultura — informação crítica para seguradoras agrícolas, traders de commodities, políticas de segurança alimentar e gestão de inventários na cadeia agroalimentar. Erros de previsão de 5-10% a nível nacional podem mover mercados globais de cereais.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" fill="#f97316" fontSize="12" textAnchor="middle" fontWeight="700">Pipeline de Previsão de Produtividade (Yield Prediction)</text>

            {/* Input boxes */}
            {[
              { x: 20, y: 40, w: 115, h: 36, label: 'NDVI Time Series', sub: 'Sentinel-2 10 dias', fill: '#f97316', stroke: '#f97316' },
              { x: 20, y: 84, w: 115, h: 36, label: 'Precipitação', sub: 'ERA5 / CHIRPS', fill: 'rgba(249,115,22,0.06)', stroke: '#f97316' },
              { x: 20, y: 128, w: 115, h: 36, label: 'Temperatura', sub: 'ERA5 reanalysis', fill: '#ea580c', stroke: '#f97316' },
              { x: 20, y: 172, w: 115, h: 36, label: 'Mapas Solo', sub: 'SoilGrids 250m', fill: '#ea580c', stroke: '#f97316' },
              { x: 20, y: 216, w: 115, h: 36, label: 'Crop Mask', sub: 'ESA WorldCover', fill: 'rgba(249,115,22,0.08)', stroke: '#f97316' },
            ].map((b, i) => {
              const solid = b.fill === '#f97316' || b.fill === '#ea580c' || b.fill === '#c2410c';
              return (
              <g key={i}>
                <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="5" fill={b.fill} stroke={b.stroke} strokeWidth="1" />
                <text x={b.x + b.w / 2} y={b.y + 15} fill={solid ? '#fff' : '#fbbf24'} fontSize="9" textAnchor="middle" fontWeight="600">{b.label}</text>
                <text x={b.x + b.w / 2} y={b.y + 27} fill={solid ? '#fff' : '#fb923c'} fontSize="8" textAnchor="middle">{b.sub}</text>
              </g>
              );
            })}

            {/* Arrow to feature extraction */}
            <line x1="135" y1="140" x2="175" y2="140" stroke="#f97316" strokeWidth="2" />
            <polygon points="175,135 185,140 175,145" fill="#f97316" />

            {/* Feature extraction */}
            <rect x="185" y="90" width="130" height="100" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="250" y="113" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">FEATURE</text>
            <text x="250" y="126" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">EXTRACTION</text>
            <text x="250" y="145" fill="#fb923c" fontSize="8.5" textAnchor="middle">GDD acumulados</text>
            <text x="250" y="158" fill="#fb923c" fontSize="8.5" textAnchor="middle">NDVI mean/max/slope</text>
            <text x="250" y="171" fill="#fb923c" fontSize="8.5" textAnchor="middle">VPD, AWC solo</text>

            {/* Arrow to ML */}
            <line x1="315" y1="140" x2="355" y2="140" stroke="#f97316" strokeWidth="2" />
            <polygon points="355,135 365,140 355,145" fill="#f97316" />

            {/* ML model */}
            <rect x="365" y="85" width="140" height="110" rx="6" fill="rgba(249,115,22,0.06)" stroke="#fb923c" strokeWidth="1.5" />
            <text x="435" y="108" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">MODELO ML</text>
            <rect x="378" y="115" width="115" height="22" rx="4" fill="#f97316" />
            <text x="435" y="130" fill="#fff" fontSize="8.5" textAnchor="middle">Random Forest</text>
            <rect x="378" y="142" width="115" height="22" rx="4" fill="#f97316" />
            <text x="435" y="157" fill="#fff" fontSize="8.5" textAnchor="middle">LSTM (temporal)</text>
            <text x="435" y="182" fill="#fb923c" fontSize="8" textAnchor="middle">Híbrido: DSSAT + ML</text>

            {/* Arrow to output */}
            <line x1="505" y1="140" x2="545" y2="140" stroke="#fb923c" strokeWidth="2" />
            <polygon points="545,135 555,140 545,145" fill="#fb923c" />

            {/* Yield map output */}
            <rect x="555" y="50" width="200" height="85" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="655" y="73" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">MAPA DE PRODUTIVIDADE</text>
            <text x="655" y="89" fill="#fb923c" fontSize="9" textAnchor="middle">t/ha por polígono de parcela</text>
            {/* mini gradient yield map */}
            <defs>
              <linearGradient id="yieldGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            <rect x="575" y="100" width="160" height="18" fill="url(#yieldGrad)" rx="3" />
            <text x="575" y="128" fill="rgba(249,115,22,0.6)" fontSize="7">1 t/ha</text>
            <text x="735" y="128" fill="rgba(249,115,22,0.6)" fontSize="7" textAnchor="end">8 t/ha</text>

            {/* Scatter plot */}
            <rect x="555" y="145" width="200" height="130" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="655" y="163" fill="#fb923c" fontSize="9" textAnchor="middle">Previsto vs Real (R²=0.87)</text>
            <line x1="570" y1="255" x2="570" y2="175" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="570" y1="255" x2="740" y2="255" stroke="var(--card-border)" strokeWidth="1" />
            {/* 1:1 line */}
            <line x1="570" y1="255" x2="740" y2="175" stroke="rgba(249,115,22,0.6)" strokeWidth="1" strokeDasharray="3 2" />
            {/* scatter points */}
            {[
              [580, 250], [590, 244], [600, 238], [612, 230], [622, 222],
              [635, 212], [648, 203], [660, 195], [672, 188], [685, 180],
              [698, 178], [710, 198], [720, 185], [580, 242], [615, 240],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#f97316" opacity="0.8" />
            ))}
            <text x="655" y="268" fill="rgba(249,115,22,0.6)" fontSize="7.5" textAnchor="middle">Rendimento Real</text>

            {/* Uncertainty bands note */}
            <rect x="555" y="270" width="200" height="0" rx="0" />
            <text x="655" y="0" fill="#fb923c" fontSize="8" textAnchor="middle" />
          </svg>
        </div>

        <p style={S.p}>Modelos de cultura processual (DSSAT, APSIM) simulam crescimento com base em fisiologia da planta — precisos mas requerem calibração intensiva por cultura, solo e região. ML puro usa features de satélite e clima sem conhecimento agronómico explícito — escalável mas menos interpretável. A abordagem híbrida incorpora variáveis de modelos processais como features de entrada no ML, combinando os pontos fortes de ambos.</p>

        <p style={S.p}>LSTM para séries temporais captura a dinâmica sazonal do crescimento com janelas de 10 dias ao longo do ciclo vegetativo. Datasets de referência: USDA NASS (EUA, rendimento por condado desde 1981), Eurostat (Europa), FAOSTAT (global). O sistema FAO GIEWS e FEWS NET usa ML para prever insegurança alimentar com 3-6 meses de antecipação em regiões vulneráveis do Sul Global.</p>

        <div style={S.highlight}>
          <strong>AgML benchmark (Huntington et al., 2022):</strong> datasets padronizados para comparação reprodutível de modelos de yield prediction em múltiplas culturas (trigo, milho, soja, arroz) e regiões geográficas. Métricas standard: RMSE, R², MAPE e Early Warning Accuracy — imprescindível para publicação científica no domínio.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Stress Hídrico e Irrigação Inteligente</h2>
        <p style={S.p}>A agricultura é responsável por 70% do consumo global de água doce — a irrigação inteligente é crítica para a segurança hídrica global. Em regiões com stress hídrico crescente como o Mediterrâneo e o Sul da Ásia, a optimização da irrigação com ML pode ser a diferença entre viabilidade e abandono agrícola.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" fill="#f97316" fontSize="12" textAnchor="middle" fontWeight="700">Detecção de Stress Hídrico e Sistema de Irrigação Inteligente</text>

            {/* Left: detection pipeline */}
            <rect x="15" y="35" width="350" height="240" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="190" y="54" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">DETECÇÃO DE STRESS HÍDRICO</text>

            <rect x="30" y="62" width="155" height="40" rx="5" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
            <text x="107" y="79" fill="#f97316" fontSize="9" textAnchor="middle">Landsat-8/9 Banda 10</text>
            <text x="107" y="91" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">Temperatura de superfície (LST)</text>

            <line x1="185" y1="82" x2="215" y2="82" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="215,78 223,82 215,86" fill="#f97316" />

            <rect x="223" y="62" width="130" height="40" rx="5" fill="#f97316" stroke="#f97316" strokeWidth="1" />
            <text x="288" y="79" fill="#fff" fontSize="9" textAnchor="middle">ET Actual (SEBAL)</text>
            <text x="288" y="91" fill="#fff" fontSize="8" textAnchor="middle">ET_actual / ET_potential</text>

            <line x1="190" y1="82" x2="190" y2="122" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="186,122 190,130 194,122" fill="#f97316" />

            <rect x="65" y="130" width="250" height="40" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="190" y="147" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">CWSI = 1 - (ET_actual / ET_potential)</text>
            <text x="190" y="161" fill="#fb923c" fontSize="8" textAnchor="middle">Crop Water Stress Index (0=sem stress, 1=stress máximo)</text>

            {/* Stress map */}
            <text x="190" y="185" fill="#fb923c" fontSize="9" textAnchor="middle">Mapa de Stress por Parcela</text>
            {/* color blocks representing field zones */}
            <rect x="60" y="192" width="50" height="35" rx="3" fill="#f97316" />
            <text x="85" y="214" fill="#fff" fontSize="8" textAnchor="middle">CWSI 0.1</text>
            <rect x="115" y="192" width="50" height="35" rx="3" fill="#f59e0b" />
            <text x="140" y="214" fill="#fff" fontSize="8" textAnchor="middle">CWSI 0.5</text>
            <rect x="170" y="192" width="50" height="35" rx="3" fill="#f97316" />
            <text x="195" y="214" fill="#fff" fontSize="8" textAnchor="middle">CWSI 0.8</text>
            <rect x="225" y="192" width="50" height="35" rx="3" fill="#c2410c" />
            <text x="250" y="214" fill="#fff" fontSize="8" textAnchor="middle">CWSI 0.95</text>
            <text x="60" y="242" fill="rgba(249,115,22,0.6)" fontSize="7.5">Bem regada</text>
            <text x="250" y="242" fill="#fb923c" fontSize="7.5" textAnchor="middle">Stress severo</text>

            <text x="190" y="262" fill="#f97316" fontSize="8.5" textAnchor="middle">Detecção 3-5 dias antes de sintomas visíveis</text>

            {/* Right: smart irrigation */}
            <rect x="385" y="35" width="380" height="240" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="575" y="54" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">SISTEMA DE IRRIGAÇÃO INTELIGENTE</text>

            {/* IoT sensors */}
            <rect x="400" y="62" width="155" height="70" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="477" y="78" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="600">Sensores IoT</text>
            <text x="477" y="92" fill="#fb923c" fontSize="8" textAnchor="middle">FDR: 10 / 30 / 60 cm</text>
            <text x="477" y="104" fill="#fb923c" fontSize="8" textAnchor="middle">Estação Meteorológica</text>
            <text x="477" y="116" fill="#fb923c" fontSize="8" textAnchor="middle">LoRaWAN transmission</text>
            <text x="477" y="128" fill="#f97316" fontSize="8" textAnchor="middle">TDR / Tensiômetros</text>

            {/* Weather forecast */}
            <rect x="565" y="62" width="185" height="70" rx="5" fill="#ea580c" stroke="#f97316" strokeWidth="1" />
            <text x="657" y="78" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="600">Previsão ET</text>
            <text x="657" y="92" fill="#fff" fontSize="8" textAnchor="middle">Penman-Monteith FAO-56</text>
            <text x="657" y="104" fill="#fff" fontSize="8" textAnchor="middle">Previsão 7 dias NWP</text>
            <text x="657" y="116" fill="#fff" fontSize="8" textAnchor="middle">Kc (coef. cultura) × ETo</text>
            <text x="657" y="128" fill="#fff" fontSize="8" textAnchor="middle">= ETc requerida</text>

            {/* RL Controller */}
            <line x1="477" y1="132" x2="560" y2="160" stroke="#f97316" strokeWidth="1.5" />
            <line x1="657" y1="132" x2="580" y2="160" stroke="#f97316" strokeWidth="1.5" />

            <rect x="460" y="160" width="230" height="50" rx="6" fill="#f97316" stroke="#f97316" strokeWidth="1.5" />
            <text x="575" y="181" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="700">RL Controller (MDP)</text>
            <text x="575" y="196" fill="#fff" fontSize="8.5" textAnchor="middle">Estado: humidade + ET_forecast + fenologia</text>
            <text x="575" y="207" fill="#fff" fontSize="8.5" textAnchor="middle">Acção: volume irrigação por zona</text>

            {/* VRI pivot */}
            <line x1="575" y1="210" x2="575" y2="228" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="571,228 575,236 579,228" fill="#f97316" />

            <rect x="430" y="236" width="290" height="32" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="575" y="252" fill="#fb923c" fontSize="9" textAnchor="middle">VRI Pivot — Irrigação Taxa Variável por Zona</text>
            <text x="575" y="263" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">Redução 20-40% consumo de água documentada</text>
          </svg>
        </div>

        <p style={S.p}>A evapotranspiração (ET) é a combinação de evaporação do solo e transpiração das plantas — medida directamente com lisímetros ou estimada via equação de Penman-Monteith (padrão FAO-56). Sensores de humidade do solo TDR (Time-Domain Reflectometry) e FDR (Frequency Domain Reflectometry) formam redes IoT com transmissão LoRaWAN cobrindo campos de centenas de hectares.</p>

        <p style={S.p}>O CWSI (Crop Water Stress Index) derivado de temperatura do copado por câmaras termais em drones ou satélite detecta stress hídrico 3-5 dias antes de sintomas visíveis — tempo suficiente para intervenção preventiva. ML para irrigação com Reinforcement Learning (RL) optimiza o calendário e quantidade de irrigação, minimizando água usada mantendo produtividade — redução de 20-40% documentada em projectos piloto na Espanha, Israel e Califórnia.</p>

        <div style={S.note}>
          Drones agrícolas DJI Agras T40 combinam sensores multiespectrais com pulverizadores de precisão: levantamento NDVI a 2cm/pixel, criação automática de prescription map, e aplicação de pesticidas/fertilizantes apenas nas zonas identificadas — reduzindo inputs em 30-50%.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Detecção de Pragas, Doenças e Saúde do Solo</h2>
        <p style={S.p}>A detecção precoce de pragas e doenças pode reduzir perdas de colheita em 20-40% e diminuir o uso de pesticidas em quantidade equivalente. Computer vision com CNNs treinadas em imagens de folhas atingem accuracy superior a 94% para as principais doenças em condições controladas, mas a generalização para o campo real permanece o maior desafio do domínio.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 290" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="290" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" fill="#f97316" fontSize="12" textAnchor="middle" fontWeight="700">Pipeline de Detecção de Doenças e Saúde do Solo</text>

            {/* Pipeline top */}
            <rect x="20" y="35" width="110" height="50" rx="5" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
            <text x="75" y="54" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="600">Drone Survey</text>
            <text x="75" y="67" fill="rgba(249,115,22,0.6)" fontSize="7.5" textAnchor="middle">RGB + Multiespectral</text>
            <text x="75" y="78" fill="rgba(249,115,22,0.6)" fontSize="7.5" textAnchor="middle">2cm/px resolução</text>

            <line x1="130" y1="60" x2="160" y2="60" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="160,56 168,60 160,64" fill="#f97316" />

            <rect x="168" y="35" width="110" height="50" rx="5" fill="#f97316" stroke="#f97316" strokeWidth="1" />
            <text x="223" y="54" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="600">Segmentação</text>
            <text x="223" y="67" fill="#fff" fontSize="7.5" textAnchor="middle">Análise por planta</text>
            <text x="223" y="78" fill="#fff" fontSize="7.5" textAnchor="middle">Mask R-CNN / SAM</text>

            <line x1="278" y1="60" x2="308" y2="60" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="308,56 316,60 308,64" fill="#f97316" />

            <rect x="316" y="35" width="130" height="50" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="381" y="54" fill="#fb923c" fontSize="9" textAnchor="middle" fontWeight="600">CNN Classificação</text>
            <text x="381" y="67" fill="#fb923c" fontSize="7.5" textAnchor="middle">Saudável / Ferrugem /</text>
            <text x="381" y="78" fill="#fb923c" fontSize="7.5" textAnchor="middle">Míldio / Ácaros / Pragas</text>

            <line x1="446" y1="60" x2="476" y2="60" stroke="#f97316" strokeWidth="1.5" />
            <polygon points="476,56 484,60 476,64" fill="#f97316" />

            <rect x="484" y="35" width="140" height="50" rx="5" fill="#ea580c" stroke="#f97316" strokeWidth="1" />
            <text x="554" y="54" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="600">Prescription Map</text>
            <text x="554" y="67" fill="#fff" fontSize="7.5" textAnchor="middle">Zonas tratamento</text>
            <text x="554" y="78" fill="#fff" fontSize="7.5" textAnchor="middle">produto + dose + timing</text>

            {/* Confusion matrix */}
            <text x="190" y="108" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">Matriz de Confusão (8 classes, 94% acc.)</text>

            {/* 4x4 simplified matrix */}
            {[
              [92, 2, 3, 1, 1, 0, 1, 0],
              [1, 96, 1, 0, 1, 0, 1, 0],
              [2, 1, 94, 1, 1, 0, 1, 0],
              [1, 0, 2, 95, 1, 0, 1, 0],
            ].map((row, i) =>
              row.slice(0, 4).map((val, j) => {
                const intensity = val > 80 ? '#f97316' : val > 10 ? '#f97316' : 'rgba(249,115,22,0.08)';
                return (
                  <g key={`${i}-${j}`}>
                    <rect x={60 + j * 45} y={115 + i * 28} width="42" height="25" rx="3" fill={intensity} stroke="var(--card-border)" strokeWidth="0.5" />
                    <text x={82 + j * 45} y={131 + i * 28} fill={val > 80 ? '#fff' : '#fb923c'} fontSize="9" textAnchor="middle">{val}%</text>
                  </g>
                );
              })
            )}
            {['Saudável', 'Ferrugem', 'Míldio', 'Pragas'].map((label, i) => (
              <text key={i} x="52" y={131 + i * 28} fill="#fb923c" fontSize="7.5" textAnchor="end">{label}</text>
            ))}

            {/* Soil health radar */}
            <text x="560" y="108" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">Saúde do Solo — Agricultura Conv. vs Regenerativa</text>

            {/* Radar chart */}
            {(() => {
              const cx = 560, cy = 195, r = 70;
              const axes = ['MO', 'pH', 'N', 'P', 'K', 'Bio'];
              const convValues = [0.4, 0.6, 0.5, 0.55, 0.5, 0.3];
              const regenValues = [0.85, 0.8, 0.75, 0.7, 0.75, 0.9];
              const n = axes.length;
              const angle = (i) => (i * 2 * Math.PI) / n - Math.PI / 2;
              const px = (v, i) => cx + v * r * Math.cos(angle(i));
              const py = (v, i) => cy + v * r * Math.sin(angle(i));

              const convPts = convValues.map((v, i) => `${px(v, i)},${py(v, i)}`).join(' ');
              const regenPts = regenValues.map((v, i) => `${px(v, i)},${py(v, i)}`).join(' ');

              return (
                <g>
                  {/* Grid circles */}
                  {[0.25, 0.5, 0.75, 1.0].map((scale) => (
                    <circle key={scale} cx={cx} cy={cy} r={r * scale} fill="none" stroke="var(--card-border)" strokeWidth="0.5" />
                  ))}
                  {/* Axes */}
                  {axes.map((label, i) => (
                    <g key={i}>
                      <line x1={cx} y1={cy} x2={px(1, i)} y2={py(1, i)} stroke="var(--card-border)" strokeWidth="0.8" />
                      <text x={px(1.18, i)} y={py(1.18, i)} fill="#fb923c" fontSize="8.5" textAnchor="middle" dominantBaseline="middle">{label}</text>
                    </g>
                  ))}
                  {/* Conv polygon */}
                  <polygon points={convPts} fill="rgba(194,65,12,0.25)" stroke="#c2410c" strokeWidth="1.5" strokeDasharray="4 2" />
                  {/* Regen polygon */}
                  <polygon points={regenPts} fill="rgba(251,146,60,0.20)" stroke="#fb923c" strokeWidth="1.5" />
                  {/* Legend */}
                  <rect x="420" y="255" width="10" height="8" fill="#c2410c" rx="2" />
                  <text x="433" y="263" fill="#c2410c" fontSize="8">Convencional</text>
                  <rect x="520" y="255" width="10" height="8" fill="#fb923c" rx="2" />
                  <text x="533" y="263" fill="#fb923c" fontSize="8">Regenerativa</text>
                </g>
              );
            })()}

            {/* Datasets note */}
            <text x="190" y="240" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="600">PlantVillage: 54.306 imgs, 26 doenças, 14 culturas</text>
            <text x="190" y="254" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">Desafio: domain shift lab vs campo real</text>
            <text x="190" y="268" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">FAO SWARMS: gafanhotos com Sentinel-2 + ML</text>
          </svg>
        </div>

        <p style={S.p}>O PlantVillage dataset (54.306 imagens de 26 doenças em 14 culturas) foi a base dos primeiros modelos de diagnóstico agrícola móvel. O principal desafio é o domain shift: modelos treinados em imagens de laboratório generalizam mal para condições de campo com variação de iluminação, ângulo e fundo complexo. Técnicas de domain adaptation e data augmentation agressivo (rotações, variações de iluminação, ruído) são essenciais.</p>

        <p style={S.p}>Carbono do solo é o maior repositório terrestre de carbono — 3 vezes mais do que a atmosfera. Sensores XRF portáteis e espectroscopia NIR com ML permitem mapeamento rápido de matéria orgânica e nutrientes sem análise laboratorial. Precision nutrition: prescription maps de N/P/K por zona de gestão reduzem o uso de fertilizantes em 15-30%, diminuindo emissões de N2O (um GEE 265 vezes mais potente que CO2).</p>

        <div style={S.highlight}>
          <strong>FAO SWARMS (Locust Watch):</strong> sistema de detecção precoce de infestações de gafanhotos usando séries temporais Sentinel-2 para identificar vegetação verde (condições favoráveis à reprodução) em regiões do Sahel e Corno de África. ML classifica risco de surto 4-8 semanas antes, permitindo resposta preventiva.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Digital Twins Agrícolas e Suporte à Decisão</h2>
        <p style={S.p}>Digital twins agrícolas integram todos os modelos e fluxos de dados numa representação virtual sincronizada em tempo próximo do real da exploração — solo, cultura, clima, pragas, equipamento. A representação digital permite simular cenários ("e se irrigar amanhã?", "e se a temperatura cair 5°C?") antes de tomar decisões irreversíveis no campo.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" fill="#f97316" fontSize="12" textAnchor="middle" fontWeight="700">Arquitectura do Digital Twin Agrícola</text>

            {/* Physical farm — left */}
            <rect x="15" y="35" width="160" height="240" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="95" y="55" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">EXPLORAÇÃO FÍSICA</text>
            {[
              { label: 'Sensores Solo', sub: 'FDR / TDR / pH', fill: 'rgba(249,115,22,0.06)', stroke: '#f97316' },
              { label: 'Drones Agrícolas', sub: 'NDVI / térmica', fill: '#ea580c', stroke: '#f97316' },
              { label: 'Estação Meteo', sub: 'T / RH / vento / chuva', fill: '#f97316', stroke: '#f97316' },
              { label: 'Satélite', sub: 'Sentinel-2 / Planet', fill: 'rgba(249,115,22,0.08)', stroke: '#f97316' },
              { label: 'GPS Tratores', sub: 'John Deere / Trimble', fill: '#ea580c', stroke: '#f97316' },
            ].map((item, i) => (
              <g key={i}>
                <rect x="25" y={65 + i * 40} width="140" height="32" rx="4" fill={item.fill} stroke={item.stroke} strokeWidth="1" />
                {(() => { const s = item.fill === '#ea580c' || item.fill === '#f97316'; return (<><text x="95" y={80 + i * 40} fill={s ? '#fff' : '#fbbf24'} fontSize="8.5" textAnchor="middle" fontWeight="600">{item.label}</text><text x="95" y={91 + i * 40} fill={s ? '#fff' : '#fb923c'} fontSize="7.5" textAnchor="middle">{item.sub}</text></>); })()}
              </g>
            ))}

            {/* bidirectional arrows */}
            <line x1="175" y1="155" x2="215" y2="155" stroke="#f97316" strokeWidth="2" />
            <polygon points="215,151 223,155 215,159" fill="#f97316" />
            <line x1="220" y1="165" x2="175" y2="165" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4 2" />
            <polygon points="175,161 167,165 175,169" fill="#fb923c" />

            {/* Digital Twin — centre */}
            <rect x="223" y="35" width="180" height="240" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2" />
            <text x="313" y="55" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">DIGITAL TWIN</text>
            {[
              { label: 'Modelo Solo', sub: 'humidade 3D / nutrientes', fill: 'rgba(249,115,22,0.06)', stroke: '#f97316' },
              { label: 'Modelo Cultura', sub: 'DSSAT / APSIM híbrido', fill: '#f97316', stroke: '#f97316' },
              { label: 'Modelo Pragas', sub: 'risco doença / praga', fill: '#ea580c', stroke: '#f97316' },
              { label: 'Modelo Clima', sub: 'NWP + downscaling', fill: 'rgba(249,115,22,0.08)', stroke: '#f97316' },
              { label: 'Simulação', sub: 'Monte Carlo scenarios', fill: 'rgba(249,115,22,0.08)', stroke: '#fb923c' },
            ].map((item, i) => (
              <g key={i}>
                <rect x="233" y={65 + i * 40} width="160" height="32" rx="4" fill={item.fill} stroke={item.stroke} strokeWidth="1" />
                {(() => { const s = item.fill === '#ea580c' || item.fill === '#f97316'; return (<><text x="313" y={80 + i * 40} fill={s ? '#fff' : '#fbbf24'} fontSize="8.5" textAnchor="middle" fontWeight="600">{item.label}</text><text x="313" y={91 + i * 40} fill={s ? '#fff' : '#fb923c'} fontSize="7.5" textAnchor="middle">{item.sub}</text></>); })()}
              </g>
            ))}

            {/* arrows to decisions */}
            <line x1="403" y1="155" x2="440" y2="155" stroke="#f97316" strokeWidth="2" />
            <polygon points="440,151 448,155 440,159" fill="#f97316" />
            <line x1="450" y1="165" x2="403" y2="165" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4 2" />
            <polygon points="403,161 395,165 403,169" fill="#fb923c" />

            {/* Decision support */}
            <rect x="448" y="35" width="165" height="240" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="530" y="55" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">SUPORTE DECISÃO</text>
            {[
              { label: 'Calendário Irrigação', sub: 'quantidade x zona x hora', fill: 'rgba(249,115,22,0.06)', stroke: '#f97316' },
              { label: 'Recomend. Pulverização', sub: 'produto / dose / timing', fill: '#ea580c', stroke: '#f97316' },
              { label: 'Timing Colheita', sub: 'previsão qualidade + preço', fill: 'rgba(249,115,22,0.08)', stroke: '#f97316' },
              { label: 'Yield Forecast', sub: '±10% RMSE 6 semanas', fill: '#f97316', stroke: '#f97316' },
              { label: 'Carbon Credits', sub: 'C solo verificado SAT', fill: '#ea580c', stroke: '#f97316' },
            ].map((item, i) => (
              <g key={i}>
                <rect x="458" y={65 + i * 40} width="145" height="32" rx="4" fill={item.fill} stroke={item.stroke} strokeWidth="1" />
                {(() => { const s = item.fill === '#ea580c' || item.fill === '#f97316'; return (<><text x="530" y={80 + i * 40} fill={s ? '#fff' : '#fbbf24'} fontSize="8.5" textAnchor="middle" fontWeight="600">{item.label}</text><text x="530" y={91 + i * 40} fill={s ? '#fff' : '#fb923c'} fontSize="7.5" textAnchor="middle">{item.sub}</text></>); })()}
              </g>
            ))}

            {/* arrow to mobile */}
            <line x1="613" y1="155" x2="650" y2="155" stroke="#f97316" strokeWidth="2" />
            <polygon points="650,151 658,155 650,159" fill="#f97316" />

            {/* Farmer interface */}
            <rect x="658" y="80" width="105" height="150" rx="8" fill="rgba(249,115,22,0.06)" stroke="#fb923c" strokeWidth="1.5" />
            <text x="710" y="100" fill="#fb923c" fontSize="9" textAnchor="middle" fontWeight="700">APP</text>
            <text x="710" y="112" fill="#fb923c" fontSize="9" textAnchor="middle" fontWeight="700">AGRICULTOR</text>
            <rect x="668" y="120" width="85" height="14" rx="3" fill="rgba(249,115,22,0.08)" />
            <text x="710" y="131" fill="#f97316" fontSize="7.5" textAnchor="middle">Alertas push</text>
            <rect x="668" y="140" width="85" height="14" rx="3" fill="#ea580c" />
            <text x="710" y="151" fill="#fff" fontSize="7.5" textAnchor="middle">Mapas campo</text>
            <rect x="668" y="160" width="85" height="14" rx="3" fill="#f97316" />
            <text x="710" y="171" fill="#fff" fontSize="7.5" textAnchor="middle">Recomendações</text>
            <rect x="668" y="180" width="85" height="14" rx="3" fill="#ea580c" />
            <text x="710" y="191" fill="#fff" fontSize="7.5" textAnchor="middle">Histórico parcelas</text>
            <rect x="668" y="200" width="85" height="14" rx="3" fill="rgba(249,115,22,0.06)" />
            <text x="710" y="211" fill="#fb923c" fontSize="7.5" textAnchor="middle">Dashboard ESG</text>

            {/* Feedback loop label */}
            <text x="390" y="290" fill="rgba(249,115,22,0.6)" fontSize="8.5" textAnchor="middle">Ciclo de feedback: decisões → resultados físicos → actualização modelos → melhores decisões</text>
          </svg>
        </div>

        <p style={S.p}>Plataformas líderes de digital twins agrícolas: xarvio (BASF) gere mais de 8 milhões de hectares com modelos de crescimento de culturas, previsão de doenças e recomendações de tratamento personalizadas. A Climate Corporation (Bayer) integra 40 anos de dados meteorológicos, 10 triliões de observações de solo e previsões climáticas para recomendações de sementeira e gestão em tempo real.</p>

        <p style={S.p}>O John Deere Operations Center conecta tratores com GPS de alta precisão (RTK, 2.5cm) à plataforma cloud — agriculture-as-a-service com mapas de aplicação de taxa variável gerados automaticamente. Resistência a pesticidas: ML em dados históricos de eficácia e genómica das pragas previne e detecta resistências emergentes antes de se tornarem generalizadas.</p>

        <p style={S.p}>Carbon farming é a convergência entre agricultura de precisão e mercados de carbono: pagamentos por carbono sequestrado no solo através de práticas regenerativas (sementeira directa, coberturas vegetais de inverno, redução de lavouras) verificados por satélite e ML, gerando créditos de carbono para os agricultores — uma nova fonte de rendimento compatível com produção alimentar.</p>

        <div style={S.highlight}>
          <strong>Potencial transformador:</strong> Agriculture 4.0 com ML tem capacidade documentada de reduzir 20-50% o uso de água, fertilizantes e pesticidas, aumentando simultaneamente a produtividade em 10-20%. O maior desafio não é técnico mas de adopção: heterogeneidade dos dados agrícolas, custo de sensores em explorações pequenas, conectividade rural e literacia digital dos agricultores.
        </div>

        <div style={S.note}>
          Desafios de dados na agricultura: heterogeneidade de culturas, solos, práticas e microclimas torna difícil a generalização entre regiões. Explorações pequenas (media UE: 16 ha) geram poucos dados por parcela. Federated learning permite treinar modelos partilhados sem partilhar dados proprietários entre explorações competidoras.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Observação por Satélite e Índices Espectrais</strong> — Sentinel-2 (10m, 13 bandas) e Landsat-9 (30m) fornecem dados multiespectrais; NDVI (vegetação), NDWI (água) e EVI (índice de vegetação melhorado) derivam-se de combinações de bandas — base de toda a análise de cobertura terrestre por IA.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Yield Prediction e Modelos de Culturas</strong> — modelos de previsão de colheita combinam NDVI temporal, dados meteorológicos e modelos de processo (DSSAT, APSIM); ML (XGBoost, CNNs) supera modelos físicos em escalas nacionais — critical para segurança alimentar e trading de commodities agrícolas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Stress Hídrico e Irrigação Inteligente</strong> — NDWI, LST (temperatura superficial) e dados de solo identificam stress hídrico antes de sintomas visíveis; sistemas de irrigação precision agriculture com sensores IoT e modelos preditivos reduzem consumo de água em 30–50%.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Detecção de Pragas, Doenças e Saúde do Solo</strong> — CNNs treinadas em imagens UAV detectam pragas e doenças com precisão &gt;90%; espectroscopia de solo com ML prediz pH, carbono orgânico e nutrientes sem análise laboratorial — viabiliza gestão diferenciada intra-campo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Digital Twins Agrícolas e Suporte à Decisão</strong> — digital twins de campos agrícolas integram sensores IoT, satélite, modelos de culturas e previsão meteorológica para simular cenários de gestão e recomendar acções — plataformas como Climate Corp (Bayer) e Trimble Agriculture implementam este paradigma.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
