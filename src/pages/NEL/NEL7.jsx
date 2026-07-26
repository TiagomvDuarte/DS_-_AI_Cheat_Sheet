import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
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
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

const TimelineDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>Família NEAT — Linha Temporal de Algoritmos</p>
    <div style={{ position: 'relative', padding: '0 1rem' }}>
      <div style={{ position: 'absolute', left: '2rem', top: 0, bottom: 0, width: '2px', background: 'var(--card-border)', zIndex: 0 }}/>
      {[
        { year: '2002', name: 'NEAT', color: '#4a9eed', desc: 'Innovation numbers + especiação + topologia mínima. Base de toda a família. Resolve competing conventions, protege inovações e começa simples. Stanley & Miikkulainen, U-Texas.' },
        { year: '2007', name: 'HyperNEAT', color: '#4a9eed', desc: 'Codificação indirecta via CPPNs. Os pesos são gerados por um padrão geométrico — escala para redes com milhões de conexões. Explora regularidade geométrica do problema.' },
        { year: '2012', name: 'ES-HyperNEAT', color: '#4a9eed', desc: 'Evolvable Substrate. O substrato (posição dos neurónios) também evolui com base na variância do CPPN — não é mais definido pelo utilizador. Estrutura neuronal emerge do processo evolutivo.' },
        { year: '2017', name: 'CoDeepNEAT', color: '#4a9eed', desc: 'Co-evolução de módulos e blueprints para arquitecturas de deep learning. Permite evoluir automaticamente arquitecturas CNN + LSTM + FC. Mirhoseini et al., Google Brain.' },
        { year: '2017', name: 'OpenAI ES', color: '#4a9eed', desc: 'Evolution Strategies escalável sem topologia. Perturbações gaussianas + estimativa de gradiente distribuída. Compete com PPO em MuJoCo com 1000 CPUs em paralelo.' },
        { year: '2018+', name: 'MAP-Elites / QD', color: '#4a9eed', desc: 'Quality-Diversity: explorar o espaço de comportamentos e manter o melhor indivíduo de cada "nicho". Ilhas de diversidade ao invés de convergência. Illumination algorithm.' },
      ].map(({ year, name, color, desc }, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.4rem', paddingLeft: '1rem' }}>
          <div style={{ minWidth: 36, height: 36, borderRadius: '50%', background: 'var(--bg-secondary)', border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative', marginLeft: '-19px', flexShrink: 0 }}>
            <span style={{ fontSize: '0.55rem', fontWeight: 700, color }}>{year.slice(2)}</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color, fontSize: '0.95rem' }}>{name}</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginLeft: '0.4rem' }}>{year}</span>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', lineHeight: 1.6 }}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HyperNEATDetail = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>HyperNEAT — CPPN como codificação indirecta geométrica</p>
    <svg viewBox="0 0 600 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr7" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
        <marker id="arr7b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed"/></marker>
      </defs>

      <rect x={10} y={40} width={145} height={80} rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x={82} y={60} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">CPPN (evoluído pelo NEAT)</text>
      <text x={82} y={73} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">inputs: (x₁,y₁,x₂,y₂)</text>
      <text x={82} y={84} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">funções: sin, gauss, linear...</text>
      <text x={82} y={97} textAnchor="middle" fill="#4a9eed" fontSize="8" fontWeight="700">output: w = peso da conexão</text>
      <text x={82} y={111} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">1 CPPN codifica toda a rede alvo</text>

      <line x1={155} y1={80} x2={195} y2={80} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr7)"/>
      <text x={175} y={72} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">consulta</text>
      <text x={175} y={89} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">(x₁,y₁,x₂,y₂)</text>

      <rect x={200} y={20} width={175} height={120} rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x={287} y={38} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Substrate (ANN alvo)</text>
      <text x={287} y={50} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">nós com posições geométricas (x,y)</text>
      {[
        [225, 75], [225, 100], [225, 125],
        [285, 70], [285, 100], [285, 130],
        [345, 85], [345, 110],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={8} fill="rgba(74,158,237,0.12)" stroke="#4a9eed" strokeWidth="1.2"/>
      ))}
      {[[225,75,285,70],[225,100,285,100],[225,125,285,130],[285,70,345,85],[285,100,345,110]].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1+8} y1={y1} x2={x2-8} y2={y2} stroke="#4a9eed" strokeWidth="0.8" opacity="0.6"/>
      ))}

      <line x1={375} y1={80} x2={415} y2={80} stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr7b)"/>
      <text x={395} y={72} textAnchor="middle" fill="var(--text-secondary)" fontSize="7">w gerado</text>

      <rect x={420} y={25} width={165} height={110} rx="8" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x={502} y={43} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Insight geométrico</text>
      <text x={502} y={58} textAnchor="middle" fill="var(--text-primary)" fontSize="7.5">100 pesos no CPPN</text>
      <text x={502} y={70} textAnchor="middle" fill="var(--text-primary)" fontSize="7.5">→ 100.000 pesos na ANN</text>
      <text x={432} y={88} fill="var(--text-secondary)" fontSize="7.5">Se o problema tem simetria:</text>
      <text x={432} y={100} fill="var(--text-secondary)" fontSize="7.5">CPPN aprende w(x,y)=w(−x,y)</text>
      <text x={432} y={112} fill="var(--text-secondary)" fontSize="7.5">→ toda a rede torna-se simétrica</text>
      <text x={432} y={124} fill="#4a9eed" fontSize="7.5" fontWeight="700">automaticamente em todas as conexões</text>
    </svg>
  </div>
);

const CoDeepNEATDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
      CoDeepNEAT — Co-evolução de Módulos e Blueprints
    </p>
    <svg viewBox="0 0 740 320" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-cd" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed"/>
        </marker>
        <marker id="arr-cd2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed"/>
        </marker>
      </defs>

      {/* ── POPULAÇÃO DE MÓDULOS (esquerda) ── */}
      <rect x="10" y="10" width="195" height="295" rx="10"
        fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="6,3"/>
      <text x="107" y="30" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">POPULAÇÃO DE MÓDULOS</text>
      <text x="107" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">evoluídos pelo NEAT</text>

      {/* Módulo A — Conv */}
      <rect x="24" y="54" width="167" height="52" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="107" y="72" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">MÓDULO A</text>
      <text x="107" y="86" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Conv 3×3 → ReLU → Pool</text>
      <text x="107" y="98" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">fitness: 0.82</text>

      {/* Módulo B — LSTM */}
      <rect x="24" y="118" width="167" height="52" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="107" y="136" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">MÓDULO B</text>
      <text x="107" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">LSTM 128 → Dropout 0.3</text>
      <text x="107" y="162" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">fitness: 0.91</text>

      {/* Módulo C — FC */}
      <rect x="24" y="182" width="167" height="52" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="107" y="200" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">MÓDULO C</text>
      <text x="107" y="214" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">FC 256 → BatchNorm → ReLU</text>
      <text x="107" y="226" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">fitness: 0.77</text>

      {/* Módulo D — Attention */}
      <rect x="24" y="246" width="167" height="30" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed30" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="107" y="265" textAnchor="middle" fill="#4a9eed" fontSize="8">MÓDULO D  (novo, a avaliar…)</text>

      {/* ── POPULAÇÃO DE BLUEPRINTS (centro) ── */}
      <rect x="270" y="10" width="195" height="295" rx="10"
        fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="6,3"/>
      <text x="367" y="30" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">POPULAÇÃO DE BLUEPRINTS</text>
      <text x="367" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">grafos de montagem</text>

      {/* Blueprint 1 */}
      <rect x="284" y="54" width="167" height="100" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="367" y="70" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Blueprint 1</text>
      {/* mini graph: A → B → C */}
      {[{lbl:'A',cx:320,cy:100},{lbl:'B',cx:367,cy:100},{lbl:'C',cx:414,cy:100}].map(({lbl,cx,cy})=>(
        <g key={'bp1'+lbl}>
          <circle cx={cx} cy={cy} r={13} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
          <text x={cx} y={cy+4} textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">{lbl}</text>
        </g>
      ))}
      <line x1="333" y1="100" x2="354" y2="100" stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr-cd)"/>
      <line x1="380" y1="100" x2="401" y2="100" stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr-cd)"/>
      <text x="367" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">fitness: 0.88</text>
      <text x="367" y="142" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">A→B→C em série</text>

      {/* Blueprint 2 */}
      <rect x="284" y="168" width="167" height="105" rx="7" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
      <text x="367" y="184" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Blueprint 2</text>
      {/* mini graph: A fork → B and C → merge */}
      {[{lbl:'A',cx:315,cy:218},{lbl:'B',cx:367,cy:205},{lbl:'C',cx:367,cy:232},{lbl:'out',cx:415,cy:218}].map(({lbl,cx,cy})=>(
        <g key={'bp2'+lbl}>
          <circle cx={cx} cy={cy} r={lbl==='out'?11:13} fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5"/>
          <text x={cx} y={cy+4} textAnchor="middle" fill="#4a9eed" fontSize={lbl==='out'?7:9} fontWeight="700">{lbl}</text>
        </g>
      ))}
      <line x1="328" y1="212" x2="354" y2="207" stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr-cd)"/>
      <line x1="328" y1="224" x2="354" y2="230" stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr-cd)"/>
      <line x1="380" y1="207" x2="402" y2="215" stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr-cd)"/>
      <line x1="380" y1="230" x2="402" y2="221" stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr-cd)"/>
      <text x="367" y="255" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">fitness: 0.93  (melhor)</text>
      <text x="367" y="267" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">A → B‖C → concat</text>

      {/* ── REDE FINAL (direita) ── */}
      <rect x="530" y="10" width="200" height="295" rx="10"
        fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="6,3"/>
      <text x="630" y="30" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">REDE FINAL MONTADA</text>
      <text x="630" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Blueprint 2 + módulos reais</text>

      {[
        {lbl:'Módulo A', sub:'Conv 3×3→ReLU→Pool', cy:75,  color:'#4a9eed'},
        {lbl:'Módulo B', sub:'LSTM 128→Drop 0.3',  cy:135, color:'#4a9eed'},
        {lbl:'Módulo C', sub:'FC 256→BN→ReLU',     cy:195, color:'#4a9eed'},
        {lbl:'Output',   sub:'Softmax',             cy:255, color:'#4a9eed'},
      ].map(({lbl,sub,cy,color})=>(
        <g key={lbl}>
          <rect x="546" y={cy-22} width="168" height="40" rx="6"
            fill={`${color}12`} stroke={color} strokeWidth="1.5"/>
          <text x="630" y={cy-5} textAnchor="middle" fill={color} fontSize="9" fontWeight="700">{lbl}</text>
          <text x="630" y={cy+10} textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5">{sub}</text>
        </g>
      ))}
      {/* arrows — uniform 20px gap between boxes */}
      <line x1="630" y1="93"  x2="630" y2="113" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-cd2)"/>
      <line x1="630" y1="153" x2="630" y2="173" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-cd2)"/>
      <line x1="630" y1="213" x2="630" y2="233" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-cd2)"/>

      {/* ── Setas de co-evolução ── */}
      {/* módulos → blueprints */}
      <path d="M 205,80 Q 237,80 270,80" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-cd)" strokeDasharray="5,3"/>
      <path d="M 205,144 Q 237,144 270,155" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-cd)" strokeDasharray="5,3"/>
      <path d="M 205,208 Q 237,208 270,220" fill="none" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr-cd)" strokeDasharray="5,3"/>

      {/* blueprint vencedor → rede final */}
      <path d="M 465,218 Q 497,218 530,140" fill="none" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arr-cd2)"/>
      <text x="497" y="195" fill="#4a9eed" fontSize="8" fontWeight="700" textAnchor="middle">monta</text>

      {/* fitness sharing label */}
      <text x="237" y="155" fill="var(--text-secondary)" fontSize="7.5" textAnchor="middle" transform="rotate(-90 237 155)">partilha fitness</text>
    </svg>
  </div>
);

const CPPNActivations = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Funções de Activação dos CPPNs — Padrões Geométricos Gerados</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
      {[
        { name: 'sin(x)', color: '#4a9eed', pattern: 'Padrão ondulado periódico — simetrias bilaterais, estruturas repetidas. Ideal para redes com topologia segmentada (pernas de robô).' },
        { name: 'gauss(x)', color: '#4a9eed', pattern: 'Concentração radial — conexões fortes perto do centro, fracas na periferia. Útil para campos receptivos locais.' },
        { name: 'linear(x)', color: '#4a9eed', pattern: 'Gradiente monotónico — pesos crescem/decrescem com a distância. Simula topografias neuronais simples.' },
        { name: 'sigmoid(x)', color: '#4a9eed', pattern: 'Transição suave — regiões de pesos altos e baixos separadas por fronteira sigmoidal. Boa para separação de camadas.' },
      ].map(({ name, color, pattern }) => (
        <div key={name} style={{ background: 'var(--bg-primary)', borderRadius: 8, padding: '0.75rem', border: `1px solid ${color}30` }}>
          <div style={{ fontFamily: 'monospace', fontWeight: 700, color, fontSize: '0.85rem', marginBottom: '0.4rem' }}>{name}</div>
          <p style={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{pattern}</p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
      Um CPPN pode combinar qualquer número destas funções em camadas. O NEAT evolui a topologia do CPPN, permitindo descobrir automaticamente que combinação de padrões melhor representa a regularidade do problema.
    </div>
  </div>
);

export default function NEL7() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>MÓDULO 06</div>
        <h1 style={S.h1}>Evoluções do NEAT</h1>

        <TimelineDiagram />

        <hr style={S.divider} />

        {/* ── 1. HyperNEAT ── */}
        <div style={S.section}>
          <h2 style={S.h2}>1. HyperNEAT — Codificação Indirecta e Regularidade Geométrica</h2>
          <p style={S.p}><strong>Problema:</strong> O NEAT usa codificação directa — cada gene contém um peso. Para redes com N neurónios o genoma tem O(N²) genes. Acima de ~10 000 pesos a evolução torna-se intratável.</p>
          <p style={S.p}><strong>Solução:</strong> Codificação indirecta via CPPN (Compositional Pattern Producing Network). O genoma não contém os pesos mas a receita para os gerar. Dados (x₁,y₁,x₂,y₂) dos dois neurónios, o CPPN produz o peso. O CPPN é evoluído pelo NEAT com topologia variável.</p>

          <HyperNEATDetail />
          <CPPNActivations />

          <h3 style={S.h3}>Princípio de Regularidade</h3>
          <p style={S.p}>A hipótese central é que muitos problemas físicos têm regularidade geométrica: simetria bilateral, localidade visual, tonotopia auditiva. O CPPN aprende essa regularidade e aplica-a a toda a rede. Um CPPN com 100 pesos que aprende simetria bilateral gera automaticamente pesos simétricos para 100 000 conexões — compressão de 1000×.</p>
          <p style={S.p}><strong>Limitação:</strong> O substrato (posição geométrica dos neurónios) tem de ser definido manualmente. Escolher mal o substrato é fatal para o desempenho.</p>
        </div>

        <hr style={S.divider} />

        {/* ── 2. ES-HyperNEAT ── */}
        <div style={S.section}>
          <h2 style={S.h2}>2. ES-HyperNEAT — Substrato Evoluível</h2>
          <p style={S.p}><strong>Problema:</strong> No HyperNEAT o substrato é fixo — o utilizador decide onde colocar os neurónios. A geometria óptima pode não ser óbvia e escolher mal é fatal.</p>
          <p style={S.p}><strong>Solução:</strong> O substrato é determinado pela variância do CPPN. Onde o CPPN varia muito → colocar neurónios (zona de alta informação). Onde é quase constante → sem neurónios. O algoritmo de placement usa a segunda derivada do CPPN para identificar zonas de alta curvatura.</p>
          <p style={S.p}><strong>Insight:</strong> Permite descobrir automaticamente estruturas como camadas convolucionais ou topografias tonotópicas. É inspirado na neurogenese biológica: neurónios proliferam onde o gradiente de sinal de desenvolvimento é mais forte.</p>
          <div style={S.note}><strong>Limitação:</strong> Mais complexo de implementar, hiperparâmetros adicionais para o processo de placement, mais lento a convergir.</div>
        </div>

        <hr style={S.divider} />

        {/* ── 3. CoDeepNEAT ── */}
        <div style={S.section}>
          <h2 style={S.h2}>3. CoDeepNEAT — Arquitecturas Modulares de Deep Learning</h2>
          <p style={S.p}><strong>Problema:</strong> NEAT evolui redes monolíticas. Arquitecturas modernas de deep learning são compostas de módulos reutilizáveis (blocos conv, LSTM, atenção). Como evoluir arquitecturas modulares?</p>
          <p style={S.p}><strong>Solução:</strong> Co-evolução de duas populações: (1) <em>módulos</em> — redes neurais individuais (e.g., bloco conv 3×3, LSTM 128); (2) <em>blueprints</em> — grafos que especificam como montar módulos. A rede final é construída seguindo o blueprint, substituindo cada nó por um módulo.</p>
          <p style={S.p}><strong>Insight:</strong> Um bom módulo pode ser reutilizado em múltiplos blueprints. O crédito de fitness é partilhado: um módulo que aparece em vários blueprints vencedores tem fitness mais alto. A co-evolução explora as duas dimensões em paralelo.</p>

          <CoDeepNEATDiagram />

          <div style={S.note}><strong>Limitação:</strong> Espaço de pesquisa enormemente maior. O problema de crédito (qual módulo contribuiu para o fitness do blueprint?) é difícil de resolver. Requer muito mais poder computacional.</div>
        </div>

        <hr style={S.divider} />

        {/* ── 4. OpenAI ES ── */}
        <div style={S.section}>
          <h2 style={S.h2}>4. OpenAI ES — Escala Sem Topologia</h2>
          <p style={S.p}><strong>Problema:</strong> NEAT e HyperNEAT são difíceis de paralelizar — especiação e innovation numbers requerem coordenação global. Para redes muito grandes precisamos de escala massiva com centenas a milhares de CPUs.</p>
          <p style={S.p}><strong>Solução:</strong> ES simplificado com topologia fixa. Em cada geração t, gerar N perturbações gaussianas εᵢ ~ N(0,I), avaliar F(θ + σεᵢ) em paralelo e actualizar:</p>
          <div style={S.math}>
            <BlockMath math="\theta_{t+1} = \theta_t + \dfrac{\alpha}{N\sigma} \sum_{i} F(\theta + \sigma\varepsilon_i) \cdot \varepsilon_i" />
          </div>
          <p style={S.p}><strong>Insight:</strong> Cada avaliação é completamente independente — escala perfeitamente. Com 1440 CPUs, 1 geração leva o mesmo tempo que 1 avaliação. Em 2017, competiu com PPO em MuJoCo Ant-v1 com muito mais simplicidade e interpretabilidade.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>PPO / A3C</th><th style={S.th}>OpenAI ES</th></tr></thead>
              <tbody>
                {[
                  ['Gradiente', 'Exacto (REINFORCE, advantage)', 'Estimativa Monte Carlo — N perturbações'],
                  ['Paralelismo', 'Síncrono/assíncrono — comunica gradientes', 'Trivialmente paralelo — trabalhadores independentes'],
                  ['Memória', 'Armazena trajectórias (replay buffer)', 'Só θ + seed — comunicação mínima'],
                  ['Crédito temporal', 'Desconto γ ao longo do episódio', 'Só fitness total — sem crédito temporal'],
                  ['Convergência', 'Mais eficiente por dado', 'Menos eficiente — compensa com paralelismo'],
                ].map(([a, ppo, es]) => (
                  <tr key={a}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)' }}>{a}</td><td style={S.td}>{ppo}</td><td style={{ ...S.td, color: '#4a9eed' }}>{es}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}><strong>Limitação:</strong> Apenas optimiza pesos — a topologia é fixa (escolha humana). Muito mais ruidoso que métodos baseados em gradiente para funções diferenciáveis.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Tabela Comparativa Global</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Algoritmo</th><th style={S.th}>Evolui topologia?</th><th style={S.th}>Codificação</th><th style={S.th}>Escala máxima</th><th style={S.th}>Ideal para</th></tr></thead>
              <tbody>
                {[
                  ['NEAT', 'Sim (augmenting)', 'Directa (pesos + estrutura)', '~10k pesos', 'Problemas compactos: XOR, pole balancing, jogos simples'],
                  ['HyperNEAT', 'Sim (via CPPN)', 'Indirecta (padrão geométrico)', '~1M pesos', 'Problemas com regularidade geométrica: robótica, visão simples'],
                  ['ES-HyperNEAT', 'Sim + substrato', 'Indirecta + placement automático', '~1M pesos', 'Quando a geometria óptima é desconhecida'],
                  ['CoDeepNEAT', 'Sim (modular)', 'Módulos + blueprints', 'Deep learning', 'Arquitecturas modulares: CNN+LSTM, NAS'],
                  ['OpenAI ES', 'Não (pesos fixos)', 'Directa (vector de pesos)', 'Qualquer (paralelismo)', 'Redes grandes, controlo, multi-CPU, simplicidade'],
                ].map(([alg, top, cod, esc, use]) => (
                  <tr key={alg}><td style={{ ...S.td, fontWeight: 700, color: '#4a9eed' }}>{alg}</td><td style={S.td}>{top}</td><td style={S.td}>{cod}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{esc}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.83rem' }}>{use}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
