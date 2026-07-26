import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 900, margin: '0 auto', padding: '0 1rem 4rem' },
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
    color: '#4a9eed',
    border: '1.5px solid #4a9eed',
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
    color: '#4a9eed',
    borderLeft: '3px solid #4a9eed',
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
    background: 'rgba(74,158,237,0.06)',
    borderLeft: '3px solid #4a9eed',
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
  ul: {
    paddingLeft: '1.4rem',
    color: 'var(--text-primary)',
    lineHeight: 1.9,
    fontSize: '1rem',
  },
  li: { marginBottom: '0.4rem' },
  math: {
    background: 'var(--bg-secondary)',
    borderRadius: 10,
    padding: '1.25rem',
    textAlign: 'center',
    margin: '1.5rem 0',
    overflowX: 'auto',
  },
};

const InnovationDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '0.75rem',
        color: 'var(--text-primary)',
      }}
    >
      Historical Markings — Número de Inovação e Crossover por Alinhamento
    </p>
    <svg viewBox="0 0 580 180" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker
          id="arr6"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
        <marker
          id="arr6b"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
        <marker
          id="arr6c"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a9eed" />
        </marker>
      </defs>

      <text
        x="100"
        y="18"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="8.5"
        fontWeight="700"
      >
        Genoma A (mais fit)
      </text>
      {[
        { x: 10, label: '#1', color: '#4a9eed', match: true },
        { x: 68, label: '#2', color: '#4a9eed', match: true },
        { x: 126, label: '#3', color: '#4a9eed', match: true },
        { x: 184, label: '#4', color: '#4a9eed', match: false, excess: true },
        { x: 242, label: '#5', color: '#4a9eed', match: false, excess: true },
      ].map(({ x, label, color, match, excess }) => (
        <g key={x}>
          <rect
            x={x}
            y={25}
            width={52}
            height={28}
            rx="4"
            fill={match ? '#4a9eed15' : '#4a9eed08'}
            stroke={color}
            strokeWidth={match ? 2 : 1}
            strokeDasharray={excess ? '3,2' : undefined}
          />
          <text
            x={x + 26}
            y={43}
            textAnchor="middle"
            fill={color}
            fontSize="9"
            fontWeight="700"
          >
            {label}
          </text>
        </g>
      ))}
      <text x="310" y="39" fill="var(--text-secondary)" fontSize="7.5">
        ← disjoint/excess (só em A)
      </text>

      <text
        x="165"
        y="80"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="8.5"
        fontWeight="700"
      >
        Genoma B
      </text>
      {[
        { x: 10, label: '#1', color: '#4a9eed', match: true },
        { x: 68, label: '#2', color: '#4a9eed', match: true },
        { x: 126, label: '#3', color: '#4a9eed', match: true },
        { x: 184, label: '#6', color: '#4a9eed', match: false, excess: true },
        { x: 242, label: '#7', color: '#4a9eed', match: false, excess: true },
        { x: 300, label: '#8', color: '#4a9eed', match: false, excess: true },
      ].map(({ x, label, color, match, excess }) => (
        <g key={x}>
          <rect
            x={x}
            y={87}
            width={52}
            height={28}
            rx="4"
            fill={match ? '#0369a115' : '#0369a108'}
            stroke={color}
            strokeWidth={match ? 2 : 1}
            strokeDasharray={excess ? '3,2' : undefined}
          />
          <text
            x={x + 26}
            y={105}
            textAnchor="middle"
            fill={color}
            fontSize="9"
            fontWeight="700"
          >
            {label}
          </text>
        </g>
      ))}
      <text x="390" y="101" fill="var(--text-secondary)" fontSize="7.5">
        ← disjoint/excess (só em B)
      </text>

      <rect
        x="10"
        y="130"
        width="560"
        height="42"
        rx="6"
        fill="rgba(74,158,237,0.10)"
        stroke="#4a9eed"
        strokeWidth="1.5"
      />
      <text
        x="290"
        y="144"
        textAnchor="middle"
        fill="#fff"
        fontSize="8.5"
        fontWeight="700"
      >
        Regras do Crossover NEAT
      </text>
      <text x="20" y="155" fill="#fff" fontSize="7.5">
        ✓ Genes matching (#1,#2,#3): herdados aleatoriamente de qualquer pai
      </text>
      <text x="20" y="165" fill="#fff" fontSize="7.5">
        ✓ Disjoint/excess do pai mais fit: SEMPRE herdados | do menos fit:
        descartados
      </text>
    </svg>
  </div>
);

/* ── Crossover Example ── */
const CrossoverExample = () => {
  /* Genes: id, weightA (null=absent), weightB (null=absent) */
  const genes = [
    { id: '#1', wA: 0.5, wB: 0.9 },
    { id: '#2', wA: -0.3, wB: 0.1 },
    { id: '#3', wA: 0.8, wB: -0.6 },
    { id: '#4', wA: 0.2, wB: null }, // excess A
    { id: '#5', wA: -0.7, wB: null }, // excess A
    { id: '#6', wA: null, wB: 0.4 }, // excess B
    { id: '#7', wA: null, wB: -0.1 }, // excess B
  ];
  /* offspring: matching → random choice shown; excess of fitter (A) → always kept */
  const offspring = [
    { id: '#1', w: 0.9, from: 'B', match: true },
    { id: '#2', w: -0.3, from: 'A', match: true },
    { id: '#3', w: -0.6, from: 'B', match: true },
    { id: '#4', w: 0.2, from: 'A', match: false, excess: true },
    { id: '#5', w: -0.7, from: 'A', match: false, excess: true },
  ];

  const GW = 66,
    GH = 36,
    GAP = 6;
  const totalW = genes.length * (GW + GAP) - GAP;
  const startX = (660 - totalW) / 2;

  const gx = (i) => startX + i * (GW + GAP);

  return (
    <div style={{ ...S.diagram, textAlign: 'center' }}>
      <p
        style={{
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: 'var(--text-primary)',
        }}
      >
        Crossover NEAT — Exemplo Passo a Passo
      </p>
      <svg viewBox="0 0 660 290" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* ── PARENT A (mais fit) ── */}
        <text x="10" y="22" fill="#4a9eed" fontSize="9" fontWeight="700">
          Pai A (mais fit)
        </text>
        {genes.map(
          (g, i) =>
            g.wA !== null && (
              <g key={'a' + g.id}>
                <rect
                  x={gx(i)}
                  y={28}
                  width={GW}
                  height={GH}
                  rx="5"
                  fill="rgba(74,158,237,0.10)"
                  stroke="#4a9eed"
                  strokeWidth="1.5"
                />
                <text
                  x={gx(i) + GW / 2}
                  y={41}
                  textAnchor="middle"
                  fill="#4a9eed"
                  fontSize="8"
                  fontWeight="700"
                >
                  {g.id}
                </text>
                <text
                  x={gx(i) + GW / 2}
                  y={56}
                  textAnchor="middle"
                  fill="#4a9eed"
                  fontSize="8"
                >
                  w={g.wA > 0 ? '+' : ''}
                  {g.wA}
                </text>
              </g>
            ),
        )}

        {/* ── PARENT B ── */}
        <text x="10" y="96" fill="#4a9eed" fontSize="9" fontWeight="700">
          Pai B
        </text>
        {genes.map(
          (g, i) =>
            g.wB !== null && (
              <g key={'b' + g.id}>
                <rect
                  x={gx(i)}
                  y={102}
                  width={GW}
                  height={GH}
                  rx="5"
                  fill="rgba(74,158,237,0.10)"
                  stroke="#4a9eed"
                  strokeWidth="1.5"
                />
                <text
                  x={gx(i) + GW / 2}
                  y={115}
                  textAnchor="middle"
                  fill="#4a9eed"
                  fontSize="8"
                  fontWeight="700"
                >
                  {g.id}
                </text>
                <text
                  x={gx(i) + GW / 2}
                  y={130}
                  textAnchor="middle"
                  fill="#4a9eed"
                  fontSize="8"
                >
                  w={g.wB > 0 ? '+' : ''}
                  {g.wB}
                </text>
              </g>
            ),
        )}

        {/* ── ALIGNMENT LINES for matching genes ── */}
        {genes.map(
          (g, i) =>
            g.wA !== null &&
            g.wB !== null && (
              <line
                key={'l' + g.id}
                x1={gx(i) + GW / 2}
                y1={64}
                x2={gx(i) + GW / 2}
                y2={102}
                stroke="#4a9eed"
                strokeWidth="1.2"
                strokeDasharray="3,2"
              />
            ),
        )}

        {/* ── LEGEND between parents and offspring ── */}
        <rect
          x="10"
          y="148"
          width="638"
          height="30"
          rx="6"
          fill="var(--bg-primary)"
          stroke="var(--text-secondary)"
          strokeWidth="1"
        />
        <text x="20" y="160" fill="#4a9eed" fontSize="8">
          ▌ Matching (#1,#2,#3): herdar aleatoriamente de qualquer pai
        </text>
        <text x="20" y="172" fill="#4a9eed" fontSize="8">
          ▌ Excess/Disjoint do pai mais fit (#4,#5): SEMPRE herdados | do menos
          fit (#6,#7): descartados
        </text>

        {/* ── OFFSPRING ── */}
        <text x="10" y="202" fill="#4a9eed" fontSize="9" fontWeight="700">
          Filho
        </text>
        {offspring.map((g, i) => (
          <g key={'o' + g.id}>
            <rect
              x={gx(i)}
              y={208}
              width={GW}
              height={GH}
              rx="5"
              fill={g.match ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'}
              stroke={g.match ? '#4a9eed' : '#4a9eed'}
              strokeWidth={g.excess ? 1.5 : 2}
              strokeDasharray={g.excess ? '4,2' : undefined}
            />
            <text
              x={gx(i) + GW / 2}
              y={221}
              textAnchor="middle"
              fill={g.match ? '#4a9eed' : '#4a9eed'}
              fontSize="8"
              fontWeight="700"
            >
              {g.id}
            </text>
            <text
              x={gx(i) + GW / 2}
              y={236}
              textAnchor="middle"
              fill={g.match ? '#4a9eed' : '#4a9eed'}
              fontSize="8"
            >
              w={g.w > 0 ? '+' : ''}
              {g.w}
            </text>
            <text
              x={gx(i) + GW / 2}
              y={252}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="7"
            >
              ← {g.from}
            </text>
          </g>
        ))}

        {/* ── discarded genes annotation ── */}
        {[5, 6].map((i) => (
          <g key={'disc' + i}>
            <rect
              x={gx(i)}
              y={208}
              width={GW}
              height={GH}
              rx="5"
              fill="rgba(74,158,237,0.10)"
              stroke="#ef444440"
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            <text
              x={gx(i) + GW / 2}
              y={230}
              textAnchor="middle"
              fill="#ef444460"
              fontSize="9"
            ></text>
            <text
              x={gx(i) + GW / 2}
              y={252}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="7"
            >
              descartado
            </text>
          </g>
        ))}

        <text
          x="330"
          y="278"
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize="8"
        >
          O filho herda a topologia do pai mais fit + pesos aleatórios dos
          matching genes
        </text>
      </svg>
    </div>
  );
};

const SpeciationDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '0.75rem',
        color: 'var(--text-primary)',
      }}
    >
      Especiação e Fitness Sharing no NEAT
    </p>
    <svg viewBox="0 0 620 130" style={{ maxWidth: '100%', height: 'auto' }}>
      {[
        {
          x: 10,
          w: 200,
          color: '#4a9eed',
          label: 'Espécie 1 (|S|=15)',
          genomes: ['A', 'B', 'C', 'D'],
          desc: 'topologia base, bem estabelecida',
        },
        {
          x: 222,
          w: 160,
          color: '#4a9eed',
          label: 'Espécie 2 (|S|=3)',
          genomes: ['E', 'F'],
          desc: 'nova topologia — inovação recente',
        },
        {
          x: 394,
          w: 218,
          color: '#4a9eed',
          label: 'Espécie 3 (|S|=8)',
          genomes: ['G', 'H', 'I'],
          desc: 'mais conexões, estável',
        },
      ].map(({ x, w, color, label, genomes, desc }) => {
        const step = Math.floor((w - 40) / genomes.length);
        const startOffset = Math.floor((w - (genomes.length - 1) * step) / 2);
        return (
          <g key={x}>
            <rect
              x={x}
              y={8}
              width={w}
              height={115}
              rx="8"
              fill={`${color}08`}
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="5,3"
            />
            <text
              x={x + w / 2}
              y={26}
              textAnchor="middle"
              fill={color}
              fontSize="8.5"
              fontWeight="700"
            >
              {label}
            </text>
            <text
              x={x + w / 2}
              y={38}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="7"
            >
              {desc}
            </text>
            {genomes.map((g, i) => {
              const cx = x + startOffset + i * step;
              return (
                <g key={g}>
                  <circle
                    cx={cx}
                    cy={85}
                    r={16}
                    fill={`${color}15`}
                    stroke={color}
                    strokeWidth="1.5"
                  />
                  <text
                    x={cx}
                    y={89}
                    textAnchor="middle"
                    fill={color}
                    fontSize="9"
                    fontWeight="700"
                  >
                    {g}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>

    <div style={S.math}>
      <BlockMath math="f'_i = \dfrac{f_i}{|S_k|}" />
    </div>
  </div>
);

const MutationDiagram = () => (
  <div style={{ ...S.diagram, textAlign: 'center' }}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '0.75rem',
        color: 'var(--text-primary)',
      }}
    >
      Mutações Estruturais — Add Node e Add Connection
    </p>

    {/* ── ADD CONNECTION ── */}
    <p
      style={{
        fontSize: '0.85rem',
        fontWeight: 700,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        marginBottom: '0.5rem',
      }}
    >
      ADD CONNECTION
    </p>
    <svg
      viewBox="0 0 500 190"
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        marginBottom: '1rem',
      }}
    >
      <defs>
        <marker
          id="mn1"
          markerWidth="7"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed" />
        </marker>
        <marker
          id="mn2"
          markerWidth="7"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed" />
        </marker>
      </defs>
      <rect
        x="5"
        y="5"
        width="490"
        height="180"
        rx="8"
        fill="rgba(74,158,237,0.05)"
        stroke="var(--text-secondary)"
        strokeWidth="1"
      />

      {/* Antes */}
      <text
        x="115"
        y="26"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="9"
      >
        Antes
      </text>
      {[
        { cx: 40, cy: 90, l: 'In1' },
        { cx: 40, cy: 135, l: 'In2' },
        { cx: 140, cy: 112, l: 'H' },
        { cx: 230, cy: 112, l: 'Out' },
      ].map(({ cx, cy, l }) => (
        <g key={'b' + l}>
          <circle
            cx={cx}
            cy={cy}
            r={18}
            fill="rgba(74,158,237,0.10)"
            stroke="#4a9eed"
            strokeWidth="1.8"
          />
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fill="#4a9eed"
            fontSize="10"
            fontWeight="700"
          >
            {l}
          </text>
        </g>
      ))}
      <line
        x1={58}
        y1={97}
        x2={122}
        y2={108}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#mn1)"
      />
      <line
        x1={58}
        y1={128}
        x2={122}
        y2={117}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#mn1)"
      />
      <line
        x1={158}
        y1={112}
        x2={212}
        y2={112}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#mn1)"
      />

      {/* Depois */}
      <text
        x="390"
        y="26"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="9"
      >
        Depois
      </text>
      {[
        { cx: 280, cy: 90, l: 'In1' },
        { cx: 280, cy: 135, l: 'In2' },
        { cx: 380, cy: 135, l: 'H' },
        { cx: 460, cy: 75, l: 'Out' },
      ].map(({ cx, cy, l }) => (
        <g key={'a' + l}>
          <circle
            cx={cx}
            cy={cy}
            r={18}
            fill="rgba(74,158,237,0.10)"
            stroke="#4a9eed"
            strokeWidth="1.8"
          />
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fill="#4a9eed"
            fontSize="10"
            fontWeight="700"
          >
            {l}
          </text>
        </g>
      ))}
      <line
        x1={298}
        y1={98}
        x2={362}
        y2={127}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#mn1)"
      />
      <line
        x1={298}
        y1={135}
        x2={362}
        y2={135}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#mn1)"
      />
      <line
        x1={396}
        y1={122}
        x2={448}
        y2={90}
        stroke="#4a9eed"
        strokeWidth="1.5"
        markerEnd="url(#mn1)"
      />
      <line
        x1={297}
        y1={80}
        x2={442}
        y2={74}
        stroke="#4a9eed"
        strokeWidth="2.2"
        markerEnd="url(#mn2)"
      />
      <text
        x="370"
        y="62"
        textAnchor="middle"
        fill="#4a9eed"
        fontSize="9"
        fontWeight="700"
      >
        nova #9!
      </text>
    </svg>

    {/* ── ADD NODE ── */}
    <p
      style={{
        fontSize: '0.85rem',
        fontWeight: 700,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        marginBottom: '0.5rem',
      }}
    >
      ADD NODE
    </p>
    <svg
      viewBox="0 0 500 160"
      style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <marker
          id="mn3"
          markerWidth="7"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#4a9eed" />
        </marker>
      </defs>
      <rect
        x="5"
        y="5"
        width="490"
        height="150"
        rx="8"
        fill="rgba(74,158,237,0.05)"
        stroke="var(--text-secondary)"
        strokeWidth="1"
      />

      {/* Antes */}
      <text
        x="125"
        y="26"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="9"
      >
        Antes
      </text>
      {[
        { cx: 50, cy: 88, l: 'A' },
        { cx: 200, cy: 88, l: 'B' },
      ].map(({ cx, cy, l }) => (
        <g key={'bn' + l}>
          <circle
            cx={cx}
            cy={cy}
            r={20}
            fill="rgba(74,158,237,0.10)"
            stroke="#4a9eed"
            strokeWidth="1.8"
          />
          <text
            x={cx}
            y={cy + 6}
            textAnchor="middle"
            fill="#4a9eed"
            fontSize="11"
            fontWeight="700"
          >
            {l}
          </text>
        </g>
      ))}
      <line
        x1={70}
        y1={88}
        x2={180}
        y2={88}
        stroke="#4a9eed"
        strokeWidth="1.8"
        markerEnd="url(#mn3)"
      />
      <text x="125" y="78" textAnchor="middle" fill="#4a9eed" fontSize="9">
        w=0.7 #5
      </text>

      {/* Depois */}
      <text
        x="390"
        y="26"
        textAnchor="middle"
        fill="var(--text-secondary)"
        fontSize="9"
      >
        Depois
      </text>
      {[
        { cx: 265, cy: 88, l: 'A' },
        { cx: 370, cy: 88, l: 'N' },
        { cx: 470, cy: 88, l: 'B' },
      ].map(({ cx, cy, l }, i) => (
        <g key={'an' + l}>
          <circle
            cx={cx}
            cy={cy}
            r={i === 1 ? 22 : 20}
            fill="rgba(74,158,237,0.10)"
            stroke="#4a9eed"
            strokeWidth={i === 1 ? 2.5 : 1.8}
          />
          <text
            x={cx}
            y={cy + 6}
            textAnchor="middle"
            fill="#4a9eed"
            fontSize="11"
            fontWeight="700"
          >
            {l}
          </text>
        </g>
      ))}
      <line
        x1={285}
        y1={88}
        x2={348}
        y2={88}
        stroke="#4a9eed"
        strokeWidth="2"
        markerEnd="url(#mn3)"
      />
      <line
        x1={392}
        y1={88}
        x2={450}
        y2={88}
        stroke="#4a9eed"
        strokeWidth="2"
        markerEnd="url(#mn3)"
      />
      <text x="316" y="78" textAnchor="middle" fill="#4a9eed" fontSize="9">
        w=1 #10
      </text>
      <text x="421" y="78" textAnchor="middle" fill="#4a9eed" fontSize="9">
        w=0.7 #11
      </text>
      <line
        x1={265}
        y1={118}
        x2={470}
        y2={118}
        stroke="#4a9eed"
        strokeWidth="1.8"
        strokeDasharray="6,4"
        opacity="0.6"
      />
      <text x="367" y="135" textAnchor="middle" fill="#4a9eed" fontSize="9">
        #5 desactivada
      </text>
    </svg>
  </div>
);

const XORExample = () => (
  <div style={S.diagram}>
    <p
      style={{
        fontWeight: 700,
        marginBottom: '1rem',
        color: 'var(--text-primary)',
      }}
    >
      XOR como Benchmark Padrão do NEAT
    </p>
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
    >
      <div>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-primary)',
            lineHeight: 1.7,
            marginBottom: '0.75rem',
          }}
        >
          O problema XOR é linearmente não-separável — nenhuma rede sem nós
          ocultos consegue resolver. É o benchmark mínimo que verifica se o NEAT
          consegue <em>complexificar</em> a topologia quando necessário.
        </p>
        <table style={{ ...S.table, marginBottom: 0 }}>
          <thead>
            <tr>
              <th style={S.th}>x₁</th>
              <th style={S.th}>x₂</th>
              <th style={S.th}>XOR</th>
            </tr>
          </thead>
          <tbody>
            {[
              [0, 0, 0],
              [0, 1, 1],
              [1, 0, 1],
              [1, 1, 0],
            ].map(([a, b, c]) => (
              <tr key={`${a}${b}`}>
                <td style={S.td}>{a}</td>
                <td style={S.td}>{b}</td>
                <td
                  style={{
                    ...S.td,
                    fontWeight: 700,
                    color: c ? '#4a9eed' : '#4a9eed',
                  }}
                >
                  {c}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div
          style={{
            background: 'var(--bg-primary)',
            borderRadius: 8,
            padding: '1rem',
            marginBottom: '0.75rem',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: '#4a9eed',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
            }}
          >
            Solução típica encontrada pelo NEAT
          </div>
          <div
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            <div>Geração 0: 2 entradas → 1 saída (sem ocultos)</div>
            <div style={{ color: '#4a9eed' }}>→ Erro: 0.5 (chance)</div>
            <div style={{ marginTop: '0.35rem' }}>
              Geração ~10: NEAT adiciona 1 nó oculto
            </div>
            <div style={{ color: '#4a9eed' }}>→ Erro: 0.15 (progresso)</div>
            <div style={{ marginTop: '0.35rem' }}>
              Geração ~30–100: optimização de pesos
            </div>
            <div style={{ color: '#4a9eed', fontWeight: 700 }}>
              → Erro: &lt;0.01 (solução!)
            </div>
          </div>
        </div>
        <div
          style={{
            background: 'rgba(74,158,237,0.10)',
            borderRadius: 8,
            padding: '0.75rem',
            fontSize: '0.85rem',
            borderLeft: '3px solid #4a9eed',
          }}
        >
          <strong>Porquê começa simples:</strong> a topologia mínima (sem
          ocultos) é a de menor complexidade. O NEAT só adiciona nós quando os
          pesos não conseguem melhorar o fitness.
        </div>
      </div>
    </div>
  </div>
);

export default function NEL6() {
  const [step, setStep] = useState(0);
  const steps = [
    {
      label: 'Inicialização',
      color: '#4a9eed',
      content:
        'Todas as redes começam com a topologia mínima: apenas as conexões directas de entradas para saídas, sem nós ocultos. Cada conexão recebe um número de inovação único. Toda a população começa na mesma espécie. O princípio de "minimal initial complexity" reduz o espaço de pesquisa e evita complexidade desnecessária.',
    },
    {
      label: 'Avaliação',
      color: '#4a9eed',
      content:
        'Cada genoma é descodificado numa rede neuronal e avaliado na tarefa. O fitness é o desempenho na tarefa — pontuação num jogo, erro de regressão, recompensa acumulada em RL. Não há gradiente: o fitness é uma caixa negra avaliada por simulação. Isto é exactamente a vantagem do NEAT sobre o backprop: não precisa de funções de activação diferenciáveis.',
    },
    {
      label: 'Especiação',
      color: '#4a9eed',
      content:
        'Os genomas são agrupados em espécies usando a distância de compatibilidade δ = c₁·E/N + c₂·D/N + c₃·W̄. E = genes excess (além do gene mais longo), D = genes disjoint (fora da gama comum), W̄ = diferença média de pesos nos matching genes. Se δ < δ_threshold → mesma espécie. Cada genoma é comparado com o representante da espécie (o mais fit da geração anterior).',
    },
    {
      label: 'Fitness Sharing',
      color: '#4a9eed',
      content:
        "O fitness ajustado é f'ᵢ = fᵢ / |Sₖ|, onde |Sₖ| é o tamanho da espécie. Este mecanismo protege inovações estruturais: uma nova topologia numa espécie de 2 membros divide o fitness por 2, enquanto a espécie dominante (50 membros) divide por 50. Espécies sem progresso durante ΔT gerações são eliminadas — mecanismo de pressão para inovar.",
    },
    {
      label: 'Crossover Estrutural',
      color: '#4a9eed',
      content:
        'Dois progenitores são cruzados por alinhamento dos innovation numbers. Genes com o mesmo número (matching) são herdados aleatoriamente de qualquer progenitor. Genes que só existem no progenitor mais fit (disjoint/excess) são sempre herdados — preservando a topologia complexa. Progenitores de espécies diferentes podem cruzar com probabilidade Pᵢₙₜₑᵣ (tipicamente 0.001).',
    },
    {
      label: 'Mutação Estrutural',
      color: '#4a9eed',
      content:
        'Dois tipos: (1) Add connection — escolher dois nós não ligados, criar aresta com peso aleatório, atribuir novo innovation#; (2) Add node — seleccionar aresta (in→out, peso w), desactivá-la, criar nó h, criar in→h (peso 1) e h→out (peso w). Pesos 1 e w escolhidos para que a nova rede produza exactamente o mesmo output que a anterior — inovação sem perturbação inicial.',
    },
  ];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nel" style={S.back}>
          <ArrowLeft size={16} /> Voltar
        </Link>
        <div style={S.tag}>MÓDULO 05</div>
        <h1 style={S.h1}>NEAT</h1>

        <div style={S.section}>
          <h2 style={S.h2}>1. Os Três Problemas que o NEAT Resolve</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Problema</th>
                  <th style={S.th}>Sem NEAT</th>
                  <th style={S.th}>Solução NEAT</th>
                  <th style={S.th}>Mecanismo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Competing conventions',
                    'O mesmo gene (conexão A→B) pode estar em posições diferentes em dois genomas → crossover por ponto de corte produz topologias incoerentes',
                    'Innovation numbers (historical markings)',
                    'Cada gene recebe um ID único global. Crossover por alinhamento de IDs.',
                  ],
                  [
                    'Protecção de inovações',
                    'Uma nova topologia começa pior → é eliminada antes de ter hipótese de optimizar os seus pesos',
                    'Especiação + fitness sharing',
                    "Novas topologias competem apenas dentro da sua espécie. Fitness ajustado: f'= f / |espécie|.",
                  ],
                  [
                    'Complexidade inicial',
                    'Começar com redes grandes desperdiça avaliações de fitness em topologias desnecessariamente complexas',
                    'Minimal initial complexity',
                    'Todas as redes começam sem nós ocultos. Complexidade cresce por mutação quando necessário.',
                  ],
                ].map(([p, s, sol, m]) => (
                  <tr key={p}>
                    <td
                      style={{
                        ...S.td,
                        fontWeight: 600,
                        color: '#4a9eed',
                        fontSize: '0.85rem',
                      }}
                    >
                      {p}
                    </td>
                    <td
                      style={{ ...S.td, color: '#4a9eed', fontSize: '0.83rem' }}
                    >
                      {s}
                    </td>
                    <td
                      style={{
                        ...S.td,
                        color: '#4a9eed',
                        fontWeight: 600,
                        fontSize: '0.83rem',
                      }}
                    >
                      {sol}
                    </td>
                    <td style={{ ...S.td, fontSize: '0.82rem' }}>{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>2. Innovation Numbers — O Mecanismo Central</h2>
          <p style={S.p}>
            O competing conventions problem é o obstáculo fundamental à
            neuroevolução de topologias. Se dois indivíduos evoluem
            independentemente e criam a mesma conexão A→B, essa conexão pode
            estar na posição 3 do genoma de um e na posição 7 do genoma do
            outro. Um crossover por ponto de corte mistura genes não-homólogos,
            produzindo redes incoerentes.
          </p>
          <p style={S.p}>
            A solução do NEAT são os <strong>historical markings</strong>: um
            contador global monotonamente crescente durante toda a execução.
            Cada gene de conexão recebe um innovation number quando é criado —
            uma vez atribuído, nunca muda, mesmo que o gene apareça em futuras
            gerações. Crucialmente: se dois indivíduos diferentes mutam
            independentemente na mesma geração e criam a mesma conexão A→B,
            ambos recebem o <em>mesmo</em> innovation number — o NEAT detecta
            automaticamente que são homólogos.
          </p>

          <InnovationDiagram />

          <div style={S.note}>
            Os innovation numbers resolvem o crossover de grafos por
            alinhamento: genes com o mesmo número são homólogos (mesma posição
            "histórica"). Os matching genes passam aleatoriamente de qualquer
            progenitor. Os disjoint/excess do progenitor mais fit passam sempre
            — preservando a topologia evoluída.
          </div>

          <CrossoverExample />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>
            3. Especiação e Fitness Sharing — Proteger a Inovação
          </h2>
          <p style={S.p}>
            Uma mutação estrutural (adicionar um nó ou uma conexão) produz
            tipicamente uma rede com desempenho <em>pior</em> no imediato: um nó
            novo com pesos aleatórios perturba o funcionamento da rede. Numa
            população sem protecção, esta topologia seria eliminada por selecção
            natural antes de ter tempo de optimizar os seus novos pesos.
          </p>
          <p style={S.p}>
            A especiação agrupa genomas similares (em termos de topologia e
            pesos) na mesma espécie, onde competem apenas entre si. A distância
            de compatibilidade é:
          </p>
          <div style={S.math}>
            <BlockMath math="\delta = c_1 \cdot \dfrac{E}{N} + c_2 \cdot \dfrac{D}{N} + c_3 \cdot \bar{W}" />
          </div>
          <p style={S.p}>
            onde E = genes excess (além do gene mais longo), D = genes disjoint
            (fora da gama dos matching), W̄ = diferença média de pesos nos
            matching genes, N = número máximo de genes nos dois genomas
            (normalização). Se δ &lt; δ_threshold, os dois genomas pertencem à
            mesma espécie.
          </p>
          <p style={S.p}>
            O fitness sharing explícito divide o fitness pelo tamanho da
            espécie:
          </p>
          <div style={S.math}>
            <BlockMath math="f'_i = \dfrac{f_i}{|S_k|}" />
          </div>
          <p style={S.p}>
            Uma nova topologia numa espécie de 2 membros tem fitness ajustado
            fᵢ/2 — muito melhor que fᵢ/50 da espécie dominante com 50 membros. A
            inovação tem tempo para amadurecer antes de competir com toda a
            população.
          </p>

          <SpeciationDiagram />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>4. O Algoritmo NEAT — Ciclo Completo</h2>
          <div style={S.diagram}>
            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 20,
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    background: step === i ? s.color : 'var(--bg-primary)',
                    color: step === i ? 'white' : 'var(--text-primary)',
                    border: `1.5px solid ${step === i ? s.color : 'var(--card-border)'}`,
                    transition: 'all 0.2s',
                  }}
                >
                  {i + 1}. {s.label}
                </button>
              ))}
            </div>
            <div
              style={{
                background: 'var(--bg-primary)',
                borderRadius: 10,
                padding: '1.25rem',
                border: `1.5px solid ${steps[step].color}30`,
                fontSize: '0.9rem',
                lineHeight: 1.8,
              }}
            >
              <strong style={{ color: steps[step].color }}>
                Passo {step + 1}: {steps[step].label}
              </strong>
              <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                {steps[step].content}
              </p>
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>5. Mutações Estruturais — Detalhe e Implicações</h2>
          <p style={S.p}>
            As mutações estruturais são o coração do "Augmenting Topologies" do
            NEAT. Existem dois tipos, cada um preservando o innovation number
            history de forma específica.
          </p>
          <MutationDiagram />
          <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Mutação</th>
                  <th style={S.th}>O que acontece</th>
                  <th style={S.th}>Innovation #s gerados</th>
                  <th style={S.th}>Efeito imediato no fitness</th>
                  <th style={S.th}>Porquê os pesos escolhidos</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Perturbar peso',
                    'Cada peso é alterado por ±Δw ou re-inicializado',
                    'Nenhum',
                    'Pequena perturbação do comportamento',
                    'Refinamento local da função aprendida',
                  ],
                  [
                    'Add connection',
                    'Nova aresta entre dois nós existentes não ligados, peso aleatório',
                    '1 novo (a aresta)',
                    'Imprevisível — peso aleatório',
                    'Adiciona grau de liberdade; evolução ajusta o peso',
                  ],
                  [
                    'Add node',
                    'Aresta (in→out, w) desactivada; nó h criado; in→h (peso 1), h→out (peso w)',
                    '2 novos (as duas arestas)',
                    'Nenhum — rede produz exactamente o mesmo output',
                    'Pesos 1×w preservam a função: in→h→out = in×1×w = in×w',
                  ],
                ].map(([t, w, i, e, r]) => (
                  <tr key={t}>
                    <td
                      style={{
                        ...S.td,
                        fontWeight: 600,
                        color: '#4a9eed',
                        fontSize: '0.83rem',
                      }}
                    >
                      {t}
                    </td>
                    <td style={S.td}>{w}</td>
                    <td
                      style={{
                        ...S.td,
                        color: '#4a9eed',
                        fontFamily: 'monospace',
                        fontSize: '0.83rem',
                      }}
                    >
                      {i}
                    </td>
                    <td style={S.td}>{e}</td>
                    <td
                      style={{
                        ...S.td,
                        color: 'var(--text-secondary)',
                        fontSize: '0.82rem',
                      }}
                    >
                      {r}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.note}>
            A escolha deliberada de pesos 1 e w ao adicionar um nó faz com que a
            nova rede produza exactamente o mesmo output que a anterior. O nó
            novo não perturba o fitness imediatamente — dando ao NEAT tempo de
            optimizar as novas arestas sem penalizar a inovação.
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>6. XOR como Benchmark Padrão</h2>
          <p style={S.p}>
            O problema XOR é o benchmark de referência para o NEAT porque é o
            mais simples que não pode ser resolvido sem nós ocultos — testa
            especificamente a capacidade de "augmenting topologies". Uma rede
            sem ocultos tem accuracy de 50% no XOR por construção: é linearmente
            não-separável. O NEAT tem de descobrir por si mesmo que precisa de
            pelo menos 1 nó oculto.
          </p>
          <XORExample />
        </div>

        <hr style={S.divider} />

        <div style={S.section}>
          <h2 style={S.h2}>
            7. Comparação com Outras Abordagens de Neuroevolução
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Característica</th>
                  <th style={S.th}>GA topologia fixa</th>
                  <th style={S.th}>Evoluir pesos + heurística</th>
                  <th style={S.th}>NEAT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Topologia inicial',
                    'Definida pelo humano',
                    'Definida pelo humano',
                    'Mínima (zero ocultos)',
                  ],
                  [
                    'Crossover de grafos',
                    'Impossível sem convex. problem',
                    'Heurísticas ad-hoc, frágeis',
                    'Por alinhamento de innovation#',
                  ],
                  [
                    'Protecção de inovações',
                    'Nenhuma',
                    'Nenhuma',
                    'Especiação + fitness sharing',
                  ],
                  [
                    'Complexidade',
                    'Fixa — definida a priori',
                    'Fixa',
                    'Cresce por necessidade (Occam)',
                  ],
                  [
                    'Hiperparâmetros topológicos',
                    'Número de camadas e nós',
                    'Idem',
                    'δ_threshold, c₁, c₂, c₃',
                  ],
                  [
                    'Resultado em double-pole',
                    'Requer 100k+ avaliações',
                    'Requer 50k+ avaliações',
                    '< 10k avaliações (Stanley 2002)',
                  ],
                ].map(([c, ga, heu, neat]) => (
                  <tr key={c}>
                    <td
                      style={{
                        ...S.td,
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {c}
                    </td>
                    <td style={{ ...S.td, color: '#4a9eed' }}>{ga}</td>
                    <td style={S.td}>{heu}</td>
                    <td style={{ ...S.td, color: '#4a9eed', fontWeight: 600 }}>
                      {neat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
