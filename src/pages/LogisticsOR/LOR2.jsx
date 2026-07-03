import React from 'react';
import { Link } from 'react-router-dom';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
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

export default function LOR2() {
  return (
    <div style={S.page}>
      <Link to="/logistics-or" style={S.back}>← AI in Logistics & OR</Link>
      <div style={S.badge}>{modules[1].num} — AI IN LOGISTICS & OR</div>
      <h1 style={S.h1}>Programação Inteira e Combinatória</h1>
      <p style={S.sub}>ILP, branch and bound, cutting planes e TSP — os fundamentos da otimização combinatória e os algoritmos que resolvem os problemas mais difíceis de logística e operações.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. ILP — Formulação e Dificuldade</h2>
        <p style={S.p}>Um <strong>Integer Linear Program (ILP)</strong> impõe que algumas ou todas as variáveis sejam inteiras. <strong>Mixed ILP (MIP)</strong>: algumas variáveis são inteiras (y ∈ ℤ), outras contínuas (x ∈ ℝ). <strong>Binary ILP</strong>: variáveis 0-1 — a classe mais comum em logística (decidir se fazer algo ou não). A <em>relaxação LP</em> remove a integralidade — a diferença entre a solução inteira óptima e a solução LP relaxada é o <strong>integrality gap</strong>: gap = (LP*−IP*) / LP*. Um gap pequeno significa que o LP fornece um bound forte, facilitando a resolução.</p>
        <p style={S.p}><strong>Exemplos fundamentais:</strong> <em>Set cover</em>: selecionar o mínimo conjunto de subconjuntos que cubra todos os elementos — logarithmic approximation. <em>Facility location</em>: quais armazéns abrir para minimizar custo fixo + custo de serviço aos clientes. <em>Knapsack</em>: maximizar valor de itens seleccionados s.t. peso total ≤ capacidade. <em>TSP</em>: encontrar o ciclo Hamiltoniano de menor custo. <em>Nurse scheduling</em>: atribuir turnos a enfermeiros satisfazendo cobertura mínima e preferências.</p>
        <p style={S.p}>A complexidade do ILP geral é <strong>NP-hard</strong> — não existe algoritmo polinomial (a não ser P=NP). Contudo, muitos problemas práticos são resolvidos em segundos ou minutos por solvers modernos com B&B, cutting planes e heurísticas. O progresso em solvers MIP desde 1990 é equivalente a um factor de 10¹¹ — combinação de hardware (10⁶) e algoritmos (10⁵).</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:'0.5rem'}}><strong>Formulação binária para facility location:</strong></p>
          <p style={{...S.p, marginBottom:'0.25rem', fontSize:'0.85rem'}}>
            Variáveis: <InlineMath math="y_j \in \{0,1\}" /> — abrir armazém <InlineMath math="j" />; <InlineMath math="x_{ij} \in \{0,1\}" /> — servir cliente <InlineMath math="i" /> a partir de <InlineMath math="j" />.
          </p>
          <BlockMath math="\min \sum_j f_j y_j + \sum_{ij} c_{ij} x_{ij}" />
          <p style={{...S.p, marginBottom:'0.25rem', fontSize:'0.85rem'}}>sujeito a:</p>
          <BlockMath math="\sum_j x_{ij} = 1 \quad \forall i \quad (\text{todo cliente servido})" />
          <BlockMath math="x_{ij} \leq y_j \quad \forall i,j \quad (\text{só servir de armazém aberto})" />
          <p style={{...S.p, marginBottom:0, fontSize:'0.85rem'}}>Integrality gap tipicamente {'<'}5% para instâncias de negócio.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 580 185" width="100%" style={{display:'block'}}>
            <text x="290" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Knapsack — Solução LP (fracionária) vs Solução Inteira Óptima</text>
            {/* Items */}
            <text x="100" y="45" fill="#94a3b8" fontSize="10" textAnchor="middle">Item</text>
            <text x="180" y="45" fill="#94a3b8" fontSize="10" textAnchor="middle">Peso</text>
            <text x="260" y="45" fill="#94a3b8" fontSize="10" textAnchor="middle">Valor</text>
            <text x="360" y="45" fill="#94a3b8" fontSize="10" textAnchor="middle">LP (x*)</text>
            <text x="460" y="45" fill="#94a3b8" fontSize="10" textAnchor="middle">IP (x*)</text>
            {[['A',4,10,1.0,1],['B',3,7,1.0,1],['C',5,12,0.6,0],['D',2,4,0.0,1]].map(([name,w,v,lp,ip],i)=>(
              <g key={name}>
                <text x="100" y={68+i*28} fill="#e2e8f0" fontSize="11" textAnchor="middle">{name}</text>
                <text x="180" y={68+i*28} fill="#94a3b8" fontSize="11" textAnchor="middle">{w}</text>
                <text x="260" y={68+i*28} fill="#94a3b8" fontSize="11" textAnchor="middle">{v}</text>
                <text x="360" y={68+i*28} fill={lp===1?'#f97316':lp===0?'#f97316':C} fontSize="11" textAnchor="middle" fontWeight="700">{lp}</text>
                <text x="460" y={68+i*28} fill={ip===1?'#f97316':'#f97316'} fontSize="11" textAnchor="middle" fontWeight="700">{ip}</text>
              </g>
            ))}
            <line x1="60" y1="53" x2="520" y2="53" stroke="var(--card-border)" strokeWidth="1"/>
            <text x="290" y="168" fill="#94a3b8" fontSize="9" textAnchor="middle">Cap=9 | LP: valor=10+7+7.2+0=24.2 (C fracionário=0.6) | IP: A+B+D=21, peso=9</text>
            <text x="290" y="180" fill={C} fontSize="9" textAnchor="middle">Integrality gap = (24.2−21)/24.2 ≈ 13%</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Branch and Bound</h2>
        <p style={S.p}><strong>Branch and Bound (B&B)</strong> é o algoritmo fundamental para ILP exacto. Começa resolvendo a relaxação LP. Se a solução é inteira, é óptima; senão, seleciona uma variável fracionária x*_j e cria dois sub-problemas: um com x_j ≤ ⌊x*_j⌋ (branch down) e outro com x_j ≥ ⌈x*_j⌉ (branch up). Cada sub-problema tem a sua relaxação LP resolvida. O processo cria uma árvore de B&B.</p>
        <p style={S.p}><strong>Poda (pruning):</strong> um nó da árvore é podado se: (1) a sua relaxação LP é <em>infeasível</em>; (2) o seu bound LP é ≤ melhor solução inteira encontrada (incumbente) — <em>suboptimal</em>; ou (3) a sua solução LP já é inteira — <em>incumbente candidata</em>. <strong>Estratégias de branching:</strong> <em>most fractional</em> (selecionar variável mais próxima de 0.5 — pior estratégia); <em>strong branching</em> (avaliar todos os candidatos, escolher o que gera maior melhoria nos bounds — lento mas eficaz); <em>pseudocosts</em> (estimar o efeito do branching a partir de branching anteriores — compromise).</p>
        <p style={S.p}><strong>Bounding:</strong> <em>LP bound</em> — fraco mas muito rápido. <em>Lagrangian relaxation</em> — dualizar restrições difíceis (com penalidade λ na função objectivo), resolver sub-problema mais fácil; o bound Lagrangeano é sempre ≥ LP bound. Resolver o dual Lagrangeano por subgradiente. Produz bounds muito mais fortes para problemas com estrutura especial (TSP, scheduling).</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 640 190" width="100%" style={{display:'block'}}>
            <text x="320" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Árvore Branch and Bound — nós podados marcados com ✗</text>
            {/* Root */}
            <rect x="260" y="25" width="120" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.8"/>
            <text x="320" y="40" fill={C} fontSize="10" textAnchor="middle" fontWeight="700">LP* = 18.7</text>
            <text x="320" y="54" fill="#94a3b8" fontSize="9" textAnchor="middle">x₂ = 2.3 (frac.)</text>
            {/* Level 1 left */}
            <rect x="100" y="85" width="120" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="160" y="100" fill={C} fontSize="10" textAnchor="middle">LP* = 17.4</text>
            <text x="160" y="113" fill="#94a3b8" fontSize="9" textAnchor="middle">x₁ = 1.8 (frac.)</text>
            {/* Level 1 right */}
            <rect x="420" y="85" width="120" height="36" rx="6" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5"/>
            <text x="480" y="100" fill={C} fontSize="10" textAnchor="middle">LP* = 16.0</text>
            <text x="480" y="113" fill="#94a3b8" fontSize="9" textAnchor="middle">inteira ✓</text>
            <line x1="300" y1="61" x2="190" y2="85" stroke="#475569" strokeWidth="1.3"/>
            <line x1="340" y1="61" x2="450" y2="85" stroke="#475569" strokeWidth="1.3"/>
            <text x="205" y="76" fill="#94a3b8" fontSize="8">x₂≤2</text>
            <text x="425" y="76" fill="#94a3b8" fontSize="8">x₂≥3</text>
            {/* Level 2 */}
            <rect x="30" y="148" width="110" height="32" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.8"/>
            <text x="85" y="163" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="700">IP* = 17 ★</text>
            <text x="85" y="174" fill="#94a3b8" fontSize="8" textAnchor="middle">incumbente</text>
            <rect x="170" y="148" width="110" height="32" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="225" y="163" fill="#f97316" fontSize="10" textAnchor="middle">LP* = 15.2</text>
            <text x="225" y="174" fill="#64748b" fontSize="8" textAnchor="middle">≤ 16 → poda ✗</text>
            <line x1="130" y1="121" x2="90" y2="148" stroke="#475569" strokeWidth="1.2"/>
            <line x1="175" y1="121" x2="215" y2="148" stroke="#475569" strokeWidth="1.2"/>
            <text x="82" y="138" fill="#94a3b8" fontSize="8">x₁≤1</text>
            <text x="206" y="138" fill="#94a3b8" fontSize="8">x₁≥2</text>
            {/* Pruned annotation */}
            <text x="480" y="140" fill="#f97316" fontSize="9" textAnchor="middle">Incumbente = 16</text>
            <text x="480" y="152" fill="#f97316" fontSize="9" textAnchor="middle">poda direita OK</text>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Cutting Planes</h2>
        <p style={S.p}><strong>Cutting planes</strong> (Dantzig, Fulkerson & Johnson, 1954) adicionam inequações lineares à formulação LP que cortam soluções fracionárias sem eliminar nenhuma solução inteira feasível. Os <strong>cortes de Gomory</strong> são gerados automaticamente a partir de qualquer linha do tableau simplex com valor fracionário: se a linha i do tableau é x_B_i + Σ_j ā_ij x_j = b̄_i com b̄_i não-inteiro, o corte de Gomory é Σ_j {'{ā_ij}'} x_j ≥ {'{b̄_i}'} (onde {'{·}'} denota parte fracionária). Teoricamente, cortes de Gomory podem resolver qualquer ILP após um número finito de rondas.</p>
        <p style={S.p}><strong>Teoria poliedral:</strong> o convex hull dos pontos inteiros feasíveis é o politopo inteiro P_I. As <em>facets</em> de P_I são as inequações mais fortes possíveis. Conhecer as facets permite resolver o ILP como LP — mas enumerar todas as facets é NP-hard em geral. Para problemas específicos (matching, flows, cuts), a estrutura é bem conhecida.</p>
        <p style={S.p}><strong>Cortes específicos do TSP:</strong> <em>subtour elimination constraints</em> — para qualquer subconjunto S ⊂ V de cidades: Σ_{'{i,j ∈ S}'} x_ij ≤ |S| − 1. Previnem tours que não visitam todas as cidades. Há exponencialmente muitos (2^n cortes) — adicionados on-the-fly por <em>separation</em> (encontrar violados eficientemente via min-cut). <strong>Branch-and-Cut:</strong> combinar B&B com cutting planes — adicionar cortes nos nós da árvore antes de branching. Base de todos os solvers MIP modernos.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Branch-and-Cut em produção:</strong> Gurobi e CPLEX implementam centenas de famílias de cortes (Gomory, clique, cover, flow, GUB, MIR, etc.) com heurísticas para decidir quando e quantos aplicar. A escolha de parâmetros de cutting planes é um problema em si — pesquisa activa em automated algorithm configuration (SMAC, irace).</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. TSP e Metaheurísticas</h2>
        <p style={S.p}>O <strong>Traveling Salesman Problem (TSP)</strong> — dado grafo completo pesado, encontrar o ciclo Hamiltoniano de menor custo — é o problema NP-hard mais estudado na história da OR. Em logística, cada visita a um cliente é uma cidade; o TSP modela o problema de um veículo com uma única rota. Christofides (1976) provou um algoritmo de <strong>3/2-aproximação</strong> (usar minimum spanning tree + matching nos vértices de grau ímpar + shortcut do circuito Euleriano). Em 2022, Karlin, Klein & Oveis Gharan provaram uma (3/2 − ε)-aproximação, quebrando a barreira de 50 anos.</p>
        <p style={S.p}><strong>Exact — Concorde solver</strong> (Applegate et al.): estado da arte, resolve instâncias com 100.000+ cidades. Usa B&C com cortes subtour, comb, blossoms. Instância pla85900 (85.900 cidades) resolvida em 2006 — tomou 136 CPU-years.</p>
        <p style={S.p}><strong>Metaheurísticas:</strong> <em>2-opt</em> — trocar duas arestas não-adjacentes se reduz o custo total; <em>3-opt</em> — trocar três arestas; <em>Or-opt</em> — mover sequências de 1, 2 ou 3 cidades para outra posição. <em>Lin-Kernighan</em> — sequências de movimentos tipo k-opt com regras de seleção eficientes — base do estado da arte em heurísticas TSP. <em>Simulated Annealing</em> aceita movimentos que pioram a solução com probabilidade exp(−ΔE/T) — temperatura T decresce ao longo do tempo. <em>ALNS</em> (Adaptive Large Neighbourhood Search) para VRP: destruir parte da solução e reconstruir com operadores seleccionados adaptivamente por performance histórica.</p>
        <div style={S.diagram}>
          <svg viewBox="0 0 600 190" width="100%" style={{display:'block'}}>
            <text x="300" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">2-opt — Troca de Arestas que Reduz Distância Total</text>
            {/* Before 2-opt */}
            {/* Before 2-opt — lines first, circles on top */}
            <text x="150" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">Antes (tour cruzado)</text>
            <line x1="80" y1="70" x2="200" y2="60" stroke={C} strokeWidth="1.5"/>
            <line x1="200" y1="60" x2="80" y2="150" stroke="#f97316" strokeWidth="2" strokeDasharray="4,2"/>
            <line x1="80" y1="150" x2="130" y2="100" stroke={C} strokeWidth="1.5"/>
            <line x1="130" y1="100" x2="160" y2="140" stroke={C} strokeWidth="1.5"/>
            <line x1="160" y1="140" x2="80" y2="70" stroke={C} strokeWidth="1.5"/>
            <circle cx="80" cy="70" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="200" cy="60" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="160" cy="140" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="80" cy="150" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="130" cy="100" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <text x="80" y="74" fill="#e2e8f0" fontSize="8" textAnchor="middle">A</text>
            <text x="200" y="64" fill="#e2e8f0" fontSize="8" textAnchor="middle">B</text>
            <text x="160" y="144" fill="#e2e8f0" fontSize="8" textAnchor="middle">C</text>
            <text x="80" y="154" fill="#e2e8f0" fontSize="8" textAnchor="middle">D</text>
            <text x="130" y="104" fill="#e2e8f0" fontSize="8" textAnchor="middle">E</text>
            <text x="155" y="108" fill="#f97316" fontSize="8">cruzamento!</text>
            {/* Arrow */}
            <text x="290" y="105" fill="#94a3b8" fontSize="20" textAnchor="middle">→</text>
            {/* After 2-opt — lines first, circles on top */}
            <text x="450" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">Depois (tour 2-óptimo)</text>
            <line x1="380" y1="70" x2="500" y2="60" stroke={C} strokeWidth="1.5"/>
            <line x1="500" y1="60" x2="460" y2="140" stroke="#f97316" strokeWidth="2"/>
            <line x1="460" y1="140" x2="430" y2="100" stroke={C} strokeWidth="1.5"/>
            <line x1="430" y1="100" x2="380" y2="150" stroke="#f97316" strokeWidth="2"/>
            <line x1="380" y1="150" x2="380" y2="70" stroke={C} strokeWidth="1.5"/>
            <circle cx="380" cy="70" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="500" cy="60" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="460" cy="140" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="380" cy="150" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <circle cx="430" cy="100" r="10" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.8"/>
            <text x="380" y="74" fill="#e2e8f0" fontSize="8" textAnchor="middle">A</text>
            <text x="500" y="64" fill="#e2e8f0" fontSize="8" textAnchor="middle">B</text>
            <text x="460" y="144" fill="#e2e8f0" fontSize="8" textAnchor="middle">C</text>
            <text x="380" y="154" fill="#e2e8f0" fontSize="8" textAnchor="middle">D</text>
            <text x="430" y="104" fill="#e2e8f0" fontSize="8" textAnchor="middle">E</text>
            <text x="450" y="170" fill="#f97316" fontSize="8" textAnchor="middle">arestas substituídas (laranja)</text>
          </svg>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>ILP — Formulação e Dificuldade</strong> — ILP restringe variáveis a valores inteiros (0/1 para problemas de decisão binária); é NP-hard — o espaço de soluções é combinatório e a relaxação LP fornece um lower bound; problemas como bin packing, set covering e scheduling são formulados como ILP.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Branch and Bound</strong> — Branch and Bound divide o espaço de soluções (branch) e usa bounds para podar ramos sem soluções melhores que o melhor incumbente (bound); é o motor de todos os solvers MIP modernos — combinado com heurísticas de corte, resolve instâncias com milhares de variáveis em segundos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Cutting Planes</strong> — cortes adicionam restrições lineares que excluem soluções fraccionárias sem excluir inteiras, apertando a relaxação LP; Gomory cuts e Chvátal-Gomory cuts são gerados automaticamente; plano de corte + branch and bound (branch and cut) é o algoritmo standard em solvers MIP modernos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>TSP e Metaheurísticas</strong> — TSP (Travelling Salesman Problem) é NP-hard mas com estrutura que permite heurísticas eficazes: 2-opt e 3-opt melhoram soluções localmente; Lin-Kernighan-Helsgott é a heurística mais forte; Concorde resolve instâncias com &gt;100K cidades com branch and cut especializado.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
