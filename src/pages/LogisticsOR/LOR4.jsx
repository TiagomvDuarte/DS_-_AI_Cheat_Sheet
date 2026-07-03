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

export default function LOR4() {
  return (
    <div style={S.page}>
      <Link to="/logistics-or" style={S.back}>← AI in Logistics & OR</Link>
      <div style={S.badge}>{modules[3].num} — AI IN LOGISTICS & OR</div>
      <h1 style={S.h1}>Gestão de Inventário e Supply Chain</h1>
      <p style={S.sub}>EOQ, modelos estocásticos, safety stock, bullwhip effect e S&OP — os fundamentos quantitativos da gestão de inventário e as tecnologias digitais que transformam as supply chains modernas.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Modelos de Inventário Determinísticos</h2>
        <p style={S.p}>O <strong>Economic Order Quantity (EOQ)</strong> (Harris, 1913) minimiza o custo total de inventário: custo de encomenda K por ordem + custo de manutenção h por unidade por unidade de tempo. Com demand rate D (unidades/tempo), a quantidade óptima é <strong>Q* = √(2KD/h)</strong> e o custo total mínimo é <strong>TC* = √(2KDh)</strong>. O ciclo de reposição óptimo é T* = Q*/D. O EOQ balança dois efeitos opostos: encomendas maiores reduzem o custo por encomenda mas aumentam o inventário médio (e custo de manutenção).</p>
        <p style={S.p}><strong>Extensões do EOQ:</strong> <em>EOQ com backorders</em> — permitir stockouts com custo de backorder b/unidade/tempo; Q* maior, stock de segurança negativo. <em>Descontos de quantidade</em> — custo unitário decresce em escalões; avaliar custo total em cada ponto de break. <em>Economic Production Quantity (EPQ)</em> — produção a taxa P &gt; D; inventário acumula à taxa P−D durante a produção. <em>News-vendor problem</em> (modelo de período único): Q óptima satisfaz F(Q*) = c_u/(c_u + c_o), onde c_u = custo de underage (stockout) e c_o = custo de overage (sobra). Usada em moda, alimentos frescos, eventos.</p>
        <p style={S.p}><strong>Regra de ouro do EOQ:</strong> aumentar D por factor 4 → Q* aumenta factor 2 (raiz quadrada). Aumentar K por factor 4 → Q* duplica. O custo total é muito robusto ao desvio de Q* — custo é flat em torno do mínimo (propriedade da raiz quadrada).</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Exemplo EOQ:</strong> D = 1000 unidades/ano, K = €50/ordem, h = €2/unidade/ano. Q* = √(2×50×1000/2) = √50.000 ≈ 224 unidades. T* = 224/1000 ≈ 0.224 anos ≈ 82 dias. TC* = √(2×50×1000×2) = €447/ano. Encomendar 4-5 vezes por ano é óptimo.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 580 190" width="100%" style={{display:'block'}}>
            <text x="290" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Gráfico EOQ — Custo Total = Custo de Encomenda + Custo de Manutenção</text>
            {/* Axes */}
            <line x1="60" y1="165" x2="520" y2="165" stroke="#475569" strokeWidth="1.5"/>
            <line x1="60" y1="25" x2="60" y2="165" stroke="#475569" strokeWidth="1.5"/>
            <text x="525" y="168" fill="#94a3b8" fontSize="10">Q</text>
            <text x="45" y="22" fill="#94a3b8" fontSize="10">€</text>
            {/* Ordering cost KD/Q — amber */}
            <path d="M70,25 Q120,60 200,100 Q300,130 520,155" fill="none" stroke="#f59e0b" strokeWidth="2.5"/>
            <text x="530" y="152" fill="#f59e0b" fontSize="9" fontWeight="600">KD/Q</text>
            {/* Holding cost hQ/2 — yellow */}
            <path d="M60,165 Q200,140 520,50" fill="none" stroke="#fbbf24" strokeWidth="2.5"/>
            <text x="530" y="47" fill="#fbbf24" fontSize="9" fontWeight="600">hQ/2</text>
            {/* Total cost TC — main orange */}
            <path d="M70,30 Q130,65 200,80 Q270,85 320,88 Q380,95 450,115 Q490,130 520,145" fill="none" stroke="#f97316" strokeWidth="3"/>
            <text x="450" y="110" fill="#f97316" fontSize="10" fontWeight="700">TC total</text>
            {/* Optimal Q* */}
            <line x1="270" y1="88" x2="270" y2="165" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,3"/>
            <text x="270" y="178" fill="#94a3b8" fontSize="9" textAnchor="middle">Q*</text>
            <circle cx="270" cy="88" r="5" fill="#f97316"/>
            <text x="285" y="83" fill="#f97316" fontSize="9">min TC</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Modelos Estocásticos e Safety Stock</h2>
        <p style={S.p}>Com <strong>demand incerta</strong> durante o lead time L, modelada como Normal(μ_L, σ_L²), existe risco de stockout. O <strong>safety stock</strong> SS = z_α × σ_L protege contra variabilidade, onde z_α é o z-score para o nível de serviço α (z_0.95 = 1.645, z_0.99 = 2.326). O <strong>reorder point</strong> (ponto de reposição) ROP = μ_L + SS — quando o inventário cai para ROP, emite-se uma nova encomenda de tamanho Q. O <em>fill rate</em> (fracção de demanda satisfeita imediatamente) é diferente do <em>cycle service level</em> (probabilidade de não ter stockout por ciclo).</p>
        <p style={S.p}><strong>Políticas de revisão:</strong> <em>Continuous review (s, S)</em>: monitorizar inventário continuamente, encomendar até S quando atinge s (reorder point). Óptima mas requer tracking contínuo. <em>Periodic review (R, S)</em>: encomendar periodicamente (cada R períodos) até S; mais simples, adequada quando encomendas são feitas conjuntamente para múltiplos SKUs. <em>(s, Q)</em>: encomendar quantidade fixa Q quando atinge s. O trade-off: mais safety stock → menor stockout mas mais custo de manutenção; service level é o parâmetro que balança.</p>
        <p style={S.p}><strong>Simulation-based optimization</strong> para políticas complexas: quando a demand distribution não é Normal, lead times são variáveis, ou há múltiplos níveis — simulação Monte Carlo para avaliar políticas + optimização (gradient-free methods, Bayesian optimization) para encontrar parâmetros óptimos (s, S, R).</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Safety stock e fornecedores:</strong> SS é proporcional a σ_L e a √L (se demand é i.i.d.). Reduzir L a metade reduz SS em √2 ≈ 41%. Daí a obsessão da indústria em reduzir lead times — just-in-time da Toyota (lead time days → hours) permitiu eliminar quase todo o safety stock. Contraste com COVID-19: supply chains JIT falharam catastroficamente — trade-off eficiência vs resiliência.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Bullwhip Effect e S&OP</h2>
        <p style={S.p}>O <strong>bullwhip effect</strong> (Lee, Padmanabhan & Whang, 1997) descreve a amplificação de variabilidade de demanda à medida que se sobe na supply chain: uma pequena variação na demanda do consumidor final gera grandes oscilações nas encomendas ao grossista, ao fabricante, e ao fornecedor de matéria-prima. A amplitude das oscilações cresce como um chicote — daí o nome. O rácio de amplificação típico é 2-10× entre retalho e fabricante.</p>
        <p style={S.p}><strong>Causas:</strong> (1) <em>Demand signal processing</em> — cada actor usa a sua demanda observada para prever a demanda futura e encomendar com margem de segurança; (2) <em>Order batching</em> — encomendar em lotes periódicos cria picos de encomenda; (3) <em>Price fluctuations</em> — promoções geram forward buying; (4) <em>Rationing game</em> — em escassez, compradores exageram encomendas para receber pelo menos o necessário. <strong>Mitigação:</strong> <em>VMI</em> (Vendor Managed Inventory) — o fornecedor gere o inventário do cliente, eliminando a necessidade de signal processing; <em>CPFR</em> (Collaborative Planning, Forecasting and Replenishment) — partilha de dados de ponto de venda em tempo real; lead times mais curtos; eliminação de promoções por lote.</p>
        <p style={S.p}><strong>S&OP</strong> (Sales & Operations Planning): processo mensal de alinhamento entre vendas (previsão de demanda), operações (capacidade produtiva e inventário) e finanças (budget e margens). Ciclo: actualizar previsão → plano de produção → plano de inventário → plano financeiro → aprovação executiva. <strong>IBP</strong> (Integrated Business Planning) generaliza S&OP para incluir estratégia de longo prazo, projecto de NPD e gestão de fornecedores.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 640 190" width="100%" style={{display:'block'}}>
            <text x="320" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Bullwhip Effect — Amplificação de Variabilidade Upstream</text>
            {/* Consumer demand - small variation */}
            <text x="100" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">Consumidor</text>
            <path d="M40,70 Q55,65 70,70 Q85,75 100,70 Q115,65 130,70 Q145,75 160,70" fill="none" stroke="#f97316" strokeWidth="2"/>
            <text x="100" y="85" fill="#f97316" fontSize="8" textAnchor="middle">σ=1</text>
            {/* Retailer - slightly larger */}
            <text x="260" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">Retalhista</text>
            <path d="M200,75 Q215,60 230,75 Q245,90 260,75 Q275,60 290,75 Q305,90 320,75" fill="none" stroke="#f97316" strokeWidth="2"/>
            <text x="260" y="100" fill="#f97316" fontSize="8" textAnchor="middle">σ=2.5</text>
            {/* Manufacturer - large oscillation */}
            <text x="430" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">Fabricante</text>
            <path d="M370,90 Q385,50 400,90 Q415,130 430,90 Q445,50 460,90 Q475,130 490,90" fill="none" stroke={C} strokeWidth="2.5"/>
            <text x="430" y="130" fill={C} fontSize="8" textAnchor="middle">σ=8</text>
            {/* Arrows */}
            <text x="185" y="85" fill="#94a3b8" fontSize="14" textAnchor="middle">→</text>
            <text x="350" y="85" fill="#94a3b8" fontSize="14" textAnchor="middle">→</text>
            {/* Amplification annotations */}
            <text x="100" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle">demanda real</text>
            <text x="260" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">encomenda retalhista</text>
            <text x="430" y="145" fill="#94a3b8" fontSize="9" textAnchor="middle">produção fabricante</text>
            <text x="320" y="178" fill={C} fontSize="9" textAnchor="middle">Amplificação ×8 — mesma demanda final, oscilações 8× maiores no fabricante</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Digital Supply Chains e IA</h2>
        <p style={S.p}><strong>Digital Twins de Supply Chain:</strong> réplica digital em tempo real de toda a rede logística — inventários, posição de veículos, status de fornecedores, condições climáticas. Permite simular cenários de disrupção (fecho de fábrica, greve portuária) e optimizar decisões preventivas. Empresas como Siemens, DHL e BMW operam digital twins de supply chain com dados de IoT, ERP e sistemas de transporte.</p>
        <p style={S.p}><strong>Previsão de demanda com ML:</strong> modelos clássicos (ARIMA, ETS) são substituídos por ML: XGBoost/LightGBM com features de calendário (dia da semana, feriados, mês), Prophet (Facebook — decompõe trend + sazonalidade + holidays), LSTM para séries temporais multivariadas, N-BEATS (neural basis expansion), e <strong>Temporal Fusion Transformer</strong> (TFT, Lim et al. 2021) — interpretável, multi-horizon, melhoria de 15-30% em MAE vs métodos clássicos. <em>Hierarchical forecasting</em>: reconciliar previsões em diferentes níveis hierárquicos (total → país → região → loja → produto) por métodos como MinT (Wickramasuriya et al.).</p>
        <p style={S.p}><strong>Amazon:</strong> 400M+ SKUs, previsão por ML por SKU-localização, replenishment automático (sistema Hands-off-the-Wheel), anticipatory shipping (enviar produto para hub antes de encomenda confirmada com base em previsão de compra). <strong>Multi-echelon optimization:</strong> optimização simultânea de inventário em múltiplos níveis (DC → armazém regional → loja) considerando custos e service levels end-to-end — OR combinado com ML para previsão de demanda e lead times.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Disruption risk management:</strong> COVID-19 expôs a fragilidade de supply chains hiperobtimizadas (JIT, single-sourcing). Resposta: diversificação geográfica de fornecedores, reshoring de componentes críticos, aumento de inventário estratégico. ML para prever risco de fornecedores: sinais de crédito, geopolítica, ESG scores, dados de notícias — Resilinc, Interos.ai. Trade-off eficiência-resiliência quantificado por análise de portfólio de supply chain.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Modelos de Inventário Determinísticos</strong> — EOQ (Economic Order Quantity) minimiza o custo total (encomenda + armazenamento): Q* = √(2DS/H); EPQ (Economic Production Quantity) considera taxa de produção finita; ambos assumem procura constante — base para extensões estocásticas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos Estocásticos e Safety Stock</strong> — com procura variável, safety stock = z·σ_d·√L protege contra stockouts com nível de serviço z; modelos (s,S) e (R,Q) optimizam o ponto de reorder e quantidade; simulação Monte Carlo estima distribuições de inventory level para políticas complexas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Bullwhip Effect e S&OP</strong> — o Bullwhip Effect amplifica variabilidade de procura ao longo da cadeia — share de informação de procura real (POS data) e S&OP (Sales & Operations Planning) semanal reduzem o efeito; CPFR (Collaborative Planning, Forecasting and Replenishment) com parceiros é o estado da arte.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Digital Supply Chains e IA</strong> — supply chains digitais usam IoT para visibilidade em tempo real de inventário e localização; ML prediz disruptions (meteo, supplier risk, geopolítica); digital twins de supply chain simulam cenários de stress; Amazon utiliza mais de 20 modelos ML em diferentes etapas da sua cadeia.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
