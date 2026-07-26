import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Logic';

const C = '#4a9eed';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: C, borderLeft: `3px solid ${C}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${C}15`, borderLeft: `3px solid ${C}`, padding: '0.85rem 1.1rem', borderRadius: '0 8px 8px 0', marginBottom: '1rem' },
  note: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '0.85rem 1.1rem', borderRadius: 8, marginBottom: '1rem' },
  p: { color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.85rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.75rem 1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '1rem', overflowX: 'auto', whiteSpace: 'pre' },
};

/* SVG 1: SEND+MORE=MONEY constraint graph */
function SvgCSPGraph() {
  const vars = [
    { id: 'S', x: 80,  y: 65  },
    { id: 'E', x: 220, y: 65  },
    { id: 'N', x: 360, y: 65  },
    { id: 'D', x: 500, y: 65  },
    { id: 'M', x: 80,  y: 185 },
    { id: 'O', x: 220, y: 185 },
    { id: 'R', x: 360, y: 185 },
    { id: 'Y', x: 500, y: 185 },
  ];
  const edges = [
    ['S','E'],['S','N'],['S','D'],['S','M'],['S','O'],['S','R'],['S','Y'],
    ['E','N'],['E','D'],['E','M'],['E','O'],['E','R'],['E','Y'],
    ['N','D'],['N','M'],['N','O'],['N','R'],
    ['D','M'],['D','O'],['D','R'],['D','Y'],
    ['M','O'],['M','R'],['M','Y'],
    ['O','R'],['O','Y'],['R','Y'],
  ];
  const byId = Object.fromEntries(vars.map(v => [v.id, v]));
  return (
    <svg viewBox="0 0 600 265" style={{ width: '100%', display: 'block' }}>
      <rect width="600" height="265" fill="var(--bg-secondary)" rx="8" />
      <text x="300" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Grafo de Restrições — SEND+MORE=MONEY (Crypto-aritmética)
      </text>
      {edges.map((e, i) => {
        const a = byId[e[0]], b = byId[e[1]];
        return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={`${C}28`} strokeWidth="1" />;
      })}
      {vars.map(v => (
        <g key={v.id}>
          <circle cx={v.x} cy={v.y} r="22" fill="var(--bg-secondary)" stroke={C} strokeWidth="2" />
          <text x={v.x} y={v.y - 3} textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="14" fontWeight="700">{v.id}</text>
          <text x={v.x} y={v.y + 12} textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="8">{`{0-9}`}</text>
        </g>
      ))}
      <rect x="140" y="116" width="320" height="20" rx="4" fill={`${C}18`} stroke={`${C}40`} />
      <text x="300" y="128" textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="10" fontWeight="600">
        AllDifferent(S,E,N,D,M,O,R,Y)  +  SEND+MORE=MONEY
      </text>
      <text x="300" y="252" textAnchor="middle" fill="#475569" fontSize="10">
        28 arestas = restrições binárias de diferença; MRV+LCV reduz de 10^8 para ~1000 nós
      </text>
    </svg>
  );
}

/* SVG 2: AC-3 domain pruning trace */
function SvgAC3() {
  const rows = [
    { step: 'Inicial',         x: '{1,2,3,4}', y: '{1,2,3,4}', z: '{1,2,3,4}', note: '—' },
    { step: 'arc(X,Y): X!=Y',  x: '{1,2,3,4}', y: '{1,2,3,4}', z: '{1,2,3,4}', note: 'sem poda' },
    { step: 'arc(Y,Z): Y<Z',  x: '{1,2,3,4}', y: '{1,2,3}',   z: '{2,3,4}',   note: 'Y remove 4; Z remove 1' },
    { step: 'arc(X,Z): X+Y=Z',x: '{1,2}',     y: '{1,2,3}',   z: '{2,3,4}',   note: 'X fica {1,2}' },
    { step: 'arc(Y,Z) rev.',   x: '{1,2}',     y: '{1,2}',     z: '{2,3}',     note: 'Y remove 3; Z remove 4' },
  ];
  return (
    <svg viewBox="0 0 620 238" style={{ width: '100%', display: 'block' }}>
      <rect width="620" height="238" fill="var(--bg-secondary)" rx="8" />
      <text x="310" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Trace AC-3 — Propagação de Domínios (X, Y, Z)
      </text>
      {['Passo','Dom(X)','Dom(Y)','Dom(Z)','Nota'].map((h, i) => {
        const xs = [12, 165, 270, 375, 468];
        return <text key={h} x={xs[i]} y="44" fill={C} fontSize="10" fontWeight="700">{h}</text>;
      })}
      <line x1="10" y1="50" x2="610" y2="50" stroke={`${C}40`} strokeWidth="1" />
      {rows.map((r, ri) => {
        const y = 68 + ri * 30;
        const bg = ri % 2 === 0 ? '#1e293b' : 'transparent';
        return (
          <g key={ri}>
            <rect x="8" y={y - 11} width="604" height="26" fill={bg} rx="3" />
            <text x="12"  y={y + 4} fill="#94a3b8" fontSize="9">{r.step}</text>
            <text x="165" y={y + 4} fill="#7dd3fc" fontSize="9" fontFamily="monospace">{r.x}</text>
            <text x="270" y={y + 4} fill="#4a9eed" fontSize="9" fontFamily="monospace">{r.y}</text>
            <text x="375" y={y + 4} fill="#bae6fd" fontSize="9" fontFamily="monospace">{r.z}</text>
            <text x="468" y={y + 4} fill="#7dd3fc" fontSize="9">{r.note}</text>
          </g>
        );
      })}
      <text x="310" y="225" textAnchor="middle" fill="#475569" fontSize="10">
        Complexidade AC-3: O(e · d³)   —   e arcos, d tamanho máximo do domínio
      </text>
    </svg>
  );
}

/* SVG 3: Blocksworld state space */
function SvgBlocksworld() {
  const drawBlock = (lbl, x, y, color) => (
    <g>
      <rect x={x - 18} y={y - 18} width="36" height="22" rx="3" fill="rgba(74,158,237,0.06)" stroke={color || C} strokeWidth="2" />
      <text x={x} y={y - 4} textAnchor="middle" dominantBaseline="middle" fill={color || C} fontSize="13" fontWeight="700">{lbl}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 580 168" style={{ width: '100%', display: 'block' }}>
      <rect width="580" height="168" fill="var(--bg-secondary)" rx="8" />
      <text x="290" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Blocksworld — Espaço de Estados STRIPS (3 blocos)
      </text>
      {/* Estado inicial: C em baixo, B meio, A no topo */}
      <text x="65" y="40" textAnchor="middle" fill="#64748b" fontSize="9">Estado Inicial</text>
      <line x1="20" y1="128" x2="120" y2="128" stroke="var(--card-border)" strokeWidth="2" />
      {drawBlock('C', 65, 122)}
      {drawBlock('B', 65, 98)}
      {drawBlock('A', 65, 74)}
      {/* Estado intermédio */}
      <text x="280" y="40" textAnchor="middle" fill="#64748b" fontSize="9">Intermédio</text>
      <line x1="220" y1="128" x2="350" y2="128" stroke="var(--card-border)" strokeWidth="2" />
      {drawBlock('A', 255, 122)}
      {drawBlock('B', 315, 122)}
      {drawBlock('C', 315, 98)}
      {/* Estado goal */}
      <text x="475" y="40" textAnchor="middle" fill="#7dd3fc" fontSize="9">Estado Goal</text>
      <line x1="430" y1="128" x2="530" y2="128" stroke="var(--card-border)" strokeWidth="2" />
      {drawBlock('A', 475, 122, '#7dd3fc')}
      {drawBlock('B', 475, 98,  '#7dd3fc')}
      {drawBlock('C', 475, 74,  '#7dd3fc')}
      {/* Setas */}
      <defs>
        <marker id="ar5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={C} />
        </marker>
      </defs>
      <line x1="122" y1="94" x2="215" y2="94" stroke={C} strokeWidth="1.5" markerEnd="url(#ar5)" />
      <text x="168" y="87" textAnchor="middle" fill="#7dd3fc" fontSize="9">Unstack(A,B)</text>
      <line x1="352" y1="94" x2="432" y2="94" stroke={C} strokeWidth="1.5" markerEnd="url(#ar5)" />
      <text x="392" y="87" textAnchor="middle" fill="#7dd3fc" fontSize="9">Stack(C,B)</text>
      <text x="290" y="155" textAnchor="middle" fill="#475569" fontSize="10">
        Planeamento STRIPS — PSPACE-complete no caso geral
      </text>
    </svg>
  );
}

/* SVG 4: A* on 8x8 grid */
function SvgAStar() {
  const walls = new Set(['2,1','2,2','2,3','3,3','4,3','4,4','5,4','5,5']);
  const path  = ['0,0','1,0','2,0','3,0','4,0','5,0','6,0','6,1','6,2','6,3','6,4','6,5','6,6','7,6','7,7'];
  const pathSet = new Set(path);
  const fVal = (c, r) => c + r + (7 - c) + (7 - r);
  const cellSz = 44, ox = 18, oy = 32;
  const cells = [];
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) cells.push({ r, c, k: `${c},${r}` });
  return (
    <svg viewBox="0 0 392 415" style={{ width: '100%', maxWidth: 392, display: 'block', margin: '0 auto' }}>
      <rect width="392" height="415" fill="var(--bg-secondary)" rx="8" />
      <text x="196" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        A* — Grid 8×8, caminho óptimo destacado
      </text>
      {cells.map(({ r, c, k }) => {
        const isWall = walls.has(k);
        const isPath = pathSet.has(k);
        const fill = isWall ? 'var(--card-border)' : isPath ? `${C}35` : '#1e293b';
        return (
          <g key={k}>
            <rect x={ox + c * cellSz} y={oy + r * cellSz} width={cellSz - 2} height={cellSz - 2} fill={fill} rx="3" stroke={`${C}12`} strokeWidth="0.5" />
            {isPath && !isWall && k !== '0,0' && k !== '7,7' && (
              <text x={ox + c * cellSz + cellSz / 2 - 1} y={oy + r * cellSz + cellSz / 2}
                textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="8">
                {`f=${fVal(c, r)}`}
              </text>
            )}
          </g>
        );
      })}
      <circle cx={ox + 0 * cellSz + cellSz / 2 - 1} cy={oy + 0 * cellSz + cellSz / 2 - 1} r="11" fill="#7dd3fc" />
      <text x={ox + 0 * cellSz + cellSz / 2 - 1} y={oy + 0 * cellSz + cellSz / 2 - 1} textAnchor="middle" dominantBaseline="middle" fill="var(--bg-secondary)" fontSize="10" fontWeight="800">S</text>
      <circle cx={ox + 7 * cellSz + cellSz / 2 - 1} cy={oy + 7 * cellSz + cellSz / 2 - 1} r="11" fill="#7dd3fc" />
      <text x={ox + 7 * cellSz + cellSz / 2 - 1} y={oy + 7 * cellSz + cellSz / 2 - 1} textAnchor="middle" dominantBaseline="middle" fill="var(--bg-secondary)" fontSize="10" fontWeight="800">G</text>
      <text x="196" y="406" textAnchor="middle" fill="#475569" fontSize="10">
        cinza=parede  |  vermelho=caminho A*  |  f = g + h  admissível
      </text>
    </svg>
  );
}

export default function LOG5() {
  const mod = modules[4];
  return (
    <div style={S.page}>
      <Link to="/logic" style={S.back}>← Logic</Link>
      <div style={S.badge}>MÓDULO {mod.num}</div>
      <h1 style={S.h1}>{mod.title}</h1>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. CSPs — Teoria e Exemplos</h2>
        <p style={S.p}>
          Um <strong>Constraint Satisfaction Problem</strong> é definido formalmente como a tripla
          <em> CSP = (X, D, C)</em> onde X = {'{X₁,…,Xₙ}'} é o conjunto de variáveis, D = {'{D₁,…,Dₙ}'} os domínios
          associados e C o conjunto de restrições. Uma <em>solução</em> é uma atribuição completa e consistente — cada
          variável tem um valor do seu domínio e nenhuma restrição é violada. CSPs surgem naturalmente em scheduling,
          configuração de produtos, coloração de mapas, VLSI layout e puzzles lógicos.
        </p>
        <div style={S.highlight}>
          <strong>Exemplos canónicos:</strong><br />
          <em>n-Queens:</em> n variáveis Qᵢ com domínio {'{1..n}'}, restrições Qᵢ!=Qⱼ, |Qᵢ−Qⱼ|!=|i−j|.<br />
          <em>Map Coloring Austrália:</em> 7 regiões (WA, NT, SA, Q, NSW, V, T), 3 cores, 9 restrições binárias de adjacência.<br />
          <em>SEND+MORE=MONEY:</em> 8 variáveis S,E,N,D,M,O,R,Y ∈ {'{0..9}'}, AllDifferent + equação aritmética linear de 3 linhas.
        </div>
        <p style={S.p}>
          <strong>Tipos de restrições:</strong> <em>Unárias</em> restringem uma só variável (Xᵢ != 0, Xᵢ ∈ {'{2,4,6}'}).
          <em>Binárias</em> envolvem duas variáveis (Xᵢ != Xⱼ, Xᵢ + Xⱼ ≤ k) — qualquer CSP pode ser transformado num CSP
          binário introduzindo variáveis auxiliares. <em>Globais</em> envolvem número arbitrário de variáveis com semântica
          rica: <strong>AllDifferent</strong> (todos distintos), <strong>Cumulative</strong> (scheduling com recursos),
          <strong>Element</strong> (indexação), <strong>Global Cardinality Constraint</strong>. <em>Soft/weighted</em> permitem
          violações com custo — MAX-CSP maximiza restrições satisfeitas; VCSP (Valued CSP) atribui custo a cada violação e
          minimiza o total.
        </p>
        <p style={S.p}>
          <strong>Backtracking cronológico</strong> é o algoritmo de referência: atribui variáveis sequencialmente e recua
          ao último ponto de decisão quando detecta conflito. No pior caso é exponencial, mas três heurísticas clássicas
          reduzem drasticamente o espaço de pesquisa:
        </p>
        <div style={S.note}>
          <strong>MRV (Minimum Remaining Values / Fail-First):</strong> escolhe a variável com menor domínio restante, antecipando falhas.<br /><br />
          <strong>Degree heuristic:</strong> critério de desempate — prefere a variável com mais restrições sobre variáveis ainda não atribuídas.<br /><br />
          <strong>LCV (Least Constraining Value):</strong> ordena os valores de cada variável pelos que menos eliminam opções nas variáveis vizinhas, preservando flexibilidade futura.
        </div>
        <p style={S.p}>
          Em SEND+MORE=MONEY, combinando MRV + LCV + propagação AC-3, o espaço de pesquisa reduz de 10⁸ para menos de 1000 nós explorados.
          O grafo de restrições abaixo representa as 8 variáveis com a restrição AllDifferent como grafo completo.
        </p>
        <div style={S.diagram}><SvgCSPGraph /></div>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Propagação de Restrições e Arc Consistency</h2>
        <p style={S.p}>
          <strong>Node Consistency (NC-1):</strong> elimina de Dᵢ os valores que violam restrições unárias — O(nd).
          <strong> Arc Consistency (AC-2):</strong> um arco (Xᵢ, Xⱼ) é arc-consistente se ∀a ∈ Dᵢ existe b ∈ Dⱼ
          tal que (a,b) satisfaz Cᵢⱼ. O algoritmo <strong>AC-3</strong> mantém uma fila de arcos e repropaga sempre que
          um domínio é reduzido. Complexidade O(e·d³) onde e = número de arcos e d = tamanho máximo do domínio.
        </p>
        <div style={S.code}>{`AC-3(CSP):
  queue ← { todos os arcos (Xi, Xj) ∈ restrições }
  while queue != ∅:
    (Xi, Xj) ← remove_from(queue)
    if REVISE(Xi, Xj):
      if Di = ∅: return FAILURE          // domínio vazio = sem solução
      for each Xk in VIZINHOS(Xi) \\ {Xj}:
        queue ← queue ∪ { (Xk, Xi) }
  return CSP  // domínios reduzidos

REVISE(Xi, Xj):
  removed ← false
  for each a in Di:
    if not ∃b ∈ Dj : constraint(a, b) satisfeita:
      Di ← Di \\ {a};  removed ← true
  return removed`}</div>
        <div style={S.diagram}><SvgAC3 /></div>
        <p style={S.p}>
          <strong>Path Consistency (PC):</strong> extensão para triplos — qualquer atribuição consistente de duas variáveis
          pode ser estendida a uma terceira. Raramente usada em prática pelo custo O(n³d³).
          <strong> k-Consistency:</strong> qualquer atribuição consistente de k-1 variáveis pode ser estendida a uma k-ésima.
          Strong k-consistency com k = n implica solução sem backtracking, mas o custo de o estabelecer é exponencial em k.
        </p>
        <p style={S.p}>
          <strong>MAC (Maintaining Arc Consistency):</strong> integra AC-3 directamente no loop de backtracking —
          após cada atribuição, propaga arcos. Em benchmarks de coloração de grafos e n-Queens, MAC supera Forward Checking
          em ordens de magnitude. O custo por nó é maior mas o número de nós é exponencialmente menor.
        </p>
        <div style={S.note}>
          <strong>Restrição Global AllDifferent:</strong> propagação eficiente via matching máximo no grafo bipartido
          variáveis ↔ valores (Hopcroft-Karp, O(n²·⁵)). Um valor a ∈ Dᵢ pode ser eliminado se não pertence a nenhum
          matching máximo. <strong>Cumulative(Tasks, Capacity):</strong> para cada instante t, a soma dos recursos das
          tarefas activas em t não excede Capacity. Propagação por edge-finding (O(n log n)) e not-first/not-last rules
          — usada em scheduling industrial e CP-SAT do Google OR-Tools.
        </div>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Planeamento STRIPS e PDDL</h2>
        <p style={S.p}>
          <strong>STRIPS</strong> (Stanford Research Institute Problem Solver, Fikes &amp; Nilsson 1971) é o formalismo
          fundador do planeamento clássico. Um estado é um conjunto de predicados ground verdadeiros sob o pressuposto
          de mundo fechado (o que não está listado é falso). Uma acção é uma tripla (Pre, Add, Del): o planador aplica a
          acção ao estado se Pre ⊆ estado_actual, adicionando Add e removendo Del.
        </p>
        <div style={S.code}>{`Blocksworld — Acções STRIPS completas:

Stack(x, y):
  Pre: On(x,Table) ∧ Clear(x) ∧ Clear(y) ∧ x!=y
  Add: { On(x,y) }
  Del: { On(x,Table), Clear(y) }

Unstack(x, y):
  Pre: On(x,y) ∧ Clear(x) ∧ HandEmpty
  Add: { Holding(x), Clear(y) }
  Del: { On(x,y), Clear(x), HandEmpty }

Pickup(x):
  Pre: On(x,Table) ∧ Clear(x) ∧ HandEmpty
  Add: { Holding(x) }
  Del: { On(x,Table), Clear(x), HandEmpty }

Putdown(x):
  Pre: Holding(x)
  Add: { On(x,Table), Clear(x), HandEmpty }
  Del: { Holding(x) }`}</div>
        <div style={S.diagram}><SvgBlocksworld /></div>
        <p style={S.p}>
          <strong>Complexidade:</strong> planeamento STRIPS com instâncias arbitrárias é PSPACE-complete (Bylander 1994).
          Com n blocos a profundidade ótima pode ser O(n²) e o espaço de estados é n!. Em prática, heurísticas informadas
          tornam instâncias com dezenas de blocos tratáveis. Planeamento ótimo (minimizar comprimento) é NP-completo para
          instâncias propositional.
        </p>
        <p style={S.p}>
          <strong>PDDL</strong> (Planning Domain Definition Language) é o standard da International Planning Competition
          (IPC). PDDL 1.2 corresponde a STRIPS+ADL. <em>PDDL 2.1</em> adicionou <em>durative actions</em> (durações
          explícitas, efeitos em at start / at end / over all) e <em>numerical fluents</em> (variáveis contínuas como
          fuel-level, battery). <em>PDDL 3.0</em> introduziu <em>preferences</em> (restrições soft, minimize violações)
          e <em>trajectory constraints</em> com operadores modais: sometime, always, at-most-once, sometime-before.
        </p>
        <div style={S.note}>
          <strong>HTN (Hierarchical Task Network):</strong> decomposição hierárquica — tarefas compostas são decompostas
          em sub-tarefas via métodos. SHOP2 e PANDA são implementações usadas em robótica e jogos. HTN é mais expressivo
          que STRIPS mas perde completude se não existir método para alguma tarefa composta.<br /><br />
          <strong>Planadores modernos:</strong> Fast Downward (A* + h_FF/h_landmark, vencedor IPC múltiplas vezes);
          Madagascar (codificação em SAT-QBF); ENHSP (planeamento numérico); OPTIC (planeamento temporal+numérico);
          LPG (planeamento local). Todos competem no IPC bianual.
        </div>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Busca Heurística: A* e Monte Carlo Tree Search</h2>
        <p style={S.p}>
          <strong>A*</strong> (Hart, Nilsson &amp; Raphael, 1968) avalia cada nó com <em>f(n) = g(n) + h(n)</em> onde g
          é o custo acumulado do caminho e h a estimativa heurística do custo restante até ao goal. A* expande primeiro
          o nó com menor f — garante optimalidade se h for <em>admissível</em> (nunca sobrestima o custo real h*).
        </p>
        <div style={S.note}>
          <strong>Propriedades formais:</strong><br />
          <em>Admissibilidade:</em> h(n) ≤ h*(n) ∀n ⟹ A* encontra solução ótima.<br />
          <em>Consistência (monotonia):</em> h(n) ≤ c(n,a,n') + h(n') ∀ acção a ⟹ nunca reabre nós ⟹ 15-20% mais eficiente.<br />
          <em>Completude:</em> garantida em grafos finitos ou com custo de acção ≥ ε &gt; 0.<br />
          <em>Optimalidade de nós expandidos:</em> A* expande no mínimo todos os nós com f(n) &lt; f*(solução óptima).
        </div>
        <p style={S.p}>
          <strong>IDA*</strong> (Korf 1985) executa DFS com threshold crescente em f — usa O(bd) memória vs O(bᵈ) do A* clássico.
          Óptimo para puzzles com heurísticas fortes (15-puzzle, Rubik's Cube com pattern databases).
          <strong> Weighted A*</strong> (w &gt; 1): usa f = g + w·h — garante soluções no máximo w-vezes subóptimas e é frequentemente
          10-1000× mais rápido. Usado em robotics motion planning e videojogos onde velocidade supera optimalidade.
        </p>
        <p style={S.p}>
          <strong>Heurísticas para planeamento:</strong> <em>h_FF</em> (Fast-Forward, Hoffmann 2001) resolve um problema
          relaxado ignorando deleções (delete-relaxation) e conta acções do plano relaxado — inadmissível mas fortemente
          informativa. <em>h_landmark</em> identifica factos que devem ser verdadeiros em algum ponto de todo plano válido
          (landmarks) e conta os não-atingidos. LAMA combina h_FF + h_landmark com preferência para planos mais curtos.
        </p>
        <div style={S.diagram}><SvgAStar /></div>
        <p style={S.p}>
          <strong>MCTS (Monte Carlo Tree Search)</strong> prescinde de heurística explícita — usa simulações aleatórias
          (rollouts) para estimar valores. O algoritmo UCT (Kocsis &amp; Szepesvári, 2006) resolve o dilema
          exploração/exploração em árvores:
        </p>
        <div style={S.code}>{`UCT — critério de selecção do nó filho:
  UCT(v) = Q(v)/N(v)  +  c · √( ln N(parent) / N(v) )

  Q(v): soma de recompensas acumuladas a partir de v
  N(v): contagem de visitas a v
  c   : constante de exploração (tipicamente c = √2)

Iteração MCTS (4 fases):
  1. SELECTION   — percorre a árvore com UCT até folha expansível
  2. EXPANSION   — adiciona 1 ou mais filhos ao nó folha
  3. SIMULATION  — rollout aleatório ou guiado até estado terminal
  4. BACKPROP    — actualiza Q(v) e N(v) em todo o caminho percorrido

AlphaGo/AlphaZero:
  — Substitui rollout aleatório por value network v(s) ∈ [-1,1]
  — Policy network π(a|s) guia a expansão (priors nas arestas)
  — Treino por self-play: sem conhecimento humano (AlphaZero)
  — Resultado: nível super-humano em Go (≈10^170 estados)`}</div>
        <div style={S.note}>
          <strong>MCTS vs A*:</strong> A* é óptimo com heurística admissível mas escala mal em espaços de estados
          enormes (Go, xadrez). MCTS escala para espaços gigantes com politicas razoáveis, mas não garante optimalidade
          nem completude. A convergência para a jogada óptima é assintótica (lei dos grandes números).
          AlphaZero combina o melhor dos dois mundos: MCTS para lookahead estruturado + NN para avaliação de posição —
          superando todos os motores simbólicos em Go, xadrez e shogi.
        </div>
      </div>
    </div>
  );
}
