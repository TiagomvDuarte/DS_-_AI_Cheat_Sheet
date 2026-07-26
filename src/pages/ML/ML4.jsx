import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';

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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(74,158,237,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram 1: OLS — decomposição da variância (SST = SSR + SSE) ===
const OLSDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>OLS — Decomposição da Variância (SST = SSR + SSE)</p>
    <svg viewBox="0 0 540 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-ols" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={color} />
        </marker>
      </defs>
      <line x1="50" y1="20" x2="50" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="50" y1="170" x2="510" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="518" y="174" fill="var(--text-secondary)" fontSize="11">x</text>
      <text x="40" y="16" fill="var(--text-secondary)" fontSize="11">y</text>

      <line x1="50" y1="100" x2="510" y2="100" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="516" y="104" fill="#4a9eed" fontSize="10">ȳ</text>

      <line x1="70" y1="150" x2="490" y2="40" stroke={color} strokeWidth="2.5" />
      <text x="495" y="38" fill={color} fontSize="10" fontWeight="700">ŷ</text>

      {[[100, 135], [180, 118], [260, 100], [340, 75], [420, 55]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5} fill="#4a9eed" />
      ))}

      {/* highlighted point at x=260 */}
      <line x1="260" y1="100" x2="260" y2="113" stroke="#4a9eed" strokeWidth="2.5" markerEnd="url(#arr-ols)" />
      <text x="266" y="116" fill="#4a9eed" fontSize="10">SSE: yᵢ − ŷᵢ</text>
      <line x1="260" y1="100" x2="260" y2="87" stroke={color} strokeWidth="2.5" markerEnd="url(#arr-ols)" />
      <text x="266" y="80" fill={color} fontSize="10">SSR: ŷᵢ − ȳ</text>
      <line x1="260" y1="113" x2="260" y2="113" stroke="#4a9eed" strokeWidth="2.5" />
      <text x="266" y="180" fill="var(--text-secondary)" fontSize="10">SST: yᵢ − ȳ (variância total do ponto)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Para cada ponto, a distância vertical até à média <InlineMath math="\bar{y}" /> (SST) decompõe-se em duas
      partes: a distância da recta de regressão à média (<strong>SSR</strong>, o que o modelo "explica") e a
      distância do ponto à recta (<strong>SSE</strong>, o erro residual que o modelo não explica).
    </p>
  </div>
);

// === Diagram 2: superfície de perda e gradiente descendente ===

// === Diagram 3: underfit vs good fit vs overfit (polynomial regression) ===
const PolyFitDiagram = () => {
  const pts = [[40, 130], [80, 90], [120, 70], [160, 75], [200, 60], [240, 95], [280, 80], [320, 120]];
  const linear = 'M 30 135 L 330 70';
  const good = 'M 30 140 C 80 70, 140 60, 180 75 C 230 90, 280 75, 330 115';
  const overfit = 'M 30 138 C 55 75, 95 100, 120 65 C 150 130, 175 50, 205 70 C 240 105, 270 60, 295 110 C 310 130, 320 100, 330 118';
  const charts = [
    { title: 'Underfit (grau 1)', path: linear, c: '#4a9eed', note: 'Recta não captura a curvatura — alto bias' },
    { title: 'Bom ajuste (grau 3)', path: good, c: '#4a9eed', note: 'Captura o padrão sem seguir o ruído' },
    { title: 'Overfit (grau 9)', path: overfit, c: '#4a9eed', note: 'Segue o ruído ponto a ponto — alta variância' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Regressão Polinomial: Underfit vs. Bom Ajuste vs. Overfit</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {charts.map(({ title, path, c, note }) => (
          <div key={title} style={{ maxWidth: 160 }}>
            <svg viewBox="0 0 360 160" width="160" height="120">
              <line x1="25" y1="145" x2="345" y2="145" stroke="var(--text-secondary)" strokeWidth="1" />
              <line x1="25" y1="145" x2="25" y2="15" stroke="var(--text-secondary)" strokeWidth="1" />
              {pts.map(([x, y], i) => (
                <circle key={i} cx={x * 1} cy={y} r="4" fill="#4a9eed" />
              ))}
              <path d={path} fill="none" stroke={c} strokeWidth="2.5" />
            </svg>
            <p style={{ fontSize: '0.82rem', fontWeight: 700, color: c, margin: '0.25rem 0' }}>{title}</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>{note}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Os três modelos foram ajustados ao <strong>mesmo conjunto de pontos</strong>. O modelo de grau 1
        (linear) é demasiado simples — não consegue captar a curvatura dos dados (<em>underfitting</em>).
        O modelo de grau 9 ajusta-se perfeitamente aos pontos de treino, incluindo o ruído aleatório —
        irá generalizar mal a novos dados (<em>overfitting</em>). O modelo de grau 3 captura o padrão
        subjacente sem memorizar o ruído.
      </p>
    </div>
  );
};

// === Diagram 4: efeito de Ridge e Lasso nos coeficientes ===

// === Diagram 5: sigmoide e fronteira de decisão linear vs logística ===
const SigmoidDiagram = () => {
  const w = 220, h = 140, pad = 20;
  const xToPx = (x) => pad + ((x + 6) / 12) * (w - 2 * pad);
  const yToPx = (y) => h - pad - y * (h - 2 * pad);
  const sigmoid = (x) => 1 / (1 + Math.exp(-x));
  let d = '';
  for (let i = 0; i <= 60; i++) {
    const x = -6 + (12 * i) / 60;
    const px = xToPx(x);
    const py = yToPx(sigmoid(x));
    d += (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + py.toFixed(1) + ' ';
  }
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Função Sigmoide e Fronteira de Decisão</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div>
          <svg viewBox={`0 0 ${w} ${h}`} width="220" height="140">
            <line x1={pad} y1={yToPx(0)} x2={w - pad} y2={yToPx(0)} stroke="var(--text-secondary)" strokeWidth="1" />
            <line x1={pad} y1={yToPx(1)} x2={w - pad} y2={yToPx(1)} stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="3,2" />
            <line x1={xToPx(0)} y1={pad} x2={xToPx(0)} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
            <line x1={pad} y1={yToPx(0.5)} x2={w - pad} y2={yToPx(0.5)} stroke="#4a9eed" strokeWidth="1" strokeDasharray="3,2" />
            <text x={w - pad} y={yToPx(0.5) - 4} textAnchor="end" fill="#4a9eed" fontSize="9">limiar 0.5</text>
            <path d={d} fill="none" stroke={color} strokeWidth="2.5" />
            <text x={xToPx(0)} y={h - 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">z=0</text>
            <text x={pad} y={yToPx(0) + 12} fill="var(--text-secondary)" fontSize="9">0</text>
            <text x={pad} y={yToPx(1) - 4} fill="var(--text-secondary)" fontSize="9">1</text>
          </svg>
          <p style={{ fontSize: '0.82rem', fontWeight: 700, color, margin: 0 }}>σ(z) = 1/(1+e⁻ᶻ)</p>
        </div>
        <div>
          <svg viewBox="0 0 180 160" width="160" height="160">
            <line x1="20" y1="140" x2="160" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
            <line x1="20" y1="140" x2="20" y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
            <text x="165" y="144" fontSize="10" fill="var(--text-secondary)">x₁</text>
            <text x="10" y="10" fontSize="10" fill="var(--text-secondary)">x₂</text>
            {/* decision boundary line */}
            <line x1="30" y1="30" x2="150" y2="130" stroke="#4a9eed" strokeWidth="2" strokeDasharray="5,3" />
            <text x="90" y="50" fill="#4a9eed" fontSize="9" textAnchor="middle">fronteira: z=0</text>
            {/* class 0 points */}
            {[[45, 50], [60, 75], [40, 95], [70, 60]].map(([x, y], i) => (
              <circle key={'a' + i} cx={x} cy={y} r="6" fill="#4a9eed" />
            ))}
            {/* class 1 points */}
            {[[110, 85], [130, 110], [95, 120], [120, 65]].map(([x, y], i) => (
              <circle key={'b' + i} cx={x} cy={y} r="6" fill="#0284c7" />
            ))}
            <text x="50" y="25" fill="#4a9eed" fontSize="9" fontWeight="700">classe 0</text>
            <text x="105" y="145" fill="#0284c7" fontSize="9" fontWeight="700">classe 1</text>
          </svg>
          <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4a9eed', margin: 0 }}>fronteira de decisão linear</p>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        A sigmoide comprime o valor de <InlineMath math="z = \beta_0 + \beta_1 x_1 + \dots" /> (que pode ser
        qualquer número real) para o intervalo (0, 1), interpretável como probabilidade. A
        <strong> fronteira de decisão</strong> corresponde a <InlineMath math="z=0" /> (onde
        <InlineMath math="\sigma(z)=0.5" />): no espaço original das features, esta fronteira é uma
        <strong> recta</strong> (ou hiperplano) — a regressão logística é um classificador <strong>linear</strong>,
        mesmo que a função sigmoide em si seja não-linear.
      </p>
    </div>
  );
};

export default function ML4() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Módulo 05</div>
      <h1 style={S.h1}>Regressão Linear & Logística</h1>

      {/* === SECTION 1: Regressão Linear Simples e OLS === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Regressão Linear Simples — O Método dos Mínimos Quadrados (OLS)</h2>
        <p style={S.p}>
          A regressão linear simples assume que existe uma relação aproximadamente linear entre uma variável
          de entrada <InlineMath math="x" /> e uma variável de saída contínua <InlineMath math="y" />:
        </p>
        <div style={S.math}>
          <BlockMath math="y = \beta_0 + \beta_1 x + \varepsilon" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\beta_0" /> é a <strong>ordenada na origem</strong> (intercept),
          <InlineMath math="\beta_1" /> é o <strong>declive</strong> (slope) — o efeito de uma unidade de
          <InlineMath math="x" /> em <InlineMath math="y" /> — e <InlineMath math="\varepsilon" /> é um termo de
          erro aleatório que captura tudo o que o modelo não explica.
        </p>
        <p style={S.p}>
          O objectivo do <strong>Ordinary Least Squares (OLS)</strong> é encontrar os valores
          <InlineMath math="\hat{\beta}_0" /> e <InlineMath math="\hat{\beta}_1" /> que minimizam a soma dos
          quadrados dos resíduos (SSE):
        </p>
        <div style={S.math}>
          <BlockMath math="SSE(\beta_0, \beta_1) = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = \sum_{i=1}^{n} (y_i - \beta_0 - \beta_1 x_i)^2" />
        </div>
        <p style={S.p}>
          Para encontrar o mínimo, derivamos <InlineMath math="SSE" /> em relação a
          <InlineMath math="\beta_0" /> e <InlineMath math="\beta_1" /> e igualamos a zero. Resolvendo este
          sistema de duas equações (as chamadas <em>equações normais</em>), obtemos as fórmulas em
          <strong> forma fechada</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{\beta}_1 = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}" />
          <BlockMath math="\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}" />
        </div>
        <div style={S.note}>
          Repare na semelhança com a fórmula da <strong>covariância</strong> e <strong>variância</strong>: na
          prática, <InlineMath math="\hat{\beta}_1 = \mathrm{Cov}(x,y) / \mathrm{Var}(x)" />. O declive é
          simplesmente a covariância entre <InlineMath math="x" /> e <InlineMath math="y" />, normalizada pela
          variância de <InlineMath math="x" />.
        </div>

        <OLSDiagram />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: SST = SSR + SSE, R² e R² Ajustado === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Decomposição da Variância: SST = SSR + SSE, R² e R² Ajustado</h2>
        <p style={S.p}>
          A <strong>variância total</strong> dos valores observados de <InlineMath math="y" /> em torno da sua
          média pode ser decomposta em duas partes: a variância <strong>explicada</strong> pelo modelo e a
          variância <strong>não explicada</strong> (erro):
        </p>
        <div style={S.math}>
          <BlockMath math="\underbrace{\sum (y_i - \bar{y})^2}_{SST} = \underbrace{\sum (\hat{y}_i - \bar{y})^2}_{SSR} + \underbrace{\sum (y_i - \hat{y}_i)^2}_{SSE}" />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Sigla</th><th style={S.th}>Nome</th><th style={S.th}>Interpretação</th></tr></thead>
            <tbody>
              {[
                ['SST', 'Total Sum of Squares', 'Variância total dos dados em torno da média'],
                ['SSR', 'Sum of Squares Regression', 'Variância "capturada" pelo modelo'],
                ['SSE', 'Sum of Squares Error', 'Variância residual — o que o modelo não explica'],
              ].map(([a, b, c]) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={S.p}>
          O problema do <InlineMath math="R^2" /> é que <strong>nunca diminui</strong> quando adicionamos mais
          variáveis ao modelo, mesmo que essas variáveis sejam irrelevantes (puro ruído). O
          <strong> R² Ajustado</strong> introduz uma penalização pelo número de preditores <InlineMath math="p" />:
        </p>
        <div style={S.math}>
          <BlockMath math="R^2_{adj} = 1 - (1-R^2)\cdot\frac{N-1}{N-p-1}" />
        </div>
        <div style={S.note}>
          Use <InlineMath math="R^2" /> para descrever o ajuste de <strong>um</strong> modelo, mas use
          <InlineMath math="R^2_{adj}" /> sempre que estiver a <strong>comparar modelos</strong> com números
          diferentes de variáveis — caso contrário, será sempre tentado a escolher o modelo com mais variáveis,
          mesmo que estas não acrescentem informação real.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Erro padrão, t-statistic, p-value, intervalos de confiança === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Significância dos Coeficientes: Erro Padrão, t-Statistic, p-Value e Intervalos de Confiança</h2>
        <p style={S.p}>
          Os coeficientes <InlineMath math="\hat{\beta}_0" /> e <InlineMath math="\hat{\beta}_1" /> são
          <strong> estimativas</strong> calculadas a partir de uma amostra — se recolhêssemos outra amostra,
          obteríamos valores ligeiramente diferentes. O <strong>erro padrão</strong> (SE) quantifica essa
          incerteza: quanto variariam as estimativas se repetíssemos o processo de amostragem muitas vezes.
        </p>
        <div style={S.math}>
          <BlockMath math="SE(\hat{\beta}_1) = \sqrt{\dfrac{SSE / (n-2)}{\sum_{i=1}^n (x_i - \bar{x})^2}}" />
        </div>
        <p style={S.p}>
          Para testar a hipótese nula <InlineMath math="H_0: \beta_1 = 0" /> (ou seja, "x não tem efeito sobre
          y"), calculamos a estatística <InlineMath math="t" />:
        </p>
        <div style={S.math}>
          <BlockMath math="t = \frac{\hat{\beta}_1 - 0}{SE(\hat{\beta}_1)}" />
        </div>
        <p style={S.p}>
          O <InlineMath math="t" /> mede quantos erros-padrão a estimativa está afastada de zero. Quanto maior
          o <InlineMath math="|t|" />, menos plausível é que o verdadeiro <InlineMath math="\beta_1" /> seja
          zero. O <strong>p-value</strong> converte este valor numa probabilidade: a probabilidade de observar
          um <InlineMath math="t" /> tão extremo (ou mais) assumindo que <InlineMath math="H_0" /> é verdadeira.
        </p>
        <p style={S.p}>
          O <strong>intervalo de confiança a 95%</strong> para <InlineMath math="\beta_1" /> é:
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{\beta}_1 \pm t_{0.025,\,n-2} \cdot SE(\hat{\beta}_1)" />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Quantidade</th><th style={S.th}>Interpretação prática</th><th style={S.th}>Regra de decisão (α=0.05)</th></tr></thead>
            <tbody>
              {[
                ['SE(β̂₁)', 'Incerteza da estimativa do declive', 'SE pequeno → estimativa precisa'],
                ['t = β̂₁/SE(β̂₁)', 'Nº de erros-padrão que β̂₁ está afastado de 0', '|t| > ≈1.96 → provavelmente significativo'],
                ['p-value', 'P(observar t tão extremo | β₁=0)', 'p < 0.05 → rejeitar H₀, x é significativo'],
                ['IC 95%', 'Intervalo plausível para o verdadeiro β₁', 'Se o IC não contém 0 → significativo'],
              ].map(([a, b, c]) => (
                <tr key={a}><td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Significância estatística (p-value baixo) <strong>não é o mesmo</strong> que importância prática.
          Com amostras muito grandes, até efeitos minúsculos e irrelevantes podem ter p-values muito baixos.
          Olhe sempre também para a <strong>magnitude</strong> do coeficiente e para o seu intervalo de confiança.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Regressão Linear Múltipla === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Regressão Linear Múltipla</h2>
        <p style={S.p}>
          A generalização natural para <InlineMath math="p" /> variáveis preditoras é a
          <strong> regressão linear múltipla</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_p x_p + \varepsilon" />
        </div>
        <p style={S.p}>
          Em notação matricial, com <InlineMath math="\mathbf{X}" /> a matriz de design (n linhas, p+1 colunas
          incluindo uma coluna de 1's para o intercept) e <InlineMath math="\mathbf{y}" /> o vector de
          respostas, a solução OLS de forma fechada é a célebre <strong>equação normal</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}" />
        </div>
        <p style={S.p}>
          Cada coeficiente <InlineMath math="\beta_j" /> representa agora o efeito de <InlineMath math="x_j" /> sobre
          <InlineMath math="y" />, <strong>mantendo todas as outras variáveis constantes</strong> ("ceteris
          paribus") — esta é a grande vantagem sobre fazer várias regressões simples separadas, que ignoram
          correlações entre preditores.
        </p>
        <div style={S.note}>
          A inversão da matriz <InlineMath math="\mathbf{X}^T \mathbf{X}" /> tem custo computacional
          <InlineMath math="O(p^3)" />. Para datasets com muitas features (p grande) ou
          <InlineMath math="\mathbf{X}^T \mathbf{X}" /> mal condicionada (features muito correlacionadas), a
          solução de forma fechada torna-se lenta ou numericamente instável — é aqui que o
          <strong> gradiente descendente</strong> (secção 5) se torna preferível.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Regressão Polinomial === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Regressão Polinomial — "Regressão Linear" com Features Transformadas</h2>
        <p style={S.p}>
          Quando a relação entre <InlineMath math="x" /> e <InlineMath math="y" /> não é linear, podemos
          continuar a usar toda a maquinaria da regressão linear (OLS, gradiente descendente, R², etc.)
          simplesmente <strong>criando novas features</strong> que são potências da feature original:
        </p>
        <div style={S.math}>
          <BlockMath math="y = \beta_0 + \beta_1 x + \beta_2 x^2 + \beta_3 x^3 + \dots + \beta_d x^d + \varepsilon" />
        </div>
        <p style={S.p}>
          Note que este modelo é <strong>linear nos parâmetros</strong> <InlineMath math="\beta_j" /> — basta
          tratar <InlineMath math="x, x^2, x^3, \dots" /> como se fossem <InlineMath math="p" /> features
          independentes <InlineMath math="x_1, x_2, \dots, x_p" />, e aplicar exactamente as mesmas fórmulas de
          OLS da secção 4. A não-linearidade está na <strong>relação entre as features e a variável original</strong>,
          não na forma como o modelo combina os coeficientes.
        </p>
        <PolyFitDiagram />
        <div style={S.note}>
          O grau <InlineMath math="d" /> do polinómio é um <strong>hiperparâmetro</strong>: graus baixos
          arriscam underfitting, graus altos arriscam overfitting. A escolha de <InlineMath math="d" /> deve
          ser feita por validação cruzada (Módulo 05), não pelo erro no conjunto de treino — que tende sempre
          a diminuir à medida que <InlineMath math="d" /> aumenta.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Ridge e Lasso === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Ridge e Lasso — Regressão Linear Regularizada</h2>
        <p style={S.p}>
          Uma forma alternativa (e frequentemente mais eficaz) de controlar o overfitting é
          <strong> penalizar coeficientes grandes</strong> directamente na função de custo, em vez de limitar o
          grau do polinómio. Isto liga-se directamente ao conceito de regularização introduzido no
          <strong> Módulo 03</strong>.
        </p>

        <h3 style={S.h3}>Ridge Regression (Regularização L2)</h3>
        <div style={S.math}>
          <BlockMath math="J_{ridge}(\boldsymbol{\beta}) = \sum_{i=1}^n (y_i - \hat{y}_i)^2 + \lambda \sum_{j=1}^p \beta_j^2" />
        </div>
        <p style={S.p}>
          O termo <InlineMath math="\lambda \sum \beta_j^2" /> penaliza coeficientes grandes, "encolhendo-os"
          (shrinkage) em direcção a zero — mas raramente exactamente a zero. O hiperparâmetro
          <InlineMath math="\lambda \geq 0" /> controla a força da penalização: <InlineMath math="\lambda=0" /> reduz
          ao OLS normal; <InlineMath math="\lambda \to \infty" /> força todos os coeficientes para perto de zero.
        </p>

        <h3 style={S.h3}>Lasso Regression (Regularização L1)</h3>
        <div style={S.math}>
          <BlockMath math="J_{lasso}(\boldsymbol{\beta}) = \sum_{i=1}^n (y_i - \hat{y}_i)^2 + \lambda \sum_{j=1}^p |\beta_j|" />
        </div>
        <p style={S.p}>
          A diferença — usar o valor absoluto em vez do quadrado — tem um efeito geométrico importante: o Lasso
          pode encolher coeficientes <strong>exactamente a zero</strong>, realizando assim
          <strong> selecção automática de features</strong>.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Propriedade</th><th style={S.th}>Ridge (L2)</th><th style={S.th}>Lasso (L1)</th></tr></thead>
            <tbody>
              {[
                ['Penalização', 'Σβⱼ²', 'Σ|βⱼ|'],
                ['Efeito nos coeficientes', 'Encolhe todos suavemente', 'Pode zerar alguns (sparse)'],
                ['Selecção de features', 'Não', 'Sim (implícita)'],
                ['Bom quando...', 'Muitas features moderadamente relevantes', 'Poucas features verdadeiramente relevantes'],
                ['Solução de forma fechada', 'Sim', 'Não (requer optimização iterativa)'],
              ].map(([a, b, c]) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700 }}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Existe também a <strong>Elastic Net</strong>, que combina linearmente as duas penalizações
          (<InlineMath math="\lambda_1\sum|\beta_j| + \lambda_2\sum\beta_j^2" />), obtendo o melhor dos dois
          mundos: alguma selecção de features com maior estabilidade quando há features muito correlacionadas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Regressão Logística === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Regressão Logística — Da Regressão Linear à Classificação</h2>
        <p style={S.p}>
          Para problemas de <strong>classificação binária</strong> (<InlineMath math="y \in \{0,1\}" />), a
          regressão linear é inadequada: pode prever valores fora do intervalo [0,1] e não modela bem uma
          probabilidade. A <strong>regressão logística</strong> resolve isto compondo a combinação linear com a
          <strong> função sigmoide</strong> (logística):
        </p>
        <div style={S.math}>
          <BlockMath math="z = \beta_0 + \beta_1 x_1 + \dots + \beta_p x_p" />
          <BlockMath math="P(y=1\mid \mathbf{x}) = \sigma(z) = \frac{1}{1+e^{-z}}" />
        </div>
        <SigmoidDiagram />

        <h3 style={S.h3}>Odds e Log-Odds (Logit)</h3>
        <p style={S.p}>
          As <strong>odds</strong> (razão de probabilidades) de um evento são definidas como a razão entre a
          probabilidade de ocorrer e a probabilidade de não ocorrer:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{odds} = \frac{P(y=1)}{P(y=0)} = \frac{P(y=1)}{1-P(y=1)}" />
        </div>
        <p style={S.p}>
          Substituindo <InlineMath math="P(y=1)=\sigma(z)" />, obtém-se a propriedade fundamental da regressão
          logística — as <strong>odds são iguais a</strong> <InlineMath math="e^z" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{odds} = e^z = e^{\beta_0+\beta_1 x_1+\dots+\beta_p x_p}" />
        </div>
        <p style={S.p}>
          Aplicando o logaritmo natural a ambos os lados, obtemos o <strong>log-odds</strong> (também chamado
          <strong> logit</strong>) — que é, surpreendentemente, <strong>linear</strong> nos parâmetros:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{logit}(p) = \ln\left(\frac{p}{1-p}\right) = z = \beta_0 + \beta_1 x_1 + \dots + \beta_p x_p" />
        </div>
        <h3 style={S.h3}>Maximum Likelihood Estimation (MLE) e Cross-Entropy Loss</h3>
        <p style={S.p}>
          Ao contrário da regressão linear, a regressão logística não tem solução de forma fechada — os
          coeficientes são estimados por <strong>Maximum Likelihood Estimation (MLE)</strong>: encontrar os
          <InlineMath math="\boldsymbol{\beta}" /> que tornam os dados observados o mais "prováveis" possível
          sob o modelo. A <strong>likelihood</strong> de todo o dataset (assumindo observações independentes) é:
        </p>
        <div style={S.math}>
          <BlockMath math="L(\boldsymbol{\beta}) = \prod_{i=1}^n \hat{y}_i^{\,y_i} (1-\hat{y}_i)^{1-y_i}" />
        </div>
        <p style={S.p}>
          Trabalhar com produtos de probabilidades é numericamente instável (números muito pequenos), por isso
          maximizamos o <strong>log-likelihood</strong>, ou — de forma equivalente — minimizamos o seu negativo,
          conhecido como <strong>cross-entropy loss</strong> (ou log loss):
        </p>
        <div style={S.math}>
          <BlockMath math="\ell(\boldsymbol{\beta}) = -\sum_{i=1}^n \left[ y_i \ln(\hat{y}_i) + (1-y_i)\ln(1-\hat{y}_i) \right]" />
        </div>
        <p style={S.p}>
          Para cada observação: se <InlineMath math="y_i=1" />, a perda é <InlineMath math="-\ln(\hat{y}_i)" /> —
          baixa quando <InlineMath math="\hat{y}_i" /> está perto de 1, e tende para infinito quando
          <InlineMath math="\hat{y}_i \to 0" /> (o modelo está "muito confiante e muito errado"). A função
          <InlineMath math="\ell(\boldsymbol{\beta})" /> é convexa, logo é minimizada com gradiente descendente,
          de forma muito semelhante ao que vimos na secção 5.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 10: Regressão Logística Multinomial (Softmax) === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Regressão Logística Multinomial (Softmax Regression)</h2>
        <p style={S.p}>
          Quando há mais de duas classes (<InlineMath math="K > 2" />), generalizamos a regressão logística com
          a <strong>função softmax</strong>. Para cada classe <InlineMath math="k" />, calculamos um score
          linear próprio <InlineMath math="z_k = \boldsymbol{\beta}_k \cdot \mathbf{x}" />, e a probabilidade de
          pertencer à classe <InlineMath math="k" /> é:
        </p>
        <div style={S.math}>
          <BlockMath math="P(y=k\mid \mathbf{x}) = \frac{e^{z_k}}{\sum_{j=1}^{K} e^{z_j}}" />
        </div>
        <p style={S.p}>
          A softmax garante duas propriedades essenciais: todas as probabilidades são positivas, e a sua soma é
          exactamente 1 — <InlineMath math="\sum_{k=1}^K P(y=k\mid\mathbf{x}) = 1" />. A função de perda
          generaliza-se naturalmente para a <strong>cross-entropy categórica</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="\ell(\boldsymbol{\beta}) = -\sum_{i=1}^n \sum_{k=1}^K \mathbb{1}[y_i=k] \ln P(y_i=k \mid \mathbf{x}_i)" />
        </div>
        <div style={S.note}>
          A regressão logística binária é apenas um <strong>caso particular</strong> da softmax com
          <InlineMath math="K=2" />: pode mostrar-se que, com duas classes, a fórmula softmax se reduz
          exactamente à sigmoide aplicada à diferença dos dois scores
          <InlineMath math="\ (z_1 - z_0)" />. Por isso, a softmax regression é também chamada
          <strong> Multinomial Logistic Regression</strong>.
        </div>
      </div>
</div>
  );
}
