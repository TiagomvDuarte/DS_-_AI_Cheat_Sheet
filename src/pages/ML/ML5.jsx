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

// === Diagram: Bias-Variance tradeoff curves ===
const BiasVarianceDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Erro de Treino e de Validação vs. Complexidade do Modelo</p>
    <svg viewBox="0 0 500 250" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Region labels (above the plot, no overlap with curves) */}
      <text x="100" y="14" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">Underfitting (high bias)</text>
      <text x="210" y="14" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Sweet Spot</text>
      <text x="365" y="14" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Overfitting (high variance)</text>

      <line x1="40" y1="210" x2="470" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="40" y1="210" x2="40" y2="30" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="470" y="232" textAnchor="end" fill="var(--text-secondary)" fontSize="11">Complexidade do Modelo</text>
      <text x="15" y="30" textAnchor="start" fill="var(--text-secondary)" fontSize="11">Erro</text>

      {/* Regions */}
      <rect x="40" y="30" width="120" height="180" fill="rgba(245,158,11,0.08)" />
      <rect x="160" y="30" width="100" height="180" fill="rgba(16,185,129,0.10)" />
      <rect x="260" y="30" width="210" height="180" fill="rgba(249,115,22,0.10)" />

      {/* Training error curve (decreasing) */}
      <path d="M 40 190 C 120 110, 200 60, 470 30" fill="none" stroke={color} strokeWidth="2.5" />
      <text x="395" y="55" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Erro de Treino</text>

      {/* Validation error curve (U-shape) */}
      <path d="M 40 205 C 120 120, 190 85, 220 85 C 260 85, 330 120, 470 205" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <text x="350" y="180" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Erro de Validação</text>

      {/* Sweet spot marker */}
      <line x1="220" y1="30" x2="220" y2="210" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="220" cy="85" r="4" fill="#f97316" />
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      À medida que a complexidade do modelo aumenta, o <strong>erro de treino</strong> diminui sempre — um modelo
      mais complexo consegue ajustar-se cada vez melhor (até memorizar) os dados que vê. O <strong>erro de
      validação</strong>, no entanto, desce inicialmente (à medida que o modelo deixa de fazer underfitting),
      atinge um mínimo — o <strong>"sweet spot"</strong> — e depois volta a subir, à medida que o modelo começa
      a memorizar ruído específico do conjunto de treino (overfitting). O objectivo do model selection é
      encontrar esse ponto de complexidade óptima.
    </p>
  </div>
);

// === Diagram: Learning curves (high bias vs high variance) ===
const LearningCurvesDiagram = () => {
  const w = 220, h = 150, pad = 30;
  const xToPx = (x) => pad + (x / 100) * (w - 2 * pad);
  const yToPx = (y) => h - pad - (y / 100) * (h - 2 * pad);

  const Plot = ({ title, trainPath, valPath, note, noteColor }) => (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} width="220" height="150">
        <line x1={pad} y1={h - pad} x2={w - 10} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={h - pad} x2={pad} y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={w - 10} y={h - pad + 14} textAnchor="end" fill="var(--text-secondary)" fontSize="9">nº exemplos de treino</text>
        <text x={pad - 4} y="14" textAnchor="end" fill="var(--text-secondary)" fontSize="9">erro</text>
        <path d={trainPath} fill="none" stroke={color} strokeWidth="2.5" />
        <path d={valPath} fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="5,3" />
      </svg>
      <p style={{ fontSize: '0.85rem', fontWeight: 700, color: noteColor, margin: '0.25rem 0 0' }}>{title}</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>{note}</p>
    </div>
  );

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Learning Curves: Erro vs. Tamanho do Conjunto de Treino</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <Plot
          title="Alto Bias (Underfitting)"
          trainPath={`M ${xToPx(5)} ${yToPx(35)} C ${xToPx(30)} ${yToPx(45)}, ${xToPx(60)} ${yToPx(48)}, ${xToPx(100)} ${yToPx(50)}`}
          valPath={`M ${xToPx(5)} ${yToPx(85)} C ${xToPx(30)} ${yToPx(65)}, ${xToPx(60)} ${yToPx(55)}, ${xToPx(100)} ${yToPx(53)}`}
          note="Ambas as curvas convergem para um erro alto — mais dados não ajudam; o modelo é demasiado simples."
          noteColor="#f59e0b"
        />
        <Plot
          title="Alta Variância (Overfitting)"
          trainPath={`M ${xToPx(5)} ${yToPx(5)} C ${xToPx(30)} ${yToPx(8)}, ${xToPx(60)} ${yToPx(12)}, ${xToPx(100)} ${yToPx(15)}`}
          valPath={`M ${xToPx(5)} ${yToPx(95)} C ${xToPx(30)} ${yToPx(75)}, ${xToPx(60)} ${yToPx(55)}, ${xToPx(100)} ${yToPx(45)}`}
          note="Grande gap entre treino e validação — mais dados de treino tendem a reduzir esse gap."
          noteColor="#ef4444"
        />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        As <strong>learning curves</strong> mostram como o erro de treino (linha sólida) e o erro de validação
        (linha tracejada) evoluem à medida que aumentamos o número de exemplos usados para treinar o modelo.
        Um modelo com <strong>alto bias</strong> satura rapidamente — ambas as curvas convergem para um valor
        de erro elevado, e adicionar mais dados não resolve o problema (é preciso um modelo mais complexo).
        Um modelo com <strong>alta variância</strong> tem um erro de treino muito baixo mas um erro de
        validação muito mais alto — o gap entre as duas curvas é o sintoma de overfitting, e nesse caso mais
        dados de treino (ou regularização) geralmente ajudam.
      </p>
    </div>
  );
};

// === Diagram: K-Fold Cross-Validation ===
const KFoldDiagram = () => {
  const k = 5;
  const foldWidth = 80;
  const startX = 30;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>K-Fold Cross-Validation (K = 5)</p>
      <svg viewBox="0 0 460 220" style={{ maxWidth: '100%', height: 'auto' }}>
        {Array.from({ length: k }, (_, iter) => {
          const y = 20 + iter * 38;
          return (
            <g key={iter}>
              <text x="5" y={y + 16} fill="var(--text-secondary)" fontSize="10" fontWeight="700">it.{iter + 1}</text>
              {Array.from({ length: k }, (_, fold) => {
                const isVal = fold === iter;
                return (
                  <rect
                    key={fold}
                    x={startX + fold * foldWidth}
                    y={y}
                    width={foldWidth - 4}
                    height="28"
                    rx="4"
                    fill={isVal ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.10)'}
                    stroke={isVal ? '#f97316' : color}
                    strokeWidth="1.2"
                  />
                );
              })}
              {Array.from({ length: k }, (_, fold) => (
                <text key={fold} x={startX + fold * foldWidth + (foldWidth - 4) / 2} y={y + 18} textAnchor="middle" fontSize="9" fontWeight="700" fill={fold === iter ? '#f97316' : color}>
                  {fold === iter ? 'val' : 'treino'}
                </text>
              ))}
            </g>
          );
        })}
        <text x="230" y="210" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">
          Cada fold serve exactamente uma vez como validação — métrica final = média das K iterações
        </text>
      </svg>
    </div>
  );
};

// === Diagram: Stratified K-Fold ===
const StratifiedKFoldDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>K-Fold Normal vs. Stratified K-Fold</p>
    <svg viewBox="0 0 520 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="135" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">K-Fold Normal</text>
      {[0, 1, 2, 3].map((fold) => {
        const y = 35 + fold * 30;
        // random-ish distribution of classes
        const seqs = [
          ['A', 'A', 'A', 'B', 'A'],
          ['A', 'B', 'A', 'A', 'A'],
          ['B', 'A', 'A', 'A', 'B'],
          ['A', 'A', 'B', 'A', 'A'],
        ];
        return (
          <g key={fold}>
            <text x="10" y={y + 14} fill="var(--text-secondary)" fontSize="9">fold {fold + 1}</text>
            {seqs[fold].map((cls, i) => (
              <rect key={i} x={60 + i * 32} y={y} width="28" height="20" rx="3"
                fill={cls === 'A' ? 'rgba(249,115,22,0.10)' : 'rgba(245,158,11,0.3)'}
                stroke={cls === 'A' ? color : '#f97316'} strokeWidth="1" />
            ))}
          </g>
        );
      })}
      <text x="395" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">Stratified K-Fold</text>
      {[0, 1, 2, 3].map((fold) => {
        const y = 35 + fold * 30;
        const seqs = [
          ['A', 'A', 'A', 'A', 'B'],
          ['A', 'A', 'A', 'A', 'B'],
          ['A', 'A', 'A', 'A', 'B'],
          ['A', 'A', 'A', 'A', 'B'],
        ];
        return (
          <g key={fold}>
            <text x="290" y={y + 14} fill="var(--text-secondary)" fontSize="9">fold {fold + 1}</text>
            {seqs[fold].map((cls, i) => (
              <rect key={i} x={330 + i * 32} y={y} width="28" height="20" rx="3"
                fill={cls === 'A' ? 'rgba(249,115,22,0.10)' : 'rgba(245,158,11,0.3)'}
                stroke={cls === 'A' ? color : '#f97316'} strokeWidth="1" />
            ))}
          </g>
        );
      })}
      <rect x="60" y="170" width="28" height="20" rx="3" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
      <text x="95" y="184" fill="var(--text-secondary)" fontSize="10">Classe A (80%)</text>
      <rect x="200" y="170" width="28" height="20" rx="3" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1" />
      <text x="235" y="184" fill="var(--text-secondary)" fontSize="10">Classe B (20%)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      No <strong>K-Fold normal</strong>, a divisão em folds é puramente aleatória — com classes desbalanceadas,
      é possível que um fold tenha muito poucos (ou nenhum) exemplos da classe minoritária, distorcendo a
      métrica nessa iteração. O <strong>Stratified K-Fold</strong> garante que cada fold mantém,
      aproximadamente, a <strong>mesma proporção de classes</strong> do dataset completo — essencial sempre
      que trabalhamos com classificação, e especialmente importante em datasets desbalanceados.
    </p>
  </div>
);

// === Diagram: Nested Cross-Validation ===
const NestedCVDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Nested Cross-Validation</p>
    <svg viewBox="0 0 480 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="155" y="16" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Outer Loop (model assessment)</text>
      <rect x="20" y="26" width="270" height="180" rx="8" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="6,3" />

      <rect x="40" y="46" width="120" height="150" rx="6" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="100" y="62" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Outer Train</text>

      <rect x="170" y="46" width="100" height="150" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="220" y="62" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">Outer Test</text>
      <text x="220" y="170" textAnchor="middle" fill="#f97316" fontSize="8">(score final,</text>
      <text x="220" y="182" textAnchor="middle" fill="#f97316" fontSize="8">nunca usado p/ tuning)</text>

      {/* Inner CV inside outer train */}
      <rect x="50" y="78" width="100" height="100" rx="5" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4,2" />
      <text x="100" y="94" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700">Inner Loop</text>
      <text x="100" y="110" textAnchor="middle" fill="#f59e0b" fontSize="8">(grid search /</text>
      <text x="100" y="124" textAnchor="middle" fill="#f59e0b" fontSize="8">hyperparam tuning</text>
      <text x="100" y="138" textAnchor="middle" fill="#f59e0b" fontSize="8">via K-Fold CV)</text>

      {/* Separate annotation box — outside the outer-loop dashed border */}
      <rect x="320" y="46" width="140" height="150" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="390" y="68" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">repetir p/ cada</text>
      <text x="390" y="82" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">partição outer</text>
      <text x="390" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">média dos scores</text>
      <text x="390" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">outer = estimativa</text>
      <text x="390" y="140" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">honesta de</text>
      <text x="390" y="152" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">generalização</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Quando usamos cross-validation para <strong>escolher hiperparâmetros</strong> (ex.: profundidade de uma
      árvore, valor de C numa SVM), e depois reportamos a métrica obtida nesse mesmo processo como a
      performance final, estamos a "espreitar" os dados de validação durante a selecção — o que produz
      uma estimativa <strong>optimisticamente enviesada</strong>. A <strong>Nested CV</strong> resolve isto com
      dois loops: o <strong>loop interno</strong> faz a tuning de hiperparâmetros (usando apenas os dados de
      treino do outer fold), e o <strong>loop externo</strong> avalia o modelo já optimizado num conjunto de
      teste que nunca participou na escolha de hiperparâmetros — dando uma estimativa honesta da capacidade
      de generalização.
    </p>
  </div>
);

// === Diagram: Confusion Matrix ===
const ConfusionMatrixDiagram = ({ tp, fp, fn, tn }) => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Matriz de Confusão</p>
    <svg viewBox="0 0 360 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="210" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">Valor Previsto</text>
      <text x="158" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Positivo</text>
      <text x="262" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Negativo</text>

      <text x="30" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700" transform="rotate(-90 30 126)">Valor Real</text>
      <text x="80" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Positivo</text>
      <text x="80" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Negativo</text>

      <rect x="110" y="55" width="96" height="68" rx="6" fill="rgba(16,185,129,0.18)" stroke="#f97316" strokeWidth="1.5" />
      <text x="158" y="90" textAnchor="middle" fill="#f97316" fontSize="20" fontWeight="800">{tp}</text>
      <text x="158" y="108" textAnchor="middle" fill="#f97316" fontSize="9">TP</text>

      <rect x="214" y="55" width="96" height="68" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="262" y="90" textAnchor="middle" fill="#f97316" fontSize="20" fontWeight="800">{fp}</text>
      <text x="262" y="108" textAnchor="middle" fill="#f97316" fontSize="9">FP</text>

      <rect x="110" y="129" width="96" height="68" rx="6" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="158" y="164" textAnchor="middle" fill="#f97316" fontSize="20" fontWeight="800">{fn}</text>
      <text x="158" y="182" textAnchor="middle" fill="#f97316" fontSize="9">FN</text>

      <rect x="214" y="129" width="96" height="68" rx="6" fill="rgba(16,185,129,0.18)" stroke="#f97316" strokeWidth="1.5" />
      <text x="262" y="164" textAnchor="middle" fill="#f97316" fontSize="20" fontWeight="800">{tn}</text>
      <text x="262" y="182" textAnchor="middle" fill="#f97316" fontSize="9">TN</text>
    </svg>
  </div>
);

// === Diagram: ROC Curve ===
const ROCCurveDiagram = () => {
  const w = 280, h = 260, pad = 36;
  const xToPx = (x) => pad + x * (w - 2 * pad);
  const yToPx = (y) => h - pad - y * (h - 2 * pad);
  // Example ROC points from worked threshold table
  const points = [
    [0, 0], [0, 0.33], [0.2, 0.33], [0.2, 0.67], [0.4, 0.67], [0.4, 1], [1, 1],
  ];
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xToPx(p[0]).toFixed(1)} ${yToPx(p[1]).toFixed(1)}`).join(' ');
  // Area under the curve polygon (down to x-axis)
  const areaD = pathD + ` L ${xToPx(1)} ${yToPx(0)} L ${xToPx(0)} ${yToPx(0)} Z`;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curva ROC e Área Sob a Curva (AUC)</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto', width: 280 }}>
        {/* axes */}
        <line x1={pad} y1={h - pad} x2={w - 10} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={h - pad} x2={pad} y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={(w) / 2} y={h - 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">FPR (1 − Especificidade)</text>
        <text x="10" y={h / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="10" transform={`rotate(-90 10 ${h / 2})`}>TPR (Recall)</text>

        {/* diagonal random classifier */}
        <line x1={xToPx(0)} y1={yToPx(0)} x2={xToPx(1)} y2={yToPx(1)} stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={xToPx(0.6)} y={yToPx(0.55)} fill="var(--text-secondary)" fontSize="9">aleatório (AUC=0.5)</text>

        {/* AUC shading */}
        <path d={areaD} fill="rgba(249,115,22,0.10)" stroke="none" />

        {/* ROC curve */}
        <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={xToPx(x)} cy={yToPx(y)} r="3.5" fill={color} />
        ))}

        {/* axis labels 0 and 1 */}
        <text x={xToPx(0)} y={h - pad + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">0</text>
        <text x={xToPx(1)} y={h - pad + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">1</text>
        <text x={pad - 8} y={yToPx(0) + 3} textAnchor="end" fill="var(--text-secondary)" fontSize="9">0</text>
        <text x={pad - 8} y={yToPx(1) + 3} textAnchor="end" fill="var(--text-secondary)" fontSize="9">1</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cada ponto da curva corresponde a um <strong>threshold</strong> de decisão diferente: variando o
        threshold de 1 (nenhum positivo previsto) até 0 (todos previstos como positivo), o par (FPR, TPR)
        traça esta curva. A área sombreada é a <strong>AUC</strong> (Area Under the Curve) — quanto maior,
        melhor o classificador consegue separar as classes em todos os thresholds possíveis. A diagonal
        tracejada representa um classificador aleatório (AUC = 0.5).
      </p>
    </div>
  );
};

// === Diagram: Precision-Recall Curve comparison ===
const PRCurveDiagram = () => {
  const w = 240, h = 220, pad = 34;
  const xToPx = (x) => pad + x * (w - 2 * pad);
  const yToPx = (y) => h - pad - y * (h - 2 * pad);

  const Plot = ({ title, pathD, baseline, note, noteColor }) => (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} width="240" height="220">
        <line x1={pad} y1={h - pad} x2={w - 10} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={h - pad} x2={pad} y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={w / 2} y={h - 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Recall</text>
        <text x="10" y={h / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="9" transform={`rotate(-90 10 ${h / 2})`}>Precision</text>
        <line x1={xToPx(0)} y1={yToPx(baseline)} x2={xToPx(1)} y2={yToPx(baseline)} stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="4,3" />
        <text x={xToPx(0.5)} y={yToPx(baseline) - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">baseline (prevalência)</text>
        <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" />
      </svg>
      <p style={{ fontSize: '0.85rem', fontWeight: 700, color: noteColor, margin: '0.25rem 0 0' }}>{title}</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>{note}</p>
    </div>
  );

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curva Precision-Recall: Dataset Balanceado vs. Desbalanceado</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Plot
          title="Classes balanceadas (50/50)"
          pathD={`M ${xToPx(0)} ${yToPx(0.95)} C ${xToPx(0.4)} ${yToPx(0.93)}, ${xToPx(0.8)} ${yToPx(0.85)}, ${xToPx(1)} ${yToPx(0.7)}`}
          baseline={0.5}
          note="Curva próxima do topo — precision mantém-se alta mesmo com recall elevado."
          noteColor={color}
        />
        <Plot
          title="Classes desbalanceadas (5% positivos)"
          pathD={`M ${xToPx(0)} ${yToPx(0.8)} C ${xToPx(0.3)} ${yToPx(0.55)}, ${xToPx(0.6)} ${yToPx(0.25)}, ${xToPx(1)} ${yToPx(0.06)}`}
          baseline={0.05}
          note="Curva cai rapidamente — fica muito mais visível o trade-off real entre precision e recall."
          noteColor="#ef4444"
        />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Numa curva ROC, mesmo um classificador mediocre pode parecer "bom" quando há muitos mais negativos do
        que positivos, porque o FPR (que entra no denominador com TN, muito numeroso) cresce lentamente. A
        curva <strong>Precision-Recall</strong> ignora os TN e foca-se directamente na qualidade das previsões
        positivas — por isso é a escolha preferida para <strong>datasets desbalanceados</strong>, onde a
        classe minoritária é a que mais interessa.
      </p>
    </div>
  );
};

export default function ML5() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 04</div>
      <h1 style={S.h1}>Seleção e Validação de Modelos</h1>
      <p style={S.lead}>
        Treinar um modelo é fácil; saber se ele é <strong>bom</strong> — e se vai continuar a ser bom em dados
        que nunca viu — é o verdadeiro desafio. Este módulo cobre a base teórica da avaliação — o No Free
        Lunch Theorem, o trade-off bias-variância, e os métodos de validação (hold-out, K-Fold, Stratified
        K-Fold, LOOCV, Nested CV) — e todo o ferramental de métricas: matriz de confusão, Precision, Recall,
        F1, Cohen's Kappa, MCC, Log Loss, ROC/AUC, Precision-Recall, e métricas de regressão (MAE, MSE, RMSE,
        R²), com exemplos numéricos passo a passo e orientação prática sobre que métrica usar em cada cenário.
      </p>

      {/* === SECTION 1: No Free Lunch & Overfitting/Underfitting === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. No Free Lunch Theorem & Overfitting vs. Underfitting</h2>
        <p style={S.p}>
          Antes de qualquer técnica de validação ou métrica, é preciso interiorizar duas ideias fundamentais
          que justificam <em>porque</em> avaliar modelos com tanto cuidado.
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>No Free Lunch Theorem (Wolpert & Macready, 1997):</strong> em média, sobre todos os
            problemas de optimização possíveis, nenhum algoritmo de aprendizagem é universalmente melhor que
            outro — incluindo melhor que uma escolha aleatória. Se um algoritmo tem desempenho superior num
            conjunto de problemas, terá necessariamente desempenho inferior noutro conjunto.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Implicação prática:</strong> não existe um "melhor algoritmo" absoluto. A escolha do
            modelo deve basear-se nas características específicas do problema (tamanho dos dados, ruído,
            linearidade, interpretabilidade necessária) — e essa escolha só pode ser validada empiricamente,
            o que motiva todo este módulo.
          </p>
        </div>

        <h3 style={S.h3}>Underfitting vs. Overfitting</h3>
        <p style={S.p}>
          <strong>Underfitting</strong> ocorre quando o modelo é demasiado simples para capturar a estrutura
          subjacente dos dados — erra tanto no treino como em dados novos (alto <em>bias</em>). É como um
          aluno que estudou tão pouco que nem os exemplos do livro consegue resolver.
        </p>
        <p style={S.p}>
          <strong>Overfitting</strong> ocorre quando o modelo é demasiado complexo — em vez de aprender
          padrões generalizáveis, "memoriza" particularidades (incluindo ruído) do conjunto de treino. Tem
          erro de treino muito baixo, mas erro de validação/teste muito mais alto (alta <em>variância</em>).
          É o aluno que decorou as respostas exactas dos exercícios praticados, mas falha num exame com
          perguntas ligeiramente diferentes.
        </p>

        <h3 style={S.h3}>Decomposição Bias-Variância</h3>
        <p style={S.p}>
          Formalmente, o erro esperado de um modelo num ponto novo pode ser decomposto em três termos: o
          <strong> bias</strong> (erro sistemático por o modelo ser demasiado simples), a <strong>variância</strong> (sensibilidade
          do modelo a flutuações no conjunto de treino) e o <strong>erro irredutível</strong> (ruído inerente
          aos dados, que nenhum modelo consegue eliminar):
        </p>
        <div style={S.math}>
          <BlockMath math="\mathbb{E}\left[(y - \hat{f}(x))^2\right] = \underbrace{\left(\text{Bias}[\hat{f}(x)]\right)^2}_{\text{erro sistemático}} + \underbrace{\text{Var}[\hat{f}(x)]}_{\text{sensibilidade aos dados}} + \underbrace{\sigma^2}_{\text{ruído irredutível}}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\text{Bias}[\hat{f}(x)] = \mathbb{E}[\hat{f}(x)] - f(x)" /> mede a diferença
          entre a previsão média do modelo (sobre diferentes conjuntos de treino possíveis) e o valor real,
          e <InlineMath math="\text{Var}[\hat{f}(x)] = \mathbb{E}\left[(\hat{f}(x) - \mathbb{E}[\hat{f}(x)])^2\right]" /> mede
          o quanto a previsão do modelo varia se o treinássemos com conjuntos de dados diferentes (mas da
          mesma distribuição).
        </p>
        <BiasVarianceDiagram />
        <div style={S.note}>
          Modelos simples (ex.: regressão linear) tendem a ter <strong>alto bias, baixa variância</strong>
          (underfitting). Modelos complexos (ex.: árvores muito profundas, redes muito grandes sem
          regularização) tendem a ter <strong>baixo bias, alta variância</strong> (overfitting). O objectivo
          do model selection é encontrar o ponto que minimiza a <em>soma</em> bias² + variância.
        </div>

        <h3 style={S.h3}>Learning Curves: Diagnosticar o Problema</h3>
        <p style={S.p}>
          Uma forma prática de diagnosticar se um modelo sofre de alto bias ou alta variância é traçar as
          <strong> learning curves</strong> — o erro de treino e de validação em função do número de
          exemplos de treino usados.
        </p>
        <LearningCurvesDiagram />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Validação === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Métodos de Validação</h2>
        <p style={S.p}>
          Para detectar overfitting precisamos de avaliar o modelo em dados que ele <strong>não viu</strong> durante
          o treino. Existem várias estratégias, com diferentes trade-offs entre custo computacional e
          robustez da estimativa.
        </p>

        <h3 style={S.h3}>Hold-out</h3>
        <p style={S.p}>
          A abordagem mais simples: dividir os dados uma única vez, tipicamente em 70% treino / 15% validação
          / 15% teste (ou 80/20 quando não há tuning de hiperparâmetros). Rápido, mas a estimativa de
          performance depende fortemente de <em>qual</em> partição aleatória calhou — com datasets pequenos,
          a variância desta estimativa pode ser enorme.
        </p>

        <h3 style={S.h3}>K-Fold Cross-Validation</h3>
        <p style={S.p}>
          Divide-se o dataset em <InlineMath math="K" /> partições ("folds") de tamanho aproximadamente igual.
          Em cada uma das <InlineMath math="K" /> iterações, um fold diferente serve de validação e os
          restantes <InlineMath math="K-1" /> servem de treino. A métrica final é a média (e desvio-padrão)
          das <InlineMath math="K" /> métricas obtidas:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{CV}_{(K)} = \frac{1}{K} \sum_{i=1}^{K} \text{Erro}(\text{modelo treinado sem fold } i,\ \text{fold } i)" />
        </div>
        <KFoldDiagram />
        <p style={S.p}>
          <InlineMath math="K=5" /> ou <InlineMath math="K=10" /> são as escolhas mais comuns na prática —
          equilibram custo computacional (treinar <InlineMath math="K" /> modelos) com uma boa redução de
          variância na estimativa, face ao hold-out simples.
        </p>

        <h3 style={S.h3}>Stratified K-Fold</h3>
        <p style={S.p}>
          Numa tarefa de classificação, dividir os dados aleatoriamente pode produzir folds onde a proporção
          de classes difere significativamente da proporção global — especialmente problemático com classes
          minoritárias raras. O <strong>Stratified K-Fold</strong> garante que cada fold preserva
          (aproximadamente) a mesma proporção de cada classe que existe no dataset completo.
        </p>
        <StratifiedKFoldDiagram />

        <h3 style={S.h3}>Leave-One-Out Cross-Validation (LOOCV)</h3>
        <p style={S.p}>
          Caso particular do K-Fold em que <InlineMath math="K = N" /> (o número total de exemplos): em cada
          iteração, exactamente <strong>um</strong> exemplo é deixado de fora para validação, e o modelo é
          treinado com todos os restantes <InlineMath math="N-1" />.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{LOOCV} = \frac{1}{N} \sum_{i=1}^{N} \text{Erro}(\text{modelo treinado sem } x_i,\ x_i)" />
        </div>
        <p style={S.p}>
          O LOOCV usa a quantidade máxima possível de dados para treino em cada iteração (o que reduz o
          bias da estimativa), e é completamente determinístico (sem aleatoriedade na partição). Mas requer
          treinar <InlineMath math="N" /> modelos — para <InlineMath math="N" /> grande, isto pode ser
          computacionalmente proibitivo, e a estimativa pode ter <strong>variância elevada</strong> porque os
          <InlineMath math="N" /> conjuntos de treino são quase idênticos entre si (altamente correlacionados).
        </p>

        <h3 style={S.h3}>Nested Cross-Validation</h3>
        <p style={S.p}>
          Quando o objectivo não é apenas estimar a performance de um modelo já definido, mas também
          <strong> escolher hiperparâmetros</strong> (ex.: profundidade máxima de uma árvore, número de
          vizinhos no kNN, parâmetro de regularização), usar o mesmo conjunto de validação para escolher
          hiperparâmetros <em>e</em> para reportar a métrica final introduz um viés optimista — o modelo foi,
          de certa forma, "ajustado" a esse conjunto.
        </p>
        <NestedCVDiagram />
        <div style={S.note}>
          Regra geral: se vais fazer <strong>tuning de hiperparâmetros</strong>, usa Nested CV (ou, no mínimo,
          um conjunto de validação separado do conjunto de teste final) para obter uma estimativa honesta
          da performance de generalização.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Confusion Matrix & Worked Example === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Métricas para Problemas de Classificação</h2>
        <p style={S.p}>
          Para classificação binária, a <strong>matriz de confusão</strong> organiza as previsões do modelo
          em quatro categorias: Verdadeiros Positivos (TP), Falsos Positivos (FP), Falsos Negativos (FN) e
          Verdadeiros Negativos (TN). A partir destes quatro números derivam-se praticamente todas as
          métricas de classificação.
        </p>
        <p style={S.p}>
          Considere um classificador de e-mails (1 = spam, 0 = não-spam) avaliado em 100 e-mails de teste,
          com a seguinte matriz de confusão:
        </p>
        <ConfusionMatrixDiagram tp={40} fp={10} fn={5} tn={45} />

        <h3 style={S.h3}>Passo a Passo: Cálculo das Métricas</h3>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>1. Accuracy</strong> — fracção de previsões correctas:</p>
          <BlockMath math="\text{Accuracy} = \frac{TP+TN}{TP+TN+FP+FN} = \frac{40+45}{40+45+10+5} = \frac{85}{100} = 0.85" />

          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1.25rem' }}><strong>2. Precision</strong> — de tudo o que o modelo disse "spam", quanto era de facto spam:</p>
          <BlockMath math="\text{Precision} = \frac{TP}{TP+FP} = \frac{40}{40+10} = \frac{40}{50} = 0.80" />

          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1.25rem' }}><strong>3. Recall (Sensibilidade)</strong> — de todo o spam real, quanto o modelo detectou:</p>
          <BlockMath math="\text{Recall} = \frac{TP}{TP+FN} = \frac{40}{40+5} = \frac{40}{45} \approx 0.889" />

          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1.25rem' }}><strong>4. F1-Score</strong> — média harmónica entre Precision e Recall:</p>
          <BlockMath math="F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision}+\text{Recall}} = 2 \cdot \frac{0.80 \times 0.889}{0.80+0.889} \approx 0.842" />

          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1.25rem' }}><strong>5. Specificity</strong> — de todos os e-mails não-spam reais, quantos foram correctamente classificados:</p>
          <BlockMath math="\text{Specificity} = \frac{TN}{TN+FP} = \frac{45}{45+10} = \frac{45}{55} \approx 0.818" />
        
        <p style={S.p}>
          Note que a <strong>média harmónica</strong> usada no F1 penaliza mais fortemente valores baixos
          do que a média aritmética simples faria — um modelo com Precision = 0.80 e Recall = 0.889 obtém
          F1 ≈ 0.842, ligeiramente abaixo da média aritmética (0.845), porque o F1 "pune" o desequilíbrio
          entre as duas métricas.
        </p>

        <h3 style={S.h3}>Tabela-Resumo das Métricas Básicas</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Métrica</th><th style={S.th}>Fórmula</th><th style={S.th}>Valor (exemplo)</th><th style={S.th}>Interpretação</th></tr>
            </thead>
            <tbody>
              {[
                ['Accuracy', '(TP+TN)/Total', '0.85', '85% das previsões estão correctas'],
                ['Precision', 'TP/(TP+FP)', '0.80', '80% dos e-mails marcados como spam são de facto spam'],
                ['Recall', 'TP/(TP+FN)', '0.889', '88.9% do spam real foi detectado'],
                ['F1-Score', '2PR/(P+R)', '0.842', 'Equilíbrio entre Precision e Recall'],
                ['Specificity', 'TN/(TN+FP)', '0.818', '81.8% dos e-mails legítimos foram correctamente passados'],
              ].map(([m, f, v, i]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontSize: '0.82rem' }}>{f}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{v}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)' }}>{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Métricas Avançadas de Classificação === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Métricas Avançadas para Classes Desbalanceadas</h2>
        <p style={S.p}>
          A Accuracy pode ser extremamente enganadora quando as classes estão desbalanceadas. Considere um
          dataset com 99% de exemplos da classe "não-fraude" e 1% "fraude": um modelo trivial que prevê
          sempre "não-fraude" obtém 99% de Accuracy — sem nunca detectar uma única fraude. Para estes
          cenários, existem métricas mais robustas.
        </p>

        <h3 style={S.h3}>Cohen's Kappa</h3>
        <p style={S.p}>
          Mede o grau de concordância entre as previsões do modelo e os valores reais, <strong>corrigindo
          para a concordância esperada apenas por acaso</strong> (<InlineMath math="p_e" />):
        </p>
        <div style={S.math}>
          <BlockMath math="\kappa = \frac{p_o - p_e}{1 - p_e}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="p_o" /> é a accuracy observada e <InlineMath math="p_e" /> é a accuracy
          esperada se as previsões fossem feitas aleatoriamente, respeitando as proporções marginais de cada
          classe. <InlineMath math="\kappa = 1" /> indica concordância perfeita, <InlineMath math="\kappa = 0" /> indica
          concordância igual ao acaso, e valores negativos indicam concordância pior que aleatória.
        </p>

        <h3 style={S.h3}>Matthews Correlation Coefficient (MCC)</h3>
        <p style={S.p}>
          O MCC é considerado uma das métricas mais robustas para classificação binária, mesmo com classes
          muito desbalanceadas, porque usa <strong>todos os quatro</strong> valores da matriz de confusão de
          forma simétrica:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{MCC} = \frac{TP \cdot TN - FP \cdot FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}" />
        </div>
        <p style={S.p}>
          Varia entre <InlineMath math="-1" /> (previsão sempre errada) e <InlineMath math="+1" /> (previsão
          perfeita), com <InlineMath math="0" /> equivalente a uma previsão aleatória. Aplicando ao nosso
          exemplo (TP=40, FP=10, FN=5, TN=45):
        </p>
        
          <BlockMath math="\text{MCC} = \frac{(40)(45) - (10)(5)}{\sqrt{(50)(45)(55)(50)}} = \frac{1800-50}{\sqrt{6\,187\,500}} = \frac{1750}{2487.5} \approx 0.704" />
        

        <h3 style={S.h3}>Log Loss (Cross-Entropy)</h3>
        <p style={S.p}>
          Ao contrário das métricas anteriores — que usam apenas a classe prevista (0 ou 1) — o
          <strong> Log Loss</strong> avalia directamente as <strong>probabilidades</strong> previstas pelo
          modelo, penalizando fortemente previsões confiantes mas erradas:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Log Loss} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{p}_i) + (1-y_i)\log(1-\hat{p}_i)\right]" />
        </div>
        <p style={S.p}>
          Por exemplo, se o valor real é <InlineMath math="y=1" /> e o modelo prevê <InlineMath math="\hat{p}=0.99" />,
          a contribuição para a loss é <InlineMath math="-\log(0.99) \approx 0.01" /> (quase zero — previsão
          correcta e confiante). Mas se o modelo prevê <InlineMath math="\hat{p}=0.01" /> para o mesmo caso
          (<InlineMath math="y=1" />), a contribuição é <InlineMath math="-\log(0.01) \approx 4.6" /> — uma
          penalização muito severa por estar errado <em>e</em> confiante. Quanto menor o Log Loss, melhor;
          o valor mínimo é 0.
        </p>

        <h3 style={S.h3}>Tabela Comparativa</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Métrica</th><th style={S.th}>Range</th><th style={S.th}>Usa probabilidades?</th><th style={S.th}>Robusta a desbalanceamento?</th></tr>
            </thead>
            <tbody>
              {[
                ['Accuracy', '[0, 1]', 'Não', 'Não'],
                ["Cohen's Kappa", '[−1, 1]', 'Não', 'Parcialmente'],
                ['MCC', '[−1, 1]', 'Não', 'Sim'],
                ['Log Loss', '[0, ∞)', 'Sim', 'Parcialmente (sensível a outliers de confiança)'],
                ['F1-Score', '[0, 1]', 'Não', 'Sim (foca classe positiva)'],
              ].map(([m, r, p, b]) => (
                <tr key={m}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{r}</td>
                  <td style={S.td}>{p}</td>
                  <td style={S.td}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Para datasets fortemente desbalanceados, prefira <strong>MCC</strong> ou <strong>F1-score</strong> (focado
          na classe minoritária) em vez de Accuracy. Para avaliar a <strong>qualidade das probabilidades</strong>
          (não apenas das classes finais), use <strong>Log Loss</strong>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: ROC, AUC, Precision-Recall === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. ROC, AUC e Curva Precision-Recall</h2>
        <p style={S.p}>
          Muitos classificadores não produzem directamente "0" ou "1", mas sim uma <strong>probabilidade</strong> ou
          score contínuo, que depois é convertido numa classe através de um <strong>threshold</strong> (por
          defeito, 0.5). A escolha do threshold afecta directamente Precision e Recall — e a curva ROC
          mostra-nos como o classificador se comporta em <em>todos</em> os thresholds possíveis.
        </p>

        <h3 style={S.h3}>Exemplo Numérico: Construir uma Curva ROC</h3>
        <p style={S.p}>
          Considere 5 exemplos com os seus scores previstos pelo modelo e a classe real, ordenados por score
          decrescente. Vamos calcular TPR (Recall) e FPR para diferentes thresholds:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Threshold</th><th style={S.th}>Previsões "Positivo"</th><th style={S.th}>TP</th><th style={S.th}>FP</th><th style={S.th}>TPR = TP/(TP+FN)</th><th style={S.th}>FPR = FP/(FP+TN)</th></tr>
            </thead>
            <tbody>
              {[
                ['≥ 0.9', 'A (score 0.95)', '1', '0', '1/3 ≈ 0.33', '0/2 = 0'],
                ['≥ 0.7', 'A, B (0.80)', '2', '0', '2/3 ≈ 0.67', '0/2 = 0'],
                ['≥ 0.5', 'A, B, C (0.55)', '2', '1', '2/3 ≈ 0.67', '1/2 = 0.5'],
                ['≥ 0.3', 'A, B, C, D (0.40)', '3', '1', '3/3 = 1.0', '1/2 = 0.5'],
                ['≥ 0.0', 'todos (incl. E 0.10)', '3', '2', '3/3 = 1.0', '2/2 = 1.0'],
              ].map(([t, pred, tp, fp, tpr, fpr]) => (
                <tr key={t}>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{t}</td>
                  <td style={{ ...S.td, fontSize: '0.82rem' }}>{pred}</td>
                  <td style={S.td}>{tp}</td>
                  <td style={S.td}>{fp}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', color }}>{tpr}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316' }}>{fpr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          (3 exemplos positivos reais — A, B, D — e 2 negativos reais — C, E.) Plotando estes pares
          (FPR, TPR) e ligando-os do canto inferior-esquerdo (0,0) ao canto superior-direito (1,1), obtemos
          a curva ROC. A AUC pode ser calculada pela <strong>regra do trapézio</strong>, somando a área de
          cada segmento entre pontos consecutivos:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{AUC} \approx \sum_{i} \frac{(FPR_{i+1}-FPR_i)\cdot(TPR_{i+1}+TPR_i)}{2}" />
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Aplicando aos pontos (0,0) → (0,0.33) → (0.2,0.33) → (0.2,0.67) → (0.4,0.67) → (0.4,1) → (1,1):
          </p>
          <BlockMath math="\text{AUC} = \underbrace{0.2 \times 0.33}_{\text{passo 1}} + \underbrace{0.2 \times 0.67}_{\text{passo 2}} + \underbrace{0.6 \times 1.0}_{\text{passo 3}} = 0.066 + 0.134 + 0.6 = 0.8" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.75rem' }}>
            AUC = 0.8 — o classificador tem uma boa, mas não perfeita, capacidade de ordenar correctamente os
            exemplos positivos antes dos negativos (interpretação probabilística: se escolhermos
            aleatoriamente um exemplo positivo e um negativo, há 80% de probabilidade de o positivo receber
            um score mais alto).
          </p>
        
        <ROCCurveDiagram />

        <h3 style={S.h3}>Interpretação da AUC</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Valor de AUC</th><th style={S.th}>Interpretação</th></tr></thead>
            <tbody>
              {[
                ['1.0', 'Classificador perfeito — separa as classes em todos os thresholds'],
                ['0.9 – 1.0', 'Excelente capacidade discriminativa'],
                ['0.7 – 0.9', 'Boa / razoável'],
                ['0.5', 'Equivalente a adivinhar ao acaso'],
                ['< 0.5', 'Pior que aleatório (possivelmente as previsões estão "invertidas")'],
              ].map(([v, i]) => (
                <tr key={v}><td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color }}>{v}</td><td style={S.td}>{i}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Curva Precision-Recall</h3>
        <p style={S.p}>
          A AUC-ROC pode dar uma impressão demasiado optimista quando há muito mais negativos do que
          positivos, porque o FPR tem TN (muito grande) no denominador. A <strong>curva
          Precision-Recall</strong> (PR) evita os TN por completo, sendo a alternativa preferida em
          problemas com classes fortemente desbalanceadas.
        </p>
        <PRCurveDiagram />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Métricas de Regressão === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Métricas para Problemas de Regressão</h2>
        <p style={S.p}>
          Quando o output do modelo é um valor contínuo (não uma classe), usamos métricas que medem a
          distância entre as previsões <InlineMath math="\hat{y}_i" /> e os valores reais <InlineMath math="y_i" />.
        </p>

        <h3 style={S.h3}>Mean Absolute Error (MAE)</h3>
        <div style={S.math}>
          <BlockMath math="\text{MAE} = \frac{1}{N}\sum_{i=1}^{N} |y_i - \hat{y}_i|" />
        </div>
        <p style={S.p}>
          Mede o erro médio absoluto, na <strong>mesma unidade</strong> da variável alvo (ex.: euros, graus,
          anos). É robusto a outliers, pois não eleva os erros ao quadrado.
        </p>

        <h3 style={S.h3}>Mean Squared Error (MSE) e Root Mean Squared Error (RMSE)</h3>
        <div style={S.math}>
          <BlockMath math="\text{MSE} = \frac{1}{N}\sum_{i=1}^{N} (y_i - \hat{y}_i)^2 \qquad\qquad \text{RMSE} = \sqrt{\text{MSE}}" />
        </div>
        <p style={S.p}>
          O MSE eleva os erros ao quadrado, penalizando <strong>desproporcionalmente</strong> erros grandes
          (um erro de 10 pesa 100 vezes mais que um erro de 1). O RMSE devolve este valor à unidade original
          da variável (tirando a raiz quadrada), facilitando a interpretação.
        </p>

        <h3 style={S.h3}>Exemplo Numérico</h3>
        <p style={S.p}>Considere 4 previsões de preços de casas (em milhares de euros):</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Real (y)</th><th style={S.th}>Previsto (ŷ)</th><th style={S.th}>|y − ŷ|</th><th style={S.th}>(y − ŷ)²</th></tr></thead>
            <tbody>
              {[
                ['200', '210', '10', '100'],
                ['150', '140', '10', '100'],
                ['300', '330', '30', '900'],
                ['250', '245', '5', '25'],
              ].map(([y, yh, abs, sq], i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{y}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace' }}>{yh}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', color }}>{abs}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316' }}>{sq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <BlockMath math="\text{MAE} = \frac{10+10+30+5}{4} = \frac{55}{4} = 13.75 \text{ (mil euros)}" />
          <BlockMath math="\text{MSE} = \frac{100+100+900+25}{4} = \frac{1125}{4} = 281.25" />
          <BlockMath math="\text{RMSE} = \sqrt{281.25} \approx 16.77 \text{ (mil euros)}" />
        
        <p style={S.p}>
          Note que o <strong>RMSE (≈16.77) é maior que o MAE (13.75)</strong> — isto acontece sempre que há
          variação nos erros, e a diferença aumenta quando existem alguns erros grandes (como o erro de 30
          no terceiro exemplo, que domina o MSE devido ao quadrado).
        </p>

        <h3 style={S.h3}>Coeficiente de Determinação (R²)</h3>
        <p style={S.p}>
          O <InlineMath math="R^2" /> compara o erro do modelo com o erro de um modelo "ingénuo" que prevê
          sempre a <strong>média</strong> dos valores reais:
        </p>
        <div style={S.math}>
          <BlockMath math="R^2 = 1 - \frac{\sum_{i=1}^{N}(y_i - \hat{y}_i)^2}{\sum_{i=1}^{N}(y_i - \bar{y})^2} = 1 - \frac{\text{SS}_{res}}{\text{SS}_{tot}}" />
        </div>
        <p style={S.p}>
          <InlineMath math="R^2 = 1" /> significa previsões perfeitas; <InlineMath math="R^2 = 0" /> significa
          que o modelo é tão bom quanto prever sempre a média; <InlineMath math="R^2 < 0" /> significa que o
          modelo é <strong>pior</strong> do que prever a média (algo está muito errado).
        </p>
        <div style={S.note}>
          O R² é a métrica de regressão mais "intuitiva" para comunicar resultados — "o modelo explica X% da
          variância da variável alvo" — mas pode ser inflacionado artificialmente ao adicionar mais
          variáveis (mesmo irrelevantes). Para comparar modelos com diferentes números de variáveis, use o
          <strong> R² ajustado</strong>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Decision Table === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Que Métrica Usar? Tabela de Decisão</h2>
        <p style={S.p}>
          Com tantas métricas disponíveis, a pergunta mais importante não é "qual é a melhor métrica" — é
          <strong> "qual é a métrica certa para este problema"</strong>. A tabela seguinte resume as
          recomendações por cenário:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Cenário</th><th style={S.th}>Métrica(s) recomendada(s)</th><th style={S.th}>Porquê</th></tr>
            </thead>
            <tbody>
              {[
                ['Classificação, classes balanceadas', 'Accuracy, F1-score', 'Accuracy é interpretável e não enganosa quando as classes têm tamanhos semelhantes'],
                ['Classificação, classes desbalanceadas', 'F1, MCC, Precision-Recall, Balanced Accuracy', 'Accuracy esconde o mau desempenho na classe minoritária; estas métricas focam-se nela'],
                ['Custo de FP > custo de FN (ex.: spam, recomendações)', 'Precision', 'Falsos positivos (bloquear e-mail legítimo) são mais prejudiciais que falsos negativos'],
                ['Custo de FN > custo de FP (ex.: diagnóstico médico, fraude)', 'Recall (Sensibilidade)', 'Falsos negativos (doença não detectada) são inaceitáveis — minimizá-los é prioritário'],
                ['Comparar classificadores, threshold-independente', 'AUC-ROC', 'Avalia a capacidade de discriminação em todos os thresholds'],
                ['Avaliar qualidade de probabilidades previstas', 'Log Loss / Cross-Entropy', 'Penaliza previsões confiantes e erradas, ao contrário de métricas baseadas só na classe final'],
                ['Concordância vs. baseline aleatória', "Cohen's Kappa", 'Corrige a accuracy para a concordância esperada apenas por acaso'],
                ['Regressão, interpretação na unidade original', 'MAE, RMSE', 'Mantêm a unidade da variável alvo; RMSE penaliza mais os erros grandes'],
                ['Regressão, comunicar "% de variância explicada"', 'R² (ou R² ajustado)', 'Métrica relativa, fácil de comunicar a não-especialistas'],
                ['Ranking / sistemas de recomendação', 'AUC, Precision@K, NDCG', 'Importa a ordenação relativa dos itens, não apenas a classificação binária'],
              ].map(([s, m, w], i) => (
                <tr key={i}>
                  <td style={S.td}>{s}</td>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Síntese do Módulo</h2>
        <p style={S.p}>
          Avaliar um modelo correctamente é tão importante como o próprio algoritmo de aprendizagem — um
          modelo "óptimo" segundo uma métrica errada, ou validado de forma optimista, é uma falsa sensação
          de segurança que se desmorona em produção.
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>No Free Lunch: nenhum algoritmo é universalmente superior — a escolha depende do problema, validada empiricamente</li>
            <li>O erro total decompõe-se em <InlineMath math="\text{Bias}^2 + \text{Variância} + \text{Ruído}" /> — modelos simples têm alto bias, modelos complexos têm alta variância</li>
            <li>Learning curves diagnosticam se o problema é alto bias (ambas as curvas saturam alto) ou alta variância (grande gap treino-validação)</li>
            <li>Hold-out é rápido mas tem alta variância; K-Fold (e Stratified K-Fold para classificação) é o padrão; LOOCV é exaustivo mas caro; Nested CV é necessário quando há tuning de hiperparâmetros</li>
            <li>A matriz de confusão (TP, FP, FN, TN) é a base de Accuracy, Precision, Recall, F1 e Specificity</li>
            <li>Para classes desbalanceadas: prefira MCC, F1, Balanced Accuracy ou Precision-Recall em vez de Accuracy ou AUC-ROC</li>
            <li>Log Loss avalia a qualidade das probabilidades, não apenas a classe final</li>
            <li>Regressão: MAE (robusto), RMSE (penaliza erros grandes), R² (% de variância explicada)</li>
            <li>A escolha da métrica deve reflectir os custos reais de FP vs. FN no problema concreto</li>
          </ul>
        
      </div>
    </div>
  );
}
