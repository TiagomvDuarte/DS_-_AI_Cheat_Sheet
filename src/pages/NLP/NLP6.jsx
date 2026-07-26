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
  note: { background: 'rgba(56,189,248,0.08)', borderLeft: '3px solid var(--accent-color)', borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
};

const AttentionHeatmap = () => {
  const encoder = ['great', 'movie'];
  const decoder = ['ótimo', 'filme'];
  const weights = [[0.58, 0.42], [0.25, 0.75]];
  const [hov, setHov] = useState(null);

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mapa de Atenção — "Great movie" → "Ótimo filme"</p>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>Hover numa célula para ver o peso de atenção. Ao gerar "ótimo", o decoder foca-se mais em "great" (0.58).</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.4rem', marginLeft: 64 }}>
            {encoder.map(w => <div key={w} style={{ width: 80, textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-color)' }}>{w}</div>)}
          </div>
          {decoder.map((dw, di) => (
            <div key={dw} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.4rem' }}>
              <div style={{ width: 60, textAlign: 'right', paddingRight: '0.75rem', fontSize: '0.85rem', fontWeight: 600, color: '#4a9eed' }}>{dw}</div>
              {encoder.map((ew, ei) => {
                const w = weights[di][ei];
                const isHov = hov && hov[0] === di && hov[1] === ei;
                return (
                  <div key={ew}
                    onMouseEnter={() => setHov([di, ei])}
                    onMouseLeave={() => setHov(null)}
                    style={{
                      width: 80, height: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      background: isHov ? 'var(--accent-color)' : `rgba(56,189,248,${w * 0.9})`,
                      borderRadius: 8, margin: '0 2px', cursor: 'default', transition: 'all 0.2s',
                    }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: isHov ? 'white' : (w > 0.5 ? 'white' : 'var(--text-primary)') }}>{w.toFixed(2)}</span>
                    <span style={{ fontSize: '0.7rem', color: isHov ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)' }}>{Math.round(w * 100)}%</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AttentionMatrixDiagram = () => {
  const ACC = 'var(--accent-color)';
  const c = { score: '#4a9eed', softmax: '#4a9eed', context: '#4a9eed', output: '#38bdf8' };
  const bracket = (xL, xR, yT, yB, color = 'var(--text-secondary)') => (
    <g key={`${xL}-${xR}-${yT}`}>
      <path d={`M ${xL + 6},${yT} L ${xL},${yT} L ${xL},${yB} L ${xL + 6},${yB}`} fill="none" stroke={color} strokeWidth="1.2" />
      <path d={`M ${xR - 6},${yT} L ${xR},${yT} L ${xR},${yB} L ${xR - 6},${yB}`} fill="none" stroke={color} strokeWidth="1.2" />
    </g>
  );
  const arrow = (x1, y1, x2, y2, color = 'var(--text-secondary)', extra = {}) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.3" markerEnd="url(#arrAtt)" {...extra} />
  );
  const stepBox = (y, h, color, title) => (
    <g key={title}>
      <rect x="40" y={y} width="540" height={h} rx="8" fill={`${color}10`} stroke={color} strokeWidth="1.2" />
      <text x="55" y={y + 18} fill={color} fontSize="11" fontWeight="700">{title}</text>
    </g>
  );

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Atenção, passo a passo — de "great movie" ao output "ótimo"</p>
      <svg viewBox="0 0 620 660" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrAtt" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* === H matrix (encoder output) === */}
        <text x="135" y="14" textAnchor="middle" fill={ACC} fontSize="11" fontWeight="700">H — saída do encoder (1 vector/palavra)</text>
        <text x="14" y="40" fill={ACC} fontSize="10" fontWeight="700">"great"</text>
        <text x="14" y="70" fill={ACC} fontSize="10" fontWeight="700">"movie"</text>
        {bracket(64, 196, 24, 80)}
        {[[0.2, 0.7, 0.8], [0.1, 0.3, 0.4]].map((row, ri) => (
          <g key={ri}>
            {row.map((v, ci) => (
              <text key={ci} x={86 + ci * 36} y={ri === 0 ? 40 : 70} textAnchor="middle" fontFamily="monospace" fontSize="11" fill="var(--text-primary)">{v.toFixed(1)}</text>
            ))}
            <text x="208" y={ri === 0 ? 40 : 70} fontFamily="monospace" fontSize="10" fill={ACC}>{ri === 0 ? '= h₁ᵉ' : '= h₂ᵉ'}</text>
          </g>
        ))}

        {/* === h_t^d (decoder state) === */}
        <text x="430" y="14" textAnchor="middle" fill="#4a9eed" fontSize="11" fontWeight="700">hₜᵈ — estado do decoder, passo t</text>
        {bracket(380, 480, 24, 52)}
        {[0.5, 0.9, 0.9].map((v, ci) => (
          <text key={ci} x={400 + ci * 33} y="40" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="var(--text-primary)">{v.toFixed(1)}</text>
        ))}

        {/* === Passo 1: Score === */}
        {stepBox(100, 75, c.score, 'Passo 1 — Score: produto escalar entre cada h_j^e e hₜᵈ')}
        <text x="310" y="135" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">score(h₁ᵉ,hₜᵈ) = [0.2,0.7,0.8]·[0.5,0.9,0.9] = 1.45</text>
        <text x="310" y="158" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">score(h₂ᵉ,hₜᵈ) = [0.1,0.3,0.4]·[0.5,0.9,0.9] = 1.13</text>

        {arrow(310, 175, 310, 190, c.softmax)}

        {/* === Passo 2: Softmax === */}
        {stepBox(190, 115, c.softmax, 'Passo 2 — Softmax: normaliza os scores em pesos que somam 1')}
        <text x="310" y="232" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">α = softmax([1.45, 1.13]) ≈ [0.58, 0.42]</text>
        {[['great', 0.58, 245], ['movie', 0.42, 273]].map(([w, val, y]) => (
          <g key={w}>
            <text x="128" y={y + 13} textAnchor="end" fill={ACC} fontSize="10" fontWeight="700">{w}</text>
            <rect x="140" y={y} width="220" height="18" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="140" y={y} width={220 * val} height="18" rx="4" fill={c.softmax} opacity="0.7" />
            <text x={150 + 220 * val} y={y + 13} fill="var(--text-primary)" fontSize="10" fontWeight="700">{val.toFixed(2)}</text>
          </g>
        ))}

        {arrow(310, 305, 310, 320, c.context)}

        {/* === Passo 3: Contexto === */}
        {stepBox(320, 85, c.context, 'Passo 3 — Contexto cₜ: soma ponderada das linhas de H pelos pesos α')}
        <text x="310" y="358" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">cₜ = 0.58·[0.2,0.7,0.8] + 0.42·[0.1,0.3,0.4]</text>
        {bracket(255, 365, 372, 400, c.context)}
        {[0.16, 0.53, 0.63].map((v, ci) => (
          <text key={ci} x={278 + ci * 34} y="391" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={c.context}>{v.toFixed(2)}</text>
        ))}
        <text x="385" y="391" fontFamily="monospace" fontSize="10" fill={c.context}>= cₜ</text>

        {arrow(310, 405, 310, 420, c.output)}

        {/* === Passo 4: Combinar + prever === */}
        {stepBox(420, 230, c.output, 'Passo 4 — Combinar cₜ com hₜᵈ e prever a próxima palavra')}
        <text x="310" y="460" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">[cₜ ; hₜᵈ] = [0.16,0.53,0.63,  0.5,0.9,0.9]</text>
        <text x="310" y="478" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">↓ concatenar (juntar os dois vectores num só) e passar por tanh(Wc · ...)</text>
        <text x="310" y="500" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill={c.output} fontWeight="700">h̃ₜ ≈ [0.42, 0.71]</text>
        <text x="310" y="518" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">h̃ₜ junta "o que o encoder mostra" (cₜ) com "o que o decoder já gerou" (hₜᵈ)</text>
        <text x="310" y="536" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">ŷₜ = softmax(Wo · h̃ₜ): Wo projecta os 2 valores de h̃ₜ para 1 valor por palavra</text>
        <text x="310" y="550" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">do vocabulário (aqui só há 3 palavras possíveis) — depois o softmax dá probabilidades:</text>
        {[['"ótimo"', 0.61, 562, true], ['"bom"', 0.32, 587, false], ['"péssimo"', 0.07, 612, false]].map(([w, val, y, top]) => (
          <g key={w}>
            <text x="128" y={y + 13} textAnchor="end" fill={top ? c.output : 'var(--text-secondary)'} fontSize="10" fontWeight={top ? 700 : 400}>{w}</text>
            <rect x="140" y={y} width="220" height="18" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
            <rect x="140" y={y} width={220 * val} height="18" rx="4" fill={c.output} opacity={top ? 0.8 : 0.35} />
            <text x={150 + 220 * val} y={y + 13} fill="var(--text-primary)" fontSize="10" fontWeight={top ? 700 : 400}>{val.toFixed(2)}</text>
          </g>
        ))}
        {arrow(365, 571, 480, 571, c.output)}
        <text x="488" y="576" fill={c.output} fontSize="12" fontWeight="700">"ótimo"</text>
      </svg>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
        Cada palavra do encoder tem o seu vector h_j^e (linhas de H). Em cada passo do decoder, esses vectores são comparados com hₜᵈ (Passo 1), convertidos em pesos de atenção (Passo 2), combinados num contexto cₜ (Passo 3) e finalmente usados — junto com hₜᵈ — para prever a próxima palavra (Passo 4).
      </p>
    </div>
  );
};

const SelfAttentionMatrixDiagram = () => {
  const c = { score: '#4a9eed', softmax: '#4a9eed', q: '#38bdf8', k: '#4a9eed', v: '#4a9eed', out: '#38bdf8' };
  const bracket = (xL, xR, yT, yB, color = 'var(--text-secondary)') => (
    <g key={`${xL}-${xR}-${yT}`}>
      <path d={`M ${xL + 6},${yT} L ${xL},${yT} L ${xL},${yB} L ${xL + 6},${yB}`} fill="none" stroke={color} strokeWidth="1.2" />
      <path d={`M ${xR - 6},${yT} L ${xR},${yT} L ${xR},${yB} L ${xR - 6},${yB}`} fill="none" stroke={color} strokeWidth="1.2" />
    </g>
  );
  const arrow = (x1, y1, x2, y2, color = 'var(--text-secondary)') => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.3" markerEnd="url(#arrSA)" />
  );
  const stepBox = (y, h, color, title) => (
    <g key={title}>
      <rect x="40" y={y} width="540" height={h} rx="8" fill={`${color}10`} stroke={color} strokeWidth="1.2" />
      <text x="55" y={y + 18} fill={color} fontSize="11" fontWeight="700">{title}</text>
    </g>
  );
  const mat = (x, y, data, color = 'var(--text-primary)') => {
    const cols = data[0].length;
    const w = cols * 34 + 12;
    const h = data.length * 26;
    return (
      <g key={`m-${x}-${y}`}>
        {bracket(x, x + w, y, y + h, color)}
        {data.map((row, ri) => row.map((v, ci) => (
          <text key={`${ri}-${ci}`} x={x + 25 + ci * 34} y={y + 18 + ri * 26} textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill={color}>{v.toFixed(2)}</text>
        )))}
      </g>
    );
  };

  const X = [[0.2, 0.7, 0.8], [0.1, 0.3, 0.4]];
  const Q = [[1.0, 0.5], [0.2, 0.9]];
  const K = [[0.8, 0.3], [0.4, 0.7]];
  const Kt = [[0.8, 0.4], [0.3, 0.7]];
  const V = [[0.6, 0.1], [0.2, 0.5]];
  const QKt = [[0.95, 0.75], [0.43, 0.71]];
  const W = [[0.54, 0.46], [0.45, 0.55]];
  const Z = [[0.41, 0.29], [0.38, 0.32]];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Self-Attention, passo a passo — de "great movie" a representações contextualizadas</p>
      <svg viewBox="0 0 620 1030" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrSA" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* === X (input embeddings) === */}
        <text x="263" y="14" textAnchor="middle" fill="var(--accent-color)" fontSize="11" fontWeight="700">X — embeddings de entrada (1 vector/palavra)</text>
        <text x="190" y="46" textAnchor="end" fill="var(--accent-color)" fontSize="10" fontWeight="700">"great"</text>
        <text x="190" y="72" textAnchor="end" fill="var(--accent-color)" fontSize="10" fontWeight="700">"movie"</text>
        {mat(206, 28, X, 'var(--text-primary)')}

        {arrow(263, 84, 263, 100, 'var(--text-secondary)')}

        {/* === Passo 1: Projetar X em Q, K, V === */}
        {stepBox(100, 290, c.q, 'Passo 1 — Projetar X em Q, K, V: multiplicar por Wq, Wk, Wv')}
        <text x="310" y="136" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">Cada palavra de X é multiplicada por 3 matrizes de pesos aprendidas (iguais para todas as posições):</text>

        {/* Row Q */}
        <text x="60" y="186" fill={c.q} fontSize="12" fontWeight="700">Q = X·Wq</text>
        <rect x="180" y="156" width="80" height="50" rx="6" fill={`${c.q}10`} stroke={c.q} strokeWidth="1.2" />
        <text x="220" y="178" textAnchor="middle" fill={c.q} fontSize="12" fontWeight="700">Wq</text>
        <text x="220" y="196" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(3×2, treinável)</text>
        <text x="278" y="186" textAnchor="middle" fill="var(--text-secondary)" fontSize="14">=</text>
        <text x="370" y="174" textAnchor="end" fill="var(--text-secondary)" fontSize="10">great</text>
        <text x="370" y="200" textAnchor="end" fill="var(--text-secondary)" fontSize="10">movie</text>
        {mat(380, 156, Q, c.q)}

        {/* Row K */}
        <text x="60" y="262" fill={c.k} fontSize="12" fontWeight="700">K = X·Wk</text>
        <rect x="180" y="232" width="80" height="50" rx="6" fill={`${c.k}10`} stroke={c.k} strokeWidth="1.2" />
        <text x="220" y="254" textAnchor="middle" fill={c.k} fontSize="12" fontWeight="700">Wk</text>
        <text x="220" y="272" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(3×2, treinável)</text>
        <text x="278" y="262" textAnchor="middle" fill="var(--text-secondary)" fontSize="14">=</text>
        <text x="370" y="250" textAnchor="end" fill="var(--text-secondary)" fontSize="10">great</text>
        <text x="370" y="276" textAnchor="end" fill="var(--text-secondary)" fontSize="10">movie</text>
        {mat(380, 232, K, c.k)}

        {/* Row V */}
        <text x="60" y="338" fill={c.v} fontSize="12" fontWeight="700">V = X·Wv</text>
        <rect x="180" y="308" width="80" height="50" rx="6" fill={`${c.v}10`} stroke={c.v} strokeWidth="1.2" />
        <text x="220" y="330" textAnchor="middle" fill={c.v} fontSize="12" fontWeight="700">Wv</text>
        <text x="220" y="348" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(3×2, treinável)</text>
        <text x="278" y="338" textAnchor="middle" fill="var(--text-secondary)" fontSize="14">=</text>
        <text x="370" y="326" textAnchor="end" fill="var(--text-secondary)" fontSize="10">great</text>
        <text x="370" y="352" textAnchor="end" fill="var(--text-secondary)" fontSize="10">movie</text>
        {mat(380, 308, V, c.v)}

        {arrow(310, 390, 310, 406, c.score)}

        {/* === Passo 2: Scores === */}
        {stepBox(406, 244, c.score, 'Passo 2 — Scores: S = Q · Kᵀ (compatibilidade entre cada par de palavras)')}

        {/* K -> K^T */}
        <text x="205" y="442" textAnchor="middle" fill={c.k} fontSize="9.5" fontWeight="700">K (1 linha/palavra)</text>
        <text x="150" y="466" textAnchor="end" fill="var(--text-secondary)" fontSize="9.5">great</text>
        <text x="150" y="492" textAnchor="end" fill="var(--text-secondary)" fontSize="9.5">movie</text>
        {mat(165, 448, K, c.k)}

        {arrow(255, 474, 375, 474, c.k)}
        <text x="315" y="466" textAnchor="middle" fill={c.k} fontSize="9">transpor</text>

        <text x="425" y="442" textAnchor="middle" fill={c.k} fontSize="9.5" fontWeight="700">Kᵀ (1 coluna/palavra)</text>
        {mat(385, 448, Kt, c.k)}
        <text x="410" y="512" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">great</text>
        <text x="444" y="512" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">movie</text>

        <text x="310" y="534" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">Transpor troca linhas por colunas: a linha "movie" de K passa a ser a coluna "movie" de Kᵀ.</text>
        <text x="310" y="550" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">Assim, Q · Kᵀ produz uma matriz com 1 linha por palavra-query e 1 coluna por palavra-key.</text>

        {/* S = Q . K^T */}
        <text x="60" y="612" fill={c.score} fontSize="12" fontWeight="700">S = Q·Kᵀ</text>
        <text x="295" y="586" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">great</text>
        <text x="329" y="586" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">movie</text>
        <text x="240" y="604" textAnchor="end" fill="var(--text-secondary)" fontSize="9.5">great</text>
        <text x="240" y="630" textAnchor="end" fill="var(--text-secondary)" fontSize="9.5">movie</text>
        {mat(270, 586, QKt, c.score)}

        {arrow(310, 650, 310, 666, c.softmax)}

        {/* === Passo 3: Scale + Softmax === */}
        {stepBox(666, 175, c.softmax, 'Passo 3 — Escalar por √dₖ e aplicar Softmax linha a linha')}
        <text x="310" y="701" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">S / √dₖ = S / √2 ≈ [[0.67, 0.53], [0.30, 0.50]]</text>
        <text x="310" y="721" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">↓ softmax em cada linha (cada palavra distribui 100% da sua atenção)</text>
        <text x="295" y="745" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">great</text>
        <text x="329" y="745" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">movie</text>
        <text x="240" y="770" textAnchor="end" fill="var(--text-secondary)" fontSize="9.5">great</text>
        <text x="240" y="796" textAnchor="end" fill="var(--text-secondary)" fontSize="9.5">movie</text>
        {mat(270, 752, W, c.softmax)}
        <text x="310" y="828" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="var(--text-primary)">α = [[0.54, 0.46], [0.45, 0.55]] — cada linha soma 1 (pesos de atenção)</text>

        {arrow(310, 841, 310, 857, c.out)}

        {/* === Passo 4: Z = alpha . V === */}
        {stepBox(857, 155, c.out, 'Passo 4 — Z = α · V (cada palavra passa a ser uma mistura ponderada de V)')}
        <text x="310" y="893" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">Z₁ = 0.54·[0.6,0.1] + 0.46·[0.2,0.5] ≈ [0.41, 0.29]  ("great" contextualizado)</text>
        <text x="310" y="913" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">Z₂ = 0.45·[0.6,0.1] + 0.55·[0.2,0.5] ≈ [0.38, 0.32]  ("movie" contextualizado)</text>
        <text x="200" y="962" textAnchor="end" fill="var(--text-secondary)" fontSize="10">great</text>
        <text x="200" y="988" textAnchor="end" fill="var(--text-secondary)" fontSize="10">movie</text>
        {mat(230, 944, Z, c.out)}
        <text x="345" y="975" fill={c.out} fontSize="10" fontWeight="700">= Z (saída desta cabeça de atenção)</text>
      </svg>
    </div>
  );
};

const FFNDiagram = () => {
  const arrow = (x1, y1, x2, y2) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arrffn)" />
  );
  // Diagrama de "neurónios": camada de entrada (d_model=2) → camada escondida (d_ff=8, GELU) → camada de saída (d_model=2)
  const inX = 90, hidX = 300, outX = 510;
  const inY = [310, 380];
  const outY = [310, 380];
  const hidY = Array.from({ length: 8 }, (_, i) => 225 + i * 34);
  const neuron = (cx, cy, r, fill, stroke, label) => (
    <g key={`${cx}-${cy}`}>
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth="1.5" />
      {label && <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="monospace" fontSize="10" fill={stroke}>{label}</text>}
    </g>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Feed-Forward Network — o que recebe e como processa</p>
      <svg viewBox="-10 0 580 510" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrffn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* === Input: saída do Add & Norm anterior === */}
        <text x="280" y="14" textAnchor="middle" fill="var(--accent-color)" fontSize="11" fontWeight="700">Entrada da FFN = saída do Add &amp; Norm anterior (N tokens × d_model)</text>
        <text x="195" y="48" textAnchor="end" fill="var(--accent-color)" fontSize="10" fontWeight="700">"great"</text>
        <text x="195" y="92" textAnchor="end" fill="var(--accent-color)" fontSize="10" fontWeight="700">"movie"</text>
        <path d="M 206 28 L 200 28 L 200 104 L 206 104" fill="none" stroke="var(--accent-color)" strokeWidth="1.2" />
        <path d="M 354 28 L 360 28 L 360 104 L 354 104" fill="none" stroke="var(--accent-color)" strokeWidth="1.2" />
        <text x="240" y="42" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">0.61</text>
        <text x="320" y="42" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">0.99</text>
        <text x="240" y="86" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">0.55</text>
        <text x="320" y="86" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="var(--text-primary)">1.05</text>
        <text x="280" y="120" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">(cada linha = 1 vector de dimensão d_model)</text>

        {arrow(280, 130, 280, 158)}
        <text x="280" y="175" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">↓ a mesma FFN, com os mesmos W₁, W₂, é aplicada independentemente a cada linha (token)</text>

        {/* === Diagrama de neurónios para o token "great" === */}
        <text x="280" y="198" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5">Para o token "great": x = [0.61, 0.99]</text>

        {/* connections input -> hidden */}
        {inY.map(iy => hidY.map(hy => (
          <line key={`ih-${iy}-${hy}`} x1={inX + 14} y1={iy} x2={hidX - 11} y2={hy} stroke="var(--accent-color)" strokeWidth="0.6" opacity="0.25" />
        )))}
        {/* connections hidden -> output */}
        {hidY.map(hy => outY.map(oy => (
          <line key={`ho-${hy}-${oy}`} x1={hidX + 11} y1={hy} x2={outX - 14} y2={oy} stroke="#4a9eed" strokeWidth="0.6" opacity="0.25" />
        )))}

        {/* input neurons */}
        {neuron(inX, inY[0], 14, 'var(--bg-primary)', 'var(--text-primary)', '0.61')}
        {neuron(inX, inY[1], 14, 'var(--bg-primary)', 'var(--text-primary)', '0.99')}
        {/* hidden neurons (Linear1 + GELU) */}
        {hidY.map(hy => neuron(hidX, hy, 11, 'rgba(56,189,248,0.15)', 'var(--accent-color)'))}
        {/* output neurons */}
        {neuron(outX, outY[0], 14, 'rgba(74,158,237,0.10)', '#4a9eed', 'y₁')}
        {neuron(outX, outY[1], 14, 'rgba(74,158,237,0.10)', '#4a9eed', 'y₂')}

        {/* labels above */}
        <text x={inX} y="288" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="700">x</text>
        <text x={hidX} y="210" textAnchor="middle" fill="var(--accent-color)" fontSize="10" fontWeight="700">Linear 1 + GELU</text>
        <text x={outX} y="288" textAnchor="middle" fill="#4a9eed" fontSize="10" fontWeight="700">y</text>

        {/* labels below */}
        <text x={inX} y="490" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">d_model = 2</text>
        <text x={hidX} y="490" textAnchor="middle" fill="var(--accent-color)" fontSize="9">d_ff = d_model × 4 = 8</text>
        <text x={outX} y="490" textAnchor="middle" fill="#4a9eed" fontSize="9">d_model = 2 (Linear 2)</text>
        <text x="280" y="507" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">y_great — mesma dimensão de x, pronto para o próximo Add &amp; Norm</text>
      </svg>
      <div style={S.math}>
        <BlockMath math={`\\text{FFN}(x) = \\text{GELU}(xW_1 + b_1)W_2 + b_2`} />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        A FFN <strong>recebe a saída do Add &amp; Norm anterior</strong>: uma matriz com 1 linha por token, cada linha um vector de dimensão <InlineMath math="d_{model}" />. A mesma FFN (mesmos <InlineMath math="W_1, W_2, b_1, b_2" />) é aplicada <strong>independentemente a cada linha</strong> — não há mistura entre tokens aqui (isso já aconteceu na self-attention). Internamente, expande a dimensão (tipicamente ×4, para <InlineMath math="d_{ff}" />), aplica GELU, e contrai de volta a <InlineMath math="d_{model}" />. É aqui que se acredita residir grande parte do "conhecimento factual" armazenado pelo modelo.
      </p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
        <strong>GELU</strong> (Gaussian Error Linear Unit) é a função de activação usada aqui em vez da ReLU. Em vez do corte abrupto em 0 da ReLU (<InlineMath math="\max(0,x)" />), a GELU é suave: <InlineMath math="\text{GELU}(x) = x \cdot \Phi(x)" />, onde <InlineMath math="\Phi(x)" /> é a função de distribuição acumulada da normal padrão — ou seja, "pesa" cada valor de <InlineMath math="x" /> pela probabilidade de o manter. Valores muito positivos passam quase inalterados, valores muito negativos são suprimidos perto de 0, e a transição à volta de 0 é suave (podendo ser ligeiramente negativa). Esta suavidade melhora os gradientes durante o treino, daí ser preferida em modelos como BERT e GPT.
      </p>
    </div>
  );
};

const AddNormExampleDiagram = () => {
  // Mesmos valores do Passo 4 do diagrama acima: x = embedding de "great" (simplificado para d_model = d_k = 2),
  // Sublayer(x) = Z₁ = [0.41, 0.29] (saída da self-attention para "great")
  const x = [0.20, 0.70];
  const sub = [0.41, 0.29];
  const sum = x.map((v, i) => +(v + sub[i]).toFixed(2));
  const mean = sum.reduce((a, b) => a + b, 0) / sum.length;
  const variance = sum.reduce((a, b) => a + (b - mean) ** 2, 0) / sum.length;
  const std = Math.sqrt(variance);
  const norm = sum.map(v => (v - mean) / std);
  const vec = (label, vals, color) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '0.78rem', fontWeight: 700, color, marginBottom: '0.3rem' }}>{label}</div>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {vals.map((v, i) => (
          <div key={i} style={{ width: 56, textAlign: 'center', fontSize: '0.78rem', fontFamily: 'monospace', background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 4, padding: '0.35rem 0', color }}>{v.toFixed(2)}</div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Add & Norm — Exemplo Numérico (palavra "great")</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        {vec('x (embedding de "great")', x, 'var(--accent-color)')}
        <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>+</span>
        {vec('Sublayer(x) = Z₁ (Passo 4 acima)', sub, '#38bdf8')}
        <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>=</span>
        {vec('soma residual', sum, '#4a9eed')}
      </div>
      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '-0.5rem', marginBottom: '0.75rem', textAlign: 'center' }}>
        (Para somar, x e Z têm de ter a mesma dimensão — aqui simplificada para d_model = d_k = 2. Em modelos reais, d_model é igual em toda a rede.)
      </p>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        <InlineMath math={`\\mu = ${mean.toFixed(2)}, \\quad \\sigma = ${std.toFixed(2)}`} /> &nbsp;— média e desvio-padrão dos {sum.length} valores da soma residual
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
        {vec('LayerNorm(soma) = (v − μ) / σ', norm, '#4a9eed')}
      </div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
        Este vector é a entrada para a próxima sub-camada (Feed Forward). Note que, depois da normalização, os valores passam a ter média ≈0 e desvio-padrão ≈1 — independentemente da escala dos valores de entrada. Na prática, a LayerNorm aplica ainda dois parâmetros treináveis γ e β: <InlineMath math="\gamma \hat{x} + \beta" /> (aqui omitidos, γ=1, β=0).
      </p>
    </div>
  );
};

const StackedBlocksDiagram = () => {
  const blockH = 168;
  const gap = 34;
  const n = 3;
  const top0 = 34;
  const blockColor = 'var(--accent-color)';
  const arrow = (x1, y1, x2, y2, color = 'var(--card-border)') => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" markerEnd="url(#arrstack)" />
  );
  const sub = (x, y, w, h, fill, stroke, label) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fill={stroke} fontSize="10.5" fontWeight="600">{label}</text>
    </g>
  );
  const totalH = top0 + n * blockH + (n - 1) * gap + 60;
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Blocos "Stacked" (×N) — Encoder</p>
      <svg viewBox={`0 0 320 ${totalH}`} style={{ maxWidth: 340, height: 'auto' }}>
        <defs>
          <marker id="arrstack" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
        </defs>

        {/* input */}
        <text x="160" y="14" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">X₀ = embeddings + Positional Encoding</text>
        {arrow(160, 18, 160, top0 - 4)}

        {Array.from({ length: n }).map((_, i) => {
          const y = top0 + i * (blockH + gap);
          return (
            <g key={i}>
              {/* outer block */}
              <rect x="20" y={y} width="280" height={blockH} rx="10" fill={`${blockColor}08`} stroke={blockColor} strokeWidth="1.5" />
              <text x="160" y={y + 16} textAnchor="middle" fill={blockColor} fontSize="11" fontWeight="700">Bloco {i + 1} {i === n - 1 ? '(... até N)' : ''}</text>

              {/* MHA sublayer */}
              {sub(40, y + 24, 240, 30, 'rgba(56,189,248,0.12)', '#38bdf8', 'Multi-Head Attention (heads em ∥)')}
              <text x="160" y={y + 68} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">+ Add &amp; Norm (residual)</text>

              {/* FFN sublayer */}
              {sub(40, y + 78, 240, 30, 'rgba(74,158,237,0.10)', '#4a9eed', 'Feed-Forward (GELU)')}
              <text x="160" y={y + 122} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">+ Add &amp; Norm (residual)</text>

              {/* output label */}
              <text x="160" y={y + blockH - 6} textAnchor="middle" fill={blockColor} fontSize="9" fontWeight="600">
                X{i + 1} = saída do Bloco {i + 1}
              </text>

              {/* arrow to next block */}
              {i < n - 1 && arrow(160, y + blockH, 160, y + blockH + gap - 2)}
            </g>
          );
        })}

        {/* output */}
        {arrow(160, top0 + n * (blockH + gap) - gap, 160, top0 + n * (blockH + gap) - gap + 26)}
        <text x="160" y={top0 + n * (blockH + gap) - gap + 40} textAnchor="middle" fill="var(--text-secondary)" fontSize="10">X_N → entra no decoder (K, V) ou camada final</text>
      </svg>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        <strong>Stacked</strong> (empilhado) refere-se a estes <strong>blocos</strong>: a saída <InlineMath math="X_i" /> de um bloco é exactamente a entrada do bloco seguinte, de forma <strong>sequencial</strong> — ×N vezes (ex: N=6 no Transformer original, N=12 no BERT Base). Dentro de <em>cada</em> bloco, os <strong>heads</strong> da Multi-Head Attention são <strong>paralelos</strong> (mesmo X, processado simultaneamente por vários heads e depois concatenado). O decoder tem a sua própria pilha de N blocos, com uma camada extra de Enc-Dec Attention em cada um.
      </p>
    </div>
  );
};

const MultiHeadDiagram = () => (
  <div style={S.diagram}>
    <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Multi-Head Attention</p>
    <svg viewBox="0 0 580 200" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arr9" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
        </marker>
      </defs>

      {/* Input X */}
      <rect x="20" y="164" width="540" height="28" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="290" y="182" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="600">X (N tokens × d) — entrada partilhada por todos os heads</text>

      {/* Heads */}
      {[['Head 1', 60, '#4a9eed', 'correferência'], ['Head 2', 230, '#4a9eed', 'dependência sintáctica'], ['Head 3', 400, '#4a9eed', 'relação semântica'], ['...', 530, 'var(--text-secondary)', '']].map(([label, cx, color, role], i) => (
        <g key={label}>
          <line x1={cx} y1="164" x2={cx} y2="132" stroke="var(--text-secondary)" strokeWidth="1" markerEnd="url(#arr9)" />
          {i < 3 && (
            <>
              <rect x={cx - 42} y="100" width="84" height="28" rx="6" fill={color} opacity="0.12" stroke={color} strokeWidth="1.2" />
              <text x={cx} y="118" textAnchor="middle" fill={color} fontSize="10" fontWeight="600">{label}</text>
              <text x={cx} y="78" textAnchor="middle" fill={color} fontSize="8">{role}</text>
              <line x1={cx} y1="98" x2={cx} y2="88" stroke={color} strokeWidth="1" markerEnd="url(#arr9)" />
            </>
          )}
          {i === 3 && <text x={cx} y="118" textAnchor="middle" fill="var(--text-secondary)" fontSize="14">···</text>}
        </g>
      ))}

      {/* Concat */}
      <rect x="100" y="42" width="360" height="26" rx="6" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1.5" />
      <text x="280" y="59" textAnchor="middle" fill="var(--text-secondary)" fontSize="10">Concatenar heads ⊕ Projectar com W⁰</text>

      {/* Output */}
      <rect x="180" y="8" width="220" height="26" rx="6" fill="var(--accent-color)" opacity="0.7" />
      <text x="290" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">Output y₁,...,yₙ (dimensão d)</text>
      <line x1="290" y1="42" x2="290" y2="36" stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr9)" />
    </svg>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Cada head aprende um sub-espaço diferente. W⁰ projecta de volta à dimensão d — o output tem a mesma forma que o input, permitindo empilhar blocos.</p>
  </div>
);

const MaskedSelfAttentionDiagram = () => {
  const tokens = ['<s>', 'O', 'gato'];
  const n = tokens.length;
  const cell = 38;
  const offsetX = 70;
  const offsetY = 30;

  const matBox = (rows, color) => (
    <div style={{ display: 'inline-block', border: `1px solid ${color}40`, borderRadius: 4, padding: '0.4rem 0.6rem', background: `${color}10` }}>
      {rows.map((row, i) => (
        <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
          {row.map((v, j) => <span key={j} style={{ width: 38, textAlign: 'right', fontFamily: 'monospace', fontSize: '0.78rem', color }}>{typeof v === 'number' ? v.toFixed(2) : v}</span>)}
        </div>
      ))}
    </div>
  );

  // Q = K (3 tokens × d_k=2), V (3 tokens × 2)
  const QK = [[1.00, 0.00], [0.50, 0.50], [0.20, 0.80]];
  const V = [[0.60, 0.10], [0.20, 0.50], [0.40, 0.90]];
  const scaled = [[0.71, 0.35, 0.14], [0.35, 0.35, 0.35], [0.14, 0.35, 0.48]];
  const masked = [[0.71, '−∞', '−∞'], [0.35, 0.35, '−∞'], [0.14, 0.35, 0.48]];
  const alpha = [[1.00, 0.00, 0.00], [0.50, 0.50, 0.00], [0.27, 0.34, 0.39]];
  const Z = [[0.60, 0.10], [0.40, 0.30], [0.39, 0.55]];

  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Masked Self-Attention (Decoder) — Máscara Causal</p>
      <svg viewBox={`0 0 ${offsetX + n * cell + 10} ${offsetY + n * cell + 10}`} style={{ maxWidth: 280, height: 'auto' }}>
        {tokens.map((t, i) => (
          <g key={`row-${i}`}>
            <text x={offsetX - 8} y={offsetY + i * cell + cell / 2 + 4} textAnchor="end" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">{t}</text>
            <text x={offsetX + i * cell + cell / 2} y={offsetY - 8} textAnchor="middle" fill="var(--text-secondary)" fontSize="11" fontFamily="monospace">{t}</text>
            {tokens.map((_, j) => {
              const allowed = j <= i;
              return (
                <g key={`c-${i}-${j}`}>
                  <rect x={offsetX + j * cell} y={offsetY + i * cell} width={cell} height={cell} fill={allowed ? 'rgba(74,158,237,0.10)' : 'rgba(74,158,237,0.10)'} stroke="var(--text-secondary)" strokeWidth="0.5" />
                  <text x={offsetX + j * cell + cell / 2} y={offsetY + i * cell + cell / 2 + 4} textAnchor="middle" fontFamily="monospace" fontSize="10" fill={allowed ? '#4a9eed' : '#4a9eed'}>{allowed ? 'α' : '−∞'}</text>
                </g>
              );
            })}
          </g>
        ))}
      </svg>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        Linha = posição-query (token que está a "olhar"), coluna = posição-key (token "visto"). Antes do softmax, soma-se <InlineMath math="-\infty" /> aos scores das posições futuras (<span style={{ color: '#4a9eed' }}>vermelho</span>, j {'>'} i) — depois do softmax, esses pesos ficam ≈0. Cada token só pode atender a si próprio e aos anteriores (<span style={{ color: '#4a9eed' }}>verde</span>).
      </p>

      <p style={{ fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>Exemplo Numérico — gerando "&lt;s&gt; O gato"</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.3rem' }}>Q = K (d_k=2)</div>
          {matBox(QK, 'var(--accent-color)')}
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8', marginBottom: '0.3rem' }}>V</div>
          {matBox(V, '#38bdf8')}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>S/√dₖ = Q·Kᵀ/√2</div>
          {matBox(scaled, '#4a9eed')}
        </div>
        <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>+</span>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>máscara causal</div>
          {matBox(masked, '#4a9eed')}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4a9eed', marginBottom: '0.3rem' }}>α = softmax(linha a linha)</div>
          {matBox(alpha, '#4a9eed')}
        </div>
        <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>·V =</span>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>Z = α·V</div>
          {matBox(Z, 'var(--text-primary)')}
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
        Repara na linha de "&lt;s&gt;" (i=0): <InlineMath math="\alpha = [1, 0, 0]" /> — só pode ver a si própria, logo <InlineMath math="Z_0 = V_0" />. Na linha de "gato" (i=2), já vê os 3 tokens e <InlineMath math="Z_2" /> é uma mistura ponderada de <InlineMath math="V_0, V_1, V_2" />. Isto garante que, durante o treino (teacher forcing) e na inferência, a previsão da posição i nunca "espreita" tokens futuros.
      </p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
        <strong>Enc-Dec (cross) attention:</strong> usa exactamente a mesma fórmula <InlineMath math="\text{softmax}(QK^T/\sqrt{d_k})V" /> — a diferença é que <InlineMath math="Q" /> vem do decoder (estado actual), enquanto <InlineMath math="K" /> e <InlineMath math="V" /> vêm da saída do encoder. Não há máscara causal aqui: o decoder pode atender livremente a <strong>todas</strong> as posições da frase de entrada (já totalmente conhecida), só a sua própria self-attention é mascarada.
      </p>
    </div>
  );
};

const PositionalEncodingDiagram = () => {
  const dModel = 16;
  const positions = [0, 1, 2, 3, 4, 5, 6, 7];
  const cellVal = (pos, i) => {
    const k = Math.floor(i / 2);
    const denom = Math.pow(10000, (2 * k) / dModel);
    return i % 2 === 0 ? Math.sin(pos / denom) : Math.cos(pos / denom);
  };
  // Exemplo numérico: para a posição pos=2, PE(pos) é um vector de dimensão d_model
  // (aqui reduzido a 4 para caber no ecrã) que se soma, dimensão a dimensão, ao embedding da palavra.
  const examplePos = 2;
  const exampleEmb = [0.50, -0.20, 0.30, 0.10];
  const examplePE = exampleEmb.map((_, i) => {
    const k = Math.floor(i / 2);
    const denom = Math.pow(10000, (2 * k) / 4);
    return +(i % 2 === 0 ? Math.sin(examplePos / denom) : Math.cos(examplePos / denom)).toFixed(2);
  });
  const exampleSum = exampleEmb.map((v, i) => +(v + examplePE[i]).toFixed(2));
  const vec = (label, vals, color) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '0.78rem', fontWeight: 700, color, marginBottom: '0.3rem' }}>{label}</div>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {vals.map((v, i) => (
          <div key={i} style={{ width: 56, textAlign: 'center', fontSize: '0.78rem', fontFamily: 'monospace', background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 4, padding: '0.35rem 0', color }}>{v.toFixed(2)}</div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Positional Encoding Sinusoidal (Vaswani et al., 2017)</p>
      <div style={S.math}>
        <BlockMath math={`PE_{(pos,\\,2k)} = \\sin\\left(\\frac{pos}{10000^{2k/d_{model}}}\\right), \\quad PE_{(pos,\\,2k+1)} = \\cos\\left(\\frac{pos}{10000^{2k/d_{model}}}\\right)`} />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        Para cada posição <InlineMath math="pos" /> e cada dimensão <InlineMath math="i = 0, \dots, d_{model}-1" />, esta fórmula dá um número — o vector com esses <InlineMath math="d_{model}" /> números é <InlineMath math="PE(pos)" />. É <strong>esse vector</strong> que se soma, dimensão a dimensão, ao embedding da palavra. Exemplo para <InlineMath math="pos=2" /> e <InlineMath math="d_{model}=4" />:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        {vec('embedding da palavra', exampleEmb, 'var(--accent-color)')}
        <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>+</span>
        {vec('PE(pos=2)', examplePE, '#38bdf8')}
        <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>=</span>
        {vec('entrada do encoder/decoder', exampleSum, '#4a9eed')}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        O mapa de calor abaixo mostra os valores de <InlineMath math="PE(pos, i)" /> (sem somar a nenhum embedding) para várias posições e dimensões — serve para visualizar <strong>como o vector PE varia</strong> consoante a posição e a dimensão, não o resultado da soma:
      </p>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'inline-block', minWidth: 480 }}>
          {positions.map(pos => (
            <div key={pos} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginBottom: '0.2rem' }}>
              <div style={{ width: 50, fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-secondary)', flexShrink: 0 }}>pos={pos}</div>
              {Array.from({ length: dModel }).map((_, i) => {
                const v = cellVal(pos, i);
                const intensity = (v + 1) / 2;
                return <div key={i} style={{ width: 24, height: 24, background: `rgba(56,189,248,${intensity})`, flexShrink: 0, borderRadius: 2 }} title={v.toFixed(2)} />;
              })}
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: 0 }}>
        Cada posição recebe um vector único de dimensão d_model, formado por senos/cosenos a frequências diferentes. Como a função é determinística (não aprendida), o modelo pode <strong>extrapolar para sequências mais longas</strong> do que viu no treino — e <InlineMath math="PE(pos+k)" /> pode escrever-se como uma função linear de <InlineMath math="PE(pos)" />, facilitando ao modelo aprender posições relativas.
      </p>
    </div>
  );
};

const TransformerDiagram = () => {
  const arrow = (x1, y1, x2, y2, extra = {}) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--text-secondary)" strokeWidth="1.2" markerEnd="url(#arr5)" {...extra} />
  );
  const block = (x, y, w, h, label, col) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height={h} rx="7" fill={col} opacity="0.15" stroke={col} strokeWidth="1" />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fill={col} fontSize="11" fontWeight="700">{label}</text>
    </g>
  );
  const addNorm = (x, y, w) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={w} height="18" rx="4" fill="var(--bg-primary)" stroke="var(--text-secondary)" strokeWidth="1" />
      <text x={x + w / 2} y={y + 13} textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Add & Norm</text>
    </g>
  );
  // residual: linha tracejada que contorna uma sub-camada pelo lado e junta-se num "+" antes do Add & Norm
  const residual = (fromY, toY, boxRight, plusX, col) => (
    <g key={`${fromY}-${toY}`}>
      <path d={`M ${boxRight} ${fromY} C ${plusX + 14} ${fromY}, ${plusX + 14} ${toY}, ${plusX + 6} ${toY}`} fill="none" stroke={col} strokeWidth="1.2" strokeDasharray="3,2" />
      <circle cx={plusX} cy={toY} r="6" fill="var(--bg-primary)" stroke={col} strokeWidth="1.2" />
      <text x={plusX} y={toY + 3.5} textAnchor="middle" fill={col} fontSize="9" fontWeight="700">+</text>
    </g>
  );
  const ACC = 'var(--accent-color)';
  return (
    <div style={S.diagram}>
      <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Arquitectura Transformer (Encoder + Decoder)</p>
      <svg viewBox="0 0 660 340" style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="arr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
          </marker>
          <marker id="arr5o" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#0284c7" />
          </marker>
        </defs>

        {/* ===== ENCODER (x: 40-240) ===== */}
        <text x="140" y="20" textAnchor="middle" fill={ACC} fontSize="12" fontWeight="700">ENCODER</text>
        <text x="140" y="100" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Saída do encoder → K, V para a Enc-Dec Attention</text>
        {arrow(140, 108, 140, 132)}

        <rect x="40" y="134" width="200" height="140" rx="12" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="6,3" />
        {addNorm(55, 142, 170)}
        {block(55, 168, 170, 32, 'Feed Forward', ACC)}
        {addNorm(55, 208, 170)}
        {block(55, 234, 170, 32, 'Self-Attention', ACC)}
        {residual(270, 217, 240, 254, ACC)}
        {residual(204, 151, 240, 254, ACC)}
        <text x="278" y="204" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">×N</text>

        <rect x="70" y="284" width="140" height="26" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="140" y="301" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Embeddings + Pos. Encoding</text>
        {arrow(140, 284, 140, 274)}

        {/* ===== DECODER (x: 360-560) ===== */}
        <text x="460" y="20" textAnchor="middle" fill="#4a9eed" fontSize="12" fontWeight="700">DECODER</text>

        <rect x="395" y="34" width="130" height="28" rx="7" fill="#4a9eed" opacity="0.8" />
        <text x="460" y="53" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">Linear + Softmax</text>
        {arrow(460, 62, 460, 76)}

        <rect x="360" y="68" width="200" height="206" rx="12" fill="none" stroke="#4a9eed" strokeWidth="1.5" strokeDasharray="6,3" />
        {addNorm(375, 76, 170)}
        {block(375, 102, 170, 32, 'Feed Forward', '#4a9eed')}
        {addNorm(375, 142, 170)}
        {block(375, 168, 170, 32, 'Enc-Dec Attention', '#4a9eed')}
        {addNorm(375, 208, 170)}
        {block(375, 234, 170, 32, 'Masked Self-Attn', '#4a9eed')}
        {residual(270, 217, 560, 574, '#4a9eed')}
        {residual(204, 151, 560, 574, '#4a9eed')}
        {residual(138, 85, 560, 574, '#4a9eed')}
        <text x="598" y="120" fill="var(--text-secondary)" fontSize="9" fontStyle="italic">×N</text>

        <rect x="390" y="284" width="140" height="26" rx="6" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="1" />
        <text x="460" y="301" textAnchor="middle" fill="var(--text-secondary)" fontSize="9">Output Embeddings + Pos.</text>
        {arrow(460, 284, 460, 274)}

        {/* Arrow from encoder output to decoder Enc-Dec Attention (K, V) */}
        <path d="M 230 240 C 300 124, 300 184, 358 184" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arr5o)" />
        <text x="300" y="118" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="600">K, V do encoder</text>
      </svg>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>O encoder usa atenção bidirecional e processa toda a frase de uma vez. O decoder usa atenção mascarada (cada posição só vê as anteriores) e, em cada uma das suas N camadas, faz "Enc-Dec Attention" sobre a saída final do encoder (que fornece K e V).</p>
    </div>
  );
};

export default function NLP6() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={S.page}>
        <Link to="/nlp" style={S.back}><ArrowLeft size={16} /> Voltar</Link>
        <div style={S.lectureTag}>MÓDULO 6</div>
        <h1 style={S.h1}>Atenção e Transformers</h1>

        {/* === SECTION 1 === */}
        <div style={S.section}>
          <h2 style={S.h2}>1. O Bottleneck do Seq2Seq</h2>
          <p style={S.p}>No Seq2Seq clássico, o encoder produz um único context vector fixo c. O decoder apenas conhece o input através desse vector. Para frases longas, a informação da palavra 1 tem de sobreviver dezenas de passos recorrentes antes de chegar ao decoder:</p>

          <div style={{ ...S.diagram, padding: '1.25rem 1.5rem' }}>
            <svg viewBox="0 0 560 100" style={{ maxWidth: '100%', height: 'auto' }}>
              <defs>
                <marker id="arr7" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-secondary)" />
                </marker>
              </defs>
              {['The', 'cat', 'sat', 'on', 'mat'].map((w, i) => (
                <g key={w}>
                  <rect x={20 + i * 52} y="30" width="44" height="32" rx="6" fill="var(--accent-color)" opacity="0.6" />
                  <text x={42 + i * 52} y="50" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">E</text>
                  <text x={42 + i * 52} y="76" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{w}</text>
                  {i < 4 && <line x1={64 + i * 52} y1="46" x2={68 + i * 52} y2="46" stroke="var(--accent-color)" strokeWidth="1.2" markerEnd="url(#arr7)" />}
                </g>
              ))}

              {/* Bottleneck arrow to c */}
              <line x1="274" y1="46" x2="300" y2="46" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arr7)" />

              {/* c vector */}
              <rect x="305" y="28" width="50" height="36" rx="8" fill="#4a9eed" opacity="0.7" />
              <text x="330" y="44" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">c</text>
              <text x="330" y="56" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7">BOTTLENECK</text>

              {/* Arrow from c to decoder */}
              <line x1="357" y1="46" x2="375" y2="46" stroke="#4a9eed" strokeWidth="2" markerEnd="url(#arr7)" />

              {/* Decoder cells */}
              {['Le', 'chat', '...'].map((w, i) => (
                <g key={w}>
                  <rect x={382 + i * 52} y="30" width="44" height="32" rx="6" fill="#4a9eed" opacity="0.6" />
                  <text x={404 + i * 52} y="50" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">D</text>
                  <text x={404 + i * 52} y="76" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">{w}</text>
                  {i < 2 && <line x1={426 + i * 52} y1="46" x2={430 + i * 52} y2="46" stroke="#4a9eed" strokeWidth="1.2" markerEnd="url(#arr7)" />}
                </g>
              ))}
            </svg>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Toda a informação de "The cat sat on mat" comprimida num único vector c. Para 50 palavras, a informação da primeira tem de sobreviver 49 passos.</p>
          </div>

          <div style={{ ...S.highlight, borderColor: '#4a9eed', background: 'rgba(74,158,237,0.10)' }}>
            <strong style={{ color: '#4a9eed' }}>Problema central:</strong> a tradução de frases longas degradava-se sistematicamente. A atenção surgiu exactamente para dar ao decoder <strong>acesso directo a todos os hidden states do encoder</strong>.
          </div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 2 === */}
        <div style={S.section}>
          <h2 style={S.h2}>2. Mecanismo de Atenção (Bahdanau et al., 2014)</h2>
          <p style={S.p}>A atenção resolve o bottleneck: em vez de um único c fixo, o decoder calcula um <strong>vector de contexto dinâmico</strong> a cada passo, pesando todos os hidden states do encoder.</p>

          <AttentionMatrixDiagram />

          <h3 style={S.h3}>Visualização: Mapa de Atenção</h3>
          <AttentionHeatmap />

          <div style={S.note}> A diferença chave: em vez de usar sempre o mesmo c, recalcula-se c_t a cada passo do decoder. O custo é O(n×m) produtos escalares — mas a qualidade de tradução melhora substancialmente em frases longas.</div>

          <h3 style={S.h3}>Atenção com LSTMs</h3>
          <p style={S.p}>O mecanismo de atenção é agnóstico à arquitectura — funciona com RNNs simples, LSTMs e GRUs. A única diferença está no que serve como hidden state para os scores:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Arquitectura</th><th style={S.th}>Hidden state no score</th><th style={S.th}>Nota</th></tr></thead>
              <tbody>
                {[
                  ['RNN simples', 'hₜ (directo)', '—'],
                  ['LSTM', 'hₜ (tipicamente)', 'Cell state Cₜ não entra no score'],
                  ['GRU', 'hₜ', 'Sem cell state separado'],
                ].map(([arch, hs, note]) => (
                  <tr key={arch}><td style={S.td}><strong>{arch}</strong></td><td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{hs}</td><td style={S.td}>{note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> O cell state C circula internamente na LSTM mas não entra nos pesos de atenção. A vantagem da LSTM não está na atenção em si, mas na capacidade do encoder de reter informação de longo prazo nos seus hₜ.</div>
        </div>

        <hr style={S.divider} />

        {/* === SECTION 3 === */}
        <div style={S.section}>
          <h2 style={S.h2}>3. Arquitectura Transformer</h2>
          <p style={S.p}>A atenção sobre RNNs resolve o bottleneck — mas as RNNs continuam a ser sequenciais. O Transformer (Vaswani et al., 2017) elimina a recorrência por completo usando <strong>self-attention</strong>.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>RNN — Sequencial</div>
              <p style={{ fontSize: '0.87rem', margin: 0, color: 'var(--text-secondary)' }}>h_t depende de h_&#123;t-1&#125;: o passo t não pode começar enquanto t-1 não terminar. GPU: 2/20 cores activos. Desperdício.</p>
            </div>
            <div style={{ background: 'rgba(74,158,237,0.10)', border: '1px solid rgba(74,158,237,0.10)', borderRadius: 8, padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#4a9eed', marginBottom: '0.4rem' }}>Transformer — Paralelo</div>
              <p style={{ fontSize: '0.87rem', margin: 0, color: 'var(--text-secondary)' }}>Self-attention calcula todos os tokens em simultâneo. GPU: 20/20 cores activos. Eficiência máxima.</p>
            </div>
          </div>

          <TransformerDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}></th><th style={S.th}>Encoder</th><th style={S.th}>Decoder</th></tr></thead>
              <tbody>
                {[
                  ['Atenção', 'Bidirecional (vê tudo)', 'Mascarada/causal (só vê passado)'],
                  ['Sub-camadas', 'SA + FFN', 'Masked SA + Enc-Dec Attn + FFN'],
                  ['Uso principal', 'Compreensão (BERT)', 'Geração (GPT, ChatGPT)'],
                ].map(([f, enc, dec]) => (
                  <tr key={f}><td style={S.td}><strong>{f}</strong></td><td style={S.td}>{enc}</td><td style={S.td}>{dec}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.note}> <strong>Self-attention ≠ Atenção de Bahdanau.</strong> A atenção clássica liga o decoder ao encoder (cross-attention). A self-attention liga cada token a todos os outros tokens dentro do mesmo bloco, substituindo a recorrência.</div>

          <h3 style={S.h3}>Positional Encoding</h3>
          <p style={S.p}>A self-attention é simétrica em relação à ordem — sem mais nada, "o cão mordeu o homem" e "o homem mordeu o cão" produziriam os mesmos Z's. Por isso, antes da primeira camada, soma-se a cada embedding um <strong>positional encoding</strong>: um vector de senos/cossenos a frequências diferentes, único para cada posição.</p>

          <PositionalEncodingDiagram />

          <h3 style={S.h3}>Self-Attention em Detalhe: Q, K, V</h3>
          <p style={S.p}>Cada palavra é projectada em três vectores diferentes — <strong>Query (Q)</strong>: o que esta palavra está "à procura" noutras palavras; <strong>Key (K)</strong>: o que esta palavra "tem para oferecer", usado para ser comparado com as queries de todas as palavras; <strong>Value (V)</strong>: o conteúdo real que é passado adiante quando uma palavra recebe atenção. As três são obtidas multiplicando os embeddings X por matrizes de pesos aprendidas (Wq, Wk, Wv). A self-attention compara queries com keys para decidir "quem olha para quem", e usa esses pesos para combinar os values:</p>
          <p style={S.p}><InlineMath math="d_k" /> é a dimensão dos vectores Q e K (neste exemplo, <InlineMath math="d_k = 2" />). Os scores Q·Kᵀ são divididos por <InlineMath math="\sqrt{d_k}" /> antes do softmax — sem isto, para vectores com <InlineMath math="d_k" /> grande os produtos escalares tendem a ser muito maiores, o que "satura" o softmax (gradientes muito pequenos). Dividir por <InlineMath math="\sqrt{d_k}" /> mantém os valores numa escala razoável.</p>

          <SelfAttentionMatrixDiagram />

          <p style={S.p}>O Z produzido pela self-attention não substitui directamente X — é somado a X (ligação residual) e depois normalizado (Add & Norm), tal como visto na arquitectura acima:</p>

          <AddNormExampleDiagram />

          <h3 style={S.h3}>Masked Self-Attention (Decoder)</h3>
          <p style={S.p}>No decoder, a self-attention é igual à do encoder — exceto que, antes do softmax, se aplica uma <strong>máscara causal</strong>: soma-se <InlineMath math="-\infty" /> aos scores das posições futuras (j {'>'} i), forçando cada token a "ver" apenas a si próprio e aos anteriores.</p>

          <MaskedSelfAttentionDiagram />

          <h3 style={S.h3}>Feed-Forward Network</h3>
          <p style={S.p}>Cada bloco do Transformer combina a atenção (que mistura informação <em>entre</em> posições) com uma FFN (que processa cada posição <em>independentemente</em>):</p>

          <FFNDiagram />

          <h3 style={S.h3}>Multi-Head Attention</h3>
          <p style={S.p}>Um único head de atenção aprende um tipo de relação. Na prática, usam-se vários heads em paralelo — cada um com as suas próprias matrizes Wq, Wk, Wv (como as da secção anterior), capturando simultaneamente correferência, dependências sintácticas, relações semânticas, etc. Os Z de todos os heads são concatenados e projectados de volta à dimensão d com uma matriz W⁰:</p>

          <div style={S.math}>
            <BlockMath math={`\\text{head}_i = \\text{SelfAttention}(XW_i^Q, XW_i^K, XW_i^V)`} />
            <BlockMath math={`\\text{MultiHead}(X) = (\\text{head}_1 \\oplus \\cdots \\oplus \\text{head}_h)\\,W^O`} />
          </div>

          <MultiHeadDiagram />

          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead><tr><th style={S.th}>Modelo</th><th style={S.th}>Heads</th><th style={S.th}>Hidden size d</th><th style={S.th}>Parâmetros</th></tr></thead>
              <tbody>
                {[['Transformer original', 8, 512, '~65M'], ['BERT Base', 12, 768, '110M'], ['BERT Large', 16, 1024, '340M'], ['GPT-3', 96, 12288, '175B']].map(([m, h, d, p]) => (
                  <tr key={m}><td style={S.td}><strong>{m}</strong></td>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{h}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: 'var(--accent-color)' }}>{d}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace' }}>{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>Encoder/Decoder "Stacked" — Blocos Empilhados ×N</h3>
          <p style={S.p}>Para além dos heads em paralelo, o Transformer empilha <InlineMath math="N" /> blocos idênticos (mas com pesos próprios) sequencialmente: a saída de um bloco é a entrada do seguinte.</p>

          <StackedBlocksDiagram />
        </div>

      </div>
    </div>
  );
}
