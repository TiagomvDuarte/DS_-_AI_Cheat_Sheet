import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Autonomous';

const mod = modules[2];
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

function HDMapDiagram() {
  const layers = [
    { label: 'Layer 4: Dynamic Data', sub: 'Real-time: traffic, incidents, construction', color: '#f97316' },
    { label: 'Layer 3: Semantic Attributes', sub: 'Speed limits, lane direction, traffic rules', color: '#f97316' },
    { label: 'Layer 2: Lane-Level Markings', sub: 'Lane boundaries, arrows, crossings, curbs', color: '#f97316' },
    { label: 'Layer 1: Road Geometry', sub: '3D road surface, cm-precision coordinates', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 760 230" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>HD Map Layer Structure</text>
      {layers.map((l, i) => (
        <g key={i} transform={`translate(10,${30 + i * 46})`}>
          <rect x={0} y={0} width={740} height={40} rx={6} fill={`${l.color}15`} stroke={`${l.color}40`} strokeWidth={1.5} />
          <rect x={0} y={0} width={6} height={40} rx={3} fill={l.color} />
          <text x={18} y={16} fill={l.color} fontSize={12} fontWeight={700}>{l.label}</text>
          <text x={18} y={30} fill="#fb923c" fontSize={10}>{l.sub}</text>
          <text x={700} y={22} textAnchor="end" fill={l.color} fontSize={10} fontWeight={600}>L{4 - i}</text>
        </g>
      ))}
      <rect x={10} y={218} width={740} height={1} fill="var(--card-border)" />
      <text x={380} y={228} textAnchor="middle" fill="#f97316" fontSize={9.5}>HERE HD Live Map · TomTom RoadDNA · OpenDRIVE XML · REM: each car uploads map diffs → crowdsourced updates</text>
    </svg>
  );
}

function LOAMDiagram() {
  return (
    <svg viewBox="0 0 760 240" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>LOAM Pipeline — LiDAR Odometry and Mapping</text>
      {[
        { label: 'LiDAR Scan', sub: 'Raw point cloud\nper sweep', x: 10, color: '#f97316' },
        { label: 'Feature Extract', sub: 'Edge points (high c)\nPlanar points (low c)', x: 165, color: '#f97316' },
        { label: 'Scan Match', sub: 'Point-to-edge\nPoint-to-plane ICP', x: 320, color: '#f97316' },
        { label: 'Odometry', sub: '~10 Hz\nLow-latency pose', x: 475, color: '#f97316' },
        { label: 'Map Update', sub: '~1 Hz\nAccumulated map', x: 620, color: '#f97316' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={25} width={130} height={65} rx={8} fill={`${s.color}20`} stroke={s.color} strokeWidth={1.5} />
          <text x={s.x + 65} y={51} textAnchor="middle" fill="#fb923c" fontSize={11} fontWeight={700}>{s.label}</text>
          {s.sub.split('\n').map((line, li) => (
            <text key={li} x={s.x + 65} y={65 + li * 13} textAnchor="middle" fill="#fb923c" fontSize={9}>{line}</text>
          ))}
          {i < 4 && <path d={`M ${s.x + 134} 57 L ${s.x + 160} 57`} stroke={s.color} strokeWidth={1.5} markerEnd={`url(#arrloam${i})`} />}
          <defs>
            <marker id={`arrloam${i}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill={s.color} />
            </marker>
          </defs>
        </g>
      ))}
      {/* Loop closure — below pipeline */}
      <path d="M 75 90 Q 75 108 380 108 Q 685 108 685 90" fill="none" stroke="rgba(249,115,22,0.31)" strokeWidth={1.5} strokeDasharray="6 3" markerEnd="url(#arrlc)" />
      <text x={380} y={120} textAnchor="middle" fill="#f97316" fontSize={9}>Loop closure via ICP (LeGO-LOAM uses segmentation-based)</text>
      <defs>
        <marker id="arrlc" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
        </marker>
      </defs>
      <rect x={10} y={135} width={740} height={80} rx={8} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={200} y={156} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>LOAM</text>
      <text x={200} y={172} fill="#fb923c" fontSize={10} textAnchor="middle">Original Ji Zhang 2014</text>
      <text x={200} y={185} fill="#fb923c" fontSize={10} textAnchor="middle">CPU only, works outdoors</text>
      <text x={200} y={198} fill="#fb923c" fontSize={10} textAnchor="middle">~0.1m drift per 100m</text>
      <text x={450} y={156} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight={700}>LeGO-LOAM</text>
      <text x={450} y={172} fill="#fb923c" fontSize={10} textAnchor="middle">Ground segmentation first</text>
      <text x={450} y={185} fill="#fb923c" fontSize={10} textAnchor="middle">Lighter, embedded-friendly</text>
      <text x={450} y={198} fill="#fb923c" fontSize={10} textAnchor="middle">Velodyne VLP-16 capable</text>
      <text x={680} y={156} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>LIO-SAM</text>
      <text x={680} y={172} fill="#fb923c" fontSize={10} textAnchor="middle">IMU tightly coupled</text>
      <text x={680} y={185} fill="#fb923c" fontSize={10} textAnchor="middle">Factor graph backend</text>
      <text x={680} y={198} fill="#fb923c" fontSize={10} textAnchor="middle">GTSAM loop closure</text>
    </svg>
  );
}

function NDTDiagram() {
  return (
    <svg viewBox="0 0 760 210" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>NDT — Normal Distributions Transform</text>
      {/* Map voxels with Gaussians */}
      <rect x={10} y={28} width={340} height={175} rx={10} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={180} y={50} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>Map: Gaussians per Voxel</text>
      {[
        [40, 75, 0.8, 0.3, 25],
        [130, 90, 0.6, 0.4, 20],
        [220, 70, 0.9, 0.2, 30],
        [290, 95, 0.7, 0.5, 18],
        [60, 150, 0.5, 0.6, 22],
        [170, 140, 0.8, 0.3, 28],
        [260, 155, 0.6, 0.4, 20],
      ].map(([cx, cy, rx2, ry2, angle], i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy} rx={rx2 * 30} ry={ry2 * 20}
            fill={`${color}15`} stroke={color} strokeWidth={1}
            transform={`rotate(${angle}, ${cx}, ${cy})`} />
          <circle cx={cx} cy={cy} r={3} fill={color} />
        </g>
      ))}
      <text x={180} y={195} textAnchor="middle" fill="#f97316" fontSize={9}>μ, Σ stored per voxel — compact map representation</text>
      {/* Matching */}
      <rect x={360} y={28} width={390} height={175} rx={10} fill="rgba(249,115,22,0.06)" stroke="#f9731640" />
      <text x={555} y={50} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>NDT Matching Process</text>
      <text x={375} y={70} fill="#fb923c" fontSize={10}>1. Transform incoming scan by current pose estimate T</text>
      <text x={375} y={86} fill="#fb923c" fontSize={10}>2. For each transformed point p: find containing voxel</text>
      <text x={375} y={102} fill="#fb923c" fontSize={10}>3. Compute score: s = exp(-0.5 (p-μ)ᵀ Σ⁻¹ (p-μ))</text>
      <text x={375} y={118} fill="#fb923c" fontSize={10}>4. Maximize total score over all points via Newton</text>
      <text x={375} y={134} fill="#fb923c" fontSize={10}>5. Output: 6-DOF pose correction ΔT</text>
      <rect x={375} y={148} width={360} height={45} rx={6} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={555} y={168} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={600}>Advantages over ICP</text>
      <text x={555} y={183} textAnchor="middle" fill="#fb923c" fontSize={10}>More robust to outliers · Faster convergence · Autoware default</text>
    </svg>
  );
}

function EKFDiagram() {
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Extended Kalman Filter — GPS/IMU Fusion</text>
      {/* State vector */}
      <rect x={10} y={28} width={175} height={180} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={97} y={48} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>State Vector x</text>
      {['x, y, z', 'roll, pitch, yaw', 'vx, vy, vz', 'ax, ay, az', 'bgyro, bacc'].map((s, i) => (
        <g key={i} transform={`translate(20,${58 + i * 28})`}>
          <rect x={0} y={0} width={135} height={20} rx={3} fill={`${color}15`} stroke={`${color}30`} />
          <text x={68} y={14} textAnchor="middle" fill="#fb923c" fontSize={10}>{s}</text>
        </g>
      ))}
      <text x={97} y={200} textAnchor="middle" fill="#f97316" fontSize={9}>15-DOF state</text>
      {/* Predict step */}
      <rect x={205} y={28} width={175} height={90} rx={8} fill="#f9731620" stroke="#f97316" strokeWidth={1.5} />
      <text x={292} y={50} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>Predict (IMU)</text>
      <text x={215} y={68} fill="#fb923c" fontSize={10}>@ 200 Hz</text>
      <text x={215} y={82} fill="#fb923c" fontSize={10}>x̂ = f(x, u_imu)</text>
      <text x={215} y={96} fill="#fb923c" fontSize={10}>P̂ = F P Fᵀ + Q</text>
      <text x={215} y={110} fill="#fb923c" fontSize={10}>Uses acc + gyro</text>
      {/* Update step */}
      <rect x={205} y={135} width={175} height={72} rx={8} fill="#f59e0b20" stroke="#f59e0b" strokeWidth={1.5} />
      <text x={292} y={155} textAnchor="middle" fill="#f59e0b" fontSize={11} fontWeight={700}>Update (GPS)</text>
      <text x={215} y={172} fill="#fb923c" fontSize={10}>@ 10 Hz (RTK: 20 Hz)</text>
      <text x={215} y={186} fill="#fb923c" fontSize={10}>K = P̂ Hᵀ (H P̂ Hᵀ + R)⁻¹</text>
      <text x={215} y={199} fill="#fb923c" fontSize={10}>x = x̂ + K(z - Hx̂)</text>
      {/* Arrows */}
      <path d="M 190 115 L 200 115" stroke="#f97316" strokeWidth={1.5} markerEnd="url(#arr5)" />
      <path d="M 292 120 L 292 132" stroke="#f97316" strokeWidth={1.5} markerEnd="url(#arr5b)" />
      <defs>
        <marker id="arr5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#f97316" /></marker>
        <marker id="arr5b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#f97316" /></marker>
      </defs>
      {/* RTK GPS */}
      <rect x={400} y={28} width={350} height={180} rx={8} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={575} y={50} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight={700}>GPS Accuracy Types</text>
      {[
        ['Standard GPS', '3-5m CEP', '#fb923c'],
        ['SBAS/WAAS', '1-3m CEP', '#f97316'],
        ['DGPS', '0.5-1m', '#f97316'],
        ['RTK-GPS', '1-3cm!', '#f97316'],
        ['PPP', '10cm', '#f97316'],
      ].map(([type, acc, c], i) => (
        <g key={i} transform={`translate(410,${62 + i * 28})`}>
          <rect x={0} y={0} width={330} height={22} rx={3} fill={`${c}15`} stroke={`${c}30`} />
          <text x={8} y={15} fill={c} fontSize={11} fontWeight={600}>{type}</text>
          <text x={250} y={15} fill={c} fontSize={11} fontWeight={700}>{acc}</text>
        </g>
      ))}
      <text x={575} y={207} textAnchor="middle" fill="#f97316" fontSize={10}>Urban canyon: GPS multipath error up to 50m — IMU bridges gaps</text>
    </svg>
  );
}

function SLAMComparisonDiagram() {
  const rows = [
    { name: 'SLAM', buildMap: true, priorMap: false, precision: '10-50cm', weather: 'Medium', cost: 'Medium', example: 'Cartographer, LIO-SAM' },
    { name: 'Map-based Loc.', buildMap: false, priorMap: true, precision: '3-10cm', weather: 'Medium', cost: 'High (map)', example: 'NDT / MCL on HD Map' },
    { name: 'Map-less (ML)', buildMap: false, priorMap: false, precision: '20-100cm', weather: 'Lower', cost: 'Low', example: 'Tesla, MapLite, CamLoc' },
  ];
  return (
    <svg viewBox="0 0 760 200" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Localisation Paradigm Comparison</text>
      {['Approach', 'Builds Map', 'Prior Map', 'Precision', 'Weather', 'Cost', 'Example'].map((h, i) => (
        <text key={i} x={[10, 115, 195, 275, 360, 430, 505][i]} y={34} fill="#f97316" fontSize={10} fontWeight={700}>{h}</text>
      ))}
      <line x1={10} y1={38} x2={750} y2={38} stroke="var(--card-border)" strokeWidth={1} />
      {rows.map((r, ri) => {
        const y = 55 + ri * 46;
        const rowColor = ri === 0 ? '#f97316' : ri === 1 ? '#f97316' : '#f97316';
        return (
          <g key={ri}>
            <rect x={5} y={y - 10} width={750} height={38} rx={4} fill={`${rowColor}08`} />
            <text x={10} y={y + 8} fill={rowColor} fontSize={12} fontWeight={700}>{r.name}</text>
            <text x={115} y={y + 8} fill={r.buildMap ? '#f97316' : '#f97316'} fontSize={12} fontWeight={700}>{r.buildMap ? '✓' : '✗'}</text>
            <text x={195} y={y + 8} fill={r.priorMap ? '#f97316' : '#f97316'} fontSize={12} fontWeight={700}>{r.priorMap ? '✓' : '✗'}</text>
            <text x={275} y={y + 8} fill="#fb923c" fontSize={10}>{r.precision}</text>
            <text x={360} y={y + 8} fill="#fb923c" fontSize={10}>{r.weather}</text>
            <text x={430} y={y + 8} fill="#fb923c" fontSize={10}>{r.cost}</text>
            <text x={505} y={y + 8} fill="#fb923c" fontSize={9}>{r.example}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function AV3() {
  return (
    <div style={S.page}>
      <Link to="/autonomous" style={S.back}>← Autonomous Vehicles</Link>
      <div style={S.badge}>MÓDULO 03</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. HD Maps — Estrutura e Criação</h2>
        <p style={S.p}>Os HD Maps (High Definition Maps) são representações do ambiente rodoviário com precisão centimétrica, muito além dos mapas de navegação convencionais que têm erro de 2-5 metros. Um HD Map típico contém quatro camadas: a geometria 3D da estrada com precisão de ±5cm; as marcações de faixa (linhas, setas, passadeiras, stop lines); os atributos semânticos (limites de velocidade, tipo de faixa, prioridades); e dados dinâmicos atualizados em tempo real (obras, incidentes, condições de tráfego).</p>
        <p style={S.p}>O formato OpenDRIVE XML é o padrão aberto dominante: representa a estrada como curvas de referência paramétricas (s-coordinate along the road) com offsets laterais para cada faixa, suportando geometria complexa como rotundas e interseções em forma de trevo. O HERE HD Live Map e o TomTom RoadDNA são os dois principais serviços comerciais. O conceito de Road Experience Management (REM) da Mobileye é particularmente inovador: cada carro na frota usa as câmeras para gerar "map diffs" — atualizações incrementais ao mapa — que são enviadas para a cloud e integradas em tempo quase real, criando um sistema de mapeamento crowdsourced que cobre dezenas de milhões de quilómetros diariamente.</p>
        <div style={S.diagram}><HDMapDiagram /></div>
        <div style={S.highlight}>A dependência de HD Maps é um ponto crítico de debate na indústria. Waymo e muitos outros sistemas L4 dependem de HD Maps pré-construídos da área operacional — o sistema simplesmente não funciona fora do mapa. A Tesla argumenta que sistemas robustos devem operar sem mapa (map-less) para escalar globalmente. A realidade é que os HD Maps oferecem vantagens de localização e planeamento difíceis de replicar com câmeras apenas.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. LiDAR SLAM — LOAM e LeGO-LOAM</h2>
        <p style={S.p}>O SLAM (Simultaneous Localization and Mapping) resolve o problema de um robot estimar simultaneamente a sua posição e construir um mapa do ambiente — sem informação prévia. O LOAM (LiDAR Odometry and Mapping, Ji Zhang 2014) é o algoritmo seminal: extrai dois tipos de features da nuvem de pontos — pontos de aresta (alta curvatura, como cantos de edifícios) e pontos planares (baixa curvatura, como paredes e chão) — e usa-os para registar frames consecutivas com precisão superior ao ICP (Iterative Closest Point) convencional.</p>
        <p style={S.p}>A split em dois módulos de frequência diferente é crucial: a odometria LiDAR corre a ~10 Hz para estimar o movimento entre frames consecutivas, corrigindo a distorção de movimento que ocorre durante os 100ms de um scan completo; o mapeamento corre a ~1 Hz para registar o scan contra o mapa acumulado global com mais iterações e maior precisão. O LeGO-LOAM adiciona uma etapa de segmentação prévia (separa pontos de solo de estruturas) que reduz drasticamente o número de pontos a processar, tornando o algoritmo viável em hardware embarcado com um LiDAR de 16 canais.</p>
        <div style={S.diagram}><LOAMDiagram /></div>
        <div style={S.note}>O closure de loop é o mecanismo que corrija o drift acumulado: quando o veículo regressa a uma zona já mapeada, o sistema reconhece a área, calcula o erro de pose, e propaga a correção para trás no grafo de poses usando otimização de grafos (GTSAM ou g2o). Sem loop closure, o erro cresce indefinidamente com a distância percorrida.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Localização por NDT — Normal Distributions Transform</h2>
        <p style={S.p}>Enquanto o SLAM constrói o mapa em simultâneo, a localização em HD Map assume que o mapa existe e pretende determinar a posição do veículo dentro desse mapa com precisão centimétrica. O NDT (Normal Distributions Transform) representa o mapa pré-construído de forma compacta: cada voxel do espaço contém não os pontos raw, mas sim a distribuição normal (Gaussiana) dos pontos que caem nesse voxel — definida pela sua média μ e matriz de covariância Σ.</p>
        <p style={S.p}>Para localizar o veículo, o scan LiDAR atual é transformado pela pose estimada, e para cada ponto transformado é calculada a probabilidade de pertencer à distribuição do voxel correspondente do mapa. O algoritmo otimiza a pose que maximiza a soma dessas probabilidades usando o método de Newton. O NDT é mais robusto ao ruído e outliers do que o ICP (que encontra correspondências ponto-a-ponto), e converge mais rapidamente porque a superfície de custo é mais suave. A implementação NDT do Autoware é o standard de facto em sistemas L4 open-source.</p>
        <div style={S.diagram}><NDTDiagram /></div>
        <div style={S.highlight}>A localização NDT tipicamente atinge precisão de 3-10 cm em ambientes estruturados como autoestradas e centros urbanos com edifícios altos. Degrada em ambientes poucos estruturados (estrada rural sem features distintivas) ou quando o mapa está desatualizado (construção, neve cobrindo marcações). É por isso que se combina sempre com GPS/IMU como fallback.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. GPS/IMU Fusion — Extended Kalman Filter</h2>
        <p style={S.p}>O GPS sozinho tem limitações fundamentais para condução autónoma: latência de 100-500ms, frequência de apenas 1-10 Hz, e erros de 1-5 metros em condições normais. O IMU (Inertial Measurement Unit) mede aceleração linear e velocidade angular a 100-200 Hz com latência quase nula, mas o erro integra ao longo do tempo (drift). A fusão de GPS e IMU através de um Extended Kalman Filter combina o melhor dos dois mundos.</p>
        <p style={S.p}>O EKF mantém um vetor de estado com 15 dimensões: posição (x,y,z), orientação (roll,pitch,yaw), velocidade linear (vx,vy,vz), aceleração (ax,ay,az) e bias do giroscópio e acelerómetro. O passo de predição usa as medições do IMU a 200 Hz para propagar o estado entre medições GPS, usando as equações de movimento cinemático não-lineares. O passo de atualização acontece quando chega um fix GPS (10 Hz) ou RTK-GPS (20 Hz): calcula o ganho de Kalman ótimo e corrige o estado para minimizar o erro estimado.</p>
        <div style={S.diagram}><EKFDiagram /></div>
        <div style={S.note}>O RTK-GPS (Real-Time Kinematic) usa uma estação base com posição conhecida para corrigir o erro de propagação atmosférica em tempo real, atingindo precisão de 1-3 cm. Requer linha de visão para a estação base (raio de ~10km) e inicialização de 30-60s para resolver as ambiguidades de fase. É o sensor de referência em testes de validação de sistemas autónomos.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. SLAM vs Map-based vs Map-less — Trade-offs</h2>
        <p style={S.p}>Os três paradigmas de localização representam trade-offs fundamentais entre dependência de infraestrutura, precisão e escalabilidade. O SLAM online (LIO-SAM, Cartographer) constrói o mapa em tempo real a partir dos sensores do veículo — é completamente autónomo e funciona em qualquer ambiente sem preparação prévia, mas a precisão degrada ao longo do tempo sem loop closure e é computacionalmente exigente. Apropriado para robótica de exploração e áreas não mapeadas.</p>
        <p style={S.p}>A localização baseada em mapa (NDT/MCL sobre HD Map) oferece a maior precisão absoluta — 3-10cm — porque compara contra uma referência de alta qualidade construída com hardware de mapeamento dedicado. É o standard para sistemas L4 de robotaxi. A dependência do mapa é o principal trade-off: requer mapeamento prévio da área, manutenção contínua do mapa (construção, alterações sazonais), e a frota simplesmente não opera fora da área mapeada.</p>
        <p style={S.p}>A localização map-less (câmera + ML, sem HD Map prévio) é a aposta da Tesla e players que visam escala global. Usa features visuais e modelos de self-localization treinados, com precisão inferior (20-100cm) mas sem dependência de infraestrutura. O MapLite (MIT) demonstrou localização em estradas rurais sem HD Map usando apenas OpenStreetMap e features LiDAR. A evolução dos transformers visuais está a fechar rapidamente o gap de precisão.</p>
        <div style={S.diagram}><SLAMComparisonDiagram /></div>
        <div style={S.highlight}>A escolha entre paradigmas define a estratégia de deployment: Waymo opera em geo-fences mapeadas com precisão de 5cm; a Tesla tenta escalar globalmente sem dependência de mapas. Ambas as abordagens têm justificação — a questão é se a escala pode compensar a menor precisão unitária do approach map-less.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>HD Maps — Estrutura e Criação</strong> — HD Maps contêm geometria centimétrica de faixas, sinais e infra-estrutura estática em formato vetorial (OpenDRIVE, Lanelet2); criação custa $10K–$50K/km e requer actualizações frequentes — bottleneck de escalabilidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>LiDAR SLAM — LOAM e LeGO-LOAM</strong> — LOAM extrai features de edges e planar points de point clouds para estimativa de odometria; LeGO-LOAM é uma versão leve para robôs de terreno com ground segmentation — ambos são referências em outdoor LiDAR SLAM.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Localização por NDT — Normal Distributions Transform</strong> — NDT representa o mapa como uma grelha de distribuições gaussianas e optimiza a pose que maximiza a verosimilhança da scan corrente; usado em produção pela Toyota e Autoware por ser mais robusto que ICP em ambientes dinâmicos.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>GPS/IMU Fusion — Extended Kalman Filter</strong> — EKF funde medições ruidosas de GPS (±3m) com IMU de alta frequência (200Hz) para localização suave; RTK-GPS reduz o erro para ±2cm em zonas com boa cobertura — mas falha em túneis e urbano denso.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>SLAM vs Map-based vs Map-less — Trade-offs</strong> — SLAM constrói e localiza simultaneamente mas deriva; map-based localização (Waymo) é preciso mas requer HD maps actualizados; map-less (Tesla) generaliza melhor mas requer modelos neurais mais potentes para segurança equivalente.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
