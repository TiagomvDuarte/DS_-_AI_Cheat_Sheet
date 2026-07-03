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

export default function LOR5() {
  return (
    <div style={S.page}>
      <Link to="/logistics-or" style={S.back}>← AI in Logistics & OR</Link>
      <div style={S.badge}>{modules[4].num} — AI IN LOGISTICS & OR</div>
      <h1 style={S.h1}>Scheduling e Planeamento</h1>
      <p style={S.sub}>Notação de Graham, flow-shop, job-shop, RCPSP e Constraint Programming — os modelos e algoritmos para otimizar sequenciamento de tarefas e alocação de recursos em manufatura e projecto.</p>

      {/* 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Fundamentos de Scheduling</h2>
        <p style={S.p}>O scheduling consiste em atribuir recursos (máquinas, operadores, salas) a tarefas (jobs, actividades, operações) ao longo do tempo, optimizando um ou mais objectivos. <strong>Ambientes de máquinas:</strong> <em>single machine</em> (1|...|...); <em>parallel machines</em> (P — idênticas, Q — proporcional, R — relacionadas); <em>flow-shop</em> (F — todos os jobs na mesma sequência de máquinas); <em>job-shop</em> (J — cada job com rota própria); <em>open-shop</em> (O — operações podem ser executadas em qualquer ordem).</p>
        <p style={S.p}><strong>Notação de Graham</strong> α|β|γ: α = ambiente de máquinas, β = restrições (r_j release dates, d_j due dates, pmtn preemption, prec precedence, p_j=1 unit processing), γ = objectivo. <em>Objectivos comuns:</em> C_max (makespan — conclusão da última tarefa); ΣC_j (soma dos completion times — flow time); ΣwC_j (weighted); L_max = max(C_j − d_j) (latência máxima); ΣT_j = Σ max(C_j − d_j, 0) (total tardiness); ΣU_j (número de tarefas atrasadas).</p>
        <p style={S.p}><strong>Resultados clássicos:</strong> 1||ΣwC_j: regra SPT ponderada (WSPT) — ordenar por crescente p_j/w_j — óptima. 1|r_j|C_max: SRPT (Shortest Remaining Processing Time) com preemption — óptimo. P||C_max (parallel machines, makespan) é NP-hard para m≥3 mas tem PTAS. 1|pmtn|L_max: EDD (Earliest Due Date) óptimo.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Critical path method (CPM):</strong> Para 1||C_max com precedências, o makespan óptimo é o comprimento do caminho crítico no DAG de precedências — calculado em O(n+m). Slack de uma actividade = tempo mais tarde − tempo mais cedo; actividades no caminho crítico têm slack zero — qualquer atraso nestas atrasa o projecto inteiro.</p>
        </div>
        <div style={S.diagram}>
          <svg viewBox="0 0 640 185" width="100%" style={{display:'block'}}>
            <text x="320" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">Gantt Chart — 4 Jobs em 3 Máquinas, Caminho Crítico a Laranja</text>
            {/* Machine labels */}
            <text x="35" y="65" fill="#94a3b8" fontSize="10" textAnchor="end">M1</text>
            <text x="35" y="105" fill="#94a3b8" fontSize="10" textAnchor="end">M2</text>
            <text x="35" y="148" fill="#94a3b8" fontSize="10" textAnchor="end">M3</text>
            {/* Time axis */}
            <line x1="40" y1="165" x2="600" y2="165" stroke="#475569" strokeWidth="1.2"/>
            {[0,2,4,6,8,10,12,14].map(t=>(
              <g key={t}>
                <line x1={40+t*38} y1="165" x2={40+t*38} y2="170" stroke="#475569" strokeWidth="1"/>
                <text x={40+t*38} y="178" fill="#64748b" fontSize="8" textAnchor="middle">{t}</text>
              </g>
            ))}
            {/* M1 jobs */}
            <rect x="40" y="48" width="76" height="24" rx="3" fill="rgba(249,115,22,0.25)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="78" y="64" fill="#e2e8f0" fontSize="9" textAnchor="middle">J1 (p=2)</text>
            <rect x="116" y="48" width="114" height="24" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="173" y="64" fill="#e2e8f0" fontSize="9" textAnchor="middle">J2 (p=3)</text>
            <rect x="230" y="48" width="76" height="24" rx="3" fill="#f9731640" stroke="#f97316" strokeWidth="1.5"/>
            <text x="268" y="64" fill="#e2e8f0" fontSize="9" textAnchor="middle">J3 (p=2)</text>
            <rect x="306" y="48" width="152" height="24" rx="3" fill="#f59e0b40" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="382" y="64" fill="#e2e8f0" fontSize="9" textAnchor="middle">J4 (p=4)</text>
            {/* M2 jobs */}
            <rect x="40" y="90" width="114" height="24" rx="3" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="97" y="106" fill="#e2e8f0" fontSize="9" textAnchor="middle">J2 (p=3)</text>
            <rect x="154" y="90" width="76" height="24" rx="3" fill="rgba(249,115,22,0.25)" stroke="#f97316" strokeWidth="1.5"/>
            <text x="192" y="106" fill="#e2e8f0" fontSize="9" textAnchor="middle">J1 (p=2)</text>
            <rect x="230" y="90" width="152" height="24" rx="3" fill="#f59e0b40" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="306" y="106" fill="#e2e8f0" fontSize="9" textAnchor="middle">J4 (p=4)</text>
            {/* M3 jobs */}
            <rect x="116" y="133" width="76" height="24" rx="3" fill="#f9731640" stroke="#f97316" strokeWidth="1.5"/>
            <text x="154" y="149" fill="#e2e8f0" fontSize="9" textAnchor="middle">J3 (p=2)</text>
            <rect x="192" y="133" width="190" height="24" rx="3" fill="#f59e0b40" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="287" y="149" fill="#e2e8f0" fontSize="9" textAnchor="middle">J4 (p=5) — critical path</text>
            {/* Critical path highlight */}
            <rect x="306" y="48" width="152" height="24" rx="3" fill="none" stroke="#f97316" strokeWidth="3"/>
            <rect x="230" y="90" width="152" height="24" rx="3" fill="none" stroke="#f97316" strokeWidth="3"/>
            <rect x="192" y="133" width="190" height="24" rx="3" fill="none" stroke="#f97316" strokeWidth="3"/>
          </svg>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Flow-shop e Job-shop</h2>
        <p style={S.p}>No <strong>flow-shop</strong>, todos os jobs seguem a mesma sequência de m máquinas. Para m = 2, o <strong>algoritmo de Johnson</strong> (1954) é óptimo: dividir jobs em dois grupos — A (p1j ≤ p2j) e B (p1j &gt; p2j); sequenciar A por p1j crescente, depois B por p2j decrescente. Para m ≥ 3, o flow-shop é NP-hard. <strong>Heurísticas:</strong> <em>NEH</em> (Nawaz-Enscore-Ham, 1983) — inserção ordenada por soma de processing times decrescente — heurística de referência para F||C_max. <em>Iterated Greedy</em>: destruir parcialmente a sequência NEH e reconstruir iterativamente.</p>
        <p style={S.p}>No <strong>job-shop</strong> (J-shop), cada job tem a sua própria rota pelas máquinas. O <strong>grafo disjuntivo</strong> modela o JSP: <em>arcos conjuntivos</em> ligam operações do mesmo job na ordem correcta; <em>arcos disjuntivos</em> ligam pares de operações que usam a mesma máquina (alternativa: qual job vai primeiro). O makespan óptimo é o comprimento do caminho mais longo no grafo disjuntivo — equivalente ao caminho crítico. O JSP é um dos problemas mais estudados em OR: instâncias benchmark de Fisher & Thompson (1963) ft06 e ft10 foram a pedra de toque por décadas.</p>
        <p style={S.p}><strong>Métodos para JSP:</strong> Branch and bound com lower bounds (LP ou Jackson's preemptive schedule); disjunctive graph com B&B por Carlier & Pinson (1989); shifting bottleneck heurística (Adams, Balas & Zawack, 1988) — sequenciar a máquina gargalo de cada vez; taboo search de Nowicki & Smutnicki (1996) — estado da arte por muitos anos.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>Benchmark JSP:</strong> Instância ft10 (10 jobs × 10 máquinas) demorou 26 anos a ser resolvida a optimizar (1963-1989). Hoje, solvers modernos resolvem ft10 em milissegundos. Instâncias maiores (n=50, m=20) ainda são desafiadoras. CP-SAT resolve muitas instâncias em segundos com modelling directo com NoOverlap.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Resource-Constrained Project Scheduling (RCPSP)</h2>
        <p style={S.p}>O <strong>RCPSP</strong> generaliza o scheduling de projecto: n actividades com durações d_j, relações de precedência (finish-to-start), e K tipos de recursos renováveis com capacidades R_k. Cada actividade j requer r(j,k) unidades do recurso k. O objectivo é minimizar o makespan respeitando precedências e capacidades. O RCPSP é NP-hard e de resolução muito mais difícil que o CPM sem recursos.</p>
        <p style={S.p}><strong>Métodos:</strong> <em>Branch and bound exacto</em> com lower bounds (CP critical path com recursos) — instâncias &gt;30 actividades são difíceis. <em>Priority rules</em>: sequenciar actividades por regras como EFT (Earliest Finish Time), LST (Latest Start Time), MTS (Minimum Total Slack), MSLK — rápidas mas sub-óptimas, usadas em tempo real. <em>Metaheurísticas</em>: algoritmos genéticos com representação por lista de prioridade de actividades (serial SGS — schedule generation scheme), PSO, ALNS com operadores de destruição e reconstrução de schedule.</p>
        <p style={S.p}><strong>Benchmark PSPLIB:</strong> J30 (30 actividades, 4 recursos, 480 instâncias), J60, J120. Muitas instâncias J30 ainda têm soluções óptimas não comprovadas. <strong>Extensões:</strong> <em>MRCPSP</em> (multi-mode) — cada actividade pode ser executada em múltiplos modos (fast/slow, manual/automated) com diferentes durações e recursos; <em>RCPSP/max</em> — time-lags arbitrários (não apenas FS). <strong>Aplicações:</strong> construção civil (Bechtel, Fluor), desenvolvimento de software (sprint planning como RCPSP), R&D pipeline de drug development.</p>
        <div style={S.highlight}>
          <p style={{...S.p, marginBottom:0}}><strong>Serial SGS (Schedule Generation Scheme):</strong> O algoritmo standard para heurísticas RCPSP. Decisão sequência: actividade de índice mais prioritário elegível é agendada o mais cedo possível respeitando precedências e recursos. A qualidade da solução depende da representação da sequência de prioridade — genética opera sobre esta representação.</p>
        </div>
      </div>

      <hr style={S.divider}/>

      {/* 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Constraint Programming para Scheduling</h2>
        <p style={S.p}><strong>Constraint Programming (CP)</strong> é um paradigma de modelação onde se declaram restrições sobre variáveis (inteiras ou de intervalo) e um solver aplica propagação de restrições + search para encontrar soluções. <strong>CP-SAT</strong> (Google OR-Tools) combina CP com SAT solving moderno — estado da arte para scheduling combinatorial. As variáveis de intervalo (<code>IntervalVar</code>) representam tarefas com start, end, duration.</p>
        <p style={S.p}><strong>Constraints globais para scheduling:</strong> <code>AddNoOverlap([intervals])</code> — nenhum par de intervalos se sobrepõe (JSP machine constraint); <code>AddCumulative([intervals], [demands], capacity)</code> — constraint de recursos renováveis (RCPSP); <code>AddCircuit([arcs])</code> — tour Hamiltoniano (TSP/VRP). Python API: <code>model.add_no_overlap(intervals)</code>. A propagação global é muito mais eficiente que decomposição em restrições binárias.</p>
        <p style={S.p}><strong>Hybrid CP-MIP:</strong> usar CP para encontrar soluções feasíveis rapidamente (strong propagation) e MIP para provar optimalidade (bound forte). LCG (Lazy Clause Generation) — geração de cláusulas SAT a partir da propagação — base do CP-SAT. <strong>Casos reais:</strong> Google utiliza CP-SAT para optimizar scheduling de data centers — atribuição de tarefas a máquinas físicas minimizando energia e maximizando utilização. Também usado em scheduling de satélites, air traffic management, e operating room scheduling.</p>
        <div style={S.note}>
          <p style={{...S.p, marginBottom:0}}><strong>CP-SAT vs MIP para scheduling:</strong> CP-SAT tende a ser superior para problemas com muitas restrições de não-sobreposição e sequenciamento (JSP, RCPSP), enquanto MIP é melhor para problemas com objectivos lineares complexos e soluções de relaxação forte. Para problemas práticos de scheduling, CP-SAT com boas search heuristics frequentemente supera Gurobi em tempo de resolução por factor 10-100×.</p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Fundamentos de Scheduling</strong> — scheduling aloca recursos (máquinas, trabalhadores) a jobs ao longo do tempo para optimizar um critério (makespan, lateness, tardiness); notação Graham α|β|γ: machine environment | job characteristics | optimality criterion — Cmax (makespan) é o critério mais comum.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Flow-shop e Job-shop</strong> — flow-shop: todos os jobs seguem a mesma sequência de máquinas — Johnson's rule resolve o caso 2 máquinas em O(n log n); job-shop: cada job tem sequência própria — NP-hard para &gt;2 máquinas; branch and bound e CP são solvers de referência para job-shop.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Resource-Constrained Project Scheduling (RCPSP)</strong> — RCPSP minimiza a duração do projecto sujeito a precedências entre actividades e disponibilidade limitada de recursos; é NP-hard e modela projectos de construção, software e engenharia; Meta-PS e CP-SAT (OR-Tools) são os solvers de referência em competições PSPLIB.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Constraint Programming para Scheduling</strong> — CP modela scheduling com variáveis de intervalo, restrições de sequência (noOverlap), cumulativas (cumulative) e precedência; OR-Tools CP-SAT resolve scheduling complexo com simetrias e restrições globais mais eficientemente que ILP puro em muitos casos práticos.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
