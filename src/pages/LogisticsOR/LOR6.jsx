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

export default function LOR6() {
  return (
    <div style={S.page}>
      <Link to="/logistics-or" style={S.back}>← AI in Logistics & OR</Link>
      <div style={S.badge}>{modules[5].num} — AI IN LOGISTICS & OR</div>
      <h1 style={S.h1}>ML e RL para Logística</h1>
      <p style={S.sub}>Previsão de demanda com ML, Reinforcement Learning para routing e scheduling, Learning to Optimize (L2O) e casos reais — como IA está a transformar operações logísticas à escala global.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Previsão de Demanda com ML</h2>
        <p style={S.p}><strong>Features</strong> para previsão de demanda: histórico de vendas (lags, médias móveis, tendência), sazonalidade (dia da semana, mês, ano), eventos especiais (feriados, Black Friday, promoções), dados externos (meteorologia — vendas de guarda-chuvas sobem com chuva; indicadores económicos). Modelos clássicos: <strong>ARIMA</strong> (AutoRegressive Integrated Moving Average) — decomposição de tendência e sazonalidade; <strong>ETS</strong> (Exponential Smoothing) — Holt-Winters com sazonalidade multiplicativa ou aditiva. Continuam competitivos em séries univariadas com poucos dados.</p>
        <p style={S.p}><strong>ML para previsão:</strong> XGBoost e LightGBM com features de data são frequentemente superiores a ARIMA para séries com padrões complexos. <strong>LSTM</strong> (Long Short-Term Memory) captura dependências de longo prazo em séries multivariadas. <strong>N-BEATS</strong> (Oreshkin et al., 2020) — rede puramente neuronal sem induction bias de séries temporais, supera modelos clássicos em M4. <strong>Temporal Fusion Transformer (TFT)</strong> (Lim et al., 2021): attention multi-head para séries temporais com features estáticas, conhecidas futuras (feriados) e desconhecidas. Interpretável via atenção temporal. Melhoria de 15-30% em MAE vs métodos clássicos em benchmarks M5 (Walmart) e Tourism.</p>
        <p style={S.p}><strong>Hierarchical forecasting:</strong> reconciliar previsões em múltiplos níveis da hierarquia produto/geográfica. Bottom-up (agregar previsões de base), top-down (desagregar previsão total), MinT (Minimum Trace, Wickramasuriya et al., 2019 — solução óptima por mínimos quadrados). Importante: previsões de base em nível SKU são mais ruidosas mas mais granulares; agregações em nível categoria são mais suaves. Reconciliação garante coerência.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>M5 Competition (Kaggle, 2020):</strong> 42.840 séries temporais de vendas da Walmart USA (hierarquia produto × loja × estado). Vencedor: LightGBM ensemble com features de lag e calendário. Lição: tree-based models superam DL para séries cross-sectional com features tabulares ricas. DL (TFT, N-BEATS) é melhor para séries longas com padrões temporais complexos e poucos regressores.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. RL para Routing e Scheduling</h2>
        <p style={S.p}>Formular o VRP como <strong>MDP</strong>: estado = posição actual do veículo + conjunto de clientes restantes + inventário; acção = próximo cliente a visitar; recompensa = − distância percorrida (ou tempo). O episódio termina quando todos os clientes são visitados. <strong>Pointer Networks</strong> (Vinyals et al., 2015, Google Brain): architecture de seq2seq com attention que permite selecionar tokens da sequência de input (pontear para o cliente actual). Treinado com actor-critic em instâncias de TSP geradas aleatoriamente. Primeiro trabalho a usar DL para CO end-to-end.</p>
        <p style={S.p}><strong>Attention Model (AM)</strong> (Kool, van Hoof & Welling, ICLR 2019): encoder transformer sobre todos os clientes (positional + graph attention), decoder com attention sobre nós restantes. Treino por <strong>REINFORCE</strong> com rollout baseline (greedy tour como baseline reduz variância). Avaliação: gap de 2-5% em relação a LKH-3 em instâncias VRP-50/100 — superior a heurísticas clássicas, inferior a solvers state-of-the-art. Treino uma vez em instâncias aleatórias; generaliza para tamanhos similares.</p>
        <p style={S.p}><strong>L2I (Learning to Improve):</strong> usar RL para guiar local search — o modelo aprende qual operador aplicar em cada estado (2-opt, or-opt, relocate). Chen & Tian (2019) treinam policy para VRP por REINFORCE — melhoria progressiva de solução inicial. <strong>RL para job-shop:</strong> DQN e PPO com representação por grafo disjuntivo como estado; acção = resolver um par de operações em conflito numa máquina. Kool et al. (2021) atingem resultados competitivos em JSP benchmark.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 640 210" width="100%" style={{display:'block'}}>
            <text x="320" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Attention Model para VRP — Encoder Grafo + Decoder Sequencial</text>
            {/* Encoder */}
            <rect x="40" y="40" width="120" height="110" rx="8" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="100" y="60" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">Encoder</text>
            <text x="100" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle">(Graph Attention)</text>
            <line x1="70" y1="95" x2="100" y2="85" stroke={C} strokeWidth="1"/>
            <line x1="100" y1="85" x2="130" y2="100" stroke={C} strokeWidth="1"/>
            <line x1="80" y1="120" x2="115" y2="125" stroke={C} strokeWidth="1"/>
            <line x1="70" y1="95" x2="80" y2="120" stroke={C} strokeWidth="1"/>
            <line x1="100" y1="85" x2="80" y2="120" stroke={C} strokeWidth="1" opacity="0.5"/>
            <line x1="130" y1="100" x2="115" y2="125" stroke={C} strokeWidth="1" opacity="0.5"/>
            <circle cx="70" cy="95" r="8" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.5"/>
            <circle cx="100" cy="85" r="8" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.5"/>
            <circle cx="130" cy="100" r="8" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.5"/>
            <circle cx="80" cy="120" r="8" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.5"/>
            <circle cx="115" cy="125" r="8" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.5"/>
            <text x="100" y="142" fill="#94a3b8" fontSize="8" textAnchor="middle">clientes → embeddings</text>
            {/* Arrow with head */}
            <defs><marker id="arrLOR6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#94a3b8"/></marker></defs>
            <line x1="162" y1="95" x2="215" y2="95" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrLOR6)"/>
            {/* Decoder */}
            <rect x="220" y="40" width="130" height="110" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="285" y="60" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">Decoder</text>
            <text x="285" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle">(Sequential Attention)</text>
            <text x="285" y="93" fill="#e2e8f0" fontSize="9" textAnchor="middle">context = depot +</text>
            <text x="285" y="105" fill="#e2e8f0" fontSize="9" textAnchor="middle">último visitado</text>
            <text x="285" y="120" fill="#f97316" fontSize="9" textAnchor="middle">→ softmax sobre</text>
            <text x="285" y="132" fill="#f97316" fontSize="9" textAnchor="middle">não-visitados</text>
            {/* Arrow */}
            <line x1="352" y1="95" x2="393" y2="95" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrLOR6)"/>
            {/* Tour */}
            <rect x="398" y="40" width="120" height="110" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="458" y="60" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">Tour</text>
            <text x="458" y="78" fill="#e2e8f0" fontSize="9" textAnchor="middle">D→3→1→5→2→4→D</text>
            <text x="458" y="95" fill="#94a3b8" fontSize="8" textAnchor="middle">reward = −distância</text>
            {/* Feedback */}
            <path d="M518,152 Q518,190 285,190 Q100,190 100,155" fill="none" stroke="rgba(249,115,22,0.6)" strokeWidth="1.8" strokeDasharray="5,3"/>
            <polygon points="100,152 106,162 94,162" fill="rgba(249,115,22,0.8)"/>
            <text x="310" y="203" fill="#94a3b8" fontSize="8" textAnchor="middle">REINFORCE: actualizar encoder+decoder por gradient ascent</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Learning to Optimize (L2O)</h2>
        <p style={S.p}><strong>Learning to Optimize</strong> é um paradigma que aprende a resolver famílias de problemas combinatórios similares — em vez de resolver cada instância do zero, aprende a explorar o espaço de soluções de forma eficiente. <strong>Meta-learning para OR:</strong> aprender um iniciador de soluções para problemas com estrutura comum (ex: VRP de logística urbana com padrões de demanda recorrentes). <strong>Hyper-heuristics aprendidas:</strong> RL seleciona qual heurística (2-opt, ALNS, relocate) aplicar em cada estado da solução — elimina a necessidade de tuning manual do método de busca.</p>
        <p style={S.p}><strong>Neural combinatorial optimization</strong> (Bello et al., Google Brain, 2016): policy gradient (REINFORCE) para TSP com Pointer Network. Primeiro trabalho a demonstrar que DL pode competir com heurísticas de engenharia manual. <strong>GNN para branching em B&B</strong> (Gasse et al., NeurIPS 2019): imitar o comportamento de strong branching treinando uma GNN sobre o grafo bipartito variáveis-restrições do LP — melhoria de 2-3× no número de nós da árvore B&B.</p>
        <p style={S.p}><strong>Predict-then-Optimize:</strong> pipeline padrão — treinar modelo ML para prever parâmetros do problema (custos, demandas), depois resolver problema de optimização. Limitação: o modelo ML é treinado com loss preditiva (MSE) que não alinha com qualidade da solução downstream. <strong>SPO+</strong> (Smart Predict-and-Optimize, Elmachtoub & Grigas, 2022): substituir MSE por surrogate loss que penaliza previsões que levam a soluções sub-óptimas — melhoria em qualidade de solução final mesmo com pior qualidade preditiva.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Limites actuais de L2O:</strong> Generalização para instâncias muito maiores que as de treino é difícil. Gaps de 5-20% em relação a solvers clássicos em instâncias grandes. Melhor em tempo: 100-1000× mais rápido que OR exacto para instâncias médias. Caso de uso ideal: soluções em tempo real com restrições de latência (milliseconds), onde B&C não é viável mas uma boa heurística é suficiente.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Casos Reais de IA em Logística</h2>
        <p style={S.p}><strong>UPS ORION</strong> (On-Road Integrated Optimization and Navigation): o maior projecto de OR em implementação contínua. 10B+ optimizações de rota por ano, 55.000 motoristas, poupa $400M/ano em combustível e tempo. Combina VRPTW solver com dados de tráfego em tempo real, restrições de janelas temporais de clientes, e sequências de entrega aprendidas por comportamento histórico de condutores (ML sobre sequências efectivas).</p>
        <p style={S.p}><strong>Amazon:</strong> 750M+ packages/year. ML para previsão de demanda por SKU × localização, replenishment automático, anticipatory shipping (enviar produto antes de encomenda). Robôs Kiva (Amazon Robotics) nos armazéns — 750.000 robôs em 2023, picking rate 3-4× superior. Routing de drones Prime Air para entregas &lt;5km em &lt;60 minutos.</p>
        <p style={S.p}><strong>DHL:</strong> AI forecasting + route optimization, Digital Twin dos armazéns para simulação de layouts e fluxos. <strong>Maersk:</strong> ML para prever atrasos de navios (ETA prediction com dados AIS, meteorologia, porto), IA para stowage planning — optimização de carregamento de contentores em navios respeitando restrições de estabilidade e acesso. <strong>Uber Eats:</strong> re-routing em tempo real com horizon de 15-30min, ML para ETA prediction, batching de ordens para eficiência, surge pricing com ML para equilibrar supply/demand de motoristas.</p>
        <p style={S.p}><strong>Desafios em produção:</strong> <em>Incerteza</em> — tráfego, demanda e disponibilidade de motoristas são stochásticos. <em>Escala</em> — 10.000+ veículos em simultâneo numa cidade requer decomposição e paralelismo. <em>Real-time</em> — decisões em &lt;100ms para matching online. <em>Fairness</em> — algoritmos de routing devem ser justos para motoristas (distâncias equilibradas, regiões equitativas). <em>Explicabilidade</em> — operadores precisam de perceber e confiar nas recomendações dos algoritmos.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 640 185" width="100%" style={{display:'block'}}>
            <text x="320" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Stack de IA em Logística — Camadas de Dados, ML, Otimização e Operações</text>
            {/* Data layer */}
            <rect x="40" y="30" width="560" height="30" rx="6" fill="rgba(249,115,22,0.06)" stroke="#475569" strokeWidth="1.2"/>
            <text x="320" y="50" fill="#94a3b8" fontSize="10" textAnchor="middle" fontWeight="700">Camada de Dados: IoT sensors · GPS · ERP · Weather API · Traffic API · Historical orders</text>
            {/* ML layer */}
            <rect x="40" y="72" width="560" height="30" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="320" y="92" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">ML/AI: Demand forecast (TFT) · ETA prediction (XGBoost) · Risk scoring · Routing RL policy</text>
            {/* OR layer */}
            <rect x="40" y="114" width="560" height="30" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="320" y="134" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">Otimização: VRPTW solver · Inventory optimizer · Scheduling (CP-SAT) · Network flow</text>
            {/* Operations layer */}
            <rect x="40" y="156" width="560" height="22" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="320" y="170" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">Operações: Routing apps · WMS · TMS · Robotics WCS · Driver apps · Customer notifications</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Previsão de Demanda com ML</strong> — demand forecasting em logística usa LightGBM e Prophet para séries temporais hierárquicas (SKU × loja × semana); LGBM com features lag, rolling mean, calendário e preço supera ARIMA; N-HiTS e TFT são o estado da arte em competições M5 e M4 — essencial para inventário e capacidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>RL para Routing e Scheduling</strong> — RL formula VRP como MDP: estado = posição e carga actual, acção = próximo cliente, recompensa = distância negativa; Attention Model (Kool et al., 2019) usa transformers para gerar soluções de qualidade heurística em milissegundos — viabiliza re-routing em tempo real.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Learning to Optimize (L2O)</strong> — L2O treina modelos ML para substituir ou guiar solvers de optimização; Neural Combinatorial Optimization (Pointer Networks) aprende heurísticas para TSP; imitation learning de Gurobi generaliza para instâncias novas sem solver em produção — trade-off entre qualidade de solução e velocidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Casos Reais de IA em Logística</strong> — DHL usa ML para previsão de procura e routing dinâmico; Amazon Robotics optimiza picking paths com RL; Maersk usa ML para previsão de atrasos de navio; UPS ORION (On-Road Integrated Optimization and Navigation) poupou $400M/ano optimizando rotas de 55K motoristas.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
