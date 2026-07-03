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

// === Diagram 1: General DDT algorithm flow ===
const DDTFlowDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Algoritmo Geral de Construção de Árvores (DDT) — Top-Down Greedy</p>
    <svg viewBox="0 0 560 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrF1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>
      <rect x="20" y="20" width="160" height="50" rx="10" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="100" y="40" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Nó com conjunto D</text>
      <text x="100" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">de exemplos</text>

      <line x1="180" y1="45" x2="220" y2="45" stroke={color} strokeWidth="1.5" markerEnd="url(#arrF1)" />

      <rect x="220" y="20" width="160" height="50" rx="10" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="300" y="38" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">D é puro ou critério</text>
      <text x="300" y="56" textAnchor="middle" fill="#f59e0b" fontSize="9">de paragem satisfeito?</text>

      <line x1="320" y1="70" x2="320" y2="110" stroke={color} strokeWidth="1.5" markerEnd="url(#arrF1)" />
      <text x="335" y="95" fill="#f97316" fontSize="10" fontWeight="700">Sim</text>
      <rect x="240" y="110" width="160" height="46" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="138" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Criar nó-folha</text>

      <line x1="380" y1="45" x2="420" y2="45" stroke={color} strokeWidth="1.5" markerEnd="url(#arrF1)" />
      <rect x="420" y="20" width="130" height="180" rx="10" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" strokeDasharray="3,2" />
      <text x="392" y="29" fill="#f97316" fontSize="10" fontWeight="700">Não</text>
      <text x="485" y="40" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Para cada atributo A:</text>
      <text x="485" y="60" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">calcular medida de</text>
      <text x="485" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">qualidade do split</text>
      <text x="485" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="9"></text>
      <text x="485" y="98" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(InfoGain, Gini,</text>
      <text x="485" y="112" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">GainRatio, χ²...)</text>
      <text x="485" y="140" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Escolher A* com</text>
      <text x="485" y="154" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">melhor medida</text>
      <text x="485" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Dividir D em D₁..Dₖ</text>
      <text x="485" y="192" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">pelos valores de A*</text>

      <line x1="485" y1="200" x2="100" y2="200" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="200" x2="100" y2="70" stroke={color} strokeWidth="1.5" markerEnd="url(#arrF1)" />
      <text x="290" y="214" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">recursão: aplicar o mesmo procedimento a cada Dᵢ (sub-árvore)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Este é o esqueleto comum a <strong>ID3, C4.5, CART e CHAID</strong>: o algoritmo é <strong>guloso (greedy)</strong> —
      em cada nó escolhe-se o "melhor" atributo segundo uma métrica local, sem olhar para o impacto futuro — e
      <strong> top-down</strong> — a árvore cresce da raiz para as folhas, dividindo recursivamente o conjunto de
      treino. O que distingue os vários algoritmos é principalmente: (1) a <strong>métrica de qualidade do split</strong>
      (Entropia/Information Gain, Gini, Gain Ratio, χ²), (2) se os splits são <strong>binários</strong> ou
      <strong> multi-way</strong>, e (3) a <strong>estratégia de pruning</strong> aplicada.
    </p>
  </div>
);

// === Diagram 2: Play Tennis resulting decision tree (ID3, Information Gain) ===
const PlayTennisTreeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Árvore Resultante (ID3, Information Gain) — Dataset "Play Tennis"</p>
    <svg viewBox="0 0 500 230" style={{ maxWidth: '100%', height: 'auto' }}>
      <rect x="175" y="10" width="150" height="36" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="250" y="26" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Outlook</text>
      <text x="250" y="40" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">IG = 0.246 (maior)</text>

      <line x1="200" y1="46" x2="100" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="250" y1="46" x2="250" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="300" y1="46" x2="400" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="120" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Sunny</text>
      <text x="270" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Overcast</text>
      <text x="375" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">Rain</text>

      <rect x="50" y="90" width="100" height="36" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="100" y="106" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Humidity</text>
      <text x="100" y="119" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">IG = 0.971</text>

      <rect x="200" y="90" width="100" height="36" rx="7" fill="rgba(16,185,129,0.18)" stroke="#f97316" strokeWidth="1.5" />
      <text x="250" y="108" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">YES</text>
      <text x="250" y="121" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">[4 Yes / 0 No]</text>

      <rect x="350" y="90" width="100" height="36" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="400" y="106" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Wind</text>
      <text x="400" y="119" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">IG = 0.971</text>

      <line x1="80" y1="126" x2="50" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="120" y1="126" x2="155" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="32" y="152" fill="var(--text-secondary)" fontSize="8">High</text>
      <text x="145" y="152" fill="var(--text-secondary)" fontSize="8">Normal</text>
      <rect x="15" y="170" width="75" height="36" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="52" y="188" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">NO</text>
      <text x="52" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">[0 Yes / 2 No]</text>
      <rect x="115" y="170" width="75" height="36" rx="7" fill="rgba(16,185,129,0.18)" stroke="#f97316" strokeWidth="1.5" />
      <text x="152" y="188" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">YES</text>
      <text x="152" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">[2 Yes / 0 No]</text>

      <line x1="380" y1="126" x2="355" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="420" y1="126" x2="445" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="340" y="152" fill="var(--text-secondary)" fontSize="8">Weak</text>
      <text x="440" y="152" fill="var(--text-secondary)" fontSize="8">Strong</text>
      <rect x="315" y="170" width="75" height="36" rx="7" fill="rgba(16,185,129,0.18)" stroke="#f97316" strokeWidth="1.5" />
      <text x="352" y="188" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">YES</text>
      <text x="352" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">[3 Yes / 0 No]</text>
      <rect x="410" y="170" width="75" height="36" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="447" y="188" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">NO</text>
      <text x="447" y="200" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">[0 Yes / 2 No]</text>
    </svg>
  </div>
);

// === Diagram 3: Regression tree — step function fit ===
const RegressionTreeDiagram = () => {
  const w = 480, h = 220, pad = 30;
  const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ys = [2.1, 2.4, 2.0, 5.8, 6.1, 6.4, 5.9, 9.0, 9.4, 9.2];
  const xToPx = (x) => pad + ((x - 0.5) / 10) * (w - 2 * pad);
  const yToPx = (y) => h - pad - (y / 11) * (h - 2 * pad);
  // step function: split at x&lt;3.5 -> mean 2.17; 3.5<=x&lt;7.5 -> mean 6.05; x>=7.5 -> mean 9.2
  const steps = [
    { x1: 0.5, x2: 3.5, y: 2.17 },
    { x1: 3.5, x2: 7.5, y: 6.05 },
    { x1: 7.5, x2: 10.5, y: 9.2 },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Regression Tree — Função em "Degraus" (Step Function)</p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
        <text x={w - pad} y={h - pad + 16} textAnchor="end" fill="var(--text-secondary)" fontSize="10">x</text>
        <text x={pad - 6} y={pad} textAnchor="end" fill="var(--text-secondary)" fontSize="10">y</text>
        {xs.map((x, i) => (
          <circle key={i} cx={xToPx(x)} cy={yToPx(ys[i])} r="4" fill={color} />
        ))}
        {steps.map((s, i) => (
          <g key={i}>
            <line x1={xToPx(s.x1)} y1={yToPx(s.y)} x2={xToPx(s.x2)} y2={yToPx(s.y)} stroke="#f59e0b" strokeWidth="2.5" />
            {i > 0 && (
              <line x1={xToPx(s.x1)} y1={yToPx(steps[i - 1].y)} x2={xToPx(s.x1)} y2={yToPx(s.y)} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" />
            )}
          </g>
        ))}
        <text x={xToPx(2)} y={yToPx(2.17) - 10} textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">ŷ≈2.17</text>
        <text x={xToPx(5.5)} y={yToPx(6.05) - 10} textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">ŷ≈6.05</text>
        <text x={xToPx(9)} y={yToPx(9.2) - 10} textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">ŷ≈9.2</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Numa <strong>árvore de regressão</strong>, cada folha prevê o <strong>valor médio</strong> de
        <InlineMath math="\,y" /> dos exemplos de treino que caem nessa região. O resultado é uma função
        <strong> em escada (step function)</strong> que aproxima a relação real entre <InlineMath math="x" /> e
        <InlineMath math="y" />: mais cortes (mais profundidade) produzem mais "degraus" e uma aproximação mais
        fina — mas também maior risco de overfitting.
      </p>
    </div>
  );
};

// === Diagram 4: Gain Ratio bias example (many-valued attribute) ===
const GainRatioBiasDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Bias do Information Gain: "ID do Cliente" vs "Outlook"</p>
    <svg viewBox="0 0 520 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="130" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">Split por "Outlook" (3 valores)</text>
      <rect x="40" y="35" width="180" height="34" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="130" y="56" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Outlook</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1={70 + i * 60} y1="69" x2={70 + i * 60} y2="100" stroke="var(--text-secondary)" strokeWidth="1.2" />
          <rect x={45 + i * 60} y="100" width="50" height="30" rx="6" fill="rgba(16,185,129,0.15)" stroke="#f97316" strokeWidth="1.2" />
          <text x={70 + i * 60} y="119" textAnchor="middle" fill="#f97316" fontSize="9">subconj.</text>
        </g>
      ))}
      <text x="130" y="155" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">3 subconjuntos médios, cada um ainda misto</text>

      <line x1="270" y1="90" x2="270" y2="90" stroke="var(--text-secondary)" strokeWidth="1" />

      <text x="400" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">Split por "ID Cliente" (14 valores)</text>
      <rect x="310" y="35" width="180" height="34" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="400" y="56" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">ID Cliente</text>
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i}>
          <line x1={320 + i * 23} y1="69" x2={320 + i * 23} y2="95" stroke="var(--text-secondary)" strokeWidth="1" />
          <rect x={310 + i * 23} y="95" width="20" height="22" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
        </g>
      ))}
      <text x="400" y="135" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">14 subconjuntos, cada um com 1 exemplo</text>
      <text x="400" y="152" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">Entropy(Dᵥ) = 0 em todos → IG máximo!</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      O Information Gain favorece atributos com <strong>muitos valores distintos</strong>, mesmo que sejam
      inúteis para generalizar (como um identificador único). Um split por "ID Cliente" cria um subconjunto
      por exemplo — cada um perfeitamente puro (entropia 0) — produzindo o maior IG possível, mas uma árvore
      completamente <strong>inútil</strong> (memoriza o treino, não generaliza). O <strong>Gain Ratio</strong> (C4.5)
      corrige isto dividindo o IG pelo <InlineMath math="SplitInfo(A)" />, que é tanto maior quantos mais (e mais
      equilibrados) forem os subconjuntos — penalizando exactamente este tipo de split.
    </p>
  </div>
);

// === Diagram 5: Overfitting — jagged vs smooth decision boundary ===
const OverfitBoundaryDiagram = () => {
  const points = [
    [30, 40, '#f97316'], [60, 30, '#f97316'], [45, 70, '#f97316'], [80, 55, '#f97316'], [25, 90, '#f97316'],
    [120, 40, '#f97316'], [150, 60, '#f97316'], [170, 30, '#f97316'], [135, 90, '#f97316'], [165, 100, '#f97316'],
    [90, 95, '#f97316'], [110, 25, '#f97316'], [55, 110, '#f97316'], [145, 115, '#f97316'],
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Fronteira de Decisão: Árvore Totalmente Crescida vs. Podada</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <svg viewBox="0 0 200 140" width="220" height="154">
            <rect x="0" y="0" width="200" height="140" fill="rgba(16,185,129,0.06)" />
            {/* jagged boundary as many small rects */}
            <rect x="100" y="0" width="100" height="50" fill="rgba(249,115,22,0.10)" />
            <rect x="115" y="50" width="85" height="20" fill="rgba(249,115,22,0.10)" />
            <rect x="95" y="70" width="105" height="15" fill="rgba(249,115,22,0.10)" />
            <rect x="120" y="85" width="80" height="55" fill="rgba(249,115,22,0.10)" />
            <rect x="40" y="100" width="35" height="40" fill="rgba(16,185,129,0.0)" />
            <rect x="100" y="20" width="15" height="30" fill="rgba(16,185,129,0.10)" />
            {points.map(([x, y, c], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill={c} stroke="var(--bg-secondary)" strokeWidth="0.5" />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f97316', margin: 0 }}>Árvore profunda (overfit)</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>fronteira muito "irregular", acerta ruído</p>
        </div>
        <div>
          <svg viewBox="0 0 200 140" width="220" height="154">
            <rect x="0" y="0" width="200" height="140" fill="rgba(16,185,129,0.06)" />
            <rect x="105" y="0" width="95" height="140" fill="rgba(249,115,22,0.10)" />
            {points.map(([x, y, c], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill={c} stroke="var(--bg-secondary)" strokeWidth="0.5" />
            ))}
          </svg>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f97316', margin: 0 }}>Árvore podada (pruned)</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>fronteira simples, generaliza melhor</p>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        Uma árvore deixada crescer até cada folha ser perfeitamente pura tende a criar regiões muito pequenas e
        irregulares à volta de pontos isolados (ruído) — uma fronteira de decisão extremamente "recortada" que
        memoriza o treino mas generaliza mal. Ao <strong>podar</strong> a árvore (remover splits que não
        compensam em validação), obtemos uma fronteira muito mais simples — alguns exemplos de treino ficam mal
        classificados, mas o desempenho em dados novos costuma <strong>melhorar</strong>.
      </p>
    </div>
  );
};

// === Diagram 6: Full multi-level tree with class distributions in leaves ===
const FullTreeDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Árvore Multi-Nível com Distribuições de Classe nas Folhas</p>
    <svg viewBox="0 0 540 260" style={{ maxWidth: '100%', height: 'auto' }}>
      <rect x="200" y="10" width="140" height="38" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="270" y="33" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Income ≤ 50k?</text>

      <line x1="230" y1="48" x2="120" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="310" y1="48" x2="420" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="150" y="72" fill="var(--text-secondary)" fontSize="9">Sim</text>
      <text x="395" y="72" fill="var(--text-secondary)" fontSize="9">Não</text>

      <rect x="50" y="90" width="140" height="38" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="120" y="113" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Idade ≤ 30?</text>

      <rect x="350" y="90" width="140" height="38" rx="8" fill={`${color}1A`} stroke={color} strokeWidth="1.5" />
      <text x="420" y="113" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Dívida ≤ 2k?</text>

      <line x1="80" y1="128" x2="40" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="160" y1="128" x2="190" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="40" y="152" fill="var(--text-secondary)" fontSize="9">Sim</text>
      <text x="180" y="152" fill="var(--text-secondary)" fontSize="9">Não</text>

      <rect x="0" y="170" width="90" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="45" y="190" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">Não-pagador</text>
      <text x="45" y="205" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">[2 sim / 14 não]</text>

      <rect x="145" y="170" width="90" height="50" rx="7" fill="rgba(245,158,11,0.13)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="190" y="190" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="800">Misto</text>
      <text x="190" y="205" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">[6 sim / 5 não]</text>

      <line x1="380" y1="128" x2="340" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <line x1="460" y1="128" x2="490" y2="170" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="340" y="152" fill="var(--text-secondary)" fontSize="9">Sim</text>
      <text x="480" y="152" fill="var(--text-secondary)" fontSize="9">Não</text>

      <rect x="295" y="170" width="90" height="50" rx="7" fill="rgba(16,185,129,0.15)" stroke="#f97316" strokeWidth="1.5" />
      <text x="340" y="190" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">Pagador</text>
      <text x="340" y="205" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">[18 sim / 1 não]</text>

      <rect x="440" y="170" width="90" height="50" rx="7" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="485" y="190" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">Não-pagador</text>
      <text x="485" y="205" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">[3 sim / 11 não]</text>

      <text x="270" y="245" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">
        Cada folha mostra a distribuição [classe positiva / classe negativa] dos exemplos de treino que a alcançam —
      </text>
      <text x="270" y="258" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">
        a classe prevista é a maioritária; a "pureza" relativa é visível na proporção.
      </text>
    </svg>
  </div>
);

// === Diagram 7: continuous attribute threshold search ===
const ThresholdSearchDiagram = () => {
  const vals = [60, 65, 68, 70, 72, 75, 80, 85, 90, 95];
  const labels = ['N', 'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N'];
  const w = 480, pad = 30;
  const xToPx = (i) => pad + (i / (vals.length - 1)) * (w - 2 * pad);
  // candidate midpoints between class changes: between idx1-2 (65/68) and idx6-7 (80/85)
  const candidates = [1.5, 6.5];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Atributos Contínuos: Procura de Threshold (ex. Temperatura)</p>
      <svg viewBox={`0 0 ${w} 100`} style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1={pad} y1="50" x2={w - pad} y2="50" stroke="var(--text-secondary)" strokeWidth="1.5" />
        {vals.map((v, i) => (
          <g key={i}>
            <circle cx={xToPx(i)} cy="50" r="5" fill={labels[i] === 'Y' ? '#f97316' : '#f97316'} />
            <text x={xToPx(i)} y="40" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{v}</text>
            <text x={xToPx(i)} y="68" textAnchor="middle" fill={labels[i] === 'Y' ? '#f97316' : '#f97316'} fontSize="9" fontWeight="700">{labels[i]}</text>
          </g>
        ))}
        {candidates.map((c, i) => (
          <g key={i}>
            <line x1={xToPx(c)} y1="15" x2={xToPx(c)} y2="85" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x={xToPx(c)} y="95" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">candidato</text>
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Para um atributo numérico, <strong>ordenamos</strong> os valores observados e consideramos como
        candidatos a threshold apenas os <strong>pontos médios entre exemplos consecutivos onde a classe muda</strong> —
        não é necessário testar todos os pontos médios. Aqui, a classe muda entre 65→68 (candidato 66.5) e
        entre 80→85 (candidato 82.5). Para cada candidato <InlineMath math="t" />, avalia-se o split binário
        <InlineMath math="\,A \le t\,\text{ vs }\,A > t" /> com a mesma métrica (InfoGain, Gini, ...) usada para
        atributos categóricos, escolhendo o <InlineMath math="t" /> que maximiza essa métrica.
      </p>
    </div>
  );
};

export default function ML9() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 09</div>
      <h1 style={S.h1}>Árvores de Decisão</h1>
      <p style={S.lead}>
        As <strong>Árvores de Decisão</strong> (Decision Trees) são provavelmente o modelo de Machine Learning
        mais <strong>interpretável</strong>: a previsão para um exemplo é o resultado de uma sequência de
        perguntas simples ("Outlook é Sunny?", "Humidity é Normal?"), exactamente como um fluxograma. Neste
        módulo vamos construir o algoritmo geral de aprendizagem de árvores (top-down, greedy), explorar em
        detalhe as métricas usadas para escolher os splits — <strong>Entropia/Information Gain</strong> (ID3),
        <strong> Gain Ratio</strong> (C4.5), <strong>Gini Index</strong> (CART) e <strong>Chi-Squared</strong> (CHAID) —
        com exemplos numéricos completos sobre um pequeno dataset, estender as árvores a problemas de
        <strong> regressão</strong>, e terminar com as estratégias de <strong>pruning</strong> que controlam o
        overfitting, preparando o terreno para o Módulo 10 (Ensemble Learning), onde combinamos muitas árvores
        para obter modelos muito mais robustos.
      </p>

      {/* === SECTION 1: Algoritmo Geral === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O Algoritmo Geral — DDT (Decision Tree, Top-Down Greedy)</h2>
        <p style={S.p}>
          Todos os algoritmos clássicos de árvores de decisão (ID3, C4.5, CART, CHAID) partilham o mesmo
          esqueleto recursivo, a que podemos chamar genericamente <strong>DDT — Divide-and-conquer Decision
          Tree</strong>. A ideia central é simples: começamos com todos os exemplos de treino num único nó
          (a raiz) e, repetidamente, escolhemos o atributo que melhor <strong>separa as classes</strong> e
          dividimos os dados de acordo com os seus valores, criando sub-nós onde o processo se repete.
        </p>
        <DDTFlowDiagram />
        <h3 style={S.h3}>Critérios de Paragem</h3>
        <p style={S.p}>
          A recursão termina (criando uma folha) quando se verifica pelo menos uma das seguintes condições:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Critério</th><th style={S.th}>Descrição</th></tr></thead>
            <tbody>
              {[
                ['Nó puro', 'Todos os exemplos do nó pertencem à mesma classe → folha com essa classe'],
                ['Sem atributos restantes', 'Todos os atributos já foram usados no caminho até este nó → folha com a classe maioritária'],
                ['Conjunto vazio', 'Nenhum exemplo de treino chega a este nó → folha com a classe maioritária do nó-pai'],
                ['Critérios de pre-pruning', 'Profundidade máxima atingida, nº de exemplos abaixo de um mínimo, ou ganho de informação abaixo de um limiar (secção 7)'],
              ].map(([k, v]) => (
                <tr key={k}><td style={{ ...S.td, fontWeight: 700, color }}>{k}</td><td style={S.td}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          O carácter <strong>greedy</strong> (guloso) é a chave para entender tanto a eficiência como as
          limitações das árvores: cada decisão de split é tomada considerando apenas o nó actual, sem
          "olhar para a frente" para ver se uma escolha aparentemente pior agora levaria a uma árvore melhor
          no global. Isto torna o treino extremamente rápido, mas significa que a árvore resultante não é
          necessariamente óptima — apenas localmente óptima em cada passo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Entropia e Information Gain (ID3) === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Entropia e Information Gain — ID3</h2>
        <p style={S.p}>
          O algoritmo <strong>ID3</strong> (Iterative Dichotomiser 3), proposto por Ross Quinlan, foi o primeiro
          algoritmo de árvores de decisão amplamente usado e introduziu o critério de <strong>Information
          Gain</strong>, baseado no conceito de <strong>entropia</strong> da Teoria da Informação.
        </p>
        <h3 style={S.h3}>Entropia</h3>
        <p style={S.p}>
          A entropia de um conjunto <InlineMath math="D" /> com <InlineMath math="c" /> classes mede a sua
          "impureza" — quão misturadas estão as classes:
        </p>
        <div style={S.math}>
          <BlockMath math="Entropy(D) = -\sum_{i=1}^{c} p_i \log_2(p_i)" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="p_i" /> é a proporção de exemplos de <InlineMath math="D" /> que pertencem
          à classe <InlineMath math="i" />. A entropia varia entre <InlineMath math="0" /> (nó puro — todos os
          exemplos da mesma classe) e <InlineMath math="\log_2(c)" /> (máxima incerteza — classes
          igualmente distribuídas; para 2 classes, o máximo é <InlineMath math="1" />, atingido quando
          <InlineMath math="p_1 = p_2 = 0.5" />).
        </p>
        <h3 style={S.h3}>Information Gain</h3>
        <p style={S.p}>
          O <strong>Information Gain</strong> de um atributo <InlineMath math="A" /> mede a redução de entropia
          obtida ao dividir <InlineMath math="D" /> pelos valores de <InlineMath math="A" />:
        </p>
        <div style={S.math}>
          <BlockMath math="IG(D, A) = Entropy(D) - \sum_{v \in Values(A)} \frac{|D_v|}{|D|} \, Entropy(D_v)" />
        </div>
        <p style={S.p}>
          O ID3 escolhe, em cada nó, o atributo que <strong>maximiza</strong> <InlineMath math="IG(D, A)" />.
        </p>

        <h3 style={S.h3}>Exemplo Completo — Dataset "Play Tennis"</h3>
        <p style={S.p}>
          Vamos aplicar este critério a um dataset clássico: prever se se vai jogar ténis (Play) com base em
          condições meteorológicas. Considere as seguintes 10 observações:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>#</th><th style={S.th}>Outlook</th><th style={S.th}>Temperature</th><th style={S.th}>Humidity</th><th style={S.th}>Wind</th><th style={S.th}>Play</th></tr>
            </thead>
            <tbody>
              {[
                [1, 'Sunny', 'Hot', 'High', 'Weak', 'No'],
                [2, 'Sunny', 'Hot', 'High', 'Strong', 'No'],
                [3, 'Overcast', 'Hot', 'High', 'Weak', 'Yes'],
                [4, 'Rain', 'Mild', 'High', 'Weak', 'Yes'],
                [5, 'Rain', 'Cool', 'Normal', 'Weak', 'Yes'],
                [6, 'Rain', 'Cool', 'Normal', 'Strong', 'No'],
                [7, 'Overcast', 'Cool', 'Normal', 'Strong', 'Yes'],
                [8, 'Sunny', 'Mild', 'High', 'Weak', 'No'],
                [9, 'Sunny', 'Cool', 'Normal', 'Weak', 'Yes'],
                [10, 'Rain', 'Mild', 'Normal', 'Weak', 'Yes'],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => (
                    <td key={i} style={{ ...S.td, fontWeight: i === 5 ? 700 : 400, color: i === 5 ? (c === 'Yes' ? '#f97316' : '#f97316') : 'var(--text-primary)' }}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Temos <InlineMath math="6" /> exemplos "Yes" e <InlineMath math="4" /> exemplos "No" num total de
          <InlineMath math="10" />. A entropia da raiz é:
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Entropia do conjunto completo (raiz):</strong></p>
          <BlockMath math="Entropy(D) = -\frac{6}{10}\log_2\frac{6}{10} - \frac{4}{10}\log_2\frac{4}{10}" />
          <BlockMath math="Entropy(D) = -0.6 \times (-0.737) - 0.4 \times (-1.322) \approx 0.442 + 0.529 = 0.971" />
        

        <p style={S.p}>
          Agora calculamos o Information Gain de cada atributo. Comecemos por <strong>Outlook</strong>, que
          tem 3 valores: Sunny (4 exemplos: 1,2,8,9 → 1 Yes, 3 No), Overcast (2 exemplos: 3,7 → 2 Yes, 0 No),
          Rain (4 exemplos: 4,5,6,10 → 3 Yes, 1 No).
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Entropias dos subconjuntos de "Outlook":</strong></p>
          <BlockMath math="Entropy(D_{Sunny}) = -\tfrac{1}{4}\log_2\tfrac{1}{4} - \tfrac{3}{4}\log_2\tfrac{3}{4} \approx 0.811" />
          <BlockMath math="Entropy(D_{Overcast}) = -\tfrac{2}{2}\log_2\tfrac{2}{2} - 0 = 0" />
          <BlockMath math="Entropy(D_{Rain}) = -\tfrac{3}{4}\log_2\tfrac{3}{4} - \tfrac{1}{4}\log_2\tfrac{1}{4} \approx 0.811" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Information Gain de "Outlook":</strong></p>
          <BlockMath math="IG(D,\,Outlook) = 0.971 - \left(\tfrac{4}{10}(0.811) + \tfrac{2}{10}(0) + \tfrac{4}{10}(0.811)\right)" />
          <BlockMath math="IG(D,\,Outlook) = 0.971 - (0.324 + 0 + 0.324) = 0.971 - 0.649 = 0.322" />
        
        <p style={S.p}>
          Repetindo o mesmo cálculo para os restantes atributos (omitindo os passos intermédios, que seguem
          exactamente o mesmo padrão):
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Atributo</th><th style={S.th}>Information Gain</th></tr></thead>
            <tbody>
              {[
                ['Outlook', '0.322'],
                ['Humidity', '0.151'],
                ['Wind', '0.048'],
                ['Temperature', '0.029'],
              ].map(([a, g], i) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700, color: i === 0 ? color : 'var(--text-primary)' }}>{a}</td><td style={{ ...S.td, color: i === 0 ? color : 'var(--text-primary)', fontWeight: i === 0 ? 700 : 400 }}>{g}{i === 0 ? '  ← máximo' : ''}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          <strong>Outlook</strong> tem o maior Information Gain, por isso é escolhido como o atributo da raiz.
          O ramo "Overcast" já fica puro (Entropy = 0 → folha "Yes" directa). Para os ramos "Sunny" e "Rain",
          repetimos recursivamente o mesmo processo — calculando entropias e Information Gain apenas sobre os
          exemplos desse subconjunto e os atributos ainda não usados — até obtermos a árvore abaixo:
        </div>
        <PlayTennisTreeDiagram />
        <p style={S.p}>
          Note que, no exemplo, dentro do ramo "Sunny" o atributo <strong>Humidity</strong> separa
          perfeitamente os 4 exemplos (High → 0 Yes/2 No, Normal → 2 Yes/0 No), tal como <strong>Wind</strong> dentro
          do ramo "Rain" — por isso ambos os sub-ramos terminam em folhas puras após apenas mais um nível.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Gini Index (CART) === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Gini Index — CART</h2>
        <p style={S.p}>
          O algoritmo <strong>CART</strong> (Classification And Regression Trees) usa, para classificação, o
          <strong> Gini Index</strong> em vez da entropia. O Gini Index mede a probabilidade de classificar
          incorrectamente um exemplo escolhido aleatoriamente, se a sua classe fosse atribuída aleatoriamente
          segundo a distribuição de classes do nó:
        </p>
        <div style={S.math}>
          <BlockMath math="Gini(D) = 1 - \sum_{i=1}^{c} p_i^2" />
        </div>
        <p style={S.p}>
          Tal como a entropia, <InlineMath math="Gini(D) = 0" /> para um nó puro; para 2 classes, o máximo
          <InlineMath math="0.5" /> ocorre em <InlineMath math="p_1=p_2=0.5" />. A redução de Gini ao dividir
          por um atributo (análoga ao Information Gain) é:
        </p>
        <div style={S.math}>
          <BlockMath math="\Delta Gini(D, A) = Gini(D) - \sum_{v} \frac{|D_v|}{|D|} \, Gini(D_v)" />
        </div>
        <h3 style={S.h3}>Exemplo: Gini para a Raiz e para "Outlook"</h3>
        <p style={S.p}>
          Usando o mesmo dataset Play Tennis (6 Yes, 4 No na raiz):
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Gini da raiz:</strong></p>
          <BlockMath math="Gini(D) = 1 - \left(\tfrac{6}{10}\right)^2 - \left(\tfrac{4}{10}\right)^2 = 1 - 0.36 - 0.16 = 0.48" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Gini dos subconjuntos de "Outlook":</strong></p>
          <BlockMath math="Gini(D_{Sunny}) = 1 - \left(\tfrac{1}{4}\right)^2 - \left(\tfrac{3}{4}\right)^2 = 1 - 0.0625 - 0.5625 = 0.375" />
          <BlockMath math="Gini(D_{Overcast}) = 1 - 1^2 - 0^2 = 0" />
          <BlockMath math="Gini(D_{Rain}) = 1 - \left(\tfrac{3}{4}\right)^2 - \left(\tfrac{1}{4}\right)^2 = 0.375" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Redução de Gini de "Outlook":</strong></p>
          <BlockMath math="\Delta Gini = 0.48 - \left(\tfrac{4}{10}(0.375) + \tfrac{2}{10}(0) + \tfrac{4}{10}(0.375)\right) = 0.48 - 0.3 = 0.18" />
        
        <p style={S.p}>
          Comparando os dois critérios sobre os mesmos atributos:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Atributo</th><th style={S.th}>Information Gain</th><th style={S.th}>ΔGini</th><th style={S.th}>Atributo escolhido?</th></tr></thead>
            <tbody>
              {[
                ['Outlook', '0.322', '0.180', 'Sim (ambos)'],
                ['Humidity', '0.151', '0.080', 'Não'],
                ['Wind', '0.048', '0.020', 'Não'],
                ['Temperature', '0.029', '0.013', 'Não'],
              ].map(([a, g, gi, c], i) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700 }}>{a}</td><td style={S.td}>{g}</td><td style={S.td}>{gi}</td><td style={{ ...S.td, color: i === 0 ? '#f97316' : 'var(--text-secondary)', fontWeight: i === 0 ? 700 : 400 }}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Neste dataset, <strong>Information Gain e Gini Index concordam</strong> na escolha do melhor split
          ("Outlook" em ambos os casos) — isto é comum, já que ambas as métricas medem essencialmente
          "impureza" e tendem a estar fortemente correlacionadas. As diferenças tornam-se mais visíveis em
          datasets maiores, onde o Gini (sem logaritmos, mais rápido a calcular) tende a favorecer
          ligeiramente splits que isolam a classe mais frequente, enquanto a entropia é um pouco mais
          sensível a distribuições equilibradas entre várias classes.
        </div>
        <h3 style={S.h3}>Chi-Squared (CHAID)</h3>
        <p style={S.p}>
          O algoritmo <strong>CHAID</strong> (Chi-squared Automatic Interaction Detection) usa um teste
          estatístico — o <strong>teste do Qui-quadrado</strong> — para decidir se a diferença entre a
          distribuição de classes observada num split e a distribuição esperada (caso o atributo fosse
          irrelevante) é <strong>estatisticamente significativa</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="\chi^2 = \sum_{v}\sum_{i} \frac{(O_{vi} - E_{vi})^2}{E_{vi}}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="O_{vi}" /> é o número observado de exemplos da classe <InlineMath math="i" /> no
          ramo <InlineMath math="v" />, e <InlineMath math="E_{vi}" /> é o número <strong>esperado</strong> sob a
          hipótese nula de independência entre o atributo e a classe. Um split só é aceite se o <InlineMath math="\chi^2" />
          resultante exceder um valor crítico (associado a um nível de significância, tipicamente
          <InlineMath math="\alpha = 0.05" />) — funcionando como um <strong>critério de pre-pruning
          estatístico</strong> embutido no próprio processo de construção da árvore.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: C4.5 e Gain Ratio === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. C4.5 e o Gain Ratio — Corrigindo o Bias do Information Gain</h2>
        <p style={S.p}>
          O <strong>C4.5</strong>, sucessor do ID3 (também de Quinlan), introduziu várias melhorias: suporte
          para atributos contínuos (secção 8), tratamento de valores em falta, post-pruning baseado em erro
          (secção 7), e — mais relevante aqui — o <strong>Gain Ratio</strong>, que corrige um problema
          subtil do Information Gain.
        </p>
        <h3 style={S.h3}>O Problema: Bias para Atributos com Muitos Valores</h3>
        <p style={S.p}>
          O Information Gain tende a favorecer atributos que dividem os dados em <strong>muitos
          subconjuntos pequenos</strong>, simplesmente porque subconjuntos mais pequenos têm maior
          probabilidade de serem "puros" por acaso — mesmo que o atributo não tenha qualquer poder
          preditivo real.
        </p>
        <GainRatioBiasDiagram />
        <h3 style={S.h3}>A Solução: Gain Ratio</h3>
        <p style={S.p}>
          O C4.5 normaliza o Information Gain dividindo-o pelo <strong>Split Information</strong> — a
          entropia da própria distribuição de tamanhos dos subconjuntos (independentemente das classes):
        </p>
        <div style={S.math}>
          <BlockMath math="SplitInfo(D, A) = -\sum_{v} \frac{|D_v|}{|D|} \log_2 \frac{|D_v|}{|D|}" />
        </div>
        <div style={S.math}>
          <BlockMath math="GainRatio(D, A) = \frac{IG(D, A)}{SplitInfo(D, A)}" />
        </div>
        <p style={S.p}>
          Atributos que criam muitos subconjuntos pequenos têm <InlineMath math="SplitInfo" /> elevado
          (a distribuição de tamanhos é "uniforme" entre muitos grupos pequenos → alta entropia), o que
          <strong> reduz</strong> o Gain Ratio resultante — penalizando exactamente o tipo de split do
          exemplo "ID Cliente" acima.
        </p>
        <h3 style={S.h3}>Exemplo Numérico: "Outlook" vs Atributo Hipotético "ID"</h3>
        <p style={S.p}>
          Suponha um atributo hipotético "ID" que divide os 10 exemplos em 10 subconjuntos de tamanho 1
          (cada um perfeitamente puro, <InlineMath math="Entropy(D_v)=0" />). O Information Gain seria
          <InlineMath math="IG = 0.971 - 0 = 0.971" /> — muito maior que o de "Outlook" (0.322). Mas o
          Split Information de "ID" é:
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Split Info de "ID" (10 subconjuntos de tamanho 1/10):</strong></p>
          <BlockMath math="SplitInfo(D, ID) = -\sum_{i=1}^{10} \tfrac{1}{10}\log_2\tfrac{1}{10} = -10 \times \tfrac{1}{10} \times (-3.322) = 3.322" />
          <BlockMath math="GainRatio(D, ID) = \frac{0.971}{3.322} \approx 0.292" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Split Info de "Outlook" (4/10, 2/10, 4/10):</strong></p>
          <BlockMath math="SplitInfo(D, Outlook) = -\left(\tfrac{4}{10}\log_2\tfrac{4}{10} + \tfrac{2}{10}\log_2\tfrac{2}{10} + \tfrac{4}{10}\log_2\tfrac{4}{10}\right) \approx 1.522" />
          <BlockMath math="GainRatio(D, Outlook) = \frac{0.322}{1.522} \approx 0.212" />
        
        <div style={S.note}>
          Note como o Gain Ratio de "ID" (≈0.292) já não é tão dramaticamente superior ao de "Outlook"
          (≈0.212) como era o Information Gain (0.971 vs 0.322) — a penalização do <InlineMath math="SplitInfo" /> elevado
          reduz fortemente a vantagem artificial de "ID". (Na prática, o C4.5 ainda aplica uma regra adicional —
          só considera atributos cujo IG seja pelo menos a média dos IGs de todos os atributos — para evitar
          escolher atributos com SplitInfo muito próximo de zero, que tornariam o Gain Ratio instável.)
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Árvores de Regressão === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. CART para Regressão — Regression Trees</h2>
        <p style={S.p}>
          Até agora assumimos que a variável-alvo é categórica (classificação). Mas o CART também se aplica
          a variáveis-alvo <strong>contínuas</strong> — produzindo uma <strong>árvore de regressão</strong>.
          A estrutura é idêntica (splits binários recursivos), mas mudam dois aspectos: o <strong>critério de
          split</strong> e a <strong>previsão nas folhas</strong>.
        </p>
        <h3 style={S.h3}>Critério de Split: Redução de Variância (SSE)</h3>
        <p style={S.p}>
          Em vez de entropia ou Gini, usa-se a <strong>soma dos quadrados dos erros (SSE)</strong> — ou,
          equivalentemente, a variância — em torno da média de cada subconjunto:
        </p>
        <div style={S.math}>
          <BlockMath math="SSE(D) = \sum_{i \in D} (y_i - \bar{y}_D)^2" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\bar{y}_D" /> é a média de <InlineMath math="y" /> nos exemplos de
          <InlineMath math="D" />. Para um split de <InlineMath math="D" /> em <InlineMath math="D_L" /> e
          <InlineMath math="D_R" />, escolhe-se o atributo e threshold que <strong>minimizam</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="SSE(D_L) + SSE(D_R)" />
        </div>
        <p style={S.p}>
          ou, de forma equivalente, que <strong>maximizam a redução</strong> <InlineMath math="SSE(D) - \left(SSE(D_L) + SSE(D_R)\right)" />.
          Cada folha prevê o valor médio de <InlineMath math="y" /> dos exemplos de treino que nela caem.
        </p>

        <h3 style={S.h3}>Exemplo Numérico</h3>
        <p style={S.p}>
          Considere 10 pontos com valores de <InlineMath math="x \in \{1,...,10\}" /> e
          <InlineMath math="y" /> aproximadamente: <InlineMath math="2.1, 2.4, 2.0, 5.8, 6.1, 6.4, 5.9, 9.0, 9.4, 9.2" />.
          A média global é <InlineMath math="\bar{y} \approx 5.83" />, com
          <InlineMath math="SSE(D) \approx 110.6" />. Avaliando o split candidato
          <InlineMath math="x \le 3.5" />:
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Split em x ≤ 3.5:</strong></p>
          <BlockMath math="D_L = \{2.1, 2.4, 2.0\},\ \bar{y}_L \approx 2.17,\ SSE(D_L) \approx 0.087" />
          <BlockMath math="D_R = \{5.8, 6.1, 6.4, 5.9, 9.0, 9.4, 9.2\},\ \bar{y}_R \approx 7.40" />
          <BlockMath math="SSE(D_R) \approx 27.9" />
          <BlockMath math="SSE(D_L) + SSE(D_R) \approx 28.0 \quad\Rightarrow\quad \text{redução} \approx 110.6 - 28.0 = 82.6" />
        
        <p style={S.p}>
          Repetindo para outros candidatos (ex. <InlineMath math="x \le 7.5" />), encontra-se a combinação de
          splits que minimiza o SSE total — neste caso, dois cortes (em <InlineMath math="x\approx3.5" /> e
          <InlineMath math="x\approx7.5" />) produzem três regiões com médias aproximadamente 2.17, 6.05 e
          9.2, como mostrado abaixo:
        </p>
        <RegressionTreeDiagram />
        <div style={S.note}>
          Tal como em classificação, o critério de paragem para regressão pode incluir: profundidade máxima,
          número mínimo de exemplos por folha, ou uma redução de SSE mínima para justificar um novo split
          (pre-pruning). Sem estes limites, uma árvore de regressão pode crescer até ter uma folha por
          exemplo de treino — SSE = 0 no treino, mas overfitting severo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Atributos Contínuos === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Atributos Contínuos — Procura de Threshold</h2>
        <p style={S.p}>
          O ID3 original assumia atributos categóricos. Para suportar atributos <strong>numéricos
          contínuos</strong> (como "Temperature" em graus, em vez de "Hot/Mild/Cool"), o C4.5 e o CART
          convertem o problema num <strong>split binário</strong> da forma <InlineMath math="A \le t" /> vs
          <InlineMath math="A > t" />, procurando o melhor <strong>threshold</strong> <InlineMath math="t" />.
        </p>
        <h3 style={S.h3}>Procedimento</h3>
        <p style={S.p}>
          O procedimento padrão é:
        </p>
        
          <ol style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Ordenar os exemplos por valor do atributo <InlineMath math="A" />;</li>
            <li>Identificar os pontos onde a <strong>classe muda</strong> entre exemplos consecutivos;</li>
            <li>Para cada par de valores consecutivos onde a classe muda, calcular o <strong>ponto médio</strong> como threshold candidato;</li>
            <li>Avaliar a métrica de split (IG, Gini, ΔSSE, ...) para cada candidato, tratando o atributo como binário (<InlineMath math="\le t" /> / <InlineMath math="> t" />);</li>
            <li>Escolher o candidato com melhor valor da métrica.</li>
          </ol>
        
        <ThresholdSearchDiagram />
        <div style={S.note}>
          Esta restrição aos pontos onde a classe muda <strong>não perde optimalidade</strong>: pode
          demonstrar-se que o threshold óptimo está sempre num desses pontos médios — testar pontos médios
          dentro de uma sequência de exemplos da mesma classe nunca pode melhorar a métrica. Isto reduz
          drasticamente o número de candidatos a avaliar, especialmente em datasets com muitos exemplos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Overfitting e Pruning === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Overfitting e Pruning</h2>
        <p style={S.p}>
          Uma árvore de decisão deixada crescer livremente — até cada folha ser pura ou conter um único
          exemplo — irá tipicamente atingir <strong>0% de erro no conjunto de treino</strong>. Isto não é
          uma boa notícia: significa que a árvore memorizou particularidades (incluindo ruído) do conjunto
          de treino, em vez de capturar o padrão geral subjacente — o clássico problema de
          <strong> overfitting</strong>.
        </p>
        <OverfitBoundaryDiagram />
        <p style={S.p}>
          Existem duas famílias de estratégias para controlar este problema: <strong>pre-pruning</strong>
          (parar o crescimento mais cedo) e <strong>post-pruning</strong> (deixar crescer totalmente e depois
          simplificar).
        </p>
        <h3 style={S.h3}>Pre-Pruning (Paragem Antecipada)</h3>
        <p style={S.p}>
          O pre-pruning impõe critérios adicionais de paragem durante a construção da árvore, antes de um
          nó se tornar completamente puro:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Critério</th><th style={S.th}>Efeito</th></tr></thead>
            <tbody>
              {[
                ['max_depth', 'Limita o número máximo de níveis da árvore — controla directamente a complexidade'],
                ['min_samples_leaf', 'Um split só é permitido se ambos os ramos filhos tiverem pelo menos N exemplos'],
                ['min_samples_split', 'Um nó só é dividido se contiver pelo menos N exemplos'],
                ['min_information_gain', 'Um split só é aceite se o ganho (IG, ΔGini, ΔSSE) exceder um limiar mínimo'],
              ].map(([k, v]) => (
                <tr key={k}><td style={{ ...S.td, fontWeight: 700, color }}>{k}</td><td style={S.td}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={S.h3}>Post-Pruning (Simplificação Após Treino)</h3>
        <p style={S.p}>
          O post-pruning constrói primeiro a árvore completa (potencialmente sobre-ajustada) e depois remove
          ramos que não melhoram (ou até prejudicam) o desempenho num conjunto de validação separado.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Técnica</th><th style={S.th}>Como funciona</th></tr></thead>
            <tbody>
              {[
                ['Reduced Error Pruning', 'Para cada nó interno, testa substituí-lo por uma folha (com a classe/valor maioritário dos exemplos abaixo dele); se o erro em validação não piorar, a substituição é mantida — repetido bottom-up até não haver mais melhorias'],
                ['Cost-Complexity Pruning (CART)', 'Define uma função de custo Erro + α·(nº de folhas); para cada α, encontra-se a sub-árvore que minimiza este custo; α é escolhido por cross-validation, equilibrando ajuste vs. complexidade'],
              ].map(([k, v]) => (
                <tr key={k}><td style={{ ...S.td, fontWeight: 700, color }}>{k}</td><td style={S.td}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.math}>
          <BlockMath math="R_\alpha(T) = R(T) + \alpha \cdot |T|" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="R(T)" /> é o erro (de classificação ou SSE) da árvore <InlineMath math="T" /> no
          treino, <InlineMath math="|T|" /> é o número de folhas (uma medida de complexidade), e
          <InlineMath math="\alpha \ge 0" /> controla a força da penalização: <InlineMath math="\alpha=0" /> não
          poda nada (árvore completa); <InlineMath math="\alpha" /> grande poda agressivamente, aproximando-se
          de uma única folha (a raiz).
        </p>
        <h3 style={S.h3}>Pre-Pruning vs. Post-Pruning</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Aspecto</th><th style={S.th}>Pre-Pruning</th><th style={S.th}>Post-Pruning</th></tr></thead>
            <tbody>
              {[
                ['Custo computacional', 'Baixo — evita construir ramos desnecessários', 'Alto — constrói a árvore completa primeiro'],
                ['Risco de "horizon effect"', 'Sim — pode parar demasiado cedo, perdendo um split útil que só se revela mais tarde', 'Não — vê o efeito completo antes de decidir'],
                ['Qualidade típica', 'Boa, mas tipicamente inferior ao post-pruning', 'Geralmente melhor generalização'],
                ['Exemplo', 'max_depth, min_samples_leaf, χ² em CHAID', 'Reduced Error Pruning, Cost-Complexity (CART)'],
              ].map(([a, b, c]) => (
                <tr key={a}><td style={{ ...S.td, fontWeight: 700 }}>{a}</td><td style={S.td}>{b}</td><td style={S.td}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          O <strong>"horizon effect"</strong> é a razão principal pela qual o post-pruning tende a produzir
          árvores melhores: um split que, isoladamente, parece pouco útil (ganho pequeno) pode "abrir a
          porta" para splits muito úteis nos seus filhos — algo que o pre-pruning, ao decidir localmente e
          sem recursão, não consegue antecipar. Na prática, muitas implementações combinam ambas as
          estratégias: limites de pre-pruning generosos (para controlar o tempo/memória) seguidos de
          cost-complexity pruning.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Árvore Multi-Nível Completa === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Visualização: Árvore Multi-Nível com Distribuições nas Folhas</h2>
        <p style={S.p}>
          Para consolidar a estrutura geral, eis um exemplo de uma árvore de classificação binária (prever se
          um cliente vai pagar um empréstimo) com 3 níveis de profundidade. Cada nó interno mostra a
          condição de split escolhida; cada folha mostra a <strong>distribuição de classes</strong> dos
          exemplos de treino que a alcançam — esta distribuição é o que permite, por exemplo, calcular
          probabilidades em vez de apenas a classe maioritária.
        </p>
        <FullTreeDiagram />
        <p style={S.p}>
          Note como a folha "Pagador" (canto inferior direito do sub-ramo "Não") tem uma distribuição muito
          mais pura ([18/1]) do que a folha "Misto" ([6/5], quase 50/50). Numa árvore com pre-pruning mais
          permissivo, o ramo que leva à folha "Misto" provavelmente continuaria a dividir-se; com
          cost-complexity pruning, esse mesmo ramo poderia ser colapsado de novo numa única folha se o
          ganho não compensar o aumento de complexidade.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Resumo dos Algoritmos === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Resumo Comparativo dos Algoritmos</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr><th style={S.th}>Algoritmo</th><th style={S.th}>Critério</th><th style={S.th}>Tipo de Splits</th><th style={S.th}>Contínuos?</th><th style={S.th}>Pruning</th><th style={S.th}>Regressão?</th></tr>
            </thead>
            <tbody>
              {[
                ['ID3', 'Information Gain', 'Multi-way', 'Não', 'Nenhum', 'Não'],
                ['C4.5', 'Gain Ratio', 'Multi-way / binário', 'Sim', 'Post (error-based)', 'Não'],
                ['CART', 'Gini Index / SSE', 'Binário', 'Sim', 'Cost-complexity', 'Sim'],
                ['CHAID', 'Chi-quadrado (χ²)', 'Multi-way', 'Com binning', 'Estatístico (χ² como gate)', 'Variante (CHAID regressão)'],
              ].map(([a, c, s, ct, p, r]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                  <td style={S.td}>{c}</td>
                  <td style={S.td}>{s}</td>
                  <td style={S.td}>{ct}</td>
                  <td style={S.td}>{p}</td>
                  <td style={S.td}>{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Apesar destas diferenças, todos partilham as mesmas <strong>vantagens fundamentais</strong>: são
          altamente interpretáveis (a árvore pode ser lida directamente como um conjunto de regras
          "se...então"), não exigem normalização das features, lidam naturalmente com features categóricas
          e numéricas em conjunto, e capturam interacções não-lineares entre features sem necessidade de
          engenharia manual. As suas <strong>desvantagens fundamentais</strong> — instabilidade (pequenas
          mudanças nos dados podem produzir árvores muito diferentes) e tendência para overfitting — motivam
          directamente o tema do próximo módulo.
        </div>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <p style={S.p}>
          As árvores de decisão constroem-se de forma <strong>recursiva, greedy e top-down</strong>: em cada
          nó, escolhe-se o atributo (e, para atributos contínuos, o threshold) que melhor separa as classes
          — ou, em regressão, que mais reduz a variância — segundo uma métrica local, e o processo repete-se
          nos sub-conjuntos resultantes até um critério de paragem ser atingido.
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>DDT: algoritmo geral, greedy e top-down, comum a ID3/C4.5/CART/CHAID</li>
            <li>Entropia mede impureza: <InlineMath math="Entropy(D) = -\sum p_i \log_2 p_i" />; Information Gain (ID3) escolhe o atributo que mais a reduz</li>
            <li>Gini Index (CART): <InlineMath math="1 - \sum p_i^2" /> — sem logaritmos, geralmente concorda com a entropia</li>
            <li>Information Gain é tendencioso para atributos com muitos valores; o Gain Ratio (C4.5) corrige isto normalizando pelo Split Information</li>
            <li>CHAID usa o teste χ² como critério de split e como gate estatístico para aceitar/rejeitar um split</li>
            <li>Em regressão (CART), o critério de split é a redução de SSE/variância; as folhas preveem a média de y</li>
            <li>Atributos contínuos: ordenar valores e testar apenas thresholds nos pontos médios onde a classe muda</li>
            <li>Overfitting é o risco central; combate-se com pre-pruning (max_depth, min_samples, ganho mínimo) e post-pruning (reduced error, cost-complexity)</li>
          </ul>
        
      </div>
    </div>
  );
}
