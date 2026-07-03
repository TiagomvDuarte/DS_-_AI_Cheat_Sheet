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

const m = modules[0];

export default function EDG1() {
  return (
    <div style={S.page}>
      <Link to="/edge-ai" style={S.back}><ArrowLeft size={16} /> Voltar ao curso</Link>
      <div style={S.badge}>MÓDULO {m.num}</div>
      <h1 style={S.h1}>{m.title}</h1>
      <p style={S.sub}>{m.subtitle}</p>

      {/* ── SECTION 1 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>1. Cloud vs Edge vs Fog</h2>

        <div style={S.diagram}>
          <svg width="100%" viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <defs>
              <marker id="arrE" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>

            {/* Layer bands */}
            <rect x="0" y="0" width="720" height="90" rx="8" fill="rgba(249,115,22,0.04)" />
            <rect x="0" y="100" width="720" height="90" rx="0" fill="rgba(249,115,22,0.08)" />
            <rect x="0" y="200" width="720" height="80" rx="8" fill="rgba(249,115,22,0.04)" />

            {/* Layer labels */}
            <text x="8" y="20" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="monospace">CLOUD</text>
            <text x="8" y="120" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">FOG / EDGE</text>
            <text x="8" y="220" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="monospace">THINGS</text>

            {/* Cloud boxes */}
            {[
              { x: 80,  label: 'AWS',   sub: 'Data Centre' },
              { x: 220, label: 'GCP',   sub: 'Data Centre' },
              { x: 360, label: 'Azure', sub: 'Data Centre' },
            ].map(({ x, label, sub }) => (
              <g key={label}>
                <rect x={x} y={22} width={110} height={46} rx="6" fill="rgba(249,115,22,0.10)" stroke="#94a3b8" strokeWidth="1" />
                <text x={x+55} y={42} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="600" fontFamily="monospace">{label}</text>
                <text x={x+55} y={57} textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">{sub}</text>
              </g>
            ))}
            <text x="510" y="38" fill="#f97316" fontSize="9" fontFamily="monospace" fontWeight="600">50–200ms</text>
            <text x="510" y="52" fill="#94a3b8" fontSize="8" fontFamily="monospace">round-trip</text>

            {/* Arrows cloud → fog */}
            <line x1="135" y1="68" x2="175" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrE)" />
            <line x1="275" y1="68" x2="275" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrE)" />
            <line x1="415" y1="68" x2="375" y2="100" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrE)" />

            {/* Fog/Edge boxes */}
            {[
              { x: 120, label: 'Gateway',  sub: 'Raspberry Pi' },
              { x: 235, label: 'Router',   sub: 'Edge Server'  },
              { x: 350, label: 'Jetson',   sub: 'Local Server' },
            ].map(({ x, label, sub }) => (
              <g key={label}>
                <rect x={x} y={108} width={100} height={44} rx="6" fill="rgba(249,115,22,0.20)" stroke="#f97316" strokeWidth="1.5" />
                <text x={x+50} y={128} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="600" fontFamily="monospace">{label}</text>
                <text x={x+50} y={143} textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">{sub}</text>
              </g>
            ))}
            <text x="510" y="128" fill="#f97316" fontSize="9" fontFamily="monospace" fontWeight="600">1–10ms</text>
            <text x="510" y="142" fill="#94a3b8" fontSize="8" fontFamily="monospace">local</text>

            {/* Arrows fog → things */}
            <line x1="170" y1="152" x2="170" y2="200" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrE)" />
            <line x1="285" y1="152" x2="285" y2="200" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrE)" />
            <line x1="400" y1="152" x2="400" y2="200" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrE)" />

            {/* Things boxes */}
            {['Camera','IMU','MCU','Wearable','Sensor','LIDAR'].map((label, i) => (
              <g key={label}>
                <rect x={60 + i*82} y={208} width={72} height={32} rx="4" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="1" />
                <text x={60 + i*82 + 36} y={228} textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">{label}</text>
              </g>
            ))}

            {/* 90% box */}
            <rect x="560" y="208" width="150" height="32" rx="4" fill="#ea580c" stroke="#f97316" strokeWidth="1" />
            <text x="635" y="222" textAnchor="middle" fill="#fff" fontSize="8.5" fontFamily="monospace" fontWeight="600">90% filtrado no edge</text>
            <text x="635" y="234" textAnchor="middle" fill="#fde8d8" fontSize="7.5" fontFamily="monospace">apenas resultados sobem</text>

            <text x="510" y="158" fill="#f97316" fontSize="8" fontFamily="monospace">100 MB/s raw data ↑</text>
            <text x="510" y="168" fill="#94a3b8" fontSize="8" fontFamily="monospace">1 KB/s inference ↑</text>

            <text x="360" y="285" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">Arquitectura de três camadas — Cloud / Fog / Things</text>
          </svg>
        </div>

        <p style={S.p}>A arquitectura de computação distribuída tem três camadas com características distintas. A Cloud oferece poder computacional ilimitado mas a latência de ida e volta é de 50–200ms para servidores distantes — inaceitável para controlo em tempo real (veículos autónomos exigem latência menor que 10ms). A Edge Computing processa dados no dispositivo ou num gateway local, reduzindo latência para 1–10ms, eliminando dependência de conectividade e protegendo privacidade de dados sensíveis.</p>
        <p style={S.p}>A Fog Computing (Cisco, 2014) é o nível intermédio — gateways com capacidade de processamento moderada que pré-processam e filtram dados antes de enviar à cloud. O princípio fundamental do Edge AI é que 90% dos dados gerados por sensores são descartáveis — só resultados de inferência (ou anomalias) precisam de subir à cloud.</p>
        <div style={S.highlight}>
          Casos de uso que exigem edge: controlo industrial (PLC + ML, latência menor que 1ms), médico wearable (ECG em tempo real), câmeras de segurança (detecção local sem enviar vídeo), veículos autónomos (fusão de sensores a 100Hz).
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 2 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>2. Restrições de Hardware no Edge</h2>

        <div style={S.diagram}>
          <svg width="100%" viewBox="0 0 700 285" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            {/* 3 column zones separated by dividers */}
            <line x1="270" y1="8" x2="270" y2="235" stroke="var(--card-border)" strokeWidth="1" />
            <line x1="480" y1="8" x2="480" y2="235" stroke="var(--card-border)" strokeWidth="1" />

            {/* Column headers */}
            <text x="155" y="20" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="monospace">Cloud</text>
            <text x="155" y="32" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">AWS p4d.24xlarge</text>

            <text x="375" y="20" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="700" fontFamily="monospace">Edge Server</text>
            <text x="375" y="32" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Jetson AGX Orin</text>

            <text x="590" y="20" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="monospace">Microcontroller</text>
            <text x="590" y="32" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">STM32H7</text>

            {/* Rows — bars left-aligned per column, value below bar */}
            {[
              { label: 'TOPS',  cv: '1000', ev: '275',  mv: '0.01',  unit: 'TOPS', cP: 1,    eP: 0.275, mP: 0.10  },
              { label: 'RAM',   cv: '1152 GB', ev: '82 GB',  mv: '0.001 GB', unit: '', cP: 1, eP: 0.071, mP: 0.01  },
              { label: 'Power', cv: '400 W',  ev: '60 W',  mv: '0.5 W',   unit: '', cP: 1,   eP: 0.15,  mP: 0.01  },
              { label: 'Cost',  cv: '30k €',  ev: '500 €', mv: '5 €',     unit: '', cP: 1,   eP: 0.017, mP: 0.01  },
            ].map((row, i) => {
              const y = 48 + i * 46;
              const cW = Math.round(row.cP * 185);
              const eW = Math.max(8, Math.round(row.eP * 165));
              const mW = Math.max(8, Math.round(row.mP * 140));
              return (
                <g key={row.label}>
                  <text x="32" y={y + 13} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="monospace">{row.label}</text>
                  {/* Cloud bar + value below */}
                  <rect x="60" y={y} width={cW} height="18" rx="3" fill="#f97316" />
                  <text x="60" y={y + 30} fill="#94a3b8" fontSize="8" fontFamily="monospace">{row.cv}{row.unit && ' ' + row.unit}</text>
                  {/* Edge bar + value below */}
                  <rect x="280" y={y} width={eW} height="18" rx="3" fill="#f97316" />
                  <text x="280" y={y + 30} fill="#f97316" fontSize="8" fontFamily="monospace">{row.ev}{row.unit && ' ' + row.unit}</text>
                  {/* MCU bar + value below */}
                  <rect x="490" y={y} width={mW} height="18" rx="3" fill="#fb923c" />
                  <text x="490" y={y + 30} fill="#fb923c" fontSize="8" fontFamily="monospace">{row.mv}{row.unit && ' ' + row.unit}</text>
                </g>
              );
            })}

            {/* Note */}
            <rect x="20" y="245" width="660" height="30" rx="4" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
            <text x="350" y="257" textAnchor="middle" fill="#f59e0b" fontSize="8.5" fontFamily="monospace">Eficiência: M2 Neural Engine 15.8 TOPS/W  |  A100 0.78 TOPS/W — edge é 20× mais eficiente</text>
            <text x="350" y="269" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">TOPS/Watt é a métrica chave para sistemas a bateria e industriais</text>
          </svg>
        </div>

        <p style={S.p}>As restrições de hardware definem completamente o design de sistemas Edge AI — não é possível simplesmente "portar" um modelo da cloud para o edge. As dimensões de restrição são: potência (MCUs operam a mili-watts, Jetson a 10–60W, cloud a kilowatts); memória (MCUs têm 256KB–1MB de SRAM, Jetson 16–64GB, cloud ilimitada); TOPS (Tera Operations Per Second — MCUs menos que 0.1 TOPS, Jetson AGX Orin 275 TOPS com NPU, A100 312 TOPS mas a 400W).</p>
        <p style={S.p}>O form factor determina o mercado: wearables (mm³), smartphones (cm²), câmeras industriais (dm³), gateways (rack). A memória é a restrição mais crítica em TinyML: um modelo ResNet-50 precisa de 100MB — impossível num MCU com 512KB. A solução é redesenhar o modelo, não apenas comprimí-lo.</p>
        <div style={S.highlight}>
          A eficiência energética (TOPS/Watt) é a métrica chave: o Apple M2 Neural Engine atinge 15.8 TOPS/Watt; o A100 atinge 0.78 TOPS/Watt — o edge é 20x mais eficiente energeticamente.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 3 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>3. Latência, Throughput e Privacidade</h2>

        <div style={S.diagram}>
          <svg width="100%" viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <rect width="740" height="310" fill="var(--bg-secondary)" rx="8" />

            {/* Cloud path */}
            <text x="20" y="36" fill="#f97316" fontSize="10" fontWeight="700" fontFamily="monospace">CLOUD PATH</text>

            {/* Stages */}
            {[
              { x: 20, label: 'Sensor', val: '1ms', color: '#94a3b8' },
              { x: 120, label: 'Upload', val: '50ms', color: '#f97316' },
              { x: 220, label: 'Queue', val: '10ms', color: '#f97316' },
              { x: 320, label: 'Inference', val: '5ms', color: '#94a3b8' },
              { x: 420, label: 'Download', val: '50ms', color: '#f97316' },
              { x: 520, label: 'Actuator', val: '1ms', color: '#94a3b8' },
            ].map((s, i) => (
              <g key={i}>
                <rect x={s.x} y="48" width="80" height="32" rx="4" fill={s.color + '33'} stroke={s.color} strokeWidth="1" />
                <text x={s.x + 40} y="62" textAnchor="middle" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">{s.label}</text>
                <text x={s.x + 40} y="74" textAnchor="middle" fill={s.color} fontSize="8" fontFamily="monospace">{s.val}</text>
                {i < 5 && <line x1={s.x + 80} y1="64" x2={s.x + 100} y2="64" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrW)" />}
              </g>
            ))}
            <text x="620" y="68" fill="#f97316" fontSize="11" fontWeight="700" fontFamily="monospace">116ms</text>
            <text x="620" y="80" fill="#94a3b8" fontSize="8" fontFamily="monospace">TOTAL</text>

            {/* Edge path */}
            <text x="20" y="118" fill="#f97316" fontSize="10" fontWeight="700" fontFamily="monospace">EDGE PATH</text>

            {[
              { x: 20, label: 'Sensor', val: '1ms', color: '#94a3b8' },
              { x: 120, label: 'Preprocess', val: '2ms', color: '#f97316' },
              { x: 220, label: 'Local Inf.', val: '8ms', color: '#f97316' },
              { x: 320, label: 'Actuator', val: '0ms', color: '#94a3b8' },
            ].map((s, i) => (
              <g key={i}>
                <rect x={s.x} y="128" width="80" height="32" rx="4" fill={s.color + '33'} stroke={s.color} strokeWidth="1" />
                <text x={s.x + 40} y="142" textAnchor="middle" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">{s.label}</text>
                <text x={s.x + 40} y="154" textAnchor="middle" fill={s.color} fontSize="8" fontFamily="monospace">{s.val}</text>
                {i < 3 && <line x1={s.x + 80} y1="144" x2={s.x + 100} y2="144" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrW)" />}
              </g>
            ))}
            <text x="420" y="145" fill="#f97316" fontSize="11" fontWeight="700" fontFamily="monospace">11ms</text>
            <text x="420" y="157" fill="#94a3b8" fontSize="8" fontFamily="monospace">TOTAL</text>

            {/* Application latency requirements */}
            <text x="20" y="195" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="monospace">REQUISITOS DE LATÊNCIA POR APLICAÇÃO</text>

            {[
              { label: 'PLC Industrial', req: 1, max: 1000, color: '#f97316' },
              { label: 'Veículo Autónomo', req: 10, max: 1000, color: '#f97316' },
              { label: 'Voice Assistant', req: 100, max: 1000, color: '#f97316' },
              { label: 'Video Analytics', req: 500, max: 1000, color: '#f97316' },
              { label: 'Batch Analytics', req: 1000, max: 1000, color: '#f97316' },
            ].map((a, i) => {
              const y = 205 + i * 18;
              const w = Math.max(4, (a.req / a.max) * 300);
              return (
                <g key={i}>
                  <text x="20" y={y + 11} fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">{a.label}</text>
                  <rect x="160" y={y} width={w} height="13" rx="2" fill={a.color} opacity="0.8" />
                  <text x={160 + w + 4} y={y + 11} fill={a.color} fontSize="8" fontFamily="monospace">{a.req < 1000 ? `< ${a.req}ms` : `> 1s`}</text>
                </g>
              );
            })}

            {/* Privacy diagram */}
            <rect x="530" y="195" width="195" height="100" rx="6" fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="627" y="210" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="monospace">PRIVACIDADE</text>
            <text x="540" y="228" fill="#f97316" fontSize="8" fontFamily="monospace">Cloud: vídeo/audio raw sai ↑</text>
            <rect x="540" y="232" width="100" height="6" rx="2" fill="#f97316" opacity="0.6" />
            <text x="540" y="258" fill="#f97316" fontSize="8" fontFamily="monospace">Edge: só labels/metadata ↑</text>
            <rect x="540" y="262" width="35" height="6" rx="2" fill="#f97316" opacity="0.6" />
            <text x="540" y="282" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">GDPR Art. 25 — Privacy by Design</text>

            <defs>
              <marker id="arrW" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>A latência é a métrica operacional mais importante para Edge AI — define se uma aplicação é tecnicamente viável. A latência end-to-end num sistema cloud inclui: captura do sensor (1ms), pré-processamento local (2–5ms), upload de dados (30–100ms com 4G/WiFi), fila de espera no servidor (variável), inferência no servidor (1–50ms), download do resultado (30–100ms), e actuação (1ms) — total de 65–260ms. A latência edge elimina os dois saltos de rede: 5–20ms total.</p>
        <p style={S.p}>O throughput (frames por segundo ou amostras por segundo) é igualmente crítico para visão computacional — uma câmera de 30fps precisa de processar cada frame em menos de 33ms. A privacidade é um argumento crescente para Edge AI: dados de saúde (ECG, glucose), vídeo doméstico, biometria facial e dados industriais críticos nunca saem do dispositivo — cumpre automaticamente GDPR e regulamentação sectorial. A conformidade com GDPR Artigo 25 (Privacy by Design) é mais facilmente demonstrada quando os dados brutos nunca saem do edge.</p>
        <div style={S.highlight}>
          A privacidade por design é mais fácil de demonstrar quando os dados brutos nunca deixam o dispositivo — o edge reduz 99% do tráfego de rede e elimina o risco de exposição de dados pessoais durante transmissão.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 4 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>4. Arquitectura de Sistemas Edge AI</h2>

        <div style={S.diagram}>
          <svg width="100%" viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <rect width="740" height="320" fill="var(--bg-secondary)" rx="8" />

            {/* Data sources */}
            <text x="20" y="22" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">DATA SOURCES</text>
            {[
              { y: 30, label: 'Camera', bus: 'MIPI CSI-2' },
              { y: 68, label: 'Microphone', bus: 'I2S / PDM' },
              { y: 106, label: 'IMU', bus: 'SPI / I2C' },
              { y: 144, label: 'Temp. Sensor', bus: '1-Wire' },
              { y: 182, label: 'LIDAR', bus: 'USB / ETH' },
            ].map((s, i) => (
              <g key={i}>
                <rect x="10" y={s.y} width="90" height="30" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
                <text x="55" y={s.y + 13} textAnchor="middle" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">{s.label}</text>
                <text x="55" y={s.y + 25} textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">{s.bus}</text>
                <line x1="100" y1={s.y + 15} x2="130" y2={s.y + 15} stroke="#f97316" strokeWidth="1" markerEnd="url(#arrB)" />
              </g>
            ))}

            {/* Edge SoC box */}
            <rect x="130" y="20" width="340" height="230" rx="8" fill="rgba(249,115,22,0.10)" stroke="#f97316" strokeWidth="2" />
            <text x="300" y="38" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700" fontFamily="monospace">EDGE COMPUTE UNIT (SoC)</text>

            {/* Internal blocks */}
            {[
              { x: 145, y: 48, w: 130, h: 35, label: 'Sensor Interface', sub: 'ISP / DMA', color: 'rgba(249,115,22,0.18)' },
              { x: 145, y: 98, w: 130, h: 35, label: 'CPU (ARM Cortex)', sub: 'Orchestration', color: 'rgba(249,115,22,0.22)' },
              { x: 295, y: 48, w: 130, h: 35, label: 'NPU', sub: 'Neural Engine', color: 'rgba(249,115,22,0.35)' },
              { x: 295, y: 98, w: 130, h: 35, label: 'DSP', sub: 'Signal Processing', color: 'rgba(249,115,22,0.18)' },
              { x: 145, y: 148, w: 130, h: 35, label: 'DRAM', sub: 'Shared Memory', color: 'rgba(249,115,22,0.12)' },
              { x: 295, y: 148, w: 130, h: 35, label: 'Flash / eMMC', sub: 'Storage', color: 'rgba(249,115,22,0.12)' },
              { x: 145, y: 198, w: 280, h: 35, label: 'ML Runtime (TFLite / TensorRT / CoreML)', sub: '', color: 'rgba(249,115,22,0.28)' },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="4" fill={b.color} stroke="#f9731650" strokeWidth="1" />
                <text x={b.x + b.w / 2} y={b.y + 15} textAnchor="middle" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">{b.label}</text>
                {b.sub && <text x={b.x + b.w / 2} y={b.y + 27} textAnchor="middle" fill="#e2e8f0" fontSize="7.5" fontFamily="monospace">{b.sub}</text>}
              </g>
            ))}

            {/* Outputs */}
            <text x="490" y="22" fill="#f97316" fontSize="9" fontWeight="700" fontFamily="monospace">OUTPUTS</text>
            {[
              { y: 30, label: 'Actuator', sub: 'GPIO / PWM', color: '#f97316' },
              { y: 68, label: 'Display', sub: 'HDMI / DSI', color: '#f97316' },
              { y: 106, label: 'Local Storage', sub: 'eMMC / NVMe', color: '#f97316' },
              { y: 144, label: 'Cloud Upload', sub: 'selective only', color: '#f97316' },
            ].map((o, i) => (
              <g key={i}>
                <line x1="470" y1={o.y + 15} x2="490" y2={o.y + 15} stroke={o.color} strokeWidth="1" markerEnd="url(#arrG)" />
                <rect x="490" y={o.y} width="110" height="30" rx="4" fill="rgba(249,115,22,0.06)" stroke={o.color} strokeWidth="1" />
                <text x="545" y={o.y + 13} textAnchor="middle" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">{o.label}</text>
                <text x="545" y={o.y + 25} textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">{o.sub}</text>
              </g>
            ))}

            {/* Boot sequence */}
            <rect x="10" y="265" width="720" height="40" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="1" />
            <text x="370" y="280" textAnchor="middle" fill="#f97316" fontSize="8.5" fontFamily="monospace">Boot: ROM Bootloader → U-Boot → Linux/RTOS → ML Runtime → Inference Loop</text>
            <text x="370" y="295" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontFamily="monospace">Startup time: 2–10s (Linux) | 100–500ms (RTOS) | instant (bare-metal)</text>

            <defs>
              <marker id="arrB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
              <marker id="arrG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        <p style={S.p}>Um sistema Edge AI completo integra sensores, processamento, inferência e actuação num pipeline coeso. A interface de sensores determina os requisitos de largura de banda: câmeras MIPI CSI-2 a 4K@30fps geram 12 Gbps de dados raw — o ISP (Image Signal Processor) reduz para 100–500 Mbps após compressão.</p>
        <p style={S.p}>O SoC de edge moderno tem múltiplos engines especializados: CPU ARM para orquestração e pré-processamento; NPU/DSP dedicado para inferência de redes neuronais (operações de convolução e matrix multiply optimizadas); GPU integrada para renderização e visão clássica; ISP integrado para processamento de imagem raw. O runtime de ML coordena a execução: TensorFlow Lite (Google), ONNX Runtime (Microsoft), OpenVINO (Intel), TensorRT (NVIDIA), ou Core ML (Apple).</p>
        <div style={S.highlight}>
          Pipeline de inferência típico: 1) captura de sensor, 2) pré-processamento (resize, normalização, crop), 3) inferência no NPU, 4) pós-processamento (NMS para detecção, softmax), 5) actuação ou logging.
        </div>
      </div>

      <hr style={S.divider} />

      {/* ── SECTION 5 ── */}
      <div style={S.section}>
        <h2 style={S.h2}>5. Casos de Uso e Roadmap de Edge AI</h2>

        <div style={S.diagram}>
          <svg width="100%" viewBox="0 0 740 460" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <rect width="740" height="460" fill="var(--bg-secondary)" rx="8" />

            {/* Application cards — 3x3 grid */}
            {[
              { x: 10,  y: 20, title: 'Smart Camera',        metric: '30 fps', hw: 'Jetson Nano',  color: '#f97316' },
              { x: 255, y: 20, title: 'Industrial QC',       metric: '99.8% acc', hw: 'Edge Server', color: '#f97316' },
              { x: 500, y: 20, title: 'Predictive Maint.',   metric: '5yr battery', hw: 'STM32+TFLite', color: '#f97316' },
              { x: 10,  y: 115, title: 'Voice Assistant',    metric: '200uW',  hw: 'Cortex-M4',   color: '#f97316' },
              { x: 255, y: 115, title: 'Autonomous Vehicle', metric: '250 TOPS', hw: 'Jetson Orin', color: '#f97316' },
              { x: 500, y: 115, title: 'Medical Wearable',   metric: '0.3mW ECG', hw: 'nRF5340',   color: '#f97316' },
              { x: 10,  y: 210, title: 'Smart Grid',         metric: 'Anomaly Det.', hw: 'RPi 5',   color: '#f97316' },
              { x: 255, y: 210, title: 'Drone',              metric: '100ms latency', hw: 'Jetson NX', color: '#f97316' },
              { x: 500, y: 210, title: 'Retail Analytics',   metric: 'Local privacy', hw: 'Edge TPU', color: '#f97316' },
            ].map((c, i) => (
              <g key={i}>
                <rect x={c.x} y={c.y} width="225" height="82" rx="6" fill="rgba(249,115,22,0.06)" stroke={c.color} strokeWidth="1.5" />
                <rect x={c.x} y={c.y} width="225" height="18" rx="6" fill={c.color + '33'} />
                <text x={c.x + 112} y={c.y + 13} textAnchor="middle" fill={c.color} fontSize="9" fontWeight="700" fontFamily="monospace">{c.title}</text>
                <text x={c.x + 10} y={c.y + 38} fill="#e2e8f0" fontSize="10" fontFamily="monospace">{c.metric}</text>
                <text x={c.x + 10} y={c.y + 56} fill="#94a3b8" fontSize="8.5" fontFamily="monospace">HW: {c.hw}</text>
              </g>
            ))}

            {/* Market size bar chart — below cards */}
            <rect x="230" y="315" width="280" height="130" rx="6" fill="rgba(249,115,22,0.04)" stroke="var(--card-border)" strokeWidth="1" />
            <text x="370" y="332" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="monospace">MERCADO EDGE AI (B USD)</text>
            <rect x="280" y="385" width="30" height="45" rx="2" fill="#f97316" opacity="0.7" />
            <text x="295" y="438" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">2023</text>
            <text x="295" y="382" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="monospace">2.8B</text>
            <rect x="450" y="345" width="30" height="85" rx="2" fill="#f97316" />
            <text x="465" y="438" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">2028</text>
            <text x="465" y="342" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="monospace">38.9B</text>
            <text x="370" y="420" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">CAGR 69% (IDC)</text>
          </svg>
        </div>

        <p style={S.p}>O mercado de Edge AI está em expansão exponencial — de 2.8 mil milhões USD em 2023 para estimados 38.9 mil milhões USD em 2028 (CAGR de 69%, IDC). Os sectores líderes são: manufatura (quality control e predictive maintenance), saúde (wearables e point-of-care), automotive (ADAS e autonomous driving), retalho (analytics sem envio de vídeo para cloud), e smart cities (tráfego e segurança pública com privacidade).</p>
        <p style={S.p}>O caso de predictive maintenance é paradigmático: sensores de vibração e temperatura num motor industrial, modelo de anomaly detection em MCU STM32 com bateria de 5 anos — impossível com cloud por custo de conectividade e latência. Os veículos autónomos são o caso extremo: fusão de dados de câmeras (8–12 câmeras), LiDAR (100k pontos/s), radar e ultrassónico a 100Hz, com decisões de controlo em menos de 10ms — exige 100–1000 TOPS no veículo.</p>
        <div style={S.highlight}>
          Roadmap tecnológico: NPUs integradas em todos os SoCs até 2026; modelos de visão com 1M de parâmetros a correr em MCUs; comunicação 5G mmWave para edge servers distribuídos; AI standardization com ONNX e MLCommons MLPerf Edge benchmark.
        </div>
      </div>

        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
              <li style={{marginBottom:"0.4rem"}}><strong>Cloud vs Edge vs Fog</strong> — cloud centraliza computação em datacenters com latência de 50–200ms; fog é computação intermédia (gateway local); edge executa inferência no dispositivo com latência &lt;1ms e privacidade total — a escolha depende de latência, bandwidth e privacidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Restrições de Hardware no Edge</strong> — MCUs têm 256KB–1MB de SRAM e sem FPU; NPUs oferecem TOPS/W mas com frameworks limitados; a restrição de memória obriga a quantização e pruning agressivos para modelos viáveis no edge.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Latência, Throughput e Privacidade</strong> — latência mede o tempo de resposta por inferência; throughput mede inferências por segundo; privacidade é garantida ao não enviar dados para a cloud — os três factores justificam edge AI em saúde, automóvel e indústria.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Arquitectura de Sistemas Edge AI</strong> — pipeline típico: sensor → pré-processamento → inferência no edge → actuação local, com sincronização periódica com cloud para telemetria e actualizações de modelo via OTA.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Casos de Uso e Roadmap de Edge AI</strong> — keyword spotting em wearables, detecção de anomalias em máquinas industriais, face unlock em smartphones e veículos autónomos são casos de uso maduros; edge LLMs e visão em MCUs são o horizonte emergente.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
