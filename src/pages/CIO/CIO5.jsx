import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const GADiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Ciclo de Vida do Algoritmo Genético</p>
    <svg viewBox="0 0 580 130" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ga" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker>
      </defs>
      {[
        { x: 15, label: 'População\nInicial', sub: 'N soluções\naleatórias', c: '#f97316' },
        { x: 130, label: 'Avaliação', sub: 'f(x) para\ncada indivíduo', c: '#fb923c' },
        { x: 245, label: 'Selecção', sub: 'pais com\nmelhor fitness', c: '#fdba74' },
        { x: 360, label: 'Crossover\n+ Mutação', sub: 'nova geração\nde filhos', c: '#f59e0b' },
        { x: 475, label: 'Nova\nPopulação', sub: 'elitismo\noptional', c: '#fed7aa' },
      ].map(({ x, label, sub, c }) => (
        <g key={x}>
          <rect x={x} y="20" width="90" height="55" rx="8" fill={`${c}12`} stroke={c} strokeWidth="1.5"/>
          {label.split('\n').map((l, i) => <text key={i} x={x + 45} y={37 + i * 13} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{l}</text>)}
          {sub.split('\n').map((l, i) => <text key={i} x={x + 45} y={60 + i * 10} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{l}</text>)}
          {x < 475 && <path d={`M ${x + 90},47 L ${x + 115},47`} fill="none" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-ga)"/>}
        </g>
      ))}
      {/* Cycle back arrow */}
      <path d="M 565,75 Q 565,110 40,110 Q 15,110 15,75" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arr-ga)"/>
      <text x="290" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">repete por G gerações ou até critério de paragem</text>
    </svg>
  </div>
);

const SelectionExplorer = () => {
  const [sel, setSel] = useState(0);
  const methods = [
    {
      name: 'Roleta', color: '#f97316',
      how: 'Cada indivíduo tem uma probabilidade de selecção proporcional ao seu fitness. Um indivíduo com fitness 80 tem exactamente o dobro da probabilidade de ser seleccionado que um com fitness 40. Imagina uma roleta onde cada fatia tem tamanho proporcional ao fitness.',
      pros: 'Pressão de selecção natural: os melhores têm mais filhos mas os piores ainda têm hipótese. Mantém diversidade.',
      cons: 'Problema de scaling: se um indivíduo tem fitness muito superior, domina a selecção. Ineficaz com fitness negativos (requer transformação).',
      example: 'População de 4: fitness [80, 40, 20, 60] → probabilidades [40%, 20%, 10%, 30%]. Indivíduo com f=80 é seleccionado 4× mais que f=20.',
    },
    {
      name: 'Torneio', color: '#f97316',
      how: 'Escolher k indivíduos aleatoriamente da população (sem reposição), seleccionar o melhor dos k como progenitor. O parâmetro k (tamanho do torneio) controla a pressão de selecção. Repete para cada progenitor necessário.',
      pros: 'Robusto a escalamento de fitness. Funciona com fitness negativos. Pressão de selecção controlável com k. Eficiente computacionalmente.',
      cons: 'Com k grande, selecção muito agressiva (perda de diversidade). Com k=1, selecção aleatória (sem pressão).',
      example: 'Torneio de tamanho k=3: escolher aleatoriamente os indivíduos A (f=55), C (f=72), E (f=38). Vence C com f=72. Seleccionar C como progenitor.',
    },
    {
      name: 'Rank', color: '#f97316',
      how: 'Ordenar todos os indivíduos pelo fitness, atribuir probabilidades com base no rank (posição) em vez do valor absoluto de fitness. O melhor tem rank n, o pior tem rank 1. Probabilidades proporcionais ao rank.',
      pros: 'Elimina o problema de scaling: a pressão de selecção depende apenas da ordenação, não dos valores absolutos. Funciona bem com fitness muito díspares.',
      cons: 'Perde informação sobre a magnitude das diferenças de fitness. Mais lento (requer ordenação prévia).',
      example: 'Fitness [1000, 5, 4, 2] → Ranks [4, 3, 2, 1] → Probabilidades [40%, 30%, 20%, 10%]. Evita que f=1000 domine completamente.',
    },
  ];
  const m = methods[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Métodos de Selecção</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {methods.map((mt, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? mt.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? mt.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{mt.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${m.color}35` }}>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '0.75rem', color: 'var(--text-primary)' }}><strong>Como funciona:</strong> {m.how}</p>
        <div style={{ background: `${m.color}10`, borderRadius: 6, padding: '0.5rem 0.75rem', marginBottom: '0.6rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontStyle: 'italic' }}><strong>Exemplo:</strong> {m.example}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.83rem' }}>
          <div><strong style={{ color: '#f97316' }}>Vantagem:</strong> <span style={{ color: 'var(--text-secondary)' }}>{m.pros}</span></div>
          <div><strong style={{ color: '#f97316' }}>Limitação:</strong> <span style={{ color: 'var(--text-secondary)' }}>{m.cons}</span></div>
        </div>
      </div>
    </div>
  );
};

const CrossoverExplorer = () => {
  const [sel, setSel] = useState(0);
  const ops = [
    {
      name: '1-Ponto', color: '#f97316',
      desc: 'Escolher aleatoriamente um ponto de corte k entre 1 e n-1. O filho 1 recebe os primeiros k genes do pai 1 e os restantes do pai 2. O filho 2 recebe o inverso. É a operação de crossover mais simples e mais usada historicamente.',
      example: 'Pais: [1 0 1 | 1 0 0 1] e [0 1 0 | 0 1 1 0], ponto k=3 → Filhos: [1 0 1 0 1 1 0] e [0 1 0 1 0 0 1]',
      when: 'Problemas onde genes adjacentes têm dependência: as posições próximas do ponto de corte são preservadas juntas.',
    },
    {
      name: '2-Pontos', color: '#f97316',
      desc: 'Escolher dois pontos de corte k₁ e k₂. O filho herda um segmento central do pai 2 e as extremidades do pai 1 (ou vice-versa). Mais flexível que 1-ponto — consegue preservar blocos do meio do cromossoma.',
      example: 'Pais: [1 0 | 1 1 0 | 0 1] e [0 1 | 0 0 1 | 1 0], pontos k=2,5 → Filhos: [1 0 0 0 1 0 1] e [0 1 1 1 0 1 0]',
      when: 'Problemas onde blocos de genes contíguos representam subsoluções: o segmento central e as extremidades podem ser preservados separadamente.',
    },
    {
      name: 'Uniforme', color: '#f97316',
      desc: 'Para cada posição i, gerar um número aleatório entre 0 e 1. Se menor que p (tipicamente 0.5), o filho recebe o gene do pai 1; caso contrário do pai 2. Cada posição é decidida independentemente — máxima mistura. ',
      example: 'Pais: [1 0 1 1 0 0 1] e [0 1 0 0 1 1 0], máscara: [1 0 1 0 1 0 1] → Filho: [1 1 1 0 1 0 1] (1=herda de pai1, 0=de pai2)',
      when: 'Quando não há estrutura posicional nos genes (posição não implica relação). Maior exploração do espaço, menor exploração de blocos.',
    },
  ];
  const op = ops[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Tipos de Crossover para Cromossomas Binários</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {ops.map((o, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? o.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? o.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{o.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${op.color}35` }}>
        <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{op.desc}</p>
        <div style={{ background: `${op.color}10`, borderRadius: 6, padding: '0.5rem 0.75rem', marginBottom: '0.6rem', fontFamily: 'monospace', fontSize: '0.82rem', color: op.color }}>{op.example}</div>
        <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}><strong>Quando usar:</strong> {op.when}</div>
      </div>
    </div>
  );
};

export default function CIO5() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 5</div>
        <h1 style={S.h1}>Algoritmos Genéticos — Fundamentos</h1>
        <p style={S.lead}>Os Algoritmos Genéticos substituem a perspectiva de uma única solução pela de uma população. Em vez de explorar o espaço um ponto de cada vez, mantêm e evoluem um conjunto diverso de soluções em paralelo. Selecção, crossover e mutação traduzem as pressões evolutivas darwinianas em operadores computacionais.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. De Soluções Únicas a Populações</h2>
          <p style={S.p}>O Hill Climbing e o Simulated Annealing trabalham com uma única solução a cada momento. Os Algoritmos Genéticos (AGs) introduzem um paradigma radicalmente diferente: manter uma população de N soluções em paralelo, fazer evoluir essa população através de gerações, e usar a competição e recombinação entre indivíduos para guiar a pesquisa.</p>
          <p style={S.p}>A motivação biológica é clara: na natureza, a evolução não optimiza um único organismo — optimiza uma população inteira através de gerações. Os organismos mais adaptados ao ambiente têm mais descendentes, transmitindo as suas características. As mutações introduzem variação aleatória. O cruzamento entre indivíduos recombina características de ambos os progenitores, podendo criar combinações superiores a qualquer dos pais.</p>
          <p style={S.p}>A vantagem computacional é o paralelismo implícito: ao manter N soluções, explora-se N regiões diferentes do espaço em simultâneo. O crossover permite transmitir e recombinar blocos de genes (building blocks) que contribuem positivamente para o fitness, mesmo que o algoritmo não saiba explicitamente quais são esses blocos.</p>

          <GADiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Conceito biológico</th><th style={S.th}>Análogo computacional</th><th style={S.th}>Parâmetro / implementação</th></tr></thead>
              <tbody>
                {[
                  ['Indivíduo / Organismo', 'Uma solução candidata (cromossoma)', 'Codificação binária, permutação, real, etc.'],
                  ['Cromossoma', 'Representação computacional da solução', 'Normalmente um vector de comprimento fixo'],
                  ['Gene', 'Um elemento da solução (um bit, um inteiro)', 'Posição no cromossoma'],
                  ['Alelo', 'O valor de um gene', 'Valor do bit/posição (0 ou 1, ou inteiro)'],
                  ['Fitness', 'Adaptação ao ambiente', 'Valor de f(x) — qualidade da solução'],
                  ['Geração', 'Uma iteração do ciclo evolutivo', 'Avaliar + seleccionar + reproduzir toda a população'],
                  ['Selecção natural', 'Os mais aptos têm mais descendentes', 'Operador de selecção (roleta, torneio, rank)'],
                  ['Reprodução sexuada', 'Cruzamento de dois progenitores', 'Operador de crossover (1-ponto, 2-pontos, uniforme)'],
                  ['Mutação', 'Alteração aleatória de genes', 'Operador de mutação (bit-flip com prob. pm)'],
                ].map(([b, c, p]) => (
                  <tr key={b}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{b}</td><td style={S.td}>{c}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Selecção — Quem se Reproduz</h2>
          <p style={S.p}>O operador de selecção decide quais os indivíduos da população actual que se tornam progenitores da próxima geração. É o mecanismo que implementa a pressão selectiva: indivíduos com fitness mais elevado devem ter maior probabilidade de se reproduzir, mas não devem monopolizar a reprodução — seria perda de diversidade.</p>
          <p style={S.p}>O equilíbrio entre exploração (diversidade, explorar novas regiões) e exploração (refinamento, explorar as melhores regiões) depende fortemente do método de selecção e dos seus parâmetros. Pressão de selecção demasiado alta leva à convergência prematura — a população converge rapidamente para os filhos do melhor indivíduo actual, perdendo diversidade. Pressão demasiado baixa leva a uma evolução lenta sem direcção clara.</p>

          <SelectionExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Crossover — Como os Filhos são Criados</h2>
          <p style={S.p}>O crossover (ou recombinação) é o operador central dos AGs — aquilo que os distingue verdadeiramente de outras metaheurísticas. Dado dois progenitores, o crossover cria um ou dois filhos que herdam partes de cada progenitor. A ideia fundamental é que se dois indivíduos diferentes têm ambos fitness elevado, provavelmente têm ambos boas subsoluções (building blocks). O crossover pode combinar esses building blocks para criar um filho melhor que qualquer dos pais.</p>
          <p style={S.p}>O crossover é aplicado com probabilidade pc (tipicamente 0.6 a 0.95). Com probabilidade 1-pc, os filhos são cópias directas dos progenitores (sem recombinação). Um pc muito baixo resulta numa evolução essencialmente por mutação — lenta e menos eficaz. Um pc muito alto pode destruir boas subsoluções que existiam nos progenitores.</p>

          <CrossoverExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Mutação — Introduzir Variação</h2>
          <p style={S.p}>A mutação aplica uma pequena alteração aleatória a um indivíduo. No caso binário, a mutação bit-flip percorre cada gene e, com probabilidade pm, inverte o seu valor. A probabilidade de mutação pm é geralmente muito baixa — tipicamente 1/n (onde n é o comprimento do cromossoma), garantindo que em média 1 gene é mutado por cromossoma.</p>
          <p style={S.p}>O papel da mutação é duplo: (1) recuperar diversidade perdida — se toda a população convergiu e um alelo desapareceu de todas as soluções, apenas a mutação pode reintroduzi-lo; (2) fazer pequenas perturbações locais que podem explorar vizinhanças não cobertas pelo crossover. Com pm muito alta, o AG degenera em pesquisa aleatória — os filhos não herdam características úteis dos pais.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Valor típico</th><th style={S.th}>Efeito se muito baixo</th><th style={S.th}>Efeito se muito alto</th></tr></thead>
              <tbody>
                {[
                  ['N (tamanho da população)', '50–200', 'Pouca diversidade, convergência prematura', 'Alto custo computacional por geração'],
                  ['G (número de gerações)', '100–1000', 'Pouco tempo de evolução, solução imatura', 'Desperdício computacional se já convergiu'],
                  ['pc (prob. crossover)', '0.6–0.95', 'Pouca recombinação, evolução lenta', 'Destruição de bons cromossomas existentes'],
                  ['pm (prob. mutação)', '0.001–0.05 (≈1/n)', 'Perda de diversidade, convergência prematura', 'Pesquisa aleatória, AG ineficaz'],
                  ['k (torneio)', '2–5', 'Pressão de selecção fraca, evolução lenta', 'Pressão excessiva, convergência prematura'],
                ].map(([p, v, l, h]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{l}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{h}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Elitismo</h3>
          <p style={S.p}>O elitismo é uma modificação simples mas poderosa: preservar os k melhores indivíduos da geração actual directamente para a próxima, sem os sujeitar a crossover ou mutação. Com k=1 (elitismo puro), garante-se que o melhor indivíduo nunca é perdido — o AG é monotónico (o melhor fitness nunca decresce ao longo das gerações).</p>
          <p style={S.p}>Sem elitismo, é possível que após uma geração de crossover/mutação, o melhor indivíduo seja destruído — o filho de dois bons pais pode ser pior que ambos. O elitismo elimina este problema ao custo de ligeiramente menor diversidade (k soluções são copiadas directamente). Em prática, k=1 ou k=2 é quase sempre uma melhoria.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>AGs mantêm uma população de N soluções, não uma única. Exploração paralela de N regiões do espaço em cada geração.</li>
              <li>Selecção: roleta (proporcional ao fitness), torneio (melhor de k aleatórios), rank (posição ordinal). Torneio é o mais robusto.</li>
              <li>Crossover com prob. pc: 1-ponto, 2-pontos, ou uniforme. Recombina building blocks dos dois progenitores.</li>
              <li>Mutação com prob. pm ≈ 1/n: bit-flip individual. Recupera diversidade perdida e explora novas regiões.</li>
              <li>Elitismo: copiar os k melhores para a próxima geração. Garante que o melhor fitness nunca decresce.</li>
              <li>Parâmetros típicos: N=100, pc=0.8, pm=1/n, elitismo k=1–2, torneio k=2–3.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
