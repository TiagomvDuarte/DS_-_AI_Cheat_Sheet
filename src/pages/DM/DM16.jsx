import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

// === Diagram: Apriori lattice with pruning ===
const AprioriLatticeDiagram = () => {
  const level1 = ['{pão}', '{leite}', '{manteiga}', '{cerveja}', '{fraldas}'];
  const level2 = [
    { label: '{pão,leite}', freq: true },
    { label: '{pão,manteiga}', freq: true },
    { label: '{leite,manteiga}', freq: true },
    { label: '{pão,cerveja}', freq: false },
    { label: '{cerveja,fraldas}', freq: true },
    { label: '{leite,fraldas}', freq: false },
  ];
  const level3 = [
    { label: '{pão,leite,manteiga}', freq: true },
    { label: '{pão,leite,cerveja}', freq: false, pruned: true },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Geração e Poda de Candidatos (Apriori)</p>
      <svg viewBox="0 0 600 320" style={{ maxWidth: '100%', height: 'auto' }}>
        <text x="20" y="20" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Nível 1 (1-itemsets)</text>
        {level1.map((label, i) => (
          <g key={label}>
            <rect x={20 + i * 115} y="30" width="105" height="32" rx="6" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
            <text x={20 + i * 115 + 52} y="50" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{label}</text>
          </g>
        ))}
        <text x="20" y="100" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Nível 2 (candidatos C₂ → L₂ após contagem)</text>
        {level2.map(({ label, freq }, i) => (
          <g key={label}>
            <rect x={20 + i * 96} y="110" width="88" height="40" rx="6"
              fill={freq ? 'rgba(249,115,22,0.08)' : 'rgba(249,115,22,0.04)'}
              stroke={color} strokeWidth="1.5"
              strokeDasharray={freq ? 'none' : '4,3'} />
            <text x={20 + i * 96 + 44} y="128" textAnchor="middle" fill={color} fontSize="8.5" fontWeight="700">{label}</text>
            <text x={20 + i * 96 + 44} y="142" textAnchor="middle" fill={color} fontSize="8" fontStyle="italic">{freq ? 'frequente' : 'infrequente'}</text>
          </g>
        ))}
        <text x="20" y="200" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Nível 3 (candidatos C₃)</text>
        {level3.map(({ label, freq, pruned }, i) => (
          <g key={label}>
            <rect x={20 + i * 200} y="210" width="180" height="40" rx="6"
              fill={freq ? 'rgba(249,115,22,0.08)' : 'rgba(255,255,255,0.04)'}
              stroke={freq ? color : '#9ca3af'} strokeWidth="1.5"
              strokeDasharray={freq ? 'none' : '4,3'} />
            <text x={20 + i * 200 + 90} y="228" textAnchor="middle" fill={freq ? color : '#9ca3af'} fontSize="9" fontWeight="700">{label}</text>
            <text x={20 + i * 200 + 90} y="242" textAnchor="middle" fill={freq ? color : '#9ca3af'} fontSize="8" fontStyle="italic">
              {pruned ? 'podado: contém {pão,cerveja} infrequente' : freq ? 'frequente' : ''}
            </text>
          </g>
        ))}
        <text x="20" y="285" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Propriedade anti-monotónica</text>
        <text x="20" y="305" fill="var(--text-secondary)" fontSize="9.5">
          {'{pão,cerveja} infrequente ⟹ qualquer superset, p.ex. {pão,leite,cerveja}, também é infrequente — nem é gerado/contado.'}
        </text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        O algoritmo avança <strong>nível a nível</strong>: começa pelos 1-itemsets frequentes (<InlineMath math="L_1" />),
        combina-os para gerar candidatos a 2-itemsets (<InlineMath math="C_2" />), conta o seu suporte na base de
        dados para obter <InlineMath math="L_2" />, e assim por diante. Em cada nível, candidatos cujos subconjuntos
        imediatos <strong>não são todos frequentes</strong> são <strong>podados</strong> sem serem avaliados.
      </p>
    </div>
  );
};

export default function DM16() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 08</div>
      <h1 style={S.h1}>Association Rules: Apriori & FP-Growth</h1>
      <p style={S.lead}>
        Association Rules mineram padrões de co-ocorrência em bases de dados transacionais — a base do
        <em> market basket analysis</em>, sistemas de recomendação e descoberta de padrões em logs.
        Neste módulo cobrimos as métricas formais (support, confidence, lift), um exemplo numérico completo,
        o algoritmo Apriori com a propriedade anti-monotónica, a alternativa FP-Growth e os critérios
        para distinguir regras genuinamente úteis de artefactos estatísticos.
      </p>

      {/* === SECTION 1: Definições formais === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Definições Formais</h2>
        <p style={S.p}>
          As <strong>association rules</strong> mineram padrões de co-ocorrência numa base de dados
          transacional: um conjunto de <InlineMath math="N" /> transações, cada uma contendo um subconjunto de
          itens de um universo <InlineMath math="I" />. Uma regra de associação tem a forma
          <InlineMath math="\;X \to Y" />, onde <InlineMath math="X" /> (antecedente) e <InlineMath math="Y" />
          (consequente) são itemsets disjuntos.
        </p>
        <div style={S.highlight}>
          <strong>Exemplo:</strong> {'{pão, manteiga}'} → {'{leite}'}<br />
          "Clientes que compram pão e manteiga tendem também a comprar leite."
        </div>
        <p style={S.p}>Três métricas quantificam a relevância de uma regra:</p>
        <div style={S.math}>
          <BlockMath math="\text{Support}(X) = \frac{\text{freq}(X)}{N}" />
        </div>
        <p style={S.p}>
          O suporte de um itemset <InlineMath math="X" /> é a fração de transações que o contêm — mede a sua <strong>popularidade</strong>.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Confidence}(X \to Y) = \frac{\text{Support}(X \cup Y)}{\text{Support}(X)}" />
        </div>
        <p style={S.p}>
          A confiança é a probabilidade condicional <InlineMath math="P(Y \mid X)" />: entre as transações que
          contêm <InlineMath math="X" />, qual a fração que <strong>também</strong> contém <InlineMath math="Y" />.
          Mede a <strong>força da implicação</strong> — mas por si só não diz se a associação é mais forte do que seria por acaso.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Lift}(X \to Y) = \frac{\text{Confidence}(X \to Y)}{\text{Support}(Y)}" />
        </div>
        <p style={S.p}>
          O lift compara a confiança observada com a que se esperaria se <InlineMath math="X" /> e
          <InlineMath math="Y" /> fossem <strong>independentes</strong> (caso em que lift = 1).
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Valor de Lift</th><th style={S.th}>Interpretação</th></tr></thead>
            <tbody>
              {[
                ['Lift = 1', 'X e Y são independentes — a co-ocorrência não diz nada além do acaso'],
                ['Lift > 1', 'Associação positiva — comprar X aumenta a probabilidade de comprar Y'],
                ['Lift < 1', 'Associação negativa — comprar X diminui a probabilidade de comprar Y (itens substitutos)'],
              ].map(([k, v]) => (
                <tr key={k}><td style={{ ...S.td, fontWeight: 700, color }}>{k}</td><td style={S.td}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Exemplo completo === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Exemplo Completo: Mini Base de Transações</h2>
        <p style={S.p}>
          Para tornar estas fórmulas concretas, considere a seguinte base de dados transacional com
          <InlineMath math="N = 8" /> transações sobre 5 itens: <em>pão</em>, <em>leite</em>, <em>manteiga</em>,
          <em>cerveja</em> e <em>fraldas</em>.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Transação</th><th style={S.th}>Itens</th></tr></thead>
            <tbody>
              {[
                ['T1', 'pão, leite, manteiga'],
                ['T2', 'pão, manteiga'],
                ['T3', 'leite, manteiga'],
                ['T4', 'pão, leite, manteiga, cerveja'],
                ['T5', 'cerveja, fraldas'],
                ['T6', 'pão, leite'],
                ['T7', 'cerveja, fraldas, leite'],
                ['T8', 'pão, manteiga, leite'],
              ].map(([t, items]) => (
                <tr key={t}><td style={{ ...S.td, fontWeight: 700, color }}>{t}</td><td style={S.td}>{'{' + items + '}'}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>2.1 Regra A: {'{pão, manteiga}'} → {'{leite}'}</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Itemset</th><th style={S.th}>Transações</th><th style={S.th}>freq.</th><th style={S.th}>Support</th></tr></thead>
            <tbody>
              {[
                ['{pão, manteiga}', 'T1, T2, T4, T8', '4', '4/8 = 0.50'],
                ['{leite}', 'T1, T3, T4, T6, T7, T8', '6', '6/8 = 0.75'],
                ['{pão, manteiga, leite}', 'T1, T4, T8', '3', '3/8 = 0.375'],
              ].map(([i, t, f, s]) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{i}</td>
                  <td style={S.td}>{t}</td>
                  <td style={S.td}>{f}</td>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.math}>
          <BlockMath math="\text{Confidence} = \frac{0.375}{0.50} = 0.75 \qquad \text{Lift} = \frac{0.75}{0.75} = 1.0" />
        </div>
        <div style={S.note}>
          <strong>Interpretação:</strong> lift = 1.0 revela que a associação não é surpreendente — a probabilidade
          geral de comprar leite já é 75%, exactamente igual à confiança. Comprar pão e manteiga <strong>não
          altera</strong> a probabilidade de comprar leite.
        </div>

        <h3 style={S.h3}>2.2 Regra B: {'{cerveja}'} → {'{fraldas}'}</h3>
        <div style={S.math}>
          <BlockMath math="\text{Support} = \frac{2}{8} = 0.25 \qquad \text{Confidence} = \frac{0.25}{0.375} = 0.667 \qquad \text{Lift} = \frac{0.667}{0.25} = 2.67" />
        </div>
        <div style={S.note}>
          <strong>Interpretação:</strong> suporte baixo (25%) mas <strong>lift de 2.67</strong> — quem compra
          cerveja tem quase 3× mais probabilidade de comprar fraldas do que um cliente aleatório. A famosa
          "regra cerveja-fraldas": mesmo com suporte modesto, um lift elevado torna a regra <strong>acionável</strong>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Apriori === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Algoritmo Apriori</h2>
        <p style={S.p}>
          Com <InlineMath math="m" /> itens existem <InlineMath math="2^m - 1" /> itemsets possíveis — para apenas
          20 itens, mais de um milhão. O <strong>Apriori</strong> explora a <strong>propriedade anti-monotónica</strong>:
        </p>
        
          <strong>Princípio Apriori:</strong> Se um itemset <InlineMath math="X" /> é infrequente, então
          <strong> todos os seus supersets</strong> são também infrequentes — e podem ser ignorados.
        
        <AprioriLatticeDiagram />
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Algoritmo Apriori — passo a passo</p>
          {[
            ['1', 'Gerar C₁', 'Todos os 1-itemsets; conta-se o support e filtra-se → L₁'],
            ['2', 'Gerar Cₖ', 'Combinar pares de itemsets de Lₖ₋₁ que partilham k-2 itens'],
            ['3', 'Pruning', 'Eliminar de Cₖ candidatos cujos subconjuntos k-1 não estejam todos em Lₖ₋₁'],
            ['4', 'Contar support', 'Varrer a base de dados para contar o support de cada candidato'],
            ['5', 'Filtrar', 'Guardar em Lₖ apenas os itemsets com support ≥ min_supp'],
            ['6', 'Repetir', 'Incrementar k; repetir até Lₖ ficar vazio'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.78rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.85rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</span></div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: FP-Growth === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Alternativa: FP-Growth</h2>
        <p style={S.p}>
          O principal custo do Apriori é o número de <strong>varrimentos da base de dados</strong> — um por cada
          nível. O <strong>FP-Growth</strong> evita completamente a geração explícita de candidatos:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}></th><th style={S.th}>Apriori</th><th style={S.th}>FP-Growth</th></tr></thead>
            <tbody>
              {[
                ['Estrutura', 'Sem estrutura adicional — varre a BD repetidamente', 'Constrói uma FP-tree compacta com todas as transações'],
                ['Geração de candidatos', 'Sim — gera e poda Cₖ em cada nível', 'Não — extrai padrões directamente da árvore'],
                ['Varrimentos da BD', 'Um por cada nível k', 'Apenas 2'],
                ['Implementação', 'Simples e fácil de entender', 'Mais complexa — árvores condicionais recursivas'],
                ['Desempenho', 'Bom em bases esparsas', 'Muito mais rápido em bases densas'],
              ].map(([k, a, f]) => (
                <tr key={k}>
                  <td style={{ ...S.td, fontWeight: 700 }}>{k}</td>
                  <td style={S.td}>{a}</td>
                  <td style={{ ...S.td, color }}>{f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Na prática, <code>mlxtend</code> oferece ambas as implementações (<code>apriori</code> e <code>fpgrowth</code>)
          com a mesma interface. Para datasets de produção com milhões de transações, FP-Growth é a escolha por defeito.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Acionabilidade === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Interpretando Regras: Acionabilidade e Regras Espúrias</h2>
        <p style={S.p}>
          Encontrar itemsets frequentes é apenas metade do trabalho — decidir <strong>quais regras importam</strong>
          é a outra. Os limiares <InlineMath math="min\_supp" /> e <InlineMath math="min\_conf" /> definem o
          equilíbrio entre dois riscos opostos.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Demasiado baixo</th><th style={S.th}>Demasiado alto</th></tr></thead>
            <tbody>
              {[
                ['min_support', 'Explosão combinatória — milhões de itemsets, muitos irrelevantes', 'Perdem-se regras de nicho com lift elevado (ex.: cerveja-fraldas)'],
                ['min_confidence', 'Regras fracas, pouco mais que ruído', 'Apenas regras "óbvias" envolvendo itens muito populares'],
              ].map(([k, lo, hi]) => (
                <tr key={k}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{k}</td>
                  <td style={S.td}>{lo}</td>
                  <td style={S.td}>{hi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Tal como correlações espúrias no Módulo 01, um lift alto com suporte muito baixo pode simplesmente
          reflectir <strong>coincidência</strong> numa amostra pequena. Antes de agir sobre uma regra, validar
          adicionalmente: novidade, acionabilidade, não-trivialidade, estabilidade temporal e validação out-of-sample.
        </div>
      </div>

      <hr style={S.divider} />
      <div style={S.section}>
        <h2 style={S.h2}>6. Síntese do Módulo</h2>
        <div style={S.highlight}>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Support(X) = freq(X)/N</strong> — popularidade; <strong>Confidence(X→Y) = Supp(X∪Y)/Supp(X)</strong> — força condicional; <strong>Lift = Conf/Supp(Y)</strong> — desvio da independência.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Lift &gt; 1</strong> indica associação positiva além do acaso — critério-chave para distinguir regras interessantes de regras meramente populares.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Apriori</strong>: gera itemsets frequentes nível a nível, podando candidatos via propriedade anti-monotónica — superset de itemset infrequente é sempre infrequente.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>FP-Growth</strong>: evita geração de candidatos via FP-tree — mais rápido em bases densas, mais complexo de implementar.</li>
            <li style={{ marginBottom: '0.5rem' }}>Regras úteis exigem mais do que lift alto: <strong>novidade, acionabilidade, estabilidade temporal</strong> e validação out-of-sample.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
