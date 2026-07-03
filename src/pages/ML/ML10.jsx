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

// === Diagram: Bias-Variance tradeoff ===
const BiasVarianceDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Bias vs. Variância — Onde Actua Cada Ensemble</p>
    <svg viewBox="0 0 520 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrBV" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <text x="130" y="20" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="700">Alto Bias (underfit)</text>
      <circle cx="80" cy="70" r="3" fill="#f97316" /><circle cx="100" cy="75" r="3" fill="#f97316" />
      <circle cx="90" cy="60" r="3" fill="#f97316" /><circle cx="110" cy="65" r="3" fill="#f97316" />
      <line x1="40" y1="100" x2="220" y2="100" stroke="#f97316" strokeWidth="2.5" />
      <text x="130" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">modelo simples (ex.: stump)</text>
      <text x="130" y="145" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">→ Boosting reduz bias</text>

      <line x1="260" y1="20" x2="260" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />

      <text x="390" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="700">Alta Variância (overfit)</text>
      <path d="M 310 60 C 340 110, 360 30, 390 90 C 420 140, 440 50, 470 100" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
      <circle cx="320" cy="80" r="3" fill="#f59e0b" /><circle cx="350" cy="60" r="3" fill="#f59e0b" />
      <circle cx="380" cy="100" r="3" fill="#f59e0b" /><circle cx="420" cy="70" r="3" fill="#f59e0b" />
      <text x="390" y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">modelo complexo (ex.: árvore profunda)</text>
      <text x="390" y="145" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">→ Bagging reduz variância</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Os métodos de ensemble atacam os dois extremos do <strong>bias-variance tradeoff</strong> de formas
      diferentes. Modelos com <strong>alto bias</strong> (demasiado simples, "underfit") beneficiam de
      <strong> boosting</strong> — combinar sequencialmente vários modelos fracos para corrigir os erros
      acumulados. Modelos com <strong>alta variância</strong> (demasiado complexos, "overfit") beneficiam de
      <strong> bagging</strong> — treinar várias versões independentes em diferentes amostras e fazer a média,
      o que cancela ruído individual sem aumentar o bias.
    </p>
  </div>
);

// === Diagram: Bootstrapping / OOB ===
const BootstrapDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Amostragem Bootstrap (com Reposição)</p>
    <svg viewBox="0 0 520 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <rect x="200" y="10" width="120" height="30" rx="6" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
      <text x="260" y="29" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">D = {'{1,2,3,4,5}'}</text>

      {[
        { y: 75, label: "D'₁ = {2,1,1,5,3}", oob: '4' },
        { y: 115, label: "D'₂ = {4,5,2,2,4}", oob: '1, 3' },
        { y: 155, label: "D'₃ = {3,3,1,5,2}", oob: '4' },
      ].map((row, i) => (
        <line key={i} x1="260" y1="40" x2="120" y2={row.y - 12} stroke="#94a3b8" strokeWidth="1" />
      ))}
      {[
        { y: 75, label: "D'₁ = {2,1,1,5,3}", oob: '4' },
        { y: 115, label: "D'₂ = {4,5,2,2,4}", oob: '1, 3' },
        { y: 155, label: "D'₃ = {3,3,1,5,2}", oob: '4' },
      ].map((row, i) => (
        <g key={i}>
          <rect x="40" y={row.y - 14} width="180" height="26" rx="5" fill={`${color}10`} stroke={color} strokeWidth="1" />
          <text x="130" y={row.y + 3} textAnchor="middle" fill={color} fontSize="10" fontWeight="600">{row.label}</text>
          <rect x="240" y={row.y - 14} width="140" height="26" rx="5" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1" />
          <text x="310" y={row.y + 3} textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600">OOB = {'{' + row.oob + '}'}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Cada amostra bootstrap <InlineMath math="D'_t" /> tem o mesmo tamanho <InlineMath math="N" /> que o
      conjunto original <InlineMath math="D" />, mas é construída <strong>amostrando com reposição</strong> —
      o que significa que alguns exemplos aparecem repetidos e outros ficam de fora. Os exemplos que ficam
      de fora de uma dada amostra formam o conjunto <strong>out-of-bag (OOB)</strong> para essa árvore/modelo,
      e podem ser usados como um "conjunto de validação gratuito".
    </p>
  </div>
);

// === Diagram: Bagging full pipeline ===
const BaggingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Bagging — Bootstrap AGGregating</p>
    <svg viewBox="0 0 540 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <rect x="220" y="10" width="100" height="30" rx="6" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
      <text x="270" y="29" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Dataset D (N)</text>
      {[60, 160, 260, 360, 420].map((x, i) => (
        <line key={i} x1="270" y1="40" x2={x + 35} y2="75" stroke="#94a3b8" strokeWidth="1" />
      ))}
      {[60, 160, 260, 360, 420].map((x, i) => (
        <g key={i}>
          <rect x={x} y="75" width="70" height="24" rx="5" fill={`${color}10`} stroke={color} strokeWidth="1" />
          <text x={x + 35} y="91" textAnchor="middle" fill={color} fontSize="8" fontWeight="600">{`D'${i + 1}`}</text>
        </g>
      ))}
      {[60, 160, 260, 360, 420].map((x, i) => (
        <g key={i}>
          <line x1={x + 35} y1="99" x2={x + 35} y2="118" stroke="#94a3b8" strokeWidth="1" />
          <rect x={x} y="118" width="70" height="24" rx="5" fill="rgba(16,185,129,0.15)" stroke="#f97316" strokeWidth="1" />
          <text x={x + 35} y="134" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="600">{`h${i + 1}`}</text>
        </g>
      ))}
      {[60, 160, 260, 360, 420].map((x, i) => (
        <line key={i} x1={x + 35} y1="142" x2="270" y2="158" stroke="#94a3b8" strokeWidth="1" />
      ))}
      <rect x="195" y="158" width="150" height="16" rx="4" fill={color} />
      <text x="270" y="170" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">VOTO MAJORITÁRIO / MÉDIA</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Cada uma das <InlineMath math="T" /> amostras bootstrap <InlineMath math="D'_t" /> é usada para treinar
      um modelo <InlineMath math="h_t" /> de forma <strong>independente e em paralelo</strong> (todos os
      modelos podem ser treinados ao mesmo tempo, sem depender umas das outras). Para classificação, a
      predição final é o <strong>voto maioritário</strong> entre os <InlineMath math="h_t(x)" />; para
      regressão, é a <strong>média</strong> das previsões.
    </p>
  </div>
);

// === Diagram: Random Forest feature randomness ===
const RandomForestDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Random Forest — Dois Níveis de Aleatoriedade</p>
    <svg viewBox="0 0 540 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <rect x="20" y="20" width="240" height="60" rx="8" fill={`${color}10`} stroke={color} strokeWidth="1.2" />
      <text x="140" y="42" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">1. Amostragem de linhas (Bagging)</text>
      <text x="140" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">cada árvore vê um D'_t diferente</text>

      <rect x="280" y="20" width="240" height="60" rx="8" fill="rgba(16,185,129,0.10)" stroke="#f97316" strokeWidth="1.2" />
      <text x="400" y="42" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">2. Amostragem de colunas (Features)</text>
      <text x="400" y="62" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">em cada split, considerar só m de p features</text>

      <line x1="270" y1="80" x2="270" y2="105" stroke="#94a3b8" strokeWidth="1" />

      {[
        [40, 'Árvore 1\n(D\'₁, m feat.)'],
        [165, 'Árvore 2\n(D\'₂, m feat.)'],
        [290, 'Árvore 3\n(D\'₃, m feat.)'],
        [415, '...\nÁrvore T'],
      ].map(([x, label], i) => (
        <g key={i}>
          <rect x={x} y="110" width="100" height="50" rx="8" fill="rgba(245,158,11,0.10)" stroke="#f59e0b" strokeWidth="1.2" />
          {String(label).split('\n').map((l, li) => (
            <text key={li} x={x + 50} y={132 + li * 14} textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
        </g>
      ))}
      <rect x="195" y="175" width="150" height="16" rx="4" fill={color} />
      <text x="270" y="187" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">VOTO / MÉDIA</text>
      {[90, 215, 340, 465].map((x, i) => (
        <line key={i} x1={x} y1="160" x2="270" y2="175" stroke="#94a3b8" strokeWidth="1" />
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Uma Random Forest é Bagging aplicado a árvores de decisão, com um ingrediente adicional: em
      <strong> cada split</strong> de cada árvore, em vez de considerar todas as <InlineMath math="p" /> features
      disponíveis, considera-se apenas um <strong>subconjunto aleatório de tamanho m</strong> (tipicamente
      <InlineMath math="m \approx \sqrt{p}" /> para classificação ou <InlineMath math="m \approx p/3" /> para
      regressão). Isto <strong>decorrelaciona</strong> as árvores: sem esta restrição, se existir uma feature
      muito forte, quase todas as árvores a escolheriam no primeiro split, tornando-as muito semelhantes entre
      si — e a média/voto de modelos correlacionados reduz a variância muito menos do que a média de modelos
      independentes.
    </p>
  </div>
);

// === Diagram: AdaBoost weight evolution ===
const AdaBoostDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>AdaBoost — Reponderação Sequencial</p>
    <svg viewBox="0 0 540 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrAB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {[
        [50, 'Ronda 1\nh₁, pesos iguais', color],
        [220, 'Ronda 2\nh₂, erros de h₁ pesam mais', '#f97316'],
        [390, 'Ronda 3\nh₃, foco nos casos difíceis', '#f97316'],
      ].map(([x, label, c], i, arr) => (
        <g key={i}>
          <rect x={x} y="20" width="120" height="60" rx="8" fill={`${c}15`} stroke={c} strokeWidth="1.2" />
          {String(label).split('\n').map((l, li) => (
            <text key={li} x={x + 60} y={42 + li * 16} textAnchor="middle" fill={c} fontSize="10" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
          {i < arr.length - 1 && (
            <line x1={x + 120} y1="50" x2={arr[i + 1][0] - 5} y2="50" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrAB)" />
          )}
        </g>
      ))}
      <rect x="100" y="120" width="340" height="16" rx="4" fill={color} />
      <text x="270" y="132" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">H(x) = sign( Σ αₜ · hₜ(x) )</text>
      {[110, 280, 450].map((x, i) => (
        <line key={i} x1={x} y1="80" x2={270} y2="120" stroke="#94a3b8" strokeWidth="1" />
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Em cada ronda, o AdaBoost <strong>aumenta o peso</strong> dos exemplos que o classificador anterior
      classificou mal, forçando o próximo classificador fraco a "prestar mais atenção" a esses casos. O
      classificador final é uma <strong>soma ponderada</strong> de todos os classificadores fracos, em que
      classificadores mais precisos (erro ponderado menor) recebem um peso <InlineMath math="\alpha_t" /> maior.
    </p>
  </div>
);

// === Diagram: Gradient Boosting residual fitting ===
const GradientBoostingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Gradient Boosting — Ajustar os Resíduos</p>
    <svg viewBox="0 0 580 170" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrGB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {[
        [20, 'F₀(x)\n= previsão\ninicial (média)', color],
        [160, 'r₁ = y − F₀\nárvore h₁\nfit nos resíduos', '#f97316'],
        [300, 'r₂ = y − F₁\nárvore h₂\nfit no novo resíduo', '#f97316'],
        [440, 'F_M(x)\nprevisão\nfinal', '#f97316'],
      ].map(([x, label, c], i, arr) => (
        <g key={i}>
          <rect x={x} y="20" width="100" height="80" rx="8" fill={`${c}15`} stroke={c} strokeWidth="1.2" />
          {String(label).split('\n').map((l, li) => (
            <text key={li} x={x + 50} y={42 + li * 15} textAnchor="middle" fill={c} fontSize="9" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
          {i < arr.length - 1 && (
            <line x1={x + 100} y1="60" x2={arr[i + 1][0] - 5} y2="60" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrGB)" />
          )}
        </g>
      ))}
      <text x="290" y="135" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">F_m(x) = F_{'{m-1}'}(x) + ν · h_m(x)</text>
      <text x="290" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">ν = learning rate (taxa de aprendizagem, 0 &lt; ν ≤ 1)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Em vez de re-ponderar exemplos (como AdaBoost), o Gradient Boosting treina cada nova árvore para prever
      o <strong>resíduo</strong> (erro) do modelo acumulado até ao momento. A previsão final é a soma de todas
      as árvores, cada uma multiplicada por uma <strong>taxa de aprendizagem</strong> <InlineMath math="\nu" /> pequena
      (ex.: 0.01–0.3), que controla quão rápido o modelo "corrige" os erros — valores menores requerem mais
      árvores mas generalizam melhor.
    </p>
  </div>
);

// === Diagram: Level-wise (XGBoost) vs Leaf-wise (LightGBM) tree growth ===
const TreeGrowthDiagram = () => {
  const Node = ({ x, y, label, c, dim }) => (
    <g opacity={dim ? 0.35 : 1}>
      <rect x={x - 24} y={y - 13} width="48" height="26" rx="6" fill={`${c}18`} stroke={c} strokeWidth="1.3" />
      <text x={x} y={y + 4} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{label}</text>
    </g>
  );
  const Edge = ({ x1, y1, x2, y2, dim }) => (
    <line x1={x1} y1={y1 + 13} x2={x2} y2={y2 - 13} stroke="var(--text-secondary)" strokeWidth="1" opacity={dim ? 0.3 : 0.7} />
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Crescimento da Árvore: Level-wise (XGBoost, default) vs. Leaf-wise (LightGBM)</p>
      <svg viewBox="0 0 580 240" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Level-wise tree */}
        <text x="150" y="16" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Level-wise (por nível)</text>
        <Edge x1={150} y1={40} x2={100} y2={90} />
        <Edge x1={150} y1={40} x2={200} y2={90} />
        <Edge x1={100} y1={90} x2={75} y2={140} />
        <Edge x1={100} y1={90} x2={125} y2={140} />
        <Edge x1={200} y1={90} x2={175} y2={140} />
        <Edge x1={200} y1={90} x2={225} y2={140} />
        <Node x={150} y={40} label="raiz" c={color} />
        <Node x={100} y={90} label="split" c={color} />
        <Node x={200} y={90} label="split" c={color} />
        <Node x={75} y={140} label="folha" c={color} />
        <Node x={125} y={140} label="folha" c={color} />
        <Node x={175} y={140} label="folha" c={color} />
        <Node x={225} y={140} label="folha" c={color} />
        <text x="150" y="175" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Todos os nós do mesmo nível</text>
        <text x="150" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">são divididos antes de avançar</text>
        <text x="150" y="205" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">→ árvore simétrica/equilibrada</text>

        <line x1="290" y1="10" x2="290" y2="230" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />

        {/* Leaf-wise tree */}
        <text x="430" y="16" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">Leaf-wise (por folha)</text>
        <Edge x1={430} y1={40} x2={380} y2={90} />
        <Edge x1={430} y1={40} x2={480} y2={90} dim />
        <Edge x1={380} y1={90} x2={355} y2={140} />
        <Edge x1={380} y1={90} x2={405} y2={140} />
        <Edge x1={405} y1={140} x2={375} y2={190} />
        <Edge x1={405} y1={140} x2={440} y2={190} />
        <Node x={430} y={40} label="raiz" c="#f59e0b" />
        <Node x={380} y={90} label="split" c="#f59e0b" />
        <Node x={480} y={90} label="folha" c="#f59e0b" dim />
        <Node x={355} y={140} label="folha" c="#f59e0b" />
        <Node x={405} y={140} label="split" c="#f59e0b" />
        <Node x={375} y={190} label="folha" c="#f59e0b" />
        <Node x={440} y={190} label="folha" c="#f59e0b" />
        <text x="430" y="218" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Expande sempre a folha com</text>
        <text x="430" y="232" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">maior ganho → árvore assimétrica</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        No crescimento <strong>level-wise</strong> (estratégia "depth-wise" usada por defeito no XGBoost), o algoritmo
        expande <em>todas</em> as folhas de um nível antes de passar ao nível seguinte — resulta em árvores mais
        equilibradas, mas pode "perder tempo" a dividir folhas com pouco ganho só para manter a simetria. No
        crescimento <strong>leaf-wise</strong> (LightGBM), o algoritmo escolhe sempre, globalmente, a folha que
        produz a maior redução de erro (maior <InlineMath math="\Delta\text{Loss}" />) e divide só essa — converge
        mais rápido para uma loss baixa com menos folhas, mas pode criar árvores mais profundas e assimétricas,
        por isso o LightGBM impõe um <InlineMath math="\text{max\_depth}" /> para controlar overfitting.
      </p>
    </div>
  );
};

// === Diagram: Histogram-based split finding (LightGBM/XGBoost hist) ===
const HistogramBinningDiagram = () => {
  const heights = [2, 4, 8, 7, 5, 9, 6, 3];
  const n = heights.length;
  const chartX = 40, chartW = 500, barGap = 4;
  const barW = chartW / n - barGap;
  const maxH = Math.max(...heights);
  const baseline = 195;
  const scale = 70 / maxH;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Histogram-Based Split Finding</p>
      <svg viewBox="0 0 580 225" style={{ maxWidth: '100%', height: 'auto' }}>
        <text x="290" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Valores contínuos de uma feature</text>
        {[60, 95, 130, 160, 200, 230, 270, 300, 340, 380, 410, 450, 480, 520].map((x, i) => (
          <circle key={i} cx={x} cy="35" r="3.5" fill={color} opacity="0.7" />
        ))}
        <line x1="40" y1="35" x2="540" y2="35" stroke="#94a3b8" strokeWidth="1" />
        {Array.from({ length: n + 1 }).map((_, i) => (
          <line key={i} x1={chartX + i * (barW + barGap)} y1="50" x2={chartX + i * (barW + barGap)} y2="60" stroke="var(--text-secondary)" strokeWidth="1" opacity="0.5" />
        ))}
        <text x="290" y="78" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">↓ discretizar em B bins (ex.: 255)</text>
        {heights.map((h, i) => {
          const x = chartX + i * (barW + barGap);
          const barH = h * scale;
          const isHighlight = i === 4;
          const c = isHighlight ? '#f97316' : color;
          return (
            <g key={i}>
              <rect x={x} y={baseline - barH} width={barW} height={barH} rx="3" fill={`${c}25`} stroke={c} strokeWidth="1.3" />
              <text x={x + barW / 2} y={baseline + 14} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">bin {i + 1}</text>
            </g>
          );
        })}
        <line x1={chartX + 4 * (barW + barGap) - barGap / 2} y1="95" x2={chartX + 4 * (barW + barGap) - barGap / 2} y2="200" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
        <text x={chartX + 4 * (barW + barGap) - barGap / 2 } y="220" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">candidato a split avaliado aqui</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Em vez de ordenar todos os valores de uma feature e avaliar o ganho em <strong>cada</strong> ponto possível
        (custoso para milhões de exemplos), o LightGBM (e o modo <InlineMath math="\texttt{hist}" /> do XGBoost)
        agrupa os valores contínuos em <InlineMath math="B" /> "bins" (tipicamente 255), construindo um histograma
        de gradientes/Hessianas por bin. O algoritmo de split passa a avaliar apenas as <InlineMath math="B-1" />
        fronteiras entre bins, em vez de até <InlineMath math="N-1" /> pontos — uma redução de complexidade de
        <InlineMath math="O(N)" /> para <InlineMath math="O(B)" /> por feature, com perda de precisão mínima.
      </p>
    </div>
  );
};

// === Diagram: Stacking architecture ===
const StackingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Stacking — Arquitectura em Dois Níveis</p>
    <svg viewBox="0 0 540 205" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrST" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      <rect x="220" y="10" width="100" height="28" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.2" />
      <text x="270" y="28" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Dados de treino X</text>

      {[
        [50, 'h₁\n(KNN)', '#f97316'],
        [180, 'h₂\n(Árvore)', '#f97316'],
        [310, 'h₃\n(SVM)', '#f97316'],
        [430, 'h₄\n(Linear)', '#f97316'],
      ].map(([x, label, c], i) => (
        <g key={i}>
          <line x1="270" y1="38" x2={x + 40} y2="60" stroke="#94a3b8" strokeWidth="1" />
          <rect x={x} y="60" width="80" height="40" rx="8" fill={`${c}15`} stroke={c} strokeWidth="1.2" />
          {String(label).split('\n').map((l, li) => (
            <text key={li} x={x + 40} y={80 + li * 14} textAnchor="middle" fill={c} fontSize="10" fontWeight={li === 0 ? '700' : '400'}>{l}</text>
          ))}
          <line x1={x + 40} y1="100" x2="270" y2="135" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrST)" />
        </g>
      ))}
      <text x="270" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">predições de nível 0 → novas features</text>
      <rect x="190" y="135" width="160" height="36" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
      <text x="270" y="158" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Meta-modelo (nível 1)</text>
      <line x1="270" y1="171" x2="270" y2="190" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrST)" />
      <text x="270" y="200" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">previsão final</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      No <strong>nível 0</strong>, vários modelos heterogéneos (diferentes algoritmos) são treinados nos
      dados originais. As suas previsões tornam-se as <strong>features de entrada</strong> de um
      <strong> meta-modelo</strong> no nível 1, que aprende a melhor forma de <em>combinar</em> as opiniões
      dos modelos base — potencialmente dando mais peso a alguns modelos em certas regiões do espaço de
      entrada. Para evitar overfitting/leakage, as previsões de nível 0 usadas para treinar o meta-modelo
      devem ser geradas com <strong>cross-validation</strong> (out-of-fold predictions).
    </p>
  </div>
);

// === Diagram: Voting hard vs soft ===
const VotingDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Voting — Hard vs. Soft</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', textAlign: 'left' }}>
      <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '0.9rem 1.1rem' }}>
        <p style={{ fontWeight: 700, color, margin: '0 0 0.5rem' }}>Hard Voting</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 0.4rem' }}>h₁ → A &nbsp; h₂ → A &nbsp; h₃ → B</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', margin: 0 }}>Classe vencedora: <strong>A</strong> (2 votos vs. 1)</p>
      </div>
      <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '0.9rem 1.1rem' }}>
        <p style={{ fontWeight: 700, color, margin: '0 0 0.5rem' }}>Soft Voting</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 0.4rem' }}>
          h₁: P(A)=0.55 &nbsp; h₂: P(A)=0.51 &nbsp; h₃: P(A)=0.10
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', margin: 0 }}>
          Média = (0.55+0.51+0.10)/3 ≈ 0.387 → Classe <strong>B</strong>
        </p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      Repare como, neste exemplo, <strong>hard voting</strong> escolheria a classe A (2 votos contra 1), mas
      <strong> soft voting</strong> escolhe B, porque os dois votos para A eram fracos (probabilidades perto
      de 0.5) enquanto o voto para B era muito confiante (0.90). Soft voting usa mais informação — desde que
      os classificadores produzam probabilidades bem calibradas.
    </p>
  </div>
);

export default function ML10() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 10</div>
      <h1 style={S.h1}>Ensemble Learning</h1>
      <p style={S.lead}>
        Em vez de treinar um único modelo e esperar que seja perfeito, e se combinássemos as previsões de
        muitos modelos diferentes? Esta é a ideia central do <strong>ensemble learning</strong>: a "sabedoria
        das multidões" aplicada a machine learning. Neste módulo vamos perceber porque é que combinar modelos
        funciona (ligando ao bias-variance tradeoff), explorar em detalhe o <strong>bagging</strong> (com
        bootstrapping, Random Forests e Extra Trees), o <strong>boosting</strong> (AdaBoost, Gradient
        Boosting, XGBoost e variantes modernas), e métodos de combinação como <strong>voting</strong> e
        <strong> stacking</strong> — terminando com uma tabela mestre que organiza toda a "zoologia" de
        ensembles.
      </p>

      {/* === SECTION 1: Bias-Variance === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Porque Funciona Combinar Modelos? Bias-Variance</h2>
        <p style={S.p}>
          O erro de generalização esperado de um modelo pode ser decomposto em três componentes:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathbb{E}[\text{Erro}] = \text{Bias}^2 + \text{Variância} + \text{Ruído}" />
        </div>
        <p style={S.p}>
          O <strong>bias</strong> mede o quão "errado em média" é o modelo devido a assunções demasiado
          simples (underfitting) — por exemplo, tentar ajustar uma recta a dados claramente não-lineares.
          A <strong>variância</strong> mede o quanto as previsões do modelo mudariam se fosse treinado em
          diferentes amostras dos mesmos dados — modelos muito flexíveis (árvores profundas) memorizam o
          ruído específico do conjunto de treino, generalizando mal (overfitting). O <strong>ruído</strong> é
          irredutível — variabilidade inerente aos dados que nenhum modelo pode eliminar.
        </p>
        <BiasVarianceDiagram />
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Regra-chave dos ensembles:</strong> <strong>Bagging</strong> (Bootstrap AGGregating) reduz
            principalmente a <strong>variância</strong>, fazendo a média de modelos com alta variância mas
            baixo bias. <strong>Boosting</strong> reduz principalmente o <strong>bias</strong>, combinando
            sequencialmente modelos fracos (alto bias, baixa variância) de forma a que o conjunto, no total,
            tenha bias muito menor.
          </p>
        </div>
        <div style={S.note}>
          <strong>Teorema do Júri de Condorcet</strong> (1785, aplicado a classificadores): se cada um de
          <InlineMath math="\ T" /> classificadores tem accuracy <InlineMath math="> 50\%" /> e os seus erros
          são independentes, então a accuracy do voto maioritário aumenta monotonamente com <InlineMath math="T" /> e
          converge para 100% quando <InlineMath math="T \to \infty" />. Na prática, os classificadores nunca
          são perfeitamente independentes — daí a importância de técnicas que promovam <strong>diversidade</strong>,
          como bootstrapping e selecção aleatória de features.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Bootstrapping === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Bootstrapping — Amostragem com Reposição</h2>
        <p style={S.p}>
          A base de quase todos os métodos de bagging é a <strong>amostra bootstrap</strong>: dado um conjunto
          de treino <InlineMath math="D" /> com <InlineMath math="N" /> exemplos, geramos uma nova amostra
          <InlineMath math="D'" /> também com <InlineMath math="N" /> exemplos, escolhidos
          <strong> aleatoriamente e com reposição</strong> de <InlineMath math="D" />. "Com reposição" significa
          que um exemplo pode ser escolhido várias vezes (ou nenhuma).
        </p>
        <BootstrapDiagram />

        <h3 style={S.h3}>Exemplo Numérico: Probabilidade de "Ficar de Fora" (OOB)</h3>
        <p style={S.p}>
          Considere um conjunto de treino com <InlineMath math="N" /> exemplos. A probabilidade de <strong>um
          exemplo específico não ser escolhido</strong> numa única extracção (de entre <InlineMath math="N" /> extracções
          com reposição) é:
        </p>
        <div style={S.math}>
          <BlockMath math="P(\text{não escolhido em 1 extracção}) = 1 - \frac{1}{N}" />
        </div>
        <p style={S.p}>
          Como são feitas <InlineMath math="N" /> extracções independentes (com reposição), a probabilidade de
          o exemplo nunca ser escolhido em nenhuma das <InlineMath math="N" /> extracções é:
        </p>
        
          <BlockMath math="P(\text{out-of-bag}) = \left(1 - \frac{1}{N}\right)^N" />
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>Quando <InlineMath math="N" /> é grande, este valor converge para:</p>
          <BlockMath math="\lim_{N \to \infty} \left(1 - \frac{1}{N}\right)^N = e^{-1} \approx 0.368" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Logo, em média <InlineMath math="\approx 36.8\%" /> dos exemplos originais ficam <strong>fora</strong> de
            cada amostra bootstrap (out-of-bag, OOB), e os restantes <InlineMath math="\approx 63.2\%" /> aparecem
            (alguns repetidos) na amostra.
          </p>
        
        <p style={S.p}>
          Para confirmar com um valor pequeno de <InlineMath math="N" />, considere <InlineMath math="N = 5" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\left(1 - \frac{1}{5}\right)^5 = (0.8)^5 \approx 0.328" />
        </div>
        <p style={S.p}>
          Já com <InlineMath math="N = 5" /> obtemos <InlineMath math="\approx 32.8\%" />, próximo do limite
          assimptótico de 36.8% — e este valor converge rapidamente: para <InlineMath math="N = 50" /> já
          obtemos <InlineMath math="\approx 36.4\%" />.
        </p>
        <div style={S.note}>
          O conjunto <strong>out-of-bag (OOB)</strong> funciona como um "conjunto de validação gratuito" — para
          cada exemplo, podemos avaliar as previsões apenas dos modelos cujo bootstrap <em>não</em> o incluiu,
          obtendo uma estimativa do erro de generalização sem precisar de um conjunto de validação separado
          nem de cross-validation.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Bagging === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Bagging (Breiman, 1994)</h2>
        <p style={S.p}>
          O <strong>Bagging</strong> (Bootstrap AGGregating), proposto por Leo Breiman em 1994, é o algoritmo
          mais directo: gerar <InlineMath math="T" /> amostras bootstrap, treinar um modelo independente em
          cada uma, e agregar as suas previsões.
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Para } t = 1, \dots, T: \quad D'_t \sim \text{Bootstrap}(D), \quad h_t = \text{treinar}(D'_t)" />
        </div>
        <div style={S.math}>
          <BlockMath math="H(x) = \begin{cases} \text{argmax}_y \sum_{t=1}^{T} \mathbb{1}[h_t(x) = y] & \text{(classificação — voto)} \\[6pt] \dfrac{1}{T}\sum_{t=1}^{T} h_t(x) & \text{(regressão — média)} \end{cases}" />
        </div>
        <BaggingDiagram />
        <p style={S.p}>
          Porque é que isto reduz a variância? Se cada modelo <InlineMath math="h_t" /> tem variância
          <InlineMath math="\sigma^2" /> e os modelos fossem completamente independentes, a variância da
          média de <InlineMath math="T" /> modelos seria <InlineMath math="\sigma^2 / T" /> — uma redução
          drástica. Na prática, os modelos não são independentes (são treinados em amostras do mesmo
          conjunto, com overlap), pelo que a redução real é menor, mas ainda substancial — sobretudo quando
          os modelos base têm alta variância individual (ex.: árvores profundas não-prunadas).
        </p>
        <div style={S.note}>
          O Bagging funciona melhor com modelos base de <strong>alta variância e baixo bias</strong> (árvores
          profundas, redes neuronais não regularizadas). Aplicar bagging a modelos já estáveis e de baixa
          variância (ex.: regressão linear, k-NN com k grande) traz poucos ou nenhuns ganhos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Random Forests & Extra Trees === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Random Forests &amp; Extra Trees</h2>
        <p style={S.p}>
          A <strong>Random Forest</strong> (Breiman, 2001) é Bagging aplicado especificamente a árvores de
          decisão, com um segundo mecanismo de aleatoriedade que aumenta ainda mais a diversidade entre as
          árvores.
        </p>
        <RandomForestDiagram />
        <h3 style={S.h3}>Porque a Aleatoriedade de Features Decorrelaciona Árvores</h3>
        <p style={S.p}>
          Se uma única feature for muito preditiva (ex.: "rendimento anual" para prever default de crédito),
          uma árvore de decisão sem restrições escolheria quase sempre essa feature no primeiro split. Sem
          aleatoriedade de features, mesmo com bootstrapping, muitas árvores acabariam estruturalmente muito
          semelhantes — fortemente <strong>correlacionadas</strong>. A média (ou voto) de modelos
          correlacionados reduz a variância muito menos do que a média de modelos independentes:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Var}\left(\frac{1}{T}\sum_{t=1}^T h_t\right) = \rho\sigma^2 + \frac{1-\rho}{T}\sigma^2" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\rho" /> é a correlação média entre pares de árvores e <InlineMath math="\sigma^2" /> a
          variância de cada árvore individual. Quando <InlineMath math="T \to \infty" />, o segundo termo
          desaparece, mas o primeiro termo <InlineMath math="\rho\sigma^2" /> permanece — por isso reduzir
          <InlineMath math="\rho" /> (a correlação) é tão valioso. Forçar cada split a considerar apenas
          <InlineMath math="m \ll p" /> features aleatórias reduz directamente <InlineMath math="\rho" />.
        </p>

        <h3 style={S.h3}>Feature Importance</h3>
        <p style={S.p}>
          Uma vantagem prática das Random Forests é fornecerem uma medida de <strong>importância de
          features</strong>: para cada feature, soma-se a redução de impureza (ex.: Gini ou MSE) que essa
          feature proporciona, ponderada pela proporção de exemplos que passam por cada split, em média sobre
          todas as árvores. Features que aparecem frequentemente perto da raiz das árvores e que produzem
          grandes reduções de impureza recebem importância alta — útil para selecção de features e
          interpretabilidade.
        </p>

        <h3 style={S.h3}>Extra Trees (Extremely Randomized Trees)</h3>
        <p style={S.p}>
          O <strong>Extra Trees</strong> (Geurts et al., 2006) leva a aleatoriedade ainda mais longe: em vez de
          procurar o <em>melhor</em> ponto de corte para cada feature candidata (como na Random Forest), o
          Extra Trees escolhe um ponto de corte <strong>aleatório</strong> para cada feature candidata, e
          depois selecciona a melhor dessas divisões aleatórias. Além disso, tipicamente usa o conjunto de
          dados completo (sem bootstrapping) em cada árvore. O resultado é um viés ligeiramente maior, mas uma
          variância ainda menor e treino mais rápido (não precisa de avaliar todos os pontos de corte
          possíveis).
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Random Forest</th><th style={S.th}>Extra Trees</th></tr></thead>
            <tbody>
              {[
                ['Amostragem de exemplos', 'Bootstrap (com reposição)', 'Geralmente dataset completo'],
                ['Ponto de corte por feature', 'Óptimo (procura exaustiva)', 'Aleatório'],
                ['Variância', 'Baixa', 'Mais baixa ainda'],
                ['Bias', 'Baixo', 'Ligeiramente maior'],
                ['Custo computacional', 'Maior (procura de splits)', 'Menor'],
              ].map(([a, r, e], i) => (
                <tr key={i}><td style={{ ...S.td, fontWeight: 700 }}>{a}</td><td style={S.td}>{r}</td><td style={S.td}>{e}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: AdaBoost === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. AdaBoost — Adaptive Boosting</h2>
        <p style={S.p}>
          O <strong>AdaBoost</strong> (Freund &amp; Schapire, 1996) foi o primeiro algoritmo de boosting
          prático e influente. A ideia: treinar uma sequência de classificadores fracos (ex.: "decision
          stumps" — árvores com apenas um nível), onde cada classificador é treinado para corrigir os erros
          do anterior, através de <strong>re-ponderação dos exemplos</strong>.
        </p>
        <AdaBoostDiagram />

        <h3 style={S.h3}>Algoritmo</h3>
        <div style={S.math}>
          <BlockMath math="w_i^{(1)} = \frac{1}{N} \quad \text{para todos os } i = 1, \dots, N" />
        </div>
        <p style={S.p}>Para cada ronda <InlineMath math="t = 1, \dots, T" />:</p>
        <div style={S.math}>
          <BlockMath math="\varepsilon_t = \sum_{i=1}^{N} w_i^{(t)} \cdot \mathbb{1}[h_t(x_i) \neq y_i] \quad \text{(erro ponderado)}" />
        </div>
        <div style={S.math}>
          <BlockMath math="\alpha_t = \frac{1}{2}\ln\left(\frac{1-\varepsilon_t}{\varepsilon_t}\right) \quad \text{(peso do classificador)}" />
        </div>
        <div style={S.math}>
          <BlockMath math="w_i^{(t+1)} = w_i^{(t)} \cdot e^{-\alpha_t \, y_i \, h_t(x_i)}, \quad \text{depois normalizar para somar 1}" />
        </div>
        <div style={S.math}>
          <BlockMath math="H(x) = \text{sign}\left(\sum_{t=1}^{T} \alpha_t h_t(x)\right)" />
        </div>

        <h3 style={S.h3}>Exemplo Numérico Completo (2 rondas)</h3>
        <p style={S.p}>
          Considere 6 pontos numa dimensão, com labels <InlineMath math="y_i \in \{-1, +1\}" />, e classificadores
          fracos do tipo "stump" (limiar num único atributo <InlineMath math="x" />):
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>i</th><th style={S.th}>x</th><th style={S.th}>y</th><th style={S.th}>w⁽¹⁾</th></tr></thead>
            <tbody>
              {[
                [1, '1', '+1', '1/6 ≈ 0.167'],
                [2, '2', '+1', '1/6 ≈ 0.167'],
                [3, '3', '+1', '1/6 ≈ 0.167'],
                [4, '4', '−1', '1/6 ≈ 0.167'],
                [5, '5', '−1', '1/6 ≈ 0.167'],
                [6, '6', '−1', '1/6 ≈ 0.167'],
              ].map(([i, x, y, w]) => (
                <tr key={i}><td style={S.td}>{i}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{x}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{y}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{w}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Ronda 1:</strong> suponha que o melhor stump é <InlineMath math="h_1(x) = +1 \text{ se } x < 3.5, \text{ senão } -1" />.</p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Este stump erra apenas no ponto 3 (<InlineMath math="x=3" />, prevê +1, correcto na verdade — vamos
            assumir que erra no ponto 4, prevendo +1 quando <InlineMath math="y_4 = -1" />, devido a ruído).
            Erro ponderado:
          </p>
          <BlockMath math="\varepsilon_1 = w_4^{(1)} = \frac{1}{6} \approx 0.167" />
          <BlockMath math="\alpha_1 = \frac{1}{2}\ln\left(\frac{1-0.167}{0.167}\right) = \frac{1}{2}\ln(5) \approx 0.805" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '0.75rem' }}>
            Actualização de pesos: para o ponto 4 (mal classificado), o peso <strong>aumenta</strong>; para os
            restantes (bem classificados), <strong>diminui</strong>:
          </p>
          <BlockMath math="w_4^{(2)} \propto w_4^{(1)} \cdot e^{+\alpha_1} = 0.167 \times e^{0.805} \approx 0.372" />
          <BlockMath math="w_i^{(2)} \propto w_i^{(1)} \cdot e^{-\alpha_1} = 0.167 \times e^{-0.805} \approx 0.075 \ \ (i \neq 4)" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.75rem' }}>
            Normalizando (soma <InlineMath math="\approx 0.372 + 5 \times 0.075 = 0.747" />):
            <InlineMath math="\ w_4^{(2)} \approx 0.498" />, <InlineMath math="w_i^{(2)} \approx 0.100" /> para os
            restantes. O ponto 4 passou a ter quase metade do peso total — o próximo classificador é forçado a
            tentar acertá-lo.
          </p>
        

        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Ronda 2:</strong> com os novos pesos, suponha que o melhor stump passa a ser
            <InlineMath math="\ h_2(x) = -1 \text{ se } x < 4.5, \text{ senão } -1" /> ajustado de forma a
            classificar correctamente o ponto 4, mas errando agora no ponto 1 (peso 0.100).
          </p>
          <BlockMath math="\varepsilon_2 = w_1^{(2)} \approx 0.100" />
          <BlockMath math="\alpha_2 = \frac{1}{2}\ln\left(\frac{1-0.100}{0.100}\right) = \frac{1}{2}\ln(9) \approx 1.099" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.75rem' }}>
            Note que <InlineMath math="\alpha_2 > \alpha_1" />: como <InlineMath math="h_2" /> tem um erro
            ponderado menor (0.100 vs 0.167), recebe <strong>mais confiança</strong> no voto final
            <InlineMath math="\ H(x) = \text{sign}(\alpha_1 h_1(x) + \alpha_2 h_2(x))" />.
          </p>
        
        <div style={S.note}>
          Se um classificador acertar sempre (<InlineMath math="\varepsilon_t = 0" />), <InlineMath math="\alpha_t \to \infty" />;
          se for tão bom como aleatório (<InlineMath math="\varepsilon_t = 0.5" />), <InlineMath math="\alpha_t = 0" /> (não
          contribui); se for sistematicamente pior que aleatório (<InlineMath math="\varepsilon_t > 0.5" />),
          <InlineMath math="\ \alpha_t < 0" /> — o algoritmo literalmente "inverte" as previsões desse classificador.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Gradient Boosting === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Gradient Boosting — Ajustar Resíduos</h2>
        <p style={S.p}>
          O <strong>Gradient Boosting</strong> generaliza a ideia do boosting: em vez de re-ponderar exemplos
          como o AdaBoost, cada nova árvore é treinada para prever o <strong>resíduo</strong> (erro residual)
          do modelo acumulado — ou, de forma mais geral, o <strong>gradiente negativo da função de perda</strong> em
          relação às previsões actuais (daí o nome).
        </p>
        <GradientBoostingDiagram />
        <div style={S.math}>
          <BlockMath math="F_0(x) = \bar{y} \quad \text{(previsão inicial — ex.: a média dos valores y)}" />
        </div>
        <p style={S.p}>Para cada iteração <InlineMath math="m = 1, \dots, M" />:</p>
        <div style={S.math}>
          <BlockMath math="r_i^{(m)} = y_i - F_{m-1}(x_i) \quad \text{(resíduo actual)}" />
        </div>
        <div style={S.math}>
          <BlockMath math="h_m = \text{treinar árvore a prever } r^{(m)} \text{ a partir de } x" />
        </div>
        <div style={S.math}>
          <BlockMath math="F_m(x) = F_{m-1}(x) + \nu \cdot h_m(x)" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\nu \in (0, 1]" /> é a <strong>taxa de aprendizagem</strong> (learning rate
          ou "shrinkage") — controla quanto cada nova árvore contribui para a previsão acumulada.
        </p>

        <h3 style={S.h3}>Exemplo Numérico Mini</h3>
        <p style={S.p}>
          Considere 4 exemplos com valor real <InlineMath math="y" />, e <InlineMath math="\nu = 0.5" />:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>i</th><th style={S.th}>y</th><th style={S.th}>F₀ (média)</th><th style={S.th}>r⁽¹⁾ = y − F₀</th></tr></thead>
            <tbody>
              {[
                [1, '10', '15', '−5'],
                [2, '20', '15', '+5'],
                [3, '12', '15', '−3'],
                [4, '18', '15', '+3'],
              ].map(([i, y, f0, r]) => (
                <tr key={i}><td style={S.td}>{i}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{y}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{f0}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{r}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Suponha que a árvore <InlineMath math="h_1" /> consegue separar perfeitamente os dois grupos
            (1,3) vs (2,4), prevendo <InlineMath math="h_1 = -4" /> para o grupo (1,3) e
            <InlineMath math="\ h_1 = +4" /> para o grupo (2,4) (a média dos resíduos de cada grupo).
            Actualização com <InlineMath math="\nu = 0.5" />:
          </p>
          <BlockMath math="F_1(x_1) = 15 + 0.5 \times (-4) = 13 \quad \Rightarrow \quad r_1^{(2)} = 10 - 13 = -3" />
          <BlockMath math="F_1(x_2) = 15 + 0.5 \times (+4) = 17 \quad \Rightarrow \quad r_2^{(2)} = 20 - 17 = +3" />
          <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem' }}>
            Os resíduos diminuíram de <InlineMath math="\pm 5/\pm3" /> para <InlineMath math="\pm 3" /> —
            o modelo está a aproximar-se de <InlineMath math="y" /> gradualmente. A próxima árvore
            <InlineMath math="\ h_2" /> seria treinada para prever estes novos resíduos
            <InlineMath math="\ r^{(2)}" />, e assim sucessivamente.
          </p>
        
        <div style={S.note}>
          Um <InlineMath math="\nu" /> pequeno (ex.: 0.01–0.1) requer muito mais árvores
          (<InlineMath math="M" /> grande) para convergir, mas tipicamente generaliza melhor — é o equivalente,
          em boosting, a "dar passos pequenos" no espaço de funções, evitando overfitting agressivo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: XGBoost, LightGBM, CatBoost === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. XGBoost, LightGBM e CatBoost</h2>
        <p style={S.p}>
          O Gradient Boosting "clássico" foi enormemente refinado por bibliotecas modernas que dominam
          competições de machine learning em dados tabulares. Todas partilham a ideia central de boosting
          aditivo, mas diferem em optimizações de engenharia e algoritmos:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Biblioteca</th>
                <th style={S.th}>Ano</th>
                <th style={S.th}>Inovação principal</th>
                <th style={S.th}>Detalhe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700, color }}>XGBoost</td>
                <td style={S.td}>2014</td>
                <td style={S.td}>Regularização explícita na função objectivo</td>
                <td style={S.td}>Adiciona <InlineMath math="\Omega(h) = \gamma T + \frac{1}{2}\lambda \|w\|^2" /> à perda — penaliza árvores com muitas folhas/pesos grandes; usa segunda derivada (Hessiana) para splits mais precisos</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700, color }}>LightGBM</td>
                <td style={S.td}>2017</td>
                <td style={S.td}>Histogram-based splits + crescimento "leaf-wise"</td>
                <td style={S.td}>Discretiza features contínuas em "bins" (histogramas) para encontrar splits muito mais rápido; cresce a árvore expandindo a folha com maior ganho (em vez de nível a nível) — mais rápido em datasets grandes</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700, color }}>CatBoost</td>
                <td style={S.td}>2017</td>
                <td style={S.td}>Tratamento nativo de variáveis categóricas</td>
                <td style={S.td}>Usa "ordered target statistics" para codificar categorias sem leakage, evitando one-hot encoding manual; também usa árvores simétricas (oblivious trees) para reduzir overfitting</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>XGBoost — Objectivo Regularizado e Split Gain de 2ª Ordem</h3>
        <p style={S.p}>
          A diferença fundamental do XGBoost para o Gradient Boosting "clássico" está na <strong>função
          objectivo</strong>, que passa a incluir explicitamente um termo de regularização sobre a complexidade
          de cada árvore:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathcal{L} = \sum_{i=1}^{n} \ell(y_i, \hat{y}_i) + \sum_{t=1}^{T} \Omega(h_t), \qquad \Omega(h) = \gamma T + \frac{1}{2}\lambda \sum_{j=1}^{T} w_j^2" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="T" /> é o número de folhas, <InlineMath math="w_j" /> o peso (previsão) de
          cada folha, <InlineMath math="\gamma" /> penaliza ter mais folhas (controla o tamanho da árvore) e
          <InlineMath math="\lambda" /> penaliza pesos grandes nas folhas (semelhante à Ridge). Em vez de
          calcular o resíduo simples como no Gradient Boosting clássico, o XGBoost expande a perda em série
          de Taylor de <strong>2ª ordem</strong> em torno da previsão actual, usando o gradiente
          <InlineMath math="g_i = \partial_{\hat{y}} \ell(y_i, \hat{y}_i)" /> e a Hessiana
          <InlineMath math="h_i = \partial^2_{\hat{y}} \ell(y_i, \hat{y}_i)" /> de cada exemplo. Isto permite
          derivar uma fórmula <em>exacta</em> para o ganho de um split que divide um conjunto de exemplos em
          folha esquerda (L) e direita (R):
        </p>
        <div style={S.math}>
          <BlockMath math="\text{Gain} = \frac{1}{2}\left[ \frac{G_L^2}{H_L + \lambda} + \frac{G_R^2}{H_R + \lambda} - \frac{G^2}{H + \lambda} \right] - \gamma" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="G_L = \sum_{i \in L} g_i" /> e <InlineMath math="H_L = \sum_{i \in L} h_i" />
          (e análogo para R e para o nó-pai não dividido). Um split só é aceite se <InlineMath math="\text{Gain} > 0" /> —
          ou seja, se a redução de perda compensar a penalização <InlineMath math="\gamma" /> por adicionar mais
          uma folha. Esta fórmula generaliza o cálculo de "ganho" para <strong>qualquer função de perda
          diferenciável</strong> (MSE, log loss, etc.), bastando trocar <InlineMath math="g_i" /> e
          <InlineMath math="h_i" />. Por defeito, o XGBoost cresce a árvore <strong>nível a nível</strong>
          (level-wise), embora também suporte o modo <InlineMath math="\texttt{hist}" /> com binning de
          features, semelhante ao LightGBM.
        </p>

        <h3 style={S.h3}>LightGBM — Crescimento Leaf-wise e Histogramas</h3>
        <p style={S.p}>
          O LightGBM introduz duas optimizações principais que o tornam tipicamente várias vezes mais rápido
          que o XGBoost original em datasets grandes, mantendo precisão semelhante:
        </p>
        <TreeGrowthDiagram />
        <HistogramBinningDiagram />
        <p style={S.p}>
          Adicionalmente, o LightGBM usa duas técnicas para reduzir ainda mais o custo computacional sem perder
          muita informação:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Técnica</th><th style={S.th}>Ideia</th></tr>
            </thead>
            <tbody>
              {[
                ['GOSS (Gradient-based One-Side Sampling)', 'Mantém todos os exemplos com gradiente grande (mal previstos — mais informativos) e amostra apenas uma fracção dos exemplos com gradiente pequeno, reescalando-os para manter a estimativa de ganho não-enviesada.'],
                ['EFB (Exclusive Feature Bundling)', 'Agrupa features esparsas que raramente são "não-zero" ao mesmo tempo (ex.: variáveis one-hot) num único "bundle", reduzindo o número efectivo de features sem perder informação.'],
              ].map(([t, d]) => (
                <tr key={t}><td style={{ ...S.td, fontWeight: 700, color }}>{t}</td><td style={S.td}>{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>CatBoost — Ordered Boosting e Árvores Simétricas</h3>
        <p style={S.p}>
          O CatBoost ataca dois problemas subtis do Gradient Boosting clássico: <strong>target leakage</strong> ao
          codificar variáveis categóricas, e o <strong>prediction shift</strong> causado por usar os mesmos dados
          para calcular estatísticas e para treinar.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Mecanismo</th><th style={S.th}>O que resolve</th></tr>
            </thead>
            <tbody>
              {[
                ['Ordered Target Statistics', 'Para codificar uma categoria, usa apenas a média do target de exemplos que aparecem "antes" dela numa permutação aleatória — evita que a categoria "veja" o seu próprio target durante o treino (leakage).'],
                ['Ordered Boosting', 'Treina múltiplos modelos sobre diferentes permutações dos dados, garantindo que o resíduo de cada exemplo é calculado por um modelo que não o usou — reduz o overfitting acumulado ao longo das iterações de boosting.'],
                ['Árvores Simétricas (Oblivious Trees)', 'Todos os nós do mesmo nível usam a mesma condição de split — a árvore fica simétrica, mais rápida de avaliar (paralelizável) e funciona como regularização implícita.'],
              ].map(([t, d]) => (
                <tr key={t}><td style={{ ...S.td, fontWeight: 700, color }}>{t}</td><td style={S.td}>{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={S.note}>
          Na prática, as três bibliotecas têm performance muito semelhante em muitos datasets — a escolha
          depende frequentemente de considerações práticas: LightGBM tende a ser o mais rápido em datasets
          grandes, CatBoost simplifica bastante o pipeline quando há muitas features categóricas, e XGBoost
          continua a ser o "default" mais robusto e amplamente suportado.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Voting === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Voting Classifiers — Hard vs. Soft</h2>
        <p style={S.p}>
          Um <strong>Voting Classifier</strong> é a forma mais simples de ensemble: treinar vários modelos
          diferentes (ex.: regressão logística, árvore de decisão, SVM) nos <em>mesmos</em> dados, e combinar
          as suas previsões.
        </p>

        <h3 style={S.h3}>Hard Voting</h3>
        <p style={S.p}>
          Cada modelo "vota" numa classe, e a classe com mais votos ganha:
        </p>
        <div style={S.math}>
          <BlockMath math="H(x) = \text{argmax}_y \sum_{t=1}^{T} \mathbb{1}[h_t(x) = y]" />
        </div>

        <h3 style={S.h3}>Soft Voting</h3>
        <p style={S.p}>
          Se os modelos produzirem <strong>probabilidades</strong>, em vez de apenas a classe prevista, é
          possível fazer a média dessas probabilidades e escolher a classe com maior probabilidade média:
        </p>
        <div style={S.math}>
          <BlockMath math="H(x) = \text{argmax}_y \frac{1}{T}\sum_{t=1}^{T} P_t(y \mid x)" />
        </div>
        <VotingDiagram />
        <div style={S.note}>
          Soft voting é geralmente preferível, desde que os modelos produzam probabilidades razoavelmente
          calibradas — porque usa a <strong>confiança</strong> de cada classificador, não apenas a sua decisão
          binária. Pode também ser <strong>ponderado</strong> (weighted voting), atribuindo pesos diferentes a
          cada modelo de acordo com a sua performance histórica.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Stacking === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Stacking — Meta-Classificadores</h2>
        <p style={S.p}>
          O <strong>Stacking</strong> (Stacked Generalization, Wolpert, 1992) leva a ideia de combinação um
          passo mais além: em vez de combinar previsões com uma regra fixa (voto, média), treina-se um
          <strong> meta-modelo</strong> que aprende, a partir dos dados, a melhor forma de combinar as
          previsões dos modelos base.
        </p>
        <StackingDiagram />
        <p style={S.p}>
          O cuidado principal no stacking é evitar <strong>data leakage</strong>: se o meta-modelo for treinado
          nas previsões que os modelos de nível 0 fizeram sobre os <em>mesmos</em> dados em que foram
          treinados, essas previsões estarão artificialmente "boas demais" (os modelos memorizaram esses
          exemplos). A solução padrão é usar <strong>cross-validation</strong> — para cada fold, treinar os
          modelos base nos restantes folds e gerar previsões "out-of-fold" para esse fold, que servem como
          features de treino honestas para o meta-modelo.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 10: Tabela mestre === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Tabela Mestre — Bagging vs. Boosting vs. Stacking vs. Voting</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Método</th>
                <th style={S.th}>Como treina os modelos base</th>
                <th style={S.th}>Como combina previsões</th>
                <th style={S.th}>Efeito bias/variância</th>
                <th style={S.th}>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Bagging', 'Em paralelo, em amostras bootstrap independentes', 'Voto maioritário / média', 'Reduz variância', 'Random Forest, Extra Trees'],
                ['Boosting', 'Sequencialmente, cada um corrige os erros do anterior', 'Soma ponderada (αₜ ou aditivo)', 'Reduz bias (e algo de variância)', 'AdaBoost, Gradient Boosting, XGBoost, LightGBM, CatBoost'],
                ['Voting', 'Em paralelo, modelos heterogéneos nos mesmos dados', 'Voto (hard) ou média de probabilidades (soft)', 'Reduz variância (se diversos)', 'VotingClassifier (sklearn)'],
                ['Stacking', 'Em paralelo (nível 0) + meta-modelo treinado sobre as previsões (nível 1)', 'Meta-modelo aprendido (não é uma regra fixa)', 'Pode reduzir bias e variância', 'StackingClassifier, ensembles de Kaggle'],
              ].map(([m, train, combine, effect, ex], i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{m}</td>
                  <td style={S.td}>{train}</td>
                  <td style={S.td}>{combine}</td>
                  <td style={S.td}>{effect}</td>
                  <td style={S.td}>{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Uma forma útil de pensar nestes quatro métodos: <strong>Bagging</strong> e <strong>Voting</strong> são
          "democráticos" — todos os modelos têm o mesmo tipo de voz (peso igual ou simples), treinados
          independentemente. <strong>Boosting</strong> é "meritocrático sequencial" — cada modelo é treinado em
          função do desempenho dos anteriores, e o seu voto final é ponderado pelo seu mérito. <strong>Stacking</strong> é
          o mais sofisticado — em vez de uma regra de combinação fixa, <em>aprende-se</em> a regra de
          combinação a partir dos dados.
        </div>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Síntese do Módulo</h2>
        <p style={S.p}>
          Ensemble learning parte de uma observação simples mas poderosa: combinar vários modelos imperfeitos
          mas diversos produz, quase sempre, um modelo final melhor do que qualquer um individualmente. A
          chave para entender <em>qual</em> técnica de ensemble usar está em perceber se o problema do modelo
          base é principalmente <strong>bias</strong> (usar boosting) ou <strong>variância</strong> (usar
          bagging).
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Erro = Bias² + Variância + Ruído — Bagging ataca a variância, Boosting ataca o bias</li>
            <li>Bootstrap: amostragem com reposição; em média ≈63.2% dos exemplos originais entram em cada amostra, ≈36.8% ficam out-of-bag (OOB), com <InlineMath math="(1-1/N)^N \to e^{-1}" /></li>
            <li>Bagging (Breiman 1994): T modelos independentes em amostras bootstrap, combinados por voto/média</li>
            <li>Random Forest = Bagging de árvores + amostragem aleatória de features em cada split, decorrelacionando árvores; Extra Trees vai mais longe com cortes aleatórios</li>
            <li>AdaBoost: re-pondera exemplos mal classificados; α_t = ½ln((1−ε_t)/ε_t) dá mais voz a classificadores melhores</li>
            <li>Gradient Boosting: cada árvore ajusta o resíduo do modelo acumulado, escalado por uma taxa de aprendizagem ν</li>
            <li>XGBoost (regularização), LightGBM (histogramas, leaf-wise), CatBoost (categóricas nativas) são evoluções de engenharia do Gradient Boosting</li>
            <li>Voting: hard (maioria de classes) vs. soft (média de probabilidades); Stacking: meta-modelo aprendido sobre previsões de nível 0, com cross-validation para evitar leakage</li>
          </ul>
        
      </div>
    </div>
  );
}
