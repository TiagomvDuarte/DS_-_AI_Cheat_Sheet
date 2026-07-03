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
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem' },
};

function RobotKinematicsSVG() {
  return (
    <svg viewBox="0 0 560 280" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="270" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={12} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Robot 6-DOF — Cinematica DH e Espaco de Trabalho</text>
      {/* Workspace ellipse */}
      <ellipse cx={155} cy={148} rx={128} ry={105} fill="none" stroke="#f97316" strokeDasharray="5,3" strokeWidth="1.5" opacity="0.35" />
      <text x={155} y={258} textAnchor="middle" fill="#fb923c" fontSize="9">Espaco de trabalho (reach envelope)</text>
      {/* Robot arm links */}
      <line x1={90} y1={220} x2={105} y2={168} stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
      <line x1={105} y1={168} x2={152} y2={126} stroke="#f97316" strokeWidth="7" strokeLinecap="round" />
      <line x1={152} y1={126} x2={210} y2={105} stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      <line x1={210} y1={105} x2={252} y2={88} stroke="#fb923c" strokeWidth="5" strokeLinecap="round" />
      <line x1={252} y1={88} x2={280} y2={76} stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
      {/* Joints */}
      {[[90,220,'J1','#f97316'],[105,168,'J2','#f97316'],[152,126,'J3','#f97316'],[210,105,'J4','#f97316'],[252,88,'J5','#f97316'],[280,76,'TCP','#f97316']].map(([x,y,l,c],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i===5?7:9} fill={c} />
          <text x={x+11} y={y+4} fill={c} fontSize="9" fontWeight="700">{l}</text>
        </g>
      ))}
      {/* Base */}
      <rect x={20} y={221} width={60} height={20} fill="#f97316" rx="3" opacity="0.6" />
      <text x={50} y={234} textAnchor="middle" fill="#fff" fontSize="9">Base (J1)</text>
      {/* DH table */}
      <rect x={305} y={22} width={248} height={220} fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeOpacity="0.3" strokeWidth="1" rx="6" />
      <text x={429} y={40} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">Parametros Denavit-Hartenberg</text>
      {[['Junta','a (mm)','alpha','d (mm)','theta'],
        ['J1','0','90 deg','127.3','theta1'],
        ['J2','431.8','0','0','theta2'],
        ['J3','20.3','90 deg','0','theta3'],
        ['J4','0','-90 deg','433.1','theta4'],
        ['J5','0','90 deg','0','theta5'],
        ['J6','0','0 deg','95.0','theta6'],
      ].map((row, ri) => (
        <g key={ri}>
          {row.map((cell, ci) => (
            <text key={ci} x={312 + ci * 47} y={57 + ri * 26} fill={ri === 0 ? '#fb923c' : (ci===0 ? '#f97316' : '#e2e8f0')} fontSize={ri===0?'9':'8.5'} fontWeight={ri===0||ci===0?'700':'400'}>{cell}</text>
          ))}
        </g>
      ))}
      <text x={280} y={274} textAnchor="middle" fill="#fb923c" fontSize="9">UR10e. FK: T_0_6 = T01 * T12 * T23 * T34 * T45 * T56 — produto de 4x4 matrizes homogeneas</text>
    </svg>
  );
}

function CobotSafetyZonesSVG() {
  return (
    <svg viewBox="0 0 560 240" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={8} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">ISO/TS 15066 — Modos Colaborativos e Zonas de Seguranca</text>
      {/* Zone circles */}
      <circle cx={175} cy={120} r={115} fill="#f97316" opacity="0.04" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3" />
      <circle cx={175} cy={120} r={82} fill="#fb923c" opacity="0.06" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx={175} cy={120} r={50} fill="#f97316" opacity="0.08" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx={175} cy={120} r={24} fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="2" />
      {/* Robot */}
      <rect x={163} y={100} width={24} height={40} fill="#f97316" rx="4" />
      <circle cx={175} cy={96} r={14} fill="#f97316" />
      <text x={175} y={100} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">UR10e</text>
      {/* Zone labels */}
      <text x={175} y={78} textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Zona Collab (0-50cm)</text>
      <text x={175} y={46} textAnchor="middle" fill="#fb923c" fontSize="8.5" fontWeight="700">Red. Vel. 250mm/s (50-82cm)</text>
      <text x={175} y={20} textAnchor="middle" fill="#f97316" fontSize="8.5" fontWeight="700">Paragem monitorizada (&gt;82cm)</text>
      {/* Right panel */}
      <rect x={320} y={20} width={230} height={195} fill="var(--bg-primary)" rx="6" />
      <text x={435} y={38} textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="700">ISO/TS 15066 — Limites PFL</text>
      {[
        { part: 'Cabeca / pescoco', f: '130 N', p: '130 N/cm2', c: '#f97316' },
        { part: 'Torso', f: '140 N', p: '220 N/cm2', c: '#f97316' },
        { part: 'Braco superior', f: '150 N', p: '180 N/cm2', c: '#f97316' },
        { part: 'Antebraco', f: '160 N', p: '190 N/cm2', c: '#f97316' },
        { part: 'Mao / pulso', f: '140 N', p: '180 N/cm2', c: '#f97316' },
      ].map((r, i) => (
        <g key={i}>
          <text x={330} y={56 + i * 30} fill="#fb923c" fontSize="9">{r.part}</text>
          <text x={330} y={69 + i * 30} fill={r.c} fontSize="9" fontWeight="700">Fmax {r.f} | P {r.p}</text>
        </g>
      ))}
      <text x={435} y={215} textAnchor="middle" fill="#fb923c" fontSize="8">Potencia max por articulacao: 80 W (PFL mode)</text>
      <text x={280} y={234} textAnchor="middle" fill="#fb923c" fontSize="9">Safety-rated monitored stop: PLC safety SIL 2 (IEC 62061) ou PLd (ISO 13849) — tempo de reaccao &lt;10 ms</text>
    </svg>
  );
}

function VisionPipelineSVG() {
  const steps = [
    { label: 'Camara\nIndustrial', sub: '5MP GigE\nGlobal Shutter', color: '#f97316' },
    { label: 'Iluminacao\nEstrutural', sub: 'LED dome/\nDark field', color: '#f97316' },
    { label: 'Pre-\nprocessing', sub: 'CLAHE\nNormalizacao', color: '#f97316' },
    { label: 'Backbone\nResNet50', sub: 'Feature\nPyramid Net', color: '#f97316' },
    { label: 'YOLOv8/\nMask R-CNN', sub: 'Deteccao\n+ Segmentacao', color: '#f97316' },
    { label: 'Classificacao\n+ Rejeicao', sub: 'PLC signal\n<10 ms', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 560 135" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="135" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={15} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">Pipeline Computer Vision — Inspecao 100% em Linha de Producao</text>
      {steps.map((s, i) => {
        const x = 8 + i * 91;
        const lines = s.label.split('\n');
        const subs = s.sub.split('\n');
        return (
          <g key={i}>
            <rect x={x + 2} y={22} width={82} height={74} fill={s.color} rx="6" opacity="0.13" />
            <rect x={x + 2} y={22} width={82} height={74} fill="none" stroke={s.color} strokeWidth="1.5" rx="6" />
            {lines.map((l, li) => (
              <text key={li} x={x + 43} y={42 + li * 13} textAnchor="middle" fill={s.color} fontSize="9.5" fontWeight="700">{l}</text>
            ))}
            {subs.map((l, li) => (
              <text key={li} x={x + 43} y={68 + li * 12} textAnchor="middle" fill="#fb923c" fontSize="8.5">{l}</text>
            ))}
            {i < steps.length - 1 && (
              <text x={x + 88} y={62} fill="#fb923c" fontSize="14">&#8594;</text>
            )}
          </g>
        );
      })}
      <text x={280} y={122} textAnchor="middle" fill="#fb923c" fontSize="9">GPU NVIDIA Jetson AGX Orin (275 TOPS): YOLOv8m a 120 FPS. Latencia total camara-PLC: 8-15 ms.</text>
    </svg>
  );
}

function AGVSLAMdiagramSVG() {
  const walls = [[30,30,530,30],[30,30,30,210],[530,30,530,210],[30,210,530,210],[200,30,200,130],[200,130,350,130],[350,130,350,210]];
  const path = 'M60,185 L60,60 L170,60 L170,105 L280,105 L280,185 L460,185 L460,60';
  const agvX = 280, agvY = 185;
  const lidarPts = Array.from({length:20},(_,i)=>{
    const angle = i * (Math.PI * 2 / 20);
    const r = 70 + Math.random() * 0;
    return {x: agvX + Math.cos(angle)*r, y: agvY + Math.sin(angle)*r};
  });
  return (
    <svg viewBox="0 0 560 250" style={{ width: '100%', borderRadius: 8 }}>
      <rect width="560" height="230" fill="var(--bg-secondary)" rx="8" />
      <text x={280} y={17} textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">AMR SLAM — Mapa 2D + Localizacao + Path Planning</text>
      {walls.map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1+12} x2={x2} y2={y2+12} stroke="#f97316" strokeOpacity="0.25" strokeWidth="5" strokeLinecap="round" />
      ))}
      {/* Planned path */}
      <path d={path.replace(/(\d+),(\d+)/g, (m,a,b)=>`${a},${parseInt(b)+12}`)} fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="8,4" />
      {/* LiDAR rays */}
      {lidarPts.map((p, i) => (
        <line key={i} x1={agvX} y1={agvY+12} x2={p.x} y2={p.y+12} stroke="#f97316" strokeWidth="0.8" opacity="0.4" />
      ))}
      {/* AMR */}
      <rect x={agvX-14} y={agvY+4} width={28} height={20} fill="#f97316" rx="4" />
      <text x={agvX} y={agvY+17} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">AMR</text>
      {/* Waypoints */}
      {[[60,185],[60,60],[170,60],[280,105],[280,185],[460,185],[460,60]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y+12} r={4} fill="#fb923c" opacity="0.8" />
      ))}
      {/* Legend */}
      <line x1={340} y1={50} x2={370} y2={50} stroke="#f97316" strokeWidth="2" strokeDasharray="8,4" />
      <text x={374} y={54} fill="#fb923c" fontSize="9">Rota planeada (CBS)</text>
      <line x1={340} y1={68} x2={370} y2={68} stroke="#f97316" strokeWidth="0.8" opacity="0.6" />
      <text x={374} y={72} fill="#fb923c" fontSize="9">LiDAR 360 deg</text>
      <circle cx={350} cy={84} r={4} fill="#fb923c" />
      <text x={358} y={88} fill="#fb923c" fontSize="9">Waypoints</text>
      <text x={280} y={242} textAnchor="middle" fill="#fb923c" fontSize="9">SLAM: ICP scan matching para localizacao 1-2cm. CBS (Conflict-Based Search) para multi-AGV sem colisoes.</text>
    </svg>
  );
}

export default function IND3() {
  const mod = modules[2];
  return (
    <div style={S.page}>
      <Link to="/industry40" style={S.back}>← Industry 4.0</Link>
      <div style={S.badge}>MÓDULO 03</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Cinematica de Robos — DH Parameters e Forward Kinematics</h2>
        <div style={S.diagram}><RobotKinematicsSVG /></div>
        <div style={S.highlight}>
          A convencao <strong>Denavit-Hartenberg (DH)</strong> descreve a cinematica de um robot de 6 DOF com apenas 4 parametros por junta: a (distancia ao longo de x), alpha (rotacao em torno de x), d (distancia ao longo de z), theta (angulo de rotacao). A cinematica directa (FK) calcula a posicao do TCP dado os angulos das juntas: <strong>T_0_6 = T_01 * T_12 * ... * T_56</strong>, produto de 6 matrizes homogeneas 4x4. A cinematica inversa (IK) e o problema inverso — requer solver numerico (Newton-Raphson) ou analitico (solucao fechada para geometrias especificas).
        </div>
        <div style={S.note}>
          <strong>Jacobiano J(q)</strong>: matriz que mapeia velocidades das juntas (dq/dt) em velocidades cartesianas do TCP (dx/dt): dx/dt = J(q) * dq/dt. O pseudo-inverso J+ permite controlo cartesiano: dq/dt = J+ * dx/dt_desired. Singularidades ocorrem quando det(J)=0 (posicoes onde o robot perde graus de liberdade — e.g. arm totalmente extendido). UR10e evita singularidades com "singularity avoidance" no controlador de trajectoria.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Cobots e ISO/TS 15066 — Safety Colaborativa</h2>
        <div style={S.diagram}><CobotSafetyZonesSVG /></div>
        <div style={S.highlight}>
          ISO/TS 15066 define 4 modos colaborativos: (1) <strong>Safety-rated monitored stop</strong> — robot para quando humano entra na zona; (2) <strong>Hand guiding</strong> — programacao por demonstracao; (3) <strong>Speed and Separation Monitoring (SSM)</strong> — velocidade proporcional a distancia ao humano (sensores 3D: SICK safeVisionary2, PILZ PITreader); (4) <strong>Power and Force Limiting (PFL)</strong> — robot opera sem gaiola se forca de contacto &lt; limites da norma. Universal Robots UR10e implementa PFL com torque sensing em cada junta a 500 Hz.
        </div>
        <div style={S.note}>
          <strong>Controlo de Impedancia</strong> (Hogan 1985): permite que o robot se comporte como uma mola virtual com rigidez K e amortecimento B: F_contact = K*(x_desired - x_actual) + B*(dx/dt). Cobots usam impedance control para assembly tasks — adapta-se a tolerancias de peca sem pre-programar forcas exactas. Medido via torque sensors nas juntas ou F/T sensor de 6 eixos no pulso (ATI Mini45).
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Computer Vision para Quality Control</h2>
        <div style={S.diagram}><VisionPipelineSVG /></div>
        <div style={S.highlight}>
          <strong>YOLOv8</strong> (Ultralytics 2023): 52.9 mAP@50 no COCO com latencia 1.8 ms em A100. Para inspecao industrial: fine-tune com 500-2000 imagens de defeitos especificos. <strong>PatchCore</strong> (CVPR 2022): deteccao de anomalias treinada apenas com amostras "boas" (one-class) — atinge 99.1% AUROC no MVTec AD dataset. Ideal quando defeitos sao raros. <strong>Mask R-CNN</strong>: segmentacao de instancias para medida precisa de defeitos (area, perimetro, forma) — permite SPC automatico sobre dimensoes visuais.
        </div>
        <div style={S.note}>
          <strong>Iluminacao estrutural</strong> e critica: backlight para silhuetas, coaxial para superficies reflectivas, dark-field para scratches em metal, UV para contaminacao. A mesma camara com iluminacao errada pode ter 40% de falsos negativos. Recomendacao: validar combinacoes camara+iluminacao+optica antes de escolher o modelo de DL.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. AMR e SLAM — Intralogistica Autonoma</h2>
        <div style={S.diagram}><AGVSLAMdiagramSVG /></div>
        <div style={S.highlight}>
          <strong>SLAM</strong> (Simultaneous Localization and Mapping): o AMR constroi um mapa do ambiente enquanto se localiza nele — problema classico de "galinha e ovo" resolvido por EKF-SLAM ou Graph-SLAM. Sensores: LiDAR 2D (SICK TiM571) ou 3D (Ouster OS1-64) para scan matching via <strong>ICP</strong> (Iterative Closest Point) ou NDT (Normal Distributions Transform) — localizacao a 1-2 cm. <strong>CBS</strong> (Conflict-Based Search) e o solver MAPF (Multi-Agent Path Finding) optimal para frotas de ate 200 AMRs: resolve colisoes adicionando constraints de tempo entre agentes.
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Trajectoria de Robot: Cubic Spline e S-Curve</h2>
        <div style={S.grid2}>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Cubic Spline (velocidade continua)</div>
            <p style={S.p}>
              q(t) = a0 + a1*t + a2*t2 + a3*t3 com condicoes de fronteira: posicao e velocidade em t=0 e t=T. Garante continuidade C1 (velocidade) mas nao C2 (aceleracao) nas juntas. Usado em trajetorias ponto-a-ponto (PTP). Jerk elevado nas transicoes pode causar vibracao em robots com elevada relacao inercia/amortecimento.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, color, marginBottom: '0.5rem', fontSize: '0.95rem' }}>S-Curve (jerk limitado)</div>
            <p style={S.p}>
              Trajectoria de 7 fases: rampa de aceleracao crescente -- aceleracao constante -- rampa de aceleracao decrescente -- velocidade constante -- rampa de desaceleracao crescente -- desaceleracao constante -- rampa de desaceleracao decrescente. Limita jerk (d3q/dt3), reduzindo vibracao estrutural e desgaste do redutor. Padrao em Siemens SINUMERIK, FANUC CNC, e URScript (UR robots) com parametros de jerk configuravel por eixo.
            </p>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Benchmarks Robotica e Automacao Industrial</h2>
        <div style={S.grid3}>
          {[
            { title: 'Tesla Gigafactory Berlin', stat: '1000+ cobots Kuka', detail: 'Soldadura de carrocaria totalmente automatizada. Cycle time 45s. 500k veiculos/ano. PFL em todas as celulas.' },
            { title: 'BMW Leipzig Vision QC', stat: '100% cobertura defeitos', detail: '24 cameras por estacao. YOLOv8 + PatchCore. 47 tipos de defeito. Taxa falsos negativos <0.001%.' },
            { title: 'Amazon Robotics', stat: '750k AMRs globais', detail: '+200% throughput vs manual. Walk time 70% para 5%. ROI 18-24 meses para instalacoes >50 AMRs.' },
            { title: 'VW Wolfsburg Cobot Assy', stat: '-40% lesoes MSDs', detail: 'UR10e em montagem de parabrisas (8 kg/ciclo). 35 aplicacoes PFL. Reducao lesoes musculo-esqueleticas.' },
            { title: 'Foxconn Shenzhen', stat: '30% automatizado', detail: 'Mix cobot+humano: tarefas de precisao por cobots, flex assembly por humanos. Foco em scalability vs 100% auto.' },
            { title: 'DHL Eindhoven AMR', stat: '+35% picking speed', detail: '400 MiR AMRs + 200 operadores. 180 linhas/hora por picker. MAPF CBS para 400 agentes sem colisoes.' },
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
                            <li style={{marginBottom:"0.4rem"}}><strong>Cinematica de Robos — DH Parameters e Forward Kinematics</strong> — parâmetros Denavit-Hartenberg descrevem a geometria de um robô manipulador (joint angles, link lengths, twists, offsets); cinemática directa computa a pose do end-effector a partir de joint angles — base de planeamento de trajectória e controlo de robôs industriais.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Cobots e ISO/TS 15066 — Safety Colaborativa</strong> — cobots (URe-series, KUKA iiwa) trabalham junto a humanos com limitação de força e velocidade; ISO/TS 15066 define modos de operação segura (power-and-force limiting, hand-guiding, speed-and-separation monitoring) — base regulatória para automação colaborativa.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Computer Vision para Quality Control</strong> — CNNs (EfficientDet, YOLOv8) inspeccionam peças a 100+ fps detectando defeitos (scratches, dimensões) com precisão superior a inspeção humana; câmeras hiperespectrais e 3D laser complementam visão RGB em materiais reflexivos ou transparentes.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>AMR e SLAM — Intralogistica Autonoma</strong> — AMRs (Autonomous Mobile Robots) navegam armazéns com SLAM usando LiDAR 2D e câmeras; fleet management software orquestra centenas de AMRs com algoritmos de routing multi-agente — Amazon Robotics, Mobile Industrial Robots (MiR) lideram o mercado.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Trajectoria de Robot: Cubic Spline e S-Curve</strong> — splines cúbicas geram trajectórias suaves com continuidade de velocidade e aceleração; perfis S-curve limitam jerk (derivada da aceleração) para reduzir desgaste mecânico e melhorar precisão de posicionamento em movimentos de alta velocidade.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Implementacao: YOLOv8 + PatchCore Industrial</strong> — YOLOv8 detecta e classifica objectos em tempo real; PatchCore (anomaly detection sem exemplos de defeito) aprende a distribuição de features normais e detecta desvios — combinação standard para inspeção visual industrial com dados desequilibrados.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Benchmarks Robotica e Automacao Industrial</strong> — MVTec AD é o benchmark de referência para anomaly detection industrial; RoboHousehold e YCB são benchmarks de manipulação; IFR (International Federation of Robotics) reporta densidade de robôs por 10K trabalhadores como KPI de automação nacional.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
