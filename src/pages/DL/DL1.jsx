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
  note: { background: 'rgba(79,70,229,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
};

// === Diagram: biological vs artificial neuron ===
const NeuronComparisonDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Neurónio Biológico vs. Neurónio Artificial</p>
    <svg viewBox="0 0 600 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrN1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
        <marker id="arrN1g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
        </marker>
      </defs>

      {/* Biological neuron */}
      <text x="150" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontWeight="700">Neurónio Biológico</text>
      {[60, 90, 120].map((y, i) => (
        <line key={i} x1="20" y1={y} x2="80" y2="100" stroke="#f97316" strokeWidth="1.5" />
      ))}
      <text x="35" y="50" fill="#f97316" fontSize="10">dendrites</text>
      <ellipse cx="110" cy="100" rx="35" ry="28" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="110" y="104" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700">soma</text>
      <line x1="145" y1="100" x2="220" y2="100" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrN1g)" />
      <text x="180" y="90" textAnchor="middle" fill="#f97316" fontSize="10">axónio</text>
      <circle cx="225" cy="100" r="5" fill="#f97316" />
      <text x="225" y="125" textAnchor="middle" fill="#f97316" fontSize="10">sinapse</text>

      <line x1="300" y1="20" x2="300" y2="200" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4,3" />

      {/* Artificial neuron */}
      <text x="450" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="12" fontWeight="700">Neurónio Artificial</text>
      <circle cx="460" cy="100" r="32" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      {[60, 90, 120, 150].map((y, i) => {
        const dx = 460 - 370, dy = 100 - y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const ex = 460 - 32 * dx / len, ey = 100 - 32 * dy / len;
        const mx = (370 + ex) / 2, my = (y + ey) / 2;
        return (
          <g key={i}>
            <line x1="370" y1={y} x2={ex} y2={ey} stroke={color} strokeWidth="1.5" markerEnd="url(#arrN1)" />
            <text x="360" y={y + 4} textAnchor="end" fill={color} fontSize="11">x{i + 1}</text>
            <text x={mx - 8} y={my - 5} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">w{i + 1}</text>
          </g>
        );
      })}
      <text x="460" y="96" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">Σ + b</text>
      <text x="460" y="110" textAnchor="middle" fill={color} fontSize="9">activação</text>
      <line x1="492" y1="100" x2="560" y2="100" stroke={color} strokeWidth="2" markerEnd="url(#arrN1)" />
      <text x="555" y="90" textAnchor="middle" fill={color} fontSize="10">output</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      No cérebro, um neurónio recebe sinais eléctricos através das <strong>dendrites</strong>, integra-os no
      <strong> soma</strong> (corpo celular) e, se a soma ultrapassar um certo limiar, dispara um impulso
      ao longo do <strong>axónio</strong> que é transmitido a outros neurónios através das <strong>sinapses</strong> —
      cuja força (peso da ligação) pode ser reforçada ou enfraquecida com a aprendizagem. O neurónio artificial
      é uma simplificação matemática extrema desta ideia: <strong>inputs</strong> em vez de sinais dendríticos,
      <strong> pesos</strong> em vez da força sináptica, uma <strong>soma ponderada</strong> em vez da integração no
      soma, e uma <strong>função de activação</strong> que decide se e com que intensidade o "sinal" passa adiante.
    </p>
  </div>
);

// === Diagram: single artificial neuron with labeled weights ===
const SingleNeuronDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Anatomia de um Neurónio Artificial (Perceptron)</p>
    <svg viewBox="0 0 480 220" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrN2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      {[
        [40, 'x₁'],
        [110, 'x₂'],
        [180, 'x₃'],
      ].map(([y, label], i) => (
        <g key={i}>
          <circle cx="40" cy={y} r="18" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
          <text x="40" y={y + 4} textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">{label}</text>
          <line x1="58" y1={y} x2="195" y2="110" stroke={color} strokeWidth="1.5" markerEnd="url(#arrN2)" opacity="0.7" />
          <text x="125" y={(y + 110) / 2 - 6} textAnchor="middle" fill="var(--text-secondary)" fontSize="11">w{i + 1}</text>
        </g>
      ))}

      <text x="120" y="40" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">bias b</text>
      <line x1="150" y1="44" x2="195" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrN2)" />

      <circle cx="225" cy="110" r="35" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
      <text x="225" y="106" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">z</text>
      <text x="225" y="122" textAnchor="middle" fill={color} fontSize="9">Σwᵢxᵢ + b</text>

      <line x1="260" y1="110" x2="320" y2="110" stroke={color} strokeWidth="1.5" markerEnd="url(#arrN2)" />

      <rect x="320" y="80" width="80" height="60" rx="10" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
      <text x="360" y="106" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">f(z)</text>
      <text x="360" y="122" textAnchor="middle" fill="#f97316" fontSize="9">activação</text>

      <line x1="400" y1="110" x2="450" y2="110" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrN2)" />
      <text x="455" y="105" textAnchor="start" fill="var(--text-primary)" fontSize="12" fontWeight="700">a</text>
      <text x="455" y="120" textAnchor="start" fill="var(--text-secondary)" fontSize="9">output</text>
    </svg>
  </div>
);

// === Diagram: small MLP architecture ===
const MLPDiagram = () => {
  const layers = [
    { x: 50, n: 3, label: 'Input\n(3)', color: 'var(--text-secondary)' },
    { x: 190, n: 4, label: 'Hidden 1\n(4)', color: color },
    { x: 330, n: 3, label: 'Hidden 2\n(3)', color: color },
    { x: 470, n: 1, label: 'Output\n(1)', color: '#f97316' },
  ];
  const ys = (n) => {
    const spacing = 40;
    const total = (n - 1) * spacing;
    const start = 110 - total / 2;
    return Array.from({ length: n }, (_, i) => start + i * spacing);
  };
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Multi-Layer Perceptron (MLP) — 3 → 4 → 3 → 1</p>
      <svg viewBox="0 0 600 240" style={{ maxWidth: '100%', height: 'auto' }}>
        {layers.slice(0, -1).map((layer, li) => {
          const next = layers[li + 1];
          const ysFrom = ys(layer.n);
          const ysTo = ys(next.n);
          const r1 = li === layers.length - 2 ? 14 : 14;
          const r2 = li === layers.length - 2 ? 22 : 14;
          return ysFrom.map((y1, i) =>
            ysTo.map((y2, j) => (
              <line key={`${li}-${i}-${j}`} x1={layer.x + r1} y1={y1} x2={next.x - r2} y2={y2} stroke="#ffffff" strokeWidth="0.75" opacity="0.3" />
            ))
          );
        })}
        {layers.map((layer, li) => {
          const isOutput = li === layers.length - 1;
          const r = isOutput ? 22 : 14;
          return (
            <g key={li}>
              {ys(layer.n).map((y, i) => (
                <circle key={i} cx={layer.x} cy={y} r={r} fill="rgba(249,115,22,0.10)" stroke={layer.color} strokeWidth="1.5" />
              ))}
              {isOutput
                ? layer.label.split('\n').map((l, li2) => (
                    <text key={li2} x={layer.x + r + 6} y={106 + li2 * 16} textAnchor="start" fill={layer.color} fontSize="11" fontWeight={li2 === 0 ? '700' : '400'}>{l}</text>
                  ))
                : layer.label.split('\n').map((l, li2) => (
                    <text key={li2} x={layer.x} y={210 + li2 * 14} textAnchor="middle" fill={layer.color} fontSize="11" fontWeight={li2 === 0 ? '700' : '400'}>{l}</text>
                  ))
              }
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        Cada neurónio de uma camada está ligado a <strong>todos</strong> os neurónios da camada seguinte —
        chamamos a isto uma camada <strong>fully-connected</strong> (ou <em>dense</em>). A informação flui
        sempre da esquerda para a direita (forward pass): a camada de input recebe os dados, as camadas
        escondidas (hidden layers) transformam-nos progressivamente, e a camada de output produz a previsão final.
      </p>
    </div>
  );
};

// === Diagram: activation function curves ===
const ActivationCurves = () => {
  const w = 160, h = 110, pad = 18;
  const xToPx = (x) => pad + ((x + 4) / 8) * (w - 2 * pad);
  const yToPx = (y, yMin, yMax) => h - pad - ((y - yMin) / (yMax - yMin)) * (h - 2 * pad);

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

// === Diagram: hierarchical feature learning (image) ===
const HierarchyDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Aprendizagem Hierárquica de Características</p>
    <svg viewBox="0 0 640 150" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrN3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
      {[
        [60, 'Pixels\n(input)', '#f97316'],
        [190, 'Camadas\niniciais:\narestas, cores', '#f97316'],
        [320, 'Camadas\nintermédias:\nformas, texturas', color],
        [450, 'Camadas\nprofundas:\npartes (olhos, rodas)', '#f97316'],
        [580, 'Output:\n"gato" / "carro"', '#f97316'],
      ].map(([cx, label, col], i, arr) => (
        <g key={i}>
          <rect x={cx - 50} y="30" width="100" height="80" rx="10" fill={`${col}1A`} stroke={col} strokeWidth="1.2" />
          {label.split('\n').map((line, li) => (
            <text key={li} x={cx} y={56 + li * 14} textAnchor="middle" fill={col} fontSize="10" fontWeight={li === 0 ? '700' : '400'}>{line}</text>
          ))}
          {i < arr.length - 1 && (
            <line x1={cx + 50} y1="70" x2={arr[i + 1][0] - 50 - 5} y2="70" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrN3)" />
          )}
        </g>
      ))}
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Numa rede profunda treinada para reconhecer imagens, as primeiras camadas tendem a aprender detectores
      de padrões muito simples (arestas, contornos, gradientes de cor). As camadas seguintes combinam essas
      arestas em formas e texturas mais complexas. Camadas ainda mais profundas combinam essas formas em
      "partes" reconhecíveis (um olho, uma roda, uma orelha), até que a última camada combina essas partes
      para decidir a categoria final do objecto. Cada camada constrói representações mais abstractas a partir
      das representações da camada anterior — daí o nome <strong>"profunda"</strong> (deep).
    </p>
  </div>
);

// === Diagram: XOR problem ===
const XORDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>O Problema XOR — Não Linearmente Separável</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <svg viewBox="0 0 160 160" width="160" height="160">
          <line x1="20" y1="140" x2="150" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="20" y1="140" x2="20" y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="155" y="144" fontSize="10" fill="var(--text-secondary)">x₁</text>
          <text x="10" y="10" fontSize="10" fill="var(--text-secondary)">x₂</text>
          <line x1="15" y1="80" x2="155" y2="80" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
          <text x="125" y="74" fontSize="9" fill="#f97316">recta? ✗</text>
          <circle cx="20" cy="140" r="7" fill="#f97316" /><text x="20" y="155" fontSize="8" textAnchor="middle" fill="var(--text-secondary)">(0,0)→0</text>
          <circle cx="130" cy="20" r="7" fill="#f97316" /><text x="130" y="14" fontSize="8" textAnchor="middle" fill="var(--text-secondary)">(1,1)→0</text>
          <circle cx="20" cy="20" r="7" fill="#f59e0b" /><text x="20" y="14" fontSize="8" textAnchor="middle" fill="var(--text-secondary)">(0,1)→1</text>
          <circle cx="130" cy="140" r="7" fill="#f59e0b" /><text x="130" y="155" fontSize="8" textAnchor="middle" fill="var(--text-secondary)">(1,0)→1</text>
        </svg>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>1 perceptron: nenhuma linha recta separa as classes</p>
      </div>
      <div>
        <svg viewBox="0 0 160 160" width="160" height="160">
          <line x1="20" y1="140" x2="150" y2="140" stroke="var(--text-secondary)" strokeWidth="1" />
          <line x1="20" y1="140" x2="20" y2="10" stroke="var(--text-secondary)" strokeWidth="1" />
          <text x="155" y="144" fontSize="10" fill="var(--text-secondary)">x₁</text>
          <text x="10" y="10" fontSize="10" fill="var(--text-secondary)">x₂</text>
          <polygon points="20,80 75,20 130,80 75,140" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="75" y="84" fontSize="9" textAnchor="middle" fill="#f59e0b" fontWeight="700">região "1"</text>
          <circle cx="20" cy="140" r="7" fill="#f97316" />
          <circle cx="130" cy="20" r="7" fill="#f97316" />
          <circle cx="20" cy="20" r="7" fill="#f59e0b" />
          <circle cx="130" cy="140" r="7" fill="#f59e0b" />
        </svg>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>MLP (1 camada escondida): fronteira não-linear separa correctamente</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'left' }}>
      A função XOR (ou-exclusivo) devolve 1 quando exactamente uma das entradas é 1, e 0 caso contrário.
      Os 4 pontos possíveis — (0,0)→0, (0,1)→1, (1,0)→1, (1,1)→0 — não podem ser separados por <strong>nenhuma
      linha recta</strong>: as duas classes "alternam" nos cantos do quadrado. Um único perceptron calcula
      apenas uma combinação linear seguida de uma função de activação, o que define fronteiras de decisão
      sempre lineares (ou hiperplanos, em dimensões maiores). Adicionando uma <strong>camada escondida</strong>,
      a rede pode combinar várias fronteiras lineares e produzir regiões de decisão não-lineares — como a
      região em forma de "diamante" à direita — resolvendo o XOR. Este foi historicamente um dos argumentos
      que motivou o abandono temporário (e o ressurgimento posterior) da investigação em redes neuronais.
    </p>
  </div>
);

// === Diagram: gradient descent landscape ===
const GradientDescentDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Intuição: Loss Landscape e Descida de Gradiente</p>
    <svg viewBox="0 0 480 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrGD" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
        </marker>
      </defs>
      <path d="M 20 40 C 100 20, 140 160, 220 150 C 300 140, 320 60, 400 50 C 430 46, 450 60, 460 70"
        fill="none" stroke={color} strokeWidth="2.5" />
      {[
        [60, 35, 0.4],
        [120, 95, 0.65],
        [180, 145, 0.85],
        [220, 150, 1.0],
      ].map(([cx, cy, op], i) => (
        <circle key={i} cx={cx} cy={cy - 6} r="7" fill="#f59e0b" opacity={op} />
      ))}
      <path d="M 65 32 Q 90 60 115 88" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrGD)" />
      <path d="M 122 90 Q 150 130 175 142" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3,2" markerEnd="url(#arrGD)" />
      <text x="220" y="170" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">mínimo (loss baixa)</text>
      <text x="60" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">início (pesos aleatórios)</text>
      <text x="20" y="170" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">loss alta</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Imagine a <strong>função de perda</strong> (loss) como uma paisagem montanhosa, onde a altura representa
      "quão errada" está a previsão da rede para um determinado conjunto de pesos. Os pesos iniciais (aleatórios)
      colocam a "bola" algures nessa paisagem, normalmente num ponto alto (loss elevada — a rede erra muito).
      O algoritmo de <strong>gradiente descendente</strong> calcula a inclinação do terreno em torno da bola
      (o gradiente) e dá um pequeno passo na direcção que desce mais depressa. Repetindo este processo muitas
      vezes, a bola desliza progressivamente para um vale — um ponto onde a loss é baixa e as previsões da
      rede são boas.
    </p>
  </div>
);

// === Diagram: Universal Approximation Theorem intuition ===
const UATDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Intuição: Aproximar uma Curva com Vários "Degraus"</p>
    <svg viewBox="0 0 480 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <path d="M 20 130 C 100 30, 200 20, 280 90 C 340 145, 400 40, 460 30"
        fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5,3" />
      {[
        [20, 130, 70, 110],
        [70, 110, 120, 70],
        [120, 70, 170, 35],
        [170, 35, 220, 25],
        [220, 25, 270, 60],
        [270, 60, 320, 110],
        [320, 110, 370, 130],
        [370, 130, 420, 70],
        [420, 70, 460, 30],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.5" />
      ))}
      <text x="240" y="150" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">cada segmento ≈ contribuição de um neurónio escondido</text>
      <text x="430" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">função alvo</text>
      <text x="150" y="100" textAnchor="middle" fill={color} fontSize="10" fontWeight="700">aproximação MLP</text>
    </svg>
    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
      Cada neurónio escondido com uma função de activação tipo "degrau suave" (como a sigmoid) contribui com
      uma pequena "rampa" ou "dobra" para o output final. Combinando muitos destes contributos — cada um
      activado numa zona diferente do espaço de entrada, com a sua própria amplitude e posição — a rede
      consegue aproximar formas arbitrariamente complexas, tal como uma sucessão de pequenos segmentos de
      recta pode aproximar qualquer curva suave se forem suficientemente numerosos e finos.
    </p>
  </div>
);

export default function DL1() {
  return (
    <div style={S.page}>
      <Link to="/dl" style={S.back}><ArrowLeft size={16} /> Voltar a Deep Learning</Link>

      <div style={S.tag}>Module 01</div>
      <h1 style={S.h1}>O Que É Uma Rede Neuronal?</h1>
      <p style={S.lead}>
        Antes de mergulharmos em backpropagation, optimizadores ou arquitecturas avançadas, precisamos de
        construir uma intuição sólida sobre o bloco fundamental de tudo isto: o <strong>neurónio artificial</strong>.
        Neste módulo vamos desconstruir uma rede neuronal peça por peça — desde a inspiração biológica, passando
        pelas funções de activação que introduzem não-linearidade, até à arquitectura em camadas (MLP) e a um
        exemplo numérico completo de forward pass. Vamos também perceber porque é que precisamos de "profundidade"
        e camadas escondidas (com o clássico problema XOR), e terminar com uma intuição visual sobre como uma
        rede aprende — preparando o terreno para o Módulo 02, onde exploraremos backpropagation em detalhe.
      </p>

      {/* === SECTION 1: Inspiração biológica === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Inspiração Biológica</h2>
        <p style={S.p}>
          O termo "rede neuronal" não é acidental: a ideia original, proposta nos anos 1940 e 1950, foi tentar
          modelar matematicamente o comportamento dos neurónios biológicos do cérebro. Embora os modelos modernos
          se tenham afastado bastante da biologia real (e sejam hoje sobretudo objectos de engenharia matemática
          optimizados para hardware e dados), a analogia continua a ser uma porta de entrada útil.
        </p>
        <NeuronComparisonDiagram />
        <div style={S.note}>
          É importante não levar a analogia demasiado longe: o "neurónio artificial" é uma função matemática
          simples (uma soma ponderada seguida de uma não-linearidade), enquanto um neurónio biológico real é
          um sistema bioquímico extremamente complexo. A inspiração é conceptual, não literal.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: O Neurónio Artificial / Perceptron === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. O Neurónio Artificial (Perceptron)</h2>
        <p style={S.p}>
          O bloco fundamental de qualquer rede neuronal é o <strong>neurónio artificial</strong>, também chamado
          <strong> perceptron</strong> na sua forma mais simples. Recebe um conjunto de números de entrada,
          combina-os linearmente, e passa o resultado por uma função de activação para produzir um único
          valor de saída.
        </p>
        <SingleNeuronDiagram />
        <p style={S.p}>
          Formalmente, dado um vector de entradas <InlineMath math="\mathbf{x} = (x_1, x_2, \dots, x_n)" /> e
          um vector de pesos <InlineMath math="\mathbf{w} = (w_1, w_2, \dots, w_n)" />, o neurónio calcula
          primeiro a <strong>soma ponderada</strong> (também chamada pré-activação):
        </p>
        <div style={S.math}>
          <BlockMath math="z = \sum_{i=1}^{n} w_i x_i + b = \mathbf{w} \cdot \mathbf{x} + b" />
        </div>
        <p style={S.p}>
          Repare que <InlineMath math="\mathbf{w} \cdot \mathbf{x}" /> é simplesmente o <strong>produto interno</strong> (dot
          product) entre os pesos e as entradas — algo que já deve ser familiar. O termo <InlineMath math="b" /> (bias)
          é um valor adicional, independente das entradas, que permite à rede deslocar a fronteira de decisão —
          pense nele como o "ponto de partida" ou o "limiar" do neurónio. Sem o bias, o neurónio seria forçado
          a passar sempre pela origem do espaço de entradas, o que limita drasticamente o que consegue representar.
        </p>
        <p style={S.p}>
          Finalmente, o valor <InlineMath math="z" /> é passado por uma <strong>função de activação</strong> <InlineMath math="f" />,
          produzindo o output final do neurónio (também chamado activação):
        </p>
        <div style={S.math}>
          <BlockMath math="a = f(z) = f(\mathbf{w} \cdot \mathbf{x} + b)" />
        </div>

        <h3 style={S.h3}>Exemplo Numérico</h3>
        <p style={S.p}>
          Considere um neurónio com 3 entradas, os seguintes pesos e bias, e uma função de activação ReLU
          (<InlineMath math="f(z) = \max(0, z)" />, que veremos em detalhe na próxima secção):
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Variável</th><th style={S.th}>Valor</th></tr></thead>
            <tbody>
              {[
                ['x₁, x₂, x₃ (entradas)', '2.0, −1.0, 0.5'],
                ['w₁, w₂, w₃ (pesos)', '0.5, 1.5, −2.0'],
                ['b (bias)', '0.3'],
              ].map(([k, v]) => (
                <tr key={k}><td style={S.td}><strong>{k}</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Passo 1 — soma ponderada:</strong></p>
          <BlockMath math="z = (0.5)(2.0) + (1.5)(-1.0) + (-2.0)(0.5) + 0.3" />
          <BlockMath math="z = 1.0 - 1.5 - 1.0 + 0.3 = -1.2" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Passo 2 — função de activação (ReLU):</strong></p>
          <BlockMath math="a = \max(0, -1.2) = 0" />
          <p style={{ ...S.p, marginBottom: 0 }}>
            Neste caso, como <InlineMath math="z" /> é negativo, a ReLU "desliga" o neurónio — o seu output é 0,
            independentemente de quão negativo seja <InlineMath math="z" />. Este comportamento será importante
            quando discutirmos funções de activação a seguir.
          </p>
        
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Funções de Activação === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Funções de Activação</h2>
        <p style={S.p}>
          A função de activação é, possivelmente, o ingrediente mais importante de toda a rede. Sem ela, uma
          rede neuronal — por mais camadas que tenha — colapsaria matematicamente numa única transformação
          linear, tão simples como um único neurónio.
        </p>

        <h3 style={S.h3}>Porque Precisamos de Não-Linearidade</h3>
        <p style={S.p}>
          Suponha que empilhamos duas camadas <em>sem</em> função de activação. A primeira camada calcula
          <InlineMath math="\ z_1 = W_1 x + b_1" />, e a segunda calcula <InlineMath math="\ z_2 = W_2 z_1 + b_2" />.
          Substituindo:
        </p>
        <div style={S.math}>
          <BlockMath math="z_2 = W_2 (W_1 x + b_1) + b_2 = (W_2 W_1) x + (W_2 b_1 + b_2)" />
        </div>
        <p style={S.p}>
          O resultado tem exactamente a mesma forma de uma única camada linear: <InlineMath math="z_2 = W' x + b'" />,
          onde <InlineMath math="W' = W_2 W_1" /> e <InlineMath math="b' = W_2 b_1 + b_2" />. Por mais camadas
          lineares que empilhemos, o resultado final é <strong>sempre</strong> equivalente a uma única
          transformação linear — toda a "profundidade" é desperdiçada. As <strong>funções de activação não-lineares </strong>
            são o que quebra esta equivalência, permitindo que cada camada adicional realmente aumente o poder
          expressivo da rede.
        </p>

        <ActivationCurves />

        <h3 style={S.h3}>Comparação das Principais Funções de Activação</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Função</th>
                <th style={S.th}>Fórmula</th>
                <th style={S.th}>Range</th>
                <th style={S.th}>Uso típico</th>
                <th style={S.th}>Prós / Contras</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><strong>Step (degrau)</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \begin{cases} 1 & z \geq 0 \\ 0 & z < 0 \end{cases}" /></td>
                <td style={S.td}>{'{0, 1}'}</td>
                <td style={S.td}>Perceptron clássico (histórico)</td>
                <td style={S.td}>Não-diferenciável; não usada em deep learning moderno</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Sigmoid</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \dfrac{1}{1+e^{-z}}" /></td>
                <td style={S.td}>(0, 1)</td>
                <td style={S.td}>Output binário (probabilidade), gates em LSTMs</td>
                <td style={S.td}>Satura para |z| grande → vanishing gradient; output não centrado em zero</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Tanh</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \dfrac{e^{z}-e^{-z}}{e^{z}+e^{-z}}" /></td>
                <td style={S.td}>(−1, 1)</td>
                <td style={S.td}>Camadas escondidas (RNNs clássicas)</td>
                <td style={S.td}>Centrada em zero (melhor que sigmoid), mas ainda satura</td>
              </tr>
              <tr>
                <td style={S.td}><strong>ReLU</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \max(0, z)" /></td>
                <td style={S.td}>[0, ∞)</td>
                <td style={S.td}>Default em camadas escondidas de MLPs/CNNs</td>
                <td style={S.td}>Rápida e simples; risco de "neurónios mortos" (sempre 0)</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Leaky ReLU</strong></td>
                <td style={S.td}><InlineMath math="f(z) = \max(\alpha z, z),\ \alpha \approx 0.01" /></td>
                <td style={S.td}>(−∞, ∞)</td>
                <td style={S.td}>Alternativa à ReLU quando há muitos neurónios "mortos"</td>
                <td style={S.td}>Resolve neurónios mortos; introduz hiperparâmetro α</td>
              </tr>
              <tr>
                <td style={S.td}><strong>Softmax</strong></td>
                <td style={S.td}><InlineMath math="f(z_i) = \dfrac{e^{z_i}}{\sum_j e^{z_j}}" /></td>
                <td style={S.td}>(0, 1), soma = 1</td>
                <td style={S.td}>Camada de output em classificação multi-classe</td>
                <td style={S.td}>Converte logits numa distribuição de probabilidade; usada só na última camada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Regra geral simples: para <strong>camadas escondidas</strong>, comece por ReLU (ou variantes). Para a
          <strong> camada de output</strong>, escolha conforme a tarefa — sigmoid para classificação binária,
          softmax para classificação multi-classe, e nenhuma activação (linear) para regressão.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: De um Neurónio a uma Rede === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. De um Neurónio a uma Rede — Arquitectura em Camadas (MLP)</h2>
        <p style={S.p}>
          Um único neurónio consegue muito pouco — calcula essencialmente uma "linha de decisão" simples.
          O verdadeiro poder das redes neuronais surge quando organizamos muitos neurónios em <strong>camadas</strong>,
          e empilhamos várias camadas. A esta arquitectura básica chamamos <strong>Multi-Layer Perceptron (MLP)</strong>,
          também conhecida como rede <em>feedforward</em> ou <em>fully-connected</em> (densamente ligada).
        </p>
        <MLPDiagram />
        <p style={S.p}>
          Uma rede MLP típica tem três tipos de camadas:
        </p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li><strong>Camada de input (entrada):</strong> não realiza nenhum cálculo — apenas representa os dados de entrada (ex.: pixels de uma imagem, características de um dataset).</li>
          <li><strong>Camadas escondidas (hidden layers):</strong> uma ou mais camadas intermédias onde ocorre a maior parte da "computação inteligente" — cada neurónio aplica a soma ponderada + activação que vimos na secção 2.</li>
          <li><strong>Camada de output (saída):</strong> produz o resultado final — uma probabilidade, uma classe, um valor numérico, etc.</li>
        </ul>
        <p style={S.p}>
          Duas dimensões caracterizam o "tamanho" de uma rede:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ ...S.highlight, marginBottom: 0 }}>
            <strong style={{ color }}>Largura (width)</strong>
            <p style={{ fontSize: '0.9rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>
              O número de neurónios em cada camada. Camadas mais largas conseguem representar mais "padrões"
              em paralelo numa única transformação.
            </p>
          </div>
          <div style={{ ...S.highlight, marginBottom: 0 }}>
            <strong style={{ color }}>Profundidade (depth)</strong>
            <p style={{ fontSize: '0.9rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>
              O número de camadas (escondidas). Redes mais profundas conseguem compor transformações sucessivas,
              construindo representações cada vez mais abstractas — é esta ideia que dá nome a "deep learning".
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Forward Pass — Exemplo Numérico Completo === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Forward Pass — Exemplo Numérico Completo</h2>
        <p style={S.p}>
          Vamos agora juntar tudo e calcular, passo a passo, o <strong>forward pass</strong> completo de uma
          rede pequena: 2 entradas → 2 neurónios escondidos com ReLU → 1 neurónio de output com sigmoid
          (uma rede típica de classificação binária).
        </p>
        <p style={S.p}>Considere os seguintes valores fixos:</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Parâmetro</th><th style={S.th}>Valor</th></tr></thead>
            <tbody>
              {[
                ['Entradas (x₁, x₂)', '1.0, 2.0'],
                ['Pesos hidden 1 — h₁ (w₁₁, w₁₂), b₁', '0.5, −0.3, 0.1'],
                ['Pesos hidden 2 — h₂ (w₂₁, w₂₂), b₂', '−0.4, 0.2, 0.05'],
                ['Pesos output (v₁, v₂), b_out', '0.7, −0.6, 0.2'],
              ].map(([k, v]) => (
                <tr key={k}><td style={S.td}><strong>{k}</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={S.h3}>Passo 1 — Camada Escondida</h3>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Neurónio h₁:</strong></p>
          <BlockMath math="z_{h_1} = (0.5)(1.0) + (-0.3)(2.0) + 0.1 = 0.5 - 0.6 + 0.1 = 0.0" />
          <BlockMath math="a_{h_1} = \text{ReLU}(0.0) = \max(0, 0.0) = 0.0" />
          <p style={{ ...S.p, marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Neurónio h₂:</strong></p>
          <BlockMath math="z_{h_2} = (-0.4)(1.0) + (0.2)(2.0) + 0.05 = -0.4 + 0.4 + 0.05 = 0.05" />
          <BlockMath math="a_{h_2} = \text{ReLU}(0.05) = \max(0, 0.05) = 0.05" />
        

        <h3 style={S.h3}>Passo 2 — Camada de Output</h3>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            O neurónio de output recebe as activações <InlineMath math="a_{h_1}" /> e <InlineMath math="a_{h_2}" /> da
            camada escondida como suas entradas:
          </p>
          <BlockMath math="z_{out} = (0.7)(0.0) + (-0.6)(0.05) + 0.2 = 0 - 0.03 + 0.2 = 0.17" />
          <BlockMath math="\hat{y} = \sigma(z_{out}) = \frac{1}{1 + e^{-0.17}} \approx 0.542" />
        

        <h3 style={S.h3}>Resumo do Forward Pass</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Camada</th><th style={S.th}>Neurónio</th><th style={S.th}>z (pré-activação)</th><th style={S.th}>a (activação)</th></tr></thead>
            <tbody>
              {[
                ['Input', 'x₁, x₂', '—', '1.0, 2.0'],
                ['Hidden (ReLU)', 'h₁', '0.0', '0.0'],
                ['Hidden (ReLU)', 'h₂', '0.05', '0.05'],
                ['Output (Sigmoid)', 'ŷ', '0.17', '≈ 0.542'],
              ].map(([l, n, z, a], i) => (
                <tr key={i}><td style={S.td}><strong>{l}</strong></td><td style={{ ...S.td, fontFamily: 'monospace' }}>{n}</td><td style={{ ...S.td, fontFamily: 'monospace' }}>{z}</td><td style={{ ...S.td, fontFamily: 'monospace', color, fontWeight: 700 }}>{a}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          O resultado final, <InlineMath math="\hat{y} \approx 0.542" />, é a previsão da rede — neste caso,
          interpretável como "54.2% de probabilidade de pertencer à classe 1". Se este fosse um problema de
          classificação binária com classe verdadeira <InlineMath math="y = 1" />, a previsão estaria
          relativamente próxima — mas ainda longe do ideal (1.0). É exactamente esta diferença entre
          <InlineMath math="\hat{y}" /> e <InlineMath math="y" /> que a rede vai tentar reduzir durante o
          treino, ajustando todos os pesos e bias — o tema da secção 8.
        </p>
        <div style={S.note}>
          Este cálculo manual, com 2 entradas, 2 neurónios escondidos e 1 output, envolveu já 9 parâmetros
          (6 pesos + 3 bias). Redes reais têm milhões ou milhares de milhões de parâmetros — mas o princípio
          do forward pass é exactamente o mesmo: somas ponderadas seguidas de activações, camada após camada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Porque "Profunda"? === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Porque "Profunda"? Aprendizagem Hierárquica</h2>
        <p style={S.p}>
          O termo "deep learning" refere-se ao uso de redes com <strong>múltiplas camadas escondidas</strong>.
          Mas porque é que isso é desejável? A resposta está na forma como a informação é progressivamente
          transformada e abstraída camada a camada.
        </p>
        <HierarchyDiagram />
        <p style={S.p}>
          Esta capacidade de aprender representações hierárquicas — sem que ninguém tenha programado
          explicitamente "detector de arestas" ou "detector de rodas" — é uma das razões pelas quais o deep
          learning revolucionou áreas como visão computacional e processamento de linguagem natural. A rede
          descobre estas características automaticamente, optimizando os seus pesos a partir de dados.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: O Problema XOR === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. O Problema XOR — Porque Precisamos de Camadas Escondidas</h2>
        <p style={S.p}>
          Nos anos 1960, mostrou-se que um único perceptron (sem camadas escondidas) não consegue aprender
          a função lógica <strong>XOR</strong> (ou-exclusivo). Esta limitação aparentemente simples teve um
          enorme impacto histórico — contribuiu para um período de desinvestimento na investigação em redes
          neuronais (o chamado "primeiro inverno da IA").
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead><tr><th style={S.th}>x₁</th><th style={S.th}>x₂</th><th style={S.th}>XOR(x₁, x₂)</th></tr></thead>
            <tbody>
              {[['0', '0', '0'], ['0', '1', '1'], ['1', '0', '1'], ['1', '1', '0']].map(([a, b, y], i) => (
                <tr key={i}><td style={S.td}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, fontWeight: 700, color }}>{y}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <XORDiagram />
        <p style={S.p}>
          A solução é adicionar pelo menos uma <strong>camada escondida</strong>. Intuitivamente, cada
          neurónio escondido pode aprender a "detectar" uma combinação parcial das entradas (por exemplo,
          um neurónio pode activar fortemente para "x₁ OR x₂" e outro para "x₁ AND x₂"), e a camada de output
          combina essas detecções parciais de forma a recriar o padrão XOR. É exactamente este tipo de
          composição — combinar transformações simples para obter um comportamento complexo — que torna
          os MLPs tão poderosos.
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Como Aprende uma Rede === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Como Aprende uma Rede — Intuição</h2>
        <p style={S.p}>
          Até agora, assumimos que os pesos e bias da rede já tinham valores "correctos" — escolhidos por
          nós, à mão. Mas numa rede real, estes valores começam <strong>aleatórios</strong>, e é o processo
          de <strong>treino</strong> que os ajusta progressivamente até a rede produzir previsões úteis.
          Vamos ver a intuição geral, sem entrar em fórmulas de derivadas — isso é o tema central do
          Módulo 02 (Backpropagation).
        </p>

        <h3 style={S.h3}>A Função de Perda (Loss)</h3>
        <p style={S.p}>
          A primeira peça é a <strong>função de perda</strong> (loss function): um número único que mede
          "quão errada" está a previsão da rede, comparando-a com o valor verdadeiro (label). Se a rede
          prevê <InlineMath math="\hat{y} = 0.542" /> e o valor verdadeiro é <InlineMath math="y = 1" />,
          a loss será relativamente alta; se a rede previsse <InlineMath math="\hat{y} = 0.98" />, a loss
          seria muito mais baixa. O objectivo do treino é simples de enunciar (ainda que difícil de executar):
          <strong> ajustar todos os pesos e bias da rede de forma a minimizar a loss</strong>, em média, sobre
          todos os exemplos do conjunto de dados.
        </p>

        <h3 style={S.h3}>Gradiente Descendente — "Rodar Muitos Botões"</h3>
        <GradientDescentDiagram />
        <p style={S.p}>
          Pense em cada peso e bias da rede como o <strong>botão de um rádio antigo</strong> — uma rede com
          milhares de parâmetros tem milhares destes botões. Rodar um botão um pouco para a direita ou para
          a esquerda muda ligeiramente a previsão da rede e, consequentemente, a loss. O <strong>gradiente</strong> de
          cada parâmetro diz-nos exactamente: "se rodares este botão um pouco numa direcção, a loss aumenta
          ou diminui — e com que intensidade?"
        </p>
        <p style={S.p}>
          O algoritmo de <strong>gradiente descendente</strong> usa esta informação para, em cada iteração de
          treino, ajustar <em>todos os botões simultaneamente</em>, cada um na direcção e com a magnitude
          que mais reduz a loss — repetindo este processo milhares ou milhões de vezes até a rede convergir
          para um conjunto de pesos que produz boas previsões.
        </p>
        <div style={S.note}>
          A grande pergunta que falta responder é: <strong>como calcular eficientemente o gradiente de cada
          um destes milhares (ou milhões) de parâmetros</strong>, sabendo apenas o valor final da loss?
          Calcular cada gradiente individualmente, um a um, seria computacionalmente impraticável. A resposta
          é o algoritmo de <strong>backpropagation</strong> — aplicação sistemática da regra da cadeia ao
          longo do grafo de computação da rede — e é exactamente esse o tema do Módulo 02.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Universal Approximation Theorem === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. Universal Approximation Theorem (Intuição)</h2>
        <p style={S.p}>
          Uma das propriedades teóricas mais notáveis das redes neuronais é o <strong>Universal Approximation
          Theorem</strong> (Teorema da Aproximação Universal). Em termos informais, este teorema afirma que:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Uma rede feedforward com <strong>apenas uma camada escondida</strong>, desde que tenha
            <strong> neurónios suficientes</strong> e uma função de activação não-linear adequada (como
            sigmoid ou ReLU), pode aproximar <strong>qualquer função contínua</strong> num domínio limitado,
            com a precisão que se desejar.
          </p>
        </div>
        <UATDiagram />
        <p style={S.p}>
          É importante interpretar este resultado correctamente. O teorema garante que uma rede
          <strong> suficientemente larga</strong> consegue, em teoria, representar qualquer função contínua —
          mas <strong>não diz nada sobre quantos neurónios são necessários na prática, nem sobre como
          encontrar os pesos correctos</strong> (esse é o papel do treino, via gradiente descendente e
          backpropagation). Na prática, redes <strong>profundas</strong> (com várias camadas mais estreitas)
          tendem a ser muito mais eficientes — em número de parâmetros e em facilidade de treino — do que
          uma única camada extremamente larga, mesmo que ambas sejam, em teoria, "universalmente aproximadoras".
          Isto motiva, mais uma vez, a preferência por arquitecturas profundas em vez de apenas largas.
        </p>
      </div>

      {/* === SYNTHESIS === */}
      <div style={S.section}>
        <h2 style={S.h2}>10. Síntese do Módulo</h2>
        <p style={S.p}>
          Uma rede neuronal não é mais do que uma composição de funções simples — somas ponderadas seguidas
          de não-linearidades — organizadas em camadas. A "inteligência" da rede emerge da forma como estas
          transformações simples se combinam para construir representações cada vez mais abstractas dos dados.
        </p>
        
          <p style={{ ...S.p, marginBottom: '0.5rem' }}><strong>Pontos-chave a reter:</strong></p>
          <ul style={{ ...S.p, paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li>Um neurónio artificial calcula <InlineMath math="z = \mathbf{w} \cdot \mathbf{x} + b" /> e aplica uma função de activação <InlineMath math="f(z)" /></li>
            <li>Sem funções de activação não-lineares, qualquer rede colapsa numa única transformação linear</li>
            <li>ReLU é a escolha padrão para camadas escondidas; sigmoid/softmax para outputs de classificação</li>
            <li>Um MLP organiza neurónios em camadas (input → hidden → output), totalmente ligadas (fully-connected)</li>
            <li>O forward pass calcula a previsão camada a camada, partindo das entradas até ao output</li>
            <li>Camadas escondidas são essenciais para resolver problemas não-linearmente separáveis (ex.: XOR)</li>
            <li>O treino ajusta pesos e bias via gradiente descendente para minimizar a função de perda</li>
            <li>O Universal Approximation Theorem garante que MLPs suficientemente largas podem aproximar qualquer função contínua</li>
          </ul>
        
      </div>
    </div>
  );
}
