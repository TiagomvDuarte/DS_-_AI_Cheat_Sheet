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

// === Diagram: Bias-Variance tradeoff curves ===
const BiasVarianceDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Erro de Treino e de Validação vs. Complexidade do Modelo</p>
    <svg viewBox="0 0 500 250" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Region labels (above the plot, no overlap with curves) */}
      <text x="100" y="14" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="700">Underfitting (high bias)</text>
      <text x="210" y="14" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Sweet Spot</text>
      <text x="365" y="14" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Overfitting (high variance)</text>

      <line x1="40" y1="210" x2="470" y2="210" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="40" y1="210" x2="40" y2="30" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="470" y="232" textAnchor="end" fill="var(--text-secondary)" fontSize="11">Complexidade do Modelo</text>
      <text x="15" y="30" textAnchor="start" fill="var(--text-secondary)" fontSize="11">Erro</text>

      {/* Regions */}
      <rect x="40" y="30" width="120" height="180" fill="rgba(2,132,199,0.08)" />
      <rect x="160" y="30" width="100" height="180" fill="rgba(16,185,129,0.10)" />
      <rect x="260" y="30" width="210" height="180" fill="rgba(74,158,237,0.10)" />

      {/* Training error curve (decreasing) */}
      <path d="M 40 190 C 120 110, 200 60, 470 30" fill="none" stroke={color} strokeWidth="2.5" />
      <text x="395" y="55" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Erro de Treino</text>

      {/* Validation error curve (U-shape) */}
      <path d="M 40 205 C 120 120, 190 85, 220 85 C 260 85, 330 120, 470 205" fill="none" stroke="#4a9eed" strokeWidth="2.5" />
      <text x="350" y="180" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">Erro de Validação</text>

      {/* Sweet spot marker */}
      <line x1="220" y1="30" x2="220" y2="210" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="220" cy="85" r="4" fill="#4a9eed" />
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
        <path d={valPath} fill="none" stroke="#4a9eed" strokeWidth="2.5" strokeDasharray="5,3" />
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
          noteColor="#0284c7"
        />
        <Plot
          title="Alta Variância (Overfitting)"
          trainPath={`M ${xToPx(5)} ${yToPx(5)} C ${xToPx(30)} ${yToPx(8)}, ${xToPx(60)} ${yToPx(12)}, ${xToPx(100)} ${yToPx(15)}`}
          valPath={`M ${xToPx(5)} ${yToPx(95)} C ${xToPx(30)} ${yToPx(75)}, ${xToPx(60)} ${yToPx(55)}, ${xToPx(100)} ${yToPx(45)}`}
          note="Grande gap entre treino e validação — mais dados de treino tendem a reduzir esse gap."
          noteColor="#4a9eed"
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
      <svg viewBox="0 0 460 235" style={{ maxWidth: '100%', height: 'auto' }}>
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
                    fill={isVal ? 'rgba(125,211,252,0.15)' : 'rgba(74,158,237,0.10)'}
                    stroke={isVal ? '#7dd3fc' : color}
                    strokeWidth="1.2"
                  />
                );
              })}
              {Array.from({ length: k }, (_, fold) => (
                <text key={fold} x={startX + fold * foldWidth + (foldWidth - 4) / 2} y={y + 18} textAnchor="middle" fontSize="9" fontWeight="700" fill={fold === iter ? '#7dd3fc' : color}>
                  {fold === iter ? 'val' : 'treino'}
                </text>
              ))}
            </g>
          );
        })}
        <text x="230" y="225" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">
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
                fill={cls === 'A' ? 'rgba(74,158,237,0.10)' : 'rgba(2,132,199,0.3)'}
                stroke={cls === 'A' ? color : '#4a9eed'} strokeWidth="1" />
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
                fill={cls === 'A' ? 'rgba(74,158,237,0.10)' : 'rgba(2,132,199,0.3)'}
                stroke={cls === 'A' ? color : '#4a9eed'} strokeWidth="1" />
            ))}
          </g>
        );
      })}
      <rect x="60" y="170" width="28" height="20" rx="3" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1" />
      <text x="95" y="184" fill="var(--text-secondary)" fontSize="10">Classe A (80%)</text>
      <rect x="200" y="170" width="28" height="20" rx="3" fill="rgba(2,132,199,0.3)" stroke="#0284c7" strokeWidth="1" />
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

      <rect x="40" y="46" width="120" height="150" rx="6" fill="rgba(74,158,237,0.10)" stroke={color} strokeWidth="1.2" />
      <text x="100" y="62" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">Outer Train</text>

      <rect x="170" y="46" width="100" height="150" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="220" y="62" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">Outer Test</text>
      <text x="220" y="170" textAnchor="middle" fill="#4a9eed" fontSize="8">(score final,</text>
      <text x="220" y="182" textAnchor="middle" fill="#4a9eed" fontSize="8">nunca usado p/ tuning)</text>

      {/* Inner CV inside outer train */}
      <rect x="50" y="78" width="100" height="100" rx="5" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="4,2" />
      <text x="100" y="94" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="700">Inner Loop</text>
      <text x="100" y="110" textAnchor="middle" fill="#0284c7" fontSize="8">(grid search /</text>
      <text x="100" y="124" textAnchor="middle" fill="#0284c7" fontSize="8">hyperparam tuning</text>
      <text x="100" y="138" textAnchor="middle" fill="#0284c7" fontSize="8">via K-Fold CV)</text>

      {/* Separate annotation box — outside the outer-loop dashed border */}
      <rect x="320" y="46" width="140" height="150" rx="6" fill="rgba(74,158,237,0.10)" stroke="#4a9eed" strokeWidth="1.2" />
      <text x="390" y="68" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">repetir p/ cada</text>
      <text x="390" y="82" textAnchor="middle" fill="#4a9eed" fontSize="9" fontWeight="700">partição outer</text>
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
    <svg viewBox="0 0 360 220" style={{ maxWidth: 380, width: '100%', height: 'auto', margin: '0 auto', display: 'block' }}>
      <text x="210" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">Valor Previsto</text>
      <text x="158" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Positivo</text>
      <text x="262" y="44" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Negativo</text>

      <text x="30" y="126" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700" transform="rotate(-90 30 126)">Valor Real</text>
      <text x="80" y="92" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Positivo</text>
      <text x="80" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Negativo</text>

      <rect x="110" y="55" width="96" height="68" rx="6" fill="rgba(74,158,237,0.28)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="158" y="90" textAnchor="middle" fill="#4a9eed" fontSize="20" fontWeight="800">{tp}</text>
      <text x="158" y="108" textAnchor="middle" fill="#4a9eed" fontSize="9">TP</text>

      <rect x="214" y="55" width="96" height="68" rx="6" fill="rgba(125,211,252,0.08)" stroke="#7dd3fc" strokeWidth="1.5" />
      <text x="262" y="90" textAnchor="middle" fill="#7dd3fc" fontSize="20" fontWeight="800">{fp}</text>
      <text x="262" y="108" textAnchor="middle" fill="#7dd3fc" fontSize="9">FP</text>

      <rect x="110" y="129" width="96" height="68" rx="6" fill="rgba(125,211,252,0.08)" stroke="#7dd3fc" strokeWidth="1.5" />
      <text x="158" y="164" textAnchor="middle" fill="#7dd3fc" fontSize="20" fontWeight="800">{fn}</text>
      <text x="158" y="182" textAnchor="middle" fill="#7dd3fc" fontSize="9">FN</text>

      <rect x="214" y="129" width="96" height="68" rx="6" fill="rgba(74,158,237,0.28)" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="262" y="164" textAnchor="middle" fill="#4a9eed" fontSize="20" fontWeight="800">{tn}</text>
      <text x="262" y="182" textAnchor="middle" fill="#4a9eed" fontSize="9">TN</text>
    </svg>
  </div>
);

// === Diagram: ROC Curve ===
const ROCCurveDiagram = () => {
  const w = 320, h = 280, pad = 40;
  const xToPx = (x) => pad + x * (w - 2 * pad);
  const yToPx = (y) => h - pad - y * (h - 2 * pad);
  // Smooth, realistic-looking ROC curve (illustrative — não os pontos do exemplo de 5 casos)
  const n = 60;
  const points = Array.from({ length: n + 1 }, (_, i) => {
    const x = i / n;
    const y = 1 - Math.pow(1 - x, 3.2);
    return [x, y];
  });
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xToPx(p[0]).toFixed(1)} ${yToPx(p[1]).toFixed(1)}`).join(' ');
  const areaD = pathD + ` L ${xToPx(1)} ${yToPx(0)} L ${xToPx(0)} ${yToPx(0)} Z`;

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curva ROC e Área Sob a Curva (AUC)</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto', width: 320 }}>
        {/* axes */}
        <line x1={pad} y1={h - pad} x2={w - 10} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={h - pad} x2={pad} y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={(w) / 2} y={h - 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">FPR (1 − Especificidade)</text>
        <text x="10" y={h / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="10" transform={`rotate(-90 10 ${h / 2})`}>TPR (Recall)</text>

        {/* diagonal random classifier */}
        <line x1={xToPx(0)} y1={yToPx(0)} x2={xToPx(1)} y2={yToPx(1)} stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* AUC shading */}
        <path d={areaD} fill="rgba(74,158,237,0.10)" stroke="none" />

        {/* ROC curve */}
        <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" />
        {points.filter((_, i) => i % 4 === 0).map(([x, y], i) => (
          <circle key={i} cx={xToPx(x)} cy={yToPx(y)} r="3" fill={color} />
        ))}

        {/* legend */}
        <line x1={pad + 10} y1={22} x2={pad + 32} y2={22} stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={pad + 38} y={26} fill="var(--text-secondary)" fontSize="9">aleatório (AUC=0.5)</text>
        <line x1={pad + 10} y1={38} x2={pad + 32} y2={38} stroke={color} strokeWidth="2.5" />
        <text x={pad + 38} y={42} fill={color} fontSize="9" fontWeight="700">modelo (AUC≈0.84)</text>

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
        tracejada representa um classificador aleatório (AUC = 0.5). Este exemplo é ilustrativo, com muitos
        thresholds; a secção seguinte mostra um cálculo manual de AUC com apenas 5 exemplos.
      </p>
    </div>
  );
};

// === Diagram: Precision-Recall Curve comparison ===
export default function ML5() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Módulo 04</div>
      <h1 style={S.h1}>Seleção e Validação de Modelos</h1>

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

      {/* === SECTION 5: ROC, AUC, Precision-Recall === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. ROC, AUC e Curva Precision-Recall</h2>
        <p style={S.p}>
          Muitos classificadores não produzem directamente "0" ou "1", mas sim uma <strong>probabilidade</strong> ou
          score contínuo, que depois é convertido numa classe através de um <strong>threshold</strong> (por
          defeito, 0.5). A escolha do threshold afecta directamente Precision e Recall — e a curva ROC
          mostra-nos como o classificador se comporta em <em>todos</em> os thresholds possíveis.
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

      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Métricas de Regressão === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Métricas para Problemas de Regressão</h2>
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
        <h2 style={S.h2}>6. Que Métrica Usar? Tabela de Decisão</h2>
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
</div>
  );
}
