import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const C = '#f97316';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: C, color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: C, borderLeft: `3px solid ${C}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(180,83,9,0.05)`, borderLeft: `3px solid ${C}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '1.25rem' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const ACODiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-primary)' }}>ACO — Ciclo de Deposição e Evaporação de Feromonas</p>
    <svg viewBox="0 0 580 210" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-aco" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={C} /></marker>
        <marker id="arr-green" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>

      {/* Graph nodes */}
      {[{cx:60,cy:100,l:'A'},{cx:200,cy:50,l:'B'},{cx:200,cy:150,l:'C'},{cx:340,cy:100,l:'D'},{cx:480,cy:100,l:'E'}].map(({cx,cy,l})=>(
        <g key={l}>
          <circle cx={cx} cy={cy} r={20} fill={`${C}15`} stroke={C} strokeWidth="1.5"/>
          <text x={cx} y={cy+4} textAnchor="middle" fill={C} fontSize="12" fontWeight="700">{l}</text>
        </g>
      ))}

      {/* Edges with pheromone thickness — A-B thin, A-C thick, C-D thick, B-D thin, D-E thick */}
      <line x1="80" y1="90" x2="182" y2="60" stroke={C} strokeWidth="1" strokeOpacity="0.3"/>
      <text x="130" y="64" fill="var(--text-secondary)" fontSize="8">τ=0.2 (fraco)</text>

      <line x1="80" y1="110" x2="182" y2="142" stroke={C} strokeWidth="5" strokeOpacity="0.7"/>
      <text x="85" y="145" fill={C} fontSize="8" fontWeight="700">τ=3.1 (forte)</text>

      <line x1="218" y1="60" x2="322" y2="92" stroke={C} strokeWidth="1" strokeOpacity="0.3"/>
      <line x1="218" y1="145" x2="322" y2="108" stroke={C} strokeWidth="5" strokeOpacity="0.7"/>

      <line x1="360" y1="100" x2="460" y2="100" stroke={C} strokeWidth="5" strokeOpacity="0.7"/>
      <text x="410" y="92" textAnchor="middle" fill={C} fontSize="8" fontWeight="700">τ=2.8 (forte)</text>

      {/* Ant path */}
      <circle cx={60} cy={100} r={6} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x="60" y="130" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">formiga</text>
      <path d="M 80,106 Q 130,145 178,148" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arr-aco)"/>

      {/* Legend */}
      <rect x="10" y="177" width="560" height="28" rx="6" fill="rgba(180,83,9,0.05)" stroke={`${C}30`} strokeWidth="1"/>
      <line x1="20" y1="189" x2="50" y2="189" stroke={C} strokeWidth="4" strokeOpacity="0.7"/>
      <text x="55" y="193" fill="var(--text-secondary)" fontSize="8">caminho com feromon alto → mais escolhido</text>
      <line x1="260" y1="189" x2="290" y2="189" stroke={C} strokeWidth="1" strokeOpacity="0.4"/>
      <text x="295" y="193" fill="var(--text-secondary)" fontSize="8">caminho com feromon baixo → evaporação dominante → desaparece</text>
    </svg>
  </div>
);

const ACOFormulaExplorer = () => {
  const [sel, setSel] = useState(0);
  const items = [
    {
      name: 'Probabilidade de Transição', color: C,
      formula: String.raw`p(i \to j) = \frac{\tau(i,j)^{\alpha} \cdot \eta(i,j)^{\beta}}{\sum_{k} \left[\tau(i,k)^{\alpha} \cdot \eta(i,k)^{\beta}\right]}`,
      desc: 'A probabilidade de uma formiga no nó i escolher mover para o nó j. Combina o nível de feromonas τ(i,j) com informação heurística η(i,j). Os parâmetros α e β controlam o peso relativo de cada factor.',
      componentes: [
        'τ(i,j) — nível de feromonas na aresta (i,j): memória colectiva das melhores soluções passadas',
        'η(i,j) — informação heurística (visibilidade): tipicamente 1/d(i,j) para TSP — preferir arestas curtas',
        'α — peso das feromonas: α alto → mais exploração da experiência colectiva',
        'β — peso heurístico: β alto → mais ganancioso (prefere arestas localmente boas)',
        'Σₖ — normalização sobre todos os nós k disponíveis (não visitados)',
      ],
    },
    {
      name: 'Actualização de Feromonas', color: '#f97316',
      formula: String.raw`\tau(i,j) \leftarrow (1-\rho)\cdot\tau(i,j) + \sum_{k} \Delta\tau_k(i,j)`,
      desc: 'Após cada ciclo (todas as formigas completam o seu tour), os níveis de feromonas são actualizados. Primeiro evapora-se (multiplica por 1-ρ), depois depositam-se novas feromonas proporcional à qualidade das soluções que usaram cada aresta.',
      componentes: [
        'ρ — taxa de evaporação: ρ alto → feromonas antigas perdem influência rapidamente (exploração); ρ baixo → memória longa (intensificação)',
        '(1-ρ)·τ(i,j) — evaporação: reduz feromonas em todas as arestas; evita estagnação em soluções sub-óptimas',
        'Δτₖ(i,j) — depósito da formiga k: Q/L_k se aresta usada, 0 caso contrário (L_k = comprimento do tour)',
        'Q — constante de escala do depósito (parâmetro de design)',
        'Só as melhores formigas depositam (Ant Colony System): evita convergência prematura',
      ],
    },
    {
      name: 'Evaporação & Estagnação', color: '#f97316',
      formula: String.raw`\tau_{\min} \;\leq\; \tau(i,j) \;\leq\; \tau_{\max} \quad \text{[MMAS: Max-Min AS]}`,
      desc: 'Um problema clássico do ACO é a estagnação: todas as formigas convergem para o mesmo caminho e feromonas noutros caminhos evaporam para zero. Max-Min Ant System (MMAS) limita os níveis de feromonas entre τ_min e τ_max para garantir diversidade.',
      componentes: [
        'Estagnação: quando τ(i,j) de um caminho é tão alto que p(i→j) ≈ 1 — todas as formigas seguem o mesmo caminho',
        'MMAS — τ_min > 0: mesmo arestas não usadas mantêm alguma probabilidade de ser escolhidas',
        'MMAS — τ_max = 1/ρ·f(best): escala automática baseada na melhor solução corrente',
        'Reinicialização de feromonas: quando estagnação detectada, reiniciar τ para τ_max',
        'Só a melhor-da-iteração ou melhor-global deposita → concentra reforço na melhor solução',
      ],
    },
    {
      name: 'Variantes do ACO', color: '#f97316',
      formula: 'AS → ACS → MMAS → ANTS → ...',
      desc: 'O ACO é uma família de algoritmos, não um único algoritmo. O Ant System (AS) original de Dorigo (1992) foi seguido de versões melhoradas que resolvem problemas específicos de convergência, velocidade e qualidade.',
      componentes: [
        'Ant System (AS): original — todas as formigas depositam, actualização global. Simples mas lento',
        'Ant Colony System (ACS): regra de transição pseudo-aleatória, apenas best deposita. Mais eficiente',
        'Max-Min Ant System (MMAS): limita τ ∈ [τ_min, τ_max]. Melhor diversidade, melhores resultados em TSP',
        'Rank-based AS: formigas ordenadas por qualidade; melhor deposita mais. Compromisso AS/ACS',
        'ACO para outros problemas: scheduling (job-shop), routing (VRP), aprendizagem de redes Bayesianas',
      ],
    },
  ];
  const it = items[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>ACO — Fórmulas e Componentes</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? item.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? item.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{item.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${it.color}40` }}>
        {sel < 3 ? (
          <div style={{ background: `${it.color}10`, borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '0.75rem', overflowX: 'auto' }}>
            <BlockMath math={it.formula} />
          </div>
        ) : (
          <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: `${it.color}10`, padding: '0.6rem 1rem', borderRadius: 6, marginBottom: '0.75rem', color: it.color, fontWeight: 700 }}>{it.formula}</div>
        )}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{it.desc}</p>
        {it.componentes.map(c => <div key={c} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.22rem' }}>• {c}</div>)}
      </div>
    </div>
  );
};

export default function CIO10() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 10</div>
        <h1 style={S.h1}>Ant Colony Optimization (ACO)</h1>
        <p style={S.lead}>As formigas reais encontram os caminhos mais curtos entre o formigueiro e a comida sem qualquer coordenação central — usando apenas feromonas. Marco Dorigo formalizou este comportamento emergente em 1992 num algoritmo de optimização surpreendentemente poderoso para problemas combinatórios, especialmente routing e scheduling.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. A Inspiração Biológica</h2>
          <p style={S.p}>Uma colónia de formigas resolve o problema do caminho mais curto através de um mecanismo de feedback positivo indirecto — estigmergia. Cada formiga deposita feromonas no caminho que percorre. Caminhos mais curtos são percorridos mais rapidamente, logo acumulam mais feromonas por unidade de tempo. Outros formigas preferem caminhos com mais feromonas. O ciclo amplifica-se até quase todas as formigas usarem o caminho mais curto.</p>
          <p style={S.p}>A chave é a <strong>evaporação</strong>: feromonas em caminhos menos usados evaporam, prevenindo convergência prematura para caminhos sub-óptimos descobertos cedo. É o mecanismo de "esquecimento" que mantém a diversidade. Sem evaporação, o primeiro caminho descoberto dominaria para sempre.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: `rgba(180,83,9,0.06)`, border: `1px solid rgba(180,83,9,0.2)`, borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: C, marginBottom: '0.5rem' }}>Biologia → Algoritmo</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
                Formiga → Agente/solução candidata<br/>
                Feromon → Memória colectiva das boas soluções<br/>
                Evaporação → Esquecimento gradual (exploração)<br/>
                Depósito → Reforço das boas soluções<br/>
                Colónia → População de soluções paralelas<br/>
                Caminho → Sequência de decisões (aresta por aresta)
              </div>
            </div>
            <div style={{ background: `rgba(180,83,9,0.06)`, border: `1px solid rgba(180,83,9,0.2)`, borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: C, marginBottom: '0.5rem' }}>Quando ACO brilha</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>TSP e variantes (VRP, CVRP)</li>
                <li>Routing em redes (OSPF, routing dinâmico)</li>
                <li>Job-shop scheduling</li>
                <li>Problemas de sequenciamento</li>
                <li>Quando a solução é uma sequência de escolhas num grafo</li>
              </ul>
            </div>
          </div>

          <ACODiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. O Algoritmo — Ant System</h2>
          <p style={S.p}>O Ant System (AS) original de Dorigo é o mais simples da família ACO. Cada formiga constrói uma solução completa (um tour, uma permutação) tomando decisões probabilísticas nó a nó, guiadas pelas feromonas e pela heurística local. No fim de cada ciclo, todas as feromonas evaporam e as melhores formigas depositam novas.</p>

          <div style={S.code}>
            <div style={{ fontWeight: 700, color: C, marginBottom: '0.5rem' }}>Ant System — Pseudocódigo</div>
            <div>1. Inicializar: τ(i,j) ← τ₀ para todos (i,j)  <span style={{ color: 'var(--text-secondary)' }}>// mesmo nível inicial</span></div>
            <div>2. <strong>Repetir</strong> até critério de paragem:</div>
            <div style={{ paddingLeft: '1.5rem' }}>2.1. Para cada formiga k = 1..m:</div>
            <div style={{ paddingLeft: '3rem' }}>Construir tour Tₖ: em cada nó i, escolher j com prob. p(i→j)</div>
            <div style={{ paddingLeft: '3rem' }}>p(i→j) = τ(i,j)^α · η(i,j)^β / Σ [τ(i,k)^α · η(i,k)^β]</div>
            <div style={{ paddingLeft: '3rem' }}>Calcular L_k = comprimento de Tₖ</div>
            <div style={{ paddingLeft: '1.5rem' }}>2.2. Evaporar: τ(i,j) ← (1-ρ) · τ(i,j)  para todos (i,j)</div>
            <div style={{ paddingLeft: '1.5rem' }}>2.3. Depositar: para cada formiga k, para cada aresta (i,j) em Tₖ:</div>
            <div style={{ paddingLeft: '3rem' }}>τ(i,j) ← τ(i,j) + Q/L_k</div>
            <div style={{ paddingLeft: '1.5rem' }}>2.4. Actualizar best se algum L_k &lt; L_best</div>
            <div>3. Retornar best tour</div>
          </div>

          <ACOFormulaExplorer />

          <h3 style={S.h3}>Parâmetros e os Seus Efeitos</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Valores Típicos</th><th style={S.th}>Efeito se aumentar</th><th style={S.th}>Efeito se diminuir</th></tr></thead>
              <tbody>
                {[
                  ['α (peso feromonas)', '1', 'Mais influência das feromonas → intensificação, convergência mais rápida mas risco de estagnação', 'Menos influência → comportamento mais heurístico (como greedy nearest-neighbour)'],
                  ['β (peso heurístico)', '2–5', 'Mais ganancioso localmente → boa qualidade inicial mas pode perder caminhos sub-ótimos localmente', 'Menos guia heurístico → mais aleatório, mais exploratório'],
                  ['ρ (evaporação)', '0.1–0.5', 'Evaporação mais rápida → menor memória, mais exploração', 'Evaporação lenta → mais intensificação, risco de estagnação em soluções sub-ótimas'],
                  ['m (nº formigas)', '10–50', 'Mais formigas → melhor exploração paralela, mas mais computação por ciclo', 'Menos formigas → menos diversidade, convergência mais rápida mas menos robusta'],
                  ['Q (constante depósito)', 'Escala do problema', 'Afecta escala absoluta das feromonas — principalmente relevante face a τ₀', 'Relativo ao problema; calibrar com τ₀'],
                ].map(([p, v, u, d]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: C }}>{p}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td><td style={S.td}>{u}</td><td style={S.td}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. ACO vs PSO vs AG — Comparação</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>ACO</th><th style={S.th}>PSO</th><th style={S.th}>AG</th></tr></thead>
              <tbody>
                {[
                  ['Tipo de problema', 'Combinatório discreto (grafos, sequências)', 'Contínuo (R^n)', 'Ambos (com representação adequada)'],
                  ['Memória colectiva', 'Explícita: matriz de feromonas τ(i,j)', 'Implícita: pbest e gbest de cada partícula', 'Implícita: população e seleção'],
                  ['Construção da solução', 'Incremental (nó a nó, decisão probabilística)', 'Directa (posição = solução)', 'Genómica (crossover + mutação de soluções completas)'],
                  ['Exploração/Exploração', 'Controlado por α, β, ρ', 'Controlado por w, c₁, c₂', 'Controlado por taxa mutação, tamanho torneio'],
                  ['Ponto forte', 'Excelente para routing e scheduling em grafos', 'Simples, bom para funções contínuas suaves', 'Flexível, bom para problemas combinatórios gerais'],
                  ['Ponto fraco', 'Lento para espaços de alta dimensão; requer grafo explícito', 'Fraco para problemas discretos/combinatórios', 'Representação cuidadosa necessária; crossover pode ser destrutivo'],
                ].map(([a, aco, pso, ag]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: C }}>{a}</td><td style={{ ...S.td, color: C }}>{aco}</td><td style={S.td}>{pso}</td><td style={S.td}>{ag}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>ACO e PSO são ambos algoritmos de inteligência de enxames (swarm intelligence), mas com mecanismos muito diferentes: ACO usa comunicação indirecta via ambiente (feromonas — estigmergia); PSO usa comunicação directa entre partículas (velocidades e posições partilhadas).</div>

          <h3 style={S.h3}>ACO Aplicado ao TSP — Exemplo Completo</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: C, marginBottom: '0.5rem', fontSize: '0.85rem' }}>Setup</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
                n = 5 cidades; m = 5 formigas<br/>
                α=1, β=3, ρ=0.3, Q=100<br/>
                τ₀ = 0.5 (inicial uniforme)<br/>
                η(i,j) = 1/d(i,j) (visibilidade)
              </div>
            </div>
            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: C, marginBottom: '0.5rem', fontSize: '0.85rem' }}>Iteração 1 — resultado</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
                Formiga 1: A→C→E→D→B→A, L=120<br/>
                Formiga 2: A→B→D→E→C→A, L=135<br/>
                Formiga 3: A→C→D→E→B→A, L=115 ✓<br/>
                Após evaporação + depósito:<br/>
                τ(A,C) cresce (usada pelas melhores)
              </div>
            </div>
          </div>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>ACO modela a estigmergia das formigas: comunicação indirecta via feromonas no ambiente — não há coordenação central</li>
              <li>Cada formiga constrói uma solução probabilisticamente, guiada por feromonas τ^α (memória colectiva) e heurística η^β (ganância local)</li>
              <li>Evaporação (1-ρ) é essencial: sem ela, o sistema converge prematuramente para o primeiro bom caminho encontrado</li>
              <li>MMAS limita τ ∈ [τ_min, τ_max] para evitar estagnação — é a variante mais eficaz para TSP</li>
              <li>ACO brilha em problemas que se modelam naturalmente como caminho num grafo: TSP, VRP, job-shop, routing em redes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
