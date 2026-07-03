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

function STGNNArchSVG() {
  const nodes = [
    { id: 'A', label: 'Nó A\n(Int. Marquês)', x: 140, y: 130 },
    { id: 'B', label: 'Nó B\n(Av. Liberdade)', x: 360, y: 90 },
    { id: 'C', label: 'Nó C\n(Rossio)', x: 580, y: 130 },
    { id: 'D', label: 'Nó D\n(Cais Sodré)', x: 200, y: 250 },
    { id: 'E', label: 'Nó E\n(Terreiro Paço)', x: 520, y: 250 },
  ];
  const edges = [[0,1,0.9],[0,3,0.7],[1,2,0.85],[1,4,0.6],[2,4,0.75],[3,4,0.8]];
  return (
    <svg viewBox="0 0 720 360" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>ST-GNN — Rede Viária como Grafo (Lisboa)</text>

      {edges.map(([a, b, w], i) => {
        const na = nodes[a], nb = nodes[b];
        const dx = nb.x - na.x, dy = nb.y - na.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const r = 40;
        const x1 = na.x + (dx / dist) * r, y1 = na.y + (dy / dist) * r;
        const x2 = nb.x - (dx / dist) * r, y2 = nb.y - (dy / dist) * r;
        const mx = (na.x + nb.x) / 2, my = (na.y + nb.y) / 2;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w * 3} strokeOpacity="0.4" />
            <rect x={mx - 16} y={my - 9} width={32} height={16} rx="3" fill="var(--bg-secondary)" />
            <text x={mx} y={my + 4} textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">w={w}</text>
          </g>
        );
      })}

      {nodes.map((n, i) => {
        const lines = n.label.split('\n');
        return (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="40" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
            <text x={n.x} y={n.y - 5} textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>{lines[0]}</text>
            <text x={n.x} y={n.y + 12} textAnchor="middle" fontSize="9.5" fill="var(--text-secondary)">{lines[1]}</text>
          </g>
        );
      })}

      {/* Formula box */}
      <rect x="30" y="310" width="660" height="36" rx="5" fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.10)" strokeWidth="1" />
      <text x="360" y="324" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>Difusão em Grafo (DCRNN): H⁽ˡ⁺¹⁾ = σ( Σₖ (Dₒ⁻¹A)ᵏ · H⁽ˡ⁾ · Wₖᶠ + (Dᵢ⁻¹Aᵀ)ᵏ · H⁽ˡ⁾ · Wₖᵇ )</text>
      <text x="360" y="340" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">K saltos de difusão · Wₖᶠ pesos forward, Wₖᵇ pesos backward · integrado em GRU para dependência temporal</text>
    </svg>
  );
}

function TrafficBenchmarkSVG() {
  const models = [
    { name: 'ARIMA', mae15: 3.99, mae60: 6.21, color: '#94a3b8' },
    { name: 'SVR', mae15: 3.56, mae60: 5.70, color: '#94a3b8' },
    { name: 'DCRNN', mae15: 2.77, mae60: 3.96, color: '#f97316' },
    { name: 'STGCN', mae15: 2.88, mae60: 3.47, color: '#f97316' },
    { name: 'Graph WaveNet', mae15: 2.69, mae60: 3.53, color: '#f97316' },
    { name: 'AGCRN', mae15: 2.64, mae60: 3.37, color: '#f97316' },
    { name: 'PDFormer (2023)', mae15: 2.52, mae60: 3.31, color: '#f97316' },
  ];
  const maxMAE = 7;
  const barH = 22, gap = 8, leftPad = 150, maxW = 240;
  return (
    <svg viewBox="0 0 720 290" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Benchmark METR-LA — MAE (km/h) — 15min e 60min de horizonte</text>
      <text x={leftPad + maxW / 2} y="36" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">15 min →</text>
      <text x={leftPad + maxW + 60 + maxW / 2} y="36" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">60 min →</text>
      {models.map((m, i) => {
        const y = 44 + i * (barH + gap);
        const w15 = (m.mae15 / maxMAE) * maxW;
        const w60 = (m.mae60 / maxMAE) * maxW;
        const isBaseline = i < 2;
        return (
          <g key={m.name}>
            <text x={leftPad - 8} y={y + barH / 2 + 4} textAnchor="end" fontSize="10" fontWeight={isBaseline ? '400' : '700'} fill={isBaseline ? '#94a3b8' : m.color}>{m.name}</text>
            <rect x={leftPad} y={y} width={w15} height={barH} rx="4" fill={m.color} fillOpacity={isBaseline ? 0.4 : 0.8} />
            <text x={leftPad + w15 + 5} y={y + barH / 2 + 4} fontSize="10" fontWeight="700" fill={m.color}>{m.mae15}</text>
            <rect x={leftPad + maxW + 60} y={y} width={w60} height={barH} rx="4" fill={m.color} fillOpacity={isBaseline ? 0.4 : 0.8} />
            <text x={leftPad + maxW + 60 + w60 + 5} y={y + barH / 2 + 4} fontSize="10" fontWeight="700" fill={m.color}>{m.mae60}</text>
          </g>
        );
      })}
      <rect x="30" y="264" width="660" height="20" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="278" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">METR-LA: 207 sensores de laço indutivo na Auto-Estrada I-5, Los Angeles · 4 meses de dados a 5 min · Split 70/10/20%</text>
    </svg>
  );
}

function AdaptiveTrafficSVG() {
  return (
    <svg viewBox="0 0 720 250" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Controlo Adaptativo de Semáforos — RL vs. Ciclo Fixo</text>

      {/* Fixed cycle */}
      <rect x="30" y="35" width="300" height="180" rx="8" fill="#6b7280" fillOpacity="0.08" stroke="#6b7280" strokeWidth="1.5" />
      <text x="180" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">Ciclo Fixo (tradicional)</text>
      {[
        { label: 'Verde N/S', dur: 30, color: '#f97316', x: 50 },
        { label: 'Amarelo', dur: 5, color: '#f97316', x: 50 },
        { label: 'Verde E/O', dur: 25, color: '#f97316', x: 50 },
        { label: 'Amarelo', dur: 5, color: '#f97316', x: 50 },
      ].map((p, i) => {
        const w = (p.dur / 65) * 210;
        return (
          <g key={i}>
            <rect x={50} y={68 + i * 30} width={w} height={22} rx="3" fill={p.color} fillOpacity="0.7" />
            <text x={50 + w + 5} y={68 + i * 30 + 15} fontSize="9" fill="var(--text-secondary)">{p.label} {p.dur}s</text>
          </g>
        );
      })}
      <text x="180" y="200" textAnchor="middle" fontSize="9" fill="#6b7280">Ciclo total: 65s · Independente do fluxo real</text>
      <text x="180" y="210" textAnchor="middle" fontSize="9" fill="#6b7280">Atraso médio: 35–45s · Utilização: ~60%</text>

      {/* RL adaptive */}
      <rect x="390" y="35" width="300" height="180" rx="8" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1.5" />
      <text x="540" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>RL Adaptativo (IntelliLight / SUMO)</text>
      {[
        { label: 'Verde N/S', dur: 48, color: '#f97316' },
        { label: 'Amarelo', dur: 4, color: '#f97316' },
        { label: 'Verde E/O', dur: 14, color: '#f97316' },
        { label: 'Amarelo', dur: 4, color: '#f97316' },
      ].map((p, i) => {
        const w = (p.dur / 70) * 210;
        return (
          <g key={i}>
            <rect x={410} y={68 + i * 30} width={w} height={22} rx="3" fill={p.color} fillOpacity="0.7" />
            <text x={410 + w + 5} y={68 + i * 30 + 15} fontSize="9" fill="var(--text-secondary)">{p.label} {p.dur}s</text>
          </g>
        );
      })}
      <text x="540" y="200" textAnchor="middle" fontSize="9" fill={color}>Ciclo adaptativo: observa filas de espera</text>
      <text x="540" y="210" textAnchor="middle" fontSize="9" fill={color}>Atraso médio: 18–22s (−45%) · Utilização: ~85%</text>

      <text x="360" y="237" textAnchor="middle" fontSize="10" fill="var(--text-secondary)">Estado do agente RL: comprimento de fila por fase + tempo desde último verde · Reward: −(total waiting time)</text>
    </svg>
  );
}

function V2XArchSVG() {
  const nW = 124, nH = 56;
  const nodes = [
    { label: 'Veículo\nAutónomo',      x: 110, y: 105 },
    { label: 'RSU\n(Road Side Unit)',   x: 360, y: 55  },
    { label: 'Semáforo\nInteligente',  x: 610, y: 105 },
    { label: 'Pedestre\n(UWB/BLE)',    x: 110, y: 235 },
    { label: 'MEC Server\n(Edge Cloud)',x: 360, y: 205 },
    { label: 'Centro de\nControlo',    x: 610, y: 245 },
  ];
  // [from, to, label, labelOffsetX, labelOffsetY]
  const edges = [
    [0, 1, 'V2I 5.9GHz PC5',  -30, -8],
    [0, 4, 'V2N Uu (5G)',      -40,  8],
    [1, 2, 'I2I fibra óptica',  20, -8],
    [1, 4, 'backhaul 10G',       5, 12],
    [3, 1, 'V2P BLE 5.2',      -40, -8],
    [4, 5, 'N6 interface',      20,  0],
    [2, 4, 'I2N C-V2X',         20, -8],
  ];

  const edgeEnd = (na, nb) => {
    const dx = nb.x - na.x, dy = nb.y - na.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const hw = nW/2, hh = nH/2;
    // find intersection with target box border
    const tx = Math.abs(dx/dist) > 0 ? hw / Math.abs(dx/dist) : Infinity;
    const ty = Math.abs(dy/dist) > 0 ? hh / Math.abs(dy/dist) : Infinity;
    const t = Math.min(tx, ty);
    return { x: nb.x - (dx/dist)*t, y: nb.y - (dy/dist)*t };
  };
  const edgeStart = (na, nb) => {
    const dx = nb.x - na.x, dy = nb.y - na.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const hw = nW/2, hh = nH/2;
    const tx = Math.abs(dx/dist) > 0 ? hw / Math.abs(dx/dist) : Infinity;
    const ty = Math.abs(dy/dist) > 0 ? hh / Math.abs(dy/dist) : Infinity;
    const t = Math.min(tx, ty);
    return { x: na.x + (dx/dist)*t, y: na.y + (dy/dist)*t };
  };

  return (
    <svg viewBox="0 0 720 320" style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 10 }}>
      <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>Arquitectura C-V2X — 3GPP Release 16 (5G NR V2X)</text>
      <defs>
        <marker id="arrowV2X" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill={color} />
        </marker>
      </defs>
      {/* Edges drawn first */}
      {edges.map(([a, b, label, ox, oy], i) => {
        const na = nodes[a], nb = nodes[b];
        const s = edgeStart(na, nb), e = edgeEnd(na, nb);
        const mx = (na.x + nb.x) / 2 + ox, my = (na.y + nb.y) / 2 + oy;
        return (
          <g key={i}>
            <line x1={s.x} y1={s.y} x2={e.x} y2={e.y} stroke={color} strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowV2X)" strokeOpacity="0.7" />
            <text x={mx} y={my} textAnchor="middle" fontSize="8" fill={color} fontWeight="600">{label}</text>
          </g>
        );
      })}
      {/* Nodes drawn on top */}
      {nodes.map((n, i) => {
        const lines = n.label.split('\n');
        return (
          <g key={i}>
            <rect x={n.x - nW/2} y={n.y - nH/2} width={nW} height={nH} rx="8" fill="rgba(249,115,22,0.12)" stroke={color} strokeWidth="1.5" />
            {lines.map((l, li) => (
              <text key={li} x={n.x} y={n.y - 4 + li * 16} textAnchor="middle" fontSize="10" fontWeight={li === 0 ? '700' : '400'} fill={color}>{l}</text>
            ))}
          </g>
        );
      })}
      <rect x="30" y="292" width="660" height="20" rx="4" fill="rgba(249,115,22,0.10)" />
      <text x="360" y="306" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">Latência PC5 (sidelink V2V): 1–3ms | Uu (V2N via gNB): 5–10ms | MEC processa colisão iminente sem roundtrip à nuvem central</text>
    </svg>
  );
}

export default function SC2() {
  return (
    <div style={S.page}>
      <Link to="/smart-cities" style={S.back}><ArrowLeft size={16} /> Smart Cities</Link>
      <div style={S.tag}>Module 02</div>
      <h1 style={S.h1}>Mobilidade & Tráfego Inteligente</h1>
      <p style={S.lead}>
        A mobilidade urbana é o domínio onde IA e IoT têm o impacto mais imediato nas smart cities.
        Spatio-Temporal Graph Neural Networks prevêem tráfego com precisão de &lt;3% de erro.
        Reinforcement Learning controla semáforos reduzindo esperas em 45%. Comunicação V2X
        com latência de 1–3ms permite prevenção de colisões em veículos autónomos.
      </p>

      <section style={S.section}>
        <h2 style={S.h2}>1. ST-GNN para Previsão de Tráfego</h2>
        <STGNNArchSVG />
        <h3 style={S.h3}>Difusão em grafo e dependência temporal</h3>
        <p style={S.p}>
          O tráfego urbano tem duas dependências fundamentais: <strong>espacial</strong>
          (congestionamento numa rua propaga-se às ruas adjacentes) e <strong>temporal</strong>
          (padrões repetem-se por hora, dia da semana e sazonalidade). Modelos clássicos
          (ARIMA, SVR) capturam apenas a dimensão temporal. As ST-GNNs modelam simultaneamente
          as duas — representando a rede viária como grafo ponderado onde o peso das arestas
          reflecte distância/conectividade.
        </p>
        <div style={S.highlight}>
          <strong>DCRNN</strong> (Diffusion Convolutional RNN, Li et al. 2018):
          modela a difusão do tráfego no grafo como processo Markoviano bidirecional —
          forward (direcção do fluxo) e backward (contra o fluxo, para capturar efeitos
          de "gargalo" a montante). O operador de difusão de K passos substitui a
          convolução no espaço do grafo, integrado numa célula GRU para dependência temporal.
        </div>
        <div style={S.highlight}>
          <strong>Graph WaveNet</strong> (Wu et al. 2019): aprende a matriz de adjacência
          do grafo de forma adaptativa durante o treino — sem depender da topologia fixa
          da rede viária. Usa TCN (Temporal Convolutional Network) com dilated causal
          convolutions em vez de RNN — mais paralelo e com receptive field exponencial.
        </div>
        <div style={S.highlight}>
          <strong>PDFormer</strong> (Jiang et al. 2023): incorpora mecanismo de atenção
          propagation delay-aware — modela explicitamente o atraso com que o congestionamento
          se propaga de um nó para os seus vizinhos (função da distância e velocidade média).
          Estado da arte em METR-LA e PEMS-BAY.
        </div>
        <TrafficBenchmarkSVG />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>2. Controlo Adaptativo de Semáforos com RL</h2>
        <AdaptiveTrafficSVG />
        <h3 style={S.h3}>Formulação MDP e arquitecturas em produção</h3>
        <p style={S.p}>
          O controlo de semáforos é um Markov Decision Process (MDP): o agente observa
          o estado da intersecção (comprimento das filas, fases activas, tempo decorrido)
          e selecciona a próxima fase para minimizar o tempo total de espera.
        </p>
        <div style={S.highlight}>
          <strong>Formulação do MDP:</strong>
          <br/>• <strong>Estado s:</strong> vetor com comprimento de fila por fase, velocidade
          média por abordagem, fase actual, tempo desde último verde
          <br/>• <strong>Acção a:</strong> qual fase activar a seguir (verde para N/S, E/O, etc.)
          <br/>• <strong>Reward r:</strong> −Σ(waiting_time) por veículo ou −queue_length²
          <br/>• <strong>Algoritmo:</strong> DQN, PPO ou SARSA — simulação SUMO para treino offline,
          deploy no controlador físico Siemens/Swarco via API
        </div>
        <div style={S.highlight}>
          <strong>IntelliLight</strong> (Wei et al. 2018) e <strong>PressLight</strong>
          (Wei et al. 2019): architecturas DRL para controlo single-intersection e
          multi-intersection coordenado. PressLight usa "pressão" (diferença de filas
          entre entrada e saída) como state feature — permite coordenação entre
          intersecções sem comunicação directa.
        </div>
        <p style={S.p}>
          <strong>Em produção:</strong> Hangzhou (China) reduziu tempo de viagem médio
          em 15% em 28 intersecções com RL (ICCV 2021). Pittsburgh (EUA) — sistema
          Surtrac (CMU) usa agentes de IA descentralizados desde 2012, reduzindo
          esperas em 40% e emissões em 21%.
        </p>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>3. V2X — Comunicação Cooperativa</h2>
        <V2XArchSVG />
        <h3 style={S.h3}>C-V2X 5G NR e Multi-access Edge Computing</h3>
        <p style={S.p}>
          O 3GPP Release 16 standardizou o 5G NR V2X com duas interfaces:
          <strong> PC5</strong> (sidelink, comunicação directa V2V e V2I sem passar pela rede)
          e <strong>Uu</strong> (uplink/downlink via gNB). A interface PC5 em modo 4
          (autonomous resource selection) funciona sem cobertura de rede — crítico para
          segurança em túneis ou zonas sem cobertura.
        </p>
        <div style={S.highlight}>
          <strong>Mensagens BSM/CAM:</strong> Basic Safety Messages (DSRC/SAE J2735)
          ou Cooperative Awareness Messages (ETSI EN 302 637-2) são enviadas a 10 Hz
          por cada veículo — posição GPS, velocidade, aceleração, direcção do volante.
          Um único RSU processa 200+ veículos em simultâneo e detecta conflitos iminentes
          com horizonte de 2–3 segundos.
        </div>
        <div style={S.highlight}>
          <strong>MEC (Multi-access Edge Computing) em V2X:</strong> capacidade de
          computação nas RSUs (tipicamente NVIDIA Jetson AGX) processa localmente:
          fusão de dados de múltiplos veículos (sensor fusion distribuída),
          detecção de objectos além da linha de visão (NLoS — pedestres atrás de edifícios),
          optimização local de fluxo (green wave) sem roundtrip à nuvem.
        </div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Aplicação V2X</th><th style={S.th}>Latência máxima</th><th style={S.th}>Interface</th><th style={S.th}>Standard</th></tr></thead>
          <tbody>
            {[
              ['Aviso colisão iminente', '3ms', 'PC5 Mode 4', 'SAE J2945/1'],
              ['Green light optimal speed', '100ms', 'Uu ou PC5', 'ETSI TS 103 300'],
              ['Aviso trabalhos na via', '500ms', 'Uu (C-V2N)', 'ETSI EN 302 637-3'],
              ['Actualização mapa HD', '5s', 'Uu (5G eMBB)', 'TomTom HD Map API'],
            ].map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={S.td}>{c}</td>)}</tr>)}
          </tbody>
        </table>
        <div style={S.note}>
          Síntese: ST-GNNs superam modelos clássicos em 35% na previsão de tráfego
          ao modelar a topologia da rede viária. RL reduz esperas em semáforos em 40–45%
          adaptando em tempo real ao fluxo observado. V2X com C-V2X/5G permite prevenção
          de colisões com latência &lt;3ms — a fundação técnica do transporte autónomo seguro.
        </div>
      </section>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>4. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>ST-GNN para Previsão de Tráfego</strong> — redes neuronais espácio-temporais em grafo (DCRNN, Graph WaveNet, PDFormer) modelam simultaneamente a topologia viária e os padrões temporais, superando ARIMA em 35% no dataset METR-LA.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Controlo Adaptativo de Semáforos com RL</strong> — agentes de Reinforcement Learning (DQN, PPO) observam as filas de espera em tempo real e seleccionam a fase óptima de semáforo, reduzindo esperas em 40–45% face a ciclos fixos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>V2X — Comunicação Cooperativa</strong> — a arquitectura C-V2X (3GPP Release 16) usa a interface PC5 para comunicação directa veículo-a-veículo com latência de 1–3ms, e MEC nas RSUs para fusão de dados e detecção de colisões sem roundtrip à nuvem.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
