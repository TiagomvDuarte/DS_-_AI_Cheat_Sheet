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
  note: { background: 'rgba(249,115,22,0.08)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function WaterNetworkSVG() {
  const nodes = [
    { label: 'Reservatório\nPrincipal',  type: 'reservoir', color: '#f97316', x: 90,  y: 140 },
    { label: 'Estação\nBombagem A',      type: 'pump',      color: '#f97316', x: 250, y: 75  },
    { label: 'Estação\nBombagem B',      type: 'pump',      color: '#f97316', x: 250, y: 205 },
    { label: 'Junção\nCentral',          type: 'junction',  color: '#f97316', x: 410, y: 140 },
    { label: 'Sensor\nFuga !',           type: 'leak',      color: '#f97316', x: 510, y: 85  },
    { label: 'Zona A\n(1200 casas)',     type: 'zone',      color: '#f97316', x: 680, y: 70  },
    { label: 'Zona B\n(800 casas)',      type: 'zone',      color: '#f97316', x: 680, y: 210 },
  ];
  const pipes = [
    [0,1,'200mm PN16',1.5],[0,2,'200mm PN16',1.5],[1,3,'150mm',1.2],[2,3,'150mm',1.2],
    [3,4,'100mm',1.0],[4,5,'80mm',0.8],[3,6,'100mm',1.0],
  ];
  return (
    <svg viewBox="0 0 760 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="380" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Rede de Abastecimento de Água — Detecção de Fuga com ML</text>
      <defs>
        <marker id="arrowWN" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#f97316" />
        </marker>
      </defs>
      {/* pipes drawn first so nodes appear on top */}
      {pipes.map(([a, b, label, w], i) => {
        const na = nodes[a], nb = nodes[b];
        const mx = (na.x + nb.x) / 2, my = (na.y + nb.y) / 2;
        return (
          <g key={i}>
            <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke={color} strokeWidth={w * 2} strokeOpacity="0.5" markerEnd="url(#arrowWN)" />
            <text x={mx} y={my - 6} textAnchor="middle" fontSize="7.5" fill="var(--text-secondary)">{label}</text>
          </g>
        );
      })}
      {/* nodes drawn after pipes so they cover line endings */}
      {nodes.map((n, i) => {
        const lines = n.label.split('\n');
        const isLeak = n.type === 'leak';
        return (
          <g key={i}>
            {isLeak && <circle cx={n.x} cy={n.y} r="26" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />}
            <rect x={n.x - 55} y={n.y - 26} width={110} height={52} rx="7"
              fill="var(--bg-secondary)" stroke={n.color} strokeWidth={isLeak ? 2.5 : 1.5}
              strokeDasharray={isLeak ? '5 2' : 'none'} />
            {lines.map((l, li) => (
              <text key={li} x={n.x} y={n.y - 4 + li * 16} textAnchor="middle" fontSize="10" fontWeight={li === 0 ? '700' : '400'} fill={n.color}>{l}</text>
            ))}
          </g>
        );
      })}
      <rect x="30" y="268" width="700" height="24" rx="4" fill="rgba(249,115,22,0.08)" />
      <text x="380" y="279" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Fuga detectada: Δpressão = −0.82 bar vs. baseline · Δcaudal = +4.2 L/min não contabilizado · LSTM Autoencoder score: 0.94</text>
      <text x="380" y="291" textAnchor="middle" fontSize="8.5" fill="var(--text-secondary)">Localização: entre sensor TM-047 e TM-052 (segmento 180m) · Estimativa perda: 6 000 L/dia · Alerta emitido em 3 minutos</text>
    </svg>
  );
}

function LeakDetectionAlgoSVG() {
  const data = [0,0.1,0.05,0.08,0.12,0.09,0.07,0.11,0.08,0.95,1.2,1.1,0.85,0.9,0.88,0.92,0.10,0.08];
  const W = 620, H = 110, padL = 50, padT = 35;
  const toX = (i) => padL + (i / (data.length - 1)) * W;
  const toY = (v) => padT + H - (v / 1.3) * H;
  const pts = data.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');
  const threshold = 0.4;
  const thY = toY(threshold);

  return (
    <svg viewBox="0 0 720 235" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>LSTM Autoencoder — Anomaly Score ao Longo do Tempo</text>

      {/* Threshold line */}
      <line x1={padL} y1={thY} x2={padL + W} y2={thY} stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x={padL + W - 80} y={thY - 6} textAnchor="end" fontSize="8" fontWeight="700" fill="#f97316">threshold P99</text>

      {/* Area fill for anomaly region */}
      <path d={`M${toX(9)},${padT + H} L${toX(9)},${toY(data[9])} ${data.slice(9, 16).map((v, i) => `L${toX(i + 9)},${toY(v)}`).join(' ')} L${toX(15)},${padT + H} Z`}
        fill="#f97316" fillOpacity="0.12" />

      <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" />
      {data.map((v, i) => (
        <circle key={i} cx={toX(i)} cy={toY(v)} r={v > threshold ? 5 : 3}
          fill={v > threshold ? '#f97316' : color} fillOpacity="0.8" />
      ))}

      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="var(--text-secondary)" strokeWidth="1" />
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="var(--text-secondary)" strokeWidth="1" />
      {[0, 0.5, 1.0].map(v => (
        <text key={v} x={padL - 4} y={toY(v) + 4} textAnchor="end" fontSize="8" fill="var(--text-secondary)">{v}</text>
      ))}

      <text x={toX(12)} y={padT - 8} textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">⚠ Fuga activa</text>
      <line x1={toX(9)} y1={padT - 4} x2={toX(9)} y2={padT + H} stroke="#f97316" strokeWidth="1" strokeDasharray="3 2" />
      <line x1={toX(15)} y1={padT - 4} x2={toX(15)} y2={padT + H} stroke="#f97316" strokeWidth="1" strokeDasharray="3 2" />

      <rect x="30" y="192" width="660" height="34" rx="5" fill="rgba(249,115,22,0.08)" />
      <text x="360" y="205" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Treino: 6 meses de séries temporais normais (pressão, caudal, temperatura) · Encoder LSTM → latente 32D → Decoder LSTM</text>
      <text x="360" y="220" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Reconstruction MSE normalizado como anomaly score · Detecção em 3 min vs. 4–8 horas de inspecção manual · Precisão: 91% | Recall: 87%</text>
    </svg>
  );
}

function SmartBinsRouteSVG() {
  const bins = [
    { id: 'B1', fill: 92, color: '#f97316', x: 100, y: 80 },
    { id: 'B2', fill: 45, color: '#f97316', x: 250, y: 60 },
    { id: 'B3', fill: 78, color: '#f97316', x: 380, y: 90 },
    { id: 'B4', fill: 88, color: '#f97316', x: 500, y: 70 },
    { id: 'B5', fill: 30, color: '#f97316', x: 620, y: 90 },
    { id: 'B6', fill: 65, color: '#f97316', x: 160, y: 200 },
    { id: 'B7', fill: 95, color: '#f97316', x: 320, y: 210 },
    { id: 'B8', fill: 55, color: '#f97316', x: 460, y: 200 },
    { id: 'B9', fill: 82, color: '#f97316', x: 590, y: 210 },
  ];
  const depot = { x: 360, y: 295 };
  // Optimal route visits only &gt;60% bins: B1, B3, B4, B6, B7, B9
  const route = [depot, bins[0], bins[5], bins[6], bins[2], bins[3], bins[8], depot];

  return (
    <svg viewBox="0 0 720 350" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Smart Bins — Optimização de Rota de Recolha (VRP com ML)</text>
      <defs>
        <marker id="arrowRoute" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>

      {/* Depot */}
      <rect x={depot.x - 35} y={depot.y - 16} width={70} height={32} rx="6" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
      <text x={depot.x} y={depot.y + 5} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>DEPOT</text>

      {/* Optimal route — drawn before bins so arrows go under nodes */}
      {route.slice(0, -1).map((p, i) => {
        const next = route[i + 1];
        return <line key={i} x1={p.x} y1={p.y} x2={next.x} y2={next.y} stroke={color} strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#arrowRoute)" />;
      })}

      {/* Depot on top of route lines */}
      <rect x={depot.x - 35} y={depot.y - 16} width={70} height={32} rx="6" fill="var(--bg-secondary)" stroke={color} strokeWidth="2" />
      <text x={depot.x} y={depot.y + 5} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>DEPOT</text>

      {/* Bins — solid background covers route lines */}
      {bins.map((b, i) => (
        <g key={i}>
          <rect x={b.x - 28} y={b.y - 30} width={56} height={60} rx="5" fill="var(--bg-secondary)" stroke={b.color} strokeWidth={b.fill > 60 ? 2 : 1} />
          <text x={b.x} y={b.y - 12} textAnchor="middle" fontSize="8.5" fontWeight="700" fill={b.color}>{b.id}</text>
          <text x={b.x} y={b.y + 5} textAnchor="middle" fontSize="11" fontWeight="800" fill={b.color}>{b.fill}%</text>
          {b.fill > 85 && <text x={b.x} y={b.y + 20} textAnchor="middle" fontSize="9" fill="#f97316">⚠ CHEIO</text>}
          {b.fill <= 60 && <text x={b.x} y={b.y + 20} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">✓ skip</text>}
        </g>
      ))}

      <rect x="30" y="316" width="660" height="24" rx="4" fill="rgba(249,115,22,0.08)" />
      <text x="360" y="328" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>Rota óptima: recolhe apenas contentores &gt;60% → −42% km percorridos · −38% emissões · −31% custo operacional</text>
      <text x="360" y="337" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Algoritmo: VRP + previsão de enchimento (XGBoost com dia semana, eventos, meteorologia) → horiz. 48h</text>
    </svg>
  );
}

export default function SC6() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 06</div>
      <h1 style={S.h1}>Água & Resíduos Inteligentes</h1>
      <p style={S.lead}>
        Água e resíduos são dois dos domínios com maior impacto ambiental e económico
        nas cidades. LSTM Autoencoders detectam fugas nas redes de água com 91% de precisão
        em minutos. VRP com previsão ML de enchimento de contentores reduz 42% os quilómetros
        percorridos pela frota de recolha.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Detecção de Fugas em Redes de Água</h2>
        <WaterNetworkSVG />
        <LeakDetectionAlgoSVG />
        <h3 style={S.h3}>Perdas de água e custo económico</h3>
        <p style={S.p}>
          A média europeia de perdas de água nas redes de distribuição é de 25–30% do volume
          total — em Portugal ronda os 33% (ERSAR 2023). Numa cidade de 500K habitantes
          com consumo de 150 L/hab/dia, isto representa 25M litros perdidos diariamente.
          A detecção e reparação precoce de fugas é o investimento com maior ROI em
          infraestrutura hídrica urbana.
        </p>
        <div style={S.highlight}>
          <strong>Sensores em redes de água:</strong> pressão (transmissores piezoelétricos,
          resolução 0.001 bar), caudal (caudalímetros electromagnéticos, ultrassónicos),
          vibro-acústicos (detecção passiva de ruído de fuga — frequência 100–1500 Hz).
          Comunicação: NB-IoT ou LoRaWAN para dados de pressão (baixa taxa), cabos existentes
          para caudalímetros de alta precisão.
        </div>
        <div style={S.highlight}>
          <strong>LSTM Autoencoder para detecção:</strong> treina em 6+ meses de séries
          temporais normais (pressão × caudal × temperatura × hora). O encoder comprime
          a janela de 60 minutos para um vector latente de 32 dimensões; o decoder reconstrói.
          Em inferência, MSE(reconstrução) elevado = padrão anómalo. Uma fuga manifesta-se
          como queda de pressão a jusante e aumento de caudal não explicado a montante.
        </div>
        <div style={S.highlight}>
          <strong>Localização da fuga:</strong> pressão diferencial entre pares de sensores
          adjacentes + modelo hidráulico (EPANET) permite triangular a localização em segmentos
          de 50–200m. Machine learning correlaciona padrão de pressão com histórico de fugas
          anteriores e qualidade do material da tubagem (ferro fundido vs. PVC vs. PE100).
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Método</th><th style={S.th}>Precisão</th><th style={S.th}>Tempo detecção</th><th style={S.th}>Localização</th></tr></thead>
          <tbody>
            {[
              ['Inspecção manual visual', '~60%', '4–72 horas', 'Sim (~10m)'],
              ['Correlação acústica passiva', '~75%', '1–4 horas', 'Sim (~3m)'],
              ['LSTM Autoencoder (pressão)', '91%', '3–15 min', 'Segmento 50–200m'],
              ['LSTM + modelo hidráulico', '94%', '5–20 min', 'Segmento ~50m'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Smart Bins e Optimização de Recolha</h2>
        <SmartBinsRouteSVG />
        <h3 style={S.h3}>Sensores de nível, previsão de enchimento e VRP</h3>
        <p style={S.p}>
          Os sistemas de recolha de resíduos tradicionais operam em rotas fixas e horários
          fixos — independentemente do nível de enchimento dos contentores. Isto resulta em
          recolha de contentores vazios (desperdício) e contentores a transbordar (insalubridade).
          Smart bins com sensores de nível e comunicação IoT resolvem este ineficiência.
        </p>
        <div style={S.highlight}>
          <strong>Sensores de nível em contentores:</strong> sensores ultrassónicos
          (HC-SR04 ou LIDAR ToF) medem a distância ao topo dos resíduos — fill level (%)
          calculado como (altura_contentor − distância) / altura_contentor.
          Bateria: 2–5 anos com LoRaWAN a SF10, transmissão cada 30 minutos.
          Custo: €15–40/sensor. Integração: FIWARE Smart Data Model
          <code>WasteContainer</code> com atributos fillingLevel, dateLastEmptied, location.
        </div>
        <div style={S.highlight}>
          <strong>Previsão de enchimento (XGBoost):</strong> features incluem fill_level_actual,
          dia_semana, hora, proximidade_mercado, evento_especial, temperatura_ar.
          Horizonte de previsão: 48h. MAE: ~4% de fill level. Permite planear a rota
          do dia seguinte optimizando a frota sem deixar contentores transbordar.
        </div>
        <div style={S.highlight}>
          <strong>VRP (Vehicle Routing Problem) com restrições:</strong> optimização clássica
          (OR-Tools do Google, algoritmos de Clarke-Wright ou metaheurísticas — ALNS, GRASP)
          sobre grafo viário real (OpenStreetMap + OSRM para distâncias reais vs. euclidianas).
          Restrições: capacidade do veículo, janelas horárias de recolha, zonas de baixa emissão,
          custo de combustível por segmento. Redução típica: 30–45% km vs. rota fixa.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Cidade</th><th style={S.th}>Bins instalados</th><th style={S.th}>Redução km</th><th style={S.th}>Payback</th></tr></thead>
          <tbody>
            {[
              ['Barcelona (Sigfox)', '1 700 contentores', '–50%', '2.1 anos'],
              ['Amesterdão (LoRaWAN)', '12 000 contentores', '–40%', '2.8 anos'],
              ['Santander (NB-IoT)', '2 200 contentores', '–35%', '3.2 anos'],
              ['Lisboa (projecto-piloto)', '450 contentores', '–38%', 'estimado 2.5a'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Qualidade da Água e Monitorização Ambiental</h2>
        <p style={S.p}>
          Além das fugas, a qualidade da água é um domínio crescente de aplicação de ML urbano.
          Redes de sensores medem cloro residual, turbidez, pH, condutividade e temperatura
          em tempo real — detectando contaminações antes de afectarem os consumidores.
        </p>
        <div style={S.highlight}>
          <strong>Detecção de eventos de contaminação:</strong> CANARY (Sandia National Labs)
          e LODA (Lightweight On-line Detector of Anomalies) combinam múltiplos algoritmos
          (MVNN, BEP, LPCF) em ensemble para detectar eventos de contaminação com taxa
          de falsos positivos &lt;1 por semana. O sistema isola automaticamente segmentos
          da rede de distribuição quando detecta contaminação — protocolo activado em &lt;5 minutos.
        </div>
        <div style={S.highlight}>
          <strong>Previsão de qualidade (LSTM):</strong> modelos LSTM prevêem turbidez
          24h à frente com base em dados de precipitação (chuva aumenta turbidez por
          runoff), temperatura e consumo histórico. Permite ajustar antecipadamente o
          tratamento na ETA (Estação de Tratamento de Água) — reduz consumo de produtos
          químicos em 12–18%.
        </div>
        <div style={S.note}>
          Síntese: smart water management e smart waste são dois dos domínios com ROI
          mais rápido em smart cities. Detecção de fugas com LSTM recupera o custo do
          sistema em &lt;18 meses via redução de perdas. Smart bins com VRP poupam
          30–50% nos custos de recolha. Ambos dependem de IoT de baixo custo (NB-IoT/LoRaWAN),
          algoritmos de anomaly detection e optimização combinatorial sobre grafos viários reais.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Detecção de Fugas em Redes de Água</strong> — LSTM Autoencoders treinados em séries temporais normais de pressão e caudal detectam fugas em 3–15 minutos com 91% de precisão, localizando o segmento com apoio do modelo hidráulico EPANET, face às 4–72 horas da inspecção manual.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Smart Bins e Optimização de Recolha</strong> — sensores ultrassónicos de nível reportam o enchimento dos contentores via LoRaWAN; XGBoost prevê enchimentos a 48h de horizonte e o VRP (OR-Tools) calcula rotas óptimas, reduzindo 30–45% dos km percorridos face a rotas fixas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Qualidade da Água e Monitorização Ambiental</strong> — sistemas como CANARY combinam múltiplos algoritmos em ensemble para detectar eventos de contaminação com menos de um falso positivo por semana, activando automaticamente o isolamento de segmentos da rede em menos de 5 minutos.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
