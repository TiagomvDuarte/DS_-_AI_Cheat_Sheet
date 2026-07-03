import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './LogisticsOR';

const C = '#f97316';
const S = {
  page:{maxWidth:860,margin:'0 auto',padding:'0 1rem 4rem'},
  back:{display:'flex',alignItems:'center',gap:'0.5rem',color:'var(--text-secondary)',textDecoration:'none',fontSize:'0.9rem',marginBottom:'2rem'},
  badge:{display:'inline-block',background:C,color:'#fff',fontSize:'0.72rem',fontWeight:700,padding:'0.2rem 0.7rem',borderRadius:20,marginBottom:'0.75rem',letterSpacing:'0.06em',textTransform:'uppercase'},
  h1:{fontSize:'2rem',fontWeight:800,color:'var(--text-primary)',marginBottom:'0.4rem'},
  sub:{color:'var(--text-secondary)',fontSize:'1rem',lineHeight:1.6,marginBottom:'2.5rem'},
  section:{marginBottom:'2.5rem'},
  h2:{fontSize:'1.25rem',fontWeight:700,color:C,marginBottom:'1rem'},
  highlight:{background:`${C}15`,borderLeft:`3px solid ${C}`,padding:'0.85rem 1.1rem',borderRadius:'0 8px 8px 0',marginBottom:'1rem'},
  note:{background:'var(--bg-secondary)',border:'1px solid var(--card-border)',padding:'0.85rem 1.1rem',borderRadius:8,marginBottom:'1rem'},
  p:{color:'var(--text-secondary)',lineHeight:1.75,marginBottom:'0.85rem'},
  diagram:{background:'var(--bg-secondary)',borderRadius:12,padding:'1.5rem',marginBottom:'1rem',overflowX:'auto'},
  divider:{border:'none',borderTop:'1px solid var(--card-border)',margin:'2rem 0'},
};

export default function LOR7() {
  return (
    <div style={S.page}>
      <Link to="/logistics-or" style={S.back}>← AI in Logistics & OR</Link>
      <div style={S.badge}>{modules[6].num} — AI IN LOGISTICS & OR</div>
      <h1 style={S.h1}>Last-Mile e Urban Logistics</h1>
      <p style={S.sub}>O problema last-mile, drones e robots autónomos de entrega, plataformas gig e crowdsourcing, e micro-fulfillment centers — os desafios e soluções de logística urbana no contexto do boom do e-commerce.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Problema Last-Mile</h2>
        <p style={S.p}>O <strong>last-mile</strong> é o segmento final da cadeia de entrega — do armazém ou centro de distribuição até ao cliente final. Apesar de ser tipicamente o mais curto geograficamente, representa <strong>28-53% do custo total de entrega</strong> (McKinsey, 2022). As causas: alta densidade de paragens com volumes pequenos por entrega, janelas temporais estreitas exigidas por clientes, tráfego urbano imprevisível, e a <em>failed delivery rate</em> (5-25% dependendo do país) — quando o cliente está ausente, o motorista deve regressar ou re-agendar, duplicando o custo.</p>
        <p style={S.p}><strong>Fragmentação do e-commerce:</strong> crescimento de +25% YoY (acelerado por COVID-19 de 2020-2022) criou picos de volume que sobrecarregam redes de entrega dimensionadas para volumes menores. A Amazon criou o serviço Delivery Service Partner (DSP) — 3.000+ empresas de entrega independentes — para escalar sem contratar directamente. <strong>Carbon footprint:</strong> o transporte de mercadorias representa 25% das emissões de CO2 urbanas. Last-mile com veículos a diesel é o maior contribuidor. Transição para EVs (electric vans, cargo bikes elétricas) e consolidação de cargas são as principais alavancas de descarbonização.</p>
        <p style={S.p}><strong>Modelação OR:</strong> o last-mile é essencialmente um VRPTW com características especiais — densidade de paragens muito alta, preferências de janela temporal dos clientes, múltiplas tentativas de entrega, e objectivos multi-criterio (custo + emissões + service level). Amazon usou OR + ML para reduzir distância por entrega em 20% e failed deliveries em 15% com features de aprendizagem de padrões históricos de clientes.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Economics of last-mile:</strong> Custo médio de entrega last-mile: €3-10/entrega (Europa), $8-15 (EUA). Entrega expressa (&lt;2h): €15-25. Drone (&lt;5km): &lt;€1 (operational cost estimado, sem amortização). Locker/PUDO (Pick-Up Drop-Off): €0.5-1.5 — o mais económico, mas conveniência inferior. Subscriber/Amazon Prime subsidia entrega — modelo de fidelidade, não de rentabilidade por entrega.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 185" width="100%" style={{display:'block'}}>
            <text x="310" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Rede Last-Mile — Armazém → DC → Vans → Clientes (com tentativa falhada)</text>
            {/* Warehouse */}
            <rect x="30" y="75" width="50" height="40" rx="4" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <text x="55" y="97" fill="#fff" fontSize="9" fontWeight="700" textAnchor="middle">WH</text>
            {/* DC */}
            <rect x="170" y="78" width="44" height="34" rx="4" fill={`${C}20`} stroke={C} strokeWidth="1.5"/>
            <text x="192" y="99" fill="#e2e8f0" fontSize="9" textAnchor="middle">DC</text>
            {/* WH→DC arrow */}
            <defs><marker id="arrLM" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill={C}/></marker></defs>
            <line x1="80" y1="95" x2="168" y2="95" stroke={C} strokeWidth="1.5" markerEnd="url(#arrLM)"/>
            {/* Van routes — BEHIND circles */}
            {/* Van 1 — orange */}
            <path d="M214,90 L302,58 L352,83 L318,126 L214,96" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,2"/>
            {/* Van 2 — amber */}
            <path d="M214,94 L442,66 L484,107 L214,97" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,2"/>
            {/* Re-tentativa arrow */}
            <path d="M385,125 Q370,105 360,95" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2"/>
            {/* Customer circles ON TOP of routes */}
            {/* OK deliveries */}
            <circle cx="310" cy="55" r="12" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="310" y="59" fill="#f97316" fontSize="8" textAnchor="middle">C1</text>
            <circle cx="360" cy="85" r="12" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="360" y="89" fill="#f97316" fontSize="8" textAnchor="middle">C2</text>
            <circle cx="320" cy="130" r="12" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="320" y="134" fill="#f97316" fontSize="8" textAnchor="middle">C3</text>
            <circle cx="450" cy="65" r="12" fill="var(--bg-secondary)" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="450" y="69" fill="#f59e0b" fontSize="8" textAnchor="middle">C5</text>
            <circle cx="490" cy="110" r="12" fill="var(--bg-secondary)" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="490" y="114" fill="#f59e0b" fontSize="8" textAnchor="middle">C6</text>
            {/* Failed delivery — different color */}
            <circle cx="390" cy="132" r="12" fill="var(--bg-secondary)" stroke="#fbbf24" strokeWidth="2.5"/>
            <text x="390" y="134" fill="#fbbf24" fontSize="8" textAnchor="middle">C4</text>
            <text x="390" y="152" fill="#fbbf24" fontSize="7.5" textAnchor="middle">ausente!</text>
            <text x="400" y="113" fill="#fbbf24" fontSize="7">re-tentativa</text>
            {/* Legend */}
            <circle cx="50" cy="168" r="7" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="63" y="172" fill="#94a3b8" fontSize="8">entrega OK</text>
            <circle cx="160" cy="168" r="7" fill="var(--bg-secondary)" stroke="#fbbf24" strokeWidth="2"/>
            <text x="173" y="172" fill="#94a3b8" fontSize="8">falha (cliente ausente)</text>
            <text x="400" y="172" fill={C} fontSize="8">failed delivery rate: 5-25%</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Soluções de Delivery — Drones e Robots</h2>
        <p style={S.p}><strong>Drones de entrega:</strong> <em>Amazon Prime Air</em> — aprovação FAA para operações BVLOS (Beyond Visual Line of Sight) em 2022, entregas &lt;2.3kg em &lt;5km em &lt;30 minutos em College Station (Texas) e Lockeford (California). <em>Wing</em> (Google/Alphabet) — operações em Canberra (Austrália), Dallas (Texas), Christiansburg (Virginia). <em>Zipline</em> — drones de asa fixa para entrega de medicamentos em zonas rurais de Ruanda, Gana, EUA; 1M+ entregas completadas; acuidade em aterragem ~1m com sistema de parachute.</p>
        <p style={S.p}><strong>Restrições operacionais de drones:</strong> autonomia 15-30km (bateria), capacidade 2-3kg (multi-rotor) ou &gt;10kg (asa fixa), regulação EASA/FAA (no-fly zones em aeroportos, zonas habitadas densas, altitude máxima 120m), condições meteorológicas (vento &gt;12m/s → operações suspensas). <strong>Routing de drones:</strong> problema 3D com corredores de altitude, no-fly zones como obstáculos poligonais, wind-aware (energia consumida é função da velocidade do vento), optimização de charging stations como stops obrigatórios — modela-se como VRP multi-dimensional com restrições de capacidade energética.</p>
        <p style={S.p}><strong>Ground delivery robots:</strong> <em>Starship Technologies</em> — robots de 6 rodas, &lt;5mph, autonomia de 4 miles; operações em 25+ campus universitários (George Mason, Purdue, Arizona State); 50M+ entregas completadas em 2023. <em>Nuro</em> — veículo autónomo para entregas de mercearia (Kroger, Walmart) em Houston e Mountain View. <em>Amazon Scout</em> — piloto em Seattle, posteriormente descontinuado por falta de escala. Custo por entrega: &lt;€0.5 para robots de campus onde o problema de acesso (elevadores, portas) é controlado.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Drone vs van economics:</strong> Drone: custo marginal baixo (&lt;€1/entrega), mas só até 2.5kg e &lt;5km. Van: custo €3-8/entrega, sem restrições de peso e distância. Solução híbrida óptima: van faz drops em micro-hubs, drones fazem last-100m. Estudo Deloitte (2021): drones são rentáveis para &lt;2kg em zonas suburbanas com &gt;80 entregas/km². Cidades densas e apartamentos são obstáculos não resolvidos.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Crowdsourcing e Plataformas Gig</h2>
        <p style={S.p}><strong>Crowdsourced delivery</strong> usa entregadores independentes (Uber Eats, Deliveroo, Glovo, Instacart, DoorDash) — flexibilidade máxima de capacidade sem custo fixo de frota. <strong>Surge pricing</strong> (preço dinâmico) aumenta automaticamente a comissão por entrega quando a procura supera a oferta de motoristas disponíveis, equilibrando o mercado em tempo real. O modelo econométrico subjacente é de matching market com elasticidade estimada por ML.</p>
        <p style={S.p}><strong>Matching problem:</strong> atribuir ordens a entregadores disponíveis em tempo real. Modelação: bipartite matching com pesos (distância entregador → restaurante + distância restaurante → cliente + tempo estimado). Para múltiplas ordens em simultâneo: ILP de matching com janelas temporais. Estado da arte: batching (agrupar ordens próximas), stacking (entregador recebe segunda ordem enquanto faz primeira). Algoritmos de matching em tempo real: Hungarian algorithm para instâncias pequenas, auction-based algorithms para escala.</p>
        <p style={S.p}><strong>Pickup stations e lockers:</strong> Amazon Locker (50.000+ locais nos EUA), Packstation DHL (8.000+ na Alemanha), CTT Lockers (Portugal), Amazon Hub Counter (dentro de supermercados). Reduzem failed delivery rate para quase 0 — cliente recolhe quando quiser. <em>Ponto de recolha</em> (PUDO): utilizar lojas como pontos de entrega/recolha. Custo €0.5-1.5/entrega. Optimização: facility location problem para localizar locker stations minimizando distância média ao cliente e maximizando volume capturado.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Algorithmic management:</strong> entregadores gig são geridos por algoritmos — routing, matching, aceitação/rejeição de ordens. Issues de fairness: zonas menos lucrativas são sub-servidas; motoristas com alta rating recebem ordens melhores. Questões regulatórias: Portugal, Espanha e França classificaram alguns entregadores gig como trabalhadores por conta de outrem (Acórdão TJUE 2023 sobre Uber). Impacto em modelos de plataforma com obrigações sociais.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Micro-Fulfillment e Dark Stores</h2>
        <p style={S.p}><strong>Micro-Fulfillment Centers (MFC)</strong> são armazéns pequenos (&lt;1.000 m²) localizados dentro ou próximo de zonas urbanas — muitas vezes dentro de supermercados existentes, em armazéns urbanos ou em garagens subterrâneas. Permitem reduzir a distância de last-mile para 2-5km, encurtando tempos de entrega e custos de routing. <strong>Automated storage:</strong> Ocado (conveyor robótico em grelha hexagonal), AutoStore (robôs em grelha rectangular), Fabric (robôs em armazém vertical) — <em>picking rate</em> 10× superior a operação manual, menor footprint, sem corredores de acesso humano.</p>
        <p style={S.p}><strong>Dark stores</strong> são supermercados dedicados exclusivamente a e-commerce — sem área de loja para clientes. Optimizados para picking rápido (layout diferente de uma loja normal, produto ordenado por picking frequency). <strong>Quick commerce (q-commerce):</strong> entrega em 10-30 minutos. Gorillas, Getir (Turquia), Flink, Jiffy — expansão explosiva 2020-2022, seguida de consolidação/falências em 2022-2023 por unit economics negativos. Getir sobreviveu focando em mercados onde tem densidade suficiente.</p>
        <p style={S.p}><strong>Unit economics:</strong> MFC reduz distância last-mile (menos combustível, mais entregas por hora), aumenta density de pedidos (menos motoristas), melhora fill rate (produto mais próximo). Mas: custo de automação (€5-20M por MFC), custo imobiliário urbano elevado, exige volume mínimo de pedidos para break-even (tipicamente 1.000+ pedidos/dia por MFC). <strong>Modelação:</strong> localização de MFCs como <em>facility location problem</em> — p-median (minimizar distância média ponderada por volume), p-center (minimax), ou LSCP (location set covering) com demanda histórica por NUTS-3 e previsão ML por bairro.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 620 185" width="100%" style={{display:'block'}}>
            <text x="310" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Micro-Fulfillment Center — Armazenamento Automático, Picking e Despacho</text>
            {/* Storage grid */}
            <rect x="40" y="35" width="180" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="130" y="52" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">Armazenamento Auto</text>
            {[0,1,2,3].map(row=>[0,1,2,3,4].map(col=>(
              <rect key={`${row}-${col}`} x={50+col*30} y={60+row*22} width="22" height="16" rx="2" fill={`${C}20`} stroke={C} strokeWidth="0.8"/>
            )))}
            <text x="130" y="180" fill="#94a3b8" fontSize="8" textAnchor="middle">AutoStore / Ocado robots</text>
            {/* Picking stations */}
            <rect x="250" y="50" width="100" height="40" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="300" y="68" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">Picking</text>
            <text x="300" y="81" fill="#94a3b8" fontSize="8" textAnchor="middle">Stations</text>
            <rect x="250" y="110" width="100" height="40" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="300" y="128" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">Packing</text>
            <text x="300" y="141" fill="#94a3b8" fontSize="8" textAnchor="middle">& Labelling</text>
            {/* Dispatch */}
            <rect x="390" y="70" width="90" height="60" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="435" y="94" fill="#f97316" fontSize="9" textAnchor="middle" fontWeight="700">Despacho</text>
            <text x="435" y="107" fill="#94a3b8" fontSize="8" textAnchor="middle">Staging areas</text>
            <text x="435" y="119" fill="#94a3b8" fontSize="8" textAnchor="middle">Last-mile slots</text>
            {/* Delivery van */}
            <rect x="510" y="82" width="70" height="36" rx="4" fill={`${C}20`} stroke={C} strokeWidth="1.5"/>
            <text x="545" y="97" fill={C} fontSize="9" textAnchor="middle" fontWeight="700">Van /</text>
            <text x="545" y="109" fill={C} fontSize="9" textAnchor="middle">Drone</text>
            {/* Arrows with markers */}
            <defs><marker id="arrMFC" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#f97316"/></marker></defs>
            <line x1="220" y1="95" x2="247" y2="73" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrMFC)"/>
            <line x1="220" y1="95" x2="247" y2="117" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrMFC)"/>
            <line x1="350" y1="70" x2="387" y2="88" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrMFC)"/>
            <line x1="350" y1="130" x2="387" y2="112" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrMFC)"/>
            <line x1="480" y1="100" x2="507" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrMFC)"/>
            {/* Robot annotations — on top of grid */}
            <circle cx="91" cy="112" r="7" fill={C} opacity="0.85"/>
            <circle cx="122" cy="90" r="7" fill={C} opacity="0.85"/>
            <circle cx="150" cy="112" r="7" fill={C} opacity="0.85"/>
            <text x="130" y="170" fill={C} fontSize="7" textAnchor="middle">robôs (AutoStore)</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Problema Last-Mile</strong> — last-mile é o troço mais caro da cadeia (25–50% do custo logístico total) por ser menos denso e mais variável; janelas de tempo estreitas, falhas de entrega e congestionamento urbano tornam-no um VRPTW complexo com alta variabilidade de tempo de serviço.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Soluções de Delivery — Drones e Robots</strong> — drones (Wing, Amazon Prime Air) fazem entregas em &lt;30min em zonas suburbanas com regulação BVLOS; robots de passeio (Starship, Nuro) operam em zonas delimitadas a 6km/h; ambos reduzem custo por entrega em 60–80% mas requerem densidade mínima de pedidos para ser rentáveis.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Crowdsourcing e Plataformas Gig</strong> — crowdsourcing logistics (Glovo, Uber Eats, DoorDash) usa estafetas independentes a pedido — reduz custo fixo mas cria variabilidade de qualidade e disponibilidade; algoritmos de matching estafeta-pedido são VRPs em tempo real com restrições de fairness e tempo de espera.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Micro-Fulfillment e Dark Stores</strong> — micro-fulfillment centers (MFC) são armazéns automatizados de pequena dimensão (~1000m²) dentro ou perto de cidades, operados por robots; dark stores são supermercados fechados ao público dedicados a picking para delivery — permitem entrega em &lt;1h em zonas urbanas densas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
