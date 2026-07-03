import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Logic';

const C = '#f97316';
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
  diagram: { background: '#0f172a', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0' },
};

export default function LOG1() {
  return (
    <div style={S.page}>
      <Link to="/logic" style={S.back}>← Lógica & Raciocínio</Link>
      <div style={S.badge}>{modules[0].num} — LÓGICA & RACIOCÍNIO</div>
      <h1 style={S.h1}>{modules[0].title}</h1>
      <p style={S.sub}>{modules[0].subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Lógica Proposicional</h2>
        <p style={S.p}>
          A lógica proposicional é o sistema formal mais elementar do raciocínio dedutivo. Trabalha com <strong>proposições</strong> — afirmações que são verdadeiras ou falsas — e conectivos que as combinam. Os cinco conectivos fundamentais são: negação <strong>¬</strong> (não), conjunção <strong>∧</strong> (e), disjunção <strong>∨</strong> (ou), implicação <strong>→</strong> (se...então) e bicondicional <strong>↔</strong> (se e somente se). Cada conectivo possui semântica definida por uma tabela de verdade que cobre todas as combinações de valores de entrada.
        </p>
        <p style={S.p}>
          A implicação <em>p → q</em> é frequentemente mal interpretada: ela é falsa <em>apenas</em> quando o antecedente p é verdadeiro e o consequente q é falso. Nos restantes três casos é verdadeira. Esta definição — conhecida como <strong>implicação material</strong> — é a escolha padrão em lógica clássica porque preserva o princípio da composicionalidade e permite derivar resultados úteis via modus ponens e modus tollens.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 210" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="210" fill="var(--bg-secondary)" rx="10" />
            <rect x="10" y="10" width="660" height="32" fill="rgba(249,115,22,0.06)" rx="6" />
            {['p', 'q', '¬p', '¬p ∨ q', 'p → q', 'p ↔ q'].map((h, i) => (
              <text key={i} x={50 + i * 110} y="31" textAnchor="middle" fill={C} fontSize="13" fontWeight="700" fontFamily="monospace">{h}</text>
            ))}
            {[
              ['V', 'V', 'F', 'V', 'V', 'V'],
              ['V', 'F', 'F', 'F', 'F', 'F'],
              ['F', 'V', 'V', 'V', 'V', 'F'],
              ['F', 'F', 'V', 'V', 'V', 'V'],
            ].map((row, ri) => {
              const y = 52 + ri * 36;
              const bg = ri % 2 === 0 ? '#0f172a' : '#111827';
              return (
                <g key={ri}>
                  <rect x="10" y={y - 14} width="660" height="34" fill={bg} rx="4" />
                  {row.map((v, ci) => (
                    <text key={ci} x={50 + ci * 110} y={y + 8} textAnchor="middle"
                      fill={v === 'V' ? '#fbbf24' : '#f87171'}
                      fontSize="13" fontFamily="monospace" fontWeight="600">{v}</text>
                  ))}
                </g>
              );
            })}
            <text x="340" y="200" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">¬p ∨ q  ≡  p → q  (colunas idênticas — equivalência semântica)</text>
          </svg>
        </div>

        <p style={S.p}>
          As <strong>leis de De Morgan</strong> são dois esquemas de equivalência essenciais: <em>¬(p ∧ q) ≡ ¬p ∨ ¬q</em> e <em>¬(p ∨ q) ≡ ¬p ∧ ¬q</em>. Permitem distribuir negações para dentro de conjunções e disjunções, e são a base das transformações para CNF. Outras equivalências úteis incluem: dupla negação (¬¬p ≡ p), lei da absorção (p ∨ (p ∧ q) ≡ p), lei distributiva (p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)), e contrapositiva (p → q ≡ ¬q → ¬p).
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Tautologias clássicas.</strong> Uma fórmula é <em>tautologia</em> se verdadeira em todas as interpretações. Exemplos canónicos: lei do terceiro excluído <em>p ∨ ¬p</em>; lei da não-contradição <em>¬(p ∧ ¬p)</em>; modus ponens <em>(p ∧ (p → q)) → q</em>; silogismo hipotético <em>((p → q) ∧ (q → r)) → (p → r)</em>; lei de exportação <em>((p ∧ q) → r) ≡ (p → (q → r))</em>. Cada tautologia corresponde a uma regra de inferência válida e pode ser usada como axioma num sistema dedutivo.
          </p>
        </div>
        <p style={S.p}>
          <strong>Completude funcional:</strong> um conjunto de conectivos é <em>funcionalmente completo</em> se qualquer função booleana pode ser expressa usando apenas esses conectivos. O conjunto {'{'}¬, ∧{'}'} é completo (∨ obtém-se via De Morgan). O NAND sozinho é completo — base dos circuitos digitais modernos (porta universal). A satisfatibilidade proposicional — problema SAT — foi o primeiro problema provado NP-completo por Stephen Cook em 1971, resultado independentemente demonstrado por Leonid Levin na URSS.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Verificação por tabela de verdade:</strong> dada uma fórmula com n variáveis, a tabela tem 2ⁿ linhas. Para n=20 já são ~1 milhão de linhas — impraticável manualmente. Para n=100, o número de linhas excede o número de átomos no universo observável (10⁸⁰). Por isso algoritmos como DPLL, CDCL e BDDs são indispensáveis na prática moderna.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Lógica de Predicados (FOL)</h2>
        <p style={S.p}>
          A <strong>Lógica de Primeira Ordem</strong> (FOL) estende a proposicional com predicados, termos, funções e quantificadores, permitindo expressar propriedades de objetos e relações entre eles. Um <em>predicado</em> P(x) mapeia um objeto do domínio para verdadeiro ou falso. Uma <em>interpretação</em> especifica: o domínio D (conjunto não-vazio de objetos), uma função de interpretação que atribui significado a constantes, funções e predicados, e uma atribuição de variáveis. A semântica de uma fórmula é relativa a uma interpretação.
        </p>
        <p style={S.p}>
          Os quantificadores são <strong>∀</strong> (para todo) e <strong>∃</strong> (existe). A fórmula <em>∀x P(x)</em> é verdade se P(d) é verdade para todo d ∈ D. A fórmula <em>∃x P(x)</em> é verdade se existe algum d ∈ D tal que P(d) seja verdade. A negação dos quantificadores segue as leis de De Morgan generalizadas: <em>¬∀x P(x) ≡ ∃x ¬P(x)</em> e <em>¬∃x P(x) ≡ ∀x ¬P(x)</em>. Esta dualidade é fundamental para a refutação por resolução.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 700 310" width="100%" style={{ display: 'block', margin: '0 auto' }}>
            <rect width="700" height="310" fill="var(--bg-secondary)" rx="10" />
            <text x="350" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Árvore de análise: ∀x( Humano(x) → ∃y( MãeDe(y,x) ) )</text>
            {/* escopo ∀x — envolve toda a subárvore */}
            <rect x="80" y="85" width="550" height="205" fill="none" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" rx="6" />
            <text x="84" y="80" fill="#64748b" fontSize="9" fontFamily="sans-serif">escopo ∀x</text>
            {/* escopo ∃y — envolve ∃y e MãeDe */}
            <rect x="430" y="160" width="175" height="120" fill="none" stroke="var(--card-border)" strokeWidth="1" strokeDasharray="4,3" rx="6" />
            <text x="434" y="155" fill="#64748b" fontSize="9" fontFamily="sans-serif">escopo ∃y</text>
            {/* ∀x */}
            <ellipse cx="350" cy="52" rx="32" ry="18" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="350" y="57" textAnchor="middle" fill={C} fontSize="13" fontFamily="monospace" fontWeight="700">∀x</text>
            {/* → */}
            <line x1="350" y1="70" x2="350" y2="105" stroke="#475569" strokeWidth="1.5" />
            <ellipse cx="350" cy="120" rx="22" ry="16" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" />
            <text x="350" y="125" textAnchor="middle" fill="#f97316" fontSize="13" fontFamily="monospace" fontWeight="700">→</text>
            {/* Humano(x) */}
            <line x1="332" y1="134" x2="215" y2="175" stroke="#475569" strokeWidth="1.5" />
            <rect x="140" y="175" width="150" height="30" fill="rgba(249,115,22,0.06)" stroke="#fbbf24" strokeWidth="1.5" rx="6" />
            <text x="215" y="195" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="monospace">Humano(x)</text>
            {/* ∃y */}
            <line x1="368" y1="134" x2="518" y2="168" stroke="#475569" strokeWidth="1.5" />
            <ellipse cx="518" cy="185" rx="30" ry="18" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" />
            <text x="518" y="190" textAnchor="middle" fill={C} fontSize="13" fontFamily="monospace" fontWeight="700">∃y</text>
            {/* MãeDe(y, x) */}
            <line x1="518" y1="203" x2="518" y2="235" stroke="#475569" strokeWidth="1.5" />
            <rect x="438" y="235" width="160" height="28" fill="rgba(249,115,22,0.06)" stroke="#fbbf24" strokeWidth="1.5" rx="6" />
            <text x="518" y="254" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="monospace">MãeDe(y, x)</text>
            {/* caption */}
            <text x="350" y="298" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">x é variável livre em MãeDe(y,x) — ligada por ∀x no topo</text>
          </svg>
        </div>

        <p style={S.p}>
          <strong>Exemplos formalizados.</strong> Silogismo aristotélico: <em>∀x(Humano(x) → Mortal(x)) ∧ Humano(Sócrates) ⊢ Mortal(Sócrates)</em>. Existência de primo par: <em>∃x(Primo(x) ∧ Par(x))</em> — verdade (x=2). Números primos infinitos: <em>∀n ∃p(p &gt; n ∧ Primo(p))</em>. A FOL pode expressar aritmética, teoria dos conjuntos e a maioria das matemáticas, sendo usada formalmente em verificação de software e hardware.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Decidibilidade da FOL.</strong> A lógica proposicional é <em>decidível</em>: existe algoritmo que determina se qualquer fórmula é satisfatível (complexidade co-NP). A FOL é apenas <em>semi-decidível</em>: se uma fórmula é válida, um procedimento de prova encontrará a prova em tempo finito; se não for válida, o procedimento pode divergir. Este resultado decorre do Teorema de Church (1936) e do problema da parada de Turing — uma das descobertas mais profundas do século XX.
          </p>
        </div>
        <p style={S.p}>
          <strong>Subconjuntos decidíveis:</strong> FOL com apenas predicados unários (lógica monádica de primeira ordem); lógica de duas variáveis (L²); lógica de guarda (GF — base das lógicas de descrição). A <em>teoria de Presburger</em> (aritmética linear sobre inteiros, sem multiplicação) é decidível com complexidade duplamente exponencial; a aritmética de Peano completa (com multiplicação) é apenas semi-decidível pelo Teorema de Gödel (1931).
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>FOL de Segunda Ordem (SOL)</strong> permite quantificar sobre predicados e funções. É expressivamente muito mais rica — captura aritmética categórica, teoria dos grafos, propriedades de finitude — mas é não-axiomatizável. A maioria da matemática é formalizada em FOL + ZFC (Zermelo-Fraenkel + Axioma da Escolha), aproveitando a completude de Gödel para FOL: qualquer consequência semântica tem uma prova sintáctica.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Formas Normais</h2>
        <p style={S.p}>
          Algoritmos de raciocínio automático requerem que as fórmulas estejam em formatos padronizados. A <strong>Forma Normal Conjuntiva (CNF)</strong> é uma conjunção de cláusulas, onde cada cláusula é uma disjunção de literais (proposições ou suas negações). Qualquer fórmula proposicional pode ser convertida para CNF — possivelmente com aumento exponencial do tamanho, evitável com variáveis auxiliares via transformação de Tseitin (1968) que mantém tamanho linear ao custo de equisatisfatibilidade.
        </p>
        <p style={S.p}>
          <strong>Conversão para CNF — p → (q ∧ r):</strong> (1) Eliminar →: <em>¬p ∨ (q ∧ r)</em>. (2) Distribuir ∨ sobre ∧: <em>(¬p ∨ q) ∧ (¬p ∨ r)</em>. Resultado: duas cláusulas {'{'}¬p ∨ q{'}'} e {'{'}¬p ∨ r{'}'}. A CNF é o formato de entrada universal para SAT solvers.
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 240" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="240" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="22" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Conversão CNF completa: (p ↔ q) → r</text>
            {[
              { step: '① Eliminar ↔', formula: '( (p→q) ∧ (q→p) )  →  r' },
              { step: '② Eliminar → externo', formula: '¬( (p→q) ∧ (q→p) )  ∨  r' },
              { step: '③ Eliminar → internos', formula: '¬( (¬p∨q) ∧ (¬q∨p) )  ∨  r' },
              { step: '④ De Morgan', formula: '(p∧¬q) ∨ (q∧¬p)  ∨  r' },
              { step: '⑤ Distribuir ∨ sobre ∧', formula: '(p∨q∨r) ∧ (p∨¬p∨r) ∧ (¬q∨q∨r) ∧ (¬q∨¬p∨r)' },
              { step: '⑥ Simplificar tautologias', formula: '(p ∨ q ∨ r)  ∧  (¬p ∨ ¬q ∨ r)' },
            ].map(({ step, formula }, i) => {
              const y = 45 + i * 32;
              return (
                <g key={i}>
                  <text x="20" y={y} fill="#64748b" fontSize="10" fontFamily="sans-serif">{step}</text>
                  <text x="160" y={y} fill={i === 5 ? '#fbbf24' : '#e2e8f0'} fontSize="12" fontFamily="monospace">{formula}</text>
                  {i < 5 && <line x1="20" y1={y + 10} x2="660" y2={y + 10} stroke="var(--card-border)" strokeWidth="1" />}
                </g>
              );
            })}
            <rect x="12" y="210" width="656" height="22" fill="#c2410c22" rx="4" />
            <text x="340" y="225" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="sans-serif">2 cláusulas na CNF final — prontas para resolução ou SAT solver</text>
          </svg>
        </div>

        <p style={S.p}>
          A <strong>Forma Normal Disjuntiva (DNF)</strong> é a dual da CNF: uma disjunção de conjunções de literais. Útil para síntese de circuitos (soma de produtos) e para certos algoritmos de aprendizagem. A conversão para DNF pode também ser exponencial no pior caso, mas modelos (atribuições satisfatórias) correspondem directamente a termos da DNF.
        </p>
        <p style={S.p}>
          <strong>Forma Normal Prenex (FOL):</strong> coloca todos os quantificadores no prefixo: <em>Q₁x₁ Q₂x₂ ... Qₙxₙ. φ</em>, onde φ é uma fórmula livre de quantificadores (a <em>matriz</em>). Qualquer fórmula FOL tem uma forma prenex equivalente, obtida por renomeação de variáveis e deslocação de quantificadores para o exterior. A forma prenex é passo obrigatório antes de aplicar skolemização.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Skolemização</strong> elimina quantificadores existenciais introduzindo <em>funções de Skolem</em>. Se <em>∃y P(x, y)</em> ocorre sob o escopo de <em>∀x</em>, substituímos y por <em>f(x)</em>, obtendo <em>P(x, f(x))</em>. Se ∃y não está no escopo de nenhum ∀, introduz-se uma constante de Skolem <em>c</em>. O resultado é equisatisfatível (não logicamente equivalente) e é o passo final antes de converter FOL para forma clausal — formato universal para resolução de primeira ordem.
          </p>
        </div>
        <p style={S.p}>
          <strong>Cláusulas de Horn</strong> são cláusulas com no máximo um literal positivo: <em>¬B₁ ∨ ¬B₂ ∨ ... ∨ ¬Bₙ ∨ H</em>, equivalente à regra <em>B₁ ∧ B₂ ∧ ... ∧ Bₙ → H</em>. São a base do Prolog e de programas lógicos. Factos são cláusulas de Horn com corpo vazio (apenas H). Consultas são cláusulas de Horn sem cabeça (apenas corpo). A satisfatibilidade de Horn-SAT é decidível em tempo linear (algoritmo de propagação unitária). A resolução SLD é a regra de inferência que executa Prolog.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Transformação de Tseitin (1968):</strong> para cada sub-fórmula φᵢ introduz variável tᵢ e cláusulas que forçam tᵢ ↔ φᵢ. Converte qualquer fórmula em CNF de tamanho linear (em vez de potencialmente exponencial). Todas as ferramentas modernas — SAT solvers, verificadores de modelos, compiladores de hardware — usam Tseitin internamente. O preço é que a CNF resultante é equisatisfatível, não equivalente.
          </p>
        </div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. SAT, SMT e Aplicações Industriais</h2>
        <p style={S.p}>
          O algoritmo <strong>DPLL</strong> (Davis-Putnam-Logemann-Loveland, 1962) é a base de todos os SAT solvers modernos. Opera por pesquisa recursiva com duas optimizações poderosas: <em>unit propagation</em> (se uma cláusula tem um único literal não-falsificado, esse literal deve ser verdadeiro — propagação determinística) e <em>pure literal elimination</em> (se um literal aparece apenas na polaridade positiva ou negativa, pode ser atribuído satisfazendo todas as suas cláusulas). DPLL é correto (não produz soluções falsas) e completo (encontra solução se existir).
        </p>

        <div style={S.diagram}>
          <svg viewBox="0 0 680 280" width="100%" style={{ display: 'block' }}>
            <rect width="680" height="280" fill="var(--bg-secondary)" rx="10" />
            <text x="340" y="20" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">DPLL: (a∨b) ∧ (¬a∨c) ∧ (¬b∨¬c)</text>
            <rect x="260" y="32" width="160" height="28" fill="rgba(249,115,22,0.06)" stroke={C} strokeWidth="1.5" rx="6" />
            <text x="340" y="51" textAnchor="middle" fill={C} fontSize="12" fontFamily="monospace" fontWeight="700">decide: a = V</text>
            <line x1="290" y1="60" x2="185" y2="95" stroke="#475569" strokeWidth="1.5" />
            <text x="212" y="87" fill="#fbbf24" fontSize="10" fontFamily="sans-serif">a=V</text>
            <line x1="390" y1="60" x2="495" y2="95" stroke="#475569" strokeWidth="1.5" />
            <text x="432" y="87" fill="#f87171" fontSize="10" fontFamily="sans-serif">a=F</text>
            <rect x="110" y="95" width="150" height="28" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" rx="6" />
            <text x="185" y="114" textAnchor="middle" fill="#f97316" fontSize="12" fontFamily="monospace">unit prop: c=V</text>
            <rect x="420" y="95" width="150" height="28" fill="rgba(249,115,22,0.06)" stroke="#64748b" strokeWidth="1.5" rx="6" />
            <text x="495" y="114" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">unit prop: b=V</text>
            <line x1="155" y1="123" x2="110" y2="158" stroke="#475569" strokeWidth="1.5" />
            <text x="115" y="150" fill="#fbbf24" fontSize="10">b=V</text>
            <line x1="215" y1="123" x2="260" y2="158" stroke="#475569" strokeWidth="1.5" />
            <text x="228" y="150" fill="#f87171" fontSize="10">b=F</text>
            <rect x="50" y="158" width="130" height="28" fill="#7f1d1d" stroke="#f87171" strokeWidth="1.5" rx="6" />
            <text x="115" y="177" textAnchor="middle" fill="#f87171" fontSize="12" fontFamily="monospace">CONFLITO ✗</text>
            <text x="85" y="196" fill="#64748b" fontSize="9" fontFamily="sans-serif">¬b∨¬c falha</text>
            <rect x="200" y="158" width="130" height="28" fill="#c2410c" stroke="#fbbf24" strokeWidth="1.5" rx="6" />
            <text x="265" y="177" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="monospace">SAT ✓</text>
            <text x="235" y="196" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{'{'}a=V,b=F,c=V{'}'}</text>
            <line x1="495" y1="123" x2="495" y2="158" stroke="#475569" strokeWidth="1.5" />
            <rect x="420" y="158" width="150" height="28" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1.5" rx="6" />
            <text x="495" y="177" textAnchor="middle" fill="#f97316" fontSize="12" fontFamily="monospace">decide: c=V ou F</text>
            <rect x="370" y="218" width="120" height="28" fill="#c2410c" stroke="#fbbf24" strokeWidth="1.5" rx="6" />
            <text x="430" y="237" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="monospace">SAT ✓ c=F</text>
            <text x="400" y="254" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{'{'}a=F,b=V,c=F{'}'}</text>
            <line x1="495" y1="186" x2="430" y2="218" stroke="#475569" strokeWidth="1.5" />
            <text x="340" y="272" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Unit propagation evita exploração desnecessária — poda dramática do espaço de pesquisa</text>
          </svg>
        </div>

        <p style={S.p}>
          <strong>CDCL — Conflict-Driven Clause Learning</strong> é a revolução que tornou o SAT industrialmente viável. Quando DPLL encontra um conflito, CDCL analisa o <em>grafo de implicação</em> para identificar a <em>cláusula de assertiva</em> (a razão mínima do conflito usando a técnica UIP — Unique Implication Point), adiciona-a permanentemente à base de cláusulas (aprendizagem que evita repetir o mesmo conflito) e executa <em>backjumping não-cronológico</em> — saltando directamente para o nível de decisão relevante, podendo assim evitar explorar ramos inteiros do espaço de pesquisa.
        </p>
        <p style={S.p}>
          SAT solvers modernos como <strong>MiniSAT</strong> (Eén & Sörensson, 2003 — apenas 600 linhas de C++), <strong>Glucose</strong> (baseado na métrica LBD — Literal Block Distance para qualidade de cláusulas aprendidas), e <strong>CaDiCaL</strong> (Biere et al., vencedor SAT Competition 2019-2022) resolvem instâncias com milhões de variáveis em segundos. Usam heurísticas VSIDS (Variable State Independent Decaying Sum) para escolha de variáveis e reinicios periódicos para escapar de sub-espaços difíceis.
        </p>
        <p style={S.p}>
          <strong>SMT — Satisfatibilidade Módulo Teorias</strong> generaliza SAT adicionando teorias específicas de domínio: aritmética linear sobre inteiros (LIA) ou reais (LRA), teoria dos arrays (Ax), strings, ponto-flutuante IEEE 754, bit-vectors. O solver <strong>Z3</strong> (Microsoft Research, de Moura & Bjørner, 2008) combina um SAT solver CDCL com <em>solvers de teoria</em> via arquitectura DPLL(T): o SAT solver propõe atribuições booleanas; os T-solvers verificam consistência na teoria e devolvem lemmas de teoria quando há conflito.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Aplicações industriais de impacto.</strong> A Intel usa SAT para verificação de chips desde os anos 90 — crucial após o bug de divisão do Pentium (1994, custo 475 M$). O <em>Bounded Model Checking</em> (Clarke et al., 2001) codifica k passos de execução de hardware em SAT e verifica violações de propriedades de segurança em ≤k passos. A NASA usa Lean 4 para verificar algoritmos de voo. Ferramentas como KLEE (LLVM), Angr (binário), e CBMC (C) encontraram centenas de bugs em Linux kernel, OpenSSL e software aeroespacial usando SAT/SMT por baixo.
          </p>
        </div>
        <p style={S.p}>
          <strong>MaxSAT</strong> é a variante de optimização: dado um conjunto de cláusulas com pesos (algumas obrigatórias), encontrar a atribuição que maximiza o peso total das cláusulas satisfeitas. Usado em scheduling, configuração de produtos, classificação de preferências e diagnóstico de falhas. <strong>QBF</strong> (Quantified Boolean Formula) estende SAT com quantificadores alternados — PSPACE-completo, expressivamente equivalente ao verificador de modelos simbólico para propriedades de segurança e vivacidade em sistemas reactivos de dois jogadores.
        </p>
        <p style={S.p}>
          <strong>Criptografia e SAT:</strong> a resistência de sistemas criptográficos pode ser analisada via SAT. Ataques por SAT a cifras de bloco reduzidas (DES, AES com menos rondas) codificam a cifra como fórmula CNF e tentam encontrar a chave. Embora cifras completas resistam, esta técnica é usada para validar que novas primitivas criptográficas são suficientemente complexas antes do deployment. A análise de colisões de funções de hash (MD4, MD5) via SAT revelou fraquezas que levaram à sua depreciação.
        </p>
        <p style={S.p}>
          <strong>Planning como SAT:</strong> o planificador SATPLAN codifica problemas de planeamento clássico como fórmulas SAT — os estados em cada passo de tempo são variáveis booleanas, as acções são variáveis de decisão, e as pré-condições/efeitos são cláusulas. Para horizonte k, verifica se existe plano de comprimento ≤k. Esta abordagem escalou para problemas de planeamento com milhares de acções (logistics, scheduling de missões) onde planificadores PDDL clássicos falham.
        </p>
        <div style={S.note}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Fronteiras do SAT moderno:</strong> instâncias de competições industriais (hardware verification, planning, cryptanalysis) chegam a 10⁷ variáveis e 5×10⁷ cláusulas. Paralelização (PSATS, HordeSAT) distribui o trabalho por centenas de núcleos. Integração com aprendizagem por reforço (NeuroSAT, Graph Neural Networks para heurísticas de branching) é área activa de investigação em 2024-2025. A SAT Competition anual (desde 2002) impulsionou melhorias de vários ordens de magnitude — uma instância que levava 10 anos em 2002 resolve-se em segundos em 2024.
          </p>
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Lógica Proposicional</strong> — sistema formal que opera com proposições verdadeiras ou falsas ligadas por conectivos (¬, ∧, ∨, →, ↔); a base do raciocínio dedutivo e dos circuitos digitais, com semântica definida por tabelas de verdade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Lógica de Predicados (FOL)</strong> — estende a lógica proposicional com predicados, quantificadores (∀, ∃) e termos, permitindo expressar propriedades de objectos e relações; é semi-decidível e serve de fundamento à maioria da matemática formalizada.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Formas Normais</strong> — representações padronizadas de fórmulas lógicas (CNF, DNF, prenex, clausal) que tornam possível o raciocínio automático; a transformação de Tseitin converte qualquer fórmula para CNF em tamanho linear, sendo a base de todos os SAT solvers.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SAT, SMT e Aplicações Industriais</strong> — SAT (NP-completo) e SMT (SAT módulo teorias) são a espinha dorsal da verificação formal moderna; algoritmos DPLL e CDCL tornaram-nos industrialmente viáveis para verificação de hardware, análise de software e planeamento.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
