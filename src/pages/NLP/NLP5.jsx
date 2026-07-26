import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem' },
  lectureTag: { display: 'inline-block', background: 'transparent', color: '#4a9eed', border: '1.5px solid #4a9eed', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  h1: { fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' },
  lead: { fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.7 },
  section: { marginBottom: '3.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-color)', borderLeft: '3px solid var(--accent-color)', paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem', marginTop: '1.6rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: 'rgba(74,158,237,0.10)', border: '1px solid #4a9eed', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  math: { background: 'var(--bg-secondary)', borderRadius: 10, padding: '1.25rem', textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', textAlign: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  code: { fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.1rem 0.4rem', borderRadius: 4, fontSize: '0.88em', color: 'var(--accent-color)' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  note: { background: 'rgba(74,158,237,0.06)', borderLeft: '3px solid var(--accent-color)', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
};

const VecBox = ({ label, vals, color, labelAlign }) => (
  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', margin: '0.25rem 0.4rem' }}>
    <div style={{ display: 'flex', gap: 2 }}>
      {vals.map((v, i) => (
        <span key={i} style={{ display: 'inline-block', minWidth: 42, padding: '0.25rem 0.3rem', textAlign: 'center', fontFamily: 'monospace', fontSize: '0.76rem', border: `1px solid ${color}60`, background: `${color}15`, color, borderRadius: 4 }}>
          {typeof v === 'number' ? v.toFixed(3) : v}
        </span>
      ))}
    </div>
    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem', textAlign: labelAlign || 'center', maxWidth: 130, position: 'relative', left: labelAlign ? -10 : 0 }}>{label}</div>
  </div>
);

const FlowOp = ({ children, color }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 0.3rem', fontSize: '0.95rem', fontWeight: 700, color: color || 'var(--text-secondary)', minWidth: 24, whiteSpace: 'nowrap' }}>{children}</div>
);

const RNNStepFlowDiagram = () => {
  const steps = [
    { word: 'great', hPrev: [0, 0], x: [0.5, 0.8], pre: [0.44, 0.50], h: [0.414, 0.462], color: '#4a9eed' },
    { word: 'movie', hPrev: [0.414, 0.462], x: [0.1, 0.6], pre: [0.354, 0.490], h: [0.342, 0.453], color: '#4a9eed' },
    { word: 'is', hPrev: [0.342, 0.453], x: [0.3, 0.4], pre: [0.365, 0.408], h: [0.351, 0.388], color: '#4a9eed' },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>RNN — Fluxo Passo a Passo (Visual)</p>
      {steps.map((s, idx) => (
        <div key={s.word} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: idx < steps.length - 1 ? '0.5rem' : 0, paddingBottom: idx < steps.length - 1 ? '0.5rem' : 0, borderBottom: idx < steps.length - 1 ? '1px dashed var(--card-border)' : 'none' }}>
          <div style={{ fontWeight: 700, color: s.color, marginRight: '0.5rem', minWidth: 60 }}>"{s.word}"</div>
          <VecBox label={`h${idx}`} vals={s.hPrev} color="#38bdf8" />
          <FlowOp>+</FlowOp>
          <VecBox label={`x ("${s.word}")`} vals={s.x} color={s.color} />
          <FlowOp>→</FlowOp>
          <VecBox label="Uhₜ₋₁ + Wxₜ" vals={s.pre} color="#38bdf8" />
          <FlowOp>tanh→</FlowOp>
          <VecBox label={`h${idx + 1}`} vals={s.h} color="#38bdf8" />
        </div>
      ))}

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--card-border)' }}>
        <div style={{ fontWeight: 700, color: 'var(--accent-color)', marginRight: '0.5rem', minWidth: 100 }}>Classificação</div>
        <VecBox label="h₃ (estado final)" vals={[0.351, 0.388]} color="#38bdf8" />
        <FlowOp>→ V →</FlowOp>
        <VecBox label="V·h₃ (logit)" vals={[0.055]} color="#38bdf8" />
        <FlowOp>σ→</FlowOp>
        <VecBox label="y₃ = P(positivo)" vals={[0.514]} color="#7dd3fc" />
      </div>

      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        Cada h<sub>t</sub> resulta da combinação do h<sub>t-1</sub> (memória anterior) com o x<sub>t</sub> actual, passada por tanh. h₃ é o estado final da sequência — só ele é usado na classificação: a matriz <InlineMath math="V" /> projecta-o para um único logit, e <InlineMath math="\sigma" /> converte-o numa probabilidade <InlineMath math="y_3 \approx 0.514" /> (~positivo).
      </p>
    </div>
  );
};

const LSTMStepFlowDiagram = () => {
  const c = { forget: '#4a9eed', input: '#4a9eed', candidate: '#38bdf8', output: '#4a9eed', cell: '#4a9eed', hidden: '#38bdf8', x: '#4a9eed' };
  const steps = [
    {
      word: 'bad',
      Cprev: [0, 0], hprev: [0, 0], x: [0.6, 0.4],
      f: [0.565, 0.603], i: [0.672, 0.650], Ctil: [0.399, 0.399], o: [0.608, 0.608],
      C: [0.268, 0.259], h: [0.159, 0.154],
    },
    {
      word: 'film',
      Cprev: [0.268, 0.259], hprev: [0.159, 0.154], x: [0.3, 0.7],
      f: [0.603, 0.622], i: [0.683, 0.662], Ctil: [0.477, 0.580], o: [0.650, 0.680],
      C: [0.487, 0.545], h: [0.294, 0.338],
    },
  ];
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>LSTM — Fluxo Passo a Passo (Visual)</p>
      {steps.map((s, idx) => (
        <div key={s.word}>
          <div style={{ marginBottom: idx < steps.length - 1 ? '0.5rem' : 0, paddingBottom: idx < steps.length - 1 ? '1.25rem' : 0, borderBottom: idx < steps.length - 1 ? '1px dashed var(--card-border)' : 'none' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Passo {idx + 1} — "{s.word}"</div>

            {/* inputs feeding the gates */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem' }}>
              <VecBox label="Cₜ₋₁ (memória longa)" vals={s.Cprev} color={c.cell} />
              <VecBox label="hₜ₋₁ (memória curta)" vals={s.hprev} color={c.hidden} />
              <FlowOp>⊕</FlowOp>
              <VecBox label={`xₜ ("${s.word}")`} vals={s.x} color={c.x} />
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>↓ [hₜ₋₁, xₜ] concatenado entra em todas as 4 portas (cada uma com a sua matriz de pesos) ↓</div>

            {/* gates */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <VecBox label="forget f = σ(...)" vals={s.f} color={c.forget} labelAlign="left" />
              <VecBox label="input i = σ(...)" vals={s.i} color={c.input} labelAlign="left" />
              <VecBox label="candidato C̃ = tanh(...)" vals={s.Ctil} color={c.candidate} labelAlign="left" />
              <VecBox label="output o = σ(...)" vals={s.o} color={c.output} labelAlign="left" />
            </div>

            {/* combine */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: c.forget, fontWeight: 700 }}>f⊙Cₜ₋₁</span>
              <FlowOp color={c.cell}>+</FlowOp>
              <span style={{ fontSize: '0.78rem', color: c.input, fontWeight: 700 }}>i⊙C̃</span>
              <FlowOp color={c.cell}>=</FlowOp>
              <VecBox label="Cₜ (novo cell state)" vals={s.C} color={c.cell} />
              <FlowOp>→</FlowOp>
              <span style={{ fontSize: '0.78rem', color: c.output, fontWeight: 700 }}>o⊙tanh(Cₜ)</span>
              <FlowOp color={c.hidden}>=</FlowOp>
              <VecBox label="hₜ (novo hidden state)" vals={s.h} color={c.hidden} />
            </div>
          </div>

          {idx < steps.length - 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', margin: '0.6rem 0', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              <span>Cₜ e hₜ deste passo →</span>
              <span style={{ color: c.cell, fontWeight: 700 }}>tornam-se Cₜ₋₁</span>
              <span>e</span>
              <span style={{ color: c.hidden, fontWeight: 700 }}>hₜ₋₁</span>
              <span>do próximo passo ↓</span>
            </div>
          )}
        </div>
      ))}

      <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.9rem 1.1rem', margin: '1rem 0', textAlign: 'left', fontSize: '0.83rem' }}>
        <div style={{ fontWeight: 700, color: c.forget, marginBottom: '0.5rem' }}>De onde vêm estes valores? Exemplo: forget gate no Passo 1</div>
        <p style={{ margin: '0 0 0.5rem', color: 'var(--text-secondary)' }}>
          Cada porta tem a fórmula geral <InlineMath math="g_t = \sigma\big(W_g x_t + U_g h_{t-1} + b_g\big)" /> (ou <InlineMath math="\tanh" /> para o candidato). No Passo 1, <InlineMath math="h_0=[0,0]" />, logo o termo <InlineMath math="U_g h_0" /> desaparece e sobra apenas <InlineMath math="W_g x_{bad} + b_g" />:
        </p>
        <div style={{ marginBottom: '0.4rem' }}>
          <InlineMath math={`W_f = \\begin{pmatrix} 0.3 & 0.2 \\\\ 0.5 & 0.3 \\end{pmatrix},\\quad b_f = \\begin{pmatrix}0\\\\0\\end{pmatrix},\\quad x_{bad} = \\begin{pmatrix}0.6\\\\0.4\\end{pmatrix}`} />
        </div>
        <div style={{ marginBottom: '0.4rem' }}>
          <InlineMath math={`W_f x_{bad} + b_f = \\begin{pmatrix} 0.3\\cdot0.6 + 0.2\\cdot0.4 \\\\ 0.5\\cdot0.6 + 0.3\\cdot0.4 \\end{pmatrix} = \\begin{pmatrix}0.26\\\\0.42\\end{pmatrix}`} />
        </div>
        <div>
          <InlineMath math={`f_1 = \\sigma\\begin{pmatrix}0.26\\\\0.42\\end{pmatrix} = \\begin{pmatrix}1/(1+e^{-0.26})\\\\1/(1+e^{-0.42})\\end{pmatrix} \\approx \\begin{pmatrix}0.565\\\\0.603\\end{pmatrix}`} />
        </div>
        <p style={{ margin: '0.6rem 0 0', color: 'var(--text-secondary)' }}>
          As outras 3 portas (<span style={{ color: c.input, fontWeight: 700 }}>input</span>, <span style={{ color: c.candidate, fontWeight: 700 }}>candidato</span>, <span style={{ color: c.output, fontWeight: 700 }}>output</span>) seguem <strong>exactamente a mesma fórmula</strong>, cada uma com a sua própria <InlineMath math="W_g, U_g, b_g" /> — só os valores finais são mostrados acima por brevidade (4 portas × (2×2 + 2×2 + 2) = 40 parâmetros nesta única célula). No <strong>Passo 2</strong> ("film"), <InlineMath math="h_1 \neq 0" />, pelo que o termo <InlineMath math="U_g h_1" /> já contribui — é por isso que os valores das portas mudam de "bad" para "film" mesmo recebendo um <InlineMath math="x_t" /> diferente.
        </p>
      </div>

      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        <span style={{ color: c.forget, fontWeight: 700 }}>f</span> decide o que esquecer de C<sub>t-1</sub>; <span style={{ color: c.input, fontWeight: 700 }}>i</span> e <span style={{ color: c.candidate, fontWeight: 700 }}>C̃</span> decidem o que adicionar; <span style={{ color: c.output, fontWeight: 700 }}>o</span> filtra o novo C<sub>t</sub> para produzir h<sub>t</sub>. Repara como C ("bad" → "bad film") acumula informação de forma quase linear, enquanto h muda mais — é a "memória curta" exposta a cada passo.
      </p>
    </div>
  );
};

const Seq2SeqStepFlowDiagram = () => {
  const enc = '#38bdf8';
  const dec = '#4a9eed';
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Seq2Seq — Fluxo Encoder → Decoder (Visual)</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <VecBox label="h₀ = 0" vals={[0, 0]} color={enc} />
        <FlowOp>+</FlowOp>
        <VecBox label='x "good"' vals={[0.5, 0.8]} color={enc} />
        <FlowOp>→</FlowOp>
        <VecBox label="Wʰʰh₀ + Wʰˣx" vals={[0.460, 0.422]} color="#38bdf8" />
        <FlowOp>tanh→</FlowOp>
        <VecBox label="h₁ᵉⁿᶜ" vals={[0.430, 0.399]} color={enc} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
        <VecBox label="h₁ᵉⁿᶜ" vals={[0.430, 0.399]} color={enc} />
        <FlowOp>+</FlowOp>
        <VecBox label='x "day"' vals={[0.4, 0.7]} color={enc} />
        <FlowOp>→</FlowOp>
        <VecBox label="Wʰʰh₁ + Wʰˣx" vals={[0.581, 0.803]} color="#38bdf8" />
        <FlowOp>tanh→</FlowOp>
        <VecBox label="h₂ᵉⁿᶜ = c (context)" vals={[0.523, 0.664]} color="#0284c7" />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <VecBox label="c (context)" vals={[0.523, 0.664]} color="#0284c7" />
        <FlowOp>+</FlowOp>
        <VecBox label='x "<s>"' vals={['emb.']} color={dec} />
        <FlowOp>→</FlowOp>
        <VecBox label="Uᵈᵉᶜc + Wᵈᵉᶜx" vals={[0.515, 0.486]} color="#38bdf8" />
        <FlowOp>tanh→</FlowOp>
        <VecBox label="h₁ᵈᵉᶜ" vals={[0.474, 0.451]} color={dec} />
        <FlowOp>→Wˢ→softmax→</FlowOp>
        <VecBox label='"bom"=0.310 / "dia"=0.362 ←max' vals={[0.310, 0.362]} color={dec} />
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        Tal como na RNN, cada seta "→" antes do tanh esconde uma <strong>multiplicação por matrizes de pesos</strong> (W<sup>hh</sup>, W<sup>hx</sup> no encoder; U, W no decoder) seguida de soma — não é uma simples concatenação. O encoder comprime "good day" no vector de contexto c = h₂ᵉⁿᶜ. O decoder usa c como estado inicial (h₀ᵈᵉᶜ = c) e, antes do softmax, projecta h₁ᵈᵉᶜ pela matriz Wˢ para obter os logits — "dia" tem a maior probabilidade.
      </p>
    </div>
  );
};

const RNNUnrolled = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>RNN Desenrolada no Tempo</p>
    <svg viewBox="0 0 600 160" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent-color)" />
        </marker>
      </defs>
      {/* h0 */}
      <circle cx="60" cy="90" r="18" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="60" y="94" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="600">h₀=0</text>

      {/* Cells */}
      {['great','movie','is','good'].map((word, i) => {
        const cx = 160 + i * 120;
        return (
          <g key={word}>
            {/* cell */}
            <rect x={cx - 25} y="72" width="50" height="36" rx="8" fill="var(--accent-color)" opacity="0.8" />
            <text x={cx} y="94" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">A</text>
            {/* h arrow out (to right, except last) */}
            {i < 3 && <line x1={cx + 25} y1="90" x2={cx + 95} y2="90" stroke="var(--accent-color)" strokeWidth="1.5" markerEnd="url(#arr3)" />}
            {/* h label */}
            <text x={i < 3 ? cx + 57 : cx + 35} y="82" textAnchor="middle" fill="var(--accent-color)" fontSize="9">h{i+1}</text>
            {/* x arrow from below */}
            <line x1={cx} y1="145" x2={cx} y2="112" stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arr3)" />
            <text x={cx} y="158" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{word}</text>
            <text x={cx + 8} y="145" textAnchor="middle" fill="var(--text-secondary)" fontSize="7" dy="-2">x{i+1}</text>
            {/* y arrow upward */}
            <line x1={cx} y1="72" x2={cx} y2="35" stroke="#4a9eed" strokeWidth="1.5" markerEnd="url(#arr3)" />
            <text x={cx} y="28" textAnchor="middle" fill="#4a9eed" fontSize="9">y{i+1}</text>
          </g>
        );
      })}

      {/* h0 to first cell */}
      <line x1="78" y1="90" x2="133" y2="90" stroke="var(--accent-color)" strokeWidth="1.5" markerEnd="url(#arr3)" />

      {/* Labels */}
      <text x="580" y="14" textAnchor="end" fill="var(--text-secondary)" fontSize="8">U,V,W partilhados</text>
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>O mesmo bloco A é reutilizado em cada passo. Os pesos U, V, W são partilhados em todos os passos temporais.</p>
  </div>
);

const LSTMGates = () => {
  const [activeGate, setActiveGate] = useState('forget');
  const gates = {
    forget: {
      label: 'Forget Gate',
      color: '#4a9eed',
      eq: `f_t = \\sigma(W_f \\cdot [h_{t-1}, x_t] + b_f)`,
      desc: 'O "·" aqui é uma multiplicação matriz-vector normal: W_f é multiplicada pelo vector concatenado [h_{t-1}, x_t] e passada por σ, dando um vector f_t com valores em (0,1) — uma "comporta" por dimensão do cell state. 0 = apagar essa dimensão de C_{t-1}, 1 = manter.',
      example: 'f₁ ≈ [0.565, 0.603] — mantém ~58-60% de cada dimensão do cell state anterior',
    },
    input: {
      label: 'Input Gate',
      color: '#4a9eed',
      eq: `i_t = \\sigma(W_i \\cdot [h_{t-1}, x_t] + b_i),\\quad \\tilde{C}_t = \\tanh(W_C \\cdot [h_{t-1}, x_t] + b_C)`,
      desc: 'Dois ramos em paralelo, cada um com a sua matriz de pesos: i_t (σ, "quanto entra", 0–1) e C̃_t (tanh, "o quê entra", −1 a 1 — candidato a nova informação). Nesta fase apenas se calculam estes dois vectores; ainda não são combinados.',
      example: 'i₁ ≈ [0.672, 0.650]   C̃₁ ≈ [0.399, 0.399]',
    },
    update: {
      label: 'Actualizar Cell State',
      color: '#38bdf8',
      eq: `C_t = \\underbrace{f_t \\odot C_{t-1}}_{\\text{esquecer}} + \\underbrace{i_t \\odot \\tilde{C}_t}_{\\text{adicionar}}`,
      desc: 'Aqui o "⊙" é multiplicação elemento-a-elemento (Hadamard) — não matricial: cada dimensão é tratada independentemente. f_t ⊙ C_{t-1} apaga selectivamente a memória antiga; i_t ⊙ C̃_t escala o novo candidato pelo quanto deve entrar. A soma "+" combina os dois para dar o novo cell state C_t. O gradiente flui directamente por esta soma — resolve o vanishing gradient.',
      example: 'C₁ = (0.565·0 + 0.603·0) + (0.672·0.399, 0.650·0.399) ≈ [0.268, 0.259]',
    },
    output: {
      label: 'Output Gate',
      color: '#4a9eed',
      eq: `o_t = \\sigma(W_o \\cdot [h_{t-1}, x_t] + b_o),\\quad h_t = o_t \\odot \\tanh(C_t)`,
      desc: 'Tal como nas outras portas, "·" é multiplicação matriz-vector (com W_o própria) seguida de σ, dando o_t. Depois "⊙" é elemento-a-elemento: tanh(C_t) comprime o cell state para (−1,1) e o_t decide quanto de cada dimensão passa para fora — o resultado é h_t, o novo hidden state.',
      example: 'h₁ = [0.608, 0.608] ⊙ tanh([0.268, 0.259]) ≈ [0.159, 0.154]',
      extra: 'h_t não é o output final do modelo — é a memória passada ao próximo passo. O output y_t (ex: classe prevista) é calculado à parte, exactamente como na RNN: y_t = f(V·h_t + c), aplicando uma matriz de pesos V (e activação f, ex. softmax/sigmoid) apenas ao hidden state final exposto pela LSTM.',
    },
  };
  const g = gates[activeGate];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>As 3 Portas da LSTM — Explorador Interativo</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.25rem' }}>
        {Object.entries(gates).map(([key, gd]) => (
          <button key={key} onClick={() => setActiveGate(key)} style={{
            padding: '0.4rem 0.9rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
            background: activeGate === key ? gd.color : 'var(--bg-primary)',
            color: activeGate === key ? 'white' : 'var(--text-primary)',
            border: `1.5px solid ${activeGate === key ? gd.color : 'var(--card-border)'}`,
            transition: 'all 0.2s'
          }}>{gd.label}</button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-primary)', borderRadius: 10, padding: '1.25rem', textAlign: 'left', border: `1.5px solid ${g.color}40` }}>
        <div style={{ color: g.color, fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>{g.label}</div>
        <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}><BlockMath math={g.eq} /></div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{g.desc}</p>
        <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: g.color, background: `${g.color}10`, padding: '0.5rem 0.75rem', borderRadius: 6 }}>
           Exemplo numérico: {g.example}
        </div>
        {g.extra && (
          <div style={{ ...S.note, margin: '0.75rem 0 0', borderLeftColor: g.color }}>
             <strong>E o output y_t?</strong> {g.extra}
          </div>
        )}
      </div>
    </div>
  );
};

const LSTMCellDiagram = () => {
  const c = { forget: '#4a9eed', input: '#4a9eed', candidate: '#38bdf8', output: '#4a9eed' };
  const gate = (cx, label, color, fill) => (
    <g>
      <rect x={cx - 28} y="132" width="56" height="36" rx="6" fill={fill} stroke={color} strokeWidth="1.2" />
      <text x={cx} y="155" textAnchor="middle" fill={color} fontSize="13" fontWeight="700">{label}</text>
    </g>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Anatomia de uma Célula LSTM</p>
      <svg viewBox="0 0 660 300" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrlstm" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* outer cell boundary */}
        <rect x="22" y="15" width="595" height="248" rx="14" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2" strokeDasharray="5 4" />
        <text x="320" y="10" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">CÉLULA LSTM — passo t</text>

        {/* Cell state line (top highway) */}
        <line x1="10" y1="45" x2="615" y2="45" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrlstm)" />
        <text x="6" y="35" fill="#0284c7" fontSize="10" fontWeight="700">Cₜ₋₁</text>
        <text x="595" y="35" fill="#0284c7" fontSize="10" fontWeight="700">Cₜ</text>

        {/* forget gate multiply on cell line */}
        <circle cx="150" cy="45" r="13" fill="var(--bg-primary)" stroke={c.forget} strokeWidth="1.5" />
        <text x="150" y="50" textAnchor="middle" fill={c.forget} fontSize="14" fontWeight="700">×</text>

        {/* input*candidate combiner */}
        <circle cx="285" cy="100" r="13" fill="var(--bg-primary)" stroke={c.input} strokeWidth="1.5" />
        <text x="285" y="105" textAnchor="middle" fill={c.input} fontSize="14" fontWeight="700">×</text>
        <line x1="285" y1="87" x2="370" y2="55" stroke={c.input} strokeWidth="1.2" markerEnd="url(#arrlstm)" />

        {/* add on cell line */}
        <circle cx="380" cy="45" r="13" fill="var(--bg-primary)" stroke={c.input} strokeWidth="1.5" />
        <text x="380" y="50" textAnchor="middle" fill={c.input} fontSize="14" fontWeight="700">+</text>

        {/* branch to tanh(Ct) for output */}
        <line x1="500" y1="45" x2="500" y2="68" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrlstm)" />
        <rect x="475" y="70" width="50" height="32" rx="6" fill={`${c.candidate}20`} stroke={c.candidate} strokeWidth="1.2" />
        <text x="500" y="91" textAnchor="middle" fill={c.candidate} fontSize="11" fontWeight="700">tanh</text>
        <line x1="500" y1="102" x2="500" y2="230" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrlstm)" />

        {/* output gate -> output multiply -> h_t (arrow only, circle drawn after h line) */}
        <line x1="470" y1="168" x2="485" y2="230" stroke={c.output} strokeWidth="1.2" markerEnd="url(#arrlstm)" />

        {/* gate boxes */}
        {gate(150, 'σ', c.forget, `${c.forget}20`)}
        {gate(250, 'σ', c.input, `${c.input}20`)}
        {gate(320, 'tanh', c.candidate, `${c.candidate}20`)}
        {gate(470, 'σ', c.output, `${c.output}20`)}

        {/* gate -> op connectors */}
        <line x1="150" y1="132" x2="150" y2="58" stroke={c.forget} strokeWidth="1.2" markerEnd="url(#arrlstm)" />
        <line x1="250" y1="132" x2="278" y2="112" stroke={c.input} strokeWidth="1.2" markerEnd="url(#arrlstm)" />
        <line x1="320" y1="132" x2="292" y2="112" stroke={c.candidate} strokeWidth="1.2" markerEnd="url(#arrlstm)" />

        {/* labels for gates */}
        <text x="132" y="178" textAnchor="middle" fill={c.forget} fontSize="9" fontWeight="700">forget</text>
        <text x="232" y="178" textAnchor="middle" fill={c.input} fontSize="9" fontWeight="700">input</text>
        <text x="290" y="178" textAnchor="middle" fill={c.candidate} fontSize="9" fontWeight="700">candidato C̃ₜ</text>
        <text x="452" y="178" textAnchor="middle" fill={c.output} fontSize="9" fontWeight="700">output</text>

        {/* input bus: h_{t-1} and x_t feed every gate */}
        <line x1="60" y1="245" x2="60" y2="195" stroke="var(--text-secondary)" strokeWidth="1.2" />
        <line x1="60" y1="195" x2="470" y2="195" stroke="var(--text-secondary)" strokeWidth="1.2" />
        {[150, 250, 320, 470].map(cx => (
          <line key={cx} x1={cx} y1="195" x2={cx} y2="168" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrlstm)" />
        ))}

        {/* hidden state line (bottom) */}
        <line x1="10" y1="245" x2="472" y2="245" stroke="var(--accent-color)" strokeWidth="2" />
        <line x1="498" y1="245" x2="615" y2="245" stroke="var(--accent-color)" strokeWidth="2" markerEnd="url(#arrlstm)" />
        <text x="6" y="235" fill="var(--accent-color)" fontSize="10" fontWeight="700">hₜ₋₁</text>
        <text x="595" y="235" fill="var(--accent-color)" fontSize="10" fontWeight="700">hₜ</text>
        {/* output × circle on top of h line */}
        <circle cx="485" cy="245" r="13" fill="var(--bg-primary)" stroke={c.output} strokeWidth="1.5" />
        <text x="485" y="250" textAnchor="middle" fill={c.output} fontSize="14" fontWeight="700">×</text>

        {/* x_t input */}
        <line x1="60" y1="280" x2="60" y2="245" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrlstm)" />
        <text x="60" y="293" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontWeight="700">xₜ</text>
      </svg>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
        A linha laranja (cell state) atravessa a célula quase sem transformações — apenas multiplicações/adições pontuais — funcionando como uma "auto-estrada" para o gradiente. <span style={{ color: c.forget, fontWeight: 700 }}>Forget gate</span> apaga partes de C<sub>t-1</sub>; <span style={{ color: c.input, fontWeight: 700 }}>input gate</span> e <span style={{ color: c.candidate, fontWeight: 700 }}>candidato C̃ₜ</span> decidem o que adicionar; <span style={{ color: c.output, fontWeight: 700 }}>output gate</span> filtra tanh(C<sub>t</sub>) para produzir h<sub>t</sub>. Todas as portas recebem [h<sub>t-1</sub>, x<sub>t</sub>] como input.
      </p>
    </div>
  );
};

const Seq2SeqDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Seq2Seq (Encoder–Decoder)</p>
    <svg viewBox="0 0 640 210" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
        <marker id="arr4a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0369a1" />
        </marker>
        <marker id="arr4b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" />
        </marker>
      </defs>

      {/* ENCODER label */}
      <text x="140" y="18" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="700">ENCODER</text>

      {/* Encoder cells */}
      {['great','movie'].map((word, i) => {
        const cx = 60 + i * 110;
        return (
          <g key={word}>
            <rect x={cx - 28} y="30" width="56" height="36" rx="8" fill="#0369a1" opacity="0.85" />
            <text x={cx} y="52" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">E</text>
            <text x={cx} y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">{word}</text>
            <line x1={cx} y1="127" x2={cx} y2="70" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr4)" />
            {i < 1 && <line x1={cx + 28} y1="48" x2={cx + 82} y2="48" stroke="#0369a1" strokeWidth="1.5" markerEnd="url(#arr4a)" />}
          </g>
        );
      })}

      {/* Context vector */}
      <rect x="228" y="28" width="60" height="40" rx="8" fill="#0284c7" opacity="0.8" />
      <text x="258" y="46" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">c</text>
      <text x="258" y="58" textAnchor="middle" fill="white" fontSize="8">[0.52, 0.66]</text>
      <text x="258" y="20" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="600">context</text>

      {/* Arrow from last encoder to context */}
      <line x1="198" y1="48" x2="226" y2="48" stroke="#0369a1" strokeWidth="1.5" markerEnd="url(#arr4a)" />

      {/* BOTTLENECK label */}
      <text x="258" y="84" textAnchor="middle" fill="#0284c7" fontSize="8">BOTTLENECK</text>

      {/* Arrow from context to decoder */}
      <line x1="290" y1="48" x2="330" y2="48" stroke="#0284c7" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arr4b)" />

      {/* DECODER label */}
      <text x="480" y="18" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="700">DECODER</text>

      {/* Decoder cells */}
      {['<s>','ótimo','filme','</s>'].map((word, i) => {
        const cx = 360 + i * 80;
        return (
          <g key={word}>
            <rect x={cx - 25} y="30" width="50" height="36" rx="8" fill="#38bdf8" opacity={0.6 + i * 0.1} />
            <text x={cx} y="52" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">D</text>
            <text x={cx} y="130" textAnchor="middle" fill="var(--text-secondary)" fontSize={word.length > 5 ? '7' : '9'}>{word}</text>
            <line x1={cx} y1="127" x2={cx} y2="70" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr4)" />
            {/* Softmax outputs for non-special tokens */}
            {i > 0 && i < 3 && (
              <>
                <line x1={cx} y1="30" x2={cx} y2="10" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#arr4)" />
                <text x={cx} y="5" textAnchor="middle" fill="#38bdf8" fontSize="8">softmax</text>
              </>
            )}
            {i < 3 && <line x1={cx + 25} y1="48" x2={cx + 55} y2="48" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arr4)" />}
          </g>
        );
      })}

      {/* Arrow "token generated becomes next input" */}
      <text x="450" y="148" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">token gerado → próximo input</text>

      {/* Legend */}
      <text x="20" y="175" fill="#0369a1" fontSize="9">■ Encoder</text>
      <text x="110" y="175" fill="#0284c7" fontSize="9">■ Context vector</text>
      <text x="240" y="175" fill="#38bdf8" fontSize="9">■ Decoder</text>
    </svg>
  </div>
);

export default function NLP5() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 5</div>
        <h1 style={S.h1}>Modelos Sequenciais: RNN, LSTM e Seq2Seq</h1>

        {/* === RNN === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. O Problema da Entrada Sequencial</h2>
          <p style={S.p}>Dado "Great movie" com embeddings de tamanho 3, o classificador espera um único vetor por documento. Existem duas opções:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '0.9rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Opção 1: Agregar</div>
              <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-secondary)' }}>Média, soma ou concatenação. Simples mas <strong>perde a ordem das palavras</strong>.</p>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '0.9rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Opção 2: Processar sequencialmente</div>
              <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-secondary)' }}>Preserva a sequência. É aqui que entram as <strong>RNNs</strong>.</p>
            </div>
          </div>

          <h2 style={S.h2}>2. Redes Neuronais Recorrentes (RNN)</h2>
          <p style={S.p}>Uma RNN contém um ciclo nas suas ligações: o estado oculto de cada passo é passado ao passo seguinte, permitindo que o modelo "recorde" o contexto anterior.</p>

          <div style={S.math}>
            <BlockMath math={`h_t = g(U h_{t-1} + W x_t)`} />
            <BlockMath math={`y_t = f(V h_t)`} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.7rem', marginBottom: '1.5rem' }}>
            {[
              ['xₜ', 'Embedding da palavra no passo t'],
              ['hₜ₋₁', 'Estado oculto do passo anterior (memória)'],
              ['hₜ', 'Novo estado oculto (memória actualizada)'],
              ['yₜ', 'Output no passo t (ex: probabilidade da classe)'],
              ['U, V, W', 'Matrizes de pesos partilhadas em todos os passos'],
            ].map(([sym, desc]) => (
              <div key={sym} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.7rem' }}>
                <div style={{ fontFamily: 'monospace', color: 'var(--accent-color)', fontWeight: 700, marginBottom: '0.3rem' }}>{sym}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{desc}</div>
              </div>
            ))}
          </div>

          <RNNUnrolled />

          <RNNStepFlowDiagram />

          <div style={S.note}> A informação das primeiras palavras vai-se <strong>diluindo</strong> a cada passo de tanh. Isto é o vanishing gradient na prática. <code style={S.code}>U</code> e <code style={S.code}>W</code> actualizam a memória a cada passo; <code style={S.code}>V</code> só é usado <strong>uma vez</strong>, no fim, para transformar o estado oculto final h₃ no output (aqui, <code style={S.code}>f = σ</code> para uma classificação binária de sentimento).</div>

          <h3 style={S.h3}>Os 2 Problemas das RNNs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Dependências Longas</div>
              <p style={{ fontSize: '0.87rem', margin: 0, color: 'var(--text-secondary)' }}>Para prever "French" em "I grew up in France... I speak fluent __", a RNN precisa de recordar "France" de muitos passos atrás.</p>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Vanishing Gradients</div>
              <p style={{ fontSize: '0.87rem', margin: 0, color: 'var(--text-secondary)' }}>Durante a retropropagação, os gradientes são multiplicados repetidamente pelas matrizes de pesos. Com sequências longas, tendem para zero.</p>
            </div>
          </div>

          <h3 style={S.h3}>RNN Bidirecional</h3>
          <p style={S.p}>Mitigação parcial para dependências longas: correr uma RNN da esquerda para a direita e outra da direita para a esquerda, depois combinar:</p>
          <div style={S.math}>
            <BlockMath math={`\\hat{y} = f(V_1 \\overrightarrow{h_4} + V_2 \\overleftarrow{h_1})`} />
          </div>
          <div style={S.note}>RNNs bidirecionais resolvem <em>parcialmente</em> as dependências longas, mas <strong>não resolvem os vanishing gradients</strong>. Para isso, a solução é usar LSTMs.</div>
        </div>

        <hr style={S.divider} />

        {/* === LSTM === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Long Short-Term Memory (LSTM)</h2>
          <p style={S.p}>As LSTMs foram concebidas especificamente para resolver o problema dos vanishing gradients e das dependências longas. A ideia central: dividir a gestão do contexto em dois subproblemas — <strong>remover</strong> o que já não é relevante e <strong>adicionar</strong> o que será necessário mais adiante.</p>

          <p style={S.p}>A LSTM mantém dois vectores de estado em cada passo:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={S.highlight}>
              <strong style={{ color: 'var(--accent-color)' }}>hₜ — Hidden State</strong>
              <p style={{ fontSize: '0.88rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>Memória de curto prazo (igual ao das RNNs simples). Exposto ao exterior.</p>
            </div>
            <div style={{ ...S.highlight, borderColor: '#4a9eed', background: 'rgba(2,132,199,0.08)' }}>
              <strong style={{ color: '#4a9eed' }}>Cₜ — Cell State</strong>
              <p style={{ fontSize: '0.88rem', margin: '0.4rem 0 0', color: 'var(--text-secondary)' }}>Memória de longo prazo — a "auto-estrada da informação". O gradiente flui sem degradar.</p>
            </div>
          </div>

          <LSTMCellDiagram />

          <LSTMGates />

          <h3 style={S.h3}>Actualização do Cell State</h3>
          <div style={S.math}>
            <BlockMath math={`C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t`} />
          </div>
          <p style={S.p}>A operação é simples mas poderosa: <strong>esquecer selectivamente</strong> (<InlineMath math={`f_t \\odot C_{t-1}`} />) e <strong>adicionar selectivamente</strong> (<InlineMath math={`i_t \\odot \\tilde{C}_t`} />). O gradiente flui directamente pelo cell state durante o backpropagation — sem multiplicações em cascata.</p>

          <LSTMStepFlowDiagram />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', fontSize: '0.85rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>Estado final exposto (hₜ)</div>
              <code style={{ color: 'var(--text-primary)' }}>h₂ ≈ [0.294, 0.338]</code>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.9rem', fontSize: '0.85rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>Memória de longo prazo (Cₜ)</div>
              <code style={{ color: 'var(--text-primary)' }}>C₂ ≈ [0.487, 0.545]</code>
            </div>
          </div>

          <h3 style={S.h3}>RNN vs. LSTM — Comparação</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Característica</th><th style={S.th}>RNN</th><th style={S.th}>LSTM</th></tr></thead>
              <tbody>
                {[
                  ['Vectores de estado', 'hₜ', 'hₜ + Cₜ'],
                  ['Controlo de memória', 'Nenhum', '3 portas (forget, input, output)'],
                  ['Vanishing gradients', ' Sim', ' Mitigado (cell state)'],
                  ['Dependências longas', ' Limitado', ' Bom suporte'],
                  ['Complexidade computacional', 'Baixa', 'Maior (4× mais pesos)'],
                ].map(([f, r, l]) => (
                  <tr key={f}><td style={S.td}><strong>{f}</strong></td><td style={S.td}>{r}</td><td style={S.td}>{l}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SEQ2SEQ === */}
        <div style={S.section}>
          <h2 style={S.h2}>4. Modelos Sequence-to-Sequence (Seq2Seq)</h2>
          <p style={S.p}>As arquitecturas anteriores mapeiam uma sequência para um output de tamanho fixo. Seq2Seq é necessário quando o output é também uma sequência de comprimento variável:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {['Tradução: "Great movie" → "Ótimo filme"', 'Resumo: artigo longo → frase curta', 'Chatbot: pergunta → resposta', 'ASR: áudio → texto'].map(ex => (
              <span key={ex} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 6, padding: '0.3rem 0.75rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{ex}</span>
            ))}
          </div>

          <Seq2SeqDiagram />

          <h3 style={S.h3}>O Encoder</h3>
          <p style={S.p}>Processa a sequência de input palavra a palavra. O hidden state final torna-se o <strong>context vector c</strong>:</p>
          <div style={S.math}>
            <BlockMath math={`h_t = f\\left(W^{(hh)} h_{t-1} + W^{(hx)} x_t\\right)`} />
          </div>

          <h3 style={S.h3}>O Decoder</h3>
          <p style={S.p}>Recebe c como estado oculto inicial e gera a sequência de output passo a passo. Em cada passo, o softmax produz uma distribuição sobre o vocabulário:</p>
          <div style={S.math}>
            <BlockMath math={`h_t^{dec} = f\\left(W^{(hh)} h_{t-1}^{dec}\\right),\\quad y_t = \\text{softmax}\\left(W^S h_t^{dec}\\right)`} />
          </div>

          <Seq2SeqStepFlowDiagram />

          <div style={{ ...S.highlight, borderColor: '#4a9eed', background: 'rgba(74,158,237,0.10)' }}>
            <strong style={{ color: '#4a9eed' }}>O Bottleneck:</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-primary)' }}>Todo o significado de "good day" está comprimido em c = [0.523, 0.664]ᵀ. Se a frase tivesse 50 palavras, ainda seria apenas 2 números. A informação da palavra 1 tem de sobreviver 49 passos recorrentes. Este problema motiva o <strong>mecanismo de atenção</strong> da próxima lecture.</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {[['<s>', 'Início da sequência de output — input do primeiro passo do decoder'], ['</s>', 'Fim da sequência — o decoder pára quando o gera']].map(([tok, desc]) => (
              <div key={tok} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '0.75rem', flex: 1 }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--accent-color)', fontWeight: 700 }}>{tok}</span>
                <p style={{ fontSize: '0.82rem', margin: '0.3rem 0 0', color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
