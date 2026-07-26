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
    background: `rgba(74,158,237,0.10)`,
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
};

// === Interactive: CRISP-DM 6 phases ===
const CrispPhases = () => {
  const [active, setActive] = useState(0);
  const phases = [
    {
      n: '1',
      name: 'Business Understanding',
      color: '#4a9eed',
      desc: 'Compreender os objetivos de negócio, traduzir em problema de Data Mining, definir critério de sucesso.',
      example:
        'Ex.: "Reduzir o churn de clientes em 15%" traduz-se em "construir um classificador que preveja, com 30 dias de antecedência, quais clientes têm alta probabilidade de cancelar o serviço".',
      key: 'É a fase mais crítica. Um problema mal definido garante uma solução irrelevante — por mais sofisticado que seja o modelo, se a pergunta estiver errada, a resposta também estará.',
    },
    {
      n: '2',
      name: 'Data Understanding',
      color: '#4a9eed',
      desc: 'Recolher dados iniciais, explorar, identificar problemas de qualidade, descobrir primeiros insights.',
      example:
        'EDA (Exploratory Data Analysis): histogramas de distribuições, percentagem de missing values por coluna, detecção de outliers, matrizes de correlação, verificação de se as labels estão balanceadas.',
      key: 'É aqui que se descobrem "red flags" — ex. uma feature que está disponível no histórico mas não estará disponível em produção no momento da previsão (data leakage temporal).',
    },
    {
      n: '3',
      name: 'Data Preparation',
      color: '#4a9eed',
      desc: 'Selecionar, limpar, construir e formatar os dados. A fase que consome mais tempo (60-80% de um projeto real).',
      example:
        'Tratamento de missing values (imputação vs. remoção), deteção e tratamento de outliers, discretização de variáveis contínuas, normalização/standardização, codificação de variáveis categóricas, criação de novas features (feature engineering).',
      key: 'Esta fase é tipicamente subestimada em planeamento de projetos — equipas que orçam "2 semanas para dados, 2 meses para modelos" descobrem rapidamente que a proporção devia ser inversa.',
    },
    {
      n: '4',
      name: 'Modeling',
      color: '#4a9eed',
      desc: 'Selecionar técnicas de modelação, calibrar hiperparâmetros, treinar e avaliar modelos candidatos.',
      example:
        'Ex.: experimentar regressão logística, árvores de decisão e random forest no mesmo dataset preparado, usando validação cruzada para escolher hiperparâmetros e comparar desempenho.',
      key: 'Frequentemente volta-se à Data Preparation quando o modelo revela problemas nos dados (ex.: uma feature com importância anormalmente alta pode indicar leakage).',
    },
    {
      n: '5',
      name: 'Evaluation',
      color: '#4a9eed',
      desc: 'Avaliar o modelo face aos objetivos de negócio definidos na fase 1. Determinar se os resultados respondem à questão original.',
      example:
        'Um modelo com 92% de accuracy pode ser inútil se a baseline (prever sempre a classe maioritária) já dá 90% — e pode ser excelente se o custo de cada falso negativo for muito superior ao custo de implementação.',
      key: 'Distinguir avaliação técnica (métricas como precision/recall/AUC) de avaliação de negócio (impacto real em receita, custo, satisfação do cliente). Um modelo "tecnicamente bom" pode ser "inútil para o negócio".',
    },
    {
      n: '6',
      name: 'Deployment',
      color: '#4a9eed',
      desc: 'Colocar o modelo em produção, integrá-lo nos sistemas existentes, monitorizar performance, manter e atualizar.',
      example:
        'Ex.: integrar o modelo de churn no CRM, de forma a que a equipa de retenção receba automaticamente uma lista diária de clientes em risco, ordenada por probabilidade.',
      key: 'Um modelo nunca está "acabado" — requer monitorização contínua (data drift, concept drift) e retreino periódico. O deployment é o início de um novo ciclo, não o fim do projeto.',
    },
  ];
  const ph = phases[active];
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        CRISP-DM — As 6 Fases
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.4rem',
          flexWrap: 'wrap',
          marginBottom: '1.25rem',
          justifyContent: 'center',
        }}
      >
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '0.3rem 0.7rem',
              borderRadius: 20,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.78rem',
              background: active === i ? p.color : 'var(--bg-primary)',
              color: active === i ? 'white' : 'var(--text-primary)',
              border: `1.5px solid ${active === i ? p.color : 'var(--card-border)'}`,
              transition: 'all 0.2s',
            }}
          >
            {p.n}. {p.name}
          </button>
        ))}
      </div>
      <div
        style={{
          background: 'var(--bg-primary)',
          borderRadius: 10,
          padding: '1.25rem',
          textAlign: 'left',
          border: `1.5px solid ${ph.color}40`,
        }}
      >
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-primary)',
            lineHeight: 1.7,
            marginBottom: '0.75rem',
          }}
        >
          {ph.desc}
        </p>
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '0.75rem',
            fontStyle: 'italic',
          }}
        >
          {ph.example}
        </p>
        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            margin: 0,
          }}
        >
          {' '}
          {ph.key}
        </p>
      </div>
    </div>
  );
};

// === Diagram: CRISP-DM iteration/feedback loops ===
const CrispLoopDiagram = () => {
  const phases = [
    { n: '1', name: 'Business\nUnderstanding', c: '#4a9eed', x: 30, y: 20 },
    { n: '2', name: 'Data\nUnderstanding', c: '#4a9eed', x: 220, y: 20 },
    { n: '3', name: 'Data\nPreparation', c: '#4a9eed', x: 410, y: 20 },
    { n: '4', name: 'Modeling', c: '#4a9eed', x: 410, y: 150 },
    { n: '5', name: 'Evaluation', c: '#4a9eed', x: 220, y: 150 },
    { n: '6', name: 'Deployment', c: '#4a9eed', x: 30, y: 150 },
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
        CRISP-DM é Iterativo, Não Linear
      </p>
      <svg viewBox="-40 0 570 250" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker
            id="arr-crisp"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(74,158,237,0.5)" />
          </marker>
          <marker
            id="arr-crisp-back"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
          </marker>
        </defs>
        {/* forward flow arrows */}
        <path
          d="M120 40 L210 40"
          stroke="rgba(74,158,237,0.5)"
          strokeWidth="1.5"
          markerEnd="url(#arr-crisp)"
        />
        <path
          d="M310 40 L400 40"
          stroke="rgba(74,158,237,0.5)"
          strokeWidth="1.5"
          markerEnd="url(#arr-crisp)"
        />
        <path
          d="M460 70 L460 140"
          stroke="rgba(74,158,237,0.5)"
          strokeWidth="1.5"
          markerEnd="url(#arr-crisp)"
        />
        <path
          d="M400 170 L310 170"
          stroke="rgba(74,158,237,0.5)"
          strokeWidth="1.5"
          markerEnd="url(#arr-crisp)"
        />
        <path
          d="M210 170 L120 170"
          stroke="rgba(74,158,237,0.5)"
          strokeWidth="1.5"
          markerEnd="url(#arr-crisp)"
        />

        {/* feedback loops (dashed red) */}
        <path
          d="M410 145 C 350 100, 350 70, 320 55"
          fill="none"
          stroke="#4a9eed"
          strokeWidth="1.3"
          strokeDasharray="4,3"
          markerEnd="url(#arr-crisp-back)"
        />
        <path
          d="M220 145 C 170 110, 170 70, 130 55"
          fill="none"
          stroke="#4a9eed"
          strokeWidth="1.3"
          strokeDasharray="4,3"
          markerEnd="url(#arr-crisp-back)"
        />
        <path
          d="M30 150 C -30 120, -30 45, 30 45"
          fill="none"
          stroke="#4a9eed"
          strokeWidth="1.3"
          strokeDasharray="4,3"
          markerEnd="url(#arr-crisp-back)"
        />

        {phases.map(({ n, name, c, x, y }) => (
          <g key={n}>
            <rect
              x={x}
              y={y}
              width={100}
              height={50}
              rx="8"
              fill={`${c}15`}
              stroke={c}
              strokeWidth="1.5"
            />
            <text
              x={x + 50}
              y={y + 18}
              textAnchor="middle"
              fill={c}
              fontSize="11"
              fontWeight="700"
            >
              {n}
            </text>
            {name.split('\n').map((line, li) => (
              <text
                key={li}
                x={x + 50}
                y={y + 32 + li * 12}
                textAnchor="middle"
                fill={c}
                fontSize="9.5"
                fontWeight="600"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
        <text
          x="265"
          y="230"
          textAnchor="middle"
          fill="#4a9eed"
          fontSize="9.5"
          fontStyle="italic"
        >
          setas tracejadas a vermelho = ciclos de feedback (voltar a fases
          anteriores)
        </text>
        <text
          x="265"
          y="245"
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="9.5"
          fontStyle="italic"
        >
          setas sólidas = fluxo "ideal" de progressão
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
        Na prática, o fluxo nunca é uma linha recta. A{' '}
        <strong>Evaluation</strong> pode revelar que o problema estava mal
        definido (voltar à <strong>Business Understanding</strong>); a{' '}
        <strong>Modeling</strong> pode revelar que os dados precisam de mais
        limpeza ou de novas features (voltar à <strong>Data Preparation</strong>
        ); e até a fase de <strong>Deployment</strong> alimenta novamente o
        ciclo, porque a monitorização em produção gera novos dados e novas
        perguntas de negócio. A maioria dos projetos reais executa várias destas
        iterações antes de chegar a uma solução estável.
      </p>
    </div>
  );
};

// === Diagram: confounder DAG ===
const ConfounderDiagram = () => (
  <div style={S.diagram}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '1rem',
        color: 'var(--text-primary)',
      }}
    >
      Confounder: a Causa Comum Escondida
    </p>
    <svg viewBox="0 0 380 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker
          id="arr-conf"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
        <marker
          id="arr-conf-r"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3rgba(74,158,237,0.10) L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>
      {/* Z node (confounder) */}
      <rect
        x="140"
        y="10"
        width="100"
        height="44"
        rx="8"
        fill="#0284c715"
        stroke="#0284c7"
        strokeWidth="1.5"
      />
      <text
        x="190"
        y="30"
        textAnchor="middle"
        fill="#0284c7"
        fontSize="11"
        fontWeight="700"
      >
        Z
      </text>
      <text x="190" y="44" textAnchor="middle" fill="#0284c7" fontSize="9">
        (confounder)
      </text>

      {/* X node */}
      <rect
        x="20"
        y="120"
        width="100"
        height="44"
        rx="8"
        fill="#0284c715"
        stroke={color}
        strokeWidth="1.5"
      />
      <text
        x="70"
        y="140"
        textAnchor="middle"
        fill={color}
        fontSize="11"
        fontWeight="700"
      >
        X
      </text>
      <text x="70" y="154" textAnchor="middle" fill={color} fontSize="9">
        (ex: gelados)
      </text>

      {/* Y node */}
      <rect
        x="260"
        y="120"
        width="100"
        height="44"
        rx="8"
        fill="#0284c715"
        stroke="#4a9eed"
        strokeWidth="1.5"
      />
      <text
        x="310"
        y="140"
        textAnchor="middle"
        fill="#4a9eed"
        fontSize="11"
        fontWeight="700"
      >
        Y
      </text>
      <text x="310" y="154" textAnchor="middle" fill="#4a9eed" fontSize="9">
        (ex: afogamentos)
      </text>

      {/* Z -> X */}
      <path
        d="M150 54 L90 118"
        stroke="var(--text-secondary)"
        strokeWidth="1.5"
        markerEnd="url(#arr-conf)"
      />
      {/* Z -> Y */}
      <path
        d="M230 54 L290 118"
        stroke="var(--text-secondary)"
        strokeWidth="1.5"
        markerEnd="url(#arr-conf)"
      />
      {/* X ~ Y spurious, dashed red, no real arrow but correlation */}
      <path
        d="M122 142 L258 142"
        stroke="#4a9eed"
        strokeWidth="1.5"
        strokeDasharray="4,3"
        markerEnd="url(#arr-conf-r)"
        markerStart="url(#arr-conf-r)"
      />
      <text
        x="190"
        y="178"
        textAnchor="middle"
        fill="#4a9eed"
        fontSize="9.5"
        fontStyle="italic"
      >
        correlação espúria observada (X ~ Y)
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
      <InlineMath math="Z" /> (a temperatura) causa tanto{' '}
      <InlineMath math="X" /> (vendas de gelados) como
      <InlineMath math="Y" /> (afogamentos). Se ignorarmos{' '}
      <InlineMath math="Z" /> e olharmos apenas para
      <InlineMath math="X" /> e <InlineMath math="Y" />, observamos uma forte
      correlação entre eles (linha tracejada vermelha) — mas essa correlação não
      reflete nenhuma relação causal directa entre
      <InlineMath math="X" /> e <InlineMath math="Y" />. É inteiramente
      "explicada" pela causa comum
      <InlineMath math="Z" />. Controlar (condicionar) por{' '}
      <InlineMath math="Z" /> faz a correlação entre
      <InlineMath math="X" /> e <InlineMath math="Y" /> desaparecer (ou
      reduzir-se drasticamente).
    </p>
  </div>
);

// === Diagram: curse of dimensionality — fraction of volume in the shell ===
const DimensionalityShellDiagram = () => {
  const w = 480,
    h = 230,
    pad = 45;
  const xToPx = (d) => pad + ((d - 1) / 19) * (w - 2 * pad);
  const yToPx = (frac) => h - pad - frac * (h - 2 * pad);
  // fraction of hypercube volume within epsilon=0.1 of the boundary = 1 - (1-2*0.1)^d for a cube of side 1 centered shell of width 0.1 on each side... use 1-(0.8)^d
  const fracInShell = (d) => 1 - Math.pow(0.8, d);
  let path = '';
  for (let d = 1; d <= 20; d++) {
    const px = xToPx(d);
    const py = yToPx(fracInShell(d));
    path += (d === 1 ? 'M' : 'L') + px.toFixed(1) + ',' + py.toFixed(1) + ' ';
  }
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Quase Todo o Volume de um Hipercubo Está Junto à "Casca"
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
          y={h - 6}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="11"
        >
          Número de dimensões d →
        </text>
        <text
          x="14"
          y={h / 2}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="11"
          transform={`rotate(-90 14 ${h / 2})`}
        >
          Fração do volume na "casca" exterior
        </text>

        {/* y axis ticks at 0, 0.5, 1 */}
        {[0, 0.5, 1].map((v) => (
          <g key={v}>
            <line
              x1={pad - 3}
              y1={yToPx(v)}
              x2={pad}
              y2={yToPx(v)}
              stroke="var(--text-secondary)"
              strokeWidth="1"
            />
            <text
              x={pad - 6}
              y={yToPx(v) + 3}
              textAnchor="end"
              fill="var(--text-secondary)"
              fontSize="9"
            >
              {v}
            </text>
          </g>
        ))}
        {/* x axis ticks */}
        {[1, 5, 10, 15, 20].map((dv) => (
          <g key={dv}>
            <line
              x1={xToPx(dv)}
              y1={h - pad}
              x2={xToPx(dv)}
              y2={h - pad + 3}
              stroke="var(--text-secondary)"
              strokeWidth="1"
            />
            <text
              x={xToPx(dv)}
              y={h - pad + 15}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="9"
            >
              {dv}
            </text>
          </g>
        ))}

        <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
        <line
          x1={pad}
          y1={yToPx(1)}
          x2={w - pad}
          y2={yToPx(1)}
          stroke="var(--text-secondary)"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text
          x={w - pad}
          y={yToPx(1) - 5}
          textAnchor="end"
          fill="var(--text-secondary)"
          fontSize="9"
          fontStyle="italic"
        >
          100% do volume
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
        Considere um hipercubo de lado 1, e uma "casca" interior com 10% de
        largura junto a cada face (uma sub-região central de lado 0.8). A fração
        do volume <strong>dentro</strong> dessa casca exterior é
        <InlineMath math="1 - 0.8^d" />. Em <InlineMath math="d=1" />, essa
        fração é apenas 20% — a maior parte do volume está no "centro". Mas à
        medida que <InlineMath math="d" /> cresce, <InlineMath math="0.8^d" />
        tende rapidamente para zero, e a fração na casca tende para{' '}
        <strong>100%</strong>. Em dimensões elevadas, praticamente todo o volume
        de um hipercubo está concentrado perto das suas fronteiras — não há
        "centro" no sentido intuitivo a que estamos habituados em 2D ou 3D. Isto
        é uma das razões pelas quais a noção de "vizinhança" (essencial para
        algoritmos como k-NN) se degrada em alta dimensão: quase todos os pontos
        ficam próximos de alguma fronteira do espaço, e as distâncias entre
        pontos tendem a convergir para valores semelhantes (
        <em>concentração das distâncias</em>).
      </p>
    </div>
  );
};

// === Diagram: Bayes error / overlapping distributions ===
const BayesErrorDiagram = () => {
  const w = 480,
    h = 200,
    pad = 40;
  const xToPx = (x) => pad + ((x + 5) / 10) * (w - 2 * pad);
  const yToPx = (y) => h - pad - y * (h - 2 * pad) * 1.6;
  const gauss = (x, mu, sigma) =>
    Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2)) /
    (sigma * Math.sqrt(2 * Math.PI));
  const makePath = (mu, sigma) => {
    let d = '';
    for (let i = 0; i <= 100; i++) {
      const x = -5 + (10 * i) / 100;
      const y = gauss(x, mu, sigma);
      d +=
        (i === 0 ? 'M' : 'L') +
        xToPx(x).toFixed(1) +
        ',' +
        yToPx(y).toFixed(1) +
        ' ';
    }
    return d;
  };
  // overlap region roughly between -1 and 1.5 given mu=-1.5,sigma=1.4 and mu=2,sigma=1.4
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Sobreposição de Classes e o Erro de Bayes
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
        <text
          x={w / 2}
          y={h - 6}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="11"
        >
          valor da feature x →
        </text>

        {/* shaded overlap region */}
        <rect
          x={xToPx(-1.2)}
          y={pad}
          width={xToPx(1.5) - xToPx(-1.2)}
          height={h - 2 * pad}
          fill="#4a9eed"
          opacity="0.08"
        />
        <text
          x={(xToPx(-1.2) + xToPx(1.5)) / 2}
          y={pad - 2}
          textAnchor="middle"
          fill="#4a9eed"
          fontSize="9.5"
          fontWeight="700"
        >
          erro de Bayes (irredutível)
        </text>

        <path
          d={makePath(-1.8, 1.3)}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />
        <path
          d={makePath(2, 1.3)}
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2.5"
        />

        <text
          x={xToPx(-1.8)}
          y={yToPx(gauss(-1.8, -1.8, 1.3)) - 8}
          textAnchor="middle"
          fill="#4a9eed"
          fontSize="10"
          fontWeight="700"
        >
          classe A
        </text>
        <text
          x={xToPx(2)}
          y={yToPx(gauss(2, 2, 1.3)) - 8}
          textAnchor="middle"
          fill="#4a9eed"
          fontSize="10"
          fontWeight="700"
        >
          classe B
        </text>

        <line
          x1={xToPx(0.1)}
          y1={pad}
          x2={xToPx(0.1)}
          y2={h - pad}
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        <text
          x={xToPx(0.1)}
          y={pad - 12}
          textAnchor="middle"
          fill="var(--text-primary)"
          fontSize="9"
          fontWeight="700"
        >
          fronteira de decisão óptima
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
        Quando as distribuições das duas classes se <strong>sobrepõem</strong>{' '}
        no espaço de features, não existe nenhuma fronteira de decisão que
        separe perfeitamente as classes. A região sombreada representa
        instâncias onde, mesmo sabendo as verdadeiras distribuições{' '}
        <InlineMath math="P(x \mid A)" /> e
        <InlineMath math="P(x \mid B)" />, o classificador óptimo (o
        classificador de Bayes, que escolhe a classe com maior probabilidade a
        posteriori) ainda vai cometer erros — porque há instâncias de ambas as
        classes com o mesmo valor de <InlineMath math="x" />. Este erro mínimo
        chama-se <strong>erro de Bayes</strong> e é um "piso" — nenhum modelo,
        por mais bem treinado, consegue ir abaixo dele, porque o erro não
        resulta de limitações do modelo mas da própria sobreposição inerente das
        classes nos dados.
      </p>
    </div>
  );
};

export default function DM2() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Data Mining
      </Link>
      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Introdução ao Data Mining & Definição do Problema</h1>

      {/* === SECTION 1: Data Science vs DM vs ML vs Estatística === */}
      <div style={S.section}>
        <h2 style={S.h2}>
          1. Data Science vs. Data Mining vs. Machine Learning vs. Estatística
        </h2>
        <p style={S.p}>
          Estes quatro termos são frequentemente usados de forma intercambiável,
          mas representam ênfases distintas dentro do mesmo ecossistema de
          "extrair valor a partir de dados". Não são categorias mutuamente
          exclusivas — sobrepõem-se substancialmente — mas têm origens,
          objetivos e culturas diferentes.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Conceito</th>
                <th style={S.th}>Foco</th>
                <th style={S.th}>Abordagem</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Data Science',
                  'Processo completo: recolha → limpeza → análise → modelação → comunicação de resultados',
                  'Interdisciplinar — combina estatística, programação, conhecimento de domínio e comunicação',
                ],
                [
                  'Data Mining',
                  'Descoberta automática de padrões, regras e estruturas em dados (frequentemente sem hipótese prévia)',
                  'Algoritmos aplicados a grandes volumes de dados, com forte componente exploratória',
                ],
                [
                  'Machine Learning',
                  'Construção de modelos que aprendem a partir de exemplos e generalizam para dados novos',
                  'Modelos paramétricos/não-paramétricos optimizados para uma métrica de desempenho',
                ],
                [
                  'Estatística',
                  'Inferência, teste de hipóteses e quantificação de incerteza com modelos probabilísticos',
                  'Orientada para compreensão, explicação e generalização com garantias formais',
                ],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                  <td style={S.td}>{b}</td>
                  <td
                    style={{
                      ...S.td,
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {c}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          Uma forma útil de pensar nas relações entre estes campos é como{' '}
          <strong>círculos sobrepostos</strong>: a Estatística fornece muitas
          das fundações matemáticas (distribuições, testes, estimadores) que
          tanto o Data Mining como o Machine Learning utilizam; o Data Mining
          herda da Estatística as ferramentas, mas aplica-as numa cultura mais
          exploratória, orientada a dados em vez de hipóteses; o Machine
          Learning partilha com o Data Mining muitos algoritmos (árvores de
          decisão, clustering, redes neuronais), mas com maior ênfase em
          <em> previsão</em> e <em>generalização</em> do que em{' '}
          <em>descrição</em>; e a Data Science engloba tudo isto, acrescentando
          as componentes de engenharia de dados, visualização e comunicação de
          resultados a stakeholders não técnicos.
        </p>
        <div style={S.note}>
          <strong>Exemplo concreto:</strong> imagine uma cadeia de supermercados
          com dados de transações. Um
          <strong> estatístico</strong> pode testar a hipótese "a promoção X
          aumentou significativamente as vendas de Y". Um analista de{' '}
          <strong>Data Mining</strong> pode procurar, sem hipótese prévia, quais
          combinações de produtos são frequentemente comprados juntos
          (association rules). Um <strong>cientista de ML</strong> pode
          construir um modelo que prevê, para cada cliente, a probabilidade de
          comprar um produto específico na próxima visita. E um{' '}
          <strong>Data Scientist</strong> integra tudo isto — desde a extração
          dos dados transacionais até à apresentação de um dashboard executivo
          com recomendações de ação.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Tarefas Canónicas === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Tarefas Canónicas em Data Mining</h2>
        <p style={S.p}>
          Quase todos os problemas de Data Mining podem ser enquadrados numa
          pequena lista de "tarefas canónicas". Reconhecer em qual destas
          categorias o seu problema se insere é um dos primeiros passos da
          <strong> Business Understanding</strong> (que veremos na próxima
          secção) — porque determina logo o tipo de algoritmos, métricas e dados
          necessários.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Tarefa</th>
                <th style={S.th}>Descrição</th>
                <th style={S.th}>Exemplo concreto</th>
                <th style={S.th}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Classificação',
                  'Prever a classe/categoria de novas instâncias a partir de um conjunto finito de classes possíveis',
                  'Email é spam ou não-spam? Tumor é benigno ou maligno?',
                  'Supervisionado',
                ],
                [
                  'Regressão',
                  'Prever um valor numérico contínuo',
                  'Qual será o preço de venda de uma casa dadas as suas características?',
                  'Supervisionado',
                ],
                [
                  'Clustering',
                  'Agrupar instâncias semelhantes entre si, sem labels pré-definidas',
                  'Segmentar clientes em grupos com comportamentos de compra parecidos',
                  'Não supervisionado',
                ],
                [
                  'Association Rules',
                  'Descobrir regras do tipo "se A então B" frequentes nos dados',
                  '"Quem compra fraldas e leite tende também a comprar toalhitas" (market basket analysis)',
                  'Não supervisionado',
                ],
                [
                  'Anomaly Detection',
                  'Identificar instâncias atípicas, raras ou inesperadas',
                  'Detetar transações de cartão de crédito fraudulentas; falhas em sensores industriais',
                  'Não/Semi-supervisionado',
                ],
                [
                  'Dimensionality Reduction',
                  'Reduzir o número de features mantendo o máximo de informação relevante',
                  'Comprimir centenas de variáveis genéticas em poucas "componentes" para visualização',
                  'Não supervisionado',
                ],
              ].map(([a, b, ex, c]) => (
                <tr key={a}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                  <td style={S.td}>{b}</td>
                  <td
                    style={{
                      ...S.td,
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {ex}
                  </td>
                  <td
                    style={{
                      ...S.td,
                      color: c === 'Supervisionado' ? '#4a9eed' : '#4a9eed',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                    }}
                  >
                    {c}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          A fronteira entre estas tarefas nem sempre é rígida na prática. Por
          exemplo, a detecção de anomalias pode ser abordada como classificação
          (treinando um modelo com poucos exemplos de "anomalia" rotulados),
          como clustering (assumindo que anomalias ficam fora de todos os
          clusters "normais") ou como uma tarefa própria baseada em modelos de
          densidade. A escolha depende da quantidade e qualidade dos dados
          rotulados disponíveis.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: CRISP-DM === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. CRISP-DM — As 6 Fases</h2>
        <p style={S.p}>
          O <strong>CRISP-DM</strong> (Cross Industry Standard Process for Data
          Mining) é o processo padrão de referência da indústria para projetos
          de Data Mining e Data Science. Foi desenhado para ser independente de
          ferramenta e de domínio de aplicação, e organiza um projeto em seis
          fases. A característica mais importante do CRISP-DM não é a lista de
          fases em si, mas o facto de o processo ser
          <strong> iterativo</strong> — as fases não seguem uma sequência
          estritamente linear, e é normal (e esperado) voltar a fases anteriores
          várias vezes ao longo de um projeto.
        </p>
        <CrispPhases />
        <h3 style={S.h3}>O Carácter Cíclico do Processo</h3>
        <p style={S.p}>
          Diagramas que mostram o CRISP-DM como uma sequência numerada (1 → 2 →
          3 → 4 → 5 → 6) podem dar a falsa impressão de um processo em
          "cascata". Na realidade, cada fase pode revelar informação que obriga
          a revisitar fases anteriores — e é precisamente essa capacidade de
          iterar que distingue um projeto de Data Mining bem gerido de um mal
          gerido.
        </p>
        <CrispLoopDiagram />
        <div style={S.highlight}>
          <strong>Ponto crítico do CRISP-DM:</strong> o processo é cíclico, não
          linear. A avaliação pode revelar que o problema estava mal definido
          (voltar ao Business Understanding), ou que os dados precisam de mais
          preparação ou de novas features (voltar à Data Preparation), ou ainda
          que é preciso recolher dados adicionais (voltar à Data Understanding).
          A maioria dos projetos reais executa várias destas iterações antes de
          chegar a uma solução estável e implementável.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: Estatística vs Data Mining === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Estatística vs. Data Mining — Duas Culturas</h2>
        <p style={S.p}>
          Embora partilhem muitas técnicas matemáticas, a Estatística clássica e
          o Data Mining representam, em grande medida, duas{' '}
          <strong>culturas</strong> diferentes de trabalhar com dados — uma
          distinção que o estatístico Leo Breiman tornou famosa ao falar de
          "duas culturas da modelação estatística". Compreender esta diferença
          ajuda a evitar erros de definição de problema: assumir implicitamente
          as garantias de uma cultura (ex.: as garantias formais de inferência
          da Estatística) quando se está, na verdade, a operar dentro da outra
          (Data Mining exploratório).
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}></th>
                <th style={S.th}>Estatística</th>
                <th style={S.th}>Data Mining</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Objetivo',
                  'Testar hipóteses específicas, fazer inferência sobre uma população',
                  'Descoberta de padrões — frequentemente sem hipótese prévia formal',
                ],
                [
                  'Ponto de partida',
                  'A hipótese é formulada antes de ver os dados ("teoria primeiro")',
                  'Os dados são explorados primeiro, e os padrões emergem ("dados primeiro")',
                ],
                [
                  'Dados',
                  'Tipicamente amostras pequenas, recolhidas de forma controlada (desenho experimental)',
                  'Grandes volumes, frequentemente recolhidos para outros fins (dados "messy", observacionais)',
                ],
                [
                  'Validação',
                  'Testes estatísticos formais (p-values, intervalos de confiança)',
                  'Validação out-of-sample (train/test split), métricas orientadas ao negócio',
                ],
                [
                  'Risco característico',
                  'Erro de especificação do modelo, violação de assunções (normalidade, independência)',
                  'Overfitting, "p-hacking" — testar tantas hipóteses que algumas "passam" por acaso',
                ],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <td
                    style={{
                      ...S.td,
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {a}
                  </td>
                  <td style={S.td}>{b}</td>
                  <td style={{ ...S.td, color }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={S.note}>
          Estas culturas não são "rivais" — são complementares. Um projeto de
          Data Mining bem-sucedido frequentemente usa testes estatísticos para
          validar se um padrão descoberto exploratoriamente é estatisticamente
          significativo (e não apenas ruído), enquanto um estudo estatístico
          clássico pode usar técnicas de Data Mining na fase exploratória, antes
          de formular a hipótese final a testar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Selection Bias, Spurious Relationships, Confounders === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Problemas na Definição do Problema</h2>
        <p style={S.p}>
          A fase de definição do problema é onde se cometem os erros mais
          difíceis de detetar mais tarde — porque frequentemente não produzem
          erros de código nem mensagens de aviso. O modelo treina, as métricas
          parecem razoáveis, mas a <em>pergunta</em> em si está mal colocada, ou
          os <em>dados</em> não permitem responder à pergunta pretendida. Vamos
          analisar três armadilhas clássicas.
        </p>

        <h3 style={S.h3}>5.1 Selection Bias</h3>
        <p style={S.p}>
          O <strong>selection bias</strong> (viés de seleção) ocorre quando os
          dados recolhidos não representam de forma fiel a população sobre a
          qual queremos generalizar as conclusões. O modelo aprende padrões
          válidos
          <em> dentro da amostra</em>, mas esses padrões não se transferem para
          a população real — porque a amostra foi recolhida de uma forma que
          sistematicamente inclui ou exclui certos tipos de instâncias.
        </p>
        <div style={S.highlight}>
          <strong>Exemplo 1 — Crédito bancário:</strong> Treinar um modelo de
          risco de crédito apenas com dados de clientes a quem o empréstimo foi{' '}
          <em>aprovado</em> ignora todos os pedidos rejeitados. O modelo nunca
          vê exemplos de "pessoas que teriam sido más pagadoras e foram
          corretamente rejeitadas" nem de "pessoas que foram rejeitadas mas
          seriam boas pagadoras" — porque essa informação simplesmente não
          existe nos dados históricos. Isto é conhecido como{' '}
          <em>reject inference</em> e é um problema clássico em modelação de
          crédito.
          <br />
          <br />
          <strong>Exemplo 2 — Survivorship bias:</strong> Estudar
          características de empresas "de sucesso" usando apenas empresas que
          ainda existem hoje ignora todas as que faliram — e pode levar a
          concluir, erradamente, que certas práticas (que tanto empresas
          bem-sucedidas como falidas seguiram) são "receitas de sucesso".
          <br />
          <br />
          <strong>Exemplo 3 — Inquéritos online:</strong> Um inquérito de
          satisfação distribuído apenas online subamostra sistematicamente
          pessoas com menor literacia digital ou acesso limitado à internet —
          enviesando conclusões sobre "a opinião dos clientes" em geral.
        </div>
        <div style={S.note}>
          A pergunta a fazer sempre é:{' '}
          <strong>
            "Como é que os dados que tenho chegaram a existir — e quem está
            ausente?"
          </strong>{' '}
          Se a resposta a essa pergunta estiver relacionada com a variável que
          se quer prever, há provavelmente selection bias.
        </div>

        <h3 style={S.h3}>5.2 Spurious Relationships (Correlações Espúrias)</h3>
        <p style={S.p}>
          Uma <strong>correlação espúria</strong> é uma associação estatística
          entre duas variáveis que não reflete nenhuma relação causal direta
          entre elas. Pode surgir porque ambas as variáveis são causadas por uma
          terceira variável comum (uma <em>confounding variable</em>, que
          veremos a seguir), ou simplesmente por acaso — especialmente quando se
          testam muitas combinações de variáveis em conjuntos de dados grandes
          (o que aumenta drasticamente a probabilidade de encontrar correlações
          "significativas" puramente por coincidência).
        </p>
        <div style={S.highlight}>
          <strong>Exemplo clássico:</strong> O número de afogamentos numa praia
          correlaciona fortemente com as vendas de gelados na mesma região e
          período. Seria absurdo concluir que comer gelados causa afogamentos
          (ou vice-versa) — ambas as variáveis aumentam quando a{' '}
          <strong>temperatura</strong> sobe: mais calor → mais pessoas a nadar
          (mais exposição a risco de afogamento) e mais pessoas a comprar
          gelados. A temperatura é a causa comum.
          <br />
          <br />
          <strong>Outro exemplo (correlação por acaso):</strong> Em bases de
          dados com milhares de variáveis, é estatisticamente garantido que
          algumas pares de variáveis completamente não relacionadas (ex.:
          "consumo de queijo per capita" e "número de doutoramentos em
          engenharia civil") apresentarão correlações elevadas apenas por
          coincidência estatística — sem qualquer mecanismo causal, comum ou
          direto, subjacente.
        </div>

        <h3 style={S.h3}>5.3 Confounding Variables</h3>
        <p style={S.p}>
          Uma <strong>variável confundidora</strong> (confounder) é uma variável
          que <strong>não é incluída no modelo</strong> mas que afeta tanto a
          variável independente (X) como a variável dependente (Y), criando uma
          associação espúria entre elas quando observadas isoladamente.
        </p>
        <ConfounderDiagram />
        <div style={S.note}>
          <strong>Consequência prática:</strong> se um modelo de previsão for
          treinado sobre dados onde existe um confounder não medido, o modelo
          pode "aprender" a correlação espúria <InlineMath math="X \sim Y" /> e
          atribuir-lhe importância preditiva — o que pode até funcionar bem para
          previsão{' '}
          <em>
            desde que o confounder continue a operar da mesma forma no futuro
          </em>
          , mas falha catastroficamente se o sistema mudar (ex.: se o objetivo
          for usar o modelo para decidir <strong>intervenções</strong> sobre
          <InlineMath math="X" />, esperando alterar <InlineMath math="Y" /> — o
          que não vai acontecer, porque a relação não é causal).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: Causalidade vs Correlação === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Causalidade vs. Correlação</h2>
        <p style={S.p}>
          "Correlação não implica causalidade" é talvez o aviso estatístico mais
          repetido — e, ainda assim, continuamente ignorado na prática.
          Correlação é <strong>necessária mas não suficiente</strong> para
          inferir causalidade. Para estabelecer que <InlineMath math="X" />{' '}
          causa <InlineMath math="Y" />, é tradicionalmente exigido que três
          critérios sejam satisfeitos:
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Critério</th>
                <th style={S.th}>O que exige</th>
                <th style={S.th}>Porque falha frequentemente</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Temporalidade',
                  'A causa tem de preceder o efeito no tempo',
                  'Em dados observacionais cross-sectional (medidos num único instante), a ordem temporal é desconhecida ou ambígua',
                ],
                [
                  'Correlação',
                  'X e Y têm de estar estatisticamente associados',
                  'Pode existir uma relação causal fraca mascarada por ruído, ou uma correlação aparente sem qualquer causa',
                ],
                [
                  'Exclusão de alternativas',
                  'Não pode existir uma explicação alternativa plausível (confounders, causalidade inversa, coincidência)',
                  'É praticamente impossível medir e controlar todas as variáveis relevantes em dados observacionais',
                ],
              ].map(([crit, req, falha]) => (
                <tr key={crit}>
                  <td style={{ ...S.td, fontWeight: 700, color }}>{crit}</td>
                  <td style={S.td}>{req}</td>
                  <td
                    style={{
                      ...S.td,
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                    }}
                  >
                    {falha}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={S.p}>
          O método mais robusto para isolar causalidade é a{' '}
          <strong>experiência controlada e randomizada</strong>
          (RCT — randomized controlled trial): atribuir aleatoriamente
          instâncias a "tratamento" e "controlo" elimina, por construção, o
          efeito de qualquer confounder (conhecido ou desconhecido), porque a
          aleatorização garante que, em média, os dois grupos são equivalentes
          em todas as outras dimensões. Infelizmente, em Data Mining trabalha-se
          frequentemente apenas com <strong>dados observacionais</strong> — onde
          X não foi manipulado experimentalmente, mas apenas observado — e nesse
          contexto, estabelecer causalidade exige técnicas mais sofisticadas
          (variáveis instrumentais, regressão discontinuity, propensity score
          matching, entre outras) que estão fora do âmbito deste módulo, mas
          cuja existência é importante reconhecer.
        </p>
        <div style={S.note}>
          <strong>Regra prática para Data Mining:</strong> a maioria dos modelos
          preditivos (classificação, regressão) <strong>não precisa</strong> de
          relações causais para serem úteis — apenas precisam de correlações
          estáveis e que persistam no futuro. O problema surge quando o modelo é
          usado para tomar
          <strong> decisões de intervenção</strong> (ex.: "se aumentarmos X, Y
          vai melhorar?") com base em correlações que podem não ser causais.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 7: Maldição da Dimensionalidade === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Maldição da Dimensionalidade</h2>
        <p style={S.p}>
          À medida que o número de features (dimensões) de um conjunto de dados
          aumenta, o volume do espaço de features cresce{' '}
          <strong>exponencialmente</strong> com o número de dimensões — mas o
          número de instâncias disponíveis cresce apenas linearmente (ou nem
          isso). O resultado é que os dados se tornam
          <strong> esparsos</strong>: cada ponto fica rodeado de um vasto
          "vazio", e noções intuitivas como "vizinhança" e "distância" deixam de
          ser informativas.
        </p>
        <div style={S.diagram}>
          <p
            style={{
              fontWeight: 700,
              marginBottom: '0.75rem',
              color: 'var(--text-primary)',
            }}
          >
            Volume e Esparsidade com a Dimensão
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ ...S.table, marginBottom: 0 }}>
              <thead>
                <tr>
                  <th style={S.th}>Dimensão d</th>
                  <th style={S.th}>
                    Pontos necessários para cobertura de 10% do espaço
                  </th>
                  <th style={S.th}>Problema</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['d = 1', '10 pontos', 'Manuseável'],
                  ['d = 2', '100 pontos', 'Fácil'],
                  ['d = 3', '1.000 pontos', 'Ainda fácil'],
                  ['d = 10', '10¹⁰ pontos', 'Computacionalmente difícil'],
                  [
                    'd = 100',
                    '10¹⁰⁰ pontos',
                    'Impossível — mais que o número estimado de átomos no universo observável (~10⁸⁰)',
                  ],
                ].map(([a, b, c]) => (
                  <tr key={a}>
                    <td
                      style={{
                        ...S.td,
                        fontWeight: 700,
                        color,
                        fontFamily: 'monospace',
                      }}
                    >
                      {a}
                    </td>
                    <td style={{ ...S.td, fontFamily: 'monospace' }}>{b}</td>
                    <td
                      style={{
                        ...S.td,
                        color:
                          c === 'Manuseável' ||
                          c === 'Fácil' ||
                          c === 'Ainda fácil'
                            ? '#4a9eed'
                            : '#4a9eed',
                      }}
                    >
                      {c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p style={S.p}>
          A ideia de "cobertura de 10% do espaço" generaliza-se através da
          fórmula: se para cobrir 10% de um espaço unidimensional precisamos de{' '}
          <InlineMath math="N" /> pontos, então para cobrir a mesma fração
          relativa de um espaço com <InlineMath math="d" /> dimensões precisamos
          de aproximadamente <InlineMath math="N^d" />
          pontos — um crescimento exponencial brutal.
        </p>
        <DimensionalityShellDiagram />
        <div style={S.note}>
          <strong>Consequências práticas para Data Mining:</strong>
          <ul
            style={{
              paddingLeft: '1.25rem',
              margin: '0.5rem 0 0',
              lineHeight: 1.8,
            }}
          >
            <li>
              Distâncias euclidianas (e métricas relacionadas) perdem
              discriminabilidade — em alta dimensão, todos os pontos tendem a
              ficar "igualmente distantes" entre si, prejudicando algoritmos
              baseados em distância (k-NN, k-means, muitos métodos de deteção de
              outliers).
            </li>
            <li>
              Modelos overfittam facilmente — com poucas instâncias
              relativamente ao número de features, é fácil encontrar combinações
              de features que "explicam" perfeitamente o conjunto de treino por
              acaso.
            </li>
            <li>
              É necessária seleção e/ou redução de features (PCA, seleção de
              variáveis, regularização) antes ou durante a modelação — tema que
              será desenvolvido no próximo módulo sobre preparação de dados.
            </li>
          </ul>
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 8: Separabilidade e Erro de Bayes === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Separabilidade e Erro de Bayes</h2>
        <p style={S.p}>
          Mesmo definindo o problema corretamente, recolhendo dados
          representativos e evitando confounders, existe um limite teórico ao
          desempenho de qualquer classificador — determinado exclusivamente pela
          forma como as classes se distribuem no espaço de features.
        </p>
        <div style={S.highlight}>
          <strong>Separabilidade:</strong> diz-se que duas classes são{' '}
          <em>linearmente separáveis</em> se existir um hiperplano que as separa
          perfeitamente no espaço de features original. Se as classes não forem
          linearmente separáveis, ou é necessário um classificador não-linear
          (árvores, redes neuronais, SVM com kernel não linear), ou é necessário
          transformar o espaço de features (feature engineering, kernel trick)
          de forma a que a separação se torne (aproximadamente) linear no novo
          espaço.
        </div>
        <p style={S.p}>
          Mas mesmo que se aplique a transformação ou o classificador
          "perfeito", se as <strong>distribuições de probabilidade</strong> das
          classes se sobrepuserem no espaço de features, nenhum classificador
          conseguirá separá-las sem erro. O erro mínimo nesse cenário chama-se{' '}
          <strong>erro de Bayes</strong>.
        </p>
        <BayesErrorDiagram />
        <div style={S.math}>
          <BlockMath math="\text{Erro de Bayes} = 1 - \mathbb{E}_x\big[\max_{c} P(c \mid x)\big]" />
        </div>
        <p style={S.p}>
          Em palavras: para cada ponto <InlineMath math="x" /> do espaço de
          features, o classificador ótimo (de Bayes) escolhe a classe{' '}
          <InlineMath math="c" /> com maior probabilidade a posteriori
          <InlineMath math="P(c \mid x)" />. Mesmo assim, se{' '}
          <InlineMath math="\max_{c} P(c \mid x) < 1" /> para alguns valores de{' '}
          <InlineMath math="x" /> (ou seja, há sempre alguma probabilidade da
          outra classe), o classificador vai errar nessas instâncias com uma
          certa frequência — esse é o erro irredutível.
        </p>
        <div style={S.note}>
          <strong>Implicação prática:</strong> ao avaliar um modelo, é
          importante ter expectativas realistas sobre o desempenho máximo
          possível. Se duas classes se sobrepõem substancialmente no espaço de
          features disponível (ex.: prever se um cliente vai cancelar um serviço
          com base apenas na idade — clientes de qualquer idade cancelam e não
          cancelam), nenhum algoritmo, por mais sofisticado, vai atingir 100% de
          accuracy. Um erro de Bayes elevado pode ser sinal de que faltam
          features informativas — é um problema de
          <strong> definição do problema e dos dados</strong>, não de escolha de
          algoritmo.
        </div>
      </div>

    </div>
  );
}
