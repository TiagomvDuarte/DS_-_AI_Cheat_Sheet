import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const color = '#4a9eed';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2.5rem',
  },
  tag: {
    display: 'inline-block',
    background: 'transparent',
    color: color,
    border: `1.5px solid ${color}`,
    fontSize: '0.75rem',
    fontWeight: 700,
    padding: '0.25rem 0.75rem',
    borderRadius: 20,
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '2.1rem',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },
  lead: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: 1.7,
  },
  section: { marginBottom: '3.5rem' },
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color,
    borderLeft: `3px solid ${color}`,
    paddingLeft: '0.85rem',
    marginBottom: '1.2rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.8rem',
    marginTop: '1.6rem',
  },
  p: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  th: {
    background: 'var(--bg-secondary)',
    padding: '0.6rem 0.8rem',
    textAlign: 'left',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    borderBottom: '2px solid var(--card-border)',
  },
  td: {
    padding: '0.55rem 0.8rem',
    borderBottom: '1px solid var(--card-border)',
    color: 'var(--text-primary)',
  },
  highlight: {
    background: 'rgba(74,158,237,0.10)',
    border: '1px solid #4a9eed',
    borderRadius: 8,
    padding: '1rem 1.25rem',
    marginBottom: '1.2rem',
  },
  note: {
    background: 'rgba(74,158,237,0.10)',
    borderLeft: `3px solid ${color}`,
    borderRadius: '0 8px 8px 0',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: '1rem 0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--card-border)',
    margin: '2.5rem 0',
  },
  diagram: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 12,
    padding: '1.5rem',
    margin: '1.5rem 0',
    textAlign: 'center',
  },
  math: {
    background: 'var(--bg-secondary)',
    borderRadius: 10,
    padding: '1.25rem',
    textAlign: 'center',
    margin: '1.5rem 0',
    overflowX: 'auto',
  },
};

// === Diagram: paradigm shift ===
const ParadigmaDiagram = () => (
  <div style={S.diagram}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '1rem',
        color: 'var(--text-primary)',
      }}
    >
      O Novo Paradigma — ML vs. Programação Tradicional
    </p>
    <svg viewBox="0 0 610 140" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker
          id="arr-ml1"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
      {/* Traditional */}
      <text
        x="165"
        y="18"
        textAnchor="middle"
        fill={color}
        fontSize="10"
        fontWeight="700"
      >
        PROGRAMAÇÃO TRADICIONAL
      </text>
      {/* arrows first so boxes render on top */}
      <path
        d="M100 50 L118 62"
        stroke="#94a3b8"
        strokeWidth="1.2"
        markerEnd="url(#arr-ml1)"
      />
      <path
        d="M100 100 L118 88"
        stroke="#94a3b8"
        strokeWidth="1.2"
        markerEnd="url(#arr-ml1)"
      />
      <path
        d="M192 75 L210 75"
        stroke="#94a3b8"
        strokeWidth="1.2"
        markerEnd="url(#arr-ml1)"
      />
      {[
        { label: 'Programa', x: 20, y: 50, c: '#4a9eed' },
        { label: 'Input', x: 20, y: 100, c: '#4a9eed' },
        { label: 'Output', x: 212, y: 75, c: '#4a9eed' },
      ].map(({ label, x, y, c }) => (
        <g key={label + 'trad'}>
          <rect
            x={x}
            y={y - 15}
            width={80}
            height={30}
            rx="6"
            fill={`${c}15`}
            stroke={c}
            strokeWidth="1.5"
          />
          <text
            x={x + 40}
            y={y + 6}
            textAnchor="middle"
            fill={c}
            fontSize="10"
            fontWeight="700"
          >
            {label}
          </text>
        </g>
      ))}
      <text
        x="155"
        y="78"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="8"
      >
        Computador
      </text>
      <rect
        x="120"
        y="55"
        width="70"
        height="40"
        rx="6"
        fill="rgba(74,158,237,0.10)"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* ML */}
      <text
        x="465"
        y="18"
        textAnchor="middle"
        fill="#4a9eed"
        fontSize="10"
        fontWeight="700"
      >
        MACHINE LEARNING
      </text>
      {/* arrows first */}
      <path
        d="M410 50 L428 62"
        stroke="#94a3b8"
        strokeWidth="1.2"
        markerEnd="url(#arr-ml1)"
      />
      <path
        d="M410 100 L428 88"
        stroke="#94a3b8"
        strokeWidth="1.2"
        markerEnd="url(#arr-ml1)"
      />
      <path
        d="M502 75 L520 75"
        stroke="#94a3b8"
        strokeWidth="1.2"
        markerEnd="url(#arr-ml1)"
      />
      {[
        { label: 'Input', x: 330, y: 50, c: '#4a9eed' },
        { label: 'Output', x: 330, y: 100, c: '#4a9eed' },
        { label: 'Programa\n(Modelo)', x: 522, y: 75, c: '#4a9eed' },
      ].map(({ label, x, y, c }) => (
        <g key={label + 'ml'}>
          <rect
            x={x}
            y={y - 15}
            width={80}
            height={30}
            rx="6"
            fill={`${c}15`}
            stroke={c}
            strokeWidth="1.5"
          />
          {label.split('\n').map((line, i) => (
            <text
              key={i}
              x={x + 40}
              y={y - 2 + i * 13}
              textAnchor="middle"
              fill={c}
              fontSize="9"
              fontWeight="700"
            >
              {line}
            </text>
          ))}
        </g>
      ))}
      <text
        x="465"
        y="78"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="8"
      >
        Computador
      </text>
      <rect
        x="430"
        y="55"
        width="70"
        height="40"
        rx="6"
        fill="rgba(74,158,237,0.10)"
        stroke="#4a9eed"
        strokeWidth="1.5"
      />
    </svg>
    <p
      style={{
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginTop: '0.5rem',
        textAlign: 'left',
      }}
    >
      Na programação tradicional, um humano escreve explicitamente o{' '}
      <strong>programa</strong> (as regras lógicas) que transforma um{' '}
      <strong>input</strong> num <strong>output</strong>. Em Machine Learning,
      invertemos a relação: damos ao computador exemplos de{' '}
      <strong>inputs</strong> e dos <strong>outputs</strong> correspondentes, e
      é o computador que produz o <strong>programa</strong> (o modelo) —
      encontrando, por si próprio, os padrões e regras que ligam uns aos outros.
    </p>
  </div>
);

// === Interactive: 3 components explorer ===
const ComponentsExplorer = () => {
  const [active, setActive] = useState(0);
  const components = [
    {
      name: 'Representação',
      color: '#4a9eed',
      desc: 'O que o modelo pode aprender — o espaço de hipóteses. Define a família de funções que o algoritmo pode expressar. Se a função-alvo verdadeira não estiver (nem aproximadamente) representável dentro desta família, nenhum algoritmo de otimização a encontrará.',
      examples: [
        'Árvores de Decisão',
        'Redes Neuronais (MLP, CNN)',
        'Modelos lineares (regressão)',
        'Support Vector Machines',
        'Modelos probabilísticos (Naive Bayes)',
      ],
      key: 'A escolha da representação determina o que pode e não pode ser aprendido — nenhuma representação é universal.',
    },
    {
      name: 'Avaliação',
      color: '#4a9eed',
      desc: 'Como distinguir hipóteses boas de más — a função objetivo ou função de perda. Guia o processo de aprendizagem ao quantificar "quão boa" é uma hipótese candidata face aos dados observados.',
      examples: [
        'Accuracy / Error Rate (classificação)',
        'MSE, MAE, RMSE (regressão)',
        'Log-likelihood / Cross-entropy',
        'Informação Mútua',
        'Margem (SVM)',
      ],
      key: 'A função de avaliação interna do algoritmo (durante treino) pode diferir da métrica de avaliação externa (reportada ao utilizador).',
    },
    {
      name: 'Otimização',
      color: '#4a9eed',
      desc: 'Como procurar o espaço de hipóteses para encontrar a hipótese com maior avaliação. Define a eficiência computacional, a velocidade de convergência e se é encontrado um ótimo global ou apenas local.',
      examples: [
        'Gradient Descent (redes neuronais)',
        'Beam search (árvores)',
        'Branch-and-bound',
        'Algoritmos genéticos (EA)',
        'Quadratic programming (SVM)',
      ],
      key: 'A escolha do otimizador afecta directamente a velocidade de treino, a convergência e se encontramos um ótimo global ou local.',
    },
  ];
  const c = components[active];
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Os 3 Componentes de um Algoritmo de ML
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
        }}
      >
        {components.map((comp, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '0.35rem 0.9rem',
              borderRadius: 20,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.82rem',
              background: active === i ? comp.color : 'var(--bg-primary)',
              color: active === i ? 'white' : 'var(--text-primary)',
              border: `1.5px solid ${active === i ? comp.color : 'var(--card-border)'}`,
              transition: 'all 0.2s',
            }}
          >
            {comp.name}
          </button>
        ))}
      </div>
      <div
        style={{
          background: 'var(--bg-primary)',
          borderRadius: 10,
          padding: '1.25rem',
          textAlign: 'left',
          border: `1.5px solid ${c.color}40`,
        }}
      >
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-primary)',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}
        >
          {c.desc}
        </p>
        <p
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: c.color,
            marginBottom: '0.5rem',
          }}
        >
          Exemplos:
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1rem',
          }}
        >
          {c.examples.map((e) => (
            <span
              key={e}
              style={{
                background: `${c.color}12`,
                border: `1px solid ${c.color}30`,
                color: c.color,
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.2rem 0.55rem',
                borderRadius: 8,
              }}
            >
              {e}
            </span>
          ))}
        </div>
        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            margin: 0,
          }}
        >
          {' '}
          {c.key}
        </p>
      </div>
    </div>
  );
};

// === Diagram: taxonomy of supervised algorithms ===
const TaxonomyDiagram = () => {
  const row1 = [
    {
      label: 'Lineares',
      sub: 'Reg. Linear,\nReg. Logística',
      c: '#4a9eed',
      x: 20,
    },
    {
      label: 'Baseados em Árvores',
      sub: 'Decision Trees,\nRandom Forest',
      c: '#4a9eed',
      x: 155,
    },
    { label: 'Baseados em Instâncias', sub: 'k-NN', c: '#4a9eed', x: 290 },
    {
      label: 'Probabilísticos',
      sub: 'Naive Bayes,\nHMM',
      c: '#4a9eed',
      x: 425,
    },
  ];
  const row2 = [
    { label: 'Kernel', sub: 'SVM', c: '#4a9eed', x: 20 },
    {
      label: 'Neuronais',
      sub: 'MLP, CNN, RNN,\nTransformers',
      c: '#4a9eed',
      x: 155,
    },
    {
      label: 'Ensembles',
      sub: 'Bagging, Boosting,\nStacking',
      c: '#4a9eed',
      x: 290,
    },
  ];
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Taxonomia das Famílias de Algoritmos Supervisionados
      </p>
      <svg viewBox="0 0 600 270" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker
            id="arr-tax"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
          </marker>
        </defs>
        {/* root→row1: L-shaped paths via horizontal bus at y=61 */}
        {row1.map(({ x }, i) => (
          <path
            key={i}
            d={`M300 46 L300 61 L${x + 60} 61 L${x + 60} 73`}
            stroke="#94a3b8"
            strokeWidth="1"
            fill="none"
            markerEnd="url(#arr-tax)"
            opacity="0.8"
          />
        ))}
        {/* row1→row2: vertical arrows from bottom of parent */}
        {row2.map(({ x }, i) => (
          <path
            key={i}
            d={`M${x + 60} 133 L${x + 60} 163`}
            stroke="#94a3b8"
            strokeWidth="1"
            fill="none"
            markerEnd="url(#arr-tax)"
            opacity="0.8"
          />
        ))}
        {/* root node */}
        <rect
          x="170"
          y="10"
          width="260"
          height="36"
          rx="8"
          fill={`${color}15`}
          stroke={color}
          strokeWidth="1.5"
        />
        <text
          x="300"
          y="33"
          textAnchor="middle"
          fill={color}
          fontSize="12"
          fontWeight="700"
        >
          Aprendizagem Supervisionada
        </text>
        {/* row1 nodes */}
        {row1.map(({ label, sub, c, x }, i) => (
          <g key={i}>
            <rect
              x={x}
              y={75}
              width="120"
              height="58"
              rx="8"
              fill={`${c}15`}
              stroke={c}
              strokeWidth="1.5"
            />
            <text
              x={x + 60}
              y={95}
              textAnchor="middle"
              fill={c}
              fontSize="10.5"
              fontWeight="700"
            >
              {label}
            </text>
            {sub.split('\n').map((line, li) => (
              <text
                key={li}
                x={x + 60}
                y={111 + li * 12}
                textAnchor="middle"
                fill="var(--text-secondary)"
                fontSize="9"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
        {/* row2 nodes */}
        {row2.map(({ label, sub, c, x }, i) => (
          <g key={i}>
            <rect
              x={x}
              y={165}
              width="120"
              height="58"
              rx="8"
              fill={`${c}15`}
              stroke={c}
              strokeWidth="1.5"
            />
            <text
              x={x + 60}
              y={185}
              textAnchor="middle"
              fill={c}
              fontSize="10.5"
              fontWeight="700"
            >
              {label}
            </text>
            {sub.split('\n').map((line, li) => (
              <text
                key={li}
                x={x + 60}
                y={201 + li * 12}
                textAnchor="middle"
                fill="var(--text-secondary)"
                fontSize="9"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
        <text
          x="300"
          y="258"
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="9"
          fontStyle="italic"
        >
          cada família = um módulo (ou mais) desta cadeira
        </text>
      </svg>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          textAlign: 'left',
        }}
      >
        Este "mapa" organiza as principais famílias de algoritmos
        supervisionados que vamos explorar nos próximos módulos. Todas resolvem
        o mesmo problema essencial — aprender <InlineMath math="f: x \to y" /> a
        partir de exemplos — mas fazem-no com <strong>representações</strong>,{' '}
        <strong>vieses indutivos</strong> e
        <strong> métodos de otimização</strong> muito diferentes, cada um com
        vantagens em cenários distintos.
      </p>
    </div>
  );
};

// === Diagram: bias-variance curves ===
const BiasVarianceDiagram = () => {
  const w = 480,
    h = 220,
    pad = 40;
  const xToPx = (x) => pad + (x / 10) * (w - 2 * pad);
  const yToPx = (y) => h - pad - (y / 10) * (h - 2 * pad);

  const trainErr = (x) => 9 * Math.exp(-0.45 * x) + 0.3;
  const testErr = (x) =>
    9 * Math.exp(-0.45 * x) +
    0.3 +
    0.018 * Math.pow(x - 2.2, 2) +
    (x > 2.2 ? 0.15 * (x - 2.2) : 0);

  const makePath = (fn) => {
    let d = '';
    for (let i = 0; i <= 60; i++) {
      const x = (10 * i) / 60;
      const y = Math.max(0, Math.min(10, fn(x)));
      const px = xToPx(x);
      const py = yToPx(y);
      d += (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + py.toFixed(1) + ' ';
    }
    return d;
  };

  const sweetX = 2.2;

  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Erro de Treino vs. Erro de Teste em Função da Complexidade do Modelo
      </p>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <line
          x1={pad}
          y1={h - pad}
          x2={w - pad}
          y2={h - pad}
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />
        <line
          x1={pad}
          y1={pad}
          x2={pad}
          y2={h - pad}
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />
        <text
          x={w / 2}
          y={h - 5}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="11"
        >
          Complexidade do Modelo →
        </text>
        <text
          x="14"
          y={h / 2}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="11"
          transform={`rotate(-90 14 ${h / 2})`}
        >
          Erro
        </text>

        {/* zones */}
        <rect
          x={pad}
          y={pad}
          width={xToPx(sweetX) - pad}
          height={h - 2 * pad}
          fill="#0284c7"
          opacity="0.06"
        />
        <rect
          x={xToPx(sweetX)}
          y={pad}
          width={w - pad - xToPx(sweetX)}
          height={h - 2 * pad}
          fill="#4a9eed"
          opacity="0.06"
        />
        <text
          x={(pad + xToPx(sweetX)) / 2}
          y={pad + 14}
          textAnchor="middle"
          fill="#0284c7"
          fontSize="10"
          fontWeight="700"
        >
          underfitting
        </text>
        <text
          x={(xToPx(sweetX) + w - pad) / 2}
          y={pad + 14}
          textAnchor="middle"
          fill="#4a9eed"
          fontSize="10"
          fontWeight="700"
        >
          overfitting
        </text>

        <path
          d={makePath(trainErr)}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />
        <path
          d={makePath(testErr)}
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="2.5"
        />

        <line
          x1={xToPx(sweetX)}
          y1={pad}
          x2={xToPx(sweetX)}
          y2={h - pad}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        <text
          x={xToPx(sweetX)}
          y={pad - 4}
          textAnchor="middle"
          fill="var(--text-primary)"
          fontSize="9"
          fontWeight="700"
        >
          ponto óptimo
        </text>

        <text
          x={w - pad - 5}
          y={yToPx(trainErr(10)) - 8}
          textAnchor="end"
          fill="#4a9eed"
          fontSize="10"
          fontWeight="700"
        >
          erro de treino
        </text>
        <text
          x={w - pad - 5}
          y={yToPx(testErr(10)) + 14}
          textAnchor="end"
          fill="#7dd3fc"
          fontSize="10"
          fontWeight="700"
        >
          erro de teste
        </text>
      </svg>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          textAlign: 'left',
        }}
      >
        À medida que a complexidade do modelo aumenta, o{' '}
        <strong>erro de treino</strong> tende a diminuir sempre — um modelo
        suficientemente complexo consegue memorizar os exemplos de treino. O{' '}
        <strong>erro de teste</strong>
        (em dados novos) diminui inicialmente, à medida que o modelo deixa de
        ser demasiado simples (<em>underfitting</em>, alto <strong>bias</strong>
        ), mas a partir de certo ponto volta a subir, porque o modelo começa a
        ajustar-se ao ruído específico dos dados de treino (<em>overfitting</em>
        , alta
        <strong> variância</strong>). O objectivo é encontrar a complexidade que
        minimiza o erro de teste.
      </p>
    </div>
  );
};

// === Diagram: ML pipeline ===
const PipelineDiagram = () => {
  const steps = [
    { label: 'Recolha\nde Dados', c: '#4a9eed' },
    { label: 'Split\nTrain/Test', c: '#4a9eed' },
    { label: 'Pré-\nprocessamento', c: '#4a9eed' },
    { label: 'Treino', c: '#4a9eed' },
    { label: 'Avaliação', c: '#4a9eed' },
    { label: 'Deployment', c: '#4a9eed' },
  ];
  const n = steps.length;
  const boxW = 80,
    gap = 16,
    totalW = n * boxW + (n - 1) * gap;
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        O Pipeline Geral de Machine Learning
      </p>
      <svg
        viewBox={`0 0 ${totalW + 20} 140`}
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <defs>
          <marker
            id="arr-pipe"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
          </marker>
        </defs>
        {steps.map(({ label, c }, i) => {
          const x = 10 + i * (boxW + gap);
          return (
            <g key={i}>
              <rect
                x={x}
                y="40"
                width={boxW}
                height="60"
                rx="8"
                fill={`${c}15`}
                stroke={c}
                strokeWidth="1.5"
              />
              {label.split('\n').map((line, li) => (
                <text
                  key={li}
                  x={x + boxW / 2}
                  y={66 + li * 14}
                  textAnchor="middle"
                  fill={c}
                  fontSize="10.5"
                  fontWeight="700"
                >
                  {line}
                </text>
              ))}
              {i < n - 1 && (
                <path
                  d={`M${x + boxW} 70 L${x + boxW + gap - 2} 70`}
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  markerEnd="url(#arr-pipe)"
                />
              )}
            </g>
          );
        })}
        <path
          d={`M${totalW - boxW + 30} 100 C ${totalW} 130, 40 130, 50 100`}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="4,3"
          markerEnd="url(#arr-pipe)"
        />
        <text
          x={(totalW + 20) / 2}
          y="135"
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="9"
          fontStyle="italic"
        >
          monitorização → recolher mais dados → repetir
        </text>
      </svg>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginTop: '1rem',
          textAlign: 'left',
        }}
      >
        Na prática, treinar um modelo é apenas <strong>uma etapa</strong> de um
        processo muito maior. A<strong> recolha de dados</strong> determina o
        tecto de qualidade de tudo o resto; o<strong> split train/test</strong>{' '}
        (e frequentemente também um conjunto de validação) deve acontecer
        <strong> antes</strong> de qualquer transformação — caso contrário
        estatísticas calculadas sobre o conjunto inteiro (médias,
        desvios-padrão, categorias) "vazam" informação do teste para o treino (
        <em>data leakage</em>); o <strong>pré-processamento</strong> (limpeza,
        normalização, codificação de variáveis categóricas) é ajustado{' '}
        <em>apenas</em> nos dados de treino e depois aplicado ao teste com os
        mesmos parâmetros; o <strong>treino</strong> ajusta os parâmetros do
        modelo; a <strong>avaliação</strong> mede o desempenho em dados nunca
        vistos; e o <strong>deployment</strong> coloca o modelo a produzir
        previsões em produção — onde tem de continuar a ser monitorizado, porque
        os dados do mundo real mudam (<em>data drift</em>).
      </p>
    </div>
  );
};

// === Diagram: version space narrowing ===
const VersionSpaceDiagram = () => (
  <div style={S.diagram}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '1rem',
        color: 'var(--text-primary)',
      }}
    >
      Redução do Version Space à Medida que Chegam Exemplos
    </p>
    <svg viewBox="0 0 520 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker
          id="arr-vs"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
      {[
        { x: 30, n: 16, label: 'H inicial\n(todas as hipóteses)' },
        { x: 200, n: 7, label: 'Após exemplo 1\n(elimina inconsistentes)' },
        { x: 370, n: 2, label: 'Após exemplo 2\n(quase convergido)' },
      ].map(({ x, n, label }, gi) => (
        <g key={gi}>
          <rect
            x={x}
            y="10"
            width="120"
            height="110"
            rx="8"
            fill="var(--bg-primary)"
            stroke="var(--text-secondary)"
            strokeWidth="1.2"
          />
          {Array.from({ length: 16 }, (_, i) => {
            const row = Math.floor(i / 4),
              col = i % 4;
            const cx = x + 22 + col * 26,
              cy = 32 + row * 24;
            const active = i < n;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="7"
                fill={active ? color : 'var(--card-border)'}
                opacity={active ? 0.85 : 0.25}
              />
            );
          })}
          {label.split('\n').map((line, li) => (
            <text
              key={li}
              x={x + 60}
              y={138 + li * 12}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="9.5"
              fontWeight={li === 0 ? '700' : '400'}
            >
              {line}
            </text>
          ))}
          {gi < 2 && (
            <path
              d={`M${x + 122} 65 L${x + 195} 65`}
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#arr-vs)"
            />
          )}
        </g>
      ))}
    </svg>
    <p
      style={{
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginTop: '0.5rem',
        textAlign: 'left',
      }}
    >
      Cada ponto representa uma <strong>hipótese</strong> (uma regra candidata)
      dentro do espaço de hipóteses
      <InlineMath math="H" />. Inicialmente, todas as hipóteses são candidatas.
      Cada novo exemplo de treino elimina as hipóteses que não são consistentes
      com ele — encolhendo o <strong>version space</strong> (o conjunto de
      hipóteses ainda compatíveis com todos os exemplos vistos). Com dados
      suficientes, o version space pode convergir para uma única hipótese — ou
      permanecer ambíguo se o espaço de hipóteses for muito grande ou os dados
      insuficientes.
    </p>
  </div>
);

export default function ML1() {
  return (
    <div style={S.page}>
      <Link to="/ml" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Machine Learning
      </Link>

      <div style={S.tag}>Módulo 01</div>
      <h1 style={S.h1}>Introdução ao Machine Learning</h1>

      {/* === SECTION 1: O Novo Paradigma === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. O Novo Paradigma</h2>
        <p style={S.p}>
          Na programação tradicional, o programador escreve as regras (o
          programa) e o computador aplica-as a inputs para produzir outputs. Em
          Machine Learning, o paradigma inverte-se: fornecemos os inputs e os
          outputs desejados, e o computador aprende o programa (modelo) que
          mapeia uns nos outros.
        </p>
        <ParadigmaDiagram />
        <p style={S.p}>
          Esta inversão é a essência do campo. Como descreve Pedro Domingos,
          todo o algoritmo de aprendizagem tem um input e um output — mas em ML,
          o que tradicionalmente seria <em>output</em> (o programa) passa a ser
          o resultado do algoritmo, e o que tradicionalmente seriam{' '}
          <em>inputs e outputs de execução</em>
          (dados e respostas) passam a ser o <em>input</em> de treino.
        </p>
        <strong>Definição formal (Tom Mitchell, 1997):</strong> "A computer
        program is said to learn from experience <InlineMath math="E" /> with
        respect to some class of tasks <InlineMath math="T" /> and performance
        measure <InlineMath math="P" />, if its performance at tasks in{' '}
        <InlineMath math="T" />, as measured by <InlineMath math="P" />,
        improves with experience <InlineMath math="E" />
        ."
        <p style={S.p}>
          Esta definição é deliberadamente abstracta porque se aplica a qualquer
          sistema de aprendizagem. Tomemos um exemplo concreto — um filtro de
          spam:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Componente</th>
                <th style={S.th}>No filtro de spam</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tarefa T', 'Classificar emails como "spam" ou "não spam"'],
                [
                  'Medida de desempenho P',
                  'Percentagem de emails correctamente classificados',
                ],
                [
                  'Experiência E',
                  'Um conjunto de emails históricos, já rotulados como spam/não spam',
                ],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td style={S.td}>
                    <strong>{k}</strong>
                  </td>
                  <td style={S.td}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Note que a definição de Mitchell não diz <strong>como</strong> o
          programa aprende — apenas que o seu desempenho na tarefa{' '}
          <InlineMath math="T" />, medido por <InlineMath math="P" />, melhora
          com a experiência <InlineMath math="E" />. O "como" é precisamente o
          que distingue os diferentes algoritmos de ML, e é o que vamos explorar
          na próxima secção.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Os 3 Componentes === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Os 3 Componentes de um Algoritmo de ML</h2>
        <p style={S.p}>
          Qualquer algoritmo de ML, por mais complexo que pareça, pode ser
          decomposto em três componentes ortogonais: o que pode{' '}
          <strong>representar</strong>, como <strong>avalia</strong> hipóteses
          candidatas, e como <strong>pesquisa</strong> (optimiza) o espaço de
          soluções para encontrar a melhor hipótese segundo essa avaliação.
        </p>
        <ComponentsExplorer />
        <p style={S.p}>
          Estes três componentes interagem: a representação define o espaço de
          pesquisa; a função de avaliação define a "paisagem" desse espaço (que
          hipóteses são melhores que outras); e o optimizador é o método usado
          para navegar essa paisagem em busca de boas hipóteses. Mudar qualquer
          um dos três — mesmo mantendo os outros dois — produz, na prática, um
          algoritmo de aprendizagem diferente.
        </p>
        <div style={S.note}>
          <strong>Implicação prática:</strong> ao escolher um algoritmo, está
          implicitamente a escolher uma representação (e portanto um viés
          indutivo), uma função de avaliação e um método de optimização. Não
          existe uma combinação universalmente superior — é a ideia central do{' '}
          <strong>No Free Lunch Theorem</strong>, que veremos na secção 5.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Tipos de Aprendizagem === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Tipos de Aprendizagem</h2>
        <p style={S.p}>
          O segundo grande eixo de classificação não é "como" o algoritmo
          aprende, mas "que tipo de experiência" (E, na definição de Mitchell)
          lhe é fornecida. Distinguem-se quatro grandes paradigmas:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Tipo</th>
                <th style={S.th}>Input de treino</th>
                <th style={S.th}>Objectivo</th>
                <th style={S.th}>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Supervised',
                  'Pares (x, y) — features + labels',
                  'Aprender f: x → y',
                  'Classificação, Regressão',
                ],
                [
                  'Unsupervised',
                  'Apenas features x, sem labels',
                  'Descobrir estrutura latente',
                  'Clustering, PCA, Geração',
                ],
                [
                  'Semi-supervised',
                  'Poucos exemplos rotulados + muitos não rotulados',
                  'Aproveitar dados não rotulados',
                  'Label propagation, Self-training',
                ],
                [
                  'Reinforcement',
                  'Recompensas por acções num ambiente',
                  'Maximizar recompensa acumulada',
                  'Jogos, Robótica, AlphaGo',
                ],
              ].map(([t, i, o, e]) => (
                <tr key={t}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{t}</td>
                  <td style={S.td}>{i}</td>
                  <td style={S.td}>{o}</td>
                  <td
                    style={{
                      ...S.td,
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {e}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Esta cadeira foca-se sobretudo em{' '}
          <strong>aprendizagem supervisionada</strong> — o paradigma mais maduro
          e mais amplamente utilizado em aplicações práticas, e a base
          conceptual sobre a qual os outros paradigmas frequentemente se
          constroem (por exemplo, muitos métodos não supervisionados reutilizam
          arquitecturas e técnicas de optimização desenvolvidas para supervised
          learning).
        </p>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Taxonomia === */}
      <div style={S.section}>
        <h2 style={S.h2}>
          4. Taxonomia: O Mapa dos Algoritmos Supervisionados
        </h2>
        <p style={S.p}>
          Dentro da aprendizagem supervisionada, existem várias{' '}
          <strong>famílias</strong> de algoritmos, cada uma baseada numa
          representação fundamentalmente diferente do problema. Este "mapa"
          serve de bússola para o resto da cadeira — cada família corresponde a
          um ou mais módulos futuros.
        </p>
        <TaxonomyDiagram />
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Família</th>
                <th style={S.th}>Ideia central</th>
                <th style={S.th}>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Lineares',
                  'A fronteira de decisão (ou a função de regressão) é uma combinação linear das features',
                  'Regressão Linear, Regressão Logística',
                ],
                [
                  'Baseados em Árvores',
                  'Particionam o espaço de features recursivamente através de perguntas tipo "feature > limiar?"',
                  'Decision Trees, Random Forest, Gradient Boosting',
                ],
                [
                  'Baseados em Instâncias',
                  'Não treinam um modelo explícito — comparam novos exemplos directamente com exemplos de treino guardados',
                  'k-Nearest Neighbours (k-NN)',
                ],
                [
                  'Probabilísticos',
                  'Modelam distribuições de probabilidade sobre features e labels, e classificam via inferência bayesiana',
                  'Naive Bayes, Hidden Markov Models',
                ],
                [
                  'Kernel',
                  'Mapeiam dados para espaços de maior dimensão (implicitamente, via funções kernel) onde se tornam linearmente separáveis',
                  'Support Vector Machines (SVM)',
                ],
                [
                  'Neuronais',
                  'Composições de transformações simples (camadas) aprendidas via gradiente descendente',
                  'MLP, CNN, RNN, Transformers',
                ],
                [
                  'Ensembles',
                  'Combinam múltiplos modelos "fracos" para produzir uma previsão mais robusta',
                  'Bagging, Boosting, Stacking',
                ],
              ].map(([f, i, e]) => (
                <tr key={f}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{f}</td>
                  <td style={S.td}>{i}</td>
                  <td
                    style={{
                      ...S.td,
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {e}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: No Free Lunch Theorem === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. O No Free Lunch Theorem</h2>
        <p style={S.p}>
          Dada a diversidade de famílias na secção anterior, é tentador
          perguntar: "qual destes algoritmos é o melhor?" O{' '}
          <strong>No Free Lunch Theorem</strong> (Wolpert, 1996) dá uma resposta
          surpreendente:
        </p>
        <div style={S.highlight}>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Em média, sobre <strong>todos os problemas possíveis</strong> (todas
            as funções-alvo possíveis, ponderadas uniformemente),{' '}
            <strong>nenhum algoritmo de aprendizagem é melhor que outro</strong>{' '}
            — incluindo a previsão aleatória. Um algoritmo só tem desempenho
            superior a outro num conjunto específico de problemas porque assume
            implicitamente certas regularidades sobre esses problemas (o seu{' '}
            <strong>viés indutivo</strong>) — regularidades que <em>não</em> se
            verificam, em média, no conjunto de todos os problemas possíveis.
          </p>
        </div>
        <p style={S.p}>
          Em termos práticos, isto não significa que "todos os algoritmos são
          iguais" no mundo real — significa que{' '}
          <strong>
            o desempenho de um algoritmo depende de quão bem o seu viés indutivo
            se alinha com a estrutura real do problema
          </strong>
          . Por exemplo, um modelo linear funciona muito bem quando a relação
          verdadeira entre <InlineMath math="x" /> e <InlineMath math="y" /> é,
          de facto, aproximadamente linear — mas pode ter um desempenho péssimo
          numa relação altamente não-linear, onde um modelo baseado em árvores
          ou uma rede neuronal seria mais adequado.
        </p>
        <div style={S.note}>
          O NFL Theorem é a razão pela qual esta cadeira estuda{' '}
          <strong>múltiplas famílias</strong> de algoritmos em vez de apenas uma
          "melhor" — diferentes problemas exigem diferentes vieses indutivos, e
          parte da competência de um cientista de dados é saber escolher (ou
          combinar) a família certa para o problema certo.
        </div>
      </div>


      {/* === SECTION 7: Inductive Bias === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Viés Indutivo por Família de Algoritmos</h2>
        <p style={S.p}>
          Como vimos com o No Free Lunch Theorem, todo o algoritmo precisa de
          algum <strong>viés indutivo</strong> — uma assunção sobre que tipo de
          hipóteses preferir, mesmo quando vários candidatos são igualmente
          consistentes com os dados de treino. Diferentes famílias de algoritmos
          codificam vieses indutivos muito diferentes:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Família</th>
                <th style={S.th}>Viés indutivo principal</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Regressão Linear',
                  'A relação entre features e output é (aproximadamente) linear',
                ],
                [
                  'k-NN',
                  'Pontos próximos no espaço de features têm outputs semelhantes (suavidade local)',
                ],
                [
                  'Decision Trees',
                  'Preferência por árvores mais pequenas / poucas perguntas (Occam\'s razor); fronteiras "em escada", alinhadas com eixos',
                ],
                [
                  'Naive Bayes',
                  'As features são condicionalmente independentes dado a classe',
                ],
                [
                  'SVM',
                  'Existe uma margem de separação larga entre classes — maximizar a margem generaliza melhor',
                ],
                [
                  'Redes Neuronais (MLP)',
                  'Funções suaves e composicionais; preferência implícita por soluções "simples" via regularização e arquitectura',
                ],
              ].map(([f, b]) => (
                <tr key={f}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{f}</td>
                  <td style={S.td}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Sem viés indutivo, não há generalização. Se um algoritmo não fizer{' '}
          <strong>nenhuma</strong> assunção além dos exemplos de treino exactos,
          a única coisa que pode fazer com um input novo é "não sei" — é
          precisamente o viés indutivo que permite "saltar" de exemplos
          observados para previsões em casos nunca vistos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Parametric vs Non-parametric === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Modelos Paramétricos vs. Não-Paramétricos</h2>
        <p style={S.p}>
          Outra distinção transversal a todas as famílias é se o modelo tem um{' '}
          <strong>número fixo de parâmetros</strong>, independente da quantidade
          de dados de treino (paramétrico), ou se a sua complexidade pode{' '}
          <strong>crescer com os dados</strong> (não-paramétrico).
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}></th>
                <th style={S.th}>Paramétrico</th>
                <th style={S.th}>Não-paramétrico</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Nº de parâmetros',
                  'Fixo, definido antes de ver os dados (ex.: nº de pesos numa rede)',
                  'Cresce com o tamanho do dataset (ex.: nº de vizinhos guardados)',
                ],
                [
                  'Forma da função',
                  'Assumida a priori (ex.: linear)',
                  'Aprendida a partir dos dados, sem forma fixa imposta',
                ],
                [
                  'Custo de inferência',
                  'Constante, independente do tamanho do dataset de treino',
                  'Pode crescer com o dataset (ex.: k-NN precisa de comparar com todos os pontos)',
                ],
                [
                  'Exemplos',
                  'Regressão Linear, Regressão Logística, Redes Neuronais (arquitectura fixa)',
                  'k-NN, Árvores de Decisão (profundidade não limitada), Kernel Density Estimation',
                ],
                [
                  'Risco típico',
                  'Underfitting se a forma assumida estiver errada',
                  'Overfitting se não houver regularização / poda',
                ],
              ].map(([k, p, np]) => (
                <tr key={k}>
                  <td style={{ ...S.td, fontWeight: 700 }}>{k}</td>
                  <td style={S.td}>{p}</td>
                  <td style={S.td}>{np}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          "Não-paramétrico" não significa "sem parâmetros" — significa que o{' '}
          <strong>número</strong> de parâmetros não é fixado antecipadamente e
          pode depender dos dados. Redes neuronais são paramétricas (a
          arquitectura define um número fixo de pesos antes do treino), mesmo
          que esse número possa ser enorme.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Bias-Variance Tradeoff === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. O Trade-off entre Bias e Variância</h2>
        <p style={S.p}>
          Um dos resultados mais importantes de toda a teoria de Machine
          Learning é que o erro de generalização de um modelo pode ser
          decomposto em três componentes: <strong>bias</strong> (viés),
          <strong> variância</strong> e <strong>ruído irredutível</strong>.
        </p>
        <div style={S.math}>
          <BlockMath math="\mathbb{E}[(y - \hat{f}(x))^2] = \underbrace{\big(\text{Bias}[\hat{f}(x)]\big)^2}_{\text{erro sistemático}} + \underbrace{\text{Var}[\hat{f}(x)]}_{\text{sensibilidade aos dados}} + \underbrace{\sigma^2}_{\text{ruído irredutível}}" />
        </div>
        <p style={S.p}>Intuitivamente:</p>
        <ul style={{ ...S.p, paddingLeft: '1.5rem' }}>
          <li>
            <strong>Bias</strong> mede o quanto, em média, as previsões do
            modelo se desviam do valor verdadeiro — alto bias significa que o
            modelo é "demasiado simples" para capturar a estrutura real
            (underfitting).
          </li>
          <li>
            <strong>Variância</strong> mede o quanto as previsões do modelo
            mudam se treinássemos com um conjunto de treino diferente (amostrado
            da mesma distribuição) — alta variância significa que o modelo é
            demasiado sensível às particularidades do conjunto de treino
            específico (overfitting).
          </li>
          <li>
            <strong>
              Ruído (<InlineMath math="\sigma^2" />)
            </strong>{' '}
            é o erro irredutível inerente ao problema — mesmo o modelo perfeito
            não consegue eliminá-lo (ex.: variabilidade aleatória nos dados).
          </li>
        </ul>
        <BiasVarianceDiagram />
        <p style={S.p}>
          Modelos muito simples (ex.: regressão linear num problema altamente
          não-linear) tendem a ter
          <strong> alto bias e baixa variância</strong>: erram de forma
          consistente, mas essa forma de errar não muda muito entre diferentes
          conjuntos de treino. Modelos muito complexos (ex.: uma árvore de
          decisão profunda sem poda) tendem a ter{' '}
          <strong>baixo bias e alta variância</strong>: ajustam-se muito bem ao
          conjunto de treino específico, mas essa solução muda drasticamente se
          o conjunto de treino mudar ligeiramente. O objectivo não é eliminar
          bias ou variância individualmente, mas encontrar o ponto que minimiza
          a <strong>soma</strong> dos dois — o "ponto óptimo" no diagrama acima.
        </p>
        <div style={S.note}>
          Técnicas como <strong>regularização</strong>,{' '}
          <strong>poda de árvores</strong>, <strong>early stopping</strong> e{' '}
          <strong>ensembles</strong> (que veremos em módulos futuros) são, no
          fundo, formas diferentes de gerir este trade-off — tipicamente
          trocando um pequeno aumento de bias por uma grande redução de
          variância (ou vice-versa).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 10: O Pipeline === */}
      <div style={S.section}>
        <h2 style={S.h2}>9. O Pipeline Geral de Machine Learning</h2>
        <p style={S.p}>
          Para fechar este módulo introdutório, é útil ter uma visão de "voo de
          pássaro" sobre como todos estes conceitos se encaixam num processo
          real de desenvolvimento de um sistema de ML.
        </p>
        <PipelineDiagram />
        <p style={S.p}>
          Cada uma das etapas deste pipeline esconde, por si só, um conjunto de
          decisões importantes — que features usar, como tratar valores em
          falta, que percentagem de dados reservar para teste, que métricas
          reportar — e a maioria dos módulos seguintes vai aprofundar uma ou
          mais destas etapas em detalhe, sobretudo "Treino" (os próprios
          algoritmos) e "Avaliação" (métricas e validação).
        </p>
      </div>
    </div>
  );
}
