import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const ProblemExplorer = () => {
  const [sel, setSel] = useState(0);
  const problems = [
    {
      name: 'Knapsack', color: '#4a9eed',
      s: 'Vectores binários de comprimento n (igual ao número de itens). Cada posição i = 1 se o item i é incluído, 0 caso contrário. Número total de soluções possíveis: 2ⁿ — para n=50, isso é mais de 10¹⁵ possibilidades.',
      f: 'Se o peso total dos itens incluídos não excede a capacidade W, o fitness é o valor total dos itens seleccionados (queremos maximizar). Se o peso total excede W, o fitness é zero (ou uma penalização). Esta é a Regra de Ouro em acção: não se resolve o problema dentro do fitness, simplesmente avalia-se como zero as soluções infeasible.',
      n: 'Bit-flip: para cada solução corrente, os vizinhos são todos os vectores que diferem em exactamente 1 bit. Um vector binário de comprimento n tem exactamente n vizinhos. Vizinhança compacta e completamente conexa — qualquer solução é alcançável a partir de qualquer outra.',
      when: 'Problemas de selecção de itens com restrição de capacidade. Orçamentos, selecção de activos, carregamento de contentores, corte e empacotamento 1D.',
    },
    {
      name: 'TSP', color: '#4a9eed',
      s: 'Permutações de n cidades. Uma permutação [c₁, c₂, ..., cₙ] representa o percurso que visita c₁, depois c₂, ..., cₙ e regressa a c₁. Número total de soluções: (n-1)!/2 — para n=20 cidades, isso é cerca de 6 × 10¹⁶ rotas possíveis.',
      f: 'Distância total percorrida: soma das distâncias entre cidades consecutivas na permutação, incluindo o regresso à cidade inicial. Queremos minimizar. Todas as permutações são soluções válidas (não há infeasibility) — não é necessária penalização.',
      n: '2-opt swap: escolher dois arcos não adjacentes (i→i+1) e (j→j+1) e substituí-los por (i→j) e (i+1→j+1), invertendo o segmento entre eles. Uma solução de n cidades tem O(n²) vizinhos no 2-opt. Vizinhança mais rica que o bit-flip — captura estrutura da rota.',
      when: 'Problemas de routing e sequenciamento. Distribuição logística, circuitos de PCB, DNA sequencing, scheduling com setup time dependente da sequência.',
    },
  ];
  const p = problems[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>As quatro componentes de cada problema</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {problems.map((pr, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 1rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', background: sel === i ? pr.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? pr.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{pr.icon} {pr.name}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {[
          { label: 'S — Espaço de Soluções', val: p.s },
          { label: 'f — Função de Fitness', val: p.f },
          { label: 'N — Vizinhança', val: p.n },
          { label: 'Quando usar', val: p.when },
        ].map(({ label, val }) => (
          <div key={label} style={{ background: 'var(--bg-primary)', border: `1px solid ${p.color}25`, borderRadius: 8, padding: '0.85rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: p.color, textTransform: 'uppercase', marginBottom: '0.4rem' }}>{label}</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.7 }}>{val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const KnapsackDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Knapsack — representação e avaliação</p>
    <svg viewBox="0 0 520 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ks" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
      </defs>
      {/* Items */}
      <text x="95" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">ITENS DISPONÍVEIS</text>
      {[
        { x: 15, label: 'Item 1', v: 'v=4', w: 'w=2', c: '#4a9eed' },
        { x: 70, label: 'Item 2', v: 'v=7', w: 'w=5', c: '#4a9eed' },
        { x: 125, label: 'Item 3', v: 'v=2', w: 'w=1', c: '#4a9eed' },
        { x: 180, label: 'Item 4', v: 'v=9', w: 'w=6', c: '#4a9eed' },
      ].map(({ x, label, v, w, c }) => (
        <g key={x}>
          <rect x={x} y="22" width="46" height="46" rx="6" fill={`${c}15`} stroke={c} strokeWidth="1.5"/>
          <text x={x + 23} y="39" textAnchor="middle" fill={c} fontSize="8" fontWeight="700">{label}</text>
          <text x={x + 23} y="52" textAnchor="middle" fill={c} fontSize="9">{v}</text>
          <text x={x + 23} y="63" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{w}</text>
        </g>
      ))}
      {/* Binary vector */}
      <text x="95" y="90" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">SOLUÇÃO BINÁRIA</text>
      {[
        { x: 15, val: '1', active: true },
        { x: 70, val: '0', active: false },
        { x: 125, val: '1', active: true },
        { x: 180, val: '0', active: false },
      ].map(({ x, val, active }) => (
        <g key={x}>
          <rect x={x + 8} y="96" width="30" height="25" rx="4" fill={active ? 'rgba(74,158,237,0.10)' : 'var(--bg-primary)'} stroke={active ? '#4a9eed' : 'var(--card-border)'} strokeWidth="1.5"/>
          <text x={x + 23} y="113" textAnchor="middle" fill={active ? '#4a9eed' : 'var(--text-secondary)'} fontSize="12" fontWeight="700">{val}</text>
        </g>
      ))}
      {/* Evaluation */}
      <text x="290" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">AVALIAÇÃO</text>
      <rect x="230" y="22" width="130" height="58" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="295" y="42" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Peso total: 2+1 = 3</text>
      <text x="295" y="55" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Capacidade W = 6</text>
      <text x="295" y="68" textAnchor="middle" fill="var(--text-primary)" fontSize="9">3 ≤ 6 → feasible ✓</text>
      <rect x="230" y="88" width="130" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="295" y="106" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">fitness = 4 + 2 = 6</text>

      {/* Bad case */}
      <text x="430" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">CASO INFEASIBLE</text>
      <rect x="370" y="22" width="130" height="58" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="435" y="42" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Itens 1+2+3+4</text>
      <text x="435" y="55" textAnchor="middle" fill="var(--text-primary)" fontSize="9">Peso: 2+5+1+6=14</text>
      <text x="435" y="68" textAnchor="middle" fill="#4a9eed" fontSize="9">14 &gt; 6 → infeasible ✗</text>
      <rect x="370" y="88" width="130" height="28" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="435" y="105" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">fitness = 0 (Regra de Ouro)</text>
    </svg>
  </div>
);

const TSPDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>TSP — representação por permutação e vizinhança 2-opt</p>
    <svg viewBox="0 0 520 140" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-tsp" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#4a9eed" /></marker>
        <marker id="arr-tsp2" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#4a9eed" /></marker>
      </defs>
      {/* Original route */}
      <text x="100" y="12" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">ROTA ORIGINAL [A→B→C→D→E→A]</text>
      <polyline points="45,45 120,30 165,70 140,110 60,100 45,45" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      {[
        { id: 'A', cx: 45, cy: 45, col: '#4a9eed' }, { id: 'B', cx: 120, cy: 30, col: '#38bdf8' }, { id: 'C', cx: 165, cy: 70, col: '#bae6fd' },
        { id: 'D', cx: 140, cy: 110, col: '#0284c7' }, { id: 'E', cx: 60, cy: 100, col: '#e0f2fe' },
      ].map(({ id, cx, cy, col }) => (
        <g key={id}>
          <circle cx={cx} cy={cy} r={10} fill="var(--bg-secondary)" stroke={col} strokeWidth="1.5"/>
          <text x={cx} y={cy + 4} textAnchor="middle" fill={col} fontSize="9" fontWeight="700">{id}</text>
        </g>
      ))}
      <text x="100" y="128" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">distância total: 320km (exemplo)</text>

      {/* 2-opt explanation */}
      <text x="310" y="12" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">DEPOIS DE 2-OPT SWAP</text>
      <polyline points="255,45 330,30 350,110 375,70 270,100 255,45" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5"/>
      {[
        { id: 'A', cx: 255, cy: 45, col: '#4a9eed' }, { id: 'B', cx: 330, cy: 30, col: '#38bdf8' }, { id: 'C', cx: 375, cy: 70, col: '#bae6fd' },
        { id: 'D', cx: 350, cy: 110, col: '#0284c7' }, { id: 'E', cx: 270, cy: 100, col: '#e0f2fe' },
      ].map(({ id, cx, cy, col }) => (
        <g key={id}>
          <circle cx={cx} cy={cy} r={10} fill="var(--bg-secondary)" stroke={col} strokeWidth="1.5"/>
          <text x={cx} y={cy + 4} textAnchor="middle" fill={col} fontSize="9" fontWeight="700">{id}</text>
        </g>
      ))}
      <text x="310" y="128" textAnchor="middle" fill="#4a9eed" fontSize="8">distância total: 280km — 12.5% melhoria!</text>

      {/* Arrow in middle */}
      <path d="M 195,70 L 225,70" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-tsp)"/>
      <text x="210" y="63" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">2-opt</text>
      <text x="210" y="82" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">inverte</text>
      <text x="210" y="91" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">C→D</text>
    </svg>
  </div>
);

export default function CIO4() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Módulo 5</div>
        <h1 style={S.h1}>Modelação de Problemas: Knapsack & TSP</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. As 4 Perguntas — O Framework de Design</h2>
          <p style={S.p}>Qualquer problema de optimização para IC pode ser completamente especificado respondendo a quatro perguntas. Estas perguntas não são independentes — as respostas a S e f influenciam N, e N influencia a eficácia do algoritmo. O processo é iterativo: uma primeira modelação pode revelar problemas que obrigam a rever a representação.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Pergunta</th><th style={S.th}>O que define</th><th style={S.th}>Considerações chave</th><th style={S.th}>Erros comuns</th></tr></thead>
              <tbody>
                {[
                  ['Qual é o espaço de soluções S?', 'O conjunto de todas as soluções candidatas — válidas e inválidas. A representação computacional de cada solução.', 'A representação deve ser (1) expressiva (cobrir todas as soluções), (2) compacta (não redundante), (3) manipulável pelos operadores do algoritmo.', 'Representação demasiado restrita que exclui soluções válidas. Representação que permite soluções inválidas sem mecanismo de tratamento.'],
                  ['Qual é a função de fitness f?', 'O critério de qualidade: atribui um valor numérico a cada solução em S. Define o que "melhor" significa neste problema.', 'Deve reflectir verdadeiramente o objectivo do problema. Deve ser computável eficientemente — é chamada milhares ou milhões de vezes.', 'Penalizações mal calibradas. Resolver o problema dentro do fitness (viola a Regra de Ouro). Fitness que não discrimina bem entre soluções.'],
                  ['Qual é a vizinhança N(x)?', 'Para cada solução x, o conjunto de soluções "próximas" que podem ser atingidas num passo. Define a estrutura local do espaço.', 'Deve ser (1) conexa (qualquer solução acessível), (2) compacta (número de vizinhos manejável), (3) coerente com a representação.', 'Vizinhança demasiado pequena (poucos vizinhos, pesquisa lenta). Vizinhança demasiado grande (computacionalmente inviável). Vizinhança desconexa.'],
                  ['Maximizar ou minimizar?', 'O sentido de optimização: procurar o máximo ou o mínimo de f.', 'Trivialmente interconvertível (maximizar f = minimizar -f), mas importante para os critérios de aceitação e terminação.', 'Inconsistência entre a definição do problema e o operador de selecção/aceitação do algoritmo.'],
                ].map(([q, d, c, e]) => (
                  <tr key={q}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed', fontSize: '0.85rem' }}>{q}</td><td style={S.td}>{d}</td><td style={{ ...S.td, fontSize: '0.83rem' }}>{c}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.83rem' }}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. A Regra de Ouro — Não Resolver no Fitness</h2>
          <p style={S.p}>A Regra de Ouro da modelação é deceptivamente simples: a função de fitness avalia soluções, não as corrige. Quando uma solução viola uma restrição do problema, a resposta correcta é atribuir-lhe um fitness baixo (ou zero, ou uma penalização), não modificar a solução para a tornar válida dentro do cálculo do fitness.</p>
          <p style={S.p}>Porquê esta regra existe? Se o fitness corrige soluções, perde-se informação: o algoritmo nunca aprende que aquela região do espaço de pesquisa é problemática, porque o fitness artificialmente "mascarou" o problema. O gradiente de fitness deixa de reflectir fielmente a topologia real do problema, enganando o algoritmo sobre que direcções são produtivas.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Abordagem errada (viola Regra de Ouro)</th><th style={S.th}>Abordagem correcta (respeita Regra de Ouro)</th></tr></thead>
              <tbody>
                {[
                  ['Knapsack: peso total excede W', 'Remover itens do saco até caber, calcular valor dos restantes.', 'Atribuir fitness = 0. O algoritmo aprende a evitar esta região.'],
                  ['TSP: rota visita cidade duas vezes', 'Remover duplicados e reordenar a permutação antes de calcular.', 'Usar representação por permutação que nunca permite duplicados.'],
                  ['Scheduling: tarefa excede prazo', 'Comprimir ou remover tarefas dentro do cálculo do fitness.', 'Penalização proporcional ao atraso total. O fitness reflete a gravidade.'],
                  ['Bin packing: item não cabe no bin', 'Mover item para o bin seguinte durante a avaliação.', 'Penalizar por número de bins extras necessários. Fitness = bins usados.'],
                ].map(([s, e, c]) => (
                  <tr key={s}><td style={{ ...S.td, fontWeight: 600 }}>{s}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{e}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}>Existe uma excepção legítima à Regra de Ouro: repair operators em AGs avançados, que transformam soluções inválidas em válidas de forma sistemática antes da avaliação. Mas este é um operador explícito, não uma modificação escondida dentro do fitness.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Knapsack Problem — Modelação Completa</h2>
          <p style={S.p}>O Knapsack Problem (problema da mochila) é o problema de optimização combinatória por excelência para aprendizagem de IC: tem um espaço de soluções discreto e finito, uma função de fitness clara com uma restrição natural, e uma vizinhança simples mas eficaz. É NP-difícil (não existe algoritmo polinomial exacto conhecido), tornando-o interessante para heurísticas.</p>
          <p style={S.p}>O enunciado: dados n itens com valores v₁,...,vₙ e pesos w₁,...,wₙ, e uma mochila de capacidade W, seleccionar o subconjunto de itens que maximiza o valor total sem exceder a capacidade. É um problema de selecção binária com restrição de capacidade.</p>

          <KnapsackDiagram />

          <h3 style={S.h3}>Propriedades da Vizinhança Bit-Flip</h3>
          <p style={S.p}>A vizinhança bit-flip é elegante na sua simplicidade: inverte um único bit da solução corrente. Para uma solução de n bits, isto gera exactamente n vizinhos. A vizinhança é completamente conexa — qualquer solução é alcançável a partir de qualquer outra através de uma sequência de no máximo n passos de bit-flip. Esta connectividade garante que nenhuma região do espaço fica isolada, satisfazendo a condição de convergência do SA.</p>
          <p style={S.p}>A vizinhança bit-flip também é natural para AGs: a mutação bit-flip é a operação mais directa. O crossover de pontos (1-ponto, 2-pontos, uniforme) mistura partes de dois vectores binários, explorando a estrutura combinatória do espaço.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Travelling Salesman Problem — Modelação Completa</h2>
          <p style={S.p}>O TSP (problema do caixeiro viajante) é provavelmente o problema de optimização combinatória mais estudado na história da computação. Enunciado: dado um conjunto de n cidades com distâncias entre pares de cidades, encontrar a rota mais curta que visite cada cidade exactamente uma vez e regresse à partida. É NP-difícil, com aplicações directas em logística, distribuição, e sequenciamento.</p>
          <p style={S.p}>A representação por permutação é natural: uma solução é uma lista ordenada de todas as n cidades. Não há soluções infeasible (qualquer permutação é uma rota válida), eliminando a necessidade de penalizações. O fitness é simplesmente a distância total da rota — é o problema mais limpo possível do ponto de vista da modelação.</p>

          <TSPDiagram />

          <h3 style={S.h3}>Por que o 2-opt é superior ao bit-flip para o TSP</h3>
          <p style={S.p}>Se se tentar usar uma vizinhança de troca aleatória de posições (swap de dois elementos da permutação) no TSP, a qualidade da pesquisa é baixa: dois swaps aleatórios têm uma perturbação grande e pouco estruturada na rota. O 2-opt é mais sofisticado: remove dois arcos e reconecta os quatro pontos da única forma alternativa possível, invertendo o segmento entre eles. Esta operação tem significado geométrico directo — resolve cruzamentos de arcos, que são sempre subóptimos.</p>
          <p style={S.p}>A lição: a escolha da vizinhança não é arbitrária. Uma vizinhança que incorpora conhecimento do domínio (como o 2-opt para TSP, que explora a propriedade de que rotas sem cruzamentos são mais curtas) é muito mais eficaz do que uma vizinhança genérica.</p>

          <ProblemExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Comparação das Duas Modelações</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Dimensão</th><th style={S.th}>Knapsack</th><th style={S.th}>TSP</th></tr></thead>
              <tbody>
                {[
                  ['Tipo de espaço', 'Binário: {0,1}ⁿ', 'Permutações: Πₙ'],
                  ['Tamanho do espaço', '2ⁿ (para n=50: ~10¹⁵)', '(n-1)!/2 (para n=20: ~6×10¹⁶)'],
                  ['Soluções infeasible', 'Sim (peso excede W) → penalização', 'Não — todas as permutações são válidas'],
                  ['Sentido da optimização', 'Maximização (valor total)', 'Minimização (distância total)'],
                  ['Vizinhança standard', 'Bit-flip: n vizinhos', '2-opt: O(n²) vizinhos'],
                  ['Connectividade', 'Completamente conexa (n passos)', 'Completamente conexa (~n passos de 2-opt)'],
                  ['Crossover para AGs', 'Crossover binário standard (1-pt, uniforme)', 'CX ou PMX — crossover específico para permutações'],
                  ['Dificuldade escalável', 'Aumenta com n e com densidade do rácio v/w', 'Aumenta exponencialmente com n'],
                ].map(([d, k, t]) => (
                  <tr key={d}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</td><td style={S.td}>{k}</td><td style={S.td}>{t}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

      </div>
    </div>
  );
}
