import React from 'react';
import { Link } from 'react-router-dom';
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

const m = modules[8];

export default function EDG9() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}>← Edge AI &amp; TinyML</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* Secção 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Pequenos Modelos de Linguagem — Landscape</h2>
        <p style={S.p}>
          O ecossistema de Small Language Models (SLMs) para edge expandiu dramaticamente em 2023-2024.
          A família Phi (Microsoft): Phi-3-mini (3.8B params) treinado em dados de alta qualidade
          ("textbook data") atinge 69% no MMLU — competitivo com Llama 2 13B. Llama 3.2 1B e 3B
          (Meta, 2024) são especificamente optimizados para edge e mobile — 1B corre num smartwatch
          de alta gama; 3B é o sweet-spot para Raspberry Pi 5 e Android. Gemma 2B (Google) integra
          com TFLite e ML Kit para deployment Android nativo.
        </p>
        <p style={S.p}>
          A regra prática para hardware: INT4 quantização necessita ~0.5 bytes por parâmetro —
          Phi-3-mini 3.8B ocupa 1.9GB em INT4, adequado para iPhone 15 Pro (6GB RAM unificada).
          Modelos acima de 13B parâmetros exigem mais RAM do que a maioria dos dispositivos edge
          têm disponível mesmo em INT4.
        </p>
        <div style={S.diagram}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem' }}>
            {/* Scatter chart */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.5rem' }}>
              <svg viewBox="0 0 460 260" style={{ width: '100%', height: 'auto' }}>
                {/* Axes */}
                <line x1="55" y1="220" x2="445" y2="220" stroke="var(--card-border)" strokeWidth="1.5" />
                <line x1="55" y1="220" x2="55" y2="18" stroke="var(--card-border)" strokeWidth="1.5" />
                <text x="250" y="244" fill="#94a3b8" fontSize="9" textAnchor="middle">Parametros (B)</text>
                <text x="12" y="120" fill="#94a3b8" fontSize="9" textAnchor="middle" transform="rotate(-90,12,120)">MMLU Score (%)</text>
                {/* Y gridlines */}
                {[60,65,70,75,80,85,90].map(v => {
                  const y = 220 - ((v - 55) / 40) * 200;
                  return (
                    <g key={v}>
                      <line x1="52" y1={y} x2="445" y2={y} stroke="var(--card-border)" strokeWidth="0.5" />
                      <text x="48" y={y+3} fill="#64748b" fontSize="7" textAnchor="end">{v}</text>
                    </g>
                  );
                })}
                {/* X labels */}
                {[{lbl:'1B',x:100},{lbl:'3B',x:180},{lbl:'7B',x:285},{lbl:'13B',x:370},{lbl:'70B',x:430}].map(({lbl,x}) => (
                  <text key={lbl} x={x} y="232" fill="#64748b" fontSize="7" textAnchor="middle">{lbl}</text>
                ))}
                {/* Edge zone */}
                <rect x="60" y="18" width="235" height="202" fill="rgba(249,115,22,0.08)" rx="4" />
                <text x="177" y="32" fill="#f97316" fontSize="8" textAnchor="middle" fontWeight="700">Zona Edge (menos de 8B / menos de 4GB INT4)</text>
                {/* Data points */}
                {[
                  {name:'Llama 3.2 1B', x:100, score:62, dx:7, dy:-8, edge:true},
                  {name:'Gemma 2B', x:155, score:70, dx:7, dy:-8, edge:true},
                  {name:'Llama 3.2 3B', x:180, score:68, dx:7, dy:10, edge:true},
                  {name:'Phi-3-mini 3.8B', x:205, score:69, dx:7, dy:-8, edge:true},
                  {name:'Phi-3-small 7B', x:278, score:75, dx:7, dy:-18, edge:true},
                  {name:'Mistral 7B', x:285, score:62, dx:7, dy:10, edge:true},
                  {name:'Llama 3.1 8B', x:315, score:73, dx:7, dy:-8, edge:false},
                  {name:'Llama 3.1 70B', x:430, score:86, dx:-8, dy:-10, edge:false},
                ].map(({name, x, score, dx, dy, edge}) => {
                  const y = 220 - ((score - 55) / 40) * 200;
                  const c = edge ? '#f97316' : '#64748b';
                  return (
                    <g key={name}>
                      <circle cx={x} cy={y} r="5" fill={c} opacity="0.9" />
                      <text x={x+dx} y={y+dy} fill="#cbd5e1" fontSize="7">{name}</text>
                      <text x={x+dx} y={y+dy+8} fill={c} fontSize="7" fontWeight="700">{score}%</text>
                    </g>
                  );
                })}
              </svg>
            </div>
            {/* Memory bars */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem', minWidth: 180 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>Memoria Phi-3-mini 3.8B</div>
              {[
                {lbl:'FP32', val:'15.2GB', w:100},
                {lbl:'FP16', val:'7.6GB', w:50},
                {lbl:'INT8', val:'3.8GB', w:25},
                {lbl:'INT4', val:'1.9GB', w:12.5},
              ].map(({lbl, val, w}, i) => (
                <div key={lbl} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace' }}>{lbl}</span>
                    <span style={{ fontSize: '0.65rem', color: '#f97316', fontFamily: 'monospace' }}>{val}</span>
                  </div>
                  <div style={{ background: 'rgba(249,115,22,0.08)', borderRadius: 3, height: 12, overflow: 'hidden' }}>
                    <div style={{ width: `${w}%`, height: '100%', background: '#f97316', opacity: 1 - i*0.15, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          Targets de hardware: iPhone 15 Pro (6GB unified memory) — suporta modelos até ~12B params em INT4.
          MacBook Air M2 (8-24GB) — adequado para modelos até 13B em INT4. Jetson AGX Orin (32GB) —
          suporta modelos até 70B em INT4. Raspberry Pi 5 (8GB) — sweet-spot no Llama 3.2 3B Q4_K_M.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Quantização INT4 — GGUF e llama.cpp</h2>
        <p style={S.p}>
          O llama.cpp (Gerganov, 2023) democratizou LLMs no edge — implementação C++ com zero dependências
          que corre modelos quantizados em GGUF format em qualquer hardware, CPU ou GPU. O formato GGUF
          (GGML Universal File) encapsula pesos quantizados, metadata, e tokenizer num único ficheiro —
          suporta loading parcial (layers que não cabem em VRAM ficam em RAM/disco, inferência continua
          com penalidade de velocidade).
        </p>
        <p style={S.p}>
          Os k-quants (Q4_K_M, Q5_K_M) são os formatos práticos recomendados: quantizam camadas de
          atenção e embeddings com maior precisão (6-bit) enquanto quantizam FFN em 4-bit — melhor
          perplexity que Q4_0 simples com overhead mínimo. Performance no Raspberry Pi 5 (8GB):
          Llama 3.2 3B Q4_K_M corre a ~8 tokens/s — suficiente para aplicações interactivas.
          MacBook Air M2 com Metal backend: Phi-3-mini Q4_K_M a 40 tokens/s. Jetson AGX Orin com
          CUDA: Llama 3.1 8B Q4 a 25 tokens/s.
        </p>
        <div style={S.diagram}>
          {/* Row 1: GGUF formats (left) + Pipeline + Backends (right) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem', marginBottom: '0.75rem' }}>
            {/* GGUF formats */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem', minWidth: 200 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>FORMATOS GGUF</div>
              {[
                {fmt:'Q4_0', desc:'4-bit simples, rapido', pp:'+0.8', c:'#64748b'},
                {fmt:'Q4_K_M', desc:'4/6-bit misto camadas criticas', pp:'+0.3', c:'#f97316'},
                {fmt:'Q5_K_M', desc:'5-bit misto, melhor qualidade', pp:'+0.15', c:'#f97316'},
                {fmt:'Q8_0', desc:'8-bit, quase sem perdas', pp:'+0.05', c:'#f97316'},
              ].map(({fmt, desc, pp, c}) => (
                <div key={fmt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ background: `${c}20`, border: `1px solid ${c}`, borderRadius: 6, padding: '0.3rem 0.6rem', minWidth: 90, textAlign: 'center' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: c, fontFamily: 'monospace' }}>{fmt}</div>
                    <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'monospace' }}>{desc}</div>
                  </div>
                  <div style={{ fontSize: '0.62rem', color: '#64748b', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>perplexidade {pp}</div>
                </div>
              ))}
            </div>
            {/* Pipeline + Backends */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>PIPELINE DE INFERENCIA llama.cpp</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {['Tokenizer','Embeddings','N x Transformer (ggml tensors)','Sampling (temp/top-p)','Output Token'].map((lbl, i) => (
                    <React.Fragment key={lbl}>
                      <div style={{ flex: 1, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: 6, padding: '0.4rem 0.3rem', textAlign: 'center', fontSize: '0.63rem', color: '#e2e8f0', fontFamily: 'monospace', lineHeight: 1.4 }}>{lbl}</div>
                      {i < 4 && <div style={{ color: '#f97316', fontSize: '0.9rem', flexShrink: 0 }}>›</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.65rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem' }}>BACKENDS SUPORTADOS</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {['Metal (Apple)','CUDA (NVIDIA)','Vulkan (cross)','OpenCL','CPU (fallback)'].map(b => (
                    <div key={b} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid var(--card-border)', borderRadius: 5, padding: '0.25rem 0.5rem', fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace' }}>{b}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Row 2: Performance table */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', padding: '0.5rem 0.85rem', borderBottom: '1px solid var(--card-border)' }}>Performance (tokens/s)</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.72rem', fontFamily: 'monospace' }}>
              <tbody>
                {[
                  {hw:'RPi 5 (8GB)', model:'Llama 3.2 3B Q4_K_M', tps:'~8 t/s'},
                  {hw:'MacBook Air M2', model:'Phi-3-mini Q4_K_M', tps:'~40 t/s'},
                  {hw:'Jetson AGX Orin', model:'Llama 3.1 8B Q4', tps:'~25 t/s'},
                ].map(({hw, model, tps}) => (
                  <tr key={hw} style={{ borderBottom: '1px solid var(--card-border)' }}>
                    <td style={{ padding: '0.4rem 0.85rem', color: '#64748b' }}>{hw}</td>
                    <td style={{ padding: '0.4rem 0.85rem', color: '#94a3b8' }}>{model}</td>
                    <td style={{ padding: '0.4rem 0.85rem', color: '#f97316', fontWeight: 700, textAlign: 'right' }}>{tps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={S.note}>
          O formato GGUF suporta loading parcial: layers que não cabem em VRAM ficam em RAM ou disco,
          a inferência continua com penalidade de velocidade — útil em hardware com VRAM limitada.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Runtimes e Frameworks de Edge LLM</h2>
        <p style={S.p}>
          O ecossistema de runtimes para Edge LLMs diversificou rapidamente. O Ollama é o wrapper mais
          user-friendly de llama.cpp — fornece API REST compatível com OpenAI, gestão de modelos
          (pull/list/delete), e suporte a quantização automática. O MLC LLM (MLC-AI, 2023) usa TVM
          (Tensor Virtual Machine) para compilar modelos GGUF ou HuggingFace para hardware específico —
          gera código C++ ou WASM optimizado para o alvo.
        </p>
        <p style={S.p}>
          O Apple MLX (Apple, 2023) é o framework de ML nativo para Apple Silicon — operações lazy
          evaluation no unified memory (CPU+GPU partilham memória física), optimizado para M1/M2/M3
          chips, com API Python e Swift. A Google AI Edge (2024) integra Gemma 2B e 7B directamente
          em Android via MediaPipe LLM Inference API — on-device inference sem internet, privacidade
          total, suporta LoRA fine-tuning local.
        </p>
        <div style={S.diagram}>
          {/* Row 1: Left runtimes | GGUF center | Right runtimes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            {/* Left runtimes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                {name:'llama.cpp', sub:'C++, zero deps'},
                {name:'Ollama', sub:'REST API, Mac/Linux/Win'},
                {name:'MLC LLM', sub:'TVM-compiled, WebGPU'},
              ].map(({name, sub}) => (
                <div key={name} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid var(--card-border)', borderRadius: 7, padding: '0.4rem 0.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#e2e8f0', fontFamily: 'monospace' }}>{name}</div>
                    <div style={{ fontSize: '0.62rem', color: '#64748b', fontFamily: 'monospace' }}>{sub}</div>
                  </div>
                  <div style={{ color: 'rgba(249,115,22,0.5)', fontSize: '0.9rem' }}>›</div>
                </div>
              ))}
            </div>
            {/* GGUF center */}
            <div style={{ background: 'rgba(249,115,22,0.15)', border: '2px solid #f97316', borderRadius: 10, padding: '0.75rem 1.1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>GGUF Model</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace' }}>pesos + tokenizer</div>
            </div>
            {/* Right runtimes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                {name:'Apple MLX', sub:'Unified mem, M1/M2/M3'},
                {name:'ONNX RT GenAI', sub:'DirectML, cross-platform'},
                {name:'MediaTek NeuroPilot', sub:'Android native NPU'},
              ].map(({name, sub}) => (
                <div key={name} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid var(--card-border)', borderRadius: 7, padding: '0.4rem 0.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ color: 'rgba(249,115,22,0.5)', fontSize: '0.9rem' }}>‹</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#e2e8f0', fontFamily: 'monospace' }}>{name}</div>
                    <div style={{ fontSize: '0.62rem', color: '#64748b', fontFamily: 'monospace' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Row 2: Deployment targets */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.65rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>Targets de Deployment</div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Desktop (Ollama API)','iOS (Core ML + MLX)','Android (ONNX RT)','Embedded Linux','Web (WebLLM)'].map(t => (
                <div key={t} style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 5, padding: '0.3rem 0.65rem', fontSize: '0.65rem', color: '#f97316', fontFamily: 'monospace' }}>{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          O MLC LLM suporta WebGPU como backend — corre LLMs directamente no browser (WebLLM) sem
          instalação, com performance razoável em GPUs discretas modernas. Llama 3.2 3B corre a
          ~10 tokens/s num RTX 4090 via WebGPU.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. On-device ASR e Processamento de Voz</h2>
        <p style={S.p}>
          O Whisper (OpenAI, 2022) é o modelo de ASR (Automatic Speech Recognition) mais importante
          para edge — treinado em 680k horas de áudio, suporta 99 línguas incluindo Português. O
          whisper.cpp (Gerganov) implementa Whisper em C++ com quantização INT8/INT4 e backends
          Metal/CUDA/CoreML — o Whisper tiny corre 2.4x mais rápido que real-time num Raspberry Pi 4
          (4GB), adequado para embedded voice interfaces. O Whisper small em INT8 corre em tempo real
          no Jetson Orin Nano (40 TOPS).
        </p>
        <p style={S.p}>
          A pipeline completa de voice assistant no edge: VAD (Voice Activity Detection) com Silero
          VAD (1.8MB) detecta onset de fala e acorda o sistema do sleep mode; Whisper tiny transcreve;
          SLM local (Phi-3-mini) processa a query; Kokoro TTS (82M params) sintetiza a resposta —
          latência total de 1-3 segundos, sem nenhum dado a sair do dispositivo. O Piper TTS é
          alternativa ultra-leve (menos de 20MB) para MCUs mais potentes — VITS architecture,
          22kHz de qualidade, multilingual.
        </p>
        <div style={S.diagram}>
          {/* Row 1: Whisper pipeline */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>ARQUITECTURA WHISPER</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {[
                {label:'Audio', sub:'(30s)'},
                {label:'Log-mel Spectrogram', sub:'(80 mel bins)'},
                {label:'CNN Encoder', sub:'(2 conv)'},
                {label:'Transformer Encoder', sub:'(4-12 blocos)'},
                {label:'Transformer Decoder', sub:'(cross-attn)'},
                {label:'Texto', sub:'(tokens)'},
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  <div style={{ flex: 1, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.35)', borderRadius: 6, padding: '0.35rem 0.25rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 600, color: '#e2e8f0', fontFamily: 'monospace', lineHeight: 1.3 }}>{s.label}</div>
                    <div style={{ fontSize: '0.57rem', color: '#64748b', fontFamily: 'monospace' }}>{s.sub}</div>
                  </div>
                  {i < 5 && <div style={{ color: '#f97316', fontSize: '0.9rem', flexShrink: 0 }}>›</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Row 2: model table + voice pipeline */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {/* Model table */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', padding: '0.45rem 0.75rem', borderBottom: '1px solid var(--card-border)', textAlign: 'center' }}>Modelos Whisper para Edge</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.68rem', fontFamily: 'monospace' }}>
                <thead><tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                  {['Modelo','Params','Tamanho','WER Ingles','RPi 4'].map(h => <th key={h} style={{ padding: '0.3rem 0.5rem', color: '#64748b', fontWeight: 700, textAlign: 'center' }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {[
                    {m:'tiny', p:'39M', sz:'74MB FP16', wer:'74%', rpi:'2.4x RT'},
                    {m:'base', p:'74M', sz:'141MB FP16', wer:'85%', rpi:'0.8x RT'},
                    {m:'small', p:'244M', sz:'463MB FP16', wer:'91%', rpi:'0.3x RT'},
                  ].map(({m, p, sz, wer, rpi}) => (
                    <tr key={m} style={{ borderBottom: '1px solid var(--card-border)' }}>
                      <td style={{ padding: '0.3rem 0.5rem', color: '#f97316', fontWeight: 700, textAlign: 'center' }}>{m}</td>
                      <td style={{ padding: '0.3rem 0.5rem', color: '#94a3b8', textAlign: 'center' }}>{p}</td>
                      <td style={{ padding: '0.3rem 0.5rem', color: '#94a3b8', textAlign: 'center' }}>{sz}</td>
                      <td style={{ padding: '0.3rem 0.5rem', color: '#94a3b8', textAlign: 'center' }}>{wer}</td>
                      <td style={{ padding: '0.3rem 0.5rem', color: '#64748b', textAlign: 'center' }}>{rpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Voice pipeline */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', textAlign: 'center' }}>Pipeline Voice Assistant On-device</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                {[
                  {label:'Silero VAD', sub:'1.8MB'},
                  {label:'Whisper tiny', sub:'74MB INT8'},
                  {label:'Phi-3-mini', sub:'1.9GB INT4'},
                  {label:'Kokoro TTS', sub:'82MB'},
                  {label:'Audio Saida', sub:''},
                ].map((s, i) => (
                  <React.Fragment key={s.label}>
                    <div style={{ flex: 1, background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.35)', borderRadius: 6, padding: '0.3rem 0.2rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.6rem', fontWeight: 600, color: '#e2e8f0', fontFamily: 'monospace', lineHeight: 1.3 }}>{s.label}</div>
                      {s.sub && <div style={{ fontSize: '0.55rem', color: '#64748b', fontFamily: 'monospace' }}>{s.sub}</div>}
                    </div>
                    {i < 4 && <div style={{ color: '#f97316', fontSize: '0.85rem', flexShrink: 0 }}>›</div>}
                  </React.Fragment>
                ))}
              </div>
              <div style={{ fontSize: '0.63rem', color: '#64748b', fontFamily: 'monospace', textAlign: 'center' }}>Latencia total: 1-3 segundos — nenhum dado sai do dispositivo</div>
            </div>
          </div>
        </div>
        <div style={S.note}>
          Silero VAD é fundamental para eficiência energética — acorda o pipeline ASR apenas quando
          detecta voz, reduzindo consumo em dispositivos battery-powered até 90% comparado com
          processamento contínuo.
        </div>
      </div>

      <hr style={S.divider} />

      {/* Secção 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Aplicações e Casos de Uso de Edge LLMs</h2>
        <p style={S.p}>
          Edge LLMs desbloqueiam aplicações impossíveis com cloud LLMs por razões de latência,
          privacidade, custo ou conectividade. RAG (Retrieval-Augmented Generation) local é o caso
          de uso empresarial mais frequente: documentação interna, manuais técnicos ou registos
          médicos indexados localmente (ChromaDB ou Qdrant em modo embebido), pesquisa por similaridade
          com modelos de embedding leves (nomic-embed-text 137M params), resposta gerada por Phi-3-mini
          ou Gemma 2B — sem nenhum dado sensível a sair do dispositivo.
        </p>
        <p style={S.p}>
          Code completion local com Continue.dev + Ollama + DeepSeek-Coder 1.3B é funcional em
          qualquer laptop, sem subscrição de $20/mês e sem código a subir para servers externos.
          Em robótica autónoma, LLMs locais permitem raciocínio de alto nível (interpretação de
          instruções em linguagem natural, planeamento de tasks) sem depender de conectividade
          cloud — crítico para robots industriais em ambientes com rede isolada.
        </p>
        <div style={S.diagram}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem', textAlign: 'center' }}>Landscape de Aplicacoes Edge LLM</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {[
              {title:'RAG Local', desc:'ChromaDB + nomic-embed + Phi-3-mini'},
              {title:'Code Completion', desc:'Continue.dev + Ollama + DeepSeek-Coder'},
              {title:'Dispositivo Medico', desc:'Notas clinicas on-device nunca sai da rede'},
              {title:'Assistente Industrial', desc:'Docs de maquinaria sem internet'},
              {title:'Smart Home', desc:'Home Assistant + Ollama local'},
              {title:'Traducao Offline', desc:'Llama 3.2 3B no telemovel'},
              {title:'Email Privado', desc:'Sumarizacao e rascunho sem cloud'},
              {title:'App Educativa', desc:'Tutor local em tablet'},
            ].map(({title, desc}) => (
              <div key={title} style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 8, padding: '0.55rem 0.65rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.25rem' }}>{title}</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: 'rgba(249,115,22,0.12)', border: '1.5px solid #f97316', borderRadius: 8, padding: '0.55rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>Robo Autonomo</div>
              <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'monospace' }}>Raciocinio LLM sem dependencia cloud</div>
            </div>
          </div>
        </div>
        <div style={S.highlight}>
          Custo comparativo em escala: 10 milhões de tokens/dia com GPT-4o custa ~$40/dia. Com
          Phi-3-mini num servidor edge de $500 amortizado em 3 anos custa $0.46/dia — 87x mais
          barato em escala para workloads previsíveis e de domínio específico.
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Pequenos Modelos de Linguagem — Landscape</strong> — Phi-3-mini (3.8B), Gemma 2B e Llama 3.2 1B são SLMs (Small Language Models) com performance surpreendente em benchmarks de raciocínio; quantizados para INT4 cabem em 2–4GB e correm em smartphones de gama média.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Quantização INT4 — GGUF e llama.cpp</strong> — llama.cpp usa o formato GGUF para quantizar modelos em INT4/INT8 com técnicas como Q4_K_M que preservam camadas críticas em maior precisão; atinge 20–40 tokens/s em M-series MacBooks sem GPU.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Runtimes e Frameworks de Edge LLM</strong> — MLC LLM (TVM-based), ONNX Runtime GenAI e ExecuTorch (Meta) compilam LLMs para hardware específico; suportam iOS, Android, Windows e MCUs de alta performance como o Jetson Orin.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>On-device ASR e Processamento de Voz</strong> — Whisper.cpp executa reconhecimento de fala Whisper quantizado em CPU; modelos MMS (Meta) e Moonshine são optimizados para baixa latência no dispositivo — critícos para assistentes de voz com privacidade total.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Aplicações e Casos de Uso de Edge LLMs</strong> — assistentes offline, tradução em tempo real sem internet, copilots de código em IDEs locais e análise de documentos sensíveis (médicos, legais) sem cloud são os casos de uso que justificam o investimento em edge LLMs.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
