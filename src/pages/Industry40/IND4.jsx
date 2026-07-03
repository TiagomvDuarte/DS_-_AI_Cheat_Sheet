import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Industry40';

const color = '#f97316';
const S = {
  page: { maxWidth: 860, margin: '0 auto', padding: '0 1rem 4rem' },
  back: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' },
  badge: { display: 'inline-block', background: 'transparent', color: color, border: `1.5px solid ${color}`, fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem', letterSpacing: '0.05em' },
  h1: { fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' },
  section: { marginBottom: '2.5rem' },
  h2: { fontSize: '1.25rem', fontWeight: 700, color, borderLeft: `3px solid ${color}`, paddingLeft: '0.85rem', marginBottom: '1.2rem' },
  card: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.25rem' },
  p: { fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1rem' },
  highlight: { background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 8, padding: '0.9rem 1.1rem', marginTop: '0.8rem', fontSize: '0.93rem', color: 'var(--text-primary)', lineHeight: 1.7 },
  note: { background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, padding: '0.8rem 1rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 },
  diagram: { background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0' },
  divider: { border: 'none', borderTop: '1px solid var(--card-border)', margin: '2.5rem 0' },
  code: { background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: '1rem 1.2rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.7, marginTop: '0.75rem', overflowX: 'auto' },
  formula: { background: '#1e293b', border: '1px solid var(--card-border)', borderRadius: 8, padding: '0.75rem 1rem', marginTop: '0.75rem', fontFamily: 'monospace', fontSize: '0.9rem', color: '#f8fafc', textAlign: 'center' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function BullwhipSVG() {
  const W = 560, H = 200;
  const t = Array.from({length: 10}, (_, i) => i);
  const demand   = [100,105,98,102,108,95,103,100,99,104];
  const retailer = [100,118,82,125,140,72,128,90,80,130];
  const distrib  = [100,138,62,150,168,52,155,72,60,158];
  const supplier = [100,162,38,180,200,28,190,48,35,188];
  const xS = (i) => 45 + i * 49;
  const yS = (v) => 160 - ((v - 25) / 185) * 110;
  const linePath = (arr, offset=0) => arr.map((v,i)=>`${i===0?'M':'L'}${xS(i)+offset},${yS(v)}`).join(' ');
  const series = [
    { data: demand, c: '#f97316', label: 'Procura real', sw: 2.5, dash: '' },
    { data: retailer, c: '#fb923c', label: 'Retalhista', sw: 2, dash: '6,3' },
    { data: distrib, c: '#f59e0b', label: 'Distribuidor', sw: 2, dash: '3,3' },
    { data: supplier, c: '#fbbf24', label: 'Fabricante', sw: 2, dash: '8,2,2,2' },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H + 10}`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Bullwhip Effect — Amplificacao de Variabilidade (Lee et al. 1997)</text>
      <line x1="45" y1="160" x2="520" y2="160" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="45" y1="40" x2="45" y2="160" stroke="var(--card-border)" strokeWidth="1" />
      {series.map((s, si) => (
        <path key={si} d={linePath(s.data, 0)} fill="none" stroke={s.c} strokeWidth={s.sw} strokeDasharray={s.dash} />
      ))}
      {[100,150,200].map(v => (
        <g key={v}>
          <line x1="45" y1={yS(v)} x2="520" y2={yS(v)} stroke="var(--card-border)" strokeWidth="0.5" />
          <text x={40} y={yS(v)+4} fill="#fb923c" fontSize="8" textAnchor="end">{v}</text>
        </g>
      ))}
      {t.map(i => <text key={i} x={xS(i)} y={173} textAnchor="middle" fill="#fb923c" fontSize="8">S{i+1}</text>)}
      <text x={270} y={190} textAnchor="middle" fill="#fb923c" fontSize="9">Semanas</text>
      {series.map((s, i) => (
        <g key={i}>
          <line x1={350 + (i%2)*110} y1={26 + Math.floor(i/2)*18} x2={362 + (i%2)*110} y2={26 + Math.floor(i/2)*18} stroke={s.c} strokeWidth={s.sw} strokeDasharray={s.dash} />
          <text x={366 + (i%2)*110} y={30 + Math.floor(i/2)*18} fill={s.c} fontSize="8.5">{s.label}</text>
        </g>
      ))}
      <text x={280} y={200} textAnchor="middle" fill="#fb923c" fontSize="8.5">CV(procura)=5% amplificado para CV(fabricante)=28%. Partilha de dados POS reduz em 30-50%.</text>
    </svg>
  );
}

function ForecastSVG() {
  const methods = [
    { name: 'Naive (Last value)', mape: 18.4, color: '#fb923c' },
    { name: 'ARIMA (Box-Jenkins)', mape: 12.1, color: '#fb923c' },
    { name: 'Prophet (Meta)', mape: 8.7, color: '#f97316' },
    { name: 'XGBoost + lag features', mape: 6.3, color: '#f97316' },
    { name: 'LSTM seq2seq', mape: 5.1, color: '#f97316' },
    { name: 'N-HiTS (2023)', mape: 3.8, color: '#f97316' },
    { name: 'TiDE (Google, 2024)', mape: 3.2, color: '#f97316' },
  ];
  const maxMAPE = 20;
  return (
    <svg viewBox="0 0 560 240" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="240" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Demand Forecasting — MAPE Comparativo (M5 Competition / Walmart)</text>
      {methods.map((m, i) => {
        const y = 26 + i * 29;
        const barW = (m.mape / maxMAPE) * 300;
        return (
          <g key={i}>
            <text x={168} y={y + 16} textAnchor="end" fill={m.color} fontSize="10" fontWeight="700">{m.name}</text>
            <rect x={173} y={y + 4} width={barW} height={18} fill={m.color} rx="3" opacity="0.82" />
            <text x={178 + barW} y={y + 16} fill="#e2e8f0" fontSize="10">MAPE {m.mape}%</text>
          </g>
        );
      })}
      <text x={280} y={234} textAnchor="middle" fill="#fb923c" fontSize="9">M5 Competition (Walmart 42840 series, 5 anos historico diario). TiDE: Time-series Dense Encoder, Google 2024.</text>
    </svg>
  );
}

function InventoryModelSVG() {
  const W = 560, H = 185;
  const cycles = 3;
  const Q = 100, L = 8, SS = 25;
  const points = [];
  for (let c = 0; c < cycles; c++) {
    const start = c * 60;
    points.push({x: 45 + start * 7, y: 0, type: 'order'});
    for (let t = 0; t <= 60; t++) {
      const inv = SS + Q - (t / 60) * Q;
      points.push({x: 45 + (start + t) * 7, y: inv, type: 'line'});
    }
  }
  const xS = (x) => x;
  const yS = (v) => 145 - (v / 130) * 110;
  let path = '';
  let orderLines = [];
  let prevType = '';
  points.forEach((p, i) => {
    if (p.type === 'order' && i > 0) {
      orderLines.push(p.x);
      path += ` M${xS(p.x)},${yS(SS + Q)}`;
    } else {
      path += ` ${path.length === 0 || prevType === 'order' ? 'M' : 'L'}${xS(p.x)},${yS(p.y)}`;
    }
    prevType = p.type;
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', borderRadius: 8 }}>
      <rect width={W} height={H} fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={16} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Modelo (s,Q) — Ponto de Reabastecimento e Safety Stock</text>
      <line x1="45" y1="145" x2="520" y2="145" stroke="var(--card-border)" strokeWidth="1" />
      <line x1="45" y1="25" x2="45" y2="145" stroke="var(--card-border)" strokeWidth="1" />
      {/* Safety stock line */}
      <line x1="45" y1={yS(SS)} x2="520" y2={yS(SS)} stroke="#eab308" strokeDasharray="6,3" strokeWidth="1.5" />
      <text x={525} y={yS(SS)+4} fill="#eab308" fontSize="9">SS</text>
      {/* Reorder point */}
      <line x1="45" y1={yS(SS + 30)} x2="520" y2={yS(SS + 30)} stroke="#f97316" strokeDasharray="4,3" strokeWidth="1.5" />
      <text x={525} y={yS(SS+30)+4} fill="#f97316" fontSize="9">ROP</text>
      {/* Inventory line */}
      <path d={path} fill="none" stroke="#f97316" strokeWidth="2.5" />
      {/* Order lines */}
      {orderLines.map((x, i) => (
        <line key={i} x1={x} y1="25" x2={x} y2="145" stroke="#f97316" strokeDasharray="5,3" strokeWidth="1.5" />
      ))}
      <text x={280} y={175} textAnchor="middle" fill="#fb923c" fontSize="9">Semanas</text>
      <text x={28} y={40} fill="#fb923c" fontSize="8" textAnchor="middle">Stock</text>
      <text x={280} y={185} textAnchor="middle" fill="#fb923c" fontSize="8.5">SS = z_alpha * sigma_d * sqrt(L) | ROP = mu_d * L + SS | EOQ = sqrt(2*D*S / h)</text>
    </svg>
  );
}

function BlockchainSVG() {
  const nodes = [
    { x: 70, y: 90, label: 'Fornecedor', color: '#f97316' },
    { x: 200, y: 55, label: 'Fabricante', color: '#f97316' },
    { x: 330, y: 55, label: 'Distribuidor', color: '#f97316' },
    { x: 460, y: 90, label: 'Retalhista', color: '#f97316' },
    { x: 200, y: 145, label: 'Logistica', color: '#f97316' },
    { x: 330, y: 145, label: 'Alfandega', color: '#f97316' },
  ];
  const edges = [[0,1],[1,2],[2,3],[1,4],[4,5],[5,3],[0,4]];
  return (
    <svg viewBox="0 0 560 215" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="200" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Hyperledger Fabric — Rede de Consorcio para Rastreabilidade</text>
      {edges.map(([a,b],i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#e2e8f0" strokeWidth="1" strokeOpacity="0.4" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x-36} y={n.y-18} width={72} height={36} fill="var(--bg-secondary)" rx="5" />
          <rect x={n.x-36} y={n.y-18} width={72} height={36} fill={n.color} rx="5" opacity="0.15" />
          <rect x={n.x-36} y={n.y-18} width={72} height={36} fill="none" stroke={n.color} strokeWidth="1.5" rx="5" />
          <text x={n.x} y={n.y-4} textAnchor="middle" fill={n.color} fontSize="10" fontWeight="700">{n.label}</text>
          <text x={n.x} y={n.y+10} textAnchor="middle" fill="#fb923c" fontSize="8">Peer node</text>
        </g>
      ))}
      {/* Blockchain strip */}
      {[140, 240, 340, 440].map((x, i) => (
        <g key={i}>
          <rect x={x} y={168} width={75} height={22} fill="rgba(249,115,22,0.06)" stroke="#e2e8f0" strokeWidth="0.5" strokeOpacity="0.3" rx="3" />
          <text x={x+37} y={179} textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="700">Block #{1000+i}</text>
          <text x={x+37} y={187} textAnchor="middle" fill="#fb923c" fontSize="7">hash: {`a${i}f3...`}</text>
        </g>
      ))}
      <text x={280} y={208} textAnchor="middle" fill="#fb923c" fontSize="8.5">Chaincode (Go/Node.js): logica de negocio imutavel. Orderer Raft: 3000-8000 TPS. Finalizacao 0.5-2s.</text>
    </svg>
  );
}

export default function IND4() {
  const mod = modules[3];
  return (
    <div style={S.page}>
      <Link to="/industry40" style={S.back}>← Industry 4.0</Link>
      <div style={S.badge}>MÓDULO 04</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Bullwhip Effect — Matematica da Amplificacao</h2>
        <div style={S.diagram}><BullwhipSVG /></div>
        <div style={S.highlight}>
          <strong>Prova matematica (Chen et al. 2000)</strong>: a variancia da ordem no nivel i da cadeia e: Var(D_i) = Var(procura) * (1 + 2*L/T + 2*L^2/T^2)^i, onde L e o lead time e T o periodo de revisao. Com L=2 semanas e T=4 semanas, a variancia duplica por nivel. <strong>Causas estruturais</strong>: (1) Politica de encomenda por lotes (Q fixo vs demand continua); (2) Previsao local independente em cada nivel; (3) Especulacao de preco; (4) Shortages e jogo de racionamento. <strong>Solucoes</strong>: partilha de dados POS em tempo real, VMI (Vendor Managed Inventory), CPFR (Collaborative Planning, Forecasting and Replenishment).
        </div>
        <div style={S.note}>
          <strong>CPFR (Colaborative Planning, Forecasting and Replenishment)</strong> e o standard VICS para partilha bi-direccional de previsoes entre fabricante e retalhista. Walmart implementou CPFR com 250 fornecedores: reducao de bullwhip de 35% e reducao de inventario medio de 15% mantendo fill rate de 99.5%.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Demand Forecasting — Da Estatistica ao Deep Learning</h2>
        <div style={S.diagram}><ForecastSVG /></div>
        <div style={S.highlight}>
          <strong>N-HiTS</strong> (Challu et al., AAAI 2023): usa interpolacao hierarquica multi-escala temporal. Tres stacks em paralelo capturam tendencia de longo prazo, sazonalidade, e residuos. O pooling com diferentes kernels (8x, 4x, 1x) permite focar em padroes de diferentes granularidades sem parametros de sazonalidade explicitos. <strong>TiDE</strong> (Google 2024): encoder-decoder denso em vez de transformer — 5x mais rapido que PatchTST mantendo accuracy equivalente. MAPE de 3.2% em M5 (42840 series de retalho).
        </div>
        <div style={S.note}>
          <strong>Variaveis exogenas criticas</strong>: calendario (feriados, Black Friday, sazonalidade escolar), meteorologia (temperatura para FMCG de bebidas, neve para equipamento invernal), preco e elasticidade, eventos promocionais, e dados de search trends (Google Trends API). Walmart estima que 1% de melhoria em MAPE = $1B em reducao de stockouts e overstock anualmente.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Gestao de Inventario — Modelos Estocasticos</h2>
        <div style={S.diagram}><InventoryModelSVG /></div>
        <div style={S.highlight}>
          <strong>Modelo (s, Q)</strong>: encomendar quantidade Q quando o stock atinge o ponto de reabastecimento s=ROP. Formulas: <strong>EOQ = sqrt(2*D*S/h)</strong> (Economic Order Quantity), onde D=procura anual, S=custo de encomenda, h=custo de posse unitario/ano. <strong>Safety Stock = z_alpha * sigma_d * sqrt(L)</strong>, onde z_alpha e o z-score do nivel de servico desejado (z=1.65 para 95%, z=2.33 para 99%), sigma_d e o desvio padrao da procura diaria, e L e o lead time em dias. <strong>Newsvendor Model</strong> (produto perecivel): quantidade optima Q* tal que P(D &lt;= Q*) = (p - c) / (p - s) = critical ratio.
        </div>
        <div style={S.note}>
          <strong>Multi-echelon inventory optimization</strong>: em cadeias com armazem central + armazens regionais + lojas, optimizar inventario em cada nivel simultaneamente. Problema NP-hard resolvido por MEIO (Multi-Echelon Inventory Optimization) com programacao dinamica estocastica ou simulacao de Monte Carlo. SAP IBP e Oracle SCM Cloud implementam MEIO com ML para actualizar parametros dinamicamente.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Blockchain — Hyperledger Fabric para Rastreabilidade</h2>
        <div style={S.diagram}><BlockchainSVG /></div>
        <div style={S.highlight}>
          <strong>Hyperledger Fabric</strong> e uma blockchain permissionada (consortium): so participantes autorizados escrevem, com identidades verificadas por CA (Certificate Authority X.509). Arquitectura: <strong>Orderer</strong> (consensus Raft — BFT tolerante a falhas crash, 3-5 nodes); <strong>Peers</strong> (executam chaincode em Docker); <strong>Channel</strong> (subnets privadas — dados visiveis apenas a membros). Throughput: 3000-8000 TPS com latencia de finalizacao 0.5-2s. <strong>Smart Contracts</strong> (chaincode em Go/Node.js): logica de negocio imutavel — e.g. pagamento automatico via token quando GPS do camiao confirma entrega no geofence do armazem.
        </div>
        <div style={S.note}>
          <strong>Digital Product Passport (EU Ecodesign Regulation 2030)</strong>: obrigatorio para baterias de EV a partir de 2027, texteis 2026, electronics 2027. Requer rastreabilidade de materias primas (minerios criticos), emissoes de CO2 por fase, e fim de vida. Hyperledger Fabric e o candidato principal como infra de DPP por ser permissionada (GDPR) e de alto throughput.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. VRP — Optimizacao de Rotas de Entrega</h2>
        <div style={S.grid2}>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>CVRP Formulacao</div>
            <p style={S.p}>
              <strong>Capacitated VRP</strong>: minimizar sum(c_ij * x_ij) sujeito a: cada cliente visitado exactamente 1x (sum_j x_ij = 1 para todo i), capacidade do veiculo Q nao excedida (sum_i d_i * y_ik &lt;= Q para rota k), e cada rota comeca e termina no depot. NP-hard — instancias de 100 clientes sao resolvidas em ms; 1000 clientes em segundos com meta-heuristicas.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Solvers Estado da Arte</div>
            <p style={S.p}>
              <strong>HGS-CVRP</strong> (Vidal 2022, Hybrid Genetic Search): resolve instancias de 1000 clientes em 30s, 0.5% do optimum. <strong>OR-Tools</strong> (Google): open-source, suporta CVRPTW (com janelas de tempo), multi-depot, pickup-delivery. <strong>Attention Model</strong> (Kool et al. ICLR 2019): transformer treinado por RL, generaliza para novas instancias sem re-optimizacao — usado quando as instancias mudam em tempo real.
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks Supply Chain Inteligente</h2>
        <div style={S.grid3}>
          {[
            { title: 'Amazon — Forecasting', stat: '-25% inventario', detail: 'Deep AR em 400M SKUs. Previsao probabilistica para safety stock dinamico. 1% melhoria MAPE = $1B saving.' },
            { title: 'Walmart CPFR', stat: '-35% bullwhip', detail: 'CPFR com 250 fornecedores. Partilha de dados POS em tempo real. Fill rate 99.5% com -15% inventario medio.' },
            { title: 'Zara Fast Fashion', stat: '2 semanas lead time', detail: '50% producao apos inicio da estacao. NLP em redes sociais para tendencias. 10000+ SKUs, producao responsiva.' },
            { title: 'Walmart Food Safety', stat: '2.2s rastreabilidade', detail: 'Hyperledger Fabric: de 6.5 dias a 2.2s para rastrear manga. 200 fornecedores. IBM Food Trust.' },
            { title: 'DHL Last Mile', stat: '-18% custo entrega', detail: 'OR-Tools CVRPTW + re-routing HERE Maps. 3000 veiculos em 12 paises. ETAs em tempo real para cliente.' },
            { title: 'Maersk TradeLens', stat: '200M+ documentos', detail: 'Blockchain para documentos de carga maritima. Reducao de lead time documental de 10 dias para 3 dias.' },
          ].map((b, i) => (
            <div key={i} style={{ ...S.card, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, color, marginBottom: '0.25rem', fontSize: '0.85rem' }}>{b.title}</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{b.stat}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{b.detail}</div>
            </div>
          ))}
        </div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>7. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Bullwhip Effect — Matematica da Amplificacao</strong> — o Bullwhip Effect descreve a amplificação de variabilidade da procura à medida que sobe na cadeia de abastecimento; matematicamente, a variância de pedidos de nível i é amplificada por (1 + lead_time × demand_variability)² — causa de excesso de inventário e rupturas simultâneas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Demand Forecasting — Da Estatistica ao Deep Learning</strong> — ARIMA e Holt-Winters são referências estatísticas; Prophet (Meta) lida com sazonalidade e feriados; N-HiTS e TFT (Temporal Fusion Transformer) são o estado da arte em séries temporais hierárquicas de supply chain — Walmart e Amazon usam ensembles destes modelos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Gestao de Inventario — Modelos Estocasticos</strong> — EOQ determina quantidade óptima de encomenda; Q(s,S) e política (s,S) com procura estocástica usam simulação Monte Carlo para optimizar safety stock; Newsvendor model resolve o one-period stochastic problem com custo de underage vs. overage.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Blockchain — Hyperledger Fabric para Rastreabilidade</strong> — Hyperledger Fabric é blockchain permissionado (consórcio industrial) que regista transacções de rastreabilidade em ledger imutável; cada transferência de produto (lote, localização, condições) fica auditável por todos os participantes sem revelar dados sensíveis a concorrentes.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>VRP — Optimizacao de Rotas de Entrega</strong> — VRP generaliza o TSP com múltiplos veículos, capacidades e janelas temporais (VRPTW); OR-Tools e Gurobi resolvem instâncias reais; heurísticas como Clarke-Wright e meta-heurísticas (ALNS) escalam para milhares de clientes em segundos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Implementacao: Demand Forecasting com N-HiTS + Safety Stock</strong> — pipeline: dados de vendas históricos → N-HiTS para previsão probabilística → quantis P10/P50/P90 → safety stock = z × σ_demand × √lead_time → optimização de encomenda com custo de holding vs. stockout — implementável em &lt;1 semana com NeuralForecast.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks Supply Chain Inteligente</strong> — M5 Forecasting Competition (Walmart) é o benchmark de referência para demand forecasting hierárquico; SCOR (Supply Chain Operations Reference) define KPIs padrão (perfect order rate, cash-to-cash cycle time); Amazon reporta 25% de redução de custo de inventário com ML.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
