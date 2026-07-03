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
  note: { background: 'rgba(245,158,11,0.06)', borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0', padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '1rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)', overflowX: 'auto', margin: '1rem 0', whiteSpace: 'pre' },
};

function SmartGridRLSVG() {
  const bW = 110, bH = 52;
  const nodes = {
    solar:   { x: 90,  y: 90  },
    eolica:  { x: 90,  y: 210 },
    bateria: { x: 290, y: 150 },
    rede:    { x: 470, y: 150 },
    agent:   { x: 470, y: 55  },
    ev:      { x: 650, y: 90  },
    hvac:    { x: 650, y: 210 },
  };
  const arrow = (x1, y1, x2, y2, dash = '') => {
    const dx = x2 - x1, dy = y2 - y1, d = Math.sqrt(dx*dx+dy*dy);
    const ex = x2 - (dx/d)*8, ey = y2 - (dy/d)*8;
    return <line x1={x1} y1={y1} x2={ex} y2={ey} stroke={color} strokeWidth="1.5" strokeDasharray={dash} markerEnd="url(#arrowSG3)" />;
  };
  return (
    <svg viewBox="0 0 760 310" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="380" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Smart Grid — Agente RL para Despacho Energético (DDPG/PPO)</text>
      <defs>
        <marker id="arrowSG3" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>

      {/* Energy flow: Solar/Eólica → Bateria → Rede → EV/HVAC */}
      {arrow(145, 90,  235, 140)}
      {arrow(145, 210, 235, 160)}
      {arrow(345, 150, 415, 150)}
      {arrow(525, 140, 595, 100)}
      {arrow(525, 160, 595, 200)}
      {/* Observation: Rede → RL Agent (solid, upward) */}
      {arrow(470, 124, 470, 84)}
      {/* RL Agent actions (dashed): Agent → Bateria */}
      {arrow(440, 84, 310, 126, '5 3')}
      {/* RL Agent actions (dashed): Agent → EV Fleet */}
      {arrow(555, 68, 595, 85, '5 3')}
      {/* RL Agent actions (dashed): Agent → HVAC */}
      {arrow(555, 76, 595, 195, '5 3')}

      {/* Nodes */}
      {[
        [nodes.solar,   'Solar PV\n(variável)'],
        [nodes.eolica,  'Eólica\n(variável)'],
        [nodes.bateria, 'Bateria\nComunitária'],
        [nodes.rede,    'Rede\nDistribuição'],
        [nodes.ev,      'EV Fleet\n(flex.)'],
        [nodes.hvac,    'HVAC\n(interruptível)'],
      ].map(([n, lbl], i) => {
        const lines = lbl.split('\n');
        return (
          <g key={i}>
            <rect x={n.x - bW/2} y={n.y - bH/2} width={bW} height={bH} rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
            {lines.map((l, li) => (
              <text key={li} x={n.x} y={n.y - 4 + li * 16} textAnchor="middle" fontSize="10" fontWeight={li === 0 ? '700' : '400'} fill={color}>{l}</text>
            ))}
          </g>
        );
      })}

      {/* RL Agent box (drawn last = on top) */}
      <rect x={nodes.agent.x - bW/2} y={nodes.agent.y - bH/2} width={bW + 30} height={bH + 8} rx="10" fill="rgba(249,115,22,0.18)" stroke={color} strokeWidth="2" />
      <text x={nodes.agent.x + 15} y={nodes.agent.y - 8} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>RL Agent</text>
      <text x={nodes.agent.x + 15} y={nodes.agent.y + 8} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">DDPG / PPO</text>
      <text x={nodes.agent.x + 15} y={nodes.agent.y + 22} textAnchor="middle" fontSize="8" fill="var(--text-secondary)">Observa: SOC, preço, previsão</text>

      {/* State/Action/Reward */}
      <rect x="30" y="262" width="700" height="38" rx="6" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.2)" strokeWidth="1" />
      <text x="380" y="276" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Estado: [SOC_bateria, P_solar(t), P_eólica(t), preço_mercado(t), previsão_consumo(t+1..24)]</text>
      <text x="380" y="292" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Acção: [P_carga/descarga_bateria, P_EV_flex, P_HVAC_redução] · Reward: −(custo_energia + penalidade_pico + emissões_CO₂)</text>
    </svg>
  );
}

function NILMSvg() {
  const appliances = [
    { name: 'Esquentador', watts: 2200, color: '#f97316', pct: 35 },
    { name: 'AVAC', watts: 1800, color: '#fb923c', pct: 28 },
    { name: 'Frigorífico', watts: 180, color: '#f59e0b', pct: 12 },
    { name: 'Iluminação', watts: 120, color: '#fbbf24', pct: 10 },
    { name: 'Computadores', watts: 380, color: '#ea580c', pct: 9 },
    { name: 'Outros', watts: 400, color: '#78716c', pct: 6 },
  ];
  const cx = 180, cy = 130, r = 90;
  let cumAngle = -Math.PI / 2;
  return (
    <svg viewBox="0 0 720 300" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>NILM — Desagregação do Consumo por Aparelho (CNN sobre forma de onda)</text>

      {appliances.map((a, i) => {
        const angle = (a.pct / 100) * 2 * Math.PI;
        const x1 = cx + r * Math.cos(cumAngle);
        const y1 = cy + r * Math.sin(cumAngle);
        const x2 = cx + r * Math.cos(cumAngle + angle);
        const y2 = cy + r * Math.sin(cumAngle + angle);
        const large = angle > Math.PI ? 1 : 0;
        const mx = cx + (r + 20) * Math.cos(cumAngle + angle / 2);
        const my = cy + (r + 20) * Math.sin(cumAngle + angle / 2);
        cumAngle += angle;
        return (
          <g key={i}>
            <path d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z`}
              fill={a.color} fillOpacity="0.75" stroke="var(--bg-secondary)" strokeWidth="2" />
            {a.pct > 8 && <text x={mx} y={my + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill={a.color}>{a.pct}%</text>}
          </g>
        );
      })}

      {/* Legend */}
      {appliances.map((a, i) => (
        <g key={a.name}>
          <rect x="300" y={30 + i * 38} width={12} height={12} rx="2" fill={a.color} fillOpacity="0.8" />
          <text x="318" y={41 + i * 38} fontSize="10" fontWeight="700" fill={a.color}>{a.name}</text>
          <text x="318" y={55 + i * 38} fontSize="9" fill="var(--text-secondary)">{a.watts}W · {a.pct}% do total</text>
        </g>
      ))}

      {/* Right panel: CNN description */}
      <rect x="490" y="28" width="210" height="210" rx="8" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
      <text x="595" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Arquitectura CNN-NILM</text>
      {[
        'Input: P(t) 1Hz, 1 hora',
        '↓ Conv1D (64 filtros, k=3)',
        '↓ MaxPool + Dropout',
        '↓ Conv1D (128 filtros, k=3)',
        '↓ Dense (256 → 128)',
        '↓ Sigmoid por aparelho',
        'Output: P_aparelho(t)',
      ].map((l, i) => (
        <text key={i} x="595" y={66 + i * 22} textAnchor="middle" fontSize="9" fill="var(--text-secondary)">{l}</text>
      ))}
      <text x="595" y="224" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">F1-Score: 0.87–0.94</text>

      <rect x="30" y="258" width="660" height="30" rx="5" fill="rgba(245,158,11,0.06)" />
      <text x="360" y="271" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Dataset: UK-DALE, REDD, REFIT · Smart meter lê P(t) a 1–8 Hz · Sem hardware adicional por aparelho</text>
      <text x="360" y="284" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Aplicação: detectar aparelhos ineficientes (esquentador a falhar +40% consumo), feedback comportamental ao consumidor</text>
    </svg>
  );
}

function AirQualityMLSVG() {
  const pollutants = [
    { name: 'PM2.5', value: 28, limit: 25, maxRef: 60, color: '#f97316' },
    { name: 'NO₂', value: 38, limit: 40, maxRef: 80, color: '#f97316' },
    { name: 'O₃', value: 100, limit: 120, maxRef: 160, color: '#f97316' },
    { name: 'CO (×0.1)', value: 3.2, limit: 10, maxRef: 12, color: '#f97316' },
    { name: 'SO₂', value: 12, limit: 125, maxRef: 140, color: '#f97316' },
  ];
  const barH = 26, gap = 12, leftPad = 130, maxW = 380;

  return (
    <svg viewBox="0 0 720 340" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Qualidade do Ar Urbano — Medições vs. Limites OMS/EU (Lisboa, Jun 2024)</text>
      {pollutants.map((p, i) => {
        const wVal = (p.value / p.maxRef) * maxW;
        const wLim = (p.limit / p.maxRef) * maxW;
        const y = 34 + i * (barH + gap);
        const over = p.value > p.limit;
        return (
          <g key={p.name}>
            <text x={leftPad - 10} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fontWeight="700" fill={over ? '#f97316' : p.color}>{p.name} (μg/m³)</text>
            <rect x={leftPad} y={y} width={wVal} height={barH} rx="5" fill={p.color} fillOpacity={over ? 0.9 : 0.7} />
            <line x1={leftPad + wLim} y1={y - 4} x2={leftPad + wLim} y2={y + barH + 4} stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <text x={leftPad + wVal + 8} y={y + barH / 2 + 4} fontSize="11" fontWeight="800" fill={p.color}>{p.value}</text>
            <text x={leftPad + wLim + 6} y={y - 6} fontSize="7.5" fill="#f97316">limite OMS: {p.limit}</text>
            {over && <text x={leftPad + maxW + 30} y={y + barH / 2 + 4} fontSize="9" fontWeight="700" fill="#f97316">⚠ acima</text>}
          </g>
        );
      })}
      <text x="360" y="248" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Pipeline de Calibração de Sensores Low-Cost (transferência para estação referência)</text>
      <rect x="30" y="256" width="660" height="62" rx="6" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
      <text x="360" y="272" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">1. Sensor low-cost (PMS5003) e estação referência (TEOM) em co-localização por 4 semanas</text>
      <text x="360" y="287" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">2. Random Forest treina: f(T, RH, sensor_raw, hora) → PM2.5_referência · Melhora r²: 0.46 → 0.91</text>
      <text x="360" y="302" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">3. Transfer learning: modelo calibrado numa estação adapta para outra em 2 semanas (domínio shift)</text>
    </svg>
  );
}

export default function SC3() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 03</div>
      <h1 style={S.h1}>Energia & Ambiente</h1>
      <p style={S.lead}>
        A transição energética e a qualidade ambiental são os maiores desafios das cidades do
        século XXI. Agentes RL optimizam despacho em smart grids integrando solar e eólica
        variáveis. NILM desagrega o consumo por aparelho com CNNs. Redes de sensores low-cost
        calibrados com ML monitorizam qualidade do ar com resolução espacial de 200m.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. Smart Grids com Reinforcement Learning</h2>
        <SmartGridRLSVG />
        <h3 style={S.h3}>DDPG e PPO para despacho energético contínuo</h3>
        <p style={S.p}>
          A integração de fontes renováveis variáveis (solar, eólica) com procura flexível
          (veículos eléctricos, HVAC) cria um problema de optimização dinâmico impossível
          de resolver com métodos estáticos. RL com espaço de acção contínuo
          (DDPG — Deep Deterministic Policy Gradient, ou PPO — Proximal Policy Optimization)
          é o estado da arte.
        </p>
        <div style={S.highlight}>
          <strong>DDPG para gestão de bateria comunitária:</strong> o agente observa o
          estado de carga (SOC), previsão de produção solar/eólica a 24h (LSTM sobre
          dados meteorológicos ERA5), preço horário do mercado (MIBEL/EPEX) e previsão
          de consumo. A acção é contínua: potência de carga/descarga da bateria em kW.
          Reward: minimizar custo_energia − receita_peak_shaving − penalidade_degradação_bateria.
        </div>
        <div style={S.highlight}>
          <strong>DeepMind + Google Data Centres:</strong> agente RL (DDPG) reduziu consumo
          de energia de arrefecimento em 40% e PUE (Power Usage Effectiveness) de 1.12 para 1.06
          — equivalente a 40% menos energia para arrefecer. Publicado em Nature (2018).
          Arquitectura: estado com 100+ sensores (temperatura, caudal, carga); acção:
          setpoints de 20 dispositivos de arrefecimento.
        </div>
        <div style={S.highlight}>
          <strong>Virtual Power Plants (VPP):</strong> agrega prosumers com solar + bateria
          numa entidade virtual que participa no mercado como se fosse uma central convencional.
          O agente RL central coordena milhares de baterias residenciais para fornecer
          serviços de rede (frequency response, peak shaving) com latência &lt;500ms.
          Tesla Energy Powerwall 2 com software Autobidder opera em VPPs em 35 países.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Aplicação RL em Energia</th><th style={S.th}>Algoritmo</th><th style={S.th}>Resultado</th></tr></thead>
          <tbody>
            {[
              ['Despacho bateria comunitária', 'DDPG / TD3', '–23% custo energia (Pecan Street dataset)'],
              ['Arrefecimento data centre', 'DDPG (DeepMind)', '–40% energia arrefecimento (Nature 2018)'],
              ['Demand Response residencial', 'DQN + LSTM', '–18% pico de carga, +12% auto-consumo solar'],
              ['HVAC scheduling em edifício', 'PPO + MPC híbrido', '–31% consumo, conforto mantido (ASHRAE 55)'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. NILM — Non-Intrusive Load Monitoring</h2>
        <NILMSvg />
        <h3 style={S.h3}>CNNs sobre formas de onda de potência</h3>
        <p style={S.p}>
          NILM desagrega o consumo total medido pelo smart meter em aparelhos individuais —
          sem instalar sub-medidores por aparelho. Usa apenas a leitura de potência activa P(t)
          a 1–8 Hz do medidor inteligente. Cada aparelho tem uma "assinatura" característica
          na forma de onda: o esquentador tem transiente de arranque a 2200W, o frigorífico
          cicla entre 0W e 180W a cada 20 minutos.
        </p>
        <div style={S.highlight}>
          <strong>CNN-NILM (Zhang et al. 2018):</strong> usa convolução 1D sobre janelas
          de 1 hora de P(t) para estimar a potência de cada aparelho simultaneamente.
          Abordagem multi-tarefa (uma cabeça de saída por aparelho) com shared encoder.
          Treino em REDD (6 casas, EUA) e UK-DALE (5 casas, Reino Unido).
          F1-score: 0.87–0.94 por aparelho em hold-out set.
        </div>
        <div style={S.highlight}>
          <strong>BERT4NILM:</strong> adapta a arquitectura transformer BERT para séries
          temporais de consumo — máscara aleatória de timestamps e prediz o consumo por
          aparelho no timestamp mascarado. Supera CNNs em 3–5% F1, especialmente em
          aparelhos com padrões irregulares (máquina de lavar).
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. Monitorização da Qualidade do Ar com ML</h2>
        <AirQualityMLSVG />
        <h3 style={S.h3}>Sensores low-cost, calibração e previsão de episódios</h3>
        <p style={S.p}>
          Estações de referência (TEOM, GRIMM) custam 30–100K€ e são instaladas uma por
          bairro. Sensores eletroquímicos low-cost (Alphasense, PMS5003) custam 50–200€
          mas sofrem de deriva, interferência cruzada e sensibilidade a temperatura/humidade.
          ML resolve o gap de precisão sem custo de hardware adicional.
        </p>
        <div style={S.highlight}>
          <strong>Calibração com Random Forest:</strong> co-localiza sensor low-cost e
          estação de referência por 4 semanas. Treina RF com features:
          [sensor_raw, temperatura, humidade relativa, hora, dia_semana].
          Melhora correlação r² de 0.46 para 0.91 em PM2.5.
          O modelo captura efeitos não-lineares: sensores PM dispersivos sobrestimam
          em humidade alta (partículas húmidas difractam mais luz).
        </div>
        <div style={S.highlight}>
          <strong>Previsão de episódios (24–48h):</strong> combina leituras actuais,
          previsão meteorológica (ERA5/ECMWF), dados de tráfego (ST-GNN de velocidade)
          e calendário (obras, eventos). Random Forest ou XGBoost com features de lag
          temporal. AUC-ROC: 0.88 para episódios de PM2.5 &gt;limite em Lisboa (Marchi et al. 2022).
          Permite activar restrições de tráfego preventivas ("Porto Baixo Emissões")
          antes do episódio se desenvolver.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Poluente</th><th style={S.th}>Sensor low-cost</th><th style={S.th}>Método calibração</th><th style={S.th}>r² pós-calibração</th></tr></thead>
          <tbody>
            {[
              ['PM2.5 / PM10', 'PMS5003 (laser scattering)', 'RF + T/RH features', '0.91 / 0.88'],
              ['NO₂', 'Alphasense B4 (electrochem.)', 'SVR com cross-sensitivity', '0.82'],
              ['O₃', 'Alphasense B4 + temp', 'Lasso + temperatura', '0.79'],
              ['CO', 'MQ-7 (semiconductor)', 'Calibração linear + drift', '0.75'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Síntese: RL para smart grids permite integrar &gt;50% de renováveis sem instabilidade.
          NILM transforma cada smart meter num auditor energético sem custo adicional de hardware.
          Redes de sensores low-cost calibradas com ML aumentam resolução espacial da monitorização
          ambiental por um factor de 50–100× a custo marginal por sensor de €50–200.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Smart Grids com Reinforcement Learning</strong> — agentes DDPG/PPO optimizam o despacho de baterias comunitárias e HVAC em tempo real, integrando renováveis variáveis e reduzindo o custo energético em 23–40%; o projecto DeepMind nos data centres do Google reduziu 40% do consumo de arrefecimento.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>NILM — Non-Intrusive Load Monitoring</strong> — desagrega o consumo total do smart meter em aparelhos individuais usando CNN 1D sobre a forma de onda de potência, atingindo F1-score de 0.87–0.94 sem hardware adicional por aparelho.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Monitorização da Qualidade do Ar com ML</strong> — sensores low-cost (€50–200) calibrados com Random Forest atingem r² de 0.91 para PM2.5, aumentando a resolução espacial da monitorização em 50–100× face às estações de referência tradicionais.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
