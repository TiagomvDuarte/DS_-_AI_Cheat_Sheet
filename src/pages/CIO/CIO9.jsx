import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const C = '#4a9eed';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: C, border: `1.5px solid ${C}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
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
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(74,158,237,0.10)`, borderLeft: `3px solid ${C}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '1.25rem' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const TabuSearchDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Tabu Search — Mecanismo de Memória</p>
    <svg viewBox="0 0 580 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ts" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={C} /></marker>
        <marker id="arr-red" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
      </defs>

      {/* Current solution */}
      <rect x="10" y="70" width="90" height="50" rx="8" fill={`${C}15`} stroke={C} strokeWidth="1.5"/>
      <text x="55" y="91" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Solução</text>
      <text x="55" y="105" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Corrente x</text>

      {/* Arrow to neighbourhood */}
      <line x1="100" y1="95" x2="150" y2="95" stroke={C} strokeWidth="1.5" markerEnd="url(#arr-ts)"/>
      <text x="125" y="89" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">gera N(x)</text>

      {/* Neighbourhood candidates */}
      <rect x="155" y="30" width="80" height="35" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="195" y="52" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">y₁ — válido</text>

      <rect x="155" y="78" width="80" height="35" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="195" y="96" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">y₂ — TABU ✗</text>
      <text x="195" y="107" textAnchor="middle" fill="#4a9eed" fontSize="8">na lista tabu</text>

      <rect x="155" y="126" width="80" height="35" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="195" y="148" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">y₃ — válido</text>

      {/* Arrow to best non-tabu */}
      <line x1="235" y1="47" x2="300" y2="75" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-ts)"/>
      <text x="290" y="50" textAnchor="middle" fill="#4a9eed" fontSize="8">melhor não-tabu</text>

      {/* New current */}
      <rect x="305" y="60" width="90" height="50" rx="8" fill={`${C}15`} stroke={C} strokeWidth="1.5"/>
      <text x="350" y="81" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Nova Solução</text>
      <text x="350" y="95" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">x' (mesmo f↓)</text>

      {/* Arrow to tabu list update */}
      <line x1="395" y1="85" x2="440" y2="85" stroke={C} strokeWidth="1.5" markerEnd="url(#arr-ts)"/>

      {/* Tabu list */}
      <rect x="445" y="55" width="120" height="70" rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="505" y="75" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Lista Tabu</text>
      <text x="505" y="89" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">move(x→x') ← novo</text>
      <text x="505" y="101" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">TTL = tenure τ</text>
      <text x="505" y="113" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">move antigo → apagado</text>

      {/* Aspiration arrow */}
      <path d="M 235,96 Q 260,160 305,120" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arr-ts)"/>
      <text x="265" y="175" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Critério de Aspiração:</text>
      <text x="265" y="186" textAnchor="middle" fill="#4a9eed" fontSize="8">aceitar tabu se f melhor que best-known</text>
    </svg>
  </div>
);

const ILSDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Iterated Local Search — Ciclo de Perturbação</p>
    <svg viewBox="0 0 780 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ils" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
        <marker id="arr-ils2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" /></marker>
      </defs>
      {[
        { x: 10,  label: 'Solução\nInicial x₀', color: '#4a9eed' },
        { x: 175, label: 'Local\nSearch(x₀)', color: '#4a9eed' },
        { x: 340, label: 'Perturbação\n→ x\'', color: '#4a9eed' },
        { x: 505, label: 'Local\nSearch(x\')', color: '#4a9eed' },
      ].map(({ x, label, color }, i) => (
        <g key={i}>
          <rect x={x} y={35} width={120} height={50} rx={10} fill={`${color}12`} stroke={color} strokeWidth="1.5"/>
          {label.split('\n').map((l, j) => (
            <text key={j} x={x + 60} y={56 + j * 16} textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{l}</text>
          ))}
          {i < 3 && <line x1={x + 120} y1={60} x2={x + 167} y2={60} stroke={color} strokeWidth="1.5" markerEnd="url(#arr-ils)"/>}
        </g>
      ))}
      {/* Accept/reject decision */}
      <rect x="662" y="35" width="106" height="50" rx="10" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="715" y="56" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Aceitar?</text>
      <text x="715" y="73" textAnchor="middle" fill="#4a9eed" fontSize="9">critério</text>
      <line x1="662" y1="60" x2="629" y2="60" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-ils2)"/>
      {/* Loop back arrow */}
      <path d="M 715,85 Q 715,128 530,135 Q 360,142 360,88" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arr-ils)"/>
      <text x="535" y="150" textAnchor="middle" fill="#4a9eed" fontSize="9">perturba novamente se aceite → repete</text>
    </svg>
  </div>
);

const TabuExplorer = () => {
  const [sel, setSel] = useState(0);
  const items = [
    {
      name: 'Memória de Curto Prazo', color: '#4a9eed',
      desc: 'A lista tabu é a estrutura central do Tabu Search. Guarda os movimentos (ou atributos de movimentos) realizados recentemente e proíbe-os durante um número de iterações chamado tenure (τ). Não guarda soluções — guarda características de movimentos.',
      detalhes: [
        'Move-based: regista o movimento efectuado (ex: trocar cidades i↔j no TSP)',
        'Attribute-based: regista atributo do movimento (ex: "cidade i não entra na posição k")',
        'Tenure τ: número de iterações que o movimento permanece proibido (tipicamente 5–20)',
        'FIFO ou lista circular: quando cheia, o movimento mais antigo é apagado',
      ],
      exemplo: 'TSP: acabei de fazer swap(3,7). Proíbo reverse(3,7) por τ=10 iterações. Isto evita desfazer o move que acabo de fazer.',
    },
    {
      name: 'Critério de Aspiração', color: '#4a9eed',
      desc: 'Um movimento tabu pode ser aceite (aspiração) se satisfizer um critério de aspiração. O critério mais comum: aceitar um movimento tabu se a solução resultante for melhor que a melhor solução alguma vez encontrada (best-known). Sobrepõe-se à proibição tabu.',
      detalhes: [
        'Motivação: a lista tabu é conservadora — pode bloquear movimentos excepcionalmente bons',
        'Aspiration by objective: aceitar tabu se f(y) > f(best)',
        'Aspiration by default: aceitar tabu quando todos os movimentos são tabu',
        'Aspiration by influence: baseado em quantas vezes o movimento foi útil no passado',
      ],
      exemplo: 'Todos os moves são tabu? Move A é tabu mas produz f=1250 (melhor que best=1300)? Aceitar A mesmo sendo tabu.',
    },
    {
      name: 'Memória de Longo Prazo', color: '#4a9eed',
      desc: 'Para além da lista tabu (curto prazo), o Tabu Search pode usar memória de longo prazo para guiar a pesquisa: frequência de uso de atributos, recência de visita a regiões, ou a melhor solução encontrada em cada região. Permite intensificação e diversificação.',
      detalhes: [
        'Frequency-based: evitar movimentos frequentemente usados → diversificação',
        'Recency-based: a própria lista tabu — evitar movimentos recentes → curto prazo',
        'Intensification: voltar à melhor região conhecida e pesquisar mais fundo',
        'Diversification: usar frequência para explorar regiões não visitadas',
      ],
      exemplo: 'Se o atributo "cidade 7 na posição 3" apareceu em 80% das soluções visitadas, penalizar soluções com esse atributo para forçar diversificação.',
    },
    {
      name: 'Escolha do Tenure τ', color: '#4a9eed',
      desc: 'O tenure é o parâmetro mais crítico do Tabu Search. τ pequeno → pouca memória, pode ciclar. τ grande → muito restritivo, reduz exploração. A escolha óptima depende do problema e do tamanho da vizinhança.',
      detalhes: [
        'Heurística comum: τ ∈ [5, 20] para problemas combinatórios de dimensão média',
        'Regra prática: τ ≈ √|S| onde |S| é a dimensão do problema',
        'Dynamic tenure: variar τ durante a pesquisa (aumentar se ciclar, diminuir se estagnado)',
        'Random tenure: τ ~ Uniform[τ_min, τ_max] — adiciona estochasticidade',
      ],
      exemplo: 'TSP com 50 cidades: τ ≈ √50 ≈ 7. Começar com τ=7, aumentar para τ=15 se detectar ciclagem (mesmas soluções repetem).',
    },
  ];
  const it = items[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Componentes do Tabu Search</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? item.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? item.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{item.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${it.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{it.desc}</p>
        <div style={{ marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.72rem', color: it.color, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Detalhes</span>
          {it.detalhes.map(d => <div key={d} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>• {d}</div>)}
        </div>
        <div style={{ background: `${it.color}10`, borderRadius: 6, padding: '0.6rem 0.9rem', fontSize: '0.83rem', color: 'var(--text-primary)', borderLeft: `3px solid ${it.color}` }}>
          <strong>Exemplo:</strong> {it.exemplo}
        </div>
      </div>
    </div>
  );
};

const ILSStrategyExplorer = () => {
  const [sel, setSel] = useState(0);
  const strategies = [
    {
      name: 'Perturbação', color: '#4a9eed',
      desc: 'A perturbação é o coração do ILS. Deve ser forte o suficiente para escapar do basin of attraction do ótimo local atual, mas não tão forte que seja equivalente a reiniciar aleatoriamente. O tamanho da perturbação é o parâmetro mais crítico.',
      tipos: [
        'Double-bridge move (TSP): corta a rota em 4 segmentos e reconecta diferentemente — escapa de 3-opt local optima',
        'Random block move: perturba um bloco de k variáveis consecutivas aleatoriamente',
        'Large neighbourhood: aplica um move de grande escala que HC/SA não conseguiriam desfazer rapidamente',
        'Structured perturbation: usa conhecimento do domínio para perturbar partes problemáticas',
      ],
    },
    {
      name: 'Critério de Aceitação', color: '#4a9eed',
      desc: 'Após aplicar local search à solução perturbada x\', decide se x\' substitui a solução corrente x. Diferentes critérios produzem comportamentos muito diferentes — de ganancioso (só aceitar melhorias) a exploratório (sempre aceitar).',
      tipos: [
        'Best improvement: aceitar x\' apenas se f(x\') > f(best-known). Conservador — não perde qualidade',
        'Random walk: aceitar sempre. Alta diversificação, baixa intensificação',
        'Simulated annealing: aceitar com prob. e^(Δf/T). Equilibrado — combina SA com ILS',
        'Diversification: aceitar se x\' é suficientemente diferente de soluções recentes (mesmo se pior)',
      ],
    },
    {
      name: 'Historial (s_home)', color: '#4a9eed',
      desc: 'O ILS mantém um "s_home" — a solução de referência a partir da qual se aplica a perturbação. Pode ser sempre a melhor encontrada, ou pode mudar (ex: última solução aceite). A escolha afecta o balanço entre intensificação e diversificação.',
      tipos: [
        's_home = best-known: perturba sempre a melhor solução. Intensificação máxima em torno do ótimo atual',
        's_home = last accepted: perturba a última aceite (random walk se aceitar sempre). Mais exploratório',
        's_home = structured: usa lista de soluções elite (beam search + ILS). Diversificação controlada',
        'Population ILS: mantém população de s_homes — hibrido com algoritmos evolutivos',
      ],
    },
  ];
  const st = strategies[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>ILS — Estratégias de Design</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {strategies.map((s, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? s.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? s.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{s.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${st.color}40` }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{st.desc}</p>
        {st.tipos.map(t => <div key={t} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>• {t}</div>)}
      </div>
    </div>
  );
};

export default function CIO9() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Módulo 4</div>
        <h1 style={S.h1}>Tabu Search & Iterated Local Search</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Tabu Search — Pesquisa Local com Memória</h2>
          <p style={S.p}>O Tabu Search (TS), proposto por Fred Glover em 1986, resolve o problema fundamental do Hill Climbing de uma forma elegante: em vez de só aceitar movimentos que melhoram o fitness, o TS aceita <em>qualquer</em> movimento — incluindo pioras — mas mantém uma lista de movimentos proibidos (lista tabu) para evitar ciclos. A ideia é usar memória para guiar a pesquisa de forma inteligente, não aleatória.</p>
          <p style={S.p}>A diferença crítica para o Simulated Annealing: o SA aceita pioras aleatoriamente com probabilidade decrescente; o TS aceita o <em>melhor move disponível</em> (mesmo que piore), mas proíbe sistematicamente moves recentes. O TS é determinístico dado o estado da lista tabu; o SA é estocástico.</p>

          <TabuSearchDiagram />

          <h3 style={S.h3}>Pseudocódigo do Tabu Search</h3>
          <div style={S.code}>
            <div style={{ fontWeight: 700, color: C, marginBottom: '0.5rem' }}>Tabu Search</div>
            <div>1. x ← solução inicial; best ← x; tabu_list ← []</div>
            <div>2. <strong>Repetir</strong> até condição de paragem:</div>
            <div style={{ paddingLeft: '1.5rem' }}>2.1. Gerar candidatos: C = &#123; y ∈ N(x) | move(x→y) ∉ tabu_list <strong>OU</strong> aspiração(y) &#125;</div>
            <div style={{ paddingLeft: '1.5rem' }}>2.2. y* ← argmax&#123; f(y) : y ∈ C &#125;  <span style={{ color: 'var(--text-secondary)' }}>// melhor não-tabu (ou tabu com aspiração)</span></div>
            <div style={{ paddingLeft: '1.5rem' }}>2.3. Adicionar move(x→y*) à tabu_list; remover moves com tenure expirada</div>
            <div style={{ paddingLeft: '1.5rem' }}>2.4. x ← y*  <span style={{ color: 'var(--text-secondary)' }}>// aceitar mesmo que f(y*) &lt; f(x)</span></div>
            <div style={{ paddingLeft: '1.5rem' }}>2.5. Se f(x) &gt; f(best): best ← x</div>
            <div>3. Retornar best</div>
          </div>

          <TabuExplorer />

          <h3 style={S.h3}>Comparação: HC vs SA vs TS</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Hill Climbing</th><th style={S.th}>Simulated Annealing</th><th style={S.th}>Tabu Search</th></tr></thead>
              <tbody>
                {[
                  ['Aceita pioras?', 'Nunca', 'Sim, com probabilidade e^(-Δf/T)', 'Sim, sempre o melhor disponível'],
                  ['Evita ciclos?', 'Não (fica preso)', 'Parcialmente (aleatoriedade)', 'Sim, explicitamente via lista tabu'],
                  ['Memória', 'Nenhuma', 'Apenas temperatura actual', 'Curto prazo (tabu list) + longo prazo (frequência)'],
                  ['Parâmetros críticos', 'Vizinhança N(x)', 'Temperatura inicial T₀, cooling rate α', 'Tenure τ, tamanho da lista tabu'],
                  ['Melhor para', 'Paisagens suaves, refinamento', 'Escape de ótimos locais, exploração ampla', 'Problemas combinatórios onde ciclagem é problema'],
                  ['Determinístico?', 'Sim (Steepest) / Não (Stochastic)', 'Não (estocástico)', 'Sim dado estado inicial e lista tabu'],
                ].map(([a, hc, sa, ts]) => (
                  <tr key={a}>
                    <td style={{ ...S.td, fontWeight: 600, color: C }}>{a}</td>
                    <td style={S.td}>{hc}</td>
                    <td style={S.td}>{sa}</td>
                    <td style={{ ...S.td, color: C }}>{ts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Iterated Local Search — Perturbação Inteligente</h2>
          <p style={S.p}>O Iterated Local Search (ILS) é conceptualmente simples mas surpreendentemente eficaz: aplica local search, perturba a solução obtida para sair do basin of attraction, e repete. Enquanto o Random Restart reinicia completamente (perdendo o progresso), o ILS perturba a melhor solução encontrada — mantendo estrutura boa enquanto escapa do ótimo local atual.</p>
          <p style={S.p}>A intuição: os ótimos locais de alta qualidade tendem a partilhar estrutura com o ótimo global (building block hypothesis). Se perturbamos apenas parte da solução, podemos manter as partes boas enquanto procuramos melhorias nas partes fracas. Uma perturbação bem desenhada é, por isso, muito mais eficiente que reiniciar do zero.</p>

          <ILSDiagram />

          <h3 style={S.h3}>Pseudocódigo do ILS</h3>
          <div style={S.code}>
            <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>Iterated Local Search</div>
            <div>1. x₀ ← solução inicial</div>
            <div>2. x* ← LocalSearch(x₀)  <span style={{ color: 'var(--text-secondary)' }}>// qualquer pesquisa local: HC, SA, TS</span></div>
            <div>3. <strong>Repetir</strong> até critério de paragem:</div>
            <div style={{ paddingLeft: '1.5rem' }}>3.1. x' ← Perturbação(x*, historial)  <span style={{ color: 'var(--text-secondary)' }}>// escape do basin of attraction</span></div>
            <div style={{ paddingLeft: '1.5rem' }}>3.2. x'' ← LocalSearch(x')  <span style={{ color: 'var(--text-secondary)' }}>// novo ótimo local</span></div>
            <div style={{ paddingLeft: '1.5rem' }}>3.3. x* ← CritérioAceitação(x*, x'', historial)</div>
            <div>4. Retornar x*</div>
          </div>

          <ILSStrategyExplorer />

          <h3 style={S.h3}>O Double-Bridge Move — Perturbação Canónica para TSP</h3>
          <p style={S.p}>O double-bridge é a perturbação mais usada para o TSP no ILS. Enquanto um 3-opt move pode ser revertido por uma sequência de 2-opt moves (local search consegue desfazê-lo), um double-bridge corta e recombina a rota de forma que nenhuma combinação de 2-opt ou 3-opt consegue reverter directamente. Isto garante que o ILS escapa verdadeiramente do basin of attraction atual.</p>
          <div style={{ ...S.diagram, textAlign: 'left' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', textAlign: 'center' }}>Double-Bridge Move no TSP</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>ANTES — rota original</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-primary)' }}>A — B — C — D — E — F — G — H — A</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  Cortar em 4 pontos: (A-B), (C-D), (E-F), (G-H)<br/>
                  Segmentos: [A], [B-C], [D-E], [F-G], [H]
                </div>
              </div>
              <div style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.9rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4a9eed', marginBottom: '0.5rem' }}>DEPOIS — double-bridge</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-primary)' }}>A — D-E — B-C — F-G — H — A</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  Reagrupa segmentos: A + [D-E] + [B-C] + [F-G] + H<br/>
                  Resultado: novo tour que 2-opt/3-opt não conseguem reverter
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Quando Usar Cada Algoritmo</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Algoritmo Recomendado</th><th style={S.th}>Justificação</th></tr></thead>
              <tbody>
                {[
                  ['Problema combinatório, vizinhança pequena e clara', 'Tabu Search', 'Memória explícita evita ciclos; avalia toda a vizinhança sem custo excessivo'],
                  ['Problema combinatório, ótimos locais muito bons mas difíceis de escapar', 'ILS com double-bridge', 'Perturbação estruturada preserva estrutura boa; foge de basins de attraction'],
                  ['Função objectivo cara de avaliar', 'ILS (minimiza avaliações)', 'Local search de qualidade + poucas perturbações > muitas avaliações aleatórias'],
                  ['Preciso de garantia probabilística de convergência', 'Simulated Annealing', 'SA tem propriedades teóricas mais fortes de convergência assimptótica'],
                  ['Problema de scheduling / routing com restrições complexas', 'Tabu Search', 'Lista tabu permite modelar restrições como proibições directas'],
                  ['Hibrido com AG ou PSO', 'ILS como operador de melhoria local', 'ILS aplicado a cada indivíduo da população melhora qualidade global'],
                ].map(([c, a, j]) => (
                  <tr key={c}><td style={S.td}>{c}</td><td style={{ ...S.td, fontWeight: 600, color: C }}>{a}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{j}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

      </div>
    </div>
  );
}
