import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Logic';

const C = '#f97316';
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
  diagram: { background: '#0f172a', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function LOG3() {
  return (
    <div style={S.page}>
      <Link to="/logic" style={S.back}>← Lógica & Raciocínio</Link>
      <div style={S.badge}>{modules[2].num} — LÓGICA & RACIOCÍNIO</div>
      <h1 style={S.h1}>{modules[2].title}</h1>
      <p style={S.sub}>{modules[2].subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Prolog — Fundamentos</h2>
        <p style={S.p}>
          <strong>Prolog</strong> (PROgramming in LOGic, Colmerauer & Roussel, Marselha 1972) é a linguagem de programação lógica por excelência. Um programa Prolog é uma base de conhecimento de <em>factos</em> e <em>regras</em> (cláusulas de Horn), e a execução consiste em responder a <em>queries</em> verificando se estas são consequência lógica da base. O motor de inferência usa resolução SLD com unificação e pesquisa em profundidade com retrocesso.
        </p>
        <p style={S.p}>
          Os <strong>termos</strong> em Prolog são: <em>átomos</em> (constantes simbólicas — john, paris, true), <em>números</em> (42, 3.14), <em>variáveis</em> (X, _Qualquer, começam por maiúscula ou _), e <em>estruturas</em> (functor + argumentos — ponto(3,4), data(2024,junho,24)). As <strong>listas</strong> são estruturas recursivas escritas como [H|T] onde H é a cabeça e T é a cauda (também uma lista). A lista [1,2,3] é açúcar sintático para '.'(1,'.'(2,'.'(3,[]))).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 280" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">SLD-tree: ?- member(2, [1,2,3])</text>
            {/* root */}
            <rect x="220" y="32" width="240" height="26" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" rx="5" />
            <text x="340" y="49" textAnchor="middle" fill={C} fontSize="12" fontFamily="monospace">?- member(2, [1,2,3])</text>
            {/* clause 1: member(X,[X|_]) */}
            <rect x="40" y="100" width="230" height="26" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" rx="5" />
            <text x="155" y="117" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace">member(X,[X|_]) — X=2, H=1</text>
            <line x1="300" y1="58" x2="155" y2="100" stroke="#475569" strokeWidth="1.5" />
            <text x="185" y="92" fill="#f87171" fontSize="9">unifica? X=2, H=1 → FALHA</text>
            {/* clause 2: member(X,[_|T]) :- member(X,T) */}
            <rect x="410" y="100" width="240" height="26" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" rx="5" />
            <text x="530" y="117" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace">member(X,[_|T]) T=[2,3]</text>
            <line x1="380" y1="58" x2="530" y2="100" stroke="#475569" strokeWidth="1.5" />
            <text x="460" y="92" fill="#fbbf24" fontSize="9">X=2, _=1, T=[2,3]</text>
            {/* next level from clause2 */}
            <rect x="300" y="170" width="230" height="26" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" rx="5" />
            <text x="415" y="187" textAnchor="middle" fill="#f97316" fontSize="11" fontFamily="monospace">?- member(2,[2,3])</text>
            <line x1="530" y1="126" x2="415" y2="170" stroke="#475569" strokeWidth="1.5" />
            {/* success */}
            <rect x="200" y="235" width="200" height="26" fill="#c2410c" stroke="#fbbf24" strokeWidth="2" rx="5" />
            <text x="300" y="252" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="monospace">SUCESSO ✓  X=2</text>
            <line x1="415" y1="196" x2="300" y2="235" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="340" y="226" fill="#fbbf24" fontSize="9">member(X,[X|_]) unifica X=2,H=2</text>
            {/* fail branch from first */}
            <rect x="30" y="170" width="130" height="26" fill="#450a0a" stroke="#f87171" strokeWidth="1.5" rx="5" />
            <text x="95" y="187" textAnchor="middle" fill="#f87171" fontSize="12" fontFamily="monospace">FALHA ✗</text>
            <line x1="155" y1="126" x2="95" y2="170" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="340" y="272" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">DFS: tenta cláusulas na ordem do programa — backtrack automático se necessário</text>
          </svg>
        </div>

        <p style={S.p}>
          <strong>Aritmética em Prolog</strong> requer o operador especial <em>is/2</em>: <code>X is 3 + 4</code> avalia a expressão aritmética e unifica X com 7. O operador de unificação = não avalia: <code>X = 3 + 4</code> unifica X com o termo estrutural '+'(3,4). Comparações aritméticas: =:= (igual numérico), =\= (diferente), {'<'}, {'>'}, ={'<'}, ={'>'}.
        </p>
        <p style={S.p}>
          <strong>Exemplo — árvores binárias:</strong> <code>inserir(X, nil, no(X,nil,nil)).</code> e <code>inserir(X, no(R,L,D), no(R,L1,D)) :- X {'<'} R, inserir(X,L,L1).</code> e <code>inserir(X, no(R,L,D), no(R,L,D1)) :- X {'>'} R, inserir(X,D,D1).</code> — definição de BST completamente declarativa, funciona tanto para inserção como para verificação.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Operadores definíveis.</strong> Prolog permite definir operadores com :- op(Prioridade, Tipo, Nome). Por exemplo, :- op(700, xfx, é_membro_de). Depois pode-se escrever <code>paris é_membro_de europa</code> em vez de é_membro_de(paris, europa). Esta capacidade de definir DSLs directamente na linguagem é usada extensivamente em meta-intérpretes, processamento de linguagem natural e raciocínio sobre ontologias.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Implementação Warren Abstract Machine (WAM):</strong> o compilador Prolog padrão compila cláusulas para instruções da WAM (David Warren, 1983). A WAM usa registos dedicados (H=heap top, S=structure pointer, P=program pointer, B=choice point, TR=trail), optimizações como first-argument indexing (indexa cláusulas pelo primeiro argumento para evitar backtracking desnecessário) e last-call optimisation (equivalente a tail-call em linguagens funcionais). SWI-Prolog, YAP e ECLiPSe usam WAM.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Backtracking e Cut</h2>
        <p style={S.p}>
          A execução Prolog usa uma <strong>árvore SLD</strong> pesquisada em <em>profundidade primeiro</em> (DFS) da esquerda para a direita. Quando uma cláusula falha (nenhuma cláusula unifica com a meta corrente), o motor <em>retrocede</em> (backtracks) ao choice point mais recente e tenta a próxima alternativa. Esta estratégia é completa para programas que terminam mas pode entrar em ciclo infinito com programas recursivos à esquerda ou relações cíclicas.
        </p>
        <p style={S.p}>
          A <strong>ordem das cláusulas</strong> é semanticamente relevante em Prolog (ao contrário da lógica pura). Cláusulas são tentadas na ordem em que aparecem no ficheiro. Cláusulas mais específicas primeiro evitam backtracking desnecessário. Recursão no final da cláusula (recursão à direita) é eficiente com last-call optimisation; recursão à esquerda causa loop infinito em DFS.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 280" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">4-Rainhas — Backtracking com Restrições</text>
            {/* Grid */}
            {[0,1,2,3].map(row => [0,1,2,3].map(col => (
              <rect key={`${row}-${col}`}
                x={80 + col * 50} y={35 + row * 45}
                width="48" height="43"
                fill={(row + col) % 2 === 0 ? '#1e293b' : '#111827'}
                stroke="var(--card-border)" strokeWidth="1" />
            )))}
            {/* queens placed so far (partial) */}
            {[{ r: 0, c: 0, ok: true }, { r: 1, c: 2, ok: true }, { r: 2, c: 0, ok: false }].map(({ r, c, ok }) => (
              <text key={`q-${r}-${c}`}
                x={80 + c * 50 + 24} y={35 + r * 45 + 28}
                textAnchor="middle" fontSize="22"
                fill={ok ? '#fbbf24' : '#f87171'}>♛</text>
            ))}
            {/* conflict mark */}
            <rect x="80" y="125" width="48" height="43" fill="#7f1d1d44" stroke="#f87171" strokeWidth="2" rx="2" />
            <text x="104" y="152" textAnchor="middle" fill="#f87171" fontSize="10" fontFamily="sans-serif">conflito!</text>
            {/* backtrack arrow */}
            <path d="M 310 150 Q 360 150 360 80 Q 360 35 310 35" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,3" />
            <polygon points="308,28 316,38 306,41" fill="#f97316" />
            <text x="370" y="95" fill="#f97316" fontSize="11" fontFamily="sans-serif">backtrack</text>
            <text x="370" y="110" fill="#f97316" fontSize="10" fontFamily="sans-serif">tenta col 1</text>
            {/* solution tree sketch */}
            <text x="520" y="45" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Soluções totais: 2</text>
            {[
              { cols: [1,3,0,2], label: 'Sol. 1' },
              { cols: [2,0,3,1], label: 'Sol. 2' },
            ].map(({ cols, label }, si) => (
              <g key={si}>
                <text x="500" y={75 + si * 80} fill={C} fontSize="10" fontFamily="sans-serif">{label}</text>
                {cols.map((c, r) => (
                  <text key={r} x={500 + c * 15} y={90 + si * 80 + r * 15} fill="#fbbf24" fontSize="12">♛</text>
                ))}
              </g>
            ))}
            <text x="340" y="268" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Pruning de restrições reduz drasticamente o espaço — sem restrições: 4⁴=256 candidatos</text>
          </svg>
        </div>

        <p style={S.p}>
          O <strong>cut (!)</strong> é um meta-predicado que, quando atingido, elimina todos os choice points criados desde a entrada na cláusula corrente — comprometendo-se com a escolha actual. Um <em>green cut</em> não muda o significado declarativo (só melhora eficiência — e.g., max(X,Y,X) :- X &gt;= Y, !.); um <em>red cut</em> muda a semântica e deve ser usado com cuidado.
        </p>
        <p style={S.p}>
          <strong>Negação como Falha (NAF)</strong> implementa-se com \+Goal (operador built-in): \+Goal é verdadeiro se Goal falha finitely. Baseia-se na <em>hipótese de mundo fechado</em> (Closed World Assumption — CWA): o que não é provável é falso. Diferença da negação clássica: \+mortal(x) pode ser verdadeiro por ausência de conhecimento, não por conhecimento de falsidade. Prolog com \+ implementa a semântica de well-founded parcialmente e não lida bem com negação em recursão mútua.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Tabling (memoização):</strong> SWI-Prolog e XSB suportam tabling via :- table predicado/n. O motor memoriza chamadas e respostas, evitando loops infinitos em recursão mútua e melhorando complexidade de exponencial para polinomial. Tabling implementa a semântica de well-founded (WFS) para programas com negação — o fundamento teórico de Datalog e de muitos analisadores estáticos. Indispensável para análise de programas, parsing de gramáticas ambíguas e raciocínio sobre grafos cíclicos.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>assert/retract — programação dinâmica:</strong> assert(Facto) adiciona factos à base em tempo de execução; retract(Facto) remove. Permitem construir memórias, caches e bases de dados dinâmicas. Mas tornam o programa não-declarativo e difícil de raciocinar sobre. Boa prática: usar assert apenas para meta-programação explícita (e.g., learning, memo) e preferir listas e difference lists para dados temporários.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. CLP e Meta-programação</h2>
        <p style={S.p}>
          <strong>CLP(FD) — Constraint Logic Programming over Finite Domains</strong> estende Prolog com variáveis de domínio e propagadores de restrições. Em vez de gerar-e-testar, as restrições são propagadas eagerly, reduzindo domínios antes de qualquer backtracking. Operadores: #= (igual), #\= (diferente), #{'<'} (menor), #{'>'} (maior), #={'<'}, #={'>'}, in/2 (domínio), ins/2 (domínio de lista), all_different/1 (restrição global).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 230" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="230" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">CLP(FD): X+Y=10, X in 1..5 — propagação de domínios</text>
            {/* Step 1: initial domains */}
            <rect x="20" y="35" width="190" height="80" fill="#111827" stroke="var(--card-border)" rx="6" />
            <text x="115" y="52" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Estado inicial</text>
            <text x="30" y="72" fill={C} fontSize="11" fontFamily="monospace">X ∈ {'{'}1,2,3,4,5{'}'}</text>
            <text x="30" y="90" fill={C} fontSize="11" fontFamily="monospace">Y ∈ {'{'}1..10{'}'}</text>
            <text x="30" y="108" fill="#f97316" fontSize="11" fontFamily="monospace">X + Y = 10</text>
            {/* Step 2: propagate X+Y=10 */}
            <rect x="245" y="35" width="190" height="80" fill="#111827" stroke="var(--card-border)" rx="6" />
            <text x="340" y="52" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Após propagação X+Y=10</text>
            <text x="255" y="72" fill={C} fontSize="11" fontFamily="monospace">X ∈ {'{'}1,2,3,4,5{'}'}</text>
            <text x="255" y="90" fill="#fbbf24" fontSize="11" fontFamily="monospace">Y ∈ {'{'}5,6,7,8,9{'}'}</text>
            <text x="255" y="108" fill="#64748b" fontSize="10" fontFamily="sans-serif">Y=10-X → Y ∈ [5,9]</text>
            {/* Step 3: adicional X >= 3 */}
            <rect x="470" y="35" width="190" height="80" fill="#111827" stroke="var(--card-border)" rx="6" />
            <text x="565" y="52" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Após X #&gt;= 3</text>
            <text x="480" y="72" fill="#fbbf24" fontSize="11" fontFamily="monospace">X ∈ {'{'}3,4,5{'}'}</text>
            <text x="480" y="90" fill="#fbbf24" fontSize="11" fontFamily="monospace">Y ∈ {'{'}5,6,7{'}'}</text>
            <text x="480" y="108" fill="#64748b" fontSize="10" fontFamily="sans-serif">3 soluções restantes</text>
            {/* arrows */}
            <line x1="210" y1="76" x2="238" y2="76" stroke="#475569" strokeWidth="1.5" />
            <polygon points="238,70 248,76 238,82" fill="#475569" />
            <line x1="435" y1="76" x2="463" y2="76" stroke="#475569" strokeWidth="1.5" />
            <polygon points="463,70 473,76 463,82" fill="#475569" />
            {/* Sudoku example */}
            <rect x="20" y="140" width="640" height="72" fill="#111827" stroke="var(--card-border)" rx="6" />
            <text x="30" y="158" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Sudoku em CLP(FD) — código completo:</text>
            <text x="30" y="176" fill={C} fontSize="11" fontFamily="monospace">sudoku(Rows) :- Rows = [R1,R2,...,R9], maplist(domain_(1,9), Rows),</text>
            <text x="30" y="194" fill={C} fontSize="11" fontFamily="monospace">  maplist(all_different, Rows), transpose(Rows, Cols), maplist(all_different, Cols),</text>
            <text x="30" y="207" fill={C} fontSize="11" fontFamily="monospace">  blocos(Rows), maplist(label, Rows).  % ~20 linhas totais</text>
          </svg>
        </div>

        <p style={S.p}>
          <strong>DCG — Definite Clause Grammars</strong> são uma extensão sintáctica de Prolog para parsing declarativo. A regra <code>frase --{'>'} substantivo, verbo.</code> é açúcar para <code>frase(S0,S) :- substantivo(S0,S1), verbo(S1,S).</code> — listas de diferença que representam posições na string. DCGs suportam recursão, alternativas, terminais e não-terminais com contexto. Usadas em NLP, compiladores, e protocolos de comunicação.
        </p>
        <p style={S.p}>
          <strong>Meta-predicados</strong> permitem raciocinar sobre o próprio programa. <em>functor/3</em> decompõe um termo: functor(foo(a,b), foo, 2). <em>arg/3</em> acede a argumentos: arg(1, foo(a,b), a). <em>=../2</em> (univ) converte entre termo e lista: foo(a,b) =.. [foo,a,b]. <em>findall/3</em> colecta todas as soluções: findall(X, primo(X), Primos). <em>bagof/3</em> e <em>setof/3</em> são variantes com agrupamento por variáveis livres. <em>call/N</em> aplica um callable com N argumentos — base de higher-order programming em Prolog.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>SWI-Prolog moderno (2024):</strong> suporte a interoperabilidade com Python via Janus (bidireccional: chamar Python de Prolog e vice-versa), servidor HTTP built-in com library(http), interface para RDF/SPARQL (semweb), threads POSIX nativos, interface C/C++ eficiente. SWI-Prolog tem mais de 700 pacotes no repositório oficial. É usado em sistemas de IA de produção, processamento de texto legal e genómica computacional.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>CLP(R) e CLP(Q):</strong> restrições sobre reais e racionais respectivamente. Permitem resolver equações e inequações lineares exactamente (simplex). Exemplos: planeamento financeiro, geometria computacional, análise de circuitos. CLP(B) — restrições booleanas. CLP(H) — restrições sobre strings (Prolog-String). A família CLP(X) é o paradigma geral: o mesmo motor de pesquisa com diferentes domínios e propagadores.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. ASP e Datalog</h2>
        <p style={S.p}>
          <strong>Answer Set Programming (ASP)</strong> é um paradigma de programação lógica baseado na <em>semântica de modelos estáveis</em> (Gelfond & Lifschitz, 1988). Ao contrário de Prolog (que usa resolução SLD), ASP calcula o conjunto de <em>answer sets</em> (modelos estáveis) de um programa, cada um representando um cenário consistente. ASP suporta negação-por-defeito, disjunção, restrições de integridade e agregação — permitindo raciocínio não-monótono robusto.
        </p>
        <p style={S.p}>
          A ferramenta de referência é <strong>Clingo</strong> (Potassco, Universidade de Potsdam), que combina um grounder (gringo) com um SAT-based solver (clasp). A sintaxe é compacta: <em>regras</em> têm a forma Cabeça :- Corpo. <em>Escolha</em>: <code>{'{'}a ; b{'}'} :- c.</code> gera alternativas. <em>Cardinalidade</em>: <code>1 {'{'}cor(V,R); cor(V,G); cor(V,B){'}'} 1 :- vertice(V).</code> — exactamente uma cor por vértice. <em>Restrições de integridade</em>: <code>:- aresta(U,V), cor(U,C), cor(V,C).</code> — eliminam modelos onde adjacentes têm mesma cor.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 240" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="240" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Prolog vs Datalog vs ASP — comparação de paradigmas</text>
            {/* header */}
            <rect x="10" y="32" width="660" height="26" fill="rgba(249,115,22,0.06)" rx="5" />
            {['Característica', 'Prolog', 'Datalog', 'ASP'].map((h, i) => (
              <text key={i} x={[80, 250, 400, 550][i]} y="49" textAnchor="middle" fill={C} fontSize="12" fontFamily="sans-serif" fontWeight="700">{h}</text>
            ))}
            {[
              ['Terminação', 'Não garantida', 'Garantida', 'Garantida'],
              ['Funções', 'Sim (termos)', 'Não', 'Não (grounded)'],
              ['Negação', 'NAF (CWA)', 'Estratificada', 'Estável (WFS)'],
              ['Recursão mútua + neg.', 'Problemática', 'Estratificada OK', 'Suportada'],
              ['Múltiplos modelos', 'Não (1 derivação)', 'Não', 'Sim (answer sets)'],
              ['Complexidade', 'Semi-decidível', 'PTIME (dados)', 'NP/co-NP'],
              ['Uso principal', 'Programação geral', 'Análise de prog.', 'Raciocínio/Config'],
              ['Ferramentas', 'SWI, YAP, ECLiPSe', 'Soufflé, Doop, LogiQL', 'Clingo, DLV, WASP'],
            ].map((row, ri) => {
              const y = 72 + ri * 21;
              return (
                <g key={ri}>
                  <rect x="10" y={y - 12} width="660" height="20" fill={ri % 2 === 0 ? '#0f172a' : '#0d1117'} rx="3" />
                  {row.map((v, ci) => (
                    <text key={ci} x={[80, 250, 400, 550][ci]} y={y + 2} textAnchor="middle"
                      fill={ci === 0 ? '#94a3b8' : ci === 1 ? '#f97316' : ci === 2 ? '#fbbf24' : '#fbbf24'}
                      fontSize="11" fontFamily={ci === 0 ? 'sans-serif' : 'monospace'}>{v}</text>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>

        <p style={S.p}>
          <strong>Datalog</strong> é um subconjunto de Prolog sem funções e com terminação garantida: como os termos são planos (sem funções), o conjunto de factos deriváveis é finito e calculável por ponto-fixo iterativo. A semântica é o <em>menor modelo de Herbrand</em>, calculado em no máximo |predicados| × |constantes|^max_aridade iterações. É a base de muitos sistemas de análise de programas: <strong>Soufflé</strong> (Oracle/AWS) compila Datalog para C++ paralelo, sendo usado para análise de segurança em Linux, Android e grandes bases de código empresarial.
        </p>
        <p style={S.p}>
          <strong>Doop</strong> (Bravenboer & Smaragdakis, 2009) usa Datalog para análise estática de programas Java — alias analysis, call graph construction, points-to analysis — com precisão e escala impossíveis em frameworks imperativos. <strong>LogiQL</strong> (comercial, LogicBlox) usa Datalog estendido para sistemas OLAP. <strong>QL</strong> (GitHub CodeQL) usa Datalog-like para análise de segurança de código em escala — detecta CVEs automaticamente em repositórios públicos.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Aplicações ASP de referência.</strong> NASA usou ASP para scheduling de observações do Telescópio Espacial Hubble (optimização com milhares de restrições). Diagnóstico de falhas em sistemas de telecomunicações (Siemens). Configuração de produtos em engenharia (BMW, Renault). Raciocínio sobre políticas de acesso em sistemas distribuídos (SeLinux). Geração de planos em jogos de estratégia (Angry Birds AI). Bioinformática: predição de redes de regulação génica.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Programação Lógica Probabilística (PLP):</strong> ProbLog (KU Leuven) estende Prolog com factos probabilísticos: <code>0.3::fumador(ana).</code> Permite calcular probabilidades de queries usando inferência exacta ou aproximada. DeepProbLog integra redes neuronais como predicados probabilísticos. PRISM e cLP permitem parâmetros aprendidos de dados (EM algorithm). PLP é a base formal de sistemas como Google's Knowledge Vault e sistemas de fusão de informação biomédica.
          </p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Prolog — Fundamentos</strong> — linguagem de programação lógica baseada em cláusulas de Horn, unificação e resolução SLD; um programa Prolog é uma base de conhecimento declarativa onde a execução consiste em provar queries por retrocesso automático.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Backtracking e Cut</strong> — a pesquisa DFS com retrocesso é o motor de execução do Prolog; o operador cut (!) elimina escolhas alternativas para ganhar eficiência, enquanto a negação como falha (\+) implementa a hipótese de mundo fechado.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>CLP e Meta-programação</strong> — CLP(FD) estende Prolog com propagação de restrições sobre domínios finitos, reduzindo drasticamente o espaço de pesquisa; os meta-predicados (findall, call/N, functor, =..) permitem raciocinar sobre o próprio programa e implementar higher-order programming.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>ASP e Datalog</strong> — Answer Set Programming usa a semântica de modelos estáveis para raciocínio não-monótono com múltiplas soluções; Datalog é um subconjunto de Prolog com terminação garantida por ponto-fixo, sendo a base de analisadores estáticos como Soufflé e CodeQL.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
