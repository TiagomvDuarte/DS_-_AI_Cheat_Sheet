import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Autonomous';

const mod = modules[3];
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

function PlanningHierarchyDiagram() {
  const layers = [
    { label: 'Mission Planning', sub: 'Route A→B via road network · GPS waypoints · Hours', freq: '~0.1 Hz', color: '#f97316' },
    { label: 'Behavioral Planning', sub: 'Lane changes, intersections, yield · State machine · Seconds', freq: '~1 Hz', color: '#f97316' },
    { label: 'Motion Planning', sub: 'Smooth trajectory · Obstacles · Comfort · 5-10s horizon', freq: '~10 Hz', color: '#f97316' },
    { label: 'Control', sub: 'Steering angle, throttle, brake · Actuator commands', freq: '~100 Hz', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 760 230" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f59e0b" fontSize={13} fontWeight={700}>Planning Hierarchy — 4-Layer Stack</text>
      {layers.map((l, i) => (
        <g key={i} transform={`translate(0,${28 + i * 48})`}>
          <rect x={10} y={0} width={580} height={40} rx={6} fill={`${l.color}18`} stroke={`${l.color}50`} strokeWidth={1.5} />
          <rect x={10} y={0} width={6} height={40} rx={3} fill={l.color} />
          <text x={28} y={16} fill={l.color} fontSize={12} fontWeight={700}>{l.label}</text>
          <text x={28} y={30} fill="#fb923c" fontSize={10}>{l.sub}</text>
          <rect x={600} y={8} width={150} height={24} rx={4} fill={`${l.color}20`} />
          <text x={675} y={24} textAnchor="middle" fill={l.color} fontSize={11} fontWeight={700}>{l.freq}</text>
          {i < layers.length - 1 && (
            <path d="M 300 44 L 300 50" stroke={l.color} strokeWidth={1.5} markerEnd={`url(#arph${i})`} />
          )}
          <defs>
            <marker id={`arph${i}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 z" fill={l.color} />
            </marker>
          </defs>
        </g>
      ))}
      <text x={380} y={225} textAnchor="middle" fill="#f97316" fontSize={10}>Each layer operates at different time horizons — output of upper layer is constraint for lower</text>
    </svg>
  );
}

function GlobalPlanningDiagram() {
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f59e0b" fontSize={13} fontWeight={700}>A* vs Dijkstra — Graph Search for Route Planning</text>
      {/* Graph visualization */}
      <rect x={10} y={28} width={360} height={180} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={190} y={50} textAnchor="middle" fill="#fb923c" fontSize={11}>Road Network Graph</text>
      {/* Edges first (behind nodes) */}
      {[
        [50, 165, 130, 105], [50, 165, 130, 185], [130, 105, 210, 75], [130, 105, 210, 155],
        [130, 185, 210, 155], [210, 75, 300, 115], [210, 155, 300, 115], [300, 115, 350, 175],
        [210, 155, 350, 175],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth={1.5} opacity={0.35} />
      ))}
      {/* A* path highlighted */}
      {[[50, 165, 130, 105], [130, 105, 210, 155], [210, 155, 350, 175]].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth={3} opacity={0.85} />
      ))}
      {/* Nodes on top */}
      {[
        { id: 'S', x: 50, y: 165, color: '#f97316' },
        { id: 'A', x: 130, y: 105, color: '#f97316' },
        { id: 'B', x: 130, y: 185, color: '#f97316' },
        { id: 'C', x: 210, y: 75, color: '#f97316' },
        { id: 'D', x: 210, y: 155, color: '#f97316' },
        { id: 'E', x: 300, y: 115, color: '#f97316' },
        { id: 'G', x: 350, y: 175, color: '#f97316' },
      ].map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={14} fill="var(--bg-secondary)" stroke={n.color} strokeWidth={2} />
          <circle cx={n.x} cy={n.y} r={14} fill={`${n.color}30`} stroke="none" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fill={n.color} fontSize={10} fontWeight={700}>{n.id}</text>
        </g>
      ))}
      {/* Algorithm comparison */}
      <rect x={390} y={28} width={360} height={180} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={570} y={52} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight={700}>Algorithm Comparison</text>
      {[
        { name: 'Dijkstra', heuristic: 'None (h=0)', complexity: 'O(E log V)', speed: 'Baseline', color: '#fb923c' },
        { name: 'A*', heuristic: 'Euclidean dist', complexity: 'O(E log V)', speed: '~10× faster', color: '#f97316' },
        { name: 'D* Lite', heuristic: 'A* + replanning', complexity: 'O(k log V)', speed: 'Dynamic maps', color: '#f97316' },
      ].map((a, i) => (
        <g key={i} transform={`translate(400,${68 + i * 46})`}>
          <rect x={0} y={0} width={340} height={38} rx={4} fill={`${a.color}12`} stroke={`${a.color}30`} />
          <text x={8} y={15} fill={a.color} fontSize={12} fontWeight={700}>{a.name}</text>
          <text x={8} y={28} fill="#fb923c" fontSize={9}>h(n) = {a.heuristic}</text>
          <text x={170} y={15} fill="#fb923c" fontSize={10}>{a.complexity}</text>
          <text x={170} y={28} fill={a.color} fontSize={10} fontWeight={600}>{a.speed}</text>
        </g>
      ))}
      <text x={570} y={208} textAnchor="middle" fill="#f97316" fontSize={10}>Edge weights: road type + speed limit + real-time traffic + turn cost</text>
    </svg>
  );
}

function BehavioralDiagram() {
  return (
    <svg viewBox="0 0 760 230" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f59e0b" fontSize={13} fontWeight={700}>Behavioral Planning — Finite State Machine</text>
      {/* States */}
      {[
        { id: 'FOLLOW', label: 'Follow Lane', x: 340, y: 100, color: '#f97316' },
        { id: 'LEFT', label: 'Change Left', x: 160, y: 60, color: '#f97316' },
        { id: 'RIGHT', label: 'Change Right', x: 540, y: 60, color: '#f97316' },
        { id: 'STOP', label: 'Emergency Stop', x: 340, y: 190, color: '#f97316' },
        { id: 'YIELD', label: 'Yield / Wait', x: 160, y: 175, color: '#f97316' },
      ].map(s => (
        <g key={s.id}>
          <rect x={s.x - 52} y={s.y - 20} width={104} height={38} rx={8} fill={`${s.color}20`} stroke={s.color} strokeWidth={2} />
          <text x={s.x} y={s.id === 'FOLLOW' ? s.y - 3 : s.y - 4} textAnchor="middle" fill={s.color} fontSize={11} fontWeight={700}>{s.label}</text>
        </g>
      ))}
      {/* Transitions */}
      <path d="M 288 90 L 212 72" stroke="#f9731650" strokeWidth={1.5} fill="none" markerEnd="url(#arrbeh)" />
      <text x={240} y={75} fill="#f97316" fontSize={8}>safe gap left</text>
      <path d="M 392 90 L 488 72" stroke="rgba(249,115,22,0.31)" strokeWidth={1.5} fill="none" markerEnd="url(#arrbeh)" />
      <text x={405} y={75} fill="#f97316" fontSize={8}>safe gap right</text>
      <path d="M 212 82 L 292 95" stroke="rgba(249,115,22,0.31)" strokeWidth={1.5} fill="none" markerEnd="url(#arrbeh)" />
      <path d="M 488 82 L 392 95" stroke="rgba(249,115,22,0.31)" strokeWidth={1.5} fill="none" markerEnd="url(#arrbeh)" />
      <path d="M 340 120 L 340 170" stroke="#ea580c50" strokeWidth={1.5} fill="none" markerEnd="url(#arrbeh)" />
      <text x={348} y={150} fill="#f97316" fontSize={8}>obstacle!</text>
      <path d="M 288 105 L 212 168" stroke="#f59e0b50" strokeWidth={1.5} fill="none" markerEnd="url(#arrbeh)" />
      <text x={195} y={140} fill="#f97316" fontSize={8}>intersection</text>
      <defs>
        <marker id="arrbeh" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
        </marker>
      </defs>
      {/* MPDM note */}
      <rect x={560} y={110} width={195} height={110} rx={8} fill="rgba(249,115,22,0.06)" stroke="#f59e0b30" />
      <text x={657} y={130} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight={700}>MPDM (beyond FSM)</text>
      <text x={568} y={148} fill="#fb923c" fontSize={9}>Evaluate N policies forward:</text>
      <text x={568} y={162} fill="#fb923c" fontSize={9}>• follow lane at v_desired</text>
      <text x={568} y={175} fill="#fb923c" fontSize={9}>• change left / right</text>
      <text x={568} y={188} fill="#fb923c" fontSize={9}>• decelerate / stop</text>
      <text x={568} y={202} fill="#f97316" fontSize={9}>Choose: min risk + efficiency</text>
      <text x={568} y={214} fill="#f97316" fontSize={9}>Handles multi-agent interactions</text>
    </svg>
  );
}

function TrajectoryDiagram() {
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f59e0b" fontSize={13} fontWeight={700}>Frenet Frame — Trajectory Sampling</text>
      {/* Frenet frame */}
      <rect x={10} y={28} width={370} height={180} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={195} y={50} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight={700}>Frenet Coordinate Frame</text>
      {/* Road center line */}
      <path d="M 30 140 Q 120 100 200 130 Q 280 160 360 120" fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="6 3" />
      {/* Road lanes */}
      <path d="M 30 115 Q 120 75 200 105 Q 280 135 360 95" fill="none" stroke="var(--card-border)" strokeWidth={1} />
      <path d="M 30 165 Q 120 125 200 155 Q 280 185 360 145" fill="none" stroke="var(--card-border)" strokeWidth={1} />
      {/* Candidate trajectories */}
      {[-20, -10, 0, 10, 20].map((d, i) => (
        <path key={i}
          d={`M 80 ${155 + d} Q 160 ${130 + d * 0.8} 240 ${128 + d * 0.5} Q 300 ${125 + d * 0.3} 350 ${120 + d * 0.1}`}
          fill="none" stroke={i === 2 ? '#f97316' : '#f97316'} strokeWidth={i === 2 ? 2.5 : 1}
          opacity={i === 2 ? 1 : 0.4} />
      ))}
      <circle cx={80} cy={155} r={6} fill="#f97316" />
      <text x={80} y={170} textAnchor="middle" fill="#f97316" fontSize={9}>ego</text>
      {/* Axes */}
      <text x={200} y={200} textAnchor="middle" fill="#fb923c" fontSize={9}>s (longitudinal along road)</text>
      <text x={20} y={120} fill="#fb923c" fontSize={9}>d (lateral offset)</text>
      {/* Lattice planner box */}
      <rect x={390} y={28} width={360} height={180} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={570} y={50} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight={700}>Lattice Planner Cost Function</text>
      {[
        { term: 'w₁ × comfort', val: 'jerk + lateral acc', color: '#f97316', w: 0.3 },
        { term: 'w₂ × safety', val: 'min clearance to obstacles', color: '#f97316', w: 0.5 },
        { term: 'w₃ × efficiency', val: 'progress toward goal', color: '#f97316', w: 0.2 },
      ].map((c, i) => (
        <g key={i} transform={`translate(400,${65 + i * 45})`}>
          <rect x={0} y={0} width={340} height={38} rx={4} fill={`${c.color}12`} stroke={`${c.color}30`} />
          <text x={8} y={15} fill={c.color} fontSize={12} fontWeight={700}>{c.term}</text>
          <text x={8} y={28} fill="#fb923c" fontSize={9}>{c.val}</text>
          <rect x={220} y={8} width={c.w * 110} height={16} rx={3} fill={c.color} opacity={0.7} />
          <text x={225 + c.w * 110} y={20} fill="#fb923c" fontSize={9}>w={c.w}</text>
        </g>
      ))}
      <text x={570} y={210} textAnchor="middle" fill="#f97316" fontSize={9}>Sample 100s of candidate trajectories → evaluate cost → pick minimum</text>
    </svg>
  );
}

function MPCDiagram() {
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f59e0b" fontSize={13} fontWeight={700}>PID vs MPC — Control Architectures</text>
      {/* PID */}
      <rect x={10} y={28} width={345} height={180} rx={10} fill="rgba(249,115,22,0.06)" stroke="#f9731640" />
      <text x={182} y={50} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>PID Controller (Reactive)</text>
      <rect x={20} y={60} width={80} height={30} rx={4} fill="#f9731620" stroke="#f97316" />
      <text x={60} y={79} textAnchor="middle" fill="#fb923c" fontSize={10}>Error e(t)</text>
      <path d="M 105 75 L 135 75" stroke="#f97316" strokeWidth={1.5} markerEnd="url(#arrpid)" />
      <rect x={140} y={55} width={100} height={40} rx={4} fill="#f9731620" stroke="#f97316" />
      <text x={190} y={72} textAnchor="middle" fill="#fb923c" fontSize={9}>Kp·e</text>
      <text x={190} y={84} textAnchor="middle" fill="#fb923c" fontSize={9}>+ Ki·∫e + Kd·ė</text>
      <path d="M 245 75 L 275 75" stroke="#f97316" strokeWidth={1.5} markerEnd="url(#arrpid)" />
      <rect x={280} y={60} width={65} height={30} rx={4} fill="#f9731620" stroke="#f97316" />
      <text x={312} y={79} textAnchor="middle" fill="#fb923c" fontSize={10}>u(t)</text>
      <text x={182} y={125} textAnchor="middle" fill="#f97316" fontSize={10}>✗ No model of vehicle dynamics</text>
      <text x={182} y={140} textAnchor="middle" fill="#f97316" fontSize={10}>✗ Cannot handle actuator limits</text>
      <text x={182} y={155} textAnchor="middle" fill="#f97316" fontSize={10}>✗ Poor with time delays</text>
      <text x={182} y={175} textAnchor="middle" fill="#f97316" fontSize={10}>✓ Simple · fast · lateral: Stanley ctrl</text>
      <defs>
        <marker id="arrpid" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
        </marker>
      </defs>
      {/* MPC */}
      <rect x={370} y={28} width={380} height={180} rx={10} fill="rgba(249,115,22,0.06)" stroke="#f59e0b40" />
      <text x={560} y={50} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight={700}>MPC — Model Predictive Control</text>
      <rect x={380} y={60} width={110} height={30} rx={4} fill="#f59e0b20" stroke="#f59e0b" />
      <text x={435} y={74} textAnchor="middle" fill="#f59e0b" fontSize={10}>Vehicle Model</text>
      <text x={435} y={84} textAnchor="middle" fill="#f97316" fontSize={9}>kinematic/dynamic</text>
      <rect x={510} y={60} width={115} height={30} rx={4} fill="#f59e0b20" stroke="#f59e0b" />
      <text x={567} y={74} textAnchor="middle" fill="#f59e0b" fontSize={10}>Optimize N steps</text>
      <text x={567} y={84} textAnchor="middle" fill="#f97316" fontSize={9}>horizon 10-50 steps</text>
      <rect x={645} y={60} width={98} height={30} rx={4} fill="#f9731620" stroke="#f97316" />
      <text x={694} y={74} textAnchor="middle" fill="#f97316" fontSize={10}>Apply u[0]</text>
      <text x={694} y={84} textAnchor="middle" fill="#f97316" fontSize={9}>Receding horizon</text>
      <path d="M 493 75 L 507 75" stroke="#f59e0b" strokeWidth={1.5} markerEnd="url(#arrmpc)" />
      <path d="M 628 75 L 642 75" stroke="#f59e0b" strokeWidth={1.5} markerEnd="url(#arrmpc)" />
      <text x={560} y={125} textAnchor="middle" fill="#f97316" fontSize={10}>✓ Handles actuator limits (δ_max, a_max)</text>
      <text x={560} y={140} textAnchor="middle" fill="#f97316" fontSize={10}>✓ Plans N steps ahead — anticipates</text>
      <text x={560} y={155} textAnchor="middle" fill="#f97316" fontSize={10}>✓ Comfort constraints: jerk limits</text>
      <text x={560} y={175} textAnchor="middle" fill="#f97316" fontSize={10}>✗ Computationally expensive at N&gt;50</text>
      <defs>
        <marker id="arrmpc" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#f59e0b" />
        </marker>
      </defs>
    </svg>
  );
}

export default function AV4() {
  return (
    <div style={S.page}>
      <Link to="/autonomous" style={S.back}>← Autonomous Vehicles</Link>
      <div style={S.badge}>MÓDULO 04</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Hierarquia de Planeamento — 4 Camadas</h2>
        <p style={S.p}>O sistema de planeamento de um veículo autónomo opera em quatro camadas hierárquicas com horizontes temporais e frequências muito diferentes. O planeamento de missão calcula a rota global de A a B usando o grafo da rede rodoviária — funciona a escala de minutos ou horas, pesando distância, tempo estimado, portagens e perfil de condução. O planeamento comportamental decide as maneuvers de alto nível em tempo real: deve fazer-se uma mudança de faixa? Ceder passagem? Parar? Opera a ~1 Hz com um horizonte de segundos.</p>
        <p style={S.p}>O planeamento de trajectória gera a trajetória cinemática específica que o veículo vai seguir nos próximos 5-10 segundos — suave, confortável, segura e respeitando as decisões comportamentais. Opera a ~10 Hz. Finalmente, o controlo fecha o loop: converte a trajetória desejada em comandos de ângulo de volante, acelerador e travão enviados aos actuadores a ~100 Hz. A hierarquia garante separação de preocupações: cada camada recebe objetivos de cima e envia constraints para baixo.</p>
        <div style={S.diagram}><PlanningHierarchyDiagram /></div>
        <div style={S.highlight}>A latência end-to-end — desde a percepção de um obstáculo até ao travão ativo — deve ser inferior a 100ms para sistemas L4. A hierarquia de planeamento contribui para esta latência: o controlo a 100Hz tem 10ms de ciclo, o planeamento de trajetória a 10Hz tem 100ms. Em situações de emergência, sistemas de travagem de emergência autónoma (AEB) operam em bypass da hierarquia a ~1ms.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Planeamento Global — A* e Variantes</h2>
        <p style={S.p}>O planeamento global encontra o caminho ótimo desde a posição atual até ao destino num grafo da rede rodoviária. O algoritmo de Dijkstra expande nós em ordem crescente de custo acumulado g(n) a partir da origem — garante optimalidade mas explora em todas as direções, sendo ineficiente em grafos grandes. O A* melhora isto adicionando uma heurística h(n) — tipicamente a distância euclidiana ao destino — que orienta a expansão na direção certa, tornando-o ~10x mais rápido que Dijkstra em redes rodoviárias típicas sem perder a garantia de optimalidade (desde que h(n) seja admissível, i.e., não sobrestime).</p>
        <p style={S.p}>O D* Lite estende o A* para replaneamento dinâmico: quando o mapa muda (estrada cortada, acidente), o D* Lite recalcula o caminho de forma incremental — reutilizando o trabalho anterior em vez de recalcular do zero. É essencial para condução em tempo real onde incidentes são frequentes. Os pesos das arestas no grafo incluem o tipo de via (autoestrada vs estrada secundária), limite de velocidade, tráfego em tempo real (via HERE/TomTom), custo de viragem e condições meteorológicas.</p>
        <div style={S.diagram}><GlobalPlanningDiagram /></div>
        <div style={S.note}>Em grafos rodoviários reais com milhões de nós (uma cidade inteira), A* puro ainda é lento. Técnicas como Contraction Hierarchies (CH) pré-processam o grafo, comprimindo atalhos que eliminam nós de baixa importância, atingindo latências de &lt;1ms para rotas nacionais — é o que o Google Maps e HERE usam internamente.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Planeamento de Comportamento — FSM e MPDM</h2>
        <p style={S.p}>O planeamento comportamental decide quais manobras o veículo deve executar em cada situação: seguir a faixa atual, iniciar uma ultrapassagem, ceder passagem numa interseção, ou imobilizar em emergência. A abordagem clássica usa uma Máquina de Estados Finita (FSM) com estados bem definidos (Follow Lane, Change Left, Change Right, Yield, Emergency Stop) e transições baseadas em condições verificáveis (gap seguro disponível, sinal de trânsito, distância a obstáculos).</p>
        <p style={S.p}>As FSMs são interpretáveis e verificáveis formalmente, mas escalam mal com a complexidade do cenário — para interseções sem semáforo com múltiplos agentes, o número de estados e transições explode. O MPDM (Multipolicy Decision Making) é uma alternativa probabilística: em vez de um conjunto fixo de estados, o sistema avalia N políticas candidatas (seguir faixa a várias velocidades, mudar de faixa, parar) simulando as consequências para todos os agentes presentes durante os próximos T segundos, e escolhe a política com menor risco e maior eficiência. A imitation learning (DAGGER) permite aprender comportamentos diretamente de condutores humanos, capturando nuances difíceis de especificar manualmente.</p>
        <div style={S.diagram}><BehavioralDiagram /></div>
        <div style={S.note}>A predição de agentes é inseparável do planeamento comportamental: para decidir se é seguro mudar de faixa, o sistema precisa de prever onde estará o carro ao lado nos próximos 5 segundos. Modelos como DESIRE, GRIP++ e VectorNet fazem esta predição multi-modal — um agente pode ter várias intenções possíveis com probabilidades associadas.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Planeamento de Trajectória — Frenet Frame</h2>
        <p style={S.p}>O planeamento de trajetória gera a curva cinemática exata que o veículo deve seguir, satisfazendo simultaneamente: a decisão comportamental (mudar para a faixa esquerda), as constraints de conforto (curvatura máxima, jerk máximo), as constraints de segurança (não colidir com obstáculos), e as capabilities do veículo (raio de viragem mínimo, aceleração/travagem máxima).</p>
        <p style={S.p}>O frame de Frenet simplifica este problema: em vez de coordenadas Cartesianas (x,y), usa-se a coordenada longitudinal s (distância ao longo da linha de centro da faixa) e a coordenada lateral d (offset perpendicular à faixa). Num problema de mudança de faixa, a trajetória em Frenet é simplesmente uma transição suave de d=0 (centro faixa atual) para d=3.5m (centro da faixa destino) ao longo de alguns segundos. O lattice planner amostra múltiplas trajetórias candidatas (variando o ponto final em s e d), avalia cada uma com a função de custo composta (conforto + segurança + eficiência), e escolhe a de menor custo. O RRT* é preferido para manobras mais complexas como estacionamento paralelo onde o espaço de estados tem múltiplos obstáculos.</p>
        <div style={S.diagram}><TrajectoryDiagram /></div>
        <div style={S.highlight}>As trajetórias são representadas como polinómios de grau 5 em s(t) e d(t) — escolha que garante continuidade até à derivada de terceira ordem (jerk), que é o que determina o conforto dos ocupantes. A otimização dos coeficientes polinomiais dado ponto inicial e final é analítica e muito rápida, permitindo amostrar centenas de candidatos em milissegundos.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Controlo — PID, Stanley e MPC</h2>
        <p style={S.p}>O controlo longitudinal (acelerador/travão) e lateral (volante) fecha o loop entre a trajetória planeada e o comportamento real do veículo. O controlador PID é o mais simples: calcula o erro entre a trajetória desejada e a posição atual, e aplica um sinal de controlo proporcional ao erro (P), à sua integral (I, para eliminar erro estacionário) e à sua derivada (D, para amortecimento). É reativo — não tem modelo do veículo e não antecipa o futuro.</p>
        <p style={S.p}>O controlador Stanley, desenvolvido pela equipa da Stanford para o DARPA Grand Challenge, é especialmente eficaz para controlo lateral: combina o heading error (diferença de ângulo entre o veículo e a trajetória) com o cross-track error (distância perpendicular à trajetória) de forma não-linear, e é estável numa gama larga de velocidades. Para velocidades mais altas e manobras mais agressivas, o MPC (Model Predictive Control) otimiza uma sequência de N ações de controlo futuras minimizando um custo que inclui conforto, segurança e eficiência, respeitando explicitamente os limites do actuador (ângulo máximo de volante, aceleração máxima). A janela deslizante — aplicar apenas o primeiro passo e replanejar — permite adaptar-se a perturbações imprevistas.</p>
        <div style={S.diagram}><MPCDiagram /></div>
        <div style={S.note}>O iLQR (iterative Linear-Quadratic Regulator) é o MPC de facto em muitos sistemas de alta performance: usa linearização iterativa das equações de movimento para resolver eficientemente problemas de controlo não-linear com horizonte de 50-100 passos. Waymo e Aurora usam variantes de iLQR no seu stack de controlo.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Hierarquia de Planeamento — 4 Camadas</strong> — planeamento estrutura-se em missão (destino), rota (grafo de estradas), comportamento (manobras: ultrapassagem, cedência) e trajectória (curva suave executável) — cada camada opera a diferente horizonte temporal e frequência.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Planeamento Global — A* e Variantes</strong> — A* encontra o caminho de menor custo num grafo de estradas com heurística admissível (distância euclidiana); Dijkstra é A* sem heurística; em grafos de cidades reais usa-se Contraction Hierarchies para queries &lt;1ms.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Planeamento de Comportamento — FSM e MPDM</strong> — Finite State Machines modelam manobras discretas (seguir faixa, mudar faixa, ceder); MPDM (Multipolicy Decision Making) amostra políticas de condução para outros agentes e escolhe a resposta mais segura — mais robusto em tráfego denso.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Planeamento de Trajectória — Frenet Frame</strong> — o frame de Frenet decompõe o movimento em longitudinal (s) e lateral (d) relativamente à linha central da faixa; optimizar splines cúbicos neste frame garante trajectórias suaves, confortáveis e dentro dos limites da faixa.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Controlo — PID, Stanley e MPC</strong> — PID controla velocidade longitudinal; Stanley controller minimiza erro lateral e de heading para steering; MPC optimiza uma sequência de controlos futuros com restrições explícitas de física e conforto — gold standard para controlo de trajectória.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
