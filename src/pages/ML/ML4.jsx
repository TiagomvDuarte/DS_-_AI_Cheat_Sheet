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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
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

      <line x1="50" y1="100" x2="510" y2="100" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="516" y="104" fill="#f97316" fontSize="10">ȳ</text>

      <line x1="70" y1="150" x2="490" y2="40" stroke={color} strokeWidth="2.5" />
      <text x="495" y="38" fill={color} fontSize="10" fontWeight="700">ŷ</text>

      {[[100, 135], [180, 118], [260, 100], [340, 75], [420, 55]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5} fill="#f97316" />
      ))}

      {/* highlighted point at x=260 */}
      <line x1="260" y1="100" x2="260" y2="113" stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arr-ols)" />
      <text x="266" y="116" fill="#f97316" fontSize="10">SSE: yᵢ − ŷᵢ</text>
      <line x1="260" y1="100" x2="260" y2="87" stroke={color} strokeWidth="2.5" markerEnd="url(#arr-ols)" />
      <text x="266" y="80" fill={color} fontSize="10">SSR: ŷᵢ − ȳ</text>
      <line x1="260" y1="113" x2="260" y2="113" stroke="#f97316" strokeWidth="2.5" />
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
const LossSurfaceDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Superfície de Perda (MSE) e Gradiente Descendente</p>
    <svg viewBox="0 0 480 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-gd" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
        </marker>
      </defs>
      {/* contour ellipses representing the bowl-shaped J(beta0, beta1) */}
      {[90, 70, 50, 30].map((r, i) => (
        <ellipse key={i} cx="240" cy="120" rx={r * 1.6} ry={r} fill="none" stroke={color} strokeWidth="1.2" opacity={0.25 + i * 0.15} />
      ))}
      <circle cx="240" cy="120" r="4" fill="#f97316" />
      <text x="240" y="105" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">mínimo global</text>

      {/* gradient descent path */}
      <path d="M 90 40 C 130 70, 160 90, 190 105 C 210 113, 225 117, 236 119"
        fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#arr-gd)" />
      {[[90, 40], [140, 75], [185, 102], [222, 116]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#f59e0b" opacity={0.5 + i * 0.15} />
      ))}
      <text x="90" y="28" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">início (β₀,β₁ aleatórios)</text>

      <text x="20" y="200" fill="var(--text-secondary)" fontSize="10">β₀</text>
      <text x="450" y="120" fill="var(--text-secondary)" fontSize="10">β₁</text>
      <text x="240" y="215" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">J(β₀, β₁) é convexa: cada passo aproxima-se do mínimo</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A função de custo MSE da regressão linear é uma <strong>função convexa</strong> dos parâmetros — tem a
      forma de uma "tigela". Em cada iteração, o gradiente descendente calcula a direcção de maior subida
      (o gradiente) e dá um passo na direcção oposta, aproximando-se progressivamente do único mínimo global.
    </p>
  </div>
);

// === Diagram 3: underfit vs good fit vs overfit (polynomial regression) ===
const PolyFitDiagram = () => {
  const pts = [[40, 130], [80, 90], [120, 70], [160, 75], [200, 60], [240, 95], [280, 80], [320, 120]];
  const linear = 'M 30 135 L 330 70';
  const good = 'M 30 140 C 80 70, 140 60, 180 75 C 230 90, 280 75, 330 115';
  const overfit = 'M 30 138 C 55 75, 95 100, 120 65 C 150 130, 175 50, 205 70 C 240 105, 270 60, 295 110 C 310 130, 320 100, 330 118';
  const charts = [
    { title: 'Underfit (grau 1)', path: linear, c: '#f97316', note: 'Recta não captura a curvatura — alto bias' },
    { title: 'Bom ajuste (grau 3)', path: good, c: '#f97316', note: 'Captura o padrão sem seguir o ruído' },
    { title: 'Overfit (grau 9)', path: overfit, c: '#f97316', note: 'Segue o ruído ponto a ponto — alta variância' },
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
                <circle key={i} cx={x * 1} cy={y} r="4" fill="#f97316" />
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
const RegularizationDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Ridge (L2) vs. Lasso (L1) — Regiões de Restrição</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div>
        <svg viewBox="0 0 180 180" width="170" height="170">
          <line x1="90" y1="10" x2="90" y2="170" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="10" y1="90" x2="170" y2="90" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="175" y="94" fill="var(--text-secondary)" fontSize="9">β₁</text>
          <text x="86" y="8" fill="var(--text-secondary)" fontSize="9">β₂</text>
          {/* circle constraint for Ridge */}
          <circle cx="90" cy="90" r="55" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="2" />
          {/* contour ellipses of loss centered off-axis */}
          {[20, 38, 56].map((r, i) => (
            <ellipse key={i} cx="140" cy="50" rx={r} ry={r * 0.7} fill="none" stroke="#f97316" strokeWidth="1" opacity={0.5} />
          ))}
          <circle cx="125" cy="68" r="3.5" fill="#f59e0b" />
          <text x="125" y="60" textAnchor="middle" fill="#f59e0b" fontSize="9">β̂ ridge</text>
          <circle cx="140" cy="50" r="3" fill="#f97316" />
          <text x="148" y="45" fill="#f97316" fontSize="9">β̂ OLS</text>
        </svg>
        <p style={{ fontSize: '0.82rem', fontWeight: 700, color, margin: '0.25rem 0' }}>Ridge (L2): região circular</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>Encolhe coeficientes de forma suave, raramente a zero</p>
      </div>
      <div>
        <svg viewBox="0 0 180 180" width="170" height="170">
          <line x1="90" y1="10" x2="90" y2="170" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="10" y1="90" x2="170" y2="90" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="175" y="94" fill="var(--text-secondary)" fontSize="9">β₁</text>
          <text x="86" y="8" fill="var(--text-secondary)" fontSize="9">β₂</text>
          {/* diamond constraint for Lasso */}
          <polygon points="90,35 145,90 90,145 35,90" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="2" />
          {[20, 38, 56].map((r, i) => (
            <ellipse key={i} cx="140" cy="50" rx={r} ry={r * 0.7} fill="none" stroke="#f97316" strokeWidth="1" opacity={0.5} />
          ))}
          <circle cx="145" cy="90" r="3.5" fill="#f59e0b" />
          <text x="150" y="105" fill="#f59e0b" fontSize="9">β̂ lasso (β₂=0)</text>
          <circle cx="140" cy="50" r="3" fill="#f97316" />
          <text x="148" y="45" fill="#f97316" fontSize="9">β̂ OLS</text>
        </svg>
        <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f97316', margin: '0.25rem 0' }}>Lasso (L1): região em diamante</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>Os "cantos" forçam alguns coeficientes a exactamente zero</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      A solução regularizada é o ponto onde as elipses de erro (curvas de nível da função de perda OLS) tocam
      pela primeira vez a região de restrição imposta pela penalização. Como a região do Lasso tem
      <strong> cantos</strong> sobre os eixos, é geometricamente mais provável que o ponto de tangência caia
      exactamente num eixo — ou seja, que um coeficiente seja zerado. A região circular do Ridge não tem
      cantos, por isso encolhe os coeficientes mas raramente os anula.
    </p>
  </div>
);

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
            <line x1={pad} y1={yToPx(0.5)} x2={w - pad} y2={yToPx(0.5)} stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
            <text x={w - pad} y={yToPx(0.5) - 4} textAnchor="end" fill="#f97316" fontSize="9">limiar 0.5</text>
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
            <line x1="30" y1="30" x2="150" y2="130" stroke="#f97316" strokeWidth="2" strokeDasharray="5,3" />
            <text x="90" y="50" fill="#f97316" fontSize="9" textAnchor="middle">fronteira: z=0</text>
            {/* class 0 points */}
            {[[45, 50], [60, 75], [40, 95], [70, 60]].map(([x, y], i) => (
              <circle key={'a' + i} cx={x} cy={y} r="6" fill="#f97316" />
            ))}
            {/* class 1 points */}
            {[[110, 85], [130, 110], [95, 120], [120, 65]].map(([x, y], i) => (
              <circle key={'b' + i} cx={x} cy={y} r="6" fill="#f59e0b" />
            ))}
            <text x="50" y="25" fill="#f97316" fontSize="9" fontWeight="700">classe 0</text>
            <text x="105" y="145" fill="#f59e0b" fontSize="9" fontWeight="700">classe 1</text>
          </svg>
          <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f97316', margin: 0 }}>fronteira de decisão linear</p>
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

// === Diagram 6: resíduos — homocedasticidade vs heterocedasticidade ===
const ResidualPlotDiagram = () => {
  const goodResiduals = [[30, 0], [55, 4], [80, -3], [105, 2], [130, -5], [155, 1], [180, -2], [205, 5], [230, -1], [255, 3], [280, -4]];
  const badResiduals = [[30, 0.5], [55, -1], [80, 1.5], [105, -3], [130, 4], [155, -6], [180, 8], [205, -9], [230, 11], [255, -12], [280, 14]];
  const renderPlot = (data, title, c) => (
    <div>
      <svg viewBox="0 0 310 140" width="230" height="100">
        <line x1="20" y1="70" x2="300" y2="70" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
        <text x="305" y="74" fill="#f97316" fontSize="9">0</text>
        <line x1="20" y1="10" x2="20" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1="20" y1="130" x2="300" y2="130" stroke="var(--text-secondary)" strokeWidth="1" />
        {data.map(([x, r], i) => (
          <circle key={i} cx={x} cy={70 - r * 4} r="4" fill={c} />
        ))}
        <text x="160" y="138" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">valores previstos (ŷ)</text>
      </svg>
      <p style={{ fontSize: '0.82rem', fontWeight: 700, color: c, margin: '0.25rem 0' }}>{title}</p>
    </div>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Gráfico de Resíduos: Homocedasticidade vs. Heterocedasticidade</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {renderPlot(goodResiduals, 'Homocedástico — boa dispersão constante', '#f97316')}
        {renderPlot(badResiduals, 'Heterocedástico — dispersão cresce com ŷ', '#f97316')}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Num modelo bem especificado, os resíduos devem distribuir-se <strong>aleatoriamente em torno de zero</strong>,
        com variância aproximadamente constante (esquerda). Quando a dispersão dos resíduos aumenta (ou diminui)
        sistematicamente com o valor previsto — formando um "funil" (direita) — temos
        <strong> heterocedasticidade</strong>: viola um dos pressupostos da regressão linear e torna os
        erros-padrão e os testes de significância pouco fiáveis.
      </p>
    </div>
  );
};

export default function ML4() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 04</div>
      <h1 style={S.h1}>Regressão Linear & Logística</h1>
      <p style={S.lead}>
        Neste módulo vamos construir, do zero, os dois modelos mais fundamentais da aprendizagem supervisionada:
        a <strong>regressão linear</strong>, para prever valores contínuos, e a <strong>regressão logística</strong>,
        para classificação binária. Vamos derivar as fórmulas do método dos mínimos quadrados (OLS), trabalhar
        um exemplo numérico completo à mão, decompor a variância em SST/SSR/SSE, calcular R² e os testes de
        significância dos coeficientes, e depois alargar o modelo com gradiente descendente, regressão
        polinomial, regularização (Ridge/Lasso) e regressão logística multinomial (softmax). Estes modelos são
        simples, mas a sua compreensão profunda é a base para tudo o que vem a seguir — desde árvores de decisão
        até redes neuronais.
      </p>

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

        <h3 style={S.h3}>Exemplo Numérico Completo</h3>
        <p style={S.p}>
          Considere um pequeno dataset com a área de 6 apartamentos (em dezenas de m²) e o respectivo preço
          (em milhares de euros):
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>i</th><th style={S.th}>xᵢ (área, dezenas de m²)</th><th style={S.th}>yᵢ (preço, k€)</th></tr></thead>
            <tbody>
              {[
                ['1', '4', '150'],
                ['2', '5', '170'],
                ['3', '6', '200'],
                ['4', '8', '230'],
                ['5', '9', '260'],
                ['6', '10', '290'],
              ].map(([i, x, y]) => (
                <tr key={i}><td style={S.td}>{i}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{x}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{y}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Passo 1 — médias:</strong></p>
          <BlockMath math="\bar{x} = \frac{4+5+6+8+9+10}{6} = \frac{42}{6} = 7 \qquad \bar{y} = \frac{150+170+200+230+260+290}{6} = \frac{1300}{6} \approx 216.67" />

          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Passo 2 — desvios e produtos:</strong></p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>xᵢ−x̄</th><th style={S.th}>yᵢ−ȳ</th><th style={S.th}>(xᵢ−x̄)(yᵢ−ȳ)</th><th style={S.th}>(xᵢ−x̄)²</th></tr></thead>
              <tbody>
                {[
                  ['−3', '−66.67', '200.0', '9'],
                  ['−2', '−46.67', '93.3', '4'],
                  ['−1', '−16.67', '16.7', '1'],
                  ['1', '13.33', '13.3', '1'],
                  ['2', '43.33', '86.7', '4'],
                  ['3', '73.33', '220.0', '9'],
                ].map(([a, b, c, d], i) => (
                  <tr key={i}><td style={{ ...S.td, fontFamily: 'monospace' }}>{a}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{b}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{c}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{d}</td></tr>
                ))}
                <tr>
                  <td style={{ ...S.td, fontWeight: 700 }}>Σ</td>
                  <td style={{ ...S.td, fontWeight: 700 }}>—</td>
                  <td style={{ ...S.td, fontWeight: 700 }}>630.0</td>
                  <td style={{ ...S.td, fontWeight: 700 }}>28</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Passo 3 — coeficientes:</strong></p>
          <BlockMath math="\hat{\beta}_1 = \frac{630}{28} = 22.5" />
          <BlockMath math="\hat{\beta}_0 = 216.67 - (22.5)(7) = 216.67 - 157.5 = 59.17" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '1rem' }}>
            O modelo final é <InlineMath math="\hat{y} = 59.17 + 22.5x" /> — por cada dezena de m² adicional, o
            preço aumenta em média <strong>22.5 k€</strong> (≈ 2.25 €/m² nesta escala fictícia).
          </p>
        

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

        <h3 style={S.h3}>Continuação do Exemplo Numérico</h3>
        <p style={S.p}>
          Usando o modelo <InlineMath math="\hat{y} = 59.17 + 22.5x" /> do dataset de apartamentos, calculamos
          as previsões e resíduos para cada ponto:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>xᵢ</th><th style={S.th}>yᵢ</th><th style={S.th}>ŷᵢ</th><th style={S.th}>(yᵢ−ŷᵢ)²</th><th style={S.th}>(ŷᵢ−ȳ)²</th><th style={S.th}>(yᵢ−ȳ)²</th></tr></thead>
            <tbody>
              {[
                ['4', '150', '149.17', '0.69', '4548.9', '4444.9'],
                ['5', '170', '171.67', '2.79', '2034.7', '2178.9'],
                ['6', '200', '194.17', '34.03', '506.9', '277.9'],
                ['8', '230', '239.17', '84.03', '501.4', '177.9'],
                ['9', '260', '261.67', '2.79', '2018.1', '1877.8'],
                ['10', '290', '284.17', '34.03', '4534.7', '5344.0'],
              ].map(([x, y, yh, sse, ssr, sst], i) => (
                <tr key={i}><td style={{ ...S.td, fontFamily: 'monospace' }}>{x}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{y}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{yh}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{sse}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{ssr}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{sst}</td></tr>
              ))}
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Σ</td><td style={S.td}>—</td><td style={S.td}>—</td>
                <td style={{ ...S.td, fontWeight: 700 }}>≈ 158.4</td>
                <td style={{ ...S.td, fontWeight: 700 }}>≈ 14144.7</td>
                <td style={{ ...S.td, fontWeight: 700 }}>≈ 14300.5</td>
              </tr>
            </tbody>
          </table>
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Cálculo de R²:</strong></p>
          <BlockMath math="R^2 = \frac{SSR}{SST} = \frac{14144.7}{14300.5} \approx 0.989" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            O modelo explica aproximadamente <strong>98.9%</strong> da variância do preço — um ajuste muito
            bom, consistente com a forte relação linear que construímos nos dados de exemplo.
          </p>
        
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

      {/* === SECTION 5: Gradiente Descendente === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Gradiente Descendente — Alternativa à Equação Normal</h2>
        <p style={S.p}>
          Em vez de resolver a equação normal directamente, podemos minimizar a função de custo MSE
          <InlineMath math="\ J(\beta_0,\beta_1) = \frac{1}{n}\sum_i (y_i - \hat{y}_i)^2" /> de forma iterativa.
          O <strong>gradiente descendente</strong> começa com valores aleatórios de
          <InlineMath math="\beta_0,\beta_1" /> e actualiza-os repetidamente na direcção oposta ao gradiente:
        </p>
        <div style={S.math}>
          <BlockMath math="\frac{\partial J}{\partial \beta_0} = -\frac{2}{n}\sum_{i=1}^n (y_i - \hat{y}_i)" />
          <BlockMath math="\frac{\partial J}{\partial \beta_1} = -\frac{2}{n}\sum_{i=1}^n (y_i - \hat{y}_i)\,x_i" />
        </div>
        <p style={S.p}>
          A <strong>regra de actualização</strong>, com taxa de aprendizagem (learning rate)
          <InlineMath math="\alpha" />, é:
        </p>
        <div style={S.math}>
          <BlockMath math="\beta_0 \leftarrow \beta_0 - \alpha \frac{\partial J}{\partial \beta_0} \qquad \beta_1 \leftarrow \beta_1 - \alpha \frac{\partial J}{\partial \beta_1}" />
        </div>
        <LossSurfaceDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Método</th><th style={S.th}>Custo computacional</th><th style={S.th}>Quando usar</th></tr></thead>
            <tbody>
              {[
                ['Equação Normal', 'O(p³) — uma única operação', 'p pequeno/moderado (até alguns milhares)'],
                ['Gradiente Descendente (batch)', 'O(n·p) por iteração, muitas iterações', 'n e p grandes; também usado em redes neuronais'],
                ['Gradiente Descendente Estocástico (SGD)', 'O(p) por amostra', 'Datasets enormes; aprendizagem online'],
              ].map(([a, b, c]) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Para a regressão linear com erro MSE, a função de custo é <strong>convexa</strong> — não existem
          mínimos locais "falsos", apenas um mínimo global. Por isso o gradiente descendente, com uma taxa de
          aprendizagem adequada, converge sempre para a solução óptima — exactamente a mesma que a equação
          normal devolveria.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Regressão Polinomial === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Regressão Polinomial — "Regressão Linear" com Features Transformadas</h2>
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
        <h2 style={S.h2}>7. Ridge e Lasso — Regressão Linear Regularizada</h2>
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
        <RegularizationDiagram />
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

      {/* === SECTION 8: Pressupostos da Regressão Linear === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Pressupostos da Regressão Linear</h2>
        <p style={S.p}>
          A validade das estimativas, intervalos de confiança e testes de significância vistos na secção 3
          depende de um conjunto de <strong>pressupostos</strong> sobre os dados e os resíduos.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Pressuposto</th><th style={S.th}>O que significa</th><th style={S.th}>Consequência se violado</th></tr></thead>
            <tbody>
              {[
                ['Linearidade', 'A relação entre X e y é (aproximadamente) linear nos parâmetros', 'Modelo enviesado — usar termos polinomiais/transformações'],
                ['Independência', 'Os resíduos não estão correlacionados entre si', 'Erros-padrão subestimados (comum em séries temporais)'],
                ['Homocedasticidade', 'A variância dos resíduos é constante em todos os níveis de X', 'Testes/IC pouco fiáveis (mas β̂ ainda não enviesado)'],
                ['Normalidade dos resíduos', 'Os resíduos seguem aproximadamente uma distribuição normal', 'Testes t/F deixam de ser exactos em amostras pequenas'],
              ].map(([a, b, c]) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <ResidualPlotDiagram />
        <div style={S.note}>
          Na prática, a forma mais simples de verificar estes pressupostos é <strong>visualizar os resíduos</strong>:
          um gráfico de resíduos vs. valores previstos (como acima) deve parecer uma "nuvem" sem padrão à volta
          de zero. Padrões em forma de funil, curva ou tendência indicam violações que merecem atenção antes de
          confiar nos p-values do modelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Regressão Logística === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Regressão Logística — Da Regressão Linear à Classificação</h2>
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
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Interpretação do coeficiente — exemplo numérico:</strong></p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Suponha que num modelo de aprovação de crédito, o coeficiente associado a "anos de experiência
            profissional" é <InlineMath math="\beta_1 = 0.4" />. O <strong>odds ratio</strong> é:
          </p>
          <BlockMath math="e^{\beta_1} = e^{0.4} \approx 1.49" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Cada ano adicional de experiência <strong>multiplica as odds de aprovação por ≈1.49</strong> (um
            aumento de ≈49%), mantendo as outras variáveis constantes. Se <InlineMath math="\beta_1" /> fosse
            negativo, o odds ratio seria <InlineMath math="< 1" />, indicando uma redução das odds.
          </p>
        

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
        <h2 style={S.h2}>10. Regressão Logística Multinomial (Softmax Regression)</h2>
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

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Síntese do Módulo</h2>
        <p style={S.p}>
          A regressão linear e a regressão logística partilham a mesma espinha dorsal — uma combinação linear de
          features, <InlineMath math="z = \beta_0 + \beta_1 x_1 + \dots + \beta_p x_p" /> — diferindo apenas na
          função aplicada a <InlineMath math="z" /> (identidade vs. sigmoide/softmax) e na função de perda usada
          para estimar os coeficientes (SSE vs. cross-entropy).
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>OLS minimiza SSE; tem solução de forma fechada: <InlineMath math="\hat{\beta}_1 = \frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sum(x_i-\bar{x})^2}" />, <InlineMath math="\hat{\beta}_0 = \bar{y}-\hat{\beta}_1\bar{x}" /></li>
            <li>SST = SSR + SSE; R² = SSR/SST; R²_adj penaliza nº de features</li>
            <li>SE, t-statistic, p-value e IC quantificam a incerteza/significância de cada coeficiente</li>
            <li>O gradiente descendente é uma alternativa iterativa à equação normal, essencial para datasets grandes</li>
            <li>Regressão polinomial = regressão linear com features transformadas (x, x², x³, ...)</li>
            <li>Ridge (L2) encolhe coeficientes; Lasso (L1) pode zerá-los — selecção automática de features</li>
            <li>Linearidade, independência, homocedasticidade e normalidade dos resíduos são pressupostos a verificar</li>
            <li>Regressão logística: P(y=1|x) = σ(z); log-odds é linear; odds ratio = e^β; treino via MLE / cross-entropy</li>
            <li>Softmax regression generaliza a logística para K &gt; 2 classes</li>
          </ul>
        
      </div>
    </div>
  );
}
