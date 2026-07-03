import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 960, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  ul: { paddingLeft: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.9, fontSize: '1rem' },
  li: { marginBottom: '0.4rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

const GAvsGPDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>GA vs GP — A diferença fundamental está no indivíduo</p>
    <svg viewBox="0 0 660 260" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* GA side */}
      <text x="160" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">ALGORITMO GENÉTICO (GA)</text>
      <text x="160" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Indivíduo = string de comprimento fixo</text>
      {['1','0','1','1','0','1','0'].map((b, i) => (
        <g key={i}>
          <rect x={80 + i * 26} y={38} width={22} height={22} rx="3" fill={b === '1' ? 'rgba(249,115,22,0.10)' : 'var(--bg-primary)'} stroke={b === '1' ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
          <text x={91 + i * 26} y={53} textAnchor="middle" fill={b === '1' ? '#f97316' : 'var(--text-secondary)'} fontSize="11" fontWeight="700">{b}</text>
        </g>
      ))}
      <text x="160" y="78" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">comprimento n fixo — cada posição é um gene</text>

      <rect x="16" y="90" width="278" height="120" rx="8" fill="var(--bg-primary)" stroke="rgba(249,115,22,0.10)" strokeWidth="1.5"/>
      <text x="155" y="107" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Operadores standard</text>
      {['• Representa uma SOLUÇÃO ao problema', '• Crossover: 1 ponto, 2 pontos, uniforme', '• Mutação: bit-flip com prob. pm', '• Tamanho do cromossoma constante', '• Usado em CIFO (optimização)'].map((l, i) => (
        <text key={i} x="28" y={126 + i * 17} fill="var(--text-primary)" fontSize="10">{l}</text>
      ))}

      {/* GP side */}
      <text x="500" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">PROGRAMAÇÃO GENÉTICA (GP)</text>
      <text x="500" y="30" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Indivíduo = programa (árvore de expressão)</text>
      <circle cx={500} cy={60} r={14} fill="#f9731620" stroke="#f97316" strokeWidth="1.5"/>
      <text x={500} y={65} textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">+</text>
      <line x1={488} y1={74} x2={465} y2={90} stroke="#f97316" strokeWidth="1.5"/>
      <circle cx={458} cy={100} r={13} fill="#f9731615" stroke="#f97316" strokeWidth="1.5"/>
      <text x={458} y={105} textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">×</text>
      <line x1={447} y1={113} x2={432} y2={128} stroke="#f97316" strokeWidth="1.2"/>
      <circle cx={426} cy={136} r={11} fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1"/>
      <text x={426} y={140} textAnchor="middle" fill="#f97316" fontSize="10">x₁</text>
      <line x1={468} y1={113} x2={480} y2={128} stroke="#f97316" strokeWidth="1.2"/>
      <circle cx={486} cy={136} r={11} fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1"/>
      <text x={486} y={140} textAnchor="middle" fill="#f97316" fontSize="10">x₂</text>
      <line x1={512} y1={74} x2={535} y2={92} stroke="#f97316" strokeWidth="1.5"/>
      <circle cx={542} cy={100} r={13} fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1"/>
      <text x={542} y={105} textAnchor="middle" fill="#f97316" fontSize="10">3.5</text>
      <text x="500" y="162" textAnchor="middle" fill="#f97316" fontSize="10">representa: x₁ × x₂ + 3.5</text>

      <rect x="370" y="176" width="260" height="68" rx="5" fill="var(--bg-primary)" stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
      <text x="500" y="194" textAnchor="middle" fill="#f97316" fontSize="10">• Representa um PROGRAMA/FUNÇÃO</text>
      <text x="500" y="212" textAnchor="middle" fill="#f97316" fontSize="10">• Tamanho e forma variáveis — o programa evolui</text>
      <text x="500" y="230" textAnchor="middle" fill="#f97316" fontSize="10">• Usado em NEL (aprendizagem de modelos)</text>
    </svg>
  </div>
);

const TreeDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Representação em Árvore — f(x₁, x₂) = (x₁ + x₂) × sin(x₁)</p>
    <svg viewBox="0 0 620 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x={210} y={12} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">raiz (nó interno)</text>
      <circle cx={210} cy={36} r={18} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2"/>
      <text x={210} y={42} textAnchor="middle" fill="#f97316" fontSize="15" fontWeight="800">×</text>

      <line x1={190} y1={50} x2={137} y2={80} stroke="#f97316" strokeWidth="1.5"/>
      <circle cx={120} cy={94} r={16} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x={120} y={100} textAnchor="middle" fill="#f97316" fontSize="14" fontWeight="700">+</text>

      <line x1={107} y1={110} x2={78} y2={135} stroke="#f97316" strokeWidth="1.2"/>
      <circle cx={70} cy={146} r={14} fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1.2"/>
      <text x={70} y={151} textAnchor="middle" fill="#f97316" fontSize="11">x₁</text>
      <text x={70} y={172} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">folha (terminal)</text>

      <line x1={133} y1={110} x2={158} y2={135} stroke="#f97316" strokeWidth="1.2"/>
      <circle cx={166} cy={146} r={14} fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1.2"/>
      <text x={166} y={151} textAnchor="middle" fill="#f97316" fontSize="11">x₂</text>
      <text x={166} y={172} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">folha (terminal)</text>

      <line x1={230} y1={50} x2={280} y2={84} stroke="#f97316" strokeWidth="1.5"/>
      <circle cx={298} cy={94} r={16} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5"/>
      <text x={298} y={100} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">sin</text>
      <text x={315} y={70} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">nó interno (unário)</text>

      <line x1={298} y1={110} x2={298} y2={132} stroke="#f97316" strokeWidth="1.2"/>
      <circle cx={298} cy={146} r={14} fill="var(--bg-primary)" stroke="#f97316" strokeWidth="1.2"/>
      <text x={298} y={151} textAnchor="middle" fill="#f97316" fontSize="11">x₁</text>

      <rect x="370" y="14" width="238" height="200" rx="8" fill="var(--bg-primary)" stroke="rgba(249,115,22,0.10)" strokeWidth="1.5"/>
      <text x="489" y="32" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">AVALIAÇÃO RECURSIVA</text>
      <text x="489" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">para x₁=2, x₂=3:</text>
      {[
        { y: 70,  t: '① folha x₁ → 2', c: 'var(--text-primary)' },
        { y: 90,  t: '② folha x₂ → 3', c: 'var(--text-primary)' },
        { y: 110, t: '③ +(x₁,x₂) → 2+3 = 5', c: '#f97316' },
        { y: 130, t: '④ folha x₁ → 2', c: 'var(--text-primary)' },
        { y: 150, t: '⑤ sin(x₁) → sin(2) ≈ 0.909', c: '#f97316' },
        { y: 170, t: '⑥ ×(③,⑤) → 5 × 0.909 = 4.55', c: '#f97316' },
        { y: 196, t: 'output do programa: 4.55', c: '#f97316' },
      ].map(({ y, t, c }) => (
        <text key={y} x="382" y={y} fill={c} fontSize="10">{t}</text>
      ))}
    </svg>
  </div>
);

/* ── Diagrama GSM corrigido — legível ── */
const GSMDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
      Geometric Semantic Mutation (GSM) — movimento no espaço semântico
    </p>
    <svg viewBox="0 0 780 310" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-gsm2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#f97316"/>
        </marker>
        <marker id="arr-gsm-or" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#f97316"/>
        </marker>
      </defs>

      {/* Eixos */}
      <text x="42" y="18" fill="var(--text-secondary)" fontSize="10" fontWeight="700">ESPAÇO SEMÂNTICO (projeção 2D de ℝⁿ)</text>
      <line x1="42" y1="270" x2="420" y2="270" stroke="var(--text-secondary)" strokeWidth="1.2"/>
      <line x1="42" y1="270" x2="42" y2="30" stroke="var(--text-secondary)" strokeWidth="1.2"/>
      <text x="425" y="274" fill="var(--text-secondary)" fontSize="10">sem₁</text>
      <text x="26" y="28"  fill="var(--text-secondary)" fontSize="10">sem₂</text>

      {/* ── Pontos ── draw lines first, then circles on top */}

      {/* d(T,★) — vermelho tracejado */}
      <line x1={80} y1={218} x2={218} y2={74} stroke="#f97316" strokeWidth="1.3" strokeDasharray="5,3"/>
      {/* d(T',★) — verde tracejado */}
      <line x1={186} y1={120} x2={224} y2={74} stroke="#f97316" strokeWidth="1.3" strokeDasharray="5,3"/>
      {/* Seta T → T' */}
      <line x1={90} y1={210} x2={172} y2={134} stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arr-gsm2)"/>
      {/* R₁ → R₂ direcção */}
      <line x1={295} y1={198} x2={385} y2={238} stroke="#f97316" strokeWidth="1.8" strokeDasharray="6,3" markerEnd="url(#arr-gsm-or)"/>

      {/* y_target */}
      <circle cx={230} cy={58} r={18} fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2.5"/>
      <text x={230} y={64} textAnchor="middle" fill="#f97316" fontSize="15" fontWeight="700">★</text>
      <text x={230} y={35} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">y_target</text>

      {/* T */}
      <circle cx={72} cy={226} r={17} fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2.5"/>
      <text x={72} y={232} textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="700">T</text>
      <text x={72} y={253} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">sem(T)</text>

      {/* T' */}
      <circle cx={180} cy={126} r={17} fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2.5"/>
      <text x={180} y={132} textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="700">T'</text>

      {/* R₁ */}
      <circle cx={284} cy={196} r={14} fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2"/>
      <text x={284} y={201} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">R₁</text>

      {/* R₂ */}
      <circle cx={396} cy={242} r={14} fill="var(--bg-secondary)" stroke="#f97316" strokeWidth="2"/>
      <text x={396} y={247} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">R₂</text>

      {/* Labels das distâncias — posicionadas para não sobrepor */}
      <text x={100} y={152} textAnchor="end" fill="#f97316" fontSize="10" fontWeight="600">d(T,★)</text>
      <text x={240} y={96}  textAnchor="start" fill="#f97316" fontSize="10" fontWeight="600">d(T',★)</text>
      <text x={160} y={220} textAnchor="end" fill="#f97316" fontSize="10" fontWeight="700">+ms·(R₁−R₂)</text>
      <text x={400} y={218} textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">direcção aleatória</text>

      {/* Painel fórmula */}
      <rect x="458" y="18" width="308" height="272" rx="12" fill="var(--bg-primary)" stroke="rgba(249,115,22,0.10)" strokeWidth="1.5"/>
      <text x="612" y="44" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">FÓRMULA GSM</text>
      <rect x="472" y="52" width="280" height="34" rx="7" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1"/>
      <text x="612" y="74" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">T' = T + ms × (T_R₁ − T_R₂)</text>
      <line x1="472" y1="96" x2="752" y2="96" stroke="var(--text-secondary)" strokeWidth="1"/>
      {[
        { y: 118, label: 'T:',           desc: 'programa actual',                       color: '#f97316' },
        { y: 152, label: 'ms:',          desc: 'passo de mutação (0.01 – 1)',            color: '#f97316' },
        { y: 186, label: 'T_R₁, T_R₂:', desc: 'árvores aleatórias com saídas ∈ [0,1]', color: '#f97316' },
        { y: 220, label: 'R₁ − R₂:',    desc: 'direcção aleatória centrada em zero',    color: '#f97316' },
        { y: 254, label: "T':",          desc: 'novo programa (mais perto de y)',         color: '#f97316' },
      ].map(({ y, label, desc, color }) => (
        <g key={y}>
          <text x="480" y={y}      fill={color}                fontSize="11" fontWeight="700">{label}</text>
          <text x="480" y={y + 17} fill="var(--text-secondary)" fontSize="10">{desc}</text>
        </g>
      ))}
    </svg>
  </div>
);

const OperatorsExplorer = () => {
  const [sel, setSel] = useState(0);
  const operators = [
    {
      name: 'Crossover Subtree', color: '#f97316',
      what: 'Seleccionar um nó aleatório em cada pai. Trocar as subárvores enraizadas nesses nós. O filho 1 recebe o corpo do pai 1 com a subárvore do pai 2 no ponto de corte.',
      effect: 'Recombina partes funcionais de dois programas. Mas dois programas semanticamente similares podem produzir filhos semanticamente muito diferentes — o "crossover disruptivo".',
      problem: 'Bloat: os filhos tendem a ser maiores que os pais. Ao longo das gerações, as árvores crescem indefinidamente sem ganho de fitness proporcional.',
      exemplo: 'Pai1 = (x+2)×sin(x), Pai2 = log(x)×x. Filho = (x×log(x))×sin(x) — maior que ambos os pais.',
    },
    {
      name: 'Mutação Subtree', color: '#f97316',
      what: 'Seleccionar um nó aleatório no pai. Substituir a subárvore enraizada nesse nó por uma nova subárvore gerada aleatoriamente.',
      effect: 'Introduz variação estrutural nova — pode adicionar operadores ou terminais que não existiam na população. Mecanismo de diversidade.',
      problem: 'Também contribui para o bloat. Pode destruir partes funcionais de alta qualidade.',
      exemplo: 'T = x×sin(x). Seleccionar sin(x). Substituir por cos(x²). Resultado: x×cos(x²).',
    },
    {
      name: 'Hoist Mutation', color: '#f97316',
      what: 'Seleccionar um nó; seleccionar um descendente desse nó. Substituir a subárvore no ponto seleccionado pela subárvore descendente (mais pequena).',
      effect: 'Anti-bloat: reduz activamente o tamanho das árvores. Simplifica programas sem necessariamente reduzir o fitness.',
      problem: 'Pode simplificar demasiado — perder partes funcionais necessárias.',
      exemplo: 'T = ((x+1)×sin(x))×2. Hoist: substituir raiz por sin(x). Resultado: sin(x).',
    },
  ];
  const op = operators[sel];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>Operadores Genéticos em GP</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {operators.map((o, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: sel === i ? o.color : 'var(--bg-primary)', color: sel === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${sel === i ? o.color : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{o.name}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: `1.5px solid ${op.color}30` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
          <div><strong style={{ color: op.color }}>O que faz:</strong><p style={{ marginTop: '0.35rem', lineHeight: 1.7 }}>{op.what}</p></div>
          <div>
            <div><strong style={{ color: '#f97316' }}>Efeito:</strong><p style={{ marginTop: '0.35rem', lineHeight: 1.7 }}>{op.effect}</p></div>
            <div style={{ marginTop: '0.5rem' }}><strong style={{ color: '#f97316' }}>Problema:</strong><p style={{ marginTop: '0.35rem', lineHeight: 1.7 }}>{op.problem}</p></div>
          </div>
        </div>
        <div style={{ background: `${op.color}10`, borderRadius: 6, padding: '0.6rem 0.9rem', borderLeft: `3px solid ${op.color}`, fontSize: '0.83rem', marginTop: '0.75rem' }}>
          <strong>Exemplo:</strong> {op.exemplo}
        </div>
      </div>
    </div>
  );
};

export default function NEL2() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 2</div>
        <h1 style={S.h1}>Algoritmos Evolutivos, GP e GSGP</h1>
        <p style={S.lead}>A natureza resolve problemas complexos há milhões de anos. Os Algoritmos Evolutivos imitam a selecção natural computacionalmente. A diferença entre Algoritmos Genéticos e Programação Genética não está no motor evolutivo — está no que é um indivíduo. O GSGP leva a GP um passo além, operando no espaço semântico dos outputs em vez do espaço genotípico das árvores.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O Ciclo Evolutivo — Fundamento Comum</h2>
          <p style={S.p}>Todos os Algoritmos Evolutivos (AEs) partilham o mesmo ciclo de quatro passos. O que varia entre GA e GP é exclusivamente o que é um "indivíduo" e quais os operadores aplicáveis. O motor evolutivo (selecção, substituição, ciclo de gerações) é idêntico.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Passo</th><th style={S.th}>O que acontece</th><th style={S.th}>Em GA</th><th style={S.th}>Em GP</th></tr></thead>
              <tbody>
                {[
                  ['Inicialização', 'Criar população inicial de N soluções', 'N strings binárias de comprimento fixo', 'N árvores aleatórias com profundidade máxima'],
                  ['Avaliação', 'Calcular f(x) para cada indivíduo', 'f avalia qualidade da solução', 'f executa o programa e mede o erro'],
                  ['Selecção', 'Escolher progenitores (roleta, torneio, rank)', 'Idêntico em GA e GP', 'Idêntico em GA e GP'],
                  ['Reprodução', 'Criar filhos com operadores genéticos', 'Crossover de pontos + bit-flip', 'Crossover subtree + mutação de subárvore'],
                  ['Substituição', 'Elitismo — preservar os k melhores', 'Idêntico', 'Idêntico'],
                ].map(([p, o, ga, gp]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td><td style={S.td}>{o}</td><td style={{ ...S.td, fontSize: '0.85rem' }}>{ga}</td><td style={{ ...S.td, fontSize: '0.85rem', color: '#f97316' }}>{gp}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. GA vs GP — A Diferença Fundamental</h2>
          <p style={S.p}>A distinção entre Algoritmos Genéticos e Programação Genética não está no algoritmo evolutivo — esse é o mesmo. A diferença está no que é um indivíduo. Em GA, um indivíduo é uma string de comprimento fixo (vector de bits, inteiros ou reais) que representa uma <em>solução</em> a um problema de optimização. Em GP, um indivíduo é um <em>programa completo</em> — tipicamente uma árvore de expressão que representa uma função matemática, uma estratégia de controlo, ou qualquer outro procedimento computável.</p>
          <p style={S.p}>Em GP, o tamanho e a forma dos indivíduos variam ao longo da evolução. Um filho pode ser maior ou menor que os pais. O fitness é tipicamente o erro nos dados de treino — o programa é executado e avaliado como um modelo.</p>

          <GAvsGPDiagram />

          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Dimensão</th><th style={S.th}>GA</th><th style={S.th}>GP</th></tr></thead>
              <tbody>
                {[
                  ['Indivíduo', 'String de comprimento fixo', 'Programa (árvore) de tamanho variável'],
                  ['Representa', 'Uma solução a um problema de optimização', 'Uma função, modelo ou estratégia'],
                  ['Espaço de pesquisa', 'Fixo — todas as strings de comprimento n', 'Dinâmico — todas as árvores até certa profundidade'],
                  ['Crossover', 'Troca segmentos da string', 'Troca subárvores entre dois pais'],
                  ['Mutação', 'Bit-flip em posições aleatórias', 'Substituir subárvore por nova árvore aleatória'],
                  ['Fitness', 'f(solução) — qualidade no problema original', 'Erro nos dados: f(programa) = RMSE no dataset D'],
                  ['Bloat', 'Não aplicável — tamanho fixo', 'Problema grave: árvores crescem indefinidamente'],
                  ['Curso', 'CIFO — optimização', 'NEL — aprendizagem de modelos'],
                ].map(([d, ga, gp]) => (
                  <tr key={d}><td style={{ ...S.td, fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</td><td style={S.td}>{ga}</td><td style={{ ...S.td, color: '#f97316' }}>{gp}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Representação em Árvore — GP em Prática</h2>
          <p style={S.p}>Em GP, cada indivíduo é uma árvore de expressão. Os nós internos contêm operadores (o conjunto de funções F) e as folhas contêm terminais (variáveis ou constantes, conjunto T). A avaliação é recursiva: cada nó aplica o seu operador aos resultados dos seus filhos. Para regressão simbólica: F = &#123;+, −, ×, ÷, sin, cos, exp, log&#125; e T = &#123;x₁, x₂, ..., constantes&#125;.</p>
          <TreeDiagram />
          <OperatorsExplorer />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. O Problema Central: Genótipo ≠ Semântica</h2>
          <p style={S.p}>O GP clássico opera no espaço genotípico — a estrutura das árvores. O problema fundamental é que a distância genotípica entre dois programas não tem correlação consistente com a distância semântica (diferença nos outputs). Dois programas quase idênticos estruturalmente podem ter comportamentos completamente diferentes. Esta desconexão torna o crossover genotípico essencialmente aleatório: combinar dois bons programas não garante um filho melhor.</p>
          <p style={S.p}>A <strong>semântica</strong> de um programa T é o vector dos seus outputs em todos os exemplos de treino: sem(T) = (T(x₁), T(x₂), ..., T(xₙ)) ∈ ℝⁿ. No espaço semântico, a distância ao alvo é exactamente o RMSE — e este espaço é euclidiano. A distância euclidiana ao alvo é uma função convexa: tem um único mínimo global e nenhum óptimo local falso.</p>

          <div style={S.note}>Superfície rugosa em GP clássico: muitos ótimos locais. Superfície unimodal em GSGP: todo o gradiente aponta para o alvo. Esta propriedade resulta directamente de se operar no espaço semântico euclidiano.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. GSGP — Geometric Semantic Genetic Programming</h2>
          <p style={S.p}>O GSGP (Moraglio et al., 2012) define uma mutação que opera directamente no espaço semântico. A <strong>Geometric Semantic Mutation (GSM)</strong> move o programa de T para T' garantindo que a distância semântica ao alvo diminui:</p>
          <div style={S.math}>
            <BlockMath math="T' = T + ms \times (T_{R_1} - T_{R_2})" />
          </div>
          <p style={S.p}>T_R₁ e T_R₂ são duas árvores aleatórias normalizadas para [0,1] via função sigmoid. Como T_R₁ − T_R₂ está sempre centrado em zero, a perturbação ms × (T_R₁ − T_R₂) é uma direcção aleatória no espaço semântico com amplitude controlada por ms. A superfície unimodal garante que qualquer perturbação que reduza a distância ao alvo é um movimento na direcção certa.</p>

          <GSMDiagram />

          <p style={S.p}>O custo desta elegância: cada mutação GSM adiciona um bloco novo ao genoma (T + ms×(R₁−R₂)), que contém T mais dois subprogramas R₁ e R₂ inteiros. Após G gerações, o modelo cresce linearmente em tamanho. Módulo 4 (SLIM_GSGP) resolve este problema.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={S.ul}>
            <li>GA vs GP: a diferença é o <em>indivíduo</em>. GA = string fixa para optimização. GP = programa/árvore para aprendizagem de funções.</li>
            <li>GP: F (operadores) + T (terminais) definem o espaço de programas. Avaliação é recursiva sobre a árvore.</li>
            <li>Bloat em GP: crossover subtree aumenta o tamanho das árvores ao longo das gerações sem ganho proporcional de fitness.</li>
            <li>Semântica: sem(T) = (T(x₁),...,T(xₙ)) ∈ ℝⁿ. A distância semântica ao alvo = RMSE. Espaço euclidiano → convexo → unimodal.</li>
            <li>GSM: T' = T + ms·(T_R₁−T_R₂). Move o programa no espaço semântico garantindo aproximação ao alvo. Custo: crescimento linear do modelo.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
