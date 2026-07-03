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

const m = modules[2];

export default function EDG3() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}><ArrowLeft size={16} /> Edge AI</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* SECTION 1 */}
      <div style={S.section}>
        <h2 style={S.h2}>1. TFLite Micro — Runtime para MCUs</h2>
        <div style={S.diagram}>
          {/* Row 1: Pipeline */}
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>PIPELINE DE CONVERSÃO</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { label: 'TF Model (.pb)', sub: 'Keras / SavedModel' },
              null,
              { label: 'TFLite Converter', sub: 'INT8 PTQ obrigatório' },
              null,
              { label: '.tflite flatbuffer', sub: 'zero-copy em FLASH' },
              null,
              { label: 'TFLite Micro Interp.', sub: 'sem heap dinâmico' },
              null,
              { label: 'MCU Hardware', sub: 'Cortex-M4/M7, ESP32' },
            ].map((item, i) => item === null
              ? <div key={i} style={{ color: '#f97316', fontSize: '1.1rem' }}>→</div>
              : <div key={i} style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid #f97316', borderRadius: 6, padding: '0.4rem 0.7rem', textAlign: 'center', flex: 1, minWidth: 100 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{item.label}</div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace', marginTop: 2 }}>{item.sub}</div>
                </div>
            )}
          </div>

          {/* Row 2: Interpreter Internals */}
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem', borderTop: '1px solid var(--card-border)', paddingTop: '0.85rem' }}>INTERPRETER INTERNALS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {[
              { name: 'OpResolver', lines: ['registry de ops suportados', 'apenas ops usados → binário menor'], highlight: '40 ops vs 400+ full TFLite' },
              { name: 'AllocateTensors', lines: ['memória estática, sem heap', 'arena passado pelo programador'], highlight: 'AllocateTensors() uma vez' },
              { name: 'Invoke', lines: ['executa op-by-op em loop', 'CMSIS-NN SIMD em Cortex-M4/M7'], highlight: 'Invoke() no loop principal' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace', marginBottom: '0.4rem' }}>{item.name}</div>
                {item.lines.map((l, j) => <div key={j} style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.15rem' }}>{l}</div>)}
                <div style={{ fontSize: '0.72rem', color: '#f97316', fontFamily: 'monospace', marginTop: '0.35rem' }}>{item.highlight}</div>
              </div>
            ))}
          </div>

          {/* Row 3: Memory Layout */}
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem', borderTop: '1px solid var(--card-border)', paddingTop: '0.85rem' }}>MEMORY LAYOUT — SRAM ARENA (exemplo keyword spotting)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'monospace', width: 40 }}>FLASH</span>
              <div style={{ flex: 1, background: '#f97316', borderRadius: 4, padding: '0.2rem 0.6rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>Modelo pesos — 300 KB</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>flatbuffer C array</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'monospace', width: 40 }}>SRAM</span>
              <div style={{ display: 'flex', gap: '0.35rem', flex: 1 }}>
                <div style={{ flex: 5, background: 'rgba(249,115,22,0.7)', borderRadius: 4, padding: '0.2rem 0.6rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>Persistent — 50 KB</span>
                </div>
                <div style={{ flex: 3, background: 'rgba(249,115,22,0.35)', borderRadius: 4, padding: '0.2rem 0.6rem' }}>
                  <span style={{ fontSize: '0.7rem', color: '#fff', fontFamily: 'monospace' }}>Temp — 30 KB</span>
                </div>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>activações reutilizadas</span>
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace', marginBottom: '0.85rem' }}>
            Persistent: params modelo + op data (sobrevive entre Invoke()) &nbsp;·&nbsp; Temp: tensor buffers reutilizados — peak = maior layer de activações
          </div>

          {/* Row 4: Ops */}
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '0.85rem' }}>OPS SUPORTADOS (subset)</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {['CONV_2D','DEPTHWISE_CONV','FULLY_CONNECTED','RESHAPE','SOFTMAX','ADD','MUL','MAX_POOL'].map(op => (
              <span key={op} style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 4, padding: '0.15rem 0.5rem', fontSize: '0.72rem', color: '#f97316', fontFamily: 'monospace' }}>{op}</span>
            ))}
          </div>
        </div>
        <p style={S.p}>O TensorFlow Lite for Microcontrollers (TFLite Micro) é o runtime de inferência da Google optimizado para microcontroladores sem sistema operativo, sem heap dinâmico e com menos de 256KB de SRAM. A diferença fundamental em relação ao TFLite mobile: sem malloc — toda a memória é alocada estaticamente num arena de bytes passado pelo programador. O OpResolver regista apenas os operadores necessários ao modelo — compilado com apenas os ops usados, reduzindo significativamente o tamanho do binário (um modelo de keyword spotting pode ter binário de 100KB).</p>
        <p style={S.p}>O modelo .tflite é armazenado em FLASH como array de bytes em C — o flatbuffer format permite acesso zero-copy aos pesos sem deserialização. O pipeline completo: 1) converter modelo Keras/TF para .tflite com TFLite Converter (com quantização INT8 obrigatória para MCUs); 2) xxd -i model.tflite model_data.cc gera array C; 3) incluir no projecto CMake com tflite-micro como submodule; 4) criar MicroInterpreter com arena estático; 5) chamar Invoke() no loop principal. Suporta ARM Cortex-M4/M7/M33, ESP32, Arduino, e targets RISC-V via CMSIS-NN para aceleração com instruções SIMD em operações de convolução.</p>
        <div style={S.note}>Os 40 ops suportados pelo TFLite Micro cobrem a esmagadora maioria das arquitecturas práticas — CONV_2D, DEPTHWISE_CONV, FULLY_CONNECTED, RESHAPE, SOFTMAX, ADD, MUL e MAX_POOL são suficientes para CNN, RNN e autoencoder compactos.</div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 2 */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Arduino Nano 33 BLE Sense — Plataforma de Referência</h2>
        <div style={S.diagram}>
          {/* Row 1: SoC + Sensors | Sketch Structure */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* SoC + Sensors */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid #f97316', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.15rem' }}>nRF5340 SoC</div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>64MHz Cortex-M4F | 256KB RAM | 1MB FLASH</div>
              <div style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid #f97316', borderRadius: 6, padding: '0.4rem 0.7rem', textAlign: 'center', marginBottom: '0.75rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>Cortex-M4F @ 64MHz</div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>FPU + BLE 5.0 radio</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {[
                  { label: 'LSM9DS1', desc: '9-DOF IMU (accel+gyro+mag, SPI)' },
                  { label: 'MP34DT05', desc: 'PDM Microphone' },
                  { label: 'APDS-9960', desc: 'Gesture + Colour + Proximity (I2C)' },
                  { label: 'LPS22HB', desc: 'Pressure (I2C)' },
                  { label: 'HTS221', desc: 'Humidity + Temperature (I2C)' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 4, padding: '0.1rem 0.4rem', fontSize: '0.68rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{s.label}</span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace' }}>{s.desc}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.6rem', textAlign: 'center' }}>USB-C | GPIO | I2C | SPI | UART | PWM</div>
            </div>

            {/* Sketch Structure + Use Cases */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.6rem' }}>SKETCH — Arduino_TensorFlowLite</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { fn: 'setup()', lines: ['loadModel(model_data)', 'resolver.AddConv2D()', 'interpreter.AllocateTensors()', 'initSensors()'] },
                    { fn: 'loop()', lines: ['readSensor(input_buf)', 'preprocess(input_buf)', 'interpreter.Invoke()', 'postprocess(output)'] },
                  ].map((block, i) => (
                    <div key={i}>
                      {i > 0 && <div style={{ textAlign: 'center', color: '#f97316', fontSize: '0.9rem', margin: '0.1rem 0' }}>↓</div>}
                      <div style={{ background: 'var(--bg-primary)', border: '1px solid #f97316', borderRadius: 6, padding: '0.5rem 0.7rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.3rem' }}>{block.fn}</div>
                        {block.lines.map(l => <div key={l} style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>{l}</div>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Use Cases */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>CASOS DE USO CANÓNICOS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
              {[
                { title: 'Keyword Spotting', detail: '15KB INT8 · 95% acc' },
                { title: 'Gesture Recognition', detail: '20 classes · 97% acc' },
                { title: 'Anomaly Detection', detail: 'vibração · autoencoder' },
                { title: 'Consumo normal', detail: '2.5mA @ inferência' },
                { title: 'Sleep + wake-word', detail: '0.3mA → 1 ano bateria' },
                { title: 'Janela deslizante', detail: '150ms / janela 1s' },
              ].map((r, i) => (
                <div key={i} style={{ borderLeft: '2px solid #f97316', paddingLeft: '0.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{r.title}</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>{r.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={S.p}>O Arduino Nano 33 BLE Sense é a plataforma de referência para TinyML — combina um microcontrolador nRF5340 (Nordic Semiconductor, Cortex-M4F a 64MHz, 256KB RAM, 1MB FLASH) com sensores integrados que cobrem os casos de uso mais comuns: IMU de 9 eixos (acelerómetro + giroscópio + magnetómetro) para reconhecimento de gestos e actividade; microfone PDM para keyword spotting; sensor APDS-9960 para detecção de gestos por proximidade e cor.</p>
        <p style={S.p}>A biblioteca Arduino_TensorFlowLite encapsula o TFLite Micro, tornando o deployment acessível com o IDE Arduino — basta incluir o modelo como array C, criar o intérprete com arena de tamanho adequado (tipicamente 30-80KB), e invocar a inferência no loop. O consumo energético é crítico: em inferência contínua de keyword spotting, o nRF5340 em modo normal consome 2.5mA — com DSP hardware e wake-on-detect, o modo sleep com wake-word detection consome 0.3mA, dando mais de 1 ano de vida a uma bateria de 1000mAh.</p>
        <div style={S.highlight}>Keyword spotting com Edge Impulse + Arduino Nano 33: modelo DS-CNN de 15KB em INT8, accuracy de 95%, latência de 150ms por janela de 1 segundo, 30-80KB de arena SRAM, correndo em loop contínuo com janela deslizante.</div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 3 */}
      <div style={S.section}>
        <h2 style={S.h2}>3. STM32 e CMSIS-NN — Alta Performance em MCU</h2>
        <div style={S.diagram}>
          {/* Row 1: STM32H7 + CMSIS-NN comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* STM32H7 */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid #f97316', borderRadius: 8, padding: '0.85rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.65rem' }}>STM32H7 — Cortex-M7 @ 480MHz</div>
              <div style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid #f97316', borderRadius: 6, padding: '0.4rem 0.7rem', marginBottom: '0.65rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>Cortex-M7 Core</div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>FPU (SP+DP) | I/D cache 16KB</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.75rem' }}>
                {[
                  { label: 'ITCM-RAM 1MB', desc: 'zero wait state' },
                  { label: 'DTCM 512KB', desc: 'stack + activações' },
                  { label: 'SDRAM externa 4MB', desc: 'modelo grande + buffers' },
                ].map(b => (
                  <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ background: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: 4, padding: '0.1rem 0.45rem', fontSize: '0.7rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{b.label}</span>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>{b.desc}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>X-CUBE-AI WORKFLOW</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
                {['Keras model', 'Cube.AI analyzer', 'Validation', 'C code gen', 'STM32 flash'].map((step, i) => (
                  <React.Fragment key={step}>
                    <span style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: 4, padding: '0.1rem 0.4rem', fontSize: '0.65rem', color: '#f97316', fontFamily: 'monospace' }}>{step}</span>
                    {i < 4 && <span style={{ color: '#f97316', fontSize: '0.7rem' }}>›</span>}
                  </React.Fragment>
                ))}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace', marginTop: '0.4rem' }}>Reporta FLOPS, RAM, FLASH · Gera C + CMSIS-NN pronto a compilar</div>
            </div>

            {/* CMSIS-NN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.65rem' }}>CMSIS-NN vs STANDARD CONV</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  {[
                    { name: 'Standard im2col+GEMM', lines: ['cache-unfriendly layout', '1 INT8 por clock'] },
                    { name: 'CMSIS-NN DSP-SIMD', lines: ['SIMD32 — 4x INT8 por clock', 'instrução SMLAD/SMLABB'] },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'var(--bg-primary)', border: '1px solid #f97316', borderRadius: 6, padding: '0.5rem 0.7rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{item.name}</div>
                      {item.lines.map(l => <div key={l} style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>{l}</div>)}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.4rem' }}>Latência conv layer (Cortex-M7):</div>
                {[
                  { label: 'Standard', val: 100, pct: '100%', dim: true },
                  { label: 'CMSIS-NN', val: 18, pct: '18%', dim: false },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', width: 70 }}>{r.label}</span>
                    <div style={{ flex: 1, background: 'rgba(249,115,22,0.12)', borderRadius: 3, height: 10 }}>
                      <div style={{ width: r.pct, height: '100%', background: '#f97316', borderRadius: 3, opacity: r.dim ? 0.35 : 0.9 }} />
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#f97316', fontFamily: 'monospace', width: 60 }}>{r.val}ms{!r.dim ? ' (5.5×)' : ''}</span>
                  </div>
                ))}
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace', marginTop: '0.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '0.5rem' }}>
                  STM32MP1/MP2: dual Cortex-A + Cortex-M · Linux em A-core, RTOS em M-core
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={S.p}>A família STM32 (STMicroelectronics) é a plataforma mais usada em produção industrial para TinyML — o STM32H7 com Cortex-M7 a 480MHz é o topo de linha para MCUs, com 1MB de RAM de acesso zero-wait-state e FPU que acelera operações em float. O CMSIS-NN (ARM Cortex Microcontroller Software Interface Standard for Neural Networks) é a biblioteca de baixo nível que implementa kernels de rede neuronal optimizados para instruções SIMD do Cortex-M: em vez de iterar sobre activações e pesos individualmente, usa SIMD32 para processar 4 valores INT8 por clock — 4x speedup em convolução.</p>
        <p style={S.p}>A ferramenta X-CUBE-AI da STMicroelectronics analisa modelos Keras/ONNX, reporta FLOPS, RAM e FLASH necessários, valida accuracy pós-conversão, e gera código C optimizado com CMSIS-NN pronto a compilar com STM32CubeMX. O STM32MP1 e STM32MP2 são processadores de aplicação com dual Cortex-A + Cortex-M — executam Linux no A-core (para gestão e comunicação) e RTOS no M-core (para controlo e aquisição de sensores), com modelos de ML em ambos os cores conforme latência exigida.</p>
      </div>

      <hr style={S.divider} />

      {/* SECTION 4 */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Edge Impulse — Plataforma de Desenvolvimento TinyML</h2>
        <div style={S.diagram}>
          {/* Pipeline steps */}
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>PIPELINE INTEGRADA</div>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '0.35rem', marginBottom: '1rem' }}>
            {[
              { label: 'Data Acquisition', detail: ['Upload CSV/WAV/img', 'Serial device', 'Labeling integrado'] },
              { label: 'Impulse Design', detail: ['Input block', 'DSP block', 'Learning block'] },
              { label: 'Training Cloud', detail: ['Auto-tuning HPO', 'Confusion matrix', 'RAM/FLASH report'] },
              { label: 'Validation on Target', detail: ['Simulated hw', 'Device runner', 'Latency measure'] },
              { label: 'Deployment 1-click', detail: ['Arduino .zip', 'C++ library', 'Docker Linux'], highlight: true },
            ].map((stage, i) => (
              <React.Fragment key={i}>
                <div style={{ flex: 1, background: 'rgba(249,115,22,0.06)', border: `1px solid ${stage.highlight ? '#f97316' : 'var(--card-border)'}`, borderRadius: 8, padding: '0.7rem 0.6rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.4rem' }}>{stage.label}</div>
                  {stage.detail.map(d => <div key={d} style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.2rem' }}>{d}</div>)}
                  <div style={{ fontSize: '0.65rem', color: '#f59e0b', fontFamily: 'monospace', marginTop: '0.5rem' }}>Step {i + 1}</div>
                </div>
                {i < 4 && <div style={{ color: '#f97316', fontSize: '1rem', alignSelf: 'center', flexShrink: 0 }}>›</div>}
              </React.Fragment>
            ))}
          </div>

          {/* DSP Blocks */}
          <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.6rem' }}>DSP BLOCKS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
              {[
                { name: 'Spectral Features', desc: 'FFT vibração' },
                { name: 'MFE', desc: 'Mel Filterbank audio' },
                { name: 'Image', desc: 'resize + normalize' },
                { name: 'Raw Data', desc: 'série temporal' },
                { name: 'FOMO', desc: '30fps MCU detection' },
              ].map(b => (
                <div key={b.name} style={{ borderLeft: '2px solid #f97316', paddingLeft: '0.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{b.name}</div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'monospace' }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={S.p}>O Edge Impulse é a plataforma de MLOps para TinyML mais adoptada — permite ir de dados brutos a modelo deployado num MCU em menos de uma hora, sem conhecimento profundo de deep learning ou programação embebida. A pipeline integrada cobre: aquisição de dados (conectar dispositivo via serial e gravar amostras directamente na plataforma, ou importar datasets existentes); design do impulso (seleccionar blocos de processamento de sinal + arquitecturas de rede pré-configuradas); treino em cloud com auto-tuning de hiperparâmetros; validação de accuracy e performance no alvo.</p>
        <p style={S.p}>O bloco Spectral Features aplica FFT com sobreposição de janelas ao sinal do acelerómetro — extrai magnitude e fase por banda de frequência, reduzindo drasticamente a dimensionalidade de entrada para o classificador. O FOMO (Faster Objects, More Objects) é a arquitectura de object detection criada pelo Edge Impulse especificamente para MCUs: 30x mais rápido que MobileNet SSD com 5x menos memória, correndo a 30fps no Arduino Portenta H7 com detecção de objectos em imagens 96x96.</p>
        <div style={S.note}>O EON Tuner do Edge Impulse explora automaticamente o espaço de arquitecturas e hiperparâmetros, apresentando opções Pareto-óptimas entre accuracy, RAM e FLASH para o hardware alvo seleccionado.</div>
      </div>

      <hr style={S.divider} />

      {/* SECTION 5 */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Ciclo de Vida de Modelos TinyML</h2>
        <div style={S.diagram}>
          {/* Row 1: Lifecycle steps + Failure modes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '1rem' }}>
            {/* Lifecycle steps */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace', marginBottom: '0.75rem' }}>CICLO DE VIDA — HARDWARE CONSTRAINTS FIRST</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {[
                  { n: '1', label: 'Problem Definition', detail: 'MCU, latência, memória, accuracy' },
                  { n: '2', label: 'Data Collection', detail: 'sensor data, labelling, augment' },
                  { n: '3', label: 'Model Design', detail: 'NAS dentro de constrangimentos' },
                  { n: '4', label: 'Training + Compression', detail: 'PTQ INT8, pruning' },
                ].map(s => (
                  <div key={s.n} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid #f97316', borderRadius: 8, padding: '0.6rem 0.65rem' }}>
                    <div style={{ fontSize: '0.65rem', color: '#f59e0b', fontFamily: 'monospace', marginBottom: '0.2rem' }}>Step {s.n}</div>
                    <div style={{ fontSize: '0.73rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.25rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.67rem', color: '#94a3b8', fontFamily: 'monospace' }}>{s.detail}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {[
                  { n: '5', label: 'Validation on Target', detail: 'RAM/FLASH profiling, latência' },
                  { n: '6', label: 'Deployment', detail: 'OTA ou USB flash' },
                  { n: '7', label: 'Monitoring', detail: 'drift, error logging → re-treino' },
                ].map(s => (
                  <div key={s.n} style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid #f97316', borderRadius: 8, padding: '0.6rem 0.65rem' }}>
                    <div style={{ fontSize: '0.65rem', color: '#f59e0b', fontFamily: 'monospace', marginBottom: '0.2rem' }}>Step {s.n}</div>
                    <div style={{ fontSize: '0.73rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.25rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.67rem', color: '#94a3b8', fontFamily: 'monospace' }}>{s.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Failure modes */}
            <div style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.85rem', minWidth: 200 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.65rem' }}>FALHAS COMUNS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {[
                  { f: 'Modelo too large', d: 'não cabe em FLASH' },
                  { f: 'Activações overflow', d: 'SRAM insuficiente' },
                  { f: 'Latência excedida', d: 'budget real-time' },
                  { f: 'Quant. error alto', d: 'INT8 acc degradada' },
                ].map(r => (
                  <div key={r.f} style={{ background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: 6, padding: '0.45rem 0.6rem' }}>
                    <div style={{ fontSize: '0.73rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace' }}>{r.f}</div>
                    <div style={{ fontSize: '0.67rem', color: '#94a3b8', fontFamily: 'monospace' }}>{r.d}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '0.75rem', borderTop: '1px solid var(--card-border)', paddingTop: '0.6rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f97316', fontFamily: 'monospace', marginBottom: '0.25rem' }}>MLPerf Tiny (MLCommons)</div>
                <div style={{ fontSize: '0.67rem', color: '#94a3b8', fontFamily: 'monospace' }}>KWS · VWW · Image Class. · Anomaly</div>
              </div>
            </div>
          </div>
        </div>
        <p style={S.p}>O ciclo de vida de um modelo TinyML tem constrangimentos fundamentalmente diferentes do ML convencional — a iteração começa pelas restrições do hardware alvo e não pelo estado da arte de accuracy. O passo inicial obrigatório é o profiling do hardware alvo: FLASH disponível para o modelo (tipicamente 50-500KB), SRAM disponível para activações (tipicamente 32-256KB), latência máxima por inferência (ex: 10ms para 100Hz de IMU, 33ms para 30fps de câmera), e consumo energético máximo.</p>
        <p style={S.p}>Estes constrangimentos eliminam imediatamente a maioria das arquitecturas standard — um MobileNetV2 precisa de 3.4MB de FLASH e 1.3MB de SRAM de activações, adequado para Jetson mas impossível num nRF5340. O benchmark de referência para TinyML é o MLPerf Tiny (MLCommons) — quatro tarefas: keyword spotting (DS-CNN), visual wake words (MobileNetV1 0.25x), image classification (ResNet), anomaly detection (autoencoder).</p>
        <div style={S.highlight}>MCUNet (MIT, 2020) — MCU-NAS encontra arquitecturas que correm ImageNet com 70.7% de accuracy em 256KB de SRAM. Busca automática da arquitectura óptima dentro dos constrangimentos de memória e latência do alvo é o estado da arte em TinyML.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>TFLite Micro — Runtime para MCUs</strong> — TFLite Micro é um subset de TensorFlow que corre em MCUs sem SO nem heap dinâmico; usa apenas memória estática e suporta operadores essenciais (Conv2D, LSTM, FullyConnected) para keyword spotting e detecção de gestos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Arduino Nano 33 BLE Sense — Plataforma de Referência</strong> — plataforma de referência TinyML com Cortex-M4, microfone, IMU e BLE; suporta TFLite Micro e Edge Impulse; permite prototipar keyword spotting, detecção de quedas e classificação de movimento em &lt;1 semana.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>STM32 e CMSIS-NN — Alta Performance em MCU</strong> — CMSIS-NN é uma biblioteca de kernels de inferência optimizados para SIMD NEON em Cortex-M; os STM32H7 com 480MHz e 1MB SRAM são a escolha de referência para inferência neural exigente em MCUs de classe alta.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Edge Impulse — Plataforma de Desenvolvimento TinyML</strong> — plataforma end-to-end que cobre recolha de dados, treino, quantização e deployment em MCUs; suporta mais de 50 alvos de hardware e exporta modelos como bibliotecas C++ optimizadas para cada target específico.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ciclo de Vida de Modelos TinyML</strong> — ciclo: recolha de dados → treino em cloud → quantização → validação no target → deployment OTA; monitorização de drift e recolha de dados em produção fecha o loop de melhoria contínua.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
