import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from './Autonomous';

const mod = modules[1];
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

function PointPillarsDiagram() {
  const stages = [
    { label: 'Raw LiDAR', sub: 'N × (x,y,z,r)', color: '#f97316', w: 90 },
    { label: 'Pillars', sub: 'Voxel columns', color: '#f97316', w: 80 },
    { label: 'Pseudo-Image', sub: 'H×W×C BEV', color: '#f97316', w: 90 },
    { label: '2D CNN', sub: 'ResNet backbone', color: '#f59e0b', w: 80 },
    { label: '3D Boxes', sub: 'x,y,z,w,l,h,θ', color: '#fbbf24', w: 90 },
  ];
  return (
    <svg viewBox="0 0 760 200" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>PointPillars Pipeline</text>
      {stages.map((s, i) => {
        const x = 30 + i * 148;
        return (
          <g key={i}>
            <rect x={x} y={30} width={s.w} height={60} rx={8} fill={`${s.color}25`} stroke={s.color} strokeWidth={1.5} />
            <text x={x + s.w / 2} y={57} textAnchor="middle" fill="#fb923c" fontSize={11} fontWeight={700}>{s.label}</text>
            <text x={x + s.w / 2} y={73} textAnchor="middle" fill="#fb923c" fontSize={9}>{s.sub}</text>
            {i < stages.length - 1 && (
              <path d={`M ${x + s.w + 4} 60 L ${x + 138} 60`} stroke="rgba(249,115,22,0.37)" strokeWidth={2} markerEnd="url(#arr2)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(249,115,22,0.37)" />
        </marker>
      </defs>
      <rect x={10} y={120} width={350} height={70} rx={8} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={185} y={140} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>PointPillars (nuScenes mAP)</text>
      <rect x={20} y={148} width={80} height={32} rx={4} fill="rgba(249,115,22,0.25)" />
      <text x={60} y={163} textAnchor="middle" fill="#f97316" fontSize={10} fontWeight={700}>40.1 mAP</text>
      <text x={60} y={175} textAnchor="middle" fill="#fb923c" fontSize={9}>PointPillars</text>
      <rect x={115} y={148} width={80} height={32} rx={4} fill="rgba(249,115,22,0.25)" />
      <text x={155} y={163} textAnchor="middle" fill="#fb923c" fontSize={10} fontWeight={700}>58.0 mAP</text>
      <text x={155} y={175} textAnchor="middle" fill="#fb923c" fontSize={9}>CenterPoint</text>
      <rect x={210} y={148} width={80} height={32} rx={4} fill="rgba(249,115,22,0.25)" />
      <text x={250} y={163} textAnchor="middle" fill="#fbbf24" fontSize={10} fontWeight={700}>67.3 mAP</text>
      <text x={250} y={175} textAnchor="middle" fill="#fb923c" fontSize={9}>TransFusion</text>
      <rect x={400} y={120} width={350} height={70} rx={8} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={575} y={140} textAnchor="middle" fill="#fb923c" fontSize={12} fontWeight={700}>CenterPoint — Heatmap Heads</text>
      <text x={415} y={158} fill="#fb923c" fontSize={10}>• Predicts center heatmap instead of anchors</text>
      <text x={415} y={172} fill="#fb923c" fontSize={10}>• Rotation-invariant (no anchor angle bias)</text>
      <text x={415} y={186} fill="#fb923c" fontSize={10}>• Velocity head for tracking integration</text>
    </svg>
  );
}

function BEVDiagram() {
  return (
    <svg viewBox="0 0 760 220" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>Lift-Splat-Shoot (LSS) — Camera-to-BEV</text>
      {/* Perspective view */}
      <rect x={10} y={30} width={160} height={100} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={90} y={52} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>Perspective View</text>
      <path d="M 30 120 L 90 60 L 150 120 Z" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth={1} />
      <text x={90} y={145} textAnchor="middle" fill="#fb923c" fontSize={9}>Raw camera image</text>
      {/* Arrow 1 */}
      <path d="M 178 80 L 210 80" stroke="rgba(249,115,22,0.37)" strokeWidth={2} markerEnd="url(#arr3)" />
      <text x={194} y={72} textAnchor="middle" fill="#f97316" fontSize={9}>Depth</text>
      {/* Frustum */}
      <rect x={220} y={30} width={160} height={100} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={300} y={52} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>3D Frustum</text>
      {[35, 55, 75, 95, 115].map((y, i) => (
        <line key={i} x1={225} y1={y} x2={375} y2={y} stroke="#f97316" strokeWidth={0.8} opacity={0.5} />
      ))}
      {[235, 260, 285, 310, 335, 360].map((x, i) => (
        <line key={i} x1={x} y1={35} x2={x} y2={120} stroke="#f97316" strokeWidth={0.8} opacity={0.4} />
      ))}
      <text x={300} y={145} textAnchor="middle" fill="#fb923c" fontSize={9}>Per-pixel depth distribution</text>
      {/* Arrow 2 */}
      <path d="M 388 80 L 420 80" stroke="rgba(249,115,22,0.37)" strokeWidth={2} markerEnd="url(#arr3)" />
      <text x={404} y={72} textAnchor="middle" fill="#f97316" fontSize={9}>Pool</text>
      {/* BEV */}
      <rect x={430} y={30} width={160} height={100} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={510} y={52} textAnchor="middle" fill="#fbbf24" fontSize={11} fontWeight={700}>BEV Grid</text>
      {[40, 55, 70, 85, 100, 115].map((y, i) => (
        [435, 458, 481, 504, 527, 550, 573].map((x, j) => (
          <rect key={`${i}-${j}`} x={x} y={y} width={20} height={12} rx={1}
            fill={`${color}${Math.random() > 0.6 ? '40' : '15'}`} stroke={`${color}20`} strokeWidth={0.5} />
        ))
      ))}
      <text x={510} y={145} textAnchor="middle" fill="#fb923c" fontSize={9}>Top-down feature map H×W×C</text>
      {/* Arrow 3 */}
      <path d="M 598 80 L 630 80" stroke="rgba(249,115,22,0.37)" strokeWidth={2} markerEnd="url(#arr3)" />
      {/* Detection */}
      <rect x={640} y={30} width={115} height={100} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={697} y={52} textAnchor="middle" fill="#fbbf24" fontSize={11} fontWeight={700}>Detection</text>
      <rect x={655} y={60} width={40} height={20} rx={3} fill="none" stroke="#f97316" strokeWidth={1.5} />
      <rect x={670} y={90} width={55} height={25} rx={3} fill="none" stroke="#f97316" strokeWidth={1.5} />
      <text x={697} y={145} textAnchor="middle" fill="#fb923c" fontSize={9}>3D bounding boxes</text>
      <defs>
        <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(249,115,22,0.37)" />
        </marker>
      </defs>
      <text x={380} y={185} textAnchor="middle" fill="#f97316" fontSize={11}>BEVDet · BEVDepth · BEVFormer all build on LSS foundation</text>
      <text x={380} y={200} textAnchor="middle" fill="#f97316" fontSize={10}>Key insight: transform camera features to unified BEV space before detection</text>
    </svg>
  );
}

function BEVFusionDiagram() {
  return (
    <svg viewBox="0 0 760 230" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>BEVFusion Architecture (MIT/PKU)</text>
      {/* LiDAR branch */}
      <rect x={10} y={35} width={140} height={50} rx={8} fill="#f9731625" stroke="#f97316" strokeWidth={1.5} />
      <text x={80} y={58} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>LiDAR Branch</text>
      <text x={80} y={72} textAnchor="middle" fill="#fb923c" fontSize={9}>Voxel encoder → BEV</text>
      <path d="M 155 60 L 310 100" stroke="#f9731660" strokeWidth={1.5} markerEnd="url(#arr4)" />
      {/* Camera branch */}
      <rect x={10} y={115} width={140} height={50} rx={8} fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth={1.5} />
      <text x={80} y={138} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>Camera Branch</text>
      <text x={80} y={152} textAnchor="middle" fill="#fb923c" fontSize={9}>LSS depth lifting → BEV</text>
      <path d="M 155 140 L 310 110" stroke="rgba(249,115,22,0.37)" strokeWidth={1.5} markerEnd="url(#arr4)" />
      {/* Unified BEV */}
      <rect x={310} y={75} width={150} height={60} rx={8} fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth={2} />
      <text x={385} y={100} textAnchor="middle" fill="#fbbf24" fontSize={12} fontWeight={700}>Unified BEV</text>
      <text x={385} y={114} textAnchor="middle" fill="#fb923c" fontSize={9}>Concat + BEV encoder</text>
      {/* Detection head */}
      <path d="M 465 105 L 530 105" stroke="rgba(249,115,22,0.37)" strokeWidth={2} markerEnd="url(#arr4)" />
      <rect x={530} y={75} width={150} height={60} rx={8} fill="rgba(249,115,22,0.15)" stroke="#fbbf24" strokeWidth={2} />
      <text x={605} y={100} textAnchor="middle" fill="#f59e0b" fontSize={12} fontWeight={700}>Detection Head</text>
      <text x={605} y={114} textAnchor="middle" fill="#fb923c" fontSize={9}>CenterPoint-style</text>
      {/* Results */}
      <rect x={10} y={185} width={740} height={38} rx={8} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={135} y={206} textAnchor="middle" fill="#f97316" fontSize={11}>nuScenes NDS:</text>
      <text x={260} y={206} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>65.2 — LiDAR only</text>
      <text x={430} y={206} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>63.8 — Camera only</text>
      <text x={620} y={206} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={800}>70.2 — BEVFusion</text>
      <defs>
        <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(249,115,22,0.37)" />
        </marker>
      </defs>
    </svg>
  );
}

function SegmentationDiagram() {
  const classes = [
    { name: 'Road', color: '#fb923c' },
    { name: 'Lane', color: '#fbbf24' },
    { name: 'Vehicle', color: '#f97316' },
    { name: 'Pedestrian', color: '#f97316' },
    { name: 'Cyclist', color: '#f97316' },
    { name: 'Building', color: '#f97316' },
    { name: 'Vegetation', color: '#f97316' },
    { name: 'Sky', color: '#f97316' },
  ];
  return (
    <svg viewBox="0 0 760 210" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>SegFormer — Hierarchical Transformer Encoder-Decoder</text>
      {/* Encoder */}
      <rect x={10} y={30} width={100} height={170} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={60} y={50} textAnchor="middle" fill="#fb923c" fontSize={10}>Input</text>
      <text x={60} y={62} textAnchor="middle" fill="#fb923c" fontSize={9}>H×W×3</text>
      {[4, 8, 16, 32].map((s, i) => (
        <g key={i} transform={`translate(15,${75 + i * 32})`}>
          <rect x={0} y={0} width={70} height={22} rx={4} fill={`${color}${20 + i * 10}`} stroke={color} strokeWidth={1} />
          <text x={35} y={15} textAnchor="middle" fill="#fb923c" fontSize={9} fontWeight={600}>MiT-B{i} /{s}</text>
        </g>
      ))}
      {/* Decoder */}
      <rect x={130} y={30} width={140} height={185} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={200} y={50} textAnchor="middle" fill="#f97316" fontSize={11} fontWeight={700}>MLP Decoder</text>
      {[4, 8, 16, 32].map((s, i) => (
        <g key={i} transform={`translate(140,${60 + i * 28})`}>
          <rect x={0} y={0} width={120} height={22} rx={4} fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth={0.8} />
          <text x={60} y={15} textAnchor="middle" fill="#fbbf24" fontSize={9}>Upsample + MLP /{s}</text>
        </g>
      ))}
      <rect x={140} y={180} width={120} height={22} rx={4} fill="rgba(249,115,22,0.25)" stroke="#f97316" strokeWidth={1.5} />
      <text x={200} y={195} textAnchor="middle" fill="#fb923c" fontSize={10} fontWeight={700}>Fused Features</text>
      {/* Output */}
      <rect x={290} y={30} width={160} height={170} rx={8} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={370} y={50} textAnchor="middle" fill="#fbbf24" fontSize={11} fontWeight={700}>Semantic Output</text>
      {classes.map((c, i) => (
        <g key={i} transform={`translate(298,${58 + i * 17})`}>
          <rect x={0} y={0} width={12} height={12} rx={2} fill={c.color} />
          <text x={18} y={10} fill="#fb923c" fontSize={10}>{c.name}</text>
        </g>
      ))}
      {/* Metrics */}
      <rect x={470} y={30} width={280} height={170} rx={8} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={610} y={52} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>Cityscapes Benchmark mIoU</text>
      {[
        ['SegFormer-B5', 84.0, '#f97316'],
        ['Mask2Former', 83.3, '#f97316'],
        ['HRNet-W48', 81.1, '#f97316'],
        ['DeepLabV3+', 80.9, '#f59e0b'],
        ['PSPNet', 78.4, '#fbbf24'],
      ].map(([name, val, c], i) => (
        <g key={i} transform={`translate(478,${65 + i * 26})`}>
          <text x={0} y={13} fill="#fb923c" fontSize={10}>{name}</text>
          <rect x={105} y={2} width={(val - 75) * 8} height={15} rx={3} fill={c} opacity={0.8} />
          <text x={105 + (val - 75) * 8 + 4} y={13} fill="#fb923c" fontSize={10} fontWeight={700}>{val}</text>
        </g>
      ))}
    </svg>
  );
}

function OccupancyDiagram() {
  return (
    <svg viewBox="0 0 760 250" style={{ width: '100%' }}>
      <text x={380} y={18} textAnchor="middle" fill="#f97316" fontSize={13} fontWeight={700}>3D Occupancy Grid vs Bounding Boxes</text>
      {/* Bounding box approach */}
      <rect x={10} y={30} width={340} height={205} rx={10} fill="rgba(249,115,22,0.06)" stroke="var(--card-border)" />
      <text x={180} y={52} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>Bounding Box Detection</text>
      <rect x={60} y={65} width={70} height={40} rx={3} fill="none" stroke="#f97316" strokeWidth={2} />
      <text x={95} y={90} textAnchor="middle" fill="#f97316" fontSize={9}>Car</text>
      <rect x={160} y={80} width={30} height={50} rx={3} fill="none" stroke="#f97316" strokeWidth={2} />
      <text x={175} y={105} textAnchor="middle" fill="#f97316" fontSize={9}>Ped</text>
      <rect x={220} y={70} width={50} height={20} rx={3} fill="none" stroke="#f97316" strokeWidth={2} />
      <text x={245} y={85} textAnchor="middle" fill="#f97316" fontSize={9}>Bike</text>
      <text x={180} y={140} textAnchor="middle" fill="#fb923c" fontSize={10}>Fixed class set — misses</text>
      <text x={180} y={153} textAnchor="middle" fill="#fb923c" fontSize={10}>debris, construction, trees</text>
      <text x={25} y={180} fill="#f97316" fontSize={10}>✗ Cannot represent arbitrary shapes</text>
      <text x={25} y={196} fill="#f97316" fontSize={10}>✗ Misses out-of-distribution objects</text>
      <text x={25} y={212} fill="#f97316" fontSize={10}>✓ Compact representation, fast inference</text>
      {/* Occupancy grid */}
      <rect x={365} y={30} width={385} height={205} rx={10} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.25)" />
      <text x={557} y={52} textAnchor="middle" fill="#f97316" fontSize={12} fontWeight={700}>3D Occupancy Grid (200×200×16)</text>
      {[...Array(10)].map((_, row) =>
        [...Array(14)].map((_, col) => {
          const occupied = (row === 3 && col >= 3 && col <= 6) ||
            (row >= 4 && row <= 7 && col === 8) ||
            (row === 5 && col >= 10 && col <= 12);
          return (
            <rect key={`${row}-${col}`}
              x={375 + col * 26} y={62 + row * 13}
              width={24} height={11} rx={1}
              fill={occupied ? `${color}80` : `${color}10`}
              stroke={`${color}30`} strokeWidth={0.5} />
          );
        })
      )}
      <text x={557} y={200} textAnchor="middle" fill="#fb923c" fontSize={10}>Each voxel: free / occupied / unknown</text>
      <text x={375} y={212} fill="#f97316" fontSize={10}>✓ Handles any shape: bicycle, branch, debris</text>
      <text x={375} y={225} fill="#f97316" fontSize={10}>✗ Higher memory: 200×200×16 voxels per frame</text>
    </svg>
  );
}

export default function AV2() {
  return (
    <div style={S.page}>
      <Link to="/autonomous" style={S.back}>← Autonomous Vehicles</Link>
      <div style={S.badge}>MÓDULO 02</div>
      <h1 style={S.h1}>{mod.title}</h1>
      <p style={S.sub}>{mod.subtitle}</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Detecção 3D em LiDAR — PointPillars e CenterPoint</h2>
        <p style={S.p}>A deteção de objetos 3D a partir de nuvens de pontos LiDAR é um problema central em percepção autónoma. As nuvens de pontos são irregulares e esparsas — não se encaixam diretamente nas arquiteturas CNN desenvolvidas para imagens. O PointPillars (Lang et al., 2019) resolve isto dividindo o espaço em colunas verticais (pillars), codificando os pontos em cada pilar com uma pequena rede (PointNet), e projetando os resultados numa pseudo-imagem BEV que pode ser processada por uma CNN 2D convencional. Este approach atinge 40.1 mAP no nuScenes com inferência em tempo real a 62 Hz.</p>
        <p style={S.p}>O CenterPoint (Yin et al., 2021) muda o paradigma de anchor-based para center-based: em vez de definir ancoras 3D rotacionadas e prever offsets, a rede prediz um heatmap de centros de objetos, a partir do qual regride tamanho, orientação e velocidade. Esta formulação é invariante à rotação (os anchors orientados introduziam bias de ângulo) e integra naturalmente o módulo de tracking pela previsão de velocidade. Atinge 58.0 mAP, +18 pontos face ao PointPillars, e é a base de praticamente todos os sistemas competitivos actuais.</p>
        <div style={S.diagram}><PointPillarsDiagram /></div>
        <div style={S.highlight}>O TransFusion (Bai et al., 2022) empurra a fronteira para 67.3 mAP ao usar atenção transformer para fundir features de LiDAR e câmera. A chave é o "query initialization" baseado nos centros do LiDAR — fornece posições de objetos candidatos à câmera para refinamento, em vez de tentar fundir modalidades sem ancoragem espacial.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Percepção BEV — Lift-Splat-Shoot e BEVDet</h2>
        <p style={S.p}>A percepção em Bird's Eye View (BEV) transforma imagens de perspetiva em representações top-down onde carros, peões e obstáculos têm tamanho consistente independente da distância — muito mais natural para planeamento de trajetórias do que a perspetiva deformada de uma câmera frontal. O desafio central é a estimativa de profundidade: sem profundidade explícita, não é possível "levantar" pixels de perspetiva para o espaço 3D.</p>
        <p style={S.p}>O Lift-Splat-Shoot (LSS, Philion &amp; Fidler, 2020) resolve isto de forma elegante: uma rede prediz, para cada pixel, uma distribuição de profundidade discretizada (por exemplo, 41 bins de 1m a 60m). Multiplicando cada feature de pixel pela sua distribuição de profundidade, obtém-se uma nuvem de pontos de features que é depois projetada na grelha BEV por sum-pooling (o "splat"). A operação "shoot" refere-se ao ray casting original. O BEVDet e o BEVDepth melhoram o LSS com loss de profundidade supervisionada por LiDAR, melhorando significativamente a precisão geométrica.</p>
        <div style={S.diagram}><BEVDiagram /></div>
        <div style={S.note}>O BEVFormer (Li et al., 2022) usa atenção espacial-temporal deformável para agregar features de múltiplas câmeras e frames temporais no espaço BEV, atingindo 56.9 NDS sem LiDAR — surpreendentemente próximo de sistemas LiDAR-only de 2020.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Fusão Multi-modal — BEVFusion</h2>
        <p style={S.p}>O BEVFusion (Liu et al., MIT 2022; Liang et al., PKU 2022 — dois papers simultâneos independentes) estabeleceu o paradigma dominante de fusão multi-modal para percepção autónoma. A intuição central é fundir câmera e LiDAR no espaço BEV em vez de no espaço 3D raw — as duas modalidades têm geometrias muito diferentes, mas ambas podem ser transformadas para uma representação BEV comum onde a fusão por concatenação é geométricamente coerente.</p>
        <p style={S.p}>A branch do LiDAR processa a nuvem de pontos com um voxel encoder (VoxelNet ou equivalente) e projeta em BEV. A branch da câmera usa LSS ou similar para fazer depth lifting e projetar em BEV. As duas representações BEV são concatenadas e processadas por um BEV encoder (série de convoluções) que aprende a fundir as modalidades. Uma cabeça de deteção CenterPoint-style prediz os objetos finais. O resultado: 70.2 NDS no nuScenes, +4.4 sobre LiDAR-only e +6.4 sobre câmera-only, demonstrando que a fusão é verdadeiramente complementar.</p>
        <div style={S.diagram}><BEVFusionDiagram /></div>
        <div style={S.note}>A chave do sucesso do BEVFusion vs fusões anteriores é o alinhamento semântico no espaço BEV: quando um poste aparece no LiDAR como pontos esparsos, a câmera contribui com textura e cor; quando um carro está ocluído no LiDAR, a câmera detecta-o pela aparência. A fusão no mesmo espaço geométrico maximiza esta complementaridade.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Segmentação Semântica — SegFormer e Panoptic</h2>
        <p style={S.p}>A segmentação semântica atribui uma classe a cada pixel da imagem — essencial para entender onde está a estrada, onde estão as faixas, onde estão os peões. Architecturas clássicas como o DeepLab usavam convoluções dilatadas para manter resolução espacial. O SegFormer (Xie et al., 2021) introduz um encoder transformer hierárquico (Mix Transformer, MiT) que processa imagens a múltiplas escalas com atenção de complexidade linear, e um decoder MLP extremamente simples que agrega features de todas as escalas sem necessidade de atenção pesada.</p>
        <p style={S.p}>O SegFormer-B5 atinge 84.0 mIoU no Cityscapes com 82M parâmetros, superando arquiteturas CNN muito mais pesadas. A segmentação panóptica vai além da semântica: trata "coisas" (objetos contáveis como carros, peões) com segmentação de instâncias, e "coisas de fundo" (estrada, céu, vegetação) com segmentação semântica. O Mask2Former (83.3 mIoU) unifica estes dois objetivos numa única arquitetura baseada em transformer.</p>
        <div style={S.diagram}><SegmentationDiagram /></div>
        <div style={S.highlight}>Para veículos autónomos, a segmentação de lane é crítica: não basta detectar "estrada" — o sistema precisa de identificar marcações de faixa individuais, tipo de linha (sólida vs tracejada), setas de direção, e passadeiras. Redes especializadas como o LaneNet e o UFLD (Ultra Fast Lane Detection) operam a 300+ FPS para este caso específico.</div>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Ocupância 3D — Beyond Bounding Boxes</h2>
        <p style={S.p}>As bounding boxes 3D têm uma limitação fundamental: assumem que todos os objetos relevantes pertencem a uma das classes treinadas. Mas o mundo real está cheio de objetos indefinidos — um sofá caído numa autoestrada, um boneco de neve, um ramo de árvore, um caixote do lixo tombado. A representação de ocupância 3D resolve isto dividindo o espaço em volta do veículo numa grelha de voxels onde cada célula tem estado: livre, ocupado, ou desconhecido. Não é necessário classificar o que ocupa o espaço — basta saber que está ocupado.</p>
        <p style={S.p}>A Tesla apresentou o Tesla OCC em 2022: uma grelha de 200×200×16 voxels cobrindo 100m×100m×8m em volta do veículo. A rede prevê ocupância a partir das 8 câmeras (sem LiDAR), usando BEV transformers com atenção temporal multi-frame. Crucialmente, o sistema distingue se o voxel ocupado é dinâmico (veículo em movimento) ou estático. O TPVFormer e UniOcc são abordagens académicas que generalizam para qualquer sensor. A Apple, Waymo e outros exploram variantes que integram semantics opcionais: os voxels têm tanto estado de ocupância como probabilidade de classe.</p>
        <div style={S.diagram}><OccupancyDiagram /></div>
        <div style={S.note}>O modelo de ocupância aumenta o custo computacional significativamente: em vez de prever N caixas (tipicamente &lt;100 objetos), prevê-se O(10^5) voxels por frame. A compressão com redes espigas (SparseConv) e representações octree são essenciais para manter latência aceitável em hardware embarcado.</div>
      </div>
        <hr style={S.divider} />
        <div style={S.section}>
          <h2 style={S.h2}>6. Síntese do Módulo</h2>
          <div style={S.highlight}>
            <ul style={{paddingLeft:'1.2rem', margin:0}}>
                            <li style={{marginBottom:"0.4rem"}}><strong>Detecção 3D em LiDAR — PointPillars e CenterPoint</strong> — PointPillars voxeliza a point cloud em pilares 2D para convoluções eficientes (106fps); CenterPoint detecta objectos pelos seus centros em BEV, melhorando precisão em objectos pequenos como peões e ciclistas.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Percepção BEV — Lift-Splat-Shoot e BEVDet</strong> — Lift-Splat-Shoot transforma features de câmera perspectiva para Bird's Eye View usando profundidade prevista; BEVDet e BEVDepth melhoram esta abordagem com supervision de profundidade — standard industrial para percepção multi-câmera.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Fusão Multi-modal — BEVFusion</strong> — BEVFusion unifica features de câmera e LiDAR em espaço BEV comum, evitando a perda de informação de fusão tardia; supera métodos LiDAR-only em detecção de pedestres onde a textura da câmera é informativa.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Segmentação Semântica — SegFormer e Panoptic</strong> — segmentação semântica classifica cada pixel (estrada, passeio, veículo); segmentação panoptica combina semântica (coisas + coisas contáveis) num output unificado; crítico para delimitação de espaço navegável.</li>
              <li style={{marginBottom:"0.4rem"}}><strong>Ocupância 3D — Beyond Bounding Boxes</strong> — grelhas de ocupância 3D (SurroundOcc, OpenOccupancy) representam cada voxel do espaço como ocupado/livre/desconhecido; superiores a bounding boxes para obstáculos de forma irregular como detritos na estrada.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
