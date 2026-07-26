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
  code: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--card-border)',
    borderRadius: 8,
    padding: '1rem',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    overflowX: 'auto',
    margin: '1rem 0',
  },
};

// === Diagram: Lloyd's algorithm iterations ===
const LloydDiagram = () => {
  const points = [
    [40, 40],
    [55, 60],
    [70, 35],
    [50, 80],
    [220, 50],
    [240, 70],
    [260, 40],
    [235, 90],
    [130, 180],
    [150, 200],
    [170, 170],
    [145, 215],
  ];
  const iter0 = { c1: [60, 50], c2: [200, 60], c3: [120, 100] };
  const iter1 = { c1: [54, 54], c2: [239, 63], c3: [149, 191] };
  const groups0 = points.map((p) => {
    const d1 = Math.hypot(p[0] - iter0.c1[0], p[1] - iter0.c1[1]);
    const d2 = Math.hypot(p[0] - iter0.c2[0], p[1] - iter0.c2[1]);
    const d3 = Math.hypot(p[0] - iter0.c3[0], p[1] - iter0.c3[1]);
    const m = Math.min(d1, d2, d3);
    return m === d1 ? 0 : m === d2 ? 1 : 2;
  });
  const groups1 = points.map((p) => {
    const d1 = Math.hypot(p[0] - iter1.c1[0], p[1] - iter1.c1[1]);
    const d2 = Math.hypot(p[0] - iter1.c2[0], p[1] - iter1.c2[1]);
    const d3 = Math.hypot(p[0] - iter1.c3[0], p[1] - iter1.c3[1]);
    const m = Math.min(d1, d2, d3);
    return m === d1 ? 0 : m === d2 ? 1 : 2;
  });
  const cols = ['#4a9eed', '#4a9eed', '#4a9eed'];

  const Panel = ({ title, centroids, groups, showLines }) => (
    <g>
      <text
        x="0"
        y="-8"
        fill="var(--text-primary)"
        fontSize="11"
        fontWeight="700"
      >
        {title}
      </text>
      <rect
        x="0"
        y="0"
        width="290"
        height="240"
        rx="8"
        fill="var(--bg-primary)"
        stroke="var(--text-secondary)"
        strokeWidth="1"
      />
      {showLines &&
        points.map((p, i) => {
          const c = centroids[['c1', 'c2', 'c3'][groups[i]]];
          return (
            <line
              key={'l' + i}
              x1={p[0]}
              y1={p[1]}
              x2={c[0]}
              y2={c[1]}
              stroke={cols[groups[i]]}
              strokeWidth="0.7"
              opacity="0.4"
            />
          );
        })}
      {points.map((p, i) => (
        <circle
          key={'p' + i}
          cx={p[0]}
          cy={p[1]}
          r="5"
          fill={cols[groups[i]]}
          opacity="0.85"
        />
      ))}
      {centroids &&
        [iter0.c1, iter0.c2, iter0.c3].map((_, i) => {
          const c = centroids[['c1', 'c2', 'c3'][i]];
          return (
            <path
              key={'x' + i}
              d={`M${c[0] - 7} ${c[1] - 7} L${c[0] + 7} ${c[1] + 7} M${c[0] - 7} ${c[1] + 7} L${c[0] + 7} ${c[1] - 7}`}
              stroke={cols[i]}
              strokeWidth="3"
            />
          );
        })}
    </g>
  );

  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Algoritmo de Lloyd — 2 Iterações Completas
      </p>
      <svg viewBox="0 0 620 270" style={{ maxWidth: '100%', height: 'auto' }}>
        <g transform="translate(10, 25)">
          <Panel
            title="Passo 1 — Atribuição (k=3, centroides iniciais)"
            centroids={iter0}
            groups={groups0}
            showLines={true}
          />
        </g>
        <g transform="translate(320, 25)">
          <Panel
            title="Passo 2 — Após atualização e nova atribuição"
            centroids={iter1}
            groups={groups1}
            showLines={true}
          />
        </g>
      </svg>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          textAlign: 'left',
        }}
      >
        No <strong>Passo 1</strong>, os três centroides iniciais () foram
        colocados arbitrariamente. Cada ponto é atribuído ao centroide mais
        próximo (linhas finas mostram a atribuição), formando uma partição
        inicial em regiões tipo <em>Voronoi</em>. No <strong>Passo 2</strong>,
        cada centroide foi recalculado como a média dos pontos do seu cluster —
        note que os centroides se deslocaram para o "centro de massa" de cada
        grupo de pontos, e a fronteira entre clusters ajustou-se ligeiramente.
        Repetindo este ciclo, os centroides estabilizam (deixam de se mover)
        tipicamente em poucas iterações.
      </p>
    </div>
  );
};

// === Diagram: Elbow curve ===
const ElbowDiagram = () => {
  const w = 480,
    h = 220,
    pad = 40;
  const ks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sse = [820, 410, 190, 110, 90, 78, 68, 60, 54, 49];
  const xToPx = (k) => pad + ((k - 1) / 9) * (w - 2 * pad);
  const yToPx = (s) => h - pad - (s / 850) * (h - 2 * pad);
  let path = '';
  ks.forEach((k, i) => {
    path +=
      (i === 0 ? 'M' : 'L') +
      xToPx(k).toFixed(1) +
      ',' +
      yToPx(sse[i]).toFixed(1) +
      ' ';
  });
  return (
    <div style={S.diagram}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        Elbow Method — SSE vs. k
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
          k (nº de clusters) →
        </text>
        <text
          x="14"
          y={h / 2}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="11"
          transform={`rotate(-90 14 ${h / 2})`}
        >
          SSE
        </text>
        <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
        {ks.map((k, i) => (
          <circle
            key={k}
            cx={xToPx(k)}
            cy={yToPx(sse[i])}
            r="3.5"
            fill={color}
          />
        ))}
        <line
          x1={xToPx(3)}
          y1={pad}
          x2={xToPx(3)}
          y2={h - pad}
          stroke="#4a9eed"
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        <text
          x={xToPx(3)}
          y={pad - 6}
          textAnchor="middle"
          fill="#4a9eed"
          fontSize="10"
          fontWeight="700"
        >
          "cotovelo" ≈ k=3
        </text>
        {ks.map((k) => (
          <text
            key={'k' + k}
            x={xToPx(k)}
            y={h - pad + 16}
            textAnchor="middle"
            fill="var(--text-secondary)"
            fontSize="9"
          >
            {k}
          </text>
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
        À medida que k aumenta, o SSE diminui monotonamente (no limite, k=n dá
        SSE=0). O "cotovelo" é o ponto onde a taxa de diminuição abranda
        drasticamente — neste exemplo, entre k=2 e k=3 o SSE cai de 410 para 190
        (-54%), mas entre k=3 e k=4 cai apenas de 190 para 110 (-42%) e a partir
        daí os ganhos marginais tornam-se pequenos. k=3 é candidato a "bom k" —
        adicionar mais clusters reduz pouco a variância intra-cluster
        relativamente ao custo de interpretação adicional.
      </p>
    </div>
  );
};

// === Diagram: k-means hard vs GMM soft ===
const HardVsSoftDiagram = () => (
  <div style={S.diagram}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '1rem',
        color: 'var(--text-primary)',
      }}
    >
      Partição Rígida (k-Means) vs. Clusters Elípticos Suaves (GMM)
    </p>
    <svg viewBox="0 0 620 260" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* k-means panel */}
      <g>
        <text
          x="150"
          y="14"
          textAnchor="middle"
          fill="var(--text-primary)"
          fontSize="11"
          fontWeight="700"
        >
          k-Means: fronteiras tipo Voronoi (rígidas)
        </text>
        <rect
          x="10"
          y="25"
          width="280"
          height="220"
          rx="8"
          fill="var(--bg-primary)"
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />
        {/* voronoi-ish dividing lines */}
        <line
          x1="150"
          y1="25"
          x2="150"
          y2="160"
          stroke="var(--text-secondary)"
          strokeWidth="1.2"
          strokeDasharray="3,2"
        />
        <line
          x1="150"
          y1="160"
          x2="290"
          y2="245"
          stroke="var(--text-secondary)"
          strokeWidth="1.2"
          strokeDasharray="3,2"
        />
        <line
          x1="150"
          y1="160"
          x2="10"
          y2="245"
          stroke="var(--text-secondary)"
          strokeWidth="1.2"
          strokeDasharray="3,2"
        />
        {/* points cluster 1 (top-left) */}
        {[
          [60, 70],
          [85, 55],
          [70, 100],
          [100, 80],
          [55, 110],
        ].map((p, i) => (
          <circle key={'a' + i} cx={p[0]} cy={p[1]} r="5" fill="#4a9eed" />
        ))}
        {/* points cluster 2 (top-right) */}
        {[
          [210, 60],
          [240, 80],
          [220, 100],
          [255, 65],
          [195, 90],
        ].map((p, i) => (
          <circle key={'b' + i} cx={p[0]} cy={p[1]} r="5" fill="#4a9eed" />
        ))}
        {/* points cluster 3 (bottom) */}
        {[
          [100, 200],
          [140, 220],
          [180, 200],
          [120, 230],
          [165, 215],
        ].map((p, i) => (
          <circle key={'c' + i} cx={p[0]} cy={p[1]} r="5" fill="#4a9eed" />
        ))}
        <text
          x="150"
          y="260"
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="9"
          fontStyle="italic"
        >
          cada ponto pertence a exatamente 1 cluster
        </text>
      </g>
      {/* GMM panel */}
      <g transform="translate(320,0)">
        <text
          x="150"
          y="14"
          textAnchor="middle"
          fill="var(--text-primary)"
          fontSize="11"
          fontWeight="700"
        >
          GMM: elipses de covariância (atribuição suave)
        </text>
        <rect
          x="10"
          y="25"
          width="280"
          height="220"
          rx="8"
          fill="var(--bg-primary)"
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />
        <ellipse
          cx="80"
          cy="80"
          rx="55"
          ry="35"
          fill="#4a9eed22"
          stroke="#4a9eed"
          strokeWidth="1.5"
          transform="rotate(-20 80 80)"
        />
        <ellipse
          cx="225"
          cy="80"
          rx="45"
          ry="30"
          fill="#4a9eed22"
          stroke="#4a9eed"
          strokeWidth="1.5"
          transform="rotate(15 225 80)"
        />
        <ellipse
          cx="145"
          cy="210"
          rx="60"
          ry="28"
          fill="#4a9eed22"
          stroke="#4a9eed"
          strokeWidth="1.5"
          transform="rotate(5 145 210)"
        />
        {[
          [60, 70],
          [85, 55],
          [70, 100],
          [100, 80],
          [55, 110],
        ].map((p, i) => (
          <circle
            key={'a' + i}
            cx={p[0]}
            cy={p[1]}
            r="5"
            fill="#4a9eed"
            opacity="0.85"
          />
        ))}
        {[
          [210, 60],
          [240, 80],
          [220, 100],
          [255, 65],
          [195, 90],
        ].map((p, i) => (
          <circle
            key={'b' + i}
            cx={p[0]}
            cy={p[1]}
            r="5"
            fill="#4a9eed"
            opacity="0.85"
          />
        ))}
        {[
          [100, 200],
          [140, 220],
          [180, 200],
          [120, 230],
          [165, 215],
        ].map((p, i) => (
          <circle
            key={'c' + i}
            cx={p[0]}
            cy={p[1]}
            r="5"
            fill="#4a9eed"
            opacity="0.85"
          />
        ))}
        {/* ambiguous point */}
        <circle
          cx="150"
          cy="65"
          r="6"
          fill="none"
          stroke="#4a9eed"
          strokeWidth="2"
        />
        <text
          x="150"
          y="260"
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="9"
          fontStyle="italic"
        >
          cada ponto tem uma probabilidade γ por cluster
        </text>
      </g>
    </svg>
    <p
      style={{
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginTop: '0.5rem',
        textAlign: 'left',
      }}
    >
      No painel da esquerda, o k-Means divide o espaço em regiões poligonais
      (Voronoi) — cada ponto pertence
      <strong> integralmente</strong> a um único cluster, e as fronteiras são
      sempre lineares/equidistantes, assumindo implicitamente clusters esféricos
      de tamanho semelhante. No painel da direita, o GMM modela cada cluster
      como uma <strong>elipse</strong> (uma Gaussiana com a sua própria
      orientação e forma de covariância) — o ponto destacado a vermelho, perto
      da fronteira entre o cluster âmbar e o azul, recebe uma
      <strong> responsabilidade</strong> γ parcial para ambos (ex.: 60% âmbar,
      35% azul, 5% verde) em vez de ser forçado a escolher um só.
    </p>
  </div>
);

// === Diagram: Spectral Clustering ===
const SpectralClusteringDiagram = () => {
  // Two crescent shapes — top crescent and bottom crescent
  // Top crescent: points arcing along the top half
  const topCrescent = [
    [110, 60], [130, 48], [150, 44], [170, 48], [190, 60], [205, 76], [198, 94],
    [178, 104], [158, 108], [138, 104], [118, 94], [108, 78],
  ];
  // Bottom crescent: points arcing along the bottom half, interleaved
  const bottomCrescent = [
    [130, 120], [150, 112], [170, 112], [190, 120], [205, 136], [200, 154],
    [180, 164], [160, 168], [140, 164], [120, 154], [115, 138],
  ];

  // k-means centroids (misplaced — splits left/right not top/bottom)
  const kmCentLeft = [128, 108];
  const kmCentRight = [185, 100];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>
        Clustering em formas não-convexas (crescentes interligados)
      </p>
      <svg viewBox="0 0 600 210" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* LEFT PANEL — k-means fails */}
        <text x="155" y="18" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">k-Means falha</text>
        <rect x="20" y="24" width="270" height="170" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />

        {/* k-means: wrong coloring — left vs right split */}
        {topCrescent.map(([cx, cy], i) => (
          <circle key={'tl' + i} cx={cx} cy={cy + 20} r="4.5"
            fill={cx < 160 ? '#4a9eed' : '#4a9eed'} opacity="0.9" />
        ))}
        {bottomCrescent.map(([cx, cy], i) => (
          <circle key={'bl' + i} cx={cx} cy={cy + 20} r="4.5"
            fill={cx < 160 ? '#4a9eed' : '#4a9eed'} opacity="0.9" />
        ))}
        {/* Misplaced centroids */}
        <circle cx={kmCentLeft[0]} cy={kmCentLeft[1] + 20} r="8" fill="#4a9eed" stroke="#fff" strokeWidth="2" />
        <text x={kmCentLeft[0]} y={kmCentLeft[1] + 24} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">C1</text>
        <circle cx={kmCentRight[0]} cy={kmCentRight[1] + 20} r="8" fill="#0284c7" stroke="#fff" strokeWidth="2" />
        <text x={kmCentRight[0]} y={kmCentRight[1] + 24} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">C2</text>
        <text x="155" y="207" textAnchor="middle" fill="#4a9eed" fontSize="9" fontStyle="italic">centróides mal posicionados — corte vertical errado</text>

        {/* RIGHT PANEL — spectral succeeds */}
        <text x="450" y="18" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">Spectral Clustering acerta</text>
        <rect x="315" y="24" width="270" height="170" rx="8" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />

        {topCrescent.map(([cx, cy], i) => (
          <circle key={'tr' + i} cx={cx + 295} cy={cy + 20} r="4.5" fill="#4a9eed" opacity="0.9" />
        ))}
        {bottomCrescent.map(([cx, cy], i) => (
          <circle key={'br' + i} cx={cx + 295} cy={cy + 20} r="4.5" fill="rgba(74,158,237,0.9)" opacity="0.9" />
        ))}
        {/* Dashed outlines showing correct clusters */}
        <ellipse cx="453" cy="93" rx="60" ry="36" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="5,3" />
        <ellipse cx="453" cy="155" rx="55" ry="28" fill="none" stroke="rgba(74,158,237,0.9)" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x="450" y="207" textAnchor="middle" fill="#4a9eed" fontSize="9" fontStyle="italic">eigenvectors do Laplaciano separam os crescentes corretamente</text>
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'left' }}>
        k-Means minimiza a distância aos centróides, assumindo clusters esféricos e compactos — faz um corte
        vertical que parte ambos os crescentes ao meio. Spectral Clustering projeta os pontos no espaço dos
        eigenvectors do Laplaciano do grafo de similaridade, onde os dois crescentes se tornam linearmente
        separáveis, e só então aplica k-Means nesse espaço transformado.
      </p>
    </div>
  );
};

export default function DM9() {
  return (
    <div style={S.page}>
      <Link to="/dm" style={S.back}>
        <ArrowLeft size={16} /> Voltar a Data Mining
      </Link>
      <div style={S.tag}>MÓDULO 05</div>
      <h1 style={S.h1}>
        k-Means, Variantes e Modelos de Mistura Gaussiana (GMM)
      </h1>

      {/* === SECTION 1: k-Means algorithm === */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Algoritmo k-Means (Algoritmo de Lloyd)</h2>
        <p style={S.p}>
          O k-Means é um algoritmo iterativo que alterna entre dois passos
          simples até convergir: atribuir cada ponto ao centroide mais próximo,
          e recalcular cada centroide como a média dos pontos atribuídos a ele.
          Esta versão clássica é conhecida como{' '}
          <strong>algoritmo de Lloyd</strong>.
        </p>
        <div style={S.diagram}>
          {[
            [
              '1',
              'Inicializar',
              'Escolher k centroides (aleatoriamente ou k-means++)',
            ],
            [
              '2',
              'Atribuir',
              'Cada ponto vai para o cluster do centroide mais próximo',
            ],
            [
              '3',
              'Atualizar',
              'Recalcular cada centroide como média dos pontos do cluster',
            ],
            [
              '4',
              'Convergência?',
              'Se os centroides não mudaram (ou mudaram menos que ε): parar',
            ],
            ['5', 'Iterar', 'Voltar ao passo 2 se não convergiu'],
          ].map(([n, t, d]) => (
            <div
              key={n}
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '0.6rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  background: color,
                  color: 'white',
                  borderRadius: '50%',
                  width: 26,
                  height: 26,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  flexShrink: 0,
                }}
              >
                {n}
              </div>
              <div>
                <span
                  style={{
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                  }}
                >
                  {t}:{' '}
                </span>
                <span
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                  }}
                >
                  {d}
                </span>
              </div>
            </div>
          ))}
        </div>
        <strong>Objetivo:</strong> Minimizar SSE (Sum of Squared Errors)
        <div style={S.math}>
          <BlockMath math="J = \sum_{k=1}^{K} \sum_{x_i \in C_k} \|x_i - \mu_k\|^2" />
        </div>
        k-Means garante convergência (o SSE nunca aumenta de iteração para
        iteração) mas pode ficar em mínimos locais — é uma heurística, não uma
        solução global ótima.
        <LloydDiagram />
        <p style={S.p}>
          Cada um dos dois passos pode ser visto como uma fase de otimização: o
          passo de <strong>atribuição</strong>
          minimiza o SSE em relação às atribuições (mantendo os centroides
          fixos) — é exatamente o particionamento de Voronoi induzido pelos
          centroides atuais. O passo de <strong>atualização</strong>
          minimiza o SSE em relação aos centroides (mantendo as atribuições
          fixas) — e a média aritmética é, precisamente, o ponto que minimiza a
          soma dos quadrados das distâncias a um conjunto de pontos. Como cada
          passo nunca aumenta o SSE, e o SSE é limitado inferiormente por zero,
          o algoritmo converge garantidamente — mas para um{' '}
          <em>mínimo local</em>, que depende da inicialização.
        </p>
        <div style={S.note}>
          <strong>Complexidade:</strong> O(n · k · d · i), onde n é o nº de
          pontos, k o nº de clusters, d a dimensionalidade, e i o nº de
          iterações até convergência — extremamente eficiente, o que explica a
          popularidade do k-means mesmo em datasets muito grandes.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 2: Spectral Clustering === */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Spectral Clustering</h2>
        <p style={S.p}>
          k-Means e os algoritmos hierárquicos assumem que os clusters são <strong>convexos e compactos</strong>
          — regiões aproximadamente esféricas no espaço de features. Esta assunção falha completamente quando
          os dados formam estruturas não-convexas: dois crescentes interligados, dois anéis concêntricos,
          espirais interligadas. <strong>Spectral Clustering</strong> resolve este problema usando a
          eigenstrutura do grafo de similaridade dos dados para encontrar clusters de forma arbitrária, sem
          assumir qualquer forma geométrica prévia.
        </p>
        <div style={S.highlight}>
          <strong>Intuição central:</strong> em vez de operar diretamente no espaço original das features,
          Spectral Clustering constrói um grafo de similaridade entre os pontos, calcula os eigenvectors do
          Laplaciano desse grafo (que capturam a conectividade global do grafo), e aplica k-Means
          <em> nesse espaço espectral</em> — onde os clusters, mesmo não-convexos no espaço original, tornam-se
          linearmente separáveis.
        </div>

        <h3 style={S.h3}>Algoritmo passo a passo</h3>
        <p style={S.p}><strong>Passo 1 — Construir a similarity matrix W</strong> usando o kernel Gaussiano:</p>
        <div style={S.math}>
          <BlockMath math="W_{ij} = \exp\!\left(-\frac{\|x_i - x_j\|^2}{2\sigma^2}\right)" />
        </div>
        <p style={S.p}>
          O parâmetro <InlineMath math="\sigma" /> (bandwidth) controla o raio de vizinhança — pontos mais
          distantes que ~<InlineMath math="2\sigma" /> têm peso próximo de zero e são tratados como
          desconectados no grafo. <InlineMath math="W" /> é simétrica e não-negativa.
        </p>

        <p style={S.p}><strong>Passo 2 — Calcular o Degree matrix D</strong>: matriz diagonal onde cada
          entrada é a soma das similaridades da linha correspondente:</p>
        <div style={S.math}>
          <BlockMath math="D_{ii} = \sum_{j=1}^{n} W_{ij}" />
        </div>

        <p style={S.p}><strong>Passo 3 — Calcular o Laplaciano do grafo</strong>. Existem duas variantes principais:</p>
        <div style={S.math}>
          <BlockMath math="L = D - W \quad \text{(não normalizado)}" />
          <BlockMath math="L_{\mathrm{sym}} = D^{-1/2}\, L\, D^{-1/2} = I - D^{-1/2} W D^{-1/2} \quad \text{(normalizado)}" />
        </div>
        <p style={S.p}>
          O Laplaciano normalizado <InlineMath math="L_{\mathrm{sym}}" /> é recomendado quando os clusters
          têm tamanhos desiguais, pois compensa diferenças de grau entre nós.
        </p>

        <p style={S.p}><strong>Passo 4 — Calcular os k menores eigenvectors de L</strong> (correspondentes
          aos k menores eigenvalues). Estes eigenvectors formam a matriz <InlineMath math="U \in \mathbb{R}^{n \times k}" />.</p>

        <p style={S.p}><strong>Passo 5 — Embedding espectral</strong>: cada ponto <InlineMath math="x_i" /> é
          agora representado pela linha <InlineMath math="i" /> de <InlineMath math="U" /> — um vetor em
          <InlineMath math="\mathbb{R}^k" />. No espaço espectral, pontos fortemente conectados no grafo
          ficam próximos, independentemente da sua forma no espaço original.</p>

        <p style={S.p}><strong>Passo 6 — Aplicar k-Means nas linhas de U</strong>. No espaço espectral
          os clusters tornam-se linearmente separáveis — k-Means funciona corretamente mesmo que no espaço
          original as formas fossem não-convexas.</p>

        <SpectralClusteringDiagram />

        <h3 style={S.h3}>Intuição geométrica: o Laplaciano e a Graph Cut</h3>
        <p style={S.p}>
          O Laplaciano do grafo captura a <strong>conectividade</strong> entre os pontos. Os eigenvectors
          correspondentes aos menores eigenvalues codificam a partição do grafo que minimiza o
          <em> normalized cut</em> — isto é, o "custo" de cortar as arestas que ligam os dois grupos,
          normalizado pelo volume de cada grupo. Clusters com poucas ligações entre eles (bem separados no
          grafo) correspondem a partições com normalized cut baixo, e são exactamente o que os primeiros
          eigenvectors revelam.
        </p>
        <div style={S.note}>
          Spectral clustering relaciona-se com a Graph Cut — os eigenvectors do Laplaciano minimizam o
          normalized cut entre clusters. É a base conceptual de algoritmos de community detection em redes
          sociais (ex.: modularity-based clustering em grafos de interação social).
        </div>

        <h3 style={S.h3}>Hiperparâmetros e escolhas práticas</h3>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Hiperparâmetro</th><th style={S.th}>Papel</th><th style={S.th}>Como escolher</th></tr></thead>
          <tbody>
            {[
              ['σ (bandwidth)', 'Raio efetivo de vizinhança no kernel Gaussiano — controla quais pares de pontos se consideram "vizinhos" no grafo', 'Heurística: σ = mediana das distâncias aos k vizinhos mais próximos; ou varrer valores e inspecionar a conectividade do grafo'],
              ['k (nº de clusters)', 'Número de eigenvectors retidos = número de clusters esperados', 'O eigengap heuristic: escolher k onde o salto entre eigenvalues consecutivos é maior'],
              ['Laplaciano', 'Normalizado (L_sym) vs não-normalizado (L)', 'Normalizado recomendado para clusters de tamanhos diferentes; não-normalizado funciona bem quando os clusters têm tamanhos semelhantes'],
            ].map(([a, b, c]) => (
              <tr key={a}><td style={{ ...S.td, fontWeight: 700, color }}>{a}</td><td style={S.td}>{b}</td><td style={{ ...S.td, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{c}</td></tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Complexidade e escalabilidade</h3>
        <p style={S.p}>
          O passo mais custoso é a eigendecomposição do Laplaciano: <InlineMath math="\mathcal{O}(n^3)" />
          no caso geral, onde <InlineMath math="n" /> é o número de pontos. Isto torna Spectral Clustering
          impraticável para datasets grandes (n &gt; ~10 000 pontos). Para grandes escalas, usa-se a
          <strong> aproximação de Nyström</strong> — que estima os eigenvectors usando apenas uma amostra
          aleatória dos pontos — ou variantes baseadas em grafos esparsos (<em>k-NN graph</em> em vez da
          similarity matrix densa).
        </p>

        <div style={S.highlight}>
          <strong>Spectral Clustering no mapa de algoritmos:</strong> Spectral Clustering preenche o gap
          entre os métodos particionais (k-Means — esféricos, convexos) e os baseados em densidade (DBSCAN
          — formas arbitrárias via densidade local). Usa a geometria <em>global</em> do grafo de
          similaridade — não apenas vizinhanças locais — o que lhe permite capturar estruturas de
          conectividade que DBSCAN perde quando a densidade é variável e que k-Means perde por assumir
          convexidade.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: k-means++ === */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Problema da Inicialização e k-Means++</h2>
        <p style={S.p}>
          A solução final do k-Means depende fortemente da inicialização —
          centroides iniciais mal escolhidos (por exemplo, dois centroides muito
          próximos um do outro) levam a mínimos locais maus, onde um cluster
          "verdadeiro" pode ficar dividido entre dois centroides ou dois
          clusters distintos podem ficar fundidos num só.
        </p>
        <div style={S.diagram}>
          <p
            style={{
              fontWeight: 700,
              marginBottom: '0.75rem',
              color: 'var(--text-primary)',
            }}
          >
            k-Means++ — Inicialização Inteligente
          </p>
          {[
            [
              '1',
              'Escolher o 1º centroide aleatoriamente (uniformemente entre os pontos)',
            ],
            [
              '2',
              'Para cada ponto x, calcular D(x) = distância ao centroide mais próximo já escolhido',
            ],
            [
              '3',
              'Escolher o próximo centroide com probabilidade proporcional a D(x)²',
            ],
            ['4', 'Repetir passos 2-3 até ter k centroides'],
            ['5', 'Continuar com o algoritmo k-Means normal'],
          ].map(([n, d]) => (
            <div
              key={n}
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '0.5rem',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  background: color,
                  color: 'white',
                  borderRadius: '50%',
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  flexShrink: 0,
                }}
              >
                {n}
              </div>
              <span
                style={{ color: 'var(--text-primary)', fontSize: '0.88rem' }}
              >
                {d}
              </span>
            </div>
          ))}
        </div>
        <p style={S.p}>
          A ideia central é que pontos <strong>longe</strong> dos centroides já
          escolhidos são mais propensos a pertencer a um cluster ainda não
          "representado" — por isso recebem maior probabilidade de serem
          escolhidos como próximo centroide, mas não com certeza absoluta (o que
          evitaria escolher sempre o ponto mais extremo/outlier).
        </p>
        <div style={S.note}>
          k-Means++ tem garantia teórica de O(log k) vezes o SSE ótimo esperado
          — muito melhor que a inicialização puramente aleatória. É o padrão em
          sklearn (<code>init='k-means++'</code>) e na maioria das
          implementações modernas, geralmente combinado com múltiplas
          reinicializações (<code>n_init</code>).
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 3: Choosing k === */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Escolha de k</h2>
        <p style={S.p}>
          k-Means exige que o número de clusters k seja definido{' '}
          <em>a priori</em> — mas raramente sabemos esse valor. Vários
          critérios, internos (sem labels verdadeiros) ajudam a escolher k de
          forma sistemática.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Como funciona</th>
              <th style={S.th}>Limitação</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Elbow Method',
                'Plotar SSE vs. k; procurar o "cotovelo" (ponto de inflexão)',
                'Subjetivo; cotovelo pode não ser claro',
              ],
              [
                'Silhouette Score',
                'Mede coesão intra-cluster vs. separação inter-cluster ∈ [-1,1]',
                'Computacionalmente O(n²)',
              ],
              [
                'Davies-Bouldin Index',
                'Rácio de dispersão intra-cluster / separação inter-cluster',
                'Menor é melhor; assume clusters convexos',
              ],
              [
                'Gap Statistic',
                'Compara SSE com SSE de dados uniformes aleatórios',
                'Mais robusto mas computacionalmente pesado',
              ],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 700, color }}>{a}</td>
                <td style={S.td}>{b}</td>
                <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>
                  {c}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ElbowDiagram />

        <h3 style={S.h3}>Silhouette Coefficient</h3>
        <p style={S.p}>
          Para cada ponto i, o coeficiente de silhueta combina duas distâncias
          médias: a(i) (coesão — distância média aos outros pontos do{' '}
          <strong>mesmo</strong> cluster) e b(i) (separação — distância média ao
          cluster vizinho mais próximo, ou seja, o menor entre as médias de
          distância aos pontos de cada outro cluster).
        </p>
        <div style={S.math}>
          <BlockMath math="s(i) = \frac{b(i) - a(i)}{\max\big(a(i), b(i)\big)}" />
        </div>
        <p style={S.p}>
          s(i) ∈ [-1, 1]. Um valor próximo de <strong>+1</strong> significa que
          o ponto está muito mais próximo do seu próprio cluster do que de
          qualquer outro (bem agrupado); próximo de <strong>0</strong> significa
          que o ponto está na fronteira entre dois clusters; próximo de{' '}
          <strong>-1</strong> significa que o ponto provavelmente foi atribuído
          ao cluster errado. O Silhouette Score global é a média de s(i) sobre
          todos os pontos, e calcula-se para diferentes valores de k, escolhendo
          o k que maximiza a média.
        </p>

        <h3 style={S.h3}>Davies-Bouldin Index</h3>
        <p style={S.p}>
          O Davies-Bouldin Index (DBI) compara, para cada par de clusters i e j,
          a soma das suas dispersões internas com a distância entre os seus
          centroides:
        </p>
        <div style={S.math}>
          <BlockMath math="DB = \frac{1}{K} \sum_{i=1}^{K} \max_{j \neq i} \left( \frac{\sigma_i + \sigma_j}{d(\mu_i, \mu_j)} \right)" />
        </div>
        <p style={S.p}>
          onde σ<sub>i</sub> é a dispersão média do cluster i (distância média
          dos pontos ao centroide μ<sub>i</sub>) e d(μ<sub>i</sub>, μ
          <sub>j</sub>) é a distância entre os centroides dos clusters i e j.
          Para cada cluster, tomamos o "pior caso" (o vizinho j que maximiza o
          rácio — ou seja, o vizinho mais problemático), e depois fazemos a
          média sobre todos os clusters.{' '}
          <strong>Quanto menor o DBI, melhor</strong> — clusters compactos (σ
          pequeno) e bem separados (d grande) minimizam o rácio.
        </p>
        <div style={S.highlight}>
          <strong>Resumo prático:</strong> Elbow é rápido e visual mas
          subjetivo; Silhouette é mais rigoroso mas caro em datasets grandes
          (O(n²)); Davies-Bouldin é rápido de calcular (não precisa de todas as
          distâncias par-a-par) e útil para comparar várias execuções
          automaticamente. Na prática, usa-se uma combinação — nenhum destes
          índices é perfeito, especialmente se os clusters reais não forem
          convexos/esféricos.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 4: k-medoids === */}
      <div style={S.section}>
        <h2 style={S.h2}>5. k-Medoids e o Algoritmo PAM</h2>
        <p style={S.p}>
          O k-Means usa a <strong>média</strong> dos pontos do cluster como
          centroide — mas a média é muito sensível a outliers (um único ponto
          extremo pode deslocar significativamente o centroide) e só faz sentido
          para espaços onde a média está bem definida (ex.: espaços vetoriais
          com distância Euclidiana). O <strong>k-medoids</strong> resolve ambos
          os problemas: em vez de calcular uma média, escolhe como centro de
          cada cluster um <strong>medoid</strong> — uma observação <em>real</em>{' '}
          do dataset que minimiza a soma das distâncias aos outros pontos do
          cluster.
        </p>
        <h3 style={S.h3}>PAM — Partitioning Around Medoids</h3>
        <p style={S.p}>
          O algoritmo clássico para k-medoids é o <strong>PAM</strong>{' '}
          (Partitioning Around Medoids), que tem duas fases:
        </p>
        <div style={S.diagram}>
          {[
            [
              '1',
              'BUILD',
              'Selecionar k medoids iniciais de forma greedy: escolher iterativamente o ponto que mais reduz o custo total se for adicionado como medoid',
            ],
            [
              '2',
              'SWAP',
              'Para cada medoid m e cada ponto não-medoid o, testar a troca m ↔ o; se a troca reduzir o custo total (soma das distâncias aos medoids mais próximos), efetuá-la',
            ],
            [
              '3',
              'Repetir',
              'Repetir o passo SWAP até nenhuma troca reduzir o custo (convergência)',
            ],
          ].map(([n, t, d]) => (
            <div
              key={n}
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '0.6rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  background: color,
                  color: 'white',
                  borderRadius: '50%',
                  width: 26,
                  height: 26,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  flexShrink: 0,
                }}
              >
                {n}
              </div>
              <div>
                <span
                  style={{
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                  }}
                >
                  {t}:{' '}
                </span>
                <span
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                  }}
                >
                  {d}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p style={S.p}>
          Cada avaliação de troca no PAM exige recalcular o custo de atribuição
          de todos os pontos — isto torna o PAM{' '}
          <InlineMath math="O(k(n-k)^2)" /> por iteração, muito mais caro que o
          k-Means. Variantes como
          <strong> CLARA</strong> (aplica PAM a amostras) e{' '}
          <strong>CLARANS</strong> (busca aleatória sobre o espaço de soluções)
          tornam o k-medoids viável para datasets maiores.
        </p>
        <h3 style={S.h3}>Quando preferir k-medoids a k-means?</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Cenário</th>
              <th style={S.th}>Porquê k-medoids</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Distâncias não-Euclidianas (ex.: distância de Manhattan, Gower para dados mistos, distância de edição entre strings)',
                'A média não está bem definida nestes espaços — k-means requer espaço vetorial Euclidiano para que a "média" minimize o SSE; medoids funcionam com qualquer métrica de distância',
              ],
              [
                'Dados com outliers significativos',
                'Medoids são observações reais, robustas a outliers extremos — um outlier não "arrasta" o centro como acontece com a média',
              ],
              [
                'Interpretabilidade',
                'O centro de cada cluster é um exemplo real e interpretável (ex.: "o cliente típico deste segmento é o cliente #4231"), não um ponto sintético',
              ],
              [
                'Dados categóricos ou mistos',
                'Combinado com métricas de distância apropriadas (ex.: Gower), k-medoids lida naturalmente com features não numéricas',
              ],
            ].map(([a, b]) => (
              <tr key={a}>
                <td style={{ ...S.td, fontWeight: 600 }}>{a}</td>
                <td style={{ ...S.td, color, fontSize: '0.88rem' }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.note}>
          Trade-off: k-medoids é mais robusto e mais flexível em termos de
          métrica de distância, mas computacionalmente muito mais caro que
          k-means. Para datasets grandes e Euclidianos sem outliers severos,
          k-means (ou variantes escaláveis como Mini-Batch k-Means) continua a
          ser preferível.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 5: Limitations and motivation for GMM === */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Limitações do k-Means e a Motivação para GMM</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Limitação do k-Means</th>
              <th style={S.th}>Variante / Solução</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Sensível a outliers (usa médias)',
                'k-medoids (PAM): usa as observações reais como centros',
              ],
              [
                'Assume clusters esféricos e de tamanho/densidade semelhante',
                'GMM (Gaussian Mixture Models): clusters elipsoidais, com formas e densidades diferentes',
              ],
              [
                'Atribuição rígida (hard assignment) — um ponto pertence a 100% de um cluster ou 0%',
                'GMM: atribuição suave (soft assignment) via probabilidades posteriores',
              ],
              [
                'Requer k a priori',
                'DBSCAN, HDBSCAN: número de clusters determinado automaticamente',
              ],
              [
                'Mínimos locais',
                'k-Means++, múltiplas reinicializações, k-Means||',
              ],
              [
                'Não funciona bem com clusters de formas irregulares ou alongadas',
                'GMM (até certo ponto, via covariância), DBSCAN, Spectral Clustering',
              ],
            ].map(([a, b]) => (
              <tr key={a}>
                <td style={{ ...S.td, color: '#4a9eed', fontSize: '0.85rem' }}>
                  {a}
                </td>
                <td style={{ ...S.td, color, fontWeight: 600 }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.p}>
          Duas limitações do k-means destacam-se como motivação central para os{' '}
          <strong>Modelos de Mistura Gaussiana</strong>: (1) a assunção
          implícita de que todos os clusters são <strong>esféricos</strong> e de
          tamanho/variância semelhante — porque a distância Euclidiana ao
          centroide trata todas as direções igualmente; e (2) a{' '}
          <strong>atribuição rígida</strong> — cada ponto pertence inteiramente
          a um único cluster, mesmo que esteja quase equidistante de dois
          centroides, perdendo informação sobre a incerteza dessa atribuição.
        </p>
        <HardVsSoftDiagram />
      </div>

      <hr style={S.divider} />

      {/* === SECTION 6: GMM generative model === */}
      <div style={S.section}>
        <h2 style={S.h2}>7. O Modelo Generativo: Mistura de Gaussianas</h2>
        <p style={S.p}>
          Um <strong>Gaussian Mixture Model (GMM)</strong> assume que os dados
          foram gerados por um processo em duas etapas: primeiro, escolhe-se
          aleatoriamente um "componente" k (um cluster) com probabilidade π
          <sub>k</sub> (o <strong>peso de mistura</strong>, ou{' '}
          <em>mixing weight</em>); depois, gera-se uma observação x a partir da
          distribuição Gaussiana desse componente, N(μ<sub>k</sub>, Σ
          <sub>k</sub>), com média μ<sub>k</sub> e matriz de covariância Σ
          <sub>k</sub>.
        </p>
        <div style={S.math}>
          <BlockMath math="p(x) = \sum_{k=1}^{K} \pi_k \, \mathcal{N}(x \mid \mu_k, \Sigma_k), \qquad \sum_{k=1}^{K} \pi_k = 1, \quad \pi_k \geq 0" />
        </div>
        <p style={S.p}>onde a densidade Gaussiana multivariada é:</p>
        <div style={S.math}>
          <BlockMath math="\mathcal{N}(x \mid \mu_k, \Sigma_k) = \frac{1}{(2\pi)^{d/2} |\Sigma_k|^{1/2}} \exp\left( -\frac{1}{2} (x-\mu_k)^T \Sigma_k^{-1} (x-\mu_k) \right)" />
        </div>
        <p style={S.p}>
          A densidade total p(x) é, portanto, uma{' '}
          <strong>combinação convexa</strong> (soma ponderada com pesos que
          somam 1) de K densidades Gaussianas — cada uma "responsável" por uma
          região do espaço de features. O k-means pode ser visto como um{' '}
          <strong>caso especial</strong> de GMM: se forçarmos todas as
          covariâncias Σ<sub>k</sub> a serem iguais a uma matriz esférica εI e
          fizermos ε → 0, o passo E do EM (descrito a seguir) reduz-se à
          atribuição rígida ao componente mais próximo, e o passo M reduz-se ao
          cálculo da média — exatamente o algoritmo de Lloyd.
        </p>
        <div style={S.note}>
          A diferença essencial: enquanto o k-means atribui pontos a clusters de
          forma <strong>determinística</strong>
          (com base na distância ao centroide), o GMM atribui pontos de forma{' '}
          <strong>probabilística</strong> — cada ponto tem uma probabilidade
          (responsabilidade) de pertencer a cada cluster, refletindo a incerteza
          inerente quando os clusters se sobrepõem.
        </div>
      </div>

      <hr style={S.divider} />

      {/* === SECTION 9: Model selection BIC/AIC === */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Seleção do Número de Componentes: BIC e AIC</h2>
        <p style={S.p}>
          Tal como o k-means precisa de um k pré-definido, o GMM precisa de um
          número de componentes K. Mas como o GMM é um modelo probabilístico,
          podemos usar critérios baseados em{' '}
          <strong>verosimilhança penalizada pela complexidade do modelo</strong>{' '}
          — o <strong>BIC</strong> (Bayesian Information Criterion) e o
          <strong> AIC</strong> (Akaike Information Criterion):
        </p>
        <div style={S.math}>
          <BlockMath math="BIC = -2 \ln \hat{L} + p \ln N" />
        </div>
        <div style={S.math}>
          <BlockMath math="AIC = -2 \ln \hat{L} + 2p" />
        </div>
        <p style={S.p}>
          onde <InlineMath math="\hat{L}" /> é a log-likelihood máxima alcançada
          pelo modelo (após EM convergir), p é o número total de parâmetros
          livres do modelo (depende de K e do tipo de covariância escolhido), e
          N é o número de observações.{' '}
          <strong>Em ambos os casos, menor é melhor</strong> — o primeiro termo
          recompensa modelos que explicam melhor os dados (maior{' '}
          <InlineMath math="\hat{L}" />
          ), enquanto o segundo termo <strong>penaliza</strong> modelos com mais
          parâmetros, evitando que escolhamos sempre o K maior possível (que
          sempre aumenta <InlineMath math="\hat{L}" />, tal como aumentar k
          sempre reduz o SSE no k-means).
        </p>
        <p style={S.p}>
          A diferença entre BIC e AIC está na força da penalização: o BIC
          penaliza mais fortemente modelos complexos quando N é grande (o termo
          p·ln(N) cresce com N), tendendo a escolher modelos mais parsimoniosos;
          o AIC usa uma penalização fixa (2p), tendendo a favorecer modelos um
          pouco mais complexos. Na prática, calcula-se BIC (ou AIC) para vários
          valores de K e escolhe-se o K que minimiza o critério — analogamente a
          plotar SSE vs. k no Elbow Method, mas aqui procura-se um{' '}
          <strong>mínimo</strong>, não um cotovelo.
        </p>
        <div style={S.highlight}>
          <strong>BIC/AIC vs. Elbow/Silhouette:</strong> Elbow e Silhouette são
          heurísticas baseadas em distâncias geométricas (SSE, distâncias
          intra/inter-cluster) e aplicam-se a qualquer algoritmo de clustering
          baseado em distância (k-means, k-medoids). BIC e AIC são fundamentados
          na teoria de inferência estatística (verosimilhança) e aplicam-se a{' '}
          <strong>qualquer modelo probabilístico</strong> — não só GMM. Para
          GMM, BIC é geralmente o critério preferido por ter uma justificação
          teórica mais sólida (aproxima a evidência do modelo, no sentido
          Bayesiano) e por penalizar mais a complexidade, reduzindo o risco de
          overfitting com covariâncias <code>full</code>.
        </div>
      </div>

    </div>
  );
}
