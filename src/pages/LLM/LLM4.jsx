import React from 'react';
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
    whiteSpace: 'pre',
  },
};

/* ── SVG: LLM puro vs LLM + RAG ─────────────────────────────────── */
function DiagramPuroVsRAG() {
  const cPuro = '#0369a1'; // dark orange — LLM Puro (problema)
  const cRAG = '#0284c7'; // amber — LLM + RAG (solução)
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 860 150" width="100%" style={{ display: 'block' }}>
        <defs>
          <marker
            id="arrP"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill={cPuro} />
          </marker>
          <marker
            id="arrR"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill={cRAG} />
          </marker>
        </defs>

        {/* ── LLM Puro (compacto) ── */}
        <text
          x="165"
          y="22"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={cPuro}
        >
          LLM Puro
        </text>
        <rect
          x="10"
          y="38"
          width="100"
          height="36"
          rx="8"
          fill="rgba(3,105,161,0.10)"
          stroke={cPuro}
          strokeWidth="1.5"
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Query do utilizador
        </text>
        <line
          x1="110"
          y1="56"
          x2="130"
          y2="56"
          stroke={cPuro}
          strokeWidth="1.5"
          markerEnd="url(#arrP)"
        />
        <rect
          x="130"
          y="38"
          width="90"
          height="36"
          rx="8"
          fill="rgba(3,105,161,0.10)"
          stroke={cPuro}
          strokeWidth="1.5"
        />
        <text
          x="175"
          y="55"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={cPuro}
        >
          LLM
        </text>
        <text
          x="175"
          y="69"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          (parâmetros fixos)
        </text>
        <line
          x1="220"
          y1="56"
          x2="240"
          y2="56"
          stroke={cPuro}
          strokeWidth="1.5"
          markerEnd="url(#arrP)"
        />
        <rect
          x="240"
          y="38"
          width="100"
          height="36"
          rx="8"
          fill="rgba(3,105,161,0.15)"
          stroke={cPuro}
          strokeWidth="2"
        />
        <text
          x="290"
          y="55"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={cPuro}
        >
          Resposta
        </text>
        <text x="290" y="69" textAnchor="middle" fontSize="9" fill={cPuro}>
          (pode alucinar )
        </text>

        {/* separador */}
        <line
          x1="360"
          y1="10"
          x2="360"
          y2="215"
          stroke="var(--card-border)"
          strokeWidth="1"
          strokeDasharray="6,4"
        />

        {/* ── LLM + RAG (extendido) ── */}
        <text
          x="615"
          y="22"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={cRAG}
        >
          LLM + RAG
        </text>
        {/* Query */}
        <rect
          x="375"
          y="38"
          width="130"
          height="36"
          rx="8"
          fill="rgba(2,132,199,0.10)"
          stroke={cRAG}
          strokeWidth="1.5"
        />
        <text
          x="440"
          y="60"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Query do utilizador
        </text>
        {/* arrow down */}
        <line
          x1="440"
          y1="74"
          x2="440"
          y2="106"
          stroke={cRAG}
          strokeWidth="1.5"
          markerEnd="url(#arrR)"
        />
        {/* Retriever */}
        <rect
          x="375"
          y="108"
          width="130"
          height="36"
          rx="8"
          fill="rgba(2,132,199,0.10)"
          stroke={cRAG}
          strokeWidth="1.5"
        />
        <text
          x="440"
          y="130"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill={cRAG}
        >
          Retriever
        </text>
        {/* arrow right to Vector Store */}
        <line
          x1="505"
          y1="126"
          x2="535"
          y2="126"
          stroke={cRAG}
          strokeWidth="1.5"
          markerEnd="url(#arrR)"
        />
        {/* Vector Store */}
        <rect
          x="535"
          y="108"
          width="130"
          height="36"
          rx="8"
          fill="rgba(2,132,199,0.10)"
          stroke={cRAG}
          strokeWidth="1.5"
        />
        <text
          x="600"
          y="130"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill={cRAG}
        >
          Vector Store
        </text>
        {/* arrow query → LLM */}
        <line
          x1="505"
          y1="56"
          x2="535"
          y2="56"
          stroke={cRAG}
          strokeWidth="1.5"
          markerEnd="url(#arrR)"
        />
        {/* LLM */}
        <rect
          x="535"
          y="38"
          width="130"
          height="36"
          rx="8"
          fill="rgba(2,132,199,0.10)"
          stroke={cRAG}
          strokeWidth="1.5"
        />
        <text
          x="600"
          y="55"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={cRAG}
        >
          LLM
        </text>
        <text
          x="600"
          y="69"
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-secondary)"
        >
          (query + chunks)
        </text>
        {/* Vector Store → LLM curved arrow */}
        <path
          d="M 600 108 Q 600 90 600 74"
          stroke={cRAG}
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#arrR)"
        />
        {/* LLM → Resposta */}
        <line
          x1="665"
          y1="56"
          x2="695"
          y2="56"
          stroke={cRAG}
          strokeWidth="1.5"
          markerEnd="url(#arrR)"
        />
        {/* Resposta */}
        <rect
          x="695"
          y="38"
          width="150"
          height="36"
          rx="8"
          fill="rgba(2,132,199,0.18)"
          stroke={cRAG}
          strokeWidth="2"
        />
        <text
          x="770"
          y="55"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={cRAG}
        >
          Resposta
        </text>
        <text x="770" y="69" textAnchor="middle" fontSize="10" fill={cRAG}>
          fundamentada ✓
        </text>
      </svg>
    </div>
  );
}

/* ── SVG: Pipeline RAG end-to-end ────────────────────────────────── */
function DiagramPipeline() {
  const c1 = '#0369a1'; // FASE 1 — dark orange
  const c2 = '#4a9eed'; // FASE 2 — orange
  const c3 = '#0284c7'; // FASE 3 — amber
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 820 265" width="100%" style={{ display: 'block' }}>
        <defs>
          <marker
            id="m1"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill={c1} />
          </marker>
          <marker
            id="m2"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill={c2} />
          </marker>
          <marker
            id="m3"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill={c3} />
          </marker>
        </defs>

        {/* ── FASE 1: Indexação ── */}
        <rect
          x="2"
          y="8"
          width="256"
          height="248"
          rx="10"
          fill="rgba(3,105,161,0.08)"
          stroke={c1}
          strokeWidth="1.5"
          strokeDasharray="6,3"
        />
        <text
          x="130"
          y="28"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={c1}
          letterSpacing="0.04em"
        >
          FASE 1 — INDEXAÇÃO (offline)
        </text>

        <rect
          x="14"
          y="42"
          width="96"
          height="34"
          rx="7"
          fill="rgba(3,105,161,0.12)"
          stroke={c1}
          strokeWidth="1.5"
        />
        <text
          x="62"
          y="63"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Documentos
        </text>

        <line
          x1="110"
          y1="59"
          x2="130"
          y2="59"
          stroke={c1}
          strokeWidth="1.5"
          markerEnd="url(#m1)"
        />

        <rect
          x="130"
          y="42"
          width="116"
          height="34"
          rx="7"
          fill="rgba(3,105,161,0.12)"
          stroke={c1}
          strokeWidth="1.5"
        />
        <text
          x="188"
          y="57"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Chunking
        </text>
        <text
          x="188"
          y="70"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          split + overlap
        </text>

        <line
          x1="188"
          y1="76"
          x2="188"
          y2="100"
          stroke={c1}
          strokeWidth="1.5"
          markerEnd="url(#m1)"
        />

        <rect
          x="104"
          y="100"
          width="150"
          height="34"
          rx="7"
          fill="rgba(3,105,161,0.12)"
          stroke={c1}
          strokeWidth="1.5"
        />
        <text
          x="179"
          y="119"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Embed Model
        </text>
        <text
          x="179"
          y="130"
          textAnchor="middle"
          fontSize="8.5"
          fill="var(--text-secondary)"
        >
          texto → vector ℝᵈ
        </text>

        <line
          x1="179"
          y1="134"
          x2="179"
          y2="158"
          stroke={c1}
          strokeWidth="1.5"
          markerEnd="url(#m1)"
        />

        <rect
          x="88"
          y="158"
          width="162"
          height="36"
          rx="7"
          fill="rgba(3,105,161,0.18)"
          stroke={c1}
          strokeWidth="2"
        />
        <text
          x="169"
          y="178"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={c1}
        >
          Vector Store
        </text>
        <text x="169" y="190" textAnchor="middle" fontSize="9" fill={c1}>
          FAISS / Chroma / Pinecone
        </text>

        {/* ── FASE 2: Retrieval ── */}
        <rect
          x="275"
          y="8"
          width="256"
          height="248"
          rx="10"
          fill="rgba(74,158,237,0.08)"
          stroke={c2}
          strokeWidth="1.5"
          strokeDasharray="6,3"
        />
        <text
          x="403"
          y="28"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={c2}
          letterSpacing="0.04em"
        >
          FASE 2 — RETRIEVAL (online)
        </text>

        <rect
          x="287"
          y="42"
          width="96"
          height="34"
          rx="7"
          fill="rgba(74,158,237,0.12)"
          stroke={c2}
          strokeWidth="1.5"
        />
        <text
          x="335"
          y="63"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Query
        </text>

        <line
          x1="383"
          y1="59"
          x2="403"
          y2="59"
          stroke={c2}
          strokeWidth="1.5"
          markerEnd="url(#m2)"
        />

        <rect
          x="403"
          y="42"
          width="116"
          height="34"
          rx="7"
          fill="rgba(74,158,237,0.12)"
          stroke={c2}
          strokeWidth="1.5"
        />
        <text
          x="461"
          y="57"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Embed Query
        </text>
        <text
          x="461"
          y="70"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          mesmo modelo
        </text>

        <line
          x1="461"
          y1="76"
          x2="461"
          y2="100"
          stroke={c2}
          strokeWidth="1.5"
          markerEnd="url(#m2)"
        />

        <rect
          x="371"
          y="100"
          width="150"
          height="34"
          rx="7"
          fill="rgba(74,158,237,0.12)"
          stroke={c2}
          strokeWidth="1.5"
        />
        <text
          x="446"
          y="119"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          ANN Search
        </text>
        <text
          x="446"
          y="130"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          cosine similarity
        </text>

        {/* Vector Store → ANN bridge */}
        <path
          d="M 258 176 Q 321 176 321 77"
          stroke={c2}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4,3"
          markerEnd="url(#m2)"
        />

        <line
          x1="446"
          y1="134"
          x2="446"
          y2="158"
          stroke={c2}
          strokeWidth="1.5"
          markerEnd="url(#m2)"
        />

        <rect
          x="361"
          y="158"
          width="170"
          height="36"
          rx="7"
          fill="rgba(74,158,237,0.18)"
          stroke={c2}
          strokeWidth="2"
        />
        <text
          x="446"
          y="178"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={c2}
        >
          Top-k Chunks
        </text>
        <text x="446" y="190" textAnchor="middle" fontSize="9" fill={c2}>
          k = 3..10 docs relevantes
        </text>

        {/* ── FASE 3: Generation ── */}
        <rect
          x="548"
          y="8"
          width="264"
          height="248"
          rx="10"
          fill="rgba(2,132,199,0.08)"
          stroke={c3}
          strokeWidth="1.5"
          strokeDasharray="6,3"
        />
        <text
          x="680"
          y="28"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={c3}
          letterSpacing="0.04em"
        >
          FASE 3 — GENERATION (online)
        </text>

        <rect
          x="560"
          y="42"
          width="240"
          height="50"
          rx="7"
          fill="rgba(2,132,199,0.12)"
          stroke={c3}
          strokeWidth="1.5"
        />
        <text
          x="680"
          y="61"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Prompt Builder
        </text>
        <text
          x="680"
          y="75"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          system prompt + chunks + query
        </text>
        <text
          x="680"
          y="87"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          "Usa só o contexto fornecido"
        </text>

        {/* Top-k → Prompt Builder bridge */}
        <path
          d="M 531 176 Q 531 67 560 67"
          stroke={c3}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4,3"
          markerEnd="url(#m3)"
        />

        <line
          x1="680"
          y1="92"
          x2="680"
          y2="116"
          stroke={c3}
          strokeWidth="1.5"
          markerEnd="url(#m3)"
        />

        <rect
          x="594"
          y="116"
          width="172"
          height="46"
          rx="7"
          fill="rgba(2,132,199,0.18)"
          stroke={c3}
          strokeWidth="2"
        />
        <text
          x="680"
          y="141"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={c3}
        >
          LLM
        </text>
        <text
          x="680"
          y="156"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          GPT-4o / Claude / Llama
        </text>

        <line
          x1="680"
          y1="162"
          x2="680"
          y2="186"
          stroke={c3}
          strokeWidth="1.5"
          markerEnd="url(#m3)"
        />

        <rect
          x="566"
          y="186"
          width="226"
          height="44"
          rx="7"
          fill="rgba(2,132,199,0.22)"
          stroke={c3}
          strokeWidth="2"
        />
        <text
          x="679"
          y="207"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={c3}
        >
          Resposta Fundamentada
        </text>
        <text
          x="679"
          y="222"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          com citações das fontes
        </text>
      </svg>
    </div>
  );
}

/* ── SVG: Fixed vs Semantic Chunking ─────────────────────────────── */
function DiagramChunking() {
  const cF = '#0369a1';
  const cS = '#0284c7';
  const tx = 'var(--text-primary)';
  const ts = 'var(--text-secondary)';
  // Fixed-size bars: each row starts 35px to the right of the previous (step),
  // width = 270px, overlap zone = 35px wide at end of each bar
  const step = 35,
    bw = 270,
    bh = 30,
    ov = 40;
  const rows = [
    {
      y: 96,
      label: 'Chunk 1',
      text: '"Os modelos de linguagem usam atenção…"',
    },
    { y: 132, label: 'Chunk 2', text: '"…atenção. A atenção permite focar…"' },
    {
      y: 168,
      label: 'Chunk 3',
      text: '"…em partes. Transformers são eficientes."',
    },
  ];
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 820 240" width="100%" style={{ display: 'block' }}>
        <defs>
          <marker
            id="ac"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill={ts} />
          </marker>
        </defs>

        {/* Texto original */}
        <text
          x="410"
          y="18"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={ts}
        >
          Texto Original
        </text>
        <rect
          x="60"
          y="26"
          width="700"
          height="26"
          rx="6"
          fill="rgba(74,158,237,0.07)"
          stroke="var(--card-border)"
          strokeWidth="1"
        />
        <text x="410" y="44" textAnchor="middle" fontSize="10" fill={tx}>
          "Os modelos de linguagem usam atenção. A atenção permite focar em
          partes. Transformers são eficientes."
        </text>

        {/* Fork */}
        <line x1="410" y1="52" x2="410" y2="64" stroke={ts} strokeWidth="1.2" />
        <line x1="195" y1="64" x2="625" y2="64" stroke={ts} strokeWidth="1.2" />
        <line
          x1="195"
          y1="64"
          x2="195"
          y2="78"
          stroke={ts}
          strokeWidth="1.2"
          markerEnd="url(#ac)"
        />
        <line
          x1="625"
          y1="64"
          x2="625"
          y2="78"
          stroke={ts}
          strokeWidth="1.2"
          markerEnd="url(#ac)"
        />

        {/* ── Fixed-size (left) ── */}
        <text
          x="195"
          y="88"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={cF}
        >
          Fixed-size (+ overlap)
        </text>
        {rows.map((r, i) => {
          const x = 14 + i * step;
          return (
            <g key={i}>
              <rect
                x={x}
                y={r.y}
                width={bw}
                height={bh}
                rx="6"
                fill="rgba(3,105,161,0.11)"
                stroke={cF}
                strokeWidth="1.5"
              />
              <text
                x={x + 7}
                y={r.y + 12}
                fontSize="8.5"
                fontWeight="700"
                fill={cF}
              >
                {r.label}
              </text>
              <text x={x + 7} y={r.y + 24} fontSize="8.5" fill={tx}>
                {r.text}
              </text>
              {i < 2 && (
                <>
                  <rect
                    x={x + bw - ov}
                    y={r.y}
                    width={ov}
                    height={bh}
                    rx="4"
                    fill="rgba(3,105,161,0.30)"
                    stroke="none"
                  />
                  <text
                    x={x + bw - ov / 2}
                    y={r.y + 14}
                    textAnchor="middle"
                    fontSize="7"
                    fill={cF}
                  >
                    overlap
                  </text>
                </>
              )}
            </g>
          );
        })}
        <text x="195" y="212" textAnchor="middle" fontSize="8.5" fill={cF}>
          Cortes arbitrários — zonas de overlap garantem continuidade
        </text>

        {/* vertical separator */}
        <line
          x1="415"
          y1="68"
          x2="415"
          y2="236"
          stroke="var(--card-border)"
          strokeWidth="1"
          strokeDasharray="5,4"
        />

        {/* ── Semantic Chunking (right) ── */}
        <text
          x="622"
          y="88"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={cS}
        >
          Semantic Chunking
        </text>

        <rect
          x="425"
          y="96"
          width="380"
          height="44"
          rx="7"
          fill="rgba(2,132,199,0.12)"
          stroke={cS}
          strokeWidth="1.5"
        />
        <text
          x="615"
          y="115"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill={cS}
        >
          Chunk A — ideia 1
        </text>
        <text x="615" y="131" textAnchor="middle" fontSize="9" fill={tx}>
          "Os modelos de linguagem usam atenção."
        </text>

        <rect
          x="425"
          y="152"
          width="380"
          height="44"
          rx="7"
          fill="rgba(2,132,199,0.12)"
          stroke={cS}
          strokeWidth="1.5"
        />
        <text
          x="615"
          y="171"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill={cS}
        >
          Chunk B — ideia 2
        </text>
        <text x="615" y="187" textAnchor="middle" fontSize="9" fill={tx}>
          "A atenção permite focar. Transformers são eficientes."
        </text>

        <text x="615" y="212" textAnchor="middle" fontSize="8.5" fill={cS}>
          Fronteiras semânticas — cada chunk = uma ideia coerente
        </text>
      </svg>
    </div>
  );
}

/* ── SVG: Retrieval + Reranking pipeline ─────────────────────────── */
function DiagramReranking() {
  return (
    <div style={S.diagram}>
      <svg viewBox="0 0 760 170" width="100%" style={{ display: 'block' }}>
        {/* Query */}
        <rect
          x="10"
          y="60"
          width="90"
          height="36"
          rx="7"
          fill="rgba(74,158,237,0.10)"
          stroke={color}
          strokeWidth="1.5"
        />
        <text
          x="55"
          y="80"
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-primary)"
        >
          Query
        </text>
        <text
          x="55"
          y="91"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          utilizador
        </text>

        {/* arrow */}
        <line
          x1="100"
          y1="78"
          x2="130"
          y2="78"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          markerEnd="url(#ar1)"
        />

        {/* Bi-encoder retrieval */}
        <rect
          x="130"
          y="48"
          width="140"
          height="60"
          rx="8"
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="1.5"
        />
        <text
          x="200"
          y="70"
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill="#4a9eed"
        >
          Bi-encoder
        </text>
        <text
          x="200"
          y="84"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          Dense retrieval
        </text>
        <text
          x="200"
          y="97"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          (cosine sim) → top-50
        </text>

        {/* arrow */}
        <line
          x1="270"
          y1="78"
          x2="300"
          y2="78"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          markerEnd="url(#ar1)"
        />
        <text
          x="285"
          y="70"
          textAnchor="middle"
          fontSize="8"
          fill="var(--text-secondary)"
        >
          top-50
        </text>

        {/* Cross-encoder reranker */}
        <rect
          x="300"
          y="48"
          width="150"
          height="60"
          rx="8"
          fill="rgba(74,158,237,0.10)"
          stroke={color}
          strokeWidth="1.5"
        />
        <text
          x="375"
          y="68"
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill={color}
        >
          Cross-encoder
        </text>
        <text
          x="375"
          y="82"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          score(q, d) por par
        </text>
        <text
          x="375"
          y="95"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          (mais preciso, lento)
        </text>

        {/* arrow */}
        <line
          x1="450"
          y1="78"
          x2="480"
          y2="78"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          markerEnd="url(#ar1)"
        />
        <text
          x="465"
          y="70"
          textAnchor="middle"
          fontSize="8"
          fill="var(--text-secondary)"
        >
          top-5
        </text>

        {/* Final top-k */}
        <rect
          x="480"
          y="48"
          width="130"
          height="60"
          rx="8"
          fill="rgba(74,158,237,0.10)"
          stroke="#4a9eed"
          strokeWidth="1.5"
        />
        <text
          x="545"
          y="70"
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill="#4a9eed"
        >
          Top-k Final
        </text>
        <text
          x="545"
          y="84"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          chunks re-ordenados
        </text>
        <text
          x="545"
          y="97"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          → contexto para LLM
        </text>

        {/* arrow */}
        <line
          x1="610"
          y1="78"
          x2="640"
          y2="78"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          markerEnd="url(#ar1)"
        />

        {/* LLM */}
        <rect
          x="640"
          y="55"
          width="110"
          height="46"
          rx="7"
          fill="rgba(74,158,237,0.10)"
          stroke={color}
          strokeWidth="1.5"
        />
        <text
          x="695"
          y="75"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={color}
        >
          LLM
        </text>
        <text
          x="695"
          y="90"
          textAnchor="middle"
          fontSize="9"
          fill="var(--text-secondary)"
        >
          gera resposta
        </text>

        {/* Latência */}
        <text x="200" y="140" textAnchor="middle" fontSize="9" fill="#4a9eed">
          ~10ms (ANN)
        </text>
        <text x="375" y="140" textAnchor="middle" fontSize="9" fill={color}>
          ~100–300ms (cross-enc)
        </text>
        <text x="545" y="140" textAnchor="middle" fontSize="9" fill="#4a9eed">
          qualidade máxima
        </text>

        <defs>
          <marker
            id="ar1"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

/* ── Código ────────────────────────────────────────────────────────── */
const pipelineCode = `# Pipeline RAG — implementação com LangChain
from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

# ── Fase 1: Indexação (offline) ──────────────────────────────────
loader = DirectoryLoader("./docs", glob="**/*.pdf")
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(
 chunk_size=512,
 chunk_overlap=64, # ~12% overlap
 separators=["\\n\\n", "\\n", ". ", " "]
)
chunks = splitter.split_documents(docs)

embed_model = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = Chroma.from_documents(chunks, embed_model,
 persist_directory="./chroma_db")

# ── Fase 2 + 3: Retrieval + Generation (online) ─────────────────
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
retriever = vector_store.as_retriever(search_kwargs={"k": 5})

qa_chain = RetrievalQA.from_chain_type(
 llm=llm,
 retriever=retriever,
 return_source_documents=True
)

result = qa_chain("Qual é a política de devoluções?")
print(result["result"])
print("Fontes:", [d.metadata["source"] for d in result["source_documents"]])`;

const embeddingCode = `# Embeddings com sentence-transformers
from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer("BAAI/bge-large-en-v1.5")

sentences = [
 "Os transformers revolucionaram o NLP.",
 "A arquitectura attention-based mudou o processamento de linguagem.",
 "O futebol é o desporto mais popular do mundo.", # não relacionado
]

embeddings = model.encode(sentences, normalize_embeddings=True)
print(embeddings.shape) # (3, 1024)

# Similaridade cosine (vectores normalizados → produto escalar)
sim_0_1 = np.dot(embeddings[0], embeddings[1]) # ~0.87 (alta)
sim_0_2 = np.dot(embeddings[0], embeddings[2]) # ~0.21 (baixa)
print(f"Sim(frase 0, frase 1) = {sim_0_1:.3f}")
print(f"Sim(frase 0, frase 2) = {sim_0_2:.3f}")`;

const faissCode = `import faiss, numpy as np

d = 1024 # dimensões do embedding
n = 1_000_000 # número de vectores

# ── Flat (exacto, O(n)) ───────────────────────────────────────────
index_flat = faiss.IndexFlatIP(d) # Inner Product (cosine com normalização)
index_flat.add(embeddings) # adicionar vectores

# ── IVF (cluster-based, aprox.) ───────────────────────────────────
nlist = 1024 # número de células Voronoi
quantizer = faiss.IndexFlatIP(d)
index_ivf = faiss.IndexIVFFlat(quantizer, d, nlist)
index_ivf.train(embeddings) # treinar centroides
index_ivf.add(embeddings)
index_ivf.nprobe = 32 # células a explorar por query

# ── HNSW (grafo hierárquico, aprox., O(log n)) ────────────────────
index_hnsw = faiss.IndexHNSWFlat(d, 32) # M=32 conexões por nó
index_hnsw.add(embeddings)

# Busca
D, I = index_hnsw.search(query_emb.reshape(1, -1), k=10)
# D = distâncias, I = índices dos top-10 vizinhos`;

const hybridCode = `# Hybrid Search com BM25 + Dense + RRF
from rank_bm25 import BM25Okapi
from sklearn.preprocessing import MinMaxScaler

def reciprocal_rank_fusion(rankings: list[list[int]], k=60) -> list[int]:
 """RRF: combina múltiplos rankings sem necessitar de score calibrado."""
 scores = {}
 for ranking in rankings:
 for rank, doc_id in enumerate(ranking):
 scores[doc_id] = scores.get(doc_id, 0) + 1.0 / (k + rank + 1)
 return sorted(scores, key=scores.get, reverse=True)

# 1. Busca lexical BM25
tokenized = [doc.split() for doc in corpus]
bm25 = BM25Okapi(tokenized)
bm25_scores = bm25.get_scores(query.split())
bm25_ranking = np.argsort(bm25_scores)[::-1].tolist()

# 2. Busca densa (vector store)
dense_ranking = vector_store.similarity_search_ids(query_emb, k=50)

# 3. Fusão RRF
fused = reciprocal_rank_fusion([bm25_ranking[:50], dense_ranking])
top_docs = [corpus[i] for i in fused[:5]]`;

const hydeCode = `# HyDE — Hypothetical Document Embeddings (Gao et al., 2022)
def hyde_retrieval(query: str, llm, embed_model, vector_store, k=5):
 # 1. Gerar documento hipotético que responderia à query
 hyp_prompt = f"""Escreve um parágrafo técnico detalhado que respondesse
 directamente à seguinte pergunta:
 Pergunta: {query}
 Parágrafo:"""
 hypothetical_doc = llm.generate(hyp_prompt)

 # 2. Embedar o documento hipotético (não a query original)
 hyp_embedding = embed_model.encode(hypothetical_doc)

 # 3. Usar o embedding do doc hipotético para retrieval
 results = vector_store.similarity_search(hyp_embedding, k=k)
 return results

# Porquê funciona?
# A query "Qual é a capital de França?" é curta e genérica.
# O doc hipotético "Paris é a capital de França, conhecida por..."
# está mais próximo no espaço embedding dos documentos reais sobre Paris.`;

const ragasCode = `# RAGAS — Avaliação automática do pipeline RAG
from ragas import evaluate
from ragas.metrics import (
 faithfulness, # claims da resposta suportados pelo contexto?
 answer_relevancy, # resposta relevante para a pergunta?
 context_precision, # chunks úteis estão no topo do ranking?
 context_recall, # toda a info necessária foi recuperada?
)
from datasets import Dataset

# Dataset de avaliação (precisa de ground truth para context_recall)
eval_data = {
 "question": ["Qual é a temperatura de fusão do ferro?"],
 "answer": ["O ferro funde a 1538 °C."],
 "contexts": [["O ferro tem ponto de fusão de 1538 graus Celsius..."]],
 "ground_truth": ["1538 °C"]
}
dataset = Dataset.from_dict(eval_data)

results = evaluate(dataset, metrics=[
 faithfulness, answer_relevancy,
 context_precision, context_recall
])
print(results)
# {'faithfulness': 0.95, 'answer_relevancy': 0.91,
# 'context_precision': 0.88, 'context_recall': 0.87}`;

/* ══════════════════════════════════════════════════════════════════ */
export default function LLM4() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}>
        <ArrowLeft size={16} /> Voltar a LLMs &amp; Agents
      </Link>

      <div style={S.tag}>MÓDULO 04</div>
      <h1 style={S.h1}>RAG — Retrieval-Augmented Generation</h1>

      {/* ── Secção 1: Motivação ───────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Motivação — Limitações dos LLMs sem RAG</h2>
        <p style={S.p}>
          Um LLM treinado encapsula conhecimento estático nos seus parâmetros.
          Este conhecimento tem três limitações estruturais que RAG resolve
          directamente:
        </p>

        <h3 style={S.h3}>Knowledge Cutoff</h3>
        <p style={S.p}>
          O modelo não conhece eventos posteriores à data de corte do treino. Um
          modelo treinado em 2023 não sabe nada sobre acontecimentos de 2024 —
          não pode responder com precisão sobre lançamentos de produtos,
          alterações legais, preços de mercado ou qualquer informação recente.
          RAG resolve isto ao injectar documentos actualizados em cada query,
          sem re-treinar o modelo.
        </p>

        <h3 style={S.h3}>Hallucination</h3>
        <p style={S.p}>
          Quando o modelo não sabe a resposta correcta, tende a gerar texto
          plausível mas factualmente errado — inventar nomes de autores, citar
          artigos inexistentes, ou confiar em métricas incorrectas. Este
          problema é mais perigoso em domínios especializados (medicina,
          direito, finanças) onde erros têm consequências reais. Com RAG, o LLM
          recebe a instrução de responder{' '}
          <em>apenas com base no contexto fornecido</em>, tornando as respostas
          rastreáveis e verificáveis.
        </p>

        <h3 style={S.h3}>Privacidade e Dados Internos</h3>
        <p style={S.p}>
          Documentos internos confidenciais (contratos, dados de clientes,
          propriedade intelectual) não podem ser incluídos em datasets de treino
          públicos. RAG permite que o modelo aceda a estes documentos em
          inferência, mantendo-os dentro do perímetro de segurança da
          organização.
        </p>

        <DiagramPuroVsRAG />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Abordagem</th>
              <th style={S.th}>Custo de actualização</th>
              <th style={S.th}>Rastreabilidade</th>
              <th style={S.th}>Dados privados</th>
              <th style={S.th}>Escalabilidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Fine-tuning</td>
              <td style={S.td}>Muito alto (re-treino)</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Risco de memorização</td>
              <td style={S.td}>Limitada</td>
            </tr>
            <tr>
              <td style={S.td}>Long Context</td>
              <td style={S.td}>Baixo (só o prompt)</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Seguro em inferência</td>
              <td style={S.td}>Limitada (custo/latência)</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>RAG</strong>
              </td>
              <td style={S.td}>
                <strong>Baixo (só a DB)</strong>
              </td>
              <td style={S.td}>
                <strong>Alta (fontes citadas)</strong>
              </td>
              <td style={S.td}>
                <strong>Seguro e controlado</strong>
              </td>
              <td style={S.td}>
                <strong>Alta (milhões de docs)</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          RAG não elimina hallucination — o LLM ainda pode ignorar o contexto ou
          extrapolar além dele. A instrução de sistema ("responde{' '}
          <em>apenas</em> com base no contexto") e a avaliação com RAGAS (Secção
          8) são essenciais para monitorizar faithfulness em produção.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 2: Pipeline ───────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Pipeline RAG — Visão Geral End-to-End</h2>
        <p style={S.p}>
          O pipeline RAG divide-se em três fases distintas. A{' '}
          <strong>Fase 1 (Indexação)</strong> é executada offline, uma vez por
          batch de documentos. As{' '}
          <strong>Fases 2 e 3 (Retrieval + Generation)</strong> correm em tempo
          real para cada query do utilizador.
        </p>

        <DiagramPipeline />

        <div style={S.code}>{pipelineCode}</div>

        <div style={S.highlight}>
          <strong>Latências típicas em produção:</strong> Indexação ~1–10
          ms/chunk (batch). Retrieval ANN ~5–20 ms. LLM generation ~500 ms–3 s
          dependendo do modelo e tamanho da resposta. O gargalo é sempre a
          geração.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 3: Embeddings ─────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Embeddings Semânticos</h2>
        <p style={S.p}>
          Um embedding é uma função{' '}
          <InlineMath math={'E: \\text{texto} \\rightarrow \\mathbb{R}^d'} />{' '}
          que mapeia texto para um vector de números reais. Textos
          semanticamente próximos produzem vectores próximos no espaço{' '}
          <InlineMath math={'\\mathbb{R}^d'} />, independentemente de
          partilharem vocabulário exacto.
        </p>

        <h3 style={S.h3}>Similaridade Cosine</h3>
        <p style={S.p}>
          A métrica padrão para comparar embeddings é a similaridade cosine, que
          mede o ângulo entre dois vectores (independente da magnitude):
        </p>
        <div style={S.math}>
          <BlockMath
            math={
              '\\text{sim}(q, d) = \\frac{q \\cdot d}{\\|q\\| \\cdot \\|d\\|} = \\frac{\\sum_{i=1}^{d} q_i d_i}{\\sqrt{\\sum_i q_i^2} \\cdot \\sqrt{\\sum_i d_i^2}}'
            }
          />
        </div>
        <p style={S.p}>
          Quando os vectores são normalizados (
          <InlineMath math={'\\|v\\| = 1'} />
          ), a similaridade cosine reduz-se ao produto escalar:{' '}
          <InlineMath math={'\\text{sim}(q, d) = q \\cdot d'} />, o que
          simplifica o cálculo e é o que FAISS IndexFlatIP utiliza internamente.
        </p>

        <div style={S.code}>{embeddingCode}</div>

        <h3 style={S.h3}>Modelos de Embedding</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Dimensões</th>
              <th style={S.th}>Max Tokens</th>
              <th style={S.th}>MTEB Score</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>text-embedding-3-small</td>
              <td style={S.td}>1 536</td>
              <td style={S.td}>8 191</td>
              <td style={S.td}>62.3</td>
              <td style={S.td}>OpenAI, bom custo-benefício</td>
            </tr>
            <tr>
              <td style={S.td}>text-embedding-3-large</td>
              <td style={S.td}>3 072</td>
              <td style={S.td}>8 191</td>
              <td style={S.td}>64.6</td>
              <td style={S.td}>OpenAI, melhor qualidade</td>
            </tr>
            <tr>
              <td style={S.td}>BAAI/bge-large-en-v1.5</td>
              <td style={S.td}>1 024</td>
              <td style={S.td}>512</td>
              <td style={S.td}>64.2</td>
              <td style={S.td}>Open-source, top MTEB</td>
            </tr>
            <tr>
              <td style={S.td}>intfloat/e5-mistral-7b</td>
              <td style={S.td}>4 096</td>
              <td style={S.td}>32 768</td>
              <td style={S.td}>66.6</td>
              <td style={S.td}>Open-source, máxima qualidade</td>
            </tr>
            <tr>
              <td style={S.td}>all-MiniLM-L6-v2</td>
              <td style={S.td}>384</td>
              <td style={S.td}>256</td>
              <td style={S.td}>56.3</td>
              <td style={S.td}>Rápido, leve, bom para prototipagem</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          MTEB (Massive Text Embedding Benchmark) agrega dezenas de tarefas de
          retrieval, clustering e classificação. Um score de 64+ é considerado
          excelente. Consulte huggingface.co/spaces/mteb/leaderboard para
          rankings actualizados.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 4: Chunking ───────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Chunking — Estratégias e Trade-offs</h2>
        <p style={S.p}>
          Os modelos de embedding têm um limite de tokens de entrada
          (tipicamente 512–8192). Documentos longos têm de ser divididos em{' '}
          <strong>chunks</strong> antes de serem embedados. A qualidade do
          chunking afecta directamente a qualidade do retrieval.
        </p>

        <h3 style={S.h3}>Porquê o Chunk Size Importa</h3>
        <div style={S.highlight}>
          <strong>Chunks demasiado pequenos:</strong> perdem contexto local —
          uma frase isolada pode não transmitir o significado do parágrafo. O
          embedding fica ruidoso.
          <br />
          <br />
          <strong>Chunks demasiado grandes:</strong> diluem a relevância — o
          vector médio de um chunk longo pode não capturar bem nenhum subtópico
          específico. Aumenta também o número de tokens enviados ao LLM.
        </div>

        <h3 style={S.h3}>Chunk Overlap</h3>
        <p style={S.p}>
          O overlap garante que informação na fronteira entre dois chunks não é
          perdida. Se um chunk termina a meio de uma frase e o chunk seguinte
          começa no final dessa frase, nenhum dos dois captura o contexto
          completo. Com overlap de 64–128 tokens, ambos os chunks incluem essa
          transição.
        </p>

        <DiagramChunking />

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Estratégia</th>
              <th style={S.th}>Chunk Size típico</th>
              <th style={S.th}>Overlap típico</th>
              <th style={S.th}>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Fixed-size</td>
              <td style={S.td}>256–512 tokens</td>
              <td style={S.td}>10–20%</td>
              <td style={S.td}>Baseline rápido, texto homogéneo</td>
            </tr>
            <tr>
              <td style={S.td}>Recursive Character</td>
              <td style={S.td}>512–1024 chars</td>
              <td style={S.td}>64–128 chars</td>
              <td style={S.td}>Texto geral, preserva parágrafos</td>
            </tr>
            <tr>
              <td style={S.td}>Sentence Splitting</td>
              <td style={S.td}>3–10 frases</td>
              <td style={S.td}>1–2 frases</td>
              <td style={S.td}>Documentos bem formatados, PDFs</td>
            </tr>
            <tr>
              <td style={S.td}>Semantic Chunking</td>
              <td style={S.td}>Variável</td>
              <td style={S.td}>N/A</td>
              <td style={S.td}>Máxima coerência semântica; mais lento</td>
            </tr>
            <tr>
              <td style={S.td}>Parent-Child</td>
              <td style={S.td}>Pequeno (retrieve) + Grande (geração)</td>
              <td style={S.td}>N/A</td>
              <td style={S.td}>Retrieval preciso + contexto rico para o LLM</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          O chunking ideal depende do domínio. Para documentos legais, preservar
          artigos inteiros é prioritário. Para código, as funções são unidades
          naturais. Não existe um tamanho universal — experimentação com RAGAS é
          a forma mais fiável de optimizar.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 5: Vector Stores e ANN ────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>
          5. Vector Stores e ANN — Busca Aproximada de Vizinhos
        </h2>
        <p style={S.p}>
          Com milhões de vectores, uma busca linear exacta (
          <InlineMath math={'O(n \\cdot d)'} />) é demasiado lenta. Os
          algoritmos de <strong>Approximate Nearest Neighbor (ANN)</strong>{' '}
          trocam uma pequena perda de precisão por ganhos dramáticos de
          velocidade.
        </p>

        <h3 style={S.h3}>FAISS — Três Índices Principais</h3>
        <div style={S.code}>{faissCode}</div>

        <h3 style={S.h3}>HNSW — Hierarquia de Grafos</h3>
        <p style={S.p}>
          HNSW (Hierarchical Navigable Small World) constrói um grafo de
          navegação em múltiplas camadas: camadas superiores têm poucos nós com
          conexões longas (navegação rápida), camadas inferiores têm todos os
          nós com conexões curtas (refinamento preciso). A busca começa no topo
          e desce greedy até ao nível mais granular — complexidade{' '}
          <InlineMath math={'O(\\log n)'} />.
        </p>
        <div style={S.highlight}>
          <strong>Recall@10 típico do HNSW:</strong> 95–99% com latência de ~1
          ms em colecções de 1M vectores. O parâmetro <code>M</code> (número de
          conexões por nó, tipicamente 16–64) controla o trade-off
          memória/velocidade/recall.
        </div>

        <h3 style={S.h3}>Vector Stores em Produção</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Vector Store</th>
              <th style={S.th}>Hosted/Self</th>
              <th style={S.th}>Filtros de Metadata</th>
              <th style={S.th}>Escalabilidade</th>
              <th style={S.th}>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>FAISS</td>
              <td style={S.td}>Self (library)</td>
              <td style={S.td}>Manual (pós-filtro)</td>
              <td style={S.td}>Muito alta (GPU)</td>
              <td style={S.td}>Sem persistência nativa; ideal para batch</td>
            </tr>
            <tr>
              <td style={S.td}>Chroma</td>
              <td style={S.td}>Self / Cloud</td>
              <td style={S.td}>Sim</td>
              <td style={S.td}>Média</td>
              <td style={S.td}>Open-source, fácil de integrar, dev-friendly</td>
            </tr>
            <tr>
              <td style={S.td}>Pinecone</td>
              <td style={S.td}>Cloud managed</td>
              <td style={S.td}>Sim (rich)</td>
              <td style={S.td}>Muito alta</td>
              <td style={S.td}>
                Produção enterprise; serverless tier disponível
              </td>
            </tr>
            <tr>
              <td style={S.td}>Weaviate</td>
              <td style={S.td}>Self / Cloud</td>
              <td style={S.td}>Sim (GraphQL)</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Multi-modal, hybrid search nativo</td>
            </tr>
            <tr>
              <td style={S.td}>pgvector</td>
              <td style={S.td}>Self (PostgreSQL)</td>
              <td style={S.td}>SQL completo</td>
              <td style={S.td}>Média</td>
              <td style={S.td}>Ideal se já usar PostgreSQL; sem infra extra</td>
            </tr>
            <tr>
              <td style={S.td}>Qdrant</td>
              <td style={S.td}>Self / Cloud</td>
              <td style={S.td}>Sim (payload filters)</td>
              <td style={S.td}>Alta</td>
              <td style={S.td}>Rust, alta performance, quantização nativa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 6: Reranking e Hybrid Search ──────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Reranking e Hybrid Search</h2>
        <p style={S.p}>
          A similaridade cosine entre embeddings captura semântica mas pode
          falhar em casos de <strong>correspondência lexical exacta</strong>{' '}
          (nomes próprios, códigos, termos técnicos) ou quando o bi-encoder não
          tem capacidade de capturar a relação complexa entre query e documento.
        </p>

        <h3 style={S.h3}>BM25 — Busca Lexical com Saturação</h3>
        <p style={S.p}>
          BM25 é a evolução do TF-IDF com saturação de frequência de termos. Um
          termo que aparece 10 vezes num documento não é 10x mais relevante — a
          utilidade marginal decresce:
        </p>
        <div style={S.math}>
          <BlockMath
            math={
              '\\text{BM25}(q,d) = \\sum_{t \\in q} \\text{IDF}(t) \\cdot \\frac{\\text{tf}(t,d) \\cdot (k_1 + 1)}{\\text{tf}(t,d) + k_1 \\cdot \\left(1 - b + b \\cdot \\frac{|d|}{\\text{avgdl}}\\right)}'
            }
          />
        </div>
        <p style={S.p}>
          onde <InlineMath math={'k_1 \\approx 1.2'} /> controla a saturação de
          frequência e
          <InlineMath math={' b \\approx 0.75'} /> normaliza pelo comprimento do
          documento. BM25 é excelente para queries com palavras-chave
          específicas mas falha em sinónimos e paráfrases.
        </p>

        <h3 style={S.h3}>Hybrid Search com RRF</h3>
        <p style={S.p}>
          Reciprocal Rank Fusion (RRF) combina múltiplos rankings sem necessitar
          de calibrar scores em escalas diferentes. O score RRF de um documento{' '}
          <InlineMath math={'d'} /> é:
        </p>
        <div style={S.math}>
          <BlockMath
            math={
              '\\text{RRF}(d) = \\sum_{r \\in R} \\frac{1}{k + \\text{rank}_r(d)}'
            }
          />
        </div>
        <p style={S.p}>
          onde <InlineMath math={'R'} /> é o conjunto de rankings (BM25 + dense)
          e <InlineMath math={'k = 60'} /> é uma constante de suavização.
          Documentos que aparecem bem em ambos os rankings sobem para o topo.
        </p>

        <div style={S.code}>{hybridCode}</div>

        <h3 style={S.h3}>Cross-Encoder Reranker</h3>
        <p style={S.p}>
          Um <strong>bi-encoder</strong> (usado no retrieval) embeda query e
          documento <em>separadamente</em> — rápido, mas perde informação de
          interacção entre eles. Um <strong>cross-encoder</strong> processa o
          par (query, documento) em conjunto, produzindo um score de relevância
          muito mais preciso:
        </p>
        <div style={S.math}>
          <BlockMath
            math={
              '\\text{score}(q, d) = \\text{CrossEncoder}\\bigl([\\text{CLS}] \\; q \\; [\\text{SEP}] \\; d \\; [\\text{SEP}]\\bigr)'
            }
          />
        </div>

        <DiagramReranking />

        <div style={S.note}>
          A estratégia padrão: bi-encoder para retrieval de top-50 (ms),
          cross-encoder para reranking dos top-50 para top-5 (100–300 ms). O
          aumento de latência é compensado por ganhos substanciais em
          relevância. Modelos: <code>cross-encoder/ms-marco-MiniLM-L-6-v2</code>
          , <code>Cohere Rerank</code>.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 7: Advanced RAG ───────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Advanced RAG — Técnicas de Melhoria</h2>
        <p style={S.p}>
          O Naive RAG (embed query → cosine search → LLM) é o ponto de partida.
          Várias técnicas avançadas melhoram a qualidade do retrieval e da
          geração:
        </p>

        <h3 style={S.h3}>HyDE — Hypothetical Document Embeddings</h3>
        <p style={S.p}>
          Queries curtas vivem num subespaço diferente dos documentos longos no
          espaço de embeddings. HyDE (Gao et al., 2022) gera primeiro um
          documento hipotético que responderia à query, depois usa o embedding{' '}
          <em>desse documento</em> para retrieval — aproximando muito melhor o
          espaço dos documentos reais.
        </p>
        <div style={S.code}>{hydeCode}</div>

        <h3 style={S.h3}>Multi-Query Retrieval</h3>
        <p style={S.p}>
          Uma única query pode ser formulada de várias formas. Multi-query
          expansion usa o LLM para gerar 3–5 variantes da query original, faz
          retrieval independente para cada uma, e funde os resultados
          (tipicamente com RRF). Aumenta o recall ao cobrir mais do espaço
          semântico da questão.
        </p>
        <div style={S.highlight}>
          <strong>Exemplo:</strong> Query original:{' '}
          <em>"Como funciona atenção em transformers?"</em>
          <br />
          Variantes geradas: "mecanismo de self-attention", "scaled dot-product
          attention", "attention heads em BERT", "atenção multi-cabeça
          explicada"
        </div>

        <h3 style={S.h3}>Parent-Child Chunking</h3>
        <p style={S.p}>
          Divide documentos em dois níveis: <strong>child chunks</strong>{' '}
          pequenos (64–128 tokens) para retrieval preciso, e{' '}
          <strong>parent chunks</strong> grandes (512–2048 tokens) que são
          enviados ao LLM. O retriever encontra o chunk pequeno mais relevante;
          o LLM recebe o contexto mais amplo do parent. Maximiza tanto a
          precisão do retrieval como a riqueza do contexto.
        </p>

        <h3 style={S.h3}>RAG Fusion</h3>
        <p style={S.p}>
          Combina resultados de múltiplos retrievers heterogéneos (dense,
          sparse, knowledge graph, web search) via RRF. Diferente do hybrid
          search (dois rankings do mesmo corpus), o RAG Fusion pode incluir
          fontes de natureza completamente diferente, aumentando a cobertura
          informacional.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Técnica</th>
              <th style={S.th}>Problema que resolve</th>
              <th style={S.th}>Custo extra</th>
              <th style={S.th}>Ganho típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>HyDE</td>
              <td style={S.td}>Mismatch query curta / doc longo</td>
              <td style={S.td}>+1 LLM call</td>
              <td style={S.td}>+5–15% recall</td>
            </tr>
            <tr>
              <td style={S.td}>Multi-query</td>
              <td style={S.td}>Query ambígua / sub-especificada</td>
              <td style={S.td}>+N LLM calls</td>
              <td style={S.td}>+10–20% recall</td>
            </tr>
            <tr>
              <td style={S.td}>Parent-child</td>
              <td style={S.td}>Contexto insuficiente para LLM</td>
              <td style={S.td}>+índice extra</td>
              <td style={S.td}>+faithfulness</td>
            </tr>
            <tr>
              <td style={S.td}>Reranking</td>
              <td style={S.td}>Ranking impreciso do bi-encoder</td>
              <td style={S.td}>+100–300 ms</td>
              <td style={S.td}>+5–20% precision</td>
            </tr>
            <tr>
              <td style={S.td}>Hybrid (RRF)</td>
              <td style={S.td}>Falhas em termos exactos / sinónimos</td>
              <td style={S.td}>+BM25 index</td>
              <td style={S.td}>+5–10% recall+precision</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ── Secção 8: RAGAS ──────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.h2}>8. Avaliação — RAGAS Framework</h2>
        <p style={S.p}>
          Avaliar sistemas RAG é complexo porque há dois componentes a medir: a
          qualidade do <strong>retrieval</strong>
          (os chunks certos foram recuperados?) e a qualidade da{' '}
          <strong>generation</strong> (o LLM usou bem os chunks?). O framework{' '}
          <strong>RAGAS</strong> (RAG Assessment) automatiza esta avaliação
          usando um LLM como juiz.
        </p>

        <div style={S.code}>{ragasCode}</div>

        <h3 style={S.h3}>As 4 Métricas RAGAS</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Métrica</th>
              <th style={S.th}>Definição</th>
              <th style={S.th}>Fórmula / Método</th>
              <th style={S.th}>Componente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>
                <strong>Faithfulness</strong>
              </td>
              <td style={S.td}>
                Cada claim da resposta está suportado pelo contexto recuperado?
              </td>
              <td style={S.td}>
                <InlineMath
                  math={
                    '\\frac{|\\text{claims suportados}|}{|\\text{claims totais}|}'
                  }
                />
              </td>
              <td style={S.td}>Generation</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Answer Relevancy</strong>
              </td>
              <td style={S.td}>
                A resposta gerada responde de facto à pergunta original?
              </td>
              <td style={S.td}>
                Média cosine sim entre perguntas sintéticas geradas a partir da
                resposta e a pergunta original
              </td>
              <td style={S.td}>Generation</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Context Precision</strong>
              </td>
              <td style={S.td}>
                Os chunks mais relevantes estão no topo do ranking recuperado?
              </td>
              <td style={S.td}>
                <InlineMath
                  math={'\\frac{1}{K}\\sum_{k=1}^{K} P@k \\cdot \\text{rel}(k)'}
                />
              </td>
              <td style={S.td}>Retrieval</td>
            </tr>
            <tr>
              <td style={S.td}>
                <strong>Context Recall</strong>
              </td>
              <td style={S.td}>
                Toda a informação necessária para responder está nos chunks
                recuperados?
              </td>
              <td style={S.td}>
                <InlineMath
                  math={
                    '\\frac{|\\text{frases do ground truth atribuíveis ao contexto}|}{|\\text{frases do ground truth}|}'
                  }
                />
              </td>
              <td style={S.td}>Retrieval</td>
            </tr>
          </tbody>
        </table>

        <h3 style={S.h3}>Interpretação dos Scores</h3>
        <div style={S.highlight}>
          <strong>Faithfulness &lt; 0.7:</strong> hallucination frequente — o
          LLM está a gerar além do contexto. Solução: prompt mais restritivo,
          model upgrade, ou parent-child para mais contexto.
          <br />
          <br />
          <strong>Context Recall &lt; 0.7:</strong> o retrieval não encontra os
          chunks certos. Solução: rever chunking strategy, aumentar k, ou
          implementar HyDE / multi-query.
          <br />
          <br />
          <strong>Context Precision &lt; 0.7:</strong> muitos chunks
          irrelevantes entram no contexto. Solução: reranking cross-encoder,
          metadata filtering, ou reduzir k com retrieval de melhor qualidade.
        </div>

        <div style={S.note}>
          RAGAS requer um LLM "juiz" (tipicamente GPT-4o) para avaliar as
          métricas — o que tem custo. Para avaliação contínua em produção,
          amostragem de 5–10% das queries é o padrão recomendado. Alternativa
          open-source: TruLens (usa modelos locais como juízes).
        </div>
      </div>
    </div>
  );
}
