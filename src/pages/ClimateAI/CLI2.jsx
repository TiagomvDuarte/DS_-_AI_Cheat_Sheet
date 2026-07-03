import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './ClimateAI';

const m = modules[1];
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

export default function CLI2() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}>← Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {m.num}</span>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Previsão Solar — Irradiância e Geração</h2>
        <p style={S.p}>Previsão solar é crítica para integração de solar fotovoltaico na rede. As variáveis chave são: GHI (Global Horizontal Irradiance), DNI (Direct Normal Irradiance — para concentração solar CSP) e DHI (Diffuse Horizontal Irradiance). Nowcasting (0-4h): usa imagens de satélite MSG/GOES com CNN para prever movimento de nuvens — plataformas como SolarAnywhere e Solargis. Day-ahead (1-2 dias): NWP (Numerical Weather Prediction) combinado com gradient boosting ou LSTM atingem MAE de cerca de 10% da capacidade instalada.</p>
        <p style={S.p}>Fontes de erro: nebulosidade sub-grid, aerossóis (poeira do Saara reduz irradiância 20-40% no Sul da Europa), efeito de temperatura nos módulos PV (eficiência cai cerca de 0.4%/°C acima de 25°C). Casos de uso práticos: despacho de baterias, mercados intraday de electricidade, manutenção preventiva (detecção de soiling via análise de dados SCADA com ML).</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 230" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="270" fill="var(--bg-secondary)" rx="10" />

            {/* Title */}
            <text x="390" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">PIPELINE DE PREVISÃO SOLAR</text>

            {/* Step 1: Satellite */}
            <rect x="15" y="40" width="120" height="60" fill="rgba(249,115,22,0.10)" rx="7" />
            <text x="75" y="62" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Satélite MSG</text>
            <text x="75" y="76" textAnchor="middle" fill="#fb923c" fontSize="8">Imagens nuvens</text>
            <text x="75" y="89" textAnchor="middle" fill="#f97316" fontSize="7">15 min · 3 km</text>

            {/* Arrow */}
            <line x1="135" y1="70" x2="165" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrC)" />

            {/* Step 2: CNN/NWP */}
            <rect x="165" y="40" width="130" height="60" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="230" y="60" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">CNN / NWP</text>
            <text x="230" y="74" textAnchor="middle" fill="#f97316" fontSize="8">Previsão cobertura</text>
            <text x="230" y="87" textAnchor="middle" fill="#f97316" fontSize="7">nuvens + aerossóis</text>

            {/* Arrow */}
            <line x1="295" y1="70" x2="325" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrC)" />

            {/* Step 3: GHI forecast */}
            <rect x="325" y="30" width="140" height="80" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="395" y="55" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">GHI Forecast</text>
            <text x="395" y="70" textAnchor="middle" fill="#fb923c" fontSize="8">Irradiância horizontal</text>
            <text x="395" y="84" textAnchor="middle" fill="#f97316" fontSize="8">global prevista</text>
            <text x="395" y="98" textAnchor="middle" fill="#f97316" fontSize="7">W/m² por hora</text>

            {/* Arrow */}
            <line x1="465" y1="70" x2="495" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrC)" />

            {/* Step 4: PV model */}
            <rect x="495" y="40" width="130" height="60" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="560" y="60" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Modelo PV</text>
            <text x="560" y="74" textAnchor="middle" fill="#f97316" fontSize="8">Correcção temperatura</text>
            <text x="560" y="87" textAnchor="middle" fill="#f97316" fontSize="7">Eficiência inversor</text>

            {/* Arrow */}
            <line x1="625" y1="70" x2="655" y2="70" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrC)" />

            {/* Step 5: Power output */}
            <rect x="655" y="40" width="110" height="60" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="710" y="62" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Potência (MW)</text>
            <text x="710" y="76" textAnchor="middle" fill="#fb923c" fontSize="8">Previsão por</text>
            <text x="710" y="89" textAnchor="middle" fill="#f97316" fontSize="8">horizonte temporal</text>

            {/* === Horizon comparison bars === */}
            <text x="185" y="122" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">ERRO POR HORIZONTE (MAE % capacidade)</text>

            {/* Nowcasting */}
            <rect x="80" y="175" width="20" height="25" fill="#f97316" rx="2" opacity="0.85" />
            <text x="90" y="172" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">5%</text>
            <text x="90" y="212" textAnchor="middle" fill="#fb923c" fontSize="8">Nowcast</text>
            <text x="90" y="223" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">0-4h</text>

            {/* Day-ahead */}
            <rect x="170" y="165" width="20" height="35" fill="#f97316" rx="2" opacity="0.85" />
            <text x="180" y="162" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">10%</text>
            <text x="180" y="212" textAnchor="middle" fill="#fb923c" fontSize="8">Day-ahead</text>
            <text x="180" y="223" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">1-2 dias</text>

            {/* Week-ahead */}
            <rect x="260" y="145" width="20" height="55" fill="#f59e0b" rx="2" opacity="0.85" />
            <text x="270" y="142" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700">20%</text>
            <text x="270" y="212" textAnchor="middle" fill="#fbbf24" fontSize="8">Week-ahead</text>
            <text x="270" y="223" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="7">5-7 dias</text>

            {/* Divider */}
            <line x1="345" y1="148" x2="345" y2="240" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" />

            {/* === Diurnal curve === */}
            <text x="565" y="122" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">CURVA DIÁRIA — GERAÇÃO PV</text>

            {/* Axes */}
            <line x1="380" y1="195" x2="760" y2="195" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="380" y1="140" x2="380" y2="195" stroke="var(--card-border)" strokeWidth="1" />
            <text x="375" y="145" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">100%</text>
            <text x="375" y="195" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">0%</text>
            <text x="384" y="206" fill="rgba(249,115,22,0.6)" fontSize="7">6h</text>
            <text x="460" y="206" fill="rgba(249,115,22,0.6)" fontSize="7">10h</text>
            <text x="555" y="206" fill="rgba(249,115,22,0.6)" fontSize="7">14h</text>
            <text x="655" y="206" fill="rgba(249,115,22,0.6)" fontSize="7">18h</text>
            <text x="740" y="206" fill="rgba(249,115,22,0.6)" fontSize="7">22h</text>

            {/* Actual generation */}
            <polyline
              points="380,195 395,194 415,188 440,170 470,152 500,143 530,141 555,143 580,152 610,168 635,183 660,192 680,194 760,195"
              fill="none" stroke="#f97316" strokeWidth="2" />

            {/* Forecast */}
            <polyline
              points="380,195 395,194 415,190 440,172 470,154 500,145 530,142 555,144 580,154 610,170 635,185 660,192 680,195 760,195"
              fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />

            {/* Legend */}
            <line x1="385" y1="220" x2="405" y2="220" stroke="#f97316" strokeWidth="2" />
            <text x="410" y="224" fill="#f97316" fontSize="8">Real</text>
            <line x1="450" y1="220" x2="470" y2="220" stroke="#f97316" strokeWidth="2" strokeDasharray="4,2" />
            <text x="475" y="224" fill="#f97316" fontSize="8">Previsão</text>

            <defs>
              <marker id="arrC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.note}>
          Satélites geoestacionários (MSG-4 sobre Europa, GOES-16/18 sobre Américas) fornecem imagens a cada 10-15 minutos. O movimento aparente das nuvens entre frames consecutivos (optical flow) é a base do nowcasting solar. CNN treinadas em pares (imagem nuvens → irradiância medida) superam métodos de optical flow clássico em 15-30% de MAE.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Previsão Eólica — Onshore e Offshore</h2>
        <p style={S.p}>Previsão eólica é mais desafiante que solar devido à natureza caótica do vento. A curva de potência mostra relação cúbica P &#8733; v³ até à potência nominal — variações de densidade do ar e turbulência afectam a curva real de cada turbina. NWP + ML: ECMWF HRES (9 km, 4x/dia) como predictor principal com XGBoost/LSTM para correcção de viés local e efeitos de terreno.</p>
        <p style={S.p}>Ramp events: mudanças rápidas de potência (±500 MW em 30 min num parque offshore) são críticas para estabilidade da rede. Offshore: melhor recurso eólico (mais consistente, ventos mais fortes), mas mais difícil de prever (interacções parque-atmosfera, esteira de turbinas, correntes marinhas). Wake modelling com ML optimiza layout e yaw control para maximizar geração total do parque.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />

            {/* === LEFT: Power curve === */}
            <text x="190" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">CURVA DE POTÊNCIA EÓLICA</text>

            {/* Axes */}
            <line x1="30" y1="220" x2="380" y2="220" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="30" y1="40" x2="30" y2="220" stroke="var(--card-border)" strokeWidth="1" />
            <text x="25" y="45" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">100%</text>
            <text x="25" y="130" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">50%</text>
            <text x="25" y="220" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">0%</text>
            <text x="30" y="232" fill="rgba(249,115,22,0.6)" fontSize="7">0</text>
            <text x="88" y="232" fill="rgba(249,115,22,0.6)" fontSize="7">3 m/s</text>
            <text x="158" y="232" fill="#f97316" fontSize="7">12 m/s</text>
            <text x="288" y="232" fill="#f97316" fontSize="7">25 m/s</text>
            <text x="200" y="242" fill="rgba(249,115,22,0.6)" fontSize="7">Velocidade do vento</text>

            {/* Power curve S-shape */}
            <polyline
              points="30,220 88,220 100,215 115,205 130,188 145,168 160,148 175,130 190,115 205,105 220,100 235,100 250,100 265,100 280,100 295,100 310,100 325,220 360,220 380,220"
              fill="none" stroke="#f97316" strokeWidth="2.5" />

            {/* Fill under curve */}
            <polygon
              points="88,220 100,215 115,205 130,188 145,168 160,148 175,130 190,115 205,105 220,100 235,100 250,100 265,100 280,100 295,100 310,100 325,220"
              fill="#f97316" opacity="0.1" />

            {/* Markers */}
            <line x1="88" y1="45" x2="88" y2="220" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
            <text x="88" y="40" textAnchor="middle" fill="#f97316" fontSize="8">cut-in</text>

            <line x1="220" y1="45" x2="220" y2="100" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
            <text x="220" y="40" textAnchor="middle" fill="#f97316" fontSize="8">nominal</text>

            <line x1="310" y1="45" x2="310" y2="220" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
            <text x="310" y="40" textAnchor="middle" fill="#f97316" fontSize="8">cut-out</text>

            {/* Ramp event annotation */}
            <rect x="30" y="250" width="350" height="24" fill="rgba(234,88,12,0.15)" rx="4" />
            <text x="205" y="261" textAnchor="middle" fill="#fb923c" fontSize="8" fontWeight="600">Ramp event: ±500 MW em 30 min (parque offshore)</text>
            <text x="205" y="270" textAnchor="middle" fill="#f97316" fontSize="7">Critical para estabilidade — ML antecipa com 2-6h de lead time</text>

            {/* === RIGHT: LSTM Architecture === */}
            <text x="580" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">LSTM PARA PREVISÃO EÓLICA</text>

            {/* Input sequence */}
            <rect x="400" y="38" width="130" height="110" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="465" y="57" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Inputs NWP</text>
            <text x="415" y="73" fill="#f97316" fontSize="8">v 10m: 5.2 m/s</text>
            <text x="415" y="87" fill="#f97316" fontSize="8">v 50m: 7.1 m/s</text>
            <text x="415" y="101" fill="#f97316" fontSize="8">v 100m: 8.8 m/s</text>
            <text x="415" y="115" fill="#f97316" fontSize="8">v hub 150m: 9.5 m/s</text>
            <text x="415" y="129" fill="#fb923c" fontSize="8">direção · densidade</text>

            {/* Arrow */}
            <line x1="530" y1="93" x2="560" y2="93" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrC2)" />

            {/* LSTM box */}
            <rect x="560" y="55" width="100" height="76" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="610" y="78" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">LSTM</text>
            <text x="610" y="93" textAnchor="middle" fill="#fb923c" fontSize="8">2 camadas</text>
            <text x="610" y="107" textAnchor="middle" fill="#f97316" fontSize="7">hidden: 256</text>
            <text x="610" y="121" textAnchor="middle" fill="#f97316" fontSize="7">dropout: 0.2</text>

            {/* Arrow */}
            <line x1="660" y1="93" x2="690" y2="93" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrC2)" />

            {/* Output */}
            <rect x="690" y="60" width="80" height="66" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="730" y="82" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Potência</text>
            <text x="730" y="97" textAnchor="middle" fill="#fb923c" fontSize="8">P10/P50/P90</text>
            <text x="730" y="112" textAnchor="middle" fill="#f97316" fontSize="8">+6h / +24h</text>

            {/* Spatial correlation map */}
            <text x="580" y="170" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">CORRELAÇÃO ESPACIAL — MAR DO NORTE</text>

            {/* Grid of wind farms */}
            {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => {
              const corr = Math.max(0.3, 1 - (r*0.12 + c*0.1 + Math.abs(r-c)*0.05));
              const opacity = corr;
              return (
                <rect key={`wf${r}${c}`}
                  x={400 + c*56} y={180 + r*16}
                  width="50" height="14"
                  fill="#f97316"
                  opacity={opacity * 0.8}
                  rx="2" />
              );
            }))}
            <text x="400" y="270" fill="rgba(249,115,22,0.6)" fontSize="7">Baixa correlação</text>
            <rect x="490" y="263" width="40" height="8" fill="#f97316" opacity="0.2" rx="1" />
            <rect x="538" y="263" width="40" height="8" fill="#f97316" opacity="0.5" rx="1" />
            <rect x="586" y="263" width="40" height="8" fill="#f97316" opacity="0.8" rx="1" />
            <text x="636" y="270" fill="#f97316" fontSize="7">Alta correlação</text>

            <defs>
              <marker id="arrC2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>Previsão de conjunto (ensemble forecasting):</strong> ECMWF ENS com 51 membros como base + ML de meta-aprendizagem que combina os membros usando dados históricos locais do parque. A distribuição de probabilidade resultante (percentis P10/P50/P90) é mais valiosa para traders de energia e gestores de rede do que uma previsão pontual.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Integração de Renováveis na Rede</h2>
        <p style={S.p}>A integração massiva de renováveis cria desafios de estabilidade de rede. Duck curve (California ISO): o excesso de solar no meio do dia reduz a carga líquida (net load) drasticamente — às 18h quando o sol se põe é necessária uma rampa rápida de +13 GW em 3 horas, coberta por gas peakers ou baterias. Inércia sintética: as fontes renováveis não têm inércia rotacional como geradores síncronos — a frequência da rede torna-se mais sensível a perturbações súbitas.</p>
        <p style={S.p}>Batteries para frequency response: BESS (Battery Energy Storage Systems) respondem em milissegundos vs segundos dos geradores térmicos. Hornsdale Power Reserve (Tesla, 150 MW / 193 MWh, Austrália): ROI positivo em 2 anos fornecendo serviços ancilares (frequency control ancillary services). Curtailment: com alta penetração solar/eólica, produção excedente é desperdiçada — armazenamento ou exportação via interligações resolve.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            {/* === LEFT: Frequency deviation === */}
            <text x="190" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">DESVIO DE FREQUÊNCIA — PERTURBAÇÃO</text>

            {/* Axes */}
            <line x1="30" y1="200" x2="380" y2="200" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="30" y1="60" x2="30" y2="230" stroke="var(--card-border)" strokeWidth="1" />

            {/* 50Hz line */}
            <line x1="30" y1="100" x2="380" y2="100" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
            <text x="25" y="103" textAnchor="end" fill="#f97316" fontSize="7">50 Hz</text>
            <text x="25" y="145" textAnchor="end" fill="#f59e0b" fontSize="7">49.5</text>
            <text x="25" y="175" textAnchor="end" fill="#f97316" fontSize="7">49.2</text>
            <text x="25" y="200" textAnchor="end" fill="#f97316" fontSize="7">49.0</text>

            {/* Horizontal gridlines */}
            <line x1="30" y1="145" x2="380" y2="145" stroke="var(--card-border)" strokeWidth="0.5" strokeDasharray="2,4" />
            <line x1="30" y1="175" x2="380" y2="175" stroke="var(--card-border)" strokeWidth="0.5" strokeDasharray="2,4" />

            {/* Frequency dip */}
            <polyline
              points="30,100 70,100 75,102 80,108 90,130 100,160 110,175 120,170 130,158 145,145 165,135 190,125 220,115 260,108 300,104 340,102 380,101"
              fill="none" stroke="#f97316" strokeWidth="2" />

            {/* Response lines */}
            {/* FFR - batteries 1s */}
            <polyline
              points="70,100 75,102 80,108 90,130 100,160 110,175 115,165 120,152 130,135 145,120 165,110 190,105 220,102 260,101 300,100 340,100 380,100"
              fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" />

            {/* Labels */}
            <text x="75" y="72" fill="#f97316" fontSize="8">Desligamento</text>
            <text x="75" y="84" fill="#f97316" fontSize="8">grande gerador</text>
            <line x1="80" y1="88" x2="85" y2="100" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrR)" />

            {/* Response legend */}
            <rect x="35" y="215" width="340" height="80" fill="rgba(249,115,22,0.06)" rx="6" />
            <text x="205" y="230" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">RESPOSTAS DE FREQUÊNCIA</text>

            <rect x="45" y="238" width="60" height="10" fill="#f97316" rx="2" opacity="0.8" />
            <text x="112" y="247" fill="#f97316" fontSize="8">FFR (baterias) — 1 seg</text>

            <rect x="45" y="256" width="60" height="10" fill="#f97316" rx="2" opacity="0.8" />
            <text x="112" y="265" fill="#f97316" fontSize="8">PFR (geradores síncronos) — 30 seg</text>

            <rect x="45" y="273" width="60" height="10" fill="#f59e0b" rx="2" opacity="0.8" />
            <text x="112" y="281" fill="#f59e0b" fontSize="8">SFR (resposta secundária) — 5 min</text>

            {/* === RIGHT: Duck Curve === */}
            <text x="580" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">DUCK CURVE — CALIFORNIA ISO</text>

            {/* Axes */}
            <line x1="420" y1="200" x2="760" y2="200" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="420" y1="40" x2="420" y2="200" stroke="var(--card-border)" strokeWidth="1" />
            <text x="416" y="45" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">30 GW</text>
            <text x="416" y="120" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">20 GW</text>
            <text x="416" y="200" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">10 GW</text>

            {/* Hour labels */}
            <text x="422" y="212" fill="rgba(249,115,22,0.6)" fontSize="7">0h</text>
            <text x="478" y="212" fill="rgba(249,115,22,0.6)" fontSize="7">6h</text>
            <text x="534" y="212" fill="rgba(249,115,22,0.6)" fontSize="7">12h</text>
            <text x="590" y="212" fill="rgba(249,115,22,0.6)" fontSize="7">18h</text>
            <text x="746" y="212" fill="rgba(249,115,22,0.6)" fontSize="7">24h</text>

            {/* Total load */}
            <polyline
              points="420,100 450,105 470,112 490,118 510,122 530,120 550,115 570,110 590,108 610,100 630,85 660,88 690,100 720,110 740,105 760,100"
              fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3,2" />

            {/* Net load (duck) */}
            <polyline
              points="420,100 450,105 470,112 490,118 510,130 530,150 550,160 570,155 590,165 610,100 630,55 660,58 690,80 720,108 740,105 760,100"
              fill="none" stroke="#f97316" strokeWidth="2.5" />

            {/* Fill */}
            <polygon
              points="420,200 450,200 470,200 490,200 510,200 530,200 550,200 570,200 590,200 610,200 630,200 660,200 690,200 720,200 740,200 760,200 760,100 740,105 720,108 690,80 660,58 630,55 610,100 590,165 570,155 550,160 530,150 510,130 490,118 470,112 450,105 420,100"
              fill="#f97316" opacity="0.07" />

            {/* Solar excess zone */}
            <polygon
              points="510,130 530,150 550,160 570,155 590,165 610,100 590,200 570,200 550,200 530,200 510,200"
              fill="#f59e0b" opacity="0.15" />
            <text x="555" y="188" textAnchor="middle" fill="#f59e0b" fontSize="7">Excesso solar</text>

            {/* Ramp annotation */}
            <text x="650" y="72" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">+13 GW</text>
            <text x="655" y="82" textAnchor="middle" fill="#f97316" fontSize="7">em 3 horas</text>
            <line x1="630" y1="88" x2="630" y2="55" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrR)" />

            {/* Legend */}
            <line x1="425" y1="225" x2="450" y2="225" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="455" y="229" fill="#fb923c" fontSize="8">Carga total</text>
            <line x1="535" y1="225" x2="560" y2="225" stroke="#f97316" strokeWidth="2" />
            <text x="565" y="229" fill="#f97316" fontSize="8">Carga líquida (net load)</text>

            <defs>
              <marker id="arrR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>ML para despacho em tempo real:</strong> optimização de portfólio misto (solar + eólica + bateria + hidro + gás) minimizando custo e emissões — problema de programação estocástica resolvido com RL. DeepMind reduziu consumo de arrefecimento dos datacenters Google em 40% usando RL — mesma abordagem aplicada a despacho de rede eléctrica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Armazenamento de Energia e Mercados</h2>
        <p style={S.p}>Armazenamento é o "enabler" da transição energética. Li-ion (química LFP — Lithium Iron Phosphate): dominante para utility-scale 2-4h — Tesla Megapack, CATL. O custo caiu 90% desde 2010 pela Wright's Law: cada duplicação de capacidade instalada produz redução de 18% no custo por kWh. Flow batteries (redox de vanádio): duração 4-12h, ciclo de vida superior (mais de 20.000 ciclos), adequado para armazenamento diário e semanal.</p>
        <p style={S.p}>Hidrogénio verde: electrólise com excesso de renováveis produz H₂ que pode ser armazenado sazonalmente e depois usado em fuel cells ou turbinas a gás. Preços negativos no mercado spot: ocorrem quando produção solar excede consumo sem armazenamento — a Alemanha registou 301 horas de preços negativos em 2023. Price forecasting com LSTM/Transformers para previsão de preços spot de electricidade permite arbitragem optimizada.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />

            {/* === LEFT: Technology comparison === */}
            <text x="220" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">COMPARAÇÃO DE TECNOLOGIAS DE STORAGE</text>

            {/* Radar chart axes */}
            {['Potência', 'Energia', 'Velocidade', 'Custo $/kWh', 'Duração'].map((label, i) => {
              const angle = (i * 72 - 90) * Math.PI / 180;
              const cx = 220, cy = 145, r = 85;
              const x2 = cx + r * Math.cos(angle);
              const y2 = cy + r * Math.sin(angle);
              const lx = cx + (r + 18) * Math.cos(angle);
              const ly = cy + (r + 18) * Math.sin(angle);
              return (
                <g key={label}>
                  <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="var(--card-border)" strokeWidth="1" />
                  <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill="rgba(249,115,22,0.6)" fontSize="8">{label}</text>
                </g>
              );
            })}

            {/* Li-ion polygon — solid orange */}
            {(() => {
              const cx = 220, cy = 145;
              const vals = [0.9, 0.5, 0.95, 0.3, 0.25];
              const pts = vals.map((v, i) => {
                const angle = (i * 72 - 90) * Math.PI / 180;
                return `${cx + v * 75 * Math.cos(angle)},${cy + v * 75 * Math.sin(angle)}`;
              }).join(' ');
              return <polygon points={pts} fill="#f97316" stroke="#f97316" strokeWidth="2" opacity="0.45" />;
            })()}

            {/* Flow battery polygon — amber */}
            {(() => {
              const cx = 220, cy = 145;
              const vals = [0.5, 0.8, 0.55, 0.6, 0.7];
              const pts = vals.map((v, i) => {
                const angle = (i * 72 - 90) * Math.PI / 180;
                return `${cx + v * 75 * Math.cos(angle)},${cy + v * 75 * Math.sin(angle)}`;
              }).join(' ');
              return <polygon points={pts} fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" opacity="0.40" />;
            })()}

            {/* Hydrogen polygon — burnt orange */}
            {(() => {
              const cx = 220, cy = 145;
              const vals = [0.2, 0.95, 0.2, 0.8, 0.95];
              const pts = vals.map((v, i) => {
                const angle = (i * 72 - 90) * Math.PI / 180;
                return `${cx + v * 75 * Math.cos(angle)},${cy + v * 75 * Math.sin(angle)}`;
              }).join(' ');
              return <polygon points={pts} fill="#ea580c" stroke="#ea580c" strokeWidth="2" opacity="0.35" />;
            })()}

            {/* Legend */}
            <rect x="35" y="235" width="12" height="8" fill="#f97316" opacity="0.7" />
            <text x="52" y="243" fill="#f97316" fontSize="8">Li-ion (LFP)</text>
            <rect x="130" y="235" width="12" height="8" fill="#f59e0b" opacity="0.7" />
            <text x="147" y="243" fill="#f59e0b" fontSize="8">Flow (Vanádio)</text>
            <rect x="235" y="235" width="12" height="8" fill="#ea580c" opacity="0.7" />
            <text x="252" y="243" fill="#ea580c" fontSize="8">Hidrogénio Verde</text>

            {/* === RIGHT: Cost curve + Price curve === */}
            <text x="580" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">CUSTO Li-ion ($/kWh) 2010-2024</text>

            {/* Cost axes */}
            <line x1="410" y1="140" x2="760" y2="140" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="410" y1="40" x2="410" y2="140" stroke="var(--card-border)" strokeWidth="1" />
            <text x="406" y="44" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">1200</text>
            <text x="406" y="90" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">600</text>
            <text x="406" y="140" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">130</text>
            <text x="412" y="152" fill="rgba(249,115,22,0.6)" fontSize="7">2010</text>
            <text x="580" y="152" fill="rgba(249,115,22,0.6)" fontSize="7">2017</text>
            <text x="740" y="152" fill="rgba(249,115,22,0.6)" fontSize="7">2024</text>

            {/* Cost curve (falling) */}
            <polyline
              points="410,44 440,52 470,64 500,78 530,95 560,108 590,118 620,125 650,129 680,132 710,134 740,135 760,136"
              fill="none" stroke="#f97316" strokeWidth="2" />

            {/* Wright's Law annotation */}
            <text x="490" y="36" textAnchor="middle" fill="#f59e0b" fontSize="8">Wright's Law:</text>
            <text x="490" y="48" textAnchor="middle" fill="#fbbf24" fontSize="7">-18% por duplicação</text>

            {/* === Spot price curve === */}
            <text x="580" y="175" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700">PREÇO SPOT — PREÇOS NEGATIVOS</text>

            {/* Price axes */}
            <line x1="410" y1="260" x2="760" y2="260" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="410" y1="175" x2="410" y2="265" stroke="var(--card-border)" strokeWidth="1" />
            <text x="406" y="185" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">100€</text>
            <text x="406" y="220" textAnchor="end" fill="rgba(249,115,22,0.6)" fontSize="7">0€</text>
            <text x="406" y="258" textAnchor="end" fill="#f97316" fontSize="7">-50€</text>
            <line x1="410" y1="220" x2="760" y2="220" stroke="var(--card-border)" strokeWidth="0.5" strokeDasharray="3,3" />

            {/* Price curve (with negatives at noon) */}
            <polyline
              points="410,210 430,205 450,200 470,198 490,200 510,215 530,245 550,255 570,250 590,215 610,200 630,195 650,198 670,200 700,205 720,210 740,208 760,205"
              fill="none" stroke="#f59e0b" strokeWidth="1.5" />

            {/* Negative price fill */}
            <polygon
              points="510,215 530,245 550,255 570,250 590,215 590,220 570,220 550,220 530,220 510,220"
              fill="#f97316" opacity="0.2" />
            <text x="550" y="270" textAnchor="middle" fill="#f97316" fontSize="7">Preços negativos (solar peak)</text>
          </svg>
        </div>

        <div style={S.note}>
          Arbitragem de energia: comprar quando preço é baixo (solar peak, eventualmente negativo), vender quando alto (noite, picos de manhã/tarde). ML optimiza ciclos de carga/descarga considerando degradação da bateria — cada ciclo profundo reduz a capacidade da bateria. Algoritmos de RL aprendem políticas de despacho óptimas considerando a incerteza de preços futuros.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Smart Grids e Optimização com RL</h2>
        <p style={S.p}>Smart grids integram sensores, comunicação bidirecional e inteligência computacional para optimizar a rede. AMI (Advanced Metering Infrastructure): smart meters com leitura a cada 15 minutos permitem demand response e detecção de perdas não técnicas (furto de electricidade — ML detecta padrões anómalos de consumo). Optimal Power Flow (OPF): problema de optimização não-convexo que minimiza custo de geração satisfazendo restrições físicas (limites de tensão, corrente, capacidade de transformadores).</p>
        <p style={S.p}>ML para OPF: aprender a solução aproximada com GNN (Graph Neural Networks) que capturam a topologia da rede — 100x mais rápido que solver numérico, adequado para operação em tempo real. RL para EV charging: agente aprende a carregar veículos eléctricos minimizando custo e stress na rede — considera preço spot, estado de bateria, hora de partida prevista. Demand Response: Entsoe estima potencial de 100 GW de DR na Europa — flexibilidade industrial como recurso de mercado.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            {/* Title */}
            <text x="390" y="22" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">ARQUITECTURA SMART GRID + AGENTE RL PARA EV</text>

            {/* === Top: Grid architecture === */}
            {/* Generation */}
            <rect x="15" y="38" width="100" height="60" fill="#c2410c" rx="7" />
            <text x="65" y="55" textAnchor="middle" fill="#ffff" fontSize="9" fontWeight="700">Geração</text>
            <text x="65" y="70" textAnchor="middle" fill="#ffff" fontSize="7">Solar · Eólica</text>
            <text x="65" y="80" textAnchor="middle" fill="#ffff" fontSize="7">Gás · Hídrica</text>
            <text x="65" y="90" textAnchor="middle" fill="#ffff" fontSize="7">Previsão ML</text>

            {/* Arrow */}
            <line x1="115" y1="68" x2="145" y2="68" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* Transmission */}
            <rect x="145" y="38" width="110" height="60" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="200" y="55" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Transmissão</text>
            <text x="200" y="70" textAnchor="middle" fill="#fb923c" fontSize="7">Alta tensão</text>
            <text x="200" y="80" textAnchor="middle" fill="#f97316" fontSize="7">OPF com GNN</text>
            <text x="200" y="90" textAnchor="middle" fill="#f97316" fontSize="7">100x speedup</text>

            {/* Arrow */}
            <line x1="255" y1="68" x2="285" y2="68" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* Substation */}
            <rect x="285" y="45" width="90" height="46" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="330" y="65" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Subestação</text>
            <text x="330" y="80" textAnchor="middle" fill="#f97316" fontSize="7">Transformadores</text>

            {/* Arrow */}
            <line x1="375" y1="68" x2="405" y2="68" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* Distribution */}
            <rect x="405" y="38" width="115" height="60" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="462" y="55" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Distribuição</text>
            <text x="462" y="70" textAnchor="middle" fill="#f97316" fontSize="7">Média tensão</text>
            <text x="462" y="80" textAnchor="middle" fill="#f97316" fontSize="7">Fault detection ML</text>
            <text x="462" y="90" textAnchor="middle" fill="#f97316" fontSize="7">PMU sensors</text>

            {/* Arrow */}
            <line x1="520" y1="68" x2="550" y2="68" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* Smart meters */}
            <rect x="550" y="38" width="120" height="60" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="610" y="55" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="700">Smart Meters (AMI)</text>
            <text x="610" y="70" textAnchor="middle" fill="#fb923c" fontSize="7">15 min · bidirecional</text>
            <text x="610" y="80" textAnchor="middle" fill="#f97316" fontSize="7">Demand response</text>
            <text x="610" y="90" textAnchor="middle" fill="#f97316" fontSize="7">NTL detection</text>

            {/* Arrow to EV */}
            <line x1="670" y1="68" x2="700" y2="68" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrG)" />

            {/* EV */}
            <rect x="700" y="38" width="70" height="60" fill="rgba(249,115,22,0.06)" rx="7" />
            <text x="735" y="62" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">EV Fleet</text>
            <text x="735" y="76" textAnchor="middle" fill="#f97316" fontSize="7">V2G capable</text>
            <text x="735" y="90" textAnchor="middle" fill="#f97316" fontSize="7">RL dispatch</text>

            {/* === Bottom: RL Agent === */}
            <text x="390" y="130" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">AGENTE RL — CARREGAMENTO INTELIGENTE DE EVs</text>

            {/* State box */}
            <rect x="20" y="145" width="200" height="110" fill="rgba(249,115,22,0.07)" stroke="#f97316" strokeWidth="1.5" rx="8" />
            <text x="120" y="165" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Estado (State)</text>
            <text x="30" y="182" fill="#f97316" fontSize="8">• Carga actual da rede (MW)</text>
            <text x="30" y="197" fill="#f97316" fontSize="8">• Nível bateria EV (0-100%)</text>
            <text x="30" y="212" fill="#f97316" fontSize="8">• Preço spot electricidade</text>
            <text x="30" y="227" fill="#f97316" fontSize="8">• Hora partida prevista</text>
            <text x="30" y="242" fill="#f97316" fontSize="8">• Previsão solar/eólica +6h</text>

            {/* Arrow to agent */}
            <line x1="220" y1="195" x2="260" y2="195" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrG)" />

            {/* Agent box */}
            <rect x="260" y="150" width="160" height="100" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" rx="8" />
            <text x="340" y="175" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">Agente RL</text>
            <text x="340" y="192" textAnchor="middle" fill="#fb923c" fontSize="9">Deep Q-Network /</text>
            <text x="340" y="207" textAnchor="middle" fill="#fb923c" fontSize="9">Proximal Policy Opt.</text>
            <text x="340" y="224" textAnchor="middle" fill="#fb923c" fontSize="8">Treino: 10M episódios</text>

            {/* Arrow to action */}
            <line x1="420" y1="195" x2="460" y2="195" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrG)" />

            {/* Action box */}
            <rect x="460" y="150" width="140" height="100" fill="rgba(249,115,22,0.07)" stroke="#f97316" strokeWidth="1.5" rx="8" />
            <text x="530" y="175" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Acção</text>
            <text x="470" y="192" fill="#f97316" fontSize="8">• Taxa de carregamento</text>
            <text x="470" y="207" fill="#f97316" fontSize="8">  (0-22 kW)</text>
            <text x="470" y="222" fill="#f97316" fontSize="8">• V2G: descarregar rede</text>
            <text x="470" y="237" fill="#f97316" fontSize="8">• Esperar (delay)</text>

            {/* Arrow to reward */}
            <line x1="600" y1="195" x2="640" y2="195" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrGG)" />

            {/* Reward box */}
            <rect x="640" y="150" width="130" height="100" fill="rgba(249,115,22,0.07)" stroke="#f97316" strokeWidth="1.5" rx="8" />
            <text x="705" y="175" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Recompensa</text>
            <text x="650" y="192" fill="#fb923c" fontSize="8">+ Custo baixo ✓</text>
            <text x="650" y="207" fill="#fb923c" fontSize="8">+ Bateria cheia ✓</text>
            <text x="650" y="222" fill="#f97316" fontSize="8">- Stress rede ✗</text>
            <text x="650" y="237" fill="#f97316" fontSize="8">- Peak penalty ✗</text>

            {/* Feedback arrow */}
            <path d="M 705 250 Q 705 275 340 275 Q 280 275 280 240" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrG)" />
            <text x="430" y="262" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="8">feedback loop — aprendizagem contínua</text>

            <defs>
              <marker id="arrG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
              <marker id="arrGG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <div style={S.highlight}>
          <strong>V2G (Vehicle-to-Grid):</strong> EVs com carregadores bidirecionais podem devolver energia à rede durante picos — uma frota de 10.000 EVs com 60 kWh representa 600 MWh de armazenamento distribuído. O agente RL gere quando cada veículo carrega, descarrega ou aguarda, considerando necessidade do utilizador (bateria cheia à hora de partida) e benefício para a rede.
        </div>
        <div style={S.note}>
          Integração com sistemas legados SCADA (Supervisory Control and Data Acquisition): o maior desafio prático é a interoperabilidade. Protocolos IEC 61968/61970 (Common Information Model) e IEC 61850 para subestações definem interfaces padrão — ML deve integrar com estes sistemas em tempo real, com latência abaixo de 100 ms para controlo primário de frequência.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Previsão Solar — Irradiância e Geração</strong> — irradiância solar (GHI) é prevista com LSTMs e modelos de séries temporais a partir de imagens de satélite e dados meteorológicos; erros de ±15% na previsão de 24h afectam o despacho da rede — day-ahead forecasting é crítico para integração solar.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Previsão Eólica — Onshore e Offshore</strong> — potência eólica escala com v³ — pequenos erros na velocidade do vento causam grandes erros de potência; LSTMs e transformers treinados em NWP (Numerical Weather Prediction) + SCADA data melhoram RMSE em 20–40% vs. persistência.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Integração de Renováveis na Rede</strong> — renováveis introduzem variabilidade e incerteza no despacho eléctrico; previsão probabilística (intervalos de confiança) e mercados de balanço intra-diários compensam desvios; curtailment ocorre quando produção excede a capacidade de absorção da rede.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Armazenamento de Energia e Mercados</strong> — baterias (BESS) e hídrica de bombagem arbitram preços horários e fornecem serviços de rede (frequência, inércia); modelos de optimização (MILP) e RL determinam estratégias de carga/descarga que maximizam receita nos mercados de energia.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Smart Grids e Optimização com RL</strong> — smart grids usam sensores IoT e comunicação bidirecional para optimizar fluxos de energia; RL controla flexibilidade de demand response, EVs e BESS — DeepMind reduziu em 40% o consumo de arrefecimento de datacenters do Google com RL.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
