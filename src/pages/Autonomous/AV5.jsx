import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Autonomous';

const mod = modules[4];
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

function ISO26262Diagram() {
  const asils = [
    { level: 'QM', label: 'Quality Managed', example: 'Radio, seat adjustment', color: '#fb923c', prob: 0.05 },
    { level: 'A', label: 'ASIL A', example: 'Window motor, horn', color: '#f97316', prob: 0.2 },
    { level: 'B', label: 'ASIL B', example: 'ABS, airbag deploy', color: '#f97316', prob: 0.4 },
    { level: 'C', label: 'ASIL C', example: 'EPS power steering', color: '#f97316', prob: 0.65 },
    { level: 'D', label: 'ASIL D', example: 'AV steering, AEB', color: '#f97316', prob: 1.0 },
  ];
  return (
    <svg viewBox="0 0 760 230" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>ISO 26262 ASIL Levels — Automotive Safety Integrity</text>
      {asils.map((a, i) => (
        <g key={i} transform={`translate(0,${28 + i * 38})`}>
          <rect x={10} y={2} width={50} height={30} rx={5} fill={`${a.color}30`} stroke={a.color} strokeWidth={2} />
          <text x={35} y={21} textAnchor="middle" fill={a.color} fontSize={12} fontWeight={800}>{a.level}</text>
          <rect x={70} y={2} width={165} height={30} rx={4} fill={`${a.color}10`} />
          <text x={80} y={21} fill={a.color} fontSize={11} fontWeight={700}>{a.label}</text>
          <rect x={245} y={8} width={380} height={18} rx={3} fill={`${a.color}10`} />
          <rect x={245} y={8} width={a.prob * 380} height={18} rx={3} fill={a.color} opacity={0.7} />
          <text x={250} y={21} fill="#fff" fontSize={10} fontWeight={600}>{a.example}</text>
        </g>
      ))}
      <text x={380} y={225} textAnchor="middle" fill="#f97316" fontSize={10}>HARA (Hazard Analysis and Risk Assessment) determines ASIL per function · SOTIF ISO 21448: performance limits</text>
    </svg>
  );
}

function SafetyMetricsDiagram() {
  const companies = [
    { name: 'Waymo', miles: 7140, color: '#f97316' },
    { name: 'Cruise', miles: 350, color: '#f97316' },
    { name: 'Zoox', miles: 220, color: '#f97316' },
    { name: 'Motional', miles: 180, color: '#f97316' },
    { name: 'Human avg', miles: 500, color: '#fb923c' },
  ];
  const maxMiles = 7140;
  return (
    <svg viewBox="0 0 760 240" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Miles Per Disengagement — 2023 California DMV Reports (thousands)</text>
      {companies.map((c, i) => {
        const barW = (c.miles / maxMiles) * 540;
        return (
          <g key={i} transform={`translate(0,${32 + i * 36})`}>
            <text x={100} y={20} textAnchor="end" fill="#fb923c" fontSize={11}>{c.name}</text>
            <rect x={110} y={6} width={barW} height={22} rx={4} fill={c.color} opacity={0.85} />
            <text x={115 + barW} y={21} fill={c.color} fontSize={11} fontWeight={700}>
              {c.miles >= 1000 ? `${(c.miles / 1000).toFixed(2)}M` : `${c.miles}k`} mi/disengagement
            </text>
          </g>
        );
      })}
      <rect x={10} y={210} width={740} height={25} rx={4} fill="#ea580c10" stroke="#ea580c30" />
      <text x={380} y={228} textAnchor="middle" fill="#f97316" fontSize={11}>Waymo 7.14M miles/disengagement = ~20,000× less frequent than average human intervention rate</text>
    </svg>
  );
}

function SimulationDiagram() {
  const pyramid = [
    { label: 'Public Road Testing', w: 700, color: '#f97316', sub: 'Most expensive · Real world · Regulatory required' },
    { label: 'Closed Track / Proving Ground', w: 560, color: '#f97316', sub: 'Edge cases by design · Repeatable · Safe' },
    { label: 'Hardware-in-the-Loop (HiL)', w: 420, color: '#f97316', sub: 'Real ECUs + simulated sensors · ADAS validation' },
    { label: 'Simulation (CARLA, LGSVL)', w: 280, color: '#f97316', sub: '100+ maps · weather · pedestrians · sensor models' },
    { label: 'Unit & Module Tests', w: 240, color: '#f97316', sub: 'Per-function · fastest · CI/CD pipeline' },
  ];
  return (
    <svg viewBox="0 0 760 260" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Validation Pyramid — From Code to Road</text>
      {pyramid.map((p, i) => {
        const x = (760 - p.w) / 2;
        return (
          <g key={i} transform={`translate(0,${28 + i * 42})`}>
            <rect x={x} y={0} width={p.w} height={36} rx={4} fill={`${p.color}20`} stroke={p.color} strokeWidth={1.5} />
            <text x={380} y={14} textAnchor="middle" fill="#fff" fontSize={11} fontWeight={700}>{p.label}</text>
            <text x={380} y={28} textAnchor="middle" fill="#fff" fontSize={8.5} opacity={0.8}>{p.sub}</text>
          </g>
        );
      })}
      <text x={380} y={252} textAnchor="middle" fill="#f97316" fontSize={10}>Shadow mode: AV software runs silently alongside human driver · compares decisions · no actuation</text>
    </svg>
  );
}

function DeploymentDiagram() {
  const models = [
    {
      name: 'Waymo One',
      level: 'L4',
      area: 'Phoenix 180mi²',
      speed: '45mph max',
      operator: 'No safety driver',
      color: '#f97316',
      coverage: 15,
    },
    {
      name: 'Mercedes DRIVE PILOT',
      level: 'L3',
      area: 'German Autobahn',
      speed: 'max 60 km/h',
      operator: 'Driver available',
      color: '#f97316',
      coverage: 35,
    },
    {
      name: 'Tesla FSD',
      level: 'L2+',
      area: 'Global (supervised)',
      speed: 'Full range',
      operator: 'Driver monitors',
      color: '#f97316',
      coverage: 95,
    },
  ];
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>ODD Comparison — Deployment Models</text>
      {models.map((m, i) => {
        const x = 15 + i * 247;
        return (
          <g key={i}>
            <rect x={x} y={28} width={230} height={190} rx={10} fill={`${m.color}10`} stroke={`${m.color}50`} strokeWidth={1.5} />
            <rect x={x} y={28} width={230} height={36} rx={10} fill={`${m.color}25`} />
            <text x={x + 115} y={48} textAnchor="middle" fill={m.color} fontSize={13} fontWeight={800}>{m.name}</text>
            <rect x={x + 10} y={56} width={38} height={18} rx={4} fill={m.color} />
            <text x={x + 29} y={69} textAnchor="middle" fill="#fff" fontSize={10} fontWeight={700}>{m.level}</text>
            {[
              ['Area', m.area],
              ['Max Speed', m.speed],
              ['Driver', m.operator],
              ['Coverage', `${m.coverage}% of roads`],
            ].map(([k, v], ki) => (
              <g key={ki} transform={`translate(${x + 10},${82 + ki * 30})`}>
                <text x={0} y={12} fill="#f97316" fontSize={9} fontWeight={600}>{k}</text>
                <text x={0} y={25} fill="#fb923c" fontSize={10}>{v}</text>
              </g>
            ))}
            <rect x={x + 10} y={200} width={(m.coverage / 100) * 210} height={8} rx={3} fill={m.color} opacity={0.8} />
          </g>
        );
      })}
    </svg>
  );
}

function RegulationDiagram() {
  return (
    <svg viewBox="0 0 760 260" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Global Regulation & Business Models</text>
      {/* Regulation */}
      <rect x={10} y={28} width={440} height={195} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={230} y={50} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>Regulatory Landscape</text>
      {[
        { region: 'EU', rule: 'UNECE R157 ALKS L3 + AI Act (high-risk)', color: '#f97316' },
        { region: 'USA', rule: 'NHTSA voluntary framework · State-by-state L4 permits', color: '#f97316' },
        { region: 'China', rule: 'GB/T mandatory certification · MIIT approval', color: '#f97316' },
        { region: 'Germany', rule: 'StVG §1e — first L3 public road law (2021)', color: '#f97316' },
        { region: 'Japan', rule: 'SIP-adus L3 motorway · Type Approval 2023', color: '#f97316' },
      ].map((r, i) => (
        <g key={i} transform={`translate(20,${58 + i * 30})`}>
          <rect x={0} y={0} width={50} height={20} rx={3} fill={`${r.color}20`} stroke={r.color} strokeWidth={1} />
          <text x={25} y={14} textAnchor="middle" fill={r.color} fontSize={10} fontWeight={700}>{r.region}</text>
          <text x={60} y={14} fill="#fb923c" fontSize={10}>{r.rule}</text>
        </g>
      ))}
      <text x={230} y={240} textAnchor="middle" fill="#f97316" fontSize={9}>EU AI Act classifies AV perception as high-risk — conformity assessment + CE marking required</text>
      {/* Business */}
      <rect x={462} y={28} width={290} height={195} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={607} y={50} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight={700}>Business Models</text>
      {[
        { model: 'Robotaxi', rev: '$2.50-4.00/mi', cost: '$1.50/mi (scale)', color: '#f97316' },
        { model: 'L2+ Licensing', rev: '$50-100/car', cost: 'Mobileye model', color: '#f97316' },
        { model: 'AV-as-a-Service', rev: 'Fleet mgmt SaaS', cost: 'Aurora/Torc', color: '#f97316' },
        { model: 'ADAS Upgrade', rev: '$2,000-15,000 OTA', cost: 'Tesla FSD', color: '#f97316' },
      ].map((b, i) => (
        <g key={i} transform={`translate(472,${58 + i * 38})`}>
          <rect x={0} y={0} width={270} height={30} rx={4} fill={`${b.color}12`} stroke={`${b.color}30`} />
          <text x={8} y={13} fill={b.color} fontSize={11} fontWeight={700}>{b.model}</text>
          <text x={8} y={25} fill="#fb923c" fontSize={9}>{b.rev} · {b.cost}</text>
        </g>
      ))}
      <text x={607} y={250} textAnchor="middle" fill="#f97316" fontSize={9}>Waymo robotaxi: 50k rides/week Phoenix · $0B revenue 2023 → path to profitability 2026+</text>
    </svg>
  );
}

export default function AV5() {
  return (
    <div style={S.page}>
      <Link to="/autonomous" style={S.back}>← Autonomous Vehicles</Link>
      <div style={S.badge}>MÓDULO 05</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Segurança Funcional — ISO 26262 e SOTIF</h2>
        <p style={S.p}>A norma ISO 26262 "Road Vehicles — Functional Safety" define o framework de segurança funcional para sistemas electrónicos automóveis. Define quatro níveis de integridade de segurança (ASIL A a D, do menor ao maior risco) baseados em três parâmetros: severidade do dano potencial (S0-S3), exposição à situação perigosa (E0-E4), e controlabilidade pelo condutor (C0-C3). A multiplicação destes parâmetros determina o ASIL: os sistemas de direção autónoma (AV steering) e travagem de emergência requerem ASIL D — o nível mais exigente, exigindo probabilidade de falha inferior a 10⁻⁸ por hora de operação.</p>
        <p style={S.p}>O processo HARA (Hazard Analysis and Risk Assessment) identifica sistematicamente situações perigosas para cada função do sistema e determina o ASIL necessário. Um complemento crucial é o SOTIF (Safety Of The Intended Functionality, ISO 21448): enquanto o ISO 26262 trata de falhas no hardware/software, o SOTIF endereça limitações de performance mesmo quando o sistema funciona como projetado — por exemplo, uma câmera que não deteta um peão com roupa de camuflagem, ou um LiDAR confundido por neve intensa.</p>
        <div style={S.diagram}><ISO26262Diagram /></div>
        <div style={S.highlight}>O desenvolvimento ASIL D é extremamente custoso: requer redundância de hardware, análise formal de árvore de falhas (FTA), análise de efeitos de modo de falha (FMEA), testes de cobertura de código 100% (MC/DC), e auditorias independentes. Um ECU ASIL D pode custar 10-50× mais para certificar do que um equivalente QM, motivo pelo qual os fabricantes de AV constroem arquiteturas com decomposição ASIL para minimizar os componentes que necessitam desta classificação.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Métricas de Segurança — Desengagements e MTBF</h2>
        <p style={S.p}>A métrica mais utilizada publicamente para comparar sistemas autónomos é a taxa de desengagement: quantas milhas o veículo percorre em modo autónomo antes de ser necessária uma intervenção humana (porque o sistema pediu auxílio ou o operador de segurança interveio preventivamente). O California DMV exige relatórios anuais de todas as empresas testando no estado, tornando os dados comparáveis.</p>
        <p style={S.p}>Em 2023, o Waymo liderou com 7,14 milhões de milhas por disengagement — resultado de anos de operação comercial em Phoenix e São Francisco. A Cruise reportou 350,000 mi/disengagement antes de suspender operações. Para contexto, um condutor humano médio tem um "incidente" (colisão evitada, correção brusca) aproximadamente a cada 500,000 milhas, embora a definição não seja diretamente comparável com disengagement. O Waymo argumenta que a sua frota é estatisticamente mais segura que o condutor humano médio por uma margem de ~20x em severidade de acidentes.</p>
        <div style={S.diagram}><SafetyMetricsDiagram /></div>
        <div style={S.note}>Os relatórios de disengagement têm limitações: empresas diferentes têm critérios de disengagement diferentes, operam em ODDs diferentes (Waymo em Phoenix tem menos peões e ciclistas que São Francisco), e os cenários de teste variam. Métricas complementares incluem MTBF (Mean Time Between Failures críticos), taxa de eventos críticos por milha, e análise de severidade de incidentes.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Simulação e Testes — CARLA e Shadow Mode</h2>
        <p style={S.p}>A pirâmide de validação para sistemas autónomos tem múltiplos níveis com custo e realismo inversamente proporcionais. Nos testes unitários e de módulo, cada componente de software (detector de pedestres, planeador de trajetória) é testado isoladamente com dados sintéticos em pipeline CI/CD. Os testes de integração em Hardware-in-the-Loop (HiL) conectam o software a ECUs reais com sensores simulados, validando timing e interfaces reais.</p>
        <p style={S.p}>A simulação em CARLA (simulador open-source da Universidade Autónoma de Barcelona) ou LGSVL (da LG) é o pilar central: oferece mais de 100 mapas detalhados, 20+ condições meteorológicas, modelos de sensores fisicamente realistas (incluindo ruído LiDAR e motion blur de câmera), e APIs Python para controlo programático de cenários. A Waymo reporta correr mais de 20 milhões de milhas de simulação por dia — impossível com testes físicos. O shadow mode é igualmente poderoso: o software AV é executado em paralelo com o condutor humano em carros de produção, registando o que o sistema teria feito sem actuar fisicamente — criando um dataset massivo de comparações humano vs IA.</p>
        <div style={S.diagram}><SimulationDiagram /></div>
        <div style={S.highlight}>O adversarial testing é um elemento crítico que a pirâmide convencional não captura: injetar cenários extremamente raros mas perigosos — um carro-fantasma que surge do nada, um peão com comportamento errático, um sensor com falha parcial. A geração adversarial de cenários (baseada em RL ou busca por gradiente) é um campo activo de investigação para encontrar os "gaps" do sistema antes que aconteçam na estrada.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Modelos de Deployment — ODD e Geo-fencing</h2>
        <p style={S.p}>As estratégias de deployment dos principais players refletem filosofias radicalmente diferentes sobre como introduzir sistemas autónomos de forma responsável. O Waymo One opera um serviço comercial de robotaxi em Phoenix dentro de uma geo-fence de aproximadamente 180 milhas quadradas, com limites de velocidade de 45mph, apenas durante o dia (com exceções limitadas de noite), sem neve ou chuva intensa. Este ODD restrito permite atingir o nível de fiabilidade necessário para operar sem condutor de segurança — 50,000 viagens por semana em 2024.</p>
        <p style={S.p}>O Mercedes-Benz DRIVE PILOT (L3) opera em autoestradas alemãs a velocidades inferiores a 60 km/h em condições de tráfego congestionado, durante o dia, em tempo seco. O condutor pode desviar a atenção (usar o telemóvel legalmente) mas deve retomar o controlo em 10 segundos quando solicitado. A Tesla FSD (L2+) não tem geo-fence — opera em qualquer estrada com qualquer condição meteorológica, mas requer monitorização constante do condutor. A breadth de coverage (95%+ das estradas) contrasta com a depth de autonomia (L2+ vs L4).</p>
        <div style={S.diagram}><DeploymentDiagram /></div>
        <div style={S.note}>O conceito de "geo-fence creep" descreve a expansão gradual do ODD ao longo do tempo: o Waymo começou em Chandler, Arizona (suburb plano), expandiu para Phoenix city center, depois São Francisco (muito mais complexo), e planeia Tokio e outras cidades. Cada expansão requer validação extensiva do novo ODD antes de remover o operador de segurança.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Regulação Global e Modelos de Negócio</h2>
        <p style={S.p}>O panorama regulatório global para veículos autónomos está a emergir de forma fragmentada. A UNECE (United Nations Economic Commission for Europe) aprovou o Regulamento R157 que regula o ALKS (Automated Lane Keeping System) L3 em autoestradas até 130 km/h — adoptado na UE, Japão e Coreia. Na UE, o AI Act classifica os sistemas de percepção de AV como "high-risk AI systems", exigindo avaliação de conformidade independente, documentação técnica extensa e registo numa base de dados europeia. Nos EUA, a NHTSA tem uma abordagem voluntária: as empresas submetem relatórios de Standing General Order sobre acidentes envolvendo ADAS/ADS, mas não existe aprovação federal prévia ao deployment.</p>
        <p style={S.p}>Os modelos de negócio emergentes reflectem as diferentes posições na stack. O robotaxi (Waymo, Cruise, Zoox) gera receita de $2.50-4.00 por milha, com custo esperado de ~$1.50/milha em escala com frotas de EV elétricos amortizados. O licenciamento de ADAS (Mobileye, Magna) cobra $50-100 por veículo ao OEM — Mobileye tem mais de 800 modelos de veículos como clientes. O modelo Tesla de upgrades FSD over-the-air (€2,000-8,000 por veículo) criou um novo paradigma de receita recorrente pós-venda. A Aurora e Torc vendem autonomy-as-a-service para transportadoras de caminhões, onde o ROI é mais claro: eliminação do custo do motorista ($80,000/ano) e operação 24/7.</p>
        <div style={S.diagram}><RegulationDiagram /></div>
        <div style={S.highlight}>O caminho para a rentabilidade do robotaxi é desafiante: o Waymo precisa de escalar para centenas de milhares de veículos para amortizar os custos fixos de HD Maps, operações, e R&D. A Cruise (GM) suspendeu operações em 2023 após um acidente grave, demonstrando que a confiança regulatória e pública é tão crítica para o negócio como a tecnologia em si. A China tem o ambiente mais permissivo — Baidu Apollo Go opera em mais de 10 cidades com licença para remover safety driver em algumas delas.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Segurança Funcional — ISO 26262 e SOTIF</strong> — ISO 26262 define ASIL (Automotive Safety Integrity Level) A–D para funções de segurança baseadas em falhas de hardware; SOTIF (ISO 21448) endereça riscos de sistemas correctos mas com performance insuficiente em situações não antecipadas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Métricas de Segurança — Desengagements e MTBF</strong> — desengagements por milha mede com que frequência o sistema pede intervenção humana (exigido pela regulação californiana); MTBF (Mean Time Between Failures) e miles per disengagement são as métricas de maturidade do sistema.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Simulação e Testes — CARLA e Shadow Mode</strong> — CARLA é um simulador open-source para AV com sensores sintéticos e agentes de tráfego; Shadow Mode (Tesla) corre o sistema de AV em paralelo com o condutor humano, capturando divergências como dados de treino.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Modelos de Deployment — ODD e Geo-fencing</strong> — ODD (Operational Design Domain) define as condições em que o sistema AV é seguro (clima, velocidade, tipo de estrada); geo-fencing restringe operação a zonas mapeadas e validadas — crítico para deployment seguro em L4.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Regulação Global e Modelos de Negócio</strong> — regulação: NHTSA (EUA), UN-R157 (Europa), GB/T 40429 (China); modelos de negócio incluem robotaxi (Waymo One, Cruise), ADAS B2B (Mobileye, Bosch) e fleet owner (TuSimple trucking).</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
