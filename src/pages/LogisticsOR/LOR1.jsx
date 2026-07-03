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

export default function LOR1() {
  return (
    <div style={S.page}>
      <Link to="/logistics-or" style={S.back}>← AI in Logistics & OR</Link>
      <div style={S.badge}>{modules[0].num} — AI IN LOGISTICS & OR</div>
      <h1 style={S.h1}>Programação Linear e Simplex</h1>
      <p style={S.sub}>Formulação de LPs, geometria do politopo, algoritmo simplex, dualidade e shadow prices, solvers modernos e aplicações práticas em logística e planeamento de operações.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Programação Linear — Formulação</h2>
        <p style={S.p}><strong>Programação Linear (LP)</strong> é a optimização de uma função objectivo linear sujeita a restrições lineares: <strong>maximizar c^T x, sujeito a Ax ≤ b, x ≥ 0</strong>. Convertendo para <em>forma padrão</em> com variáveis de folga s ≥ 0: Ax + s = b, transforma-se inequações em equações. Cada restrição de igualdade define um hiperplano; a intersecção de n hiperplanos forma um <strong>vértice</strong> do politopo. A <strong>região feasível</strong> é um poliedro convexo (intersecção de semiespaços). A solução óptima, se existir, encontra-se num vértice — pois a função objectivo linear é maximizada na fronteira convexa.</p>
        <p style={S.p}><strong>Exemplos clássicos:</strong> <em>Problema de mistura</em> (produção de tintas) — maximizar lucro escolhendo quantidades de dois produtos com restrições de recursos (tempo máquina, matéria-prima). <em>Problema de transporte</em> — minimizar custo total de transporte de m origens para n destinos, com oferta e procura balanceadas: min Σ_ij c_ij x_ij s.t. Σ_j x_ij = s_i (oferta), Σ_i x_ij = d_j (procura), x_ij ≥ 0. <em>Problema da dieta</em> (Stigler, 1945 — primeiro LP resolvido) — minimizar custo de alimentos satisfazendo requisitos nutricionais mínimos.</p>
        <p style={S.p}><strong>Geometria:</strong> Em 2D, a região feasível é um polígono convexo. As <em>linhas de nível</em> da função objectivo (c^T x = k) são paralelas — aumentar k desloca a linha até sair da região feasível, tocando num vértice óptimo. Simplex: percorrer vértices por arestas adjacentes, sempre aumentando o objectivo.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 580 200" width="100%" style={{display:'block'}}>
            <text x="290" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">LP 2D — Região Feasível (polítopo), contornos da função objectivo, vértice óptimo</text>
            {/* Axes */}
            <line x1="60" y1="170" x2="400" y2="170" stroke="#475569" strokeWidth="1.5"/>
            <line x1="60" y1="170" x2="60" y2="30" stroke="#475569" strokeWidth="1.5"/>
            <text x="405" y="173" fill="#94a3b8" fontSize="10">x₁</text>
            <text x="50" y="27" fill="#94a3b8" fontSize="10">x₂</text>
            {/* Feasible region polygon */}
            <polygon points="60,170 250,170 310,110 200,50 60,80" fill={`${C}18`} stroke={C} strokeWidth="1.8"/>
            {/* Vertex labels */}
            <circle cx="60" cy="170" r="4" fill={C}/>
            <circle cx="250" cy="170" r="4" fill={C}/>
            <circle cx="310" cy="110" r="4" fill={C}/>
            <circle cx="200" cy="50" r="8" fill={C}/>
            <text x="200" y="55" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="700">★</text>
            <circle cx="60" cy="80" r="4" fill={C}/>
            <text x="215" y="38" fill={C} fontSize="10" fontWeight="700">Óptimo</text>
            {/* Objective function contours */}
            <line x1="80" y1="165" x2="240" y2="70" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3" opacity="0.6"/>
            <line x1="130" y1="165" x2="290" y2="70" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3" opacity="0.6"/>
            <line x1="160" y1="155" x2="330" y2="60" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="345" y="58" fill="#f97316" fontSize="9">c^T x = k*</text>
            <text x="345" y="70" fill="#94a3b8" fontSize="8">(óptimo)</text>
            {/* Axis ticks */}
            <text x="250" y="183" fill="#64748b" fontSize="9" textAnchor="middle">5</text>
            <text x="310" y="183" fill="#64748b" fontSize="9" textAnchor="middle">7</text>
            <text x="50" y="83" fill="#64748b" fontSize="9" textAnchor="end">8</text>
            <text x="50" y="113" fill="#64748b" fontSize="9" textAnchor="end">6</text>
            {/* Legend */}
            <rect x="440" y="80" width="12" height="12" fill={`${C}30`} stroke={C} rx="2"/>
            <text x="456" y="91" fill="#94a3b8" fontSize="9">Região feasível</text>
            <line x1="440" y1="110" x2="452" y2="110" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2"/>
            <text x="456" y="114" fill="#94a3b8" fontSize="9">Contornos c^T x</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Algoritmo Simplex</h2>
        <p style={S.p}>O <strong>simplex</strong> (Dantzig, 1947) resolve LPs em forma padrão percorrendo vértices adjacentes. Estado: <strong>tableau</strong> com variáveis básicas (B) e não-básicas (N); a solução básica feasível (BFS) tem N = 0, B = B⁻¹b ≥ 0. Cada passo: selecionar <em>entering variable</em> — variável não-básica com maior coeficiente negativo na linha do objectivo (critério de Bland: menor índice para evitar cycling); selecionar <em>leaving variable</em> pela <em>regra do mínimo rácio</em>: min{'{b_i / a_{ij} : a_{ij} > 0}'}; efectuar pivot (operações elementares de linha para tornar a coluna entering num vector canónico).</p>
        <p style={S.p}><strong>Fase I:</strong> encontrar uma BFS inicial adicionando variáveis artificiais e minimizando a sua soma — se o mínimo for 0, temos BFS para a Fase II; senão o LP é infeasível. <strong>Fase II:</strong> optimizar a partir da BFS. <strong>Cycling:</strong> o simplex pode entrar em loop com passos degenerados (rácio 0); a <em>Bland's rule</em> garante terminação. Complexidade teórica: exponencial no pior caso (Klee-Minty cube). Na prática, o simplex resolve LPs com 10⁶ variáveis em minutos.</p>
        <p style={S.p}><strong>Alternativas ao simplex:</strong> <em>Ellipsoid method</em> (Khachiyan, 1979) — primeiro algoritmo polinomial para LP, O(n⁶L) onde L é o tamanho do input. <em>Interior point</em> (Karmarkar, 1984) — O(n³·⁵L), percorre o interior do politopo em vez dos vértices. Solvers modernos usam interior point para LPs muito grandes e simplex para LPs que necessitam de warm-starting (B&B).</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Simplex revisado:</strong> Em vez de manter o tableau completo (O(mn) memória), o simplex revisado mantém apenas B⁻¹ e actualiza-o eficientemente por factorização LU. Reduz memória para O(m²) e é a base de todos os solvers comerciais. <em>Pricing</em> eficiente para selecção da entering variable: Devex pricing, steepest-edge pricing.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Dualidade</h2>
        <p style={S.p}>Para cada LP <em>primal</em> existe um <strong>dual</strong>. Primal: max c^T x s.t. Ax ≤ b, x ≥ 0 ↔ Dual: <strong>min b^T y s.t. A^T y ≥ c, y ≥ 0</strong>. As variáveis duais y_i correspondem às restrições do primal. <strong>Weak duality:</strong> para qualquer solução primal feasível x e dual feasível y: c^T x ≤ b^T y — o valor do dual é sempre um upper bound para o primal. <strong>Strong duality</strong> (Teorema de Dualidade de LP): se ambos são feasíveis, os valores óptimos são iguais: max c^T x = min b^T y.</p>
        <p style={S.p}><strong>Complementary slackness:</strong> condições de optimalidade necessárias e suficientes: x*_j (c_j − y^T A_j) = 0 para todo j; y*_i (b_i − A_i x*) = 0 para todo i. Se x*_j &gt; 0, então a restrição dual correspondente é activa (y^T A_j = c_j); se a restrição primal é não-activa (slack &gt; 0), então y*_i = 0.</p>
        <p style={S.p}><strong>Shadow prices:</strong> o valor dual óptimo y*_i é o preço marginal da restrição i — se b_i aumenta em 1 unidade, o valor óptimo primal aumenta em y*_i. Exemplo: num LP de produção com restrição de tempo máquina, y*_i é quanto vale uma hora adicional da máquina i. <strong>Análise de sensibilidade:</strong> o intervalo de valores de b_i e c_j dentro do qual a base óptima permanece a mesma (sem pivot) — crucial para análise de what-if em decisões de negócio.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Interpretação económica:</strong> Os preços sombra são os preços de equilíbrio do mercado implícito nos recursos. Se y*_i = 0, o recurso i tem slack (não é binding) — adicionar mais não muda o objectivo. Se y*_i &gt; 0, o recurso é escasso — vale a pena investir. Em problemas de transporte, os duais são os custos de transporte de equilíbrio — base da teoria de preços no transporte internacional.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Solvers e Aplicações Práticas</h2>
        <p style={S.p}><strong>Solvers comerciais e open-source:</strong> <em>Gurobi</em> — estado da arte para LP/MIP, amplamente usado em indústria. <em>CPLEX</em> (IBM) — alternativa madura, integrado no IBM Decision Optimization. <em>HiGHS</em> (open-source) — solver LP/MIP de alta performance, base do OR-Tools v9+. <em>OR-Tools</em> (Google) — framework open-source com wrapper para múltiplos solvers. Python APIs: PuLP (interface simples), Pyomo (modelação algebraica), gurobipy (API nativa Gurobi), scipy.optimize.linprog (small-scale).</p>
        <p style={S.p}><strong>Aplicações de impacto:</strong> <em>Airline crew scheduling</em> (United Airlines): LP com set partitioning para atribuir tripulações a voos satisfazendo regulações FAA — poupa $40M/ano. <em>Hospital scheduling</em>: LP para atribuição de cirurgias a blocos operatórios minimizando over/undertime. <em>Supply chain optimization</em>: LP de múltiplos períodos para planeamento de produção, inventário e distribuição. <em>Portfolio optimization</em> (Markowitz mean-variance): minimizar variância do portfólio s.t. retorno esperado ≥ target — LP após linearização de variância com short-selling constraints.</p>
        <p style={S.p}><strong>Network simplex</strong>: especialização do simplex para problemas de fluxo em redes (min-cost flow, assignment, transportation) — explora a estrutura de árvore span da base óptima. 10-100× mais rápido que simplex geral para problemas de fluxo. NetworkX implementa <code>min_cost_flow</code>; OR-Tools tem solver dedicado para network flow.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 600 190" width="100%" style={{display:'block'}}>
            <text x="300" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Transportation LP como Network Flow — Origens, Destinos, Fluxos</text>
            {/* Supply nodes */}
            <circle cx="100" cy="70" r="18" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <text x="100" y="67" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">S1</text>
            <text x="100" y="78" fill={C} fontSize="9" textAnchor="middle">s=40</text>
            <circle cx="100" cy="140" r="18" fill={`${C}30`} stroke={C} strokeWidth="2"/>
            <text x="100" y="137" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">S2</text>
            <text x="100" y="148" fill={C} fontSize="9" textAnchor="middle">s=60</text>
            {/* Demand nodes */}
            <circle cx="460" cy="55" r="18" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
            <text x="460" y="52" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">D1</text>
            <text x="460" y="63" fill="#f97316" fontSize="9" textAnchor="middle">d=30</text>
            <circle cx="460" cy="105" r="18" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
            <text x="460" y="102" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">D2</text>
            <text x="460" y="113" fill="#f97316" fontSize="9" textAnchor="middle">d=45</text>
            <circle cx="460" cy="158" r="18" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
            <text x="460" y="155" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">D3</text>
            <text x="460" y="166" fill="#f97316" fontSize="9" textAnchor="middle">d=25</text>
            {/* Flow arcs with cost and flow labels */}
            <defs>
              <marker id="arrL" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill={C}/>
              </marker>
            </defs>
            <line x1="118" y1="64" x2="440" y2="58" stroke={C} strokeWidth="2.5" markerEnd="url(#arrL)"/>
            <text x="280" y="52" fill={C} fontSize="9" textAnchor="middle">x=30, c=2</text>
            <line x1="118" y1="72" x2="440" y2="100" stroke={C} strokeWidth="1.5" markerEnd="url(#arrL)"/>
            <text x="280" y="80" fill="#f97316" fontSize="9" textAnchor="middle">x=10, c=5</text>
            <line x1="118" y1="136" x2="440" y2="112" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrL)"/>
            <text x="280" y="118" fill="#f97316" fontSize="9" textAnchor="middle">x=35, c=3</text>
            <line x1="118" y1="145" x2="440" y2="153" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrL)"/>
            <text x="280" y="157" fill="#f97316" fontSize="9" textAnchor="middle">x=25, c=4</text>
            <text x="300" y="185" fill="#64748b" fontSize="9" textAnchor="middle">min Σ c_ij x_ij s.t. conservação de fluxo em cada nó</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Programação Linear — Formulação</strong> — PL optimiza uma função objectivo linear sujeita a restrições lineares de igualdade e desigualdade; toda a teoria (LP duality, simplex, interior point) assenta na convexidade do poliedro viável — qualquer óptimo local é global, o que não acontece em PNL.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Algoritmo Simplex</strong> — o Simplex percorre os vértices do poliedro viável em direcção ao óptimo, pivotando de vértice em vértice; é exponencial no pior caso mas polinomial na prática — resolve instâncias com milhões de variáveis em segundos com implementações modernas como CPLEX e Gurobi.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Dualidade</strong> — cada PL primal tem um dual onde as variáveis correspondem às restrições do primal; dualidade forte garante que óptimo primal = óptimo dual; os preços-sombra (dual variables) indicam o valor marginal de relaxar cada restrição — essencial para análise de sensibilidade e decomposição.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Solvers e Aplicações Práticas</strong> — Gurobi, CPLEX e HiGHS resolvem PL e MILP; OR-Tools (Google) e PuLP são open-source; aplicações reais: optimização de portfólio, scheduling de produção, routing de transporte e planeamento de energia — PL é a espinha dorsal de decisões operacionais em grande escala.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
