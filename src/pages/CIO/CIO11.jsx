import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${C}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '1.25rem' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const AGvsEDADiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-primary)' }}>AG vs EDA — Dois Modos de Transmitir Informação entre Gerações</p>
    <svg viewBox="0 0 580 190" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-eda" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={C} /></marker>
        <marker id="arr-ag2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>

      {/* AG side */}
      <text x="130" y="18" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">ALGORITMO GENÉTICO</text>
      <rect x="10" y="28" width="80" height="35" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="50" y="42" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Pop. t</text>
      <text x="50" y="55" textAnchor="middle" fill="#f97316" fontSize="8">(indivíduos)</text>

      <line x1="90" y1="45" x2="110" y2="45" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-ag2)"/>

      <rect x="115" y="28" width="80" height="35" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="155" y="42" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Crossover</text>
      <text x="155" y="55" textAnchor="middle" fill="#f97316" fontSize="8">+ Mutação</text>

      <line x1="195" y1="45" x2="215" y2="45" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr-ag2)"/>

      <rect x="220" y="28" width="80" height="35" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x="260" y="42" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Pop. t+1</text>
      <text x="260" y="55" textAnchor="middle" fill="#f97316" fontSize="8">(nova geração)</text>

      <text x="130" y="80" textAnchor="middle" fill="#f97316" fontSize="8" fontStyle="italic">⚠ crossover pode destruir blocos de construção</text>

      {/* EDA side */}
      <text x="430" y="18" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">ESTIMATION OF DISTRIBUTION ALGORITHM</text>

      <rect x="310" y="28" width="80" height="35" rx="6" fill={`${C}15`} stroke={C} strokeWidth="1.5"/>
      <text x="350" y="42" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Seleccionar</text>
      <text x="350" y="55" textAnchor="middle" fill={C} fontSize="8">melhores</text>

      <line x1="390" y1="45" x2="415" y2="45" stroke={C} strokeWidth="1.5" markerEnd="url(#arr-eda)"/>

      <rect x="420" y="28" width="80" height="35" rx="6" fill={`${C}15`} stroke={C} strokeWidth="1.5"/>
      <text x="460" y="42" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Estimar</text>
      <text x="460" y="55" textAnchor="middle" fill={C} fontSize="8">p(x | melhores)</text>

      <line x1="500" y1="45" x2="525" y2="45" stroke={C} strokeWidth="1.5" markerEnd="url(#arr-eda)"/>

      <rect x="530" y="28" width="40" height="35" rx="6" fill={`${C}15`} stroke={C} strokeWidth="1.5"/>
      <text x="550" y="42" textAnchor="middle" fill={C} fontSize="9" fontWeight="700">Am.</text>
      <text x="550" y="55" textAnchor="middle" fill={C} fontSize="8">nova pop.</text>

      <text x="430" y="80" textAnchor="middle" fill="#f97316" fontSize="8" fontStyle="italic">✓ aprende estrutura do problema automaticamente</text>

      {/* Comparison row */}
      <rect x="10" y="100" width="560" height="80" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1"/>
      <text x="290" y="117" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">DIFERENÇA FUNDAMENTAL</text>
      <text x="145" y="135" textAnchor="middle" fill="#f97316" fontSize="9">AG: combina indivíduos directamente</text>
      <text x="145" y="150" textAnchor="middle" fill="#f97316" fontSize="8">→ crossover pode "quebrar" boas soluções</text>
      <text x="145" y="165" textAnchor="middle" fill="#f97316" fontSize="8">→ disruptive quando blocos não estão linkados</text>
      <line x1="285" y1="105" x2="285" y2="178" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="430" y="135" textAnchor="middle" fill={C} fontSize="9">EDA: aprende modelo dos melhores</text>
      <text x="430" y="150" textAnchor="middle" fill={C} fontSize="8">→ amostra novas soluções do modelo</text>
      <text x="430" y="165" textAnchor="middle" fill={C} fontSize="8">→ capta dependências entre variáveis</text>
    </svg>
  </div>
);

const EDAFlowDiagram = ({ title, color, steps }) => {
  const boxW = 118, boxH = 52, gap = 26, startX = 18, y = 28;
  const n = steps.length;
  const totalW = startX * 2 + n * boxW + (n - 1) * gap;
  const markerId = `arr-${color.replace('#', '')}`;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-primary)' }}>{title}</p>
      <svg viewBox={`0 0 ${totalW} 150`} style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id={markerId} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={color} /></marker>
        </defs>
        {steps.map((s, i) => {
          const x = startX + i * (boxW + gap);
          return (
            <g key={i}>
              <rect x={x} y={y} width={boxW} height={boxH} rx="8" fill={`${color}12`} stroke={color} strokeWidth="1.5"/>
              <text x={x + boxW / 2} y={y + 22} textAnchor="middle" fill={color} fontSize="9.5" fontWeight="700">{s.title}</text>
              <text x={x + boxW / 2} y={y + 38} textAnchor="middle" fill={color} fontSize="8" fontFamily="monospace">{s.sub}</text>
              {i < n - 1 && (
                <line x1={x + boxW} y1={y + boxH / 2} x2={x + boxW + gap - 3} y2={y + boxH / 2} stroke={color} strokeWidth="1.5" markerEnd={`url(#${markerId})`}/>
              )}
            </g>
          );
        })}
        {/* loop-back arrow */}
        <path d={`M ${startX + (n - 1) * (boxW + gap) + boxW / 2},${y + boxH + 4} Q ${totalW / 2},${y + boxH + 55} ${startX + boxW / 2},${y + boxH + 4}`} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4,2" markerEnd={`url(#${markerId})`}/>
        <text x={totalW / 2} y={y + boxH + 48} textAnchor="middle" fill={color} fontSize="8.5">repetir até critério de paragem</text>
      </svg>
    </div>
  );
};

const CMAESAdaptDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1.2rem', color: 'var(--text-primary)' }}>CMA-ES — Adaptação da Matriz de Covariância</p>
    <svg viewBox="0 0 560 190" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cma" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
      </defs>

      {/* Iteration 1 — round cloud */}
      <text x="100" y="8" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Geração 1</text>
      <ellipse cx="100" cy="80" rx="70" ry="65" fill="rgba(249,115,22,0.10)" stroke={C} strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="97" y="110" textAnchor="middle" fill={C} fontSize="8">N(m, σ²I)</text>
      <text x="100" y="120" textAnchor="middle" fill={C} fontSize="8">esfera — sem</text>
      <text x="100" y="130" textAnchor="middle" fill={C} fontSize="8">direcção preferida</text>
      {/* Sample points */}
      {[[80,55],[115,60],[95,95],[120,100],[75,90],[105,75]].map(([x,y],i)=>
        <circle key={i} cx={x} cy={y} r={3} fill={i<2?'#f97316':'#94a3b8'} opacity={0.8}/>
      )}
      <text x="100" y="155" textAnchor="middle" fill="#f97316" fontSize="8">● melhores → actualizam C</text>

      <line x1="180" y1="80" x2="210" y2="80" stroke="#f97316" strokeWidth="2" markerEnd="url(#arr-cma)"/>
      <text x="195" y="60" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">aprende</text>
      <text x="195" y="70" textAnchor="middle" fill="#f97316" fontSize="8">direcção</text>

      {/* Iteration 2 — elongated ellipse */}
      <text x="335" y="8" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Geração k</text>
      <ellipse cx="335" cy="80" rx="100" ry="35" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,2" transform="rotate(-25,335,80)"/>
      <text x="280" y="100" textAnchor="middle" fill="#f97316" fontSize="8">N(m, σ²C)</text>
      <text x="290" y="110" textAnchor="middle" fill="#f97316" fontSize="8">elipsoide adaptado</text>
      {/* Sample points along axis */}
      {[[285,65],[300,72],[320,78],[355,85],[375,78],[360,65]].map(([x,y],i)=>
        <circle key={i} cx={x} cy={y} r={3} fill={i<2?'#f97316':'#94a3b8'} opacity={0.8}/>
      )}

      <line x1="445" y1="80" x2="475" y2="80" stroke={C} strokeWidth="2" markerEnd="url(#arr-cma)"/>

      {/* Iteration final — converged */}
      <text x="515" y="8" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontWeight="700">Convergência</text>
      <ellipse cx="515" cy="80" rx="25" ry="12" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" transform="rotate(-25,515,80)"/>
      <circle cx="515" cy="80" r={5} fill="#f97316"/>
      <text x="515" y="110" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">ótimo</text>

      {/* Legend */}
      <text x="280" y="165" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">A forma da elipsoide codifica a geometria do landscape: o eixo longo aponta para a direcção de melhoria mais eficiente</text>
    </svg>
  </div>
);

export default function CIO11() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 11</div>
        <h1 style={S.h1}>Estimation of Distribution Algorithms</h1>
        <p style={S.lead}>Os Algoritmos Genéticos combinam soluções directamente via crossover — mas crossover pode destruir boas estruturas (blocos de construção). Os EDAs resolvem isto de forma elegante: em vez de combinar indivíduos, aprendem a distribuição de probabilidade dos melhores e amostram novas soluções dessa distribuição. CMA-ES leva esta ideia ao extremo para optimização contínua.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema do Crossover — Motivação para EDAs</h2>
          <p style={S.p}>Os AGs baseiam-se na <em>Building Blocks Hypothesis</em>: boas soluções são formadas por combinações de bons sub-componentes (schemas). O crossover combina estes blocos de progenitores distintos. O problema é que o crossover é "cego" — não sabe quais são os blocos importantes e pode parti-los ao meio. Para problemas com dependências fortes entre variáveis (epistaticidade), o crossover standard é altamente disruptivo.</p>
          <p style={S.p}>Os EDAs (Estimation of Distribution Algorithms) resolvem isto substituindo crossover e mutação por um único passo: estimar a distribuição de probabilidade dos melhores indivíduos, depois amostrar novas soluções dessa distribuição. Se a estimação for boa, a distribuição aprendida captura automaticamente quais variáveis devem ser correlacionadas — sem precisar de crossover.</p>

          <AGvsEDADiagram />

          <div style={S.note}>A epistaticidade é o grau de interacção entre variáveis: alta epistaticidade significa que o valor óptimo de xᵢ depende do valor de xⱼ. AGs sofrem com alta epistaticidade; EDAs que modelam dependências (BOA, CMA-ES) lidam bem com ela.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. A Família EDA — Do Simples ao Complexo</h2>
          <p style={S.p}>Os EDAs formam uma hierarquia baseada na complexidade do modelo probabilístico que usam. Modelos mais simples (UMDA, PBIL) assumem variáveis independentes — são rápidos mas não captam estrutura. Modelos mais complexos (BOA, CMA-ES) captam dependências — são poderosos mas computacionalmente caros.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Algoritmo</th><th style={S.th}>Modelo</th><th style={S.th}>Dependências</th><th style={S.th}>Complexidade</th><th style={S.th}>Domínio</th></tr></thead>
              <tbody>
                {[
                  ['PBIL (1994)', 'Vector de probabilidades', 'Nenhuma (univariado)', 'O(n)', 'Binário'],
                  ['UMDA (1996)', 'Distribuições marginais independentes', 'Nenhuma (univariado)', 'O(n)', 'Binário/discreto'],
                  ['MIMIC (1997)', 'Cadeia de dependências', 'Pares de variáveis', 'O(n²)', 'Binário'],
                  ['COMIT (1999)', 'Árvore de dependências', 'Pares (árvore)', 'O(n²)', 'Binário'],
                  ['BOA (1999)', 'Rede Bayesiana', 'Múltiplas variáveis', 'O(n² · 2ᵏ)', 'Binário/discreto'],
                  ['CMA-ES (2001)', 'Gaussiana multivariada N(m,σ²C)', 'Todas (matrix covariância)', 'O(n²) por iter.', 'Contínuo R^n'],
                ].map(([a, m, d, c, dom]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: C }}>{a}</td><td style={S.td}>{m}</td><td style={S.td}>{d}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.83rem' }}>{c}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{dom}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>2.1 UMDA — Univariate Marginal Distribution Algorithm (1996)</h3>
          <p style={S.p}>O EDA mais simples. Assume que todas as variáveis são independentes entre si — o modelo é o produto de distribuições marginais p(x) = ∏ᵢ p(xᵢ). Estima a probabilidade marginal de cada bit/variável ser 1 nos melhores indivíduos, e amostra novas soluções com essas probabilidades independentemente.</p>
          <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: `${C}10`, padding: '0.6rem 0.9rem', borderRadius: 6, marginBottom: '1rem', color: C, fontWeight: 700 }}>p(x) = ∏ᵢ p(xᵢ)  — produto de distribuições marginais independentes</div>

          <EDAFlowDiagram title="UMDA — Esquema de Resolução" color={C} steps={[
            { title: 'Seleccionar', sub: 'top-k melhores' },
            { title: 'Estimar', sub: 'pᵢ = freq(xᵢ=1)' },
            { title: 'Amostrar', sub: 'xᵢ ~ Bernoulli(pᵢ)' },
            { title: 'Avaliar', sub: 'fitness da nova pop.' },
          ]} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 6, padding: '0.6rem 0.8rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700 }}>Limitação</span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Não captura dependências entre variáveis. Se xᵢ e xⱼ precisam de ser iguais para boa fitness, o UMDA não aprende isso.</div>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 6, padding: '0.6rem 0.8rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700 }}>Quando usar</span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Problemas onde variáveis são relativamente independentes. Baseline para comparar com EDAs mais complexos.</div>
            </div>
          </div>

          <h3 style={S.h3}>2.2 PBIL — Population-Based Incremental Learning (1994)</h3>
          <p style={S.p}>PBIL mantém um único vector de probabilidades p que é actualizado gradualmente em direcção às melhores soluções encontradas. É conceptualmente mais simples que o UMDA — não usa uma população explícita para estimar, apenas actualiza incrementalmente um único vector.</p>
          <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: '#ea580c10', padding: '0.6rem 0.9rem', borderRadius: 6, marginBottom: '1rem', color: '#f97316', fontWeight: 700 }}>p ← (1−η)·p + η·x_best  — actualização incremental do vector de probabilidades</div>

          <EDAFlowDiagram title="PBIL — Esquema de Resolução" color="#f97316" steps={[
            { title: 'Inicializar p', sub: 'p = [0.5, ..., 0.5]' },
            { title: 'Gerar pop.', sub: 'amostrar a partir de p' },
            { title: 'Actualizar p', sub: 'p ← (1−η)p + η·x_best' },
            { title: 'Mutar p', sub: 'p ← (1−μ)p + μ·U(0,1)' },
          ]} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 6, padding: '0.6rem 0.8rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700 }}>Limitação</span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Como o UMDA, não modela dependências. A actualização incremental torna-o mais lento a convergir mas mais suave.</div>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 6, padding: '0.6rem 0.8rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700 }}>Quando usar</span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Optimização de hiperparâmetros, feature selection, problemas binários onde a estrutura é desconhecida.</div>
            </div>
          </div>

          <h3 style={S.h3}>2.3 BOA — Bayesian Optimization Algorithm (1999)</h3>
          <p style={S.p}>BOA usa uma rede Bayesiana para modelar a distribuição dos melhores indivíduos. Uma rede Bayesiana é um grafo acíclico dirigido onde cada nó representa uma variável e as arestas representam dependências condicionais. BOA aprende esta estrutura automaticamente em cada geração.</p>
          <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: '#ea580c10', padding: '0.6rem 0.9rem', borderRadius: 6, marginBottom: '1rem', color: '#f97316', fontWeight: 700 }}>p(x) = rede Bayesiana sobre variáveis  — capta dependências condicionais</div>

          <EDAFlowDiagram title="BOA — Esquema de Resolução" color="#fb923c" steps={[
            { title: 'Seleccionar', sub: 'melhores indivíduos' },
            { title: 'Aprender estrutura', sub: 'rede Bayesiana (BIC/MDL)' },
            { title: 'Aprender params.', sub: 'P(xᵢ | pais(xᵢ))' },
            { title: 'Amostrar', sub: 'nova pop. da rede' },
          ]} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 6, padding: '0.6rem 0.8rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700 }}>Limitação</span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Computacionalmente caro: aprender a estrutura da rede é NP-difícil (usa heurísticas greedy). Escala mal com o nº de variáveis.</div>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.10)', borderRadius: 6, padding: '0.6rem 0.8rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#f97316', fontWeight: 700 }}>Quando usar</span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Problemas com dependências complexas entre variáveis. Problemas de design onde componentes interagem (linkage problem).</div>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. CMA-ES em Detalhe — O Estado da Arte Contínuo</h2>
          <p style={S.p}>O CMA-ES (Covariance Matrix Adaptation Evolution Strategy) é considerado o melhor algoritmo de optimização contínua de caixa negra para problemas de média dimensão (n ≤ ~500). Adapta não só a média da distribuição de busca, mas também o tamanho do passo σ e toda a matriz de covariância C — que codifica a forma e orientação do elipsoide de pesquisa.</p>
          <p style={S.p}>A intuição: no início, a distribuição é uma esfera (C=I, sem direcção preferida). À medida que o algoritmo aprende que certas direcções produzem soluções melhores, a elipsoide alonga-se nessas direcções. Isto é equivalente a aprender automaticamente uma transformação de coordenadas que torna o problema mais fácil.</p>

          <CMAESAdaptDiagram />

          <h3 style={S.h3}>As Três Actualizações do CMA-ES</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
            {[
              {
                title: 'Actualização da Média m', color: C,
                formula: <>m ← m + c<sub>m</sub> · Σᵢ wᵢ·(xᵢ<sub>:λ</sub> − m)</>,
                desc: 'A nova média move-se para a média ponderada dos μ melhores indivíduos xᵢ:λ (ordenados do melhor para o pior). Os pesos wᵢ diminuem com o rank — o melhor indivíduo tem mais peso. Esta é a actualização mais simples.',
              },
              {
                title: 'Actualização do Tamanho do Passo σ', color: '#f97316',
                formula: <>σ ← σ · exp(c<sub>σ</sub>/d<sub>σ</sub> · (||p<sub>σ</sub>|| / E||N(0,I)|| − 1))</>,
                desc: 'O tamanho do passo σ adapta-se usando um "caminho de evolução" p_σ. Se passos consecutivos apontam na mesma direcção (caminho longo), σ aumenta — estamos a progredir, podemos dar passos maiores. Se passos consecutivos são opostos (caminho curto/randómico), σ diminui.',
              },
              {
                title: 'Actualização da Covariância C', color: '#f97316',
                formula: <>C ← (1−c₁−c<sub>μ</sub>)·C + c₁·p<sub>c</sub>·p<sub>c</sub><sup>T</sup> + c<sub>μ</sub>·Σᵢ wᵢ·yᵢ<sub>:λ</sub>·yᵢ<sub>:λ</sub><sup>T</sup></>,
                desc: 'Dois mecanismos: (1) rank-1 update usa o caminho de evolução p_c — amostragem sucessiva bem sucedida numa direcção → aumenta C nessa direcção; (2) rank-μ update usa os μ melhores desta geração directamente. Juntos captam tanto história cumulativa como informação desta geração.',
              },
            ].map(({ title, color, formula, desc }) => (
              <div key={title} style={{ background: 'var(--bg-primary)', border: `1px solid ${color}30`, borderLeft: `3px solid ${color}`, borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontWeight: 700, color, marginBottom: '0.4rem', fontSize: '0.9rem' }}>{title}</div>
                <div style={{ fontFamily: 'serif', fontSize: '0.95rem', color, background: `${color}08`, padding: '0.5rem 0.7rem', borderRadius: 5, marginBottom: '0.5rem' }}>{formula}</div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Quando Escolher EDAs vs AGs vs SA</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Cenário</th><th style={S.th}>Melhor escolha</th><th style={S.th}>Porquê</th></tr></thead>
              <tbody>
                {[
                  ['Problema contínuo, n < 100, função suave', 'CMA-ES', 'Estado da arte; adapta a geometria do landscape automaticamente'],
                  ['Problema contínuo, n > 1000', 'PSO ou AG com repr. real', 'CMA-ES tem custo O(n²); PSO escala melhor'],
                  ['Problema binário, variáveis independentes', 'UMDA ou PBIL', 'Simples e eficiente; modelo marginal suficiente'],
                  ['Problema binário, alta epistaticidade', 'BOA ou AG com linkage learning', 'BOA capta dependências; AG com operadores linkage-aware'],
                  ['Problema combinatório (TSP, scheduling)', 'AG com operadores adequados (PMX, CX)', 'EDAs binários não se adaptam naturalmente; ACO também é forte'],
                  ['Pouco tempo de experimentação, baseline', 'UMDA ou PBIL', 'Rápidos de implementar; dão referência para algoritmos mais complexos'],
                  ['Feature selection, otimização discreta', 'PBIL ou UMDA', 'Variáveis binárias; modelo simples geralmente suficiente'],
                ].map(([c, m, p]) => (
                  <tr key={c}><td style={S.td}>{c}</td><td style={{ ...S.td, fontWeight: 600, color: C }}>{m}</td><td style={{ ...S.td, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>EDAs substituem crossover + mutação por: estimar modelo dos melhores → amostrar novas soluções. Evitam crossover disruptivo</li>
              <li>UMDA/PBIL: assumem independência entre variáveis — simples mas não captam epistaticidade</li>
              <li>BOA: aprende rede Bayesiana — capta dependências entre variáveis, mas computacionalmente caro</li>
              <li>CMA-ES: estado da arte para optimização contínua — adapta media m, tamanho do passo σ, E covariância C iterativamente</li>
              <li>A matriz de covariância C do CMA-ES codifica a geometria do landscape aprendida: elipsoide alongado na direcção de melhoria mais eficiente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
