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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const ClassicVsCIDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Método Clássico vs. Inteligência Computacional</p>
    <svg viewBox="0 0 790 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-c" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
        <marker id="arr-r" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
      </defs>
      {/* Classic method */}
      <text x="180" y="22" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">MÉTODO CLÁSSICO</text>
      {[{x:10,l:'Problema',c:'#4a9eed'},{x:130,l:'Análise\nHumana',c:'#4a9eed'},{x:250,l:'Algoritmo',c:'#4a9eed'}].map(({x,l,c},i)=>(
        <g key={i}>
          <rect x={x} y={32} width={90} height={50} rx={8} fill={`${c}15`} stroke={c} strokeWidth="1.5"/>
          {l.split('\n').map((line,j)=><text key={j} x={x+45} y={51+j*16} textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{line}</text>)}
          {i<2&&<line x1={x+90} y1={57} x2={x+128} y2={57} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-c)"/>}
        </g>
      ))}
      <text x="180" y="108" textAnchor="middle" fill="#4a9eed" fontSize="9" fontStyle="italic">passo criativo — falha para problemas complexos</text>

      {/* CI method */}
      <text x="590" y="22" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">INTELIGÊNCIA COMPUTACIONAL</text>
      {[{x:400,l:'Problema',c:'#4a9eed'},{x:530,l:'Solução\nCandidatas',c:'#4a9eed'},{x:660,l:'Avaliação\n(fitness)',c:'#4a9eed'}].map(({x,l,c},i)=>(
        <g key={i}>
          <rect x={x} y={32} width={110} height={50} rx={8} fill={`${c}15`} stroke={c} strokeWidth="1.5"/>
          {l.split('\n').map((line,j)=><text key={j} x={x+55} y={51+j*16} textAnchor="middle" fill={c} fontSize="10" fontWeight="700">{line}</text>)}
          {i<2&&<line x1={x+110} y1={57} x2={x+128} y2={57} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-r)"/>}
        </g>
      ))}
      <text x="590" y="108" textAnchor="middle" fill="#4a9eed" fontSize="9" fontStyle="italic">ciclo automático — computador gera e avalia</text>

      {/* Loop arrow for CI */}
      <path d="M 770,82 Q 770,160 590,172 Q 410,184 410,82" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arr-r)"/>
      <text x="590" y="200" textAnchor="middle" fill="#4a9eed" fontSize="9">iteração: gerar → avaliar → seleccionar → repetir</text>

      <line x1="370" y1="15" x2="370" y2="210" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,2"/>
    </svg>
  </div>
);

const CIFamilyExplorer = () => {
  const [fam, setFam] = useState(0);
  const families = [
    {
      name: 'Algoritmos Evolutivos', color: '#4a9eed',
      inspiracao: 'Teoria da evolução de Darwin: selecção natural, hereditariedade e variação. Populações de soluções "evoluem" ao longo de gerações, com as melhores soluções a ter maior probabilidade de se reproduzir.',
      como: 'Mantêm uma população de soluções candidatas. Em cada geração: avaliam o fitness de cada solução, seleccionam os "pais" com base no fitness, combinam (crossover) e mutam para criar nova geração. O processo repete até convergir.',
      exemplos: ['Algoritmos Genéticos (AGs) — os mais estudados', 'Programação Evolutiva', 'Estratégias de Evolução (ES) — optimização contínua', 'Programação Genética — evolução de programas'],
      quando: 'Problemas combinatórios complexos (TSP, scheduling, design), quando o espaço de pesquisa é muito grande para pesquisa exaustiva e quando soluções aproximadas são aceitáveis.',
    },
    {
      name: 'Inteligência de Enxames', color: '#4a9eed',
      inspiracao: 'Comportamento colectivo de grupos de animais simples: abelhas a procurar comida, pássaros em bando, formigas a encontrar caminhos. Comportamento inteligente emerge da interacção de agentes simples sem coordenação central.',
      como: 'Cada partícula/agente é uma solução candidata que se move pelo espaço de pesquisa. Cada agente recorda a sua melhor posição individual e conhece a melhor posição global do grupo. O movimento é influenciado por ambas as memórias.',
      exemplos: ['Particle Swarm Optimization (PSO) — partículas no espaço contínuo', 'Ant Colony Optimization (ACO) — feromonas para routing', 'Bee Algorithm — abelhas a explorar fontes de néctar', 'Fish School Search'],
      quando: 'Optimização contínua (funções reais), routing e scheduling, quando coordenação descentralizada é vantajosa, problemas de aprendizagem automática.',
    },
    {
      name: 'Pesquisa Local', color: '#4a9eed',
      inspiracao: 'Analogia com um alpinista a subir uma montanha: partindo de um ponto, avalia os vizinhos imediatos e move-se para o melhor. Simulated Annealing acrescenta a ideia de arrefecimento de metais — movimento ocasionalmente "mau" para escapar de mínimos locais.',
      como: 'Começam com uma solução e exploram a sua vizinhança iterativamente. Hill Climbing move-se sempre para melhor. Simulated Annealing aceita pioras com probabilidade decrescente. Tabu Search mantém uma lista de movimentos proibidos para evitar ciclos.',
      exemplos: ['Hill Climbing (steepest ascent, first improvement)', 'Simulated Annealing (SA) — temperatura a diminuir', 'Tabu Search — memória de movimentos recentes', 'Iterated Local Search (ILS)'],
      quando: 'Quando se tem uma boa solução inicial e se quer refiná-la, problemas onde a vizinhança é bem definida, quando o tempo de avaliação do fitness é rápido.',
    },
    {
      name: 'Algoritmos de Estimação de Distribuição', color: '#4a9eed',
      inspiracao: 'Em vez de combinar indivíduos directamente (crossover), aprende a distribuição de probabilidade dos melhores indivíduos e amostra novos a partir dessa distribuição. Elimina os problemas do crossover standard.',
      como: 'Em cada geração: selecciona os melhores indivíduos, constrói um modelo probabilístico (ex: distribuição gaussiana multivariada, rede Bayesiana) que descreve as características partilhadas pelos melhores, e amostra novos indivíduos desse modelo.',
      exemplos: ['UMDA (Univariate Marginal Distribution Algorithm)', 'PBIL (Population-Based Incremental Learning)', 'BOA (Bayesian Optimization Algorithm)', 'CMA-ES (Covariance Matrix Adaptation ES)'],
      quando: 'Problemas de optimização contínua de alta dimensão, quando crossover destrutivo é um problema, quando se quer aprender estrutura do problema automaticamente.',
    },
  ];
  const f = families[fam];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Famílias de Inteligência Computacional para Optimização</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {families.map((fm, i) => (
          <button key={i} onClick={() => setFam(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: fam === i ? fm.color : 'var(--bg-primary)', color: fam === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${fam === i ? fm.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{fm.icon} {fm.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${f.color}40` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <div><span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inspiração biológica</span><p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', margin: '0.2rem 0 0' }}>{f.inspiracao}</p></div>
          <div><span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Como funciona</span><p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', margin: '0.2rem 0 0' }}>{f.como}</p></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div><span style={{ fontSize: '0.72rem', color: f.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Algoritmos desta família</span>{f.exemplos.map(e => <div key={e} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>• {e}</div>)}</div>
          <div><span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quando usar</span><p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>{f.quando}</p></div>
        </div>
      </div>
    </div>
  );
};

export default function CIO1() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Módulo 1</div>
        <h1 style={S.h1}>Fundamentos da Inteligência Computacional</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. As Três Peças do Puzzle</h2>
          <p style={S.p}>Existe uma confusão frequente entre três conceitos fundamentais que convém distinguir desde o início: problema, algoritmo e programa. A clareza sobre cada um é o ponto de partida para qualquer abordagem computacional séria.</p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito</th><th style={S.th}>Definição</th><th style={S.th}>Característica essencial</th><th style={S.th}>Exemplo</th></tr></thead>
              <tbody>
                {[
                  ['Problema', 'Uma tarefa a resolver automaticamente — define o quê, não o como', 'Independente da linguagem, do computador e da estratégia de resolução', 'Encontrar o caminho mais curto entre duas cidades'],
                  ['Algoritmo', 'Um conjunto de acções precisas, não ambíguas, que resolve o problema — a "receita"', 'Finito, determinístico (ou probabilístico), correcto para todas as instâncias', 'Algoritmo de Dijkstra para caminhos mais curtos em grafos'],
                  ['Programa', 'A tradução de um algoritmo para uma linguagem de programação — a implementação', 'Depende da linguagem, compilador, arquitectura; pode ter bugs mesmo com algoritmo correcto', 'Código Python que implementa Dijkstra numa representação de grafo específica'],
                ].map(([c, d, ca, e]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{c}</td><td style={S.td}>{d}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{ca}</td><td style={{ ...S.td, fontSize: '0.83rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>A relação entre os três é hierárquica: o mesmo problema pode ter múltiplos algoritmos (Dijkstra, Bellman-Ford, A* para caminhos mais curtos). O mesmo algoritmo pode ser implementado em múltiplos programas (C++, Python, Java). A qualidade do programa depende da qualidade do algoritmo, que depende de quão bem o problema foi compreendido. Um programa perfeito que implementa um algoritmo errado não resolve nada.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. O Método Computacional Clássico — e as Suas Limitações</h2>
          <p style={S.p}>No método clássico, o fluxo é linear e o passo criativo pertence ao humano: analisa o problema, imagina uma estratégia, formaliza-a como algoritmo, e só depois o computador entra para executar. Este método funciona magnificamente para problemas bem estruturados — ordenar uma lista, calcular um caminho, resolver um sistema linear.</p>

          <ClassicVsCIDiagram />

          <p style={S.p}>O problema surge quando o espaço de soluções é demasiado vasto para raciocínio directo. Considera o Problema do Caixeiro Viajante (TSP) com 50 cidades: o número de rotas possíveis é 50!/2 ≈ 1,5 × 10⁶⁴. Mesmo um computador que avaliasse mil milhões de rotas por segundo levaria mais tempo do que a idade do universo para verificar todas. O método clássico não produz um algoritmo eficiente para este caso — não existe nenhum algoritmo polinomial conhecido para o TSP óptimo.</p>
          <p style={S.p}>Outros casos onde o método clássico falha: problemas onde a função objectivo não é diferenciável (impossível usar cálculo), problemas com múltiplos objectivos conflituantes, problemas cuja estrutura é desconhecida a priori, e problemas de design onde o espaço de soluções é discreto e combinatorial. Em todos estes casos, não é possível "imaginar" um algoritmo directo.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Método Clássico — falha quando:</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Espaço de soluções é exponencialmente grande</li>
                <li>A função objectivo não é diferenciável ou analítica</li>
                <li>Múltiplos objectivos conflituantes sem solução única</li>
                <li>Estrutura do problema desconhecida ou variável</li>
                <li>Nenhum especialista consegue formalizar a estratégia</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Inteligência Computacional — adequada quando:</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <li>Soluções exactas são computacionalmente inviáveis</li>
                <li>Soluções aproximadas de boa qualidade são aceitáveis</li>
                <li>É possível definir uma função de avaliação (fitness)</li>
                <li>O espaço de pesquisa é explorado heuristicamente</li>
                <li>Inspiração em fenómenos naturais (evolução, física)</li>
              </ul>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. A Inversão do Paradigma: Geração vs. Avaliação</h2>
          <p style={S.p}>A ideia central da Inteligência Computacional é uma inversão elegante do método clássico. Em vez de pedir ao humano que pense numa estratégia de resolução, pede-se ao humano apenas que defina como avaliar uma solução — a função de fitness. O computador trata do resto: gera soluções candidatas, avalia-as, e usa essa avaliação para guiar a geração das próximas.</p>
          <p style={S.p}>Esta separação entre geração e avaliação é poderosa porque a avaliação é, em geral, muito mais fácil de formalizar do que a construção. Para o TSP: não sei construir a rota óptima directamente, mas sei calcular o comprimento de qualquer rota (somar as distâncias entre cidades consecutivas). Para design de antenas: não sei calcular a forma óptima, mas sei simular o ganho de qualquer forma proposta. A CI explora sistematicamente o espaço de formas candidatas.</p>

          <div style={S.note}>A regra de ouro que atravessa todo este curso: <strong>a função de fitness deve apenas avaliar uma solução candidata, não tentar construí-la</strong>. O trabalho de resolução é inteiramente delegado ao algoritmo. Incorporar heurísticas gulosas no cálculo do fitness é o erro mais comum e o mais difícil de diagnosticar.</div>

          <h3 style={S.h3}>O Novo Método Computacional com IC</h3>
          <p style={S.p}>O fluxo torna-se: Problema → Definir representação de soluções → Definir função de fitness (avaliar) → Escolher e executar algoritmo de IC → Solução aproximada. Os dois passos cruciais — representação e fitness — são responsabilidade do humano. A exploração do espaço de soluções é responsabilidade do algoritmo. A qualidade do resultado depende criticamente da qualidade da representação e do fitness — algoritmos sofisticados com representação má produzem resultados fracos.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Famílias de Algoritmos de Inteligência Computacional</h2>
          <CIFamilyExplorer />

          <h3 style={S.h3}>Características Comuns a Todos</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Característica</th><th style={S.th}>Descrição</th><th style={S.th}>Implicação prática</th></tr></thead>
              <tbody>
                {[
                  ['Metaheurísticas', 'Estratégias de alto nível para guiar pesquisa heurística — independentes do problema específico', 'O mesmo algoritmo (SA, AG) pode ser aplicado a TSP, Knapsack, scheduling sem mudança de código — apenas muda a representação e o fitness'],
                  ['Stochasticidade', 'Envolvem escolhas aleatórias durante a execução — não são determinísticos', 'Executar duas vezes com mesma instância pode dar soluções diferentes. Necessário executar múltiplas vezes e reportar média e desvio-padrão'],
                  ['Aproximação', 'Não garantem encontrar o óptimo global — produzem boas soluções sem garantia de optimalidade', 'Para problemas NP-difíceis, isto é aceitável — uma solução 98% óptima em segundos é preferível a óptima em milhões de anos'],
                  ['Exploração vs Exploração', 'Trade-off fundamental: explorar regiões novas do espaço vs. explorar regiões promissoras já encontradas', 'Demasiada exploração → convergência prematura; demasiada exploração → não converge. Os parâmetros do algoritmo controlam este trade-off'],
                  ['Inspiração natural', 'Todos têm analogias com fenómenos naturais: evolução, física do arrefecimento, comportamento de enxames', 'A analogia guia a intuição sobre o comportamento do algoritmo, mas os fundamentos matemáticos são o que garante a convergência'],
                ].map(([c, d, i]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{c}</td><td style={S.td}>{d}</td><td style={{ ...S.td, fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{i}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

      </div>
    </div>
  );
}
