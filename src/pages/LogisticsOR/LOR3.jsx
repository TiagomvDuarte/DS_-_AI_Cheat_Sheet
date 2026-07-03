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

export default function LOR3() {
  return (
    <div style={S.page}>
      <Link to="/logistics-or" style={S.back}>← AI in Logistics & OR</Link>
      <div style={S.badge}>{modules[2].num} — AI IN LOGISTICS & OR</div>
      <h1 style={S.h1}>Otimização de Rotas</h1>
      <p style={S.sub}>VRP e variantes, heurísticas clássicas (Clarke-Wright, ALNS), solvers modernos (OR-Tools, Gurobi, HGS-CVRP), e routing em produção no Amazon, DHL, e e-commerce.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Vehicle Routing Problem</h2>
        <p style={S.p}>O <strong>Vehicle Routing Problem (VRP)</strong> generaliza o TSP para uma frota de veículos: dado um depósito, um conjunto de clientes com demandas, e uma frota de veículos com capacidade Q, encontrar um conjunto de rotas que parta e regresse ao depósito, cubra todos os clientes, respeite a capacidade, e minimize a distância (ou custo) total. Formulação ILP: variáveis x_ijk ∈ {'{0,1}'} — veículo k usa arco (i,j); restrições: fluxo de conservação em cada nó, cobertura de cada cliente, capacidade.</p>
        <p style={S.p}><strong>Variantes:</strong> <em>CVRP</em> — Capacitated VRP (restrição de capacidade); <em>VRPTW</em> — VRP com time windows [a_i, b_i]: serviço ao cliente i deve começar no intervalo; <em>VRPB</em> — com backhauls (entregas e recolhas); <em>PDPTW</em> — pickup and delivery com TW (cada entrega tem um par origem-destino); <em>MDVRP</em> — multi-depot VRP; <em>SDVRP</em> — split delivery (cliente pode ser servido por múltiplos veículos). Complexidade: NP-hard (generaliza TSP). Com TW, ainda mais difícil — planeamento temporal acrescenta estrutura mas reduz a flexibilidade.</p>
        <p style={S.p}><strong>Aplicações reais:</strong> DHL e UPS resolvem VRPTW diariamente com 10.000-100.000 entregas por região. Amazon resolveu 500M+ entregas em 2022. Uber Eats e Deliveroo resolvem PDPTW online com restrições de freshness. Saúde: optimização de rotas de ambulâncias e serviços domiciliários.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 580 190" width="100%" style={{display:'block'}}>
            <text x="290" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">CVRP — Depósito + 3 Rotas de Veículos com Demandas de Clientes</text>
            {/* Depot */}
            {/* Routes first (behind) */}
            <path d="M265,95 L152,67 L80,110 L130,143 L270,110" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,2"/>
            <path d="M295,82 L370,60 L450,78 L295,90" fill="none" stroke="#fb923c" strokeWidth="2" strokeDasharray="5,2"/>
            <path d="M295,108 L382,148 L462,132 L295,108" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,2"/>
            {/* Depot on top of routes */}
            <rect x="265" y="80" width="30" height="30" rx="4" fill={`${C}40`} stroke={C} strokeWidth="2.5"/>
            <text x="280" y="100" fill="#fff" fontSize="11" fontWeight="700" textAnchor="middle">D</text>
            {/* Route 1 nodes */}
            <circle cx="140" cy="60" r="16" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2"/>
            <text x="140" y="57" fill="#e2e8f0" fontSize="9" textAnchor="middle">C1</text>
            <text x="140" y="69" fill="#f97316" fontSize="8" textAnchor="middle">d=15</text>
            <circle cx="80" cy="110" r="16" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2"/>
            <text x="80" y="107" fill="#e2e8f0" fontSize="9" textAnchor="middle">C2</text>
            <text x="80" y="119" fill="#f97316" fontSize="8" textAnchor="middle">d=20</text>
            <circle cx="130" cy="155" r="16" fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2"/>
            <text x="130" y="152" fill="#e2e8f0" fontSize="9" textAnchor="middle">C3</text>
            <text x="130" y="164" fill="#f97316" fontSize="8" textAnchor="middle">d=25</text>
            <text x="55" y="78" fill="#f97316" fontSize="9">V1 (Q=60)</text>
            {/* Route 2 nodes */}
            <circle cx="380" cy="55" r="16" fill="var(--bg-secondary)" stroke="#fb923c" strokeWidth="2"/>
            <text x="380" y="52" fill="#e2e8f0" fontSize="9" textAnchor="middle">C4</text>
            <text x="380" y="64" fill="#fb923c" fontSize="8" textAnchor="middle">d=30</text>
            <circle cx="450" cy="90" r="16" fill="var(--bg-secondary)" stroke="#fb923c" strokeWidth="2"/>
            <text x="450" y="87" fill="#e2e8f0" fontSize="9" textAnchor="middle">C5</text>
            <text x="450" y="99" fill="#fb923c" fontSize="8" textAnchor="middle">d=18</text>
            <text x="468" y="65" fill="#fb923c" fontSize="9">V2 (Q=50)</text>
            {/* Route 3 nodes */}
            <circle cx="390" cy="155" r="16" fill="var(--bg-secondary)" stroke="#fbbf24" strokeWidth="2"/>
            <text x="390" y="152" fill="#e2e8f0" fontSize="9" textAnchor="middle">C6</text>
            <text x="390" y="164" fill="#fbbf24" fontSize="8" textAnchor="middle">d=22</text>
            <circle cx="470" cy="140" r="16" fill="var(--bg-secondary)" stroke="#fbbf24" strokeWidth="2"/>
            <text x="470" y="137" fill="#e2e8f0" fontSize="9" textAnchor="middle">C7</text>
            <text x="470" y="149" fill="#fbbf24" fontSize="8" textAnchor="middle">d=28</text>
            <text x="480" y="120" fill="#fbbf24" fontSize="9">V3 (Q=50)</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Heurísticas e Metaheurísticas</h2>
        <p style={S.p}>O algoritmo <strong>Clarke-Wright Savings</strong> (1964) é a heurística clássica para VRP: começa com n rotas directas depósito-cliente-depósito. Para cada par de clientes (i, j), calcula-se o <em>savings</em> s(i,j) = d(depot, i) + d(depot, j) − d(i, j) — a distância poupada por combinar as duas rotas numa só. Ordena os savings por ordem decrescente e combina rotas se: (a) i e j estão em rotas diferentes; (b) i e j são os extremos das suas rotas; (c) a capacidade combinada não excede Q. Simples, rápido, funciona bem na prática.</p>
        <p style={S.p}><strong>Local search para VRP:</strong> <em>2-opt*</em> (específico para VRP): trocar sufixos de duas rotas; <em>Or-opt</em>: mover 1, 2 ou 3 clientes consecutivos para outra rota; <em>GENI</em>: inserção de clientes com perturbação local. <strong>ALNS</strong> (Adaptive Large Neighbourhood Search, Shaw 1998): destruir parte da solução com operadores de remoção (random, worst, shaw — clientes similares) e reconstruir com operadores de inserção (greedy, regret-k). Os operadores são seleccionados adaptativamente por um mecanismo de roulette wheel baseado na melhoria histórica.</p>
        <p style={S.p}><strong>Tabu Search:</strong> manter uma lista tabu de movimentos recentes proibidos (para evitar reversão imediata). Aceita movimentos que pioram a solução — permite escapar de óptimos locais. Aspiration criterion: aceitar movimento tabu se melhora o melhor conhecido global. POPMUSIC (Partial Optimization Metaheuristic Under Special Intensification Conditions): decompõe o VRP em sub-problemas sobrepostos de k clientes — muito eficaz para instâncias grandes.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Clarke-Wright — exemplo:</strong> depot D, clientes A, B. d(D,A)=10, d(D,B)=8, d(A,B)=4. s(A,B) = 10+8−4 = 14. Merging as rotas D→A→D e D→B→D em D→A→B→D poupa 14 unidades de distância. Se s(A,B) fosse negativo, manter as rotas separadas seria melhor.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Solvers Modernos — OR-Tools e Gurobi</h2>
        <p style={S.p}><strong>Google OR-Tools</strong> é o framework open-source de referência para VRP. O módulo de routing (<code>ortools.constraint_solver</code>) modela VRP, CVRP e VRPTW com callbacks Python para distâncias, demandas e TW. Estratégias de search: <code>AUTOMATIC</code>, <code>PATH_CHEAPEST_ARC</code>, <code>SAVINGS</code>. Metaheurísticas: <code>GUIDED_LOCAL_SEARCH</code>, <code>SIMULATED_ANNEALING</code>, <code>TABU_SEARCH</code>. Para scheduling, usar CP-SAT com variáveis de intervalo.</p>
        <p style={S.p}><strong>HGS-CVRP</strong> (Hybrid Genetic Search, Vidal et al., 2022) é o algoritmo estado da arte para CVRP: combina crossover genético com intensificação local (GENIUS-based) e gestão de diversidade de população. Gap para lower bound &lt;1% em quase todas as instâncias do benchmark. Disponível open-source em C++ com wrapper Python.</p>
        <p style={S.p}><strong>Benchmarks:</strong> <em>Solomon instances</em> — 56 instâncias de VRPTW com 100 clientes (R1/R2 aleatório, C1/C2 clustered, RC1/RC2 mixed), janelas estreitas vs largas. <em>Gehring & Homberger</em> — instâncias de 200-1000 clientes. LKH-3 (Lin-Kernighan-Helsgott 3) resolve tanto TSP como VRP com grandes saltos na qualidade. <strong>DPDP</strong> (Dynamic PDP): clientes chegam em tempo real — re-optimization contínua com horizonte rolante; estado da arte usa Attention Model + beam search.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>OR-Tools VRP em Python:</strong> <code>manager = pywrapcp.RoutingIndexManager(n_locations, n_vehicles, depot)</code>; <code>routing = pywrapcp.RoutingModel(manager)</code>; registar callbacks de distância e capacidade; adicionar dimension de capacidade com <code>routing.AddDimensionWithVehicleCapacity(...)</code>; resolver com <code>routing.SolveWithParameters(search_params)</code>. Solução em segundos para instâncias com 200 nós.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Routing em Produção</h2>
        <p style={S.p}><strong>Amazon Last Mile:</strong> 500M+ entregas/ano. O sistema de routing combina ML (previsão de tempos de serviço, preferências de entrega, falhas prováveis) com OR (VRPTW solver). Re-routing em tempo real quando surgem imprevistos (tráfego, cliente ausente). Amazon lançou o <em>Last Mile Routing Research Challenge</em> (2021) para encontrar melhores algoritmos — vencido por uma combinação de GNN + heurística local.</p>
        <p style={S.p}><strong>DHL route optimization:</strong> redução de 20% em distância total com routing algoritmos vs routing manual. <strong>Multi-depot VRP:</strong> múltiplos armazéns/depósitos — alocação de clientes a depósitos como parte do problema. <strong>Electric VRP (E-VRP):</strong> restrições de autonomia de bateria + localização de charging stations como stops obrigatórios — novo campo de investigação activo. <strong>Drone routing:</strong> constraints 3D (altitude, corredores aéreos), no-fly zones (aeroportos, eventos), wind-aware, battery — MILP com constraints 3D.</p>
        <p style={S.p}><strong>Crowdsourced delivery:</strong> Instacart, DoorDash, Glovo — VRP com motoristas independentes cuja disponibilidade é estocástica. Surge pricing para equilibrar oferta/procura. Matching em tempo real: bipartite matching (motoristas vs ordens) com restrições de proximidade e freshness. <strong>Combinação ML + OR:</strong> ML prevê tempos de viagem (Google Maps, Uber) e demanda por zona; OR optimiza rotas com inputs mais precisos — pipeline predict-then-optimize.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Stochastic VRP:</strong> quando tempos de viagem ou demandas são aleatórias. Abordagens: robust optimization (pior caso), chance-constrained (satisfazer restrições com prob ≥ 0.95), sample average approximation (SAA — resolver múltiplos cenários). Re-optimization online: resolver um LP/VRP compacto a cada evento — horizon rolling de 15-30 minutos em aplicações de delivery.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Vehicle Routing Problem</strong> — VRP generaliza TSP com múltiplos veículos, capacidades, depósitos e janelas de tempo; NP-hard — VRPTW (com time windows) é o caso mais comum em logística; OR-Tools CVRP e LKH-3 são solvers de referência; modelo do "último km" em e-commerce é um VRPTW com centenas de clientes.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Heurísticas e Metaheurísticas</strong> — construção gulosa (nearest neighbor) + melhoria local (2-opt, 3-opt) formam a base; metaheurísticas (Simulated Annealing, Tabu Search, ALNS) exploram além de mínimos locais; ALNS (Adaptive Large Neighborhood Search) é o estado da arte em VRP combinado com solvers exactos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Solvers Modernos — OR-Tools e Gurobi</strong> — OR-Tools (Google, open-source) tem módulos CP-SAT para constraint programming e routing library para VRP — resolve instâncias de 1000+ clientes em &lt;60s; Gurobi (comercial) tem MIP com branch-and-cut avançado e é o benchmark de performance para ILP em produção.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Routing em Produção</strong> — sistemas de routing em produção (Amazon, DHL, Chronopost) combinam optimizador offline (planeamento D-1) com re-optimização em tempo real (para re-routing dinâmico); ML prediz tempos de serviço e tráfego; digitalização de restrições reais (janelas horárias, acesso veicular) é 80% do esforço.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
