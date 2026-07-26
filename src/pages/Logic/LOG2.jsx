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
};

export default function LOG2() {
  return (
    <div style={S.page}>
      <Link to="/logic" style={S.back}>← Logic</Link>
      <div style={S.badge}>MÓDULO {modules[1].num}</div>
      <h1 style={S.h1}>{modules[1].title}</h1>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Método de Resolução</h2>
        <p style={S.p}>
          O <strong>método de resolução</strong> é um procedimento de inferência refutação-completo para lógica proposicional e de primeira ordem, introduzido por John Alan Robinson em 1965. A ideia central é a <em>prova por contradição</em>: para provar que α é consequência da base de conhecimento KB, negamos α, adicionamos ¬α a KB, e tentamos derivar a <em>cláusula vazia</em> □ — que representa contradição. Se conseguirmos, então KB ∧ ¬α é insatisfatível, portanto KB ⊨ α.
        </p>
        <p style={S.p}>
          A <strong>regra de resolução</strong> é simples e poderosa: dadas duas cláusulas <em>A ∨ l</em> e <em>B ∨ ¬l</em> que contêm literais complementares l e ¬l, o <em>resolvente</em> é a cláusula <em>A ∨ B</em>. O literal l é <em>eliminado por resolução</em>. Esta única regra, aplicada repetidamente a um conjunto de cláusulas, é suficiente para derivar toda consequência lógica — uma das descobertas mais elegantes da lógica computacional.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 320" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="320" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Refutação por Resolução: {'{'}p→q, q→r, p{'}'} ⊢ r</text>
            {/* Base de cláusulas — ordenadas pela ordem em que são usadas, para evitar linhas cruzadas */}
            {[
              { label: 'C1: ¬p ∨ q', x: 110, y: 50, color: C },
              { label: 'C3: p', x: 238, y: 50, color: C },
              { label: 'C2: ¬q ∨ r', x: 327, y: 50, color: C },
              { label: 'C4: ¬r (¬α)', x: 475, y: 50, color: '#64748b' },
            ].map(({ label, x, y, color }) => (
              <g key={label}>
                <rect x={x} y={y} width={label.length * 7.8 + 10} height="26" fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="1.5" rx="5" />
                <text x={x + (label.length * 7.8 + 10) / 2} y={y + 17} textAnchor="middle" fill={color} fontSize="12" fontFamily="monospace">{label}</text>
              </g>
            ))}
            {/* Resolve C1+C3 → C5: q */}
            <line x1="174" y1="76" x2="228" y2="130" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="282" y1="76" x2="228" y2="130" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="90" y="112" fill="#64748b" fontSize="9">res(C1,C3) elim p</text>
            <rect x="198" y="130" width="60" height="26" fill="rgba(74,158,237,0.06)" stroke="#bae6fd" strokeWidth="1.5" rx="5" />
            <text x="228" y="147" textAnchor="middle" fill="#bae6fd" fontSize="12" fontFamily="monospace">C5: q</text>
            {/* Resolve C5+C2 → C6: r */}
            <line x1="228" y1="156" x2="310" y2="205" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="391" y1="76" x2="310" y2="205" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="395" y="150" fill="#64748b" fontSize="9">res(C5,C2) elim q</text>
            <rect x="280" y="205" width="60" height="26" fill="rgba(74,158,237,0.06)" stroke="#bae6fd" strokeWidth="1.5" rx="5" />
            <text x="310" y="222" textAnchor="middle" fill="#bae6fd" fontSize="12" fontFamily="monospace">C6: r</text>
            {/* Resolve C6+C4 → □ */}
            <line x1="310" y1="231" x2="400" y2="272" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="518" y1="76" x2="400" y2="272" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="470" y="255" fill="#64748b" fontSize="9">res(C6,C4) elim r → □</text>
            <ellipse cx="400" cy="285" rx="30" ry="18" fill="rgba(148,163,184,0.08)" stroke="#64748b" strokeWidth="2" />
            <text x="400" y="290" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="monospace" fontWeight="700">□</text>
            <text x="340" y="312" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Contradição derivada → KB ⊨ r  (q.e.d.)</text>
          </svg>
        </div>

        <p style={S.p}>
          A resolução é <em>refutação-completa</em>: se KB ⊨ α, então existe sempre uma derivação de □ a partir de KB ∧ {'{'}¬α{'}'}. Mas é <em>incompleta como gerador</em>: não gera todas as consequências directamente. Na prática, a completude por refutação é suficiente — é a estratégia usada em Prolog, verificação automática de teoremas e SAT solvers.
        </p>
        <p style={S.p}>
          <strong>Estratégias de resolução</strong> controlam a ordem de aplicação para eficiência. <em>Set-of-support</em>: pelo menos uma cláusula do resolvente deve vir do conjunto de suporte (inicialmente ¬α) — reduz drasticamente o espaço de busca preservando completude. <em>Resolução linear</em>: cada resolvente usa a cláusula central mais recente. <em>Resolução input</em>: uma cláusula é sempre da base original (base da resolução SLD). <em>SLD-resolução</em> (Selective Linear Definite) é a estratégia do Prolog: determínista, completa para cláusulas de Horn, base da execução lógica.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Complexidade e limitações.</strong> Resolução proposicional é co-NP-completa (verificar insatisfatibilidade). Resolução de primeira ordem é semi-decidível — pode não terminar para fórmulas insatisfatíveis em FOL (Church-Turing). Na prática, heurísticas de ordenação, limitação de profundidade e indexação (discrimination trees, perfect hashing) tornam resolução viável para bases de conhecimento de grande escala como as usadas em sistemas de perguntas e respostas e motores de inferência.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Paramodulação</strong> estende resolução com igualdade: se <em>s = t</em> e <em>P[s]</em>, então <em>P[t]</em>. É necessária para raciocinar com equações sem axiomatizar igualdade explicitamente. Ferramentas como E (Schulz), Vampire (Kovács & Voronkov) e SPASS usam paramodulação + superposição (superposition calculus) e ganharam todas as competições de theorem proving ATP (CASC) nos últimos anos.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Unificação</h2>
        <p style={S.p}>
          A <strong>unificação</strong> é o mecanismo central da resolução de primeira ordem e do Prolog. Dados dois termos t₁ e t₂, um <em>unificador</em> é uma substituição σ (mapeamento de variáveis para termos) tal que σ(t₁) = σ(t₂). O <em>Unificador Mais Geral</em> (MGU) é o unificador σ que é instância de qualquer outro — o menos comprometido, que preserva mais flexibilidade para futuras substituições.
        </p>
        <p style={S.p}>
          <strong>Exemplo MGU:</strong> unificar P(X, f(Y)) com P(a, Z). A substituição {'{'}X/a, Z/f(Y){'}'} é o MGU: substitui X por a e Z por f(Y), deixando Y livre. Não há necessidade de substituir Y porque ambos os lados já concordam com f(Y). Qualquer outro unificador (e.g., {'{'}X/a, Y/b, Z/f(b){'}'}) é uma instância do MGU.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 250" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="250" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Martelli-Montanari: {'{'}f(X, g(Y)) ≐ f(a, g(b)){'}'}</text>
            {[
              { rule: 'INICIO', eq: 'f(X,g(Y)) ≐ f(a,g(b))', subst: 'σ = {}', y: 45 },
              { rule: 'DECOMPOSE f/2', eq: 'X ≐ a  ,  g(Y) ≐ g(b)', subst: 'σ = {}', y: 85 },
              { rule: 'ELIMINATE X→a', eq: 'g(Y) ≐ g(b)', subst: 'σ = {X/a}', y: 125 },
              { rule: 'DECOMPOSE g/1', eq: 'Y ≐ b', subst: 'σ = {X/a}', y: 165 },
              { rule: 'ELIMINATE Y→b', eq: '(vazio — sucesso)', subst: 'σ = {X/a, Y/b}', y: 205 },
            ].map(({ rule, eq, subst, y }) => (
              <g key={y}>
                <rect x="12" y={y - 14} width="656" height="28" fill={y === 205 ? 'rgba(74,158,237,0.15)' : '#111827'} rx="4" />
                <text x="20" y={y + 4} fill="#64748b" fontSize="10" fontFamily="monospace">{rule}</text>
                <text x="200" y={y + 4} fill={y === 205 ? '#bae6fd' : '#e2e8f0'} fontSize="12" fontFamily="monospace">{eq}</text>
                <text x="500" y={y + 4} fill={C} fontSize="11" fontFamily="monospace">{subst}</text>
              </g>
            ))}
            <text x="340" y="238" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">MGU final: {'{'}X/a, Y/b{'}'}  —  resultado aplicado dá f(a, g(b)) = f(a, g(b)) ✓</text>
          </svg>
        </div>

        <p style={S.p}>
          O algoritmo de <strong>Martelli-Montanari</strong> opera sobre um conjunto de equações entre termos aplicando quatro regras: <em>Delete</em> (remove equações triviais t ≐ t), <em>Decompose</em> (f(s₁...sₙ) ≐ f(t₁...tₙ) torna-se n equações), <em>Orient</em> (t ≐ X torna-se X ≐ t para que variáveis fiquem à esquerda), <em>Eliminate</em> (X ≐ t substitui X em todo o resto se X ∉ vars(t) — occurs check). A complexidade é quasi-linear O(n α(n)) usando union-find, onde α é a função inversa de Ackermann.
        </p>
        <p style={S.p}>
          O <strong>occurs check</strong> (verificar se X ocorre em t antes de aplicar X ≐ t) é essencial para correção: sem ele, <em>X ≐ f(X)</em> produziria a substituição cíclica {'{'}X/f(f(f(...))){'}'} — uma estrutura infinita. A maior parte dos Prolog omite o occurs check por razões de eficiência (é O(n) extra por unificação), o que compromete a soundness para certos programas. SWI-Prolog oferece unify_with_occurs_check/2 para quando a correção é crítica.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Unificação de ordem superior</strong> (λ-cálculo tipado) é usada em provadores como Isabelle/HOL e Twelf. É semi-decidível em geral, mas decidível em fragmentos importantes (modo pattern unification de Miller). Esta capacidade permite raciocinar sobre programas e provas como objectos de primeira classe, sendo a base da geração automática de tácticas em provadores modernos.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Unificação módulo teorias (E-unification):</strong> unificar módulo um conjunto de equações E. Por exemplo, unificação comutativa (f(X,Y) ≐ f(b,a) módulo comutatividade) pode ter múltiplos MGUs. Usada em verificação de equivalência de programas, álgebra de processos (CCS, CSP) e análise criptográfica (Dolev-Yao model). A E-unificação é NP-difícil em geral mas tratável para teorias específicas como comutatividade, associatividade-comutatividade (AC).
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Theorem Proving Interactivo</h2>
        <p style={S.p}>
          Os <strong>assistentes de prova interactivos</strong> (ITP) permitem ao utilizador construir provas formais passo a passo, com verificação mecânica de cada passo. Ao contrário dos theorem provers automáticos (ATP), os ITPs focam-se em provas de alta complexidade matemática onde a automatização total é inviável — mas onde a correção formal é crítica: sistemas operativos, compiladores, criptografia, medicina.
        </p>
        <p style={S.p}>
          <strong>Lean 4</strong> (de Moura et al., Microsoft Research, 2021) é o assistente de prova mais activo actualmente. Usa <em>Teoria de Tipos Dependentes</em> (DTT) onde tipos podem depender de valores, permitindo expressar invariantes muito precisas. A biblioteca <strong>Mathlib</strong> contém mais de 100,000 lemas formalizados — desde álgebra linear até teoria dos números. Lean 4 permite também programação funcional performativa: os mesmos tipos servem como especificações e como código executável.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 240" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="240" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Isomorfismo de Curry-Howard: Prova ↔ Programa</text>
            {/* left side: logic */}
            <rect x="20" y="40" width="280" height="170" fill="#111827" stroke="var(--card-border)" strokeWidth="1" rx="8" />
            <text x="160" y="62" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="700">LÓGICA</text>
            {[
              ['Proposição', 'p'],
              ['Prova de p', 'π : p'],
              ['p ∧ q', 'par (π₁, π₂)'],
              ['p ∨ q', 'inl(π) ou inr(π)'],
              ['p → q', 'função f: p → q'],
              ['∀x. P(x)', 'função dependente'],
              ['∃x. P(x)', 'par dependente'],
            ].map(([a, b], i) => (
              <g key={i}>
                <text x="30" y={82 + i * 18} fill="#4a9eed" fontSize="11" fontFamily="monospace">{a}</text>
                <text x="155" y={82 + i * 18} fill="#94a3b8" fontSize="11" fontFamily="monospace">{b}</text>
              </g>
            ))}
            {/* right side: types */}
            <rect x="380" y="40" width="280" height="170" fill="#111827" stroke="var(--card-border)" strokeWidth="1" rx="8" />
            <text x="520" y="62" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="700">TEORIA DE TIPOS</text>
            {[
              ['Tipo', 'T'],
              ['Habitante de T', 't : T'],
              ['Produto A × B', '(a, b)'],
              ['Soma A + B', 'Left a | Right b'],
              ['Função A → B', 'fun a => ...'],
              ['Π(x:A). B(x)', 'fun (x:A) => ...'],
              ['Σ(x:A). B(x)', '⟨a, proof⟩'],
            ].map(([a, b], i) => (
              <g key={i}>
                <text x="390" y={82 + i * 18} fill={C} fontSize="11" fontFamily="monospace">{a}</text>
                <text x="490" y={82 + i * 18} fill="#94a3b8" fontSize="11" fontFamily="monospace">{b}</text>
              </g>
            ))}
            {/* arrow */}
            <line x1="300" y1="125" x2="380" y2="125" stroke={C} strokeWidth="2" />
            <polygon points="375,120 385,125 375,130" fill={C} />
            <polygon points="305,120 295,125 305,130" fill={C} />
            <text x="340" y="120" textAnchor="middle" fill={C} fontSize="11" fontFamily="sans-serif" fontWeight="700">≅</text>
            <text x="340" y="135" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="sans-serif">isomorfismo</text>
          </svg>
        </div>

        <p style={S.p}>
          <strong>Coq</strong> (INRIA, desde 1989) usa o Cálculo de Construções Indutivas (CIC) e tem as provas formais mais notáveis da história: o <em>Teorema de Feit-Thompson</em> (2012, 6 anos, 150,000 linhas — todo grupo de ordem ímpar é solúvel), o compilador C <em>CompCert</em> (formalmente verificado, usado na aviação), e MathComp (150,000 linhas de álgebra formalizada). Coq usa uma linguagem de tácticas (Ltac) para guiar provas semi-automaticamente.
        </p>
        <p style={S.p}>
          <strong>Isabelle/HOL</strong> (Cambridge/TU München) usa Higher-Order Logic e a ferramenta <em>Sledgehammer</em> que chama automaticamente ATPs externos (Vampire, E, Z3) para tentar resolver sub-metas, permitindo provas muito mais rápidas. O <em>Archive of Formal Proofs</em> (AFP) contém mais de 4,000 entradas formalizadas. A correctude do kernel L4 (microkernel usado em dispositivos médicos e aviação) foi provada em Isabelle/HOL (seL4, 2009).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>AlphaProof (DeepMind, 2024)</strong> combina um LLM para geração de conjecturas intermediárias com Lean 4 para verificação formal. Na Olimpíada Internacional de Matemática (IMO) 2024, resolveu 4 de 6 problemas com nível de medalha de ouro — incluindo o problema P2 de teoria dos números em 3 dias de computação. Este resultado representa um salto qualitativo: pela primeira vez um sistema de IA demonstrou capacidade de prova formal de matemática de competição olímpica.
          </p>
        </div>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Verificação de hardware formal:</strong> a Intel verifica microprocessadores usando theorem proving (ACL2 — Boyer-Moore) e model checking. O ACL2 provou a correção do algoritmo de aritmética de ponto flutuante do AMD K5 (1995). Seagate e Western Digital usam métodos formais para verificar controladores de disco. A verificação formal de software de aviação (DO-178C nível A) requer provas de ausência de overflow, divisão por zero e limites de arrays.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Model Checking</h2>
        <p style={S.p}>
          O <strong>model checking</strong> (Clarke, Emerson, Sifakis — Prémio Turing 2007) é uma técnica de verificação automática de sistemas de estados finitos. Um sistema é modelado como uma <em>estrutura de Kripke</em> M = (S, S₀, R, L) onde S é o conjunto de estados, S₀ ⊆ S os estados iniciais, R ⊆ S×S a relação de transição, e L: S → 2ᴬᵖ a função de rotulagem (que proposições atómicas valem em cada estado). Uma propriedade é especificada em lógica temporal e verificada exaustivamente.
        </p>
        <p style={S.p}>
          A <strong>CTL — Computation Tree Logic</strong> combina quantificadores de caminho (A=todos, E=existe) com operadores temporais (G=sempre, F=eventualmente, X=próximo, U=até). Operadores compostos: <em>AG φ</em> — em todos os caminhos, sempre φ (invariante); <em>EF φ</em> — existe caminho onde eventualmente φ (alcançabilidade); <em>AF φ</em> — em todos os caminhos, eventualmente φ (vivacidade); <em>EG φ</em> — existe caminho onde φ vale sempre (não-terminação possível).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 260" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="260" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Estrutura de Kripke — EF(error) satisfeito</text>
            {/* states */}
            {[
              { id: 's0', label: 's₀', props: 'init', x: 120, y: 100, color: '#bae6fd' },
              { id: 's1', label: 's₁', props: 'running', x: 300, y: 60, color: C },
              { id: 's2', label: 's₂', props: 'running', x: 300, y: 160, color: C },
              { id: 's3', label: 's₃', props: 'error', x: 500, y: 60, color: '#64748b' },
              { id: 's4', label: 's₄', props: 'done', x: 500, y: 160, color: '#bae6fd' },
            ].map(({ label, props, x, y, color }) => (
              <g key={label}>
                <circle cx={x} cy={y} r="30" fill="rgba(74,158,237,0.06)" stroke={color} strokeWidth="2" />
                <text x={x} y={y - 6} textAnchor="middle" fill={color} fontSize="13" fontFamily="monospace" fontWeight="700">{label}</text>
                <text x={x} y={y + 10} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{props}</text>
              </g>
            ))}
            {/* transitions — s0→s1 e s1→s3 destacadas (caminho EF(error)) */}
            <line x1="150" y1="90" x2="270" y2="68" stroke="#bae6fd" strokeWidth="2.5" strokeDasharray="6,3" />
            <polygon points="265,63 275,70 263,74" fill="#bae6fd" />
            <line x1="150" y1="110" x2="270" y2="155" stroke="#475569" strokeWidth="1.5" />
            <polygon points="265,150 275,158 263,161" fill="#475569" />
            <line x1="330" y1="60" x2="470" y2="60" stroke="#bae6fd" strokeWidth="2.5" strokeDasharray="6,3" />
            <polygon points="465,55 475,60 465,65" fill="#bae6fd" />
            <line x1="300" y1="90" x2="300" y2="130" stroke="#475569" strokeWidth="1.5" />
            <polygon points="295,125 300,135 305,125" fill="#475569" />
            <line x1="330" y1="160" x2="470" y2="160" stroke="#475569" strokeWidth="1.5" />
            <polygon points="465,155 475,160 465,165" fill="#475569" />
            <text x="340" y="200" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">caminho: s₀ → s₁ → s₃(error) — EF(error) satisfeito</text>
            <text x="340" y="220" textAnchor="middle" fill="#bae6fd" fontSize="11" fontFamily="sans-serif">AG(¬error) FALSO — contraexemplo encontrado automaticamente</text>
            <text x="340" y="248" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">model checker devolve o contraexemplo como testemunho de violação da propriedade</text>
          </svg>
        </div>

        <p style={S.p}>
          O <strong>algoritmo de verificação CTL</strong> opera bottom-up na estrutura da fórmula, em tempo O(|S| × |φ|). Para cada sub-fórmula, calcula o conjunto de estados onde ela é satisfeita usando operadores de ponto-fixo: <em>EF φ = μZ. φ ∨ EX Z</em> (menor ponto-fixo); <em>AG φ = νZ. φ ∧ AX Z</em> (maior ponto-fixo). A verificação é assim reduzida a cálculo de alcançabilidade em grafos, extremamente eficiente.
        </p>
        <p style={S.p}>
          <strong>BDDs — Binary Decision Diagrams</strong> (Bryant, 1986) representam funções booleanas como grafos DAG canónicos (ROBDD), permitindo operações conjuntárias em tempo polinomial no tamanho do BDD. O <em>model checking simbólico</em> (McMillan, 1993) codifica a relação de transição R e conjuntos de estados como BDDs, permitindo verificar sistemas com 10²⁰ estados e mais — impossível para enumeração explícita. Esta técnica foi usada para verificar o protocolo de cache do Alpha 21264 (DEC, 1997).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Ferramentas industriais.</strong> <em>SPIN</em> (Holzmann, NASA JPL) verifica protocolos de comunicação em PROMELA — usado no software da sonda Deep Space 1 (1998) e em protocolos de aviação. <em>CBMC</em> (Clarke et al.) aplica Bounded Model Checking em C/C++ via SAT, encontrando bugs de buffer overflow, use-after-free e race conditions em Linux kernel, OpenSSL e drivers Windows. <em>NuSMV</em> e <em>nuXmv</em> suportam CTL+LTL com BDDs e SAT. <em>TLA+</em> (Lamport) é usado na Amazon AWS para verificar protocolos distribuídos (DynamoDB, S3).
          </p>
        </div>
        <p style={S.p}>
          <strong>LTL — Linear Temporal Logic</strong> especifica propriedades sobre sequências lineares de estados (um único caminho). Operadores: <em>G φ</em> (sempre), <em>F φ</em> (eventualmente), <em>X φ</em> (próximo estado), <em>φ U ψ</em> (φ até ψ). LTL é mais natural para especificar protocolos (e.g., "toda mensagem enviada é eventualmente recebida": G(sent → F received)). CTL é mais eficiente algoritmicamente (PTIME vs PSPACE para LTL model checking). CTL* unifica ambas mas é PSPACE.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Explosão de estados e mitigações:</strong> o problema central do model checking é que o espaço de estados cresce exponencialmente com o número de variáveis/processos (explosão de estados). Técnicas de mitigação: BDDs simbólicos, abstracção (CEGAR — Counterexample-Guided Abstraction Refinement), redução de ordem parcial (só explorar interleavings não-equivalentes), simetria (sistemas com processos idênticos), e Bounded Model Checking com SAT (incompleto mas muito escalável). A verificação de sistemas de hardware moderno combina todas estas técnicas.
          </p>
        </div>
      </div>
    </div>
  );
}
