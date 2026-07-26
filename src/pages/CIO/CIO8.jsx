import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

const PSODiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>PSO — Actualização da Velocidade de uma Partícula</p>
    <svg viewBox="0 0 600 300" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-pso"   markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed"/></marker>
        <marker id="arr-pbest" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed"/></marker>
        <marker id="arr-gbest" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed"/></marker>
        <marker id="arr-inert" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8"/></marker>
      </defs>

      {/* ── four nodes, well spaced ── */}
      {/* x(t) — bottom left */}
      <circle cx={80}  cy={230} r={32} fill="#4a9eed18" stroke="#4a9eed" strokeWidth="2"/>
      <text x={80}  y={226} textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">x(t)</text>
      <text x={80}  y={239} textAnchor="middle" fill="#4a9eed" fontSize="8">posição actual</text>

      {/* x(t+1) — result, right of x(t) */}
      <circle cx={270} cy={230} r={36} fill="#38bdf818" stroke="#4a9eed" strokeWidth="2" strokeDasharray="3,2"/>
      <text x={270} y={226} textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">x(t+1)</text>
      <text x={270} y={239} textAnchor="middle" fill="#4a9eed" fontSize="8">próxima posição</text>

      {/* pbest — upper centre */}
      <circle cx={310} cy={100} r={34} fill="#4a9eed18" stroke="#4a9eed" strokeWidth="2"/>
      <text x={310} y={96}  textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">pbest</text>
      <text x={310} y={109} textAnchor="middle" fill="#4a9eed" fontSize="8">melhor pessoal</text>

      {/* gbest — top right */}
      <circle cx={510} cy={50} r={34} fill="#4a9eed18" stroke="#4a9eed" strokeWidth="2"/>
      <text x={510} y={46}  textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="800">gbest</text>
      <text x={510} y={59}  textAnchor="middle" fill="#4a9eed" fontSize="8">melhor global</text>

      {/* Arrow: inertia  x(t) → x(t+1), straight */}
      <line x1={106} y1={230} x2={236} y2={230} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr-inert)"/>
      <text x={176} y={216} textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">ω · v(t)</text>
      <text x={176} y={250} textAnchor="middle" fill="#94a3b8" fontSize="8">inércia</text>

      {/* Arrow: cognitiva  pbest → x(t+1), curved */}
      <path d="M 295,122 Q 250,170 274,206" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arr-pbest)"/>
      <text x={185} y={155} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="600">c₁·r₁·(pbest−x)</text>
      <text x={185} y={168} textAnchor="middle" fill="#4a9eed" fontSize="8">componente cognitiva</text>

      {/* Arrow: social  gbest → x(t+1), curved */}
      <path d="M 495,73 Q 430,170 290,213" fill="none" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arr-gbest)"/>
      <text x={480} y={140} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="600">c₂·r₂·(gbest−x)</text>
      <text x={470} y={153} textAnchor="middle" fill="#4a9eed" fontSize="8">componente social</text>

      {/* Formula bar at bottom */}
      <rect x="20" y="270" width="560" height="24" rx="6" fill="var(--bg-primary)" stroke="rgba(74,158,237,0.10)" strokeWidth="1.5"/>
      <text x="300" y="286" textAnchor="middle" fill="var(--text-primary)" fontSize="9.5" fontFamily="monospace" fontWeight="600">v(t+1) = ω·v(t) + c₁·r₁·(pbest − x(t)) + c₂·r₂·(gbest − x(t))</text>
    </svg>
  </div>
);

const TopologyExplorer = () => {
  const [sel, setSel] = useState(0);
  const topos = [
    {
      name: 'gbest (global)', color: '#4a9eed',
      desc: 'Cada partícula é atraída pelo melhor ponto global de todo o enxame — a melhor posição encontrada por qualquer partícula em qualquer iteração. A informação sobre o melhor global propaga-se instantaneamente para todas as partículas em cada iteração.',
      pros: 'Convergência rápida — todo o enxame move-se rapidamente para a melhor região conhecida. Simples de implementar.',
      cons: 'Propensão a convergência prematura — se o melhor global é um ótimo local, todo o enxame converge para lá. Pouca exploração após encontrar um pico.',
      when: 'Problemas unimodais ou com paisagem suave. Quando a velocidade de convergência é prioritária.',
    },
    {
      name: 'lbest (local)', color: '#4a9eed',
      desc: 'Cada partícula pertence a um vizinhança de k partículas (geralmente k=2 de cada lado, anel de 5). A melhor posição conhecida é o melhor da sua vizinhança local, não do enxame inteiro. A informação propaga-se mais lentamente.',
      pros: 'Muito mais resistente a convergência prematura. Múltiplas "ondas" de exploração podem coexistir em paralelo. Melhor para problemas multimodais.',
      cons: 'Convergência mais lenta. Partículas podem demorar muitas iterações a "descobrir" que o ótimo global foi encontrado por outra partícula do enxame.',
      when: 'Problemas multimodais ou com paisagem rugosa. Quando a qualidade da solução é prioritária sobre a velocidade.',
    },
    {
      name: 'Von Neumann', color: '#4a9eed',
      desc: 'Topologia em grelha 2D. Cada partícula tem 4 vizinhas (Norte, Sul, Este, Oeste). Equilíbrio entre gbest e lbest: a informação propaga-se mais rápido que lbest mas mais devagar que gbest.',
      pros: 'Bom equilíbrio exploração/convergência. Múltiplas sub-populações ligeiramente isoladas.',
      cons: 'Mais complexo de implementar. Tamanho da grelha é um parâmetro adicional.',
      when: 'Quando se quer um meio-termo entre velocidade de gbest e qualidade de lbest.',
    },
  ];
  const t = topos[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Topologias de Vizinhança no PSO</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {topos.map((to, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? to.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? to.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{to.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${t.color}30` }}>
        <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{t.desc}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.83rem', marginBottom: '0.5rem' }}>
          <div><strong style={{ color: '#4a9eed' }}>Vantagem:</strong> <span style={{ color: 'var(--text-secondary)' }}>{t.pros}</span></div>
          <div><strong style={{ color: '#4a9eed' }}>Limitação:</strong> <span style={{ color: 'var(--text-secondary)' }}>{t.cons}</span></div>
        </div>
        <div style={{ fontSize: '0.83rem' }}><strong style={{ color: t.color }}>Quando usar:</strong> <span style={{ color: 'var(--text-secondary)' }}>{t.when}</span></div>
      </div>
    </div>
  );
};

export default function CIO8() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Módulo 9</div>
        <h1 style={S.h1}>Optimização Contínua & PSO</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Optimização Contínua — Representação Real</h2>
          <p style={S.p}>Nos problemas contínuos, uma solução é um vector de m variáveis reais: x = (x₁, x₂, ..., xₘ) onde xᵢ ∈ [lᵢ, uᵢ] (bounded search space). A função de fitness f: ℝᵐ → ℝ pode ser qualquer função real — convexa, não-convexa, não-diferenciável, multimodal. Os operadores de crossover e mutação binários têm de ser adaptados para trabalhar com valores reais.</p>
          <p style={S.p}>Uma abordagem directa é adaptar os AGs para representações reais, com crossover aritmético e mutação gaussiana. Outra abordagem — mais poderosa para espaços contínuos — é o PSO, que não usa crossover nem selecção, mas um mecanismo de actualização de velocidade que combina três componentes: inércia (tendência a continuar na direcção actual), memória pessoal (atracção para o melhor ponto pessoal) e memória social (atracção para o melhor ponto do enxame).</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Operador</th><th style={S.th}>Versão binária</th><th style={S.th}>Versão real (contínua)</th><th style={S.th}>Diferença chave</th></tr></thead>
              <tbody>
                {[
                  ['Crossover', '1-ponto, 2-pontos, uniforme', 'Aritmético: c = α·p₁ + (1−α)·p₂', 'Filho é uma combinação convexa dos pais, não uma concatenação'],
                  ['Mutação', 'Bit-flip (0→1 ou 1→0)', 'Gaussiana: x′ = x + N(0, σ²)', 'Perturbação contínua centrada em 0, controlada por σ'],
                  ['Crossover simétrico', 'N/A', 'c₁=α·p₁+(1−α)·p₂, c₂=α·p₂+(1−α)·p₁', 'Cria dois filhos simétricos — preserva a média dos pais'],
                  ['SBX (Simulated Binary)', 'N/A', 'Emula 1-ponto com parâmetro de distribuição η', 'Mais sofisticado — controla a "agressividade" do crossover'],
                ].map(([op, b, r, d]) => (
                  <tr key={op}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{op}</td><td style={S.td}>{b}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{r}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Mutação Gaussiana — O Parâmetro σ</h3>
          <p style={S.p}>A mutação gaussiana adiciona ao valor de cada variável um número aleatório com distribuição normal de média 0 e desvio padrão σ. O parâmetro σ controla a intensidade da perturbação: σ grande implica explorações amplas (pode sair de um ótimo local mas também pode saltar boas regiões), σ pequeno implica refinamento local (grande precisão perto do ótimo mas risco de convergência prematura).</p>
          <p style={S.p}>Estratégias evolutivas (Evolution Strategies, ES) tornam σ adaptativo: cada indivíduo tem os seus próprios σᵢ que também evoluem. Indivíduos que encontram boas soluções com σ médio tendem a reproduzir-se mais, propagando valores de σ que resultam em mutações de boa qualidade para aquela região do espaço.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Particle Swarm Optimization (PSO)</h2>
          <p style={S.p}>O PSO foi proposto por Kennedy e Eberhart em 1995, inspirado no comportamento de bandos de pássaros e cardumes de peixes. O modelo: um conjunto de partículas move-se num espaço contínuo m-dimensional. Cada partícula tem uma posição x e uma velocidade v. A velocidade em cada iteração é actualizada com base em três componentes: (1) inércia — tendência a continuar na direcção actual; (2) componente cognitiva — atracção para a melhor posição pessoal encontrada pela partícula (pbest); (3) componente social — atracção para a melhor posição encontrada pelo enxame inteiro ou vizinhança (gbest/lbest).</p>

          <PSODiagram />

          <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem 1.25rem', margin: '1rem 0' }}>
            <div style={{ fontSize: '1rem', color: '#4a9eed', marginBottom: '0.5rem' }}>
              <BlockMath math="v(t+1) = \omega \cdot v(t) + c_1 \cdot r_1 \cdot (pbest - x(t)) + c_2 \cdot r_2 \cdot (gbest - x(t))" />
            </div>
            <div style={{ fontSize: '1rem', color: '#4a9eed', marginBottom: '0.75rem' }}>
              <BlockMath math="x(t+1) = x(t) + v(t+1)" />
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <strong><InlineMath math="\omega" /></strong> — peso de inércia (tipicamente 0.4–0.9, decresce ao longo das iterações) |{' '}
              <strong><InlineMath math="c_1" /></strong> — coeficiente cognitivo (aprendizagem pessoal, tipicamente ≈ 2.0) |{' '}
              <strong><InlineMath math="c_2" /></strong> — coeficiente social (aprendizagem social, tipicamente ≈ 2.0) |{' '}
              <strong><InlineMath math="r_1, r_2" /></strong> — números aleatórios uniformes em [0,1] — introduzem estocasticidade
            </div>
          </div>

          <h3 style={S.h3}>Interpretação dos Três Componentes</h3>
          <p style={S.p}>O componente de inércia (<InlineMath math="\omega \cdot v(t)" />) representa a tendência das partículas a manter a sua direcção actual. Com ω alto (≈ 0.9), as partículas "voam" mais longe e exploram amplamente. Com ω baixo (≈ 0.4), as partículas desaceleram e refinam localmente. A estratégia comum é decrescer ω linearmente: começar com exploração ampla e terminar com refinamento preciso.</p>
          <p style={S.p}>O componente cognitivo (<InlineMath math="c_1 \cdot r_1 \cdot (pbest - x(t))" />) representa a memória individual de cada partícula: atracção para o melhor ponto que essa partícula alguma vez visitou. A multiplicação por um número aleatório r₁ garante que a componente não é determinística — partículas com o mesmo pbest não seguem exactamente o mesmo caminho.</p>
          <p style={S.p}>O componente social (<InlineMath math="c_2 \cdot r_2 \cdot (gbest - x(t))" />) representa a informação colectiva do enxame: a atracção para o melhor ponto encontrado por qualquer partícula (na topologia gbest) ou pela vizinhança local (lbest). É o mecanismo de comunicação entre partículas.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Topologias de Vizinhança</h2>
          <p style={S.p}>A topologia de vizinhança define como a informação sobre o melhor ponto global se propaga pelo enxame. É o parâmetro mais impactante na performance do PSO: afecta directamente o equilíbrio entre exploração global e refinamento local.</p>

          <TopologyExplorer />

          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro PSO</th><th style={S.th}>Valor típico</th><th style={S.th}>Efeito de aumentar</th><th style={S.th}>Efeito de diminuir</th></tr></thead>
              <tbody>
                {[
                  ['N (nº partículas)', '20–50', 'Melhor cobertura do espaço, mais robusto', 'Mais rápido mas pode convergir prematuramente'],
                  ['ω (inércia)', 'Linear de 0.9 → 0.4', 'Alta: exploração ampla. Baixa: refinamento.', 'Muito baixo: estagna rapidamente. Muito alto: não converge.'],
                  ['c₁ (cognitivo)', '2.0', 'Partículas mais "individualistas", menos cooperação', 'Partículas ignoram a sua história pessoal — convergência aleatória'],
                  ['c₂ (social)', '2.0', 'Convergência rápida para gbest, mais prematura', 'Exploração mais independente, convergência mais lenta'],
                  ['v_max', '10–20% do range', 'Exploração mais ampla mas instabilidade possível', 'Refinamento preciso mas exploração insuficiente'],
                ].map(([p, v, hi, lo]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{p}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td><td style={S.td}>{hi}</td><td style={{ ...S.td, color: 'var(--text-secondary)' }}>{lo}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. PSO vs Algoritmos Genéticos Contínuos</h2>
          <p style={S.p}>O PSO e os AGs com representação real são as duas abordagens dominantes para optimização contínua. Ambos têm populações (swarm vs população), ambos usam informação de múltiplos pontos, mas os mecanismos são fundamentalmente diferentes. Empiricamente, o PSO tende a ser mais rápido a convergir mas mais frágil em problemas muito irregulares.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Dimensão</th><th style={S.th}>PSO</th><th style={S.th}>AG com representação real</th></tr></thead>
              <tbody>
                {[
                  ['Mecanismo de aprendizagem', 'Velocidade: inércia + cognitiva + social', 'Crossover aritmético + mutação gaussiana + selecção'],
                  ['Memória', 'Cada partícula recorda o seu pbest', 'Não há memória individual — só o que está na população'],
                  ['Pressão selectiva', 'Implícita via atracção para gbest', 'Explícita via operador de selecção'],
                  ['Diversidade', 'Controlada por ω e topologia', 'Controlada por pm e fitness sharing/crowding'],
                  ['Convergência', 'Mais rápida em problemas unimodais', 'Mais robusta em problemas multimodais'],
                  ['Parâmetros', '3-4 principais (ω, c₁, c₂, N)', '4-5 principais (N, pc, pm, G, selecção)'],
                  ['Melhor para', 'Funções contínuas suaves, engenharia', 'Problemas com estrutura combinatória híbrida'],
                ].map(([d, p, a]) => (
                  <tr key={d}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</td><td style={S.td}>{p}</td><td style={S.td}>{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

      </div>
    </div>
  );
}
