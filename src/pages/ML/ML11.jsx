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
  note: { background: 'rgba(6,95,70,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram 1: Hard-margin hyperplane, margin, support vectors (2D) ===
const HardMarginDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>A "Rua Mais Larga" — Hiperplano, Margem e Support Vectors</p>
    <svg viewBox="0 0 540 265" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrSVM1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
        </marker>
      </defs>
      {/* margin band (aligned with the two dashed margin lines below) */}
      <polygon points="160,20 240,20 180,240 100,240" fill={`${color}14`} />
      {/* decision boundary w.x+b=0 (midline between the two margin lines) */}
      <line x1="200" y1="20" x2="140" y2="240" stroke={color} strokeWidth="2.5" />
      {/* margin lines */}
      <line x1="160" y1="20" x2="100" y2="240" stroke={color} strokeWidth="1.2" strokeDasharray="5,3" />
      <line x1="240" y1="20" x2="180" y2="240" stroke={color} strokeWidth="1.2" strokeDasharray="5,3" />

      {/* top labels for the three lines (small, non-rotated to avoid clipping) */}
      <text x="158" y="13" textAnchor="end" fill={color} fontSize="8">w·x+b=+1</text>
      <text x="203" y="13" textAnchor="start" fill={color} fontSize="8" fontWeight="700">w·x+b=0</text>
      <text x="243" y="30" textAnchor="start" fill={color} fontSize="8">w·x+b=−1</text>

      {/* w vector perpendicular to boundary, pointing toward class -1 */}
      <line x1="155" y1="170" x2="193" y2="180" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrSVM1)" />
      <text x="197" y="178" fill="#f59e0b" fontSize="11" fontWeight="700">w</text>

      {/* class +1 points (left side, blue circles) */}
      {[[40, 40], [35, 100], [70, 70], [55, 165], [45, 215]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={7} fill="#f97316" fillOpacity="0.85" />
      ))}
      {/* support vectors class +1 (sitting exactly on the left margin line) */}
      <circle cx={146} cy={70} r={10} fill="none" stroke="#f97316" strokeWidth="2.5" />
      <circle cx={146} cy={70} r={6} fill="#f97316" />
      <text x="158" y="62" fill="#f97316" fontSize="8" fontWeight="700">SV</text>
      <circle cx={114} cy={190} r={10} fill="none" stroke="#f97316" strokeWidth="2.5" />
      <circle cx={114} cy={190} r={6} fill="#f97316" />
      <text x="126" y="182" fill="#f97316" fontSize="8" fontWeight="700">SV</text>

      {/* class -1 points (right side, red squares) */}
      {[[470, 50], [480, 110], [460, 175], [490, 225], [440, 95]].map(([x, y], i) => (
        <rect key={i} x={x - 7} y={y - 7} width={14} height={14} fill="#f97316" fillOpacity="0.85" />
      ))}
      {/* support vector class -1 (sitting exactly on the right margin line) */}
      <rect x={210 - 7} y={130 - 7} width={14} height={14} fill="#f97316" />
      <rect x={210 - 11} y={130 - 11} width={22} height={22} fill="none" stroke="#f97316" strokeWidth="2.5" />
      <text x="234" y="126" fill="#f97316" fontSize="8" fontWeight="700">SV</text>

      {/* class labels */}
      <text x="40" y="265" fill="#f97316" fontSize="11" fontWeight="700">Classe +1</text>
      <text x="535" y="265" textAnchor="end" fill="#f97316" fontSize="11" fontWeight="700">Classe −1</text>

      {/* margin width annotation, measured at the bottom of the band */}
      <line x1="101" y1="252" x2="181" y2="252" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="101" y1="247" x2="101" y2="257" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="181" y1="247" x2="181" y2="257" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="141" y="243" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">margem = 2/||w||</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      A "rua" (margem) entre as duas linhas tracejadas é a região vazia mais larga que conseguimos colocar entre as
      duas classes. O hiperplano de decisão (linha central, sólida) fica exactamente a meio. Os pontos contornados —
      os <strong>support vectors</strong> — são os únicos que "tocam" nas bordas da rua; todos os outros pontos
      podem ser removidos do dataset sem alterar a fronteira encontrada.
    </p>
  </div>
);

// === Diagram 2: soft margin — small C vs large C ===
const SoftMarginDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Soft Margin — Efeito do Parâmetro C</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
      <div>
        <svg viewBox="0 0 220 180" width="220" height="180">
          <polygon points="70,10 150,10 110,170 30,170" fill={`${color}14`} />
          <line x1="100" y1="10" x2="80" y2="170" stroke={color} strokeWidth="2" />
          <line x1="70" y1="10" x2="50" y2="170" stroke={color} strokeWidth="1" strokeDasharray="4,3" />
          <line x1="130" y1="10" x2="110" y2="170" stroke={color} strokeWidth="1" strokeDasharray="4,3" />
          {[[30, 40], [25, 90], [35, 140]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={6} fill="#f97316" fillOpacity="0.85" />
          ))}
          {[[170, 40], [175, 100], [165, 150]].map(([x, y], i) => (
            <rect key={i} x={x - 6} y={y - 6} width={12} height={12} fill="#f97316" fillOpacity="0.85" />
          ))}
          {/* a borderline + point sitting inside the margin / wrong side */}
          <circle cx={95} cy={70} r={6} fill="#f97316" fillOpacity="0.85" />
          <circle cx={95} cy={70} r={10} fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="95" y="55" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">ξᵢ &gt; 0</text>
          <text x="110" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">margem larga</text>
        </svg>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', margin: '0.25rem 0 0' }}>C pequeno</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>tolera violações, margem grande (underfit se exagerado)</p>
      </div>
      <div>
        <svg viewBox="0 0 220 180" width="220" height="180">
          <polygon points="92,10 108,10 100,170 84,170" fill={`${color}14`} />
          <line x1="100" y1="10" x2="92" y2="170" stroke={color} strokeWidth="2" />
          <line x1="92" y1="10" x2="84" y2="170" stroke={color} strokeWidth="1" strokeDasharray="4,3" />
          <line x1="108" y1="10" x2="100" y2="170" stroke={color} strokeWidth="1" strokeDasharray="4,3" />
          {[[30, 40], [25, 90], [35, 140], [50, 65]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={6} fill="#f97316" fillOpacity="0.85" />
          ))}
          {[[170, 40], [175, 100], [165, 150], [150, 75]].map(([x, y], i) => (
            <rect key={i} x={x - 6} y={y - 6} width={12} height={12} fill="#f97316" fillOpacity="0.85" />
          ))}
          {/* the borderline point now misclassified, far on the wrong side */}
          <circle cx={120} cy={70} r={6} fill="#f97316" fillOpacity="0.85" />
          <circle cx={120} cy={70} r={10} fill="none" stroke="#f97316" strokeWidth="2" />
          <text x="135" y="55" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">erro!</text>
          <text x="100" y="178" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">margem estreita</text>
        </svg>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', margin: '0.25rem 0 0' }}>C grande</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>penaliza fortemente violações, margem estreita (risco overfit)</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      O mesmo ponto "difícil" (o círculo azul perto da fronteira) é tratado de forma diferente conforme C. Com
      <strong> C pequeno</strong> o modelo aceita que esse ponto viole ligeiramente a margem (ξᵢ &gt; 0, mas
      pequeno custo) em troca de uma rua mais larga e mais "robusta". Com <strong>C grande</strong>, o custo de
      qualquer violação é tão alto que o modelo prefere encolher drasticamente a margem — e mesmo assim pode
      acabar a classificar mal esse ponto se ele estiver realmente misturado com a outra classe.
    </p>
  </div>
);

// === Diagram 3: kernel trick — concentric circles before/after ===
const KernelTransformDiagram = () => {
  const pts = [];
  // inner class (radius ~25)
  for (let a = 0; a < 8; a++) {
    const ang = (a / 8) * 2 * Math.PI;
    pts.push({ x: 100 + 25 * Math.cos(ang), y: 90 + 25 * Math.sin(ang), cls: 'in' });
  }
  // outer class (radius ~50)
  for (let a = 0; a < 10; a++) {
    const ang = (a / 10) * 2 * Math.PI;
    pts.push({ x: 100 + 50 * Math.cos(ang), y: 90 + 50 * Math.sin(ang), cls: 'out' });
  }
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Kernel Trick — De Círculos Concêntricos a Planos Separáveis</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div>
          <svg viewBox="0 0 200 180" width="200" height="180">
            <text x="100" y="18" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">Espaço Original (x₁, x₂)</text>
            {pts.map((pt, i) => pt.cls === 'in' ? (
              <circle key={i} cx={pt.x} cy={pt.y} r={5} fill="#f97316" fillOpacity="0.85" />
            ) : (
              <rect key={i} x={pt.x - 5} y={pt.y - 5} width={10} height={10} fill="#f97316" fillOpacity="0.85" />
            ))}
            <text x="100" y="170" textAnchor="middle" fill="#f97316" fontSize="10">nenhuma recta separa!</text>
          </svg>
        </div>
        <div style={{ fontSize: '1.5rem', color }}>→ φ(x) →</div>
        <div>
          <svg viewBox="0 0 200 190" width="200" height="190">
            <text x="100" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">Espaço Transformado</text>
            <text x="100" y="26" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(x₁², x₂², √2·x₁x₂)</text>
            {/* after transform: inner circle -> low "radius²" cluster, outer -> high cluster, separable by a line */}
            <line x1="20" y1="90" x2="180" y2="90" stroke={color} strokeWidth="2" />
            {pts.map((pt, i) => {
              const yPos = pt.cls === 'in' ? 140 + (i % 4) * 6 : 50 - (i % 5) * 4;
              const xPos = 40 + (i * 12) % 130;
              return pt.cls === 'in' ? (
                <circle key={i} cx={xPos} cy={yPos} r={5} fill="#f97316" fillOpacity="0.85" />
              ) : (
                <rect key={i} x={xPos - 5} y={yPos - 5} width={10} height={10} fill="#f97316" fillOpacity="0.85" />
              );
            })}
            <text x="100" y="182" textAnchor="middle" fill="#f97316" fontSize="10">linearmente separável!</text>
          </svg>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        À esquerda, a classe interna (círculos azuis) está rodeada pela classe externa (quadrados vermelhos) — em 2D,
        nenhuma recta separa as classes. Aplicando uma transformação não-linear φ — por exemplo, mapear cada ponto
        para <InlineMath math="(x_1^2, x_2^2, \sqrt{2}\,x_1 x_2)" />, que é exactamente o que um <strong>kernel
        polinomial de grau 2</strong> calcula implicitamente — pontos próximos da origem (classe interna, raio
        pequeno) ficam agrupados num "valor de raio²" baixo, e pontos afastados (classe externa, raio grande) ficam
        com um "raio²" alto. Nesse novo espaço, um simples hiperplano (recta) separa perfeitamente as duas classes.
        O <strong>kernel trick</strong> permite à SVM operar como se estivesse neste espaço transformado, sem nunca
        calcular φ(x) explicitamente — calcula apenas <InlineMath math="K(x_i, x_j) = \varphi(x_i)\cdot\varphi(x_j)" />.
      </p>
    </div>
  );
};

// === Diagram 4: multi-class OvR vs OvO ===
const MultiClassDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Multi-classe: One-vs-Rest vs. One-vs-One (3 classes)</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div>
        <svg viewBox="0 0 220 180" width="220" height="180">
          <text x="110" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">One-vs-Rest (3 classificadores)</text>
          {/* triangle of classes */}
          <circle cx="60" cy="70" r="9" fill="#f97316" />
          <text x="60" y="40" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">A</text>
          <rect x="151" y="62" width="18" height="18" fill="#f97316" />
          <text x="160" y="40" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">B</text>
          <polygon points="110,160 100,140 120,140" fill="#f97316" />
          <text x="110" y="178" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">C</text>
          {/* 3 lines, each separating one class from "rest" */}
          <line x1="20" y1="100" x2="200" y2="40" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" />
          <line x1="200" y1="100" x2="20" y2="40" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" />
          <line x1="40" y1="160" x2="180" y2="160" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="110" y="96" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">3 classificadores:</text>
          <text x="110" y="108" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">A vs (B+C), B vs (A+C), C vs (A+B)</text>
        </svg>
      </div>
      <div>
        <svg viewBox="0 0 220 180" width="220" height="180">
          <text x="110" y="16" textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontWeight="700">One-vs-One (3 classificadores)</text>
          <circle cx="60" cy="60" r="9" fill="#f97316" />
          <text x="60" y="40" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">A</text>
          <rect x="151" y="51" width="18" height="18" fill="#f97316" />
          <text x="160" y="40" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">B</text>
          <polygon points="110,160 100,140 120,140" fill="#f97316" />
          <text x="110" y="178" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">C</text>
          {/* lines between each pair */}
          <line x1="80" y1="55" x2="140" y2="55" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" />
          <text x="110" y="48" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">A vs B</text>
          <line x1="65" y1="80" x2="100" y2="135" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" />
          <text x="65" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">A vs C</text>
          <line x1="150" y1="75" x2="125" y2="135" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="3,2" />
          <text x="160" y="115" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">B vs C</text>
        </svg>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      <strong>One-vs-Rest (OvR)</strong>: treina um classificador binário por classe (essa classe vs. todas as
      outras juntas) — para K classes, são K modelos. A previsão final escolhe a classe cujo classificador deu o
      score mais alto. <strong>One-vs-One (OvO)</strong>: treina um classificador binário para cada par de classes —
      para K classes, são K(K−1)/2 modelos (3 neste exemplo com K=3). A previsão final é decidida por votação entre
      todos os classificadores. O scikit-learn usa OvO por defeito para SVC, porque cada problema binário é mais
      pequeno e equilibrado, ainda que treine mais modelos.
    </p>
  </div>
);

// === Diagram 5: SVR epsilon-tube ===
const SVRDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Support Vector Regression — o Tubo ε-insensível</p>
    <svg viewBox="0 0 480 200" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* epsilon tube */}
      <path d="M 30 130 C 130 70, 250 60, 450 110" fill="none" stroke="none" />
      <path d="M 30 110 C 130 50, 250 40, 450 90 L 450 130 C 250 80, 130 90, 30 150 Z" fill={`${color}14`} />
      <path d="M 30 120 C 130 60, 250 50, 450 100" fill="none" stroke={color} strokeWidth="2.5" />
      <path d="M 30 100 C 130 40, 250 30, 450 80" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4,3" />
      <path d="M 30 140 C 130 80, 250 70, 450 120" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4,3" />
      {/* data points: some inside tube, some outside (support vectors) */}
      {[[60, 105], [110, 75], [160, 60], [210, 55], [260, 50], [310, 65], [360, 85], [410, 100]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5} fill="#f97316" fillOpacity="0.85" />
      ))}
      {/* outliers outside the tube -> support vectors with slack */}
      <circle cx={150} cy={30} r={6} fill="#f59e0b" />
      <circle cx={150} cy={30} r={10} fill="none" stroke="#f59e0b" strokeWidth="2" />
      <circle cx={330} cy={130} r={6} fill="#f59e0b" />
      <circle cx={330} cy={130} r={10} fill="none" stroke="#f59e0b" strokeWidth="2" />
      <text x="150" y="12" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">ξ &gt; 0</text>
      <text x="330" y="150" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="700">ξ* &gt; 0</text>
      <text x="450" y="55" textAnchor="end" fill={color} fontSize="10" fontWeight="700">f(x) + ε</text>
      <text x="450" y="129" textAnchor="end" fill={color} fontSize="10" fontWeight="700">f(x) − ε</text>
      <text x="450" y="93" textAnchor="end" fill={color} fontSize="10" fontWeight="700">f(x)</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Em vez de minimizar a margem entre duas classes, a SVR constrói um <strong>tubo de largura 2ε</strong> em torno
      da função de regressão <InlineMath math="f(x)" />. Pontos dentro do tubo <strong>não contribuem para o erro</strong>
      (a perda é zero) — daí "ε-insensível". Apenas os pontos fora do tubo (marcados a laranja) geram penalizações
      <InlineMath math="\xi_i" /> ou <InlineMath math="\xi_i^*" />, e são esses pontos que se tornam support vectors.
    </p>
  </div>
);

export default function ML11() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 11</div>
      <h1 style={S.h1}>Support Vector Machines</h1>
      <p style={S.lead}>
        As <strong>Support Vector Machines (SVM)</strong> abordam a classificação de um ângulo geométrico muito
        elegante: em vez de modelar probabilidades (como a regressão logística) ou dividir o espaço com regras
        sequenciais (como as árvores de decisão), a SVM procura directamente a fronteira de decisão que deixa
        o <strong>maior espaço vazio possível</strong> entre as classes. Neste módulo final do curso de ML & Aprendizagem
        Supervisionada vamos derivar esta ideia passo a passo — da "rua mais larga" até à formulação dual do
        Lagrangiano — explorar o soft margin e o parâmetro C, mergulhar no kernel trick com um exemplo numérico
        completo, ver como a SVM se generaliza para múltiplas classes e para regressão (SVR), comparar a SVM com
        os outros modelos do curso, e terminar com uma síntese de todo o percurso — desde o Módulo 01 até aqui.
      </p>

      {/* === SECTION 1: A rua mais larga === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. A Ideia Central — "A Rua Mais Larga"</h2>
        <p style={S.p}>
          Imagine um conjunto de pontos de duas classes, espalhados num plano 2D, que podem ser separados por
          uma linha recta. Existem, em geral, <strong>infinitas</strong> rectas que separam correctamente os
          dados — mas nem todas são igualmente boas. Uma recta que passe muito perto de alguns pontos arrisca
          classificar mal novos pontos que apareçam ligeiramente deslocados (ruído, variação natural). A SVM
          escolhe a recta (ou hiperplano, em dimensões maiores) que está <strong>o mais longe possível</strong> de
          ambas as classes — equivalente a desenhar a rua mais larga possível entre os dois bairros, e colocar a
          fronteira exactamente no meio dessa rua.
        </p>
        <HardMarginDiagram />
        <p style={S.p}>
          Os pontos que tocam nas bordas da rua — os mais próximos da fronteira — chamam-se <strong>support
          vectors</strong> (vectores de suporte). São estes pontos, e apenas estes, que determinam a posição e
          orientação do hiperplano: se removêssemos qualquer outro ponto do dataset e re-treinássemos a SVM, a
          fronteira não mudaria. Esta é uma propriedade notável — o modelo final depende de um <strong>subconjunto
          muito pequeno</strong> dos dados de treino.
        </p>
        <div style={S.note}>
          O nome "Support Vector Machine" vem precisamente daqui: a máquina é "suportada" por estes vectores —
          tal como uma tenda é suportada apenas pelas estacas que tocam o solo, não pelo pano todo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Formulação matemática do hiperplano e margem === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Do Hiperplano à Margem — Formulação Geométrica</h2>
        <p style={S.p}>
          Um hiperplano em <InlineMath math="\mathbb{R}^n" /> pode ser escrito como o conjunto de pontos
          <InlineMath math="\mathbf{x}" /> que satisfazem:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathbf{w} \cdot \mathbf{x} + b = 0" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\mathbf{w}" /> é o vector de pesos (perpendicular ao hiperplano — define a sua
          <em> orientação</em>) e <InlineMath math="b" /> é o bias (desloca o hiperplano em relação à origem).
          Para classificar um ponto, basta verificar de que lado do hiperplano ele está, isto é, o sinal de
          <InlineMath math="\mathbf{w} \cdot \mathbf{x} + b" />.
        </p>
        <p style={S.p}>
          Definimos as classes como <InlineMath math="y_i \in \{+1, -1\}" />. Para que um ponto seja correctamente
          classificado e fique <em>fora</em> da margem, exigimos:
        </p>
        <div style={S.math}>
          <BlockMath math="y_i (\mathbf{w} \cdot \mathbf{x}_i + b) \geq 1, \quad \forall i" />
        </div>
        <p style={S.p}>
          Os pontos para os quais esta desigualdade é uma <strong>igualdade exacta</strong> (= 1) são, por
          definição, os support vectors — estão exactamente na borda da rua. As duas "bordas" da rua correspondem
          então aos hiperplanos <InlineMath math="\mathbf{w}\cdot\mathbf{x}+b = +1" /> e
          <InlineMath math="\mathbf{w}\cdot\mathbf{x}+b = -1" />.
        </p>

        <h3 style={S.h3}>Largura da Margem</h3>
        <p style={S.p}>
          A distância perpendicular entre estas duas bordas — a largura da rua — pode ser derivada geometricamente
          e é igual a:
        </p>
        <div style={S.math}>
          <BlockMath math="\text{margem} = \frac{2}{\|\mathbf{w}\|}" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\|\mathbf{w}\| = \sqrt{w_1^2 + w_2^2 + \dots + w_n^2}" /> é a norma Euclidiana de
          <InlineMath math="\mathbf{w}" />. Esta fórmula é a chave de tudo: <strong>maximizar a margem é o mesmo
          que minimizar </strong><InlineMath math="\|\mathbf{w}\|" /> (ou, de forma equivalente e matematicamente
          mais conveniente, minimizar <InlineMath math="\|\mathbf{w}\|^2" />, que é diferenciável e convexo).
        </p>

        <h3 style={S.h3}>O Problema de Optimização Primal (Hard Margin)</h3>
        <p style={S.p}>
          Juntando os dois ingredientes — maximizar a margem (= minimizar <InlineMath math="\|\mathbf{w}\|^2" />)
          sujeito a todos os pontos estarem correctamente classificados e fora da margem — obtemos a formulação
          clássica do <strong>hard-margin SVM</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="\min_{\mathbf{w}, b} \ \frac{1}{2}\|\mathbf{w}\|^2 \quad \text{sujeito a} \quad y_i(\mathbf{w}\cdot\mathbf{x}_i + b) \geq 1, \ \forall i = 1,\dots,N" />
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Porquê o factor ½ e o quadrado?</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            O ½ é apenas conveniência matemática — simplifica a derivada de <InlineMath math="\|\mathbf{w}\|^2" />
            (que dá <InlineMath math="\mathbf{w}" /> em vez de <InlineMath math="2\mathbf{w}" />). Usar
            <InlineMath math="\|\mathbf{w}\|^2" /> em vez de <InlineMath math="\|\mathbf{w}\|" /> evita a raiz
            quadrada (não diferenciável na origem) e transforma o problema numa <strong>optimização quadrática
            convexa</strong> — uma classe de problemas com soluções únicas e globais, resolúveis eficientemente
            por solvers numéricos.
          </p>
        
        <p style={S.p}>
          Este problema chama-se <strong>hard margin</strong> porque exige que <em>todos</em> os pontos satisfaçam
          a restrição sem qualquer tolerância — só funciona se os dados forem perfeitamente linearmente separáveis.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Formulação Dual / Lagrangianos === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. A Formulação Dual — Lagrangianos e a Porta para o Kernel Trick</h2>
        <p style={S.p}>
          O problema primal da secção anterior pode ser resolvido directamente, mas a sua <strong>formulação
          dual</strong> — obtida através de multiplicadores de Lagrange — revela uma propriedade extraordinária
          que torna possível o kernel trick. Vamos ver o essencial da derivação.
        </p>

        <h3 style={S.h3}>Passo 1 — O Lagrangiano</h3>
        <p style={S.p}>
          Introduzimos um multiplicador de Lagrange <InlineMath math="\alpha_i \geq 0" /> para cada restrição
          (cada ponto de treino), e construímos o Lagrangiano:
        </p>
        <div style={S.math}>
          <BlockMath math="L(\mathbf{w}, b, \boldsymbol{\alpha}) = \frac{1}{2}\|\mathbf{w}\|^2 - \sum_{i=1}^{N} \alpha_i \big[ y_i(\mathbf{w}\cdot\mathbf{x}_i + b) - 1 \big]" />
        </div>

        <h3 style={S.h3}>Passo 2 — Condições de Optimalidade</h3>
        <p style={S.p}>
          No ponto óptimo, as derivadas parciais de <InlineMath math="L" /> em relação a <InlineMath math="\mathbf{w}" /> e
          <InlineMath math="b" /> têm de ser zero:
        </p>
        <div style={S.math}>
          <BlockMath math="\frac{\partial L}{\partial \mathbf{w}} = \mathbf{w} - \sum_i \alpha_i y_i \mathbf{x}_i = 0 \ \Rightarrow \ \mathbf{w} = \sum_{i=1}^{N} \alpha_i y_i \mathbf{x}_i" />
          <BlockMath math="\frac{\partial L}{\partial b} = -\sum_i \alpha_i y_i = 0 \ \Rightarrow \ \sum_{i=1}^{N} \alpha_i y_i = 0" />
        </div>
        <p style={S.p}>
          A primeira equação é crucial: diz-nos que o vector de pesos óptimo <InlineMath math="\mathbf{w}" /> é
          sempre uma <strong>combinação linear dos próprios pontos de treino</strong>, pesados por
          <InlineMath math="\alpha_i y_i" />.
        </p>

        <h3 style={S.h3}>Passo 3 — O Problema Dual</h3>
        <p style={S.p}>
          Substituindo estas expressões de volta no Lagrangiano, <InlineMath math="\mathbf{w}" /> e
          <InlineMath math="b" /> desaparecem completamente, deixando um problema que depende apenas dos
          <InlineMath math="\alpha_i" /> e de <strong>produtos internos entre pares de pontos</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math="\max_{\boldsymbol{\alpha}} \ \sum_{i=1}^N \alpha_i - \frac{1}{2}\sum_{i=1}^N\sum_{j=1}^N \alpha_i \alpha_j y_i y_j \, (\mathbf{x}_i \cdot \mathbf{x}_j)" />
          <BlockMath math="\text{sujeito a} \quad \alpha_i \geq 0 \ \ \text{e} \ \ \sum_{i=1}^N \alpha_i y_i = 0" />
        </div>
        <p style={S.p}>
          Pela teoria de optimização convexa (condições de Karush-Kuhn-Tucker, KKT), sabemos ainda que
          <InlineMath math="\alpha_i = 0" /> para todos os pontos que <em>não</em> são support vectors — apenas os
          support vectors têm <InlineMath math="\alpha_i > 0" />. A previsão para um novo ponto
          <InlineMath math="\mathbf{x}" /> torna-se:
        </p>
        <div style={S.math}>
          <BlockMath math="\hat{y} = \text{sign}\left( \sum_{i=1}^N \alpha_i y_i (\mathbf{x}_i \cdot \mathbf{x}) + b \right)" />
        </div>

        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Porque é que isto é tão importante?</strong></p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Repare que tanto o problema dual como a fórmula de predição <strong>dependem dos dados apenas através
            de produtos internos </strong><InlineMath math="\mathbf{x}_i \cdot \mathbf{x}_j" />. Isto significa que,
            se quisermos trabalhar num espaço de características transformado <InlineMath math="\varphi(\mathbf{x})" /> (potencialmente
            de dimensão muito maior, ou até infinita), <strong>não precisamos de calcular </strong><InlineMath math="\varphi(\mathbf{x})" />
            explicitamente — basta saber calcular o produto interno
            <InlineMath math="\varphi(\mathbf{x}_i)\cdot\varphi(\mathbf{x}_j)" />. A esta função chamamos
            <strong> kernel</strong>: <InlineMath math="K(\mathbf{x}_i, \mathbf{x}_j) = \varphi(\mathbf{x}_i)\cdot\varphi(\mathbf{x}_j)" />.
            Esta substituição — "<em>kernel trick</em>" — é o tema da secção 6.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Soft Margin === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Soft Margin — Quando os Dados Não São Perfeitos</h2>
        <p style={S.p}>
          O hard margin exige separabilidade linear perfeita — uma condição quase nunca satisfeita em dados reais,
          que têm ruído, outliers e zonas de sobreposição entre classes. O <strong>soft margin SVM</strong> introduz
          uma <strong>variável de holgura (slack)</strong> <InlineMath math="\xi_i \geq 0" /> para cada ponto,
          permitindo que ele viole a margem (ou até seja mal classificado), a um certo "custo":
        </p>
        <div style={S.math}>
          <BlockMath math="\min_{\mathbf{w}, b, \boldsymbol{\xi}} \ \frac{1}{2}\|\mathbf{w}\|^2 + C \sum_{i=1}^N \xi_i" />
          <BlockMath math="\text{sujeito a} \quad y_i(\mathbf{w}\cdot\mathbf{x}_i + b) \geq 1 - \xi_i, \quad \xi_i \geq 0, \ \forall i" />
        </div>
        <p style={S.p}>
          Interpretação de <InlineMath math="\xi_i" />: se <InlineMath math="\xi_i = 0" />, o ponto está correctamente
          classificado e fora (ou na borda) da margem — comportamento normal. Se <InlineMath math="0 < \xi_i \leq 1" />,
          o ponto está <em>dentro</em> da margem mas ainda do lado correcto. Se <InlineMath math="\xi_i > 1" />, o
          ponto está do lado <em>errado</em> do hiperplano — mal classificado.
        </p>

        <h3 style={S.h3}>O Parâmetro C — Trade-off Margem vs. Erros</h3>
        <p style={S.p}>
          O parâmetro <InlineMath math="C > 0" /> controla o equilíbrio entre os dois termos do objectivo:
          <InlineMath math="\frac{1}{2}\|\mathbf{w}\|^2" /> (margem larga) e <InlineMath math="C\sum_i \xi_i" /> (poucas
          violações). É um dos hiperparâmetros mais importantes a afinar numa SVM.
        </p>
        <SoftMarginDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Valor de C</th><th style={S.th}>Efeito na margem</th><th style={S.th}>Tolerância a erros</th><th style={S.th}>Risco</th></tr></thead>
            <tbody>
              {[
                ['C pequeno', 'Margem larga', 'Alta — permite muitas violações ξᵢ', 'Underfitting (fronteira demasiado simples)'],
                ['C grande', 'Margem estreita', 'Baixa — penaliza fortemente violações', 'Overfitting (ajusta-se a outliers/ruído)'],
              ].map(([c, m, t, r], i) => (
                <tr key={i}><td style={{ ...S.td, fontWeight: 700 }}>{c}</td><td style={S.td}>{m}</td><td style={S.td}>{t}</td><td style={S.td}>{r}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Na prática, C é afinado por validação cruzada, tipicamente numa grelha logarítmica
          (<InlineMath math="C \in \{0.01, 0.1, 1, 10, 100, \dots\}" />). A formulação dual com soft margin é
          quase idêntica à da secção 3 — a única diferença é que <InlineMath math="\alpha_i" /> passa a ter um
          limite superior: <InlineMath math="0 \leq \alpha_i \leq C" />.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Exemplo numérico soft margin === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Exemplo Numérico — Um Ponto Difícil</h2>
        <p style={S.p}>
          Considere um dataset 2D pequeno com a seguinte fronteira candidata: <InlineMath math="\mathbf{w} = (1, 1)" />,
          <InlineMath math="b = -3" />, ou seja, o hiperplano <InlineMath math="x_1 + x_2 - 3 = 0" />, com margem
          definida por <InlineMath math="\|\mathbf{w}\|=\sqrt{2}" />.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Ponto</th><th style={S.th}>(x₁, x₂)</th><th style={S.th}>y</th><th style={S.th}><InlineMath math="y_i(\mathbf{w}\cdot\mathbf{x}_i+b)" /></th><th style={S.th}>ξᵢ</th></tr></thead>
            <tbody>
              {[
                ['A', '(0.5, 0.5)', '−1', '(−1)(0.5+0.5−3) = 2', '0'],
                ['B', '(4, 4)', '+1', '(+1)(4+4−3) = 5', '0'],
                ['C', '(1.8, 1.8)', '−1', '(−1)(1.8+1.8−3) = −0.6', '1.6'],
              ].map(([p, xy, y, m, xi], i) => (
                <tr key={i}><td style={{ ...S.td, fontWeight: 700 }}>{p}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{xy}</td><td style={S.td}>{y}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{m}</td><td style={{ ...S.td, fontFamily: 'monospace', color: '#f97316', fontWeight: 700 }}>{xi}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Leitura dos resultados:</strong></p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Os pontos A e B satisfazem <InlineMath math="y_i(\mathbf{w}\cdot\mathbf{x}_i+b) \geq 1" /> — estão
            correctamente classificados e fora da margem, logo <InlineMath math="\xi_A = \xi_B = 0" />.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            O ponto C tem valor <InlineMath math="-0.6 < 1" />, ou seja, está do lado <strong>errado</strong> do
            hiperplano (valor negativo). A folga necessária é <InlineMath math="\xi_C = 1 - (-0.6) = 1.6" />.
          </p>
          <BlockMath math="\text{contribuição de C na penalização: } C \cdot \xi_C = C \times 1.6" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Se <InlineMath math="C = 0.1" />, esta penalização é apenas <InlineMath math="0.16" /> — o optimizador
            pode preferir manter a margem larga e "aceitar" o erro em C. Se <InlineMath math="C = 100" />, a
            penalização seria <InlineMath math="160" /> — o optimizador será fortemente empurrado a reposicionar a
            fronteira (e encolher a margem) para tentar classificar C correctamente.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Kernel Trick === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. O Kernel Trick</h2>
        <p style={S.p}>
          Vimos na secção 3 que tanto o treino como a predição da SVM dependem apenas de produtos internos entre
          pares de pontos. O <strong>kernel trick</strong> consiste em substituir
          <InlineMath math="\mathbf{x}_i \cdot \mathbf{x}_j" /> por uma função kernel
          <InlineMath math="K(\mathbf{x}_i, \mathbf{x}_j)" /> que calcula o produto interno <em>num espaço de
          características transformado</em> <InlineMath math="\varphi(\mathbf{x})" />, sem nunca construir esse
          espaço explicitamente:
        </p>
        <div style={S.math}>
          <BlockMath math="\mathbf{x}_i \cdot \mathbf{x}_j \ \longrightarrow \ K(\mathbf{x}_i, \mathbf{x}_j) = \varphi(\mathbf{x}_i) \cdot \varphi(\mathbf{x}_j)" />
        </div>
        <KernelTransformDiagram />

        <h3 style={S.h3}>Exemplo Numérico — Kernel Polinomial</h3>
        <p style={S.p}>
          Considere dois pontos 2D <InlineMath math="\mathbf{x} = (1, 2)" /> e <InlineMath math="\mathbf{y} = (3, 1)" />,
          e o kernel polinomial de grau 2: <InlineMath math="K(\mathbf{x},\mathbf{y}) = (\mathbf{x}\cdot\mathbf{y} + 1)^2" />.
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Passo 1 — produto interno original:</strong></p>
          <BlockMath math="\mathbf{x}\cdot\mathbf{y} = (1)(3) + (2)(1) = 5" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Passo 2 — kernel:</strong></p>
          <BlockMath math="K(\mathbf{x},\mathbf{y}) = (5 + 1)^2 = 36" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Passo 3 — verificação via φ explícito:</strong></p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Para grau 2, <InlineMath math="\varphi(x_1,x_2) = (x_1^2, x_2^2, \sqrt{2}x_1 x_2, \sqrt{2}x_1, \sqrt{2}x_2, 1)" />.
            Calculando: <InlineMath math="\varphi(\mathbf{x}) = (1, 4, 2\sqrt{2}, \sqrt{2}, 2\sqrt{2}, 1)" /> e
            <InlineMath math="\varphi(\mathbf{y}) = (9, 1, 3\sqrt{2}, 3\sqrt{2}, \sqrt{2}, 1)" />.
          </p>
          <BlockMath math="\varphi(\mathbf{x})\cdot\varphi(\mathbf{y}) = 9 + 4 + 12 + 6 + 4 + 1 = 36" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Os dois cálculos coincidem (36 = 36) — mas o cálculo via <InlineMath math="K" /> custou uma soma, um
            produto e uma potência, enquanto o cálculo via <InlineMath math="\varphi" /> explícito exigiu construir
            vectores de 6 dimensões. Para kernels como o RBF, <InlineMath math="\varphi" /> teria <strong>dimensão
            infinita</strong> — impossível de calcular explicitamente, mas <InlineMath math="K" /> continua a ser
            uma única exponencial.
          </p>
        

        <h3 style={S.h3}>Tabela Comparativa de Kernels</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Kernel</th>
                <th style={S.th}>Fórmula</th>
                <th style={S.th}>Hiperparâmetros</th>
                <th style={S.th}>Uso típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Linear</td>
                <td style={S.td}><InlineMath math="K(\mathbf{x},\mathbf{y}) = \mathbf{x}\cdot\mathbf{y}" /></td>
                <td style={S.td}>nenhum</td>
                <td style={S.td}>Dados linearmente separáveis; muitas features (texto, bag-of-words)</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Polinomial</td>
                <td style={S.td}><InlineMath math="K(\mathbf{x},\mathbf{y}) = (\gamma\,\mathbf{x}\cdot\mathbf{y} + r)^d" /></td>
                <td style={S.td}>grau d, γ, r</td>
                <td style={S.td}>Relações polinomiais conhecidas entre features (ex.: visão por computador clássica)</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>RBF / Gaussiano</td>
                <td style={S.td}><InlineMath math="K(\mathbf{x},\mathbf{y}) = \exp(-\gamma\|\mathbf{x}-\mathbf{y}\|^2)" /></td>
                <td style={S.td}>γ</td>
                <td style={S.td}>Default geral — funciona bem sem conhecimento prévio da estrutura dos dados</td>
              </tr>
              <tr>
                <td style={{ ...S.td, fontWeight: 700 }}>Sigmoid</td>
                <td style={S.td}><InlineMath math="K(\mathbf{x},\mathbf{y}) = \tanh(\gamma\,\mathbf{x}\cdot\mathbf{y} + r)" /></td>
                <td style={S.td}>γ, r</td>
                <td style={S.td}>Equivalente a uma rede neuronal de 1 camada; raramente óptimo, usado por comparação histórica</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          O hiperparâmetro <InlineMath math="\gamma" /> do RBF controla o "alcance" de influência de cada ponto:
          <InlineMath math="\gamma" /> grande → fronteiras muito localizadas (risco de overfitting);
          <InlineMath math="\gamma" /> pequeno → fronteiras suaves e globais (risco de underfitting). Em conjunto
          com C, formam a dupla de hiperparâmetros mais afinada numa SVM com RBF — tipicamente via grid search
          numa grelha logarítmica de ambos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Multi-class === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. SVM para Múltiplas Classes</h2>
        <p style={S.p}>
          A formulação que derivámos é inerentemente <strong>binária</strong> (classes +1 / −1). Para problemas
          com K &gt; 2 classes, existem duas estratégias clássicas de decomposição em sub-problemas binários:
        </p>
        <MultiClassDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Estratégia</th><th style={S.th}>Nº de classificadores</th><th style={S.th}>Como decide</th><th style={S.th}>Notas</th></tr></thead>
            <tbody>
              {[
                ['One-vs-Rest (OvR)', 'K', 'Classe com maior score', 'Mais rápido a treinar; classes podem ficar desequilibradas'],
                ['One-vs-One (OvO)', 'K(K−1)/2', 'Votação entre todos os pares', 'Problemas binários mais equilibrados; mais modelos a treinar (mas cada um menor)'],
              ].map(([s, n, d, no], i) => (
                <tr key={i}><td style={{ ...S.td, fontWeight: 700 }}>{s}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{n}</td><td style={S.td}>{d}</td><td style={S.td}>{no}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Para K=3, OvR treina 3 classificadores ("A vs resto", "B vs resto", "C vs resto"), enquanto OvO treina
          também 3 ("A vs B", "A vs C", "B vs C") — mas para K=10, OvR treina 10 modelos enquanto OvO treina 45.
          A escolha por defeito do scikit-learn para <code>SVC</code> é OvO.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: SVR === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Support Vector Regression (SVR)</h2>
        <p style={S.p}>
          A mesma ideia geométrica pode ser adaptada para <strong>regressão</strong>. Em vez de maximizar uma
          margem entre classes, a SVR define um <strong>tubo de largura 2ε</strong> em torno da função de
          regressão, e só penaliza pontos que caiam <em>fora</em> deste tubo.
        </p>
        <SVRDiagram />
        <div style={S.math}>
          <BlockMath math="\min_{\mathbf{w},b,\boldsymbol{\xi},\boldsymbol{\xi}^*} \ \frac{1}{2}\|\mathbf{w}\|^2 + C\sum_{i=1}^N (\xi_i + \xi_i^*)" />
          <BlockMath math="\text{sujeito a} \quad y_i - (\mathbf{w}\cdot\mathbf{x}_i+b) \leq \varepsilon + \xi_i, \quad (\mathbf{w}\cdot\mathbf{x}_i+b) - y_i \leq \varepsilon + \xi_i^*, \quad \xi_i, \xi_i^* \geq 0" />
        </div>
        <p style={S.p}>
          Tal como na classificação, os pontos dentro do tubo não influenciam o modelo (não são support vectors);
          apenas os pontos fora do tubo o fazem. O hiperparâmetro <InlineMath math="\varepsilon" /> controla a
          "tolerância" do modelo — um ε maior produz modelos mais simples (menos sensíveis a pequenas variações),
          enquanto C continua a controlar o trade-off entre suavidade do modelo (<InlineMath math="\|\mathbf{w}\|" /> pequeno)
          e penalização de desvios grandes.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: SVM vs outros modelos === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. SVM vs. Outros Classificadores</h2>
        <p style={S.p}>
          Depois de explorar Regressão Logística, KNN, Árvores de Decisão e agora SVM, vale a pena comparar
          directamente as suas características — não existe um "melhor" modelo universal, apenas trade-offs
          adequados a diferentes contextos.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Critério</th>
                <th style={S.th}>SVM</th>
                <th style={S.th}>Regressão Logística</th>
                <th style={S.th}>Árvores de Decisão</th>
                <th style={S.th}>KNN</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Fronteira de decisão', 'Linear ou não-linear (via kernel)', 'Linear (no espaço de features)', 'Não-linear, em "blocos" (axis-aligned)', 'Não-linear, irregular'],
                ['Interpretabilidade', 'Baixa (especialmente com kernels)', 'Alta — coeficientes têm significado', 'Alta — regras if/else explícitas', 'Baixa — não há "modelo" explícito'],
                ['Escalabilidade (N grande)', 'Fraca — treino O(N²) a O(N³)', 'Boa — treino rápido e linear', 'Boa', 'Fraca em predição (procura entre todos os pontos)'],
                ['Outputs probabilísticos', 'Não nativamente (precisa calibração)', 'Sim, nativo', 'Aproximado (frequências nas folhas)', 'Aproximado (proporção de vizinhos)'],
                ['Sensibilidade a escala de features', 'Alta — requer normalização', 'Moderada — beneficia de normalização', 'Baixa — invariante a escala', 'Alta — requer normalização'],
                ['Robustez a outliers', 'Moderada (soft margin ajuda)', 'Moderada', 'Baixa (sem pruning)', 'Baixa'],
              ].map(([c, svm, lr, dt, knn], i) => (
                <tr key={i}><td style={{ ...S.td, fontWeight: 700 }}>{c}</td><td style={S.td}>{svm}</td><td style={S.td}>{lr}</td><td style={S.td}>{dt}</td><td style={S.td}>{knn}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Regra prática: SVM com kernel RBF é uma excelente escolha "default" para datasets <strong>pequenos a
          médios</strong>, com fronteiras potencialmente complexas, onde a interpretabilidade não é prioritária.
          Para datasets muito grandes, modelos lineares (regressão logística) ou baseados em árvores (ensembles)
          tendem a escalar melhor.
        </div>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <p style={S.p}>
          A SVM formaliza uma intuição geométrica simples — "a fronteira mais segura é a que está mais afastada de
          ambas as classes" — numa optimização convexa elegante, cuja formulação dual abre a porta a um dos truques
          mais poderosos do machine learning clássico: resolver problemas não-lineares trabalhando apenas com
          produtos internos (o kernel trick).
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>O hiperplano <InlineMath math="\mathbf{w}\cdot\mathbf{x}+b=0" /> separa as classes; a margem tem largura <InlineMath math="2/\|\mathbf{w}\|" /></li>
            <li>Maximizar a margem ≡ resolver <InlineMath math="\min \frac{1}{2}\|\mathbf{w}\|^2" /> sujeito a <InlineMath math="y_i(\mathbf{w}\cdot\mathbf{x}_i+b)\geq 1" /></li>
            <li>A formulação dual depende apenas de produtos internos — <InlineMath math="\mathbf{w}=\sum_i \alpha_i y_i \mathbf{x}_i" />, e só os support vectors têm <InlineMath math="\alpha_i&gt;0" /></li>
            <li>Soft margin (parâmetro C) introduz slack <InlineMath math="\xi_i" /> para tolerar violações — C controla o trade-off margem/erro</li>
            <li>Kernel trick: substituir <InlineMath math="\mathbf{x}_i\cdot\mathbf{x}_j" /> por <InlineMath math="K(\mathbf{x}_i,\mathbf{x}_j)" /> permite fronteiras não-lineares (polinomial, RBF, sigmoid) sem custo de calcular φ(x)</li>
            <li>Multi-classe: One-vs-Rest (K classificadores) ou One-vs-One (K(K−1)/2 classificadores)</li>
            <li>SVR adapta a ideia a regressão via um tubo ε-insensível</li>
            <li>SVM é forte em datasets pequenos/médios com fronteiras complexas, mas escala mal para N muito grande</li>
          </ul>
        
      </div>
    </div>
  );
}
