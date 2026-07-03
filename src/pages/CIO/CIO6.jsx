import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  tag: { display: 'inline-block', background: 'transparent', color: '#f97316', border: '1.5px solid #f97316', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: '#f97316', borderLeft: '3px solid #f97316', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.06)', borderLeft: '3px solid #f97316', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

const SchemaDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Esquemas — Templates sobre o Espaço Binário</p>
    <svg viewBox="0 0 760 290" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Schema definition */}
      <text x="150" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">CROMOSSOMAS QUE INSTANCIAM H = 1 * * 0 1</text>
      {[
        { bits: ['1','0','0','0','1'], y: 32 },
        { bits: ['1','1','0','0','1'], y: 76 },
        { bits: ['1','0','1','0','1'], y: 120 },
        { bits: ['1','1','1','0','1'], y: 164 },
      ].map(({ bits, y }) => (
        <g key={y}>
          {bits.map((b, i) => (
            <g key={i}>
              <rect x={10 + i * 40} y={y} width={34} height={32} rx="5"
                fill={i === 0 || i === 3 || i === 4 ? '#dc262615' : 'var(--bg-primary)'}
                stroke={i === 0 || i === 3 || i === 4 ? '#f97316' : 'var(--card-border)'} strokeWidth="1.5"/>
              <text x={27 + i * 40} y={y + 21} textAnchor="middle" fontSize="13" fontWeight="700"
                fill={i === 0 || i === 3 || i === 4 ? '#f97316' : 'var(--text-secondary)'}>{b}</text>
            </g>
          ))}
          <text x="222" y={y + 21} fill="#f97316" fontSize="11">✓ instancia H</text>
        </g>
      ))}

      {/* Non-matching examples */}
      <text x="10" y="232" fill="var(--text-secondary)" fontSize="10" fontWeight="700">NÃO instanciam:</text>
      <text x="10" y="254" fill="#f97316" fontSize="10">0 * * 0 1   ✗  (pos. 1 ≠ 1)</text>
      <text x="10" y="276" fill="#f97316" fontSize="10">1 * * 1 1   ✗  (pos. 4 ≠ 0)</text>

      {/* Schema itself */}
      <text x="585" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">O ESQUEMA H = 1 * * 0 1</text>
      {['1','*','*','0','1'].map((b, i) => (
        <g key={i}>
          <rect x={460 + i * 44} y={32} width={36} height={36} rx="5"
            fill={b === '*' ? 'var(--bg-primary)' : '#dc262615'}
            stroke={b === '*' ? 'var(--card-border)' : '#f97316'} strokeWidth={b === '*' ? 1 : 2}/>
          <text x={478 + i * 44} y={56} textAnchor="middle" fontSize="14" fontWeight="700"
            fill={b === '*' ? 'var(--text-secondary)' : '#f97316'}>{b}</text>
        </g>
      ))}

      {/* Properties */}
      <rect x="450" y="90" width="280" height="160" rx="8" fill="var(--bg-primary)" stroke="rgba(249,115,22,0.10)" strokeWidth="1.5"/>
      <text x="590" y="115" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">PROPRIEDADES DE H</text>
      <text x="465" y="142" fill="var(--text-primary)" fontSize="9.5">• Ordem o(H) = 3</text>
      <text x="478" y="160" fill="var(--text-secondary)" fontSize="8.5">(posições definidas: 1, 4, 5)</text>
      <text x="465" y="184" fill="var(--text-primary)" fontSize="9.5">• Comprimento δ(H) = 4</text>
      <text x="478" y="202" fill="var(--text-secondary)" fontSize="8.5">(pos. última − pos. primeira)</text>
      <text x="465" y="226" fill="var(--text-primary)" fontSize="9.5">• Instâncias: 2² = 4  (2 wildcards)</text>
    </svg>
  </div>
);

export default function CIO6() {
  const [tab, setTab] = useState(0);
  const bbExamples = [
    { problem: 'Knapsack', bb: 'Os bits correspondentes a itens com alto rácio valor/peso', why: 'Estes bits aparecem frequentemente nas melhores soluções. O AG descobre que "incluir este tipo de item" é uma boa estratégia.' },
    { problem: 'TSP (representação directa)', bb: 'Subsequências de cidades adjacentes eficientes (arcos curtos)', why: 'Segmentos de rota eficientes são preservados pelo crossover e têm fitness mais alto quando presentes.' },
    { problem: 'Scheduling', bb: 'Tarefas com prazo apertado nos primeiros slots', why: 'Atribuir cedo as tarefas mais urgentes é uma heurística de boa qualidade que o AG aprende implicitamente.' },
  ];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/cio" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.tag}>Module 6</div>
        <h1 style={S.h1}>AGs — Schema Theory & Parâmetros</h1>
        <p style={S.lead}>A Schema Theory responde à questão mais profunda sobre os AGs: porquê é que funcionam? A resposta envolve a noção de esquemas — templates que descrevem famílias de soluções — e o Teorema dos Esquemas, que prova que bons esquemas crescem exponencialmente ao longo das gerações.</p>

        <div style={S.section}>
          <h2 style={S.h2}>1. O que é um Esquema (Schema)</h2>
          <p style={S.p}>Um esquema H é um template sobre o espaço de soluções binárias. Usa três símbolos: 0, 1 e * (wildcard ou "don't care"). Um esquema com n posições representa uma família de cromossomas — todos os cromossomas que têm os valores especificados nas posições definidas, independentemente dos valores nas posições wildcard (*). O esquema H = 1**01 representa todos os cromossomas de comprimento 5 que começam com 1, têm 0 na quarta posição e 1 na quinta, independentemente do que têm nas posições 2 e 3.</p>
          <p style={S.p}>A intuição fundamental é que os esquemas capturam padrões parciais. Se vários indivíduos com alto fitness partilham um padrão parcial (por exemplo, os bits 2 e 7 são ambos 1), esse padrão pode ser um building block — uma subestrutura que contribui positivamente para o fitness. A Schema Theory quantifica rigorosamente como esses padrões se propagam através das gerações.</p>

          <SchemaDiagram />

          <h3 style={S.h3}>Propriedades de um Esquema</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Propriedade</th><th style={S.th}>Definição formal</th><th style={S.th}>Intuição</th><th style={S.th}>Impacto</th></tr></thead>
              <tbody>
                {[
                  ['Ordem o(H)', 'Número de posições definidas (não-wildcard)', 'Quão específico é o esquema', 'Alta ordem → mais específico → menos instâncias → mais fácil de destruir'],
                  ['Comprimento δ(H)', 'Distância entre a primeira e a última posição definida', 'Quão espalhado está o padrão no cromossoma', 'Alto comprimento → padrão espalhado → mais fácil de cortar com crossover'],
                  ['Número de instâncias m(H,t)', 'Quantos indivíduos na população na geração t instanciam H', 'A "frequência" do padrão na população actual', 'Cresce se o fitness médio do esquema supera a média da população'],
                  ['Fitness médio f(H,t)', 'Média do fitness de todos os instanciantes de H na geração t', 'Quão boa é a família H em média', 'Acima da média da pop. → esquema cresce; abaixo → esquema diminui'],
                ].map(([p, d, i, im]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{d}</td><td style={S.td}>{i}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{im}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. O Teorema dos Esquemas</h2>
          <p style={S.p}>O Teorema dos Esquemas (Holland, 1975) é o resultado central da teoria formal dos AGs. Afirma que esquemas com fitness acima da média, de baixa ordem, e de comprimento pequeno crescem exponencialmente ao longo das gerações. Formalmente, o número esperado de instâncias de H na geração t+1 é:</p>
          <div style={S.math}>
            <BlockMath math="\mathbb{E}[m(H,t+1)] \;\geq\; m(H,t) \cdot \left[\frac{f(H,t)}{\bar{f}(t)}\right] \cdot \left(1 - p_c \cdot \frac{\delta(H)}{n-1}\right) \cdot (1 - p_m)^{o(H)}" />
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
              m = instâncias · f(H,t) = fitness médio do esquema · f̄(t) = fitness médio da população<br/>
              p_c = prob. crossover · δ(H) = comprimento · p_m = prob. mutação · o(H) = ordem
            </p>
          </div>
          <p style={S.p}>Interpretando os três factores: (1) f(H,t)/f̄(t) — o factor de selecção. Se o esquema tem fitness acima da média, esta fracção é maior que 1 — o esquema cresce. Se abaixo, decresce. É a pressão selectiva. (2) (1 − pc · δ(H)/(n−1)) — o factor de sobrevivência ao crossover. Esquemas com comprimento pequeno têm menor probabilidade de serem cortados pelo crossover de 1-ponto. (3) (1 − pm)^o(H) — o factor de sobrevivência à mutação. Esquemas de baixa ordem têm menor probabilidade de serem destruídos por uma mutação.</p>
          <p style={S.p}>O resultado combinado: esquemas que são bons (f(H) acima da média), compactos (δ(H) pequeno) e simples (o(H) pequena) são exponencialmente amplificados. Num AG com N indivíduos e cromossomas de comprimento n, estão a ser processados implicitamente O(N³) esquemas diferentes em paralelo — este é o "paralelismo implícito" dos AGs.</p>

          <div style={S.note}>O Teorema dos Esquemas é uma cota inferior (E[...] ≥ ...) porque considera apenas a destruição mínima. Na prática, o crossover pode também criar novas instâncias de H (crossover construtivo). O teorema captura a tendência, não o valor exacto.</div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>3. Building Blocks Hypothesis</h2>
          <p style={S.p}>A Building Blocks Hypothesis (BBH) é a interpretação mais optimista do Teorema dos Esquemas. Propõe que os AGs funcionam porque o espaço de soluções tem uma estrutura hierárquica de building blocks: subsoluções parciais de baixa ordem que contribuem positivamente para o fitness e que podem ser detectadas e combinadas para construir soluções globais melhores.</p>
          <p style={S.p}>A hipótese tem duas partes: (1) O AG detecta implicitamente building blocks de baixa ordem com alto fitness — o Teorema dos Esquemas garante que estes crescem na população. (2) O crossover combina building blocks de diferentes progenitores para criar soluções de maior ordem que são melhores que ambos os pais.</p>

          <div style={S.diagram}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Exemplos de Building Blocks por problema</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {bbExamples.map((ex, i) => (
                <button key={i} onClick={() => setTab(i)} style={{ padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem', background: tab === i ? '#f97316' : 'var(--bg-primary)', color: tab === i ? 'white' : 'var(--text-primary)', border: `1.5px solid ${tab === i ? '#f97316' : 'var(--card-border)'}`, transition: 'all 0.2s' }}>{ex.problem}</button>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', border: '1.5px solid rgba(249,115,22,0.10)' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f97316', marginBottom: '0.5rem' }}>Building block: {bbExamples[tab].bb}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{bbExamples[tab].why}</p>
            </div>
          </div>

          <h3 style={S.h3}>Quando a BBH Falha — Deception</h3>
          <p style={S.p}>A BBH falha em problemas "enganadores" (deceptive problems): problemas onde os building blocks locais de baixa ordem levam na direcção errada. Um exemplo clássico: o problema da armadilha (trap function) onde os bits parcialmente corretos têm fitness mais baixo que os totalmente errados. O AG aprende building blocks que convergem para o mínimo local errado.</p>
          <p style={S.p}>Deception é uma limitação fundamental, mas rara em problemas práticos. A maioria dos problemas do mundo real tem alguma grau de "separabilidade" — subsoluções boas contribuem positivamente para o total — tornando a BBH razoavelmente válida na prática.</p>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. Calibração de Parâmetros</h2>
          <p style={S.p}>A escolha de parâmetros é uma das tarefas práticas mais importantes na aplicação de AGs. Não existe uma configuração universalmente óptima — depende do problema, da representação e dos operadores usados. As seguintes heurísticas são pontos de partida razoáveis.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Regra prática</th><th style={S.th}>Diagnóstico: algo corre mal se...</th></tr></thead>
              <tbody>
                {[
                  ['Tamanho população N', '10–20× o comprimento do cromossoma. Para n=50, N≈100−200.', 'Convergência prematura antes de G/2 gerações → N demasiado pequeno. Custo computacional excessivo → N demasiado grande.'],
                  ['Prob. crossover pc', '0.7–0.9 para maioria dos problemas.', 'Pouco progresso após muitas gerações → pc demasiado baixo (sem recombinação útil). Fitness médio oscila muito → pc demasiado alto.'],
                  ['Prob. mutação pm', '1/n (inverso do comprimento). Para n=100, pm = 0.01.', 'Perda de alelos cedo (alelo desaparece de toda a população) → pm muito baixo. Soluções não melhoram apesar de selecção → pm muito alto (pesquisa aleatória).'],
                  ['Torneio k', '2–3 para exploração equilibrada. k=5–7 para pressão alta.', 'Dominância por 1-2 indivíduos na população → k muito alto. Nenhuma direcção clara → k muito baixo (k=1 é selecção aleatória).'],
                  ['Gerações G', '100–1000. Parar com critério de convergência.', 'Termina sem convergir → G insuficiente. Não melhorou nas últimas G/4 gerações → pode-se parar mais cedo.'],
                  ['Elitismo k_e', 'k_e = 1–2 para maioria dos problemas.', 'Fitness decresce em alguma geração → sem elitismo. Diversidade muito baixa → k_e muito alto.'],
                ].map(([p, r, d]) => (
                  <tr key={p}><td style={{ ...S.td, fontWeight: 600, color: '#f97316' }}>{p}</td><td style={S.td}>{r}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
              <li>Esquema H: template com {'{'}0, 1, *{'}'} sobre cromossomas binários. Ordem o(H) = posições definidas. Comprimento δ(H) = extensão do padrão.</li>
              <li>Teorema dos Esquemas: esquemas acima da média, de baixa ordem e comprimento pequeno crescem exponencialmente. Os outros decrescem.</li>
              <li>Paralelismo implícito: N indivíduos processam implicitamente O(N³) esquemas em paralelo — sem custo adicional de computação.</li>
              <li>Building Blocks Hypothesis: o AG detecta e combina subsoluções parciais (building blocks) de alta qualidade para construir soluções melhores.</li>
              <li>Deception: problemas onde building blocks locais apontam para o ótimo errado. A BBH falha — mas é raro em problemas práticos.</li>
              <li>Parâmetros típicos: N ≈ 10–20n, pc ≈ 0.8, pm ≈ 1/n, elitismo k=1, torneio k=2–3.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
