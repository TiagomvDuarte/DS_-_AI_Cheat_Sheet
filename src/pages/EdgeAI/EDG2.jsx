import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { modules } from './EdgeAI';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
};

const m = modules[1];

export default function EDG2() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Pruning — Estruturado e Não-Estruturado</h2>

        <div style={S.diagram}>
          <svg width="100%" viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <rect width="740" height="310" fill="var(--bg-secondary)" rx="8" />

            {/* Dense matrix label */}
            <text x="60" y="20" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="monospace">DENSE (8x8)</text>

            {/* Dense 8x8 grid */}
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <rect key={i} x={10 + col * 14} y={26 + row * 14} width="12" height="12" rx="1"
                  fill="#f97316" opacity={0.7 + Math.random() * 0.3} />
              );
            })}

            {/* Arrow to unstructured */}
            <line x1="122" y1="70" x2="155" y2="50" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrO)" />
            <line x1="122" y1="90" x2="155" y2="150" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrO)" />

            {/* Unstructured pruning label */}
            <text x="260" y="20" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">UNSTRUCTURED (50% sparse)</text>

            {/* Unstructured grid — scattered zeros */}
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              const isZero = [1,3,5,8,10,13,17,20,22,25,27,30,33,35,38,40,43,46,49,51,54,56,58,61].includes(i);
              return (
                <rect key={i} x={160 + col * 14} y={26 + row * 14} width="12" height="12" rx="1"
                  fill={isZero ? '#1e293b' : '#f97316'} stroke={isZero ? 'var(--card-border)' : 'none'} strokeWidth="0.5"
                  opacity={isZero ? 1 : 0.75} />
              );
            })}
            <text x="260" y="150" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Speedup: ~1.1x (requer sparse kernels)</text>

            {/* Structured pruning label */}
            <text x="260" y="175" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">STRUCTURED (5x8 — 3 rows removed)</text>

            {/* Structured grid — rows removed */}
            {Array.from({ length: 40 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <rect key={i} x={160 + col * 14} y={183 + row * 14} width="12" height="12" rx="1"
                  fill="#f97316" opacity="0.75" />
              );
            })}
            <text x="260" y="277" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Speedup: ~1.4x em hardware standard</text>

            {/* Lottery ticket diagram */}
            <rect x="450" y="16" width="275" height="120" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="587" y="32" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">LOTTERY TICKET HYPOTHESIS</text>
            <text x="460" y="52" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">1. Treinar rede densa</text>
            <line x1="530" y1="58" x2="560" y2="58" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrO)" />
            <text x="565" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">Dense</text>
            <text x="460" y="74" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">2. Encontrar sub-rede esparsa</text>
            <line x1="530" y1="80" x2="560" y2="80" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrO)" />
            <text x="565" y="84" fill="#f97316" fontSize="8.5" fontFamily="monospace">Winning ticket</text>
            <text x="460" y="96" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">3. Re-treinar esparsa</text>
            <line x1="530" y1="102" x2="560" y2="102" stroke="#f97316" strokeWidth="1" markerEnd="url(#arrO)" />
            <text x="565" y="106" fill="#f97316" fontSize="8.5" fontFamily="monospace">= acc. igual</text>
            <text x="587" y="128" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">Frankle &amp; Carlin, 2019</text>

            {/* Speedup comparison */}
            <rect x="450" y="150" width="275" height="130" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="587" y="166" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="monospace">PIPELINE DE PRUNING</text>
            {[
              'Treinar modelo denso',
              'Calcular importância (L1 / gradiente / Taylor)',
              'Remover menos importantes',
              'Fine-tuning de recuperação',
              'Iterar até sparsity alvo',
            ].map((step, i) => (
              <g key={i}>
                <circle cx="465" cy={180 + i * 20} r="5" fill={color} opacity="0.8" />
                <text x="476" y={184 + i * 20} fill="#94a3b8" fontSize="8.5" fontFamily="monospace">{step}</text>
              </g>
            ))}

            <defs>
              <marker id="arrO" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>O pruning remove pesos ou estruturas neuronais redundantes, reduzindo o tamanho do modelo e a computação necessária. O pruning não-estruturado remove pesos individuais com magnitude abaixo de um threshold — uma rede ResNet-50 pode ter 80% dos pesos reduzidos a zero com menos de 1% de degradação de accuracy. No entanto, sparsidade não-estruturada não acelera directamente em hardware convencional: GPUs e NPUs executam matriz multiplicação em blocos densos — pesos zero são calculados igualmente a menos que se use hardware sparse específico (NVIDIA A100 com sparsidade 2:4).</p>
        <p style={S.p}>O pruning estruturado remove canais, filtros ou camadas inteiras — produz modelos menores e mais densos que correm mais rápido em hardware convencional sem suporte a sparsidade. O pipeline de pruning segue: 1) treinar modelo denso, 2) calcular importância de cada peso/canal (magnitude L1, gradiente, Taylor expansion), 3) remover os menos importantes, 4) fine-tuning para recuperar accuracy, 5) iterar.</p>
        <div style={S.highlight}>
          A Lottery Ticket Hypothesis (Frankle e Carlin, 2019) demonstrou que dentro de uma rede densa existe sempre uma sub-rede esparsa (winning ticket) que, se treinada isoladamente desde o início com os mesmos pesos iniciais, atinge a mesma accuracy — implicações profundas para inicialização e design de arquitecturas.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Quantização — INT8, FP16 e QAT</h2>

        <div style={S.diagram}>
          {/* Row 1: histograms */}
          <svg width="100%" viewBox="0 0 740 110" style={{ display: 'block', marginBottom: '1rem' }}>
            <defs><marker id="arrQ" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker></defs>
            {/* FP32 bell curve */}
            <text x="130" y="14" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="monospace">FP32 — distribuição de pesos</text>
            {Array.from({ length: 50 }).map((_, i) => {
              const x = 10 + i * 5; const normX = (i - 25) / 8;
              const h = Math.round(60 * Math.exp(-0.5 * normX * normX));
              return <rect key={i} x={x} y={80 - h} width="4" height={h} rx="1" fill="#f97316" opacity="0.65" />;
            })}
            <text x="10" y="95" fill="#94a3b8" fontSize="7" fontFamily="monospace">-3.2</text>
            <text x="220" y="95" fill="#94a3b8" fontSize="7" fontFamily="monospace">+3.1</text>
            <text x="130" y="95" fill="#f97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">32-bit float</text>
            {/* Arrow */}
            <line x1="262" y1="55" x2="298" y2="55" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrQ)" />
            <text x="280" y="48" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">quantizar</text>
            {/* INT8 discrete */}
            <text x="430" y="14" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">INT8 — níveis discretos</text>
            {Array.from({ length: 16 }).map((_, i) => {
              const x = 305 + i * 15; const normX = (i - 8) / 2.5;
              const h = Math.round(60 * Math.exp(-0.5 * normX * normX));
              return <rect key={i} x={x} y={80 - h} width="13" height={h} rx="1" fill="#f97316" opacity="0.75" />;
            })}
            <text x="305" y="95" fill="#94a3b8" fontSize="7" fontFamily="monospace">-128</text>
            <text x="535" y="95" fill="#94a3b8" fontSize="7" fontFamily="monospace">+127</text>
            <text x="430" y="95" fill="#f97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">8-bit integer</text>
            {/* Formula box */}
            <rect x="570" y="8" width="165" height="88" rx="6" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="652" y="24" textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700" fontFamily="monospace">Fórmula INT8</text>
            <text x="580" y="42" fill="#e2e8f0" fontSize="8" fontFamily="monospace">S = (max - min) / 255</text>
            <text x="580" y="58" fill="#e2e8f0" fontSize="8" fontFamily="monospace">Z = round(-min / S)</text>
            <text x="580" y="74" fill="#f97316" fontSize="7.5" fontFamily="monospace">q = clamp(round(x/S+Z),</text>
            <text x="580" y="88" fill="#f97316" fontSize="7.5" fontFamily="monospace">          -128, 127)</text>
          </svg>

          {/* Row 2: memory bars + accuracy table + speedup */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* Memory bars */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>MEMÓRIA POR PESO</div>
              <svg viewBox="0 0 200 80" style={{ width: '100%', height: 'auto' }}>
                {[{ l: 'FP32', b: 4 }, { l: 'FP16', b: 2 }, { l: 'INT8', b: 1 }, { l: 'INT4', b: 0.5 }].map((x, i) => (
                  <g key={i}>
                    <rect x={10 + i * 46} y={60 - x.b * 12} width="36" height={x.b * 12} rx="3" fill="#f97316" opacity={0.5 + x.b * 0.1} />
                    <text x={28 + i * 46} y="68" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="monospace">{x.l}</text>
                    <text x={28 + i * 46} y="78" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">{x.b}B</text>
                  </g>
                ))}
              </svg>
            </div>
            {/* Accuracy table */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>ACCURACY vs COMPRESSÃO</div>
              {[{ fmt: 'FP32', acc: 'baseline', mem: '—' }, { fmt: 'FP16', acc: '-0.1%', mem: '2× mem' }, { fmt: 'INT8', acc: '-0.5 a -2%', mem: '4× mem' }, { fmt: 'INT4', acc: '-3 a -10%', mem: '8× mem' }].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontFamily: 'monospace', padding: '0.2rem 0', borderBottom: '1px solid rgba(249,115,22,0.08)' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>{r.fmt}</span>
                  <span style={{ color: 'var(--text-primary)' }}>{r.acc}</span>
                  <span style={{ color: '#94a3b8' }}>{r.mem}</span>
                </div>
              ))}
            </div>
            {/* Speedup */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>SPEEDUP DE HARDWARE</div>
              {[{ hw: 'NVIDIA GPU FP16', s: '2×' }, { hw: 'NVIDIA GPU INT8', s: '4×' }, { hw: 'NVIDIA GPU INT4', s: '8×' }, { hw: 'ARM Cortex-M INT8', s: '4× FP32' }].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontFamily: 'monospace', padding: '0.2rem 0', borderBottom: '1px solid rgba(249,115,22,0.08)' }}>
                  <span style={{ color: '#94a3b8' }}>{r.hw}</span>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>{r.s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: PTQ vs QAT */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.4rem' }}>PTQ — Post-Training Quantization</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Calibração com 100–1000 amostras após treino. Rápido. Queda de accuracy maior em INT4. Não requer re-treino.</div>
            </div>
            <div style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid #f97316', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.4rem' }}>QAT — Quantization-Aware Training</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Simula quantização durante treino (straight-through estimator). Recupera 1–3% de accuracy vs PTQ. Melhor para INT4.</div>
            </div>
          </div>
        </div>

        <p style={S.p}>A quantização reduz a precisão numérica dos pesos e activações — de FP32 (32 bits) para FP16, INT8, ou INT4 — diminuindo memória e aumentando velocidade de inferência. A quantização INT8 é o sweet spot prático: 4x menos memória, 2–4x mais rápido em hardware compatível (ARM com instruções SIMD, NPUs, Google Edge TPU), com degradação de accuracy tipicamente menor que 1% em modelos de visão.</p>
        <p style={S.p}>A quantização post-training (PTQ) aplica-se a modelos já treinados com um pequeno conjunto de calibração (tipicamente 100–1000 amostras) para calcular os parâmetros de escala (scale e zero-point) — disponível no TFLite Converter, PyTorch quantize_dynamic, e ONNX Runtime. A quantization-aware training (QAT) simula os efeitos de quantização durante o treino — gradientes circulam em FP32 mas operações forward usam precisão reduzida com straight-through estimator para o gradiente da operação de arredondamento.</p>
        <div style={S.highlight}>
          A quantização INT4 é o estado da arte para LLMs em edge (GPTQ, AWQ, llama.cpp) — modelos de 7B parâmetros que precisam de 28GB em FP32 ficam com 3.5GB em INT4, correndo num MacBook Air.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Knowledge Distillation</h2>

        <div style={S.diagram}>
          {/* Row 1: Teacher → Soft Labels | Temperature Effect */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* Teacher → Soft Labels */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>TEACHER → SOFT LABELS (T=4)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(249,115,22,0.12)', border: '2px solid #f97316', borderRadius: 6, padding: '0.5rem 0.75rem', textAlign: 'center', minWidth: 90 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>TEACHER</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', marginTop: 2 }}>ResNet-152</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>60M params</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>77.5% top-1</div>
                  <div style={{ fontSize: '0.62rem', color: '#64748b', fontFamily: 'monospace', marginTop: 2 }}>frozen</div>
                </div>
                <div style={{ color: '#f97316', fontSize: '1.2rem' }}>→</div>
                <div style={{ flex: 1 }}>
                  {[{ label: 'gato', val: 0.82 }, { label: 'leopardo', val: 0.10 }, { label: 'cão', val: 0.06 }, { label: 'outros', val: 0.02 }].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace', width: 52 }}>{s.label}</span>
                      <div style={{ flex: 1, background: 'rgba(249,115,22,0.12)', borderRadius: 3, height: 10 }}>
                        <div style={{ width: `${s.val * 100}%`, height: '100%', background: '#f97316', borderRadius: 3, opacity: 0.8 }} />
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#f97316', fontFamily: 'monospace', width: 30 }}>{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Temperature Effect */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>EFEITO DA TEMPERATURA</div>
              <svg viewBox="0 0 260 90" style={{ width: '100%', height: 'auto' }}>
                <text x="0" y="12" fill="#94a3b8" fontSize="8" fontFamily="monospace">T=1 — sharp (pouco info)</text>
                {[0.96, 0.02, 0.01, 0.005, 0.005].map((v, i) => (
                  <rect key={i} x={i * 26} y={35 - Math.round(v * 20)} width="20" height={Math.round(v * 20)} rx="2" fill="#f97316" opacity="0.7" />
                ))}
                <text x="0" y="52" fill="#94a3b8" fontSize="8" fontFamily="monospace">T=4 — soft (mais info)</text>
                {[0.55, 0.25, 0.12, 0.05, 0.03].map((v, i) => (
                  <rect key={i} x={i * 26} y={80 - Math.round(v * 22)} width="20" height={Math.round(v * 22)} rx="2" fill="#f97316" opacity="0.7" />
                ))}
                {['gato', 'leo', 'cão', 'etc', '...'].map((l, i) => (
                  <text key={i} x={i * 26 + 10} y="88" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="monospace">{l}</text>
                ))}
              </svg>
            </div>
          </div>

          {/* Row 2: Student + Loss Formula | Results */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            {/* Student + Loss */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>STUDENT + LOSS COMBINADA</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(194,65,12,0.25)', border: '2px solid #f97316', borderRadius: 6, padding: '0.5rem 0.75rem', textAlign: 'center', minWidth: 90 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>STUDENT</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', marginTop: 2 }}>MobileNetV3</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>5M params</div>
                  <div style={{ fontSize: '0.62rem', color: '#64748b', fontFamily: 'monospace', marginTop: 2 }}>treino activo</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#f97316', marginBottom: '0.4rem' }}>L = α·CE(y_hard) + (1-α)·T²·KL(p_T, p_S)</div>
                  {[
                    'α = 0.1–0.5  (peso das hard labels)',
                    'T = temperatura  (3–8 para soft labels)',
                    'T² = factor de escala nos gradientes KL',
                    'one-hot → CE   |   soft probs → KL',
                  ].map((line, i) => (
                    <div key={i} style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>RESULTADOS (ImageNet)</div>
              {[
                { label: 'Teacher (ResNet-152)', val: 77.5 },
                { label: 'Student sem distill.', val: 68.3 },
                { label: 'Student com distill.', val: 73.1 },
              ].map((r, i) => (
                <div key={i} style={{ marginBottom: '0.6rem' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{r.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ flex: 1, background: 'rgba(249,115,22,0.12)', borderRadius: 3, height: 10 }}>
                      <div style={{ width: `${((r.val - 60) / 25) * 100}%`, height: '100%', background: '#f97316', borderRadius: 3, opacity: i === 1 ? 0.5 : 0.85 }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#f97316', fontFamily: 'monospace', width: 38 }}>{r.val}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={S.p}>O knowledge distillation (Hinton et al., 2015) treina um modelo pequeno (student) para imitar as saídas probabilísticas de um modelo grande (teacher), transferindo o "conhecimento dark" codificado nas soft labels. As soft labels contêm informação rica sobre similaridades inter-classe: uma imagem de gato produz, no teacher, alta probabilidade de gato mas também alguma probabilidade de leopardo e cão — o student aprende estas relações que uma label one-hot não captura.</p>
        <p style={S.p}>O parâmetro de temperatura T escala os logits antes do softmax — temperaturas altas (T=3–8) suavizam a distribuição, tornando soft labels mais informativas para o treino do student. Variantes avançadas: feature distillation (imitar representações intermédias, não apenas outputs); relational knowledge distillation (preservar relações entre exemplos); self-distillation (modelo imita versão anterior de si próprio durante treino).</p>
        <div style={S.highlight}>
          TinyBERT usou distillation em 4 camadas de atenção e activações para comprimir BERT-base (110M params) para TinyBERT (14M params) com 96% da performance em GLUE.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Sparsidade Estruturada e Mixed Precision</h2>

        <div style={S.diagram}>
          {/* Row 1: Sparsidade 2:4 + Channel Pruning */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* 2:4 Sparsity */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.3rem' }}>SPARSIDADE 2:4 (NVIDIA A100)</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace', marginBottom: '0.75rem' }}>exactamente 2 zeros em cada grupo de 4 pesos</div>
              <svg viewBox="0 0 336 40" style={{ width: '100%', height: 'auto', marginBottom: '0.5rem' }}>
                {[
                  [1,0,1,0],[0,1,0,1],[1,1,0,0],[0,0,1,1],[1,0,0,1],[0,1,1,0],[1,0,1,0],[0,1,0,1],
                ].map((group, gi) =>
                  group.map((v, j) => (
                    <rect key={`${gi}-${j}`} x={gi * 42 + j * 10} y={4} width="8" height="32"
                      rx="2" fill={v ? '#f97316' : '#1e293b'} stroke={v ? 'none' : '#334155'} strokeWidth="0.5" opacity={v ? 0.85 : 1} />
                  ))
                )}
              </svg>
              <div style={{ fontSize: '0.72rem', color: '#f97316', fontFamily: 'monospace', textAlign: 'center' }}>2x speedup · 50% menos memória</div>
            </div>

            {/* Channel Pruning */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.3rem' }}>CHANNEL PRUNING (conv 64→45 filtros)</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace', marginBottom: '0.75rem' }}>filtros com L1-norm baixa são removidos</div>
              <svg viewBox="0 0 336 80" style={{ width: '100%', height: 'auto' }}>
                {Array.from({ length: 64 }).map((_, i) => {
                  const removed = [3,7,11,15,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61].includes(i);
                  return (
                    <rect key={i} x={(i % 16) * 21} y={Math.floor(i / 16) * 18} width="18" height="14" rx="2"
                      fill={removed ? '#1e293b' : '#f97316'} stroke={removed ? '#334155' : 'none'}
                      strokeWidth="0.5" opacity={removed ? 0.5 : 0.8} />
                  );
                })}
              </svg>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem' }}>
                <span style={{ fontSize: '0.68rem', color: '#f97316', fontFamily: 'monospace' }}>■ activo (45)</span>
                <span style={{ fontSize: '0.68rem', color: '#475569', fontFamily: 'monospace' }}>■ removido (19)</span>
              </div>
            </div>
          </div>

          {/* Row 2: Mixed Precision Transformer */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>MIXED PRECISION — TRANSFORMER</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              {[
                { label: 'Embedding', prec: 'FP16', note: 'normal' },
                { label: 'Attention QKV', prec: 'FP16', note: 'fast' },
                { label: 'FFN Layer 1', prec: 'INT8', note: '4× faster' },
                { label: 'Layer Norm', prec: 'FP32', note: 'sensível — preservar' },
                { label: 'FFN Layer 2', prec: 'INT8', note: '4× faster' },
                { label: 'Final Linear', prec: 'INT8', note: '4× faster' },
              ].map((l, i) => (
                <div key={i} style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid #f97316', borderRadius: 6, padding: '0.5rem 0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#e2e8f0', fontFamily: 'monospace', fontWeight: 600 }}>{l.label}</div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>{l.note}</div>
                  </div>
                  <div style={{ background: '#f97316', borderRadius: 4, padding: '0.15rem 0.45rem', fontSize: '0.72rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{l.prec}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.6rem', textAlign: 'center' }}>
              Gradientes sempre em FP32 · Loss scaling previne underflow de gradientes FP16
            </div>
          </div>
        </div>

        <p style={S.p}>A sparsidade estruturada e a mixed precision são técnicas complementares à quantização e pruning que optimizam a performance em hardware real. A sparsidade 2:4 da NVIDIA (introduzida nos A100) exige que exactamente 2 em cada 4 pesos consecutivos sejam zero — permite 2x de speedup em sparse tensor cores com hardware dedicado, enquanto mantém paralelismo regular. O formato de peso comprimido ocupa metade da memória.</p>
        <p style={S.p}>A mixed precision training (Micikevicius et al., 2018) usa FP16 para a maioria das operações (mais rápido, menos memória) mas FP32 para parâmetros e operações sensíveis (layer normalization, weight updates) — com loss scaling para evitar underflow de gradientes FP16. O APEX (PyTorch) e o torch.cuda.amp automatizam mixed precision training.</p>
        <div style={S.highlight}>
          A técnica GPTQ (2022) aplica quantização post-training óptima a modelos de linguagem: usando a segunda derivada (Hessian) dos pesos para minimizar o erro de quantização camada a camada — permite INT4 com degradação mínima em modelos com mais de 175B parâmetros.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Ferramentas e Benchmarks de Compressão</h2>

        <div style={S.diagram}>
          <svg width="100%" viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <rect width="740" height="300" fill="var(--bg-secondary)" rx="8" />

            {/* Central node */}
            <rect x="295" y="120" width="150" height="40" rx="6" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2" />
            <text x="370" y="136" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">Compressed</text>
            <text x="370" y="150" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">Model</text>

            {/* Tool nodes */}
            {[
              { x: 10, y: 16, label: 'PyTorch 2.0', sub: 'torch.ao.quantization', color: '#f97316' },
              { x: 200, y: 16, label: 'TFLite Converter', sub: 'PTQ + QAT pipeline', color: '#f97316' },
              { x: 400, y: 16, label: 'ONNX Runtime', sub: 'quantize_static/dynamic', color: '#f97316' },
              { x: 590, y: 16, label: 'Intel OpenVINO', sub: 'NNCF compression', color: '#f97316' },
              { x: 10, y: 230, label: 'HF Optimum', sub: 'hardware-specific opt.', color: '#f97316' },
              { x: 200, y: 230, label: 'Apple coremltools', sub: 'Core ML + quantization', color: '#f97316' },
              { x: 400, y: 230, label: 'Apache TVM', sub: 'auto-tuning compiler', color: '#f97316' },
              { x: 590, y: 230, label: 'Intel Neural Comp.', sub: 'INC — auto mix prec.', color: '#f97316' },
            ].map((t, i) => (
              <g key={i}>
                <rect x={t.x} y={t.y} width="130" height="44" rx="5" fill="rgba(249,115,22,0.06)" stroke={t.color} strokeWidth="1.5" />
                <text x={t.x + 65} y={t.y + 17} textAnchor="middle" fill={t.color} fontSize="8.5" fontWeight="700" fontFamily="monospace">{t.label}</text>
                <text x={t.x + 65} y={t.y + 31} textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">{t.sub}</text>
                {/* Lines to center */}
                <line
                  x1={t.x + 65} y1={i < 4 ? t.y + 44 : t.y}
                  x2={370} y2={i < 4 ? 120 : 160}
                  stroke={t.color} strokeWidth="0.75" strokeDasharray="4,3" opacity="0.5" />
              </g>
            ))}

            {/* MLPerf table */}
            <rect x="10" y="288" width="720" height="16" rx="3" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="370" y="300" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">
              MLPerf Edge — ResNet-50 INT8: Edge TPU 130 inf/s | Jetson AGX Orin 8000 inf/s | RPi 5 45 inf/s | STM32H7 2 inf/s
            </text>
          </svg>
        </div>

        <p style={S.p}>O ecossistema de ferramentas de compressão está a maturar rapidamente, com frameworks de alto nível que automatizam grande parte do processo. O PyTorch 2.0 tem suporte nativo a quantização (torch.ao.quantization) com API unificada para PTQ e QAT, e pruning estruturado e não-estruturado (torch.nn.utils.prune) com suporte a L1, aleatório e personalizado. O TFLite Converter da Google é a pipeline mais usada para mobile e MCU — converte modelos Keras/TF para .tflite com quantização INT8 ou FP16 automática.</p>
        <p style={S.p}>O Hugging Face Optimum é a camada de abstracção para optimização hardware-específica: conecta a ONNX Runtime, OpenVINO, TensorRT e Habana Gaudi com API unificada. O MLCommons MLPerf Inference Edge benchmark é o padrão industrial para comparar performance de plataformas — reporta throughput (queries/segundo) e latência p99 em modelos standard: ResNet-50 (classificação), SSD-MobileNet (detecção), BERT-Large (NLP), 3D U-Net (segmentação médica).</p>
        <div style={S.highlight}>
          A comparação entre plataformas é complexa porque TOPS declarados pelos fabricantes usam precisões e operações diferentes — o MLPerf é o único benchmark neutro com metodologia reproducível e resultados verificados por terceiros.
        </div>
      </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Pruning — Estruturado e Não-Estruturado</strong> — pruning remove pesos de baixa magnitude (não-estruturado) ou neurónios/filtros inteiros (estruturado); pruning estruturado reduz directamente FLOPs e é compatível com hardware dedicado sem sparse execution.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Quantização — INT8, FP16 e QAT</strong> — quantização reduz precisão de FP32 para INT8 ou FP16, diminuindo memória 4× e acelerando inferência em hardware que suporta aritmética inteira; QAT (Quantization-Aware Training) mantém acurácia ao simular quantização durante o treino.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Knowledge Distillation</strong> — um modelo "teacher" grande supervisa o treino de um modelo "student" pequeno, transferindo soft labels (distribuição de probabilidades) em vez de apenas a classe — o student aprende "o que o teacher sabe" mais eficientemente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Sparsidade Estruturada e Mixed Precision</strong> — sparsidade estruturada 2:4 (NVIDIA) garante que 2 em cada 4 pesos são zero, permitindo aceleração real em hardware Ampere; mixed precision usa FP16 em forward/backward e FP32 nos acumuladores para estabilidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ferramentas e Benchmarks de Compressão</strong> — TensorFlow Model Optimization Toolkit, PyTorch ao e ONNX Runtime quantizam modelos; MLPerf Tiny é o benchmark de referência para comparar modelos comprimidos em hardware de edge real.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
