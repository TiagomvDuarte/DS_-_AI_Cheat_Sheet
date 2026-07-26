import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#4a9eed', borderLeft: '3px solid #4a9eed', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid #4a9eed', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  formula: { background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '0.75rem 1.25rem', margin: '1rem 0', fontFamily: 'serif', fontSize: '1rem', color: '#4a9eed', textAlign: 'center' },
};

const DEDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>DE/rand/1/bin — Os três passos: Mutação, Crossover, Selecção</p>
    <svg viewBox="0 0 600 205" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrDE" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      {/* Population */}
      <text x="70" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">POPULAÇÃO</text>
      {[{y:35,l:'xᵢ (alvo)',c:'#4a9eed',main:true},{y:60,l:'xₐ (rand 1)',c:'#4a9eed'},{y:85,l:'x_b (rand 2)',c:'#4a9eed'},{y:110,l:'x_c (rand 3)',c:'#4a9eed'}].map(({y,l,c,main})=>(
        <g key={l}>
          <rect x={10} y={y} width={110} height={18} rx="4" fill={`${c}15`} stroke={c} strokeWidth={main?2:1.2}/>
          <text x={65} y={y+13} textAnchor="middle" fill={c} fontSize="8" fontWeight={main?'700':'600'}>{l}</text>
        </g>
      ))}

      {/* Mutation */}
      <line x1={121} y1={78} x2={180} y2={100} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrDE)"/>
      <text x="155" y="82" fill="var(--text-secondary)" fontSize="7.5">mutação</text>
      <rect x="185" y="86" width="110" height="30" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <foreignObject x="185" y="86" width="110" height="16">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#4a9eed', fontSize: '7px' }}>
          <InlineMath math="v = x_a + F(x_b - x_c)" />
        </div>
      </foreignObject>
      <text x="240" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">vector mutante</text>

      {/* Crossover */}
      <line x1={295} y1={101} x2={350} y2={101} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrDE)"/>
      <text x="322" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">crossover</text>
      <rect x="355" y="70" width="110" height="65" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="410" y="87" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Trial vector u</text>
      <text x="366" y="102" fill="var(--text-secondary)" fontSize="7">uⱼ = vⱼ se rand() ≤ CR</text>
      <text x="366" y="114" fill="var(--text-secondary)" fontSize="7">uⱼ = xᵢⱼ caso contrário</text>
      <text x="366" y="126" fill="#4a9eed" fontSize="7">(pelo menos 1 gene de v)</text>

      {/* Selection */}
      <line x1={465} y1={101} x2={520} y2={101} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arrDE)"/>
      <text x="492" y="95" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">selecção</text>
      <rect x="525" y="75" width="65" height="55" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="557" y="95" textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">Se f(u) ≤ f(xᵢ)</text>
      <text x="557" y="108" textAnchor="middle" fill="#4a9eed" fontSize="7">→ u substitui xᵢ</text>
      <text x="557" y="121" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">senão xᵢ mantém</text>

      {/* F label */}
      <rect x="10" y="145" width="580" height="55" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="300" y="161" textAnchor="middle" fill="var(--text-primary)" fontSize="8.5" fontWeight="700">Parâmetros principais</text>
      <text x="60" y="179" textAnchor="middle" fill="#4a9eed" fontSize="8">F ∈ [0.4, 1.0]</text>
      <text x="60" y="189" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">factor de diferença</text>
      <text x="190" y="179" textAnchor="middle" fill="#4a9eed" fontSize="8">CR ∈ [0.1, 0.9]</text>
      <text x="190" y="189" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">taxa de crossover</text>
      <text x="320" y="179" textAnchor="middle" fill="#4a9eed" fontSize="8">NP ≥ 10D</text>
      <text x="320" y="189" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">tamanho população</text>
      <text x="450" y="179" textAnchor="middle" fill="#4a9eed" fontSize="8">sem gradiente</text>
      <text x="450" y="189" textAnchor="middle" fill="var(--text-secondary)" fontSize="7">caixa-negra</text>
    </svg>
  </div>
);

const StrategiesExplorer = () => {
  const [sel, setSel] = useState(0);
  const strategies = [
    {
      name: 'DE/rand/1/bin', color: '#4a9eed',
      formula: 'v = x_a + F \\cdot (x_b - x_c)',
      crossover: 'Binomial: cada gene é copiado de v com prob. CR, ou de xᵢ; pelo menos 1 gene obrigatório de v',
      when: 'Estratégia padrão. Boa exploração. Recomendada como ponto de partida.',
      pros: 'Alta diversidade — usa 3 indivíduos aleatórios diferentes. Robusto em landscapes multimodais.',
      cons: 'Convergência mais lenta que estratégias best. Menos indicado quando o best é muito superior.',
    },
    {
      name: 'DE/best/1/bin', color: '#4a9eed',
      formula: 'v = x_{best} + F \\cdot (x_b - x_c)',
      crossover: 'Binomial (igual ao anterior)',
      when: 'Quando a convergência rápida importa mais que a diversidade. Landscapes unimodais.',
      pros: 'Converge mais rápido. O melhor indivíduo guia toda a população.',
      cons: 'Pressão selectiva muito alta → convergência prematura em landscapes multimodais.',
    },
    {
      name: 'DE/rand/2/bin', color: '#4a9eed',
      formula: 'v = x_a + F \\cdot (x_b - x_c) + F \\cdot (x_d - x_e)',
      crossover: 'Binomial (igual)',
      when: 'Espaços de alta dimensão (D > 50) onde a diversidade extra ajuda.',
      pros: 'Maior perturbação por mutação. Explora melhor em alta dimensão.',
      cons: 'Requer população maior (5 indivíduos distintos por operação). Mais lento.',
    },
    {
      name: 'DE/current-to-best/1', color: '#4a9eed',
      formula: 'v = x_i + F \\cdot (x_{best} - x_i) + F \\cdot (x_b - x_c)',
      crossover: 'Binomial',
      when: 'Equilíbrio entre exploração e exploitação. Comum em variantes auto-adaptativas.',
      pros: 'Combina direcção para o melhor (exploitação) com perturbação aleatória (exploração).',
      cons: 'Mais hiperparâmetros. Sensível à qualidade do best se o best for um óptimo local.',
    },
  ];
  const s = strategies[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Estratégias de Mutação em DE</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {strategies.map((st, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.78rem', background: sel === i ? st.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? st.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{st.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${s.color}30` }}>
        <div style={{ color: s.color, marginBottom: '0.75rem', fontSize: '1.05rem', overflowX: 'auto' }}>
          <InlineMath math={s.formula} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
          {[
            { label: 'Crossover', val: s.crossover },
            { label: 'Quando usar', val: s.when },
            { label: 'Vantagens', val: s.pros },
            { label: 'Desvantagens', val: s.cons },
          ].map(({ label, val }) => (
            <div key={label} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: s.color, textTransform: 'uppercase', marginBottom: '0.35rem' }}>{label}</div>
              <p style={{ margin: 0, lineHeight: 1.7 }}>{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CIO12() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Módulo 14</div>
        <h1 style={S.h1}>Differential Evolution</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. A Ideia Central — Diferenças como Perturbação</h2>
          <p style={S.p}>O DE parte de uma observação simples: a diferença entre dois vectores aleatórios da população é uma perturbação adaptada ao landscape — se a população está distribuída ao longo de um vale, a diferença entre dois indivíduos aleatórios aponta aproximadamente ao longo desse vale. É informação gratuita sobre a geometria do problema, sem custo de gradiente.</p>
          <p style={S.p}>A perturbação <InlineMath math="F(x_b - x_c)" /> tem amplitude controlada por F e direcção aleatória no espaço das soluções. Ao adicionar esta perturbação a um terceiro indivíduo (<InlineMath math="x_a" />, <InlineMath math="x_{best}" />, ou o próprio <InlineMath math="x_i" /> dependendo da estratégia), cria-se um vector mutante v. O crossover binomial cria depois um vector trial u misturando v e <InlineMath math="x_i" /> gene a gene. Por fim, a selecção greedy mantém o melhor entre u e <InlineMath math="x_i" />.</p>
          <DEDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. O Algoritmo DE Passo a Passo</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Passo</th><th style={S.th}>O que acontece</th><th style={S.th}>Detalhe</th></tr></thead>
              <tbody>
                {[
                  ['Inicialização', 'Gerar NP indivíduos uniformemente no domínio [lb, ub]ᴰ', 'xᵢ,ⱼ = lb_j + rand(0,1)·(ub_j − lb_j) para i=1..NP, j=1..D'],
                  ['Mutação', 'Para cada xᵢ, escolher 3 índices distintos a,b,c ≠ i. Criar v = xₐ + F·(x_b − x_c)', 'F ∈ [0.4,1.0]. Se v sai dos limites → reparar (reflexão ou clamping)'],
                  ['Crossover binomial', 'Para cada dimensão j: uⱼ = vⱼ se rand()≤CR ou j==j_rand; else uⱼ = xᵢⱼ', 'j_rand garante que pelo menos 1 componente vem de v'],
                  ['Crossover exponencial', 'Seleccionar posição de início aleatória. Copiar genes contíguos de v até rand()>CR', 'Alternativa ao binomial — copia blocos contíguos'],
                  ['Selecção greedy', 'Se f(u) ≤ f(xᵢ): u substitui xᵢ na próxima geração. Caso contrário xᵢ mantém-se', 'DE nunca piora a população — selecção elitista directa'],
                  ['Critério de paragem', 'Número máximo de avaliações, ou |f_best − f_target| < ε', 'Tipicamente 10.000·D a 100.000·D avaliações'],
                ].map(([p, o, d]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed' }}>{p}</td><td style={S.td}>{o}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>O DE nunca avalia um indivíduo pior que o seu pai — a selecção greedy garante monotonia do fitness do melhor. Esta propriedade, combinada com elitismo implícito, torna o DE muito robusto.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Estratégias de Mutação</h2>
          <p style={S.p}>A nomenclatura DE/x/y/z indica: x = base do vector mutante (rand = aleatório, best = melhor da população), y = número de vectores de diferença, z = tipo de crossover (bin = binomial, exp = exponencial). O ponto de partida recomendado é DE/rand/1/bin.</p>
          <StrategiesExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Parâmetros e Self-Adaptation</h2>
          <p style={S.p}>O DE tem apenas dois parâmetros críticos: F (factor de diferença) e CR (taxa de crossover). A regra geral é F ∈ [0.4, 1.0] e CR ∈ [0.1, 0.9], com NP = 10·D como tamanho de população mínimo.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Efeito de valor baixo</th><th style={S.th}>Efeito de valor alto</th><th style={S.th}>Recomendação</th></tr></thead>
              <tbody>
                {[
                  ['F (0 a 2)', 'Passos pequenos → exploitação local', 'Passos grandes → exploração, possível overshooting', 'F=0.5 como ponto de partida; aumentar se o landscape é multimodal'],
                  ['CR (0 a 1)', 'Poucos genes de v → solução trial próxima de xᵢ', 'Muitos genes de v → solução trial próxima de v', 'CR=0.9 para problemas separáveis; CR=0.1 para não-separáveis'],
                  ['NP', 'Menos diversidade, mais rápido', 'Mais diversidade, mais avaliações por geração', 'NP ≥ 10·D. Landscape rugoso: NP=20·D'],
                ].map(([p, l, h, r]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#4a9eed', fontSize: '0.83rem' }}>{p}</td><td style={S.td}>{l}</td><td style={S.td}>{h}</td><td style={{ ...S.td, color: '#4a9eed', fontSize: '0.83rem' }}>{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Self-Adaptive DE (SaDE, iDE, JADE)</h3>
          <p style={S.p}>Variantes self-adaptive aprendem os parâmetros F e CR ao longo da evolução. O JADE (Zhang & Sanderson, 2009) mantém uma distribuição de F e CR e actualiza os parâmetros com base no sucesso das mutações passadas: F é amostrado de uma Cauchy centrada em μF (actualizada exponencialmente com os F bem-sucedidos), e CR é amostrado de uma Normal centrada em μCR.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Comparação com Outros Algoritmos</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Critério</th><th style={S.th}>DE</th><th style={S.th}>PSO</th><th style={S.th}>CMA-ES</th><th style={S.th}>GA real</th></tr></thead>
              <tbody>
                {[
                  ['Parâmetros', '2 (F, CR)', '3 (ω, c₁, c₂)', '1 (σ inicial)', '4+ (Pc, Pm, σ, ...)'],
                  ['Eficiência', 'Alta para D=10–100', 'Alta para D&lt;50', 'Excelente para D&lt;50, auto-adapt', 'Média'],
                  ['Alta dimensão (D&gt;100)', 'Razoável com NP grande', 'Degrada', 'Degrada (O(D²))', 'Degrada'],
                  ['Landscapes rugosos', 'Muito bom', 'Bom', 'Pode ficar preso', 'Bom'],
                  ['Implementação', 'Muito simples (~20 linhas)', 'Simples', 'Complexa (matrix update)', 'Simples'],
                  ['CEC benchmarks (ranking)', '1º–3º', '3º–5º', '1º–2º', '5º+'],
                ].map(([c, de, pso, cma, ga]) => (
                  <tr key={c}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{c}</td><td style={{ ...S.td, color: '#4a9eed', fontWeight: 600 }}>{de}</td><td style={S.td}>{pso}</td><td style={S.td}>{cma}</td><td style={S.td}>{ga}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

      </div>
    </div>
  );
}
