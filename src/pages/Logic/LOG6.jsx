import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Logic';

const C = '#4a9eed';
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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.75rem 1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '1rem', overflowX: 'auto', whiteSpace: 'pre' },
};

/* SVG 1: Bayes theorem medical test */
function SvgBayes() {
  return (
    <svg viewBox="0 0 620 230" style={{ width: '100%', display: 'block' }}>
      <rect width="620" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x="310" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Teorema de Bayes — Teste Médico (Doença Rara P=0.001)
      </text>
      {/* Prior box */}
      <rect x="20" y="42" width="130" height="75" rx="6" fill="rgba(74,158,237,0.06)" stroke={C} strokeWidth="2" />
      <text x="85" y="62" textAnchor="middle" fill={C} fontSize="10" fontWeight="700">PRIOR</text>
      <text x="85" y="82" textAnchor="middle" fill="#94a3b8" fontSize="11">P(D) = 0.001</text>
      <text x="85" y="100" textAnchor="middle" fill="#64748b" fontSize="9">P(¬D) = 0.999</text>
      {/* Likelihood box */}
      <rect x="245" y="42" width="140" height="75" rx="6" fill="rgba(74,158,237,0.06)" stroke="#4a9eed" strokeWidth="2" />
      <text x="315" y="62" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">VEROSIMILHANÇA</text>
      <text x="315" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">P(+|D)  = 0.99</text>
      <text x="315" y="96" textAnchor="middle" fill="#94a3b8" fontSize="10">P(+|¬D) = 0.01</text>
      {/* Posterior box */}
      <rect x="460" y="42" width="140" height="75" rx="6" fill="rgba(74,158,237,0.06)" stroke="#7dd3fc" strokeWidth="2" />
      <text x="530" y="62" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontWeight="700">POSTERIOR</text>
      <text x="530" y="82" textAnchor="middle" fill="#7dd3fc" fontSize="13" fontWeight="700">P(D|+)≈9%</text>
      <text x="530" y="100" textAnchor="middle" fill="#64748b" fontSize="9">Base rate neglect!</text>
      {/* Arrows */}
      <defs>
        <marker id="arr6" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={C} />
        </marker>
      </defs>
      <line x1="152" y1="79" x2="242" y2="79" stroke={C} strokeWidth="1.5" markerEnd="url(#arr6)" />
      <line x1="387" y1="79" x2="457" y2="79" stroke={C} strokeWidth="1.5" markerEnd="url(#arr6)" />
      {/* Formula */}
      <rect x="20" y="135" width="580" height="50" rx="6" fill="rgba(74,158,237,0.06)" />
      <text x="310" y="153" textAnchor="middle" fill={C} fontSize="11" fontWeight="700">
        P(D|+) = P(+|D)·P(D) / P(+)
      </text>
      <text x="310" y="173" textAnchor="middle" fill="#94a3b8" fontSize="10">
        = (0.99 × 0.001) / (0.99×0.001 + 0.01×0.999)  =  0.00099 / 0.01098  ≈  0.090  =  9%
      </text>
      <text x="310" y="215" textAnchor="middle" fill="#475569" fontSize="10">
        Apesar de 99% de sensibilidade, só ~9% dos positivos têm a doença — efeito da taxa base baixa
      </text>
    </svg>
  );
}

/* SVG 2: Asia Bayesian Network */
function SvgAsia() {
  const nodes = [
    { id: 'A', label: 'Asia', x: 80,  y: 55,  note: 'Visit Asia?' },
    { id: 'S', label: 'Smoking', x: 310, y: 55,  note: 'Smoker?' },
    { id: 'T', label: 'Tuberculosis', x: 80,  y: 145, note: 'TB' },
    { id: 'L', label: 'LungCancer', x: 310, y: 145, note: 'Lung Ca.' },
    { id: 'B', label: 'Bronchitis', x: 490, y: 145, note: 'Bronchitis' },
    { id: 'E', label: 'TborCancer', x: 190, y: 235, note: 'TB∨Cancer' },
    { id: 'X', label: 'Xray', x: 90,  y: 325, note: 'Xray result' },
    { id: 'D', label: 'Dyspnoea', x: 340, y: 325, note: 'Breathless' },
  ];
  const edges = [
    ['A','T'],['S','L'],['S','B'],['T','E'],['L','E'],['E','X'],['E','D'],['B','D'],
  ];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  // highlight path for query P(D|S=T)
  const hlPath = new Set(['S','L','E','D']);
  return (
    <svg viewBox="0 0 590 390" style={{ width: '100%', display: 'block' }}>
      <rect width="590" height="390" fill="var(--bg-secondary)" rx="8" />
      <text x="295" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Asia Bayesian Network — 8 nós, 18 parâmetros
      </text>
      <defs>
        <marker id="arnb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#475569" />
        </marker>
        <marker id="arhl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={C} />
        </marker>
      </defs>
      {edges.map((e, i) => {
        const a = byId[e[0]], b = byId[e[1]];
        const isHl = hlPath.has(e[0]) && hlPath.has(e[1]);
        return (
          <line key={i} x1={a.x} y1={a.y + 18} x2={b.x} y2={b.y - 18}
            stroke={isHl ? C : 'var(--card-border)'} strokeWidth={isHl ? 2 : 1.2}
            markerEnd={isHl ? 'url(#arhl)' : 'url(#arnb)'} />
        );
      })}
      {nodes.map(n => {
        const isHl = hlPath.has(n.id);
        return (
          <g key={n.id}>
            <ellipse cx={n.x} cy={n.y} rx="50" ry="18" fill="rgba(74,158,237,0.06)" stroke={isHl ? C : 'var(--card-border)'} strokeWidth={isHl ? 2 : 1} />
            <text x={n.x} y={n.y - 2} textAnchor="middle" dominantBaseline="middle" fill={isHl ? C : '#94a3b8'} fontSize="9" fontWeight={isHl ? '700' : '400'}>{n.note}</text>
          </g>
        );
      })}
      <rect x="10" y="358" width="570" height="24" rx="4" fill="rgba(74,158,237,0.06)" />
      <text x="295" y="373" textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="10">
        Caminho destacado: query P(Dyspnoea | Smoking=T) via d-separação e Variable Elimination
      </text>
    </svg>
  );
}

/* SVG 3: BIC score vs model complexity */
function SvgBIC() {
  const pts = [
    {k:0,  bic:-120},
    {k:2,  bic:-85},
    {k:4,  bic:-55},
    {k:6,  bic:-38},
    {k:8,  bic:-30},
    {k:10, bic:-32},
    {k:12, bic:-40},
    {k:14, bic:-52},
    {k:16, bic:-68},
  ];
  const ox = 60, oy = 30, w = 480, h = 130;
  const maxK = 16, minBIC = -130, maxBIC = -20;
  const toX = (k) => ox + (k / maxK) * w;
  const toY = (bic) => oy + h - ((bic - minBIC) / (maxBIC - minBIC)) * h;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.k).toFixed(1)},${toY(p.bic).toFixed(1)}`).join(' ');
  const optPt = pts[4];
  return (
    <svg viewBox="0 0 600 220" style={{ width: '100%', display: 'block' }}>
      <rect width="600" height="220" fill="var(--bg-secondary)" rx="8" />
      <text x="300" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        Score BIC vs Complexidade do Modelo (nº parâmetros k)
      </text>
      {/* Axes */}
      <line x1={ox} y1={oy} x2={ox} y2={oy + h + 10} stroke="var(--card-border)" strokeWidth="1.5" />
      <line x1={ox} y1={oy + h + 10} x2={ox + w + 10} y2={oy + h + 10} stroke="var(--card-border)" strokeWidth="1.5" />
      <text x={ox - 10} y={oy + h / 2} textAnchor="middle" fill="#64748b" fontSize="9" transform={`rotate(-90,${ox - 10},${oy + h / 2})`}>BIC (maior = melhor)</text>
      <text x={ox + w / 2} y={oy + h + 26} textAnchor="middle" fill="#64748b" fontSize="9">Complexidade k (parâmetros)</text>
      {/* Grid lines */}
      {[-120,-100,-80,-60,-40].map(bic => (
        <g key={bic}>
          <line x1={ox} y1={toY(bic)} x2={ox + w} y2={toY(bic)} stroke="var(--card-border)" strokeWidth="1" />
          <text x={ox - 5} y={toY(bic) + 3} textAnchor="end" fill="#475569" fontSize="8">{bic}</text>
        </g>
      ))}
      {/* Curve */}
      <path d={pathD} fill="none" stroke={C} strokeWidth="2.5" strokeLinejoin="round" />
      {/* Points */}
      {pts.map(p => (
        <circle key={p.k} cx={toX(p.k)} cy={toY(p.bic)} r="4" fill={C} />
      ))}
      {/* Optimal marker */}
      <line x1={toX(optPt.k)} y1={oy} x2={toX(optPt.k)} y2={oy + h} stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={toX(optPt.k) + 38} y={oy + 6} textAnchor="middle" fill="#7dd3fc" fontSize="9">k* = {optPt.k} (óptimo)</text>
      <text x="300" y="205" textAnchor="middle" fill="#475569" fontSize="10">
        BIC = log L(θ) − (k/2)·log n   —   penaliza complexidade para evitar overfitting
      </text>
    </svg>
  );
}

/* SVG 4: MLN ground network Alice/Bob/Carol */
function SvgMLN() {
  // atom rect: center-x = x+50, center-y = y
  const AW = 100;
  const atoms = [
    { id: 'sA', label: 'Smokes(Alice)', x: 30,  y: 130, color: '#4a9eed' },
    { id: 'cA', label: 'Cancer(Alice)', x: 30,  y: 210, color: '#bae6fd' },
    { id: 'sB', label: 'Smokes(Bob)',   x: 390, y: 130, color: '#4a9eed' },
    { id: 'cB', label: 'Cancer(Bob)',   x: 390, y: 210, color: '#bae6fd' },
    { id: 'sC', label: 'Smokes(Carol)', x: 210, y: 300, color: '#4a9eed' },
    { id: 'cC', label: 'Cancer(Carol)', x: 210, y: 375, color: '#bae6fd' },
  ];
  const people = [
    { id: 'Alice', cx: 80,  cy: 58,  atomIds: ['sA'] },
    { id: 'Bob',   cx: 440, cy: 58,  atomIds: ['sB'] },
    { id: 'Carol', cx: 260, cy: 240, atomIds: ['sC'] },
  ];
  // factor center position + which atoms it connects
  const factors = [
    { label: 'w=1.5\nS→C',   fx: 30+50,  fy: 170, connects: ['sA','cA'] },
    { label: 'w=1.5\nS→C',   fx: 390+50, fy: 170, connects: ['sB','cB'] },
    { label: 'w=1.5\nS→C',   fx: 210+50, fy: 338, connects: ['sC','cC'] },
    { label: 'w=1.1\nF∧S→S', fx: 260,    fy: 130, connects: ['sA','sB'] },
    { label: 'w=1.1\nF∧S→S', fx: 160,    fy: 258, connects: ['sA','sC'] },
    { label: 'w=1.1\nF∧S→S', fx: 360,    fy: 258, connects: ['sB','sC'] },
  ];
  const byId = Object.fromEntries(atoms.map(a => [a.id, { cx: a.x + AW/2, cy: a.y, ...a }]));
  return (
    <svg viewBox="0 0 520 430" style={{ width: '100%', display: 'block' }}>
      <rect width="520" height="430" fill="var(--bg-secondary)" rx="8" />
      <text x="260" y="22" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">
        MLN — Ground Network (Alice, Bob, Carol)
      </text>
      {/* Factor → atom lines (drawn first, behind everything) */}
      {factors.map((f, fi) => f.connects.map(aid => {
        const a = byId[aid];
        return <line key={`${fi}-${aid}`} x1={f.fx} y1={f.fy} x2={a.cx} y2={a.cy} stroke="var(--card-border)" strokeWidth="1" />;
      }))}
      {/* Person → Smokes connector (dashed) */}
      {people.map(p => p.atomIds.map(aid => {
        const a = byId[aid];
        return <line key={`p-${p.id}-${aid}`} x1={p.cx} y1={p.cy + 22} x2={a.cx} y2={a.cy - 12} stroke={`${C}60`} strokeWidth="1" strokeDasharray="3,2" />;
      }))}
      {/* Atom nodes */}
      {atoms.map(a => (
        <g key={a.id}>
          <rect x={a.x} y={a.y - 12} width={AW} height="24" rx="5" fill="var(--bg-secondary)" stroke={a.color} strokeWidth="1.5" />
          <text x={a.x + AW/2} y={a.y} textAnchor="middle" dominantBaseline="middle" fill={a.color} fontSize="8.5">{a.label}</text>
        </g>
      ))}
      {/* Factor squares */}
      {factors.map((f, fi) => (
        <g key={fi}>
          <rect x={f.fx - 22} y={f.fy - 15} width="44" height="30" rx="4" fill="var(--bg-secondary)" stroke={C} strokeWidth="1.5" />
          <text x={f.fx} y={f.fy - 4} textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="7">{f.label.split('\n')[0]}</text>
          <text x={f.fx} y={f.fy + 8} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" fontSize="7">{f.label.split('\n')[1]}</text>
        </g>
      ))}
      {/* Person circles (on top) */}
      {people.map(p => (
        <g key={p.id}>
          <circle cx={p.cx} cy={p.cy} r="24" fill="var(--bg-secondary)" stroke={C} strokeWidth="2" />
          <text x={p.cx} y={p.cy} textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="9.5" fontWeight="700">{p.id}</text>
        </g>
      ))}
      <text x="260" y="418" textAnchor="middle" fill="#475569" fontSize="9">
        Inferência MAP: MaxWalkSAT   |   Marginal: MC-SAT
      </text>
    </svg>
  );
}

export default function LOG6() {
  const mod = modules[5];
  return (
    <div style={S.page}>
      <Link to="/logic" style={S.back}>← Logic</Link>
      <div style={S.badge}>MÓDULO {mod.num}</div>
      <h1 style={S.h1}>{mod.title}</h1>

      {/* ── Secção 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Raciocínio Probabilístico e Teorema de Bayes</h2>
        <p style={S.p}>
          Richard Cox (1946) mostrou que qualquer sistema de raciocínio que satisfaça axiomas básicos de consistência deve
          ser isomórfico à teoria da probabilidade — a probabilidade é a <em>extensão única</em> da lógica ao raciocínio
          sob incerteza. Onde a lógica clássica opera com {'{verdadeiro, falso}'}, a probabilidade opera em [0,1].
        </p>
        <div style={S.highlight}>
          <strong>Regra de Bayes:</strong> P(H|E) = P(E|H) · P(H) / P(E)<br />
          onde P(H) é o <em>prior</em> (crença antes da evidência), P(E|H) a <em>verosimilhança</em> (quão provável é a
          evidência se H for verdadeiro), P(E) a evidência marginal (normalizador), e P(H|E) o <em>posterior</em>
          (crença actualizada).
        </div>
        <p style={S.p}>
          <strong>Exemplo — Diagnóstico médico:</strong> uma doença rara afecta 1 em 1000 pessoas (P(D)=0.001).
          Um teste tem sensibilidade de 99% (P(+|D)=0.99) e especificidade de 99% (P(+|¬D)=0.01). Se o teste der positivo,
          qual a probabilidade de estar doente?
        </p>
        <div style={S.code}>{`P(D|+) = P(+|D)·P(D) / P(+)
       = (0.99 × 0.001) / (0.99×0.001 + 0.01×0.999)
       = 0.00099 / (0.00099 + 0.00999)
       = 0.00099 / 0.01098
       ≈ 9.0%

Intuição: de 100 000 pessoas testadas:
  — 100 doentes → 99 positivos verdadeiros
  — 99 900 sãos → 999 falsos positivos
  Total positivos: 1098    |    Verdadeiros doentes: 99
  → 99/1098 ≈ 9%`}</div>
        <div style={S.diagram}><SvgBayes /></div>
        <p style={S.p}>
          Este resultado contraintuitivo chama-se <strong>Base Rate Neglect</strong>: quando a doença é rara, mesmo um teste
          muito preciso produz maioritariamente falsos positivos. A distribuição conjunta completa sobre n variáveis binárias
          requer 2ⁿ−1 parâmetros — para n=30 são mais de 10⁹ valores. A <em>independência condicional</em> é a chave para
          tornar o raciocínio probabilístico tratável.
        </p>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Redes Bayesianas — Estrutura e Inferência</h2>
        <p style={S.p}>
          Uma <strong>Rede Bayesiana</strong> é um DAG (Directed Acyclic Graph) onde cada nó Xᵢ tem uma Conditional
          Probability Table (CPT) P(Xᵢ | Parents(Xᵢ)). A distribuição conjunta factoriza como:
        </p>
        <div style={S.code}>{`P(X₁,…,Xₙ) = ∏ᵢ P(Xᵢ | Parents(Xᵢ))

Asia network (Lauritzen & Spiegelhalter 1988):
  8 nós binários: Asia, Smoking, Tuberculosis, LungCancer,
                  Bronchitis, TBorCancer, Xray, Dyspnoea
  Parâmetros: 18   (vs. 2⁸−1 = 255 na distribuição conjunta)
  Factor de compressão: 14×

Independências codificadas (exemplos):
  Tuberculosis ⊥ Smoking | {}           (sem ligação directa)
  Xray ⊥ Dyspnoea | TBorCancer         (d-separados dado E)
  Asia ⊥ Smoking | {}                  (variáveis independentes)`}</div>
        <div style={S.diagram}><SvgAsia /></div>
        <p style={S.p}>
          <strong>d-Separação</strong> (Pearl 1988) é o critério que determina independência condicional pela estrutura do
          grafo. Três padrões básicos: <em>Chain</em> (A→B→C: A⊥C|B), <em>Fork</em> (A←B→C: A⊥C|B),
          <em>Collider</em> (A→B←C: A⊥C mas A not-⊥ C|B — observar B activa a dependência "explicação comum").
        </p>
        <p style={S.p}>
          <strong>Variable Elimination (VE):</strong> para responder a P(Q|E=e), elimina variáveis ocultas uma a uma
          por marginalização — multiplica factores e soma sobre a variável. Ordem de eliminação afecta dramaticamente
          o custo: encontrar a ordem óptima é NP-completo (equivale a tree-width do grafo moral).
        </p>
        <div style={S.note}>
          <strong>Belief Propagation (BP):</strong> passa mensagens µ entre nós vizinhos. Exact em árvores (poly-time);
          loopy BP em grafos com ciclos — convergência não garantida mas funciona bem em prática (decoding LDPC codes,
          vision). <strong>MCMC Gibbs Sampling:</strong> para grafos densos — amostra Xᵢ de P(Xᵢ|Markov_blanket(Xᵢ))
          ciclicamente; ergódico, converge para a distribuição correcta; lento a misturar em distribuições multimodais.
        </div>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Aprendizagem em Redes Bayesianas</h2>
        <p style={S.p}>
          Dado um dataset D com n observações completas e uma estrutura G fixa, a estimativa de máxima verosimilhança
          (MLE) dos parâmetros reduz-se a contar frequências relativas:
        </p>
        <div style={S.code}>{`MLE para CPTs:
  θ_{x|pa} = Count(Xᵢ=x, Parents=pa) / Count(Parents=pa)

Problema: MLE com dados escassos → probabilidades 0 → log-likelihood -∞
Solução: Laplace smoothing (add-one / add-α):
  θ_{x|pa} = (Count(Xᵢ=x, Pa=pa) + α) / (Count(Pa=pa) + α·|Dᵢ|)

Abordagem Bayesiana — prior Dirichlet:
  θ_{x|pa} | Pa ~ Dirichlet(α_{x|pa})
  Posterior após observar D: Dirichlet(α_{x|pa} + Count(x,pa))
  → mean posterior = (α_{x|pa} + Count) / (Σ α + N_pa)
  → interpolação suave entre prior e frequências empíricas`}</div>
        <p style={S.p}>
          <strong>Aprendizagem de estrutura:</strong> dado que o número de DAGs sobre n nós cresce super-exponencialmente
          (~n!·2^C(n,2)), usamos heurísticas de busca. <em>Score-based:</em> pontua cada estrutura G com BIC = log L(θ̂|G,D) − (k/2)·log n,
          onde k = número de parâmetros livres. BIC penaliza complexidade para evitar overfitting.
        </p>
        <div style={S.diagram}><SvgBIC /></div>
        <p style={S.p}>
          <strong>Algoritmo PC</strong> (constraint-based, Spirtes et al.): começa com grafo completo e remove arestas
          com testes de independência condicional (χ² ou Fisher Z), depois orienta v-structures (A→B←C com A⊥C e
          B não separador), e aplica as Meek rules para propagar orientações sem criar ciclos ou novas v-structures.
          Correcto e completo em distribuições Gaussianas e sob a condição de faithfulness.
        </p>
        <div style={S.note}>
          <strong>EM para dados incompletos:</strong> quando há variáveis latentes ou dados em falta, MLE directa é
          intratável. O algoritmo EM alterna entre:<br />
          <em>E-step:</em> calcula E[suficiente estatística | D, θ_old] usando inferência exacta na rede.<br />
          <em>M-step:</em> actualiza θ maximizando a Q-função = esperança do log-likelihood completo.<br />
          Garante convergência para máximo local (nunca piora a verosimilhança). Lento perto do máximo.
        </div>
      </div>
      <hr style={S.divider} />

      {/* ── Secção 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Markov Logic Networks e Probabilistic Soft Logic</h2>
        <p style={S.p}>
          <strong>Markov Logic Networks</strong> (Richardson &amp; Domingos, 2006) combinam lógica de primeira ordem com
          modelos de Markov: uma MLN é um conjunto de pares (fórmula FOL, peso real). Um peso alto significa a fórmula
          é quase sempre verdadeira; peso 0 significa sem restrição; pesos negativos penalizam a verdade.
        </p>
        <div style={S.code}>{`MLN para Smoking/Cancer:
  1.5  Smokes(x) ⇒ Cancer(x)          // peso 1.5: forte mas não certo
  1.1  Friends(x,y) ∧ Smokes(x) ⇒ Smokes(y)  // influência social

Grounding para {Alice, Bob, Carol}:
  Smokes(Alice), Smokes(Bob), Smokes(Carol)       // 3 ground atoms
  Cancer(Alice), Cancer(Bob), Cancer(Carol)       // 3 ground atoms
  Friends(Alice,Bob), Friends(Alice,Carol), ...   // 6 ground atoms

  → 12 ground atoms = variáveis binárias do MRF
  → 1 factor por fórmula ground: e^(w·f(x))

Distribuição:
  P(X=x) ∝ exp( Σᵢ wᵢ · Σⱼ f(xⱼ) )
  onde xⱼ são as groundings possíveis da fórmula i`}</div>
        <div style={S.diagram}><SvgMLN /></div>
        <p style={S.p}>
          <strong>Inferência MAP:</strong> encontra a atribuição de maior probabilidade — equivalente a satisfação ponderada
          de restrições. Algoritmo <em>MaxWalkSAT</em> combina WalkSAT com optimização de peso: alterna entre flip aleatório
          e flip greedy de acordo com os pesos das fórmulas violadas.
        </p>
        <p style={S.p}>
          <strong>Inferência marginal:</strong> MC-SAT (Poon &amp; Domingos, 2006) usa slice sampling para amostrar estados
          satisfazendo um conjunto aleatório de restrições — eficaz em redes com milhões de ground atoms.
        </p>
        <div style={S.note}>
          <strong>PSL (Probabilistic Soft Logic):</strong> usa lógica de Łukasiewicz com valores contínuos em [0,1].
          Predicados soft: Friends(Alice,Bob) = 0.8 (probabilidade contínua de amizade). Regras:
          Friends(A,B) ∧ Smokes(A) → Smokes(B) com peso w. A inferência MAP reduz-se a um problema de optimização
          convexa (Hinge-loss MRF) — muito mais rápido que MLN. PSL é usado em link prediction, entity resolution
          e social network analysis onde dados são naturalmente contínuos.
        </div>
      </div>
    </div>
  );
}
