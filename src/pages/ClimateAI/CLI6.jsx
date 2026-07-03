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

const m = modules[5];

export default function CLI6() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {m.num}</span>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Detecção de Eventos Climáticos Extremos</h2>
        <p style={S.p}>Eventos extremos são o interface mais visível das alterações climáticas. A definição estatística baseia-se em excedência de threshold — por exemplo, temperatura acima do percentil 99 durante período mínimo. Os índices padronizados ETCCDI (Expert Team on Climate Change Detection and Indices) incluem: TXx (temperatura máxima anual), RX5day (precipitação máxima em 5 dias), WSDI (Warm Spell Duration Index) e CDD (Consecutive Dry Days). As tendências observadas mostram que dias de calor extremo duplicaram desde 1950, eventos de precipitação intensa aumentaram 7% por grau de aquecimento (lei de Clausius-Clapeyron) e a temporada de incêndios alargou 18-25% nas últimas décadas.</p>
        <p style={S.p}>ML para detecção: ConvLSTM para identificar padrões espaciotemporais de extremos; U-Net para detecção de ciclones em campos de pressão; Graph Neural Networks para propagação de secas. As principais bases de dados são EM-DAT (desde 1900), NatCatSERVICE (Munich Re) e Copernicus C3S.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 290" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="760" height="290" fill="var(--bg-secondary)" rx="10" />
            <text x="380" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">DETECÇÃO DE EXTREMOS: TEMPERATURA GLOBAL 1950-2023</text>

            {/* Pipeline boxes */}
            {[
              { x: 15,  w: 167, label: 'ERA5 Reanalysis', sub: 'Satellite data' },
              { x: 202, w: 167, label: 'Anomaly Detection', sub: 'Threshold exceedance' },
              { x: 389, w: 167, label: 'Attribution', sub: 'P&A framework' },
              { x: 576, w: 169, label: 'Impact Model', sub: 'Losses / health' },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y="35" width={b.w} height="44" fill="rgba(249,115,22,0.06)" rx="7" />
                <text x={b.x + b.w / 2} y="55" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">{b.label}</text>
                <text x={b.x + b.w / 2} y="70" textAnchor="middle" fill="#fb923c" fontSize="8">{b.sub}</text>
                {i < 3 && <line x1={b.x + b.w} y1="57" x2={b.x + b.w + 20} y2="57" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" markerEnd="url(#a6)" />}
              </g>
            ))}

            {/* Temperature timeline chart */}
            <text x="30" y="108" fill="#fb923c" fontSize="9" fontWeight="600">ANOMALIA DE TEMPERATURA GLOBAL (°C acima da média 1951-1980)</text>
            <line x1="30" y1="185" x2="730" y2="185" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="30" y1="115" x2="30" y2="185" stroke="var(--card-border)" strokeWidth="1" />

            {/* Y-axis labels */}
            <text x="25" y="185" textAnchor="end" fill="rgba(249,115,22,0.3)" fontSize="8">0.0</text>
            <text x="25" y="160" textAnchor="end" fill="rgba(249,115,22,0.3)" fontSize="8">0.5</text>
            <text x="25" y="135" textAnchor="end" fill="rgba(249,115,22,0.3)" fontSize="8">1.0</text>
            <line x1="30" y1="160" x2="730" y2="160" stroke="var(--card-border)" strokeWidth="0.5" />
            <line x1="30" y1="135" x2="730" y2="135" stroke="var(--card-border)" strokeWidth="0.5" />

            {/* Temperature line — approximate trend 1950-2023 */}
            <polyline
              points="30,183 55,181 80,180 105,179 130,177 155,176 180,178 205,174 230,173 255,172 280,170 305,168 330,167 355,164 380,163 405,160 430,158 455,157 480,153 505,150 530,148 555,145 580,144 605,141 630,138 655,136 680,134 705,130 730,128"
              fill="none" stroke="rgba(249,115,22,0.6)" strokeWidth="1.5"
            />

            {/* Extreme events — red spikes */}
            {/* 2003 European heatwave approx x=433 */}
            <line x1="433" y1="140" x2="433" y2="185" stroke={color} strokeWidth="2" />
            <polygon points="433,120 427,140 439,140" fill={color} />
            <text x="433" y="115" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">2003</text>
            <text x="433" y="106" textAnchor="middle" fill="#fb923c" fontSize="7">Europa</text>

            {/* 2010 Russia */}
            <line x1="503" y1="132" x2="503" y2="185" stroke={color} strokeWidth="2" />
            <polygon points="503,112 497,132 509,132" fill={color} />
            <text x="503" y="107" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">2010</text>
            <text x="503" y="98" textAnchor="middle" fill="#fb923c" fontSize="7">Rússia</text>

            {/* 2021 Pacific NW */}
            <line x1="678" y1="116" x2="678" y2="185" stroke={color} strokeWidth="2.5" />
            <polygon points="678,96 672,116 684,116" fill={color} />
            <text x="678" y="91" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">2021</text>
            <text x="708" y="90" textAnchor="middle" fill="#fb923c" fontSize="7">BC 49.6°C</text>

            {/* X-axis years */}
            {[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020].map((yr, i) => {
              const x = 30 + i * 100;
              return <text key={yr} x={x} y="196" textAnchor="middle" fill="rgba(249,115,22,0.3)" fontSize="8">{yr}</text>;
            })}

            {/* Return period box */}
            <rect x="15" y="208" width="730" height="68" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="380" y="226" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">PERÍODO DE RETORNO DE EXTREMOS DE TEMPERATURA</text>
            <rect x="30" y="233" width="300" height="20" fill={`${color}40`} rx="4" />
            <text x="180" y="247" textAnchor="middle" fill="#fb923c" fontSize="9">Evento 1-em-50 anos (clima de 1950)</text>
            <rect x="345" y="233" width="390" height="20" fill={`${color}40`} rx="4" />
            <text x="540" y="247" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Mesmo evento ocorre agora 1-em-5 anos (+1.2°C)</text>
            <text x="380" y="268" textAnchor="middle" fill="#fb923c" fontSize="8">Fonte: Fischer {'&'} Knutti (2015) Nature Climate Change; IPCC AR6 (2021)</text>

            <defs>
              <marker id="a6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(249,115,22,0.3)" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Acceleração observada:</strong> o mesmo evento de calor que ocorria 1 vez em 50 anos no clima de 1950 ocorre agora 1 vez em 5 anos com +1.2°C de aquecimento. A +2°C, tornar-se-ia um evento de 1-em-2 anos — ou seja, praticamente anual.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Wildfire ML — Risco, Detecção e Progressão</h2>
        <p style={S.p}>Incêndios florestais causaram perdas recorde — Califórnia 2020: 4.2M hectares, 33 mortes, $16B em danos. O risco de ignição é modelado com ML usando features de humidade do combustível vegetal (NDWI, FMC), condições meteorológicas (vento, temperatura, humidade relativa), histórico de ignições e interface urbano-florestal. VIIRS (Visible Infrared Imaging Radiometer Suite) deteta pontos quentes em tempo real com resolução de 375m e latência de 3 horas.</p>
        <p style={S.p}>Câmeras de detecção AI: ALERTWildfire (centenas de câmeras nas montanhas da Califórnia) com CNN para detecção de fumo em menos de 10 minutos. Progressão do fogo: modelos físicos (FARSITE, FlamMap) complementados com ML para prever avanço em tempo real — integração com sistemas de evacuação. FireBench (2024): benchmark de modelos ML para previsão de incêndios onde Random Forest supera modelos físicos em previsão de 12 horas. Cicatrizes de incêndio: Sentinel-2 NBR (Normalized Burn Ratio) para mapeamento automático de severidade.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 250" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="760" height="250" fill="var(--bg-secondary)" rx="10" />
            <text x="380" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">SISTEMA DE PREVISÃO DE INCÊNDIOS FLORESTAIS</text>

            {/* Input features */}
            <text x="100" y="45" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">INPUTS</text>
            {[
              { y: 58, label: 'Humidade do combustível (NDWI)' },
              { y: 80, label: 'Topografia (DEM slope/aspect)' },
              { y: 102, label: 'Vento (NWP forecast, 72h)' },
              { y: 124, label: 'Histórico de ignições (10a)' },
            ].map(d => (
              <g key={d.y}>
                <rect x="15" y={d.y - 12} width="170" height="22" fill="rgba(249,115,22,0.06)" rx="5" />
                <text x="100" y={d.y + 3} textAnchor="middle" fill="#fbbf24" fontSize="9">{d.label}</text>
              </g>
            ))}

            {/* Arrow */}
            <line x1="185" y1="91" x2="215" y2="91" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" markerEnd="url(#a7)" />

            {/* XGBoost model */}
            <rect x="215" y="55" width="140" height="72" fill={`${color}15`} stroke={color} strokeWidth="1" rx="8" />
            <text x="285" y="79" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">XGBoost</text>
            <text x="285" y="95" textAnchor="middle" fill={color} fontSize="10">Fire Risk Map</text>
            <text x="285" y="112" textAnchor="middle" fill="#fb923c" fontSize="8">Score 0-100%</text>
            <text x="285" y="122" textAnchor="middle" fill="#fb923c" fontSize="8">por célula 1km²</text>

            {/* Arrow */}
            <line x1="355" y1="91" x2="385" y2="91" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" markerEnd="url(#a7)" />

            {/* Real-time detection */}
            <rect x="385" y="40" width="165" height="100" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="467" y="58" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">DETECÇÃO TEMPO REAL</text>
            <rect x="398" y="63" width="139" height="22" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="467" y="78" textAnchor="middle" fill="#fbbf24" fontSize="9">VIIRS/MODIS 375m res.</text>
            <rect x="398" y="89" width="139" height="22" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="467" y="104" textAnchor="middle" fill="#fbbf24" fontSize="9">Himawari-9 (10 min)</text>
            <rect x="398" y="115" width="139" height="22" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="467" y="130" textAnchor="middle" fill="#fbbf24" fontSize="9">ALERTWildfire CNN (fumo)</text>

            {/* Arrow */}
            <line x1="550" y1="91" x2="580" y2="91" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" markerEnd="url(#a7)" />

            {/* Fire spread */}
            <rect x="580" y="40" width="165" height="100" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="662" y="58" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">PROGRESSÃO DO FOGO</text>
            <rect x="593" y="63" width="139" height="22" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="662" y="78" textAnchor="middle" fill="#fbbf24" fontSize="9">Autómato celular + vento</text>
            <rect x="593" y="89" width="139" height="22" fill={`${color}20`} stroke={color} rx="5" />
            <text x="662" y="104" textAnchor="middle" fill={color} fontSize="9" fontWeight="600">ML speed model (12h)</text>
            <rect x="593" y="115" width="139" height="22" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" rx="5" />
            <text x="662" y="130" textAnchor="middle" fill="#fbbf24" fontSize="9">Rotas de evacuação</text>

            {/* Satellite badges */}
            <rect x="15" y="155" width="730" height="80" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="380" y="174" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="600">FONTES DE SATÉLITE E BENCHMARKS</text>
            {[
              { x: 100, label: 'Sentinel-2', sub: 'NBR burn severity' },
              { x: 240, label: 'VIIRS', sub: '375m, 3h latency' },
              { x: 380, label: 'Landsat-9', sub: 'Fuel moisture map' },
              { x: 520, label: 'FireBench 2024', sub: 'RF +12% vs FARSITE' },
              { x: 660, label: 'FIRMS (NASA)', sub: 'Near-RT fire alerts' },
            ].map(d => (
              <g key={d.x}>
                <rect x={d.x - 65} y="180" width="130" height="40" fill={`${color}15`} stroke={color} strokeWidth="0.5" rx="6" />
                <text x={d.x} y="197" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{d.label}</text>
                <text x={d.x} y="213" textAnchor="middle" fill="#fb923c" fontSize="8">{d.sub}</text>
              </g>
            ))}

            <defs>
              <marker id="a7" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(249,115,22,0.3)" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          A integração de VIIRS com modelos de progressão permite pré-posicionar recursos de combate a incêndios e emitir ordens de evacuação com 6-12 horas de antecedência — janela crítica para reduzir mortalidade e danos em interface urbano-florestal.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Previsão de Inundações e Cheias</h2>
        <p style={S.p}>Inundações são o desastre natural mais mortífero — as cheias de 2021 na Alemanha e Bélgica causaram 240 mortes e €46B em danos; em Bangladesh em 2022 deslocaram 7 milhões de pessoas. A previsão hidrológica combina modelos chuva-escoamento (HBV, Sacramento, GR4J) com modelos hidráulicos 2D para gerar mapas de inundação. Google Flood Hub usa ML em 5.000+ rios de 80 países, fornecendo alertas de inundação 7 dias antes com mapas de extensão. O modelo hidrológico AI do DeepMind e Google supera modelos numéricos em 40% das estações fluviométricas globais.</p>
        <p style={S.p}>Flash floods causados por chuvas intensas em bacias pequenas têm tempos de resposta de horas — ML para estimativa de precipitação por radar (QPE) é mais preciso que NWP a curto prazo. Flood damage estimation combina mapas de inundação com dados de uso do solo e modelos de vulnerabilidade de edifícios para estimativa de danos para seguradoras e autoridades.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 760 270" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="760" height="270" fill="var(--bg-secondary)" rx="10" />
            <text x="380" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">ARQUITECTURA DE PREVISÃO DE INUNDAÇÕES</text>

            {/* Inputs */}
            {[
              { x: 15, label: 'Precipitação NWP', sub: '72h forecast' },
              { x: 145, label: 'Humidade do Solo', sub: 'Sentinel-1 SAR' },
              { x: 275, label: 'Rede de Gauges', sub: 'Caudal em tempo real' },
              { x: 405, label: 'DEM', sub: 'Modelo digital terreno' },
            ].map(d => (
              <g key={d.x}>
                <rect x={d.x} y="35" width="120" height="44" fill="rgba(249,115,22,0.06)" rx="7" />
                <text x={d.x + 60} y="55" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">{d.label}</text>
                <text x={d.x + 60} y="70" textAnchor="middle" fill="#fb923c" fontSize="8">{d.sub}</text>
                <line x1={d.x + 60} y1="79" x2={d.x + 60} y2="100" stroke="var(--card-border)" strokeWidth="1" />
              </g>
            ))}

            {/* Convergence line */}
            <line x1="75" y1="100" x2="525" y2="100" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="300" y1="100" x2="300" y2="115" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" markerEnd="url(#a8)" />

            {/* Hydrological model */}
            <rect x="200" y="115" width="200" height="44" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="300" y="135" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Modelo Hidrológico</text>
            <text x="300" y="150" textAnchor="middle" fill="#fb923c" fontSize="8">HBV / SWAT / Google AI</text>

            {/* Arrow */}
            <line x1="300" y1="159" x2="300" y2="175" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" markerEnd="url(#a8)" />

            {/* Hydraulic model */}
            <rect x="185" y="175" width="230" height="44" fill={`${color}15`} stroke={color} strokeWidth="1" rx="8" />
            <text x="300" y="195" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Modelo Hidráulico 2D</text>
            <text x="300" y="210" textAnchor="middle" fill="#fb923c" fontSize="8">HEC-RAS 2D — mapa de inundação</text>

            {/* Lead time chart */}
            <rect x="545" y="35" width="200" height="190" fill="rgba(249,115,22,0.06)" rx="8" />
            <text x="645" y="52" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">LEAD TIME vs PRECISÃO</text>
            <line x1="560" y1="195" x2="735" y2="195" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="560" y1="65" x2="560" y2="195" stroke="var(--card-border)" strokeWidth="1" />
            <text x="647" y="219" textAnchor="middle" fill="rgba(249,115,22,0.3)" fontSize="7">Lead time (dias)</text>

            {[
              { x: 575, w: 40, h: 100, label: '1-3d', prec: 'Alta' },
              { x: 635, w: 40, h: 65, label: '7-10d', prec: 'Média' },
              { x: 695, w: 40, h: 30, label: 'Sazonal', prec: 'Baixa' },
            ].map(b => (
              <g key={b.x}>
                <rect x={b.x} y={195 - b.h} width={b.w} height={b.h} fill={`${color}50`} stroke={color} strokeWidth="0.5" rx="3" />
                <text x={b.x + 20} y={195 - b.h - 5} textAnchor="middle" fill={color} fontSize="8" fontWeight="700">{b.prec}</text>
                <text x={b.x + 20} y="210" textAnchor="middle" fill="#fb923c" fontSize="7">{b.label}</text>
              </g>
            ))}

            {/* Flash flood annotation */}
            <rect x="545" y="232" width="200" height="28" fill={`${color}20`} stroke={color} strokeWidth="0.5" rx="5" />
            <text x="645" y="244" textAnchor="middle" fill={color} fontSize="8" fontWeight="700">Flash Flood: 0-6h</text>
            <text x="645" y="255" textAnchor="middle" fill="#fb923c" fontSize="7">Radar QPE + ConvNet</text>

            <defs>
              <marker id="a8" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(249,115,22,0.3)" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Google Flood Hub (2024):</strong> o sistema cobre 5.000+ rios em 80 países e envia alertas para telemóveis via Google Search e Maps nas 72 horas antes de inundações. Nos testes em Bangladesh, a precisão de 7 dias de antecedência permitiu evacuações preventivas eficazes — redução estimada de 20-30% na mortalidade.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Riscos Físicos e de Transição Climática</h2>
        <p style={S.p}>Risco climático físico e de transição são agora reconhecidos como riscos financeiros materiais pelo BCE, Fed e reguladores de seguros. Risco físico agudo inclui eventos extremos com impacto imediato (tempestades, inundações, ondas de calor) — Swiss Re estima €160B por ano em perdas seguradas por catástrofes naturais. Risco físico crónico inclui alterações graduais: o nível do mar sobe 0.3-1.0m até 2100 (IPCC AR6), ameaçando mais de $1T em imóveis costeiros apenas nos EUA. Stranded assets são reservas de combustíveis fósseis que não podem ser exploradas para manter 1.5°C — estimado em $1-4T de ativos potencialmente "stranded".</p>
        <p style={S.p}>O NGFS (Network for Greening the Financial System) fornece cenários climáticos para testes de stress de bancos centrais — Orderly Transition, Disorderly Transition e Hot House World. ML para avaliação de risco inclui análise geoespacial (risco de inundação por endereço para carteiras de hipotecas) e NLP para litigation risk a partir de processos judiciais climáticos.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 860 290" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="860" height="290" fill="var(--bg-secondary)" rx="10" />
            <text x="430" y="24" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">TAXONOMIA DE RISCOS CLIMÁTICOS (TCFD)</text>

            {/* Root */}
            <rect x="350" y="36" width="160" height="34" fill={`${color}20`} stroke={color} strokeWidth="1.5" rx="8" />
            <text x="430" y="57" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Risco Climático</text>
            <line x1="430" y1="70" x2="190" y2="90" stroke="#f97316" strokeWidth="1.5" />
            <line x1="430" y1="70" x2="645" y2="90" stroke="#f97316" strokeWidth="1.5" />

            {/* Riscos Físicos */}
            <rect x="50" y="90" width="280" height="34" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" rx="8" />
            <text x="190" y="111" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Riscos Físicos</text>
            <line x1="130" y1="124" x2="130" y2="145" stroke="#f97316" strokeWidth="1.2" />
            <line x1="270" y1="124" x2="270" y2="145" stroke="#f97316" strokeWidth="1.2" />

            {/* Agudo */}
            <rect x="20" y="145" width="210" height="120" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.2)" strokeWidth="1" rx="7" />
            <text x="125" y="163" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">AGUDO (eventos)</text>
            {['Furacões / Tempestades', 'Inundações / Cheias', 'Ondas de calor', 'Incêndios florestais'].map((t, i) => (
              <g key={t}>
                <circle cx="36" cy={178 + i * 20} r="3" fill={color} />
                <text x="44" y={182 + i * 20} fill="#fbbf24" fontSize="9">{t}</text>
              </g>
            ))}

            {/* Crónico */}
            <rect x="240" y="145" width="220" height="120" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.2)" strokeWidth="1" rx="7" />
            <text x="350" y="163" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">CRÓNICO (tendências)</text>
            {['Subida do nível do mar', 'Aumento de temperatura', 'Shifts de precipitação', 'Degelo permafrost'].map((t, i) => (
              <g key={t}>
                <circle cx="256" cy={178 + i * 20} r="3" fill={color} />
                <text x="264" y={182 + i * 20} fill="#fbbf24" fontSize="9">{t}</text>
              </g>
            ))}

            {/* Riscos de Transição */}
            <rect x="470" y="90" width="370" height="34" fill="rgba(249,115,22,0.06)" stroke="#fb923c" strokeWidth="1" rx="8" />
            <text x="655" y="111" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Riscos de Transição</text>
            {[
              { cx: 510, label: 'Política',    items: ['Preço carbono', 'Regulação CBAM'] },
              { cx: 603, label: 'Tecnologia',  items: ['Stranded assets', 'Nova tech'] },
              { cx: 696, label: 'Mercado',     items: ['Demand shifts', 'Green premium'] },
              { cx: 789, label: 'Reputação',   items: ['Litigation', 'Boycotts'] },
            ].map(d => (
              <g key={d.label}>
                <line x1={d.cx} y1="124" x2={d.cx} y2="145" stroke="#f97316" strokeWidth="1.2" />
                <rect x={d.cx - 42} y="145" width="84" height="68" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" rx="5" />
                <text x={d.cx} y="159" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">{d.label}</text>
                {d.items.map((it, i) => (
                  <text key={it} x={d.cx} y={173 + i * 14} textAnchor="middle" fill="#fbbf24" fontSize="8">{it}</text>
                ))}
              </g>
            ))}
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Cenários NGFS para stress tests:</strong> (1) Orderly Transition — acção climática precoce e ordenada, riscos de transição limitados; (2) Disorderly Transition — acção tardia e brusca, volatilidade elevada; (3) Hot House World — falha climática, riscos físicos severos. Os bancos centrais de UE, UK e Austrália já conduziram stress tests formais com estes cenários.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ─────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Adaptação Climática e Resiliência com IA</h2>
        <p style={S.p}>Adaptação climática é o conjunto de ajustamentos para reduzir vulnerabilidade aos impactos climáticos actuais e futuros — estimado em $140-300B por ano até 2030 (UNEP Adaptation Gap Report). Nature-based Solutions (NbS): restauração de manguezais protege 100 milhões de pessoas de inundações costeiras ($65B por ano em danos evitados), florestas urbanas reduzem 2-8°C de temperatura local, wetlands retêm cheias e melhoram qualidade da água. Urban Heat Island: ML para identificar zonas críticas de calor urbano via Landsat LST e dados socioeconómicos, com prioritização de intervenções de arrefecimento (arborização, pavimentos reflectivos, corredores de vento).</p>
        <p style={S.p}>Early Warning Systems: a ONU e WMO têm meta de cobertura global de EWS até 2027 — ML aumenta precisão e lead time. O índice de vulnerabilidade climática combina exposição (eventos extremos), sensibilidade (infra-estrutura, saúde da população) e capacidade adaptativa (riqueza, governança, acesso a informação) — essencial para justiça climática.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 860 270" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="860" height="270" fill="var(--bg-secondary)" rx="10" />
            <text x="430" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600" letterSpacing="1">CICLO DE PLANEAMENTO DE ADAPTAÇÃO CLIMÁTICA</text>

            {/* Left sidebar — URBAN TREES */}
            <rect x="8" y="30" width="132" height="118" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" rx="7" />
            <text x="74" y="47" textAnchor="middle" fill="#fb923c" fontSize="8" fontWeight="600">URBAN TREES</text>
            <text x="74" y="58" textAnchor="middle" fill="#fb923c" fontSize="7">CO-BENEFÍCIOS NbS</text>
            {[
              { icon: '🌡', label: 'Arrefecimento 2-8°C' },
              { icon: '💨', label: 'Qualidade do ar' },
              { icon: '🦋', label: 'Biodiversidade' },
              { icon: '🧠', label: 'Saúde mental' },
              { icon: '🌿', label: 'Sequestro carbono' },
            ].map((cb, i) => (
              <g key={cb.label}>
                <text x="22" y={76 + i * 15} fill="#fbbf24" fontSize="9">{cb.icon}</text>
                <text x="36" y={76 + i * 15} fill="#fbbf24" fontSize="8">{cb.label}</text>
              </g>
            ))}

            {/* Right sidebar — SUBIDA DO MAR */}
            <rect x="720" y="30" width="132" height="138" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" rx="7" />
            <text x="786" y="47" textAnchor="middle" fill="#fb923c" fontSize="8" fontWeight="600">SUBIDA DO MAR</text>
            <text x="786" y="58" textAnchor="middle" fill="#fb923c" fontSize="7">OPÇÕES DE ADAPTAÇÃO</text>
            {[
              { label: 'Dique / sea wall',  note: 'Caro, manutenção' },
              { label: 'Managed retreat',   note: 'Socialmente complexo' },
              { label: 'Living shoreline',  note: 'NbS, co-benefícios' },
            ].map((o, i) => (
              <g key={o.label}>
                <rect x="727" y={64 + i * 34} width="118" height="28" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="0.8" rx="4" />
                <text x="786" y={77 + i * 34} textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="600">{o.label}</text>
                <text x="786" y={88 + i * 34} textAnchor="middle" fill="#fb923c" fontSize="7">{o.note}</text>
              </g>
            ))}

            {/* 5-node cycle — centred between sidebars (x: 160–700) */}
            {[
              { cx: 430, cy: 60,  label: 'Avaliar Riscos',    s1: 'Mapas vulnerabilidade', s2: 'física + socioeconómica' },
              { cx: 608, cy: 128, label: 'Identificar Opções', s1: 'NbS, infra-estrutura', s2: 'hard, comportamental' },
              { cx: 548, cy: 218, label: 'Implementar',        s1: 'Projecto + gestão', s2: 'de mudança' },
              { cx: 312, cy: 218, label: 'Monitorizar',        s1: 'KPIs de resiliência', s2: 'sensores + satélite' },
              { cx: 252, cy: 128, label: 'Prioritizar',        s1: 'Cost-benefit ML', s2: 'co-benefícios' },
            ].map((n, i) => (
              <g key={n.label}>
                <ellipse cx={n.cx} cy={n.cy} rx="65" ry="30" fill={`${color}20`} stroke={color} strokeWidth="1.2" />
                <text x={n.cx} y={n.cy - 4}  textAnchor="middle" fill={color}   fontSize="9" fontWeight="700">{n.label}</text>
                <text x={n.cx} y={n.cy + 10} textAnchor="middle" fill="#fb923c" fontSize="7">{n.s1}</text>
                <text x={n.cx} y={n.cy + 20} textAnchor="middle" fill="#fb923c" fontSize="7">{n.s2}</text>
              </g>
            ))}

            {/* Arrows: Avaliar→Identificar→Implementar→Monitorizar→Prioritizar→Avaliar */}
            <line x1="494" y1="68"  x2="563" y2="104" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a9)" />
            <line x1="608" y1="158" x2="573" y2="188" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a9)" />
            <line x1="481" y1="222" x2="379" y2="222" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a9)" />
            <line x1="259" y1="202" x2="240" y2="159" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a9)" />
            <line x1="295" y1="105" x2="368" y2="70"  stroke="#f97316" strokeWidth="1.5" markerEnd="url(#a9)" />

            <defs>
              <marker id="a9" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Adaptation Gap Report (UNEP 2023):</strong> o financiamento de adaptação nos países em desenvolvimento é 10-18 vezes inferior ao necessário. O défice de financiamento de adaptação é de $194-366B por ano. A IA e o earth observation permitem identificar vulnerabilidades e priorizar investimentos com eficiência sem precedentes — mas o financiamento é o constraint determinante, não a tecnologia.
        </div>
        <div style={S.note}>
          O índice de vulnerabilidade climática ND-GAIN (University of Notre Dame) combina 45 indicadores de exposição, sensibilidade e capacidade adaptativa para 185 países, actualizados anualmente. É amplamente usado por bancos de desenvolvimento e seguradoras para alocar recursos de adaptação e modelar risco soberano climático.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Detecção de Eventos Climáticos Extremos</strong> — redes de detecção ClimateNet e ClimaX identificam ciclones tropicais, rios atmosféricos e zonas frontais em dados de reanálise ERA5; CNN U-Net supera métodos baseados em threshold — critical para alertas precoces e gestão de risco.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Wildfire ML — Risco, Detecção e Progressão</strong> — risco de incêndio modelado com Random Forests e FireWork (ML+física) combina vegetação seca, vento e topografia; GOES-16/17 e Sentinel detecção ativa de fogos em tempo real; modelos de propagação (FARSITE, Phoenix) guiam evacuações.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Previsão de Inundações e Cheias</strong> — modelos hidrológicos (GloFAS, FloodForecast) combinam precipitação prevista com modelos de bacia hidrográfica; Google Flood Hub usa ML para alertas de cheia em &lt;5min para mais de 80 países — salvando vidas em países de baixo rendimento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Riscos Físicos e de Transição Climática</strong> — riscos físicos incluem eventos extremos e mudanças crónicas (subida do mar); riscos de transição surgem de regulação, preferências e tecnologia; NGFS cenários e modelos IAM (REMIND, MESSAGE) quantificam exposição de activos financeiros a ambos os tipos de risco.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Adaptação Climática e Resiliência com IA</strong> — IA optimiza decisões de adaptação: localização de infra-estrutura, design de redes de drenagem, gestão de reservas de água e planeamento urbano resistente ao calor; digital twins de cidades simulam impactos de medidas de adaptação antes da implementação.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
