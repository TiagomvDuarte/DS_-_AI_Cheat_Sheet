import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Autonomous';

const mod = modules[0];
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

function SAELevelsDiagram() {
  const levels = [
    { num: 0, label: 'No Automation', example: 'Standard ICE car — driver does everything', barColor: '#f97316' },
    { num: 1, label: 'Driver Assistance', example: 'Adaptive Cruise Control / Lane Keep Assist', barColor: '#f97316' },
    { num: 2, label: 'Partial Automation', example: 'Tesla Autopilot — hands-on required', barColor: '#f97316' },
    { num: 3, label: 'Conditional Automation', example: 'Mercedes DRIVE PILOT — eyes-off <60km/h', barColor: '#f97316' },
    { num: 4, label: 'High Automation', example: 'Waymo One — driverless in geo-fence', barColor: '#f97316' },
    { num: 5, label: 'Full Automation', example: 'No steering wheel — any condition anywhere', barColor: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 760 300" style={{ width: '100%' }}>
      <text x={10} y={18} fill="#f97316" fontSize={11} fontWeight={600}>LEVEL</text>
      <text x={60} y={18} fill="#f97316" fontSize={11} fontWeight={600}>LABEL</text>
      <text x={260} y={18} fill="#f97316" fontSize={11} fontWeight={600}>EXAMPLE / NOTES</text>
      <text x={620} y={18} fill="#f97316" fontSize={11} fontWeight={600}>WHO MONITORS</text>
      {levels.map((l, i) => (
        <g key={l.num} transform={`translate(0,${30 + i * 42})`}>
          <rect x={0} y={0} width={38} height={34} rx={6} fill={l.barColor} />
          <text x={19} y={22} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={800}>{l.num}</text>
          <text x={55} y={14} fill="#fb923c" fontSize={12} fontWeight={700}>{l.label}</text>
          <text x={55} y={28} fill="#fb923c" fontSize={10}>{l.example}</text>
          <rect x={610} y={4} width={140} height={22} rx={4} fill={i < 3 ? '#f9731620' : 'rgba(249,115,22,0.12)'} stroke={i < 3 ? '#f9731640' : 'rgba(249,115,22,0.25)'} />
          <text x={680} y={19} textAnchor="middle" fill={i < 3 ? '#f97316' : '#f97316'} fontSize={10} fontWeight={600}>{i < 3 ? 'Human' : 'System'}</text>
        </g>
      ))}
      <line x1={600} y1={25} x2={600} y2={288} stroke="var(--card-border)" strokeWidth={1} strokeDasharray="4 3" />
      <text x={390} y={292} textAnchor="middle" fill="#f97316" fontSize={10}>ODD = Operational Design Domain — set of conditions where system can operate autonomously</text>
    </svg>
  );
}

function LiDARDiagram() {
  return (
    <svg viewBox="0 0 760 230" style={{ width: '100%' }}>
      <rect x={5} y={5} width={360} height={220} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={185} y={30} textAnchor="middle" fill="#f97316" fontSize={14} fontWeight={700}>Mechanical LiDAR (Velodyne HDL-64E)</text>
      <circle cx={185} cy={130} r={78} fill="none" stroke="#f9731615" strokeWidth={12} />
      <circle cx={185} cy={130} r={55} fill="none" stroke="#f9731625" strokeWidth={8} />
      <circle cx={185} cy={130} r={28} fill="#f9731630" stroke="#f97316" strokeWidth={2} />
      <text x={185} y={126} textAnchor="middle" fill="#f97316" fontSize={10} fontWeight={700}>360°</text>
      <text x={185} y={138} textAnchor="middle" fill="#f97316" fontSize={9}>64 beams</text>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
        <line key={a}
          x1={185 + 28 * Math.cos(a * Math.PI / 180)}
          y1={130 + 28 * Math.sin(a * Math.PI / 180)}
          x2={185 + 78 * Math.cos(a * Math.PI / 180)}
          y2={130 + 78 * Math.sin(a * Math.PI / 180)}
          stroke="#f97316" strokeWidth={1.2} opacity={0.5} />
      ))}
      <text x={30} y={205} fill="#f97316" fontSize={10}>100m range · 80MB/s · ~$4,000 OEM · moving parts</text>

      <rect x={390} y={5} width={365} height={220} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={572} y={30} textAnchor="middle" fill="#f97316" fontSize={14} fontWeight={700}>Solid-State LiDAR (Luminar Iris)</text>
      <path d="M 572 185 L 450 105 A 145 145 0 0 1 694 105 Z" fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth={1.5} />
      <circle cx={572} cy={185} r={14} fill="#f97316" />
      <text x={572} y={190} textAnchor="middle" fill="#fff" fontSize={9} fontWeight={700}>Sensor</text>
      <text x={500} y={70} fill="#f97316" fontSize={11} fontWeight={600}>~120° FOV</text>
      {[...Array(40)].map((_, i) => {
        const px = 455 + (i % 8) * 30 + Math.sin(i) * 5;
        const py = 78 + Math.floor(i / 8) * 14 + Math.cos(i * 2) * 3;
        return <circle key={i} cx={px} cy={py} r={2} fill="#f97316" opacity={0.7} />;
      })}
      <text x={405} y={215} fill="#f97316" fontSize={10}>250m range · no moving parts · ~$500 · Volvo EX90, Toyota</text>
    </svg>
  );
}

function CameraRadarDiagram() {
  const cameras = [
    { x: 388, y: 55, label: 'Front Narrow 250m' },
    { x: 500, y: 88, label: 'Front-Right 80m' },
    { x: 530, y: 155, label: 'Right-Rear 80m' },
    { x: 470, y: 215, label: 'Rear 80m' },
    { x: 305, y: 215, label: 'Rear-Left 80m' },
    { x: 245, y: 155, label: 'Left-Rear 80m' },
    { x: 275, y: 88, label: 'Front-Left 80m' },
    { x: 345, y: 55, label: 'Front Wide 60m' },
  ];
  return (
    <svg viewBox="0 0 760 270" style={{ width: '100%' }}>
      <rect x={295} y={85} width={185} height={100} rx={14} fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth={2} />
      <text x={387} y={140} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>AV Platform</text>
      {cameras.map((c, i) => (
        <g key={i}>
          <line x1={387} y1={135} x2={c.x} y2={c.y} stroke="#f9731620" strokeWidth={1} />
          <circle cx={c.x} cy={c.y} r={11} fill="#f97316" stroke="#fff" strokeWidth={1.5} />
          <text x={c.x} y={c.y + 4} textAnchor="middle" fill="#fff" fontSize={9} fontWeight={700}>{i + 1}</text>
        </g>
      ))}
      <text x={387} y={245} textAnchor="middle" fill="#fb923c" fontSize={11} fontWeight={600}>8 cameras — 360° surround coverage</text>
      <rect x={5} y={5} width={210} height={75} rx={8} fill="rgba(249,115,22,0.06)" stroke="#f59e0b40" />
      <text x={15} y={24} fill="#f59e0b" fontSize={12} fontWeight={700}>77 GHz Radar</text>
      <text x={15} y={40} fill="#fb923c" fontSize={10}>Doppler: measures radial velocity</text>
      <text x={15} y={54} fill="#fb923c" fontSize={10}>Works in rain/fog/snow/night</text>
      <text x={15} y={68} fill="#fb923c" fontSize={10}>4D imaging radar adds elevation</text>
      <rect x={545} y={5} width={210} height={75} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={555} y={24} fill="#f97316" fontSize={12} fontWeight={700}>Stereo Camera Depth</text>
      <text x={555} y={40} fill="#fb923c" fontSize={10}>Baseline 20cm · triangulation</text>
      <text x={555} y={54} fill="#fb923c" fontSize={10}>Depth up to ~50m accurate</text>
      <text x={555} y={68} fill="#fb923c" fontSize={10}>Rich semantics: signs, signals</text>
      <rect x={5} y={195} width={210} height={65} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={15} y={214} fill="#f97316" fontSize={12} fontWeight={700}>Ultrasonic Sensors</text>
      <text x={15} y={230} fill="#fb923c" fontSize={10}>12× around vehicle · 8m range</text>
      <text x={15} y={244} fill="#fb923c" fontSize={10}>40-70 kHz sonar · parking/AEB</text>
      <text x={15} y={258} fill="#fb923c" fontSize={10}>~$50/sensor · in all modern cars</text>
    </svg>
  );
}

function FusionDiagram() {
  const sensors = [
    { name: 'LiDAR', range: 90, weather: 20, semantics: 15, cost: 10, color: '#f97316' },
    { name: 'Camera', range: 35, weather: 30, semantics: 95, cost: 85, color: '#f97316' },
    { name: 'Radar', range: 80, weather: 95, semantics: 8, cost: 90, color: '#f97316' },
    { name: 'Ultrasonic', range: 10, weather: 80, semantics: 5, cost: 98, color: '#f97316' },
  ];
  const attrs = ['Range Score', 'Weather Robust', 'Semantics', 'Low Cost'];
  return (
    <svg viewBox="0 0 760 250" style={{ width: '100%' }}>
      {sensors.map((s, si) => {
        const x = 15 + si * 186;
        const vals = [s.range, s.weather, s.semantics, s.cost];
        return (
          <g key={s.name}>
            <text x={x + 82} y={20} textAnchor="middle" fill={s.color} fontSize={13} fontWeight={700}>{s.name}</text>
            {attrs.map((a, ai) => (
              <g key={a} transform={`translate(${x},${32 + ai * 50})`}>
                <text x={0} y={12} fill="#fb923c" fontSize={10}>{a}</text>
                <rect x={0} y={16} width={164} height={18} rx={4} fill="var(--bg-secondary)" />
                <rect x={0} y={16} width={vals[ai] * 1.64} height={18} rx={4} fill={s.color} opacity={0.8} />
                <text x={vals[ai] * 1.64 + 4} y={29} fill="#fb923c" fontSize={10} fontWeight={600}>{vals[ai]}%</text>
              </g>
            ))}
          </g>
        );
      })}
      <text x={380} y={242} textAnchor="middle" fill="#f97316" fontSize={11}>Fusion strategy: Early (raw) · Mid (feature-level, BEVFusion) · Late (decision-level)</text>
    </svg>
  );
}

function StacksDiagram() {
  return (
    <svg viewBox="0 0 760 210" style={{ width: '100%' }}>
      <rect x={5} y={5} width={235} height={200} rx={10} fill="rgba(249,115,22,0.06)" stroke="#f9731640" />
      <text x={122} y={28} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Waymo Driver</text>
      {[
        ['29× cameras', '#f97316'],
        ['6× LiDAR (custom)', '#f97316'],
        ['5× radar', '#f97316'],
        ['Jaguar I-PACE platform', '#f97316'],
        ['Custom Waymo chip', '#f97316'],
      ].map(([label, c], i) => (
        <g key={i} transform={`translate(15,${42 + i * 30})`}>
          <circle cx={8} cy={9} r={6} fill={c} />
          <text x={22} y={14} fill="#fb923c" fontSize={12}>{label}</text>
        </g>
      ))}
      <rect x={255} y={5} width={245} height={200} rx={10} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={377} y={28} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Tesla FSD (HW4)</text>
      {[
        ['8× cameras only (no LiDAR)', '#f97316'],
        ['FSD Chip: 2× 72 TOPS', '#f97316'],
        ['End-to-end neural net', '#f97316'],
        ['Vision-only perception', '#f97316'],
        ['Shadow mode fleet data', '#f97316'],
      ].map(([label, c], i) => (
        <g key={i} transform={`translate(265,${42 + i * 30})`}>
          <circle cx={8} cy={9} r={6} fill={c} />
          <text x={22} y={14} fill="#fb923c" fontSize={12}>{label}</text>
        </g>
      ))}
      <rect x={515} y={5} width={240} height={200} rx={10} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={635} y={28} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Mobileye EyeQ6</text>
      {[
        ['11× cameras', '#f97316'],
        ['3× radar', '#f97316'],
        ['3× LiDAR', '#f97316'],
        ['EyeQ6 chip triplet', '#f97316'],
        ['RSS formal safety model', '#f97316'],
      ].map(([label, c], i) => (
        <g key={i} transform={`translate(525,${42 + i * 30})`}>
          <circle cx={8} cy={9} r={6} fill={c} />
          <text x={22} y={14} fill="#fb923c" fontSize={12}>{label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function AV1() {
  return (
    <div style={S.page}>
      <Link to="/autonomous" style={S.back}>← Autonomous Vehicles</Link>
      <div style={S.badge}>MÓDULO 01</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. SAE J3016 Levels de Automação</h2>
        <p style={S.p}>A norma SAE J3016 define seis níveis de automação de condução, do nível 0 (sem automação) ao nível 5 (automação total). A distinção crítica situa-se entre os níveis 2 e 3: abaixo do nível 3, o humano é responsável por monitorizar o ambiente de condução em todo o momento; acima do nível 3, o sistema assume essa responsabilidade dentro do seu Operational Design Domain (ODD).</p>
        <p style={S.p}>O ODD define as condições em que o sistema pode operar autonomamente — tipos de estrada, condições meteorológicas, velocidade máxima, hora do dia e localização geográfica. O Mercedes-Benz DRIVE PILOT é o primeiro sistema L3 certificado para uso comercial em autoestrada na Alemanha, abaixo de 60 km/h em condições de tráfego congestionado. O Waymo One opera em modo L4 dentro de uma geo-fence definida em Phoenix, Arizona, eliminando completamente a necessidade de intervenção humana dentro dessa zona.</p>
        <div style={S.diagram}><SAELevelsDiagram /></div>
        <div style={S.highlight}>A transição de L2 para L3 é legalmente transformadora: em L3, o fabricante assume responsabilidade civil durante a operação autónoma. A Alemanha alterou a StVG em 2021 para permitir esta operação, sendo o primeiro país a fazê-lo. Nos EUA, cada estado legisla de forma independente, criando um mosaico regulatório complexo.</div>
        <div style={S.note}>O conceito de "minimum risk condition" é central em L3+: quando o sistema atinge os seus limites de ODD, deve executar uma manobra de paragem de risco mínimo — travar suavemente até parar — em vez de simplesmente desligar e devolver o controlo imediatamente ao condutor.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. LiDAR — Mecânico vs Solid-State</h2>
        <p style={S.p}>O LiDAR (Light Detection and Ranging) mede distâncias emitindo pulsos laser infravermelhos e calculando o tempo de voo (ToF). Cada pulso retorna uma medição de distância com precisão centimétrica; a rotação contínua de um LiDAR mecânico como o Velodyne HDL-64E gera uma nuvem de pontos 3D completa com 64 feixes a 360°, alcance de 100 metros e uma taxa de dados de 80 MB/s. A resolução angular é de 0,08° na horizontal e 0,4° na vertical.</p>
        <p style={S.p}>O LiDAR solid-state substitui o mecanismo de rotação por arrays de emissores VCSEL com steering electrónico por MEMS ou phased arrays, eliminando peças móveis e reduzindo drasticamente o custo e aumentando a fiabilidade. O Luminar Iris usa um único feixe com scan MEMS, atingindo 250m de alcance. O Hesai AT128 solid-state é já usado no Li Auto L9 em série. O trade-off principal é um campo de visão limitado a ~120°, exigindo múltiplas unidades para cobrir 360°.</p>
        <div style={S.diagram}><LiDARDiagram /></div>
        <div style={S.note}>O custo do Velodyne HDL-64E original era de ~$75,000 em 2007. Em 2024, LiDARs solid-state de performance comparável custam menos de $500 em volumes de produção automóvel. Esta queda de 150x no custo foi o catalisador para a integração OEM massiva nos próximos anos.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Câmeras e Radar — Percepção Complementar</h2>
        <div style={S.diagram}><CameraRadarDiagram /></div>
        <p style={S.p}>As câmeras são o sensor com maior riqueza semântica: reconhecem sinais de trânsito, marcações de faixa, semáforos e comportamentos de peões com detalhe que nenhum outro sensor consegue igualar. Um sistema surround como o Tesla HW4 usa 8 câmeras com campos de visão sobrepostos, cobrindo 360° à volta do veículo. A câmera frontal de longo alcance tem um FOV estreito (~25°) para detetar objetos a 250m. A câmera frontal larga tem ~150° FOV para interseções e peões próximos.</p>
        <p style={S.p}>O radar de 77 GHz funciona através do efeito Doppler: a mudança de frequência do sinal refletido permite medir diretamente a velocidade radial de objetos a ±0.1 km/h — mesmo em chuva intensa, nevoeiro ou neve onde câmeras e LiDAR degradam severamente. A resolução espacial é baixa (1-2 metros), mas a medição de velocidade é extremamente precisa. O radar de imagem 4D (Arbe, Continental) adiciona a dimensão de elevação, aproximando-se da resolução do LiDAR mas com robustez meteorológica total.</p>
        <div style={S.highlight}>Os sensores ultrassónicos (até 12 por veículo) operam por sonar: emitem pulsos sonoros de 40-70 kHz e medem o eco de retorno. Com alcance máximo de 8m, são ideais para manobras de estacionamento e deteção de obstáculos próximos em velocidades baixas. Presentes em praticamente todos os veículos modernos por cerca de €50 por sensor.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Fusão Sensorial — Combinando Modalidades</h2>
        <p style={S.p}>Nenhum sensor individualmente satisfaz todos os requisitos de um sistema autónomo. O LiDAR oferece geometria 3D precisa mas não distingue uma placa de stop de uma placa qualquer. A câmera distingue sinais mas falha em condições de baixa visibilidade. O radar penetra qualquer condição meteorológica mas não resolve formas com detalhe. A fusão sensorial combina as forças de cada modalidade para criar uma representação robusta e redundante do ambiente.</p>
        <p style={S.p}>Existem três paradigmas de fusão. A fusão precoce (early fusion) combina dados brutos de múltiplos sensores antes de qualquer processamento — maximiza a informação partilhada mas exige sincronização temporal precisa e é computacionalmente intensiva. A fusão intermédia (feature-level fusion) combina representações internas de redes neurais — é a abordagem dominante em sistemas modernos como o BEVFusion do MIT. A fusão tardia (late fusion) combina as deteções finais de cada sensor independente — mais simples e modular mas perde correlações entre modalidades.</p>
        <div style={S.diagram}><FusionDiagram /></div>
        <div style={S.note}>O Waymo usa fusão intermédia em BEV (Bird's Eye View): os dados de LiDAR e câmera são transformados para uma representação common top-down antes de serem fundidos. Isto simplifica o problema geométrico e melhora a deteção de objetos ocluídos que um único sensor perderia.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Stacks de Referência — Waymo, Tesla, Mobileye</h2>
        <p style={S.p}>Os três principais paradigmas de stacks sensoriais refletem filosofias distintas sobre como alcançar a segurança autónoma. O Waymo Driver aposta na redundância máxima — 29 câmeras, 6 LiDAR e 5 radar num Jaguar I-PACE customizado — para atingir o nível de fiabilidade necessário para operar sem condutor em modo L4. O custo de hardware por veículo ronda os $150,000, justificado pelo modelo de robotaxi onde o custo é amortizado por milhares de viagens.</p>
        <p style={S.p}>A Tesla aposta no oposto: 8 câmeras e nenhum LiDAR. O argumento central é que humanos conduzem apenas com visão (câmeras) e um processador neural suficientemente poderoso deve replicar esta capacidade. O FSD Computer Hardware 4 tem dois chips com 72 TOPS cada, processando as 8 câmeras em tempo real com uma rede end-to-end. A frota de mais de 5 milhões de Teslas actua como motor de dados de treino via shadow mode — cada carro corre o software FSD em paralelo com o condutor humano, recolhendo intervenções para criar datasets de treino.</p>
        <p style={S.p}>O Mobileye adota uma abordagem de sistema multi-modal completo com o EyeQ6: 11 câmeras, 3 radar e 3 LiDAR, combinados com o modelo matemático RSS (Responsibility-Sensitive Safety) que fornece garantias formais de segurança verificáveis. A sua posição como fornecedor Tier-1 permite integração em múltiplos OEMs incluindo BMW, Volkswagen, Nio e Zeekr.</p>
        <div style={S.diagram}><StacksDiagram /></div>
        <div style={S.highlight}>A disputa "câmeras apenas" vs "multi-sensor" é uma das grandes questões em aberto da indústria. Sistemas camera-only são escaláveis e baratos; sistemas multi-sensor são mais robustos mas custam muito mais. A Comma.ai e outros players apostam em camera+radar como compromisso intermédio. A resposta final dependerá dos resultados de segurança em escala.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>SAE J3016 Levels de Automação</strong> — o standard SAE J3016 define 6 níveis (L0–L5) de automação; L2 (Tesla Autopilot) requer supervisão humana; L4 é autónomo em domínio definido (Waymo); L5 (autónomo universal) ainda não existe comercialmente.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>LiDAR — Mecânico vs Solid-State</strong> — LiDAR mecânico (Velodyne HDL-64E) gira para cobertura 360°; solid-state (Luminar, Ouster REV7) sem partes móveis é mais barato e robusto; ambos geram point clouds 3D para detecção de obstáculos e localização.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Câmeras e Radar — Percepção Complementar</strong> — câmeras fornecem informação rica de textura e cor (essencial para semáforos e sinais) mas falham com oclusão e luz intensa; radar detecta velocidade e funciona em chuva e neblina — a fusão dos dois é sinérgica.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Fusão Sensorial — Combinando Modalidades</strong> — fusão early (dados brutos), mid (features) ou late (decisões) combina LiDAR, câmera e radar; fusão mid-level com transformers (BEVFusion) é o estado da arte, permitindo que cada modalidade complemente as fraquezas das outras.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Stacks de Referência — Waymo, Tesla, Mobileye</strong> — Waymo usa LiDAR+câmera+radar com HD maps; Tesla usa câmera-only (vision-only) com pseudo-LiDAR neural; Mobileye usa câmeras estéreo com EyeQ chips — filosofias opostas com implicações de custo, safety e escalabilidade.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
