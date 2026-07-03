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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const HillClimbingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Hill Climbing — comportamento numa fitness landscape</p>
    <svg viewBox="0 0 560 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-hc" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
        <marker id="arr-rr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>
      <polyline points="10,150 60,130 90,100 120,115 150,90 180,60 220,75 250,50 290,30 330,55 360,80 380,60 410,45 450,70 490,100 530,120 550,140" fill="none" stroke="#94a3b8" strokeWidth="2"/>
      <polyline points="10,150 60,130 90,100 120,115 150,90 190,60 220,75 250,50 290,30 330,55 360,80 380,60 410,45 450,70 490,100 530,120 550,140 550,170 10,170" fill="rgba(249,115,22,0.10)" stroke="none"/>
      <circle cx={190} cy={60} r={5} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={190} y={48} textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">ótimo local</text>
      <circle cx={250} cy={50} r={5} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={250} y={38} textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">ótimo local</text>
      <circle cx={410} cy={45} r={6} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={410} y={28} textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">ótimo global</text>
      <circle cx={120} cy={115} r={5} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={115} y={130} textAnchor="middle" fill="#f97316" fontSize="8">início</text>
      <path d="M 125,113 Q 150,80 185,62" fill="none" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-hc)" strokeDasharray="4,2"/>
      <text x={177} y={7} fill="#f97316" fontSize="8" fontWeight="700">× preso!</text>
      <circle cx={340} cy={55} r={5} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={340} y={45} textAnchor="middle" fill="#f97316" fontSize="8">reinício</text>
      <path d="M 345,53 Q 380,48 405,46" fill="none" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-rr)" strokeDasharray="4,2"/>
      <text x={375} y={37} fill="#f97316" fontSize="8" fontWeight="700">encontra global ✓</text>
      <text x={280} y={165} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Random Restart: ao ficar preso, reiniciar de posição aleatória. Pode encontrar o ótimo global.</text>
    </svg>
  </div>
);

const HCVariantExplorer = () => {
  const [v, setV] = useState(0);
  const variants = [
    {
      name: 'Steepest Ascent', color: '#f97316',
      desc: 'Em cada iteração, avalia TODOS os vizinhos da solução corrente e move-se para o melhor (o que mais aumenta o fitness). É uma pesquisa exaustiva da vizinhança completa em cada passo.',
      pros: ['Garante o maior ganho de fitness por passo', 'Comportamento mais determinístico e previsível', 'Menos susceptível a plateaux do que First Improvement'],
      cons: ['Computacionalmente custoso: avalia toda a vizinhança em cada passo', 'Fica preso no mesmo ótimo local que First Improvement', 'Para vizinhanças grandes, pode ser impraticável'],
      quando: 'Quando a avaliação do fitness é rápida e a vizinhança tem dimensão razoável.',
    },
    {
      name: 'First Improvement', color: '#f97316',
      desc: 'Percorre os vizinhos em ordem e move-se para o PRIMEIRO vizinho que melhora o fitness. Não avalia toda a vizinhança — para assim que encontra uma melhoria.',
      pros: ['Muito mais rápido por iteração que Steepest Ascent', 'Pode ser mais eficiente quando vizinhança é grande', 'Bom trade-off velocidade/qualidade em muitos problemas'],
      cons: ['A qualidade da solução final depende da ordem de exploração da vizinhança', 'Pode terminar num ótimo local de pior qualidade que Steepest Ascent', 'Comportamento menos previsível'],
      quando: 'Quando a avaliação do fitness é cara e/ou a vizinhança é muito grande.',
    },
    {
      name: 'Random Restart', color: '#f97316',
      desc: 'Executa Hill Climbing múltiplas vezes, cada vez com um ponto de início aleatório diferente. Quando fica preso num ótimo local, recomeça de um ponto novo. Retorna o melhor ótimo local encontrado em todas as execuções.',
      pros: ['Mitiga significativamente o problema dos ótimos locais', 'Simples de implementar — apenas repete o HC standard', 'Com tempo suficiente, pode encontrar o ótimo global'],
      cons: ['Sem memória entre reinícios — pode revisitar regiões já exploradas', 'Eficiência depende de quantos reinícios são possíveis no tempo disponível'],
      quando: 'É sempre uma boa prática adicionar reinícios ao Hill Climbing base.',
    },
    {
      name: 'Stochastic HC', color: '#f97316',
      desc: 'Em vez de escolher o melhor vizinho, escolhe um vizinho aleatoriamente e move-se para ele se melhorar o fitness. Ignora-o se não melhorar. Precursor conceptual do Simulated Annealing.',
      pros: ['Mais diversidade no caminho percorrido', 'Precursor conceptual do Simulated Annealing', 'Pode escapar de regiões com gradiente fraco'],
      cons: ['Mais lento a convergir que Steepest ou First Improvement', 'Menos eficiente em paisagens suaves'],
      quando: 'Situações onde diversidade de exploração é valiosa.',
    },
  ];
  const vr = variants[v];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Variantes de Hill Climbing</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {variants.map((vn, i) => (<button key={i} onClick={() => setV(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: v === i ? vn.color : 'var(--bg-primary)', color: v === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${v === i ? vn.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{vn.name}</button>))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${vr.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{vr.desc}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <div><span style={{ fontSize: '0.72rem', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vantagens</span>{vr.pros.map(p => <div key={p} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>✓ {p}</div>)}</div>
          <div><span style={{ fontSize: '0.72rem', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limitações</span>{vr.cons.map(c => <div key={c} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>✗ {c}</div>)}</div>
        </div>
        <div style={{ fontSize: '0.83rem', color: vr.color, fontWeight: 600, borderTop: `1px solid ${vr.color}20`, paddingTop: '0.5rem' }}>Usar quando: {vr.quando}</div>
      </div>
    </div>
  );
};

const SADiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Simulated Annealing — aceitar pioras para escapar</p>
    <svg viewBox="0 0 560 175" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-sa" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>
      <polyline points="20,140 60,110 90,80 120,95 155,65 190,85 220,50 260,25 300,50 330,80 360,55 400,35 440,65 480,100 520,130 550,145" fill="none" stroke="#94a3b8" strokeWidth="2"/>
      <polyline points="20,140 60,110 90,80 120,95 155,65 190,85 220,50 260,25 300,50 330,80 360,55 400,35 440,65 480,100 520,130 550,145 550,165 20,165" fill="rgba(249,115,22,0.10)" stroke="none"/>
      <circle cx={90} cy={80} r={5} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={75} y={72} fill="#f97316" fontSize="8" fontWeight="700">início</text>
      <path d="M 95,78 Q 120,75 150,67" fill="none" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-sa)"/>
      <circle cx={155} cy={65} r={5} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={155} y={53} textAnchor="middle" fill="#f97316" fontSize="8">ótimo local</text>
      <path d="M 160,67 Q 175,85 186,83" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arr-sa)"/>
      <text x={175} y={100} textAnchor="middle" fill="#f97316" fontSize="8">piora aceite!</text>
      <text x={175} y={110} textAnchor="middle" fill="#f97316" fontSize="7">(prob. e^-Δf/T)</text>
      <path d="M 195,82 Q 225,55 255,27" fill="none" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-sa)"/>
      <circle cx={260} cy={25} r={6} fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x={260} y={13} textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">ótimo global!</text>
      <rect x="20" y="152" width="530" height="8" rx="4" fill="url(#tempGrad)"/>
      <defs>
        <linearGradient id="tempGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      <text x="20" y="170" fill="#f97316" fontSize="8">T alto — aceita muitas pioras</text>
      <text x="550" y="170" textAnchor="end" fill="var(--text-secondary)" fontSize="8">T baixo — só aceita melhorias</text>
    </svg>
  </div>
);

export default function CIO3() {
  const [cs, setCs] = useState(0);
  const coolings = [
    { name: 'Geométrico', color: '#f97316', formula: 'T(t+1) = α × T(t), com 0.8 ≤ α ≤ 0.99', desc: 'A temperatura decresce em cada iteração multiplicada por um factor α entre 0 e 1. É o cooling schedule mais usado em prática pela sua simplicidade e boa performance. Alpha próximo de 1 (ex: 0.99) arrefece devagar — mais exploração. Alpha mais baixo (ex: 0.85) arrefece rápido — menos exploração.', pros: 'Simples, intuitivo, um único parâmetro. Boa performance na maioria dos problemas.', cons: 'Pode arrefecer demasiado rápido (alpha pequeno) ou demasiado devagar (alpha próximo de 1).' },
    { name: 'Linear', color: '#f97316', formula: 'T(t) = T₀ − β × t, onde β = (T₀ − T_min) / iterações', desc: 'A temperatura decresce linearmente por um valor fixo β em cada iteração. Menos flexível que o geométrico — arrefece uniformemente independentemente do estado actual do algoritmo.', pros: 'Previsível — sabe-se exactamente quando termina e qual a temperatura em cada passo.', cons: 'Desce igualmente rápido no início (quando temperatura alta é útil) e no fim (quando devia ser lenta).' },
    { name: 'Logarítmico', color: '#f97316', formula: 'T(t) = c / log(1 + t)', desc: 'O único cooling schedule que garante convergência teórica para o ótimo global (com probabilidade 1). A temperatura desce muito lentamente. Na prática, é demasiado lento para ser útil na maioria dos problemas reais.', pros: 'Convergência teórica garantida para o ótimo global.', cons: 'Praticamente inviável — requer um número astronomicamente grande de iterações para convergir.' },
    { name: 'Adaptativo', color: '#f97316', formula: 'T ajustado com base na taxa de aceitação de pioras', desc: 'A temperatura é ajustada dinamicamente com base no comportamento do algoritmo. Se a taxa de aceitação de pioras é demasiado alta, arrefece. Se é demasiado baixa, aquece ligeiramente.', pros: 'Mais robusto a variações no problema. Adapta-se automaticamente sem calibração manual de α.', cons: 'Mais complexo de implementar. O critério de adaptação é um parâmetro adicional a calibrar.' },
  ];
  const c = coolings[cs];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 3</div>
        <h1 style={S.h1}>Hill Climbing & Simulated Annealing</h1>
        <p style={S.lead}>Hill Climbing é o algoritmo de pesquisa local mais simples — e o mais fácil de ficar preso. O Simulated Annealing resolve o problema dos ótimos locais com um mecanismo inspirado na física: aceitar pioras com probabilidade decrescente, como um metal a arrefecer.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. Hill Climbing — O Algoritmo de Pesquisa Local</h2>
          <p style={S.p}>Hill Climbing começa com uma solução inicial, avalia a vizinhança, e move-se iterativamente para soluções melhores até não encontrar nenhuma melhoria possível. É análogo a um alpinista que, numa noite sem visibilidade, sobe sempre para o terreno mais alto que consegue sentir com os pés.</p>
          <p style={S.p}>O algoritmo é trivial de implementar e surpreendentemente eficaz para problemas com paisagens de fitness suaves (poucos ótimos locais). A sua limitação fundamental é terminar no primeiro ótimo local encontrado — que pode estar muito longe do ótimo global numa paisagem rugosa.</p>

          <HillClimbingDiagram />

          <h3 style={S.h3}>Pseudocódigo do Hill Climbing Standard</h3>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', marginBottom: '1.5rem', fontSize: '0.88rem', lineHeight: 2, color: 'var(--text-primary)' }}>
            <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#f97316' }}>Hill Climbing (maximização)</div>
            <div style={{ paddingLeft: '1rem' }}>1. Gerar solução inicial x ∈ S (aleatória ou heurística)</div>
            <div style={{ paddingLeft: '1rem' }}>2. <strong>Repetir:</strong></div>
            <div style={{ paddingLeft: '2rem' }}>2.1. y ← melhor solução em N(x) com f(y) &gt; f(x) [Steepest]</div>
            <div style={{ paddingLeft: '2rem' }}>     ou y ← primeiro vizinho em N(x) com f(y) &gt; f(x) [First Improvement]</div>
            <div style={{ paddingLeft: '2rem' }}>2.2. Se existe y: x ← y (aceitar melhoria)</div>
            <div style={{ paddingLeft: '2rem' }}>2.3. Senão: <strong>parar</strong> (ótimo local atingido)</div>
            <div style={{ paddingLeft: '1rem' }}>3. Retornar x</div>
          </div>

          <HCVariantExplorer />

          <h3 style={S.h3}>Problemas do Hill Climbing Standard</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Problema</th><th style={S.th}>Descrição</th><th style={S.th}>Quando ocorre</th><th style={S.th}>Mitigação</th></tr></thead>
              <tbody>
                {[
                  ['Ótimos locais', 'O algoritmo para numa solução que é melhor que todos os seus vizinhos, mas não é o melhor global', 'Sempre que a paisagem tem múltiplos picos — ubíquo em problemas combinatórios reais', 'Random Restart, Simulated Annealing, Algoritmos Genéticos'],
                  ['Plateaux', 'Região plana da paisagem onde todos os vizinhos têm o mesmo fitness — nenhuma direcção é melhor', 'Problemas com muitas soluções de qualidade igual, TSP com simetrias', 'Random walk limitado no plateau, expandir vizinhança temporariamente'],
                  ['Cristas', 'Região com melhoria em diagonal mas não em nenhuma direcção da vizinhança standard', 'Quando a vizinhança definida não captura a estrutura do problema', 'Redefinir vizinhança, usar moves de maior granularidade'],
                  ['Sensibilidade à solução inicial', 'Soluções iniciais diferentes levam a ótimos locais diferentes', 'Sempre — é uma propriedade fundamental da pesquisa local', 'Random Restart com múltiplas inicializações, Population-based methods'],
                ].map(([p, d, q, m]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td><td style={S.td}>{d}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{q}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.83rem' }}>{m}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Simulated Annealing — A Ideia Central</h2>
          <p style={S.p}>O Simulated Annealing (SA) foi introduzido por Kirkpatrick, Gelatt e Vecchi em 1983, inspirado no processo físico de recozimento de metais: um metal aquecido a alta temperatura tem os seus átomos em estados altamente energéticos e caóticos. À medida que arrefece lentamente, os átomos encontram configurações de baixa energia — o estado cristalino óptimo. Se o arrefecimento for demasiado rápido, ficam presos em configurações metaestáveis.</p>
          <p style={S.p}>A analogia com optimização é directa: a temperatura controla a probabilidade de aceitar pioras. Com temperatura alta, o SA aceita frequentemente soluções piores, permitindo exploração ampla do espaço de pesquisa. À medida que a temperatura diminui, aceita cada vez menos pioras, convergindo gradualmente para uma solução de boa qualidade.</p>

          <SADiagram />

          <h3 style={S.h3}>A Fórmula de Aceitação — O Coração do SA</h3>
          <p style={S.p}>Seja x a solução corrente e y um vizinho escolhido aleatoriamente. Se f(y) &gt; f(x) (y é melhor), aceita-se sempre. Se f(y) ≤ f(x) (y é pior), aceita-se com probabilidade:</p>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(249,115,22,0.10)', borderRadius: 8, padding: '1rem', textAlign: 'center', margin: '1rem 0' }}>
            <div style={{ fontSize: '1.2rem', fontFamily: 'serif', color: '#f97316', fontWeight: 700 }}>P(aceitar) = e^(−|Δf| / T)</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>onde Δf = f(y) − f(x) &lt; 0 (piora) e T é a temperatura actual</div>
          </div>
          <p style={S.p}>Esta fórmula tem três propriedades elegantes: (1) Pioras pequenas têm probabilidade alta de aceitação. (2) Pioras grandes têm probabilidade quase nula. (3) Com T → 0 o SA degenera em Hill Climbing; com T → ∞ degenera em pesquisa aleatória.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Temperatura T</th><th style={S.th}>P(aceitar piora Δf = −10)</th><th style={S.th}>Comportamento</th></tr></thead>
              <tbody>
                {[
                  ['T = 100', 'e^(−0.1) ≈ 0.905', 'Aceita quase tudo — exploração ampla, quase aleatório'],
                  ['T = 10',  'e^(−1) ≈ 0.368',   'Aceita ~37% das pioras — equilíbrio exploração/refinamento'],
                  ['T = 1',   'e^(−10) ≈ 0.000045', 'Raramente aceita pioras — comportamento próximo de Hill Climbing'],
                  ['T = 0.1', 'e^(−100) ≈ 0',      'Nunca aceita pioras — idêntico a Hill Climbing'],
                ].map(([t, p, b]) => (
                  <tr key={t}><td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316', fontWeight: 600 }}>{t}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.83rem' }}>{p}</td><td style={S.td}>{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Cooling Schedule — Como Reduzir a Temperatura</h2>
          <p style={S.p}>O cooling schedule define como a temperatura T decresce ao longo das iterações. É o parâmetro mais crítico do SA — um arrefecimento demasiado rápido leva a convergência prematura (fica preso em ótimo local como o HC). Um arrefecimento demasiado lento desperdiça tempo computacional em alta temperatura onde o comportamento é quasi-aleatório.</p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Tipos de Cooling Schedule</p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {coolings.map((cl, i) => (<button key={i} onClick={() => setCs(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: cs === i ? cl.color : 'var(--bg-primary)', color: cs === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${cs === i ? cl.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{cl.name}</button>))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${c.color}40` }}>
              <div style={{ background: `${c.color}10`, border: `1px solid ${c.color}25`, borderRadius: 6, padding: '0.5rem 0.75rem', marginBottom: '0.75rem', fontFamily: 'monospace', fontSize: '0.88rem', color: c.color }}>{c.formula}</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{c.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.83rem' }}>
                <div><strong style={{ color: '#f97316' }}>Vantagem:</strong> <span style={{ color: 'var(--text-secondary)' }}>{c.pros}</span></div>
                <div><strong style={{ color: '#f97316' }}>Limitação:</strong> <span style={{ color: 'var(--text-secondary)' }}>{c.cons}</span></div>
              </div>
            </div>
          </div>

          <h3 style={S.h3}>Convergência do SA</h3>
          <p style={S.p}>O Teorema de Convergência Assimptótica do SA garante que o algoritmo converge para o ótimo global com probabilidade 1 — mas apenas sob duas condições: o cooling schedule logarítmico (T(t) = c/log(1+t), impraticavelmente lento) e a vizinhança deve ser completamente conexa (qualquer solução acessível a partir de qualquer outra por uma sequência de passos unitários).</p>
          <p style={S.p}>Na prática, usa-se cooling geométrico com temperatura inicial suficientemente alta (cerca de 70-80% das pioras aceites no início) e temperatura final próxima de zero. O número de iterações por nível de temperatura e o critério de paragem são outros parâmetros a afinar.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>Hill Climbing move-se sempre para melhor vizinho — eficaz em paisagens suaves, ineficaz quando há muitos ótimos locais.</li>
              <li>Steepest Ascent avalia toda a vizinhança (melhor por passo, mais caro). First Improvement para no primeiro melhor (mais rápido).</li>
              <li>Random Restart mitiga ótimos locais mas sem memória — pode revisitar regiões exploradas.</li>
              <li>SA aceita pioras com P = e^(−|Δf|/T) — pioras pequenas têm alta probabilidade, pioras grandes têm probabilidade quase nula.</li>
              <li>Com T alto: exploração ampla (quasi-aleatório). Com T baixo: refinamento (quasi-HC). O cooling schedule controla a transição.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
