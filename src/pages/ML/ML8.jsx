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
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: detailed history timeline ===
const HistoryTimelineDiagram = () => {
  const events = [
    { year: '1943', label: 'McCulloch\n& Pitts', desc: 'Neurónio lógico', x: 40, c: '#f97316' },
    { year: '1957', label: 'Rosenblatt\nPerceptron', desc: 'Aprendizagem', x: 130, c: color },
    { year: '1969', label: 'Minsky &\nPapert', desc: 'Crítica XOR', x: 220, c: '#f97316' },
    { year: '1986', label: 'Rumelhart\net al.', desc: 'Backprop', x: 310, c: '#f97316' },
    { year: '1995', label: 'Vapnik\nSVM', desc: 'Domínio SVM', x: 400, c: '#f97316' },
    { year: '2006', label: 'Hinton\nDBN', desc: 'Ressurgimento', x: 490, c: '#f97316' },
    { year: '2012', label: 'Krizhevsky\nAlexNet', desc: 'Deep CNNs', x: 580, c: '#f97316' },
    { year: '2017', label: 'AlphaGo &\nTransformers', desc: 'Era moderna', x: 670, c: '#f97316' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Linha do Tempo das Redes Neuronais</p>
      <svg viewBox="0 0 720 170" style={{ maxWidth: '100%', height: 'auto' }}>
        <line x1="20" y1="70" x2="700" y2="70" stroke="var(--text-secondary)" strokeWidth="2" />
        {events.map(({ year, label, desc, x, c }, i) => (
          <g key={year}>
            <circle cx={x} cy={70} r="7" fill={c} />
            <text x={x} y={50} textAnchor="middle" fill={c} fontSize="11" fontWeight="700">{year}</text>
            {label.split('\n').map((l, li) => (
              <text key={li} x={x} y={90 + li * 13} textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">{l}</text>
            ))}
            <text x={x} y={125} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{desc}</text>
            {i < events.length - 1 && (
              <line x1={x + 7} y1={70} x2={events[i + 1].x - 7} y2={70} stroke="var(--text-secondary)" strokeWidth="2" />
            )}
          </g>
        ))}
        {/* AI winter band */}
        <rect x="220" y="140" width="90" height="22" rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
        <text x="265" y="155" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700">1º Inverno da IA</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        A história das redes neuronais não é linear: passou por dois grandes "infernos" de optimismo
        seguidos de "invernos" de desilusão. O primeiro inverno (1969-1986) foi desencadeado pela crítica de
        Minsky &amp; Papert ao Perceptron (não conseguia resolver XOR). O backprop (1986) reanimou o campo,
        mas nos anos 1990 as <strong>SVMs</strong> dominaram por terem garantias teóricas melhores e
        treinarem mais facilmente. Só a partir de 2006 (Deep Belief Networks de Hinton) e, sobretudo, 2012
        (AlexNet, que venceu o ImageNet por larga margem), as redes neuronais profundas se tornaram o
        paradigma dominante — culminando em 2017 com o AlphaGo e os Transformers.
      </p>
    </div>
  );
};

// === Diagram: artificial neuron anatomy ===
const NeuronDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Anatomia do Neurónio Artificial</p>
    <svg viewBox="0 0 540 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr-nn" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arr-nn2" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={color} />
        </marker>
      </defs>
      {[['x₁', 30], ['x₂', 80], ['xₙ', 130]].map(([label, y]) => (
        <g key={label}>
          <circle cx={40} cy={y} r={14} fill={`${color}15`} stroke={color} strokeWidth="1.5" />
          <text x={40} y={y + 4} textAnchor="middle" fill={color} fontSize="10" fontWeight="700">{label}</text>
          <line x1={54} y1={y} x2={180} y2={80} stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr-nn)" />
        </g>
      ))}
      <text x={40} y={110} textAnchor="middle" fill="var(--text-secondary)" fontSize="8">...</text>
      <text x={110} y={52} fill="#f97316" fontSize="8" fontWeight="700">w₁</text>
      <text x={110} y={82} fill="#f97316" fontSize="8" fontWeight="700">w₂</text>
      <text x={110} y={120} fill="#f97316" fontSize="8" fontWeight="700">wₙ</text>
      <circle cx={210} cy={80} r={30} fill={`${color}15`} stroke={color} strokeWidth="2" />
      <text x={210} y={74} textAnchor="middle" fill={color} fontSize="8" fontWeight="700">z = wᵀx + b</text>
      <text x={210} y={86} textAnchor="middle" fill={color} fontSize="8">a = f(z)</text>
      <circle cx={210} cy={20} r={10} fill="#f59e0b20" stroke="#f59e0b" strokeWidth="1.5" />
      <text x={210} y={24} textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700">b</text>
      <line x1={210} y1={30} x2={210} y2={50} stroke="#f59e0b" strokeWidth="1" markerEnd="url(#arr-nn)" />
      <line x1={240} y1={80} x2={320} y2={80} stroke={color} strokeWidth="2" markerEnd="url(#arr-nn2)" />
      <circle cx={340} cy={80} r={20} fill={`${color}20`} stroke={color} strokeWidth="2" />
      <text x={340} y={84} textAnchor="middle" fill={color} fontSize="9" fontWeight="800">ŷ</text>
      <text x={270} y={72} fill={color} fontSize="8">f(·)</text>
      <text x={400} y={50} fill="var(--text-secondary)" fontSize="9" fontWeight="700">z = Σwᵢxᵢ + b</text>
      <text x={400} y={65} fill={color} fontSize="9" fontWeight="700">a = f(z)</text>
      <text x={400} y={90} fill="var(--text-secondary)" fontSize="7">f = função de activação</text>
      <text x={400} y={103} fill="var(--text-secondary)" fontSize="7">Step, Sigmoid, ReLU, Tanh...</text>
    </svg>
  </div>
);

// === Diagram: activation curves ===
const ActivationCurves = () => {
  const w = 160, h = 110, pad = 18;
  const xToPx = (x) => pad + ((x + 4) / 8) * (w - 2 * pad);
  const yToPx = (y, yMin, yMax) => h - pad - ((y - yMin) / (yMax - yMin)) * (h - 2 * pad);

  const step = (x) => (x >= 0 ? 1 : 0);
  const sigmoid = (x) => 1 / (1 + Math.exp(-x));
  const tanh = (x) => Math.tanh(x);
  const relu = (x) => Math.max(0, x);

  const makePath = (fn, yMin, yMax) => {
    let d = '';
    for (let i = 0; i <= 60; i++) {
      const x = -4 + (8 * i) / 60;
      const y = fn(x);
      const px = xToPx(x);
      const py = yToPx(Math.max(yMin, Math.min(yMax, y)), yMin, yMax);
      d += (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + py.toFixed(1) + ' ';
    }
    return d;
  };

  const plots = [
    { name: 'Step', fn: step, yMin: -0.2, yMax: 1.2, c: '#f97316' },
    { name: 'Sigmoid', fn: sigmoid, yMin: 0, yMax: 1, c: '#f97316' },
    { name: 'Tanh', fn: tanh, yMin: -1, yMax: 1, c: '#f97316' },
    { name: 'ReLU', fn: relu, yMin: -1, yMax: 4, c: color },
  ];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Curvas das Principais Funções de Activação</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {plots.map(({ name, fn, yMin, yMax, c }) => (
          <div key={name}>
            <svg viewBox={`0 0 ${w} ${h}`} width="160" height="110">
              <line x1={pad} y1={yToPx(0, yMin, yMax)} x2={w - pad} y2={yToPx(0, yMin, yMax)} stroke="var(--text-secondary)" strokeWidth="1" />
              <line x1={xToPx(0)} y1={pad} x2={xToPx(0)} y2={h - pad} stroke="var(--text-secondary)" strokeWidth="1" />
              <path d={makePath(fn, yMin, yMax)} fill="none" stroke={c} strokeWidth="2" />
            </svg>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: c, margin: 0 }}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// === Diagram: decision boundary plots for AND/OR/NOT/XOR ===
const LogicGateDiagram = ({ title, points, line, region }) => (
  <div>
    <svg viewBox="0 0 160 160" width="160" height="160">
      <line x1="20" y1="140" x2="150" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1="20" y1="140" x2="20" y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x="155" y="144" fontSize="10" fill="var(--text-secondary)">x₁</text>
      <text x="10" y="10" fontSize="10" fill="var(--text-secondary)">x₂</text>
      {region && (
        <polygon points={region} fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.2" />
      )}
      {line && (
        <line x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      )}
      {!line && !region && (
        <text x="85" y="78" textAnchor="middle" fontSize="9" fill="#f97316">sem recta separadora</text>
      )}
      {points.map(([px, py, val, lbl], i) => (
        <g key={i}>
          <circle cx={px} cy={py} r="7" fill={val === 1 ? color : 'var(--text-secondary)'} opacity={val === 1 ? 1 : 0.4} />
          <text x={px} y={py < 80 ? py - 12 : py + 16} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">{lbl}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{title}</p>
  </div>
);

const LogicGatesDiagram = () => {
  const p00 = [20, 140, 'NaN', '(0,0)'];
  const p01 = [20, 20, 'NaN', '(0,1)'];
  const p10 = [130, 140, 'NaN', '(1,0)'];
  const p11 = [130, 20, 'NaN', '(1,1)'];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Fronteiras de Decisão: AND, OR, NOT, XOR</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <LogicGateDiagram
          title="AND — separável"
          points={[[...p00.slice(0, 2), 0, '(0,0)→0'], [...p01.slice(0, 2), 0, '(0,1)→0'], [...p10.slice(0, 2), 0, '(1,0)→0'], [...p11.slice(0, 2), 1, '(1,1)→1']]}
          line={[15, 95, 145, 65]}
        />
        <LogicGateDiagram
          title="OR — separável"
          points={[[...p00.slice(0, 2), 0, '(0,0)→0'], [...p01.slice(0, 2), 1, '(0,1)→1'], [...p10.slice(0, 2), 1, '(1,0)→1'], [...p11.slice(0, 2), 1, '(1,1)→1']]}
          line={[15, 65, 145, 95]}
        />
        <LogicGateDiagram
          title="NOT — separável (1D)"
          points={[[20, 80, 1, 'x=0→1'], [130, 80, 0, 'x=1→0']]}
          line={[75, 10, 75, 150]}
        />
        <LogicGateDiagram
          title="XOR — NÃO separável"
          points={[[...p00.slice(0, 2), 0, '(0,0)→0'], [...p01.slice(0, 2), 1, '(0,1)→1'], [...p10.slice(0, 2), 1, '(1,0)→1'], [...p11.slice(0, 2), 0, '(1,1)→0']]}
        />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
        AND, OR e NOT são funções <strong>linearmente separáveis</strong>: existe sempre uma recta (ou hiperplano,
        em dimensões maiores) que separa os pontos da classe 0 dos pontos da classe 1. Um único perceptron
        consegue aprender qualquer uma destas três funções. O XOR, pelo contrário, tem as classes "alternadas"
        nos cantos do quadrado — nenhuma recta consegue separá-las, e por isso nenhum perceptron isolado
        consegue aprender XOR, independentemente de quanto tempo for treinado.
      </p>
    </div>
  );
};

// === Diagram: perceptron learning step-by-step on AND gate ===
const PerceptronLearningDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Evolução da Fronteira de Decisão Durante o Treino (AND)</p>
    <svg viewBox="0 0 520 160" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        { cx: 70, title: 'Início (w=0,0, b=0)', line: null },
        { cx: 250, title: 'Após iteração 1', line: [15, 90, 125, 50] },
        { cx: 430, title: 'Após iteração 2 (convergiu)', line: [15, 110, 125, 30] },
      ].map(({ cx, title, line }, i) => (
        <g key={i} transform={`translate(${cx - 70}, 0)`}>
          <line x1="20" y1="140" x2="150" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="20" y1="140" x2="20" y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="155" y="144" fontSize="9" fill="var(--text-secondary)">x₁</text>
          <text x="10" y="10" fontSize="9" fill="var(--text-secondary)">x₂</text>
          {line && <line x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />}
          <circle cx="20" cy="140" r="6" fill="var(--text-secondary)" opacity="0.4" />
          <circle cx="20" cy="20" r="6" fill="var(--text-secondary)" opacity="0.4" />
          <circle cx="130" cy="140" r="6" fill="var(--text-secondary)" opacity="0.4" />
          <circle cx="130" cy="20" r="6" fill={color} />
          <text x="85" y="158" textAnchor="middle" fontSize="9" fill="var(--text-primary)" fontWeight="700">{title}</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Apenas o ponto (1,1) pertence à classe 1 (destacado a rosa); os restantes três pontos pertencem à
      classe 0. A cada iteração, o algoritmo ajusta os pesos sempre que classifica mal um ponto, rodando e
      deslocando a recta de decisão até que todos os pontos fiquem correctamente classificados.
    </p>
  </div>
);

// === Diagram: gradient descent on weight space ===
const GradientDescentDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Intuição: Erro Quadrático e Descida de Gradiente (Adaline)</p>
    <svg viewBox="0 0 480 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrGD" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
        </marker>
      </defs>
      <path d="M 20 30 C 100 10, 160 170, 250 160 C 340 150, 380 60, 460 40"
        fill="none" stroke={color} strokeWidth="2.5" />
      {[
        [60, 25, 0.4],
        [130, 110, 0.65],
        [190, 150, 0.85],
        [250, 160, 1.0],
      ].map(([cx, cy, op], i) => (
        <circle key={i} cx={cx} cy={cy - 6} r="7" fill="#f59e0b" opacity={op} />
      ))}
      <path d="M 65 22 Q 95 60 125 100" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrGD)" />
      <path d="M 132 112 Q 160 140 185 148" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrGD)" />
      <text x="250" y="175" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">mínimo (erro mínimo)</text>
      <text x="60" y="15" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">pesos iniciais (aleatórios)</text>
      <text x="20" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">SSE alto</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Ao contrário do Perceptron, que só observa se a previsão final está certa ou errada, o Adaline avalia
      o erro <strong>antes</strong> da função de activação (sobre o valor contínuo <InlineMath math="z" />),
      usando a soma dos erros quadráticos (SSE) como superfície de perda. Esta superfície é uma "tigela"
      suave e convexa (no caso linear), permitindo aplicar gradiente descendente de forma directa — cada
      passo move os pesos na direcção que reduz o erro mais rapidamente.
    </p>
  </div>
);

// === Diagram: simple MLP for XOR ===
const MLPXORDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>MLP de 2 Camadas — A Solução para o XOR</p>
    <svg viewBox="0 0 380 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrMLP" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>
      {/* input layer */}
      {[['x₁', 50], ['x₂', 150]].map(([label, y]) => (
        <g key={label}>
          <circle cx="50" cy={y} r="16" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
          <text x="50" y={y + 4} textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">{label}</text>
        </g>
      ))}
      {/* hidden layer */}
      {[['h₁', 50], ['h₂', 150]].map(([label, y]) => (
        <g key={label}>
          <circle cx="190" cy={y} r="16" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
          <text x="190" y={y + 4} textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{label}</text>
        </g>
      ))}
      {/* connections input -> hidden */}
      {[50, 150].map((y1) => [50, 150].map((y2) => (
        <line key={`${y1}-${y2}`} x1="66" y1={y1} x2="174" y2={y2} stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrMLP)" />
      )))}
      {/* output */}
      <circle cx="330" cy="100" r="18" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="330" y="104" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">ŷ</text>
      {[50, 150].map((y1) => (
        <line key={y1} x1="206" y1={y1} x2="313" y2="100" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arrMLP)" />
      ))}
      <text x="50" y="190" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">input</text>
      <text x="190" y="190" textAnchor="middle" fill={color} fontSize="10">hidden (não-linear)</text>
      <text x="330" y="190" textAnchor="middle" fill="#f97316" fontSize="10">output</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Cada neurónio escondido aprende a sua própria fronteira linear; por exemplo, h₁ pode aproximar-se de
      "x₁ OR x₂" e h₂ de "NOT(x₁ AND x₂)". A camada de output combina h₁ e h₂ com um AND lógico — e
      h₁ AND h₂ é precisamente XOR. É esta <strong>composição de fronteiras lineares</strong> que dá à MLP
      o poder de representar funções não-lineares.
    </p>
  </div>
);

export default function ML8() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}><ArrowLeft size={16} /> Voltar a Machine Learning</Link>

      <div style={S.tag}>Module 08</div>
      <h1 style={S.h1}>Redes Neuronais &amp; Perceptron</h1>
      <p style={S.lead}>
        Antes do "deep learning" haver redes profundas, houve um único neurónio. Neste módulo revisitamos
        as origens históricas das redes neuronais — desde o neurónio lógico de McCulloch &amp; Pitts (1943)
        ao Perceptron de Rosenblatt (1957) — e construímos, passo a passo, a intuição matemática completa:
        como um neurónio agrega informação, como aprende a partir de erros (Perceptron e Adaline), porque
        é que um único neurónio tem limites fundamentais (XOR), e como a composição de vários neurónios em
        camadas (MLP) ultrapassa esses limites. Esta é a perspectiva "clássica" da disciplina de Machine
        Learning — o Módulo 01 de Deep Learning aprofunda a versão moderna deste mesmo tema.
      </p>

      {/* === SECTION 1: História === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. História — Da Lógica ao AlphaGo</h2>
        <p style={S.p}>
          As redes neuronais não nasceram com o deep learning. A sua história estende-se por mais de 80 anos,
          com altos e baixos dramáticos — incluindo dois "invernos" em que a investigação praticamente parou
          por falta de resultados práticos e de poder computacional.
        </p>
        <HistoryTimelineDiagram />
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>Ano</th><th style={S.th}>Marco</th><th style={S.th}>Significado</th></tr>
          </thead>
          <tbody>
            {[
              ['1943', 'McCulloch & Pitts', 'Primeiro modelo matemático de "neurónio" — uma porta lógica binária'],
              ['1957', 'Rosenblatt — Perceptron', 'Primeiro algoritmo capaz de aprender pesos a partir de exemplos'],
              ['1969', 'Minsky & Papert', 'Provam que o Perceptron não resolve XOR — início do 1º inverno da IA'],
              ['1986', 'Rumelhart, Hinton, Williams', 'Backpropagation populariza-se — permite treinar MLPs'],
              ['1995', 'Vapnik — SVM', 'Support Vector Machines dominam o ML durante quase 15 anos'],
              ['2006', 'Hinton — Deep Belief Networks', 'Pré-treino camada-a-camada relança o interesse em redes profundas'],
              ['2012', 'Krizhevsky — AlexNet', 'CNN profunda vence o ImageNet por margem enorme — início da era deep'],
              ['2017', 'AlphaGo / Transformers', 'Redes profundas tornam-se o paradigma dominante em IA'],
            ].map(([y, m, s], i) => (
              <tr key={i}><td style={{ ...S.td, fontWeight: 700, color }}>{y}</td><td style={S.td}>{m}</td><td style={S.td}>{s}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Note como a história não é uma "linha recta de progresso": entre 1969 e 1986, e de novo entre
          1995 e 2006, as redes neuronais foram consideradas um beco sem saída por boa parte da comunidade
          científica. As ideias eram, em grande parte, as mesmas — o que mudou foi a disponibilidade de
          dados e de poder computacional.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: O Neurónio Artificial === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. O Neurónio Artificial</h2>
        <p style={S.p}>
          Um neurónio artificial é uma função matemática simples que recebe um vector de entradas
          <InlineMath math="\mathbf{x} = (x_1, \dots, x_n)" />, calcula uma <strong>soma ponderada</strong> e
          aplica uma <strong>função de activação</strong>.
        </p>
        <NeuronDiagram />
        <div style={S.math}>
          <BlockMath math="z = \sum_{i=1}^{n} w_i x_i + b = \mathbf{w} \cdot \mathbf{x} + b \qquad a = f(z)" />
        </div>
        <p style={S.p}>
          O termo <InlineMath math="b" /> (bias) funciona como um limiar ajustável: sem ele, a fronteira de
          decisão do neurónio seria forçada a passar pela origem. Os <strong>pesos</strong> <InlineMath math="w_i" />
          determinam a importância (e o sinal — positivo ou negativo) de cada entrada na decisão final.
        </p>

        <h3 style={S.h3}>Exemplo Numérico</h3>
        <p style={S.p}>
          Considere um neurónio com 2 entradas e os pesos abaixo, usando a função Step como activação:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Variável</th><th style={S.th}>Valor</th></tr></thead>
            <tbody>
              {[
                ['x₁, x₂ (entradas)', '1, 0'],
                ['w₁, w₂ (pesos)', '0.6, 0.6'],
                ['b (bias)', '−1.0'],
              ].map(([k, v]) => (
                <tr key={k}><td style={S.td}><strong>{k}</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <BlockMath math="z = (0.6)(1) + (0.6)(0) + (-1.0) = 0.6 - 1.0 = -0.4" />
          <BlockMath math="a = \text{step}(-0.4) = 0" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Com estes pesos e bias, o neurónio implementa a porta lógica <strong>AND</strong>: só dispara
            (output 1) quando ambas as entradas são 1 — o único caso em que <InlineMath math="z \geq 0" />.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Funções de Activação === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Funções de Activação</h2>
        <p style={S.p}>
          A função de activação determina o "comportamento" do neurónio: se ele responde de forma binária
          (tudo ou nada), suave, ou proporcional ao input. Sem não-linearidade, mesmo uma rede com muitas
          camadas colapsa numa única transformação linear.
        </p>
        <ActivationCurves />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Função</th>
                <th style={S.th}>Fórmula</th>
                <th style={S.th}>Range</th>
                <th style={S.th}>Uso típico</th>
                <th style={S.th}>Limitação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Step</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \begin{cases} 1 & z \geq 0 \\ 0 & z < 0 \end{cases}" /></td>
                <td style={S.td}>{'{0, 1}'}</td>
                <td style={S.td}>Perceptron original (1957)</td>
                <td style={S.td}>Não-diferenciável — sem gradiente para treino moderno</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Sigmoid</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \dfrac{1}{1+e^{-z}}" /></td>
                <td style={S.td}>(0, 1)</td>
                <td style={S.td}>Classificação binária, output layer</td>
                <td style={S.td}>Satura para |z| grande — vanishing gradient</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Tanh</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \dfrac{e^{z}-e^{-z}}{e^{z}+e^{-z}}" /></td>
                <td style={S.td}>(−1, 1)</td>
                <td style={S.td}>Hidden layers (centrado em zero)</td>
                <td style={S.td}>Ainda satura, embora menos que a sigmoid</td>
              </tr>
              <tr>
                <td style={S.td}><strong>ReLU</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \max(0, z)" /></td>
                <td style={S.td}>[0, ∞)</td>
                <td style={S.td}>Default em hidden layers de deep learning</td>
                <td style={S.td}>"Neurónios mortos" quando z {'<'} 0 sempre</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Softmax</strong></td>
                <td style={S.td}><InlineMath math="f(z_i) = \dfrac{e^{z_i}}{\sum_j e^{z_j}}" /></td>
                <td style={S.td}>(0,1), soma = 1</td>
                <td style={S.td}>Output layer em classificação multi-classe</td>
                <td style={S.td}>Apenas usada na camada final</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          O Perceptron original usava exclusivamente a função <strong>Step</strong> — daí a sua principal
          limitação: como a Step tem derivada zero (ou indefinida) em quase todo o domínio, é impossível
          usar gradiente descendente directamente sobre ela. O Adaline, que veremos a seguir, contorna este
          problema ao calcular o erro <em>antes</em> da activação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Linear Separabilidade === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Separabilidade Linear — AND, OR, NOT, XOR</h2>
        <p style={S.p}>
          Um único neurónio com função Step define uma <strong>fronteira de decisão linear</strong> — uma
          recta (em 2D), um plano (em 3D), ou um hiperplano (em dimensões maiores). Isto significa que o
          neurónio só consegue classificar correctamente problemas em que as duas classes possam ser
          separadas por essa fronteira linear.
        </p>
        <LogicGatesDiagram />
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>x₁</th><th style={S.th}>x₂</th><th style={S.th}>AND</th><th style={S.th}>OR</th><th style={S.th}>XOR</th></tr>
          </thead>
          <tbody>
            {[
              ['0', '0', '0', '0', '0'],
              ['0', '1', '0', '1', '1'],
              ['1', '0', '0', '1', '1'],
              ['1', '1', '1', '1', '0'],
            ].map(([a, b, and_, or_, xor_], i) => (
              <tr key={i}>
                <td style={S.td}>{a}</td><td style={S.td}>{b}</td>
                <td style={S.td}>{and_}</td><td style={S.td}>{or_}</td>
                <td style={{ ...S.td, fontWeight: 700, color }}>{xor_}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Perceptron Learning Algorithm === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. O Algoritmo de Aprendizagem do Perceptron</h2>
        <p style={S.p}>
          O grande avanço de Rosenblatt em 1957 não foi o neurónio em si (que já existia desde 1943), mas
          sim um <strong>algoritmo de aprendizagem</strong>: uma regra simples para ajustar automaticamente
          os pesos a partir de exemplos rotulados, sem intervenção humana.
        </p>
        <div style={S.math}>
          <BlockMath math="w_i \leftarrow w_i + \eta \, (y - \hat{y}) \, x_i \qquad b \leftarrow b + \eta \, (y - \hat{y})" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="y" /> é o valor verdadeiro (label), <InlineMath math="\hat{y}" /> é a
          previsão do neurónio, e <InlineMath math="\eta" /> (eta) é a <strong>taxa de aprendizagem</strong>
          (learning rate). Note que a actualização só acontece quando há erro: se <InlineMath math="y = \hat{y}" />,
          então <InlineMath math="(y-\hat{y}) = 0" /> e os pesos não mudam.
        </p>

        <h3 style={S.h3}>Exemplo Numérico Completo — Aprender a porta AND</h3>
        <p style={S.p}>
          Vamos treinar um perceptron com <InlineMath math="\eta = 0.1" />, pesos iniciais
          <InlineMath math="w_1 = w_2 = 0" /> e <InlineMath math="b = 0" />, sobre os 4 exemplos da porta AND:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>x₁</th><th style={S.th}>x₂</th><th style={S.th}>y (AND)</th></tr></thead>
            <tbody>
              {[['0', '0', '0'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '1']].map(([a, b, y], i) => (
                <tr key={i}><td style={S.td}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, fontWeight: 700, color }}>{y}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Iteração 1 (Época 1)</h3>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>(x₁,x₂)=(0,0), y=0:</strong> <InlineMath math="z = 0, \hat{y} = \text{step}(0) = 1" />.
            Erro = 0 − 1 = −1 → actualiza:
          </p>
          <BlockMath math="w_1 = 0 + 0.1(-1)(0) = 0 \quad w_2 = 0 + 0.1(-1)(0) = 0 \quad b = 0 + 0.1(-1) = -0.1" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}>
            <strong>(x₁,x₂)=(0,1), y=0:</strong> <InlineMath math="z = -0.1, \hat{y} = \text{step}(-0.1) = 0" />.
            Sem erro — sem actualização.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}>
            <strong>(x₁,x₂)=(1,0), y=0:</strong> <InlineMath math="z = -0.1, \hat{y} = 0" />. Sem erro.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}>
            <strong>(x₁,x₂)=(1,1), y=1:</strong> <InlineMath math="z = -0.1, \hat{y} = \text{step}(-0.1) = 0" />.
            Erro = 1 − 0 = +1 → actualiza:
          </p>
          <BlockMath math="w_1 = 0 + 0.1(1)(1) = 0.1 \quad w_2 = 0 + 0.1(1)(1) = 0.1 \quad b = -0.1 + 0.1(1) = 0.0" />
        

        <h3 style={S.h3}>Iteração 2 (Época 2)</h3>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Pesos actuais: <InlineMath math="w_1=0.1, w_2=0.1, b=0.0" />.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>(0,0), y=0:</strong> <InlineMath math="z=0, \hat{y}=\text{step}(0)=1" />. Erro = −1 →
          </p>
          <BlockMath math="w_1=0.1,\ w_2=0.1,\ b = 0.0 + 0.1(-1) = -0.1" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}>
            <strong>(0,1), y=0:</strong> <InlineMath math="z=0.1-0.1=0.0, \hat{y}=1" />. Erro = −1 →
          </p>
          <BlockMath math="w_1=0.1,\ w_2=0.1+0.1(-1)(1)=0.0,\ b=-0.1+0.1(-1)=-0.2" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}>
            <strong>(1,0), y=0:</strong> <InlineMath math="z=0.1-0.2=-0.1, \hat{y}=0" />. Sem erro.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}>
            <strong>(1,1), y=1:</strong> <InlineMath math="z=0.1+0.0-0.2=-0.1, \hat{y}=0" />. Erro = +1 →
          </p>
          <BlockMath math="w_1=0.1+0.1(1)(1)=0.2,\ w_2=0.0+0.1(1)(1)=0.1,\ b=-0.2+0.1(1)=-0.1" />
        

        <h3 style={S.h3}>Iteração 3 (Época 3) — Verificação</h3>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Pesos actuais: <InlineMath math="w_1=0.2, w_2=0.1, b=-0.1" />. Vamos testar todos os 4 exemplos:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>(x₁,x₂)</th><th style={S.th}>z</th><th style={S.th}>ŷ</th><th style={S.th}>y</th><th style={S.th}>Correcto?</th></tr></thead>
              <tbody>
                {[
                  ['(0,0)', '−0.1', '0', '0', '✓'],
                  ['(0,1)', '0.0', '0', '0', '✓'],
                  ['(1,0)', '0.1', '1', '0', '✗ ainda erra'],
                  ['(1,1)', '0.2', '1', '1', '✓'],
                ].map(([p, z, yh, y, ok], i) => (
                  <tr key={i}><td style={S.td}>{p}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{z}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{yh}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{y}</td><td style={{ ...S.td, color: ok === '✓' ? '#f97316' : '#f97316' }}>{ok}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Ainda há um erro em (1,0) — o algoritmo continuaria a actualizar os pesos em mais algumas
            iterações até convergir totalmente. Note como o processo é puramente <strong>incremental</strong>:
            cada exemplo mal classificado "empurra" ligeiramente a fronteira de decisão na direcção certa.
          </p>
        
        <PerceptronLearningDiagram />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Convergence Theorem === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Teorema da Convergência do Perceptron</h2>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Teorema (Rosenblatt, 1962; Novikoff, 1962):</strong> Se os dados de treino forem
            <strong> linearmente separáveis</strong>, o algoritmo de aprendizagem do Perceptron converge
            para uma solução que classifica correctamente todos os exemplos, num <strong>número finito</strong> de
            actualizações — independentemente dos pesos iniciais.
          </p>
        </div>
        <p style={S.p}>
          A intuição é a seguinte: cada vez que o perceptron erra, a actualização
          <InlineMath math="\Delta\mathbf{w} = \eta(y-\hat{y})\mathbf{x}" /> move o vector de pesos
          numa direcção que <strong>reduz o ângulo</strong> entre <InlineMath math="\mathbf{w}" /> e
          (pelo menos) uma das soluções óptimas possíveis. Como existe um limite superior para quantas
          vezes isto pode acontecer antes de o ângulo ficar suficientemente pequeno, o número total de
          erros está limitado por uma constante que depende apenas da geometria dos dados (a margem entre
          as classes e a norma dos vectores de entrada).
        </p>
        <div style={S.note}>
          O reverso também é verdadeiro e crucial: se os dados <strong>não</strong> forem linearmente
          separáveis (como no XOR), o algoritmo <strong>nunca converge</strong> — fica a oscilar
          indefinidamente entre configurações de pesos, sem nunca classificar todos os exemplos
          correctamente. Foi exactamente esta observação, feita por Minsky &amp; Papert em 1969, que
          desencadeou o primeiro inverno da IA.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: ADALINE === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. ADALINE — Adaptive Linear Neuron</h2>
        <p style={S.p}>
          Em 1960, Widrow e Hoff propuseram o <strong>Adaline</strong>, uma variante do perceptron com uma
          diferença subtil mas profunda: em vez de calcular o erro <em>depois</em> da função de activação
          (sobre o valor binário <InlineMath math="\hat{y}" />), o Adaline calcula o erro <em>antes</em> —
          sobre o valor contínuo <InlineMath math="z" />. Esta regra é conhecida como
          <strong> regra de Widrow-Hoff</strong> ou <strong>regra LMS</strong> (Least Mean Squares).
        </p>
        <div style={S.math}>
          <BlockMath math="E = \frac{1}{2}\sum_{k} (y^{(k)} - z^{(k)})^2 \qquad \text{onde } z^{(k)} = \mathbf{w}\cdot\mathbf{x}^{(k)} + b" />
        </div>
        <p style={S.p}>
          A regra de actualização dos pesos passa a ser proporcional ao <strong>erro contínuo</strong>
          <InlineMath math="(y - z)" />, em vez do erro discreto <InlineMath math="(y-\hat{y}) \in \{-1,0,1\}" />:
        </p>
        <div style={S.math}>
          <BlockMath math="w_i \leftarrow w_i + \eta \, (y - z) \, x_i" />
        </div>

        <h3 style={S.h3}>Perceptron vs. Adaline</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Aspecto</th>
                <th style={S.th}>Perceptron (1957)</th>
                <th style={S.th}>Adaline (1960)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Erro calculado sobre', 'ŷ = f(z), valor pós-activação (0 ou 1)', 'z, valor pré-activação (contínuo)'],
                ['Regra de actualização', 'w ← w + η(y − ŷ)x', 'w ← w + η(y − z)x'],
                ['Função de perda', 'Implícita — nº de erros de classificação', 'Erro quadrático médio (MSE), explícita'],
                ['Superfície de optimização', 'Descontínua — sem gradiente bem definido', 'Suave e convexa — gradiente descendente directo'],
                ['Garantia de convergência', 'Converge só se linearmente separável', 'Converge para o mínimo do MSE (mesmo sem separar perfeitamente)'],
                ['Importância histórica', 'Primeiro algoritmo de aprendizagem supervisionada', 'Precursor directo do gradiente descendente em redes neuronais'],
              ].map(([a, p, ad], i) => (
                <tr key={i}><td style={{ ...S.td, fontWeight: 700 }}>{a}</td><td style={S.td}>{p}</td><td style={S.td}>{ad}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <GradientDescentDiagram />
        <div style={S.note}>
          O Adaline é, em retrospectiva, o elo perdido entre o Perceptron e o deep learning moderno: ao
          definir uma função de perda <strong>diferenciável</strong> e usar gradiente descendente para a
          minimizar, introduziu o paradigma que, décadas mais tarde, a backpropagation generalizaria para
          redes com múltiplas camadas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Gradiente Descendente formalizado === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Gradiente Descendente para o Adaline</h2>
        <p style={S.p}>
          A regra de Widrow-Hoff pode ser derivada formalmente como gradiente descendente sobre a função de
          perda <InlineMath math="E" />. Calculando a derivada parcial de <InlineMath math="E" /> em relação
          a cada peso <InlineMath math="w_i" />:
        </p>
        <div style={S.math}>
          <BlockMath math="\frac{\partial E}{\partial w_i} = \sum_k (z^{(k)} - y^{(k)}) \, x_i^{(k)}" />
        </div>
        <p style={S.p}>
          O gradiente descendente actualiza os pesos na direcção <strong>oposta</strong> ao gradiente,
          escalado pela taxa de aprendizagem <InlineMath math="\eta" />:
        </p>
        <div style={S.math}>
          <BlockMath math="w_i \leftarrow w_i - \eta \frac{\partial E}{\partial w_i} = w_i + \eta \sum_k (y^{(k)} - z^{(k)}) x_i^{(k)}" />
        </div>
        <p style={S.p}>
          Esta é exactamente a regra de Widrow-Hoff (na sua versão "batch", somando sobre todos os exemplos
          — a versão "online" actualiza após cada exemplo individual, como mostrámos para o perceptron).
          O mesmo princípio — derivar a perda em relação a cada parâmetro e dar um passo na direcção que
          mais a reduz — é precisamente o que a <strong>backpropagation</strong> faz, de forma sistemática,
          para redes com muitas camadas e milhões de parâmetros.
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Exemplo numérico — um passo de gradiente:</strong></p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Considere <InlineMath math="w_1 = 0.2, \eta = 0.1" />, e um único exemplo
            <InlineMath math="x_1 = 1, y = 1, z = 0.2" />. O erro é <InlineMath math="(y - z) = 0.8" />:
          </p>
          <BlockMath math="w_1 \leftarrow 0.2 + 0.1 \times 0.8 \times 1 = 0.2 + 0.08 = 0.28" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            O peso aumenta proporcionalmente ao erro — quanto maior o erro, maior o ajuste. Isto contrasta
            com o Perceptron, em que a actualização teria sido sempre de magnitude fixa
            <InlineMath math="\eta \cdot x_1" />, independentemente de quão "errado" estava <InlineMath math="z" />.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: MLP como solução do XOR === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Multi-Layer Perceptron — A Solução para o XOR</h2>
        <p style={S.p}>
          Como vimos, nem o Perceptron nem o Adaline conseguem resolver o XOR — ambos definem uma única
          fronteira linear. A solução, formalizada sobretudo após 1986, é simples de enunciar: adicionar
          pelo menos uma <strong>camada escondida</strong> (hidden layer) entre o input e o output, criando
          um <strong>Multi-Layer Perceptron (MLP)</strong>.
        </p>
        <MLPXORDiagram />
        <p style={S.p}>
          Cada neurónio escondido aplica a sua própria transformação <InlineMath math="z = \mathbf{w}\cdot\mathbf{x}+b" />
          seguida de uma activação não-linear, e a camada de output combina essas transformações
          intermédias. O resultado é uma fronteira de decisão composta — capaz de "dobrar" o espaço de
          entradas em regiões não-lineares, como o padrão em "diamante" necessário para separar as classes
          do XOR.
        </p>
        <div style={S.note}>
          O <strong>Universal Approximation Theorem</strong> (Cybenko, 1989) garante que uma MLP com apenas
          uma camada escondida, com neurónios suficientes e uma activação não-linear adequada, pode
          aproximar qualquer função contínua com a precisão desejada — um resultado teórico fundamental
          que justifica, em última análise, todo o edifício do deep learning.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 10: Single-Layer vs Multi-Layer === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Single-Layer vs. Multi-Layer — Comparação</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Aspecto</th>
                <th style={S.th}>Perceptron / Adaline (single-layer)</th>
                <th style={S.th}>MLP (multi-layer)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Poder representacional', 'Apenas fronteiras lineares (hiperplanos)', 'Fronteiras não-lineares arbitrárias (com camadas/neurónios suficientes)'],
                ['Problemas resolvíveis', 'AND, OR, NOT — linearmente separáveis', 'XOR e qualquer função contínua (Universal Approximation)'],
                ['Algoritmo de treino', 'Regra do Perceptron / Widrow-Hoff (LMS)', 'Backpropagation + gradiente descendente'],
                ['Função de activação', 'Step (Perceptron) ou linear (Adaline)', 'Sigmoid, Tanh, ReLU — não-linearidades diferenciáveis'],
                ['Garantias teóricas', 'Convergência garantida se separável (1962)', 'Convergência para mínimo local; sem garantia de global'],
                ['Era histórica dominante', '1957-1969 (e Adaline 1960-1969)', '1986-1995, e sobretudo 2006-presente'],
              ].map(([a, s, m], i) => (
                <tr key={i}><td style={{ ...S.td, fontWeight: 700 }}>{a}</td><td style={S.td}>{s}</td><td style={S.td}>{m}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Esta tabela resume a "moral da história" deste módulo: cada limitação do modelo mais simples
          motivou directamente a evolução para o modelo seguinte. A limitação do Perceptron com a função
          Step motivou o Adaline (erro contínuo); a limitação de ambos com o XOR motivou o MLP (camadas
          escondidas); e a dificuldade de calcular gradientes em redes profundas motivou a backpropagation —
          o tema central do Módulo 01 de Deep Learning.
        </p>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>11. Síntese do Módulo</h2>
        <p style={S.p}>
          O Perceptron de 1957 foi o primeiro modelo a "aprender" pesos a partir de exemplos — uma ideia
          revolucionária, mas com limites fundamentais que só a composição em camadas (MLP) conseguiu
          ultrapassar.
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Um neurónio artificial calcula <InlineMath math="z = \mathbf{w}\cdot\mathbf{x}+b" /> e aplica <InlineMath math="f(z)" /></li>
            <li>Step, Sigmoid, Tanh, ReLU e Softmax são as funções de activação fundamentais, cada uma com usos próprios</li>
            <li>O Perceptron aprende com a regra <InlineMath math="w \leftarrow w + \eta(y-\hat{y})x" />, e converge garantidamente se os dados forem linearmente separáveis</li>
            <li>AND, OR e NOT são linearmente separáveis; XOR não é — limite fundamental de um único neurónio</li>
            <li>O Adaline introduziu o erro contínuo e a regra LMS (Widrow-Hoff), antecipando o gradiente descendente</li>
            <li>O MLP resolve o XOR ao adicionar camadas escondidas, compondo fronteiras lineares em fronteiras não-lineares</li>
            <li>A história das redes neuronais teve dois "invernos" — cada um seguido de um avanço algorítmico (backprop, deep learning)</li>
          </ul>
        
      </div>
    </div>
  );
}
