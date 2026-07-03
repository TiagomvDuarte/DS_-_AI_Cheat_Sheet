import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'var(--bg-secondary)', padding: '0.6rem 0.8rem', textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '2px solid var(--card-border)' },
  td: { padding: '0.55rem 0.8rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)' },
  highlight: { background: 'rgba(249,115,22,0.10)', border: '1px solid #f97316', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.2rem' },
  note: { background: 'rgba(249,115,22,0.10)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function SmartCityLayersSVG() {
  const layers = [
    { label: 'Camada de Aplicação', sub: 'Dashboards GIS · APIs cidadão · Alertas · Relatórios municipais', color: '#f97316', y: 38 },
    { label: 'Camada de Plataforma', sub: 'CityOS · FIWARE Orion · Digital Twin Engine · AI/ML Services', color: '#f97316', y: 108 },
    { label: 'Camada de Dados', sub: 'Apache Kafka (stream) · HDFS (lake) · TimescaleDB (time-series)', color: '#f97316', y: 178 },
    { label: 'Camada de Conectividade', sub: 'LoRaWAN · NB-IoT · 5G SA · Wi-Fi 6E · DSRC/C-V2X', color: '#f97316', y: 248 },
    { label: 'Camada Física', sub: 'Sensores MEMS · Câmeras IP · RFID/UHF · Loops indutivos · LiDAR', color: '#f97316', y: 318 },
  ];
  return (
    <svg viewBox="0 0 720 395" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Arquitectura em 5 Camadas de uma Smart City</text>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="30" y={l.y} width="660" height="55" rx="8" fill={l.color} fillOpacity="0.09" stroke={l.color} strokeWidth="1.5" />
          <rect x="30" y={l.y} width="8" height="55" rx="4" fill={l.color} />
          <text x="54" y={l.y + 21} fontSize="11" fontWeight="700" fill={l.color}>{l.label}</text>
          <text x="54" y={l.y + 39} fontSize="9.5" fill="var(--text-secondary)">{l.sub}</text>
          {i < layers.length - 1 && (
            <text x="360" y={l.y + 65} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">⇅</text>
          )}
        </g>
      ))}
      <text x="360" y="388" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Latência decresce da camada física (μs) para aplicação (s–min) · Volume de dados é reduzido 95–99% por edge processing antes de subir</text>
    </svg>
  );
}

function IoTProtocolComparisonSVG() {
  const protocols = [
    { name: 'LoRaWAN', range: 92, battery: 95, bandwidth: 5, cost: 90, latency: 40, color: '#f97316', dash: '' },
    { name: 'NB-IoT', range: 85, battery: 80, bandwidth: 30, cost: 55, latency: 55, color: '#f59e0b', dash: '6 3' },
    { name: 'Zigbee', range: 20, battery: 85, bandwidth: 45, cost: 80, latency: 90, color: '#fb923c', dash: '3 3' },
    { name: '5G (SA)', range: 70, battery: 30, bandwidth: 100, cost: 20, latency: 100, color: '#fbbf24', dash: '8 3' },
    { name: 'Wi-Fi 6E', range: 15, battery: 25, bandwidth: 95, cost: 50, latency: 92, color: '#ea580c', dash: '4 2 1 2' },
  ];
  const axes = ['Alcance', 'Bateria', 'Bandwidth', 'Custo ↓', 'Latência ↓'];
  const cx = 360, cy = 155, r = 100;
  const N = axes.length;
  const angle = (i) => (i / N) * 2 * Math.PI - Math.PI / 2;
  const toXY = (val, i) => ({
    x: cx + (val / 100) * r * Math.cos(angle(i)),
    y: cy + (val / 100) * r * Math.sin(angle(i)),
  });

  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Protocolos IoT Urbanos — Radar de Características</text>

      {/* Grid circles */}
      {[25, 50, 75, 100].map(pct => (
        <polygon key={pct} points={Array.from({ length: N }, (_, i) => {
          const p = toXY(pct, i); return `${p.x},${p.y}`;
        }).join(' ')} fill="none" stroke="var(--text-secondary)" strokeWidth="0.7" />
      ))}

      {/* Axes */}
      {axes.map((a, i) => {
        const p = toXY(110, i);
        const lp = toXY(118, i);
        return (
          <g key={a}>
            <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--text-secondary)" strokeWidth="1" />
            <text x={lp.x} y={lp.y + 4} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{a}</text>
          </g>
        );
      })}

      {/* Protocol polygons */}
      {protocols.map((p, pi) => {
        const vals = [p.range, p.battery, p.bandwidth, p.cost, p.latency];
        const pts = vals.map((v, i) => { const xy = toXY(v, i); return `${xy.x},${xy.y}`; }).join(' ');
        return (
          <polygon key={p.name} points={pts} fill={p.color} fillOpacity="0.12" stroke={p.color} strokeWidth="1.5" strokeDasharray={p.dash} />
        );
      })}

      {/* Legend */}
      {protocols.map((p, i) => (
        <g key={p.name}>
          <line x1={540} y1={66 + i * 38} x2={555} y2={66 + i * 38} stroke={p.color} strokeWidth="2" strokeDasharray={p.dash} />
          <text x={560} y={70 + i * 38} fontSize="10" fontWeight="700" fill={p.color}>{p.name}</text>
        </g>
      ))}

      <rect x="30" y="278" width="660" height="24" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="294" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Não existe protocolo universal — a escolha depende do caso de uso: LoRaWAN para sensores de longa vida, 5G para V2X e vídeo 4K em tempo real</text>
    </svg>
  );
}

function TinyMLSVG() {
  const pipeline = [
    { label: 'Modelo TF/PyTorch\n(servidor/nuvem)', sub: 'ResNet-18\n~11M params\n~44 MB', color: '#94a3b8', x: 80 },
    { label: 'Quantização INT8\n+ Pruning', sub: 'TF Lite / ONNX\n~2.8M params\n~2.8 MB', color: '#f97316', x: 260 },
    { label: 'Compilação\nEdge (TVM)', sub: 'Optimizado para\nARMv8 / DSP\n~0.9 MB', color: '#f97316', x: 440 },
    { label: 'Inferência\nno Sensor', sub: 'ARM Cortex-M4\n~256 KB RAM\n<10 mW', color: '#f97316', x: 620 },
  ];
  return (
    <svg viewBox="0 0 720 230" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>TinyML — Pipeline de Compressão para Edge Urbano</text>
      <defs>
        <marker id="arrowTML" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
        </marker>
      </defs>
      {pipeline.map((p, i) => {
        const lines = p.label.split('\n');
        const subs = p.sub.split('\n');
        return (
          <g key={i}>
            <rect x={p.x - 70} y={38} width={140} height={120} rx="8" fill={p.color} fillOpacity="0.1" stroke={p.color} strokeWidth="1.5" />
            {lines.map((l, li) => (
              <text key={li} x={p.x} y={62 + li * 15} textAnchor="middle" fontSize="10" fontWeight={li === 0 ? '700' : '400'} fill={p.color}>{l}</text>
            ))}
            <line x1={p.x - 50} y1={103} x2={p.x + 50} y2={103} stroke="var(--text-secondary)" strokeWidth="0.8" />
            {subs.map((s, si) => (
              <text key={si} x={p.x} y={116 + si * 13} textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">{s}</text>
            ))}
            {i < pipeline.length - 1 && (
              <line x1={p.x + 70} y1={98} x2={pipeline[i + 1].x - 72} y2={98} stroke="var(--text-secondary)" strokeWidth="1.5" markerEnd="url(#arrowTML)" />
            )}
          </g>
        );
      })}
      <text x="360" y="176" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Redução de tamanho: 44 MB → 0.9 MB (48×) · Redução de latência: 120ms → 8ms · Consumo: mW vs. W</text>
      <rect x="30" y="188" width="660" height="34" rx="5" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="202" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Técnicas: quantização pós-treino INT8 (–75% memória, –0.3% precisão) · Knowledge distillation (aluno aprende com professor maior)</text>
      <text x="360" y="216" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Frameworks: TensorFlow Lite Micro · Edge Impulse · Apache TVM · CMSIS-NN (ARM optimizado)</text>
    </svg>
  );
}

function CityMaturitySVG() {
  const cities = [
    { name: 'Singapura', score: 95, highlight: 'Smart Nation + Virtual Singapore', color: '#f97316' },
    { name: 'Barcelona', score: 87, highlight: 'Superilles + Sentilo platform', color: '#f97316' },
    { name: 'Amesterdão', score: 83, highlight: 'Amsterdam Smart City living labs', color: '#f97316' },
    { name: 'Helsínquia', score: 80, highlight: 'Helsinki Digital Twin 3D', color: '#f97316' },
    { name: 'Lisboa', score: 71, highlight: 'PARTTEAM & OEMKIOSKS + dados.gov', color: '#f97316' },
    { name: 'Porto', score: 65, highlight: 'Porto Digital + PortoLivingLab', color: '#f97316' },
  ];
  const barH = 30, gap = 10, leftPad = 130, maxW = 380;
  return (
    <svg viewBox="0 0 720 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Smart City Maturity Index — IESE Cities in Motion 2024 (183 cidades)</text>
      {cities.map((c, i) => {
        const w = (c.score / 100) * maxW;
        const y = 36 + i * (barH + gap);
        return (
          <g key={c.name}>
            <text x={leftPad - 10} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fontWeight="700" fill={c.color}>{c.name}</text>
            <rect x={leftPad} y={y} width={w} height={barH} rx="5" fill={c.color} fillOpacity="0.75" />
            <text x={leftPad + w + 8} y={y + barH / 2 - 2} fontSize="12" fontWeight="800" fill={c.color}>{c.score}</text>
            <text x={leftPad + w + 8} y={y + barH / 2 + 12} fontSize="8" fill="var(--text-secondary)">{c.highlight}</text>
          </g>
        );
      })}
      <text x="360" y="285" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Dimensões avaliadas: Conectividade · Governança · Economia · Mobilidade · Ambiente · Capital Humano · Coesão Social · Tecnologia</text>
      <text x="360" y="300" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Portugal subiu 12 posições em 2023–24 com investimento PRR em fibra, 5G e transformação digital municipal</text>
    </svg>
  );
}

export default function SC1() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 01</div>
      <h1 style={S.h1}>Introdução às Smart Cities</h1>
      <p style={S.lead}>
        Uma smart city usa tecnologia, dados e conectividade para melhorar a qualidade de vida dos
        cidadãos, a eficiência dos serviços urbanos e a sustentabilidade ambiental. O ecossistema
        assenta em IoT, plataformas de dados, IA e governança participativa — combinados numa
        arquitectura em camadas que vai dos sensores físicos com TinyML às aplicações cidadãs
        em tempo real.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Arquitectura em 5 Camadas</h2>
        <SmartCityLayersSVG />
        <h3 style={S.h3}>Edge-Fog-Cloud: onde processar os dados?</h3>
        <p style={S.p}>
          Uma cidade com 1 milhão de habitantes gera facilmente 2–5 TB de dados por dia
          de sensores, câmeras e transacções. Enviar tudo para a nuvem é economicamente
          e tecnicamente inviável. A arquitectura correcta distribui o processamento:
        </p>
        <div style={S.highlight}>
          <strong>Edge (no sensor/gateway):</strong> pré-processamento, detecção de eventos,
          compressão. Um sensor de qualidade do ar envia apenas alertas e agregados de 5 minutos
          em vez de leituras a cada segundo — reduz 97% do tráfego de rede. TinyML corre
          directamente no microcontrolador.
        </div>
        <div style={S.highlight}>
          <strong>Fog (gateway de bairro / RSU):</strong> correlação de múltiplos sensores,
          decisões de latência intermédia (100ms–1s). Um gateway LoRaWAN agrega 1000+ sensores
          e aplica regras de negócio locais antes de subir à plataforma central.
        </div>
        <div style={S.highlight}>
          <strong>Cloud (plataforma municipal):</strong> modelos ML complexos, histórico,
          optimização global. FIWARE Orion Context Broker + Apache Kafka para streaming;
          Apache Spark para batch analytics; TimescaleDB para séries temporais.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Camada</th><th style={S.th}>Latência</th><th style={S.th}>Custo computação</th><th style={S.th}>Caso de uso típico</th></tr></thead>
          <tbody>
            {[
              ['Edge (sensor)', '&lt;1ms', 'μW–mW', 'Detecção de limiar, filtro passa-baixo, compressão'],
              ['Edge (gateway)', '1–100ms', 'W', 'Agregação, regras de alerta, protocolo bridging'],
              ['Fog (RSU/MEC)', '10–500ms', '10–100W', 'Correlação multi-sensor, V2X processing'],
              ['Cloud', '1s–min', 'kW–MW', 'ML training, optimização global, histórico, BI'],
            ].map(r => <tr key={r[0]}><td style={S.td}>{r[0]}</td><td style={S.td}>{r[1]}</td><td style={S.td}>{r[2]}</td><td style={S.td}>{r[3]}</td></tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Protocolos IoT Urbanos em Detalhe</h2>
        <IoTProtocolComparisonSVG />
        <h3 style={S.h3}>LoRaWAN — o padrão dominante para IoT municipal</h3>
        <p style={S.p}>
          LoRaWAN (Long Range Wide Area Network) usa modulação LoRa (Chirp Spread Spectrum)
          nas bandas ISM (868 MHz na Europa). A relação alcance-consumo é imbatível para
          sensores de longa duração em espaço público.
        </p>
        <div style={S.highlight}>
          <strong>Spreading Factor (SF):</strong> controla trade-off alcance vs. débito.
          SF7 = 5.5 kbps, alcance ~2km; SF12 = 250 bps, alcance ~15km. Cada incremento
          de SF duplica o tempo no ar e quadruplica o alcance. O Network Server (TTN,
          ChirpStack) gere o ADR (Adaptive Data Rate) automaticamente.
        </div>
        <div style={S.highlight}>
          <strong>NB-IoT (Narrowband IoT, 3GPP Release 13):</strong> opera em 180 kHz
          dentro da banda LTE. Power Saving Mode (PSM) e eDRX permitem baterias de 10 anos
          com transmissões horárias. Melhor penetração indoor (20 dB de ganho vs. GSM)
          — ideal para contadores de água em cave ou gás enterrado.
        </div>
        <p style={S.p}>
          <strong>5G Network Slicing para IoT urbano:</strong> a arquitectura 5G Stand-Alone
          permite criar slices de rede com QoS garantido por caso de uso:
          eMBB (enhanced Mobile Broadband) para câmeras CCTV 4K,
          URLLC (Ultra-Reliable Low Latency) para V2X e controlo de semáforos,
          mMTC (massive Machine Type Communications) para 1M+ sensores/km².
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. TinyML — Inteligência no Sensor</h2>
        <TinyMLSVG />
        <h3 style={S.h3}>Quantização, pruning e knowledge distillation</h3>
        <p style={S.p}>
          TinyML é o campo que leva modelos de ML para microcontroladores com dezenas de KB
          de RAM e consumo na ordem dos mW. No contexto urbano, permite classificação de som
          ambiente (buzina vs. briga vs. obra), detecção de vibração anómala em pontes,
          ou contagem de pessoas num corredor — sem enviar dados para a rede.
        </p>
        <div style={S.highlight}>
          <strong>Quantização INT8 pós-treino:</strong> converte pesos de float32 (4 bytes)
          para int8 (1 byte). Reduz tamanho 4× e acelera inferência 2–4× em hardware com
          suporte SIMD (ARM CMSIS-NN). Perda de precisão típica: &lt;0.5% em classificação,
          &lt;1% em detecção de objectos. TensorFlow Lite Converter aplica automaticamente.
        </div>
        <div style={S.highlight}>
          <strong>Knowledge Distillation:</strong> treina um modelo pequeno (aluno) para
          imitar as probabilidades de saída (soft labels) de um modelo grande (professor).
          O aluno aprende "o que o professor não sabe que sabe" — as distribuições sobre
          classes erradas contêm informação de similaridade semântica. Hinton et al. (2015).
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>4. Maturidade Global e Casos de Referência</h2>
        <CityMaturitySVG />
        <h3 style={S.h3}>Singapura — o estado da arte</h3>
        <p style={S.p}>
          O programa <strong>Smart Nation</strong> de Singapura (2014) é a estratégia nacional
          mais abrangente do mundo. O <strong>Virtual Singapore</strong> — digital twin 3D
          da cidade inteira a escala 1:1 — integra dados de 5M+ sensores, modelo BIM de cada
          edifício, dados de mobilidade e simulação de eventos de emergência.
        </p>
        <div style={S.highlight}>
          <strong>Lamp Post as a Platform (LaaP):</strong> 110 000 postes de iluminação
          pública equipados com sensores de qualidade do ar (PM2.5, NO₂, O₃), câmera
          4K com edge AI (NVIDIA Jetson), conectividade LoRa + 5G e iluminação LED
          com dimming adaptativo. ROI positivo em 4 anos pela poupança energética sozinha.
        </div>
        <div style={S.highlight}>
          <strong>Barcelona — Superilles (Superblocks):</strong> reorganização do espaço
          urbano usando dados de mobilidade: blocos de 3×3 quarteirões fechados ao tráfego
          de passagem. Sensores contam peões, ciclistas e veículos a cada 15 minutos.
          Resultados: +70% espaço pedonal, –8 dB ruído, –25% PM2.5, +12% actividade comercial.
        </div>
        <div style={S.note}>
          Síntese: a smart city é a convergência de IoT (sensores, protocolos), edge computing
          (TinyML, fog), plataformas de dados (FIWARE, Kafka) e governança (dados abertos,
          participação cidadã). A arquitectura em camadas garante que cada dado é processado
          no lugar certo — sensor, gateway ou nuvem — com o mínimo de latência e custo.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>5. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Arquitectura em 5 Camadas</strong> — a smart city organiza-se do sensor físico à aplicação cidadã em cinco camadas (Física, Conectividade, Dados, Plataforma, Aplicação), processando os dados no nível adequado para minimizar latência e custo.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Protocolos IoT Urbanos em Detalhe</strong> — LoRaWAN, NB-IoT, Zigbee, 5G SA e Wi-Fi 6E servem casos de uso distintos: LoRaWAN para sensores de longa vida a baixo custo, NB-IoT para penetração indoor, e 5G para vídeo 4K e comunicação V2X em tempo real.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>TinyML — Inteligência no Sensor</strong> — permite correr modelos de ML em microcontroladores com dezenas de KB de RAM, através de quantização INT8, pruning e knowledge distillation, reduzindo o modelo em até 48× e a latência de 120ms para 8ms.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Maturidade Global e Casos de Referência</strong> — Singapura lidera com o programa Smart Nation e o digital twin Virtual Singapore; Barcelona implementou as Superilles com dados de mobilidade; Portugal subiu 12 posições no índice IESE com investimento em fibra e 5G.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
