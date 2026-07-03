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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0' },
};

// === Diagram: Missing values imputation comparison ===
const ImputationDiagram = () => {
  const rows = [
    { id: 'A', idade: '34', salario: '2100', original: true },
    { id: 'B', idade: '—', salario: '1800', original: false },
    { id: 'C', idade: '41', salario: '—', original: false },
    { id: 'D', idade: '29', salario: '2400', original: true },
    { id: 'E', idade: '38', salario: '2050', original: true },
  ];
  // Idade: mean of 34,41,29,38 = 35.5 ; Salário median of 2100,1800,2400,2050 = 2075
  const strategies = [
    { name: 'Eliminar registo', idadeB: '(removido)', salarioC: '(removido)', c: '#f97316' },
    { name: 'Imputar média/mediana', idadeB: '35.5 (média)', salarioC: '2075 (mediana)', c: '#f97316' },
    { name: 'Imputar por KNN (k=2)', idadeB: '≈36.0 (vizinhos)', salarioC: '≈2075 (vizinhos)', c: '#f97316' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Dataset com Missing Values e Diferentes Estratégias de Imputação</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Cliente</th><th style={S.th}>Idade</th><th style={S.th}>Salário (€)</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td style={S.td}>{r.id}</td>
                <td style={{ ...S.td, color: r.idade === '—' ? '#f97316' : 'var(--text-primary)', fontWeight: r.idade === '—' ? 700 : 400 }}>{r.idade}</td>
                <td style={{ ...S.td, color: r.salario === '—' ? '#f97316' : 'var(--text-primary)', fontWeight: r.salario === '—' ? 700 : 400 }}>{r.salario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.75rem 0' }}>
        A Idade do cliente B e o Salário do cliente C estão em falta (destacados a vermelho). Eis como cada
        estratégia trata estes dois valores:
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Estratégia</th><th style={S.th}>Idade de B</th><th style={S.th}>Salário de C</th></tr></thead>
          <tbody>
            {strategies.map(s => (
              <tr key={s.name}>
                <td style={{ ...S.td, fontWeight: 700, color: s.c }}>{s.name}</td>
                <td style={S.td}>{s.idadeB}</td>
                <td style={S.td}>{s.salarioC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        Note como cada escolha tem um custo diferente: eliminar o registo perde toda a informação das outras
        colunas desse cliente; imputar pela média/mediana é simples mas ignora a relação entre Idade e Salário
        (alguém mais velho tende a ganhar mais); imputar por KNN usa os clientes mais semelhantes (vizinhos mais
        próximos noutras features) para estimar um valor mais plausível.
      </p>
    </div>
  );
};

// === Diagram: z-score vs IQR boundaries on a distribution ===
const OutlierBoundsDiagram = () => {
  const w = 560, h = 220, pad = 40;
  // Simple bell-curve-like path for illustration
  const mean = 280, sd = 60;
  const gauss = (x) => Math.exp(-Math.pow((x - mean) / sd, 2) / 2);
  const xToPx = (x) => x;
  const yToPx = (g) => h - pad - g * (h - 2 * pad - 10);
  let path = '';
  for (let x = pad; x <= w - pad; x += 4) {
    const g = gauss(x);
    path += (x === pad ? 'M' : 'L') + xToPx(x).toFixed(1) + ',' + yToPx(g).toFixed(1) + ' ';
  }
  // z-score bounds: mean ± 3sd
  const zLow = mean - 3 * sd, zHigh = mean + 3 * sd;
  // IQR bounds drawn slightly tighter (illustrative, IQR is more robust / often tighter on skewed data)
  const iqrLow = mean - 2.2 * sd, iqrHigh = mean + 2.2 * sd;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Fronteiras de Deteção de Outliers: Z-score vs. IQR</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <path d={path} fill="none" stroke="var(--text-secondary)" strokeWidth="2" />

        {/* IQR band */}
        <rect x={iqrLow} y={pad} width={iqrHigh - iqrLow} height={h - 2 * pad} fill="rgba(249,115,22,0.5)" opacity="0.08" />
        <line x1={iqrLow} y1={pad} x2={iqrLow} y2={h - pad} stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1={iqrHigh} y1={pad} x2={iqrHigh} y2={h - pad} stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" strokeDasharray="4,3" />
        <text x={iqrLow} y={pad - 20} textAnchor="middle" fill="rgba(249,115,22,0.5)" fontSize="9" fontWeight="700">Q1-1.5·IQR</text>
        <text x={iqrHigh} y={pad - 20} textAnchor="middle" fill="rgba(249,115,22,0.5)" fontSize="9" fontWeight="700">Q3+1.5·IQR</text>

        {/* z-score bounds */}
        <line x1={zLow} y1={pad} x2={zLow} y2={h - pad} stroke="#f97316" strokeWidth="1.5" strokeDasharray="2,2" />
        <line x1={zHigh} y1={pad} x2={zHigh} y2={h - pad} stroke="#f97316" strokeWidth="1.5" strokeDasharray="2,2" />
        <text x={zLow} y={pad - 6} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">μ-3σ</text>
        <text x={zHigh} y={pad - 6} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">μ+3σ</text>

        <text x={mean} y={h - pad + 16} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">μ (centro da distribuição)</text>

        {/* Outlier points */}
        {[zHigh + 25, zHigh + 45, pad + 5].map((x, i) => (
          <circle key={i} cx={x} cy={h - pad - 6} r="4" fill="#f97316" />
        ))}
        <text x={zHigh + 35} y={h - pad - 16} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">outliers</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        O critério de <strong>z-score</strong> (linhas vermelhas tracejadas) define como outlier qualquer ponto a
        mais de 3 desvios-padrão da média — mas a média e o desvio-padrão são, eles próprios, sensíveis a
        outliers extremos, o que pode "esconder" outliers ao alargar artificialmente <InlineMath math={"\\sigma"} />.
        O critério <strong>IQR</strong> (faixa verde) usa quartis — estatísticas robustas que não são distorcidas
        pelos próprios outliers — e por isso é geralmente preferido em distribuições assimétricas ou com caudas
        pesadas.
      </p>
    </div>
  );
};

// === Diagram: correlation matrix style — redundant features ===
const CorrelationMatrixDiagram = () => {
  const features = ['Área (m²)', 'Nº Quartos', 'Preço/m²', 'Distância Centro', 'Ano Construção'];
  // illustrative correlation matrix
  const matrix = [
    [1.00, 0.86, 0.12, -0.31, 0.08],
    [0.86, 1.00, 0.05, -0.22, 0.04],
    [0.12, 0.05, 1.00, -0.45, 0.51],
    [-0.31, -0.22, -0.45, 1.00, -0.19],
    [0.08, 0.04, 0.51, -0.19, 1.00],
  ];
  const cell = 78, off = 130;
  const colorFor = (v) => {
    const a = Math.abs(v);
    if (v > 0) return `rgba(249,115,22,0.10)`;
    return `rgba(249,115,22,0.10)`;
  };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Matriz de Correlação — Identificar Redundância</p>
      <svg viewBox={`0 0 ${off + cell * 5 + 10} ${off + cell * 5 + 10}`} style={{ maxWidth: '100%', height: 'auto' }}>
        {features.map((f, i) => (
          <text key={'col' + i} x={off + i * cell + cell / 2} y={off - 10} textAnchor="middle" fill="var(--text-secondary)" fontSize="9" transform={`rotate(-30 ${off + i * cell + cell / 2} ${off - 10})`}>{f}</text>
        ))}
        {features.map((f, i) => (
          <text key={'row' + i} x={off - 10} y={off + i * cell + cell / 2 + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="9">{f}</text>
        ))}
        {matrix.map((row, i) => row.map((v, j) => (
          <g key={`${i}-${j}`}>
            <rect x={off + j * cell} y={off + i * cell} width={cell - 2} height={cell - 2} fill={colorFor(v)} stroke="var(--text-secondary)" strokeWidth="0.5" />
            <text x={off + j * cell + cell / 2} y={off + i * cell + cell / 2 + 4} textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight={Math.abs(v) >= 0.85 && i !== j ? 700 : 400}>{v.toFixed(2)}</text>
          </g>
        )))}
        {/* Highlight redundant pair */}
        <rect x={off} y={off + cell} width={cell - 2} height={cell - 2} fill="none" stroke="#f97316" strokeWidth="2.5" rx="4" />
        <rect x={off + cell} y={off} width={cell - 2} height={cell - 2} fill="none" stroke="#f97316" strokeWidth="2.5" rx="4" />
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        <strong>Área (m²)</strong> e <strong>Nº Quartos</strong> têm correlação 0.86 (destacado a vermelho) —
        casas maiores tendem a ter mais quartos. São <strong>redundantes</strong>: manter ambas acrescenta pouca
        informação extra, mas aumenta a dimensionalidade e pode introduzir multicolinearidade em modelos
        lineares. Já <strong>Distância ao Centro</strong> tem correlações fracas com quase todas as outras
        features — não é redundante, mas se também tiver correlação fraca com o target (preço), pode ser
        <strong> irrelevante</strong> para o problema em questão.
      </p>
    </div>
  );
};

// === Diagram: Filter / Wrapper / Embedded pipelines ===
const SelectionPipelinesDiagram = () => {
  const pipelines = [
    {
      name: 'Filter',
      c: '#f97316',
      steps: ['Todas as\nfeatures', 'Score c/\ntarget\n(corr, MI)', 'Ranking +\nthreshold', 'Treinar\nmodelo'],
    },
    {
      name: 'Wrapper',
      c: '#f97316',
      steps: ['Subconjunto\nde features', 'Treinar\nmodelo', 'Avaliar\nperformance', 'Ajustar\nsubconjunto\n(repetir)'],
    },
    {
      name: 'Embedded',
      c: '#f97316',
      steps: ['Todas as\nfeatures', 'Treinar c/\nregularização\n(LASSO, RF)', 'Importância\né subproduto\ndo treino', 'Modelo\nfinal'],
    },
  ];
  const boxW = 110, boxH = 50, gap = 14;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Três Abordagens a Feature Selection — Pipelines</p>
      <svg viewBox={`0 0 570 ${pipelines.length * 75 + 10}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr-sel" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        {pipelines.map((p, pi) => {
          const y = pi * 75 + 10;
          return (
            <g key={p.name}>
              <text x="5" y={y + boxH / 2 + 4} fill={p.c} fontSize="12" fontWeight="700">{p.name}</text>
              {p.steps.map((s, si) => {
                const x = 70 + si * (boxW + gap);
                return (
                  <g key={si}>
                    <rect x={x} y={y} width={boxW} height={boxH} rx="6" fill={`${p.c}15`} stroke={p.c} strokeWidth="1.5" />
                    {s.split('\n').map((line, li) => (
                      <text key={li} x={x + boxW / 2} y={y + boxH / 2 - (s.split('\n').length - 1) * 6 + li * 12} textAnchor="middle" fill={p.c} fontSize="9" fontWeight="600">{line}</text>
                    ))}
                    {si < p.steps.length - 1 && (
                      <path d={`M${x + boxW} ${y + boxH / 2} L${x + boxW + gap - 2} ${y + boxH / 2}`} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr-sel)" />
                    )}
                  </g>
                );
              })}
              {pi === 1 && (
                <path d={`M${70 + 3 * (boxW + gap) + boxW / 2} ${y + boxH} C ${70 + 3 * (boxW + gap) + boxW / 2 + 30} ${y + boxH + 25}, ${70 + boxW / 2 - 30} ${y + boxH + 25}, ${70 + boxW / 2} ${y + boxH + 2}`} fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arr-sel)" />
              )}
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        <strong>Filter</strong> avalia cada feature isoladamente, antes de qualquer modelo — rápido, mas ignora
        interações. <strong>Wrapper</strong> treina e avalia o modelo repetidamente para diferentes subconjuntos
        de features (note o ciclo de repetição) — captura interações, mas é computacionalmente caro.
        <strong> Embedded</strong> integra a seleção no próprio processo de treino (ex.: os coeficientes do LASSO
        que vão a zero, ou a importância de features de uma Random Forest) — um bom compromisso entre custo e
        qualidade.
      </p>
    </div>
  );
};

export default function DM5() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}><ArrowLeft size={16} /> Voltar a Data Mining</Link>
      <div style={S.tag}>MÓDULO 02</div>
      <h1 style={S.h1}>Preparação de Dados &amp; Feature Engineering</h1>
      <p style={S.lead}>
        A preparação de dados é, de forma consistente, a fase que consome mais tempo num projeto de Data
        Mining — entre <strong>60% e 80%</strong> do esforço total, segundo a maioria dos estudos sobre o
        ciclo de vida de projetos analíticos. Isto inclui tratar sinal vs. ruído, lidar com valores em falta,
        detetar e tratar outliers, e discretizar variáveis contínuas. Mas preparar os dados não é só
        "limpá-los": a <strong>qualidade das features</strong> que alimentam o modelo determina, em larga
        medida, a qualidade do modelo final — por vezes mais do que a escolha do próprio algoritmo. Por isso,
        este módulo combina a <strong>preparação de dados</strong> (sinal/ruído, missing values, outliers,
        discretização) com o <strong>pré-processamento e feature engineering</strong> (redução do espaço de
        features, seleção de features, criação de novas features, normalização, e uma breve introdução ao
        PCA).
      </p>

      {/* === SECTION 1: Sinal vs Ruído === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Sinal vs. Ruído</h2>
        <p style={S.p}>
          Todo o conjunto de dados real contém uma mistura de <strong>sinal</strong> — padrões genuínos,
          repetíveis, que refletem a estrutura subjacente do fenómeno que queremos modelar — e
          <strong> ruído</strong> — variação aleatória, erros de medição, registos incorretos ou informação
          irrelevante para o problema em questão. O objetivo de toda a fase de preparação de dados pode ser
          resumido numa frase: <strong>maximizar o sinal e minimizar o ruído</strong> antes de o modelo ver os
          dados.
        </p>
        <div style={S.highlight}>
          <strong>Sinal:</strong> Padrões genuínos nos dados que generalizam para novos exemplos — por exemplo,
          "clientes com maior recência de compra têm maior probabilidade de abandono".<br />
          <strong>Ruído:</strong> Variação aleatória, erros de medição, dados irrelevantes que não generalizam —
          por exemplo, um erro de digitação que registou a idade de um cliente como 999 anos.<br /><br />
          Um modelo treinado sobre dados com muito ruído tende a "aprender" esse ruído como se fosse sinal —
          este é, no fundo, o mecanismo subjacente ao <em>overfitting</em>: o modelo ajusta-se a
          particularidades do conjunto de treino que não se repetem em dados novos.
        </div>
        <p style={S.p}>
          Na prática, a distinção entre sinal e ruído raramente é óbvia à primeira vista — exige análise
          exploratória (distribuições, correlações, valores em falta, outliers) e, frequentemente, conhecimento
          de domínio. As próximas secções tratam, em detalhe, das três fontes de ruído mais comuns: valores em
          falta, outliers e variáveis com granularidade excessiva ou inadequada.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Missing Values === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Missing Values</h2>
        <p style={S.p}>
          Valores em falta (<em>missing values</em>) são praticamente inevitáveis em dados reais — sensores que
          falham, campos opcionais em formulários, respostas que os utilizadores se recusam a dar, integrações
          entre sistemas que perdem informação. A estratégia correta de tratamento depende, antes de mais, do
          <strong> mecanismo</strong> pelo qual os valores estão em falta — porque esse mecanismo determina se a
          ausência é informativa ou não.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Mecanismo</th><th style={S.th}>Implicação</th></tr></thead>
          <tbody>
            {[
              ['MCAR', 'Missing Completely At Random — a ausência não está relacionada com nenhuma variável (observada ou não). Ex.: um sensor que falha aleatoriamente por interferência elétrica.', 'Imputação simples (média/mediana/moda) ou remoção são estatisticamente válidas — não introduzem viés sistemático.'],
              ['MAR', 'Missing At Random — a probabilidade de ausência depende de outras variáveis observadas, mas não do próprio valor em falta. Ex.: homens respondem menos a perguntas sobre saúde mental, mas a ausência não depende do valor da resposta em si.', 'Imputação condicional (KNN, regressão, modelos) recomendada — usa as variáveis observadas para estimar o valor mais plausível.'],
              ['MNAR', 'Missing Not At Random — a probabilidade de ausência depende do próprio valor em falta. Ex.: pessoas com rendimentos muito altos ou muito baixos recusam-se mais a indicar o rendimento.', 'O caso mais difícil — qualquer imputação baseada nos valores observados subestima sistematicamente o efeito. A própria ausência pode ser informativa (tratada como uma categoria).'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color, fontFamily: 'monospace' }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Um truque prático para distinguir MCAR de MAR/MNAR: comparar as distribuições de outras variáveis entre
          registos com e sem o valor em falta. Se forem semelhantes, é plausível MCAR; se forem muito diferentes
          (ex.: registos com "Rendimento" em falta tendem a ter "Idade" muito mais alta), é MAR ou MNAR.
        </div>

        <h3 style={S.h3}>Estratégias de Imputação</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Estratégia</th><th style={S.th}>Quando usar</th><th style={S.th}>Risco</th></tr></thead>
          <tbody>
            {[
              ['Eliminar registos', 'Poucos missing e MCAR', 'Perda de dados; viés se não MCAR'],
              ['Eliminar a coluna inteira', 'Variável com percentagem muito elevada de missing (ex. &gt;60%) e baixo valor preditivo', 'Perde-se completamente a informação dessa variável, mesmo que parcialmente útil'],
              ['Imputar com média/mediana', 'Variáveis numéricas, poucos missing, MCAR/MAR', 'Subestima a variância real; distorce correlações com outras variáveis'],
              ['Imputar com moda', 'Variáveis categóricas', 'Pode sobre-representar a categoria mais comum, distorcendo a distribuição'],
              ['Imputação por modelo (KNN, Regressão, Random Forest)', 'MCAR ou MAR; muitos missing; relações fortes com outras variáveis', 'Computacionalmente mais pesado; pode "inventar" relações que não existem se o modelo for mal ajustado'],
              ['Criar categoria "Desconhecido" / flag binária de missing', 'MNAR; a própria ausência é informativa', 'Aumenta a dimensionalidade; útil sobretudo em modelos baseados em árvores'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: '#f97316', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplo: Comparar Estratégias num Mini-Dataset</h3>
        <p style={S.p}>
          Considere o seguinte conjunto de 5 clientes, com a Idade do cliente B e o Salário do cliente C em
          falta. A tabela abaixo mostra como diferentes estratégias de imputação preencheriam esses dois
          valores:
        </p>
        <ImputationDiagram />
        <div style={S.note}>
          <strong>Regra geral:</strong> a imputação por média/mediana é a opção "default" segura para um
          primeiro modelo (baseline), mas raramente é a melhor opção final — sempre que o tempo permitir, vale
          a pena testar imputação por KNN ou por modelo, e comparar o impacto na performance final.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Outliers === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Outliers — Deteção e Tratamento</h2>
        <div style={S.highlight}>
          <strong>Outlier:</strong> Observação que se afasta significativamente do padrão geral dos dados —
          pode estar numa única variável (outlier univariado) ou apenas visível quando se consideram várias
          variáveis em conjunto (outlier multivariado).<br />
          <strong>Leverage:</strong> Observações com valores extremos nas features que têm uma influência
          desproporcionada no ajuste do modelo (especialmente relevante em modelos lineares).<br /><br />
          <strong>Atenção:</strong> Nem todos os outliers são erros! Podem representar eventos raros mas reais
          (fraude, falha rara de equipamento, cliente VIP com gasto muito acima da média). Antes de remover ou
          tratar um outlier, é essencial investigar a sua causa — um erro de digitação (idade = 999) deve ser
          corrigido ou removido, mas uma transação genuinamente atípica pode ser exatamente o que o modelo
          precisa de aprender a detetar.
        </div>

        <h3 style={S.h3}>Métodos de Deteção</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Método de Deteção</th><th style={S.th}>Abordagem</th></tr></thead>
          <tbody>
            {[
              ['Thresholding (z-score)', '|z| = |x-μ|/σ > 3 → outlier. Assume que a variável segue (aproximadamente) uma distribuição normal.'],
              ['IQR (Boxplot)', 'x < Q1 - 1.5·IQR ou x > Q3 + 1.5·IQR → outlier. Robusto — usa quartis, que não são distorcidos pelos próprios outliers.'],
              ['Histogramas / boxplots', 'Inspeção visual das caudas da distribuição — útil como primeiro passo exploratório.'],
              ['Multidimensional (Mahalanobis)', 'Distância ao centroide considerando as correlações entre features — deteta outliers que parecem normais em cada variável individualmente, mas são atípicos na sua combinação.'],
              ['Isolation Forest / LOF', 'Algoritmos de ML não supervisionado — isolam anomalias com base em quão "fácil" é separá-las do resto dos dados, ou na densidade local de vizinhos.'],
            ].map(([a, b]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td></tr>)}
          </tbody>
        </table>

        <OutlierBoundsDiagram />

        <h3 style={S.h3}>Exemplo Numérico: Calcular os Limites IQR</h3>
        <p style={S.p}>
          Considere 9 valores de "tempo de permanência no site" (em minutos), já ordenados:
        </p>
        <div style={S.math}>
          <BlockMath math={"2,\\ 3,\\ 4,\\ 4,\\ 5,\\ 6,\\ 6,\\ 7,\\ 32"} />
        </div>
        <p style={S.p}>
          O valor 32 destaca-se claramente dos restantes. Para confirmar formalmente se é um outlier pelo
          critério IQR:
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Passo a passo:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li><InlineMath math={"Q1"} /> (25º percentil, mediana da primeira metade): <InlineMath math={"Q1 = 4"} /></li>
            <li><InlineMath math={"Q3"} /> (75º percentil, mediana da segunda metade): <InlineMath math={"Q3 = 6"} /></li>
            <li><InlineMath math={"IQR = Q3 - Q1 = 6 - 4 = 2"} /></li>
            <li>Limite inferior: <InlineMath math={"Q1 - 1.5 \\times IQR = 4 - 3 = 1"} /></li>
            <li>Limite superior: <InlineMath math={"Q3 + 1.5 \\times IQR = 6 + 3 = 9"} /></li>
          </ul>
        
        <p style={S.p}>
          Como <InlineMath math={"32 > 9"} />, o valor 32 é classificado como outlier pelo critério IQR. Se
          calculássemos o z-score usando a média (≈ 7.7) e o desvio-padrão (≈ 9.1) deste pequeno conjunto, o
          próprio outlier "infla" o desvio-padrão (<InlineMath math={"z = (32-7.7)/9.1 \\approx 2.67"} />), o que
          poderia ficar abaixo do limiar de 3 e <strong>não</strong> ser detetado — ilustrando exatamente a
          fragilidade do z-score em amostras pequenas ou muito assimétricas.
        </p>

        <h3 style={S.h3}>Tratamento</h3>
        <div style={S.note}><strong>Capping (Winsorizing):</strong> Em vez de remover outliers, substituí-los
          pelo valor do percentil 1% ou 99% (ou pelos limites IQR). Mantém todos os registos (preservando o
          tamanho da amostra e a informação das outras variáveis) mas limita o impacto dos valores extremos no
          treino do modelo. Geralmente preferível à remoção, exceto quando o outlier é claramente um erro de
          recolha de dados — nesse caso, corrigir ou remover é mais apropriado.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Discretização === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Discretização</h2>
        <p style={S.p}>
          A discretização transforma uma variável contínua em intervalos discretos (<em>bins</em>). É útil para
          algoritmos que requerem variáveis categóricas, para tornar o modelo mais robusto a outliers e ruído
          (um valor extremo cai apenas no bin extremo, sem distorcer o peso atribuído à variável), e para
          tornar relações não-lineares mais fáceis de capturar por modelos lineares.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Método</th><th style={S.th}>Vantagem</th></tr></thead>
          <tbody>
            {[
              ['Não Supervisionada', 'Equal-Width: bins de largura igual (intervalos com a mesma amplitude)', 'Simples e rápido; não usa a variável target'],
              ['Não Supervisionada', 'Equal-Frequency (Equal-Depth): bins com igual número de observações', 'Distribuição uniforme entre bins; lida melhor com distribuições assimétricas'],
              ['Supervisionada', 'Baseada em Entropia (Information Gain) — escolhe os cortes que melhor separam as classes', 'Maximiza a discriminação entre classes; bins refletem a relação com o target'],
              ['Supervisionada', 'Chi-merge: agrupa iterativamente bins adjacentes com distribuições de classe estatisticamente similares', 'Estatisticamente fundamentada; reduz nº de bins sem perder poder discriminativo'],
            ].map(([a, b, c]) => <tr key={b}><td style={{ ...S.td, color: a === 'Supervisionada' ? '#f97316' : color, fontWeight: 600 }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplo Numérico: Discretizar a Idade em 3 Bins</h3>
        <p style={S.p}>
          Suponha 10 clientes com as seguintes idades, ordenadas, e um indicador binário de "comprou produto
          premium" (Sim/Não):
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Idade</th>{['18','22','25','30','35','40','45','55','60','65'].map(a => <th key={a} style={{ ...S.th, textAlign: 'center' }}>{a}</th>)}</tr></thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Comprou Premium?</td>
                {['Não','Não','Não','Não','Sim','Não','Sim','Sim','Sim','Sim'].map((v, i) => (
                  <td key={i} style={{ ...S.td, textAlign: 'center', color: v === 'Sim' ? '#f97316' : 'var(--text-secondary)', fontWeight: v === 'Sim' ? 700 : 400 }}>{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Método</th><th style={S.th}>Bins resultantes (3 bins)</th><th style={S.th}>Comentário</th></tr></thead>
          <tbody>
            {[
              ['Equal-Width', '[18–34], [34–50], [50–65] — largura ≈ 15.7 cada', 'Bins de tamanho igual em idade, mas o nº de clientes por bin varia (4, 3, 3)'],
              ['Equal-Frequency', '[18–28], [30–43], [45–65] — cada bin com ≈ 3–4 clientes', 'Cada bin tem aproximadamente o mesmo nº de observações, mas larguras desiguais'],
              ['Entropia (supervisionada)', '[18–32], [32–47], [47–65]', 'Os cortes são escolhidos para maximizar a separação entre "Sim" e "Não" — o 1º bin é quase todo "Não", o 3º quase todo "Sim"'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Note como a discretização por entropia produz bins alinhados com a variável target — o primeiro bin
          (idades 18–32) contém sobretudo clientes que não compraram o produto premium, enquanto o último (47–65)
          contém sobretudo clientes que compraram. Isto torna a variável discretizada altamente informativa para
          um classificador, mas tem o risco de <em>overfitting</em> ao conjunto de treino específico — os cortes
          devem ser determinados apenas nos dados de treino.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Redução do Espaço de Features === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Redução do Espaço de Features</h2>
        <p style={S.p}>
          Depois de limpar os dados, o passo seguinte é decidir <strong>que features manter</strong>. Reduzir o
          espaço de features traz vários benefícios: modelos mais simples e interpretáveis, treino mais rápido,
          menor risco de overfitting (menos parâmetros para ajustar face ao número de exemplos) e, em alguns
          casos, melhor performance — porque features irrelevantes ou redundantes introduzem ruído que o modelo
          tem de "filtrar".
        </p>
        <div style={S.highlight}>
          Dois princípios fundamentais para identificar features candidatas à remoção:<br /><br />
          <strong>Irrelevância:</strong> Uma feature é irrelevante se não está (linear ou não-linearmente)
          relacionada com a variável target — não contém informação útil para a previsão. Exemplo: o
          "número de telefone" de um cliente não tem qualquer relação com a probabilidade de abandono.<br /><br />
          <strong>Redundância:</strong> Uma feature é redundante se a informação que contém já está capturada
          por outra(s) feature(s) — adiciona pouco ou nenhum valor extra, mas aumenta a dimensionalidade e pode
          causar multicolinearidade em modelos lineares. Exemplo: "Área em m²" e "Área em pés²" são a mesma
          informação numa escala diferente.
        </div>
        <p style={S.p}>
          É importante notar que irrelevância e redundância não são a mesma coisa — uma feature pode ser
          altamente correlacionada com o target (relevante) mas também altamente correlacionada com outra
          feature já presente (redundante); ou pode não ter correlação individual com o target mas ainda assim
          ser útil em combinação com outras (não é, de facto, irrelevante — apenas a sua relação com o target
          não é visível isoladamente).
        </p>
        <CorrelationMatrixDiagram />
        <div style={S.note}>
          <strong>Cuidado com a multicolinearidade:</strong> em modelos lineares, manter duas features
          fortemente correlacionadas (ex.: correlação &gt; 0.85–0.9) pode tornar os coeficientes instáveis e
          difíceis de interpretar — pequenas variações nos dados de treino podem fazer os coeficientes mudarem
          drasticamente de sinal. Em modelos baseados em árvores este problema é menos grave, mas a importância
          de features acaba "diluída" entre as features redundantes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Feature Selection === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Feature Selection</h2>
        <p style={S.p}>
          Feature Selection é o processo (idealmente automatizado e sistemático) de escolher um subconjunto de
          features a partir do conjunto original. Existem três grandes famílias de métodos, que diferem em
          quando e como o modelo entra no processo de seleção:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Método</th><th style={S.th}>Abordagem</th><th style={S.th}>Vantagem / Limitação</th></tr></thead>
          <tbody>
            {[
              ['Filter (Correlação, Qui-quadrado, Informação Mútua)', 'Avalia cada feature individualmente pelo seu score (estatístico) com o target, independentemente de qualquer modelo', 'Muito rápido e escalável; ignora interações entre features e é específico a cada métrica (ex.: correlação só capta relações lineares)'],
              ['Wrapper (RFE, Forward/Backward Selection)', 'Usa um modelo concreto para avaliar a performance de diferentes subconjuntos de features, de forma iterativa', 'Considera interações entre features e otimiza diretamente para a métrica final; computacionalmente muito pesado (combinatório)'],
              ['Embedded (LASSO/Ridge, importância de Random Forest, árvores de decisão)', 'A seleção de features é parte integral do processo de treino do modelo — não é um passo separado', 'Eficiente (um único treino); mas a seleção é específica ao modelo usado e pode não generalizar para outro algoritmo'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>)}
          </tbody>
        </table>
        <SelectionPipelinesDiagram />

        <h3 style={S.h3}>Exemplo: Filtro de Correlação em 5 Features</h3>
        <p style={S.p}>
          Suponha que, num problema de previsão de "Preço de Venda" de uma casa, calculamos a correlação de
          Pearson de 5 features candidatas com o target:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Feature</th><th style={S.th}>Correlação com Target</th><th style={S.th}>Decisão (threshold |r| ≥ 0.2)</th></tr></thead>
          <tbody>
            {[
              ['Área (m²)', '0.78', 'Manter — forte relação com o preço'],
              ['Nº Quartos', '0.71', 'Avaliar redundância com "Área" (correlação entre si = 0.86, ver secção 5) — manter apenas uma, ou combinar'],
              ['Distância ao Centro', '0.34', 'Manter — relação moderada e razoavelmente independente das outras'],
              ['Cor da Porta', '0.02', 'Remover — irrelevante para o preço'],
              ['Ano de Construção', '0.41', 'Manter — relação moderada com o preço'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Este exemplo ilustra também a limitação dos métodos <em>filter</em>: "Cor da Porta" tem correlação
          quase nula com o preço de venda — mas, em combinação com "Bairro", poderia revelar um padrão (ex.:
          casas com portas de cor X em bairros premium tendem a ser renovações recentes). Um método
          <em> filter</em> baseado em correlação individual não deteta este tipo de sinergia — só métodos
          <em> wrapper</em> ou certos métodos <em>embedded</em> (ex.: interações em árvores) o conseguem captar.
          Melhores features individuais nem sempre formam o melhor conjunto.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Feature Engineering === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Feature Engineering — Criação de Novas Features</h2>
        <p style={S.p}>
          Feature Engineering é o processo de criar novas variáveis a partir das existentes, de forma a
          capturar melhor os padrões relevantes para o problema. É frequentemente a etapa com maior impacto na
          performance final — um bom modelo com features fracas tende a ter pior desempenho do que um modelo
          simples com features bem desenhadas.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Tipo</th><th style={S.th}>Exemplo</th></tr></thead>
          <tbody>
            {[
              ['Rácios', 'Receita/Custo → Margem; Dívida/Capital Próprio → Alavancagem; Cliques/Impressões → Taxa de Clique (CTR)'],
              ['Agregações', 'Média de compras nos últimos 3 meses; Total gasto por categoria de produto; Desvio-padrão do valor das transações (volatilidade de gastos)'],
              ['Interações', 'Idade × Rendimento (poder de compra ajustado); Recência × Frequência (RFM); Área × Localização (preço por m² ajustado ao bairro)'],
              ['Transformações', 'log(rendimento) — reduz assimetria; sqrt(distância) — suaviza efeitos de escala; x² — captura relações quadráticas (ex.: idade ótima para um produto)'],
              ['Temporal', 'Dias desde o último contacto; dia da semana / fim de semana; hora do dia; sazonalidade (mês, trimestre); tendência (diferença face ao período anterior)'],
            ].map(([a, b]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td></tr>)}
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplo: Features RFM para Marketing</h3>
        <p style={S.p}>
          Um exemplo clássico de feature engineering em marketing/CRM é a construção de features
          <strong> RFM (Recência, Frequência, Valor Monetário)</strong> a partir do histórico de transações de
          um cliente — três agregações simples que, combinadas, são extremamente preditivas para problemas
          como churn, segmentação e propensão à compra:
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Feature derivada</th><th style={S.th}>Cálculo a partir do histórico de transações</th><th style={S.th}>O que captura</th></tr></thead>
          <tbody>
            {[
              ['Recência (R)', 'Dias desde a última transação até à data de referência', 'Clientes "frios" (R alto) têm maior risco de churn'],
              ['Frequência (F)', 'Número de transações num período (ex.: últimos 12 meses)', 'Engagement / fidelidade do cliente'],
              ['Valor Monetário (M)', 'Soma (ou média) do valor gasto no mesmo período', 'Valor do cliente (Customer Lifetime Value aproximado)'],
              ['Interação F × M', 'Frequência × Valor Médio por transação', 'Valor total gerado — diferencia "compra muito mas barato" de "compra pouco mas caro"'],
              ['Tendência de M', 'Diferença entre M no último trimestre vs. trimestre anterior', 'Cliente está a aumentar ou a reduzir o gasto (sinal precoce de churn)'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={{ ...S.td, fontSize: '0.85rem' }}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Nenhuma destas features RFM existe explicitamente nos dados brutos (que são, tipicamente, uma tabela
          de transações com cliente, data e valor) — são todas <strong>derivadas</strong> através de
          agregações por cliente. Isto ilustra bem a diferença entre "dados" e "features": os dados brutos
          contêm a informação, mas raramente na forma mais útil para o modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Normalização e Padronização === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Normalização e Padronização</h2>
        <p style={S.p}>
          Muitos algoritmos são sensíveis à <strong>escala</strong> das features — se uma variável varia entre 0
          e 1 e outra entre 0 e 1.000.000, algoritmos baseados em distância (KNN, SVM, K-Means) ou em gradiente
          (regressão logística, redes neuronais) vão, implicitamente, dar muito mais peso à variável de maior
          escala, mesmo que ambas sejam igualmente importantes para o problema.
        </p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Método</th><th style={S.th}>Fórmula</th><th style={S.th}>Quando usar</th></tr></thead>
          <tbody>
            {[
              ['Padronização (Z-score)', 'z = (x - μ) / σ', 'Algoritmos baseados em distância (KNN, SVM, PCA) e gradiente; resulta em média 0 e desvio-padrão 1'],
              ['Min-Max Scaling', 'x\' = (x - min) / (max - min)', 'Redes neuronais; quando se quer garantir uma escala fixa [0,1]'],
              ['Robust Scaling', 'x\' = (x - Q2) / IQR', 'Dados com outliers — usa mediana e IQR (estatísticas robustas) em vez de média e desvio-padrão'],
              ['Log Transform', 'x\' = log(x)', 'Distribuições muito assimétricas à direita (rendimentos, preços, contagens)'],
            ].map(([a, b, c]) => <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{b}</td><td style={S.td}>{c}</td></tr>)}
          </tbody>
        </table>

        <h3 style={S.h3}>Exemplo Numérico: Padronizar e Normalizar um Array</h3>
        <p style={S.p}>
          Considere os valores de "rendimento mensal" (em centenas de euros) de 5 clientes:
        </p>
        <div style={S.math}>
          <BlockMath math={"x = [10,\\ 12,\\ 14,\\ 16,\\ 18]"} />
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Padronização (Z-score):</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Média: <InlineMath math={"\\mu = (10+12+14+16+18)/5 = 14"} /></li>
            <li>Desvio-padrão (populacional): <InlineMath math={"\\sigma = \\sqrt{(16+4+0+4+16)/5} = \\sqrt{8} \\approx 2.83"} /></li>
            <li>Valores padronizados: <InlineMath math={"z = (x-14)/2.83 \\approx [-1.41,\\ -0.71,\\ 0,\\ 0.71,\\ 1.41]"} /></li>
          </ul>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Min-Max Scaling:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Mínimo = 10, Máximo = 18, amplitude = 8</li>
            <li>Valores escalados: <InlineMath math={"x' = (x-10)/8 = [0,\\ 0.25,\\ 0.5,\\ 0.75,\\ 1.0]"} /></li>
          </ul>
        
        <p style={S.p}>
          Note como ambas as transformações preservam a <strong>ordem relativa</strong> e as proporções entre os
          valores, mas em escalas diferentes: a padronização centra os dados em 0 com unidades de
          desvio-padrão (útil quando queremos comparar a "distância relativa à média" entre variáveis com
          escalas muito diferentes), enquanto o min-max comprime tudo para o intervalo [0,1] — útil quando um
          algoritmo (ex.: redes neuronais com funções de ativação como sigmoid) espera inputs num intervalo
          limitado.
        </p>
        <div style={S.note}>
          Árvores de decisão e Random Forests <strong>não</strong> precisam de normalização — são invariantes a
          transformações monotónicas das features (uma árvore que decide "x &gt; 5" decide igualmente "x' &gt; 0.5"
          após min-max scaling, porque a ordem relativa não muda). KNN, SVM, regressão logística/linear e redes
          neuronais <strong>são</strong> sensíveis à escala e quase sempre beneficiam de normalização ou
          padronização.
        </div>
        <div style={S.note}>
          <strong>Cuidado com data leakage:</strong> os parâmetros de normalização (μ, σ, min, max, mediana,
          IQR) devem ser calculados <strong>apenas</strong> sobre o conjunto de treino, e depois aplicados
          (com os mesmos parâmetros) ao conjunto de teste — calcular estes parâmetros sobre o dataset completo
          antes do split "vaza" informação do teste para o treino.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: PCA breve introdução === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. PCA — Breve Introdução</h2>
        <p style={S.p}>
          O PCA (<em>Principal Component Analysis</em>) é uma técnica de redução de dimensionalidade que
          projeta os dados originais numa nova base de vetores ortogonais (as <em>componentes principais</em>),
          ordenados por quanto da variância total dos dados conseguem explicar. Aqui apresentamos apenas o
          esqueleto do algoritmo — a intuição e o "para que serve" — sem entrar em detalhe matemático.
        </p>
        <div style={S.diagram}>
          <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Algoritmo PCA (resumo)</p>
          {[
            ['1', 'Padronizar os dados', 'Média=0 e Desvio Padrão=1 para cada feature'],
            ['2', 'Calcular a matriz de covariância', 'Σ = (1/n) XᵀX'],
            ['3', 'Eigendecomposição', 'Σ = VΛVᵀ → eigenvectors V, eigenvalues λ'],
            ['4', 'Ordenar por eigenvalue descendente', 'Componentes com maior variância primeiro'],
            ['5', 'Selecionar k componentes', 'Critério: variância explicada acumulada ≥ 95%'],
            ['6', 'Projetar dados', 'Z = XV_k (n × k)'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ background: color, color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{n}</div>
              <div><span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem' }}>{t}: </span><span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace', fontSize: '0.82rem' }}>{d}</span></div>
            </div>
          ))}
        </div>
        <div style={S.highlight}>
          <strong>Atenção:</strong> PCA preserva variância, não separabilidade de classes. Uma componente com
          alta variância pode ser irrelevante para classificação. Para classificação, considerar LDA (Linear
          Discriminant Analysis), que maximiza a separação entre classes em vez da variância total.
        </div>
        <div style={S.note}>
          A matemática completa do PCA (eigendecomposição, variância explicada, scree plots) — assim como
          outras técnicas de redução de dimensionalidade como t-SNE e UMAP — é tratada em profundidade no
          Módulo sobre Redução de Dimensionalidade. Aqui basta reter a ideia central: PCA cria novas features
          (combinações lineares das originais) que concentram o máximo de variância possível em poucas
          dimensões, depois de padronizar os dados.
        </div>
      </div>

      <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>10. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Sinal vs. Ruído</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Missing Values</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Outliers — Deteção e Tratamento</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Discretização</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Redução do Espaço de Features</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Feature Selection</strong> — conceito central desta lecture.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Feature Engineering — Criação de Novas Features</strong> — conceito central desta lecture.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
