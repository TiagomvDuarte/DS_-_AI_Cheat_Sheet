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

const m = modules[2];

export default function CLI3() {
  return (
    <div style={S.page}>
      <Link to="/climate-ai" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <span style={S.badge}>MÓDULO {m.num}</span>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. GHG Protocol e Scopes de Emissões</h2>
        <p style={S.p}>O GHG Protocol (World Resources Institute + WBCSD) é o padrão contabilístico global para emissões de GEE (Gases de Efeito de Estufa). Cobre 7 gases: CO2, CH4 (GWP100=28), N2O (GWP=265), HFCs, PFCs, SF6 e NF3 — todos convertidos para CO2 equivalente (CO2e) com base nos factores de aquecimento global a 100 anos.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 440" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="440" fill="var(--bg-secondary)" rx="10" />

            {/* Scope 3 outer ring */}
            <ellipse cx="390" cy="160" rx="340" ry="135" fill="rgba(249,115,22,0.09)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="390" y="20" fill="#f97316" fontSize="12" textAnchor="middle" fontWeight="700">SCOPE 3 — Cadeia de Valor (70-90% emissões totais)</text>

            {/* Scope 2 ring */}
            <ellipse cx="390" cy="160" rx="210" ry="90" fill="#f59e0b18" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="390" y="67" fill="#f59e0b" fontSize="11" textAnchor="middle" fontWeight="700">SCOPE 2 — Energia Comprada</text>

            {/* Scope 1 ring */}
            <ellipse cx="390" cy="160" rx="100" ry="52" fill="#fb923c22" stroke="#f97316" strokeWidth="2" />
            <text x="390" y="120" fill="#f97316" fontSize="11" textAnchor="middle" fontWeight="700">SCOPE 1</text>

            {/* Company centre */}
            <rect x="355" y="138" width="70" height="44" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="390" y="157" fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="700">EMPRESA</text>
            <text x="390" y="171" fill="#fb923c" fontSize="8" textAnchor="middle">HQ / Fábricas</text>

            {/* Scope 1 items */}
            <text x="330" y="153" fill="#fb923c" fontSize="9" textAnchor="middle">Caldeiras</text>
            <text x="330" y="165" fill="#fb923c" fontSize="9" textAnchor="middle">Frotas</text>
            <text x="450" y="153" fill="#fb923c" fontSize="9" textAnchor="middle">Processos</text>
            <text x="450" y="165" fill="#fb923c" fontSize="9" textAnchor="middle">Fugas</text>

            {/* Scope 2 items */}
            <text x="390" y="98" fill="#fbbf24" fontSize="9" textAnchor="middle">Electricidade comprada</text>
            <text x="250" y="155" fill="#fbbf24" fontSize="9" textAnchor="middle">Vapor / Calor</text>
            <text x="530" y="155" fill="#fbbf24" fontSize="9" textAnchor="middle">Arrefecimento</text>

            {/* Scope 3 upstream items */}
            <text x="100" y="100" fill="#fbbf24" fontSize="9" textAnchor="middle">Bens comprados</text>
            <text x="100" y="114" fill="#fbbf24" fontSize="9" textAnchor="middle">Capital goods</text>
            <text x="100" y="128" fill="#fbbf24" fontSize="9" textAnchor="middle">Business travel</text>
            <text x="100" y="142" fill="#fbbf24" fontSize="9" textAnchor="middle">Commuting</text>
            <text x="100" y="156" fill="#fbbf24" fontSize="9" textAnchor="middle">Resíduos</text>

            {/* Scope 3 downstream items */}
            <text x="680" y="100" fill="#fb923c" fontSize="9" textAnchor="middle">Uso do produto</text>
            <text x="680" y="114" fill="#fb923c" fontSize="9" textAnchor="middle">End-of-life</text>
            <text x="680" y="128" fill="#fb923c" fontSize="9" textAnchor="middle">Investimentos</text>
            <text x="680" y="142" fill="#fb923c" fontSize="9" textAnchor="middle">Franchises</text>
            <text x="680" y="156" fill="#fb923c" fontSize="9" textAnchor="middle">Transportes</text>

            {/* Legend upstream / downstream */}
            <text x="100" y="82" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="700">UPSTREAM</text>
            <text x="680" y="82" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">DOWNSTREAM</text>

            {/* Bar chart at bottom */}
            <text x="360" y="435" fill="#fb923c" fontSize="10" textAnchor="middle">Composição típica do footprint total</text>
            {/* Scope 1 bar */}
            <rect x="240" y="355" width="30" height="50" fill="#f97316" rx="3" />
            <text x="255" y="352" fill="#f97316" fontSize="9" textAnchor="middle">10%</text>
            <text x="255" y="420" fill="#fb923c" fontSize="9" textAnchor="middle">Scope 1</text>
            {/* Scope 2 bar */}
            <rect x="340" y="365" width="30" height="40" fill="#f59e0b" rx="3" />
            <text x="355" y="362" fill="#f59e0b" fontSize="9" textAnchor="middle">15%</text>
            <text x="355" y="420" fill="#fb923c" fontSize="9" textAnchor="middle">Scope 2</text>
            {/* Scope 3 bar */}
            <rect x="440" y="325" width="30" height="80" fill="#f97316" rx="3" />
            <text x="455" y="322" fill="#f97316" fontSize="9" textAnchor="middle">75%</text>
            <text x="455" y="420" fill="#fb923c" fontSize="9" textAnchor="middle">Scope 3</text>
          </svg>
        </div>

        <p style={S.p}>Scope 1 cobre emissões directas: queima de combustíveis em caldeiras e frotas próprias, processos industriais, fugas de refrigerantes. Scope 2 cobre emissões indirectas da energia comprada — método market-based usa factores de emissão específicos do fornecedor/certificados RECs; location-based usa factor médio da rede eléctrica. Scope 3 engloba 15 categorias a montante e a jusante, onde a Categoria 11 (use of sold products) é tipicamente a maior para fabricantes de automóveis, electrónica e combustíveis.</p>

        <div style={S.highlight}>
          <strong>7 GEE cobertos pelo GHG Protocol:</strong> CO2, CH4 (GWP=28), N2O (GWP=265), HFCs, PFCs, SF6, NF3. Todos convertidos para CO2 equivalente multiplicando pelo GWP a 100 anos (AR6 IPCC). Scope 3 representa tipicamente 70-90% das emissões totais em empresas de serviços e tecnologia.
        </div>

        <div style={S.note}>
          Scope 3 é o mais difícil de medir: depende de dados de fornecedores Tier 1, 2 e 3 — 75% dos fornecedores Tier 2/3 não reportam emissões. ML é usado para imputação de dados em falta através de modelos de sector e actividade económica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Carbon Markets e Pricing</h2>
        <p style={S.p}>Mercados de carbono criam incentivo económico para reduções de emissões. Existem dois tipos principais: mercados de conformidade (compliance), obrigatórios por lei, e mercados voluntários (VCM), onde empresas compram créditos por vontade própria ou para cumprir compromissos públicos de neutralidade carbónica.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 300" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="300" fill="var(--bg-secondary)" rx="10" />

            {/* Left panel — compliance */}
            <rect x="20" y="20" width="340" height="260" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="1" />
            <text x="190" y="44" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="700">MERCADOS DE CONFORMIDADE</text>

            {/* EU ETS price chart */}
            <text x="190" y="64" fill="#fb923c" fontSize="10" textAnchor="middle">EU ETS — Preço EUA (€/tCO2)</text>
            {/* axes */}
            <line x1="55" y1="160" x2="340" y2="160" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="55" y1="70" x2="55" y2="160" stroke="var(--card-border)" strokeWidth="1" />
            {/* y labels */}
            <text x="50" y="74" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">100</text>
            <text x="50" y="105" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">60</text>
            <text x="50" y="140" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">20</text>
            <text x="50" y="160" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">0</text>
            {/* x labels */}
            <text x="75" y="172" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">2021</text>
            <text x="145" y="172" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">2022</text>
            <text x="220" y="172" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">2023</text>
            <text x="300" y="172" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">2024</text>
            {/* price line: 2021=25€, 2022=80€, 2023=100€, 2024=60€ */}
            {/* scale: 0=160, 100=70 → pixel per unit = 0.9 */}
            <polyline points="75,137 145,88 220,70 300,106" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="75" cy="137" r="3" fill="#f59e0b" />
            <circle cx="145" cy="88" r="3" fill="#f59e0b" />
            <circle cx="220" cy="70" r="3" fill="#f59e0b" />
            <circle cx="300" cy="106" r="3" fill="#f59e0b" />
            <text x="212" y="86" fill="#fbbf24" fontSize="8">€100</text>

            <text x="190" y="190" fill="#fb923c" fontSize="9" textAnchor="middle">Outros mercados compliance</text>
            <rect x="55" y="198" width="130" height="24" rx="4" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
            <text x="120" y="214" fill="#f97316" fontSize="9" textAnchor="middle">California Cap-and-Trade</text>
            <rect x="195" y="198" width="120" height="24" rx="4" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
            <text x="255" y="214" fill="#f97316" fontSize="9" textAnchor="middle">UK ETS</text>

            <text x="190" y="255" fill="#fb923c" fontSize="9" textAnchor="middle">Carbon Tax mais alta: Suécia €130/tCO2</text>

            {/* Right panel — voluntary */}
            <rect x="420" y="20" width="340" height="260" rx="8" fill="rgba(249,115,22,0.06)" stroke="#fbbf24" strokeWidth="1" />
            <text x="590" y="44" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="700">MERCADOS VOLUNTÁRIOS (VCM)</text>

            {/* Credit types with price spectrum */}
            <text x="590" y="65" fill="#fb923c" fontSize="10" textAnchor="middle">Espectro de preços ($/tCO2)</text>

            {/* price axis */}
            <line x1="440" y1="80" x2="740" y2="80" stroke="var(--card-border)" strokeWidth="1" />

            {/* DAC bar */}
            <rect x="445" y="90" width="280" height="28" rx="4" fill="#f97316" />
            <text x="450" y="109" fill="#fff" fontSize="9">DAC — Direct Air Capture</text>
            <text x="720" y="109" fill="rgba(249,115,22,0.12)" fontSize="9" textAnchor="end">$300–1000</text>

            {/* Renewable energy bar */}
            <rect x="445" y="126" width="100" height="28" rx="4" fill="#f97316" />
            <text x="450" y="145" fill="#fff" fontSize="9">Energia Renovável</text>
            <text x="540" y="145" fill="#fb923c" fontSize="9" textAnchor="end">$1–5</text>

            {/* Blue carbon bar */}
            <rect x="445" y="162" width="160" height="28" rx="4" fill="rgba(249,115,22,0.08)" />
            <text x="450" y="181" fill="#fff" fontSize="9">Blue Carbon (mangais)</text>
            <text x="600" y="181" fill="#fb923c" fontSize="9" textAnchor="end">$10–50</text>

            {/* REDD+ bar */}
            <rect x="445" y="198" width="80" height="28" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="450" y="217" fill="#fff" fontSize="9">REDD+ Floresta</text>
            <text x="555" y="217" fill="#fbbf24" fontSize="9" textAnchor="end">$5–15</text>

            {/* Certifiers */}
            <text x="590" y="248" fill="#fb923c" fontSize="9" textAnchor="middle">Certificadores: Gold Standard · VCS/Verra · ACR · CAR</text>
            <text x="590" y="263" fill="#fb923c" fontSize="9" textAnchor="middle">⚠ 94% créditos REDD+ Verra sem reduções reais (Calel 2023)</text>
          </svg>
        </div>

        <p style={S.p}>O EU ETS (Emissions Trading System) é o maior mercado de carbono de conformidade do mundo, cobrindo cerca de 45% das emissões da UE — electricidade, indústria pesada e aviação. O sistema cap-and-trade fixa um tecto total de emissões que desce anualmente; empresas compram e vendem licenças (EUAs). O preço subiu de €5 (2018) para €100 (2023), tornando o gás natural mais caro que o hidrogénio verde em alguns cenários de produção.</p>

        <p style={S.p}>Os mercados voluntários enfrentam sérios problemas de integridade. Um estudo de 2023 (Calel et al.) demonstrou que 94% dos créditos REDD+ emitidos pelo Verra não representavam reduções reais de desflorestação. ML e sensoriamento remoto (Sentinel-2 + CNN) para detecção de desflorestação estão a transformar a verificação destes créditos — a plataforma Global Forest Watch usa este método para monitorização contínua.</p>

        <div style={S.highlight}>
          <strong>Carbon tax vs cap-and-trade:</strong> A carbon tax (ex. Suécia €130/tCO2) fixa o preço mas não garante a quantidade de reduções. O cap-and-trade garante o tecto de emissões mas o preço flutua com o mercado. A combinação de ambos (hybrid mechanism) está a emergir como abordagem preferida dos economistas climáticos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. ESG Analytics e Taxonomia Europeia</h2>
        <p style={S.p}>A Taxonomia da UE (Regulamento 2020/852) estabelece critérios técnicos de selecção para actividades económicas sustentáveis — a base regulatória para evitar greenwashing no mercado financeiro europeu. Para ser considerada taxonomy-aligned, uma actividade tem de contribuir substancialmente para pelo menos um dos 6 objectivos ambientais, não causar dano significativo a nenhum dos restantes (DNSH) e respeitar garantias sociais mínimas.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 310" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="310" fill="var(--bg-secondary)" rx="10" />
            <defs>
              <marker id="taxArr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f59e0b" />
              </marker>
            </defs>

            <text x="390" y="22" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="700">TAXONOMIA DA UE — Processo de Classificação</text>

            {/* 6 Objectivos Ambientais (hexágonos) */}
            <text x="220" y="44" fill="#fb923c" fontSize="9" textAnchor="middle" fontWeight="600">6 Objectivos Ambientais</text>
            {[
              { x: 70,  y: 90,  label: 'Mitigação',  label2: 'Climática',  fill: '#ea580c' },
              { x: 160, y: 90,  label: 'Adaptação',  label2: 'Climática',  fill: 'rgba(249,115,22,0.10)' },
              { x: 250, y: 90,  label: 'Água',        label2: 'Sustentável',fill: 'rgba(249,115,22,0.08)' },
              { x: 70,  y: 165, label: 'Economia',   label2: 'Circular',   fill: '#f97316' },
              { x: 160, y: 165, label: 'Prevenção',  label2: 'Poluição',   fill: '#ea580c' },
              { x: 250, y: 165, label: 'Biodiver-',  label2: 'sidade',     fill: 'rgba(249,115,22,0.08)' },
            ].map((h, i) => {
              const solid = h.fill === '#ea580c' || h.fill === '#f97316';
              const tc = solid ? '#fff' : '#fbbf24';
              return (
                <g key={i}>
                  <polygon
                    points={`${h.x},${h.y-28} ${h.x+24},${h.y-14} ${h.x+24},${h.y+14} ${h.x},${h.y+28} ${h.x-24},${h.y+14} ${h.x-24},${h.y-14}`}
                    fill={h.fill} stroke="#f59e0b" strokeWidth="1.2"
                  />
                  <text x={h.x} y={h.y - 4} fill={tc} fontSize="8" textAnchor="middle" fontWeight="700">{h.label}</text>
                  <text x={h.x} y={h.y + 9} fill={tc} fontSize="8" textAnchor="middle">{h.label2}</text>
                </g>
              );
            })}

            {/* Classificação flow (right side) */}
            <text x="560" y="44" fill="#fb923c" fontSize="9" textAnchor="middle" fontWeight="600">Processo de Classificação</text>

            {/* Step 1: Actividade */}
            <rect x="340" y="55" width="110" height="38" rx="6" fill="rgba(249,115,22,0.08)" stroke="#fb923c" strokeWidth="1.5" />
            <text x="395" y="71" fill="#fbbf24" fontSize="9" textAnchor="middle" fontWeight="700">Actividade</text>
            <text x="395" y="84" fill="#fbbf24" fontSize="8" textAnchor="middle">Económica</text>

            <line x1="450" y1="74" x2="472" y2="74" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#taxArr)" />

            {/* Step 2: Contribuição Substancial */}
            <rect x="472" y="55" width="120" height="38" rx="6" fill="#ea580c" stroke="#f97316" strokeWidth="1.5" />
            <text x="532" y="71" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="700">Contribuição</text>
            <text x="532" y="84" fill="#fff" fontSize="8" textAnchor="middle">Substancial ≥1 obj</text>

            <line x1="592" y1="74" x2="614" y2="74" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#taxArr)" />

            {/* Step 3: DNSH */}
            <rect x="614" y="55" width="120" height="38" rx="6" fill="rgba(249,115,22,0.08)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="674" y="71" fill="#fbbf24" fontSize="9" textAnchor="middle" fontWeight="700">DNSH</text>
            <text x="674" y="84" fill="#fbbf24" fontSize="8" textAnchor="middle">Não prejudica os 5</text>

            <line x1="674" y1="93" x2="674" y2="112" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#taxArr)" />

            {/* Step 4: Garantias Sociais */}
            <rect x="614" y="112" width="120" height="38" rx="6" fill="rgba(249,115,22,0.08)" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="674" y="128" fill="#fbbf24" fontSize="9" textAnchor="middle" fontWeight="700">Garantias</text>
            <text x="674" y="141" fill="#fbbf24" fontSize="8" textAnchor="middle">Sociais Mínimas</text>

            <line x1="674" y1="150" x2="674" y2="168" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#taxArr)" />

            {/* Result: Taxonomy Aligned */}
            <rect x="614" y="168" width="120" height="38" rx="6" fill="#f59e0b" />
            <text x="674" y="184" fill="#131314" fontSize="10" textAnchor="middle" fontWeight="800">TAXONOMY</text>
            <text x="674" y="197" fill="#131314" fontSize="9" textAnchor="middle" fontWeight="700">ALIGNED ✓</text>

            {/* SFDR section */}
            <line x1="40" y1="220" x2="740" y2="220" stroke="var(--card-border)" strokeWidth="1" />
            <text x="390" y="240" fill="#f59e0b" fontSize="11" textAnchor="middle" fontWeight="700">SFDR — Classificação de Fundos de Investimento</text>

            <rect x="40"  y="252" width="210" height="44" rx="6" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.4)" strokeWidth="1" />
            <text x="145" y="270" fill="#fb923c" fontSize="9" textAnchor="middle" fontWeight="700">Article 6</text>
            <text x="145" y="285" fill="rgba(249,115,22,0.7)" fontSize="8" textAnchor="middle">Sem considerações ESG</text>

            <rect x="270" y="252" width="210" height="44" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
            <text x="375" y="270" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">Article 8 — Light Green</text>
            <text x="375" y="285" fill="#fb923c" fontSize="8" textAnchor="middle">Promove características E/S</text>

            <rect x="500" y="252" width="210" height="44" rx="6" fill="#c2410c" stroke="#f97316" strokeWidth="1.5" />
            <text x="605" y="270" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="700">Article 9 — Dark Green</text>
            <text x="605" y="285" fill="#fff" fontSize="8" textAnchor="middle">Objectivo sustentável específico</text>
          </svg>
        </div>

        <p style={S.p}>A CSRD (Corporate Sustainability Reporting Directive, 2024) obriga mais de 50.000 empresas europeias a reportar de acordo com os ESRS (European Sustainability Reporting Standards), cobrindo impactos, riscos e oportunidades materiais em todas as dimensões ESG. O SFDR classifica fundos de investimento: Article 9 ("dark green") exige que o investimento tenha um objectivo de sustentabilidade específico e mensurável.</p>

        <p style={S.p}>A divergência entre ratings ESG é um problema estrutural: a correlação entre Sustainalytics e MSCI ESG é apenas 0.53, comparada com 0.99 para ratings de crédito. Estudos académicos (Berg et al., 2022) decompõem esta divergência em scope (que métricas incluir), measurement (como medir) e weights (quanto pesar cada factor) — três dimensões onde as metodologias diferem radicalmente entre agências.</p>

        <div style={S.note}>
          Critérios técnicos da Taxonomia: energia solar fotovoltaica é sempre classificada como "verde"; cimento precisa de intensidade carbónica abaixo de 0.722 tCO2/tonne; gás natural tem critérios transitórios até 2030 com limites de emissões por kWh.
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. ML para Medição e Verificação de Carbono</h2>
        <p style={S.p}>MRV (Measurement, Reporting, Verification) é o processo de quantificar emissões com confiança suficiente para suportar mercados regulados e políticas climáticas. A precisão do MRV é o que distingue um mercado de carbono funcional de um gerador de greenwashing. ML está a transformar cada etapa deste processo.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="700">Pipeline MRV com ML</text>

            {/* Input sources */}
            <rect x="20" y="35" width="150" height="210" rx="8" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="95" y="54" fill="#fb923c" fontSize="10" textAnchor="middle" fontWeight="700">FONTES DE DADOS</text>
            <rect x="30" y="60" width="130" height="30" rx="4" fill="rgba(249,115,22,0.06)" />
            <text x="95" y="73" fill="#f97316" fontSize="8.5" textAnchor="middle">Sentinel-2 NDVI</text>
            <text x="95" y="83" fill="#f97316" fontSize="7.5" textAnchor="middle">biomassa florestal</text>
            <rect x="30" y="96" width="130" height="30" rx="4" fill="rgba(249,115,22,0.06)" />
            <text x="95" y="109" fill="#f97316" fontSize="8.5" textAnchor="middle">TROPOMI CH4</text>
            <text x="95" y="119" fill="#f97316" fontSize="7.5" textAnchor="middle">colunas atmosféricas</text>
            <rect x="30" y="132" width="130" height="30" rx="4" fill="#ea580c" />
            <text x="95" y="145" fill="#ffff" fontSize="8.5" textAnchor="middle">IoT Sensores</text>
            <text x="95" y="155" fill="#ffff" fontSize="7.5" textAnchor="middle">energia / processos</text>
            <rect x="30" y="168" width="130" height="30" rx="4" fill="#f97316" />
            <text x="95" y="181" fill="#ffff" fontSize="8.5" textAnchor="middle">Dados de Actividade</text>
            <text x="95" y="191" fill="#ffff" fontSize="7.5" textAnchor="middle">facturas / logística</text>
            <rect x="30" y="204" width="130" height="30" rx="4" fill="#ea580c" />
            <text x="95" y="217" fill="#ffff" fontSize="8.5" textAnchor="middle">Dados de Fornecedores</text>
            <text x="95" y="227" fill="#ffff" fontSize="7.5" textAnchor="middle">Tier 1/2/3 imputados</text>

            {/* Arrow */}
            <line x1="170" y1="140" x2="210" y2="140" stroke="#f59e0b" strokeWidth="2" />
            <polygon points="210,135 220,140 210,145" fill="#f59e0b" />

            {/* ML Models */}
            <rect x="220" y="35" width="170" height="210" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="305" y="54" fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="700">MODELOS ML</text>
            <rect x="230" y="62" width="150" height="26" rx="4" fill="#f59e0b18" stroke="#f59e0b30" />
            <text x="305" y="79" fill="#fbbf24" fontSize="9" textAnchor="middle">CNN Desflorestação</text>
            <rect x="230" y="94" width="150" height="26" rx="4" fill="#f59e0b18" stroke="#f59e0b30" />
            <text x="305" y="111" fill="#fbbf24" fontSize="9" textAnchor="middle">Inversão CH4 GHGSat</text>
            <rect x="230" y="126" width="150" height="26" rx="4" fill="#f59e0b18" stroke="#f59e0b30" />
            <text x="305" y="143" fill="#fbbf24" fontSize="9" textAnchor="middle">Imputação Scope 3</text>
            <rect x="230" y="158" width="150" height="26" rx="4" fill="#f59e0b18" stroke="#f59e0b30" />
            <text x="305" y="175" fill="#fbbf24" fontSize="9" textAnchor="middle">LCA Automatizado</text>
            <rect x="230" y="190" width="150" height="26" rx="4" fill="#f59e0b18" stroke="#f59e0b30" />
            <text x="305" y="207" fill="#fbbf24" fontSize="9" textAnchor="middle">Grafo Supply Chain</text>

            {/* Arrow */}
            <line x1="390" y1="140" x2="430" y2="140" stroke="#f59e0b" strokeWidth="2" />
            <polygon points="430,135 440,140 430,145" fill="#f59e0b" />

            {/* Outputs */}
            <rect x="440" y="35" width="160" height="210" rx="8" fill="rgba(249,115,22,0.06)" stroke="#fbbf24" strokeWidth="1" />
            <text x="520" y="54" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="700">ESTIMATIVAS</text>
            <rect x="450" y="62" width="140" height="50" rx="4" fill="#c2410c" />
            <text x="520" y="79" fill="#ffff" fontSize="9" textAnchor="middle">Bottom-up Activity</text>
            <text x="520" y="91" fill="#ffff" fontSize="8" textAnchor="middle">Incerteza: ±30%</text>
            <text x="520" y="104" fill="#ffff" fontSize="7.5" textAnchor="middle">actividade × factor emissão</text>
            <rect x="450" y="120" width="140" height="50" rx="4" fill="rgba(249,115,22,0.08)" />
            <text x="520" y="137" fill="#fb923c" fontSize="9" textAnchor="middle">ML Satellite Top-down</text>
            <text x="520" y="149" fill="#fb923c" fontSize="8" textAnchor="middle">Incerteza: ±10%</text>
            <text x="520" y="162" fill="#fb923c" fontSize="7.5" textAnchor="middle">inversão atmosférica</text>
            <rect x="450" y="178" width="140" height="26" rx="4" fill="rgba(249,115,22,0.06)" />
            <text x="520" y="195" fill="#f97316" fontSize="9" textAnchor="middle">Relatório CSRD automático</text>

            {/* Arrow to report */}
            <line x1="600" y1="140" x2="635" y2="140" stroke="#fbbf24" strokeWidth="2" />
            <polygon points="635,135 645,140 635,145" fill="#fbbf24" />

            {/* Final report */}
            <rect x="645" y="90" width="115" height="100" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="702" y="112" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">RELATÓRIO</text>
            <text x="702" y="126" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">VERIFICADO</text>
            <text x="702" y="148" fill="#fb923c" fontSize="9" textAnchor="middle">CSRD / ESRS</text>
            <text x="702" y="162" fill="#fb923c" fontSize="9" textAnchor="middle">Scope 1+2+3</text>
            <text x="702" y="176" fill="#fb923c" fontSize="9" textAnchor="middle">± incerteza</text>
          </svg>
        </div>

        <p style={S.p}>A abordagem bottom-up (actividade x factor de emissão) é simples mas depende de dados de actividade precisos — kWh consumidos, litros de combustível, toneladas de produto. A abordagem top-down inverte concentrações atmosféricas de CO2 e CH4 para inferir fontes de emissões. O GHGSat detecta super-emissores individuais de metano a partir do espaço com resolução suficiente para identificar instalações específicas.</p>

        <p style={S.p}>Para cadeias de fornecimento (Scope 3), ML constrói grafos de fornecedores com emissões por actividade económica e imputa dados em falta para os 75% de fornecedores Tier 2/3 que não reportam. LCA (Life Cycle Assessment) automatizado usa ML para preencher bases de dados de ciclo de vida (ecoinvent) com emissões de produtos novos sem histórico.</p>

        <div style={S.highlight}>
          <strong>Global Forest Watch (GFW):</strong> plataforma que usa Sentinel-2 + algoritmos de detecção de mudança (Hansen Global Forest Change) para monitorizar desflorestação em tempo próximo do real. Base da verificação de créditos REDD+ — reduz incerteza de ±30% (abordagem de campo) para ±10% (satélite + ML).
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Net-Zero, Offsetting e Science-Based Targets</h2>
        <p style={S.p}>O SBTi (Science Based Targets initiative) valida alvos corporativos de redução de emissões alinhados com trajectórias climáticas de 1.5°C ou 2°C. Para um net-zero SBTi, as empresas têm de reduzir 90-95% das emissões Scope 1+2+3 até 2050 em relação ao ano base; apenas 5-10% residuais podem ser compensadas com remoções permanentes de carbono.</p>

        <div style={S.diagram}>
          <svg viewBox="0 0 780 280" style={{ width: '100%', display: 'block' }}>
            <rect width="780" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="390" y="22" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="700">Trajectória Net-Zero Corporativo 2020-2050</text>

            {/* Chart axes */}
            <line x1="60" y1="220" x2="700" y2="220" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="60" y1="40" x2="60" y2="220" stroke="var(--card-border)" strokeWidth="1" />

            {/* Y-axis labels */}
            <text x="55" y="44" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">100%</text>
            <text x="55" y="90" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">75%</text>
            <text x="55" y="135" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">50%</text>
            <text x="55" y="178" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">25%</text>
            <text x="55" y="220" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="end">0%</text>

            {/* X-axis years */}
            {[2020, 2025, 2030, 2035, 2040, 2045, 2050].map((yr, i) => (
              <text key={yr} x={60 + i * 107} y="232" fill="rgba(249,115,22,0.6)" fontSize="8" textAnchor="middle">{yr}</text>
            ))}

            {/* Gross emissions bars (orange, decreasing) */}
            {/* 2020=100%, 2025=90%, 2030=70%, 2035=55%, 2040=35%, 2045=15%, 2050=5% */}
            {[
              { x: 65, w: 30, pct: 100, h: 180 },
              { x: 170, w: 30, pct: 90, h: 162 },
              { x: 275, w: 30, pct: 70, h: 126 },
              { x: 380, w: 30, pct: 55, h: 99 },
              { x: 487, w: 30, pct: 35, h: 63 },
              { x: 594, w: 30, pct: 15, h: 27 },
              { x: 661, w: 30, pct: 5, h: 9 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={220 - b.h} width={b.w} height={b.h} fill="#f59e0b" rx="2" opacity="0.85" />
                <text x={b.x + 15} y={220 - b.h - 4} fill="#fbbf24" fontSize="7.5" textAnchor="middle">{b.pct}%</text>
              </g>
            ))}

            {/* Removals bars (green, increasing) */}
            {/* 2020=0, 2025=2%, 2030=5%, 2035=10%, 2040=20%, 2045=30%, 2050=5% residual */}
            {[
              { x: 97, pct: 0, h: 0 },
              { x: 202, pct: 2, h: 3.6 },
              { x: 307, pct: 5, h: 9 },
              { x: 412, pct: 10, h: 18 },
              { x: 519, pct: 20, h: 36 },
              { x: 626, pct: 30, h: 54 },
              { x: 693, pct: 5, h: 9 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={220 - b.h} width={28} height={b.h} fill="#f97316" rx="2" opacity="0.85" />
                {b.pct > 0 && <text x={b.x + 14} y={220 - b.h - 4} fill="#fb923c" fontSize="7.5" textAnchor="middle">{b.pct}%</text>}
              </g>
            ))}

            {/* Legend */}
            <rect x="80" y="248" width="14" height="10" fill="#f59e0b" rx="2" />
            <text x="98" y="257" fill="#fb923c" fontSize="9">Emissões brutas (Scope 1+2+3)</text>
            <rect x="300" y="248" width="14" height="10" fill="#f97316" rx="2" />
            <text x="318" y="257" fill="#fb923c" fontSize="9">Remoções permanentes (DAC / BECCS)</text>
            <text x="570" y="257" fill="#fb923c" fontSize="9">Net-Zero: emissões ≈ remoções</text>

            {/* Annotations */}
            <line x1="620" y1="150" x2="670" y2="150" stroke="#fb923c" strokeWidth="1" strokeDasharray="3 2" />
            <text x="672" y="153" fill="#fb923c" fontSize="8">SBTi: -90%</text>
            <line x1="60" y1="204" x2="700" y2="204" stroke="#fb923c" strokeWidth="0.8" strokeDasharray="4 2" />
          </svg>
        </div>

        <p style={S.p}>A distinção crítica entre carbon neutral e net-zero: carbon neutral permite offset ilimitado de emissões Scope 3 com créditos voluntários (potencialmente de baixa qualidade), enquanto net-zero SBTi exige eliminação real de 90-95% das emissões, com apenas as emissões residuais impossíveis de eliminar a ser compensadas por remoções de carbono permanentes.</p>

        <p style={S.p}>DAC (Direct Air Capture): a Climeworks Mammoth na Islândia tem capacidade de 36.000 tCO2/ano a um custo de $1000/tCO2 — o custo precisa cair para $100-300 para viabilidade em escala, o que requer saltos tecnológicos nos materiais sorventes e integração com energia geotérmica. BECCS (Bioenergy with Carbon Capture and Storage) é controverso pela competição com uso da terra para alimentação.</p>

        <div style={S.highlight}>
          <strong>Funil de validação SBTi:</strong> empresas submetem alvos → triagem de elegibilidade → revisão técnica por especialistas → aprovação e publicação. Mais de 7.000 empresas com alvos aprovados ou em validação. O Net-Zero Standard (2021) introduziu requisitos muito mais exigentes que a geração anterior de alvos 2°C.
        </div>

        <div style={S.note}>
          Corporate carbon neutrality declarada por muitas empresas antes de 2023 baseia-se quase exclusivamente em offsets voluntários de qualidade questionável. A pressão regulatória (CSRD, SEC climate disclosures) está a forçar transição para net-zero com reduções reais verificáveis.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>GHG Protocol e Scopes de Emissões</strong> — Scope 1 são emissões directas da empresa; Scope 2 são emissões da electricidade comprada; Scope 3 abrange toda a cadeia de valor — a maioria das emissões corporativas é Scope 3 mas é a mais difícil de medir e verificar.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Carbon Markets e Pricing</strong> — mercados de carbono (EU ETS, California Cap-and-Trade) fixam um preço por tonelada de CO₂ via licenças de emissão; carbon credits voluntários (Gold Standard, Verra VCS) são adquiridos para compensar emissões residuais — ML detecta projectos fraudulentos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ESG Analytics e Taxonomia Europeia</strong> — a Taxonomia Climática da UE define quais actividades económicas são sustentáveis (substantial contribution + DNSH); NLP analisa relatórios ESG para alinhar divulgações com a taxonomia e com os SFDR (Sustainable Finance Disclosure Regulation).</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ML para Medição e Verificação de Carbono</strong> — MRV (Measurement, Reporting, Verification) de projectos de carbono usa satélites e ML para medir biomassa florestal, estimar sequestro e detectar desflorestação — evita o pagamento de créditos por projectos que não cumprem as remoções prometidas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Net-Zero, Offsetting e Science-Based Targets</strong> — Net-Zero implica reduzir emissões para near-zero e compensar o residual com remoções permanentes; SBTi define trajectórias de redução alinhadas com 1.5°C; offsetting com créditos de baixa qualidade é greenwashing — a diferença é verificabilidade.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
