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
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: `rgba(249,115,22,0.10)`, borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

/* ── SVG: Q, K, V diagram ── */
function QKVDiagram() {
  return (
    <div style={S.diagram}>
      <p style={{ ...S.p, marginBottom: '1rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
        Scaled Dot-Product Attention — fluxo de dados
      </p>
      <svg viewBox="0 0 640 260" width="100%" style={{ display: 'block' }}>
        {/* Input X */}
        <rect x="270" y="10" width="100" height="36" rx="6" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
        <text x="320" y="33" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">Input X</text>

        {/* Projection arrows from X */}
        <line x1="320" y1="46" x2="100" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
        <line x1="320" y1="46" x2="320" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
        <line x1="320" y1="46" x2="540" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />

        {/* W labels */}
        <text x="138" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">W_Q</text>
        <text x="342" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">W_K</text>
        <text x="492" y="74" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">W_V</text>

        {/* Q box */}
        <rect x="50" y="90" width="100" height="36" rx="6" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="100" y="113" textAnchor="middle" fill="#f59e0b" fontSize="13" fontWeight="700">Q (Query)</text>

        {/* K box */}
        <rect x="270" y="90" width="100" height="36" rx="6" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="1.5" />
        <text x="320" y="113" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="700">K (Key)</text>

        {/* V box */}
        <rect x="490" y="90" width="100" height="36" rx="6" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="1.5" />
        <text x="540" y="113" textAnchor="middle" fill="#f97316" fontSize="13" fontWeight="700">V (Value)</text>

        {/* MatMul QK^T */}
        <line x1="100" y1="126" x2="200" y2="168" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
        <line x1="320" y1="126" x2="240" y2="168" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />

        <rect x="160" y="168" width="120" height="34" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="220" y="185" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="600">MatMul (QKᵀ)</text>
        <text x="220" y="197" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">÷ √d_k</text>

        {/* Softmax */}
        <line x1="220" y1="202" x2="220" y2="226" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />
        <rect x="160" y="226" width="120" height="28" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="220" y="245" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="600">Softmax</text>

        {/* V arrow to output */}
        <line x1="490" y1="124" x2="410" y2="240" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />

        {/* Softmax → Output arrow */}
        <line x1="280" y1="240" x2="308" y2="240" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr)" />

        {/* Output */}
        <rect x="310" y="226" width="100" height="28" rx="6" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
        <text x="360" y="245" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">Output</text>

        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--text-secondary)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

/* ── SVG: PE heat map ── */
function PEHeatmap() {
  const rows = 16;
  const cols = 16;
  const cellW = 28;
  const cellH = 22;
  const offsetX = 36;
  const offsetY = 20;

  const cells = [];
  for (let pos = 0; pos < rows; pos++) {
    for (let i = 0; i < cols; i++) {
      const val = Math.sin(pos / Math.pow(10000, (2 * i) / 128));
      const norm = (val + 1) / 2;
      const r = Math.round(251 - norm * 57);
      const g = Math.round(146 - norm * 120);
      const b = Math.round(60  - norm * 50);
      const a  = (0.12 + norm * 0.83).toFixed(2);
      cells.push(
        <rect
          key={`${pos}-${i}`}
          x={offsetX + i * cellW}
          y={offsetY + pos * cellH}
          width={cellW - 2}
          height={cellH - 2}
          rx="2"
          fill={`rgba(${r},${g},${b},${a})`}
        />
      );
    }
  }

  const posLabels = [];
  for (let pos = 0; pos < rows; pos += 4) {
    posLabels.push(
      <text key={pos} x={offsetX - 6} y={offsetY + pos * cellH + 14} textAnchor="end" fill="var(--text-secondary)" fontSize="10">{pos}</text>
    );
  }

  const dimLabels = [];
  for (let i = 0; i < cols; i += 4) {
    dimLabels.push(
      <text key={i} x={offsetX + i * cellW + cellW / 2} y={offsetY - 6} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">{i}</text>
    );
  }

  return (
    <div style={S.diagram}>
      <p style={{ ...S.p, marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
        Positional Encoding sinusoidal — posições 0–15, dimensões 0–15
      </p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '0.75rem' }}>
        Intensidade = valor de sin(pos / 10000^(2i/d_model)) normalizado
      </p>
      <svg viewBox={`0 0 ${offsetX + cols * cellW + 20} ${offsetY + rows * cellH + 20}`} width="100%" style={{ display: 'block' }}>
        {posLabels}
        {dimLabels}
        {cells}
        <text x={offsetX - 28} y={offsetY + rows * cellH / 2} textAnchor="middle" fill="var(--text-secondary)" fontSize="10"
          transform={`rotate(-90, ${offsetX - 28}, ${offsetY + rows * cellH / 2})`}>posição</text>
        <text x={offsetX + cols * cellW / 2} y={offsetY + rows * cellH + 16} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">dimensão</text>
      </svg>
    </div>
  );
}

/* ── SVG: Encoder / Decoder / Decoder-only variants ── */
function ArchDiagram() {
  const boxW = 150;
  const boxH = 36;
  const gap = 30;

  const layerStyle = (fill, stroke) => ({ fill, stroke, strokeWidth: 1.5 });

  return (
    <div style={S.diagram}>
      <p style={{ ...S.p, marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
        Três variantes da arquitectura Transformer
      </p>
      <svg viewBox="0 0 700 320" width="100%" style={{ display: 'block' }}>

        {/* ── ENCODER-ONLY (BERT) ── */}
        <text x="90" y="18" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Encoder-only (BERT)</text>
        {/* Input Embeddings + PE */}
        <rect x="15" y="28" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="90" y="51" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Embeddings + PE</text>
        {/* Self-Attn (bidirecional) */}
        <line x1="90" y1="64" x2="90" y2="78" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="15" y="78" width={boxW} height={boxH} rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1.5" />
        <text x="90" y="101" textAnchor="middle" fill={color} fontSize="11" fontWeight="600">Self-Attn (bidirecional)</text>
        {/* Add & Norm */}
        <line x1="90" y1="114" x2="90" y2="128" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="15" y="128" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="90" y="151" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Add & Norm</text>
        {/* FFN */}
        <line x1="90" y1="164" x2="90" y2="178" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="15" y="178" width={boxW} height={boxH} rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
        <text x="90" y="201" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Feed-Forward</text>
        {/* Add & Norm 2 */}
        <line x1="90" y1="214" x2="90" y2="228" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="15" y="228" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="90" y="251" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Add & Norm</text>
        {/* Output */}
        <line x1="90" y1="264" x2="90" y2="278" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="15" y="278" width={boxW} height={boxH} rx="5" fill="#f97316" fillOpacity="0.12" stroke="#f97316" strokeWidth="1.5" />
        <text x="90" y="301" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="600">Representação</text>

        {/* ── DECODER-ONLY (GPT) ── */}
        <text x="360" y="18" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Decoder-only (GPT)</text>
        <rect x="285" y="28" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="360" y="51" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Embeddings + PE</text>
        <line x1="360" y1="64" x2="360" y2="78" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="285" y="78" width={boxW} height={boxH} rx="5" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="360" y="97" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">Masked Self-Attn</text>
        <text x="360" y="109" textAnchor="middle" fill="#f59e0b" fontSize="9">(causal)</text>
        <line x1="360" y1="114" x2="360" y2="128" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="285" y="128" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="360" y="151" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Add & Norm</text>
        <line x1="360" y1="164" x2="360" y2="178" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="285" y="178" width={boxW} height={boxH} rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
        <text x="360" y="201" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Feed-Forward</text>
        <line x1="360" y1="214" x2="360" y2="228" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="285" y="228" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="360" y="251" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Add & Norm</text>
        <line x1="360" y1="264" x2="360" y2="278" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="285" y="278" width={boxW} height={boxH} rx="5" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="360" y="301" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">Próximo token</text>

        {/* ── ENCODER-DECODER (T5) ── */}
        <text x="598" y="18" textAnchor="middle" fill={color} fontSize="12" fontWeight="700">Enc-Dec (T5)</text>
        <rect x="523" y="28" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="598" y="47" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Encoder</text>
        <text x="598" y="58" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(bidirecional)</text>
        <line x1="598" y1="64" x2="598" y2="78" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="523" y="78" width={boxW} height={boxH} rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
        <text x="598" y="97" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="600">Masked Self-Attn</text>
        <text x="598" y="109" textAnchor="middle" fill="#f97316" fontSize="9">(decoder)</text>
        <line x1="598" y1="114" x2="598" y2="128" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="523" y="128" width={boxW} height={boxH} rx="5" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1.5" />
        <text x="598" y="147" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="600">Cross-Attention</text>
        <text x="598" y="158" textAnchor="middle" fill="#f97316" fontSize="9">(dec atende enc)</text>
        <line x1="598" y1="164" x2="598" y2="178" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="523" y="178" width={boxW} height={boxH} rx="5" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <text x="598" y="201" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Add & Norm</text>
        <line x1="598" y1="214" x2="598" y2="228" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="523" y="228" width={boxW} height={boxH} rx="5" fill="rgba(249,115,22,0.10)" stroke={color} strokeWidth="1" />
        <text x="598" y="251" textAnchor="middle" fill="var(--text-primary)" fontSize="11">Feed-Forward</text>
        <line x1="598" y1="264" x2="598" y2="278" stroke="var(--text-secondary)" strokeWidth="1.5" />
        <rect x="523" y="278" width={boxW} height={boxH} rx="5" fill="#f97316" fillOpacity="0.12" stroke="#f97316" strokeWidth="1.5" />
        <text x="598" y="301" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="600">Output seq2seq</text>
      </svg>
    </div>
  );
}

export default function LLM1() {
  return (
    <div style={S.page}>
      <Link to="/llm" style={S.back}><ArrowLeft size={16} /> Voltar a LLMs & Agents</Link>

      <div style={S.tag}>MÓDULO 01</div>
      <h1 style={S.h1}>Arquitectura Transformer</h1>
      <p style={S.lead}>
        O Transformer revolucionou o processamento de linguagem natural ao eliminar a recorrência e basear-se inteiramente em mecanismos de atenção.
        Publicado em 2017 no artigo <em>"Attention is All You Need"</em> (Vaswani et al.), tornou-se a fundação de todos os grandes modelos de linguagem modernos —
        de BERT ao GPT-4, de T5 ao Llama. Compreender a sua arquitectura é compreender como os LLMs pensam.
      </p>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 1 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Motivação — Limitações das RNNs</h2>

        <p style={S.p}>
          Antes dos Transformers, as redes recorrentes (RNN, LSTM, GRU) dominavam as tarefas de sequência.
          O seu mecanismo de <strong>estado oculto</strong> propagava informação passo a passo ao longo da sequência — elegante, mas com dois problemas estruturais sérios.
        </p>

        <h3 style={S.h3}>Vanishing Gradient em Backpropagation Through Time</h3>
        <p style={S.p}>
          No treino de uma RNN, o gradiente é calculado recursivamente por <em>backpropagation through time</em> (BPTT).
          Para uma sequência de comprimento <InlineMath math={"T"} />, o gradiente de cada parâmetro envolve produtos matriciais ao longo de <InlineMath math={"T"} /> passos:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\frac{\\partial L}{\\partial W} = \\sum_{t=1}^{T} \\frac{\\partial L_t}{\\partial h_t} \\prod_{k=t}^{T-1} \\frac{\\partial h_{k+1}}{\\partial h_k}"} />
        </div>
        <p style={S.p}>
          Se os valores singulares de <InlineMath math={"\\partial h_{k+1}/\\partial h_k"} /> forem inferiores a 1, o produto decai exponencialmente —
          o gradiente <strong>desaparece</strong> antes de atingir os primeiros tokens. Se forem superiores a 1, <strong>explode</strong>.
          Em ambos os casos, o modelo não consegue aprender dependências de longo alcance (e.g., ligar "o pronome" ao "sujeito" 50 palavras atrás).
        </p>

        <h3 style={S.h3}>Processamento Sequencial — Impossibilidade de Paralelizar</h3>
        <p style={S.p}>
          A RNN processa o token <InlineMath math={"t"} /> apenas depois de calcular <InlineMath math={"h_{t-1}"} />.
          Esta dependência causal impede qualquer paralelização durante o <em>treino</em>: GPU ou TPU ficam subutilizados, e sequências longas tornam o processo proibitivamente lento.
        </p>

        <h3 style={S.h3}>O LSTM Mitiga, Mas Não Resolve</h3>
        <p style={S.p}>
          O <strong>Long Short-Term Memory</strong> (Hochreiter & Schmidhuber, 1997) introduziu gates (input, forget, output) e uma <em>cell state</em> que permite gradientes fluirem
          mais facilmente ao longo do tempo. Mitigou o vanishing gradient, mas:
        </p>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.9 }}>
            <li>Continuou a ser <strong>sequencial</strong> — o bottleneck de paralelização permaneceu.</li>
            <li>A capacidade de capturar dependências muito longas ainda era limitada pelo comprimento da cell state.</li>
            <li>Hiperparâmetros de gates tornaram o modelo mais complexo e difícil de escalar.</li>
          </ul>
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Característica</th>
              <th style={S.th}>RNN simples</th>
              <th style={S.th}>LSTM/GRU</th>
              <th style={S.th}>Transformer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Vanishing gradient</td>
              <td style={S.td}>Grave</td>
              <td style={S.td}>Mitigado</td>
              <td style={S.td}>Não aplicável</td>
            </tr>
            <tr>
              <td style={S.td}>Paralelização (treino)</td>
              <td style={S.td}>Sequencial</td>
              <td style={S.td}>Sequencial</td>
              <td style={S.td}>Total</td>
            </tr>
            <tr>
              <td style={S.td}>Dependências longas</td>
              <td style={S.td}>Difícil</td>
              <td style={S.td}>Parcial</td>
              <td style={S.td}>Directa via atenção</td>
            </tr>
            <tr>
              <td style={S.td}>Complexidade por camada</td>
              <td style={S.td}><InlineMath math={"O(n \\cdot d^2)"} /></td>
              <td style={S.td}><InlineMath math={"O(n \\cdot d^2)"} /></td>
              <td style={S.td}><InlineMath math={"O(n^2 \\cdot d)"} /></td>
            </tr>
            <tr>
              <td style={S.td}>Interpretabilidade</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Baixa</td>
              <td style={S.td}>Attention weights visíveis</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          A solução do Transformer é radical: abandonar completamente a recorrência. Em vez de propagar estado, cada posição atende directamente a todas as outras — em paralelo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 2 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Self-Attention — o mecanismo central</h2>

        <p style={S.p}>
          O mecanismo de <strong>self-attention</strong> permite que cada token "olhe" para todos os outros tokens e decida quão relevantes são para a sua representação.
          O ponto de partida é a matriz de input <InlineMath math={"X \\in \\mathbb{R}^{n \\times d_{\\text{model}}}"} />, onde <InlineMath math={"n"} /> é o comprimento da sequência.
        </p>

        <h3 style={S.h3}>Projeções Lineares: Q, K, V</h3>
        <p style={S.p}>
          A matriz <InlineMath math={"X"} /> é projectada em três matrizes distintas através de pesos aprendidos:
        </p>
        <div style={S.math}>
          <BlockMath math={"Q = X W^Q, \\quad K = X W^K, \\quad V = X W^V"} />
        </div>
        <div style={S.highlight}>
          <strong style={{ color: '#f97316' }}>Query (Q):</strong> "O que estou à procura?" — representa a pergunta do token actual.<br />
          <strong style={{ color: '#f97316' }}>Key (K):</strong> "O que tenho para oferecer?" — representa o conteúdo de cada token como candidato.<br />
          <strong style={{ color: '#f97316' }}>Value (V):</strong> "O que vou dar se for seleccionado?" — a informação efectivamente transmitida.
        </div>

        <h3 style={S.h3}>Scaled Dot-Product Attention</h3>
        <p style={S.p}>A fórmula central é:</p>
        <div style={S.math}>
          <BlockMath math={"\\text{Attention}(Q,K,V) = \\text{softmax}\\!\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right)V"} />
        </div>

        <p style={S.p}>
          O produto <InlineMath math={"QK^\\top"} /> gera uma matriz <InlineMath math={"n \\times n"} /> de scores — cada entrada <InlineMath math={"(i,j)"} /> mede a afinidade entre o token <InlineMath math={"i"} /> e o token <InlineMath math={"j"} />.
          O <strong>softmax</strong> converte esses scores em pesos de atenção que somam 1. Finalmente, os pesos são usados para fazer uma média ponderada dos Values.
        </p>

        <h3 style={S.h3}>Por que dividir por <InlineMath math={"\\sqrt{d_k}"} />?</h3>
        <p style={S.p}>
          Sem o factor de escala, o dot-product <InlineMath math={"q \\cdot k"} /> tende a crescer em magnitude com <InlineMath math={"d_k"} />
          (a variância é <InlineMath math={"d_k"} /> se Q e K forem normais padronizadas).
          Scores muito grandes empurram o softmax para regiões de gradiente quase nulo — os pesos de atenção colapsam para distribuições quase one-hot, e o treino estagna.
          Dividir por <InlineMath math={"\\sqrt{d_k}"} /> mantém a variância unitária antes do softmax.
        </p>
        <div style={S.note}>
          Para <InlineMath math={"d_k = 64"} /> (típico com 8 heads num modelo de dimensão 512), dividimos por 8. Sem este factor, os scores seriam ~8× maiores e o softmax saturaria.
        </div>

        <h3 style={S.h3}>Exemplo concreto: "O gato comeu o rato"</h3>
        <p style={S.p}>
          Considere a frase tokenizada em 5 tokens: [O, gato, comeu, o, rato].
          Quando calculamos a atenção para o token "comeu" (posição 2):
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>O seu <strong>Q</strong> faz dot-product com o <strong>K</strong> de cada token.</li>
          <li>Score alto com "gato" (sujeito do verbo) e "rato" (objeto) — o modelo aprende relações gramaticais.</li>
          <li>Os pesos de atenção resultantes determinam quanto de cada <strong>V</strong> é incorporado na representação de "comeu".</li>
          <li>A representação final de "comeu" contém informação contextual de toda a frase.</li>
        </ul>

        <QKVDiagram />
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 3 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Multi-Head Attention</h2>

        <p style={S.p}>
          Um único mecanismo de atenção aprende um único tipo de relação. O Transformer usa <strong>múltiplas cabeças</strong> (<em>heads</em>) em paralelo,
          cada uma com os seus próprios pesos de projeção <InlineMath math={"W^Q_i, W^K_i, W^V_i"} />.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\text{MultiHead}(Q,K,V) = \\text{Concat}(\\text{head}_1, \\ldots, \\text{head}_h)\\, W^O"} />
          <div style={{ marginTop: '0.75rem' }}>
            <BlockMath math={"\\text{onde} \\quad \\text{head}_i = \\text{Attention}(QW^Q_i,\\, KW^K_i,\\, VW^V_i)"} />
          </div>
        </div>

        <h3 style={S.h3}>O que cada cabeça aprende?</h3>
        <p style={S.p}>
          As heads especializam-se em diferentes tipos de relação linguística. Estudos de interpretabilidade (e.g., Clark et al., 2019) mostram que:
        </p>
        <div style={S.highlight}>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 2 }}>
            <li><strong>Head 1:</strong> atenção posicional — tokens adjacentes.</li>
            <li><strong>Head 2:</strong> relação sujeito-verbo.</li>
            <li><strong>Head 3:</strong> co-referências e pronomes.</li>
            <li><strong>Head 4–8:</strong> padrões sintácticos e semânticos variados.</li>
          </ul>
        </div>
        <p style={S.p}>
          Após a concatenação, a projeção <InlineMath math={"W^O \\in \\mathbb{R}^{h d_v \\times d_{\\text{model}}}"} /> combina as representações das diferentes heads num espaço unificado.
        </p>

        <h3 style={S.h3}>Dimensões típicas</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Parâmetro</th>
              <th style={S.th}>Notação</th>
              <th style={S.th}>Transformer base</th>
              <th style={S.th}>Transformer large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Dimensão do modelo</td>
              <td style={S.td}><InlineMath math={"d_{\\text{model}}"} /></td>
              <td style={S.td}>512</td>
              <td style={S.td}>1024</td>
            </tr>
            <tr>
              <td style={S.td}>Número de heads</td>
              <td style={S.td}><InlineMath math={"h"} /></td>
              <td style={S.td}>8</td>
              <td style={S.td}>16</td>
            </tr>
            <tr>
              <td style={S.td}>Dimensão por head</td>
              <td style={S.td}><InlineMath math={"d_k = d_v = d_{\\text{model}}/h"} /></td>
              <td style={S.td}>64</td>
              <td style={S.td}>64</td>
            </tr>
            <tr>
              <td style={S.td}>Parâmetros por head</td>
              <td style={S.td}><InlineMath math={"3 \\times d_{\\text{model}} \\times d_k"} /></td>
              <td style={S.td}>98 304</td>
              <td style={S.td}>196 608</td>
            </tr>
          </tbody>
        </table>

        <div style={S.note}>
          Com <InlineMath math={"d_k = 64"} />, cada head trabalha numa projeção de baixa dimensão — mais eficiente e menos propensa a overfitting do que uma única head de dimensão completa.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 4 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Positional Encoding</h2>

        <p style={S.p}>
          A self-attention é <strong>invariante à permutação</strong>: se trocarmos a ordem dos tokens, os scores de atenção não mudam (só os índices).
          O modelo sem positional encoding não distingue "o gato comeu o rato" de "o rato comeu o gato".
          É necessário injectar informação sobre a posição de cada token.
        </p>

        <h3 style={S.h3}>PE Sinusoidal (Vaswani et al., 2017)</h3>
        <p style={S.p}>
          O artigo original usa funções sinusoidais com frequências diferentes para cada dimensão:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\text{PE}(\\text{pos}, 2i) = \\sin\\!\\left(\\frac{\\text{pos}}{10000^{2i/d_{\\text{model}}}}\\right)"} />
          <div style={{ marginTop: '0.5rem' }}>
            <BlockMath math={"\\text{PE}(\\text{pos}, 2i+1) = \\cos\\!\\left(\\frac{\\text{pos}}{10000^{2i/d_{\\text{model}}}}\\right)"} />
          </div>
        </div>
        <p style={S.p}>
          Cada posição <InlineMath math={"\\text{pos}"} /> recebe um vector único de dimensão <InlineMath math={"d_{\\text{model}}"} />, somado ao embedding do token.
          As frequências variam desde muito rápida (dimensões baixas) até muito lenta (dimensões altas), criando uma espécie de código binário contínuo.
        </p>

        
          <strong>Propriedade-chave:</strong> <InlineMath math={"\\text{PE}(\\text{pos}+k)"} /> pode ser expresso como transformação linear de <InlineMath math={"\\text{PE}(\\text{pos})"} />.
          Isso facilita ao modelo aprender offsets relativos — "o token a 3 posições de distância" — sem ver exemplos de todas as distâncias possíveis.
        

        <PEHeatmap />

        <h3 style={S.h3}>Variantes modernas</h3>
        <p style={S.p}>
          Modelos modernos usam abordagens mais sofisticadas:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Método</th>
              <th style={S.th}>Como funciona</th>
              <th style={S.th}>Modelos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Sinusoidal</td>
              <td style={S.td}>Soma de senos/cossenos ao embedding</td>
              <td style={S.td}>Transformer original</td>
            </tr>
            <tr>
              <td style={S.td}>Learned Absolute</td>
              <td style={S.td}>Embedding de posição aprendido por gradiente</td>
              <td style={S.td}>BERT, GPT-2</td>
            </tr>
            <tr>
              <td style={S.td}>RoPE</td>
              <td style={S.td}>Rotação de Q e K em função da posição relativa</td>
              <td style={S.td}>Llama, Mistral, Falcon</td>
            </tr>
            <tr>
              <td style={S.td}>ALiBi</td>
              <td style={S.td}>Penalidade linear nos scores de atenção</td>
              <td style={S.td}>MPT, BLOOM</td>
            </tr>
          </tbody>
        </table>
        <div style={S.note}>
          <strong>RoPE (Rotary Position Embedding)</strong> é o método preferido em modelos open-source modernos por oferecer melhor generalização para sequências mais longas do que as vistas durante o treino.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 5 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Feed-Forward, Layer Norm e Residual Connections</h2>

        <p style={S.p}>
          Cada camada do Transformer tem dois sub-blocos: o Multi-Head Attention e uma rede <strong>Feed-Forward</strong> por posição.
          Ambos são envolvidos por <strong>residual connections</strong> e <strong>Layer Normalization</strong>.
        </p>

        <h3 style={S.h3}>Feed-Forward Network (FFN)</h3>
        <p style={S.p}>
          Após a atenção agregar contexto de toda a sequência, o FFN processa cada posição <em>independentemente</em>:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\text{FFN}(x) = \\max(0,\\, xW_1 + b_1)\\, W_2 + b_2"} />
        </div>
        <p style={S.p}>
          A activação ReLU (ou, em modelos modernos, <strong>SwiGLU/GeLU</strong>) introduz não-linearidade.
          A dimensão interna <InlineMath math={"d_{\\text{ff}}"} /> é tipicamente 4× a dimensão do modelo:
        </p>
        
          <strong>Transformer base:</strong> <InlineMath math={"d_{\\text{model}} = 512 \\to d_{\\text{ff}} = 2048 \\to d_{\\text{model}} = 512"} /><br />
          <strong>BERT-base:</strong> <InlineMath math={"768 \\to 3072 \\to 768"} /><br />
          <strong>GPT-3:</strong> <InlineMath math={"12288 \\to 49152 \\to 12288"} />
        
        <p style={S.p}>
          Pensa-se que o FFN funciona como memória associativa: as expansões de 4× permitem ao modelo "memorizar" padrões factuais durante o pré-treino.
          Investigação recente (Geva et al., 2021) sugere que os neurónios do FFN armazenam pares (key, value) de conhecimento factual.
        </p>

        <h3 style={S.h3}>Add & Norm: Residual Connections + Layer Normalization</h3>
        <p style={S.p}>
          Cada sub-camada usa a fórmula <strong>Add & Norm</strong>:
        </p>
        <div style={S.math}>
          <BlockMath math={"\\text{output} = \\text{LayerNorm}(x + \\text{Sublayer}(x))"} />
        </div>
        <p style={S.p}>
          As <strong>residual connections</strong> (He et al., 2016, das ResNets) têm duas funções críticas:
        </p>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Permitem gradientes fluirem <em>directamente</em> do output para camadas muito anteriores — essencial em modelos com 96+ camadas.</li>
          <li>Inicializam efectivamente cada sub-camada como identidade (<InlineMath math={"\\text{Sublayer}(x) \\approx 0"} /> no início do treino).</li>
        </ul>
        <p style={S.p}>
          A <strong>Layer Normalization</strong> normaliza ao longo da dimensão do modelo (não do batch), tornando o treino estável independentemente do tamanho do batch.
          Modelos modernos usam frequentemente <em>Pre-LN</em> (normalizar antes da sub-camada) em vez de <em>Post-LN</em> (normalizar depois) por maior estabilidade no treino de modelos grandes.
        </p>

        <div style={S.code}>{`# Pseudocódigo de uma camada Transformer completa
def transformer_layer(x, mask=None):
    # Sub-camada 1: Multi-Head Attention
    attn_out = multi_head_attention(x, x, x, mask)
    x = layer_norm(x + attn_out)          # Add & Norm

    # Sub-camada 2: Feed-Forward
    ffn_out = ffn(x)
    x = layer_norm(x + ffn_out)           # Add & Norm

    return x`}</div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 6 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>6. Encoder vs. Decoder vs. Decoder-only</h2>

        <p style={S.p}>
          O Transformer original (Vaswani 2017) tinha uma arquitectura encoder-decoder para tradução automática.
          Os LLMs modernos especializam-se numa das três variantes, consoante a tarefa alvo.
        </p>

        <ArchDiagram />

        <h3 style={S.h3}>Encoder-only: Representações Bidirecionais</h3>
        <p style={S.p}>
          O encoder aplica atenção <strong>bidirecional</strong> — cada token atende a todos os outros, passados e futuros.
          Isto produz representações contextuais ricas, ideais para compreensão de linguagem.
          O <strong>BERT</strong> (Devlin et al., 2018) treinou com <em>Masked Language Modeling</em> (MLM): 15% dos tokens são mascarados e o modelo aprende a prevê-los a partir do contexto bidireccional.
        </p>
        <div style={S.highlight}>
          <strong>Casos de uso:</strong> classificação de texto, NER, extracção de informação, embeddings semânticos, question answering extractivo.
        </div>

        <h3 style={S.h3}>Decoder-only: Geração Autoregressiva</h3>
        <p style={S.p}>
          O decoder usa <strong>masked self-attention</strong> (causal mask): o token na posição <InlineMath math={"t"} /> só pode atender a posições <InlineMath math={"\\leq t"} />.
          A máscara é uma matriz triangular inferior aplicada antes do softmax (<InlineMath math={"-\\infty"} /> nas posições futuras).
          O modelo gera texto <em>autoregressivamente</em>: prediz um token de cada vez, condicionado em todos os anteriores.
        </p>
        <div style={S.highlight}>
          <strong>Casos de uso:</strong> geração de texto, chat, code completion, raciocínio. Exemplos: GPT-2/3/4, Llama, Mistral, Falcon, Command R.
        </div>

        <h3 style={S.h3}>Encoder-Decoder: Seq2Seq com Cross-Attention</h3>
        <p style={S.p}>
          O encoder processa o input bidirecionalmente. O decoder gera autoregressivamente, mas usa também <strong>cross-attention</strong>:
          os Queries vêm do decoder, os Keys e Values vêm do encoder. Isto permite ao decoder "consultar" a representação completa do input em cada passo.
        </p>
        <div style={S.highlight}>
          <strong>Casos de uso:</strong> tradução automática, sumarização, geração condicionada, Q&A generativo. Exemplos: T5, BART, mT5, mBART.
        </div>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Variante</th>
              <th style={S.th}>Atenção</th>
              <th style={S.th}>Pré-treino</th>
              <th style={S.th}>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Encoder-only</td>
              <td style={S.td}>Bidirecional</td>
              <td style={S.td}>MLM, NSP</td>
              <td style={S.td}>BERT, RoBERTa, DeBERTa</td>
            </tr>
            <tr>
              <td style={S.td}>Decoder-only</td>
              <td style={S.td}>Causal (masked)</td>
              <td style={S.td}>Causal LM</td>
              <td style={S.td}>GPT-4, Llama 3, Mistral, Gemma</td>
            </tr>
            <tr>
              <td style={S.td}>Encoder-Decoder</td>
              <td style={S.td}>Bidirecional + Cross</td>
              <td style={S.td}>Span corruption</td>
              <td style={S.td}>T5, BART, mT5, FLAN-T5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 7 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>7. Complexidade e Escalamento</h2>

        <h3 style={S.h3}>Complexidade Quadrática da Atenção</h3>
        <p style={S.p}>
          O calculo de <InlineMath math={"QK^\\top"} /> requer <InlineMath math={"O(n^2 \\cdot d)"} /> operações e <InlineMath math={"O(n^2)"} /> memória por camada,
          onde <InlineMath math={"n"} /> é o comprimento da sequência. Para contextos longos (e.g., 100k tokens), isto torna-se proibitivo.
        </p>

        <div style={S.math}>
          <BlockMath math={"\\text{Memória atenção} = O(n^2 \\cdot h) \\quad \\text{(n = seq length, h = heads)}"} />
        </div>

        <h3 style={S.h3}>Flash Attention</h3>
        <p style={S.p}>
          <strong>Flash Attention</strong> (Dao et al., 2022) reformula o cálculo de atenção em blocos (<em>tiling</em>),
          nunca materializando a matriz <InlineMath math={"n \\times n"} /> completa em HBM (High Bandwidth Memory da GPU).
          O resultado é matematicamente idêntico, mas a memória cai de <InlineMath math={"O(n^2)"} /> para <InlineMath math={"O(n)"} />,
          com speedups de 2–4× em prática.
        </p>
        <div style={S.note}>
          Flash Attention 2 e 3 optimizaram ainda mais o paralelismo e uso de Tensor Cores, e são usados por praticamente todos os frameworks LLM modernos (vLLM, TGI, llama.cpp).
        </div>

        <h3 style={S.h3}>Scaling Laws</h3>
        <p style={S.p}>
          Kaplan et al. (2020) descobriram que a loss de um LLM segue <strong>power laws</strong> previsíveis em função do número de parâmetros <InlineMath math={"N"} />,
          do volume de dados <InlineMath math={"D"} /> e do compute <InlineMath math={"C"} />:
        </p>
        <div style={S.math}>
          <BlockMath math={"L(N) \\propto N^{-\\alpha}, \\quad \\alpha \\approx 0.076"} />
        </div>
        <p style={S.p}>
          Chinchilla (Hoffmann et al., 2022) corrigiu as scaling laws: o número óptimo de tokens de treino deve ser ~20× o número de parâmetros.
          GPT-3 foi treinado com poucos dados para o seu tamanho; Llama 2 e 3 corrigiram isso ao treinar com muito mais tokens.
        </p>

        <h3 style={S.h3}>Evolução dos Modelos</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Modelo</th>
              <th style={S.th}>Parâmetros</th>
              <th style={S.th}>Camadas</th>
              <th style={S.th}>Heads</th>
              <th style={S.th}><InlineMath math={"d_{\\text{model}}"} /></th>
              <th style={S.th}>Tokens treino</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>GPT-2 (2019)</td>
              <td style={S.td}>1.5B</td>
              <td style={S.td}>48</td>
              <td style={S.td}>25</td>
              <td style={S.td}>1600</td>
              <td style={S.td}>~40B</td>
            </tr>
            <tr>
              <td style={S.td}>GPT-3 (2020)</td>
              <td style={S.td}>175B</td>
              <td style={S.td}>96</td>
              <td style={S.td}>96</td>
              <td style={S.td}>12288</td>
              <td style={S.td}>300B</td>
            </tr>
            <tr>
              <td style={S.td}>Llama 2 70B (2023)</td>
              <td style={S.td}>70B</td>
              <td style={S.td}>80</td>
              <td style={S.td}>64</td>
              <td style={S.td}>8192</td>
              <td style={S.td}>2T</td>
            </tr>
            <tr>
              <td style={S.td}>Llama 3 70B (2024)</td>
              <td style={S.td}>70B</td>
              <td style={S.td}>80</td>
              <td style={S.td}>64</td>
              <td style={S.td}>8192</td>
              <td style={S.td}>15T</td>
            </tr>
            <tr>
              <td style={S.td}>GPT-4 (est. 2023)</td>
              <td style={S.td}>~1.7T (MoE)</td>
              <td style={S.td}>—</td>
              <td style={S.td}>—</td>
              <td style={S.td}>—</td>
              <td style={S.td}>—</td>
            </tr>
          </tbody>
        </table>

        <div style={S.highlight}>
          <strong>Mixture of Experts (MoE):</strong> uma evolução do Transformer onde o FFN é substituído por vários "especialistas" — só um subconjunto (e.g., 2 de 8) é activado por token.
          Isto permite escalar o número de parâmetros sem proporcional aumento de compute. Usado em GPT-4, Mixtral, e Gemini.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SYNTHESIS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={S.section}>
        <h2 style={S.h2}>Síntese do Módulo 01</h2>

        <p style={S.p}>
          A arquitectura Transformer representou uma ruptura com o paradigma recorrente — não uma evolução incremental, mas uma substituição total.
          Os seus componentes interagem de forma elegante:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={S.highlight}>
            <strong style={{ color }}>Self-Attention</strong>
            <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Cada token atende directamente a todos os outros. Complexidade <InlineMath math={"O(n^2 d)"} />, mas totalmente paralelizável.
              O factor <InlineMath math={"1/\\sqrt{d_k}"} /> evita saturação do softmax.
            </p>
          </div>
          <div style={S.highlight}>
            <strong style={{ color }}>Multi-Head Attention</strong>
            <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Múltiplas heads em paralelo aprendem relações distintas (sintáctica, semântica, posicional).
              Concatenação + projeção <InlineMath math={"W^O"} /> combina-as.
            </p>
          </div>
          
          <div style={S.highlight}>
            <strong style={{ color }}>Positional Encoding</strong>
            <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Injeta ordem numa arquitectura invariante à permutação. PE sinusoidal → learned → RoPE (modelos modernos).
            </p>
          </div>
          <div style={S.highlight}>
            <strong style={{ color }}>FFN + Add & Norm</strong>
            <p style={{ ...S.p, marginBottom: 0, marginTop: '0.5rem', fontSize: '0.9rem' }}>
              FFN processa cada posição com expansão 4×. Residual connections garantem gradientes directos. Layer Norm estabiliza o treino.
            </p>
          </div>
        </div>

        <h3 style={S.h3}>Pontos-chave a reter</h3>
        <ul style={{ color: 'var(--text-primary)', lineHeight: 2.1, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>O Transformer <strong>eliminou a recorrência</strong>, permitindo paralelização total durante o treino.</li>
          <li>A atenção escalonada <InlineMath math={"\\text{softmax}(QK^\\top/\\sqrt{d_k})V"} /> é o núcleo computacional.</li>
          <li>Múltiplas heads capturam simultaneamente diferentes tipos de relação linguística.</li>
          <li>Sem positional encoding, o modelo é cego à ordem dos tokens.</li>
          <li>Residual connections + Layer Norm são essenciais para treinar modelos com dezenas de camadas.</li>
          <li>Encoder-only (BERT), decoder-only (GPT), e encoder-decoder (T5) são especializações para diferentes tarefas.</li>
          <li>A complexidade <InlineMath math={"O(n^2)"} /> é o principal desafio para contextos longos — Flash Attention é a solução prática actual.</li>
          <li>Scaling laws mostram que mais parâmetros + mais dados = melhor loss, de forma previsível.</li>
        </ul>

      </div>
    </div>
  );
}
